// @ts-nocheck
/**
 * AQA GCSE English Language Paper 2 (8700/2), third set: exams 11 to 15, each
 * pairing a modern opinion article (Source A) with a nineteenth-century source
 * (Source B). Live: served through the lazy loader as 'chunk/aqa-p2-c'
 * (src/data/mock-exam-loader.ts, src/data/mock-exams/index-data.ts).
 *
 * WHAT WAS WRONG (found 26 September 2026 by
 * scripts/check-mock-exam-extracts.mjs). Every Source B was printed as the
 * words of a named nineteenth-century writer, and none was:
 * - "Charles Reade, It Is Never Too Late to Mend (1856)": 0 of 10 sentences
 *   are in the novel. It was a first-person report of a tour of gaols and of
 *   Pentonville, which the novel does not contain, and the model answers
 *   analysed its invented lines ("a suit of clothes and five shillings",
 *   "like creatures dug from the earth") as Reade's.
 * - "W.T. Stead, 'The Government by Journalism', The Contemporary Review,
 *   1886": 0 of 12 sentences are in the article (checked on 27 September
 *   against the W. T. Stead Resource Site's transcription, as the article is
 *   not on Project Gutenberg). It also argued the opposite of Stead, whose
 *   article praises the power of the press and calls the editor the
 *   "uncrowned king of an educated democracy".
 * - "William Cobbett, Rural Rides (1830)": 0 of 14 sentences are in the book.
 * - "William Hazlitt, 'The Fight', New Monthly Magazine, 1822": 0 of 9
 *   sentences are in the essay (Project Gutenberg #72206, fetched to check).
 * - "John Ruskin, Lectures on Art (1870)": 0 of 12 sentences are in the
 *   lectures. It had Ruskin lament an age that values things "by its utility";
 *   the lecture on use argues that art lives by being "full of truth, or full
 *   of use".
 * The model answers quoted 23 of these invented lines as the writers' own.
 * The Exam 13 Question 3 answer also quoted a phrase from Exam 11's Source A,
 * one answer misquoted its own passage, five quotations joined words across a
 * cut with no ellipsis, and one (Exam 14 Question 3) was not in its passage.
 *
 * The Source A articles were labelled as pieces by named writers in real
 * publications ("Rachel Osei, 'Behind Closed Doors', The Observer, 2024" and
 * four like it). They were written for this file, and the names could belong
 * to real journalists who never wrote them. Three of them stated as fact
 * things that are false: a "2023 study by the Reuters Institute" of council
 * spending, which the Institute did not publish; "23,000" local journalists
 * in 2005 (the Newspaper Society's estimate for the mid-2000s was about
 * 13,000); a 47% fall in GCSE art and design entries since 2010 (Campaign for
 * the Arts puts art and design's fall at 4% by 2025; it is arts GCSEs as a
 * whole that fell by about 40%); and an Emirates match-day ticket costing "more than a
 * week's wages" on the national living wage. Four of the five Question 1s had
 * a fifth statement that the paragraph makes true, or arguably true, against
 * an answer key of four. Some Question 3 answers described the text wrongly:
 * "rotted" called present tense, a phrase between dashes quoted in brackets,
 * "beautiful" said to end in a sibilant, "wept" said to end a clause.
 *
 * WHAT WAS DONE (27 September 2026). Each Source B is now a genuine passage,
 * cut by passage() (src/lib/study-guides/passage.ts) from a Project Gutenberg
 * edition, its wrapped lines rejoined, by a script and never typed, and then
 * trimmed to whole sentences where the passage starts or ends inside one of
 * the edition's paragraphs. Each is on the old passage's subject, 261 to 492
 * words long where the old ones were 239 to 282, and each label names the
 * Gutenberg text it was cut from. The only departures from the editions are
 * layout: the italic underscores are dropped, "--" is printed as the dash it
 * stands for, and two pieces of apparatus are left out: the footnote mark
 * "[3]" in the Gutenberg text of "The Fight", and Ruskin's section number
 * "98.". The Stead article is not on Gutenberg, so Exam 12 now prints Wilde's
 * "The Soul of Man under Socialism" (1891) on the same subject, the power of
 * the press over public and private life.
 *
 * Exam 11 prints Dickens, not Reade. Reade wrote about prisons in It Is Never
 * Too Late to Mend, which is a novel, and the first version of this fix
 * printed a passage from it labelled as fiction. But an 8700/2 Source B is
 * always nineteenth-century non-fiction, and a model answer was telling
 * students "Source B is from a novel", which is not something they will meet
 * in the exam. On review the same day the passage became Dickens's first-hand
 * account of the boys' school and a men's yard in Newgate, from Sketches by
 * Boz, which no other paper in the bank prints. (His American Notes on the
 * Philadelphia prison is already Source B of a prison paper in
 * src/data/mock-exams-aqa.ts, so it was not used again here.)
 *
 * Two questions were reworded for the genuine passages, since the old wording
 * no longer fitted them: Exam 13 Question 2 asked about "farmers", and Cobbett
 * writes about labourers, so it now asks about "the people who produce food";
 * Exam 15 Question 4 asked about "the consequences of neglecting" the arts,
 * which Ruskin's lecture does not discuss, so it now asks "what the arts are
 * for". Every Question 2 and Question 4 answer was rewritten, and every
 * quotation in Questions 1 to 4 was checked by script against its paper's two
 * passages. The Source A articles are labelled as specially written, their
 * invented writers' names are gone from the answers, and the false figures are
 * replaced: local journalists as the Newspaper Society and Press Gazette report
 * them, the American research on newspaper closures and public borrowing costs
 * (Gao, Lee and Murphy, Journal of Financial Economics, 2020) in place of the
 * Reuters study, arts GCSEs down 40% since 2010 (the Cultural Learning
 * Alliance, on the 2022 results) with drama down 48% and music 35% (Campaign
 * for the Arts, on the 2025 results), and a season ticket at the Emirates
 * against a month's wages (Arsenal's general admission season tickets were
 * reported at £921.50 to £1,726 for 2025/26, against about £1,980 a month for
 * 37.5 hours a week at the 2025 national living wage of £12.21). The Question 1
 * keys each have exactly four true statements again, and the Question 3 errors
 * above are corrected, with three more found on review in Exam 15: "smiling
 * efficiency" called oxymoronic, the three figures called "three short
 * sentences" when the first has thirteen words, and "an optional extra"
 * called sarcastic.
 *
 * Exam 11's Source A said that reoffending "in the UK" stood at 48%, rising to
 * 64% after sentences under a year, and that a prisoner cost £47,000 a year.
 * None of those is what the Ministry of Justice now reports, and its
 * reoffending figures are for England and Wales, not the UK. On review the
 * article was brought into line with the Proven Reoffending Statistics
 * bulletin of 30 July 2026 (the July to September 2024 cohort): 40.6% of adults
 * released from custody reoffended within a year (44.0% the quarter before),
 * and 68.2% of those released from sentences under twelve months (66.0% in
 * January to March 2024). A prisoner in a public-sector prison cost £58,661 in
 * 2023-24 and £60,018 in 2024-25 (the Ministry's figures as reported by Inside
 * Time; the privately managed prisons that cost less hold a minority of
 * prisoners). The article now says "more than four in ten", "about two in
 * three" and "more than fifty thousand pounds", and the Question 3 answers
 * quote those words.
 *
 * To cut a passage again, with passage(text, section, from, to) on the whole
 * edition as one section, then trimmed to the sentences named:
 *   EXAM11_SOURCE_B  #882 "A Visit to Newgate", the two whole paragraphs "Retracing our steps to the dismal passage" to "On either side of the school-yard is a"
 *   EXAM12_SOURCE_B  #1017, the paragraph "In old days men had the rack", from that sentence to "That is much worse."
 *   EXAM13_SOURCE_B  #34238 "Ride down the Valley of the Avon", Salisbury, 30 August, the paragraph "The parish of Milton does, as we have seen"
 *   EXAM14_SOURCE_B  #72206 "The Fight", the paragraph "In the first round every one thought", from "If there had been a minute or more" to "in the whole course of your lives!"
 *   EXAM15_SOURCE_B  #19164 Lecture IV, sections 97 and 98, "Our subject of enquiry to-day" to "the grace of agency for life."
 *
 * WHY STRINGS, NOT passage() CALLS. These editions are not held in
 * src/data/full-texts, so there is nothing to cut from when the file loads, and
 * scripts/check-mock-exam-extracts.mjs reads each extract here as a string
 * literal: a constant set by a call would not be checked at all. The checker
 * compares every sentence with the Gutenberg text, so a passage here that
 * drifted from its edition would be reported.
 *
 * NOT CHANGED on 27 September 2026: marks, timings and Section B.
 *
 * REWORDED 31 OCTOBER 2026, to the questions AQA has set since summer 2026.
 * The reference is the guide, src/data/mark-scheme-guides/aqa-lang-paper2.ts,
 * checked against AQA's 8700/2 sample paper and mark scheme for June 2026.
 * Marks, totals, sections, sources and each question's number and type are
 * unchanged, and src/__tests__/a-language-mock-is-the-boards-paper.test.ts
 * still holds every paper to the marker's scheme. What was wrong, and what
 * changed:
 *   - Question 2 asked for "a summary of the similarities and differences".
 *     Since 2026 AQA asks what the student can infer about the differences
 *     the question names, and about differences only. Each now names two
 *     things, one in each source: the two groups of prisoners (Exam 11), the
 *     press now and in Wilde's day (12), the people who produce food (13),
 *     the young footballers and the two prize-fighters (14) and the two kinds
 *     of art (15). Its answers and mark scheme were rewritten to infer
 *     differences from both sources.
 *   - Question 3 asked about the whole of Source A. AQA's names lines of one
 *     source, and its mark scheme caps an answer that strays outside them.
 *     Each now names the second and third paragraphs, by their first words,
 *     since the page prints no line numbers; that also keeps it clear of the
 *     first paragraph, which Question 1 uses. Its answers were rewritten to
 *     quote those paragraphs only, and checked by script against them.
 *   - The wording was largely AQA's own rubric: "You need to refer to Source
 *     A and Source B for this question", "In your answer, you could:", "in
 *     which you argue your point of view on this statement" and, in Section
 *     B, "You are advised to spend about 45 minutes on this section". Every
 *     question and section note is now in this site's words, with AQA's
 *     advice on time.
 *   - Questions 2 and 3 suggested 10 and 15 minutes; AQA's Exam Timing Ideas
 *     give 8 and 12.
 *   - The mark schemes were the same five generic lines on every paper, and
 *     Question 2's credited similarities. Each now says what earns marks in
 *     that question, gives the guide's levels in plain words and states
 *     AQA's caps: one source only scores at most 3 on Question 2 and 6 on
 *     Question 4; Question 3 outside the named paragraphs goes to the bottom
 *     of its level; a Question 5 that misses the statement keeps at most 12
 *     of the 24 content marks.
 *   - Question 1: every statement was checked against its paragraph. Exam
 *     13's B ("Supermarkets deliberately maintain this disconnection") was
 *     looser than the paragraph, and Exam 14's A ("compares professional
 *     sport to capitalism") and H ("Billionaire oligarchs are involved in
 *     club ownership", when the clubs are only "backed by" them) could be
 *     read as not stated. Each is reworded to what the paragraph says. The
 *     keys are unchanged, and each still names exactly four true statements.
 *   - Question 4: the strongest answer, filed under Grade 6-7, is now Grade
 *     8-9. Claims corrected: Dickens "lets the reader judge" (he judges the
 *     boys openly); both writers "use comparisons" (Source A's dying
 *     democracy is not one); both "measure the value of farm work by how
 *     much it produces and how few people produce it" (Source A does not);
 *     both "disagree with people who think art is unimportant" (Ruskin
 *     answers a different criticism); "accommodation" was "bitterly" polite
 *     (it is ironic); Cobbett's last sentence was "a curse"; and Hickman,
 *     still fighting, was "the beaten man".
 *   - Question 5's three model answers described a good answer without
 *     giving one. Each paper now has one written out, under Grade 8-9, and
 *     none uses a figure its sources do not give. Exam 15's statement lost a
 *     dash, and the dashes in the site's own prose went with the old answers.
 *
 * CHECKED 31 OCTOBER 2026 by a second reader, against the guide and each
 * source as printed. What was wrong, and what changed:
 *   - Question 1 keys: Exams 14 and 15 both had A, C, E and H, and across the
 *     five papers A, C, E and H were each true four times and D and G never.
 *     Exam 14's statements are reordered (key now B, D, F and G) and Exam
 *     15's put in the paragraph's order (now A, C, D and G); no two keys
 *     match and every letter is true on two or three papers. Their mark
 *     schemes and model answers follow. The statements themselves are as
 *     they were.
 *   - Question 1 mark schemes: the only run of four letters was the false
 *     list ("A, D, F and G are false"), which reads as the key at a glance;
 *     each now opens with the true letters.
 *   - Question 1 quotations (Exams 12, 13, 15): a full stop inside the
 *     quotation marks where the source's sentence goes on ("Journalism is
 *     dying."); now outside.
 *   - Exam 12 Question 2: Source A's journalists "report on" council
 *     meetings that the source says now have no reporter (now "used to");
 *     Wilde's press watched "ordinary people", which his passage does not
 *     say (now private lives).
 *   - Exam 13 Question 2: the farmers "own their farms", which the source
 *     does not say (now "have property of their own").
 *   - Exam 13 Question 3: "the single verb" wept, in a sentence of several
 *     verbs (now "plain"); "the short sentences that follow" one objection,
 *     where one sentence follows (now quoted); the antithesis "ends on"
 *     existential, when its last word is "one" (answer and mark scheme).
 *   - Exam 14 Question 3: the list "ends on" shattered, which is in its last
 *     item (reworded); "as it almost certainly will" made failure sound
 *     "certain" (now "all but certain"); "the clubs" hide the exploitation,
 *     where the writer says "what we have built" (now the exploitation is
 *     hidden).
 *   - Exam 14 Question 4: the writers held "opposite views on competition",
 *     and competition damaged Source A's boys, when Source A says "I am not
 *     against competition" and that what we have built "is not
 *     competition"; the answers and the mark scheme now compare the sport
 *     each describes. "The fallen Hickman" was compared to Dante's figures;
 *     the passage gives his aspect "just before he fell" (now "bloodied").
 *   - Exam 15 Question 3: "an optional extra" showed that schools treat art
 *     as unimportant; the source says the curriculum does.
 *   - Exam 15 Question 4: Ruskin's "law of nature" was the pleasure we take
 *     "in useful things"; it is our pleasure in making a useful thing well.
 */
