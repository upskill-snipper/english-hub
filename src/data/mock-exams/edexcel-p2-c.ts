// @ts-nocheck
//
// WHAT WAS WRONG, AND WHAT WAS DONE (27 September 2026)
//
// Every Source B in this file was invented and printed under a real
// writer's name. scripts/check-mock-exam-extracts.mjs (26 September 2026)
// found none of their sentences in the texts of the person named that it
// could check:
//   - Transport: "From the journal of William Cobbett, published in The
//     Edinburgh Review, 1845". Cobbett died in 1835, and 0 of 14 sentences
//     are in Rural Rides;
//   - Fashion: "a letter by Elizabeth Gaskell to a friend, published
//     posthumously, 1862" (0 of 10 sentences in North and South, the one
//     Gaskell text checked; the letter itself could not be found);
//   - Science: "a private journal, attributed to Thomas Huxley, 1860"
//     (0 of 9 in two volumes of his essays);
//   - Justice: Charles Dickens, "A Visit to the Old Bailey", Household
//     Words, 1850, a piece that is not known to exist (0 of 10 in four
//     collections of his journalism);
//   - Media: "John Stuart Mill, adapted from a lecture on press freedom,
//     1859" (0 of 14 sentences in On Liberty). The model answers to
//     edexcel-p2-15-q3 quoted nine of its invented lines as Mill's, among
//     them "the cornerstone upon which all other liberties rest".
// All five papers are live (in allMockExamPapers), so a student revising
// for a real exam was taught to analyse, and to quote, words that none of
// these writers wrote.
//
// Each is replaced by a genuine passage cut by script, never retyped, from
// the Project Gutenberg text named here, chosen to keep its question's
// focus and a similar length:
//   - Transport: Thackeray, "De Juventute", Roundabout Papers (#2608), on
//     the railway as the line between an old world and a new one. That
//     edition has American spellings ("armor", "modernize"), kept, and
//     "--" for a dash, printed as a dash;
//   - Fashion: Thoreau, Walden, from "Economy" (#205), on the whims of
//     fashion and the factory system;
//   - Science: Huxley's review of the Origin of Species, Westminster
//     Review, April 1860, as reprinted in Lay Sermons, Addresses and
//     Reviews (1870, #16729), on the public's reactions to Darwin's book;
//   - Justice: Dickens, "Criminal Courts", Sketches by Boz (#882), on a
//     trial at the Old Bailey. Two cuts are marked [...];
//   - Media: Mill, On Liberty, Chapter II (#34901). Two cuts are marked
//     [...]; the second leaves out a sentence that the Gutenberg text
//     misprints ("than when in or opposition to it") rather than print the
//     misprint or correct it by hand.
// Every model answer that quoted a Source B was rewritten against its new
// passage. A check of every quotation in the file, of any length, then
// found four in the Source A answers that are not in their extracts
// ("sitting" for "sit", "price tag", and "fix" and "improve" given as if
// the writer had used them); those sentences were corrected, with two wrong
// terms beside them ("present participles" for gerunds, "imperative" for a
// statement). That pass reported every quotation in the file as now in its
// extract; the review below found four that were not.
//
// Five questions were reworded to be true of the real passage: 13-q3
// (Huxley presents the public's reactions and, through them, his own),
// 13-q4 ("the fears it can raise": the passage is not about ethics), 14-q4
// ("the people it judges": Dickens describes an indifferent court, not
// inequality), 15-q3 and 15-q4 (Mill defends freedom of opinion as well as
// of the press, and says nothing of the press's responsibility). 12-q3 now
// names Thoreau.
//
// The Source A labels ("Amira Patel, The Observer, 2024" and the rest)
// named invented writers at real publications. They now say the passages
// were specially written; the passages themselves are unchanged.
//
// REVIEW (27 September 2026). A second reading, against the texts and by
// script, found what the first pass missed:
//   - every question 1 offered five true statements to a student told to
//     choose four, and its model answer credited only four, so a student
//     who chose the fifth was marked wrong for reading correctly. The fifth
//     was H in papers 11 to 14 and F in paper 15; in paper 12 it was a matter
//     of interpretation, which the question 2 answers themselves call a pun.
//     One statement in each is now false, and every false statement is
//     explained;
//   - four quotations of Huxley read "old ladies of both sexes", without the
//     commas he wrote. A check that ignores punctuation passes them;
//   - model answers said things of the words that are not so: that
//     Thackeray uses "questions rather than imperatives" (the last lines of
//     his passage include "Climb up that bank" and "Try and catch
//     yesterday"), that the "competent" naturalists agree with Darwin
//     (Huxley says they respect the book "whatever their opinions" of its
//     doctrines), that "They are not selfish. They are rational" is built of
//     monosyllables, that three words from two paragraphs are one
//     paragraph's "extended metaphor", that a sentence with no second person
//     "directly addresses the reader", that Dickens's dashes "isolate" a word
//     that stands outside them, and that the trial, not "the result of the
//     trial", is a matter of life or death;
//   - nothing glossed the sources. Each Source B now has a glossary, printed
//     with the two questions that send the student to it (savans, the
//     Whitworth gun, ingens patet tellus, operatives, coercion and the like).
//
// NOT FIXED: those Source A passages state figures as fact and credit some
// of them to real bodies (a "2024 Reuters Institute survey", a "2023
// Ministry of Justice report"). Nobody has checked the figures, and the
// Media paper's question 1 is built on the Reuters ones.

import type { MockExamPaper } from './types'

// ─── Source Extracts: Transport ─────────────────────────────────────────────

const TRANSPORT_SOURCE_A = `The age of the private car is over. We simply cannot continue to pretend otherwise. Every morning, millions of drivers sit in stationary traffic, engines idling, pumping carbon dioxide into an atmosphere that is already choking. The average British commuter now spends 227 hours per year behind the wheel - that is nearly ten full days of life, every year, wasted in a metal box, inching forward at speeds that would embarrass a determined pedestrian.

The solution is not better roads. We have been building roads for seventy years and congestion has only worsened, because every new lane fills with new cars within months. The solution is comprehensive, affordable, reliable public transport - the kind that exists in Vienna, in Tokyo, in Zurich, but which Britain has consistently failed to provide. When the bus costs more than the petrol, when the train arrives forty minutes late and charges you sixty pounds for the privilege, people will drive. They are not selfish. They are rational.

I am not suggesting that we ban cars overnight. I am suggesting that we stop subsidising them. Stop building car parks in city centres. Stop widening motorways. Instead, invest in trams, in cycle lanes, in bus routes that actually go where people need to go. The technology exists. The evidence exists. What is lacking is political courage.`

const TRANSPORT_SOURCE_A_REF =
  'Specially written for this practice paper: an opinion article, "Why We Must Rethink the Car", under the invented byline Amira Patel'

const TRANSPORT_SOURCE_B = `We who have lived before railways were made, belong to another world. In how many hours could the Prince of Wales drive from Brighton to London, with a light carriage built expressly, and relays of horses longing to gallop the next stage? Do you remember Sir Somebody, the coachman of the Age, who took our half-crown so affably? It was only yesterday; but what a gulf between now and then! THEN was the old world. Stage-coaches, more or less swift, riding-horses, pack-horses, highwaymen, knights in armor, Norman invaders, Roman legions, Druids, Ancient Britons painted blue, and so forth—all these belong to the old period. I will concede a halt in the midst of it, and allow that gunpowder and printing tended to modernize the world. But your railroad starts the new era, and we of a certain age belong to the new time and the old one. We are of the time of chivalry as well as the Black Prince or Sir Walter Manny. We are of the age of steam. We have stepped out of the old world on to “Brunel's” vast deck, and across the waters ingens patet tellus. Towards what new continent are we wending? to what new laws, new manners, new politics, vast new expanses of liberties unknown as yet, or only surmised? [...] We elderly people have lived in that praerailroad world, which has passed into limbo and vanished from under us. I tell you it was firm under our feet once, and not long ago. They have raised those railroad embankments up, and shut off the old world that was behind them. Climb up that bank on which the irons are laid, and look to the other side—it is gone. There IS no other side. Try and catch yesterday. Where is it?`

const TRANSPORT_SOURCE_B_REF =
  'William Makepeace Thackeray, from "De Juventute", an essay first printed in The Cornhill Magazine and collected in his Roundabout Papers (1863)'

// Each Source B glossary is printed with the questions that send the student
// to Source B, as a real paper glosses a nineteenth-century source (the
// wjec-c2-b convention). The word QUESTION in these names keeps
// scripts/check-mock-exam-extracts.mjs from reading a glossary as a passage.
const TRANSPORT_B_GLOSSARY_FOR_QUESTIONS =
  'Source B glossary: the Age: the name of a stage-coach. half-crown: a coin, here a tip for the coachman. the Black Prince, Sir Walter Manny: English knights of the fourteenth century. Brunel\'s vast deck: the deck of the Great Eastern, the huge steamship designed by Isambard Kingdom Brunel. ingens patet tellus: Latin, "a vast land lies open". wending: making our way. praerailroad: before the railway. limbo: a place of forgotten things.'

// ─── Source Extracts: Fashion ───────────────────────────────────────────────

const FASHION_SOURCE_A = `Fast fashion is not fashion at all. It is industrialised waste dressed up in a crop top. Every year, the UK sends 350,000 tonnes of clothing to landfill - garments worn once, twice, perhaps never, before being discarded like the packaging they increasingly resemble. The average British consumer now buys sixty new items of clothing per year, each worn an average of seven times before being thrown away.

The human cost is equally staggering. In factories across Bangladesh, Cambodia, and Vietnam, workers - predominantly women - stitch garments for twelve hours a day at wages that would not cover a London coffee. The collapse of the Rana Plaza factory in 2013, which killed 1,134 people, briefly shocked the world into attention. Within months, we had returned to our scrolling, our clicking, our next-day deliveries.

I do not blame individuals for buying cheap clothes. When wages are stagnant and the cost of living is soaring, a five-pound T-shirt is not a moral failing - it is economic survival. But I do blame the corporations that have made disposability profitable, and the governments that have allowed them to externalise every cost: environmental, human, moral. The true price of a cheap garment is not printed on its tag.`

const FASHION_SOURCE_A_REF =
  'Specially written for this practice paper: an opinion article, "The Real Cost of Cheap Clothes", under the invented byline Priya Sharma'

