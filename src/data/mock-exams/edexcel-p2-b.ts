// @ts-nocheck

/**
 * WHAT WAS WRONG (27 September 2026). These five papers, edexcel-p2-06 to
 * edexcel-p2-10, are live: they are in allMockExamPapers
 * (src/data/mock-exams.ts), which the mock-exam pages serve. Each pairs a
 * modern Source A with a nineteenth-century Source B, and four of the five
 * Source B passages were not by the writer named on them.
 *   - Paper 07: "Friedrich Engels, The Condition of the Working Class in
 *     England (1845)". None of its ten sentences is in the English
 *     translation (Gutenberg #17306). It imitated Engels's account of factory
 *     discipline, and the model answers to Questions 3 and 4 quoted eight of
 *     its invented phrases ("running through the dark streets", "the
 *     operative belongs to the mill") as Engels's.
 *   - Paper 06: "Dr Edward Lankester, evidence to the Select Committee on
 *     Public Health, 1862". The physician was Edwin Lankester. None of the
 *     passage's twelve sentences could be traced: his own writing on food is
 *     not on Gutenberg, and a web search for its opening sentence found
 *     nothing.
 *   - Paper 09: "Charles Booth, Life and Labour of the People in London
 *     (1889)". Booth's text is not on Gutenberg, so the passage (a
 *     first-person visit to a cellar in St Giles, ending in a moral
 *     challenge) could not be compared with it, and a web search for its
 *     phrases found no source.
 *   - Paper 10: "Charles Dickens, 'Amusements of the People', Household
 *     Words, 1850". The article is real, and Gutenberg holds the issue that
 *     printed it (No. 1, 30 March 1850, #79523). None of the passage's
 *     eighteen sentences is in it, or in the four Dickens collections the
 *     extract checker reads. It argued about drink and temperance lectures;
 *     the article is about the people's love of drama.
 * The fifth Source B (Paper 08) was labelled an original composition "in
 * the style of" Flora Thompson, but its model answers called it
 * "Thompson's memoir" and credited its words to her. Every Source A named a
 * writer and an article in a real publication (The Observer, the Financial
 * Times, The Atlantic, the New Statesman, The Guardian). Web searches for
 * three of them, by byline, title and phrase, found nothing, and had they
 * been real, 270 words of a 2024 article would be far beyond fair dealing:
 * they were written for this file, and students were told they had
 * appeared in those papers.
 *
 * WHAT IT IS NOW.
 *   - Each Source B that named a real writer is genuine, cut by script from
 *     the Project Gutenberg text and never retyped; the comment above each
 *     constant gives the cut. Each keeps the focus of the passage it
 *     replaces:
 *       Paper 06: Engels, "The Great Towns", on the food of the working class
 *         at each rate of wages. Lankester's words are not to be had, so the
 *         writer changes, and Engels is the Source B of two papers here.
 *       Paper 07: Engels, "Factory Hands", on factory regulations: the
 *         passage the invented one imitated.
 *       Paper 09: The Bitter Cry of Outcast London (1883), a tour of the
 *         rookeries. Booth's words are not to be had either.
 *       Paper 10: the real "The Amusements of the People".
 *     Two have sentences cut, marked [...]. No cut contains a Gutenberg page
 *     anchor ("{179a}"). The one word in italic type ("entirely", Paper 10)
 *     is printed in roman, because the page prints plain text, and the
 *     double hyphens of Papers 06 and 09 are printed as a dash.
 *   - Every Source A, and the Paper 08 Source B, is kept word for word and
 *     labelled as specially written for the site. The invented bylines are
 *     kept, marked as invented, so the questions can still name the writers.
 *     The figures in Sources A of Papers 06, 07 and 09 (the Food Foundation,
 *     Stanford, McKinsey, house prices) are labelled as for practice: they
 *     were not checked against the studies they name.
 *   - Questions 3 and 4 of Papers 06, 07, 09 and 10, their mark schemes and
 *     model answers are rewritten for the new passages. Paper 06 asks about
 *     Engels; Paper 09 about "the writer" (the pamphlet was published
 *     unsigned), and about horror as well as injustice, which is what the
 *     passage conveys; Paper 10's Question 3 about imagination against
 *     useful instruction, which is Dickens's argument.
 *
 * A check of every quotation of any length in the answers found five more
 * that the extracts do not say, corrected below: 06-q2 quoted "Nutrition was
 * a luxury" (the text has "Nutrition, in that context, was a luxury");
 * 08-q2 and 08-q4 quoted "savage irony" (the text: "The irony is savage");
 * 09-q4 misquoted Brennan's credentials and set two phrases of its own in
 * quotation marks. 07-q2 also said the key word "control" came at the end
 * of its sentence, when it opens the next one, and 08-q4 said Brookes uses
 * research, when her essay cites none. Questions 1 pointed to "lines 1-8"
 * of Source A; the site prints no line numbers, so they now name the first
 * two paragraphs, where every answer is.
 *
 * A second review (27 September 2026) read each Question 1 against those
 * paragraphs. Four of the five asked for four true statements and offered
 * five, so a student who chose the fifth lost a mark for reading correctly:
 * the text says the child has "the diary of a cabinet minister" (08, F),
 * that the writer has paid rent for "twelve years" (09, H) and that the club
 * was "above a chip shop" (10, F), and "The study lasted over nine months"
 * (07, H) can be read either way against "over nine months". Each is now
 * plainly false. The Question 4 answers also counted the years between the
 * sources from the 2024 date on the old Source A labels, which the page no
 * longer prints ("174 years apart"); they now give round figures. And the
 * four genuine Sources B carry words a student cannot be expected to know
 * ("the bourgeoisie holds the proletariat chained", "the middle passage of
 * the slave ship", "The-great-exhibition-of-the-works-of-industry-of-all-
 * nations"), so each now has a glossary in its section description, as a
 * real paper has and as edexcel-p2-a.ts already does.
 *
 * NOT FIXED: the shape of these papers (64 marks in 105 minutes, two
 * writing tasks) is not 1EN0/02's as src/data/exam-guides/edexcel-guide.ts
 * describes it (96 marks in 2 hours 5 minutes).
 */

import type { MockExamPaper } from './types'

// ─── Source Extracts ───────────────────────────────────────────────────────────
// Each paper has two non-fiction sources on a shared theme.

// ── Paper 06: Food & Health ────────────────────────────────────────────────────

const P06_SOURCE_A = `There is a peculiar cruelty in the modern food industry, and it is this: the people who can least afford to eat well are precisely the people who most need to. Walk into any supermarket in a deprived area and count the metres of shelf space devoted to fresh vegetables. Then count the metres devoted to crisps, biscuits, and ready meals loaded with salt, sugar, and fat. The mathematics of malnutrition are not complicated.

A report published last month by the Food Foundation revealed that the poorest fifth of British households would need to spend 47% of their income on food to meet government nutritional guidelines. The wealthiest fifth spend just 11%. This is not a gap. It is a chasm - and it is widening every year.

I grew up on a council estate in Salford where the nearest greengrocer was a forty-minute bus ride away. My mother, who worked two cleaning jobs and raised three children alone, performed miracles with mince and tinned tomatoes, but she could not defeat geography and economics. We ate what was available, what was affordable, what could be prepared in the twenty minutes between her arriving home and our needing to be fed. Nutrition, in that context, was a luxury - something that belonged to people who had time and money and a car to drive to the farmers' market.

The conversation about healthy eating in this country is saturated with privilege. We are lectured about our five-a-day by people who have never had to choose between heating and eating. We are told to cook from scratch by people who have never worked a twelve-hour shift and come home to find the electricity meter has run out.`

const P06_SOURCE_A_REF =
  'Specially written for The English Hub (not a published text): an opinion article, "Hunger in Plain Sight", under the invented byline Rachel Okonkwo. Its figures are for practice, not checked against the report it names'

// Engels, "The Great Towns": the paragraph beginning "The habitual food of the
// individual working-man", its first nine sentences (to "he simply starves, as we
// have seen.") and its last two (from "And, if the week's wages"), the three
// between cut and marked [...]. Cut by script from Gutenberg #17306.
const P06_SOURCE_B = `The habitual food of the individual working-man naturally varies according to his wages. The better paid workers, especially those in whose families every member is able to earn something, have good food as long as this state of things lasts; meat daily, and bacon and cheese for supper. Where wages are less, meat is used only two or three times a week, and the proportion of bread and potatoes increases. Descending gradually, we find the animal food reduced to a small piece of bacon cut up with the potatoes; lower still, even this disappears, and there remain only bread, cheese, porridge, and potatoes, until on the lowest round of the ladder, among the Irish, potatoes form the sole food. As an accompaniment, weak tea, with perhaps a little sugar, milk, or spirits, is universally drunk. Tea is regarded in England, and even in Ireland, as quite as indispensable as coffee in Germany, and where no tea is used, the bitterest poverty reigns. But all this pre-supposes that the workman has work. When he has none, he is wholly at the mercy of accident, and eats what is given him, what he can beg or steal. And, if he gets nothing, he simply starves, as we have seen. [...] And, if the week's wages are used up before the end of the week, it often enough happens that in the closing days the family gets only as much food, if any, as is barely sufficient to keep off starvation. Of course such a way of living unavoidably engenders a multitude of diseases, and when these appear, when the father from whose work the family is chiefly supported, whose physical exertion most demands nourishment, and who therefore first succumbs—when the father is utterly disabled, then misery reaches its height, and then the brutality with which society abandons its members, just when their need is greatest, comes out fully into the light of day.`

const P06_SOURCE_B_REF =
  'Friedrich Engels, The Condition of the Working-Class in England in 1844 (first published in German, 1845), in the translation by Florence Kelley Wischnewetzky, from the chapter "The Great Towns"'

const P06_SOURCE_B_GLOSSARY =
  'Glossary for Source B: the Irish - Irish immigrants in the English towns, the lowest-paid of the workers Engels describes; spirits - strong alcoholic drink such as gin; pre-supposes - takes for granted; engenders - causes; succumbs - gives way, falls ill.'