import type { MockExamPaper } from './types'

// ─── Source Extracts ─────────────────────────────────────────────────────────

// Exam 11: Justice & Prison
const EXAM11_SOURCE_A = `There is something profoundly wrong with a society that locks away its most vulnerable citizens and calls it justice. I spent three months visiting prisons across England and Wales, speaking to inmates, guards, and governors, and what I found was not a system designed to rehabilitate but a system designed to warehouse. Men and women are crammed into cells built for one but housing two or three, with a plastic curtain separating the toilet from the bed, eating meals on their laps because there is no table, and marking off days on walls because time has become the only currency they possess.

The numbers tell their own story. In England and Wales, more than four in ten adults released from prison reoffend within a year. Among those who served sentences of less than twelve months, the figure rises to about two in three. We are spending more than fifty thousand pounds per prisoner per year to achieve a system that fails more than four times in ten. If a hospital discharged patients only to have four in ten of them return within a year with the same condition, we would call it a scandal. When our prisons do the same, we call it inevitable.

What I found most disturbing was not the overcrowding or the violence - though both are endemic - but the sheer waste of human potential. I met a man who had taught himself to read in prison, a woman who had written a novel, a young father who had gained three A-levels. The system had given them time, and they had done something extraordinary with it. But the system had given them nothing else: no support, no pathway, no reason to believe that what they had achieved mattered to anyone beyond those walls.`

const EXAM11_SOURCE_A_REF = 'Opinion article, specially written for this paper'

const EXAM11_SOURCE_B = `Retracing our steps to the dismal passage in which we found ourselves at first (and which, by-the-bye, contains three or four dark cells for the accommodation of refractory prisoners), we were led through a narrow yard to the ‘school’—a portion of the prison set apart for boys under fourteen years of age. In a tolerable-sized room, in which were writing-materials and some copy-books, was the schoolmaster, with a couple of his pupils; the remainder having been fetched from an adjoining apartment, the whole were drawn up in line for our inspection. There were fourteen of them in all, some with shoes, some without; some in pinafores without jackets, others in jackets without pinafores, and one in scarce anything at all. The whole number, without an exception we believe, had been committed for trial on charges of pocket-picking; and fourteen such terrible little faces we never beheld.—There was not one redeeming feature among them—not a glance of honesty—not a wink expressive of anything but the gallows and the hulks, in the whole collection. As to anything like shame or contrition, that was entirely out of the question. They were evidently quite gratified at being thought worth the trouble of looking at; their idea appeared to be, that we had come to see Newgate as a grand affair, and that they were an indispensable part of the show; and every boy as he ‘fell in’ to the line, actually seemed as pleased and important as if he had done something excessively meritorious in getting there at all. We never looked upon a more disagreeable sight, because we never saw fourteen such hopeless creatures of neglect, before.

On either side of the school-yard is a yard for men, in one of which—that towards Newgate-street—prisoners of the more respectable class are confined. Of the other, we have little description to offer, as the different wards necessarily partake of the same character. They are provided, like the wards on the women’s side, with mats and rugs, which are disposed of in the same manner during the day; the only very striking difference between their appearance and that of the wards inhabited by the females, is the utter absence of any employment. Huddled together on two opposite forms, by the fireside, sit twenty men perhaps; here, a boy in livery; there, a man in a rough great-coat and top-boots; farther on, a desperate-looking fellow in his shirt-sleeves, with an old Scotch cap upon his shaggy head; near him again, a tall ruffian, in a smock-frock; next to him, a miserable being of distressed appearance, with his head resting on his hand;—all alike in one respect, all idle and listless. When they do leave the fire, sauntering moodily about, lounging in the window, or leaning against the wall, vacantly swinging their bodies to and fro. With the exception of a man reading an old newspaper, in two or three instances, this was the case in every ward we entered.`

const EXAM11_SOURCE_B_REF =
  'Charles Dickens, "A Visit to Newgate", Sketches by Boz, 1836 (Project Gutenberg #882). Dickens is shown round Newgate, the London prison beside the Old Bailey where people were held for trial. "Refractory": disobedient. "The hulks": old ships used as prisons for convicts. "Livery": a servant\'s uniform. "Smock-frock": a farm worker\'s loose overshirt. "Forms": benches.'

// Exam 12: Media & Journalism
const EXAM12_SOURCE_A = `Journalism is dying, and we are all complicit in its murder. Every time you scroll past a paywall, every time you share an article without reading beyond the headline, every time you declare that "the mainstream media can't be trusted" while uncritically consuming the claims of anonymous social media accounts, you drive another nail into the coffin of accountability.

I have been a journalist for twenty-two years. I have watched newsrooms shrink from bustling floors of a hundred reporters to skeleton crews of fifteen. I have watched colleagues - brilliant, dedicated, irreplaceable colleagues - take redundancy packages and retrain as teachers, civil servants, anything that offers the security that journalism no longer can. In the mid-2000s, local newspapers in the UK employed around 13,000 journalists. That number has at least halved since. Entire towns have no reporter assigned to cover their council meetings, their courts, their schools. Democracy does not die in darkness - it dies in the spaces where nobody is watching.

The consequences are not abstract. When local journalism disappears, public money is watched less closely, and we all pay for it. Researchers in the United States who studied places that had lost their local newspaper found that it then cost their local governments more to borrow - not because the officials became more corrupt overnight, but because lenders knew that nobody was watching any more.`

const EXAM12_SOURCE_A_REF = 'Opinion article, specially written for this paper'

const EXAM12_SOURCE_B = `In old days men had the rack. Now they have the press. That is an improvement certainly. But still it is very bad, and wrong, and demoralising. Somebody—was it Burke?—called journalism the fourth estate. That was true at the time, no doubt. But at the present moment it really is the only estate. It has eaten up the other three. The Lords Temporal say nothing, the Lords Spiritual have nothing to say, and the House of Commons has nothing to say and says it. We are dominated by Journalism. In America the President reigns for four years, and Journalism governs for ever and ever. Fortunately in America Journalism has carried its authority to the grossest and most brutal extreme. As a natural consequence it has begun to create a spirit of revolt. People are amused by it, or disgusted by it, according to their temperaments. But it is no longer the real force it was. It is not seriously treated. In England, Journalism, not, except in a few well-known instances, having been carried to such excesses of brutality, is still a great factor, a really remarkable power. The tyranny that it proposes to exercise over people’s private lives seems to me to be quite extraordinary. The fact is, that the public have an insatiable curiosity to know everything, except what is worth knowing. Journalism, conscious of this, and having tradesman-like habits, supplies their demands. In centuries before ours the public nailed the ears of journalists to the pump. That was quite hideous. In this century journalists have nailed their own ears to the keyhole. That is much worse.`

const EXAM12_SOURCE_B_REF =
  'Oscar Wilde, "The Soul of Man under Socialism", first published in The Fortnightly Review, 1891; the text is that of the Arthur L. Humphreys edition (Project Gutenberg #1017). The "fourth estate" is the press, thought of as a fourth power beside the Lords Spiritual (the bishops), the Lords Temporal (the other peers) and the House of Commons.'

// Exam 13: Food & Agriculture
const EXAM13_SOURCE_A = `We have become a nation of people who do not know where their food comes from, and this ignorance is not accidental - it is cultivated. The supermarket, with its fluorescent lights and its infinite shelves of plastic-wrapped produce, is designed to sever the connection between the thing you eat and the place it grew. A chicken breast in a polystyrene tray bears no resemblance to a chicken. A bag of pre-washed salad leaves tells you nothing of the migrant workers who picked them at four in the morning for less than the minimum wage.

I spent a year working on farms across Britain - arable, dairy, livestock, organic, industrial - and what I learned changed the way I think about every meal I eat. The dairy farmer in Somerset who wept when he told me he was selling his herd because the supermarkets were paying him less per litre than it cost to produce. The fruit farmer in Kent whose strawberries rotted in the fields because there were no longer enough seasonal workers to pick them. The pig farmer in Yorkshire who had invested everything in high-welfare systems only to be undercut by imports from countries where the regulations he was legally required to meet simply did not exist.

These are not sentimental stories. They are economic realities with profound consequences. When we allow our farming industry to collapse - and make no mistake, that is what is happening - we do not merely lose picturesque landscapes and rural traditions. We lose food security. We lose the ability to feed ourselves. And in a world of climate crisis and geopolitical instability, that is not a romantic concern. It is an existential one.`

const EXAM13_SOURCE_A_REF = 'Opinion article, specially written for this paper'

const EXAM13_SOURCE_B = `The parish of Milton does, as we have seen, produce food, drink, clothing, and all other things, enough for 502 families, or 2510 persons upon my allowance, which is a great deal more than three times the present allowance, because the present allowance includes clothing, fuel, tools, and everything. Now, then, according to the "Population Return," laid before Parliament, this parish contains 500 persons, or, according to my division, one hundred families. So that here are about one hundred families to raise food and drink enough, and to raise wool and other things to pay for all other necessaries, for five hundred and two families! Aye, and five hundred and two families fed and lodged, too, on my liberal scale. Fed and lodged according to the present scale, this one hundred families raise enough to supply more, and many more, than fifteen hundred families; or seven thousand five hundred persons! And yet those who do the work are half starved! In the 100 families there are, we will suppose, 80 able working men, and as many boys, sometimes assisted by the women and stout girls. What a handful of people to raise such a quantity of food! What injustice, what a hellish system it must be, to make those who raise it skin and bone and nakedness, while the food and drink and wool are almost all carried away to be heaped on the fund-holders, pensioners, soldiers, dead-weight, and other swarms of tax-eaters! If such an operation do not need putting an end to, then the devil himself is a saint.`

const EXAM13_SOURCE_B_REF =
  'William Cobbett, Rural Rides (1830), "Ride down the Valley of the Avon in Wiltshire", Salisbury, 30 August 1826 (Project Gutenberg #34238). Cobbett has worked out what one parish produces. "Population Return": the census. "Fund-holders": people living on interest from the national debt. "Dead-weight": pensions and half-pay of retired officers. "Tax-eaters": all who lived on taxes.'

// Exam 14: Sport & Competition
const EXAM14_SOURCE_A = `Professional sport has become a laboratory for everything that is wrong with modern capitalism, and we cheer it on from the stands. The Premier League is not a sporting competition - it is a financial arms race in which clubs backed by sovereign wealth funds and billionaire oligarchs compete to spend the most obscene sums on human talent, while the communities those clubs were built to serve are priced out of their own stadiums. A season ticket at the Emirates can cost nearly a month's wages for a worker on the national living wage. The beautiful game has become the exclusive game.

But the corruption runs deeper than ticket prices. The treatment of young athletes - children, really - reveals the true moral character of professional sport. Academies recruit boys as young as nine, subject them to years of intense physical and psychological pressure, and then release the vast majority at sixteen or seventeen with no qualifications, no fallback, and a shattered sense of identity. For every player who makes it, there are a hundred who are discarded. We celebrate the one and forget the hundred, because the story of success is commercially useful and the story of failure is not.

I am not against competition. Competition is fundamental to human flourishing. But what we have built is not competition - it is exploitation dressed in the language of aspiration. When we tell a fourteen-year-old that he could be the next Marcus Rashford, we are not inspiring him. We are using him. And when his dream collapses, as it almost certainly will, we will not be there to catch him.`

const EXAM14_SOURCE_A_REF = 'Opinion article, specially written for this paper'

const EXAM14_SOURCE_B = `If there had been a minute or more allowed between each round, it would have been intelligible how they should by degrees recover strength and resolution; but to see two men smashed to the ground, smeared with gore, stunned, senseless, the breath beaten out of their bodies; and then, before you recover from the shock, to see them rise up with new strength and courage, stand steady to inflict or receive mortal offence, and rush upon each other ‘like two clouds over the Caspian’—this is the most astonishing thing of all:—this is the high and heroic state of man! From this time forward the event became more certain every round; and about the twelfth it seemed as if it must have been over. Hickman generally stood with his back to me; but in the scuffle, he had changed positions, and Neate just then made a tremendous lunge at him, and hit him full in the face. It was doubtful whether he would fall backwards or forwards; he hung suspended for a second or two, and then fell back, throwing his hands in the air, and with his face lifted up to the sky. I never saw any thing more terrific than his aspect just before he fell. All traces of life, of natural expression, were gone from him. His face was like a human skull, a death’s head, spouting blood. The eyes were filled with blood, the nose streamed with blood, the mouth gaped blood. He was not like an actual man, but like a preternatural, spectral appearance, or like one of the figures in Dante’s Inferno. Yet he fought on after this for several rounds, still striking the first desperate blow, and Neate standing on the defensive, and using the same cautious guard to the last, as if he had still all his work to do; and it was not till the Gas-man was so stunned in the seventeenth or eighteenth round, that his senses forsook him, and he could not come to time, that the battle was declared over. Ye who despise the Fancy, do something to shew as much pluck, or as much self-possession as this, before you assume a superiority which you have never given a single proof of by any one action in the whole course of your lives!`

const EXAM14_SOURCE_B_REF =
  'William Hazlitt, "The Fight", The New Monthly Magazine, February 1822 (Collected Works, ed. A. R. Waller and Arnold Glover, vol. 12, Project Gutenberg #72206). Hazlitt watches a bare-knuckle prize-fight between Bill Neate and Tom Hickman, "the Gas-man". "The Fancy": boxing and its followers. "Come to time": stand up for the next round when the half-minute between rounds is over.'

// Exam 15: Art & Creativity
const EXAM15_SOURCE_A = `Arts education is being systematically dismantled in this country, and we will pay for it in ways we cannot yet imagine. Since 2010, the number of students taking arts GCSEs has fallen by 40%. Drama entries have dropped by 48%. Music by 35%. These are not statistical fluctuations. They are the consequences of deliberate policy choices that have told an entire generation that creativity is a luxury, not a necessity.

The argument against the arts is always economic: they are expensive to teach, difficult to measure, and unlikely to lead to employment. This argument is wrong on every count. The creative industries contribute over a hundred billion pounds to the UK economy annually - more than aerospace, automotive, and life sciences combined. They employ over two million people. They are one of the few sectors in which Britain genuinely leads the world. And we are undermining their future workforce with a curriculum that treats art as an optional extra, a reward for schools that have achieved sufficiently high scores in the subjects that actually matter.

But the deeper damage is not economic. It is human. When you cut arts education, you do not simply remove a subject from the timetable. You remove a language - the language through which young people learn to express what cannot be expressed in essays or equations. The teenager who cannot articulate her grief but can paint it. The boy who cannot sit still in a classroom but can lose himself for hours in a drum kit. These are not indulgences. They are lifelines. And we are cutting them with the smiling efficiency of people who have never needed them.`

