// @ts-nocheck
/**
 * WJEC GCSE English Language Component 2 (C700U20-1), third set: papers 11 to
 * 15, each pairing a modern opinion article (Source A) with a
 * nineteenth-century source (Source B). Live: served through the lazy loader
 * as 'chunk/wjec-c2-c' (src/data/mock-exam-loader.ts,
 * src/data/mock-exams/index-data.ts).
 *
 * WHAT WAS WRONG (found 26 September 2026 by
 * scripts/check-mock-exam-extracts.mjs, and checked by hand on 27 September
 * for the three it could not read). Every Source B was printed as the words of
 * a named nineteenth-century writer, and none was:
 * - "William Cobbett, Rural Rides, 1830": 0 of 11 sentences are in the book.
 * - "William Morris, 'Art and the People', a lecture delivered in Birmingham,
 *   1879": the lecture is "The Art of the People" (Hopes and Fears for Art,
 *   Project Gutenberg #3773), and 0 of 13 sentences are in it. It had Morris
 *   visit an evening class of Bradford mill workers, which the lecture does
 *   not contain.
 * - "Elizabeth Fry (attributed), Observations on the Visiting of Female
 *   Prisoners, 1827": a first-person tour of a women's wing, with a matron, a
 *   woman jailed for stealing bread and a chaplain who says "We punish them
 *   for being poor". The 1827 book is not on Gutenberg, so the checker could
 *   not read it, and the label's own "(attributed)" admitted the doubt; 0 of
 *   10 sentences are in E. R. Pitman's life of Fry (#16606), which prints her
 *   evidence and journals at length.
 * - "Charles Knight, 'In Defence of the Popular Press', The Edinburgh Review,
 *   1855": no such article was found, and 0 of 14 sentences are in Knight's
 *   own book on the subject, The Old Printer and the Modern Press (1854,
 *   #59966).
 * - "Edmund Hargraves, 'Against the Cult of Games', The Saturday Review,
 *   1897": no trace of the writer or the article was found. It was presented
 *   as a real Victorian source.
 * The model answers quoted the invented lines as the writers' own (eight such
 * quotations in Papers 13 and 15 alone), and the Paper 14 Question 3 answer
 * misquoted even its own invented passage ("He knows... He has opinions...").
 *
 * The Source A articles were labelled as pieces by named writers in real
 * publications ("Angharad Tomos, 'The Cost of Cutting Culture', Nation.Cymru,
 * 2024" and four like it). They were written for this file. Angharad Tomos is
 * a real Welsh author who did not write it, the other names could belong to
 * real journalists, and the answers named them throughout. Smaller errors:
 * two Paper 13 Question 2 answers cut "and - increasingly - without pleasure"
 * to "and without pleasure" with no ellipsis, and one called "remarkable and
 * terrible" an oxymoron and "labour, weather, soil, and season" a list of
 * monosyllables; a Paper 14 Question 2 answer called "we have no idea" a
 * passive construction; a Paper 11 Question 2 answer put "briefly and
 * gloriously" in the final paragraph, where it is not, and called verbs from
 * three separate sentences "syndetic listing"; a Paper 15 answer called the
 * end-of-sentence repetition of "is not a luxury" anaphora, which is
 * epistrophe, and with the byline gone still called the writer "she".
 *
 * WHAT WAS DONE (27 September 2026). Each Source B is now a genuine passage,
 * cut by passage() (src/lib/study-guides/passage.ts) from a Project Gutenberg
 * edition by a script and never typed, trimmed to whole sentences where it
 * starts or ends inside a paragraph, and labelled with the edition used. The
 * only departures from the editions are layout: the italic underscores are
 * dropped, "--" is printed as the dash it stands for, and the double space
 * after a full stop is printed as one. Each keeps the old passage's subject:
 * - Paper 11: Veblen, The Theory of the Leisure Class (1899), on the love of
 *   sport as a boyish and warlike temperament, the argument the invented
 *   passage made, from a writer who made it.
 * - Paper 12: Fry's own answers to a Commons committee on 27 February 1818,
 *   about the women in Newgate, as Pitman's life of her prints them.
 * - Paper 13: Cobbett on the Wiltshire labourers and their rented potato
 *   plots, written at Highworth on 4 September 1826.
 * - Paper 14: Knight's The Old Printer and the Modern Press, where he answers
 *   doubts about cheap reading and the newspaper press.
 * - Paper 15: "The Art of the People" itself, on the village craftsmen who
 *   built and carved the old churches and houses.
 * Two Question 4 statements are reworded, because the genuine passages do not
 * argue what the old ones claimed: Paper 12's said both writers argue "that
 * the prison system punishes poverty rather than crime", which Fry's answers
 * do not, and Paper 15's said Morris "focuses on solutions rather than
 * complaints", which this part of the lecture does not. Every Question 3 and
 * Question 4 answer was rewritten for the new passages, and every quotation
 * in every model answer was checked by script against the extract its
 * question prints. The Source A articles are labelled as specially written,
 * the invented names are gone from the answers, the smaller errors above are
 * corrected, and "practiced" in Paper 14's Source A is "practised".
 *
 * A second reading the same day added a glossary to each Source B, printed
 * with Questions 3 and 4 as wjec-c2-b prints its own. The word glosses moved
 * out of the labels into it: the checker reads a label of 400 characters or
 * more as a passage, and QUESTIONS in the glossary names keeps it from reading
 * those. It also put right answers that said more than the passages: Fry
 * tells two stories, not one; the city allowed no regular clothing, but the
 * sheriffs gave some; the extract names no "committee of ladies"; in 1899
 * "addiction" meant a habitual leaning, not a dependency; the Paper 11
 * tricolon is dissolved by the next sentence, not its own; and Paper 13's
 * grandmother paragraph does not end on its list, whose nouns ("labour",
 * "season") are not concrete. Knight's label and
 * a Paper 14 answer said "the poorest readers" want mere amusement; his words
 * are "the great bulk of the readers of cheap books".
 *
 * To cut a passage again, with passage(text, section, from, to) on the whole
 * edition as one section, then trimmed to the sentences named:
 *   WJEC_C2_11_SOURCE_B  #833 Chapter Ten, the paragraph "It is perhaps truer", from that sentence to "borrowed from the terminology of warfare."
 *   WJEC_C2_12_SOURCE_B  #16606 Chapter VII, the answers from "Do you know whether there is any clothing allowed by the city?" to "We sent down to the matron immediately to get her clothes."
 *   WJEC_C2_13_SOURCE_B  #34238 "Ride from Highworth to Cricklade and thence to Malmsbury", the paragraph "In quitting Devizes yesterday morning", from "As I came on the road" to "death by the halter!"
 *   WJEC_C2_14_SOURCE_B  #59966 Part II, Chapter VII, the paragraph "Do such considerations as these make us hopeless"
 *   WJEC_C2_15_SOURCE_B  #3773 "The Art of the People", from "These form the mass of our architectural treasures" to "and consequently some human happiness."
 *
 * WHY STRINGS, NOT passage() CALLS. These editions are not held in
 * src/data/full-texts, so there is nothing to cut from when the file loads, and
 * scripts/check-mock-exam-extracts.mjs reads each extract here as a string
 * literal: a constant set by a call would not be checked at all. The checker
 * compares every sentence with the Gutenberg text (its entries
 * veblen-leisure-class, fry-evidence-pitman, rural-rides, knight-old-printer
 * and morris-art-of-the-people), so a passage here that drifted from its
 * edition would be reported.
 *
 * NOT CHANGED: marks, timings, Section B and the substance of the Source A
 * articles. Some of what they state as fact is out of date or was not
 * verified, and is left for a person to decide: Paper 12's release grant of
 * "forty-six pounds" (raised to £76 in 2021 and £82.39 in 2022, now called
 * the subsistence payment); Paper 13's survey "published last month", whose
 * figures resemble the British Nutrition Foundation's survey of 2017; Paper
 * 14's teenagers who spend more time on screens than asleep; and Paper 15's
 * closures of libraries in three South Wales councils and of a Merthyr Tydfil
 * museum "in September".
 */
import type { MockExamPaper } from './types'

// ─── WJEC Component 2 Source Texts ──────────────────────────────────────────

// Paper 11 - Sport
const WJEC_C2_11_SOURCE_A = `There is a moment in every great sporting contest when the crowd falls silent. Not out of boredom or indifference, but out of a collective recognition that what they are witnessing transcends the ordinary. I experienced that moment last Saturday at the Principality Stadium, when a nineteen-year-old flanker from the Valleys - a boy who twelve months ago was stacking shelves in Aldi - somehow, impossibly, turned over a ball on his own try line and set in motion the counter-attack that would win Wales the Six Nations.

Sport does this. It takes unremarkable people and places them in circumstances where they become extraordinary. And it does something else, too: it makes us, the watchers, participants in the drama. When that boy ripped the ball free, seventy thousand people rose as one. Strangers grabbed strangers. Men who had not cried since childhood found tears on their cheeks. For ninety minutes, every division that fractures our society - class, politics, language - was suspended. We were, briefly and gloriously, one people.

The cynics will tell you it doesn't last. They're right, of course. By Monday morning the divisions will have reasserted themselves. But I would argue that those ninety minutes matter more than the cynics allow. They remind us of a capacity for collective joy that we have almost forgotten how to access. In an age of isolation and screen-mediated experience, sport remains one of the last places where thousands of human beings share the same emotion at the same moment. That is not trivial. That is essential.`

