// @ts-nocheck

/**
 * OCR GCSE English Language, Component 01 (J351/01), Communicating Information
 * and Ideas: mock papers 06 to 10, each set as OCR sets the paper.
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
 * paper.test.ts). The tasks were not OCR's either: Question 2 analysed the
 * nineteenth-century text's language, where OCR's Question 2 brings the two
 * texts together (synthesis, AO1, no marks for analysis); Question 3 analysed
 * the present-day text, where OCR sets it on the second text; Question 4 asked
 * only for a comparison, where OCR's sets a statement about both texts to
 * evaluate (AO4, 12) as well as to compare (AO3, 6); and there was one writing
 * task, not a choice of two.
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
 *     The September review's corrections were kept in view: "nothing is so
 *     detestable as" is not called a superlative, Southey's visitor is not a
 *     comic creation, Ruskin's blessing is the palate the ban produced, and his
 *     cook's asking leave shows his parents' control.
 *   - Question 1 prints both texts, since the mock page shows the texts of a
 *     section's first question.
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
 *   - 06 Text 1: "Nearly half of all workers aged 25-34 reported feeling
 *     "emotionally exhausted"" named no survey, and none found gives it (the
 *     ones found give other figures); a pupil could repeat it as fact. It now
 *     says surveys find younger workers among the most likely to say so, and
 *     the 06-q2 answer follows.
 *   - 06-q3: said "Apparently, nothing could be easier" gives the task "as
 *     the adults saw it"; the text names no viewer. Now "as it first seemed".
 *   - 07-q4: called the extra pyramids "discovery rather than disappointment",
 *     though Edwards sees them as "intruders"; the answer now says so.
 *   - 08-q2: said the visitor is surprised by "almost everything" at table,
 *     though he praises the porcelain, the tea and the butter; now "much".
 *   - 08-q3: "the personified urn" that "smokes and sings": it is the boiling
 *     water that does, in the urn. Model answer and mark scheme corrected.
 *   - 09-q1 (b): the model answer drew on "the rest of the article", where
 *     answers must come from the first paragraph; it now rests on that one.
 *   - 10-q2: said Ruskin counts his parents' rules among his "blessings", the
 *     misreading the September review removed (the blessing is the palate
 *     the ban produced); now says so.
 *   - 10-q3: called "no more loved than the sun and the moon" a simile (no
 *     "like" or "as"); model answer and mark scheme now say comparison.
 *   - 10-q3: "his nearest approach to disobedience"; the text says "one of
 *     the nearest approaches". Corrected.
 *   - 10-q4: "his "strength was never exercised, my patience..."" mixed his
 *     and the quotation's "my"; the quotation now stands whole.
 *
 * The September notes that follow are kept for the history of the texts. The
 * questions and answers they discuss were all replaced on 24 October 2026.
 *
 * OCR GCSE English Language, Component 01 (J351/01), Communicating Information
 * and Ideas: mock papers 06 to 10, each with a modern Source A and a
 * nineteenth-century Source B, as the real paper sets them.
 *
 * WHAT WAS WRONG (found 26 September 2026 by scripts/check-mock-exam-extracts.mjs,
 * fixed 27 September 2026). These papers are served (mock-exam-loader chunk
 * 'ocr-p1-b', and allMockExamPapers through ./index), so what follows was in
 * front of students.
 *
 * All ten sources carried the name of a writer who does not exist.
 *   - The five Source A articles were credited to invented journalists at
 *     real publications: "Priya Sharma, 'The Exhaustion Economy', The
 *     Observer, 2024", and in the same way Condé Nast Traveller, The Atlantic,
 *     the Financial Times and the New Statesman. A web search for each of the
 *     five found no such article; the words were written for this bank.
 *   - The five Source B texts were written in a period manner and dated as if
 *     published: "Thomas Ashworth, Memoirs of a Factory Child (1867)", "Lady
 *     Constance Hartington, Letters from Egypt (1889)", "Pierre Delacroix,
 *     Impressions of England (1923)", "Mrs Eliza Worthington, Practical Advice
 *     for Young Ladies (1895)" and "Dorothy Fairweather, A Shropshire
 *     Childhood (1938)". None of these books exists, and two of the dates are
 *     not even in the century the paper's Source B comes from.
 * Every model answer to questions 2 and 4 analysed those invented sentences as
 * the named writer's, so a student revising here learned to quote and discuss
 * texts that nobody wrote. The answers had faults of their own besides: a
 * quotation with words changed ("stretching to the edge of the world", where
 * the invented text said "stretched"); five silent cuts, among them
 * "17.1 million working days lost" and "screen time, sugar intake, friendship
 * groups, emotional vocabulary" (the article repeats "their" before each);
 * and words given as a source's that it does not contain: "emotional
 * exhaustion" (the article says "emotionally exhausted"), "restrictive" and
 * "consistency".
 *
 * WHAT WAS DONE.
 *   - Each Source B is now a real nineteenth-century passage with the same
 *     focus, cut with passage() from the Project Gutenberg text named above
 *     it, never retyped: a child's first day in a cotton mill (John Brown's
 *     Memoir of Robert Blincoe, 1828, in its 1832 edition), a first sight of
 *     the pyramids (Amelia Edwards, 1877), a foreign visitor on English meals
 *     (Robert Southey writing as a Spaniard, 1807), the rule of fashion (Routledge's Manual of Etiquette)
 *     and a childhood looked back on (John Ruskin, Fors Clavigera, 1875). The
 *     passages are longer than the invented ones, because they are cut at
 *     paragraph ends. Quotation marks and dashes are set as this file sets
 *     them and italic marks dropped; nothing else is changed, including one
 *     misprint the Blincoe edition prints ("Ho did so" for "He did so").
 *   - Question 2 of every paper, and the model answers to questions 2 and 4,
 *     were rewritten for the real passage. Two questions changed with their
 *     passage: Paper 06 asks how the writer conveys Blincoe's first day, since
 *     his biographer tells it in the third person, and Paper 08 says that
 *     Southey wrote in the character of a Spanish visitor.
 *   - Each Source A is labelled as what it is, an article specially written
 *     for this paper. Two of them credited a real body with a finding: a "2024"
 *     Health and Safety Executive survey whose 17.1 million lost working days
 *     are the HSE's estimate for 2022/23, published in 2023 (the sentence now
 *     says so), and "a 2025 study by University College London" that could
 *     not be found (now a general statement of what studies of outdoor play
 *     report). Their other figures name no source and were not checked.
 *   - The answers to questions 1 and 3 no longer name the invented writers
 *     (nor does Paper 07's question 3 give its writer a gender), and what
 *     they said of the articles was checked against the articles:
 *     scare quotes claimed for three words the article prints plain;
 *     "monosyllabic" for "you were hungry, you ate, you stopped being hungry";
 *     "polysyndetic" for a list with no repeated conjunction; a "rhetorical
 *     question" made of three "when" clauses that ask nothing; and an "And
 *     yet" called a structural echo in an article that uses it once.
 *
 * A second review the same day compared each Source B paragraph with its
 * Gutenberg paragraph again (all thirteen match, consecutive and whole) and
 * found what the checker cannot. The Blincoe label read "published
 * posthumously, 1832", which implies a first appearance in 1832; the Memoir
 * was first published in 1828, serialised in Carlile's The Lion, and 1832 is
 * the Manchester edition this text comes from (its preface says the author
 * is dead, so "posthumous" stays with that edition). Five claims in the answers
 * were not what the words say: Ruskin's cook needing leave to give him a
 * potato was read as a household "arranged around him" (it shows his
 * parents' control); his blessing was given as the ban on cake itself (the
 * blessing is the palate the ban produced); Southey's English excuse was
 * said to be "reported without comment" straight after "they know no
 * better"; his Spanish visitor was called "a comic creation"; and the
 * article's "We do not send children into mines" was called the "Victorian
 * past" in a comparison with a text from 1799. And "nothing is so
 * detestable as" was called a superlative, which in form it is not. Three
 * quoted spans were not exact ("Flexibility" capitalised; commas inside
 * "sustainable," and "inclusive,"), which the checker's four-word rule does
 * not see.
 *
 * Every double-quoted span in these answers and mark schemes, of any length,
 * is now in its own extract exactly, and the checker passes the file.
 */

import type { MockExamPaper } from './types'

// ─── Source Extracts ─────────────────────────────────────────────────────────

// Exam 06 - Work & Employment
const EXTRACT_06_A = `The modern workplace is, by almost every measurable standard, safer, cleaner, and more comfortable than at any point in human history. We do not send children into mines. We do not expect seamstresses to work eighteen-hour shifts by candlelight. We have ergonomic chairs, adjustable monitors, and entire departments devoted to our wellbeing. And yet something is profoundly wrong.

The Health and Safety Executive estimates that 17.1 million working days were lost to work-related stress, depression, and anxiety in 2022/23. Surveys find younger workers among the most likely to say that their jobs leave them "emotionally exhausted". The language of modern employment is revealing: we speak of "burnout" as though human beings were machines that had overheated, of "quiet quitting" as though setting boundaries were a form of sabotage.

The problem, I believe, is not that we work too hard - though many of us do - but that we have lost any coherent sense of what work is for. When a job provides neither financial security nor personal meaning, when it demands total availability while offering zero loyalty, when "flexibility" means the company can change your hours but you cannot, then the contract between employer and employee has become something closer to a confidence trick.`

const EXTRACT_06_A_REF = 'An article, "The Exhaustion Economy", specially written for this paper'

// Project Gutenberg #59127, Chapter III, 2 consecutive paragraphs, cut with passage() by script, never retyped.
const EXTRACT_06_B = `They reached the mill about half past five. - The water was on, from the bottom to the top, in all the floors, in full movement. Blincoe heard the burring sound before he reached the portals and smelt the fumes of the oil with which the axles of twenty thousand wheels and spindles were bathed. The moment he entered the doors, the noise appalled him, and the stench seemed intolerable.

He did not recollect that either of the Messrs. Lamberts' were present at the mill, on his first entrance. The newly arrived were received by Mr. Baker, the head manager, and by the overlookers of the respective rooms. They were mustered in the making-up room; the boys and girls in separate divisions. After being looked at, and laughed at, they were dispersed in the various floors of the mill, and set to various tasks. - Blincoe was assigned to a room, over which a man named Smith presided. The task first allotted to him was, to pick up the loose cotton, that fell upon the floor. Apparently, nothing could be easier, and he set to with diligence, although much terrified by the whirling motion and noise of the machinery, and not a little affected by the dust and flue with which he was half suffocated. They span coarse numbers; unused to the stench, he soon felt sick, and by constantly stooping, his back ached. Blincoe, therefore, took the liberty to sit down; but this attitude, he soon found, was strictly forbidden in cotton mills. His task-master (Smith) gave him to understand, he must keep on his legs. Ho did so, till twelve o'clock, being six hours and a half, without the least intermission. - Blincoe suffered at once by thirst and hunger - the moment the bell rang, to announce dinner, all were in motion to get out as expeditiously as possible. Blincoe ran out amongst the crowd, who were allowed to go - never, in his life, before did he know the value of wholesome air so perfectly. He had been sick almost to fainting, and it revived him instantaneously! The cocknies mingled together, as they made progress towards the apprentice-house! Such as were playsome made to each other! and the melancholy seemed to mingle their tears! When they reached the apprentice-room, each of them had a place assigned at the homely board! Blincoe does not remember of what his dinner consisted; but is perfectly sure, that neither roast beef nor plum-pudding made its appearance - and that the provisions, the cookery, and the mode of serving it out, were all very much below the standard of the ordinary fare of the workhouse in which he had been reared.`

const EXTRACT_06_B_REF =
  'John Brown, A Memoir of Robert Blincoe, an Orphan Boy (first published 1828; the text of the posthumous Manchester edition of 1832), from Chapter III: Blincoe, sent from a London workhouse in 1799 at about seven, begins work at Lowdham Mill'

