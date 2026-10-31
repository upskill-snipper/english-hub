// @ts-nocheck
import type { MockExamPaper } from './types'

/**
 * Pearson Edexcel GCSE English Language Paper 2 (1EN0/02), mock papers 01 to
 * 05: Travel, Sport, Education, Technology and Nature.
 *
 * RESTRUCTURED 24 October 2026 to Pearson's own paper, as it is set out in
 * src/data/mark-scheme-guides/edexcel-lang-paper2.ts and in the marker's
 * scheme edexcel-lang-paper2 (src/lib/marking/mark-schemes/edexcel-lang.ts),
 * and held there by src/__tests__/a-language-mock-is-the-boards-paper.test.ts.
 *
 * WHAT WAS WRONG. Each paper set four reading questions worth 4, 8, 8 and 16
 * and two writing tasks worth 12 and 16: 64 marks in 105 minutes, which is
 * AQA's Paper 2 with other tariffs. Pearson's paper is 96 marks in 2 hours 5
 * minutes. A student practised an exam that does not exist, and an essay
 * handed to the marker found no question of its worth, so it was given
 * general feedback and no mark.
 *
 * Nor were the texts the kind Pearson sets. Paper 2 reads two 20th or 21st
 * century non-fiction texts. Each paper's Source B was older, and two were
 * novels: Lady Mary Wortley Montagu's letter from Constantinople (1717-18),
 * Tom Brown's School Days (1857), Dickens's "Crime and Education" (1846),
 * North and South (1855) and Gilbert White's Selborne letter (1774).
 *
 * WHAT IT IS NOW. Each paper is set as Pearson sets it:
 *   Section A: Reading (56 marks, about 1 hour 20 minutes)
 *     Questions 1 and 2 (2 marks each) and 3 (15) on Text 1;
 *     Questions 4 and 5 (1 mark each) and 6 (15) on Text 2;
 *     Questions 7(a) (6) and 7(b) (14) on both texts.
 *   Section B: Transactional Writing (40 marks, about 45 minutes)
 *     Question 8 or Question 9: one entry worth 40, as the student writes one.
 * questionNumber is what the marker reads (7(a) and 7(b) are both 7, the
 * choice is 8), and `label` prints "7(a)", "7(b)" and "Q8 or Q9". The short
 * questions name paragraphs, not lines, because the page prints no line
 * numbers. Question 1 carries both texts, because the page shows only the
 * first question's extract for a whole section.
 *
 * Text 2 of each paper is its old Source A, kept with its label (word for
 * word until the check of 31 October 2026 below): a modern article written
 * for this bank. Text 1 is new. A real extract was wanted, but
 * src/data/full-texts holds novels, plays and poems and no non-fiction, so
 * each Text 1 is a memoir of the 1950s to the 1980s written for this paper
 * and labelled so. It names no real writer.
 *
 * Every question, mark scheme and model answer is new and in our own words.
 * The mark schemes follow the guide's "what earns marks" and its levels.
 * Every reading question worth 6 or more has a Grade 6-7 and a Grade 8-9
 * answer, and the writing question has one answer to each task. Every
 * quotation in them is the text's own words.
 *
 * HISTORY. On 26 September 2026 scripts/check-mock-exam-extracts.mjs found
 * that every Source B here printed words its named author never wrote (four
 * labelled "(adapted)" held none of the work's words, and a Dickens article
 * nobody has found), and the model answers quoted the invented lines back.
 * On 27 September each was replaced by a genuine passage cut by script from
 * Project Gutenberg, and the Source A bylines were marked as invented. Those
 * genuine passages served until this restructure removed them.
 *
 * CHECKED 31 October 2026 by a second reader: every question against the
 * guide, the scheme and the texts, and every figure in a Text 2 (written for
 * the site, so its claims are the site's) against its source. Fixed:
 *   - Untrue claim, 02 Text 2: "The average ticket price has risen by 1,100%
 *     since 1990" is no source's average; the Football Supporters'
 *     Association (August 2024) has Anfield's cheapest Kop ticket at £4 in
 *     1990 and £39 now, 875%. Now "At some grounds, the cheapest ticket has
 *     risen by almost 900%"; Question 5 and three answers follow.
 *   - Untrue claim, 03 Text 2: exam stress "a primary factor in over 40%" of
 *     child mental health referrals is in no data (the Children's
 *     Commissioner, 2026, gives anxiety, 16%, as the commonest reason); the
 *     doubling stands (563,639 active referrals in 2018-19, 1,048,965 in
 *     2024-25). The 40% is now the teacher's own observation; one 7(a)
 *     answer follows.
 *   - Untrue claims, 05 Text 2: "Insect populations have fallen by 75%" was
 *     flying insects in German nature reserves, 76% in 27 years (Hallmann and
 *     others, PLOS ONE, 2017), and now says so in plain words; the hedgehog
 *     halved since 2000 in the countryside, towns losing a third (The State
 *     of Britain's Hedgehogs 2018), and now says so; the falcons' car park
 *     was put in Sheffield, a real city, and is now the writer's own city.
 *     "One in six species" matches State of Nature 2023. Questions 5, 6,
 *     7(a) and 7(b) follow.
 *   - Style: the five Text 2s used spaced hyphens as dashes; each is now a
 *     comma, colon or bracket, and the one answer that quoted a dash follows.
 *   - Board wording: Question 6 printed Pearson's own "Evaluate how
 *     successfully this is achieved", and Questions 2, 7(a) and 7(b) closely
 *     followed Pearson's sentences; all four are now in our words.
 *   - Untrue claims about the texts: 01 Question 6 called "You cannot get
 *     lost" a command and the writer's comment a reply; 04 Question 3 called
 *     the literal "built ... out of metal" a metaphor, and said the last
 *     sentence asks a question and ends on "was for" (it is a wish that ends
 *     "had gone"); 04 Question 7(b) said Text 2 ends on "any honest
 *     conversation", two sentences before its end.
 *   - Mark scheme: 02 Question 1 put the rattle and programme outside the
 *     first paragraph; they are in it, and are refused as the writer's.
 *   - Model answers: 04 Question 2 gave two points that are both the noise of
 *     the works; 01 Question 8 advised telling someone where you are going
 *     after an anecdote of wandering off unannounced, and now does as it says.
 *   Left standing, as uncredited and plausible: 03's "over seventy formal
 *   assessments" and "One in three newly qualified teachers" (the answers
 *   already note that no source is named), 02's footballer and nurse, and
 *   04's radiologist with three times the scans.
 */

// ─── Mark-scheme levels ─────────────────────────────────────────────────────
// Pearson's levels for each kind of question, in our own words, from the
// guide. Each question puts its own points to look for in front of them.

const MARKS_Q3 = [
  'Level 1 (1-3 marks): says a little about the text and names some features, with few quotations.',
  'Level 2 (4-6 marks): comments on the writing, with quotations that fit but are not explored. An answer on language only, or on structure only, goes no higher than this level.',
  'Level 3 (7-9 marks): explains how both the language and the structure create effects, with well-matched quotations.',
  'Level 4 (10-12 marks): explores both the language and the structure in detail, with plenty of quotations backing up each point.',
  'Level 5 (13-15 marks): analyses both with real insight, using carefully chosen quotations that sharpen every point.',
]

const MARKS_Q6 = [
  'Level 1 (1-3 marks): mostly describes the content; opinions are given without reasons, with few quotations.',
  'Level 2 (4-6 marks): comments on the content and offers simple opinions, backed by quotations that fit but are not explored.',
  'Level 3 (7-9 marks): explains how the writing achieves its effect and gives a reasoned view of how well it works, with suitable quotations.',
  'Level 4 (10-12 marks): analyses the text and builds a well-argued judgement, with detailed quotations backing up every point.',
  'Level 5 (13-15 marks): evaluates the text as a whole with a consistent, thoughtful judgement, and every reference is chosen to make the argument convincing.',
  "From Level 2 upwards, comments on the writer's techniques earn credit only when they support the judgement of how successful the writing is.",
]

const MARKS_Q7A = [
  'Both texts must be used: an answer that draws on one text only scores 0.',
  'Level 1 (1-2 marks): spots one or two similarities but links them only loosely, with little evidence.',
  'Level 2 (3-4 marks): finds sensible similarities and joins the texts clearly, with suitable evidence, though one text may get more attention than the other.',
  'Level 3 (5-6 marks): finds well-observed similarities and weaves the two texts together throughout, with well-chosen evidence from both.',
  'This question rewards finding and combining evidence; analysis of language earns nothing extra.',
]

const MARKS_Q7B = [
  'Level 1 (1-2 marks): says what each text is about without really comparing them, with few quotations.',
  "Level 2 (3-5 marks): makes the more obvious comparisons and comments on the writers' views, with quotations that fit but are not explored. An answer that deals with only one text in detail goes no higher than this level.",
  "Level 3 (6-8 marks): makes several comparisons and explains each writer's views and how they come across, with well-matched quotations. An answer that is unbalanced between the texts cannot reach this level.",
  'Level 4 (9-11 marks): compares the texts on many points and explores how each writer gets their views across, with evidence drawn evenly from both.',
  'Level 5 (12-14 marks): compares the texts in depth and from many angles, analysing how each writer conveys their view, with carefully chosen evidence from both.',
]

const MARKS_WRITING = [
  "AO5, content and organisation (24 marks). Level 1 (1-4): some ideas come across, with little sense of audience or purpose. Level 2 (5-9): the writing knows its audience and purpose, in a simple, steady tone, with ideas in order and in paragraphs. Level 3 (10-14): ideas and techniques suit the audience and purpose, the tone fits, and each point builds on the last. Level 4 (15-19): the writing is shaped to affect the reader, with a well-judged tone and register and a structure under control throughout. Level 5 (20-24): the writing steers the reader's response in subtle ways, with a confident voice and complex ideas that hold together.",
  'AO6, vocabulary, sentence structure, spelling and punctuation (16 marks). Level 1 (1-4): simple words, frequent spelling mistakes, shaky punctuation and repetitive sentences. Level 2 (5-7): everyday words spelt correctly, punctuation mostly right and some varied sentences. Level 3 (8-10): a good choice of words, most tricky spellings right, a range of punctuation, and sentences shaped for the purpose. Level 4 (11-13): words chosen with care from a wide range, only the odd slip, and punctuation and sentences used for clarity and purpose. Level 5 (14-16): ambitious, precise vocabulary, errors so rare they never get in the way, and a full range of punctuation and sentence types chosen for effect.',
  'The two objectives are marked separately and the marks are added together.',
]

const MARKS_WRITING_NOTE =
  '(40 marks: 24 for content and organisation, 16 for vocabulary, sentence structure, spelling and punctuation)'

const SECTION_A_ADVICE =
  'Answer ALL questions in this section. You are advised to spend about 1 hour and 20 minutes on it.\n\nRead Text 1 and answer Questions 1 to 3. Then read Text 2 and answer Questions 4 to 6. Question 7 is about both texts.'

const SECTION_B_ADVICE =
  'Answer ONE question in this section, either Question 8 or Question 9. You are advised to spend about 45 minutes on it, including time to plan your answer and to check it.'

// ─── Texts ──────────────────────────────────────────────────────────────────

// ── Exam 01: Travel ──────────────────────────────────────────────────────────

const E01_TEXT_1 = `In the summer of 1964, when I was nineteen, I travelled to Italy on my own. I had saved for a year from my wages at a shoe shop, bought a second-hand rucksack and a phrasebook, and practised my Italian on the bus to work every morning. I could ask for a room, a ticket and the way to the station. I could not, it turned out, understand a single word of the answers.

The train from Calais took two days and a night. I slept sitting up, my head against the window, and woke to a country I had only seen in films. Olive trees went by, then white villages, then the sea, so blue that I thought at first it must be painted. When we pulled into Naples it was nearly midnight, and the station was louder than any football ground I had ever stood in.

I had a plan. I had copied the address of a cheap hotel from a library book, and I had drawn a map of the route on the back of an envelope. Within ten minutes the map was useless. The streets ran uphill and downhill and doubled back on themselves; washing hung between the balconies like flags; scooters came round corners with their horns already sounding. Every alley looked like the one before it. I walked for an hour with my rucksack cutting into my shoulders, too proud to admit that I was lost and too shy to ask.

In the end it was an old woman on a doorstep who rescued me. She was sitting on a kitchen chair in the warm night air, shelling peas into a bowl, and she watched me pass her door for the third time. When I held out my envelope, she studied my map, laughed until she had to wipe her eyes, and then stood up, took my arm and walked me through the maze herself. She talked the whole way. I understood nothing, and I understood everything.

The hotel, when we found it, was one room above a bakery, and the smell of bread came up through the floorboards at four in the morning. I stayed a week. I never did learn to use the phrasebook properly, but I learned to point, to smile and to say thank you, and that was enough.

I have been abroad many times since, with better maps and better luggage. None of those journeys has taught me as much as that first night, when I was lost in a strange city and a stranger decided that I was worth helping.`

const E01_TEXT_1_REF =
  'Specially written for this practice paper (not a published text): a memoir of a first journey abroad, to Naples in 1964'

const E01_TEXT_2 = `I arrived in Marrakech at dusk, when the city's famous red walls glowed like embers against the darkening sky. The taxi driver, who had spent the journey from the airport narrating the history of every roundabout we passed, deposited me at the edge of the medina with a cheerful wave and an instruction: "Walk straight. Turn left at the smell of spices. You cannot get lost." He was wrong about the last part.

Within minutes I was deep in a labyrinth of narrow alleyways where the walls leaned towards each other like conspirators sharing secrets. The air was thick with competing scents: cumin, cedar, leather, diesel, something sweet and unidentifiable that drifted from an open doorway. A man on a moped appeared from nowhere, missed me by inches, and vanished around a corner without slowing down. A cat regarded me from a windowsill with the calm superiority of something that actually knew where it was going.

I had read the guidebooks. I had studied the map. But Marrakech is a city that refuses to be flattened into two dimensions. It exists in layers, sound upon smell upon colour upon heat, and the only way to understand it is to surrender to it, to stop trying to navigate and simply allow yourself to be carried along by its currents.`

const E01_TEXT_2_REF =
  'Specially written for this practice paper (not a published text): travel writing, "Lost and Found in Marrakech", under the invented byline Priya Sharma'

const E01_BOTH = `Text 1:\n${E01_TEXT_1}\n\nText 2:\n${E01_TEXT_2}`
const E01_BOTH_REF = `Text 1: ${E01_TEXT_1_REF} | Text 2: ${E01_TEXT_2_REF}`

// ── Exam 02: Sport ───────────────────────────────────────────────────────────

const E02_TEXT_1 = `Every other Saturday in the winter of 1971, my father and I caught the twenty past one bus to the ground. He wore the same scarf his own father had worn, knotted twice, and he carried a flask of tea and two cheese sandwiches wrapped in greaseproof paper. I was nine. I had a rattle that I was not allowed to swing near anybody's ear, and a programme that cost five pence, which I read so often that the pages went soft.

We stood on the terrace behind the goal, in the same spot every match, by the third crush barrier from the left. My father said it was the best view in the ground, which was not true, but it was where his friends stood. There was Ronnie from the bakery, who shouted advice at the referee for ninety minutes, and Mr Pattinson, who never said a word until we scored and then said only, "About time." When the crowd swayed, I was lifted off my feet and carried down three steps and back again, my face pressed into somebody's coat, and I learned to hold on to my father's sleeve and laugh.

The players did not seem like stars to us. Our left back lived four doors down from my aunt and caught the same bus as everybody else on a Monday morning. In the summer he painted houses to make ends meet. When he scored his only goal of the season, a scuffed shot that bobbled over the line, the whole street talked about it for a week, and my aunt claimed she had always known he had it in him.

None of this was comfortable. The rain came sideways off the river, the toilets were a disgrace and the pies were mostly gravy. We lost far more often than we won. Yet I have never felt so completely part of something as I did on those afternoons, when twenty thousand voices rose at once and I could feel the noise through the soles of my shoes.

My father has been dead for many years now, and the old terrace has gone, replaced by rows of plastic seats. I still go to matches, and I still knot my scarf twice. But I sometimes catch myself looking for the third crush barrier from the left, as though, if I could only find it, everybody I stood beside would still be there.`

const E02_TEXT_1_REF =
  'Specially written for this practice paper (not a published text): a memoir of watching football from the terraces with a parent in 1971'