const WJEC_C2_11_SOURCE_A_REF = 'Opinion article, specially written for this paper'

const WJEC_C2_11_SOURCE_B = `It is perhaps truer, or at least more evident, as regards sports than as regards the other expressions of predatory emulation already spoken of, that the temperament which inclines men to them is essentially a boyish temperament. The addiction to sports, therefore, in a peculiar degree marks an arrested development of the man's moral nature. This peculiar boyishness of temperament in sporting men immediately becomes apparent when attention is directed to the large element of make-believe that is present in all sporting activity. Sports share this character of make-believe with the games and exploits to which children, especially boys, are habitually inclined. Make-believe does not enter in the same proportion into all sports, but it is present in a very appreciable degree in all. It is apparently present in a larger measure in sportsmanship proper and in athletic contests than in set games of skill of a more sedentary character; although this rule may not be found to apply with any great uniformity. It is noticeable, for instance, that even very mild-mannered and matter-of-fact men who go out shooting are apt to carry an excess of arms and accoutrements in order to impress upon their own imagination the seriousness of their undertaking. These huntsmen are also prone to a histrionic, prancing gait and to an elaborate exaggeration of the motions, whether of stealth or of onslaught, involved in their deeds of exploit. Similarly in athletic sports there is almost invariably present a good share of rant and swagger and ostensible mystification—features which mark the histrionic nature of these employments. In all this, of course, the reminder of boyish make-believe is plain enough. The slang of athletics, by the way, is in great part made up of extremely sanguinary locutions borrowed from the terminology of warfare.`

const WJEC_C2_11_SOURCE_B_REF =
  'Thorstein Veblen, The Theory of the Leisure Class (1899), from Chapter Ten, "Modern Survivals of Prowess" (Project Gutenberg #833). Veblen, an American economist, has been writing about fighting and duelling, which he calls "predatory emulation": getting the better of others by force.'

const WJEC_C2_11_B_GLOSSARY_FOR_QUESTIONS =
  'Source B glossary: arrested development: growth that stopped too soon. accoutrements: equipment. histrionic: theatrical. ostensible mystification: a show of mystery. sanguinary locutions: bloodthirsty expressions.'

// Paper 12 - Justice and the Prison System
const WJEC_C2_12_SOURCE_A = `I spent three years working as a prison teacher, and in that time I learned one thing above all others: the people we lock up are overwhelmingly the people we have already failed. Of the two hundred and thirty inmates I taught in HMP Swansea, over eighty per cent had been excluded from school before the age of fourteen. More than half were functionally illiterate. Nearly all came from the same handful of postcodes - streets where unemployment runs at forty per cent and where a criminal record is not a mark of shame but an inevitability.

We tell ourselves that prison is about justice. It is not. It is about geography and class and the catastrophic failure of every institution that should have intervened before a young person reached the dock. Education. Social services. Mental health provision. Housing. Each of these systems failed my students, one after another, like dominoes falling in slow motion. And then, when the inevitable happened, we called it justice.

I am not naive. Some people are dangerous and must be separated from society. But they are a small minority. The majority of prisoners are not dangerous - they are damaged. And locking damaged people in a concrete box for twenty-three hours a day, then releasing them with forty-six pounds and a bin bag of belongings, is not justice. It is institutional cruelty dressed in the language of law.`

const WJEC_C2_12_SOURCE_A_REF = 'Opinion article, specially written for this paper'

const WJEC_C2_12_SOURCE_B = `"Do you know whether there is any clothing allowed by the city?"

"Not any. Whenever we have applied or mentioned anything about clothing, we have always found that there was no other resource but our own, excepting that the sheriffs used to clothe the prisoners occasionally. Lately, nobody has clothed them but ourselves; except that the late sheriffs sent us the other day a present of a few things to make up for them."

"There is no regular clothing allowed?"

"It appears to me that there is none of any kind."

"Have you never had prisoners there who have suffered materially for want of clothing?"

"I could describe such scenes as I should hardly think it delicate to mention. We had a woman the other day, on the point of lying-in, brought to bed not many hours after she came in. She had hardly a covering; no stockings, and only a thin gown. Whilst we are there, we can never see a woman in that state without immediately applying to our fund."

"When they come in they come naked, almost?"

"Yes, this woman came in, and we had to send her up almost every article of clothing, and to clothe her baby. She could not be tried the next sessions, but after she had been tried, and when she was discharged, she went out comfortably clothed; and there are many such instances."

"Has it not happened that when gentlemen have come in to see the prison, you have been obliged to stand before the women who were in the prison in a condition not fit to be seen?"

"Yes, I remember one instance in which I was obliged to stand before one of the women to prevent her being seen. We sent down to the matron immediately to get her clothes."`

const WJEC_C2_12_SOURCE_B_REF =
  "Elizabeth Fry, answering a Committee of the House of Commons on the prisons of London, 27 February 1818, as printed in Emma Raymond Pitman, Elizabeth Fry, Chapter VII (Project Gutenberg #16606). The questions are the Committee's; the answers are Fry's, about the women in Newgate prison."

const WJEC_C2_12_B_GLOSSARY_FOR_QUESTIONS =
  'Source B glossary: the sheriffs: officers of the City of London, elected for a year; the late sheriffs: the previous ones. lying-in: giving birth. brought to bed: gave birth. the next sessions: the next sittings of the criminal court. discharged: set free.'

// Paper 13 - Food and Agriculture
const WJEC_C2_13_SOURCE_A = `We have, in the space of two generations, accomplished something remarkable and terrible: we have severed the connection between human beings and the food they eat. The average British child, according to a survey published last month, cannot identify a leek growing in a field. One in five believes that fish fingers are made from chicken. A quarter think that cheese comes from plants. These are not charming examples of juvenile ignorance. They are symptoms of a profound and dangerous disconnection.

When my grandmother was alive, she could name every farmer within five miles of her village in Pembrokeshire. She knew which fields grew oats and which grew potatoes. She knew that milk came from the Morgans' cows and eggs from Mrs Davies's hens, and that when the harvest was poor, everyone tightened their belts. Food was not an abstraction. It was labour, weather, soil, and season. It had a story, and everyone knew the story.

Today, food is a product that appears, wrapped in plastic, on a supermarket shelf. Its origins are invisible, its production methods unknowable, its true cost concealed behind a price tag that reflects neither the exploitation of the workers who grew it nor the degradation of the land on which it was grown. We eat without knowledge, without gratitude, and - increasingly - without pleasure. The industrialisation of our food supply has given us abundance, certainly. But it has taken something in return: our understanding of what it means to be nourished.`

const WJEC_C2_13_SOURCE_A_REF = 'Opinion article, specially written for this paper'

const WJEC_C2_13_SOURCE_B = `As I came on the road, for the first three or four miles, I saw great numbers of labourers either digging potatoes for their Sunday's dinner, or coming home with them, or going out to dig them. The land-owners, or occupiers, let small pieces of land to the labourers, and these they cultivate with the spade for their own use. They pay in all cases a high rent, and in most cases an enormous one. The practice prevails all the way from Warminster to Devizes, and from Devizes to nearly this place (Highworth). The rent is, in some places, a shilling a rod, which is, mind, 160s. or 8l. an acre! Still the poor creatures like to have the land: they work in it at their spare hours; and on Sunday mornings early: and the overseers, sharp as they may be, cannot ascertain precisely how much they get out of their plat of ground. But, good God! what a life to live! What a life to see people live; to see this sight in our own country, and to have the base vanity to boast of that country, and to talk of our "constitution" and our "liberties," and to affect to pity the Spaniards, whose working people live like gentlemen, compared with our miserable creatures. Again I say, give me the Inquisition and well-healed cheeks and ribs, rather than "civil and religious liberty," and skin and bone. But the fact is that, where honest and laborious men can be compelled to starve quietly, whether all at once or by inches, with old wheat ricks, and fat cattle under their eye, it is a mockery to talk of their "liberty," of any sort; for the sum total of their state is this, they have "liberty" to choose between death by starvation (quick or slow) and death by the halter!`

const WJEC_C2_13_SOURCE_B_REF =
  'William Cobbett, Rural Rides (1830), written at Highworth, Wiltshire, on 4 September 1826, of his ride there from Devizes (T. Nelson and Sons edition, Project Gutenberg #34238).'

const WJEC_C2_13_B_GLOSSARY_FOR_QUESTIONS =
  "Source B glossary: a rod: a small plot of land, 160 to the acre. 160s. or 8l.: 160 shillings, or eight pounds. plat: plot. the overseers: the parish officers who ran relief of the poor. the Inquisition: the Spanish Church's court for heresy, to the English the opposite of liberty. ricks: stacks of harvested wheat. the halter: the hangman's rope."

