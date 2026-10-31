// @ts-nocheck
import type { MockExamPaper } from './types'

/**
 * WHAT WAS WRONG (found 26 September 2026 by
 * scripts/check-mock-exam-extracts.mjs, fixed 27 September). These five
 * papers are live: they are in allMockExamPapers (src/data/mock-exams.ts).
 * Every Source B was printed as the words of a named nineteenth-century
 * writer, and not one was:
 *   - Exam 06, "Florence Nightingale, Notes on Hospitals (1859)": seven
 *     London infirmaries, patients two to a bed, a nurse at St Thomas's and a
 *     nation that keeps "the largest navy in the world". None of its nine
 *     sentences is in Notes on Nursing, the Nightingale text the checker
 *     reads. Notes on Hospitals is not on Gutenberg, and the passage reads as
 *     written for this file.
 *   - Exam 07, "John Ruskin, Letters to the Working Men of England (1871)": a
 *     walk in the Lake District, felled woods, muddy streams and a vanished
 *     red squirrel. Ruskin's letters to working men of 1871 are Fors
 *     Clavigera, and none of the passage's ten sentences is in the first two
 *     volumes of it, which begin with the letters of 1871.
 *   - Exam 08, "Lord Shaftesbury, Report on the Employment of Children in
 *     Mines (1842)": a first-person day down a mine and an eleven-year-old
 *     called Thomas. The 1842 report was the Children's Employment
 *     Commission's, not Shaftesbury's (then Lord Ashley). A search of
 *     Gutenberg found no text by him to check against, and the passage reads
 *     as invented.
 *   - Exam 09, "Friedrich Engels, The Condition of the Working Class in
 *     England (1845)": Irish families defended against prejudice. None of its
 *     eleven sentences is in the Kelley translation, and it gave Engels a view
 *     of the Irish close to the opposite of the one he printed.
 *   - Exam 10, "Charles Dickens, 'A Walk Through the Workhouse', Household
 *     Words (1850)": a girl called Mary minding her brother off Drury Lane.
 *     The real piece is "A Walk in a Workhouse", in Reprinted Pieces, and none
 *     of the passage's fifteen sentences is in it.
 * The Question 3 and 4 answers then quoted the invented lines as the
 * writers' own (at least sixteen quotations in Exam 09's Questions 3 and 4
 * and Exam 10's Question 3 alone, among them "six or eight families to a
 * house"), and
 * every one of those answers analysed words the named writer never wrote.
 * Exam 06's Question 4 answer also quoted "twelve feet by ten", which was in
 * no extract at all.
 *
 * Every Source A was labelled as a 2024 or 2025 article by a named writer in
 * a real publication (Wales Online, The New Statesman, The Observer, BBC
 * Wales, TES Cymru). Nothing supports any of them. Had they been real, they
 * would be in copyright and far too long to print; they read as written for
 * this file, and the bylines could belong to real people who wrote none of
 * it.
 *
 * WHAT IT IS NOW. Each Source B is a genuine passage, cut by script from the
 * Project Gutenberg text with passage() (src/lib/study-guides/passage.ts) and
 * never retyped. Only typography was touched: doubled spaces are closed
 * up, a footnote number in the Ruskin ("Demeter, [12] into")
 * is dropped, and so are the marginal side-notes of Notes on Nursing.
 *   - 06: Nightingale, Notes on Nursing: What It Is, and What It Is Not
 *     (1859; Gutenberg #12439, D. Appleton's New York printing of 1898),
 *     from the untitled opening section before Chapter I (Ventilation and
 *     Warming): eight paragraphs, consecutive apart from the side-notes, on
 *     why the sick suffer more from bad nursing than from disease. The label
 *     says "from the opening pages", not "chapter", for that reason. It is the same year as the label's Notes on Hospitals and the
 *     same argument, and it is on Gutenberg. Question 4's statement now sets
 *     specific examples against general principles, because Source B makes
 *     no emotional appeal to set against evidence.
 *   - 07: Ruskin, Fors Clavigera, Letter V (1 May 1871; Gutenberg #59456,
 *     volume 1, George Allen, 1871), seven consecutive paragraphs on what his
 *     readers have done to air, water and earth. Questions 3 and 4 gloss its
 *     hard words and allusions.
 *   - 08: Engels, The Condition of the Working-Class in England in 1844,
 *     "The Mining Proletariat", in Florence Kelley Wischnewetzky's
 *     translation (London edition of 1892; Gutenberg #17306): the paragraph
 *     on the coal and iron mines, then, after a marked cut, the first four
 *     sentences of the paragraph after next, on the children's exhaustion.
 *     Engels is summarising the evidence of the Children's Employment
 *     Commission, the report the old label named, and Question 3 now says so.
 *     With no text of Shaftesbury's to cut from, the passage and its label
 *     are Engels's, and this file now prints two passages of his.
 *   - 09: Engels, the same translation, "Irish Immigration", the last
 *     thirteen sentences of the chapter's third paragraph: the immigrants'
 *     dwellings, their crowding and their drinking, and his turn to blame
 *     society for them. The genuine Engels is contemptuous of the Irish, so
 *     Question 3 now asks about his attitude as well as their lives, Question
 *     4 no longer says that both writers defend immigrants, and the answers
 *     name his prejudice rather than soften it. src/data/mock-exams/aqa-p2-b.ts
 *     prints the chapter's first paragraph and the start of its third, so
 *     this paper takes a different part of it.
 *   - 10: Dickens, "A Walk in a Workhouse", Household Words (1850), from
 *     Reprinted Pieces (Gutenberg #872, Chapman and Hall, 1905), the last
 *     seven sentences of one paragraph: the workhouse's infant, girls' and
 *     boys' schools. Question 3 now asks about workhouse children, since they
 *     are who the passage describes, and glosses Tooting.
 * The Source A passages are kept and labelled as what they are, specially
 * written for this paper, and the answers call their writer "the writer of
 * Source A" rather than by the invented names; two questions that gave that
 * writer a gender the text does not are reworded. Every Question 3 and 4
 * answer was rewritten for its new Source B, and every quotation in the
 * answers was checked by script against its extract. The Question 2 answers
 * also misdescribed Source A in six places, now corrected: a single use of
 * "suffocation" called a sustained metaphor, a phrase called the final
 * sentence when it is not, a first-person plural called direct address,
 * "Not depleted. Not diminished. Empty" called a triple repetition, a phrase
 * in the main clause called parenthetical, and the third paragraph called the
 * second. Questions 1, 5 and 6 are unchanged.
 *
 * REVIEWED 27 September 2026. Every Source B paragraph was matched again,
 * by a separate script, against the Gutenberg paragraphs it came from, and
 * every quotation of any length in every answer and mark scheme (249) was
 * found in its own extract, each Question 4 quotation in the source the
 * answer credits it to. That pass also found answers that quoted true words
 * but said something false about them, now corrected:
 *   - 06 Q3 said Nightingale's last sentence has Nature intend disease to be
 *     a reparative process; the sentence says God made it so. The label
 *     said "from the opening chapter" for a passage that stands before
 *     Chapter I. Question 3 now glosses reparative, poultices and viz.
 *   - 06 Q2 called "ferocity" a modifier of "purpose"; it is the noun.
 *   - 07 Q2 called "clarity of absence" an oxymoron (the words are not
 *     opposites) and a two-word quotation an adverbial triplet.
 *   - 07 Q4 had Source A turn to the rock pools after admitting that figures
 *     become abstract (the pools open the article), and glued "things" to
 *     Ruskin's "inventive of explosive and deathful", whose noun is "Dust".
 *   - 08 Q2 said Source A repeats "be your own boss", which it says once;
 *     08 Q4 said Source A asks readers to look at their own part in the
 *     system, which it never does.
 *   - 09 Q3 put Engels's "And since the poor devil" after his worst
 *     contempt and called it one of the last sentences; it comes just before
 *     "bestial drunkenness" and "little above the savage".
 *
 * KNOWN GAPS. Source A's figures ("73%", "353%", "£4.80 an hour") belong to
 * the specially written articles and are not sourced (on 31 October 2026
 * the first two were replaced by published figures: see below). The glosses in the
 * question text (Tooting, the Franco-Prussian War, the Children's Employment
 * Commission) are general knowledge, not checked by script. Notes on Nursing
 * is checked against the Appleton printing only; the London first edition
 * (Harrison, 1859) was not compared.
 *
 * RESTRUCTURED 24 October 2026, the day the AI marker was corrected to mark
 * each paper as its board does. WHAT WAS WRONG: these papers were not
 * Eduqas's paper. Each set four reading questions worth 5, 10, 10 and 15 and
 * two writing tasks worth 16 and 24, where C700U20-1 sets six reading
 * questions worth 3, 10, 3, 10, 4 and 10 and two compulsory writing tasks of
 * 20 each. Question 3 gave ten marks to what Source B tells the reader, a
 * question the paper does not set; Question 4 asked for one 15-mark verdict
 * on both texts at once, where Eduqas judges the 19th-century text on its
 * own (Question 1.4) and compares the two separately (Question 1.6); nothing
 * brought details from the two texts together (Question 1.5); and the
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
 * and every question worth 6 or more has a model answer. The glossary for
 * each Source B is printed with Question 1.3, the first question on it. The
 * questions name paragraphs, not line numbers, which the mock-exam page does
 * not print, and every quotation in a reading question's text, answers and
 * mark scheme was checked by script against the extract that question
 * prints. The sources are kept as they were: each fits what Eduqas sets, one
 * 21st-century and one 19th-century non-fiction text. Exam 10's Source A
 * cited a rise in self-harm among teenage girls; no question or answer
 * turned on that sentence, and on 31 October 2026 it was removed (below).
 *
 * CHECKED 31 October 2026 by a second, independent reader, against the
 * guide, the scheme, Eduqas's Summer 2025 question paper and each extract.
 * Every Source B is word for word its Gutenberg text, fetched that day
 * (scripts/check-mock-exam-extracts.mjs --fetch). Fixed, one line each:
 *   - suitability (10 Source A): the sentence on self-harm among teenage
 *     girls is removed, as the founder asked of any mention of self-harm.
 *   - untrue claim (10 Source A): "Referrals to CAMHS have increased by 353%
 *     in a decade" matched no published figure; the paragraph now gives NHS
 *     England's own, from NHS Digital's Mental Health of Children and Young
 *     People in England, 2020 (one in six aged 5 to 16, up from one in nine
 *     in 2017), and the 1.2 and 1.6 answers quote that instead.
 *   - untrue claim (07 Source A): "73% of its monitored insect populations
 *     since 1990" matched no published figure, "One in six species in the
 *     UK" was Great Britain's 16%, and "The hedgehog population has halved"
 *     was the rural trend only. It now gives State of Nature 2023's Wales
 *     page (Welsh wildlife down 20% on average since 1994; one in six Welsh
 *     species threatened) and PTES and BHPS's The State of Britain's
 *     Hedgehogs 2018 (the rural trend fell by half; "halved since 2000" in
 *     their release); Question 1.1(b) and (c), the 1.2, 1.5 and 1.6 answers
 *     and their schemes follow.
 *   - board wording: as in wjec-c2-a.ts, Questions 1.2, 1.5 and 1.6 and the
 *     Section B guidance opened with Eduqas's own sentences; reworded, and
 *     1.5 now asks which text each detail comes from.
 *   - model answer (06 1.4): called the third paragraph "the sentence that
 *     follows" the first, and "not always to blame" a direct contradiction.
 *   - model answer (06 1.6): said Nightingale's problem is not money or
 *     staff, which she never says; now ignorance, which she does.
 *   - model answer and scheme (07 1.6): Source A uses "we" "throughout" and
 *     "ends" on "When it dies, we die."; its first paragraph is "I", and its
 *     last words are "It is biology."
 *   - model answer and scheme (08 1.6): the girls given "the heaviest work"
 *     (men loosen the coal), and both texts' workers used "because they are
 *     cheap", which Engels never says.
 *   - model answer (09 1.6): called the writer a lawyer; the text says only
 *     "law school".
 *   - mark scheme (10 1.5): the boys play "without adults watching over
 *     them", which the text does not say; now "unrestrained", as it does.
 */

// ─── WJEC Component 2 Source Texts ──────────────────────────────────────────

// Exam 06 - Health & Medicine
const HEALTH_SOURCE_A = `The NHS is not merely a healthcare system. It is the closest thing we have to a national religion - a shared article of faith that says no one in this country should die because they cannot afford to live. And yet, seventy-five years after its founding, that faith is being tested as never before.

I spent three months embedded in A&E departments across England and Wales, and what I witnessed was not dysfunction but a slow, systemic suffocation. In Swansea, a seventy-two-year-old woman waited nineteen hours on a trolley in a corridor because there were no beds. In Leeds, a junior doctor told me she had worked thirty consecutive hours and could no longer remember whether she had eaten. In Birmingham, a paramedic crew sat in their ambulance outside the hospital for six hours, unable to hand over their patient, while emergency calls stacked up unanswered across the city.

These are not failures of individual commitment. Every doctor, nurse, porter, and receptionist I met was working with a ferocity of purpose that left me humbled and, frankly, frightened - because you cannot sustain that intensity indefinitely. You cannot run a health service on goodwill alone. The staffing shortages, the crumbling infrastructure, the impossible waiting lists - these are political choices disguised as unfortunate circumstances. And until we name them honestly, nothing will change.`

const HEALTH_SOURCE_A_REF = 'Newspaper article, specially written for this paper'

const HEALTH_SOURCE_B = `In watching diseases, both in private houses and in public hospitals, the thing which strikes the experienced observer most forcibly is this, that the symptoms or the sufferings generally considered to be inevitable and incident to the disease are very often not symptoms of the disease at all, but of something quite different--of the want of fresh air, or of light, or of warmth, or of quiet, or of cleanliness, or of punctuality and care in the administration of diet, of each or of all of these. And this quite as much in private as in hospital nursing.

The reparative process which Nature has instituted and which we call disease, has been hindered by some want of knowledge or attention, in one or in all of these things, and pain, suffering, or interruption of the whole process sets in.

If a patient is cold, if a patient is feverish, if a patient is faint, if he is sick after taking food, if he has a bed-sore, it is generally the fault not of the disease, but of the nursing.

I use the word nursing for want of a better. It has been limited to signify little more than the administration of medicines and the application of poultices. It ought to signify the proper use of fresh air, light, warmth, cleanliness, quiet, and the proper selection and administration of diet--all at the least expense of vital power to the patient.

It has been said and written scores of times, that every woman makes a good nurse. I believe, on the contrary, that the very elements of nursing are all but unknown.

By this I do not mean that the nurse is always to blame. Bad sanitary, bad architectural, and bad administrative arrangements often make it impossible to nurse.

But the art of nursing ought to include such arrangements as alone make what I understand by nursing, possible.

The art of nursing, as now practised, seems to be expressly constituted to unmake what God had made disease to be, viz., a reparative process.`

