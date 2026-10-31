// @ts-nocheck
// ─── WJEC/Eduqas Mock Exam Data ──────────────────────────────────────────────
// WJEC C700QS English Language: 6 mock exam papers (3x Component 1, 3x Component 2)
// Component 1: 20th Century Literature Reading + Creative Prose Writing
// Component 2: 19th/21st Century Non-Fiction Reading + Transactional Writing

/**
 * WHAT WAS WRONG (27 September 2026). These six papers are live: they are in
 * allMockExamPapers (src/data/mock-exams.ts), which the mock-exam pages serve.
 * The three Component 2 papers named six writers for their sources, and not
 * one of the six passages was by the writer named.
 *   - Mock 1, Source B: "From an essay by Thomas Carlyle, 'The Condition of
 *     England Question', 1847". Carlyle wrote no essay of that name in 1847:
 *     "Condition-of-England Question" is the first chapter of his Chartism
 *     (1839), and none of the passage's eleven sentences is in Past and
 *     Present (1843), whose first chapter opens "The condition of England".
 *     Its first sentence dated itself 1847, and its third marvelled at the
 *     telegraph.
 *   - Mocks 2 and 3, Source B: "a personal essay by Raymond Williams,
 *     'Culture and the Working Man', 1960" and "an autobiography by Richard
 *     Hoggart, 'The Uses of Literacy', 1957". An audit note in this file (28
 *     April 2026, FC20) recorded that both were "paraphrase composition, not
 *     verbatim". The second gave its narrator a stonemason for a father, which
 *     is Carlyle's biography. Both writers are in UK copyright: had the
 *     passages been theirs, 200 words of each would have been far beyond fair
 *     dealing.
 *   - Source A of all three: the same note recorded that "Dr Elena Kowalski"
 *     and "Dr James Chen" are not real authors and that the passage labelled
 *     Naomi Klein, "This Changes Everything", 2014, is not from her book.
 * The note left every label printing. Students were asked "How does Naomi
 * Klein use evidence" and "How does Dr Chen use evidence", and the model
 * answers credited the invented words to Klein, Williams, Hoggart and Carlyle.
 *
 * WHAT IT IS NOW.
 *   - Each Source B is a genuine nineteenth-century passage, cut by script
 *     from the Project Gutenberg text and never retyped. The papers stand for
 *     Eduqas C700QS/2, whose two sources are one nineteenth-century and one
 *     twenty-first-century text (src/data/exam-guides/wjec-guide.ts), so the
 *     "20th Century" Williams and Hoggart sources did not fit the paper
 *     either. Each replacement keeps the focus of the passage it replaces:
 *       Mock 1: Carlyle, Past and Present, book III, chapter II, "Gospel of
 *         Mammonism" (Gutenberg #13534), from "We call it a Society" to "but
 *         nothing more." The invented passage's isolation and indifference,
 *         in words Carlyle did write: a society whose only bond is payment.
 *       Mock 2: John Ruskin, Modern Painters, volume III (1856), part IV,
 *         chapter XVII, the end of section 23 and section 24 (Gutenberg
 *         #38923), with a French quotation, the words introducing it and the
 *         two sentences after it cut, marked [...]. An old labourer's
 *         patience against modern haste becomes Ruskin on impatience, novelty
 *         and the railway.
 *       Mock 3: William Cobbett, Rural Rides, the entry written at Reigate on
 *         20 October 1825 (Gutenberg #34238), with four sentences cut, marked
 *         [...]. A son writing of his father's labour becomes an eye-witness
 *         at a farm sale, blaming a system that "has ground the labourers
 *         down".
 *     The Gutenberg texts mark italics with underscores; the site cannot show
 *     italics, so they are dropped, and the labels say so.
 *   - Each passage was compared character by character with a fresh copy
 *     of its Gutenberg text, and word by word with scans of
 *     nineteenth-century printings on archive.org (27 September 2026). The
 *     scans showed that two of the Gutenberg texts are later editions, so
 *     each label now names the one it follows. Gutenberg's Carlyle is a
 *     later reprint that prints "woe" where the 1843 and 1890 printings have
 *     "wo" and differs from them in a few marks, and its Cobbett is the T.
 *     Nelson and Sons edition, which prints "Everything" and "farmhouse"
 *     where the 1830 edition has "Every thing" and "farm-house". Neither
 *     changes a word a student would quote. One slip in Gutenberg's Carlyle,
 *     a missing question mark, is printed as that edition has it (see
 *     WJEC_C2_SOURCE_B_1 for why it is not restored).
 *   - Each Source A is kept word for word, except that Mock 2's no longer
 *     credits an unsourced study to the University of Cambridge, and each is
 *     labelled as specially written for the site.
 *   - Every question, mark scheme and model answer that named those writers
 *     or quoted those passages was rewritten for the new sources.
 *
 * scripts/check-mock-exam-extracts.mjs (26 September 2026), and a reading of
 * every answer, also found model answers asserting what their extracts do not
 * say. Each is corrected below, so that every quotation is in its extract and
 * the analysis is true of the words quoted:
 *   - c1-m1-q2 quoted "Now Mr Walsh shops online" (the text has "shopped")
 *     and called "bought" and "came" present tense; c1-m1-q3 quoted "more
 *     deliberately, she turned the sign", dropping words without marking the
 *     cut, and gave Mr Walsh a loneliness the text never mentions; c1-m1-q4
 *     said the piece never names the forces closing the shop, when its first
 *     paragraph names the supermarket;
 *   - c1-m2-q4 said Henry "can't look up" (he looks down at the soil);
 *   - c1-m3-q2 said the smell is recycled through the building's lungs (the
 *     air is), and c1-m3-q4 quoted "the only air that wasn't recycled",
 *     another unmarked cut;
 *   - c2-m1-q2 said propaganda "had to convince", which the text does not;
 *   - c2-m2-q1 credited the passage with "likes and follower counts", which
 *     it never mentions, and c2-m2-q2 cited figures of 70% and 62% and
 *     quoted "a thirteen-year-old cannot eat breakfast without checking
 *     likes", "something has gone fundamentally wrong" and "We are witnessing
 *     a crisis", none of them in a passage whose only percentage is 14%;
 *   - c2-m3-q2 quoted "It is not a future problem", "calculated" and a
 *     repeated "now", none of which the passage has.
 * A second reading, against the new sources, found more of the same kind:
 *   - c1-m1-q1 asked for five things about "the shop and its owner" and
 *     answered with two that are about neither (the rain, the empty
 *     street), which a mark scheme would not credit;
 *   - c1-m2-q4 said Henry "does not fully understand" straight after
 *     quoting "Then he understood."; what he does not yet know is which son;
 *   - c1-m3-q1 listed "She watches pigeons from her window", which the text
 *     implies but does not say, in a question that asks what the text says;
 *   - c2-m1-q2 quoted "the algorithm", which the passage always begins with
 *     a capital, and c2-m1-q3 embedded "call it a Society" in a sentence
 *     it made ungrammatical;
 *   - c2-m3-q3 asked about "social inequality", which Source A never
 *     discusses: its victims are the planet and future generations. It now
 *     asks about the harm an economic system does and who is made to pay;
 *   - c2-m3-q4 faulted Cobbett for "assertion rather than proof", when his
 *     proof is the four sentences this extract cuts. A model answer must not
 *     blame a writer for what an editor removed.
 * The Component 1 labels said "Original literary fiction composition", which
 * a student can read as "the original text"; they now say, as the Source A
 * labels do, that the extracts were specially written.
 * Component 2 Questions 1 of Mocks 2 and 3 asked for four points for five
 * marks, and Component 1 Questions 1 of Mocks 1 and 2 pointed to line numbers
 * the site does not print; they now ask for five points and name paragraphs.
 * The stray quotation mark closing the third Component 1 extract is removed.
 *
 * NOT FIXED: the question pattern here (four reading questions of 5, 10, 10
 * and 15 marks, one writing task of 40) is not the one the site's own Eduqas
 * mark schemes give (src/lib/marking/mark-schemes/eduqas-lang.ts), nor is
 * the Component 2 writing task, one of 40 marks split 20, 12 and 8, where
 * that scheme has two tasks of 20, each marked 12 and 8.
 * Component 1 no longer falls under this note (31 October 2026). Its three
 * mocks set Eduqas's five reading questions, worth 5, 5, 10, 10 and 10 and
 * labelled 01 to 05, and one story from four titles, labelled 11. Their
 * extracts are twentieth-century fiction (The Great Gatsby, Chapters IX and
 * VIII; Animal Farm, Chapter IX), cut by script from src/data/full-texts and
 * labelled with author, work and chapter, so the 27 September notes above on
 * the Component 1 extracts, their questions and their "specially written"
 * labels describe passages that are gone. The comment above the Component 1
 * papers records the restructure and the corrections a second reading made.
 * Component 2 no longer falls under it either (24 October 2026). Its three
 * mocks set Eduqas's six reading questions, worth 3, 10, 3, 10, 4 and 10 and
 * labelled 1.1 to 1.6, and two compulsory writing tasks of 20, each marked 12
 * and 8, labelled 2.1 and 2.2, as C700U20-1 does; so the 27 September note
 * above that their Questions 1 "now ask for five points" describes questions
 * that are gone (Question 1.1 is three short questions). The comment above
 * the Component 2 papers records the restructure and the corrections a
 * second reading made.
 */

// QA 2026-08-23: repointed from the aggregator to the type-only leaf so this
// lazy loader source cannot reach `src/data/mock-exams.ts` (which statically
// imports every bank) if the `type` keyword is ever dropped here.
import type { MockExamPaper } from './mock-exams/types'

// ─── Component 1 Literary Extracts ────────────────────────────────────────────

// Since 31 October 2026, three passages of twentieth-century fiction, cut by
// script from src/data/full-texts in whole paragraphs and never retyped: The
// Great Gatsby, Chapter IX (mock 1) and Chapter VIII (mock 3), and Animal
// Farm, Chapter IX (mock 2). Until then these constants held passages written
// for the site. After them come Eduqas's bands for each Component 1 question,
// in this file's own words, from src/data/mark-scheme-guides/eduqas-lang-comp1.ts.
const WJEC_C1_EXTRACT_1 = `One of my most vivid memories is of coming back West from prep school and later from college at Christmas time. Those who went farther than Chicago would gather in the old dim Union Street station at six o’clock of a December evening, with a few Chicago friends, already caught up into their own holiday gayeties, to bid them a hasty good-by. I remember the fur coats of the girls returning from Miss This-or-That’s and the chatter of frozen breath and the hands waving overhead as we caught sight of old acquaintances, and the matchings of invitations: “Are you going to the Ordways’? the Herseys’? the Schultzes’?” and the long green tickets clasped tight in our gloved hands. And last the murky yellow cars of the Chicago, Milwaukee & St. Paul railroad looking cheerful as Christmas itself on the tracks beside the gate.

When we pulled out into the winter night and the real snow, our snow, began to stretch out beside us and twinkle against the windows, and the dim lights of small Wisconsin stations moved by, a sharp wild brace came suddenly into the air. We drew in deep breaths of it as we walked back from dinner through the cold vestibules, unutterably aware of our identity with this country for one strange hour, before we melted indistinguishably into it again.

That’s my Middle West—not the wheat or the prairies or the lost Swede towns, but the thrilling returning trains of my youth, and the street lamps and sleigh bells in the frosty dark and the shadows of holly wreaths thrown by lighted windows on the snow. I am part of that, a little solemn with the feel of those long winters, a little complacent from growing up in the Carraway house in a city where dwellings are still called through decades by a family’s name. I see now that this has been a story of the West, after all—Tom and Gatsby, Daisy and Jordan and I, were all Westerners, and perhaps we possessed some deficiency in common which made us subtly unadaptable to Eastern life.

Even when the East excited me most, even when I was most keenly aware of its superiority to the bored, sprawling, swollen towns beyond the Ohio, with their interminable inquisitions which spared only the children and the very old—even then it had always for me a quality of distortion. West Egg, especially, still figures in my more fantastic dreams. I see it as a night scene by El Greco: a hundred houses, at once conventional and grotesque, crouching under a sullen, overhanging sky and a lustreless moon. In the foreground four solemn men in dress suits are walking along the sidewalk with a stretcher on which lies a drunken woman in a white evening dress. Her hand, which dangles over the side, sparkles cold with jewels. Gravely the men turn in at a house—the wrong house. But no one knows the woman’s name, and no one cares.

After Gatsby’s death the East was haunted for me like that, distorted beyond my eyes’ power of correction. So when the blue smoke of brittle leaves was in the air and the wind blew the wet laundry stiff on the line I decided to come back home.

There was one thing to be done before I left, an awkward, unpleasant thing that perhaps had better have been let alone. But I wanted to leave things in order and not just trust that obliging and indifferent sea to sweep my refuse away. I saw Jordan Baker and talked over and around what had happened to us together, and what had happened afterward to me, and she lay perfectly still, listening, in a big chair.

She was dressed to play golf, and I remember thinking she looked like a good illustration, her chin raised a little jauntily, her hair the color of an autumn leaf, her face the same brown tint as the fingerless glove on her knee. When I had finished she told me without comment that she was engaged to another man. I doubted that, though there were several she could have married at a nod of her head, but I pretended to be surprised. For just a minute I wondered if I wasn’t making a mistake, then I thought it all over again quickly and got up to say good-by.`

const WJEC_C1_EXTRACT_1_SOURCE =
  'F. Scott Fitzgerald, The Great Gatsby (1925), Chapter IX. Text: the first edition (New York, 1925), as transcribed by Wikisource.'

const WJEC_C1_EXTRACT_2 = `For the next two days Boxer remained in his stall. The pigs had sent out a large bottle of pink medicine which they had found in the medicine chest in the bathroom, and Clover administered it to Boxer twice a day after meals. In the evenings she lay in his stall and talked to him, while Benjamin kept the flies off him. Boxer professed not to be sorry for what had happened. If he made a good recovery, he might expect to live another three years, and he looked forward to the peaceful days that he would spend in the corner of the big pasture. It would be the first time that he had had leisure to study and improve his mind. He intended, he said, to devote the rest of his life to learning the remaining twenty-two letters of the alphabet.

However, Benjamin and Clover could only be with Boxer after working hours, and it was in the middle of the day when the van came to take him away. The animals were all at work weeding turnips under the supervision of a pig, when they were astonished to see Benjamin come galloping from the direction of the farm buildings, braying at the top of his voice. It was the first time that they had ever seen Benjamin excited—indeed, it was the first time that anyone had ever seen him gallop. "Quick, quick!" he shouted. "Come at once! They're taking Boxer away!" Without waiting for orders from the pig, the animals broke off work and raced back to the farm buildings. Sure enough, there in the yard was a large closed van, drawn by two horses, with lettering on its side and a sly-looking man in a low-crowned bowler hat sitting on the driver's seat. And Boxer's stall was empty.

The animals crowded round the van. "Good-bye, Boxer!" they chorused, "good-bye!"

"Fools! Fools!" shouted Benjamin, prancing round them and stamping the earth with his small hoofs. "Fools! Do you not see what is written on the side of that van?"

That gave the animals pause, and there was a hush. Muriel began to spell out the words. But Benjamin pushed her aside and in the midst of a deadly silence he read:

"'Alfred Simmonds, Horse Slaughterer and Glue Boiler, Willingdon. Dealer in Hides and Bone-Meal. Kennels Supplied.' Do you not understand what that means? They are taking Boxer to the knacker's!"

A cry of horror burst from all the animals. At this moment the man on the box whipped up his horses and the van moved out of the yard at a smart trot. All the animals followed, crying out at the tops of their voices. Clover forced her way to the front. The van began to gather speed. Clover tried to stir her stout limbs to a gallop, and achieved a canter. "Boxer!" she cried. "Boxer! Boxer! Boxer!" And just at this moment, as though he had heard the uproar outside, Boxer's face, with the white stripe down his nose, appeared at the small window at the back of the van.

"Boxer!" cried Clover in a terrible voice. "Boxer! Get out! Get out quickly! They're taking you to your death!"

All the animals took up the cry of "Get out, Boxer, get out!" But the van was already gathering speed and drawing away from them. It was uncertain whether Boxer had understood what Clover had said. But a moment later his face disappeared from the window and there was the sound of a tremendous drumming of hoofs inside the van. He was trying to kick his way out. The time had been when a few kicks from Boxer's hoofs would have smashed the van to matchwood. But alas! his strength had left him; and in a few moments the sound of drumming hoofs grew fainter and died away. In desperation the animals began appealing to the two horses which drew the van to stop. "Comrades, comrades!" they shouted. "Don't take your own brother to his death!" But the stupid brutes, too ignorant to realise what was happening, merely set back their ears and quickened their pace. Boxer's face did not reappear at the window. Too late, someone thought of racing ahead and shutting the five-barred gate; but in another moment the van was through it and rapidly disappearing down the road. Boxer was never seen again.

Three days later it was announced that he had died in the hospital at Willingdon, in spite of receiving every attention a horse could have. Squealer came to announce the news to the others. He had, he said, been present during Boxer's last hours.`

const WJEC_C1_EXTRACT_2_SOURCE =
  'George Orwell, Animal Farm (1945), Chapter IX. Text: Project Gutenberg Australia.'

const WJEC_C1_EXTRACT_3 = `It was dawn now on Long Island and we went about opening the rest of the windows down-stairs, filling the house with gray-turning, gold-turning light. The shadow of a tree fell abruptly across the dew and ghostly birds began to sing among the blue leaves. There was a slow, pleasant movement in the air, scarcely a wind, promising a cool, lovely day.

“I don’t think she ever loved him.” Gatsby turned around from a window and looked at me challengingly. “You must remember, old sport, she was very excited this afternoon. He told her those things in a way that frightened her—that made it look as if I was some kind of cheap sharper. And the result was she hardly knew what she was saying.”

He sat down gloomily.

“Of course she might have loved him just for a minute, when they were first married—and loved me more even then, do you see?”

Suddenly he came out with a curious remark.

“In any case,” he said, “it was just personal.”

What could you make of that, except to suspect some intensity in his conception of the affair that couldn’t be measured?

He came back from France when Tom and Daisy were still on their wedding trip, and made a miserable but irresistible journey to Louisville on the last of his army pay. He stayed there a week, walking the streets where their footsteps had clicked together through the November night and revisiting the out-of-the-way places to which they had driven in her white car. Just as Daisy’s house had always seemed to him more mysterious and gay than other houses, so his idea of the city itself, even though she was gone from it, was pervaded with a melancholy beauty.

He left feeling that if he had searched harder, he might have found her—that he was leaving her behind. The day-coach—he was penniless now—was hot. He went out to the open vestibule and sat down on a folding-chair, and the station slid away and the backs of unfamiliar buildings moved by. Then out into the spring fields, where a yellow trolley raced them for a minute with people in it who might once have seen the pale magic of her face along the casual street.

The track curved and now it was going away from the sun, which, as it sank lower, seemed to spread itself in benediction over the vanishing city where she had drawn her breath. He stretched out his hand desperately as if to snatch only a wisp of air, to save a fragment of the spot that she had made lovely for him. But it was all going by too fast now for his blurred eyes and he knew that he had lost that part of it, the freshest and the best, forever.

It was nine o’clock when we finished breakfast and went out on the porch. The night had made a sharp difference in the weather and there was an autumn flavor in the air. The gardener, the last one of Gatsby’s former servants, came to the foot of the steps.

“I’m going to drain the pool to-day, Mr. Gatsby. Leaves’ll start falling pretty soon, and then there’s always trouble with the pipes.”

“Don’t do it to-day,” Gatsby answered. He turned to me apologetically. “You know, old sport, I’ve never used that pool all summer?”

I looked at my watch and stood up.

“Twelve minutes to my train,”

I didn’t want to go to the city. I wasn’t worth a decent stroke of work, but it was more than that—I didn’t want to leave Gatsby. I missed that train, and then another, before I could get myself away.

“I’ll call you up,” I said finally.

“Do, old sport.”

“I’ll call you about noon.”

We walked slowly down the steps.

“I suppose Daisy’ll call too.” He looked at me anxiously, as if he hoped I’d corroborate this.

“I suppose so.”

“Well, good-by.”

We shook hands and I started away. Just before I reached the hedge I remembered something and turned around.

“They’re a rotten crowd,” I shouted across the lawn. “You’re worth the whole damn bunch put together.”

I’ve always been glad I said that. It was the only compliment I ever gave him, because I disapproved of him from beginning to end. First he nodded politely, and then his face broke into that radiant and understanding smile, as if we’d been in ecstatic cahoots on that fact all the time. His gorgeous pink rag of a suit made a bright spot of color against the white steps, and I thought of the night when I first came to his ancestral home, three months before. The lawn and drive had been crowded with the faces of those who guessed at his corruption—and he had stood on those steps, concealing his incorruptible dream, as he waved them good-by.

I thanked him for his hospitality. We were always thanking him for that—I and the others.

“Good-by,” I called. “I enjoyed breakfast, Gatsby.”`

