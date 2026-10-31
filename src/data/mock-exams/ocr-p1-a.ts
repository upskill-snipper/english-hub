// @ts-nocheck
import type { MockExamPaper } from './types'

/**
 * OCR GCSE English Language, Component 01 (J351/01), Communicating Information
 * and Ideas: mock papers 01 to 05, each set as OCR sets the paper.
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
 * paper.test.ts). The tasks were not OCR's either: Question 2 asked for
 * language analysis, where OCR's brings the two texts together (synthesis,
 * AO1, no marks for analysis); Question 4 asked only for a comparison, where
 * OCR's sets a statement about both texts to evaluate (AO4, 12) as well as to
 * compare (AO3, 6); there was one writing task, not a choice of two. And every
 * paper here paired two present-day texts, where OCR sets one from the 19th
 * century and one from the 20th or 21st. The September notes below reported
 * that last fault and left it.
 *
 * WHAT WAS DONE.
 *   - Each paper keeps one of its present-day texts as Text 1, still labelled
 *     as specially written, and prints as Text 2 a genuine nineteenth-century
 *     text on the same subject. Every Text 2 was cut by script from Project
 *     Gutenberg on 27 September 2026 for one of the two banks the site does
 *     not serve, src/data/mock-exams-aqa.ts and src/data/mock-exams-ocr.ts,
 *     where the extract check then read it word for word, and was copied from
 *     there by script on 24 October 2026, never retyped. No live paper prints
 *     any of them. 01 Ruskin on girls' reading (Sesame and Lilies, 1865); 02
 *     Jefferies on meadows and hedges (The Life of the Fields, 1884); 03
 *     Charlotte Mason on the wrong work for children (Home Education, 1886); 04
 *     Herbert Spencer on a boys' and a girls' school ("Physical Education",
 *     1861); 05 Olmsted on the park at Birkenhead (Walks and Talks of an
 *     American Farmer in England, 1852). The present-day texts not kept (the
 *     pieces under the invented bylines Okafor, Whitfield, Marchetti,
 *     Brightwell and Williams) are no longer in the file.
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
 *   - The answer box shows the whole paper: Question 1 prints both texts,
 *     since the mock page shows the texts of a section's first question.
 *
 * CORRECTED 31 OCTOBER 2026. Paper 02's Text 1, written for this bank, cited
 * "A 2023 report by Natural England" with a finding about depression and
 * heart disease that no Natural England report could be found to make. A text
 * written for the site may argue, but must not credit a real body with a
 * finding it has not published; the sentence now says only what research has
 * shown, that a lack of green space is linked with both. No question or
 * answer rests on it.
 *
 * CHECKED 31 OCTOBER 2026 by a second reader, every claim against the two
 * texts and the guide. What was wrong, and what changed:
 *   - Board wording, all five papers: Question 2 opened with AQA's "Use
 *     details from both sources" (with "texts") and closed with OCR's own
 *     sentence reordered, Question 3 closed with OCR's sample-paper sentence
 *     nearly word for word, and Question 4's frame and bullets were OCR's
 *     ("How far do you agree with this statement? In your answer you
 *     should: discuss what..."); all are now in this site's words, asking
 *     for the same things.
 *   - 01-q1 (c): the model answer said the messages came from "her friends";
 *     the text says only "her group chat", and now so does the answer.
 *   - 01-q3: read "not more, but less frivolous" as about how much a girl
 *     reads; it says her reading should be less frivolous, not more. Fixed.
 *   - 01-q3: "the best is the most dangerous" is not what Ruskin says; now
 *     that even the best romance "becomes dangerous".
 *   - 01-q3: called the last sentence's "we" a shift, though "we should
 *     dread" comes before it; now the "we" who dread become the readers.
 *   - 01-q4: called "She was fourteen years old." the "short final sentence"
 *     (it ends the first paragraph, not the article); now says the paragraph.
 *   - 01-q4: credited Ruskin with "care in choosing books", where he says he
 *     will not "enter ... into any question of choice of books"; now care
 *     that her books are not simply taken as they come.
 *   - 01-q4: "the reader's own excitement" (the excitement is the romance's,
 *     "by its excitement") is now the reader's "morbid thirst"; and "those
 *     who heap up the books" (nobody heaps them) those who let them pile up.
 *   - 02-q3: said the opening shows "nothing has been lost"; it speaks of the
 *     buttercups, and the passage admits losses. Now the buttercups only.
 *   - 02-q3: "The hedges—yes, the hedges" called a speaker "correcting
 *     himself"; he corrects nothing. Now stopping to insist on his point.
 *   - 02-q4: called hedges as England Jefferies's "only argument", beside the
 *     farmers' reason (shade for the cattle) the passage gives; now "own".
 *   - 03-q2: "children have" ... "examining in his own way" mismatched its
 *     pronoun; now "a child has". Its mark scheme gave Text 1 a claim only
 *     Text 2 makes (children could do far more of the right work); now so.
 *   - 03-q4: called Text 1's "Why" questions rhetorical, the reading the
 *     September review removed (he answers them: "The answer, I eventually
 *     concluded, is inertia"); model answer and mark scheme now say so.
 *   - 04-q3: called "we actually did not know that we had a girl's school"
 *     comic understatement, though it plays nothing down; model answer and
 *     mark scheme now call it deadpan humour.
 *   - 05-q1 (a): asked how "public spaces" are made unwelcoming but credited
 *     gated new developments, which the passage does not call public (the
 *     September review's point); it now asks about the modern city.
 *   - 05-q1 (b): the own-words model answer copied "standing still" and
 *     "antisocial behaviour"; now in its own words.
 *   - 05-q3: called New York Olmsted's "own city"; the aside keeps its
 *     distance ("as they amusingly say"). Now "New York's streets".
 *
 * The September notes that follow are kept for the history of the texts. The
 * questions and answers they discuss were all replaced on 24 October 2026,
 * and five of the passages they discuss are no longer printed here.
 *
 * WHAT WAS WRONG (found 26 September 2026 by scripts/check-mock-exam-extracts.mjs,
 * fixed 27 September 2026).
 *
 * All ten sources are specially written for this bank, and they were labelled
 * as published journalism: "Rachel Adeyemi, "Scrolling Into Crisis", The
 * Observer, 2024" and nine more like it, naming The Observer, New Statesman,
 * The Guardian Weekend, Prospect, the TES, The Spectator, The Sunday Times
 * Magazine, The Dublin Review, Granta and the London Review of Books. A web
 * search for each of the ten, by title and name, found none of them ("The
 * Wellness Trap" is also the title of Christy Harrison's 2023 book, which is
 * not this text). Had they been real, a 2020s article is in UK copyright,
 * and printing about two hundred words of each, two to a paper, is far past
 * the house fair-dealing limits; they are not real, so the label was false. A student was told a real newspaper had printed these words. Each
 * label now says the piece is specially written and the name an invented
 * byline. The names stay because the questions and model answers call the
 * writers by them; not a word of any passage was changed.
 *
 * The questions and model answers were not in step with the passages:
 *   - ocr-p1-03-q3 (Grade 6-7) put "exams are the least bad option" and
 *     "exams are good" in quotation marks as Marchetti's words; she wrote
 *     neither. The point is now made in the answer's own words and rests on
 *     what she did write, "every proposed alternative is worse";
 *   - ocr-p1-04-q4 (Grade 4-5) quoted "our children deserve better" as
 *     Brightwell's angry tone. Those words are Adeyemi's, from paper 01's
 *     Source A: the answer was written with another paper's passage in mind.
 *     It now quotes Brightwell's last sentence. The Grade 6-7 answer quoted
 *     "four trillion dollar" for "four trillion dollars";
 *   - wrong terms, and students copy terms: "She was fourteen years old" and
 *     "It is sentimentality" called sentence fragments (both are complete
 *     sentences); Okafor's "one might reasonably ask whether..." called a
 *     rhetorical question and an interrogative (it is a statement containing
 *     an indirect question); Marchetti's closing sentence called imperative
 *     (declarative), her "sounds humane" called free indirect discourse, and
 *     "the only" called an article; "three short declarative sentences" in
 *     ocr-p1-04-q2 quoted two;
 *   - things the passages do not say: paper 01's comparisons had Adeyemi
 *     using rhetorical questions (her article has no question mark in it);
 *     paper 05's Grade 6-7 comparison mourned a "Mrs Thompson" who appears
 *     nowhere and said Williams's estate is named (it is "a council estate in
 *     east London"); paper 03's comparisons said Marchetti draws on
 *     professional experience (she cites none) and treats the system's
 *     survival as proof of its worth (she never mentions its survival);
 *     "So is every worthwhile challenge in adult life" called her final
 *     sentence (it is the penultimate); "nostalgia" said to be used twice
 *     (once; "sentimentality" is the word used twice); a "political critique"
 *     of privilege read into "sentimentality"; Hargreaves's brochure aside
 *     said to set up "corporate dishonesty" as the theme of the rest of her
 *     argument, and her Natural England finding called statistics (it gives
 *     no figures); Brightwell said to imply regulation (she proposes no
 *     remedy); Gallagher's "when" clauses said to build to absurdity (they
 *     build to "we have crossed a line"); Williams answering "media"
 *     portrayals and outsiders who blame residents (neither is in his text);
 *     Hassan's "surveilled" read as "state control"; Q1 answers that turned
 *     "had not slept properly" into could not sleep and "correlates poorly"
 *     into does not predict. Smaller overreadings of the same kind (an
 *     "extinction" in a meadow's past perfect, "government" policies that
 *     the text calls only "policies") are brought back to the words;
 *   - ocr-p1-05-q1 asked what changed "after the youth centre was
 *     demolished", but the passage gives no order for the services that went
 *     "one by one". It now asks what the writer says the estate lost, and
 *     its answer accepts the solidarity he says was "killed" as well as the
 *     services.
 *
 * A second reading the same day, each answer against its passage, found the
 * same faults the first pass had fixed elsewhere still standing in other
 * answers, because the first pass had corrected the lines the checker
 * flagged and a list of known faults rather than every claim. It found:
 * Pennington's questions called "rhetorical questions" in 03-q4, though
 * 03-q2 rightly says they are genuine questions and he answers them himself
 * ("The answer, I eventually concluded, is inertia"); his "inertia" glossed
 * as "laziness"; "insomnia" for "had not slept properly" (the very reading
 * the first pass removed from Q1) and a "mainstream student in a normal
 * school" that 01-q2 invented; Okafor said to ask for "reflection rather
 * than action" when his last sentence asks for "proportionate,
 * evidence-based policy", and a "substitution of concern for genuine care"
 * that his words do not make; Gallagher's "mechanism" said to begin a
 * mechanistic vocabulary he "will later use" against the body as "a
 * project", when the same sentence sets the body above "any machine" and
 * "project" is no machine word; Gallagher said
 * to argue against an industry he never mentions; Hargreaves's finding
 * called "data" (it gives none, which is why "statistics" was removed);
 * "rather than residents" in 05-q2, the blamed residents the first pass
 * took out of 05-q4; "gated, monitored, surveilled" said of public spaces
 * (Hassan says it of "every new development"); "corporate authority",
 * "weapons" and "violence" read into her benches and spikes, and the
 * benches called metonyms (they are literal examples); Williams's
 * "balance sheets" read as profit. Each is now what the passage says.
 *
 * Every quotation in these answers is now in its source, word for word.
 * Not changed, and reported: the site's own guide to this paper
 * (src/app/resources/english-language/ocr/paper-1) says at least one text
 * will be from the 19th century, and all ten sources here are modern.
 */