const HEALTH_SOURCE_B_REF =
  'Florence Nightingale, Notes on Nursing: What It Is, and What It Is Not (1859), from the opening pages'

// Exam 07 - Environment
const ENV_SOURCE_A = `Last summer, I stood on a beach in Pembrokeshire that I had visited every year since childhood. The rock pools where I had spent hours as a boy, cataloguing crabs and anemones with the obsessive precision of a seven-year-old naturalist, were empty. Not depleted. Not diminished. Empty. The seaweed that had once draped every surface in glistening curtains of brown and green had gone. The water was clear in a way that should have been beautiful but was, in fact, terrifying - the clarity of absence.

The wildlife monitored in Wales has declined by a fifth, on average, since 1994. One in six Welsh species is now at risk of extinction. Britain's rural hedgehogs have halved since 2000. These numbers describe losses so large that they become abstract, and abstraction is the enemy of action. So let me make it concrete: the dawn chorus in my village is quieter than it was when I was a child. Not metaphorically. Measurably. Quantifiably. There are fewer birds singing because there are fewer birds, because there are fewer insects, because we have poisoned the soil and paved the meadows and called it progress.

We speak of the environment as though it were something separate from us - a resource to be managed, a backdrop to human activity. It is not. It is the ground beneath our feet, the air in our lungs, the food on our plates. When it dies, we die. This is not ideology. It is biology.`

const ENV_SOURCE_A_REF = 'Magazine article, specially written for this paper'

const ENV_SOURCE_B = `The first three, I said, are Pure Air, Water, and Earth.

Heaven gives you the main elements of these. You can destroy them at your pleasure, or increase, almost without limit, the available qualities of them.

You can vitiate the air by your manner of life, and of death, to any extent. You might easily vitiate it so as to bring such a pestilence on the globe as would end all of you. You or your fellows, German and French, are at present busy in vitiating it to the best of your power in every direction; chiefly at this moment with corpses, and animal and vegetable ruin in war: changing men, horses, and garden-stuff into noxious gas. But everywhere, and all day long, you are vitiating it with foul chemical exhalations; and the horrible nests, which you call towns, are little more than laboratories for the distillation into heaven of venomous smokes and smells, mixed with effluvia from decaying animal matter, and infectious miasmata from purulent disease.

On the other hand, your power of purifying the air, by dealing properly and swiftly with all substances in corruption; by absolutely forbidding noxious manufactures; and by planting in all soils the trees which cleanse and invigorate earth and atmosphere,--is literally infinite. You might make every breath of air you draw, food.

Secondly, your power over the rain and river-waters of the earth is infinite. You can bring rain where you will, by planting wisely and tending carefully;--drought where you will, by ravage of woods and neglect of the soil. You might have the rivers of England as pure as the crystal of the rock; beautiful in falls, in lakes, in living pools; so full of fish that you might take them out with your hands instead of nets. Or you may do always as you have done now, turn every river of England into a common sewer, so that you cannot so much as baptize an English baby but with filth, unless you hold its face out in the rain; and even that falls dirty.

Then for the third, Earth,--meant to be nourishing for you, and blossoming. You have learned, about it, that there is no such thing as a flower; and as far as your scientific hands and scientific brains, inventive of explosive and deathful, instead of blossoming and life giving, Dust, can contrive, you have turned the Mother-Earth, Demeter, into the Avenger-Earth, Tisiphone--with the voice of your brother's blood crying out of it, in one wild harmony round all its murderous sphere.

This is what you have done for the Three Material Useful Things.`

const ENV_SOURCE_B_REF =
  'John Ruskin, Fors Clavigera: Letters to the Workmen and Labourers of Great Britain, Letter V (1 May 1871)'

// Exam 08 - Work & Industry
const WORK_SOURCE_A = `The gig economy was supposed to set us free. That was the promise, anyway - be your own boss, set your own hours, work from anywhere. Silicon Valley sold us a vision of liberation, and millions of us bought it. But freedom, it turns out, looks remarkably like exploitation when you strip away the branding.

I spent six months working as a delivery rider for three different apps simultaneously, and I can tell you exactly what the gig economy looks like from the saddle of a bicycle at eleven o'clock on a rainy Tuesday night: it looks like desperation. My fellow riders - mostly young men, mostly from immigrant backgrounds, mostly without the language skills or legal status to demand anything better - earned an average of £4.80 an hour after expenses. No sick pay. No holiday pay. No pension. No protection of any kind. We were, in the terminology of the platform, "independent contractors." In the terminology of reality, we were disposable.

The app tracked our every movement. It measured our speed, our acceptance rate, our customer ratings. A score below 4.5 meant fewer deliveries. Fewer deliveries meant less money. Less money meant accepting every order, no matter how far, no matter how dangerous the route, no matter that the rain was horizontal and the streets were black with ice. This is not flexibility. It is algorithmic control with a smiley-face interface.`

const WORK_SOURCE_A_REF = 'Newspaper article, specially written for this paper'

const WORK_SOURCE_B = `In the coal and iron mines which are worked in pretty much the same way, children of four, five, and seven years are employed. They are set to transporting the ore or coal loosened by the miner from its place to the horse-path or the main shaft, and to opening and shutting the doors (which separate the divisions of the mine and regulate its ventilation) for the passage of workers and material. For watching the doors the smallest children are usually employed, who thus pass twelve hours daily, in the dark, alone, sitting usually in damp passages without even having work enough to save them from the stupefying, brutalising tedium of doing nothing. The transport of coal and iron-stone, on the other hand, is very hard labour, the stuff being shoved in large tubs, without wheels, over the uneven floor of the mine; often over moist clay, or through water, and frequently up steep inclines and through paths so low-roofed that the workers are forced to creep on hands and knees. For this more wearing labour, therefore, older children and half-grown girls are employed. One man or two boys per tub are employed, according to circumstances; and, if two boys, one pushes and the other pulls. The loosening of the ore or coal, which is done by men or strong youths of sixteen years or more, is also very weary work. The usual working-day is eleven to twelve hours, often longer; in Scotland it reaches fourteen hours, and double time is frequent, when all the employees are at work below ground twenty-four, and even thirty-six hours at a stretch. Set times for meals are almost unknown, so that these people eat when hunger and time permit.

[...]

The children and young people who are employed in transporting coal and iron-stone all complain of being over-tired. Even in the most recklessly conducted industrial establishments there is no such universal and exaggerated overwork. The whole report proves this, with a number of examples on every page. It is constantly happening that children throw themselves down on the stone hearth or the floor as soon as they reach home, fall asleep at once without being able to take a bite of food, and have to be washed and put to bed while asleep; it even happens that they lie down on the way home, and are found by their parents late at night asleep on the road.`

const WORK_SOURCE_B_REF =
  'Friedrich Engels, The Condition of the Working-Class in England in 1844 (1845), from "The Mining Proletariat", translated by Florence Kelley Wischnewetzky (London edition, 1892)'

// Exam 09 - Immigration
const IMMIGRATION_SOURCE_A = `My parents came to Cardiff from Somalia in 1998. They arrived with two suitcases, three children under five, and a level of optimism that I now recognise as either extraordinary courage or magnificent delusion. They spoke no Welsh, very little English, and knew precisely no one. My father, who had been an engineer in Mogadishu, took a job washing dishes in a hotel. My mother, who had been a teacher, cleaned offices from five until eight every morning before walking us to school.

I tell you this not to inspire pity - my parents would be mortified - but to establish a simple fact: immigration is not an abstraction. It is not a policy debate or a newspaper headline or a statistic on a graph. It is a human being standing in a kitchen at four in the morning, ironing a school uniform with hands that are raw from bleach, because they believe - with a conviction that borders on the irrational - that this country will give their children opportunities they themselves will never have.

And here is the thing that is almost never said in our increasingly toxic public discourse: they were right. I went to a comprehensive school, then to university, then to law school. My sister is a GP. My brother runs a construction company. We pay our taxes, we vote, we volunteer, we argue about rugby. We are, by any reasonable measure, exactly the kind of citizens that any country would want. And yet the prevailing narrative insists that people like my parents are a problem to be solved rather than an asset to be celebrated.`

const IMMIGRATION_SOURCE_A_REF = 'Online article, specially written for this paper'

const IMMIGRATION_SOURCE_B = `The filth and comfortlessness that prevail in the houses themselves it is impossible to describe. The Irishman is unaccustomed to the presence of furniture; a heap of straw, a few rags, utterly beyond use as clothing, suffice for his nightly couch. A piece of wood, a broken chair, an old chest for a table, more he needs not; a tea-kettle, a few pots and dishes, equip his kitchen, which is also his sleeping and living room. When he is in want of fuel, everything combustible within his reach, chairs, door-posts, mouldings, flooring, finds its way up the chimney. Moreover, why should he need much room? At home in his mud-cabin there was only one room for all domestic purposes; more than one room his family does not need in England. So the custom of crowding many persons into a single room, now so universal, has been chiefly implanted by the Irish immigration. And since the poor devil must have one enjoyment, and society has shut him out of all others, he betakes himself to the drinking of spirits. Drink is the only thing which makes the Irishman's life worth having, drink and his cheery care-free temperament; so he revels in drink to the point of the most bestial drunkenness. The southern facile character of the Irishman, his crudity, which places him but little above the savage, his contempt for all humane enjoyments, in which his very crudeness makes him incapable of sharing, his filth and poverty, all favour drunkenness. The temptation is great, he cannot resist it, and so when he has money he gets rid of it down his throat. What else should he do? How can society blame him when it places him in a position in which he almost of necessity becomes a drunkard; when it leaves him to himself, to his savagery?`

const IMMIGRATION_SOURCE_B_REF =
  'Friedrich Engels, The Condition of the Working-Class in England in 1844 (1845), from "Irish Immigration", translated by Florence Kelley Wischnewetzky (London edition, 1892)'

// Exam 10 - Childhood
const CHILDHOOD_SOURCE_A = `We are raising the most protected and the most anxious generation in human history, and these two facts are not unrelated. In our determination to keep children safe from every conceivable danger - from strangers, from traffic, from germs, from failure, from boredom, from the unsupervised outdoors - we have inadvertently created a generation that does not know how to assess risk, tolerate discomfort, or entertain itself without a screen.

I am a secondary school teacher in Newport, and I have watched this transformation unfold over fifteen years. The children who arrive in Year 7 today are qualitatively different from those who arrived in 2010. They are more anxious, more risk-averse, and more dependent on adult intervention. They cannot resolve playground disputes without a teacher. They cannot cope with a low mark without their parents emailing the headteacher. They have been so thoroughly bubble-wrapped that the ordinary challenges of adolescence - rejection, competition, boredom, physical discomfort - hit them like a truck.

The statistics confirm what every teacher already knows. By 2020, one in six children in England aged five to sixteen had a probable mental disorder, up from one in nine only three years before. We have tried to eliminate suffering from childhood, and we have produced suffering on an industrial scale.`

const CHILDHOOD_SOURCE_A_REF = 'Magazine article, specially written for this paper'

const CHILDHOOD_SOURCE_B = `It was very agreeable, recollecting that most infamous and atrocious enormity committed at Tooting—an enormity which, a hundred years hence, will still be vividly remembered in the bye-ways of English life, and which has done more to engender a gloomy discontent and suspicion among many thousands of the people than all the Chartist leaders could have done in all their lives—to find the pauper children in this workhouse looking robust and well, and apparently the objects of very great care. In the Infant School—a large, light, airy room at the top of the building—the little creatures, being at dinner, and eating their potatoes heartily, were not cowed by the presence of strange visitors, but stretched out their small hands to be shaken, with a very pleasant confidence. And it was comfortable to see two mangy pauper rocking-horses rampant in a corner. In the girls’ school, where the dinner was also in progress, everything bore a cheerful and healthy aspect. The meal was over, in the boys’ school, by the time of our arrival there, and the room was not yet quite rearranged; but the boys were roaming unrestrained about a large and airy yard, as any other schoolboys might have done. Some of them had been drawing large ships upon the schoolroom wall; and if they had a mast with shrouds and stays set up for practice (as they have in the Middlesex House of Correction), it would be so much the better. At present, if a boy should feel a strong impulse upon him to learn the art of going aloft, he could only gratify it, I presume, as the men and women paupers gratify their aspirations after better board and lodging, by smashing as many workhouse windows as possible, and being promoted to prison.`

const CHILDHOOD_SOURCE_B_REF =
  'Charles Dickens, "A Walk in a Workhouse", Household Words (1850), from Reprinted Pieces'

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

// ─── Exam Papers ────────────────────────────────────────────────────────────