const WJEC_C1_EXTRACT_3_SOURCE =
  'F. Scott Fitzgerald, The Great Gatsby (1925), Chapter VIII. Text: the first edition (New York, 1925), as transcribed by Wikisource.'

const WJEC_C1_Q01_MARKING = [
  'One mark for each correct, separate point taken from the lines the question names, up to 5.',
  'A point the lines suggest counts as well as one they state, as long as the lines support it.',
  'No mark for a detail from outside those lines, for the same point made twice, or for a whole sentence copied out without the point picked out of it.',
]

const WJEC_C1_Q02_MARKING = [
  '5 marks: sharp, accurate points that notice less obvious things, each backed by a well-chosen quotation, with subject terms used to explain the effect of the words.',
  '4 marks: accurate, well-supported points, with clear comment on how the language creates them.',
  '3 marks: several relevant points, each backed by a quotation, with some comment on the words the writer chose.',
  '2 marks: one or two simple, obvious points, with some support.',
  '1 mark: a very slight answer, perhaps one point with little or no support.',
  'All five marks are for language (AO2), and only the lines the question names count. A short, focused answer can earn full marks.',
]

const WJEC_C1_Q03_MARKING = [
  'Band 5 (9 to 10 marks): thorough and perceptive across the whole of the lines named, analysing in detail how the language works, including subtler choices, with well-judged subject terms.',
  'Band 4 (7 to 8 marks): detailed, with some real insight, and beginning to analyse how particular words affect the reader, with accurate subject terms.',
  'Band 3 (5 to 6 marks): explores the lines in some depth and begins to explain what particular words show, using some subject terms correctly.',
  'Band 2 (3 to 4 marks): finds some relevant details and says simple things about them; may name a technique without explaining it.',
  'Band 1 (1 to 2 marks): mentions a detail or two that fit the question, with very little explanation.',
  'This question assesses language (AO2), not structure. Material from outside the lines named earns nothing, and a quotation with no explanation earns little.',
]

const WJEC_C1_Q04_MARKING = [
  'Band 5 (9 to 10 marks): thorough and perceptive, analysing in detail how language and structure work together, including the subtler choices.',
  'Band 4 (7 to 8 marks): detailed, with some real insight, and beginning to analyse how the words and the order of events work on the reader.',
  'Band 3 (5 to 6 marks): explores the lines in some depth and begins to explain how the words and the order of events create the effect.',
  'Band 2 (3 to 4 marks): finds some relevant details and says simple things about them; techniques are named rather than explained.',
  'Band 1 (1 to 2 marks): mentions a detail or two that fit the question, with very little explanation.',
  'This question assesses language and structure together (AO2): what happens, in what order and at what pace, as well as the words chosen. An answer only about words, or one that retells the events, answers half the question.',
]

const WJEC_C1_Q05_MARKING = [
  "Band 5 (9 to 10 marks): a persuasive, perceptive judgement that takes in the whole passage, with every reference well chosen, showing real insight into how the writer shapes the reader's thoughts and feelings.",
  "Band 4 (7 to 8 marks): a clear, well-argued judgement that stays close to the text, with well-chosen evidence and real discussion of the writer's choices.",
  "Band 3 (5 to 6 marks): begins to judge the text, with sensible references and some sense of the passage as a whole and of the writer's choices.",
  'Band 2 (3 to 4 marks): gives a view backed by a few obvious references, with little on the whole passage or on how the writer works.',
  'Band 1 (1 to 2 marks): an opinion with little more than a passing reference to the text.',
  'This question assesses evaluation (AO4). You may agree, disagree or partly agree: what is rewarded is a clear judgement, held to from start to finish, drawn from the final lines and from the passage as a whole. Retelling the story, or using only the final lines, holds an answer down.',
]