// ─── The texts ───────────────────────────────────────────────────────────────
// Text 1 of each paper is written for this bank. Text 2 is a genuine
// nineteenth-century text, copied by script from the bank named above it,
// where it was cut by script from the Project Gutenberg text the extract
// check reads it against.

// Paper 01: what the young read and look at
const P01_TEXT_1 = `There is no doubt that social media has transformed the way we communicate, but we must stop pretending that this transformation has been entirely positive. I am a secondary school teacher, and every day I watch my students disappear into their phones during break times, scrolling through feeds that make them anxious, inadequate, and distracted. Last term, a Year 10 student told me she had not slept properly in three weeks because she was afraid of missing messages in her group chat overnight. She was fourteen years old.

The platforms themselves are designed to be addictive. Former engineers at major technology companies have admitted that features such as infinite scrolling and notification alerts were deliberately created to exploit psychological vulnerabilities. We are not dealing with a neutral tool; we are dealing with a product engineered to capture and hold attention at any cost. The fact that this product is being marketed primarily to children and teenagers should alarm us all.

I am not suggesting we ban social media - that ship has sailed. But I am suggesting that we regulate it with the same seriousness we apply to tobacco and alcohol. Our children deserve better than to be treated as data points in an advertising algorithm.`

const P01_TEXT_1_REF =
  'Specially written for this practice paper: an opinion article, "Scrolling Into Crisis", under the invented byline Rachel Adeyemi'

// From src/data/mock-exams-aqa.ts; checked against Gutenberg #1293.
const P01_TEXT_2 = `And indeed, if there were to be any difference between a girl’s education and a boy’s, I should say that of the two the girl should be earlier led, as her intellect ripens faster, into deep and serious subjects: and that her range of literature should be, not more, but less frivolous; calculated to add the qualities of patience and seriousness to her natural poignancy of thought and quickness of wit; and also to keep her in a lofty and pure element of thought. I enter not now into any question of choice of books; only let us be sure that her books are not heaped up in her lap as they fall out of the package of the circulating library, wet with the last and lightest spray of the fountain of folly.

Or even of the fountain of wit; for with respect to the sore temptation of novel reading, it is not the badness of a novel that we should dread, so much as its over-wrought interest. The weakest romance is not so stupefying as the lower forms of religious exciting literature, and the worst romance is not so corrupting as false history, false philosophy, or false political essays. But the best romance becomes dangerous, if, by its excitement, it renders the ordinary course of life uninteresting, and increases the morbid thirst for useless acquaintance with scenes in which we shall never be called upon to act.`

const P01_TEXT_2_REF =
  'John Ruskin, Sesame and Lilies (1865), from Lecture II, "Of Queens\' Gardens", his lecture on the education of girls and women (text of the 1894 edition)'

// Paper 02: meadows and the countryside
const P02_TEXT_1 = `I stood at the edge of what used to be Thornfield Meadow and tried to remember what it had looked like before the developers moved in. There had been wildflowers here - ox-eye daisies, red clover, meadow buttercups - and on summer evenings the air had hummed with insects. Now there were three hundred identical houses, a strip of turf that the brochure optimistically called a "village green," and a car park.

The loss of our green spaces is not merely an aesthetic problem. It is a public health emergency. Studies consistently demonstrate that access to nature reduces stress, improves mental health, and encourages physical activity. When we concrete over meadows and woodlands, we are not simply losing pleasant views; we are removing the very environments that keep people well. Research has linked a lack of green space with higher rates of depression and of heart disease.

We tell ourselves that housing is more important, and of course people need homes. But this is a false choice. We can build the homes we need without destroying every scrap of natural habitat. What we lack is not space but imagination - and the political will to demand better of our developers.`

const P02_TEXT_1_REF =
  'Specially written for this practice paper: a feature article, "The Last Meadow", under the invented byline Catherine Hargreaves'

// From src/data/mock-exams-ocr.ts (its OCR_P1_11_SOURCE_B); checked against Gutenberg #6164.
const P02_TEXT_2 = `Among the meadows the buttercups in spring are as innumerable as ever and as pleasant to look upon. The petal of the buttercup has an enamel of gold; with the nail you may scrape it off, leaving still a yellow ground, but not reflecting the sunlight like the outer layer. From the centre the golden pollen covers the fingers with dust like that from the wing of a butterfly. In the bunches of grass and by the gateways the germander speedwell looks like tiny specks of blue stolen, like Prometheus' fire, from the summer sky. When the mowing-grass is ripe the heads of sorrel are so thick and close that at a little distance the surface seems as if sunset were always shining red upon it. From the spotted orchis leaves in April to the honeysuckle-clover in June, and the rose and the honeysuckle itself, the meadow has changed in nothing that delights the eye. The draining, indeed, has made it more comfortable to walk about on, and some of the rougher grasses have gone from the furrows, diminishing at the same time the number of cardamine flowers; but of these there are hundreds by the side of every tiny rivulet of water, and the aquatic grasses flourish in every ditch. The meadow-farmers, dairymen, have not grubbed many hedges—only a few, to enlarge the fields, too small before, by throwing two into one. So that hawthorn and blackthorn, ash and willow, with their varied hues of green in spring, briar and bramble, with blackberries and hips later on, are still there as in the old, old time. Bluebells, violets, cowslips—the same old favourite flowers—may be found on the mounds or sheltered near by. The meadow-farmers have dealt mercifully with the hedges, because they know that for shade in heat and shelter in storm the cattle resort to them. The hedges—yes, the hedges, the very synonym of Merry England—are yet there, and long may they remain. Without hedges England would not be England. Hedges, thick and high, and full of flowers, birds, and living creatures, of shade and flecks of sunshine dancing up and down the bark of the trees—I love their very thorns. You do not know how much there is in the hedges.`

const P02_TEXT_2_REF =
  'Richard Jefferies, "Notes on Landscape Painting", part II, first printed in The Magazine of Art and collected in his The Life of the Fields (1884)'

// Paper 03: what school asks of children
const P03_TEXT_1 = `The school day as currently structured is an act of slow-motion cruelty. We take young people at the precise age when their brains are undergoing the most dramatic reorganisation since infancy, when their sleep cycles are biologically shifted towards later waking, and we force them into classrooms at half past eight in the morning to sit in rows and absorb information that many of them will never use again.

I spent twenty-five years as a headteacher, and for most of that time I enforced the system without questioning it. It was only after I retired that I had the freedom to ask: why? Why do we teach subjects in rigid fifty-minute blocks? Why do we test memory rather than understanding? Why do we sort children into hierarchies based on their ability to perform under exam conditions - a skill that correlates poorly with any measure of adult success?

The answer, I eventually concluded, is inertia. We teach this way because we have always taught this way. The exam system persists not because it produces well-educated citizens but because it produces measurable outcomes, and measurable outcomes are what governments require. We have confused measurement with meaning.`

const P03_TEXT_1_REF =
  'Specially written for this practice paper: an opinion article, "The Exam Factory", under the invented byline David Pennington'

// From src/data/mock-exams-aqa.ts; checked against Gutenberg #71087.
const P03_TEXT_2 = `A great deal has been said lately about the danger of overpressure, of requiring too much mental work from a child of tender years. The danger exists; but lies, not in giving the child too much, but in giving him the wrong thing to do, the sort of work for which the present state of his mental development does not fit him. Who expects a boy in petticoats to lift half a hundredweight? But give the child work that Nature intended for him, and the quantity he can get through with ease is practically unlimited. Whoever saw a child tired of seeing, of examining in his own way, unfamiliar things? This is the sort of mental nourishment for which he has an unbounded appetite, because it is that food of the mind on which, for the present, he is meant to grow.

Now, how far is this craving for natural sustenance met? In infant and kindergarten schools, by the object lesson, which is good so far as it goes, but is sometimes like that bean a day on which the Frenchman fed his horse. The child at home has more new things brought under his notice, if with less method. Neither at home nor at school is much effort made to set before the child the abundant ‘feast of eyes’ which his needs demand.`

const P03_TEXT_2_REF =
  'Charlotte Mason, Home Education (1886; text of the revised fifth edition), Part II, "The Child Gets Knowledge by Means of His Senses"'

// Paper 04: health, exercise and play
const P04_TEXT_1 = `The human body is a mechanism of extraordinary resilience, capable of withstanding considerable abuse and recovering from injuries that would destroy any machine. And yet we persist in treating it as though it were made of glass - as though a single missed vitamin, a single night of poor sleep, a single meal of insufficient nutritional virtue might bring the whole structure crashing down.

Our grandparents did not count calories. They did not consult apps before deciding whether to eat bread. They worked physically demanding jobs, ate whatever was available, and most of them lived to respectable ages without once having heard the word "superfood." I do not suggest that nutritional science has taught us nothing - clearly it has - but I observe that the generation with the least nutritional knowledge was also the generation with the fewest eating disorders.

There is a point at which the pursuit of health becomes its own form of illness. When a person cannot eat a meal without calculating its macronutrient composition, when exercise becomes a punishment rather than a pleasure, when the body is treated not as a home but as a project - we have crossed a line. The Greeks had a word for the good life: eudaimonia. It did not involve protein shakes.`

const P04_TEXT_1_REF =
  'Specially written for this practice paper: an essay, "Bodies and Anxieties", under the invented byline Martin Gallagher'

// From src/data/mock-exams-aqa.ts; checked against Gutenberg #16510.
const P04_TEXT_2 = `Unfortunately the fact is quite otherwise with girls. It chances, somewhat strangely, that we have daily opportunity of drawing a comparison. We have both a boys' school and a girls' school within view; and the contrast between them is remarkable. In the one case, nearly the whole of a large garden is turned into an open, gravelled space, affording ample scope for games, and supplied with poles and horizontal bars for gymnastic exercises. Every day before breakfast, again towards eleven o'clock, again at mid-day, again in the afternoon, and once more after school is over, the neighbourhood is awakened by a chorus of shouts and laughter as the boys rush out to play; and for as long as they remain, both eyes and ears give proof that they are absorbed in that enjoyable activity which makes the pulse bound and ensures the healthful activity of every organ. How unlike is the picture offered by the "Establishment for Young Ladies!" Until the fact was pointed out, we actually did not know that we had a girl's school as close to us as the school for boys. The garden, equally large with the other, affords no sign whatever of any provision for juvenile recreation; but is entirely laid out with prim grass-plots, gravel-walks, shrubs, and flowers, after the usual suburban style. During five months we have not once had our attention drawn to the premises by a shout or a laugh. Occasionally girls may be observed sauntering along the paths with lesson-books in their hands, or else walking arm-in-arm. Once indeed, we saw one chase another round the garden; but, with this exception, nothing like vigorous exertion has been visible.

Why this astounding difference? Is it that the constitution of a girl differs so entirely from that of a boy as not to need these active exercises? Is it that a girl has none of the promptings to vociferous play by which boys are impelled?`

const P04_TEXT_2_REF =
  'Herbert Spencer, "Physical Education", in Education: Intellectual, Moral, and Physical (1861)'

// Paper 05: who public space belongs to
const P05_TEXT_1 = `The great city is, and always has been, the engine of civilisation. It is in cities that ideas collide, that strangers become collaborators, that the unexpected encounter on a street corner leads to the invention that transforms a generation. The countryside produces food; the city produces culture. This is not a value judgement but a historical observation, borne out across millennia and across every continent.

And yet the modern city seems determined to engineer the spontaneity out of urban life. Every new development is gated, monitored, surveilled. Public spaces are redesigned to discourage loitering - a word that once simply meant standing still and has been quietly reclassified as antisocial behaviour. Benches are fitted with armrests positioned to prevent sleeping. Walls are studded with metal spikes. The message is unmistakable: this space belongs to those who can afford it. Everyone else, move along.

The irony is considerable. The very qualities that made cities great - density, diversity, the democratic mixing of classes and cultures - are being systematically eliminated by a development model that treats public space as a problem and private ownership as the only solution.`