const E02_TEXT_2 = `The problem with modern football is not the money, though the money is obscene, but what the money has done to the relationship between clubs and their communities. When my grandfather watched Sunderland in the 1960s, the players lived in the same streets as the fans. They drank in the same pubs, sent their children to the same schools, and earned wages that, while comfortable, did not place them in a different economic universe. The connection between player and supporter was not manufactured by marketing departments. It was real.

Today, a Premier League footballer earns more in a week than a nurse earns in a year. At some grounds, the cheapest ticket has risen by almost 900% since 1990, effectively pricing out the very communities that built these clubs from nothing. The terraces, those standing areas where generations of working people roared their teams to glory, have been replaced by corporate hospitality boxes where executives entertain clients who couldn't name a single player on the pitch.

I am not naive enough to suggest we can turn back the clock. Football is a global entertainment industry now, and there is no returning to the days of maximum wages and muddy pitches. But we can demand that clubs remember where they came from. We can insist that ticket prices include affordable allocations for local fans. We can refuse to accept that tradition and profit are mutually exclusive.`

const E02_TEXT_2_REF =
  'Specially written for this practice paper (not a published text): an opinion column, "The Beautiful Game\'s Ugly Truth", under the invented byline James Harding, which is not the work of any real writer of that name'

const E02_BOTH = `Text 1:\n${E02_TEXT_1}\n\nText 2:\n${E02_TEXT_2}`
const E02_BOTH_REF = `Text 1: ${E02_TEXT_1_REF} | Text 2: ${E02_TEXT_2_REF}`

// ── Exam 03: Education ───────────────────────────────────────────────────────

const E03_TEXT_1 = `In the spring of 1958, when I was ten, I sat the examination that would decide the rest of my life. Nobody put it quite like that, but we all knew. Pass the eleven-plus and you went to the grammar school on the hill, with its blazers and its Latin. Fail, and you went to the secondary modern by the gasworks, and everybody would know that you had failed.

On the morning of the test my mother gave me a boiled egg for luck and checked twice that I had two sharpened pencils. In the hall, the desks had been set out in rows so straight that they looked as though they had been measured with a ruler, and a teacher I had never seen before walked up and down between them with his hands behind his back. The only sound was the clock. I remember a question about trains leaving two stations at different speeds, and I remember that my hand was shaking so much that my sevens looked like ones.

The letter came in May. I had passed. My best friend, Alan, had not. We had sat next to each other since we were five, and he was cleverer than me at almost everything that mattered, but in September he went down the hill and I went up it, and after a year or so we stopped speaking. It was nobody's fault. The system had simply sorted us, like letters into pigeonholes.

What I learned at the grammar school, I mostly learned from one teacher. Miss Hartley taught English, and she had no interest at all in marks. She read aloud to us with her shoes off, perched on the edge of her desk. She let us argue about poems until the bell went and then, quite often, a little longer. Once she gave the whole class an essay with no title and told us to write about whatever we cared about most. I wrote six pages about my grandfather's pigeons, and she wrote one word at the bottom: "More."

I have taken many examinations since that morning in 1958, and passed most of them. I could not now tell you a single question from any of them. But I can still hear Miss Hartley reading, and I still have the essay about the pigeons, folded into a book on my shelf.`

const E03_TEXT_1_REF =
  'Specially written for this practice paper (not a published text): a memoir of sitting the eleven-plus examination in 1958'

const E03_TEXT_2 = `We are testing our children to destruction. By the age of sixteen, a typical British student will have sat through over seventy formal assessments, each one carrying the implicit message: your worth can be measured, quantified, and ranked on a spreadsheet. We have created an education system that is extraordinarily efficient at producing data and extraordinarily inefficient at producing curious, resilient, creative human beings.

The statistics tell a grim story. Referrals to child mental health services have doubled in the last five years, and every teacher I know has watched exam stress take its toll. Teachers, demoralised, overworked, and buried under marking, are leaving the profession at record rates. One in three newly qualified teachers quits within five years. The system is burning through its most valuable resource: the people who make it work.

I have taught English for twenty-two years, and I can tell you this: the best learning I have ever witnessed happened when students forgot they were being assessed. It happened during a debate that overran into lunchtime because nobody wanted to stop. It happened when a boy who had never willingly read a book devoured an entire novel in a weekend because his teacher had chosen exactly the right one. It happened in the margins, in the spaces between lessons, in the conversations that no mark scheme could capture.`

const E03_TEXT_2_REF =
  'Specially written for this practice paper (not a published text): an opinion article, "Let Them Learn", under the invented byline Rachel Evans'

const E03_BOTH = `Text 1:\n${E03_TEXT_1}\n\nText 2:\n${E03_TEXT_2}`
const E03_BOTH_REF = `Text 1: ${E03_TEXT_1_REF} | Text 2: ${E03_TEXT_2_REF}`

// ── Exam 04: Technology ──────────────────────────────────────────────────────

const E04_TEXT_1 = `My father set type for a living. Six nights a week, from 1962 until 1986, he went to the printing works behind the market and built the next morning's newspaper out of metal. He would come home at dawn smelling of ink and hot lead, with black under his fingernails that no amount of scrubbing could shift, and he would sleep until lunchtime while the rest of the house tiptoed around him.

I visited the works once, when I was eight. It was the loudest place I had ever been. The machines clattered and hissed like a railway station, and the men worked in their shirtsleeves, shouting to each other over the noise. My father sat at a great iron keyboard that cast each line of words as a single bar of metal, still warm when it dropped into the tray. He could read the type upside down and backwards as easily as I could read a comic. He showed me my own name, cast in lead, and let me keep it. I have it on my desk as I write.

He was proud of his trade, and he had reason to be. It had taken him a seven-year apprenticeship to learn it, and a good compositor could spot a spelling mistake in a page of metal from across the room. The men called themselves craftsmen, and they were.

Then, in the space of about two years, the computers arrived. A young woman with a screen could now set in an afternoon what had taken my father's whole shift, and she did not need seven years to learn how. The management called it progress, and in a sense they were right. The paper was cheaper to produce and quicker to change. But the men who had built it every night were offered a sum of money and a handshake, and most of them never worked in print again.

My father was fifty-one. He took a job driving a delivery van, and he never complained, not once. But he stopped talking about work at the dinner table, and I noticed that he no longer looked at the newspaper in the mornings. He said the pages had no character any more. I think he meant that they no longer had him in them.

I do not believe we should have kept the old machines. Nobody misses hot lead. What I wish, even now, is that somebody had asked what a man like my father was for, once the work he was so good at had gone.`

const E04_TEXT_1_REF =
  'Specially written for this practice paper (not a published text): a memoir of a parent who set type for a newspaper until computers took over the work in the 1980s'

const E04_TEXT_2 = `Artificial intelligence will not take your job. But someone who knows how to use artificial intelligence will. This is the message I deliver to audiences across the country, and it is met, invariably, with a mixture of relief and anxiety: relief that the robots are not yet at the gates, anxiety that the gates may be closer than anyone thought.

The reality is more nuanced than either the utopians or the doomsayers suggest. AI is not a single technology but a constellation of capabilities that are being integrated, unevenly and unpredictably, into every sector of the economy. A radiologist who uses AI to screen images can process three times as many scans with greater accuracy. A lawyer who uses AI to review documents can complete in hours what previously took weeks. These professionals have not been replaced. They have been amplified.

But amplification has consequences. If one radiologist can now do the work of three, what happens to the other two? If a legal team of twenty can be reduced to five, where do the fifteen go? The efficiency gains are real, but so are the human costs, and any honest conversation about AI must reckon with both. We cannot celebrate the productivity while ignoring the displacement. We cannot marvel at the technology while forgetting the people it leaves behind.`

const E04_TEXT_2_REF =
  'Specially written for this practice paper (not a published text): an article, "The AI Reckoning", under the invented byline Professor David Chen'

const E04_BOTH = `Text 1:\n${E04_TEXT_1}\n\nText 2:\n${E04_TEXT_2}`
const E04_BOTH_REF = `Text 1: ${E04_TEXT_1_REF} | Text 2: ${E04_TEXT_2_REF}`

// ── Exam 05: Nature ──────────────────────────────────────────────────────────

const E05_TEXT_1 = `When I was a child, in the early 1960s, the garden behind our house was never empty. There were sparrows squabbling in the hedge, a thrush that cracked snails on the path, and in the evenings a hedgehog that came snuffling across the lawn for the saucer of bread and milk my grandmother put out for it. We called him Mr Prickles. My grandmother insisted that he was the same hedgehog every night for eleven years, which I now suspect was not true.

On summer evenings, if you left the kitchen light on with the window open, the moths came in their dozens. They battered against the lampshade and settled on the curtains, pale and powdery, and my mother would chase them out with a tea towel, complaining. On the long drive to the coast each August, my father had to stop twice to scrub the windscreen, because it was so thick with squashed insects that he could barely see the road. Nobody thought this was remarkable. It was simply what happened in summer.

There was a farm at the end of our lane, and every spring the swallows came back to the same barn. The farmer, a silent man called Mr Dent, left the top half of the door open for them from April until September, even in the rain. I used to sit on an upturned bucket and watch the parents fly in and out, low and fast, with beaks full of flies for the nest above the beam. Once, when I asked him why he bothered, he looked at me as though I had asked why he bothered to breathe.

I live in the same town now, and I put out food for hedgehogs, though nowadays it is special biscuits from the pet shop rather than bread and milk, which I have learned is bad for them. I have not seen a hedgehog in the garden for six years. When I drove to the coast last summer, I did not have to clean the windscreen once. The barn has become three houses, and the swallows have not come back.

I do not want to pretend that the past was a paradise. But I find it strange that a whole world of small creatures could disappear during my lifetime, so quietly that hardly anybody noticed it go. The silence in my garden is not peace. It is absence.`

const E05_TEXT_1_REF =
  'Specially written for this practice paper (not a published text): a memoir of the wildlife of a 1960s childhood, and of its loss'

const E05_TEXT_2 = `Last spring, a pair of peregrine falcons nested on the roof of a multi-storey car park in the centre of my home city. Within days, a webcam had been installed, a Twitter account created, and thousands of people (office workers, schoolchildren, pensioners, insomniacs watching at 3am) were following every moment of the nesting season with an intensity usually reserved for reality television.

Something about those falcons captured the public imagination in a way that a hundred environmental reports never could. Perhaps it was the sheer improbability of it: the fastest animal on earth, a creature designed for wild cliffs and open skies, choosing to raise its young on a concrete ledge above a pay-and-display car park. Perhaps it was the drama: the moment when one of the chicks teetered on the edge and the entire internet held its breath. Perhaps it was simply that, in a world of relentless bad news about nature, here was a story of adaptation and survival that suggested the natural world had not entirely given up on us.

But I wonder whether our enthusiasm for urban wildlife is, in part, a way of avoiding the harder truth. While we celebrate falcons on car parks and foxes in gardens, the wider natural world is in catastrophic decline. In some nature reserves, flying insects have declined by more than 75% in under thirty years. One in six species in Britain is at risk of extinction. In the countryside, the hedgehog, once so common it was a nuisance, has declined by 50% since the millennium.`

const E05_TEXT_2_REF =
  'Specially written for this practice paper (not a published text): a magazine article, "Wild in the City", under the invented byline Tom Barker'

const E05_BOTH = `Text 1:\n${E05_TEXT_1}\n\nText 2:\n${E05_TEXT_2}`
const E05_BOTH_REF = `Text 1: ${E05_TEXT_1_REF} | Text 2: ${E05_TEXT_2_REF}`

// ─── Mock Exam Papers ────────────────────────────────────────────────────────

