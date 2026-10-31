// @ts-nocheck
import type { MockExamPaper } from './types'

/**
 * WHAT WAS WRONG (found 26 September 2026 by scripts/check-mock-exam-extracts.mjs,
 * fixed 27 September 2026).
 *
 * All five papers are served (index.ts and the chunk loader carry wjecC2A),
 * and no source in them was what its label said:
 *   - Source B of paper 3 was labelled George Borrow, Wild Wales (1862), and
 *     none of its ten sentences is in the book. It had Borrow climb Cadair
 *     Idris from Dolgellau with his wife, "her sister Miss Evans" and a guide
 *     called Griffith. The model answers to questions 3 and 4 quoted nine of
 *     its invented phrases back as Borrow's ("like a map made flesh");
 *   - the other four Source B texts were credited to 19th-century writers and
 *     papers: Thomas Rees, Letters on the Condition of the Welsh Poor (1849);
 *     the Rev. James Phillips in The Cambrian (1847); an 1858 editorial in
 *     The Quarterly Review; and a letter from Eleanor Davies to The Cardiff
 *     Times (1872). None could be traced, and all four read as modern
 *     pastiche ("zeal without proper support is insufficient"), yet a WJEC
 *     Component 2 paper's 19th-century source is always a published text.
 *     Their model answers analysed the invented lines as the period's words;
 *   - the five Source A articles were credited to named writers in real or
 *     real-sounding publications (Wales Online, TES Cymru, National
 *     Geographic Traveller UK, Golwg360, "The Guardian Wales"). They are
 *     practice pieces written for this bank, and one byline was the name of
 *     a Welsh MP;
 *   - the paper 1 comparison answers quoted Source A as saying poverty "could
 *     have happened to any one of us" and cited figures ("169%", "since
 *     2010") that it does not contain, and a paper 3 answer misquoted "a
 *     landscape that has no interest whatsoever in your comfort".
 *
 * WHAT WAS DONE. Each Source B is now a genuine passage, cut by a script from
 * the Project Gutenberg text named in its label (never retyped; underscores
 * that mark italics are dropped, "--" is printed as the dash it stands for,
 * and "[...]" marks each cut), chosen for the same subject:
 *   1. Engels on the ruin of the small farmers of Wales and the Rebecca
 *      riots, in Florence Kelley Wischnewetzky's translation. Question 3
 *      still asks about the poor in 19th-century Wales;
 *   2. Mayhew on the education of costermongers' children. No 19th-century
 *      account of Welsh schools could be found on Gutenberg, so question 3
 *      now asks about poor children in London;
 *   3. Borrow's own ascent of Snowdon (Chapter XXIX), made with his
 *      stepdaughter Henrietta and a hired lad while his wife stayed behind;
 *   4. Thoreau on the telegraph, from "Economy" in Walden. Question 4 now
 *      asks what the writers think technology may cost us, which is
 *      Thoreau's subject, rather than what it might replace;
 *   5. Mill, The Subjection of Women (1869), Chapter I, on "the nature of
 *      women". scripts/check-mock-exam-extracts.mjs gained an entry for the
 *      book so that the passage is checked, not reported unverified.
 * They run to 259-564 words against 235-265 for the invented ones, so
 * that each scene or argument is whole. Every model answer to questions 3 and
 * 4 is rewritten on the new passages and each question 3 glosses its hardest
 * words. Each Source A is labelled as specially written; the teacher's
 * article in paper 2 now carries no byline, and its answers say "the
 * writer". Three Source A answers that called an indirect question a
 * rhetorical one, or a plain phrase parenthetical, are corrected, and the
 * paper 1 list answer now says what Source A says about when the Foundation
 * reported its figure. That fix did not check the Source A articles
 * themselves; the review below found two of their claims false.
 *
 * WHAT A REVIEW OF THAT FIX FOUND (27 September 2026). Every Source B cut is
 * word for word the Gutenberg text, in the named chapter or section, and
 * every quotation in the answers is in its own extract. But the scanner
 * compares quotations without regard to case and only from four words, and
 * nothing read what the answers said about the words. So:
 *   - two quotations had the wrong case: "ragged schools" (three times) for
 *     Mayhew's "Ragged Schools", and "the Old World ... the New" for
 *     Thoreau's lower case;
 *   - four answers misread the text. The paper 2 answer took Mayhew's "such
 *     instances were very rare" to be about children who could read, when it
 *     is about a mother who could read teaching hers. The paper 3 answer took
 *     "an object of admiration, of wonder and almost of fear" to be the view
 *     from the summit, when it is the Wyddfa as seen from the vale below;
 *     another put "frightful precipices" all round the summit, when Borrow
 *     excepts the west; and a Source A answer called "wilder, older, less
 *     tamed" a description of the hills, when it describes the landscape;
 *   - the paper 1 note said the translation was made in 1887. The edition's
 *     own preface says 1885, published the next year in New York, and the
 *     text printed is the London edition of 1892, so the note now says that;
 *   - smaller claims were corrected: "cordially hated" called irony (it is
 *     the ordinary intensifier, heartily); an anecdote called an allegory;
 *     a choice between two things called a list; an appositive phrase called
 *     a subordinate clause; Lewis said to "ask" what she states; "perhaps in
 *     a rough way" called Mayhew's qualification, when he quotes it; and the
 *     Thoreau note's "evangelist" run together with John the Baptist;
 *   - two question 1 answers listed points that do not answer the question
 *     (that the writer had visited food banks; that she had taught for
 *     twenty-two years), and now list points that do;
 *   - two Source A articles stated real-world facts that are false. Paper 1
 *     said the Joseph Rowntree Foundation reported its 3.8 million figure in
 *     2024, when its report Destitution in the UK 2023 gave it, for 2022.
 *     Paper 5 had the Welsh women's team qualify for "the UEFA Nations League
 *     promotion play-offs in 2024" (they were relegated from League A that
 *     season) and named the Western Mail as the real paper that put the news
 *     beneath a dog show, a charge nothing supports. The article then had
 *     them reach the play-offs for the 2025 European Championship, which
 *     they did, and named no paper (31 October 2026: see below). Its figure of about 10% of media
 *     coverage, and the other Source A figures, were not checked.
 * src/__tests__/wjec-c2-a-quotes-the-real-text.test.ts now holds every
 * quotation in the answers and notes to its own extract, as whole words and
 * with case, and keeps the invented sources, bylines and false facts out.
 *
 * RESTRUCTURED 24 October 2026, the day the AI marker was corrected to mark
 * each paper as its board does. WHAT WAS WRONG: these papers were not
 * Eduqas's paper. Each set four reading questions worth 5, 10, 10 and 15 and
 * two writing tasks worth 16 and 24, where C700U20-1 sets six reading
 * questions worth 3, 10, 3, 10, 4 and 10 and two compulsory writing tasks of
 * 20 each. Question 3 gave ten marks to the 19th-century text's language,
 * which the paper never asks about; nothing judged that text (Question 1.4)
 * or brought details from the two texts together (Question 1.5); and the
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
 * and every question worth 6 or more has a model answer. The questions name
 * paragraphs, not line numbers, which the mock-exam page does not print, and
 * every quotation in a reading question's text, answers and mark scheme was
 * checked by script against the extract that question prints. The sources
 * are kept as they were: each fits what Eduqas sets, one 21st-century and
 * one 19th-century non-fiction text.
 *
 * CHECKED 31 October 2026 by a second, independent reader, against the
 * guide, the scheme, Eduqas's Summer 2025 question paper and each extract.
 * Every Source B is word for word its Gutenberg text, fetched that day
 * (scripts/check-mock-exam-extracts.mjs --fetch). Fixed, one line each:
 *   - untrue claim (05 Source A): its opening put an invented report of a
 *     real event in "a national newspaper" (Wales's Euro 2025 play-off news
 *     on page fourteen, beneath a dog show), which nothing supports; it now
 *     tells of the writer's local club and weekly paper, and Question
 *     1.1(a), its answers and the 1.2 answer follow.
 *   - board wording: Questions 1.2, 1.5 and 1.6 and the Section B guidance
 *     opened with Eduqas's own sentences ("You should comment on:", "Using
 *     information from both texts, explain briefly", "Both of these texts are
 *     about", the word-count line); reworded, and 1.5 now asks which text
 *     each detail comes from, as Eduqas's does.
 *   - mark scheme (01 1.3(a)): now accepts Engels's two further reasons, land
 *     fit only for livestock and farmers slower to change.
 *   - model answer (03 1.2): the landscape's indifference "strips away" daily
 *     life; the text says walking there does.
 *   - model answer (03 1.4): Borrow alone "out of breath", the lake "below
 *     them" and the view filling "him"; the text has we, a lake near us, and
 *     the lakes filling "us".
 *   - model answer (03 1.5): called the view clear; Borrow sees Cumberland
 *     faintly and Ireland only as a possible "shadowy outline".
 *   - mark scheme (03 1.6): Source A ends on "learning" to simply be; it is
 *     remembering.
 *   - model answer (03 2.1): put the Rhossili wreck halfway along the beach;
 *     the Helvetia lies at its south end (Coflein).
 *   - model answer (04 1.2): three sentences said to "begin in the same way";
 *     they share "cannot".
 *   - model answer (04 1.4): the ear "will hear first"; Thoreau says
 *     "perchance", so now "may".
 *   - model answer (05 1.4): "until it is, nothing might have been known"
 *     inverted Mill, who says only then "something might have been
 *     positively known".
 *   - model answer and scheme (01 1.5, 1.6): called the poor "working people"
 *     and "people in work", though one is retired and one a former owner (now
 *     people who "had worked all their lives"); and said both writers scorn
 *     "the official response", where Source A describes none (now: both find
 *     those in power wanting).
 *   - model answer (02 1.6): society "will suffer" if the boys are neglected,
 *     which Mayhew does not say; now his own warning that they will "educate
 *     themselves in vice".
 * Source A figures checked against the bodies' own publications: 01's 3.8
 * million is the Joseph Rowntree Foundation's, Destitution in the UK 2023
 * (24 October 2023), for 2022; 03's sixty-mile path from Cardigan to
 * Ynyslas matches Ceredigion Council's own figure. 05's uncredited
 * "approximately 10%" of media coverage is left: published measures differ
 * by medium and year, and none was found that settles it.
 */

// ─── WJEC Component 2 Source Texts ──────────────────────────────────────────

// Exam 01: Poverty
const POVERTY_21C = `In 2023, the Joseph Rowntree Foundation reported that 3.8 million people in the United Kingdom had experienced destitution - a word that should have no place in the sixth-largest economy on earth. Destitution means not having enough money to feed yourself, to heat your home, to keep the lights on. It means choosing, every single day, between eating and staying warm.

I spent three weeks visiting food banks across South Wales, and what struck me was not the scale of need - though the scale is staggering - but the shame. Person after person told me they had never imagined they would need help. A teaching assistant from Merthyr Tydfil, a former small-business owner from Swansea, a retired nurse from Newport. These were people who had worked all their lives and found, through no fault of their own, that work was no longer enough.

The volunteers who run these food banks are extraordinary. They work without pay, without recognition, and often without adequate resources. But charity, however generous, is not a substitute for policy. We cannot food-bank our way out of a structural crisis. The question is not whether people deserve help - of course they do - but why, in one of the wealthiest nations in history, they need it at all.`

const POVERTY_21C_REF =
  'Specially written for this practice paper (not a published text): a feature article, "The New Hunger", under the invented byline Rhiannon Davies'

const POVERTY_19C = `If the peasantry of England shows the consequences which a numerous agricultural proletariat in connection with large farming involves for the country districts, Wales illustrates the ruin of the small holders. If the English country parishes reproduce the antagonism between capitalist and proletarian, the state of the Welsh peasantry corresponds to the progressive ruin of the small bourgeoisie in the towns. In Wales are to be found, almost exclusively, small holders, who cannot with like profit sell their products as cheaply as the larger, more favourably situated English farmers, with whom, however, they are obliged to compete. Moreover, in some places the quality of the land admits of the raising of live stock only, which is but slightly profitable. Then, too, these Welsh farmers, by reason of their separate nationality, which they retain pertinaciously, are much more stationary than the English farmers. But the competition among themselves and with their English neighbours (and the increased mortgages upon their land consequent upon this) has reduced them to such a state that they can scarcely live at all; and because they have not recognised the true cause of their wretched condition, they attribute it to all sorts of small causes, such as high tolls, etc, which do check the development of agriculture and commerce, but are taken into account as standing charges by every one who takes a holding, and are therefore really ultimately paid by the landlord. Here, too, the new Poor Law is cordially hated by the tenants, who hover in perpetual danger of coming under its sway. In 1843, the famous "Rebecca" disturbances broke out among the Welsh peasantry; the men dressed in women's clothing, blackened their faces, and fell in armed crowds upon the toll-gates, destroyed them amidst great rejoicing and firing of guns, demolished the toll-keepers' houses, wrote threatening letters in the name of the imaginary "Rebecca," and once went so far as to storm the workhouse of Carmarthen. [...] The Government appointed a commission to investigate the affair and its causes, and there was an end of the matter. The poverty of the peasantry continues, however, and will one day, since it cannot under existing circumstances grow less, but must go on intensifying, produce more serious manifestations than these humorous Rebecca masquerades.`

const POVERTY_19C_REF =
  'Friedrich Engels, The Condition of the Working-Class in England in 1844 (1845), from "The Agricultural Proletariat", on the small farmers of Wales, translated by Florence Kelley Wischnewetzky (London edition, 1892), from the Project Gutenberg text (#17306)'

// Exam 02: Education
const EDUCATION_21C = `Every September, I watch a new cohort of Year 7 students arrive at our school, and every September I notice the same thing: the gap between the confident and the anxious has grown wider. Some children bounce through the gates with new backpacks and labelled pencil cases and the easy assurance of parents who have rehearsed the route and bought the uniform without a second thought. Others arrive quietly, in shoes that are slightly too big or slightly too small, carrying last year's bag, watching everything with the careful alertness of someone who knows that mistakes are expensive.

The attainment gap in Wales is not a mystery. We know exactly what causes it: poverty, housing insecurity, parental stress, lack of access to books, tutors, and quiet spaces to study. We have known this for decades. What we lack is not understanding but will. The Curriculum for Wales promises to nurture every learner, to value wellbeing alongside attainment, and these are admirable ambitions. But ambition without resource is just aspiration, and aspiration without action is just words.

I have taught for twenty-two years. I have seen initiatives come and go, each one heralded as transformative, each one quietly abandoned when the funding dried up. What my students need is not another policy document. They need smaller classes, more teaching assistants, breakfast in the morning, and someone who has time to notice when they are struggling.`

const EDUCATION_21C_REF =
  'Specially written for this practice paper (not a published text): an opinion article by a secondary-school teacher, "Mind the Gap"'

