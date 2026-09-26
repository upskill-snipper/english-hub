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
 * the specially written articles and are not sourced. The glosses in the
 * question text (Tooting, the Franco-Prussian War, the Children's Employment
 * Commission) are general knowledge, not checked by script. Notes on Nursing
 * is checked against the Appleton printing only; the London first edition
 * (Harrison, 1859) was not compared.
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

Wales has lost 73% of its monitored insect populations since 1990. One in six species in the UK is now at risk of extinction. The hedgehog population has halved in twenty years. These numbers are so large that they become abstract, and abstraction is the enemy of action. So let me make it concrete: the dawn chorus in my village is quieter than it was when I was a child. Not metaphorically. Measurably. Quantifiably. There are fewer birds singing because there are fewer birds, because there are fewer insects, because we have poisoned the soil and paved the meadows and called it progress.

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

The statistics confirm what every teacher already knows. Referrals to CAMHS have increased by 353% in a decade. One in six children aged five to sixteen now has a probable mental health disorder. Self-harm among teenage girls has tripled since 2010. We have tried to eliminate suffering from childhood, and we have produced suffering on an industrial scale.`

const CHILDHOOD_SOURCE_A_REF = 'Magazine article, specially written for this paper'

const CHILDHOOD_SOURCE_B = `It was very agreeable, recollecting that most infamous and atrocious enormity committed at Tooting—an enormity which, a hundred years hence, will still be vividly remembered in the bye-ways of English life, and which has done more to engender a gloomy discontent and suspicion among many thousands of the people than all the Chartist leaders could have done in all their lives—to find the pauper children in this workhouse looking robust and well, and apparently the objects of very great care. In the Infant School—a large, light, airy room at the top of the building—the little creatures, being at dinner, and eating their potatoes heartily, were not cowed by the presence of strange visitors, but stretched out their small hands to be shaken, with a very pleasant confidence. And it was comfortable to see two mangy pauper rocking-horses rampant in a corner. In the girls’ school, where the dinner was also in progress, everything bore a cheerful and healthy aspect. The meal was over, in the boys’ school, by the time of our arrival there, and the room was not yet quite rearranged; but the boys were roaming unrestrained about a large and airy yard, as any other schoolboys might have done. Some of them had been drawing large ships upon the schoolroom wall; and if they had a mast with shrouds and stays set up for practice (as they have in the Middlesex House of Correction), it would be so much the better. At present, if a boy should feel a strong impulse upon him to learn the art of going aloft, he could only gratify it, I presume, as the men and women paupers gratify their aspirations after better board and lodging, by smashing as many workhouse windows as possible, and being promoted to prison.`

const CHILDHOOD_SOURCE_B_REF =
  'Charles Dickens, "A Walk in a Workhouse", Household Words (1850), from Reprinted Pieces'

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
        description:
          'Read both source texts carefully. Then answer all the questions in this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-06-q1',
            questionNumber: 1,
            questionText: `Read the 21st-century source text about the NHS (Source A).\n\nList five things you learn about the current state of the health service from this text.`,
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Source A:\n${HEALTH_SOURCE_A}\n\nSource B:\n${HEALTH_SOURCE_B}`,
            extractSource: `Source A: ${HEALTH_SOURCE_A_REF} | Source B: ${HEALTH_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                '1. A seventy-two-year-old woman waited nineteen hours on a trolley in Swansea. 2. A junior doctor in Leeds worked thirty consecutive hours. 3. A paramedic crew in Birmingham waited six hours outside hospital to hand over a patient. 4. There are staffing shortages across the NHS. 5. The infrastructure is crumbling.',
            },
            markScheme: ['1 mark per valid point, maximum 5'],
          },
          {
            id: 'wjec-c2-06-q2',
            questionNumber: 2,
            questionText: `How does the writer of Source A use language to convey their feelings about the state of the NHS?\n\nYou should comment on specific words and phrases and the effects they create. [10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${HEALTH_SOURCE_A}`,
            extractSource: HEALTH_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses the metaphor "national religion" to show how important the NHS is to people. The phrase "slow, systemic suffocation" uses alliteration to emphasise how the service is being strangled. Specific examples like "nineteen hours on a trolley" shock the reader. The phrase "political choices disguised as unfortunate circumstances" shows the writer\'s anger at the government.',
              'Grade 6-7':
                'The writer constructs a rhetorical architecture that moves from reverence to outrage. The opening metaphor - "the closest thing we have to a national religion" - elevates the NHS to sacred status, making its decline feel like desecration. The metaphor of suffocation ("slow, systemic suffocation") uses sibilant alliteration to create an auditory sense of breath being squeezed out. The tricolon of case studies progresses through geography (Swansea, Leeds, Birmingham) but also through emotional register: from sympathy to admiration to systemic horror. The phrase "ferocity of purpose" is deliberately paradoxical - violence in the service of care - capturing the impossible demands placed on staff. The antithesis near the end - "political choices disguised as unfortunate circumstances" - strips away euphemism to expose culpability, with the verb "disguised" implying deliberate deception.',
            },
            markScheme: [
              'Analyses specific language techniques',
              'Comments on word-level effects',
              'Considers persuasive strategies',
              'Uses embedded quotations',
            ],
          },
          {
            id: 'wjec-c2-06-q3',
            questionNumber: 3,
            questionText: `What do you learn about the problems facing healthcare from Source B?\n\n(reparative: healing, repairing. poultices: soft, warm pastes laid on the skin to ease pain or swelling. viz.: namely.)\n\nYou must refer to the text to support your answer. [10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'short-answer',
            extract: `Source B:\n${HEALTH_SOURCE_B}`,
            extractSource: HEALTH_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5':
                'You learn that sick people often suffer because they are badly looked after, not only because they are ill. Nightingale says that many "symptoms" are really caused by "the want of fresh air, or of light, or of warmth, or of quiet, or of cleanliness". If a patient is cold or has a "bed-sore", "it is generally the fault not of the disease, but of the nursing." Nursing was thought to mean "little more than the administration of medicines and the application of poultices". She believes that "the very elements of nursing are all but unknown", although the nurse is not always to blame, because bad buildings and bad management "often make it impossible to nurse".',
              'Grade 6-7':
                'Nightingale shows that the greatest problem facing the care of the sick is not disease but ignorance and neglect. She writes as "the experienced observer" who has watched illness "both in private houses and in public hospitals", so the problem she describes is everywhere, not in one bad institution. Her first sentence builds a long list of what patients go without - "the want of fresh air, or of light, or of warmth, or of quiet, or of cleanliness" - and the repeated "or of" makes the neglect seem endless, while every item on the list is simple and cheap. The run of conditions "If a patient is cold, if a patient is feverish, if a patient is faint" ends in a blunt reversal: "it is generally the fault not of the disease, but of the nursing." This moves the blame from illness, which no one can help, to care, which someone could. She also shows that nursing itself is misunderstood: it has been limited to "little more than the administration of medicines and the application of poultices", and she dismisses the comfortable belief that "every woman makes a good nurse" with a firm "I believe, on the contrary". Yet she is fair to nurses: "I do not mean that the nurse is always to blame." The triple "Bad sanitary, bad architectural, and bad administrative arrangements" widens the blame to the buildings and to the people who run them. Her last sentence is bitterly ironic: nursing "as now practised" seems "expressly constituted to unmake" what God made disease to be, "a reparative process", so the care meant to heal the sick works against them.',
            },
            markScheme: [
              'Identifies key information from the text',
              'Selects appropriate evidence',
              'Makes valid inferences',
              'Shows clear understanding of implicit meaning',
            ],
          },
          {
            id: 'wjec-c2-06-q4',
            questionNumber: 4,
            questionText: `"Both writers feel passionately about healthcare, but the 21st-century writer is more effective because Source A gives specific examples, while Source B deals only in general principles."\n\nTo what extent do you agree with this statement? You must refer to both Source A and Source B in your answer. [15]`,
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'comparison',
            extract: `Source A:\n${HEALTH_SOURCE_A}\n\nSource B:\n${HEALTH_SOURCE_B}`,
            extractSource: `Source A: ${HEALTH_SOURCE_A_REF} | Source B: ${HEALTH_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'I partly agree. Source A gives specific examples, like the woman who waited "nineteen hours on a trolley in a corridor", and these make the problems easy to picture. Nightingale does write in general terms, but her points come from what she has seen, and her examples of a patient who is "cold", "feverish" or "faint" are ones every reader will recognise. Both writers say the staff are not the ones to blame: Source A says "These are not failures of individual commitment", and Nightingale says "I do not mean that the nurse is always to blame." I think both are effective in different ways.',
              'Grade 6-7':
                'The statement is half right. Source A is built on specific cases, and its three scenes - Swansea, Leeds, Birmingham - make the crisis vivid and hard to dismiss. Yet its force comes as much from metaphor ("slow, systemic suffocation") and from its accusation that the failings are "political choices disguised as unfortunate circumstances" as from its examples. Source B does deal in general principles, but that is where its power lies. Nightingale writes as "the experienced observer" and turns what she has seen into a rule that holds "as much in private as in hospital nursing", so every reader who has nursed a relative is implicated. Her particulars are not named patients but symptoms anyone would recognise - a patient who is "cold", "feverish" or "faint", or has a "bed-sore" - and her conclusion is a reversal that no single case could carry: "it is generally the fault not of the disease, but of the nursing." The two writers reach a similar verdict by opposite routes. Both clear the individual worker ("These are not failures of individual commitment"; "I do not mean that the nurse is always to blame") and blame the system, which Source A calls political and Nightingale calls "Bad sanitary, bad architectural, and bad administrative arrangements". Source A is more immediate; Source B reaches further, because it asks readers to change how they care for the sick rather than only to feel angry about it.',
            },
            markScheme: [
              'Evaluates both texts with a personal response',
              'Compares effectiveness of different methods',
              'Uses evidence from both texts',
              'Shows nuanced critical judgement',
            ],
          },
        ],
      },
      {
        id: 'wjec-c2-06-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 60 minutes on this section. You should divide your time equally between the two tasks.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-06-q5',
            questionNumber: 5,
            questionText: `You have been asked to write a contribution to a health awareness booklet aimed at teenagers.\n\nWrite an informative text explaining why mental health is just as important as physical health.\n\n[16]`,
            marks: 16,
            suggestedTimeMinutes: 25,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear informative text with: appropriate tone for teenagers; relevant points about mental health; generally accurate SPaG.',
              'Grade 6-7':
                'A well-structured informative piece with: engaging tone; well-developed explanations; consistent accuracy and varied vocabulary.',
              'Grade 8-9':
                'A compelling and authoritative text with: sophisticated awareness of audience; nuanced exploration of the topic; technical virtuosity.',
            },
            markScheme: [
              'Communication & Organisation (10 marks): Purpose, audience, form, structure',
              'Writing Accurately (6 marks): Sentence variety, vocabulary, SPaG',
            ],
          },
          {
            id: 'wjec-c2-06-q6',
            questionNumber: 6,
            questionText: `"The government should make physical exercise compulsory for all citizens."\n\nWrite a speech for a debate arguing either for or against this statement.\n\n[24]`,
            marks: 24,
            suggestedTimeMinutes: 35,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A speech with: clear position; some persuasive techniques; appropriate form with address to audience; generally accurate SPaG.',
              'Grade 6-7':
                'A well-crafted speech with: sustained argument; effective rhetorical devices; convincing counter-arguments addressed; consistent accuracy.',
              'Grade 8-9':
                'An outstanding speech with: commanding voice; sophisticated reasoning; masterful use of rhetorical techniques; technical precision throughout.',
            },
            markScheme: [
              'Communication & Organisation (14 marks): Purpose, audience, form, voice, structure, paragraphing',
              'Writing Accurately (10 marks): Sentence variety, vocabulary range, SPaG',
            ],
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
        description:
          'Read both source texts carefully. Then answer all the questions in this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-07-q1',
            questionNumber: 1,
            questionText: `Read the 21st-century source text about the environment (Source A).\n\nList five things you learn about environmental decline from this text.`,
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Source A:\n${ENV_SOURCE_A}\n\nSource B:\n${ENV_SOURCE_B}`,
            extractSource: `Source A: ${ENV_SOURCE_A_REF} | Source B: ${ENV_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                '1. Rock pools in Pembrokeshire that used to be full of life are now empty. 2. Wales has lost 73% of its monitored insect populations since 1990. 3. One in six species in the UK is at risk of extinction. 4. The hedgehog population has halved in twenty years. 5. The dawn chorus is quieter than it used to be.',
            },
            markScheme: ['1 mark per valid point, maximum 5'],
          },
          {
            id: 'wjec-c2-07-q2',
            questionNumber: 2,
            questionText: `How does the writer of Source A use language to make the reader feel concerned about the environment?\n\nYou should comment on specific words and phrases and the effects they create. [10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${ENV_SOURCE_A}`,
            extractSource: ENV_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses the phrase "the clarity of absence" to show that the empty rock pools are frightening, not beautiful. The three short sentences "Not depleted. Not diminished. Empty" build up to a shocking final word. Statistics like "73%" make the problem feel real and urgent. The personal memory of childhood makes the reader feel sad about what has been lost.',
              'Grade 6-7':
                'The writer employs a strategy of defamiliarisation: what should be positive - clear water, quiet mornings - is reframed as evidence of catastrophe. The tricolon "Not depleted. Not diminished. Empty" uses successive negation to reject euphemism before arriving at the brutal monosyllable. The paradox in "clarity of absence" transforms visual beauty into existential horror. The shift from personal anecdote to statistics to the first-person plural ("the air in our lungs") creates a rhetorical funnel that narrows from the particular to the universal. The three clipped sentences "Not metaphorically. Measurably. Quantifiably." aggressively pre-empt dismissal by insisting on empirical rather than emotional truth. The closing sentences deploy the starkest possible syntax - "When it dies, we die" - reducing ecological complexity to primal cause and effect. The final antithesis - "This is not ideology. It is biology" - claims scientific authority while performing a deeply rhetorical manoeuvre.',
            },
            markScheme: [
              'Analyses specific language techniques',
              'Comments on word-level effects',
              'Considers persuasive strategies',
              'Uses embedded quotations',
            ],
          },
          {
            id: 'wjec-c2-07-q3',
            questionNumber: 3,
            questionText: `What do you learn about environmental damage from Source B?\n\n(Source B is from a letter Ruskin addressed to working men. vitiate: spoil, make impure. effluvia, miasmata: foul and poisonous vapours, then thought to spread disease. German and French: the Franco-Prussian War of 1870-71. Demeter: the Greek goddess of the harvest. Tisiphone: one of the Furies, who avenged murder.)\n\nYou must refer to the text to support your answer. [10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'short-answer',
            extract: `Source B:\n${ENV_SOURCE_B}`,
            extractSource: ENV_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5':
                'You learn that people were damaging the air, the water and the earth. Ruskin says that war was filling the air with "noxious gas" from the dead, and that towns gave off "venomous smokes and smells" all day long. He calls towns "horrible nests". Rivers had been turned into "a common sewer", so dirty that you could not "baptize an English baby but with filth", and even the rain "falls dirty". He also shows that the damage could be undone: planting trees and "forbidding noxious manufactures" would clean the air, and the rivers could be "as pure as the crystal of the rock". He blames science for turning the earth from something that feeds people into something deadly.',
              'Grade 6-7':
                'Ruskin presents environmental damage as something people choose, not something that happens to them. His grammar makes the point: the reader is the subject of the destructive verbs - "You can vitiate the air", "you have turned the Mother-Earth, Demeter, into the Avenger-Earth, Tisiphone" - so the damage is an act with a doer. He shows it in each of the three "Material" things in turn. The air is poisoned by war, "changing men, horses, and garden-stuff into noxious gas", a flat list that puts soldiers alongside vegetables, and by everyday industry: towns are "horrible nests" and "laboratories for the distillation into heaven of venomous smokes and smells", an image that turns the sky itself into a place of manufacture. The water has been made "a common sewer", and the detail that "you cannot so much as baptize an English baby but with filth" makes pollution a spiritual defilement as well as a physical one; the short clause "and even that falls dirty" leaves nowhere clean. The earth, "meant to be nourishing for you, and blossoming", has been turned, as far as "scientific hands and scientific brains" can manage it, from a mother into an avenger, and "the voice of your brother\'s blood" echoes God\'s words to Cain, so the harm done to the earth is bound up with killing. Yet the passage is not hopeless. The power to repair is "literally infinite": planting trees, forbidding "noxious manufactures", and rivers "so full of fish that you might take them out with your hands instead of nets". The reader learns that the damage is real, widespread and man-made, and that it could be reversed.',
            },
            markScheme: [
              'Identifies key information from the text',
              'Selects appropriate evidence',
              'Makes valid inferences',
              'Shows clear understanding of implicit meaning',
            ],
          },
          {
            id: 'wjec-c2-07-q4',
            questionNumber: 4,
            questionText: `"Both writers are alarmed by environmental destruction, but the modern writer communicates more urgency because he uses scientific evidence."\n\n(Source B glossary: vitiate: spoil, make impure. effluvia, miasmata: foul and poisonous vapours. German and French: the Franco-Prussian War of 1870-71. Demeter: the Greek goddess of the harvest. Tisiphone: one of the Furies, who avenged murder.)\n\nTo what extent do you agree with this statement? You must refer to both Source A and Source B in your answer. [15]`,
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'comparison',
            extract: `Source A:\n${ENV_SOURCE_A}\n\nSource B:\n${ENV_SOURCE_B}`,
            extractSource: `Source A: ${ENV_SOURCE_A_REF} | Source B: ${ENV_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'I partly agree. The writer of Source A uses figures like "73%" and "One in six species", which make the problem seem serious and proven. Ruskin uses no statistics at all. However, Ruskin is just as urgent, because he speaks straight to the reader: "You can vitiate the air". He uses shocking images, like towns as "horrible nests" and rivers turned into "a common sewer". Ruskin even attacks science, blaming "scientific hands and scientific brains" for the damage. Both writers show that people have caused the destruction, and both make the reader feel responsible.',
              'Grade 6-7':
                'The statement assumes that scientific evidence creates urgency, but neither text bears that out simply. The writer of Source A does use figures - "73%", "One in six species" - yet admits that they "become abstract, and abstraction is the enemy of action", and so makes them concrete: the quieter dawn chorus, like the empty rock pools of the opening. The urgency comes from the insistence of "Not metaphorically. Measurably. Quantifiably." and the stark "When it dies, we die." Ruskin offers no evidence of that kind and would not want to: he blames "scientific hands and scientific brains", which invent "explosive and deathful" dust instead of "blossoming and life giving" dust, for turning the nourishing earth into an avenging one. His urgency comes from direct accusation - "You can vitiate the air by your manner of life, and of death, to any extent" - and from images that shock: towns as "horrible nests" breathing "venomous smokes and smells", a baby that cannot be baptised but with filth. Both writers make the damage personal. Source A says the environment is "the air in our lungs"; Ruskin makes the reader answer for it with "the voice of your brother\'s blood". I would say Ruskin is at least as urgent, because he offers the reader a choice, between rivers "as pure as the crystal of the rock" and "a common sewer", and insists that it is theirs to make now. Source A\'s urgency is the fear of loss; Ruskin\'s is a demand for action.',
            },
            markScheme: [
              'Evaluates both texts with a personal response',
              'Compares effectiveness of different methods',
              'Uses evidence from both texts',
              'Shows nuanced critical judgement',
            ],
          },
        ],
      },
      {
        id: 'wjec-c2-07-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 60 minutes on this section. You should divide your time equally between the two tasks.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-07-q5',
            questionNumber: 5,
            questionText: `Your local council is considering building new houses on green belt land near your school.\n\nWrite a letter to the council expressing your views on this proposal.\n\n[16]`,
            marks: 16,
            suggestedTimeMinutes: 25,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear formal letter with: appropriate conventions; a range of relevant points; generally accurate SPaG.',
              'Grade 6-7':
                'A well-structured letter with: confident formal register; persuasive argument with evidence; consistent accuracy.',
              'Grade 8-9':
                'A sophisticated letter with: commanding authoritative voice; nuanced reasoning balancing multiple perspectives; flawless technical accuracy.',
            },
            markScheme: [
              'Communication & Organisation (10 marks): Purpose, audience, form, structure',
              'Writing Accurately (6 marks): Sentence variety, vocabulary, SPaG',
            ],
          },
          {
            id: 'wjec-c2-07-q6',
            questionNumber: 6,
            questionText: `"Young people care more about the environment than any previous generation, yet they are the least willing to make personal sacrifices to protect it."\n\nWrite an article for a broadsheet newspaper in which you argue your point of view on this statement.\n\n[24]`,
            marks: 24,
            suggestedTimeMinutes: 35,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A newspaper article with: appropriate headline and structure; clear argument; relevant examples; generally accurate SPaG.',
              'Grade 6-7':
                'A well-crafted article with: engaging headline; sustained and developed argument; effective use of evidence; consistent accuracy.',
              'Grade 8-9':
                'An outstanding article with: arresting headline; sophisticated and nuanced argument; masterful control of tone and register; technical precision.',
            },
            markScheme: [
              'Communication & Organisation (14 marks): Purpose, audience, form, voice, structure, paragraphing',
              'Writing Accurately (10 marks): Sentence variety, vocabulary range, SPaG',
            ],
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
        description:
          'Read both source texts carefully. Then answer all the questions in this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-08-q1',
            questionNumber: 1,
            questionText: `Read the 21st-century source text about the gig economy (Source A).\n\nList five things you learn about working conditions for delivery riders from this text.`,
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Source A:\n${WORK_SOURCE_A}\n\nSource B:\n${WORK_SOURCE_B}`,
            extractSource: `Source A: ${WORK_SOURCE_A_REF} | Source B: ${WORK_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                '1. Riders earned an average of £4.80 an hour after expenses. 2. They received no sick pay, holiday pay, or pension. 3. The riders were mostly young men from immigrant backgrounds. 4. The app tracked their every movement. 5. A customer rating below 4.5 meant fewer deliveries.',
            },
            markScheme: ['1 mark per valid point, maximum 5'],
          },
          {
            id: 'wjec-c2-08-q2',
            questionNumber: 2,
            questionText: `How does the writer of Source A use language to criticise the gig economy?\n\nYou should comment on specific words and phrases and the effects they create. [10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${WORK_SOURCE_A}`,
            extractSource: WORK_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer echoes the promise "be your own boss" ironically, to mock what the gig economy offered. The word "disposable" shows how little the workers are valued. The contrast between "independent contractors" and reality highlights the dishonesty of the companies. The description of riding "on a rainy Tuesday night" makes the reader feel sympathy for the workers.',
              'Grade 6-7':
                'The writer constructs the critique through systematic exposure of linguistic deception. The opening paragraph ventriloquises Silicon Valley\'s rhetoric - "set us free," "be your own boss" - before the devastating pivot: "freedom, it turns out, looks remarkably like exploitation when you strip away the branding." The noun "branding" functions doubly, referencing both marketing and the literal marking of ownership. The juxtaposition of corporate terminology ("independent contractors") against the writer\'s own blunt lexis ("disposable") enacts the gap between rhetoric and reality that is the central argument. The final paragraph\'s description of algorithmic control - tracking, measuring, scoring - uses the vocabulary of surveillance to reframe "flexibility" as panopticism. The closing metaphor "algorithmic control with a smiley-face interface" brilliantly encapsulates the gig economy\'s defining contradiction: totalitarian power dressed in the visual language of friendliness.',
            },
            markScheme: [
              'Analyses specific language techniques',
              'Comments on word-level effects',
              'Considers persuasive strategies',
              'Uses embedded quotations',
            ],
          },
          {
            id: 'wjec-c2-08-q3',
            questionNumber: 3,
            questionText: `What do you learn about working conditions in the mines from Source B?\n\n(Engels is summarising the evidence gathered by the Children's Employment Commission, whose report on the mines was published in 1842. iron-stone: iron ore. tubs: boxes for carrying coal or ore.)\n\nYou must refer to the text to support your answer. [10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'short-answer',
            extract: `Source B:\n${WORK_SOURCE_B}`,
            extractSource: WORK_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5':
                'You learn that children "of four, five, and seven years" worked in the coal and iron mines. The smallest children opened and shut the doors, sitting "in the dark, alone" for twelve hours a day. Older children and "half-grown girls" pushed and pulled heavy tubs with no wheels through water and mud, in passages so low that they had "to creep on hands and knees". A working day was "eleven to twelve hours, often longer", and there were no proper meal times. The children were so tired that they fell asleep on the floor as soon as they got home, and some were found "asleep on the road".',
              'Grade 6-7':
                'Engels shows that the mines depended on the labour of children, and that the work damaged them in body and mind. The youngest, "of four, five, and seven years", were given the doors, which sounds like light work, but he makes it one of the cruellest jobs: they "pass twelve hours daily, in the dark, alone", and the heavy pair of adjectives "stupefying, brutalising" shows that the "tedium of doing nothing" harms them as surely as labour would. Older children did the opposite, "very hard labour", shoving "large tubs, without wheels" over "moist clay, or through water", along passages "so low-roofed that the workers are forced to creep on hands and knees", a detail that bends children into the posture of animals. The hours are given plainly, "eleven to twelve hours, often longer", rising to "thirty-six hours at a stretch", and the flat statement that "Set times for meals are almost unknown" shows that even eating is fitted around the work. The final sentence moves from the mine to the home, and it is the most telling: children "throw themselves down on the stone hearth or the floor", "fall asleep at once without being able to take a bite of food", and must be "washed and put to bed while asleep". Engels\'s method is to let the evidence speak, "with a number of examples on every page", and his one comment, that "Even in the most recklessly conducted industrial establishments there is no such universal and exaggerated overwork", tells the reader that the mines are worse than any factory.',
            },
            markScheme: [
              'Identifies key information from the text',
              'Selects appropriate evidence',
              'Makes valid inferences',
              'Shows clear understanding of implicit meaning',
            ],
          },
          {
            id: 'wjec-c2-08-q4',
            questionNumber: 4,
            questionText: `"Both writers expose the exploitation of workers, but the 19th-century source is more shocking because the workers are children."\n\nTo what extent do you agree with this statement? You must refer to both Source A and Source B in your answer. [15]`,
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'comparison',
            extract: `Source A:\n${WORK_SOURCE_A}\n\nSource B:\n${WORK_SOURCE_B}`,
            extractSource: `Source A: ${WORK_SOURCE_A_REF} | Source B: ${WORK_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'I agree that Source B is more shocking, because the workers are small children, some only "four, five, and seven years" old, who sit "in the dark, alone" and are so tired that they are found "asleep on the road". However, Source A is shocking in a different way, because it is happening now. The riders earn "£4.80 an hour after expenses" and have "No sick pay. No holiday pay. No pension." Both texts show workers being treated as if they do not matter: the riders are "disposable", and the children work until they are too tired to eat. Both are powerful in different ways.',
              'Grade 6-7':
                'The statement assumes that the identity of the victim decides how shocking an account is. The exploitation of children in Source B is harrowing, and Engels needs no rhetoric to make it so: the youngest "pass twelve hours daily, in the dark, alone", and at home the children "fall asleep at once without being able to take a bite of food". But Source A shocks in a different way, by showing that exploitation has not ended but changed its appearance. The mine is visibly brutal; the gig economy is insidious because it looks like freedom, and the writer\'s point is that "freedom, it turns out, looks remarkably like exploitation when you strip away the branding." The children in the mine creep "on hands and knees" through clay and water; the riders are watched by an app that "tracked our every movement" and are sent out on streets "black with ice". Both texts describe work that is dangerous and exhausting, and both show workers with no power to refuse: the children have no choice at all, and the riders must accept "every order, no matter how far". The 19th-century text shocks through extremity; the 21st-century text shocks through nearness - it is happening on our streets, delivering our food. Engels sets out the Commission\'s evidence and lets it condemn the mines; the writer of Source A worked as a rider and exposes the system from inside, stripping away its friendly language.',
            },
            markScheme: [
              'Evaluates both texts with a personal response',
              'Compares effectiveness of different methods',
              'Uses evidence from both texts',
              'Shows nuanced critical judgement',
            ],
          },
        ],
      },
      {
        id: 'wjec-c2-08-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 60 minutes on this section. You should divide your time equally between the two tasks.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-08-q5',
            questionNumber: 5,
            questionText: `Your school is running a careers week. You have been asked to write an information sheet for Year 11 students about preparing for the world of work.\n\nWrite an informative text advising students on how to prepare for employment.\n\n[16]`,
            marks: 16,
            suggestedTimeMinutes: 25,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear informative text with: appropriate form and register; practical advice; generally accurate SPaG.',
              'Grade 6-7':
                'A well-organised text with: engaging and authoritative tone; well-developed points with examples; consistent accuracy.',
              'Grade 8-9':
                'A compelling and polished text with: sophisticated awareness of audience; original insights; technical precision.',
            },
            markScheme: [
              'Communication & Organisation (10 marks): Purpose, audience, form, structure',
              'Writing Accurately (6 marks): Sentence variety, vocabulary, SPaG',
            ],
          },
          {
            id: 'wjec-c2-08-q6',
            questionNumber: 6,
            questionText: `"Technology is destroying more jobs than it creates. Within twenty years, most people will be unable to find meaningful work."\n\nWrite the text of a speech for a school debate in which you argue your point of view on this statement.\n\n[24]`,
            marks: 24,
            suggestedTimeMinutes: 35,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A speech with: clear position; some persuasive techniques; appropriate form with address to audience; generally accurate SPaG.',
              'Grade 6-7':
                'A well-crafted speech with: sustained argument; effective rhetorical devices; convincing counter-arguments addressed; consistent accuracy.',
              'Grade 8-9':
                'An outstanding speech with: commanding voice; sophisticated reasoning; masterful use of rhetorical techniques; technical precision throughout.',
            },
            markScheme: [
              'Communication & Organisation (14 marks): Purpose, audience, form, voice, structure, paragraphing',
              'Writing Accurately (10 marks): Sentence variety, vocabulary range, SPaG',
            ],
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
        description:
          'Read both source texts carefully. Then answer all the questions in this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-09-q1',
            questionNumber: 1,
            questionText: `Read the 21st-century source text about immigration (Source A).\n\nList five things you learn about the writer's family and their experience of immigration.`,
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Source A:\n${IMMIGRATION_SOURCE_A}\n\nSource B:\n${IMMIGRATION_SOURCE_B}`,
            extractSource: `Source A: ${IMMIGRATION_SOURCE_A_REF} | Source B: ${IMMIGRATION_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                "1. The writer's parents came to Cardiff from Somalia in 1998. 2. They arrived with two suitcases and three children under five. 3. The father had been an engineer but took a job washing dishes. 4. The mother cleaned offices from five until eight every morning. 5. The writer went to university and then law school.",
            },
            markScheme: ['1 mark per valid point, maximum 5'],
          },
          {
            id: 'wjec-c2-09-q2',
            questionNumber: 2,
            questionText: `How does the writer of Source A use language to challenge negative attitudes towards immigration?\n\nYou should comment on specific words and phrases and the effects they create. [10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${IMMIGRATION_SOURCE_A}`,
            extractSource: IMMIGRATION_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses personal details to make immigration real, like "ironing a school uniform with hands that are raw from bleach." The list of what the writer\'s family contributes - "We pay our taxes, we vote, we volunteer" - counters negative stereotypes. Calling the public debate "toxic" shows the writer\'s frustration. The phrase "a problem to be solved rather than an asset to be celebrated" directly challenges negative views.',
              'Grade 6-7':
                'The writer deploys a two-stage rhetorical strategy: humanisation followed by confrontation. The opening paragraph\'s accumulation of specific detail - "two suitcases, three children under five" - transforms "immigration" from political abstraction to embodied experience. The wry alternative "either extraordinary courage or magnificent delusion" establishes a voice that is intelligent and self-aware, pre-emptively disarming the reader\'s defences. The image of ironing "with hands that are raw from bleach" is a deliberate counter-narrative: not the immigrant as burden but as sacrifice. The third paragraph\'s shift to the first-person plural - "We pay our taxes, we vote, we volunteer, we argue about rugby" - insists on belonging through the everyday. The inclusion of rugby is culturally precise, claiming Welsh identity specifically. The concluding antithesis - "a problem to be solved rather than an asset to be celebrated" - exposes the framing bias of public discourse with surgical economy.',
            },
            markScheme: [
              'Analyses specific language techniques',
              'Comments on word-level effects',
              'Considers persuasive strategies',
              'Uses embedded quotations',
            ],
          },
          {
            id: 'wjec-c2-09-q3',
            questionNumber: 3,
            questionText: `What do you learn from Source B about the lives of Irish immigrants in England's industrial towns, and about the writer's attitude towards them?\n\nYou must refer to the text to support your answer. [10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'short-answer',
            extract: `Source B:\n${IMMIGRATION_SOURCE_B}`,
            extractSource: IMMIGRATION_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5':
                'You learn that the Irish immigrants lived in dirty, uncomfortable homes with almost no furniture: they slept on "a heap of straw, a few rags" and used "an old chest for a table". One room served as kitchen, bedroom and living room, and Engels says that the habit of "crowding many persons into a single room" came to England with them. When they had no fuel they burned chairs and door-posts. Many turned to drink. Engels\'s attitude is mostly scornful: he says the Irishman\'s "crudity" places him "but little above the savage" and calls his drunkenness "bestial". But at the end he blames society, which has shut the Irishman out of every enjoyment except drink and "leaves him to himself".',
              'Grade 6-7':
                'Engels shows the Irish living at the lowest level of the industrial towns, and his account is both a record of poverty and a display of prejudice. The conditions are extreme. "The filth and comfortlessness" of the houses are, he says, "impossible to describe", and the inventory of possessions - "a heap of straw, a few rags", "a broken chair, an old chest for a table", "a tea-kettle, a few pots and dishes" - shows how little they have, in a kitchen "which is also his sleeping and living room". The list of what is burned for fuel, "chairs, door-posts, mouldings, flooring", suggests homes being slowly consumed by the people who live in them. Yet for most of the passage Engels explains all this through character rather than circumstance. The rhetorical question "Moreover, why should he need much room?" and the claim that "more than one room his family does not need" treat overcrowding as a habit brought from the "mud-cabin", not as the result of poverty. His language slides into open contempt: the singular "The Irishman" turns a whole people into one type, whose "crudity" places him "but little above the savage" and whose drinking reaches "the most bestial drunkenness". But the argument keeps turning back on society. Just before that contempt, "And since the poor devil must have one enjoyment, and society has shut him out of all others" gives the drinking a cause outside the Irishman, and the passage ends with two questions, "What else should he do?" and "How can society blame him", which place the responsibility on the society that "leaves him to himself". The reader learns that the immigrants\' lives were harsh and crowded, and that even a writer who blamed society for their condition described them with the prejudices common in his time.',
            },
            markScheme: [
              'Identifies key information from the text',
              'Selects appropriate evidence',
              'Makes valid inferences',
              "Comments on the writer's attitude, including the prejudice in his language",
            ],
          },
          {
            id: 'wjec-c2-09-q4',
            questionNumber: 4,
            questionText: `"The writer of Source A presents immigrants far more fairly than the writer of Source B, because Source A is written from personal experience, while Source B looks in from outside."\n\nTo what extent do you agree with this statement? You must refer to both Source A and Source B in your answer. [15]`,
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'comparison',
            extract: `Source A:\n${IMMIGRATION_SOURCE_A}\n\nSource B:\n${IMMIGRATION_SOURCE_B}`,
            extractSource: `Source A: ${IMMIGRATION_SOURCE_A_REF} | Source B: ${IMMIGRATION_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'I mostly agree. The writer of Source A knows immigration from the inside, describing parents who worked hard, like the mother who cleaned offices "from five until eight every morning", and children who went on to law school, general practice and a construction company. Engels looks in from outside and judges: he says the Irishman is "but little above the savage" and that drink is "the only thing" that makes his life worth having. That is not fair, because it treats a whole people as one type. However, Engels does blame society at the end, asking "How can society blame him". And Source A tells only one family\'s story, a success story, so it is not the whole picture either.',
              'Grade 6-7':
                'The statement is largely right, but the reason it gives is only half the story. Personal experience lets the writer of Source A replace a category with people: "two suitcases, three children under five", a father who "had been an engineer in Mogadishu" washing dishes, a mother ironing "with hands that are raw from bleach". The writer knows this could be dismissed as one family\'s story - "I tell you this not to inspire pity" - and so turns it into an argument against a "prevailing narrative" that treats immigrants as "a problem to be solved rather than an asset to be celebrated". Engels, by contrast, looks in from outside, and the distance shows. He writes of "The Irishman" as a single type, explains overcrowding as a habit brought from the "mud-cabin" rather than as a result of poverty, and uses the language of contempt: "but little above the savage", "the most bestial drunkenness". Yet the outsider\'s view is not simply unfair. His closing questions, "What else should he do?" and "How can society blame him", turn the blame on a society that "has shut him out of all others", every enjoyment but drink, which is close to Source A\'s own charge that the problem lies in how the host country sees immigrants. Neither text is neutral: Source A chooses a family that succeeded, and Engels sees the Irish through the prejudices common in his time. Source A is fairer because it treats immigrants as individuals rather than as a type, but it is its attitude, more than its experience, that makes the difference.',
            },
            markScheme: [
              'Evaluates both texts with a personal response',
              'Compares effectiveness of different methods',
              'Uses evidence from both texts',
              'Shows nuanced critical judgement',
            ],
          },
        ],
      },
      {
        id: 'wjec-c2-09-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 60 minutes on this section. You should divide your time equally between the two tasks.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-09-q5',
            questionNumber: 5,
            questionText: `Your school is organising a cultural diversity week. You have been asked to write a text for the school website.\n\nWrite an informative and engaging text explaining why cultural diversity benefits a school community.\n\n[16]`,
            marks: 16,
            suggestedTimeMinutes: 25,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear website text with: appropriate register for school audience; relevant ideas; generally accurate SPaG.',
              'Grade 6-7':
                'A well-crafted text with: engaging opening; thoughtful exploration of benefits; consistent accuracy and varied expression.',
              'Grade 8-9':
                'A sophisticated text with: compelling voice; nuanced argument that avoids cliché; technical virtuosity.',
            },
            markScheme: [
              'Communication & Organisation (10 marks): Purpose, audience, form, structure',
              'Writing Accurately (6 marks): Sentence variety, vocabulary, SPaG',
            ],
          },
          {
            id: 'wjec-c2-09-q6',
            questionNumber: 6,
            questionText: `"Britain has a moral duty to accept refugees, regardless of the economic cost."\n\nWrite an article for a broadsheet newspaper in which you argue your point of view on this statement.\n\n[24]`,
            marks: 24,
            suggestedTimeMinutes: 35,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A newspaper article with: appropriate headline and structure; clear argument; relevant examples; generally accurate SPaG.',
              'Grade 6-7':
                'A well-crafted article with: engaging headline; sustained and balanced argument; effective use of evidence; consistent accuracy.',
              'Grade 8-9':
                'An outstanding article with: arresting headline; sophisticated reasoning that engages with complexity; masterful control of tone; technical precision.',
            },
            markScheme: [
              'Communication & Organisation (14 marks): Purpose, audience, form, voice, structure, paragraphing',
              'Writing Accurately (10 marks): Sentence variety, vocabulary range, SPaG',
            ],
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
        description:
          'Read both source texts carefully. Then answer all the questions in this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-10-q1',
            questionNumber: 1,
            questionText: `Read the 21st-century source text about modern childhood (Source A).\n\nList five things you learn about how childhood has changed from this text.`,
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Source A:\n${CHILDHOOD_SOURCE_A}\n\nSource B:\n${CHILDHOOD_SOURCE_B}`,
            extractSource: `Source A: ${CHILDHOOD_SOURCE_A_REF} | Source B: ${CHILDHOOD_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                "1. Today's children are the most protected and most anxious generation in history. 2. Children arriving in Year 7 are more anxious and risk-averse than those in 2010. 3. They cannot resolve playground disputes without a teacher. 4. Referrals to CAMHS have increased by 353% in a decade. 5. Self-harm among teenage girls has tripled since 2010.",
            },
            markScheme: ['1 mark per valid point, maximum 5'],
          },
          {
            id: 'wjec-c2-10-q2',
            questionNumber: 2,
            questionText: `How does the writer of Source A use language to convey concerns about modern childhood?\n\nYou should comment on specific words and phrases and the effects they create. [10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${CHILDHOOD_SOURCE_A}`,
            extractSource: CHILDHOOD_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses the metaphor "bubble-wrapped" to show that children are overprotected. The phrase "hit them like a truck" creates a violent image to show how unprepared they are. The list of things they are protected from - "strangers, from traffic, from germs, from failure, from boredom" - shows how extreme the protection has become. The final sentence uses irony: trying to eliminate suffering has created more suffering.',
              'Grade 6-7':
                'The writer constructs the argument through a series of paradoxes that expose the unintended consequences of well-meaning parenting. The opening sentence yokes "most protected" and "most anxious" in deliberate juxtaposition, with "these two facts are not unrelated" employing litotes to understate a causal relationship the reader must infer. The catalogue of dangers - "strangers, from traffic, from germs, from failure, from boredom, from the unsupervised outdoors" - escalates from genuine threats to absurd ones, the anaphoric "from" creating a suffocating rhythm that mimics overprotection itself. The word "bubble-wrapped" reduces children to fragile objects, while "hit them like a truck" deploys violent vehicular imagery that suggests not gradual difficulty but sudden, devastating collision. The statistical triplet in the final paragraph - "353%," "One in six," "tripled" - creates an evidence base, but the closing sentence delivers the rhetorical coup de grâce: "eliminate suffering... produced suffering on an industrial scale." The paradox is made complete; the metaphor "industrial scale" implies mass production of the very thing society sought to prevent.',
            },
            markScheme: [
              'Analyses specific language techniques',
              'Comments on word-level effects',
              'Considers persuasive strategies',
              'Uses embedded quotations',
            ],
          },
          {
            id: 'wjec-c2-10-q3',
            questionNumber: 3,
            questionText: `What do you learn about the lives of children in a Victorian workhouse from Source B?\n\n(Tooting: in 1849 cholera killed more than 150 of the pauper children whom London parishes paid a private contractor to board at Tooting. pauper: a person living on public relief. the Chartists: a working-class movement campaigning for the vote. going aloft: climbing a ship's rigging. the Middlesex House of Correction: a London prison.)\n\nYou must refer to the text to support your answer. [10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'short-answer',
            extract: `Source B:\n${CHILDHOOD_SOURCE_B}`,
            extractSource: CHILDHOOD_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5':
                'You learn that in this workhouse the children were "looking robust and well" and seemed to be "the objects of very great care". The infants had a "large, light, airy room", ate their potatoes "heartily" and were not frightened of visitors: they held out "their small hands to be shaken". The girls\' school looked "cheerful and healthy", and the boys played freely in "a large and airy yard". Some boys had drawn ships on the wall, which suggests that they dreamed of going to sea, but Dickens says that the only way a workhouse boy could learn to climb a ship\'s rigging was the way adult paupers got better food and lodging: by smashing workhouse windows and being sent to prison. He also reminds readers of Tooting, where pauper children had been treated far worse.',
              'Grade 6-7':
                'Dickens shows that a workhouse childhood could be decent, and that this was worth remarking on only because it so often was not. The long first sentence holds back its good news behind the memory of Tooting, "that most infamous and atrocious enormity", so that the healthy children are seen against the dead ones, and the word "agreeable" sounds like relief. The children here are "looking robust and well", though "apparently the objects of very great care" is a guarded phrase from a visitor who knows that appearances can be arranged. The infants are "the little creatures", tender rather than pitiful, and the detail that they "were not cowed by the presence of strange visitors, but stretched out their small hands to be shaken, with a very pleasant confidence" suggests children who have not learned to fear adults. Even the "two mangy pauper rocking-horses rampant in a corner" are affectionately comic: "pauper" makes the toys share the children\'s poverty, and "rampant", a word from heraldry, gives the shabby horses a mock nobility. The boys roam "unrestrained about a large and airy yard, as any other schoolboys might have done", which is the passage\'s real standard: workhouse children should be treated like any others. The ending shows where they are not. The ships on the schoolroom wall reveal ambition, but the only way such a boy could learn "the art of going aloft" would be to do as adult paupers do, "by smashing as many workhouse windows as possible, and being promoted to prison". The irony of "promoted" exposes a system that offers a poor boy more chance of training in prison than in the workhouse.',
            },
            markScheme: [
              'Identifies key information from the text',
              'Selects appropriate evidence',
              'Makes valid inferences',
              'Shows clear understanding of implicit meaning',
            ],
          },
          {
            id: 'wjec-c2-10-q4',
            questionNumber: 4,
            questionText: `"Both writers are concerned about children, but their concerns are so different that the texts cannot meaningfully be compared."\n\nTo what extent do you agree with this statement? You must refer to both Source A and Source B in your answer. [15]`,
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'comparison',
            extract: `Source A:\n${CHILDHOOD_SOURCE_A}\n\nSource B:\n${CHILDHOOD_SOURCE_B}`,
            extractSource: `Source A: ${CHILDHOOD_SOURCE_A_REF} | Source B: ${CHILDHOOD_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'I disagree. The problems are different, but both writers care about how adults treat children. The writer of Source A thinks children are "bubble-wrapped" and cannot cope with anything. Dickens is relieved to find workhouse children "looking robust and well", when pauper children at Tooting had died. But both writers value freedom: Dickens likes seeing the boys "roaming unrestrained about a large and airy yard", and the writer of Source A worries that children are kept away from "the unsupervised outdoors". The texts can be compared because both want children to have a healthy, free childhood.',
              'Grade 6-7':
                'I strongly disagree. The texts are more alike than they first appear, and each sheds light on the other. Dickens writes against a background of children dying through neglect - the "most infamous and atrocious enormity committed at Tooting" - so for him the first question is whether poor children are safe and fed, and he is relieved to find them "robust and well". The writer of Source A writes at the opposite extreme, about a generation that is "the most protected" in history and pays for it in anxiety. Yet both measure a childhood by the same things: freedom, confidence and the chance to take risks. Dickens admires the infants\' "very pleasant confidence" with strangers and the boys "roaming unrestrained about a large and airy yard, as any other schoolboys might have done"; he even wants a mast set up so that they can learn "the art of going aloft", a genuinely dangerous skill. The writer of Source A laments the loss of exactly these things: children kept from "the unsupervised outdoors", who "cannot resolve playground disputes without a teacher". Dickens\'s complaint is that a poor boy\'s ambition has no outlet but prison; Source A\'s is that protected children never learn "to assess risk, tolerate discomfort, or entertain" themselves. Together the texts suggest that a healthy childhood needs both care and freedom, and that each age has found it easier to supply one than the other.',
            },
            markScheme: [
              'Evaluates both texts with a personal response',
              'Compares effectiveness of different methods',
              'Uses evidence from both texts',
              'Shows nuanced critical judgement',
            ],
          },
        ],
      },
      {
        id: 'wjec-c2-10-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 60 minutes on this section. You should divide your time equally between the two tasks.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-10-q5',
            questionNumber: 5,
            questionText: `A parents' group has asked your school to ban mobile phones during the school day.\n\nWrite a report for the headteacher outlining the arguments for and against this proposal.\n\n[16]`,
            marks: 16,
            suggestedTimeMinutes: 25,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear report with: appropriate formal conventions; arguments on both sides; generally accurate SPaG.',
              'Grade 6-7':
                'A well-structured report with: clear subheadings and formal register; balanced and well-evidenced arguments; consistent accuracy.',
              'Grade 8-9':
                'A polished report with: professional presentation; sophisticated analysis of competing perspectives; technical precision.',
            },
            markScheme: [
              'Communication & Organisation (10 marks): Purpose, audience, form, structure',
              'Writing Accurately (6 marks): Sentence variety, vocabulary, SPaG',
            ],
          },
          {
            id: 'wjec-c2-10-q6',
            questionNumber: 6,
            questionText: `"Children today have it too easy. They need to experience hardship to build character."\n\nWrite a speech for a school assembly in which you argue your point of view on this statement.\n\n[24]`,
            marks: 24,
            suggestedTimeMinutes: 35,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A speech with: clear position; some persuasive techniques; appropriate form with address to audience; generally accurate SPaG.',
              'Grade 6-7':
                'A well-crafted speech with: sustained and nuanced argument; effective rhetorical devices; awareness of counter-arguments; consistent accuracy.',
              'Grade 8-9':
                'An outstanding speech with: compelling voice that balances authority and empathy; sophisticated engagement with the complexity of the statement; technical mastery.',
            },
            markScheme: [
              'Communication & Organisation (14 marks): Purpose, audience, form, voice, structure, paragraphing',
              'Writing Accurately (10 marks): Sentence variety, vocabulary range, SPaG',
            ],
          },
        ],
      },
    ],
  },
]