// ── Paper 07: Work & Employment ────────────────────────────────────────────────

const P07_SOURCE_A = `The office is dead. Or, more precisely, the office as we knew it - that fluorescent-lit cathedral of presenteeism where millions of workers sat in identical chairs performing identical rituals of busyness - has been fatally wounded, and no amount of corporate nostalgia will revive it.

Three years after the pandemic forced the greatest workplace experiment in history, the data is unequivocal. A Stanford University study tracking 16,000 workers over nine months found that remote employees were 13% more productive than their office-based counterparts, took fewer sick days, and reported significantly higher job satisfaction. McKinsey's 2024 global survey found that 87% of workers offered flexible arrangements chose to take them. When given the choice, people vote with their feet - or, rather, with their slippers.

And yet a strange counter-revolution is underway. CEOs who spent 2020 praising their employees' resilience and adaptability are now issuing return-to-office mandates with the fervour of Victorian factory owners. The arguments are familiar: collaboration requires proximity; culture cannot be built through screens; junior employees need mentoring that only physical presence provides. These claims are not without merit, but they are selectively deployed. The CEO who insists that creativity requires a shared physical space rarely explains why he spent the previous decade closing regional offices and consolidating staff into soulless open-plan warehouses that destroyed the very intimacy he now claims to value.

The truth is that the fight over remote work is not really about productivity. It is about control - and the uncomfortable discovery, by a managerial class accustomed to measuring commitment by hours spent visibly at a desk, that their workers can function perfectly well without supervision.`

const P07_SOURCE_A_REF =
  'Specially written for The English Hub (not a published text): an opinion article, "The Great Return", under the invented byline James Ashworth. Its figures are for practice, not checked against the studies it names'

// Engels, "Single Branches of Industry. Factory Hands": the paragraph beginning
// "Further, the slavery", and the first three sentences of the next, to "the law
// which is made by the bourgeoisie." Cut by script from Gutenberg #17306.
const P07_SOURCE_B = `Further, the slavery in which the bourgeoisie holds the proletariat chained, is nowhere more conspicuous than in the factory system. Here ends all freedom in law and in fact. The operative must be in the mill at half-past five in the morning; if he comes a couple of minutes too late, he is fined; if he comes ten minutes too late, he is not let in until breakfast is over, and a quarter of the day's wages is withheld, though he loses only two and one-half hours' work out of twelve. He must eat, drink, and sleep at command. For satisfying the most imperative needs, he is vouchsafed the least possible time absolutely required by them. Whether his dwelling is a half-hour or a whole one removed from the factory does not concern his employer. The despotic bell calls him from his bed, his breakfast, his dinner.

What a time he has of it, too, inside the factory! Here the employer is absolute law-giver; he makes regulations at will, changes and adds to his codex at pleasure, and even, if he inserts the craziest stuff, the courts say to the working-man: "You were your own master, no one forced you to agree to such a contract if you did not wish to; but now, when you have freely entered into it, you must be bound by it." And so the working-man only gets into the bargain the mockery of the Justice of the Peace who is a bourgeois himself, and of the law which is made by the bourgeoisie.`

const P07_SOURCE_B_REF =
  'Friedrich Engels, The Condition of the Working-Class in England in 1844 (first published in German, 1845), in the translation by Florence Kelley Wischnewetzky, from the chapter "Single Branches of Industry. Factory Hands"'

const P07_SOURCE_B_GLOSSARY =
  'Glossary for Source B: the bourgeoisie - the middle class who own the factories and businesses, here the employers; the proletariat - the working class, who own nothing but their labour and must work for wages; operative - a factory worker; mill - a cotton factory; vouchsafed - granted, as a favour; despotic - tyrannical; dinner - the midday meal; codex - code, set of rules; Justice of the Peace - a local magistrate who judged minor cases.'

// ── Paper 08: Childhood ────────────────────────────────────────────────────────

const P08_SOURCE_A = `We have stolen childhood, and we have done it so gradually that we barely noticed. The theft was not dramatic - no single moment of loss - but an incremental erosion, carried out with the very best intentions by adults who believed they were giving children more when, in fact, they were giving them less.

Consider the modern child's schedule. She wakes at seven, is driven to school by eight, sits in lessons until three-thirty, attends an after-school club until five, is driven to swimming or piano or tutoring, eats a hurried dinner, completes homework, and is in bed by nine. Her weekends are similarly colonised: Saturday morning football, Saturday afternoon birthday party (attendance essentially compulsory), Sunday violin practice and spelling test revision. She is eight years old and she has the diary of a cabinet minister.

What is missing from this schedule is precisely the thing that makes childhood childhood: unstructured time. Time to be bored. Time to lie on the grass and watch clouds. Time to build a den from old blankets and negotiate the complex social politics of who gets to be inside and who must stand guard. Time to fail at something without an adult swooping in to help. These are not luxuries. They are the raw materials of psychological development, and we have systematically removed them in the name of enrichment.

The irony is savage. A generation of parents terrified that their children will fall behind has produced a generation of children who are anxious, overscheduled, and increasingly unable to entertain themselves without adult direction or a screen.`

const P08_SOURCE_A_REF =
  'Specially written for The English Hub (not a published text): an essay, "Let Them Be Bored", under the invented byline Professor Helen Brookes'

const P08_SOURCE_B = `My childhood was spent largely out of doors, in a freedom that would horrify the modern parent. From the age of seven or eight I roamed the fields and lanes around our village with a liberty that was, I now realise, the great unremarked privilege of rural poverty. My mother, occupied from dawn with the business of keeping house on almost nothing, had neither the time nor the inclination to supervise our play, and so we were turned out after breakfast and expected to return at dusk, and what we did in the intervening hours was our own affair.

We built dams in the stream and watched them fail. We climbed trees that were certainly too tall for us and fell out of them with a regularity that would alarm a modern risk assessor. We caught tadpoles and kept them in jars and were mystified when they grew legs. We fought, made up, fought again, and learned through painful experience that Tommy Griggs could not be trusted and that Sally Evans would always take your side if you gave her first go on the rope swing.

I do not wish to romanticise this. There was cruelty in it - the casual savagery of children left to their own devices - and there was danger, and there were long afternoons of aching, desperate boredom that no modern child-rearing manual would tolerate. But there was also something that I fear we have lost: the slow, unsupervised discovery of who you are when nobody is watching, when no adult is assessing your performance, when the world is yours to explore and the only deadline is the fading of the light.`

const P08_SOURCE_B_REF =
  'Specially written for The English Hub (not a published text): a memoir of a country childhood'

// ── Paper 09: Housing ──────────────────────────────────────────────────────────

const P09_SOURCE_A = `I am thirty-four years old. I have a degree, a full-time job, and a credit score that my bank describes as "excellent." I have never missed a rent payment in twelve years of renting. And I cannot buy a house. Not a nice house. Not a house in a fashionable area. Any house. Anywhere.

The numbers are brutal and they are simple. The average house price in England is now £290,000. The average salary is £35,000. To secure a mortgage, I would need a deposit of approximately £30,000 - a sum that, after rent, bills, food, and the modest cost of occasionally leaving my flat, I am able to save at a rate of approximately £200 per month. At this rate, I will have my deposit in twelve and a half years, by which time house prices will have risen further, and I will be back where I started.

Meanwhile, I pay £1,100 per month in rent for a one-bedroom flat with damp in the bathroom and a landlord who takes six weeks to fix the boiler. This £1,100 buys me nothing - no equity, no security, no right to hang a picture without permission. It vanishes into someone else's mortgage like water into sand. I am, in the memorable phrase of a housing charity, "paying more to have less."

My parents bought their first home in 1988 for £42,000 on a single teacher's salary. They did not have wealthy parents. They did not have extraordinary luck. They simply lived in a country where housing was a thing you could afford. That country no longer exists.`

const P09_SOURCE_A_REF =
  'Specially written for The English Hub (not a published text): a first-person article, "Generation Rent", under the invented byline Sophie Brennan. Its figures are for practice, not checked against published statistics'

// The Bitter Cry of Outcast London (1883): the paragraph beginning "We do not say
// the condition of their homes", from its second sentence ("Few who will read
// these pages") to its eleventh ("it is everywhere."). Cut by script from
// Gutenberg #55316.
const P09_SOURCE_B = `Few who will read these pages have any conception of what these pestilential human rookeries are, where tens of thousands are crowded together amidst horrors which call to mind what we have heard of the middle passage of the slave ship. To get into them you have to penetrate courts reeking with poisonous and malodorous gases arising from accumulations of sewage and refuse scattered in all directions and often flowing beneath your feet; courts, many of them which the sun never penetrates, which are never visited by a breath of fresh air, and which rarely know the virtues of a drop of cleansing water. You have to ascend rotten staircases, which threaten to give way beneath every step, and which, in some places, have already broken down, leaving gaps that imperil the limbs and lives of the unwary. You have to grope your way along dark and filthy passages swarming with vermin. Then, if you are not driven back by the intolerable stench, you may gain admittance to the dens in which these thousands of beings who belong, as much as you, to the race for whom Christ died, herd together. Have you pitied the poor creatures who sleep under railway arches, in carts or casks, or under any shelter which they can find in the open air? You will see that they are to be envied in comparison with those whose lot it is to seek refuge here. Eight feet square—that is about the average size of very many of these rooms. Walls and ceiling are black with the accretions of filth which have gathered upon them through long years of neglect. It is exuding through cracks in the boards overhead; it is running down the walls; it is everywhere.`

const P09_SOURCE_B_REF =
  'The Bitter Cry of Outcast London: An Inquiry into the Condition of the Abject Poor (London: James Clarke, 1883), a pamphlet of the London Congregational Union credited to the Reverend Andrew Mearns and William C. Preston'

const P09_SOURCE_B_GLOSSARY =
  'Glossary for Source B: pestilential - breeding disease; rookeries - overcrowded slums, named after the crowded nesting colonies of rooks; the middle passage of the slave ship - the voyage across the Atlantic on which enslaved Africans were crammed below deck; courts - small yards enclosed by houses, reached by narrow alleys; malodorous - foul-smelling; imperil - endanger; the unwary - people who are not careful; vermin - rats, lice and other pests; the race for whom Christ died - the human race, for whom, in Christian belief, Christ died; accretions - layers built up over time.'

