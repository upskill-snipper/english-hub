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
 *
 * RESTRUCTURED 24 October 2026, the day the AI marker was corrected to mark
 * each paper as its board does, so the marks, timings and Section B that the
 * paragraph above left alone have now changed. WHAT WAS WRONG: these papers
 * were not Eduqas's paper. Each set four reading questions worth 5, 10, 10
 * and 15 and two writing tasks worth 16 and 24, where C700U20-1 sets six
 * reading questions worth 3, 10, 3, 10, 4 and 10 and two compulsory writing
 * tasks of 20 each. Question 3 gave ten marks to the 19th-century writer's
 * views, a question the paper does not set; Question 4 asked for one 15-mark
 * verdict on both texts at once, where Eduqas judges the 19th-century text on
 * its own (Question 1.4) and compares the two separately (Question 1.6);
 * nothing brought details from the two texts together (Question 1.5); and the
 * writing was marked on splits Eduqas does not use. A student practising
 * them sat an exam that does not exist, and of the answers handed to the
 * marker only Question 2's found a question of its worth: the rest got
 * general feedback with no marks.
 *
 * WHAT THEY ARE NOW. Each is set as Eduqas sets C700U20-1, as
 * src/data/mark-scheme-guides/eduqas-lang-comp2.ts describes it (checked
 * twice against Eduqas's Summer 2025 question paper and marking scheme and
 * the specification): 1.1, 3 marks of short questions on Source A, the
 * 21st-century text; 1.2, 10 marks on how its writer tries to achieve a
 * purpose; 1.3, 3 marks of short questions on Source B, the 19th-century
 * text; 1.4, 10 marks judging Source B against a statement; 1.5, 4 marks
 * bringing details from both together; 1.6, 10 marks comparing them; then
 * 2.1 and 2.2, two compulsory writing tasks of 20 marks each, 12 for
 * communication and organisation and 8 for writing accurately. Eduqas
 * numbers its questions within a section, so questionNumber runs 1 to 6 and
 * then 1 and 2, and the board's numbers are the labels. The paper takes two
 * hours, an hour on each section as Eduqas advises; the minutes for each
 * reading question are the guide's suggestion. The wording and the mark
 * schemes are ours, written from the guide's account of what earns marks,
 * and every question worth 6 or more has a model answer. Each glossary is
 * printed with Question 1.3, the first question on Source B. The questions
 * name paragraphs, not line numbers, which the mock-exam page does not
 * print, and every quotation in a reading question's text, answers and mark
 * scheme was checked by script against the extract that question prints.
 * The sources are kept word for word: each fits what Eduqas sets, one
 * 21st-century and one 19th-century non-fiction text. A question that asks
 * what a Source A article says is answered from the article, which does not
 * make its figures true; none asks about Paper 12's forty-six pounds or
 * Paper 14's sentence about self-harm.
 *
 * CHECKED 31 October 2026 by a second reader, against each extract, the
 * guide and Eduqas's Summer 2025 paper. The five Source B passages are word
 * for word (scripts/check-mock-exam-extracts.mjs --fetch: 100% each) and
 * their labels hold. Fixed, one line each:
 *   - Paper 12 Source A had its writer teach in HMP Swansea, a real prison,
 *     and give figures for its inmates; the prison is not named now, nor in
 *     Question 1.1(b).
 *   - Paper 12 Source A released prisoners "with forty-six pounds", the
 *     discharge grant until 2021 (raised to £76, then £82.39 in 2022); it
 *     now says "a small payment".
 *   - Paper 15 Source A had three South Wales councils close their libraries
 *     and the museum in Merthyr Tydfil, a real one, shut in September, which
 *     nothing records; the closures are now the writer's own council's, and
 *     Questions 1.1(a) and (b) and the 1.2 answer follow.
 *   - Paper 14 Source A named self-harm among young people's troubles; the
 *     sentence now names anxiety and depression only.
 *   - Paper 11 Source A gave a rugby international "ninety minutes", a
 *     football match's length; it is eighty, there and in the 1.2 answer.
 *   - Paper 12 Question 1.6 answer said Newgate's women got no clothing "at
 *     all" (the city gave none regularly; the sheriffs gave some) and that
 *     Source A's teacher filled the gap, which the article never says; the
 *     answer and its mark-scheme point are corrected.
 *   - Paper 12 Question 1.4 answer read Fry's "delicate" as distressing; it
 *     means modest or proper, and the answer now says so.
 *   - Paper 12 Question 1.3(a) accepted "the sheriffs did so only now and
 *     then" for who usually clothed the women; the scheme now gives the
 *     sheriffs alone no mark.
 *   - Paper 14 Question 1.4 answer had general education furnish "the
 *     solution" to the improvement; Knight means it explains where the
 *     improvement came from, and the answer now says that.
 * Left as they are: Paper 13's unnamed survey and Paper 14's figures on
 * screens and attention, which credit no real body; and the articles' own
 * dashes, which are their style, as in the other two sets.
 *
 * BOARD WORDING, 31 October 2026, brought into line with wjec-c2-a.ts and
 * wjec-c2-b.ts: in all five papers Questions 1.2, 1.5 and 1.6 and the Section
 * B guidance opened with the sentences those files record as Eduqas's own
 * Summer 2025 wording, or near copies ("You should comment on:", "Using
 * details from both texts, explain briefly", "Both of these texts are about",
 * "Aim to write about 300 to 400 words for each task"). All 16 are reworded
 * in the site's own words and ask the same things, and 1.5 now asks which
 * text each detail comes from, as Eduqas's does. Marks, schemes and answers
 * are unchanged.
 */
import type { MockExamPaper } from './types'

// ─── WJEC Component 2 Source Texts ──────────────────────────────────────────

// Paper 11 - Sport
const WJEC_C2_11_SOURCE_A = `There is a moment in every great sporting contest when the crowd falls silent. Not out of boredom or indifference, but out of a collective recognition that what they are witnessing transcends the ordinary. I experienced that moment last Saturday at the Principality Stadium, when a nineteen-year-old flanker from the Valleys - a boy who twelve months ago was stacking shelves in Aldi - somehow, impossibly, turned over a ball on his own try line and set in motion the counter-attack that would win Wales the Six Nations.

Sport does this. It takes unremarkable people and places them in circumstances where they become extraordinary. And it does something else, too: it makes us, the watchers, participants in the drama. When that boy ripped the ball free, seventy thousand people rose as one. Strangers grabbed strangers. Men who had not cried since childhood found tears on their cheeks. For eighty minutes, every division that fractures our society - class, politics, language - was suspended. We were, briefly and gloriously, one people.

The cynics will tell you it doesn't last. They're right, of course. By Monday morning the divisions will have reasserted themselves. But I would argue that those eighty minutes matter more than the cynics allow. They remind us of a capacity for collective joy that we have almost forgotten how to access. In an age of isolation and screen-mediated experience, sport remains one of the last places where thousands of human beings share the same emotion at the same moment. That is not trivial. That is essential.`

const WJEC_C2_11_SOURCE_A_REF = 'Opinion article, specially written for this paper'

const WJEC_C2_11_SOURCE_B = `It is perhaps truer, or at least more evident, as regards sports than as regards the other expressions of predatory emulation already spoken of, that the temperament which inclines men to them is essentially a boyish temperament. The addiction to sports, therefore, in a peculiar degree marks an arrested development of the man's moral nature. This peculiar boyishness of temperament in sporting men immediately becomes apparent when attention is directed to the large element of make-believe that is present in all sporting activity. Sports share this character of make-believe with the games and exploits to which children, especially boys, are habitually inclined. Make-believe does not enter in the same proportion into all sports, but it is present in a very appreciable degree in all. It is apparently present in a larger measure in sportsmanship proper and in athletic contests than in set games of skill of a more sedentary character; although this rule may not be found to apply with any great uniformity. It is noticeable, for instance, that even very mild-mannered and matter-of-fact men who go out shooting are apt to carry an excess of arms and accoutrements in order to impress upon their own imagination the seriousness of their undertaking. These huntsmen are also prone to a histrionic, prancing gait and to an elaborate exaggeration of the motions, whether of stealth or of onslaught, involved in their deeds of exploit. Similarly in athletic sports there is almost invariably present a good share of rant and swagger and ostensible mystification—features which mark the histrionic nature of these employments. In all this, of course, the reminder of boyish make-believe is plain enough. The slang of athletics, by the way, is in great part made up of extremely sanguinary locutions borrowed from the terminology of warfare.`

const WJEC_C2_11_SOURCE_B_REF =
  'Thorstein Veblen, The Theory of the Leisure Class (1899), from Chapter Ten, "Modern Survivals of Prowess" (Project Gutenberg #833). Veblen, an American economist, has been writing about fighting and duelling, which he calls "predatory emulation": getting the better of others by force.'

const WJEC_C2_11_B_GLOSSARY_FOR_QUESTIONS =
  'Source B glossary: arrested development: growth that stopped too soon. accoutrements: equipment. histrionic: theatrical. ostensible mystification: a show of mystery. sanguinary locutions: bloodthirsty expressions.'

// Paper 12 - Justice and the Prison System
const WJEC_C2_12_SOURCE_A = `I spent three years working as a prison teacher, and in that time I learned one thing above all others: the people we lock up are overwhelmingly the people we have already failed. Of the two hundred and thirty inmates I taught, over eighty per cent had been excluded from school before the age of fourteen. More than half were functionally illiterate. Nearly all came from the same handful of postcodes - streets where unemployment runs at forty per cent and where a criminal record is not a mark of shame but an inevitability.

We tell ourselves that prison is about justice. It is not. It is about geography and class and the catastrophic failure of every institution that should have intervened before a young person reached the dock. Education. Social services. Mental health provision. Housing. Each of these systems failed my students, one after another, like dominoes falling in slow motion. And then, when the inevitable happened, we called it justice.

I am not naive. Some people are dangerous and must be separated from society. But they are a small minority. The majority of prisoners are not dangerous - they are damaged. And locking damaged people in a concrete box for twenty-three hours a day, then releasing them with a small payment and a bin bag of belongings, is not justice. It is institutional cruelty dressed in the language of law.`

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

We are conducting an experiment on an entire generation, and we have no idea what the results will be. The average British teenager now spends more time looking at a screen than they spend sleeping. Their attention spans, measured by cognitive psychologists, have shortened measurably in the last decade. Rates of anxiety and depression among young people have risen in exact correlation with smartphone adoption. Correlation is not causation, the tech companies remind us, with the same practised innocence that tobacco executives once deployed.

I do not blame my daughter. I blame the engineers in Silicon Valley who designed these platforms to be addictive. I blame the algorithms that feed children a relentless stream of content calibrated to exploit their insecurities. And I blame myself, and every parent like me, who handed a child a device we did not understand and called it progress.`

const WJEC_C2_14_SOURCE_A_REF = 'Opinion article, specially written for this paper'

const WJEC_C2_14_SOURCE_B = `Do such considerations as these make us hopeless of the steady progress of a sound as well as cheap popular literature? Decidedly no. There is improvement all around us. The halfpenny ballad of Seven Dials is not yet extinct; but let the collectors look sharply about them, for that relic of the chap-books, with the woodcuts that have served every generation, will soon be gone. In its place has come the decent penny book of a hundred songs. The shades of Scott, and Moore, and Campbell will not quarrel with this new popularity. There are "flash" songs; but they are not for the penny buyers. Thackeray has described the dens in which these abominations are current. The whole aspect of the humbler press has changed within these few years. Unquestionably the people have changed. Visit, if you can, the interior of that marvellous human machine, the General Post-Office, on a Friday evening, from half-past five to six o'clock. Look with awe upon the tons of newspapers that are crowding in to be distributed through the habitable globe. Think silently how potent a power is this for good or for evil. You turn to one of the boxes of the letter-sorters, and your guide will tell you, "this work occupies not half the time it formerly did, for everybody writes better." General education furnishes the solution of the otherwise doubtful origin of the improvement, in all the more manifest characteristics of improvement, of all popular literature.`

const WJEC_C2_14_SOURCE_B_REF =
  'Charles Knight, The Old Printer and the Modern Press (1854), Part II, Chapter VII (Project Gutenberg #59966). Knight, a publisher of cheap books for working people, has just admitted that most readers of cheap books still want "mere amusement".'

const WJEC_C2_14_B_GLOSSARY_FOR_QUESTIONS =
  'Source B glossary: Seven Dials: a poor district of London. chap-books: cheap pamphlets sold by pedlars. shades: ghosts, here of three poets who had died. "flash" songs: coarse ones. current: in circulation.'