// Paper 14 - Media and Technology
const WJEC_C2_14_SOURCE_A = `My daughter is fourteen years old and she has not read a book for pleasure in over a year. This is not because she dislikes reading - she was, until the age of twelve, a voracious reader who tore through entire series in a weekend. It is because she now spends, by her own reluctant admission, between four and six hours a day on her phone. She scrolls through TikTok, watches YouTube Shorts, exchanges messages on WhatsApp, curates her Instagram feed. She does these things not because they bring her joy - she tells me, with alarming self-awareness, that they make her feel worse - but because she cannot stop.

We are conducting an experiment on an entire generation, and we have no idea what the results will be. The average British teenager now spends more time looking at a screen than they spend sleeping. Their attention spans, measured by cognitive psychologists, have shortened measurably in the last decade. Rates of anxiety, depression, and self-harm among young people have risen in exact correlation with smartphone adoption. Correlation is not causation, the tech companies remind us, with the same practised innocence that tobacco executives once deployed.

I do not blame my daughter. I blame the engineers in Silicon Valley who designed these platforms to be addictive. I blame the algorithms that feed children a relentless stream of content calibrated to exploit their insecurities. And I blame myself, and every parent like me, who handed a child a device we did not understand and called it progress.`

const WJEC_C2_14_SOURCE_A_REF = 'Opinion article, specially written for this paper'

const WJEC_C2_14_SOURCE_B = `Do such considerations as these make us hopeless of the steady progress of a sound as well as cheap popular literature? Decidedly no. There is improvement all around us. The halfpenny ballad of Seven Dials is not yet extinct; but let the collectors look sharply about them, for that relic of the chap-books, with the woodcuts that have served every generation, will soon be gone. In its place has come the decent penny book of a hundred songs. The shades of Scott, and Moore, and Campbell will not quarrel with this new popularity. There are "flash" songs; but they are not for the penny buyers. Thackeray has described the dens in which these abominations are current. The whole aspect of the humbler press has changed within these few years. Unquestionably the people have changed. Visit, if you can, the interior of that marvellous human machine, the General Post-Office, on a Friday evening, from half-past five to six o'clock. Look with awe upon the tons of newspapers that are crowding in to be distributed through the habitable globe. Think silently how potent a power is this for good or for evil. You turn to one of the boxes of the letter-sorters, and your guide will tell you, "this work occupies not half the time it formerly did, for everybody writes better." General education furnishes the solution of the otherwise doubtful origin of the improvement, in all the more manifest characteristics of improvement, of all popular literature.`

const WJEC_C2_14_SOURCE_B_REF =
  'Charles Knight, The Old Printer and the Modern Press (1854), Part II, Chapter VII (Project Gutenberg #59966). Knight, a publisher of cheap books for working people, has just admitted that most readers of cheap books still want "mere amusement".'

const WJEC_C2_14_B_GLOSSARY_FOR_QUESTIONS =
  'Source B glossary: Seven Dials: a poor district of London. chap-books: cheap pamphlets sold by pedlars. shades: ghosts, here of three poets who had died. "flash" songs: coarse ones. current: in circulation.'

// Paper 15 - Art and Culture
const WJEC_C2_15_SOURCE_A = `The argument is always the same. When budgets are tight, the arts are the first to go. Last month, three councils in South Wales announced the closure of their public libraries. Two community theatres have lost their funding entirely. The local museum in Merthyr Tydfil - a modest but irreplaceable collection of mining artefacts, photographs, and oral histories - will shut its doors in September. The justification offered is always economic necessity: we cannot afford luxuries when essentials are under pressure.

But here is what the people who make these decisions never seem to understand: the arts are not a luxury. For the retired steelworker in Port Talbot who paints watercolours every Tuesday in the community centre, art is not a luxury. For the teenagers in Rhyl who found, in a drama workshop, the first space where they were listened to, theatre is not a luxury. For the woman in Swansea who told me that the library was the only place she could go where she felt safe and warm and nobody asked her to buy anything - a library is not a luxury. It is a lifeline.

We measure value in this country with a ruthless and reductive calculus. If it generates revenue, it matters. If it doesn't, it can be cut. By this logic, birdsong doesn't matter. Friendship doesn't matter. The view from a mountain doesn't matter. We have built an entire system of governance around the principle that the only things worth preserving are the things that can be sold, and then we wonder why so many people feel that their lives lack meaning.`

const WJEC_C2_15_SOURCE_A_REF = 'Opinion article, specially written for this paper'

const WJEC_C2_15_SOURCE_B = `These form the mass of our architectural treasures, the houses that everyday people lived in, the unregarded churches in which they worshipped.

And, once more, who was it that designed and ornamented them? The great architect, carefully kept for the purpose, and guarded from the common troubles of common men? By no means. Sometimes, perhaps, it was the monk, the ploughman’s brother; oftenest his other brother, the village carpenter, smith, mason, what not—‘a common fellow,’ whose common everyday labour fashioned works that are to-day the wonder and despair of many a hard-working ‘cultivated’ architect. And did he loathe his work? No, it is impossible. I have seen, as we most of us have, work done by such men in some out-of-the-way hamlet—where to-day even few strangers ever come, and whose people seldom go five miles from their own doors; in such places, I say, I have seen work so delicate, so careful, and so inventive, that nothing in its way could go further. And I will assert, without fear of contradiction, that no human ingenuity can produce work such as this without pleasure being a third party to the brain that conceived and the hand that fashioned it. Nor are such works rare. The throne of the great Plantagenet, or the great Valois, was no more daintily carved than the seat of the village mass-john, or the chest of the yeoman’s good-wife.

So, you see, there was much going on to make life endurable in those times. Not every day, you may be sure, was a day of slaughter and tumult, though the histories read almost as if it were so; but every day the hammer chinked on the anvil, and the chisel played about the oak beam, and never without some beauty and invention being born of it, and consequently some human happiness.`

const WJEC_C2_15_SOURCE_B_REF =
  'William Morris, "The Art of the People", a lecture in Birmingham, 19 February 1879, in Hopes and Fears for Art (Project Gutenberg #3773). Morris has been speaking of the old village churches and houses of England.'

const WJEC_C2_15_B_GLOSSARY_FOR_QUESTIONS =
  'Source B glossary: the Plantagenets, the Valois: royal houses of England and France. mass-john: a village priest. yeoman: a farmer who owned his land. good-wife: the mistress of a household.'

// ─── Mock Exam Papers ───────────────────────────────────────────────────────