const EXAM15_SOURCE_A_REF = 'Opinion article, specially written for this paper'

const EXAM15_SOURCE_B = `Our subject of enquiry to-day, you will remember, is the mode in which fine art is founded upon, or may contribute to, the practical requirements of human life.

Its offices in this respect are mainly twofold: it gives Form to knowledge, and Grace to utility; that is to say, it makes permanently visible to us things which otherwise could neither be described by our science, nor retained by our memory; and it gives delightfulness and worth to the implements of daily use, and materials of dress, furniture and lodging. In the first of these offices it gives precision and charm to truth; in the second it gives precision and charm to service. For, the moment we make anything useful thoroughly, it is a law of nature that we shall be pleased with ourselves, and with the thing we have made; and become desirous therefore to adorn or complete it, in some dainty way, with finer art expressive of our pleasure.

And the point I wish chiefly to bring before you to-day is this close and healthy connection of the fine arts with material use; but I must first try briefly to put in clear light the function of art in giving Form to truth.

Much that I have hitherto tried to teach has been disputed on the ground that I have attached too much importance to art as representing natural facts, and too little to it as a source of pleasure. And I wish, in the close of these four prefatory lectures, strongly to assert to you, and, so far as I can in the time, convince you, that the entire vitality of art depends upon its being either full of truth, or full of use; and that, however pleasant, wonderful or impressive it may be in itself, it must yet be of inferior kind, and tend to deeper inferiority, unless it has clearly one of these main objects,—either to state a true thing, or to adorn a serviceable one. It must never exist alone—never for itself; it exists rightly only when it is the means of knowledge, or the grace of agency for life.`

const EXAM15_SOURCE_B_REF =
  'John Ruskin, Lectures on Art, delivered before the University of Oxford in Hilary Term, 1870: Lecture IV, "The Relation of Art to Use", sections 97 and 98 (Project Gutenberg #19164). Ruskin was then the first Slade Professor of Fine Art at Oxford.'

// ─── Mark-scheme levels, shared by the five papers ──────────────────────────
// In plain words, from the guide (src/data/mark-scheme-guides/aqa-lang-paper2.ts),
// which follows AQA's 8700/2 sample mark scheme for June 2026.

/** Question 2, inference and synthesis (AO1): eight marks on four levels. */
const Q2_LEVELS = [
  'Level 4, 7-8 marks: sharp, thoughtful inferences, with precise details from both sources woven together to bring out the differences.',
  'Level 3, 5-6 marks: sound inferences from both sources, linking well-chosen details from each to show the differences.',
  'Level 2, 3-4 marks: some attempt to work out what details suggest, with some useful references and some differences noted.',
  'Level 1, 1-2 marks: retells what the sources say rather than working anything out, with a simple difference and a detail or two.',
]

/** Question 3, language (AO2): twelve marks on four levels. */
const Q3_LEVELS = [
  "Level 4, 10-12 marks: looks beneath the surface, analysing how the writer's choices work together, with sharply chosen quotations and confident, precise subject terms.",
  'Level 3, 7-9 marks: says plainly what effect the words of each quotation have on the reader and why, with several well-chosen quotations and correct terms.',
  'Level 2, 4-6 marks: tries to say what some of the language does, with a few suitable quotations and some terms.',
  'Level 1, 1-3 marks: says something basic about a word or two, or names a technique without saying what it does.',
]

/** Question 4, comparison (AO3): sixteen marks on four levels. */
const Q4_LEVELS = [
  "Level 4, 13-16 marks: a thoughtful, sustained comparison, analysing how each writer's methods shape their view, with well-chosen detail from both sources.",
  'Level 3, 9-12 marks: compares the views directly and well, explaining how each writer conveys them, with relevant detail from both sources.',
  "Level 2, 5-8 marks: tries to compare the writers' views, with some comment on their methods and some useful detail.",
  "Level 1, 1-4 marks: makes a basic link between the writers' views and spots a method or two, with simple references.",
]

/** Question 5, content and organisation (AO5): twenty-four marks on four levels. */
const Q5_AO5_LEVELS = [
  'Level 4, 19-24 marks: argues with real force and confidence, pitched exactly for the audience; ambitious, exact vocabulary and a carefully planned structure carry the reader through a developed argument.',
  'Level 3, 13-18 marks: argues clearly throughout, in a tone that suits the form and audience; vocabulary and persuasive methods are chosen for effect, and well-linked paragraphs build the case.',
  'Level 2, 7-12 marks: puts a view across in places, with some attempt at a suitable tone and form and some deliberate word choices; paragraphs and linking phrases begin to organise the argument.',
  'Level 1, 1-6 marks: states a view simply, with little sense of the audience; ideas are few and loosely joined, and paragraphs, if used, do not really organise the argument.',
]

/** Question 5, technical accuracy (AO6): sixteen marks on four levels. */
const Q5_AO6_LEVELS = [
  'Level 4, 13-16 marks: every sentence starts and ends in the right place and every kind of punctuation is used with skill; even adventurous words are spelt right, and long sentences stay clear and correct.',
  'Level 3, 9-12 marks: sentences nearly always start and end in the right place and most punctuation is used well; most words are spelt right, hard ones included, and sentence types are varied on purpose.',
  'Level 2, 5-8 marks: sentences usually start and end in the right place and several kinds of punctuation are tried; some harder words are spelt correctly, with some variety in sentences and words.',
  'Level 1, 1-4 marks: a few sentences start and end in the right place and some punctuation is used on purpose; simple words are spelt correctly, but sentences and vocabulary are mostly simple.',
]

// ─── Mock Exam Papers ────────────────────────────────────────────────────────