export const wjecC2B: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 06 - Health & Medicine
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c2-06',
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
        id: 'wjec-c2-06-reading',
        title: 'Section A: Reading',
        description: SECTION_A_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-06-q1',
            questionNumber: 1,
            label: '1.1',
            questionText: `Read Source A, the 21st-century text, and answer the questions below.\n\n(a) How long did the writer spend in A&E departments? [1]\n(b) How long did the woman in Swansea wait on a trolley? [1]\n(c) What kept the paramedic crew in Birmingham outside the hospital for six hours? [1]`,
            marks: 3,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: `Source A:\n${HEALTH_SOURCE_A}\n\nSource B:\n${HEALTH_SOURCE_B}`,
            extractSource: `Source A: ${HEALTH_SOURCE_A_REF} | Source B: ${HEALTH_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': `(a) Three months.\n(b) Nineteen hours.\n(c) They could not hand over their patient.`,
            },
            markScheme: {
              'How it is marked (3 marks)': SHORT_A_MARKING,
              Answers: [
                '(a) Three months.',
                '(b) Nineteen hours (accept: in a corridor, because there were no beds, if the time is given).',
                '(c) They were unable to hand over their patient to the hospital.',
              ],
            },
          },
          {
            id: 'wjec-c2-06-q2',
            questionNumber: 2,
            label: '1.2',
            questionText: `Source A is a newspaper article about the NHS. The writer wants to persuade readers that the health service is in crisis because of political choices.\n\nHow does the writer try to do this?\n\nIn your answer, comment on:\n• what the writer says\n• the writer's choice of language and tone\n• how the article is structured, and any other methods the writer uses.\n\n[10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${HEALTH_SOURCE_A}`,
            extractSource: HEALTH_SOURCE_A_REF,
            modelAnswers: {
              'Grade 8-9': `The writer begins by raising the NHS to the highest possible status, so that its decline will seem all the more shocking. The opening sentence, "The NHS is not merely a healthcare system", corrects a narrow view, and the metaphor that follows calls it "the closest thing we have to a national religion - a shared article of faith". Religious language makes the service sacred, and the paradox that ends the sentence, that no one "should die because they cannot afford to live", sums up its moral purpose. The turn "And yet" then introduces the problem: that faith is "being tested as never before".\n\nIn the second paragraph the writer becomes a witness. "I spent three months embedded in A&E departments" gives authority, and the metaphor "not dysfunction but a slow, systemic suffocation" suggests that the service is not broken but being slowly strangled; the hissing sounds of "slow, systemic suffocation" add to the sense of breath being squeezed out. Three examples follow, each beginning with a place: "In Swansea", "In Leeds", "In Birmingham". The repeated pattern makes the crisis national, and the precise details, "nineteen hours on a trolley in a corridor", "thirty consecutive hours", "six hours", make it impossible to dismiss. The junior doctor who "could no longer remember whether she had eaten" makes exhaustion personal, while the image of "emergency calls stacked up unanswered across the city" widens the danger to everyone.\n\nThe final paragraph moves from description to blame. The short, firm sentence "These are not failures of individual commitment" protects the staff, and the list "Every doctor, nurse, porter, and receptionist" includes the least noticed workers. The noun phrase "a ferocity of purpose", with its suggestion of violence, shows how hard they are working, and the writer admits to being "humbled and, frankly, frightened", an honest confession that makes the warning more believable. The repeated "You cannot" stresses that goodwill has limits.\n\nThe climax names the cause. After a list of three problems, "The staffing shortages, the crumbling infrastructure, the impossible waiting lists", comes the accusation: "these are political choices disguised as unfortunate circumstances". The verb "disguised" suggests deliberate deception. The last sentence, "And until we name them honestly, nothing will change", uses the inclusive "we" to make the reader part of the solution, so the article ends with a challenge rather than despair.`,
            },
            markScheme: {
              'How it is marked (10 marks)': Q1_2_MARKING,
              'Points you might make': [
                `The religious metaphor ("a national religion - a shared article of faith") makes the NHS sacred, so its decline seems shocking; "And yet" introduces the problem.`,
                `The writer as witness ("I spent three months embedded in A&E departments") and the metaphor "a slow, systemic suffocation".`,
                `Three examples, each opening with a city, with precise figures ("nineteen hours on a trolley in a corridor") that make the crisis national and hard to dismiss.`,
                `The staff are defended ("These are not failures of individual commitment"), and "a ferocity of purpose" and "humbled and, frankly, frightened" show their effort and the writer's honesty.`,
                `The climax blames politics: "political choices disguised as unfortunate circumstances"; "disguised" suggests deception.`,
                `The inclusive ending, "until we name them honestly, nothing will change", leaves a challenge.`,
              ],
            },
          },
          {
            id: 'wjec-c2-06-q3',
            questionNumber: 3,
            label: '1.3',
            questionText: `Read Source B, the 19th-century text, and answer the questions below.\n\n("Reparative" means healing or repairing; "poultices" are soft, warm pastes laid on the skin to ease pain or swelling; "viz." means namely.)\n\n(a) According to Nightingale, many of the symptoms thought to belong to a disease are really caused by something else. Give one thing that causes them. [1]\n(b) What has the word "nursing" usually been taken to mean, according to Nightingale? [1]\n(c) What does Nightingale think of the saying that "every woman makes a good nurse"? [1]`,
            marks: 3,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: `Source B:\n${HEALTH_SOURCE_B}`,
            extractSource: HEALTH_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5': `(a) A lack of fresh air.\n(b) Little more than giving medicines and putting on poultices.\n(c) She disagrees: she believes that even the basics of nursing are almost unknown.`,
            },
            markScheme: {
              'How it is marked (3 marks)': SHORT_B_MARKING,
              Answers: [
                '(a) Any one of: a lack of fresh air; of light; of warmth; of quiet; of cleanliness; of care and punctuality in giving food.',
                '(b) Little more than giving medicines and applying poultices.',
                '(c) She disagrees with it: she believes that the basic elements of nursing are almost unknown.',
              ],
            },
          },
          {
            id: 'wjec-c2-06-q4',
            questionNumber: 4,
            label: '1.4',
            questionText: `Read Source B again.\n\nA student said: ‘Nightingale blames nurses for the suffering of the sick.’\n\nHow far do you agree with this view?\n\nIn your answer, give your own view of how Nightingale presents the care of the sick across the whole text, and explain how her choices of words and details create that view. Support your answer with references to the text. [10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'evaluation',
            extract: `Source B:\n${HEALTH_SOURCE_B}`,
            extractSource: HEALTH_SOURCE_B_REF,
            modelAnswers: {
              'Grade 8-9': `I largely disagree. Nightingale is fiercely critical of nursing as it is practised, but she is careful to separate the art of nursing from the individual nurse, and much of her blame falls on ignorance and on the conditions in which nurses work.\n\nAt first the statement seems right. Her opening claims that sufferings thought "inevitable and incident to the disease" are often caused by something else: "the want of fresh air, or of light, or of warmth, or of quiet, or of cleanliness". The repeated "or of" builds a long list of simple things the sick go without, and the blunt third paragraph puts the blame squarely on care: if a patient is cold, feverish or faint, "it is generally the fault not of the disease, but of the nursing." The repetition of "if a patient" makes the point feel undeniable.\n\nHowever, her target is a way of thinking rather than a group of people. She criticises the narrow meaning of the word: nursing "has been limited to signify little more than the administration of medicines and the application of poultices", when it "ought to signify" the proper use of "fresh air, light, warmth, cleanliness, quiet". She is attacking ignorance, as her firm reply to a common saying shows: "I believe, on the contrary, that the very elements of nursing are all but unknown." What is unknown can hardly be the fault of any one nurse.\n\nThe statement is directly challenged in the sixth paragraph: "By this I do not mean that the nurse is always to blame." The triple "Bad sanitary, bad architectural, and bad administrative arrangements" shifts the responsibility to those who design and run hospitals and homes, and she concludes that such arrangements "often make it impossible to nurse". She then widens the meaning of nursing again, so that its art "ought to include such arrangements".\n\nHer final sentence is her harshest: the art of nursing, "as now practised, seems to be expressly constituted to unmake what God had made disease to be". This is a strong condemnation, but of a practice, not of the women who carry it out.\n\nSo Nightingale does blame nursing, but she blames the nurse only in part, and far less than she blames the ignorance and the conditions that surround her.`,
            },
            markScheme: {
              'How it is marked (10 marks)': Q1_4_MARKING,
              'Points you might make': [
                `The opening seems to support the statement: suffering comes from "the want of fresh air, or of light, or of warmth", and "it is generally the fault not of the disease, but of the nursing."`,
                `Her target is a narrow idea of nursing ("little more than the administration of medicines and the application of poultices") and the ignorance shown by "the very elements of nursing are all but unknown".`,
                `She directly clears the individual: "I do not mean that the nurse is always to blame", and blames "Bad sanitary, bad architectural, and bad administrative arrangements".`,
                `The final sentence condemns the practice "as now practised", with bitter irony, rather than the nurse.`,
                'A strong answer reaches a judgement on the statement, agreeing, disagreeing or agreeing in part, and keeps to it through the whole passage.',
              ],
            },
          },
          {
            id: 'wjec-c2-06-q5',
            questionNumber: 5,
            label: '1.5',
            questionText: `Bring together details from both texts to explain briefly what each writer says is causing patients to suffer. Make clear which text each detail comes from. [4]`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'summary',
            extract: `Source A:\n${HEALTH_SOURCE_A}\n\nSource B:\n${HEALTH_SOURCE_B}`,
            extractSource: `Source A: ${HEALTH_SOURCE_A_REF} | Source B: ${HEALTH_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': `In Source A, patients suffer because the health service lacks beds and staff: a woman waited "nineteen hours on a trolley in a corridor", and the writer blames "staffing shortages", "crumbling infrastructure" and long waiting lists on political choices. In Source B, patients suffer from "the want of fresh air, or of light, or of warmth, or of quiet, or of cleanliness", because the basics of nursing are "all but unknown" and buildings and management are badly arranged.`,
            },
            markScheme: {
              'How it is marked (4 marks)': Q1_5_MARKING,
              'Details you might bring together': [
                'Source A: too few beds; exhausted staff working thirty hours; ambulances unable to hand over patients; staffing shortages, crumbling buildings and long waiting lists, which the writer calls political choices.',
                'Source B: a lack of fresh air, light, warmth, quiet, cleanliness and care with food; ignorance of what nursing should be; bad sanitary, architectural and administrative arrangements.',
              ],
            },
          },
          {
            id: 'wjec-c2-06-q6',
            questionNumber: 6,
            label: '1.6',
            questionText: `Source A and Source B are both about the care of the sick.\n\nCompare:\n• what the writers say about the problems in caring for the sick\n• how they get their ideas across.\n\nUse evidence from both texts, and make clear which text each point comes from. [10]`,
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'comparison',
            extract: `Source A:\n${HEALTH_SOURCE_A}\n\nSource B:\n${HEALTH_SOURCE_B}`,
            extractSource: `Source A: ${HEALTH_SOURCE_A_REF} | Source B: ${HEALTH_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 8-9': `Both writers argue that the sick are let down by the system meant to care for them, and both are careful not to blame the people who do the caring; they differ in what they see as the cause and in how they present it.\n\nThe writer of Source A describes a service overwhelmed by demand and short of resources. A woman waits "nineteen hours on a trolley in a corridor because there were no beds", and a doctor has worked "thirty consecutive hours". The cause, the writer says, is political: the shortages are "political choices disguised as unfortunate circumstances". Nightingale, in Source B, describes suffering caused by ignorance and the neglect of simple things, "the want of fresh air, or of light, or of warmth, or of quiet, or of cleanliness". For her the problem is above all ignorance: "the very elements of nursing are all but unknown".\n\nBoth defend the workers. Source A insists that "These are not failures of individual commitment", and describes staff "working with a ferocity of purpose". Nightingale writes "I do not mean that the nurse is always to blame", and points instead to "Bad sanitary, bad architectural, and bad administrative arrangements". Both therefore blame the system, but Source A blames those who fund it, while Nightingale blames those who build and run hospitals and homes, and a whole society's misunderstanding of what nursing is.\n\nTheir methods differ. The writer of Source A uses the methods of journalism: a personal account ("I spent three months embedded in A&E departments"), three named cities, precise figures, and emotive metaphors such as "a slow, systemic suffocation". Nightingale writes with the authority of "the experienced observer" and the manner of a book of instruction. She deals in general truths, with repeated structures ("If a patient is cold, if a patient is feverish, if a patient is faint") and a definition of what nursing "ought to signify". Her examples are symptoms anyone would recognise, not named patients.\n\nTheir tones differ too. Source A is angry and urgent, and ends with a challenge: "until we name them honestly, nothing will change". Nightingale is calm and authoritative until her final sentence, which is bitterly ironic: nursing "as now practised" seems "expressly constituted to unmake" what God made disease to be. Source A wants its readers to demand political change; Nightingale wants hers to change how they care for the sick.`,
            },
            markScheme: {
              'How it is marked (10 marks)': Q1_6_MARKING,
              'Points you might make': [
                `Causes: shortages that are "political choices" (Source A); ignorance and neglect of simple things such as fresh air and cleanliness (Source B).`,
                `Both defend the workers: "These are not failures of individual commitment" (Source A); "I do not mean that the nurse is always to blame" (Source B).`,
                'Methods: personal reporting, named cities, figures and emotive metaphor (Source A); general truths, repeated structures and definitions from an experienced observer (Source B).',
                'Tone: angry and urgent, ending in a challenge (Source A); calm and authoritative, ending in bitter irony (Source B).',
                'Purpose: political change (Source A); a change in how readers care for the sick (Source B).',
              ],
            },
          },
        ],
      },
      {
        id: 'wjec-c2-06-writing',
        title: 'Section B: Writing',
        description: SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-06-q7',
            questionNumber: 1,
            label: '2.1',
            questionText: `Your school is producing a health booklet for teenagers.\n\nWrite an article for the booklet explaining why looking after your mental health is just as important as looking after your physical health. [20]`,
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Healthy body, healthy mind: why both matter\n\nIf you twisted your ankle on the football pitch, you would not hesitate to tell someone. You would rest it, perhaps see a doctor, and nobody would think any less of you. So why do so many of us keep quiet when it is our minds, rather than our bodies, that are hurting?\n\nMental health simply means how we think, feel and cope with everyday life. Like physical health, everyone has it, and like physical health, it can be good on some days and poor on others. Feeling stressed before an exam, or low after an argument with a friend, is a normal part of being human. The problems start when those feelings last for weeks, or begin to stop us doing the things we enjoy.\n\nLooking after your mind matters for the same reasons as looking after your body. When we feel calm and well, we sleep better, concentrate better in lessons and get on better with the people around us. When we are struggling, everything becomes harder, from getting out of bed to finishing homework. In fact, the two kinds of health are closely linked. Regular exercise can lift your mood, and a good night's sleep can make problems seem smaller. Equally, worry and stress can leave you feeling tired or unwell.\n\nSo what can you do? Small habits make a big difference. Get outside and move, even if it is only a walk with a friend. Try to keep a regular bedtime, and leave your phone outside your bedroom. Make time for the things you enjoy, whether that is music, art or simply laughing with friends. Above all, talk. Sharing a worry with someone you trust, a friend, a parent, a teacher or the school counsellor, can make it feel much lighter.\n\nAnd if you ever feel that things are getting too much, ask for help, just as you would with an injury. Your GP and the school's pastoral team are there to support you, and asking for help is a sign of strength, not weakness.\n\nYou only get one body and one mind. Both deserve looking after.`,
            },
            markScheme: {
              'How it is marked (20 marks)': WRITING_MARKING,
              'What earns marks in this task': [
                'The features of an informative article: a heading, an opening that engages teenage readers, and paragraphs that explain clearly.',
                'A warm, reassuring tone that suits teenagers, informative without lecturing.',
                'Explanation developed with reasons and practical examples, including where to find help.',
                'Accurate spelling, punctuation and grammar, with varied sentences and well-chosen words: 8 of the 20 marks are for this.',
              ],
            },
          },
          {
            id: 'wjec-c2-06-q8',
            questionNumber: 2,
            label: '2.2',
            questionText: `"The government should make physical exercise compulsory for all citizens."\n\nWrite a speech for a debate giving your views on this statement. [20]`,
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Good afternoon, ladies and gentlemen.\n\nNobody in this room doubts that exercise is good for us. It strengthens our hearts, lifts our mood and helps us live longer. If a pill could do all that, we would all be queuing up for it. So it may surprise you that I am speaking against this motion. I believe that exercise should be encouraged, supported and made easier, but it should never be made compulsory.\n\nFirst, ask yourself how it would work. Would the government send inspectors to check that we had been for our daily jog? Would there be fines for people who missed a session, or tracking devices on every wrist? A law that cannot be enforced is pointless, and a law that can be enforced only by watching every citizen is frightening. In a free country, what we do with our own bodies in our own time should be our own choice.\n\nSecond, think about fairness. Not everyone can exercise in the same way. Some people have disabilities or long-term illnesses. Others work two jobs, or care for children or elderly parents, and have barely a spare minute in the day. A rule that treats them all the same would punish the people who already find life hardest.\n\nThird, compulsion would not work. Think back to being made to run round a muddy field in the rain. Did it make you love running? For most of us, being forced to do something is the quickest way to start hating it. If we want people to exercise for life, they need to enjoy it.\n\nSo what should the government do instead? It should make exercise easy, cheap and fun. Keep sports centres and swimming pools open. Build safe cycle paths and light our parks in winter. Offer free classes for people who have never tried yoga or dancing or football. Make the healthy choice the easy choice, and people will make it.\n\nExercise is a wonderful thing. That is exactly why it should be a gift we choose, not a duty we are ordered to perform.\n\nI urge you to oppose the motion. Thank you.`,
            },
            markScheme: {
              'How it is marked (20 marks)': WRITING_MARKING,
              'What earns marks in this task': [
                'The features of a debate speech: a greeting, a clear statement of your view on the motion, direct address and questions, and a strong closing appeal.',
                'A confident, persuasive tone that suits a debating audience.',
                'A clear view, developed with reasons and examples, that deals with the strongest arguments on the other side.',
                'Accurate spelling, punctuation and grammar, with varied sentences and well-chosen words: 8 of the 20 marks are for this.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 07 - Environment
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c2-07',
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
        id: 'wjec-c2-07-reading',
        title: 'Section A: Reading',
        description: SECTION_A_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-07-q1',
            questionNumber: 1,
            label: '1.1',
            questionText: `Read Source A, the 21st-century text, and answer the questions below.\n\n(a) In which county is the beach that the writer had visited every year since childhood? [1]\n(b) According to the writer, by how much has the wildlife monitored in Wales declined, on average, since 1994? [1]\n(c) What has happened to Britain's rural hedgehogs since 2000? [1]`,
            marks: 3,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: `Source A:\n${ENV_SOURCE_A}\n\nSource B:\n${ENV_SOURCE_B}`,
            extractSource: `Source A: ${ENV_SOURCE_A_REF} | Source B: ${ENV_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': `(a) Pembrokeshire.\n(b) By a fifth.\n(c) They have halved.`,
            },
            markScheme: {
              'How it is marked (3 marks)': SHORT_A_MARKING,
              Answers: [
                '(a) Pembrokeshire.',
                '(b) By a fifth (accept: 20%).',
                '(c) They have halved (accept: half of them have gone).',
              ],
            },
          },
          {
            id: 'wjec-c2-07-q2',
            questionNumber: 2,
            label: '1.2',
            questionText: `Source A is a magazine article about the natural world. The writer wants to make readers concerned about the damage being done to the environment.\n\nHow does the writer try to do this?\n\nIn your answer, comment on:\n• what the writer says\n• the writer's choice of language and tone\n• how the article is structured, and any other methods the writer uses.\n\n[10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${ENV_SOURCE_A}`,
            extractSource: ENV_SOURCE_A_REF,
            modelAnswers: {
              'Grade 8-9': `The writer begins with a personal memory rather than a fact, which draws the reader in emotionally. He returns to a beach in Pembrokeshire "that I had visited every year since childhood", and the picture of the boy "cataloguing crabs and anemones with the obsessive precision of a seven-year-old naturalist" is affectionate and slightly comic, so the loss that follows hurts all the more. The rock pools "were empty", and the next three fragments, "Not depleted. Not diminished. Empty.", reject the softer words one by one before repeating the plain one. The structure forces the reader to face the worst. The writer then contrasts what was there, seaweed draped "in glistening curtains of brown and green", with what is left: water that "should have been beautiful but was, in fact, terrifying". The phrase "the clarity of absence" captures the shock of seeing clearly only because nothing is left.\n\nThe second paragraph changes method to evidence: Welsh wildlife has declined "by a fifth", "One in six Welsh species" is at risk, and rural hedgehogs "have halved since 2000". The writer is honest about the weakness of figures, which "become abstract", and the sentence "abstraction is the enemy of action" explains why he does not rely on them. He makes the point "concrete" with a sound the reader can imagine: "the dawn chorus in my village is quieter". The fragments "Not metaphorically. Measurably. Quantifiably." insist that this is fact, not poetry. The long final sentence links cause to cause with the repeated "because": there are fewer birds "because there are fewer insects, because we have poisoned the soil and paved the meadows and called it progress". Ending on "called it progress" is bitterly ironic, since it exposes damage done in the name of improvement.\n\nThe last paragraph widens the argument to everyone through the inclusive "We". The writer rejects the idea of the environment as "a resource to be managed, a backdrop to human activity" with the blunt "It is not.", and the list "the ground beneath our feet, the air in our lungs, the food on our plates" makes nature part of our bodies and our daily lives. The short sentences "When it dies, we die. This is not ideology. It is biology." end with a stark warning, and the near-rhyme of "ideology" and "biology" makes the final point memorable: protecting nature is not a political opinion but a matter of survival.`,
            },
            markScheme: {
              'How it is marked (10 marks)': Q1_2_MARKING,
              'Points you might make': [
                `A personal memory opens the article: the boy "cataloguing crabs and anemones" makes the loss hurt more.`,
                `The fragments "Not depleted. Not diminished. Empty." reject softer words; "the clarity of absence" captures the shock.`,
                `Evidence ("declined by a fifth, on average, since 1994"; "One in six Welsh species"), then honesty about figures: "abstraction is the enemy of action".`,
                `The concrete example of "the dawn chorus in my village" and the chain of causes linked by "because", ending ironically on "called it progress".`,
                `The inclusive "We", the list "the ground beneath our feet, the air in our lungs, the food on our plates", and the stark ending "It is biology."`,
              ],
            },
          },
          {
            id: 'wjec-c2-07-q3',
            questionNumber: 3,
            label: '1.3',
            questionText: `Read Source B, the 19th-century text, and answer the questions below.\n\n(Source B is from a letter Ruskin addressed to working men in 1871. "Vitiate" means spoil or make impure; "effluvia" and "miasmata" are foul and poisonous vapours, then thought to spread disease; "German and French" refers to the Franco-Prussian War of 1870 to 1871; Demeter is the Greek goddess of the harvest, and Tisiphone is one of the Furies, who avenged murder.)\n\n(a) Name the three things that Ruskin says heaven gives his readers. [1]\n(b) What does Ruskin mean when he calls towns "laboratories for the distillation into heaven of venomous smokes and smells"? [1]\n(c) According to Ruskin, what could the rivers of England be like if people looked after them? Give one detail. [1]`,
            marks: 3,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: `Source B:\n${ENV_SOURCE_B}`,
            extractSource: ENV_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5': `(a) Pure air, water and earth.\n(b) The towns send poisonous smoke and smells up into the sky, so they pollute the air.\n(c) They could be as pure as crystal.`,
            },
            markScheme: {
              'How it is marked (3 marks)': SHORT_B_MARKING,
              Answers: [
                '(a) Pure air, water and earth (all three are needed for the mark).',
                '(b) The towns pour poisonous smoke and smells into the air, as if they existed to make poison (accept: towns pollute the sky).',
                '(c) Any one of: as pure as crystal; beautiful, with waterfalls, lakes and pools; so full of fish that you could catch them with your hands.',
              ],
            },
          },
          {
            id: 'wjec-c2-07-q4',
            questionNumber: 4,
            label: '1.4',
            questionText: `Read Source B again.\n\nA student said: ‘Ruskin is more interested in blaming his readers than in showing them what they could do.’\n\nHow far do you agree with this view?\n\nIn your answer, give your own view of how Ruskin presents his readers and their power over nature across the whole text, and explain how his choices of words and details create that view. Support your answer with references to the text. [10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'evaluation',
            extract: `Source B:\n${ENV_SOURCE_B}`,
            extractSource: ENV_SOURCE_B_REF,
            modelAnswers: {
              'Grade 8-9': `I disagree with this view, although it is easy to see why a reader might hold it. Ruskin's blame is fierce and memorable, but the passage is built on a contrast between what his readers have done and what they could do, and the possibilities he describes are as vivid as the damage.\n\nThe structure itself is balanced. For each of "Pure Air, Water, and Earth", Ruskin sets out the reader's power, and he makes clear from the start that it cuts both ways: "You can destroy them at your pleasure, or increase, almost without limit, the available qualities of them." The word "or" offers a real choice.\n\nIt is true that his account of the air is mostly accusation. "You can vitiate" and "You might easily vitiate" pile up the charges, and the war is described in grotesque terms, "changing men, horses, and garden-stuff into noxious gas". His most striking image presents towns as "horrible nests" and "laboratories for the distillation into heaven of venomous smokes and smells", where the word "heaven" makes the pollution seem almost a sacrilege. Here the statement seems right.\n\nBut he turns at once, with "On the other hand", to the reader's "power of purifying the air", which "is literally infinite". He lists practical actions, "dealing properly and swiftly with all substances in corruption", "absolutely forbidding noxious manufactures", "planting in all soils the trees which cleanse", and ends with a startling promise: "You might make every breath of air you draw, food." This is not blame but a vision of what could be.\n\nThe paragraph on water has the same balance, and here the hopeful side comes first and is richer. The rivers could be "as pure as the crystal of the rock; beautiful in falls, in lakes, in living pools", and "so full of fish that you might take them out with your hands". Only then does he return to the present, in which every river is becoming "a common sewer", so that a baby cannot be baptised "but with filth".\n\nThe final paragraphs are the bleakest. The earth, "meant to be nourishing for you, and blossoming", has been turned from "Mother-Earth" into "Avenger-Earth", and the closing sentence sums up "what you have done". So the passage does end on blame. Yet the force of that ending depends on the hopes raised earlier: Ruskin blames his readers so bitterly because he believes they could do so much better.`,
            },
            markScheme: {
              'How it is marked (10 marks)': Q1_4_MARKING,
              'Points you might make': [
                `The passage is built on a choice: "You can destroy them at your pleasure, or increase, almost without limit, the available qualities of them."`,
                `The air paragraph accuses ("You can vitiate"; "horrible nests"; "venomous smokes and smells"), which supports the statement.`,
                `"On the other hand" turns to a power that "is literally infinite", with practical remedies and the promise "You might make every breath of air you draw, food."`,
                `The rivers could be "as pure as the crystal of the rock", before the blame returns ("a common sewer").`,
                `The ending is bleak ("Avenger-Earth"; "what you have done"), but its force depends on the hopes raised before it.`,
                'A strong answer reaches a judgement on the statement and keeps to it through the whole passage.',
              ],
            },
          },
          {
            id: 'wjec-c2-07-q5',
            questionNumber: 5,
            label: '1.5',
            questionText: `Bring together details from both texts to explain briefly what damage each writer says has been done to the natural world. Make clear which text each detail comes from. [4]`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'summary',
            extract: `Source A:\n${ENV_SOURCE_A}\n\nSource B:\n${ENV_SOURCE_B}`,
            extractSource: `Source A: ${ENV_SOURCE_A_REF} | Source B: ${ENV_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': `In Source A, the rock pools on a Pembrokeshire beach "were empty", the wildlife monitored in Wales has "declined by a fifth", and there are fewer birds "because we have poisoned the soil and paved the meadows". In Source B, Ruskin says that the air is poisoned by "foul chemical exhalations" from the towns and by war, the rivers are being turned into "a common sewer", and the earth has been changed from a mother into an avenger.`,
            },
            markScheme: {
              'How it is marked (4 marks)': Q1_5_MARKING,
              'Details you might bring together': [
                'Source A: empty rock pools and vanished seaweed; Welsh wildlife down by a fifth, one in six Welsh species at risk and half the rural hedgehogs gone; fewer birds and insects; poisoned soil and paved meadows.',
                'Source B: air poisoned by chemical fumes, town smoke and the dead of war; rivers made into sewers; an earth made deadly instead of nourishing.',
              ],
            },
          },
          {
            id: 'wjec-c2-07-q6',
            questionNumber: 6,
            label: '1.6',
            questionText: `Source A and Source B are both about the damage people do to the natural world.\n\nCompare:\n• what the writers say about this damage and who is responsible for it\n• how they get their ideas across.\n\nUse evidence from both texts, and make clear which text each point comes from. [10]`,
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'comparison',
            extract: `Source A:\n${ENV_SOURCE_A}\n\nSource B:\n${ENV_SOURCE_B}`,
            extractSource: `Source A: ${ENV_SOURCE_A_REF} | Source B: ${ENV_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 8-9': `Both writers are alarmed by the harm people have done to the natural world, and both insist that the reader shares the blame, but the writer of Source A mourns a loss he has witnessed, while Ruskin, in Source B, lectures his readers on their power to destroy or to heal.\n\nWhat they describe is similar. The writer of Source A sees empty rock pools, lost insects and a quieter dawn chorus, and blames the fact that "we have poisoned the soil and paved the meadows and called it progress". Ruskin describes air poisoned by "foul chemical exhalations", rivers turned into "a common sewer", and an earth made deadly. Even their lists are alike: Source A's "the ground beneath our feet, the air in our lungs, the food on our plates" recalls Ruskin's three elements, "Pure Air, Water, and Earth".\n\nBoth hold the reader responsible, but in different ways. Source A uses the inclusive "we", so the writer shares the guilt: it is "we" who "speak of the environment as though it were something separate from us". Ruskin uses "you" relentlessly, standing apart from his readers and accusing them: "You can vitiate the air"; "you have turned the Mother-Earth, Demeter, into the Avenger-Earth". Ruskin also offers more hope. He insists that their "power of purifying the air ... is literally infinite", and imagines rivers "so full of fish that you might take them out with your hands". Source A offers no remedy, and its last paragraph is a warning: "When it dies, we die."\n\nTheir methods reflect their times and purposes. Source A combines personal memory, the boy "cataloguing crabs and anemones", with modern scientific evidence such as "One in six Welsh species is now at risk of extinction", and short, emphatic fragments: "Not depleted. Not diminished. Empty." Ruskin uses no figures at all. He argues through long, rhythmic sentences, through religious and classical references, such as the baby who cannot be baptised and the Fury Tisiphone, and through grotesque images like towns as "laboratories for the distillation into heaven of venomous smokes and smells".\n\nThe tone of Source A is grief turning to warning; Ruskin's is moral outrage. The modern writer wants readers to feel the loss and act; Ruskin wants them to see that they have chosen destruction when they could have chosen life.`,
            },
            markScheme: {
              'How it is marked (10 marks)': Q1_6_MARKING,
              'Points you might make': [
                'Both describe damage to land, air and living things: lost wildlife and poisoned soil (Source A); poisoned air, sewers for rivers, a deadly earth (Source B).',
                `Responsibility: the inclusive "we", which shares the guilt (Source A); the accusing "you" (Source B).`,
                `Hope: none offered in Source A, whose last paragraph warns "When it dies, we die."; an "infinite" power to heal in Source B.`,
                'Methods: memory, scientific figures and short fragments (Source A); long rhythmic sentences, allusion and grotesque imagery (Source B).',
                'Tone: grief and warning (Source A); moral outrage (Source B).',
              ],
            },
          },
        ],
      },
      {
        id: 'wjec-c2-07-writing',
        title: 'Section B: Writing',
        description: SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-07-q7',
            questionNumber: 1,
            label: '2.1',
            questionText: `Your local council is planning to build new houses on green belt land near your school.\n\nWrite a letter to the council giving your views on this plan. [20]`,
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Dear Councillors,\n\nI am writing about the council's plan to build new houses on the green belt land beside Oak Lane, next to my school. I am in Year 11 there, and I would like to explain why I believe this plan should be reconsidered.\n\nLet me say first that I understand why the council wants more homes. Young families in our town struggle to find somewhere they can afford, and some of my friends' older brothers and sisters have had to move away. Building new houses is important. My objection is not to the houses, but to where you propose to put them.\n\nThe fields beside Oak Lane are not empty land waiting to be used. They are home to hedgerows, ponds and old trees, and to the birds, insects and small animals that depend on them. Our science classes visit them to study wildlife, and many local people walk there every day. Once a field is covered with concrete, it can never be returned to nature. A decision made in one council meeting would last for centuries.\n\nThere are practical problems too. Oak Lane is already crowded at the start and end of every school day. Hundreds of new homes would bring hundreds more cars onto a narrow road where children walk to school. The fields also soak up rain after storms; if they are built over, the risk of flooding in the streets below may grow.\n\nThere is a better alternative. Our town has several empty sites where buildings once stood, including the old factory on Station Road and the land behind the closed garage. Building there would provide the homes we need, clear eyesores from the town centre, and leave the green belt untouched. It may cost more at first, but it would protect something that money cannot buy back.\n\nI hope that you will think again, and look first at the land we have already used. Please protect the fields for the people, and the wildlife, who will need them long after all of us.\n\nYours faithfully,\n\nSam Price`,
            },
            markScheme: {
              'How it is marked (20 marks)': WRITING_MARKING,
              'What earns marks in this task': [
                'The features of a formal letter: a greeting, a clear statement of why you are writing, paragraphs, and a suitable sign-off.',
                'A formal, reasonable tone for councillors, which acknowledges the need for housing.',
                'A clear view, developed with reasons and local detail, and a practical alternative.',
                'Accurate spelling, punctuation and grammar, with varied sentences and well-chosen words: 8 of the 20 marks are for this.',
              ],
            },
          },
          {
            id: 'wjec-c2-07-q8',
            questionNumber: 2,
            label: '2.2',
            questionText: `"Young people care more about the environment than any previous generation, yet they are the least willing to make personal sacrifices to protect it."\n\nWrite an article for a newspaper giving your views on this statement. [20]`,
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `All talk and no action? Young people and the planet\n\nAsk a group of teenagers what worries them most about the future, and the environment will come near the top of the list. We have grown up with news of melting ice and burning forests, and many of us have marched, signed petitions and lectured our parents about recycling. So the claim that we are unwilling to make sacrifices stings. Is it fair?\n\nIn part, perhaps it is. Many of us want the latest phone every year and order clothes online that we wear once. Fast fashion and endless gadgets have a real cost to the planet, and young people are some of their keenest customers. It is easy to share a post about climate change; it is harder to give up something we enjoy.\n\nBut the statement is unfair in two important ways. First, it ignores how many young people are already changing their habits. In my year group, more and more students have stopped eating meat, buy second-hand clothes or walk to school instead of asking for a lift. These may be small choices, but they are made every day.\n\nSecond, it forgets how little power most young people have. We do not decide how our homes are heated, how far our parents drive to work, or whether the bus to town runs more than twice a day. The biggest sacrifices needed to protect the environment, changing how we produce energy and grow food, are decisions for governments and businesses, run largely by older generations. It seems odd to blame teenagers for not sacrificing things they do not control.\n\nThe truth is that every generation finds it hard to give things up. The difference is that ours has to live with the consequences for longest. That is a powerful reason to act, and I believe most of us know it.\n\nSo here is a challenge to young and old alike. Let us stop arguing about which generation cares more, and start asking what each of us can do. Young people can buy less and waste less. Adults can vote, invest and lead. The planet does not need our blame. It needs our effort, from all of us, starting now.`,
            },
            markScheme: {
              'How it is marked (20 marks)': WRITING_MARKING,
              'What earns marks in this task': [
                'The features of a newspaper article: a headline, an engaging opening, and paragraphs that develop an argument to a clear ending.',
                'A tone that suits newspaper readers of all ages: thoughtful and persuasive.',
                'A clear view on both halves of the statement, developed with reasons and examples, perhaps agreeing in part.',
                'Accurate spelling, punctuation and grammar, with varied sentences and well-chosen words: 8 of the 20 marks are for this.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 08 - Work & Industry
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c2-08',
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
        id: 'wjec-c2-08-reading',
        title: 'Section A: Reading',
        description: SECTION_A_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-08-q1',
            questionNumber: 1,
            label: '1.1',
            questionText: `Read Source A, the 21st-century text, and answer the questions below.\n\n(a) How long did the writer work as a delivery rider? [1]\n(b) How much did the writer's fellow riders earn on average, after expenses? [1]\n(c) What happened to a rider whose score fell below 4.5? [1]`,
            marks: 3,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: `Source A:\n${WORK_SOURCE_A}\n\nSource B:\n${WORK_SOURCE_B}`,
            extractSource: `Source A: ${WORK_SOURCE_A_REF} | Source B: ${WORK_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': `(a) Six months.\n(b) £4.80 an hour.\n(c) They were given fewer deliveries.`,
            },
            markScheme: {
              'How it is marked (3 marks)': SHORT_A_MARKING,
              Answers: [
                '(a) Six months.',
                '(b) £4.80 an hour.',
                '(c) They were given fewer deliveries (accept: they earned less money).',
              ],
            },
          },
          {
            id: 'wjec-c2-08-q2',
            questionNumber: 2,
            label: '1.2',
            questionText: `Source A is a newspaper article about the gig economy. The writer wants to persuade readers that this way of working exploits the people who do it.\n\nHow does the writer try to do this?\n\nIn your answer, comment on:\n• what the writer says\n• the writer's choice of language and tone\n• how the article is structured, and any other methods the writer uses.\n\n[10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${WORK_SOURCE_A}`,
            extractSource: WORK_SOURCE_A_REF,
            modelAnswers: {
              'Grade 8-9': `The writer opens by setting up a promise in order to knock it down. "The gig economy was supposed to set us free" sounds hopeful, but "was supposed to" already signals disappointment, and the casual "anyway" shows the writer's scepticism. The list "be your own boss, set your own hours, work from anywhere" imitates the slogans of advertising, and the metaphor in "Silicon Valley sold us a vision of liberation, and millions of us bought it" presents freedom as a product that workers were sold. The turn comes with "But": freedom "looks remarkably like exploitation when you strip away the branding". The word "branding" suggests that the freedom was only ever a marketing image.\n\nThe second paragraph gives the argument the authority of experience: "I spent six months working as a delivery rider for three different apps simultaneously". The bleak, precise setting, "at eleven o'clock on a rainy Tuesday night", leads to a blunt verdict: "it looks like desperation." The writer's description of the other riders, repeating "mostly" three times, shows who is exploited: people "without the language skills or legal status to demand anything better", which suggests that the system depends on workers who cannot fight back. The figure "£4.80 an hour after expenses" is followed by four short fragments, "No sick pay. No holiday pay. No pension. No protection of any kind.", whose repeated "No" sounds like a list of things taken away. The contrast between "the terminology of the platform", which calls riders "independent contractors", and "the terminology of reality", in which they are "disposable", exposes the company's language as a disguise.\n\nThe final paragraph shows how the control works. The app "tracked our every movement" and "measured our speed, our acceptance rate, our customer ratings", a list that makes the rider seem watched at every moment. The writer then builds a chain in which each sentence picks up the end of the one before: "A score below 4.5 meant fewer deliveries. Fewer deliveries meant less money. Less money meant accepting every order". This structure makes the trap feel inescapable. The repeated "no matter how far, no matter how dangerous the route" leads to vivid danger: "the rain was horizontal and the streets were black with ice". The conclusion is a sharp antithesis: "This is not flexibility. It is algorithmic control with a smiley-face interface." The childish "smiley-face" mocks the friendly appearance that hides the control, and ends the article on the idea it began with: the image is a lie.`,
            },
            markScheme: {
              'How it is marked (10 marks)': Q1_2_MARKING,
              'Points you might make': [
                `The promise is set up to be knocked down: "was supposed to set us free"; the slogan-like list; "sold us a vision of liberation"; "strip away the branding".`,
                `Experience as authority ("I spent six months working as a delivery rider"), a bleak setting, and the verdict "it looks like desperation."`,
                `The repeated "mostly" shows who is exploited; the fragments "No sick pay. No holiday pay. No pension." list what is missing.`,
                `The contrast between "independent contractors" and "disposable" exposes the platform's language.`,
                `The chain "A score below 4.5 meant fewer deliveries. Fewer deliveries meant less money" makes the trap inescapable.`,
                `The antithesis "This is not flexibility" and the mocking "smiley-face interface" end the argument.`,
              ],
            },
          },
          {
            id: 'wjec-c2-08-q3',
            questionNumber: 3,
            label: '1.3',
            questionText: `Read Source B, the 19th-century text, and answer the questions below.\n\n(Engels is summarising the evidence gathered by the Children's Employment Commission, whose report on the mines was published in 1842. "Iron-stone" is iron ore; "tubs" are boxes for carrying coal or ore; "stupefying" means dulling the mind.)\n\n(a) How old were the youngest children employed in the mines? [1]\n(b) What job were the smallest children usually given? [1]\n(c) According to Engels, what sometimes happens to the children on their way home? [1]`,
            marks: 3,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: `Source B:\n${WORK_SOURCE_B}`,
            extractSource: WORK_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5': `(a) Four years old.\n(b) Watching the doors, opening and shutting them.\n(c) They lie down and fall asleep on the road, where their parents find them late at night.`,
            },
            markScheme: {
              'How it is marked (3 marks)': SHORT_B_MARKING,
              Answers: [
                '(a) Four (accept: four, five and seven).',
                '(b) Watching the doors, and opening and shutting them for the workers and the coal.',
                '(c) They lie down and fall asleep on the road (accept: their parents find them asleep on the road late at night).',
              ],
            },
          },
          {
            id: 'wjec-c2-08-q4',
            questionNumber: 4,
            label: '1.4',
            questionText: `Read Source B again.\n\nA student said: ‘Engels shows the children's suffering through cold facts rather than through emotion.’\n\nHow far do you agree with this view?\n\nIn your answer, give your own view of how Engels presents the children and their work across the whole text, and explain how his choices of words and details create that view. Support your answer with references to the text. [10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'evaluation',
            extract: `Source B:\n${WORK_SOURCE_B}`,
            extractSource: WORK_SOURCE_B_REF,
            modelAnswers: {
              'Grade 8-9': `I agree with much of this view. Engels writes mainly as a reporter of evidence, and his facts carry most of the force, but at key moments his language becomes openly emotive, and his final images appeal strongly to the reader's feelings.\n\nThe opening is factual and almost clinical. Children "of four, five, and seven years are employed", and the plain list of ages lets the reader feel the shock without being told to. He then explains the work step by step: they carry "the ore or coal loosened by the miner" and open and shut the doors "which separate the divisions of the mine and regulate its ventilation". The bracketed explanation is the language of a report, not of protest.\n\nHowever, his description of the door-watchers is more emotional. The smallest children pass "twelve hours daily, in the dark, alone", and the short phrases separated by commas slow the sentence down, as if to make the reader sit through those hours with them. The words "stupefying, brutalising tedium of doing nothing" are clearly a judgement: "brutalising" suggests that the work turns children into something less than human.\n\nThe account of the heavy work returns to detail, but the detail is chosen to make the reader wince. The tubs are "without wheels", shoved "over the uneven floor of the mine; often over moist clay, or through water", along paths "so low-roofed that the workers are forced to creep on hands and knees". A working day of "eleven to twelve hours", reaching fourteen in Scotland, with double shifts of "twenty-four, and even thirty-six hours at a stretch", shocks precisely because it is stated so plainly, and "Set times for meals are almost unknown" adds a final hardship.\n\nAfter the cut, Engels's judgement becomes open. The children "all complain of being over-tired", and he states that "Even in the most recklessly conducted industrial establishments there is no such universal and exaggerated overwork". He stresses that the evidence is overwhelming: "The whole report proves this". His last examples are the most moving in the passage: children "throw themselves down on the stone hearth or the floor as soon as they reach home", "have to be washed and put to bed while asleep", and are sometimes "found by their parents late at night asleep on the road". These details are facts, but they are chosen for their pathos.\n\nSo the statement is largely right, in that Engels lets the facts speak; but the facts he selects, and the few strong words he adds, are meant to move the reader as well as to inform.`,
            },
            markScheme: {
              'How it is marked (10 marks)': Q1_4_MARKING,
              'Points you might make': [
                `Facts first: the ages "of four, five, and seven years", and the bracketed, report-like explanation of the doors.`,
                `Emotion breaks in: "twelve hours daily, in the dark, alone" slows the reader down; "stupefying, brutalising tedium" is a judgement.`,
                `Physical detail chosen to make the reader wince: tubs "without wheels", paths so low that workers "creep on hands and knees".`,
                `Plainly stated extremes ("thirty-six hours at a stretch"; "Set times for meals are almost unknown") shock through understatement.`,
                `The open judgement ("no such universal and exaggerated overwork") and the moving final images of children asleep "on the road".`,
                'A strong answer reaches a judgement on the statement and keeps to it through the whole passage.',
              ],
            },
          },
          {
            id: 'wjec-c2-08-q5',
            questionNumber: 5,
            label: '1.5',
            questionText: `Bring together details from both texts to explain briefly what the working conditions are like for the workers each writer describes. Make clear which text each detail comes from. [4]`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'summary',
            extract: `Source A:\n${WORK_SOURCE_A}\n\nSource B:\n${WORK_SOURCE_B}`,
            extractSource: `Source A: ${WORK_SOURCE_A_REF} | Source B: ${WORK_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': `In Source A, delivery riders earn "an average of £4.80 an hour after expenses", with "No sick pay" or holiday pay; an app tracks them, and they must accept every order, even when "the streets were black with ice". In Source B, children as young as four work in the mines, some sitting "twelve hours daily, in the dark, alone", others pushing heavy tubs on "hands and knees", in days of "eleven to twelve hours, often longer", with no set times for meals.`,
            },
            markScheme: {
              'How it is marked (4 marks)': Q1_5_MARKING,
              'Details you might bring together': [
                'Source A: very low pay; no sick pay, holiday pay, pension or protection; constant tracking and ratings; every order accepted, however far or dangerous, in rain and ice.',
                'Source B: children from four years old; twelve hours alone in the dark; heavy tubs pushed on hands and knees through water and clay; days of eleven to twelve hours or far more; no set meal times; exhaustion.',
              ],
            },
          },
          {
            id: 'wjec-c2-08-q6',
            questionNumber: 6,
            label: '1.6',
            questionText: `Source A and Source B are both about workers who are exploited.\n\nCompare:\n• what the writers say about the workers and the way they are treated\n• how they get their ideas across.\n\nUse evidence from both texts, and make clear which text each point comes from. [10]`,
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'comparison',
            extract: `Source A:\n${WORK_SOURCE_A}\n\nSource B:\n${WORK_SOURCE_B}`,
            extractSource: `Source A: ${WORK_SOURCE_A_REF} | Source B: ${WORK_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 8-9': `Both writers expose work that drives people to exhaustion for little reward, and both suggest that it depends on workers too weak to resist. The writer of Source A, however, describes adults trapped by technology, while Engels, in Source B, describes children broken by physical labour.\n\nWhat they say about the workers is similar in some ways. In Source A the riders are "mostly young men, mostly from immigrant backgrounds", without the "legal status to demand anything better". In Source B the workers are children "of four, five, and seven years", and "older children and half-grown girls" are given the harder work of moving the tubs. In both, the workers are among the least able to refuse. Both texts also show work without limits: in Source A, accepting every order "no matter how far, no matter how dangerous the route"; in Source B, shifts of "twenty-four, and even thirty-six hours at a stretch", with meals eaten "when hunger and time permit".\n\nTheir accounts of control differ. In Source A the control is invisible and constant: the app "tracked our every movement", and the chain of sentences, "A score below 4.5 meant fewer deliveries. Fewer deliveries meant less money", shows how the ratings drive the riders on. In Source B the control is the work itself: shoving tubs "through paths so low-roofed that the workers are forced to creep on hands and knees" wears the children down until they "fall asleep at once without being able to take a bite of food".\n\nTheir methods differ too. The writer of Source A is a participant ("I spent six months working as a delivery rider") who uses irony and contrast: the promise "be your own boss" against the reality of "desperation", and "independent contractors" against "disposable". The tone is angry and sarcastic, ending with the mocking "smiley-face interface". Engels writes as the summariser of official evidence ("The whole report proves this"), in long, detailed sentences with few emotive words, though "stupefying, brutalising tedium" stands out. His most powerful moment is an image rather than an argument: children "found by their parents late at night asleep on the road".\n\nSo both writers want readers to see exploitation behind a respectable surface. Source A attacks the language of freedom that hides control, while Engels lets the facts of the report condemn the industry for him.`,
            },
            markScheme: {
              'How it is marked (10 marks)': Q1_6_MARKING,
              'Points you might make': [
                'Who is exploited: young men from immigrant backgrounds, without the language or legal status to demand better (Source A); young children and girls (Source B); in both, those least able to refuse.',
                `Work without limits in both: every order "no matter how dangerous" (Source A); shifts of "thirty-six hours at a stretch" (Source B).`,
                'Control: invisible tracking and ratings (Source A); the crushing physical work itself (Source B).',
                `Methods: first-hand experience, irony and contrast ("independent contractors" against "disposable") (Source A); a summary of official evidence, mostly plain, with a few strong words and moving images (Source B).`,
                'Tone: angry and sarcastic (Source A); restrained, letting facts condemn (Source B).',
              ],
            },
          },
        ],
      },
      {
        id: 'wjec-c2-08-writing',
        title: 'Section B: Writing',
        description: SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-08-q7',
            questionNumber: 1,
            label: '2.1',
            questionText: `Your school is holding a careers week.\n\nWrite an information sheet for Year 11 students giving advice on how to prepare for the world of work. [20]`,
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Ready for work? Your guide to getting started\n\nWhether you are planning to go to college, start an apprenticeship or look for a job next year, the world of work is closer than you think. The good news is that you can start preparing now. This sheet sets out five steps that will help you to make a confident start.\n\n1. Find out what you enjoy\nThink about the subjects, hobbies and tasks that you are good at and that you like doing. Do you enjoy solving problems, working with people or making things with your hands? Use the careers library and talk to the careers adviser, who can suggest jobs you may never have heard of.\n\n2. Get some experience\nEmployers value experience, and it does not have to be paid. Volunteering at a charity shop, helping at a sports club or taking on a Saturday job all show that you are reliable and willing to learn. They also help you to discover what you do and do not want to do.\n\n3. Write a strong CV\nA CV is a short summary of your skills, qualifications and experience. Keep it to one page, check the spelling carefully, and make sure that your email address sounds professional. Ask a teacher or a family member to read it through before you send it.\n\n4. Prepare for interviews\nAn interview is a chance for an employer to get to know you, and for you to find out about them. Research the organisation beforehand, think about how you would answer common questions, and prepare one or two questions of your own. On the day, arrive early, dress smartly and remember to smile.\n\n5. Build the skills every employer wants\nWhatever job you choose, some skills always matter: turning up on time, working well in a team, communicating clearly and keeping going when things are difficult. You can practise all of these at school, starting today.\n\nWhere to find help\nThe careers office is open every lunchtime in Room 12. You can book a one-to-one meeting with the careers adviser through your form tutor.\n\nYour future starts with small steps. Take the first one this week.`,
            },
            markScheme: {
              'How it is marked (20 marks)': WRITING_MARKING,
              'What earns marks in this task': [
                'The features of an information sheet: a title, an introduction, clear headings or numbered points, and where to find more help.',
                'A clear, encouraging tone suited to Year 11 students.',
                'Practical advice, each point explained and developed rather than simply listed.',
                'Accurate spelling, punctuation and grammar, with varied sentences and well-chosen words: 8 of the 20 marks are for this.',
              ],
            },
          },
          {
            id: 'wjec-c2-08-q8',
            questionNumber: 2,
            label: '2.2',
            questionText: `"Technology is destroying more jobs than it creates. Within twenty years, most people will be unable to find meaningful work."\n\nWrite a speech for a school debate giving your views on this statement. [20]`,
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Good morning, everyone.\n\nImagine walking into a supermarket where no one works. Machines take your money, robots stack the shelves, and a computer decides what is ordered. For some people, that picture proves the statement we are debating today. I want to argue that it does not. Technology is changing work, but it is not ending it.\n\nFirst, let us look at history. When machines first appeared in factories two hundred years ago, many workers feared that they would never work again. When computers arrived in offices, people predicted the end of clerical jobs. Each time, some jobs did disappear, and that was painful for the people who lost them. But each time, new kinds of work appeared that nobody had imagined. Your grandparents could not have dreamed of a job as a games designer, a wind turbine engineer or a social media manager.\n\nSecond, think about what machines cannot do. A computer can sort a thousand forms in a second, but it cannot comfort a frightened patient, inspire a class of pupils or calm an angry customer. The jobs that depend on care, creativity and human judgement are growing, not shrinking. As machines take over repetitive tasks, there may be more room for the kind of work that makes us feel useful.\n\nI accept that the change will not be easy. Some people will lose jobs they have done for years, and they will need help to train for new ones. That is a real challenge, and governments and employers must meet it. But a challenge is not a catastrophe.\n\nFinally, I want to question the word meaningful. Work is meaningful when it helps someone, solves a problem or makes something worth having. Technology does not take that away. Used well, it could free us from the dullest tasks and leave us more time for the work that matters.\n\nSo, will most of us be unable to find meaningful work in twenty years? I do not believe so. The future of work belongs to people who are willing to learn, and that includes everyone in this room.\n\nThank you.`,
            },
            markScheme: {
              'How it is marked (20 marks)': WRITING_MARKING,
              'What earns marks in this task': [
                'The features of a debate speech: a greeting, a clear position on the statement, direct address and rhetorical questions, and a strong ending.',
                'A confident, persuasive tone that suits a school audience.',
                'A clear view, developed with reasons and examples, that answers the strongest points on the other side.',
                'Accurate spelling, punctuation and grammar, with varied sentences and well-chosen words: 8 of the 20 marks are for this.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 09 - Immigration
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c2-09',
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
        id: 'wjec-c2-09-reading',
        title: 'Section A: Reading',
        description: SECTION_A_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-09-q1',
            questionNumber: 1,
            label: '1.1',
            questionText: `Read Source A, the 21st-century text, and answer the questions below.\n\n(a) In which year did the writer's parents come to Cardiff? [1]\n(b) What job had the writer's father done in Mogadishu? [1]\n(c) What does the writer's sister do now? [1]`,
            marks: 3,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: `Source A:\n${IMMIGRATION_SOURCE_A}\n\nSource B:\n${IMMIGRATION_SOURCE_B}`,
            extractSource: `Source A: ${IMMIGRATION_SOURCE_A_REF} | Source B: ${IMMIGRATION_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': `(a) 1998.\n(b) He was an engineer.\n(c) She is a GP.`,
            },
            markScheme: {
              'How it is marked (3 marks)': SHORT_A_MARKING,
              Answers: ['(a) 1998.', '(b) An engineer.', '(c) She is a GP (a family doctor).'],
            },
          },
          {
            id: 'wjec-c2-09-q2',
            questionNumber: 2,
            label: '1.2',
            questionText: `Source A is an online article about immigration. The writer wants to challenge negative attitudes towards immigrants.\n\nHow does the writer try to do this?\n\nIn your answer, comment on:\n• what the writer says\n• the writer's choice of language and tone\n• how the article is structured, and any other methods the writer uses.\n\n[10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${IMMIGRATION_SOURCE_A}`,
            extractSource: IMMIGRATION_SOURCE_A_REF,
            modelAnswers: {
              'Grade 8-9': `The writer begins with a family story rather than an argument, which makes immigration personal from the first line. "My parents came to Cardiff from Somalia in 1998" is plain and factual, and the list of what they brought, "two suitcases, three children under five, and a level of optimism", moves from the practical to the emotional, ending on the quality the article will celebrate. The writer's humour in calling that optimism "either extraordinary courage or magnificent delusion" stops the account from becoming sentimental. The details of the parents' lives are carefully chosen: an "engineer in Mogadishu" who "took a job washing dishes", and a former "teacher" who "cleaned offices from five until eight every morning". The contrast between the work they had done and the work they took shows how much they gave up, and challenges the idea that immigrants come to take advantage.\n\nThe second paragraph speaks directly to the reader: "I tell you this not to inspire pity". The aside "my parents would be mortified" shows the family's pride, and the writer states the central claim: "immigration is not an abstraction". A list of what it is not, "a policy debate or a newspaper headline or a statistic on a graph", is answered by one long, concrete image: "a human being standing in a kitchen at four in the morning, ironing a school uniform with hands that are raw from bleach". Details such as "four in the morning" and "raw from bleach" make the sacrifice physical, and the reason for it, "a conviction that borders on the irrational", makes it moving.\n\nThe final paragraph turns to proof. The writer prepares for it with "here is the thing that is almost never said in our increasingly toxic public discourse", which presents the claim as a brave truth, then delivers it in three short words: "they were right." Evidence follows in a run of short sentences: "I went to a comprehensive school, then to university, then to law school. My sister is a GP. My brother runs a construction company." The list "We pay our taxes, we vote, we volunteer, we argue about rugby" ends with a light, very Welsh touch that shows how fully the family belongs. The writer then sets these achievements against the "prevailing narrative", and the closing antithesis, "a problem to be solved rather than an asset to be celebrated", sums up the argument by turning the critics' language on its head.`,
            },
            markScheme: {
              'How it is marked (10 marks)': Q1_2_MARKING,
              'Points you might make': [
                `A family story makes immigration personal; humour ("extraordinary courage or magnificent delusion") avoids sentimentality.`,
                `Contrasts between the parents' old and new work ("engineer in Mogadishu" who "took a job washing dishes") show their sacrifice.`,
                `Direct address ("I tell you this not to inspire pity") and the claim "immigration is not an abstraction", followed by a list of what it is not.`,
                `The concrete image of a parent ironing "with hands that are raw from bleach" makes the sacrifice physical.`,
                `The build-up to "they were right.", then short sentences of evidence and the list ending "we argue about rugby".`,
                `The closing antithesis "a problem to be solved rather than an asset to be celebrated".`,
              ],
            },
          },
          {
            id: 'wjec-c2-09-q3',
            questionNumber: 3,
            label: '1.3',
            questionText: `Read Source B, the 19th-century text, and answer the questions below.\n\n(Engels is writing about Irish people who had come to work in the industrial towns of England. "Comfortlessness" means a lack of comfort; "mouldings" are decorative strips of wood; "betakes himself to" means turns to; "facile" here means easy-going.)\n\n(a) According to Engels, what does the Irishman use as a bed? [1]\n(b) What does Engels say the Irishman does when he runs out of fuel? [1]\n(c) In the sentence beginning "And since the poor devil must have one enjoyment", what reason does Engels give for the Irishman's drinking? [1]`,
            marks: 3,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: `Source B:\n${IMMIGRATION_SOURCE_B}`,
            extractSource: IMMIGRATION_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5': `(a) A heap of straw and a few rags.\n(b) He burns anything that will burn, even the chairs and the floorboards.\n(c) Society has shut him out of every other enjoyment.`,
            },
            markScheme: {
              'How it is marked (3 marks)': SHORT_B_MARKING,
              Answers: [
                '(a) A heap of straw and a few rags.',
                '(b) He burns anything he can reach that will burn, such as chairs, door-posts or the floor.',
                '(c) Society has shut him out of all other enjoyments, so drink is the only pleasure left to him.',
              ],
            },
          },
          {
            id: 'wjec-c2-09-q4',
            questionNumber: 4,
            label: '1.4',
            questionText: `Read Source B again.\n\nA student said: ‘Engels is less unkind to the Irish than he first seems, because in the end he blames society for their condition.’\n\nHow far do you agree with this view?\n\nIn your answer, give your own view of how Engels presents the Irish immigrants across the whole text, and explain how his choices of words and details create that view. Support your answer with references to the text. [10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'evaluation',
            extract: `Source B:\n${IMMIGRATION_SOURCE_B}`,
            extractSource: IMMIGRATION_SOURCE_B_REF,
            modelAnswers: {
              'Grade 8-9': `I only partly agree. Engels does end by blaming society, and that changes how we read the passage, but his contempt for the Irish is so strong and so sweeping that his final questions do not cancel it.\n\nFrom the first sentence his language is harsh. "The filth and comfortlessness that prevail in the houses themselves it is impossible to describe" opens with the word "filth", and the claim that it is beyond description makes it seem extreme. He then writes of "The Irishman" throughout, as though every Irish person were the same, and the stereotype is mocking: he is "unaccustomed to the presence of furniture", and "a heap of straw, a few rags, utterly beyond use as clothing, suffice for his nightly couch". The phrase "more he needs not" imitates the man's supposed contentment with almost nothing.\n\nEngels also blames the Irish for conditions in English towns. The question "Moreover, why should he need much room?" is sarcastic, and he claims that the custom of crowding "has been chiefly implanted by the Irish immigration". Here he seems unkind, not sympathetic.\n\nThe passage then turns: "And since the poor devil must have one enjoyment, and society has shut him out of all others". The phrase "poor devil" mixes pity with condescension, but the clause "society has shut him out of all others" puts the first real blame on society. Even so, Engels returns at once to his worst insults: drink is "the only thing which makes the Irishman's life worth having", he drinks "to the point of the most bestial drunkenness", and his "crudity" places him "but little above the savage". These are the most offensive words in the passage, and they come after the turn, not before it.\n\nThe ending supports the statement. The temptation "is great, he cannot resist it", and Engels asks, "What else should he do? How can society blame him when it places him in a position in which he almost of necessity becomes a drunkard". These questions make society responsible, and "almost of necessity" suggests that anyone in his position would behave the same way.\n\nSo Engels does finally blame society, which shows some sympathy. But a modern reader is likely to judge that the sympathy is limited by prejudice: he pities the Irishman as a victim while still calling him a "savage", and the generalising "The Irishman" stays in place to the very end.`,
            },
            markScheme: {
              'How it is marked (10 marks)': Q1_4_MARKING,
              'Points you might make': [
                `The harsh opening ("filth and comfortlessness") and the stereotype of "The Irishman", who needs only "a heap of straw".`,
                `Sarcasm ("why should he need much room?") and blame for the crowding of English towns.`,
                `The turn: "the poor devil" mixes pity and condescension; "society has shut him out of all others" is the first blame on society.`,
                `The worst insults ("the most bestial drunkenness"; "but little above the savage") come after that turn.`,
                `The closing questions ("How can society blame him") make society responsible: "almost of necessity".`,
                'A strong answer reaches a judgement, recognising both the sympathy and the prejudice, and keeps to it through the whole passage.',
              ],
            },
          },
          {
            id: 'wjec-c2-09-q5',
            questionNumber: 5,
            label: '1.5',
            questionText: `Bring together details from both texts to explain briefly what each writer tells you about the homes and daily lives of the immigrants they describe. Make clear which text each detail comes from. [4]`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'summary',
            extract: `Source A:\n${IMMIGRATION_SOURCE_A}\n\nSource B:\n${IMMIGRATION_SOURCE_B}`,
            extractSource: `Source A: ${IMMIGRATION_SOURCE_A_REF} | Source B: ${IMMIGRATION_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': `In Source A, the writer's parents arrived "with two suitcases" and three small children; the father washed dishes in a hotel, and the mother cleaned offices "from five until eight every morning" before taking the children to school. In Source B, Engels describes Irish immigrants living in filthy houses with almost no furniture, sleeping on "a heap of straw", crowding into a single room, and burning chairs and floorboards for fuel.`,
            },
            markScheme: {
              'How it is marked (4 marks)': Q1_5_MARKING,
              'Details you might bring together': [
                "Source A: few possessions on arrival; skilled parents in low-paid work, dish-washing and office cleaning, starting before dawn; ironing school uniforms at four in the morning; the children's later success.",
                'Source B: filthy houses with almost no furniture; straw and rags for a bed; one room for cooking, sleeping and living; furniture and floors burnt for fuel; heavy drinking.',
              ],
            },
          },
          {
            id: 'wjec-c2-09-q6',
            questionNumber: 6,
            label: '1.6',
            questionText: `Source A and Source B are both about immigrants and the way they are seen.\n\nCompare:\n• what the writers say about immigrants\n• how they get their ideas across.\n\nUse evidence from both texts, and make clear which text each point comes from. [10]`,
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'comparison',
            extract: `Source A:\n${IMMIGRATION_SOURCE_A}\n\nSource B:\n${IMMIGRATION_SOURCE_B}`,
            extractSource: `Source A: ${IMMIGRATION_SOURCE_A_REF} | Source B: ${IMMIGRATION_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 8-9': `The two texts present immigrants in almost opposite ways. The writer of Source A, the child of immigrants, presents them as hard-working, self-sacrificing and successful, while Engels, in Source B, an outsider observing the Irish in English towns, presents them through stereotypes of filth and drunkenness, although he finally blames society for their state.\n\nWhat they say about the immigrants' lives differs sharply. In Source A the parents are skilled people, an "engineer in Mogadishu" and a "teacher", who took humble jobs and worked tirelessly: the mother "cleaned offices from five until eight every morning". In Source B the Irishman lives amid "filth and comfortlessness", needs only "a heap of straw" for a bed, and drinks "to the point of the most bestial drunkenness". Source A shows immigrants bringing ambition; Source B claims that they brought "the custom of crowding many persons into a single room".\n\nTheir views of what immigrants mean for the country also differ. The writer of Source A argues that the family became "exactly the kind of citizens that any country would want": the writer went on to law school, a sister is a GP and a brother runs a construction company. Engels treats the Irish as a cause of decline in English towns. Yet both writers, in different ways, turn the blame on society. Source A attacks "our increasingly toxic public discourse" and a "prevailing narrative" that treats immigrants as "a problem to be solved". Engels asks "How can society blame him", arguing that it "has shut him out" of every pleasure but drink.\n\nTheir methods reflect their positions. Source A speaks from inside the experience, in the first person, with precise and intimate details ("hands that are raw from bleach") and warm humour ("we argue about rugby"). It addresses the reader directly ("I tell you this not to inspire pity") and builds to a strong antithesis. Engels writes from outside, generalising about "The Irishman" as a type, with sarcastic questions ("why should he need much room?") and contemptuous labels such as "little above the savage". His closing questions show sympathy, but it is the sympathy of someone who looks down on the people he describes.\n\nSo Source A sets out to challenge prejudice, while Source B, for all its criticism of society, is an example of it.`,
            },
            markScheme: {
              'How it is marked (10 marks)': Q1_6_MARKING,
              'Points you might make': [
                'Opposite portraits: skilled, self-sacrificing, successful (Source A); dirty, drunken, crowding the towns (Source B).',
                'Both turn some blame on society: a toxic public discourse (Source A); a society that has shut the Irishman out (Source B).',
                'Viewpoint: an insider, the child of immigrants (Source A); an outsider generalising about "The Irishman" (Source B).',
                `Methods: intimate detail, humour and direct address (Source A); stereotype, sarcastic questions and contemptuous labels (Source B).`,
                'Purpose: to challenge prejudice (Source A); to blame society, while showing prejudice himself (Source B).',
              ],
            },
          },
        ],
      },
      {
        id: 'wjec-c2-09-writing',
        title: 'Section B: Writing',
        description: SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-09-q7',
            questionNumber: 1,
            label: '2.1',
            questionText: `Your school is holding a cultural diversity week.\n\nWrite an article for the school website explaining how the many cultures in a school community can benefit everyone in it. [20]`,
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `One school, many worlds\n\nWalk down the main corridor of our school at lunchtime and you will hear more than English and Welsh. Pupils here speak Polish, Arabic, Urdu, Portuguese, Somali and many other languages at home, and between us our families have roots in dozens of countries. This week, as we celebrate cultural diversity, it is worth asking a simple question: what does all this variety give us?\n\nThe first answer is that it makes learning richer. When a history lesson turns to the past of another country, there is often someone in the room whose grandparents lived it. When we study poems from other cultures, classmates can tell us what a word or a festival really means. No textbook can match a friend who says, that is exactly what my nan used to cook.\n\nThe second answer is that it prepares us for life. The world we will work in is international. Our future colleagues, customers and neighbours will come from everywhere, and the ability to listen to different points of view, and to respect them, is one of the most useful skills any of us can have. In a mixed school, we practise it every day without even noticing.\n\nThird, diversity teaches us about ourselves. Learning how other families celebrate, mourn and make friends makes us think about our own traditions, and often helps us to value them more. A Welsh pupil who explains Dydd Gŵyl Dewi to a classmate from Lithuania understands it better for having explained it.\n\nOf course, living alongside difference is not always easy. Misunderstandings happen, and sometimes people feel left out. That is exactly why events like this week matter. They give us a chance to ask questions, try new food, hear new music and discover how much we have in common.\n\nSo this week, get involved. Visit the stalls in the hall, join a dance workshop, or simply ask the person next to you in class about their family's story. You may be surprised by how much there is to learn, and by how much you have to share.`,
            },
            markScheme: {
              'How it is marked (20 marks)': WRITING_MARKING,
              'What earns marks in this task': [
                'The features of an article for a website: a headline, an engaging opening, and paragraphs that each develop one benefit.',
                'A warm, inclusive tone that suits the whole school community.',
                'Benefits explained and developed with examples, with some awareness of the challenges.',
                'Accurate spelling, punctuation and grammar, with varied sentences and well-chosen words: 8 of the 20 marks are for this.',
              ],
            },
          },
          {
            id: 'wjec-c2-09-q8',
            questionNumber: 2,
            label: '2.2',
            questionText: `"Everyone who moves to live in a new country should be expected to learn its language."\n\nWrite a speech for a school debate giving your views on this statement. [20]`,
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Good afternoon, everyone.\n\nImagine arriving in a country where you cannot read the signs, understand the doctor or talk to your child's teacher. Every form is a puzzle, every phone call a source of worry. Language is the key that opens every door in a new life. That is why I believe that people who move here should learn our language. But I want to argue that the word expected matters less than the word helped.\n\nLet me begin with the benefits. When newcomers learn the language of their new country, everyone gains. They can find better jobs, use their skills and qualifications, and take part in their community. Their children are not forced to act as interpreters at the doctor's or the bank. And neighbours who can talk to each other are far more likely to become friends.\n\nSo far, I agree with the statement. My concern is with what it leaves out. Learning a language as an adult is hard. It takes time, money and energy, and many newcomers work long hours in tiring jobs. An expectation without support is just a demand. If we want people to learn, we must make it possible: with free classes in the evenings and at weekends, with childcare so that parents can attend, and with patience while they practise.\n\nWe should also remember what newcomers already bring. A family that speaks Arabic, Polish or Somali at home is not a problem to be fixed. Those languages are a gift to our country, to our businesses and to our schools. Learning English, or Welsh, should mean adding a language, not losing one.\n\nAnd here in Wales we know something about this. Our own language was once discouraged, and many families stopped passing it on. Today we work hard to help people of all backgrounds learn Welsh, because we understand that a language is best learnt with encouragement, not pressure.\n\nSo yes, learning the language of a new home is important, and most newcomers want to do it. Let us stop asking whether they should, and start asking how we can help them.\n\nThank you.`,
            },
            markScheme: {
              'How it is marked (20 marks)': WRITING_MARKING,
              'What earns marks in this task': [
                'The features of a debate speech: a greeting, a clear position on the statement, direct address, and a strong ending.',
                'A respectful, persuasive tone, suitable for a school audience and for a subject that touches people personally.',
                'A clear view, developed with reasons and examples, that weighs the arguments on both sides.',
                'Accurate spelling, punctuation and grammar, with varied sentences and well-chosen words: 8 of the 20 marks are for this.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 10 - Childhood
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c2-10',
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
        id: 'wjec-c2-10-reading',
        title: 'Section A: Reading',
        description: SECTION_A_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-10-q1',
            questionNumber: 1,
            label: '1.1',
            questionText: `Read Source A, the 21st-century text, and answer the questions below.\n\n(a) In which town does the writer teach? [1]\n(b) For how many years has the writer watched children change? [1]\n(c) According to the writer, what do some parents do when their child gets a low mark? [1]`,
            marks: 3,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: `Source A:\n${CHILDHOOD_SOURCE_A}\n\nSource B:\n${CHILDHOOD_SOURCE_B}`,
            extractSource: `Source A: ${CHILDHOOD_SOURCE_A_REF} | Source B: ${CHILDHOOD_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': `(a) Newport.\n(b) Fifteen years.\n(c) They email the headteacher.`,
            },
            markScheme: {
              'How it is marked (3 marks)': SHORT_A_MARKING,
              Answers: ['(a) Newport.', '(b) Fifteen years.', '(c) They email the headteacher.'],
            },
          },
          {
            id: 'wjec-c2-10-q2',
            questionNumber: 2,
            label: '1.2',
            questionText: `Source A is a magazine article about childhood today. The writer wants to persuade readers that protecting children too much is harming them.\n\nHow does the writer try to do this?\n\nIn your answer, comment on:\n• what the writer says\n• the writer's choice of language and tone\n• how the article is structured, and any other methods the writer uses.\n\n[10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${CHILDHOOD_SOURCE_A}`,
            extractSource: CHILDHOOD_SOURCE_A_REF,
            modelAnswers: {
              'Grade 8-9': `The writer opens with a bold claim that links two ideas the reader might expect to be opposites: "the most protected and the most anxious generation in human history". The superlatives make the claim dramatic, and the understatement "these two facts are not unrelated" invites the reader to see the connection for themselves. The long list of dangers, "from strangers, from traffic, from germs, from failure, from boredom, from the unsupervised outdoors", moves from real threats to ordinary experiences, which makes the adults' protectiveness seem excessive. The adverb "inadvertently" matters: it presents parents as well-meaning rather than careless, so the reader is not put on the defensive. The paragraph ends with three things these children cannot do: "assess risk, tolerate discomfort, or entertain itself without a screen".\n\nThe second paragraph gives the writer authority: "I am a secondary school teacher in Newport", who has watched the change "over fifteen years". The tone is measured and observant, with a precise comparison between children now and "those who arrived in 2010". A list of comparatives, "more anxious, more risk-averse, and more dependent on adult intervention", is followed by two sentences that begin "They cannot", each with a concrete example: "They cannot resolve playground disputes without a teacher. They cannot cope with a low mark without their parents emailing the headteacher." The second, in which parents email the headteacher over a mark, is gently satirical. The metaphor "so thoroughly bubble-wrapped" sums up the argument in one image, and the simile "hit them like a truck" is deliberately blunt, showing how unready these children are.\n\nThe third paragraph turns to statistics, presented as confirmation of experience: "The statistics confirm what every teacher already knows." Figures such as "one in six children" and "up from one in nine only three years before" are meant to show that the problem is large and growing, and placing them after the anecdotes makes them seem like proof, although the article does not say where they come from. The final sentence is a balanced antithesis: "We have tried to eliminate suffering from childhood, and we have produced suffering on an industrial scale." The repetition of "suffering" and the phrase "on an industrial scale" make the conclusion both ironic and alarming: the attempt to protect children has created the very harm it was meant to prevent. The inclusive "We" makes the reader share the responsibility, which is the point of the article.`,
            },
            markScheme: {
              'How it is marked (10 marks)': Q1_2_MARKING,
              'Points you might make': [
                `The bold opening links protection and anxiety; the understatement "these two facts are not unrelated" invites the reader to draw the link.`,
                `The list of dangers moves from real threats to ordinary experiences; "inadvertently" keeps parents on side.`,
                `Authority and precision: "I am a secondary school teacher in Newport"; a comparison with "those who arrived in 2010".`,
                `Repeated "They cannot" sentences with concrete, gently satirical examples; the metaphor "bubble-wrapped" and the simile "hit them like a truck".`,
                `Statistics are placed as proof of experience, though their sources are not given.`,
                `The antithesis ending "suffering on an industrial scale" and the inclusive "We".`,
              ],
            },
          },
          {
            id: 'wjec-c2-10-q3',
            questionNumber: 3,
            label: '1.3',
            questionText: `Read Source B, the 19th-century text, and answer the questions below.\n\n(Tooting: in 1849 cholera killed more than 150 of the pauper children whom London parishes paid a private contractor to board at Tooting. A "pauper" is a person living on public relief; the "Chartist" leaders campaigned for working men's right to vote; "going aloft" means climbing a ship's rigging; the "Middlesex House of Correction" was a London prison.)\n\n(a) According to Dickens, how did the pauper children in this workhouse look? [1]\n(b) What were the infants doing when the visitors arrived? [1]\n(c) What had some of the boys been drawing on the schoolroom wall? [1]`,
            marks: 3,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: `Source B:\n${CHILDHOOD_SOURCE_B}`,
            extractSource: CHILDHOOD_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5': `(a) Strong and healthy.\n(b) Eating their dinner of potatoes.\n(c) Large ships.`,
            },
            markScheme: {
              'How it is marked (3 marks)': SHORT_B_MARKING,
              Answers: [
                '(a) Strong and healthy, and apparently well cared for.',
                '(b) Eating their dinner (accept: eating potatoes heartily).',
                '(c) Large ships.',
              ],
            },
          },
          {
            id: 'wjec-c2-10-q4',
            questionNumber: 4,
            label: '1.4',
            questionText: `Read Source B again.\n\nA student said: ‘Dickens presents the workhouse children as well cared for and happy.’\n\nHow far do you agree with this view?\n\nIn your answer, give your own view of how Dickens presents the children and the workhouse across the whole text, and explain how his choices of words and details create that view. Support your answer with references to the text. [10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'evaluation',
            extract: `Source B:\n${CHILDHOOD_SOURCE_B}`,
            extractSource: CHILDHOOD_SOURCE_B_REF,
            modelAnswers: {
              'Grade 8-9': `I largely agree, but only on the surface. Dickens does present these children as healthy and well treated, especially by the standards of his time, yet his language contains hints of doubt, and the passage ends with a pointed criticism of what the workhouse fails to offer.\n\nThe opening sets the scene against a recent horror. Dickens recalls the "most infamous and atrocious enormity committed at Tooting", piling up strong words, and predicts that it "will still be vividly remembered" a hundred years later. Against this, he finds it "very agreeable" to see the children "looking robust and well, and apparently the objects of very great care". The positive words are clear, but "apparently" is a careful hedge: he can report only how things seem to a visitor.\n\nThe Infant School is presented warmly. It is "a large, light, airy room", the children are "eating their potatoes heartily", and instead of being "cowed by the presence of strange visitors", they stretch out "their small hands to be shaken, with a very pleasant confidence". Their confidence suggests that they are not afraid of adults, which implies kind treatment. The girls' school likewise has "a cheerful and healthy aspect", and the boys roam "unrestrained about a large and airy yard, as any other schoolboys might have done". This comparison matters: it suggests that these children are allowed to be ordinary.\n\nHowever, some details are less comfortable. The toys are "two mangy pauper rocking-horses rampant in a corner". The words "mangy" and "pauper" make even the toys poor, and the humour of "rampant", as though they were beasts on a coat of arms, is affectionate but also gently mocking. Dickens notices the boys "drawing large ships upon the schoolroom wall", which suggests ambition, and wishes they had a mast "set up for practice". His final sentence is heavily ironic: at present a boy who longs to learn to go aloft could do so only in the way the adult paupers seek "better board and lodging", "by smashing as many workhouse windows as possible, and being promoted to prison". The joke reveals a serious point: the workhouse gives these children no route to the lives they dream of.\n\nSo the statement is true of what Dickens saw that day. The children are fed, healthy and unafraid. But by ending with irony rather than praise, Dickens suggests that being cared for is not the same as being given a future.`,
            },
            markScheme: {
              'How it is marked (10 marks)': Q1_4_MARKING,
              'Points you might make': [
                `The contrast with "that most infamous and atrocious enormity committed at Tooting" makes the children's health seem a relief; "apparently" hedges.`,
                `Warm detail supports the statement: "eating their potatoes heartily"; "a very pleasant confidence"; "a cheerful and healthy aspect"; boys "as any other schoolboys might have done".`,
                `Less comfortable details: "two mangy pauper rocking-horses rampant in a corner".`,
                `The boys' drawings of ships, and the wish for a mast, suggest ambitions with no outlet.`,
                `The ironic ending ("being promoted to prison") criticises what the workhouse cannot offer.`,
                'A strong answer reaches a judgement on the statement and keeps to it through the whole passage.',
              ],
            },
          },
          {
            id: 'wjec-c2-10-q5',
            questionNumber: 5,
            label: '1.5',
            questionText: `Bring together details from both texts to explain briefly how the children that each writer describes behave towards adults. Make clear which text each detail comes from. [4]`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'summary',
            extract: `Source A:\n${CHILDHOOD_SOURCE_A}\n\nSource B:\n${CHILDHOOD_SOURCE_B}`,
            extractSource: `Source A: ${CHILDHOOD_SOURCE_A_REF} | Source B: ${CHILDHOOD_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': `In Source A, the children are "more dependent on adult intervention": they "cannot resolve playground disputes without a teacher", and their parents step in when they get a low mark. In Source B, the workhouse infants are "not cowed by the presence of strange visitors" and reach out "their small hands to be shaken, with a very pleasant confidence", while the boys roam freely in their yard.`,
            },
            markScheme: {
              'How it is marked (4 marks)': Q1_5_MARKING,
              'Details you might bring together': [
                'Source A: children depend on adults to settle their arguments and to deal with low marks; they are anxious and avoid risk.',
                'Source B: the infants are not frightened of strange visitors and hold out their hands confidently; the boys roam unrestrained about the yard, as any other schoolboys might.',
              ],
            },
          },
          {
            id: 'wjec-c2-10-q6',
            questionNumber: 6,
            label: '1.6',
            questionText: `Source A and Source B are both about the way children are cared for.\n\nCompare:\n• what the writers say about how children are treated by the adults responsible for them\n• how they get their ideas across.\n\nUse evidence from both texts, and make clear which text each point comes from. [10]`,
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'comparison',
            extract: `Source A:\n${CHILDHOOD_SOURCE_A}\n\nSource B:\n${CHILDHOOD_SOURCE_B}`,
            extractSource: `Source A: ${CHILDHOOD_SOURCE_A_REF} | Source B: ${CHILDHOOD_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 8-9': `Both writers judge how well adults are caring for children, but they reach almost opposite conclusions. The writer of Source A argues that today's children are harmed by too much protection, while Dickens, in Source B, is pleased to find poor children in a workhouse better cared for than he feared, though he suggests that care is not enough.\n\nWhat they say about the children's treatment differs sharply. In Source A, adults try to keep children safe "from every conceivable danger", and the result is a generation that "does not know how to assess risk, tolerate discomfort, or entertain itself without a screen". In Source B, the children have very little, but they are "looking robust and well, and apparently the objects of very great care", and the infants show "a very pleasant confidence". One writer worries about children who are protected too much; the other is relieved to find children who are looked after at all.\n\nBoth writers, however, suggest that adults can fail children by holding them back. The writer of Source A says children are "so thoroughly bubble-wrapped" that ordinary challenges "hit them like a truck". Dickens notices boys "drawing large ships upon the schoolroom wall" and regrets that they have no mast "set up for practice", so their ambitions have no outlet. Both believe that children need room to grow.\n\nTheir methods differ. The writer of Source A builds an argument from experience ("I am a secondary school teacher in Newport"), with lists, repeated sentence openings ("They cannot") and statistics such as "one in six children in England aged five to sixteen", and ends with a stark antithesis: "we have produced suffering on an industrial scale". The tone is concerned and urgent. Dickens writes as a visitor describing what he sees, room by room, in long, flowing sentences. His tone is warmer and often humorous, as in the "two mangy pauper rocking-horses rampant in a corner", but it turns ironic at the end, when he imagines a boy who could learn to go aloft only by "smashing as many workhouse windows as possible, and being promoted to prison".\n\nBoth writers, then, look beyond whether children are safe to whether they are being prepared for life. Source A fears that safety has become harmful; Dickens fears that the workhouse, however kind, offers its children no future.`,
            },
            markScheme: {
              'How it is marked (10 marks)': Q1_6_MARKING,
              'Points you might make': [
                'Opposite verdicts: children harmed by too much protection (Source A); poor children better cared for than feared (Source B).',
                'Both suggest that children need room to grow: the "bubble-wrapped" generation (Source A); the boys who draw ships with no way to learn to sail (Source B).',
                'Methods: experience, lists, repeated openings and statistics (Source A); a visitor describing room by room, with humour and irony (Source B).',
                'Tone: concerned and urgent (Source A); warm, then ironic (Source B).',
                'Both judge care by whether it prepares children for life, not only by whether it keeps them safe.',
              ],
            },
          },
        ],
      },
      {
        id: 'wjec-c2-10-writing',
        title: 'Section B: Writing',
        description: SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-10-q7',
            questionNumber: 1,
            label: '2.1',
            questionText: `Your local council wants to know whether young people in your area have enough safe places to spend their free time.\n\nWrite a report for the council describing what is available now and recommending improvements. [20]`,
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Report for the Town Council: places for young people to spend their free time\n\nPurpose\nThis report responds to the council's request for young people's views on the places available to them outside school. It is based on a survey of forty pupils in Years 9 to 11 and on conversations with members of the youth forum.\n\nWhat is available now\nThe town has some good facilities. The leisure centre offers swimming, a gym and team sports, and the library runs a homework club twice a week. The skate park by the river is popular with younger teenagers, and the youth club meets on Friday evenings in the church hall.\n\nHowever, the survey revealed several problems. Many pupils said that the leisure centre is too expensive to visit regularly, especially for families with more than one child. The skate park has no lighting, so it cannot be used safely after about four o'clock in winter. The youth club is open only once a week and is often full. Most worryingly, many pupils said that they have nowhere to simply meet friends indoors without spending money, so they end up in the shopping centre or at the bus station, where they are sometimes moved on.\n\nRecommendations\n1. Introduce a reduced price for under-sixteens at the leisure centre, at least during off-peak hours.\n2. Install lighting at the skate park and the nearby playing field, so that they can be used safely in the winter months.\n3. Open the youth club on at least two more evenings a week, perhaps by training volunteers to support the youth workers.\n4. Create a free indoor space for young people, such as a room in the library or the community centre, with seating, Wi-Fi and board games, open after school and at weekends.\n\nConclusion\nYoung people in our town want to be active and sociable, but too often they are priced out or left with nowhere to go. The improvements recommended here would cost relatively little, and they would show young people that the town values them. I would urge the council to begin with the lighting and the indoor space, which pupils mentioned most often.`,
            },
            markScheme: {
              'How it is marked (20 marks)': WRITING_MARKING,
              'What earns marks in this task': [
                'The features of a report: a title, a statement of purpose, clear sections or headings, and recommendations.',
                'A formal, objective tone suited to councillors.',
                'Both parts of the task covered: what is available now, and improvements, each developed with reasons.',
                'Accurate spelling, punctuation and grammar, with varied sentences and well-chosen words: 8 of the 20 marks are for this.',
              ],
            },
          },
          {
            id: 'wjec-c2-10-q8',
            questionNumber: 2,
            label: '2.2',
            questionText: `"Children today have it too easy. They need to experience hardship to build character."\n\nWrite a speech for a school assembly giving your views on this statement. [20]`,
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Good morning, everyone.\n\nI am sure you have heard it before. Perhaps a grandparent has said it at Sunday lunch, or a stranger on the bus. Children today have it too easy. When I was your age, we walked five miles to school in the snow. Today I want to ask whether that is true, and whether hardship really is the best teacher.\n\nLet us be fair to the people who say it. In some ways, many of us do have easier lives than children in the past. We have central heating, plenty of food and more entertainment in our pockets than our grandparents could have imagined. Few of us have to work to support our families, as many children once did. That is something to be grateful for, not ashamed of.\n\nBut easier is not the same as easy. Young people today face pressures that earlier generations did not. We sit more exams than ever. We live our friendships partly online, where an unkind comment can follow us home. Many of us worry about the future of the planet, or about whether we will ever afford a home of our own. These are not hardships you can see, like a long walk in the snow, but they are real.\n\nAnd I want to question the second half of the statement too. Does hardship build character? Sometimes it does. Overcoming a difficult challenge can make us stronger and more confident. But hardship can also crush people. A child who goes hungry does not become stronger; they become tired and unable to learn. What builds character is not suffering itself, but challenge with support: the chance to try something difficult, to fail, and to be helped to try again.\n\nSo instead of wishing hardship on young people, let us look for challenges that make us grow. Join a team and learn to lose well. Volunteer and see how other people live. Take on a part in the school play that terrifies you. Character is built by effort and courage, and every one of us can find those without having to suffer.\n\nThank you for listening.`,
            },
            markScheme: {
              'How it is marked (20 marks)': WRITING_MARKING,
              'What earns marks in this task': [
                'The features of a speech: a greeting, direct address to the audience, and an ending that rounds it off.',
                'A tone that suits an assembly: thoughtful and persuasive, fair to those who disagree.',
                'A clear view on both parts of the statement, developed with reasons and examples.',
                'Accurate spelling, punctuation and grammar, with varied sentences and well-chosen words: 8 of the 20 marks are for this.',
              ],
            },
          },
        ],
      },
    ],
  },
]