// Exam 07 - Travel
const EXTRACT_07_A = `There is a particular kind of disappointment that belongs exclusively to travel - the slow, creeping realisation that the place you have arrived at bears almost no resemblance to the place you imagined. You have seen the photographs, read the guidebooks, watched the documentaries. You have constructed, in the privacy of your own mind, a version of Venice or Marrakech or Kyoto that is luminous, uncrowded, and entirely your own. Then you arrive.

The Venice I visited last summer was drowning - not romantically, in the manner of poets and painters, but literally and bureaucratically. The acqua alta barriers were being tested with a grinding mechanical roar. Cruise ships the size of apartment blocks disgorged thousands of day-trippers into streets barely wide enough for two people to pass. The gondoliers looked exhausted and faintly hostile. A coffee in St Mark's Square cost fourteen euros.

And yet. There was a moment, just after dawn on my third morning, when I walked alone through the Dorsoduro district and turned a corner to find a small canal where the water was perfectly still and green and a cat sat on a windowsill watching me with imperial disinterest. No tourists. No noise. Just the smell of coffee from an unseen kitchen and the sound of someone practising scales on a piano. For perhaps ninety seconds, I understood why people had been falling in love with this city for a thousand years. Then a water taxi roared past and the moment was gone.`

const EXTRACT_07_A_REF =
  'An article, "The Paradox of Modern Travel", specially written for this paper'

// Project Gutenberg #70565, Chapter I, 3 consecutive paragraphs, cut with passage() by script, never retyped.
const EXTRACT_07_B = `The first glimpse that most travelers now get of the pyramids is from the window of the railway carriage as they come from Alexandria; and it is not impressive. It does not take one's breath away, for instance, like a first sight of the Alps from the high level of the Neufchâtel line, or the outline of the Acropolis at Athens as one first recognizes it from the sea. The well-known triangular forms look small and shadowy, and are too familiar to be in any way startling. And the same, I think, is true of every distant view of them - that is, of every view which is too distant to afford the means of scaling them against other objects. It is only in approaching them, and observing how they grow with every foot of the road, that one begins to feel they are not so familiar after all.

But when at last the edge of the desert is reached, and the long sand-slope climbed, and the rocky platform gained, and the great pyramid in all its unexpected bulk and majesty towers close above one's head, the effect is as sudden as it is overwhelming. It shuts out the sky and the horizon. It shuts out all the other pyramids. It shuts out everything but the sense of awe and wonder.

Now, too, one discovers that it was with the forms of the pyramids, and only their forms, that one had been acquainted all these years past. Of their surface, their color, their relative position, their number (to say nothing of their size), one had hitherto entertained no kind of definite idea. The most careful study of plans and measurements, the clearest photographs, the most elaborate descriptions, had done little or nothing, after all, to make one know the place beforehand. This undulating table-land of sand and rock, pitted with open graves and cumbered with mounds of shapeless masonry, is wholly unlike the desert of our dreams. The pyramids of Cheops and Chephren are bigger than we had expected; the pyramid of Mycerinus is smaller. Here, too, are nine pyramids, instead of three. They are all entered in the plans and mentioned in the guide-books; but, somehow, one is unprepared to find them there, and cannot help looking upon them as intruders. These six extra pyramids are small and greatly dilapidated. One, indeed, is little more than a big cairn.`

const EXTRACT_07_B_REF =
  'Amelia B. Edwards, A Thousand Miles up the Nile (first published 1877), from Chapter I, "Cairo and the Great Pyramid"; the text of the second edition (1888) as printed in New York by A. L. Burt, with American spelling'

// Exam 08 - Food & Diet
const EXTRACT_08_A = `Something strange has happened to food. It used to be the simplest thing in the world - you were hungry, you ate, you stopped being hungry. Now it is a moral battlefield, a status symbol, an identity statement, and a source of anxiety so pervasive that a growing number of psychologists specialise in nothing else.

Consider the supermarket, that cathedral of modern abundance. You want to buy an egg. But which egg? Free-range or organic? Barn-reared or pasture-raised? Should you worry about food miles, or is the local farm less efficient than the industrial operation in Denmark? Is the packaging recyclable? Is the brand ethical? Have the hens been spoken to kindly? By the time you have navigated the moral labyrinth of egg purchase, you have lost the will to make an omelette.

I am not making light of genuine ethical concerns. Factory farming is cruel, food waste is obscene, and the environmental impact of industrial agriculture is one of the defining challenges of our time. But I wonder whether the relentless moralisation of every food choice has had an unintended consequence: it has made eating - one of life's fundamental pleasures - into a source of guilt and paralysis. The people I know who care most about food are often the people who enjoy it least.`

const EXTRACT_08_A_REF = 'An article, "The Anxiety of Eating", specially written for this paper'

// Project Gutenberg #61122, Letter XV, 2 consecutive paragraphs, cut with passage() by script, never retyped.
const EXTRACT_08_B = `The English do not eat beef-steaks for breakfast, as lying travellers have told us, nor can I find that it has ever been the custom. The breakfast-table is a cheerful sight in this country: porcelain of their own manufactory, which excels the Chinese in elegance of form and ornament, is ranged on a Japan waiter, also of the country fabric; for here they imitate every thing. The mistress sits at the head of the board, and opposite to her the boiling water smokes and sings in an urn of Etruscan shape. The coffee is contained in a smaller vase of the same shape, or in a larger kind of tea-pot, wherein the grain is suspended in a bag; but nothing is so detestable as an Englishman's coffee. The washing of our after-dinner cups would make a mixture as good; the infusion is just strong enough to make the water brown and bitter. This is not occasioned by œconomy, though coffee is enormously dear, for the people are extravagant in the expences of the table: they know no better; and if you tell them how it ought to be made, they reply, that it must be very disagreeable, and even that if they could drink it so strong, it would prevent them from sleeping. There is besides an act of parliament to prevent the English from drinking good coffee: they are not permitted to roast it themselves, and of course all the fresh and finer flavour evaporates in the warehouse. They make amends however by the excellence of their tea, which is still very cheap, though the ministry, in violation of an explicit bargain, increased the tax upon it four fold, during the last war. This is made in a vessel of silver, or of a fine black porcelain: they do not use boiled milk with it, but cream in its fresh state, which renders it a very delightful beverage. They eat their bitter bread in various ways, either in thin slices, or toasted, or in small hot loaves, always with butter, which is the best thing in the country.

The dinner hour is usually five: the labouring part of the community dine at one, the highest ranks at six, seven, or even eight. The quantity of meat which they consume is astonishing! I verily believe that what is drest for one dinner here, would supply the same number of persons in Spain for a week, even if no fast-days intervened. Every where you find both meat and vegetables in the same crude and insipid state. The potatoe appears at table all the year round: indeed the poor subsist so generally upon this root, that it seems surprising how they could have lived before it was introduced from America. Beer is the common drink. They take less wine than we do at dinner, and more after it; but the custom of sitting for hours over the bottle, which was so prevalent of late years, has been gradually laid aside, as much from the gradual progress of the taxes as of good sense. Tea is served between seven and eight, in the same manner as at breakfast, except that we do not assemble round the table. Supper is rather a ceremony than a meal; but the hour afterwards, over our wine and water, or spirits, is the pleasantest in the day.`

const EXTRACT_08_B_REF =
  'Robert Southey, Letters from England (first published 1807), from Letter XV, written in the character of a Spanish visitor, "Don Manuel Alvarez Espriella"; the text of the third edition (1814)'

// Exam 09 - Fashion
const EXTRACT_09_A = `The fashion industry tells us, with considerable frequency and conviction, that it is changing. It is becoming sustainable. It is becoming inclusive. It is becoming conscious. The catwalks of Paris and Milan now feature models of different sizes, ages, and ethnicities. The press releases speak of organic cotton, recycled polyester, and carbon-neutral supply chains. The chief executives give interviews about their "journey" towards responsibility.

And yet. The numbers tell a different story. The global fashion industry produces approximately 100 billion garments per year - roughly thirteen for every person on the planet. The average British consumer buys 26.7 kilograms of clothing annually, more than any other nation in Europe. A garment purchased on a fast-fashion website for £4.99 will, on average, be worn seven times before being discarded. It will then spend the next two hundred years in a landfill, slowly releasing microplastics into the soil and water.

The problem is not that we lack information. Every consumer with a smartphone can, within thirty seconds, discover the environmental cost of their wardrobe. The problem is that we have constructed an economic system in which clothing is cheaper than food, in which a T-shirt costs less than a sandwich, and in which the true price - paid in polluted rivers, exhausted workers, and mountains of textile waste - is hidden so effectively that we can pretend it does not exist.`

const EXTRACT_09_A_REF =
  'An article, "The True Cost of Looking Good", specially written for this paper'

// Project Gutenberg #12426, "How to Dress Well", III, 2 consecutive paragraphs, cut with passage() by script, never retyped.
const EXTRACT_09_B = `Fashion prescribes rules for all. All classes of society bow, more or less, to her decrees. The fine lady who frequents the Court, as well as the servant-girl who sweeps out the area of a London lodging-house, and all the intermediate classes, are guided by Fashion. Crinolines and bonnets prove this, as well as the length of the skirts which are suffered to trail along in all the dirt and dust of pavement and crossings. It always takes some time before a fashion which has been adopted by the higher orders prevails among the lower; but, if it is a fashion which survives beyond the moment, it invariably finds its way downward in the course of time. Fashion prescribes the size and shape of bonnets, the make of gowns, their length and their size - the number of breadths and gores - the trimmings, the petticoats, which have become like a second gown, and all the other paraphernalia of a lady's toilette. There is no part of a lady's dress too minute for her inspection and care and legislation. The colour of gloves, the dye of hair, the application of false hair, the make of boots and shoes, the choice of ornaments, are all ordered and arranged. Fashion is a sort of "act of uniformity," which would bring all flights of fancy within certain prescribed limits. It defines the boundaries within which ladies may safely indulge their own conceits.

The best-dressed persons are not always those who are led blindfold by the prevailing fashion, nor by any means those who are strong-minded enough to defy it, and set it at nought. Any one who defies the fashion of the day, and, when long skirts and small saucer-like bonnets prevail, dares to walk abroad with very short petticoats, which she holds up unnecessarily high; displaying a foot and ankle that had better be hidden out of sight; who spurns a crinoline, and therefore looks like a whipping post; who wears a many-coloured shawl because cloaks and mantles are the rage; who adorns her head with a bonnet that is of the coal-scuttle cut, over which she fastens a large, coloured gauze veil, because she desires to protest, as far as she can, against the innovations of fashion; such a one will never attract, nor influence the public mind. She will provoke a smile, but will never recommend her own peculiar and independent style of dress. And she who follows fashion like a slave, wears what is prescribed without regard to her own personal appearance; who considers neither her age, nor her figure, nor her station, nor her means; who simply allows herself to be an advertisement for the milliner she employs, will often appear eccentric, and generally ill-dressed.`

const EXTRACT_09_B_REF =
  'From "How to Dress Well", Part III, "Fashion in Dress", in Routledge\'s Manual of Etiquette, a Victorian handbook by an unnamed writer (London: George Routledge and Sons, undated)'

// Exam 10 - Childhood
const EXTRACT_10_A = `We have, as a society, become extraordinarily anxious about children. We monitor their screen time, their sugar intake, their friendship groups, their emotional vocabulary, and their exposure to ideas we consider inappropriate - a category that expands with every passing year. We walk them to school until they are eleven and track their phones until they are eighteen. We have created a world in which a twelve-year-old cannot climb a tree without a risk assessment and a fourteen-year-old cannot walk to the shops without a GPS signal confirming their location every thirty seconds.

The intention, of course, is love. No reasonable person would argue against keeping children safe. But safety and growth are not always the same thing, and the relentless elimination of risk from childhood may be producing a generation that is, paradoxically, less resilient and more anxious than any that preceded it.

Studies of outdoor play have linked time spent playing unsupervised with greater independence, better problem-solving, and better emotional regulation in children. The researchers are careful to note that correlation is not causation. But the direction of the evidence is consistent and growing: children need risk. They need to fall out of trees, lose arguments, get lost, and find their way back. They need, occasionally, to fail - and to discover that failure is survivable.`