// Paper 15 - Art and Culture
const WJEC_C2_15_SOURCE_A = `The argument is always the same. When budgets are tight, the arts are the first to go. Last month, my own council announced the closure of three of its public libraries. Two community theatres have lost their funding entirely. The local museum - a modest but irreplaceable collection of mining artefacts, photographs, and oral histories - will shut its doors in September. The justification offered is always economic necessity: we cannot afford luxuries when essentials are under pressure.

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

// ─── How Eduqas sets and marks Component 2 ───────────────────────────────────
// In the site's own words, from src/data/mark-scheme-guides/eduqas-lang-comp2.ts.

const SECTION_A_GUIDANCE =
  'Answer all the questions in this section. You are advised to spend about an hour on it: about 10 minutes reading the two texts, then about 50 minutes answering. Questions 1.1 and 1.2 are on Source A, the 21st-century text; Questions 1.3 and 1.4 are on Source B, the 19th-century text; Questions 1.5 and 1.6 are on both.'

const SECTION_B_GUIDANCE =
  'Answer both questions in this section. You are advised to spend about 30 minutes on each: about 5 minutes planning and about 25 minutes writing. Each is worth 20 marks: 12 for communication and organisation, and 8 for writing accurately. Each piece should be about 300 to 400 words long.'

const SHORT_A_MARKING = [
  'One mark for each correct answer, 3 marks in all. Each answer must come from Source A, the 21st-century text: an answer from Source B earns nothing.',
  "A short phrase is enough, in your own words or the writer's; no explanation is needed.",
]

const SHORT_B_MARKING = [
  'One mark for each correct answer, 3 marks in all, from Source B, the 19th-century text. An answer from Source A earns nothing.',
  'Show that you have understood the older language by putting it simply: a long passage copied out does not show that.',
]

const Q1_2_MARKING = [
  'Band 1 (1 to 2 marks): a detail or two, but the answer is short and drifts from the question.',
  'Band 2 (3 to 4 marks): some useful details with a little comment on them, but parts of the text are missed.',
  "Band 3 (5 to 6 marks): a fair spread of details, and a start on explaining how the writer's words, tone and structure do their job.",
  'Band 4 (7 to 8 marks): plenty of well-chosen details, explained correctly, with analysis of how the writer influences the reader starting to come through, and subject terms that help.',
  "Band 5 (9 to 10 marks): the whole text covered with sharp, well-explained points, picking apart in detail how the writer's methods work on the reader.",
  'Work through the text in order and use all of it. Quotations should be long enough to make sense, each followed by comment: fragments with no explanation, or techniques listed with no link to the question, earn little.',
]

const Q1_4_MARKING = [
  'Band 1 (1 to 2 marks): a quick opinion, or a detail or two, with little to back it up.',
  'Band 2 (3 to 4 marks): begins to test the statement against the text, with some evidence, but leaves parts of the text out.',
  'Band 3 (5 to 6 marks): judges the statement properly, using details from across the text and noticing how the language helps.',
  "Band 4 (7 to 8 marks): a clear, well-argued judgement with well-chosen evidence, showing how the writer's words and details reveal their feelings or views.",
  'Band 5 (9 to 10 marks): a detailed argument that convinces, takes in the whole text and makes sharp points about how it works, with every reference earning its place.',
  'Reach a judgement and keep to it, tracking the whole of Source B in order. A summary that does not judge holds itself down, and material from Source A earns nothing here.',
]

const Q1_5_MARKING = [
  'Band 1 (1 mark): only a little relevant detail, or details from one text only. An answer on one text stays here, however full it is.',
  'Band 2 (2 marks): a relevant detail or two from each text.',
  'Band 3 (3 marks): several relevant details from both texts, brought together sensibly.',
  'Band 4 (4 marks): a good spread of exactly the right details from both texts, brought together clearly.',
  'Make clear which text each detail comes from. The question wants the details, not how they are written: comment on language earns nothing here.',
]

const Q1_6_MARKING = [
  'Band 1 (1 to 2 marks): a detail or two, perhaps from one text only, or with no way to tell which text is meant.',
  'Band 2 (3 to 4 marks): some sound details from both texts, and a first try at saying how the writers get them across.',
  'Band 3 (5 to 6 marks): a fair number of sound details from both texts, and an attempt to explore how each writer presents them.',
  'Band 4 (7 to 8 marks): details from both texts examined properly, with detailed comment on the methods each writer uses.',
  "Band 5 (9 to 10 marks): both texts examined in depth, with a clear grasp of how and why each writer's methods work on readers.",
  'Both halves of the question count: what the writers say, and how they get it across. Draw links between the texts, and always make clear which text you mean.',
]

const WRITING_MARKING = [
  'Two marks are given and added together: up to 12 for communication and organisation (AO5) and up to 8 for writing accurately (AO6), each found on its own scale.',
  'Band 1 (AO5 1 to 2, AO6 1): some idea of the form and the reader, but little to say and ideas in a simple order; sentences mostly alike, and errors frequent.',
  'Band 2 (AO5 3 to 4, AO6 2 to 3): aware of the purpose and the reader, with a few reasons and paragraphs, though the points are not developed; sentences vary a little and most spelling is right.',
  'Band 3 (AO5 5 to 7, AO6 4 to 5): fits the task and the reader, with reasons that are developed and paragraphs that build a sensible case; mostly accurate, with a mix of sentences and punctuation.',
  'Band 4 (AO5 8 to 10, AO6 6 to 7): right for the task and the reader all the way through, with detailed, carefully chosen content and a clear structure; sentences varied for effect, and errors rare.',
  'Band 5 (AO5 11 to 12, AO6 8): ambitious, polished writing, with a tone exactly right for the reader, ideas developed in depth so that they persuade, and accuracy close to faultless, with a wide, precise vocabulary.',
]

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
        description: SECTION_A_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-11-q1',
            questionNumber: 1,
            label: '1.1',
            questionText: `Read Source A, the 21st-century text, and answer the questions below.\n\n(a) Where was the writer last Saturday? [1]\n(b) What was the young flanker doing twelve months earlier? [1]\n(c) How many people "rose as one" when he won the ball? [1]`,
            marks: 3,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: `Source A:\n${WJEC_C2_11_SOURCE_A}\n\nSource B:\n${WJEC_C2_11_SOURCE_B}`,
            extractSource: `Source A: ${WJEC_C2_11_SOURCE_A_REF} | Source B: ${WJEC_C2_11_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': `(a) At the Principality Stadium.\n(b) Stacking shelves in a supermarket.\n(c) Seventy thousand.`,
            },
            markScheme: {
              'How it is marked (3 marks)': SHORT_A_MARKING,
              Answers: [
                '(a) At the Principality Stadium (accept: at a rugby match in the Six Nations).',
                '(b) Stacking shelves in a supermarket (accept: in Aldi).',
                '(c) Seventy thousand.',
              ],
            },
          },
          {
            id: 'wjec-c2-11-q2',
            questionNumber: 2,
            label: '1.2',
            questionText: `Source A is an opinion article about sport. The writer wants to persuade readers that sport matters because it brings people together.\n\nHow does the writer try to do this?\n\nIn your answer, comment on:\n• what the writer says\n• the writer's choice of language and tone\n• how the article is structured, and any other methods the writer uses.\n\n[10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${WJEC_C2_11_SOURCE_A}`,
            extractSource: WJEC_C2_11_SOURCE_A_REF,
            modelAnswers: {
              'Grade 8-9': `The writer begins with a general truth, "There is a moment in every great sporting contest when the crowd falls silent", which invites every reader who has watched sport to recognise the feeling. The next sentence is a fragment that heads off a misunderstanding: "Not out of boredom or indifference, but out of a collective recognition that what they are witnessing transcends the ordinary." The word "collective" introduces the main idea of the article, that sport unites people.\n\nThe writer then makes the general specific. "I experienced that moment last Saturday at the Principality Stadium" gives the account authority, and the long sentence about the young flanker builds suspense by holding back the main action with a parenthesis about his past: "a boy who twelve months ago was stacking shelves in Aldi". This ordinary detail makes his achievement more remarkable, and the adverbs "somehow, impossibly" capture the crowd's disbelief.\n\nThe second paragraph opens with a short, confident statement, "Sport does this.", which turns one moment into a general rule. The writer develops the idea in two steps: sport "takes unremarkable people" and makes them "extraordinary", and it "makes us, the watchers, participants in the drama". The description of the crowd moves into short, vivid sentences: "Strangers grabbed strangers. Men who had not cried since childhood found tears on their cheeks." The repetition in "Strangers grabbed strangers" shows people with nothing in common suddenly close, and the image of men crying shows feelings that are usually hidden being released. The list of divisions, "class, politics, language", all "suspended", leads to the climax: "We were, briefly and gloriously, one people." The inclusive "We" and the pairing of "briefly" with "gloriously" admit that the unity is short-lived while insisting that it is precious.\n\nThe final paragraph answers an objection before the reader can make it: "The cynics will tell you it doesn't last. They're right, of course." This concession makes the writer seem honest, and the contractions keep the tone conversational. Then comes the counter-argument, introduced by "But": the eighty minutes "matter more than the cynics allow". The writer sets sport against modern life, "an age of isolation and screen-mediated experience", which makes it one of the few shared experiences left. The ending uses two short, parallel sentences: "That is not trivial. That is essential." The contrast between "trivial" and "essential" sums up the argument: sport is not mere entertainment but something people need.`,
            },
            markScheme: {
              'How it is marked (10 marks)': Q1_2_MARKING,
              'Points you might make': [
                `The general opening ("the crowd falls silent") and the word "collective" introduce the idea of unity.`,
                `The personal anecdote and the parenthesis "a boy who twelve months ago was stacking shelves in Aldi" make the moment remarkable.`,
                `"Sport does this." turns one moment into a rule; short sentences ("Strangers grabbed strangers.") show the crowd united.`,
                `The climax "We were, briefly and gloriously, one people." balances a short-lived unity against its value.`,
                `A concession ("They're right, of course.") answered with "But", and the contrast with "an age of isolation".`,
                `The parallel ending "That is not trivial. That is essential."`,
              ],
            },
          },
          {
            id: 'wjec-c2-11-q3',
            questionNumber: 3,
            label: '1.3',
            questionText: `Read Source B, the 19th-century text, and answer the questions below.\n\n(${WJEC_C2_11_B_GLOSSARY_FOR_QUESTIONS})\n\n(a) According to Veblen, what kind of temperament makes men love sport? [1]\n(b) What does Veblen say that sports have in common with children's games? [1]\n(c) Where, according to Veblen, does much of the slang of athletics come from? [1]`,
            marks: 3,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: `Source B:\n${WJEC_C2_11_SOURCE_B}`,
            extractSource: WJEC_C2_11_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5': `(a) A boyish temperament.\n(b) Make-believe.\n(c) The language of war.`,
            },
            markScheme: {
              'How it is marked (3 marks)': SHORT_B_MARKING,
              Answers: [
                '(a) A boyish one (accept: one that has not grown up).',
                '(b) Make-believe (accept: pretending).',
                '(c) From the words used in warfare.',
              ],
            },
          },
          {
            id: 'wjec-c2-11-q4',
            questionNumber: 4,
            label: '1.4',
            questionText: `Read Source B again.\n\nA student said: ‘Veblen mocks sportsmen rather than arguing against sport.’\n\nHow far do you agree with this view?\n\nIn your answer, give your own view of how Veblen presents sport and sportsmen across the whole text, and explain how his choices of words and details create that view. Support your answer with references to the text. [10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'evaluation',
            extract: `Source B:\n${WJEC_C2_11_SOURCE_B}`,
            extractSource: WJEC_C2_11_SOURCE_B_REF,
            modelAnswers: {
              'Grade 8-9': `I partly agree. Veblen's passage is an argument, with a clear claim and supporting examples, but the examples he chooses and the way he describes them are so mocking that the effect is closer to satire than to calm reasoning.\n\nThe argument is set out formally at the start. Veblen claims that "the temperament which inclines men to them is essentially a boyish temperament", and draws a conclusion with "therefore": the love of sport "marks an arrested development of the man's moral nature". The vocabulary is a scholar's, and the hedges "It is perhaps truer, or at least more evident" and "although this rule may not be found to apply with any great uniformity" make him sound careful and fair. So far, he is arguing.\n\nHis evidence is the "large element of make-believe" that sport shares "with the games and exploits to which children, especially boys, are habitually inclined". The comparison is itself an insult, since it treats grown men as children, but it is also the logical centre of his case.\n\nThe examples are where the mockery is clearest. He describes "even very mild-mannered and matter-of-fact men who go out shooting", who carry "an excess of arms and accoutrements in order to impress upon their own imagination the seriousness of their undertaking". The joke is that they are trying to convince themselves. The huntsmen are "prone to a histrionic, prancing gait", and "prancing" makes them look ridiculous, like children playing at soldiers. Athletic sports, he adds, are full of "rant and swagger and ostensible mystification", a list that suggests empty show.\n\nHis tone is dry rather than angry. Phrases such as "of course" and "by the way" make his most damaging points sound casual: "In all this, of course, the reminder of boyish make-believe is plain enough." The final sentence, which notes that the slang of athletics is "made up of extremely sanguinary locutions borrowed from the terminology of warfare", links sport with war, completing his argument that sport is what remains of a fighting instinct.\n\nSo Veblen does argue, but he argues by ridicule. The statement is right that mockery is his main method; it is wrong only in suggesting that the mockery replaces the argument, because in this passage the mockery is the argument.`,
            },
            markScheme: {
              'How it is marked (10 marks)': Q1_4_MARKING,
              'Points you might make': [
                `A formal argument: the claim of "a boyish temperament", the conclusion drawn with "therefore", and careful hedges ("It is perhaps truer, or at least more evident").`,
                `The central comparison with children's make-believe is both evidence and insult.`,
                `Mocking examples: shooters with "an excess of arms and accoutrements"; huntsmen with "a histrionic, prancing gait"; "rant and swagger".`,
                `A dry, casual tone ("of course", "by the way") makes the criticism sound obvious.`,
                'The ending links sport with war, completing the argument.',
                'A strong answer reaches a judgement on the statement and keeps to it through the whole passage.',
              ],
            },
          },
          {
            id: 'wjec-c2-11-q5',
            questionNumber: 5,
            label: '1.5',
            questionText: `Bring together details from both texts to explain briefly how each writer describes the behaviour of people involved in sport. Make clear which text each detail comes from. [4]`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'summary',
            extract: `Source A:\n${WJEC_C2_11_SOURCE_A}\n\nSource B:\n${WJEC_C2_11_SOURCE_B}`,
            extractSource: `Source A: ${WJEC_C2_11_SOURCE_A_REF} | Source B: ${WJEC_C2_11_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': `In Source A, the crowd "falls silent" at the great moment and then "rose as one": "Strangers grabbed strangers", and grown men cried. In Source B, Veblen says that men who go shooting carry "an excess of arms and accoutrements" and walk with "a histrionic, prancing gait", and that athletes are full of "rant and swagger" and use the language of war.`,
            },
            markScheme: {
              'How it is marked (4 marks)': Q1_5_MARKING,
              'Details you might bring together': [
                'Source A: the crowd falls silent, then rises as one; strangers grab each other; men cry; a young player wins the ball against the odds.',
                'Source B: shooters carry far more equipment than they need; huntsmen prance and exaggerate their movements; athletes rant and swagger and use warlike slang.',
              ],
            },
          },
          {
            id: 'wjec-c2-11-q6',
            questionNumber: 6,
            label: '1.6',
            questionText: `Source A and Source B are both about sport.\n\nCompare:\n• what the writers say about sport and its effect on people\n• how they get their ideas across.\n\nUse evidence from both texts, and make clear which text each point comes from. [10]`,
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'comparison',
            extract: `Source A:\n${WJEC_C2_11_SOURCE_A}\n\nSource B:\n${WJEC_C2_11_SOURCE_B}`,
            extractSource: `Source A: ${WJEC_C2_11_SOURCE_A_REF} | Source B: ${WJEC_C2_11_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 8-9': `The two writers take almost opposite views of sport. The writer of Source A celebrates it as something that unites people and makes them "extraordinary", while Veblen, in Source B, treats the love of sport as a sign of immaturity, "an arrested development of the man's moral nature".\n\nWhat they say about sport's effect on people is strikingly different. For the writer of Source A, sport lifts ordinary people above themselves: a young man who was "stacking shelves in Aldi" becomes a hero, and the crowd becomes "one people", with every division "suspended". For Veblen, sport does the opposite: it shows that grown men have never left boyhood behind. Its "large element of make-believe" is the same as in "the games and exploits to which children, especially boys, are habitually inclined".\n\nEven where they notice the same things, they judge them differently. Both see the drama and emotion of sport. Source A presents it warmly: "Men who had not cried since childhood found tears on their cheeks." Veblen sees the same theatricality as faintly absurd, mocking the "histrionic, prancing gait" of huntsmen and the "rant and swagger" of athletes. Both also link sport with something larger. For Source A it is "collective joy" in "an age of isolation"; for Veblen it is war, since the slang of athletics is "borrowed from the terminology of warfare".\n\nTheir methods reflect their purposes. The writer of Source A uses a personal anecdote ("I experienced that moment last Saturday"), vivid short sentences, the inclusive "We" and an emotional climax, and answers an objection before ending ("The cynics will tell you it doesn't last"), with the antithesis "That is not trivial. That is essential." Veblen writes in a detached, academic style, with long sentences, careful qualifications ("although this rule may not be found to apply with any great uniformity") and abstract phrases such as "predatory emulation". His humour is dry and ironic, as when he says that shooters carry their equipment "to impress upon their own imagination the seriousness of their undertaking".\n\nSo the modern writer wants readers to feel the value of sport, while Veblen wants them to see through it.`,
            },
            markScheme: {
              'How it is marked (10 marks)': Q1_6_MARKING,
              'Points you might make': [
                `Opposite views: sport unites people and makes them "extraordinary" (Source A); the love of sport is "an arrested development" (Source B).`,
                'Both notice the drama and emotion of sport, but celebrate it (Source A) or mock it (Source B).',
                'Both link sport with something larger: shared joy in an isolated age (Source A); war (Source B).',
                'Methods: anecdote, short sentences, the inclusive "We" and a concession answered (Source A); a detached academic style, hedges and dry irony (Source B).',
                'Purpose: to make readers value sport (Source A); to make them see through it (Source B).',
              ],
            },
          },
        ],
      },
      {
        id: 'wjec-c2-11-writing',
        title: 'Section B: Writing',
        description: SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-11-q7',
            questionNumber: 1,
            label: '2.1',
            questionText: `Your local council is considering closing the town's sports centre to save money.\n\nWrite a letter to your local newspaper giving your views on the plan. [20]`,
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Dear Editor,\n\nI was dismayed to read in last week's paper that the council is considering closing the Riverside Sports Centre to save money. I am fifteen, and I have used the centre almost every week since I learnt to swim there at the age of five. I would like to explain to your readers, and to the council, why closing it would be a serious mistake.\n\nThe sports centre is not a luxury. For many families in our town it is the only affordable place to swim, play badminton or join a fitness class. Not everyone can pay for a private gym, and not everyone lives near a park. If the centre closes, the people who will suffer most are those who can least afford an alternative.\n\nThe centre also does far more than offer sport. On any weekday you will find toddlers in the learner pool, teenagers in the five-a-side league and pensioners at the morning exercise class. It is one of the few places in town where people of every age meet. For older residents who live alone, that weekly class may be their main chance to see friends.\n\nThere is a strong financial argument too. Regular exercise keeps people healthier, and healthier people need less support from doctors and hospitals. Closing the centre might save the council money this year, but the cost to people's health would be paid for years to come.\n\nI understand that the council must make difficult choices. But there are alternatives to closure. The centre could open later in the morning, when it is quiet, or rent its hall for parties and events. Local businesses could be invited to sponsor the pool, and a membership scheme for regular users would bring in steady income.\n\nI urge your readers to attend the council meeting next month and to make their views known. Once the sports centre is gone, it will not come back. Let us not lose something so valuable to save so little.\n\nYours faithfully,\n\nRhys Thomas`,
            },
            markScheme: {
              'How it is marked (20 marks)': WRITING_MARKING,
              'What earns marks in this task': [
                'The features of a letter to a newspaper: a greeting to the editor, an opening that states your view, clear paragraphs and a sign-off.',
                "A formal but lively tone that would persuade the paper's readers.",
                "A clear view, developed with reasons and local detail, that considers the council's position and offers alternatives.",
                'Accurate spelling, punctuation and grammar, with varied sentences and well-chosen words: 8 of the 20 marks are for this.',
              ],
            },
          },
          {
            id: 'wjec-c2-11-q8',
            questionNumber: 2,
            label: '2.2',
            questionText: `"Sport has become too commercialised. It is no longer about passion and teamwork but about money and celebrity."\n\nWrite an article for a newspaper giving your views on this statement. [20]`,
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Has money killed the beautiful game? Not quite\n\nEvery summer brings the same headlines. A footballer is sold for a fee that could build a hospital. A star signs a sponsorship deal worth more than most people earn in a lifetime. Ticket prices rise again, and the shirt you bought last year is already out of date. It is easy to agree that sport has been taken over by money. But I think the truth is more complicated.\n\nThere is no denying that commercialism has changed sport at the top. Matches are scheduled to suit television rather than fans. Clubs are bought and sold like companies, sometimes by owners with no connection to the town whose name they carry. Young players are treated as investments, and some fans can no longer afford to watch the teams they have supported all their lives. When a sport cares more about its next broadcasting deal than about the people in the stands, something has gone wrong.\n\nYet money has also done some good. It pays for better stadiums, safer equipment and coaching that has made athletes faster and stronger than ever. It has given women's sport, so long ignored, the investment it needed to grow, and it has turned players from poorer backgrounds into role models for millions of children.\n\nMost importantly, the passion has not gone. Watch the face of a player who scores in a cup final, or listen to a crowd singing in the rain, and you will not see people who care only about money. And look beyond the professional game. Every weekend, thousands of amateur teams play in parks and on muddy pitches for nothing but the love of it. Volunteers wash the kit, run the refreshments and drive the minibus. That is sport too, and it has never been more alive.\n\nSo is sport too commercialised? At the very top, often yes. But the heart of sport, the passion and the teamwork, is not for sale. It belongs to everyone who plays, and the best way to protect it is to keep playing, keep watching and keep demanding that the people who run sport remember who it is for.`,
            },
            markScheme: {
              'How it is marked (20 marks)': WRITING_MARKING,
              'What earns marks in this task': [
                'The features of a newspaper article: a headline, an engaging opening, and paragraphs that develop an argument to a clear conclusion.',
                'A lively, persuasive tone suited to newspaper readers.',
                'A clear view on the statement, developed with reasons and examples, perhaps weighing the arguments on both sides.',
                'Accurate spelling, punctuation and grammar, with varied sentences and well-chosen words: 8 of the 20 marks are for this.',
              ],
            },
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
        description: SECTION_A_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-12-q1',
            questionNumber: 1,
            label: '1.1',
            questionText: `Read Source A, the 21st-century text, and answer the questions below.\n\n(a) How long did the writer work as a prison teacher? [1]\n(b) How many prisoners did the writer teach? [1]\n(c) According to the writer, what share of them had been excluded from school before the age of fourteen? [1]`,
            marks: 3,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: `Source A:\n${WJEC_C2_12_SOURCE_A}\n\nSource B:\n${WJEC_C2_12_SOURCE_B}`,
            extractSource: `Source A: ${WJEC_C2_12_SOURCE_A_REF} | Source B: ${WJEC_C2_12_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': `(a) Three years.\n(b) Two hundred and thirty.\n(c) Over eighty per cent.`,
            },
            markScheme: {
              'How it is marked (3 marks)': SHORT_A_MARKING,
              Answers: [
                '(a) Three years.',
                '(b) Two hundred and thirty.',
                '(c) Over eighty per cent.',
              ],
            },
          },
          {
            id: 'wjec-c2-12-q2',
            questionNumber: 2,
            label: '1.2',
            questionText: `Source A is an opinion article about prisons. The writer wants to persuade readers that prison often fails the people it holds.\n\nHow does the writer try to do this?\n\nIn your answer, comment on:\n• what the writer says\n• the writer's choice of language and tone\n• how the article is structured, and any other methods the writer uses.\n\n[10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${WJEC_C2_12_SOURCE_A}`,
            extractSource: WJEC_C2_12_SOURCE_A_REF,
            modelAnswers: {
              'Grade 8-9': `The writer begins with personal authority, "I spent three years working as a prison teacher", and then states the central claim as a lesson learnt: "the people we lock up are overwhelmingly the people we have already failed". The repetition of "the people we" and the contrast between "lock up" and "already failed" suggest that prison is only the last step in a long series of failures. The inclusive "we" makes the reader part of that failure.\n\nStatistics follow, and they are precise: "two hundred and thirty inmates", "over eighty per cent" excluded from school "before the age of fourteen", and "More than half" functionally illiterate. Writing the numbers out in words gives them weight. The writer then explains the pattern through place: nearly all came from "the same handful of postcodes", where a criminal record is "not a mark of shame but an inevitability". The word "inevitability" suggests that these young people had little real choice.\n\nThe second paragraph uses short, blunt sentences to challenge a common belief: "We tell ourselves that prison is about justice. It is not." The phrase "We tell ourselves" implies self-deception. The writer then names the real causes, "geography and class and the catastrophic failure of every institution", and follows them with four short fragments, "Education. Social services. Mental health provision. Housing.", which read like a list of charges. The simile "like dominoes falling in slow motion" presents the failures as connected and unstoppable, and the bitter sentence "when the inevitable happened, we called it justice" returns to the idea of inevitability.\n\nThe final paragraph answers the objection that the writer is soft on crime: "I am not naive. Some people are dangerous and must be separated from society." This concession makes the argument more credible. The contrast "not dangerous - they are damaged" uses alliteration to make the distinction memorable. The writer then gives concrete details of prison life, "a concrete box for twenty-three hours a day" and release with "a bin bag of belongings", images that make the system seem dehumanising. The conclusion is a strong metaphor: "institutional cruelty dressed in the language of law". The word "dressed" suggests a disguise, so the reader is left feeling that the system's respectable language hides its cruelty.`,
            },
            markScheme: {
              'How it is marked (10 marks)': Q1_2_MARKING,
              'Points you might make': [
                `Personal authority and the central claim: "the people we lock up are overwhelmingly the people we have already failed".`,
                `Precise statistics written out in words, and the idea of "inevitability" in "the same handful of postcodes".`,
                `Short sentences challenge a belief ("It is not."); four fragments read like charges; the simile "like dominoes falling in slow motion".`,
                `The concession "I am not naive" and the alliterative contrast "not dangerous - they are damaged".`,
                `Concrete images ("a concrete box for twenty-three hours a day") and the closing metaphor "institutional cruelty dressed in the language of law".`,
              ],
            },
          },
          {
            id: 'wjec-c2-12-q3',
            questionNumber: 3,
            label: '1.3',
            questionText: `Read Source B, the 19th-century text, and answer the questions below.\n\n(${WJEC_C2_12_B_GLOSSARY_FOR_QUESTIONS})\n\n(a) According to Fry, who usually provided clothing for the women prisoners? [1]\n(b) What did Fry and those working with her have to send up for the woman who had just come in? [1]\n(c) How did that woman leave the prison when she was discharged? [1]`,
            marks: 3,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: `Source B:\n${WJEC_C2_12_SOURCE_B}`,
            extractSource: WJEC_C2_12_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5': `(a) Fry and the people working with her, paying for it themselves.\n(b) Almost every piece of clothing, and clothes for her baby.\n(c) Comfortably clothed.`,
            },
            markScheme: {
              'How it is marked (3 marks)': SHORT_B_MARKING,
              Answers: [
                '(a) Fry and those working with her, from their own fund. The sheriffs did so only now and then, so "the sheriffs" alone earns no mark.',
                '(b) Almost every article of clothing, and clothes for her baby.',
                '(c) Comfortably clothed.',
              ],
            },
          },
          {
            id: 'wjec-c2-12-q4',
            questionNumber: 4,
            label: '1.4',
            questionText: `Read Source B again.\n\nA student said: ‘Fry's answers are powerful because she lets the facts speak for themselves.’\n\nHow far do you agree with this view?\n\nIn your answer, give your own view of how Fry presents the women prisoners and their needs across the whole text, and explain how her choices of words and details create that view. Support your answer with references to the text. [10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'evaluation',
            extract: `Source B:\n${WJEC_C2_12_SOURCE_B}`,
            extractSource: WJEC_C2_12_SOURCE_B_REF,
            modelAnswers: {
              'Grade 8-9': `I agree with this view. Fry's answers are short and restrained, and their power comes from the plain details she gives and from the suffering she chooses not to describe.\n\nThe form itself encourages plainness. The Committee asks direct questions, "Do you know whether there is any clothing allowed by the city?", and Fry answers directly: "Not any." Her first long answer is factual and careful. She explains that "there was no other resource but our own", and is scrupulously fair, mentioning that "the sheriffs used to clothe the prisoners occasionally" and that the late sheriffs sent "a present of a few things". By giving the authorities credit where it is due, she makes her criticism more believable.\n\nHer most powerful moment is a refusal to describe. Asked whether prisoners have suffered "materially for want of clothing", she replies: "I could describe such scenes as I should hardly think it delicate to mention." "Delicate" here means modest or proper: the women had so little clothing that decency forbids her to say more. This understatement leaves the Committee, and the reader, to imagine what she will not describe, which is more affecting than any description.\n\nWhen she does give an example, it is told in plain, short clauses. The woman was "on the point of lying-in", gave birth "not many hours after she came in", and "had hardly a covering; no stockings, and only a thin gown". The list of what is missing is simple and concrete, and the facts do speak for themselves.\n\nHer feelings show, but quietly. "Whilst we are there, we can never see a woman in that state without immediately applying to our fund" shows compassion turned into action rather than outrage. The story ends well: the woman "went out comfortably clothed", and Fry adds "there are many such instances", which turns one story into evidence of a pattern.\n\nHer final answer is the most striking. She remembers that "I was obliged to stand before one of the women to prevent her being seen". The picture of Fry using her own body to protect a prisoner's dignity is moving, and she tells it without comment.\n\nSo the statement is right. Fry hardly argues or complains; she reports, and the restraint of her answers makes the facts, and her own quiet actions, all the more powerful.`,
            },
            markScheme: {
              'How it is marked (10 marks)': Q1_4_MARKING,
              'Points you might make': [
                `Direct answers to direct questions ("Not any."), and fairness to the sheriffs, make her believable.`,
                `Understatement: "I could describe such scenes as I should hardly think it delicate to mention" leaves the worst unsaid.`,
                `Plain, concrete detail: "no stockings, and only a thin gown".`,
                `Quiet compassion turned into action: "immediately applying to our fund"; the woman "went out comfortably clothed"; "there are many such instances".`,
                `The final story, told without comment: "I was obliged to stand before one of the women to prevent her being seen".`,
                'A strong answer reaches a judgement on the statement and keeps to it through the whole passage.',
              ],
            },
          },
          {
            id: 'wjec-c2-12-q5',
            questionNumber: 5,
            label: '1.5',
            questionText: `Bring together details from both texts to explain briefly what each writer tells you about the people held in prison. Make clear which text each detail comes from. [4]`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'summary',
            extract: `Source A:\n${WJEC_C2_12_SOURCE_A}\n\nSource B:\n${WJEC_C2_12_SOURCE_B}`,
            extractSource: `Source A: ${WJEC_C2_12_SOURCE_A_REF} | Source B: ${WJEC_C2_12_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': `In Source A, most of the prisoners had been "excluded from school before the age of fourteen", more than half were "functionally illiterate", and nearly all came from a few poor areas; the writer says that most are "not dangerous - they are damaged". In Source B, the prisoners Fry describes are women in Newgate who often arrive with hardly any clothes, such as the woman "on the point of lying-in" who had "no stockings, and only a thin gown".`,
            },
            markScheme: {
              'How it is marked (4 marks)': Q1_5_MARKING,
              'Details you might bring together': [
                'Source A: most excluded from school young; more than half unable to read well; from a few poor postcodes; mostly damaged rather than dangerous.',
                'Source B: women prisoners in Newgate; many arrive almost without clothes; one about to give birth; given no clothing by the city.',
              ],
            },
          },
          {
            id: 'wjec-c2-12-q6',
            questionNumber: 6,
            label: '1.6',
            questionText: `Source A and Source B are both about the treatment of people in prison.\n\nCompare:\n• what the writers say about how prisoners are treated\n• how they get their ideas across.\n\nUse evidence from both texts, and make clear which text each point comes from. [10]`,
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'comparison',
            extract: `Source A:\n${WJEC_C2_12_SOURCE_A}\n\nSource B:\n${WJEC_C2_12_SOURCE_B}`,
            extractSource: `Source A: ${WJEC_C2_12_SOURCE_A_REF} | Source B: ${WJEC_C2_12_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 8-9': `Both writers expose the neglect of people in prison, and both write from first-hand experience of working with them, but the writer of Source A attacks the whole prison system, while Fry, in Source B, answers a committee's questions about one particular need: clothing.\n\nWhat they say about the prisoners' treatment overlaps. In Source A, prisoners are locked in "a concrete box for twenty-three hours a day" and released with little more than "a bin bag of belongings". In Source B, the city allows the women of Newgate no regular clothing ("there is none of any kind"), and one woman arrives with "hardly a covering". In both texts the authorities provide almost nothing; in Source B the gap is filled by Fry and her companions, "immediately applying to our fund".\n\nTheir explanations differ. The writer of Source A sees prison as the last of many failures: those locked up are "the people we have already failed", let down by "Education. Social services. Mental health provision. Housing." The argument is about society and justice. Fry offers no theory; she states that the city provides no clothing and describes the results. Where Source A calls the system "institutional cruelty", Fry takes care to give credit to "the sheriffs", who "used to clothe the prisoners occasionally".\n\nTheir methods and tones are very different. The writer of Source A uses statistics ("over eighty per cent"), short, emphatic sentences ("It is not."), a simile ("like dominoes falling in slow motion") and a final metaphor, "institutional cruelty dressed in the language of law". The tone is angry and campaigning. Fry's answers are restrained and factual, shaped by the questions she is asked. She uses understatement ("I could describe such scenes as I should hardly think it delicate to mention") and a few plain details, and she tells two short stories, one ending with a woman who "went out comfortably clothed". The quietness of her account moves the reader in a different way.\n\nSo both writers want readers to see prisoners as human beings in need. Source A demands that society rethink prison altogether; Fry shows, through calm evidence and practical kindness, what small acts of care can change.`,
            },
            markScheme: {
              'How it is marked (10 marks)': Q1_6_MARKING,
              'Points you might make': [
                `Both show prisoners given almost nothing by the authorities: release with "a bin bag of belongings" (Source A); no regular clothing from the city, so that Fry and her fund fill the gap (Source B).`,
                'Explanations: prison as the last of many failures (Source A); no theory, only the facts about clothing (Source B).',
                `Source A condemns "institutional cruelty"; Source B is fair to the sheriffs.`,
                'Methods: statistics, blunt sentences, simile and metaphor (Source A); restrained answers, understatement and two short stories (Source B).',
                'Tone and purpose: angry, demanding change (Source A); quiet, showing what care can do (Source B).',
              ],
            },
          },
        ],
      },
      {
        id: 'wjec-c2-12-writing',
        title: 'Section B: Writing',
        description: SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-12-q7',
            questionNumber: 1,
            label: '2.1',
            questionText: `Your school is holding a debate on the motion: "Community service is a better punishment than prison for people who commit non-violent crimes."\n\nWrite a speech for the debate, arguing for or against the motion. [20]`,
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Good afternoon, everyone.\n\nWhat is punishment for? I believe it has three purposes: to make the offender pay for what they have done, to protect the public, and to stop the offender doing it again. Today I want to show you that, for people who commit non-violent crimes, community service does all three better than prison. I am speaking for the motion.\n\nFirst, making amends. When someone is sent to prison for shoplifting or vandalism, the people they have harmed gain nothing. When the same person spends two hundred hours cleaning graffiti, repairing a park or working in a charity shop, the community they damaged is paid back directly. That is justice you can see.\n\nSecond, protecting the public. My opponents will say that prison keeps offenders off the streets. For a few months, perhaps. But prison is often described as a school for crime. A young person jailed for a first offence may share a cell with someone far more dangerous, and leave with new contacts and fewer chances of an honest job. Community service keeps them in the real world, among ordinary people, where they can keep working, studying and caring for their families.\n\nThird, stopping reoffending. Imagine you are nineteen and have made a stupid mistake. If you go to prison, you may lose your job, your home and your place at college. When you come out, a criminal record follows you everywhere. If you do community service instead, you keep your life together while you make up for what you did. Which person do you think is more likely to stay out of trouble?\n\nThere is also the question of cost. Prison places are expensive, and that money could pay for teachers, nurses or youth workers instead. Community service costs a fraction of the amount and produces something useful.\n\nLet me be clear. I am not saying that prison is never right. People who are violent or dangerous must be kept away from others. But for the many people who commit less serious crimes, a punishment that repairs harm and offers a way back is wiser, cheaper and fairer.\n\nPlease support the motion. Thank you.`,
            },
            markScheme: {
              'How it is marked (20 marks)': WRITING_MARKING,
              'What earns marks in this task': [
                'The features of a debate speech: a greeting, a clear statement for or against the motion, direct address and questions, and a strong closing appeal.',
                'A confident, reasoned tone that suits a school debate.',
                'A clear position, developed with reasons and examples, that answers the arguments of the other side.',
                'Accurate spelling, punctuation and grammar, with varied sentences and well-chosen words: 8 of the 20 marks are for this.',
              ],
            },
          },
          {
            id: 'wjec-c2-12-q8',
            questionNumber: 2,
            label: '2.2',
            questionText: `"Young people today are too quick to judge others and too slow to understand the circumstances that shape people's lives."\n\nWrite an article for a magazine for young people giving your views on this statement. [20]`,
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Before you judge: why we all need to slow down\n\nWe have all done it. A girl in your class turns up late for the third time this week, and you roll your eyes. Someone posts a clumsy comment online, and within minutes hundreds of strangers have decided exactly what sort of person they are. Judging others has never been faster or easier. But is it true that young people are especially guilty of it?\n\nIn one way, perhaps. We live much of our lives online, where everything moves quickly and nobody has time for the full story. A single photograph or a few words can be shared thousands of times, stripped of everything that might explain them. In that world it is tempting to decide first and ask questions later, if we ask them at all.\n\nBut I do not think that young people are worse than anyone else. Adults judge too, sometimes more harshly: think of how often teenagers are described as lazy or selfish by people who have never asked us what our lives are like. And in my experience, young people can be remarkably understanding when they have the full picture. When we found out that the girl who was always late was caring for her younger brothers every morning, the eye-rolling stopped at once.\n\nThat is the real lesson. Most of us are not cruel; we are simply missing information. The friend who seems moody may be coping with something at home. The boy who never brings the right kit may not be able to afford it. The person who said something foolish online may be fourteen and frightened. Circumstances shape people's choices far more than we realise.\n\nSo here is a suggestion. Next time you feel yourself reaching a verdict about someone, try asking one question first: what might I not know? It takes only a moment, and it can change everything. It might even make you the person someone turns to, rather than the person they avoid.\n\nUnderstanding takes longer than judging. But it is worth the wait.`,
            },
            markScheme: {
              'How it is marked (20 marks)': WRITING_MARKING,
              'What earns marks in this task': [
                'The features of a magazine article: a headline, an engaging opening, and paragraphs that build to a clear point.',
                'A tone that suits young readers: direct and thoughtful, without preaching.',
                'A clear view on the statement, developed with examples and reasons, perhaps agreeing in part.',
                'Accurate spelling, punctuation and grammar, with varied sentences and well-chosen words: 8 of the 20 marks are for this.',
              ],
            },
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
        description: SECTION_A_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-13-q1',
            questionNumber: 1,
            label: '1.1',
            questionText: `Read Source A, the 21st-century text, and answer the questions below.\n\n(a) According to the survey the writer mentions, what can the average British child not identify growing in a field? [1]\n(b) What do one in five children believe that fish fingers are made from? [1]\n(c) In which county was the village where the writer's grandmother lived? [1]`,
            marks: 3,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: `Source A:\n${WJEC_C2_13_SOURCE_A}\n\nSource B:\n${WJEC_C2_13_SOURCE_B}`,
            extractSource: `Source A: ${WJEC_C2_13_SOURCE_A_REF} | Source B: ${WJEC_C2_13_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': `(a) A leek.\n(b) Chicken.\n(c) Pembrokeshire.`,
            },
            markScheme: {
              'How it is marked (3 marks)': SHORT_A_MARKING,
              Answers: ['(a) A leek.', '(b) Chicken.', '(c) Pembrokeshire.'],
            },
          },
          {
            id: 'wjec-c2-13-q2',
            questionNumber: 2,
            label: '1.2',
            questionText: `Source A is an opinion article about food. The writer wants to persuade readers that we have lost our connection with the food we eat.\n\nHow does the writer try to do this?\n\nIn your answer, comment on:\n• what the writer says\n• the writer's choice of language and tone\n• how the article is structured, and any other methods the writer uses.\n\n[10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${WJEC_C2_13_SOURCE_A}`,
            extractSource: WJEC_C2_13_SOURCE_A_REF,
            modelAnswers: {
              'Grade 8-9': `The writer opens with a sweeping claim that grabs attention: "We have, in the space of two generations, accomplished something remarkable and terrible". Pairing "remarkable" with "terrible" suggests an achievement that should not be celebrated, and the verb "severed" makes the loss sound violent, as if a living connection had been cut. The inclusive "We" makes the reader share the responsibility from the start.\n\nThe writer then supports the claim with findings from a survey: children who "cannot identify a leek growing in a field", "One in five" who think fish fingers are made from chicken, and "A quarter" who think that cheese comes from plants. These examples are slightly comic, which makes them memorable, but the writer at once refuses to treat them as funny: "These are not charming examples of juvenile ignorance. They are symptoms of a profound and dangerous disconnection." The medical word "symptoms" presents the ignorance as the sign of a deeper illness.\n\nThe second paragraph changes tone completely, moving to a warm personal memory. The writer's grandmother "could name every farmer within five miles of her village in Pembrokeshire", and the specific details, "the Morgans' cows" and "Mrs Davies's hens", create a picture of a close community in which food had names and faces. The repeated "She knew" stresses her knowledge, and "everyone tightened their belts" shows a hardship that was shared. The short sentences "Food was not an abstraction. It was labour, weather, soil, and season." sum up the contrast with today, tying food to work and to the natural year, and the paragraph closes with "It had a story, and everyone knew the story", which makes food part of a shared culture.\n\nThe final paragraph returns to the present with "Today", and its description is cold and impersonal: food is "a product that appears, wrapped in plastic, on a supermarket shelf". Three parallel phrases, "Its origins are invisible, its production methods unknowable, its true cost concealed", build a sense of everything that is hidden from us, and the writer names the hidden costs: "the exploitation of the workers" and "the degradation of the land". The triple "without knowledge, without gratitude, and - increasingly - without pleasure" uses repetition to stress what has been lost, and the word set apart in the middle, "increasingly", suggests that the loss is still growing. The writer concedes that industrialisation "has given us abundance, certainly", which seems fair, before the final "But" delivers the conclusion: it "has taken something in return: our understanding of what it means to be nourished". The word "nourished" means more than being fed, and leaves the reader thinking about what food should really mean.`,
            },
            markScheme: {
              'How it is marked (10 marks)': Q1_2_MARKING,
              'Points you might make': [
                `The sweeping opening ("something remarkable and terrible"), the violent verb "severed", and the inclusive "We".`,
                `Survey findings that are slightly comic, then the refusal to laugh: "They are symptoms of a profound and dangerous disconnection."`,
                `A warm memory of the grandmother, with named details ("the Morgans' cows") and the repeated "She knew".`,
                `"Food was not an abstraction." sums up the contrast; "It had a story, and everyone knew the story" ends the paragraph.`,
                `The cold present ("wrapped in plastic, on a supermarket shelf"), three parallel phrases, and the triple "without knowledge, without gratitude".`,
                `A concession ("has given us abundance, certainly") before the conclusion on "nourished".`,
              ],
            },
          },
          {
            id: 'wjec-c2-13-q3',
            questionNumber: 3,
            label: '1.3',
            questionText: `Read Source B, the 19th-century text, and answer the questions below.\n\n(${WJEC_C2_13_B_GLOSSARY_FOR_QUESTIONS})\n\n(a) What did Cobbett see great numbers of labourers doing as he came along the road? [1]\n(b) What does Cobbett say about the rent the labourers pay for their small pieces of land? [1]\n(c) According to Cobbett, when do the labourers work on their plots? Give one time. [1]`,
            marks: 3,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: `Source B:\n${WJEC_C2_13_SOURCE_B}`,
            extractSource: WJEC_C2_13_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5': `(a) Digging potatoes for their Sunday dinner.\n(b) It is high, and often enormous.\n(c) Early on Sunday mornings.`,
            },
            markScheme: {
              'How it is marked (3 marks)': SHORT_B_MARKING,
              Answers: [
                '(a) Any one of: digging potatoes for their Sunday dinner; carrying the potatoes home; going out to dig them.',
                '(b) It is always high and usually enormous (accept: as much as eight pounds an acre).',
                '(c) Either of: in their spare hours; early on Sunday mornings.',
              ],
            },
          },
          {
            id: 'wjec-c2-13-q4',
            questionNumber: 4,
            label: '1.4',
            questionText: `Read Source B again.\n\nA student said: ‘Cobbett's anger is more powerful than his evidence.’\n\nHow far do you agree with this view?\n\nIn your answer, give your own view of how Cobbett presents the labourers and their lives across the whole text, and explain how his choices of words and details create that view. Support your answer with references to the text. [10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'evaluation',
            extract: `Source B:\n${WJEC_C2_13_SOURCE_B}`,
            extractSource: WJEC_C2_13_SOURCE_B_REF,
            modelAnswers: {
              'Grade 8-9': `I partly agree. Cobbett's evidence is brief but precise, and it gives his anger a solid base; yet it is the anger, with its exclamations, sarcasm and shocking comparisons, that makes the passage memorable.\n\nHe begins as an eyewitness. "As I came on the road", he saw "great numbers of labourers either digging potatoes for their Sunday's dinner, or coming home with them, or going out to dig them". The three-part structure creates a picture of a whole countryside at work for its food. He then explains the system plainly: landowners "let small pieces of land to the labourers", who pay "in all cases a high rent, and in most cases an enormous one". The rise from "high" to "enormous" already shows his feeling.\n\nThe evidence is strongest in his calculation: the rent is "a shilling a rod, which is, mind, 160s. or 8l. an acre!" The aside "mind" speaks directly to the reader, and the exclamation mark shows that even his arithmetic is angry. He also notes the labourers' determination: they work "at their spare hours; and on Sunday mornings early", which makes their need plain.\n\nFrom this point, anger takes over. The outburst "But, good God! what a life to live! What a life to see people live" uses exclamation and repetition to express outrage, and he turns it on the reader's patriotism: it is "base vanity" to boast of England while such poverty exists, and he puts the words constitution and liberties in quotation marks to show how empty they are for the poor. His comparison with Spain is deliberately provocative: its working people "live like gentlemen, compared with our miserable creatures", and he declares that he would choose "the Inquisition and well-healed cheeks and ribs" rather than liberty with "skin and bone".\n\nThe ending combines anger with argument. Men "compelled to starve quietly", with "old wheat ricks, and fat cattle under their eye", are surrounded by food they cannot have, and Cobbett concludes that their only "liberty" is to choose "between death by starvation (quick or slow) and death by the halter!" This bitter choice between two deaths is the climax of the passage.\n\nSo I agree that the anger is what readers remember. But it is powerful because the evidence comes first: Cobbett has shown us the labourers and the rents before he asks us to share his outrage.`,
            },
            markScheme: {
              'How it is marked (10 marks)': Q1_4_MARKING,
              'Points you might make': [
                `Eyewitness evidence first: labourers "either digging potatoes for their Sunday's dinner, or coming home with them, or going out to dig them".`,
                `Precise figures, angrily delivered: "a shilling a rod, which is, mind, 160s. or 8l. an acre!"`,
                `Outrage: "But, good God! what a life to live!", and sarcasm about the nation's boasted liberties.`,
                `The provocative comparison with Spain ("live like gentlemen, compared with our miserable creatures") and the Inquisition.`,
                `The climax: a "liberty" to choose "between death by starvation (quick or slow) and death by the halter!"`,
                'A strong answer reaches a judgement on the statement and keeps to it through the whole passage.',
              ],
            },
          },
          {
            id: 'wjec-c2-13-q5',
            questionNumber: 5,
            label: '1.5',
            questionText: `Bring together details from both texts to explain briefly what each writer tells you about how people get their food. Make clear which text each detail comes from. [4]`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'summary',
            extract: `Source A:\n${WJEC_C2_13_SOURCE_A}\n\nSource B:\n${WJEC_C2_13_SOURCE_B}`,
            extractSource: `Source A: ${WJEC_C2_13_SOURCE_A_REF} | Source B: ${WJEC_C2_13_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': `In Source A, most food now "appears, wrapped in plastic, on a supermarket shelf", and many children do not know where it comes from, whereas the writer's grandmother knew that milk came from "the Morgans' cows". In Source B, the labourers rent small plots of land at a high price and grow potatoes for their "Sunday's dinner", working on them "at their spare hours", while they go hungry within sight of "old wheat ricks, and fat cattle".`,
            },
            markScheme: {
              'How it is marked (4 marks)': Q1_5_MARKING,
              'Details you might bring together': [
                "Source A: food bought from supermarkets, wrapped in plastic, its origins hidden; children unsure where it comes from; in the grandmother's day, food from known local farms.",
                'Source B: labourers rent small plots at high rents and dig their own potatoes in spare hours and early on Sundays; they starve near stacks of wheat and fat cattle.',
              ],
            },
          },
          {
            id: 'wjec-c2-13-q6',
            questionNumber: 6,
            label: '1.6',
            questionText: `Source A and Source B are both about food and the people who grow or eat it.\n\nCompare:\n• what the writers say about food and the system that provides it\n• how they get their ideas across.\n\nUse evidence from both texts, and make clear which text each point comes from. [10]`,
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'comparison',
            extract: `Source A:\n${WJEC_C2_13_SOURCE_A}\n\nSource B:\n${WJEC_C2_13_SOURCE_B}`,
            extractSource: `Source A: ${WJEC_C2_13_SOURCE_A_REF} | Source B: ${WJEC_C2_13_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 8-9': `Both writers criticise the food system of their time and argue that it hides or causes suffering, but the writer of Source A is concerned with a loss of knowledge and meaning, while Cobbett, in Source B, is enraged by real hunger among the people who grow the food.\n\nWhat they say about the system differs in focus. The writer of Source A argues that people today are cut off from where food comes from: it is "a product that appears, wrapped in plastic, on a supermarket shelf", with "its true cost concealed". The harm is to understanding, "our understanding of what it means to be nourished", though the writer also mentions "the exploitation of the workers who grew it". Cobbett describes a system that leaves labourers hungry in the middle of plenty. They must rent plots at "an enormous" price to grow potatoes, and starve "with old wheat ricks, and fat cattle under their eye". For him, the injustice is not ignorance but starvation.\n\nBoth writers look elsewhere for a comparison. Source A contrasts today with the writer's grandmother, who knew "the Morgans' cows" and "Mrs Davies's hens", in a community where "everyone tightened their belts" together. Cobbett compares England unfavourably with Spain, whose working people "live like gentlemen, compared with our miserable creatures".\n\nTheir methods are very different. Source A uses survey findings ("One in five", "A quarter"), a warm personal memory, and carefully balanced sentences such as "Its origins are invisible, its production methods unknowable, its true cost concealed". The tone is regretful and reflective, and the writer concedes that industrialisation "has given us abundance, certainly". Cobbett writes as an angry eyewitness on the road. He gives precise figures ("a shilling a rod"), but his style is explosive, full of exclamations ("But, good God! what a life to live!") and sarcasm about "liberty". His tone is furious, and he ends with a stark choice between two deaths: "death by starvation (quick or slow) and death by the halter!"\n\nSo both writers want readers to see the cost hidden behind the food they eat. The modern writer asks us to value food more; Cobbett demands justice for those who starve while they produce it.`,
            },
            markScheme: {
              'How it is marked (10 marks)': Q1_6_MARKING,
              'Points you might make': [
                'The harm: lost knowledge and meaning (Source A); hunger among those who grow the food (Source B).',
                `Comparisons: with the grandmother's community (Source A); with Spain's working people (Source B).`,
                'Methods: survey findings, memory and balanced sentences (Source A); eyewitness detail, precise rents, exclamations and sarcasm (Source B).',
                `Tone: regretful, with a concession (Source A); furious, ending on two deaths (Source B).`,
                'Purpose: to make readers value food (Source A); to demand justice for the starving (Source B).',
              ],
            },
          },
        ],
      },
      {
        id: 'wjec-c2-13-writing',
        title: 'Section B: Writing',
        description: SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-13-q7',
            questionNumber: 1,
            label: '2.1',
            questionText: `Your school canteen is considering changing its menu to serve only locally sourced, seasonal food.\n\nWrite a report for the school governors giving your views on this proposal. [20]`,
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Report to the Governors: serving local, seasonal food in the school canteen\n\nIntroduction\nThe governors have asked for students' views on a proposal to serve only locally sourced, seasonal food in the canteen. This report considers the benefits and the difficulties, and makes a recommendation. It draws on a survey of sixty students and a conversation with the catering manager.\n\nBenefits\nThe strongest argument for the proposal is quality. Food that has travelled a short distance is usually fresher, and seasonal vegetables are at their best when they are eaten in the months they grow. Several students said that they would be more likely to choose vegetables if they tasted better.\n\nThe proposal would also support the local economy. Buying from nearby farms, dairies and bakeries keeps money in our area and helps small businesses. Some suppliers might even visit the school, which would help students understand where their food comes from.\n\nThere are environmental benefits too. Food that is transported over shorter distances is likely to need less fuel, and seasonal produce does not need to be grown in heated greenhouses or flown in from abroad.\n\nDifficulties\nHowever, the proposal has drawbacks. The catering manager warned that local produce can cost more, and that a limited budget may mean smaller portions or higher prices. This would be unfair to students on tight budgets. A strictly seasonal menu could also become repetitive in winter, when fewer fresh vegetables are available, and some popular foods, such as bananas and rice, cannot be grown locally at all.\n\nRecommendation\nI recommend that the governors adopt the proposal in part rather than in full. The canteen could aim to buy most of its bread, milk, meat and vegetables from local suppliers, and plan a menu that changes with the seasons, while still offering a few popular items from further afield. A trial of one term, followed by a second survey, would show whether students support the changes and whether the costs can be met.\n\nConclusion\nLocal, seasonal food offers real benefits for our health, our community and the environment. A careful, gradual approach would allow the school to enjoy those benefits without making lunches more expensive or less popular.`,
            },
            markScheme: {
              'How it is marked (20 marks)': WRITING_MARKING,
              'What earns marks in this task': [
                'The features of a report: a title, an introduction that states its purpose, clear headings, and a recommendation.',
                'A formal, balanced tone suited to school governors.',
                'Benefits and difficulties both developed with reasons, leading to a practical recommendation.',
                'Accurate spelling, punctuation and grammar, with varied sentences and well-chosen words: 8 of the 20 marks are for this.',
              ],
            },
          },
          {
            id: 'wjec-c2-13-q8',
            questionNumber: 2,
            label: '2.2',
            questionText: `"We have become a nation that knows the price of everything we eat but the value of nothing."\n\nWrite an article for a magazine giving your views on this statement. [20]`,
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `The real cost of a cheap dinner\n\nWalk into any supermarket and you will be surrounded by numbers. Three for two. Half price. Was four pounds, now two. We have become experts at finding a bargain, and in difficult times that is no bad thing. But somewhere among all those yellow labels, I think we have lost sight of something important. We know what our food costs. We have forgotten what it is worth.\n\nThink about what goes into a single loaf of bread. Someone ploughed the field and sowed the seed. The wheat survived months of weather before it was harvested, milled and baked. Yet that loaf may cost less than a bottle of water, and if it goes stale, many of us throw it away without a second thought. A huge amount of good food is thrown away every year. That is what happens when food is valued only by its price: when it is cheap, it seems disposable.\n\nThe value of food is not only what it took to make. It is also what it does for us. Food brings families together around a table, marks celebrations and comforts us when we are sad. Every culture has its special dishes, recipes passed down through generations. Yet many of us now eat in a hurry, in front of a screen, barely noticing what is on the plate.\n\nIt would be unfair to blame people for looking at prices. Many families have very little money, and for them a cheap meal is a necessity, not a choice. The answer is not to make good food a luxury for the few. It is to change how we think about food, whatever we can afford.\n\nThat can start with small steps. We can plan meals so that less is wasted, and use leftovers instead of binning them. We can learn to cook a few simple dishes from fresh ingredients. We can sit down to eat together, even once a week. And we can teach children where food comes from, so that a carrot is something that grew in the earth, not just something that appears in a bag.\n\nPrice matters. But value is what makes a meal more than fuel. It is time we remembered the difference.`,
            },
            markScheme: {
              'How it is marked (20 marks)': WRITING_MARKING,
              'What earns marks in this task': [
                'The features of a magazine article: a headline, an engaging opening, and paragraphs that develop an argument to a clear ending.',
                "A lively, thoughtful tone that suits a magazine's readers.",
                'A clear view on the statement, developed with examples and reasons, fair to those for whom price must come first.',
                'Accurate spelling, punctuation and grammar, with varied sentences and well-chosen words: 8 of the 20 marks are for this.',
              ],
            },
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
        description: SECTION_A_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-14-q1',
            questionNumber: 1,
            label: '1.1',
            questionText: `Read Source A, the 21st-century text, and answer the questions below.\n\n(a) How old is the writer's daughter? [1]\n(b) Until what age was she a voracious reader? [1]\n(c) By her own admission, how long does she spend on her phone each day? [1]`,
            marks: 3,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: `Source A:\n${WJEC_C2_14_SOURCE_A}\n\nSource B:\n${WJEC_C2_14_SOURCE_B}`,
            extractSource: `Source A: ${WJEC_C2_14_SOURCE_A_REF} | Source B: ${WJEC_C2_14_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': `(a) Fourteen.\n(b) Twelve.\n(c) Between four and six hours.`,
            },
            markScheme: {
              'How it is marked (3 marks)': SHORT_A_MARKING,
              Answers: ['(a) Fourteen.', '(b) Twelve.', '(c) Between four and six hours.'],
            },
          },
          {
            id: 'wjec-c2-14-q2',
            questionNumber: 2,
            label: '1.2',
            questionText: `Source A is an opinion article about young people and smartphones. The writer wants to persuade readers that smartphones and social media are harming young people.\n\nHow does the writer try to do this?\n\nIn your answer, comment on:\n• what the writer says\n• the writer's choice of language and tone\n• how the article is structured, and any other methods the writer uses.\n\n[10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${WJEC_C2_14_SOURCE_A}`,
            extractSource: WJEC_C2_14_SOURCE_A_REF,
            modelAnswers: {
              'Grade 8-9': `The writer begins with a personal and specific example, which makes the issue immediate: "My daughter is fourteen years old and she has not read a book for pleasure in over a year." The writer then rules out the obvious explanation, explaining that she was once "a voracious reader who tore through entire series in a weekend". The energetic verb "tore through" contrasts sharply with the present, in which she spends "between four and six hours a day on her phone", and "by her own reluctant admission" shows that the daughter herself recognises the problem.\n\nThe list of apps, "She scrolls through TikTok, watches YouTube Shorts, exchanges messages on WhatsApp, curates her Instagram feed", uses a series of verbs to show how many ways her attention is taken, and the familiar names make the scene recognisable to readers. The most powerful moment in the first paragraph is the daughter's own verdict: the apps "make her feel worse", which she reports "with alarming self-awareness". The final clause, "because she cannot stop", suggests addiction rather than enjoyment.\n\nThe second paragraph widens the issue from one family to a whole generation through the metaphor of an experiment: "We are conducting an experiment on an entire generation, and we have no idea what the results will be." This makes society seem reckless, as though children were being tested without anyone's consent. The writer supports the claim with evidence of different kinds: the striking comparison that the average teenager "spends more time looking at a screen than they spend sleeping", and attention spans "measured by cognitive psychologists", which gives the claim scientific weight, although no study is named. The writer then anticipates the technology companies' defence, "Correlation is not causation", and undermines it with a comparison: they offer it "with the same practised innocence that tobacco executives once deployed". Linking phone companies with tobacco companies suggests that they, too, sell something harmful and know it.\n\nThe final paragraph is built on repetition: "I do not blame my daughter. I blame the engineers ... I blame the algorithms ... And I blame myself". The repeated opening builds momentum, moving the blame from the child to the designers and then, surprisingly, to the writer, which makes the argument seem honest. Words such as "addictive", "relentless" and "calibrated to exploit their insecurities" suggest deliberate manipulation. The last sentence includes "every parent like me", who "handed a child a device we did not understand and called it progress", and ends on the ironic word "progress", suggesting that what was welcomed as an advance has done harm.`,
            },
            markScheme: {
              'How it is marked (10 marks)': Q1_2_MARKING,
              'Points you might make': [
                `A personal opening ("My daughter is fourteen years old"), and the contrast between "tore through entire series" and "between four and six hours a day on her phone".`,
                `The list of apps and verbs; the daughter's own verdict that they "make her feel worse"; "because she cannot stop" suggests addiction.`,
                `The metaphor of "an experiment on an entire generation" and evidence of different kinds.`,
                `The comparison with "tobacco executives" undermines the companies' defence.`,
                `The repeated "I blame" moves the blame to the designers and to the writer; the ironic final word "progress".`,
              ],
            },
          },
          {
            id: 'wjec-c2-14-q3',
            questionNumber: 3,
            label: '1.3',
            questionText: `Read Source B, the 19th-century text, and answer the questions below.\n\n(${WJEC_C2_14_B_GLOSSARY_FOR_QUESTIONS})\n\n(a) Does Knight think that people should lose hope in cheap popular literature? Give the two words with which he answers his own question. [1]\n(b) According to Knight, what has replaced the halfpenny ballad of Seven Dials? [1]\n(c) What does the guide at the General Post Office say about the letter-sorters' work? [1]`,
            marks: 3,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: `Source B:\n${WJEC_C2_14_SOURCE_B}`,
            extractSource: WJEC_C2_14_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5': `(a) No: "Decidedly no."\n(b) The decent penny book of a hundred songs.\n(c) It takes less than half the time it used to, because everybody writes better.`,
            },
            markScheme: {
              'How it is marked (3 marks)': SHORT_B_MARKING,
              Answers: [
                `(a) "Decidedly no." (both words are needed for the mark).`,
                '(b) The penny book of a hundred songs.',
                '(c) It takes less than half the time it once did, because everybody writes better.',
              ],
            },
          },
          {
            id: 'wjec-c2-14-q4',
            questionNumber: 4,
            label: '1.4',
            questionText: `Read Source B again.\n\nA student said: ‘Knight is too optimistic about the popular press to be convincing.’\n\nHow far do you agree with this view?\n\nIn your answer, give your own view of how Knight presents cheap reading and the newspaper press across the whole text, and explain how his choices of words and details create that view. Support your answer with references to the text. [10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'evaluation',
            extract: `Source B:\n${WJEC_C2_14_SOURCE_B}`,
            extractSource: WJEC_C2_14_SOURCE_B_REF,
            modelAnswers: {
              'Grade 8-9': `I disagree. Knight is certainly optimistic, but he supports his hope with concrete evidence and admits the problems that remain, which makes his case more convincing than simple cheerfulness would be.\n\nHe begins by asking the question his doubting readers might ask: "Do such considerations as these make us hopeless of the steady progress of a sound as well as cheap popular literature?" His answer is short and emphatic, "Decidedly no.", followed by a confident general claim: "There is improvement all around us." On its own, this might seem too optimistic.\n\nHowever, he immediately offers evidence. The "halfpenny ballad of Seven Dials" is dying out, and he advises collectors to "look sharply about them" before it disappears. In its place has come "the decent penny book of a hundred songs". The adjective "decent" suggests respectability, and the comparison shows a clear improvement in what poor readers buy. He even imagines that the poets "Scott, and Moore, and Campbell will not quarrel with this new popularity", a light, humorous touch that presents the change as one the great writers would approve.\n\nCrucially, Knight does not pretend that everything has improved. He admits that coarse "flash" songs still exist, though "they are not for the penny buyers", and notes that "Thackeray has described the dens in which these abominations are current". By naming a famous writer as a witness to the worst material, he shows that he is not hiding it.\n\nHis strongest evidence comes from the General Post Office. He invites the reader to visit it, using commands, "Visit", "Look with awe", "Think silently", which make the reader a witness. The image of "the tons of newspapers that are crowding in to be distributed through the habitable globe" conveys the enormous scale of the press, and the phrase "how potent a power is this for good or for evil" shows that he recognises its dangers as well as its benefits. The guide's words, "this work occupies not half the time it formerly did, for everybody writes better", give practical proof that education is spreading.\n\nHis conclusion, that "General education furnishes the solution" to the puzzle of where the improvement came from, is a reasoned explanation rather than wishful thinking. So Knight is optimistic, but he is convincing, because his optimism rests on evidence and on honesty about the problems that remain.`,
            },
            markScheme: {
              'How it is marked (10 marks)': Q1_4_MARKING,
              'Points you might make': [
                `The emphatic answer "Decidedly no." and the claim "There is improvement all around us" seem very optimistic on their own.`,
                `Evidence follows: the dying "halfpenny ballad of Seven Dials" replaced by "the decent penny book of a hundred songs".`,
                `He admits the problems: "flash" songs exist, and "Thackeray has described the dens in which these abominations are current".`,
                `The Post Office: commands ("Visit", "Look with awe"), "the tons of newspapers", and the balanced "for good or for evil".`,
                `A reasoned conclusion: "General education furnishes the solution".`,
                'A strong answer reaches a judgement on the statement and keeps to it through the whole passage.',
              ],
            },
          },
          {
            id: 'wjec-c2-14-q5',
            questionNumber: 5,
            label: '1.5',
            questionText: `Bring together details from both texts to explain briefly what each writer tells you about what people read or watch. Make clear which text each detail comes from. [4]`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'summary',
            extract: `Source A:\n${WJEC_C2_14_SOURCE_A}\n\nSource B:\n${WJEC_C2_14_SOURCE_B}`,
            extractSource: `Source A: ${WJEC_C2_14_SOURCE_A_REF} | Source B: ${WJEC_C2_14_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': `In Source A, the writer's daughter has stopped reading books for pleasure and spends "between four and six hours a day on her phone", using TikTok, YouTube Shorts, WhatsApp and Instagram. In Source B, Knight says that poorer readers are giving up the old "halfpenny ballad" for "the decent penny book of a hundred songs", and that "tons" of newspapers are now sent all over the world.`,
            },
            markScheme: {
              'How it is marked (4 marks)': Q1_5_MARKING,
              'Details you might bring together': [
                'Source A: a teenager who no longer reads books but spends hours on apps; teenagers who spend more time on screens than asleep.',
                'Source B: cheap ballads dying out; penny song books in their place; coarse songs still sold, but not to penny buyers; huge numbers of newspapers sent across the world.',
              ],
            },
          },
          {
            id: 'wjec-c2-14-q6',
            questionNumber: 6,
            label: '1.6',
            questionText: `Source A and Source B are both about new forms of media and their effect on people.\n\nCompare:\n• what the writers say about these media and their effects\n• how they get their ideas across.\n\nUse evidence from both texts, and make clear which text each point comes from. [10]`,
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'comparison',
            extract: `Source A:\n${WJEC_C2_14_SOURCE_A}\n\nSource B:\n${WJEC_C2_14_SOURCE_B}`,
            extractSource: `Source A: ${WJEC_C2_14_SOURCE_A_REF} | Source B: ${WJEC_C2_14_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 8-9': `The two writers reach opposite conclusions about the media of their time. The writer of Source A believes that smartphones and social media are harming young people, while Knight, in Source B, believes that cheap printing and the newspaper press are making ordinary people better informed and better educated.\n\nWhat they say about the effects of media differs sharply. In Source A, a girl who was "a voracious reader" has not read a book for pleasure "in over a year", and her apps "make her feel worse". The writer extends this to a generation whose attention spans "have shortened measurably". In Source B, the effect is improvement: cheap song books have replaced the old ballads, "Unquestionably the people have changed", and even handwriting is better, because "everybody writes better". Where Source A sees decline, Knight sees progress.\n\nBoth, however, recognise that media are powerful. Knight speaks of "how potent a power is this for good or for evil", and the writer of Source A describes platforms "designed ... to be addictive" and algorithms "calibrated to exploit their insecurities". The difference lies in who controls that power. Knight credits "General education", so readers improve themselves; Source A blames "the engineers in Silicon Valley", so users are manipulated by others.\n\nTheir methods reflect this. Source A begins with a personal, emotional example, the writer's own daughter, and uses a list of familiar apps, statistics and a comparison with "tobacco executives", ending with repeated blame: "I blame the engineers ... I blame the algorithms ... And I blame myself". The tone is anxious and accusing. Knight writes with calm confidence. He asks a question and answers it ("Decidedly no."), gives examples from the street and the Post Office, and uses commands, "Visit", "Look with awe", "Think silently", to invite the reader to see the evidence. His tone is optimistic and slightly humorous, as when he imagines the "shades" of dead poets approving of the penny song book.\n\nSo both writers want readers to take the effects of media seriously, but Source A wants them to protect children from it, while Knight wants them to trust that education will make it a force for good.`,
            },
            markScheme: {
              'How it is marked (10 marks)': Q1_6_MARKING,
              'Points you might make': [
                'Opposite verdicts: decline in reading and wellbeing (Source A); improvement in reading and writing (Source B).',
                `Both see media as powerful: "for good or for evil" (Source B); "calibrated to exploit their insecurities" (Source A).`,
                'Control: education lets readers improve themselves (Source B); engineers and algorithms manipulate users (Source A).',
                'Methods: a personal example, statistics, a tobacco comparison and repeated blame (Source A); question and answer, examples and commands to the reader (Source B).',
                'Tone: anxious and accusing (Source A); calm, confident and lightly humorous (Source B).',
              ],
            },
          },
        ],
      },
      {
        id: 'wjec-c2-14-writing',
        title: 'Section B: Writing',
        description: SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-14-q7',
            questionNumber: 1,
            label: '2.1',
            questionText: `Your headteacher is considering banning mobile phones from your school entirely.\n\nWrite a letter to the headteacher giving your views on this proposal. [20]`,
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Dear Mr Roberts,\n\nI am writing as a member of the school council to give my views on the proposal to ban mobile phones from the school entirely. I have discussed it with many students in my year, and while I understand the reasons for it, I believe that a complete ban would cause as many problems as it solves.\n\nLet me begin by agreeing with you about the problems. Phones are a distraction in lessons, and even a phone buzzing in a bag can break a class's concentration. Some students film others without permission, and arguments that start online can spill into the corridors. These are real concerns, and doing nothing is not an option.\n\nHowever, a total ban would also have costs. Many students travel a long way to school by bus and train, and their parents rely on being able to contact them if a journey is delayed or plans change. Some students are young carers, who need to know that they can be reached if something happens at home. A ban that ignored these needs would cause real worry for families.\n\nThere are practical problems too. Enforcing a complete ban would take up a great deal of staff time, and it might simply teach students to hide their phones rather than to use them sensibly. Phones can also be useful in lessons, for example to photograph homework instructions or to use a revision app when the computer rooms are full.\n\nI would like to suggest a compromise. Phones could be switched off and kept in bags from the start of the first lesson until the end of the day, except when a teacher asks students to use them. Any phone seen or heard without permission could be handed to reception until home time. A clear, simple rule like this would deal with the distraction while allowing parents to stay in touch. The school could review it after one term to see whether it is working.\n\nThank you for considering students' views on this important decision. I would be glad to discuss these ideas further at the next school council meeting.\n\nYours sincerely,\n\nMegan Hughes`,
            },
            markScheme: {
              'How it is marked (20 marks)': WRITING_MARKING,
              'What earns marks in this task': [
                'The features of a formal letter: a greeting, an opening that states your purpose, clear paragraphs and a suitable sign-off.',
                "A polite, formal tone for a headteacher, which shows that you understand the school's concerns.",
                'A clear view, developed with reasons, and a practical suggestion or compromise.',
                'Accurate spelling, punctuation and grammar, with varied sentences and well-chosen words: 8 of the 20 marks are for this.',
              ],
            },
          },
          {
            id: 'wjec-c2-14-q8',
            questionNumber: 2,
            label: '2.2',
            questionText: `"Social media has done more harm than good to young people."\n\nWrite an article for a national newspaper giving your views on this statement. [20]`,
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Social media: not the villain, but not our friend either\n\nAdults love to blame social media for everything that is wrong with young people. If we are tired, it is our phones. If we are unhappy, it is our feeds. As a teenager who has grown up online, I want to offer a view from the inside. The truth is that social media has done real harm, but it has also done real good, and the difference lies in how it is designed and how it is used.\n\nLet us begin with the harm, because it is real. Many apps are built to keep us scrolling for as long as possible, and they are very good at it. Hours can vanish without our noticing. Seeing endless pictures of other people's perfect holidays and perfect faces can make anyone feel that their own life falls short. And unkindness spreads faster online, where people say things they would never say face to face.\n\nYet that is only half the story. For many young people, social media is a lifeline. A teenager who feels alone in a small town can find others who share their interests, their background or their worries. Young people use online platforms to raise money for charity, to campaign on issues they care about and to share their art, music and writing with the world. During times when we could not meet in person, social media kept friendships alive.\n\nSo has it done more harm than good? I think the honest answer is that it depends on two things. The first is the design of the platforms. Companies that profit from our attention have a responsibility to make their apps safer, and governments are right to hold them to it. The second is how we use them. Turning off notifications, following accounts that make us feel good, and putting the phone away at night can change the experience completely.\n\nSocial media is a tool, not a villain. Like any powerful tool, it needs rules, care and good sense. Instead of asking whether it is good or bad, we should be asking how to make it better, and young people deserve a say in the answer.`,
            },
            markScheme: {
              'How it is marked (20 marks)': WRITING_MARKING,
              'What earns marks in this task': [
                'The features of a newspaper article: a headline, an engaging opening, and paragraphs that develop an argument to a clear conclusion.',
                "A tone that suits adult newspaper readers: thoughtful and persuasive, with a young person's voice.",
                'A clear view on the statement, developed with reasons and examples, weighing harm against good.',
                'Accurate spelling, punctuation and grammar, with varied sentences and well-chosen words: 8 of the 20 marks are for this.',
              ],
            },
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
        description: SECTION_A_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-15-q1',
            questionNumber: 1,
            label: '1.1',
            questionText: `Read Source A, the 21st-century text, and answer the questions below.\n\n(a) How many public libraries did the writer's council announce it would close? [1]\n(b) Give one thing that the local museum holds. [1]\n(c) Where does the retired steelworker who paints watercolours live? [1]`,
            marks: 3,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: `Source A:\n${WJEC_C2_15_SOURCE_A}\n\nSource B:\n${WJEC_C2_15_SOURCE_B}`,
            extractSource: `Source A: ${WJEC_C2_15_SOURCE_A_REF} | Source B: ${WJEC_C2_15_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': `(a) Three.\n(b) Photographs.\n(c) Port Talbot.`,
            },
            markScheme: {
              'How it is marked (3 marks)': SHORT_A_MARKING,
              Answers: [
                '(a) Three.',
                '(b) Any one of: mining artefacts; photographs; oral histories.',
                '(c) Port Talbot.',
              ],
            },
          },
          {
            id: 'wjec-c2-15-q2',
            questionNumber: 2,
            label: '1.2',
            questionText: `Source A is an opinion article about the arts. The writer wants to persuade readers that the arts are essential, not a luxury.\n\nHow does the writer try to do this?\n\nIn your answer, comment on:\n• what the writer says\n• the writer's choice of language and tone\n• how the article is structured, and any other methods the writer uses.\n\n[10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${WJEC_C2_15_SOURCE_A}`,
            extractSource: WJEC_C2_15_SOURCE_A_REF,
            modelAnswers: {
              'Grade 8-9': `The writer opens with weary familiarity: "The argument is always the same." This suggests that the case for cutting the arts is a tired habit rather than a reasoned decision. A rapid series of examples follows, the closure of "three of its public libraries", "Two community theatres" and "The local museum", which makes the cuts seem widespread. The museum is described with care, as "a modest but irreplaceable collection of mining artefacts, photographs, and oral histories", and the word "irreplaceable" stresses that its loss would be permanent. The paragraph ends by stating the opposing view, "we cannot afford luxuries when essentials are under pressure", so that the writer can attack it.\n\nThe second paragraph turns with "But" and states the central claim directly: "the arts are not a luxury". Three examples of real people follow, each sentence ending with the same words: "art is not a luxury", "theatre is not a luxury", "a library is not a luxury". This repetition at the end of each sentence, epistrophe, builds a powerful rhythm, and the examples, a "retired steelworker in Port Talbot", "teenagers in Rhyl" and a "woman in Swansea", show the arts reaching people of different ages across Wales. The details are moving: the teenagers found "the first space where they were listened to", and the woman found a place where she "felt safe and warm and nobody asked her to buy anything". The repeated "and" in that phrase slows it down, lingering on what the library gives her. The paragraph ends with a short, emphatic metaphor: "It is a lifeline." The argument moves from luxury to survival.\n\nThe final paragraph widens the argument to the values of the whole country. The writer attacks "a ruthless and reductive calculus", using alliteration and the cold word "calculus" to suggest that people are reduced to numbers. Two short conditional sentences, "If it generates revenue, it matters. If it doesn't, it can be cut.", imitate that logic in a simple, almost childish form, which exposes how crude it is. The writer then follows the logic to its absurd end: "birdsong doesn't matter. Friendship doesn't matter. The view from a mountain doesn't matter." These are things every reader knows to be valuable, so the logic collapses. The long final sentence builds to a criticism of a system that preserves only "the things that can be sold", and ends with the ironic observation that "we wonder why so many people feel that their lives lack meaning". The inclusive "we" makes the reader share the responsibility, and the word "meaning" leaves the reader with the article's deepest point: the arts are part of what makes life worth living.`,
            },
            markScheme: {
              'How it is marked (10 marks)': Q1_2_MARKING,
              'Points you might make': [
                `The weary opening ("The argument is always the same.") and a rapid series of closures; "irreplaceable" stresses permanent loss.`,
                `The turn on "But" to the central claim, "the arts are not a luxury".`,
                `Three portraits, each sentence ending "is not a luxury" (epistrophe), with moving details such as "the first space where they were listened to".`,
                `The metaphor "It is a lifeline." moves the argument from luxury to survival.`,
                `"a ruthless and reductive calculus" and the mock-simple conditionals expose a crude logic; "birdsong doesn't matter" takes it to absurdity.`,
                `The ironic ending on "meaning" and the inclusive "we".`,
              ],
            },
          },
          {
            id: 'wjec-c2-15-q3',
            questionNumber: 3,
            label: '1.3',
            questionText: `Read Source B, the 19th-century text, and answer the questions below.\n\n(${WJEC_C2_15_B_GLOSSARY_FOR_QUESTIONS})\n\n(a) According to Morris, who designed and decorated the old houses and churches? Give one example he names. [1]\n(b) Did the workmen hate their work, according to Morris? [1]\n(c) According to Morris, what was always born of the work of the hammer and the chisel? [1]`,
            marks: 3,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: `Source B:\n${WJEC_C2_15_SOURCE_B}`,
            extractSource: WJEC_C2_15_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5': `(a) The village carpenter.\n(b) No: Morris says it is impossible that they hated it.\n(c) Some beauty and invention, and so some human happiness.`,
            },
            markScheme: {
              'How it is marked (3 marks)': SHORT_B_MARKING,
              Answers: [
                '(a) Any one of: the monk; the village carpenter; the smith; the mason (accept: ordinary working men, not great architects).',
                '(b) No: he says it is impossible that they loathed it, because such work could not be done without pleasure.',
                '(c) Some beauty and invention (accept: some human happiness).',
              ],
            },
          },
          {
            id: 'wjec-c2-15-q4',
            questionNumber: 4,
            label: '1.4',
            questionText: `Read Source B again.\n\nA student said: ‘Morris is more interested in praising the past than in proving his argument.’\n\nHow far do you agree with this view?\n\nIn your answer, give your own view of how Morris presents the craftsmen of the past across the whole text, and explain how his choices of words and details create that view. Support your answer with references to the text. [10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'evaluation',
            extract: `Source B:\n${WJEC_C2_15_SOURCE_B}`,
            extractSource: WJEC_C2_15_SOURCE_B_REF,
            modelAnswers: {
              'Grade 8-9': `I partly agree. Morris's passage is a celebration of the craftsmen of the past, and his loving descriptions do more to persuade than his proofs. But he does make an argument, and he uses evidence and reasoning to support it.\n\nHe begins by defining his subject: the "architectural treasures" of the past are "the houses that everyday people lived in, the unregarded churches in which they worshipped". The word "unregarded" suggests that these buildings are overlooked, which prepares the reader for his claim that ordinary people made great art.\n\nHis argument is built on questions and answers. He asks "who was it that designed and ornamented them?", offers the expected answer as another question, "The great architect, carefully kept for the purpose, and guarded from the common troubles of common men?", and rejects it: "By no means." The real makers were "the monk, the ploughman's brother; oftenest his other brother, the village carpenter, smith, mason". This is a logical structure, but it is also a celebration, and by putting "a common fellow" in quotation marks he mocks the snobbery that would look down on such men. Their work, he says, is "the wonder and despair of many a hard-working 'cultivated' architect".\n\nHis evidence is personal: "I have seen, as we most of us have, work done by such men in some out-of-the-way hamlet". He praises it in a list of three, "so delicate, so careful, and so inventive", and then makes his strongest claim, that no one can produce such work "without pleasure being a third party to the brain that conceived and the hand that fashioned it". He presents this as certain ("I will assert, without fear of contradiction"), which is a confident assertion rather than a proof. The comparison of the village priest's seat with the thrones of kings, "The throne of the great Plantagenet, or the great Valois, was no more daintily carved", supports his point that ordinary people had art as fine as royalty's.\n\nThe final paragraph is the most clearly a celebration. He admits that the histories "read almost as if" every day were one "of slaughter and tumult", but insists that "every day the hammer chinked on the anvil, and the chisel played about the oak beam". The sounds and the playful verb "played" make work seem joyful, and the paragraph ends on "some human happiness", the idea he most wants the reader to accept.\n\nSo the statement is partly true. Morris's argument rests more on affection and assertion than on hard proof, but praise and argument are joined: the beauty he describes is itself his evidence that the work was done with pleasure.`,
            },
            markScheme: {
              'How it is marked (10 marks)': Q1_4_MARKING,
              'Points you might make': [
                `He defines his subject with care: "the unregarded churches in which they worshipped".`,
                `Questions and answers form an argument ("By no means."), while "a common fellow" in quotation marks mocks snobbery.`,
                `Personal evidence ("I have seen") and a confident claim presented as certain ("I will assert, without fear of contradiction").`,
                `The comparison with royal thrones supports the argument.`,
                `The final celebration: "every day the hammer chinked on the anvil", ending on "some human happiness".`,
                'A strong answer reaches a judgement on the statement and keeps to it through the whole passage.',
              ],
            },
          },
          {
            id: 'wjec-c2-15-q5',
            questionNumber: 5,
            label: '1.5',
            questionText: `Bring together details from both texts to explain briefly who takes part in the arts, according to each writer. Make clear which text each detail comes from. [4]`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'summary',
            extract: `Source A:\n${WJEC_C2_15_SOURCE_A}\n\nSource B:\n${WJEC_C2_15_SOURCE_B}`,
            extractSource: `Source A: ${WJEC_C2_15_SOURCE_A_REF} | Source B: ${WJEC_C2_15_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': `In Source A, the arts are enjoyed by ordinary people across Wales: a "retired steelworker in Port Talbot" who paints watercolours, "teenagers in Rhyl" at a drama workshop, and a "woman in Swansea" who uses the library. In Source B, Morris says that the old churches and houses were designed and decorated by working men, "the village carpenter, smith, mason", and by monks, not by great architects.`,
            },
            markScheme: {
              'How it is marked (4 marks)': Q1_5_MARKING,
              'Details you might bring together': [
                'Source A: a retired steelworker who paints; teenagers in a drama workshop; a woman who uses the library; local people who visit museums and community theatres.',
                'Source B: monks and village craftsmen such as carpenters, smiths and masons, living in out-of-the-way places, rather than trained architects.',
              ],
            },
          },
          {
            id: 'wjec-c2-15-q6',
            questionNumber: 6,
            label: '1.6',
            questionText: `Source A and Source B are both about art and ordinary people.\n\nCompare:\n• what the writers say about the importance of the arts to ordinary people\n• how they get their ideas across.\n\nUse evidence from both texts, and make clear which text each point comes from. [10]`,
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'comparison',
            extract: `Source A:\n${WJEC_C2_15_SOURCE_A}\n\nSource B:\n${WJEC_C2_15_SOURCE_B}`,
            extractSource: `Source A: ${WJEC_C2_15_SOURCE_A_REF} | Source B: ${WJEC_C2_15_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 8-9': `Both writers argue that the arts belong to ordinary people and are essential to their happiness. The writer of Source A defends people's right to enjoy the arts today, while Morris, in Source B, celebrates the ordinary craftsmen of the past who made art as part of their daily work.\n\nWhat they say is closely connected. For the writer of Source A, the arts give ordinary people things they cannot find elsewhere: a space "where they were listened to", or a place where someone "felt safe and warm". The library is "a lifeline". For Morris, art was woven into working life: "every day the hammer chinked on the anvil", and the work always brought "some human happiness". Both link art with happiness and meaning, and Source A warns that without it people "feel that their lives lack meaning".\n\nBut they focus on different roles. In Source A, ordinary people are mostly audiences and amateurs: a steelworker who "paints watercolours every Tuesday", teenagers at a workshop. In Source B, ordinary people are the artists: "the village carpenter, smith, mason", whose work is "the wonder and despair" of trained architects. Source A is about access to the arts; Source B is about the pleasure of making them.\n\nBoth writers also attack those who look down on ordinary people. Source A criticises decision-makers who treat the arts as "a luxury" and value only "the things that can be sold". Morris mocks the idea that art needs "The great architect, carefully kept for the purpose", and puts the snobbish phrase "a common fellow" in quotation marks.\n\nTheir methods differ. Source A is a modern campaigning piece: it uses current examples of closures, three short portraits with the repeated phrase "is not a luxury", and short, sharp sentences such as "Friendship doesn't matter" to expose a "ruthless and reductive calculus". The tone is passionate and indignant. Morris speaks as a lecturer, using questions ("And did he loathe his work?") with confident answers ("No, it is impossible."), personal testimony ("I have seen") and comparisons with royalty, such as "The throne of the great Plantagenet". His tone is warm and celebratory, especially at the end.\n\nSo both writers value the art of ordinary people, but Source A fights to protect it from cuts, while Morris celebrates a time when it was part of everyday life.`,
            },
            markScheme: {
              'How it is marked (10 marks)': Q1_6_MARKING,
              'Points you might make': [
                'Both link the arts with happiness and meaning in ordinary lives.',
                'Roles: ordinary people as audiences and amateurs (Source A); ordinary people as the artists (Source B).',
                `Both attack snobbery or narrow values: "the things that can be sold" (Source A); "a common fellow" in quotation marks (Source B).`,
                'Methods: closures, portraits, epistrophe and short sentences (Source A); questions answered, personal testimony and comparisons with royalty (Source B).',
                'Tone and purpose: indignant, defending the arts from cuts (Source A); warm, celebrating a lost way of life (Source B).',
              ],
            },
          },
        ],
      },
      {
        id: 'wjec-c2-15-writing',
        title: 'Section B: Writing',
        description: SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-15-q7',
            questionNumber: 1,
            label: '2.1',
            questionText: `Your local council has announced plans to close the town's only art gallery and replace it with a car park.\n\nWrite a speech to be given at a public meeting, arguing that the gallery should be saved. [20]`,
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Good evening, everyone, and thank you for coming.\n\nMy name is Ellie, and I am fifteen. The first time I walked into our town's art gallery, I was seven years old, holding my grandfather's hand. We stood in front of a huge painting of the harbour in a storm, and he told me that his own father had worked on boats like the ones in the picture. I have never forgotten that moment. Tonight I want to ask the council to make sure that other children can have moments like it.\n\nI understand the council's problem. Parking in the town centre is difficult, and shops say that they lose customers because of it. That matters. But a car park can be built in many places. A gallery that holds a hundred years of our town's history cannot be rebuilt once it is gone.\n\nThink about what the gallery gives us. It is free to enter, so anyone can visit, whatever their income. Schools bring classes every week, and for some children it is the only place they ever see original art. On Saturday mornings, families crowd into the workshops. On weekday afternoons, older people come to sit quietly among the pictures, often because it is somewhere warm and peaceful to go. Where will they go when it becomes a car park?\n\nThe gallery is good for business too. Visitors who come to see an exhibition also buy lunch, browse the shops and come back again. A car park brings people in for an hour. A gallery gives them a reason to stay.\n\nSo I would like to suggest another way forward. The council owns land behind the old bus depot that stands empty. It could become the car park the town needs, and the gallery could stay where it belongs. If money is the problem, let us raise it together: through a friends' scheme, sponsorship from local businesses, and events that bring people through the doors.\n\nOnce this building is gone, we cannot buy it back. I am asking the council, and everyone in this room, to stand up for the gallery tonight, so that my grandfather's harbour, and all the stories it holds, are still here for the next seven-year-old who walks through the door.\n\nThank you.`,
            },
            markScheme: {
              'How it is marked (20 marks)': WRITING_MARKING,
              'What earns marks in this task': [
                'The features of a speech: a greeting, a personal opening that wins the audience, direct address, and a memorable ending.',
                'A tone that suits a public meeting of local people and councillors: passionate but respectful.',
                'A clear argument, developed with reasons and examples, that recognises the parking problem and offers an alternative.',
                'Accurate spelling, punctuation and grammar, with varied sentences and well-chosen words: 8 of the 20 marks are for this.',
              ],
            },
          },
          {
            id: 'wjec-c2-15-q8',
            questionNumber: 2,
            label: '2.2',
            questionText: `"Every child should study the arts at school until the age of sixteen. The arts are just as important as maths and science."\n\nWrite an article for a newspaper giving your views on this statement. [20]`,
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Art, music and drama are not optional extras\n\nAsk most people which school subjects matter most, and they will name maths, English and science. These are the subjects that appear in league tables and on job applications, and nobody would argue that they are unimportant. But when timetables are squeezed, it is art, music and drama that are cut first. I believe that is a mistake, and that every child should study at least one of the arts until they are sixteen.\n\nThe first reason is that the arts teach skills that every job needs. A drama student learns to speak with confidence and to work in a team. A music student learns discipline and patience, practising the same few bars until they are right. An art student learns to look closely, to solve problems and to accept that a first attempt is rarely the best one. These are exactly the qualities that employers say they are looking for.\n\nThe second reason is that the arts help young people to understand themselves and others. A play can put us in the shoes of someone very different from us. A piece of music can express a feeling we have no words for. For many young people, especially those who struggle in other lessons, the art room or the music practice room is the place where they first feel successful.\n\nThird, the arts are part of who we are. Our country is famous for its writers, singers, actors and designers, and its creative industries employ a great many people. If we stop teaching the arts in school, we risk making them a hobby for children whose parents can pay for private lessons, while everyone else misses out.\n\nOf course, there are only so many hours in the school week, and some will say that time spent painting is time not spent on equations. But the choice is not either one or the other. A balanced education needs both. Science explains how the world works; the arts help us decide what it means.\n\nSo yes, the arts are just as important as maths and science. Every child deserves the chance to discover what they can create.`,
            },
            markScheme: {
              'How it is marked (20 marks)': WRITING_MARKING,
              'What earns marks in this task': [
                'The features of a newspaper article: a headline, an engaging opening, and paragraphs that build an argument to a clear conclusion.',
                'A confident, persuasive tone suited to newspaper readers.',
                'A clear view on both parts of the statement, developed with reasons and examples, and fair to the opposing view.',
                'Accurate spelling, punctuation and grammar, with varied sentences and well-chosen words: 8 of the 20 marks are for this.',
              ],
            },
          },
        ],
      },
    ],
  },
]