const EDUCATION_19C = `I have used the heading of “Education,” but perhaps to say “non-education,” would be more suitable. Very few indeed of the costermongers’ children are sent even to the Ragged Schools; and if they are, from all I could learn, it is done more that the mother may be saved the trouble of tending them at home, than from any desire that the children shall acquire useful knowledge. Both boys and girls are sent out by their parents in the evening to sell nuts, oranges, &c., at the doors of the theatres, or in any public place, or “round the houses” (a stated circuit from their place of abode). This trade they pursue eagerly for the sake of “bunts,” though some carry home the money they take, very honestly. The costermongers are kind to their children, “perhaps in a rough way, and the women make regular pets of them very often.” One experienced man told me, that he had seen a poor costermonger’s wife—one of the few who could read—instructing her children in reading; but such instances were very rare. The education of these children is such only as the streets afford; and the streets teach them, for the most part—and in greater or lesser degrees,—acuteness—a precocious acuteness—in all that concerns their immediate wants, business, or gratifications; a patient endurance of cold and hunger; a desire to obtain money without working for it; a craving for the excitement of gambling; an inordinate love of amusement; and an irrepressible repugnance to any settled in-door industry.

[...]

It is idle to imagine that these lads, possessed of a mental acuteness almost wonderful, will not educate themselves in vice, if we neglect to train them to virtue. At their youthful age, the power of acquiring knowledge is the strongest, and some kind of education is continually going on. If they are not taught by others, they will form their own characters—developing habits of dissipation, and educing all the grossest passions of their natures, and learning to indulge in the gratification of every appetite without the least restraint.`

const EDUCATION_19C_REF =
  'Henry Mayhew, London Labour and the London Poor, Volume 1 (1851), from "Of the Education of Costermongers\' Children" and "Of the Education of the Coster-Lads", in the text of the enlarged edition of 1861 (Project Gutenberg #55998)'

// Exam 03: Travel
const TRAVEL_21C = `There is a moment, about forty minutes into the train journey from Shrewsbury to Aberystwyth, when the landscape changes so completely that it feels like crossing into another country. The gentle English farmland gives way to something wilder, older, less tamed. The hills rise steeply on either side of the track, covered in rough grass and bracken, and the sky opens up above them - vast, indifferent, magnificent.

I had come to walk the Ceredigion coast path, a sixty-mile stretch of clifftop trail that runs from Cardigan to Ynyslas. I had packed waterproofs and walking boots and a vague hope that the Welsh weather might cooperate. It did not. For four of the five days I spent on the path, the rain was relentless - not the gentle drizzle of popular imagination, but hard, horizontal rain that found every gap in every layer and soaked me to the skin within an hour.

And yet, I cannot remember the last time I felt so alive. There is something about walking in wild weather, in a landscape that has no interest whatsoever in your comfort, that strips away the accumulated nonsense of daily life. The emails, the deadlines, the endless performative busyness - all of it falls away when you are standing on a cliff edge with the wind roaring in your ears and the Atlantic smashing itself against the rocks below. The path does not care about your to-do list. The sea does not check its phone. And slowly, reluctantly, you begin to remember what it feels like to simply be.`

const TRAVEL_21C_REF =
  'Specially written for this practice paper (not a published text): travel writing, "Walking Into Weather", under the invented byline Owen Hartley'

const TRAVEL_19C = `Here we got down at a small inn, and having engaged a young lad to serve as guide, I set out with Henrietta to ascend the hill, my wife remaining behind, not deeming herself sufficiently strong to encounter the fatigue of the expedition.

[...]

We were far from being the only visitors to the hill this day; groups of people, or single individuals, might be seen going up or descending the path as far as the eye could reach. The path was remarkably good, and for some way the ascent was anything but steep. On our left was the Vale of Llanberis, and on our other side a broad hollow, or valley of Snowdon, beyond which were two huge hills forming part of the body of the grand mountain, the lowermost of which our guide told me was called Moel Elia, and the uppermost Moel y Cynghorion. On we went until we had passed both these hills, and come to the neighbourhood of a great wall of rocks constituting the upper region of Snowdon, and where the real difficulty of the ascent commences. Feeling now rather out of breath we sat down on a little knoll with our faces to the south, having a small lake near us, on our left hand, which lay dark and deep, just under the great wall.

[...]

Getting up we set about surmounting what remained of the ascent. The path was now winding and much more steep than it had hitherto been. I was at one time apprehensive that my gentle companion would be obliged to give over the attempt; the gallant girl, however, persevered, and in little more than twenty minutes from the time when we arose from our resting-place under the crags, we stood, safe and sound, though panting, upon the very top of Snowdon, the far-famed Wyddfa.

The Wyddfa is about thirty feet in diameter and is surrounded on three sides by a low wall. In the middle of it is a rude cabin, in which refreshments are sold, and in which a person resides through the year, though there are few or no visitors to the hill’s top, except during the months of summer. Below on all sides are frightful precipices except on the side of the west. Towards the east it looks perpendicularly into the dyffrin or vale, nearly a mile below, from which to the gazer it is at all times an object of admiration, of wonder and almost of fear.

There we stood on the Wyddfa, in a cold bracing atmosphere, though the day was almost stiflingly hot in the regions from which we had ascended. There we stood enjoying a scene inexpressibly grand, comprehending a considerable part of the mainland of Wales, the whole of Anglesey, a faint glimpse of part of Cumberland; the Irish Channel, and what might be either a misty creation or the shadowy outline of the hills of Ireland. Peaks and pinnacles and huge moels stood up here and there, about us and below us, partly in glorious light, partly in deep shade. Manifold were the objects which we saw from the brow of Snowdon, but of all the objects which we saw, those which filled us with delight and admiration, were numerous lakes and lagoons, which, like sheets of ice or polished silver, lay reflecting the rays of the sun in the deep valleys at his feet.`

const TRAVEL_19C_REF =
  'George Borrow, Wild Wales: Its People, Language, and Scenery (1862), Chapter XXIX, his ascent of Snowdon from Llanberis with his stepdaughter Henrietta, from the Project Gutenberg text (#648)'

// Exam 04: Technology
const TECHNOLOGY_21C = `Last month, a school in Cardiff became the first in Wales to introduce AI-powered marking software. The system, developed by a London-based technology firm, can assess a GCSE English essay in approximately ninety seconds, providing feedback on structure, vocabulary, spelling, punctuation, and even - its creators claim - the quality of argument. The headteacher described it as "a game-changer." Several of her colleagues were less enthusiastic.

I am not a Luddite. I use technology every day, and I recognise that it has transformed education in ways that are overwhelmingly positive. Online resources have democratised access to knowledge. Digital tools have made collaboration possible across distances that would once have been insurmountable. But there is a difference between technology that supports learning and technology that replaces the human relationships at its heart.

When I mark a student's essay, I am not merely checking for errors. I am reading for voice, for personality, for the particular way that this particular student sees the world. I am noticing that the quiet girl in the third row has suddenly produced a paragraph of startling originality, or that the boy who never stops talking has written something unexpectedly tender. An algorithm cannot notice these things. It cannot say, "This is different from your usual work - tell me what happened." It cannot see the human being behind the handwriting. And if we lose that, we lose something that no amount of efficiency can replace.`

const TECHNOLOGY_21C_REF =
  'Specially written for this practice paper (not a published text): an opinion article, "The Algorithm Cannot See You", under the invented byline Dr Catrin Morgan'

const TECHNOLOGY_19C = `As with our colleges, so with a hundred “modern improvements”; there is an illusion about them; there is not always a positive advance. The devil goes on exacting compound interest to the last for his early share and numerous succeeding investments in them. Our inventions are wont to be pretty toys, which distract our attention from serious things. They are but improved means to an unimproved end, an end which it was already but too easy to arrive at; as railroads lead to Boston or New York. We are in great haste to construct a magnetic telegraph from Maine to Texas; but Maine and Texas, it may be, have nothing important to communicate. Either is in such a predicament as the man who was earnest to be introduced to a distinguished deaf woman, but when he was presented, and one end of her ear trumpet was put into his hand, had nothing to say. As if the main object were to talk fast and not to talk sensibly. We are eager to tunnel under the Atlantic and bring the old world some weeks nearer to the new; but perchance the first news that will leak through into the broad, flapping American ear will be that the Princess Adelaide has the whooping cough. After all, the man whose horse trots a mile in a minute does not carry the most important messages; he is not an evangelist, nor does he come round eating locusts and wild honey. I doubt if Flying Childers ever carried a peck of corn to mill.`

const TECHNOLOGY_19C_REF =
  'Henry David Thoreau, Walden; or, Life in the Woods (1854), from the chapter "Economy", from the Project Gutenberg text (#205)'

// Exam 05: Gender
const GENDER_21C = `When the women's team at my local football club won the county cup last spring, the news was reported on page fourteen of our weekly paper, beneath an article about a local dog show. The men's team, by contrast, had received front-page coverage for losing a friendly. If you wanted a single image to illustrate the state of gender equality in Welsh sport, you could do worse than that.

The numbers are stark. Women's sport receives approximately 10% of media coverage in the UK. Female athletes earn, on average, a fraction of their male counterparts. Facilities for women's teams remain inferior - I have spoken to players who train on pitches without floodlights, who share changing rooms with the men's reserve team, who buy their own kit because the club's budget does not extend to them.

But statistics do not capture the subtler problem, which is one of assumption. We assume that women's sport is less exciting, less skilful, less worthy of attention, not because we have watched it and formed this judgement, but because we have absorbed it from a culture that has always valued men's bodies in motion more than women's. Challenging this assumption requires more than funding, though funding would help. It requires a fundamental reimagining of what sport is for, and who it belongs to.`

const GENDER_21C_REF =
  'Specially written for this practice paper (not a published text): an opinion column, "Level the Playing Field", under the invented byline Megan Lewis'

const GENDER_19C = `Neither does it avail anything to say that the nature of the two sexes adapts them to their present functions and position, and renders these appropriate to them. Standing on the ground of common sense and the constitution of the human mind, I deny that any one knows, or can know, the nature of the two sexes, as long as they have only been seen in their present relation to one another. If men had ever been found in society without women, or women without men, or if there had been a society of men and women in which the women were not under the control of the men, something might have been positively known about the mental and moral differences which may be inherent in the nature of each. What is now called the nature of women is an eminently artificial thing—the result of forced repression in some directions, unnatural stimulation in others. It may be asserted without scruple, that no other class of dependents have had their character so entirely distorted from its natural proportions by their relation with their masters; for, if conquered and slave races have been, in some respects, more forcibly repressed, whatever in them has not been crushed down by an iron heel has generally been let alone, and if left with any liberty of development, it has developed itself according to its own laws; but in the case of women, a hot-house and stove cultivation has always been carried on of some of the capabilities of their nature, for the benefit and pleasure of their masters. Then, because certain products of the general vital force sprout luxuriantly and reach a great development in this heated atmosphere and under this active nurture and watering, while other shoots from the same root, which are left outside in the wintry air, with ice purposely heaped all round them, have a stunted growth, and some are burnt off with fire and disappear; men, with that inability to recognise their own work which distinguishes the unanalytic mind, indolently believe that the tree grows of itself in the way they have made it grow, and that it would die if one half of it were not kept in a vapour bath and the other half in the snow.`

const GENDER_19C_REF =
  'John Stuart Mill, The Subjection of Women (1869), Chapter I, from the Project Gutenberg text (#27083)'

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

// ─── Mock Exam Papers ──────────────────────────────────────────────────────