const EXTRACT_10_A_REF = 'An article, "Let Them Fall", specially written for this paper'

// Project Gutenberg #68013, Letter LIV, 4 consecutive paragraphs, cut with passage() by script, never retyped.
const EXTRACT_10_B = `Lastly, an extreme perfection in palate and all other bodily senses, given by the utter prohibition of cake, wine, comfits, or, except in carefullest restriction, fruit; and by fine preparation of what food was given me. Such I esteem the main blessings of my childhood; - next, let me count the equally dominant calamities.

First, that I had nothing to love.

My parents were - in a sort - visible powers of nature to me, no more loved than the sun and the moon: only I should have been annoyed and puzzled if either of them had gone out; (how much, now, when both are darkened!) - still less did I love God; not that I had any quarrel with Him, or fear of Him; but simply found what people told me was His service, disagreeable; and what people told me was His book, not entertaining. I had no companions to quarrel with, neither; nobody to assist, and nobody to thank. Not a servant was ever allowed to do anything for me, but what it was their duty to do; and why should I have been grateful to the cook for cooking, or the gardener for gardening, - when the one dared not give me a baked potato without asking leave, and the other would not let my ants' nests alone, because they made the walks untidy? The evil consequence of all this was not, however, what might perhaps have been expected, that I grew up selfish or unaffectionate; but that, when affection did come, it came with violence utterly rampant and unmanageable, at least by me, who never before had anything to manage.

For (second of chief calamities) I had nothing to endure. Danger or pain of any kind I knew not: my strength was never exercised, my patience never tried, and my courage never fortified. Not that I was ever afraid of anything, - either ghosts, thunder, or beasts; and one of the nearest approaches to insubordination which I was ever tempted into as a child, was in passionate effort to get leave to play with the lion's cubs in Wombwell's menagerie.`

const EXTRACT_10_B_REF =
  'John Ruskin, Fors Clavigera, Letter LIV (1875), one of his monthly public letters "to the workmen and labourers of Great Britain", from his account of his own childhood, beginning with the last of the good things he has listed'

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
// In each, Text 1 is the paper's EXTRACT_NN_A and Text 2 its EXTRACT_NN_B.