const P05_TEXT_1_REF =
  'Specially written for this practice paper: an essay, "Who Owns the City?", under the invented byline Professor Amira Hassan'

// From src/data/mock-exams-ocr.ts (its OCR_P1_04_SOURCE_B); checked against Gutenberg #77164.
const P05_TEXT_2 = `But this is but a small part. Besides the cricket and an archery ground, large valleys were made verdant, extensive drives arranged—plantations, clumps, and avenues of trees formed, and a large park laid out. And all this magnificent pleasure-ground is entirely, unreservedly, and for ever the people’s own. The poorest British peasant is as free to enjoy it in all its parts as the British queen. More than that, the baker of Birkenhead has the pride of an OWNER in it.

Is it not a grand good thing? But you are inquiring who paid for it. The honest owners—the most wise and worthy townspeople of Birkenhead—in the same way that the New-Yorkers pay for “the Tombs,” and the Hospital, and the cleaning (as they amusingly say) of their streets.

Of the farm which was purchased, one hundred and twenty acres have been disposed of in the way I have described. The remaining sixty acres, encircling the park and garden, were reserved to be sold or rented, after being well graded, streeted, and planted, for private building lots. Several fine mansions are already built on these (having private entrances to the park), and the rest now sell at $1.25 a square yard. The whole concern cost the town between five and six hundred thousand dollars. It gives employment at present, to ten gardeners and labourers in summer, and to five in winter.`

const P05_TEXT_2_REF =
  'Frederick Law Olmsted, Walks and Talks of an American Farmer in England (New York: George P. Putnam, 1852), Chapter VIII, on the new park at Birkenhead'

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

