// @ts-nocheck
import type { MockExamPaper } from './types'

/**
 * OCR GCSE English Language, Component 01 (J351/01), Communicating Information
 * and Ideas: mock papers 11 to 15, each set as OCR sets the paper.
 *
 * RESTRUCTURED TO OCR'S PAPER (24 October 2026).
 *
 * WHAT WAS WRONG. These papers set questions worth 4, 8, 12, 16 and 40, and
 * marked the writing 32 for content and 8 for accuracy. OCR's Component 01 is
 * Question 1 for 4, Question 2 for 6, Question 3 for 12 and Question 4 for 18,
 * then Question 5 or Question 6, one task of the candidate's choice, for 40
 * (content and organisation 24, technical accuracy 16): the guide
 * src/data/mark-scheme-guides/ocr-lang-component01.ts, checked twice against
 * OCR's June 2024 mark scheme, its specification and its sample paper. A
 * student sat a paper that does not exist, and an answer to Question 2 or 4
 * sent to the marker found no question of its worth, so it got general
 * feedback with no marks (src/__tests__/a-language-mock-is-the-boards-
 * paper.test.ts). The tasks were not OCR's either: Questions 1 to 3 were all
 * on the present-day text, so the nineteenth-century text was read only for
 * the comparison, where OCR sets Question 2 on both texts and Question 3 on the
 * second; Question 2 asked for analysis, where OCR's brings the two texts
 * together (synthesis, AO1, no marks for analysis); Question 4 asked only for
 * a comparison, where OCR's sets a statement about both texts to evaluate
 * (AO4, 12) as well as to compare (AO3, 6); and there was one writing task,
 * not a choice of two.
 *
 * WHAT WAS DONE.
 *   - The texts are unchanged, and below as they were: each paper's
 *     present-day article, labelled as specially written, is now Text 1, and
 *     its genuine nineteenth-century passage is Text 2. One from each century
 *     is what OCR sets.
 *   - The questions are OCR's, in OCR's order, worth what OCR's are: Question
 *     1, 4 marks in parts on one paragraph of Text 1; Question 2, 6 marks, what
 *     the two texts share; Question 3, 12 marks, language and structure in
 *     Text 2; Question 4, 18 marks, a statement about both texts to evaluate
 *     and compare; and Questions 5 and 6 as one entry worth 40 with both tasks,
 *     labelled "Q5 or Q6" (questionNumber 5 is what reaches the marker's
 *     'Q5/Q6'). Questions name paragraphs, never line numbers, because the
 *     mock page prints each text as wrapped prose. Times are OCR's advice, an
 *     hour a section; each question's minutes are the guide's suggestion.
 *   - Each question has a mark scheme in this site's words, from the guide's
 *     account of what earns marks, and each worth 6 or more one strong model
 *     answer. Every quotation in them was checked against the texts by script.
 *     The September review's corrections were kept in view: the Dickens
 *     passage is about emigrants leaving England, Dickens is surprised rather
 *     than reluctant, and the Kingsley essay is not dated to 1874.
 *   - Question 1 prints both texts, since the mock page shows the texts of a
 *     section's first question.
 *
 * CORRECTED 31 OCTOBER 2026. Paper 12's Text 1, written for this bank, said
 * that "Last year, a research team in China" edited human embryos "to enhance
 * cognitive function", and that governments held emergency meetings. No such
 * announcement is known. The case the world knows is a Chinese scientist's of
 * 2018, which aimed at resistance to HIV, and for which a court in Shenzhen
 * jailed him in 2019; the sentence now says that, which keeps the article's
 * point (an edit that cured nothing). No question or answer rests on it.
 *
 * CHECKED BY A SECOND READER, 31 OCTOBER 2026, against each pair of texts,
 * their Gutenberg sources, the guide, and OCR's own papers (the J351/01 sample
 * paper and the 2022 paper). Paper 12's corrected sentence was checked again
 * and is true: the 2018 announcement of twins born from embryos edited for
 * resistance to HIV, which they did not have, and the prison sentence a
 * Shenzhen court passed in December 2019. Fixed, one entry each:
 *   - All five, board wording: Questions 2 to 4 ended on OCR's sentences
 *     ("explain the impact of these ideas on you as a reader", "support your
 *     response with quotations from both texts", "referring to the text, using
 *     relevant subject terminology"), and Question 2 began on AQA's "Use
 *     details from both sources"; they now ask the same in this site's words.
 *     Question 4 still opened on OCR's "How far do you agree with this
 *     statement?"; it now reads as papers 01 to 10 do ("Decide how far you
 *     agree with this view.", "In your answer:"), 31 October 2026.
 *   - All five, style: each Text 1, written for this bank, used dashes as
 *     punctuation; now brackets, commas or colons, with no word changed.
 *   - 14, Text 1, untrue claim: "When the government announced last year" a
 *     cut of "a further fifteen percent", which no government announced; now
 *     the writer's local council, unnamed. Question 1's opening words and two
 *     answers' "government" changed to match.
 *   - 11, Q2: "healthy and good" (Text 1 never asks sport to make anyone good)
 *     and "both distrust the idea that winning is the point" (Kingsley never
 *     mentions winning); now "good for young people" and "neither writer makes
 *     winning the point".
 *   - 11, Q3: the list of reasons put in "the next sentence" (it is in the one
 *     "But if the proposal" opens); a list said to build towards a virtue that
 *     is not its last; "maimed" called the final word (it is "partial").
 *   - 11, Q4: "Sport is" an industry built on exclusion (the text says elite
 *     sport); Kingsley "speaks for" the public school (he cites it); "At
 *     sixteen, they are dropped" offered as a short sentence (it runs to
 *     nineteen words); elite sport "makes most young people stop" (they are
 *     "discarded").
 *   - 12, Q2: the scientists' hope that "no child is born to suffer" credited
 *     to the writer; the ethical worry about "the very heart of what it means
 *     to be human" used, in answer and mark scheme, as science's good; "short,
 *     striking fragments" analysed where analysis earns nothing. The link is
 *     now good that goes unnoticed.
 *   - 12, Q3: the spinning jenny and steam pump called "the inventions of the
 *     present" (neither was new in 1866).
 *   - 13, Q2: Hill's remedy, "individual influence", given as an effect of bad
 *     housing, in answer and mark scheme; the link is now how secure a home is.
 *   - 13, Q3: the landlord's reply called "quoted directly" (it is reported
 *     speech in quotation marks); the paragraph said to open with what are its
 *     second and third sentences.
 *   - 13, Q4: boys at a dust-bin "accessible to the whole neighborhood" counted
 *     as tenants (removed); the comparison note's "call to change the law",
 *     which Text 1 never makes, is now its call to treat housing as a right.
 *   - 13, writing model: four towns named, "five towns" at the end; now four.
 *   - 14, Q1(c): the mark scheme refused the answer that people did not care,
 *     which "silence" and "shrug" show; now accepted. A stray "(1)" removed.
 *   - 14, Q2: the cultural sector's "irreplaceable value of the arts" credited
 *     to the writer; "their funding" for arts funding.
 *   - 14, Q3: Ruskin's "your harbours and railroads" made Manchester's "own
 *     docks", which it did not have until 1894; a clause that runs on past a
 *     colon called a sentence.
 *   - 14, Q4: "economically illiterate" said of the cut (the text says it of
 *     the view that art is a luxury); "Every child deserves that discovery"
 *     called direct address (it has no "you"); the mark scheme's "opens with
 *     figures" (they come in the second paragraph).
 *   - 15, Q2: both parents said to run the firm (the father does; the mother
 *     is a ward sister).
 *   - 15, Q3 and Q4: the family, not its children, made "a nest" in the rope;
 *     the reader said not to learn who the emigrants are until the end, when
 *     the label names them (now: Dickens names them last); and in Q4 they were
 *     "hard-working", which Text 2 does not show.
 *
 * The September notes that follow are kept for the history of the texts. The
 * questions and answers they discuss were all replaced on 24 October 2026.
 *
 * WHAT WAS WRONG (found 26 September 2026 by
 * scripts/check-mock-exam-extracts.mjs; corrected 27 September 2026).
 *
 * These five papers (ocr-p1-11 to ocr-p1-15) are live: they are in
 * allMockExamPapers, and the mock-exam pages serve them. Each pairs a
 * present-day Source A with a nineteenth-century Source B, and every Source B
 * was invented but printed under a real writer's name: "a speech by Lord
 * Kinnaird to the Football Association, 1898", "a lecture by Professor Thomas
 * Huxley at the Royal Institution, 1882", "a speech by Lord Shaftesbury to the
 * House of Lords, 1884", "an essay by John Ruskin, Modern Painters, 1856" and
 * "an address by Sidney Webb to the Fabian Society, 1903". Not one sentence
 * of the Ruskin is in any of the five volumes of Modern Painters, nor of the
 * Huxley in two collections of his lectures and essays, nor of the Webb in
 * Fabian Essays; no text of the Kinnaird or Shaftesbury speeches could be
 * found at all. Every
 * question 4 model answer then analysed the invented sentences as the named
 * writer's own: Ruskin's "teaches us to see", Huxley's "Knowledge is
 * neutral. Human nature is not", Webb's "market gardens of Kent", and, for
 * Shaftesbury, "walls ran with damp" and "neither privacy nor ventilation",
 * which were not even in the invented extract.
 *
 * Every Source A carried a real publication's name (The Observer, New
 * Scientist, The New Statesman, The Guardian, The Independent) over an
 * invented byline, so a student was told that invented words had appeared in
 * those papers.
 *
 * The answers on the Source A texts also quoted words the texts do not
 * contain: "calculated indifference" (in two papers, and in neither extract),
 * "dishonesty" and "ruthlessness" for "dishonest" and "ruthless", and
 * "since 1980", "each time, the same" and "The NHS, the care sector, the
 * hospitality industry", each of which drops or rearranges the text's words
 * with no ellipsis. And they described what is not there: "rhetorical
 * questions" that are conditional statements, a "single-word paragraph" that
 * is a four-word sentence, a "short final sentence" of twenty-two words, a
 * tricolon put in the final paragraph that is in the third, the third
 * paragraph's first sentence called the second's, and a question cut short
 * with its question mark kept.
 *
 * WHAT WAS DONE.
 *   - Each Source B is now a genuine nineteenth-century passage on the same
 *     question, cut by script in whole paragraphs from the Project Gutenberg
 *     text its label names (never retyped; italic marks and printed section
 *     numbers removed, and the plain-text "--" printed as a dash):
 *       11  Charles Kingsley, "Nausicaa in London" (1874), on games in the
 *           education of boys and girls; #17437
 *       12  T. H. Huxley, "On the Advisableness of Improving Natural
 *           Knowledge" (1866); #16729
 *       13  Octavia Hill, "Organized Work among the Poor" (1869); #59674
 *       14  John Ruskin, "The Discovery and Application of Art" (Manchester,
 *           1857), from A Joy For Ever; #19980
 *       15  Charles Dickens, "Bound for the Great Salt Lake" (1863), from The
 *           Uncommercial Traveller; #914
 *     Where the named writer had written on the subject, that writer was
 *     kept (Huxley on the value of science, Ruskin on the value of art);
 *     where the named piece could not be found, a genuine piece of the period
 *     on the same question was used.
 *   - Paper 15's question 4 asked for perspectives on "immigration". The
 *     passage now printed describes emigrants leaving England, not
 *     immigrants arriving, so the question now asks about people who leave
 *     their homes to start a new life in another country. The writing task
 *     is unchanged.
 *   - Every Source A is labelled as specially written for this paper, keeping
 *     its invented byline so that the answers can still name the writer.
 *   - Every question 4 model answer was rewritten against the new Source B,
 *     and the Source A answers corrected where they misquoted or misdescribed
 *     the text. Every quotation in an answer, of any length, is now in the
 *     extract its question prints.
 *   - scripts/check-mock-exam-extracts.mjs names the five texts, so each
 *     passage is checked word for word against its own book rather than
 *     loosely against another of the writer's.
 *   - A second reading the same day found answers whose quotations were
 *     right but whose account of them was not, and corrected them: a
 *     "chiastic" pairing of "foundation" with "commodity" that the text
 *     makes with "luxury" (and "right" with "commodity"); a "shift" from
 *     the funding policy to the athletes, who come a paragraph before it;
 *     "short declarative sentences" that have no verb; a cause of the
 *     housing crisis given as one of its effects; four quotations with
 *     their capital letters lowered; Kingsley "writing in 1874", which is
 *     when the book appeared, not a known date for the essay; Ruskin
 *     answering a charge that art is "a luxury", which his extract never
 *     raises; and Dickens as a "reluctant" witness whose praise is
 *     "unwilling", when the text says he was surprised.
 */

// ─── Source Extracts ─────────────────────────────────────────────────────────