const FASHION_SOURCE_B = `The childish and savage taste of men and women for new patterns keeps how many shaking and squinting through kaleidoscopes that they may discover the particular figure which this generation requires today. The manufacturers have learned that this taste is merely whimsical. Of two patterns which differ only by a few threads more or less of a particular color, the one will be sold readily, the other lie on the shelf, though it frequently happens that after the lapse of a season the latter becomes the most fashionable. Comparatively, tattooing is not the hideous custom which it is called. It is not barbarous merely because the printing is skin-deep and unalterable.

I cannot believe that our factory system is the best mode by which men may get clothing. The condition of the operatives is becoming every day more like that of the English; and it cannot be wondered at, since, as far as I have heard or observed, the principal object is, not that mankind may be well and honestly clad, but, unquestionably, that corporations may be enriched. In the long run men hit only what they aim at. Therefore, though they should fail immediately, they had better aim at something high.`

const FASHION_SOURCE_B_REF =
  'Henry David Thoreau, Walden; or, Life in the Woods (1854), from the chapter "Economy"'

const FASHION_B_GLOSSARY_FOR_QUESTIONS =
  'Source B glossary: kaleidoscopes: tubes of mirrors and coloured glass that show changing patterns as they are turned. whimsical: changing for no reason. operatives: factory workers. the English: Thoreau was American; he means the workers in English factories. clad: clothed.'

// ─── Source Extracts: Science & Discovery ───────────────────────────────────

const SCIENCE_SOURCE_A = `We are living through a revolution in genetic science that most people have barely noticed. CRISPR gene-editing technology - a tool that allows scientists to cut, paste, and rewrite DNA with extraordinary precision - has advanced so rapidly that the ethical frameworks meant to govern it have been left gasping in the dust. In 2023 alone, clinical trials using CRISPR successfully treated sickle cell disease, certain cancers, and a form of hereditary blindness. The results were not incremental. They were transformative.

The potential is staggering. Genetic diseases that have caused immeasurable suffering for millennia could, within a generation, be eliminated entirely. Cystic fibrosis. Huntington's disease. Muscular dystrophy. These are not abstract possibilities. They are active research programmes with promising early results.

But here is where the conversation becomes uncomfortable. The same technology that can cure disease can also enhance ability. Stronger muscles. Sharper cognition. Resistance to ageing. If we can edit out a genetic disorder, we can, in principle, edit in an advantage. And if that technology is expensive - as all new medical technology initially is - then we face the prospect of a world in which the wealthy can literally buy better genes for their children. The gap between rich and poor would become not merely economic but biological. This is not science fiction. This is science fact, five to ten years away.`

const SCIENCE_SOURCE_A_REF =
  'Specially written for this practice paper: an opinion article, "The Gene Revolution", under the invented byline Professor James Chen'

const SCIENCE_SOURCE_B = `Mr. Darwin's long-standing and well-earned scientific eminence probably renders him indifferent to that social notoriety which passes by the name of success; but if the calm spirit of the philosopher have not yet wholly superseded the ambition and the vanity of the carnal man within him, he must be well satisfied with the results of his venture in publishing the "Origin of Species." Overflowing the narrow bounds of purely scientific circles, the "species question" divides with Italy and the Volunteers the attention of general society. Everybody has read Mr. Darwin's book, or, at least, has given an opinion upon its merits or demerits; pietists, whether lay or ecclesiastic, decry it with the mild railing which sounds so charitable; bigots denounce it with ignorant invective; old ladies, of both sexes, consider it a decidedly dangerous book, and even savans, who have no better mud to throw, quote antiquated writers to show that its author is no better than an ape himself; while every philosophical thinker hails it as a veritable Whitworth gun in the armory of liberalism; and all competent naturalists and physiologists, whatever their opinions as to the ultimate fate of the doctrines put forth, acknowledge that the work in which they are embodied is a solid contribution to knowledge and inaugurates a new epoch in natural history.`

const SCIENCE_SOURCE_B_REF =
  'Thomas Henry Huxley, from his review "The Origin of Species", The Westminster Review, April 1860, as reprinted in his Lay Sermons, Addresses and Reviews (1870)'

const SCIENCE_B_GLOSSARY_FOR_QUESTIONS =
  "Source B glossary: the carnal man: a person's ordinary human nature, with its appetites and pride. Italy and the Volunteers: two great news stories of 1860, the struggle to unite Italy and the new Volunteer rifle corps in Britain. pietists, whether lay or ecclesiastic: devout people, whether ordinary churchgoers or clergy. railing: scolding. invective: abuse. savans: learned men, scholars. Whitworth gun: a powerful new rifled gun designed by Joseph Whitworth. liberalism: here, free and progressive thought. physiologists: scientists who study how living bodies work. inaugurates a new epoch: begins a new era."

// ─── Source Extracts: Justice & Law ─────────────────────────────────────────

const JUSTICE_SOURCE_A = `The British criminal justice system is not broken. It was built this way. It was designed, over centuries, by and for the privileged, and it continues to serve their interests with remarkable efficiency. If you are wealthy, white, and well-connected, the system offers you representation, mitigation, and second chances. If you are poor, Black, and unknown, it offers you a cell.

The statistics are unambiguous. Black people in England and Wales are seven times more likely to be stopped and searched than white people. They are three and a half times more likely to be arrested. They receive, on average, longer sentences for the same offences. A 2023 Ministry of Justice report found that over 25% of the prison population comes from ethnic minority backgrounds, despite ethnic minorities comprising only 14% of the general population.

I am not suggesting that every police officer is racist or that every judge is biased. The problem is structural, not individual. It is embedded in the algorithms that predict reoffending, in the postcode-based policing that floods deprived areas with officers, in the school-to-prison pipeline that excludes Black boys at three times the rate of their white peers. Reform is not enough. We need to reimagine what justice means - and for whom.`

const JUSTICE_SOURCE_A_REF =
  'Specially written for this practice paper: an opinion article, "Justice for Whom?", under the invented byline Marcus Thompson'

const JUSTICE_SOURCE_B = `Curiosity has occasionally led us into both Courts at the Old Bailey. Nothing is so likely to strike the person who enters them for the first time, as the calm indifference with which the proceedings are conducted; every trial seems a mere matter of business. There is a great deal of form, but no compassion; considerable interest, but no sympathy. [...] Look upon the whole group in the body of the Court—some wholly engrossed in the morning papers, others carelessly conversing in low whispers, and others, again, quietly dozing away an hour—and you can scarcely believe that the result of the trial is a matter of life or death to one wretched being present. But turn your eyes to the dock; watch the prisoner attentively for a few moments; and the fact is before you, in all its painful reality. [...]

The defence is concluded; the judge proceeds to sum up the evidence; and the prisoner watches the countenances of the jury, as a dying man, clinging to life to the very last, vainly looks in the face of his physician for a slight ray of hope. They turn round to consult; you can almost hear the man’s heart beat, as he bites the stalk of rosemary, with a desperate effort to appear composed. They resume their places—a dead silence prevails as the foreman delivers in the verdict—‘Guilty!’ A shriek bursts from a female in the gallery; the prisoner casts one look at the quarter from whence the noise proceeded; and is immediately hurried from the dock by the gaoler. The clerk directs one of the officers of the Court to ‘take the woman out,’ and fresh business is proceeded with, as if nothing had occurred.`

const JUSTICE_SOURCE_B_REF =
  'Charles Dickens, from "Criminal Courts", a sketch of the Old Bailey in Sketches by Boz (1836)'

const JUSTICE_B_GLOSSARY_FOR_QUESTIONS =
  "Source B glossary: the Old Bailey: London's central criminal court. the dock: the enclosure where the prisoner stands during a trial. countenances: faces. rosemary: a sweet-smelling herb; herbs were strewn on the ledge of the dock in front of the prisoner. foreman: the member of the jury who speaks for it. gaoler: jailer, a prison officer."

// ─── Source Extracts: Media & Press ─────────────────────────────────────────

const MEDIA_SOURCE_A = `Trust in journalism is collapsing, and journalists have only themselves to blame. A 2024 Reuters Institute survey found that just 29% of British adults trust the news media - the lowest figure since records began. Among 18-to-24-year-olds, the figure drops to 16%. An entire generation has decided that the mainstream press is not worth believing, and the consequences for democracy are profound.

The causes are not mysterious. Decades of phone hacking, of invented quotes, of front pages designed to inflame rather than inform, have eroded the moral authority that journalism once claimed. The tabloid press, in particular, has treated truth as an optional extra - something to be deployed when convenient and discarded when it interferes with a good story. The Leveson Inquiry exposed the rot, but the recommended reforms were quietly shelved, and the industry returned to business as usual.

Meanwhile, social media has created a parallel information ecosystem in which anyone can publish anything, and the most outrageous claims travel fastest. Into this vacuum of trust, conspiracy theories, misinformation, and propaganda have flooded with devastating effect. The solution is not censorship. The solution is journalism that earns trust back - through accuracy, accountability, and a willingness to admit when it gets things wrong.`

const MEDIA_SOURCE_A_REF =
  'Specially written for this practice paper: an opinion article, "Who Killed Trust?", under the invented byline Rachel Okonkwo'

const MEDIA_SOURCE_B = `The time, it is to be hoped, is gone by, when any defence would be necessary of the "liberty of the press" as one of the securities against corrupt or tyrannical government. No argument, we may suppose, can now be needed, against permitting a legislature or an executive, not identified in interest with the people, to prescribe opinions to them, and determine what doctrines or what arguments they shall be allowed to hear. [...] Let us suppose, therefore, that the government is entirely at one with the people, and never thinks of exerting any power of coercion unless in agreement with what it conceives to be their voice. But I deny the right of the people to exercise such coercion, either by themselves or by their government. The power itself is illegitimate. The best government has no more title to it than the worst. [...] If all mankind minus one, were of one opinion, and only one person were of the contrary opinion, mankind would be no more justified in silencing that one person, than he, if he had the power, would be justified in silencing mankind. Were an opinion a personal possession of no value except to the owner; if to be obstructed in the enjoyment of it were simply a private injury, it would make some difference whether the injury was inflicted only on a few persons or on many. But the peculiar evil of silencing the expression of an opinion is, that it is robbing the human race; posterity as well as the existing generation; those who dissent from the opinion, still more than those who hold it. If the opinion is right, they are deprived of the opportunity of exchanging error for truth: if wrong, they lose, what is almost as great a benefit, the clearer perception and livelier impression of truth, produced by its collision with error.`

const MEDIA_SOURCE_B_REF =
  'John Stuart Mill, On Liberty (1859), from Chapter II, "Of the Liberty of Thought and Discussion"'