export const wjecC2A: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 01: POVERTY
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c2-01',
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
        id: 'wjec-c2-01-reading',
        title: 'Section A: Reading',
        description: SECTION_A_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-01-q1',
            questionNumber: 1,
            label: '1.1',
            questionText: `Read Source A, the 21st-century text, and answer the questions below.\n\n(a) According to the writer, how many people in the United Kingdom had experienced destitution? [1]\n(b) What struck the writer most about the people visiting the food banks? [1]\n(c) Give one thing that the volunteers who run the food banks work without. [1]`,
            marks: 3,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: `Source A:\n${POVERTY_21C}\n\nSource B:\n${POVERTY_19C}`,
            extractSource: `Source A: ${POVERTY_21C_REF} | Source B: ${POVERTY_19C_REF}`,
            modelAnswers: {
              'Grade 4-5': `(a) 3.8 million.\n(b) Their shame: many had never imagined that they would need help.\n(c) Pay.`,
            },
            markScheme: {
              'How it is marked (3 marks)': SHORT_A_MARKING,
              Answers: [
                '(a) 3.8 million.',
                `(b) Their shame (accept: that they felt ashamed to need help). The scale of need does not earn the mark: the writer says it was "not the scale of need".`,
                '(c) Any one of: pay; recognition; adequate resources.',
              ],
            },
          },
          {
            id: 'wjec-c2-01-q2',
            questionNumber: 2,
            label: '1.2',
            questionText: `Source A is a feature article about poverty in Wales. The writer wants to persuade readers that poverty is a serious problem which charity alone cannot solve.\n\nHow does the writer try to do this?\n\nIn your answer, comment on:\n• what the writer says\n• the writer's choice of language and tone\n• how the article is structured, and any other methods the writer uses.\n\n[10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${POVERTY_21C}`,
            extractSource: POVERTY_21C_REF,
            modelAnswers: {
              'Grade 8-9': `The writer opens with a fact rather than a feeling, which makes the argument hard to dismiss: the Joseph Rowntree Foundation reported that "3.8 million people in the United Kingdom had experienced destitution". Naming a respected source makes the figure trustworthy, and the writer at once sets the word against the country's wealth: it is "a word that should have no place in the sixth-largest economy on earth". The modal verb "should" turns a statistic into a moral judgement, so the reader feels that something is wrong, not merely unfortunate.\n\nThe writer then defines the word in plain, concrete terms. The repeated pattern "to feed yourself, to heat your home, to keep the lights on" lists three basic needs, and the second person puts the reader in the place of someone who cannot meet them. In "It means choosing, every single day, between eating and staying warm", the interruption "every single day" slows the sentence down, so the choice seems to drag on as it does for the poor.\n\nIn the second paragraph the tone becomes personal. The writer speaks as a witness ("I spent three weeks visiting food banks across South Wales"), which gives the article authority, and then makes a surprising turn: what struck the writer was "not the scale of need" but "the shame". The focus moves from numbers to people. The sentence "A teaching assistant from Merthyr Tydfil, a former small-business owner from Swansea, a retired nurse from Newport" has no main verb, so it reads like a roll call, and the jobs are respectable, useful ones. This challenges the idea that poor people do not work: these people "had worked all their lives" and found, "through no fault of their own", that "work was no longer enough".\n\nThe last paragraph is built on a turn. It begins with praise ("The volunteers who run these food banks are extraordinary") and the triple "without pay, without recognition, and often without adequate resources", then changes direction with "But": "charity, however generous, is not a substitute for policy". The writer criticises the system without criticising the volunteers. Turning a noun into a verb in "We cannot food-bank our way out of a structural crisis" is memorable and slightly mocking, the word "structural" places the blame on the system, and the inclusive "We" makes the reader share the responsibility. The article ends by setting two questions side by side: not "whether people deserve help - of course they do - but why, in one of the wealthiest nations in history, they need it at all." The aside "of course they do" brushes objections away, and the final words "at all" leave the reader with the central point: in a country this rich, such need should not exist.`,
            },
            markScheme: {
              'How it is marked (10 marks)': Q1_2_MARKING,
              'Points you might make': [
                `The opening rests on a named source and a figure ("3.8 million"), then judges it: destitution should have "no place in the sixth-largest economy on earth".`,
                `The definition is concrete and speaks to the reader ("to feed yourself, to heat your home, to keep the lights on"), and "every single day" makes the choice relentless.`,
                `The writer speaks as a witness ("I spent three weeks visiting food banks across South Wales"), and the focus turns from numbers to "the shame".`,
                `The verbless list of a teaching assistant, a small-business owner and a retired nurse challenges the idea that the poor do not work: "work was no longer enough".`,
                `The last paragraph praises the volunteers, then turns on "But": "charity, however generous, is not a substitute for policy".`,
                `The noun made into a verb in "food-bank our way out", the word "structural" and the inclusive "We" put the blame on the system and share it with the reader; the ending, "they need it at all", states the central point.`,
              ],
            },
          },
          {
            id: 'wjec-c2-01-q3',
            questionNumber: 3,
            label: '1.3',
            questionText: `Read Source B, the 19th-century text, and answer the questions below.\n\n(Source B was written in German by Friedrich Engels in 1845. This English translation by Florence Kelley Wischnewetzky is printed from its London edition of 1892. "Small holders" farmed small plots of land; the "new Poor Law" of 1834 offered the poor help mainly by making them enter a workhouse; "tolls" were charges paid at "toll-gates" to use a road; "pertinaciously" means stubbornly.)\n\n(a) According to Engels, why do the Welsh small farmers struggle to compete with the English farmers? [1]\n(b) What does Engels mean when he says that the new Poor Law is "cordially hated" by the tenants? [1]\n(c) Give one thing that the rioters attacked in the "Rebecca" disturbances of 1843. [1]`,
            marks: 3,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: `Source B:\n${POVERTY_19C}`,
            extractSource: POVERTY_19C_REF,
            modelAnswers: {
              'Grade 4-5': `(a) The English farms are bigger and better placed, so they can sell their produce more cheaply.\n(b) The tenants hate it with all their hearts, because they are always afraid of being forced into the workhouse.\n(c) The toll-gates.`,
            },
            markScheme: {
              'How it is marked (3 marks)': SHORT_B_MARKING,
              Answers: [
                '(a) The English farms are larger and better placed, so they can sell their produce more cheaply (accept: the Welsh farms are too small to make the same profit at the same price). Also accept either further reason Engels gives: in places the land is fit only for raising livestock, which makes little profit; the Welsh farmers are slower to change than the English.',
                `(b) They hate it with all their hearts: "cordially" here means heartily, not in a friendly way. Accept: they hate it very much, because they fear having to enter the workhouse.`,
                "(c) Any one of: the toll-gates; the toll-keepers' houses; the workhouse of Carmarthen.",
              ],
            },
          },
          {
            id: 'wjec-c2-01-q4',
            questionNumber: 4,
            label: '1.4',
            questionText: `Read Source B again.\n\nA student said: ‘Engels writes about the Welsh farmers with sympathy, but he is more interested in explaining their poverty than in making the reader feel it.’\n\nHow far do you agree with this view?\n\nIn your answer, give your own view of how Engels presents the farmers and their poverty across the whole text, and explain how his choices of words and details create that view. Support your answer with references to the text. [10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'evaluation',
            extract: `Source B:\n${POVERTY_19C}`,
            extractSource: POVERTY_19C_REF,
            modelAnswers: {
              'Grade 8-9': `I largely agree with this view, although Engels's sympathy is real, and it shows most clearly where his language becomes plain.\n\nAt the start he writes like an economist rather than a witness. Wales "illustrates the ruin of the small holders", as though the country were an example in an argument, and he sets out the causes as a careful chain: the small farmers "cannot with like profit sell their products as cheaply" as the "larger, more favourably situated English farmers", yet they are "obliged to compete" with them. Words such as "proletariat", "capitalist" and "small bourgeoisie" belong to a theory of society, not to a description of suffering, so here the student is right: we understand the farmers' poverty more than we feel it.\n\nHowever, Engels's sympathy breaks through in the clause "they can scarcely live at all". Among so much abstract language it is short and blunt, and the bluntness makes it hit hard. He also calls their state a "wretched condition", and the verb in "hover in perpetual danger" makes the threat of the workhouse a constant fear hanging over the tenants. Even so, his sympathy is not uncritical. He says the farmers "have not recognised the true cause" of their poverty and blame "all sorts of small causes, such as high tolls", which he then explains away as costs that are really "paid by the landlord". This makes him sound superior to the people he describes, as if he understands their lives better than they do.\n\nThe account of the Rebecca riots is the most vivid part of the passage, and the part that most challenges the statement. A run of verbs, "dressed", "blackened", "fell", "destroyed", "demolished", makes the farmers active and dangerous rather than pitiful, and "amidst great rejoicing and firing of guns" shows their anger turning into something almost festive. Here Engels does make the reader see and feel. Yet his attitude stays mixed, because he calls the riots "humorous Rebecca masquerades", which comes close to mocking them.\n\nThe ending supports the statement most strongly. He dismisses the Government's response in a flat phrase, "there was an end of the matter", and predicts that the poverty "must go on intensifying" until it produces "more serious manifestations". He is less interested in what the farmers feel than in what their poverty will lead to. Overall, Engels does show sympathy, but it is the sympathy of an analyst: he wants his readers to understand why the farmers are poor and what will follow, more than to grieve for them.`,
            },
            markScheme: {
              'How it is marked (10 marks)': Q1_4_MARKING,
              'Points you might make': [
                `Much of the passage explains rather than describes: Wales "illustrates the ruin of the small holders", and the causes are set out step by step (competition with "larger, more favourably situated English farmers", land fit for "live stock only", "increased mortgages").`,
                `Sympathy shows in plainer words: "they can scarcely live at all", "wretched condition", and the fear in "hover in perpetual danger".`,
                `He is critical of the farmers too: they "have not recognised the true cause" and blame "all sorts of small causes".`,
                `The riots are told in active verbs ("blackened", "destroyed", "demolished"), which brings them alive, yet he calls them "humorous Rebecca masquerades".`,
                `The ending looks forward rather than inward: the poverty "must go on intensifying" and will produce "more serious manifestations".`,
                'A strong answer reaches a judgement on the statement, agreeing, disagreeing or agreeing in part, and keeps to it through the whole passage.',
              ],
            },
          },
          {
            id: 'wjec-c2-01-q5',
            questionNumber: 5,
            label: '1.5',
            questionText: `Bring together details from both texts to explain briefly who the people living in poverty are, and how they respond to it. Make clear which text each detail comes from. [4]`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'summary',
            extract: `Source A:\n${POVERTY_21C}\n\nSource B:\n${POVERTY_19C}`,
            extractSource: `Source A: ${POVERTY_21C_REF} | Source B: ${POVERTY_19C_REF}`,
            modelAnswers: {
              'Grade 4-5': `In Source A the poor are people who "had worked all their lives", such as a "teaching assistant from Merthyr Tydfil" and a "retired nurse from Newport". They respond with shame, having "never imagined they would need help", and turn to food banks run by volunteers. In Source B the poor are the small farmers of Wales, who "can scarcely live at all" and live in fear of the workhouse under the new Poor Law. Some respond with anger: in 1843 they attacked the toll-gates in the Rebecca riots.`,
            },
            markScheme: {
              'How it is marked (4 marks)': Q1_5_MARKING,
              'Details you might bring together': [
                `Source A: the poor include people who "had worked all their lives", such as a teaching assistant, a former small-business owner and a retired nurse; they must choose "between eating and staying warm"; they feel ashamed and rely on food banks.`,
                `Source B: the poor are Welsh small farmers who "can scarcely live at all"; they live "in perpetual danger" of the workhouse; they blame tolls; in 1843 they rose in the Rebecca riots, destroying toll-gates and storming the workhouse of Carmarthen.`,
              ],
            },
          },
          {
            id: 'wjec-c2-01-q6',
            questionNumber: 6,
            label: '1.6',
            questionText: `Source A and Source B are both about poverty.\n\nCompare:\n• what the writers say about poverty and its causes\n• how they get their ideas across.\n\nUse evidence from both texts, and make clear which text each point comes from. [10]`,
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'comparison',
            extract: `Source A:\n${POVERTY_21C}\n\nSource B:\n${POVERTY_19C}`,
            extractSource: `Source A: ${POVERTY_21C_REF} | Source B: ${POVERTY_19C_REF}`,
            modelAnswers: {
              'Grade 8-9': `Both writers argue that poverty comes from the way society is organised rather than from the failings of the poor, but they make the case in very different ways.\n\nThe writer of Source A builds the argument from testimony. After the opening figure of "3.8 million people", the article turns to people the writer met: "A teaching assistant from Merthyr Tydfil, a former small-business owner from Swansea, a retired nurse from Newport". These are people who have worked all their lives, and the phrase "through no fault of their own" rejects the idea that they are to blame. Engels, in Source B, names no one. He writes about "the Welsh peasantry" as a class and explains their ruin through cause and effect: they are "obliged to compete" with English farmers who can sell more cheaply, and the competition brings "increased mortgages" until they "can scarcely live at all". Source A makes poverty personal; Source B makes it the predictable result of an economic system.\n\nThe writers also see the poor differently. The writer of Source A is tender towards them and dwells on "the shame" they feel. Engels is more detached and even critical: the farmers "have not recognised the true cause of their wretched condition", and he calls their protest "humorous Rebecca masquerades". Yet his account of the riots, with its verbs "blackened", "destroyed" and "demolished", shows the poor acting, whereas Source A shows them enduring.\n\nBoth writers find those in power wanting. Source A praises the volunteers but argues, in a balanced sentence that sets charity against policy, that "charity, however generous, is not a substitute for policy", which implies that the policy is missing, and the inclusive "We cannot food-bank our way out of a structural crisis" asks the reader to share the responsibility. Engels is flatter and more ironic: the Government appointed a commission, "and there was an end of the matter".\n\nTheir endings show their different purposes. Source A ends on a question of conscience: why, "in one of the wealthiest nations in history", people need help "at all". Source B ends on a warning that the poverty "must go on intensifying" and will produce "more serious manifestations". The modern writer wants readers to feel that such poverty is shameful and to demand change; Engels wants them to understand that it cannot last.`,
            },
            markScheme: {
              'How it is marked (10 marks)': Q1_6_MARKING,
              'Points you might make': [
                `Both blame the system rather than the poor. Source A: people who "had worked all their lives" are poor "through no fault of their own". Source B: competition and "increased mortgages" have ruined the farmers.`,
                'Source A builds its case from people the writer met; Source B names no one and explains poverty through cause and effect, as an economist would.',
                `Source A is tender towards the poor and dwells on "the shame"; Engels is detached and critical ("have not recognised the true cause"), and calls the riots "humorous Rebecca masquerades".`,
                `Both find those in power wanting: charity "is not a substitute for policy", so the policy is missing (Source A); the Government's commission, "and there was an end of the matter" (Source B).`,
                `The endings differ: Source A appeals to conscience ("they need it at all"); Source B warns that the poverty "must go on intensifying".`,
              ],
            },
          },
        ],
      },
      {
        id: 'wjec-c2-01-writing',
        title: 'Section B: Writing',
        description: SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-01-q7',
            questionNumber: 1,
            label: '2.1',
            questionText: `Your local council is considering closing a community food bank to save money.\n\nWrite a letter to the council arguing that the food bank should stay open. [20]`,
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Dear Councillors,\n\nI am writing about the proposal to close the community food bank on Station Road. I understand that the council must save money this year, and that every service is being examined closely. However, closing the food bank would be a false economy, and I urge you to keep it open.\n\nFirst, consider who uses it. The food bank is not a convenience for people who could manage without it. Its visitors include pensioners whose savings have run out, parents whose shift work does not cover the rent, and people waiting for their first wage after losing a job. For them, a food parcel is the difference between eating and going without. If the food bank closes, their need will not disappear; it will simply move somewhere less visible, and more expensive.\n\nThat is my second point. Hunger has costs that the council will pay in other ways. Children who arrive at school hungry find it harder to concentrate. Adults who cannot afford to eat properly fall ill more often, and some will end up needing help from the health service or from social services. Each of these costs is far higher than the modest grant that keeps the food bank running.\n\nThird, the food bank gives the council remarkable value. It is run almost entirely by volunteers, who give their time without pay, and much of its food is donated by local people and shops. The council's grant pays for little more than the building and the van. Few services return so much for so little.\n\nI recognise that savings must be found. Could the council share the building with another service, or help the volunteers to apply for funding from charities and local businesses? I would gladly help to organise a fundraising event myself.\n\nPlease do not close a service that protects the most vulnerable people in our town. I hope that you will weigh these points carefully before the council votes.\n\nYours faithfully,\n\nAlex Morgan`,
            },
            markScheme: {
              'How it is marked (20 marks)': WRITING_MARKING,
              'What earns marks in this task': [
                'The features of a formal letter: a greeting, an opening that says why you are writing, clear paragraphs and a suitable sign-off (Yours faithfully, after Dear Councillors).',
                'A respectful, formal tone for councillors: firm, but never rude.',
                'Reasons developed with detail: who uses the food bank, what closing it would cost the community, and other ways for the council to save money.',
                'Accurate spelling, punctuation and grammar, with varied sentences and well-chosen words: 8 of the 20 marks are for this.',
              ],
            },
          },
          {
            id: 'wjec-c2-01-q8',
            questionNumber: 2,
            label: '2.2',
            questionText: `"In a wealthy country, no one should go hungry."\n\nYour school is holding an assembly about this statement. Write a speech for the assembly giving your views. [20]`,
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Good morning, everyone.\n\nThink about what you had for breakfast this morning. Perhaps it was cereal, or toast, or nothing at all because you were running late. For most of us, skipping breakfast is a choice. For some children in this country, it is not.\n\nWe live in one of the richest countries in the world. Our supermarket shelves are stacked to the ceiling, shops stay open late into the night, and good food is thrown away every day. And yet there are families, perhaps not far from this hall, where parents go without dinner so that their children can eat. I believe that this is wrong, and that in a country as wealthy as ours, no one should go hungry.\n\nSome people will say that hunger is a matter of personal responsibility: that families should budget better, or work harder. But many of the families who struggle are already working. They are carers, cleaners, shop assistants and delivery drivers, the people who keep the country running. When a full week's work does not pay for a full week's food, the problem is not the worker. It is the system.\n\nOthers will say that charities and food banks can solve the problem. Food banks do wonderful work, and their volunteers deserve our thanks. But charity is meant to be a safety net, not a way of life. A country should not depend on the kindness of strangers to feed its children.\n\nSo what can we do? We can start here. We can support the school's food collection, and make sure that no one in this school is ever embarrassed to ask for help. We can learn about the causes of poverty, and talk about them honestly. And when we are old enough to vote, we can choose leaders who treat hunger as a problem to be solved, not a fact of life.\n\nHunger is not a natural disaster. It is the result of choices a society makes, and a wealthy society can choose differently.\n\nThank you for listening.`,
            },
            markScheme: {
              'How it is marked (20 marks)': WRITING_MARKING,
              'What earns marks in this task': [
                'The features of a speech: a greeting, direct address to the audience, and an ending that rounds it off.',
                'A tone that suits pupils in an assembly: serious and persuasive, without preaching or talking down.',
                'A clear view on the statement, developed with reasons and examples, perhaps answering the views of those who disagree.',
                'Accurate spelling, punctuation and grammar, with varied sentences and well-chosen words: 8 of the 20 marks are for this.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 02: EDUCATION
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c2-02',
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
        id: 'wjec-c2-02-reading',
        title: 'Section A: Reading',
        description: SECTION_A_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-02-q1',
            questionNumber: 1,
            label: '1.1',
            questionText: `Read Source A, the 21st-century text, and answer the questions below.\n\n(a) Which year group does the writer watch arriving at the school every September? [1]\n(b) According to the writer, what does the Curriculum for Wales promise to do? Give one thing. [1]\n(c) How long has the writer been teaching? [1]`,
            marks: 3,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: `Source A:\n${EDUCATION_21C}\n\nSource B:\n${EDUCATION_19C}`,
            extractSource: `Source A: ${EDUCATION_21C_REF} | Source B: ${EDUCATION_19C_REF}`,
            modelAnswers: {
              'Grade 4-5': `(a) Year 7.\n(b) To nurture every learner.\n(c) Twenty-two years.`,
            },
            markScheme: {
              'How it is marked (3 marks)': SHORT_A_MARKING,
              Answers: [
                '(a) Year 7.',
                '(b) Either of: to nurture every learner; to value wellbeing alongside attainment.',
                '(c) Twenty-two years.',
              ],
            },
          },
          {
            id: 'wjec-c2-02-q2',
            questionNumber: 2,
            label: '1.2',
            questionText: `Source A is an opinion article by a secondary-school teacher. The writer wants to persuade readers that the gap between poorer pupils and the rest will not close without real action and money.\n\nHow does the writer try to do this?\n\nIn your answer, comment on:\n• what the writer says\n• the writer's choice of language and tone\n• how the article is structured, and any other methods the writer uses.\n\n[10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${EDUCATION_21C}`,
            extractSource: EDUCATION_21C_REF,
            modelAnswers: {
              'Grade 8-9': `The writer opens with a scene, not an argument. The repetition of "Every September" makes the experience yearly and unchanging, and the observation that "the gap between the confident and the anxious has grown wider" states the problem before any policy is mentioned. The writer then builds a contrast between two kinds of children. The confident ones "bounce through the gates", a lively verb, with "new backpacks and labelled pencil cases", details that suggest money and careful parents, and the long sentence, joined by "and" after "and", mirrors their ease. The others "arrive quietly", in "shoes that are slightly too big or slightly too small", carrying "last year's bag". These small, precise details make poverty visible without the word being used, and the final phrase, "someone who knows that mistakes are expensive", is especially moving: it suggests that these children have already learnt to be as careful as adults.\n\nThe second paragraph moves from observation to argument. The short, confident sentence "The attainment gap in Wales is not a mystery" dismisses any excuse, and the list of causes, "poverty, housing insecurity, parental stress, lack of access to books, tutors, and quiet spaces to study", shows how well the writer knows the problem. The inclusive "We know" and "We have known this for decades" spread the responsibility to everyone, the reader included. The antithesis "What we lack is not understanding but will" sums up the argument: the problem is not ignorance but a lack of determination. The writer is fair to the Curriculum for Wales, calling its aims "admirable ambitions", then turns with "But" to a carefully patterned sentence: "ambition without resource is just aspiration, and aspiration without action is just words". The second half begins with the word that ended the first, so the hopes seem to shrink step by step until they are "just words".\n\nThe final paragraph uses the writer's experience as evidence. The plain statement "I have taught for twenty-two years" gives authority, and the parallel phrases "each one heralded as transformative, each one quietly abandoned" contrast the noise with which schemes begin and the silence in which they end. The writer rejects "another policy document" and lists practical needs instead: "smaller classes, more teaching assistants, breakfast in the morning". The last item, "someone who has time to notice when they are struggling", brings the article back to the quiet children of the first paragraph, so that the argument ends where it began, with a child who needs to be noticed.`,
            },
            markScheme: {
              'How it is marked (10 marks)': Q1_2_MARKING,
              'Points you might make': [
                `The opening is a yearly scene ("Every September"), and the contrast between children who "bounce through the gates" and those in "shoes that are slightly too big or slightly too small" shows poverty without naming it.`,
                `"someone who knows that mistakes are expensive" makes the poorer children seem old before their time.`,
                `The second paragraph turns to argument: "The attainment gap in Wales is not a mystery", a list of causes, and the inclusive "We have known this for decades".`,
                `The antithesis "What we lack is not understanding but will" names the problem; the patterned sentence ending "just words" shows hopes shrinking without money and action.`,
                `Experience as authority ("I have taught for twenty-two years"), and parallel phrases ("each one heralded as transformative, each one quietly abandoned") mocking short-lived schemes.`,
                `The closing list of practical needs ends on "someone who has time to notice when they are struggling", which links back to the opening.`,
              ],
            },
          },
          {
            id: 'wjec-c2-02-q3',
            questionNumber: 3,
            label: '1.3',
            questionText: `Read Source B, the 19th-century text, and answer the questions below.\n\n(Costermongers sold fruit, vegetables and fish in the streets from barrows and baskets. Ragged schools were free charity schools for the poorest children. "Bunts" was the money a child could keep from sales above the sum owed to a parent or master; "acuteness" means sharpness of mind; "precocious" means developed unusually early; "repugnance" means strong dislike.)\n\n(a) According to Mayhew, why are the few costermongers' children who go to the Ragged Schools usually sent there? [1]\n(b) What do the children sell in the evenings? Give one thing. [1]\n(c) What does Mayhew mean when he says that their education "is such only as the streets afford"? [1]`,
            marks: 3,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: `Source B:\n${EDUCATION_19C}`,
            extractSource: EDUCATION_19C_REF,
            modelAnswers: {
              'Grade 4-5': `(a) Very few "are sent even to the Ragged Schools", and those who are go mainly so that their mothers are spared the trouble of minding them at home.\n(b) Nuts.\n(c) They learn only what life on the streets teaches them, because they have no proper schooling.`,
            },
            markScheme: {
              'How it is marked (3 marks)': SHORT_B_MARKING,
              Answers: [
                '(a) So that the mother is saved the trouble of looking after them at home, not because anyone wants them to learn.',
                '(b) Either of: nuts; oranges.',
                '(c) The only education they get is what they pick up on the streets (accept: they have no real schooling, and the streets are their teacher).',
              ],
            },
          },
          {
            id: 'wjec-c2-02-q4',
            questionNumber: 4,
            label: '1.4',
            questionText: `Read Source B again.\n\nA student said: ‘Mayhew pities the costermongers' children, but by the end he is more afraid of what they will become.’\n\nHow far do you agree with this view?\n\nIn your answer, give your own view of how Mayhew presents the children across the whole text, and explain how his choices of words and details create that view. Support your answer with references to the text. [10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'evaluation',
            extract: `Source B:\n${EDUCATION_19C}`,
            extractSource: EDUCATION_19C_REF,
            modelAnswers: {
              'Grade 8-9': `I agree with this view. Mayhew's pity for the children is real, but by the end of the passage his fear of what they may become is the stronger feeling.\n\nHe begins by suggesting that these children are let down by everyone around them. He corrects his own heading, "Education", at once: perhaps "non-education" would be more suitable, a wry coinage that shows how little schooling they receive. Very few "are sent even to the Ragged Schools", and the word "even" stresses how low the bar is, since these were free schools for the poorest. Those who go are sent so that "the mother may be saved the trouble of tending them at home", not from "any desire that the children shall acquire useful knowledge". Here his sympathy is plainly with the children, who are neglected rather than wicked.\n\nHe is fair to the parents too. The costermongers are "kind to their children", and he quotes someone who says that the women "make regular pets of them very often". The story of a costermonger's wife "instructing her children in reading" is touching, but he adds at once that "such instances were very rare", which makes the general picture bleaker.\n\nThe long list of what the streets teach is where pity begins to mix with fear. It opens with qualities he half admires, "a precocious acuteness" and "a patient endurance of cold and hunger", which shows how much these children suffer and how quickly they have had to grow up. But the list moves on to faults: "a desire to obtain money without working for it", "a craving for the excitement of gambling" and "an irrepressible repugnance to any settled in-door industry". Because the list grows longer and harsher, the reader's pity for the children is joined by unease about them.\n\nThe final paragraph makes the fear explicit. The warning that the boys will "educate themselves in vice, if we neglect to train them to virtue" sets vice against virtue, and the pronoun "we" makes the reader responsible. Mayhew grants them "a mental acuteness almost wonderful", yet predicts that, untaught, they will develop "habits of dissipation" and indulge "every appetite without the least restraint". Such extreme language sounds more like alarm than pity. So the student is right: Mayhew's pity is genuine, but what drives his argument at the end is the fear of what a society that neglects these children may one day face from them.`,
            },
            markScheme: {
              'How it is marked (10 marks)': Q1_4_MARKING,
              'Points you might make': [
                `Pity first: "non-education", the few who "are sent even to the Ragged Schools", and the mothers who send them only to be "saved the trouble of tending them at home".`,
                `Fairness to the parents ("kind to their children"), and the rare mother teaching reading, which makes the general picture bleaker.`,
                `The list of what the streets teach moves from qualities that suggest suffering ("a patient endurance of cold and hunger") to faults ("a craving for the excitement of gambling").`,
                `The ending is a warning: they will "educate themselves in vice, if we neglect to train them to virtue", and the inclusive "we" makes the reader responsible.`,
                `Extreme language ("habits of dissipation", "every appetite without the least restraint") suggests alarm; some may argue that the warning is itself a form of concern for the children.`,
                'A strong answer reaches a judgement on the statement and keeps to it through the whole passage.',
              ],
            },
          },
          {
            id: 'wjec-c2-02-q5',
            questionNumber: 5,
            label: '1.5',
            questionText: `Bring together details from both texts to explain briefly what gets in the way of poor children's education. Make clear which text each detail comes from. [4]`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'summary',
            extract: `Source A:\n${EDUCATION_21C}\n\nSource B:\n${EDUCATION_19C}`,
            extractSource: `Source A: ${EDUCATION_21C_REF} | Source B: ${EDUCATION_19C_REF}`,
            modelAnswers: {
              'Grade 4-5': `In Source A, poorer children are held back by "poverty, housing insecurity, parental stress" and a lack of "books, tutors, and quiet spaces to study", and schemes to help them are dropped "when the funding dried up". In Source B, very few costermongers' children go to school at all: they are sent out in the evenings to sell nuts and oranges, and the only education they get is what "the streets afford".`,
            },
            markScheme: {
              'How it is marked (4 marks)': Q1_5_MARKING,
              'Details you might bring together': [
                'Source A: poverty, housing insecurity and parental stress; no books, tutors or quiet places to study; initiatives abandoned when the money runs out; too few staff with time to notice who is struggling.',
                'Source B: very few go even to the free Ragged Schools; parents send them there to be minded, not to learn; they work in the evenings selling nuts and oranges; the streets are their only teacher.',
              ],
            },
          },
          {
            id: 'wjec-c2-02-q6',
            questionNumber: 6,
            label: '1.6',
            questionText: `Source A and Source B are both about the education of poor children.\n\nCompare:\n• what the writers say about the education of poor children\n• how they get their ideas across.\n\nUse evidence from both texts, and make clear which text each point comes from. [10]`,
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'comparison',
            extract: `Source A:\n${EDUCATION_21C}\n\nSource B:\n${EDUCATION_19C}`,
            extractSource: `Source A: ${EDUCATION_21C_REF} | Source B: ${EDUCATION_19C_REF}`,
            modelAnswers: {
              'Grade 8-9': `Both writers argue that poor children are let down by the adults and institutions around them, but the writer of Source A sees them from inside a classroom, while Mayhew, in Source B, looks at them from outside, as an investigator.\n\nThe problem each describes is different. In Source A the children are in school, but they arrive unequal: some "bounce through the gates", while others come in "shoes that are slightly too big or slightly too small". The problem is a gap in attainment, caused by "poverty, housing insecurity, parental stress". In Source B the children are hardly in school at all. Very few "are sent even to the Ragged Schools", and their real teacher is the street, which gives them "a precocious acuteness" and "a craving for the excitement of gambling". So the modern writer worries about unequal schooling, while Mayhew worries about almost no schooling.\n\nThey also place the blame differently. The writer of Source A blames those in power for a lack of will ("What we lack is not understanding but will") and for initiatives "quietly abandoned when the funding dried up". Mayhew points first at the parents, who send children to school only so that "the mother may be saved the trouble of tending them at home", although they are "kind to their children"; in his final paragraph he widens the blame to all of us: the boys will "educate themselves in vice, if we neglect to train them to virtue".\n\nTheir methods suit their purposes. The writer of Source A uses personal experience ("I have taught for twenty-two years"), close observation of individual children and a patterned sentence, "ambition without resource is just aspiration, and aspiration without action is just words", to make the reader demand action. Mayhew reports on a whole class of children, building up their character in long lists: "a patient endurance of cold and hunger; a desire to obtain money without working for it". His tone is more alarmed. Where the modern writer ends with the gentle hope of "someone who has time to notice when they are struggling", Mayhew ends with a warning that neglected boys will learn "to indulge in the gratification of every appetite without the least restraint".\n\nBoth, then, want their readers to act, but Source A appeals to compassion for the struggling child, while Source B appeals at least as much to fear of what the neglected child will become.`,
            },
            markScheme: {
              'How it is marked (10 marks)': Q1_6_MARKING,
              'Points you might make': [
                'What they say: Source A describes children in school but unequal; Source B describes children barely in school at all, taught by the streets.',
                `Blame: Source A blames a lack of will and funding ("What we lack is not understanding but will"); Source B blames the parents' indifference to learning, then society ("if we neglect to train them to virtue").`,
                'Viewpoint: Source A is a teacher writing from experience and observing individuals; Source B is an investigator describing a whole class of children.',
                `Methods: Source A uses contrast, the inclusive "We" and patterned sentences; Source B uses long lists of the qualities the streets teach.`,
                `Tone and endings: Source A ends with compassion ("someone who has time to notice when they are struggling"); Source B ends with alarm ("without the least restraint").`,
              ],
            },
          },
        ],
      },
      {
        id: 'wjec-c2-02-writing',
        title: 'Section B: Writing',
        description: SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-02-q7',
            questionNumber: 1,
            label: '2.1',
            questionText: `Your school governors want to know how the school could better support pupils from families who have little money.\n\nWrite a report for the governors giving your suggestions. [20]`,
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Report to the Board of Governors: supporting pupils from families with little money\n\nIntroduction\nThis report was written at the governors' request. It considers how well the school supports pupils whose families have little money, and recommends four changes. In preparing it, I spoke to members of the student council and to several form tutors.\n\nThe present position\nThe school already does a great deal. Free school meals are provided, and the homework club gives pupils a quiet place to work after lessons. However, many pupils told me that some costs are hard to meet: school trips, revision guides, and the materials needed for subjects such as art and technology. Several said that they feel embarrassed to ask for help, and so they go without.\n\nRecommendations\n1. A breakfast club. Pupils cannot learn well when they are hungry. A free breakfast club, open to everyone so that no one is singled out, would give every pupil a good start to the day.\n2. A hardship fund that is easy to use. Families should be able to ask privately for help with trips and materials, through a simple online form, rather than by speaking to a teacher in front of others.\n3. A lending library of revision guides. Guides could be bought in sets and lent out like library books, so that no pupil is held back because a family cannot afford them.\n4. More time for tutors. Tutors know their pupils best. A short meeting with each tutee every week would help them to notice when someone is struggling, and to act before small problems become large ones.\n\nCost\nSome of these ideas cost very little. The library and the online form need only staff time to set up. The breakfast club would need funding, but local businesses and the parents' association may be willing to help.\n\nConclusion\nNo pupil should miss an opportunity because of money. I recommend that the governors begin with the breakfast club and the hardship fund, which would make the greatest difference most quickly, and review the other proposals next term.`,
            },
            markScheme: {
              'How it is marked (20 marks)': WRITING_MARKING,
              'What earns marks in this task': [
                'The features of a report: a title, an introduction that states its purpose, clear sections or headings, and recommendations.',
                'A formal, impersonal tone suited to school governors.',
                'Practical suggestions, each developed with reasons, that consider cost and how they would work.',
                'Accurate spelling, punctuation and grammar, with varied sentences and well-chosen words: 8 of the 20 marks are for this.',
              ],
            },
          },
          {
            id: 'wjec-c2-02-q8',
            questionNumber: 2,
            label: '2.2',
            questionText: `"Every child deserves the same quality of education, regardless of where they live or how much money their parents earn."\n\nWrite an article for a national newspaper giving your views on this statement. [20]`,
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Postcode lottery: why every child deserves a fair start\n\nTwo children are born on the same day in the same city. One grows up in a leafy suburb, in a house full of books, with parents who can afford tutors and music lessons. The other grows up three miles away, in a flat with nowhere quiet to do homework. By the time they are sixteen, their results will probably be very different. Is that because one is more talented? Almost certainly not.\n\nI believe that every child deserves the same quality of education, wherever they live and whatever their parents earn. It is a simple principle, and we are still a long way from meeting it.\n\nOf course, no two schools will ever be exactly alike, and nobody wants every classroom to be the same. Different schools have different strengths, and that is healthy. But there is a difference between variety and unfairness. When one school can offer three foreign languages and a full orchestra, while another cannot find a permanent physics teacher, the children in the second school are being given less, through no choice of their own.\n\nSome people argue that parents who work hard should be free to spend their money on their children's education. That is understandable. But a child's chances should not depend on an accident of birth. Talent is spread evenly across the country; opportunity is not.\n\nSo what would fairness look like? It would mean sending the best teachers, and the most money, to the schools that face the greatest challenges. It would mean free tutoring for pupils who fall behind, so that extra help is not something only some families can buy. And it would mean making sure that every school, in every town, can offer the subjects that open doors to university and to good jobs.\n\nNone of this is impossible. It is a matter of choosing to treat every child's future as equally valuable.\n\nTwo children, born on the same day, deserve the same chance. At the moment, they do not get it.`,
            },
            markScheme: {
              'How it is marked (20 marks)': WRITING_MARKING,
              'What earns marks in this task': [
                'The features of an article: a headline, an opening that draws the reader in, and paragraphs that build an argument to a clear ending.',
                'A tone that suits readers of a national newspaper: lively and persuasive, but controlled.',
                'A clear view on the statement, developed with reasons and examples, perhaps answering those who disagree.',
                'Accurate spelling, punctuation and grammar, with varied sentences and well-chosen words: 8 of the 20 marks are for this.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 03: TRAVEL
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c2-03',
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
        id: 'wjec-c2-03-reading',
        title: 'Section A: Reading',
        description: SECTION_A_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-03-q1',
            questionNumber: 1,
            label: '1.1',
            questionText: `Read Source A, the 21st-century text, and answer the questions below.\n\n(a) On which train journey does the writer notice the landscape change? [1]\n(b) How long is the Ceredigion coast path? [1]\n(c) On how many of the five days that the writer spent on the path was the rain relentless? [1]`,
            marks: 3,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: `Source A:\n${TRAVEL_21C}\n\nSource B:\n${TRAVEL_19C}`,
            extractSource: `Source A: ${TRAVEL_21C_REF} | Source B: ${TRAVEL_19C_REF}`,
            modelAnswers: {
              'Grade 4-5': `(a) The journey from Shrewsbury to Aberystwyth.\n(b) Sixty miles.\n(c) Four.`,
            },
            markScheme: {
              'How it is marked (3 marks)': SHORT_A_MARKING,
              Answers: [
                '(a) From Shrewsbury to Aberystwyth (accept: about forty minutes into that journey).',
                '(b) Sixty miles (accept: from Cardigan to Ynyslas, sixty miles).',
                '(c) Four.',
              ],
            },
          },
          {
            id: 'wjec-c2-03-q2',
            questionNumber: 2,
            label: '1.2',
            questionText: `Source A is a piece of travel writing about walking in Wales. The writer wants to show readers why walking in wild weather can be worth the discomfort.\n\nHow does the writer try to do this?\n\nIn your answer, comment on:\n• what the writer says\n• the writer's choice of language and tone\n• how the piece is structured, and any other methods the writer uses.\n\n[10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${TRAVEL_21C}`,
            extractSource: TRAVEL_21C_REF,
            modelAnswers: {
              'Grade 8-9': `The writer begins with a single moment that marks a border: "about forty minutes into the train journey", the landscape "changes so completely that it feels like crossing into another country". This makes Wales feel strange and exciting before the walk has even begun. The contrast between "The gentle English farmland" and "something wilder, older, less tamed" uses three comparatives to make the Welsh landscape seem ancient and untamed, and the sky above the hills is given three adjectives, "vast, indifferent, magnificent". The word "indifferent" matters, because it introduces the idea that nature does not care about the walker, which becomes the main point of the piece.\n\nThe second paragraph undercuts the reader's expectations with humour. The writer packed "a vague hope that the Welsh weather might cooperate", and the short sentence that follows, "It did not.", is a deadpan anticlimax that makes the reader smile. The writer then makes the rain physical and hostile. It was "relentless", and the contrast between "the gentle drizzle of popular imagination" and "hard, horizontal rain that found every gap in every layer" makes it almost a living thing hunting for a way in. By admitting that it "soaked me to the skin within an hour", the writer is honest about the discomfort, which makes the turn that follows more convincing.\n\nThat turn opens the last paragraph. "And yet" changes the tone from complaint to joy: "I cannot remember the last time I felt so alive." The writer explains this through a contrast between nature and modern life. The landscape "has no interest whatsoever in your comfort", and walking in such a place "strips away the accumulated nonsense of daily life", a dismissive phrase for "The emails, the deadlines, the endless performative busyness". The second person "you" draws the reader into the experience of "standing on a cliff edge with the wind roaring in your ears", and the violent verbs "roaring" and "smashing" make the scene thrilling rather than frightening.\n\nThe ending is gently comic again. Two short sentences imagine nature with modern concerns only to deny them: "The path does not care about your to-do list. The sea does not check its phone." This makes everyday worries seem small. The final sentence slows down with the adverbs "slowly, reluctantly" and ends on the plain words "to simply be", so the piece itself comes to rest, as the writer did.`,
            },
            markScheme: {
              'How it is marked (10 marks)': Q1_2_MARKING,
              'Points you might make': [
                `The opening moment of crossing "into another country" and the contrast with "The gentle English farmland" make Wales wild and exciting; "indifferent" introduces the main idea.`,
                `Humour and honesty: "a vague hope that the Welsh weather might cooperate" followed by the deadpan "It did not."`,
                `The rain is made hostile: "hard, horizontal rain that found every gap in every layer"; "soaked me to the skin within an hour".`,
                `"And yet" turns the piece from complaint to joy: "I cannot remember the last time I felt so alive."`,
                `The contrast with modern life ("the accumulated nonsense of daily life") and the second person "you" draw the reader in; "roaring" and "smashing" make the scene thrilling.`,
                `The comic short sentences ("The sea does not check its phone.") and the slow final sentence ending "to simply be".`,
              ],
            },
          },
          {
            id: 'wjec-c2-03-q3',
            questionNumber: 3,
            label: '1.3',
            questionText: `Read Source B, the 19th-century text, and answer the questions below.\n\n(Henrietta was Borrow's stepdaughter. The Wyddfa is the summit of Snowdon; "moels" are bare, rounded hills; a "dyffrin" is a valley.)\n\n(a) Why did Borrow's wife not climb the mountain with them? [1]\n(b) As the path grew steeper, what was Borrow afraid that Henrietta would have to do? [1]\n(c) According to Borrow, what is sold in the cabin on the summit? [1]`,
            marks: 3,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: `Source B:\n${TRAVEL_19C}`,
            extractSource: TRAVEL_19C_REF,
            modelAnswers: {
              'Grade 4-5': `(a) She did not think she was strong enough for such a tiring climb.\n(b) Give up the climb.\n(c) Refreshments.`,
            },
            markScheme: {
              'How it is marked (3 marks)': SHORT_B_MARKING,
              Answers: [
                '(a) She did not think herself strong enough to cope with the tiring climb.',
                `(b) Give up the attempt (accept: turn back before the top). He was afraid that she "would be obliged to give over the attempt".`,
                '(c) Refreshments.',
              ],
            },
          },
          {
            id: 'wjec-c2-03-q4',
            questionNumber: 4,
            label: '1.4',
            questionText: `Read Source B again.\n\nA student said: ‘In this account, the climb itself matters less to Borrow than the view from the top.’\n\nHow far do you agree with this view?\n\nIn your answer, give your own view of how Borrow presents the climb and the summit across the whole text, and explain how his choices of words and details create that view. Support your answer with references to the text. [10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'evaluation',
            extract: `Source B:\n${TRAVEL_19C}`,
            extractSource: TRAVEL_19C_REF,
            modelAnswers: {
              'Grade 8-9': `I mostly agree. Borrow gives the climb some space and some drama, but his language is plainest when he describes the path and richest when he describes the view, which suggests where his real interest lies.\n\nHe opens briskly and practically: they "got down at a small inn", engaged "a young lad to serve as guide", and his wife stayed behind, "not deeming herself sufficiently strong to encounter the fatigue of the expedition". The formal phrasing makes the climb sound like a serious undertaking, but the first stage is easy. The path "was remarkably good", the ascent "anything but steep", and they share it with "groups of people, or single individuals", which makes Snowdon seem busy rather than wild. Much of this part is a list of names, "Moel Elia" and "Moel y Cynghorion", given more as information than as experience.\n\nThe middle of the climb is where the statement is weakest. Borrow admits that they were "rather out of breath", the small lake near them "lay dark and deep, just under the great wall", a faintly threatening image, and the path becomes "winding and much more steep". He even feared that Henrietta "would be obliged to give over the attempt", and praises "the gallant girl" who "persevered". The phrase "safe and sound, though panting" makes their arrival a small triumph. So the climb does matter: it gives the account its tension and shows Borrow's pride in his companion.\n\nYet the summit and the view take up the most space and the most elaborate language. Borrow describes the "frightful precipices" below the summit on every side but the west, and the vale "nearly a mile below", then piles up the view in a long list: "a considerable part of the mainland of Wales, the whole of Anglesey, a faint glimpse of part of Cumberland". The repeated "There we stood" gives the moment a ceremonial rhythm, and the scene is "inexpressibly grand". The alliteration of "Peaks and pinnacles" and the contrast "partly in glorious light, partly in deep shade" make the mountains dramatic, and the account ends on the lakes, "like sheets of ice or polished silver". Ending on this image of light and beauty shows that the view is the reward the whole climb has been leading to.\n\nThe climb matters to Borrow as a test, above all of Henrietta, but the statement is largely right: it is the view, and above all its lakes, that "filled us with delight and admiration".`,
            },
            markScheme: {
              'How it is marked (10 marks)': Q1_4_MARKING,
              'Points you might make': [
                `The start is practical and the first stage easy: the path "was remarkably good", the ascent "anything but steep", the hill busy with "groups of people".`,
                `The climb has tension: "rather out of breath", the lake that "lay dark and deep", a path "winding and much more steep", and the fear for Henrietta.`,
                `Pride in Henrietta ("the gallant girl, however, persevered") and the arrival "safe and sound, though panting" show that the climb matters too.`,
                `The view gets the richest language: the long list of what can be seen, "There we stood", "inexpressibly grand", "Peaks and pinnacles".`,
                `The account ends on the lakes "like sheets of ice or polished silver", a sign of where his interest lies.`,
                'A strong answer reaches a judgement on the statement and keeps to it through the whole passage.',
              ],
            },
          },
          {
            id: 'wjec-c2-03-q5',
            questionNumber: 5,
            label: '1.5',
            questionText: `Bring together details from both texts to explain briefly what the weather was like for each writer, and how it affected them. Make clear which text each detail comes from. [4]`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'summary',
            extract: `Source A:\n${TRAVEL_21C}\n\nSource B:\n${TRAVEL_19C}`,
            extractSource: `Source A: ${TRAVEL_21C_REF} | Source B: ${TRAVEL_19C_REF}`,
            modelAnswers: {
              'Grade 4-5': `In Source A the weather was bad: on four of the five days the rain was "relentless", and it "soaked me to the skin within an hour". Yet the wild weather made the writer feel "so alive". In Source B the day was "almost stiflingly hot" below the mountain, but the summit had "a cold bracing atmosphere", and the sun lit up the view, so the weather added to their "delight and admiration".`,
            },
            markScheme: {
              'How it is marked (4 marks)': Q1_5_MARKING,
              'Details you might bring together': [
                'Source A: hard, horizontal rain on four days out of five, soaking the writer within an hour; yet walking in wild weather made the writer feel more alive than for a long time.',
                'Source B: a hot day below the mountain and a cold, bracing summit; the sun lit the view and the lakes, which filled Borrow and Henrietta with delight.',
              ],
            },
          },
          {
            id: 'wjec-c2-03-q6',
            questionNumber: 6,
            label: '1.6',
            questionText: `Source A and Source B are both about walking in the Welsh landscape.\n\nCompare:\n• what the writers say about their experiences of the landscape\n• how they get their ideas across.\n\nUse evidence from both texts, and make clear which text each point comes from. [10]`,
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'comparison',
            extract: `Source A:\n${TRAVEL_21C}\n\nSource B:\n${TRAVEL_19C}`,
            extractSource: `Source A: ${TRAVEL_21C_REF} | Source B: ${TRAVEL_19C_REF}`,
            modelAnswers: {
              'Grade 8-9': `Both writers find something uplifting in the Welsh landscape, but the writer of Source A values its wildness and indifference, while Borrow, in Source B, values its grandeur and the achievement of reaching the top.\n\nWhat they experience is very different. The writer of Source A walks a coast path for five days in terrible weather: the rain was "relentless", "hard, horizontal rain that found every gap in every layer". Borrow climbs Snowdon on a single fine day, along a path that was "remarkably good" for much of the way, and stands at the top in "a cold bracing atmosphere". The modern writer's reward is a feeling, "I cannot remember the last time I felt so alive"; Borrow's reward is a sight, "a scene inexpressibly grand".\n\nThey also see the landscape differently. For the writer of Source A, the land's power lies in not caring: it "has no interest whatsoever in your comfort", and the sky is "vast, indifferent, magnificent". This indifference is a relief from "the accumulated nonsense of daily life". Borrow does not set the mountain against everyday life; he treats it as a spectacle to be measured and named. He lists what can be seen, "the whole of Anglesey, a faint glimpse of part of Cumberland", and names the hills, "Moel Elia" and "Moel y Cynghorion", as a guidebook might.\n\nTheir methods reflect this. Source A is reflective and often humorous, using short sentences for effect ("It did not.") and the second person ("The path does not care about your to-do list"), and it turns on "And yet" from discomfort to joy. Borrow writes a narrative in time order, in long, balanced sentences, and builds tension as the path grows "winding and much more steep" and he fears that Henrietta "would be obliged to give over the attempt". His descriptions are more ornate, as in the lakes "like sheets of ice or polished silver", whereas the most vivid image in Source A is the sea "smashing itself against the rocks below".\n\nBoth writers, then, present the landscape as something that lifts the spirit, but Source A finds freedom in being battered by nature, while Borrow finds delight in looking down on it from above.`,
            },
            markScheme: {
              'How it is marked (10 marks)': Q1_6_MARKING,
              'Points you might make': [
                'Experiences: five days of rain on a coast path (Source A); one fine day climbing Snowdon with Henrietta and a guide (Source B).',
                `Rewards: a feeling of being "so alive" (Source A); a view "inexpressibly grand" (Source B).`,
                `Attitudes: Source A values nature's indifference ("has no interest whatsoever in your comfort"); Source B treats the mountain as a spectacle to be named and surveyed.`,
                `Methods: Source A uses humour, short sentences, the second person and a turn on "And yet"; Source B uses a narrative in time order, long sentences and rich description.`,
                'Both end on calm: Source A on remembering what it feels like "to simply be", Source B on the lakes shining in the sun.',
              ],
            },
          },
        ],
      },
      {
        id: 'wjec-c2-03-writing',
        title: 'Section B: Writing',
        description: SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-03-q7',
            questionNumber: 1,
            label: '2.1',
            questionText: `A travel magazine is asking its readers to write about a place that made a strong impression on them.\n\nWrite an article for the magazine about such a place, persuading other readers to visit it. [20]`,
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Rhossili: the edge of the world, an hour from Swansea\n\nThe first time I saw Rhossili Bay, I stopped walking. I had followed the path from the village car park expecting a nice view. What I found was three miles of empty sand curving away beneath a steep green hill, with the long, rocky back of Worm's Head lying out at sea like a sleeping animal. I have been back every summer since, and it still stops me in my tracks.\n\nIf you go, go early. In the first hour after sunrise the beach belongs to the gulls and the occasional dog walker, and the only sound is the hiss of the waves. The sand is so wide and flat that people far below look like specks on a page. At the southern end of the beach, the blackened ribs of an old shipwreck rise out of the sand at low tide, a reminder of how fierce this coast can be.\n\nFor the adventurous, there is Worm's Head itself. A rocky causeway opens for a few hours around low tide, and you can scramble out across it to the island. Check the tide times carefully before you set off: the sea closes the causeway quickly, and visitors who forget can be cut off for hours. Respect the tides, though, and the reward is a wild, wind-blown walk with seals bobbing in the water below.\n\nIf you prefer to stay on dry land, climb Rhossili Down behind the bay. The path is steep, but from the top you can see the whole beach, the Head, and on a clear day the coast of Devon across the water. Bring a flask and sit among the heather; you will not want to leave.\n\nRhossili is not a place of attractions. There are no fairground rides, no arcades and no queues. What it offers is space, light and the feeling of standing at the edge of the land. In a busy world, that is rarer than it should be, and worth the journey.\n\nSo pack your walking boots and a waterproof, because this is Wales, and go. You may find, as I did, that one visit is not enough.`,
            },
            markScheme: {
              'How it is marked (20 marks)': WRITING_MARKING,
              'What earns marks in this task': [
                'The features of a magazine article: a headline, an opening that draws the reader in, and paragraphs that each develop one part of the place.',
                "A lively, personal tone that suits a magazine's readers, with direct address to persuade them.",
                'Precise, vivid detail that makes the place real, and practical advice that shows real knowledge of it.',
                'Accurate spelling, punctuation and grammar, with varied sentences and well-chosen words: 8 of the 20 marks are for this.',
              ],
            },
          },
          {
            id: 'wjec-c2-03-q8',
            questionNumber: 2,
            label: '2.2',
            questionText: `"Young people today spend too much time looking at screens and not enough time experiencing the natural world."\n\nYour school is holding a debate on this statement. Write a speech for the debate giving your views. [20]`,
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Good afternoon, everyone.\n\nI would like to begin with a question. When did you last spend a whole afternoon outdoors, with no phone in your pocket? For some of you, the answer will be last weekend. For many of us, if we are honest, it is hard to remember.\n\nI agree with the statement, but not because I think screens are evil. I am speaking to you, after all, from notes I typed on a laptop. Screens let us learn, create and keep in touch with friends who live far away. My argument is not that we should give them up. It is that we have let them take up space that used to belong to something else.\n\nThink about how a screen holds your attention. Every video ends with another one waiting. Every message invites a reply. These things are designed to keep us looking, and they are very good at it. The natural world works differently. A wood or a beach does not compete for your attention; it waits for you to notice it. That is exactly why so many of us never do.\n\nAnd we are missing a great deal. Ask anyone who has watched the sun come up over a hill, or swum in cold sea water, or simply sat by a river, and they will tell you how much calmer they felt afterwards. Being outside lets our minds rest in a way that scrolling never does. It also gives us something screens cannot: the feeling of being small in a big world, which puts our worries in their place.\n\nSome will say that young people have no choice, that homework, clubs and busy parents leave no time for walks in the countryside. But the natural world is not only in national parks. It is in the local park, the canal towpath, the patch of trees behind the leisure centre. Twenty minutes there is a start.\n\nSo here is my challenge to you. This weekend, put your phone in a drawer for one afternoon and go outside. Notice what you hear and see. I think you will be surprised by how much you have been missing.\n\nThank you.`,
            },
            markScheme: {
              'How it is marked (20 marks)': WRITING_MARKING,
              'What earns marks in this task': [
                'The features of a speech for a debate: a greeting, a clear statement of your view, direct address and questions to the audience, and a strong ending.',
                'A tone that suits fellow pupils: persuasive and confident, perhaps with some humour, but never mocking.',
                'A clear view on the statement, developed with reasons and examples, answering the arguments of the other side.',
                'Accurate spelling, punctuation and grammar, with varied sentences and well-chosen words: 8 of the 20 marks are for this.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 04: TECHNOLOGY
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c2-04',
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
        id: 'wjec-c2-04-reading',
        title: 'Section A: Reading',
        description: SECTION_A_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-04-q1',
            questionNumber: 1,
            label: '1.1',
            questionText: `Read Source A, the 21st-century text, and answer the questions below.\n\n(a) In which city is the school that introduced the marking software? [1]\n(b) How long does the software take to assess a GCSE English essay? [1]\n(c) Give one thing that, according to the writer, an algorithm cannot do. [1]`,
            marks: 3,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: `Source A:\n${TECHNOLOGY_21C}\n\nSource B:\n${TECHNOLOGY_19C}`,
            extractSource: `Source A: ${TECHNOLOGY_21C_REF} | Source B: ${TECHNOLOGY_19C_REF}`,
            modelAnswers: {
              'Grade 4-5': `(a) Cardiff.\n(b) About ninety seconds.\n(c) It cannot see the human being behind the handwriting.`,
            },
            markScheme: {
              'How it is marked (3 marks)': SHORT_A_MARKING,
              Answers: [
                '(a) Cardiff.',
                '(b) About ninety seconds.',
                "(c) Any one of: notice what is special or different in a student's work; ask a student what has happened; see the human being behind the handwriting.",
              ],
            },
          },
          {
            id: 'wjec-c2-04-q2',
            questionNumber: 2,
            label: '1.2',
            questionText: `Source A is an opinion article about technology in schools. The writer wants to persuade readers that a machine cannot replace a human teacher.\n\nHow does the writer try to do this?\n\nIn your answer, comment on:\n• what the writer says\n• the writer's choice of language and tone\n• how the article is structured, and any other methods the writer uses.\n\n[10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${TECHNOLOGY_21C}`,
            extractSource: TECHNOLOGY_21C_REF,
            modelAnswers: {
              'Grade 8-9': `The writer begins with news rather than opinion. The first paragraph reports that a school in Cardiff "became the first in Wales" to use "AI-powered marking software", and the precise detail "approximately ninety seconds" makes the technology sound impressively fast. However, the aside "its creators claim" casts doubt on whether it can really judge "the quality of argument", and the paragraph ends with a short, understated sentence: "Several of her colleagues were less enthusiastic." The writer lets the reader sense the disagreement before taking a side.\n\nThe second paragraph answers an objection before it is made. The short statement "I am not a Luddite" heads off the charge that the writer simply fears change, and technology is given credit: it has transformed education "in ways that are overwhelmingly positive", and online resources have "democratised access to knowledge". This concession makes the writer seem fair, which strengthens the criticism that follows "But": "there is a difference between technology that supports learning and technology that replaces the human relationships at its heart." The repetition of "technology that" sharpens the contrast, and "at its heart" suggests that relationships are the living centre of education.\n\nThe final paragraph turns to the writer's own experience. Marking, we learn, is more than it seems: "I am not merely checking for errors." The list "for voice, for personality, for the particular way that this particular student sees the world" builds up the idea that each student is unique, and the repetition of "particular" stresses it. Two small portraits follow, "the quiet girl in the third row" and "the boy who never stops talking", and their surprising work, "a paragraph of startling originality" and "something unexpectedly tender", gives the reader a moment of warmth that no machine could share.\n\nThe writer then drives the point home with three sentences built on the same word, "cannot": "An algorithm cannot notice these things. It cannot say ... It cannot see the human being behind the handwriting." The imagined words of a teacher, "This is different from your usual work - tell me what happened", show the kind of care only a person can offer. The conclusion widens from the classroom to everyone with the inclusive "we": "if we lose that, we lose something that no amount of efficiency can replace." Ending on "efficiency" turns the machine's great strength into something that seems cold and small beside human understanding.`,
            },
            markScheme: {
              'How it is marked (10 marks)': Q1_2_MARKING,
              'Points you might make': [
                `The news-like opening ("approximately ninety seconds") is undercut by "its creators claim" and the understated "Several of her colleagues were less enthusiastic."`,
                `A concession ("I am not a Luddite"; "overwhelmingly positive") makes the writer seem fair before the turn on "But".`,
                `The contrast "technology that supports learning and technology that replaces the human relationships at its heart".`,
                `The list "for voice, for personality, for the particular way that this particular student sees the world" and the two portraits of pupils show what a human marker notices.`,
                `The repeated "It cannot" builds to a climax, and the imagined words "tell me what happened" show human care.`,
                `The ending sets human understanding against "efficiency", with the inclusive "we".`,
              ],
            },
          },
          {
            id: 'wjec-c2-04-q3',
            questionNumber: 3,
            label: '1.3',
            questionText: `Read Source B, the 19th-century text, and answer the questions below.\n\n(Source B is by the American writer Henry David Thoreau. Maine and Texas are states at opposite ends of the United States; the "magnetic telegraph" sent messages along wires; the Princess Adelaide is Thoreau's example of royal gossip; Flying Childers was a famous racehorse; an "evangelist" brings good news, and the man who came "eating locusts and wild honey" is John the Baptist, the messenger in the Bible who announced the coming of Jesus. "Are wont to be" means usually are; "perchance" means perhaps; a "peck" is a small measure of grain.)\n\n(a) According to Thoreau, what are our inventions usually like? [1]\n(b) Why might the telegraph from Maine to Texas be of little use, according to Thoreau? [1]\n(c) What does Thoreau mean when he says that inventions are "but improved means to an unimproved end"? [1]`,
            marks: 3,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: `Source B:\n${TECHNOLOGY_19C}`,
            extractSource: TECHNOLOGY_19C_REF,
            modelAnswers: {
              'Grade 4-5': `(a) Pretty toys that take our minds off serious things.\n(b) Maine and Texas may have nothing important to say to each other.\n(c) They are only better ways of reaching the same goals, and the goals themselves have not got any better.`,
            },
            markScheme: {
              'How it is marked (3 marks)': SHORT_B_MARKING,
              Answers: [
                '(a) Pretty toys that distract us from serious things.',
                '(b) The two places may have nothing important to tell each other.',
                '(c) They are better ways of doing things, but what we use them for is no better (accept: they help us do the same old things faster).',
              ],
            },
          },
          {
            id: 'wjec-c2-04-q4',
            questionNumber: 4,
            label: '1.4',
            questionText: `Read Source B again.\n\nA student said: ‘Thoreau mocks the new inventions of his time so much that he gives them no credit at all.’\n\nHow far do you agree with this view?\n\nIn your answer, give your own view of how Thoreau presents new inventions across the whole text, and explain how his choices of words and details create that view. Support your answer with references to the text. [10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'evaluation',
            extract: `Source B:\n${TECHNOLOGY_19C}`,
            extractSource: TECHNOLOGY_19C_REF,
            modelAnswers: {
              'Grade 8-9': `I partly agree. Mockery is Thoreau's main weapon, and he gives the inventions of his day very little praise, but his criticism is aimed less at the machines themselves than at the purposes people use them for.\n\nHe begins with a measured claim rather than an attack. "Modern improvements" is placed in quotation marks, as if the phrase were someone else's boast, and he says only that "there is an illusion about them; there is not always a positive advance". The words "not always" are a small concession: some improvements may be real. The image of the devil "exacting compound interest" is more scornful, suggesting that every new invention brings hidden costs that keep growing.\n\nHis central judgement is more balanced than it first appears. Calling inventions "pretty toys, which distract our attention from serious things" is mockery, but the next sentence admits that they are "improved means to an unimproved end". He accepts that the means, the railways and the telegraph, really are improved; what has not improved is the purpose they serve. So he does give the inventions some credit, while denying that they make life better.\n\nThe rest of the passage uses humour to make this point. The telegraph "from Maine to Texas", whose two ends may "have nothing important to communicate", is deflating, and the comparison with the man introduced to "a distinguished deaf woman" who then "had nothing to say" turns technology into a comic story. The short sentence "As if the main object were to talk fast and not to talk sensibly" sums up his attack on speed for its own sake. His mockery of the plan to "tunnel under the Atlantic" is sharper still: the "broad, flapping American ear" may hear first that "the Princess Adelaide has the whooping cough", so the great achievement carries only gossip.\n\nThe ending measures speed against worth. The rider whose horse "trots a mile in a minute" does not carry "the most important messages": he "is not an evangelist", a bringer of good news, nor the prophet "eating locusts and wild honey". The last dry remark, "I doubt if Flying Childers ever carried a peck of corn to mill", suggests that speed is admired but seldom useful.\n\nOverall, the statement is too strong. Thoreau mocks the way people value their inventions, but by admitting that they are "improved means", he shows that his quarrel is with what we do with them, not with the inventions alone.`,
            },
            markScheme: {
              'How it is marked (10 marks)': Q1_4_MARKING,
              'Points you might make': [
                `The opening is measured: "there is not always a positive advance" concedes that some improvement may be real.`,
                `Mockery: "pretty toys, which distract our attention from serious things"; yet "improved means to an unimproved end" admits that the means are better.`,
                `Comic examples deflate the inventions: Maine and Texas with "nothing important to communicate", the man with "nothing to say", the whooping cough news.`,
                `The short sentence "As if the main object were to talk fast and not to talk sensibly" states his real target.`,
                'The ending sets speed against importance: the fastest horse does not carry the most important messages.',
                'A strong answer reaches a judgement on the statement, whether agreeing, disagreeing or agreeing in part, and keeps to it through the whole passage.',
              ],
            },
          },
          {
            id: 'wjec-c2-04-q5',
            questionNumber: 5,
            label: '1.5',
            questionText: `Bring together details from both texts to explain briefly what each writer thinks new technology cannot do. Make clear which text each detail comes from. [4]`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'summary',
            extract: `Source A:\n${TECHNOLOGY_21C}\n\nSource B:\n${TECHNOLOGY_19C}`,
            extractSource: `Source A: ${TECHNOLOGY_21C_REF} | Source B: ${TECHNOLOGY_19C_REF}`,
            modelAnswers: {
              'Grade 4-5': `In Source A, the writer says that marking software cannot notice what is special in a student's work, such as "a paragraph of startling originality", and "cannot see the human being behind the handwriting". In Source B, Thoreau says that inventions cannot improve the purposes they serve, being only "improved means to an unimproved end", and that a telegraph cannot give people anything important to say: Maine and Texas may "have nothing important to communicate".`,
            },
            markScheme: {
              'How it is marked (4 marks)': Q1_5_MARKING,
              'Details you might bring together': [
                "Source A: software cannot notice a student's voice or a sudden change in their work, cannot ask what has happened, and cannot see the person behind the handwriting; it cannot replace the relationships at the heart of learning.",
                'Source B: inventions cannot make the purpose they serve any better; a telegraph cannot give people something worth saying; speed does not carry the most important messages.',
              ],
            },
          },
          {
            id: 'wjec-c2-04-q6',
            questionNumber: 6,
            label: '1.6',
            questionText: `Source A and Source B are both about new technology.\n\nCompare:\n• what the writers say about new technology and what it may cost us\n• how they get their ideas across.\n\nUse evidence from both texts, and make clear which text each point comes from. [10]`,
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'comparison',
            extract: `Source A:\n${TECHNOLOGY_21C}\n\nSource B:\n${TECHNOLOGY_19C}`,
            extractSource: `Source A: ${TECHNOLOGY_21C_REF} | Source B: ${TECHNOLOGY_19C_REF}`,
            modelAnswers: {
              'Grade 8-9': `Both writers are wary of new technology, but the writer of Source A worries about one kind of machine replacing human care, while Thoreau, in Source B, doubts whether the inventions of his age improve life at all.\n\nThey value technology differently. The writer of Source A accepts its benefits openly: it has transformed education "in ways that are overwhelmingly positive" and "democratised access to knowledge". The objection is narrow, to "technology that replaces the human relationships at its heart". Thoreau is more sweeping. Inventions are "pretty toys, which distract our attention from serious things", and even the telegraph is one of the "improved means to an unimproved end". For him the problem is not one machine but the belief that faster is better.\n\nThey also differ in what they think we may lose. In Source A the cost is human attention: a teacher notices "the quiet girl in the third row" and can say "tell me what happened", whereas "An algorithm cannot notice these things". The loss is something "that no amount of efficiency can replace". In Source B the cost is good sense: people are so eager to communicate quickly that they forget to ask whether they have anything to say, "As if the main object were to talk fast and not to talk sensibly".\n\nTheir methods differ in tone. The writer of Source A argues earnestly and personally, using the first person ("When I mark a student's essay"), small portraits of pupils and the repeated "It cannot" to build to an emotional climax. Thoreau uses wit. His story of the man with "nothing to say" to a deaf woman, and the image of the "broad, flapping American ear" receiving news that "the Princess Adelaide has the whooping cough", make the inventions look ridiculous rather than dangerous.\n\nBoth writers end by measuring technology against something they value more. Source A sets human understanding against "efficiency"; Thoreau sets speed against importance, noting that the fastest rider "does not carry the most important messages". But Source A wants to protect something it already values, while Thoreau wants his readers to question the whole idea of progress.`,
            },
            markScheme: {
              'How it is marked (10 marks)': Q1_6_MARKING,
              'Points you might make': [
                `Source A welcomes much of technology ("overwhelmingly positive") and objects only to machines that replace people; Source B doubts that inventions improve life ("improved means to an unimproved end").`,
                `What may be lost: human attention and care in Source A ("An algorithm cannot notice these things"); good sense in Source B ("to talk fast and not to talk sensibly").`,
                `Source A argues earnestly from experience, with portraits of pupils and the repeated "It cannot"; Source B uses wit, anecdote and absurd examples.`,
                'Both end by weighing technology against human worth: efficiency against understanding (Source A), speed against importance (Source B).',
              ],
            },
          },
        ],
      },
      {
        id: 'wjec-c2-04-writing',
        title: 'Section B: Writing',
        description: SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-04-q7',
            questionNumber: 1,
            label: '2.1',
            questionText: `Your school is considering allowing students to use AI tools to help with their homework.\n\nWrite a letter to your headteacher giving your views on this proposal. [20]`,
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Dear Mrs Hughes,\n\nI am writing in response to the proposal to allow students to use AI tools to help with homework. As a Year 11 student who uses technology every day, I would like to offer a student's view. In short, I support the idea, but only if it comes with clear rules.\n\nThere is no point pretending that these tools will go away. Many students already use them, often secretly and without any guidance. If the school allows them openly, teachers can show us how to use them well: to explain a difficult idea in a different way, to test ourselves before an exam, or to check the structure of an essay plan. Used like this, an AI tool is a patient tutor that is still available at nine o'clock at night, when no teacher is.\n\nHowever, I understand the worries. If students simply ask a tool to write their homework, they will learn nothing, and teachers will have no idea what their pupils can really do. Homework exists to help us practise, and a machine cannot practise on our behalf. There is also the question of accuracy: these tools can give answers that sound confident but are wrong, and a student who does not check will never know.\n\nI would therefore suggest three rules. First, AI tools should be allowed for planning, explaining and revising, but not for producing finished work. Second, students should say when and how they have used a tool, just as we name the sources we use in a project. Third, some homework should be done by hand or in class, so that teachers can see our own work.\n\nI believe that this approach would prepare us for the world we will work in, where such tools will be common, while protecting the skills that only practice can build. It would also be fairer, because students who use AI quietly at the moment would no longer have an advantage over those who follow the rules.\n\nThank you for taking the time to consider a student's view. I would be glad to discuss these ideas with the school council.\n\nYours sincerely,\n\nJordan Evans`,
            },
            markScheme: {
              'How it is marked (20 marks)': WRITING_MARKING,
              'What earns marks in this task': [
                'The features of a formal letter: a greeting, an opening that states your purpose, clear paragraphs and a suitable sign-off (Yours sincerely, after a named greeting).',
                'A polite, formal tone for a headteacher: confident but respectful.',
                'A clear view, developed with reasons on both the benefits and the risks, and practical suggestions.',
                'Accurate spelling, punctuation and grammar, with varied sentences and well-chosen words: 8 of the 20 marks are for this.',
              ],
            },
          },
          {
            id: 'wjec-c2-04-q8',
            questionNumber: 2,
            label: '2.2',
            questionText: `"Technology is making us less human, not more connected."\n\nWrite an article for a magazine aimed at young people giving your views on this statement. [20]`,
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Less human, or more connected? The answer is up to us\n\nMy grandmother lives two hundred miles away, and I speak to her every Sunday. I can see her face, she can see the mess in my bedroom, and we laugh at the same jokes. Twenty years ago, that weekly call would have been a short and expensive phone conversation. So when people tell me that technology is making us less human, part of me wants to hold up my phone and say: look.\n\nAnd yet I understand the worry. We have all seen a group of friends sitting round a table, each staring at a separate screen. We have all reached for a phone in the first minute of waking, before saying good morning to anyone. Technology connects us to people far away, but it can disconnect us from the people beside us.\n\nThe truth, I think, is that technology is neither good nor bad in itself. It is a tool, and like any tool it can build or damage, depending on how we use it. A video call with a lonely relative is a deeply human act. Scrolling through strangers' photographs for three hours, comparing our lives with theirs, probably is not.\n\nSo the real question is not whether technology makes us less human, but whether we let it decide how we spend our attention. Many apps are designed to keep us using them for as long as possible, because that is how they make money. If we do not choose how to use them, someone else will choose for us.\n\nHere are three small changes that have helped me. I turn off notifications for everything except messages from real people. I keep my phone out of my bedroom at night. And when I am with friends, the phones go face down on the table, and the first person to pick one up buys the snacks.\n\nNone of this means giving technology up. It means remembering that the point of being connected is the people at the other end. Used well, a screen can bring us closer. Used carelessly, it can leave us more alone than ever. The choice, in the end, is ours.`,
            },
            markScheme: {
              'How it is marked (20 marks)': WRITING_MARKING,
              'What earns marks in this task': [
                'The features of a magazine article: a headline, an engaging opening, and paragraphs that develop an argument to a clear ending.',
                'A tone that suits young readers: lively and direct, without lecturing.',
                'A clear view on the statement, developed with examples and reasons, which considers the other side.',
                'Accurate spelling, punctuation and grammar, with varied sentences and well-chosen words: 8 of the 20 marks are for this.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 05: GENDER
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c2-05',
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
        id: 'wjec-c2-05-reading',
        title: 'Section A: Reading',
        description: SECTION_A_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-05-q1',
            questionNumber: 1,
            label: '1.1',
            questionText: `Read Source A, the 21st-century text, and answer the questions below.\n\n(a) What had the women's team at the writer's local club won? [1]\n(b) According to the writer, what share of media coverage in the UK does women's sport receive? [1]\n(c) Give one way in which, according to the writer, facilities for women's teams are worse than men's. [1]`,
            marks: 3,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: `Source A:\n${GENDER_21C}\n\nSource B:\n${GENDER_19C}`,
            extractSource: `Source A: ${GENDER_21C_REF} | Source B: ${GENDER_19C_REF}`,
            modelAnswers: {
              'Grade 4-5': `(a) The county cup.\n(b) About 10%.\n(c) Some players train on pitches without floodlights.`,
            },
            markScheme: {
              'How it is marked (3 marks)': SHORT_A_MARKING,
              Answers: [
                '(a) The county cup (accept: a cup).',
                '(b) About 10%.',
                "(c) Any one of: pitches without floodlights; sharing changing rooms with the men's reserve team; players buying their own kit.",
              ],
            },
          },
          {
            id: 'wjec-c2-05-q2',
            questionNumber: 2,
            label: '1.2',
            questionText: `Source A is an opinion column about women's sport. The writer wants to persuade readers that women's sport is treated unfairly.\n\nHow does the writer try to do this?\n\nIn your answer, comment on:\n• what the writer says\n• the writer's choice of language and tone\n• how the column is structured, and any other methods the writer uses.\n\n[10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${GENDER_21C}`,
            extractSource: GENDER_21C_REF,
            modelAnswers: {
              'Grade 8-9': `The writer opens with a single, telling example. The women's cup win was reported "on page fourteen of our weekly paper, beneath an article about a local dog show", and the bathos of the dog show makes the treatment seem absurd as well as unfair. The contrast with the men, who received "front-page coverage for losing a friendly", is sharpened by the word "losing": failure by men is treated as more newsworthy than success by women. The writer then offers this as "a single image" of the state of equality, and the understatement "you could do worse than that" invites readers to draw the conclusion for themselves.\n\nThe second paragraph supports the anecdote with evidence. The blunt opening, "The numbers are stark", announces a change of method, and the figures follow: "approximately 10% of media coverage", and pay that is "a fraction" of men's. The writer then adds the testimony of players, in a list of three clauses: players "who train on pitches without floodlights, who share changing rooms with the men's reserve team, who buy their own kit". The repetition of "who" builds a sense of one indignity after another, and the detail that the budget "does not extend to them" makes women seem an afterthought.\n\nThe final paragraph moves the argument from facts to attitudes, turning on "But": "statistics do not capture the subtler problem, which is one of assumption." This makes the case deeper than a complaint about money. The inclusive "We assume" draws the reader in, and the list "less exciting, less skilful, less worthy of attention" uses repetition to expose a prejudice the reader may share. The writer argues that this view was formed not by watching women's sport but by "a culture that has always valued men's bodies in motion more than women's", which turns a personal opinion into a cultural habit. The concession "though funding would help" keeps the argument balanced, and the ending widens the issue: equality requires "a fundamental reimagining of what sport is for, and who it belongs to". Ending on "who it belongs to" suggests that women have been shut out of something that should be theirs too, and leaves the reader with a question of fairness rather than of figures.`,
            },
            markScheme: {
              'How it is marked (10 marks)': Q1_2_MARKING,
              'Points you might make': [
                `The opening anecdote and its bathos: the news "beneath an article about a local dog show", set against the men's "front-page coverage for losing a friendly".`,
                `"The numbers are stark" introduces evidence: "approximately 10% of media coverage" and pay that is "a fraction" of men's.`,
                `The list of clauses beginning "who" piles up the players' indignities; "does not extend to them" makes women an afterthought.`,
                `"But" turns to "the subtler problem, which is one of assumption"; the inclusive "We assume" and the list "less exciting, less skilful, less worthy of attention" challenge the reader.`,
                `The concession "though funding would help" keeps the tone reasonable; the ending, "who it belongs to", raises a question of fairness.`,
              ],
            },
          },
          {
            id: 'wjec-c2-05-q3',
            questionNumber: 3,
            label: '1.3',
            questionText: `Read Source B, the 19th-century text, and answer the questions below.\n\n("Avail" means help or be of use; "dependents" are people under another's power; "hot-house and stove cultivation" is the growing of plants in heated glasshouses; "indolently" means lazily.)\n\n(a) According to Mill, why can no one know "the nature of the two sexes"? [1]\n(b) What does Mill say is really true of what is called "the nature of women"? [1]\n(c) In Mill's image of the plant, what happens to the shoots that are left outside in the wintry air? [1]`,
            marks: 3,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: `Source B:\n${GENDER_19C}`,
            extractSource: GENDER_19C_REF,
            modelAnswers: {
              'Grade 4-5': `(a) Because men and women have only ever been seen in their present relationship, with women under men's control.\n(b) It is artificial: it has been made by society, not by nature.\n(c) They grow stunted, and some are burnt off and disappear.`,
            },
            markScheme: {
              'How it is marked (3 marks)': SHORT_B_MARKING,
              Answers: [
                '(a) Because men and women have only ever been seen in their present relationship, with the women controlled by the men (accept: no society has ever existed in which women were free of that control).',
                '(b) It is artificial, the result of some qualities being held back and others forced on (accept: it is not natural but made by the way women are treated).',
                '(c) Their growth is stunted, and some are burnt off and disappear.',
              ],
            },
          },
          {
            id: 'wjec-c2-05-q4',
            questionNumber: 4,
            label: '1.4',
            questionText: `Read Source B again.\n\nA student said: ‘Mill's argument is powerful because he relies on reason rather than on feeling.’\n\nHow far do you agree with this view?\n\nIn your answer, give your own view of how Mill presents his argument across the whole text, and explain how his choices of words and details shape it. Support your answer with references to the text. [10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'evaluation',
            extract: `Source B:\n${GENDER_19C}`,
            extractSource: GENDER_19C_REF,
            modelAnswers: {
              'Grade 8-9': `I partly agree. Mill's argument is built on reasoning, and that gives it its strength, but he also uses vivid, emotive images that make the reader feel the injustice he is reasoning about.\n\nHe opens like a logician. He sets out to answer an opponent's claim, that "the nature of the two sexes adapts them to their present functions and position", and brushes it aside with "Neither does it avail anything to say", as if dismissing a weak point in a debate. He then appeals openly to reason, "Standing on the ground of common sense and the constitution of the human mind", and his central claim is a logical one: no one can know the nature of the sexes "as long as they have only been seen in their present relation to one another". The long conditional sentence that follows ("If men had ever been found in society without women, or women without men ...") works like an experiment that has never been carried out: only if it had been, he says, "something might have been positively known". This careful reasoning persuades because it is so hard to deny.\n\nHowever, the passage then turns to language designed to stir feeling. He calls the nature of women "an eminently artificial thing", "the result of forced repression in some directions, unnatural stimulation in others", and the adjectives "forced" and "unnatural" carry moral disapproval. His comparison of women with "conquered and slave races", and the image of an "iron heel", are deliberately shocking, especially as he argues that women's character has been even more "distorted" than theirs, shaped "for the benefit and pleasure of their masters".\n\nThe extended metaphor of the garden is the most powerful part, and it works on the imagination more than on logic. Some of women's capabilities grow "luxuriantly" in a "heated atmosphere", while others are "left outside in the wintry air, with ice purposely heaped all round them", and "some are burnt off with fire and disappear". The word "purposely" makes the damage deliberate, and the picture of a tree with one half "kept in a vapour bath" and "the other half in the snow" makes the treatment of women seem both cruel and absurd. Mill also turns scornful, accusing men of an "inability to recognise their own work" which marks "the unanalytic mind", so that they "indolently believe" in a nature they have themselves created.\n\nSo Mill does rely on reason, but his most memorable lines are emotional and satirical. The statement is right that reason is the foundation of his argument, but wrong to suggest that feeling plays no part: it is the combination of the two that makes the passage so powerful.`,
            },
            markScheme: {
              'How it is marked (10 marks)': Q1_4_MARKING,
              'Points you might make': [
                `Reason: he answers an opponent ("Neither does it avail anything to say"), appeals to "common sense and the constitution of the human mind", and argues that nothing can be known while the sexes are seen only "in their present relation to one another".`,
                'The conditional sentence about a society never yet seen works like an experiment that has never been tried.',
                `Feeling: "forced repression" and "unnatural stimulation" carry moral judgement; the comparison with "conquered and slave races" and the "iron heel" is meant to shock.`,
                `The garden metaphor ("ice purposely heaped all round them"; "some are burnt off with fire and disappear") makes the damage deliberate and cruel.`,
                `Satire and scorn: the tree half "in a vapour bath" and half "in the snow"; men's "inability to recognise their own work".`,
                'A strong answer reaches a judgement on the statement and keeps to it through the whole passage.',
              ],
            },
          },
          {
            id: 'wjec-c2-05-q5',
            questionNumber: 5,
            label: '1.5',
            questionText: `Bring together details from both texts to explain briefly what each writer says holds women back. Make clear which text each detail comes from. [4]`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'summary',
            extract: `Source A:\n${GENDER_21C}\n\nSource B:\n${GENDER_19C}`,
            extractSource: `Source A: ${GENDER_21C_REF} | Source B: ${GENDER_19C_REF}`,
            modelAnswers: {
              'Grade 4-5': `In Source A, women in sport are held back by poor media coverage ("approximately 10%"), lower pay and worse facilities, and by the assumption that their sport is "less worthy of attention". In Source B, Mill says that women are held back by being "under the control of the men": some of their abilities are encouraged for men's "benefit and pleasure", while others are starved or destroyed, and men then believe that this is women's natural state.`,
            },
            markScheme: {
              'How it is marked (4 marks)': Q1_5_MARKING,
              'Details you might bring together': [
                "Source A: little media coverage; pay a fraction of men's; poor facilities, shared changing rooms and players buying their own kit; the assumption, learnt from the culture, that women's sport is less worth watching.",
                "Source B: women have always been under men's control; some of their abilities are forced on for men's benefit and others held back or destroyed; men mistake the result for women's nature.",
              ],
            },
          },
          {
            id: 'wjec-c2-05-q6',
            questionNumber: 6,
            label: '1.6',
            questionText: `Source A and Source B are both about the unequal treatment of women.\n\nCompare:\n• what the writers say about the unequal treatment of women\n• how they get their ideas across.\n\nUse evidence from both texts, and make clear which text each point comes from. [10]`,
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'comparison',
            extract: `Source A:\n${GENDER_21C}\n\nSource B:\n${GENDER_19C}`,
            extractSource: `Source A: ${GENDER_21C_REF} | Source B: ${GENDER_19C_REF}`,
            modelAnswers: {
              'Grade 8-9': `Both writers argue that the inequality between men and women is made by society rather than by nature, and both blame assumptions as much as rules; they differ in their scope and in their methods.\n\nAt its core, what they say is strikingly similar. The writer of Source A argues that people think women's sport "less exciting, less skilful, less worthy of attention" not from watching it but because "we have absorbed it from a culture" that values men more. Mill, in Source B, makes the same move on a much larger scale: what is called "the nature of women" is "an eminently artificial thing", produced by "forced repression" in some directions and "unnatural stimulation" in others. Both, then, challenge the claim that women are naturally lesser.\n\nTheir scope differs. Source A deals with one part of modern life, sport, and with practical unfairness: "approximately 10% of media coverage", pay that is "a fraction" of men's, and players "who buy their own kit". Mill writes about women's whole position in society, which he compares with that of "dependents" under "their masters", and in this passage he gives no single example or figure.\n\nTheir methods reflect this. The writer of Source A uses a vivid anecdote, the news printed "beneath an article about a local dog show", then statistics and the testimony of players, before turning with "But" to "the subtler problem". The inclusive "We assume" makes readers examine their own views. Mill uses formal, logical argument: he answers an opponent ("Neither does it avail anything to say"), reasons from "common sense and the constitution of the human mind", and builds to an extended metaphor of a plant kept "in a vapour bath" on one side and "in the snow" on the other. The modern writer's tone is frustrated but measured; Mill's becomes scornful when he describes men's "inability to recognise their own work".\n\nBoth end by calling for a change of thinking rather than only of rules. Source A asks for "a fundamental reimagining of what sport is for, and who it belongs to", while Mill exposes the belief that "the tree grows of itself in the way they have made it grow". The modern writer wants a fairer share for women in sport; Mill wants his readers to see that what they think they know about women may be wrong.`,
            },
            markScheme: {
              'How it is marked (10 marks)': Q1_6_MARKING,
              'Points you might make': [
                `Both say inequality is made, not natural: an assumption "absorbed" from a culture (Source A); "an eminently artificial thing" (Source B).`,
                "Scope: one area of modern life, with practical examples and figures (Source A); women's whole position in society, argued in general terms (Source B).",
                `Methods: anecdote, statistics, testimony and the inclusive "We assume" (Source A); logical argument, an answered objection and an extended garden metaphor (Source B).`,
                'Tone: frustrated but measured (Source A); formal, then scornful (Source B).',
                'Both end by asking readers to change how they think: about who sport belongs to (Source A); about what is natural (Source B).',
              ],
            },
          },
        ],
      },
      {
        id: 'wjec-c2-05-writing',
        title: 'Section B: Writing',
        description: SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-05-q7',
            questionNumber: 1,
            label: '2.1',
            questionText: `Your school is holding an event to celebrate International Women's Day.\n\nWrite the text for a leaflet encouraging students to attend, and explaining why the day matters. [20]`,
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Celebrate International Women's Day with us\n\n8 March, in the school hall, from 12.30 to 2.30\nFree entry. Everyone welcome.\n\nWhat is International Women's Day?\nEvery year on 8 March, people around the world celebrate the achievements of women and girls, and think about how much is still to be done to make life fairer. This year our school is joining in, and we want you to be part of it.\n\nWhat is happening?\n• Inspiring speakers. Three women who grew up in our town, a firefighter, an engineer and the owner of a local bakery, will talk about their careers and answer your questions.\n• Have a go. Try coding, bridge-building and first aid in hands-on workshops run by the science and technology departments.\n• Wall of fame. Add the name of a woman who inspires you, from your own family or from history, to our giant display.\n• Music and food. The school band will play, and the Year 10 enterprise group will sell homemade cakes, with all profits going to a local charity that helps women back into work.\n\nWhy does it matter?\nYou might think that girls and boys already have the same chances. In many ways, their chances are more equal than ever before. But women are still less likely to reach the top jobs in many careers, and girls are still told, sometimes without anyone meaning it, that some subjects or sports are not for them. A day like this is a chance to notice those messages, and to question them.\n\nIt is not just for girls\nInternational Women's Day is not about one group against another. Fairness benefits everyone, and many of the strongest supporters of equality are men and boys. Bring your friends, your questions and your ideas.\n\nCome along\nPick up a free ticket from the library, or sign up with your form tutor by Wednesday. We look forward to seeing you there.\n\nOrganised by the Student Council`,
            },
            markScheme: {
              'How it is marked (20 marks)': WRITING_MARKING,
              'What earns marks in this task': [
                'The features of a leaflet: a heading, clear subheadings, and key details (when, where, how to take part) that are easy to find.',
                'A friendly, encouraging tone for fellow students.',
                'Both purposes covered: persuading students to come, and explaining why the day matters, with developed reasons.',
                'Accurate spelling, punctuation and grammar, with varied sentences and well-chosen words: 8 of the 20 marks are for this.',
              ],
            },
          },
          {
            id: 'wjec-c2-05-q8',
            questionNumber: 2,
            label: '2.2',
            questionText: `"True equality between men and women has already been achieved. There is nothing left to fight for."\n\nWrite an article for a newspaper giving your views on this statement. [20]`,
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Equality achieved? Not yet\n\nIt is easy to see why some people believe that the fight for equality between men and women is over. My grandmother was expected to give up her job when she married. My mother was one of only three girls in her physics class. I, on the other hand, have grown up being told that I can do anything. Women vote, run companies, lead governments and win Olympic medals. Surely, the argument goes, there is nothing left to fight for.\n\nI disagree. Enormous progress has been made, and we should celebrate it. But progress is not the same as arrival.\n\nLook first at money. Across the economy, women still earn less than men on average, partly because the jobs most often done by women, such as caring and cleaning, are among the lowest paid. Look next at time. In many households, women still do most of the cooking, cleaning and looking after children, even when both parents work full time. And look at who holds power. Despite the famous exceptions, most of the people running the largest businesses are still men.\n\nThen there are the problems that numbers cannot capture. Girls are still more likely to be judged on their appearance. Women's sport still receives a fraction of the attention given to men's. Many women still change their route home, or their plans, because they do not feel safe. None of this is written in law, but all of it shapes women's lives.\n\nEquality is not only about women, either. Boys and men are harmed by the old assumptions too: the idea that they should hide their feelings, or that caring for children is not really their job.\n\nSo what is left to fight for? Fair pay, shared responsibilities at home, safety, and the freedom for every person to be judged on who they are rather than on whether they are male or female. That is a great deal. The work begun by our grandmothers is not finished, and it is up to our generation to complete it.`,
            },
            markScheme: {
              'How it is marked (20 marks)': WRITING_MARKING,
              'What earns marks in this task': [
                'The features of a newspaper article: a headline, an opening that engages the reader, and paragraphs that develop an argument to a clear conclusion.',
                'A tone that suits adult newspaper readers: thoughtful and persuasive, firm but fair.',
                'A clear view on the statement, developed with reasons and examples, which recognises the progress already made.',
                'Accurate spelling, punctuation and grammar, with varied sentences and well-chosen words: 8 of the 20 marks are for this.',
              ],
            },
          },
        ],
      },
    ],
  },
]