// Exam 11 - Sport & Competition
const SPORT_SOURCE_A = `There is something profoundly dishonest about the way we talk about sport in this country. We dress it up in the language of aspiration and togetherness ("inspiring a generation", "bringing the nation together") while ignoring the uncomfortable reality that elite sport is, at its core, an industry built on exclusion. For every child who makes it to a national squad, thousands are discarded along the way, their confidence shattered by a system that measures human worth in hundredths of a second.

I have spent twenty years coaching young athletes, and I have watched the system consume them. At fourteen, they are told they are special. At sixteen, they are dropped from programmes with a form letter and a suggestion to "keep enjoying sport recreationally". The psychological damage this inflicts is rarely discussed. We prefer the medal ceremonies, the tearful interviews, the narrative of triumph against adversity. We do not talk about the eighteen-year-old gymnast who cannot eat without anxiety, or the swimmer who has not had a single weekend free since she was eleven.

The funding model makes this worse. Since the introduction of National Lottery funding in 1997, British sport has operated on a ruthless "no compromise" approach: money flows to sports and athletes most likely to win medals. This has been spectacularly successful in terms of Olympic performance. But success measured purely in gold medals tells us nothing about whether sport is actually improving the health and wellbeing of the population. Grassroots sports facilities continue to close at an alarming rate. School playing fields are sold to developers. Community swimming pools operate on skeleton budgets.

We need an honest conversation about what sport is for. If the answer is simply "winning", then let us at least be truthful about the human cost. If the answer is something broader (health, community, joy), then we must fundamentally rethink how we fund and organise it.`

const SPORT_SOURCE_A_REF =
  'Specially written for this practice paper: an opinion article, "The Medal Factory", under the invented byline Rachel Okonkwo'

// Project Gutenberg #17437 (the 1874 Isbister edition), the one paragraph
// beginning "It is proposed, just now", cut by script, never retyped.
const SPORT_SOURCE_B = `It is proposed, just now, to assimilate the education of girls more and more to that of boys. If that means that girls are merely to learn more lessons, and to study what their brothers are taught, in addition to what their mothers were taught; then it is to be hoped, at least by physiologists and patriots, that the scheme will sink into that limbo whither, in a free and tolerably rational country, all imperfect and ill-considered schemes are sure to gravitate. But if the proposal be a bona fide one: then it must be borne in mind that in the public schools of England, and in all private schools, I presume, which take their tone from them, cricket and football are more or less compulsory, being considered integral parts of an Englishman's education; and that they are likely to remain so, in spite of all reclamations: because masters and boys alike know that games do not, in the long run, interfere with a boy's work; that the same boy will very often excel in both; that the games keep him in health for his work; that the spirit with which he takes to his games when in the lower school, is a fair test of the spirit with which he will take to his work when he rises into the higher school; and that nothing is worse for a boy than to fall into that loafing, tuck-shop-haunting set, who neither play hard nor work hard, and are usually extravagant, and often vicious. Moreover, they know well that games conduce, not merely to physical, but to moral health; that in the playing-field boys acquire virtues which no books can give them; not merely daring and endurance, but, better still, temper, self-restraint, fairness, honour, unenvious approbation of another's success, and all that "give and take" of life which stand a man in such good stead when he goes forth into the world, and without which, indeed, his success is always maimed and partial.`

const SPORT_SOURCE_B_REF =
  'Charles Kingsley, "Nausicaa in London: or, The Lower Education of Woman", from Health and Education (London: W. Isbister, 1874), on the proposal to educate girls as boys are educated'

// Exam 12 - Science & Discovery
const SCIENCE_SOURCE_A = `We are living through the greatest revolution in biological science since Darwin, and almost nobody is paying attention. The development of CRISPR gene-editing technology, which allows scientists to alter DNA with unprecedented precision, has moved from laboratory curiosity to practical reality in less than a decade. Crops that resist drought. Mosquitoes engineered to stop spreading malaria. The potential elimination of inherited diseases that have caused suffering for millennia. The possibilities are extraordinary.

They are also terrifying. In 2018, a scientist in China announced that he had edited the genes of human embryos, not to cure a disease the babies had, but to protect them against one they might never catch. The scientific community reacted with horror. Regulators issued stern statements. A Chinese court sent him to prison. And then, as is the way with these things, the news cycle moved on and we forgot about it.

We cannot afford to forget. Gene editing raises questions that go to the very heart of what it means to be human. If we can eliminate genetic predispositions to depression, should we? If we can engineer children who are taller, stronger, more intelligent, will we create a society divided not merely by wealth but by biology? Who decides which traits are "defects" to be corrected and which are variations to be celebrated?

The scientists I have spoken to are overwhelmingly optimistic. They see a future free from genetic disease, a world where no child is born to suffer from conditions that we had the power to prevent. I share their excitement. But I cannot shake the feeling that we are editing a text we have not yet fully learned to read, making permanent changes to a code we only partially understand.`

const SCIENCE_SOURCE_A_REF =
  'Specially written for this practice paper: a magazine article, "Rewriting the Code of Life", under the invented byline Professor James Whitworth'

// Project Gutenberg #16729 (Macmillan, 1870), two consecutive paragraphs,
// from "It is very certain" to "physical comforts", cut by script, never
// retyped.
const SCIENCE_SOURCE_B = `It is very certain that for every victim slain by the plague, hundreds of mankind exist and find a fair share of happiness in the world, by the aid of the spinning jenny. And the great fire, at its worst, could not have burned the supply of coal, the daily working of which, in the bowels of the earth, made possible by the steam pump, gives rise to an amount of wealth to which the millions lost in old London are but as an old song.

But spinning jenny and steam pump are, after all, but toys, possessing an accidental value; and natural knowledge creates multitudes of more subtle contrivances, the praises of which do not happen to be sung because they are not directly convertible into instruments for creating wealth. When I contemplate natural knowledge squandering such gifts among men, the only appropriate comparison I can find for her is, to liken her to such a peasant woman as one sees in the Alps, striding ever upward, heavily burdened, and with mind bent only on her home; but yet, without effort and without thought, knitting for her children. Now stockings are good and comfortable things, and the children will undoubtedly be much the better for them; but surely it would be short-sighted, to say the least of it, to depreciate this toiling mother as a mere stocking-machine—a mere provider of physical comforts?`

const SCIENCE_SOURCE_B_REF =
  'Thomas Henry Huxley, "On the Advisableness of Improving Natural Knowledge", a lay sermon given in St Martin\'s Hall, London, on 7 January 1866, looking back two hundred years to the Great Plague of 1665 and the Great Fire of London of 1666; from Lay Sermons, Addresses and Reviews (London: Macmillan, 1870)'

// Exam 13 - Housing
const HOUSING_SOURCE_A = `I moved seven times before my eighteenth birthday. Not because my parents were restless or adventurous, but because that is what happens when you rent in modern Britain. Each time, the pattern was the same: a letter from the letting agent, a scramble to find somewhere affordable, the grim ritual of packing boxes while my mother tried to pretend it was an adventure. "Think of it as a fresh start," she would say, taping shut a box of kitchen things. I learned not to make close friends with the neighbours.

The housing crisis in this country is not a natural disaster. It is a political choice. Since the Right to Buy scheme was introduced in 1980, local authority housing stock has declined by over two million homes. Private rents have risen by 60% in the last decade alone. A generation of young people, my generation, has been locked out of home ownership entirely, condemned to spend a third of their income enriching landlords while being told that if they just stopped buying coffee and avocados they could afford a deposit.

The human cost is staggering. Research by Shelter found that over a million children in England are living in unsuitable housing: damp, overcrowded, temporary. These children are more likely to suffer from respiratory illness, more likely to struggle at school, more likely to experience mental health problems. We know this. The evidence has been available for decades. And yet the construction of social housing remains at historically low levels.

Housing is not a luxury. It is the foundation upon which everything else is built: education, health, employment, family life. Until we treat it as a right rather than a commodity, nothing will change.`

const HOUSING_SOURCE_A_REF =
  'Specially written for this practice paper: an opinion article, "Generation Rent", under the invented byline Aisha Patel'

// Project Gutenberg #59674 (the New York reprint of 1875), the essay's first
// two paragraphs, cut by script, never retyped; the italic marks round
// "i. e." are left out, and the reprint's American spelling is kept.
const HOUSING_SOURCE_B = `Further organization in our mode of dealing with the poor is now generally agreed to be necessary, but there is another truth less dwelt upon, yet on the due recognition of which success equally depends. I feel most deeply that the disciplining of our immense poor population must be effected by individual influence; and that this power can change it from a mob of paupers and semi-paupers into a body of self-dependent workers. It is my opinion, further, that although such influence may be brought to bear upon them in very various ways, it may be exercised in a very remarkable manner by persons undertaking the oversight and management of such houses as the poor habitually lodge in. In support of this opinion I subjoin an account of what has been actually achieved in two very poor courts in London.

About four years ago I was put in possession of three houses in one of the worst courts of Marylebone. Six other houses were bought subsequently. All were crowded with inmates. The first thing to be done was to put them in decent tenantable order. The set last purchased was a row of cottages facing a bit of desolate ground, occupied with wretched, dilapidated cow-sheds, manure heaps, old timber, and rubbish of every description. The houses were in a most deplorable condition: the plaster was dropping from the walls: on one staircase a pail was placed to catch the rain that fell through the roof. All the staircases were perfectly dark; the banisters were gone, having been burnt as firewood by tenants. The grates, with large holes in them, were falling forward into the rooms. The washhouse, full of lumber belonging to the landlord, was locked up; thus the inhabitants had to wash clothes, as well as to cook, eat, and sleep, in their small rooms. The dust-bin, standing in the front of the houses, was accessible to the whole neighborhood, and boys often dragged from it quantities of unseemly objects, and spread them over the court. The state of the drainage was in keeping with everything else. The pavement of the back-yard was all broken up, and great puddles stood in it, so that the damp crept up the outer walls. One large but dirty water-butt received the water laid on for the houses: it leaked, and for such as did not fill their jugs when the water came in, or who had no jugs to fill, there was no water. The former landlord's reply to one of the tenants who asked him to have an iron hoop put round the butt to prevent leakage, was, that "if he didn't like it" (i. e. things as they were) "he might leave." The man to whom this was spoken—by far the best tenant in the place—is now with us, and often gives his spare time to making his room more comfortable, knowing that he will be retained if he behaves well.`

const HOUSING_SOURCE_B_REF =
  'Octavia Hill, housing reformer, "Organized Work among the Poor: Suggestions Founded on Four Years\' Management of a London Court" (July 1869), from Homes of the London Poor (New York, 1875)'

// Exam 14 - Arts & Culture
const ARTS_SOURCE_A = `When my local council announced last year that its arts funding would be cut by a further fifteen percent, the response from the cultural sector was predictable: outrage, open letters, impassioned speeches about the irreplaceable value of the arts. What was more revealing was the response from everybody else. There was, overwhelmingly, silence. A collective shrug. The sense that, in times of economic difficulty, art is a luxury we can no longer afford.

This attitude is not merely wrong. It is economically illiterate. The creative industries contribute over £115 billion annually to the UK economy, more than the automotive, aerospace, and life sciences sectors combined. For every pound of public money invested in the arts, an estimated five pounds is generated in economic return. To cut arts funding in the name of fiscal responsibility is like burning your furniture to save on heating bills: it produces a brief warmth followed by a much longer cold.

But the economic argument, powerful as it is, misses the deeper point. The arts are not valuable because they generate revenue. They are valuable because they make us human. A society without music, without theatre, without literature, without the visual arts, is not a society at all: it is merely a collection of individuals engaged in the business of survival. The arts give us a shared language for experiences that would otherwise remain private and incommunicable: grief, joy, love, rage, wonder, despair.

I grew up on a council estate in Salford. The local library saved my life: not metaphorically, but literally. The books I found there showed me that the world was larger than the four streets I knew, that other lives were possible, that imagination was not a weakness but a form of power. Every child deserves that discovery. To deny it to them because we cannot see its value on a spreadsheet is a failure not of economics but of imagination.`

const ARTS_SOURCE_A_REF =
  'Specially written for this practice paper: an opinion article, "The Case for Culture", under the invented byline David Oyelaran'