// ── Paper 10: Entertainment ────────────────────────────────────────────────────

const P10_SOURCE_A = `The British high street is dying, and its most visible symptom is the disappearance of places where people used to gather for no commercial reason at all. The youth club, the community hall, the public library with its Saturday morning reading group - these were never glamorous institutions, but they were the connective tissue of community life, and their loss has left wounds that no amount of online connectivity can heal.

I spent my teenage years in a youth club above a chip shop in Wolverhampton. It smelled of sweat and cheap deodorant and the rubber of table-tennis balls. The carpet was catastrophic. The pool table had a lean that favoured the left-hand cushion, and the jukebox played the same thirty songs in a rotation that everyone knew by heart. It was, by any objective measure, terrible - and it was the most important place in my life.

Because what that youth club provided was not entertainment in the modern, curated, algorithm-driven sense. It provided space - physical, social, psychological space in which teenagers could simply exist alongside each other, learning through proximity the complex, unwritten rules of human coexistence. You learned to wait your turn. You learned that the quiet kid in the corner could beat everyone at chess. You learned to negotiate, to compromise, to read a room. These were not skills that anyone taught us. They were skills we absorbed through the simple, irreplaceable act of being together in the same place.

Today's teenagers have infinite entertainment and almost no communal space. They can stream any film, play any game, access any information - but they cannot walk to a place where other teenagers are and simply be among them. We have given them everything except the thing they need most: each other.`

const P10_SOURCE_A_REF =
  'Specially written for The English Hub (not a published text): an opinion article, "The Lost Spaces of Youth", under the invented byline Michael Donovan'

// Dickens, "The Amusements of the People", Household Words, No. 1, 30 March 1850:
// the paragraph beginning "It is probable that nothing will ever root out", with
// its fourth and fifth sentences (on a man whose boyhood holidays were spent
// "among cranks and cogwheels") cut and marked [...]. Cut by script from Gutenberg
// #79523, the issue itself. Dickens set "entirely" (in "a people formed entirely")
// in italic; it is printed in roman here.
const P10_SOURCE_B = `It is probable that nothing will ever root out from among the common people an innate love they have for dramatic entertainment in some form or other. It would be a very doubtful benefit to society, we think, if it could be rooted out. The Polytechnic Institution in Regent Street, where an infinite variety of ingenious models are exhibited and explained, and where lectures comprising a quantity of useful information on many practical subjects are delivered, is a great public benefit and a wonderful place, but we think a people formed entirely in their hours of leisure by Polytechnic Institutions would be an uncomfortable community. [...] There is a range of imagination in most of us, which no amount of steam-engines will satisfy; and which The-great-exhibition-of-the-works-of-industry-of-all-nations, itself, will probably leave unappeased. The lower we go, the more natural it is that the best-relished provision for this should be found in dramatic entertainments; as at once the most obvious, the least troublesome, and the most real, of all escapes out of the literal world. Joe Whelks, of the New Cut, Lambeth, is not much of a reader, has no great store of books, no very commodious room to read in, no very decided inclination to read, and no power at all of presenting vividly before his mind’s eye what he reads about. But, put Joe in the gallery of the Victoria Theatre; show him doors and windows in the scene that will open and shut, and that people can get in and out of; tell him a story with these aids, and by the help of live men and women dressed up, confiding to him their innermost secrets, in voices audible half a mile off; and Joe will unravel a story through all its entanglements, and sit there as long after midnight as you have anything left to show him. Accordingly, the Theatres to which Mr. Whelks resorts, are always full; and whatever changes of fashion the drama knows elsewhere, it is always fashionable in the New Cut.`

const P10_SOURCE_B_REF =
  'Charles Dickens, "The Amusements of the People", Household Words, No. 1, 30 March 1850'

const P10_SOURCE_B_GLOSSARY =
  'Glossary for Source B: the Polytechnic Institution in Regent Street - a London hall that displayed machines and scientific models and gave lectures to educate the public; The-great-exhibition-of-the-works-of-industry-of-all-nations - the Great Exhibition, a vast display of machinery and manufactured goods then being planned for London in 1851; unappeased - unsatisfied; best-relished provision - the most enjoyed way of supplying it; the New Cut, Lambeth - a busy working-class street in south London; commodious - roomy; the gallery - the highest and cheapest seats in a theatre; the Victoria Theatre - a popular theatre near the New Cut, now the Old Vic; resorts - goes regularly.'

// ─── Mock Exam Papers ──────────────────────────────────────────────────────────