export const wjecC2C: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // WJEC COMPONENT 2 - PAPER 11: Sport
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c2-11',
    board: 'WJEC',
    paperNumber: 2,
    title:
      'Component 2: 19th and 21st Century Non-Fiction Reading and Transactional/Persuasive Writing',
    subtitle: 'English Language C700U20-1',
    code: 'C700U20-1',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c2-11-reading',
        title: 'Section A: Reading',
        description:
          'Read both source texts carefully. Then answer all the questions in this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-11-q1',
            questionNumber: 1,
            questionText:
              'Read the 21st-century source text about sport (Source A).\n\nList five things you learn about the role of sport from this text.',
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Source A:\n${WJEC_C2_11_SOURCE_A}\n\nSource B:\n${WJEC_C2_11_SOURCE_B}`,
            extractSource: `Source A: ${WJEC_C2_11_SOURCE_A_REF} | Source B: ${WJEC_C2_11_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                '1. A nineteen-year-old flanker won Wales the Six Nations. 2. The match was at the Principality Stadium with seventy thousand people. 3. The young player had been stacking shelves in Aldi twelve months earlier. 4. Sport can make strangers unite and grab each other in excitement. 5. The writer believes sport is one of the last places where thousands share the same emotion together.',
            },
            markScheme: ['1 mark per valid point, maximum 5'],
          },
          {
            id: 'wjec-c2-11-q2',
            questionNumber: 2,
            questionText:
              'How does the 21st-century writer use language to convey their enthusiasm for sport?\n\nYou should comment on specific words and phrases and their effects.',
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${WJEC_C2_11_SOURCE_A}`,
            extractSource: WJEC_C2_11_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses emotive language like "briefly and gloriously" to express the joy sport brings. The phrase "seventy thousand people rose as one" shows the power of a shared moment. The word "essential" at the end emphasises how important sport is. The writer contrasts the player\'s ordinary background ("stacking shelves in Aldi") with his extraordinary achievement to show sport\'s transformative power.',
              'Grade 6-7':
                'The writer builds a rhetorical crescendo that follows the emotional course of the match itself. The opening sentence - "the crowd falls silent" - uses paradox: silence becomes the loudest expression of awe. The player\'s backstory ("stacking shelves in Aldi") is an economic shorthand for ordinariness, making his transformation more dramatic through stark contrast. The central paragraph builds through a sequence of physical responses - "rose," "grabbed," "found tears" - accelerating in emotional intensity. The tricolon "class, politics, language" names the divisions of Welsh life before the next sentence dissolves them into "one people", and the adverbs "briefly and gloriously" admit that the moment was short while insisting that its shortness is part of its glory. The final paragraph concedes to the cynics ("They\'re right, of course") only to reframe the argument, and the terminal position of "essential" - isolated after the dismissal of "trivial" - carries the full rhetorical weight of the piece.',
            },
            markScheme: [
              'Analyses specific language techniques',
              'Comments on word-level effects',
              'Considers persuasive strategies and tone',
              'Uses embedded quotations',
            ],
          },
          {
            id: 'wjec-c2-11-q3',
            questionNumber: 3,
            questionText: `What do you learn about the 19th-century writer's views on sport from Source B?\n\nYou should comment on what they think and feel, using evidence from the text.\n\n(${WJEC_C2_11_B_GLOSSARY_FOR_QUESTIONS})`,
            marks: 10,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: `Source B:\n${WJEC_C2_11_SOURCE_B}`,
            extractSource: WJEC_C2_11_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5':
                'Veblen thinks sport is childish. He says the love of sport comes from "a boyish temperament" and that it "marks an arrested development of the man\'s moral nature", meaning that sporting men have never really grown up. He thinks sport is full of "make-believe", like the games of children. He makes fun of men who go shooting for carrying too many weapons and walking with "a histrionic, prancing gait", as if they were acting a part. He also points out that the slang of athletics is borrowed from war, which suggests he links sport with fighting.',
              'Grade 6-7':
                'Veblen writes as a detached analyst rather than an angry critic, and the detachment is itself his weapon. His central claim is a diagnosis: the "addiction to sports" - in 1899 a strong habitual leaning rather than a dependency, but still a habit rather than a choice - "marks an arrested development of the man\'s moral nature." Because the vocabulary is borrowed from science, the charge that sporting men have never grown up sounds like a finding rather than an insult. He supports it by likening sport to the "make-believe" of children\'s games, and then, in his most concrete example, by ridicule: the "mild-mannered and matter-of-fact men who go out shooting" carry "an excess of arms and accoutrements" to persuade themselves of "the seriousness of their undertaking", and adopt "a histrionic, prancing gait". The gap between the dry vocabulary and the comic picture makes the sportsmen look absurd. He qualifies his claims ("perhaps truer"; "this rule may not be found to apply with any great uniformity"), which makes him seem fair-minded. His last observation, that the slang of athletics is "borrowed from the terminology of warfare", ties sport back to the fighting he has just discussed and implies that games keep alive an aggressive instinct that civilised adults should have outgrown.',
            },
            markScheme: [
              'Identifies key attitudes and opinions',
              'Uses evidence from the text to support points',
              'Comments on how views are expressed',
              "Shows clear understanding of the writer's perspective",
            ],
          },
          {
            id: 'wjec-c2-11-q4',
            questionNumber: 4,
            questionText: `"Both writers feel strongly about sport, but the 21st-century writer makes a more convincing case because personal experience is more persuasive than abstract argument."\n\n(${WJEC_C2_11_B_GLOSSARY_FOR_QUESTIONS})\n\nTo what extent do you agree? You should refer to both texts in your answer.`,
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'evaluation',
            extract: `Source A:\n${WJEC_C2_11_SOURCE_A}\n\nSource B:\n${WJEC_C2_11_SOURCE_B}`,
            extractSource: `Source A: ${WJEC_C2_11_SOURCE_A_REF} | Source B: ${WJEC_C2_11_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'I partly agree. The writer of Source A describes a match they watched, and details like the boy who was "stacking shelves in Aldi" make you feel the excitement. Veblen does not describe any match or any person he knows; he makes a general argument that sport is "boyish". However, Veblen does use an example that readers can picture, the men who go out shooting with "an excess of arms and accoutrements", and it makes his point funny and memorable. I think Source A is more convincing to most readers because it is easier to relate to, but Veblen makes you think about why people love sport.',
              'Grade 6-7':
                'The statement sets up a contrast that fits these two texts only in part. Source A is built on one experience - a single turnover "on his own try line" and the reaction of "seventy thousand people" - but its conclusions are abstract: sport as "one of the last places where thousands of human beings share the same emotion". Veblen\'s method is the reverse. His argument is abstract, conducted in the vocabulary of an economist ("predatory emulation", "an arrested development of the man\'s moral nature"), yet its most persuasive moment is an observed detail, the "mild-mannered and matter-of-fact men" whose "histrionic, prancing gait" gives away that they are playing a part. Personal experience gives Source A immediacy and warmth: the reader is invited to share the emotion. But it also limits the argument, since one match cannot prove that the unity it creates is "essential" rather than a pleasant ninety minutes, which the writer half admits in conceding "They\'re right, of course." Veblen is harder to read but harder to dismiss: he tries to explain why people love sport, rather than showing that they do, and his diagnosis - that its appeal is "boyish" make-believe dressed in the language of war - would account for the very scenes Source A celebrates. Source A is the more moving; whether it is the more convincing depends on whether the reader wants to be moved or persuaded.',
            },
            markScheme: [
              'Evaluates both texts with a sustained personal response',
              'Compares effectiveness of different rhetorical methods',
              'Uses evidence from both texts',
              'Shows nuanced critical judgement',
            ],
          },
        ],
      },
      {
        id: 'wjec-c2-11-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 60 minutes on this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-11-q5',
            questionNumber: 5,
            questionText:
              "Your local council is considering closing the town's sports centre to save money.\n\nWrite a letter to the council arguing that the sports centre should remain open.\n\nYou could include:\n- the benefits of the sports centre to the community\n- the consequences of closing it\n- alternative ways to save money.",
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear letter with: appropriate form and register; relevant arguments; generally accurate SPaG.',
              'Grade 6-7':
                'A well-structured letter with: persuasive techniques; developed arguments; consistent accuracy.',
              'Grade 8-9':
                'A compelling letter with: sophisticated rhetoric; nuanced counter-arguments; technical virtuosity.',
            },
            markScheme: [
              'Communication & Organisation (10 marks): Purpose, audience, form, structure',
              'Writing Accurately (6 marks): Sentence variety, vocabulary, SPaG',
            ],
          },
          {
            id: 'wjec-c2-11-q6',
            questionNumber: 6,
            questionText:
              '"Sport has become too commercialised. It is no longer about passion and teamwork but about money and celebrity."\n\nWrite an article for a broadsheet newspaper in which you argue for or against this view.',
            marks: 24,
            suggestedTimeMinutes: 40,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear article with: appropriate form; a range of ideas; generally accurate SPaG.',
              'Grade 6-7':
                'A well-crafted article with: engaging opening; sophisticated argument; consistent accuracy.',
              'Grade 8-9':
                'An outstanding article with: compelling voice; nuanced exploration; technical virtuosity.',
            },
            markScheme: [
              'Communication & Organisation (14 marks): Purpose, audience, form, voice, structure',
              'Writing Accurately (10 marks): Sentence variety, vocabulary, SPaG',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WJEC COMPONENT 2 - PAPER 12: Justice and the Prison System
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c2-12',
    board: 'WJEC',
    paperNumber: 2,
    title:
      'Component 2: 19th and 21st Century Non-Fiction Reading and Transactional/Persuasive Writing',
    subtitle: 'English Language C700U20-1',
    code: 'C700U20-1',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c2-12-reading',
        title: 'Section A: Reading',
        description:
          'Read both source texts carefully. Then answer all the questions in this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-12-q1',
            questionNumber: 1,
            questionText:
              "Read the 21st-century source text about the prison system (Source A).\n\nList five things you learn about the writer's experience of working in a prison.",
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Source A:\n${WJEC_C2_12_SOURCE_A}\n\nSource B:\n${WJEC_C2_12_SOURCE_B}`,
            extractSource: `Source A: ${WJEC_C2_12_SOURCE_A_REF} | Source B: ${WJEC_C2_12_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                '1. The writer worked as a prison teacher for three years. 2. The writer taught at HMP Swansea. 3. Over eighty per cent of the inmates the writer taught had been excluded from school before age fourteen. 4. More than half were functionally illiterate. 5. Nearly all came from the same handful of postcodes with high unemployment.',
            },
            markScheme: ['1 mark per valid point, maximum 5'],
          },
          {
            id: 'wjec-c2-12-q2',
            questionNumber: 2,
            questionText:
              'How does the 21st-century writer use language to criticise the prison system?\n\nYou should comment on specific words and phrases and their effects.',
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${WJEC_C2_12_SOURCE_A}`,
            extractSource: WJEC_C2_12_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses the metaphor "dominoes falling in slow motion" to show how institutions failed prisoners one after another. The phrase "institutional cruelty dressed in the language of law" suggests the system hides its cruelty behind legal words. The writer calls prisoners "damaged" rather than "dangerous" to make us see them differently. The detail about "forty-six pounds and a bin bag" shows how little support prisoners get on release.',
              'Grade 6-7':
                'The writer constructs the critique through systematic redefinition. The opening sentence\'s structure - "the people we lock up are overwhelmingly the people we have already failed" - uses the repeated pronoun "we" to implicate society rather than exonerate the prisoners, creating a causal chain where failure precedes crime. The domino metaphor is carefully chosen: dominoes fall in sequence, implying that each institutional failure triggered the next, and "in slow motion" suggests these failures were visible and preventable. The paragraph\'s most devastating technique is the staccato listing of failed institutions - "Education. Social services. Mental health provision. Housing." - where the full stops isolate each one, turning them into separate indictments. The concluding image - "forty-six pounds and a bin bag of belongings" - uses bathos: the specificity of the sum exposes the absurdity of the system\'s inadequacy. The final sentence\'s metaphor of "institutional cruelty dressed in the language of law" personifies the system as something that consciously disguises itself, transforming bureaucratic failure into deliberate deception.',
            },
            markScheme: [
              'Analyses specific language techniques',
              'Comments on word-level effects',
              'Considers persuasive strategies and tone',
              'Uses embedded quotations',
            ],
          },
          {
            id: 'wjec-c2-12-q3',
            questionNumber: 3,
            questionText: `What do you learn about the conditions and attitudes described in the 19th-century source (Source B)?\n\nYou should comment on what the writer thinks and feels, using evidence from the text.\n\n(${WJEC_C2_12_B_GLOSSARY_FOR_QUESTIONS})`,
            marks: 10,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: `Source B:\n${WJEC_C2_12_SOURCE_B}`,
            extractSource: WJEC_C2_12_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5':
                'The source shows that conditions for the women in Newgate were very poor. The city allowed the prisoners no regular clothing: asked whether it did, Fry answers "Not any." Some women arrived almost naked, and one gave birth only hours after arriving, when she had "hardly a covering; no stockings, and only a thin gown". Fry and the women who visited with her paid for clothes out of "our fund", which shows that they cared about the women. Fry also protects the women\'s dignity: when gentlemen visited, she had to stand in front of one woman "to prevent her being seen". The Committee\'s questions show that people in power were starting to ask about these conditions.',
              'Grade 6-7':
                'The conditions emerge from Fry\'s answers almost in spite of her manner, which is calm and exact. Her first reply, "Not any", is blunt, and what follows exposes the authorities\' neglect: "there was no other resource but our own", and all the last sheriffs sent was "a present of a few things", a word that makes basic clothing sound like a kindness rather than a duty. The case of the woman "on the point of lying-in" is given plainly: she "had hardly a covering; no stockings, and only a thin gown", and the list of what she lacked does the work that no adjective could. Fry\'s own attitude is compassion shown through action: "we can never see a woman in that state without immediately applying to our fund", where "never" and "immediately" present care as a fixed rule. Her reserve is telling too. She "could describe such scenes as I should hardly think it delicate to mention", a refusal that leaves the reader to imagine worse. The Committee\'s last question reveals another attitude, that gentlemen came into the prison to look at it, and Fry\'s answer, that she had to "stand before one of the women to prevent her being seen", shows her guarding the women\'s dignity against that curiosity. The outcome she dwells on, that the mother "went out comfortably clothed", shows her belief that decent treatment could send a woman out in a better state than she came in.',
            },
            markScheme: [
              'Identifies key conditions and attitudes',
              'Uses evidence from the text to support points',
              "Comments on the writer's thoughts and feelings",
              'Shows clear understanding of the historical context',
            ],
          },
          {
            id: 'wjec-c2-12-q4',
            questionNumber: 4,
            questionText: `"Both writers show a prison system that fails the people in its care, but the 19th-century writer makes a more powerful case because individual stories are more moving than statistics."\n\n(${WJEC_C2_12_B_GLOSSARY_FOR_QUESTIONS})\n\nTo what extent do you agree? You should refer to both texts in your answer.`,
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'evaluation',
            extract: `Source A:\n${WJEC_C2_12_SOURCE_A}\n\nSource B:\n${WJEC_C2_12_SOURCE_B}`,
            extractSource: `Source A: ${WJEC_C2_12_SOURCE_A_REF} | Source B: ${WJEC_C2_12_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'I partly agree. Fry\'s story of the woman who gave birth with "hardly a covering" is very moving, because you picture one real person. The writer of Source A uses statistics, such as "over eighty per cent" of the inmates having been excluded from school, which show that the problem is widespread but are less emotional. However, Source A also has a powerful detail, prisoners released with "forty-six pounds and a bin bag of belongings". Both writers use a mixture of facts and feeling, so I think they are powerful in different ways.',
              'Grade 6-7':
                'The statement identifies a real difference of method but oversimplifies both texts. Source A is not only statistics: its most memorable moment is the concrete image of release with "forty-six pounds and a bin bag of belongings", and its argument rests on the writer\'s own three years in a prison classroom. Fry, equally, is not only telling stories: her evidence is made of facts given to a committee ("Not any"; "It appears to me that there is none of any kind"), and the fullest story she tells, of the woman who gave birth hours after she arrived, is told to prove a point about the city\'s failure to clothe its prisoners. The real difference lies in form. Source A is an opinion article that states its thesis and argues it, naming the failures in a list ("Education. Social services. Mental health provision. Housing."). Fry\'s answers never state a thesis at all; the reader draws the conclusion from what she describes, and her restraint ("such scenes as I should hardly think it delicate to mention") makes what she leaves unsaid more powerful. That makes Fry\'s account the more moving, but Source A\'s argument reaches further, because it asks why people are in prison at all, while Fry\'s answers here are about how they are treated once they are there. Which is more powerful depends on whether the reader values the force of one case or the reach of an argument.',
            },
            markScheme: [
              'Evaluates both texts with a sustained personal response',
              'Compares effectiveness of different rhetorical methods',
              'Uses evidence from both texts',
              'Shows nuanced critical judgement',
            ],
          },
        ],
      },
      {
        id: 'wjec-c2-12-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 60 minutes on this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-12-q5',
            questionNumber: 5,
            questionText:
              'Your school is organising a debate on the motion: "Community service is a better punishment than prison for non-violent offenders."\n\nWrite the text of a speech arguing either for or against this motion.\n\nYou could include:\n- the purpose of punishment\n- the effects of prison on individuals and families\n- the benefits or drawbacks of community service.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear speech with: appropriate form and register; relevant arguments; generally accurate SPaG.',
              'Grade 6-7':
                'A well-structured speech with: rhetorical techniques; developed arguments; consistent accuracy.',
              'Grade 8-9':
                'A compelling speech with: sophisticated rhetoric; nuanced counter-arguments; technical virtuosity.',
            },
            markScheme: [
              'Communication & Organisation (10 marks): Purpose, audience, form, structure',
              'Writing Accurately (6 marks): Sentence variety, vocabulary, SPaG',
            ],
          },
          {
            id: 'wjec-c2-12-q6',
            questionNumber: 6,
            questionText:
              '"Young people today are too quick to judge others and too slow to understand the circumstances that shape people\'s lives."\n\nWrite an article for a magazine aimed at young people in which you explore this idea. You may agree or disagree.',
            marks: 24,
            suggestedTimeMinutes: 40,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear article with: appropriate form; a range of ideas; generally accurate SPaG.',
              'Grade 6-7':
                'A well-crafted article with: engaging opening; balanced exploration; consistent accuracy.',
              'Grade 8-9':
                'An outstanding article with: compelling voice; nuanced argument; technical virtuosity.',
            },
            markScheme: [
              'Communication & Organisation (14 marks): Purpose, audience, form, voice, structure',
              'Writing Accurately (10 marks): Sentence variety, vocabulary, SPaG',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WJEC COMPONENT 2 - PAPER 13: Food and Agriculture
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c2-13',
    board: 'WJEC',
    paperNumber: 2,
    title:
      'Component 2: 19th and 21st Century Non-Fiction Reading and Transactional/Persuasive Writing',
    subtitle: 'English Language C700U20-1',
    code: 'C700U20-1',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c2-13-reading',
        title: 'Section A: Reading',
        description:
          'Read both source texts carefully. Then answer all the questions in this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-13-q1',
            questionNumber: 1,
            questionText:
              'Read the 21st-century source text about food and agriculture (Source A).\n\nList five things you learn about how our relationship with food has changed.',
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Source A:\n${WJEC_C2_13_SOURCE_A}\n\nSource B:\n${WJEC_C2_13_SOURCE_B}`,
            extractSource: `Source A: ${WJEC_C2_13_SOURCE_A_REF} | Source B: ${WJEC_C2_13_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                "1. The average British child cannot identify a leek growing in a field. 2. One in five children believes fish fingers are made from chicken. 3. A quarter of children think cheese comes from plants. 4. The writer's grandmother knew every farmer within five miles. 5. Today food appears wrapped in plastic on supermarket shelves with its origins invisible.",
            },
            markScheme: ['1 mark per valid point, maximum 5'],
          },
          {
            id: 'wjec-c2-13-q2',
            questionNumber: 2,
            questionText:
              'How does the 21st-century writer use language to persuade the reader that our relationship with food has become problematic?\n\nYou should comment on specific words and phrases and their effects.',
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${WJEC_C2_13_SOURCE_A}`,
            extractSource: WJEC_C2_13_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses the paired adjectives "remarkable and terrible" to show that our food change is both impressive and frightening. The phrase "severed the connection" uses a violent verb to suggest something has been cut off permanently. The list of what food once meant - "labour, weather, soil, and season" - makes old food knowledge sound rich and meaningful. The repeated "without" in "without knowledge, without gratitude, and - increasingly - without pleasure" emphasises everything we have lost.',
              'Grade 6-7':
                'The writer deploys a structural contrast between the grandmother\'s world and our own that functions as a lament for lost knowledge. The opening sentence\'s double judgement - "remarkable and terrible" - establishes the piece\'s tonal complexity: this is not simple nostalgia but an acknowledgement that progress and loss are intertwined. The children\'s misconceptions (fish fingers from chicken, cheese from plants) are presented not as comedy but as diagnosis, repositioned by the sentence "These are not charming examples of juvenile ignorance" which explicitly reframes the reader\'s likely response. The grandmother passage builds to a plain list - "labour, weather, soil, and season" - where each short, plain noun carries equal weight, creating a rhythmic solidity that mirrors the rootedness being described. The phrase "It had a story" personifies food itself. The final paragraph\'s anaphoric "without" - "without knowledge, without gratitude, and - increasingly - without pleasure" - is a rhetorical stripping away that enacts the very loss it describes, and the interrupting "increasingly" suggests that the loss is still going on. The closing sentence concedes "abundance" only to extract its cost: "our understanding of what it means to be nourished," where "nourished" reaches beyond the physical to the spiritual.',
            },
            markScheme: [
              'Analyses specific language techniques',
              'Comments on word-level effects',
              'Considers persuasive strategies and tone',
              'Uses embedded quotations',
            ],
          },
          {
            id: 'wjec-c2-13-q3',
            questionNumber: 3,
            questionText: `What do you learn about the lives of rural working people from the 19th-century source (Source B)?\n\nYou should comment on what the writer reveals, using evidence from the text.\n\n(${WJEC_C2_13_B_GLOSSARY_FOR_QUESTIONS})`,
            marks: 10,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: `Source B:\n${WJEC_C2_13_SOURCE_B}`,
            extractSource: WJEC_C2_13_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5':
                'Rural working people in Cobbett\'s time were very poor. Many labourers had to dig potatoes "for their Sunday\'s dinner" from small pieces of land that they rented from landowners. The rent was high - "a shilling a rod", which Cobbett works out at eight pounds an acre - but they still wanted the land and worked on it "at their spare hours; and on Sunday mornings early". Cobbett is angry about this and exclaims "what a life to live!" He thinks the labourers are starving even though they are surrounded by "old wheat ricks, and fat cattle".',
              'Grade 6-7':
                'Cobbett reveals a rural working class that feeds the country but cannot feed itself. The opening picture is of labourers busy with potatoes on a Sunday, "either digging potatoes for their Sunday\'s dinner, or coming home with them, or going out to dig them", a list that makes the whole road seem full of hungry men. He then explains the economics: landowners let them small plots at "a high rent, and in most cases an enormous one", and the aside in "a shilling a rod, which is, mind, 160s. or 8l. an acre!" buttonholes the reader to make sure the injustice is noticed. Yet he also shows the labourers\' determination: "Still the poor creatures like to have the land", and the detail that the overseers of the poor "cannot ascertain precisely how much they get" from it suggests the plots are one of the few things the poor can keep for themselves. The second half turns from report to outrage: the exclamation "good God! what a life to live!" and the scornful quotation marks round "constitution" and "liberties" mock a national pride that ignores such poverty. His last sentence is the sharpest: men who "starve quietly" beside "old wheat ricks, and fat cattle" have only the "liberty" to choose between "death by starvation (quick or slow) and death by the halter", that is, between hunger and the gallows for a crime such as stealing food.',
            },
            markScheme: [
              'Identifies key information about rural lives',
              'Uses evidence from the text to support points',
              "Comments on the writer's attitudes and perspectives",
              'Shows clear understanding of historical context',
            ],
          },
          {
            id: 'wjec-c2-13-q4',
            questionNumber: 4,
            questionText: `"Both writers are critical of the food system of their time, but the 21st-century writer's argument is weaker because we are better fed now than at any point in history."\n\n(${WJEC_C2_13_B_GLOSSARY_FOR_QUESTIONS})\n\nTo what extent do you agree? You should refer to both texts in your answer.`,
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'evaluation',
            extract: `Source A:\n${WJEC_C2_13_SOURCE_A}\n\nSource B:\n${WJEC_C2_13_SOURCE_B}`,
            extractSource: `Source A: ${WJEC_C2_13_SOURCE_A_REF} | Source B: ${WJEC_C2_13_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'I disagree with the statement. Although we do have more food now, the writer of Source A is arguing about something different: that we have lost our connection to food and no longer know where it comes from. Cobbett writes about hunger, describing labourers who "starve quietly" while they are surrounded by food. Both writers criticise a food system that treats people unfairly, even though the problems are different.',
              'Grade 6-7':
                'The statement\'s logic is seductive but flawed, because it assumes that the only measure of a food system is whether people are fed. The writer of Source A anticipates exactly this objection: "The industrialisation of our food supply has given us abundance, certainly. But it has taken something in return." That argument works on a different axis from Cobbett\'s. Cobbett\'s complaint is material and urgent: labourers pay a rent that is often "an enormous one" for plots on which to grow potatoes, and are "compelled to starve quietly" within sight of "old wheat ricks, and fat cattle". Source A\'s complaint is about knowledge and connection: we eat "without knowledge, without gratitude". Yet the two texts share a pattern. In each, the people who produce food are cut off from its value: Cobbett\'s labourers from the harvest around them, and, in Source A, "the exploitation of the workers who grew it" hidden behind "a price tag". Being better fed does not answer that. Cobbett\'s argument is the more urgent, but Source A\'s is not weaker; it asks what abundance has cost, a question that plenty alone cannot settle.',
            },
            markScheme: [
              'Evaluates both texts with a sustained personal response',
              'Compares effectiveness and focus of arguments',
              'Uses evidence from both texts',
              'Shows nuanced critical judgement',
            ],
          },
        ],
      },
      {
        id: 'wjec-c2-13-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 60 minutes on this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-13-q5',
            questionNumber: 5,
            questionText:
              'Your school canteen is considering changing its menu to include only locally sourced, seasonal food.\n\nWrite a report for the school governors giving your views on this proposal.\n\nYou could include:\n- the benefits of locally sourced food\n- potential challenges\n- your recommendation.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear report with: appropriate form and register; relevant points; generally accurate SPaG.',
              'Grade 6-7':
                'A well-structured report with: balanced analysis; clear recommendations; consistent accuracy.',
              'Grade 8-9':
                'An outstanding report with: sophisticated analysis; compelling logic; technical virtuosity.',
            },
            markScheme: [
              'Communication & Organisation (10 marks): Purpose, audience, form, structure',
              'Writing Accurately (6 marks): Sentence variety, vocabulary, SPaG',
            ],
          },
          {
            id: 'wjec-c2-13-q6',
            questionNumber: 6,
            questionText:
              '"We have become a nation that knows the price of everything we eat but the value of nothing."\n\nWrite an article for a lifestyle magazine in which you explore our modern relationship with food. You may agree or disagree with the statement.',
            marks: 24,
            suggestedTimeMinutes: 40,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear article with: appropriate form; a range of ideas; generally accurate SPaG.',
              'Grade 6-7':
                'A well-crafted article with: engaging opening; thoughtful exploration; consistent accuracy.',
              'Grade 8-9':
                'An outstanding article with: compelling voice; nuanced argument; technical virtuosity.',
            },
            markScheme: [
              'Communication & Organisation (14 marks): Purpose, audience, form, voice, structure',
              'Writing Accurately (10 marks): Sentence variety, vocabulary, SPaG',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WJEC COMPONENT 2 - PAPER 14: Media and Technology
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c2-14',
    board: 'WJEC',
    paperNumber: 2,
    title:
      'Component 2: 19th and 21st Century Non-Fiction Reading and Transactional/Persuasive Writing',
    subtitle: 'English Language C700U20-1',
    code: 'C700U20-1',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c2-14-reading',
        title: 'Section A: Reading',
        description:
          'Read both source texts carefully. Then answer all the questions in this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-14-q1',
            questionNumber: 1,
            questionText:
              'Read the 21st-century source text about technology and young people (Source A).\n\nList five things you learn about the impact of smartphones on teenagers.',
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Source A:\n${WJEC_C2_14_SOURCE_A}\n\nSource B:\n${WJEC_C2_14_SOURCE_B}`,
            extractSource: `Source A: ${WJEC_C2_14_SOURCE_A_REF} | Source B: ${WJEC_C2_14_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                "1. The writer's daughter has not read a book for pleasure in over a year. 2. She spends between four and six hours a day on her phone. 3. The average British teenager spends more time on screens than sleeping. 4. Attention spans have shortened measurably in the last decade. 5. Rates of anxiety, depression, and self-harm among young people have risen in correlation with smartphone adoption.",
            },
            markScheme: ['1 mark per valid point, maximum 5'],
          },
          {
            id: 'wjec-c2-14-q2',
            questionNumber: 2,
            questionText:
              'How does the 21st-century writer use language to convey their concern about the effect of technology on young people?\n\nYou should comment on specific words and phrases and their effects.',
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${WJEC_C2_14_SOURCE_A}`,
            extractSource: WJEC_C2_14_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses the word "experiment" to suggest children are being treated like lab subjects, which is frightening. The phrase "she cannot stop" at the end of paragraph one shows addiction. The comparison of tech companies to "tobacco executives" implies they are lying about the harm they cause. The triple "I blame" in the final paragraph shows growing anger and guilt.',
              'Grade 6-7':
                'The writer constructs the argument through a carefully managed emotional escalation. The opening is personal and specific: the daughter was "voracious" - a word suggesting healthy appetite - before the phone consumed that appetite. The aside "with alarming self-awareness" is devastating precisely because it removes the comfort of ignorance: the child knows she is being harmed and cannot stop, which redefines the problem from ignorance to compulsion. The second paragraph shifts from the personal to the epidemiological: "We are conducting an experiment on an entire generation" repurposes scientific language to indict the tech industry, and the admission "we have no idea what the results will be" emphasises our collective helplessness. The tobacco analogy is the piece\'s most incendiary move - it turns a comparison into an accusation - and the phrase "practised innocence" is a paradox that exposes the companies\' innocence as a rehearsed performance. The final paragraph\'s anaphoric "I blame" creates a tricolon of accountability that moves outward (engineers, algorithms) before turning inward (the writer), and the closing phrase "called it progress" repurposes a word normally associated with improvement to function as an indictment.',
            },
            markScheme: [
              'Analyses specific language techniques',
              'Comments on word-level effects',
              'Considers persuasive strategies and emotional register',
              'Uses embedded quotations',
            ],
          },
          {
            id: 'wjec-c2-14-q3',
            questionNumber: 3,
            questionText: `What do you learn about the 19th-century writer's views on the popular press from Source B?\n\nYou should comment on what they think and feel, using evidence from the text.\n\n(${WJEC_C2_14_B_GLOSSARY_FOR_QUESTIONS})`,
            marks: 10,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: `Source B:\n${WJEC_C2_14_SOURCE_B}`,
            extractSource: WJEC_C2_14_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5':
                'Knight is hopeful about cheap popular reading. He admits that coarse "flash" songs still exist, but when he asks whether there is no hope for cheap reading his answer is "Decidedly no", because "There is improvement all around us." He gives examples: the old halfpenny ballads are being replaced by "the decent penny book of a hundred songs". He is amazed by the "tons of newspapers" passing through the Post Office, and warns that they are a powerful force "for good or for evil". He believes things have improved because ordinary people are better educated.',
              'Grade 6-7':
                'Knight\'s view of the popular press is a considered optimism. He has just conceded that most readers of cheap books still want amusement rather than instruction, and the passage opens by asking whether that should make him "hopeless". His answer, "Decidedly no", is abrupt and emphatic, and the short declarative that follows, "There is improvement all around us", states his thesis. He proves it with small, concrete examples rather than grand claims: the "halfpenny ballad of Seven Dials" is dying out and "the decent penny book of a hundred songs" has taken its place, where "decent" marks a moral as well as a material improvement. He does not pretend that the cheap press is pure: "flash" songs exist, but "they are not for the penny buyers", a distinction that clears the penny buyers themselves. The paragraph then widens into an invitation - "Visit, if you can" and "Look with awe upon the tons of newspapers" - where the imperatives make the reader a witness and "awe" presents the sheer scale of the press as almost sublime. Yet "Think silently how potent a power is this for good or for evil" shows that his optimism is not naive: the power could go either way. The guide\'s remark at the letter-sorters\' boxes, that "everybody writes better", supplies his evidence, and his conclusion credits "General education" with the change: the press has improved because its readers have.',
            },
            markScheme: [
              'Identifies key views and attitudes',
              'Uses evidence from the text to support points',
              'Comments on how views are expressed',
              "Shows clear understanding of the writer's argument",
            ],
          },
          {
            id: 'wjec-c2-14-q4',
            questionNumber: 4,
            questionText: `"Both writers are concerned about how new forms of media affect people, but the 19th-century writer is more optimistic because he believes people can learn to use media wisely."\n\n(${WJEC_C2_14_B_GLOSSARY_FOR_QUESTIONS})\n\nTo what extent do you agree? You should refer to both texts in your answer.`,
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'evaluation',
            extract: `Source A:\n${WJEC_C2_14_SOURCE_A}\n\nSource B:\n${WJEC_C2_14_SOURCE_B}`,
            extractSource: `Source A: ${WJEC_C2_14_SOURCE_A_REF} | Source B: ${WJEC_C2_14_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'I agree that Knight is more optimistic. He believes that as people become better educated, what they read gets better, and he says "There is improvement all around us." The writer of Source A sees smartphones as harmful and addictive: the daughter "cannot stop". However, Knight is writing about newspapers and song-books, which people choose to buy, while Source A describes platforms that were designed to be addictive, which is a different problem.',
              'Grade 6-7':
                'The statement is broadly accurate but hides an important difference. Knight\'s optimism rests on an assumption about readers: as "General education" spreads, they choose better, so the cheap press improves and the halfpenny ballad gives way to "the decent penny book of a hundred songs". The writer of Source A assumes the opposite, that the user is hardly choosing at all, since the platforms were "designed ... to be addictive" and the daughter "cannot stop". This is not merely a difference of temperament; it reflects a change in the media themselves. A newspaper is a finite object that the reader buys and puts down; a feed is endless, and its content is "calibrated to exploit" the reader. Knight\'s optimism may therefore be justified for his century without carrying over to ours. Yet he is not blind to danger: "Think silently how potent a power is this for good or for evil" could stand as the thesis of Source A. The parallel should make us cautious. Knight had to answer doubts about cheap reading, as the question that opens his paragraph shows, and he trusted education to answer them. Whether education can do the same for the smartphone is exactly the question that Source A leaves open.',
            },
            markScheme: [
              'Evaluates both texts with a sustained personal response',
              "Compares the writers' attitudes to media and change",
              'Uses evidence from both texts',
              'Shows nuanced critical judgement',
            ],
          },
        ],
      },
      {
        id: 'wjec-c2-14-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 60 minutes on this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-14-q5',
            questionNumber: 5,
            questionText:
              'Your headteacher is considering banning mobile phones from your school entirely.\n\nWrite a letter to the headteacher giving your views on this proposal.\n\nYou could include:\n- the problems phones cause in school\n- the benefits of having access to a phone\n- your suggested compromise or recommendation.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear letter with: appropriate form and register; relevant arguments; generally accurate SPaG.',
              'Grade 6-7':
                'A well-structured letter with: persuasive techniques; balanced reasoning; consistent accuracy.',
              'Grade 8-9':
                'A compelling letter with: sophisticated rhetoric; nuanced engagement with counterarguments; technical virtuosity.',
            },
            markScheme: [
              'Communication & Organisation (10 marks): Purpose, audience, form, structure',
              'Writing Accurately (6 marks): Sentence variety, vocabulary, SPaG',
            ],
          },
          {
            id: 'wjec-c2-14-q6',
            questionNumber: 6,
            questionText:
              '"Social media has done more harm than good to young people\'s mental health."\n\nWrite an article for a national newspaper in which you argue for or against this statement.',
            marks: 24,
            suggestedTimeMinutes: 40,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear article with: appropriate form; a range of ideas; generally accurate SPaG.',
              'Grade 6-7':
                'A well-crafted article with: engaging opening; sustained argument; consistent accuracy.',
              'Grade 8-9':
                'An outstanding article with: compelling voice; nuanced analysis; technical virtuosity.',
            },
            markScheme: [
              'Communication & Organisation (14 marks): Purpose, audience, form, voice, structure',
              'Writing Accurately (10 marks): Sentence variety, vocabulary, SPaG',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WJEC COMPONENT 2 - PAPER 15: Art and Culture
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c2-15',
    board: 'WJEC',
    paperNumber: 2,
    title:
      'Component 2: 19th and 21st Century Non-Fiction Reading and Transactional/Persuasive Writing',
    subtitle: 'English Language C700U20-1',
    code: 'C700U20-1',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c2-15-reading',
        title: 'Section A: Reading',
        description:
          'Read both source texts carefully. Then answer all the questions in this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-15-q1',
            questionNumber: 1,
            questionText:
              'Read the 21st-century source text about arts funding (Source A).\n\nList five things you learn about the impact of arts cuts in Wales.',
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Source A:\n${WJEC_C2_15_SOURCE_A}\n\nSource B:\n${WJEC_C2_15_SOURCE_B}`,
            extractSource: `Source A: ${WJEC_C2_15_SOURCE_A_REF} | Source B: ${WJEC_C2_15_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                '1. Three councils in South Wales announced closure of public libraries. 2. Two community theatres have lost their funding entirely. 3. The local museum in Merthyr Tydfil will shut its doors in September. 4. A retired steelworker in Port Talbot paints watercolours every Tuesday in the community centre. 5. Teenagers in Rhyl found drama workshops to be the first space where they were listened to.',
            },
            markScheme: ['1 mark per valid point, maximum 5'],
          },
          {
            id: 'wjec-c2-15-q2',
            questionNumber: 2,
            questionText:
              "How does the 21st-century writer use language to argue that the arts are essential to people's lives?\n\nYou should comment on specific words and phrases and their effects.",
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${WJEC_C2_15_SOURCE_A}`,
            extractSource: WJEC_C2_15_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer repeats "is not a luxury" three times to hammer home the point that the arts matter. The writer uses specific examples of people - the steelworker, the teenagers, the woman in the library - to make the argument personal and emotional. The word "lifeline" suggests the arts literally keep people alive. The list "birdsong... friendship... the view from a mountain" compares the arts to things everyone values but cannot sell.',
              'Grade 6-7':
                'The writer constructs the argument through a powerful rhetorical strategy of negation and reframing. The opening paragraph establishes the facts with journalistic restraint - three councils, two theatres, one museum - before the justification is quoted in free indirect discourse: "we cannot afford luxuries when essentials are under pressure." This sets up the central rhetorical move: three sentences that each begin "For the" (anaphora) and end "is not a luxury" (epistrophe), each about a different person or group whose specificity (a steelworker in Port Talbot, teenagers in Rhyl, a woman in Swansea) resists abstraction. Each example escalates: from creative fulfilment to being heard to physical safety and warmth. The pivot from "luxury" to "lifeline" completes the semantic transformation. The final paragraph\'s most devastating technique is the reductio ad absurdum: "birdsong doesn\'t matter. Friendship doesn\'t matter." By placing arts funding alongside universally valued but non-commercial experiences, the writer exposes the absurdity of purely economic valuation. The closing sentence - "things that can be sold" - reduces the governing ideology to its most naked and least defensible formulation.',
            },
            markScheme: [
              'Analyses specific language techniques',
              'Comments on word-level effects',
              'Considers persuasive strategies and emotional appeal',
              'Uses embedded quotations',
            ],
          },
          {
            id: 'wjec-c2-15-q3',
            questionNumber: 3,
            questionText: `What do you learn about the 19th-century writer's views on art and ordinary people from Source B?\n\nYou should comment on what they think and feel, using evidence from the text.\n\n(${WJEC_C2_15_B_GLOSSARY_FOR_QUESTIONS})`,
            marks: 10,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: `Source B:\n${WJEC_C2_15_SOURCE_B}`,
            extractSource: WJEC_C2_15_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5':
                'Morris believes that ordinary working people made some of the finest art in England. He says the old village churches and houses were not designed by a great architect but by "the village carpenter, smith, mason" - "a common fellow". He thinks these workers enjoyed what they did, because nobody could make something so beautiful without pleasure. He says the seat of a village priest was carved as finely as a king\'s throne. He believes that making beautiful things as part of their daily work brought working people "some human happiness".',
              'Grade 6-7':
                'Morris argues that art belongs to ordinary people because they made it. He builds the argument through question and answer: "who was it that designed and ornamented them?" The first answer he imagines, "The great architect, carefully kept for the purpose", is dismissed with "By no means", and the phrase "guarded from the common troubles of common men" mocks the idea of the artist as a protected, superior being. The real makers are named plainly: "the monk, the ploughman\'s brother; oftenest his other brother, the village carpenter, smith, mason". Making them brothers turns art into a family trade of ordinary people. Morris puts "a common fellow" and "cultivated" in quotation marks, holding the snobbish labels up to be questioned, and then reverses them: the common fellow\'s work is "the wonder and despair" of the cultivated architect. His strongest claim is about feeling. No one, he says, could make work "so delicate, so careful, and so inventive" without "pleasure being a third party to the brain that conceived and the hand that fashioned it", so for Morris beauty is the sign of happy work. Setting "the throne of the great Plantagenet" beside "the chest of the yeoman\'s good-wife" levels king and farmer. The last sentence gathers the argument into two pictures of work, "the hammer chinked on the anvil, and the chisel played about the oak beam", where the verb "played" suggests labour that felt like play, and it ends on "some human happiness".',
            },
            markScheme: [
              'Identifies key views and attitudes',
              'Uses evidence from the text to support points',
              'Comments on how the writer expresses their views',
              "Shows clear understanding of the writer's perspective",
            ],
          },
          {
            id: 'wjec-c2-15-q4',
            questionNumber: 4,
            questionText: `"Both writers argue that the arts belong to ordinary people, but the 19th-century writer is more persuasive because he celebrates what ordinary people have made rather than complaining about what they are losing."\n\n(${WJEC_C2_15_B_GLOSSARY_FOR_QUESTIONS})\n\nTo what extent do you agree? You should refer to both texts in your answer.`,
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'evaluation',
            extract: `Source A:\n${WJEC_C2_15_SOURCE_A}\n\nSource B:\n${WJEC_C2_15_SOURCE_B}`,
            extractSource: `Source A: ${WJEC_C2_15_SOURCE_A_REF} | Source B: ${WJEC_C2_15_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'I partly agree. Morris is positive: he praises the village carpenters and masons whose work is "the wonder and despair" of trained architects, and this makes his argument uplifting. Source A focuses more on what is being lost, such as libraries and theatres. However, the examples in Source A, like the woman who said the library was the only place where she "felt safe and warm", are very powerful and show why the arts matter today. Both writers are persuasive in different ways.',
              'Grade 6-7':
                'Calling Source A merely "complaining" is reductive. Its three cases - the steelworker, the teenagers, the library user - are not complaints but testimony: evidence of what the arts do for people now, and the named places (Port Talbot, Rhyl, Swansea) root the argument in the present. Morris, by contrast, argues from the past. His village carpenter and mason are long dead, and his evidence is the work they left, "so delicate, so careful, and so inventive". That gives his argument a hopeful tone - ordinary people once made beautiful things in their "common everyday labour" - but it also makes it harder to test. The real difference is one of genre. Source A is an elegy for what is being destroyed; Morris writes a celebration that carries an implied reproach, since the "cultivated" architect of his own day cannot match the common fellow\'s work. Both are persuasive, in different registers: Source A makes the reader angry about loss, while Morris makes the reader imagine what work could be. A complete case for the arts needs both, the urgency of the one and the vision of the other.',
            },
            markScheme: [
              'Evaluates both texts with a sustained personal response',
              'Compares rhetorical strategies and their effectiveness',
              'Uses evidence from both texts',
              'Shows nuanced critical judgement',
            ],
          },
        ],
      },
      {
        id: 'wjec-c2-15-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 60 minutes on this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-15-q5',
            questionNumber: 5,
            questionText:
              "Your local council has announced plans to close the town's only art gallery and replace it with a car park.\n\nWrite a speech to be delivered at a public meeting arguing that the gallery should be saved.\n\nYou could include:\n- the importance of the gallery to the community\n- the consequences of its closure\n- alternative solutions to the parking problem.",
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear speech with: appropriate form and register; relevant arguments; generally accurate SPaG.',
              'Grade 6-7':
                'A well-structured speech with: rhetorical techniques; emotional appeal; consistent accuracy.',
              'Grade 8-9':
                'A compelling speech with: sophisticated rhetoric; powerful persuasion; technical virtuosity.',
            },
            markScheme: [
              'Communication & Organisation (10 marks): Purpose, audience, form, structure',
              'Writing Accurately (6 marks): Sentence variety, vocabulary, SPaG',
            ],
          },
          {
            id: 'wjec-c2-15-q6',
            questionNumber: 6,
            questionText:
              '"Every child should study the arts at school until the age of sixteen. The arts are just as important as maths and science."\n\nWrite an article for a broadsheet newspaper in which you argue for or against this view.',
            marks: 24,
            suggestedTimeMinutes: 40,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear article with: appropriate form; a range of ideas; generally accurate SPaG.',
              'Grade 6-7':
                'A well-crafted article with: engaging opening; developed argument; consistent accuracy.',
              'Grade 8-9':
                'An outstanding article with: compelling voice; nuanced exploration of both sides; technical virtuosity.',
            },
            markScheme: [
              'Communication & Organisation (14 marks): Purpose, audience, form, voice, structure',
              'Writing Accurately (10 marks): Sentence variety, vocabulary, SPaG',
            ],
          },
        ],
      },
    ],
  },
]