// Project Gutenberg #19980 (a George Allen printing of the 1880 edition),
// sections 20 and 21 of the first lecture, cut by script, never retyped; the
// printed section numbers are left out.
const ARTS_SOURCE_B = `I. Discovery.—How are we to get our men of genius: that is to say, by what means may we produce among us, at any given time, the greatest quantity of effective art-intellect? A wide question, you say, involving an account of all the best means of art education. Yes, but I do not mean to go into the consideration of those; I want only to state the few principles which lie at the foundation of the matter. Of these, the first is that you have always to find your artist, not to make him; you can't manufacture him, any more than you can manufacture gold. You can find him, and refine him: you dig him out as he lies nugget-fashion in the mountain-stream; you bring him home; and you make him into current coin, or household plate, but not one grain of him can you originally produce. A certain quantity of art-intellect is born annually in every nation, greater or less according to the nature and cultivation of the nation, or race of men; but a perfectly fixed quantity annually, not increasable by one grain. You may lose it, or you may gather it; you may let it lie loose in the ravine, and buried in the sands, or you may make kings' thrones of it, and overlay temple gates with it, as you choose: but the best you can do with it is always merely sifting, melting, hammering, purifying—never creating.

And there is another thing notable about this artistical gold; not only is it limited in quantity, but in use. You need not make thrones or golden gates with it unless you like, but assuredly you can't do anything else with it. You can't make knives of it, nor armour, nor railroads. The gold won't cut you, and it won't carry you: put it to a mechanical use, and you destroy it at once. It is quite true that in the greatest artists, their proper artistical faculty is united with every other; and you may make use of the other faculties, and let the artistical one lie dormant. For aught I know, there may be two or three Leonardo da Vincis employed at this moment in your harbours and railroads: but you are not employing their Leonardesque or golden faculty there,—you are only oppressing and destroying it. And the artistical gift in average men is not joined with others: your born painter, if you don't make a painter of him, won't be a first-rate merchant, or lawyer; at all events, whatever he turns out, his own special gift is unemployed by you; and in no wise helps him in that other business. So here you have a certain quantity of a particular sort of intelligence, produced for you annually by providential laws, which you can only make use of by setting it to its own proper work, and which any attempt to use otherwise involves the dead loss of so much human energy.`

const ARTS_SOURCE_B_REF =
  'John Ruskin, "The Discovery and Application of Art", a lecture on the political economy of art given in Manchester on 10 July 1857, from A Joy For Ever (and Its Price in the Market), as reissued in 1880'

// Exam 15 - Immigration
const IMMIGRATION_SOURCE_A = `My parents arrived in this country in 1998 with two suitcases, three hundred pounds, and a conviction that Britain was a place where hard work would be rewarded. Twenty-six years later, my father runs a small engineering firm that employs fourteen people. My mother is a ward sister at the local hospital, where she has worked for two decades. My brother is a solicitor. I am a teacher. Between us, we have paid more in taxes than I care to calculate.

I mention this not because I believe immigrants should have to justify their existence through economic contribution (the idea that a human being's right to live in safety and dignity depends on their productivity is morally grotesque), but because the public conversation about immigration in this country has become so divorced from reality that basic facts need restating.

Net migration is not "out of control". The overwhelming majority of immigrants come to work, to study, or to join family members already here. They are younger, on average, than the existing population, which means they contribute more in taxes than they consume in public services. The NHS would collapse within weeks without immigrant workers. The care sector, the hospitality industry, agriculture, construction: these are not abstract economic categories. They are the essential services upon which all of our daily lives depend.

None of this means that immigration policy should not be debated, or that legitimate concerns about infrastructure and public services should be dismissed. But the debate must start from facts, not from the inflammatory headlines and misleading statistics that have poisoned public discourse for far too long. We deserve better than politicians who stoke fear for electoral advantage while quietly relying on immigrant labour to keep the country running.`

const IMMIGRATION_SOURCE_A_REF =
  'Specially written for this practice paper: an opinion article, "Facts, Fear, and the Immigration Debate", under the invented byline Priya Chakraborty'

// Project Gutenberg #914, ten consecutive paragraphs of chapter XXII, from "A
// stranger would be puzzled" to "scrupulous exactness", cut by script, never
// retyped.
const IMMIGRATION_SOURCE_B = `‘A stranger would be puzzled to guess the right name for these people, Mr. Uncommercial,’ says the captain.

‘Indeed he would.’

‘If you hadn’t known, could you ever have supposed—?’

‘How could I! I should have said they were in their degree, the pick and flower of England.’

‘So should I,’ says the captain.

‘How many are they?’

‘Eight hundred in round numbers.’

I went between-decks, where the families with children swarmed in the dark, where unavoidable confusion had been caused by the last arrivals, and where the confusion was increased by the little preparations for dinner that were going on in each group. A few women here and there, had got lost, and were laughing at it, and asking their way to their own people, or out on deck again. A few of the poor children were crying; but otherwise the universal cheerfulness was amazing. ‘We shall shake down by to-morrow.’ ‘We shall come all right in a day or so.’ ‘We shall have more light at sea.’ Such phrases I heard everywhere, as I groped my way among chests and barrels and beams and unstowed cargo and ring-bolts and Emigrants, down to the lower-deck, and thence up to the light of day again, and to my former station.

Surely, an extraordinary people in their power of self-abstraction! All the former letter-writers were still writing calmly, and many more letter-writers had broken out in my absence. A boy with a bag of books in his hand and a slate under his arm, emerged from below, concentrated himself in my neighbourhood (espying a convenient skylight for his purpose), and went to work at a sum as if he were stone deaf. A father and mother and several young children, on the main deck below me, had formed a family circle close to the foot of the crowded restless gangway, where the children made a nest for themselves in a coil of rope, and the father and mother, she suckling the youngest, discussed family affairs as peaceably as if they were in perfect retirement. I think the most noticeable characteristic in the eight hundred as a mass, was their exemption from hurry.

Eight hundred what? ‘Geese, villain?’ EIGHT HUNDRED MORMONS. I, Uncommercial Traveller for the firm of Human Interest Brothers, had come aboard this Emigrant Ship to see what Eight hundred Latter-day Saints were like, and I found them (to the rout and overthrow of all my expectations) like what I now describe with scrupulous exactness.`

const IMMIGRATION_SOURCE_B_REF =
  'Charles Dickens, "Bound for the Great Salt Lake" (1863), from The Uncommercial Traveller: Dickens goes aboard the Amazon, a ship in the London docks about to carry some eight hundred emigrants, converts to the Mormon church, to America'

// ─── Mark scheme levels ──────────────────────────────────────────────────────
// In this site's words, from the guide's levels and its account of what earns
// marks (src/data/mark-scheme-guides/ocr-lang-component01.ts). OCR's own
// descriptors are its copyright and are not copied. Each question adds what
// its own paper's texts give a student to say.

const MARK_LEVELS_Q2 = [
  'Level 3 (5-6 marks): connects the two texts confidently and in detail, with well-chosen evidence from both, and sees the ideas, attitudes or feelings they share as well as the surface facts.',
  'Level 2 (3-4 marks): makes sensible connections between the texts with relevant evidence, though one text may get more attention than the other.',
  'Level 1 (1-2 marks): picks out a few details, mostly obvious ones and often from one text, and does little to connect them.',
  'Reward points that link the texts, each backed by evidence from both, and a fair balance between the two. There are no marks here for analysing language.',
]

const MARK_LEVELS_Q3 = [
  'Level 6 (11-12 marks): detailed, subtle analysis of language and structure in every point, showing exactly how the writer steers the reader; subject terms are exact and strengthen the argument.',
  'Level 5 (9-10 marks): analyses with insight, giving language and structure fairly even, detailed attention; terms fit naturally into the explanations.',
  'Level 4 (7-8 marks): explains with understanding, and in some depth, what both the language and the structure do, though one may get more attention than the other.',
  'Level 3 (5-6 marks): explains some effects clearly and mentions both language and structure, though one is explained less fully.',
  'Level 2 (3-4 marks): notices some features but says much more about one of language or structure, and often names features without explaining them.',
  'Level 1 (1-2 marks): mostly describes or retells the text, with little sense of how the writer creates effects.',
  'An answer that leaves structure out, or adds one sentence about it at the end, cannot reach the higher levels. Reward short, precise quotations, each followed by what it suggests and how it affects the reader.',
]

const MARK_LEVELS_AO4 = [
  'Level 6 (11-12 marks): judges the statement sharply and with balance from start to finish, explains fully how both texts work on the reader, and builds exactly the right quotations into the argument.',
  'Level 5 (9-10 marks): weighs up the statement with care, explains clearly how the texts affect the reader, and chooses quotations that make the case convincing.',
  'Level 4 (7-8 marks): develops its judgements on the statement, comments on the effect on the reader and chooses quotations well.',
  'Level 3 (5-6 marks): makes clear judgements on the statement, with some sense of how the texts affect a reader and suitable quotations.',
  'Level 2 (3-4 marks): gives simple judgements, notices a little of how the texts affect a reader, and uses some suitable quotations.',
  'Level 1 (1-2 marks): mostly says what happens in the texts, by retelling or copying, with little real judgement.',
  'The verdict may differ between the two texts. An answer that quotes from only one text cannot reach the higher levels.',
]

const MARK_LEVELS_AO3 = [
  'Level 6 (6 marks): moves between the texts all the way through, exploring in detail what each writer thinks and how each one shows it.',
  'Level 5 (5 marks): keeps the comparison going through the whole answer, covering both ideas and methods.',
  'Level 4 (4 marks): develops the comparison of both what the writers think and how they show it.',
  "Level 3 (3 marks): sets the writers' ideas side by side clearly, and begins to compare their methods.",
  "Level 2 (2 marks): spots the main ways the writers' ideas and viewpoints are alike or different.",
  'Level 1 (1 mark): notes one or two basic likenesses or differences.',
  'Evaluation and comparison may be woven together all the way through. Writing about the texts separately, never linking them, earns very little of this mark.',
]

const MARK_LEVELS_AO5 = [
  'Level 6 (21-24 marks): bends the form on purpose to influence the reader; bold, well-judged choices of tone and style drive the purpose; every part of the structure is controlled and used for effect.',
  'Level 5 (17-20 marks): uses the form confidently, with a sure sense of reader and purpose; tone and style hold steady throughout; paragraphs and sentences are planned to do particular jobs.',
  'Level 4 (13-16 marks): adapts the form clearly for the reader and purpose, with a suitable tone and style; well organised, and sometimes uses structure for effect.',
  'Level 3 (9-12 marks): keeps to the form with audience and purpose in mind; the tone is right but slips at times; a clear overall shape, with paragraphs and links that mostly work.',
  'Level 2 (5-8 marks): mostly keeps to a suitable form, tries for a fitting tone, and shows some organisation through paragraphs and links.',
  'Level 1 (1-4 marks): makes some attempt at a suitable form, but does little to suit the tone to the reader, with little planned structure.',
]

const MARK_LEVELS_AO6 = [
  'Level 4 (13-16 marks): bold, varied sentences give each idea its full force; punctuation is accurate and chosen for effect; vocabulary is precise, and even difficult words are spelt correctly, with only the very occasional slip.',
  'Level 3 (9-12 marks): sentences are varied widely and on purpose; punctuation is accurate and makes the meaning clear; some ambitious words work well, with the odd slip on irregular or unusual spellings.',
  'Level 2 (5-8 marks): different kinds of sentence, mostly correct and now and then used for effect; punctuation usually right; some words clearly chosen for effect; a few spelling slips, including on harder words.',
  'Level 1 (1-4 marks): mostly simple sentences with some longer ones attempted; uneven punctuation; plain but relevant vocabulary; everyday words largely spelt correctly.',
]

const MARK_WRITING_NOTE =
  'Both tasks are marked the same way, on two grids marked separately and added: AO5 for content and organisation (24) and AO6 for technical accuracy (16).'

// ─── The papers ──────────────────────────────────────────────────────────────
// In each, Text 1 is the paper's _SOURCE_A and Text 2 its _SOURCE_B.