export const aqaP2C: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 11 - Justice & Prison
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p2-11',
    board: 'AQA',
    paperNumber: 2,
    title: "Paper 2: Writers' Viewpoints and Perspectives",
    subtitle: 'English Language 8700/2',
    code: '8700/2',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p2-11-reading',
        title: 'Section A: Reading',
        description: `Spend about 15 minutes reading both sources and all five questions before you start writing. Then allow about 45 minutes for Questions 1 to 4, which must all be answered.\n\nSource A: ${EXAM11_SOURCE_A_REF}\nSource B: ${EXAM11_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p2-11-q1',
            questionNumber: 1,
            questionText:
              'Look again at the first paragraph of Source A, from "There is something profoundly wrong" to "the only currency they possess".\n\nWhich four of the statements below are true, according to this paragraph? Choose four letters, and no more.\n\nA) The writer visited prisons in Scotland.\nB) The writer spoke to inmates and guards.\nC) Cells designed for one person sometimes house two or three.\nD) Prisoners eat their meals at a dining table.\nE) A plastic curtain separates the toilet from the bed.\nF) The writer spent three weeks visiting prisons.\nG) The writer believes the system is designed to rehabilitate.\nH) Prisoners mark off days on walls.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${EXAM11_SOURCE_A}\n\nSource B:\n${EXAM11_SOURCE_B}`,
            extractSource: `Source A: ${EXAM11_SOURCE_A_REF} | Source B: ${EXAM11_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'B, C, E and H.\nB: the writer was "speaking to inmates, guards, and governors".\nC: the cells were "built for one but housing two or three".\nE: there is "a plastic curtain separating the toilet from the bed".\nH: prisoners are "marking off days on walls".',
            },
            markScheme: [
              'True: B, C, E and H.',
              'B is true: the writer was "speaking to inmates, guards, and governors".',
              'C is true: the cells were "built for one but housing two or three".',
              'E is true: there is "a plastic curtain separating the toilet from the bed".',
              'H is true: prisoners are "marking off days on walls".',
              'A, D, F and G are false: the prisons were "across England and Wales"; meals are eaten "on their laps because there is no table"; the visits took "three months"; and the writer found "not a system designed to rehabilitate".',
              'One mark for each true statement chosen, 4 marks in all. A false statement earns no mark.',
            ],
          },
          {
            id: 'aqa-p2-11-q2',
            questionNumber: 2,
            questionText:
              'Use both sources to answer this question.\n\nThink about the prisoners in Source A and the prisoners Dickens sees in Newgate in Source B. What can you infer from the two sources about how these two groups differ?\n\nSupport each inference with details from both sources.',
            marks: 8,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: `Source A:\n${EXAM11_SOURCE_A}\n\nSource B:\n${EXAM11_SOURCE_B}`,
            extractSource: `Source A: ${EXAM11_SOURCE_A_REF} | Source B: ${EXAM11_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'The prisoners in Source A are men and women, but many of the prisoners in Source B are boys "under fourteen years of age". This suggests that in Dickens\'s time even young children were held in prison. The prisoners in Source A are "crammed into cells built for one", so they have very little space, while in Newgate a ward of perhaps twenty men sits together "by the fireside". Some prisoners in Source A have worked hard, like the man who "taught himself to read in prison", which shows that they want to improve themselves. The men in Source B are "all idle and listless", which suggests that they are bored and have given up. The boys in Source B also seem pleased to be there and show no "shame or contrition", whereas the prisoners in Source A seem unhappy, "marking off days on walls".',
              'Grade 8-9':
                'The prisoners in Source A are adults serving sentences, while many of those Dickens sees are children: boys "under fourteen years of age" who have been "committed for trial" and are waiting to be tried. This suggests that Newgate held children who had not yet been found guilty in the same prison as grown men.\n\nThe two groups also feel their imprisonment differently. Source A\'s prisoners are "marking off days on walls", which suggests people counting down to their release because time is all they have left. Dickens\'s boys show no wish to leave. They are "quite gratified at being thought worth the trouble of looking at", which implies that they are not used to being noticed, and each seems "as pleased and important" as if getting there were an achievement. For them, Newgate seems to bring a kind of status.\n\nThe biggest difference is in what they do with their time. Some of Source A\'s prisoners have used it to change themselves: one "taught himself to read in prison" and another "gained three A-levels", even though the system gave them "no support". This suggests ambition and hope that survive without help. In Newgate there is "the utter absence of any employment", and the men are "all idle and listless", "vacantly swinging their bodies to and fro", with only the odd man reading "an old newspaper". With nothing to do, they seem to have given up, and Dickens sees nothing ahead of the boys but "the gallows and the hulks".',
            },
            markScheme: {
              'What to reward': [
                'Inferences, not just retelling: what the details suggest about how the two groups of prisoners differ, with details from both sources.',
                'Who they are: adults serving sentences ("Men and women", "a young father") against boys "under fourteen years of age" waiting for trial, beside yards full of men.',
                'How they feel about prison: counting the days ("marking off days on walls") against boys "quite gratified at being thought worth the trouble of looking at", with no "shame or contrition".',
                'What they do with their time: some in Source A achieve something with "no support"; the men in Newgate, with "the utter absence of any employment", are "all idle and listless".',
                'How they live: cells "built for one but housing two or three", with "a plastic curtain" for privacy, against a ward where the men sit together "by the fireside".',
                'Credit any other sound inference about a difference between the two groups, backed from both sources.',
              ],
              'Levels (8 marks)': Q2_LEVELS,
              Limits: [
                'An answer that uses one source only scores 3 marks at most.',
                'Level 3 and above need both sources and the difference the question names, between the two groups of prisoners.',
                "Marks are for what is inferred. Comment on the writers' language belongs to Question 3 and is not rewarded here.",
              ],
            },
          },
          {
            id: 'aqa-p2-11-q3',
            questionNumber: 3,
            questionText:
              'Look again at the second and third paragraphs of Source A, from "The numbers tell their own story" to the end.\n\nIn these two paragraphs, how does the writer\'s language persuade the reader that the prison system is failing?\n\nQuote short phrases from these paragraphs only, and explain the effect of the words, images and kinds of sentence the writer chooses. Use subject terms where they help.',
            marks: 12,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${EXAM11_SOURCE_A}`,
            extractSource: EXAM11_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer starts the second paragraph with "The numbers tell their own story", which makes the statistics sound like proof. Figures such as "more than four in ten" show how often prison fails. The comparison with a hospital makes the reader see that we would never accept this failure anywhere else, because "we would call it a scandal". The word "scandal" is emotive and contrasts with "inevitable", which suggests that we have simply given up on prisons. In the third paragraph the writer gives three examples of prisoners who achieved something, such as "a woman who had written a novel". This makes the reader feel sympathy, because they are real people. The repetition of "no" in "no support, no pathway, no reason to believe" emphasises how little help the prisoners are given.',
              'Grade 8-9':
                'The writer persuades by making the failure measurable and then making it personal.\n\nThe second paragraph opens with a short, confident sentence, "The numbers tell their own story", which personifies the figures as witnesses whose evidence needs no comment. The statistics are given in words rather than percentages, "more than four in ten" and "about two in three", which makes them easier to picture as people, and the verb "rises" shows the failure growing worse for shorter sentences. The writer then sets cost against result: "We are spending" over fifty thousand pounds a prisoner every year "to achieve a system that fails". The inclusive "We" makes every taxpayer a partner in the waste, and "achieve" is ironic, since what is achieved is failure. The hospital analogy turns reoffending into an illness that prison is supposed to cure, and the paragraph ends on two sentences built the same way, so that "we would call it a scandal" is answered by "we call it inevitable". The antithesis of "scandal" and "inevitable" exposes a double standard and suggests that the reader has simply accepted failure.\n\nThe third paragraph moves from numbers to people. The structure "not the overcrowding or the violence ... but the sheer waste of human potential" sets two evils aside to make room for a worse one, even though the aside admits that both are "endemic". The word is often used of diseases, so it continues the hospital image: the prisons seem sick, and their worst symptom is waste. Three examples follow, a man who "taught himself to read", "a woman who had written a novel" and "a young father", and they turn the statistics back into people. The repeated "the system had given them" sets "time" against "nothing else", and the list after the colon, "no support, no pathway, no reason to believe", drives home the absence with one negative after another. The metaphor of a "pathway" suggests a route out of prison that does not exist, and the final phrase, "beyond those walls", leaves the reader looking at the walls that shut these achievements in.',
            },
            markScheme: {
              'What to reward': [
                'How the figures are made to persuade: the opening "The numbers tell their own story", fractions in words ("more than four in ten", "about two in three") and the cost set against the failure.',
                'The hospital analogy, and the antithesis of "scandal" and "inevitable", which exposes a double standard.',
                'The move from numbers to people: "the sheer waste of human potential", the word "endemic" and the three prisoners who achieved something.',
                'The repeated "the system had given them", the list "no support, no pathway, no reason to believe" and the closing image of "those walls".',
                'Subject terms (analogy, antithesis, list of three, repetition, inclusive pronoun) earn credit when the effect is explained, not for being named.',
              ],
              'Levels (12 marks)': Q3_LEVELS,
              Limits: [
                'Only the second and third paragraphs of Source A count. Writing about the first paragraph or about Source B places the answer at the bottom of the level it would otherwise reach.',
                'Level 3 and above need the focus of the question: how the language shows the prison system failing.',
              ],
            },
          },
          {
            id: 'aqa-p2-11-q4',
            questionNumber: 4,
            questionText:
              "Answer this question using both sources, from beginning to end.\n\nCompare the two writers' feelings and perspectives on prisons and the people held in them. Explain how each writer gets them across, through choices such as tone, language and structure, and refer closely to both sources.",
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${EXAM11_SOURCE_A}\n\nSource B:\n${EXAM11_SOURCE_B}`,
            extractSource: `Source A: ${EXAM11_SOURCE_A_REF} | Source B: ${EXAM11_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers criticise prisons, but in different ways. Source A attacks the whole system, saying it is "designed to warehouse" people rather than to rehabilitate them, and uses statistics and a comparison with a hospital to show that prisons fail. Dickens, in Source B, does not use statistics. He describes what he sees on a visit to Newgate: men who are "idle and listless" because there is no work for them, and boys who show no "shame or contrition". Both writers suggest that prison does nothing to make people better. Source A says the system gave prisoners time and "nothing else", and Dickens shows men with nothing to do. Their attitudes to the prisoners are different. Source A is sympathetic and describes prisoners who achieved something, like the man who "taught himself to read". Dickens is much harsher: he says there was "not one redeeming feature" among the boys. However, he ends his description of them by calling them "hopeless creatures of neglect", which suggests that he also blames the people who should have looked after them.',
              'Grade 8-9':
                'Both writers judge a prison by what it does with the people it holds, and both find that it does almost nothing, but their attitudes to the prisoners themselves are very different. The writer of Source A argues openly. The prison system is "a system designed to warehouse", and the case is built from visits, statistics and an analogy: if a hospital failed its patients like this, "we would call it a scandal". Dickens argues by showing. He writes as a visitor being shown round, and his criticism lies in what he chooses to notice: "dark cells for the accommodation of refractory prisoners", where "accommodation" is ironically polite, and wards marked by "the utter absence of any employment". His long sentence listing the men by the fire, from "a boy in livery" to "a miserable being of distressed appearance", ends on what they all share: they are "all idle and listless". Like Source A\'s warehouse, Newgate stores people and gives them nothing to do. The writers differ in how they see the prisoners. Source A humanises them through individuals who did "something extraordinary" with their time, and blames the system that gave them "nothing else". Dickens\'s first response to the boys is disgust: "fourteen such terrible little faces we never beheld", with "not one redeeming feature among them" and nothing ahead of them but "the gallows and the hulks". His irony mocks their pride, as if each boy had done "something excessively meritorious in getting there at all". Yet his last sentence about them shifts the blame: he has never seen "fourteen such hopeless creatures of neglect". Neglect implies someone who should have cared for them and did not. Both writers therefore end up looking beyond the prisoners: Source A to whether their achievements matter to anyone "beyond those walls", Dickens to the neglect that brought children to Newgate.',
            },
            markScheme: {
              'What to reward': [
                'A comparison of perspectives: Source A attacks a system "designed to warehouse" and mourns "the sheer waste of human potential"; Dickens is repelled by the boys ("not one redeeming feature") yet ends by calling them "hopeless creatures of neglect".',
                'A comparison of methods: Source A argues openly, with statistics, a hospital analogy and individual cases; Dickens writes as a visitor being shown round, with irony ("something excessively meritorious") and a long, listing sentence that ends "all idle and listless".',
                'Where they meet: both show people given nothing to do with their time ("nothing else"; "the utter absence of any employment"), and both look past the prisoners to those responsible for them.',
                'Evidence from across both whole sources, with comment on what each detail shows. Linking words such as whereas and similarly help, but the comparison must be of views and methods, not only of content.',
              ],
              'Levels (16 marks)': Q4_LEVELS,
              Limits: [
                'An answer that uses one source only scores 6 marks at most.',
                'Level 3 and above need both sources.',
              ],
            },
          },
        ],
      },
      {
        id: 'aqa-p2-11-writing',
        title: 'Section B: Writing',
        description:
          'Allow about 45 minutes for this section: about 5 minutes to plan, 35 to write and 5 to check your work. Question 5 is marked for content and organisation (24 marks) and for technical accuracy (16 marks).',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p2-11-q5',
            questionNumber: 5,
            questionText:
              '"Prison should focus on rehabilitation, not punishment. Locking people up and throwing away the key helps nobody."\n\nWrite an article for a broadsheet newspaper in which you give your own view on this statement and make the case for it.\n\n(40 marks: 24 for content and organisation, 16 for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9':
                'Punishment That Changes Nothing\n\nEvery few years, a politician promises to be "tough on crime". Longer sentences, fuller prisons, harsher regimes: the words change, but the message stays the same. Lock them up, and the problem goes away. It is a comforting idea. It is also wrong.\n\nLet me be clear about what I am not saying. Prison must punish. Someone who has burgled a home or attacked a stranger has done real harm, and victims are entitled to see that harm taken seriously. A few people are so dangerous that the public needs protecting from them for a very long time. Nobody sensible wants to throw open the prison gates.\n\nBut punishment and rehabilitation are not opposites, and we should stop pretending that we must choose between them. The question is not whether we punish, but what we want punishment to achieve. If the answer is a safer country, then a prison that releases people as likely to offend as when they went in has failed on its own terms. In England and Wales, more than four in ten adults released from prison reoffend within a year. Every one of those failures has a victim.\n\nConsider what we actually do with people inside. We take a young man who may never have held a steady job, who may have left school barely able to read, and we give him years of empty time. Then we release him with a small sum of money and a bag of belongings, and we are surprised when he returns. A prison that teaches a man to read, trains him for a trade and helps him find somewhere to live is not being soft. It is doing the one thing that makes the rest of us safer.\n\nThose who call this too generous often speak for victims, and their anger deserves respect. Yet many victims want something more lasting than revenge: they want to know that what happened to them will not happen to anyone else. "Throwing away the key" sounds strong, but almost every prisoner comes home one day. The key is never really thrown away. The only choice we have is what kind of person walks out through the gate.\n\nThere is a practical argument, too. Prison is expensive, and every reoffender starts the cycle again: another arrest, another trial, another sentence, another bill. Money spent on education and support inside prison is not a gift to criminals. It is an investment in fewer crimes.\n\nSo yes, prison should punish. The loss of freedom is itself a heavy punishment, and it should be. But a prison that does nothing except punish helps nobody: not the prisoner, not the victim and not the public who pay for it. We should judge our prisons not by how harsh they feel, but by how few of the people who leave them ever come back.',
            },
            markScheme: {
              'What to reward in this task': [
                'A clear view on the statement, held and developed all the way through.',
                'The features of a broadsheet article: a headline, an opening that draws the reader in and paragraphs that build to a firm conclusion, in a formal, thoughtful voice.',
                'Reasons developed with examples, and the other side answered fairly, for instance the needs of victims or the wish to keep the public safe.',
                'Accurate spelling and punctuation, with varied sentences and well-chosen words, which earn the separate 16 marks.',
              ],
              'Content and organisation (AO5, 24 marks)': Q5_AO5_LEVELS,
              'Technical accuracy (AO6, 16 marks)': Q5_AO6_LEVELS,
              Limit: [
                'Writing that does not respond to the statement in the way the task asks cannot score more than 12 of the 24 content marks.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 12 - Media & Journalism
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p2-12',
    board: 'AQA',
    paperNumber: 2,
    title: "Paper 2: Writers' Viewpoints and Perspectives",
    subtitle: 'English Language 8700/2',
    code: '8700/2',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p2-12-reading',
        title: 'Section A: Reading',
        description: `Spend about 15 minutes reading both sources and all five questions before you start writing. Then allow about 45 minutes for Questions 1 to 4, which must all be answered.\n\nSource A: ${EXAM12_SOURCE_A_REF}\nSource B: ${EXAM12_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p2-12-q1',
            questionNumber: 1,
            questionText:
              'Look again at the first paragraph of Source A, from "Journalism is dying" to "the coffin of accountability".\n\nWhich four of the statements below are true, according to this paragraph? Choose four letters, and no more.\n\nA) The writer believes journalism is in decline.\nB) The writer blames only the government for this.\nC) People scroll past paywalls.\nD) People always read articles fully before sharing them.\nE) Some people distrust mainstream media.\nF) People uncritically consume social media claims.\nG) The writer says journalism is thriving.\nH) The writer says readers bear no blame for the decline.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${EXAM12_SOURCE_A}\n\nSource B:\n${EXAM12_SOURCE_B}`,
            extractSource: `Source A: ${EXAM12_SOURCE_A_REF} | Source B: ${EXAM12_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'A, C, E and F.\nA: "Journalism is dying".\nC: "Every time you scroll past a paywall".\nE: people declare that "the mainstream media can\'t be trusted".\nF: they are "uncritically consuming the claims of anonymous social media accounts".',
            },
            markScheme: [
              'True: A, C, E and F.',
              'A is true: "Journalism is dying".',
              'C is true: "Every time you scroll past a paywall".',
              'E is true: people declare that "the mainstream media can\'t be trusted".',
              'F is true: they are "uncritically consuming the claims of anonymous social media accounts".',
              'B, D, G and H are false: the government is never mentioned, and the writer blames readers instead ("we are all complicit"); people share an article "without reading beyond the headline"; journalism "is dying"; and readers are "complicit in its murder".',
              'One mark for each true statement chosen, 4 marks in all. A false statement earns no mark.',
            ],
          },
          {
            id: 'aqa-p2-12-q2',
            questionNumber: 2,
            questionText:
              'Use both sources to answer this question.\n\nThink about the press as the writer of Source A describes it today and the press Wilde describes in Source B. What can you infer from the two sources about how they differ?\n\nSupport each inference with details from both sources.',
            marks: 8,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: `Source A:\n${EXAM12_SOURCE_A}\n\nSource B:\n${EXAM12_SOURCE_B}`,
            extractSource: `Source A: ${EXAM12_SOURCE_A_REF} | Source B: ${EXAM12_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'In Source A the press is getting weaker, because newsrooms have shrunk to "skeleton crews of fifteen". In Source B the press is very powerful, and Wilde says "We are dominated by Journalism". This suggests that in Wilde\'s time the press had great power over people, but now it is struggling to survive. The journalists in Source A used to report on important things like "their council meetings, their courts, their schools", which shows that they helped the public. Wilde\'s journalists are interested in "people\'s private lives", which suggests that they are nosy. The readers are different too. In Source A readers "scroll past a paywall", so they do not want to pay for news, but in Source B the public have "an insatiable curiosity", so they want to know everything.',
              'Grade 8-9':
                'The press in Source A is weak and shrinking, while the press Wilde describes is so strong that it rules. Source A\'s newsrooms are down to "skeleton crews of fifteen", and "Entire towns have no reporter", which suggests a press that can no longer cover the places it once served. Wilde says that journalism "has eaten up the other three" estates and that "We are dominated by Journalism", which suggests that, as he saw it in 1891, the press had more power than Parliament itself.\n\nThey also watch different things. The journalists in Source A watched the powerful, at "their council meetings, their courts, their schools", and without them "public money is watched less closely". This implies that their work protected the public. Wilde\'s journalists watch private lives instead: he attacks journalism\'s "tyranny" over "people\'s private lives", and his image of journalists who "have nailed their own ears to the keyhole" suggests a press that spies on homes rather than on governments.\n\nTheir readers differ as well. In Source A, readers will not pay or even read: they "scroll past a paywall" and share articles "without reading beyond the headline". This suggests a public that no longer values journalism. Wilde\'s public cannot get enough of it, with "an insatiable curiosity to know everything, except what is worth knowing", and the press, with its "tradesman-like habits", sells them what they want. So Wilde\'s press seems to thrive by feeding curiosity about private lives, while the press in Source A is dying even though what it offers is worth having.',
            },
            markScheme: {
              'What to reward': [
                'Inferences, not just retelling: what the details suggest about how the two presses differ, with details from both sources.',
                'Power: a shrinking press ("skeleton crews of fifteen", "Entire towns have no reporter") against one that "has eaten up the other three" estates.',
                'Who is watched: council meetings, courts, schools and public money in Source A; "people\'s private lives", seen through "the keyhole", in Source B.',
                'Readers: a public that will not pay or read ("scroll past a paywall") against one with "an insatiable curiosity" that the press feeds.',
                'Money: journalists leaving for "the security that journalism no longer can" offer, against a press with "tradesman-like habits" that sells what is wanted.',
                'Credit any other sound inference about a difference between the two presses, backed from both sources.',
              ],
              'Levels (8 marks)': Q2_LEVELS,
              Limits: [
                'An answer that uses one source only scores 3 marks at most.',
                'Level 3 and above need both sources and the difference the question names, between the press of today and the press Wilde describes.',
                "Marks are for what is inferred. Comment on the writers' language belongs to Question 3 and is not rewarded here.",
              ],
            },
          },
          {
            id: 'aqa-p2-12-q3',
            questionNumber: 3,
            questionText:
              'Look again at the second and third paragraphs of Source A, from "I have been a journalist" to the end.\n\nIn these two paragraphs, how does the writer\'s language show what is being lost as journalism declines?\n\nQuote short phrases from these paragraphs only, and explain the effect of the words, images and kinds of sentence the writer chooses. Use subject terms where they help.',
            marks: 12,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${EXAM12_SOURCE_A}`,
            extractSource: EXAM12_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer repeats "I have watched" to show that they have seen the decline happen with their own eyes. The contrast between "bustling floors" and "skeleton crews" shows how much smaller newsrooms have become, and "skeleton" makes it sound as if journalism is dying. The writer describes colleagues as "brilliant, dedicated, irreplaceable", a list of three adjectives that shows how much has been lost. The list "their council meetings, their courts, their schools" shows the important things that nobody reports on now. The sentence "Democracy does not die in darkness - it dies in the spaces where nobody is watching" personifies democracy and warns the reader that it is in danger. In the last paragraph, "we all pay for it" uses the pronoun "we" to show that the problem affects everyone, including the reader.',
              'Grade 8-9':
                'The writer shows the loss first as something witnessed, then as something with a price.\n\nThe second paragraph opens with the writer\'s authority, "I have been a journalist for twenty-two years", and the repeated "I have watched" makes the writer a witness who could do nothing to stop the decline. The contrast between "bustling floors of a hundred reporters" and "skeleton crews of fifteen" is sharp: "bustling" suggests noise and energy, while "skeleton" means a bare minimum and also suggests death, so the newsroom itself seems to be dying. The phrase set between dashes, "brilliant, dedicated, irreplaceable colleagues", interrupts the sentence to honour these people, and the three adjectives build to "irreplaceable", which tells the reader that this loss cannot be undone. The short sentence "That number has at least halved since" states the fact plainly and lets it land. In "their council meetings, their courts, their schools", the repeated "their" shows that what now goes unwatched belongs to the community, and "Entire towns" stresses the scale. The paragraph ends by correcting a well-known saying, that democracy dies in darkness: "it dies in the spaces where nobody is watching". Democracy is personified as something that can die quietly, through neglect, rather than in some dramatic event.\n\nThe third paragraph opens with another short sentence, "The consequences are not abstract", which promises proof. The phrase "we all pay for it" works in two ways: the reader pays in money and in lost accountability. The research makes the cost concrete, and the balanced "not because ... but because" structure rules out one explanation before giving the real one. The last words, "nobody was watching any more", echo the end of the second paragraph, so the idea of watching ties the argument together and leaves the reader picturing a town that nobody is keeping an eye on.',
            },
            markScheme: {
              'What to reward': [
                'The writer as witness: "I have been a journalist for twenty-two years" and the repeated "I have watched".',
                'The contrast of "bustling floors of a hundred reporters" with "skeleton crews of fifteen", and the double sense of "skeleton".',
                'The interrupting phrase "brilliant, dedicated, irreplaceable colleagues", the plain statistic, and the list "their council meetings, their courts, their schools".',
                'The reworked saying "it dies in the spaces where nobody is watching", the short "The consequences are not abstract", "we all pay for it", and the echo in "nobody was watching any more".',
                'Subject terms (contrast, repetition, list of three, personification, inclusive pronoun) earn credit when the effect is explained, not for being named.',
              ],
              'Levels (12 marks)': Q3_LEVELS,
              Limits: [
                'Only the second and third paragraphs of Source A count. Writing about the first paragraph or about Source B places the answer at the bottom of the level it would otherwise reach.',
                'Level 3 and above need the focus of the question: what is being lost as journalism declines.',
              ],
            },
          },
          {
            id: 'aqa-p2-12-q4',
            questionNumber: 4,
            questionText:
              "Answer this question using both sources, from beginning to end.\n\nCompare the two writers' feelings and perspectives on the power and responsibility of the press. Explain how each writer gets them across, through choices such as tone, language and structure, and refer closely to both sources.",
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${EXAM12_SOURCE_A}\n\nSource B:\n${EXAM12_SOURCE_B}`,
            extractSource: `Source A: ${EXAM12_SOURCE_A_REF} | Source B: ${EXAM12_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers care about the press but see different problems. Source A is worried that journalism is disappearing and uses a statistic to prove it: the number of local newspaper journalists "has at least halved". Wilde (Source B) is worried that journalism has too much power and misuses it. Both use striking images to make their point: Source A says democracy "dies in the spaces where nobody is watching", and Wilde compares the press to "the rack", an instrument of torture. Both writers think the press matters to how the country is run. Source A says that without journalists public money is watched less closely, while Wilde jokes that journalism "has eaten up the other three" estates. Source A uses direct address ("you") to make readers feel guilty, while Wilde uses short, witty sentences such as "That is much worse."',
              'Grade 8-9':
                'The two writers occupy mirror positions. The writer of Source A defends the power of the press as a public good and mourns its loss; Wilde, writing in 1891, attacks that power as a tyranny. Both, though, judge the press by what it does to the people it reports on and the people who read it. Source A presents journalism as a watchman. Its power is the power to see: democracy "dies in the spaces where nobody is watching", and research on places that lost their paper shows what happens to public money when the watching stops. The responsibility the writer demands is the reader\'s, to pay for journalism and read it properly. Wilde presents journalism as a ruler. His historical sequence, from "the rack" to "the press", calls the change "an improvement certainly" before turning, with the conjunction "But", to "very bad, and wrong". He borrows the political language of estates and reigns to show journalism overtaking every other institution, and closes on a pair of balanced sentences: once "the public nailed the ears of journalists to the pump", now "journalists have nailed their own ears to the keyhole". The keyhole makes his charge concrete: the press has used its power to spy on private lives. Their methods differ as much as their views. Source A builds urgency with direct address ("every time you"), a death metaphor and statistics; Wilde works through epigram and understatement, each short sentence ("That was quite hideous." "That is much worse.") landing like the end of a joke that is not really a joke. Where Source A holds readers responsible for letting the press die, Wilde holds them responsible for its excesses: journalism "supplies their demands".',
            },
            markScheme: {
              'What to reward': [
                'A comparison of perspectives: Source A mourns a press that "is dying" and defends it as the public\'s watchman; Wilde attacks a press that "has eaten up the other three" estates and calls its hold over private lives a "tyranny".',
                'A comparison of methods: Source A uses direct address ("every time you"), a death metaphor, personal testimony and statistics; Wilde uses epigram, irony and short, balanced sentences ("That was quite hideous." "That is much worse.").',
                'Responsibility: Source A blames readers who will not pay or read ("we are all complicit"); Wilde blames the public\'s "insatiable curiosity", which journalism "supplies".',
                'Evidence from across both whole sources, with comment on what each detail shows. Linking words such as whereas and similarly help, but the comparison must be of views and methods, not only of content.',
              ],
              'Levels (16 marks)': Q4_LEVELS,
              Limits: [
                'An answer that uses one source only scores 6 marks at most.',
                'Level 3 and above need both sources.',
              ],
            },
          },
        ],
      },
      {
        id: 'aqa-p2-12-writing',
        title: 'Section B: Writing',
        description:
          'Allow about 45 minutes for this section: about 5 minutes to plan, 35 to write and 5 to check your work. Question 5 is marked for content and organisation (24 marks) and for technical accuracy (16 marks).',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p2-12-q5',
            questionNumber: 5,
            questionText:
              '"Social media has made traditional journalism irrelevant. Anyone with a phone can be a reporter now."\n\nWrite a speech for a school assembly in which you give your own view on this statement and make the case for it.\n\n(40 marks: 24 for content and organisation, 16 for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9':
                "Good morning, everyone.\n\nHands up if you found out about something important this week from your phone. Keep your hand up if you checked whether it was true. Not quite so many hands now, are there?\n\nThe statement I have been asked to talk about says that social media has made traditional journalism irrelevant, because anyone with a phone can be a reporter. I want to agree with half of it and argue against the other half.\n\nThe half I agree with is this: anyone with a phone can record what is happening. When something dramatic happens in a town centre, the first pictures usually come from people who were standing nearby. That is a real change, and in many ways a good one. Ordinary people can show the world things that the powerful would rather hide, and nobody needs permission to do it.\n\nBut recording something is not the same as reporting it. A reporter does not just point a camera. A reporter asks who was involved and why, checks the story with more than one person and decides what the public needs to know. A reporter's name goes on the story, so a reporter can be held to account for getting it wrong. The person who posts a clip and moves on has made no such promise. Most of the time they are honest. Sometimes they are mistaken. Occasionally they are lying on purpose, and the clip spreads just as fast either way.\n\nThink about the stories that matter most to a town like ours: how the council spends our money, what happens in the local courts, whether the new housing estate gets the doctors' surgery it was promised. None of those stories is dramatic enough to film. They are found by someone who sits through a three-hour meeting, reads the documents nobody else reads and asks the awkward question at the end. That someone is a journalist, and if nobody pays for that work, nobody will do it.\n\nSome of you will say that newspapers are old-fashioned, and you are partly right. Many of you have never bought one. But journalism is not paper. It is the job of finding out what is true, and you can read it on the same phone you use for everything else. What matters is not where a story appears but whether someone has done the work behind it.\n\nSo here is my challenge to you. The next time a story reaches you, ask three questions before you share it. Who says so? How do they know? What do they gain if I believe them? If you can answer those questions, you are already thinking like a journalist, and that is exactly why we still need real ones.\n\nThank you.",
            },
            markScheme: {
              'What to reward in this task': [
                'A clear view on the statement, held and developed all the way through.',
                'The features of a speech: a greeting and an opening that engages listeners, signposts that help them follow the argument and a memorable ending, pitched for an audience of students and teachers.',
                'Reasons developed with examples, and the other side answered fairly, for instance the real value of people filming events as they happen.',
                'Accurate spelling and punctuation, with varied sentences and well-chosen words, which earn the separate 16 marks.',
              ],
              'Content and organisation (AO5, 24 marks)': Q5_AO5_LEVELS,
              'Technical accuracy (AO6, 16 marks)': Q5_AO6_LEVELS,
              Limit: [
                'Writing that does not respond to the statement in the way the task asks cannot score more than 12 of the 24 content marks.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 13 - Food & Agriculture
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p2-13',
    board: 'AQA',
    paperNumber: 2,
    title: "Paper 2: Writers' Viewpoints and Perspectives",
    subtitle: 'English Language 8700/2',
    code: '8700/2',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p2-13-reading',
        title: 'Section A: Reading',
        description: `Spend about 15 minutes reading both sources and all five questions before you start writing. Then allow about 45 minutes for Questions 1 to 4, which must all be answered.\n\nSource A: ${EXAM13_SOURCE_A_REF}\nSource B: ${EXAM13_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p2-13-q1',
            questionNumber: 1,
            questionText:
              'Look again at the first paragraph of Source A, from "We have become a nation" to "less than the minimum wage".\n\nWhich four of the statements below are true, according to this paragraph? Choose four letters, and no more.\n\nA) The writer believes people are disconnected from their food sources.\nB) The writer says people\'s ignorance about food is no accident.\nC) The writer praises the convenience of modern shopping.\nD) A chicken breast in a tray looks like a real chicken.\nE) Supermarket produce is sold without packaging.\nF) Migrant workers pick salad leaves.\nG) Workers are always paid above the minimum wage.\nH) Supermarkets use fluorescent lighting.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${EXAM13_SOURCE_A}\n\nSource B:\n${EXAM13_SOURCE_B}`,
            extractSource: `Source A: ${EXAM13_SOURCE_A_REF} | Source B: ${EXAM13_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'A, B, F and H.\nA: "We have become a nation of people who do not know where their food comes from".\nB: "this ignorance is not accidental - it is cultivated."\nF: the leaves were picked by "migrant workers".\nH: the supermarket has "fluorescent lights".',
            },
            markScheme: [
              'True: A, B, F and H.',
              'A is true: we are "a nation of people who do not know where their food comes from".',
              'B is true: "this ignorance is not accidental - it is cultivated".',
              'F is true: the salad leaves were picked by "migrant workers".',
              'H is true: the supermarket has "fluorescent lights".',
              'C, D, E and G are false: the writer criticises supermarkets and never praises them; a chicken breast in a tray "bears no resemblance to a chicken"; the produce is "plastic-wrapped"; and the workers are paid "less than the minimum wage".',
              'One mark for each true statement chosen, 4 marks in all. A false statement earns no mark.',
            ],
          },
          {
            id: 'aqa-p2-13-q2',
            questionNumber: 2,
            questionText:
              'Use both sources to answer this question.\n\nThink about the people who produce food in Source A and the labourers of the parish of Milton in Source B. What can you infer from the two sources about how their situations differ?\n\nSupport each inference with details from both sources.',
            marks: 8,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: `Source A:\n${EXAM13_SOURCE_A}\n\nSource B:\n${EXAM13_SOURCE_B}`,
            extractSource: `Source A: ${EXAM13_SOURCE_A_REF} | Source B: ${EXAM13_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'The farmers in Source A have property of their own, like the dairy farmer who is "selling his herd", but the labourers in Source B do not seem to own anything, since they are left with "skin and bone and nakedness". The farmers in Source A are losing money because the supermarkets pay "less per litre than it cost to produce", which suggests that they cannot make a living. The labourers in Source B grow plenty of food, enough for "more, and many more, than fifteen hundred families", but they are "half starved" because the food is "carried away". This suggests that the system is unfair to them. The dairy farmer "wept", which shows that he is upset about losing his herd, while Cobbett\'s labourers suffer from hunger.',
              'Grade 8-9':
                'The farmers in Source A are owners who are losing their businesses, while Cobbett\'s labourers seem to own nothing at all. The dairy farmer is "selling his herd" and the pig farmer "had invested everything", which suggests people who once had property and savings to lose. Cobbett\'s workers are left with "skin and bone and nakedness", which implies that they have nothing but their labour.\n\nThe cause of their hardship is different. In Source A the farmers cannot get a fair price: the supermarkets pay "less per litre than it cost to produce", and the pig farmer is "undercut by imports". The market is ruining them. Cobbett\'s labourers have no trouble producing food, since one hundred families raise enough for "more, and many more, than fifteen hundred families". Their problem is that it is taken from them, "carried away" to the "fund-holders, pensioners, soldiers" and other "tax-eaters", so they go hungry in the middle of plenty.\n\nThey suffer in different ways, too. The dairy farmer "wept" as he told the writer about his herd, which suggests grief at losing a way of life. Cobbett\'s labourers are "half starved", a physical suffering and not only a sorrow. Even the work is done by different people. The farms in Source A depend on hired help that has disappeared, with "no longer enough seasonal workers to pick" the strawberries, and the salad in the supermarket was picked by "migrant workers" for "less than the minimum wage". In Milton the work is done by the parish\'s own families: "80 able working men", as many boys and, at times, "the women and stout girls". This suggests that in 1826 whole families of the village laboured on the land, while modern food production relies on seasonal and migrant workers, some of them badly paid.',
            },
            markScheme: {
              'What to reward': [
                "Inferences, not just retelling: what the details suggest about how the two groups' situations differ, with details from both sources.",
                'Property: farmers with herds and savings to lose ("selling his herd", "invested everything") against labourers left with "skin and bone and nakedness".',
                'The cause: prices below cost and cheap imports in Source A; in Source B plenty of food, "carried away" from those who grew it.',
                'The suffering: grief at a lost living (the dairy farmer "wept") against hunger ("half starved").',
                'The workforce: farms short of "seasonal workers" and salad picked by "migrant workers", against a parish whose own families, boys and girls included, do the work.',
                'Credit any other sound inference about a difference between the two groups, backed from both sources.',
              ],
              'Levels (8 marks)': Q2_LEVELS,
              Limits: [
                'An answer that uses one source only scores 3 marks at most.',
                'Level 3 and above need both sources and the difference the question names, between the food producers of Source A and the labourers of Source B.',
                "Marks are for what is inferred. Comment on the writers' language belongs to Question 3 and is not rewarded here.",
              ],
            },
          },
          {
            id: 'aqa-p2-13-q3',
            questionNumber: 3,
            questionText:
              'Look again at the second and third paragraphs of Source A, from "I spent a year working on farms" to the end.\n\nIn these two paragraphs, how does the writer\'s language make the case that the decline of British farming is a serious threat?\n\nQuote short phrases from these paragraphs only, and explain the effect of the words, images and kinds of sentence the writer chooses. Use subject terms where they help.',
            marks: 12,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${EXAM13_SOURCE_A}`,
            extractSource: EXAM13_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses personal experience, "I spent a year working on farms across Britain", to show that they know what they are talking about. The three farmers are examples that each show a different problem. The verb "wept" is emotive and makes the reader feel sorry for the dairy farmer. The image of strawberries that "rotted in the fields" shows food being wasted. The pig farmer is "undercut by imports", which shows that the situation is unfair. In the last paragraph the writer uses short sentences and repetition: "We lose food security. We lose the ability to feed ourselves." The pronoun "We" shows that this affects everyone. The word "existential" at the end suggests that the decline of farming threatens our survival, so the reader sees it as a serious threat.',
              'Grade 8-9':
                'The writer builds the case from first-hand evidence to a warning about the nation\'s survival.\n\nThe second paragraph rests on experience. "I spent a year working on farms across Britain" gives the writer authority, and the list between dashes, "arable, dairy, livestock, organic, industrial", shows how wide that experience is, so the conclusions seem to hold for every kind of farming. Three portraits follow, each a sentence without a main verb, like a series of snapshots: "The dairy farmer in Somerset", "The fruit farmer in Kent", "The pig farmer in Yorkshire". The places stretch across the country, so the crisis seems national. The plain verb "wept" is stark and unexpected, and makes the reader feel the farmer\'s grief at "selling his herd". The phrase "less per litre than it cost to produce" shows, in the plain language of a balance sheet, that he is paid to lose money. The image of strawberries that "rotted in the fields" turns food into waste, and the pig farmer who "invested everything" only to be "undercut" by imports suggests that doing the right thing is punished, since the rules he must follow "simply did not exist" for his competitors.\n\nThe third paragraph answers an objection before the reader can make it: "These are not sentimental stories." The short sentence that follows, "They are economic realities with profound consequences", sounds firm and factual. "When we allow our farming industry to collapse" makes the reader share the blame, and the aside "and make no mistake, that is what is happening" insists that the danger is real and present. The writer then raises the stakes. The loss of "picturesque landscapes" is set aside with "not merely", and two short sentences with the same opening, "We lose food security. We lose the ability to feed ourselves.", strike like blows. The final antithesis, "not a romantic concern. It is an existential one.", saves the word "existential" for the last sentence, which turns the decline of farming into a threat to the nation\'s survival.',
            },
            markScheme: {
              'What to reward': [
                'First-hand authority: "I spent a year working on farms across Britain" and the list "arable, dairy, livestock, organic, industrial".',
                'The three portraits, written as sentences without main verbs and set in places across the country, with the stark "wept", the waste in "rotted in the fields" and the unfairness of "undercut by imports".',
                'The answer to an objection, "These are not sentimental stories", the aside "and make no mistake, that is what is happening" and the inclusive "we".',
                'The rising stakes, through "We lose food security. We lose the ability to feed ourselves." to the closing antithesis, "not a romantic concern. It is an existential one."',
                'Subject terms (list, sentence fragment, repetition, antithesis, inclusive pronoun) earn credit when the effect is explained, not for being named.',
              ],
              'Levels (12 marks)': Q3_LEVELS,
              Limits: [
                'Only the second and third paragraphs of Source A count. Writing about the first paragraph or about Source B places the answer at the bottom of the level it would otherwise reach.',
                'Level 3 and above need the focus of the question: how the language presents the decline of farming as a serious threat.',
              ],
            },
          },
          {
            id: 'aqa-p2-13-q4',
            questionNumber: 4,
            questionText:
              "Answer this question using both sources, from beginning to end.\n\nCompare the two writers' feelings and perspectives on farming and the way those who work the land are treated. Explain how each writer gets them across, through choices such as tone, language and structure, and refer closely to both sources.",
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${EXAM13_SOURCE_A}\n\nSource B:\n${EXAM13_SOURCE_B}`,
            extractSource: `Source A: ${EXAM13_SOURCE_A_REF} | Source B: ${EXAM13_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers argue that the people who produce our food are treated unfairly. Source A shows supermarkets paying a farmer "less per litre than it cost to produce", while Cobbett (Source B) shows labourers who grow huge amounts of food but are "half starved". Both writers use evidence to make their point. Source A describes three farmers the writer met, and Cobbett works out that a hundred families feed "more, and many more, than fifteen hundred families". Both writers show that the rest of the country depends on these people: Source A warns that we will lose "food security", and Cobbett shows the food being "carried away" to others. They differ in tone. Source A is serious and controlled, while Cobbett is furious, calling it "a hellish system" and ending with the claim that otherwise "the devil himself is a saint."',
              'Grade 8-9':
                'Both writers value farming as the work on which a whole nation depends, and both argue that the people who do it are treated unjustly, but their methods reflect their different centuries. The writer of Source A combines personal testimony with economic argument: three farmers, each standing for part of the crisis, and a conclusion that widens from farms to the nation, "We lose food security. We lose the ability to feed ourselves." Cobbett works like an accountant who has lost his temper. He calculates, from the census, that one hundred families "raise enough to supply more, and many more, than fifteen hundred families", and then lets the sum speak: "And yet those who do the work are half starved!" His exclamations build to open fury at "a hellish system". Both writers show how much depends on the people who do the work. Source A describes strawberries rotting for want of "enough seasonal workers to pick them"; Cobbett marvels, "What a handful of people to raise such a quantity of food!" They differ in whom they blame. Source A blames supermarkets and imports produced under weaker rules, forces that are driving farmers out of the industry. Cobbett blames taxation: the produce is "carried away to be heaped on the fund-holders, pensioners, soldiers, dead-weight, and other swarms of tax-eaters". The tone of each ending reflects this. Source A insists calmly that the danger is "not a romantic concern", while Cobbett ends with a furious flourish: if such a system does not need "putting an end to, then the devil himself is a saint."',
            },
            markScheme: {
              'What to reward': [
                'A comparison of perspectives: both value farm work and think its workers are wronged; Source A blames supermarkets and imports for ruining farmers, while Cobbett blames a system that carries the food away to "tax-eaters".',
                'A comparison of methods: Source A uses first-hand portraits of three farmers and a calm, rising conclusion ("We lose food security."); Cobbett calculates from the census, then breaks into exclamations and open anger ("a hellish system").',
                'Tone: Source A insists that the danger is "not a romantic concern"; Cobbett ends with the furious claim that otherwise "the devil himself is a saint".',
                'Evidence from across both whole sources, with comment on what each detail shows. Linking words such as whereas and similarly help, but the comparison must be of views and methods, not only of content.',
              ],
              'Levels (16 marks)': Q4_LEVELS,
              Limits: [
                'An answer that uses one source only scores 6 marks at most.',
                'Level 3 and above need both sources.',
              ],
            },
          },
        ],
      },
      {
        id: 'aqa-p2-13-writing',
        title: 'Section B: Writing',
        description:
          'Allow about 45 minutes for this section: about 5 minutes to plan, 35 to write and 5 to check your work. Question 5 is marked for content and organisation (24 marks) and for technical accuracy (16 marks).',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p2-13-q5',
            questionNumber: 5,
            questionText:
              '"We should all know exactly where our food comes from and how it is produced. Ignorance about what we eat is no longer acceptable."\n\nWrite a letter to the editor of a national newspaper in which you give your own view on this statement and make the case for it.\n\n(40 marks: 24 for content and organisation, 16 for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9':
                'Dear Editor,\n\nI am writing in response to a view I have often heard lately: that we should all know exactly where our food comes from and how it is produced, and that ignorance about what we eat is no longer acceptable. I agree with the spirit of that statement, but I think it puts the blame in the wrong place.\n\nIt is true that most of us know very little about our food. Ask a shopper where the apples in their basket were grown, or who picked them, and the honest answer is usually a shrug. We buy meat that looks nothing like an animal and vegetables that seem to have no season. That ignorance has a cost. It allows farmers to be paid less than their work is worth, and it hides the conditions of the people who pick and pack what we eat.\n\nBut is ignorance really a personal failing? A family doing its weekly shop on a tight budget, with tired children and half an hour to spare, cannot be expected to research the history of every tin and packet. Labels are often vague, and a picture of a farmhouse on a box tells you nothing about where its contents were grown. Shoppers are not refusing to learn. Too often, they are simply not told.\n\nThat is why the responsibility should fall first on those who sell our food. Supermarkets know exactly where every product comes from, because their whole business depends on it. They could print that information clearly, in plain English, on the front of the pack: which country a vegetable was grown in, and how an animal was raised. If they will not do so willingly, the government should require it.\n\nSchools have a part to play as well. Children who grow a tomato plant or visit a working farm learn something that no label can teach: that food comes from land, weather and human effort. A generation that understands that will value farmers more and waste less.\n\nSome of your readers will argue that people do not care, and that more information will make no difference. I do not believe it. When people learn how something was made, many of them change what they buy, and the shops soon notice. Honest facts lead to better choices.\n\nSo yes, ignorance about what we eat should no longer be accepted. But the cure is not to lecture shoppers about what they do not know. It is to make the truth easy to find, and then to trust the public to act on it.\n\nYours faithfully,\n\nA concerned reader',
            },
            markScheme: {
              'What to reward in this task': [
                'A clear view on the statement, held and developed all the way through.',
                'The features of a letter to a newspaper: a greeting to the editor, an opening that says why you are writing, clear paragraphs and a formal sign-off, in a formal but lively voice.',
                'Reasons developed with examples, and the other side answered fairly, for instance the pressures of time and money on families who shop on a budget.',
                'Accurate spelling and punctuation, with varied sentences and well-chosen words, which earn the separate 16 marks.',
              ],
              'Content and organisation (AO5, 24 marks)': Q5_AO5_LEVELS,
              'Technical accuracy (AO6, 16 marks)': Q5_AO6_LEVELS,
              Limit: [
                'Writing that does not respond to the statement in the way the task asks cannot score more than 12 of the 24 content marks.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 14 - Sport & Competition
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p2-14',
    board: 'AQA',
    paperNumber: 2,
    title: "Paper 2: Writers' Viewpoints and Perspectives",
    subtitle: 'English Language 8700/2',
    code: '8700/2',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p2-14-reading',
        title: 'Section A: Reading',
        description: `Spend about 15 minutes reading both sources and all five questions before you start writing. Then allow about 45 minutes for Questions 1 to 4, which must all be answered.\n\nSource A: ${EXAM14_SOURCE_A_REF}\nSource B: ${EXAM14_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p2-14-q1',
            questionNumber: 1,
            questionText:
              'Look again at the first paragraph of Source A, from "Professional sport has become" to "the exclusive game".\n\nWhich four of the statements below are true, according to this paragraph? Choose four letters, and no more.\n\nA) The writer supports the current financial model.\nB) The writer links professional sport with the faults of modern capitalism.\nC) The Premier League is described as a sporting competition.\nD) Some clubs are backed by sovereign wealth funds.\nE) Ticket prices at the Emirates are affordable.\nF) Clubs compete to spend huge sums on players.\nG) Communities are being priced out of stadiums.\nH) The writer says the beautiful game is open to everyone.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${EXAM14_SOURCE_A}\n\nSource B:\n${EXAM14_SOURCE_B}`,
            extractSource: `Source A: ${EXAM14_SOURCE_A_REF} | Source B: ${EXAM14_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'B, D, F and G.\nB: sport is "a laboratory for everything that is wrong with modern capitalism".\nD: "clubs backed by sovereign wealth funds".\nF: clubs "compete to spend the most obscene sums on human talent".\nG: communities "are priced out of their own stadiums".',
            },
            markScheme: [
              'True: B, D, F and G.',
              'B is true: professional sport is "a laboratory for everything that is wrong with modern capitalism".',
              'D is true: the clubs are "backed by sovereign wealth funds and billionaire oligarchs".',
              'F is true: clubs "compete to spend the most obscene sums on human talent".',
              'G is true: the communities "are priced out of their own stadiums".',
              'A, C, E and H are false: the writer calls the Premier League "a financial arms race" and the sums spent "obscene"; it "is not a sporting competition"; a season ticket "can cost nearly a month\'s wages" for a worker on the national living wage; and "The beautiful game has become the exclusive game".',
              'One mark for each true statement chosen, 4 marks in all. A false statement earns no mark.',
            ],
          },
          {
            id: 'aqa-p2-14-q2',
            questionNumber: 2,
            questionText:
              'Use both sources to answer this question.\n\nThink about the young footballers in Source A and the two prize-fighters Hazlitt watches in Source B. What can you infer from the two sources about how their experiences differ?\n\nSupport each inference with details from both sources.',
            marks: 8,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: `Source A:\n${EXAM14_SOURCE_A}\n\nSource B:\n${EXAM14_SOURCE_B}`,
            extractSource: `Source A: ${EXAM14_SOURCE_A_REF} | Source B: ${EXAM14_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'The footballers in Source A are children, "boys as young as nine", but the fighters in Source B are grown men. This suggests that the boys do not really choose what happens to them. The boys suffer "psychological pressure" and are left with "a shattered sense of identity", while the fighters are hurt physically and are "smashed to the ground". The boys who fail are "discarded", which suggests that nobody cares about them, but Hazlitt admires the fighters and calls what he sees "the high and heroic state of man". This shows that the fighters are respected even when they are hurt.',
              'Grade 8-9':
                'The young footballers in Source A are children, while Hazlitt\'s fighters are grown men. The academies recruit "boys as young as nine", which suggests that the choice to enter the game is made for them, long before they can judge the risks. Neate and Hickman are adults who have chosen to fight, and Hazlitt shows them rising after being knocked down "with new strength and courage", as if each decision to carry on is their own.\n\nThe harm they suffer is different. The footballers\' damage is mostly hidden: years of "intense physical and psychological pressure" leave them with "no qualifications, no fallback, and a shattered sense of identity". This suggests a harm that lasts long after their hopes of a career have ended. The fighters\' harm is physical and immediate: they are "smashed to the ground", "stunned, senseless", and their injuries are there for everyone to see.\n\nThe way others see them is different too. The boys who fail are "discarded", and "We celebrate the one and forget the hundred", which implies that nobody values them once they are of no use. Hazlitt admires the loser as well as the winner. Hickman "fought on after this for several rounds", and Hazlitt challenges those who look down on boxing to show "as much pluck, or as much self-possession as this". So the fighters, even the one who is beaten, are honoured for their courage, while the young players who do not make it are left alone: "we will not be there to catch him."',
            },
            markScheme: {
              'What to reward': [
                "Inferences, not just retelling: what the details suggest about how the two groups' experiences differ, with details from both sources.",
                'Age and choice: "boys as young as nine", recruited by academies, against grown men who rise to fight on "with new strength and courage".',
                'The harm: hidden and lasting ("a shattered sense of identity") against physical and immediate ("smashed to the ground").',
                'How they are seen: the many who fail are "discarded" and forgotten, while Hazlitt honours the "pluck" and "self-possession" of the fight.',
                'After defeat: the boy whose dream collapses has nobody "there to catch him"; Hickman "fought on after this for several rounds".',
                'Credit any other sound inference about a difference between the two groups, backed from both sources.',
              ],
              'Levels (8 marks)': Q2_LEVELS,
              Limits: [
                'An answer that uses one source only scores 3 marks at most.',
                'Level 3 and above need both sources and the difference the question names, between the young footballers and the two fighters.',
                "Marks are for what is inferred. Comment on the writers' language belongs to Question 3 and is not rewarded here.",
              ],
            },
          },
          {
            id: 'aqa-p2-14-q3',
            questionNumber: 3,
            questionText:
              'Look again at the second and third paragraphs of Source A, from "But the corruption runs deeper" to the end.\n\nIn these two paragraphs, how does the writer\'s language present the way professional sport treats young players as morally wrong?\n\nQuote short phrases from these paragraphs only, and explain the effect of the words, images and kinds of sentence the writer chooses. Use subject terms where they help.',
            marks: 12,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${EXAM14_SOURCE_A}`,
            extractSource: EXAM14_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses the word "corruption" to show that sport is dishonest and wrong. The phrase "children, really" reminds the reader that the young players are only children, which makes their treatment seem worse. The list "no qualifications, no fallback, and a shattered sense of identity" shows how much the boys lose when they are released. The word "discarded" makes it sound as if the players are thrown away like rubbish. The writer uses a contrast: "We celebrate the one and forget the hundred". In the last paragraph the writer says "We are using him", a short sentence which is blunt and shocking. The phrase "dressed in the language of aspiration" suggests that the exploitation is hidden behind talk of dreams.',
              'Grade 8-9':
                'The writer presents the treatment of young players as a moral failure disguised as opportunity.\n\nThe second paragraph opens with "But" and the metaphor "the corruption runs deeper than ticket prices", which suggests a rot that goes below the surface. The aside "children, really" corrects the polite phrase "young athletes" and makes the reader see how young the victims are, while "the true moral character of professional sport" judges the industry as if it were a person. The three verbs in the next sentence, "recruit", "subject" and "release", sum up an academy career as something done to boys rather than a path they choose, and "as young as nine" stresses their age. The list "no qualifications, no fallback, and a shattered sense of identity" piles up what they are left without, and its last item turns on the metaphor "shattered", as if the boy himself were broken. The verb "discarded" treats those who fail as waste, and the antithesis "We celebrate the one and forget the hundred" blames the reader along with the clubs, since "We" takes in every fan. The last clause exposes the motive: success is "commercially useful", so it is the story that gets told.\n\nThe third paragraph begins with a concession, "I am not against competition", so the writer seems fair before turning on the system: "it is exploitation dressed in the language of aspiration". The clothing metaphor suggests a disguise, and the matching endings of "exploitation" and "aspiration" make two opposite ideas sound alike. The long sentence about "the next Marcus Rashford" ends "we are not inspiring him", and the short one that follows, "We are using him.", is blunt. The paragraph ends with the image of a fall: when the boy\'s dream "collapses", "we will not be there to catch him". The aside "as it almost certainly will" makes failure sound all but certain, and the reader is left with a picture of a boy falling with nobody to catch him.',
            },
            markScheme: {
              'What to reward': [
                'The opening metaphor "the corruption runs deeper than ticket prices" and the correcting aside "children, really".',
                'The verbs "recruit", "subject" and "release", the list that ends "a shattered sense of identity", and "discarded".',
                'The antithesis "We celebrate the one and forget the hundred" and the motive it exposes, "commercially useful".',
                'The concession "I am not against competition", the clothing metaphor in "exploitation dressed in the language of aspiration", the blunt "We are using him." and the closing image of a dream that "collapses".',
                'Subject terms (metaphor, list, antithesis, concession, short sentence) earn credit when the effect is explained, not for being named.',
              ],
              'Levels (12 marks)': Q3_LEVELS,
              Limits: [
                'Only the second and third paragraphs of Source A count. Writing about the first paragraph or about Source B places the answer at the bottom of the level it would otherwise reach.',
                'Level 3 and above need the focus of the question: how the language presents the treatment of young players as wrong.',
              ],
            },
          },
          {
            id: 'aqa-p2-14-q4',
            questionNumber: 4,
            questionText:
              "Answer this question using both sources, from beginning to end.\n\nCompare the two writers' feelings and perspectives on competition and what it does to the people who take part. Explain how each writer gets them across, through choices such as tone, language and structure, and refer closely to both sources.",
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${EXAM14_SOURCE_A}\n\nSource B:\n${EXAM14_SOURCE_B}`,
            extractSource: `Source A: ${EXAM14_SOURCE_A_REF} | Source B: ${EXAM14_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'The two writers have opposite views of the sport they describe. Source A thinks professional sport has become corrupt, calling it "a laboratory for everything that is wrong with modern capitalism". Hazlitt thinks the fight he watched showed people at their best: "the high and heroic state of man". Source A uses facts and examples, such as ticket prices and football academies, to criticise sport, while Hazlitt uses vivid description of the fight, including Hickman\'s bloody face, to show what the fighters endured. Both writers deal with the moral argument. Source A says "I am not against competition" but attacks exploitation, while Hazlitt argues against people who "despise the Fancy". Source A ends with a warning about what happens to a boy whose dream collapses, while Hazlitt ends by challenging his critics to show the same courage.',
              'Grade 8-9':
                'The writers judge the sport in front of them in opposite ways, and their methods suit their purposes. The writer of Source A is prosecuting a system. The lexis comes from economics and warfare ("financial arms race", "sovereign wealth funds and billionaire oligarchs"), and the evidence is gathered like a case: ticket prices, academy recruitment, the ratio of "a hundred who are discarded" to every success. Hazlitt, writing in 1822, is bearing witness to an event. His method is description so close that the reader seems to stand at the ringside: Neate\'s "tremendous lunge", Hickman hanging "suspended for a second or two" before falling back "with his face lifted up to the sky". The description is unsparing, and Hazlitt reaches for literature to measure it, comparing the bloodied Hickman to "one of the figures in Dante\'s Inferno". Both writers anticipate objections. Source A concedes that "Competition is fundamental to human flourishing" before separating true competition from "exploitation dressed in the language of aspiration". Hazlitt concedes nothing to his critics: he turns on them in the second person, with the archaic "Ye" of a preacher, and accuses them of claiming "a superiority which you have never given a single proof of". The deepest difference is in what the sport each describes does to the people in it. For Source A, sport as it is now run damages them, above all the young: "we will not be there to catch him." For Hazlitt the fight reveals them, and what it shows is "the high and heroic state of man".',
            },
            markScheme: {
              'What to reward': [
                'A comparison of perspectives: Source A sees professional sport as "exploitation dressed in the language of aspiration" that harms the young; Hazlitt sees in the prize-fight "the high and heroic state of man".',
                'A comparison of methods: Source A builds a case in the language of money and war ("financial arms race"), with figures and a concession ("I am not against competition"); Hazlitt gives close, vivid description of the fight, a comparison with Dante and a direct challenge to his critics ("Ye who despise the Fancy").',
                'What the sport does to people: for Source A the academies leave boys with "a shattered sense of identity", though competition itself is "fundamental to human flourishing"; for Hazlitt the fight brings out "pluck" and "self-possession".',
                'Evidence from across both whole sources, with comment on what each detail shows. Linking words such as whereas and similarly help, but the comparison must be of views and methods, not only of content.',
              ],
              'Levels (16 marks)': Q4_LEVELS,
              Limits: [
                'An answer that uses one source only scores 6 marks at most.',
                'Level 3 and above need both sources.',
              ],
            },
          },
        ],
      },
      {
        id: 'aqa-p2-14-writing',
        title: 'Section B: Writing',
        description:
          'Allow about 45 minutes for this section: about 5 minutes to plan, 35 to write and 5 to check your work. Question 5 is marked for content and organisation (24 marks) and for technical accuracy (16 marks).',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p2-14-q5',
            questionNumber: 5,
            questionText:
              '"Competitive sport builds character and teaches young people valuable life lessons. Every child should be encouraged to compete."\n\nWrite an article for a magazine aimed at parents in which you give your own view on this statement and make the case for it.\n\n(40 marks: 24 for content and organisation, 16 for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9':
                'Let Them Play, Let Them Lose\n\nOn Saturday mornings, up and down the country, parents stand at the edge of muddy pitches clutching flasks of coffee. Some cheer quietly. Some shout instructions their children cannot hear. And some, if we are honest, care rather more about the result than the eight-year-olds who are actually playing.\n\nThe claim that competitive sport builds character, and that every child should be encouraged to compete, is one most of us have heard since we were children ourselves. I believe it is largely true. But the word that matters most in it is "encouraged", and how we encourage our children makes all the difference.\n\nStart with what competition gives. A child who plays in a team learns that other people depend on her. She learns to turn up on a cold morning because her teammates are expecting her. She learns that effort in training shows on the day, and that talent without practice rarely wins. Most valuable of all, she learns how to lose. Losing a match at ten, shaking hands and trying again next week is a gentle rehearsal for the disappointments that adult life will certainly bring. A child who has never been allowed to lose will find that lesson much harder at twenty-five.\n\nCompetition also offers something children badly need: a place where hard work is rewarded clearly and fairly. In a classroom, progress can feel slow and invisible. On a running track, a child can see that she ran faster than last month, and that pride is hers alone.\n\nYet competition can also do harm, and we parents are often the cause. When a child is pushed to win at all costs, sport stops being play and becomes pressure. Children who feel that our approval depends on the scoreboard do not build character; they build worry, and many give up sport altogether as soon as they are allowed to. The child who is shouted at from the touchline learns not resilience but fear.\n\nThen there is the child who simply does not enjoy competing. Not every young person wants to be measured against others, and forcing them can put them off exercise for life. For that child, encouragement might mean a dance class, a long walk with the dog or a kickabout in the park where nobody keeps score. Being active matters far more than winning.\n\nSo should every child be encouraged to compete? Yes, if encouragement means offering the chance, praising the effort and letting the child decide how far to take it. No, if it means demanding results. The lessons of sport are real, but they are learned best by children who are allowed to enjoy it.\n\nNext Saturday, try a small experiment. When the final whistle blows, do not ask who won. Ask whether they had fun. You may be surprised by how much more you find out.',
            },
            markScheme: {
              'What to reward in this task': [
                'A clear view on the statement, held and developed all the way through.',
                'The features of a magazine article: a headline, an opening that draws the reader in and paragraphs that build to a clear conclusion, in a warm, direct voice that suits parents.',
                'Reasons developed with examples, and the other side answered fairly, for instance the children who do not enjoy competing or who feel pushed too hard.',
                'Accurate spelling and punctuation, with varied sentences and well-chosen words, which earn the separate 16 marks.',
              ],
              'Content and organisation (AO5, 24 marks)': Q5_AO5_LEVELS,
              'Technical accuracy (AO6, 16 marks)': Q5_AO6_LEVELS,
              Limit: [
                'Writing that does not respond to the statement in the way the task asks cannot score more than 12 of the 24 content marks.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 15 - Art & Creativity
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p2-15',
    board: 'AQA',
    paperNumber: 2,
    title: "Paper 2: Writers' Viewpoints and Perspectives",
    subtitle: 'English Language 8700/2',
    code: '8700/2',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p2-15-reading',
        title: 'Section A: Reading',
        description: `Spend about 15 minutes reading both sources and all five questions before you start writing. Then allow about 45 minutes for Questions 1 to 4, which must all be answered.\n\nSource A: ${EXAM15_SOURCE_A_REF}\nSource B: ${EXAM15_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p2-15-q1',
            questionNumber: 1,
            questionText:
              'Look again at the first paragraph of Source A, from "Arts education is being systematically dismantled" to "a luxury, not a necessity".\n\nWhich four of the statements below are true, according to this paragraph? Choose four letters, and no more.\n\nA) Arts education is being dismantled.\nB) Arts GCSE entries have risen since 2010.\nC) The decline has happened since 2010.\nD) Drama entries have dropped by 48%.\nE) Music entries have increased by 35%.\nF) The writer calls the fall in entries a statistical fluctuation.\nG) Creativity has been treated as a luxury.\nH) The writer says the decline is accidental.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${EXAM15_SOURCE_A}\n\nSource B:\n${EXAM15_SOURCE_B}`,
            extractSource: `Source A: ${EXAM15_SOURCE_A_REF} | Source B: ${EXAM15_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'A, C, D and G.\nA: "Arts education is being systematically dismantled".\nC: "Since 2010, the number of students taking arts GCSEs has fallen by 40%."\nD: "Drama entries have dropped by 48%."\nG: policy has "told an entire generation that creativity is a luxury, not a necessity".',
            },
            markScheme: [
              'True: A, C, D and G.',
              'A is true: "Arts education is being systematically dismantled".',
              'C is true: "Since 2010, the number of students taking arts GCSEs has fallen by 40%."',
              'D is true: "Drama entries have dropped by 48%."',
              'G is true: policy has "told an entire generation that creativity is a luxury, not a necessity".',
              'B, E, F and H are false: arts GCSE entries have "fallen by 40%"; "Music by 35%" is one more fall in the list; "These are not statistical fluctuations"; and the falls are "the consequences of deliberate policy choices".',
              'One mark for each true statement chosen, 4 marks in all. A false statement earns no mark.',
            ],
          },
          {
            id: 'aqa-p2-15-q2',
            questionNumber: 2,
            questionText:
              'Use both sources to answer this question.\n\nThink about the arts that the writer of Source A defends and the art that Ruskin describes in Source B. What can you infer from the two sources about how they differ?\n\nSupport each inference with details from both sources.',
            marks: 8,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: `Source A:\n${EXAM15_SOURCE_A}\n\nSource B:\n${EXAM15_SOURCE_B}`,
            extractSource: `Source A: ${EXAM15_SOURCE_A_REF} | Source B: ${EXAM15_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'The arts in Source A are school subjects such as drama and music, but Ruskin writes about art that decorates useful things, such as "dress, furniture and lodging". This suggests that Ruskin thinks of art as part of everyday life rather than something you study for an exam. In Source A, art helps young people express their feelings, like "The teenager who cannot articulate her grief but can paint it". Ruskin\'s art is more about truth and use: he says art should be "full of truth, or full of use". This suggests that he values art for what it gives other people, while Source A values it for what it does for the person making it.',
              'Grade 8-9':
                'The arts in Source A are subjects taught in school, while the art Ruskin describes belongs to the things people make and use every day. Source A is concerned with "arts GCSEs", with drama and music, and with what happens to a subject on "the timetable", which suggests art as something young people study, practise and perform. Ruskin\'s art gives "delightfulness and worth" to "the implements of daily use" and to "dress, furniture and lodging", which implies that for him art lives in the crafts that make clothes, furniture and homes.\n\nThe two kinds of art also do different work. In Source A, art lets a person express what is inside them: "The teenager who cannot articulate her grief but can paint it." Its value lies in what it does for the person who makes it. Ruskin\'s art faces outwards: it "makes permanently visible to us" what science could not describe and memory could not keep. This suggests art as a record of the world, valued for what it shows to others.\n\nThey differ, finally, over what makes art worth having. Source A does point to its economic value, "over a hundred billion pounds" a year, but saves its strongest claim for art as "a language" and one of the "lifelines" of the young, valued for the feelings it lets out. Ruskin insists that art "must never exist alone", never "for itself", and that art which is merely pleasant is "of inferior kind". So Ruskin would ask of any work whether it states "a true thing" or adorns "a serviceable one", a test that Source A never sets.',
            },
            markScheme: {
              'What to reward': [
                'Inferences, not just retelling: what the details suggest about how the two kinds of art differ, with details from both sources.',
                'Where art belongs: school subjects ("arts GCSEs", "the timetable") against the crafts of daily life ("dress, furniture and lodging").',
                'What art does: it lets the person who makes it express feeling ("cannot articulate her grief but can paint it"), against recording truth for others ("makes permanently visible to us").',
                'What makes it worth having: "lifelines" and "a language" for the young, as well as money, against Ruskin\'s rule that art which is only pleasant is "of inferior kind".',
                'Credit any other sound inference about a difference between the two kinds of art, backed from both sources.',
              ],
              'Levels (8 marks)': Q2_LEVELS,
              Limits: [
                'An answer that uses one source only scores 3 marks at most.',
                'Level 3 and above need both sources and the difference the question names, between the arts Source A defends and the art Ruskin describes.',
                "Marks are for what is inferred. Comment on the writers' language belongs to Question 3 and is not rewarded here.",
              ],
            },
          },
          {
            id: 'aqa-p2-15-q3',
            questionNumber: 3,
            questionText:
              'Look again at the second and third paragraphs of Source A, from "The argument against the arts" to the end.\n\nIn these two paragraphs, how does the writer\'s language make the case that cutting arts education does real harm?\n\nQuote short phrases from these paragraphs only, and explain the effect of the words, images and kinds of sentence the writer chooses. Use subject terms where they help.',
            marks: 12,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${EXAM15_SOURCE_A}`,
            extractSource: EXAM15_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer lists the arguments against the arts, "expensive to teach, difficult to measure, and unlikely to lead to employment", and then says "This argument is wrong on every count", which sounds confident. The writer uses facts, such as "over a hundred billion pounds", to show that the arts matter to the economy. The phrase "an optional extra" shows that the curriculum treats art as unimportant. In the last paragraph, the writer calls the arts "a language", which suggests that they help young people express their feelings. The examples of "The teenager who cannot articulate her grief but can paint it" and the boy with the drum kit make the reader sympathise. The metaphor "lifelines" suggests that the arts save people, so cutting them does real harm.',
              'Grade 8-9':
                'The writer argues in two stages: first against the economic case for cutting the arts, then for the human cost of doing so.\n\nThe second paragraph sets out the opposing view fairly, as a list of three objections after a colon: the arts are "expensive to teach, difficult to measure, and unlikely to lead to employment". The short sentence that follows, "This argument is wrong on every count", rejects all three at once, and "count" sounds like a charge being thrown out of court. The evidence is chosen to beat the critics on their own ground. The creative industries contribute "more than aerospace, automotive, and life sciences combined", industries the reader thinks of as serious and modern, and the plain sentence "They employ over two million people" lets the figure speak for itself. The verb "undermining" suggests the future being dug away from below, and "an optional extra" shows how little the curriculum values art. The paragraph ends with sarcasm: "the subjects that actually matter" repeats the critics\' own view so that it sounds narrow.\n\nThe third paragraph turns on two short sentences, "But the deeper damage is not economic. It is human.", which move to what the writer thinks matters most. The direct address "When you cut arts education" puts the reader in the place of those making the cuts, and the correction "you do not simply remove a subject ... You remove a language" turns art into a way of speaking. Two sentences without main verbs then give portraits of real need, each built on "cannot" and "can": "The teenager who cannot articulate her grief but can paint it." The antithesis "These are not indulgences. They are lifelines." turns art from a luxury into something that keeps people afloat, and the last sentence extends the image, since "we are cutting them" suggests a rope being cut. The pairing in "the smiling efficiency of people who have never needed them" is unsettling: "smiling" makes the cuts seem cheerful and "efficiency" makes them cold, and the final words accuse those in charge of taking away what they have never needed themselves.',
            },
            markScheme: {
              'What to reward': [
                'The opposing view set out and dismissed: the list "expensive to teach, difficult to measure, and unlikely to lead to employment" and the blunt "This argument is wrong on every count".',
                'Evidence chosen to beat the critics on their own ground ("more than aerospace, automotive, and life sciences combined"), the verb "undermining", and the sarcasm of "the subjects that actually matter".',
                'The turn in "But the deeper damage is not economic. It is human.", the direct address "When you cut arts education" and the metaphor of art as "a language".',
                'The two portraits built on "cannot" and "can", the antithesis of "indulgences" and "lifelines", and the unsettling pairing in "the smiling efficiency of people who have never needed them".',
                'Subject terms (list, short sentence, sarcasm, direct address, metaphor, antithesis) earn credit when the effect is explained, not for being named.',
              ],
              'Levels (12 marks)': Q3_LEVELS,
              Limits: [
                'Only the second and third paragraphs of Source A count. Writing about the first paragraph or about Source B places the answer at the bottom of the level it would otherwise reach.',
                'Level 3 and above need the focus of the question: how the language shows that cutting arts education does real harm.',
              ],
            },
          },
          {
            id: 'aqa-p2-15-q4',
            questionNumber: 4,
            questionText:
              "Answer this question using both sources, from beginning to end.\n\nCompare the two writers' feelings and perspectives on the value of the arts and what the arts are for. Explain how each writer gets them across, through choices such as tone, language and structure, and refer closely to both sources.",
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${EXAM15_SOURCE_A}\n\nSource B:\n${EXAM15_SOURCE_B}`,
            extractSource: `Source A: ${EXAM15_SOURCE_A_REF} | Source B: ${EXAM15_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers believe the arts matter. Source A uses modern statistics to show the arts are important to the economy ("over a hundred billion pounds") and emotional examples to show they matter to young people. Ruskin, in Source B, uses the calm, formal language of a university lecture to explain what art is for: "the entire vitality of art depends upon its being either full of truth, or full of use". Both writers argue that art is more than an extra. Source A attacks the idea that art is "an optional extra", and Ruskin says art gives "delightfulness and worth" to the objects of everyday life. The main difference is that Source A is angry and urgent, accusing those who cut arts education of "smiling efficiency", while Ruskin is calm and explains his ideas step by step, as a teacher would.',
              'Grade 8-9':
                'Both writers value the arts highly, but they convey that value in different voices and for different reasons. The writer of Source A writes as a campaigner under pressure. The lexis is urgent and accusatory ("systematically dismantled", "cutting them"), and the argument is built from evidence meant to win a public debate: entries falling since 2010, the size of the creative industries. The deepest claim is that art is "a language" and a lifeline, and the closing image, of lifelines cut "with the smiling efficiency of people who have never needed them", turns the argument into an accusation. Ruskin writes as a professor addressing students, and his method is definition. He divides the "offices" of art into two, "Form to knowledge, and Grace to utility", and then explains each in balanced, parallel clauses: "it gives precision and charm to truth; in the second it gives precision and charm to service." Where Source A persuades by emotion and statistics, Ruskin persuades by the confident statement of principle, presenting the pleasure we take in making a useful thing well as "a law of nature". Their attitudes also differ. Source A defends art that lets young people express "what cannot be expressed in essays or equations"; Ruskin is wary of art valued only as pleasure, saying it "must never exist alone" and exists "rightly only when it is the means of knowledge, or the grace of agency for life". What unites them is the belief that art is not an extra but part of how people learn and live: for Source A a language, for Ruskin a way of giving "Form to truth".',
            },
            markScheme: {
              'What to reward': [
                'A comparison of perspectives: Source A defends the arts as "a language" and as "lifelines" for the young, and as an industry worth "over a hundred billion pounds"; Ruskin values art when it is "either full of truth, or full of use", and thinks art for its own sake "of inferior kind".',
                'A comparison of methods: Source A writes as an angry campaigner, with statistics, rebuttal ("wrong on every count") and an accusing final image ("smiling efficiency"); Ruskin writes as a lecturer, defining and dividing ("Form to knowledge, and Grace to utility") in calm, balanced clauses.',
                'Where they meet: both join art to everyday life, and neither treats it as a mere extra.',
                'Evidence from across both whole sources, with comment on what each detail shows. Linking words such as whereas and similarly help, but the comparison must be of views and methods, not only of content.',
              ],
              'Levels (16 marks)': Q4_LEVELS,
              Limits: [
                'An answer that uses one source only scores 6 marks at most.',
                'Level 3 and above need both sources.',
              ],
            },
          },
        ],
      },
      {
        id: 'aqa-p2-15-writing',
        title: 'Section B: Writing',
        description:
          'Allow about 45 minutes for this section: about 5 minutes to plan, 35 to write and 5 to check your work. Question 5 is marked for content and organisation (24 marks) and for technical accuracy (16 marks).',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p2-15-q5',
            questionNumber: 5,
            questionText:
              '"The arts are a waste of time and money in schools. Students would be better off focusing on maths, science and technology, the subjects that will actually get them jobs."\n\nWrite a speech for a public debate in which you give your own view on this statement and make the case for it.\n\n(40 marks: 24 for content and organisation, 16 for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9':
                "Good evening. I would like to thank the organisers for inviting me, and all of you for coming out on a weeknight to talk about something that matters.\n\nTonight's motion says that the arts are a waste of time and money in schools, and that students would be better off concentrating on maths, science and technology, because those are the subjects that will get them jobs. I want to take that argument seriously, because it comes from a good place. Every parent here wants their child to find work. Every teacher wants their pupils to have a future. But I believe the motion is wrong, and I want to explain why.\n\nFirst, it misunderstands the economy. The creative industries are not a hobby. Film, music, design, games, advertising and architecture employ huge numbers of people in this country, and Britain is admired for them across the world. When we cut art, drama and music in schools, we are not protecting our children's job prospects. We are closing doors on some of the careers they might have had.\n\nSecond, it misunderstands how science and technology actually work. The engineer who designs a new phone needs to understand how people will feel when they hold it. The surgeon needs steady hands and a trained eye. The programmer who builds a game needs a sense of story. Creativity is not the opposite of science. It is often what turns a good scientist into a great one.\n\nBut my third reason is the one I care about most. School is not only a factory for producing workers. It is where children learn who they are. For some young people, the art room or the music practice room is the one place in the school day where they feel confident, where nobody is ranking them and where they can say something they cannot put into words. Take that away, and you do not make them better mathematicians. You make school a place they want to leave.\n\nThose who support the motion will say that time is limited, and they are right. Every hour of drama is an hour not spent on equations. But a good education is not measured only in hours of maths. It is measured in the kind of people who leave our schools: curious, resilient, able to think for themselves and to work with others. The arts teach all of those things.\n\nSo I ask you to vote against this motion. Not because maths, science and technology do not matter, but because they matter most when they are taught alongside the subjects that teach our children to imagine. A school without the arts might produce workers. A school with them produces people.\n\nThank you.",
            },
            markScheme: {
              'What to reward in this task': [
                'A clear view on the statement, held and developed all the way through.',
                'The features of a speech for a debate: a greeting, a clear statement of where you stand, signposts that help listeners follow the argument and a closing appeal, pitched for an adult audience.',
                "Reasons developed with examples, and the other side answered fairly, for instance the real pressure on school time and every family's wish for good jobs.",
                'Accurate spelling and punctuation, with varied sentences and well-chosen words, which earn the separate 16 marks.',
              ],
              'Content and organisation (AO5, 24 marks)': Q5_AO5_LEVELS,
              'Technical accuracy (AO6, 16 marks)': Q5_AO6_LEVELS,
              Limit: [
                'Writing that does not respond to the statement in the way the task asks cannot score more than 12 of the 24 content marks.',
              ],
            },
          },
        ],
      },
    ],
  },
]
