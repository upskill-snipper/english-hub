// @ts-nocheck
import type { MockExamPaper } from './types'

/**
 * Pearson Edexcel GCSE English Language Paper 2 (1EN0/02), mock papers 06 to
 * 10: Food and Health, Work, Childhood, Housing and Entertainment.
 *
 * RESTRUCTURED 24 October 2026 to Pearson's own paper, as it is set out in
 * src/data/mark-scheme-guides/edexcel-lang-paper2.ts and in the marker's
 * scheme edexcel-lang-paper2 (src/lib/marking/mark-schemes/edexcel-lang.ts),
 * and held there by src/__tests__/a-language-mock-is-the-boards-paper.test.ts.
 *
 * WHAT WAS WRONG. This file's own note said so: "NOT FIXED: the shape of
 * these papers (64 marks in 105 minutes, two writing tasks) is not
 * 1EN0/02's". Each set reading questions worth 4, 8, 8 and 16 and two writing
 * tasks worth 12 and 16. Pearson's paper is 96 marks in 2 hours 5 minutes. A
 * student practised an exam that does not exist, and an essay handed to the
 * marker found no question of its worth, so it was given general feedback
 * and no mark.
 *
 * Four of the five Source B passages were also older than anything Pearson
 * sets on this paper, which reads two 20th or 21st century non-fiction texts:
 * Engels, The Condition of the Working-Class in England (1845, papers 06 and
 * 07), The Bitter Cry of Outcast London (1883, paper 09) and Dickens's "The
 * Amusements of the People" (1850, paper 10).
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
 * for this bank. In paper 08, Text 1 is the old Source B, a memoir written
 * for the site, also kept (one dash aside, below). The other four Text 1s
 * are new. A real extract was wanted, but src/data/full-texts holds novels,
 * plays and poems and no non-fiction, so each is a memoir of the 1940s to
 * the 1960s written for this paper and labelled so. None names a real
 * writer.
 *
 * Every question, mark scheme and model answer is new and in our own words.
 * The mark schemes follow the guide's "what earns marks" and its levels.
 * Every reading question worth 6 or more has a Grade 6-7 and a Grade 8-9
 * answer, and the writing question has one answer to each task. Every
 * quotation in them is the text's own words.
 *
 * HISTORY. On 27 September 2026 four of the Source B passages were found not
 * to be by the writers named on them (an Engels passage none of whose
 * sentences is in the translation, an untraceable "Edwin Lankester", a
 * "Charles Booth" passage that could not be found and a Dickens article that
 * argued what the real one does not), and the Source A articles were credited
 * to real newspapers that never printed them. Each named Source B was then
 * replaced by a genuine passage cut by script from Project Gutenberg, and
 * each Source A was labelled as written for the site. Those genuine passages
 * served until this restructure removed them.
 *
 * CHECKED 31 October 2026 by a second reader: every question against the
 * guide, the scheme and the texts, and every figure in a Text 2 (written for
 * the site, so its claims are the site's) against its source. Fixed:
 *   - Real body credited with a finding it never published, 06 Text 2: the
 *     Food Foundation's Broken Plate reports give the poorest fifth 43%
 *     (2022), 50% (2023), 45% (2024) and 49% (2026, press release of 10 June),
 *     and the richest fifth 11% in 2023 and 2026; no edition found gives 47%.
 *     Now "One recent report" finds "half of their income" against "just
 *     11%", and the chasm is "widening", not widening "every year" (it
 *     narrowed in 2024). Questions 6 and 7(b) follow; the label's "not
 *     checked" note is gone.
 *   - Real bodies credited with findings they never published, 07 Text 2: the
 *     "Stanford University study tracking 16,000 workers" was Bloom and
 *     others' nine-month experiment at Ctrip (Quarterly Journal of Economics,
 *     2015): 249 call-centre staff in a firm of 16,000, before the pandemic,
 *     13% more productive at home, fewer sick days, happier; "McKinsey's 2024
 *     global survey" was its American Opportunity Survey of spring 2022 (87%
 *     of those offered flexible work take it). Both are now unnamed and
 *     described as they were; Questions 5, 6 and 7(b) follow, and the
 *     label's "not checked" note is gone.
 *   - Untrue claim, 09 Text 2: "the memorable phrase of a housing charity",
 *     "paying more to have less", is no charity's that a search finds; it is
 *     now the writer's own. Its £290,000 and £35,000 match the ONS medians
 *     for England in the year to September 2023, £290,000 and £35,100
 *     (Housing affordability in England and Wales: 2023), so they stay, and
 *     the label's "not checked" note is gone.
 *   - Untrue claim, 06 Text 1: all five ration books were "buff-coloured",
 *     the adults' colour (children's were blue or green); the colour is gone,
 *     and one Question 3 answer follows.
 *   - Style: spaced hyphens used as dashes in Texts 2 of 06 to 10 and in Text
 *     1 of 08 are now commas, colons, brackets or full stops, and the two
 *     answers that quoted a dash follow; "excellent." is now "excellent".
 *   - Board wording: Question 6 printed Pearson's own "Evaluate how
 *     successfully this is achieved", and Questions 2, 7(a) and 7(b) closely
 *     followed Pearson's sentences; all four are now in our words.
 *   - Model answers: 06 Question 3 called the toffee anecdote exaggeration
 *     (it is an anticlimax), and 06 Question 7(b) said Text 1 keeps its
 *     argument for its last sentence (it is the last paragraph); 09 Question
 *     3 said the parents lived in the house all their lives (forty-one
 *     years), and 09 Question 7(a) said both writers measure their lives
 *     against their parents'.
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

// ── Paper 06: Food and Health ─────────────────────────────────────────────────

const P06_TEXT_1 = `I was six when the war ended, and rationing went on for years afterwards, so that for most of my childhood every mouthful we ate was counted. Each of us had a ration book, soft with handling, and my mother kept all five in a biscuit tin on the dresser. Once a week she took them to the grocer, who cut out the coupons with a small pair of scissors and handed over our share: a little butter, a little sugar, a scrap of cheese and, if we were lucky, an egg each.

My mother was a magician with very little. She made pastry with lard and a pie with whatever the butcher had left, and she could stretch a single rabbit across three dinners. Nothing was thrown away. Stale bread became bread pudding; the water the cabbage was boiled in became the next day's soup; the fat from the Sunday joint was saved in a bowl and spread on toast all week, with a sprinkle of salt. My father grew potatoes, onions and beans in the back garden, where his roses had been, and we children were sent out to pick slugs off the lettuces for a penny a hundred.

What I remember most is the queueing. If word went round that the fishmonger had herrings, or that oranges had come in, women would stand outside the shop for an hour in the rain, and I would stand with them, holding my mother's basket. Nobody pushed in. It would not have occurred to anybody to try.

We were never truly hungry, but we were never full either, and I dreamed of sweets the way other children dream of ponies. When sweet rationing finally ended in 1953, I spent my entire savings, eleven pence, on toffees in a single afternoon, and was sick before teatime.

People talk about those years now as if we were all heroes, and we were not. There was grumbling, and there was a black market for those who could pay. But there was also something I have not felt since: the sense that we were all in it together. The doctor's family had the same ration as the dustman's. When there was not enough to go round, at least it went round fairly.`

const P06_TEXT_1_REF =
  'Specially written for this practice paper (not a published text): a memoir of food rationing in the years after the Second World War'

const P06_TEXT_2 = `There is a peculiar cruelty in the modern food industry, and it is this: the people who can least afford to eat well are precisely the people who most need to. Walk into any supermarket in a deprived area and count the metres of shelf space devoted to fresh vegetables. Then count the metres devoted to crisps, biscuits, and ready meals loaded with salt, sugar, and fat. The mathematics of malnutrition are not complicated.

One recent report found that the poorest fifth of British households would need to spend half of their income on food to meet government nutritional guidelines. The wealthiest fifth would need to spend just 11%. This is not a gap. It is a chasm, and it is widening.

I grew up on a council estate in Salford where the nearest greengrocer was a forty-minute bus ride away. My mother, who worked two cleaning jobs and raised three children alone, performed miracles with mince and tinned tomatoes, but she could not defeat geography and economics. We ate what was available, what was affordable, what could be prepared in the twenty minutes between her arriving home and our needing to be fed. Nutrition, in that context, was a luxury: something that belonged to people who had time and money and a car to drive to the farmers' market.

The conversation about healthy eating in this country is saturated with privilege. We are lectured about our five-a-day by people who have never had to choose between heating and eating. We are told to cook from scratch by people who have never worked a twelve-hour shift and come home to find the electricity meter has run out.`

const P06_TEXT_2_REF =
  'Specially written for The English Hub (not a published text): an opinion article, "Hunger in Plain Sight", under the invented byline Rachel Okonkwo'

const P06_BOTH = `Text 1:\n${P06_TEXT_1}\n\nText 2:\n${P06_TEXT_2}`
const P06_BOTH_REF = `Text 1: ${P06_TEXT_1_REF} | Text 2: ${P06_TEXT_2_REF}`

// ── Paper 07: Work ────────────────────────────────────────────────────────────

const P07_TEXT_1 = `I started work on a Monday in September 1966, three weeks after my sixteenth birthday. The insurance company's offices filled six floors of a grey building near the station, and the typing pool was on the fourth. On my first morning I was given a card with my name on it and shown the clock by the lift. You pushed your card into the slot, pulled the lever, and the machine stamped the time on it with a thump. Arrive at one minute past nine and the minute was printed in red.

The typing pool was a long room with forty desks in five straight rows, every one facing the same way, towards a raised desk at the front. That was where Miss Briggs sat. She had worked for the company since before the war, and she could tell, without looking up, whose typewriter had stopped. When it was quiet enough, she said, she could hear a girl thinking about her boyfriend.

The rules were written on a card pinned to the wall. No talking except on company business. No personal telephone calls. No eating at the desk. Two visits to the cloakroom in the morning and two in the afternoon. Every letter had to be typed without a single mistake, and if you made one you started the page again, because Miss Briggs would not allow rubbings out. By the end of my first week my wrists ached and I dreamed in the rhythm of the carriage return.

And yet I loved it, or I came to. At half past ten the tea trolley came round, and for fifteen minutes the room filled with chatter, like a classroom when the teacher has stepped out. I learned more in those tea breaks than in five years of school: how to do my hair, how to deal with a difficult boss, whose husband was a rogue and whose was a saint. When Jean on the next desk got married, we all chipped in for a canteen of cutlery, and Miss Briggs, to everyone's astonishment, cried at the wedding.

I work from my kitchen table now, on a laptop that would amaze the girl I was. Nobody times my visits to the bathroom. I would not go back to the clock and the card for anything. But some afternoons, when the house is very quiet, I miss the sound of forty typewriters and the rattle of the tea trolley more than I can say.`

const P07_TEXT_1_REF =
  'Specially written for this practice paper (not a published text): a memoir of a first job in an office typing pool in 1966'

const P07_TEXT_2 = `The office is dead. Or, more precisely, the office as we knew it, that fluorescent-lit cathedral of presenteeism where millions of workers sat in identical chairs performing identical rituals of busyness, has been fatally wounded, and no amount of corporate nostalgia will revive it.

Three years after the pandemic forced the greatest workplace experiment in history, the data is unequivocal. One study that followed call-centre staff for nine months found that those working from home were 13% more productive than their office-based counterparts, took fewer sick days, and reported higher job satisfaction. A large survey of American workers found that 87% of those offered flexible arrangements chose to take them. When given the choice, people vote with their feet, or, rather, with their slippers.

And yet a strange counter-revolution is underway. CEOs who spent 2020 praising their employees' resilience and adaptability are now issuing return-to-office mandates with the fervour of Victorian factory owners. The arguments are familiar: collaboration requires proximity; culture cannot be built through screens; junior employees need mentoring that only physical presence provides. These claims are not without merit, but they are selectively deployed. The CEO who insists that creativity requires a shared physical space rarely explains why he spent the previous decade closing regional offices and consolidating staff into soulless open-plan warehouses that destroyed the very intimacy he now claims to value.

The truth is that the fight over remote work is not really about productivity. It is about control, and the uncomfortable discovery, by a managerial class accustomed to measuring commitment by hours spent visibly at a desk, that their workers can function perfectly well without supervision.`

const P07_TEXT_2_REF =
  'Specially written for The English Hub (not a published text): an opinion article, "The Great Return", under the invented byline James Ashworth'

const P07_BOTH = `Text 1:\n${P07_TEXT_1}\n\nText 2:\n${P07_TEXT_2}`
const P07_BOTH_REF = `Text 1: ${P07_TEXT_1_REF} | Text 2: ${P07_TEXT_2_REF}`

// ── Paper 08: Childhood ───────────────────────────────────────────────────────

const P08_TEXT_1 = `My childhood was spent largely out of doors, in a freedom that would horrify the modern parent. From the age of seven or eight I roamed the fields and lanes around our village with a liberty that was, I now realise, the great unremarked privilege of rural poverty. My mother, occupied from dawn with the business of keeping house on almost nothing, had neither the time nor the inclination to supervise our play, and so we were turned out after breakfast and expected to return at dusk, and what we did in the intervening hours was our own affair.

We built dams in the stream and watched them fail. We climbed trees that were certainly too tall for us and fell out of them with a regularity that would alarm a modern risk assessor. We caught tadpoles and kept them in jars and were mystified when they grew legs. We fought, made up, fought again, and learned through painful experience that Tommy Griggs could not be trusted and that Sally Evans would always take your side if you gave her first go on the rope swing.

I do not wish to romanticise this. There was cruelty in it (the casual savagery of children left to their own devices), and there was danger, and there were long afternoons of aching, desperate boredom that no modern child-rearing manual would tolerate. But there was also something that I fear we have lost: the slow, unsupervised discovery of who you are when nobody is watching, when no adult is assessing your performance, when the world is yours to explore and the only deadline is the fading of the light.`

const P08_TEXT_1_REF =
  'Specially written for The English Hub (not a published text): a memoir of a country childhood'

const P08_TEXT_2 = `We have stolen childhood, and we have done it so gradually that we barely noticed. The theft was not dramatic, no single moment of loss, but an incremental erosion, carried out with the very best intentions by adults who believed they were giving children more when, in fact, they were giving them less.

Consider the modern child's schedule. She wakes at seven, is driven to school by eight, sits in lessons until three-thirty, attends an after-school club until five, is driven to swimming or piano or tutoring, eats a hurried dinner, completes homework, and is in bed by nine. Her weekends are similarly colonised: Saturday morning football, Saturday afternoon birthday party (attendance essentially compulsory), Sunday violin practice and spelling test revision. She is eight years old and she has the diary of a cabinet minister.

What is missing from this schedule is precisely the thing that makes childhood childhood: unstructured time. Time to be bored. Time to lie on the grass and watch clouds. Time to build a den from old blankets and negotiate the complex social politics of who gets to be inside and who must stand guard. Time to fail at something without an adult swooping in to help. These are not luxuries. They are the raw materials of psychological development, and we have systematically removed them in the name of enrichment.

The irony is savage. A generation of parents terrified that their children will fall behind has produced a generation of children who are anxious, overscheduled, and increasingly unable to entertain themselves without adult direction or a screen.`

const P08_TEXT_2_REF =
  'Specially written for The English Hub (not a published text): an essay, "Let Them Be Bored", under the invented byline Professor Helen Brookes'

const P08_BOTH = `Text 1:\n${P08_TEXT_1}\n\nText 2:\n${P08_TEXT_2}`
const P08_BOTH_REF = `Text 1: ${P08_TEXT_1_REF} | Text 2: ${P08_TEXT_2_REF}`

// ── Paper 09: Housing ─────────────────────────────────────────────────────────

const P09_TEXT_1 = `Until I was nine, the five of us lived in two rooms at the end of a terrace by the railway. The walls were so damp that the wallpaper peeled away in long curls, and in winter a black mould spread across the ceiling above the bed I shared with my two sisters. There was no bathroom. The toilet was in the yard, shared with the family next door, and on Friday nights my mother filled a tin bath in front of the fire, and we took turns in the same water, youngest first.

The letter from the council came in the spring of 1956. My mother read it standing up, then sat down and read it again, and then she did something I had never seen her do: she cried, and laughed, and could not stop doing either. We had been on the waiting list for six years.

The new estate was on the edge of town, where the fields began. Our house was at the end of a crescent of identical houses, all pale brick, all with green front doors, and all, to my eyes, as grand as palaces. There were three bedrooms, so that for the first time in my life I had a room of my own, even if it was the size of a cupboard. There was a bathroom upstairs, with a bath you could lie down in and hot water that came out of a tap. My father turned it on and off half a dozen times, as if he did not quite trust it. At the back there was a garden, long and narrow, where he grew more vegetables than we could ever eat.

People nowadays sometimes sneer at council estates, and I understand why: some were badly built, and some were badly kept. But I can only tell you what that house meant to us. The rent was collected by a man who came to the door every Monday with a little book, and it never frightened us, because we knew it was fair and we knew we could stay. My parents lived in that house for forty-one years. My mother planted a rose by the front door the week we arrived, and it was still flowering the year she died.

It is hard to explain to my grandchildren what a difference a dry room and a key of your own can make. It did not make us rich. It made us safe, and safety, I have come to believe, is the beginning of everything else.`

const P09_TEXT_1_REF =
  'Specially written for this practice paper (not a published text): a memoir of a family moving into a new council house in 1956'

const P09_TEXT_2 = `I am thirty-four years old. I have a degree, a full-time job, and a credit score that my bank describes as "excellent". I have never missed a rent payment in twelve years of renting. And I cannot buy a house. Not a nice house. Not a house in a fashionable area. Any house. Anywhere.

The numbers are brutal and they are simple. The average house price in England is now £290,000. The average salary is £35,000. To secure a mortgage, I would need a deposit of approximately £30,000, a sum that, after rent, bills, food, and the modest cost of occasionally leaving my flat, I am able to save at a rate of approximately £200 per month. At this rate, I will have my deposit in twelve and a half years, by which time house prices will have risen further, and I will be back where I started.

Meanwhile, I pay £1,100 per month in rent for a one-bedroom flat with damp in the bathroom and a landlord who takes six weeks to fix the boiler. This £1,100 buys me nothing: no equity, no security, no right to hang a picture without permission. It vanishes into someone else's mortgage like water into sand. I am paying more to have less.

My parents bought their first home in 1988 for £42,000 on a single teacher's salary. They did not have wealthy parents. They did not have extraordinary luck. They simply lived in a country where housing was a thing you could afford. That country no longer exists.`

const P09_TEXT_2_REF =
  'Specially written for The English Hub (not a published text): a first-person article, "Generation Rent", under the invented byline Sophie Brennan'

const P09_BOTH = `Text 1:\n${P09_TEXT_1}\n\nText 2:\n${P09_TEXT_2}`
const P09_BOTH_REF = `Text 1: ${P09_TEXT_1_REF} | Text 2: ${P09_TEXT_2_REF}`

// ── Paper 10: Entertainment ───────────────────────────────────────────────────

const P10_TEXT_1 = `Every Saturday morning in 1959, half the children in our town seemed to be queueing outside the Regal by nine o'clock. It cost sixpence to get in, and for sixpence you got two hours of films, a club badge and a noise so tremendous that the manager claimed it could be heard at the bus station. My mother gave me the money on condition that I took my little brother, who was six and frightened of the dark, and who spent the first ten minutes of every show gripping my arm.

The manager, Mr Fenwick, was a round man in a dinner jacket that had seen better days. Before the films began he would walk onto the stage, hold up his hands for silence, and wait. He never got it. Then he led us in the club song, which we sang at the tops of our voices, and he read out the names of anybody who had a birthday that week, so that they could go up on the stage and be cheered by three hundred strangers. When it was my turn, I was so overcome that I forgot my own name and had to be reminded by my brother.

The films themselves hardly mattered. There was always a cartoon, a cowboy picture and an episode of a serial, which ended every week with the hero tied to a railway line or dangling over a cliff, so that you had no choice but to come back. When the hero was in danger, we screamed warnings at the screen. When the villain appeared, we booed until the usherette shone her torch along the rows. When the film broke, as it often did, we stamped our feet in time until it started again.

It was not all innocent fun. The bigger boys flicked sweets at the backs of our heads, and once a fight broke out in the balcony and the lights went up for a quarter of an hour. But I learned a great deal in the dark of the Regal. I learned that you shared your sweets if you wanted to keep your friends, that you looked after the smaller ones, and that three hundred people laughing at the same moment is one of the best sounds in the world.

The Regal closed in 1971. It became a bingo hall, then a carpet warehouse, and now it is flats. Sometimes I walk past and imagine I can still hear us, stamping our feet in time, waiting for the film to start again.`

const P10_TEXT_1_REF =
  "Specially written for this practice paper (not a published text): a memoir of Saturday morning children's cinema in 1959"

const P10_TEXT_2 = `The British high street is dying, and its most visible symptom is the disappearance of places where people used to gather for no commercial reason at all. The youth club, the community hall, the public library with its Saturday morning reading group: these were never glamorous institutions, but they were the connective tissue of community life, and their loss has left wounds that no amount of online connectivity can heal.

I spent my teenage years in a youth club above a chip shop in Wolverhampton. It smelled of sweat and cheap deodorant and the rubber of table-tennis balls. The carpet was catastrophic. The pool table had a lean that favoured the left-hand cushion, and the jukebox played the same thirty songs in a rotation that everyone knew by heart. It was, by any objective measure, terrible. And it was the most important place in my life.

Because what that youth club provided was not entertainment in the modern, curated, algorithm-driven sense. It provided space: physical, social, psychological space in which teenagers could simply exist alongside each other, learning through proximity the complex, unwritten rules of human coexistence. You learned to wait your turn. You learned that the quiet kid in the corner could beat everyone at chess. You learned to negotiate, to compromise, to read a room. These were not skills that anyone taught us. They were skills we absorbed through the simple, irreplaceable act of being together in the same place.

Today's teenagers have infinite entertainment and almost no communal space. They can stream any film, play any game, access any information, but they cannot walk to a place where other teenagers are and simply be among them. We have given them everything except the thing they need most: each other.`

const P10_TEXT_2_REF =
  'Specially written for The English Hub (not a published text): an opinion article, "The Lost Spaces of Youth", under the invented byline Michael Donovan'

const P10_BOTH = `Text 1:\n${P10_TEXT_1}\n\nText 2:\n${P10_TEXT_2}`
const P10_BOTH_REF = `Text 1: ${P10_TEXT_1_REF} | Text 2: ${P10_TEXT_2_REF}`

// ─── Mock Exam Papers ──────────────────────────────────────────────────────────

export const edexcelP2B: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 06: Food and Health
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p2-06',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-fiction and Transactional Writing',
    subtitle: 'English Language 1EN0/02',
    code: '1EN0/02',
    totalTimeMinutes: 125,
    totalMarks: 96,
    sections: [
      {
        id: 'edexcel-p2-06-reading',
        title: 'Section A: Reading',
        description: `${SECTION_A_ADVICE}\n\nText 1: ${P06_TEXT_1_REF}\nText 2: ${P06_TEXT_2_REF}\n\nGlossary for Text 1: ration book: a booklet of coupons that limited how much of each food a person could buy; lard: white cooking fat made from pork; the Sunday joint: a large piece of meat roasted for Sunday dinner; black market: the illegal buying and selling of rationed goods.`,
        totalMarks: 56,
        suggestedTimeMinutes: 80,
        questions: [
          {
            id: 'edexcel-p2-06-q1',
            questionNumber: 1,
            questionText:
              'Look at the first paragraph of Text 1.\n\nIdentify two foods the family received from the grocer each week.',
            marks: 2,
            suggestedTimeMinutes: 2,
            questionType: 'retrieval',
            extract: P06_BOTH,
            extractSource: P06_BOTH_REF,
            modelAnswers: {
              'Grade 6-7': '1. A little butter.\n2. A scrap of cheese.',
            },
            markScheme: [
              '1 mark for each correct point, up to 2.',
              'Accept any two of: butter; sugar; cheese; an egg each (if they were lucky).',
              'Do not credit foods from later paragraphs.',
            ],
          },
          {
            id: 'edexcel-p2-06-q2',
            questionNumber: 2,
            questionText:
              'Read the second paragraph of Text 1, beginning "My mother was a magician with very little."\n\nGive two ways in which the writer\'s family made their food go further.\n\nYou may answer in your own words or with quotations.',
            marks: 2,
            suggestedTimeMinutes: 2,
            questionType: 'retrieval',
            extract: `Text 1:\n${P06_TEXT_1}`,
            extractSource: P06_TEXT_1_REF,
            modelAnswers: {
              'Grade 6-7':
                '1. The mother could "stretch a single rabbit across three dinners".\n2. "Stale bread became bread pudding".',
            },
            markScheme: [
              '1 mark for each correct point, up to 2. The two points must be different.',
              'Accept: pastry made with lard; a pie made with whatever the butcher had left; one rabbit stretched across three dinners; stale bread made into bread pudding; cabbage water used for soup; fat from the Sunday joint saved and spread on toast; vegetables grown in the back garden.',
              "Quotations and the student's own words both count.",
            ],
          },
          {
            id: 'edexcel-p2-06-q3',
            questionNumber: 3,
            questionText:
              "Analyse how the writer of Text 1 uses language and structure to hold the reader's interest.\n\nRefer closely to the text to support your views.",
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'analysis',
            extract: `Text 1:\n${P06_TEXT_1}`,
            extractSource: P06_TEXT_1_REF,
            modelAnswers: {
              'Grade 6-7': `The writer makes the memoir interesting by describing what it was like to grow up with rationing and showing how the family coped.

In the first paragraph, the writer says that "every mouthful we ate was counted", which shows how little food there was. The list of the family's weekly share, "a little butter, a little sugar, a scrap of cheese", uses repetition to show how small the amounts were.

In the second paragraph, the writer uses a metaphor: "My mother was a magician with very little." This shows how clever she was at making meals. The short sentence "Nothing was thrown away." is followed by examples, such as stale bread that "became bread pudding". This shows how the family wasted nothing.

The third paragraph describes the queues. Women would wait "for an hour in the rain", which shows how hard it was to get food. The short sentences "Nobody pushed in." and "It would not have occurred to anybody to try." show that people were fair to each other.

The writer also uses humour. The simile "I dreamed of sweets the way other children dream of ponies" is funny, and so is the story of spending all their savings on toffees.

At the end, the writer reflects on the past and says that "we were all in it together". The last sentence, "at least it went round fairly", sums up the writer's main idea that rationing was hard but fair.`,
              'Grade 8-9': `The writer interests the reader by recreating the small, careful economies of a rationed childhood and then, at the end, giving them a larger meaning: fairness.

The opening sentence sets out the scene and the stakes at once: "every mouthful we ate was counted". The verb "counted" captures the anxiety of scarcity. The ration books are described with precise, tactile detail, "soft with handling", which suggests how often they were used, and the grocer who "cut out the coupons with a small pair of scissors" makes the system feel small-scale and exact. The list of the family's share, "a little butter, a little sugar, a scrap of cheese", repeats "a little" to stress how meagre it was, and the afterthought "if we were lucky, an egg each" adds a touch of humour.

The second paragraph opens with a metaphor, "My mother was a magician with very little", and the rest of the paragraph proves it with examples of transformation. The short sentence "Nothing was thrown away." is followed by a long sentence divided by semicolons, in which stale bread "became bread pudding" and cabbage water "became the next day's soup"; the repeated verb "became" shows the mother's ingenuity. The detail that the father grew vegetables "where his roses had been" quietly shows beauty given up for need, and the children picking slugs "for a penny a hundred" is comic and vivid.

The third paragraph focuses on one memory, the queueing. The image of women standing "for an hour in the rain" shows patience, and the two short sentences, "Nobody pushed in. It would not have occurred to anybody to try.", establish the idea of fairness that the ending develops.

The fourth paragraph shifts to the child's longing. The simile "I dreamed of sweets the way other children dream of ponies" is funny and touching, and the anecdote of spending "eleven pence, on toffees in a single afternoon" ends the paragraph with a comic anticlimax: the writer "was sick before teatime".

The final paragraph changes tone to reflection. The writer refuses to romanticise the past, "as if we were all heroes, and we were not", and admits the "black market", which makes the conclusion more trustworthy. The contrast between "The doctor's family" and "the dustman's" sums up the point, and the final sentence, "When there was not enough to go round, at least it went round fairly.", repeats "go round" and "went round" to end on a balanced, memorable idea.`,
            },
            markScheme: [
              'Credit analysis of both language and structure, with references from across Text 1, each linked to its effect on the reader.',
              'Language could include: the verb "counted" in the opening sentence; the tactile description of the ration book; the repeated "a little" in the list of rations; the metaphor of the mother as a magician and the repeated verb "became"; the comic simile about sweets and ponies; the contrast between the doctor and the dustman.',
              'Structure could include: the movement from rations, to cooking, to queueing, to longing, to reflection; the short sentences that open or close paragraphs, such as "Nothing was thrown away."; the long sentence divided by semicolons; the change of tone in the last paragraph; the final balanced sentence that sums up the idea of fairness.',
              ...MARKS_Q3,
            ],
          },
          {
            id: 'edexcel-p2-06-q4',
            questionNumber: 4,
            questionText:
              'Look at the first paragraph of Text 2.\n\nIdentify one thing the writer says you would find in a supermarket in a deprived area.',
            marks: 1,
            suggestedTimeMinutes: 1,
            questionType: 'retrieval',
            extract: `Text 2:\n${P06_TEXT_2}`,
            extractSource: P06_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7': 'Shelves of ready meals loaded with salt, sugar and fat.',
            },
            markScheme: [
              '1 mark for one correct point.',
              'Accept one of: little shelf space for fresh vegetables; more shelf space for crisps, biscuits and ready meals; food loaded with salt, sugar and fat.',
            ],
          },
          {
            id: 'edexcel-p2-06-q5',
            questionNumber: 5,
            questionText:
              "Look at the third paragraph of Text 2.\n\nIdentify one difficulty the writer's mother faced in feeding her family.",
            marks: 1,
            suggestedTimeMinutes: 1,
            questionType: 'retrieval',
            extract: `Text 2:\n${P06_TEXT_2}`,
            extractSource: P06_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7': 'The nearest greengrocer was a forty-minute bus ride away.',
            },
            markScheme: [
              '1 mark for one correct point.',
              "Accept one of: the nearest greengrocer was a forty-minute bus ride away; she worked two cleaning jobs; she raised three children alone; she had only twenty minutes to prepare food; she had no time, money or car to reach a farmers' market.",
            ],
          },
          {
            id: 'edexcel-p2-06-q6',
            questionNumber: 6,
            questionText:
              'In Text 2, the writer sets out to persuade the reader that eating healthily is much harder for poorer families.\n\nEvaluate how well the writer achieves this. Refer closely to the text to support your judgement.',
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'evaluation',
            extract: `Text 2:\n${P06_TEXT_2}`,
            extractSource: P06_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7': `I think the writer is successful in persuading the reader that it is harder for poor families to eat healthily, because the article uses strong language, statistics and personal experience.

At the start, the writer says there is "a peculiar cruelty" in the food industry. This strong phrase grabs the reader's attention. The writer then tells the reader to "count the metres of shelf space" in a supermarket, which makes us imagine the problem for ourselves.

In the second paragraph, the writer uses statistics: the poorest families would need to spend "half of their income" on food, while the wealthiest would need "just 11%". The writer says "This is not a gap. It is a chasm", which makes the difference sound huge.

The most effective part is the third paragraph, where the writer describes growing up on a council estate. The writer's mother "worked two cleaning jobs" and "performed miracles with mince and tinned tomatoes". This makes the reader sympathise with her and shows that poor families try hard.

At the end, the writer criticises people who lecture others about their "five-a-day". This is effective, although it might annoy some readers. Also, the writer does not suggest any solutions, so the article is better at describing the problem than at solving it.`,
              'Grade 8-9': `The writer is largely successful, because the article combines a sharp opening argument, striking figures and a personal story, so that the reader understands the problem with both the head and the heart.

The opening sentence is built to provoke: there is "a peculiar cruelty" in the food industry, and the colon introduces the paradox that "the people who can least afford to eat well are precisely the people who most need to". The imperatives "Walk into any supermarket" and "Then count the metres" make the reader picture the evidence for themselves, and the list of "crisps, biscuits, and ready meals loaded with salt, sugar, and fat" is persuasive because it is so familiar. The ironic phrase "The mathematics of malnutrition are not complicated" makes the problem seem obvious.

The second paragraph supplies evidence. The comparison between "half of their income" and "just 11%" is clear and shocking, and the correction "This is not a gap. It is a chasm" turns the statistic into an image of something impossible to cross. A careful reader might want to know more about the report, which is never named, only called "One recent report", but the figures are presented with confidence.

The third paragraph is the most powerful. The writer's own childhood on "a council estate in Salford" gives the argument authority, and the portrait of a mother who "worked two cleaning jobs and raised three children alone" and "performed miracles with mince and tinned tomatoes" makes the reader sympathise without pity. The phrase "she could not defeat geography and economics" shows that the problem was never a lack of effort, and the list "what was available, what was affordable, what could be prepared in the twenty minutes" builds a sense of pressure.

The final paragraph turns the argument against the comfortable. The repeated structures "We are lectured" and "We are told to cook from scratch by people who have never" attack those who give advice without understanding, and the contrast "between heating and eating" is memorable.

However, the article offers no solutions, and its final paragraph risks alienating readers who are not poor. Even so, it achieves its main aim of showing that healthy eating is harder for the poor, and it does so vividly and convincingly.`,
            },
            markScheme: [
              'A clear judgement of how successfully the writer persuades, kept up through the answer and supported by detailed reference to Text 2.',
              "Points that could be evaluated: the provocative opening paradox and the imperatives that make the reader picture the supermarket; the comparison of half of their income with 11% and the image of a chasm; the writer's own childhood and the portrait of the mother; the list that builds a sense of pressure; the attack on those who lecture the poor.",
              'A balanced view is creditable, for example that the article suggests no solution, or that its ending may alienate some readers.',
              ...MARKS_Q6,
            ],
          },
          {
            id: 'edexcel-p2-06-q7a',
            questionNumber: 7,
            label: '7(a)',
            questionText:
              "Both texts describe families trying to eat well with very little.\n\nWhat similarities are there between the two families' experiences? Support your answer with evidence from both texts.",
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: P06_BOTH,
            extractSource: P06_BOTH_REF,
            modelAnswers: {
              'Grade 6-7':
                'Both texts describe mothers who were very good at making meals with little money or food. In Text 1 the mother was "a magician with very little", and in Text 2 she "performed miracles with mince and tinned tomatoes". Both families found it hard to get fresh food. In Text 1 people queued "for an hour in the rain" when oranges came in, and in Text 2 the greengrocer was "a forty-minute bus ride away". Both families also had to make do: in Text 1 "Nothing was thrown away", and in Text 2 the family "ate what was available".',
              'Grade 8-9':
                'In both texts a mother works wonders with very little: in Text 1 the mother is "a magician with very little", and in Text 2 the mother "performed miracles with mince and tinned tomatoes". Both families depend on cheap, filling food rather than fresh produce, from "lard" and "a single rabbit" stretched "across three dinners" to the mince and tinned tomatoes of Salford. In both, fresh food is hard to get: women queue "for an hour in the rain" for herrings or oranges in Text 1, and in Text 2 "the nearest greengrocer was a forty-minute bus ride away". Both children grew up eating whatever there was: the family in Text 1 were "never full", and the family in Text 2 "ate what was available, what was affordable". Finally, both writers link food with fairness, Text 1 remembering that "at least it went round fairly" and Text 2 arguing that the debate about healthy eating is "saturated with privilege".',
            },
            markScheme: [
              'Similarities could include: a mother who works wonders with very little; cheap, filling food rather than fresh produce; fresh food that is hard to get; children who ate whatever there was; a link between food and fairness.',
              ...MARKS_Q7A,
            ],
          },
          {
            id: 'edexcel-p2-06-q7b',
            questionNumber: 7,
            label: '7(b)',
            questionText:
              'Compare the ideas and perspectives of the two writers about food and fairness, and the methods each uses to convey them.\n\nRefer closely to both texts in your answer.',
            marks: 14,
            suggestedTimeMinutes: 18,
            questionType: 'comparison',
            extract: P06_BOTH,
            extractSource: P06_BOTH_REF,
            modelAnswers: {
              'Grade 6-7': `Both writers describe families who had little food, but they have different views about fairness. The writer of Text 1 thinks that rationing was fair, because everyone had the same amount: "The doctor's family had the same ration as the dustman's." The writer of Text 2 thinks the food system today is unfair, because the poorest people would have to spend "half of their income" to eat healthily.

The writers have different tones. Text 1 is nostalgic and gentle, and uses humour, such as the story of the writer being sick after eating too many toffees. Text 2 is angry, and the writer says the conversation about healthy eating is "saturated with privilege".

Both writers admire their mothers. In Text 1 the mother is "a magician with very little", and in Text 2 the mother "performed miracles". This shows that both writers think poor families work hard to eat well.

The writers use different methods. Text 1 tells a story with lots of details about food, such as "bread pudding" and "soup". Text 2 uses statistics and a personal story to argue that things must change. Overall, Text 1 shows that hardship can be shared fairly, while Text 2 shows that today the hardship falls on the poor.`,
              'Grade 8-9': `Both writers grew up with too little food and admire the mothers who coped, but they draw opposite conclusions: the writer of Text 1 remembers a shortage that was shared fairly, while the writer of Text 2 describes a plenty that is shared unfairly.

For the writer of Text 1, the defining feature of rationing was equality. Everyone had a ration book, and "The doctor's family had the same ration as the dustman's", so hardship created a "sense that we were all in it together". Even the queues showed it: "Nobody pushed in." For the writer of Text 2, the defining feature of today's food system is inequality. The shops are full, but the poorest would need to spend "half of their income on food" while the wealthiest would need "just 11%", a difference the writer calls "a chasm".

Their attitudes to those with more also differ. Text 1 presents a system that, whatever its hardships, people trusted because it treated everyone alike. Text 2 is angry with those in comfort who give advice: "We are lectured about our five-a-day by people who have never had to choose between heating and eating." The first writer looks back with gratitude; the second looks around with indignation.

Both writers are honest. Text 1 refuses to romanticise rationing, saying "as if we were all heroes, and we were not" and admitting there was "a black market for those who could pay". Text 2 refuses to blame the poor, insisting that the mother "could not defeat geography and economics" however hard she tried.

Their methods reflect their purposes. Text 1 is a memoir built from small, concrete details, such as the coupons cut out "with a small pair of scissors" and the fat "spread on toast all week", and it uses humour, as in the toffees eaten "in a single afternoon". It saves its argument for the last paragraph. Text 2 is an opinion piece that begins with its argument, supports it with statistics and a personal story, and ends with repeated attacks on "people who have never" known poverty. Read together, the texts suggest that the problem of food today is not scarcity but fairness.`,
            },
            markScheme: [
              'Comparisons could include: both writers grew up with too little and admire their mothers, but Text 1 remembers a shortage shared fairly and Text 2 describes plenty shared unfairly; Text 1 looks back with gratitude, Text 2 looks around with indignation; both are honest, Text 1 about the black market and Text 2 about the limits of effort; Text 1 is a memoir of concrete detail and humour that saves its point for the end, Text 2 an argument built on statistics, a personal story and repeated attacks.',
              ...MARKS_Q7B,
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-06-writing',
        title: 'Section B: Transactional Writing',
        description: SECTION_B_ADVICE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p2-06-q8-9',
            questionNumber: 8,
            label: 'Q8 or Q9',
            questionText: `Answer ONE question: either Question 8 or Question 9.\n\nQuestion 8\n\nWrite an article for your local newspaper in which you argue that every school should teach students how to cook healthy meals on a budget.\n\nYou could write about:\n• what young people know about cooking now\n• the benefits of learning to cook\n• how schools could teach it\nand any other ideas of your own.\n\nOR\n\nQuestion 9\n\n"Healthy food should cost less than junk food."\n\nWrite a letter to your Member of Parliament in which you give your views on this statement.\n\nYou could write about:\n• the cost of healthy and unhealthy food\n• who is most affected\n• what the government could do\nand any other ideas of your own.\n\n${MARKS_WRITING_NOTE}`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 6-7': `Question 8: an article for a local newspaper

Cooking Should Be on Every Timetable

How many teenagers do you know who can cook a proper meal? I am sixteen, and when I asked my friends, most of them said they could make toast, pasta and not much else. I believe this needs to change, and that every school should teach students how to cook healthy meals on a budget.

At the moment, many young people rely on ready meals and takeaways. These are quick and easy, but they are often full of salt, sugar and fat, and they are expensive if you buy them every day. Without cooking skills, young people will find it hard to eat well when they leave home.

Learning to cook has many benefits. Firstly, it is healthier. When you cook for yourself, you know exactly what goes into your food. Secondly, it saves money. A big pot of vegetable soup or a homemade curry costs much less per portion than a takeaway, and it can last for several days. Thirdly, cooking is a skill that brings people together. Making a meal for your family or friends is something everyone can enjoy.

Some people might say that schools are too busy with exams to teach cooking. However, cooking also teaches maths, science and planning. Working out the cost of a recipe, measuring ingredients and understanding nutrition are all useful skills.

Schools could teach cooking in simple ways. Every student could have at least one cooking lesson a week in Years 7 to 9, using cheap ingredients that are easy to find. Schools could also run after-school clubs and give students recipe cards to take home and try with their families.

In conclusion, teaching students to cook healthy meals on a budget would help them to stay healthy, save money and become more independent. It is time for cooking to be given the place it deserves on every school timetable.`,
              'Grade 8-9': `Question 9: a letter to a Member of Parliament

Dear Ms Adeyemi,

I am a Year 11 student at Westbrook Academy in your constituency, and I am writing to ask you to support measures that would make healthy food cheaper than junk food. At present the opposite is true, and it is the poorest families in our town who pay the price, in their purses and in their health.

Last month, for a school project, I compared the cost of two shopping baskets in the supermarket on the high street. The first held fresh vegetables, fruit, wholemeal bread and chicken for a week's family meals. The second held frozen pizzas, oven chips, crisps and fizzy drinks. The healthy basket cost almost twice as much. When a family is trying to feed three children on one income, that is not a choice; it is a calculation, and junk food wins.

The consequences are serious. Children who grow up on cheap, processed food are more likely to become overweight, to suffer from tooth decay and to develop illnesses such as diabetes later in life. Treating those illnesses costs the health service a great deal every year. In other words, cheap junk food is not really cheap at all. We simply pay for it later, and we all pay.

Some people argue that the government should not tell people what to eat, and I agree that nobody wants to be lectured. But making healthy food affordable is not about telling people what to do. It is about giving them a real choice. At the moment, many families do not have one.

There are practical steps the government could take. It could lower the price of fruit and vegetables by supporting farmers and local markets, and expand schemes that give vouchers for fresh food to families on low incomes. It could fund free healthy breakfasts in every school. It could also require supermarkets to place fresh produce, rather than sweets, at the checkout.

None of these ideas would solve the problem overnight, but together they would send a clear message: that eating well should be normal, not a luxury.

I would be grateful to know whether you support these ideas, and what you will do to make healthy food affordable for every family in our constituency. Thank you for taking the time to consider my letter.

Yours sincerely,

Priya Nair`,
            },
            markScheme: [
              'Question 8 (an article for a local newspaper): a headline and an engaging opening; a clear argument for teaching cooking, developed with reasons and examples; a response to objections such as the pressure of exams; practical suggestions and a conclusion.',
              'Question 9 (a letter to a Member of Parliament): a suitable greeting and sign-off and a formal, respectful register; a clear view on the statement, supported with evidence or examples; awareness of other views; specific suggestions for what the government could do.',
              ...MARKS_WRITING,
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 07: Work
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p2-07',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-fiction and Transactional Writing',
    subtitle: 'English Language 1EN0/02',
    code: '1EN0/02',
    totalTimeMinutes: 125,
    totalMarks: 96,
    sections: [
      {
        id: 'edexcel-p2-07-reading',
        title: 'Section A: Reading',
        description: `${SECTION_A_ADVICE}\n\nText 1: ${P07_TEXT_1_REF}\nText 2: ${P07_TEXT_2_REF}\n\nGlossary for Text 1: typing pool: a large office where typists typed letters for the whole company; carriage return: the lever on a typewriter that moved the paper on to the next line; canteen of cutlery: a boxed set of knives, forks and spoons. Glossary for Text 2: presenteeism: being at work for long hours to be seen there, whether or not it helps the work; mandates: orders.`,
        totalMarks: 56,
        suggestedTimeMinutes: 80,
        questions: [
          {
            id: 'edexcel-p2-07-q1',
            questionNumber: 1,
            questionText:
              'Look at the first paragraph of Text 1.\n\nIdentify two details about how the time the writer arrived at work was recorded.',
            marks: 2,
            suggestedTimeMinutes: 2,
            questionType: 'retrieval',
            extract: P07_BOTH,
            extractSource: P07_BOTH_REF,
            modelAnswers: {
              'Grade 6-7':
                '1. She pushed a card with her name on it into a clock and pulled the lever.\n2. If she was late, the minute was printed in red.',
            },
            markScheme: [
              '1 mark for each correct point, up to 2.',
              'Accept any two of: each worker had a card with their name on it; the clock was by the lift; the card was pushed into a slot; the worker pulled a lever; the machine stamped the time on the card; arriving even one minute late was printed in red.',
              "A word, a short phrase or the student's own words is enough.",
            ],
          },
          {
            id: 'edexcel-p2-07-q2',
            questionNumber: 2,
            questionText:
              'Read the third paragraph of Text 1, beginning "The rules were written on a card pinned to the wall."\n\nGive two of the rules the typists had to follow.\n\nYou may answer in your own words or with quotations.',
            marks: 2,
            suggestedTimeMinutes: 2,
            questionType: 'retrieval',
            extract: `Text 1:\n${P07_TEXT_1}`,
            extractSource: P07_TEXT_1_REF,
            modelAnswers: {
              'Grade 6-7':
                '1. "No personal telephone calls."\n2. Every letter had to be typed "without a single mistake".',
            },
            markScheme: [
              '1 mark for each correct point, up to 2. The two points must be different.',
              'Accept: no talking except on company business; no personal telephone calls; no eating at the desk; only two visits to the cloakroom in the morning and two in the afternoon; every letter typed without a single mistake; no rubbings out, so a mistake meant starting the page again.',
              "Quotations and the student's own words both count.",
            ],
          },
          {
            id: 'edexcel-p2-07-q3',
            questionNumber: 3,
            questionText:
              "Analyse how the writer of Text 1 uses language and structure to hold the reader's interest.\n\nRefer closely to the text to support your views.",
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'analysis',
            extract: `Text 1:\n${P07_TEXT_1}`,
            extractSource: P07_TEXT_1_REF,
            modelAnswers: {
              'Grade 6-7': `The writer makes the memoir interesting by describing a strict office and then showing that it was also a friendly place.

In the first paragraph, the writer describes the clock that recorded when workers arrived. The machine "stamped the time on it with a thump", which sounds harsh. If you were late, "the minute was printed in red", which shows how strict the company was.

In the second paragraph, the writer describes the office as "a long room with forty desks in five straight rows". This makes it sound like a classroom or an army. Miss Briggs is described in a funny way: she said she "could hear a girl thinking about her boyfriend".

The third paragraph lists the rules in short sentences, such as "No eating at the desk." This makes the rules sound strict and makes the reader feel sorry for the workers.

The structure changes in the fourth paragraph with "And yet I loved it". The writer describes the tea break, when the room "filled with chatter", and the friendships she made. This makes the office seem much happier.

At the end, the writer compares the past with the present. She works at her "kitchen table" now and would not go back, but she still misses "the sound of forty typewriters". This shows that she has mixed feelings about her first job.`,
              'Grade 8-9': `The writer engages the reader by recreating a strict, old-fashioned workplace in vivid detail and then revealing, through a careful turn in the structure, that it was also a place of warmth and friendship.

The first paragraph places us precisely in time, "a Monday in September 1966", and the detail that the writer was just sixteen makes us see the office through young, nervous eyes. The description of the clock has a mechanical rhythm of its own, "You pushed your card into the slot, pulled the lever", and the sound word "thump" makes the machine seem heavy and final. The last sentence, "Arrive at one minute past nine and the minute was printed in red", is chilling in its precision: the colour red marks the smallest lateness as a sin.

The second paragraph shows control through the layout of the room. The "forty desks in five straight rows, every one facing the same way" create an image of order and uniformity, and the "raised desk at the front" suggests a judge or a teacher. Miss Briggs is presented with comic exaggeration: she knew "without looking up, whose typewriter had stopped", and claimed she "could hear a girl thinking about her boyfriend". The humour makes her seem formidable but not cruel.

The third paragraph lists the rules in short, clipped sentences without main verbs, "No talking except on company business. No personal telephone calls. No eating at the desk.", which imitate the style of the notice itself and make the rules feel relentless. The physical cost follows, "my wrists ached", and the striking phrase "I dreamed in the rhythm of the carriage return" shows that the work had taken over even the writer's sleep.

The fourth paragraph turns on "And yet", and the self-correction "I loved it, or I came to" is honest and touching. The simile "like a classroom when the teacher has stepped out" captures the release of the tea break, and the list of what the writer learned, from "how to do my hair" to "whose husband was a rogue and whose was a saint", is funny and affectionate. The surprise that Miss Briggs "cried at the wedding" softens her completely.

The final paragraph returns to the present, contrasting the "kitchen table" and the "laptop" with the clock and the card. The writer is clear that she would not go back "for anything", but the last sentence, with its sounds of "forty typewriters" and "the rattle of the tea trolley", ends on longing. The structure therefore balances control against companionship and leaves the reader with a sense of what was lost as well as gained.`,
            },
            markScheme: [
              'Credit analysis of both language and structure, with references from across Text 1, each linked to its effect on the reader.',
              'Language could include: the mechanical description of the clock and the minute "printed in red"; the image of desks in straight rows facing a raised desk; the comic exaggeration about Miss Briggs; the clipped list of rules; the simile of a classroom when the teacher has stepped out; the sounds of typewriters and the tea trolley at the end.',
              'Structure could include: the movement from arrival, to the room, to the rules, to the friendships, to the present; the turn on "And yet" and the self-correction "or I came to"; the surprise of Miss Briggs crying at the wedding; the final paragraph, which balances relief at freedom against longing for company.',
              ...MARKS_Q3,
            ],
          },
          {
            id: 'edexcel-p2-07-q4',
            questionNumber: 4,
            questionText:
              'Look at the first paragraph of Text 2.\n\nIdentify one thing the writer says about the office as it used to be.',
            marks: 1,
            suggestedTimeMinutes: 1,
            questionType: 'retrieval',
            extract: `Text 2:\n${P07_TEXT_2}`,
            extractSource: P07_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7': 'Millions of workers sat in identical chairs.',
            },
            markScheme: [
              '1 mark for one correct point.',
              'Accept one of: it was fluorescent-lit; it was a cathedral of presenteeism; millions of workers sat in identical chairs; they performed identical rituals of busyness; it has been fatally wounded.',
            ],
          },
          {
            id: 'edexcel-p2-07-q5',
            questionNumber: 5,
            questionText:
              'Look at the second paragraph of Text 2.\n\nIdentify one finding from the research the writer mentions.',
            marks: 1,
            suggestedTimeMinutes: 1,
            questionType: 'retrieval',
            extract: `Text 2:\n${P07_TEXT_2}`,
            extractSource: P07_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7': 'Staff working from home were 13% more productive.',
            },
            markScheme: [
              '1 mark for one correct point.',
              'Accept one of: staff working from home were 13% more productive; they took fewer sick days; they reported higher job satisfaction; in one survey, 87% of the workers offered flexible arrangements chose to take them.',
            ],
          },
          {
            id: 'edexcel-p2-07-q6',
            questionNumber: 6,
            questionText:
              'In Text 2, the writer sets out to persuade the reader that the demand for workers to return to the office is really about control.\n\nEvaluate how well the writer achieves this. Refer closely to the text to support your judgement.',
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'evaluation',
            extract: `Text 2:\n${P07_TEXT_2}`,
            extractSource: P07_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7': `I think the writer is quite successful in persuading the reader that the return to the office is about control, because the article uses strong language, evidence and examples.

The writer starts with a short, dramatic sentence: "The office is dead." This makes the reader want to read on. The metaphor of a "cathedral of presenteeism" makes the office sound like a place where people just pretend to be busy.

In the second paragraph, the writer uses evidence from a study that found remote workers were "13% more productive". This makes the argument seem reliable. The joke about voting "with their slippers" is funny and keeps the reader interested.

In the third paragraph, the writer compares bosses to "Victorian factory owners", which makes them seem old-fashioned and harsh. The writer also points out that some bosses closed offices before and created "soulless open-plan warehouses", which shows that they are being hypocritical.

At the end, the writer says the real issue is "control". This is a strong ending, but the writer does not give much evidence for it, so some readers might not be fully convinced.`,
              'Grade 8-9': `The writer is persuasive for most of the article, because it combines a dramatic opening, apparently solid evidence and a sharp attack on hypocrisy, although the final claim about control is asserted more than proved.

The opening is bold. The short sentence "The office is dead." grabs attention, and the immediate correction, "Or, more precisely", makes the writer seem careful rather than reckless. The metaphor of a "fluorescent-lit cathedral of presenteeism" mocks the office as a place of empty worship, and the repetition of "identical chairs" and "identical rituals of busyness" suggests that office work was more about being seen than about achieving anything.

The second paragraph supports the argument with evidence. Calling the pandemic "the greatest workplace experiment in history" gives it a grand significance, and the figures from "One study that followed call-centre staff" and the "87%" who chose flexible work appear authoritative. The joke that people "vote with their feet, or, rather, with their slippers" adds humour that makes the writer likeable. However, neither source is named and the figures are not explained, so a sceptical reader might want to know more.

The third paragraph is the most effective. The writer presents the managers' arguments fairly, "collaboration requires proximity", and even concedes that "These claims are not without merit", which makes the attack that follows more convincing. The comparison with "Victorian factory owners" is deliberately insulting, and the example of the chief executive who closed regional offices and built "soulless open-plan warehouses that destroyed the very intimacy he now claims to value" exposes hypocrisy in a way the reader is likely to remember.

The final paragraph delivers the thesis: "It is about control". This is a strong conclusion, but it is the one point the article does not support with evidence, so it relies on the reader having been won over already. Overall, the writer is largely successful, especially in showing that the case for the office is used selectively, but the central claim would be more convincing with evidence of its own.`,
            },
            markScheme: [
              'A clear judgement of how successfully the writer persuades, kept up through the answer and supported by detailed reference to Text 2.',
              "Points that could be evaluated: the dramatic opening and its careful correction; the mocking metaphor of the office as a cathedral; the research figures and the joke about slippers; the fair summary of the managers' case, the concession and the comparison with Victorian factory owners; the example of hypocrisy; the final claim about control.",
              'A balanced view is creditable, for example that the figures are not explained, or that the central claim about control is asserted rather than proved.',
              ...MARKS_Q6,
            ],
          },
          {
            id: 'edexcel-p2-07-q7a',
            questionNumber: 7,
            label: '7(a)',
            questionText:
              'Both texts describe working in an office.\n\nWhat similarities are there between the ways the two writers describe office work? Support your answer with evidence from both texts.',
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: P07_BOTH,
            extractSource: P07_BOTH_REF,
            modelAnswers: {
              'Grade 6-7':
                'Both texts describe offices where everything looks the same. In Text 1 there were "forty desks in five straight rows", and in Text 2 workers sat in "identical chairs". In both texts, workers are watched and timed by managers. In Text 1 a clock recorded when workers arrived and Miss Briggs watched them from "a raised desk at the front", and in Text 2 managers measure "hours spent visibly at a desk". Both writers also describe working from home today, at a "kitchen table" in Text 1 and in "slippers" in Text 2.',
              'Grade 8-9':
                'Both writers describe offices built on sameness and order: in Text 1 there were "forty desks in five straight rows, every one facing the same way", and in Text 2 workers "sat in identical chairs performing identical rituals of busyness". Both show managers measuring time rather than results. In Text 1 the clock stamped each arrival and lateness "was printed in red", and in Text 2 managers are "accustomed to measuring commitment by hours spent visibly at a desk". Both describe close supervision: Miss Briggs at her "raised desk at the front" knew "whose typewriter had stopped", and the managers in Text 2 are unsettled to find that workers "can function perfectly well without supervision". Finally, both writers see work moving out of the office: the writer of Text 1 works "from my kitchen table now", and the workers in Text 2 vote "with their slippers".',
            },
            markScheme: [
              'Similarities could include: offices built on sameness and order; managers who measure time rather than results; close supervision; work now moving out of the office and into the home.',
              ...MARKS_Q7A,
            ],
          },
          {
            id: 'edexcel-p2-07-q7b',
            questionNumber: 7,
            label: '7(b)',
            questionText:
              'Compare the ideas and perspectives of the two writers about working in an office, and the methods each uses to convey them.\n\nRefer closely to both texts in your answer.',
            marks: 14,
            suggestedTimeMinutes: 18,
            questionType: 'comparison',
            extract: P07_BOTH,
            extractSource: P07_BOTH_REF,
            modelAnswers: {
              'Grade 6-7': `Both writers describe offices where workers were controlled, but they have different feelings about them. The writer of Text 1 describes strict rules, such as "No talking except on company business", but also says "I loved it, or I came to", because of the friendships she made. The writer of Text 2 has only negative views of the office, calling it a "cathedral of presenteeism".

Both writers prefer working without supervision. The writer of Text 1 says she "would not go back to the clock and the card", and the writer of Text 2 says workers can work well "without supervision". However, the writer of Text 1 also misses the office, while the writer of Text 2 does not.

The writers use different methods. Text 1 is a personal memory with lots of detail, such as the tea trolley and Miss Briggs. Text 2 uses statistics, such as "87%", and a strong argument that the real reason for returning to the office is "control".

Overall, Text 1 is nostalgic and balanced, while Text 2 is critical and persuasive.`,
              'Grade 8-9': `Both writers see the traditional office as a place of control, but the writer of Text 1 remembers it with mixed feelings and real affection, while the writer of Text 2 regards it with scorn.

The writer of Text 1 is honest about the control: the clock that printed lateness "in red", the rules "pinned to the wall" and the supervisor at "a raised desk at the front". Yet she finds human warmth inside the system. The tea trolley turned the room into "a classroom when the teacher has stepped out", and even the strict Miss Briggs "cried at the wedding". For this writer, the office was where friendships and an education in life happened: "I learned more in those tea breaks than in five years of school." The writer of Text 2 sees no such warmth in the office. It is a "cathedral of presenteeism", and the return to it is driven by managers who measure "commitment by hours spent visibly at a desk".

Their attitudes to working from home are similar but differently weighted. Both prefer freedom to supervision. The writer of Text 1 says she "would not go back to the clock and the card for anything", and the writer of Text 2 celebrates that workers "can function perfectly well without supervision". But the writer of Text 1 also admits a loss, missing "the rattle of the tea trolley more than I can say", whereas the writer of Text 2 gives only a brief nod to the managers' case, conceding that their claims are "not without merit" before dismissing them.

Their methods reflect their purposes. Text 1 is a memoir that uses sensory detail, such as the "thump" of the clock, comic exaggeration about Miss Briggs and a turn on "And yet" to balance hardship with fondness. Text 2 is an opinion piece that uses a provocative opening, "The office is dead.", figures from research it never names ("One study"), an insulting comparison with "Victorian factory owners" and a blunt conclusion: "It is about control".

Interestingly, Text 1 suggests something that Text 2 overlooks: the social life of the office. The managers in Text 2 claim that "culture cannot be built through screens", and the memories in Text 1 suggest that, in one sense at least, they might be right.`,
            },
            markScheme: [
              'Comparisons could include: both writers see the traditional office as a place of control, but Text 1 remembers it with affection and Text 2 with scorn; both prefer freedom to supervision, but Text 1 admits what was lost; Text 1 uses sensory detail, comic exaggeration and a turn on "And yet", Text 2 a provocative opening, figures, an insulting comparison and a blunt conclusion; Text 1 shows the social life of the office that Text 2 overlooks.',
              ...MARKS_Q7B,
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-07-writing',
        title: 'Section B: Transactional Writing',
        description: SECTION_B_ADVICE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p2-07-q8-9',
            questionNumber: 8,
            label: 'Q8 or Q9',
            questionText: `Answer ONE question: either Question 8 or Question 9.\n\nQuestion 8\n\nWrite an article for a careers website for young people in which you explain the advantages and disadvantages of working from home.\n\nYou could write about:\n• what working from home can offer\n• what people may miss about a workplace\n• whether it suits everyone\nand any other ideas of your own.\n\nOR\n\nQuestion 9\n\n"Young people should have a part-time job while they are still at school."\n\nWrite a speech for a school assembly in which you give your views on this statement.\n\nYou could write about:\n• what a part-time job can teach you\n• the effect on schoolwork and free time\n• how to get the balance right\nand any other ideas of your own.\n\n${MARKS_WRITING_NOTE}`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 6-7': `Question 9: a speech for a school assembly

Good morning, everyone.

Today I want to talk about whether young people should have a part-time job while they are still at school. I think that a part-time job can be a great experience, as long as it does not get in the way of schoolwork.

Firstly, a part-time job teaches you important skills. Last year I started working on Saturdays at a garden centre. I had to be on time, follow instructions and talk politely to customers, even when they were rude. These are skills that you cannot really learn in a classroom, and they will help me when I apply for jobs in the future.

Secondly, earning your own money teaches you its value. When you have worked for eight hours to earn your wages, you think twice before spending them on something you do not need. Some of my friends are saving for driving lessons or for university, and they feel proud that they are paying for it themselves.

However, a part-time job can also cause problems. If you work too many hours, you may be too tired to concentrate in lessons or to finish your homework. You might also miss out on spending time with friends or doing hobbies. Our GCSEs are very important, and nothing should put them at risk.

That is why getting the balance right is so important. I think students should work no more than one day a week during term time, and they should stop working altogether in the weeks before their exams. Employers should also be understanding and allow students to change their shifts when they need to revise.

In conclusion, a part-time job can teach you responsibility, confidence and the value of money. As long as you keep your studies as your top priority, I believe it is well worth doing.

Thank you for listening.`,
              'Grade 8-9': `Question 8: an article for a careers website

Home Truths: Is Working from Your Bedroom Really the Dream?

Imagine it: no alarm at six, no crowded train, no boss looking over your shoulder. You roll out of bed, make a coffee and open your laptop in your pyjamas. For millions of people, this is now a normal working day. But before you decide that working from home is the answer to everything, it is worth looking at both sides.

The advantages are real. The most obvious is time. For many people the journey to work takes an hour or more a day, and working from home gives that time back, to sleep, exercise or see their families. It also saves money on travel, lunches and smart clothes. Many people find they concentrate better without the interruptions of a busy office, and parents and carers often say that flexible hours allow them to keep a job they would otherwise have to give up.

However, working from home has a hidden cost: loneliness. An office is not just a place where work is done; it is a place where people chat, joke and help each other. When you work alone, there is nobody to ask a quick question, nobody to share a laugh with and nobody to notice when you are having a bad day. Young people starting their careers may lose the most, because so much of what you learn in a first job comes from watching experienced colleagues.

There is also the problem of boundaries. When your bedroom is your office, it can be hard to stop working. Emails arrive at nine at night, and the laptop is always there, waiting. Without the journey home to separate work from the rest of life, some people find they never really switch off.

So does working from home suit everyone? The honest answer is no. It suits people who are disciplined, who have a quiet space to work and who already know their job well. It suits fewer of those who share a crowded flat, who need the energy of other people, or who are just beginning to learn.

Perhaps the best answer is a mixture. Many employers now offer hybrid working, with some days at home and some in the workplace. That way, you get the freedom of your own desk and the company of your colleagues.

If you are choosing a career, ask employers how they work, and think honestly about what kind of worker you are. The dream of working in your pyjamas is appealing, but the best job is the one where you can do your best work, wherever that happens to be.`,
            },
            markScheme: [
              'Question 8 (an article for a careers website): a headline and an engaging opening; a balanced explanation of the advantages and disadvantages, developed with examples; a clear conclusion or advice for young readers; a register that informs and engages.',
              'Question 9 (a speech for an assembly): an opening and a close that speak to the audience; a clear view on the statement, supported with reasons and examples, perhaps from experience; awareness of the risks to schoolwork and free time; suggestions for getting the balance right.',
              ...MARKS_WRITING,
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 08: Childhood
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p2-08',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-fiction and Transactional Writing',
    subtitle: 'English Language 1EN0/02',
    code: '1EN0/02',
    totalTimeMinutes: 125,
    totalMarks: 96,
    sections: [
      {
        id: 'edexcel-p2-08-reading',
        title: 'Section A: Reading',
        description: `${SECTION_A_ADVICE}\n\nText 1: ${P08_TEXT_1_REF}\nText 2: ${P08_TEXT_2_REF}\n\nGlossary for Text 1: unremarked: not noticed or mentioned; romanticise: to make something seem better than it was. Glossary for Text 2: incremental erosion: a slow wearing away, a little at a time; colonised: taken over; unstructured time: time with nothing planned.`,
        totalMarks: 56,
        suggestedTimeMinutes: 80,
        questions: [
          {
            id: 'edexcel-p2-08-q1',
            questionNumber: 1,
            questionText:
              'Look at the first paragraph of Text 1.\n\nIdentify two details that show how free the writer was as a child.',
            marks: 2,
            suggestedTimeMinutes: 2,
            questionType: 'retrieval',
            extract: P08_BOTH,
            extractSource: P08_BOTH_REF,
            modelAnswers: {
              'Grade 6-7':
                '1. From the age of seven or eight the writer roamed the fields and lanes.\n2. The children were turned out after breakfast and expected back at dusk.',
            },
            markScheme: [
              '1 mark for each correct point, up to 2.',
              'Accept any two of: the writer spent childhood largely out of doors; roamed the fields and lanes from the age of seven or eight; the mother did not supervise their play; the children were turned out after breakfast; they were expected back at dusk; what they did in between was their own affair.',
              "A word, a short phrase or the student's own words is enough.",
            ],
          },
          {
            id: 'edexcel-p2-08-q2',
            questionNumber: 2,
            questionText:
              'Read the second paragraph of Text 1, beginning "We built dams in the stream".\n\nGive two things the children did.\n\nYou may answer in your own words or with quotations.',
            marks: 2,
            suggestedTimeMinutes: 2,
            questionType: 'retrieval',
            extract: `Text 1:\n${P08_TEXT_1}`,
            extractSource: P08_TEXT_1_REF,
            modelAnswers: {
              'Grade 6-7':
                '1. They "built dams in the stream".\n2. They "caught tadpoles and kept them in jars".',
            },
            markScheme: [
              '1 mark for each correct point, up to 2. The two points must be different.',
              'Accept: built dams in the stream; climbed trees that were too tall; fell out of trees; caught tadpoles and kept them in jars; fought and made up; played on the rope swing.',
              "Quotations and the student's own words both count.",
            ],
          },
          {
            id: 'edexcel-p2-08-q3',
            questionNumber: 3,
            questionText:
              "Analyse how the writer of Text 1 uses language and structure to hold the reader's interest.\n\nRefer closely to the text to support your views.",
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'analysis',
            extract: `Text 1:\n${P08_TEXT_1}`,
            extractSource: P08_TEXT_1_REF,
            modelAnswers: {
              'Grade 6-7': `The writer makes the memoir interesting by describing an adventurous childhood and comparing it with childhood today.

In the first paragraph, the writer says the childhood was spent "in a freedom that would horrify the modern parent". This makes the reader curious, because it suggests the writer did things children today are not allowed to do. The children were "turned out after breakfast and expected to return at dusk", which shows how much freedom they had.

The second paragraph uses a list of short sentences that start with "We", such as "We built dams in the stream". This makes the childhood sound exciting and busy. The writer uses humour, saying they fell out of trees in a way that "would alarm a modern risk assessor". The names "Tommy Griggs" and "Sally Evans" make the memories feel real.

In the third paragraph, the writer becomes more serious and says "I do not wish to romanticise this." The writer admits there was "cruelty" and "danger", which makes the memoir feel honest.

The ending is the most powerful part. The writer describes "the slow, unsupervised discovery of who you are", and finishes with the image of "the fading of the light". This makes the reader think about what children today may be missing.`,
              'Grade 8-9': `The writer engages the reader by celebrating a childhood of freedom in lively, physical detail, and then deepening the memory with an honest reflection on what that freedom cost and what it gave.

The opening sentence immediately sets the writer's childhood against the present: it was spent in "a freedom that would horrify the modern parent". This comparison with the reader's own world creates interest at once. The long, flowing sentences of the first paragraph, such as the description of being "turned out after breakfast and expected to return at dusk", imitate the long, open days they describe. The paradox of "the great unremarked privilege of rural poverty" is thought-provoking, because it suggests that poverty, usually seen only as a disadvantage, gave the children something valuable.

The second paragraph changes pace. It is built from short, energetic sentences beginning "We", "We built dams", "We climbed trees", "We caught tadpoles", which create a breathless list of adventures. Each adventure ends in a small failure or surprise: dams that "fail", trees the children "fell out of", tadpoles that mysteriously "grew legs". The humour of falling out of trees "with a regularity that would alarm a modern risk assessor" again compares then and now, and the named children, "Tommy Griggs" and "Sally Evans", make the memory specific and real. The rhythm of "We fought, made up, fought again" captures the ups and downs of childhood friendship.

The final paragraph is reflective and balanced. The short sentence "I do not wish to romanticise this." prepares the reader for honesty, and the writer admits "cruelty", "danger" and "long afternoons of aching, desperate boredom". The adjectives "aching, desperate" make the boredom almost physical. But the conjunction "But" turns the paragraph towards what was gained, and the final sentence uses three clauses that each begin with "when", "when nobody is watching, when no adult is assessing your performance, when the world is yours to explore", to build to a beautiful closing image: "the only deadline is the fading of the light". The word "deadline", borrowed from the adult world of work, makes the contrast with today's scheduled childhoods clear.`,
            },
            markScheme: [
              'Credit analysis of both language and structure, with references from across Text 1, each linked to its effect on the reader.',
              'Language could include: the opening comparison with "the modern parent"; the paradox of a privilege that came from poverty; the humour of the modern risk assessor; the named friends; the adjectives "aching, desperate"; the closing image of a deadline set by the fading light.',
              'Structure could include: the long, flowing sentences of the first paragraph; the run of short sentences beginning "We" in the second; the turn to honest reflection with "I do not wish to romanticise this."; the turn on "But"; the three clauses beginning "when" that build to the final image.',
              ...MARKS_Q3,
            ],
          },
          {
            id: 'edexcel-p2-08-q4',
            questionNumber: 4,
            questionText:
              "Look at the second paragraph of Text 2.\n\nIdentify one activity in the modern child's week.",
            marks: 1,
            suggestedTimeMinutes: 1,
            questionType: 'retrieval',
            extract: `Text 2:\n${P08_TEXT_2}`,
            extractSource: P08_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7': 'Swimming.',
            },
            markScheme: [
              '1 mark for one correct point.',
              'Accept one of: lessons at school; an after-school club; swimming; piano; tutoring; homework; Saturday morning football; a birthday party; violin practice; spelling test revision.',
            ],
          },
          {
            id: 'edexcel-p2-08-q5',
            questionNumber: 5,
            questionText:
              'Look at the third paragraph of Text 2.\n\nIdentify one thing the writer says children need time to do.',
            marks: 1,
            suggestedTimeMinutes: 1,
            questionType: 'retrieval',
            extract: `Text 2:\n${P08_TEXT_2}`,
            extractSource: P08_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7': 'To lie on the grass and watch clouds.',
            },
            markScheme: [
              '1 mark for one correct point.',
              'Accept one of: to be bored; to lie on the grass and watch clouds; to build a den from old blankets; to sort out who gets to be inside and who must stand guard; to fail at something without an adult swooping in to help.',
            ],
          },
          {
            id: 'edexcel-p2-08-q6',
            questionNumber: 6,
            questionText:
              "In Text 2, the writer sets out to persuade the reader that adults have taken away children's free time.\n\nEvaluate how well the writer achieves this. Refer closely to the text to support your judgement.",
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'evaluation',
            extract: `Text 2:\n${P08_TEXT_2}`,
            extractSource: P08_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7': `I think the writer is successful in persuading the reader that children have lost their free time, because the essay uses strong language and a clear example.

The essay begins with "We have stolen childhood". The word "stolen" is shocking and makes the reader pay attention. The writer also says that adults acted "with the very best intentions", which is fair and makes the reader more likely to agree.

In the second paragraph, the writer describes a typical day for an eight-year-old girl. The long list of activities, from school to swimming to homework, makes her day sound exhausting. The comparison that she has "the diary of a cabinet minister" is funny but also makes a serious point.

In the third paragraph, the writer repeats "Time to" to show what children are missing, such as "Time to be bored". This repetition makes the point memorable.

The ending, "The irony is savage", is powerful because it shows that parents' worries have made children "anxious". However, the writer does not give any statistics or real examples, so some readers may think the argument is exaggerated.`,
              'Grade 8-9': `The writer is very successful, because the essay presents a shocking claim, proves it with a vivid example, explains why it matters and ends with a sharp twist.

The opening sentence is a provocative metaphor: "We have stolen childhood". The word "stolen" turns a gradual change into a crime, and the inclusive "we" makes the reader share the guilt. The writer is careful, however, to say that the theft was carried out "with the very best intentions", which makes the argument fair rather than accusing. The paradox that adults believed they were "giving children more when, in fact, they were giving them less" is the central idea of the piece and is easy to remember.

The second paragraph is the most persuasive. The writer invites us to "Consider the modern child's schedule" and then gives it in one long, relentless sentence that lists every activity from "wakes at seven" to "in bed by nine". The structure of the sentence enacts the pressure it describes, leaving no gap for rest. The word "colonised" presents weekends as territory invaded by adults, and the comic but pointed final line, "She is eight years old and she has the diary of a cabinet minister", makes the absurdity clear.

The third paragraph explains what is missing. The repetition of "Time to" introduces a series of images, "Time to be bored", "Time to lie on the grass and watch clouds", "Time to build a den", that are simple and appealing, and most readers will remember such moments from their own childhoods. The writer then raises the stakes by calling these "the raw materials of psychological development", which gives the argument a scientific seriousness.

The final paragraph ends with irony, "The irony is savage", and a balanced sentence in which "A generation of parents terrified" has produced "a generation of children who are anxious". The symmetry makes the outcome seem inevitable.

If there is a weakness, it is that the essay uses one imagined child rather than evidence, and it does not suggest how busy families might change. But as a piece designed to make adults rethink, it is highly effective.`,
            },
            markScheme: [
              'A clear judgement of how successfully the writer persuades, kept up through the answer and supported by detailed reference to Text 2.',
              'Points that could be evaluated: the provocative metaphor of stolen childhood, balanced by the admission of good intentions; the long, relentless sentence of the child\'s schedule and the comparison with a cabinet minister; the repeated "Time to" and its simple images; the claim about psychological development; the ironic, balanced ending.',
              'A balanced view is creditable, for example that the essay rests on one imagined child and offers no evidence or solution.',
              ...MARKS_Q6,
            ],
          },
          {
            id: 'edexcel-p2-08-q7a',
            questionNumber: 7,
            label: '7(a)',
            questionText:
              'Both texts are about how children spend their time.\n\nWhat similarities are there between the kinds of childhood experience the two writers value? Support your answer with evidence from both texts.',
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: P08_BOTH,
            extractSource: P08_BOTH_REF,
            modelAnswers: {
              'Grade 6-7':
                'Both writers think children need time to play without adults. In Text 1 the children were "turned out after breakfast", and in Text 2 the writer wants "unstructured time" for children. Both writers think boredom is part of childhood: Text 1 describes "long afternoons of aching, desperate boredom", and Text 2 says children need "Time to be bored". Both also describe children making things, dams in the stream in Text 1 and "a den from old blankets" in Text 2.',
              'Grade 8-9':
                'Both writers value time that children spend without adults watching: the writer of Text 1 praises "the slow, unsupervised discovery of who you are when nobody is watching", and the writer of Text 2 wants time for children "to fail at something without an adult swooping in to help". Both see boredom as part of childhood, Text 1 remembering "long afternoons of aching, desperate boredom" and Text 2 asking for "Time to be bored". Both describe children building things, dams "in the stream" in Text 1 and "a den from old blankets" in Text 2. Both also value the way children sort out their own friendships: in Text 1 the children "fought, made up, fought again" and learned whom to trust, and in Text 2 they "negotiate the complex social politics of who gets to be inside and who must stand guard". Finally, both treat failure as useful, the dams the children "watched" fail and the chance "to fail at something".',
            },
            markScheme: [
              'Similarities could include: time without adults watching; boredom as part of childhood; children building things for themselves; children sorting out their own friendships and arguments; failure as something children learn from.',
              ...MARKS_Q7A,
            ],
          },
          {
            id: 'edexcel-p2-08-q7b',
            questionNumber: 7,
            label: '7(b)',
            questionText:
              "Compare the ideas and perspectives of the two writers about children's freedom, and the methods each uses to convey them.\n\nRefer closely to both texts in your answer.",
            marks: 14,
            suggestedTimeMinutes: 18,
            questionType: 'comparison',
            extract: P08_BOTH,
            extractSource: P08_BOTH_REF,
            modelAnswers: {
              'Grade 6-7': `Both writers think that children should have freedom, but they present their views differently. The writer of Text 1 remembers a childhood with lots of freedom, roaming "the fields and lanes around our village". The writer of Text 2 thinks children today have lost this freedom because adults fill their time with activities.

The writer of Text 1 is honest that freedom had problems, such as "cruelty" and "danger". The writer of Text 2 does not mention any dangers of freedom and focuses on the harm of being too busy, saying children have become "anxious, overscheduled".

Both writers think boredom is important. In Text 1 there were afternoons of "desperate boredom", and in Text 2 the writer says children need "Time to be bored".

The writers use different methods. Text 1 is a memoir with a list of adventures and named friends. Text 2 uses an example of an eight-year-old's busy timetable and repetition to persuade. Overall, Text 1 is nostalgic and personal, while Text 2 is critical and argues for change.`,
              'Grade 8-9': `Both writers believe that children need freedom from adult control, but the writer of Text 1 speaks from memory and admits the costs of that freedom, while the writer of Text 2 speaks as an expert alarmed by its loss.

The writer of Text 1 presents freedom as something experienced, not theorised. The evidence is a list of adventures, "We built dams", "We climbed trees", and the freedom came almost by accident, from a mother "occupied from dawn with the business of keeping house on almost nothing". The writer calls it "the great unremarked privilege of rural poverty", which suggests that it was valuable precisely because nobody planned it. The writer of Text 2, by contrast, presents the loss of freedom as a problem caused by adults, who have "stolen childhood" through an "incremental erosion".

Both writers are fair to adults, but in different ways. Text 1 blames nobody, and is honest about the dangers of too little supervision: "There was cruelty in it" and "there was danger". Text 2 says the change was made "with the very best intentions", but it ends by blaming a generation of parents "terrified that their children will fall behind".

In the end both value the same things: boredom, failure and self-discovery. The "long afternoons of aching, desperate boredom" in Text 1 are the very thing Text 2 asks for in "Time to be bored", and the "discovery of who you are when nobody is watching" in Text 1 matches the claim in Text 2 that unstructured time is "the raw materials of psychological development".

Their methods differ. Text 1 is a memoir with named friends, "Tommy Griggs" and "Sally Evans", humour and a lyrical ending about "the fading of the light". Text 2 is a persuasive essay that uses an imagined example, the girl with "the diary of a cabinet minister", the repetition of "Time to" and a final irony. One writer remembers a freedom that was lived; the other argues for a freedom that has been lost.`,
            },
            markScheme: [
              'Comparisons could include: both writers believe children need freedom from adult control, but Text 1 speaks from memory and admits its costs while Text 2 speaks as an expert alarmed by its loss; Text 1 blames nobody, Text 2 blames anxious parents while granting their good intentions; both value boredom, failure and self-discovery; Text 1 uses named friends, humour and a lyrical ending, Text 2 an imagined child, repetition and irony.',
              ...MARKS_Q7B,
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-08-writing',
        title: 'Section B: Transactional Writing',
        description: SECTION_B_ADVICE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p2-08-q8-9',
            questionNumber: 8,
            label: 'Q8 or Q9',
            questionText: `Answer ONE question: either Question 8 or Question 9.\n\nQuestion 8\n\nWrite an article for a parenting website in which you argue that children should be given more free time to play.\n\nYou could write about:\n• how busy children's lives are\n• what children gain from free play\n• how families could make more time for it\nand any other ideas of your own.\n\nOR\n\nQuestion 9\n\nWrite a letter to your local council in which you argue for better places for children and young people to play and meet in your area.\n\nYou could write about:\n• the places that exist now\n• why young people need somewhere to go\n• what the council could provide\nand any other ideas of your own.\n\n${MARKS_WRITING_NOTE}`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 6-7': `Question 9: a letter to the council

Dear Councillor Hughes,

I am writing to ask the council to provide better places for children and young people to play and meet in our area. As a fifteen-year-old who has lived in Eastfield all my life, I believe there is very little for young people to do here, and that this is causing problems.

At the moment, the only play area near my home is the playground on Park Road. It has two swings, one of which has been broken for months, and a slide that is too small for anyone over the age of seven. There is nowhere at all for teenagers. The youth club closed three years ago, and since then many of my friends have nowhere to go after school apart from the shops or each other's houses.

Young people need somewhere to go. When there is nothing to do, some teenagers hang around on street corners, and older residents sometimes feel nervous about this, even when the young people are not doing anything wrong. Having a safe place to meet would help us to stay active, make friends and keep out of trouble. It would also help our mental health, because spending time with friends in person is much better for us than spending every evening on our phones.

I have some ideas about what the council could provide. Firstly, the playground on Park Road could be repaired and extended, with equipment for older children such as climbing frames. Secondly, the empty space behind the library could become a skate park or a games area for football and basketball. Finally, the council could work with local volunteers to reopen the youth club, even if only for two evenings a week.

I understand that the council has limited money, but I believe that investing in young people now would save money in the future. A community that cares for its young people is a better place for everyone to live.

Thank you for reading my letter. I hope you will consider my suggestions.

Yours sincerely,

Leah Thomas`,
              'Grade 8-9': `Question 8: an article for a parenting website

Let Them Play: Why the Best Thing You Can Give Your Child Is Nothing to Do

It is half past four on a Tuesday, and somewhere in Britain an eight-year-old is being driven from school to swimming, eating a cereal bar in the back seat, with a spelling test to revise for and piano practice still to come. Her parents love her. They are doing everything they can to give her the best start in life. And they may, without meaning to, be taking away the thing she needs most.

That thing is free play: time that belongs to the child, with no timetable, no instructor and no goal.

As a teenager, I am not long out of childhood myself, and I can tell you what I remember. I do not remember my after-school clubs with much affection. I remember the summer my friends and I turned a hedge at the end of the park into a secret base, and argued for a fortnight about who was allowed in. I remember being bored, so bored that I taught myself to juggle with three oranges. Those hours felt empty at the time. Looking back, they were some of the richest of my life.

Free play is not wasted time. When children make up their own games, they learn to solve problems, to share, to take turns and to sort out their own arguments. When they are bored, they discover what interests them. When they climb, run and tumble, they learn what their bodies can do, and a grazed knee teaches more about risk than any lecture. Every organised activity has an adult in charge; free play is where children learn to be in charge of themselves.

I understand why parents fill the week. They worry that their child will fall behind, that other children are learning Mandarin and coding while theirs is lying on the grass. But a childhood packed with activities can leave children anxious and unable to entertain themselves. The pressure to be always improving is exhausting, even for adults.

The answer does not have to be dramatic. Families could keep one afternoon a week completely free. They could send children into the garden or the park with a ball and nothing else. They could resist the urge to rescue a bored child with a screen, and wait to see what happens instead. Schools, too, could protect playtime rather than cutting it for extra lessons.

Childhood lasts only a few years. Let us give children back the time to spend it as children do: wildly, foolishly and freely. They will thank us for it, though probably not until they are grown up.`,
            },
            markScheme: [
              "Question 8 (an article for a parenting website): a headline and an engaging opening; a clear argument for free play, developed with examples and perhaps personal experience; a fair response to parents' worries; practical suggestions and a memorable ending.",
              "Question 9 (a letter to the council): a suitable greeting and sign-off and a formal register; a clear account of what exists now and why young people need more; developed, practical suggestions; awareness of the council's limited money.",
              ...MARKS_WRITING,
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 09: Housing
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p2-09',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-fiction and Transactional Writing',
    subtitle: 'English Language 1EN0/02',
    code: '1EN0/02',
    totalTimeMinutes: 125,
    totalMarks: 96,
    sections: [
      {
        id: 'edexcel-p2-09-reading',
        title: 'Section A: Reading',
        description: `${SECTION_A_ADVICE}\n\nText 1: ${P09_TEXT_1_REF}\nText 2: ${P09_TEXT_2_REF}\n\nGlossary for Text 1: the council: the local authority, which built homes and rented them out; the waiting list: the list of families waiting for a council home; crescent: a curved street. Glossary for Text 2: deposit: the money a buyer pays at the start, with a loan (a mortgage) for the rest; equity: the share of a home's value that its owner has paid for.`,
        totalMarks: 56,
        suggestedTimeMinutes: 80,
        questions: [
          {
            id: 'edexcel-p2-09-q1',
            questionNumber: 1,
            questionText:
              "Look at the first paragraph of Text 1.\n\nIdentify two problems with the family's first home.",
            marks: 2,
            suggestedTimeMinutes: 2,
            questionType: 'retrieval',
            extract: P09_BOTH,
            extractSource: P09_BOTH_REF,
            modelAnswers: {
              'Grade 6-7': '1. The walls were damp.\n2. There was no bathroom.',
            },
            markScheme: [
              '1 mark for each correct point, up to 2.',
              'Accept any two of: five people lived in two rooms; the walls were damp; the wallpaper peeled away; black mould spread across the ceiling; the writer shared a bed with two sisters; there was no bathroom; the toilet was in the yard and shared with the next-door family; the family took turns in the same bath water.',
            ],
          },
          {
            id: 'edexcel-p2-09-q2',
            questionNumber: 2,
            questionText:
              'Read the third paragraph of Text 1, beginning "The new estate was on the edge of town".\n\nGive two ways in which the new house was better than the family\'s first home.\n\nYou may answer in your own words or with quotations.',
            marks: 2,
            suggestedTimeMinutes: 2,
            questionType: 'retrieval',
            extract: `Text 1:\n${P09_TEXT_1}`,
            extractSource: P09_TEXT_1_REF,
            modelAnswers: {
              'Grade 6-7':
                '1. It had three bedrooms, so the writer had "a room of my own".\n2. It had "hot water that came out of a tap".',
            },
            markScheme: [
              '1 mark for each correct point, up to 2. The two points must be different.',
              'Accept: it had three bedrooms; the writer had a room of their own; there was a bathroom upstairs; there was a bath you could lie down in; there was hot water from a tap; there was a garden at the back.',
              "Quotations and the student's own words both count.",
            ],
          },
          {
            id: 'edexcel-p2-09-q3',
            questionNumber: 3,
            questionText:
              "Analyse how the writer of Text 1 uses language and structure to hold the reader's interest.\n\nRefer closely to the text to support your views.",
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'analysis',
            extract: `Text 1:\n${P09_TEXT_1}`,
            extractSource: P09_TEXT_1_REF,
            modelAnswers: {
              'Grade 6-7': `The writer makes the text interesting by contrasting the family's damp first home with their new council house.

In the first paragraph, the writer describes the old home with details such as "a black mould" on the ceiling and a toilet "in the yard". The short sentence "There was no bathroom." shows how basic the home was. The detail about the tin bath, where they "took turns in the same water", makes the reader feel sorry for the family.

The second paragraph describes the letter from the council. The mother "cried, and laughed", which shows how happy and relieved she was. The short sentence "We had been on the waiting list for six years." explains why.

In the third paragraph, the writer describes the new house with excitement. The houses seemed "as grand as palaces", which shows how impressive they seemed to a child. The father turning the hot tap on and off "as if he did not quite trust it" is funny and shows how unusual hot water was.

In the fourth paragraph, the writer admits that some council estates "were badly built", which makes the writer seem fair. The rose that was "still flowering the year she died" shows how deeply the family put down roots: the parents lived in the house "for forty-one years".

The ending sums up the writer's message: "It did not make us rich. It made us safe." The short sentences make the message clear and memorable.`,
              'Grade 8-9': `The writer interests the reader by contrasting two homes so sharply that the move between them feels like a transformation, and then reflecting on why that transformation mattered.

The first paragraph builds a picture of hardship through precise, physical details. The wallpaper "peeled away in long curls", and "a black mould spread across the ceiling above the bed I shared with my two sisters": the verb "spread" makes the damp seem alive and creeping, and the detail of the shared bed shows overcrowding without needing to say so. The short sentence "There was no bathroom." is blunt, and the image of the tin bath in which "we took turns in the same water, youngest first" is both funny and uncomfortable.

The second paragraph is short and dramatic, and it marks the turning point. The writer slows down the moment the letter arrives, describing the mother who "read it standing up, then sat down and read it again", and then reveals an emotion so strong that "she cried, and laughed, and could not stop doing either". The final short sentence, "We had been on the waiting list for six years.", explains her reaction and makes the reader feel the length of the wait.

The third paragraph is full of wonder. The list "all pale brick, all with green front doors, and all, to my eyes, as grand as palaces" uses repetition to build excitement, and the exaggeration of "palaces" shows how the house seemed through a child's eyes. The humour of a room "the size of a cupboard" keeps the writing honest, and the father who "turned it on and off half a dozen times, as if he did not quite trust it" is a touching detail that shows how new such comfort was.

In the fourth paragraph, the writer anticipates the reader's doubts, admitting that people "sneer at council estates" and that "some were badly built". This concession makes the defence that follows more convincing. The image of the rose that "was still flowering the year she died" links the beginning and the end of the parents' lives in the house and shows how deeply rooted they became.

The final paragraph widens the story into a general truth. The contrast "It did not make us rich. It made us safe" is simple and powerful, and the last phrase, "safety, I have come to believe, is the beginning of everything else", leaves the reader with the writer's central idea: that a secure home is the foundation of a good life.`,
            },
            markScheme: [
              'Credit analysis of both language and structure, with references from across Text 1, each linked to its effect on the reader.',
              'Language could include: the physical details of damp and mould, and the verb "spread"; the comic and uncomfortable image of the shared bath water; the mother who "cried, and laughed"; the repetition and exaggeration in "as grand as palaces"; the father testing the tap; the simple contrast between rich and safe.',
              "Structure could include: the sharp contrast between the first and third paragraphs; the short second paragraph as a turning point; the short sentences that end paragraphs; the concession about council estates before the defence; the rose that links the start and end of the parents' time in the house; the final widening into a general truth.",
              ...MARKS_Q3,
            ],
          },
          {
            id: 'edexcel-p2-09-q4',
            questionNumber: 4,
            questionText:
              'Look at the first paragraph of Text 2.\n\nIdentify one reason the writer gives for expecting to be able to buy a house.',
            marks: 1,
            suggestedTimeMinutes: 1,
            questionType: 'retrieval',
            extract: `Text 2:\n${P09_TEXT_2}`,
            extractSource: P09_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7': 'The writer has a full-time job.',
            },
            markScheme: [
              '1 mark for one correct point.',
              'Accept one of: the writer has a degree; a full-time job; an excellent credit score; has never missed a rent payment in twelve years.',
            ],
          },
          {
            id: 'edexcel-p2-09-q5',
            questionNumber: 5,
            questionText:
              "Look at the third paragraph of Text 2.\n\nIdentify one problem with the writer's flat.",
            marks: 1,
            suggestedTimeMinutes: 1,
            questionType: 'retrieval',
            extract: `Text 2:\n${P09_TEXT_2}`,
            extractSource: P09_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7': 'There is damp in the bathroom.',
            },
            markScheme: [
              '1 mark for one correct point.',
              'Accept one of: there is damp in the bathroom; the landlord takes six weeks to fix the boiler; the rent buys no equity or security; the writer cannot hang a picture without permission; the rent is £1,100 a month.',
            ],
          },
          {
            id: 'edexcel-p2-09-q6',
            questionNumber: 6,
            questionText:
              'In Text 2, the writer sets out to persuade the reader that young people today cannot afford a home of their own.\n\nEvaluate how well the writer achieves this. Refer closely to the text to support your judgement.',
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'evaluation',
            extract: `Text 2:\n${P09_TEXT_2}`,
            extractSource: P09_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7': `I think the writer is very successful in persuading the reader that young people cannot afford homes, because the article is personal, uses clear statistics and makes a powerful comparison.

At the start, the writer explains that they have "a degree, a full-time job" and have never missed a rent payment. This shows that the writer has done everything right, so the reader sympathises. The short fragments "Any house. Anywhere." show the writer's frustration.

In the second paragraph, the writer uses statistics, such as the average house price of "£290,000". The writer explains that saving for a deposit would take "twelve and a half years". This makes the problem seem impossible to solve.

The third paragraph describes the writer's flat, with "damp in the bathroom". The simile "like water into sand" shows that the rent is wasted.

The ending is effective because it compares the writer with their parents, who bought a house "on a single teacher's salary". The final sentence, "That country no longer exists.", is short and sad. However, the writer does not suggest any solutions, so the article only describes the problem.`,
              'Grade 8-9': `The writer is highly successful, because the article combines a sympathetic personal voice with simple, devastating arithmetic, and ends with a comparison that makes the change between generations impossible to ignore.

The opening paragraph establishes the writer as someone who has done everything right. The list of credentials, "a degree, a full-time job, and a credit score", with a bank's verdict of "excellent", anticipates the objection that the writer is irresponsible. The sudden short sentence "And I cannot buy a house." delivers the problem, and the fragments that follow, "Not a nice house. Not a house in a fashionable area. Any house. Anywhere.", narrow the claim until it becomes shocking. The rhythm of these fragments makes the frustration audible.

The second paragraph turns frustration into evidence. The writer calls the numbers "brutal" and "simple", and then shows that they are. The figures, "£290,000" against a salary of "£35,000", and a saving rate of "approximately £200 per month", are easy to follow, and the conclusion that by the time the deposit is saved "I will be back where I started" shows the trap clearly. However, these are averages, and a careful reader might ask how typical the writer's situation is.

The third paragraph makes the injustice concrete. The details of "damp in the bathroom" and a landlord "who takes six weeks to fix the boiler" are ordinary, which makes them believable, and the list "no equity, no security, no right to hang a picture without permission" moves from the financial to the deeply personal. The simile that rent "vanishes into someone else's mortgage like water into sand" captures the sense of waste.

The final paragraph is the most persuasive. The parents bought their home "in 1988 for £42,000 on a single teacher's salary", and the short sentences that follow, "They did not have wealthy parents. They did not have extraordinary luck.", deny any special advantage. The final sentence, "That country no longer exists.", is a bleak, memorable conclusion.

Overall, the writer persuades very effectively, although the article describes the problem far more than it explains its causes or suggests a solution.`,
            },
            markScheme: [
              'A clear judgement of how successfully the writer persuades, kept up through the answer and supported by detailed reference to Text 2.',
              'Points that could be evaluated: the list of credentials and the frustrated fragments that follow; the simple arithmetic of prices, salary and savings; the ordinary but telling problems with the flat and the simile of water into sand; the comparison with the parents in 1988 and the bleak final sentence.',
              'A balanced view is creditable, for example that the figures are averages, or that the article describes the problem without explaining it or suggesting a solution.',
              ...MARKS_Q6,
            ],
          },
          {
            id: 'edexcel-p2-09-q7a',
            questionNumber: 7,
            label: '7(a)',
            questionText:
              "Both texts describe homes and the cost of a place to live.\n\nWhat similarities are there between the two writers' experiences of housing? Support your answer with evidence from both texts.",
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: P09_BOTH,
            extractSource: P09_BOTH_REF,
            modelAnswers: {
              'Grade 6-7':
                'Both writers have lived in damp homes. In Text 1 there was "black mould" on the ceiling, and in Text 2 there is "damp in the bathroom". Both writers also pay rent: in Text 1 a man collected the rent every Monday, and in Text 2 the writer pays "£1,100 per month". Both texts show how important security is. In Text 1 the family "knew we could stay", while in Text 2 the writer\'s rent buys "no security".',
              'Grade 8-9':
                'Both writers have lived in damp homes: in Text 1 the walls were "so damp that the wallpaper peeled away", and in Text 2 the flat has "damp in the bathroom". Both have had to wait a long time for a better home, the family in Text 1 having "been on the waiting list for six years" and the writer of Text 2 facing "twelve and a half years" of saving for a deposit. Both pay rent to someone else, in Text 1 to "a man who came to the door every Monday with a little book" and in Text 2 "£1,100 per month" to a landlord. Both writers describe an older generation that found a secure home: in Text 1 the parents "lived in that house for forty-one years", and in Text 2 the parents "bought their first home in 1988". Finally, both see security as the heart of a home, the writer of Text 1 saying "It made us safe" and the writer of Text 2 complaining that rent buys "no security".',
            },
            markScheme: [
              "Similarities could include: damp homes; a long wait for something better; rent paid to someone else; a parents' generation with secure homes; security as the heart of a home.",
              ...MARKS_Q7A,
            ],
          },
          {
            id: 'edexcel-p2-09-q7b',
            questionNumber: 7,
            label: '7(b)',
            questionText:
              'Compare the ideas and perspectives of the two writers about what a home means, and the methods each uses to convey them.\n\nRefer closely to both texts in your answer.',
            marks: 14,
            suggestedTimeMinutes: 18,
            questionType: 'comparison',
            extract: P09_BOTH,
            extractSource: P09_BOTH_REF,
            modelAnswers: {
              'Grade 6-7': `Both writers think a home should make people feel safe, but they have different experiences. The writer of Text 1 moved into a council house that changed the family's life, and says "It made us safe." The writer of Text 2 rents a flat and feels insecure, because the rent buys "no security".

The writers feel differently about the people they pay rent to. In Text 1, the rent was "fair" and the family knew they could stay. In Text 2, the landlord is slow to fix things, which makes the writer frustrated.

Both writers compare their lives with an older generation. The writer of Text 1 remembers parents who lived in the same house "for forty-one years", and the writer of Text 2 says their parents bought a house on "a single teacher's salary". However, Text 1 is grateful, while Text 2 is angry that "That country no longer exists."

The writers use different methods. Text 1 is a memoir with emotional details, such as the mother crying when the letter came. Text 2 uses statistics, such as "£290,000", and short sentences to show frustration. Overall, Text 1 shows how a home can change lives, and Text 2 shows how hard it is to find one today.`,
              'Grade 8-9': `Both writers believe that a home should give people security, but the writer of Text 1 celebrates a home that did so, while the writer of Text 2 protests about a housing market that does not.

The writer of Text 1 presents the council house as a transformation. Compared with the damp rooms where "a black mould spread across the ceiling", it seemed "as grand as palaces", and its meaning was emotional rather than financial: "It did not make us rich. It made us safe." The writer of Text 2 also wants safety, but experiences only its absence. Rent buys "no equity, no security, no right to hang a picture without permission", and the home is not a refuge but a drain, money that "vanishes into someone else's mortgage like water into sand".

Their attitudes to the way homes are provided differ sharply. In Text 1, the council was the means of rescue, and the rent "never frightened us, because we knew it was fair and we knew we could stay". In Text 2, a private landlord "takes six weeks to fix the boiler", and the market has priced out even a person with "a full-time job". Both writers look back to an earlier generation that could find a secure home, but Text 1 does so with gratitude and Text 2 with grief: "That country no longer exists."

Both writers anticipate objections. Text 1 admits that people "sneer at council estates" and that "some were badly built"; Text 2 stresses that the writer has "never missed a rent payment in twelve years", to answer any suggestion of irresponsibility.

Their methods reflect their purposes. Text 1 is a memoir that uses sensory and emotional details, such as the mother who "cried, and laughed" and the rose "still flowering the year she died", and it ends with the general reflection that "safety" is "the beginning of everything else". Text 2 is an argument built on numbers, "£290,000", "£35,000" and "£42,000", and on short, angry fragments such as "Any house. Anywhere." One writer shows what a secure home made possible; the other shows what its absence prevents.`,
            },
            markScheme: [
              'Comparisons could include: both writers believe a home should give security, but Text 1 celebrates a home that did and Text 2 protests about a market that does not; Text 1 sees the council as a rescuer and the rent as fair, Text 2 sees a slow landlord and impossible prices; both look back to an earlier generation, with gratitude in Text 1 and grief in Text 2; both answer objections; Text 1 uses sensory and emotional detail and ends in reflection, Text 2 numbers and angry fragments.',
              ...MARKS_Q7B,
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-09-writing',
        title: 'Section B: Transactional Writing',
        description: SECTION_B_ADVICE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p2-09-q8-9',
            questionNumber: 8,
            label: 'Q8 or Q9',
            questionText: `Answer ONE question: either Question 8 or Question 9.\n\nQuestion 8\n\nWrite an article for a news website in which you argue that more must be done to help young people find homes they can afford.\n\nYou could write about:\n• the problems young people face in finding a home\n• why a secure home matters\n• what could be done to help\nand any other ideas of your own.\n\nOR\n\nQuestion 9\n\nWrite a letter to an older brother, sister or friend who is about to move into their first rented home, giving them advice.\n\nYou could write about:\n• choosing a place to live\n• money and bills\n• getting on with landlords and housemates\nand any other ideas of your own.\n\n${MARKS_WRITING_NOTE}`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 6-7': `Question 9: a letter of advice

Dear Ellie,

Congratulations on finding your first flat. I am so proud of you, and I remember how exciting and nerve-racking it was when I moved out. I thought I would write down some advice that I wish someone had given me.

First of all, before you sign anything, look carefully at the place. Check for damp, especially in the bathroom and around the windows, and make sure the heating and hot water work. Ask the landlord how long they usually take to fix problems. It is much easier to sort things out before you move in than afterwards.

Secondly, think carefully about money. Your rent is not the only cost. You will also have to pay for electricity, gas, water, internet and council tax, and these can add up quickly. I suggest you make a budget at the start of every month and put some money aside for emergencies. Cooking at home instead of buying takeaways will save you a lot, too.

Thirdly, try to get on well with your landlord. Always pay your rent on time and report any problems politely and in writing, such as by email. Keep a copy of your tenancy agreement somewhere safe, and take photos of the flat when you move in, so that you can get your deposit back when you leave.

If you are sharing with housemates, agree some rules from the beginning, such as how you will share the cleaning and the bills. Little things, like washing up, can cause big arguments if you do not talk about them.

Finally, make your flat feel like home. Put up some photos, buy a plant and get to know your neighbours. It might feel strange at first, but soon it will be your own place.

Good luck, and let me know if you need anything. I am always at the other end of the phone.

Lots of love,

Sam`,
              'Grade 8-9': `Question 8: an article for a news website

Locked Out: Why My Generation Deserves a Home

Ask a group of teenagers what they want from the future and you will hear the usual answers: a good job, travel, a family one day. Then ask how many expect to own a home before they are forty. Watch the laughter fade.

For a growing number of young people, a secure home has become a fantasy. House prices have risen far faster than wages, so that buying a first home now means saving a deposit that, for many, is larger than a year's pay. Renting is little better. Rents swallow a huge share of young people's earnings, and tenancies can end at short notice, so that moving every year or two becomes a way of life. Many young adults remain in their childhood bedrooms well into their thirties, not because they want to, but because they have no choice.

This matters for more than money. A home is the place where you can plan a life. Without security, it is hard to put down roots, to join a local club, to get to know the neighbours or to think about starting a family. Children who move house again and again change schools and lose friends. A country where young people cannot settle is a country that loses its sense of community.

Some people will say that young people should simply work harder and save more. But many already do. They hold full-time jobs, avoid debt and save every month, only to watch prices rise faster than their savings. The problem is not effort; it is arithmetic.

So what should be done? First, we need to build far more homes that ordinary people can afford, including homes for social rent, like the council houses that gave so many families security in the past. Second, renters need stronger protection: longer tenancies, limits on sudden rent rises, and a duty on landlords to repair problems such as damp quickly. Third, schemes to help first-time buyers should be aimed at those who need them most, rather than pushing prices up for everyone.

None of this is impossible. In the 1950s, this country built hundreds of thousands of homes a year, because it believed that a decent home was a basic right. We can believe that again.

Young people are not asking for luxury. We are asking for a front door and a key of our own. That should not be too much to ask.`,
            },
            markScheme: [
              'Question 8 (an article for a news website): a headline and an engaging opening; a clear argument, developed with explanation and examples of the problems young people face; a fair answer to the view that young people should simply save more; specific proposals and a strong ending.',
              'Question 9 (a letter of advice): a greeting and sign-off suited to a brother, sister or friend, with a warm, informal register; clear, practical advice organised into sections; awareness of costs, responsibilities and getting on with others.',
              ...MARKS_WRITING,
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 10: Entertainment
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p2-10',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-fiction and Transactional Writing',
    subtitle: 'English Language 1EN0/02',
    code: '1EN0/02',
    totalTimeMinutes: 125,
    totalMarks: 96,
    sections: [
      {
        id: 'edexcel-p2-10-reading',
        title: 'Section A: Reading',
        description: `${SECTION_A_ADVICE}\n\nText 1: ${P10_TEXT_1_REF}\nText 2: ${P10_TEXT_2_REF}\n\nGlossary for Text 1: sixpence: a small coin of the time; serial: a film story shown in weekly episodes; usherette: a cinema attendant who showed people to their seats; the balcony: the upper floor of seats in a cinema. Glossary for Text 2: connective tissue: the parts of a body that hold the rest together; algorithm-driven: chosen by a computer program.`,
        totalMarks: 56,
        suggestedTimeMinutes: 80,
        questions: [
          {
            id: 'edexcel-p2-10-q1',
            questionNumber: 1,
            questionText:
              'Look at the first paragraph of Text 1.\n\nIdentify two things the children got for their sixpence.',
            marks: 2,
            suggestedTimeMinutes: 2,
            questionType: 'retrieval',
            extract: P10_BOTH,
            extractSource: P10_BOTH_REF,
            modelAnswers: {
              'Grade 6-7': '1. Two hours of films.\n2. A club badge.',
            },
            markScheme: [
              '1 mark for each correct point, up to 2.',
              'Accept any two of: two hours of films; a club badge; a tremendous noise.',
            ],
          },
          {
            id: 'edexcel-p2-10-q2',
            questionNumber: 2,
            questionText:
              'Read the second paragraph of Text 1, beginning "The manager, Mr Fenwick".\n\nGive two things Mr Fenwick did before the films began.\n\nYou may answer in your own words or with quotations.',
            marks: 2,
            suggestedTimeMinutes: 2,
            questionType: 'retrieval',
            extract: `Text 1:\n${P10_TEXT_1}`,
            extractSource: P10_TEXT_1_REF,
            modelAnswers: {
              'Grade 6-7': '1. He held up his hands for silence.\n2. He "led us in the club song".',
            },
            markScheme: [
              '1 mark for each correct point, up to 2. The two points must be different.',
              'Accept: he walked onto the stage; he held up his hands for silence and waited; he led the club song; he read out the names of children with birthdays that week; he brought them up on the stage to be cheered.',
              "Quotations and the student's own words both count.",
            ],
          },
          {
            id: 'edexcel-p2-10-q3',
            questionNumber: 3,
            questionText:
              "Analyse how the writer of Text 1 uses language and structure to hold the reader's interest.\n\nRefer closely to the text to support your views.",
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'analysis',
            extract: `Text 1:\n${P10_TEXT_1}`,
            extractSource: P10_TEXT_1_REF,
            modelAnswers: {
              'Grade 6-7': `The writer makes the memoir interesting by describing the fun and noise of Saturday morning cinema and showing how much it meant.

In the first paragraph, the writer says sixpence bought "a noise so tremendous" that it could be heard at the bus station. This exaggeration is funny and shows how lively the cinema was. The little brother "gripping my arm" adds a personal detail.

In the second paragraph, the manager is described as "a round man in a dinner jacket that had seen better days", which makes him seem a bit comic. The short sentence "He never got it." is funny because it shows the children never went quiet.

In the third paragraph, the writer says "The films themselves hardly mattered." This shows that being together was more important than the films. The repetition of "When" at the start of three sentences, such as "When the villain appeared, we booed", shows how the children reacted to everything.

In the fourth paragraph, the writer admits it was "not all innocent fun", which makes the memoir honest. The writer also explains what they learned, such as sharing sweets and looking after "the smaller ones".

The last paragraph is sad, because the cinema has become "flats". The writer imagines still hearing the children "stamping our feet in time", which shows how much the memories mean.`,
              'Grade 8-9': `The writer engages the reader by recreating the noisy, chaotic joy of Saturday morning cinema, using humour and lively detail, and then shaping the memory so that its loss is quietly felt at the end.

The opening sentence uses exaggeration, "half the children in our town", to create a sense of excitement and crowds. The list of what sixpence bought builds to a comic climax, "a noise so tremendous that the manager claimed it could be heard at the bus station", which tells us at once that this text is about sound and energy. The detail of the little brother, "frightened of the dark" and "gripping my arm", adds warmth and introduces a relationship that returns later.

The second paragraph is a comic portrait. Mr Fenwick, "a round man in a dinner jacket that had seen better days", is affectionately mocked: the jacket suggests faded grandeur. The short sentence "He never got it." punctures his attempt at authority with perfect comic timing. The birthday ritual, being "cheered by three hundred strangers", shows the warmth of the crowd, and the anecdote of forgetting "my own name" and being reminded "by my brother" is funny and touching, because it reverses the roles of the first paragraph.

The third paragraph opens with a surprising claim, "The films themselves hardly mattered", which tells us that the real subject is the shared experience. The serial's cliffhangers, with the hero "tied to a railway line or dangling over a cliff", explain why the children kept coming. The paragraph then uses three sentences beginning "When", "When the hero was in danger", "When the villain appeared", "When the film broke", each followed by the audience's noisy reaction. This repeated structure builds a rhythm like the stamping it describes.

The fourth paragraph adds honesty, "It was not all innocent fun", but turns on "But" to what the writer learned. The list of lessons ends with a memorable claim, that "three hundred people laughing at the same moment is one of the best sounds in the world", which returns to the theme of sound from the opening.

The final paragraph is short and elegiac. The list of the building's fate, "a bingo hall, then a carpet warehouse, and now it is flats", records a slow decline, and the closing image of the children "stamping our feet in time, waiting for the film to start again" echoes the third paragraph. The phrase "waiting for the film to start again" carries a second meaning: a longing for the past itself to begin once more.`,
            },
            markScheme: [
              'Credit analysis of both language and structure, with references from across Text 1, each linked to its effect on the reader.',
              'Language could include: the exaggeration of the opening and of the noise; the comic portrait of Mr Fenwick and his worn dinner jacket; the cliffhanger images of the serial; the claim that three hundred people laughing is one of the best sounds in the world; the list of what the cinema became.',
              'Structure could include: the short sentence "He never got it." and its comic timing; the reversal when the little brother reminds the writer of their name; the three sentences beginning "When"; the turn on "But" after the admission that it was not all innocent fun; the ending, which echoes the stamping of the third paragraph.',
              ...MARKS_Q3,
            ],
          },
          {
            id: 'edexcel-p2-10-q4',
            questionNumber: 4,
            questionText:
              'Look at the first paragraph of Text 2.\n\nIdentify one place the writer says people used to gather.',
            marks: 1,
            suggestedTimeMinutes: 1,
            questionType: 'retrieval',
            extract: `Text 2:\n${P10_TEXT_2}`,
            extractSource: P10_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7': 'The youth club.',
            },
            markScheme: [
              '1 mark for one correct point.',
              'Accept one of: the youth club; the community hall; the public library, with its Saturday morning reading group.',
            ],
          },
          {
            id: 'edexcel-p2-10-q5',
            questionNumber: 5,
            questionText:
              'Look at the second paragraph of Text 2.\n\nIdentify one detail about the youth club the writer went to.',
            marks: 1,
            suggestedTimeMinutes: 1,
            questionType: 'retrieval',
            extract: `Text 2:\n${P10_TEXT_2}`,
            extractSource: P10_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7': 'It was above a chip shop.',
            },
            markScheme: [
              '1 mark for one correct point.',
              "Accept one of: it was above a chip shop in Wolverhampton; it smelled of sweat, cheap deodorant and table-tennis balls; the carpet was catastrophic; the pool table had a lean; the jukebox played the same thirty songs; it was the most important place in the writer's life.",
            ],
          },
          {
            id: 'edexcel-p2-10-q6',
            questionNumber: 6,
            questionText:
              'In Text 2, the writer sets out to persuade the reader that young people today need shared places where they can simply be together.\n\nEvaluate how well the writer achieves this. Refer closely to the text to support your judgement.',
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'evaluation',
            extract: `Text 2:\n${P10_TEXT_2}`,
            extractSource: P10_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7': `I think the writer is successful in persuading the reader that young people need places to meet, because the article uses personal experience, humour and a strong ending.

At the start, the writer says that places like "The youth club, the community hall" were "the connective tissue of community life". This metaphor shows that they held communities together.

In the second paragraph, the writer describes the youth club in a funny way, saying "The carpet was catastrophic." The writer admits it was "terrible" but says it was "the most important place in my life". This contrast makes the reader see that the place mattered because of the people, not because it was nice.

In the third paragraph, the writer repeats "You learned" to show the skills young people gained, such as learning "to wait your turn". The example of "the quiet kid in the corner" who was good at chess shows how the club helped people get to know each other.

The ending, "We have given them everything except the thing they need most: each other.", is powerful and memorable. However, the writer only uses one example, so the argument would be stronger with more evidence.`,
              'Grade 8-9': `The writer is largely successful, because the article moves from a broad claim, to a vivid and funny personal memory, to an explanation of why that memory matters, and ends with a powerful paradox.

The opening sentence makes a dramatic claim, "The British high street is dying", but the writer quickly narrows the focus to "places where people used to gather for no commercial reason at all". The metaphor of "the connective tissue of community life" presents these places as part of a living body, and the image of "wounds that no amount of online connectivity can heal" makes their loss feel like an injury. The play on "connective" and "connectivity" is neat, suggesting that online connection is a poor substitute for the real thing.

The second paragraph is the most engaging part of the article. The writer's honesty about the youth club is disarming: it smelled of "sweat and cheap deodorant", "The carpet was catastrophic", and the pool table "had a lean that favoured the left-hand cushion". The humour makes the writer likeable, and the admission that it was "by any objective measure, terrible" makes the final claim, that it was "the most important place in my life", all the more striking. The reader is persuaded that its value had nothing to do with its quality.

The third paragraph explains that value. The writer contrasts "the modern, curated, algorithm-driven" kind of entertainment with simple "space", and the repetition of "You learned" introduces specific lessons, "to wait your turn" and "to negotiate, to compromise, to read a room". The example of "the quiet kid in the corner" who "could beat everyone at chess" is especially effective, because it shows how shared spaces let young people see each other differently.

The final paragraph contrasts "infinite entertainment" with "almost no communal space" and ends with the paradox "We have given them everything except the thing they need most: each other." This is a moving conclusion. However, the article relies on one personal memory and gives no evidence about how many such places have closed, or what young people themselves think, so a sceptical reader might feel the argument is nostalgic rather than proven. Even so, it achieves its aim of making the reader value shared spaces.`,
            },
            markScheme: [
              'A clear judgement of how successfully the writer persuades, kept up through the answer and supported by detailed reference to Text 2.',
              'Points that could be evaluated: the broad opening claim and the metaphor of connective tissue and wounds; the honest, funny description of the youth club and the contrast between "terrible" and "the most important place in my life"; the repeated "You learned" and the example of the quiet kid; the closing paradox.',
              'A balanced view is creditable, for example that the argument rests on one memory and no evidence, so it may seem nostalgic.',
              ...MARKS_Q6,
            ],
          },
          {
            id: 'edexcel-p2-10-q7a',
            questionNumber: 7,
            label: '7(a)',
            questionText:
              'Both texts describe places where young people spent time together.\n\nWhat similarities are there between the two places? Support your answer with evidence from both texts.',
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: P10_BOTH,
            extractSource: P10_BOTH_REF,
            modelAnswers: {
              'Grade 6-7':
                'Both places were not very smart. The cinema manager\'s jacket "had seen better days", and the youth club\'s carpet "was catastrophic". Both places were noisy and full of young people having fun together, such as the children who "screamed warnings at the screen" and the teenagers at the jukebox, which played songs that "everyone knew by heart". Both writers also learned how to get on with others: in Text 1 to look after "the smaller ones", and in Text 2 "to wait your turn". Both places have gone or are going: the Regal "closed in 1971", and Text 2 describes the "disappearance" of such places.',
              'Grade 8-9':
                'Both places were shabby but loved. The manager of the Regal wore "a dinner jacket that had seen better days" and the film "often" broke, while the youth club\'s "carpet was catastrophic" and its pool table "had a lean". Both were full of noise and shared rituals: at the Regal the children sang "the club song" and "stamped our feet in time", and at the youth club "the jukebox played the same thirty songs in a rotation that everyone knew by heart". Both writers learned unwritten lessons about getting on with others, the writer of Text 1 learning "that you shared your sweets if you wanted to keep your friends" and the writer of Text 2 learning "to wait your turn" and "to negotiate". Finally, both places have gone or are going: the Regal "closed in 1971" and is now flats, and Text 2 describes "the disappearance of places where people used to gather".',
            },
            markScheme: [
              'Similarities could include: both places were shabby but loved; both were full of noise and shared rituals; both taught unwritten lessons about getting on with others; both have gone or are disappearing.',
              ...MARKS_Q7A,
            ],
          },
          {
            id: 'edexcel-p2-10-q7b',
            questionNumber: 7,
            label: '7(b)',
            questionText:
              'Compare the ideas and perspectives of the two writers about the places where young people meet, and the methods each uses to convey them.\n\nRefer closely to both texts in your answer.',
            marks: 14,
            suggestedTimeMinutes: 18,
            questionType: 'comparison',
            extract: P10_BOTH,
            extractSource: P10_BOTH_REF,
            modelAnswers: {
              'Grade 6-7': `Both writers describe places where young people spent time together, and both think these places were important. The writer of Text 1 remembers the Saturday cinema with joy, saying that "three hundred people laughing at the same moment is one of the best sounds in the world". The writer of Text 2 says the youth club was "the most important place in my life".

Both writers think the place mattered more than the entertainment. In Text 1, "The films themselves hardly mattered", and in Text 2 the club provided "space" rather than entertainment.

However, their purposes are different. The writer of Text 1 is sharing a happy memory and does not argue about the present. The writer of Text 2 uses the memory to argue that "Today's teenagers" have lost something important.

The writers use different methods. Text 1 uses humour and a lot of description, such as the manager in his old "dinner jacket". Text 2 uses metaphors, such as "the connective tissue of community life", and a powerful ending. Overall, Text 1 is nostalgic and personal, while Text 2 is persuasive and serious.`,
              'Grade 8-9': `Both writers believe that shared places, however shabby, taught young people how to live together, but the writer of Text 1 simply remembers such a place with joy, while the writer of Text 2 uses a similar memory to argue that its loss is damaging today's teenagers.

The writer of Text 1 presents the Regal through a child's delight. The focus is on sound and shared emotion, the "noise so tremendous" and "three hundred people laughing at the same moment", and the writer insists that "The films themselves hardly mattered". The writer of Text 2 makes the same point in more analytical language: the youth club provided not "entertainment" but "space: physical, social, psychological space". Both writers, then, value the gathering more than the activity.

Both are honest about the faults of their places, but use the faults differently. Text 1 admits that "It was not all innocent fun", with a fight in the balcony, and this honesty keeps the memory from becoming sentimental. Text 2 lists the youth club's faults for comic effect, "The carpet was catastrophic", to make a point: that it was "terrible" and yet "the most important place in my life".

Their perspectives on the present differ. Text 1 mentions the present only briefly, in the list of the cinema's fate, "a bingo hall, then a carpet warehouse, and now it is flats", and ends in private nostalgia. Text 2 turns its memory into a warning about "Today's teenagers", who have "infinite entertainment and almost no communal space", and ends with a public challenge: "We have given them everything except the thing they need most: each other."

Their methods reflect these purposes. Text 1 is a chronological memoir rich in comic character, such as Mr Fenwick, who held up his hands for silence and "never got it", and in repeated structures, such as the three sentences beginning "When", that recreate the audience's noise. Text 2 is an opinion article that opens with a broad claim about "The British high street", uses metaphors such as "connective tissue", and builds its argument with the repetition of "You learned". Read together, the texts show the same experience twice: once as a memory to treasure, and once as evidence for a cause.`,
            },
            markScheme: [
              'Comparisons could include: both writers believe shared places taught young people how to live together, but Text 1 remembers such a place with joy and Text 2 uses a similar memory to argue that its loss harms teenagers now; both value the gathering more than the activity; both are honest about faults, Text 1 to avoid sentimentality and Text 2 for comic effect; Text 1 ends in private nostalgia, Text 2 in a public challenge; Text 1 uses comic character and repeated structures, Text 2 a broad claim, metaphor and repetition.',
              ...MARKS_Q7B,
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-10-writing',
        title: 'Section B: Transactional Writing',
        description: SECTION_B_ADVICE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p2-10-q8-9',
            questionNumber: 8,
            label: 'Q8 or Q9',
            questionText: `Answer ONE question: either Question 8 or Question 9.\n\nQuestion 8\n\nWrite an article for your local newspaper in which you argue that your town needs more places where young people can meet.\n\nYou could write about:\n• what young people in your area do now\n• why meeting in person matters\n• what kind of places could be provided\nand any other ideas of your own.\n\nOR\n\nQuestion 9\n\n"Watching a film at home will never be as good as seeing it at the cinema."\n\nWrite an article for a film website in which you give your views on this statement.\n\nYou could write about:\n• what the cinema offers\n• the advantages of watching at home\n• how people's viewing habits are changing\nand any other ideas of your own.\n\n${MARKS_WRITING_NOTE}`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 6-7': `Question 8: an article for a local newspaper

Our Town Needs Somewhere for Young People to Go

What do young people in our town do after school? If you ask them, many will tell you the same thing: not much. Since the youth centre on Market Street closed, there has been almost nowhere for teenagers to meet, and I believe this needs to change.

At the moment, most young people either stay at home on their phones or hang around outside the shops. Neither of these is ideal. Spending hours alone online can make young people feel lonely and anxious, and groups of teenagers outside shops are often seen as a problem, even when they are doing nothing wrong.

Meeting in person matters. When young people spend time together face to face, they learn how to make friends, solve disagreements and work as a team. These are skills that cannot be learned through a screen. A safe place to meet would also help young people to stay active and to keep out of trouble.

So what could our town provide? Firstly, the old youth centre could be reopened, with activities such as sports, music and art. Secondly, the empty shop units on the high street could be used as a café or games room run by young people, with support from adult volunteers. Thirdly, the park could have better facilities, such as a covered area where teenagers could meet when it rains.

Some people may say that the council cannot afford these ideas. However, there may be grants and local businesses that would be happy to help. In the long run, investing in young people would benefit the whole community.

In conclusion, our town needs places where young people can meet, talk and have fun together. If we give them somewhere to go, they will show us what they can do.`,
              'Grade 8-9': `Question 9: an article for a film website

The Big Screen or the Sofa? Why the Cinema Still Matters

Let me admit something first. Last night I watched a film on my phone, on the bus, with one earphone in, while the person next to me ate crisps. It was a very good film. I have no idea whether it was a great one, because I did not really see it.

We have never had so many ways to watch films. Streaming services offer thousands of titles each month for less than the price of a cinema ticket, and you can watch them in your pyjamas, pause them whenever you like and never queue for popcorn. It is easy to see why so many people now say that the cinema is a luxury we no longer need. But I believe that watching a film at home, however convenient, will never be as good as seeing it on the big screen.

The first reason is attention. At home, a film competes with everything else: messages, notifications, the washing machine, the urge to check what that actor has been in before. In a cinema, the lights go down, the phones go away and, for two hours, there is nothing but the story. Films are made to be watched like that. Directors spend years choosing every shot and every sound, and a cinema is the only place where you can experience their work as they intended.

The second reason is scale. Some films simply need to be big. A storm at sea, a battle in space or a mountain range at dawn shrinks to nothing on a phone. On a cinema screen, with sound you can feel in your chest, it can take your breath away.

The third reason is other people. There is something special about laughing with a room full of strangers, or hearing the whole audience gasp at the same moment. A cinema turns watching into a shared experience, a little like a concert or a football match. You cannot get that on your own sofa.

Of course, home viewing has real advantages. It is cheaper, more comfortable and easier for families, and it lets us discover films from around the world that our local cinema would never show. I would not want to give it up. But convenience is not the same as quality.

So, by all means, keep your streaming subscription. Just remember to buy a ticket now and then, switch off your phone and let the lights go down. You may be surprised by how much you have been missing.`,
            },
            markScheme: [
              'Question 8 (an article for a local newspaper): a headline and an engaging opening; a clear argument, developed with reasons and examples, for places where young people can meet; specific suggestions; a fair answer to objections such as cost.',
              'Question 9 (an article for a film website): a headline and a voice that suits film fans; a clear view on the statement, developed with reasons and examples; awareness of the advantages of watching at home; a conclusion that draws the argument together.',
              ...MARKS_WRITING,
            ],
          },
        ],
      },
    ],
  },
]