export const ocrP1B: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 06: work
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-p1-06',
    board: 'OCR',
    paperNumber: 1,
    title: 'Component 01: Communicating Information and Ideas',
    subtitle: 'English Language J351/01',
    code: 'J351/01',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p1-06-reading',
        title: 'Section A: Reading',
        description: `Read the two texts below, then answer all four questions. You are advised to spend about one hour on this section, about 12 minutes of it reading the texts.\n\nText 1: ${EXTRACT_06_A_REF}\nText 2: ${EXTRACT_06_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-06-q1',
            questionNumber: 1,
            questionText: `Look again at the first paragraph of Text 1, from "The modern workplace is" to "something is profoundly wrong."\n\n(a) Give two ways in which, according to the writer, work today is better than it was in the past. [2]\n\n(b) The writer says workplaces have "entire departments devoted to our wellbeing". Explain, in your own words, what this means. [2]`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Text 1:\n${EXTRACT_06_A}\n\nText 2:\n${EXTRACT_06_B}`,
            extractSource: `Text 1: ${EXTRACT_06_A_REF} | Text 2: ${EXTRACT_06_B_REF}`,
            modelAnswers: {
              'Grade 4-5': `(a) Workplaces are safer, and children are no longer sent to work in mines.\n(b) Companies have whole teams of staff (1) whose job is to look after the health and happiness of the people who work there (1).`,
            },
            markScheme: [
              '(a) 1 mark each, up to 2, for: safer, cleaner or more comfortable; children are not sent into mines; seamstresses are not expected to work eighteen-hour shifts by candlelight; ergonomic chairs or adjustable monitors; departments devoted to wellbeing.',
              "(b) 2 marks, in the student's own words: 1 for the idea of whole teams or sections of a company, 1 for their purpose, looking after workers' health, comfort or happiness.",
              'Every answer must come from the first paragraph of Text 1.',
            ],
          },
          {
            id: 'ocr-p1-06-q2',
            questionNumber: 2,
            questionText: `What do the two writers show about the ways in which work can harm people?\n\nBack up each point with evidence from both texts.`,
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: `Text 1:\n${EXTRACT_06_A}\n\nText 2:\n${EXTRACT_06_B}`,
            extractSource: `Text 1: ${EXTRACT_06_A_REF} | Text 2: ${EXTRACT_06_B_REF}`,
            modelAnswers: {
              'Grade 8-9': `Both writers show work damaging the health of the people who do it, though in Text 1 the harm is to the mind and in Text 2 to the body. The modern article reports that "17.1 million working days were lost to work-related stress, depression, and anxiety", and that younger workers are among the most likely to feel "emotionally exhausted"; Blincoe, on his first morning, was "half suffocated" by dust, "soon felt sick", and his back "ached". Both also show workers at the mercy of rules they cannot change. In Text 1, "flexibility" means "the company can change your hours but you cannot", and a job "demands total availability"; in Text 2, Blincoe learns that sitting down "was strictly forbidden in cotton mills" and that he "must keep on his legs" for "six hours and a half, without the least intermission". Finally, in both texts the harm hides behind something that looks acceptable. The modern workplace is "safer, cleaner, and more comfortable" than ever, "And yet something is profoundly wrong"; Blincoe's task looked as if "nothing could be easier", yet it left him "sick almost to fainting".`,
            },
            markScheme: [
              ...MARK_LEVELS_Q2,
              'Links to credit: harm to health, of the mind in Text 1 ("emotionally exhausted") and of the body in Text 2 ("half suffocated"); workers powerless before rules they cannot change ("flexibility"; "must keep on his legs"); harm hidden behind what looks acceptable ("safer, cleaner, and more comfortable"; "nothing could be easier").',
            ],
          },
          {
            id: 'ocr-p1-06-q3',
            questionNumber: 3,
            questionText: `Look again at Text 2, the whole text.\n\nHow does the writer use language and structure to show what Blincoe's first morning in the mill was like?\n\nRefer closely to the text, and use relevant subject terms to explain its effects.`,
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: EXTRACT_06_B,
            extractSource: EXTRACT_06_B_REF,
            modelAnswers: {
              'Grade 8-9': `The writer tells Blincoe's first morning in time order, and the structure lets the reader live through it at a child's pace, from arrival to the dinner bell. The opening is exact and flat, "They reached the mill about half past five", and the precise early hour already suggests a long day ahead.\n\nThe arrival is built through the senses in the order a child would meet them. First sound, "the burring sound before he reached the portals", then smell, "the fumes of the oil with which the axles of twenty thousand wheels and spindles were bathed", and finally the shock of entering: "the noise appalled him, and the stench seemed intolerable". The huge number "twenty thousand" dwarfs the small boy before his work has begun, and the strong words "appalled" and "intolerable" make the mill an assault on the body.\n\nThe second paragraph slows into a sequence of humiliations. The new children are "mustered", a military word, and "looked at, and laughed at", a repeated pattern that makes them sound like goods inspected and mocked. Irony does much of the work. "Apparently, nothing could be easier" gives the task as it first seemed, and the rest of the sentence takes it back: he was "much terrified by the whirling motion and noise of the machinery", and "half suffocated" by dust. "Took the liberty to sit down" borrows the language of good manners to show that a tired child's rest was treated as an offence, and the flat statement that sitting "was strictly forbidden in cotton mills" makes the cruelty a rule of the industry, not of one man.\n\nTime becomes a measure of endurance: he stood "till twelve o'clock, being six hours and a half, without the least intermission". The dashes that break up these sentences give the account a breathless, remembered quality, as if facts were being added as they came back to him. The release at the dinner bell changes the rhythm. A run of exclamations, "it revived him instantaneously!" and "the melancholy seemed to mingle their tears!", lets the writer's feeling break through, and the fresh air he valued "so perfectly" shows how foul the mill had been.\n\nThe third-person telling matters too. "He did not recollect" and "Blincoe does not remember" remind us that this is memory, which makes the details he does remember feel burned in. The account ends on its bitterest comparison: the food was "very much below the standard of the ordinary fare of the workhouse in which he had been reared". A workhouse was a byword for hardship, so by ending here the writer shows that the mill was worse than the place Blincoe had been sent from.`,
            },
            markScheme: [
              ...MARK_LEVELS_Q3,
              'Language to credit: the senses of sound and smell, and "twenty thousand wheels and spindles"; "mustered" and "looked at, and laughed at"; the irony of "Apparently, nothing could be easier" and "took the liberty to sit down"; the exclamations at the dinner bell; the closing comparison with the workhouse.',
              'Structure to credit: time order, from "about half past five" to the dinner bell; the arrival told in the order the senses meet it; the exact record of "six hours and a half"; the change of rhythm at the dinner bell; the third-person telling from Blincoe\'s memory; an ending on the bitterest detail.',
            ],
          },
          {
            id: 'ocr-p1-06-q4',
            questionNumber: 4,
            questionText: `"In both texts, work takes far more from people than it gives them."\n\nDecide how far you agree with this view.\n\nIn your answer:\n• weigh up what each writer says about work, and how far the statement fits each text\n• explain the effect each text has on you as a reader\n• compare the writers' ideas, and the ways each of them gets those ideas across\n• quote from both texts to back up your points.`,
            marks: 18,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: `Text 1:\n${EXTRACT_06_A}\n\nText 2:\n${EXTRACT_06_B}`,
            extractSource: `Text 1: ${EXTRACT_06_A_REF} | Text 2: ${EXTRACT_06_B_REF}`,
            modelAnswers: {
              'Grade 8-9': `I agree strongly in the case of Text 2, and largely in the case of Text 1, although the modern writer admits that today's work gives people much that Blincoe never had.\n\nBlincoe's mill takes everything and gives almost nothing. On his first morning it takes his health, since he was "half suffocated" by dust and "sick almost to fainting"; it takes his rest, since sitting down "was strictly forbidden in cotton mills"; and it takes his dignity, since the new children were "looked at, and laughed at". What it gives him in return is food "very much below the standard of the ordinary fare of the workhouse". The precise, unemotional record of time, "six hours and a half, without the least intermission", makes the reader feel each hour he stood. As a reader I find the account more upsetting for being told so plainly, and the few exclamations at the dinner bell show how little relief it took to revive him.\n\nThe writer of Text 1 begins by granting that modern work gives a great deal. It is "safer, cleaner, and more comfortable than at any point in human history", and the short sentence "We do not send children into mines" points straight back to workers like Blincoe. So the statement cannot be true of modern work in the same physical sense. "And yet something is profoundly wrong": what work now takes is mental and emotional. The figure of "17.1 million working days" lost to stress, depression and anxiety, and the way people are spoken of "as though human beings were machines that had overheated", show minds worn out rather than bodies. The final paragraph comes closest to the statement. A job that "provides neither financial security nor personal meaning" while it "demands total availability while offering zero loyalty" plainly takes more than it gives, and the metaphor of "a confidence trick" suggests that workers are cheated without noticing. The writer's anger made me think about what I would want from a job, beyond a wage.\n\nThe texts make their case in very different ways. Text 2 is a narrative of one child's morning, told in the past tense and the third person from Blincoe's memories, and its power comes from physical detail and irony ("Apparently, nothing could be easier"). Text 1 is an argument in the present tense, built on contrast, a national figure and a close look at words such as "burnout" and "flexibility", which the writer puts in inverted commas to show how far they have drifted from their meaning. Yet both rely on a gap between appearance and reality: the easy-looking task that leaves Blincoe sick, and the comfortable office that leaves workers exhausted.\n\nOverall, the statement is true of both texts, but in different senses. Blincoe's work takes his body and gives him almost nothing; modern work gives comfort and safety but, the writer argues, can take people's time, security and sense of purpose. Text 2 shows the worse exchange, but Text 1 warns that a better-looking exchange can still be unfair.`,
            },
            markScheme: {
              'AO4, evaluation (12 marks)': [
                ...MARK_LEVELS_AO4,
                'In this paper: Text 2 shows work taking a child\'s health, rest and dignity for food "below the standard" of the workhouse; Text 1 grants that work is "safer, cleaner, and more comfortable" but argues that it takes time, security and meaning. Credit a verdict that differs between the texts.',
              ],
              'AO3, comparison (6 marks)': [
                ...MARK_LEVELS_AO3,
                'Methods to compare: a past-tense narrative from memory against a present-tense argument; physical detail against figures and the critical look at words such as "burnout"; irony in both; a gap between appearance and reality in both.',
              ],
              Marking: ['The two grids are marked separately and the marks added, out of 18.'],
            },
          },
        ],
      },
      {
        id: 'ocr-p1-06-writing',
        title: 'Section B: Writing',
        description:
          'Answer ONE question: Question 5 or Question 6. You are advised to spend about one hour on this section, including time to plan and to check your work.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-06-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText: `Answer ONE of the following questions.\n\nQuestion 5\n"A good job is one that pays well."\nWrite an article for a careers website for young people in which you argue for or against this view.\nIn your article you could:\n• write about what people want from their work\n• explain what makes a job worth doing\n• give advice to readers choosing a career.\n\nOR\n\nQuestion 6\nWrite a speech for a school assembly about the right of young people to be treated fairly in their first part-time jobs.\nIn your speech you could:\n• describe the kinds of jobs young people do\n• explain the problems they can face\n• suggest what employers and young workers can do.\n\nIn your answer you will be assessed on content and organisation (24 marks) and on technical accuracy (16 marks).`,
            marks: 40,
            suggestedTimeMinutes: 60,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Question 5, an article against the view.\n\nMore than a payslip: what makes a job worth doing\n\nAsk a room of sixteen-year-olds what makes a good job, and most of the hands will go up for the same answer: money. It is a sensible answer. Money pays the rent, feeds a family and buys the freedom to make choices. Nobody should be embarrassed to want a decent wage. But if pay is the only thing you look for, you may end up well paid and miserable, and that is a poor bargain for forty years of your life.\n\nThink about how much time a job takes. If you work full time until you retire, you will spend roughly ninety thousand hours at work. That is more time than you will spend with your friends, and for many people more than they spend with their families. A job that pays well but bores you, frightens you or makes you feel worthless will take those hours and give back only money. Ask anyone who has walked out of a job, and they will often tell you that it was because of how they were treated, not what they were paid.\n\nSo what else should you look for? First, respect. A good employer treats people as people: it trains them, listens to them and does not expect them to be available at every hour of the day and night. Second, security. A job that can vanish with a week's notice, or whose hours change without warning, makes it impossible to plan a life. Third, and most important, meaning. Nurses, electricians, teachers, bus drivers and care workers rarely become rich, but many of them go home knowing that their work mattered to someone. That feeling is worth more than most bonuses.\n\nNone of this means that you should take the first worthwhile job you see and accept whatever it pays. Fair pay is part of respect, and an employer who underpays you is telling you how much it values you. The point is balance. When you compare two jobs, put the salary in one column, and in the other put the people, the training, the hours and the purpose. Then be honest about which column matters more to you.\n\nHere is some practical advice. When you look for work experience or a first job, ask the people already doing it what they enjoy and what they would change. Notice how a business treats its youngest staff. Look for employers who offer training or apprenticeships, because skills last longer than any single job. And remember that your first job is not your last: it is a chance to learn what you value.\n\nA good job pays you enough to live. A great job also gives you a reason to get up in the morning. Aim for the second, and do not settle for a payslip.`,
            },
            markScheme: {
              'AO5, content and organisation (24 marks)': MARK_LEVELS_AO5,
              'AO6, technical accuracy (16 marks)': MARK_LEVELS_AO6,
              'For these tasks': [
                MARK_WRITING_NOTE,
                'Question 5 is an article for young readers: a headline, a clear view on the statement, an engaging and direct voice, and practical advice.',
                'Question 6 is a speech for an assembly: it should sound spoken, address the audience, explain the problem clearly and end with a call to action.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 07: travel
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-p1-07',
    board: 'OCR',
    paperNumber: 1,
    title: 'Component 01: Communicating Information and Ideas',
    subtitle: 'English Language J351/01',
    code: 'J351/01',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p1-07-reading',
        title: 'Section A: Reading',
        description: `Read the two texts below, then answer all four questions. You are advised to spend about one hour on this section, about 12 minutes of it reading the texts.\n\nText 1: ${EXTRACT_07_A_REF}\nText 2: ${EXTRACT_07_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-07-q1',
            questionNumber: 1,
            questionText: `Look again at the second paragraph of Text 1, from "The Venice I visited" to "fourteen euros."\n\n(a) Identify two things about Venice that the writer found unpleasant. [2]\n\n(b) Give the phrase the writer uses to describe how the gondoliers looked. [1]\n\n(c) How much did a coffee in St Mark's Square cost? [1]`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Text 1:\n${EXTRACT_07_A}\n\nText 2:\n${EXTRACT_07_B}`,
            extractSource: `Text 1: ${EXTRACT_07_A_REF} | Text 2: ${EXTRACT_07_B_REF}`,
            modelAnswers: {
              'Grade 4-5': `(a) The flood barriers were being tested with a loud grinding roar, and cruise ships filled the narrow streets with thousands of day-trippers.\n(b) "exhausted and faintly hostile".\n(c) Fourteen euros.`,
            },
            markScheme: [
              '(a) 1 mark each, up to 2, for: the barriers tested with a grinding mechanical roar; cruise ships disgorging thousands of day-trippers; streets too crowded or narrow; tired or unfriendly gondoliers; expensive coffee.',
              '(b) 1 mark: "exhausted and faintly hostile" (accept "faintly hostile").',
              '(c) 1 mark: fourteen euros.',
              'Every answer must come from the second paragraph of Text 1.',
            ],
          },
          {
            id: 'ocr-p1-07-q2',
            questionNumber: 2,
            questionText: `In what ways are the two writers' experiences of visiting a famous place similar?\n\nBack up each point with evidence from both texts.`,
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: `Text 1:\n${EXTRACT_07_A}\n\nText 2:\n${EXTRACT_07_B}`,
            extractSource: `Text 1: ${EXTRACT_07_A_REF} | Text 2: ${EXTRACT_07_B_REF}`,
            modelAnswers: {
              'Grade 8-9': `Both writers arrive with a picture in their heads that the real place does not match. The writer of Text 1 has "seen the photographs, read the guidebooks, watched the documentaries", and Edwards admits that "the clearest photographs, the most elaborate descriptions, had done little or nothing" to prepare her. In each case the reality is a surprise: the place "bears almost no resemblance to the place you imagined" in Text 1, and the ground round the pyramids is "wholly unlike the desert of our dreams" in Text 2. Both are disappointed at first. Venice is crowded and expensive, with "thousands of day-trippers" and a coffee at "fourteen euros", and Edwards's first glimpse from the train "is not impressive", since the pyramids "look small and shadowy". Yet both then have a moment that makes the journey worthwhile. The modern writer, alone by a canal at dawn, "understood why people had been falling in love with this city for a thousand years"; Edwards, under the great pyramid, feels "the sense of awe and wonder". The difference is that the modern writer's moment lasts "perhaps ninety seconds", while Edwards's wonder grows the closer she gets.`,
            },
            markScheme: [
              ...MARK_LEVELS_Q2,
              'Links to credit: expectations formed by pictures and descriptions in both; a reality unlike what was imagined; a first disappointment (Venice\'s crowds and prices; the pyramids "small and shadowy" from the train); a moment of wonder that redeems the visit in both.',
            ],
          },
          {
            id: 'ocr-p1-07-q3',
            questionNumber: 3,
            questionText: `Look again at Text 2, the whole text.\n\nHow does Edwards use language and structure to show how her impression of the pyramids changes?\n\nRefer closely to the text, and use relevant subject terms to explain its effects.`,
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: EXTRACT_07_B,
            extractSource: EXTRACT_07_B_REF,
            modelAnswers: {
              'Grade 8-9': `Edwards structures the passage as a journey from anticlimax to revelation and then to correction, so that the reader's impression changes with hers.\n\nShe begins by lowering expectations. The first view, from "the window of the railway carriage", is "not impressive", and she sets it against greater sights: it "does not take one's breath away" as the Alps or the Acropolis do. The pyramids "look small and shadowy" and are "too familiar to be in any way startling". The impersonal "one" makes the disappointment a general truth about travellers rather than a private complaint, and her explanation, that every view "too distant to afford the means of scaling them against other objects" misleads, gives her reaction a reasoned, almost scientific basis. The last sentence of the paragraph prepares the turn: only "in approaching them, and observing how they grow with every foot of the road" does the truth begin to show.\n\nThe second paragraph is the climax. It opens with "But" and one long sentence of clauses joined by "and", "the edge of the desert is reached, and the long sand-slope climbed, and the rocky platform gained", so that the reader climbs with her, the passive verbs keeping the focus on the place rather than the traveller. The delay ends with the great pyramid "in all its unexpected bulk and majesty", and the balanced phrase "as sudden as it is overwhelming" captures the shock. Then come three short sentences with the same opening: "It shuts out the sky and the horizon. It shuts out all the other pyramids. It shuts out everything but the sense of awe and wonder." The repetition narrows the world, sentence by sentence, until only feeling is left.\n\nThe third paragraph steps back into reflection. "Now, too, one discovers" signals a calmer, more analytical voice. A list of what she had not known, "their surface, their color, their relative position, their number", and another of what had failed her, "plans and measurements, the clearest photographs, the most elaborate descriptions", show how little preparation was worth. Her description of the ground "pitted with open graves and cumbered with mounds of shapeless masonry" is far from romantic, and the corrections that follow, "bigger than we had expected", "smaller", "nine pyramids, instead of three", have the exactness of someone checking the facts. The ending is wry: the extra pyramids seem "intruders", and one "is little more than a big cairn". By finishing on this deflating detail, Edwards keeps her awe honest; she is moved, but she will not pretend that everything she saw was magnificent.`,
            },
            markScheme: [
              ...MARK_LEVELS_Q3,
              'Language to credit: the comparison with the Alps and the Acropolis; "small and shadowy"; the balanced "as sudden as it is overwhelming"; the repetition of "It shuts out"; the unromantic "pitted with open graves"; the wry "intruders" and "a big cairn".',
              'Structure to credit: anticlimax, then climax, then reflection, one paragraph each; the long climbing sentence joined by "and"; three short sentences that narrow the view; the closing corrections and the deflating last detail.',
            ],
          },
          {
            id: 'ocr-p1-07-q4',
            questionNumber: 4,
            questionText: `"Both writers suggest that famous places are always a disappointment."\n\nDecide how far you agree with this view.\n\nIn your answer:\n• weigh up what each writer says about visiting a famous place, and how far the statement fits each text\n• explain the effect each text has on you as a reader\n• compare the writers' experiences, and the ways each of them presents them\n• quote from both texts to back up your points.`,
            marks: 18,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: `Text 1:\n${EXTRACT_07_A}\n\nText 2:\n${EXTRACT_07_B}`,
            extractSource: `Text 1: ${EXTRACT_07_A_REF} | Text 2: ${EXTRACT_07_B_REF}`,
            modelAnswers: {
              'Grade 8-9': `I disagree with this statement, although both writers begin with disappointment. What they actually show is that famous places disappoint the traveller who expects the picture, and reward the one who keeps looking.\n\nThe writer of Text 1 comes closest to agreeing. The opening generalises about "a particular kind of disappointment that belongs exclusively to travel", and the second person, "You have seen the photographs", draws every reader into the habit of imagining a place before seeing it. The short sentence "Then you arrive." lands like a blow. Venice is "drowning", crowded with "thousands of day-trippers" from "Cruise ships the size of apartment blocks", and even the gondoliers look "exhausted and faintly hostile". The tone is witty and bitter, and as a reader I enjoy the deflation, especially the coffee at "fourteen euros". But the article does not end there. "And yet." begins a final paragraph in which the writer finds a still canal, a cat watching with "imperial disinterest" and "someone practising scales on a piano", and, "For perhaps ninety seconds", understands why people have loved the city "for a thousand years". So the disappointment is real, but it is not the whole truth.\n\nEdwards disagrees even more clearly. Her first view is "not impressive", and she explains why: from afar, the pyramids are "too familiar to be in any way startling". But close to, "the effect is as sudden as it is overwhelming", and the three sentences beginning "It shuts out" end by shutting out "everything but the sense of awe and wonder". Her experience reverses the statement: the disappointment comes from distance, and the wonder from being there. Even her corrections in the last paragraph, "nine pyramids, instead of three", are discoveries rather than a lament, though she cannot help seeing the six extra ones as "intruders", and her mild joke about one pyramid being "little more than a big cairn" shows a traveller enjoying the truth rather than mourning the picture.\n\nThe writers share one idea: both blame expectations made from images. Text 1 lists "the photographs", "the guidebooks" and "the documentaries"; Edwards lists "plans and measurements, the clearest photographs, the most elaborate descriptions". Yet they shape their experiences differently. Text 1 is built as disappointment followed by a brief, fragile moment that a "water taxi" destroys, so its final effect is bittersweet. Edwards builds upward, from anticlimax to climax, and then steps back to reflect, so her final effect is of a mind enlarged. Text 1 uses short sentences and fragments ("No tourists. No noise.") for its key moments; Edwards uses one long, climbing sentence and then repetition.\n\nOverall, neither text supports the word "always". Both writers are disappointed at first, but both find something that justifies the journey. Text 1 finds it only for ninety seconds and only by escaping the crowds; Edwards finds it in the place itself, once she is close enough to see it.`,
            },
            markScheme: {
              'AO4, evaluation (12 marks)': [
                ...MARK_LEVELS_AO4,
                'In this paper: Text 1 is mostly disappointment, redeemed by "perhaps ninety seconds" of beauty; Text 2 moves from a disappointing distant view to "awe and wonder". Credit an answer that challenges the word "always".',
              ],
              'AO3, comparison (6 marks)': [
                ...MARK_LEVELS_AO3,
                'Methods to compare: the second person in Text 1 against the impersonal "one" in Text 2; short sentences and fragments against a long climbing sentence and repetition; a bittersweet ending against reflection and correction; expectations made from images in both.',
              ],
              Marking: ['The two grids are marked separately and the marks added, out of 18.'],
            },
          },
        ],
      },
      {
        id: 'ocr-p1-07-writing',
        title: 'Section B: Writing',
        description:
          'Answer ONE question: Question 5 or Question 6. You are advised to spend about one hour on this section, including time to plan and to check your work.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-07-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText: `Answer ONE of the following questions.\n\nQuestion 5\n"Travelling abroad is the best way to learn about the world."\nWrite an article for a travel magazine for young people in which you argue for or against this statement.\nIn your article you could:\n• write about what travel can teach people\n• consider other ways of learning about the world\n• draw on your own experience or that of people you know.\n\nOR\n\nQuestion 6\nWrite a letter to a friend who is about to visit a place you know well, advising them how to get the most out of their visit.\nIn your letter you could:\n• describe what is worth seeing and doing there\n• warn them about any disappointments\n• suggest how to find the place's best moments.\n\nIn your answer you will be assessed on content and organisation (24 marks) and on technical accuracy (16 marks).`,
            marks: 40,
            suggestedTimeMinutes: 60,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Question 6, a letter to a friend.\n\nDear Sam,\n\nI am so glad that you are finally coming to stay in my grandparents' town this summer, and I promised I would tell you how to make the most of it. Here goes.\n\nFirst, forget whatever you have seen in the tourist leaflets. The pictures all show the harbour on a sunny afternoon, crowded with queues for ice cream and people photographing the same three boats. It does look like that at four o'clock in August, and you will be disappointed if that is all you see. The trick is to go at the right time.\n\nSo set your alarm. If you walk down to the harbour at half past six in the morning, you will have it almost to yourself. The fishing boats come back in around then, and the gulls go wild over the catch. The man who runs the bait shop will tell you the name of every boat if you ask him, and the story of at least one of them. Then go to the bakery on the corner by the church, where the first batch of pasties comes out of the oven at seven. Buy two. You will want the second one.\n\nAfter breakfast, take the cliff path east of the town. It is steep for the first ten minutes and then levels out, and after about an hour you reach a cove that you can only get to on foot. Most visitors never find it, because there is no sign. Take a towel and something to eat, and check the tide times at the harbour office before you set off, because the beach disappears completely at high tide.\n\nOn a rainy day, and there will be at least one, go to the little museum above the library. It is free, it is run by volunteers, and it has a room about the shipwrecks along this coast that is better than anything I have seen in a big city museum. Ask for Jean. She knows everything.\n\nFinally, my most important piece of advice: talk to people. My grandparents' neighbours have lived there all their lives, and they know things about the town that no guidebook will ever tell you. The best afternoon I ever spent there was listening to an old man describe the winter the sea came right up into the square.\n\nYou will have a wonderful time. Send me a photograph of the cove, so that I can be jealous.\n\nLots of love,\nPriya`,
            },
            markScheme: {
              'AO5, content and organisation (24 marks)': MARK_LEVELS_AO5,
              'AO6, technical accuracy (16 marks)': MARK_LEVELS_AO6,
              'For these tasks': [
                MARK_WRITING_NOTE,
                'Question 5 is a magazine article for young readers: a clear view on the statement, examples, and a lively voice.',
                'Question 6 is a letter to a friend: set out and addressed as a letter, informal but well organised, with practical advice and a warm tone.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 08: food
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-p1-08',
    board: 'OCR',
    paperNumber: 1,
    title: 'Component 01: Communicating Information and Ideas',
    subtitle: 'English Language J351/01',
    code: 'J351/01',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p1-08-reading',
        title: 'Section A: Reading',
        description: `Read the two texts below, then answer all four questions. You are advised to spend about one hour on this section, about 12 minutes of it reading the texts.\n\nText 1: ${EXTRACT_08_A_REF}\nText 2: ${EXTRACT_08_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-08-q1',
            questionNumber: 1,
            questionText: `Look again at the second paragraph of Text 1, from "Consider the supermarket" to "make an omelette."\n\n(a) Give the phrase the writer uses to describe the supermarket. [1]\n\n(b) Identify two of the questions the writer says a shopper might ask about an egg. [2]\n\n(c) What, according to the writer, has the shopper lost by the end of all these questions? [1]`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Text 1:\n${EXTRACT_08_A}\n\nText 2:\n${EXTRACT_08_B}`,
            extractSource: `Text 1: ${EXTRACT_08_A_REF} | Text 2: ${EXTRACT_08_B_REF}`,
            modelAnswers: {
              'Grade 4-5': `(a) "that cathedral of modern abundance".\n(b) Is the egg free-range or organic? Is the packaging recyclable?\n(c) The will to make an omelette.`,
            },
            markScheme: [
              '(a) 1 mark: "that cathedral of modern abundance" (accept "cathedral of modern abundance").',
              '(b) 1 mark each, up to 2, for: free-range or organic; barn-reared or pasture-raised; food miles, or whether the local farm is less efficient; whether the packaging is recyclable; whether the brand is ethical; whether the hens have been spoken to kindly.',
              '(c) 1 mark: the will to make an omelette.',
              'Every answer must come from the second paragraph of Text 1.',
            ],
          },
          {
            id: 'ocr-p1-08-q2',
            questionNumber: 2,
            questionText: `What do the two writers find strange or surprising about the way people eat?\n\nBack up each point with evidence from both texts.`,
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: `Text 1:\n${EXTRACT_08_A}\n\nText 2:\n${EXTRACT_08_B}`,
            extractSource: `Text 1: ${EXTRACT_08_A_REF} | Text 2: ${EXTRACT_08_B_REF}`,
            modelAnswers: {
              'Grade 8-9': `Both writers look at their society's eating habits as if from outside, and both find them odd. The writer of Text 1 is surprised that food, once "the simplest thing in the world", has become "a moral battlefield, a status symbol, an identity statement"; Southey's Spanish visitor is surprised by much at the English table, from coffee so weak that "nothing is so detestable as an Englishman's coffee" to "The quantity of meat which they consume", which "is astonishing". Both notice excess. Text 1 calls the supermarket "that cathedral of modern abundance", and Southey's visitor believes that one English dinner "would supply the same number of persons in Spain for a week". Both also find rules getting in the way of a simple pleasure: in Text 1 the shopper must navigate "the moral labyrinth of egg purchase", and in Text 2 "an act of parliament" stops the English from roasting their own coffee. Finally, both writers mix mockery with a serious point. The modern writer jokes, "Have the hens been spoken to kindly?", before warning that eating has become "a source of guilt and paralysis", and Southey laughs at English coffee while noting that the poor "subsist so generally" on the potato.`,
            },
            markScheme: [
              ...MARK_LEVELS_Q2,
              'Links to credit: an outsider\'s eye on ordinary habits in both; excess ("cathedral of modern abundance"; meat "astonishing"); rules or morals that spoil a pleasure ("moral labyrinth"; "an act of parliament"); humour with a serious edge in both.',
            ],
          },
          {
            id: 'ocr-p1-08-q3',
            questionNumber: 3,
            questionText: `Look again at Text 2, the whole text. Southey wrote it in the character of a Spanish visitor to England.\n\nHow does Southey use language and structure to present English meals?\n\nRefer closely to the text, and use relevant subject terms to explain its effects.`,
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: EXTRACT_08_B,
            extractSource: EXTRACT_08_B_REF,
            modelAnswers: {
              'Grade 8-9': `Southey's letter follows the English day from breakfast to supper, and that simple structure lets him alternate praise and criticism, so that his judgements seem fair even when they are sharp.\n\nHe opens by correcting other writers: "The English do not eat beef-steaks for breakfast, as lying travellers have told us". Beginning with a rebuttal gives his visitor authority as an honest observer. The breakfast table is then described with pleasure, "a cheerful sight", and with careful detail: porcelain that "excels the Chinese in elegance of form and ornament", and water that "smokes and sings in an urn of Etruscan shape". The personification of the boiling water makes the scene homely and lively. Yet even the praise carries a sly aside, "for here they imitate every thing", which hints that English elegance is borrowed.\n\nThe coffee is the comic centre of the first paragraph. The sweeping judgement "nothing is so detestable as an Englishman's coffee" is followed by an insulting comparison, "The washing of our after-dinner cups would make a mixture as good", and by a precise, disgusted description: "just strong enough to make the water brown and bitter". The visitor then reports the English defence, that strong coffee "would prevent them from sleeping", which makes their excuse sound feeble, and adds that "an act of parliament" stops them roasting it, a detail that makes bad coffee seem almost a national institution. The paragraph turns at "They make amends however", and the praise of tea and cream, "a very delightful beverage", restores the balance. Its last words are a backhanded compliment: butter "is the best thing in the country".\n\nThe second paragraph is organised by the clock, "The dinner hour is usually five", "Tea is served between seven and eight", like a guide for a foreign reader, and it notes how class divides the day: the labouring people "dine at one, the highest ranks at six, seven, or even eight". The exclamation "The quantity of meat which they consume is astonishing!" and the hyperbole that one English dinner would feed the same number "in Spain for a week" make the outsider's viewpoint vivid, while "crude and insipid" shows the visitor's taste. Wit returns in the explanation that long drinking has declined "as much from the gradual progress of the taxes as of good sense".\n\nThe ending softens. "Supper is rather a ceremony than a meal" is a neat antithesis, and the final clause, "the hour afterwards, over our wine and water, or spirits, is the pleasantest in the day", uses "our" to show the visitor now sharing English habits. The letter has moved from correction and mockery to something like affection.`,
            },
            markScheme: [
              ...MARK_LEVELS_Q3,
              'Language to credit: the rebuttal of "lying travellers"; the personified boiling water that "smokes and sings"; the sweeping judgement of the coffee and the comparison with "after-dinner cups" (not a superlative in form); the backhanded compliment to the butter; the exclamation and hyperbole about meat; the antithesis of "ceremony" and "meal".',
              'Structure to credit: the day followed from breakfast to supper; praise and criticism in turn, with "They make amends however" as a turning point; times of day as signposts; the softening ending and the shift to "our".',
            ],
          },
          {
            id: 'ocr-p1-08-q4',
            questionNumber: 4,
            questionText: `"Both writers make fun of the way people eat, but each has a serious point to make."\n\nDecide how far you agree with this view.\n\nIn your answer:\n• weigh up what each writer says about food and eating, and how far the statement fits each text\n• explain the effect each text has on you as a reader\n• compare the writers' ideas, and the ways each of them gets those ideas across\n• quote from both texts to back up your points.`,
            marks: 18,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: `Text 1:\n${EXTRACT_08_A}\n\nText 2:\n${EXTRACT_08_B}`,
            extractSource: `Text 1: ${EXTRACT_08_A_REF} | Text 2: ${EXTRACT_08_B_REF}`,
            modelAnswers: {
              'Grade 8-9': `I agree with this statement for both texts, but the balance is different: Text 1 uses humour to serve a serious argument, while in Text 2 the serious points are smaller and mostly tucked inside the comedy.\n\nThe writer of Text 1 makes fun of modern shoppers with a run of questions about a single egg, "Free-range or organic? Barn-reared or pasture-raised?", ending with the absurd "Have the hens been spoken to kindly?" The mock-heroic phrase "the moral labyrinth of egg purchase", and the punchline that the shopper has "lost the will to make an omelette", make the reader laugh at a habit they may share. Yet the writer is careful to say "I am not making light of genuine ethical concerns", and lists them seriously: "Factory farming is cruel, food waste is obscene". The real point comes at the end. Eating, "one of life's fundamental pleasures", has become "a source of guilt and paralysis", and the paradox that "The people I know who care most about food are often the people who enjoy it least" leaves the reader thinking rather than laughing.\n\nSouthey's Spanish visitor is funnier and less earnest. The attack on English coffee, "nothing is so detestable as an Englishman's coffee", and the comparison with "The washing of our after-dinner cups", are pure comedy, and the backhanded compliment that butter "is the best thing in the country" mocks English food with a straight face. But serious observations are there. He notices that "the poor subsist so generally upon this root", the potato, which hints at how little else the poor have to eat. He criticises government, noting that "an act of parliament" spoils English coffee and that "the ministry, in violation of an explicit bargain," raised the tax on tea "four fold". And he records class differences in the dinner hour, from "the labouring part of the community" at one to "the highest ranks" as late as eight. These points are made lightly, as a traveller's notes, not as an argument.\n\nAs a reader, I enjoy Text 2 more as entertainment, but Text 1 has more effect on my own thinking, because it is aimed at readers like me. The methods explain this. Text 1 addresses the reader as "you" in the supermarket, so the joke is on us, and then turns to "I wonder whether" to make its case. Southey writes as a foreigner reporting to people at home, so the joke is on the English, and his viewpoint, a visitor used to Spanish meals and "fast-days", lets him see as strange what English readers took for granted. Both use exaggeration ("cathedral of modern abundance"; a dinner that "would supply the same number of persons in Spain for a week"), but Text 1's exaggeration supports an argument, while Southey's mostly delights.\n\nOverall, both writers mock eating habits and both make serious points, so the statement is true. But only Text 1 is written for the sake of its serious point; in Text 2, the seriousness comes as a by-product of a sharp-eyed and amused visitor's honesty.`,
            },
            markScheme: {
              'AO4, evaluation (12 marks)': [
                ...MARK_LEVELS_AO4,
                'In this paper: Text 1 jokes about the "moral labyrinth of egg purchase" but argues seriously that eating has become "a source of guilt and paralysis"; Text 2 is mostly comedy, with serious notes on the poor, taxes and class. Credit a judgement about how serious each text is.',
              ],
              'AO3, comparison (6 marks)': [
                ...MARK_LEVELS_AO3,
                'Methods to compare: the second person in the supermarket against a visitor\'s letter home; exaggeration in both, for argument in Text 1 and for delight in Text 2; a serious turn in Text 1 ("I am not making light") against serious points made in passing in Text 2.',
              ],
              Marking: ['The two grids are marked separately and the marks added, out of 18.'],
            },
          },
        ],
      },
      {
        id: 'ocr-p1-08-writing',
        title: 'Section B: Writing',
        description:
          'Answer ONE question: Question 5 or Question 6. You are advised to spend about one hour on this section, including time to plan and to check your work.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-08-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText: `Answer ONE of the following questions.\n\nQuestion 5\n"Every school should teach every student how to cook."\nWrite a speech for a school council meeting in which you argue for or against this idea.\nIn your speech you could:\n• explain what students know about cooking now\n• consider what cooking lessons could teach\n• answer the objections of people who disagree with you.\n\nOR\n\nQuestion 6\nWrite an article for a food magazine about a meal that matters to you or your family, explaining what food can mean to people beyond simply feeding them.\nIn your article you could:\n• describe the meal and the people who share it\n• explain what it means to you\n• suggest why shared meals still matter today.\n\nIn your answer you will be assessed on content and organisation (24 marks) and on technical accuracy (16 marks).`,
            marks: 40,
            suggestedTimeMinutes: 60,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Question 6, an article for a food magazine.\n\nSunday at my grandmother's table\n\nEvery Sunday for as long as I can remember, my grandmother has cooked the same meal: rice with black-eyed peas, chicken stewed until it falls off the bone, fried plantain and a salad that nobody eats. She starts at nine in the morning. By one o'clock, eleven of us are squeezed round a table built for six, and the noise can be heard from the street.\n\nOn paper, it is just lunch. Any nutritionist could tell you how many calories are on that plate, and would probably frown at the amount of oil in the plantain. But if you think that a meal is only fuel, you have never eaten at my grandmother's.\n\nFood, for her, is a way of saying things she does not put into words. She came to this country with very little, and for years she worked two jobs. She does not often talk about that time. Instead, she cooks the dishes her own mother made, and every Sunday she hands them on to us. When she shows my younger cousin how long to leave the chicken, she is giving him a piece of her history. When she piles extra rice onto my plate in exam season, she is telling me that she is proud of me, and that she worries.\n\nThe table matters as much as the food. It is the only time in the week when my uncles, who live in different cities, sit in the same room. Arguments start there and are settled there. News is shared, good and bad. When my cousin passed her driving test at the fourth attempt, the whole family raised a glass of my grandmother's ginger beer to her, and she has never been allowed to forget it.\n\nWe live in an age that worries about food constantly. We count it, photograph it, judge it and feel guilty about it. Some of that care is sensible: it matters what we eat, and how it is produced. But I sometimes think we have forgotten the oldest purpose of a meal, which is to bring people together. Families who eat together talk together, and neighbours who share food learn more about each other than any leaflet could teach them.\n\nSo here is my suggestion. This week, cook something that someone you love used to cook for you, or ask an older relative to teach you their best dish. Write down the recipe, and the story that comes with it. Then invite people to eat it with you, and put the phones in another room.\n\nYou will be feeding more than their bodies. You will be keeping something alive.`,
            },
            markScheme: {
              'AO5, content and organisation (24 marks)': MARK_LEVELS_AO5,
              'AO6, technical accuracy (16 marks)': MARK_LEVELS_AO6,
              'For these tasks': [
                MARK_WRITING_NOTE,
                'Question 5 is a speech to a school council: it should sound spoken, take a clear side, give reasons and answer objections.',
                'Question 6 is a magazine article: a title, vivid description of the meal, and reflection on what food means, in a voice that suits the readers of a food magazine.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 09: fashion
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-p1-09',
    board: 'OCR',
    paperNumber: 1,
    title: 'Component 01: Communicating Information and Ideas',
    subtitle: 'English Language J351/01',
    code: 'J351/01',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p1-09-reading',
        title: 'Section A: Reading',
        description: `Read the two texts below, then answer all four questions. You are advised to spend about one hour on this section, about 12 minutes of it reading the texts.\n\nText 1: ${EXTRACT_09_A_REF}\nText 2: ${EXTRACT_09_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-09-q1',
            questionNumber: 1,
            questionText: `Look again at the first paragraph of Text 1, from "The fashion industry tells us" to "towards responsibility."\n\n(a) Identify two things that, the fashion industry claims, it is becoming. [2]\n\n(b) The writer puts the word "journey" in inverted commas. Explain, in your own words, what this suggests about the writer's view of the chief executives. [2]`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Text 1:\n${EXTRACT_09_A}\n\nText 2:\n${EXTRACT_09_B}`,
            extractSource: `Text 1: ${EXTRACT_09_A_REF} | Text 2: ${EXTRACT_09_B_REF}`,
            modelAnswers: {
              'Grade 4-5': `(a) Sustainable and inclusive.\n(b) The writer does not believe what the chief executives say (1): "journey" is a fashionable word that makes them sound as if they are changing, without showing that anything has really changed (1).`,
            },
            markScheme: [
              '(a) 1 mark each, up to 2, for: sustainable; inclusive; conscious.',
              "(b) 2 marks, in the student's own words: 1 for the writer's doubt or disbelief; 1 for why, that the word is a fashionable or empty phrase that suggests change without proving it.",
              'Every answer must come from the first paragraph of Text 1.',
            ],
          },
          {
            id: 'ocr-p1-09-q2',
            questionNumber: 2,
            questionText: `What do the two writers suggest about the power that fashion has over people?\n\nBack up each point with evidence from both texts.`,
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: `Text 1:\n${EXTRACT_09_A}\n\nText 2:\n${EXTRACT_09_B}`,
            extractSource: `Text 1: ${EXTRACT_09_A_REF} | Text 2: ${EXTRACT_09_B_REF}`,
            modelAnswers: {
              'Grade 8-9': `Both writers present fashion as a power that rules people's choices across the whole of society. Text 2 says so outright: "Fashion prescribes rules for all. All classes of society bow, more or less, to her decrees", from "The fine lady who frequents the Court" to "the servant-girl who sweeps out the area of a London lodging-house". The writer of Text 1 shows the same reach through numbers: "approximately 100 billion garments per year", "roughly thirteen for every person on the planet", with the average British consumer buying "26.7 kilograms of clothing annually". Both also show fashion reaching into the smallest details. The Victorian writer says "There is no part of a lady's dress too minute" for fashion's "inspection and care and legislation", down to "The colour of gloves"; Text 1 follows a single "£4.99" garment from purchase to "two hundred years in a landfill". Finally, both suggest that people follow fashion without thinking clearly about it. Text 2 criticises those who are "led blindfold by the prevailing fashion" and the woman who "follows fashion like a slave"; Text 1 says the true price is "hidden so effectively that we can pretend it does not exist". The difference is that Text 2 criticises individuals' foolish responses to fashion, while Text 1 blames "an economic system" as much as the shoppers.`,
            },
            markScheme: [
              ...MARK_LEVELS_Q2,
              'Links to credit: fashion\'s rule over everyone ("All classes of society bow"; garments by the billion); its reach into detail ("too minute"; one "£4.99" garment); people following it without thinking ("led blindfold"; "pretend it does not exist").',
            ],
          },
          {
            id: 'ocr-p1-09-q3',
            questionNumber: 3,
            questionText: `Look again at Text 2, the whole text.\n\nHow does the writer use language and structure to present the power of fashion, and the best way to respond to it?\n\nRefer closely to the text, and use relevant subject terms to explain its effects.`,
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: EXTRACT_09_B,
            extractSource: EXTRACT_09_B_REF,
            modelAnswers: {
              'Grade 8-9': `The writer presents fashion as a ruler, and the structure moves from describing its power to advising readers how to live under it.\n\nThe first sentence is short and absolute: "Fashion prescribes rules for all." The capital letter and the pronoun "her" in "bow, more or less, to her decrees" turn fashion into a queen or lawgiver, and the vocabulary of law runs through the paragraph, "prescribes", "decrees", "legislation", and finally "act of uniformity", the name of a real kind of law that forced everyone to conform. The writer proves the reach of this rule by setting extremes side by side: "The fine lady who frequents the Court, as well as the servant-girl who sweeps out the area of a London lodging-house". The contrast between the Court and the basement area shows that no one escapes, and the remark that a fashion "invariably finds its way downward in the course of time" suggests how slowly but surely it spreads.\n\nLong lists show how much fashion controls: "the size and shape of bonnets, the make of gowns, their length and their size - the number of breadths and gores - the trimmings, the petticoats". Piling up details in this way imitates fashion's own fussiness, and the claim that "There is no part of a lady's dress too minute" for its "inspection and care and legislation" is both a criticism and a joke. Yet the paragraph ends by granting fashion a use: it "defines the boundaries within which ladies may safely indulge their own conceits".\n\nThe second paragraph turns from description to judgement, and its opening sets up a balance: the best-dressed are neither "led blindfold by the prevailing fashion" nor "strong-minded enough to defy it". The writer then builds a long sentence from a chain of "who" clauses to describe the rebel, with comic images: she "looks like a whipping post" without a crinoline and wears a bonnet "of the coal-scuttle cut". The length of the sentence makes her protest seem exhausting, and the short verdict that follows, "She will provoke a smile", dismisses her. The slave of fashion is treated just as firmly: she "considers neither her age, nor her figure, nor her station, nor her means", a list of what she ignores, and "allows herself to be an advertisement for the milliner she employs".\n\nThe ending is a paradox. The woman who follows fashion most closely "will often appear eccentric, and generally ill-dressed", which is exactly what she was trying to avoid. By leaving both extremes looking foolish, the writer guides the reader towards the sensible middle way without needing to state it.`,
            },
            markScheme: [
              ...MARK_LEVELS_Q3,
              'Language to credit: fashion personified as a ruler ("her decrees"); the vocabulary of law, up to "act of uniformity"; the contrast of the "fine lady" and the "servant-girl"; the lists of garments; the comic images of the rebel ("a whipping post", "the coal-scuttle cut"); the paradox that the slave of fashion looks "eccentric".',
              'Structure to credit: a short, absolute first sentence; the first paragraph on fashion\'s power, the second on how to respond; the long chain of "who" clauses and the short verdicts after it; an ending that leaves the middle way implied.',
            ],
          },
          {
            id: 'ocr-p1-09-q4',
            questionNumber: 4,
            questionText: `"Both writers believe that people should think for themselves instead of following fashion."\n\nDecide how far you agree with this view.\n\nIn your answer:\n• weigh up what each writer says about fashion, and how far the statement fits each text\n• explain the effect each text has on you as a reader\n• compare the writers' ideas, and the ways each of them gets those ideas across\n• quote from both texts to back up your points.`,
            marks: 18,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: `Text 1:\n${EXTRACT_09_A}\n\nText 2:\n${EXTRACT_09_B}`,
            extractSource: `Text 1: ${EXTRACT_09_A_REF} | Text 2: ${EXTRACT_09_B_REF}`,
            modelAnswers: {
              'Grade 8-9': `I only partly agree. Both writers criticise people who follow fashion without thinking, but neither simply tells readers to ignore it: the Victorian writer advises a sensible middle way within fashion's rules, and the modern writer blames a whole economic system rather than individual shoppers alone.\n\nThe writer of Text 1 does want readers to think. The opening repeats the industry's claims, "It is becoming sustainable. It is becoming inclusive. It is becoming conscious.", in short sentences that sound like slogans, and puts the executives' "journey" in inverted commas to show disbelief. Then "And yet." introduces the facts that expose the slogans: "100 billion garments per year", a "£4.99" garment "worn seven times", "two hundred years in a landfill". The reader is clearly meant to stop believing the press releases and look at the numbers. But the last paragraph changes the focus. "The problem is not that we lack information", the writer says; the problem is "an economic system in which clothing is cheaper than food". So thinking for ourselves is not enough, because the true price "is hidden so effectively that we can pretend it does not exist". The word "pretend" does accuse us, but the main target is the system that makes pretending easy. As a reader I feel uncomfortable, especially at the comparison with "a sandwich", because I recognise my own habits.\n\nThe Victorian writer is closer to the statement in criticising mindless followers. The woman "who follows fashion like a slave" and "allows herself to be an advertisement for the milliner she employs" is mocked, and so is anyone "led blindfold by the prevailing fashion". Yet the writer is just as scornful of the woman who thinks for herself so fiercely that she defies fashion altogether: she "looks like a whipping post" and "will provoke a smile". The ideal is not independence but judgement: to dress according to one's "age", "figure", "station" and "means", within the limits fashion sets. Fashion even "defines the boundaries within which ladies may safely indulge their own conceits", so the writer accepts its authority. To a modern reader this advice sounds cautious, even timid, but it is also practical: it tells people how to look well, not how to change the world.\n\nThe methods match these purposes. Text 1 argues with statistics, contrast and a final list of hidden costs, "polluted rivers, exhausted workers, and mountains of textile waste". Text 2 instructs through description and gentle satire, building long sentences of "who" clauses to sketch two foolish types for readers to avoid. Both, however, present fashion as a powerful force: a ruler with "her decrees" in Text 2, and in Text 1 an industry that "tells us, with considerable frequency and conviction, that it is changing".\n\nOverall, the statement is too simple for either text. Text 1 wants readers to see through fashion, but it places most of the blame on a system. Text 2 wants readers to use their judgement, but within fashion's rules, not instead of them.`,
            },
            markScheme: {
              'AO4, evaluation (12 marks)': [
                ...MARK_LEVELS_AO4,
                'In this paper: Text 1 wants readers to see through the industry\'s claims but blames "an economic system" most; Text 2 mocks both the slave of fashion and the rebel against it, and advises judgement within fashion\'s "boundaries". Credit a verdict that differs between the texts.',
              ],
              'AO3, comparison (6 marks)': [
                ...MARK_LEVELS_AO3,
                'Methods to compare: statistics and contrast against description and satire; slogans mocked in Text 1 against types mocked in Text 2; fashion as an industry in Text 1 and as a ruler in Text 2.',
              ],
              Marking: ['The two grids are marked separately and the marks added, out of 18.'],
            },
          },
        ],
      },
      {
        id: 'ocr-p1-09-writing',
        title: 'Section B: Writing',
        description:
          'Answer ONE question: Question 5 or Question 6. You are advised to spend about one hour on this section, including time to plan and to check your work.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-09-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText: `Answer ONE of the following questions.\n\nQuestion 5\n"What you wear says nothing important about who you are."\nWrite an article for a magazine for teenagers in which you argue for or against this statement.\nIn your article you could:\n• write about why people choose the clothes they do\n• consider how others judge us by our clothes\n• draw on your own experience.\n\nOR\n\nQuestion 6\nWrite a letter to the head of a clothing company, persuading them to change the way they make and sell clothes.\nIn your letter you could:\n• explain why you are writing\n• describe the problems you want them to address\n• suggest what the company could do.\n\nIn your answer you will be assessed on content and organisation (24 marks) and on technical accuracy (16 marks).`,
            marks: 40,
            suggestedTimeMinutes: 60,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Question 6, a letter to a clothing company.\n\nDear Chief Executive,\n\nI am fifteen, and for the last three years I have bought almost all my clothes from your website. I am writing to tell you why I have stopped, and what would bring me back.\n\nLast month our geography class studied the clothing industry. We learned how much water it takes to grow the cotton for a single T-shirt, and we saw pictures of a river that ran blue with dye from the factories beside it. Then our teacher asked us to check the labels of what we were wearing. Mine carried your name. I felt as if I had been part of something without being told.\n\nI do not believe that your company wants to pollute rivers or underpay the people who sew its clothes. I have read the statements about sustainability on your website, and I am sure that some of the people who wrote them mean what they say. But statements are not the same as changes. When a dress costs less than my lunch, somebody, somewhere, is paying the difference, and it is not me.\n\nI would like to ask you to do three things.\n\nFirst, tell your customers the truth. Show on every product page where the item was made, what it is made of, and how much the people who made it were paid. Shoppers like me are not stupid. If we are given the facts, many of us will choose better.\n\nSecond, make fewer clothes, and make them to last. I would happily pay twice as much for a pair of jeans that survives two years instead of two months. A smaller range of better garments would also mean less waste in your warehouses and in our bins.\n\nThird, take your clothes back. Offer a repair service, or a scheme in which customers return worn items to be resold or recycled, with a discount on their next order. Some companies already do this, and it would show that you take responsibility for what happens to your clothes after they are sold.\n\nI understand that these changes would cost money, and that your company has to make a profit. But young people are paying more attention than you might think. We talk to each other, we share what we learn, and we remember which brands told us the truth. The company that changes first will not only do the right thing; it will win a generation of customers.\n\nI would be very grateful for a reply, and I would be glad to share it with my class.\n\nYours faithfully,\n\nJordan Ellis`,
            },
            markScheme: {
              'AO5, content and organisation (24 marks)': MARK_LEVELS_AO5,
              'AO6, technical accuracy (16 marks)': MARK_LEVELS_AO6,
              'For these tasks': [
                MARK_WRITING_NOTE,
                'Question 5 is a magazine article for teenagers: a clear view on the statement, examples from life, and a voice that suits young readers.',
                'Question 6 is a formal letter: set out and addressed as a letter, polite but firm, with a clear purpose, reasons and specific requests.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 10: childhood
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-p1-10',
    board: 'OCR',
    paperNumber: 1,
    title: 'Component 01: Communicating Information and Ideas',
    subtitle: 'English Language J351/01',
    code: 'J351/01',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p1-10-reading',
        title: 'Section A: Reading',
        description: `Read the two texts below, then answer all four questions. You are advised to spend about one hour on this section, about 12 minutes of it reading the texts.\n\nText 1: ${EXTRACT_10_A_REF}\nText 2: ${EXTRACT_10_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-10-q1',
            questionNumber: 1,
            questionText: `Look again at the first paragraph of Text 1, from "We have, as a society" to "every thirty seconds."\n\n(a) Identify two things about children that, the writer says, adults monitor. [2]\n\n(b) Until what age, according to the writer, do adults walk children to school? [1]\n\n(c) What, according to the writer, can a twelve-year-old not do without a risk assessment? [1]`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Text 1:\n${EXTRACT_10_A}\n\nText 2:\n${EXTRACT_10_B}`,
            extractSource: `Text 1: ${EXTRACT_10_A_REF} | Text 2: ${EXTRACT_10_B_REF}`,
            modelAnswers: {
              'Grade 4-5': `(a) Their screen time and their sugar intake.\n(b) Eleven.\n(c) Climb a tree.`,
            },
            markScheme: [
              '(a) 1 mark each, up to 2, for: screen time; sugar intake; friendship groups; emotional vocabulary; exposure to ideas adults consider inappropriate.',
              '(b) 1 mark: eleven.',
              '(c) 1 mark: climb a tree.',
              'Every answer must come from the first paragraph of Text 1.',
            ],
          },
          {
            id: 'ocr-p1-10-q2',
            questionNumber: 2,
            questionText: `What do the two writers suggest children miss when they are protected too much?\n\nBack up each point with evidence from both texts.`,
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: `Text 1:\n${EXTRACT_10_A}\n\nText 2:\n${EXTRACT_10_B}`,
            extractSource: `Text 1: ${EXTRACT_10_A_REF} | Text 2: ${EXTRACT_10_B_REF}`,
            modelAnswers: {
              'Grade 8-9': `Both writers argue that children who are protected from every difficulty miss the very experiences that make them strong. The writer of Text 1 says that "children need risk": they "need to fall out of trees, lose arguments, get lost, and find their way back", and to learn "that failure is survivable". Ruskin, looking back on his own childhood, counts it a calamity that he "had nothing to endure": "my strength was never exercised, my patience never tried, and my courage never fortified". Both also notice what children lose with other people. Text 1 lists the arguments children should be allowed to lose, and Ruskin had "no companions to quarrel with", "nobody to assist, and nobody to thank". And both see a cost that shows later. The modern writer fears a generation "less resilient and more anxious than any that preceded it", and Ruskin found that, because he had never had to manage his feelings, affection "came with violence utterly rampant and unmanageable". Both writers accept that the protection had its reasons, since "The intention, of course, is love" in Text 1 and Ruskin counts among the "blessings" of his childhood the fine palate that his parents' strict rules gave him, yet both conclude that a child kept from struggle is kept from growing.`,
            },
            markScheme: [
              ...MARK_LEVELS_Q2,
              'Links to credit: risk, struggle or endurance ("children need risk"; "nothing to endure"); quarrels and other people ("lose arguments"; "no companions to quarrel with"); a cost that appears later ("less resilient"; affection "unmanageable"); protection meant well in both.',
            ],
          },
          {
            id: 'ocr-p1-10-q3',
            questionNumber: 3,
            questionText: `Look again at Text 2, the whole text.\n\nHow does Ruskin use language and structure to show what his childhood lacked?\n\nRefer closely to the text, and use relevant subject terms to explain its effects.`,
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: EXTRACT_10_B,
            extractSource: EXTRACT_10_B_REF,
            modelAnswers: {
              'Grade 8-9': `Ruskin sets out his childhood like a set of accounts, and the structure is what makes the losses so striking. He has just listed its "blessings", ending with the "extreme perfection in palate" that the ban on cake and sweets gave him, and now he turns the page: "next, let me count the equally dominant calamities". The word "count" and the balancing of "blessings" against "calamities" make the passage sound calm and exact, as if he were weighing his life rather than complaining about it. That calm makes the first calamity hit harder. It is given a paragraph of its own, one short sentence: "First, that I had nothing to love."\n\nThe next paragraph explains it through comparison. His parents were "visible powers of nature to me, no more loved than the sun and the moon". The comparison suggests that they were constant, distant and necessary, but not people he could feel close to. A bracketed exclamation then breaks in from the present, "(how much, now, when both are darkened!)", and the metaphor of the sun and moon "darkened" shows his grief for them now that they are dead, which makes the earlier lack of love more painful. The list of absences continues with repeated negatives: "no companions to quarrel with", "nobody to assist, and nobody to thank".\n\nHis examples are specific and almost comic. The rhetorical question about the servants asks why he should have been grateful "to the cook for cooking, or the gardener for gardening", when the cook "dared not give me a baked potato without asking leave" and the gardener "would not let my ants' nests alone". The tiny details show how controlled the household was, and the verb "dared" suggests that the servants feared his parents. He then corrects the reader's likely assumption, "not, however, what might perhaps have been expected", before naming the real consequence in strong language: affection "came with violence utterly rampant and unmanageable".\n\nThe second calamity is announced in brackets, "(second of chief calamities)", continuing the structure of a list. "I had nothing to endure" is followed by a carefully balanced three-part sentence, "my strength was never exercised, my patience never tried, and my courage never fortified", and the repeated "never" makes the lack seem complete. Ruskin ends, though, with an anecdote that is gently ironic: one of his nearest approaches to disobedience was "passionate effort to get leave to play with the lion's cubs in Wombwell's menagerie". A child with nothing to endure longed for danger, and even then he asked for "leave". The ending shows, in one picture, both his courage and the control that never let him use it.`,
            },
            markScheme: [
              ...MARK_LEVELS_Q3,
              'Language to credit: the comparison of the parents with "the sun and the moon"; the bracketed grief of "darkened"; the repeated negatives; the cook who "dared not give me a baked potato without asking leave" (his parents\' control, not a house arranged round him); the strong words "rampant and unmanageable"; the three-part sentence built on "never"; the ironic last anecdote.',
              'Structure to credit: the passage set out as accounts, blessings then calamities; the one-sentence paragraph for the first calamity; the bracketed "(second of chief calamities)"; the correction of what "might perhaps have been expected"; the ending on a single picture.',
            ],
          },
          {
            id: 'ocr-p1-10-q4',
            questionNumber: 4,
            questionText: `"Both writers argue that protecting children too much does them more harm than good."\n\nDecide how far you agree with this view.\n\nIn your answer:\n• weigh up what each writer says about protecting children, and how far the statement fits each text\n• explain the effect each text has on you as a reader\n• compare the writers' ideas, and the ways each of them gets those ideas across\n• quote from both texts to back up your points.`,
            marks: 18,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: `Text 1:\n${EXTRACT_10_A}\n\nText 2:\n${EXTRACT_10_B}`,
            extractSource: `Text 1: ${EXTRACT_10_A_REF} | Text 2: ${EXTRACT_10_B_REF}`,
            modelAnswers: {
              'Grade 8-9': `I agree that both writers see real harm in over-protection, but only the writer of Text 1 argues that the harm outweighs the good. Ruskin weighs his childhood more evenly, and his account is a reflection rather than an argument.\n\nThe writer of Text 1 builds a clear case. The first paragraph lists what adults monitor, "their screen time, their sugar intake, their friendship groups, their emotional vocabulary", and the examples of a twelve-year-old who "cannot climb a tree without a risk assessment" and a fourteen-year-old tracked by "a GPS signal confirming their location every thirty seconds" make modern parenting look absurd. The writer accepts that "The intention, of course, is love", but argues that "safety and growth are not always the same thing", and that removing risk may produce a generation "less resilient and more anxious than any that preceded it". The final paragraph turns this into a demand: "children need risk". The list of what they need, to "fall out of trees, lose arguments, get lost, and find their way back", is lively and convincing, and as a reader I find the closing idea, that "failure is survivable", reassuring. Yet the writer is careful too: the studies' authors note that "correlation is not causation", and "may be producing" is a cautious verb. So the claim is made firmly, but not as proven fact.\n\nRuskin, by contrast, does not set out to prove anything. He counts his "blessings" before his "calamities", and he calls the calamities "equally dominant", which suggests a balance rather than a verdict. The protection he describes certainly harmed him: he "had nothing to love" and "nothing to endure": "my strength was never exercised, my patience never tried, and my courage never fortified". When affection came, it came "with violence utterly rampant and unmanageable". But the same strict upbringing gave him an "extreme perfection in palate", and he insists that he did not grow up "selfish or unaffectionate". His tone is regretful rather than angry, and the bracketed grief for his parents, "(how much, now, when both are darkened!)", makes it impossible to read the passage as an attack on them.\n\nTheir methods differ accordingly. Text 1 uses "we" to include the reader among the anxious adults, piles up modern examples, and appeals to research. Ruskin writes in the first person about one childhood, using the structure of accounts ("count", "First", "second") and precise, sometimes comic, details such as the gardener who "would not let my ants' nests alone". Both, though, reach the same conclusion about what children miss: struggle. Text 1 says children need "to fail", and Ruskin regrets that "Danger or pain of any kind I knew not".\n\nOverall, the statement fits Text 1 well, and Text 2 only in part. Ruskin shows that protection harmed him, but he sets that harm beside real benefits and leaves the reader to judge, and that honesty makes his warning, in a way, more powerful than an argument would be.`,
            },
            markScheme: {
              'AO4, evaluation (12 marks)': [
                ...MARK_LEVELS_AO4,
                'In this paper: Text 1 argues firmly that children "need risk", though it calls its evidence a correlation; Text 2 sets "blessings" beside "equally dominant calamities" and blames no one. Credit a verdict that differs between the texts.',
              ],
              'AO3, comparison (6 marks)': [
                ...MARK_LEVELS_AO3,
                'Methods to compare: "we" and modern examples against one man\'s memories; an argument against a reflection set out as accounts; research in Text 1 against comic, exact detail in Text 2; the same conclusion about struggle in both.',
              ],
              Marking: ['The two grids are marked separately and the marks added, out of 18.'],
            },
          },
        ],
      },
      {
        id: 'ocr-p1-10-writing',
        title: 'Section B: Writing',
        description:
          'Answer ONE question: Question 5 or Question 6. You are advised to spend about one hour on this section, including time to plan and to check your work.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-10-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText: `Answer ONE of the following questions.\n\nQuestion 5\n"Young people today are not given enough freedom."\nWrite an article for a newspaper in which you argue for or against this statement.\nIn your article you could:\n• compare the freedom young people have now with the past\n• explain what freedom gives young people\n• suggest how adults could get the balance right.\n\nOR\n\nQuestion 6\nWrite a letter to your younger self, aged ten, giving advice about the challenges and risks that lie ahead.\nIn your letter you could:\n• describe some of the challenges you have faced\n• explain what you learned from them\n• give advice for the years to come.\n\nIn your answer you will be assessed on content and organisation (24 marks) and on technical accuracy (16 marks).`,
            marks: 40,
            suggestedTimeMinutes: 60,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Question 5, an article for the statement.\n\nLet us out\n\nWhen my grandmother was eleven, she caught two buses across the city on her own to visit her cousins every Saturday. When my mother was eleven, she cycled to the park with her friends and came home when the street lights came on. When I was eleven, I was not allowed to walk to the corner shop without sending a message when I arrived. I am not complaining about my parents, who love me. I am asking whether, as a society, we have gone too far.\n\nThe case for more freedom starts with a simple fact: people learn by doing. Nobody learns to cross a road safely by being held by the hand until they are fourteen. Nobody learns to manage money by never being trusted with any. Every time an adult solves a problem for a young person, the young person loses a chance to practise solving it. Small risks, taken early, are how we prepare for the large ones that come later, when no one will be there to help.\n\nThere is also the question of happiness. Some of my best memories are of the rare afternoons when my friends and I were left to ourselves: building a den in the woods behind our estate, getting lost on the way home and finding the way back. Those afternoons made us feel capable. A childhood spent indoors, supervised and scheduled, may be safe, but it can also be anxious and dull.\n\nOf course, the world has real dangers, and I understand why parents worry. Roads are busier than they were. The internet has brought risks that my grandmother never faced. Freedom does not mean abandoning children to these dangers. It means preparing them for them. A child who has been taught to read a map, use a bus timetable and say no to a stranger is safer on her own than a child who has never been allowed out at all.\n\nWhat would more freedom look like? It could mean letting eleven-year-olds walk to school with friends instead of being driven. It could mean parks with adventure playgrounds rather than padded surfaces and warning signs. It could mean parents agreeing a time to be home, then trusting their children to keep it, instead of tracking them minute by minute.\n\nWe will make mistakes. We will scrape our knees, miss buses and get things wrong. But that is exactly the point. The adults who are trying so hard to protect us will not always be there. The best gift they can give us is the confidence to manage without them.`,
            },
            markScheme: {
              'AO5, content and organisation (24 marks)': MARK_LEVELS_AO5,
              'AO6, technical accuracy (16 marks)': MARK_LEVELS_AO6,
              'For these tasks': [
                MARK_WRITING_NOTE,
                'Question 5 is a newspaper article: a headline, a clear position, concessions answered, and an ending that lands.',
                'Question 6 is a personal letter: set out and addressed as a letter, a reflective but warm voice, with advice drawn from experience.',
              ],
            },
          },
        ],
      },
    ],
  },
]
