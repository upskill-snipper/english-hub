// @ts-nocheck

/**
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

The Health and Safety Executive estimates that 17.1 million working days were lost to work-related stress, depression, and anxiety in 2022/23. Nearly half of all workers aged 25-34 reported feeling "emotionally exhausted" by their jobs. The language of modern employment is revealing: we speak of "burnout" as though human beings were machines that had overheated, of "quiet quitting" as though setting boundaries were a form of sabotage.

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

// ─── Exam Papers ─────────────────────────────────────────────────────────────

export const ocrP1B: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 06 - Work & Employment
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
        description: `Read the two source texts carefully. Then answer all the questions in this section.\n\nSource A: ${EXTRACT_06_A_REF}\nSource B: ${EXTRACT_06_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-06-q1',
            questionNumber: 1,
            questionText:
              'Read Source A. Identify four problems the writer associates with the modern workplace.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: EXTRACT_06_A,
            extractSource: EXTRACT_06_A_REF,
            modelAnswers: {
              'Grade 4-5':
                '1. An estimated 17.1 million working days were lost to work-related stress, depression, and anxiety in 2022/23. 2. Nearly half of workers aged 25-34 reported feeling "emotionally exhausted" by their jobs. 3. Jobs can provide neither financial security nor personal meaning. 4. What is called "flexibility" means the company can change your hours but you cannot change them.',
            },
            markScheme: ['1 mark per valid point identified from the text, maximum 4'],
          },
          {
            id: 'ocr-p1-06-q2',
            questionNumber: 2,
            questionText:
              "Read Source B. Explain how the writer conveys Robert Blincoe's experience of his first day at the mill. Use evidence from the text to support your answer.",
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: EXTRACT_06_B,
            extractSource: EXTRACT_06_B_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer shows that the mill overwhelmed Blincoe from the moment he arrived. Even before he went in he "heard the burring sound" and "smelt the fumes of the oil", and once inside "the noise appalled him, and the stench seemed intolerable". The number "twenty thousand wheels and spindles" makes the machinery seem enormous next to a small child. His first job sounds simple - "Apparently, nothing could be easier" - but the word "Apparently" warns the reader that it was not: he was "much terrified by the whirling motion and noise of the machinery", "half suffocated" by the dust, felt sick, and "his back ached". When he sat down he was told "he must keep on his legs", and he worked "six hours and a half, without the least intermission". The way the fresh air at dinner time "revived him instantaneously" shows how bad the air inside had been.',
              'Grade 6-7':
                'Blincoe\'s first day reaches the reader at one remove: John Brown tells it in the third person from Blincoe\'s own memories ("He did not recollect", "Blincoe does not remember"), which lets the account move between a child\'s senses and an adult\'s judgement. The arrival is built through the senses in the order the child met them - sound, then smell, then the shock inside the doors - and the huge number "twenty thousand wheels and spindles" dwarfs him before he has begun. It is humiliating as well as frightening: the new children were "looked at, and laughed at", like goods being sorted. Irony does much of the work. "Apparently, nothing could be easier" gives the task as the adults saw it, and the rest of the sentence takes that back; "took the liberty to sit down" borrows the language of good manners to show that a child resting was treated as an offence, and the flat statement that sitting "was strictly forbidden in cotton mills" shows the rule was general, not one overseer\'s cruelty. Exact time ("till twelve o\'clock, being six hours and a half") turns endurance into a record, and "suffered at once by thirst and hunger" piles one need on another. The run of exclamations as the children leave for dinner, and the image of the unhappy ones who "seemed to mingle their tears", let the writer\'s feeling show. The closing comparison is the bitterest point of all: the food was "below the standard of the ordinary fare of the workhouse", so even the workhouse had fed him better.',
            },
            markScheme: [
              'Explains how experience is conveyed through language and detail',
              'Uses evidence from the text',
              'Analyses specific techniques and their effects',
              'Top band: perceptive, detailed analysis with well-integrated evidence',
            ],
          },
          {
            id: 'ocr-p1-06-q3',
            questionNumber: 3,
            questionText:
              'Read Source A. How does the writer use language and structure to argue that something has gone wrong with modern work?\n\nAnalyse the techniques used and their effects on the reader.',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: EXTRACT_06_A,
            extractSource: EXTRACT_06_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses a contrast structure to make the argument. The article begins by listing positive things about modern work - "safer, cleaner, and more comfortable" - before using "And yet" to introduce the problems. This makes the reader see that despite improvements, something is still wrong. The writer uses statistics ("17.1 million working days") as evidence, and picks out the word "burnout" to show that we talk about people as though they "were machines that had overheated". In the final paragraph three clauses beginning with "when" pile up the complaints one after another, which builds a sense of frustration.',
              'Grade 6-7':
                'The writer constructs the argument through a rhetorical reversal. The opening paragraph sets out a deliberately complacent inventory of progress - the tricolon "safer, cleaner, and more comfortable" - before the pivotal "And yet" demolishes the reassurance. Concession followed by demolition is the article\'s habit: the workplace has "ergonomic chairs" and "entire departments devoted to our wellbeing", yet produces widespread psychological harm, and the final paragraph concedes "though many of us do" work too hard before insisting that overwork is not the real problem. The treatment of workplace vocabulary is particularly effective: "burnout" and "quiet quitting" are examined as symptoms of a system that has gone wrong, and the comparison that explains the first, speaking of people "as though human beings were machines that had overheated", exposes how the language of work dehumanises. The three "when" clauses of the final paragraph create a rhythmic accumulation of grievances, and the sentence they open ends with the metaphor of the employment contract as "a confidence trick", which reframes the relationship between employer and employee as a fraud.',
            },
            markScheme: [
              'Analyses language techniques and their effects',
              'Analyses structural choices and their effects',
              'Uses subject terminology accurately',
              "Comments on the writer's methods and their impact on the reader",
              'Top band: perceptive, conceptualised analysis with judicious references',
            ],
          },
          {
            id: 'ocr-p1-06-q4',
            questionNumber: 4,
            questionText:
              'Read Source A and Source B. Compare how the two writers convey their different perspectives on work.\n\nIn your answer you should:\n• compare their different perspectives on work\n• compare the methods they use to convey those perspectives\n• use evidence from both texts to support your answer.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: EXTRACT_06_A + '\n\n---\n\n' + EXTRACT_06_B,
            extractSource: EXTRACT_06_A_REF + ' / ' + EXTRACT_06_B_REF,
            modelAnswers: {
              'Grade 4-5':
                'Both writers show that work can harm people, but in very different ways. The modern writer argues that today\'s workplace is "safer, cleaner, and more comfortable" than ever but leaves people stressed and without a sense of purpose, while Source B shows a child\'s work in a cotton mill that hurt his body from the first hour. The modern writer uses statistics ("17.1 million working days were lost") and argument, while Brown tells a story full of physical detail: the noise that "appalled him", the dust that left him "half suffocated" and the back that "ached". The modern writer complains that a job can demand "total availability", and Blincoe was not even allowed to sit down: "he must keep on his legs". Both texts show workers at the mercy of rules they did not make, even though working conditions have changed completely.',
              'Grade 6-7':
                'The two texts present a striking inversion. Source B records work that attacked the body of a child - noise, stench, dust, thirst and hunger - while Source A describes work that is "safer, cleaner, and more comfortable" than ever and yet exhausts the mind. The modern writer even measures progress against the industrial past ("We do not send children into mines"), and Brown\'s account shows what that progress left behind: a child who, after "six hours and a half, without the least intermission", was "sick almost to fainting". Their methods differ as much as their subjects. The article argues in the present tense from evidence and diagnosis, using a national figure and the vocabulary of modern work ("burnout", "quiet quitting") to generalise; Brown narrates one child\'s morning in the past tense, and his authority comes from detail remembered by the person who lived it. Both writers use irony to expose what employers treat as normal. The article puts "flexibility" in inverted commas to show a word that has come to mean its opposite; Brown\'s "took the liberty to sit down" treats a tired child\'s rest as a breach of manners, and "Apparently, nothing could be easier" gives the task as the adults saw it. Both end on a judgement of worth: the article decides the employment contract has become "a confidence trick", and Source B leaves Blincoe eating food "below the standard of the ordinary fare of the workhouse". Where the modern worker has lost "any coherent sense of what work is for", nobody asked the child what his work was for at all.',
            },
            markScheme: [
              'Compares perspectives on the subject with clear understanding',
              'Compares methods used by both writers',
              'Uses evidence from both texts',
              'Analyses the effects of specific techniques',
              'Top band: perceptive, sustained comparison with well-selected evidence',
            ],
          },
        ],
      },
      {
        id: 'ocr-p1-06-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 45 minutes on this section, including planning time.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'ocr-p1-06-q5',
            questionNumber: 5,
            questionText:
              '"Young people today are lazy and expect everything to be handed to them."\n\nWrite an article for a broadsheet newspaper in which you argue for or against this view.\n\n(32 marks for content and organisation / 8 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear article with a sustained argument that challenges or supports the statement. Uses some persuasive techniques (rhetorical questions, direct address) and appropriate register for a broadsheet newspaper. Generally accurate spelling and punctuation with some variety of sentence forms.',
              'Grade 6-7':
                'A well-crafted article with a compelling, nuanced argument. Sophisticated use of rhetorical devices, counter-argument, and evidence. Appropriate broadsheet register maintained throughout. Consistent technical accuracy with ambitious vocabulary and varied sentence structures.',
              'Grade 8-9':
                'An outstanding article with a distinctive, authoritative voice. Compelling argument that engages with the complexity of the issue. Structural sophistication - perhaps subverting or interrogating the premise of the quotation. Ambitious vocabulary deployed with precision. Technical accuracy throughout.',
            },
            markScheme: [
              'Content & Organisation (32 marks): Clear viewpoint, persuasive techniques, appropriate form and register, coherent structure',
              'Technical Accuracy (8 marks): Sentence demarcation, spelling, punctuation, vocabulary range',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 07 - Travel
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
        description: `Read the two source texts carefully. Then answer all the questions in this section.\n\nSource A: ${EXTRACT_07_A_REF}\nSource B: ${EXTRACT_07_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-07-q1',
            questionNumber: 1,
            questionText:
              'Read Source A. Identify four things the writer found disappointing about Venice.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: EXTRACT_07_A,
            extractSource: EXTRACT_07_A_REF,
            modelAnswers: {
              'Grade 4-5':
                "1. The acqua alta barriers were being tested with loud mechanical noise. 2. Enormous cruise ships filled the streets with thousands of day-trippers. 3. The gondoliers looked exhausted and hostile. 4. A coffee in St Mark's Square cost fourteen euros.",
            },
            markScheme: ['1 mark per valid point identified from the text, maximum 4'],
          },
          {
            id: 'ocr-p1-07-q2',
            questionNumber: 2,
            questionText:
              'Read Source B. Explain how Amelia Edwards conveys her reactions to the pyramids. Use evidence from the text to support your answer.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: EXTRACT_07_B,
            extractSource: EXTRACT_07_B_REF,
            modelAnswers: {
              'Grade 4-5':
                'Edwards shows that the reaction changes as the traveller gets closer. From the railway carriage, the first view most travellers get, the pyramids "look small and shadowy" and are "too familiar to be in any way startling", so at first they are not impressive. Close to the great pyramid the effect is "as sudden as it is overwhelming", and she repeats "It shuts out" three times to show how it fills the whole view until nothing is left "but the sense of awe and wonder". She admits that "the clearest photographs" had done "little or nothing" to prepare her, and she is surprised by details: two of the pyramids "are bigger than we had expected", and there are "nine pyramids, instead of three". Calling the extra ones "intruders", and one of them "little more than a big cairn", shows a lively, honest and slightly humorous reaction.',
              'Grade 6-7':
                'Edwards structures her account as a movement from anticlimax to revelation and then to correction. She begins by lowering expectations: seen from a distance, the pyramids do not take "one\'s breath away" as the Alps or the Acropolis do, because they are "too familiar to be in any way startling". The impersonal "one" makes the reaction a general truth about travellers rather than a private whim. The approach is then built as a single long sentence of clauses joined by "and" - the desert reached, "the long sand-slope climbed", the platform gained - so that the reader climbs with her until the pyramid "towers close above one\'s head". The triple repetition "It shuts out the sky and the horizon. It shuts out all the other pyramids. It shuts out everything but the sense of awe and wonder" narrows the world, sentence by sentence, to a single feeling. The final paragraph is quieter and more analytical: "plans and measurements, the clearest photographs, the most elaborate descriptions" had done "little or nothing", and the ground "pitted with open graves" is "wholly unlike the desert of our dreams". Her precision ("bigger than we had expected", "smaller", "nine pyramids, instead of three") and her wry treatment of the extra pyramids as "intruders" show a traveller testing the picture she brought with her against what is actually there.',
            },
            markScheme: [
              'Explains how reactions are conveyed through language and detail',
              'Uses evidence from the text',
              'Analyses specific techniques and their effects',
              'Top band: perceptive, detailed analysis with well-integrated evidence',
            ],
          },
          {
            id: 'ocr-p1-07-q3',
            questionNumber: 3,
            questionText:
              'Read Source A. How does the writer use language and structure to convey complex feelings about modern travel?\n\nAnalyse the techniques used and their effects on the reader.',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: EXTRACT_07_A,
            extractSource: EXTRACT_07_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer structures the text in three parts: expectation, disappointment, and a brief moment of beauty. The second person "you" involves the reader directly. The list of preparations - "seen the photographs, read the guidebooks, watched the documentaries" - shows how much effort goes into imagining a place. The short sentence "Then you arrive" creates a dramatic turning point. The description of the quiet canal with the cat creates a contrast with the busy tourist scenes. The final sentence - "Then a water taxi roared past and the moment was gone" - shows beauty is fleeting.',
              'Grade 6-7':
                'The writer structures the article as a triptych: anticipation, disillusion, and qualified redemption. The opening paragraph\'s second-person address ("You have seen... You have constructed") implicates the reader in the very delusion being critiqued, while the tricolon of preparation activities creates a rhythm of accumulating expectation. The pivotal "Then you arrive" - a brutally short sentence after the elaborate build-up - performs syntactically what it describes thematically: the collapse of fantasy into reality. The Venice description deploys bathos masterfully: "drowning - not romantically... but literally and bureaucratically" deflates centuries of poetic association. The "And yet" paragraph reverses the reversal, its catalogue of sensory specifics (the "perfectly still and green" water, the cat\'s "imperial disinterest") offering an alternative Venice accessible only through patience and solitude. The time-stamping - "perhaps ninety seconds" - is structurally crucial: genuine experience is measured in moments, not itineraries. The final sentence\'s water taxi is both literal and symbolic, modernity destroying the very beauty that tourism seeks.',
            },
            markScheme: [
              'Analyses language techniques and their effects',
              'Analyses structural choices and their effects',
              'Uses subject terminology accurately',
              "Comments on the writer's methods and their impact on the reader",
              'Top band: perceptive, conceptualised analysis with judicious references',
            ],
          },
          {
            id: 'ocr-p1-07-q4',
            questionNumber: 4,
            questionText:
              'Read Source A and Source B. Compare how the two writers convey their different experiences and attitudes towards travel.\n\nIn your answer you should:\n• compare their different attitudes to travel\n• compare the methods they use to convey those attitudes\n• use evidence from both texts to support your answer.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: EXTRACT_07_A + '\n\n---\n\n' + EXTRACT_07_B,
            extractSource: EXTRACT_07_A_REF + ' / ' + EXTRACT_07_B_REF,
            modelAnswers: {
              'Grade 4-5':
                'Both writers describe arriving at a famous place they had seen in pictures, and both find it different from what they imagined. The modern writer is disappointed: Venice is crowded by "Cruise ships the size of apartment blocks", and a coffee costs "fourteen euros". Edwards is not impressed at first, because from a distance the pyramids "look small and shadowy", but close up she is overwhelmed and feels "awe and wonder". Both mention photographs: the modern writer says "You have seen the photographs", and Edwards says "the clearest photographs" did not prepare her. The modern writer uses "you" to involve the reader and short, blunt sentences like "Then you arrive", while Edwards uses long, carefully built sentences and repetition. The modern writer\'s moment of beauty lasts "perhaps ninety seconds", while Edwards\'s sense of wonder is the high point of her account.',
              'Grade 6-7':
                'Both texts are about the gap between the place imagined and the place found, but they move in opposite directions. The modern writer arrives with a Venice "luminous, uncrowded, and entirely your own" and finds it "drowning"; Edwards arrives expecting little, because the pyramids are "too familiar to be in any way startling", and is overwhelmed. Both blame second-hand images for the gap. The article\'s tricolon "seen the photographs, read the guidebooks, watched the documentaries" is closely matched by Edwards\'s "plans and measurements, the clearest photographs, the most elaborate descriptions": writing well over a century apart, both conclude that no amount of looking at pictures prepares you for being there. Their methods differ. The modern writer\'s second-person address ("You have constructed") makes the reader share the illusion, and the humour deflates it: "fourteen euros", gondoliers "faintly hostile". Edwards writes in the impersonal "one", in long sentences that build towards their subject, and her repetition of "It shuts out" makes the pyramid fill the page as it filled her view. Each text has a moment of real encounter, but the modern writer\'s quiet canal lasts "perhaps ninety seconds" before a water taxi destroys it, while in Edwards\'s account nothing from outside breaks in, and her awe gives way to careful observation. The difference lies partly in what surrounds them: the modern writer\'s Venice is crowded by tourism, while the only intruders Edwards meets are "six extra pyramids".',
            },
            markScheme: [
              'Compares attitudes to travel with clear understanding',
              'Compares methods used by both writers',
              'Uses evidence from both texts',
              'Analyses the effects of specific techniques',
              'Top band: perceptive, sustained comparison with well-selected evidence',
            ],
          },
        ],
      },
      {
        id: 'ocr-p1-07-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 45 minutes on this section, including planning time.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'ocr-p1-07-q5',
            questionNumber: 5,
            questionText:
              '"Travel broadens the mind - but only if you leave the tourist trail."\n\nWrite an article for a travel magazine in which you argue for or against this view.\n\n(32 marks for content and organisation / 8 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear article with a sustained argument about the value or limitations of modern travel. Uses persuasive techniques and appropriate register for a travel magazine. Generally accurate spelling and punctuation.',
              'Grade 6-7':
                'A well-crafted article with a nuanced argument that engages with the complexity of modern tourism. Sophisticated rhetorical devices and well-chosen examples. Consistent technical accuracy with varied sentence structures.',
              'Grade 8-9':
                'An outstanding article with a distinctive voice and compelling argument. Structural sophistication - perhaps using personal anecdote alongside broader cultural analysis. Ambitious vocabulary and flawless technical accuracy.',
            },
            markScheme: [
              'Content & Organisation (32 marks): Clear viewpoint, persuasive techniques, appropriate form and register, coherent structure',
              'Technical Accuracy (8 marks): Sentence demarcation, spelling, punctuation, vocabulary range',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 08 - Food & Diet
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
        description: `Read the two source texts carefully. Then answer all the questions in this section.\n\nSource A: ${EXTRACT_08_A_REF}\nSource B: ${EXTRACT_08_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-08-q1',
            questionNumber: 1,
            questionText:
              'Read Source A. Identify four concerns the writer raises about modern attitudes to food.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: EXTRACT_08_A,
            extractSource: EXTRACT_08_A_REF,
            modelAnswers: {
              'Grade 4-5':
                '1. Food has become a moral battlefield and source of anxiety. 2. Choosing something as simple as an egg involves navigating many ethical questions. 3. The moralisation of food choices has made eating a source of guilt. 4. The people who care most about food often enjoy it least.',
            },
            markScheme: ['1 mark per valid point identified from the text, maximum 4'],
          },
          {
            id: 'ocr-p1-08-q2',
            questionNumber: 2,
            questionText:
              "Read Source B. Robert Southey wrote these letters in the character of a Spanish visitor to England. Explain how he conveys the visitor's attitude towards English food and meals. Use evidence from the text to support your answer.",
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: EXTRACT_08_B,
            extractSource: EXTRACT_08_B_REF,
            modelAnswers: {
              'Grade 4-5':
                'The visitor has mixed feelings about English meals, and Southey shows this through strong opinions and comparisons with Spain. He likes the look of breakfast - "The breakfast-table is a cheerful sight" - but is scornful of the coffee: "nothing is so detestable as an Englishman\'s coffee", and he jokes that the water used to wash "our after-dinner cups" at home "would make a mixture as good". He praises the tea, which makes "a very delightful beverage". At dinner he is amazed by how much the English eat: "The quantity of meat which they consume is astonishing". He exaggerates that one English dinner would feed the same number of people in Spain "for a week", and complains that meat and vegetables come "in the same crude and insipid state". Comparing everything with Spain makes English habits seem strange and funny.',
              'Grade 6-7':
                'Southey\'s visitor is an invented persona, and his attitude to English food is built from confident judgements, each measured against home. He opens by correcting other writers - the English do not eat beef-steaks for breakfast, "as lying travellers have told us" - which makes him seem a careful and fair witness, so that his later verdicts carry weight. The breakfast-table is described with admiration, the water in the urn that "smokes and sings" given a cheerful life of its own, before the sudden, sweeping verdict "nothing is so detestable as an Englishman\'s coffee". The joke that follows compares it with the water from "our after-dinner cups" and quietly asserts Spanish superiority, and the English excuse, that proper coffee "would prevent them from sleeping", follows the flat judgement "they know no better" and is left to condemn itself. Praise is given as carefully as blame: the English "make amends" with their tea, and the butter they eat with their bread is "the best thing in the country". At dinner the tone rises to astonishment, with hyperbole in the claim that one English dinner would feed as many in Spain "for a week, even if no fast-days intervened", a reminder that the visitor comes from a Catholic country where fasting is part of the year. The phrase "crude and insipid" condemns English cooking in two adjectives, and the short sentence "Beer is the common drink" marks a difference of custom without comment. The extract ends in approval of the hour after supper, "the pleasantest in the day", so the attitude that emerges is amused, critical and fair rather than simply hostile.',
            },
            markScheme: [
              'Explains how attitude is conveyed through language and tone',
              'Uses evidence from the text',
              'Analyses specific techniques and their effects',
              'Top band: perceptive, detailed analysis with well-integrated evidence',
            ],
          },
          {
            id: 'ocr-p1-08-q3',
            questionNumber: 3,
            questionText:
              'Read Source A. How does the writer use language and structure to argue that modern attitudes to food have become problematic?\n\nAnalyse the techniques used and their effects on the reader.',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: EXTRACT_08_A,
            extractSource: EXTRACT_08_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses a contrast between the simplicity of eating in the past ("you were hungry, you ate") and the complexity of food choices today. The supermarket is called a "cathedral of modern abundance" which is a metaphor showing how shopping has become almost religious. The series of questions about the egg ("Free-range or organic? Barn-reared or pasture-raised?") creates a breathless, overwhelming effect. The humour of "Have the hens been spoken to kindly?" exaggerates to make a point. The final paragraph uses a concessive structure - acknowledging real problems before arguing that moralising has gone too far.',
              'Grade 6-7':
                'The writer structures the argument through escalating absurdity, beginning with a deliberately reductive summary of eating - "you were hungry, you ate, you stopped being hungry" - whose three short, plain clauses contrast jarringly with the crowded, anxious questions that follow. The supermarket paragraph is the rhetorical centrepiece: the metaphor "cathedral of modern abundance" sacralises the mundane, while the cascading interrogatives about eggs create a syntactic enactment of decision paralysis. The questions accelerate from the reasonable ("Free-range or organic?") to the satirical ("Have the hens been spoken to kindly?"), and the punchline - "you have lost the will to make an omelette" - bathetically deflates the entire moral edifice. The final paragraph\'s concessive opening ("I am not making light") is strategically positioned: by acknowledging genuine ethical concerns, the writer guards against the accusation of flippancy before delivering the central point. The concluding paradox - "The people I know who care most about food are often the people who enjoy it least" - is devastating precisely because it cannot be easily dismissed.',
            },
            markScheme: [
              'Analyses language techniques and their effects',
              'Analyses structural choices and their effects',
              'Uses subject terminology accurately',
              "Comments on the writer's methods and their impact on the reader",
              'Top band: perceptive, conceptualised analysis with judicious references',
            ],
          },
          {
            id: 'ocr-p1-08-q4',
            questionNumber: 4,
            questionText:
              'Read Source A and Source B. Compare how the two writers convey their different perspectives on food and eating.\n\nIn your answer you should:\n• compare their different perspectives on food\n• compare the methods they use to convey those perspectives\n• use evidence from both texts to support your answer.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: EXTRACT_08_A + '\n\n---\n\n' + EXTRACT_08_B,
            extractSource: EXTRACT_08_A_REF + ' / ' + EXTRACT_08_B_REF,
            modelAnswers: {
              'Grade 4-5':
                'Both writers look at food with humour, but from different angles. The modern writer worries that people now think too much about food, turning it into "a moral battlefield", while Southey\'s Spanish visitor comments on English meals from the outside, sometimes approving and sometimes appalled. Both make their points through comparison or questioning: the modern writer piles up questions about eggs, while the visitor compares English customs with Spain, saying one English dinner would feed the same number there "for a week". Both use exaggeration for comic effect: "Have the hens been spoken to kindly?" and "nothing is so detestable as an Englishman\'s coffee". The modern writer is anxious about choice, while the visitor is amazed by quantity: "The quantity of meat which they consume is astonishing".',
              'Grade 6-7':
                'Both texts look at how a society eats, but from opposite positions. The modern writer writes from inside a culture of plenty and argues that it has turned eating into "a source of guilt and paralysis"; Southey\'s visitor writes from outside English culture and judges its meals by the standards of home. The article\'s problem is too much thought about food, and the visitor\'s complaint is too little care in cooking it ("crude and insipid"), yet both notice excess: the "cathedral of modern abundance" has its counterpart in an English dinner that would feed as many Spaniards "for a week". Their humour works differently. The article escalates, from sensible questions ("Free-range or organic?") to absurd ones ("Have the hens been spoken to kindly?") until "you have lost the will to make an omelette"; the visitor\'s humour is dry and comparative, as when English coffee is no better than the water from "our after-dinner cups", or when the English explain that strong coffee "would prevent them from sleeping". Both writers also concede before they criticise, or balance blame with praise. The article states "I am not making light of genuine ethical concerns" before its main point, and the visitor sets his scorn for the coffee against real praise for "the excellence of their tea". The most telling difference is in pleasure: the modern writer ends by observing that those who care most about food "enjoy it least", while the visitor, for all his complaints, finds the hour after supper "the pleasantest in the day".',
            },
            markScheme: [
              'Compares perspectives on food with clear understanding',
              'Compares methods used by both writers',
              'Uses evidence from both texts',
              'Analyses the effects of specific techniques',
              'Top band: perceptive, sustained comparison with well-selected evidence',
            ],
          },
        ],
      },
      {
        id: 'ocr-p1-08-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 45 minutes on this section, including planning time.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'ocr-p1-08-q5',
            questionNumber: 5,
            questionText:
              '"Schools should be responsible for teaching children how to cook and eat healthily."\n\nWrite a speech to be delivered at a school governors\' meeting in which you argue for or against this proposal.\n\n(32 marks for content and organisation / 8 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear speech with a sustained argument about schools and food education. Uses persuasive techniques appropriate to the audience (school governors) and form (speech). Generally accurate spelling and punctuation.',
              'Grade 6-7':
                'A well-crafted speech with a compelling argument that addresses practical and philosophical dimensions. Sophisticated rhetorical devices including direct address, anecdote, and counter-argument. Consistent technical accuracy throughout.',
              'Grade 8-9':
                'An outstanding speech with a distinctive, authoritative voice. Engages with the complexity of the issue - perhaps questioning the assumptions behind the statement. Structural sophistication with a memorable conclusion. Flawless technical accuracy.',
            },
            markScheme: [
              'Content & Organisation (32 marks): Clear viewpoint, persuasive techniques, appropriate form and register, coherent structure',
              'Technical Accuracy (8 marks): Sentence demarcation, spelling, punctuation, vocabulary range',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 09 - Fashion
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
        description: `Read the two source texts carefully. Then answer all the questions in this section.\n\nSource A: ${EXTRACT_09_A_REF}\nSource B: ${EXTRACT_09_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-09-q1',
            questionNumber: 1,
            questionText:
              'Read Source A. Identify four facts or statistics the writer uses about the fashion industry.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: EXTRACT_09_A,
            extractSource: EXTRACT_09_A_REF,
            modelAnswers: {
              'Grade 4-5':
                '1. The global fashion industry produces approximately 100 billion garments per year. 2. This is roughly thirteen garments for every person on the planet. 3. The average British consumer buys 26.7 kilograms of clothing annually. 4. A garment bought for £4.99 will be worn on average seven times before being discarded.',
            },
            markScheme: ['1 mark per valid fact or statistic identified from the text, maximum 4'],
          },
          {
            id: 'ocr-p1-09-q2',
            questionNumber: 2,
            questionText:
              'Read Source B. Explain how the writer conveys views on fashion and dress. Use evidence from the text to support your answer.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: EXTRACT_09_B,
            extractSource: EXTRACT_09_B_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer presents fashion as a powerful ruler that everyone obeys. "Fashion prescribes rules for all", and "All classes of society bow" to her decrees, from "The fine lady who frequents the Court" to "the servant-girl". The long list of what fashion controls, beginning with "the size and shape of bonnets, the make of gowns", shows how far its power reaches, and the writer is critical of long skirts that "trail along in all the dirt and dust" of the streets. However, the writer does not simply reject fashion. In the final paragraph the best-dressed people are neither those "led blindfold by the prevailing fashion" nor those who "defy it": the rebel "will provoke a smile", while the woman who "follows fashion like a slave" becomes "an advertisement for the milliner she employs". The writer\'s view is that dressing well needs judgement about age, figure, station and means.',
              'Grade 6-7':
                'The writer builds the argument on a sustained personification of Fashion as a female lawgiver. The language is legal and political throughout: Fashion "prescribes", issues "decrees", subjects every detail of dress to "legislation", and is compared to an "act of uniformity", an allusion to the laws that once required the whole country to worship in one way. The short opening sentence, "Fashion prescribes rules for all", states the rule as bluntly as a statute, and the next sentences prove its reach across society, from "The fine lady who frequents the Court" to "the servant-girl who sweeps out the area of a London lodging-house". The long list of what Fashion governs, down to the "colour of gloves" and the "dye of hair", enacts the minuteness it describes. Yet the view is not simply hostile, since Fashion also "defines the boundaries within which ladies may safely indulge their own conceits": it protects as well as restrains. The final paragraph is built on antithesis. The writer rejects both extremes, those "led blindfold by the prevailing fashion" and those "strong-minded enough to defy it", and gives each a portrait: the rebel, in one long, breathless sentence of odd choices, "looks like a whipping post" and will only "provoke a smile"; the slave of fashion considers neither "her age, nor her figure, nor her station, nor her means" and becomes "an advertisement for the milliner she employs". The sting is that both end looking odd, since the slave of fashion will also "appear eccentric, and generally ill-dressed". Good dress, by implication, is a matter of independent judgement within the rules.',
            },
            markScheme: [
              'Explains how views are conveyed through language and argument',
              'Uses evidence from the text',
              'Analyses specific techniques and their effects',
              'Top band: perceptive, detailed analysis with well-integrated evidence',
            ],
          },
          {
            id: 'ocr-p1-09-q3',
            questionNumber: 3,
            questionText:
              "Read Source A. How does the writer use language and structure to argue that the fashion industry's claims of change are not genuine?\n\nAnalyse the techniques used and their effects on the reader.",
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: EXTRACT_09_A,
            extractSource: EXTRACT_09_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer structures the text in three paragraphs that move from the industry\'s claims to the reality behind them. The first paragraph repeats the industry\'s own words - "sustainable", "inclusive", "conscious" - and the only word the writer puts in inverted commas, "journey", suggests the chief executives\' language is not to be trusted. The pivotal "And yet" introduces damning statistics. The contrast between a £4.99 garment worn seven times and spending "two hundred years in a landfill" is shocking. The final paragraph argues the problem is the whole system, not individual shoppers, using the powerful image of a T-shirt that costs "less than a sandwich".',
              'Grade 6-7':
                'The writer constructs the argument through a three-stage rhetorical demolition. The first paragraph ventriloquises the fashion industry\'s language of transformation - "sustainable", "inclusive", "conscious" - in three short sentences with no comment, which allows the reader to sense the hollowness of the words before the writer states it; the inverted commas round "journey" are the one open sign of scepticism. The pivotal "And yet", a two-word sentence that turns the whole article, introduces the statistical counter-evidence, and the escalation from global scale ("100 billion garments") to individual behaviour ("seven times before being discarded") to environmental consequence ("two hundred years in a landfill") creates a causal chain the reader cannot escape. The most effective technique is the final paragraph\'s reframing: the comparison of a T-shirt with a sandwich makes the abstract economic argument concrete. The tricolon of hidden costs - "polluted rivers, exhausted workers, and mountains of textile waste" - uses concrete nouns to make visible what the industry keeps out of sight. The closing words, "we can pretend it does not exist", include the reader in "we", completing the article\'s movement from criticism of the industry to the complicity of its customers.',
            },
            markScheme: [
              'Analyses language techniques and their effects',
              'Analyses structural choices and their effects',
              'Uses subject terminology accurately',
              "Comments on the writer's methods and their impact on the reader",
              'Top band: perceptive, conceptualised analysis with judicious references',
            ],
          },
          {
            id: 'ocr-p1-09-q4',
            questionNumber: 4,
            questionText:
              'Read Source A and Source B. Compare how the two writers convey their different perspectives on fashion and clothing.\n\nIn your answer you should:\n• compare their different perspectives on fashion\n• compare the methods they use to convey those perspectives\n• use evidence from both texts to support your answer.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: EXTRACT_09_A + '\n\n---\n\n' + EXTRACT_09_B,
            extractSource: EXTRACT_09_A_REF + ' / ' + EXTRACT_09_B_REF,
            modelAnswers: {
              'Grade 4-5':
                'Both writers are critical of fashion, but for different reasons. The modern writer focuses on the environmental and human cost of fast fashion, using statistics to expose the industry\'s dishonesty. The Victorian writer is concerned with how women dress and behave, and shows that everyone, from "The fine lady" to "the servant-girl", obeys Fashion\'s rules. Both writers show shoppers who do not see what they are doing: the modern writer says we "pretend it does not exist", and the Victorian writer describes women "led blindfold by the prevailing fashion". The modern writer uses facts such as "100 billion garments per year", while the Victorian writer uses personification, making Fashion a ruler whose "decrees" all must obey. Both suggest that the people who buy clothes need better judgement.',
              'Grade 6-7':
                'Both writers set themselves against the power of fashion, but their critiques work in different registers and centuries. The modern writer\'s argument is systemic and data-driven: the problem is an economic structure that hides its costs ("polluted rivers, exhausted workers"), and the "journey" the chief executives describe is not being made. The Victorian writer\'s argument is social and personal: Fashion is a lawgiver whose "decrees" reach from the Court to the lodging-house, and the answer lies in each woman\'s judgement of "her age", "her figure" and "her means". Yet both see a gap between appearance and reality. The modern writer sets the press releases\' "organic cotton" and "carbon-neutral supply chains" against 100 billion garments a year; the Victorian writer shows that slavish obedience to fashion produces the opposite of elegance, leaving a woman "generally ill-dressed". Both also show fashion overruling common sense: the Victorian skirts are "suffered to trail along in all the dirt and dust of pavement and crossings", and the modern garment is thrown away after being worn "seven times". Their methods are almost reversed. The modern writer builds from statistics to a moral charge that includes the reader ("we can pretend it does not exist"), while the Victorian writer begins with a principle ("Fashion prescribes rules for all") and illustrates it with portraits of two kinds of badly dressed woman. Both, finally, place responsibility on the wearer as well as on the trade: the modern consumer who could find out the truth "within thirty seconds", and the Victorian lady who lets herself become "an advertisement for the milliner she employs".',
            },
            markScheme: [
              'Compares perspectives on fashion with clear understanding',
              'Compares methods used by both writers',
              'Uses evidence from both texts',
              'Analyses the effects of specific techniques',
              'Top band: perceptive, sustained comparison with well-selected evidence',
            ],
          },
        ],
      },
      {
        id: 'ocr-p1-09-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 45 minutes on this section, including planning time.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'ocr-p1-09-q5',
            questionNumber: 5,
            questionText:
              '"Schools should introduce a uniform-free dress code to encourage students to express their individuality."\n\nWrite a letter to your headteacher in which you argue for or against this proposal.\n\n(32 marks for content and organisation / 8 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear letter with a sustained argument about school uniform policy. Uses appropriate formal register and persuasive techniques. Generally accurate spelling and punctuation with some variety of sentence forms.',
              'Grade 6-7':
                'A well-crafted letter with a compelling, balanced argument. Sophisticated use of rhetorical devices and counter-argument. Appropriate formal register maintained throughout with consistent technical accuracy.',
              'Grade 8-9':
                'An outstanding letter with a distinctive voice and compelling argument that engages with the underlying assumptions about individuality, conformity, and education. Structural sophistication and flawless technical accuracy.',
            },
            markScheme: [
              'Content & Organisation (32 marks): Clear viewpoint, persuasive techniques, appropriate form and register, coherent structure',
              'Technical Accuracy (8 marks): Sentence demarcation, spelling, punctuation, vocabulary range',
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
        description: `Read the two source texts carefully. Then answer all the questions in this section.\n\nSource A: ${EXTRACT_10_A_REF}\nSource B: ${EXTRACT_10_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-10-q1',
            questionNumber: 1,
            questionText:
              'Read Source A. Identify four ways the writer says modern parents monitor or restrict their children.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: EXTRACT_10_A,
            extractSource: EXTRACT_10_A_REF,
            modelAnswers: {
              'Grade 4-5':
                "1. They monitor children's screen time. 2. They track children's phones until they are eighteen. 3. A twelve-year-old cannot climb a tree without a risk assessment. 4. A fourteen-year-old cannot walk to the shops without GPS tracking every thirty seconds.",
            },
            markScheme: ['1 mark per valid point identified from the text, maximum 4'],
          },
          {
            id: 'ocr-p1-10-q2',
            questionNumber: 2,
            questionText:
              'Read Source B. Explain how John Ruskin conveys the nature of his childhood. Use evidence from the text to support your answer.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: EXTRACT_10_B,
            extractSource: EXTRACT_10_B_REF,
            modelAnswers: {
              'Grade 4-5':
                'Ruskin presents his childhood as comfortable but empty. He calls the good things "blessings", such as the "extreme perfection in palate" that came from "the utter prohibition of cake, wine, comfits", and then lists the "calamities". The first is blunt: "I had nothing to love." His parents were like "the sun and the moon" to him, always there but not loved. He had "no companions to quarrel with", and the servants were not allowed to do anything for him beyond their duty, so there was "nobody to assist, and nobody to thank". The second calamity is that he "had nothing to endure": his "courage never fortified" because he never faced danger. The detail that he tried hard to get leave to play with "the lion\'s cubs in Wombwell\'s menagerie" shows a boy who wanted adventure and was never given it.',
              'Grade 6-7':
                'Ruskin, looking back from middle age, sets out his childhood like an account book. Having counted the "blessings", he turns to "the equally dominant calamities", and the numbered structure ("First", "second of chief calamities") makes the analysis seem cool and exact, which gives the painful admissions more force. The first calamity is stated in one short sentence, "I had nothing to love", and then explained through a startling comparison: his parents were "visible powers of nature", "no more loved than the sun and the moon". The balanced phrases "nobody to assist, and nobody to thank" describe a life with no give and take in it, and the detail that the cook "dared not give me a baked potato without asking leave" shows how strictly his parents controlled everything he was given, so that the servants had no kindness of their own to offer him. He is candid about the result: when affection did come, it came "with violence utterly rampant and unmanageable". The second calamity is given in a tricolon of negatives: "my strength was never exercised, my patience never tried, and my courage never fortified". The irony of the passage is that the boy was not timid (he was never "afraid of anything") and longed for risk, as his "passionate effort" to play with the lion\'s cubs shows. The childhood Ruskin presents was so protected that it kept from him the experiences that build character.',
            },
            markScheme: [
              'Explains how the nature of childhood is conveyed through language and detail',
              'Uses evidence from the text',
              'Analyses specific techniques and their effects',
              'Top band: perceptive, detailed analysis with well-integrated evidence',
            ],
          },
          {
            id: 'ocr-p1-10-q3',
            questionNumber: 3,
            questionText:
              'Read Source A. How does the writer use language and structure to argue that modern childhood is too restrictive?\n\nAnalyse the techniques used and their effects on the reader.',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: EXTRACT_10_A,
            extractSource: EXTRACT_10_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses listing to show how many parts of children\'s lives are controlled: "their screen time, their sugar intake, their friendship groups, their emotional vocabulary". This accumulation feels overwhelming. The examples of the tree and the GPS tracking use exaggeration to make the restrictions seem absurd. The short sentence "The intention, of course, is love" acknowledges parents\' motives before the writer argues that the effects are harmful. The research on outdoor play provides evidence. The final list - "fall out of trees, lose arguments, get lost" - makes risk sound natural and necessary.',
              'Grade 6-7':
                'The writer structures the argument through a tension between acknowledged good intention and unintended harm. The opening paragraph\'s list, with "their" repeated before each item - "their screen time, their sugar intake, their friendship groups, their emotional vocabulary" - creates a suffocating rhythm that enacts the over-monitoring it describes. The specificity of "every thirty seconds" and "a risk assessment" turns parental concern into bureaucratic absurdity. The second paragraph concedes motive ("The intention, of course, is love") before introducing the paradox that drives the argument: "safety and growth are not always the same thing". This antithesis is the article\'s conceptual engine. The research on outdoor play provides evidence, but the writer is careful to admit its limits ("correlation is not causation"), which strengthens the article\'s credibility. The final paragraph\'s list - "fall out of trees, lose arguments, get lost, and find their way back" - moves from physical to social to practical risk and ends in recovery, preparing for the assertion that children need "to discover that failure is survivable". The movement from the practical to the general turns an argument about parenting into one about how people grow.',
            },
            markScheme: [
              'Analyses language techniques and their effects',
              'Analyses structural choices and their effects',
              'Uses subject terminology accurately',
              "Comments on the writer's methods and their impact on the reader",
              'Top band: perceptive, conceptualised analysis with judicious references',
            ],
          },
          {
            id: 'ocr-p1-10-q4',
            questionNumber: 4,
            questionText:
              'Read Source A and Source B. Compare how the two writers convey their different perspectives on childhood and freedom.\n\nIn your answer you should:\n• compare their different perspectives on childhood\n• compare the methods they use to convey those perspectives\n• use evidence from both texts to support your answer.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: EXTRACT_10_A + '\n\n---\n\n' + EXTRACT_10_B,
            extractSource: EXTRACT_10_A_REF + ' / ' + EXTRACT_10_B_REF,
            modelAnswers: {
              'Grade 4-5':
                'Both writers suggest that children need some freedom and risk. The modern writer uses research and examples to argue that today\'s children are over-protected, while Ruskin looks back on his own over-protected childhood in the 1820s. The modern writer lists what parents control, such as "their screen time", and Ruskin lists what he lacked, saying he "had nothing to endure". The modern writer says children "need to fall out of trees", and Ruskin shows what happens when they never do: his "courage never fortified". The modern writer\'s tone is concerned and persuasive, while Ruskin\'s is calm and honest about his own weaknesses. Both suggest that keeping children too safe can harm them.',
              'Grade 6-7':
                'The two texts form an unexpected partnership: the modern writer argues that children need risk, and Ruskin, writing in 1875, supplies a case study of a childhood without it. Their methods differ. The modern writer argues from outside, as an observer marshalling examples, research and cultural criticism; Ruskin argues from within, testing his own upbringing and finding it wanting. The article\'s language creates urgency - children made "less resilient and more anxious", a "GPS signal" every "thirty seconds" - while Ruskin\'s is measured and self-examining, and his admissions ("I had nothing to love") carry more weight for being made so calmly. Both writers use lists. The article\'s repeated "their" catalogues what parents monitor; Ruskin\'s tricolon of negatives ("my strength was never exercised, my patience never tried, and my courage never fortified") catalogues what that kind of protection took from him. Both also acknowledge the care behind the protection. The article says "The intention, of course, is love", and Ruskin counts his upbringing\'s "blessings" before its "calamities". Where the article asserts that children need "to discover that failure is survivable", Ruskin shows the cost of never finding out: a boy who was not afraid "of anything", who longed to play with "the lion\'s cubs", and who was given nothing to endure. The irony is that some of the strongest evidence for the modern argument comes from a text written a century and a half earlier.',
            },
            markScheme: [
              'Compares perspectives on childhood with clear understanding',
              'Compares methods used by both writers',
              'Uses evidence from both texts',
              'Analyses the effects of specific techniques',
              'Top band: perceptive, sustained comparison with well-selected evidence',
            ],
          },
        ],
      },
      {
        id: 'ocr-p1-10-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 45 minutes on this section, including planning time.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'ocr-p1-10-q5',
            questionNumber: 5,
            questionText:
              '"Children today spend too much time indoors and on screens. The government should guarantee every child at least two hours of outdoor play per day."\n\nWrite an article for a national newspaper in which you argue for or against this proposal.\n\n(32 marks for content and organisation / 8 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear article with a sustained argument about children, outdoor play, and government responsibility. Uses persuasive techniques and appropriate register. Generally accurate spelling and punctuation.',
              'Grade 6-7':
                'A well-crafted article with a nuanced argument that considers practical implications alongside the principle. Sophisticated rhetorical devices and well-chosen evidence. Consistent technical accuracy with varied sentence structures.',
              'Grade 8-9':
                'An outstanding article with a distinctive voice that interrogates the assumptions behind the proposal. Compelling argument with structural sophistication. Ambitious vocabulary and flawless technical accuracy throughout.',
            },
            markScheme: [
              'Content & Organisation (32 marks): Clear viewpoint, persuasive techniques, appropriate form and register, coherent structure',
              'Technical Accuracy (8 marks): Sentence demarcation, spelling, punctuation, vocabulary range',
            ],
          },
        ],
      },
    ],
  },
]