const MEDIA_B_GLOSSARY_FOR_QUESTIONS =
  'Source B glossary: securities: protections. tyrannical: ruling cruelly and unjustly. legislature: the body that makes the laws, such as Parliament. executive: the part of government that carries out the laws. coercion: forcing people by threats or punishment. illegitimate: without any rightful authority. title: right. posterity: future generations.'

// ─── Exam Papers ────────────────────────────────────────────────────────────

export const edexcelP2C: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 11 - Transport
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p2-11',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-Fiction and Transactional Writing',
    subtitle: 'English Language 1EN0/02',
    code: '1EN0/02',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p2-11-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${TRANSPORT_SOURCE_A_REF}\nSource B: ${TRANSPORT_SOURCE_B_REF}`,
        totalMarks: 36,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-p2-11-q1',
            questionNumber: 1,
            questionText:
              'Read again Source A, lines 1-5.\n\nChoose four statements below which are TRUE.\n\nA) The writer believes the age of the private car is over.\nB) Millions of drivers sit in moving traffic each morning.\nC) The average commuter spends 227 hours per year driving.\nD) Carbon dioxide is being pumped into the atmosphere.\nE) Commuters travel at speeds faster than walking.\nF) The writer describes the car as a metal box.\nG) British commuters spend twenty full days driving each year.\nH) Engines are switched off in stationary traffic.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${TRANSPORT_SOURCE_A}\n\nSource B:\n${TRANSPORT_SOURCE_B}`,
            extractSource: `Source A: ${TRANSPORT_SOURCE_A_REF} | Source B: ${TRANSPORT_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'A, C, D, F - A: "The age of the private car is over." C: "The average British commuter now spends 227 hours per year behind the wheel." D: "pumping carbon dioxide into an atmosphere." F: "wasted in a metal box." B is false because the traffic is "stationary." E is false because the speeds "would embarrass a determined pedestrian." G is false because it says "nearly ten full days" not twenty. H is false because the engines are "idling", which means they are left running.',
            },
            markScheme: ['1 mark per correct answer, maximum 4'],
          },
          {
            id: 'edexcel-p2-11-q2',
            questionNumber: 2,
            questionText:
              'You need to refer to Source A for this question.\n\nHow does Amira Patel use language to argue that we need to change how we travel?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${TRANSPORT_SOURCE_A}`,
            extractSource: TRANSPORT_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'Patel uses strong, direct language to make her argument. The opening sentence "The age of the private car is over" is a short declarative that sounds definite and unchallengeable. She uses the image of drivers "pumping carbon dioxide into an atmosphere that is already choking," where the personification of the atmosphere "choking" makes pollution seem like suffocation. The statistic "227 hours per year" makes the problem concrete and personal. She calls the car a "metal box," which strips away any glamour and makes driving sound like imprisonment. The phrase "They are not selfish. They are rational" uses two short sentences to defend ordinary people and redirect blame towards the government.',
              'Grade 6-7':
                'Patel constructs her argument through a rhetorical strategy of systematic demystification - stripping the car of its cultural prestige and exposing the reality beneath. The opening declarative, "The age of the private car is over," is deliberately epochal, framing the argument as historical inevitability rather than opinion. A lexical field of waste and decline runs through the opening paragraphs: time is "wasted," the atmosphere is "choking," congestion has "only worsened" - the sense of deterioration is relentless. The parenthetical aside - "nearly ten full days of life, every year" - translates abstract statistics into visceral personal loss, the word "life" elevating the cost from inconvenience to existential theft. Patel\'s syntax mirrors her argument: the tricolon "Stop building car parks in city centres. Stop widening motorways. Instead, invest in trams, in cycle lanes, in bus routes" uses anaphoric repetition to create a sense of clear, actionable alternatives. The final sentence - "What is lacking is political courage" - deploys a cleft structure that syntactically isolates the accusation, making the reader feel the pointed blame.',
              'Grade 8-9':
                'Patel\'s rhetoric operates through a carefully orchestrated deconstruction of the car as cultural object. The opening sentence performs an act of temporal closure - "The age of the private car is over" - that frames the debate not as a matter of policy but of historical necessity. The present tense "is" refuses negotiation. The imagery that follows enacts a systematic degradation: the car becomes a "metal box," drivers are reduced to passive bodies that "sit" and go "inching forward," and the atmosphere is personified as a choking victim. This personification is strategic - it transfers agency from the inanimate (the car, the engine) to the environmental consequence, making the reader complicit in violence. The rhetorical pivot in the second paragraph is masterful: "The solution is not better roads" establishes a negative before the extended positive alternative, a classical structure of refutatio followed by confirmatio. The sentences "They are not selfish. They are rational" deploy two short, parallel statements to effect a sudden shift in blame from individual to institution - the adversative force carried entirely by the substitution of one adjective for another.',
            },
            markScheme: [
              'Analyses language techniques in detail',
              'Comments on specific word choices and their effects',
              'Considers how language persuades the reader',
              'Uses subject terminology accurately',
              'Top band: sophisticated, conceptualised analysis',
            ],
          },
          {
            id: 'edexcel-p2-11-q3',
            questionNumber: 3,
            questionText: `You need to refer to Source B for this question.\n\nHow does the writer use language to convey their mixed feelings about the railways?\n\n(${TRANSPORT_B_GLOSSARY_FOR_QUESTIONS})`,
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source B:\n${TRANSPORT_SOURCE_B}`,
            extractSource: TRANSPORT_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5':
                'Thackeray shows mixed feelings by contrasting the world before the railways with the world after them. He opens with "We who have lived before railways were made, belong to another world," which makes the railway sound like a dividing line in history, as if older people are now strangers in their own time. The exclamation "It was only yesterday; but what a gulf between now and then!" shows his amazement at how fast things have changed: the change is recent, but the distance feels enormous. He is excited by the new age, saying "We are of the age of steam" and asking "Towards what new continent are we wending?", a metaphor of a voyage to a new land that makes the future sound full of possibility. But he also sounds sad about what has been lost. The phrase "passed into limbo and vanished from under us" suggests the old world has disappeared suddenly, like ground pulled away from under his feet. The image of the "railroad embankments" that "shut off the old world" presents the railway as a wall between the past and the present. The short sentences at the end, "Try and catch yesterday. Where is it?", finish on a question that cannot be answered, which shows his sense of loss.',
              'Grade 6-7':
                'Thackeray\'s feelings about the railway are divided between exhilaration at a new age and grief for the one it has ended, and his language keeps both in view at once. The opening declarative, "We who have lived before railways were made, belong to another world," defines a whole generation by the railway, and the pronoun "We" gathers his older readers into a community of survivors. His list of the old world, running from "Stage-coaches, more or less swift, riding-horses, pack-horses, highwaymen" back to "Roman legions, Druids, Ancient Britons painted blue", is comic in its sweep: by setting the coaches of his youth beside the Druids, he suggests that the coaching age has more in common with ancient Britain than with the railway. The claim that "your railroad starts the new era" ranks the railway above "gunpowder and printing", which only "tended to modernize the world". His excitement is real. The metaphor of having "stepped out of the old world" on to Brunel\'s "vast deck", and the question "Towards what new continent are we wending?", turn the present into a voyage of discovery, and the repetition in "new laws, new manners, new politics, vast new expanses of liberties unknown as yet, or only surmised" builds anticipation while admitting that nobody knows the destination. The last part of the extract turns to loss. The old world "has passed into limbo and vanished from under us", and "it was firm under our feet once" makes the past solid ground that has been taken away. The railway embankment becomes a barrier: climb it and "look to the other side", and "it is gone". The emphatic capitals of "There IS no other side" and the short sentences that close the passage, "Try and catch yesterday. Where is it?", slow the rhythm to a halt, so that a piece which began in wonder ends in bewilderment.',
            },
            markScheme: [
              'Analyses language techniques in detail',
              'Comments on specific word choices and their effects',
              'Explores how language conveys attitudes and feelings',
              'Uses subject terminology accurately',
              'Top band: sophisticated, conceptualised analysis',
            ],
          },
          {
            id: 'edexcel-p2-11-q4',
            questionNumber: 4,
            questionText: `For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different perspectives on transport and progress.\n\nIn your answer, you could:\n- compare their different perspectives\n- compare the methods they use to convey their perspectives\n- support your response with references to both texts.\n\n(${TRANSPORT_B_GLOSSARY_FOR_QUESTIONS})`,
            marks: 16,
            suggestedTimeMinutes: 22,
            questionType: 'comparison',
            extract: `Source A:\n${TRANSPORT_SOURCE_A}\n\nSource B:\n${TRANSPORT_SOURCE_B}`,
            extractSource: `Source A: ${TRANSPORT_SOURCE_A_REF} | Source B: ${TRANSPORT_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers discuss how transport changes the way people live, but they have different perspectives. Patel argues that we must move away from cars and wants better public transport, while Thackeray looks back on the coming of the railways with a mixture of excitement and sadness. Patel uses statistics such as "227 hours per year" to support her argument, while Thackeray uses personal memories, such as "the coachman of the Age, who took our half-crown so affably." Both writers see their own time as a turning point: Patel says "The age of the private car is over," and Thackeray says "your railroad starts the new era." Patel is direct and angry, using commands such as "Stop building car parks in city centres," but Thackeray is more reflective, asking questions such as "Towards what new continent are we wending?" Patel wants the reader to act, while Thackeray accepts that the change has already happened and cannot be undone: "Try and catch yesterday."',
              'Grade 6-7':
                'Patel and Thackeray both write at what they present as the end of an age of transport, but they stand on opposite sides of the change. Patel wants to bring an era to a close: her opening declarative, "The age of the private car is over," is a verdict she is trying to make true. Thackeray records a change that has already happened to him: "We who have lived before railways were made, belong to another world." Reading them together produces an irony: the railway that Thackeray greets as the start of "the new era" is part of the public transport that Patel says Britain "has consistently failed to provide". Their methods reflect their purposes. Patel writes as an advocate. Her prose is declarative and imperative, with the anaphora of "Stop building car parks in city centres. Stop widening motorways." and statistics ("227 hours per year") that treat transport as a problem to be solved. Thackeray writes as an essayist remembering, and his evidence is memory: the Prince of Wales\'s "relays of horses", the coachman "who took our half-crown so affably". Where Patel commands, he wonders. His questions, such as "Towards what new continent are we wending?", have no answer, and even his imperatives ask for the impossible: "Try and catch yesterday." Both writers see progress as a loss as well as a gain, but they place the loss differently. For Patel the loss is present and measurable: "nearly ten full days of life, every year, wasted in a metal box". For Thackeray it is the loss of a whole world, sealed off behind the railway embankment: "There IS no other side." Patel ends by demanding "political courage"; Thackeray ends with a question that cannot be answered, "Where is it?" The endings show how differently the two writers believe change can be controlled.',
            },
            markScheme: [
              'Compares perspectives throughout the response',
              'Analyses methods used by both writers',
              'Uses evidence from both texts',
              'Shows perceptive understanding of both texts',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-11-writing',
        title: 'Section B: Transactional Writing',
        description:
          'You are advised to spend about 45 minutes on this section. Answer BOTH questions.',
        totalMarks: 28,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'edexcel-p2-11-q5',
            questionNumber: 5,
            questionText:
              'Your local council is considering banning cars from the town centre. Write a letter to the council in which you argue for or against this proposal.\n\n(12 marks for content, 4 marks for technical accuracy)',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear letter with: appropriate form features (addresses, date, formal sign-off); a sustained argument with some evidence; generally accurate spelling, punctuation, and grammar; paragraphed structure with topic sentences.',
              'Grade 6-7':
                'A well-crafted letter with: confident formal register; counter-arguments addressed and rebutted; persuasive devices (rhetorical questions, emotive language, statistics); accurate and varied sentence structures; discourse markers guiding the reader through the argument.',
              'Grade 8-9':
                'An assured, compelling letter with: authoritative voice and sophisticated register; nuanced argument acknowledging complexity; strategic deployment of evidence and rhetoric; technical virtuosity in syntax and punctuation; a sense of audience awareness that shapes every paragraph.',
            },
            markScheme: [
              'Content (12 marks): Purpose, audience, form, register',
              'Technical accuracy (4 marks): Spelling, punctuation, grammar, sentence variety',
            ],
          },
          {
            id: 'edexcel-p2-11-q6',
            questionNumber: 6,
            questionText:
              'A travel magazine has asked readers to contribute articles about a journey that changed them.\n\nWrite an article about a journey - real or imagined - that changed how you see the world.\n\n(16 marks for content, 8 marks for technical accuracy)',
            marks: 24,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear article with: appropriate form (headline, opening hook); a narrative that connects a journey to personal change; generally accurate SPaG; paragraphs with some variety of length.',
              'Grade 6-7':
                'A compelling article with: distinctive voice and engaging opening; effective blend of narrative and reflection; structural sophistication (non-linear, thematic); accurate, varied syntax and ambitious vocabulary.',
              'Grade 8-9':
                'An outstanding article with: assured journalistic voice; masterful interweaving of personal experience and broader insight; ambitious, controlled prose style; technical virtuosity; a conclusion that resonates beyond the personal.',
            },
            markScheme: [
              'Content (16 marks): Communication, register, form, organisation',
              'Technical accuracy (8 marks): Sentence demarcation, punctuation range, spelling, sentence variety',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 12 - Fashion
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p2-12',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-Fiction and Transactional Writing',
    subtitle: 'English Language 1EN0/02',
    code: '1EN0/02',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p2-12-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${FASHION_SOURCE_A_REF}\nSource B: ${FASHION_SOURCE_B_REF}`,
        totalMarks: 36,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-p2-12-q1',
            questionNumber: 1,
            questionText:
              'Read again Source A, lines 1-5.\n\nChoose four statements below which are TRUE.\n\nA) The writer says fast fashion is not real fashion.\nB) The UK sends 350,000 tonnes of clothing to charity each year.\nC) Clothing is compared to packaging.\nD) Consumers buy sixty new items of clothing per year.\nE) Each garment is worn an average of seventeen times.\nF) Fast fashion is described as industrialised waste.\nG) All clothing goes to landfill after one wear.\nH) The UK sends 350,000 tonnes of clothing to landfill every month.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${FASHION_SOURCE_A}\n\nSource B:\n${FASHION_SOURCE_B}`,
            extractSource: `Source A: ${FASHION_SOURCE_A_REF} | Source B: ${FASHION_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'A, C, D, F - A: "Fast fashion is not fashion at all." C: "discarded like the packaging they increasingly resemble." D: "The average British consumer now buys sixty new items of clothing per year." F: "industrialised waste dressed up in a crop top." B is false because clothing goes to landfill, not charity. E is false because items are worn "seven times" not seventeen. G is false because each item is worn "an average of seven times before being thrown away." H is false because the text says "Every year", not every month.',
            },
            markScheme: ['1 mark per correct answer, maximum 4'],
          },
          {
            id: 'edexcel-p2-12-q2',
            questionNumber: 2,
            questionText:
              'You need to refer to Source A for this question.\n\nHow does Priya Sharma use language to persuade the reader that fast fashion is harmful?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${FASHION_SOURCE_A}`,
            extractSource: FASHION_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'Sharma uses strong language to shock the reader. The opening sentence "Fast fashion is not fashion at all" is blunt and definitive. The metaphor "industrialised waste dressed up in a crop top" is clever because "dressed up" is a fashion phrase used to describe waste, making fashion seem like a disguise. The statistic "350,000 tonnes" makes the problem seem massive. The reference to the Rana Plaza collapse gives a specific, real example - the number "1,134 people" makes the human cost real. The phrase "briefly shocked the world into attention" uses the adverb "briefly" to criticise how quickly people forget. The final sentence - "The true price of a cheap garment is not printed on its tag" - is a powerful metaphorical statement that contrasts the low price with the hidden costs.',
              'Grade 6-7':
                'Sharma constructs her argument through a rhetorical architecture that moves from the material to the moral. The opening redefinition - "Fast fashion is not fashion at all" - performs an act of linguistic repossession, stripping the word "fashion" of its glamour and replacing it with "industrialised waste." The phrase "dressed up in a crop top" operates as a multi-layered pun: "dressed up" simultaneously evokes disguise and the fashion industry itself, collapsing the distinction between product and problem. The second paragraph shifts register from statistical to narrative with the Rana Plaza reference, moving from the abstract ("350,000 tonnes") to the devastatingly specific ("1,134 people"). The list "our scrolling, our clicking, our next-day deliveries" accelerates through consumer behaviour, the repeated "our" implicating the reader and the gerunds suggesting compulsive, unthinking repetition. The third paragraph\'s strategic concession - "I do not blame individuals" - redirects culpability from consumer to corporation, and the closing epigram turns the literal price "printed on its tag" into a metaphor for moral accountability, the word "true" carrying the weight of the entire argument.',
            },
            markScheme: [
              'Analyses language techniques in detail',
              'Comments on specific word choices and their effects',
              'Considers how language persuades the reader',
              'Uses subject terminology accurately',
              'Top band: sophisticated, conceptualised analysis',
            ],
          },
          {
            id: 'edexcel-p2-12-q3',
            questionNumber: 3,
            questionText: `You need to refer to Source B for this question.\n\nHow does Henry David Thoreau use language to convey his criticism of fashion trends?\n\n(${FASHION_B_GLOSSARY_FOR_QUESTIONS})`,
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source B:\n${FASHION_SOURCE_B}`,
            extractSource: FASHION_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5':
                'Thoreau uses mocking language to show that following fashion is foolish. He calls people\'s love of new styles "The childish and savage taste of men and women for new patterns", which insults fashion-followers by calling their taste immature and uncivilised. The image of people "shaking and squinting through kaleidoscopes" to find the pattern "this generation requires today" makes them look silly, as if they are playing with a toy. He shows that fashion is random when he says the manufacturers know "this taste is merely whimsical": two patterns can differ by only "a few threads more or less of a particular color", yet one sells and the other is left to "lie on the shelf". In the second paragraph his tone becomes more serious. He says "I cannot believe that our factory system is the best mode by which men may get clothing", and claims that the real aim of the industry is "that corporations may be enriched", not that people are "well and honestly clad". The word "honestly" suggests that there is something dishonest about the way clothes are made and sold.',
              'Grade 6-7':
                'Thoreau\'s criticism of fashion moves from satire of the buyer to an attack on the system that profits from him. The opening noun phrase, "The childish and savage taste of men and women for new patterns", condemns fashion before any argument is made: the two adjectives deny that following fashion is either grown-up or civilised, the reverse of what fashion claims for itself. The image of people "shaking and squinting through kaleidoscopes" is precise satire, since a kaleidoscope produces endless patterns that mean nothing, and the alliterative verbs make the search look both frantic and absurd. The phrase "the particular figure which this generation requires today" mocks the idea that a pattern could be required at all. Thoreau then turns to "The manufacturers", who "have learned that this taste is merely whimsical": the verb "learned" suggests that they study the public\'s changeability and profit from it. His example is deliberately tiny, two patterns that "differ only by a few threads", and the irony that the unsold one may, "after the lapse of a season", become "the most fashionable" exposes fashion as arbitrary. The paradox that "tattooing is not the hideous custom which it is called" turns the reader\'s prejudice back on him: the only difference between a tattoo and a fashionable print, Thoreau implies, is that the tattoo\'s printing is "skin-deep and unalterable", so the fashionable buyer is no more civilised than the people he looks down on. The second paragraph moves from mockery to moral argument. The first-person "I cannot believe" introduces a direct challenge to "our factory system", and the antithesis "not that mankind may be well and honestly clad, but, unquestionably, that corporations may be enriched" sets human need against profit, with "unquestionably" allowing no doubt. The closing maxim, "In the long run men hit only what they aim at", turns the criticism into advice: an industry that aims only at profit will achieve nothing better.',
            },
            markScheme: [
              'Analyses language techniques in detail',
              'Comments on specific word choices and their effects',
              'Explores how language conveys attitudes and feelings',
              'Uses subject terminology accurately',
              'Top band: sophisticated, conceptualised analysis',
            ],
          },
          {
            id: 'edexcel-p2-12-q4',
            questionNumber: 4,
            questionText: `For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different perspectives on fashion and its consequences.\n\nIn your answer, you could:\n- compare their different perspectives\n- compare the methods they use to convey their perspectives\n- support your response with references to both texts.\n\n(${FASHION_B_GLOSSARY_FOR_QUESTIONS})`,
            marks: 16,
            suggestedTimeMinutes: 22,
            questionType: 'comparison',
            extract: `Source A:\n${FASHION_SOURCE_A}\n\nSource B:\n${FASHION_SOURCE_B}`,
            extractSource: `Source A: ${FASHION_SOURCE_A_REF} | Source B: ${FASHION_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers criticise the clothing industry, but they focus on different problems. Sharma focuses on waste and on the exploitation of factory workers, while Thoreau mocks people who follow fashion and questions the factory system. Sharma uses statistics such as "350,000 tonnes" and "1,134 people", while Thoreau uses images and comparisons, such as people "shaking and squinting through kaleidoscopes". Both writers blame businesses more than ordinary people: Sharma blames "the corporations that have made disposability profitable", and Thoreau says the aim of the factory system is "that corporations may be enriched". Both also show concern for the people who make the clothes: Sharma writes about workers who "stitch garments for twelve hours a day", and Thoreau warns that the condition of "the operatives", the factory workers, is "becoming every day more like that of the English". Sharma is more sympathetic to shoppers, saying "I do not blame individuals for buying cheap clothes", while Thoreau is harsher and calls their taste "childish and savage".',
              'Grade 6-7':
                'Sharma and Thoreau, writing 170 years apart, reach a strikingly similar conclusion: that the clothing trade serves profit rather than people. Their methods, and their attitudes to the buyer, are very different. Sharma writes as a campaigning journalist and builds her case from evidence: the tonnage sent to landfill, the average number of times a garment is worn, and the "1,134 people" killed at Rana Plaza. Thoreau writes as a philosopher observing human folly, and his evidence is an example from the shop counter: two patterns that "differ only by a few threads", one "sold readily", the other left to "lie on the shelf". Their attitudes to the shopper differ most sharply. Sharma is careful to excuse the individual: "a five-pound T-shirt is not a moral failing - it is economic survival." Thoreau is scornful, calling the taste for new patterns "childish and savage" and picturing shoppers "shaking and squinting through kaleidoscopes". Yet both writers turn from the consumer to the system. Sharma blames "the corporations that have made disposability profitable"; Thoreau\'s antithesis sets "well and honestly clad" against the aim "that corporations may be enriched". Both also look beyond the buyer to the worker: Sharma to the women in Bangladesh, Cambodia and Vietnam, Thoreau to the "operatives", whose condition is "becoming every day more like that of the English". Their endings show the difference in tone. Sharma closes with an epigram about hidden cost, "The true price of a cheap garment is not printed on its tag", while Thoreau closes with a maxim about ambition, advising that men "had better aim at something high". One writer exposes what fashion costs; the other asks what a better aim would be.',
            },
            markScheme: [
              'Compares perspectives throughout the response',
              'Analyses methods used by both writers',
              'Uses evidence from both texts',
              'Shows perceptive understanding of both texts',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-12-writing',
        title: 'Section B: Transactional Writing',
        description:
          'You are advised to spend about 45 minutes on this section. Answer BOTH questions.',
        totalMarks: 28,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'edexcel-p2-12-q5',
            questionNumber: 5,
            questionText:
              'Your school is introducing a strict uniform policy that bans all jewellery, non-black shoes, and any variation from the approved list.\n\nWrite a speech to be given at a school council meeting in which you argue for or against the new policy.\n\n(12 marks for content, 4 marks for technical accuracy)',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear speech with: appropriate form features (direct address, rhetorical questions); a sustained argument for or against the policy; generally accurate SPaG; some awareness of audience.',
              'Grade 6-7':
                'A well-crafted speech with: confident use of rhetorical techniques (tricolon, anaphora, counter-argument); appropriate register for a school council; varied sentence structures; a sense of building towards a persuasive conclusion.',
              'Grade 8-9':
                'An assured, compelling speech with: masterful rhetoric; nuanced argument engaging with multiple perspectives; distinctive personal voice; technical virtuosity; a conclusion that resonates beyond the immediate issue.',
            },
            markScheme: [
              'Content (12 marks): Purpose, audience, form, register',
              'Technical accuracy (4 marks): Spelling, punctuation, grammar, sentence variety',
            ],
          },
          {
            id: 'edexcel-p2-12-q6',
            questionNumber: 6,
            questionText:
              'A lifestyle magazine is publishing a special issue called "What We Wear, Who We Are."\n\nWrite an article exploring the relationship between fashion and identity.\n\n(16 marks for content, 8 marks for technical accuracy)',
            marks: 24,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear article with: appropriate form (headline, opening hook); exploration of how clothes relate to identity; personal examples and observations; generally accurate SPaG.',
              'Grade 6-7':
                'A compelling article with: distinctive journalistic voice; effective use of personal anecdote and wider observation; structural sophistication; accurate, varied syntax and vocabulary.',
              'Grade 8-9':
                'An outstanding article with: assured, engaging voice; insightful exploration of fashion as cultural and personal expression; ambitious, controlled prose; a conclusion that offers a fresh perspective on the topic.',
            },
            markScheme: [
              'Content (16 marks): Communication, register, form, organisation',
              'Technical accuracy (8 marks): Sentence demarcation, punctuation range, spelling, sentence variety',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 13 - Science & Discovery
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p2-13',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-Fiction and Transactional Writing',
    subtitle: 'English Language 1EN0/02',
    code: '1EN0/02',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p2-13-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${SCIENCE_SOURCE_A_REF}\nSource B: ${SCIENCE_SOURCE_B_REF}`,
        totalMarks: 36,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-p2-13-q1',
            questionNumber: 1,
            questionText:
              'Read again Source A, lines 1-6.\n\nChoose four statements below which are TRUE.\n\nA) CRISPR allows scientists to rewrite DNA.\nB) Ethical frameworks have kept pace with genetic science.\nC) The writer calls CRISPR a revolution.\nD) Clinical trials have successfully treated certain cancers.\nE) CRISPR was invented in 2023.\nF) The results of clinical trials were described as incremental.\nG) The technology allows DNA to be cut with precision.\nH) CRISPR has been used to treat every form of blindness.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${SCIENCE_SOURCE_A}\n\nSource B:\n${SCIENCE_SOURCE_B}`,
            extractSource: `Source A: ${SCIENCE_SOURCE_A_REF} | Source B: ${SCIENCE_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'A, C, D, G - A: "rewrite DNA with extraordinary precision." C: "a revolution in genetic science." D: "successfully treated sickle cell disease, certain cancers." G: "cut, paste, and rewrite DNA." B is false because frameworks have been "left gasping in the dust." F is false because results were "not incremental" but "transformative." E is false - 2023 is when trials occurred, not when CRISPR was invented. H is false because the trials treated only "a form of hereditary blindness."',
            },
            markScheme: ['1 mark per correct answer, maximum 4'],
          },
          {
            id: 'edexcel-p2-13-q2',
            questionNumber: 2,
            questionText:
              'You need to refer to Source A for this question.\n\nHow does Professor Chen use language to convey both excitement and concern about genetic technology?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${SCIENCE_SOURCE_A}`,
            extractSource: SCIENCE_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'Chen uses contrasting language to show both excitement and worry. The word "revolution" sounds dramatic and positive, suggesting a huge change. The metaphor of ethical frameworks "left gasping in the dust" makes it sound like ethics cannot keep up, which is worrying. He lists diseases that could be "eliminated entirely" - "Cystic fibrosis. Huntington\'s disease. Muscular dystrophy." - using short sentences that sound definite and hopeful. But the phrase "the conversation becomes uncomfortable" warns the reader that there is a problem. The idea that the rich could "literally buy better genes" is frightening and makes the reader think about inequality. The final sentence - "This is not science fiction. This is science fact" - uses repetition to make the threat feel real and immediate.',
              'Grade 6-7':
                'Chen orchestrates a carefully controlled shift from scientific enthusiasm to ethical alarm, using language that increasingly destabilises the reader\'s comfort. The opening metaphor - "a revolution... that most people have barely noticed" - establishes the paradox of a seismic change occurring beneath public awareness. The personification of ethical frameworks "left gasping in the dust" transforms an abstract institutional failure into a visceral image of exhaustion and defeat. The second paragraph\'s listing of diseases in sentence fragments - "Cystic fibrosis. Huntington\'s disease. Muscular dystrophy." - uses the full stop as a rhetorical hammer, each name carrying the weight of human suffering now potentially ended. The pivot comes with a shift into a conversational register: "But here is where the conversation becomes uncomfortable" breaks the academic tone to signal urgency. The accumulation "Stronger muscles. Sharper cognition. Resistance to ageing" mirrors the disease list but inverts its moral valence - the same syntactic structure now describes enhancement rather than cure. The climactic phrase "not merely economic but biological" escalates inequality to a new, terrifying register, while the closing antithesis - "science fiction... science fact" - collapses the temporal distance between nightmare and reality.',
            },
            markScheme: [
              'Analyses language techniques in detail',
              'Comments on specific word choices and their effects',
              'Explores how language conveys contrasting attitudes',
              'Uses subject terminology accurately',
              'Top band: sophisticated, conceptualised analysis',
            ],
          },
          {
            id: 'edexcel-p2-13-q3',
            questionNumber: 3,
            questionText: `You need to refer to Source B for this question.\n\nHow does the writer use language to present the reactions to Darwin's theory, including his own?\n\n(${SCIENCE_B_GLOSSARY_FOR_QUESTIONS})`,
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source B:\n${SCIENCE_SOURCE_B}`,
            extractSource: SCIENCE_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5':
                'Huxley uses humour and sarcasm to present the different reactions to Darwin\'s book. He begins by saying that Darwin "must be well satisfied with the results of his venture", which tells the reader that the book has been a great success. The phrase "Overflowing the narrow bounds of purely scientific circles" makes the debate sound like a river bursting its banks, showing that everyone is now talking about it. He then lists the people who attack the book and mocks each group. The phrase "bigots denounce it with ignorant invective" uses harsh words to show that these critics do not understand what they are attacking. The phrase "old ladies, of both sexes," is a joke, suggesting that some men are as timid as the old ladies he imagines. He mocks the experts "who have no better mud to throw", a metaphor that makes their criticism sound dirty and childish. In contrast, he uses positive language for the book\'s supporters, who see it as "a veritable Whitworth gun in the armory of liberalism", a military metaphor (a Whitworth gun was a powerful new weapon) that makes the book sound strong and modern. His own view is clear from the way he describes the experts who respect the book: they are "competent", and whatever they think of Darwin\'s ideas, they agree that it is "a solid contribution to knowledge" that "inaugurates a new epoch in natural history".',
              'Grade 6-7':
                'Huxley presents the reactions to Darwin\'s theory through satire that sorts the public into the foolish and the wise, leaving the reader in no doubt which side he is on. He opens with elaborate irony: Darwin\'s "long-standing and well-earned scientific eminence" ought to make him indifferent to fame, "but if the calm spirit of the philosopher have not yet wholly superseded the ambition and the vanity of the carnal man within him, he must be well satisfied". The mock-solemn contrast between the "philosopher" and the "carnal man" gently teases Darwin while establishing the book\'s enormous success. The verb "Overflowing" presents the controversy as a flood that has burst "the narrow bounds of purely scientific circles", and the claim that it "divides with Italy and the Volunteers the attention of general society" ranks a scientific question beside the great public questions of the day. The long final sentence is built as a list of reactions, separated by semicolons, each with a verb that exposes the speaker: pietists "decry it with the mild railing which sounds so charitable", where "sounds" suggests that the charity is only on the surface; "bigots denounce it with ignorant invective", a harsher, alliterative judgement; "old ladies, of both sexes, consider it a decidedly dangerous book", a joke at the expense of timid men as well as women. The savans "who have no better mud to throw", and who claim that "its author is no better than an ape himself", are shown answering an argument with abuse. The sentence then turns on the word "while": "every philosophical thinker hails it as a veritable Whitworth gun in the armory of liberalism". The military metaphor presents the book as the newest and most powerful weapon in a battle of ideas, and the last clause gives the verdict of "all competent naturalists and physiologists", where "competent" implies that the critics are not. By ending on "a new epoch in natural history", Huxley makes the book a turning point, and the shape of the sentence enacts his response: the critics are many and noisy, but the judgement of those who know belongs to Darwin.',
            },
            markScheme: [
              'Analyses language techniques in detail',
              'Comments on specific word choices and their effects',
              'Explores how language conveys attitudes and feelings',
              'Uses subject terminology accurately',
              'Top band: sophisticated, conceptualised analysis',
            ],
          },
          {
            id: 'edexcel-p2-13-q4',
            questionNumber: 4,
            questionText: `For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different perspectives on scientific progress and the fears it can raise.\n\nIn your answer, you could:\n- compare their different perspectives\n- compare the methods they use to convey their perspectives\n- support your response with references to both texts.\n\n(${SCIENCE_B_GLOSSARY_FOR_QUESTIONS})`,
            marks: 16,
            suggestedTimeMinutes: 22,
            questionType: 'comparison',
            extract: `Source A:\n${SCIENCE_SOURCE_A}\n\nSource B:\n${SCIENCE_SOURCE_B}`,
            extractSource: `Source A: ${SCIENCE_SOURCE_A_REF} | Source B: ${SCIENCE_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers discuss an important scientific breakthrough, but they respond to it differently. Chen writes about gene editing, while Huxley writes about Darwin\'s theory. Both show that the science is exciting: Chen calls it "a revolution in genetic science", and Huxley says that Darwin\'s book "inaugurates a new epoch in natural history". However, their attitudes to fear are different. Chen takes the dangers seriously and warns that "the wealthy can literally buy better genes for their children". Huxley makes fun of people who are afraid, such as the "old ladies, of both sexes," who think Darwin\'s work "a decidedly dangerous book". Chen uses facts and examples, such as the diseases treated in clinical trials, while Huxley uses sarcasm and a long list of the book\'s critics. Both writers use strong imagery: Chen says that ethical frameworks have been "left gasping in the dust", and Huxley calls the book "a veritable Whitworth gun". Chen ends with a warning, but Huxley ends by praising the book.',
              'Grade 6-7':
                'Chen and Huxley both stand at the start of a scientific revolution, but they draw opposite lessons from the alarm it causes. For Chen the fear is justified: after celebrating what gene editing can do, he turns, with "But here is where the conversation becomes uncomfortable", to a future in which inequality becomes "not merely economic but biological". For Huxley the alarm is itself the problem. He lists Darwin\'s opponents in one long satirical sentence, and the fearful come off worst: "old ladies, of both sexes, consider it a decidedly dangerous book", and "bigots denounce it with ignorant invective". Where Chen asks the reader to share his anxiety, Huxley invites the reader to laugh at anxiety. Their methods reflect this. Chen writes as a public intellectual explaining a technology to non-specialists, using accessible metaphor ("cut, paste, and rewrite DNA") and short, emphatic sentences ("This is not science fiction. This is science fact"). Huxley writes as a combative reviewer, using a long, balanced sentence whose semicolons line up the critics one after another before it turns, on the word "while", to the "philosophical thinker" and the "competent" naturalist. Both writers use metaphor to make the stakes vivid, and both choose images of struggle: Chen\'s ethical frameworks are "left gasping in the dust", beaten in a race, while Huxley\'s book is "a veritable Whitworth gun in the armory of liberalism", a weapon in a battle of ideas. The difference lies in where each writer places the danger. For Chen it lies in what science might do; for Huxley it lies in what ignorance might do to science. Read together, the two sources suggest that every major discovery raises both kinds of fear.',
            },
            markScheme: [
              'Compares perspectives throughout the response',
              'Analyses methods used by both writers',
              'Uses evidence from both texts',
              'Shows perceptive understanding of both texts',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-13-writing',
        title: 'Section B: Transactional Writing',
        description:
          'You are advised to spend about 45 minutes on this section. Answer BOTH questions.',
        totalMarks: 28,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'edexcel-p2-13-q5',
            questionNumber: 5,
            questionText:
              'Your headteacher has proposed replacing all textbooks with tablets and online resources.\n\nWrite a letter to your headteacher in which you argue for or against this proposal.\n\n(12 marks for content, 4 marks for technical accuracy)',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear letter with: appropriate formal conventions; a sustained argument with relevant points; some awareness of audience (headteacher); generally accurate SPaG.',
              'Grade 6-7':
                'A well-crafted letter with: confident formal register; counter-arguments acknowledged; effective use of evidence and rhetorical techniques; accurate and varied sentence structures.',
              'Grade 8-9':
                'An assured letter with: sophisticated, respectful but persuasive tone; nuanced argument that balances practical and educational concerns; technical virtuosity; a compelling conclusion.',
            },
            markScheme: [
              'Content (12 marks): Purpose, audience, form, register',
              'Technical accuracy (4 marks): Spelling, punctuation, grammar, sentence variety',
            ],
          },
          {
            id: 'edexcel-p2-13-q6',
            questionNumber: 6,
            questionText:
              'A science magazine for young people has asked for articles exploring the question: "Should there be limits on scientific research?"\n\nWrite an article giving your views.\n\n(16 marks for content, 8 marks for technical accuracy)',
            marks: 24,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear article with: appropriate form (headline, paragraphs); a sustained exploration of the question; some relevant examples; generally accurate SPaG.',
              'Grade 6-7':
                'A compelling article with: engaging opening and clear structure; effective balance of argument and counter-argument; relevant examples from science and technology; accurate, varied syntax.',
              'Grade 8-9':
                'An outstanding article with: distinctive voice suited to a young audience; sophisticated engagement with ethical complexity; ambitious vocabulary and structural choices; a conclusion that leaves the reader thinking.',
            },
            markScheme: [
              'Content (16 marks): Communication, register, form, organisation',
              'Technical accuracy (8 marks): Sentence demarcation, punctuation range, spelling, sentence variety',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 14 - Justice & Law
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p2-14',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-Fiction and Transactional Writing',
    subtitle: 'English Language 1EN0/02',
    code: '1EN0/02',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p2-14-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${JUSTICE_SOURCE_A_REF}\nSource B: ${JUSTICE_SOURCE_B_REF}`,
        totalMarks: 36,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-p2-14-q1',
            questionNumber: 1,
            questionText:
              'Read again Source A, lines 1-6.\n\nChoose four statements below which are TRUE.\n\nA) The writer says the justice system is broken.\nB) The system was designed over centuries.\nC) Wealthy people receive better treatment.\nD) The writer says every police officer is racist.\nE) The system was built by and for the privileged.\nF) Poor people are offered representation and second chances.\nG) The writer describes the system as serving certain interests efficiently.\nH) Being unknown is identified as an advantage.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${JUSTICE_SOURCE_A}\n\nSource B:\n${JUSTICE_SOURCE_B}`,
            extractSource: `Source A: ${JUSTICE_SOURCE_A_REF} | Source B: ${JUSTICE_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'B, C, E, G - B: "designed, over centuries." C: "If you are wealthy, white, and well-connected, the system offers you representation, mitigation, and second chances." E: "built... by and for the privileged." G: "continues to serve their interests with remarkable efficiency." A is false - the writer says the system is "not broken" but was "built this way." D is false - the writer explicitly says "I am not suggesting that every police officer is racist." F is false - it is the wealthy who get these things, not the poor. H is false - to those who are "poor, Black, and unknown", the system "offers you a cell."',
            },
            markScheme: ['1 mark per correct answer, maximum 4'],
          },
          {
            id: 'edexcel-p2-14-q2',
            questionNumber: 2,
            questionText:
              'You need to refer to Source A for this question.\n\nHow does Marcus Thompson use language to argue that the justice system is unfair?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${JUSTICE_SOURCE_A}`,
            extractSource: JUSTICE_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'Thompson uses powerful contrasts to show unfairness. The opening sentence - "The British criminal justice system is not broken. It was built this way" - is shocking because it says the unfairness is deliberate, not accidental. The contrast between "wealthy, white, and well-connected" and "poor, Black, and unknown" uses a list of three on each side to show how different people\'s experiences are. The statistics about stop and search and prison make the argument factual and hard to argue with. The phrase "the problem is structural, not individual" explains that Thompson is not blaming specific people but the whole system. The final sentence - "We need to reimagine what justice means" - uses the verb "reimagine" to suggest the current system cannot simply be fixed but needs to be completely rethought.',
              'Grade 6-7':
                'Thompson constructs his argument through a strategy of systematic redefinition, challenging the reader\'s assumptions about what "broken" and "justice" mean. The opening paradox - "is not broken. It was built this way" - is rhetorically devastating: it transforms the system\'s failures from accidental dysfunction into intentional design, making reform seem inadequate and reconstruction necessary. The parallel tricolons - "wealthy, white, and well-connected" versus "poor, Black, and unknown" - create a structural mirror that makes inequality visible at the level of syntax: the reader sees the disparity in the shape of the sentences themselves. The shift to statistics in paragraph two ("seven times more likely," "three and a half times more likely") adopts the language of empirical evidence, but the accumulation functions emotionally - each figure lands like a blow. The strategic concession "I am not suggesting that every police officer is racist" is precisely calibrated: it pre-empts the most obvious objection while the qualifying word "every" subtly implies that some are. The compound noun "school-to-prison pipeline" compresses a complex sociological argument into a single devastating image - a conveyor belt from childhood to incarceration. The closing sentences, "Reform is not enough. We need to reimagine what justice means", reject the vocabulary of repair altogether in favour of radical conceptual change.',
            },
            markScheme: [
              'Analyses language techniques in detail',
              'Comments on specific word choices and their effects',
              'Considers how language persuades the reader',
              'Uses subject terminology accurately',
              'Top band: sophisticated, conceptualised analysis',
            ],
          },
          {
            id: 'edexcel-p2-14-q3',
            questionNumber: 3,
            questionText: `You need to refer to Source B for this question.\n\nHow does Charles Dickens use language to convey his criticism of the justice system?\n\n(${JUSTICE_B_GLOSSARY_FOR_QUESTIONS})`,
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source B:\n${JUSTICE_SOURCE_B}`,
            extractSource: JUSTICE_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5':
                'Dickens shows that the court does not care about the people it judges. He says that the first thing a visitor notices is "the calm indifference with which the proceedings are conducted", and that "every trial seems a mere matter of business", which makes justice sound like an ordinary job rather than something serious. The balanced sentence "There is a great deal of form, but no compassion; considerable interest, but no sympathy" sums up his criticism: the court follows its rules, but nobody feels for the prisoner. He describes people in the court "wholly engrossed in the morning papers" or "quietly dozing away an hour", even though "the result of the trial is a matter of life or death to one wretched being present". This contrast makes the reader angry at their carelessness. Dickens then makes the reader look at the prisoner, comparing him to "a dying man" looking to his doctor for "a slight ray of hope", which creates sympathy. When the verdict "Guilty!" is given, "A shriek bursts from a female in the gallery", but the court\'s only answer is an order to "take the woman out". The ending, "as if nothing had occurred", shows that the court feels nothing at all.',
              'Grade 6-7':
                'Dickens conveys his criticism less by argument than by contrast, setting the routine of the court against the terror of the man in the dock. The opening claim that a first-time visitor is struck by "the calm indifference with which the proceedings are conducted" frames everything that follows, and the phrase "a mere matter of business" reduces justice to commerce. The antithesis "There is a great deal of form, but no compassion; considerable interest, but no sympathy" is the passage\'s argument in miniature: its parallel clauses weigh what the court has against what it lacks, and each time the lack comes last. Dickens then uses the imperative to direct the reader\'s gaze, first to "the whole group in the body of the Court", whose activities ("engrossed in the morning papers", "carelessly conversing in low whispers", "quietly dozing") are listed in soft sounds and gentle verbs, then abruptly to the prisoner: "But turn your eyes to the dock". The second-person address makes the reader a witness who cannot share the court\'s indifference. The prisoner\'s fear is given in physical detail, "you can almost hear the man\'s heart beat, as he bites the stalk of rosemary", and in the extended simile of "a dying man" who "vainly looks in the face of his physician for a slight ray of hope", which casts the jury as doctors whose patient is beyond saving. The present tense gives the trial the immediacy of something happening now. The climax is compressed: the dashes around "a dead silence prevails as the foreman delivers in the verdict" hold the moment still, so that the single word "Guilty!" breaks the silence, and the shriek from the gallery is answered only by the clerk\'s instruction to "take the woman out". The final clause, "fresh business is proceeded with, as if nothing had occurred", returns to the language of business from the opening, so that the structure of the passage enacts its criticism: the machinery of the court absorbs a human catastrophe and moves on.',
            },
            markScheme: [
              'Analyses language techniques in detail',
              'Comments on specific word choices and their effects',
              'Explores how language conveys attitudes and feelings',
              'Uses subject terminology accurately',
              'Top band: sophisticated, conceptualised analysis',
            ],
          },
          {
            id: 'edexcel-p2-14-q4',
            questionNumber: 4,
            questionText: `For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different perspectives on the justice system and the people it judges.\n\nIn your answer, you could:\n- compare their different perspectives\n- compare the methods they use to convey their perspectives\n- support your response with references to both texts.\n\n(${JUSTICE_B_GLOSSARY_FOR_QUESTIONS})`,
            marks: 16,
            suggestedTimeMinutes: 22,
            questionType: 'comparison',
            extract: `Source A:\n${JUSTICE_SOURCE_A}\n\nSource B:\n${JUSTICE_SOURCE_B}`,
            extractSource: `Source A: ${JUSTICE_SOURCE_A_REF} | Source B: ${JUSTICE_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers argue that the justice system fails the people who come before it. Thompson focuses on racial and economic inequality in the modern system, while Dickens focuses on how coldly a court of his own time treats a prisoner. Thompson uses statistics, such as "seven times more likely to be stopped and searched", while Dickens describes one trial in detail. Both writers suggest that the system does not care: Thompson says it serves the privileged "with remarkable efficiency", and Dickens says that "every trial seems a mere matter of business". Both writers use contrast. Thompson contrasts the "wealthy, white, and well-connected" with the "poor, Black, and unknown", while Dickens contrasts the people in court "quietly dozing away an hour" with the prisoner, for whom the result of the trial is "a matter of life or death". Thompson ends by calling for change, saying "We need to reimagine what justice means", while Dickens ends with the court carrying on "as if nothing had occurred", leaving the reader to feel the injustice for themselves.',
              'Grade 6-7':
                'Thompson and Dickens, writing nearly two centuries apart, both present the justice system as a machine that works smoothly for those who run it and harshly for those it processes, but they explain the injustice in different ways. Thompson\'s argument is structural. His opening paradox, "The British criminal justice system is not broken. It was built this way," presents injustice as a matter of design, and he supports it with statistics and with the vocabulary of social science: "algorithms", "postcode-based policing", the "school-to-prison pipeline". Dickens\'s criticism is observational. He does not argue that the court is biased; he shows that it is indifferent, and trusts the reader to judge. His key sentence, "There is a great deal of form, but no compassion; considerable interest, but no sympathy," does in two balanced clauses what Thompson does with figures. Both writers use contrast to make injustice visible. Thompson\'s parallel tricolons, "wealthy, white, and well-connected" against "poor, Black, and unknown", set two kinds of defendant side by side; Dickens sets the court, "engrossed in the morning papers" or "quietly dozing away an hour", against the one person for whom the result of the trial "is a matter of life or death". Both are careful about blame. Thompson says "The problem is structural, not individual"; Dickens blames no single official, and the clerk who directs an officer to "take the woman out" is simply doing his job, which is the point. The endings differ most. Thompson closes with a call to action: "Reform is not enough. We need to reimagine what justice means - and for whom." Dickens closes with the court moving on "as if nothing had occurred", and leaves the reader to supply the outrage the court does not feel.',
            },
            markScheme: [
              'Compares perspectives throughout the response',
              'Analyses methods used by both writers',
              'Uses evidence from both texts',
              'Shows perceptive understanding of both texts',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-14-writing',
        title: 'Section B: Transactional Writing',
        description:
          'You are advised to spend about 45 minutes on this section. Answer BOTH questions.',
        totalMarks: 28,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'edexcel-p2-14-q5',
            questionNumber: 5,
            questionText:
              'A local newspaper has invited readers to contribute to a debate about whether the voting age should be lowered to 16.\n\nWrite a letter to the newspaper in which you argue for or against lowering the voting age.\n\n(12 marks for content, 4 marks for technical accuracy)',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear letter with: appropriate form features; a sustained argument with relevant points; awareness of newspaper audience; generally accurate SPaG.',
              'Grade 6-7':
                'A well-crafted letter with: confident use of formal register; counter-arguments acknowledged; effective deployment of evidence and rhetorical techniques; accurate and varied sentence structures.',
              'Grade 8-9':
                'An assured letter with: sophisticated argumentative voice; nuanced engagement with democratic principles; seamless integration of evidence and rhetoric; technical virtuosity.',
            },
            markScheme: [
              'Content (12 marks): Purpose, audience, form, register',
              'Technical accuracy (4 marks): Spelling, punctuation, grammar, sentence variety',
            ],
          },
          {
            id: 'edexcel-p2-14-q6',
            questionNumber: 6,
            questionText:
              'A magazine aimed at young people is publishing a series called "Fairness Matters."\n\nWrite an article about a time when you witnessed or experienced something unfair, and what it taught you.\n\n(16 marks for content, 8 marks for technical accuracy)',
            marks: 24,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear article with: appropriate form; a personal narrative connected to a broader theme of fairness; some reflection on what was learned; generally accurate SPaG.',
              'Grade 6-7':
                'A compelling article with: engaging personal narrative; effective connection between individual experience and wider social issues; structural sophistication; accurate, varied syntax.',
              'Grade 8-9':
                'An outstanding article with: assured voice that balances the personal and the universal; narrative skill and reflective depth; ambitious, controlled prose; a conclusion that challenges the reader.',
            },
            markScheme: [
              'Content (16 marks): Communication, register, form, organisation',
              'Technical accuracy (8 marks): Sentence demarcation, punctuation range, spelling, sentence variety',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 15 - Media & Press
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p2-15',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-Fiction and Transactional Writing',
    subtitle: 'English Language 1EN0/02',
    code: '1EN0/02',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p2-15-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${MEDIA_SOURCE_A_REF}\nSource B: ${MEDIA_SOURCE_B_REF}`,
        totalMarks: 36,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-p2-15-q1',
            questionNumber: 1,
            questionText:
              'Read again Source A, lines 1-5.\n\nChoose four statements below which are TRUE.\n\nA) Trust in journalism is increasing.\nB) Only 29% of British adults trust the news media.\nC) The survey was conducted by the Reuters Institute.\nD) Young adults aged 18-24 trust the media less than older adults.\nE) The writer says journalists are not to blame.\nF) 16% of all British adults trust the news media.\nG) The consequences for democracy are described as minor.\nH) The figure is the lowest since records began.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${MEDIA_SOURCE_A}\n\nSource B:\n${MEDIA_SOURCE_B}`,
            extractSource: `Source A: ${MEDIA_SOURCE_A_REF} | Source B: ${MEDIA_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'B, C, D, H - B: "just 29% of British adults trust the news media." C: "A 2024 Reuters Institute survey." D: "Among 18-to-24-year-olds, the figure drops to 16%." H: "the lowest figure since records began." A is false because trust is "collapsing." E is false because journalists "have only themselves to blame." F is false because 16% is the figure for 18-to-24-year-olds; for all British adults it is 29%. G is false because the consequences are "profound."',
            },
            markScheme: ['1 mark per correct answer, maximum 4'],
          },
          {
            id: 'edexcel-p2-15-q2',
            questionNumber: 2,
            questionText:
              'You need to refer to Source A for this question.\n\nHow does Rachel Okonkwo use language to argue that the media has failed the public?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${MEDIA_SOURCE_A}`,
            extractSource: MEDIA_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'Okonkwo uses forceful language to blame the media. The opening is direct and blunt - "Trust in journalism is collapsing, and journalists have only themselves to blame." The word "collapsing" is dramatic, like a building falling down, suggesting total failure. The statistics "29%" and "16%" shock the reader with how low trust has fallen. The phrase "truth as an optional extra" is sarcastic - it suggests the media treats truth like something unimportant that you can add on. The metaphor "the rot" makes media corruption sound like decay and disease. The phrase "business as usual" criticises the media for not changing after the Leveson Inquiry. The final sentence offers a solution - "journalism that earns trust back" - using the verb "earns" to suggest trust must be worked for, not just expected.',
              'Grade 6-7':
                'Okonkwo constructs a prosecutorial argument in which the media stands accused of its own destruction. The opening sentence is rhetorically binary: "Trust in journalism is collapsing" identifies the problem, while "journalists have only themselves to blame" assigns culpability, all within a single compound sentence that allows no space for mitigation. The statistics are deployed with forensic precision - the descending sequence from 29% to 16% creates a narrative of generational abandonment, the adverb "just" before "29%" editorially framing the number as shockingly low. The second paragraph shifts from data to metaphor: "truth as an optional extra" repurposes the language of consumer upgrade culture to devastating satirical effect, reducing journalism\'s foundational principle to an add-on feature. The noun "rot" extends the metaphor of institutional decay, suggesting something organic and spreading. The Leveson Inquiry reference is structurally crucial - it represents the missed opportunity for redemption, making the media\'s continued failure a matter of choice rather than ignorance. The final paragraph\'s image of a "vacuum of trust" into which misinformation has "flooded" employs the physics of negative pressure to explain social media\'s rise: the mainstream media created the conditions for its own replacement. The closing tricolon - "accuracy, accountability, and a willingness to admit when it gets things wrong" - descends from the abstract to the specific, the final element revealing that the solution is fundamentally about humility.',
            },
            markScheme: [
              'Analyses language techniques in detail',
              'Comments on specific word choices and their effects',
              'Considers how language persuades the reader',
              'Uses subject terminology accurately',
              'Top band: sophisticated, conceptualised analysis',
            ],
          },
          {
            id: 'edexcel-p2-15-q3',
            questionNumber: 3,
            questionText: `You need to refer to Source B for this question.\n\nHow does John Stuart Mill use language to defend the freedom of the press and of opinion?\n\n(${MEDIA_B_GLOSSARY_FOR_QUESTIONS})`,
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source B:\n${MEDIA_SOURCE_B}`,
            extractSource: MEDIA_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5':
                'Mill uses confident, logical language to argue that nobody should be silenced. He begins by saying "The time, it is to be hoped, is gone by" when anyone needed to defend the "liberty of the press", which suggests that press freedom should be obvious to any reasonable person. He calls a free press one of the "securities against corrupt or tyrannical government", which shows that he sees it as a protection for ordinary people. His argument then goes further. He writes "I deny the right of the people to exercise such coercion", using the first person to take a clear, personal stand. The short sentence "The power itself is illegitimate" is blunt and definite. The balanced comparison "The best government has no more title to it than the worst" shows that even a good government should not control opinion. His most famous example imagines "all mankind minus one" agreeing, and says they would be no more justified in "silencing that one person" than that person would be "in silencing mankind". Finally he calls silencing an opinion "robbing the human race", a metaphor of theft that makes censorship sound like a crime against everyone.',
              'Grade 6-7':
                'Mill defends freedom of expression by moving from the familiar case to the difficult one, and his language grows more absolute as the argument advances. He opens by treating the "liberty of the press" as settled: the asides "it is to be hoped" and "we may suppose" are courteous, but they imply that anyone who still disputes the point is behind the times. He then raises the stakes. "Let us suppose, therefore, that the government is entirely at one with the people" grants the strongest case for control, a government that acts only on what it "conceives to be their voice", in order to reject it: "But I deny the right of the people to exercise such coercion". The first-person "I deny" gives the argument personal conviction, and the short declarative "The power itself is illegitimate" shifts the question from who uses the power to whether it should exist at all. The antithesis "The best government has no more title to it than the worst" makes the point memorable through balance. The central sentence, "If all mankind minus one, were of one opinion, and only one person were of the contrary opinion", tests the principle against an extreme case, and its mirrored structure, "silencing that one person" against "silencing mankind", makes the two wrongs equal. Mill then gives his reason: silencing an opinion is "robbing the human race; posterity as well as the existing generation". The metaphor of theft, and a list of victims that stretches across time, makes censorship a crime against people not yet born. The final sentence is carefully balanced: if the opinion is right, people lose "the opportunity of exchanging error for truth"; if it is wrong, they lose "the clearer perception and livelier impression of truth, produced by its collision with error". The image of "collision" presents truth as something tested and sharpened by conflict, which is why, for Mill, even a false opinion must be heard.',
            },
            markScheme: [
              'Analyses language techniques in detail',
              'Comments on specific word choices and their effects',
              'Explores how language conveys attitudes and feelings',
              'Uses subject terminology accurately',
              'Top band: sophisticated, conceptualised analysis',
            ],
          },
          {
            id: 'edexcel-p2-15-q4',
            questionNumber: 4,
            questionText: `For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different perspectives on the press and freedom of expression.\n\nIn your answer, you could:\n- compare their different perspectives\n- compare the methods they use to convey their perspectives\n- support your response with references to both texts.\n\n(${MEDIA_B_GLOSSARY_FOR_QUESTIONS})`,
            marks: 16,
            suggestedTimeMinutes: 22,
            questionType: 'comparison',
            extract: `Source A:\n${MEDIA_SOURCE_A}\n\nSource B:\n${MEDIA_SOURCE_B}`,
            extractSource: `Source A: ${MEDIA_SOURCE_A_REF} | Source B: ${MEDIA_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers discuss the press, but from different angles. Okonkwo focuses on what the press has done wrong, such as "phone hacking" and "invented quotes", and argues that journalists have lost the public\'s trust. Mill focuses on why the freedom of the press and of opinion matters, calling a free press one of the "securities against corrupt or tyrannical government". However, both writers reject censorship: Okonkwo says "The solution is not censorship", and Mill says that even a government that agrees with the people has no right to silence opinion, because "The power itself is illegitimate." Okonkwo uses statistics, such as "just 29% of British adults trust the news media", while Mill uses logical argument and an imagined example: "If all mankind minus one, were of one opinion". Okonkwo\'s tone is angry and critical, while Mill\'s is calm and reasoned. Both writers believe the press matters, but Okonkwo thinks it must win back trust, while Mill thinks opinion must be free whether or not people agree with it.',
              'Grade 6-7':
                'Okonkwo and Mill approach the press from opposite directions, one prosecuting and one defending, but they meet at the same conclusion: that the answer to bad or unpopular opinion is not silence. Okonkwo writes as a critic of journalism. Her authority comes from specifics, such as the Reuters Institute figures, the Leveson Inquiry and "phone hacking", and her metaphors of "rot" and a "vacuum of trust" present the press as decaying from within. Mill writes as a philosopher. He names no newspaper and no scandal; his authority comes from reasoning, and his long, balanced sentences model the calm deliberation he defends. Both writers reject censorship, but for different reasons. For Okonkwo, "The solution is not censorship. The solution is journalism that earns trust back", a practical judgement about what will work. For Mill, censorship is wrong in principle, whoever exercises it: "The best government has no more title to it than the worst." His example of "all mankind minus one" shows that the question is not whether an opinion is popular, but whether anyone has the right to suppress it. Their views of truth also differ. Okonkwo treats truth as something the press has failed to deliver, "an optional extra" for the tabloids; Mill treats truth as something that emerges from argument, gaining a "clearer perception and livelier impression" from "its collision with error". Okonkwo worries that on social media "the most outrageous claims travel fastest"; Mill, writing long before social media, argues that even a false opinion has value because it tests the truth. Read together, they show a tension a modern reader must resolve: how to demand accuracy from the press without giving anyone the power to silence it.',
            },
            markScheme: [
              'Compares perspectives throughout the response',
              'Analyses methods used by both writers',
              'Uses evidence from both texts',
              'Shows perceptive understanding of both texts',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-15-writing',
        title: 'Section B: Transactional Writing',
        description:
          'You are advised to spend about 45 minutes on this section. Answer BOTH questions.',
        totalMarks: 28,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'edexcel-p2-15-q5',
            questionNumber: 5,
            questionText:
              'Your school has been asked to contribute to a local radio programme about whether social media does more harm than good for young people.\n\nWrite the text of a talk you would give on this programme, arguing your point of view.\n\n(12 marks for content, 4 marks for technical accuracy)',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear talk with: appropriate spoken register; a sustained argument; awareness of radio audience; generally accurate SPaG.',
              'Grade 6-7':
                'A well-crafted talk with: engaging, conversational yet authoritative tone; effective rhetorical techniques; counter-arguments addressed; accurate and varied sentence structures suited to speech.',
              'Grade 8-9':
                'An assured, compelling talk with: distinctive voice perfectly calibrated for radio; nuanced argument; masterful use of spoken language techniques; technical virtuosity that never feels forced.',
            },
            markScheme: [
              'Content (12 marks): Purpose, audience, form, register',
              'Technical accuracy (4 marks): Spelling, punctuation, grammar, sentence variety',
            ],
          },
          {
            id: 'edexcel-p2-15-q6',
            questionNumber: 6,
            questionText:
              'A website aimed at young writers is publishing a collection called "Things People Need to Hear."\n\nWrite an article about an issue you believe deserves more attention from the media.\n\n(16 marks for content, 8 marks for technical accuracy)',
            marks: 24,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear article with: appropriate form; a topic that the writer feels strongly about; some evidence or examples; generally accurate SPaG.',
              'Grade 6-7':
                'A compelling article with: distinctive voice and clear passion; effective balance of argument and personal engagement; structural sophistication; accurate, varied syntax and ambitious vocabulary.',
              'Grade 8-9':
                'An outstanding article with: assured, commanding voice; a fresh perspective on an underreported issue; masterful prose that informs, persuades, and moves the reader; technical virtuosity throughout.',
            },
            markScheme: [
              'Content (16 marks): Communication, register, form, organisation',
              'Technical accuracy (8 marks): Sentence demarcation, punctuation range, spelling, sentence variety',
            ],
          },
        ],
      },
    ],
  },
]
