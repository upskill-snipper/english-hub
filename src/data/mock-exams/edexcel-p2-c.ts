// @ts-nocheck
import type { MockExamPaper } from './types'

/**
 * Pearson Edexcel GCSE English Language Paper 2 (1EN0/02), mock papers 11 to
 * 15: Transport, Fashion, Science, Justice and the Media.
 *
 * RESTRUCTURED 31 October 2026 to Pearson's own paper, as it is set out in
 * src/data/mark-scheme-guides/edexcel-lang-paper2.ts and in the marker's
 * scheme edexcel-lang-paper2 (src/lib/marking/mark-schemes/edexcel-lang.ts),
 * and held there by src/__tests__/a-language-mock-is-the-boards-paper.test.ts.
 *
 * WHAT WAS WRONG. Each paper set reading questions worth 4, 8, 8 and 16 and
 * two writing tasks worth 12 and 16: 64 marks in 105 minutes. Pearson's paper
 * is 96 marks in 2 hours 5 minutes. A student practised an exam that does not
 * exist, and an essay handed to the marker found no question of its worth, so
 * it was given general feedback and no mark.
 *
 * Every Source B was also older than anything Pearson sets on this paper,
 * which reads two 20th or 21st century non-fiction texts: Thackeray's "De
 * Juventute" (1860s), Thoreau's Walden (1854), Huxley's review of the Origin
 * of Species (1860), Dickens's "Criminal Courts" (1836) and Mill's On Liberty
 * (1859).
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
 * Text 2 of each paper is its old Source A, kept with its label: a modern
 * article written for this bank, word for word but for the figures corrected
 * on 31 October (see CHECKED below). Text 1 is new. A real
 * extract was wanted, but src/data/full-texts holds novels, plays and poems
 * and no non-fiction, so each Text 1 is a memoir of the 1950s to the 1970s
 * written for this paper and labelled so. It names no real writer, and the
 * newspaper in the Media paper is invented.
 *
 * Every question, mark scheme and model answer is new and in our own words.
 * The mark schemes follow the guide's "what earns marks" and its levels.
 * Every reading question worth 6 or more has a Grade 6-7 and a Grade 8-9
 * answer, and the writing question has one answer to each task. Every
 * quotation in them is the text's own words.
 *
 * CHECKED 31 October 2026 by a second reader, question by question, against
 * the guide and the texts. The Text 2 articles, written for this bank, stated
 * figures as fact and credited two to real bodies, neither of which published
 * what was credited to it. No real body is named now, and every figure an
 * article keeps was checked against a published source:
 *   - Media: "A 2024 Reuters Institute survey" had 29% of British adults
 *     trusting the news, "the lowest figure since records began", and 16% of
 *     18 to 24 year olds. The Institute's Digital News Report gives UK trust as
 *     36% in 2024 (35% in 2025, 30% in 2026) and no age figure. The text now
 *     says fewer than four in ten, far fewer than a decade ago (more than 15
 *     points below 2016, Digital News Report 2025); Questions 4, 6 and 7(b)
 *     follow it.
 *   - Justice: "A 2023 Ministry of Justice report" had 25% of prisoners from
 *     ethnic minorities against 14% of people. The Ministry's Statistics on
 *     Ethnicity and the Criminal Justice System 2022 (January 2024) has 27% of
 *     prisoners in June 2023 and a population 84% white at the 2021 Census;
 *     14% is the 2011 Census. The uncredited figures beside it were
 *     out of date: stop and search "seven times" (4.2 in the year to March
 *     2023, ethnicity-facts-figures), arrest "three and a half times" (2.2),
 *     Black boys excluded at "three times the rate" (permanent exclusions in
 *     2022/23: Black Caribbean 0.18, White British 0.13, all Black pupils
 *     0.09), and "longer sentences for the same offences" had no source. The
 *     text now says several times, about twice, more than a quarter against
 *     fewer than one in five (18% at the 2021 Census) and more often;
 *     Questions 5, 6 and 7(b) follow it.
 *   - Transport: "227 hours per year behind the wheel" for the average
 *     commuter is in no source found (the TUC's figure, about 220 hours, is
 *     commuting by every means). It is now a commuter with an hour's drive a
 *     day: more than 220 hours, more than nine days.
 *   - Fashion: "sixty new items of clothing per year" is in no source found (a
 *     2019 survey for Thought found 28) and is gone; "seven times" is now "One
 *     survey" (Barnardo's, of women); 350,000 tonnes is WRAP's Valuing Our
 *     Clothes (2012). Question 4 asks for a figure, not a "fact".
 *   - Science: "In 2023 alone" is now "In the last few years": the
 *     hereditary blindness trial reported in 2024. Question 4 follows it.
 * The same reading corrected what the questions and answers said:
 *   - Transport 7(a) asked about "the two writers' experiences", and Text 2
 *     recounts none; it now asks about the journeys and transport described.
 *   - Transport 7(b): "the writer now uses a tram" (the text says only that
 *     one stops at the end of the road) and "done what Text 2 recommends"
 *     (it recommends policy, not selling a car).
 *   - Fashion Question 3: "A hole was not the end of a garment; it was the
 *     beginning of a repair" was called a paradox (it is an antithesis), and
 *     the dress, let out and worn again, "worn until it could not be worn".
 *   - Fashion 7(a): a five-pound T-shirt was evidence of clothes "costing a
 *     great deal compared with what people earn", the opposite of Text 2's
 *     point; it now shows people with little to spend.
 *   - Justice Question 3 and 7(b): "the brisk efficiency of a man catching a
 *     train" was called a simile (it has no like or as), and "eleven cases
 *     before lunch" a short sentence.
 *   - Media Question 6: "By attacking the writer's own profession" claimed
 *     what the text never says, and a quotation closed at "earns trust back."
 *     where the sentence runs on; 7(b) gave "The solution is not censorship."
 *     as the article's solution.
 *   - Science 7(b): "how completely it has been almost completely forgotten".
 *   - Board wording: "Evaluate how successfully this is achieved." (Question
 *     6), "Use evidence from both texts to support your answer." (7(a)),
 *     "Compare how the ... writers present their ideas and perspectives"
 *     (7(b)) and Question 2's "You may use your own words or quotations" are
 *     Pearson's sentences or all but; each is reworded.
 *
 * HISTORY. On 26 September 2026 scripts/check-mock-exam-extracts.mjs found
 * that every Source B here was invented and printed under a real writer's
 * name (Cobbett, Gaskell, Huxley, Dickens and Mill), and the model answers
 * quoted the invented lines back. On 27 September each was replaced by a
 * genuine passage cut by script from Project Gutenberg, and the Source A
 * bylines were marked as invented. Those genuine passages served until this
 * restructure removed them.
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

// ── Exam 11: Transport ────────────────────────────────────────────────────────

const TRANSPORT_TEXT_1 = `My father bought our first car in the summer of 1963. It was eight years old, pale blue, with a dent in the back door that he never had mended, and he had saved for it for longer than I had been alive. When he drove it into our street for the first time, slowly, with his elbow resting on the open window, people came out of their houses to look. Mrs Ellis from number twelve brought her husband out in his slippers. Nobody else in the street owned a car.

Before then, our world had been the size of a bus route. We went where the number 14 went, which was the town centre, the hospital and the cemetery, and once a year we took the train to the seaside with what felt like half the town. Now, my father said, we could go anywhere. On the first Sunday he proved it. We drove to a village none of us had heard of, simply because he liked the sound of its name, and ate sandwiches on a hill with the whole valley spread out below us like a map.

The car changed the shape of our week. On Saturday mornings my father washed it in the street with a bucket of hot soapy water, and I was allowed to dry the hubcaps. On Sundays we went exploring. My mother, who had never learned to drive, sat beside him with the road atlas open on her knees and argued with him about every turning. My sister and I sat in the back, sliding across the seats on the bends, counting red cars and asking, every ten minutes, whether we were nearly there.

Not every trip was a triumph. The car broke down, on average, once a month, and I learned a great many new words standing beside it in lay-bys while my father had his head under the bonnet. On the August bank holiday of 1965 we spent four hours in a queue of traffic on the coast road, inching forward in the heat, and arrived at the beach just in time to turn round and go home.

I sold my own car last year. There is a tram at the end of my road now, and I cannot remember the last time I saw an empty one. But I still think of that first Sunday, when the road ahead of us seemed to go on for ever and my father, for once in his life, did not have to ask anybody's permission to go somewhere new.`

const TRANSPORT_TEXT_1_REF =
  "Specially written for this practice paper (not a published text): a memoir of a family's first car in 1963"

const TRANSPORT_TEXT_2 = `The age of the private car is over. We simply cannot continue to pretend otherwise. Every morning, millions of drivers sit in stationary traffic, engines idling, pumping carbon dioxide into an atmosphere that is already choking. A commuter with an hour's drive to work and back each day spends more than 220 hours a year behind the wheel. That is more than nine full days of life, every year, wasted in a metal box, inching forward at speeds that would embarrass a determined pedestrian.

The solution is not better roads. We have been building roads for seventy years and congestion has only worsened, because every new lane fills with new cars within months. The solution is comprehensive, affordable, reliable public transport - the kind that exists in Vienna, in Tokyo, in Zurich, but which Britain has consistently failed to provide. When the bus costs more than the petrol, when the train arrives forty minutes late and charges you sixty pounds for the privilege, people will drive. They are not selfish. They are rational.

I am not suggesting that we ban cars overnight. I am suggesting that we stop subsidising them. Stop building car parks in city centres. Stop widening motorways. Instead, invest in trams, in cycle lanes, in bus routes that actually go where people need to go. The technology exists. The evidence exists. What is lacking is political courage.`

const TRANSPORT_TEXT_2_REF =
  'Specially written for this practice paper: an opinion article, "Why We Must Rethink the Car", under the invented byline Amira Patel'

const TRANSPORT_BOTH = `Text 1:\n${TRANSPORT_TEXT_1}\n\nText 2:\n${TRANSPORT_TEXT_2}`
const TRANSPORT_BOTH_REF = `Text 1: ${TRANSPORT_TEXT_1_REF} | Text 2: ${TRANSPORT_TEXT_2_REF}`

// ── Exam 12: Fashion ──────────────────────────────────────────────────────────

const FASHION_TEXT_1 = `In our house, clothes were not bought. They arrived. They came down to me from my cousin Margaret, who was two years older and a size bigger, and went on from me to my little sister, who wore them until they could not be worn any more and then watched them become dusters. I was eleven before I owned a coat that nobody else had worn first.

My mother made most of what we wore on a black sewing machine that had belonged to her own mother. It sat on the kitchen table every evening after tea, and I fell asleep most nights to the sound of it, a busy, comforting rattle, like rain on a tin roof. She could turn a pair of my father's old trousers into a skirt for me and a pair of shorts for my brother, with enough left over for a patch. Every sock in the house was darned. Every elbow had been patched at least once. A hole was not the end of a garment; it was the beginning of a repair.

I did not always love this. When I was fifteen, in 1966, every girl in my class wanted the same short dress from a boutique in the town centre, white with a black stripe across the middle, and it cost more than my mother spent on clothes for the whole family in a month. I saved every penny from my Saturday job at the bakery for eleven weeks. When I finally went to buy it, it had sold out. I cried all the way home on the bus.

That night my mother asked me to draw it for her. A week later, without a word, she put a parcel on my bed. Inside was the dress, or something so close to it that nobody at school could tell the difference. She had made it from a remnant she had bought at the market for a few shillings. I wore it until the seams gave way, and then she let them out and I wore it some more.

I have a wardrobe now that would have astonished my mother, and I am ashamed to say that some of the things in it still have their labels on. I have never loved any of them as much as that dress. It was not the most fashionable thing I ever owned, but it was the only one that was made for me.`

const FASHION_TEXT_1_REF =
  'Specially written for this practice paper (not a published text): a memoir of making and mending clothes in the 1950s and 1960s'

const FASHION_TEXT_2 = `Fast fashion is not fashion at all. It is industrialised waste dressed up in a crop top. Every year, the UK sends 350,000 tonnes of clothing to landfill - garments worn once, twice, perhaps never, before being discarded like the packaging they increasingly resemble. One survey of British shoppers found that the average garment is worn just seven times before it is thrown away.

The human cost is equally staggering. In factories across Bangladesh, Cambodia, and Vietnam, workers - predominantly women - stitch garments for twelve hours a day at wages that would not cover a London coffee. The collapse of the Rana Plaza factory in 2013, which killed 1,134 people, briefly shocked the world into attention. Within months, we had returned to our scrolling, our clicking, our next-day deliveries.

I do not blame individuals for buying cheap clothes. When wages are stagnant and the cost of living is soaring, a five-pound T-shirt is not a moral failing - it is economic survival. But I do blame the corporations that have made disposability profitable, and the governments that have allowed them to externalise every cost: environmental, human, moral. The true price of a cheap garment is not printed on its tag.`

const FASHION_TEXT_2_REF =
  'Specially written for this practice paper: an opinion article, "The Real Cost of Cheap Clothes", under the invented byline Priya Sharma'

const FASHION_BOTH = `Text 1:\n${FASHION_TEXT_1}\n\nText 2:\n${FASHION_TEXT_2}`
const FASHION_BOTH_REF = `Text 1: ${FASHION_TEXT_1_REF} | Text 2: ${FASHION_TEXT_2_REF}`

// ── Exam 13: Science ──────────────────────────────────────────────────────────

const SCIENCE_TEXT_1 = `Every summer when I was small, the fear came back with the warm weather. Nobody said the word in front of the children, but we heard it all the same, in lowered voices at the school gate and in the pauses when the grown-ups stopped talking as we came into the room. Polio. Some years the swimming baths closed in August. My mother would not let us go to the fair, or play in the river, or even sit too long in a crowded cinema, and she felt my forehead every morning before breakfast.

In the spring of 1956, a boy in my class called Peter did not come back after the Easter holidays. When he returned, in the autumn, he walked with a metal brace strapped to his left leg, and his mother carried his satchel to the gate. We were curious, and then we were careless, the way children are, and by Christmas we had stopped noticing the brace at all. He became the best goalkeeper in the school. But I never forgot the look on my mother's face when she first saw him limping across the playground.

The vaccine reached our school when I was nine. We queued in the hall in our vests, in alphabetical order, and a nurse with cold hands and a kind voice gave each of us an injection in the top of the arm. Some of the boys cried; one fainted, to everybody's great delight. Afterwards we were given a biscuit and sent back to our lessons as if nothing had happened. A few years later my little brother had his dose on a sugar lump, which seemed to me very unfair.

What I remember most is not the needle but my mother's face that evening. She did not say much. She simply stood at the kitchen sink for a long time, looking out of the window, and then she hugged me, hard, for no reason that I understood. I understand it now. She had spent nine summers afraid, and she would never have to be afraid in that way again. Nobody had to pay for it. Every child in the country had the same chance.

My grandchildren have never heard of polio. When I tell them about Peter and the brace, they listen politely, as if I were describing the Middle Ages. I think that is the greatest compliment anyone could pay to the scientists who made that vaccine: that the thing they defeated has been almost completely forgotten.`

const SCIENCE_TEXT_1_REF =
  'Specially written for this practice paper (not a published text): a memoir of the arrival of the polio vaccine in the 1950s'

const SCIENCE_TEXT_2 = `We are living through a revolution in genetic science that most people have barely noticed. CRISPR gene-editing technology - a tool that allows scientists to cut, paste, and rewrite DNA with extraordinary precision - has advanced so rapidly that the ethical frameworks meant to govern it have been left gasping in the dust. In the last few years, clinical trials using CRISPR have successfully treated sickle cell disease, certain cancers, and a form of hereditary blindness. The results were not incremental. They were transformative.

The potential is staggering. Genetic diseases that have caused immeasurable suffering for millennia could, within a generation, be eliminated entirely. Cystic fibrosis. Huntington's disease. Muscular dystrophy. These are not abstract possibilities. They are active research programmes with promising early results.

But here is where the conversation becomes uncomfortable. The same technology that can cure disease can also enhance ability. Stronger muscles. Sharper cognition. Resistance to ageing. If we can edit out a genetic disorder, we can, in principle, edit in an advantage. And if that technology is expensive - as all new medical technology initially is - then we face the prospect of a world in which the wealthy can literally buy better genes for their children. The gap between rich and poor would become not merely economic but biological. This is not science fiction. This is science fact, five to ten years away.`

const SCIENCE_TEXT_2_REF =
  'Specially written for this practice paper: an opinion article, "The Gene Revolution", under the invented byline Professor James Chen'

const SCIENCE_BOTH = `Text 1:\n${SCIENCE_TEXT_1}\n\nText 2:\n${SCIENCE_TEXT_2}`
const SCIENCE_BOTH_REF = `Text 1: ${SCIENCE_TEXT_1_REF} | Text 2: ${SCIENCE_TEXT_2_REF}`

// ── Exam 14: Justice ──────────────────────────────────────────────────────────

const JUSTICE_TEXT_1 = `My first job, in the autumn of 1968, was as a junior reporter on our town's weekly paper, and my first duty every Monday was the magistrates' court. The editor, a gruff man who smoked a pipe even in the lift, gave me a notebook, two pencils and a single piece of advice: "Write down what happens. Not what you think about it. What happens."

The court sat in a high, cold room that smelled of floor polish. Three magistrates sat on a raised bench beneath the royal coat of arms, and the chairman, a retired bank manager with a silver moustache, ran proceedings with the brisk efficiency of a man catching a train. On my first morning the court dealt with eleven cases before lunch. Most took less than five minutes. A man had stolen a sack of coal from a railway yard. A woman had taken a pair of children's shoes from a market stall. A boy of seventeen had been found asleep in a shop doorway and charged with being a vagrant. None of them had a lawyer. Most of them, as far as I could tell, did not fully understand what was happening, and nobody stopped to explain.

In the afternoon a young man arrived in a good suit with his father and a solicitor. He had driven his car into a wall after a party and injured his passenger. His solicitor spoke for twenty minutes about his studies, his excellent character and his bright future, and the chairman listened with every sign of sympathy. He was fined and allowed to go home. The woman who had taken the shoes was fined too, but she could not pay, and when I asked the clerk what would happen to her, he shrugged and said that she would probably go to prison for a week.

I wrote it all down, exactly as the editor had told me. I did not write what I thought, because I was not sure what I thought. Nobody in that room had been cruel. The chairman was polite to everyone. The rules, as far as I could see, had been followed. And yet I walked home that evening feeling that I had watched something go badly wrong, quietly, in a room where everybody was doing their job.

I reported from that court for three years, and I grew used to it, which is perhaps the worst thing I can say. But I have never forgotten the woman and the shoes, or the young man in the good suit, who walked out into the sunshine as if nothing very much had happened.`

const JUSTICE_TEXT_1_REF =
  "Specially written for this practice paper (not a published text): a memoir of reporting from a magistrates' court in 1968"

const JUSTICE_TEXT_2 = `The British criminal justice system is not broken. It was built this way. It was designed, over centuries, by and for the privileged, and it continues to serve their interests with remarkable efficiency. If you are wealthy, white, and well-connected, the system offers you representation, mitigation, and second chances. If you are poor, Black, and unknown, it offers you a cell.

The statistics are unambiguous. Black people in England and Wales are several times more likely to be stopped and searched than white people. They are about twice as likely to be arrested. More than a quarter of prisoners come from Black, Asian, mixed or other ethnic groups, although those groups make up fewer than one in five people in England and Wales.

I am not suggesting that every police officer is racist or that every judge is biased. The problem is structural, not individual. It is embedded in the algorithms that predict reoffending, in the postcode-based policing that floods deprived areas with officers, in the school-to-prison pipeline that excludes Black Caribbean pupils more often than their white classmates. Reform is not enough. We need to reimagine what justice means - and for whom.`

const JUSTICE_TEXT_2_REF =
  'Specially written for this practice paper: an opinion article, "Justice for Whom?", under the invented byline Marcus Thompson'

const JUSTICE_BOTH = `Text 1:\n${JUSTICE_TEXT_1}\n\nText 2:\n${JUSTICE_TEXT_2}`
const JUSTICE_BOTH_REF = `Text 1: ${JUSTICE_TEXT_1_REF} | Text 2: ${JUSTICE_TEXT_2_REF}`

// ── Exam 15: The Media ────────────────────────────────────────────────────────

const MEDIA_TEXT_1 = `For thirty-one years my father edited the Wellsby Gazette, a newspaper so small that it was written, sub-edited, laid out and very nearly delivered by six people in two rooms above a hardware shop. It came out every Thursday. In our house, Wednesday night was press night, and nobody spoke to my father after six o'clock unless the building was on fire.

He had one rule, and it was pinned above every desk in the office in his own handwriting: "Get it right. Then get it out." A reporter who brought him a story was asked three questions. Who told you? How do they know? Who else have you asked? If the answer to the last question was nobody, the story did not run. I once watched him hold back a front page for a whole week, while every other paper in the county printed the rumour, because he could not find a second person to confirm it. The rumour turned out to be false.

People trusted the Gazette in a way that is hard to imagine now. They did not always like it. The council complained about it, the football club complained about it, and Mrs Bellamy wrote to complain about the crossword every single week for nineteen years. But when the river flooded in 1974, it was the Gazette that people bought to find out which roads were closed and where the sandbags were, and they believed every word, because they had learned that it did not print words it could not stand behind.

It did get things wrong, of course. In 1979 it reported that a local man had died, when in fact he had only moved to Bournemouth. My father drove to Bournemouth to apologise in person, and the following Thursday the correction ran on the front page, in the same size type as the original mistake. "If we are going to be wrong in big letters," he said, "we will be sorry in big letters too."

The Gazette closed in 2009, a few years after my father retired. Fewer people bought it, the advertisers moved online, and in the end it was simply cheaper not to print it. I do not think he would have understood the news as it is now, with its rumours that travel round the world before lunch. But I think he would have recognised the problem at once. People will believe a newspaper only for as long as it deserves to be believed.`

const MEDIA_TEXT_1_REF =
  'Specially written for this practice paper (not a published text): a memoir of a parent who edited a small, invented weekly newspaper from the 1970s'

const MEDIA_TEXT_2 = `Trust in journalism is collapsing, and journalists have only themselves to blame. Fewer than four in ten British adults now say that they trust most news most of the time, far fewer than a decade ago. Millions of people have decided that the mainstream press is not worth believing, and the consequences for democracy are profound.

The causes are not mysterious. Decades of phone hacking, of invented quotes, of front pages designed to inflame rather than inform, have eroded the moral authority that journalism once claimed. The tabloid press, in particular, has treated truth as an optional extra - something to be deployed when convenient and discarded when it interferes with a good story. The Leveson Inquiry exposed the rot, but the recommended reforms were quietly shelved, and the industry returned to business as usual.

Meanwhile, social media has created a parallel information ecosystem in which anyone can publish anything, and the most outrageous claims travel fastest. Into this vacuum of trust, conspiracy theories, misinformation, and propaganda have flooded with devastating effect. The solution is not censorship. The solution is journalism that earns trust back - through accuracy, accountability, and a willingness to admit when it gets things wrong.`

const MEDIA_TEXT_2_REF =
  'Specially written for this practice paper: an opinion article, "Who Killed Trust?", under the invented byline Rachel Okonkwo'

const MEDIA_BOTH = `Text 1:\n${MEDIA_TEXT_1}\n\nText 2:\n${MEDIA_TEXT_2}`
const MEDIA_BOTH_REF = `Text 1: ${MEDIA_TEXT_1_REF} | Text 2: ${MEDIA_TEXT_2_REF}`

// ─── Exam Papers ────────────────────────────────────────────────────────────

export const edexcelP2C: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 11: Transport
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p2-11',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-fiction and Transactional Writing',
    subtitle: 'English Language 1EN0/02',
    code: '1EN0/02',
    totalTimeMinutes: 125,
    totalMarks: 96,
    sections: [
      {
        id: 'edexcel-p2-11-reading',
        title: 'Section A: Reading',
        description: `${SECTION_A_ADVICE}\n\nText 1: ${TRANSPORT_TEXT_1_REF}\nText 2: ${TRANSPORT_TEXT_2_REF}\n\nGlossary for Text 1: hubcaps: the metal covers on the centre of a car's wheels; road atlas: a book of road maps; lay-bys: places at the side of a road where vehicles can stop; bonnet: the cover over a car's engine. Glossary for Text 2: subsidising: helping to pay for.`,
        totalMarks: 56,
        suggestedTimeMinutes: 80,
        questions: [
          {
            id: 'edexcel-p2-11-q1',
            questionNumber: 1,
            questionText:
              "Look at the first paragraph of Text 1.\n\nIdentify two details about the family's first car.",
            marks: 2,
            suggestedTimeMinutes: 2,
            questionType: 'retrieval',
            extract: TRANSPORT_BOTH,
            extractSource: TRANSPORT_BOTH_REF,
            modelAnswers: {
              'Grade 6-7': '1. It was pale blue.\n2. It had a dent in the back door.',
            },
            markScheme: [
              '1 mark for each correct point, up to 2.',
              'Accept any two of: it was eight years old; it was pale blue; it had a dent in the back door that was never mended; the father had saved for it for years; nobody else in the street owned a car.',
              "A word, a short phrase or the student's own words is enough.",
            ],
          },
          {
            id: 'edexcel-p2-11-q2',
            questionNumber: 2,
            questionText:
              'Read the third paragraph of Text 1, beginning "The car changed the shape of our week."\n\nGive two things the family did with or in the car.\n\nYou may answer in your own words or with quotations.',
            marks: 2,
            suggestedTimeMinutes: 2,
            questionType: 'retrieval',
            extract: `Text 1:\n${TRANSPORT_TEXT_1}`,
            extractSource: TRANSPORT_TEXT_1_REF,
            modelAnswers: {
              'Grade 6-7':
                '1. The father washed it on Saturday mornings, and the writer was "allowed to dry the hubcaps".\n2. On Sundays they "went exploring".',
            },
            markScheme: [
              '1 mark for each correct point, up to 2. The two points must be different.',
              'Accept: the father washed it in the street on Saturday mornings; the writer dried the hubcaps; they went exploring on Sundays; the mother read the road atlas and argued about the turnings; the children counted red cars; the children kept asking whether they were nearly there.',
              "Quotations and the student's own words both count.",
            ],
          },
          {
            id: 'edexcel-p2-11-q3',
            questionNumber: 3,
            questionText:
              "Analyse how the writer of Text 1 uses language and structure to hold the reader's interest.\n\nRefer closely to the text to support your views.",
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'analysis',
            extract: `Text 1:\n${TRANSPORT_TEXT_1}`,
            extractSource: TRANSPORT_TEXT_1_REF,
            modelAnswers: {
              'Grade 6-7': `The writer makes the memoir interesting by showing how exciting the family's first car was and how it changed their lives.

In the first paragraph, the writer describes the car in detail: it was "pale blue, with a dent in the back door". The father had saved for it "for longer than I had been alive", which shows how important it was to him. The neighbours came out to look, and the short sentence "Nobody else in the street owned a car." explains why it was such a big event.

In the second paragraph, the writer uses a metaphor: "our world had been the size of a bus route". This shows how limited their lives were before. The simile "like a map" describes the view from the hill and shows the new freedom the car gave them.

The third paragraph describes the family's routine, such as washing the car and arguing about directions. The children asking "whether we were nearly there" is funny and familiar.

The structure changes in the fourth paragraph with "Not every trip was a triumph." The writer describes the car breaking down and a traffic jam that lasted "four hours". This makes the memoir honest.

At the end, the writer moves to the present and says "I sold my own car last year." However, the writer still remembers the first Sunday fondly, when the road "seemed to go on for ever". This shows that the car meant freedom to the family.`,
              'Grade 8-9': `The writer interests the reader by presenting the family's first car as the start of an adventure, recreating its excitement through humour and detail, and then ending with a reflection that shows how much has changed.

The first paragraph builds the arrival of the car into a public event. The precise, affectionate details, "eight years old, pale blue, with a dent in the back door that he never had mended", make the car seem modest, which makes the father's pride more touching: he had saved for it "for longer than I had been alive". The image of him driving in "slowly, with his elbow resting on the open window" shows him savouring the moment, and the comic detail of Mrs Ellis bringing "her husband out in his slippers" shows the whole street's excitement. The short final sentence, "Nobody else in the street owned a car.", explains why.

The second paragraph uses a metaphor to show how small life had been: "our world had been the size of a bus route". The list of where the number 14 went, "the town centre, the hospital and the cemetery", is darkly funny, suggesting that the bus served only the necessities of life and death. The father's promise, "we could go anywhere", is then proved by an anecdote, and the simile of the valley "spread out below us like a map" captures a new sense of freedom and possibility.

The third paragraph opens with a topic sentence, "The car changed the shape of our week.", and the details of the weekly routine, washing the car with "a bucket of hot soapy water" and arguing over "every turning", create a warm picture of family life. The children "sliding across the seats on the bends" and asking "whether we were nearly there" are details many readers will recognise.

The fourth paragraph turns to honesty: "Not every trip was a triumph." The comic understatement that the writer "learned a great many new words" beside the broken-down car is gently funny, and the bank-holiday jam, "inching forward in the heat", ends with the anticlimax of arriving "just in time to turn round and go home".

The final paragraph shifts abruptly to the present: "I sold my own car last year." The tram that is never empty hints at a changed world, but the writer returns to the memory of the first Sunday, when "the road ahead of us seemed to go on for ever". The closing phrase, that the father "did not have to ask anybody's permission to go somewhere new", reveals what the car really meant: not speed or status, but freedom.`,
            },
            markScheme: [
              'Credit analysis of both language and structure, with references from across Text 1, each linked to its effect on the reader.',
              'Language could include: the modest, affectionate description of the car; the comic detail of the neighbour in his slippers; the metaphor of a world "the size of a bus route" and the darkly funny list of where the bus went; the simile of the valley spread out like a map; the comic understatement about learning new words.',
              'Structure could include: the arrival of the car as a public event, ended by a short sentence; the topic sentence that opens the third paragraph; the turn to honesty with "Not every trip was a triumph."; the anticlimax of the bank-holiday trip; the shift to the present, and the final sentence that reveals what the car meant.',
              ...MARKS_Q3,
            ],
          },
          {
            id: 'edexcel-p2-11-q4',
            questionNumber: 4,
            questionText:
              'Look at the first paragraph of Text 2.\n\nIdentify one problem with driving that the writer describes.',
            marks: 1,
            suggestedTimeMinutes: 1,
            questionType: 'retrieval',
            extract: `Text 2:\n${TRANSPORT_TEXT_2}`,
            extractSource: TRANSPORT_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7': 'Drivers sit in stationary traffic every morning.',
            },
            markScheme: [
              '1 mark for one correct point.',
              'Accept one of: millions of drivers sit in stationary traffic; idling engines pump carbon dioxide into the atmosphere; a commuter with an hour of driving a day spends more than 220 hours a year behind the wheel, more than nine days; cars inch forward slower than a walker.',
            ],
          },
          {
            id: 'edexcel-p2-11-q5',
            questionNumber: 5,
            questionText:
              'Look at the second paragraph of Text 2.\n\nIdentify one reason the writer gives for why people choose to drive.',
            marks: 1,
            suggestedTimeMinutes: 1,
            questionType: 'retrieval',
            extract: `Text 2:\n${TRANSPORT_TEXT_2}`,
            extractSource: TRANSPORT_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7': 'The bus costs more than the petrol.',
            },
            markScheme: [
              '1 mark for one correct point.',
              'Accept one of: the bus costs more than the petrol; the train arrives forty minutes late; the train charges sixty pounds; Britain has failed to provide affordable, reliable public transport.',
            ],
          },
          {
            id: 'edexcel-p2-11-q6',
            questionNumber: 6,
            questionText:
              'In Text 2, the writer sets out to persuade the reader that Britain must depend less on the private car.\n\nEvaluate how well the writer achieves this. Refer closely to the text to support your judgement.',
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'evaluation',
            extract: `Text 2:\n${TRANSPORT_TEXT_2}`,
            extractSource: TRANSPORT_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7': `I think the writer is quite successful in persuading the reader that we should rely less on cars, because the article uses a strong opening, a striking figure and clear suggestions.

The article begins with a bold statement: "The age of the private car is over." This grabs the reader's attention. The writer then describes drivers sitting in "stationary traffic", which reminds readers of how frustrating traffic jams are.

The figure that a commuter who drives for an hour a day spends "more than 220 hours a year behind the wheel" is shocking, especially when the writer explains that this is "more than nine full days of life". This makes the reader feel that driving wastes their time.

In the second paragraph, the writer explains that public transport is too expensive and unreliable, using examples such as the train that "arrives forty minutes late". The writer does not blame drivers, saying "They are not selfish. They are rational." This is effective because drivers reading the article will not feel attacked.

At the end, the writer gives clear suggestions, such as investing "in trams, in cycle lanes". The final sentence, "What is lacking is political courage", is a strong ending. However, the writer does not explain how people in the countryside would manage without cars, so the argument is not completely convincing.`,
              'Grade 8-9': `The writer is largely successful, because the article combines a dramatic opening, a vivid picture of wasted time, a clear explanation of why drivers drive, and a set of practical demands, although some of its claims are stated more boldly than they are supported.

The opening sentence, "The age of the private car is over.", is deliberately sweeping, and the next, "We simply cannot continue to pretend otherwise.", makes disagreement seem like self-deception. The image of drivers "pumping carbon dioxide into an atmosphere that is already choking" personifies the atmosphere as a suffering body, which adds urgency. The figure of "more than 220 hours a year", made more vivid as "more than nine full days of life", turns a number into a loss the reader can feel, and the comic image of speeds "that would embarrass a determined pedestrian" ridicules the car's supposed advantage.

The second paragraph is persuasive because it anticipates the obvious answer, building more roads, and rejects it: "every new lane fills with new cars within months". The list of cities, "Vienna, in Tokyo, in Zurich", suggests that better public transport is possible, and the examples of the bus that "costs more than the petrol" and the train that "arrives forty minutes late" are familiar to many readers. Most cleverly, the writer refuses to blame drivers: "They are not selfish. They are rational." This short pair of sentences wins over readers who drive and might otherwise feel attacked.

The third paragraph moves from criticism to action. The concession "I am not suggesting that we ban cars overnight" makes the writer seem reasonable, and the repeated commands "Stop building car parks" and "Stop widening motorways" give the reader clear demands. The final three sentences, "The technology exists. The evidence exists. What is lacking is political courage.", end with a confident challenge to those in power.

However, the article is weaker in places. The claim that the car's age "is over" is contradicted by the writer's own description of millions still driving, and the "evidence" mentioned at the end is never actually given. For readers in the countryside, where buses are rare, the argument may also seem written for cities only. Even so, as a short, energetic piece designed to change minds, it is convincing.`,
            },
            markScheme: [
              'A clear judgement of how successfully the writer persuades, kept up through the answer and supported by detailed reference to Text 2.',
              'Points that could be evaluated: the sweeping opening and the image of a choking atmosphere; the figure of more than 220 hours a year turned into more than nine days of life; the rejection of road building and the examples of costly, late public transport; the refusal to blame drivers; the concession and the repeated commands; the closing challenge about political courage.',
              'A balanced view is creditable, for example that the evidence mentioned at the end is never given, or that the argument ignores places where buses are rare.',
              ...MARKS_Q6,
            ],
          },
          {
            id: 'edexcel-p2-11-q7a',
            questionNumber: 7,
            label: '7(a)',
            questionText:
              'Both texts describe travelling by car and other ways of getting about.\n\nWhat similarities are there between the journeys and the kinds of transport the two texts describe? Support each point with evidence from both texts.',
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: TRANSPORT_BOTH,
            extractSource: TRANSPORT_BOTH_REF,
            modelAnswers: {
              'Grade 6-7':
                'Both texts describe being stuck in traffic. In Text 1 the family spent "four hours in a queue of traffic", and in Text 2 drivers "sit in stationary traffic" every morning. Both writers also describe public transport that did not meet people\'s needs: in Text 1 the bus only went to "the town centre, the hospital and the cemetery", and in Text 2 the bus "costs more than the petrol". Both also mention trams, which the writer of Text 1 now has "at the end of my road" and which the writer of Text 2 wants more of.',
              'Grade 8-9':
                'Both writers describe time lost in traffic, and both use the same image of crawling cars: in Text 1 the family spent "four hours in a queue of traffic on the coast road, inching forward in the heat", and in Text 2 commuters spend their mornings "inching forward at speeds that would embarrass a determined pedestrian". Both suggest that buses have not served people well: before the car, the family\'s world "had been the size of a bus route", going only to "the town centre, the hospital and the cemetery", and Text 2 calls for "bus routes that actually go where people need to go". Both mention trams as the alternative, the writer of Text 1 having "a tram at the end of my road now" and the writer of Text 2 urging investment "in trams". Finally, both show that people choose cars for good reasons: the father wanted the freedom "to go somewhere new", and Text 2 insists that drivers "are rational".',
            },
            markScheme: [
              'Similarities could include: time lost in traffic, described in both as inching forward; buses that do not go where people need; trams as the alternative; people choosing cars for good reasons.',
              ...MARKS_Q7A,
            ],
          },
          {
            id: 'edexcel-p2-11-q7b',
            questionNumber: 7,
            label: '7(b)',
            questionText:
              "Compare the two writers' ideas and perspectives about the car, and how each writer conveys them.\n\nRefer closely to both texts in your answer.",
            marks: 14,
            suggestedTimeMinutes: 18,
            questionType: 'comparison',
            extract: TRANSPORT_BOTH,
            extractSource: TRANSPORT_BOTH_REF,
            modelAnswers: {
              'Grade 6-7': `Both writers write about cars, but they have different perspectives. The writer of Text 1 sees the car as a source of freedom and fun. When it arrived, the father said "we could go anywhere", and the family went exploring every Sunday. The writer of Text 2 sees cars as a problem, describing drivers stuck in "a metal box" and causing pollution.

Both writers mention traffic jams. In Text 1 the family spent "four hours in a queue of traffic", and in Text 2 a commuter can spend "more than 220 hours a year behind the wheel". However, Text 1 treats the jam as a funny memory, while Text 2 treats traffic as a serious waste of time.

Both writers also mention public transport. In Text 1 the bus only went to a few places, and the writer now has "a tram at the end of my road". In Text 2 the writer argues that we should "invest in trams".

The writers use different methods. Text 1 is a memoir that tells a story in order, with humour and description. Text 2 is an argument that uses a striking figure and a strong ending. Overall, Text 1 is nostalgic about cars, while Text 2 wants people to use them less.`,
              'Grade 8-9': `Both writers recognise that cars bring problems, but the writer of Text 1 remembers the car above all as freedom, while the writer of Text 2 sees it as waste and pollution.

For the writer of Text 1, the car opened up the world. Before it, life "had been the size of a bus route"; afterwards, the father could say "we could go anywhere", and the first Sunday's view, "spread out below us like a map", is an image of possibility. The car also brought the family together, with the mother and her "road atlas" and the children "counting red cars". The writer of Text 2 sees the opposite: not a family adventure but millions of people alone in "a metal box", wasting "more than nine full days of life" each year and "pumping carbon dioxide into an atmosphere that is already choking".

Yet the writers are closer than they first appear. Text 1 is honest about the car's faults: it "broke down, on average, once a month", and the bank-holiday jam left the family "inching forward in the heat", the same image Text 2 uses for commuters "inching forward" today. And the writer of Text 1 has, in the end, given up the car, as Text 2 would wish: "I sold my own car last year." Equally, Text 2 does not attack drivers, insisting "They are not selfish. They are rational", which echoes the father's very rational wish to escape the limits of the bus.

Their methods differ. Text 1 is a nostalgic memoir, structured chronologically from the car's arrival to the writer's own decision to give one up, and rich in comic and affectionate detail, such as the neighbour "in his slippers". Its final sentence reveals the emotional meaning of the car: the father "did not have to ask anybody's permission to go somewhere new". Text 2 is a persuasive opinion article that opens with a sweeping claim, "The age of the private car is over.", uses a striking figure and examples from other cities, and ends with commands and a challenge about "political courage".

Read together, the texts show how attitudes have changed over sixty years: the car that once meant freedom has become, for many, the very thing that wastes their time.`,
            },
            markScheme: [
              "Comparisons could include: Text 1 remembers the car as freedom and family adventure, Text 2 sees it as waste and pollution; both admit its faults, and both describe traffic inching forward; the writer of Text 1 has given up a car, as Text 2 would wish; Text 2 refuses to blame drivers, echoing the father's wish to escape the bus; Text 1 is a chronological memoir of comic and affectionate detail, Text 2 an argument of a striking figure, examples and commands.",
              ...MARKS_Q7B,
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-11-writing',
        title: 'Section B: Transactional Writing',
        description: SECTION_B_ADVICE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p2-11-q8-9',
            questionNumber: 8,
            label: 'Q8 or Q9',
            questionText: `Answer ONE question: either Question 8 or Question 9.\n\nQuestion 8\n\nWrite a letter to your local council in which you argue for safer ways for students to walk or cycle to school.\n\nYou could write about:\n• how students travel to school now\n• the dangers and difficulties they face\n• changes that would help\nand any other ideas of your own.\n\nOR\n\nQuestion 9\n\n"Cars should be banned from town and city centres."\n\nWrite a speech for a debate at your school or college in which you argue for or against this statement.\n\nYou could write about:\n• the effects of traffic on town and city centres\n• who would gain and who would lose from a ban\n• other ways of solving the problem\nand any other ideas of your own.\n\n${MARKS_WRITING_NOTE}`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 6-7': `Question 8: a letter to the council

Dear Councillor Patel,

I am writing to ask the council to make it safer for students to walk and cycle to Greenhill School. At the moment, many of us would like to travel actively, but the roads near our school make it difficult and dangerous.

Most students at my school either come by car or by bus. The roads outside the school gates are extremely busy at the start and end of the day, with parents' cars parked on the pavement and on the zigzag lines. This makes it hard for pedestrians to see oncoming traffic when they cross the road.

There are several dangers for students who walk or cycle. Fernhill Road, which many of us use, has no cycle lane, and the traffic moves very fast. There is no crossing near the bus stop, so students often run across the road between cars. Last term, a Year 8 student was nearly hit by a van while crossing, and many parents now refuse to let their children walk to school alone.

I believe some simple changes would make a big difference. Firstly, a pedestrian crossing could be built outside the school. Secondly, a cycle lane on Fernhill Road would allow students to cycle safely. Thirdly, the council could introduce a 20 mph speed limit around the school and stop cars from parking near the gates at busy times.

These changes would have many benefits. More students would walk and cycle, which would keep us fit and healthy. There would also be less traffic and pollution around the school, which would help everyone who lives nearby.

Thank you for taking the time to read my letter. I hope that you will consider these suggestions and help make our journey to school safer.

Yours sincerely,

Daniel Okoro`,
              'Grade 8-9': `Question 9: a speech for a debate, against the statement

Good afternoon, everyone.

Close your eyes for a moment and picture our high street at half past eight on a weekday. You can hear it, can't you? The growl of engines, the hiss of a bus pulling away, the horn of a driver who has been waiting at the lights for too long. You can smell it too. Now imagine the same street with no cars at all: children walking safely, cafés putting tables on the pavement, the sound of conversation instead of traffic. It is a lovely picture. But I am here to argue against the motion, because a total ban on cars in town centres would hurt the very people it is meant to help.

Let me begin with those who have no choice. My grandmother is eighty-three and walks with a stick. She cannot manage the bus with her shopping, and she certainly cannot cycle. For her, and for thousands of disabled people, carers and parents with young children, the car is not a luxury. It is the only way they can reach the doctor, the bank or the shops. A ban would not free them. It would shut them out.

Then there are the businesses. Our town centre is already struggling, with empty shops on every corner. Many shoppers drive in from villages where the bus comes twice a day, if at all. Ban their cars and they will not take the bus; they will drive to an out-of-town retail park instead, or shop online. The result would be quieter streets, certainly, but also more boarded-up windows and fewer jobs.

My opponents will say that pollution and congestion are too serious to ignore, and they are right. I am not defending the traffic jam. I am arguing that a ban is the wrong tool. There are better ones. We could make the centre of town free for buses and bicycles, while keeping access for disabled drivers and deliveries. We could build park-and-ride sites on the edge of town, so that visitors leave their cars outside and finish the journey by bus. We could make public transport so cheap, frequent and reliable that most people would choose to leave the car at home. Many cities have done exactly this, and they did it by offering people something better, not by taking something away.

Change works when it brings people with it. Ban cars overnight, and you will win the argument in this room and lose it everywhere else. Make the alternatives so good that nobody wants to drive, and you will win it for good.

So I ask you to vote against the motion, and for a smarter way to make our town centres cleaner, safer and busier. Thank you.`,
            },
            markScheme: [
              'Question 8 (a letter to the council): a suitable greeting and sign-off and a formal register; a clear account of how students travel and the dangers they face, with examples; practical, developed suggestions; a clear statement of the benefits.',
              'Question 9 (a speech for a debate): a clear position for or against the statement, sustained throughout; spoken features such as direct address and rhetorical questions; developed reasons about who would gain and who would lose; alternative solutions and an answer to the other side.',
              ...MARKS_WRITING,
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 12: Fashion
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p2-12',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-fiction and Transactional Writing',
    subtitle: 'English Language 1EN0/02',
    code: '1EN0/02',
    totalTimeMinutes: 125,
    totalMarks: 96,
    sections: [
      {
        id: 'edexcel-p2-12-reading',
        title: 'Section A: Reading',
        description: `${SECTION_A_ADVICE}\n\nText 1: ${FASHION_TEXT_1_REF}\nText 2: ${FASHION_TEXT_2_REF}\n\nGlossary for Text 1: darned: mended by weaving thread across a hole; boutique: a small, fashionable clothes shop; remnant: a piece of cloth left over at the end of a roll; shillings: coins of the time. Glossary for Text 2: stagnant: not rising; externalise every cost: make other people pay the costs.`,
        totalMarks: 56,
        suggestedTimeMinutes: 80,
        questions: [
          {
            id: 'edexcel-p2-12-q1',
            questionNumber: 1,
            questionText:
              "Look at the first paragraph of Text 1.\n\nIdentify two things that happened to clothes in the writer's family.",
            marks: 2,
            suggestedTimeMinutes: 2,
            questionType: 'retrieval',
            extract: FASHION_BOTH,
            extractSource: FASHION_BOTH_REF,
            modelAnswers: {
              'Grade 6-7':
                "1. They were passed down from the writer's cousin Margaret.\n2. When they could not be worn any more, they became dusters.",
            },
            markScheme: [
              '1 mark for each correct point, up to 2.',
              'Accept any two of: they came down from cousin Margaret; they were passed on to the little sister; they were worn until they could not be worn any more; they became dusters.',
              "A word, a short phrase or the student's own words is enough.",
            ],
          },
          {
            id: 'edexcel-p2-12-q2',
            questionNumber: 2,
            questionText:
              'Read the second paragraph of Text 1, beginning "My mother made most of what we wore".\n\nGive two ways in which the writer\'s mother made clothes last.\n\nYou may answer in your own words or with quotations.',
            marks: 2,
            suggestedTimeMinutes: 2,
            questionType: 'retrieval',
            extract: `Text 1:\n${FASHION_TEXT_1}`,
            extractSource: FASHION_TEXT_1_REF,
            modelAnswers: {
              'Grade 6-7':
                '1. She turned "a pair of my father\'s old trousers into a skirt for me and a pair of shorts for my brother".\n2. "Every sock in the house was darned."',
            },
            markScheme: [
              '1 mark for each correct point, up to 2. The two points must be different.',
              'Accept: she made old trousers into a skirt and shorts; she used what was left over for patches; she darned every sock; she patched elbows; she repaired holes rather than throwing clothes away.',
              "Quotations and the student's own words both count.",
            ],
          },
          {
            id: 'edexcel-p2-12-q3',
            questionNumber: 3,
            questionText:
              "Analyse how the writer of Text 1 uses language and structure to hold the reader's interest.\n\nRefer closely to the text to support your views.",
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'analysis',
            extract: `Text 1:\n${FASHION_TEXT_1}`,
            extractSource: FASHION_TEXT_1_REF,
            modelAnswers: {
              'Grade 6-7': `The writer makes the memoir interesting by describing a childhood of hand-me-down clothes and telling a touching story about a dress.

The memoir begins with two short sentences: "In our house, clothes were not bought. They arrived." This is a funny way of saying that the clothes came from other people. The writer explains that clothes were worn until they "become dusters", which shows that nothing was wasted.

In the second paragraph, the writer describes the mother's sewing machine with a simile, "like rain on a tin roof", which makes the sound seem comforting. The repetition of "Every sock" and "Every elbow" shows how much mending the mother did.

The third paragraph begins with "I did not always love this.", which tells us the writer sometimes wanted new clothes. The writer saved for "eleven weeks" to buy a dress, but "it had sold out". This creates disappointment, and the writer "cried all the way home on the bus".

The fourth paragraph is the most moving. The mother secretly makes a copy of the dress, and "nobody at school could tell the difference". This shows how much she loved her daughter.

At the end, the writer compares the past with today, when some of her clothes "still have their labels on". The last sentence says the dress was "the only one that was made for me", which shows that it was special because her mother made it.`,
              'Grade 8-9': `The writer engages the reader by moving from a childhood in which clothes were patched and passed on, through a teenage longing for fashion, to a moving anecdote that shows what clothes can really mean.

The opening sentences are short and witty: "In our house, clothes were not bought. They arrived." The verb "arrived" makes hand-me-downs sound like something that simply happened, outside the family's control, and the long sentence that follows traces a garment's whole life, from "my cousin Margaret" to "my little sister", who wore clothes until they "could not be worn any more and then watched them become dusters". The final short sentence, "I was eleven before I owned a coat that nobody else had worn first", lands as a small, sad joke.

The second paragraph centres on the mother. The simile of the sewing machine's "busy, comforting rattle, like rain on a tin roof" links the sound with safety and sleep, and the example of turning "a pair of my father's old trousers into a skirt for me and a pair of shorts for my brother, with enough left over for a patch" shows her skill. The parallel sentences "Every sock in the house was darned. Every elbow had been patched at least once." stress how thorough the thrift was, and the antithesis "A hole was not the end of a garment; it was the beginning of a repair", which sets an end against a beginning, sums up a whole attitude to things.

The third paragraph turns with the short sentence "I did not always love this." and introduces conflict. The precise description of the dress, "white with a black stripe across the middle", and its cost, "more than my mother spent on clothes for the whole family in a month", show the teenager's desire and the family's limits. The suspense of saving "every penny" for "eleven weeks" ends in anticlimax, "it had sold out", and the plain sentence "I cried all the way home on the bus" captures a teenager's heartbreak.

The fourth paragraph is the emotional climax. The mother's response is understated, "without a word, she put a parcel on my bed", and the reader's suspense is rewarded with "Inside was the dress". The detail that she made it "from a remnant she had bought at the market for a few shillings" links back to the theme of thrift, and the seams that "gave way" and were let out show that the dress, like the earlier clothes, was worn, mended and worn again.

The final paragraph contrasts past and present. The honest admission that some of the writer's clothes "still have their labels on" exposes modern waste, and the last sentence, that the dress was "the only one that was made for me", plays on two meanings of "made for me": sewn to fit, and made out of love.`,
            },
            markScheme: [
              'Credit analysis of both language and structure, with references from across Text 1, each linked to its effect on the reader.',
              'Language could include: the witty opening in which clothes "arrived"; the simile of the sewing machine like rain on a tin roof; the parallel sentences about socks and elbows; the antithesis of a hole as the beginning of a repair, not the end of a garment; the double meaning of "made for me".',
              'Structure could include: the movement from childhood thrift, to teenage longing, to the gift of the dress, to the present; the short sentences that end paragraphs with a sad joke or a plain statement of feeling; the turn on "I did not always love this."; the suspense and anticlimax of the sold-out dress; the contrast between past and present at the end.',
              ...MARKS_Q3,
            ],
          },
          {
            id: 'edexcel-p2-12-q4',
            questionNumber: 4,
            questionText:
              'Look at the first paragraph of Text 2.\n\nIdentify one figure the writer gives about clothes in the UK.',
            marks: 1,
            suggestedTimeMinutes: 1,
            questionType: 'retrieval',
            extract: `Text 2:\n${FASHION_TEXT_2}`,
            extractSource: FASHION_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7': 'The UK sends 350,000 tonnes of clothing to landfill every year.',
            },
            markScheme: [
              '1 mark for one correct point.',
              'Accept one of: the UK sends 350,000 tonnes of clothing to landfill each year; some garments are worn once, twice or never; one survey found that the average garment is worn just seven times before it is thrown away.',
              'The question asks for a figure the article gives; it does not ask the student to judge whether it is correct.',
            ],
          },
          {
            id: 'edexcel-p2-12-q5',
            questionNumber: 5,
            questionText:
              'Look at the second paragraph of Text 2.\n\nIdentify one detail about the workers who make the clothes.',
            marks: 1,
            suggestedTimeMinutes: 1,
            questionType: 'retrieval',
            extract: `Text 2:\n${FASHION_TEXT_2}`,
            extractSource: FASHION_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7': 'They stitch garments for twelve hours a day.',
            },
            markScheme: [
              '1 mark for one correct point.',
              'Accept one of: they work in factories in Bangladesh, Cambodia and Vietnam; most of them are women; they stitch for twelve hours a day; their wages would not cover a London coffee; 1,134 people were killed when the Rana Plaza factory collapsed.',
            ],
          },
          {
            id: 'edexcel-p2-12-q6',
            questionNumber: 6,
            questionText:
              'In Text 2, the writer sets out to persuade the reader that cheap clothes have a hidden cost.\n\nEvaluate how well the writer achieves this. Refer closely to the text to support your judgement.',
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'evaluation',
            extract: `Text 2:\n${FASHION_TEXT_2}`,
            extractSource: FASHION_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7': `I think the writer is successful in persuading the reader that cheap clothes have a hidden cost, because the article uses strong language, statistics and examples.

The article begins with "Fast fashion is not fashion at all." This surprising statement grabs our attention. The metaphor "industrialised waste dressed up in a crop top" is funny but also makes a serious point about waste.

The writer uses statistics, such as "350,000 tonnes of clothing" sent to landfill every year. This shows how big the problem is.

In the second paragraph, the writer describes the workers who make the clothes, who work "twelve hours a day at wages that would not cover a London coffee". This comparison makes the reader feel the unfairness. The reference to the Rana Plaza factory collapse, which killed "1,134 people", is shocking.

In the last paragraph, the writer says "I do not blame individuals", which makes the reader feel less guilty and more willing to listen. The writer blames corporations instead. The final sentence, "The true price of a cheap garment is not printed on its tag", is memorable. However, the writer does not suggest what people should do, so the article is less helpful than it could be.`,
              'Grade 8-9': `The writer is successful, because the article attacks fast fashion with memorable language, supports the attack with figures, gives it a human face and then, cleverly, directs the reader's anger away from shoppers and towards corporations.

The opening sentence is a striking paradox: "Fast fashion is not fashion at all." The metaphor that follows, "industrialised waste dressed up in a crop top", is witty and cutting, turning the clothes themselves into a disguise for rubbish. The figures are well chosen: "350,000 tonnes of clothing to landfill" is vast and specific, while the list "worn once, twice, perhaps never" and the survey's "just seven times" shrink a garment's life to almost nothing. The simile of clothes "discarded like the packaging they increasingly resemble" suggests that they have become as disposable as a wrapper.

The second paragraph moves from waste to people. The phrase "The human cost is equally staggering" signals the shift, and the detail that workers, "predominantly women", stitch for "twelve hours a day at wages that would not cover a London coffee" makes the injustice concrete by measuring it against a British reader's daily habit. The reference to Rana Plaza, which "killed 1,134 people", is powerful because it is specific. The final sentence, in which "we had returned to our scrolling, our clicking, our next-day deliveries", uses a list of three and the inclusive "we" to make the reader feel involved.

The third paragraph is the most persuasive, because it refuses to blame the reader. The writer says "I do not blame individuals for buying cheap clothes" and calls a cheap T-shirt "economic survival", which keeps less wealthy readers on side. The anger is then aimed at "the corporations that have made disposability profitable" and at governments that let them "externalise every cost". The final sentence, "The true price of a cheap garment is not printed on its tag", is a memorable conclusion that turns the price tag into a symbol of hidden costs.

However, the article is short and offers no specific solution: it blames corporations and governments but does not say what they should do, or what readers could do instead. The figures are also given without sources: "One survey" is never named. Even so, it succeeds in its main aim of making the reader see a cheap garment differently.`,
            },
            markScheme: [
              'A clear judgement of how successfully the writer persuades, kept up through the answer and supported by detailed reference to Text 2.',
              'Points that could be evaluated: the paradox and metaphor of the opening; the figures and the simile of packaging; the human cost, measured against a London coffee, and the reference to Rana Plaza; the inclusive "we" that makes the reader feel involved; the refusal to blame individuals and the attack on corporations; the final image of the price tag.',
              'A balanced view is creditable, for example that the article offers no solution, or that its figures are given without sources.',
              ...MARKS_Q6,
            ],
          },
          {
            id: 'edexcel-p2-12-q7a',
            questionNumber: 7,
            label: '7(a)',
            questionText:
              'Both texts are about what clothes cost and how long they last.\n\nWhat similarities are there between the ways the two writers describe clothes? Support each point with evidence from both texts.',
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: FASHION_BOTH,
            extractSource: FASHION_BOTH_REF,
            modelAnswers: {
              'Grade 6-7':
                'Both texts describe women making clothes. In Text 1 the writer\'s mother made clothes on a "black sewing machine", and in Text 2 the workers who "stitch garments" are "predominantly women". Both texts also describe clothes that are not worn: the writer of Text 1 has clothes that "still have their labels on", and in Text 2 some clothes are worn "perhaps never". Both writers also suggest that what a garment is really worth, or really costs, is not its price: in Text 1 the dress was special because it was "made for me", and in Text 2 the true price is "not printed on its tag".',
              'Grade 8-9':
                'Both texts describe women doing the work of making clothes: in Text 1 the mother sat at her sewing machine "every evening after tea", and in Text 2 the factory workers, "predominantly women", stitch "for twelve hours a day". Both show people with little money to spend on clothes: the boutique dress cost "more than my mother spent on clothes for the whole family in a month", and the writer of Text 2 calls a five-pound T-shirt "economic survival" for those whose "wages are stagnant". Both describe clothes that are bought and hardly worn: some of the writer\'s own clothes "still have their labels on", and in Text 2 garments are "worn once, twice, perhaps never". Finally, both suggest that the real value of a garment is not its price: the dress was precious because it was "made for me", and Text 2 says that "The true price of a cheap garment is not printed on its tag".',
            },
            markScheme: [
              'Similarities could include: women doing the work of making clothes; people with little money to spend on clothes; clothes bought and hardly worn; the idea that the real value or cost of a garment is not its price.',
              ...MARKS_Q7A,
            ],
          },
          {
            id: 'edexcel-p2-12-q7b',
            questionNumber: 7,
            label: '7(b)',
            questionText:
              "Compare the two writers' ideas and perspectives about clothes and what they are worth, and how each writer conveys them.\n\nRefer closely to both texts in your answer.",
            marks: 14,
            suggestedTimeMinutes: 18,
            questionType: 'comparison',
            extract: FASHION_BOTH,
            extractSource: FASHION_BOTH_REF,
            modelAnswers: {
              'Grade 6-7': `Both writers think that clothes should be valued, but they present their ideas differently. The writer of Text 1 grew up in a family where clothes were mended and passed on, and says "A hole was not the end of a garment". The writer of Text 2 criticises fast fashion, where clothes are thrown away after being worn only "seven times".

The writers have different tones. Text 1 is warm and nostalgic, especially when the mother makes the dress. Text 2 is angry, describing fast fashion as "industrialised waste".

Both writers understand why people want new clothes. In Text 1, the writer saved for "eleven weeks" to buy a dress. In Text 2, the writer says a cheap T-shirt is "economic survival" for poorer people. However, Text 2 blames "the corporations", while Text 1 does not blame anyone.

The writers use different methods. Text 1 tells a personal story with a happy ending. Text 2 uses statistics, such as "350,000 tonnes", and examples of factory workers to persuade. Overall, Text 1 shows the value of clothes made with love, and Text 2 shows the hidden costs of cheap clothes.`,
              'Grade 8-9': `Both writers believe that clothes are worth more than their price, but the writer of Text 1 shows this through a personal memory of thrift and love, while the writer of Text 2 shows it through an argument about waste and exploitation.

For the writer of Text 1, clothes had value because they were made and mended at home. The mother turned old trousers into new clothes and darned "Every sock in the house", and the attitude of the household is summed up in "A hole was not the end of a garment; it was the beginning of a repair". For the writer of Text 2, clothes have lost that value. They are "industrialised waste dressed up in a crop top": "350,000 tonnes" go to landfill every year, and the average garment is worn "just seven times before it is thrown away".

Both writers admit the pull of new clothes. The teenage writer of Text 1 longed for a fashionable dress and "cried all the way home on the bus" when it sold out, and the adult writer confesses that some clothes in the wardrobe "still have their labels on". Text 2 is equally understanding of shoppers: "I do not blame individuals for buying cheap clothes." But while Text 1 resolves its story through a mother's love, Text 2 directs its anger at "the corporations that have made disposability profitable".

Their perspectives on the people who make clothes differ sharply. In Text 1, the maker is a mother working at the kitchen table out of love, and the result is a dress "made for me". In Text 2, the makers are distant factory workers who stitch "at wages that would not cover a London coffee", and some died in the collapse of Rana Plaza. One maker is known and loved; the others are unseen and exploited.

Their methods reflect their purposes. Text 1 is a memoir that builds to an emotional climax, using sensory detail such as the sewing machine's "busy, comforting rattle", and it ends with a quiet double meaning. Text 2 is an opinion article that uses a provocative opening, statistics and a list that makes the reader feel involved, "our scrolling, our clicking, our next-day deliveries", before ending with the image of the price tag. Read together, the texts suggest that the modern wardrobe is full of clothes that cost little and mean less.`,
            },
            markScheme: [
              'Comparisons could include: both writers believe clothes are worth more than their price, but Text 1 shows it through thrift and love and Text 2 through waste and exploitation; both admit the pull of new clothes and understand shoppers, but Text 2 blames corporations; the maker in Text 1 is a loving mother, in Text 2 unseen, exploited workers; Text 1 builds to an emotional climax with sensory detail, Text 2 uses a provocative opening, statistics and an inclusive list.',
              ...MARKS_Q7B,
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-12-writing',
        title: 'Section B: Transactional Writing',
        description: SECTION_B_ADVICE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p2-12-q8-9',
            questionNumber: 8,
            label: 'Q8 or Q9',
            questionText: `Answer ONE question: either Question 8 or Question 9.\n\nQuestion 8\n\nWrite an article for your school or college magazine in which you persuade students to buy fewer new clothes.\n\nYou could write about:\n• how often young people buy new clothes\n• the effects on the environment and on workers\n• other ways to enjoy fashion\nand any other ideas of your own.\n\nOR\n\nQuestion 9\n\n"School uniform should be scrapped."\n\nWrite a speech for a school debate in which you argue for or against this statement.\n\nYou could write about:\n• the purpose of school uniform\n• the cost of uniform for families\n• how students feel about it\nand any other ideas of your own.\n\n${MARKS_WRITING_NOTE}`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 6-7': `Question 9: a speech for a school debate, against the statement

Good morning, everyone.

Today we are debating whether school uniform should be scrapped. Many students complain about their uniform, and I understand why, but I believe that school uniform should stay.

Firstly, school uniform makes everyone equal. If students could wear whatever they liked, there would be a lot of pressure to wear expensive, fashionable clothes. Students from families who cannot afford designer brands might be teased or left out. With a uniform, everyone looks the same, so nobody is judged by what they wear.

Secondly, uniform saves time and stress. Every morning, I put on the same clothes without having to think about it. If we had no uniform, many students would spend ages deciding what to wear, and some would worry about being seen in the same outfit twice.

Some people argue that uniform is expensive, especially blazers and items with the school logo. This is a fair point, and I think the school should do more to help. It could allow students to buy plain items from supermarkets, which are much cheaper, and run a second-hand uniform shop where families can buy and sell old uniform.

Other people say that uniform stops students expressing their individuality. However, we can still show our personalities in other ways, through our ideas, our hobbies and the way we treat other people. School is a place for learning, and uniform helps us to focus on that.

Finally, uniform gives us a sense of belonging. When we go on school trips or play in sports matches, wearing the same uniform shows that we are part of a community.

In conclusion, I believe that school uniform should stay, but that the school should make it cheaper and more comfortable. Thank you for listening.`,
              'Grade 8-9': `Question 8: an article for a school magazine

Your Wardrobe Is Lying to You

Open your wardrobe. Go on, have a proper look. Somewhere in there, I guarantee, is a top you bought because it was cheap, wore once to a party, and have not touched since. Perhaps it still has the label on. Perhaps you had forgotten it existed. That top is not a bargain. It is a small part of one of the biggest environmental problems in the world, and it is hanging in your bedroom.

Most of us buy new clothes all the time. A haul video, a flash sale, a notification at midnight, and another parcel arrives. Clothes have become so cheap that we treat them like snacks: something to consume quickly and forget. But every one of those garments has a cost that is not printed on the price tag.

Think first about the planet. Making a single pair of jeans uses a great deal of water, and the dyes and chemicals used in cheap clothing often end up in rivers. When we throw clothes away, many end up in landfill, where they can take years to break down. Fast fashion is not just a shopping habit; it is a conveyor belt that runs from the factory to the rubbish tip, with only a brief stop in our wardrobes.

Then think about the people who make our clothes. Many of them are young women, not much older than us, working long hours for very little pay in factories that are sometimes unsafe. When we demand clothes that are cheaper and faster, we are, without meaning to, demanding that they work harder for less.

I am not asking you to stop caring about how you look. Fashion is fun, and it is one of the ways we show who we are. I am asking you to enjoy it differently. Buy less, and buy better: one well-made jacket will outlast five cheap ones. Try charity shops and vintage stores, where you can find clothes that nobody else at school will be wearing. Organise a clothes swap with your friends, so that the top you are bored of becomes someone else's favourite. Learn to sew on a button or fix a hem. A repair is not a sign that you cannot afford new clothes; it is a sign that you know what your clothes are worth.

Our grandparents mended, altered and handed on their clothes because they had to. We can do it because we choose to, and because the planet needs us to. So before you click to buy your next bargain, open your wardrobe one more time. You may find that you already have everything you need.`,
            },
            markScheme: [
              'Question 8 (an article for a school or college magazine): a headline and an engaging opening that speaks to students; a clear argument, developed with reasons about the environment and workers; practical alternatives that keep fashion enjoyable; a persuasive, lively register.',
              'Question 9 (a speech for a debate): a clear position for or against the statement, sustained throughout; spoken features such as direct address; developed reasons about purpose, cost and feelings; an answer to the other side.',
              ...MARKS_WRITING,
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 13: Science
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p2-13',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-fiction and Transactional Writing',
    subtitle: 'English Language 1EN0/02',
    code: '1EN0/02',
    totalTimeMinutes: 125,
    totalMarks: 96,
    sections: [
      {
        id: 'edexcel-p2-13-reading',
        title: 'Section A: Reading',
        description: `${SECTION_A_ADVICE}\n\nText 1: ${SCIENCE_TEXT_1_REF}\nText 2: ${SCIENCE_TEXT_2_REF}\n\nGlossary for Text 1: polio: a serious infectious disease, common until the 1950s, that could leave people unable to move parts of their bodies; brace: a metal support strapped to a weak limb; vaccine: a medicine that protects the body against a disease. Glossary for Text 2: CRISPR: a tool for editing genes; ethical frameworks: rules about what is right and wrong; incremental: small and gradual; cognition: thinking.`,
        totalMarks: 56,
        suggestedTimeMinutes: 80,
        questions: [
          {
            id: 'edexcel-p2-13-q1',
            questionNumber: 1,
            questionText:
              "Look at the first paragraph of Text 1.\n\nIdentify two things the writer's mother did because she was afraid of polio.",
            marks: 2,
            suggestedTimeMinutes: 2,
            questionType: 'retrieval',
            extract: SCIENCE_BOTH,
            extractSource: SCIENCE_BOTH_REF,
            modelAnswers: {
              'Grade 6-7':
                "1. She would not let the children go to the fair.\n2. She felt the writer's forehead every morning before breakfast.",
            },
            markScheme: [
              '1 mark for each correct point, up to 2.',
              "Accept any two of: she would not let them go to the fair; or play in the river; or sit too long in a crowded cinema; she felt the writer's forehead every morning before breakfast.",
              'Do not credit things other people did, such as closing the swimming baths.',
            ],
          },
          {
            id: 'edexcel-p2-13-q2',
            questionNumber: 2,
            questionText:
              'Read the third paragraph of Text 1, beginning "The vaccine reached our school".\n\nGive two details about the day the children were vaccinated.\n\nYou may answer in your own words or with quotations.',
            marks: 2,
            suggestedTimeMinutes: 2,
            questionType: 'retrieval',
            extract: `Text 1:\n${SCIENCE_TEXT_1}`,
            extractSource: SCIENCE_TEXT_1_REF,
            modelAnswers: {
              'Grade 6-7':
                '1. They "queued in the hall in our vests, in alphabetical order".\n2. Afterwards they "were given a biscuit".',
            },
            markScheme: [
              '1 mark for each correct point, up to 2. The two points must be different.',
              'Accept: they queued in the hall; in their vests; in alphabetical order; the nurse had cold hands and a kind voice; the injection was in the top of the arm; some boys cried; one fainted; they were given a biscuit; they were sent back to lessons.',
              "Quotations and the student's own words both count.",
            ],
          },
          {
            id: 'edexcel-p2-13-q3',
            questionNumber: 3,
            questionText:
              "Analyse how the writer of Text 1 uses language and structure to hold the reader's interest.\n\nRefer closely to the text to support your views.",
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'analysis',
            extract: `Text 1:\n${SCIENCE_TEXT_1}`,
            extractSource: SCIENCE_TEXT_1_REF,
            modelAnswers: {
              'Grade 6-7': `The writer makes the memoir interesting by describing the fear of polio and the relief when the vaccine arrived.

In the first paragraph, the writer builds a sense of fear. Adults spoke in "lowered voices", and the name of the disease is given in a one-word sentence: "Polio." This makes the word seem frightening. The mother would not let her children go to the fair or play in the river, which shows how worried she was.

In the second paragraph, the writer describes Peter, who came back to school with "a metal brace strapped to his left leg". This shows how serious polio could be. However, Peter "became the best goalkeeper in the school", which shows that he did not let it stop him.

The third paragraph is more light-hearted. The children queued "in our vests", and a boy fainted "to everybody's great delight", which is funny.

The fourth paragraph is emotional. The mother hugged the writer "hard", and the writer explains that she "would never have to be afraid in that way again". The short sentence "Nobody had to pay for it." shows that the vaccine was fair to everyone.

At the end, the writer says that the grandchildren "have never heard of polio". This shows how successful the vaccine was, and the writer ends by praising the scientists.`,
              'Grade 8-9': `The writer engages the reader by recreating the atmosphere of fear that surrounded polio and then using a careful structure to make the arrival of the vaccine feel like a release, both for the family and for the reader.

The opening paragraph builds dread through suggestion rather than description. The fear "came back with the warm weather", as though it were a season, and the writer recalls adults talking in "lowered voices at the school gate" and falling silent when children came in. The disease is named only in a one-word sentence, "Polio.", which gives the word a terrible weight. The list of things the mother forbade, "the fair", "the river" and "a crowded cinema", and the detail that she "felt my forehead every morning before breakfast" show how fear shaped ordinary life.

The second paragraph makes the threat personal through Peter. The understated sentence that he "did not come back after the Easter holidays" creates suspense, and the "metal brace strapped to his left leg" shows the disease's cost without dwelling on it. The writer is honest about children, "We were curious, and then we were careless", and the detail that Peter "became the best goalkeeper in the school" adds warmth and resilience. The paragraph ends with "the look on my mother's face", which prepares us for the ending.

The third paragraph changes tone completely. The vaccination is described with gentle comedy: the children queued "in our vests, in alphabetical order", the nurse had "cold hands and a kind voice", and one boy fainted "to everybody's great delight". The ordinariness of being "sent back to our lessons as if nothing had happened" is ironic, because something enormous has happened.

The fourth paragraph returns to the mother's face, echoing the end of the second. Her silence, standing "at the kitchen sink for a long time", and her sudden hug, "for no reason that I understood", show emotion that the child could not yet grasp. The shift to the adult voice, "I understand it now.", explains it: she "would never have to be afraid in that way again". The short sentences "Nobody had to pay for it. Every child in the country had the same chance." add a quiet point about fairness.

The final paragraph moves to the present. The grandchildren listen "as if I were describing the Middle Ages", a comparison that shows how completely the disease has been forgotten, and the writer turns that forgetting into the closing tribute: "the thing they defeated has been almost completely forgotten". The structure, from fear to relief to forgetting, leaves the reader with a sense of wonder at what science achieved.`,
            },
            markScheme: [
              'Credit analysis of both language and structure, with references from across Text 1, each linked to its effect on the reader.',
              'Language could include: fear presented as a season that came back with the warm weather; the one-word sentence "Polio."; the understated description of Peter and his brace; the gentle comedy of the vaccination; the comparison with the Middle Ages.',
              'Structure could include: the movement from fear, to a personal example, to relief, to forgetting; the change of tone in the third paragraph; the return to the mother\'s face, which links the second and fourth paragraphs; the shift into the adult voice with "I understand it now."; the closing tribute.',
              ...MARKS_Q3,
            ],
          },
          {
            id: 'edexcel-p2-13-q4',
            questionNumber: 4,
            questionText:
              'Look at the first paragraph of Text 2.\n\nIdentify one condition the writer says clinical trials have treated using CRISPR.',
            marks: 1,
            suggestedTimeMinutes: 1,
            questionType: 'retrieval',
            extract: `Text 2:\n${SCIENCE_TEXT_2}`,
            extractSource: SCIENCE_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7': 'Sickle cell disease.',
            },
            markScheme: [
              '1 mark for one correct point.',
              'Accept one of: sickle cell disease; certain cancers; a form of hereditary blindness.',
              'Do not credit the diseases named in the second paragraph, which are research programmes.',
            ],
          },
          {
            id: 'edexcel-p2-13-q5',
            questionNumber: 5,
            questionText:
              'Look at the third paragraph of Text 2.\n\nIdentify one way the writer says gene editing could be used to enhance ability.',
            marks: 1,
            suggestedTimeMinutes: 1,
            questionType: 'retrieval',
            extract: `Text 2:\n${SCIENCE_TEXT_2}`,
            extractSource: SCIENCE_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7': 'To give people stronger muscles.',
            },
            markScheme: [
              '1 mark for one correct point.',
              'Accept one of: stronger muscles; sharper thinking; resistance to ageing.',
            ],
          },
          {
            id: 'edexcel-p2-13-q6',
            questionNumber: 6,
            questionText:
              'In Text 2, the writer tries to make the reader see both the promise and the danger of gene editing.\n\nEvaluate how well the writer achieves this. Refer closely to the text to support your judgement.',
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'evaluation',
            extract: `Text 2:\n${SCIENCE_TEXT_2}`,
            extractSource: SCIENCE_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7': `I think the writer is successful in showing both the promise and the danger of gene editing, because the article is clearly divided between the benefits and the risks.

At the start, the writer explains that CRISPR can "cut, paste, and rewrite DNA". These simple verbs help the reader to understand the technology. The writer gives examples of diseases that have been treated, which makes the benefits seem real.

In the second paragraph, the writer says "The potential is staggering" and lists diseases such as "Cystic fibrosis". The short sentences make the list powerful and hopeful.

The third paragraph changes direction with "But here is where the conversation becomes uncomfortable." The writer warns that the technology could be used to make people "Stronger" or give them "Sharper cognition". The most worrying idea is that "the wealthy can literally buy better genes for their children", which makes the reader think about fairness.

The ending, "This is not science fiction. This is science fact", is dramatic. However, the writer does not give evidence for this claim or suggest how the danger could be stopped, so the argument is not complete.`,
              'Grade 8-9': `The writer is largely successful, because the article first excites the reader with the promise of gene editing and then turns that excitement into unease, so that both sides are felt rather than simply listed.

The opening claims that we are living through "a revolution in genetic science that most people have barely noticed", which flatters the reader with inside knowledge. The explanation that CRISPR can "cut, paste, and rewrite DNA" uses familiar computer verbs to make a complex technology understandable, and the image of ethical rules "left gasping in the dust" suggests that science is racing ahead of morality. The examples of diseases already treated give the claims credibility, and the contrast "The results were not incremental. They were transformative." ends the paragraph with confidence.

The second paragraph builds hope. "The potential is staggering" is followed by the names of diseases in short fragments, "Cystic fibrosis. Huntington's disease. Muscular dystrophy.", which sound like a roll call of enemies about to be defeated. The insistence that these are "not abstract possibilities" but "active research programmes" makes the promise seem real.

The third paragraph is where the article succeeds most. The turn, "But here is where the conversation becomes uncomfortable", is clearly signposted, and the writer reuses the fragment structure for enhancements, "Stronger muscles. Sharper cognition. Resistance to ageing.", so that the reader notices how easily cure becomes advantage. The neat reversal "If we can edit out a genetic disorder, we can, in principle, edit in an advantage" is memorable, and the warning that "the wealthy can literally buy better genes for their children" makes the danger concrete. The phrase "not merely economic but biological" raises the stakes dramatically.

However, the ending, "This is not science fiction. This is science fact, five to ten years away.", is more dramatic than proven: the writer gives no evidence for the time scale. The article also says nothing about how the danger might be prevented. Nevertheless, it achieves its aim of making the reader see both the promise and the danger, and the balance between the paragraphs is skilfully managed.`,
            },
            markScheme: [
              'A clear judgement of how successfully the writer shows both the promise and the danger, kept up through the answer and supported by detailed reference to Text 2.',
              'Points that could be evaluated: the opening that flatters the reader with inside knowledge; the familiar verbs that explain CRISPR; the examples and the contrast between incremental and transformative; the roll call of diseases; the signposted turn and the repeated fragments for enhancements; the reversal from editing out a disorder to editing in an advantage; the warning about the wealthy.',
              'A balanced view is creditable, for example that the time scale at the end is asserted without evidence, or that no way of preventing the danger is offered.',
              ...MARKS_Q6,
            ],
          },
          {
            id: 'edexcel-p2-13-q7a',
            questionNumber: 7,
            label: '7(a)',
            questionText:
              'Both texts are about medical science defeating disease.\n\nWhat similarities are there between the ways the two writers describe it? Support each point with evidence from both texts.',
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: SCIENCE_BOTH,
            extractSource: SCIENCE_BOTH_REF,
            modelAnswers: {
              'Grade 6-7':
                'Both texts describe diseases that caused suffering. In Text 1, polio left Peter with "a metal brace", and in Text 2 genetic diseases have caused "immeasurable suffering". Both writers describe science that has changed lives: the polio vaccine meant the mother "would never have to be afraid in that way again", and the CRISPR results were "transformative". Both texts also suggest that diseases could disappear completely, as polio has "been almost completely forgotten" and genetic diseases could "be eliminated entirely".',
              'Grade 8-9':
                'Both writers describe diseases that caused great suffering: polio, which brought "nine summers" of fear and left Peter with "a metal brace", and the genetic diseases that have caused "immeasurable suffering for millennia". Both describe science that transforms lives rather than improving them a little: the vaccine meant the mother "would never have to be afraid in that way again", and the CRISPR results "were not incremental. They were transformative." Both imagine a disease disappearing completely, the thing the scientists defeated having "been almost completely forgotten" in Text 1, and diseases that "could, within a generation, be eliminated entirely" in Text 2. Both also link medicine to fairness and to children: in Text 1 "Every child in the country had the same chance", while in Text 2 the worry is that the wealthy could "buy better genes for their children".',
            },
            markScheme: [
              'Similarities could include: diseases that caused great suffering; science that transforms lives; the hope that a disease could disappear completely; a link between medicine, fairness and children.',
              ...MARKS_Q7A,
            ],
          },
          {
            id: 'edexcel-p2-13-q7b',
            questionNumber: 7,
            label: '7(b)',
            questionText:
              "Compare the two writers' ideas and perspectives about medical progress, and how each writer conveys them.\n\nRefer closely to both texts in your answer.",
            marks: 14,
            suggestedTimeMinutes: 18,
            questionType: 'comparison',
            extract: SCIENCE_BOTH,
            extractSource: SCIENCE_BOTH_REF,
            modelAnswers: {
              'Grade 6-7': `Both writers write about medical science, but they have different perspectives. The writer of Text 1 is grateful for the polio vaccine, which ended years of fear. The writer of Text 2 is excited about gene editing but also worried about what it could lead to.

The biggest difference is about fairness. In Text 1, the vaccine was free, and "Every child in the country had the same chance." In Text 2, the writer worries that gene editing will be expensive, so that "the wealthy can literally buy better genes for their children".

The writers use different methods. Text 1 tells a personal story about Peter and the writer's mother, which makes the reader feel emotional. Text 2 uses facts and examples of diseases, such as "Cystic fibrosis", to explain the science.

The tones are also different. Text 1 is warm and thankful, ending with praise for the scientists. Text 2 is excited at first but becomes worried, ending with the warning "This is not science fiction." Overall, Text 1 celebrates what science did in the past, while Text 2 warns about what it might do in the future.`,
              'Grade 8-9': `Both writers celebrate medical science's power to defeat disease, but the writer of Text 1 looks back with gratitude on a breakthrough that was shared by everyone, while the writer of Text 2 looks ahead with unease at a breakthrough that may be shared unfairly.

The writer of Text 1 presents the vaccine as a gift. Its meaning is shown through the mother, who "had spent nine summers afraid", and its fairness is stated plainly: "Nobody had to pay for it. Every child in the country had the same chance." The writer of Text 2 is excited by gene editing, calling its potential "staggering", but immediately warns that, because new medical technology is "expensive", "the wealthy can literally buy better genes for their children". Where Text 1 describes science narrowing the gap between families, Text 2 fears science widening it until it becomes "not merely economic but biological".

Their attitudes to public awareness also differ. In Text 1, the disease was once so feared that adults spoke of it in "lowered voices", and its defeat is measured by the fact that it "has been almost completely forgotten". In Text 2, the revolution is one "that most people have barely noticed", and the writer wants the reader to notice before it is too late.

Their methods reflect their perspectives. Text 1 is a memoir that uses a child's point of view and a personal story, Peter and his "metal brace", to make the disease real, and it saves its emotional climax for the mother's silent hug at "the kitchen sink". Its tone is warm and grateful, ending with a tribute to "the scientists who made that vaccine". Text 2 is an opinion article that uses technical explanation, lists of diseases in short fragments and a turn signalled by "But here is where the conversation becomes uncomfortable". Its tone is urgent, ending with the warning "This is not science fiction."

Both writers, however, value the same thing: medicine that benefits everyone. Text 1 shows what that looked like in the 1950s; Text 2 asks whether we will manage it again.`,
            },
            markScheme: [
              "Comparisons could include: both writers celebrate medicine's power to defeat disease, but Text 1 looks back with gratitude on a shared, free breakthrough and Text 2 looks ahead with unease at one that may favour the wealthy; Text 1 measures success by forgetting, Text 2 wants the reader to notice; Text 1 uses a child's point of view, a personal story and a tribute, Text 2 technical explanation, fragments and a signposted turn; both value medicine that benefits everyone.",
              ...MARKS_Q7B,
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-13-writing',
        title: 'Section B: Transactional Writing',
        description: SECTION_B_ADVICE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p2-13-q8-9',
            questionNumber: 8,
            label: 'Q8 or Q9',
            questionText: `Answer ONE question: either Question 8 or Question 9.\n\nQuestion 8\n\nWrite an article for a science magazine for teenagers in which you explain why scientific research matters and persuade readers to consider a career in science.\n\nYou could write about:\n• discoveries that have changed people's lives\n• problems science could help to solve\n• what a career in science can offer\nand any other ideas of your own.\n\nOR\n\nQuestion 9\n\n"Scientists should never be allowed to change the genes of human beings."\n\nWrite a speech for a debate at your school or college in which you argue for or against this statement.\n\nYou could write about:\n• the diseases gene editing could cure\n• the risks and the questions of fairness\n• who should decide how it is used\nand any other ideas of your own.\n\n${MARKS_WRITING_NOTE}`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 6-7': `Question 8: an article for a science magazine

Why Science Needs You

Have you ever wondered who discovered the medicine that cured your last infection, or who invented the phone in your pocket? The answer is scientists: people who asked questions, carried out experiments and refused to give up until they found answers. In this article, I want to explain why scientific research matters and why you should think about a career in science.

Science has already changed our lives in amazing ways. Vaccines have protected millions of children from deadly diseases. Antibiotics can cure infections that once killed people. Scientists have also given us electricity, computers and the internet, which most of us could not imagine living without.

But there are still huge problems that science could help to solve. Climate change is one of the biggest challenges in the world, and scientists are working on cleaner sources of energy, such as solar and wind power. Doctors and researchers are developing new treatments for diseases such as cancer and dementia. There are also challenges in growing enough food for everyone and in protecting wildlife.

A career in science can offer you a lot. It can be exciting, because every day you are discovering something new. It can be rewarding, because your work could save lives or protect the planet. There are also many different jobs to choose from, such as working in a laboratory, in a hospital, in the countryside or in a technology company.

Some students think science is too difficult or only for a certain kind of person. This is not true. Scientists need curiosity, patience and teamwork, and anyone can develop these skills. You do not have to be a genius; you just have to keep asking questions.

So next time you are in a science lesson, remember that you could be the person who makes the next great discovery. The world needs more scientists, and that could include you.`,
              'Grade 8-9': `Question 9: a speech for a debate, against the statement

Good afternoon. I want to start with a girl I will call Emily. Emily was born with a genetic disease that slowly damages the lungs. Every day of her life she spends an hour on treatments just to keep breathing, and she has been told that the disease will probably shorten her life. Now imagine telling Emily's parents that a treatment exists which could correct the faulty gene, but that we have decided, as a matter of principle, that nobody should ever be allowed to use it.

That is what this motion asks us to do, and that is why I oppose it.

Let me be clear about what I am not saying. I am not saying that scientists should be free to do whatever they like. I am not saying that rich parents should be able to order taller, cleverer or stronger children from a catalogue. Those fears are real, and any honest debate must take them seriously. But a ban on all gene editing is not the answer to them. It is like banning surgery because someone might misuse a scalpel.

The case for allowing gene editing to treat disease is overwhelming. Thousands of illnesses are caused by a single faulty gene, and many of them bring years of pain and early death. Early treatments have already helped patients with blood disorders. To refuse this help would not be cautious. It would be cruel.

My opponents will say that once we start, we cannot stop: that today's cure will become tomorrow's designer baby. But we already draw lines like this in medicine every day. We allow doctors to prescribe powerful drugs, and we punish those who misuse them. We could do the same with gene editing, allowing it to treat serious disease, banning its use for enhancement, and making sure that every treatment is approved by independent experts, not by companies that profit from it.

There is also the question of fairness. If gene treatments are only available to the wealthy, the gap between rich and poor will grow. The solution is not to ban the treatments but to make sure they are available through the health service to everyone who needs them, as vaccines were for our grandparents.

So I ask you to reject this motion. Not because the risks are imaginary, but because the suffering is real, and because a society wise enough to fear the dangers of a technology should also be wise enough to control them. Thank you.`,
            },
            markScheme: [
              'Question 8 (an article for a science magazine for teenagers): a headline and an engaging opening; a clear explanation of why research matters, with examples of discoveries and problems; a persuasive case for a career in science; a register that suits young readers.',
              'Question 9 (a speech for a debate): a clear position for or against the statement, sustained throughout; spoken features such as direct address, an example and rhetorical questions; developed reasons about cures, risks and fairness; a considered answer to who should decide.',
              ...MARKS_WRITING,
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 14: Justice
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p2-14',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-fiction and Transactional Writing',
    subtitle: 'English Language 1EN0/02',
    code: '1EN0/02',
    totalTimeMinutes: 125,
    totalMarks: 96,
    sections: [
      {
        id: 'edexcel-p2-14-reading',
        title: 'Section A: Reading',
        description: `${SECTION_A_ADVICE}\n\nText 1: ${JUSTICE_TEXT_1_REF}\nText 2: ${JUSTICE_TEXT_2_REF}\n\nGlossary for Text 1: magistrates' court: a local court where minor cases are heard by magistrates, who are not professional judges; the bench: the magistrates' seats; solicitor: a lawyer; vagrant: a person with no home or work; the clerk: the official who advises the magistrates. Glossary for Text 2: mitigation: reasons given for a lighter sentence; structural: built into the system.`,
        totalMarks: 56,
        suggestedTimeMinutes: 80,
        questions: [
          {
            id: 'edexcel-p2-14-q1',
            questionNumber: 1,
            questionText:
              'Look at the first paragraph of Text 1.\n\nIdentify two things the editor gave the writer.',
            marks: 2,
            suggestedTimeMinutes: 2,
            questionType: 'retrieval',
            extract: JUSTICE_BOTH,
            extractSource: JUSTICE_BOTH_REF,
            modelAnswers: {
              'Grade 6-7': '1. A notebook.\n2. Two pencils.',
            },
            markScheme: [
              '1 mark for each correct point, up to 2.',
              'Accept any two of: a notebook; two pencils; a piece of advice, to write down what happens and not what the writer thought.',
            ],
          },
          {
            id: 'edexcel-p2-14-q2',
            questionNumber: 2,
            questionText:
              'Read the second paragraph of Text 1, beginning "The court sat in a high, cold room".\n\nGive two details about the people whose cases were heard that morning.\n\nYou may answer in your own words or with quotations.',
            marks: 2,
            suggestedTimeMinutes: 2,
            questionType: 'retrieval',
            extract: `Text 1:\n${JUSTICE_TEXT_1}`,
            extractSource: JUSTICE_TEXT_1_REF,
            modelAnswers: {
              'Grade 6-7':
                '1. "None of them had a lawyer."\n2. A woman "had taken a pair of children\'s shoes from a market stall".',
            },
            markScheme: [
              '1 mark for each correct point, up to 2. The two points must be different.',
              "Accept: a man had stolen a sack of coal from a railway yard; a woman had taken a pair of children's shoes from a market stall; a boy of seventeen had been found asleep in a shop doorway; none of them had a lawyer; most did not fully understand what was happening.",
              "Quotations and the student's own words both count.",
            ],
          },
          {
            id: 'edexcel-p2-14-q3',
            questionNumber: 3,
            questionText:
              "Analyse how the writer of Text 1 uses language and structure to hold the reader's interest.\n\nRefer closely to the text to support your views.",
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'analysis',
            extract: `Text 1:\n${JUSTICE_TEXT_1}`,
            extractSource: JUSTICE_TEXT_1_REF,
            modelAnswers: {
              'Grade 6-7': `The writer makes the memoir interesting by describing a day in a magistrates' court and showing that rich and poor people were treated differently.

At the start, the editor's advice is given in short sentences: "Write down what happens. Not what you think about it. What happens." This tells the reader that the writer will describe events without giving opinions.

In the second paragraph, the court is described as "a high, cold room", which makes it sound unwelcoming. The chairman works "with the brisk efficiency of a man catching a train", which suggests he is in a hurry. The writer lists the cases, such as a woman who took "a pair of children's shoes", which makes the reader feel sorry for the defendants. The short sentence "None of them had a lawyer." shows that they were at a disadvantage.

The third paragraph contrasts this with a young man "in a good suit" who has a solicitor. He is treated with "sympathy", while the woman who took the shoes might "go to prison for a week". This contrast shows the unfairness clearly.

In the fourth paragraph, the writer says "Nobody in that room had been cruel", but still felt that something had gone "badly wrong". This makes the reader think about how a system can be unfair even when people are polite.

The ending contrasts the woman with the young man who "walked out into the sunshine", which leaves the reader feeling uncomfortable.`,
              'Grade 8-9': `The writer engages the reader by placing a young, observant narrator in a courtroom and letting what happens there reveal an injustice that nobody in the room seems to notice.

The first paragraph establishes the narrator as an inexperienced outsider and introduces the editor through a single comic detail: he "smoked a pipe even in the lift". His advice, given in three short sentences, "Write down what happens. Not what you think about it. What happens.", matters for the whole text, because the writer follows it: the injustice is shown, not argued.

The second paragraph builds a picture of the court. The sensory details, "a high, cold room that smelled of floor polish", and the "royal coat of arms" above the bench suggest authority and coldness. The chairman is described with a telling comparison: he ran proceedings with "the brisk efficiency of a man catching a train", which suggests that speed matters more to him than people. The figure of "eleven cases before lunch" and the short sentence "Most took less than five minutes." reinforce this, and the list of cases, a sack of coal, "a pair of children's shoes" and a boy found "asleep in a shop doorway", shows that the defendants are poor rather than wicked. The short sentence "None of them had a lawyer." is the first clear hint of unfairness.

The third paragraph uses contrast as its main structural device. The young man arrives "in a good suit with his father and a solicitor", and his offence, injuring a passenger after driving into a wall, is more serious than taking shoes. Yet his solicitor speaks "for twenty minutes" and the chairman listens "with every sign of sympathy". The parallel structure then delivers the injustice: both are fined, but the woman "could not pay" and will "probably go to prison for a week". The clerk's shrug is a small, chilling gesture of indifference.

The fourth paragraph is reflective. The writer is honest about uncertainty, "I was not sure what I thought", and the short sentences "Nobody in that room had been cruel. The chairman was polite to everyone." show that the problem was not individual cruelty. The turn on "And yet" leads to the phrase "something go badly wrong, quietly", which captures an injustice built into the system.

The final paragraph adds a painful admission, "I grew used to it, which is perhaps the worst thing I can say", and ends with the contrast between "the woman and the shoes" and "the young man in the good suit, who walked out into the sunshine". The sunshine is ironic, suggesting freedom for one and prison for the other, and it leaves the reader with the writer's sense of unease.`,
            },
            markScheme: [
              'Credit analysis of both language and structure, with references from across Text 1, each linked to its effect on the reader.',
              "Language could include: the editor's three short sentences of advice; the cold, polished courtroom; the comparison with a man catching a train; the list of small, poor offences; the clerk's shrug; the ironic sunshine at the end.",
              'Structure could include: the narrator who shows rather than argues, as the editor advised; the contrast between the morning and the afternoon cases; the parallel fines with very different results; the turn on "And yet"; the final paragraph, which sets the woman against the young man.',
              ...MARKS_Q3,
            ],
          },
          {
            id: 'edexcel-p2-14-q4',
            questionNumber: 4,
            questionText:
              'Look at the first paragraph of Text 2.\n\nIdentify one thing the writer says the system offers people who are wealthy and well-connected.',
            marks: 1,
            suggestedTimeMinutes: 1,
            questionType: 'retrieval',
            extract: `Text 2:\n${JUSTICE_TEXT_2}`,
            extractSource: JUSTICE_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7': 'Second chances.',
            },
            markScheme: [
              '1 mark for one correct point.',
              'Accept one of: representation; mitigation; second chances.',
            ],
          },
          {
            id: 'edexcel-p2-14-q5',
            questionNumber: 5,
            questionText:
              'Look at the second paragraph of Text 2.\n\nIdentify one figure the writer gives about how people are treated by the justice system.',
            marks: 1,
            suggestedTimeMinutes: 1,
            questionType: 'retrieval',
            extract: `Text 2:\n${JUSTICE_TEXT_2}`,
            extractSource: JUSTICE_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7': 'Black people are about twice as likely to be arrested as white people.',
            },
            markScheme: [
              '1 mark for one correct point.',
              'Accept one of: Black people are several times more likely to be stopped and searched; they are about twice as likely to be arrested; more than a quarter of prisoners come from Black, Asian, mixed or other ethnic groups; those groups make up fewer than one in five people in England and Wales.',
              'The question asks for a figure the article gives; it does not ask the student to judge whether it is correct.',
            ],
          },
          {
            id: 'edexcel-p2-14-q6',
            questionNumber: 6,
            questionText:
              'In Text 2, the writer sets out to persuade the reader that the justice system treats people unequally.\n\nEvaluate how well the writer achieves this. Refer closely to the text to support your judgement.',
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'evaluation',
            extract: `Text 2:\n${JUSTICE_TEXT_2}`,
            extractSource: JUSTICE_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7': `I think the writer is quite successful in persuading the reader that the justice system treats people unequally, because the article uses shocking statements, statistics and a fair tone.

The article starts with a surprising claim: the system "is not broken. It was built this way." This makes the reader want to read on. The contrast between people who are "wealthy, white, and well-connected" and those who are "poor, Black, and unknown" shows the inequality clearly, especially the final words, "it offers you a cell".

In the second paragraph, the writer uses statistics, such as Black people being "about twice as likely to be arrested". These numbers make the argument seem reliable. However, the writer does not explain them in much detail.

In the third paragraph, the writer says "I am not suggesting that every police officer is racist". This makes the writer seem fair and reasonable. The writer explains that "The problem is structural", which means it is built into the system.

The ending asks the reader to "reimagine what justice means". This is thought-provoking, but the writer does not explain what changes are needed, so the article is better at describing the problem than at solving it.`,
              'Grade 8-9': `The writer is largely successful, because the article combines a provocative opening, a set of striking statistics and a careful explanation of what "structural" means, although its forceful style may persuade those who already agree more than those who do not.

The opening is deliberately shocking. The claim that the system "is not broken. It was built this way." reverses the usual complaint and makes the reader stop. The writer then uses a powerful parallel: if you are "wealthy, white, and well-connected", the system offers "representation, mitigation, and second chances"; if you are "poor, Black, and unknown, it offers you a cell". The two lists of three, and the blunt final word "cell", make the inequality impossible to miss.

The second paragraph supports the claim with figures. "The statistics are unambiguous" signals confidence, and the figures, "several times more likely to be stopped and searched" and "about twice as likely to be arrested", are presented in short, building sentences that add to the pressure. The comparison between "More than a quarter of prisoners" and "fewer than one in five people in England and Wales" is clear. However, the figures are given with no source and little explanation, and "several times" is vague, so a careful reader might want to know how they were measured, which slightly weakens their force.

The third paragraph is the most persuasive, because it anticipates an objection. The writer says "I am not suggesting that every police officer is racist or that every judge is biased", which makes the argument seem fair rather than accusing, and then explains that "The problem is structural, not individual". The examples, "the algorithms that predict reoffending", "postcode-based policing" and "the school-to-prison pipeline", show how unfairness can be built into systems without any single person intending it.

The ending, "We need to reimagine what justice means - and for whom", echoes the title's question and leaves the reader thinking. However, it is vague: the writer says that "Reform is not enough" but does not explain what should replace it. Overall, the writer convincingly argues that the system treats people unequally, but is less successful in showing what should be done.`,
            },
            markScheme: [
              'A clear judgement of how successfully the writer persuades, kept up through the answer and supported by detailed reference to Text 2.',
              'Points that could be evaluated: the reversal of the usual complaint in the opening; the parallel lists of three that end in "a cell"; the figures and how far they are explained; the answer to the objection that the writer is calling every officer or judge biased; the examples of structural unfairness; the vague call to reimagine justice.',
              'A balanced view is creditable, for example that the figures are given without explanation, or that the article does not say what should replace reform.',
              ...MARKS_Q6,
            ],
          },
          {
            id: 'edexcel-p2-14-q7a',
            questionNumber: 7,
            label: '7(a)',
            questionText:
              'Both texts describe how the justice system treats different people.\n\nWhat similarities are there between the ways the two writers describe it? Support each point with evidence from both texts.',
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: JUSTICE_BOTH,
            extractSource: JUSTICE_BOTH_REF,
            modelAnswers: {
              'Grade 6-7':
                'Both texts show that the justice system treats rich and poor people differently. In Text 1 the young man in "a good suit" had a solicitor and was allowed to go home, and in Text 2 wealthy people are offered "second chances". Both texts show poor people being treated worse: the woman in Text 1 might "go to prison for a week" because she could not pay her fine, and in Text 2 the poor are offered "a cell". Both writers also say the problem is not cruel individuals: "Nobody in that room had been cruel" in Text 1, and the problem is "structural, not individual" in Text 2.',
              'Grade 8-9':
                'Both writers show the justice system treating wealthy people better than poor people. In Text 1 the young man "in a good suit" came with "a solicitor" and was allowed to go home, while the poor defendants had no lawyer, and in Text 2 the system offers the wealthy "representation, mitigation, and second chances". Both show the poor being punished more harshly: the woman who took the shoes "could not pay" her fine and would "probably go to prison", and in Text 2 the poor and unknown are offered "a cell". Both describe the system as efficient but uncaring, the chairman working with "the brisk efficiency of a man catching a train" and the system serving the privileged "with remarkable efficiency". Finally, both writers place the problem in the system rather than in individuals: in Text 1 "Nobody in that room had been cruel", and in Text 2 "The problem is structural, not individual".',
            },
            markScheme: [
              'Similarities could include: wealthy people are treated better, with lawyers and second chances; poor people are punished more harshly, ending in prison; the system is efficient but uncaring; the problem lies in the system rather than in cruel individuals.',
              ...MARKS_Q7A,
            ],
          },
          {
            id: 'edexcel-p2-14-q7b',
            questionNumber: 7,
            label: '7(b)',
            questionText:
              "Compare the two writers' ideas and perspectives about fairness in the justice system, and how each writer conveys them.\n\nRefer closely to both texts in your answer.",
            marks: 14,
            suggestedTimeMinutes: 18,
            questionType: 'comparison',
            extract: JUSTICE_BOTH,
            extractSource: JUSTICE_BOTH_REF,
            modelAnswers: {
              'Grade 6-7': `Both writers think the justice system is unfair, but they present their ideas in different ways. The writer of Text 1 describes one day in court and lets the events show the unfairness, such as the woman who might "go to prison for a week" while the young man went home. The writer of Text 2 states the argument directly, saying the system "was designed, over centuries, by and for the privileged".

The texts focus on different groups. Text 1 shows that poor people were treated worse than wealthy people. Text 2 argues that Black people are treated worse, using figures such as "about twice as likely to be arrested".

Both writers agree that the problem is not caused by individuals. In Text 1, "Nobody in that room had been cruel", and in Text 2 the writer says the problem is "structural".

The tones are different. Text 1 is quiet and thoughtful, and the writer admits "I was not sure what I thought". Text 2 is angry and certain. Overall, Text 1 makes the reader feel uneasy, while Text 2 makes the reader want change.`,
              'Grade 8-9': `Both writers believe that the justice system treats people unequally even when nobody intends it to, but the writer of Text 1 shows this through one day's quiet observation, while the writer of Text 2 argues it openly, with statistics and anger.

The writer of Text 1 was told to "Write down what happens. Not what you think about it.", and the memoir obeys: it lets the contrast between the woman with "a pair of children's shoes" and the young man "in a good suit" speak for itself. Even the writer's conclusion is tentative, "I was not sure what I thought", and the unfairness is felt as a mood, "something go badly wrong, quietly". The writer of Text 2, by contrast, states the conclusion in the first line: the system "is not broken. It was built this way." Where Text 1 suggests, Text 2 accuses.

The texts also focus on different kinds of inequality. Text 1 is about money and class: the defendants who had no lawyer were poor, and the one who had a solicitor was wealthy. Text 2 adds race, arguing that if you are "poor, Black, and unknown", the system "offers you a cell", and supporting the claim with figures such as "several times more likely to be stopped and searched".

Yet the writers agree on a crucial point: the injustice is not caused by wicked individuals. In Text 1, "Nobody in that room had been cruel" and the chairman "was polite to everyone"; in Text 2, the writer is "not suggesting that every police officer is racist or that every judge is biased", because "The problem is structural, not individual".

Their methods reflect their purposes. Text 1 is a memoir that uses sensory detail, the room "that smelled of floor polish", a revealing comparison with a man "catching a train" and a structure built on contrast, ending on the ironic image of the young man walking "out into the sunshine". Text 2 is an opinion article that uses parallel lists, figures and examples such as "postcode-based policing", ending with a call to "reimagine what justice means".

Text 1 also adds something that Text 2 does not: the danger of getting used to injustice. Its writer admits, "I grew used to it, which is perhaps the worst thing I can say." Read together, the texts suggest that unfairness survives not because people are cruel, but because they stop noticing.`,
            },
            markScheme: [
              'Comparisons could include: both writers believe the system treats people unequally without anyone intending it, but Text 1 shows it through quiet observation and Text 2 argues it openly; Text 1 is about money and class, Text 2 adds race; both insist the problem is not cruel individuals; Text 1 uses sensory detail, comparison and contrast, Text 2 parallel lists, figures and examples; Text 1 adds the danger of growing used to injustice.',
              ...MARKS_Q7B,
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-14-writing',
        title: 'Section B: Transactional Writing',
        description: SECTION_B_ADVICE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p2-14-q8-9',
            questionNumber: 8,
            label: 'Q8 or Q9',
            questionText: `Answer ONE question: either Question 8 or Question 9.\n\nQuestion 8\n\n"Young people should be taught about the law at school."\n\nWrite an article for your school or college magazine in which you give your views on this statement.\n\nYou could write about:\n• what young people know about the law now\n• why understanding the law matters\n• how it could be taught\nand any other ideas of your own.\n\nOR\n\nQuestion 9\n\nWrite a letter to your headteacher in which you argue that students should help to decide the school's rules on behaviour.\n\nYou could write about:\n• how the rules are made now\n• why students' views matter\n• how students could be involved\nand any other ideas of your own.\n\n${MARKS_WRITING_NOTE}`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 6-7': `Question 8: an article for a school magazine

Know Your Rights: Why We Should Learn About the Law

How much do you know about the law? If you are like most young people, the answer is probably not much. We learn about history, science and maths at school, but most of us are never taught about the laws that affect our everyday lives. I believe that young people should be taught about the law at school.

At the moment, many young people get their ideas about the law from television programmes and social media. These are often exaggerated or simply wrong. As a result, some young people do not understand their rights, and others do not realise when they might be breaking the law, for example by sharing images online without permission.

Understanding the law matters for many reasons. Firstly, it helps to keep young people safe. If you know your rights, you are less likely to be taken advantage of, whether in a part-time job or when renting your first flat. Secondly, it helps young people to make good choices. Knowing the consequences of certain actions might stop someone from making a mistake that could affect the rest of their life. Thirdly, it helps us to become responsible citizens who understand how our society works.

The law could be taught in simple and interesting ways. Schools could include it in citizenship lessons, invite lawyers and police officers to speak to students, or organise visits to a local court. Students could even take part in mock trials, which would help them to understand how the justice system works and to practise their speaking skills.

Some people might say that the law is too complicated for young people. However, nobody is suggesting that students should become experts. They only need to understand the basics.

In conclusion, learning about the law would help young people to stay safe, make good decisions and play a full part in society. It is time for schools to teach it.`,
              'Grade 8-9': `Question 9: a letter to a headteacher

Dear Mr Adebayo,

I am writing on behalf of the Year 10 student council to propose a change to the way our school makes its rules on behaviour. At present, the rules are written by the senior leadership team and announced to students in assembly. I would like to suggest that, in future, students should help to decide them.

Let me say at once that I am not asking for fewer rules, or for softer ones. Most students understand that a school needs clear expectations if everyone is to learn. What we are asking for is a voice. At the moment, many students feel that the rules are something done to them rather than something made with them, and I believe that feeling causes a great deal of the behaviour the rules are meant to prevent.

Consider the new rule on mobile phones introduced in September. Nobody doubts that phones can be distracting in lessons. But because students were not consulted, the rule did not take account of those who need their phones for medical reasons, or of the students who travel long distances and need to contact their parents after school. The result has been confusion, arguments with staff and a feeling among many students that the rule is unfair. A short conversation with students beforehand could have avoided all of this.

There is good reason to believe that rules made together are followed more willingly. When people help to make a decision, they understand why it was made and feel responsible for keeping it. That is true of adults in a workplace, and there is no reason it should not be true of students in a school. Involving students would also teach us something valuable: how decisions are made in a fair society, by listening to different views and finding a compromise.

I would suggest three practical steps. First, before any new rule is introduced, the student council could be asked for its views. Second, each tutor group could discuss proposed changes and send its comments to the council. Third, the school could review its behaviour policy once a year, with students and staff meeting together to decide what is working and what is not.

None of this would weaken the authority of teachers. The final decision would still rest with you and the governors. But it would show students that their views are taken seriously, and I am confident that the school would be a calmer and fairer place as a result.

Thank you for considering this proposal. The student council would be very glad to meet you to discuss it further.

Yours sincerely,

Hannah Osei
Year 10 student council representative`,
            },
            markScheme: [
              'Question 8 (an article for a school or college magazine): a headline and an engaging opening; a clear view on the statement, developed with reasons and examples; practical ideas for how the law could be taught; an answer to the view that the law is too complicated.',
              "Question 9 (a letter to a headteacher): a suitable greeting and sign-off and a polite, formal register; a clear explanation of how rules are made now and why students' views matter, with an example; practical steps; reassurance about the authority of staff.",
              ...MARKS_WRITING,
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 15: The Media
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p2-15',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-fiction and Transactional Writing',
    subtitle: 'English Language 1EN0/02',
    code: '1EN0/02',
    totalTimeMinutes: 125,
    totalMarks: 96,
    sections: [
      {
        id: 'edexcel-p2-15-reading',
        title: 'Section A: Reading',
        description: `${SECTION_A_ADVICE}\n\nText 1: ${MEDIA_TEXT_1_REF}\nText 2: ${MEDIA_TEXT_2_REF}\n\nGlossary for Text 1: sub-edited: checked and corrected before printing; press night: the night a newspaper is printed; correction: a printed notice that puts a mistake right. Glossary for Text 2: phone hacking: listening to other people's phone messages without permission; the Leveson Inquiry: a public inquiry into the behaviour of the British press, which reported in 2012; ecosystem: here, a whole connected system; propaganda: information spread to persuade, often misleading.`,
        totalMarks: 56,
        suggestedTimeMinutes: 80,
        questions: [
          {
            id: 'edexcel-p2-15-q1',
            questionNumber: 1,
            questionText:
              "Look at the first paragraph of Text 1.\n\nIdentify two details about the newspaper the writer's father edited.",
            marks: 2,
            suggestedTimeMinutes: 2,
            questionType: 'retrieval',
            extract: MEDIA_BOTH,
            extractSource: MEDIA_BOTH_REF,
            modelAnswers: {
              'Grade 6-7':
                '1. It was produced by six people in two rooms above a hardware shop.\n2. It came out every Thursday.',
            },
            markScheme: [
              '1 mark for each correct point, up to 2.',
              'Accept any two of: it was very small; it was produced by six people; in two rooms above a hardware shop; it came out every Thursday; the father edited it for thirty-one years; it was printed on Wednesday nights.',
              "A word, a short phrase or the student's own words is enough.",
            ],
          },
          {
            id: 'edexcel-p2-15-q2',
            questionNumber: 2,
            questionText:
              'Read the second paragraph of Text 1, beginning "He had one rule".\n\nGive two things the writer\'s father did to make sure the newspaper was accurate.\n\nYou may answer in your own words or with quotations.',
            marks: 2,
            suggestedTimeMinutes: 2,
            questionType: 'retrieval',
            extract: `Text 1:\n${MEDIA_TEXT_1}`,
            extractSource: MEDIA_TEXT_1_REF,
            modelAnswers: {
              'Grade 6-7':
                '1. He asked every reporter "Who else have you asked?"\n2. He held back a front page "for a whole week" because he could not find a second person to confirm the story.',
            },
            markScheme: [
              '1 mark for each correct point, up to 2. The two points must be different.',
              'Accept: he pinned his rule above every desk; he asked reporters who told them, how those people knew and who else they had asked; he did not run a story that nobody else had confirmed; he held back a front page for a week until a second person could confirm the story.',
              "Quotations and the student's own words both count.",
            ],
          },
          {
            id: 'edexcel-p2-15-q3',
            questionNumber: 3,
            questionText:
              "Analyse how the writer of Text 1 uses language and structure to hold the reader's interest.\n\nRefer closely to the text to support your views.",
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'analysis',
            extract: `Text 1:\n${MEDIA_TEXT_1}`,
            extractSource: MEDIA_TEXT_1_REF,
            modelAnswers: {
              'Grade 6-7': `The writer makes the memoir interesting by describing a small local newspaper and the editor's strict rules about accuracy.

In the first paragraph, the writer uses humour to show how small the newspaper was: it was made by "six people in two rooms above a hardware shop". The detail that nobody could speak to the father on press night "unless the building was on fire" shows how serious he was about his work.

In the second paragraph, the father's rule is given in two short sentences: "Get it right. Then get it out." This shows that accuracy was more important to him than speed. The three questions he asked reporters show how careful he was, and the story of the false rumour proves that his rule was right.

In the third paragraph, the writer explains that people trusted the newspaper, even though they "did not always like it". The funny detail about Mrs Bellamy complaining about the crossword "every single week for nineteen years" makes the memoir entertaining.

The fourth paragraph shows that the newspaper made mistakes, such as reporting that a man had died when he had moved to Bournemouth. The father's apology in person shows his honesty.

At the end, the writer explains that the newspaper closed, and compares it with news today, which has "rumours that travel round the world before lunch". The final sentence sums up the writer's message about trust.`,
              'Grade 8-9': `The writer engages the reader by building an affectionate portrait of a tiny newspaper and its editor, using humour and anecdote to show what made it trusted, and then ending with a reflection that connects the past to the present.

The first paragraph establishes the paper's smallness with comic exaggeration: it was "written, sub-edited, laid out and very nearly delivered by six people in two rooms above a hardware shop". The list of tasks, ending with the joke "very nearly delivered", makes the reader smile, and the detail that on press night "nobody spoke to my father after six o'clock unless the building was on fire" shows how seriously he took the work.

The second paragraph centres on the father's rule, given in two short commands: "Get it right. Then get it out." The order of the sentences mirrors his priorities, accuracy first and speed second. The three questions, "Who told you? How do they know? Who else have you asked?", are short and blunt, recreating his voice, and the anecdote of holding back a front page "for a whole week" while "every other paper in the county printed the rumour" proves the rule's value. The final short sentence, "The rumour turned out to be false.", is a quiet moment of vindication.

The third paragraph explores trust through contrast. People "did not always like it", and the comic list of complainers, ending with Mrs Bellamy, who complained "about the crossword every single week for nineteen years", is affectionate and funny. But the flood of 1974 shows the paper's true importance: people "believed every word, because they had learned that it did not print words it could not stand behind". The repetition of "words" links trust directly to accuracy.

The fourth paragraph admits failure, "It did get things wrong, of course", and the anecdote of the man reported dead who "had only moved to Bournemouth" is comic. The father's response, driving "to Bournemouth to apologise in person" and printing the correction "in the same size type as the original mistake", shows integrity, and his promise that "we will be sorry in big letters too" is a memorable statement of principle.

The final paragraph is elegiac. The list of reasons for the paper's closure, "Fewer people bought it, the advertisers moved online", is flat and factual, and the contrast with news "with its rumours that travel round the world before lunch" brings the reader into the present. The final sentence, "People will believe a newspaper only for as long as it deserves to be believed", turns a family memory into a general truth.`,
            },
            markScheme: [
              'Credit analysis of both language and structure, with references from across Text 1, each linked to its effect on the reader.',
              'Language could include: the comic exaggeration of how small the paper was; the two short commands of the father\'s rule and his three blunt questions; the list of complainers ending with Mrs Bellamy; the repetition of "words"; the father\'s promise to be sorry in big letters.',
              'Structure could include: the movement from the paper, to its rule, to the trust it earned, to its mistakes, to its closure; the anecdotes that prove each point; the short sentences that end paragraphs; the final general truth that links past and present.',
              ...MARKS_Q3,
            ],
          },
          {
            id: 'edexcel-p2-15-q4',
            questionNumber: 4,
            questionText:
              'Look at the first paragraph of Text 2.\n\nIdentify one thing the writer says about how far British adults trust the news.',
            marks: 1,
            suggestedTimeMinutes: 1,
            questionType: 'retrieval',
            extract: `Text 2:\n${MEDIA_TEXT_2}`,
            extractSource: MEDIA_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7':
                'Fewer than four in ten British adults say they trust most news most of the time.',
            },
            markScheme: [
              '1 mark for one correct point.',
              'Accept one of: fewer than four in ten British adults say they trust most news most of the time; far fewer trust it than a decade ago; millions have decided that the mainstream press is not worth believing.',
              'The question asks what the article says; it does not ask the student to judge whether it is correct.',
            ],
          },
          {
            id: 'edexcel-p2-15-q5',
            questionNumber: 5,
            questionText:
              'Look at the second paragraph of Text 2.\n\nIdentify one cause the writer gives for the loss of trust.',
            marks: 1,
            suggestedTimeMinutes: 1,
            questionType: 'retrieval',
            extract: `Text 2:\n${MEDIA_TEXT_2}`,
            extractSource: MEDIA_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7': 'Decades of phone hacking.',
            },
            markScheme: [
              '1 mark for one correct point.',
              'Accept one of: phone hacking; invented quotes; front pages designed to inflame rather than inform; the tabloid press treating truth as optional; the reforms after the Leveson Inquiry being shelved.',
            ],
          },
          {
            id: 'edexcel-p2-15-q6',
            questionNumber: 6,
            questionText:
              'In Text 2, the writer sets out to persuade the reader that journalists are to blame for the loss of trust in the news.\n\nEvaluate how well the writer achieves this. Refer closely to the text to support your judgement.',
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'evaluation',
            extract: `Text 2:\n${MEDIA_TEXT_2}`,
            extractSource: MEDIA_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7': `I think the writer is quite successful in persuading the reader that journalists are to blame for the loss of trust, because the article uses a striking figure, examples and a clear solution.

The article starts by saying that "journalists have only themselves to blame". This is a strong statement that grabs the reader's attention. The writer then gives a figure, that "Fewer than four in ten British adults" trust most news, which shows how serious the problem is.

In the second paragraph, the writer gives examples of bad behaviour by journalists, such as "phone hacking" and "invented quotes". This makes the argument convincing because these are serious wrongs. The phrase "designed to inflame rather than inform" is memorable.

In the third paragraph, the writer explains that social media has made the problem worse, because "the most outrageous claims travel fastest". The writer ends with a solution: journalism that "earns trust back". This positive ending makes the reader feel hopeful.

However, the writer blames all journalists, even though not all of them have behaved badly, so some readers might think the argument is unfair.`,
              'Grade 8-9': `The writer is quite successful, because the article opens with a blunt accusation and an alarming figure, supports the accusation with well-known scandals and ends with a constructive solution; but it argues by assertion as much as by evidence.

The opening sentence is deliberately confrontational: trust is collapsing, "and journalists have only themselves to blame". Its bluntness makes the writer seem willing to face an uncomfortable truth. The figure, "Fewer than four in ten British adults", is alarming, and the comparison "far fewer than a decade ago" turns it into a story of decline. The writer raises the stakes at once: "the consequences for democracy are profound".

The second paragraph explains the causes. The opening, "The causes are not mysterious", suggests that the answer is obvious, and the list, "Decades of phone hacking, of invented quotes, of front pages designed to inflame rather than inform", piles up wrongdoing. The contrast between "inflame" and "inform" neatly sums up the problem. The metaphor of truth treated "as an optional extra" is cutting, and the reference to the Leveson Inquiry, which "exposed the rot", gives the argument a real example. The word "rot" suggests decay from within.

The third paragraph widens the picture to social media, describing "a parallel information ecosystem in which anyone can publish anything". The image of conspiracy theories that "have flooded" into a "vacuum of trust" is vivid, and it suggests that bad journalism has left a gap that worse things have filled. The final sentences are the most persuasive part of the article, because they move from blame to a solution: "The solution is not censorship. The solution is journalism that earns trust back". The list "accuracy, accountability, and a willingness to admit when it gets things wrong" gives the reader something positive to agree with.

However, the article is weaker than it might be. It blames "journalists" as a group, though its examples come mostly from "The tabloid press", and it does not show how many journalists are actually guilty. It also leaves open how journalism could earn trust back in practice. Even so, the writer persuades the reader that the press is at least partly to blame, and ends on a hopeful note.`,
            },
            markScheme: [
              'A clear judgement of how successfully the writer persuades, kept up through the answer and supported by detailed reference to Text 2.',
              'Points that could be evaluated: the confrontational opening and the alarming figure of decline; the list of scandals and the contrast between inflaming and informing; the metaphor of truth as an optional extra and the word "rot"; the image of a vacuum of trust filled by misinformation; the move from blame to a solution.',
              'A balanced view is creditable, for example that the article blames journalists as a group while its examples come mostly from tabloids, or that it does not explain how trust could be earned back.',
              ...MARKS_Q6,
            ],
          },
          {
            id: 'edexcel-p2-15-q7a',
            questionNumber: 7,
            label: '7(a)',
            questionText:
              "Both texts are about newspapers and whether people trust them.\n\nWhat similarities are there between the two writers' ideas about trust and the news? Support each point with evidence from both texts.",
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: MEDIA_BOTH,
            extractSource: MEDIA_BOTH_REF,
            modelAnswers: {
              'Grade 6-7':
                'Both writers think that the news must be accurate to be trusted. In Text 1 the father\'s rule was "Get it right", and in Text 2 the writer wants journalism that is based on "accuracy". Both writers also think newspapers should admit their mistakes: the father printed a correction on "the front page", and Text 2 wants "a willingness to admit when it gets things wrong". Both texts also mention rumours spreading, such as "the rumour" that other papers printed in Text 1 and the "outrageous claims" that "travel fastest" in Text 2.',
              'Grade 8-9':
                'Both writers believe that trust in the news must be earned through accuracy: the father\'s rule was "Get it right. Then get it out.", and Text 2 calls for journalism that "earns trust back - through accuracy". Both value admitting mistakes, the father printing a correction "in the same size type as the original mistake" and the writer of Text 2 asking for "a willingness to admit when it gets things wrong". Both describe the danger of rumours spreading quickly: other papers printed "the rumour" in Text 1, and today there are "rumours that travel round the world before lunch", while in Text 2 "the most outrageous claims travel fastest". Both also describe the decline of newspapers as people turn elsewhere: the Gazette closed when "the advertisers moved online", and Text 2 describes how "social media has created a parallel information ecosystem".',
            },
            markScheme: [
              'Similarities could include: trust must be earned through accuracy; newspapers should admit their mistakes; rumours spread quickly and do harm; newspapers are declining as people turn to other sources.',
              ...MARKS_Q7A,
            ],
          },
          {
            id: 'edexcel-p2-15-q7b',
            questionNumber: 7,
            label: '7(b)',
            questionText:
              "Compare the two writers' ideas and perspectives about trust in the news, and how each writer conveys them.\n\nRefer closely to both texts in your answer.",
            marks: 14,
            suggestedTimeMinutes: 18,
            questionType: 'comparison',
            extract: MEDIA_BOTH,
            extractSource: MEDIA_BOTH_REF,
            modelAnswers: {
              'Grade 6-7': `Both writers think that people only trust the news if it is accurate, but they present this idea in different ways. The writer of Text 1 describes a small newspaper that people trusted because the editor checked every story. The writer of Text 2 describes a press that has lost people's trust because of "phone hacking" and "invented quotes".

The writers have different tones. Text 1 is nostalgic and funny, with stories such as the man who was reported dead but had "only moved to Bournemouth". Text 2 is angry and serious, saying that "the consequences for democracy are profound".

Both writers think newspapers should admit their mistakes. In Text 1, the father printed a correction on the front page, and in Text 2 the writer wants "a willingness to admit when it gets things wrong".

The writers use different methods. Text 1 uses personal memories and anecdotes. Text 2 uses a figure, "Fewer than four in ten British adults", and examples of scandals. Overall, Text 1 shows how trust can be earned, while Text 2 shows how it can be lost.`,
              'Grade 8-9': `Both writers believe that people trust the news only when it is accurate and honest about its mistakes, but the writer of Text 1 celebrates a newspaper that earned that trust, while the writer of Text 2 condemns a press that has lost it.

For the writer of Text 1, trust was the reward for discipline. The father's rule, "Get it right. Then get it out.", and his three questions show that accuracy came before speed, and the trust that resulted was so strong that, when the river flooded, readers "believed every word". The writer of Text 2 describes the opposite situation, in which "Fewer than four in ten British adults now say that they trust most news most of the time", and blames journalists who have treated truth "as an optional extra".

Both writers value honesty about mistakes. In Text 1, a false report was corrected "in the same size type as the original mistake", and the father promised that "we will be sorry in big letters too". Text 2 ends by calling for exactly this: journalism with "a willingness to admit when it gets things wrong". In a sense, the father in Text 1 is a model of the journalist that Text 2 wishes existed.

Their attitudes to the present differ. Text 1 is nostalgic, and the writer's criticism of modern news is brief and gentle, mentioning "rumours that travel round the world before lunch". Text 2 is angry and urgent, describing "conspiracy theories, misinformation, and propaganda" that "have flooded with devastating effect". Yet both identify the same danger, the speed of rumour, and both suggest that only accuracy can resist it.

Their methods reflect their purposes. Text 1 is a memoir built on anecdotes, such as the front page held back "for a whole week" and the man who "had only moved to Bournemouth", and its humour makes the father's principles likeable. It ends with a general truth: "People will believe a newspaper only for as long as it deserves to be believed." Text 2 is an opinion article that uses a figure, a list of scandals and a reference to the Leveson Inquiry, and it ends with a solution, journalism that "earns trust back".

Read together, the texts suggest that trust in the news was never automatic. It was earned, week by week, by people like the father in Text 1, and it can be lost, as Text 2 shows, far more quickly than it was won.`,
            },
            markScheme: [
              'Comparisons could include: both writers believe trust depends on accuracy and honesty about mistakes, but Text 1 celebrates a paper that earned it and Text 2 condemns a press that lost it; the father in Text 1 is the kind of journalist Text 2 calls for; Text 1 is nostalgic and gentle about the present, Text 2 angry and urgent, though both fear the speed of rumour; Text 1 uses anecdote and humour and ends on a general truth, Text 2 a figure, scandals and a solution.',
              ...MARKS_Q7B,
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-15-writing',
        title: 'Section B: Transactional Writing',
        description: SECTION_B_ADVICE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p2-15-q8-9',
            questionNumber: 8,
            label: 'Q8 or Q9',
            questionText: `Answer ONE question: either Question 8 or Question 9.\n\nQuestion 8\n\nWrite an article for your school or college website in which you advise students how to tell whether a news story they see online can be trusted.\n\nYou could write about:\n• why false stories spread\n• the questions to ask about a story\n• what to do before sharing it\nand any other ideas of your own.\n\nOR\n\nQuestion 9\n\n"Social media does more harm than good to young people."\n\nWrite a speech for a debate at your school or college in which you argue for or against this statement.\n\nYou could write about:\n• the benefits of social media\n• the harm it can do\n• how young people could use it more safely\nand any other ideas of your own.\n\n${MARKS_WRITING_NOTE}`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 6-7': `Question 9: a speech for a debate, against the statement

Good morning, everyone.

Today we are debating whether social media does more harm than good to young people. Many adults believe that it does, but I disagree. I believe that social media can do a lot of good, as long as we use it sensibly.

Firstly, social media helps us to stay connected. I have a cousin who lives in Australia, and without social media I would hardly ever speak to her. Now we message each other every week and share photos of our lives. For young people who feel lonely or different, social media can also help them to find others who share their interests and experiences.

Secondly, social media can help us to learn and be creative. Many young people use it to share their art, music and writing with a wider audience. Others use it to learn new skills, such as cooking or playing the guitar, from videos made by experts.

However, I do not want to pretend that social media is perfect. It can be used for bullying, and some people spend so much time scrolling that they lose sleep or feel worse about themselves. False stories also spread very quickly online.

That is why it is important to use social media safely. We should set time limits on our apps, block and report people who are unkind, and think carefully before we believe or share something. Parents and schools can help by teaching young people how to stay safe online, instead of simply banning it.

In conclusion, social media is a tool. Like any tool, it can be used well or badly. If we learn to use it wisely, I believe it does far more good than harm.

Thank you for listening.`,
              'Grade 8-9': `Question 8: an article for a school website

Before You Share: A Survival Guide for the Age of Fake News

It was everywhere by lunchtime. A video, shared thousands of times, claimed that our town's swimming pool was closing for good. By the afternoon, a petition had hundreds of signatures and people in my year were furious. There was just one problem: it was not true. The pool was closing for a fortnight, for repairs. Somebody had misread a notice, and the rest of us had done the rest.

False stories spread for a simple reason: they are exciting. A shocking claim makes us feel something, angry, frightened or amused, and when we feel something, we want to share it. The truth, by comparison, is often dull. A rumour can travel round the world before anyone has had time to check it, and once it has been shared, it is very hard to call back.

So how can you tell whether a story can be trusted? Good editors have always asked three questions about every story, and they work just as well on your phone. First: who is telling me this? Look at the source. Is it a news organisation you have heard of, an expert, or an account with a strange name and no history? Second: how do they know? Does the story say where its information came from, or does it simply state things as fact? Third: who else is saying it? If a major story is true, other reliable sources will be reporting it too. If nobody else has it, be suspicious.

There are other warning signs to look out for. Headlines written in capital letters, or designed to make you angry, are often trying to provoke rather than inform. Photographs can be old, edited or taken from a completely different place. Quotations can be invented. A quick search can often reveal whether an image has appeared before, or whether a quotation was ever really said.

Most importantly, think before you share. Ask yourself whether you have actually read the story, not just the headline, and whether you would be happy to be wrong about it in front of everyone you know. If in doubt, leave it. Nobody ever regretted not sharing a rumour.

We cannot stop false stories from being written. But we can stop them from spreading, one share at a time. The internet will only be as trustworthy as the people who use it, and that includes you.`,
            },
            markScheme: [
              'Question 8 (an article for a school or college website): a headline and an engaging opening, perhaps an anecdote; a clear explanation of why false stories spread; practical, well-organised advice on checking a story before sharing it; a register that advises without lecturing.',
              'Question 9 (a speech for a debate): a clear position for or against the statement, sustained throughout; spoken features such as direct address; developed reasons with examples of benefits and harms; practical ideas for safer use.',
              ...MARKS_WRITING,
            ],
          },
        ],
      },
    ],
  },
]