export const ocrP1A: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 01: what the young read and look at
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-p1-01',
    board: 'OCR',
    paperNumber: 1,
    title: 'Component 01: Communicating Information and Ideas',
    subtitle: 'English Language J351/01',
    code: 'J351/01',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p1-01-reading',
        title: 'Section A: Reading',
        description: `Read the two texts below, then answer all four questions. You are advised to spend about one hour on this section, about 12 minutes of it reading the texts.\n\nText 1: ${P01_TEXT_1_REF}\nText 2: ${P01_TEXT_2_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-01-q1',
            questionNumber: 1,
            questionText: `Look again at the first paragraph of Text 1, from "There is no doubt" to "She was fourteen years old."\n\n(a) Give one word the writer uses to describe how the feeds make the students feel. [1]\n\n(b) For how long had the Year 10 student not slept properly? [1]\n\n(c) Explain, in your own words, why the Year 10 student had not been sleeping properly. [2]`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Text 1:\n${P01_TEXT_1}\n\nText 2:\n${P01_TEXT_2}`,
            extractSource: `Text 1: ${P01_TEXT_1_REF} | Text 2: ${P01_TEXT_2_REF}`,
            modelAnswers: {
              'Grade 4-5': `(a) Anxious.\n(b) Three weeks.\n(c) She was afraid of missing something (1): she did not want to miss any messages that might arrive in her group chat during the night (1).`,
            },
            markScheme: [
              '(a) 1 mark for any one of: anxious, inadequate, distracted. A list of all three copied together is not credited, since the question asks for one word.',
              '(b) 1 mark: three weeks.',
              "(c) 2 marks: 1 for her fear or worry, 1 for what she feared, missing messages in her group chat overnight. The answer should be in the student's own words; one that only copies the sentence earns at most 1 mark.",
              'Every answer must come from the first paragraph of Text 1.',
            ],
          },
          {
            id: 'ocr-p1-01-q2',
            questionNumber: 2,
            questionText: `What do the two writers think is harmful about the things young people read or look at?\n\nBack up each point with evidence from both texts.`,
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: `Text 1:\n${P01_TEXT_1}\n\nText 2:\n${P01_TEXT_2}`,
            extractSource: `Text 1: ${P01_TEXT_1_REF} | Text 2: ${P01_TEXT_2_REF}`,
            modelAnswers: {
              'Grade 8-9': `Both writers locate the harm less in what young people read or look at than in how completely it takes hold of them. The students in Text 1 "disappear into their phones", and the platforms are "designed to be addictive", built "to capture and hold attention at any cost". Ruskin makes the same distinction about novels: "it is not the badness of a novel that we should dread, so much as its over-wrought interest". In both texts the price is paid by ordinary life. The feeds leave students "anxious, inadequate, and distracted", and a fourteen-year-old had not slept properly for three weeks for fear of "missing messages"; Ruskin fears that a romance "renders the ordinary course of life uninteresting" and feeds a "morbid thirst". Both also object to the sheer quantity that reaches the young without being chosen: Text 1 names "infinite scrolling", and Ruskin pictures books "heaped up in her lap as they fall out of the package of the circulating library". Each writer, finally, expects adults to act on it, the modern writer through regulation as serious as that for "tobacco and alcohol", Ruskin by making sure a girl's reading is "not more, but less frivolous".`,
            },
            markScheme: [
              ...MARK_LEVELS_Q2,
              'Links to credit: the harm lies in how strongly the material grips the young ("designed to be addictive"; a novel\'s "over-wrought interest"); it spoils ordinary life (students left "anxious, inadequate, and distracted"; a romance that "renders the ordinary course of life uninteresting"); too much of it arrives unchosen ("infinite scrolling"; books "heaped up in her lap"); adults should step in.',
            ],
          },
          {
            id: 'ocr-p1-01-q3',
            questionNumber: 3,
            questionText: `Look again at Text 2, the whole text.\n\nHow does Ruskin use language and structure to warn his audience about the dangers of careless reading?\n\nRefer closely to the text, and use relevant subject terms to explain its effects.`,
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: P01_TEXT_2,
            extractSource: P01_TEXT_2_REF,
            modelAnswers: {
              'Grade 8-9': `Ruskin builds his warning gradually, and the structure of the passage does much of the persuading. He opens cautiously, with a conditional ("if there were to be any difference between a girl's education and a boy's") and a compliment: the girl should be led into "deep and serious subjects" because "her intellect ripens faster". Beginning with praise of girls' minds makes the restriction that follows sound like respect rather than suspicion, and the correction "not more, but less frivolous" overturns what his audience might expect, that a girl's reading should be the lighter of the two.\n\nHis central image is of carelessness. Books "heaped up in her lap as they fall out of the package of the circulating library" arrive in bulk and unchosen; the verbs "heaped" and "fall" make the girl passive, a receiver rather than a chooser. The metaphor that follows, books "wet with the last and lightest spray of the fountain of folly", mocks fashionable reading as spray, the newest and flimsiest drops, and the alliteration of "last and lightest" and "fountain of folly" gives the mockery a light, almost witty sound.\n\nThe second paragraph opens with a fragment, "Or even of the fountain of wit", which carries the image across the paragraph break and widens the warning: even clever books can do harm. The word "temptation" in "the sore temptation of novel reading" turns reading into a moral danger. Ruskin then sets out two balanced comparisons, "The weakest romance is not so stupefying as..." and "the worst romance is not so corrupting as...", and a list built on repetition, "false history, false philosophy, or false political essays". These seem to defend novels, which makes the turn of the final sentence more striking: "But the best romance becomes dangerous". The paradox that even the best romance "becomes dangerous" is the point the whole passage has been moving towards.\n\nThe last sentence is long and gathers weight as it goes. "Excitement" leads to a life made "uninteresting", and the water imagery returns as a "morbid thirst", an appetite that has become a sickness. The "we" who should "dread" a novel's "over-wrought interest" now become its readers, in "scenes in which we shall never be called upon to act", so that Ruskin and his audience share the danger, and the words "scenes" and "act", which belong to the stage as well as to life, end the passage on his central fear: stories tempt readers to live in scenes that will never be their own.`,
            },
            markScheme: [
              ...MARK_LEVELS_Q3,
              'Language to credit: the books "heaped up in her lap" and the metaphor of the "spray of the fountain of folly", continued in "fountain of wit" and "morbid thirst"; the moral vocabulary ("temptation", "corrupting", "frivolous"); the paradox that "the best romance becomes dangerous"; the inclusive "we".',
              'Structure to credit: the cautious, complimentary opening; the narrowing from education to books, to novels, to the best novels; the fragment that opens the second paragraph; the balanced comparisons that delay the turn at "But"; the long final sentence that ends on "never be called upon to act".',
            ],
          },
          {
            id: 'ocr-p1-01-q4',
            questionNumber: 4,
            questionText: `"Both writers see young people as the victims of what they read or look at, not as the ones to blame."\n\nDecide how far you agree with this view.\n\nIn your answer:\n• weigh up what each writer says about young people and what they read or look at, and how far the statement fits each text\n• explain the effect each text has on you as a reader\n• compare the writers' ideas, and the ways each of them gets those ideas across\n• quote from both texts to back up your points.`,
            marks: 18,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: `Text 1:\n${P01_TEXT_1}\n\nText 2:\n${P01_TEXT_2}`,
            extractSource: `Text 1: ${P01_TEXT_1_REF} | Text 2: ${P01_TEXT_2_REF}`,
            modelAnswers: {
              'Grade 8-9': `I largely agree, but the statement fits Text 1 far better than Text 2, and the difference shows how differently the writers see young people.\n\nThe writer of Text 1 presents the students as victims from the first paragraph. They "disappear into their phones", as if the screen swallows them, and it is the feeds that act on them: they "make them anxious, inadequate, and distracted". The Year 10 student is given as evidence, not criticised, and the paragraph's short last sentence, "She was fourteen years old.", asks the reader to see a child, not a careless user. The blame is placed firmly elsewhere. The platforms "are designed to be addictive", and their features were "deliberately created to exploit psychological vulnerabilities". The adverb "deliberately" turns a habit into something done to the young on purpose, and the final image of children "treated as data points in an advertising algorithm" makes them the product being sold. As a reader I am left angry with the companies, not with the teenagers.\n\nRuskin, too, places much of the responsibility on adults. "Let us be sure that her books are not heaped up in her lap" is addressed to the people who choose a girl's books, and the image makes the girl passive: the books simply "fall out of the package of the circulating library" onto her. In that sense she is as much at the mercy of a supply she did not choose as the students in Text 1 are of their feeds. Yet Ruskin's language also places some of the danger inside the reader. A "temptation" is something a person must resist, and the "morbid thirst" belongs to the reader, not to the book. His fear is that reading will make "the ordinary course of life uninteresting", a weakness he expects in the reader's own mind. So Ruskin sees the girl less as a victim than as someone to be guarded, partly from books and partly from herself.\n\nThe writers' methods sharpen this difference. The modern writer speaks as a witness ("I am a secondary school teacher") with a single case and the vocabulary of business: "product", "marketed", "algorithm". The target is an industry, and the remedy is law, regulation "with the same seriousness we apply to tobacco and alcohol". Ruskin speaks as a moralist to an audience of adults, and his vocabulary is moral: "frivolous", "folly", "corrupting", "temptation". He offers no law, only care that her books are not simply taken as they come, and his inclusive "we" in "scenes in which we shall never be called upon to act" admits that adults feel the same pull.\n\nOverall, the statement is true of Text 1, where young people are the victims of an industry, and only partly true of Text 2. Ruskin blames those who let the books pile up unchosen, but he also treats the reader's own "morbid thirst" as part of the danger. Both writers do agree, though, that the young should not be left alone with what they read or look at.`,
            },
            markScheme: {
              'AO4, evaluation (12 marks)': [
                ...MARK_LEVELS_AO4,
                'In this paper: Text 1 blames the platforms outright ("deliberately created to exploit psychological vulnerabilities") and treats the students as harmed; Text 2 blames those who let books be "heaped up in her lap", but a "temptation" and a "morbid thirst" are partly the reader\'s own. Credit a verdict that differs between the texts.',
              ],
              'AO3, comparison (6 marks)': [
                ...MARK_LEVELS_AO3,
                'Methods to compare: a teacher\'s witness and one case against a lecture\'s general argument; the vocabulary of business ("data points in an advertising algorithm") against the vocabulary of morals ("folly", "temptation"); a call for law against advice to the adults who choose a girl\'s books.',
              ],
              Marking: ['The two grids are marked separately and the marks added, out of 18.'],
            },
          },
        ],
      },
      {
        id: 'ocr-p1-01-writing',
        title: 'Section B: Writing',
        description:
          'Answer ONE question: Question 5 or Question 6. You are advised to spend about one hour on this section, including time to plan and to check your work.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-01-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText: `Answer ONE of the following questions.\n\nQuestion 5\n"Young people today learn more from their screens than they ever did from books."\nWrite an article for a magazine for parents in which you give your views on this statement.\nIn your article you could:\n• write about what young people gain from screens and from books\n• explain any dangers you see in either\n• give parents advice on how to help.\n\nOR\n\nQuestion 6\nYour school is holding a debate on the motion "Phones should be handed in at the school gate every morning".\nWrite a speech for the debate in which you argue for or against the motion.\nIn your speech you could:\n• describe how phones are used during the school day now\n• explain what students would gain or lose\n• answer the arguments of the other side.\n\nIn your answer you will be assessed on content and organisation (24 marks) and on technical accuracy (16 marks).`,
            marks: 40,
            suggestedTimeMinutes: 60,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Question 6, a speech against the motion.\n\nGood afternoon, Madam Chair, members of the panel, and fellow students.\n\nAt ten to nine tomorrow morning, eight hundred of us will walk through the gate of this school. If the motion passes, eight hundred phones will be dropped into plastic trays, and eight hundred of us will spend the day as our grandparents did: unreachable. I am here to argue that this would be a mistake, and not for the reason you might expect.\n\nThe other side will tell you that phones distract us. They are right. I have watched a whole row of a geography class glance down at once when a group chat lit up, and I have been one of them. But a phone in a bag is already silent, and our school rules already say so. The problem is not that phones exist in this building. The problem is that the rules are not enforced. Taking every phone at the gate punishes the student who keeps the rules in order to catch the one who does not.\n\nConsider what we would lose. My younger brother has asthma. On the days he forgets his inhaler, the only reason my mother knows within minutes is a message he sends at lunchtime. Students who walk home in the dark in December, who care for a parent, or who work an evening shift, rely on being reachable at four o'clock, not at a quarter past once the trays have been sorted. Taking our phones does not remove our responsibilities. It only removes the means of meeting them.\n\nThere is a quieter loss too. In two years most of us will leave this school. We will face timetables, bank accounts, job applications and a thousand notifications, and nobody will collect our phones at the door. Where will we have learned to manage them? Not here, if the motion passes. Self-control is not taught by removing temptation. It is taught by practising it, with adults nearby who can help when we fail.\n\nSo what do I propose instead? Keep phones in bags, switched off, during lessons. Let teachers take a phone for the rest of the day from anyone who breaks the rule, and let that rule be enforced in every classroom, not only in some. Give us lessons, in tutor time, on how these devices are designed to hold our attention, so that we understand the game we are being made to play. Treat us, in short, as people who are learning to be adults, because that is what we are.\n\nMembers of the panel, the motion offers a simple answer to a difficult problem. Simple answers are attractive. They are also, very often, wrong. A tray at the gate would make this building quieter for a few hours a day. It would not make any of us wiser on the day we walk out of it for the last time. I urge you to oppose the motion.\n\nThank you.`,
            },
            markScheme: {
              'AO5, content and organisation (24 marks)': MARK_LEVELS_AO5,
              'AO6, technical accuracy (16 marks)': MARK_LEVELS_AO6,
              'For these tasks': [
                MARK_WRITING_NOTE,
                'Question 5 is an article for parents: a clear view on the statement, a tone that respects adult readers, and advice that is practical.',
                'Question 6 is a speech: it should sound spoken, address its listeners, take a clear side, answer the other side, and end with a call to vote.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 02: meadows and the countryside
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-p1-02',
    board: 'OCR',
    paperNumber: 1,
    title: 'Component 01: Communicating Information and Ideas',
    subtitle: 'English Language J351/01',
    code: 'J351/01',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p1-02-reading',
        title: 'Section A: Reading',
        description: `Read the two texts below, then answer all four questions. You are advised to spend about one hour on this section, about 12 minutes of it reading the texts.\n\nText 1: ${P02_TEXT_1_REF}\nText 2: ${P02_TEXT_2_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-02-q1',
            questionNumber: 1,
            questionText: `Look again at the first paragraph of Text 1, from "I stood at the edge" to "and a car park."\n\n(a) Name two kinds of wildflower that the writer says grew on Thornfield Meadow. [2]\n\n(b) The writer says the brochure "optimistically called" the strip of turf a "village green". Explain, in your own words, what the writer suggests by this. [2]`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Text 1:\n${P02_TEXT_1}\n\nText 2:\n${P02_TEXT_2}`,
            extractSource: `Text 1: ${P02_TEXT_1_REF} | Text 2: ${P02_TEXT_2_REF}`,
            modelAnswers: {
              'Grade 4-5': `(a) Ox-eye daisies and red clover (meadow buttercups would also be right).\n(b) The writer thinks the name makes the place sound better than it really is (1): it is only a small strip of grass, nothing like the green of a real village, and certainly no replacement for the meadow (1).`,
            },
            markScheme: [
              '(a) 1 mark each, up to 2, for: ox-eye daisies, red clover, meadow buttercups.',
              '(b) 2 marks: 1 for seeing that the name is more hopeful or flattering than the place deserves; 1 for what it really is, a small strip of turf that does not live up to the name or replace what was lost. Credit the idea that the developers are dressing up a poor exchange.',
              'Every answer must come from the first paragraph of Text 1.',
            ],
          },
          {
            id: 'ocr-p1-02-q2',
            questionNumber: 2,
            questionText: `What do the two writers value about meadows and the countryside?\n\nBack up each point with evidence from both texts.`,
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: `Text 1:\n${P02_TEXT_1}\n\nText 2:\n${P02_TEXT_2}`,
            extractSource: `Text 1: ${P02_TEXT_1_REF} | Text 2: ${P02_TEXT_2_REF}`,
            modelAnswers: {
              'Grade 8-9': `Both writers value the countryside first for its wild flowers, which each names one by one. The writer of Text 1 remembers "ox-eye daisies, red clover, meadow buttercups" on Thornfield Meadow, and Jefferies finds buttercups "as innumerable as ever", with speedwell, sorrel and "Bluebells, violets, cowslips". Both prize the life a meadow holds as well: Text 1 recalls that "the air had hummed with insects", and Jefferies loves hedges "full of flowers, birds, and living creatures". Each also sees the land as useful, not only pretty. For the modern writer, nature "reduces stress, improves mental health, and encourages physical activity", so green spaces "keep people well"; for Jefferies, the hedges give the cattle "shade in heat and shelter in storm". Finally, both value a link with the past. Text 1 is about what "used to be" there, and Jefferies delights in flowers and hedges that are still there "as in the old, old time". The difference is that the writer of Text 1 mourns a meadow already lost, while Jefferies is glad that his has "changed in nothing that delights the eye"; both want such places kept.`,
            },
            markScheme: [
              ...MARK_LEVELS_Q2,
              'Links to credit: wild flowers, named in both; the creatures a meadow supports ("hummed with insects"; "birds, and living creatures"); usefulness, to people\'s health in Text 1 and to cattle in Text 2; a link with the past ("used to be"; "the old, old time"); the wish that such places be kept.',
            ],
          },
          {
            id: 'ocr-p1-02-q3',
            questionNumber: 3,
            questionText: `Look again at Text 2, the whole text.\n\nHow does Jefferies use language and structure to share his delight in the meadows and hedges?\n\nRefer closely to the text, and use relevant subject terms to explain its effects.`,
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: P02_TEXT_2,
            extractSource: P02_TEXT_2_REF,
            modelAnswers: {
              'Grade 8-9': `Jefferies writes like a guide walking the reader through the meadow, and the passage is built to move from close detail to a celebration of the hedges.\n\nHe begins with reassurance. The present tense and the comparison "as innumerable as ever and as pleasant to look upon" tell us at once that the buttercups, at least, are as plentiful as they ever were. Then he looks very closely. The buttercup's petal "has an enamel of gold", a metaphor that makes a common flower sound crafted and precious, and the second person in "with the nail you may scrape it off" invites us to touch it ourselves. Similes keep the eye moving: pollen "like that from the wing of a butterfly", and speedwell "like tiny specks of blue stolen, like Prometheus' fire, from the summer sky". The allusion to the fire Prometheus stole from the gods makes a tiny flower seem a gift from heaven, and the sorrel looks "as if sunset were always shining red upon it", so the meadow seems to hold the best moment of the day for ever.\n\nThe structure follows the year, "From the spotted orchis leaves in April to the honeysuckle-clover in June", and then makes a small concession. The draining has reduced "the number of cardamine flowers", but the clause after the semicolon answers it at once: "of these there are hundreds". Admitting a little change makes the claim that the meadow "has changed in nothing that delights the eye" easier to believe.\n\nThe hedges are the climax. Lists of paired plants, "hawthorn and blackthorn, ash and willow", and the alliteration of "briar and bramble, with blackberries", give a sense of crowded plenty. The farmers "have dealt mercifully with the hedges", a phrase which suggests that the hedges could have been destroyed, so their survival feels like a reprieve. Then the writing becomes openly emotional. The repetition and the break in "The hedges—yes, the hedges, the very synonym of Merry England—are yet there" sound like a speaker stopping to insist on his point in his excitement, and "long may they remain" is close to a toast. The short sentence "Without hedges England would not be England" ties the hedges to the nation itself, and the paradox "I love their very thorns" shows that he loves even what hurts.\n\nThe ending turns to the reader: "You do not know how much there is in the hedges." This short, direct sentence leaves us feeling that the passage has only begun to show what is there, and invites us to go and look for ourselves.`,
            },
            markScheme: [
              ...MARK_LEVELS_Q3,
              'Language to credit: the metaphor of the petal\'s "enamel of gold"; the similes and the allusion in "like Prometheus\' fire"; the lists of plants and the alliteration of "briar and bramble"; "dealt mercifully"; the repetition in "The hedges—yes, the hedges"; the paradox "I love their very thorns".',
              'Structure to credit: one long paragraph that moves from flowers to hedges; the opening reassurance; the movement through the year from April to June; the small concession about the draining, answered at once; the build to the hedges as the climax; the short final sentence addressed to the reader.',
            ],
          },
          {
            id: 'ocr-p1-02-q4',
            questionNumber: 4,
            questionText: `"Both writers make the reader feel that the countryside is worth fighting for."\n\nDecide how far you agree with this view.\n\nIn your answer:\n• weigh up what each writer says about meadows and the countryside, and how far the statement fits each text\n• explain the effect each text has on you as a reader\n• compare the writers' ideas, and the ways each of them gets those ideas across\n• quote from both texts to back up your points.`,
            marks: 18,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: `Text 1:\n${P02_TEXT_1}\n\nText 2:\n${P02_TEXT_2}`,
            extractSource: `Text 1: ${P02_TEXT_1_REF} | Text 2: ${P02_TEXT_2_REF}`,
            modelAnswers: {
              'Grade 8-9': `I agree that both writers make the countryside seem worth protecting, but only the writer of Text 1 asks the reader to fight for it. Jefferies makes us love it, and leaves the fighting implied.\n\nText 1 begins with loss. The writer "tried to remember" Thornfield Meadow, so we meet the meadow only as a memory, already gone, and the list "ox-eye daisies, red clover, meadow buttercups" is a list of what has been destroyed. The contrast with "three hundred identical houses" and "a car park" is bleak, and a brochure that "optimistically called" a strip of turf a "village green" makes the developers seem dishonest as well as destructive. The argument then widens from feeling to fact: the loss is "a public health emergency", and green spaces are "the very environments that keep people well". The ending is a call to arms: "What we lack is not space but imagination", and the "political will to demand better of our developers". As a reader, I am made to feel both sad and responsible.\n\nJefferies, by contrast, writes from inside a meadow that survives. The buttercups are "as innumerable as ever", and the meadow "has changed in nothing that delights the eye". His effect on me is delight rather than alarm: the gold "enamel" of the petal and the speedwell "like tiny specks of blue stolen, like Prometheus' fire, from the summer sky" make an ordinary field feel rich and strange. Yet there are hints that this happiness depends on other people's choices. The farmers "have not grubbed many hedges", which tells us that some were grubbed up, and they "have dealt mercifully with the hedges", which implies that they could have done otherwise. "Long may they remain" is a hope, not a certainty. So Jefferies does make the countryside feel worth defending, but by making us love it, not by warning us.\n\nThe writers' methods match their purposes. The writer of Text 1 moves from a first-person memory to evidence ("Studies consistently demonstrate") and then to a direct challenge, shifting from "I" to "we" so that the reader shares the blame and the duty: "We tell ourselves that housing is more important". Jefferies stays with close description in one long paragraph, and his own argument is emotional and national: "Without hedges England would not be England." Both, though, use lists of named flowers to make the reader see what is at stake, and both turn to the reader at the end, Text 1 with "we" and Jefferies with "You do not know how much there is in the hedges."\n\nOverall, the statement is fully true of Text 1, which is written to make us act, and partly true of Text 2. Jefferies makes the reader value the countryside so much that the thought of losing it becomes painful, which may in the end be a stronger reason to fight for it than any study.`,
            },
            markScheme: {
              'AO4, evaluation (12 marks)': [
                ...MARK_LEVELS_AO4,
                'In this paper: Text 1 mourns a meadow lost and ends with a demand for "political will"; Text 2 celebrates a meadow that survives, though "dealt mercifully" and "long may they remain" hint that it could be lost. Credit a verdict that differs between the texts.',
              ],
              'AO3, comparison (6 marks)': [
                ...MARK_LEVELS_AO3,
                'Methods to compare: memory, evidence and argument against close description; "I" becoming "we" against a guide\'s second person; named flowers in both; endings that turn to the reader in both.',
              ],
              Marking: ['The two grids are marked separately and the marks added, out of 18.'],
            },
          },
        ],
      },
      {
        id: 'ocr-p1-02-writing',
        title: 'Section B: Writing',
        description:
          'Answer ONE question: Question 5 or Question 6. You are advised to spend about one hour on this section, including time to plan and to check your work.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-02-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText: `Answer ONE of the following questions.\n\nQuestion 5\n"New homes matter more than green fields."\nWrite an article for your local newspaper in which you argue for or against this statement.\nIn your article you could:\n• write about the need for new homes in your area\n• explain what green spaces mean to the people who live near them\n• suggest how both needs could be met.\n\nOR\n\nQuestion 6\nWrite a letter to a younger relative, persuading them to spend more of their free time outdoors.\nIn your letter you could:\n• describe a place outdoors that matters to you\n• explain what time outdoors can give a young person\n• suggest some easy ways to start.\n\nIn your answer you will be assessed on content and organisation (24 marks) and on technical accuracy (16 marks).`,
            marks: 40,
            suggestedTimeMinutes: 60,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Question 5, an article arguing for the statement.\n\nA field cannot shelter a family\n\nThere is a field at the end of my road that I have walked across nearly every day of my life. In spring it is full of buttercups; in autumn the hedges are heavy with blackberries. Next year, if the council approves the plans, it will hold one hundred and twenty homes. I will be sorry to lose it. I also think the council should say yes.\n\nLet me explain why. Last winter my cousin, her partner and their two small children lived in a single room above a takeaway, because nothing else in this town was within their means. The windows ran with damp, and the baby coughed all through January. They are not unusual. Every school in our area has children who move from one rented flat to another, changing teachers and friends each time. When we say that green fields matter more than homes, we are saying that a view matters more than those children. I cannot say that, and I do not think most of us would if we had to say it to their faces.\n\nThose who object to the plans make serious points, and they deserve serious answers. Green space is good for our health: people who can walk among trees are calmer and fitter. Wildlife needs room to live. But none of this is an argument for building nothing. It is an argument for building well. The plans for my road include a path along the stream, a play area and a strip of meadow that will be left uncut. A field that a few dog walkers use could become a neighbourhood that hundreds of people live in and enjoy.\n\nThere is also an uncomfortable truth to face. Many of the people who oppose new homes already own one. It is easy to defend a green field when your own house was built on another green field fifty years ago. Every estate in this town was once farmland, and the families who moved into those streets were grateful for them.\n\nSo I would ask the council for three things. First, build on empty land in the town centre before touching any field. Second, when a field must be used, make sure that a fair share of the homes are ones local families can afford, not only large houses for buyers from elsewhere. Third, protect the best places completely, the ancient woods and the meadows rich in wildlife, so that what is lost is the ordinary field and never the irreplaceable one.\n\nI will miss the buttercups at the end of my road. But I would rather my cousin's children grew up in a dry home within sight of a new meadow than in a damp room within sight of an old one. Homes matter more. Let us build them with care.`,
            },
            markScheme: {
              'AO5, content and organisation (24 marks)': MARK_LEVELS_AO5,
              'AO6, technical accuracy (16 marks)': MARK_LEVELS_AO6,
              'For these tasks': [
                MARK_WRITING_NOTE,
                'Question 5 is a newspaper article for local readers: a clear position on the statement, counter-arguments answered, and a headline and ending that suit the form.',
                'Question 6 is a letter: set out and addressed as a letter, in a warm but persuasive voice that suits a younger reader the writer knows.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 03: what school asks of children
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-p1-03',
    board: 'OCR',
    paperNumber: 1,
    title: 'Component 01: Communicating Information and Ideas',
    subtitle: 'English Language J351/01',
    code: 'J351/01',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p1-03-reading',
        title: 'Section A: Reading',
        description: `Read the two texts below, then answer all four questions. You are advised to spend about one hour on this section, about 12 minutes of it reading the texts.\n\nText 1: ${P03_TEXT_1_REF}\nText 2: ${P03_TEXT_2_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-03-q1',
            questionNumber: 1,
            questionText: `Look again at the second paragraph of Text 1, from "I spent twenty-five years" to "any measure of adult success?"\n\n(a) For how many years did the writer work as a headteacher? [1]\n\n(b) When did the writer first feel free to question the system? [1]\n\n(c) The writer says that performing under exam conditions is "a skill that correlates poorly with any measure of adult success". Explain, in your own words, what the writer means. [2]`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Text 1:\n${P03_TEXT_1}\n\nText 2:\n${P03_TEXT_2}`,
            extractSource: `Text 1: ${P03_TEXT_1_REF} | Text 2: ${P03_TEXT_2_REF}`,
            modelAnswers: {
              'Grade 4-5': `(a) Twenty-five years.\n(b) Only after retiring.\n(c) Doing well in an exam is a particular skill of its own (1), and it has little connection with how well people do later, in their adult lives (1).`,
            },
            markScheme: [
              '(a) 1 mark: twenty-five years.',
              '(b) 1 mark: after retiring, or once retired.',
              '(c) 2 marks, for an explanation in the student\'s own words: 1 for the idea that performing in exams is a particular skill, 1 for the idea that it is a poor guide to, or has little link with, success as an adult. Copying "correlates poorly" earns nothing for that idea.',
              'Every answer must come from the second paragraph of Text 1.',
            ],
          },
          {
            id: 'ocr-p1-03-q2',
            questionNumber: 2,
            questionText: `What do the two writers think schools get wrong about the work they give children?\n\nBack up each point with evidence from both texts.`,
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: `Text 1:\n${P03_TEXT_1}\n\nText 2:\n${P03_TEXT_2}`,
            extractSource: `Text 1: ${P03_TEXT_1_REF} | Text 2: ${P03_TEXT_2_REF}`,
            modelAnswers: {
              'Grade 8-9': `Both writers believe that schools give children the wrong kind of work for the stage they have reached. The writer of Text 1 points out that teenagers' brains are "undergoing the most dramatic reorganisation since infancy" and their sleep is "biologically shifted towards later waking", yet they must be in class at "half past eight in the morning". Mason argues in the same way that the danger lies "in giving him the wrong thing to do", work "for which the present state of his mental development does not fit him". Both also think the work is too narrow. Text 1 complains that schools "test memory rather than understanding" and fill pupils with "information that many of them will never use again"; Mason says that a child has "an unbounded appetite" for "examining in his own way, unfamiliar things", but that the object lesson is sometimes "like that bean a day on which the Frenchman fed his horse". Neither writer thinks children are lazy or fragile: Mason says a child can get through work "with ease" if it is the right work, and Text 1 blames "inertia" and a system built for "measurable outcomes", not the pupils.`,
            },
            markScheme: [
              ...MARK_LEVELS_Q2,
              'Links to credit: work that does not fit the child\'s stage of growth (teenagers\' sleep and brains; "the present state of his mental development"); work that is too narrow (memory, not understanding; too little of the "feast of eyes"); neither writer blames the children, and Text 2 says they could do far more of the right work.',
            ],
          },
          {
            id: 'ocr-p1-03-q3',
            questionNumber: 3,
            questionText: `Look again at Text 2, the whole text.\n\nHow does Mason use language and structure to argue that children are given the wrong kind of mental work?\n\nRefer closely to the text, and use relevant subject terms to explain its effects.`,
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: P03_TEXT_2,
            extractSource: P03_TEXT_2_REF,
            modelAnswers: {
              'Grade 8-9': `Mason argues by correcting a popular idea, and her first paragraph is built on that correction. She opens by reporting what "A great deal has been said lately", the "danger of overpressure", concedes it in three words, "The danger exists", and then turns it round with a balanced contrast: the danger lies "not in giving the child too much, but in giving him the wrong thing to do". The semicolon and the "not... but" pattern let her agree and disagree at once, which makes her sound fair-minded rather than contrary.\n\nShe proves the point with a rhetorical question that is almost a joke: "Who expects a boy in petticoats to lift half a hundredweight?" The comparison with the body makes the mental point concrete, and the absurd picture of a small child under a heavy load shows that the fault lies with the adult who sets the task. The imperative that follows, "But give the child work that Nature intended for him", and the capital letter on "Nature" make the right work sound like a law of nature rather than a teacher's choice, and "practically unlimited" answers the fear of overpressure directly. A second question, "Whoever saw a child tired of seeing, of examining in his own way, unfamiliar things?", expects the reader to answer that no one ever has, so the reader supplies her evidence.\n\nHer central metaphor is food. Seeing new things is "mental nourishment" for which the child has "an unbounded appetite", "that food of the mind on which, for the present, he is meant to grow", and "for the present" reminds us that the right food changes as the child grows. The second paragraph opens with another question, "Now, how far is this craving for natural sustenance met?", which moves the argument from what children need to what they get. Her judgements are measured, since the object lesson "is good so far as it goes" and home offers more "if with less method", but the comic simile of "that bean a day on which the Frenchman fed his horse" shows how meagre the ration is: no horse can live on a bean a day.\n\nThe passage ends where the metaphor has been heading. "Neither at home nor at school" shuts both doors at once, and the final image of the "abundant ‘feast of eyes’ which his needs demand" sets a feast against the single bean. The word "demand" gives the child's needs authority, so the reader ends by seeing a hungry child rather than an overworked one.`,
            },
            markScheme: [
              ...MARK_LEVELS_Q3,
              'Language to credit: the balanced contrast "not in giving the child too much, but in giving him the wrong thing to do"; the rhetorical questions and the image of "a boy in petticoats"; the capitalised "Nature"; the extended metaphor of food, from "mental nourishment" to the bean and the "feast of eyes".',
              'Structure to credit: a popular view reported, conceded and corrected; evidence given as questions the reader answers; the second paragraph\'s turn from need to provision; the closing "Neither at home nor at school" and the feast that ends the metaphor.',
            ],
          },
          {
            id: 'ocr-p1-03-q4',
            questionNumber: 4,
            questionText: `"Both writers believe that the real problem with education is not how hard children work but what they are made to do."\n\nDecide how far you agree with this view.\n\nIn your answer:\n• weigh up what each writer says about the work children are given, and how far the statement fits each text\n• explain the effect each text has on you as a reader\n• compare the writers' ideas, and the ways each of them gets those ideas across\n• quote from both texts to back up your points.`,
            marks: 18,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: `Text 1:\n${P03_TEXT_1}\n\nText 2:\n${P03_TEXT_2}`,
            extractSource: `Text 1: ${P03_TEXT_1_REF} | Text 2: ${P03_TEXT_2_REF}`,
            modelAnswers: {
              'Grade 8-9': `I agree with this statement for Mason almost word for word, and for the writer of Text 1 only in part, because the modern writer finds the real problem further up, in what the whole system is for.\n\nMason states the idea directly. The danger of "overpressure" lies "not in giving the child too much, but in giving him the wrong thing to do", and given the right work, "the quantity he can get through with ease is practically unlimited". She is not worried that children work too hard; she is worried that they are fed the wrong food, and her comic picture of the object lesson as "that bean a day on which the Frenchman fed his horse" suggests that they get too little of what they need. Her effect on me is reassuring. She trusts children's "unbounded appetite" to learn, and her measured judgements ("good so far as it goes") make her sound like someone who has watched children closely.\n\nThe writer of Text 1 also attacks what children are made to do. Pupils "sit in rows and absorb information that many of them will never use again", and the questions "Why do we teach subjects in rigid fifty-minute blocks? Why do we test memory rather than understanding?" accuse schools of choosing the wrong tasks. But this writer goes further than Mason in two ways. First, the timing of school is part of the cruelty: teenagers' sleep is "biologically shifted towards later waking", yet they must be in class "at half past eight in the morning". Second, the deepest cause is the purpose of the system. The exam system "persists not because it produces well-educated citizens but because it produces measurable outcomes", and the final sentence, "We have confused measurement with meaning", blames governments and habit ("inertia") rather than the lessons alone. The effect is far angrier than Mason's: the opening calls the school day "an act of slow-motion cruelty", and the run of questions builds frustration.\n\nTheir methods differ as much as their tone. The modern writer speaks from experience, "twenty-five years as a headteacher", and admits "I enforced the system without questioning it", which makes the confession persuasive. Mason argues from observation of children, through an extended metaphor of food and appetite. Both, however, use questions to draw the reader in: the modern writer's run of "Why" questions, which he answers himself ("The answer, I eventually concluded, is inertia"), and Mason's "Whoever saw a child tired of seeing...?", which leaves the reader to answer for her.\n\nOverall, the statement is right about what the writers share: neither thinks children are working too hard, and both think they are given the wrong things to do. But for the writer of Text 1 the wrong work is a symptom, not the disease. The real problem is a system that measures children instead of educating them, a question Mason, writing about the very young, never reaches.`,
            },
            markScheme: {
              'AO4, evaluation (12 marks)': [
                ...MARK_LEVELS_AO4,
                'In this paper: Text 2 makes the statement\'s point in its own words ("not in giving the child too much"); Text 1 agrees that the work is wrong but puts the deeper cause in the timing of the day and a system built for "measurable outcomes". Credit a verdict that differs between the texts.',
              ],
              'AO3, comparison (6 marks)': [
                ...MARK_LEVELS_AO3,
                "Methods to compare: a former headteacher's confession and anger against a teacher's calm, measured argument; questions in both, which Text 1 answers itself and Text 2 leaves the reader to answer; the metaphor of food in Text 2 against the language of measurement in Text 1.",
              ],
              Marking: ['The two grids are marked separately and the marks added, out of 18.'],
            },
          },
        ],
      },
      {
        id: 'ocr-p1-03-writing',
        title: 'Section B: Writing',
        description:
          'Answer ONE question: Question 5 or Question 6. You are advised to spend about one hour on this section, including time to plan and to check your work.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-03-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText: `Answer ONE of the following questions.\n\nQuestion 5\n"Exams are the fairest way to find out what a student has learned."\nWrite a speech for a debate at your school in which you argue for or against this statement.\nIn your speech you could:\n• explain what exams measure and what they miss\n• consider other ways of judging what students have learned\n• answer the views of those who disagree with you.\n\nOR\n\nQuestion 6\nWrite an article for a website for parents of young children, giving advice on how to help children enjoy learning at home.\nIn your article you could:\n• describe the kinds of activity young children enjoy\n• explain what children gain from exploring and asking questions\n• suggest simple things parents can do each week.\n\nIn your answer you will be assessed on content and organisation (24 marks) and on technical accuracy (16 marks).`,
            marks: 40,
            suggestedTimeMinutes: 60,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Question 5, a speech for the statement.\n\nGood morning, everyone.\n\nImagine two students. One has a parent who is a teacher, a quiet bedroom and a tutor every Thursday. The other shares a room with two younger brothers and works at a supermarket on Saturdays. Now imagine that their final grades depend on coursework done at home. Which of them do you think will do better? I think we all know. That is why I am standing here to argue that exams, for all their faults, are the fairest way we have to find out what a student has learned.\n\nLet me be honest about the faults first, because the other side will list them anyway. Exams are stressful. A bad night's sleep or a headache can cost you marks. And yes, some people freeze in an exam hall who would shine in a conversation. I do not pretend that a two-hour paper is a perfect measure of a human being. It is not meant to be. It is meant to measure what you know and can do, on your own, without help.\n\nThat last phrase is the point. In an exam, nobody can write your essay for you. Your parents cannot check it, a tutor cannot polish it, and an older cousin cannot rewrite it on a laptop the night before. Every one of us sits in the same hall, with the same paper, for the same length of time. The student with the tutor and the student with the Saturday job are, for those two hours, exactly equal. Where else in our lives are we treated so fairly?\n\nThe alternatives sound kinder, but look at them closely. Coursework rewards the students with the most help at home. Teacher assessment depends on teachers being completely free of favourites, and teachers, however hard they try, are human. Continuous assessment means that every piece of homework counts, so the pressure never lifts. I would rather face one hard fortnight in June than two years of being judged on every page.\n\nSome will say that exams only test memory. A good exam does far more than that. Ask anyone who has faced an unseen text in an English paper: you cannot memorise the answer to a question you have never seen. You have to read, think and write under pressure, which is exactly what many jobs will ask of us.\n\nSo I am not asking you to love exams. I do not love them myself. I am asking you to recognise what they protect: the right of every student, whoever their parents are and whatever their home is like, to be judged on their own work. Until someone invents a fairer system, let us defend the one we have.\n\nThank you.`,
            },
            markScheme: {
              'AO5, content and organisation (24 marks)': MARK_LEVELS_AO5,
              'AO6, technical accuracy (16 marks)': MARK_LEVELS_AO6,
              'For these tasks': [
                MARK_WRITING_NOTE,
                'Question 5 is a speech for a debate: it should sound spoken, take a clear side, answer the other side and end with a firm appeal.',
                'Question 6 is an article giving advice to parents: a friendly, confident tone, clear sections and practical suggestions.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 04: health, exercise and play
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-p1-04',
    board: 'OCR',
    paperNumber: 1,
    title: 'Component 01: Communicating Information and Ideas',
    subtitle: 'English Language J351/01',
    code: 'J351/01',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p1-04-reading',
        title: 'Section A: Reading',
        description: `Read the two texts below, then answer all four questions. You are advised to spend about one hour on this section, about 12 minutes of it reading the texts.\n\nText 1: ${P04_TEXT_1_REF}\nText 2: ${P04_TEXT_2_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-04-q1',
            questionNumber: 1,
            questionText: `Look again at the second paragraph of Text 1, from "Our grandparents did not count calories." to "the fewest eating disorders."\n\n(a) Identify two things the writer says our grandparents did not do. [2]\n\n(b) What kind of jobs, according to the writer, did our grandparents do? [1]\n\n(c) Give the phrase the writer uses to describe what our grandparents ate. [1]`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Text 1:\n${P04_TEXT_1}\n\nText 2:\n${P04_TEXT_2}`,
            extractSource: `Text 1: ${P04_TEXT_1_REF} | Text 2: ${P04_TEXT_2_REF}`,
            modelAnswers: {
              'Grade 4-5': `(a) They did not count calories, and they did not consult apps before deciding whether to eat bread.\n(b) Physically demanding jobs.\n(c) "whatever was available".`,
            },
            markScheme: [
              '(a) 1 mark each, up to 2, for: count calories; consult apps before deciding whether to eat bread; hear the word "superfood".',
              '(b) 1 mark: physically demanding jobs (accept hard physical work).',
              '(c) 1 mark: "whatever was available".',
              'Every answer must come from the second paragraph of Text 1.',
            ],
          },
          {
            id: 'ocr-p1-04-q2',
            questionNumber: 2,
            questionText: `What do the two writers suggest about the part enjoyment should play in keeping the body healthy?\n\nBack up each point with evidence from both texts.`,
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: `Text 1:\n${P04_TEXT_1}\n\nText 2:\n${P04_TEXT_2}`,
            extractSource: `Text 1: ${P04_TEXT_1_REF} | Text 2: ${P04_TEXT_2_REF}`,
            modelAnswers: {
              'Grade 8-9': `Both writers believe that a healthy body is one that is enjoyed, not managed. The writer of Text 1 warns against the point at which "exercise becomes a punishment rather than a pleasure", and objects when the body is treated "not as a home but as a project". Spencer finds health in the same place: the boys rush out to play with "a chorus of shouts and laughter", and it is "that enjoyable activity which makes the pulse bound and ensures the healthful activity of every organ". For both writers, pleasure and health go together. Both also hold up a better example against the present. The grandparents in Text 1 "worked physically demanding jobs, ate whatever was available" and still "lived to respectable ages", and Spencer's boys play five times a day. And both criticise the habits that take enjoyment away: the anxious counting of calories and "macronutrient composition" in Text 1, and in Text 2 a girls' school where, in five months, not one "shout or a laugh" drew the writer's attention and "nothing like vigorous exertion has been visible".`,
            },
            markScheme: [
              ...MARK_LEVELS_Q2,
              'Links to credit: exercise should be a pleasure ("a punishment rather than a pleasure"; "that enjoyable activity"); pleasure and health go together; a better example held up (the grandparents; the boys at play); habits or customs that remove enjoyment (anxious counting in Text 1; the silent girls\' garden in Text 2).',
            ],
          },
          {
            id: 'ocr-p1-04-q3',
            questionNumber: 3,
            questionText: `Look again at Text 2, the whole text.\n\nHow does Spencer use language and structure to show the contrast between the boys' school and the girls' school?\n\nRefer closely to the text, and use relevant subject terms to explain its effects.`,
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: P04_TEXT_2,
            extractSource: P04_TEXT_2_REF,
            modelAnswers: {
              'Grade 8-9': `Spencer builds the whole passage on a contrast, and he controls it so that the reader reaches his conclusion before he states it.\n\nThe first sentence, "Unfortunately the fact is quite otherwise with girls", announces the contrast and judges it in its first word. He then presents himself as a witness with "daily opportunity of drawing a comparison", and the plural "we" makes the observation sound careful and shared, like evidence rather than opinion.\n\nThe boys' school comes first, and it is full of movement and noise. The garden is "turned into an open, gravelled space", with "poles and horizontal bars", and the long list of times, "Every day before breakfast, again towards eleven o'clock, again at mid-day, again in the afternoon, and once more after school is over", uses the repeated "again" to make play seem constant. Sound arrives before sight: the neighbourhood "is awakened by a chorus of shouts and laughter as the boys rush out to play", and the dynamic verb "rush" and the image of activity "which makes the pulse bound" make health feel physical and joyful.\n\nThe turn comes in an exclamation, "How unlike is the picture offered by the" girls' school, whose grand title, "Establishment for Young Ladies!", is put in inverted commas to mock it. Spencer then adds a deadpan joke: "we actually did not know that we had a girl's school as close to us as the school for boys". The girls are so quiet that they are invisible. The garden is "laid out with prim grass-plots, gravel-walks, shrubs, and flowers", and "prim" seems to describe the girls' manners as much as the lawns. The adverbial "During five months" stretches the silence, and the girls are "sauntering" or "walking arm-in-arm", slow verbs set against the boys' rush. The single exception, "Once indeed, we saw one chase another round the garden", only proves the rule.\n\nThe passage ends with questions, not answers. "Why this astounding difference?" is followed by two questions that both begin "Is it that", each offering an explanation the reader is meant to reject: that a girl does not "need these active exercises", or has "none of the promptings to vociferous play". By stopping here, Spencer leaves the reader to draw the only conclusion left, that the difference is made by adults and not by nature.`,
            },
            markScheme: [
              ...MARK_LEVELS_Q3,
              'Language to credit: the judging first word "Unfortunately"; the sound of the boys\' school ("a chorus of shouts and laughter") against the girls\' silence; the verbs "rush" and "sauntering"; "prim"; the mocking inverted commas round the "Establishment for Young Ladies!"; the deadpan humour of not knowing the girls\' school was there.',
              'Structure to credit: the two schools described in turn, the boys first; the list of times built on "again"; the turn at the exclamation; the one exception that proves the rule; the ending in questions the reader answers.',
            ],
          },
          {
            id: 'ocr-p1-04-q4',
            questionNumber: 4,
            questionText: `"Both writers suggest that people would be healthier if they were simply left to do what comes naturally."\n\nDecide how far you agree with this view.\n\nIn your answer:\n• weigh up what each writer says about health, exercise and play, and how far the statement fits each text\n• explain the effect each text has on you as a reader\n• compare the writers' ideas, and the ways each of them gets those ideas across\n• quote from both texts to back up your points.`,
            marks: 18,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: `Text 1:\n${P04_TEXT_1}\n\nText 2:\n${P04_TEXT_2}`,
            extractSource: `Text 1: ${P04_TEXT_1_REF} | Text 2: ${P04_TEXT_2_REF}`,
            modelAnswers: {
              'Grade 8-9': `I mostly agree. Both writers trust the body's natural instincts more than the rules people impose on it, but neither quite says that people should simply be left alone, and Spencer in particular expects adults to make room for nature.\n\nThe writer of Text 1 comes closest to the statement. The body is "a mechanism of extraordinary resilience", yet we treat it "as though it were made of glass", and the list of tiny dangers, "a single missed vitamin, a single night of poor sleep, a single meal of insufficient nutritional virtue", makes modern anxiety look absurd. The grandparents, who "ate whatever was available" and never heard the word "superfood", are offered as proof that doing what comes naturally works. As a reader I find this persuasive and funny, especially the deflating last line about the good life: "It did not involve protein shakes." But the writer also qualifies the argument: "I do not suggest that nutritional science has taught us nothing". So the claim is that anxiety about health makes us ill, not that knowledge is useless.\n\nSpencer agrees that nature knows best. The boys' play answers a natural need, and it "ensures the healthful activity of every organ". His closing questions ask whether a girl's constitution is so different that she does not "need these active exercises", and whether she lacks "the promptings to vociferous play by which boys are impelled", and the way they are asked expects the answer no. The girls have the same instincts, and something has stopped them. Yet Spencer does not argue that children should be left to themselves. The boys' school has given "nearly the whole of a large garden" to play and supplied "poles and horizontal bars for gymnastic exercises". For Spencer, healthy nature needs adults who provide for it, and the girls' garden, all "prim grass-plots", shows what happens when adults provide for appearances instead.\n\nThe writers present these ideas very differently. The writer of Text 1 argues directly in the present tense, with lists, a comparison with "our grandparents" and the image of the body as "a home" rather than "a project". Spencer describes rather than argues: he sets two gardens side by side, lets sound and silence carry the point ("a chorus of shouts and laughter" against "not once ... a shout or a laugh"), and leaves the reader to answer his questions. The effect of Text 1 on me is to reassure; the effect of Text 2 is a quiet indignation on the girls' behalf.\n\nOverall, the statement is true to the spirit of both texts: each believes that health comes from natural, enjoyable activity, and each blames the anxieties or customs that get in its way. It is less true to their detail, because both expect people to make sensible choices, and Spencer expects schools to make room for nature rather than simply leaving children to it.`,
            },
            markScheme: {
              'AO4, evaluation (12 marks)': [
                ...MARK_LEVELS_AO4,
                'In this paper: Text 1 trusts the body\'s "extraordinary resilience" but admits that nutritional science has taught us something; Text 2 trusts the girls\' natural "promptings" to play but praises a school that provides for them. Credit a verdict that differs between the texts.',
              ],
              'AO3, comparison (6 marks)': [
                ...MARK_LEVELS_AO3,
                'Methods to compare: direct argument with lists and a comparison with the past against description of two gardens; humour in both; sound and silence in Text 2; questions left for the reader to answer in Text 2.',
              ],
              Marking: ['The two grids are marked separately and the marks added, out of 18.'],
            },
          },
        ],
      },
      {
        id: 'ocr-p1-04-writing',
        title: 'Section B: Writing',
        description:
          'Answer ONE question: Question 5 or Question 6. You are advised to spend about one hour on this section, including time to plan and to check your work.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-04-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText: `Answer ONE of the following questions.\n\nQuestion 5\nWrite an article for a magazine for teenagers in which you argue that keeping active should be about enjoyment, not about rules.\nIn your article you could:\n• describe different ways of being active\n• explain why enjoyment matters\n• give advice to readers who do not think of themselves as sporty.\n\nOR\n\nQuestion 6\n"Every school should give its students an hour of exercise or sport every day."\nWrite a letter to your headteacher in which you argue for or against this idea.\nIn your letter you could:\n• describe how much activity students get now\n• explain what difference a daily hour would make\n• suggest how it could work in practice.\n\nIn your answer you will be assessed on content and organisation (24 marks) and on technical accuracy (16 marks).`,
            marks: 40,
            suggestedTimeMinutes: 60,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Question 6, a letter for the idea.\n\nDear Headteacher,\n\nI am writing on behalf of the Year 10 student council to ask you to consider a change that would cost the school very little and could make a real difference to every student here: an hour of exercise or sport every day.\n\nAt the moment most of us have two PE lessons a fortnight. For many students, that is the only time they move faster than a walk between Monday and Friday. We sit through five lessons, travel home by bus or car, and then sit again for homework. When we asked in tutor groups last month, fewer than half of the students who answered said that they take part in any sport outside school. That did not surprise me, but it should worry us all.\n\nI am not asking for an extra hour of the kind of PE that some students dread. An hour of activity could take many forms: football or netball for those who love them, but also dance, walking clubs, yoga, skipping, or simply a longer lunch break with the field open and the equipment out. The aim would be to let every student find something they enjoy, because people keep doing what they enjoy and give up what they are forced into.\n\nThe benefits would reach the classroom too. Teachers often tell us that the lesson after lunch is the hardest to teach. A student who has run about for half an hour comes back calmer and readier to concentrate than one who has stood in a queue for chips. Exercise also eases stress, and in an exam year that matters.\n\nI understand the difficulties. The timetable is full, and staff are already stretched. However, the hour need not be taken from lessons. It could be built from a slightly longer lunch break, a short morning session in tutor time and the after-school clubs that already exist. Several sixth-form students who are trained sports leaders have said that they would be glad to help run activities for younger years.\n\nCould we try it for one half term, with a survey at the end to see whether students and teachers notice a difference? If it does not work, we will have lost very little. If it does, we will have given every student here something that will help them long after they leave.\n\nThank you for taking the time to read this letter. The student council would be glad to meet you to discuss the idea further.\n\nYours faithfully,\n\nAmira Khan\nYear 10 Student Council`,
            },
            markScheme: {
              'AO5, content and organisation (24 marks)': MARK_LEVELS_AO5,
              'AO6, technical accuracy (16 marks)': MARK_LEVELS_AO6,
              'For these tasks': [
                MARK_WRITING_NOTE,
                'Question 5 is a magazine article for teenagers: a lively, encouraging voice, a clear argument and advice that readers could act on.',
                'Question 6 is a formal letter to a headteacher: set out and addressed as a letter, respectful, with a clear request, reasons and practical answers to likely objections.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 05: who public space belongs to
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-p1-05',
    board: 'OCR',
    paperNumber: 1,
    title: 'Component 01: Communicating Information and Ideas',
    subtitle: 'English Language J351/01',
    code: 'J351/01',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p1-05-reading',
        title: 'Section A: Reading',
        description: `Read the two texts below, then answer all four questions. You are advised to spend about one hour on this section, about 12 minutes of it reading the texts.\n\nText 1: ${P05_TEXT_1_REF}\nText 2: ${P05_TEXT_2_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-05-q1',
            questionNumber: 1,
            questionText: `Look again at the second paragraph of Text 1, from "And yet the modern city" to "Everyone else, move along."\n\n(a) Identify two ways in which, the writer says, the modern city is made unwelcoming. [2]\n\n(b) Explain, in your own words, what the writer says has happened to the meaning of the word "loitering". [2]`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Text 1:\n${P05_TEXT_1}\n\nText 2:\n${P05_TEXT_2}`,
            extractSource: `Text 1: ${P05_TEXT_1_REF} | Text 2: ${P05_TEXT_2_REF}`,
            modelAnswers: {
              'Grade 4-5': `(a) Benches are fitted with armrests so that nobody can sleep on them, and walls are studded with metal spikes.\n(b) The word once meant nothing more than staying in one place (1), but it has come to be treated as bad behaviour that ought to be stopped, a change made without anyone making a fuss about it (1).`,
            },
            markScheme: [
              '(a) 1 mark each, up to 2, for: new developments gated, monitored or surveilled; spaces redesigned to discourage loitering; benches with armrests to prevent sleeping; walls studded with metal spikes.',
              "(b) 2 marks, in the student's own words: 1 for the old meaning, simply standing still; 1 for the new one, treated as antisocial or wrong. Credit the point that the change was made quietly.",
              'Every answer must come from the second paragraph of Text 1.',
            ],
          },
          {
            id: 'ocr-p1-05-q2',
            questionNumber: 2,
            questionText: `What do the two writers suggest about who public spaces should belong to?\n\nBack up each point with evidence from both texts.`,
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: `Text 1:\n${P05_TEXT_1}\n\nText 2:\n${P05_TEXT_2}`,
            extractSource: `Text 1: ${P05_TEXT_1_REF} | Text 2: ${P05_TEXT_2_REF}`,
            modelAnswers: {
              'Grade 8-9': `Both writers believe that public space should belong to everyone, whatever their wealth or class. Olmsted celebrates a park that is "entirely, unreservedly, and for ever the people’s own", where "The poorest British peasant is as free to enjoy it in all its parts as the British queen". The writer of Text 1 values the same mixing, "the democratic mixing of classes and cultures", and condemns cities where the message is "this space belongs to those who can afford it". Both also link ownership with pride and belonging. Olmsted's baker "has the pride of an OWNER in it", while in Text 1 people are told "Everyone else, move along", the opposite of being made to feel at home. And both see money at the centre of the question. In Birkenhead the town paid for the park, and Olmsted reports what it cost; in Text 1, a "development model" treats "private ownership as the only solution". So both writers judge a place by whether its ordinary people can use its spaces freely.`,
            },
            markScheme: [
              ...MARK_LEVELS_Q2,
              'Links to credit: space for everyone, rich and poor alike (the peasant and the queen; "the democratic mixing of classes and cultures"); the feeling of ownership or belonging ("the pride of an OWNER"; "move along"); money and who pays, in both texts.',
            ],
          },
          {
            id: 'ocr-p1-05-q3',
            questionNumber: 3,
            questionText: `Look again at Text 2, the whole text.\n\nHow does Olmsted use language and structure to show his admiration for the park at Birkenhead?\n\nRefer closely to the text, and use relevant subject terms to explain its effects.`,
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: P05_TEXT_2,
            extractSource: P05_TEXT_2_REF,
            modelAnswers: {
              'Grade 8-9': `Olmsted's admiration shows first in the way he begins: "But this is but a small part." Opening by saying that what he has already described is only a fraction makes the park seem almost too large to describe. The list that follows is built from passive verbs, "large valleys were made verdant, extensive drives arranged", "avenues of trees formed", "a large park laid out", so the reader sees the work of transformation pile up, while the adjectives "large", "extensive" and "magnificent" stress its scale.\n\nThe emotional centre of the first paragraph is the triple adverb in "entirely, unreservedly, and for ever the people’s own". Each word closes off an exception: none of the park is held back, nothing is grudged, and nothing will be taken away later. The next sentence sets the two ends of society against each other: "The poorest British peasant is as free to enjoy it in all its parts as the British queen." The balanced comparison turns a park into an argument about equality. Olmsted then goes one step further, "More than that", and prints "OWNER" in capitals, so the reader hears the stress he would give it aloud, while the alliteration of "the baker of Birkenhead" makes an ordinary tradesman memorable.\n\nThe second paragraph becomes conversational. The rhetorical question "Is it not a grand good thing?" invites agreement, and Olmsted then imagines his American reader's next question: "But you are inquiring who paid for it." His answer compares Birkenhead with New York, where people pay for "the Tombs," and the Hospital, and the cleaning "(as they amusingly say)" of their streets. The bracketed aside is gently sarcastic about New York's streets, which suggests that Birkenhead has done something New York has not.\n\nThe final paragraph switches to facts and figures: "one hundred and twenty acres", "sixty acres", "$1.25 a square yard", "between five and six hundred thousand dollars", and work for "ten gardeners and labourers in summer". After the enthusiasm, this plain, businesslike tone gives the approval of a practical farmer. The scheme is not only beautiful but sensible: the land round the park is set aside for building, and the park gives work. The structure moves from wonder, to principle, to proof, so that Olmsted's admiration ends by sounding reasonable as well as heartfelt.`,
            },
            markScheme: [
              ...MARK_LEVELS_Q3,
              'Language to credit: the triple adverb "entirely, unreservedly, and for ever"; the balanced comparison of "The poorest British peasant" with "the British queen"; "OWNER" in capitals; the alliteration of "the baker of Birkenhead"; the rhetorical question; the sarcastic aside about New York.',
              'Structure to credit: an opening that makes the park seem too large to describe; the movement from enthusiasm to an imagined question from the reader, then to facts and figures; the shift from wonder to principle to proof.',
            ],
          },
          {
            id: 'ocr-p1-05-q4',
            questionNumber: 4,
            questionText: `"Both writers show that a public space is only truly public when ordinary people feel that they own it."\n\nDecide how far you agree with this view.\n\nIn your answer:\n• weigh up what each writer says about public space, and how far the statement fits each text\n• explain the effect each text has on you as a reader\n• compare the writers' ideas, and the ways each of them gets those ideas across\n• quote from both texts to back up your points.`,
            marks: 18,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: `Text 1:\n${P05_TEXT_1}\n\nText 2:\n${P05_TEXT_2}`,
            extractSource: `Text 1: ${P05_TEXT_1_REF} | Text 2: ${P05_TEXT_2_REF}`,
            modelAnswers: {
              'Grade 8-9': `I strongly agree that this idea is at the heart of both texts, although the writers approach it from opposite directions: Olmsted shows a public space that ordinary people own, and the writer of Text 1 shows such spaces being taken from them.\n\nOlmsted makes ownership his main point. The park is "entirely, unreservedly, and for ever the people’s own", and the triple adverb leaves no room for exceptions. The comparison of "The poorest British peasant" with "the British queen" makes equal access sound like a national principle, and the capitals in "the pride of an OWNER" show that the feeling of ownership matters as much as the fact of it. Even the payment supports the statement, since the townspeople paid for the park themselves, as its "honest owners". As a reader, I find his delight infectious, and the question "Is it not a grand good thing?" makes it hard to say no.\n\nThe writer of Text 1 shows the same idea through its loss. Public spaces are "redesigned to discourage loitering", benches have "armrests positioned to prevent sleeping" and walls are "studded with metal spikes". The space may still be open, but nobody is allowed to feel at home in it: "this space belongs to those who can afford it. Everyone else, move along." The blunt imperative sounds like the city itself speaking to its poorer citizens, and its rudeness makes me angry on their behalf. The writer's last point, that cities are losing "the democratic mixing of classes and cultures", is Olmsted's peasant and queen seen from the other side.\n\nThere is, however, a complication in Text 2 that the statement does not cover. The sixty acres round the park were set aside to be sold or rented for building, and "Several fine mansions are already built on these (having private entrances to the park)". The rich, it seems, have a door of their own. Olmsted reports this without criticism, as part of a sensible scheme, but a modern reader may see in it the beginning of the very problem Text 1 describes, in which private wealth sits beside public space and gains from it.\n\nThe writers' methods differ in tone. Olmsted writes a cheerful travel account for American readers, mixing enthusiasm with facts and figures, and the costs and acres make his praise seem practical. The writer of Text 1 builds an argument, opening with a sweeping claim, "The great city is, and always has been, the engine of civilisation", turning with "And yet" to a list of hostile details, and ending with irony: "The irony is considerable." Where Olmsted celebrates, the modern writer protests.\n\nOverall, I agree with the statement. Both writers judge a public space by whether the poorest people can use it as freely as the richest, and both suggest that a space is public only if people feel it is theirs. Olmsted shows how it can be done; the writer of Text 1 shows how easily it can be undone.`,
            },
            markScheme: {
              'AO4, evaluation (12 marks)': [
                ...MARK_LEVELS_AO4,
                'In this paper: Text 2 celebrates a park that is "the people’s own", though its "fine mansions" have "private entrances"; Text 1 shows spaces made hostile to anyone who cannot pay. Credit an answer that notices the complication in Text 2.',
              ],
              'AO3, comparison (6 marks)': [
                ...MARK_LEVELS_AO3,
                'Methods to compare: a cheerful travel account with facts and figures against a sweeping argument with a list of hostile details; celebration against protest; the peasant and the queen against "the democratic mixing of classes and cultures".',
              ],
              Marking: ['The two grids are marked separately and the marks added, out of 18.'],
            },
          },
        ],
      },
      {
        id: 'ocr-p1-05-writing',
        title: 'Section B: Writing',
        description:
          'Answer ONE question: Question 5 or Question 6. You are advised to spend about one hour on this section, including time to plan and to check your work.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-05-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText: `Answer ONE of the following questions.\n\nQuestion 5\nWrite a speech to be given at a meeting of your local council, arguing that young people in your town need more free places to meet.\nIn your speech you could:\n• describe where young people spend their free time now\n• explain what free public spaces would give them\n• suggest what the council could do.\n\nOR\n\nQuestion 6\n"Cities are better places to grow up in than the countryside."\nWrite an article for a newspaper in which you argue for or against this statement.\nIn your article you could:\n• write about what each kind of place offers young people\n• explain what each lacks\n• draw on your own experience.\n\nIn your answer you will be assessed on content and organisation (24 marks) and on technical accuracy (16 marks).`,
            marks: 40,
            suggestedTimeMinutes: 60,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Question 5, a speech to the council.\n\nGood evening, councillors.\n\nMy name is Daniel, I am fifteen, and I have lived in this town all my life. I want to begin by telling you where I was at seven o'clock last Friday evening. I was standing outside the supermarket with four friends, because it was raining and the shelter by the car park is the only roof in town that nobody charges you to stand under. After twenty minutes a security guard asked us to move on. We had done nothing wrong. We simply had nowhere else to go.\n\nThat is the problem I am here to talk about. There are well over two thousand teenagers in this town. When we are not at school or at home, where are we supposed to be? The youth club closed four years ago. The leisure centre costs six pounds a session. The cafés want us to buy something every half an hour, and most of us cannot afford to. The park is lovely in July, but in November it is dark by five and there is not a single light along its paths. So we end up in doorways and car parks, and then we are told that young people hang about causing trouble.\n\nI would ask you to look at it the other way round. Most of the teenagers you see in the high street on a Friday night are not causing trouble. They are looking for somewhere to be together, which is exactly what every adult in this room does when you meet your friends in a pub or a café. The difference is that you have places that welcome you, and we do not.\n\nWhat would help? It need not be expensive. A covered shelter in the park, with lights and a few benches, would cost far less than the new car park you approved last year. The empty shop on Station Road could open two evenings a week as a drop-in centre, run with the county's youth workers. The sports courts behind the school could be unlocked at weekends. None of this needs a new building. It needs a decision that young people belong in this town too.\n\nI know there are worries about noise and litter, and I understand them. But the answer to young people in public spaces is not to remove them. It is to give them spaces that are theirs, so that they have a reason to look after them. When something belongs to you, you take care of it.\n\nCouncillors, we are not asking for much. We are asking for a roof, a light and a welcome. I hope that the next time I am out with my friends on a Friday evening, I will be somewhere you chose for us, not somewhere we were moved on from.\n\nThank you for listening.`,
            },
            markScheme: {
              'AO5, content and organisation (24 marks)': MARK_LEVELS_AO5,
              'AO6, technical accuracy (16 marks)': MARK_LEVELS_AO6,
              'For these tasks': [
                MARK_WRITING_NOTE,
                'Question 5 is a speech to councillors: it should sound spoken, address its audience with respect, make a clear case with practical suggestions, and end memorably.',
                'Question 6 is a newspaper article: a clear position on the statement, balanced against the other view, in a voice that suits adult readers.',
              ],
            },
          },
        ],
      },
    ],
  },
]
