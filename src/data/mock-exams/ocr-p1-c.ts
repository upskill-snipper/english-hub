// @ts-nocheck
import type { MockExamPaper } from './types'

/**
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
const SPORT_SOURCE_A = `There is something profoundly dishonest about the way we talk about sport in this country. We dress it up in the language of aspiration and togetherness - "inspiring a generation", "bringing the nation together" - while ignoring the uncomfortable reality that elite sport is, at its core, an industry built on exclusion. For every child who makes it to a national squad, thousands are discarded along the way, their confidence shattered by a system that measures human worth in hundredths of a second.

I have spent twenty years coaching young athletes, and I have watched the system consume them. At fourteen, they are told they are special. At sixteen, they are dropped from programmes with a form letter and a suggestion to "keep enjoying sport recreationally". The psychological damage this inflicts is rarely discussed. We prefer the medal ceremonies, the tearful interviews, the narrative of triumph against adversity. We do not talk about the eighteen-year-old gymnast who cannot eat without anxiety, or the swimmer who has not had a single weekend free since she was eleven.

The funding model makes this worse. Since the introduction of National Lottery funding in 1997, British sport has operated on a ruthless "no compromise" approach: money flows to sports and athletes most likely to win medals. This has been spectacularly successful in terms of Olympic performance. But success measured purely in gold medals tells us nothing about whether sport is actually improving the health and wellbeing of the population. Grassroots sports facilities continue to close at an alarming rate. School playing fields are sold to developers. Community swimming pools operate on skeleton budgets.

We need an honest conversation about what sport is for. If the answer is simply "winning", then let us at least be truthful about the human cost. If the answer is something broader - health, community, joy - then we must fundamentally rethink how we fund and organise it.`

const SPORT_SOURCE_A_REF =
  'Specially written for this practice paper: an opinion article, "The Medal Factory", under the invented byline Rachel Okonkwo'

// Project Gutenberg #17437 (the 1874 Isbister edition), the one paragraph
// beginning "It is proposed, just now", cut by script, never retyped.
const SPORT_SOURCE_B = `It is proposed, just now, to assimilate the education of girls more and more to that of boys. If that means that girls are merely to learn more lessons, and to study what their brothers are taught, in addition to what their mothers were taught; then it is to be hoped, at least by physiologists and patriots, that the scheme will sink into that limbo whither, in a free and tolerably rational country, all imperfect and ill-considered schemes are sure to gravitate. But if the proposal be a bona fide one: then it must be borne in mind that in the public schools of England, and in all private schools, I presume, which take their tone from them, cricket and football are more or less compulsory, being considered integral parts of an Englishman's education; and that they are likely to remain so, in spite of all reclamations: because masters and boys alike know that games do not, in the long run, interfere with a boy's work; that the same boy will very often excel in both; that the games keep him in health for his work; that the spirit with which he takes to his games when in the lower school, is a fair test of the spirit with which he will take to his work when he rises into the higher school; and that nothing is worse for a boy than to fall into that loafing, tuck-shop-haunting set, who neither play hard nor work hard, and are usually extravagant, and often vicious. Moreover, they know well that games conduce, not merely to physical, but to moral health; that in the playing-field boys acquire virtues which no books can give them; not merely daring and endurance, but, better still, temper, self-restraint, fairness, honour, unenvious approbation of another's success, and all that "give and take" of life which stand a man in such good stead when he goes forth into the world, and without which, indeed, his success is always maimed and partial.`

const SPORT_SOURCE_B_REF =
  'Charles Kingsley, "Nausicaa in London: or, The Lower Education of Woman", from Health and Education (London: W. Isbister, 1874), on the proposal to educate girls as boys are educated'

// Exam 12 - Science & Discovery
const SCIENCE_SOURCE_A = `We are living through the greatest revolution in biological science since Darwin, and almost nobody is paying attention. The development of CRISPR gene-editing technology - which allows scientists to alter DNA with unprecedented precision - has moved from laboratory curiosity to practical reality in less than a decade. Crops that resist drought. Mosquitoes engineered to stop spreading malaria. The potential elimination of inherited diseases that have caused suffering for millennia. The possibilities are extraordinary.

They are also terrifying. Last year, a research team in China announced it had edited the genes of human embryos - not to cure disease, but to enhance cognitive function. The scientific community reacted with horror. Regulatory bodies issued stern statements. Governments held emergency meetings. And then, as is the way with these things, the news cycle moved on and we forgot about it.

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

The housing crisis in this country is not a natural disaster. It is a political choice. Since the Right to Buy scheme was introduced in 1980, local authority housing stock has declined by over two million homes. Private rents have risen by 60% in the last decade alone. A generation of young people - my generation - has been locked out of home ownership entirely, condemned to spend a third of their income enriching landlords while being told that if they just stopped buying coffee and avocados they could afford a deposit.

The human cost is staggering. Research by Shelter found that over a million children in England are living in unsuitable housing: damp, overcrowded, temporary. These children are more likely to suffer from respiratory illness, more likely to struggle at school, more likely to experience mental health problems. We know this. The evidence has been available for decades. And yet the construction of social housing remains at historically low levels.

Housing is not a luxury. It is the foundation upon which everything else is built - education, health, employment, family life. Until we treat it as a right rather than a commodity, nothing will change.`

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
const ARTS_SOURCE_A = `When the government announced last year that arts funding would be cut by a further fifteen percent, the response from the cultural sector was predictable: outrage, open letters, impassioned speeches about the irreplaceable value of the arts. What was more revealing was the response from everybody else. There was, overwhelmingly, silence. A collective shrug. The sense that, in times of economic difficulty, art is a luxury we can no longer afford.

This attitude is not merely wrong. It is economically illiterate. The creative industries contribute over £115 billion annually to the UK economy - more than the automotive, aerospace, and life sciences sectors combined. For every pound of public money invested in the arts, an estimated five pounds is generated in economic return. To cut arts funding in the name of fiscal responsibility is like burning your furniture to save on heating bills: it produces a brief warmth followed by a much longer cold.

But the economic argument, powerful as it is, misses the deeper point. The arts are not valuable because they generate revenue. They are valuable because they make us human. A society without music, without theatre, without literature, without the visual arts, is not a society at all - it is merely a collection of individuals engaged in the business of survival. The arts give us a shared language for experiences that would otherwise remain private and incommunicable: grief, joy, love, rage, wonder, despair.

I grew up on a council estate in Salford. The local library saved my life - not metaphorically, but literally. The books I found there showed me that the world was larger than the four streets I knew, that other lives were possible, that imagination was not a weakness but a form of power. Every child deserves that discovery. To deny it to them because we cannot see its value on a spreadsheet is a failure not of economics but of imagination.`

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

I mention this not because I believe immigrants should have to justify their existence through economic contribution - the idea that a human being's right to live in safety and dignity depends on their productivity is morally grotesque - but because the public conversation about immigration in this country has become so divorced from reality that basic facts need restating.

Net migration is not "out of control". The overwhelming majority of immigrants come to work, to study, or to join family members already here. They are younger, on average, than the existing population, which means they contribute more in taxes than they consume in public services. The NHS would collapse within weeks without immigrant workers. The care sector, the hospitality industry, agriculture, construction - these are not abstract economic categories. They are the essential services upon which all of our daily lives depend.

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

// ─── Exam Papers ─────────────────────────────────────────────────────────────

export const ocrP1C: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 11 - Sport & Competition
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
        description: `Read the two source texts carefully. Then answer all the questions in this section.\n\nSource A: ${SPORT_SOURCE_A_REF}\nSource B: ${SPORT_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-11-q1',
            questionNumber: 1,
            questionText:
              'Read Source A. Identify four problems the writer describes with the current elite sport system in Britain.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: SPORT_SOURCE_A,
            extractSource: SPORT_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                '1. Thousands of children are discarded from sport programmes. 2. Young athletes suffer psychological damage from being dropped. 3. Funding only goes to sports likely to win medals. 4. Grassroots sports facilities continue to close.',
            },
            markScheme: ['1 mark per valid point identified from the text, maximum 4 marks'],
          },
          {
            id: 'ocr-p1-11-q2',
            questionNumber: 2,
            questionText:
              'Read Source A. How does the writer use evidence and examples to support her argument that the sport funding model is flawed? Use evidence from the text in your answer.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: SPORT_SOURCE_A,
            extractSource: SPORT_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses specific examples like the "eighteen-year-old gymnast who cannot eat without anxiety" and the "swimmer who has not had a single weekend free since she was eleven" to show the human cost. She also uses the date 1997 and the phrase "no compromise" to reference the actual funding model. These examples make her argument more convincing because they show real consequences.',
              'Grade 6-7':
                'Okonkwo builds a systematic case by layering different types of evidence. She begins with anecdotal experience - "I have spent twenty years coaching" - to establish authority, then moves to institutional critique with the specific reference to National Lottery funding since 1997. The juxtaposition of "spectacularly successful in terms of Olympic performance" with the decline of grassroots facilities creates a damning contrast. The unnamed athletes - the gymnast, the swimmer - function as representative figures, their anonymity suggesting these are not isolated cases but systemic consequences.',
              'Grade 8-9':
                'The writer deploys evidence strategically, moving from the personal to the systemic to create an argument of escalating force. Her twenty years of coaching experience is offered not as mere anecdote but as a foundation of authority from which to critique institutional practice. The specific date of 1997 and the quoted phrase "no compromise" serve a dual function: they lend factual weight while the scare quotes around the funding philosophy subtly reframe institutional language as an indictment. The contrast between the unnamed athletes of the second paragraph - "the eighteen-year-old gymnast", "the swimmer" - and the named policy of the third is rhetorically masterful: their anonymity transforms individual suffering into a systemic pattern. The paragraph structure itself mirrors the argument: the optimistic language of sport ("inspiring a generation") is systematically dismantled as each new piece of evidence reveals the gap between rhetoric and reality.',
            },
            markScheme: [
              'Identifies specific evidence and examples used in the text',
              'Explains how the evidence supports the argument',
              'Analyses the effect of the evidence on the reader',
              'Top band: detailed, perceptive analysis of how evidence is deployed strategically',
            ],
          },
          {
            id: 'ocr-p1-11-q3',
            questionNumber: 3,
            questionText:
              "Read Source A. How does the writer use language and structure to present her views on elite sport in Britain?\n\nAnalyse the effects of the writer's choices.",
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: SPORT_SOURCE_A,
            extractSource: SPORT_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses strong language like "profoundly dishonest" and "ruthless" to show her disapproval. She structures the article by first talking about how sport is presented positively, then revealing the negative reality. In the last paragraph she sets out two possible answers, each beginning "If the answer is", to make the reader think about what sport should be for. The list of closing facilities in the third paragraph makes the problem seem widespread.',
              'Grade 6-7':
                'Okonkwo opens with a direct accusation - "profoundly dishonest" - that immediately positions the reader as complicit in a deception. The language of public relations ("inspiring a generation", "bringing the nation together") is placed in quotation marks, framing official discourse as a veneer concealing exploitation. Structurally, the piece moves from broad critique to specific human examples to policy analysis and finally to a call for honesty, creating an argumentative arc that leaves the reader no room for comfortable neutrality. The tricolon "Grassroots sports facilities continue to close... School playing fields are sold... Community swimming pools operate on skeleton budgets" uses the rule of three to emphasise systemic decline. The conditional structure of the final paragraph - "If the answer is... then let us" - forces readers to confront an uncomfortable binary.',
              'Grade 8-9':
                'The writer\'s opening gambit - "There is something profoundly dishonest" - establishes a tone of moral authority that pervades the entire piece. The strategic deployment of official language in quotation marks ("inspiring a generation", "no compromise") functions as a form of rhetorical appropriation: the establishment\'s own words are turned against it, becoming evidence of its hypocrisy. Structurally, the piece enacts the very exposure it argues for: the public-facing narrative of triumph is presented first, then systematically stripped away to reveal the human wreckage beneath. The unnamed athletes are rendered through the language of pathology - "cannot eat without anxiety", "has not had a single weekend free" - reframing sporting achievement as a form of institutional harm. The descending scale of the third paragraph\'s tricolon (from "Grassroots sports facilities" to "School playing fields" to "Community swimming pools") traces the impact from the general to the local, making the abstract personal. The conditional framing of the conclusion is particularly effective: by presenting two possible purposes for sport and spelling out the implications of each, Okonkwo avoids didacticism while making her preferred conclusion inescapable.',
            },
            markScheme: [
              'Analyses specific language choices and their effects',
              'Analyses structural choices and their effects',
              'Uses well-chosen textual references to support analysis',
              'Explores the relationship between language, structure, and meaning',
              'Top band: perceptive, detailed analysis showing conceptualised understanding',
            ],
          },
          {
            id: 'ocr-p1-11-q4',
            questionNumber: 4,
            questionText:
              'Read both sources. Compare how the two writers convey their different perspectives on the value of sport.\n\nIn your answer, you should:\n• compare their different perspectives and attitudes\n• compare the methods they use to convey those perspectives\n• support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${SPORT_SOURCE_A}\n\nSource B:\n${SPORT_SOURCE_B}`,
            extractSource: `${SPORT_SOURCE_A_REF} / ${SPORT_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers think sport matters, but they see it very differently. Source A is critical of elite sport and says it damages young people, while Source B is positive and says games are an important part of education. Source A uses examples of athletes being harmed, such as "the eighteen-year-old gymnast who cannot eat without anxiety", while Source B lists the good qualities games teach: "temper, self-restraint, fairness, honour". Source A focuses on medals and funding, while Kingsley, writing in Victorian England, focuses on schools and argues that games "do not, in the long run, interfere with a boy\'s work". Both writers care about health, but Source A thinks the modern system has forgotten it.',
              'Grade 6-7':
                'The two writers disagree less about what sport is for than about whether it is achieving it. Okonkwo writes from inside a system she has watched for "twenty years", and her language of accusation ("profoundly dishonest", "ruthless") is that of someone whose faith in sport\'s public story has been broken by what she has seen. Kingsley, writing in Victorian England, has no such doubts: games are "integral parts of an Englishman\'s education", and he presents the case as settled fact, something "masters and boys alike know". Their methods reflect these positions. Okonkwo builds her case from specific, unnamed young people, the gymnast and the swimmer, whose suffering stands for a whole system; Kingsley argues in generalisations, piling up the virtues games teach in a long list ("temper, self-restraint, fairness, honour, unenvious approbation of another\'s success") that makes the case feel overwhelming. Both value sport for health and character rather than for winning, and Kingsley\'s praise of "unenvious approbation of another\'s success" names exactly what Okonkwo\'s medal-driven system, which "measures human worth in hundredths of a second", has lost.',
              'Grade 8-9':
                'These texts, written about a hundred and fifty years apart, share a belief that the real value of sport lies in what it does for the people who play it, and they differ over whether that value survives. Kingsley makes his case for games in the course of an argument about girls\' education: if girls are really to be educated as boys are, he reminds the reader, then it must be remembered that in the boys\' schools cricket and football are "more or less compulsory". His confidence is institutional. He speaks for "masters and boys alike", presents their knowledge as beyond dispute, and moves through a chain of "that" clauses (games do not "interfere with a boy\'s work", "the same boy will very often excel in both", "the games keep him in health for his work") which sound like a list of proven findings. Okonkwo, by contrast, writes against an institution: the "no compromise" funding model, whose own words she puts in quotation marks so that they read as evidence against it. Where Kingsley\'s list of virtues accumulates benefits, ending with the "\'give and take\' of life" without which a man\'s success is "maimed and partial", Okonkwo\'s lists accumulate losses: facilities that "continue to close", playing fields "sold to developers", pools on "skeleton budgets". The sharpest contrast is in their attitude to success. Kingsley prizes "unenvious approbation of another\'s success", success as something shared; Okonkwo describes a system that "measures human worth in hundredths of a second", where one child\'s success is built on thousands being "discarded". Her closing call for "an honest conversation about what sport is for", with its hope that the answer might be "health, community, joy", is in effect a call to return to something close to Kingsley\'s view, though without his assumption that the model for everyone is "the public schools of England".',
            },
            markScheme: [
              'Compares perspectives and attitudes from both sources',
              'Compares methods used by both writers',
              'Uses well-chosen references from both texts',
              'Analyses how context shapes different perspectives',
              'Top band: perceptive, detailed comparison with conceptualised understanding of both texts',
            ],
          },
        ],
      },
      {
        id: 'ocr-p1-11-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 45 minutes on this section, including planning time.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'ocr-p1-11-q5',
            questionNumber: 5,
            questionText:
              '"Competitive sport does more harm than good."\n\nWrite an article for a broadsheet newspaper in which you argue for or against this statement.\n\n(32 marks for content and organisation / 8 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear, purposeful article with: a sustained argument for or against; some persuasive techniques such as rhetorical questions and emotive language; generally accurate spelling and punctuation; appropriate use of paragraphs.',
              'Grade 6-7':
                'A well-crafted article with: sophisticated use of rhetorical techniques including counter-argument; appropriate register for a broadsheet audience; a compelling structure that builds to a strong conclusion; consistent technical accuracy with ambitious vocabulary.',
              'Grade 8-9':
                'An outstanding article with: a compelling and nuanced argument that acknowledges complexity; a distinctive authorial voice appropriate to the broadsheet form; structural sophistication including effective use of topic sentences and paragraph transitions; technical virtuosity with varied sentence forms and precise vocabulary.',
            },
            markScheme: [
              'Content & Organisation (32 marks): Purpose - argue persuasively; Audience - broadsheet readers; Form - article with headline; Structure - coherent argument with introduction, development, conclusion',
              'Technical Accuracy (8 marks): Sentence demarcation; Standard English; Spelling; Punctuation; Range of sentence forms and vocabulary',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 12 - Science & Discovery
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
        description: `Read the two source texts carefully. Then answer all the questions in this section.\n\nSource A: ${SCIENCE_SOURCE_A_REF}\nSource B: ${SCIENCE_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-12-q1',
            questionNumber: 1,
            questionText:
              'Read Source A. Identify four potential consequences of gene-editing technology that the writer describes.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: SCIENCE_SOURCE_A,
            extractSource: SCIENCE_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                '1. Crops that resist drought. 2. Mosquitoes engineered to stop spreading malaria. 3. The elimination of inherited diseases. 4. A society divided by biology as well as wealth.',
            },
            markScheme: ['1 mark per valid consequence identified from the text, maximum 4 marks'],
          },
          {
            id: 'ocr-p1-12-q2',
            questionNumber: 2,
            questionText:
              'Read Source A. How does the writer present a balanced view while still conveying concern about gene-editing technology? Use evidence from the text in your answer.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: SCIENCE_SOURCE_A,
            extractSource: SCIENCE_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer shows balance by listing positive things gene editing can do - "Crops that resist drought", "elimination of inherited diseases" - but then says they are "also terrifying". He shares the scientists\' optimism but says he "cannot shake the feeling" that it is dangerous. This makes the reader take his concerns more seriously because he is being fair.',
              'Grade 6-7':
                'Whitworth constructs a carefully balanced argument that lends greater weight to his concerns precisely because he acknowledges the technology\'s promise. The opening paragraph\'s list of benefits - drought-resistant crops, malaria prevention, disease elimination - is syntactically enthusiastic, with short verbless sentences building momentum. The short sentence that opens the second paragraph, "They are also terrifying", creates a structural volta that reframes everything that came before. The writer repeatedly positions himself as sympathetic to scientific progress - "I share their excitement" - before deploying the adversative conjunction "But" to pivot to his real concern. The extended metaphor of "editing a text we have not yet fully learned to read" captures his anxiety with elegant precision.',
              'Grade 8-9':
                'The writer employs a sophisticated rhetorical strategy of concessive argumentation, where each acknowledgement of gene editing\'s potential serves as a platform for deeper concern. The opening paragraph\'s breathless catalogue of benefits - the asyndetic list of "Crops that resist drought. Mosquitoes engineered to stop spreading malaria. The potential elimination of inherited diseases" - mimics the pace of scientific enthusiasm before the devastating pivot: "They are also terrifying." This structural pattern (concession followed by counter-argument) recurs throughout, creating a rhythm that enacts the writer\'s central thesis: that optimism and anxiety are inseparable responses to transformative technology. The series of rhetorical questions in paragraph three - "If we can eliminate genetic predispositions to depression, should we?" - performs balance syntactically while making the questions themselves feel unanswerable. The concluding metaphor of editing an incompletely understood text is masterfully judged: it respects the science while questioning the scientists, using their own language of "code" and "editing" to articulate the limits of their understanding.',
            },
            markScheme: [
              'Identifies how the writer presents both positive and negative perspectives',
              'Explains the effect of balanced presentation on the reader',
              'Analyses specific techniques used to convey concern within a balanced framework',
              'Top band: perceptive analysis of how balance itself becomes a persuasive strategy',
            ],
          },
          {
            id: 'ocr-p1-12-q3',
            questionNumber: 3,
            questionText:
              "Read Source A. How does the writer use language and structure to engage the reader on the topic of gene-editing technology?\n\nAnalyse the effects of the writer's choices.",
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: SCIENCE_SOURCE_A,
            extractSource: SCIENCE_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses dramatic language like "greatest revolution" and "terrifying" to grab the reader\'s attention. The structure moves from positive to negative to make the reader reconsider. Rhetorical questions in paragraph three engage the reader directly. The final metaphor about "editing a text" is memorable and makes the idea easier to understand.',
              'Grade 6-7':
                'Whitworth opens with a bold claim - "the greatest revolution in biological science since Darwin" - that immediately establishes the stakes, while the counterpoint "almost nobody is paying attention" creates urgency and positions the reader as potentially complicit in dangerous indifference. The structure follows a carefully managed emotional trajectory: wonder, alarm, philosophical questioning, and finally ambivalent resolution. The shift from the impersonal third paragraph (rhetorical questions about society) to the personal final paragraph ("I share their excitement... I cannot shake the feeling") creates intimacy, drawing the reader into the writer\'s own uncertainty. The extended metaphor of genetic "code" as "text" bridges the scientific and the literary, making complex biotechnology accessible through humanistic analogy.',
              'Grade 8-9':
                'The writer\'s opening claim positions gene editing within a Darwinian framework that simultaneously elevates and threatens: if this is a revolution on the scale of evolution itself, the implications are both thrilling and terrifying. The accusation that "almost nobody is paying attention" creates an immediate contract with the reader - you are now paying attention, and therefore implicated in what follows. Structurally, the piece traces an epistemological journey from certainty to doubt: the confident declaratives of paragraph one ("The possibilities are extraordinary") give way to the interrogatives of paragraph three, and finally to the hedged, subordinate-clause-heavy syntax of the conclusion ("I cannot shake the feeling that we are editing a text we have not yet fully learned to read"). This syntactic deceleration enacts the very caution the writer advocates. The rhetorical questions function not as devices seeking agreement but as genuine philosophical provocations - "Who decides which traits are \'defects\' to be corrected and which are variations to be celebrated?" - that expose the value judgements embedded in supposedly neutral scientific language. The concluding metaphor operates on multiple levels: "editing a text" invokes both the CRISPR mechanism and the humanistic tradition of textual interpretation, suggesting that genetic science requires not just technical skill but hermeneutic wisdom.',
            },
            markScheme: [
              'Analyses specific language choices and their effects on the reader',
              'Analyses structural choices and their effects',
              'Uses well-chosen textual references to support analysis',
              "Explores the relationship between language, structure, and the writer's purpose",
              'Top band: perceptive, detailed analysis showing conceptualised understanding',
            ],
          },
          {
            id: 'ocr-p1-12-q4',
            questionNumber: 4,
            questionText:
              'Read both sources. Compare how the two writers convey their different perspectives on scientific progress.\n\nIn your answer, you should:\n• compare their different perspectives and attitudes\n• compare the methods they use to convey those perspectives\n• support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${SCIENCE_SOURCE_A}\n\nSource B:\n${SCIENCE_SOURCE_B}`,
            extractSource: `${SCIENCE_SOURCE_A_REF} / ${SCIENCE_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers see science as powerful, but they feel differently about it. Source A is worried about where gene editing could lead, while Source B is confident that science has made life far better. Source A uses modern examples like CRISPR and "Mosquitoes engineered to stop spreading malaria", while Source B uses older inventions like "the spinning jenny" and "the steam pump". Source A says the new technology is "also terrifying", but Huxley argues that the machines science has produced are only "toys" compared with its real gifts. Both writers use imagery: Source A compares genetics to "a text we have not yet fully learned to read", and Source B compares natural knowledge to a mother "knitting for her children".',
              'Grade 6-7':
                'The two writers look at scientific progress from opposite sides of its power. Whitworth writes from within a moment of rapid change, and his perspective is divided: he shares the scientists\' "excitement" but "cannot shake the feeling" that we are changing what we do not understand. Huxley, speaking in 1866, has no such doubt. He measures the gains of science against the plague and the great fire of the 1660s and finds that "for every victim slain by the plague, hundreds of mankind exist and find a fair share of happiness" thanks to a single invention. Their methods reflect these attitudes. Whitworth lists benefits in short, clipped sentences ("Crops that resist drought.") and then undercuts them with "They are also terrifying"; Huxley builds long, balanced sentences whose confidence is part of his argument. Both writers turn to metaphor to explain what science is. For Whitworth, the genome is a text we have not learned to read, an image of our ignorance; for Huxley, natural knowledge is a peasant mother "striding ever upward, heavily burdened", an image of generosity. Where Whitworth worries that science gives us more power than we understand, Huxley worries that we value it too little, as "a mere provider of physical comforts".',
              'Grade 8-9':
                'Separated by almost a hundred and sixty years, these texts reach opposite conclusions about scientific progress, and their methods follow from those conclusions. Whitworth\'s concern is that capability has outrun understanding: his rhetorical questions ("If we can eliminate genetic predispositions to depression, should we?") are left unanswered, and his closing metaphor of "editing a text we have not yet fully learned to read" makes caution the only responsible stance. Huxley\'s lay sermon sets out to overturn a different complaint, that science is merely useful. He first grants its material value on the grandest scale, setting the spinning jenny against the plague and the steam pump against the fire, and dismissing the "millions lost in old London" as "but as an old song". Then he turns, and calls those very inventions "but toys, possessing an accidental value". The extended simile of the Alpine peasant woman who knits for her children "without effort and without thought" is carefully judged: the stockings are real comforts, and he does not deny them, but the mother is more than her knitting, and his closing rhetorical question makes it seem "short-sighted" to think otherwise. The contrast between the writers\' questions is revealing. Whitworth\'s questions open doubts that he does not close; Huxley\'s single question expects only one answer. Whitworth fears that science is a power we do not yet know how to use; Huxley insists that its greatest gifts are the ones that cannot be turned into "instruments for creating wealth". Together they frame the choice the writing task asks for: whether knowledge is to be valued for what it gives us, or feared for what it lets us do.',
            },
            markScheme: [
              'Compares perspectives and attitudes from both sources',
              'Compares methods used by both writers',
              'Uses well-chosen references from both texts',
              'Analyses how context shapes different perspectives',
              'Top band: perceptive, detailed comparison with conceptualised understanding of both texts',
            ],
          },
        ],
      },
      {
        id: 'ocr-p1-12-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 45 minutes on this section, including planning time.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'ocr-p1-12-q5',
            questionNumber: 5,
            questionText:
              '"Scientific progress should never be limited by fear."\n\nWrite a speech to be delivered at a school debate in which you argue for or against this statement.\n\n(32 marks for content and organisation / 8 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear speech with: a sustained argument; some rhetorical techniques such as direct address and repetition; generally accurate spelling and punctuation; appropriate use of paragraphs.',
              'Grade 6-7':
                'A well-crafted speech with: effective use of rhetorical devices including anaphora and counter-argument; appropriate register for a debate; a compelling structure that builds to a persuasive conclusion; consistent technical accuracy with varied sentence forms.',
              'Grade 8-9':
                'An outstanding speech with: a nuanced argument that engages with complexity; a distinctive and authoritative voice; structural sophistication that mirrors the rhythms of spoken rhetoric; technical virtuosity with ambitious vocabulary and varied syntax.',
            },
            markScheme: [
              'Content & Organisation (32 marks): Purpose - argue persuasively; Audience - school debate; Form - speech with appropriate conventions; Structure - coherent argument with clear progression',
              'Technical Accuracy (8 marks): Sentence demarcation; Standard English; Spelling; Punctuation; Range of sentence forms and vocabulary',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 13 - Housing
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
        description: `Read the two source texts carefully. Then answer all the questions in this section.\n\nSource A: ${HOUSING_SOURCE_A_REF}\nSource B: ${HOUSING_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-13-q1',
            questionNumber: 1,
            questionText:
              'Read Source A. Identify four effects of the housing crisis that the writer describes.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: HOUSING_SOURCE_A,
            extractSource: HOUSING_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                '1. Families are forced to move frequently - the writer moved seven times before eighteen. 2. Young people spend a third of their income on rent. 3. Young people are locked out of home ownership. 4. Over a million children are living in unsuitable housing with health consequences.',
            },
            markScheme: ['1 mark per valid effect identified from the text, maximum 4 marks'],
          },
          {
            id: 'ocr-p1-13-q2',
            questionNumber: 2,
            questionText:
              'Read Source A. How does the writer use personal experience to strengthen her argument about the housing crisis? Use evidence from the text in your answer.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: HOUSING_SOURCE_A,
            extractSource: HOUSING_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer starts by telling us about her childhood, moving seven times before she was eighteen. This makes the reader feel sympathy for her. She includes her mother saying "Think of it as a fresh start" which shows how the family tried to cope. She says she "learned not to make close friends" which shows how it affected her socially. This personal experience makes the statistics later feel more real.',
              'Grade 6-7':
                'Patel deploys personal narrative as a rhetorical framing device, opening with the specific detail of "seven times before my eighteenth birthday" to transform an abstract policy issue into lived experience. The mother\'s dialogue - "Think of it as a fresh start" - is devastating in its quiet irony: the reader understands the desperate optimism behind the words even as the writer exposes their futility through the accompanying image of "taping shut a box of kitchen things". The structural choice to move from personal anecdote to national statistics ("two million homes", "60%") creates a powerful inductive argument: if this is one family\'s experience, the data shows it is millions of families\' experiences. The understatement of "I learned not to make close friends" is more emotionally effective than any overt expression of pain.',
              'Grade 8-9':
                'The writer\'s personal narrative operates on multiple rhetorical levels simultaneously. At the surface level, the childhood experience of frequent moves creates pathos and establishes experiential authority. But the opening paragraph is also carefully constructed to pre-empt dismissal: the sentence fragment "Not because my parents were restless or adventurous" addresses the implied counter-argument that housing instability is a lifestyle choice. The mother\'s direct speech - "Think of it as a fresh start" - functions as a microcosm of the broader rhetorical pattern: the official narrative (positive spin) is juxtaposed with material reality (taping boxes). The devastating restraint of "I learned not to make close friends with the neighbours" achieves more than any explicit statement of suffering could, enlisting the reader\'s imagination to fill in the emotional weight. Structurally, the transition from personal to political - from childhood memory to Right to Buy statistics - enacts the argument\'s central thesis: that housing policy is not an abstraction but the accumulated weight of millions of individual experiences of displacement and insecurity.',
            },
            markScheme: [
              'Identifies how personal experience is used in the text',
              'Explains the effect of personal narrative on the reader',
              'Analyses how personal experience interacts with other forms of evidence',
              'Top band: perceptive analysis of the strategic function of personal narrative within the broader argument',
            ],
          },
          {
            id: 'ocr-p1-13-q3',
            questionNumber: 3,
            questionText:
              "Read Source A. How does the writer use language and structure to argue that housing should be treated as a fundamental right?\n\nAnalyse the effects of the writer's choices.",
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: HOUSING_SOURCE_A,
            extractSource: HOUSING_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses emotive language like "condemned" and "locked out" to make the reader feel the unfairness. She includes statistics such as "60%" and "a million children" to make her argument convincing. The structure moves from personal experience to facts to a strong conclusion. The final sentence - "Until we treat it as a right rather than a commodity, nothing will change" - is blunt and powerful.',
              'Grade 6-7':
                'Patel constructs her argument through a carefully escalating structure that moves from the personal to the statistical to the philosophical. The language of the opening paragraph is deliberately understated - "that is what happens when you rent" - using the flat declarative to normalise suffering in a way that makes it more shocking. The second paragraph shifts register dramatically, deploying the language of political critique: "not a natural disaster" but "a political choice" establishes a binary that assigns blame. The statistics are deployed not as neutral data but as accusations, with the temporal markers ("Since the Right to Buy scheme was introduced in 1980", "in the last decade") implying deliberate political failure. The sardonic reference to "coffee and avocados" acknowledges and dismantles a common dismissal. The concluding paragraph\'s distinction between "right" and "commodity" crystallises the entire argument into a single opposition, and the list of what housing enables - "education, health, employment, family life" - positions housing as foundational rather than additional.',
              'Grade 8-9':
                'The writer\'s rhetorical strategy is one of controlled escalation, with each paragraph raising the stakes while tightening the argument\'s logical grip. The opening\'s deceptively simple narrative voice - "Each time, the pattern was the same" - creates a structural mimicry of the very cycle it describes. The shift in paragraph two to politicised discourse is signalled by the emphatic negation "is not a natural disaster" - a construction that implies the housing crisis has been naturalised in public consciousness and must be actively denaturalised. The parenthetical "my generation" performs an interesting rhetorical manoeuvre: it simultaneously personalises the systemic and collectivises the personal, refusing to let the reader maintain comfortable distance. The language choices in paragraph three escalate from material deprivation ("damp, overcrowded, temporary") to human consequence: "respiratory illness", "struggle at school", "mental health problems" - a list that moves from the body to learning to the mind, mirroring housing\'s corrosive effect on whole lives. The final paragraph\'s chiastic structure - first what housing is not and then what it is ("not a luxury", "the foundation"), then the same pair reversed ("a right rather than a commodity") - resolves the entire argument into an elegant philosophical proposition. The concluding sentence\'s use of "Until... nothing will change" creates a temporal ultimatum that positions the reader as either part of the solution or complicit in its absence.',
            },
            markScheme: [
              'Analyses specific language choices and their effects',
              'Analyses structural choices and their effects on the reader',
              'Uses well-chosen textual references to support analysis',
              'Explores the relationship between language, structure, and argument',
              'Top band: perceptive, detailed analysis showing conceptualised understanding',
            ],
          },
          {
            id: 'ocr-p1-13-q4',
            questionNumber: 4,
            questionText:
              'Read both sources. Compare how the two writers convey their different perspectives on the housing crisis.\n\nIn your answer, you should:\n• compare their different perspectives and attitudes\n• compare the methods they use to convey those perspectives\n• support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${HOUSING_SOURCE_A}\n\nSource B:\n${HOUSING_SOURCE_B}`,
            extractSource: `${HOUSING_SOURCE_A_REF} / ${HOUSING_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers think that the homes of poorer people are unacceptable, but they have different ideas about how to put this right. Source A blames government policy and says housing should be treated "as a right rather than a commodity". Source B is by Octavia Hill, who managed houses for poor tenants, and she thinks the answer is better management by people like herself. Source A uses personal experience ("I moved seven times") and statistics, while Source B uses a long, detailed description of the houses she took over, where "the plaster was dropping from the walls". Both writers criticise landlords: Source A says young people spend their income "enriching landlords", and Source B describes a landlord who told a tenant that he "might leave". Source A ends with a demand for change, while Source B ends by showing how one tenant\'s life has changed under her management.',
              'Grade 6-7':
                'Patel and Hill agree that the homes of the poor are a disgrace, but they disagree about who is responsible and what should change. Patel writes as someone who grew up inside the problem, and she calls it "a political choice"; her answer is for society to treat housing "as a right rather than a commodity". Hill writes as the manager of her tenants\' houses, and her answer is personal rather than political: "the disciplining of our immense poor population must be effected by individual influence", exercised by people who take on "the oversight and management" of the houses. Their methods reflect these positions. Patel moves from her own childhood to national statistics, so that one family stands for millions. Hill moves the other way, from a general principle to a single court in Marylebone, which she offers as proof ("In support of this opinion I subjoin an account"). Her description is a catalogue of neglect, each sentence adding another failure: plaster "dropping from the walls", banisters "burnt as firewood", a leaking water-butt that left anyone who had not filled a jug with "no water". Both writers expose the insecurity of tenants. Patel\'s "letter from the letting agent" and Hill\'s landlord, who told a tenant that "if he didn\'t like it" he "might leave", show the same power over people\'s homes; but Hill\'s own answer, that a good tenant "will be retained if he behaves well", leaves that power in the landlord\'s hands.',
              'Grade 8-9':
                'These texts, written more than a hundred and fifty years apart, both make comfortable readers look at homes they would rather not see, but they locate the solution in very different places, and that difference shapes how they write. Patel\'s argument is political and rests on rights. Her opening narrative earns her authority, her insistence that the crisis "is not a natural disaster" but "a political choice" assigns responsibility, and her conclusion asks the reader to treat housing "as a right rather than a commodity". Hill\'s argument is moral and managerial. Her first paragraph states a thesis in the voice of a reformer sure of her ground ("I feel most deeply"), and its central image is of transformation: individual influence can change the poor "from a mob of paupers and semi-paupers into a body of self-dependent workers". To a modern reader the word "disciplining" is revealing. Where Patel sees tenants as citizens denied a right, Hill sees people to be improved, and her authority comes not from sharing their experience but from having charge of their houses ("I was put in possession of three houses"). Her second paragraph is almost entirely evidence, an inventory of decay whose flat, factual sentences ("The state of the drainage was in keeping with everything else") let the details carry the outrage. The comparison is sharpest where both writers show the power a landlord holds. Patel describes a system in which a letter can uproot a family; Hill reports a landlord\'s contempt ("if he didn\'t like it" he "might leave") and offers her own management as the cure. Yet her closing picture of the best tenant in the place, secure only because he "will be retained if he behaves well", shows that under her system a tenant\'s home still depends on the landlord\'s judgement. Patel would recognise in that the insecurity she grew up with; Hill presents it as the reward of good conduct.',
            },
            markScheme: [
              'Compares perspectives and attitudes from both sources',
              'Compares methods used by both writers',
              'Uses well-chosen references from both texts',
              'Analyses how context shapes different perspectives',
              'Top band: perceptive, detailed comparison with conceptualised understanding of both texts',
            ],
          },
        ],
      },
      {
        id: 'ocr-p1-13-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 45 minutes on this section, including planning time.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'ocr-p1-13-q5',
            questionNumber: 5,
            questionText:
              '"Everyone has the right to a safe and affordable home."\n\nWrite a letter to your local MP in which you argue that more needs to be done to address the housing crisis.\n\n(32 marks for content and organisation / 8 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear letter with: appropriate formal register; a sustained argument with some supporting evidence; some persuasive techniques; generally accurate spelling, punctuation, and grammar.',
              'Grade 6-7':
                'A well-crafted letter with: consistently appropriate formal register; sophisticated rhetorical techniques including counter-argument; effective use of evidence and examples; a compelling structure that balances passion with reason; consistent technical accuracy.',
              'Grade 8-9':
                'An outstanding letter with: a commanding and authoritative voice; a nuanced argument that anticipates and addresses objections; strategic deployment of evidence, personal experience, and rhetorical technique; structural sophistication; technical virtuosity with ambitious vocabulary and varied syntax.',
            },
            markScheme: [
              'Content & Organisation (32 marks): Purpose - argue persuasively; Audience - MP (formal); Form - letter with appropriate conventions; Structure - coherent argument with clear demands',
              'Technical Accuracy (8 marks): Sentence demarcation; Standard English; Spelling; Punctuation; Range of sentence forms and vocabulary',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 14 - Arts & Culture
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
        description: `Read the two source texts carefully. Then answer all the questions in this section.\n\nSource A: ${ARTS_SOURCE_A_REF}\nSource B: ${ARTS_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-14-q1',
            questionNumber: 1,
            questionText:
              'Read Source A. Identify four reasons the writer gives for why the arts should be funded and valued.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: ARTS_SOURCE_A,
            extractSource: ARTS_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                '1. The creative industries contribute over £115 billion annually to the UK economy. 2. For every pound invested, five pounds is generated in return. 3. The arts make us human and give us a shared language for experiences. 4. The arts can transform lives - the writer says the library "saved my life".',
            },
            markScheme: ['1 mark per valid reason identified from the text, maximum 4 marks'],
          },
          {
            id: 'ocr-p1-14-q2',
            questionNumber: 2,
            questionText:
              'Read Source A. How does the writer use both economic and personal arguments to defend arts funding? Use evidence from the text in your answer.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: ARTS_SOURCE_A,
            extractSource: ARTS_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses statistics like "£115 billion" and "five pounds" return for every pound to make an economic argument. He then says the economic argument "misses the deeper point" and talks about how the library on his council estate "saved my life". This combination of facts and personal experience makes the argument convincing because it appeals to both logic and emotion.',
              'Grade 6-7':
                'Oyelaran constructs a deliberately layered argument that deploys economic evidence strategically before transcending it. The statistics - "£115 billion annually", "more than the automotive, aerospace, and life sciences sectors combined" - are chosen not merely for their factual weight but for their capacity to reframe the debate: comparing arts revenue to industries usually taken more seriously challenges the assumption that culture is economically trivial. The simile "like burning your furniture to save on heating bills" translates economic argument into vivid domestic imagery. However, the pivotal sentence "the economic argument, powerful as it is, misses the deeper point" performs a crucial structural turn: having won the pragmatic argument, the writer explicitly sets it aside as insufficient. The personal narrative that follows - growing up on a council estate, the transformative library - gains additional rhetorical force because it arrives after economic rationality has been established and found wanting. The claim that the library "saved my life - not metaphorically, but literally" inverts the expected cliché, demanding the reader take the statement at face value.',
              'Grade 8-9':
                'The writer\'s dual-track argument is architecturally sophisticated: the economic case is constructed first as a concession to pragmatism before being deliberately superseded by the existential case, creating a rhetorical hierarchy where material value is acknowledged but subordinated to human value. The economic evidence is deployed with forensic precision - the specific figure of £115 billion, the comparative framing against automotive and aerospace sectors, the five-to-one return ratio - but each statistic is immediately contextualised through accessible analogy (the furniture-burning simile) that prevents the argument from becoming abstract. The transitional sentence "the economic argument, powerful as it is, misses the deeper point" is a masterpiece of concessive rhetoric: the parenthetical acknowledgement of power simultaneously validates and diminishes the economic case, clearing space for the personal narrative that follows. The council estate childhood functions as both testimony and reproach - "Every child deserves that discovery" universalises a specific experience while the final sentence\'s juxtaposition of "spreadsheet" and "imagination" crystallises the entire argument into a single opposition between instrumental and intrinsic value. The careful escalation from statistics to philosophy to autobiography creates an argument that is simultaneously irrefutable at every level: economically sound, philosophically compelling, and personally undeniable.',
            },
            markScheme: [
              'Identifies both economic and personal arguments in the text',
              'Explains how each type of argument affects the reader',
              'Analyses the relationship between the two types of argument',
              'Top band: perceptive analysis of how the layered argument creates cumulative persuasive force',
            ],
          },
          {
            id: 'ocr-p1-14-q3',
            questionNumber: 3,
            questionText:
              "Read Source A. How does the writer use language and structure to persuade the reader that arts funding cuts are wrong?\n\nAnalyse the effects of the writer's choices.",
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: ARTS_SOURCE_A,
            extractSource: ARTS_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer starts by describing the government\'s funding cuts and the public\'s silence, which creates a sense of urgency. He uses strong language like "economically illiterate" and "merely a collection of individuals" to show his disapproval. The structure builds from the problem to the economic argument to the personal story. The ending is powerful because it comes from his own life experience.',
              'Grade 6-7':
                'Oyelaran opens by juxtaposing the cultural sector\'s outrage with the public\'s silence, and it is the silence that carries the greater rhetorical weight - indifference is presented as more damaging than hostility. The phrase "economically illiterate" is strategically provocative, turning the accusation of impracticality back on those who make it. The furniture-burning simile is both accessible and devastating, reducing the government\'s position to absurdity through domestic analogy. Structurally, the piece\'s movement from public response to economic data to philosophical argument to personal narrative creates an ascending scale of persuasive intimacy, drawing the reader progressively closer. The negative definition in paragraph three - "A society without music, without theatre, without literature" - uses anaphoric repetition to create a cumulative sense of deprivation. The final paragraph\'s shift to first person ("I grew up") introduces vulnerability into what has been a confident, assertive voice, making the conclusion both unexpected and deeply affecting.',
              'Grade 8-9':
                'The writer\'s rhetorical architecture is built on a principle of progressive revelation: each paragraph strips away a layer of assumption to expose a deeper truth. The opening\'s focus on silence rather than protest is a sophisticated gambit - by making public indifference the primary problem, Oyelaran positions his entire article as an act of resistance against that silence. The language escalates through carefully chosen registers: the economic vocabulary of paragraph two ("contribute", "invested", "generated") gives way to the philosophical vocabulary of paragraph three ("human", "shared language", "incommunicable") and finally to the intimate vocabulary of paragraph four ("council estate", "saved my life", "four streets"). This register shift enacts the very argument being made: that economic language is necessary but insufficient, that human experience exceeds quantification. The simile of burning furniture performs double duty: it ridicules the government\'s position while also, through its domestic setting, anticipating the personal narrative to come. The anaphoric negation of paragraph three - "without music, without theatre, without literature, without the visual arts" - creates a rhetorical void that the reader is compelled to fill with their own valued cultural experiences, making the argument personal even before the autobiographical turn. The qualification "not metaphorically, but literally" is structurally crucial: by refusing the expected figurative reading, the writer demands that the reader confront arts access as a matter of life and death, elevating the stakes to their highest possible level.',
            },
            markScheme: [
              'Analyses specific language choices and their persuasive effects',
              'Analyses structural choices and their contribution to the argument',
              'Uses well-chosen textual references to support analysis',
              'Explores the relationship between language, structure, and persuasive purpose',
              'Top band: perceptive, detailed analysis showing conceptualised understanding',
            ],
          },
          {
            id: 'ocr-p1-14-q4',
            questionNumber: 4,
            questionText:
              'Read both sources. Compare how the two writers convey their different perspectives on the value of the arts.\n\nIn your answer, you should:\n• compare their different perspectives and attitudes\n• compare the methods they use to convey those perspectives\n• support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${ARTS_SOURCE_A}\n\nSource B:\n${ARTS_SOURCE_B}`,
            extractSource: `${ARTS_SOURCE_A_REF} / ${ARTS_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers believe the arts are valuable, but they argue this in different ways. Source A uses economic statistics and personal experience, while Source B uses an extended metaphor, comparing artistic talent to gold. Source A is responding to government cuts, while Ruskin is telling his audience in Manchester how to "find your artist". Both writers think something precious can be wasted: Oyelaran says that to deny children the discovery he made in his library would be "a failure not of economics but of imagination", and Ruskin tells his audience of the nation\'s talent: "You may lose it, or you may gather it". Both use the language of money, but Source A uses real figures like "£115 billion", while Source B compares talent to gold that can be made into "current coin, or household plate".',
              'Grade 6-7':
                'Both writers defend the arts against people who judge them only by money, and, interestingly, both borrow the language of money to do it. Oyelaran uses real economic data, "£115 billion annually", to beat his opponents on their own ground before arguing that "the economic argument, powerful as it is, misses the deeper point". Ruskin, lecturing in Manchester in 1857, turns economics into metaphor: artistic talent is like gold, which you cannot "manufacture" but can only "find" and "refine". Their perspectives differ in where they place the value of art. For Oyelaran it lies in what art does for everyone, giving us "a shared language for experiences"; for Ruskin it lies in the rare gift of the born artist, "a perfectly fixed quantity annually, not increasable by one grain". Yet they meet in their fear of waste. Oyelaran\'s library showed him "that the world was larger than the four streets I knew", and he insists that every child deserves that discovery; Ruskin imagines "two or three Leonardo da Vincis employed at this moment in your harbours and railroads", where, he tells his audience, "you are only oppressing and destroying" their gift. Both writers fear that what is best in people will be lost if no one looks for it.',
              'Grade 8-9':
                'These texts, almost a hundred and seventy years apart, both speak for the arts to people who measure value in money: Oyelaran to a public that sees art as "a luxury we can no longer afford", Ruskin to an audience in industrial Manchester, whose hidden talent he pictures at work in "your harbours and railroads". The most striking thing about them is that both answer in the language of money before turning it against those who use it. Oyelaran meets his opponents on the ground of economics and wins there ("£115 billion", "five pounds" returned for every pound) before declaring that the economic argument "misses the deeper point". Ruskin concedes nothing; he simply takes over the vocabulary of wealth. The artist is gold to be dug out "nugget-fashion in the mountain-stream" and made "into current coin, or household plate"; each nation receives "a perfectly fixed quantity" of this gold, and the only question is whether to "lose it" or "gather it". The extended metaphor lets him speak to an industrial city in its own terms while telling it something uncomfortable: the one thing it cannot do with this gold is turn it into machinery. "You can\'t make knives of it, nor armour, nor railroads", and if you put it "to a mechanical use", you "destroy it at once". Here the writers differ most. Oyelaran values art because it is shared: it gives everyone "a shared language" for grief and joy, and it changed the life of one boy from a council estate. Ruskin values the rare gift of the born artist, and his concern is for the gift more than for its audience. Yet both texts arrive at waste. Oyelaran calls it "a failure not of economics but of imagination" to deny children that discovery because its value cannot be seen on a spreadsheet; Ruskin calls any attempt to use artistic talent for other work "the dead loss of so much human energy". Both, in the end, count the cost of neglect, and both insist that the true cost is human.',
            },
            markScheme: [
              'Compares perspectives and attitudes from both sources',
              'Compares methods used by both writers',
              'Uses well-chosen references from both texts',
              'Analyses how context shapes different perspectives',
              'Top band: perceptive, detailed comparison with conceptualised understanding of both texts',
            ],
          },
        ],
      },
      {
        id: 'ocr-p1-14-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 45 minutes on this section, including planning time.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'ocr-p1-14-q5',
            questionNumber: 5,
            questionText:
              '"Arts subjects in schools are just as important as science and maths."\n\nWrite an article for your school magazine in which you argue for or against this statement.\n\n(32 marks for content and organisation / 8 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear article with: an appropriate tone for a school magazine audience; a sustained argument; some persuasive techniques; generally accurate spelling and punctuation.',
              'Grade 6-7':
                'A well-crafted article with: a confident and engaging voice appropriate for the school audience; sophisticated rhetorical techniques; effective use of specific examples; consistent technical accuracy with ambitious vocabulary.',
              'Grade 8-9':
                'An outstanding article with: a distinctive and compelling voice; a nuanced argument that avoids simplistic binary opposition; structural sophistication including a memorable opening and conclusion; technical virtuosity with precise vocabulary and varied syntax.',
            },
            markScheme: [
              'Content & Organisation (32 marks): Purpose - argue persuasively; Audience - school community; Form - magazine article; Structure - coherent argument with engaging introduction and strong conclusion',
              'Technical Accuracy (8 marks): Sentence demarcation; Standard English; Spelling; Punctuation; Range of sentence forms and vocabulary',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 15 - Immigration
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
        description: `Read the two source texts carefully. Then answer all the questions in this section.\n\nSource A: ${IMMIGRATION_SOURCE_A_REF}\nSource B: ${IMMIGRATION_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-15-q1',
            questionNumber: 1,
            questionText:
              'Read Source A. Identify four points the writer makes about the contribution of immigrants to British society.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: IMMIGRATION_SOURCE_A,
            extractSource: IMMIGRATION_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                '1. Her father runs a small engineering firm employing fourteen people. 2. Her mother has worked as a ward sister at a hospital for two decades. 3. Immigrants are younger on average and contribute more in taxes. 4. The NHS would collapse without immigrant workers.',
            },
            markScheme: ['1 mark per valid point identified from the text, maximum 4 marks'],
          },
          {
            id: 'ocr-p1-15-q2',
            questionNumber: 2,
            questionText:
              'Read Source A. How does the writer challenge common misconceptions about immigration? Use evidence from the text in your answer.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: IMMIGRATION_SOURCE_A,
            extractSource: IMMIGRATION_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer challenges the idea that immigration is "out of control" by putting it in quotation marks to show she disagrees. She says most immigrants come to work, study, or join family. She uses her own family as an example - her father runs a business and her mother is a nurse. She also says immigrants pay more taxes than they use in services, which goes against the idea that they are a burden.',
              'Grade 6-7':
                'Chakraborty employs a multi-layered strategy of refutation. She begins with personal testimony - her family\'s trajectory from "two suitcases, three hundred pounds" to professional success - which functions as a living counter-example to anti-immigration narratives. The quotation marks around "out of control" perform a critical distancing, marking the phrase as someone else\'s language that does not survive scrutiny. She then deploys factual rebuttal - immigrants are younger, contribute more in taxes - before naming specific sectors (NHS, care, hospitality, agriculture, construction) to demonstrate that immigration is not abstract but structurally essential. The parenthetical aside "the idea that a human being\'s right to live in safety and dignity depends on their productivity is morally grotesque" challenges not just misconceptions about immigration but the entire framework within which the debate is conducted, refusing to let economic contribution become the sole measure of human worth.',
              'Grade 8-9':
                'The writer\'s strategy of challenge operates simultaneously on empirical, rhetorical, and moral levels. Her opening family narrative - the precise detail of "two suitcases, three hundred pounds" - counters anti-immigration sentiment not through argument but through embodied evidence: the reader is confronted with a specific family whose contributions are beyond dispute. The subsequent disclaimer - "I mention this not because I believe immigrants should have to justify their existence through economic contribution" - is a sophisticated pre-emptive strike that challenges the very terms of the debate. By naming the economic justification framework as "morally grotesque" even while deploying it, Chakraborty exposes the double bind immigrants face: damned if they do not contribute, reduced to economic units if they do. The scare-quoted "out of control" is surgically dismantled by the measured, factual sentences that follow - a structural contrast between hysteria and evidence that performs the rationality the writer advocates. The naming of essential sectors - "The NHS would collapse within weeks" - transforms immigrants from a statistical abstraction into the invisible infrastructure of daily life. The final paragraph\'s concessive structure ("None of this means...") pre-empts the accusation of naivety while redirecting responsibility: it is not immigration that is the problem but "inflammatory headlines and misleading statistics", shifting blame from immigrants to those who weaponise discourse about them.',
            },
            markScheme: [
              'Identifies specific misconceptions the writer challenges',
              'Explains how the writer uses evidence and rhetoric to challenge them',
              "Analyses the effectiveness of the writer's methods of challenge",
              'Top band: perceptive analysis of how the writer challenges both specific claims and the broader framework of debate',
            ],
          },
          {
            id: 'ocr-p1-15-q3',
            questionNumber: 3,
            questionText:
              "Read Source A. How does the writer use language and structure to present her argument about immigration in Britain?\n\nAnalyse the effects of the writer's choices.",
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: IMMIGRATION_SOURCE_A,
            extractSource: IMMIGRATION_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer structures her argument by starting with her family\'s story, then moving to facts and statistics, and ending with a call for better debate. She uses emotive language like "morally grotesque" and "poisoned public discourse" to show her strong feelings. The list of sectors that depend on immigrants - "The care sector, the hospitality industry, agriculture, construction" - makes the argument convincing. The final sentence, which accuses politicians of hypocrisy, is powerful and memorable.',
              'Grade 6-7':
                'Chakraborty opens with a carefully constructed family narrative whose details are precisely chosen: "two suitcases, three hundred pounds" conveys vulnerability, while the subsequent professional achievements (engineering firm, ward sister, solicitor, teacher) trace an arc of contribution. The structural shift from personal to political is managed through the pivotal disclaimer about economic justification - a sentence that simultaneously deploys and critiques the metrics-based framework. The language becomes increasingly combative as the piece progresses: "morally grotesque" gives way to "inflammatory headlines and misleading statistics" and finally "politicians who stoke fear for electoral advantage". This escalation mirrors the writer\'s movement from defence to attack. The penultimate paragraph\'s list of essential sectors is punctuated by the crucial clarification "these are not abstract economic categories" - a moment where the writer breaks through her own rhetorical framework to insist on the human reality beneath the data. The final paragraph\'s balancing of "facts" against "fear" creates a moral binary that positions the reader as choosing between reason and prejudice.',
              'Grade 8-9':
                'The writer\'s rhetorical architecture is constructed with forensic precision, each paragraph performing a distinct argumentative function while contributing to a cumulative effect of irrefutable logic infused with moral passion. The opening paragraph\'s inventory of family achievements - "two suitcases, three hundred pounds... engineering firm... ward sister... solicitor... teacher" - enacts the immigrant narrative of progress through a series of ascending declaratives whose very simplicity refuses to be contradicted. The paragraph\'s closing sentence, "Between us, we have paid more in taxes than I care to calculate", is beautifully judged: the tone of exhausted reluctance transforms what could be defensive self-justification into a quiet reproach. The structural masterwork is the third paragraph\'s first sentence: "Net migration is not \'out of control\'" - a flat declarative that performs the rationality it advocates, stripping the scare-quoted phrase of its emotional power through calm negation. The listing technique in "The NHS would collapse within weeks without immigrant workers. The care sector, the hospitality industry, agriculture, construction" creates a cascading effect where each named sector adds another load-bearing pillar to the argument, making the removal of any one unthinkable. The concluding paragraph\'s concessive opening ("None of this means that immigration policy should not be debated") performs a crucial act of rhetorical generosity that strengthens rather than weakens the writer\'s position: by granting legitimacy to debate, she claims the reasonable ground and cedes extremism to her opponents. The final image - "politicians who stoke fear for electoral advantage while quietly relying on immigrant labour to keep the country running" - delivers the essay\'s most devastating irony: the hypocrisy of those who publicly condemn what they privately require.',
            },
            markScheme: [
              'Analyses specific language choices and their effects',
              'Analyses structural choices and their effects on the reader',
              'Uses well-chosen textual references to support analysis',
              'Explores the relationship between language, structure, and argument',
              'Top band: perceptive, detailed analysis showing conceptualised understanding',
            ],
          },
          {
            id: 'ocr-p1-15-q4',
            questionNumber: 4,
            questionText:
              'Read both sources. Compare how the two writers convey their different perspectives on people who leave their homes to start a new life in another country.\n\nIn your answer, you should:\n• compare their different perspectives and attitudes\n• compare the methods they use to convey those perspectives\n• support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${IMMIGRATION_SOURCE_A}\n\nSource B:\n${IMMIGRATION_SOURCE_B}`,
            extractSource: `${IMMIGRATION_SOURCE_A_REF} / ${IMMIGRATION_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers show people who move to another country in a positive light. Source A is about immigrants coming to Britain, and the writer\'s own parents arrived "with two suitcases, three hundred pounds". Source B is about emigrants leaving England for America in 1863, and Dickens describes them as "the pick and flower of England". Source A uses facts and her family\'s story, while Source B uses description and conversation, such as the emigrants\' cheerful words "We shall have more light at sea." Both writers challenge negative expectations: Source A says that net migration is not "out of control", and Dickens admits that what he found meant "the rout and overthrow of all my expectations".',
              'Grade 6-7':
                'Chakraborty and Dickens both challenge assumptions about people who leave home for a new country, but from very different positions. Chakraborty writes as the daughter of immigrants, and her perspective is personal and political: her family\'s story is evidence against a public conversation she thinks has become "so divorced from reality". Dickens writes as an outsider and a sceptic. He came aboard, he tells us, "to see what Eight hundred Latter-day Saints were like", and the delay before he names them, "EIGHT HUNDRED MORMONS", shows that he expects his readers to share the prejudice he is about to overturn. Their methods differ accordingly. Chakraborty argues directly, with facts and a clear thesis; Dickens persuades by showing. He records the emigrants\' own cheerful voices ("We shall shake down by to-morrow"), picks out small scenes such as the "family circle" on the deck, and lets the captain\'s agreement ("So should I") confirm his judgement that they are "the pick and flower of England". Both writers value the qualities that people who migrate bring with them: Chakraborty her parents\' "conviction" that hard work would be rewarded, Dickens the emigrants\' "universal cheerfulness" and "exemption from hurry". But where Chakraborty speaks for people like her own family, Dickens speaks as a witness who has changed his mind, which gives his praise a different kind of authority.',
              'Grade 8-9':
                'Both texts answer a hostile expectation about people who uproot themselves, and the most revealing comparison lies in how each writer earns the right to be believed. Chakraborty\'s authority is personal: the "two suitcases, three hundred pounds" of her parents\' arrival, and the careers that followed, are offered as evidence that cannot be argued with. Yet she is uneasy with her own method, and says so, insisting that "the idea that a human being\'s right to live in safety and dignity depends on their productivity is morally grotesque" even as she lists what her family has contributed. Dickens\'s authority is that of the sceptical witness. He does not argue; he reports, and he builds the reader\'s curiosity through the captain\'s unfinished question ("If you hadn\'t known, could you ever have supposed—?") and his own teasing "Eight hundred what?" before the capitals of "EIGHT HUNDRED MORMONS" deliver the surprise. His description works by accumulation. The scene between decks is dark and crowded, yet "the universal cheerfulness was amazing", and the emigrants\' repeated "We shall" ("We shall shake down by to-morrow", "We shall have more light at sea") sounds like a community talking itself into hope. His praise, "the pick and flower of England", is the more striking for being unexpected: he tells us that he found the emigrants as he describes them, "to the rout and overthrow of all my expectations", and he claims only to describe them "with scrupulous exactness". Chakraborty ends by accusing politicians who "stoke fear for electoral advantage"; Dickens ends by admitting that his own expectations were wrong. One writes as an advocate and the other as a witness who changed his mind, and each shows a different way in which prejudice about people who migrate can be answered.',
            },
            markScheme: [
              'Compares perspectives and attitudes from both sources',
              'Compares methods used by both writers',
              'Uses well-chosen references from both texts',
              'Analyses how context shapes different perspectives',
              'Top band: perceptive, detailed comparison with conceptualised understanding of both texts',
            ],
          },
        ],
      },
      {
        id: 'ocr-p1-15-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 45 minutes on this section, including planning time.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'ocr-p1-15-q5',
            questionNumber: 5,
            questionText:
              '"Immigration has been overwhelmingly positive for Britain."\n\nWrite a speech for a public debate in which you argue for or against this statement.\n\n(32 marks for content and organisation / 8 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear speech with: a sustained argument for or against; some rhetorical techniques such as direct address and repetition; generally accurate spelling and punctuation; appropriate paragraphing.',
              'Grade 6-7':
                'A well-crafted speech with: sophisticated use of rhetorical devices including anaphora, tricolon, and counter-argument; appropriate register for a public debate; effective use of evidence and examples; consistent technical accuracy with ambitious vocabulary.',
              'Grade 8-9':
                'An outstanding speech with: a compelling and nuanced argument that engages with complexity and avoids caricature; a distinctive and authoritative voice; structural sophistication that builds to a powerful peroration; technical virtuosity with varied sentence forms, precise vocabulary, and controlled rhythm.',
            },
            markScheme: [
              'Content & Organisation (32 marks): Purpose - argue persuasively; Audience - public debate; Form - speech with appropriate conventions; Structure - coherent argument with compelling opening and conclusion',
              'Technical Accuracy (8 marks): Sentence demarcation; Standard English; Spelling; Punctuation; Range of sentence forms and vocabulary',
            ],
          },
        ],
      },
    ],
  },
]