export const ocrP1C: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 11: sport
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-p1-11',
    board: 'OCR',
    paperNumber: 1,
    title: 'Component 01: Communicating Information and Ideas',
    subtitle: 'English Language J351/01',
    code: 'J351/01',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p1-11-reading',
        title: 'Section A: Reading',
        description: `Read the two texts below, then answer all four questions. You are advised to spend about one hour on this section, about 12 minutes of it reading the texts.\n\nText 1: ${SPORT_SOURCE_A_REF}\nText 2: ${SPORT_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-11-q1',
            questionNumber: 1,
            questionText: `Look again at the second paragraph of Text 1, from "I have spent twenty years" to "since she was eleven."\n\n(a) For how long has the writer coached young athletes? [1]\n\n(b) What happens to many young athletes at sixteen, according to the writer? Give two details. [2]\n\n(c) Identify one phrase that shows the harm the system can do to young athletes. [1]`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Text 1:\n${SPORT_SOURCE_A}\n\nText 2:\n${SPORT_SOURCE_B}`,
            extractSource: `Text 1: ${SPORT_SOURCE_A_REF} | Text 2: ${SPORT_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': `(a) Twenty years.\n(b) They are dropped from their programmes, and they are sent a form letter.\n(c) "I have watched the system consume them".`,
            },
            markScheme: [
              '(a) 1 mark: twenty years.',
              '(b) 1 mark each, up to 2, for: dropped from programmes; sent a form letter; told to "keep enjoying sport recreationally".',
              '(c) 1 mark for any one of: "watched the system consume them"; "The psychological damage this inflicts"; the gymnast "who cannot eat without anxiety"; the swimmer who "has not had a single weekend free since she was eleven".',
              'Every answer must come from the second paragraph of Text 1.',
            ],
          },
          {
            id: 'ocr-p1-11-q2',
            questionNumber: 2,
            questionText: `What do the two writers believe sport should do for young people?\n\nAnswer by linking the two texts, and back each point with evidence from both.`,
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: `Text 1:\n${SPORT_SOURCE_A}\n\nText 2:\n${SPORT_SOURCE_B}`,
            extractSource: `Text 1: ${SPORT_SOURCE_A_REF} | Text 2: ${SPORT_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 8-9': `Both writers believe that sport should be good for young people, not merely a route to success. The writer of Text 1 wants sport to serve "health, community, joy", and complains that "success measured purely in gold medals tells us nothing about whether sport is actually improving the health and wellbeing of the population". Kingsley agrees that "the games keep him in health for his work", and goes further: games "conduce, not merely to physical, but to moral health". Both writers also see sport as something that shapes how young people live with others. Kingsley lists "temper, self-restraint, fairness, honour, unenvious approbation of another's success", and the whole "give and take" of life; the writer of Text 1 wants "community" from sport, and laments that "Grassroots sports facilities continue to close" while money goes to a few medal hopes. Finally, neither writer makes winning the point. The modern writer attacks a system that "measures human worth in hundredths of a second", and Kingsley's list of virtues includes approving of "another's success", the opposite of a "no compromise" chase for medals.`,
            },
            markScheme: [
              ...MARK_LEVELS_Q2,
              'Links to credit: health ("health, community, joy"; games that "keep him in health"); character and life with others (the virtues in Text 2; community in Text 1); winning not the point ("hundredths of a second"; "unenvious approbation of another\'s success").',
            ],
          },
          {
            id: 'ocr-p1-11-q3',
            questionNumber: 3,
            questionText: `Look again at Text 2, the whole text.\n\nHow does Kingsley use language and structure to argue for the value of games?\n\nRefer closely to the words of the text, and use subject terminology to explain their effects.`,
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: SPORT_SOURCE_B,
            extractSource: SPORT_SOURCE_B_REF,
            modelAnswers: {
              'Grade 8-9': `Kingsley's passage is a single long paragraph built mostly from two enormous sentences, and its structure imitates an argument that keeps adding reasons until it seems unanswerable.\n\nHe begins by setting out the proposal he is responding to, "It is proposed, just now, to assimilate the education of girls more and more to that of boys", and then divides it in two with a pair of conditionals. "If that means" girls will simply learn "more lessons", he hopes the scheme "will sink into that limbo whither ... all imperfect and ill-considered schemes are sure to gravitate". The image of schemes sinking into "limbo", a place of the forgotten, mocks the idea with gentle scorn, and the alliteration of "imperfect and ill-considered" sharpens it. "But if the proposal be a bona fide one" opens the real argument: if girls are to be educated like boys, they must have games too.\n\nAt the centre of that sentence is a list of reasons, each introduced by "that": "that games do not, in the long run, interfere with a boy's work; that the same boy will very often excel in both; that the games keep him in health for his work". The repetition gives the argument momentum, and the authority behind it is shared, since "masters and boys alike know" these things. The list ends on what games prevent: "that loafing, tuck-shop-haunting set, who neither play hard nor work hard, and are usually extravagant, and often vicious". The compound adjective "tuck-shop-haunting" is comic and contemptuous, and the balanced "neither play hard nor work hard" links effort in sport with effort in study.\n\nThe last sentence, beginning "Moreover", raises the argument to a higher level. Games conduce "not merely to physical, but to moral health", and the same "not merely... but" pattern returns for the virtues: "not merely daring and endurance, but, better still, temper, self-restraint, fairness, honour". The phrase "better still" tells the reader that character matters more than toughness, and the list reaches its warmest and least selfish quality, "unenvious approbation of another's success", before widening to the whole "give and take" of life. The claim that boys gain "virtues which no books can give them" makes the playing-field a classroom in its own right.\n\nThe ending looks forward to adult life, when a man "goes forth into the world", and the final words, "his success is always maimed and partial", are strong and almost physical: "maimed" makes a life without these virtues sound injured. Kingsley's long, building sentences mirror the way he wants games to build a person, step by step, until the whole is complete.`,
            },
            markScheme: [
              ...MARK_LEVELS_Q3,
              'Language to credit: the mocking image of schemes sinking into "limbo"; the contempt of "tuck-shop-haunting"; the balanced "neither play hard nor work hard"; the "not merely... but" pattern and "better still"; the list of virtues; the strong word "maimed" in the closing phrase.',
              'Structure to credit: the proposal stated, then split by two conditionals; the long list of reasons built on "that"; "Moreover" raising the argument from physical to moral health; an ending that looks forward to adult life.',
            ],
          },
          {
            id: 'ocr-p1-11-q4',
            questionNumber: 4,
            questionText: `"Both writers believe that sport matters most for what it does to a young person's character, not for winning."\n\nDecide how far you agree with this view.\n\nIn your answer:\n• weigh up the writers' ideas on sport and young people, and how far the statement holds for each text\n• say how the texts affect you as a reader, and why\n• compare how each writer presents those ideas\n• quote from both texts to support your points.`,
            marks: 18,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: `Text 1:\n${SPORT_SOURCE_A}\n\nText 2:\n${SPORT_SOURCE_B}`,
            extractSource: `Text 1: ${SPORT_SOURCE_A_REF} | Text 2: ${SPORT_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 8-9': `I agree that neither writer thinks winning is what sport is for, but only Kingsley makes character the main point. The writer of Text 1 cares more about young people's health and happiness, and about who gets the chance to play at all.\n\nKingsley's argument fits the statement closely. Games keep a boy "in health for his work", but the passage builds to its real claim, that they "conduce, not merely to physical, but to moral health". The virtues he lists, "temper, self-restraint, fairness, honour", are qualities of character, and "better still" ranks them above "daring and endurance". Even his warning about the "loafing, tuck-shop-haunting set" is about character, not results. Yet Kingsley does connect sport with success in a broader sense. Games show "the spirit with which he will take to his work", and without their virtues a man's "success is always maimed and partial". So for Kingsley, character is the point because it leads to success in life, if not in matches. As a reader, I find his confidence persuasive, though his assumption that compulsory games suit everyone feels old-fashioned.\n\nThe writer of Text 1 rejects winning as the measure even more strongly. Elite sport is "an industry built on exclusion", and a system that "measures human worth in hundredths of a second" leaves thousands with their confidence "shattered". Twenty years of coaching give authority to the claim "I have watched the system consume them", and the examples of "the eighteen-year-old gymnast who cannot eat without anxiety" and "the swimmer who has not had a single weekend free since she was eleven" make the human cost painfully concrete. But the alternative offered is not character. It is "health, community, joy", and facilities for everyone, at a time when "School playing fields are sold to developers" while money flows to likely medal winners. The article is about wellbeing and fairness, not about building virtue.\n\nThe writers present these ideas very differently. Kingsley writes in long, confident sentences, piling up reasons with "that" and "Moreover", and draws his authority from an established institution, the public school. The writer of Text 1 is angry and personal, sets two ages side by side in parallel sentences ("At fourteen, they are told they are special. At sixteen, they are dropped"), and attacks the bodies that fund sport. Kingsley sees games as something every boy should be made to play; the modern writer sees elite sport as something that discards most of the young people who enter it.\n\nOverall, the statement is true of Kingsley, for whom sport is above all a school of character, and only half true of Text 1, which agrees that winning should not matter most but puts health, joy and community in its place. Both writers, though, would agree that a sporting system judged only by its medals has forgotten what sport is for.`,
            },
            markScheme: {
              'AO4, evaluation (12 marks)': [
                ...MARK_LEVELS_AO4,
                'In this paper: Text 2 makes character the point ("moral health"), though it links character to later "success"; Text 1 rejects winning but puts "health, community, joy" and fair access in its place. Credit a verdict that differs between the texts.',
              ],
              'AO3, comparison (6 marks)': [
                ...MARK_LEVELS_AO3,
                "Methods to compare: long, confident sentences of reasons against short, angry ones; the authority of an institution against a coach's personal witness; a list of virtues against concrete cases of harm.",
              ],
              Marking: ['The two grids are marked separately and the marks added, out of 18.'],
            },
          },
        ],
      },
      {
        id: 'ocr-p1-11-writing',
        title: 'Section B: Writing',
        description:
          'Answer ONE question: Question 5 or Question 6. You are advised to spend about one hour on this section, including time to plan and to check your work.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-11-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText: `Answer ONE of the following questions.\n\nQuestion 5\n"Money for sport should be spent on local clubs and facilities, not on elite athletes."\nWrite an article for a sports website in which you argue for or against this statement.\nIn your article you could:\n• describe the sports facilities in your area\n• explain what funding for elite athletes achieves\n• suggest how money could best be spent.\n\nOR\n\nQuestion 6\nWrite a letter to a younger friend who has just been dropped from a sports team, giving them advice and encouragement.\nIn your letter you could:\n• show that you understand how they feel\n• explain what sport can still give them\n• suggest what they could do next.\n\nIn your answer you will be assessed on content and organisation (24 marks) and on technical accuracy (16 marks).`,
            marks: 40,
            suggestedTimeMinutes: 60,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Question 5, an article for the statement.\n\nMedals are not the measure\n\nEvery four years, the country gathers round its televisions to watch British athletes win medals, and every four years politicians tell us that those medals will inspire a generation. I love watching the Olympics as much as anyone. But I have started to ask a question that spoils the party: inspire a generation to do what, and where?\n\nTake my town. In the last five years, our council has closed one of its two public swimming pools and cut the opening hours of the other. The athletics track at the old secondary school has been built over. The football club where I learned to play survives on raffles and the goodwill of three volunteer coaches, one of whom is seventy-two. When a ten-year-old watches a swimmer win gold and asks to learn to swim, the honest answer in many places is that the nearest lesson is a bus ride away and the waiting list is months long.\n\nThat is why I believe the money we spend on sport should go first to local clubs and facilities. Elite athletes are few; the rest of us are many. A pound spent on a community pool may never produce a medal, but it can teach hundreds of children to swim, a skill that saves lives. A pound spent on a youth club's coaching course may never make the news, but it keeps teenagers active, gives them friends and adults to look up to, and costs far less than treating the illnesses that come from inactivity.\n\nSupporters of elite funding will say that success at the top drives interest at the bottom, and there is some truth in this. Watching great athletes can make people want to try a sport. But wanting to try is not enough. If there is nowhere to go, the inspiration fades before the closing ceremony is over. A medal is a moment; a local club is there every week.\n\nI am not arguing that elite sport should receive nothing. Our best athletes deserve support, and many of them started in exactly the kind of small, struggling clubs I am describing. That is the point. Every champion began somewhere local. If we let those places close, we are not only failing ordinary children; we are cutting off the supply of future champions too.\n\nSo the next time a minister celebrates a medal table, ask some simple questions. How many children in this country cannot swim? How many clubs have closed this year? The answers will tell you far more about the health of British sport than any podium. Let us fund the places where sport begins, and the medals will look after themselves.`,
            },
            markScheme: {
              'AO5, content and organisation (24 marks)': MARK_LEVELS_AO5,
              'AO6, technical accuracy (16 marks)': MARK_LEVELS_AO6,
              'For these tasks': [
                MARK_WRITING_NOTE,
                'Question 5 is an article for a sports website: a headline, a clear position on the statement, evidence from experience, and the other side answered.',
                'Question 6 is a letter to a younger friend: set out and addressed as a letter, sympathetic and encouraging, with practical advice.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 12: science
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-p1-12',
    board: 'OCR',
    paperNumber: 1,
    title: 'Component 01: Communicating Information and Ideas',
    subtitle: 'English Language J351/01',
    code: 'J351/01',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p1-12-reading',
        title: 'Section A: Reading',
        description: `Read the two texts below, then answer all four questions. You are advised to spend about one hour on this section, about 12 minutes of it reading the texts.\n\nText 1: ${SCIENCE_SOURCE_A_REF}\nText 2: ${SCIENCE_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-12-q1',
            questionNumber: 1,
            questionText: `Look again at the first paragraph of Text 1, from "We are living through" to "The possibilities are extraordinary."\n\n(a) Give two possible uses of gene editing that the writer lists. [2]\n\n(b) How long, according to the writer, has it taken gene editing to move from laboratory curiosity to practical reality? [1]\n\n(c) What does the writer say about how much attention people are paying to this revolution? [1]`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Text 1:\n${SCIENCE_SOURCE_A}\n\nText 2:\n${SCIENCE_SOURCE_B}`,
            extractSource: `Text 1: ${SCIENCE_SOURCE_A_REF} | Text 2: ${SCIENCE_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': `(a) Crops that resist drought, and mosquitoes engineered so that they stop spreading malaria.\n(b) Less than a decade.\n(c) Almost nobody is paying attention.`,
            },
            markScheme: [
              '(a) 1 mark each, up to 2, for: crops that resist drought; mosquitoes engineered to stop spreading malaria; the possible elimination of inherited diseases.',
              '(b) 1 mark: less than a decade (accept less than ten years).',
              '(c) 1 mark: almost nobody is paying attention.',
              'Every answer must come from the first paragraph of Text 1.',
            ],
          },
          {
            id: 'ocr-p1-12-q2',
            questionNumber: 2,
            questionText: `What do the two writers suggest about the good that science can do for people?\n\nAnswer by linking the two texts, and back each point with evidence from both.`,
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: `Text 1:\n${SCIENCE_SOURCE_A}\n\nText 2:\n${SCIENCE_SOURCE_B}`,
            extractSource: `Text 1: ${SCIENCE_SOURCE_A_REF} | Text 2: ${SCIENCE_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 8-9': `Both writers believe that science can relieve suffering on a vast scale. The writer of Text 1 lists the hopes of gene editing, "Crops that resist drought. Mosquitoes engineered to stop spreading malaria.", and shares the scientists' hope of "a world where no child is born to suffer from conditions that we had the power to prevent". Huxley makes the same point through history: "for every victim slain by the plague, hundreds of mankind exist and find a fair share of happiness in the world, by the aid of the spinning jenny", and the steam pump makes possible "an amount of wealth" beside which the losses of the Great Fire are "but as an old song". Both also suggest that much of this good goes unnoticed. Text 1 opens by saying that "almost nobody is paying attention" to the revolution in gene editing, and Huxley says that natural knowledge creates "multitudes of more subtle contrivances, the praises of which do not happen to be sung". Both writers, finally, connect science's good with children: the hope in Text 1 that "no child is born to suffer", and Huxley's image of natural knowledge as a mother "knitting for her children". The difference is that Text 1 sets this hope beside fear, while Huxley expresses none.`,
            },
            markScheme: [
              ...MARK_LEVELS_Q2,
              'Links to credit: suffering relieved on a large scale (disease, drought and malaria in Text 1; plague and fire answered in Text 2); good that goes unnoticed ("almost nobody is paying attention"; contrivances whose "praises ... do not happen to be sung"); children in both (no child "born to suffer"; a mother "knitting for her children").',
            ],
          },
          {
            id: 'ocr-p1-12-q3',
            questionNumber: 3,
            questionText: `Look again at Text 2, the whole text.\n\nHow does Huxley use language and structure to persuade his audience of the value of natural knowledge?\n\nRefer closely to the words of the text, and use subject terminology to explain their effects.`,
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: SCIENCE_SOURCE_B,
            extractSource: SCIENCE_SOURCE_B_REF,
            modelAnswers: {
              'Grade 8-9': `Huxley's argument moves in two stages, and each paragraph raises the value of natural knowledge higher than the last.\n\nThe first paragraph answers the disasters of the past with the inventions that followed them. "It is very certain" opens with complete confidence, and the sentence is built as a contrast of scale: "for every victim slain by the plague, hundreds of mankind exist and find a fair share of happiness in the world, by the aid of the spinning jenny". The violent verb "slain" makes the plague an enemy, while the gentle phrase "a fair share of happiness" shows what science gives back. The second sentence repeats the pattern with the Great Fire. Even "at its worst" it "could not have burned the supply of coal", and coal worked "in the bowels of the earth" gives the steam pump's work a sense of depth and difficulty. The dismissive simile at the end, that the "millions lost in old London are but as an old song", shrinks a famous catastrophe to something trivial.\n\nThe second paragraph opens with a surprise. Having praised the spinning jenny and steam pump, Huxley calls them "after all, but toys, possessing an accidental value". This deliberate anticlimax makes the reader ask what could be greater, and he answers that natural knowledge "creates multitudes of more subtle contrivances, the praises of which do not happen to be sung". Praises not "sung" pick up the "old song" of the first paragraph, linking the two halves.\n\nThe heart of the passage is an extended simile. Natural knowledge, personified as "her", is like "a peasant woman as one sees in the Alps, striding ever upward, heavily burdened, and with mind bent only on her home; but yet, without effort and without thought, knitting for her children". "Striding ever upward" suggests progress, while "without effort and without thought" suggests that science's gifts come as a natural overflow of its work. The concession "Now stockings are good and comfortable things" admits the value of practical benefits before the final question undercuts it: "surely it would be short-sighted, to say the least of it, to depreciate this toiling mother as a mere stocking-machine—a mere provider of physical comforts?" The repetition of "mere" and the mechanical word "stocking-machine" make it seem ungrateful, even absurd, to value science only for what it makes. Ending on a question leaves the audience to supply the answer Huxley wants.`,
            },
            markScheme: [
              ...MARK_LEVELS_Q3,
              'Language to credit: the confident "It is very certain"; the contrast of "slain" with "a fair share of happiness"; the simile of the "old song"; the anticlimax of "but toys"; the personified "her" and the extended simile of the peasant mother; the repeated "mere" and "stocking-machine".',
              'Structure to credit: two stages, from material benefits to a higher value; the link between "old song" and praises not "sung"; the concession before the final rhetorical question; an ending that leaves the answer to the audience.',
            ],
          },
          {
            id: 'ocr-p1-12-q4',
            questionNumber: 4,
            questionText: `"Both writers are more excited about science than worried by it."\n\nDecide how far you agree with this view.\n\nIn your answer:\n• weigh up the writers' ideas on science, and how far the statement holds for each text\n• say how the texts affect you as a reader, and why\n• compare how each writer presents those ideas\n• quote from both texts to support your points.`,
            marks: 18,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: `Text 1:\n${SCIENCE_SOURCE_A}\n\nText 2:\n${SCIENCE_SOURCE_B}`,
            extractSource: `Text 1: ${SCIENCE_SOURCE_A_REF} | Text 2: ${SCIENCE_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 8-9': `I agree for Huxley, who shows no worry at all, but I disagree for the writer of Text 1, whose excitement is matched, and perhaps outweighed, by fear.\n\nHuxley's passage is a celebration. Science answers the plague and the fire: "for every victim slain by the plague, hundreds of mankind exist and find a fair share of happiness". He is so confident that he dismisses great inventions as "but toys", because natural knowledge offers even more, and his image of a mother "knitting for her children" presents science as generous and caring. There is no hint of danger in the passage; even its gifts are given "without effort and without thought". As a reader I find his enthusiasm infectious, but also, today, a little innocent, since the coal and the steam pump he praises have consequences he does not consider.\n\nThe writer of Text 1 begins in excitement too: this is "the greatest revolution in biological science since Darwin", and the possibilities "are extraordinary". But the next paragraph opens with a deliberate turn: "They are also terrifying." The questions of the third paragraph ("If we can eliminate genetic predispositions to depression, should we?") show serious moral worry about a society "divided not merely by wealth but by biology". The ending balances the two feelings openly: "I share their excitement. But I cannot shake the feeling" that we are "editing a text we have not yet fully learned to read". The final metaphor makes our ignorance the main point and leaves the reader uneasy. So excitement and worry are both strong, and the worry has the last word.\n\nThe writers' methods reflect this difference. Huxley speaks as a public lecturer with total assurance ("It is very certain"), using history, a contrast of numbers and an extended simile to raise his audience's opinion of science. The writer of Text 1 uses a journalist's fragments for the hopes ("Crops that resist drought."), rhetorical questions for the dangers, and a closing metaphor of a code "we only partially understand". Both, though, try to correct how their audience sees science. Huxley wants listeners to stop valuing knowledge only for "physical comforts", and the modern writer complains that "almost nobody is paying attention".\n\nOverall, the statement is true of Text 2 and only partly true of Text 1. Huxley, looking back two hundred years, can see only the good that science has done; the modern writer, looking forward, sees a technology whose consequences no one yet knows. Perhaps the difference is time itself: it is easier to be excited about discoveries whose results are already known.`,
            },
            markScheme: {
              'AO4, evaluation (12 marks)': [
                ...MARK_LEVELS_AO4,
                'In this paper: Text 2 celebrates science without any worry; Text 1 is excited ("I share their excitement") but ends on fear of "a code we only partially understand". Credit a verdict that differs between the texts.',
              ],
              'AO3, comparison (6 marks)': [
                ...MARK_LEVELS_AO3,
                "Methods to compare: a lecturer's assurance and an extended simile against a journalist's fragments, questions and closing metaphor; looking back on known results against looking forward to unknown ones.",
              ],
              Marking: ['The two grids are marked separately and the marks added, out of 18.'],
            },
          },
        ],
      },
      {
        id: 'ocr-p1-12-writing',
        title: 'Section B: Writing',
        description:
          'Answer ONE question: Question 5 or Question 6. You are advised to spend about one hour on this section, including time to plan and to check your work.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-12-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText: `Answer ONE of the following questions.\n\nQuestion 5\n"Scientists should be free to follow their research wherever it leads."\nWrite an article for a science magazine for young people in which you argue for or against this view.\nIn your article you could:\n• write about discoveries that have changed lives\n• consider the risks of some kinds of research\n• explain who, if anyone, should set limits.\n\nOR\n\nQuestion 6\nWrite a speech for a school prize-giving evening about why science matters to everyone, not only to scientists.\nIn your speech you could:\n• describe ways in which science shapes everyday life\n• explain how scientific thinking can help people\n• encourage your audience to stay curious.\n\nIn your answer you will be assessed on content and organisation (24 marks) and on technical accuracy (16 marks).`,
            marks: 40,
            suggestedTimeMinutes: 60,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Question 6, a speech for a prize-giving evening.\n\nGood evening, parents, teachers and fellow students.\n\nWhen I was asked to speak tonight about science, my first thought was that I am the wrong person. I am not going to be a scientist. I find chemistry difficult, and my physics teacher, who is sitting somewhere at the back, will confirm that I once set fire to a piece of paper I was supposed to be weighing. So I want to talk to the people in this hall who, like me, will never wear a lab coat. Science matters to us more than we think.\n\nStart with this evening. You travelled here in a car or a bus whose engine depends on centuries of discoveries about heat and metal. The lights above us exist because someone once wondered how electricity worked. Many of us are alive because of medicines that did not exist when our great-grandparents were born. In 1928 a scientist named Alexander Fleming noticed that a mould growing on one of his dishes had killed the bacteria around it. That chance observation led to penicillin, and to antibiotics that have saved millions of lives. None of us chose to depend on science. We simply do.\n\nBut science is not only a list of inventions. It is a way of thinking, and that way of thinking belongs to everyone. A scientist asks a question, collects evidence, tests an idea, and changes her mind when the evidence says she is wrong. Imagine if we all did that. Imagine if, before sharing a shocking story online, we asked where it came from. Imagine if, in an argument, we were willing to say: you have shown me the evidence, and I was mistaken. That is not a skill for laboratories. It is a skill for life.\n\nThere is a third reason, and it is the most important. Many of the decisions that will shape our future are scientific decisions. How should we produce our energy? Should we be allowed to edit the genes of crops, or of people? How do we feed a growing world without exhausting it? These questions will not be answered by scientists alone. They will be answered by voters, by parents, by people like us. If we do not understand the science, we will have to trust whoever shouts the loudest.\n\nSo to tonight's prize-winners: congratulations. You have worked hard, and some of you will go on to make discoveries we cannot yet imagine. To everyone else, I say this: do not leave science to them. Stay curious. Ask how things work. Ask how we know. The world needs scientists, but it also needs people who can understand them.\n\nThank you.`,
            },
            markScheme: {
              'AO5, content and organisation (24 marks)': MARK_LEVELS_AO5,
              'AO6, technical accuracy (16 marks)': MARK_LEVELS_AO6,
              'For these tasks': [
                MARK_WRITING_NOTE,
                'Question 5 is a magazine article for young readers: a clear view, examples explained simply, and the other side considered.',
                'Question 6 is a speech for an occasion: it should sound spoken, suit a mixed audience of parents, teachers and students, and end memorably.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 13: housing
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-p1-13',
    board: 'OCR',
    paperNumber: 1,
    title: 'Component 01: Communicating Information and Ideas',
    subtitle: 'English Language J351/01',
    code: 'J351/01',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p1-13-reading',
        title: 'Section A: Reading',
        description: `Read the two texts below, then answer all four questions. You are advised to spend about one hour on this section, about 12 minutes of it reading the texts.\n\nText 1: ${HOUSING_SOURCE_A_REF}\nText 2: ${HOUSING_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-13-q1',
            questionNumber: 1,
            questionText: `Look again at the first paragraph of Text 1, from "I moved seven times" to "close friends with the neighbours."\n\n(a) How many times did the writer move before turning eighteen? [1]\n\n(b) Give two things that, the writer says, happened each time the family had to move. [2]\n\n(c) What did the writer learn not to do? [1]`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Text 1:\n${HOUSING_SOURCE_A}\n\nText 2:\n${HOUSING_SOURCE_B}`,
            extractSource: `Text 1: ${HOUSING_SOURCE_A_REF} | Text 2: ${HOUSING_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': `(a) Seven times.\n(b) A letter came from the letting agent, and the family had to scramble to find somewhere affordable.\n(c) Make close friends with the neighbours.`,
            },
            markScheme: [
              '(a) 1 mark: seven.',
              "(b) 1 mark each, up to 2, for: a letter from the letting agent; a scramble to find somewhere affordable; packing boxes; the writer's mother pretending it was an adventure.",
              '(c) 1 mark: make close friends with the neighbours.',
              'Every answer must come from the first paragraph of Text 1.',
            ],
          },
          {
            id: 'ocr-p1-13-q2',
            questionNumber: 2,
            questionText: `What do the two writers show about the effects of bad housing on people's lives?\n\nAnswer by linking the two texts, and back each point with evidence from both.`,
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: `Text 1:\n${HOUSING_SOURCE_A}\n\nText 2:\n${HOUSING_SOURCE_B}`,
            extractSource: `Text 1: ${HOUSING_SOURCE_A_REF} | Text 2: ${HOUSING_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 8-9': `Both writers show bad housing damaging the health and daily lives of the people who live in it. The writer of Text 1 reports that children in "damp, overcrowded, temporary" homes are "more likely to suffer from respiratory illness, more likely to struggle at school"; Octavia Hill describes houses where "the damp crept up the outer walls", rain fell through the roof into "a pail", and the tenants had "to wash clothes, as well as to cook, eat, and sleep, in their small rooms". Both also show tenants at the mercy of those who own their homes. In Text 1 each move begins with "a letter from the letting agent", and a generation spends "a third of their income enriching landlords"; in Text 2 the former landlord answered a tenant's request by saying that "if he didn't like it" "he might leave". Finally, both show that how secure people are in their homes changes how they live. The writer of Text 1, after seven moves, "learned not to make close friends with the neighbours"; in Text 2 the best tenant, now "knowing that he will be retained if he behaves well", "often gives his spare time to making his room more comfortable".`,
            },
            markScheme: [
              ...MARK_LEVELS_Q2,
              'Links to credit: damp and overcrowding harming health in both; tenants at the mercy of agents and landlords ("a letter from the letting agent"; "he might leave"); secure homes and their absence (no close friends after seven moves in Text 1; a tenant who improves his room once he knows he "will be retained" in Text 2).',
            ],
          },
          {
            id: 'ocr-p1-13-q3',
            questionNumber: 3,
            questionText: `Look again at Text 2, the whole text.\n\nHow does Octavia Hill use language and structure to show the condition of the houses and to support her view of what must be done?\n\nRefer closely to the words of the text, and use subject terminology to explain their effects.`,
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: HOUSING_SOURCE_B,
            extractSource: HOUSING_SOURCE_B_REF,
            modelAnswers: {
              'Grade 8-9': `Hill's passage moves from a general principle to a detailed piece of evidence, and both its language and its structure are designed to make her case for "individual influence" hard to resist.\n\nThe first paragraph is formal and carefully reasoned. She begins with what "is now generally agreed", then introduces "another truth less dwelt upon", which presents her as someone adding something new to a debate. Her conviction is personal, "I feel most deeply", but her vocabulary is the language of management and discipline: "the disciplining of our immense poor population must be effected by individual influence". The contrast between "a mob of paupers and semi-paupers" and "a body of self-dependent workers" shows the change she believes is possible, though "mob" reveals the distance between the reformer and the poor. The paragraph ends by promising proof: "In support of this opinion I subjoin an account of what has been actually achieved". The word "actually" signals facts, not theory.\n\nThe second paragraph delivers them. It begins plainly, with short sentences such as "Six other houses were bought subsequently. All were crowded with inmates.", in a businesslike tone that makes what follows seem objective. Then comes a long catalogue of decay. Colons and semicolons link the details into a relentless list: "the plaster was dropping from the walls: on one staircase a pail was placed to catch the rain that fell through the roof". Each detail is precise and physical: the staircases "perfectly dark", the banisters "burnt as firewood by tenants", the grates "falling forward into the rooms". The reader is led through the building as if on a tour of inspection.\n\nBlame is placed through small phrases. The washhouse, "full of lumber belonging to the landlord", was "locked up", so the tenants had to do everything "in their small rooms", and the understatement "The state of the drainage was in keeping with everything else" implies that it was as bad as the rest without needing to describe it. The water-butt detail ends in a stark clause, "there was no water", after a long build-up.\n\nThe climax is the landlord's reply, which Hill sets in quotation marks: "if he didn't like it" "he might leave". Hearing his contempt in something close to his own words condemns him more effectively than any description could. Hill then ends on a contrast that proves her point. The same tenant, "by far the best tenant in the place", is "now with us", improving his room, "knowing that he will be retained if he behaves well". The structure moves from problem to solution, and the last image, of a man who now cares for his home, is her evidence that better management changes lives.`,
            },
            markScheme: [
              ...MARK_LEVELS_Q3,
              'Language to credit: the reasoned opening ("another truth less dwelt upon"); the vocabulary of discipline and the contrast of "a mob of paupers" with "a body of self-dependent workers"; the precise details of decay; the understatement about the drainage; the landlord\'s reply set in quotation marks.',
              "Structure to credit: principle, then evidence; short plain sentences, then a long catalogue linked by colons; the climax of the landlord's reply; an ending that turns from problem to solution.",
            ],
          },
          {
            id: 'ocr-p1-13-q4',
            questionNumber: 4,
            questionText: `"Both writers blame those in power, not the people living in bad housing, for the problems they describe."\n\nDecide how far you agree with this view.\n\nIn your answer:\n• weigh up the writers' ideas on housing, and how far the statement holds for each text\n• say how the texts affect you as a reader, and why\n• compare how each writer presents those ideas\n• quote from both texts to support your points.`,
            marks: 18,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: `Text 1:\n${HOUSING_SOURCE_A}\n\nText 2:\n${HOUSING_SOURCE_B}`,
            extractSource: `Text 1: ${HOUSING_SOURCE_A_REF} | Text 2: ${HOUSING_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 8-9': `I agree for Text 1, which blames politics firmly, but only partly for Text 2. Octavia Hill blames a careless landlord, but she also sees the poor as people in need of "disciplining", which the modern writer would never say.\n\nThe writer of Text 1 makes the blame clear in the second paragraph: "The housing crisis in this country is not a natural disaster. It is a political choice." The short, blunt sentences leave no room for doubt, and the evidence that follows, the Right to Buy scheme and housing stock that has "declined by over two million homes", points at government policy. Landlords are blamed too, since young people spend "a third of their income enriching landlords", and the writer mocks those who blame the young themselves: "if they just stopped buying coffee and avocados they could afford a deposit". The sarcasm shows that the writer rejects any suggestion that tenants are at fault. The personal opening, with a mother trying to pretend each move "was an adventure", makes me feel the unfairness before the statistics arrive.\n\nHill's view is more mixed. She clearly blames the former landlord. His washhouse was "full of lumber belonging to the landlord" and "locked up", and his reply to a reasonable request, "if he didn't like it" "he might leave", shows contempt. But she also records damage done by the tenants themselves: the banisters were "burnt as firewood by tenants". More strikingly, her solution is to change the poor, not the system. She speaks of "the disciplining of our immense poor population" and hopes to turn "a mob of paupers and semi-paupers into a body of self-dependent workers". The reward she offers her best tenant depends on his conduct: he will be retained "if he behaves well". To a modern reader this sounds patronising, although it comes from a genuine wish to help.\n\nThe writers' methods show their different targets. Text 1 combines personal experience with national figures and ends with a demand that housing be treated "as a right rather than a commodity". Hill writes as a manager reporting her results, with a detailed inspection of one court and a single success story. Text 1 speaks to "we" as citizens who must change politics; Hill speaks to readers who, like her, might manage houses and influence their tenants.\n\nOverall, the statement is true of Text 1, which puts the blame on political choices and landlords and defends tenants. It is only partly true of Text 2. Hill does blame a neglectful landlord, but she places the responsibility for improvement as much on the tenants' behaviour as on those in power, and the power she trusts is a good landlord's influence, not the government's.`,
            },
            markScheme: {
              'AO4, evaluation (12 marks)': [
                ...MARK_LEVELS_AO4,
                'In this paper: Text 1 calls the crisis "a political choice" and mocks blaming the young; Text 2 condemns the former landlord but also writes of "the disciplining of our immense poor population". Credit a verdict that differs between the texts.',
              ],
              'AO3, comparison (6 marks)': [
                ...MARK_LEVELS_AO3,
                "Methods to compare: a personal story and national figures against a manager's report of one court; sarcasm in Text 1 against understatement in Text 2; a call to treat housing as a right against a single success story.",
              ],
              Marking: ['The two grids are marked separately and the marks added, out of 18.'],
            },
          },
        ],
      },
      {
        id: 'ocr-p1-13-writing',
        title: 'Section B: Writing',
        description:
          'Answer ONE question: Question 5 or Question 6. You are advised to spend about one hour on this section, including time to plan and to check your work.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-13-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText: `Answer ONE of the following questions.\n\nQuestion 5\nWrite a letter to your local MP about the housing problems faced by young people and families in your area, and what you think should be done.\nIn your letter you could:\n• describe the problems you have seen or heard about\n• explain their effects on people's lives\n• suggest what the government or council could do.\n\nOR\n\nQuestion 6\n"Home is about people, not a place."\nWrite an article for a magazine in which you explore this idea, drawing on your own experience.\nIn your article you could:\n• describe what home means to you\n• consider what makes a house feel like a home\n• reflect on what people need from where they live.\n\nIn your answer you will be assessed on content and organisation (24 marks) and on technical accuracy (16 marks).`,
            marks: 40,
            suggestedTimeMinutes: 60,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Question 6, a magazine article.\n\nWhere is home?\n\nWhen people ask me where I am from, I never know what to say. I was born in Leeds, lived in Bristol until I was seven, spent two years in a flat above my uncle's shop in Leicester, and have lived in this town for the last five. I have had six bedrooms, four schools and more goodbyes than I can count. If home is a place, then I am not sure I have one. But I have never felt homeless, and I think I know why.\n\nHome, for me, has always been people. It is my mother humming while she unpacks the same chipped mugs in every new kitchen. It is my little brother insisting that his bed goes under the window, wherever the window is. It is the smell of my grandmother's cooking, which arrived in a different town each time but tasted exactly the same. The rooms changed. The people in them did not, and that was what made each one feel like ours.\n\nI do not want to pretend that places do not matter. Moving so often has cost me things. I have lost friends I meant to keep, and I have learned to hold back a little at the start of each new school, in case it does not last. There are children in this country who move far more often than I did, from one temporary room to another, and for them the lack of a settled place is not a question for a magazine but a daily worry. A secure home, a door you can lock, a garden where your height is marked on the fence: these things are precious, and everyone deserves them.\n\nBut a house, however secure, is not a home on its own. I have visited beautiful houses that felt cold because nobody in them talked to each other. And I have been welcomed into tiny flats that felt warmer than anywhere else, because someone was pleased to see me. What turns four walls into a home is not the walls. It is who waits behind them, and how they make you feel when you walk through the door.\n\nSo if you have moved recently, or are about to, here is what I have learned. Bring your people with you, in whatever way you can: a phone call on Sunday, a photograph by your bed, a recipe you cook together. Make new people part of your home as quickly as you dare, by saying yes to invitations and inviting others in return. And be patient with yourself. Feeling at home takes time, but it does come.\n\nHome is not where you are. It is who you are with. I have lived in four towns, and I have never lost it.`,
            },
            markScheme: {
              'AO5, content and organisation (24 marks)': MARK_LEVELS_AO5,
              'AO6, technical accuracy (16 marks)': MARK_LEVELS_AO6,
              'For these tasks': [
                MARK_WRITING_NOTE,
                'Question 5 is a formal letter to an MP: set out and addressed as a letter, respectful, with evidence of the problem and clear requests.',
                'Question 6 is a reflective magazine article: a title, a personal voice, an idea explored from more than one side, and a memorable ending.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 14: the arts
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-p1-14',
    board: 'OCR',
    paperNumber: 1,
    title: 'Component 01: Communicating Information and Ideas',
    subtitle: 'English Language J351/01',
    code: 'J351/01',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p1-14-reading',
        title: 'Section A: Reading',
        description: `Read the two texts below, then answer all four questions. You are advised to spend about one hour on this section, about 12 minutes of it reading the texts.\n\nText 1: ${ARTS_SOURCE_A_REF}\nText 2: ${ARTS_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-14-q1',
            questionNumber: 1,
            questionText: `Look again at the first paragraph of Text 1, from "When my local council announced" to "no longer afford."\n\n(a) By how much, according to the writer, was arts funding to be cut? [1]\n\n(b) Identify two ways in which the cultural sector responded. [2]\n\n(c) Explain, in your own words, what "everybody else" seemed to feel about art, according to the writer. [1]`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Text 1:\n${ARTS_SOURCE_A}\n\nText 2:\n${ARTS_SOURCE_B}`,
            extractSource: `Text 1: ${ARTS_SOURCE_A_REF} | Text 2: ${ARTS_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': `(a) By a further fifteen percent.\n(b) With outrage, and with open letters.\n(c) They seemed to think that art is an extra the country cannot pay for when money is short.`,
            },
            markScheme: [
              '(a) 1 mark: a further fifteen percent.',
              '(b) 1 mark each, up to 2, for: outrage; open letters; impassioned speeches about the value of the arts.',
              '(c) 1 mark, in the student\'s own words, for the idea that art is a luxury or extra that cannot be afforded in hard times, or that people hardly cared what happened to it (their "silence" and "shrug"). Copying "a luxury we can no longer afford" earns no mark.',
              'Every answer must come from the first paragraph of Text 1.',
            ],
          },
          {
            id: 'ocr-p1-14-q2',
            questionNumber: 2,
            questionText: `What do the two writers suggest is lost when a country does not make good use of art and artists?\n\nAnswer by linking the two texts, and back each point with evidence from both.`,
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: `Text 1:\n${ARTS_SOURCE_A}\n\nText 2:\n${ARTS_SOURCE_B}`,
            extractSource: `Text 1: ${ARTS_SOURCE_A_REF} | Text 2: ${ARTS_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 8-9': `Both writers believe that when a country neglects art, it throws away something precious that cannot be replaced. The writer of Text 1 sides with the speeches about "the irreplaceable value of the arts", arguing that a society without them "is not a society at all", and Ruskin argues that artistic talent is "a perfectly fixed quantity annually, not increasable by one grain": "You may lose it, or you may gather it". Both describe the loss in terms of money. Text 1 points out that the creative industries "contribute over £115 billion annually to the UK economy", so that cutting arts funding is "like burning your furniture to save on heating bills"; Ruskin compares talent to gold that must be found and refined, and calls its misuse "the dead loss of so much human energy". Both also see a loss to people themselves, beyond money. For the modern writer, the arts "make us human", and books showed a child on a council estate "that other lives were possible"; for Ruskin, a born painter who is not made a painter has "his own special gift" left "unemployed", and putting art to a mechanical use means "you destroy it at once". In each text the neglect is a choice: a council's cut, or a nation that lets its gold "lie loose in the ravine".`,
            },
            markScheme: [
              ...MARK_LEVELS_Q2,
              'Links to credit: something irreplaceable lost ("the irreplaceable value of the arts"; talent "not increasable by one grain"); loss counted in money in both ("£115 billion"; "dead loss"); a human loss beyond money ("make us human"; a "special gift" left "unemployed"); neglect as a choice in both.',
            ],
          },
          {
            id: 'ocr-p1-14-q3',
            questionNumber: 3,
            questionText: `Look again at Text 2, the whole text.\n\nHow does Ruskin use language and structure to present artistic talent as precious?\n\nRefer closely to the words of the text, and use subject terminology to explain their effects.`,
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: ARTS_SOURCE_B,
            extractSource: ARTS_SOURCE_B_REF,
            modelAnswers: {
              'Grade 8-9': `Ruskin's lecture is built like a lesson in economics, with a heading, a question and a principle, and the whole argument rests on one extended metaphor: artistic talent is gold.\n\nHe opens with a heading, "I. Discovery.", and a question, "How are we to get our men of genius", which he immediately restates in the language of production: "the greatest quantity of effective art-intellect". This sounds like a factory's concern, but he then imagines his audience's objection, "A wide question, you say", and narrows his aim to "the few principles which lie at the foundation of the matter". The conversational "you say" keeps his Manchester listeners involved.\n\nHis first principle is a sharp antithesis: "you have always to find your artist, not to make him". The comparison "you can't manufacture him, any more than you can manufacture gold" introduces the metaphor that controls everything that follows. The artist lies "nugget-fashion in the mountain-stream"; we may "dig him out", "refine him", make him "into current coin, or household plate", but "not one grain of him can you originally produce". The vocabulary of mining turns genius into a precious natural resource, and the repetition of "grain" stresses how fixed and small the supply is. The paragraph ends with a list of verbs, "sifting, melting, hammering, purifying—never creating", whose final word, set apart by a dash, delivers his point with force.\n\nThe second paragraph signposts a new idea, "And there is another thing notable about this artistical gold", and takes the metaphor in a new direction: gold is limited in use as well as quantity. Short, blunt statements, "You can't make knives of it, nor armour, nor railroads. The gold won't cut you, and it won't carry you", use plain words and contractions, so the warning sounds like common sense, and "put it to a mechanical use, and you destroy it at once" sets an action beside its consequence with stark simplicity.\n\nThe most provocative moment is aimed directly at his audience: "there may be two or three Leonardo da Vincis employed at this moment in your harbours and railroads". Speaking in a city of trade and industry, Ruskin suggests that his listeners may be wasting genius in their harbours and on their railways, and the verbs "oppressing and destroying" make that waste sound cruel. He ends by returning to the language of economics, "the dead loss of so much human energy", so that his argument for art is made in the terms his listeners understand best.`,
            },
            markScheme: [
              ...MARK_LEVELS_Q3,
              'Language to credit: the extended metaphor of gold, with the vocabulary of mining and coin; the antithesis "find your artist, not to make him"; the repetition of "grain"; the list of verbs ending "never creating"; the blunt short sentences; the provocative "Leonardo da Vincis"; "dead loss".',
              'Structure to credit: a lecture\'s heading, question and principle; the imagined objection ("you say"); the second paragraph signposted as a new idea; an ending that returns to economic language.',
            ],
          },
          {
            id: 'ocr-p1-14-q4',
            questionNumber: 4,
            questionText: `"In the end, both writers make the case for art in terms of money."\n\nDecide how far you agree with this view.\n\nIn your answer:\n• weigh up the writers' ideas on the value of art, and how far the statement holds for each text\n• say how the texts affect you as a reader, and why\n• compare how each writer presents those ideas\n• quote from both texts to support your points.`,
            marks: 18,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: `Text 1:\n${ARTS_SOURCE_A}\n\nText 2:\n${ARTS_SOURCE_B}`,
            extractSource: `Text 1: ${ARTS_SOURCE_A_REF} | Text 2: ${ARTS_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 8-9': `I disagree with this statement, although it is easy to see why someone might make it. Both writers use the language of money, but both use it to reach a point about human worth that money cannot measure.\n\nThe writer of Text 1 makes the economic case first, because that is the argument those who cut funding understand. Treating art as a luxury is "economically illiterate", since the creative industries bring in "over £115 billion annually", and every pound invested returns "an estimated five pounds". The simile of "burning your furniture to save on heating bills" makes the cut sound foolish in practical terms. But the writer then turns away from this deliberately: "the economic argument, powerful as it is, misses the deeper point. The arts are not valuable because they generate revenue. They are valuable because they make us human." The list of feelings the arts give us words for, "grief, joy, love, rage, wonder, despair", and the story of books that showed a child "that other lives were possible", make the real case. The final sentence even turns the language of money against itself: denying children art "because we cannot see its value on a spreadsheet" is "a failure not of economics but of imagination". As a reader, I find that ending the most persuasive part, because it is personal.\n\nRuskin's whole passage, by contrast, is written in the language of economics, and here the statement has more force. Talent is "gold", artists are made "into current coin", and wasting them is "the dead loss of so much human energy". His lecture is about the economics of art, so the framework is financial. But his gold is a strange kind of currency. It is "not increasable by one grain", it "won't cut you" and "won't carry you", and if you "put it to a mechanical use" you "destroy it at once". In other words, the value of art cannot be turned into anything else, which is exactly the opposite of money. His most striking image, "two or three Leonardo da Vincis employed at this moment in your harbours and railroads", warns that treating people purely as workers destroys what is best in them.\n\nThe writers' methods show this similarity beneath their differences. Text 1 moves from statistics to a personal story, from the economy to the self. Ruskin stays inside one extended metaphor but bends it until it carries a moral meaning. Both speak to their audience directly, Text 1 with "your furniture" and an inclusive "we", and Ruskin with "you" throughout, and both accuse their society of short-sightedness.\n\nOverall, the statement is true of the surface of both texts, especially Ruskin's, but not of their conclusions. Text 1 uses money to win the reader's attention and then rejects it as the measure of art. Ruskin uses money as his metaphor in order to show that artistic talent is a kind of wealth that markets cannot make, use or replace.`,
            },
            markScheme: {
              'AO4, evaluation (12 marks)': [
                ...MARK_LEVELS_AO4,
                'In this paper: Text 1 makes the economic case first but says "the economic argument ... misses the deeper point"; Text 2 is written entirely in the language of gold and coin, yet its gold "won\'t cut you" and is destroyed by "a mechanical use". Credit an answer that separates the language of money from the argument it serves.',
              ],
              'AO3, comparison (6 marks)': [
                ...MARK_LEVELS_AO3,
                'Methods to compare: statistics and a personal story against one extended metaphor; a simile about furniture against the image of gold; direct address in both; endings that turn economic language against itself.',
              ],
              Marking: ['The two grids are marked separately and the marks added, out of 18.'],
            },
          },
        ],
      },
      {
        id: 'ocr-p1-14-writing',
        title: 'Section B: Writing',
        description:
          'Answer ONE question: Question 5 or Question 6. You are advised to spend about one hour on this section, including time to plan and to check your work.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-14-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText: `Answer ONE of the following questions.\n\nQuestion 5\n"Every young person should take part in music, drama or art at school until they are sixteen."\nWrite an article for a magazine for parents in which you argue for or against this view.\nIn your article you could:\n• describe what the arts offer young people\n• consider the pressures on the school timetable\n• give parents advice.\n\nOR\n\nQuestion 6\nWrite a review, for a website for young people, of a book, film, exhibition or performance that changed the way you saw something.\nIn your review you could:\n• describe what you read or saw\n• explain how it affected you\n• persuade readers to experience it for themselves.\n\nIn your answer you will be assessed on content and organisation (24 marks) and on technical accuracy (16 marks).`,
            marks: 40,
            suggestedTimeMinutes: 60,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Question 5, an article for the view.\n\nWhy the arts belong in every timetable\n\nIn Year 9, I chose to drop music. I had never been good at it, the recorder had been a disaster, and I wanted more time for science. Two years later, I joined the school play because a friend begged me to help with the lighting. On the first night, standing in the dark at the back of the hall while two hundred people laughed at a scene we had rehearsed for weeks, I understood what I had been missing. I think every young person deserves to feel that, and I believe the arts should be part of every student's education until they are sixteen.\n\nThe first reason is simple: you cannot know what you love until you try it. Many people who now work as designers, actors, musicians and animators discovered their talent by accident, in a school lesson they had not chosen. If we let thirteen-year-olds drop the arts, we decide their futures before they have had the chance to find out what they can do. Some children have no piano at home, no theatre trips and no art materials. School may be the only place they ever meet these things.\n\nThe second reason is what the arts teach. Rehearsing a play teaches you to work in a team, to turn up on time and to keep going when things go wrong. Learning an instrument teaches patience, because no one plays well at first. Painting and design teach you to look closely and to solve problems that have no single right answer. Employers often say that they want people who can think creatively, communicate and work with others. The arts build exactly those skills.\n\nThe third reason is harder to measure, but it may matter most. The arts give young people a way of expressing what they feel. Growing up brings emotions that are difficult to put into words, and a song, a poem, a drawing or a scene can say what a conversation cannot. For some students, the art room at lunchtime is the one place in school where they feel they belong.\n\nI understand the objections. The timetable is crowded, and parents want their children to do well in the subjects that lead to good jobs. But this is not a choice between the arts and success. The arts help students to succeed, by giving them confidence, discipline and a reason to enjoy school.\n\nSo, parents, when your child comes home asking to drop art or music, ask them to wait. Encourage them to try the school play, the choir or the photography club. They may never become professionals. But they will become more confident, more curious and more themselves, and that is what an education is for.`,
            },
            markScheme: {
              'AO5, content and organisation (24 marks)': MARK_LEVELS_AO5,
              'AO6, technical accuracy (16 marks)': MARK_LEVELS_AO6,
              'For these tasks': [
                MARK_WRITING_NOTE,
                'Question 5 is an article for parents: a headline, a clear position, objections answered, and advice that respects adult readers.',
                'Question 6 is a review: it should say what the work is, judge it, explain its effect and persuade readers, in a voice that suits young people.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 15: leaving home for a new country
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-p1-15',
    board: 'OCR',
    paperNumber: 1,
    title: 'Component 01: Communicating Information and Ideas',
    subtitle: 'English Language J351/01',
    code: 'J351/01',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p1-15-reading',
        title: 'Section A: Reading',
        description: `Read the two texts below, then answer all four questions. You are advised to spend about one hour on this section, about 12 minutes of it reading the texts.\n\nText 1: ${IMMIGRATION_SOURCE_A_REF}\nText 2: ${IMMIGRATION_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-15-q1',
            questionNumber: 1,
            questionText: `Look again at the first paragraph of Text 1, from "My parents arrived" to "than I care to calculate."\n\n(a) In what year did the writer's parents arrive in Britain? [1]\n\n(b) Give two things that the writer's parents brought with them. [2]\n\n(c) What job does the writer's mother do? [1]`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Text 1:\n${IMMIGRATION_SOURCE_A}\n\nText 2:\n${IMMIGRATION_SOURCE_B}`,
            extractSource: `Text 1: ${IMMIGRATION_SOURCE_A_REF} | Text 2: ${IMMIGRATION_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': `(a) 1998.\n(b) Two suitcases and three hundred pounds.\n(c) She is a ward sister at the local hospital.`,
            },
            markScheme: [
              '(a) 1 mark: 1998.',
              '(b) 1 mark each, up to 2, for: two suitcases; three hundred pounds; a conviction (belief) that hard work would be rewarded.',
              '(c) 1 mark: a ward sister at the local hospital (accept a nurse in charge of a ward).',
              'Every answer must come from the first paragraph of Text 1.',
            ],
          },
          {
            id: 'ocr-p1-15-q2',
            questionNumber: 2,
            questionText: `What do the two writers show about people who move to start a new life in another country?\n\nAnswer by linking the two texts, and back each point with evidence from both.`,
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: `Text 1:\n${IMMIGRATION_SOURCE_A}\n\nText 2:\n${IMMIGRATION_SOURCE_B}`,
            extractSource: `Text 1: ${IMMIGRATION_SOURCE_A_REF} | Text 2: ${IMMIGRATION_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 8-9': `Both writers present people who move to a new country as capable, hopeful and admirable, against what others might expect. The writer of Text 1 describes parents who arrived "with two suitcases, three hundred pounds, and a conviction that Britain was a place where hard work would be rewarded": the father now runs "a small engineering firm that employs fourteen people", and the mother is "a ward sister". Dickens, surprised by what he sees, calls the emigrants "the pick and flower of England". Both show them calm and purposeful. Dickens's emigrants say "We shall come all right in a day or so", and "the universal cheerfulness was amazing"; the family in Text 1 has built steady lives over "Twenty-six years". Both texts also put families at the centre: Dickens watches a father and mother who "discussed family affairs as peaceably as if they were in perfect retirement", and the writer of Text 1 sets out a whole family's achievements. Finally, both writers set what they saw against mistaken expectations. Dickens found the emigrants a surprise, "to the rout and overthrow of all my expectations", and Text 1 complains that "the public conversation about immigration in this country has become so divorced from reality that basic facts need restating".`,
            },
            markScheme: [
              ...MARK_LEVELS_Q2,
              'Links to credit: newcomers as capable and hopeful (the family\'s achievements; "the pick and flower of England"); calm, cheerful purpose; families at the centre in both; reality set against mistaken expectations ("divorced from reality"; "the rout and overthrow of all my expectations").',
            ],
          },
          {
            id: 'ocr-p1-15-q3',
            questionNumber: 3,
            questionText: `Look again at Text 2, the whole text.\n\nHow does Dickens use language and structure to show how his view of the emigrants develops?\n\nRefer closely to the words of the text, and use subject terminology to explain their effects.`,
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: IMMIGRATION_SOURCE_B,
            extractSource: IMMIGRATION_SOURCE_B_REF,
            modelAnswers: {
              'Grade 8-9': `Dickens structures the passage so that the emigrants are seen as people before they are named, and that delayed naming is the key to its effect.\n\nIt begins in the middle of a conversation with the captain, which sets a puzzle at once: "A stranger would be puzzled to guess the right name for these people". The captain's unfinished question, "If you hadn't known, could you ever have supposed—?", breaks off at a dash, leaving the missing word to the reader's imagination. Dickens's answer, that he "should have said they were in their degree, the pick and flower of England", uses a metaphor of the finest blooms, and the short exchange "‘How many are they?’ ‘Eight hundred in round numbers.’" adds the scale.\n\nHe then takes us below. The description of between-decks is crowded and chaotic: families "swarmed in the dark", the confusion was "increased by the little preparations for dinner", and a long list joined by repeated "and", "chests and barrels and beams and unstowed cargo and ring-bolts and Emigrants", imitates his stumbling progress. Against this confusion the people are calm. A few children cry, "but otherwise the universal cheerfulness was amazing", and the quoted phrases, "‘We shall shake down by to-morrow.’ ‘We shall come all right in a day or so.’", repeat "We shall" to show a shared, quiet confidence.\n\nBack on deck, the exclamation "Surely, an extraordinary people in their power of self-abstraction!" marks his growing admiration, and a series of small portraits follows. Letter-writers write "calmly"; a boy does a sum "as if he were stone deaf"; a family's children make "a nest for themselves in a coil of rope", a metaphor that turns ship's tackle into a home. The comparisons "as if he were stone deaf" and "as peaceably as if they were in perfect retirement" stress how undisturbed they are by the bustle round them. The paragraph sums up in one plain sentence: "the most noticeable characteristic in the eight hundred as a mass, was their exemption from hurry".\n\nOnly in the final paragraph does Dickens name them, and he builds to it with a question, "Eight hundred what?", a joking quotation from Macbeth, "‘Geese, villain?’", and then capital letters: "EIGHT HUNDRED MORMONS". The capitals sound like a shout, and the reader, who has already admired these people, must now set that admiration against whatever they thought of Mormons. Dickens's self-mocking title, "Uncommercial Traveller for the firm of Human Interest Brothers", and the military metaphor "to the rout and overthrow of all my expectations" admit that his expectations were overturned, and "scrupulous exactness" insists that his account can be trusted.`,
            },
            markScheme: [
              ...MARK_LEVELS_Q3,
              'Language to credit: the metaphor "the pick and flower of England"; the crowded list joined by "and"; the repeated "We shall"; the comparisons "as if he were stone deaf" and "as peaceably as if they were in perfect retirement"; the "nest" in a "coil of rope"; the capitals of "EIGHT HUNDRED MORMONS"; the military metaphor of "rout and overthrow".',
              'Structure to credit: opening in the middle of a conversation; a puzzle set and left open; the movement from between-decks to the deck; small portraits summed up in one plain sentence; the delayed naming at the very end.',
            ],
          },
          {
            id: 'ocr-p1-15-q4',
            questionNumber: 4,
            questionText: `"Both writers want to correct mistaken ideas about people who move to a new country."\n\nDecide how far you agree with this view.\n\nIn your answer:\n• weigh up the writers' ideas on people who move to a new country, and how far the statement holds for each text\n• say how the texts affect you as a reader, and why\n• compare how each writer presents those ideas\n• quote from both texts to support your points.`,
            marks: 18,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: `Text 1:\n${IMMIGRATION_SOURCE_A}\n\nText 2:\n${IMMIGRATION_SOURCE_B}`,
            extractSource: `Text 1: ${IMMIGRATION_SOURCE_A_REF} | Text 2: ${IMMIGRATION_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 8-9': `I agree with this statement for both texts, but the writers correct different mistakes, and in different ways. The writer of Text 1 sets out to correct the public; Dickens corrects himself, and lets the reader learn from his surprise.\n\nThe writer of Text 1 states the purpose openly: "the public conversation about immigration in this country has become so divorced from reality that basic facts need restating". The article then answers claims one by one. "Net migration is not", it says, and puts the headline phrase "out of control" in inverted commas to reject it; it adds that immigrants "come to work, to study, or to join family members", and that the NHS "would collapse within weeks without immigrant workers". The personal opening supports this, with parents who arrived with "two suitcases, three hundred pounds" and built a firm, a nursing career and a family of professionals. Yet the writer also insists that a person's worth should not depend on usefulness, calling that idea "morally grotesque", and concedes that "legitimate concerns about infrastructure and public services" exist. As a reader I find the balance of personal story and argument persuasive, although the article gives no sources for its facts, which a doubtful reader might question.\n\nDickens does not argue at all. He goes aboard to see "what Eight hundred Latter-day Saints were like", and records what he finds. The correction happens through structure. The reader meets the emigrants first as cheerful families, calm letter-writers and a boy at his sum, "the pick and flower of England" in Dickens's own words, and only at the end does Dickens name them: "EIGHT HUNDRED MORMONS". The delay makes the reader judge them by their behaviour before their label. His final admission, "to the rout and overthrow of all my expectations", shows that the mistaken idea was his own, and "scrupulous exactness" asks us to trust his eyes over any rumour.\n\nSo the writers' methods are almost opposite. Text 1 is an argument in the present tense, with facts, rebuttals and a final call for a debate that "must start from facts". Dickens's piece is reporting, in which dialogue, description and gentle humour, such as the joke from Macbeth, "‘Geese, villain?’", do the persuading. Both, though, rely on close observation of real people, the writer's own family and the families on the ship, to show newcomers as ordinary, hopeful and admirable.\n\nOverall, the statement is true of both. Text 1 corrects the false ideas of headlines directly; Text 2 corrects the expectations of its writer, and by sharing his surprise invites readers to question their own. Dickens's method is quieter, but it may be just as effective, because it lets readers discover their mistake for themselves.`,
            },
            markScheme: {
              'AO4, evaluation (12 marks)': [
                ...MARK_LEVELS_AO4,
                'In this paper: Text 1 sets out to correct the public ("basic facts need restating") while conceding "legitimate concerns"; Text 2 records how Dickens\'s own expectations were overturned. Credit an answer that sees the different mistakes each corrects.',
              ],
              'AO3, comparison (6 marks)': [
                ...MARK_LEVELS_AO3,
                'Methods to compare: argument with facts and rebuttals against reporting with dialogue and description; a family story in Text 1 against small portraits in Text 2; the delayed naming in Text 2; humour in Text 2.',
              ],
              Marking: ['The two grids are marked separately and the marks added, out of 18.'],
            },
          },
        ],
      },
      {
        id: 'ocr-p1-15-writing',
        title: 'Section B: Writing',
        description:
          'Answer ONE question: Question 5 or Question 6. You are advised to spend about one hour on this section, including time to plan and to check your work.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-15-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText: `Answer ONE of the following questions.\n\nQuestion 5\nWrite an article for a magazine for young people about the challenges and rewards of starting a new life in a new place.\nIn your article you could:\n• describe what it can feel like to arrive somewhere new\n• explain what helps people to settle\n• suggest how others can make newcomers welcome.\n\nOR\n\nQuestion 6\n"Everyone should spend a year living somewhere completely different from home."\nWrite a speech for a school debate in which you argue for or against this statement.\nIn your speech you could:\n• explain what living somewhere different can teach a person\n• consider the difficulties and costs\n• answer the views of those who disagree with you.\n\nIn your answer you will be assessed on content and organisation (24 marks) and on technical accuracy (16 marks).`,
            marks: 40,
            suggestedTimeMinutes: 60,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Question 6, a speech for the statement.\n\nGood afternoon, everyone.\n\nClose your eyes for a moment and picture the street you live on. You could probably walk it blindfold: the cracked paving stone outside number twelve, the dog that barks at the gate, the shop that sells the same crisps it sold when you were five. Now imagine waking up tomorrow in a street where you do not know a single person, cannot read the signs and have no idea where to buy bread. Frightening? Of course. That is exactly why I believe that everyone should spend a year living somewhere completely different from home.\n\nMy first reason is that nothing teaches you more about yourself. At home, we are surrounded by people who already know who we are. Somewhere new, nobody does. You have to decide, every day, who you want to be. My cousin spent a year working on a farm in New Zealand after she left school. She went as the shy one in our family. She came back able to talk to anyone, cook for twenty people and mend a fence, and she still says that year taught her more than any classroom.\n\nMy second reason is that it teaches you about other people. It is easy to hold opinions about places and people you have never met. It is much harder once you have shared their food, struggled with their language and been helped by them when you were lost. A year away turns strangers into neighbours. In a world where so many arguments begin with fear of people we do not know, that change matters.\n\nMy third reason is practical. Employers and universities value people who can adapt, solve problems and cope with the unexpected, and a year somewhere different proves that you can. It need not mean another continent, either. Moving from a city to a village, or from one end of the country to the other, can be just as eye-opening.\n\nThe other side will say that this is only for the rich. They are right that moving costs money, and I will not pretend otherwise. But there are schemes that help young people to volunteer, work or study in other places, and there are jobs in other parts of this country that come with somewhere to live. The question is not whether we can afford to do it. It is whether we can afford not to, in a world that will ask us to understand people unlike ourselves.\n\nSo I urge you to support this motion. Home will still be there when you come back. But you will see it, and yourself, with new eyes.\n\nThank you.`,
            },
            markScheme: {
              'AO5, content and organisation (24 marks)': MARK_LEVELS_AO5,
              'AO6, technical accuracy (16 marks)': MARK_LEVELS_AO6,
              'For these tasks': [
                MARK_WRITING_NOTE,
                'Question 5 is a magazine article for young readers: a title, a lively and supportive voice, experience described and practical advice.',
                'Question 6 is a speech for a debate: it should sound spoken, take a clear side, answer the other side and end with an appeal.',
              ],
            },
          },
        ],
      },
    ],
  },
]