export const edexcelP2A: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 01: Travel
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p2-01',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-fiction and Transactional Writing',
    subtitle: 'English Language 1EN0/02',
    code: '1EN0/02',
    totalTimeMinutes: 125,
    totalMarks: 96,
    sections: [
      {
        id: 'edexcel-p2-01-reading',
        title: 'Section A: Reading',
        description: `${SECTION_A_ADVICE}\n\nText 1: ${E01_TEXT_1_REF}\nText 2: ${E01_TEXT_2_REF}\n\nGlossary for Text 2: medina: the old walled centre of a North African city.`,
        totalMarks: 56,
        suggestedTimeMinutes: 80,
        questions: [
          {
            id: 'edexcel-p2-01-q1',
            questionNumber: 1,
            questionText:
              'Look at the first paragraph of Text 1.\n\nIdentify two things the writer did to get ready for the journey.',
            marks: 2,
            suggestedTimeMinutes: 2,
            questionType: 'retrieval',
            extract: E01_BOTH,
            extractSource: E01_BOTH_REF,
            modelAnswers: {
              'Grade 6-7': '1. The writer saved for a year.\n2. The writer bought a phrasebook.',
            },
            markScheme: [
              '1 mark for each correct point, up to 2.',
              'Accept any two of: saved for a year from wages at a shoe shop; bought a second-hand rucksack; bought a phrasebook; practised Italian on the bus to work.',
              "A word, a short phrase or the student's own words is enough; explanation earns nothing extra.",
              'Do not credit points from outside the first paragraph.',
            ],
          },
          {
            id: 'edexcel-p2-01-q2',
            questionNumber: 2,
            questionText:
              'Read the third paragraph of Text 1, beginning "I had a plan."\n\nGive two reasons why the writer could not find the way to the hotel.\n\nYou may answer in your own words or with quotations.',
            marks: 2,
            suggestedTimeMinutes: 2,
            questionType: 'retrieval',
            extract: `Text 1:\n${E01_TEXT_1}`,
            extractSource: E01_TEXT_1_REF,
            modelAnswers: {
              'Grade 6-7':
                '1. The streets "ran uphill and downhill and doubled back on themselves".\n2. "Every alley looked like the one before it."',
            },
            markScheme: [
              '1 mark for each correct point, up to 2. The two points must be different.',
              'Accept: the home-made map was useless; the streets went up and down and doubled back; every alley looked like the one before it; the writer was too proud to admit being lost; the writer was too shy to ask the way.',
              "Quotations and the student's own words both count.",
            ],
          },
          {
            id: 'edexcel-p2-01-q3',
            questionNumber: 3,
            questionText:
              "Analyse how the writer of Text 1 uses language and structure to hold the reader's interest.\n\nRefer closely to the text to support your views.",
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'analysis',
            extract: `Text 1:\n${E01_TEXT_1}`,
            extractSource: E01_TEXT_1_REF,
            modelAnswers: {
              'Grade 6-7': `The writer uses language and structure to make the reader share the excitement and the panic of a first trip abroad. At the start, the list of preparations, such as "bought a second-hand rucksack and a phrasebook", makes the writer seem organised, but the short sentence "I could not, it turned out, understand a single word of the answers" is funny because it shows the plan going wrong straight away.

In the second paragraph the writer uses descriptive language to show how new Italy felt. The sea was "so blue that I thought at first it must be painted", which is exaggeration and shows the writer's wonder. The station was "louder than any football ground", which tells us how noisy and overwhelming Naples was.

The third paragraph builds tension. The simple sentence "Within ten minutes the map was useless" marks the moment things go wrong, and the long list of the streets, the washing and the scooters makes the city feel like a maze. The writer admits being "too proud to admit that I was lost", which is honest and makes us sympathise.

The structure then changes when the old woman appears. She is described calmly, "shelling peas into a bowl", and she "took my arm", which shows her kindness. The ending looks back and gives a lesson: a stranger "decided that I was worth helping". This makes the story feel meaningful as well as entertaining.`,
              'Grade 8-9': `The writer holds the reader's interest by shaping the memoir like a small adventure with a moral, told by an older self who can laugh at the nineteen-year-old they once were.

The opening paragraph builds up the preparations in a list, the writer having "saved for a year", "bought a second-hand rucksack and a phrasebook" and "practised my Italian on the bus", only to undercut them with a short, comic sentence: "I could not, it turned out, understand a single word of the answers." The aside "it turned out" is the voice of hindsight, and it sets up the pattern of the whole text, in which plans fail and something better takes their place.

The second paragraph slows the pace for a journey full of wonder. Its list, "Olive trees went by, then white villages, then the sea", imitates the view from a moving train, and the exaggeration of a sea "so blue that I thought at first it must be painted" shows how unreal it seemed to arrive in "a country I had only seen in films". The paragraph ends on noise, "louder than any football ground", a comparison from home that prepares us for the confusion to come.

The third paragraph is the crisis. It opens with the confident short sentence "I had a plan.", and two sentences later the plan collapses: "Within ten minutes the map was useless." The long sentence that follows, its clauses separated by semicolons, recreates the maze, with streets that "doubled back on themselves", washing hung "like flags" and scooters with "their horns already sounding". The physical detail of the rucksack "cutting into my shoulders" and the balanced phrase "too proud to admit that I was lost and too shy to ask" make the reader share both the discomfort and the embarrassment.

The turning point comes with the old woman. The writer slows down again for small domestic details, such as "shelling peas into a bowl", which make her seem safe and ordinary, and the run of verbs "stood up, took my arm and walked me" shows her kindness in action. The paradox "I understood nothing, and I understood everything" is the emotional heart of the text. Finally, the structure circles back to the start: the phrasebook that failed in the first paragraph gives way to learning "to point, to smile and to say thank you", and the last sentence turns the anecdote into a lesson that ends on the word "helping". The reader is left believing that kindness, not preparation, is what makes a journey.`,
            },
            markScheme: [
              'Credit analysis of both language and structure, with references from across Text 1, each linked to its effect on the reader.',
              'Language could include: the list of careful preparations undercut by the comic admission that the writer could not understand the answers; the exaggerated sea "so blue that I thought at first it must be painted"; washing hung "like flags"; the balanced phrase "too proud to admit that I was lost and too shy to ask"; the paradox "I understood nothing, and I understood everything".',
              'Structure could include: the order of the journey, from preparation to crisis to rescue; the short sentence "I had a plan." and its collapse two sentences later; the long sentence built with semicolons that recreates the maze; the slower pace when the old woman appears; the ending, which looks back over many years and turns the story into a lesson.',
              ...MARKS_Q3,
            ],
          },
          {
            id: 'edexcel-p2-01-q4',
            questionNumber: 4,
            questionText:
              'Look at the first paragraph of Text 2.\n\nIdentify one thing the taxi driver does or says.',
            marks: 1,
            suggestedTimeMinutes: 1,
            questionType: 'retrieval',
            extract: `Text 2:\n${E01_TEXT_2}`,
            extractSource: E01_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7': 'He tells the writer, "You cannot get lost."',
            },
            markScheme: [
              '1 mark for one correct point.',
              'Accept one of: he narrated the history of every roundabout on the way from the airport; he dropped the writer at the edge of the medina; he gave a cheerful wave; he told the writer to walk straight, to turn left at the smell of spices, or that they could not get lost.',
              'Do not credit points from outside the first paragraph.',
            ],
          },
          {
            id: 'edexcel-p2-01-q5',
            questionNumber: 5,
            questionText:
              'Look at the second paragraph of Text 2, beginning "Within minutes".\n\nIdentify one of the smells the writer notices.',
            marks: 1,
            suggestedTimeMinutes: 1,
            questionType: 'retrieval',
            extract: `Text 2:\n${E01_TEXT_2}`,
            extractSource: E01_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7': 'Cumin.',
            },
            markScheme: [
              '1 mark for one correct point.',
              'Accept one of: cumin; cedar; leather; diesel; something sweet and unidentifiable from an open doorway.',
            ],
          },
          {
            id: 'edexcel-p2-01-q6',
            questionNumber: 6,
            questionText:
              'In Text 2, the writer tries to convey what it feels like to be lost in Marrakech.\n\nEvaluate how well the writer achieves this. Refer closely to the text to support your judgement.',
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'evaluation',
            extract: `Text 2:\n${E01_TEXT_2}`,
            extractSource: E01_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7': `I think the writer is quite successful in showing what it feels like to be lost, because the description makes the reader feel confused and overwhelmed too.

At the start, the taxi driver says "You cannot get lost", and the writer adds "He was wrong about the last part." This is funny and also builds suspense, because we know something will go wrong.

In the second paragraph, the writer describes "a labyrinth of narrow alleyways", which makes the medina sound like a maze that is hard to escape. The simile "like conspirators sharing secrets" makes the walls seem to be hiding things, so the reader feels shut in. The list of smells, "cumin, cedar, leather, diesel", shows that there is too much to take in at once. The man on the moped who "missed me by inches" shows that the streets can be dangerous.

At the end, the writer explains that you have to "surrender" to the city and be "carried along by its currents". This is successful because it shows that the writer has stopped panicking and started to enjoy being lost. However, the text is short, so we do not find out how the writer eventually found the way, which makes the ending feel a little sudden.`,
              'Grade 8-9': `The writer is highly successful in making the reader feel the bewilderment of being lost, and then the odd pleasure of it, because the text moves from confident order, through confusion, to acceptance.

The opening sets up a false sense of security. The red walls that "glowed like embers" are beautiful but faintly threatening, and the taxi driver's three short sentences, two commands and a promise, "Walk straight. Turn left at the smell of spices. You cannot get lost.", sound so certain that the writer's dry comment, "He was wrong about the last part", lands as a joke. Because the joke is at the writer's own expense, we trust the account that follows.

The second paragraph is where being lost is felt most sharply. The simile of walls that "leaned towards each other like conspirators sharing secrets" makes the city seem alive and secretive, as though it knows something the visitor does not. The list of smells, "cumin, cedar, leather, diesel", crowds the senses, and its last item, "something sweet and unidentifiable", captures exactly the uncertainty of not knowing where you are. The moped that "missed me by inches" adds a jolt of danger, and the cat with its "calm superiority" is a clever touch: by giving an animal the confidence the visitor lacks, the writer shows helplessness with humour rather than self-pity.

The final paragraph is less vivid, but it is where the purpose becomes clear. The two short sentences "I had read the guidebooks. I had studied the map." show how little preparation helps, and the claim that the city "refuses to be flattened into two dimensions" explains why. The closing image of being "carried along by its currents" turns fear into surrender, so the reader finishes with a sense of release rather than panic.

Overall, the writer conveys the experience convincingly in a short space. If there is a weakness, it is that the danger hinted at by the moped is never developed, so we do not feel real fear for long; but that suits a piece whose aim is to make getting lost sound like the best way to know a city.`,
            },
            markScheme: [
              'A clear judgement of how successfully the writer conveys being lost, kept up through the answer and supported by detailed reference to Text 2.',
              "Points that could be evaluated: the taxi driver's confident instruction and the writer's dry comment that he was wrong; the personified walls that make the medina secretive; the crowded list of smells that ends in something the writer cannot name; the moped and the cat, which add danger and humour; the final paragraph, which turns panic into surrender.",
              'A balanced view is creditable, for example that the danger is mentioned but not developed, or that the last paragraph explains rather than shows.',
              ...MARKS_Q6,
            ],
          },
          {
            id: 'edexcel-p2-01-q7a',
            questionNumber: 7,
            label: '7(a)',
            questionText:
              'Both writers describe being lost in a city they are visiting for the first time.\n\nWhat do their experiences have in common? Support your answer with evidence from both texts.',
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: E01_BOTH,
            extractSource: E01_BOTH_REF,
            modelAnswers: {
              'Grade 6-7':
                'Both writers get lost in a foreign city. In Text 1 the writer walks "for an hour" through streets that "doubled back on themselves", and in Text 2 the writer is "deep in a labyrinth of narrow alleyways". Both had tried to prepare, with a map "on the back of an envelope" in Text 1 and "the guidebooks" in Text 2, but neither helped. Both also meet a local person who speaks to them: the old woman who "talked the whole way" and the taxi driver who gives "an instruction".',
              'Grade 8-9':
                'Both writers arrive in a foreign city at the end of the day, Text 1 at "nearly midnight" in Naples and Text 2 "at dusk" in Marrakech, and both are lost almost at once: the map in Text 1 is useless "Within ten minutes", while in Text 2 the writer is lost "Within minutes". Both had prepared and found that preparation failed them: the writer of Text 1 drew a map "on the back of an envelope", and the writer of Text 2 "had read the guidebooks" and "studied the map". Both describe the streets as a maze, "the maze" in Text 1 and "a labyrinth of narrow alleyways" in Text 2, made more alarming by traffic: scooters with "their horns already sounding" and a moped that "missed me by inches". Finally, both come to accept being lost, Text 1 learning "to point, to smile" and Text 2 deciding to "surrender" to the city.',
            },
            markScheme: [
              'Similarities could include: both writers arrive in a foreign city as the day ends and are lost almost at once; both had prepared with maps or books that failed them; both describe the streets as a maze, with traffic that alarms them; both meet a local person who talks to them; both end up accepting that they are lost.',
              ...MARKS_Q7A,
            ],
          },
          {
            id: 'edexcel-p2-01-q7b',
            questionNumber: 7,
            label: '7(b)',
            questionText:
              'Compare the ideas and perspectives of the two writers about being a stranger in a foreign city, and the methods each uses to convey them.\n\nRefer closely to both texts in your answer.',
            marks: 14,
            suggestedTimeMinutes: 18,
            questionType: 'comparison',
            extract: E01_BOTH,
            extractSource: E01_BOTH_REF,
            modelAnswers: {
              'Grade 6-7': `Both writers are lost in a foreign city, but they have different attitudes to the experience. The writer of Text 1 remembers feeling embarrassed and uncomfortable, walking with "my rucksack cutting into my shoulders", whereas the writer of Text 2 seems more amused, saying the taxi driver "was wrong about the last part".

In Text 1, the writer is helped by a person. The old woman "took my arm and walked me through the maze herself", and the writer is grateful that "a stranger decided that I was worth helping". In Text 2, nobody helps; instead the writer decides to "surrender" to the city. So Text 1 suggests that people matter most when you travel, while Text 2 suggests the place itself is what you learn from.

The writers also use different methods. Text 1 tells the story in order, from the journey to the hotel, and ends by looking back over many years. Text 2 focuses on the senses, with a list of smells, "cumin, cedar, leather, diesel", and similes such as "like conspirators sharing secrets".

Both writers think plans are not much use. The writer of Text 1 says "Within ten minutes the map was useless", and the writer of Text 2 "had studied the map" but still got lost. Overall, Text 1 is more personal and grateful, and Text 2 is more descriptive and reflective.`,
              'Grade 8-9': `Both writers see getting lost as the real way to know a foreign city, but they reach that view through different discoveries: for the writer of Text 1 it is a stranger's kindness, while for the writer of Text 2 it is the city itself.

The writer of Text 1 looks back across many years at a nervous nineteen-year-old, and the perspective is gently self-mocking. The young traveller was "too proud to admit that I was lost and too shy to ask", and rescue comes from a person, an old woman who "took my arm and walked me through the maze herself". The paradox "I understood nothing, and I understood everything" shows that communication happened without language. The writer of Text 2 also laughs at their own confidence, but the city, not a person, is the teacher: the walls are personified "like conspirators sharing secrets", and even the cat, with its "calm superiority", seems to know more than the visitor.

The writers' methods reflect these perspectives. Text 1 is a chronological anecdote, moving from preparation to journey to crisis to rescue, and its final paragraph draws a clear moral: no journey since "has taught me as much as that first night". Text 2 is more impressionistic. Its crowded sentences and its list of smells without a single "and" try to reproduce sensory overload, and it ends not with a lesson about people but with an abstract idea of a city that exists "in layers" and must be surrendered to.

Their attitudes to preparation are similar but expressed differently. Text 1 treats the useless map with comedy, since the old woman "laughed until she had to wipe her eyes" at it, while Text 2 states the failure flatly in two short sentences, "I had read the guidebooks. I had studied the map.", before explaining it with the metaphor of a city that "refuses to be flattened into two dimensions".

Finally, the tone differs. Text 1 is warm and grateful, ending on "worth helping", whereas Text 2 is wittier and more detached, ending with the image of being "carried along by its currents". One writer remembers a city through a person; the other describes a city as a force of nature.`,
            },
            markScheme: [
              'Comparisons could include: both writers present getting lost as worthwhile, but Text 1 finds help in a person and Text 2 in surrendering to the city; Text 1 looks back over many years with gratitude, Text 2 reflects with wit on a recent visit; Text 1 tells a chronological anecdote with a clear moral, Text 2 builds sensory impressions and an abstract idea of a city that exists in layers; both writers laugh at their own failed preparations.',
              ...MARKS_Q7B,
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-01-writing',
        title: 'Section B: Transactional Writing',
        description: SECTION_B_ADVICE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p2-01-q8-9',
            questionNumber: 8,
            label: 'Q8 or Q9',
            questionText: `Answer ONE question: either Question 8 or Question 9.\n\nQuestion 8\n\nWrite an article for a travel website for young people in which you argue that the best way to discover a new place is to get a little lost in it.\n\nYou could write about:\n• why plans and maps can get in the way\n• a time when something unplanned turned out well\n• how to explore safely\nand any other ideas of your own.\n\nOR\n\nQuestion 9\n\n"Every young person should spend time abroad before they leave school."\n\nWrite a speech for a school assembly in which you give your views on this statement.\n\nYou could write about:\n• what young people can learn from other countries\n• the cost and other difficulties\n• whether there are other ways to learn about the world\nand any other ideas of your own.\n\n${MARKS_WRITING_NOTE}`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 6-7': `Question 9: a speech for a school assembly

Good morning, everyone.

Today I want to talk about whether every young person should spend time abroad before they leave school. I believe they should, if it can be made possible for everyone, and I want to explain why.

Firstly, travelling abroad teaches you things that you cannot learn from a textbook. When I went on the Year 9 exchange trip to France, I had studied French for three years, but I only really started to speak it when I had to order my own lunch and ask for directions. It was frightening at first, but by the end of the week I felt much more confident.

Secondly, spending time in another country helps us to understand other people. We see how families live, what they eat and what they care about. We realise that people in other countries are not so different from us after all. In a world where people often argue online about other cultures, this kind of understanding is more important than ever.

However, I know that there are problems. Trips abroad can be very expensive, and not every family can afford them. Some students may also feel anxious about being far from home. That is why I think the school should help. It could raise money through events, apply for grants and offer shorter trips that cost less. Students who cannot travel could take part in online exchanges with schools in other countries, which would still give them a chance to make new friends.

Some people say that we can learn everything we need from the internet. It is true that we can watch videos of any city in the world. But watching a video of a market is not the same as standing in one, smelling the food and hearing people talk. Real experiences stay with us.

In conclusion, I believe that time abroad gives young people confidence, understanding and memories that last a lifetime. Let's make sure that every student in this school has the chance to go.

Thank you for listening.`,
              'Grade 8-9': `Question 8: an article for a travel website

Throw Away the Map (Well, Almost)
Why the best journeys start when you stop knowing where you are

Picture the scene. You have your phone in one hand, a blue dot pulsing on the screen, and you are following it obediently down a street you will never remember. You arrive exactly where you meant to go. Congratulations: you have travelled hundreds of miles to look at a screen.

I want to suggest something braver. Next time you visit somewhere new, put the phone in your pocket for an afternoon and let yourself get a little lost.

Plans have their place. Nobody wants to miss a train or spend the night in a bus station. But a plan only shows you what you already expected to find. The guidebook's top ten sights are, by definition, the places everybody else has seen. The bakery that sells the best bread in the city, the square where old men play chess under a plane tree, the alley where somebody is painting a mural: these are not on the route. You find them by turning left when the map says right.

Last summer, on a family trip to Lisbon, I told my parents I would meet them at the top of the hill and wandered away from the main street while they queued for a famous tram. Within twenty minutes I had no idea where I was. I also had the best afternoon of the holiday. I found a staircase that climbed between pastel houses, a café owner who insisted I try a custard tart before I paid, and a view across the river that no postcard could have prepared me for. When I eventually asked the way back, a teenager my own age walked me halfway there, practising her English as we went.

Of course, getting lost is not the same as being reckless. Getting lost well takes a little planning of its own. Tell someone where you are going. Keep your phone charged, even if it stays in your pocket. Stick to busy streets after dark, and know the name and address of the place where you are staying. These are the rules that let you relax enough to explore.

The real reward is not the views; it is what happens to you. When you cannot rely on a screen, you start to notice things: the smell of a street, the sound of a language, the faces of the people around you. You have to ask for help, which means you have to talk to someone. Every traveller I know has a favourite story, and almost none of those stories begins with "I followed the directions exactly."

So, by all means, pack the map. Just do not let it decide where you go. Somewhere beyond the next corner is a place that is not in any guidebook, waiting for you to find it.`,
            },
            markScheme: [
              'Question 8 (an article for young travellers): a headline, and perhaps a subheading or sections; a lively, persuasive voice that suits young readers; a clear argument that getting lost can be the best way to discover a place, developed with examples or an anecdote; sensible advice on staying safe.',
              'Question 9 (a speech for an assembly): an opening and a close that speak to the audience; spoken features such as direct address and rhetorical questions; a clear view on the statement, supported by reasons and examples; awareness of other views, such as the cost or anxiety about travel.',
              ...MARKS_WRITING,
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 02: Sport
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p2-02',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-fiction and Transactional Writing',
    subtitle: 'English Language 1EN0/02',
    code: '1EN0/02',
    totalTimeMinutes: 125,
    totalMarks: 96,
    sections: [
      {
        id: 'edexcel-p2-02-reading',
        title: 'Section A: Reading',
        description: `${SECTION_A_ADVICE}\n\nText 1: ${E02_TEXT_1_REF}\nText 2: ${E02_TEXT_2_REF}\n\nGlossary for Text 1: crush barrier: a metal rail on a standing terrace that stops the crowd surging forward; left back: a defender who plays on the left of the pitch.`,
        totalMarks: 56,
        suggestedTimeMinutes: 80,
        questions: [
          {
            id: 'edexcel-p2-02-q1',
            questionNumber: 1,
            questionText:
              "Look at the first paragraph of Text 1.\n\nIdentify two things the writer's father wore or carried to the match.",
            marks: 2,
            suggestedTimeMinutes: 2,
            questionType: 'retrieval',
            extract: E02_BOTH,
            extractSource: E02_BOTH_REF,
            modelAnswers: {
              'Grade 6-7': '1. The same scarf his own father had worn.\n2. A flask of tea.',
            },
            markScheme: [
              '1 mark for each correct point, up to 2.',
              'Accept any two of: the scarf his own father had worn, knotted twice; a flask of tea; two cheese sandwiches wrapped in greaseproof paper.',
              "A word, a short phrase or the student's own words is enough.",
              'Do not credit the rattle or the programme, which are in the first paragraph but belong to the writer, not the father, or anything from outside the first paragraph.',
            ],
          },
          {
            id: 'edexcel-p2-02-q2',
            questionNumber: 2,
            questionText:
              'Read the third paragraph of Text 1, beginning "The players did not seem like stars to us."\n\nGive two details that show that the players lived like ordinary people.\n\nYou may answer in your own words or with quotations.',
            marks: 2,
            suggestedTimeMinutes: 2,
            questionType: 'retrieval',
            extract: `Text 1:\n${E02_TEXT_1}`,
            extractSource: E02_TEXT_1_REF,
            modelAnswers: {
              'Grade 6-7':
                '1. The left back "lived four doors down from my aunt".\n2. In the summer he "painted houses to make ends meet".',
            },
            markScheme: [
              '1 mark for each correct point, up to 2. The two points must be different.',
              "Accept: the left back lived four doors down from the writer's aunt; he caught the same bus as everybody else on a Monday morning; he painted houses in the summer to make ends meet.",
              "Quotations and the student's own words both count.",
            ],
          },
          {
            id: 'edexcel-p2-02-q3',
            questionNumber: 3,
            questionText:
              "Analyse how the writer of Text 1 uses language and structure to hold the reader's interest.\n\nRefer closely to the text to support your views.",
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'analysis',
            extract: `Text 1:\n${E02_TEXT_1}`,
            extractSource: E02_TEXT_1_REF,
            modelAnswers: {
              'Grade 6-7': `The writer uses language and structure to share happy memories of going to football as a child. In the first paragraph, small details such as the scarf "knotted twice" and the "flask of tea and two cheese sandwiches" make the memory feel real, and show that going to the match was a family routine.

The writer uses funny descriptions of the people in the crowd, such as Ronnie, "who shouted advice at the referee for ninety minutes". When the crowd moves, the writer is "lifted off my feet", which sounds scary, but the child learns to "laugh", so it seems exciting rather than dangerous.

In the third paragraph, the writer shows that the players were ordinary people. The left back "caught the same bus as everybody else", which shows he was not a rich star.

The fourth paragraph starts with the short sentence "None of this was comfortable." The list of problems, such as "the pies were mostly gravy", is funny and honest. But then the writer says "I have never felt so completely part of something", which shows how much it meant.

The ending changes to the present day. The writer's father has died and the terrace has gone. The writer still looks for "the third crush barrier from the left", which links back to the second paragraph and makes the ending sad, because the people from the past are gone.`,
              'Grade 8-9': `The writer interests the reader by building a vivid, affectionate memory of a lost world and then, in the final paragraph, revealing what that memory means.

The opening paragraph is full of precise, homely detail: the "twenty past one bus", the scarf "knotted twice", the sandwiches "wrapped in greaseproof paper". These specifics make the memory feel real and treasured, and the short sentence "I was nine." fixes the child's point of view, so that we see the ground through young eyes. Even the comic touches, a rattle that "I was not allowed to swing near anybody's ear" and a programme read "so often that the pages went soft", show how much the ritual mattered.

The second paragraph introduces a small cast of characters, Ronnie, who "shouted advice at the referee for ninety minutes", and Mr Pattinson, who said only "About time.", and the contrast between them is gently funny. The description of the crowd swaying, with the child "lifted off my feet and carried down three steps and back again", could be frightening, but the paragraph ends with the verb "laugh", turning danger into belonging.

The third paragraph shifts the focus from the crowd to the players. Its topic sentence, "The players did not seem like stars to us", states the idea that the paragraph then proves through details such as the left back who "painted houses to make ends meet". The humour of "a scuffed shot that bobbled over the line" makes the players endearingly ordinary.

In the fourth paragraph the writer is honest. The short sentence "None of this was comfortable." is followed by a list of discomforts, "the toilets were a disgrace and the pies were mostly gravy", but the conjunction "Yet" turns the paragraph round. The sensory climax, "twenty thousand voices rose at once and I could feel the noise through the soles of my shoes", makes belonging something physical.

The final paragraph moves into the present, and the change of tense brings loss into the text: the father "has been dead for many years" and the terrace has been "replaced by rows of plastic seats". The repeated detail of the scarf knotted twice and the return of "the third crush barrier from the left" from the second paragraph create a circular structure, and the closing wish that "everybody I stood beside would still be there" leaves the reader with a quiet, moving sense of grief.`,
            },
            markScheme: [
              'Credit analysis of both language and structure, with references from across Text 1, each linked to its effect on the reader.',
              'Language could include: precise, homely details such as the scarf "knotted twice"; the comic portraits of Ronnie and Mr Pattinson; the description of the crowd swaying that ends in laughter; the sensory climax of voices felt "through the soles of my shoes"; the plain, quiet statement of the father\'s death.',
              'Structure could include: the child\'s point of view fixed by the short sentence "I was nine."; the topic sentence that opens the paragraph about the players; the turn on "Yet" after the list of discomforts; the shift from past to present in the last paragraph; the circular return to the third crush barrier, which ends the text on loss.',
              ...MARKS_Q3,
            ],
          },
          {
            id: 'edexcel-p2-02-q4',
            questionNumber: 4,
            questionText:
              'Look at the first paragraph of Text 2.\n\nIdentify one way in which footballers in the 1960s lived like the fans.',
            marks: 1,
            suggestedTimeMinutes: 1,
            questionType: 'retrieval',
            extract: `Text 2:\n${E02_TEXT_2}`,
            extractSource: E02_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7': 'They lived in the same streets as the fans.',
            },
            markScheme: [
              '1 mark for one correct point.',
              'Accept one of: they lived in the same streets; they drank in the same pubs; they sent their children to the same schools; they earned wages that did not put them in a different economic universe.',
            ],
          },
          {
            id: 'edexcel-p2-02-q5',
            questionNumber: 5,
            questionText:
              'Look at the second paragraph of Text 2.\n\nIdentify one change in football that the writer criticises.',
            marks: 1,
            suggestedTimeMinutes: 1,
            questionType: 'retrieval',
            extract: `Text 2:\n${E02_TEXT_2}`,
            extractSource: E02_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7':
                'At some grounds the cheapest ticket has risen by almost 900% since 1990.',
            },
            markScheme: [
              '1 mark for one correct point.',
              'Accept one of: a footballer earns more in a week than a nurse earns in a year; at some grounds the cheapest ticket has risen by almost 900% since 1990, pricing out local communities; the terraces have been replaced by corporate hospitality boxes.',
            ],
          },
          {
            id: 'edexcel-p2-02-q6',
            questionNumber: 6,
            questionText:
              'In Text 2, the writer sets out to persuade the reader that money has damaged the bond between football clubs and the communities they came from.\n\nEvaluate how well the writer achieves this. Refer closely to the text to support your judgement.',
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'evaluation',
            extract: `Text 2:\n${E02_TEXT_2}`,
            extractSource: E02_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7': `I think the writer is quite successful in persuading the reader, because the article uses memories, statistics and strong images.

The writer begins with a memory of a grandfather who watched football in the 1960s, when "the players lived in the same streets as the fans". This makes the past seem friendly and close, and it makes the reader feel that something good has been lost. The short sentence "It was real." is effective because it is simple and certain.

In the second paragraph, the writer uses a comparison that shocks the reader: a footballer "earns more in a week than a nurse earns in a year". This works well because most people think nurses are underpaid, so it makes footballers' wages seem unfair. The statistic that the cheapest ticket at some grounds has risen "by almost 900%" also supports the argument.

The writer contrasts the old terraces, where people "roared their teams to glory", with "corporate hospitality boxes". This contrast makes the modern game seem cold and only about money.

At the end, the writer uses repetition, "We can demand", "We can insist" and "We can refuse", to make the reader feel they can do something. However, the article is quite short and does not give much detail about how things could change, so it is not completely convincing.`,
              'Grade 8-9': `The writer is largely successful, because the argument moves from a personal memory to hard figures to practical demands, so that the reader is given a reason to care, evidence to believe and something to do.

The opening is cleverly judged. By saying the problem is "not the money, though the money is obscene", the writer seems fair-minded while still landing a blow, and the real target, "what the money has done to the relationship between clubs and their communities", is set out at once. The memory of a grandfather who watched Sunderland gives the argument a human face. The run of three verbs in "They drank in the same pubs, sent their children to the same schools, and earned wages" builds a picture of closeness, and the final short sentence, "It was real.", is persuasive because it is so plain.

The second paragraph supplies evidence. The comparison that a footballer "earns more in a week than a nurse earns in a year" is effective because a nurse is someone readers respect, so the gap feels unjust rather than merely large. The figure of a rise of "almost 900%" in the cheapest tickets is striking, and the phrase "pricing out the very communities that built these clubs from nothing" turns the number into a story of betrayal. The contrast between terraces where people "roared their teams to glory" and boxes for clients "who couldn't name a single player on the pitch" is the most memorable image in the piece, although it is a little unfair, since it assumes that every corporate guest is ignorant.

The final paragraph strengthens the writer's credibility with a concession: "I am not naive enough to suggest we can turn back the clock." The repetition of "We can demand", "We can insist" and "We can refuse" ends on a confident, collective note. The demands are modest, which makes them believable, but the article does not explain how clubs could be made to act, so the ending is more rousing than practical.

Overall, the writer persuades well, using contrast and well-chosen evidence; the occasional exaggeration and the lack of a plan stop the argument from being completely convincing.`,
            },
            markScheme: [
              'A clear judgement of how successfully the writer persuades, kept up through the answer and supported by detailed reference to Text 2.',
              'Points that could be evaluated: the fair-minded opening that still calls the money obscene; the grandfather\'s memory, which gives the argument a human face; the comparison with a nurse\'s pay and the ticket-price figure; the contrast between the terraces and the hospitality boxes; the concession that the clock cannot be turned back; the repeated "We can" that closes the piece.',
              'A balanced view is creditable, for example that some claims are exaggerated, or that the article demands change without explaining how it could happen.',
              ...MARKS_Q6,
            ],
          },
          {
            id: 'edexcel-p2-02-q7a',
            questionNumber: 7,
            label: '7(a)',
            questionText:
              'Both texts describe football in the past.\n\nWhat similarities are there between the ways the two writers describe the game as it used to be? Support your answer with evidence from both texts.',
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: E02_BOTH,
            extractSource: E02_BOTH_REF,
            modelAnswers: {
              'Grade 6-7':
                'Both texts show that footballers used to live near the fans. In Text 1 the left back "lived four doors down from my aunt", and in Text 2 the players "lived in the same streets as the fans". Both also show that going to football was a family tradition: in Text 1 the writer goes with their father, who wears "the same scarf his own father had worn", and in Text 2 the writer remembers a grandfather who "watched Sunderland". Both writers mention the terraces, where fans stood together and made a lot of noise.',
              'Grade 8-9':
                'Both writers describe a time when players lived among the supporters. In Text 1 the left back "lived four doors down from my aunt" and "caught the same bus as everybody else", and in Text 2 the players "lived in the same streets as the fans" and "drank in the same pubs". Both show that players then were not rich: one "painted houses to make ends meet", while the others "earned wages that, while comfortable, did not place them in a different economic universe". Both writers link football with family memory, the father in Text 1 wearing "the same scarf his own father had worn" and the writer of Text 2 recalling a grandfather who "watched Sunderland in the 1960s". Finally, both describe the terraces as places of noisy togetherness, where "twenty thousand voices rose at once" and where "generations of working people roared their teams to glory".',
            },
            markScheme: [
              'Similarities could include: players lived among the supporters and travelled and drank alongside them; players earned ordinary wages; going to football was a family tradition handed down from parents and grandparents; the terraces were places where working people stood together and made a great noise.',
              ...MARKS_Q7A,
            ],
          },
          {
            id: 'edexcel-p2-02-q7b',
            questionNumber: 7,
            label: '7(b)',
            questionText:
              'Compare the ideas and perspectives of the two writers about what football has lost, and the methods each uses to convey them.\n\nRefer closely to both texts in your answer.',
            marks: 14,
            suggestedTimeMinutes: 18,
            questionType: 'comparison',
            extract: E02_BOTH,
            extractSource: E02_BOTH_REF,
            modelAnswers: {
              'Grade 6-7': `Both writers think something has been lost from football, but they feel differently about it. The writer of Text 1 is nostalgic and sad. The memories of the terrace are happy ones, and the writer says "I have never felt so completely part of something". The writer of Text 2 is angry, calling the money "obscene".

The writer of Text 1 focuses on people, such as the father and his friends, and the left back who "painted houses to make ends meet". The writer of Text 2 focuses on money and uses statistics, such as the rise of "almost 900%" in the cheapest tickets, to prove the point.

Both writers talk about the old terraces. In Text 1, the terrace has been "replaced by rows of plastic seats", and the writer misses the people who stood there. In Text 2, the terraces have been replaced by "corporate hospitality boxes" for rich people. This shows that both writers think the game has changed for the worse.

The writers use different methods. Text 1 is a story told in the order things happened, with lots of description. Text 2 is an argument, and it ends with the repetition of "We can" to persuade readers to act. Overall, Text 1 is more personal and emotional, while Text 2 is more political.`,
              'Grade 8-9': `Both writers believe that football has lost a closeness between clubs and the people around them, but the writer of Text 1 mourns a personal loss, while the writer of Text 2 makes a public argument about money.

For the writer of Text 1, what has gone is a set of people. The memoir is full of named individuals, "Ronnie from the bakery" and "Mr Pattinson", and its deepest loss is the father, who "has been dead for many years now". The terrace is remembered not for its view, the claim about which "was not true", but because "it was where his friends stood". The writer of Text 2 also uses family memory, the grandfather who "watched Sunderland in the 1960s", but only briefly, as evidence for a wider claim about "the relationship between clubs and their communities".

Their attitudes to the past differ. Text 1 is honest about its hardships, "the toilets were a disgrace and the pies were mostly gravy", and does not want the old ground back so much as the people in it. Text 2 also admits that "there is no returning to the days of maximum wages and muddy pitches", but it blames a specific cause: money, which means a footballer now earns "more in a week than a nurse earns in a year".

Their methods reflect these purposes. Text 1 is a chronological memoir that moves from the past to the present, using sensory detail, such as the noise felt "through the soles of my shoes", to recreate belonging, and it ends on a quiet, unresolved wish. Text 2 is an opinion column that uses statistics, contrast and a confident "We"; it ends with demands: "We can insist that ticket prices include affordable allocations for local fans."

Both use the terraces as their central symbol. In Text 1 the terrace has been "replaced by rows of plastic seats", a detail that carries grief; in Text 2 the terraces have been "replaced by corporate hospitality boxes", a detail that carries anger. The same change is felt as sorrow by one writer and as injustice by the other.`,
            },
            markScheme: [
              'Comparisons could include: both writers feel that football has lost its closeness to ordinary people, but Text 1 mourns particular people, above all the father, while Text 2 argues about money and fairness; both admit the past was hard and cannot return; Text 1 is a chronological memoir rich in sensory detail that ends on a private wish, Text 2 an opinion column built on statistics and contrast that ends with public demands; in both, the replacement of the terraces stands for the change, felt as grief in one and as injustice in the other.',
              ...MARKS_Q7B,
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-02-writing',
        title: 'Section B: Transactional Writing',
        description: SECTION_B_ADVICE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p2-02-q8-9',
            questionNumber: 8,
            label: 'Q8 or Q9',
            questionText: `Answer ONE question: either Question 8 or Question 9.\n\nQuestion 8\n\nWrite a letter to the owner of a professional sports club in which you argue that tickets should be made affordable for young people and families.\n\nYou could write about:\n• what watching live sport can mean to young people and their families\n• the cost of going to matches\n• what the club could do\nand any other ideas of your own.\n\nOR\n\nQuestion 9\n\n"Professional sports stars are paid far too much."\n\nWrite an article for your school or college magazine in which you give your views on this statement.\n\nYou could write about:\n• what sports stars earn compared with other workers\n• whether their talent and short careers justify their pay\n• the example they set to young people\nand any other ideas of your own.\n\n${MARKS_WRITING_NOTE}`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 6-7': `Question 9: an article for a school magazine

Are Sports Stars Worth It?

Every week we read about another footballer signing a contract worth millions of pounds. Some people think this is fair, but I believe that professional sports stars are paid far too much.

Firstly, think about the jobs that really keep our society going. Nurses, teachers and firefighters work long hours and save lives, yet they earn a tiny fraction of what a top footballer earns. It seems wrong that someone who kicks a ball for ninety minutes is valued more highly than someone who looks after us when we are ill.

Some people argue that sports stars deserve their wages because they have rare talent and their careers are short. It is true that most players retire in their thirties and that only a few people are good enough to play at the top level. However, even a player who earned a fraction of today's wages for ten years would still be richer than most people will ever be.

Another problem is the example these wages set for young people. Many children dream of becoming famous athletes because they want to be rich, not because they love the sport. When only a tiny number succeed, others may feel like failures, even if they have other talents.

On the other hand, some sports stars use their money well. They set up charities, fund community projects and speak out about important issues. This shows that wealth can be used to help others.

In conclusion, I think sports stars should be paid well, but not the enormous sums they earn today. Perhaps clubs could spend some of this money on cheaper tickets or on sport for young people in their local area. That way, everyone would benefit from the success of the game.`,
              'Grade 8-9': `Question 8: a letter to the owner of a sports club

Dear Mr Okafor,

I am writing to you as a lifelong supporter of Riverside Athletic, and as one of the many young fans who can no longer afford to watch the team they love. I am asking you to introduce affordable tickets for young people and families, not as an act of charity, but because the future of your club depends on it.

My first match was a home game when I was seven. I remember the green of the pitch under the floodlights, the roar when we scored, and my grandmother, who had been coming since 1968, squeezing my hand so tightly that it hurt. That afternoon made me a supporter for life. It cost my family less than thirty pounds. Last season, the same three tickets would have cost more than a hundred and twenty.

For many families on my estate, that is the weekly food shop. Parents are being asked to choose between a match and the electricity bill, and they are choosing, quite rightly, the electricity bill. The result is visible every week: rows of empty seats in the family stand, and a generation of children who know the players only through a screen.

You may argue that the club needs every penny to compete, and I understand that football is a business. But a business that prices out its future customers is not being prudent; it is being short-sighted. The child who cannot afford a ticket today will not buy a season ticket in twenty years. Supporters are not born loyal. They are made, one Saturday at a time.

There are simple steps you could take. A limited number of tickets for under-eighteens at ten pounds would cost the club very little and fill seats that are currently empty. A family ticket for two adults and two children, held at a fixed price for three seasons, would allow parents to plan. Schools in the area could be offered free tickets for midweek cup games, building the connection between the club and the town that gave it its name.

Other clubs have done exactly this, and their grounds are louder, younger and fuller for it. I would love Riverside to lead the way rather than follow.

Thank you for taking the time to read my letter. I hope that, when my own children are old enough, they will be able to sit in the family stand and feel what I felt at seven.

Yours sincerely,

Jordan Ellis`,
            },
            markScheme: [
              "Question 8 (a letter to a club owner): a suitable greeting and sign-off and a formal, respectful register; a clear argument for affordable tickets, developed with reasons, examples and perhaps a personal anecdote; practical suggestions for what the club could do; an answer to the club's likely objections.",
              'Question 9 (an article for a school or college magazine): a headline and a voice that suits student readers; a clear view on the statement, developed with comparisons, reasons and examples; awareness of the other side, such as talent, short careers or charity work; a conclusion that draws the argument together.',
              ...MARKS_WRITING,
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 03: Education
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p2-03',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-fiction and Transactional Writing',
    subtitle: 'English Language 1EN0/02',
    code: '1EN0/02',
    totalTimeMinutes: 125,
    totalMarks: 96,
    sections: [
      {
        id: 'edexcel-p2-03-reading',
        title: 'Section A: Reading',
        description: `${SECTION_A_ADVICE}\n\nText 1: ${E03_TEXT_1_REF}\nText 2: ${E03_TEXT_2_REF}\n\nGlossary for Text 1: the eleven-plus: an examination taken at the age of ten or eleven that decided which secondary school a child went to; grammar school: a school for pupils who passed it; secondary modern: a school for pupils who did not.`,
        totalMarks: 56,
        suggestedTimeMinutes: 80,
        questions: [
          {
            id: 'edexcel-p2-03-q1',
            questionNumber: 1,
            questionText:
              'Look at the first paragraph of Text 1.\n\nIdentify two things the writer links with the grammar school.',
            marks: 2,
            suggestedTimeMinutes: 2,
            questionType: 'retrieval',
            extract: E03_BOTH,
            extractSource: E03_BOTH_REF,
            modelAnswers: {
              'Grade 6-7': '1. It was on the hill.\n2. Its pupils learned Latin.',
            },
            markScheme: [
              '1 mark for each correct point, up to 2.',
              'Accept any two of: you went there if you passed the eleven-plus; it was on the hill; it had blazers; it taught Latin.',
              "A word, a short phrase or the student's own words is enough.",
              'Do not credit details of the secondary modern.',
            ],
          },
          {
            id: 'edexcel-p2-03-q2',
            questionNumber: 2,
            questionText:
              'Read the second paragraph of Text 1, beginning "On the morning of the test".\n\nGive two details that show how frightening the examination was for the writer.\n\nYou may answer in your own words or with quotations.',
            marks: 2,
            suggestedTimeMinutes: 2,
            questionType: 'retrieval',
            extract: `Text 1:\n${E03_TEXT_1}`,
            extractSource: E03_TEXT_1_REF,
            modelAnswers: {
              'Grade 6-7':
                '1. A teacher the writer had never seen "walked up and down between them with his hands behind his back".\n2. The writer\'s hand "was shaking so much that my sevens looked like ones".',
            },
            markScheme: [
              '1 mark for each correct point, up to 2. The two points must be different.',
              "Accept: the writer was given a boiled egg for luck; the pencils were checked twice; the desks were in rows so straight they looked measured with a ruler; an unknown teacher walked up and down with his hands behind his back; the only sound was the clock; the writer's hand shook so much that the sevens looked like ones.",
              "Quotations and the student's own words both count.",
            ],
          },
          {
            id: 'edexcel-p2-03-q3',
            questionNumber: 3,
            questionText:
              "Analyse how the writer of Text 1 uses language and structure to hold the reader's interest.\n\nRefer closely to the text to support your views.",
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'analysis',
            extract: `Text 1:\n${E03_TEXT_1}`,
            extractSource: E03_TEXT_1_REF,
            modelAnswers: {
              'Grade 6-7': `The writer makes the memoir interesting by showing how frightening the eleven-plus was and how one teacher made a difference.

At the start, the writer says the examination "would decide the rest of my life". This makes it sound very serious and makes the reader want to know what happened. The contrast between "the grammar school on the hill" and "the secondary modern by the gasworks" shows that one school was seen as better than the other.

In the second paragraph, the writer uses details to build tension. The desks are in rows "so straight", the teacher walks "up and down", and "The only sound was the clock." The short sentence makes the silence feel heavy. The writer's hand was "shaking so much", which shows how nervous they were.

The third paragraph uses short sentences, "I had passed. My best friend, Alan, had not.", to show how quickly the friends were separated. The simile "like letters into pigeonholes" suggests that children were sorted without any feeling.

Then the writer changes focus to Miss Hartley, who "had no interest at all in marks". She is described in a friendly way, reading "with her shoes off". At the end, the writer says they cannot remember any exam questions, but they "can still hear Miss Hartley reading". This structure shows that the teacher mattered more than the tests.`,
              'Grade 8-9': `The writer engages the reader by telling the story of an examination that seems to decide everything, and then structuring it so that the examination turns out to matter far less than a teacher.

The opening sentence is dramatic, an examination "that would decide the rest of my life", and the next sentence, "Nobody put it quite like that, but we all knew.", builds a sense of unspoken pressure. The writer then uses parallel sentences, "Pass the eleven-plus and you went to the grammar school on the hill" and "Fail, and you went to the secondary modern by the gasworks", to show how harshly children were divided. The contrast between the hill and the gasworks gives the division a physical shape, up and down, which the writer returns to later.

In the second paragraph, precise details create tension. The rows of desks look "as though they had been measured with a ruler", and the unknown teacher walks "with his hands behind his back": images of order and control seen through a child's anxious eyes. The short sentence "The only sound was the clock." slows time, and the final detail, a hand shaking "so much that my sevens looked like ones", is both funny and painful.

The third paragraph opens with three short sentences, "The letter came in May. I had passed. My best friend, Alan, had not.", which deliver the result like a blow. The image of the two friends going "down the hill" and "up it" returns to the geography of the first paragraph, and the simile "like letters into pigeonholes" makes the system seem mechanical and impersonal.

The fourth paragraph shifts the focus from the examination to Miss Hartley, and the language becomes warmer and more playful: she read "with her shoes off, perched on the edge of her desk". The essay with "no title" contrasts with the rigid test, and her one-word comment, "More.", is a small, powerful climax.

The final paragraph reverses the opening. The examinations that seemed so important are forgotten, "I could not now tell you a single question", while the teacher's voice remains. The pigeon essay "folded into a book on my shelf" is a quiet final image that leaves the reader with the writer's real lesson: what lasts is the teaching, not the test.`,
            },
            markScheme: [
              'Credit analysis of both language and structure, with references from across Text 1, each linked to its effect on the reader.',
              'Language could include: the dramatic claim about an examination that would decide the writer\'s life; the contrast between the school on the hill and the school by the gasworks; the images of order and control in the exam hall; the simile "like letters into pigeonholes"; the warm, playful description of Miss Hartley and her one-word comment.',
              'Structure could include: the parallel sentences beginning "Pass" and "Fail"; the short sentences that slow time in the hall and deliver the result; the return of the hill when the friends are separated; the shift in focus from the examination to the teacher; the ending, which reverses the opening by showing that the tests are forgotten and the teaching remembered.',
              ...MARKS_Q3,
            ],
          },
          {
            id: 'edexcel-p2-03-q4',
            questionNumber: 4,
            questionText:
              'Look at the first paragraph of Text 2.\n\nIdentify one thing the writer says about the assessments students take.',
            marks: 1,
            suggestedTimeMinutes: 1,
            questionType: 'retrieval',
            extract: `Text 2:\n${E03_TEXT_2}`,
            extractSource: E03_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7':
                'By the age of sixteen, a typical student will have sat over seventy formal assessments.',
            },
            markScheme: [
              '1 mark for one correct point.',
              "Accept one of: a typical student sits over seventy formal assessments by the age of sixteen; each one carries the message that the student's worth can be measured, quantified and ranked; the system they belong to is efficient at producing data but not curious, resilient, creative people.",
            ],
          },
          {
            id: 'edexcel-p2-03-q5',
            questionNumber: 5,
            questionText:
              'Look at the second paragraph of Text 2.\n\nIdentify one effect the writer says the education system is having on teachers.',
            marks: 1,
            suggestedTimeMinutes: 1,
            questionType: 'retrieval',
            extract: `Text 2:\n${E03_TEXT_2}`,
            extractSource: E03_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7': 'Teachers are leaving the profession at record rates.',
            },
            markScheme: [
              '1 mark for one correct point.',
              'Accept one of: teachers are demoralised; overworked; buried under marking; leaving the profession at record rates; one in three newly qualified teachers quits within five years.',
            ],
          },
          {
            id: 'edexcel-p2-03-q6',
            questionNumber: 6,
            questionText:
              'In Text 2, the writer tries to convince the reader that schools are testing children too much.\n\nEvaluate how well the writer achieves this. Refer closely to the text to support your judgement.',
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'evaluation',
            extract: `Text 2:\n${E03_TEXT_2}`,
            extractSource: E03_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7': `I think the writer is successful in convincing the reader that there is too much testing, mainly because of the strong language and the personal examples.

The first sentence, "We are testing our children to destruction", is shocking and grabs the reader's attention. It makes testing sound harmful, as if children are being broken. The writer also uses the statistic that students sit "over seventy formal assessments", which makes the number of tests seem huge.

In the second paragraph, the writer gives more statistics about mental health and about teachers leaving. This is effective because it shows that testing harms teachers as well as students. However, the writer does not say where the statistics come from, so the reader might not fully trust them.

The most successful part is the end, where the writer talks about "twenty-two years" of teaching. The examples of a debate "that overran into lunchtime" and a boy who "devoured an entire novel" make the reader see that students learn best when they are enjoying themselves. The repetition of "It happened" makes these examples stand out.

Overall, the writer is convincing, although the article would be even stronger if it explained what schools should do instead.`,
              'Grade 8-9': `The writer is very successful in the first two paragraphs, which shock the reader with strong language and statistics, and most persuasive of all in the third, where personal experience shows what testing takes away.

The opening sentence, "We are testing our children to destruction.", is deliberately extreme. The phrase "to destruction" is borrowed from the testing of machines until they break, so children are presented as objects worn out by the system, and the inclusive "We" makes the reader share the responsibility. The figure of "over seventy formal assessments" gives the claim weight, and the list "measured, quantified, and ranked on a spreadsheet" turns students into data. The balanced contrast between a system "extraordinarily efficient at producing data and extraordinarily inefficient at producing curious, resilient, creative human beings" is memorable because the repetition makes the absurdity obvious.

The second paragraph widens the argument to mental health and to teachers. The statistics, referrals that "have doubled" and "One in three newly qualified teachers", are alarming, although a careful reader might notice that no sources are named, which weakens them a little. The metaphor of a system "burning through its most valuable resource" presents teachers as fuel being used up, a vivid way of making the reader care about them too.

The final paragraph is the most convincing. The writer's experience, "twenty-two years" of teaching, makes the claims trustworthy, and the repeated "It happened" introduces three examples: a debate that "overran into lunchtime", a boy who "devoured an entire novel in a weekend" and conversations "that no mark scheme could capture". These show, rather than tell, what is lost when learning becomes assessment. The verb "devoured" is especially effective, as it suggests a hunger for reading.

Overall, the writer persuades by combining emotional language, evidence and experience. The argument would be stronger if it suggested what should replace so many tests, but as an attack on over-testing it is powerful and coherent.`,
            },
            markScheme: [
              'A clear judgement of how successfully the writer argues against over-testing, kept up through the answer and supported by detailed reference to Text 2.',
              'Points that could be evaluated: the extreme opening and the inclusive "We"; the figure of over seventy assessments and the image of students ranked on a spreadsheet; the balanced contrast between producing data and producing curious people; the statistics on mental health and teachers, which are alarming but name no source; the writer\'s experience and the three examples introduced by "It happened".',
              'A balanced view is creditable, for example that the writer attacks testing without saying what should replace it.',
              ...MARKS_Q6,
            ],
          },
          {
            id: 'edexcel-p2-03-q7a',
            questionNumber: 7,
            label: '7(a)',
            questionText:
              'Both texts are about examinations and learning.\n\nWhat similarities are there between what the two writers say about them? Support your answer with evidence from both texts.',
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: E03_BOTH,
            extractSource: E03_BOTH_REF,
            modelAnswers: {
              'Grade 6-7':
                'Both texts show that exams make children anxious. In Text 1 the writer\'s hand was "shaking", and in Text 2 the writer mentions "exam stress". Both writers also think that the best learning does not come from tests. In Text 1, Miss Hartley "had no interest at all in marks", and in Text 2 the best learning happened "when students forgot they were being assessed". Both describe discussions that went on past the end of the lesson: arguments about poems "until the bell went" in Text 1 and a debate that "overran into lunchtime" in Text 2.',
              'Grade 8-9':
                'Both writers show that examinations frighten children: in Text 1 the writer\'s hand "was shaking so much that my sevens looked like ones", and Text 2 sets "exam stress" beside a doubling of referrals to child mental health services. Both suggest that tests sort and rank pupils coldly, Text 1 comparing the eleven-plus to sorting "letters into pigeonholes" and Text 2 describing pupils "ranked on a spreadsheet". Both believe that the best learning happens when marks are forgotten: Miss Hartley "had no interest at all in marks", and the writer of Text 2 says the best learning came "when students forgot they were being assessed". They even give similar examples. Miss Hartley let pupils "argue about poems until the bell went", just as a debate in Text 2 "overran into lunchtime", and in both a single well-chosen task inspires a pupil: an essay "about whatever we cared about most" in Text 1 and "exactly the right" novel in Text 2.',
            },
            markScheme: [
              'Similarities could include: examinations make children anxious; tests sort or rank pupils coldly; the best learning happens when marks are forgotten; discussions that ran past the end of a lesson; a teacher who chose the right task or book and inspired a pupil.',
              ...MARKS_Q7A,
            ],
          },
          {
            id: 'edexcel-p2-03-q7b',
            questionNumber: 7,
            label: '7(b)',
            questionText:
              'Compare the ideas and perspectives of the two writers about examinations, and the methods each uses to convey them.\n\nRefer closely to both texts in your answer.',
            marks: 14,
            suggestedTimeMinutes: 18,
            questionType: 'comparison',
            extract: E03_BOTH,
            extractSource: E03_BOTH_REF,
            modelAnswers: {
              'Grade 6-7': `Both writers think that examinations can do harm, but they present this in different ways. The writer of Text 1 shows the harm through a personal story. Passing the eleven-plus separated the writer from a best friend, and "after a year or so we stopped speaking". The writer of Text 2 shows the harm through facts, saying that students sit "over seventy formal assessments" and that exam stress takes its toll on them.

The tone of the texts is different. Text 1 is calm and thoughtful, and the writer says "It was nobody's fault". Text 2 is angry and urgent, beginning with "We are testing our children to destruction".

Both writers believe that good teaching matters more than tests. In Text 1 the writer remembers Miss Hartley, who "had no interest at all in marks", and in Text 2 the writer describes a teacher who had "chosen exactly the right" book for a boy.

The writers use different structures. Text 1 tells events in order and ends by saying the writer can still remember the teacher but not the tests. Text 2 is an argument that moves from statistics to the writer's own experience. Overall, Text 1 is a gentle memory and Text 2 is a strong argument for change.`,
              'Grade 8-9': `Both writers are critical of examinations, but the writer of Text 1 judges one examination by its effect on a single life, while the writer of Text 2 attacks a whole system as it is now.

The writer of Text 1 presents the eleven-plus as an examination "that would decide the rest of my life", and the cost is personal: a friendship ended because "The system had simply sorted us". Yet the tone is calm and forgiving, "It was nobody's fault", and the criticism is left for the reader to feel. The writer of Text 2 is openly angry from the first sentence, "We are testing our children to destruction", and blames a system that harms children and teachers alike, one that is "burning through its most valuable resource".

Both writers place their hope in teachers and in learning that escapes assessment. In Text 1, Miss Hartley "had no interest at all in marks", and her essay with "no title" frees the writer to write "six pages". In Text 2, the best learning happened "in the margins, in the spaces between lessons". However, the writer of Text 1 speaks as a former pupil looking back with gratitude, while the writer of Text 2 speaks as a teacher of "twenty-two years", with the authority of someone inside the system.

Their methods differ. Text 1 is a memoir told in chronological order, using concrete images such as the desks "measured with a ruler" and the friends going "down the hill" and "up it" to show division, and it ends with a quiet reflection that the questions are forgotten. Text 2 is an opinion article that relies on statistics, such as "over seventy formal assessments", on the inclusive "We", and on the repetition of "It happened" to build to its conclusion.

Finally, the perspectives differ in time. Text 1 shows that the harm of testing is not new, since it divided children in 1958; Text 2 suggests that it has grown worse, with referrals for mental health that "have doubled in the last five years". Read together, the texts suggest that the problem has changed its form but not its nature.`,
            },
            markScheme: [
              'Comparisons could include: both writers are critical of examinations, but Text 1 judges one examination by its effect on a single life and Text 2 attacks the whole system as it is now; the tone of Text 1 is calm and forgiving, that of Text 2 angry and urgent; both place their hope in teachers and in learning that escapes assessment, one writer speaking as a former pupil and one as a teacher; Text 1 uses chronological memoir and concrete images, Text 2 statistics, the inclusive "We" and repetition; together they suggest the harm is not new but has grown.',
              ...MARKS_Q7B,
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-03-writing',
        title: 'Section B: Transactional Writing',
        description: SECTION_B_ADVICE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p2-03-q8-9',
            questionNumber: 8,
            label: 'Q8 or Q9',
            questionText: `Answer ONE question: either Question 8 or Question 9.\n\nQuestion 8\n\n"Examinations are the fairest way to judge what students have learned."\n\nWrite a speech for a debate at your school or college in which you argue for or against this statement.\n\nYou could write about:\n• what examinations measure well and what they miss\n• the pressure examinations put on students\n• other ways of judging what students have learned\nand any other ideas of your own.\n\nOR\n\nQuestion 9\n\nWrite a letter to your headteacher in which you suggest ways the school could help students cope with the stress of examinations.\n\nYou could write about:\n• how examinations affect students\n• what the school does already\n• changes that would make a difference\nand any other ideas of your own.\n\n${MARKS_WRITING_NOTE}`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 6-7': `Question 9: a letter to a headteacher

Dear Mrs Okonjo,

I am writing to suggest some ways in which our school could help students to cope with the stress of examinations. As a Year 11 student, I have seen how worried many of my friends are about their GCSEs, and I believe there are simple changes that would make a real difference.

Firstly, examinations affect students in many ways. Some of my friends have told me that they cannot sleep properly in the weeks before their mocks. Others stop doing the things they enjoy, such as sport or music, because they feel guilty if they are not revising. This makes them more stressed, not less.

I know that the school already does a lot to help. The revision sessions after school are very useful, and the assembly about study skills last term gave us good advice. However, I think more could be done.

My first suggestion is to hold workshops on managing stress, where students could learn breathing techniques and ways to plan their revision so that it does not feel overwhelming. My second suggestion is to make sure that homework deadlines in different subjects do not all fall in the same week before examinations. Finally, I think it would help to have a quiet room open at lunchtime where students could revise or simply take a break.

These changes would not cost much, but they would show students that the school cares about their wellbeing as well as their results. Happier students are also likely to perform better.

Thank you for taking the time to read my letter. I would be happy to discuss these ideas with you or with the student council.

Yours sincerely,

Sam Patel`,
              'Grade 8-9': `Question 8: a speech for a debate, against the statement

Good afternoon, everyone. I would like to begin with a question. How many of you can remember a single question from the last examination you sat? Nobody? Neither can I. And yet that examination produced a number that will follow you for years.

I am here to argue against the motion that examinations are the fairest way to judge what students have learned. I do not say they are useless. I say they are narrow, and that we have mistaken narrowness for fairness.

The case for examinations sounds convincing. Everyone sits the same paper, at the same time, in the same silent hall. Nobody can copy, nobody can be helped by a parent, and the marker never knows your name. That is equality of a kind. But it is the equality of a race in which everyone runs the same distance, regardless of whether some runners have been training for months and others have twisted an ankle on the way to the start.

Consider what a two-hour paper actually measures. It measures what you can recall, at speed, under pressure, on one particular morning. It does not measure whether you can work in a team, carry out an experiment over weeks, revise a piece of writing until it sings, or think creatively about a problem that has no single answer. These are exactly the skills that employers and universities tell us they value most.

Then there is the pressure. We all know students who understand their subjects deeply but freeze in the exam hall, their minds wiped blank by nerves. Are we really saying that they have learned less than the classmate who happens to stay calm? An examination that rewards calmness as much as knowledge is not measuring learning at all.

There are better ways, and they are not new. Coursework allows students to show what they can do over time. Practical assessments test skills in action. Portfolios, presentations and projects reveal understanding that a timed paper never could. A fair system would combine these methods, so that no student's future depends on one bad morning.

My opponents will say that coursework can be copied and that teachers might be biased. Those are real risks, but they are risks we can manage with moderation and careful checks. They are not reasons to rely on a single method that we know to be incomplete.

So I ask you to vote against the motion. Examinations have their place, but fairness means giving every student more than one chance to show what they know. Thank you.`,
            },
            markScheme: [
              "Question 8 (a speech for a debate): a clear position for or against the statement, sustained through the speech; spoken features such as direct address, questions to the audience and a strong close; reasons and examples about what examinations measure and what they miss; an answer to the other side's strongest points.",
              'Question 9 (a letter to a headteacher): a suitable greeting and sign-off and a polite, formal register; a clear account of how examinations affect students; practical, developed suggestions; an acknowledgement of what the school already does.',
              ...MARKS_WRITING,
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 04: Technology
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p2-04',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-fiction and Transactional Writing',
    subtitle: 'English Language 1EN0/02',
    code: '1EN0/02',
    totalTimeMinutes: 125,
    totalMarks: 96,
    sections: [
      {
        id: 'edexcel-p2-04-reading',
        title: 'Section A: Reading',
        description: `${SECTION_A_ADVICE}\n\nText 1: ${E04_TEXT_1_REF}\nText 2: ${E04_TEXT_2_REF}\n\nGlossary for Text 1: set type: arranged the letters to be printed; compositor: a worker who sets type; apprenticeship: years of training in a trade while working at it. Glossary for Text 2: radiologist: a doctor who reads X-rays and scans; utopians: people who believe a perfect future is coming.`,
        totalMarks: 56,
        suggestedTimeMinutes: 80,
        questions: [
          {
            id: 'edexcel-p2-04-q1',
            questionNumber: 1,
            questionText:
              "Look at the first paragraph of Text 1.\n\nIdentify two details about the writer's father's working life.",
            marks: 2,
            suggestedTimeMinutes: 2,
            questionType: 'retrieval',
            extract: E04_BOTH,
            extractSource: E04_BOTH_REF,
            modelAnswers: {
              'Grade 6-7':
                '1. He worked six nights a week.\n2. He came home at dawn smelling of ink and hot lead.',
            },
            markScheme: [
              '1 mark for each correct point, up to 2.',
              'Accept any two of: he set type; he worked six nights a week; from 1962 until 1986; at the printing works behind the market; he built the newspaper out of metal; he came home at dawn; he smelled of ink and hot lead; his fingernails were black; he slept until lunchtime.',
              "A word, a short phrase or the student's own words is enough.",
            ],
          },
          {
            id: 'edexcel-p2-04-q2',
            questionNumber: 2,
            questionText:
              'Read the second paragraph of Text 1, beginning "I visited the works once".\n\nGive two details that show what the printing works was like.\n\nYou may answer in your own words or with quotations.',
            marks: 2,
            suggestedTimeMinutes: 2,
            questionType: 'retrieval',
            extract: `Text 1:\n${E04_TEXT_1}`,
            extractSource: E04_TEXT_1_REF,
            modelAnswers: {
              'Grade 6-7':
                '1. It was "the loudest place I had ever been".\n2. The men "worked in their shirtsleeves".',
            },
            markScheme: [
              '1 mark for each correct point, up to 2. The two points must be different.',
              'Accept: it was the loudest place the writer had been; the machines clattered and hissed like a railway station; the men worked in their shirtsleeves; they shouted to each other over the noise; there was a great iron keyboard that cast lines of metal; the metal was still warm when it dropped into the tray.',
              "Quotations and the student's own words both count.",
            ],
          },
          {
            id: 'edexcel-p2-04-q3',
            questionNumber: 3,
            questionText:
              "Analyse how the writer of Text 1 uses language and structure to hold the reader's interest.\n\nRefer closely to the text to support your views.",
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'analysis',
            extract: `Text 1:\n${E04_TEXT_1}`,
            extractSource: E04_TEXT_1_REF,
            modelAnswers: {
              'Grade 6-7': `The writer makes the text interesting by showing how proud the father was of his job and how sad it was when computers took it away.

In the first paragraph, the writer uses sensory language. The father came home "smelling of ink and hot lead", which helps the reader imagine the job. The verb in "built the next morning's newspaper out of metal" makes his work sound skilful and important, as if he were a builder.

In the second paragraph, the simile "like a railway station" shows how noisy the works was. The writer remembers being given their "own name, cast in lead", and still keeps it, which shows how much the memory means.

The third paragraph shows the father's pride. The sentence "The men called themselves craftsmen, and they were." is short and certain, so we believe it.

The structure changes at the start of the fourth paragraph with "Then", when "the computers arrived". The writer explains that a computer operator could do in "an afternoon" what took a whole shift. The men were given "a sum of money and a handshake", which sounds as if they were not valued.

At the end, the writer describes how the father "stopped talking about work". This shows his sadness without saying it directly. The last sentence wishes that somebody had asked what a man like the father "was for", which makes the reader think about people who lose their jobs.`,
              'Grade 8-9': `The writer engages the reader by telling the story of one man's working life, so that a large historical change, the coming of computers, is felt as a private loss.

The opening sentence is short and plain, "My father set type for a living.", and it establishes the father's identity through his work, which is exactly what the text will show him losing. The first paragraph is rich in sensory detail: he came home "smelling of ink and hot lead", with black under his fingernails "that no amount of scrubbing could shift". The phrase that he "built the next morning's newspaper out of metal", which is literally how hot-metal type was set, presents the job as a kind of making, and the image of a family who "tiptoed around him" shows the respect his work commanded at home.

The second paragraph is seen through the eyes of a child of eight. The simile that the machines "clattered and hissed like a railway station", with its noisy verbs, makes the works vivid and exciting, and the comparison that the father could read type backwards "as easily as I could read a comic" combines admiration with a child's frame of reference. The paragraph ends in the present tense, "I have it on my desk as I write.", a small structural shift that tells us the memory is still treasured.

The third paragraph is short and proud, and its final sentence, "The men called themselves craftsmen, and they were.", affirms their skill with simple certainty. This makes the turn that follows more painful. The fourth paragraph begins with "Then", signalling the change, and the contrast between "an afternoon" and "my father's whole shift" shows how quickly the old skill lost its value. The writer is fair, admitting that the management were "in a sense" right, but the phrase "a sum of money and a handshake" sounds dismissive, as if years of skill were paid off and forgotten.

The fifth paragraph moves from the trade to the man. The short sentence "My father was fifty-one." needs no comment, and the detail of his silence at "the dinner table" shows a grief he never put into words. The writer's interpretation, that the pages "no longer had him in them", is the emotional climax. The final paragraph widens the story into a question for society, built around the haunting phrase "what a man like my father was for". The structure therefore moves from pride, to change, to loss, to reflection, and leaves the reader thinking.`,
            },
            markScheme: [
              'Credit analysis of both language and structure, with references from across Text 1, each linked to its effect on the reader.',
              'Language could include: the plain opening sentence that defines the father by his work; sensory details of ink, hot lead and blackened fingernails; the image, literally true of hot-metal printing, of building a newspaper out of metal; the railway-station simile and the verbs "clattered and hissed"; the dismissive phrase "a sum of money and a handshake"; the closing wish that somebody had asked what a man like the father was for.',
              'Structure could include: the movement from pride, to change, to loss, to reflection; the child\'s point of view in the visit to the works; the shift into the present tense when the writer says the name in lead is still kept; the turn signalled by "Then"; the short sentence giving the father\'s age; the final paragraph, which widens a family story into a question for society.',
              ...MARKS_Q3,
            ],
          },
          {
            id: 'edexcel-p2-04-q4',
            questionNumber: 4,
            questionText:
              "Look at the first paragraph of Text 2.\n\nIdentify one of the feelings with which audiences meet the writer's message.",
            marks: 1,
            suggestedTimeMinutes: 1,
            questionType: 'retrieval',
            extract: `Text 2:\n${E04_TEXT_2}`,
            extractSource: E04_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7': 'Relief that the robots are not yet at the gates.',
            },
            markScheme: [
              '1 mark for one correct point.',
              'Accept either: relief, that the robots are not yet at the gates; anxiety, that the gates may be closer than anyone thought.',
            ],
          },
          {
            id: 'edexcel-p2-04-q5',
            questionNumber: 5,
            questionText:
              'Look at the second paragraph of Text 2.\n\nIdentify one example the writer gives of a professional whose work is helped by AI.',
            marks: 1,
            suggestedTimeMinutes: 1,
            questionType: 'retrieval',
            extract: `Text 2:\n${E04_TEXT_2}`,
            extractSource: E04_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7': 'A radiologist, who can process three times as many scans.',
            },
            markScheme: [
              '1 mark for one correct point.',
              'Accept either: a radiologist, who can screen three times as many scans with greater accuracy; a lawyer, who can review documents in hours rather than weeks.',
            ],
          },
          {
            id: 'edexcel-p2-04-q6',
            questionNumber: 6,
            questionText:
              'In Text 2, the writer tries to show that artificial intelligence brings human costs as well as benefits.\n\nEvaluate how well the writer achieves this. Refer closely to the text to support your judgement.',
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'evaluation',
            extract: `Text 2:\n${E04_TEXT_2}`,
            extractSource: E04_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7': `I think the writer is quite successful in showing that AI has costs as well as benefits, because the article is balanced and uses clear examples.

The writer starts with a surprising statement: "Artificial intelligence will not take your job." This grabs our attention, and the next sentence adds a twist, which makes the reader keep reading.

In the second paragraph, the writer shows the benefits of AI with examples. A radiologist can "process three times as many scans", and a lawyer can finish in hours "what previously took weeks". These examples make the benefits clear and believable.

The third paragraph shows the costs. The writer asks rhetorical questions, such as "where do the fifteen go?", which make the reader think about the people who lose their jobs. The repetition of "We cannot" at the end makes the message strong and memorable.

However, the writer does not give any examples of real people who have been affected, so the costs feel less real than they could. Overall, though, the writer achieves the aim of showing both sides.`,
              'Grade 8-9': `The writer is largely successful, because the article is built as a careful turn from reassurance to warning, so that the reader accepts the benefits before being made to face the costs.

The opening is an effective hook. The paradox "Artificial intelligence will not take your job. But someone who knows how to use artificial intelligence will." is both reassuring and unsettling, and it sets up the balance of the whole piece. The image of robots "not yet at the gates" and of gates that "may be closer than anyone thought" turns the future into a siege, a vivid way of capturing the audience's "mixture of relief and anxiety".

The second paragraph establishes credibility. By dismissing both "the utopians" and "the doomsayers", the writer appears reasonable, and the metaphor of a "constellation of capabilities" suggests something vast and complex rather than a single threat. The examples of the radiologist and the lawyer are concrete and impressive, and the short final sentences, "These professionals have not been replaced. They have been amplified.", seem to settle the argument in favour of the technology.

This is what makes the third paragraph so powerful. The writer takes the idea of "amplification" and turns it against itself: "If one radiologist can now do the work of three, what happens to the other two?" The rhetorical questions use the writer's own examples, so the reader cannot dismiss them. The parallel sentences "We cannot celebrate the productivity while ignoring the displacement. We cannot marvel at the technology while forgetting the people it leaves behind." end the piece with moral force.

However, the success is limited in one way. The human costs appear only as numbers, "the other two" and "the fifteen", and we never meet a person who has lost work. The argument therefore persuades the head more than the heart. Nonetheless, as a balanced warning, the text achieves its aim clearly and memorably.`,
            },
            markScheme: [
              'A clear judgement of how successfully the writer shows both the benefits and the human costs of AI, kept up through the answer and supported by detailed reference to Text 2.',
              'Points that could be evaluated: the paradox of the opening and the image of the gates; the reasonable tone that dismisses both utopians and doomsayers; the examples of the radiologist and the lawyer, which seem to settle the case for AI; the turn on amplification and the rhetorical questions built from the same examples; the parallel sentences that end the piece.',
              'A balanced view is creditable, for example that the costs appear only as numbers and no affected person is described.',
              ...MARKS_Q6,
            ],
          },
          {
            id: 'edexcel-p2-04-q7a',
            questionNumber: 7,
            label: '7(a)',
            questionText:
              'Both texts describe new technology doing work that people used to do.\n\nWhat similarities are there between the effects of the technology in the two texts? Support your answer with evidence from both texts.',
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: E04_BOTH,
            extractSource: E04_BOTH_REF,
            modelAnswers: {
              'Grade 6-7':
                'In both texts, new technology can do work much more quickly than people. In Text 1 a computer operator could do "in an afternoon" what took the father a whole shift, and in Text 2 a lawyer using AI can do "in hours" work that took weeks. In both texts, people lose their jobs because of this: most of the printers "never worked in print again", and Text 2 asks "where do the fifteen go?" Both writers also admit that the technology has benefits, such as a paper that "was cheaper to produce" and "efficiency gains" that "are real".',
              'Grade 8-9':
                'In both texts the new technology does the work much faster. In Text 1 a computer operator could set "in an afternoon what had taken my father\'s whole shift", and in Text 2 a lawyer can complete "in hours what previously took weeks". In both, fewer workers are needed as a result: the compositors were "offered a sum of money and a handshake", and in Text 2 "a legal team of twenty can be reduced to five". Both writers accept that the change brings real gains, Text 1 admitting that the paper "was cheaper to produce and quicker to change" and Text 2 that "The efficiency gains are real". Finally, both are troubled by the people left behind: most of the printers "never worked in print again", and Text 2 warns against "forgetting the people it leaves behind".',
            },
            markScheme: [
              'Similarities could include: the technology does the work far faster; fewer workers are needed; both writers admit the change brings real gains; both are troubled by the people who are left without work.',
              ...MARKS_Q7A,
            ],
          },
          {
            id: 'edexcel-p2-04-q7b',
            questionNumber: 7,
            label: '7(b)',
            questionText:
              'Compare the ideas and perspectives of the two writers about the effects of new technology on workers, and the methods each uses to convey them.\n\nRefer closely to both texts in your answer.',
            marks: 14,
            suggestedTimeMinutes: 18,
            questionType: 'comparison',
            extract: E04_BOTH,
            extractSource: E04_BOTH_REF,
            modelAnswers: {
              'Grade 6-7': `Both writers write about technology replacing people's work, but they have different perspectives. The writer of Text 1 is sad and personal, because the text is about the writer's own father, who lost the job he was proud of. The writer of Text 2 is more balanced and looks at the future, explaining that AI can help professionals but also put people out of work.

The writer of Text 1 shows the father's feelings through small details, such as how "he stopped talking about work at the dinner table". This shows his sadness. The writer of Text 2 uses rhetorical questions, such as "what happens to the other two?", to make readers think about the people affected.

Both writers accept that technology brings benefits. The writer of Text 1 says "Nobody misses hot lead", and the writer of Text 2 says that the professionals using AI have been "amplified". However, both are worried about the workers who are left behind.

The structures are different. Text 1 is a story that goes from the father's pride to his loss. Text 2 starts with the benefits of AI and then turns to the costs. Overall, Text 1 makes the reader feel sympathy, while Text 2 makes the reader think.`,
              'Grade 8-9': `Both writers accept that new technology cannot be stopped and that it brings real benefits, but the writer of Text 1 looks back on its cost to one man, while the writer of Text 2 looks ahead to its cost to many.

The perspective of Text 1 is that of a grieving child. The writer admires the father's skill, "The men called themselves craftsmen, and they were.", and presents the change as a loss of identity as much as income: the father "no longer looked at the newspaper", and the pages "no longer had him in them". The writer of Text 2 speaks as an expert who addresses "audiences across the country", and the people affected are not named individuals but professionals in general, "a radiologist" and "a legal team".

Both writers are balanced. Text 1 admits that "Nobody misses hot lead" and that the management were "in a sense" right, while Text 2 insists that "The efficiency gains are real". But the balance leads them to different conclusions. Text 1 ends with a regret about the past, that nobody asked "what a man like my father was for", whereas the last paragraph of Text 2 makes a demand for the future, that "any honest conversation about AI must reckon with both".

Their methods differ accordingly. Text 1 is a memoir in which sensory details, such as "ink and hot lead" and the name cast in metal, make the craft physical and precious, and it uses understatement, "he never complained, not once", to show grief. Text 2 is a short argument that uses paradox, examples and rhetorical questions, "If a legal team of twenty can be reduced to five, where do the fifteen go?", and closes with parallel sentences beginning "We cannot".

In a sense, Text 1 is the human story that Text 2 lacks: it shows what it feels like to be one of "the fifteen". Read together, the texts suggest that the same pattern of progress and displacement repeats with each new technology.`,
            },
            markScheme: [
              'Comparisons could include: both writers accept that the technology brings real benefits and cannot be undone, but Text 1 looks back on its cost to one man and Text 2 looks ahead to its cost to many; Text 1 presents the loss as a loss of pride and identity, Text 2 as a question of numbers and fairness; Text 1 ends with regret about the past, Text 2 with a demand for honesty about the future; Text 1 uses sensory detail and understatement, Text 2 paradox, examples, rhetorical questions and parallel sentences.',
              ...MARKS_Q7B,
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-04-writing',
        title: 'Section B: Transactional Writing',
        description: SECTION_B_ADVICE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p2-04-q8-9',
            questionNumber: 8,
            label: 'Q8 or Q9',
            questionText: `Answer ONE question: either Question 8 or Question 9.\n\nQuestion 8\n\nWrite an article for a news website for teenagers in which you explain how technology is likely to change the world of work, and what young people can do to prepare.\n\nYou could write about:\n• jobs that technology may change or replace\n• new kinds of work that may appear\n• skills that will still matter\nand any other ideas of your own.\n\nOR\n\nQuestion 9\n\nWrite a speech for a careers event at your school in which you persuade students that it is worth learning a practical skill or trade.\n\nYou could write about:\n• the satisfaction of making or mending things\n• the jobs and opportunities a trade can offer\n• why practical skills will still be needed\nand any other ideas of your own.\n\n${MARKS_WRITING_NOTE}`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 6-7': `Question 8: an article for a news website

The Future of Work: Are You Ready?

Technology is changing the way we work faster than ever before. Many of the jobs our parents do may not exist by the time we leave school, and new jobs that nobody has imagined yet will appear. So how can young people prepare?

Firstly, it is important to understand which jobs are likely to change. Machines and artificial intelligence are already doing tasks such as checking documents, answering simple customer questions and sorting information. Jobs that involve repeating the same task again and again are the most likely to be replaced.

However, technology also creates new jobs. Twenty years ago, hardly anybody worked as an app designer or a social media manager. In the future, there may be jobs looking after robots, protecting computer systems from hackers or helping people to use new technology safely. These jobs will need people who are confident with computers.

Despite all these changes, some skills will always matter. Employers will still want people who can communicate clearly, work well in a team and solve problems creatively. Machines are good at following instructions, but they are not as good as humans at understanding other people's feelings or coming up with new ideas.

So what can young people do now? We can make the most of computing lessons at school and learn to use technology well. We can also build our people skills by joining clubs, volunteering and taking part in group projects. Most importantly, we should be ready to keep learning throughout our lives, because the world of work will keep changing.

The future may seem uncertain, but it is also exciting. If we prepare now, we can make sure that technology works for us, not against us.`,
              'Grade 8-9': `Question 9: a speech for a careers event

Good morning, everyone. Before I start, I want you to look at your hands. Really look at them. Those two hands could rewire a house, build a staircase, fix a car engine or bake bread that people queue round the block for. Today I want to persuade you that learning to use them properly might be the smartest decision you ever make.

We are often told that the future belongs to people who sit at screens. Computers, we hear, will do everything. And it is true that machines are changing work faster than ever. My grandfather was a printer, and when computers arrived in the 1980s, his skill disappeared almost overnight. So you might think that a practical trade is the last thing anyone should learn.

But look more closely. Artificial intelligence can write an essay, sort a spreadsheet and answer a customer's email. What it cannot do is crawl under your kitchen sink at nine o'clock at night and stop water pouring through the ceiling. It cannot fit a boiler, lay a garden path or calm a frightened patient. The jobs that need a skilled pair of hands and a quick-thinking brain in the same room are exactly the jobs that machines find hardest to replace.

Then there are the opportunities. Right now, this country does not have enough electricians, plumbers, builders or engineers. That shortage means good wages, steady work and, for many, the chance to run their own business. An apprenticeship lets you earn while you learn, with no student debt hanging over you for decades. Many of the most successful people I know started with a toolbox, not a degree.

And there is something money cannot buy: satisfaction. There is a particular pride in standing back at the end of the day and seeing something you have made or mended with your own hands. A wall that is straight. A bike that runs smoothly. A family that is warm again because you fixed their heating. You will never get that feeling from refreshing an inbox.

I am not saying that everybody should abandon university. I am saying that a trade is not a second choice. It is a first-class choice, and for many of you it could be the right one.

So when you walk around the stands today, stop at the ones for apprenticeships and colleges. Ask questions. Pick up the tools. Your hands might be telling you something. Thank you.`,
            },
            markScheme: [
              'Question 8 (an article for teenagers): a headline and an engaging opening; a clear explanation of how work may change, organised in developed paragraphs; practical advice for young readers; a register that informs without lecturing.',
              'Question 9 (a speech at a careers event): an opening and a close that speak to the audience; persuasive features such as direct address, rhetorical questions and anecdote; developed reasons, such as satisfaction, opportunities and skills machines cannot replace; a fair answer to the view that a trade is a second choice.',
              ...MARKS_WRITING,
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 05: Nature
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p2-05',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-fiction and Transactional Writing',
    subtitle: 'English Language 1EN0/02',
    code: '1EN0/02',
    totalTimeMinutes: 125,
    totalMarks: 96,
    sections: [
      {
        id: 'edexcel-p2-05-reading',
        title: 'Section A: Reading',
        description: `${SECTION_A_ADVICE}\n\nText 1: ${E05_TEXT_1_REF}\nText 2: ${E05_TEXT_2_REF}\n\nGlossary for Text 2: peregrine falcon: a bird of prey that dives at great speed; insomniacs: people who cannot sleep; pay-and-display: a car park where drivers buy a ticket to leave in their car.`,
        totalMarks: 56,
        suggestedTimeMinutes: 80,
        questions: [
          {
            id: 'edexcel-p2-05-q1',
            questionNumber: 1,
            questionText:
              'Look at the first paragraph of Text 1.\n\nIdentify two creatures that came into the garden when the writer was a child.',
            marks: 2,
            suggestedTimeMinutes: 2,
            questionType: 'retrieval',
            extract: E05_BOTH,
            extractSource: E05_BOTH_REF,
            modelAnswers: {
              'Grade 6-7': '1. Sparrows.\n2. A hedgehog.',
            },
            markScheme: [
              '1 mark for each correct point, up to 2.',
              'Accept any two of: sparrows; a thrush; snails; a hedgehog (Mr Prickles).',
              'Do not credit creatures from later paragraphs, such as moths or swallows.',
            ],
          },
          {
            id: 'edexcel-p2-05-q2',
            questionNumber: 2,
            questionText:
              'Read the third paragraph of Text 1, beginning "There was a farm at the end of our lane".\n\nGive two details about the swallows.\n\nYou may answer in your own words or with quotations.',
            marks: 2,
            suggestedTimeMinutes: 2,
            questionType: 'retrieval',
            extract: `Text 1:\n${E05_TEXT_1}`,
            extractSource: E05_TEXT_1_REF,
            modelAnswers: {
              'Grade 6-7':
                '1. They came back to the same barn every spring.\n2. The parents flew in and out "low and fast, with beaks full of flies".',
            },
            markScheme: [
              '1 mark for each correct point, up to 2. The two points must be different.',
              'Accept: they came back to the same barn every spring; the farmer left the top half of the door open for them from April until September; the parents flew in and out low and fast; they carried beaks full of flies; their nest was above the beam.',
              "Quotations and the student's own words both count.",
            ],
          },
          {
            id: 'edexcel-p2-05-q3',
            questionNumber: 3,
            questionText:
              "Analyse how the writer of Text 1 uses language and structure to hold the reader's interest.\n\nRefer closely to the text to support your views.",
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'analysis',
            extract: `Text 1:\n${E05_TEXT_1}`,
            extractSource: E05_TEXT_1_REF,
            modelAnswers: {
              'Grade 6-7': `The writer uses language and structure to show how much wildlife there used to be and how much has been lost.

In the first paragraph, the writer lists the creatures in the garden, such as "sparrows squabbling in the hedge". The alliteration makes the birds sound lively and noisy. The hedgehog is given a name, "Mr Prickles", which shows how fond the family was of him.

In the second paragraph, the writer shows how many insects there were. The moths came "in their dozens", and the windscreen was "so thick with squashed insects" that the father had to stop to clean it. The short sentence "Nobody thought this was remarkable." shows that this was normal at the time.

The third paragraph describes the swallows in the barn. The farmer left the door open "even in the rain", which shows that he cared about them.

The structure changes in the fourth paragraph, which is about the present. The writer has "not seen a hedgehog in the garden for six years", and "the swallows have not come back". This contrast with the earlier paragraphs makes the reader feel sad.

The ending is powerful. The writer says "The silence in my garden is not peace. It is absence." The short sentences make the ending memorable and show the writer's sadness about what has disappeared.`,
              'Grade 8-9': `The writer engages the reader by recreating a garden and a countryside full of life, so that the emptiness revealed at the end is felt as a real loss.

The first paragraph is crowded with life. Its long second sentence lists one creature after another, "sparrows squabbling in the hedge, a thrush that cracked snails on the path", recreating the busy garden. The alliteration of "sparrows squabbling" and the sound of the hedgehog "snuffling" make the creatures noisy and present. The affectionate name "Mr Prickles" and the grandmother's belief that he was the same hedgehog "every night for eleven years" add gentle humour, while the adult's comment, "which I now suspect was not true", introduces the voice of hindsight that will matter later.

The second paragraph makes abundance its main effect. The moths come "in their dozens", "pale and powdery", and the windscreen is "so thick with squashed insects" that the father "could barely see the road". These details are deliberately unglamorous, which makes them convincing, and the two short sentences that end the paragraph, "Nobody thought this was remarkable. It was simply what happened in summer.", tell us that this richness was ordinary, which makes its later absence more shocking.

The third paragraph slows down to focus on one place and one person. The farmer "left the top half of the door open" for the swallows "even in the rain", a small act of care, and the image of the child on "an upturned bucket" watching the parents fly "low and fast, with beaks full of flies" is quiet and intimate. The farmer's look, as though the child had asked "why he bothered to breathe", suggests that caring for wildlife was once as natural as breathing.

The fourth paragraph is the turning point. It moves into the present and deliberately revisits each earlier image: the hedgehog, the windscreen and the barn. Each is now an absence, and the plain sentences, "I have not seen a hedgehog in the garden for six years" and "the swallows have not come back", have the force of a list of losses.

The final paragraph steps back to reflect. The writer avoids sentimentality, "I do not want to pretend that the past was a paradise", which makes the conclusion more trustworthy, and the last two sentences, "The silence in my garden is not peace. It is absence.", correct a comforting word with a painful one. The circular structure, from a garden "never empty" to a garden of silence, leaves the reader with a strong sense of what has been lost.`,
            },
            markScheme: [
              'Credit analysis of both language and structure, with references from across Text 1, each linked to its effect on the reader.',
              'Language could include: the crowded lists of creatures and the alliteration of "sparrows squabbling"; the affectionate naming of the hedgehog; the unglamorous details of moths and squashed insects that make abundance convincing; the quiet image of the farmer leaving the door open for the swallows; the closing correction of "peace" by "absence".',
              'Structure could include: three paragraphs of past abundance followed by a paragraph in the present that revisits each image as a loss; the short sentences that say such abundance was ordinary; the voice of hindsight introduced early; the circular movement from a garden "never empty" to a garden of silence.',
              ...MARKS_Q3,
            ],
          },
          {
            id: 'edexcel-p2-05-q4',
            questionNumber: 4,
            questionText:
              'Look at the first paragraph of Text 2.\n\nIdentify one thing that happened after the falcons nested on the car park.',
            marks: 1,
            suggestedTimeMinutes: 1,
            questionType: 'retrieval',
            extract: `Text 2:\n${E05_TEXT_2}`,
            extractSource: E05_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7': 'A webcam was installed.',
            },
            markScheme: [
              '1 mark for one correct point.',
              'Accept one of: a webcam was installed; a Twitter account was created; thousands of people followed every moment of the nesting season.',
            ],
          },
          {
            id: 'edexcel-p2-05-q5',
            questionNumber: 5,
            questionText:
              'Look at the third paragraph of Text 2.\n\nIdentify one piece of evidence the writer gives that the wider natural world is in decline.',
            marks: 1,
            suggestedTimeMinutes: 1,
            questionType: 'retrieval',
            extract: `Text 2:\n${E05_TEXT_2}`,
            extractSource: E05_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7':
                'In some nature reserves, flying insects have declined by more than 75% in under thirty years.',
            },
            markScheme: [
              '1 mark for one correct point.',
              'Accept one of: flying insects in some nature reserves have declined by more than 75% in under thirty years; one in six species in Britain is at risk of extinction; in the countryside the hedgehog has declined by 50% since the millennium.',
            ],
          },
          {
            id: 'edexcel-p2-05-q6',
            questionNumber: 6,
            questionText:
              "In Text 2, the writer tries to make the reader think again about the public's excitement over wildlife in towns and cities.\n\nEvaluate how well the writer achieves this. Refer closely to the text to support your judgement.",
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'evaluation',
            extract: `Text 2:\n${E05_TEXT_2}`,
            extractSource: E05_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7': `I think the writer is successful in making the reader think again, because the article starts by sharing the excitement about the falcons and then reveals a more worrying truth.

At the start, the writer describes how "thousands of people" watched the falcons online. The list of people, including "insomniacs watching at 3am", is funny and shows how popular the story was. This makes the reader feel included.

In the second paragraph, the writer explains why people loved the story. The contrast between "wild cliffs and open skies" and "a concrete ledge" shows how surprising it was. The moment when a chick "teetered on the edge" creates drama.

The third paragraph changes direction with "But I wonder". This makes the reader stop and think. The writer then gives statistics, such as flying insects declining "by more than 75%", which are shocking and show that the problem is serious. Mentioning the hedgehog, which was "once so common it was a nuisance", makes the decline feel real, because most people know what a hedgehog is.

However, the article ends suddenly and does not tell readers what they can do to help, so it is less successful as a call to action.`,
              'Grade 8-9': `The writer is successful, mainly because the article first shares the public's excitement and only then questions it, so the reader is drawn in before being challenged.

The opening paragraph tells the falcon story with energy. The list of watchers, "office workers, schoolchildren, pensioners, insomniacs watching at 3am", is comic and inclusive, suggesting that everyone was swept up, and the comparison with "reality television" hints, a little mockingly, at how the story became entertainment. The reader is likely to recognise the enthusiasm and perhaps to share it.

The second paragraph explains that enthusiasm with sympathy. The three sentences beginning "Perhaps it was" offer three reasons, and the contrasts are vivid: a creature "designed for wild cliffs and open skies" raising its young above "a pay-and-display car park". The image of a chick that "teetered on the edge" while "the entire internet held its breath" recreates the drama. By the end of the paragraph the story seems hopeful, a sign that "the natural world had not entirely given up on us". This is clever, because it is exactly the comforting view the writer is about to question.

The turn comes with "But I wonder", a tentative phrase that invites the reader to think rather than ordering them to agree. The phrase "a way of avoiding the harder truth" suggests that our delight may be a kind of denial, and the word "catastrophic" is deliberately strong. The statistics that follow, "75%", "One in six" and "50%", are delivered in short, flat sentences that contrast sharply with the lively storytelling earlier, so the decline hits harder.

The ending is especially effective: the hedgehog, "once so common it was a nuisance", is an animal readers know and love, so the last figure becomes personal. However, the article stops abruptly after the statistics and does not suggest what readers should do, which limits its power to change behaviour. Even so, it succeeds in its main aim of making the reader see the falcon story in a less comfortable light.`,
            },
            markScheme: [
              'A clear judgement of how successfully the writer makes the reader question the excitement over urban wildlife, kept up through the answer and supported by detailed reference to Text 2.',
              'Points that could be evaluated: the lively, inclusive list of watchers and the comparison with reality television; the three possible reasons introduced by "Perhaps it was"; the hopeful end of the second paragraph, which the writer then questions; the tentative turn on "But I wonder"; the short, flat statistics and the familiar hedgehog at the end.',
              'A balanced view is creditable, for example that the article stops abruptly and suggests no action.',
              ...MARKS_Q6,
            ],
          },
          {
            id: 'edexcel-p2-05-q7a',
            questionNumber: 7,
            label: '7(a)',
            questionText:
              'Both texts are about wild creatures that live close to people.\n\nWhat similarities are there between the ways the two writers describe them? Support your answer with evidence from both texts.',
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: E05_BOTH,
            extractSource: E05_BOTH_REF,
            modelAnswers: {
              'Grade 6-7':
                'Both texts describe birds nesting in buildings. In Text 1 the swallows nest in a barn, "above the beam", and in Text 2 the falcons nest on "the roof of a multi-storey car park". Both writers describe people enjoying watching them: the child would "sit on an upturned bucket and watch", and "thousands of people" followed the falcons. Both texts also say that hedgehogs were once common but are disappearing: the writer of Text 1 has not seen one "for six years", and in Text 2 hedgehogs have "declined by 50%".',
              'Grade 8-9':
                'Both writers describe birds raising their young in buildings made by people, the swallows nesting "above the beam" of a barn in Text 1 and the falcons raising young on "a concrete ledge" in Text 2. Both describe the pleasure of watching them, the child on "an upturned bucket" watching the parents fly in and out and the "thousands of people" who followed the falcons online. Both mention hedgehogs as once common and now declining: in Text 1 a hedgehog came "every night", but the writer has "not seen a hedgehog in the garden for six years", while in Text 2 the hedgehog was "once so common it was a nuisance" and has "declined by 50%". Both also notice the loss of insects, the clean windscreen of Text 1 matching the fall of "more than 75%" in flying insects in Text 2.',
            },
            markScheme: [
              'Similarities could include: birds raising their young in buildings made by people; the pleasure people take in watching them; hedgehogs once common and now declining; the loss of insects.',
              ...MARKS_Q7A,
            ],
          },
          {
            id: 'edexcel-p2-05-q7b',
            questionNumber: 7,
            label: '7(b)',
            questionText:
              'Compare the ideas and perspectives of the two writers about the loss of wildlife, and the methods each uses to convey them.\n\nRefer closely to both texts in your answer.',
            marks: 14,
            suggestedTimeMinutes: 18,
            questionType: 'comparison',
            extract: E05_BOTH,
            extractSource: E05_BOTH_REF,
            modelAnswers: {
              'Grade 6-7': `Both writers are worried about the loss of wildlife, but they show it in different ways. The writer of Text 1 uses personal memories of childhood, when the garden was full of creatures, and compares them with today, when the writer has "not seen a hedgehog in the garden for six years". The writer of Text 2 uses statistics, such as "One in six species in Britain is at risk of extinction", to show how widespread the decline is.

The writers have different attitudes to people. In Text 1, people seem to care about wildlife, like the farmer who left the door open for the swallows. In Text 2, the writer thinks people enjoy stories like the falcons but may be ignoring "the harder truth".

The tone of Text 1 is sad and thoughtful, especially at the end: "It is absence." The tone of Text 2 is more like a warning, using strong words such as "catastrophic".

Both texts mention hedgehogs. In Text 1 the family fed "Mr Prickles" every evening, and in Text 2 the hedgehog is described as "once so common it was a nuisance". This shows that both writers are using a familiar animal to make the reader care.`,
              'Grade 8-9': `Both writers believe that wildlife is disappearing more than most people realise, but the writer of Text 1 grieves for a loss witnessed over a lifetime, while the writer of Text 2 questions how the public thinks about nature now.

The writer of Text 1 presents the loss through personal memory. The garden of the 1960s was "never empty", and the evidence of decline is the writer's own experience: no hedgehog seen "for six years" and a windscreen that did not need cleaning "once". The writer of Text 2 uses evidence of a different kind, national statistics such as "One in six species in Britain is at risk of extinction". One makes the loss intimate; the other makes it measurable.

Their attitudes to people's feelings about nature differ. In Text 1, caring for wildlife was part of ordinary life, from the grandmother's saucer of "bread and milk" to the farmer who left the door open "even in the rain". In Text 2, the public's enthusiasm is real but suspect: the writer wonders whether it is "a way of avoiding the harder truth". Text 1 suggests that people have stopped noticing; Text 2 suggests that people notice the wrong things.

Both writers are careful not to sentimentalise. Text 1 admits "I do not want to pretend that the past was a paradise", and Text 2 explains with sympathy why the falcons "captured the public imagination". But their methods reflect their purposes. Text 1 is structured as a contrast between past and present, its fourth paragraph revisiting each happy image as an absence, and it ends on an emotional reversal: "The silence in my garden is not peace. It is absence." Text 2 is structured as a story followed by a challenge, turning on "But I wonder" and ending with blunt figures.

Strikingly, both use the hedgehog to make the loss familiar. For Text 1 it is a personal companion, "Mr Prickles", whose absence is felt in the garden; for Text 2 it is a statistic, "declined by 50% since the millennium". The same animal stands for the same loss, seen from the inside by one writer and from the outside by the other.`,
            },
            markScheme: [
              'Comparisons could include: both writers believe wildlife is vanishing more than people realise, but Text 1 grieves for a loss seen over a lifetime and Text 2 questions how the public thinks about nature now; Text 1 uses personal memory, Text 2 national statistics; Text 1 suggests people have stopped noticing, Text 2 that they notice the wrong things; Text 1 contrasts past and present and ends on an emotional reversal, Text 2 tells a story and then challenges it; both use the familiar hedgehog to make the loss felt.',
              ...MARKS_Q7B,
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-05-writing',
        title: 'Section B: Transactional Writing',
        description: SECTION_B_ADVICE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p2-05-q8-9',
            questionNumber: 8,
            label: 'Q8 or Q9',
            questionText: `Answer ONE question: either Question 8 or Question 9.\n\nQuestion 8\n\nWrite an article for a website for young people in which you persuade readers to do more to help wildlife where they live.\n\nYou could write about:\n• the wildlife that can be found in towns and gardens\n• why it is in trouble\n• simple things young people can do to help\nand any other ideas of your own.\n\nOR\n\nQuestion 9\n\nYour local council plans to build houses on a field where people walk and where wildlife lives.\n\nWrite a letter to the council in which you give your views on the plan.\n\nYou could write about:\n• what the field means to people and to wildlife\n• the need for new homes\n• other places where the houses could be built\nand any other ideas of your own.\n\n${MARKS_WRITING_NOTE}`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 6-7': `Question 8: an article for a website for young people

Wildlife Needs You: Five Ways to Help

You might think that wildlife only lives in forests and on mountains, but you would be wrong. Our towns and gardens are full of creatures, from hedgehogs and foxes to bees, butterflies and birds. Sadly, many of them are in serious trouble, and they need our help.

Why is wildlife in decline? One reason is that there are fewer places for animals to live. Gardens are being paved over for parking, hedges are being cut down and fields are being built on. Pesticides also kill the insects that birds and hedgehogs need to eat. Without action, some of the animals we take for granted could disappear.

The good news is that young people can make a real difference. Here are five simple ideas.

First, ask an adult to help you make a small hole in your garden fence. It sounds strange, but hedgehogs travel a long way each night, and a gap lets them move between gardens to find food.

Second, plant flowers that bees and butterflies love, such as lavender. Even a window box on a balcony can help.

Third, put out fresh water, especially in hot weather. Birds and insects need to drink, and a shallow dish is all it takes.

Fourth, leave a corner of your garden or school field to grow wild. Long grass and piles of leaves give insects a place to live.

Finally, tell other people. Share what you have learned with your family and friends, or start a wildlife club at school.

None of these ideas costs much money, and all of them are fun. If everyone did just one of them, our towns would be much better places for wildlife. So what are you waiting for? Wildlife needs you.`,
              'Grade 8-9': `Question 9: a letter to the council

Dear Councillor Shah,

I am writing to object to the council's plan to build forty houses on Meadow Field, the open land between Station Road and the brook. I understand that our town needs new homes, and I do not write lightly. But I believe this plan would destroy something that cannot be replaced, and that better options exist.

For many people, Meadow Field is the only green space within walking distance of their front door. On any morning you will find dog walkers, runners, parents pushing prams and pensioners on the bench by the hawthorn hedge. Our primary school uses it for nature lessons, and every summer the field hosts the town fun run. It is, in the truest sense, common ground.

It is also home to a remarkable range of wildlife. Skylarks nest in the long grass in spring, a family of foxes lives in the bank by the brook, and last year volunteers counted more than twenty species of butterfly. In a country where so much wildlife is in decline, a field like this is not a luxury. It is a refuge. Once it is covered in concrete and tarmac, those creatures will not simply move elsewhere; most of them will disappear.

I recognise the argument for development. Young families are struggling to find homes they can afford, and I want them to be able to live here. However, the town already has alternatives. The former bus depot on Mill Lane has been empty for six years, and the old carpet warehouse behind the high street is falling into ruin. Building on these sites would provide homes, tidy up eyesores and leave Meadow Field untouched. Surely it makes more sense to reuse land we have already spoilt than to spoil land we still have.

I would also ask the council to consider what kind of town it wants to be. Places where people can walk, breathe and see wildlife make residents healthier and happier. They attract families and businesses. Once lost, they are almost never recovered.

I urge you to withdraw the plan for Meadow Field and to look again at the brownfield sites. I would be happy to meet you, along with other residents, to discuss how we can provide new homes without losing the field that so many of us love.

Yours sincerely,

Alex Morgan`,
            },
            markScheme: [
              'Question 8 (an article for young people): a headline and an engaging opening; a clear, developed explanation of why wildlife is in trouble; practical suggestions organised so they are easy to follow; a lively, encouraging register that suits young readers.',
              'Question 9 (a letter to the council): a suitable greeting and sign-off and a formal register; a clear view on the plan, developed with reasons and examples; a fair response to the need for new homes; constructive alternatives and a firm conclusion.',
              ...MARKS_WRITING,
            ],
          },
        ],
      },
    ],
  },
]