export const edexcelP2B: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════════
  // PAPER 06 - Food & Health
  // ═══════════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p2-06',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-Fiction and Transactional Writing',
    subtitle: 'English Language 1EN0/02',
    code: '1EN0/02',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p2-06-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${P06_SOURCE_A_REF}\nSource B: ${P06_SOURCE_B_REF}\n\n${P06_SOURCE_B_GLOSSARY}`,
        totalMarks: 36,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-p2-06-q1',
            questionNumber: 1,
            questionText:
              'Read again the first two paragraphs of Source A.\n\nChoose four statements below which are TRUE.\n\nA) The modern food industry has a cruelty about it.\nB) Fresh vegetables dominate supermarket shelves in deprived areas.\nC) The poorest households would need nearly half their income for healthy food.\nD) The wealthiest households spend 47% on food.\nE) The gap between rich and poor diets is widening.\nF) The figures come from the Food Foundation.\nG) The poorest fifth spend 11% of income on food.\nH) The mathematics of malnutrition are complicated.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${P06_SOURCE_A}\n\nSource B:\n${P06_SOURCE_B}`,
            extractSource: `Source A: ${P06_SOURCE_A_REF} | Source B: ${P06_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'A, C, E, F - A: "There is a peculiar cruelty in the modern food industry." C: "the poorest fifth... would need to spend 47% of their income." E: "it is widening every year." F: "A report published last month by the Food Foundation."',
            },
            markScheme: ['1 mark per correct answer, maximum 4'],
          },
          {
            id: 'edexcel-p2-06-q2',
            questionNumber: 2,
            questionText:
              'You need to refer only to Source A for this question.\n\nHow does Okonkwo use language to argue that poverty is the real cause of unhealthy eating?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${P06_SOURCE_A}`,
            extractSource: P06_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'Okonkwo uses strong language to make the reader sympathise with poor families. She describes the gap between rich and poor as "a chasm" which is a metaphor suggesting a deep, dangerous divide. She uses personal experience - growing up on "a council estate in Salford" - to make her argument more convincing and emotional. The phrase "performed miracles with mince and tinned tomatoes" praises her mother while showing the limited ingredients available. The repetition of "We are told" and "We are lectured" in the final paragraph creates an angry tone, suggesting poor people are patronised by those who do not understand their lives.',
              'Grade 6-7':
                'Okonkwo constructs her argument through a deliberate rhetorical journey from statistical authority to personal testimony to political anger. The opening sentence deploys the abstract noun "cruelty" alongside the qualifier "peculiar," suggesting this is not accidental harm but something distinctive and deliberate. The imperative "Walk into any supermarket" directly addresses the reader, transforming them from passive audience into witness. The statistical evidence - "47% of their income" versus "just 11%" - is framed not as a "gap" but a "chasm," the metaphor implying depth, danger, and impassability. The shift to personal narrative ("I grew up on a council estate") moves from logos to pathos, the hyperbolic "performed miracles" simultaneously celebrating maternal resourcefulness and exposing its impossible conditions. The final paragraph\'s parallel structure - "We are lectured... We are told" - uses the passive voice to position the poor as objects of condescension, while the specificity of "twelve-hour shift" and "electricity meter" grounds the argument in lived, material reality.',
              'Grade 8-9':
                'Okonkwo\'s prose operates through a carefully controlled escalation from diagnostic detachment to contained fury. The opening paradox - "the people who can least afford to eat well are precisely the people who most need to" - establishes the structural irony that drives the entire piece. The imperative "Walk into any supermarket" is both rhetorical invitation and challenge, the verb "count" repeated to enforce an empirical methodology that produces its own damning evidence. The metaphorical progression from "gap" to "chasm" performs a rhetorical correction in real time, the writer rejecting her own word as insufficiently severe. The autobiographical section deploys the tricolon "available... affordable... prepared" to reveal how food choice is determined entirely by circumstance, each word narrowing the field of possibility. The sentence "Nutrition, in that context, was a luxury" inverts our cultural assumptions: the essential is reframed as the unattainable. The final paragraph\'s anaphoric "We are" constructions weaponise the first-person plural, claiming collective identity with the lectured poor while exposing the class assumptions embedded in public health discourse. The closing image - "the electricity meter has run out" - is devastating in its specificity, replacing abstract poverty with concrete domestic crisis.',
            },
            markScheme: [
              'Analyses language techniques with specific examples',
              'Comments on effects of word choices',
              'Considers persuasive strategies',
              'Uses subject terminology accurately',
              'Top band: sophisticated, conceptualised analysis',
            ],
          },
          {
            id: 'edexcel-p2-06-q3',
            questionNumber: 3,
            questionText:
              'You need to refer only to Source B for this question.\n\nHow does Engels use language to convey the seriousness of the dietary problems facing the poor?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source B:\n${P06_SOURCE_B}`,
            extractSource: P06_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5':
                'Engels shows that what a worker eats depends on what he is paid: his food "naturally varies according to his wages". He describes a slide from "meat daily" for the better-paid workers down to the poorest, for whom "potatoes form the sole food", so the reader sees the diet getting worse as wages fall. The image of "the lowest round of the ladder" makes this sound like people stepping down a ladder, one rung at a time. Even the drink is thin: "weak tea". The short sentence "But all this pre-supposes that the workman has work" warns that things can be worse still, and the plain words "he simply starves" are shocking because they are so calm. At the end Engels shows the danger to health: this way of living "engenders a multitude of diseases", and when the father can no longer work, "misery reaches its height".',
              'Grade 6-7':
                'Engels conveys the seriousness of the problem by making diet an exact measure of wages and then following that measure all the way down. The opening sentence is calm, almost scientific: food "naturally varies according to his wages", and the adverb "naturally" presents hunger as the ordinary working of the system rather than an accident. A long sentence then enacts a descent. "Descending gradually", the meat shrinks to "a small piece of bacon cut up with the potatoes", then "even this disappears", and the list narrows to "bread, cheese, porridge, and potatoes" until "potatoes form the sole food". The syntax takes the foods away one at a time, so the reader watches the diet thin. The metaphor of "the lowest round of the ladder" turns wages into a social hierarchy. The paragraph then turns on a short sentence, "But all this pre-supposes that the workman has work", which reveals that even the potato diet belongs to the employed; the man without work "eats what is given him, what he can beg or steal", and the understatement of "he simply starves" is more chilling than any protest. After the cut, the focus moves from food to health: a family eating only enough "to keep off starvation" suffers "a multitude of diseases". The final sentence piles up "when" clauses before its climax, "misery reaches its height", and it ends by blaming not the poor but society, which "abandons its members, just when their need is greatest".',
            },
            markScheme: [
              'Analyses language techniques with specific examples',
              'Comments on effects of word choices',
              'Considers how language conveys seriousness',
              'Uses subject terminology accurately',
              'Top band: sophisticated, conceptualised analysis',
            ],
          },
          {
            id: 'edexcel-p2-06-q4',
            questionNumber: 4,
            questionText:
              'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different perspectives on the link between poverty and diet.\n\nIn your answer, you could:\n- compare their different perspectives\n- compare the methods they use to convey their perspectives\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 26,
            questionType: 'comparison',
            extract: `Source A:\n${P06_SOURCE_A}\n\nSource B:\n${P06_SOURCE_B}`,
            extractSource: `Source A: ${P06_SOURCE_A_REF} | Source B: ${P06_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers show that poor people eat badly because they are poor. Okonkwo uses modern figures: the poorest fifth "would need to spend 47% of their income on food" to eat healthily. Engels describes what workers eat at each level of wages, from "meat daily" down to potatoes alone. Okonkwo uses her own childhood on "a council estate in Salford" to make the reader sympathise, while Engels writes as an observer describing the whole working class. Both show that work and time matter: Okonkwo\'s mother had only "twenty minutes" to cook after work, and Engels shows a family whose wages run out before the end of the week, so that it eats only enough "to keep off starvation". Okonkwo\'s tone is personal and angry at the people who have "lectured" the poor; Engels is calmer until his last sentence, where he condemns "the brutality with which society abandons its members".',
              'Grade 6-7':
                'Okonkwo and Engels, writing about 180 years apart, agree that diet is decided by income, but they build the case in different ways. Okonkwo starts with the reader\'s own eyes: the imperative "Walk into any supermarket" and the instruction to "count the metres" of shelf space make the reader collect the evidence. Engels starts with a general law, that food "naturally varies according to his wages", and then descends the scale of wages step by step, from "meat daily" to the point where "potatoes form the sole food". Where Okonkwo measures the problem in percentages ("47%" against "just 11%"), Engels measures it in what is on the plate, and his concrete list is harder to look away from. Both writers look at the working week. Okonkwo\'s mother "worked two cleaning jobs" and had "twenty minutes" to feed her children, so time is as scarce as money; Engels shows wages "used up before the end of the week" and a family fed only enough "to keep off starvation". Both move from food to wider harm: Okonkwo to the choice "between heating and eating", Engels to "a multitude of diseases" that can disable the father on whom the family depends. Their targets differ. Okonkwo attacks the people who lecture the poor, calling the conversation about healthy eating "saturated with privilege"; Engels blames no individual but "society", which "abandons its members, just when their need is greatest". Okonkwo\'s anger is personal and present from her first sentence ("a peculiar cruelty"); Engels holds his back through a long, measured description and releases it only in his closing sentence, with the word "brutality", which makes his judgement land harder.',
            },
            markScheme: [
              'Compares perspectives throughout the response',
              'Analyses methods used by both writers',
              'Uses evidence from both texts',
              "Shows perceptive understanding of both writers' viewpoints",
              'Top band: sustained, detailed comparison with analysis of methods',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-06-writing',
        title: 'Section B: Transactional Writing',
        description:
          'You are advised to spend about 50 minutes on this section. Answer BOTH questions.',
        totalMarks: 28,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'edexcel-p2-06-q5',
            questionNumber: 5,
            questionText:
              'Your school or college wants to improve the food available to students.\n\nWrite a letter to the headteacher in which you argue for changes to the school canteen and food provision.\n\n(16 marks)',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear letter with appropriate form features (Dear..., formal register, Yours sincerely); a sustained argument with reasons and examples; generally accurate SPaG.',
              'Grade 6-7':
                'A well-crafted letter with sophisticated argument structure; counter-arguments anticipated and addressed; persuasive techniques used effectively; accurate and varied SPaG.',
              'Grade 8-9':
                'An assured, compelling letter demonstrating complete command of form and register; nuanced argument with strategic concession; distinctive, authoritative voice; technical virtuosity in SPaG.',
            },
            markScheme: [
              'Content and organisation (10 marks): clear argument, appropriate register and form, effective structure',
              'Technical accuracy (6 marks): sentence demarcation, punctuation, spelling, sentence variety',
            ],
          },
          {
            id: 'edexcel-p2-06-q6',
            questionNumber: 6,
            questionText:
              'A health magazine for young people has asked for contributions on the topic "You Are What You Eat."\n\nWrite an article for the magazine in which you explore the challenges young people face in eating healthily.\n\n(24 marks)',
            marks: 24,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear article with appropriate form features (headline, paragraphs, audience awareness); a sustained exploration of the topic with relevant examples; generally accurate SPaG.',
              'Grade 6-7':
                'A compelling article with distinctive journalistic voice; effective blend of personal experience and wider argument; structural sophistication; accurate, varied SPaG.',
              'Grade 8-9':
                'An outstanding article with assured voice and register; sophisticated exploration that balances personal insight with social commentary; ambitious vocabulary and syntax; flawless technical accuracy.',
            },
            markScheme: [
              'Content and organisation (16 marks): communication, register, form, organisation, engaging the reader',
              'Technical accuracy (8 marks): sentence demarcation, punctuation range, spelling, sentence variety',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════════
  // PAPER 07 - Work & Employment
  // ═══════════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p2-07',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-Fiction and Transactional Writing',
    subtitle: 'English Language 1EN0/02',
    code: '1EN0/02',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p2-07-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${P07_SOURCE_A_REF}\nSource B: ${P07_SOURCE_B_REF}\n\n${P07_SOURCE_B_GLOSSARY}`,
        totalMarks: 36,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-p2-07-q1',
            questionNumber: 1,
            questionText:
              'Read again the first two paragraphs of Source A.\n\nChoose four statements below which are TRUE.\n\nA) The writer believes the traditional office has been fatally wounded.\nB) The pandemic lasted for one year.\nC) Remote employees were found to be 13% more productive.\nD) Office-based workers took fewer sick days.\nE) A Stanford University study tracked 16,000 workers.\nF) Remote workers reported lower job satisfaction.\nG) 87% of workers offered flexible arrangements chose them.\nH) The study lasted for two years.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${P07_SOURCE_A}\n\nSource B:\n${P07_SOURCE_B}`,
            extractSource: `Source A: ${P07_SOURCE_A_REF} | Source B: ${P07_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'A, C, E, G - A: "the office... has been fatally wounded." C: "remote employees were 13% more productive." E: "A Stanford University study tracking 16,000 workers." G: "87% of workers offered flexible arrangements chose to take them."',
            },
            markScheme: ['1 mark per correct answer, maximum 4'],
          },
          {
            id: 'edexcel-p2-07-q2',
            questionNumber: 2,
            questionText:
              'You need to refer only to Source A for this question.\n\nHow does Ashworth use language to argue that the return-to-office movement is really about control?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${P07_SOURCE_A}`,
            extractSource: P07_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'Ashworth uses humour to make his argument engaging. He describes the office as a "fluorescent-lit cathedral of presenteeism" which is a metaphor comparing the office to a church, suggesting workers worship the idea of being seen at their desks. The humorous ending "with their slippers" makes working from home sound relaxed and sensible. He compares modern CEOs to "Victorian factory owners" to suggest they are old-fashioned and controlling. The final paragraph directly states the argument: "It is about control," using a short, blunt sentence for impact.',
              'Grade 6-7':
                'Ashworth constructs his argument through a rhetorical strategy of deflation - systematically stripping the return-to-office movement of its intellectual credibility to reveal the power dynamics beneath. The opening metaphor, "fluorescent-lit cathedral of presenteeism," is devastatingly precise: "cathedral" implies worship, "presenteeism" identifies what is worshipped - not productivity but visibility - and "fluorescent-lit" bathes the whole image in unflattering artificiality. The statistical evidence from Stanford and McKinsey functions as an empirical foundation, but Ashworth immediately undercuts the data\'s formality with the bathetic "with their slippers," a tonal shift that performs the very informality the office-defenders fear. The historical comparison to "Victorian factory owners" is not merely insulting but analytical - it positions the return-to-office mandate within a lineage of employer control. The final paragraph\'s structure enacts a rhetorical unveiling: "The truth is that the fight over remote work is not really about productivity" withholds the key word "control" until the short sentence that follows, "It is about control", creating anticipation and emphasis. The closing phrase - "can function perfectly well without supervision" - deploys the adverb "perfectly" with quiet, devastating confidence.',
            },
            markScheme: [
              'Analyses language techniques with specific examples',
              'Comments on effects of word choices',
              'Considers persuasive strategies',
              'Uses subject terminology accurately',
              'Top band: sophisticated, conceptualised analysis',
            ],
          },
          {
            id: 'edexcel-p2-07-q3',
            questionNumber: 3,
            questionText:
              'You need to refer only to Source B for this question.\n\nHow does Engels use language to convey the powerlessness of factory workers?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source B:\n${P07_SOURCE_B}`,
            extractSource: P07_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5':
                'Engels opens by calling the factory system a kind of "slavery", a shocking word that tells the reader at once that the workers are not free. The short sentence "Here ends all freedom in law and in fact" is blunt and final. He gives exact times and punishments: the worker "must be in the mill at half-past five in the morning", and if he is a couple of minutes late "he is fined". The list "He must eat, drink, and sleep at command" shows that even the most basic human needs are controlled. The bell is called "despotic", like a tyrant, and it "calls him from his bed, his breakfast, his dinner". In the second paragraph the employer is the "absolute law-giver" who can make any rules he likes, and even the courts take his side, so the worker has nowhere to turn.',
              'Grade 6-7':
                'Engels builds the worker\'s powerlessness from a single political claim and then proves it with the details of the working day. The opening sentence calls the factory the place where "the slavery in which the bourgeoisie holds the proletariat chained" is most conspicuous, and the short sentence that follows, "Here ends all freedom in law and in fact", sounds like a verdict. The rules are set out in parallel conditional clauses - "if he comes a couple of minutes too late, he is fined; if he comes ten minutes too late, he is not let in until breakfast is over" - and the pattern shows punishment rising mechanically with each minute. The arithmetic that follows exposes the injustice: "a quarter of the day\'s wages is withheld", though he loses "only two and one-half hours\' work out of twelve". The tricolon "He must eat, drink, and sleep at command" reduces life to its bodily needs and puts even these under orders, while the verb "vouchsafed" makes "the least possible time" for them sound like a favour granted by a superior. Personification completes the picture: the "despotic bell" becomes the master, and the list "his bed, his breakfast, his dinner" shows it reaching into every part of the day. The second paragraph moves from time to law. The employer is "absolute law-giver", free to change and add to "his codex at pleasure", and the courts\' reply - "You were your own master" - reads bitterly after everything the passage has shown about the worker\'s lack of choice. The last sentence closes the trap: the worker gets only "the mockery of the Justice of the Peace who is a bourgeois himself", and of "the law which is made by the bourgeoisie", so even the law belongs to the class that employs him.',
            },
            markScheme: [
              'Analyses language techniques with specific examples',
              'Comments on effects of word choices',
              'Considers how language conveys powerlessness',
              'Uses subject terminology accurately',
              'Top band: sophisticated, conceptualised analysis',
            ],
          },
          {
            id: 'edexcel-p2-07-q4',
            questionNumber: 4,
            questionText:
              'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different perspectives on the relationship between workers and those who control their working conditions.\n\nIn your answer, you could:\n- compare their different perspectives\n- compare the methods they use to convey their perspectives\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 26,
            questionType: 'comparison',
            extract: `Source A:\n${P07_SOURCE_A}\n\nSource B:\n${P07_SOURCE_B}`,
            extractSource: `Source A: ${P07_SOURCE_A_REF} | Source B: ${P07_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers argue that employers want to control their workers. Ashworth writes about modern offices, where bosses want staff back at their desks where they can be seen. Engels writes about the factories of the 1840s, where the employer controls every minute with fines and a "despotic bell". Both use comparison: Ashworth compares today\'s CEOs to "Victorian factory owners", and Engels compares the factory system to "slavery". Ashworth\'s tone is witty and sarcastic ("with their slippers"), while Engels is serious and angry. Both suggest that the real issue is power: Ashworth says "It is about control", and Engels shows that the employer is "absolute law-giver" and that even the law is on his side.',
              'Grade 6-7':
                'Ashworth and Engels, writing about 180 years apart, both see the workplace as somewhere employers control workers\' bodies and time. Ashworth\'s "fluorescent-lit cathedral of presenteeism" and Engels\'s factory, where the worker "must eat, drink, and sleep at command", are separated by technology but alike in principle: in both, the employer demands the worker\'s presence and controls his time. Ashworth even supplies the link, comparing modern CEOs to "Victorian factory owners". Their methods differ. Ashworth uses irony and humour, deflating the return-to-office movement with the bathos of "with their slippers" and with statistics that make the mandates look irrational. Engels uses the factory\'s own rules and arithmetic: the times, the fines, and "a quarter of the day\'s wages" withheld for a lateness that costs far less work, so the injustice is proved by numbers rather than asserted. Both writers expose what lies behind the employer\'s stated reasons. Ashworth says the fight "is not really about productivity. It is about control"; Engels shows an employer who "makes regulations at will" and courts that tell the worker "you must be bound by it". The difference is in the balance of power. Ashworth\'s workers have already won something - they have shown they "can function perfectly well without supervision" - so his managers are on the defensive. Engels\'s workers have nothing to bargain with, because even "the law which is made by the bourgeoisie" is on the employer\'s side. Ashworth describes a struggle still under way; Engels describes a defeat built into the system.',
            },
            markScheme: [
              'Compares perspectives throughout the response',
              'Analyses methods used by both writers',
              'Uses evidence from both texts',
              "Shows perceptive understanding of both writers' viewpoints",
              'Top band: sustained, detailed comparison with analysis of methods',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-07-writing',
        title: 'Section B: Transactional Writing',
        description:
          'You are advised to spend about 50 minutes on this section. Answer BOTH questions.',
        totalMarks: 28,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'edexcel-p2-07-q5',
            questionNumber: 5,
            questionText:
              'Your local council is considering reducing funding for work experience programmes in schools.\n\nWrite a letter to the council arguing that work experience is important for young people.\n\n(16 marks)',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear letter with appropriate form features (formal opening and closing, respectful register); a sustained argument with relevant reasons and examples; generally accurate SPaG.',
              'Grade 6-7':
                'A well-crafted letter with sophisticated argument structure; evidence of awareness of counter-arguments; appropriate register for audience; accurate and varied SPaG.',
              'Grade 8-9':
                "An assured, compelling letter with masterful command of formal register; nuanced argument that demonstrates understanding of the council's position while making an irrefutable case; distinctive voice; technical virtuosity.",
            },
            markScheme: [
              'Content and organisation (10 marks): clear argument, appropriate register and form, effective structure',
              'Technical accuracy (6 marks): sentence demarcation, punctuation, spelling, sentence variety',
            ],
          },
          {
            id: 'edexcel-p2-07-q6',
            questionNumber: 6,
            questionText:
              'A careers website for young people has asked for contributions about the future of work.\n\nWrite an article in which you explore what the world of work might look like for your generation.\n\n(24 marks)',
            marks: 24,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear article with appropriate form features (headline, paragraphs, audience awareness); a sustained exploration with relevant ideas; generally accurate SPaG.',
              'Grade 6-7':
                'A compelling article with distinctive voice; effective blend of speculation and current evidence; structural sophistication; accurate, varied SPaG.',
              'Grade 8-9':
                'An outstanding article with assured journalistic voice; sophisticated exploration that balances optimism and realism; ambitious vocabulary and syntax; flawless technical accuracy.',
            },
            markScheme: [
              'Content and organisation (16 marks): communication, register, form, organisation, engaging the reader',
              'Technical accuracy (8 marks): sentence demarcation, punctuation range, spelling, sentence variety',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════════
  // PAPER 08 - Childhood
  // ═══════════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p2-08',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-Fiction and Transactional Writing',
    subtitle: 'English Language 1EN0/02',
    code: '1EN0/02',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p2-08-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${P08_SOURCE_A_REF}\nSource B: ${P08_SOURCE_B_REF}`,
        totalMarks: 36,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-p2-08-q1',
            questionNumber: 1,
            questionText:
              "Read again the first two paragraphs of Source A.\n\nChoose four statements below which are TRUE.\n\nA) The writer believes childhood has been stolen.\nB) The theft of childhood happened suddenly.\nC) Adults acted with good intentions.\nD) The modern child wakes at six o'clock.\nE) The child attends an after-school club until five.\nF) The child walks to school.\nG) The child described is eight years old.\nH) Weekend schedules are free and unstructured.",
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${P08_SOURCE_A}\n\nSource B:\n${P08_SOURCE_B}`,
            extractSource: `Source A: ${P08_SOURCE_A_REF} | Source B: ${P08_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'A, C, E, G - A: "We have stolen childhood." C: "carried out with the very best intentions." E: "attends an after-school club until five." G: "She is eight years old."',
            },
            markScheme: ['1 mark per correct answer, maximum 4'],
          },
          {
            id: 'edexcel-p2-08-q2',
            questionNumber: 2,
            questionText:
              'You need to refer only to Source A for this question.\n\nHow does Professor Brookes use language to argue that modern children have lost the freedom of unstructured time?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${P08_SOURCE_A}`,
            extractSource: P08_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'Brookes uses the metaphor of "stolen childhood" to make it sound like a crime has been committed. The long list of the child\'s daily activities - "school... after-school club... swimming or piano or tutoring" - creates a sense of an exhausting, packed schedule. Comparing the child\'s diary to "a cabinet minister" is humorous but also shocking because it highlights how overworked children are. The rhetorical list "Time to be bored. Time to lie on the grass" repeats "Time to" to emphasise what is missing. The word "irony" at the end draws attention to the contradiction that trying to help children has actually harmed them.',
              'Grade 6-7':
                'Brookes constructs her argument through a rhetorical architecture of progressive revelation. The opening verb "stolen" immediately criminalises modern parenting, yet the qualifying phrase "so gradually that we barely noticed" introduces the concept of incremental, unconscious harm - more insidious than deliberate cruelty. The second paragraph enacts its own argument: the breathless catalogue of activities, linked by commas rather than full stops, syntactically reproduces the relentlessness of the child\'s schedule. The bathetic comparison to "a cabinet minister" deploys humour to crystallise the absurdity. The third paragraph pivots from diagnosis to prescription, and the anaphoric "Time to" constructions are deliberately expansive - "lie on the grass and watch clouds" - their leisurely rhythm performing the very spaciousness they advocate. The abstract noun "enrichment" is placed in scare quotes by context if not typography, its meaning inverted: what adults call enrichment is actually impoverishment. The final paragraph\'s "The irony is savage" weaponises the parents\' own logic against them: the verb "produced" reduces child-rearing to manufacturing, while the tricolon "anxious, overscheduled, and increasingly unable" presents a generation defined by its deficits.',
            },
            markScheme: [
              'Analyses language techniques with specific examples',
              'Comments on effects of word choices',
              'Considers persuasive strategies',
              'Uses subject terminology accurately',
              'Top band: sophisticated, conceptualised analysis',
            ],
          },
          {
            id: 'edexcel-p2-08-q3',
            questionNumber: 3,
            questionText:
              'You need to refer only to Source B for this question.\n\nHow does the writer use language to convey the value of an unsupervised childhood?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source B:\n${P08_SOURCE_B}`,
            extractSource: P08_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses a warm, nostalgic tone to describe childhood freedom. The phrase "turned out after breakfast and expected to return at dusk" makes it sound like the children were almost wild animals, free to roam. The listing of activities - building dams, climbing trees, catching tadpoles - creates a sense of endless adventure. Specific names like "Tommy Griggs" and "Sally Evans" make the memories feel real and personal. The writer is honest, admitting there was "cruelty" and "danger," which makes the positive memories more believable. The final image of "the fading of the light" is poetic and suggests childhood itself fading away.',
              'Grade 6-7':
                'The writer constructs the memoir through a careful balance of celebration and candour that gives its nostalgia moral authority. The opening phrase "largely out of doors" establishes physical freedom as the defining feature of childhood, while "the great unremarked privilege of rural poverty" performs a sophisticated rhetorical manoeuvre - reframing deprivation as liberation. The mother\'s absence is presented not as neglect but as the enabling condition of freedom: "neither the time nor the inclination" pairs economic necessity with philosophical choice. The central paragraph\'s accumulation of activities - "built dams... climbed trees... caught tadpoles" - uses the past simple tense with deliberate repetition, each short clause a discrete memory that collectively builds an impression of rich, varied experience. The social learning - "Tommy Griggs could not be trusted" - embeds complex psychological development within apparently simple observation. The concessive paragraph ("I do not wish to romanticise this") is strategically essential: by acknowledging "cruelty," "danger," and "desperate boredom," the writer earns the right to the final, elegiac claim about "the slow, unsupervised discovery of who you are when nobody is watching." The closing image - "the fading of the light" - operates as both literal (the deadline of dusk) and metaphorical (the passing of this kind of childhood).',
            },
            markScheme: [
              'Analyses language techniques with specific examples',
              'Comments on effects of word choices',
              'Considers how language conveys value and nostalgia',
              'Uses subject terminology accurately',
              'Top band: sophisticated, conceptualised analysis',
            ],
          },
          {
            id: 'edexcel-p2-08-q4',
            questionNumber: 4,
            questionText:
              'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different perspectives on childhood freedom.\n\nIn your answer, you could:\n- compare their different perspectives\n- compare the methods they use to convey their perspectives\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 26,
            questionType: 'comparison',
            extract: `Source A:\n${P08_SOURCE_A}\n\nSource B:\n${P08_SOURCE_B}`,
            extractSource: `Source A: ${P08_SOURCE_A_REF} | Source B: ${P08_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers believe that unstructured time is important for children, but they approach the topic differently. Brookes argues as a critic of modern parenting, using an imagined child\'s packed timetable to show that children are over-scheduled. The writer of Source B remembers their own free childhood. Both use lists - Brookes lists the child\'s packed schedule, the memoir lists outdoor adventures - but for opposite effects: Brookes\'s list feels exhausting, while the memoir\'s feels exciting and free. Both writers are honest about the downsides: Brookes admits that adults acted "with the very best intentions", and the writer of Source B admits there was "cruelty" and "danger" in their childhood. This makes both arguments more convincing.',
              'Grade 6-7':
                'Brookes and the writer of Source B share a fundamental conviction - that children need unsupervised time - but their rhetorical strategies reveal different relationships to the argument. Brookes writes as a diagnostician, analysing a contemporary problem through evidence and logic; the writer of Source B writes as a witness, testifying to a lost world through memory and sensation. This distinction shapes their methods. Brookes\'s catalogue of the modern child\'s schedule is designed to exhaust the reader, its accumulative syntax reproducing the breathlessness it critiques. The memoir\'s catalogue of childhood activities achieves the opposite effect: the short, simple clauses - "We built dams... We climbed trees... We caught tadpoles" - are spacious, each one a self-contained world. Both writers deploy strategic concession to strengthen their arguments. Brookes\'s acknowledgement that adults acted "with the very best intentions" and the memoir\'s admission of "casual savagery" and "desperate boredom" serve the same function: they demonstrate intellectual honesty that makes the central claim more credible. The most revealing difference lies in tone. Brookes\'s "The irony is savage" is angry, accusatory, directed at a parenting culture she holds responsible. The memoir\'s nostalgia is gentler, suffused with loss: "the fading of the light" suggests not only the end of day but the end of an era. Together, the texts construct a powerful argument through complementary emotions: Brookes provides the intellectual case, the memoir the emotional proof.',
            },
            markScheme: [
              'Compares perspectives throughout the response',
              'Analyses methods used by both writers',
              'Uses evidence from both texts',
              "Shows perceptive understanding of both writers' viewpoints",
              'Top band: sustained, detailed comparison with analysis of methods',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-08-writing',
        title: 'Section B: Transactional Writing',
        description:
          'You are advised to spend about 50 minutes on this section. Answer BOTH questions.',
        totalMarks: 28,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'edexcel-p2-08-q5',
            questionNumber: 5,
            questionText:
              'A parent-teacher association has asked for young people\'s views on the question: "Are children today given too little freedom?"\n\nWrite a speech in which you present your views to the parent-teacher association.\n\n(16 marks)',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear speech with appropriate form features (direct address, rhetorical questions, appropriate register for adult audience); a sustained argument with personal examples; generally accurate SPaG.',
              'Grade 6-7':
                'A well-crafted speech with sophisticated rhetorical techniques; effective balance of personal experience and broader argument; counter-arguments addressed; accurate and varied SPaG.',
              'Grade 8-9':
                'An assured, compelling speech with masterful rhetoric; nuanced argument that acknowledges parental concerns while making a persuasive case; distinctive voice that commands attention; technical virtuosity.',
            },
            markScheme: [
              'Content and organisation (10 marks): clear argument, appropriate register and form, effective structure',
              'Technical accuracy (6 marks): sentence demarcation, punctuation, spelling, sentence variety',
            ],
          },
          {
            id: 'edexcel-p2-08-q6',
            questionNumber: 6,
            questionText:
              'A national newspaper is running a series called "The Childhood We Deserve."\n\nWrite an article in which you argue for what you believe would be the ideal childhood.\n\n(24 marks)',
            marks: 24,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear article with appropriate form features (headline, paragraphs, engaging opening); a sustained exploration with relevant ideas and examples; generally accurate SPaG.',
              'Grade 6-7':
                'A compelling article with distinctive journalistic voice; effective blend of argument and personal reflection; well-organised with a clear line of reasoning; accurate, varied SPaG.',
              'Grade 8-9':
                'An outstanding article with assured voice; sophisticated argument that avoids simplistic nostalgia; ambitious vocabulary and syntax; flawless technical accuracy.',
            },
            markScheme: [
              'Content and organisation (16 marks): communication, register, form, organisation, engaging the reader',
              'Technical accuracy (8 marks): sentence demarcation, punctuation range, spelling, sentence variety',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════════
  // PAPER 09 - Housing
  // ═══════════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p2-09',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-Fiction and Transactional Writing',
    subtitle: 'English Language 1EN0/02',
    code: '1EN0/02',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p2-09-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${P09_SOURCE_A_REF}\nSource B: ${P09_SOURCE_B_REF}\n\n${P09_SOURCE_B_GLOSSARY}`,
        totalMarks: 36,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-p2-09-q1',
            questionNumber: 1,
            questionText:
              'Read again the first two paragraphs of Source A.\n\nChoose four statements below which are TRUE.\n\nA) The writer is thirty-four years old.\nB) The writer has a poor credit score.\nC) The writer has never missed a rent payment.\nD) The average house price in England is £250,000.\nE) The average salary is £35,000.\nF) The writer needs a deposit of approximately £30,000.\nG) The writer can save £500 per month.\nH) The writer has been renting for five years.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${P09_SOURCE_A}\n\nSource B:\n${P09_SOURCE_B}`,
            extractSource: `Source A: ${P09_SOURCE_A_REF} | Source B: ${P09_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'A, C, E, F - A: "I am thirty-four years old." C: "I have never missed a rent payment." E: "The average salary is \u00a335,000." F: "a deposit of approximately \u00a330,000."',
            },
            markScheme: ['1 mark per correct answer, maximum 4'],
          },
          {
            id: 'edexcel-p2-09-q2',
            questionNumber: 2,
            questionText:
              'You need to refer only to Source A for this question.\n\nHow does Brennan use language to convey her frustration at the impossibility of buying a home?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${P09_SOURCE_A}`,
            extractSource: P09_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'Brennan uses a frustrated, direct tone throughout. She lists her qualifications - "a degree, a full-time job, and a credit score" - to show she has done everything right but still cannot buy a home, which creates sympathy. The phrase "Any house. Anywhere" uses short sentences for dramatic emphasis. The word "brutal" to describe the numbers suggests they are violent and cruel. The simile "like water into sand" describes how rent money disappears with nothing to show for it. The contrast between her parents\' experience - buying for \u00a342,000 - and current prices highlights how unfair the situation is. The final sentence, "That country no longer exists," is blunt and sad.',
              'Grade 6-7':
                'Brennan constructs her argument through a rhetoric of accumulation and deflation. The opening paragraph establishes credentials through a tricolon - "a degree, a full-time job, and a credit score" - each item representing a supposed marker of financial readiness, before the devastating adversative "And I cannot buy a house." The subsequent fragments - "Not a nice house. Not a house in a fashionable area. Any house. Anywhere" - perform a progressive lowering of expectations, each sentence stripping away another aspiration until nothing remains. The mathematical vocabulary of paragraph two ("£290,000... £35,000... £30,000... £200 per month") deploys numbers as evidence of structural impossibility, the grinding arithmetic mimicking the writer\'s own frustrated calculations. The simile "like water into sand" captures both the futility and the invisibility of rent payments - money absorbed without trace. The penultimate paragraph\'s listing of domestic indignities ("damp in the bathroom," "six weeks to fix the boiler") grounds the abstract housing crisis in lived, physical discomfort. The final paragraph\'s shift to the parents\' experience deploys historical comparison not as nostalgia but as political argument: "That country no longer exists" transforms housing policy failure into a kind of national death.',
            },
            markScheme: [
              'Analyses language techniques with specific examples',
              'Comments on effects of word choices',
              'Considers persuasive strategies',
              'Uses subject terminology accurately',
              'Top band: sophisticated, conceptualised analysis',
            ],
          },
          {
            id: 'edexcel-p2-09-q3',
            questionNumber: 3,
            questionText:
              'You need to refer only to Source B for this question.\n\nHow does the writer use language to convey the horror and injustice of the housing conditions of the poor?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source B:\n${P09_SOURCE_B}`,
            extractSource: P09_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses shocking comparisons to show how terrible the housing is. The homes are called "pestilential human rookeries", comparing people to crowded birds in their nests, and the crowding calls to mind "the middle passage of the slave ship". The writer speaks to the reader as "you" and takes them on a journey: "You have to ascend rotten staircases" and "You have to grope your way along dark and filthy passages swarming with vermin". Repeating "You have to" makes the reader feel they are there. The question "Have you pitied the poor creatures who sleep under railway arches" is surprising, because the writer then says the homeless "are to be envied" compared with the people who live here. The measurement "Eight feet square" shows how tiny the rooms are, and the ending, "it is everywhere", shows there is no escape from the filth. The phrase "belong, as much as you, to the race for whom Christ died" reminds the reader that these people are just as human as they are, which makes the way they live unjust.',
              'Grade 6-7':
                'The writer conveys the horror of these homes by making the reader travel to them, and the injustice by insisting on who lives there. The opening sentence challenges the reader directly - "Few who will read these pages have any conception" - so the comfortable reader\'s ignorance becomes part of the problem. Two comparisons set the scale: "pestilential human rookeries" reduces people to crowded birds and ties their homes to disease, and "the middle passage of the slave ship" summons an image of cruelty a Victorian reader would recognise, implying that human beings are being packed like cargo. The central sentences use the second person and anaphora - "you have to penetrate", "You have to ascend", "You have to grope" - so the reader\'s own body passes through courts "reeking with poisonous and malodorous gases" and up staircases that "imperil the limbs and lives of the unwary". The long sentence about the courts repeats "which" three times - "which the sun never penetrates, which are never visited by a breath of fresh air, and which rarely know the virtues of a drop of cleansing water" - listing the absence of sun, air and water, the simplest things anyone needs. The injustice is stated at the moment of arrival: the "dens" hold people who "belong, as much as you, to the race for whom Christ died", a Christian claim of equal worth set against the animal verb "herd together". A rhetorical question then overturns the reader\'s pity for the homeless, who "are to be envied" by comparison. The passage ends by moving from measurement to sensation: after the flat "Eight feet square", the filth seems to move of its own accord, "exuding through cracks" and "running down the walls", until the final short clause, "it is everywhere", leaves no escape.',
            },
            markScheme: [
              'Analyses language techniques with specific examples',
              'Comments on effects of word choices',
              'Considers how language conveys horror and injustice',
              'Uses subject terminology accurately',
              'Top band: sophisticated, conceptualised analysis',
            ],
          },
          {
            id: 'edexcel-p2-09-q4',
            questionNumber: 4,
            questionText:
              'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different perspectives on the injustice of housing.\n\nIn your answer, you could:\n- compare their different perspectives\n- compare the methods they use to convey their perspectives\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 26,
            questionType: 'comparison',
            extract: `Source A:\n${P09_SOURCE_A}\n\nSource B:\n${P09_SOURCE_B}`,
            extractSource: `Source A: ${P09_SOURCE_A_REF} | Source B: ${P09_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers present housing as unfair to the people who have least. Brennan focuses on how impossible it is to buy a home even with a good job, while the writer of Source B describes the terrible conditions the poorest Londoners lived in. Brennan uses her own experience and numbers - she pays "£1,100 per month in rent" - to show that she pays a lot and gets little. The writer of Source B takes the reader on a tour of the slums, using "you" to make the reader picture the "rotten staircases" and "dark and filthy passages". Both show that bad housing affects comfort and health: Brennan mentions "damp in the bathroom", while Source B describes walls "black with the accretions of filth". Brennan\'s tone is frustrated and personal, while Source B is horrified and appeals to the reader\'s conscience, reminding them that the poor "belong, as much as you, to the race for whom Christ died".',
              'Grade 6-7':
                'Brennan and the writer of Source B, about 140 years apart, both expose housing injustice, but from opposite positions. Brennan writes from inside the problem: she opens with her credentials - "a degree, a full-time job, and a credit score" - so that her failure to buy cannot be blamed on her. The writer of Source B writes from outside, as a guide who warns that "Few who will read these pages have any conception" of what they are about to see, and the repeated "You have to" makes the reader a visitor. Brennan asks the reader to identify with her; Source B asks the reader to witness. Their evidence differs in kind. Brennan\'s is financial: the "£290,000" house price, the "£200 per month" she can save, the rent that "vanishes into someone else\'s mortgage like water into sand". Source B\'s is physical: courts "reeking with poisonous and malodorous gases", staircases that "threaten to give way", rooms "Eight feet square". Both use measurement to make injustice undeniable, one in pounds and the other in feet. Both, too, compare their subjects with others to sharpen the unfairness. Brennan compares herself with her parents, who bought a house "on a single teacher\'s salary", and concludes that "That country no longer exists"; Source B compares the slum-dwellers with people sleeping "under railway arches", who "are to be envied". The injustice they describe differs in scale. Brennan\'s is the loss of security and a future ("no equity, no security"); Source B\'s is the denial of light, air and water to people who "belong, as much as you, to the race for whom Christ died". Brennan\'s tone is controlled, often sardonic frustration; Source B\'s is moral outrage, built through accumulating horror to the final "it is everywhere".',
            },
            markScheme: [
              'Compares perspectives throughout the response',
              'Analyses methods used by both writers',
              'Uses evidence from both texts',
              "Shows perceptive understanding of both writers' viewpoints",
              'Top band: sustained, detailed comparison with analysis of methods',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-09-writing',
        title: 'Section B: Transactional Writing',
        description:
          'You are advised to spend about 50 minutes on this section. Answer BOTH questions.',
        totalMarks: 28,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'edexcel-p2-09-q5',
            questionNumber: 5,
            questionText:
              'A local newspaper is asking young people for their views on housing.\n\nWrite a letter to the newspaper in which you explain the challenges young people face in finding affordable housing.\n\n(16 marks)',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear letter with appropriate form features (Dear Editor, formal register, sign-off); a sustained argument with relevant examples; generally accurate SPaG.',
              'Grade 6-7':
                'A well-crafted letter with a distinctive voice; effective blend of personal concern and wider social argument; counter-arguments anticipated; accurate and varied SPaG.',
              'Grade 8-9':
                'An assured, compelling letter with sophisticated argument that addresses root causes; distinctive voice that balances frustration with constructive proposals; technical virtuosity.',
            },
            markScheme: [
              'Content and organisation (10 marks): clear argument, appropriate register and form, effective structure',
              'Technical accuracy (6 marks): sentence demarcation, punctuation, spelling, sentence variety',
            ],
          },
          {
            id: 'edexcel-p2-09-q6',
            questionNumber: 6,
            questionText:
              'A magazine aimed at young adults has asked for contributions to a feature called "Home Truths."\n\nWrite an article in which you explore what "home" means to your generation.\n\n(24 marks)',
            marks: 24,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear article with appropriate form features (headline, engaging opening, paragraphs); a sustained exploration with personal and wider perspectives; generally accurate SPaG.',
              'Grade 6-7':
                'A compelling article with distinctive voice; effective exploration that moves between personal reflection and social commentary; well-organised structure; accurate, varied SPaG.',
              'Grade 8-9':
                'An outstanding article with assured voice; sophisticated exploration that redefines "home" for a new generation; ambitious vocabulary and syntax; flawless technical accuracy.',
            },
            markScheme: [
              'Content and organisation (16 marks): communication, register, form, organisation, engaging the reader',
              'Technical accuracy (8 marks): sentence demarcation, punctuation range, spelling, sentence variety',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════════
  // PAPER 10 - Entertainment
  // ═══════════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p2-10',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-Fiction and Transactional Writing',
    subtitle: 'English Language 1EN0/02',
    code: '1EN0/02',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p2-10-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${P10_SOURCE_A_REF}\nSource B: ${P10_SOURCE_B_REF}\n\n${P10_SOURCE_B_GLOSSARY}`,
        totalMarks: 36,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-p2-10-q1',
            questionNumber: 1,
            questionText:
              'Read again the first two paragraphs of Source A.\n\nChoose four statements below which are TRUE.\n\nA) The British high street is dying.\nB) Youth clubs were glamorous institutions.\nC) Community spaces were the connective tissue of community life.\nD) Online connectivity has healed the wounds left by lost spaces.\nE) The writer spent his teenage years in a youth club.\nF) The youth club was above a bakery.\nG) The youth club was in Wolverhampton.\nH) The carpet in the youth club was new.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${P10_SOURCE_A}\n\nSource B:\n${P10_SOURCE_B}`,
            extractSource: `Source A: ${P10_SOURCE_A_REF} | Source B: ${P10_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'A, C, E, G - A: "The British high street is dying." C: "they were the connective tissue of community life." E: "I spent my teenage years in a youth club." G: "a youth club above a chip shop in Wolverhampton."',
            },
            markScheme: ['1 mark per correct answer, maximum 4'],
          },
          {
            id: 'edexcel-p2-10-q2',
            questionNumber: 2,
            questionText:
              'You need to refer only to Source A for this question.\n\nHow does Donovan use language to argue that young people have lost vital communal spaces?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${P10_SOURCE_A}`,
            extractSource: P10_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'Donovan uses the metaphor "connective tissue" to describe community spaces, suggesting that without them the community falls apart like a body without muscles and tendons. He deliberately describes the youth club as terrible - "the carpet was catastrophic," the pool table had "a lean" - to show that the physical quality did not matter. What mattered was being together. The phrase "simply exist alongside each other" emphasises how basic and important this need is. The listing of social skills learned - "to wait your turn... to negotiate, to compromise, to read a room" - shows how much was gained from these spaces. The final contrast - "infinite entertainment and almost no communal space" - uses antithesis to highlight what has been lost.',
              'Grade 6-7':
                'Donovan constructs his argument through a rhetorical strategy of deliberate diminishment followed by elevation. The youth club is introduced through its most unappealing qualities - the smell of "sweat and cheap deodorant," the "catastrophic" carpet, the biased pool table - yet this unflinching honesty serves a persuasive purpose: by refusing to romanticise the physical space, Donovan isolates and elevates its social function. The metaphor "connective tissue" is anatomically precise: connective tissue is invisible, unglamorous, but without it the body cannot function. The paragraph listing social skills acquired ("to wait your turn... to negotiate, to compromise, to read a room") deploys the infinitive form to create a curriculum of implicit learning, each skill presented not as taught but as "absorbed" - a verb suggesting osmosis rather than instruction. The antithetical structure of the final paragraph - "infinite entertainment and almost no communal space" - crystallises the argument through juxtaposition: "infinite" against "almost no," the quantitative abundance of digital entertainment against the qualitative poverty of physical togetherness. The closing phrase - "everything except the thing they need most: each other" - uses the colon to create a dramatic pause before the devastating simplicity of the final two words.',
            },
            markScheme: [
              'Analyses language techniques with specific examples',
              'Comments on effects of word choices',
              'Considers persuasive strategies',
              'Uses subject terminology accurately',
              'Top band: sophisticated, conceptualised analysis',
            ],
          },
          {
            id: 'edexcel-p2-10-q3',
            questionNumber: 3,
            questionText:
              'You need to refer only to Source B for this question.\n\nHow does Dickens use language to argue that working people need entertainment that feeds the imagination, not only useful instruction?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source B:\n${P10_SOURCE_B}`,
            extractSource: P10_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5':
                'Dickens argues that ordinary people have a natural love of drama that cannot, and should not, be taken away. He calls it "an innate love", meaning it is part of them from birth, and says it would be "a very doubtful benefit to society" to root it out. He admits that the Polytechnic Institution, with its "useful information", is "a great public benefit and a wonderful place", but says that a people who had only that in their spare time "would be an uncomfortable community". His point is that people need to use their imagination, which "no amount of steam-engines will satisfy". He then introduces Joe Whelks, who is "not much of a reader" but who, at the theatre, "will unravel a story through all its entanglements". The list of what Joe lacks - books, a room to read in, the wish to read - is set against everything the theatre gives him, which shows that drama reaches people whom books cannot.',
              'Grade 6-7':
                'Dickens builds his argument through concession and then contrast, so that instruction is praised and then shown not to be enough. He opens by predicting that nothing will "root out" the people\'s "innate love" of drama; the adjective "innate" makes the taste part of human nature, and the dry understatement "a very doubtful benefit to society" dismisses anyone who would try. The long sentence about the Polytechnic Institution fairly lists its "ingenious models" and "useful information" and calls it "a great public benefit and a wonderful place", before "but" turns the whole sentence: a people formed "entirely" by such places "would be an uncomfortable community". The mild word "uncomfortable" makes the objection sound like common sense rather than attack. After the cut, Dickens names what instruction misses: "a range of imagination in most of us, which no amount of steam-engines will satisfy". The steam-engine stands for an age of useful machinery, and the comically hyphenated "The-great-exhibition-of-the-works-of-industry-of-all-nations" deflates its solemnity. Drama is then defined through a tricolon of superlatives, "the most obvious, the least troublesome, and the most real, of all escapes out of the literal world". Finally the argument becomes a person. Joe Whelks is introduced through a list of lacks ("no great store of books, no very commodious room to read in"), answered by a run of imperatives - "put Joe in the gallery", "show him", "tell him" - that piles up what the theatre can give. The sentence\'s length mirrors Joe\'s absorption as he sits "as long after midnight as you have anything left to show him", and the closing sentence turns the anecdote into evidence: the theatres he goes to "are always full".',
            },
            markScheme: [
              'Analyses language techniques with specific examples',
              'Comments on effects of word choices',
              'Considers how language builds an argument',
              'Uses subject terminology accurately',
              'Top band: sophisticated, conceptualised analysis',
            ],
          },
          {
            id: 'edexcel-p2-10-q4',
            questionNumber: 4,
            questionText:
              'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different perspectives on the importance of communal spaces for entertainment and social life.\n\nIn your answer, you could:\n- compare their different perspectives\n- compare the methods they use to convey their perspectives\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 26,
            questionType: 'comparison',
            extract: `Source A:\n${P10_SOURCE_A}\n\nSource B:\n${P10_SOURCE_B}`,
            extractSource: `Source A: ${P10_SOURCE_A_REF} | Source B: ${P10_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers argue that ordinary people need places to go in their free time. Donovan writes about the youth club he went to as a teenager, "above a chip shop in Wolverhampton", while Dickens writes about the theatre that working people like Joe Whelks go to, the "Victoria Theatre". They value these places for different reasons. Donovan values the youth club for the people in it, because it let teenagers "simply exist alongside each other". Dickens values the theatre for the stories it tells, which satisfy the "range of imagination in most of us". Both use a specific example to make their point: Donovan uses himself, and Dickens uses the character of Joe Whelks. Donovan admits his youth club was "terrible", but says it was still "the most important place in my life". Donovan\'s tone is nostalgic and sad about what has been lost, while Dickens is confident and humorous, pointing out that the theatres "are always full".',
              'Grade 6-7':
                'Donovan and Dickens, writing more than 170 years apart, both defend ordinary people\'s places of leisure, but they value those places for different things. For Donovan the value lies in company. He says plainly that the youth club did not provide "entertainment in the modern, curated, algorithm-driven sense" but space - "physical, social, psychological space" - and that its lessons were "absorbed" from other people, not taught. For Dickens the value lies in imagination: the theatre offers "the most real, of all escapes out of the literal world" and satisfies a need that "no amount of steam-engines will satisfy". Both argue against a narrower idea of what people need. Donovan\'s target is the belief that "infinite entertainment" on screens can replace a shared place; Dickens\'s is the belief that "useful information" is enough, and he warns that a people formed "entirely" by places of instruction "would be an uncomfortable community". Their methods differ. Donovan uses memoir, and his affectionate detail - the "catastrophic" carpet, the pool table with "a lean" - shows that the place mattered despite its shabbiness. Dickens invents a representative figure, Joe Whelks, and a long sentence of imperatives ("put Joe in the gallery", "show him", "tell him") that shows the theatre at work on him. Their tones reflect their situations. Donovan writes an elegy for places already closed, ending on what young people lack: "each other". Dickens writes with confidence about a taste that nothing will "root out", and his evidence is that the theatres Joe goes to "are always full".',
            },
            markScheme: [
              'Compares perspectives throughout the response',
              'Analyses methods used by both writers',
              'Uses evidence from both texts',
              "Shows perceptive understanding of both writers' viewpoints",
              'Top band: sustained, detailed comparison with analysis of methods',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-10-writing',
        title: 'Section B: Transactional Writing',
        description:
          'You are advised to spend about 50 minutes on this section. Answer BOTH questions.',
        totalMarks: 28,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'edexcel-p2-10-q5',
            questionNumber: 5,
            questionText:
              'Your local council is planning to close the only youth centre in your area to save money.\n\nWrite a speech to be delivered at a public meeting in which you argue that the youth centre should remain open.\n\n(16 marks)',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear speech with appropriate form features (direct address to audience, rhetorical questions, emotive language); a sustained argument with personal examples; generally accurate SPaG.',
              'Grade 6-7':
                'A well-crafted speech with sophisticated rhetorical techniques; effective use of anecdote and evidence; appropriate register for a public meeting; accurate and varied SPaG.',
              'Grade 8-9':
                "An assured, compelling speech with masterful rhetoric; nuanced argument that addresses the council's financial concerns while making an irrefutable case for the centre's social value; distinctive, passionate voice; technical virtuosity.",
            },
            markScheme: [
              'Content and organisation (10 marks): clear argument, appropriate register and form, effective structure',
              'Technical accuracy (6 marks): sentence demarcation, punctuation, spelling, sentence variety',
            ],
          },
          {
            id: 'edexcel-p2-10-q6',
            questionNumber: 6,
            questionText:
              'A website about youth culture has asked for contributions to a feature called "What We Do For Fun."\n\nWrite an article in which you explore how young people today spend their leisure time and whether this has changed for better or worse.\n\n(24 marks)',
            marks: 24,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear article with appropriate form features (headline, paragraphs, awareness of target audience); a sustained exploration of the topic with relevant personal and wider examples; generally accurate SPaG.',
              'Grade 6-7':
                'A compelling article with distinctive voice; effective balance of personal experience and broader cultural commentary; well-organised with clear line of argument; accurate, varied SPaG.',
              'Grade 8-9':
                'An outstanding article with assured journalistic voice; sophisticated exploration that avoids simplistic generational stereotypes; ambitious vocabulary and structural choices; flawless technical accuracy.',
            },
            markScheme: [
              'Content and organisation (16 marks): communication, register, form, organisation, engaging the reader',
              'Technical accuracy (8 marks): sentence demarcation, punctuation range, spelling, sentence variety',
            ],
          },
        ],
      },
    ],
  },
]