const WJEC_C1_Q11_MARKING = {
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

// ─── Component 2 Non-Fiction Extracts ─────────────────────────────────────────

const WJEC_C2_SOURCE_A_1 = `The algorithm does not sleep. It works while we sleep, while we eat, while we make love and fight and forget why we started fighting in the first place. It watches us with the patient, unblinking attention of a creature that has all the time in the world and no emotional investment in what it sees. We think of the internet as a space of freedom, of infinite possibility, but we have created something far more controlling than any propaganda machine of the twentieth century could have dreamed of: a system that does not need to convince us of falsehood, only to ensure that we never encounter truth in the first place.

The social media platforms that mediate our public discourse employ algorithms that optimise for engagement. This might sound harmless - neutral, even - but engagement has nothing to do with truth. The algorithm cannot distinguish between a fact and a lie, but it can measure which one makes people feel more intensely. And what makes people feel most intensely? Outrage. Fear. Confirmation of their existing prejudices. The algorithm feeds us these things, not out of malice, but out of mathematical indifference. It is simply optimising for its profit model.`

const WJEC_C2_SOURCE_A_1_REF =
  'Specially written for The English Hub (not a published text): an article on social media algorithms'

// Gutenberg #13534, the middle of one paragraph and the start of the next,
// cut by script. KNOWN SLIP, LEFT AS THE EDITION HAS IT: Gutenberg's text has
// no question mark after "Where is thy brother", which every printing checked
// has (Boston and New York 1843, New York 1848, Chicago 1890, on
// archive.org). It is not restored by hand because
// scripts/check-mock-exam-extracts.mjs holds each extract to the edition its
// label names, mark for mark, and has no way to accept a verified
// correction; a hand-restored mark fails it. Restore it only together with
// such a mechanism.
const WJEC_C2_SOURCE_B_1 = `We call it a Society; and go about professing openly the totalest separation, isolation. Our life is not a mutual helpfulness; but rather, cloaked under due laws-of-war, named 'fair competition' and so forth, it is a mutual hostility. We have profoundly forgotten everywhere that Cash-payment is not the sole relation of human beings; we think, nothing doubting, that it absolves and liquidates all engagements of man. "My starving workers?" answers the rich Mill-owner: "Did not I hire them fairly in the market? Did I not pay them, to the last sixpence, the sum covenanted for? What have I to do with them more?"--Verily Mammon-worship is a melancholy creed. When Cain, for his own behoof, had killed Abel, and was questioned, "Where is thy brother" he too made answer, "Am I my brother's keeper?" Did I not pay my brother his wages, the thing he had merited from me?

O sumptuous Merchant-Prince, illustrious game-preserving Duke, is there no way of 'killing' thy brother but Cain's rude way! 'A good man by the very look of him, by his very presence with us as a fellow wayfarer in this Life-pilgrimage, promises so much:' woe to him if he forget all such promises, if he never know that they were given! To a deadened soul, seared with the brute Idolatry of Sense, to whom going to Hell is equivalent to not making money, all 'promises,' and moral duties, that cannot be pleaded for in Courts of Requests, address themselves in vain. Money he can be ordered to pay, but nothing more.`

const WJEC_C2_SOURCE_B_1_REF =
  'Thomas Carlyle, Past and Present (1843), book III, chapter II, "Gospel of Mammonism" (text of a later reprint, Project Gutenberg #13534; Carlyle\'s italics are not shown)'

const WJEC_C2_SOURCE_A_2 = `The average teenager now spends seven to nine hours per day consuming some form of media. For many, this consumption happens simultaneously: scrolling TikTok while watching Netflix while texting friends while doing homework. We call this "multitasking," but the neuroscience suggests something different is happening. The brain is not multitasking. Rather, it is rapidly switching between tasks, and each switch incurs a cognitive cost. What we experience as seamless is, neurologically, profoundly fragmented.

The consequences are significant. A 2023 study found that students who use social media while studying score on average 14% lower on assessments than those who do not. But the problem goes deeper than academic performance. Young people report unprecedented levels of anxiety and depression. They report feeling "fake," performing curated versions of themselves for an audience that may include thousands of strangers. They report a constant, underlying sense that they are not enough: not pretty enough, not funny enough, not interesting enough.`

const WJEC_C2_SOURCE_A_2_REF =
  'Specially written for The English Hub (not a published text): an article on young people and media. Its figures, and the study it mentions, are for practice and are not sourced'

// Gutenberg #38923, the end of section 23 and section 24, cut by script.
const WJEC_C2_SOURCE_B_2 = `And if we grow impatient under it, and seek to recover the mental energy by more quickly repeated and brighter novelty, it is all over with our enjoyment. There is no cure for this evil, any more than for the weariness of the imagination already described, but in patience and rest: if we try to obtain perpetual change, change itself will become monotonous; and then we are reduced to that old despair, "If water chokes, what will you drink after it?" And the two points of practical wisdom in this matter are, first, to be content with as little novelty as possible at a time; and, secondly, to preserve, as much as possible in the world, the sources of novelty.

I say, first, to be content with as little change as possible. If the attention is awake, and the feelings in proper train, a turn of a country road, with a cottage beside it, which we have not seen before, is as much as we need for refreshment; if we hurry past it, and take two cottages at a time, it is already too much: hence, to any person who has all his senses about him, a quiet walk along not more than ten or twelve miles of road a day, is the most amusing of all travelling; and all travelling becomes dull in exact proportion to its rapidity. Going by railroad I do not consider as travelling at all; it is merely "being sent" to a place, and very little different from becoming a parcel; the next step to it would of course be telegraphic transport [...] A man who really loves travelling would as soon consent to pack a day of such happiness into an hour of railroad, as one who loved eating would agree, if it were possible, to concentrate his dinner into a pill.`

const WJEC_C2_SOURCE_B_2_REF =
  'John Ruskin, Modern Painters, volume III (1856), part IV, chapter XVII, "The Moral of Landscape", from sections 23 and 24 (Project Gutenberg #38923). Ruskin has just quoted Wordsworth on "custom", the familiarity that dulls the delight of new sights'

const WJEC_C2_SOURCE_A_3 = `The climate crisis is not a future problem. It is happening now. We are not preparing for a catastrophe that might occur in fifty years. We are living through the early stages of a catastrophe that is already underway. The glaciers are melting. The oceans are warming. Extreme weather events - droughts, floods, hurricanes of unprecedented intensity - are becoming routine. And yet, in the midst of this crisis, we are paralysed by inaction.

The reasons for this paralysis are complex, but one factor stands out: we have constructed an economic system in which the price of a product bears no relationship to the true cost of its production. A cheap plastic bottle costs two pounds in the shop, but the true cost - measured in the carbon released in its manufacture, the energy required to transport it, the environmental damage caused by its disposal - is far higher. We have externalised the costs onto the planet and onto future generations. And because these costs do not appear on a price tag, they do not appear in our moral calculus.`

const WJEC_C2_SOURCE_A_3_REF =
  'Specially written for The English Hub (not a published text): an article on the climate crisis and the price of goods'

// Gutenberg #34238, one paragraph with four sentences cut, cut by script.
const WJEC_C2_SOURCE_B_3 = `Everything about this farmhouse was formerly the scene of plain manners and plentiful living. Oak clothes-chests, oak bedsteads, oak chests of drawers, and oak tables to eat on, long, strong, and well supplied with joint stools. Some of the things were many hundreds of years old. But all appeared to be in a state of decay and nearly of disuse. There appeared to have been hardly any family in that house, where formerly there were, in all probability, from ten to fifteen men, boys, and maids: and, which was the worst of all, there was a parlour. Aye, and a carpet and bell-pull too! One end of the front of this once plain and substantial house had been moulded into a "parlour;" and there was the mahogany table, and the fine chairs, and the fine glass, and all as bare-faced upstart as any stock-jobber in the kingdom can boast of. And there were the decanters, the glasses, the "dinner-set" of crockery-ware, and all just in the true stock-jobber style. And I dare say it has been 'Squire Charington and the Miss Charington's; and not plain Master Charington, and his son Hodge, and his daughter Betty Charington, all of whom this accursed system has, in all likelihood, transmuted into a species of mock gentlefolks, while it has ground the labourers down into real slaves. Why do not farmers now feed and lodge their work-people, as they did formerly? Because they cannot keep them upon so little as they give them in wages. This is the real cause of the change. There needs no more to prove that the lot of the working classes has become worse than it formerly was. This fact alone is quite sufficient to settle this point. [...] Judge, then, of the change that has taken place in the condition of these labourers! And be astonished, if you can, at the pauperism and the crimes that now disgrace this once happy and moral England.`

const WJEC_C2_SOURCE_B_3_REF =
  "William Cobbett, Rural Rides (1830), from the entry written at Reigate on 20 October 1825, after Cobbett had been to the sale of a farmer's goods (T. Nelson and Sons edition, Project Gutenberg #34238; Cobbett's italics are not shown)"

// ─── Mock Exam Papers ─────────────────────────────────────────────────────────

export const wjecMockExams: MockExamPaper[] = [
  // Component 1 mocks 1 to 3, restructured on 31 October 2026 to the paper
  // Eduqas sets (C700U10-1), as src/data/mark-scheme-guides/eduqas-lang-comp1.ts
  // describes it; src/__tests__/a-language-mock-is-the-boards-paper.test.ts
  // holds them to it. They set four reading questions worth 5, 10, 10 and 15
  // and offered two writing titles; Eduqas sets five worth 5, 5, 10, 10 and 10
  // (labelled 01 to 05), then one story from four titles (labelled 11). Their
  // extracts, written for the site, are now twentieth-century fiction (above),
  // so the NOT FIXED note in this file's header no longer holds for them. The
  // code is C700U10-1, the component's code (it was C700QS/1, the
  // qualification's), and the question ids are new (a1 to a5 and b1), because
  // src/store/exam-store.ts keeps a student's answers by question id: with the
  // old ids, a story written for the old Question 5 would have been shown, and
  // could have been sent to the marker, as an answer to the new Question 05.
  //
  // SECOND READING, 31 October 2026 (a checker, against each extract, the held
  // novels and the guide). Fixed:
  //   - Board wording: the instructions in Questions 01 to 05 and the Section B
  //     rubric repeated Eduqas's own sentences ("List five things you learn
  //     about ...", "You should refer to the language used in the text to
  //     support your answer", "how the writer has created these thoughts and
  //     feelings"); now in this file's words, asking for the same things.
  //   - Mock 1, Question 01: the Grade 6-7 answer split one point (who gathered
  //     where) into two; its points now match the credit list.
  //   - Mock 1, Question 04, Grade 8-9 began a sentence with a quotation in
  //     lower case; it is now joined to the sentence before.
  //   - Mock 2, Question 03 called Clover old ("old and slow", "her age"), which
  //     neither the extract nor Chapter IX says (Chapter I has her approaching
  //     middle life, Chapter X old); now "heavy", from her "stout limbs".
  //   - Mock 2, Question 03, Grade 8-9 leaned on lines before the section named
  //     (the "sly-looking man", Benjamin's first gallop), called the turn
  //     "structure" in a question on language, and said Muriel's spelling out
  //     shows "how slowly most of them read", when most cannot read at all;
  //     each now rests on the lines named.
  //   - Mock 2, Question 04 started at "Get out quickly!", mid-paragraph, while
  //     its answers quote "in a terrible voice" before it; it now starts where
  //     the paragraph does.
  //   - Mock 2, Question 04, Grade 8-9 said Clover's exclamations "shorten";
  //     each is longer than the last.
  //   - Mock 2, Section B: the model story's lost letter said "You said not to
  //     write until I had decided", when the story has Eileen, not Tom, taking
  //     time to decide; the letter now answers hers.
  //   - Mocks 2 and 3, Section B: each model story ran the set opening sentence
  //     on into a longer one; each now begins with the line as set.
  // ═══════════════════════════════════════════════════════════════════════════
  // WJEC COMPONENT 1, MOCK 1: The Great Gatsby, Chapter IX
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c1-mock-1',
    board: 'WJEC',
    paperNumber: 1,
    title: 'Component 1: 20th Century Literature Reading and Creative Prose Writing',
    subtitle: 'English Language C700U10-1, Mock Exam 1',
    code: 'C700U10-1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c1-m1-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully, then answer all the questions in this section. You are advised to spend about 10 minutes reading the extract and about 50 minutes answering the questions.\n\nSource: ${WJEC_C1_EXTRACT_1_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c1-m1-a1',
            questionNumber: 1,
            label: '01',
            questionText:
              'Read from the start of the extract, "One of my most vivid memories", to "to bid them a hasty good-by."\n\nList five things these lines tell you about the narrator\'s journeys home at Christmas.',
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'retrieval',
            extract: WJEC_C1_EXTRACT_1,
            extractSource: WJEC_C1_EXTRACT_1_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                "1. He travelled home at Christmas, first from prep school and later from college.\n2. Those going farther than Chicago gathered at the Union Street station.\n3. The station was old and dim.\n4. They met at six o'clock on a December evening.\n5. Friends from Chicago came to say a quick goodbye.",
            },
            markScheme: {
              'How the marks are given': WJEC_C1_Q01_MARKING,
              'Credit, for example': [
                "He came home from prep school and later from college; at Christmas; those going beyond Chicago gathered at the old, dim Union Street station; at six o'clock on a December evening; a few Chicago friends came; those friends were already caught up in their own holiday fun; they said a hasty goodbye.",
              ],
            },
          },
          {
            id: 'wjec-c1-m1-a2',
            questionNumber: 2,
            label: '02',
            questionText:
              'Read from "I remember the fur coats of the girls" to "on the tracks beside the gate."\n\nHow does the writer make the scene at the station seem exciting?\n\nSupport your answer with short quotations, and comment on the words the writer chooses.',
            marks: 5,
            suggestedTimeMinutes: 6,
            questionType: 'short-answer',
            extract: WJEC_C1_EXTRACT_1,
            extractSource: WJEC_C1_EXTRACT_1_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The writer fills the scene with lively, happy detail. The girls\' "fur coats" and "the chatter of frozen breath" combine sight and sound, and "frozen breath" makes the cold visible as people talk. The "hands waving overhead as we caught sight of old acquaintances" show the excitement of meeting again. The questions, "Are you going to the Ordways’? the Herseys’? the Schultzes’?", run together quickly, which captures the buzz of plans and parties. The detail of "the long green tickets clasped tight in our gloved hands" shows how precious the journey is. Finally, the train\'s "murky yellow cars" look "cheerful as Christmas itself", a simile that sums up the joy of going home.',
            },
            markScheme: {
              'How the marks are given': WJEC_C1_Q02_MARKING,
              'Credit, for example': [
                'Sight and sound together: "fur coats", "the chatter of frozen breath", hands "waving overhead".',
                'The run of questions about parties, which captures the buzz of the crowd.',
                'The tickets "clasped tight", and the simile "cheerful as Christmas itself".',
              ],
            },
          },
          {
            id: 'wjec-c1-m1-a3',
            questionNumber: 3,
            label: '03',
            questionText:
              'Read from "When we pulled out into the winter night" to "subtly unadaptable to Eastern life."\n\nWhat impressions do you get of the narrator\'s feelings about the Middle West in these lines?\n\nSupport your answer with short quotations, and analyse the writer\'s language using the right subject terms.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'analysis',
            extract: WJEC_C1_EXTRACT_1,
            extractSource: WJEC_C1_EXTRACT_1_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The narrator feels a deep love for the Middle West and a sense of belonging. The snow is "the real snow, our snow", and the possessive "our" shows that he feels it is part of him. The snow begins "to stretch out beside us and twinkle against the windows", which makes the landscape seem welcoming and magical. The cold air is "a sharp wild brace", and they "drew in deep breaths of it", as if the air itself revives them. The phrase "unutterably aware of our identity with this country" shows a feeling so strong that he cannot put it into words.\n\nIn the second paragraph he explains what the Middle West means to him. It is "not the wheat or the prairies or the lost Swede towns", the things outsiders might expect, but "the thrilling returning trains of my youth". The list of "the street lamps and sleigh bells in the frosty dark and the shadows of holly wreaths thrown by lighted windows on the snow" is full of warm, wintry images. He says "I am part of that", which shows that his home is part of who he is. He also admits being "a little complacent", which shows honesty. Finally he suggests that he and his friends "possessed some deficiency in common which made us subtly unadaptable to Eastern life", which hints that his love of home is also a sadness about the East.',
              'Grade 8-9':
                'The writer gives an impression of a love for the Middle West that is nostalgic, physical and bound up with youth, and the narrator\'s language turns a landscape into a part of himself.\n\nThe first paragraph is a memory of motion. The train pulls "out into the winter night", and the correction in "the real snow, our snow" moves from description to possession: this is not snow in general, but theirs. The verbs give the snow life, as it begins "to stretch out beside us and twinkle against the windows", and the "dim lights of small Wisconsin stations" pass like markers on the way home. The phrase "a sharp wild brace" makes the cold an energy, almost a tonic, and the long final sentence ends in a striking paradox: they are "unutterably aware of our identity with this country for one strange hour, before we melted indistinguishably into it again". The feeling is intense because it is brief, a moment of knowing who they are before they dissolve back into the place.\n\nThe second paragraph defines the Middle West by memory rather than geography. The narrator rejects the outsider\'s picture, "not the wheat or the prairies or the lost Swede towns", for a list of sensations: "the thrilling returning trains of my youth", "the street lamps and sleigh bells in the frosty dark", "the shadows of holly wreaths thrown by lighted windows on the snow". The repeated "and" strings them together like lights. His self-portrait is balanced and honest, "a little solemn with the feel of those long winters, a little complacent", and the repetition of "a little" keeps his pride modest. The detail of a city "where dwellings are still called through decades by a family’s name" suggests a place of continuity, where people are known.\n\nFinally, the memory becomes a judgement on the whole story: "this has been a story of the West, after all". He groups the characters, "Tom and Gatsby, Daisy and Jordan and I", as "Westerners" with "some deficiency in common which made us subtly unadaptable to Eastern life". The careful adverb "subtly" and the word "deficiency" make this a quiet admission of failure. So the impression is of a narrator who loves home most when he has learned what the East has cost him.',
            },
            markScheme: {
              'How the marks are given': WJEC_C1_Q03_MARKING,
              'Credit, for example': [
                'Belonging: "the real snow, our snow", "unutterably aware of our identity with this country".',
                'The magic of the journey: snow that seems "to stretch out beside us and twinkle", "a sharp wild brace".',
                'The Middle West as memory: "the thrilling returning trains of my youth", the list of street lamps, sleigh bells and holly wreaths.',
                'His honesty ("a little complacent") and the hint of failure in "subtly unadaptable to Eastern life".',
              ],
            },
          },
          {
            id: 'wjec-c1-m1-a4',
            questionNumber: 4,
            label: '04',
            questionText:
              'Read from "Even when the East excited me most" to "I decided to come back home."\n\nHow does the writer create an unsettling picture of the East in these lines?\n\nIn your answer, consider:\n- how the writer moves from what the East meant to him to the picture in his dreams\n- the words and phrases the writer chooses\n- how these affect the reader.\n\nSupport your answer with references to the text, using the right subject terms.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'analysis',
            extract: WJEC_C1_EXTRACT_1,
            extractSource: WJEC_C1_EXTRACT_1_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The writer begins by admitting that the East was exciting, "Even when the East excited me most", and that he knew "its superiority" to the "bored, sprawling, swollen towns beyond the Ohio". The three adjectives are unflattering about home, which shows that the East had its appeal. But then he turns: it "had always for me a quality of distortion". The word "distortion" suggests that things in the East looked wrong or twisted.\n\nHe describes West Egg as it appears "in my more fantastic dreams", as "a night scene by El Greco", a painter known for strange, stretched figures. The houses are "at once conventional and grotesque, crouching under a sullen, overhanging sky and a lustreless moon". The verb "crouching" personifies them as if they were hiding, and "sullen" and "lustreless" make the scene gloomy and lifeless.\n\nThe most disturbing image is "four solemn men in dress suits" carrying "a stretcher on which lies a drunken woman in a white evening dress". Her hand "sparkles cold with jewels", and the word "cold" makes the wealth seem heartless. The men "turn in at a house—the wrong house", and the dash makes the mistake feel shocking. The sentence "But no one knows the woman’s name, and no one cares" is the most unsettling of all, because it suggests a world where nobody matters to anyone. The section ends with the narrator deciding "to come back home", which shows how much the East has disturbed him.',
              'Grade 8-9':
                'The writer creates an unsettling picture by moving from an argument to a nightmare, so that the East is judged first by reason and then by a dream image that stays in the mind.\n\nThe first sentence is built on concession. "Even when the East excited me most, even when I was most keenly aware of its superiority" repeats "even when" to grant the East its appeal, and the scornful list of Western towns, "bored, sprawling, swollen", shows that the narrator is no simple patriot. Then the main clause turns: "even then it had always for me a quality of distortion." The delay makes "distortion" land with weight, and it shifts the description from the real to the warped.\n\nThe vision that follows is presented as a painting, "a night scene by El Greco", which tells us to expect stretched, uneasy forms and a stormy gloom. The houses are "at once conventional and grotesque", a paradox of the ordinary made monstrous, and they are "crouching under a sullen, overhanging sky and a lustreless moon", personified as cowering beneath a sky that broods over them. The present tense, "are walking", "lies", "dangles", makes the dream happen again as we read.\n\nThe central image is chillingly still: "four solemn men in dress suits" carry a stretcher with "a drunken woman in a white evening dress". Their solemnity and formal clothes are at odds with her condition, and the detail of her hand, which "sparkles cold with jewels", sets wealth against lifelessness. Then comes the error, "Gravely the men turn in at a house—the wrong house", where the dash and the repetition expose the emptiness of their gravity. The sentence with its balanced negatives, "But no one knows the woman’s name, and no one cares", sums up the East as a place of wealth without connection. The short paragraph that follows explains its effect, "After Gatsby’s death the East was haunted for me like that", and the haunting is so strong that the narrator chooses to leave. So the picture unsettles because it is dreamlike and exact at once: a world where people are carried to the wrong door and nobody notices.',
            },
            markScheme: {
              'How the marks are given': WJEC_C1_Q04_MARKING,
              'Credit, for example': [
                'Structure: the concession that the East excited him, then the turn to "a quality of distortion", then the dream, then his decision to leave.',
                'The nightmare scene "by El Greco": houses "crouching under a sullen, overhanging sky and a lustreless moon".',
                'The woman on the stretcher, her hand that "sparkles cold with jewels", and "the wrong house".',
                'The final judgement, "no one knows the woman’s name, and no one cares", and the East "haunted" after Gatsby\'s death.',
              ],
            },
          },
          {
            id: 'wjec-c1-m1-a5',
            questionNumber: 5,
            label: '05',
            questionText:
              'Read the last two paragraphs, from "There was one thing to be done before I left" to the end of the extract.\n\n"The narrator leaves the East wiser, but sadder, than when he came."\n\nHow far do you agree with this view?\n\nIn your answer, consider:\n- what you think and feel about the narrator, in these lines and in the extract as a whole\n- how the writer\'s choices lead you to think and feel this way.\n\nSupport your answer with references to the text.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'evaluation',
            extract: WJEC_C1_EXTRACT_1,
            extractSource: WJEC_C1_EXTRACT_1_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'I agree. In the final lines the narrator is careful and honest. He calls his meeting with Jordan "an awkward, unpleasant thing that perhaps had better have been let alone", which shows that he is sad and reluctant. He wants "to leave things in order", which shows that he has grown more responsible. Jordan tells him "without comment that she was engaged to another man", and he "pretended to be surprised", which suggests that he understands her better now. His moment of doubt, "For just a minute I wondered if I wasn’t making a mistake", shows sadness, but he "thought it all over again quickly and got up to say good-by", which shows his wisdom and self-control.\n\nThe rest of the extract supports the view. His memories of home are full of happiness, "the thrilling returning trains of my youth", which makes the present seem sadder by comparison. The East has become "haunted" for him, and his nightmare of the woman whose name "no one knows" shows what he has learned about its coldness. So he is wiser, but the knowledge has made him sad.',
              'Grade 8-9':
                'I agree, and the final lines show both halves of the view at once: a narrator who acts with new clarity, and who pays for that clarity with loss.\n\nThe wisdom is in his manner. He knows the meeting is "an awkward, unpleasant thing that perhaps had better have been let alone", yet he chooses to do it because he "wanted to leave things in order", and the metaphor of not trusting "that obliging and indifferent sea to sweep my refuse away" shows a man who will no longer let things drift. The paired adjectives "obliging and indifferent" are telling: the East, like the sea, will carry anything away and care about none of it. He has learned to take responsibility in a world that does not.\n\nThe sadness is in the restraint. His description of Jordan is admiring but distant, "she looked like a good illustration", a phrase that makes her a picture rather than a person, and the details, "her chin raised a little jauntily, her hair the color of an autumn leaf", are tender but final, autumnal. Her news is given "without comment", and he "pretended to be surprised", so both of them perform calm. His brief doubt, "For just a minute I wondered if I wasn’t making a mistake", is the most human moment, and the decision that follows is quick and controlled: he "thought it all over again quickly and got up to say good-by". The word "good-by" ends the extract, and its plainness carries more feeling than a speech would.\n\nThe whole extract explains why he is sadder. His memories of the West are full of youthful joy, "the thrilling returning trains of my youth", but they are memories, belonging to the past. The East has shown him a "quality of distortion", and the nightmare of a woman whose name "no one knows" and whom "no one cares" about stands for what he has seen there. "After Gatsby’s death" the East is "haunted". So he leaves wiser, able to see the East clearly and to act honestly, but the wisdom has cost him his illusions, his friend and, perhaps, a chance of love.',
            },
            markScheme: {
              'How the marks are given': WJEC_C1_Q05_MARKING,
              'Credit, for example': [
                'Wiser: he chooses to "leave things in order"; he will not trust "that obliging and indifferent sea"; he sees through Jordan\'s news and controls his own doubt.',
                'Sadder: the reluctance of "an awkward, unpleasant thing"; the distant, autumnal picture of Jordan; the plain "good-by".',
                'The whole extract: joyful memories of youth set against the "haunted", distorted East.',
              ],
            },
          },
        ],
      },
      {
        id: 'wjec-c1-m1-writing',
        title: 'Section B: Writing',
        description:
          'In this section you are assessed on your creative prose writing. Up to 24 marks are given for communication and organisation, and up to 16 for vocabulary, sentence structure, spelling and punctuation. Keep in mind what your writing is for and who will read it. You are advised to spend about 45 minutes on this section: about 10 minutes planning and about 35 minutes writing. Aim for about 450 to 600 words.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'wjec-c1-m1-b1',
            questionNumber: 1,
            label: '11',
            questionText:
              'Write one piece, choosing from these four titles:\n\n(a) Endings.\n\n(b) Write about a time when you went back to a place and found that it had changed.\n\n(c) Write a story that begins: "Every year, on the same night, we took the train home."\n\n(d) Write a story that ends with these words: "I knew then that it was time to go home."\n\nYour writing may be real or imagined.',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                "A model answer to (a), Endings (about 560 words).\n\nOn the last day of Year 11, nobody knew how to say goodbye, so we signed each other's shirts instead.\n\nBy eleven o'clock mine was covered. There were names I had known since I was four and names I had learned only that year, messages in felt-tip that ran into each other at the seams: good luck, stay in touch, never change, and one, from Marcus Reid, that just said thanks for the maths. I had no memory of helping Marcus Reid with maths. But I was glad, in a strange way, that I had.\n\nThe morning felt unreal. Teachers who had spent five years telling us to tuck our shirts in now let us wander the corridors like visitors. Mr Okonjo, who had once given me a detention for laughing in assembly, shook my hand and called me a credit to the school. The canteen gave out free chips. Someone set off the fire alarm, and for once nobody minded.\n\nAt lunchtime I went to find the wall.\n\nIt was in the old science block, the one that was going to be knocked down in the summer, at the end of a corridor that smelled of gas taps and floor polish. In our first week of Year 7, every pupil in the year had pressed a painted hand onto it, a hundred and eighty small hands in red and blue and yellow, with our names written underneath in careful, wobbly capitals. I had not looked at it for years. I had walked past it a thousand times and stopped seeing it.\n\nI found my hand near the bottom, yellow, with a smudge where I had pulled away too soon. Next to it was a red hand with JESS written underneath, and I remembered that Jess had held my other hand while we waited, because we had both been too scared to speak to anyone else. Jess had moved to Leeds in Year 9. We still messaged sometimes, but less and less.\n\nI put my hand flat against the yellow one. It covered it completely. My fingers reached past its fingers, my palm was twice the size, and for a moment I felt dizzy, as if I were looking down a very long tunnel at a small girl in a blazer that was too big for her.\n\nFootsteps came down the corridor. It was Marcus Reid, of all people, with his shirt so covered in signatures that it looked grey.\n\n'Thought I'd find mine,' he said, a little embarrassed. He crouched by the wall and searched, and then he laughed. His hand was blue, and enormous for an eleven-year-old, and he had written his name backwards.\n\n'I couldn't spell my own name,' he said. 'Look at it.'\n\nWe stood there for a while, two people who had hardly spoken in five years, looking at a wall that would be rubble by August.\n\nThen I took out my phone and photographed every hand, all hundred and eighty of them, one by one, while Marcus read the names aloud. It took us the whole of lunch. We were late for the last assembly, and nobody minded that either.\n\nI sent the picture of the red hand to Jess that night. She replied in less than a minute. Then we talked until two in the morning, the way we used to.",
            },
            markScheme: WJEC_C1_Q11_MARKING,
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WJEC COMPONENT 1, MOCK 2: Animal Farm, Chapter IX
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c1-mock-2',
    board: 'WJEC',
    paperNumber: 1,
    title: 'Component 1: 20th Century Literature Reading and Creative Prose Writing',
    subtitle: 'English Language C700U10-1, Mock Exam 2',
    code: 'C700U10-1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c1-m2-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully, then answer all the questions in this section. You are advised to spend about 10 minutes reading the extract and about 50 minutes answering the questions.\n\nSource: ${WJEC_C1_EXTRACT_2_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c1-m2-a1',
            questionNumber: 1,
            label: '01',
            questionText:
              'Read the first paragraph, from "For the next two days Boxer remained in his stall." to "the remaining twenty-two letters of the alphabet."\n\nList five things this paragraph tells you about Boxer\'s illness and his hopes.',
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'retrieval',
            extract: WJEC_C1_EXTRACT_2,
            extractSource: WJEC_C1_EXTRACT_2_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                '1. He stayed in his stall for two days.\n2. The pigs sent out a large bottle of pink medicine.\n3. Clover gave him the medicine twice a day after meals.\n4. Benjamin kept the flies off him in the evenings.\n5. He hoped to spend his retirement learning the rest of the alphabet.',
            },
            markScheme: {
              'How the marks are given': WJEC_C1_Q01_MARKING,
              'Credit, for example': [
                'He stayed in his stall for two days; the pigs sent pink medicine from the medicine chest in the bathroom; Clover gave it twice a day after meals; Clover lay in his stall and talked to him in the evenings; Benjamin kept the flies off him; Boxer said he was not sorry for what had happened; he might live another three years if he recovered; he looked forward to peaceful days in the corner of the big pasture; he would have time to improve his mind; he planned to learn the remaining twenty-two letters of the alphabet.',
              ],
            },
          },
          {
            id: 'wjec-c1-m2-a2',
            questionNumber: 2,
            label: '02',
            questionText:
              'Read from "However, Benjamin and Clover could only be with Boxer" to "And Boxer\'s stall was empty."\n\nHow does the writer show that something is wrong when the van arrives?\n\nSupport your answer with short quotations, and comment on the words the writer chooses.',
            marks: 5,
            suggestedTimeMinutes: 6,
            questionType: 'short-answer',
            extract: WJEC_C1_EXTRACT_2,
            extractSource: WJEC_C1_EXTRACT_2_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The writer shows that something is wrong through Benjamin\'s behaviour. He comes "galloping from the direction of the farm buildings, braying at the top of his voice", and the narrator stresses that "it was the first time that anyone had ever seen him gallop". Because Benjamin has never been seen excited before, the reader knows at once that this is serious. His words, "Quick, quick! ... Come at once! They\'re taking Boxer away!", are short and urgent. The animals break off work "Without waiting for orders from the pig", which shows how alarmed they are. The van itself seems sinister: it is "a large closed van", with "lettering on its side" and "a sly-looking man in a low-crowned bowler hat", and the adjective "sly-looking" makes him seem untrustworthy. The short final sentence, "And Boxer\'s stall was empty.", confirms the reader\'s fear.',
            },
            markScheme: {
              'How the marks are given': WJEC_C1_Q02_MARKING,
              'Credit, for example': [
                'Benjamin\'s gallop and braying, "the first time that anyone had ever seen him gallop".',
                'The urgent words "Quick, quick! ... They\'re taking Boxer away!", and the animals leaving work without orders.',
                'The closed van with lettering, the "sly-looking man", and the short sentence "And Boxer\'s stall was empty."',
              ],
            },
          },
          {
            id: 'wjec-c1-m2-a3',
            questionNumber: 3,
            label: '03',
            questionText:
              'Read from "The animals crowded round the van." to "at the small window at the back of the van."\n\nHow does the writer show the animals\' thoughts and feelings in these lines?\n\nSupport your answer with short quotations, and analyse the writer\'s language using the right subject terms.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'analysis',
            extract: WJEC_C1_EXTRACT_2,
            extractSource: WJEC_C1_EXTRACT_2_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'At first the animals are innocent and cheerful. They crowd round the van and call "Good-bye, Boxer!" and "good-bye!", which shows that they think he is going somewhere safe, and this makes the reader sad because we suspect the truth. Benjamin\'s anger interrupts them: "Fools! Fools!" he shouts, "prancing round them and stamping the earth with his small hoofs". The repetition of "Fools!" and the stamping show his desperation and frustration.\n\nThe mood then changes to fear. "That gave the animals pause, and there was a hush", and Benjamin reads "in the midst of a deadly silence". The adjective "deadly" hints at Boxer\'s fate. The words on the van, "Horse Slaughterer and Glue Boiler", are shocking, and Benjamin\'s explanation, "They are taking Boxer to the knacker\'s!", turns their fear into horror: "A cry of horror burst from all the animals." The verb "burst" shows how sudden and strong their feeling is.\n\nClover\'s love for Boxer is shown in her struggle. She "forced her way to the front", and she "tried to stir her stout limbs to a gallop, and achieved a canter", which shows that she is heavy and slow but desperate. Her repeated cry, "Boxer! Boxer! Boxer!", shows her anguish. The section ends with Boxer\'s face "with the white stripe down his nose" at the window, a heartbreaking detail that reminds us who he is.',
              'Grade 8-9':
                'The writer shows the animals\' thoughts and feelings moving in a few lines from innocence to horror, and the language makes the reader feel the turn as sharply as they do.\n\nThe section opens with misplaced cheerfulness. The animals "crowded round the van" and "chorused" their goodbyes, "Good-bye, Boxer!", "good-bye!", and the verb "chorused" makes them a single, trusting voice. Their innocence is painful, because the reader already fears what they do not. Benjamin breaks the scene: "Fools! Fools!" The repetition and the physical detail, "prancing round them and stamping the earth with his small hoofs", show a desperation that the cheerful goodbyes make all the more urgent.\n\nThe writer then slows time. "That gave the animals pause, and there was a hush", and Muriel "began to spell out the words", letter by letter, while the van waits. Benjamin pushes her aside "in the midst of a deadly silence", and the adjective "deadly" carries the meaning about to be read aloud. The sign is quoted in full, its businesslike nouns, "Horse Slaughterer and Glue Boiler", "Dealer in Hides and Bone-Meal", "Kennels Supplied", made horrifying by their flatness. Benjamin\'s question, "Do you not understand what that means?", and his answer, "They are taking Boxer to the knacker\'s!", turn knowledge into grief: "A cry of horror burst from all the animals."\n\nClover\'s feelings are shown through her body. She "forced her way to the front", and the sentence "Clover tried to stir her stout limbs to a gallop, and achieved a canter" is quietly devastating: the gap between "gallop" and "canter" is the gap between her love and what her body can do. Her cry, "Boxer! Boxer! Boxer!", is reduced to his name. The final image, Boxer\'s face "with the white stripe down his nose" at "the small window at the back of the van", recalls him as the animals have always known him, and the reader\'s grief is focused on that one familiar detail.',
            },
            markScheme: {
              'How the marks are given': WJEC_C1_Q03_MARKING,
              'Credit, for example': [
                'Innocence turning to horror: the cheerful "Good-bye, Boxer!" interrupted by "Fools! Fools!"',
                'The slowing of time: "a hush", "a deadly silence", the sign read out in full.',
                '"A cry of horror burst from all the animals."',
                'Clover\'s love and age in "tried to stir her stout limbs to a gallop, and achieved a canter", and Boxer\'s face at the window.',
              ],
            },
          },
          {
            id: 'wjec-c1-m2-a4',
            questionNumber: 4,
            label: '04',
            questionText:
              'Read the next two paragraphs, from "Boxer!" cried Clover in a terrible voice, to "Boxer was never seen again."\n\nHow does the writer create tension and drama in these lines?\n\nIn your answer, consider:\n- what happens, and the order in which the writer tells it\n- the words and phrases the writer chooses\n- how these affect the reader.\n\nSupport your answer with references to the text, using the right subject terms.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'analysis',
            extract: WJEC_C1_EXTRACT_2,
            extractSource: WJEC_C1_EXTRACT_2_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The writer creates tension through Clover\'s desperate warning and the speed of the van. She cries "in a terrible voice", "Boxer! Get out! Get out quickly! They\'re taking you to your death!", and the short exclamations show panic. All the animals take up "the cry", which makes the scene noisy and urgent. But "the van was already gathering speed and drawing away from them", so the reader fears that it is too late.\n\nThe writer then makes us hope. Boxer\'s face disappears, and "there was the sound of a tremendous drumming of hoofs inside the van. He was trying to kick his way out." The short sentence makes his struggle vivid. The writer reminds us of his old strength, "a few kicks from Boxer\'s hoofs would have smashed the van to matchwood", but then crushes the hope: "But alas! his strength had left him". The drumming "grew fainter and died away", which is a heartbreaking image.\n\nThe animals try one last thing, appealing to the horses: "Don\'t take your own brother to his death!" But the horses are "too ignorant to realise what was happening". The phrase "Too late" and the van disappearing through the gate build to the final short sentence, "Boxer was never seen again.", which ends the drama with terrible finality.',
              'Grade 8-9':
                'The writer creates tension and drama by building a series of hopes and then destroying each one, so that the reader is pulled between expectation and despair until the final sentence closes the scene.\n\nClover\'s warning opens with raw urgency: "Boxer! Get out! Get out quickly! They\'re taking you to your death!" Each exclamation is longer than the last, until the plain word "death" is spoken aloud for the first time. The animals "took up the cry", a phrase that makes them one voice, but the conjunction "But" immediately undercuts them: "the van was already gathering speed and drawing away from them." The uncertainty, "It was uncertain whether Boxer had understood", keeps the reader in suspense.\n\nThe first hope comes through sound. Boxer\'s face disappears, and then "there was the sound of a tremendous drumming of hoofs inside the van". The short sentence "He was trying to kick his way out." gives him back his heroism for a moment, and the writer recalls his old strength: "The time had been when a few kicks from Boxer\'s hoofs would have smashed the van to matchwood." The phrase "The time had been" sets the past against the present, and the narrator\'s "But alas!", an old-fashioned lament, signals defeat before the fact is stated: "his strength had left him". The sound then fades, "grew fainter and died away", and the verb "died" is cruelly apt.\n\nThe second hope is an appeal to the van\'s horses, "Comrades, comrades!" and "Don\'t take your own brother to his death!" The word "brother" stresses kinship, but the horses are "the stupid brutes, too ignorant to realise what was happening", and they "merely set back their ears and quickened their pace", an image of blank incomprehension. The third hope, shutting the gate, comes "Too late", and the van is "rapidly disappearing down the road". The final sentence, "Boxer was never seen again.", is short, flat and absolute. After so much noise and movement, its stillness is the greatest drama of all.',
            },
            markScheme: {
              'How the marks are given': WJEC_C1_Q04_MARKING,
              'Credit, for example': [
                'Clover\'s exclamations, "Get out! Get out quickly! They\'re taking you to your death!", and the van "already gathering speed".',
                'Hope raised and crushed: the "drumming of hoofs", the memory of his old strength, "But alas! his strength had left him".',
                'The appeal to the horses, "Don\'t take your own brother to his death!", met with blank incomprehension.',
                'The flat, final sentence "Boxer was never seen again."',
              ],
            },
          },
          {
            id: 'wjec-c1-m2-a5',
            questionNumber: 5,
            label: '05',
            questionText:
              'Read the last paragraph, from "Three days later it was announced" to the end of the extract.\n\n"In this extract, the writer makes the reader feel that Boxer has been betrayed."\n\nHow far do you agree with this view?\n\nIn your answer, consider:\n- what you think and feel about Boxer\'s fate, in these lines and in the extract as a whole\n- how the writer\'s choices lead you to think and feel this way.\n\nSupport your answer with references to the text.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'evaluation',
            extract: WJEC_C1_EXTRACT_2,
            extractSource: WJEC_C1_EXTRACT_2_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'I strongly agree. In the final lines, the announcement that Boxer "had died in the hospital at Willingdon, in spite of receiving every attention a horse could have" is a lie, because the reader has seen the words "Horse Slaughterer and Glue Boiler" on the van. The phrase "every attention a horse could have" sounds caring, which makes the lie more cruel. Squealer claims that he "had, he said, been present during Boxer\'s last hours", and the words "he said" suggest that we should not believe him.\n\nThe rest of the extract shows how much Boxer trusted the farm. He hoped for "peaceful days" in his retirement and planned to learn "the remaining twenty-two letters of the alphabet", which shows that he believed he would be looked after. The van came "in the middle of the day", when Clover and Benjamin were working "under the supervision of a pig", which suggests that the pigs planned it. Boxer\'s struggle to "kick his way out" and the line "Boxer was never seen again." make his fate tragic. So the writer makes us feel that he was betrayed by the pigs he served so loyally.',
              'Grade 8-9':
                'I agree, and I think the writer achieves this mainly through dramatic irony: the reader knows the truth that the final lines try to hide, so the sense of betrayal grows from the gap between what we have seen and what we are told.\n\nThe final paragraph is written in the voice of the farm\'s announcements. The passive "it was announced" hides who is speaking, and the sentence "he had died in the hospital at Willingdon, in spite of receiving every attention a horse could have" is smooth and reassuring. Its words of care, "hospital", "every attention", are exactly what the reader knows to be false, because we have read the lettering, "Horse Slaughterer and Glue Boiler", and heard Clover cry "They\'re taking you to your death!" The writer then gives Squealer the role of witness: "He had, he said, been present during Boxer\'s last hours." The tiny phrase "he said", set between commas, is the narrator\'s quiet signal that this is a claim, not a fact.\n\nThe betrayal is prepared across the extract. Boxer\'s trust is complete: he "professed not to be sorry", hoped for "the peaceful days that he would spend in the corner of the big pasture", and planned to spend his retirement learning "the remaining twenty-two letters of the alphabet", a touching ambition that shows his faith in the future the farm had promised. The timing of the van is telling: it came "in the middle of the day", when his friends were "weeding turnips under the supervision of a pig", so the absence of Clover and Benjamin seems arranged. Even the medicine the pigs sent, "a large bottle of pink medicine" found "in the medicine chest in the bathroom", now seems a token gesture.\n\nAgainst this, the animals\' love is the measure of the wrong. Clover\'s "terrible voice", Benjamin\'s first gallop, the appeal "Don\'t take your own brother to his death!" and the last flat sentence, "Boxer was never seen again.", make the reader feel the loss before the lie is told. So the view is right: the writer never shows a pig deciding Boxer\'s fate, but by making us see the van, hear the hoofs and then read the official story, he makes betrayal the only word that fits.',
            },
            markScheme: {
              'How the marks are given': WJEC_C1_Q05_MARKING,
              'Credit, for example': [
                'The announcement as a lie the reader can see through: "every attention a horse could have" against "Horse Slaughterer and Glue Boiler"; Squealer\'s "he said".',
                'Boxer\'s trust: his hopes of "peaceful days" and of learning the alphabet.',
                'The suspicious timing, "in the middle of the day", "under the supervision of a pig".',
                "The animals' grief as the measure of the wrong, and a clear judgement on how the writer creates the sense of betrayal.",
              ],
            },
          },
        ],
      },
      {
        id: 'wjec-c1-m2-writing',
        title: 'Section B: Writing',
        description:
          'In this section you are assessed on your creative prose writing. Up to 24 marks are given for communication and organisation, and up to 16 for vocabulary, sentence structure, spelling and punctuation. Keep in mind what your writing is for and who will read it. You are advised to spend about 45 minutes on this section: about 10 minutes planning and about 35 minutes writing. Aim for about 450 to 600 words.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'wjec-c1-m2-b1',
            questionNumber: 1,
            label: '11',
            questionText:
              'Write one piece, choosing from these four titles:\n\n(a) The Messenger.\n\n(b) Write about a time when one moment changed everything.\n\n(c) Write a story that begins: "The letter had been lost in the post for fifty years."\n\n(d) Write a story that ends with these words: "We never forgot him."\n\nYour writing may be real or imagined.',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                "A model answer to (c), a story that begins \"The letter had been lost in the post for fifty years.\" (about 570 words).\n\nThe letter had been lost in the post for fifty years. It arrived on a Tuesday, with the gas bill.\n\nIt was addressed to my grandmother, in faded blue ink, in handwriting so neat it looked printed: Miss Eileen Parry, 4 Chapel Row, Abercarn. The envelope was the yellow of old piano keys. Across the top, someone at the sorting office had stuck a printed label apologising for the delay.\n\nGran looked at it for a long time without opening it. She had not been Miss Eileen Parry since 1975.\n\n'I know this writing,' she said at last.\n\nI was fifteen and staying with her for half-term, and I had never seen her hands shake before. She put the letter down on the kitchen table, picked it up, and put it down again.\n\n'Do you want me to open it?' I asked.\n\n'No.' She took her glasses off, cleaned them on her cardigan and put them on again. 'Yes. No. Read it to me. I can't.'\n\nSo I opened it, very carefully, with the butter knife. Inside was a single sheet of paper, folded twice.\n\nDear Eileen, it began. I am writing this on the train, so forgive the wobbles. Your letter came this morning, and I have read it eleven times. If you still mean what you wrote, meet me at the clock in Newport on Saturday at twelve. If you are not there, I will understand, and I will not ask again. Yours, always, Tom.\n\nI stopped. The kitchen clock ticked. A car went past outside, splashing through a puddle.\n\n'Who was Tom?' I said.\n\nGran was staring out of the window at the wet garden, at the bird feeder she filled every morning, at the shed Grandad had built the year they married.\n\n'Tom Hughes,' she said. 'He went to work in London in the spring of 1974. Before he left, he asked me to go with him. I said I needed time to think.' She gave a short laugh. 'I thought for three months. Then I wrote and told him yes. And I never heard another word.'\n\n'So you thought he didn't want you.'\n\n'I thought he had changed his mind. I waited for a year.' She turned the empty envelope over in her fingers. 'Then I met your grandad at a dance in Crumlin, and he made me laugh until I couldn't breathe, and that was that.'\n\nI thought of Tom Hughes waiting by a clock in Newport on a Saturday fifty years ago, watching the hands go round, and then going back to London alone.\n\n'Are you sad?' I asked.\n\nGran thought about it properly, the way she thinks about everything.\n\n'I'm sorry for him,' she said. 'And I'm sorry for the girl who waited a year. But if that letter had come on time, I would never have met your grandad. There would be no mum, and no you, and no shed.' She almost smiled. 'I am very fond of that shed.'\n\nShe folded the letter along its old creases and put it back in its envelope. Then she put the kettle on.\n\nThat evening I found her in the garden, in the last of the light, filling the bird feeder for the second time that day. She stood there for a long while, looking at the shed, before she came in.",
            },
            markScheme: WJEC_C1_Q11_MARKING,
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WJEC COMPONENT 1, MOCK 3: The Great Gatsby, Chapter VIII
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c1-mock-3',
    board: 'WJEC',
    paperNumber: 1,
    title: 'Component 1: 20th Century Literature Reading and Creative Prose Writing',
    subtitle: 'English Language C700U10-1, Mock Exam 3',
    code: 'C700U10-1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c1-m3-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully, then answer all the questions in this section. You are advised to spend about 10 minutes reading the extract and about 50 minutes answering the questions.\n\nSource: ${WJEC_C1_EXTRACT_3_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c1-m3-a1',
            questionNumber: 1,
            label: '01',
            questionText:
              'Read the first paragraph, from "It was dawn now on Long Island" to "promising a cool, lovely day."\n\nList five things this paragraph tells you about the morning.',
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'retrieval',
            extract: WJEC_C1_EXTRACT_3,
            extractSource: WJEC_C1_EXTRACT_3_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                '1. It was dawn on Long Island.\n2. They opened the rest of the windows downstairs.\n3. The light was turning from grey to gold.\n4. Birds began to sing among the leaves.\n5. There was a gentle movement in the air, promising a cool day.',
            },
            markScheme: {
              'How the marks are given': WJEC_C1_Q01_MARKING,
              'Credit, for example': [
                "It was dawn on Long Island; they opened the rest of the windows downstairs; the light was turning from grey to gold; a tree's shadow fell across the dew; birds began to sing among the blue leaves; there was a slow, pleasant movement in the air; there was scarcely a wind; the day promised to be cool and lovely.",
              ],
            },
          },
          {
            id: 'wjec-c1-m3-a2',
            questionNumber: 2,
            label: '02',
            questionText:
              'Read from "I don’t think she ever loved him." to "couldn’t be measured?"\n\nHow does the writer show Gatsby\'s feelings about Daisy in these lines?\n\nSupport your answer with short quotations, and comment on the words the writer chooses.',
            marks: 5,
            suggestedTimeMinutes: 6,
            questionType: 'short-answer',
            extract: WJEC_C1_EXTRACT_3,
            extractSource: WJEC_C1_EXTRACT_3_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The writer shows that Gatsby cannot accept that Daisy might love Tom. He begins with a denial, "I don’t think she ever loved him", and he "looked at me challengingly", as if daring Nick to disagree. He makes excuses for her, claiming that she "hardly knew what she was saying", which shows how much he needs to believe in her. When he sits down "gloomily", his confidence fades, and his next words, "Of course she might have loved him just for a minute", show him reluctantly admitting a doubt, before he adds "and loved me more even then, do you see?" The question "do you see?" sounds as if he is pleading. His "curious remark", "it was just personal", is mysterious, and the narrator suggests "some intensity in his conception of the affair that couldn’t be measured", which shows that his love is too great to explain.',
            },
            markScheme: {
              'How the marks are given': WJEC_C1_Q02_MARKING,
              'Credit, for example': [
                'His denial, said "challengingly", and his excuses for Daisy.',
                'His sinking confidence ("gloomily") and the pleading "do you see?"',
                'The narrator\'s sense of "some intensity ... that couldn’t be measured".',
              ],
            },
          },
          {
            id: 'wjec-c1-m3-a3',
            questionNumber: 3,
            label: '03',
            questionText:
              'Read from "He came back from France" to "the freshest and the best, forever."\n\nWhat impressions do you get of Gatsby\'s feelings during his journey to Louisville?\n\nSupport your answer with short quotations, and analyse the writer\'s language using the right subject terms.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'analysis',
            extract: WJEC_C1_EXTRACT_3,
            extractSource: WJEC_C1_EXTRACT_3_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'Gatsby seems lonely, heartbroken and still in love. His journey is "miserable but irresistible", which shows that he knew it would hurt but could not stop himself, and he goes "on the last of his army pay", which shows that he has given up everything for it. He walks "the streets where their footsteps had clicked together", and the sound image makes the memory vivid but also shows that she is gone. The city is "pervaded with a melancholy beauty", which suggests that it is beautiful because of Daisy but sad because she is not there.\n\nAs he leaves, he feels that "if he had searched harder, he might have found her", so he is full of regret. The writer reminds us that he is "penniless now", and the details of the "hot" day-coach and the "folding-chair" in the vestibule make his journey uncomfortable and lonely. Even strangers seem connected to her: the people on the trolley "might once have seen the pale magic of her face".\n\nThe ending is the saddest part. The sun seems "to spread itself in benediction over the vanishing city where she had drawn her breath", which makes the city seem holy because she lived there. He "stretched out his hand desperately as if to snatch only a wisp of air", a heartbreaking image of trying to hold on to something that cannot be held, and he knows "that he had lost that part of it, the freshest and the best, forever."',
              'Grade 8-9':
                'The writer gives an impression of Gatsby\'s feelings as a grief so intense that it turns a city into a sacred place, and the movement of the train becomes the movement of loss itself.\n\nThe first paragraph shows a pilgrimage. The paired adjectives in "miserable but irresistible journey" capture the double pull of a love that hurts, and the detail "on the last of his army pay" shows that he spends everything on a place where Daisy no longer is. He walks "the streets where their footsteps had clicked together through the November night", and the sound of the remembered footsteps makes his present solitude louder. The comparison that follows, "Just as Daisy’s house had always seemed to him more mysterious and gay than other houses", shows how his love transforms everything she touched, and the city is "pervaded with a melancholy beauty", the adjective "melancholy" holding sadness inside the beauty.\n\nThe second paragraph slows into regret. "He left feeling that if he had searched harder, he might have found her—that he was leaving her behind", and the dash turns a thought into a realisation. The words set between dashes, "he was penniless now", add humiliation to grief. The view from the train is told as a sequence of things slipping away, "the station slid away and the backs of unfamiliar buildings moved by", and even the people on a passing trolley are imagined as having seen "the pale magic of her face", so that strangers matter only because of her.\n\nThe final paragraph reaches its climax through light and gesture. The sun seems "to spread itself in benediction over the vanishing city where she had drawn her breath", the religious word "benediction" making the place blessed, and the phrase "where she had drawn her breath" turning the simplest act of life into something holy. His gesture, "He stretched out his hand desperately as if to snatch only a wisp of air", is both heroic and hopeless. The last sentence is final: "it was all going by too fast now for his blurred eyes", and "he knew that he had lost that part of it, the freshest and the best, forever." The impression is of a love that sees the beloved in everything, and of a man who learns, on a hot train, that some losses cannot be undone.',
            },
            markScheme: {
              'How the marks are given': WJEC_C1_Q03_MARKING,
              'Credit, for example': [
                'The "miserable but irresistible journey", made "on the last of his army pay".',
                'The city seen through his love: footsteps that "clicked together", "a melancholy beauty", "the pale magic of her face".',
                'Regret and loss on the train: "if he had searched harder", "the station slid away".',
                'The climax of "benediction", the hand stretched "to snatch only a wisp of air", and the final "forever".',
              ],
            },
          },
          {
            id: 'wjec-c1-m3-a4',
            questionNumber: 4,
            label: '04',
            questionText:
              'Read from "It was nine o’clock when we finished breakfast" to "Well, good-by."\n\nHow does the writer create a sense of unease in these lines?\n\nIn your answer, consider:\n- how the writer delays the narrator\'s leaving\n- the words and phrases the writer chooses\n- how these affect the reader.\n\nSupport your answer with references to the text, using the right subject terms.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'analysis',
            extract: WJEC_C1_EXTRACT_3,
            extractSource: WJEC_C1_EXTRACT_3_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The writer creates unease through small, worrying details. The weather has changed: "there was an autumn flavor in the air", which suggests that summer, and perhaps Gatsby\'s happiness, is ending. The gardener wants "to drain the pool to-day" because "Leaves’ll start falling pretty soon", and Gatsby\'s reply, "Don’t do it to-day", makes the reader wonder why. His comment, "I’ve never used that pool all summer?", is sad, because it shows how little he has enjoyed his wealth.\n\nThe narrator\'s reluctance to leave also creates unease. He says "I didn’t want to leave Gatsby", and he "missed that train, and then another", which shows that he senses something is wrong. The dialogue becomes short and hesitant: "I’ll call you up," "Do, old sport," "I’ll call you about noon." Gatsby says, "I suppose Daisy’ll call too", and looks at Nick "anxiously, as if he hoped I’d corroborate this", which shows his insecurity. Nick\'s reply, "I suppose so", is not convincing, so the reader suspects she will not. The flat "Well, good-by." ends the section on an uneasy note.',
              'Grade 8-9':
                'The writer creates unease through a scene that is outwardly ordinary, breakfast, a gardener, a goodbye, but full of hints that something is about to end.\n\nThe first paragraph changes the season. "The night had made a sharp difference in the weather", and "there was an autumn flavor in the air": after a summer of parties, the turn of the year suggests decline. The gardener, "the last one of Gatsby’s former servants", is himself a sign of how much has been lost, and his practical plan to "drain the pool to-day" because "Leaves’ll start falling pretty soon" brings the falling leaves of autumn into the conversation. Gatsby\'s refusal, "Don’t do it to-day", and his strange, wistful question, "I’ve never used that pool all summer?", leave the pool waiting in the reader\'s mind.\n\nThe second movement is a goodbye that will not finish. The narrator looks at his watch, "Twelve minutes to my train", but then admits "I didn’t want to go to the city" and, more tellingly, "I didn’t want to leave Gatsby". The dash before that admission marks it as the real reason. He "missed that train, and then another", and the repeated missed departures stretch the scene. The dialogue is clipped and repetitive, "I’ll call you up", "Do, old sport", "I’ll call you about noon", as if both men are holding on to a promise. Gatsby\'s "I suppose Daisy’ll call too" is said "anxiously, as if he hoped I’d corroborate this", and the formal word "corroborate" exposes how much he needs a witness to his hope. Nick\'s echo, "I suppose so", offers no comfort.\n\nThe section ends on two of the plainest words in the extract, "Well, good-by." Their flatness, after so much delay, leaves the reader uneasy: the narrator has been unable to leave, and the writer has made us feel that this parting matters more than either man says.',
            },
            markScheme: {
              'How the marks are given': WJEC_C1_Q04_MARKING,
              'Credit, for example': [
                'The turn of the season, "an autumn flavor in the air", and the gardener\'s plan to drain the pool, which Gatsby puts off.',
                'Gatsby\'s wistful "I’ve never used that pool all summer?"',
                'Structure: the delayed departure, "missed that train, and then another", and the clipped, repeated promises to call.',
                'Gatsby\'s anxious hope that Daisy will call, Nick\'s unconvincing "I suppose so", and the flat "Well, good-by."',
              ],
            },
          },
          {
            id: 'wjec-c1-m3-a5',
            questionNumber: 5,
            label: '05',
            questionText:
              'Read from "We shook hands and I started away." to the end of the extract.\n\n"In this extract, the writer presents Gatsby as a man to be pitied rather than admired."\n\nHow far do you agree with this view?\n\nIn your answer, consider:\n- what you think and feel about Gatsby, in these lines and in the extract as a whole\n- how the writer\'s choices lead you to think and feel this way.\n\nSupport your answer with references to the text.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'evaluation',
            extract: WJEC_C1_EXTRACT_3,
            extractSource: WJEC_C1_EXTRACT_3_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'I partly agree. There is much to pity. Gatsby has made "a miserable but irresistible journey" and has "lost that part of it, the freshest and the best, forever". He has "never used that pool all summer", and he waits "anxiously" for Daisy to call, which shows how lonely and insecure he is.\n\nHowever, the final lines also make us admire him. Nick shouts, "They’re a rotten crowd ... You’re worth the whole damn bunch put together", and he says, "I’ve always been glad I said that." Gatsby\'s response is "that radiant and understanding smile", which shows his warmth. His suit makes "a bright spot of color against the white steps", so he stands out, and the narrator speaks of "his incorruptible dream", which suggests something pure and admirable about him. Even though Nick says "I disapproved of him from beginning to end", the writer shows that Gatsby is better than "the faces of those who guessed at his corruption". So I think he is to be pitied and admired at once.',
              'Grade 8-9':
                'I disagree that it is pity rather than admiration. The writer presents Gatsby as a man to be pitied and admired at once, and the final lines are where the two feelings meet.\n\nThe case for pity runs through the extract. His journey to Louisville is "miserable but irresistible", made "on the last of his army pay", and it ends with a hand stretched out "desperately as if to snatch only a wisp of air". In the present he is clinging to hope: he insists "I don’t think she ever loved him", waits for a call that may not come, and has "never used that pool all summer", a detail that makes his great house seem empty of pleasure.\n\nThe final lines turn pity into admiration. Nick\'s shout across the lawn, "They’re a rotten crowd" and "You’re worth the whole damn bunch put together", is a judgement on Gatsby\'s world as much as a compliment to him, and the narrator\'s reflection, "I’ve always been glad I said that", gives it permanence. The writer is careful to keep Nick honest: "It was the only compliment I ever gave him, because I disapproved of him from beginning to end." Yet Gatsby\'s response, "that radiant and understanding smile", and the image of his "gorgeous pink rag of a suit" as "a bright spot of color against the white steps" make him vivid and almost noble. The phrase "gorgeous pink rag" is itself a mixture of mockery and affection.\n\nThe paragraph ends with a contrast that holds both feelings. The guests on his lawn were "those who guessed at his corruption", and Gatsby stood "concealing his incorruptible dream". The play on "corruption" and "incorruptible" separates the man\'s dealings, which may be dishonest, from his dream, which is pure. So the writer asks us to pity the man and admire the dream, and the narrator\'s final, polite "I enjoyed breakfast, Gatsby" is a small, sad attempt to honour both.',
            },
            markScheme: {
              'How the marks are given': WJEC_C1_Q05_MARKING,
              'Credit, for example': [
                'Pity: the lonely journey and its loss, the hope that Daisy will call, the pool never used.',
                'Admiration: "You’re worth the whole damn bunch put together", "that radiant and understanding smile", the "bright spot of color", "his incorruptible dream".',
                'The narrator\'s honesty ("I disapproved of him from beginning to end") and a judgement that weighs pity against admiration.',
              ],
            },
          },
        ],
      },
      {
        id: 'wjec-c1-m3-writing',
        title: 'Section B: Writing',
        description:
          'In this section you are assessed on your creative prose writing. Up to 24 marks are given for communication and organisation, and up to 16 for vocabulary, sentence structure, spelling and punctuation. Keep in mind what your writing is for and who will read it. You are advised to spend about 45 minutes on this section: about 10 minutes planning and about 35 minutes writing. Aim for about 450 to 600 words.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'wjec-c1-m3-b1',
            questionNumber: 1,
            label: '11',
            questionText:
              'Write one piece, choosing from these four titles:\n\n(a) Trapped.\n\n(b) Write about a time when you suddenly realised the truth about someone or something.\n\n(c) Write a story that begins: "It was the last morning of the summer."\n\n(d) Write a story that ends with these words: "I waved until the car was out of sight."\n\nYour writing may be real or imagined.',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                "A model answer to (c), a story that begins \"It was the last morning of the summer.\" (about 590 words).\n\nIt was the last morning of the summer. My grandfather wanted to go fishing.\n\nHe had wanted to go fishing every morning for six weeks. Every morning I had said no. I was fourteen, and I had come to stay with him in the cottage by the estuary because Mum and Dad were working and there was nobody else, and I had decided on the first day that I would hate it. I had kept to that decision with great determination. I had hated the slow mornings, the radio that only played the shipping forecast, the lack of signal, the fish pie. Most of all I had hated the fishing, without ever having tried it.\n\n'Last chance,' Grandad said, standing in the doorway in his enormous green waders. 'Tide's right. Your mum's here at four.'\n\nI was going to say no. I had the word ready. Then I looked at him properly, perhaps for the first time that summer, and saw how carefully he had laid out two rods on the kitchen table, the smaller one polished, a new reel fixed to it, still with the price label on.\n\n'Fine,' I said. 'One hour.'\n\nThe estuary at seven in the morning was nothing like the estuary at noon. The mist was still lying on the water like a sheet that someone had forgotten to fold, and the mud flats shone silver where the tide was going out. Curlews called somewhere I could not see, a long, sad, bubbling sound. Grandad walked ahead of me along the shingle, not talking, and I followed his footprints.\n\nHe showed me how to cast. I was terrible at it. The first time, the line wrapped itself round my ankle. The second time, I caught a clump of seaweed and a crisp packet. The third time, the float landed somewhere near the middle of the channel and sat there, red and bobbing, and Grandad nodded once, the way he nods at the weather forecast when it is right.\n\nThen we waited.\n\nI had expected to be bored. Instead I found that waiting by water is a different thing from waiting anywhere else. The mist lifted slowly. A heron landed on the far bank and stood on one leg, as still as a post. Grandad poured tea from a flask into two plastic cups and told me, without my asking, about the summer he was fourteen, when his own grandfather had brought him to this same spot and he had sulked for a whole week before catching a bass so big that it nearly pulled him into the river.\n\n'Did you let it go?' I asked.\n\n'We ate it,' he said. 'Best fish pie I ever had.'\n\nAt ten past eight my float vanished.\n\nI do not remember the next minute clearly. I remember the rod bending, the line hissing, Grandad's voice saying steady, steady, keep the tip up, and a flash of silver turning in the brown water. It was a small bass, no longer than my hand and wrist together. I thought it was the most beautiful thing I had ever seen.\n\nWe let it go. Grandad held it in the shallows until it flicked away into the channel.\n\nMum came at four. I had my bag packed by the door, and the small rod beside it, wrapped in a towel. She looked at it, and then at me, and then at Grandad, and raised her eyebrows.\n\n'Same time next summer?' Grandad said.\n\n'Same time next summer,' I said.",
            },
            markScheme: WJEC_C1_Q11_MARKING,
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WJEC COMPONENT 2 - MOCK 1
  // ═══════════════════════════════════════════════════════════════════════════
  // RESTRUCTURED 24 October 2026 to the paper Eduqas sets (C700U20-1), as
  // src/data/mark-scheme-guides/eduqas-lang-comp2.ts describes it, with the
  // three Component 2 mocks below. Each set four reading questions worth 5,
  // 10, 10 and 15 and one 40-mark writing task, where Eduqas sets six reading
  // questions worth 3, 10, 3, 10, 4 and 10 and two compulsory writing tasks of
  // 20, so only Question 2's answer found a marker question of its worth. They
  // now set 1.1 to 1.6 and 2.1 and 2.2 (questionNumber 1 to 6, then 1 and 2,
  // with the board's numbers as labels), carry the paper code C700U20-1 in
  // place of C700QS/2 and the paper's full title, and keep their sources word
  // for word. Every quotation in a reading question was checked by script
  // against the extract that question prints. The marking text is the
  // site's own, as in src/data/mock-exams/wjec-c2-a.ts, written out here
  // because this file is shared.
  //
  // CHECKED 31 October 2026 by a second reader, against each extract, the
  // guide and Eduqas's Summer 2025 paper. The three Source B passages are word
  // for word (scripts/check-mock-exam-extracts.mjs --fetch: 100% each), the
  // labels hold, and no Source A credits a real body with a finding. Fixed:
  //   - Mock 1 Question 1.1(a) accepted only "while we sleep" or "while we
  //     eat", though the writer lists more times; it accepts any of them.
  //   - Mock 2 Question 1.3(a) called Ruskin's "evil" the weariness of too
  //     much novelty; it is custom dulling the delight of new things (the
  //     label says so), and the question now asks for the cure when that
  //     enjoyment grows dull.
  //   - Mock 3 Question 1.3(c) answered that wages were "too low to keep them
  //     on"; Cobbett means that feeding and lodging the workers would cost
  //     more than the wages now paid, and the answer and scheme say so.
  //
  // BOARD WORDING, 31 October 2026, brought into line with
  // src/data/mock-exams/wjec-c2-a.ts and wjec-c2-b.ts: in all three mocks
  // Questions 1.2, 1.5 and 1.6 and the Section B guidance opened with the
  // sentences those files record as Eduqas's own Summer 2025 wording, or near
  // copies ("You should comment on:", "Using details from both texts, explain
  // briefly", "Both of these texts are about", "Aim to write about 300 to 400
  // words for each task"). All 12 are reworded in the site's own words and ask
  // the same things, and 1.5 now asks which text each detail comes from, as
  // Eduqas's does. Marks, schemes and answers are unchanged.
  {
    id: 'wjec-c2-mock-1',
    board: 'WJEC',
    paperNumber: 2,
    title:
      'Component 2: 19th and 21st Century Non-Fiction Reading and Transactional/Persuasive Writing',
    subtitle: 'English Language C700U20-1: Mock Exam 1',
    code: 'C700U20-1',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c2-m1-reading',
        title: 'Section A: Reading',
        description: `Answer all the questions in this section. You are advised to spend about an hour on it: about 10 minutes reading the two texts, then about 50 minutes answering. Questions 1.1 and 1.2 are on Source A, the 21st-century text; Questions 1.3 and 1.4 are on Source B, the 19th-century text; Questions 1.5 and 1.6 are on both.\n\nGlossary for Source B: totalest: most complete; Verily: truly; Mammon-worship: the worship of money as if it were a god (Mammon is a Bible word for riches); laws-of-war: the rules of warfare (Carlyle means that 'fair competition' is war with rules); Cash-payment: payment in money; liquidates all engagements: settles every obligation, like paying off a debt; covenanted: agreed in a contract; behoof: benefit; Cain and Abel: in the Bible, Cain kills his brother Abel, and when asked where Abel is, replies 'Am I my brother's keeper?'; game-preserving: keeping wild birds and animals on an estate for the owner to shoot; wayfarer: traveller; Idolatry of Sense: worship of what the senses enjoy; Courts of Requests: local courts that settled claims for small debts.`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-m1-q1',
            questionNumber: 1,
            label: '1.1',
            questionText: `Read Source A, the 21st-century text, and answer the questions below.\n\n(a) According to the writer, when does the algorithm work? Give one time. [1]\n(b) What do the algorithms used by social media platforms optimise for? [1]\n(c) Give one thing that, according to the writer, makes people feel most intensely. [1]`,
            marks: 3,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: `Source A (21st Century):\n${WJEC_C2_SOURCE_A_1}\n\nSource B (19th Century):\n${WJEC_C2_SOURCE_B_1}`,
            extractSource: `Source A: ${WJEC_C2_SOURCE_A_1_REF} | Source B: ${WJEC_C2_SOURCE_B_1_REF}`,
            modelAnswers: {
              'Grade 4-5': `(a) While we sleep.\n(b) Engagement.\n(c) Outrage.`,
            },
            markScheme: {
              'How it is marked (3 marks)': [
                'One mark for each correct answer, 3 marks in all. Each answer must come from Source A, the 21st-century text: an answer from Source B earns nothing.',
                "A short phrase is enough, in your own words or the writer's; no explanation is needed.",
              ],
              Answers: [
                '(a) Any one of the times the writer lists: while we sleep; while we eat; while we fight (accept: all the time).',
                '(b) Engagement.',
                '(c) Any one of: outrage; fear; confirmation of their existing prejudices.',
              ],
            },
          },
          {
            id: 'wjec-c2-m1-q2',
            questionNumber: 2,
            label: '1.2',
            questionText: `Source A is an article about social media. The writer wants to make readers concerned about the power that algorithms have over what we see and believe.\n\nHow does the writer try to do this?\n\nIn your answer, comment on:\n• what the writer says\n• the writer's choice of language and tone\n• how the article is structured, and any other methods the writer uses.\n\n[10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A (21st Century):\n${WJEC_C2_SOURCE_A_1}`,
            extractSource: WJEC_C2_SOURCE_A_1_REF,
            modelAnswers: {
              'Grade 8-9': `The writer opens with a short, unsettling statement: "The algorithm does not sleep." Giving a piece of software a living creature's habits makes it seem alive and tireless. The next sentence builds on this with repetition, "It works while we sleep, while we eat", and goes on to place the algorithm in every part of our lives, even the most private. The personification grows more threatening: it watches "with the patient, unblinking attention of a creature that has all the time in the world". The word "creature" and the adjective "unblinking" suggest a predator, and "no emotional investment in what it sees" makes it cold as well as watchful.\n\nThe writer then challenges a comfortable belief. "We think of the internet as a space of freedom, of infinite possibility" sets out a view the reader may hold, and the conjunction "but" overturns it: we have created "something far more controlling than any propaganda machine of the twentieth century could have dreamed of". The comparison with propaganda borrows the weight of history and makes the modern danger seem greater. The colon introduces a twist: the system "does not need to convince us of falsehood, only to ensure that we never encounter truth in the first place". Setting the spreading of lies against the hiding of truth makes the threat seem quieter, and therefore harder to resist.\n\nThe second paragraph turns to explanation, in a calmer tone. The writer explains that platforms "optimise for engagement", anticipates the reader's response with the aside "neutral, even", and rejects it bluntly: "engagement has nothing to do with truth". A contrast follows: the algorithm "cannot distinguish between a fact and a lie", but it "can measure which one makes people feel more intensely". The writer then asks a question, "And what makes people feel most intensely?", and answers it with three short fragments: "Outrage. Fear. Confirmation of their existing prejudices." The abrupt rhythm makes the answer sound certain and alarming.\n\nThe ending is effective because it refuses easy blame. The algorithm acts "not out of malice, but out of mathematical indifference", a paradox which suggests that the harm is worse because no one intends it. The final short sentence, "It is simply optimising for its profit model.", uses "simply" ironically: something so simple and commercial is shaping what millions of people believe. The reader is left concerned not about an evil plot but about a system that cannot care.`,
            },
            markScheme: {
              'How it is marked (10 marks)': [
                'Band 1 (1 to 2 marks): a detail or two, but the answer is short and drifts from the question.',
                'Band 2 (3 to 4 marks): some useful details with a little comment on them, but parts of the text are missed.',
                "Band 3 (5 to 6 marks): a fair spread of details, and a start on explaining how the writer's words, tone and structure do their job.",
                'Band 4 (7 to 8 marks): plenty of well-chosen details, explained correctly, with analysis of how the writer influences the reader starting to come through, and subject terms that help.',
                "Band 5 (9 to 10 marks): the whole text covered with sharp, well-explained points, picking apart in detail how the writer's methods work on the reader.",
                'Work through the text in order and use all of it. Quotations should be long enough to make sense, each followed by comment: fragments with no explanation, or techniques listed with no link to the question, earn little.',
              ],
              'Points you might make': [
                `Personification makes the algorithm a tireless watcher: "The algorithm does not sleep"; "the patient, unblinking attention of a creature".`,
                `A comfortable belief is overturned ("a space of freedom") by the comparison with "any propaganda machine of the twentieth century".`,
                `The twist that the system need only ensure "that we never encounter truth in the first place".`,
                `The calmer explanation of engagement, and the question answered in fragments: "Outrage. Fear. Confirmation of their existing prejudices."`,
                `The paradox "mathematical indifference" and the ironic "simply" in the final sentence.`,
              ],
            },
          },
          {
            id: 'wjec-c2-m1-q3',
            questionNumber: 3,
            label: '1.3',
            questionText: `Read Source B, the 19th-century text, and answer the questions below. The glossary at the start of this section explains its harder words.\n\n(a) What does Carlyle say we call our way of living together, although it is really "the totalest separation, isolation"? [1]\n(b) What reason does the rich mill-owner give for owing his starving workers nothing more? [1]\n(c) According to Carlyle, what is the only thing that a man with a "deadened soul" can be ordered to do? [1]`,
            marks: 3,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: `Source B (19th Century):\n${WJEC_C2_SOURCE_B_1}`,
            extractSource: WJEC_C2_SOURCE_B_1_REF,
            modelAnswers: {
              'Grade 4-5': `(a) A Society.\n(b) He hired them fairly and paid them every penny he had agreed to.\n(c) Pay money.`,
            },
            markScheme: {
              'How it is marked (3 marks)': [
                'One mark for each correct answer, 3 marks in all, from Source B, the 19th-century text. An answer from Source A earns nothing.',
                'Show that you have understood the older language by putting it simply: a long passage copied out does not show that.',
              ],
              Answers: [
                '(a) A Society.',
                '(b) He hired them fairly in the market and paid them all the wages agreed, so he thinks that he owes them nothing else.',
                '(c) Pay money (accept: pay what he owes, and nothing more).',
              ],
            },
          },
          {
            id: 'wjec-c2-m1-q4',
            questionNumber: 4,
            label: '1.4',
            questionText: `Read Source B again.\n\nA student said: ‘Carlyle's anger at the rich is stronger than his sympathy for the poor.’\n\nHow far do you agree with this view?\n\nIn your answer, give your own view of how Carlyle presents the rich and the poor across the whole text, and explain how his choices of words and details create that view. Support your answer with references to the text. [10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'evaluation',
            extract: `Source B (19th Century):\n${WJEC_C2_SOURCE_B_1}`,
            extractSource: WJEC_C2_SOURCE_B_1_REF,
            modelAnswers: {
              'Grade 8-9': `I largely agree. The poor appear in this passage mainly as the victims of other people's attitudes, while the rich are its real subject, and Carlyle's language about them is fiercely critical.\n\nHe begins by attacking society as a whole, himself and his readers included. "We call it a Society" is followed by the accusation that we go about "professing openly the totalest separation, isolation". The superlative "totalest" is an unusual coinage that stresses how complete the separation is. He uses "We" throughout this opening, so the blame is shared: "We have profoundly forgotten everywhere that Cash-payment is not the sole relation of human beings."\n\nHis anger sharpens when he gives the rich a voice. The mill-owner's words, "Did not I hire them fairly in the market? Did I not pay them, to the last sixpence, the sum covenanted for? What have I to do with them more?", are a string of self-satisfied questions, and by quoting them Carlyle lets the man condemn himself. The poor appear only in his phrase "My starving workers", which is chilling because it is spoken so casually. The reader does feel for the workers here, but the feeling comes from the mill-owner's indifference rather than from any description of them.\n\nCarlyle then makes his most powerful comparison. The mill-owner's excuse is set beside Cain's reply after killing his brother, "Am I my brother's keeper?" This allusion turns a businessman's defence into the words of the first murderer, an expression of moral outrage rather than of pity.\n\nThe second paragraph is direct attack. The mock-grand address "O sumptuous Merchant-Prince, illustrious game-preserving Duke" uses flattering titles sarcastically, and the question "is there no way of 'killing' thy brother but Cain's rude way!" suggests that neglect can kill as surely as violence. His language for the rich man's inner life is harsh: a "deadened soul, seared with the brute Idolatry of Sense", for whom "going to Hell is equivalent to not making money".\n\nThere is sympathy in the passage, in the idea that every person is "a fellow wayfarer in this Life-pilgrimage" who is owed more than wages. But the closing sentence, "Money he can be ordered to pay, but nothing more", returns to the limits of the rich man. Overall the statement is right: Carlyle's sympathy for the poor is real but implied, while his anger at the rich drives every sentence.`,
            },
            markScheme: {
              'How it is marked (10 marks)': [
                'Band 1 (1 to 2 marks): a quick opinion, or a detail or two, with little to back it up.',
                'Band 2 (3 to 4 marks): begins to test the statement against the text, with some evidence, but leaves parts of the text out.',
                'Band 3 (5 to 6 marks): judges the statement properly, using details from across the text and noticing how the language helps.',
                "Band 4 (7 to 8 marks): a clear, well-argued judgement with well-chosen evidence, showing how the writer's words and details reveal their feelings or views.",
                'Band 5 (9 to 10 marks): a detailed argument that convinces, takes in the whole text and makes sharp points about how it works, with every reference earning its place.',
                'Reach a judgement and keep to it, tracking the whole of Source B in order. A summary that does not judge holds itself down, and material from Source A earns nothing here.',
              ],
              'Points you might make': [
                `The shared blame of the opening: "We call it a Society"; "the totalest separation, isolation".`,
                `The mill-owner condemns himself in his own words ("What have I to do with them more?"); the poor appear only as "My starving workers".`,
                `The allusion to Cain ("Am I my brother's keeper?") is outrage, not pity.`,
                `Sarcastic titles ("O sumptuous Merchant-Prince") and harsh words for the rich man's "deadened soul".`,
                `Sympathy is implied in "a fellow wayfarer in this Life-pilgrimage", but the ending returns to the rich: "Money he can be ordered to pay, but nothing more".`,
                'A strong answer reaches a judgement on the statement and keeps to it through the whole passage.',
              ],
            },
          },
          {
            id: 'wjec-c2-m1-q5',
            questionNumber: 5,
            label: '1.5',
            questionText: `Bring together details from both texts to explain briefly what each writer says drives the society they describe. Make clear which text each detail comes from. [4]`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'summary',
            extract: `Source A (21st Century):\n${WJEC_C2_SOURCE_A_1}\n\nSource B (19th Century):\n${WJEC_C2_SOURCE_B_1}`,
            extractSource: `Source A: ${WJEC_C2_SOURCE_A_1_REF} | Source B: ${WJEC_C2_SOURCE_B_1_REF}`,
            modelAnswers: {
              'Grade 4-5': `In Source A, the writer says that public discussion is driven by algorithms that "optimise for engagement", feeding people outrage and fear because the algorithm is "simply optimising for its profit model". In Source B, Carlyle says that society is driven by money: people believe that "Cash-payment" is all they owe each other, which he calls "Mammon-worship", the worship of riches.`,
            },
            markScheme: {
              'How it is marked (4 marks)': [
                'Band 1 (1 mark): only a little relevant detail, or details from one text only. An answer on one text stays here, however full it is.',
                'Band 2 (2 marks): a relevant detail or two from each text.',
                'Band 3 (3 marks): several relevant details from both texts, brought together sensibly.',
                'Band 4 (4 marks): a good spread of exactly the right details from both texts, brought together clearly.',
                'Make clear which text each detail comes from. The question wants the details, not how they are written: comment on language earns nothing here.',
              ],
              'Details you might bring together': [
                'Source A: algorithms that chase engagement and profit, feeding people outrage, fear and their own prejudices, without caring what is true.',
                'Source B: the belief that paying wages is all one person owes another; the worship of money; the rich who think their duty ends with payment.',
              ],
            },
          },
          {
            id: 'wjec-c2-m1-q6',
            questionNumber: 6,
            label: '1.6',
            questionText: `Source A and Source B are both about the forces that shape how people treat each other.\n\nCompare:\n• what the writers say about these forces and their effects on people\n• how they get their ideas across.\n\nUse evidence from both texts, and make clear which text each point comes from. [10]`,
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'comparison',
            extract: `Source A (21st Century):\n${WJEC_C2_SOURCE_A_1}\n\nSource B (19th Century):\n${WJEC_C2_SOURCE_B_1}`,
            extractSource: `Source A: ${WJEC_C2_SOURCE_A_1_REF} | Source B: ${WJEC_C2_SOURCE_B_1_REF}`,
            modelAnswers: {
              'Grade 8-9': `Both writers describe a society organised around money and indifferent to the people inside it, but they place the indifference differently: for the writer of Source A it is built into a machine, while for Carlyle, in Source B, it is a belief that people hold.\n\nWhat they say is closely linked. In Source A the algorithm acts "not out of malice, but out of mathematical indifference", because it is "simply optimising for its profit model". In Source B, society has forgotten that "Cash-payment is not the sole relation of human beings", and the mill-owner asks, "What have I to do with them more?" In both, profit replaces responsibility, and the people affected, the public in Source A and the "starving workers" in Source B, are left to bear the consequences.\n\nBoth writers also expose a paradox. In Source A, what we think is "a space of freedom" has become "something far more controlling than any propaganda machine"; in Source B, what the age calls "a Society" is in fact "the totalest separation, isolation". Each shows that something which looks like a bond between people is really a division.\n\nTheir methods differ with their periods. The writer of Source A argues by explanation and personification, making the algorithm a "creature" with "unblinking attention", and uses a question answered in short fragments: "Outrage. Fear." The tone is calm but unsettling. Carlyle argues by accusation and allusion. He lets the mill-owner condemn himself in his own words, sets his excuse beside Cain's "Am I my brother's keeper?", and addresses the rich in mock-grand titles, "O sumptuous Merchant-Prince". His tone is passionate and scornful.\n\nThey also treat their readers differently. The modern writer includes the reader as one of the "we" who wrongly "think of the internet as a space of freedom", someone who may not see the danger. Carlyle includes his readers too ("We have profoundly forgotten"), but treats them as people who must be shamed into remembering their duties to one another.\n\nSo both writers warn that a system built on profit damages human relationships, but Source A blames a technology that cannot care, while Carlyle blames people who have chosen not to.`,
            },
            markScheme: {
              'How it is marked (10 marks)': [
                'Band 1 (1 to 2 marks): a detail or two, perhaps from one text only, or with no way to tell which text is meant.',
                'Band 2 (3 to 4 marks): some sound details from both texts, and a first try at saying how the writers get them across.',
                'Band 3 (5 to 6 marks): a fair number of sound details from both texts, and an attempt to explore how each writer presents them.',
                'Band 4 (7 to 8 marks): details from both texts examined properly, with detailed comment on the methods each writer uses.',
                "Band 5 (9 to 10 marks): both texts examined in depth, with a clear grasp of how and why each writer's methods work on readers.",
                'Both halves of the question count: what the writers say, and how they get it across. Draw links between the texts, and always make clear which text you mean.',
              ],
              'Points you might make': [
                `Both describe indifference driven by money: "mathematical indifference" and a "profit model" (Source A); "Cash-payment" as the only bond (Source B).`,
                'Both expose a paradox: freedom that controls (Source A); a society that isolates (Source B).',
                'Where the indifference lies: in a machine (Source A); in what people believe and choose (Source B).',
                'Methods: personification, explanation and fragments (Source A); accusation, quotation, biblical allusion and sarcastic titles (Source B).',
                'Tone: calm but unsettling (Source A); passionate and scornful (Source B).',
              ],
            },
          },
        ],
      },
      {
        id: 'wjec-c2-m1-writing',
        title: 'Section B: Writing',
        description:
          'Answer both questions in this section. You are advised to spend about 30 minutes on each: about 5 minutes planning and about 25 minutes writing. Each is worth 20 marks: 12 for communication and organisation, and 8 for writing accurately. Each piece should be about 300 to 400 words long.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-m1-q7',
            questionNumber: 1,
            label: '2.1',
            questionText: `Your school is running a digital wellbeing campaign.\n\nWrite an article for the school website persuading students to think carefully about how they use social media. [20]`,
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Who is really choosing what you see?\n\nOpen any social media app and it feels as though you are in charge. You choose who to follow, what to like and when to scroll. But have you ever wondered why the next video always seems to be exactly the one you cannot resist? It is not luck. It is design.\n\nEvery feed is chosen for you by software that learns from everything you do: what you watch to the end, what you skip, what makes you comment. Its job is to keep you on the app for as long as possible, because the longer you stay, the more adverts you see. It does not care whether what it shows you is true, kind or good for you. It only cares that you keep watching.\n\nThat matters, because the posts that keep us watching are often the ones that make us angry, anxious or envious. A feed full of arguments can leave us feeling that the world is more hostile than it really is. A feed full of perfect bodies and perfect holidays can leave us feeling that our own lives are not good enough. None of us chooses to feel like that, yet many of us do, night after night.\n\nThe good news is that you can take back some control. Start by noticing how you feel after scrolling. If an account regularly makes you feel worse, unfollow it. Turn off notifications for everything except messages from real friends, so that your phone stops calling you back. Set yourself a time limit, and use the settings that most apps now offer to remind you when you reach it. And keep your phone out of your bedroom at night, so that your last thoughts before sleep are your own.\n\nNone of this means giving social media up. It can be a brilliant way to stay in touch, share ideas and discover new things. But it should work for you, not the other way round.\n\nSo this week, try one change and see how it feels. You might be surprised by how much of your time, and your mood, you get back.`,
            },
            markScheme: {
              'How it is marked (20 marks)': [
                'Two marks are given and added together: up to 12 for communication and organisation (AO5) and up to 8 for writing accurately (AO6), each found on its own scale.',
                'Band 1 (AO5 1 to 2, AO6 1): some idea of the form and the reader, but little to say and ideas in a simple order; sentences mostly alike, and errors frequent.',
                'Band 2 (AO5 3 to 4, AO6 2 to 3): aware of the purpose and the reader, with a few reasons and paragraphs, though the points are not developed; sentences vary a little and most spelling is right.',
                'Band 3 (AO5 5 to 7, AO6 4 to 5): fits the task and the reader, with reasons that are developed and paragraphs that build a sensible case; mostly accurate, with a mix of sentences and punctuation.',
                'Band 4 (AO5 8 to 10, AO6 6 to 7): right for the task and the reader all the way through, with detailed, carefully chosen content and a clear structure; sentences varied for effect, and errors rare.',
                'Band 5 (AO5 11 to 12, AO6 8): ambitious, polished writing, with a tone exactly right for the reader, ideas developed in depth so that they persuade, and accuracy close to faultless, with a wide, precise vocabulary.',
              ],
              'What earns marks in this task': [
                'The features of an article for a school website: a headline, an engaging opening, and paragraphs that build to a clear call to action.',
                'A friendly, persuasive tone that suits fellow students, without lecturing.',
                'Ideas developed with reasons and practical advice, not a list of rules.',
                'Accurate spelling, punctuation and grammar, with varied sentences and well-chosen words: 8 of the 20 marks are for this.',
              ],
            },
          },
          {
            id: 'wjec-c2-m1-q8',
            questionNumber: 2,
            label: '2.2',
            questionText: `Your local council is asking residents whether the town needs more places where people can meet face to face, such as community centres, youth clubs and cafés.\n\nWrite a letter to the council giving your views. [20]`,
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Dear Councillors,\n\nI am writing in response to your consultation on meeting places in our town. As a sixteen-year-old who has lived here all my life, I believe that the town badly needs more places where people can meet face to face, and I would like to explain why.\n\nAt the moment, there are very few places where people can spend time together without spending money. The youth club closed two years ago, the library shuts at five o'clock, and the community hall is usually booked for private events. As a result, many young people meet only online, or gather at the bus station, where they are often moved on. Older residents face a similar problem: several of my neighbours who live alone tell me that they can go days without a proper conversation.\n\nThis matters more than it might seem. Talking to people in person builds friendships, confidence and trust in a way that messages on a screen cannot. A place where teenagers, parents and pensioners mix is a place where people come to understand one another. When communities lose those places, they become lonelier and more divided.\n\nI would therefore ask the council to consider three changes. First, reopen a youth club, even for two evenings a week, run by trained staff and volunteers. Second, keep the library open later on some evenings, with a space where people can sit, talk and play games. Third, support a community café in the town centre, perhaps in one of the empty shops on the high street, where everyone is welcome whether or not they buy anything.\n\nI realise that money is short. However, these ideas need not be expensive. Empty buildings could be used rent-free, local businesses might sponsor activities, and many residents, including me, would gladly volunteer.\n\nA town is more than its houses and shops. It is the people who live in it, and they need somewhere to meet. I hope the council will take this chance to bring our community back together.\n\nYours faithfully,\n\nCerys Jones`,
            },
            markScheme: {
              'How it is marked (20 marks)': [
                'Two marks are given and added together: up to 12 for communication and organisation (AO5) and up to 8 for writing accurately (AO6), each found on its own scale.',
                'Band 1 (AO5 1 to 2, AO6 1): some idea of the form and the reader, but little to say and ideas in a simple order; sentences mostly alike, and errors frequent.',
                'Band 2 (AO5 3 to 4, AO6 2 to 3): aware of the purpose and the reader, with a few reasons and paragraphs, though the points are not developed; sentences vary a little and most spelling is right.',
                'Band 3 (AO5 5 to 7, AO6 4 to 5): fits the task and the reader, with reasons that are developed and paragraphs that build a sensible case; mostly accurate, with a mix of sentences and punctuation.',
                'Band 4 (AO5 8 to 10, AO6 6 to 7): right for the task and the reader all the way through, with detailed, carefully chosen content and a clear structure; sentences varied for effect, and errors rare.',
                'Band 5 (AO5 11 to 12, AO6 8): ambitious, polished writing, with a tone exactly right for the reader, ideas developed in depth so that they persuade, and accuracy close to faultless, with a wide, precise vocabulary.',
              ],
              'What earns marks in this task': [
                'The features of a formal letter: a greeting, an opening that states your purpose, clear paragraphs and a suitable sign-off.',
                'A formal, constructive tone for councillors.',
                'A clear view, developed with reasons and local detail, and practical suggestions that consider cost.',
                'Accurate spelling, punctuation and grammar, with varied sentences and well-chosen words: 8 of the 20 marks are for this.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WJEC COMPONENT 2 - MOCK 2
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c2-mock-2',
    board: 'WJEC',
    paperNumber: 2,
    title:
      'Component 2: 19th and 21st Century Non-Fiction Reading and Transactional/Persuasive Writing',
    subtitle: 'English Language C700U20-1: Mock Exam 2',
    code: 'C700U20-1',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c2-m2-reading',
        title: 'Section A: Reading',
        description: `Answer all the questions in this section. You are advised to spend about an hour on it: about 10 minutes reading the two texts, then about 50 minutes answering. Questions 1.1 and 1.2 are on Source A, the 21st-century text; Questions 1.3 and 1.4 are on Source B, the 19th-century text; Questions 1.5 and 1.6 are on both.\n\nGlossary for Source B: novelty: newness, the pleasure of something not seen before; 'If water chokes, what will you drink after it?': an old proverb, meaning that when the remedy itself is what harms you, there is nothing left to try; in proper train: in the right state; railroad: railway; telegraphic transport: Ruskin imagines people sent from place to place as instantly as a telegraph message.`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-m2-q1',
            questionNumber: 1,
            label: '1.1',
            questionText: `Read Source A, the 21st-century text, and answer the questions below.\n\n(a) According to the writer, how many hours a day does the average teenager spend consuming media? [1]\n(b) What does the writer say the brain is really doing when we think we are multitasking? [1]\n(c) According to the study the writer mentions, how much lower do students who use social media while studying score on assessments? [1]`,
            marks: 3,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: `Source A (21st Century):\n${WJEC_C2_SOURCE_A_2}\n\nSource B (19th Century):\n${WJEC_C2_SOURCE_B_2}`,
            extractSource: `Source A: ${WJEC_C2_SOURCE_A_2_REF} | Source B: ${WJEC_C2_SOURCE_B_2_REF}`,
            modelAnswers: {
              'Grade 4-5': `(a) Seven to nine hours.\n(b) Switching rapidly between tasks.\n(c) 14% lower, on average.`,
            },
            markScheme: {
              'How it is marked (3 marks)': [
                'One mark for each correct answer, 3 marks in all. Each answer must come from Source A, the 21st-century text: an answer from Source B earns nothing.',
                "A short phrase is enough, in your own words or the writer's; no explanation is needed.",
              ],
              Answers: [
                '(a) Seven to nine hours.',
                '(b) Switching rapidly between tasks (accept: it is not multitasking at all).',
                '(c) 14% lower, on average.',
              ],
            },
          },
          {
            id: 'wjec-c2-m2-q2',
            questionNumber: 2,
            label: '1.2',
            questionText: `Source A is an article about young people and media. The writer wants to persuade readers that heavy use of media is harming young people.\n\nHow does the writer try to do this?\n\nIn your answer, comment on:\n• what the writer says\n• the writer's choice of language and tone\n• how the article is structured, and any other methods the writer uses.\n\n[10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A (21st Century):\n${WJEC_C2_SOURCE_A_2}`,
            extractSource: WJEC_C2_SOURCE_A_2_REF,
            modelAnswers: {
              'Grade 8-9': `The writer opens with a statistic that establishes the scale of the issue at once: "The average teenager now spends seven to nine hours per day consuming some form of media." The verb "consuming" presents media as something taken in, like food, and the length of time is meant to shock. The list that follows, "scrolling TikTok while watching Netflix while texting friends while doing homework", repeats "while" three times, so that the sentence itself feels crowded, mirroring a teenager's divided attention. Naming familiar platforms makes the scene instantly recognisable.\n\nThe writer then corrects the reader's everyday language. The sentence that begins "We call this" puts the word "multitasking" in quotation marks, as if to question it, and "but the neuroscience suggests something different is happening" brings in the authority of science. The short sentence "The brain is not multitasking." sounds like a firm correction, and the explanation that each switch "incurs a cognitive cost" uses technical vocabulary to make the argument sound expert. The paragraph ends with a striking antithesis: "What we experience as seamless is, neurologically, profoundly fragmented." The contrast between "seamless" and "fragmented", with "neurologically" placed between them, sets what we feel against what is really happening.\n\nThe second paragraph opens with a short topic sentence, "The consequences are significant.", and moves from academic harm to emotional harm. The figure "14% lower on assessments" gives specific evidence, although a careful reader may notice that the study is identified only by its year. The turn "But the problem goes deeper than academic performance" signals that the most serious harm is still to come. The repeated "They report" presents what follows as young people's own testimony, which makes it harder to dismiss: they report "unprecedented levels of anxiety and depression", and feeling "fake", performing "curated versions of themselves" for "thousands of strangers".\n\nThe ending is the most emotional part of the article. The phrase "a constant, underlying sense that they are not enough" is followed by a list of three, "not pretty enough, not funny enough, not interesting enough", in which the repeated "not ... enough" hammers home the sense of failure. Ending on the most personal kind of harm leaves the reader worried not just about marks but about young people's happiness.`,
            },
            markScheme: {
              'How it is marked (10 marks)': [
                'Band 1 (1 to 2 marks): a detail or two, but the answer is short and drifts from the question.',
                'Band 2 (3 to 4 marks): some useful details with a little comment on them, but parts of the text are missed.',
                "Band 3 (5 to 6 marks): a fair spread of details, and a start on explaining how the writer's words, tone and structure do their job.",
                'Band 4 (7 to 8 marks): plenty of well-chosen details, explained correctly, with analysis of how the writer influences the reader starting to come through, and subject terms that help.',
                "Band 5 (9 to 10 marks): the whole text covered with sharp, well-explained points, picking apart in detail how the writer's methods work on the reader.",
                'Work through the text in order and use all of it. Quotations should be long enough to make sense, each followed by comment: fragments with no explanation, or techniques listed with no link to the question, earn little.',
              ],
              'Points you might make': [
                `The opening statistic and the verb "consuming"; the list linked by "while" mirrors divided attention.`,
                `Everyday language corrected by science: "The brain is not multitasking."; "incurs a cognitive cost".`,
                `The antithesis "What we experience as seamless is, neurologically, profoundly fragmented."`,
                `Evidence ("14% lower on assessments"), though the study is named only by its year; the turn to "deeper" harm.`,
                `The repeated "They report" and the closing list "not pretty enough, not funny enough, not interesting enough".`,
              ],
            },
          },
          {
            id: 'wjec-c2-m2-q3',
            questionNumber: 3,
            label: '1.3',
            questionText: `Read Source B, the 19th-century text, and answer the questions below. The glossary at the start of this section explains its harder words.\n\n(a) According to Ruskin, what is the only cure when our enjoyment of new things grows dull? [1]\n(b) How far does Ruskin think a person should walk in a day to enjoy travelling most? [1]\n(c) What does Ruskin say that going by railway is like? [1]`,
            marks: 3,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: `Source B (19th Century):\n${WJEC_C2_SOURCE_B_2}`,
            extractSource: WJEC_C2_SOURCE_B_2_REF,
            modelAnswers: {
              'Grade 4-5': `(a) Patience and rest.\n(b) No more than ten or twelve miles.\n(c) Being sent somewhere like a parcel.`,
            },
            markScheme: {
              'How it is marked (3 marks)': [
                'One mark for each correct answer, 3 marks in all, from Source B, the 19th-century text. An answer from Source A earns nothing.',
                'Show that you have understood the older language by putting it simply: a long passage copied out does not show that.',
              ],
              Answers: [
                '(a) Patience and rest.',
                '(b) Not more than ten or twelve miles.',
                '(c) Being sent to a place, very like becoming a parcel (accept: it is not really travelling at all).',
              ],
            },
          },
          {
            id: 'wjec-c2-m2-q4',
            questionNumber: 4,
            label: '1.4',
            questionText: `Read Source B again.\n\nA student said: ‘Ruskin's argument against speed is more amusing than convincing.’\n\nHow far do you agree with this view?\n\nIn your answer, give your own view of how Ruskin presents novelty, speed and travel across the whole text, and explain how his choices of words and details create that view. Support your answer with references to the text. [10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'evaluation',
            extract: `Source B (19th Century):\n${WJEC_C2_SOURCE_B_2}`,
            extractSource: WJEC_C2_SOURCE_B_2_REF,
            modelAnswers: {
              'Grade 8-9': `I disagree, although Ruskin is certainly amusing. His humour is not decoration; it is the way he makes a serious argument memorable, and underneath it lies careful reasoning.\n\nHe begins with an argument about the mind rather than with jokes. If we "seek to recover the mental energy by more quickly repeated and brighter novelty, it is all over with our enjoyment". The idea is that chasing new pleasures faster only wears us out. He supports it with a paradox: "if we try to obtain perpetual change, change itself will become monotonous". This is a convincing point, because most readers have felt something exciting turn dull through repetition. The old proverb he quotes, "If water chokes, what will you drink after it?", adds the weight of traditional wisdom.\n\nHis advice is set out clearly and logically: there are "two points of practical wisdom", introduced with "first" and "secondly". The structure makes him sound like a teacher giving a reasoned lesson, not a comedian. His example is gentle and concrete: "a turn of a country road, with a cottage beside it, which we have not seen before, is as much as we need for refreshment". The picture of a traveller hurrying past to "take two cottages at a time" is lightly comic, but it makes his point visible.\n\nThe humour is strongest when he turns to the railway. Going by rail is merely "being sent" to a place, and "very little different from becoming a parcel" is funny because it turns passengers into packages. The final comparison is the most absurd: a traveller who would "pack a day of such happiness into an hour of railroad" is like someone who would "concentrate his dinner into a pill". These lines amuse, but they also work as arguments by analogy: we can all see that a dinner in a pill would destroy the pleasure of eating, so we are invited to accept that rushing destroys the pleasure of travel.\n\nSome readers may feel that his claim that "all travelling becomes dull in exact proportion to its rapidity" is too absolute, and that he writes for people with time to walk twelve miles a day. But that does not make the passage merely amusing. Ruskin is convincing precisely because his humour and his reasoning work together.`,
            },
            markScheme: {
              'How it is marked (10 marks)': [
                'Band 1 (1 to 2 marks): a quick opinion, or a detail or two, with little to back it up.',
                'Band 2 (3 to 4 marks): begins to test the statement against the text, with some evidence, but leaves parts of the text out.',
                'Band 3 (5 to 6 marks): judges the statement properly, using details from across the text and noticing how the language helps.',
                "Band 4 (7 to 8 marks): a clear, well-argued judgement with well-chosen evidence, showing how the writer's words and details reveal their feelings or views.",
                'Band 5 (9 to 10 marks): a detailed argument that convinces, takes in the whole text and makes sharp points about how it works, with every reference earning its place.',
                'Reach a judgement and keep to it, tracking the whole of Source B in order. A summary that does not judge holds itself down, and material from Source A earns nothing here.',
              ],
              'Points you might make': [
                `An argument about the mind and a paradox: "if we try to obtain perpetual change, change itself will become monotonous".`,
                `Clear structure ("two points of practical wisdom", "first", "secondly") and a gentle, concrete example of the country road.`,
                `Humour as argument: the railway traveller "becoming a parcel"; the dinner concentrated "into a pill".`,
                `Possible weaknesses: an absolute claim ("in exact proportion to its rapidity") and an assumed reader with time to walk.`,
                'A strong answer reaches a judgement on the statement and keeps to it through the whole passage.',
              ],
            },
          },
          {
            id: 'wjec-c2-m2-q5',
            questionNumber: 5,
            label: '1.5',
            questionText: `Bring together details from both texts to explain briefly what each writer says happens to people who try to take in too much at once. Make clear which text each detail comes from. [4]`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'summary',
            extract: `Source A (21st Century):\n${WJEC_C2_SOURCE_A_2}\n\nSource B (19th Century):\n${WJEC_C2_SOURCE_B_2}`,
            extractSource: `Source A: ${WJEC_C2_SOURCE_A_2_REF} | Source B: ${WJEC_C2_SOURCE_B_2_REF}`,
            modelAnswers: {
              'Grade 4-5': `In Source A, teenagers who use several kinds of media at once are not really multitasking: the brain is "rapidly switching between tasks", which leaves their attention "profoundly fragmented" and, according to one study, lowers their marks. In Source B, Ruskin says that people who seek "more quickly repeated and brighter novelty" lose their enjoyment altogether, so that "change itself will become monotonous".`,
            },
            markScheme: {
              'How it is marked (4 marks)': [
                'Band 1 (1 mark): only a little relevant detail, or details from one text only. An answer on one text stays here, however full it is.',
                'Band 2 (2 marks): a relevant detail or two from each text.',
                'Band 3 (3 marks): several relevant details from both texts, brought together sensibly.',
                'Band 4 (4 marks): a good spread of exactly the right details from both texts, brought together clearly.',
                'Make clear which text each detail comes from. The question wants the details, not how they are written: comment on language earns nothing here.',
              ],
              'Details you might bring together': [
                'Source A: attention split by switching between screens; lower marks; anxiety, depression and a feeling of not being enough.',
                'Source B: enjoyment worn away by constant novelty; change itself becoming dull; travel that is too fast becoming no pleasure at all.',
              ],
            },
          },
          {
            id: 'wjec-c2-m2-q6',
            questionNumber: 6,
            label: '1.6',
            questionText: `Source A and Source B are both about the effects of speed and constant change on people.\n\nCompare:\n• what the writers say about these effects\n• how they get their ideas across.\n\nUse evidence from both texts, and make clear which text each point comes from. [10]`,
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'comparison',
            extract: `Source A (21st Century):\n${WJEC_C2_SOURCE_A_2}\n\nSource B (19th Century):\n${WJEC_C2_SOURCE_B_2}`,
            extractSource: `Source A: ${WJEC_C2_SOURCE_A_2_REF} | Source B: ${WJEC_C2_SOURCE_B_2_REF}`,
            modelAnswers: {
              'Grade 8-9': `Both writers argue that speed and constant novelty damage our attention and our enjoyment, but the writer of Source A diagnoses a modern problem with scientific evidence, while Ruskin, in Source B, offers a remedy based on personal judgement and wit.\n\nWhat they say is strikingly similar, and both express it through a paradox. The modern writer's is that "What we experience as seamless is, neurologically, profoundly fragmented"; Ruskin's is that "if we try to obtain perpetual change, change itself will become monotonous". Ruskin's traveller who would "take two cottages at a time" is close to the modern writer's account of a brain "rapidly switching between tasks". Both believe that trying to take in more leaves us with less.\n\nThey differ in what they think should be done. The writer of Source A describes the harm, moving from a "cognitive cost" to "anxiety and depression", but offers no solution. Ruskin prescribes one: "patience and rest", and "a quiet walk along not more than ten or twelve miles of road a day".\n\nTheir evidence and methods are very different. The modern writer relies on figures, "seven to nine hours per day" and "14% lower on assessments", and on the authority of "the neuroscience", with technical vocabulary that makes the argument sound expert. Ruskin relies on his own authority ("I say, first") and on analogy, and his humour makes his point memorable: railway travel is "very little different from becoming a parcel", and rushing a journey is like choosing to "concentrate his dinner into a pill".\n\nTheir tones and readers differ too. The modern writer is urgent and clinical, ending with the painful list "not pretty enough, not funny enough, not interesting enough", which speaks to young people's feelings. Ruskin is calm and confident, writing for leisured readers free to choose how fast they travel, and appealing to "any person who has all his senses about him".\n\nSo both writers warn that speed can rob us of enjoyment, but the modern writer wants readers to recognise a danger, while Ruskin wants them to slow down and live differently.`,
            },
            markScheme: {
              'How it is marked (10 marks)': [
                'Band 1 (1 to 2 marks): a detail or two, perhaps from one text only, or with no way to tell which text is meant.',
                'Band 2 (3 to 4 marks): some sound details from both texts, and a first try at saying how the writers get them across.',
                'Band 3 (5 to 6 marks): a fair number of sound details from both texts, and an attempt to explore how each writer presents them.',
                'Band 4 (7 to 8 marks): details from both texts examined properly, with detailed comment on the methods each writer uses.',
                "Band 5 (9 to 10 marks): both texts examined in depth, with a clear grasp of how and why each writer's methods work on readers.",
                'Both halves of the question count: what the writers say, and how they get it across. Draw links between the texts, and always make clear which text you mean.',
              ],
              'Points you might make': [
                `Both use a paradox: "seamless" yet "fragmented" (Source A); change that becomes "monotonous" (Source B).`,
                'Diagnosis without a cure (Source A); a prescription of patience, rest and slow walking (Source B).',
                'Evidence: figures, a study and neuroscience (Source A); personal authority and analogy (Source B).',
                'Methods: technical vocabulary and lists (Source A); wit and absurd comparisons (Source B).',
                'Tone and readers: urgent, speaking to young people (Source A); calm and confident, for leisured readers (Source B).',
              ],
            },
          },
        ],
      },
      {
        id: 'wjec-c2-m2-writing',
        title: 'Section B: Writing',
        description:
          'Answer both questions in this section. You are advised to spend about 30 minutes on each: about 5 minutes planning and about 25 minutes writing. Each is worth 20 marks: 12 for communication and organisation, and 8 for writing accurately. Each piece should be about 300 to 400 words long.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-m2-q7',
            questionNumber: 1,
            label: '2.1',
            questionText: `A local newspaper has asked its readers whether technology has improved or harmed the quality of modern life.\n\nWrite a letter to the editor giving your views. [20]`,
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Dear Editor,\n\nYour question about whether technology has improved or harmed modern life could not be more timely. As a teenager who has never known a world without smartphones, I would like to offer my answer: technology has improved our lives enormously, but only when we stay in charge of it.\n\nConsider first what we have gained. My grandmother can see her great-grandchildren on a video call every week, though they live on the other side of the world. My younger brother, who has dyslexia, uses software that reads his textbooks aloud, and his confidence has grown as a result. When my father was ill last winter, he booked appointments, ordered his prescriptions and checked his test results without leaving the house. These are not small conveniences. They have made real differences to real lives.\n\nYet I cannot pretend that everything has changed for the better. Walk into any café and you will see friends sitting together in silence, each staring at a screen. Many of us reach for our phones as soon as we wake and scroll until we fall asleep. Constant notifications make it hard to concentrate on anything for long, and the endless stream of perfect photographs can leave us feeling that our own lives fall short.\n\nThe problem, I believe, is not technology itself but the way it is designed and the way we use it. Many apps are built to hold our attention for as long as possible, because that is how they make money. If we let them, they will take hours from every day. But we can set limits, switch off notifications and keep certain times, such as meals and the last hour before bed, free from screens.\n\nSo has technology improved the quality of modern life? Yes, on balance, it has. But like any powerful tool, it needs to be used with care. The question we should be asking is not whether technology is good or bad, but whether we are using it, or it is using us.\n\nYours faithfully,\n\nTom Ellis`,
            },
            markScheme: {
              'How it is marked (20 marks)': [
                'Two marks are given and added together: up to 12 for communication and organisation (AO5) and up to 8 for writing accurately (AO6), each found on its own scale.',
                'Band 1 (AO5 1 to 2, AO6 1): some idea of the form and the reader, but little to say and ideas in a simple order; sentences mostly alike, and errors frequent.',
                'Band 2 (AO5 3 to 4, AO6 2 to 3): aware of the purpose and the reader, with a few reasons and paragraphs, though the points are not developed; sentences vary a little and most spelling is right.',
                'Band 3 (AO5 5 to 7, AO6 4 to 5): fits the task and the reader, with reasons that are developed and paragraphs that build a sensible case; mostly accurate, with a mix of sentences and punctuation.',
                'Band 4 (AO5 8 to 10, AO6 6 to 7): right for the task and the reader all the way through, with detailed, carefully chosen content and a clear structure; sentences varied for effect, and errors rare.',
                'Band 5 (AO5 11 to 12, AO6 8): ambitious, polished writing, with a tone exactly right for the reader, ideas developed in depth so that they persuade, and accuracy close to faultless, with a wide, precise vocabulary.',
              ],
              'What earns marks in this task': [
                'The features of a letter to a newspaper: a greeting to the editor, an opening that states your view, clear paragraphs and a sign-off.',
                "A formal but engaging tone that would persuade the paper's readers.",
                'A clear view, developed with reasons and examples, that weighs the gains against the harm.',
                'Accurate spelling, punctuation and grammar, with varied sentences and well-chosen words: 8 of the 20 marks are for this.',
              ],
            },
          },
          {
            id: 'wjec-c2-m2-q8',
            questionNumber: 2,
            label: '2.2',
            questionText: `A magazine for young people is publishing reviews of places, events or journeys that readers have enjoyed.\n\nWrite a review of a place, event or journey that you enjoyed because you took your time over it. [20]`,
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Review: the slow train to the sea\n\nRating: five stars out of five\n\nThere is a fast way to reach the coast from our town, and there is a slow way. The fast way is the motorway: forty minutes of grey lanes, petrol stations and the back of a lorry. The slow way is the little train that stops at every village along the valley, and takes nearly two hours. Last summer I tried the slow way for the first time. I will never go the fast way again.\n\nThe first thing you notice is the pace. The train never seems to hurry. It rattles gently past fields of sheep and along the edge of the river, so close to the water that you can see herons standing in the shallows. Because it moves slowly, you actually see things. At one stop, a farmer waved from his tractor. At another, a boy climbed aboard with a fishing rod taller than he was.\n\nThe stations are a delight in themselves. Several still have their old wooden benches and hanging baskets, looked after by volunteers, and one has a tiny café where you can buy a cup of tea and a slice of bara brith through a window on the platform. Nobody rushes. The guard knows half the passengers by name.\n\nOf course, the slow train is not for everyone. If you are late for a meeting, it will drive you mad, and there is no trolley service, so take your own snacks. The seats are comfortable but worn, and the signal for your phone disappears for much of the journey. Personally, I found that a blessing: with nothing to scroll, I watched the view, talked to my mum and read half a book.\n\nThe final stretch is the best of all. The line curves round a hill, and suddenly the whole bay opens out below you, silver and blue, with the tide coming in across the sand. Half the carriage leaned to the window at the same moment.\n\nVerdict: if you want to arrive, take the motorway. If you want to travel, take the slow train. It turns a journey into part of the day out, and reminds you that getting somewhere can be as enjoyable as being there.`,
            },
            markScheme: {
              'How it is marked (20 marks)': [
                'Two marks are given and added together: up to 12 for communication and organisation (AO5) and up to 8 for writing accurately (AO6), each found on its own scale.',
                'Band 1 (AO5 1 to 2, AO6 1): some idea of the form and the reader, but little to say and ideas in a simple order; sentences mostly alike, and errors frequent.',
                'Band 2 (AO5 3 to 4, AO6 2 to 3): aware of the purpose and the reader, with a few reasons and paragraphs, though the points are not developed; sentences vary a little and most spelling is right.',
                'Band 3 (AO5 5 to 7, AO6 4 to 5): fits the task and the reader, with reasons that are developed and paragraphs that build a sensible case; mostly accurate, with a mix of sentences and punctuation.',
                'Band 4 (AO5 8 to 10, AO6 6 to 7): right for the task and the reader all the way through, with detailed, carefully chosen content and a clear structure; sentences varied for effect, and errors rare.',
                'Band 5 (AO5 11 to 12, AO6 8): ambitious, polished writing, with a tone exactly right for the reader, ideas developed in depth so that they persuade, and accuracy close to faultless, with a wide, precise vocabulary.',
              ],
              'What earns marks in this task': [
                'The features of a review: a title, perhaps a rating, a description of the experience, its good and bad points, and a clear verdict.',
                'A lively, personal tone that suits a magazine for young people.',
                'Vivid, precise detail that shows why taking time made the experience worthwhile, with a fair word on its drawbacks.',
                'Accurate spelling, punctuation and grammar, with varied sentences and well-chosen words: 8 of the 20 marks are for this.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WJEC COMPONENT 2 - MOCK 3
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c2-mock-3',
    board: 'WJEC',
    paperNumber: 2,
    title:
      'Component 2: 19th and 21st Century Non-Fiction Reading and Transactional/Persuasive Writing',
    subtitle: 'English Language C700U20-1: Mock Exam 3',
    code: 'C700U20-1',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c2-m3-reading',
        title: 'Section A: Reading',
        description: `Answer all the questions in this section. You are advised to spend about an hour on it: about 10 minutes reading the two texts, then about 50 minutes answering. Questions 1.1 and 1.2 are on Source A, the 21st-century text; Questions 1.3 and 1.4 are on Source B, the 19th-century text; Questions 1.5 and 1.6 are on both.\n\nGlossary for Source B: joint stools: simple wooden stools made by a joiner; parlour: a private sitting room, here one where the farmer's family could sit apart from their workers; bell-pull: a cord pulled to ring for a servant; stock-jobber: a dealer in stocks and shares, for Cobbett someone grown rich on money rather than work; 'Squire: a country gentleman, a title Cobbett mocks the farmer's family for taking; Hodge, Betty: plain country names (Cobbett means that the family were once ordinary farming people); transmuted: changed; work-people: farm workers; pauperism: being so poor as to depend on poor relief from the parish.`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-m3-q1',
            questionNumber: 1,
            label: '1.1',
            questionText: `Read Source A, the 21st-century text, and answer the questions below.\n\n(a) According to the writer, when is the climate crisis happening? [1]\n(b) Give one example of extreme weather that the writer says is becoming routine. [1]\n(c) How much does a cheap plastic bottle cost in the shop, according to the writer? [1]`,
            marks: 3,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: `Source A (21st Century):\n${WJEC_C2_SOURCE_A_3}\n\nSource B (19th Century):\n${WJEC_C2_SOURCE_B_3}`,
            extractSource: `Source A: ${WJEC_C2_SOURCE_A_3_REF} | Source B: ${WJEC_C2_SOURCE_B_3_REF}`,
            modelAnswers: {
              'Grade 4-5': `(a) Now.\n(b) Floods.\n(c) Two pounds.`,
            },
            markScheme: {
              'How it is marked (3 marks)': [
                'One mark for each correct answer, 3 marks in all. Each answer must come from Source A, the 21st-century text: an answer from Source B earns nothing.',
                "A short phrase is enough, in your own words or the writer's; no explanation is needed.",
              ],
              Answers: [
                '(a) Now (accept: it is already under way, not in the future).',
                '(b) Any one of: droughts; floods; hurricanes.',
                '(c) Two pounds.',
              ],
            },
          },
          {
            id: 'wjec-c2-m3-q2',
            questionNumber: 2,
            label: '1.2',
            questionText: `Source A is an article about the climate crisis. The writer wants to persuade readers that the way goods are priced is stopping us from tackling the crisis.\n\nHow does the writer try to do this?\n\nIn your answer, comment on:\n• what the writer says\n• the writer's choice of language and tone\n• how the article is structured, and any other methods the writer uses.\n\n[10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A (21st Century):\n${WJEC_C2_SOURCE_A_3}`,
            extractSource: WJEC_C2_SOURCE_A_3_REF,
            modelAnswers: {
              'Grade 8-9': `The writer builds urgency by bringing the future into the present. The opening pair of short sentences, "The climate crisis is not a future problem. It is happening now.", contradicts a common assumption and replaces it with an uncomfortable fact. The parallel sentences that follow, "We are not preparing for a catastrophe that might occur in fifty years. We are living through the early stages of a catastrophe that is already underway.", repeat the word "catastrophe" to stress how serious the situation is, and the inclusive "We" places the reader inside it.\n\nShort statements then present the evidence as plain fact: "The glaciers are melting. The oceans are warming." Their simple, parallel structure makes them sound undeniable. The list set between dashes, "droughts, floods, hurricanes of unprecedented intensity", widens the picture, and the word "routine" is chilling, because it suggests that disaster has become normal. The paragraph then turns on "And yet": the real problem is not that the crisis is unknown, but that "we are paralysed by inaction". The word "paralysed" suggests helplessness, as if society were frozen.\n\nThe second paragraph moves from description to explanation, in a calmer, more analytical tone. The writer admits that "The reasons for this paralysis are complex", which makes the argument seem fair, before focusing on "one factor": "an economic system in which the price of a product bears no relationship to the true cost of its production". The verb "constructed" matters, because it shows that the system was made by people and could therefore be changed.\n\nThe plastic bottle is the most effective example, because it takes an everyday object and exposes the gap between its price and its real cost. A second list, again set between dashes, itemises that cost: "the carbon released in its manufacture, the energy required to transport it, the environmental damage caused by its disposal". The technical verb "externalised" lends the argument economic credibility, and naming the victims, "the planet" and "future generations", gives it moral weight. The final sentence is carefully balanced: because these costs "do not appear on a price tag, they do not appear in our moral calculus". The repetition of "do not appear" suggests that the economy does not merely harm the planet but hides the harm from our consciences, which is why, the writer believes, we fail to act.`,
            },
            markScheme: {
              'How it is marked (10 marks)': [
                'Band 1 (1 to 2 marks): a detail or two, but the answer is short and drifts from the question.',
                'Band 2 (3 to 4 marks): some useful details with a little comment on them, but parts of the text are missed.',
                "Band 3 (5 to 6 marks): a fair spread of details, and a start on explaining how the writer's words, tone and structure do their job.",
                'Band 4 (7 to 8 marks): plenty of well-chosen details, explained correctly, with analysis of how the writer influences the reader starting to come through, and subject terms that help.',
                "Band 5 (9 to 10 marks): the whole text covered with sharp, well-explained points, picking apart in detail how the writer's methods work on the reader.",
                'Work through the text in order and use all of it. Quotations should be long enough to make sense, each followed by comment: fragments with no explanation, or techniques listed with no link to the question, earn little.',
              ],
              'Points you might make': [
                `Urgency: "The climate crisis is not a future problem. It is happening now."; parallel sentences repeating "catastrophe"; the inclusive "We".`,
                `Evidence as plain fact ("The glaciers are melting."), a list between dashes, and the chilling word "routine".`,
                `The turn "And yet" to the real problem: "we are paralysed by inaction".`,
                `A fair, analytical explanation ("The reasons for this paralysis are complex"); "constructed" implies the system could change.`,
                `The plastic bottle exposes hidden costs; "externalised"; the balanced ending on "our moral calculus".`,
              ],
            },
          },
          {
            id: 'wjec-c2-m3-q3',
            questionNumber: 3,
            label: '1.3',
            questionText: `Read Source B, the 19th-century text, and answer the questions below. The glossary at the start of this section explains its harder words.\n\n(a) What was the old furniture in the farmhouse made of? [1]\n(b) According to Cobbett, how many people probably lived in the farmhouse in former times? [1]\n(c) According to Cobbett, why do farmers no longer feed and lodge their workers? [1]`,
            marks: 3,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: `Source B (19th Century):\n${WJEC_C2_SOURCE_B_3}`,
            extractSource: WJEC_C2_SOURCE_B_3_REF,
            modelAnswers: {
              'Grade 4-5': `(a) Oak.\n(b) Between ten and fifteen men, boys and maids.\n(c) Because feeding and lodging them would cost more than the low wages they now pay.`,
            },
            markScheme: {
              'How it is marked (3 marks)': [
                'One mark for each correct answer, 3 marks in all, from Source B, the 19th-century text. An answer from Source A earns nothing.',
                'Show that you have understood the older language by putting it simply: a long passage copied out does not show that.',
              ],
              Answers: [
                '(a) Oak.',
                '(b) From ten to fifteen men, boys and maids.',
                '(c) Keeping them in the house would cost more than the very low wages the farmers now pay (accept: it is cheaper to pay them low wages than to feed and lodge them).',
              ],
            },
          },
          {
            id: 'wjec-c2-m3-q4',
            questionNumber: 4,
            label: '1.4',
            questionText: `Read Source B again.\n\nA student said: ‘Cobbett's anger is aimed more at the farmer's family than at the system he blames.’\n\nHow far do you agree with this view?\n\nIn your answer, give your own view of how Cobbett presents the farmhouse, the family and the labourers across the whole text, and explain how his choices of words and details create that view. Support your answer with references to the text. [10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'evaluation',
            extract: `Source B (19th Century):\n${WJEC_C2_SOURCE_B_3}`,
            extractSource: WJEC_C2_SOURCE_B_3_REF,
            modelAnswers: {
              'Grade 8-9': `I disagree. Much of Cobbett's sarcasm is directed at the farmer's family and their new possessions, but he is careful to present them as products of "this accursed system", and his strongest anger is kept for what that system has done to the labourers.\n\nThe passage opens with regret for the past: the farmhouse "was formerly the scene of plain manners and plentiful living". The list of solid furniture, "Oak clothes-chests, oak bedsteads, oak chests of drawers, and oak tables to eat on", with its repeated "oak", suggests strength and honesty, and tables "well supplied with joint stools" imply a house that once fed many people. Now "all appeared to be in a state of decay and nearly of disuse", and the contrast makes the change feel like a loss.\n\nHis mockery of the family's new tastes is certainly sharp. The exclamation "Aye, and a carpet and bell-pull too!" is sarcastic, and the parlour is "as bare-faced upstart as any stock-jobber in the kingdom can boast of". Repeating the insult in "the true stock-jobber style" links the family with men grown rich on money rather than work. The imagined titles, "'Squire Charington and the Miss Charington's", mock their pretensions.\n\nHowever, the same sentence that mocks them also excuses them. Plain "Master Charington, and his son Hodge, and his daughter Betty" have been "transmuted into a species of mock gentlefolks" by "this accursed system", and the verb "transmuted" suggests that they were changed by a force beyond their control. The contrast that follows, "while it has ground the labourers down into real slaves", shows who has really suffered: "mock" gentlefolk on one side, "real" slaves on the other.\n\nCobbett then makes his argument about the system explicit. He asks "Why do not farmers now feed and lodge their work-people, as they did formerly?" and answers plainly: "Because they cannot keep them upon so little as they give them in wages. This is the real cause of the change." Here the blame falls on low wages, not on the family's vanity. The ending widens the anger to the whole nation: "the pauperism and the crimes that now disgrace this once happy and moral England."\n\nSo Cobbett enjoys mocking the Charingtons, but his anger is aimed at the system, and at what it has done to the labourers, far more than at one family.`,
            },
            markScheme: {
              'How it is marked (10 marks)': [
                'Band 1 (1 to 2 marks): a quick opinion, or a detail or two, with little to back it up.',
                'Band 2 (3 to 4 marks): begins to test the statement against the text, with some evidence, but leaves parts of the text out.',
                'Band 3 (5 to 6 marks): judges the statement properly, using details from across the text and noticing how the language helps.',
                "Band 4 (7 to 8 marks): a clear, well-argued judgement with well-chosen evidence, showing how the writer's words and details reveal their feelings or views.",
                'Band 5 (9 to 10 marks): a detailed argument that convinces, takes in the whole text and makes sharp points about how it works, with every reference earning its place.',
                'Reach a judgement and keep to it, tracking the whole of Source B in order. A summary that does not judge holds itself down, and material from Source A earns nothing here.',
              ],
              'Points you might make': [
                `Regret for "plain manners and plentiful living", and the repeated "oak" against "a state of decay and nearly of disuse".`,
                `Sarcasm at the family's new tastes: "Aye, and a carpet and bell-pull too!"; "the true stock-jobber style".`,
                `The same sentence excuses them: "transmuted" by "this accursed system" into "mock gentlefolks", while the labourers are "real slaves".`,
                `The explicit cause: "Because they cannot keep them upon so little as they give them in wages."`,
                `The ending widens the anger to "this once happy and moral England".`,
                'A strong answer reaches a judgement on the statement and keeps to it through the whole passage.',
              ],
            },
          },
          {
            id: 'wjec-c2-m3-q5',
            questionNumber: 5,
            label: '1.5',
            questionText: `Bring together details from both texts to explain briefly who, according to each writer, pays the hidden cost of the system they describe. Make clear which text each detail comes from. [4]`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'summary',
            extract: `Source A (21st Century):\n${WJEC_C2_SOURCE_A_3}\n\nSource B (19th Century):\n${WJEC_C2_SOURCE_B_3}`,
            extractSource: `Source A: ${WJEC_C2_SOURCE_A_3_REF} | Source B: ${WJEC_C2_SOURCE_B_3_REF}`,
            modelAnswers: {
              'Grade 4-5': `In Source A, the true cost of cheap goods is pushed onto "the planet and onto future generations", because it does not appear on the price tag. In Source B, the cost of the farmer's family's new comforts is paid by the labourers, who are no longer fed and lodged and have been "ground ... down into real slaves" by low wages.`,
            },
            markScheme: {
              'How it is marked (4 marks)': [
                'Band 1 (1 mark): only a little relevant detail, or details from one text only. An answer on one text stays here, however full it is.',
                'Band 2 (2 marks): a relevant detail or two from each text.',
                'Band 3 (3 marks): several relevant details from both texts, brought together sensibly.',
                'Band 4 (4 marks): a good spread of exactly the right details from both texts, brought together clearly.',
                'Make clear which text each detail comes from. The question wants the details, not how they are written: comment on language earns nothing here.',
              ],
              'Details you might bring together': [
                'Source A: the planet, through carbon, energy and waste, and future generations, who will live with the damage.',
                'Source B: the farm labourers, no longer fed and lodged by the farmer, paid too little to live on, and ground down into poverty.',
              ],
            },
          },
          {
            id: 'wjec-c2-m3-q6',
            questionNumber: 6,
            label: '1.6',
            questionText: `Source A and Source B are both about the harm done by an economic system.\n\nCompare:\n• what the writers say about this harm and who pays for it\n• how they get their ideas across.\n\nUse evidence from both texts, and make clear which text each point comes from. [10]`,
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'comparison',
            extract: `Source A (21st Century):\n${WJEC_C2_SOURCE_A_3}\n\nSource B (19th Century):\n${WJEC_C2_SOURCE_B_3}`,
            extractSource: `Source A: ${WJEC_C2_SOURCE_A_3_REF} | Source B: ${WJEC_C2_SOURCE_B_3_REF}`,
            modelAnswers: {
              'Grade 8-9': `Both writers identify a hidden cost that someone else is made to pay, and both blame a system rather than wicked individuals; they differ in who pays and in how they make their case.\n\nFor the writer of Source A, the cost is environmental: the true cost of a product is "externalised" onto "the planet and onto future generations". For Cobbett, in Source B, it is human: the comfort of the new parlour, with its "mahogany table" and "decanters", is paid for by labourers who are no longer fed and lodged. Both explain the harm as the working of a system. The modern writer's system is one "we have constructed", in which a cost missing from the "price tag" goes missing from "our moral calculus". Cobbett's is "this accursed system", which has "transmuted" a farming family "into a species of mock gentlefolks, while it has ground the labourers down into real slaves".\n\nIndividuals stand in different relations to these systems. In Source A, "we" are all implicated, as consumers who cannot see the cost. Cobbett names individuals, "plain Master Charington, and his son Hodge", and sneers at their pretensions, yet grants that they have been changed by a force larger than themselves, while the labourers appear only as a class.\n\nTheir evidence and methods differ with their periods. The modern writer reasons from a typical example, a plastic bottle that "costs two pounds in the shop", lists its hidden costs and uses technical vocabulary such as "externalised". The tone is urgent but analytical. Cobbett reasons from what he saw, oak furniture "in a state of decay and nearly of disuse", and his style is personal and sarcastic ("Aye, and a carpet and bell-pull too!"), with a question that he answers himself: "Why do not farmers now feed and lodge their work-people, as they did formerly?"\n\nBoth, finally, see moral damage. Source A warns of costs that no longer appear in "our moral calculus"; Cobbett laments "the pauperism and the crimes that now disgrace this once happy and moral England". The modern writer wants readers to see what their purchases hide; Cobbett wants them to see what one class's comfort has cost another.`,
            },
            markScheme: {
              'How it is marked (10 marks)': [
                'Band 1 (1 to 2 marks): a detail or two, perhaps from one text only, or with no way to tell which text is meant.',
                'Band 2 (3 to 4 marks): some sound details from both texts, and a first try at saying how the writers get them across.',
                'Band 3 (5 to 6 marks): a fair number of sound details from both texts, and an attempt to explore how each writer presents them.',
                'Band 4 (7 to 8 marks): details from both texts examined properly, with detailed comment on the methods each writer uses.',
                "Band 5 (9 to 10 marks): both texts examined in depth, with a clear grasp of how and why each writer's methods work on readers.",
                'Both halves of the question count: what the writers say, and how they get it across. Draw links between the texts, and always make clear which text you mean.',
              ],
              'Points you might make': [
                'Who pays: the planet and future generations (Source A); the labourers (Source B).',
                `Both blame a system: one "we have constructed" (Source A); "this accursed system" (Source B).`,
                `Individuals: "we" all implicated as consumers (Source A); the named Charingtons mocked but excused, the labourers seen only as a class (Source B).`,
                'Methods: a typical example, lists and technical words (Source A); eyewitness detail, sarcasm and a question answered (Source B).',
                'Both see moral damage: costs missing from "our moral calculus" (Source A); a disgraced England (Source B).',
              ],
            },
          },
        ],
      },
      {
        id: 'wjec-c2-m3-writing',
        title: 'Section B: Writing',
        description:
          'Answer both questions in this section. You are advised to spend about 30 minutes on each: about 5 minutes planning and about 25 minutes writing. Each is worth 20 marks: 12 for communication and organisation, and 8 for writing accurately. Each piece should be about 300 to 400 words long.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-m3-q7',
            questionNumber: 1,
            label: '2.1',
            questionText: `Your school is running a sustainable living campaign.\n\nWrite an article for the school website persuading students to make more environmentally responsible choices. [20]`,
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Small choices, big difference\n\nIt is easy to feel that one person cannot change anything about the climate. The problem is enormous, and the decisions that matter most are made by governments and businesses, not by teenagers. So why should you bother? Because small choices, made by many people, add up to something large, and because the habits you form now will last you a lifetime.\n\nStart with what you buy. Every product has a hidden cost: the energy used to make it, the fuel used to transport it, and the waste it leaves behind. Before you buy something new, ask yourself whether you really need it. Could you borrow it, mend what you have, or buy it second-hand? Charity shops and online swaps are full of good clothes that cost a fraction of the price and save something useful from landfill.\n\nNext, think about how you travel. If you can walk, cycle or take the bus to school instead of asking for a lift, do it. You will cut pollution, save your family money and arrive more awake than you would after a car journey. Walking with friends is also a good way to start the day.\n\nThen look at what you throw away. Our school recycles paper, cans and plastic bottles, but only if they go in the right bins. Better still, avoid creating waste in the first place: bring a refillable water bottle and a lunch box instead of buying snacks wrapped in plastic. One bottle refilled every day could replace hundreds of single-use ones over a school year.\n\nFinally, use your voice. Talk to your family about switching off lights and turning the heating down a degree. Join the eco-council, which is planning a tree-planting day next term. And remember that one day you will vote, work and spend money of your own. The choices you make then will matter even more.\n\nNone of this means being perfect. It means trying, and encouraging others to try. If every student in our school made just one change this month, imagine the difference we could make together. Which change will you choose?`,
            },
            markScheme: {
              'How it is marked (20 marks)': [
                'Two marks are given and added together: up to 12 for communication and organisation (AO5) and up to 8 for writing accurately (AO6), each found on its own scale.',
                'Band 1 (AO5 1 to 2, AO6 1): some idea of the form and the reader, but little to say and ideas in a simple order; sentences mostly alike, and errors frequent.',
                'Band 2 (AO5 3 to 4, AO6 2 to 3): aware of the purpose and the reader, with a few reasons and paragraphs, though the points are not developed; sentences vary a little and most spelling is right.',
                'Band 3 (AO5 5 to 7, AO6 4 to 5): fits the task and the reader, with reasons that are developed and paragraphs that build a sensible case; mostly accurate, with a mix of sentences and punctuation.',
                'Band 4 (AO5 8 to 10, AO6 6 to 7): right for the task and the reader all the way through, with detailed, carefully chosen content and a clear structure; sentences varied for effect, and errors rare.',
                'Band 5 (AO5 11 to 12, AO6 8): ambitious, polished writing, with a tone exactly right for the reader, ideas developed in depth so that they persuade, and accuracy close to faultless, with a wide, precise vocabulary.',
              ],
              'What earns marks in this task': [
                'The features of an article for a school website: a headline, an engaging opening, and paragraphs that build to a call to action.',
                'An encouraging, persuasive tone that suits fellow students, without preaching.',
                'Practical choices, each explained and developed with reasons.',
                'Accurate spelling, punctuation and grammar, with varied sentences and well-chosen words: 8 of the 20 marks are for this.',
              ],
            },
          },
          {
            id: 'wjec-c2-m3-q8',
            questionNumber: 2,
            label: '2.2',
            questionText: `A national newspaper has asked its readers whether shops should be made to show the environmental cost of every product they sell, alongside its price.\n\nWrite a letter to the newspaper giving your views. [20]`,
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Dear Editor,\n\nYour question about whether shops should show the environmental cost of every product is an important one, and my answer is yes. If we are serious about protecting the planet, people need to know what their purchases really cost.\n\nAt the moment, the price on a label tells us only part of the story. A pair of jeans or a pack of strawberries may be cheap in the shop, but making, packaging and transporting them uses energy and resources, and some of the waste ends up in rivers, seas and landfill. None of that appears on the price tag, so most of us never think about it. A clear environmental label would change that.\n\nWe already accept labels like this in other areas. Food packets show how much fat, salt and sugar they contain, and fridges and washing machines carry energy ratings. These labels have changed how people shop, and they have encouraged manufacturers to make healthier food and more efficient machines. An environmental rating could do the same, rewarding businesses that cut their waste and their emissions.\n\nOf course, there are difficulties. Measuring the environmental cost of a product is complicated, and businesses might argue about the figures. There is a risk that labels become so detailed that nobody reads them. Some people also worry that greener products would seem more expensive, which would be unfair on families who cannot afford to choose them.\n\nThese problems can be solved. The labels could use a simple scale, such as a letter from A to E, set by an independent body rather than by the companies themselves. They could start with the products that have the greatest impact, such as clothing, meat and electronics. And the government could help to make greener choices affordable, so that good intentions are not reserved for the well-off.\n\nNo label will solve the climate crisis on its own. But people cannot make good choices without good information. Showing the true cost of what we buy would be a simple, practical step towards a fairer and cleaner way of living.\n\nYours faithfully,\n\nAmira Hassan`,
            },
            markScheme: {
              'How it is marked (20 marks)': [
                'Two marks are given and added together: up to 12 for communication and organisation (AO5) and up to 8 for writing accurately (AO6), each found on its own scale.',
                'Band 1 (AO5 1 to 2, AO6 1): some idea of the form and the reader, but little to say and ideas in a simple order; sentences mostly alike, and errors frequent.',
                'Band 2 (AO5 3 to 4, AO6 2 to 3): aware of the purpose and the reader, with a few reasons and paragraphs, though the points are not developed; sentences vary a little and most spelling is right.',
                'Band 3 (AO5 5 to 7, AO6 4 to 5): fits the task and the reader, with reasons that are developed and paragraphs that build a sensible case; mostly accurate, with a mix of sentences and punctuation.',
                'Band 4 (AO5 8 to 10, AO6 6 to 7): right for the task and the reader all the way through, with detailed, carefully chosen content and a clear structure; sentences varied for effect, and errors rare.',
                'Band 5 (AO5 11 to 12, AO6 8): ambitious, polished writing, with a tone exactly right for the reader, ideas developed in depth so that they persuade, and accuracy close to faultless, with a wide, precise vocabulary.',
              ],
              'What earns marks in this task': [
                'The features of a letter to a newspaper: a greeting, an opening that states your view, clear paragraphs and a sign-off.',
                "A formal, reasoned tone that suits a national newspaper's readers.",
                'A clear view, developed with reasons and examples, that deals with the difficulties and suggests how they could be met.',
                'Accurate spelling, punctuation and grammar, with varied sentences and well-chosen words: 8 of the 20 marks are for this.',
              ],
            },
          },
        ],
      },
    ],
  },
]
