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
 * NOT CHANGED: marks, timings and Section B.
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
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${EXAM11_SOURCE_A_REF}\nSource B: ${EXAM11_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p2-11-q1',
            questionNumber: 1,
            questionText:
              'Read again Source A, the first paragraph.\n\nChoose four statements below which are TRUE.\n\nA) The writer visited prisons in Scotland.\nB) The writer spoke to inmates and guards.\nC) Cells designed for one person sometimes house two or three.\nD) Prisoners eat their meals at a dining table.\nE) A plastic curtain separates the toilet from the bed.\nF) The writer spent three weeks visiting prisons.\nG) The writer believes the system is designed to rehabilitate.\nH) Prisoners mark off days on walls.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${EXAM11_SOURCE_A}\n\nSource B:\n${EXAM11_SOURCE_B}`,
            extractSource: `Source A: ${EXAM11_SOURCE_A_REF} | Source B: ${EXAM11_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'B, C, E, H - B: "speaking to inmates, guards, and governors." C: "cells built for one but housing two or three." E: "a plastic curtain separating the toilet from the bed." H: "marking off days on walls."',
            },
            markScheme: [
              '1 mark for each correct answer',
              'Maximum 4 marks',
              'No marks for incorrect selections',
            ],
          },
          {
            id: 'aqa-p2-11-q2',
            questionNumber: 2,
            questionText:
              'You need to refer to Source A and Source B for this question.\n\nUse details from both sources. Write a summary of the similarities and differences in how the two writers describe the conditions prisoners experience.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'summary',
            extract: `Source A:\n${EXAM11_SOURCE_A}\n\nSource B:\n${EXAM11_SOURCE_B}`,
            extractSource: `Source A: ${EXAM11_SOURCE_A_REF} | Source B: ${EXAM11_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both sources describe prisons that hold people without giving them anything useful to do. In Source A, prisoners are "crammed" into cells "built for one but housing two or three", with only "a plastic curtain" between the toilet and the bed, and they pass the time "marking off days on walls". In Source B, Dickens visits Newgate and finds the men "all idle and listless" because of "the utter absence of any employment": they sit by the fire, wander about or lean against the wall. Both writers also show that prison does little to make people better. Source A says the system gave prisoners time and "nothing else", while Dickens meets boys under fourteen, held for trial for pocket-picking, who show no "shame or contrition". A difference is that Source A describes crowded cells, while Dickens describes a shared ward where about twenty men sit "huddled together" round one fire. Another is that Source A describes prisoners who achieved something, such as "a woman who had written a novel", while in every ward Dickens entered the men were idle, apart from the odd man reading "an old newspaper".',
              'Grade 6-7':
                'Both writers describe prisons that hold people without giving them anything to do, although the conditions they describe are different. The writer of Source A describes overcrowding: cells "built for one but housing two or three", a "plastic curtain" for privacy and meals eaten "on their laps because there is no table". Dickens, visiting Newgate in the 1830s, describes shared wards instead, where about twenty men sit "huddled together on two opposite forms" by the fire, and he notes the "dark cells" kept for "refractory prisoners". In both prisons the worst condition is empty time. Source A\'s prisoners mark off the days because "time has become the only currency they possess"; Dickens is struck by "the utter absence of any employment", and the men he watches are "all idle and listless", "vacantly swinging their bodies to and fro". The writers differ most in the prisoners they notice. Source A dwells on people who used their time well, a man "who had taught himself to read in prison" and "a woman who had written a novel". Dickens\'s most memorable prisoners are fourteen boys "under fourteen years of age", held for trial on charges of pocket-picking, "some with shoes, some without". He sees no "shame or contrition" in them, yet he does not simply blame them: they are "hopeless creatures of neglect". Both writers suggest that prison wastes the people it holds, but Source A sees wasted potential where Dickens sees children who already seem lost.',
            },
            markScheme: [
              'Must reference both sources',
              'Identifies clear differences and/or similarities',
              'Uses evidence from both texts',
              'Synthesises rather than alternates between texts',
              'Infers beyond surface-level details',
            ],
          },
          {
            id: 'aqa-p2-11-q3',
            questionNumber: 3,
            questionText:
              'You now need to refer only to Source A.\n\nHow does the writer use language to persuade the reader that the prison system is failing?',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: `Source A:\n${EXAM11_SOURCE_A}`,
            extractSource: EXAM11_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses the metaphor "warehouse" to describe prisons, which suggests prisoners are treated like objects rather than people. Statistics like "more than four in ten adults" reoffending and "more than fifty thousand pounds per prisoner" are used to shock the reader and show the system is wasting money. The comparison to a hospital is effective because it makes us see how unacceptable the failure rate is. The listing of achievements - "taught himself to read," "written a novel," "gained three A-levels" - shows that prisoners can change but the system does not help them.',
              'Grade 6-7':
                'The writer constructs the argument through a carefully sequenced rhetorical strategy that moves from visceral description to statistical proof to moral appeal. The first paragraph\'s central metaphor - "warehouse" - is devastating in its precision: it reduces rehabilitation to mere storage, stripping the system of any pretence to purpose. The first paragraph\'s accumulation of degrading details ("plastic curtain," "eating meals on their laps," "marking off days on walls") creates a sensory catalogue of indignity, each image more diminishing than the last. The second paragraph shifts register to data-driven argument: "more than four in ten", "about two in three" and "more than fifty thousand pounds" are deployed as evidence of systematic failure. The hospital analogy is rhetorically powerful because it reframes prison failure in terms the reader instinctively recognises as unacceptable - we would not tolerate four in ten patients coming back with the same condition, so why do we accept it in criminal justice? The final paragraph performs the most sophisticated persuasive move: the tricolon of individual achievement ("taught himself to read... written a novel... gained three A-levels") humanises the statistics, while the devastating anaphoric negation - "no support, no pathway, no reason to believe" - systematically strips away any comfort the reader might take from these success stories.',
              'Grade 8-9':
                'The writer orchestrates a tripartite rhetorical architecture - sensory, analytical, and moral - that systematically dismantles the reader\'s capacity for complacency. The opening paragraph\'s controlling metaphor, "warehouse," performs double duty: it dehumanises the system\'s intent while literalising its practice, since the subsequent description of cells "built for one but housing two or three" is precisely how one describes warehousing - maximising capacity with no regard for the contents. The verb "crammed" extends this semantic field, its connotations of compression and force denying prisoners any agency. The paragraph\'s most subtle technique is the shift to present participles - "eating," "marking" - which grammatically enact the endless, unchanging present of incarceration. The second paragraph executes a register shift from sensory to statistical, but the statistics are not merely presented; they are framed through analogy. The hospital comparison is a masterclass in audience manipulation: by mapping prison onto healthcare, the writer exploits the reader\'s existing moral framework. The word "scandal" is carefully positioned - its association with public outrage makes the contrasting "inevitable" (applied to prison failure) sound like moral surrender. The final paragraph achieves its power through juxtaposition: the individual achievements represent human flourishing against systemic indifference, while the anaphoric "no support, no pathway, no reason to believe" uses syntactic repetition to perform the system\'s emptiness. The final clause - "what they had achieved mattered to anyone beyond those walls" - positions the reader as implicitly complicit: if this essay has made us care, we are already among those who should have been there sooner.',
            },
            markScheme: [
              'Analyses persuasive language techniques in detail',
              'Comments on the effect of specific words and phrases',
              'Considers how language positions the reader',
              'Uses subject terminology accurately and precisely',
              'Top band: perceptive, detailed, conceptualised analysis',
            ],
          },
          {
            id: 'aqa-p2-11-q4',
            questionNumber: 4,
            questionText:
              'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different attitudes to the prison system and its purpose.\n\nIn your answer, you could:\n- compare their different attitudes\n- compare the methods they use to convey their attitudes\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${EXAM11_SOURCE_A}\n\nSource B:\n${EXAM11_SOURCE_B}`,
            extractSource: `Source A: ${EXAM11_SOURCE_A_REF} | Source B: ${EXAM11_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers criticise prisons, but in different ways. Source A attacks the whole system, saying it is "designed to warehouse" people rather than to rehabilitate them, and uses statistics and a comparison with a hospital to show that prisons fail. Dickens, in Source B, does not use statistics. He describes what he sees on a visit to Newgate and lets the reader judge: men who are "idle and listless" because there is no work for them, and boys who show no "shame or contrition". Both writers suggest that prison does nothing to make people better. Source A says the system gave prisoners time and "nothing else", and Dickens shows men with nothing to do. Their attitudes to the prisoners are different. Source A is sympathetic and describes prisoners who achieved something, like the man who "taught himself to read". Dickens is much harsher: he says there was "not one redeeming feature" among the boys. However, he ends his description of them by calling them "hopeless creatures of neglect", which suggests that he also blames the people who should have looked after them.',
              'Grade 6-7':
                'Both writers judge a prison by what it does with the people it holds, and both find that it does almost nothing, but their attitudes to the prisoners themselves are very different. The writer of Source A argues openly. The prison system is "a system designed to warehouse", and the case is built from visits, statistics and an analogy: if a hospital failed its patients like this, "we would call it a scandal". Dickens argues by showing. He writes as a visitor being shown round, and his criticism lies in what he chooses to notice: "dark cells for the accommodation of refractory prisoners", where "accommodation" sounds bitterly polite, and wards marked by "the utter absence of any employment". His long sentence listing the men by the fire, from "a boy in livery" to "a miserable being of distressed appearance", ends on what they all share: they are "all idle and listless". Like Source A\'s warehouse, Newgate stores people and gives them nothing to do. The writers differ in how they see the prisoners. Source A humanises them through individuals who did "something extraordinary" with their time, and blames the system that gave them "nothing else". Dickens\'s first response to the boys is disgust: "fourteen such terrible little faces we never beheld", with "not one redeeming feature among them" and nothing ahead of them but "the gallows and the hulks". His irony mocks their pride, as if each boy had done "something excessively meritorious in getting there at all". Yet his last sentence about them shifts the blame: he has never seen "fourteen such hopeless creatures of neglect". Neglect implies someone who should have cared for them and did not. Both writers therefore end up looking beyond the prisoners: Source A to whether their achievements matter to anyone "beyond those walls", Dickens to the neglect that brought children to Newgate.',
            },
            markScheme: [
              'Compares attitudes from both sources throughout',
              'Analyses methods used by both writers',
              'Uses evidence from both texts',
              'Shows clear understanding of different perspectives',
              'Top band: perceptive, detailed comparison with sustained critical voice',
            ],
          },
        ],
      },
      {
        id: 'aqa-p2-11-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 45 minutes on this section. Write in full sentences. You are reminded of the need to plan your answer.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p2-11-q5',
            questionNumber: 5,
            questionText:
              '"Prison should focus on rehabilitation, not punishment. Locking people up and throwing away the key helps nobody."\n\nWrite an article for a broadsheet newspaper in which you argue your point of view on this statement.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear argumentative piece that: addresses the statement directly; uses some persuasive devices (rhetorical questions, direct address, statistics); has a clear structure with introduction, body paragraphs, and conclusion; demonstrates generally accurate spelling and punctuation.',
              'Grade 6-7':
                'A well-crafted argument that: engages with the complexity of the debate (acknowledging victims, public safety, and rehabilitation); uses a range of rhetorical techniques fluently; deploys evidence and examples effectively; matches the register of a broadsheet article; demonstrates consistent technical accuracy with ambitious vocabulary.',
              'Grade 8-9':
                'A compelling, assured argument that: offers a nuanced perspective acknowledging the tension between justice, deterrence, and rehabilitation; crafts a distinctive voice appropriate to the form; deploys rhetorical strategies with precision and control; uses counter-argument to strengthen the position; demonstrates extensive vocabulary and varied syntax; shows technical virtuosity throughout.',
            },
            markScheme: [
              'AO5 (24 marks): Clear, effective communication matched to form, purpose, audience',
              'AO5: Structured argument with coherent paragraphing',
              'AO6 (16 marks): Accurate sentence demarcation',
              'AO6: Range of punctuation used effectively',
              'AO6: Accurate spelling of ambitious vocabulary',
              'AO6: Varied sentence forms for purpose and effect',
            ],
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
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${EXAM12_SOURCE_A_REF}\nSource B: ${EXAM12_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p2-12-q1',
            questionNumber: 1,
            questionText:
              'Read again Source A, the first paragraph.\n\nChoose four statements below which are TRUE.\n\nA) The writer believes journalism is in decline.\nB) The writer blames only the government for this.\nC) People scroll past paywalls.\nD) People always read articles fully before sharing them.\nE) Some people distrust mainstream media.\nF) People uncritically consume social media claims.\nG) The writer says journalism is thriving.\nH) The writer says readers bear no blame for the decline.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${EXAM12_SOURCE_A}\n\nSource B:\n${EXAM12_SOURCE_B}`,
            extractSource: `Source A: ${EXAM12_SOURCE_A_REF} | Source B: ${EXAM12_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'A, C, E, F - A: "Journalism is dying." C: "every time you scroll past a paywall." E: "the mainstream media can\'t be trusted." F: "uncritically consuming the claims of anonymous social media accounts."',
            },
            markScheme: [
              '1 mark for each correct answer',
              'Maximum 4 marks',
              'No marks for incorrect selections',
            ],
          },
          {
            id: 'aqa-p2-12-q2',
            questionNumber: 2,
            questionText:
              'You need to refer to Source A and Source B for this question.\n\nUse details from both sources. Write a summary of the similarities and differences in the concerns the two writers express about the press and its role in society.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'summary',
            extract: `Source A:\n${EXAM12_SOURCE_A}\n\nSource B:\n${EXAM12_SOURCE_B}`,
            extractSource: `Source A: ${EXAM12_SOURCE_A_REF} | Source B: ${EXAM12_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers are worried about the press, but for opposite reasons. Source A is worried that journalism is disappearing: newsrooms have shrunk from "a hundred reporters to skeleton crews of fifteen", and towns have nobody to report on "their council meetings, their courts, their schools." Source B, by Oscar Wilde, is worried that the press has too much power: he says journalism "has eaten up the other three" estates and that "We are dominated by Journalism." Both writers think readers share the blame. Source A says "we are all complicit" because of the way we read the news, and Wilde says the public "have an insatiable curiosity to know everything, except what is worth knowing", which journalism then satisfies. However, Source A wants more journalism, while Wilde wants much less of it in people\'s private lives.',
              'Grade 6-7':
                'Both writers are concerned with the relationship between the press, the public and power, though they diagnose opposite illnesses. The writer of Source A fears the absence of journalism: the number of local newspaper journalists "has at least halved", and "Entire towns have no reporter assigned" to watch those in authority. Wilde fears its presence: once one power among four, journalism "has eaten up the other three", and in America it "governs for ever and ever" while a President "reigns for four years". Both writers connect the press to the behaviour of its readers. Source A accuses readers who share an article "without reading beyond the headline" of being "complicit" in journalism\'s decline; Wilde accuses the public of an "insatiable curiosity" that journalism, with its "tradesman-like habits", simply supplies. Their concerns about society differ most sharply. Source A argues that without reporters public money goes unwatched, and cites research in which places that lost their newspaper then paid more to borrow. Wilde\'s concern is not public money but private life: "The tyranny that it proposes to exercise over people\'s private lives seems to me to be quite extraordinary." One writer wants the press to watch the powerful more closely; the other wants it to stop watching everybody else.',
            },
            markScheme: [
              'Must reference both sources',
              'Identifies clear differences and/or similarities',
              'Uses evidence from both texts',
              'Synthesises rather than alternates between texts',
              'Infers beyond surface-level details',
            ],
          },
          {
            id: 'aqa-p2-12-q3',
            questionNumber: 3,
            questionText:
              'You now need to refer only to Source A.\n\nHow does the writer use language to convey a sense of urgency about the decline of journalism?',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: `Source A:\n${EXAM12_SOURCE_A}`,
            extractSource: EXAM12_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses the metaphor "murder" in the opening sentence to make the decline of journalism sound violent and criminal. The phrase "we are all complicit" uses the pronoun "we" to include the reader in the blame. The repetition of "every time you" at the start of three phrases creates a sense of accumulating guilt. The statistic that the number of local newspaper journalists "has at least halved" shows the scale of the loss. The phrase "Democracy does not die in darkness - it dies in the spaces where nobody is watching" is powerful because it rewrites a famous saying to make a new point.',
              'Grade 6-7':
                'The writer constructs urgency through a systematic escalation from personal accusation to statistical evidence to democratic crisis. The opening sentence\'s extended metaphor of "murder" - with readers as "complicit" - immediately criminalises passive consumption, elevating indifference to active harm. The anaphoric "every time you" creates a litany of everyday sins, each action (scrolling, sharing, declaring) presented as a discrete act of destruction. The verb phrase "drive another nail into the coffin" extends the death metaphor with grim specificity. The second paragraph shifts from accusation to elegy: the juxtaposition of "bustling floors of a hundred reporters" with "skeleton crews of fifteen" compresses decades of decline into a single image. The adjective "skeleton" is doubly resonant - it suggests both minimal staffing and death. The paragraph\'s closing sentence, adapted from a Washington Post slogan, reframes the familiar: "Democracy does not die in darkness - it dies in the spaces where nobody is watching." The dash creates a pause that performs the very absence it describes. The final paragraph deploys research evidence (the American study of places that lost their local newspaper) to convert emotional argument into material proof, ensuring the reader cannot dismiss the urgency as mere sentiment.',
              'Grade 8-9':
                'The writer engineers urgency through a rhetorical structure that progressively closes the escape routes available to the complacent reader. The opening sentence performs a dual provocation: "dying" is dramatic enough, but "murder" reframes decline as crime, and "complicit" redistributes guilt from the abstraction of market forces to the individual reader. The subsequent anaphora - "every time you scroll... every time you share... every time you declare" - constructs a catalogue of quotidian betrayals in which the second person pronoun functions as an accusatory finger. The syntactic parallelism creates inevitability: each clause is another count in an indictment. The second paragraph\'s most sophisticated technique is temporal compression: "twenty-two years" of experience is condensed into the single image of newsrooms shrinking from "bustling floors" to "skeleton crews." The noun "skeleton" operates across two semantic fields - the literal (bare minimum) and the morbid (bones, death) - collapsing the distinction between understaffing and extinction. The emotional weight falls on the parenthetical "brilliant, dedicated, irreplaceable" - three adjectives whose ascending syllable count performs the very accumulation of loss they describe. The adapted epigram in the paragraph\'s final sentence achieves its force through subversion: by contradicting the familiar ("does not die in darkness"), the writer claims the reader\'s attention before delivering the real insight ("in the spaces where nobody is watching"), which is syntactically positioned as a correction, giving it the rhetorical authority of revealed truth. The final paragraph\'s appeal to research transforms the argument from polemic to evidence: the finding that it "cost their local governments more to borrow" gives the abstract danger a price, which prevents the reader from dismissing the preceding rhetoric as hyperbole.',
            },
            markScheme: [
              'Analyses persuasive language techniques in detail',
              'Comments on the effect of specific words and phrases',
              'Considers how language positions the reader',
              'Uses subject terminology accurately and precisely',
              'Top band: perceptive, detailed, conceptualised analysis',
            ],
          },
          {
            id: 'aqa-p2-12-q4',
            questionNumber: 4,
            questionText:
              'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different perspectives on the power and responsibility of the press.\n\nIn your answer, you could:\n- compare their different perspectives\n- compare the methods they use to convey their perspectives\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${EXAM12_SOURCE_A}\n\nSource B:\n${EXAM12_SOURCE_B}`,
            extractSource: `Source A: ${EXAM12_SOURCE_A_REF} | Source B: ${EXAM12_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers care about the press but see different problems. Source A is worried that journalism is disappearing and uses a statistic to prove it: the number of local newspaper journalists "has at least halved". Wilde (Source B) is worried that journalism has too much power and misuses it. Both use comparisons to make their point: Source A says democracy "dies in the spaces where nobody is watching", and Wilde compares the press to "the rack", an instrument of torture. Both writers think the press matters to how the country is run. Source A says that without journalists public money is watched less closely, while Wilde jokes that journalism "has eaten up the other three" estates. Source A uses direct address ("you") to make readers feel guilty, while Wilde uses short, witty sentences such as "That is much worse."',
              'Grade 6-7':
                'The two writers occupy mirror positions. The writer of Source A defends the power of the press as a public good and mourns its loss; Wilde, writing in 1891, attacks that power as a tyranny. Both, though, judge the press by what it does to the people it reports on and the people who read it. Source A presents journalism as a watchman. Its power is the power to see: democracy "dies in the spaces where nobody is watching", and research on places that lost their paper shows what happens to public money when the watching stops. The responsibility the writer demands is the reader\'s, to pay for journalism and read it properly. Wilde presents journalism as a ruler. His historical sequence, from "the rack" to "the press", calls the change "an improvement certainly" before turning, with the conjunction "But", to "very bad, and wrong". He borrows the political language of estates and reigns to show journalism overtaking every other institution, and closes on a pair of balanced sentences: once "the public nailed the ears of journalists to the pump", now "journalists have nailed their own ears to the keyhole". The keyhole makes his charge concrete: the press has used its power to spy on private lives. Their methods differ as much as their views. Source A builds urgency with direct address ("every time you"), a death metaphor and statistics; Wilde works through epigram and understatement, each short sentence ("That was quite hideous." "That is much worse.") landing like the end of a joke that is not really a joke. Where Source A holds readers responsible for letting the press die, Wilde holds them responsible for its excesses: journalism "supplies their demands".',
            },
            markScheme: [
              'Compares attitudes from both sources throughout',
              'Analyses methods used by both writers',
              'Uses evidence from both texts',
              'Shows clear understanding of different perspectives',
              'Top band: perceptive, detailed comparison with sustained critical voice',
            ],
          },
        ],
      },
      {
        id: 'aqa-p2-12-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 45 minutes on this section. Write in full sentences. You are reminded of the need to plan your answer.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p2-12-q5',
            questionNumber: 5,
            questionText:
              '"Social media has made traditional journalism irrelevant. Anyone with a phone can be a reporter now."\n\nWrite a speech to be delivered at a school assembly in which you argue your point of view on this statement.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear argumentative speech that: addresses the statement directly; uses some persuasive devices (rhetorical questions, direct address to the audience, anecdote); has a clear structure with opening, body, and conclusion; demonstrates generally accurate spelling and punctuation; adopts an appropriate register for a school assembly.',
              'Grade 6-7':
                'A well-crafted speech that: engages critically with both sides of the argument; uses a range of rhetorical techniques appropriate to spoken discourse (tricolon, anaphora, shifts in pace); deploys examples and evidence effectively; demonstrates awareness of the school assembly audience; shows consistent technical accuracy with ambitious vocabulary.',
              'Grade 8-9':
                'A compelling, assured speech that: offers a nuanced perspective on the relationship between citizen journalism and professional reporting; crafts a distinctive and engaging speaking voice; deploys rhetorical strategies with precision, including pauses, repetition, and audience engagement; uses counter-argument to strengthen the position; demonstrates extensive vocabulary and varied syntax; shows technical virtuosity throughout.',
            },
            markScheme: [
              'AO5 (24 marks): Clear, effective communication matched to form, purpose, audience',
              'AO5: Structured argument with coherent paragraphing',
              'AO6 (16 marks): Accurate sentence demarcation',
              'AO6: Range of punctuation used effectively',
              'AO6: Accurate spelling of ambitious vocabulary',
              'AO6: Varied sentence forms for purpose and effect',
            ],
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
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${EXAM13_SOURCE_A_REF}\nSource B: ${EXAM13_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p2-13-q1',
            questionNumber: 1,
            questionText:
              'Read again Source A, the first paragraph.\n\nChoose four statements below which are TRUE.\n\nA) The writer believes people are disconnected from their food sources.\nB) Supermarkets deliberately maintain this disconnection.\nC) The writer praises the convenience of modern shopping.\nD) A chicken breast in a tray looks like a real chicken.\nE) Supermarket produce is sold without packaging.\nF) Migrant workers pick salad leaves.\nG) Workers are always paid above the minimum wage.\nH) Supermarkets use fluorescent lighting.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${EXAM13_SOURCE_A}\n\nSource B:\n${EXAM13_SOURCE_B}`,
            extractSource: `Source A: ${EXAM13_SOURCE_A_REF} | Source B: ${EXAM13_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'A, B, F, H - A: "We have become a nation of people who do not know where their food comes from." B: "this ignorance is not accidental - it is cultivated." F: "the migrant workers who picked them." H: "fluorescent lights."',
            },
            markScheme: [
              '1 mark for each correct answer',
              'Maximum 4 marks',
              'No marks for incorrect selections',
            ],
          },
          {
            id: 'aqa-p2-13-q2',
            questionNumber: 2,
            questionText:
              'You need to refer to Source A and Source B for this question.\n\nUse details from both sources. Write a summary of the similarities and differences in the difficulties faced by the people who produce food, as described in each source.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'summary',
            extract: `Source A:\n${EXAM13_SOURCE_A}\n\nSource B:\n${EXAM13_SOURCE_B}`,
            extractSource: `Source A: ${EXAM13_SOURCE_A_REF} | Source B: ${EXAM13_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both sources describe people who produce food but are not properly rewarded for it. In Source A, the dairy farmer is paid "less per litre than it cost to produce", and salad is picked by migrant workers for "less than the minimum wage". In Source B, the labourers of one Wiltshire parish grow enough food for "more, and many more, than fifteen hundred families", yet "those who do the work are half starved". Both writers show the people who grow the food losing out to others. Source A blames supermarkets and cheap imports, while Cobbett blames "a hellish system" that carries the food away "to be heaped on the fund-holders, pensioners, soldiers" and other "tax-eaters". A difference is that the farmers in Source A are being driven out of farming, while Cobbett\'s labourers are still working but go hungry.',
              'Grade 6-7':
                'Both writers describe food producers who are poorly rewarded for work on which everyone else depends, though the injustice takes a different form in each century. The writer of Source A describes farmers ruined by prices: the Somerset dairy farmer paid "less per litre than it cost to produce", the pig farmer "undercut by imports". Cobbett, writing in 1826, describes labourers who are not ruined but robbed: one hundred families in a Wiltshire parish "raise enough to supply more, and many more, than fifteen hundred families", and yet "those who do the work are half starved". Both writers emphasise how much is produced by how few. Source A shows fruit rotting because there are no longer "enough seasonal workers to pick them"; Cobbett exclaims, "What a handful of people to raise such a quantity of food!" The key difference is who is to blame. Source A points to supermarkets, whose prices drive farmers out, and to imports produced under weaker rules. Cobbett points to the state: the produce is "carried away" to "fund-holders, pensioners, soldiers, dead-weight, and other swarms of tax-eaters", all of them paid out of taxes. Both writers, however, conclude that the country depends on people it treats unjustly: Source A warns that "We lose the ability to feed ourselves", while Cobbett declares that if such a system does not need "putting an end to, then the devil himself is a saint."',
            },
            markScheme: [
              'Must reference both sources',
              'Identifies clear differences and/or similarities',
              'Uses evidence from both texts',
              'Synthesises rather than alternates between texts',
              'Infers beyond surface-level details',
            ],
          },
          {
            id: 'aqa-p2-13-q3',
            questionNumber: 3,
            questionText:
              'You now need to refer only to Source A.\n\nHow does the writer use language to argue that the decline of British farming is a serious threat?',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: `Source A:\n${EXAM13_SOURCE_A}`,
            extractSource: EXAM13_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer describes the supermarket as designed to "sever the connection" between food and where it comes from - the verb "sever" sounds violent, like cutting something with force. The writer uses personal stories to make us care: the dairy farmer who "wept" is emotional and makes us sympathise. The three farmers in the second paragraph work like a rule of three, each showing a different way that farming is failing, and the pig farmer "undercut by imports" shows the unfairness. The final paragraph uses strong language: "existential" means it threatens our very survival, which makes the reader take the issue seriously.',
              'Grade 6-7':
                'The writer constructs the argument through a strategic movement from the abstract to the personal to the political, each stage escalating the stakes. The opening paragraph\'s central metaphor - the supermarket as a machine designed to "sever the connection" - uses a verb connoting violence to characterise what appears benign. The description of a "chicken breast in a polystyrene tray" is deliberately flat, its prosaic specificity enacting the very disconnection it describes. The second paragraph shifts to personal testimony, deploying a tricolon of individual farmers whose stories embody different facets of the crisis. The Somerset dairy farmer who "wept" is emotionally devastating because the verb is so stark and unadorned; the writer does not elaborate or sentimentalise, letting the single verb carry the full weight of despair. The fruit farmer\'s "strawberries rotted in the fields" creates a visceral image of waste that operates as a synecdoche for the entire agricultural crisis. The pig farmer\'s situation - "undercut by imports from countries where the regulations he was legally required to meet simply did not exist" - transforms individual hardship into systemic injustice through the irony of regulatory asymmetry. The final paragraph\'s most powerful technique is the escalation from "food security" through "the ability to feed ourselves" to "an existential one" - each phrase raises the stakes, culminating in a word ("existential") that reframes farming as a matter of national survival.',
              'Grade 8-9':
                'The writer\'s rhetorical strategy operates through a progressive unveiling of concealed violence - moving from the systemic concealment of food production to the human cost of that concealment to its geopolitical consequences. The opening paragraph\'s key claim - "this ignorance is not accidental - it is cultivated" - performs a linguistic irony (using the agricultural verb "cultivated" to describe the deliberate growing of ignorance) that establishes the essay\'s central paradox: the more efficiently we produce food, the less we understand its production. The supermarket is presented as an epistemological machine: "fluorescent lights" and "plastic-wrapped produce" create a hermetic environment where the origins of food are systematically erased. The phrase "bears no resemblance to a chicken" achieves its effect through understatement - the gap between animal and product is so vast that the writer need only name it to make the point. The second paragraph\'s three farmer portraits are structured as a tricolon of decline, but their power lies in the writer\'s restraint. The dairy farmer "wept" - a single-syllable verb, its brevity refusing the reader the comfort of elaboration. The strawberries that "rotted in the fields" invert the agricultural order: food that should sustain becomes waste, the plain past tense "rotted" recording the waste as a settled fact. The final paragraph executes a rhetorical pivot from the personal to the geopolitical through the devastating parenthetical "and make no mistake, that is what is happening" - an aside that refuses the reader\'s temptation to read the preceding as hypothetical. The climactic adjective "existential" is earned precisely because the writer has spent two paragraphs establishing the material reality that warrants it.',
            },
            markScheme: [
              'Analyses persuasive language techniques in detail',
              'Comments on the effect of specific words and phrases',
              'Considers how language positions the reader',
              'Uses subject terminology accurately and precisely',
              'Top band: perceptive, detailed, conceptualised analysis',
            ],
          },
          {
            id: 'aqa-p2-13-q4',
            questionNumber: 4,
            questionText:
              'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their perspectives on the value of farming and the treatment of those who work the land.\n\nIn your answer, you could:\n- compare their different perspectives\n- compare the methods they use to convey their perspectives\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${EXAM13_SOURCE_A}\n\nSource B:\n${EXAM13_SOURCE_B}`,
            extractSource: `Source A: ${EXAM13_SOURCE_A_REF} | Source B: ${EXAM13_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers argue that the people who produce our food are treated unfairly. Source A shows supermarkets paying a farmer "less per litre than it cost to produce", while Cobbett (Source B) shows labourers who grow huge amounts of food but are "half starved". Both writers use evidence to make their point. Source A describes three farmers the writer met, and Cobbett works out that a hundred families feed "more, and many more, than fifteen hundred families". Both writers show that the rest of the country depends on these people: Source A warns that we will lose "food security", and Cobbett shows the food being "carried away" to others. They differ in tone. Source A is serious and controlled, while Cobbett is furious, calling it "a hellish system" and ending with the claim that otherwise "the devil himself is a saint."',
              'Grade 6-7':
                'Both writers value farming as the work on which a whole nation depends, and both argue that the people who do it are treated unjustly, but their methods reflect their different centuries. The writer of Source A combines personal testimony with economic argument: three farmers, each standing for part of the crisis, and a conclusion that widens from farms to the nation, "We lose food security. We lose the ability to feed ourselves." Cobbett works like an accountant who has lost his temper. He calculates, from the census, that one hundred families "raise enough to supply more, and many more, than fifteen hundred families", and then lets the sum speak: "And yet those who do the work are half starved!" His exclamations build to open fury at "a hellish system". Both writers measure the value of farm work by how much it produces and how few people produce it. Source A describes strawberries rotting for want of "enough seasonal workers to pick them"; Cobbett marvels, "What a handful of people to raise such a quantity of food!" They differ in whom they blame. Source A blames supermarkets and imports produced under weaker rules, forces that are driving farmers out of the industry. Cobbett blames taxation: the produce is "carried away to be heaped on the fund-holders, pensioners, soldiers, dead-weight, and other swarms of tax-eaters". The tone of each ending reflects this. Source A insists calmly that the danger is "not a romantic concern", while Cobbett ends with a curse: if such a system does not need "putting an end to, then the devil himself is a saint."',
            },
            markScheme: [
              'Compares attitudes from both sources throughout',
              'Analyses methods used by both writers',
              'Uses evidence from both texts',
              'Shows clear understanding of different perspectives',
              'Top band: perceptive, detailed comparison with sustained critical voice',
            ],
          },
        ],
      },
      {
        id: 'aqa-p2-13-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 45 minutes on this section. Write in full sentences. You are reminded of the need to plan your answer.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p2-13-q5',
            questionNumber: 5,
            questionText:
              '"We should all know exactly where our food comes from and how it is produced. Ignorance about what we eat is no longer acceptable."\n\nWrite a letter to the editor of a national newspaper in which you argue your point of view on this statement.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear argumentative letter that: addresses the statement directly; uses appropriate letter conventions (Dear Sir/Madam, Yours faithfully); uses some persuasive devices (rhetorical questions, examples, statistics); has a clear structure; demonstrates generally accurate spelling and punctuation.',
              'Grade 6-7':
                'A well-crafted letter that: engages with the complexity of food production and consumer responsibility; uses a range of rhetorical techniques appropriate to a formal letter; deploys evidence and examples effectively; demonstrates awareness of audience (editor and readers); shows consistent technical accuracy with ambitious vocabulary.',
              'Grade 8-9':
                'A compelling, assured letter that: offers a nuanced perspective on food transparency, economic realities, and ethical consumption; crafts a distinctive voice appropriate to the form; deploys rhetorical strategies with precision; uses counter-argument effectively; demonstrates extensive vocabulary and varied syntax; shows technical virtuosity throughout.',
            },
            markScheme: [
              'AO5 (24 marks): Clear, effective communication matched to form, purpose, audience',
              'AO5: Structured argument with coherent paragraphing',
              'AO6 (16 marks): Accurate sentence demarcation',
              'AO6: Range of punctuation used effectively',
              'AO6: Accurate spelling of ambitious vocabulary',
              'AO6: Varied sentence forms for purpose and effect',
            ],
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
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${EXAM14_SOURCE_A_REF}\nSource B: ${EXAM14_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p2-14-q1',
            questionNumber: 1,
            questionText:
              'Read again Source A, the first paragraph.\n\nChoose four statements below which are TRUE.\n\nA) The writer compares professional sport to capitalism.\nB) The Premier League is described as a sporting competition.\nC) Some clubs are backed by sovereign wealth funds.\nD) Ticket prices at the Emirates are affordable.\nE) Communities are being priced out of stadiums.\nF) The writer says the beautiful game is open to everyone.\nG) The writer supports the current financial model.\nH) Billionaire oligarchs are involved in club ownership.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${EXAM14_SOURCE_A}\n\nSource B:\n${EXAM14_SOURCE_B}`,
            extractSource: `Source A: ${EXAM14_SOURCE_A_REF} | Source B: ${EXAM14_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'A, C, E, H - A: "a laboratory for everything that is wrong with modern capitalism." C: "clubs backed by sovereign wealth funds." E: "communities those clubs were built to serve are priced out of their own stadiums." H: "billionaire oligarchs."',
            },
            markScheme: [
              '1 mark for each correct answer',
              'Maximum 4 marks',
              'No marks for incorrect selections',
            ],
          },
          {
            id: 'aqa-p2-14-q2',
            questionNumber: 2,
            questionText:
              "You need to refer to Source A and Source B for this question.\n\nUse details from both sources. Write a summary of the similarities and differences in the writers' views on what sport reveals about human nature.",
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'summary',
            extract: `Source A:\n${EXAM14_SOURCE_A}\n\nSource B:\n${EXAM14_SOURCE_B}`,
            extractSource: `Source A: ${EXAM14_SOURCE_A_REF} | Source B: ${EXAM14_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'The two writers see very different things in sport. Source A sees modern professional sport as revealing greed: it calls it "exploitation dressed in the language of aspiration" and says young players are "discarded". Source B, by Hazlitt, sees a bare-knuckle fight as revealing courage: when two men who have been "smashed to the ground" get up and fight on, he calls it "the high and heroic state of man". Both writers admit that sport has a dark side. Source A shows the harm done to children in academies, and Hazlitt describes Hickman\'s face as "a death\'s head, spouting blood". However, Hazlitt admires the fighters for enduring this, while Source A blames the system for the harm. Hazlitt also challenges people who look down on boxing to show "as much pluck" themselves.',
              'Grade 6-7':
                'The writers draw opposite conclusions about what competitive sport shows us, partly because they look at different things. The writer of Source A looks at the system around professional football and sees it revealing the worst of us: clubs in "a financial arms race", and academies that take boys "as young as nine" and release most of them "with no qualifications, no fallback, and a shattered sense of identity". Hazlitt looks at the fighters themselves and sees the best. What astonishes him is not the violence but the recovery from it: men "smashed to the ground, smeared with gore, stunned, senseless" who rise "with new strength and courage". That, he says, "is the high and heroic state of man". Both writers acknowledge suffering. Source A describes psychological damage; Hazlitt describes physical ruin in unflinching detail, Hickman\'s face "like a human skull" and a mouth that "gaped blood". The difference lies in what each makes of it. For Source A, suffering is inflicted on the young by adults who profit from them, and we "forget the hundred" who fail. For Hazlitt, suffering chosen and endured shows character, and he admires even the beaten man, who "fought on after this for several rounds". His final challenge is aimed at the spectator who disapproves: "Ye who despise the Fancy" should "do something to shew as much pluck, or as much self-possession as this". Source A turns its scrutiny on the spectator from the other direction: "we cheer it on from the stands".',
            },
            markScheme: [
              'Must reference both sources',
              'Identifies clear differences and/or similarities',
              'Uses evidence from both texts',
              'Synthesises rather than alternates between texts',
              'Infers beyond surface-level details',
            ],
          },
          {
            id: 'aqa-p2-14-q3',
            questionNumber: 3,
            questionText:
              'You now need to refer only to Source A.\n\nHow does the writer use language to present professional sport as morally corrupt?',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: `Source A:\n${EXAM14_SOURCE_A}`,
            extractSource: EXAM14_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses the metaphor "laboratory" to compare sport to a scientific experiment, suggesting something cold and unnatural. The phrase "financial arms race" makes football sound like a war about money rather than a sport. The writer uses contrast between the cost of a season ticket and "nearly a month\'s wages for a worker" to show the unfairness. The phrase "the beautiful game has become the exclusive game" is effective because it changes a well-known saying to make a new point about how football has become only for the rich.',
              'Grade 6-7':
                'The writer constructs professional sport as a system of concealed exploitation through a sustained semantic field of corruption and deception. The opening metaphor - "a laboratory for everything that is wrong with modern capitalism" - is precisely chosen: a laboratory is a controlled environment where experiments are conducted on subjects, positioning athletes as test subjects rather than participants. The phrase "financial arms race" combines the lexis of warfare with economics, suggesting that spending has become weaponised. The paragraph\'s most devastating technique is the redefinition: "The beautiful game has become the exclusive game" - the substitution of a single adjective transforms celebration into critique. The second paragraph exposes the exploitation of youth through deliberately clinical language: "recruit," "subject," "release" form a lexical chain borrowed from institutional processing. The parenthesis "children, really", set off by dashes, is a calculated interruption - the aside mimics the way society pushes this uncomfortable truth to the margins. The ratio "for every player who makes it, there are a hundred who are discarded" uses the passive voice "discarded" to deny agency, framing young people as waste products of an industrial process. The final paragraph performs its most sophisticated manoeuvre by conceding ("I am not against competition") before redefining: "exploitation dressed in the language of aspiration" is a metaphor of disguise that positions the entire sporting industry as a confidence trick.',
              'Grade 8-9':
                'The writer systematically unpicks the language of sport - aspiration, competition, opportunity - revealing exploitation beneath each term. The controlling metaphor of "laboratory" in the opening sentence is multivalent: it suggests experimentation (on human subjects), controlled conditions (that benefit the experimenter, not the subject), and the clinical detachment of profit-driven observation. The subsequent "financial arms race" extends the semantic field of systemic violence, while the specification of "sovereign wealth funds and billionaire oligarchs" roots the abstraction in identifiable power structures. The paragraph\'s rhetorical climax - "The beautiful game has become the exclusive game" - achieves its force through minimal substitution: a single adjective change transforms a cliché of affection into an indictment, the matching length of "beautiful" and "exclusive" (three syllables each) making the corruption sound almost natural. The second paragraph\'s most devastating technique is the chronological compression of an academy career into a single sentence: "recruit boys as young as nine... subject them to years of intense physical and psychological pressure... release the vast majority at sixteen or seventeen". The verbs form a euphemistic lifecycle that, when stripped of sporting context, reads as institutional abuse. The parenthesis "children, really" weaponises the aside form: its informality mimics the reader\'s own suppressed awareness, the adverb "really" functioning as a gentle insistence on a truth we prefer to avoid. The final paragraph\'s definition - "exploitation dressed in the language of aspiration" - operates as the essay\'s thesis in miniature: the clothing metaphor suggests that aspiration is not merely co-opted but actively worn as camouflage, a deliberate rhetorical strategy employed by those who profit from young people\'s dreams.',
            },
            markScheme: [
              'Analyses persuasive language techniques in detail',
              'Comments on the effect of specific words and phrases',
              'Considers how language positions the reader',
              'Uses subject terminology accurately and precisely',
              'Top band: perceptive, detailed, conceptualised analysis',
            ],
          },
          {
            id: 'aqa-p2-14-q4',
            questionNumber: 4,
            questionText:
              'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their contrasting attitudes to competition and its effects.\n\nIn your answer, you could:\n- compare their different attitudes\n- compare the methods they use to convey their attitudes\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${EXAM14_SOURCE_A}\n\nSource B:\n${EXAM14_SOURCE_B}`,
            extractSource: `Source A: ${EXAM14_SOURCE_A_REF} | Source B: ${EXAM14_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'The two writers have opposite views on competition. Source A thinks professional sport has become corrupt, calling it "a laboratory for everything that is wrong with modern capitalism". Hazlitt thinks the fight he watched showed people at their best: "the high and heroic state of man". Source A uses facts and examples, such as ticket prices and football academies, to criticise sport, while Hazlitt uses vivid description of the fight, including Hickman\'s bloody face, to show what the fighters endured. Both writers deal with the moral argument. Source A says "I am not against competition" but attacks exploitation, while Hazlitt argues against people who "despise the Fancy". Source A ends with a warning about what happens to a boy whose dream collapses, while Hazlitt ends by challenging his critics to show the same courage.',
              'Grade 6-7':
                'The writers hold opposing views of competition, and their methods suit their purposes. The writer of Source A is prosecuting a system. The lexis comes from economics and warfare ("financial arms race", "sovereign wealth funds and billionaire oligarchs"), and the evidence is gathered like a case: ticket prices, academy recruitment, the ratio of "a hundred who are discarded" to every success. Hazlitt, writing in 1822, is bearing witness to an event. His method is description so close that the reader seems to stand at the ringside: Neate\'s "tremendous lunge", Hickman hanging "suspended for a second or two" before falling back "with his face lifted up to the sky". The description is unsparing, and Hazlitt reaches for literature to measure it, comparing the beaten man to "one of the figures in Dante\'s Inferno". Both writers anticipate objections. Source A concedes that "Competition is fundamental to human flourishing" before separating true competition from "exploitation dressed in the language of aspiration". Hazlitt concedes nothing to his critics: he turns on them in the second person, with the archaic "Ye" of a preacher, and accuses them of claiming "a superiority which you have never given a single proof of". The deepest difference is in what competition does to people. For Source A it damages them, above all the young: "we will not be there to catch him." For Hazlitt it reveals them, and the effect of the fight is to show "the high and heroic state of man".',
            },
            markScheme: [
              'Compares attitudes from both sources throughout',
              'Analyses methods used by both writers',
              'Uses evidence from both texts',
              'Shows clear understanding of different perspectives',
              'Top band: perceptive, detailed comparison with sustained critical voice',
            ],
          },
        ],
      },
      {
        id: 'aqa-p2-14-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 45 minutes on this section. Write in full sentences. You are reminded of the need to plan your answer.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p2-14-q5',
            questionNumber: 5,
            questionText:
              '"Competitive sport builds character and teaches young people valuable life lessons. Every child should be encouraged to compete."\n\nWrite an article for a magazine aimed at parents in which you argue your point of view on this statement.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear argumentative article that: addresses the statement directly; uses some persuasive devices (rhetorical questions, anecdotes, direct address); has a clear structure with headline, introduction, body, and conclusion; demonstrates generally accurate spelling and punctuation; adopts an appropriate register for a parenting magazine.',
              'Grade 6-7':
                'A well-crafted article that: engages with both the benefits and risks of competitive sport for young people; uses a range of rhetorical techniques appropriate to the form; deploys evidence, examples, and personal experience effectively; demonstrates awareness of the parent audience; shows consistent technical accuracy with ambitious vocabulary.',
              'Grade 8-9':
                'A compelling, assured article that: offers a nuanced perspective balancing the developmental value of competition with the psychological risks of excessive pressure; crafts a distinctive voice appropriate to the form and audience; deploys rhetorical strategies with precision; uses counter-argument to strengthen the position; demonstrates extensive vocabulary and varied syntax; shows technical virtuosity throughout.',
            },
            markScheme: [
              'AO5 (24 marks): Clear, effective communication matched to form, purpose, audience',
              'AO5: Structured argument with coherent paragraphing',
              'AO6 (16 marks): Accurate sentence demarcation',
              'AO6: Range of punctuation used effectively',
              'AO6: Accurate spelling of ambitious vocabulary',
              'AO6: Varied sentence forms for purpose and effect',
            ],
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
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${EXAM15_SOURCE_A_REF}\nSource B: ${EXAM15_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p2-15-q1',
            questionNumber: 1,
            questionText:
              'Read again Source A, the first paragraph.\n\nChoose four statements below which are TRUE.\n\nA) Arts education is being dismantled.\nB) Arts GCSE entries have risen since 2010.\nC) Drama entries have dropped by 48%.\nD) Music entries have increased by 35%.\nE) The decline has happened since 2010.\nF) The writer says the decline is accidental.\nG) The writer calls the fall in entries a statistical fluctuation.\nH) Creativity has been treated as a luxury.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${EXAM15_SOURCE_A}\n\nSource B:\n${EXAM15_SOURCE_B}`,
            extractSource: `Source A: ${EXAM15_SOURCE_A_REF} | Source B: ${EXAM15_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'A, C, E, H - A: "Arts education is being systematically dismantled." C: "Drama entries have dropped by 48%." E: "Since 2010." H: "creativity is a luxury, not a necessity."',
            },
            markScheme: [
              '1 mark for each correct answer',
              'Maximum 4 marks',
              'No marks for incorrect selections',
            ],
          },
          {
            id: 'aqa-p2-15-q2',
            questionNumber: 2,
            questionText:
              'You need to refer to Source A and Source B for this question.\n\nUse details from both sources. Write a summary of the similarities and differences in how the two writers argue for the value of the arts.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'summary',
            extract: `Source A:\n${EXAM15_SOURCE_A}\n\nSource B:\n${EXAM15_SOURCE_B}`,
            extractSource: `Source A: ${EXAM15_SOURCE_A_REF} | Source B: ${EXAM15_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers argue that the arts are valuable, but they give different reasons. Source A argues that the arts are worth money, since the creative industries contribute "over a hundred billion pounds" to the economy, and that they give young people a way to express feelings, like the teenager "who cannot articulate her grief but can paint it". Source B, by Ruskin, argues that art is valuable because it is connected to truth and to use: it "gives Form to knowledge, and Grace to utility". Both writers reject the idea that art is a luxury. Source A objects to treating creativity as "a luxury, not a necessity", and Ruskin says art "must never exist alone". However, Source A values art partly as a way of expressing yourself, while Ruskin says art is of an "inferior kind" unless it states a truth or makes something useful better.',
              'Grade 6-7':
                'Both writers defend the arts against the charge that they are an indulgence, but their defences rest on different ideas of what art is for. The writer of Source A argues on two levels. The first is economic, meeting critics on their own ground: the creative industries contribute "over a hundred billion pounds" and employ "over two million people". The second is personal: art is "a language" for "what cannot be expressed in essays or equations", a lifeline for the grieving teenager and the restless boy. Ruskin, lecturing at Oxford in 1870, also refuses to treat art as a luxury, but not because it is profitable or expressive. For him art is valuable when it serves: it "gives Form to knowledge, and Grace to utility", making visible what science cannot describe and adding "delightfulness and worth to the implements of daily use". He also sets a condition that Source A never sets: art pursued for its own sake is "of inferior kind", however "pleasant, wonderful or impressive" it may be. The similarity is therefore real but limited. Both writers join art to everyday life: Source A to the timetable and the job market, Ruskin to "dress, furniture and lodging". The difference is that Source A treats self-expression as one of the highest purposes of art, while Ruskin would judge a work by whether it states "a true thing" or adorns "a serviceable one".',
            },
            markScheme: [
              'Must reference both sources',
              'Identifies clear differences and/or similarities',
              'Uses evidence from both texts',
              'Synthesises rather than alternates between texts',
              'Infers beyond surface-level details',
            ],
          },
          {
            id: 'aqa-p2-15-q3',
            questionNumber: 3,
            questionText:
              'You now need to refer only to Source A.\n\nHow does the writer use language to argue that the decline in arts education is both damaging and unjust?',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: `Source A:\n${EXAM15_SOURCE_A}`,
            extractSource: EXAM15_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses the adverb "systematically" in "systematically dismantled" to suggest the destruction of arts education is deliberate and planned. Statistics like "40%," "48%" and "35%" shock the reader with the scale of decline. The phrase "an optional extra" shows how the curriculum wrongly treats the arts as unimportant. The writer uses emotional examples of the "teenager who cannot articulate her grief but can paint it" and the "boy who cannot sit still in a classroom but can lose himself for hours in a drum kit" to show that the arts help real people in important ways.',
              'Grade 6-7':
                'The writer constructs the argument through a rhetorical strategy that first dismantles the opposition\'s economic argument, then reveals the deeper human cost that economics cannot capture. The opening sentence\'s passive construction - "is being systematically dismantled" - is carefully chosen: the passive voice implies a perpetrator who remains unnamed, while "systematically" transforms what might be seen as neglect into calculated destruction. The statistical tricolon ("40%... 48%... 35%") gives the decline a hammering rhythm, and the clipped final fragment, "Music by 35%", drops even the verb, as if the losses no longer needed explaining. The second paragraph executes an audacious rhetorical pivot: having established the scale of the decline, the writer attacks the economic objection on its own territory. The specification that creative industries contribute "more than aerospace, automotive, and life sciences combined" is devastating precisely because it compares art to the industries most revered by utilitarian thinkers. The phrase "subjects that actually matter" deploys sarcasm by echoing the system\'s own voice - the contempt is not the writer\'s but the system\'s, and by ventriloquising it the writer exposes its absurdity. The final paragraph\'s most powerful technique is the metaphor of art as "a language": this reframes cutting arts education not as removing a subject but as silencing a form of communication. The two specific examples - the grieving teenager, the restless boy - are precisely chosen to represent populations typically failed by conventional education, making the cut personal and unjust. The final image, of lifelines being cut "with the smiling efficiency of people who have never needed them," concentrates the essay\'s anger into a single devastating accusation of privileged indifference.',
              'Grade 8-9':
                'The writer\'s linguistic strategy operates through a series of redefinitions that progressively reframe arts education from peripheral luxury to essential human infrastructure. The opening verb phrase "systematically dismantled" sets the register: "dismantled" implies a structure being deliberately taken apart, while "systematically" denies any defence of accidental neglect. The adverb transforms policy into sabotage. The statistical evidence - "40%... 48%... 35%" - functions not merely as proof but as a rhetorical device: three sentences, each shorter than the last and the last without a verb, their proximity replicating the cumulative nature of the cuts. The sentence "These are not statistical fluctuations" performs the act of interpretive insistence: the negation forces the reader to abandon the comfortable explanation before the writer supplies the uncomfortable one ("deliberate policy choices"). The second paragraph\'s masterful move is to colonise the opposition\'s territory. By demonstrating that creative industries outperform "aerospace, automotive, and life sciences combined," the writer does not merely counter the economic argument but humiliates it, using the comparison to industries associated with rigour and productivity to expose the intellectual laziness of dismissing the arts. The verb phrase "told an entire generation" positions policy as a form of speech act, making the curriculum itself a rhetorical device that communicates values. The final paragraph\'s controlling metaphor - art as "a language" - achieves its power through what it implies: that removing it is an act of silencing, and that those silenced are specifically the most vulnerable ("the teenager who cannot articulate her grief"). The closing image is the essay\'s most concentrated moment of moral accusation: "the smiling efficiency of people who have never needed them" compresses privilege, indifference, and cruelty into a single phrase, the unsettling pairing of "smiling" with "efficiency" making the perpetrators more disturbing for their pleasant competence.',
            },
            markScheme: [
              'Analyses persuasive language techniques in detail',
              'Comments on the effect of specific words and phrases',
              'Considers how language positions the reader',
              'Uses subject terminology accurately and precisely',
              'Top band: perceptive, detailed, conceptualised analysis',
            ],
          },
          {
            id: 'aqa-p2-15-q4',
            questionNumber: 4,
            questionText:
              'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their attitudes towards the value of the arts and what the arts are for.\n\nIn your answer, you could:\n- compare their different attitudes\n- compare the methods they use to convey their attitudes\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${EXAM15_SOURCE_A}\n\nSource B:\n${EXAM15_SOURCE_B}`,
            extractSource: `Source A: ${EXAM15_SOURCE_A_REF} | Source B: ${EXAM15_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers believe the arts matter. Source A uses modern statistics to show the arts are important to the economy ("over a hundred billion pounds") and emotional examples to show they matter to young people. Ruskin, in Source B, uses the calm, formal language of a university lecture to explain what art is for: "the entire vitality of art depends upon its being either full of truth, or full of use". Both writers disagree with people who think art is unimportant. Source A attacks the idea that art is "an optional extra", and Ruskin says art gives "delightfulness and worth" to the objects of everyday life. The main difference is that Source A is angry and urgent, accusing those who cut arts education of "smiling efficiency", while Ruskin is calm and explains his ideas step by step, as a teacher would.',
              'Grade 6-7':
                'Both writers value the arts highly, but they convey that value in different voices and for different reasons. The writer of Source A writes as a campaigner under pressure. The lexis is urgent and accusatory ("systematically dismantled", "cutting them"), and the argument is built from evidence meant to win a public debate: entries falling since 2010, the size of the creative industries. The deepest claim is that art is "a language" and a lifeline, and the closing image, of lifelines cut "with the smiling efficiency of people who have never needed them", turns the argument into an accusation. Ruskin writes as a professor addressing students, and his method is definition. He divides the "offices" of art into two, "Form to knowledge, and Grace to utility", and then explains each in balanced, parallel clauses: "it gives precision and charm to truth; in the second it gives precision and charm to service." Where Source A persuades by emotion and statistics, Ruskin persuades by the confident statement of principle, presenting the pleasure we take in useful things as "a law of nature". Their attitudes also differ. Source A defends art that lets young people express "what cannot be expressed in essays or equations"; Ruskin is wary of art valued only as pleasure, saying it "must never exist alone" and exists "rightly only when it is the means of knowledge, or the grace of agency for life". What unites them is the belief that art is not an extra but part of how people learn and live: for Source A a language, for Ruskin a way of giving "Form to truth".',
            },
            markScheme: [
              'Compares attitudes from both sources throughout',
              'Analyses methods used by both writers',
              'Uses evidence from both texts',
              'Shows clear understanding of different perspectives',
              'Top band: perceptive, detailed comparison with sustained critical voice',
            ],
          },
        ],
      },
      {
        id: 'aqa-p2-15-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 45 minutes on this section. Write in full sentences. You are reminded of the need to plan your answer.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p2-15-q5',
            questionNumber: 5,
            questionText:
              '"The arts are a waste of time and money in schools. Students would be better off focusing on maths, science, and technology - the subjects that will actually get them jobs."\n\nWrite a speech to be delivered at a public debate in which you argue your point of view on this statement.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear argumentative speech that: addresses the statement directly and takes a clear position; uses some persuasive devices (rhetorical questions, direct address, emotive language); has a clear structure with opening, body paragraphs, and conclusion; demonstrates generally accurate spelling and punctuation; adopts an appropriate register for a public debate.',
              'Grade 6-7':
                'A well-crafted speech that: engages critically with both the economic and human arguments for and against arts education; uses a range of rhetorical techniques appropriate to debate (tricolon, anaphora, counter-argument, shifts in register); deploys evidence and examples effectively; demonstrates awareness of the debate audience; shows consistent technical accuracy with ambitious vocabulary.',
              'Grade 8-9':
                'A compelling, assured speech that: offers a nuanced perspective that engages with the complexity of education funding, employability, and human development; crafts a distinctive and authoritative speaking voice; deploys rhetorical strategies with precision, including pauses, repetition, concession, and audience engagement; demonstrates extensive vocabulary and varied syntax; shows technical virtuosity throughout; uses counter-argument not as a concession but as a springboard for a more powerful case.',
            },
            markScheme: [
              'AO5 (24 marks): Clear, effective communication matched to form, purpose, audience',
              'AO5: Structured argument with coherent paragraphing',
              'AO6 (16 marks): Accurate sentence demarcation',
              'AO6: Range of punctuation used effectively',
              'AO6: Accurate spelling of ambitious vocabulary',
              'AO6: Varied sentence forms for purpose and effect',
            ],
          },
        ],
      },
    ],
  },
]
