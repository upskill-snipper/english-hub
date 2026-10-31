// @ts-nocheck
import type { MockExamPaper } from './types'

/**
 * WHAT WAS WRONG (found 26 September 2026 by
 * scripts/check-mock-exam-extracts.mjs, fixed 27 September). These five
 * papers are live: they are in allMockExamPapers (src/data/mock-exams.ts).
 * Every Source B was printed as the words of a named nineteenth-century
 * writer, and not one was:
 *   - Exam 06, "William Howard Russell, dispatch to The Times, November
 *     1852": a Thames flood at Marlow. Russell's letters from the Crimea
 *     began in 1854, and none of the passage's ten sentences is in his
 *     British Expedition to the Crimea.
 *   - Exam 07, "Edward Whymper, Scrambles Amongst the Alps, 1871": none of
 *     its eleven sentences is in the book. Its "Mr Henderson" and his "I have
 *     never been so alive" were invented.
 *   - Exam 08, "Florence Nightingale, letter to Sidney Herbert, Secretary of
 *     State for War, 1855": a ward at St Thomas's and a nation that spends on
 *     armaments. None of its ten sentences is in Notes on Nursing or in the
 *     letters printed in volume 1 of Cook's Life of her.
 *   - Exam 09, "Friedrich Engels, The Condition of the Working Class in
 *     England, 1845": Irish families in Liverpool, defended against "popular
 *     prejudice". None of its fourteen sentences is in the Kelley
 *     translation, and only about one in ten of its three-word runs are
 *     (the figure depends on how punctuation is treated), so it is not
 *     another translation either. It also gave Engels a view of the Irish
 *     close to the opposite of the one he printed.
 *   - Exam 10, "Charles Dickens, 'A Preliminary Word', Household Words,
 *     1850": child labour and a factory boy's paper kite. "A Preliminary
 *     Word" is the address that opened Household Words, and none of the
 *     passage's twelve sentences is in the Dickens collections checked.
 * The Question 2 and 4 answers then quoted the invented lines as the
 * writers' own (52 quoted spans across the five papers, 23 of them in Exams
 * 07 and 09, fourteen of those four words or longer, among them "I have
 * never been so alive" and "barefoot, ragged, and half-starved"),
 * and every one of them analysed words the named writer never wrote.
 *
 * Every Source A was labelled as a 2024 or 2025 article by a named
 * journalist in a real publication (The Observer, National Geographic
 * Traveller, The New Statesman, The Atlantic) or an invented one ("The
 * Guardian Education"). Nothing supports any of them. Had they been real,
 * they would be in copyright and far too long to print; they read as written
 * for this file, and the bylines could belong to real journalists who wrote
 * none of it. The Question 3 answers also misquoted Source A twice ("living
 * above the waterline" for "live above the waterline", and Amira's two
 * remarks run together across the narration between them), called an active
 * sentence a "passive construction", called a plain statement a metaphor,
 * and called the penultimate sentence of Exam 09's Source A its last.
 *
 * WHAT IT IS NOW. Each Source B is a genuine passage, cut by script from the
 * Project Gutenberg text with passage() (src/lib/study-guides/passage.ts) and
 * never retyped. Only typography was touched: the underscores that mark
 * italics and doubled spaces are dropped, and so are the page numbers
 * ("{90a}") in the Engels.
 *   - 06: Russell, The British Expedition to the Crimea (new and revised
 *     edition, 1876; Gutenberg #46242, whose preface is "to the edition of
 *     1876" and whose Routledge title page is dated 1877), two consecutive
 *     paragraphs on the hurricane of 14 November 1854. The book has no
 *     flood to offer, so Questions 2 and 4 now ask about severe weather
 *     rather than flooding.
 *   - 07: Whymper, Scrambles Amongst the Alps in the Years 1860-69
 *     (Gutenberg #41234), Chapter X, four consecutive paragraphs: the jump
 *     across a bergschrund. Question 2 asks about the ice, not glaciers,
 *     because the passage never uses the word. #41234 prints the London
 *     1871 title page, but its words are those of the Philadelphia edition
 *     of 1872 (Lippincott), so the label names that edition; see the note
 *     above EXAM_07_SOURCE_B_REF.
 *   - 08: Nightingale's letter of 14 November 1854 to Dr Bowman, the
 *     surgeon, from the Barrack Hospital at Scutari, as printed in Sir Edward
 *     Cook, The Life of Florence Nightingale, volume 1 (1913; Gutenberg
 *     #40057), two consecutive paragraphs. Only her letter is printed, not
 *     Cook's words around it.
 *   - 09: Engels, The Condition of the Working-Class in England in 1844,
 *     "Irish Immigration", in Florence Kelley Wischnewetzky's translation
 *     (London edition of 1892; Gutenberg #17306): the chapter's first
 *     paragraph without its last sentence, which introduces a quotation from
 *     Carlyle, then, after a marked cut, four sentences from its third. The
 *     genuine Engels is prejudiced about the Irish; the answers say so
 *     rather than soften it, which is also what makes the comparison with
 *     Source A worth writing.
 *   - 10: Dickens, "The Short-Timers", The Uncommercial Traveller (first
 *     published in All the Year Round, 1863; Gutenberg #914), one paragraph:
 *     his own schooldays.
 * The Source A passages are kept and labelled as what they are, specially
 * written for this paper, and the answers call their writer "the writer of
 * Source A". Every Question 2 and 4 answer was rewritten for its new
 * Source B, the Question 3 errors above were corrected, and every quotation
 * in the answers was checked by script against its extract. Question 5 is
 * unchanged, and so is Question 1 except in Exams 07 and 08 (below).
 *
 * SECOND PASS (27 September 2026, adversarial review of the fix above).
 *   - The Exam 07 label dated the words 1871, but they are the 1872
 *     American text; relabelled (see the note above EXAM_07_SOURCE_B_REF).
 *   - Question 1 in Exam 07 counted "The temperature was minus thirty
 *     degrees" as true, but the text only uses the figure in a simile.
 *     Question 1 in Exam 08 counted "The writer visited a hospital at three
 *     in the morning" as true from a first paragraph that never says so,
 *     and called statement F "arguably true" while marking it wrong. Both
 *     statements were rewritten so that exactly four are true on the
 *     paragraph named.
 *   - Model answers still made false claims about the words: "adequate"
 *     called an adverb (Exam 06), the penultimate sentence of Exam 07's
 *     Source A called its final sentence (twice), two "not"s that begin no
 *     clause called anaphora, "a sky the colour of old steel" called a
 *     simile, "It simply melts" called monosyllabic, the family at three in
 *     the morning called Exam 09's final image (the bus slogans are), and
 *     Arthur's apology called Exam 08's final image. Exam 08's answers also
 *     gave Nightingale's narration a phrase she puts in the assistants'
 *     mouths ("such a fresh influx of wounded") and had Amira speak after
 *     refilling her coffee rather than while; Exam 10's said the lessons,
 *     not the boys' troubles, made them "miserable enough". All corrected.
 * Every Source B was re-checked by script as one unbroken run of its
 * Gutenberg text (two runs for Engels, split at the marked cut), and every
 * quoted span in every answer, of any length, as present in its extract.
 *
 * KNOWN GAPS. Source A's figures (the waiting lists, "forty-seven minutes",
 * "a 40% increase") belong to the specially written articles and are not
 * sourced. The checker reads Nightingale only in Notes on Nursing, so it
 * reports the Exam 08 extract as unverified; it was cut from, and compared
 * by script with, Cook's Life (#40057), where it is one unbroken run. The
 * checker does confirm Exam 10 against #914. Exam 09 prints Engels's
 * prejudice about the Irish as he wrote it ("such a race", "brutal habits");
 * the answers name it as prejudice, but whether a live paper for this
 * audience should set it at all is a judgement for the founder.
 *
 * REWORDED 31 October 2026, to set AQA's questions as AQA has worded them
 * since summer 2026, from src/data/mark-scheme-guides/aqa-lang-paper2.ts
 * (checked twice against AQA's 2026 sample paper and mark scheme). The
 * sources, ids, sections, marks, question types and totals are unchanged.
 * WHAT WAS WRONG, and what changed:
 *   - Question 2 asked for "a summary of the similarities and differences".
 *     AQA now asks what the student can infer about the differences the
 *     question names, from both sources. Each now names two things to set
 *     against each other (06 the flooded families and the soldiers in the
 *     storm, 07 the visit to the glacier and the leap across the crevasse, 08
 *     the two hospitals, 09 the writer's parents and Engels's Irish, 10 the
 *     writer's students and Dickens's schoolfellows), and its mark scheme and
 *     its one model answer infer differences only.
 *   - Question 3 named a source but no lines, though AQA names lines and puts
 *     an answer that strays outside them at the bottom of its level. Each now
 *     names paragraphs of Source A by their first and last words (06 and 10
 *     the first two, 07 the second to the end, 08 and 09 the second and
 *     third), and its answers were cut back to quote only from those lines.
 *   - The wording was largely AQA's own rubric, copied ("You need to refer to
 *     Source A and Source B for this question", "For this question, you need
 *     to refer to the whole of Source A, together with the whole of Source
 *     B", "In your answer, you could:", "You are advised to spend about 45
 *     minutes on this section"). Every question and section is now in the
 *     site's own words, and Question 4 asks for the writers' feelings and
 *     perspectives and their methods, as the guide gives AQA's question.
 *   - Minutes: Question 2 had 10 and Question 3 had 15, where AQA's timing
 *     advice gives 8 and 12. The sections now say how to spend their time.
 *   - Question 1, each statement read against its paragraph: 06 marked
 *     "Insurance companies had guaranteed safety" false when the families
 *     were told they were safe, and "The Environment Agency had warned of
 *     flooding" could be read as true from "without adequate warning"; 08
 *     marked "The chairs were comfortable" false because they were plastic,
 *     and "People were exhausted and anxious" said of the room what the line
 *     says of the country; 06, 07 and 10 each set two false statements on
 *     one detail. Those statements are replaced by ones plainly true or false
 *     on the paragraph, and the answer keys are unchanged.
 *   - Gender: the text gives the writers of 07's and 10's Source A none, but
 *     Question 1, 10's Question 3 and the answers called them "she" and
 *     "her".
 *   - Mark schemes were generic bullets. Each now gives AQA's levels in plain
 *     words, the caps the guide records (one source only: 3 marks at most in
 *     Question 2, 6 in Question 4; language outside the named lines; AO5 12
 *     at most when the writing does not answer the statement) and points
 *     particular to its paper.
 *   - Question 5 carried a description of an answer at each grade, not a
 *     model answer. Each now has a Grade 8-9 model answer, the descriptions
 *     became the task's points in its mark scheme, and the statements in 06
 *     and 07 lose their dashes.
 *   - The answers kept were corrected where they were wrong, and their dashes
 *     removed: 08 Question 3 said the closing "That" sums the article up in
 *     Arthur's apology (it points back to a man who paid his taxes and cannot
 *     get a bed) and misquoted "Nobody"; 07 Question 3 quoted "not... not..."
 *     and "anti-sublime", which the source never prints; 08 Question 4 had
 *     Nightingale present her patients as a reproach to the system, which her
 *     letter does not, and called Dr Bowman her friend, which nothing here
 *     says.
 * Every quotation in Questions 1 to 4, their answers and their mark schemes
 * was checked by script against the extract its question prints, and each
 * Question 3 quotation against the paragraphs that question names.
 *
 * KNOWN GAP, 31 October 2026, closed the same day (see CHECKED, below).
 * Exam 10's Source A cited an unsourced rise in self-harm among
 * under-sixteens. On the Eduqas papers the founder asked for any mention of
 * self-harm to be removed; this rewrite was not to change any source, so the
 * sentence stood, and no question or answer here quoted or pointed to it
 * (the old Question 2 and 3 answers did).
 *
 * CHECKED 31 October 2026 by a second reader, every question against the
 * guide and against the sources as printed. WHAT WAS WRONG, and what changed:
 *   - Exam 10, Source A (written for this paper) listed a rise in self-harm
 *     among under-sixteens; that item is cut from its list of consequences.
 *     Nothing quoted it, and every paragraph a question names is unchanged.
 *   - Exam 07, Question 3 asked about the glaciers only, but its lines open
 *     on the landscape and its answers analyse the flatness, sky and
 *     silence; it now asks about Svalbard and what is happening to its
 *     glaciers.
 *   - Exam 08, Question 3 asked about "the hospital's" staff and patients,
 *     but its lines and answers turn on figures for the whole NHS; it now
 *     names the NHS.
 *   - Exam 06: the Question 2 answer had the soldiers lose food they never
 *     had (now shelter and warmth); a Question 3 answer gave Carol a family
 *     the source never gives her (now people like her).
 *   - Exam 07, Question 3: one answer said both similes hint at collapse,
 *     though a body shifting in sleep does not; another said the sentence
 *     "It simply melts" describes indifference, which its paragraph does (now
 *     the paragraph). Question 4: "dramatic icy landscapes", though Svalbard
 *     has "no sweeping panoramas"; now vast.
 *   - Exam 08, Question 2: London "short of space" set against Scutari's
 *     beds crammed without space, a contrast with nothing in it (now short
 *     of beds); "exhausted, anxious" given to the people in the waiting room,
 *     where the line gives it to the country; the Sentry's steps called the
 *     only sound in the sentence where two men speak. All now as printed. A
 *     mark-scheme point about the two writers now compares the two places.
 *   - Exam 08: a Question 3 answer had the nurses failing to give care,
 *     where the article praises the staff (now they have no bed to give);
 *     a Question 4 answer had both writers see "failing care" while
 *     "protecting the patients from blame", which Nightingale's letter does
 *     not, and Amira losing her purpose, though she says "I love this job".
 *     Both now as the sources have them.
 *   - Exam 09, Question 4 (answer and mark scheme) called "armies" and
 *     "strong arms" the very "language of plumbing" Source A rejects; now
 *     language that treats people as a mass and a resource.
 *   - Verified, not changed: Exam 06's Russell is one unbroken run of
 *     #46242 (Book IV, Chapter I), and Exam 08's letter one unbroken run of
 *     #40057 (Part II, Chapter IV), word for word apart from line breaks.
 *     The checker confirms the Russell; it reads Nightingale only in Notes on
 *     Nursing (#12439), where the letter is not, so it still reports her as
 *     unverified.
 * REORDERED 31 October 2026: Question 1 in 09 and 10 (both ACEG; A and C scored unread in 08 to 10), now ADFG, BEFH.
 */

// ─── Source Extracts ─────────────────────────────────────────────────────────

// Exam 06 - Environment & Climate
const EXAM_06_SOURCE_A = `The flooding came without adequate warning. Three weeks ago, I stood on the banks of the River Severn and watched as murky brown water swallowed a row of terraced houses inch by inch. The families who lived there had been told they were safe - told by the Environment Agency, told by their insurance companies, told by a government that has spent two decades talking about climate adaptation while cutting flood defence budgets by a third.

What struck me was not the water itself but the faces of the people watching it rise. There was no panic. These communities have flooded before - in 2007, in 2014, in 2020. What I saw was something worse than panic: resignation. A woman named Carol, sixty-three, stood in wellington boots on her front step and told me, with perfect calm, that this was the fourth time she had lost everything. "You stop replacing the carpets after the second time," she said. "You stop putting photographs on low shelves. You learn to live above the waterline."

We talk about climate change as though it were a future problem, something that will inconvenience our grandchildren. But Carol is living with it now. The two-degree warming that policy documents discuss in the abstract has already arrived in her living room, and it smells of sewage and river mud.`

const EXAM_06_SOURCE_A_REF = 'Newspaper report, specially written for this paper'

const EXAM_06_SOURCE_B = `Let the reader imagine the bleakest common in all England, the wettest bog in all Ireland, or the dreariest muir in all Scotland, overhung by leaden skies, and lashed by a tornado of sleet, snow, and rain--a few broken stone walls and roofless huts dotting it here and there, roads turned into torrents of mud and water, and then let him think of the condition of men and horses in such a spot on a November morning, suddenly deprived of their frail covering, and exposed to bitter cold, with empty stomachs, without the remotest prospect of obtaining food or shelter. Think of the men in the trenches, the covering parties, the patrols, and outlying pickets and sentries, who had passed the night in storm and darkness, and who returned to their camp only to find fires out and tents gone. These were men on whose vigilance the safety of our position depended, and many of whom had been for eight or ten hours in the rain and cold, who dared not turn their backs for a moment, who could not blink their eyes. These are trials which demand the exercise of the soldier's highest qualities.

A benighted sportsman caught in a storm thinks he is much to be pitied, as, fagged, drenched and hungry, he plods along the hillside, and stumbles about in the dark towards some uncertain light; but he has no enemy worse than the wind and rain to face, and in the first hut he reaches repose and comfort await him. Our officers and soldiers, after a day like this, had to descend to the trenches again at night, look out for a crafty foe, to labour in the mire and ditches of the works; what fortitude and high courage to do all this without a murmur, and to bear such privations and hardships with unflinching resolution! But meantime--for one's own experience gives the best idea of the suffering of others--our tent was down; one by one we struggled out into the mud, and left behind us all our little household gods, to fly to the lee of a stone wall, behind which were cowering French and British of all arms and conditions.`

const EXAM_06_SOURCE_B_REF =
  'William Howard Russell, The British Expedition to the Crimea (new and revised edition, 1876), on the hurricane of 14 November 1854'

// Exam 07 - Travel & Exploration
const EXAM_07_SOURCE_A = `I did not come to the Arctic to find myself. I came because I had read about the ice sheets disappearing and I wanted to see them before they were gone - a morbid kind of tourism, I suppose, but an honest one. What I found instead was a landscape so vast and so indifferent to human presence that all the urgent questions I had brought with me simply evaporated, like breath in minus thirty degrees.

Svalbard is not beautiful in the way travel brochures suggest. There are no sweeping panoramas that make you feel elevated or inspired. Instead, there is a flatness that goes on and on until it meets a sky the colour of old steel, and a silence so complete that you can hear your own blood moving. The glaciers, which I had come specifically to photograph, were not the pristine white cathedrals I had imagined but dirty, fractured walls of blue-grey ice, streaked with centuries of trapped sediment. They groaned. That was the thing nobody had told me - glaciers make sounds. Deep, structural sounds, like a building settling, or a body shifting in sleep.

Our guide, a Norwegian woman named Ingrid who had lived on Svalbard for twenty years, told me that the glacier we were standing on had retreated two kilometres since she first arrived. "You are looking at a photograph of something that no longer exists," she said. "By the time you show this to anyone, it will have changed again."

The ice does not care about our guilt or our grief. It simply melts.`

const EXAM_07_SOURCE_A_REF = 'Travel article, specially written for this paper'

const EXAM_07_SOURCE_B = `For three-quarters of an hour we progressed in this fashion. The axe of Croz all at once stopped. “What is the matter, Croz?” “Bergschrund, gentlemen.” “Can we get over?” “Upon my word, I don’t know: I think we must jump.” The clouds rolled away right and left as he spoke. The effect was dramatic. It was a coup de théâtre, preparatory to the “great sensation leap” which was about to be executed by the entire company.

Some unseen cause, some cliff or obstruction in the rocks underneath, had caused our wall of ice to split into two portions, and the huge fissure which had thus been formed extended on each hand as far as could be seen. We, on the slope above, were separated from the slope below by a mighty crevasse. No running up and down to look for an easier place to cross could be done on an ice-slope of 54°: the chasm had to be passed then and there.

A downward jump of fifteen or sixteen feet, and a forward leap of seven or eight feet, had to be made at the same time. That is not much, you will say. It was not much: it was not the quantity, but it was the quality of the jump which gave to it its particular flavor. You had to hit a narrow ridge of ice. If that was passed, it seemed as if you might roll down for ever and ever. If it was not attained, you dropped into the crevasse below, which although partly choked by icicles and snow that had fallen from above, was still gaping in many places, ready to receive an erratic body.

Croz untied Walker in order to get rope enough, and, warning us to hold fast, sprang over the chasm. He alighted cleverly on his feet, untied himself and sent up the rope to Walker, who followed his example. It was then my turn, and I advanced to the edge of the ice. The second which followed was what is called a supreme moment. That is to say, I felt supremely ridiculous. The world seemed to revolve at a frightful pace and my stomach to fly away. The next moment I found myself sprawling in the snow, and then, of course, vowed that it was nothing, and prepared to encourage my friend Reynaud.`

// The Gutenberg text (#41234) carries the London 1871 title page but the
// words of the Philadelphia edition of 1872: "flavor", "fifteen or sixteen
// feet" and "and, warning us" where the London printing has "flavour", "15
// or 16 feet" and "and warning us". The label names the edition the words
// are from.
const EXAM_07_SOURCE_B_REF =
  'Edward Whymper, Scrambles Amongst the Alps in the Years 1860-69, Chapter X (first published in London, 1871; this text is from the American edition, Philadelphia, 1872)'

// Exam 08 - Health & Medicine
const EXAM_08_SOURCE_A = `The waiting room of an NHS hospital at three o'clock in the morning is one of the most revealing places in Britain. Here, stripped of pretension and daylight, you see the country as it really is: exhausted, anxious, and held together by the extraordinary patience of people who have been sitting in plastic chairs for six hours without complaint.

I spent a night in the emergency department of a large London hospital for this article, and what I witnessed was not the catastrophe the headlines describe but something more complicated - a system that functions through the sheer willpower of its staff while crumbling at every institutional seam. A junior doctor named Amira, twenty-eight years old and fourteen hours into her shift, told me she had treated thirty-seven patients since midday. Her hands were steady. Her eyes were not. "I love this job," she said, refilling her coffee cup for the fifth time. "But I cannot sustain this. Nobody can."

The numbers tell a familiar story: 7.8 million people on NHS waiting lists, ambulance response times double what they were five years ago, one in ten nursing posts unfilled. But numbers are abstractions. What they translate to, in practice, is a seventy-four-year-old man named Arthur sitting in a corridor on a trolley for eleven hours because there are no beds, apologising to the nurses for being a nuisance. Arthur fought in no wars and climbed no mountains. He paid his taxes for fifty years and now he cannot get a bed. That is the measure of where we are.`

const EXAM_08_SOURCE_A_REF = 'Magazine article, specially written for this paper'

const EXAM_08_SOURCE_B = `We are very lucky in our Medical Heads. Two of them are brutes, and four are angels--for this is a work which makes either angels or devils of men and of women too. As for the assistants, they are all Cubs, and will, while a man is breathing his last breath under the knife, lament the "annoyance of being called up from their dinners by such a fresh influx of wounded"! But unlicked Cubs grow up into good old Bears, tho' I don't know how; for certain it is the old Bears are good. We have now four miles of Beds, and not eighteen inches apart.

We have our Quarters in one Tower of the Barrack, and all this fresh influx has been laid down between us and the Main Guard, in two Corridors, with a line of Beds down each side, just room for one person to pass between, and four wards. Yet in the midst of this appalling Horror (we are steeped up to our necks in blood) there is good, and I can truly say, like St. Peter, "It is good for us to be here"--though I doubt whether if St. Peter had been here, he would have said so. As I went my night-rounds among the newly wounded that first night, there was not one murmur, not one groan, the strictest discipline--the most absolute silence and quiet prevailed--only the steps of the Sentry--and I heard one man say, "I was dreaming of my friends at Home," and another said, "I was thinking of them." These poor fellows bear pain and mutilation with an unshrinking heroism which is really superhuman, and die, or are cut up without a complaint.`

// Cook's Life (1913) is where the letter is printed; the label gives the
// letter's own date, because a label dated after 1910 would read as a
// passage Nightingale could not have written.
const EXAM_08_SOURCE_B_REF =
  "Florence Nightingale, letter to Dr Bowman from Scutari, 14 November 1854, as printed in Sir Edward Cook's Life of Florence Nightingale"

// Exam 09 - Immigration
const EXAM_09_SOURCE_A = `My parents came to this country with two suitcases and a dictionary. They spoke no English. They knew nobody. They had left behind everything that was familiar - language, food, family, the particular quality of light in a Gujarati afternoon - in exchange for a council flat in Leicester and the theoretical promise of a better life for their children. That was thirty-two years ago. My father now runs three pharmacies. My mother teaches mathematics. I write for national newspapers. This is an immigration success story, and I am tired of telling it.

I am tired of it because the demand that immigrants prove their worth through economic contribution reduces human beings to balance sheets. My parents did not come here to boost GDP. They came because they were afraid, because political violence had made their home uninhabitable, because my mother wanted her children to grow up somewhere they would not be beaten for their surname. The fact that they subsequently prospered is wonderful but irrelevant to the moral question of whether they should have been admitted at all.

The current debate frames immigration as a problem to be managed rather than a reality to be understood. We speak of "flows" and "pressures" and "capacity" - the language of plumbing, not of people. Behind every statistic is a family making an impossible decision at three in the morning: to stay and risk everything, or to leave and lose everything. There is no version of that choice that is comfortable, and our public discourse should reflect its gravity rather than reducing it to slogans on the side of a bus.`

const EXAM_09_SOURCE_A_REF = 'Opinion article, specially written for this paper'

const EXAM_09_SOURCE_B = `We have already referred several times in passing to the Irish who have immigrated into England; and we shall now have to investigate more closely the causes and results of this immigration. The rapid extension of English industry could not have taken place if England had not possessed in the numerous and impoverished population of Ireland a reserve at command. The Irish had nothing to lose at home, and much to gain in England; and from the time when it became known in Ireland that the east side of St. George's Channel offered steady work and good pay for strong arms, every year has brought armies of the Irish hither. It has been calculated that more than a million have already immigrated, and not far from fifty thousand still come every year, nearly all of whom enter the industrial districts, especially the great cities, and there form the lowest class of the population. Thus there are in London, 120,000; in Manchester, 40,000; in Liverpool, 34,000; Bristol, 24,000; Glasgow, 40,000; Edinburgh, 29,000, poor Irish people. These people having grown up almost without civilisation, accustomed from youth to every sort of privation, rough, intemperate, and improvident, bring all their brutal habits with them among a class of the English population which has, in truth, little inducement to cultivate education and morality.

[...] These Irishmen who migrate for fourpence to England, on the deck of a steamship on which they are often packed like cattle, insinuate themselves everywhere. The worst dwellings are good enough for them; their clothing causes them little trouble, so long as it holds together by a single thread; shoes they know not; their food consists of potatoes and potatoes only; whatever they earn beyond these needs they spend upon drink. What does such a race want with high wages? The worst quarters of all the large towns are inhabited by Irishmen.`

const EXAM_09_SOURCE_B_REF =
  'Friedrich Engels, The Condition of the Working-Class in England in 1844 (1845), from "Irish Immigration", translated by Florence Kelley Wischnewetzky (London edition, 1892)'

// Exam 10 - Childhood & Youth
const EXAM_10_SOURCE_A = `Something has gone wrong with childhood. I do not say this as a nostalgic adult romanticising the past - my own childhood in the 1990s was no golden age - but as a secondary school teacher who has watched, over fifteen years, the slow erosion of something I can only call unstructured time. My students do not play. They do not wander. They do not experience the particular, irreplaceable boredom of a long afternoon with nothing to do, because every moment of their lives has been scheduled, supervised, and optimised.

By the age of eleven, the average British child has a timetable that would exhaust a management consultant: school from eight-thirty to three-thirty, followed by homework, tutoring, sports clubs, music practice, and - increasingly - content creation for social media platforms. Their weekends are not their own. A recent study found that British children spend an average of forty-seven minutes per day in unstructured outdoor play, down from four hours in the 1970s. Forty-seven minutes. That is less time than most adults spend commuting.

The consequences are measurable and alarming: a 40% increase in childhood anxiety diagnoses over the past decade and - perhaps most insidiously - a generation of young people who have been so thoroughly trained in the art of achievement that they have no idea what they actually enjoy. "What do you do for fun?" I asked a Year 10 student recently. She stared at me as though I had asked the question in a foreign language.`

const EXAM_10_SOURCE_A_REF = 'Opinion article, specially written for this paper'

const EXAM_10_SOURCE_B = `‘When I was at school, one of seventy boys, I wonder by what secret understanding our attention began to wander when we had pored over our books for some hours. I wonder by what ingenuity we brought on that confused state of mind when sense became nonsense, when figures wouldn’t work, when dead languages wouldn’t construe, when live languages wouldn’t be spoken, when memory wouldn’t come, when dulness and vacancy wouldn’t go. I cannot remember that we ever conspired to be sleepy after dinner, or that we ever particularly wanted to be stupid, and to have flushed faces and hot beating heads, or to find blank hopelessness and obscurity this afternoon in what would become perfectly clear and bright in the freshness of to-morrow morning. We suffered for these things, and they made us miserable enough. Neither do I remember that we ever bound ourselves by any secret oath or other solemn obligation, to find the seats getting too hard to be sat upon after a certain time; or to have intolerable twitches in our legs, rendering us aggressive and malicious with those members; or to be troubled with a similar uneasiness in our elbows, attended with fistic consequences to our neighbours; or to carry two pounds of lead in the chest, four pounds in the head, and several active blue-bottles in each ear. Yet, for certain, we suffered under those distresses, and were always charged at for labouring under them, as if we had brought them on, of our own deliberate act and deed. As to the mental portion of them being my own fault in my own case—I should like to ask any well-trained and experienced teacher, not to say psychologist. And as to the physical portion—I should like to ask PROFESSOR OWEN.’`

const EXAM_10_SOURCE_B_REF =
  'Charles Dickens, "The Short-Timers", The Uncommercial Traveller (first published in All the Year Round, 1863)'

// ─── How each question is marked ─────────────────────────────────────────────
// AQA's levels and caps for each question, from the guide
// (src/data/mark-scheme-guides/aqa-lang-paper2.ts), in the site's own words.
// Each question adds the points particular to its own paper.

const SECTION_A_GUIDANCE =
  'Spend about 15 minutes reading both sources and the questions, then about 45 minutes answering. Answer every question in this section.'

const SECTION_B_GUIDANCE =
  'Spend about 45 minutes on this section: about 5 minutes to plan, 35 to write and 5 to check your work. Write in full sentences and in paragraphs.'

const Q1_QUESTION_INTRO =
  'Look again at the first paragraph of Source A.\n\nFour of the statements below are true of this paragraph and four are not. Write the letters of the four that are true. Choose no more than four.'

const Q1_MARKING = [
  'One mark for each true statement chosen, up to 4 marks.',
  'Four choices at most: the question allows no more.',
]

const Q2_MARKING = [
  'Level 4 (7-8 marks): sharp, thoughtful inferences, with precise details from both sources woven together to bring out the differences.',
  'Level 3 (5-6 marks): sound inferences from both sources, with well-chosen details from each linked to show the differences.',
  'Level 2 (3-4 marks): some attempt to work out what the details suggest, with some useful references and some differences noted.',
  'Level 1 (1-2 marks): retells what the sources say rather than working anything out, with a simple difference and a detail or two.',
  'An answer that uses one source only scores 3 marks at most. Level 3 and above need both sources and the differences the question names.',
  "The marks are for inference, not for analysing the writers' language, which is Question 3. Keep to the differences the question names.",
]

const Q3_MARKING = [
  "Level 4 (10-12 marks): looks beneath the surface, analysing how the writer's choices work together, with sharply chosen quotations and confident, precise subject terms.",
  'Level 3 (7-9 marks): explains clearly what effect the words have on the reader and why, with several well-chosen quotations and correct terms.',
  'Level 2 (4-6 marks): tries to say what some of the language does, with a few suitable quotations and some terms.',
  'Level 1 (1-3 marks): says something basic about a word or two, or names a technique without saying what it does.',
  'Only the lines the question names count: writing about Source B, or about other parts of Source A, places the answer at the bottom of the level it would otherwise reach. Level 3 and above need the focus the question names.',
]

const Q4_MARKING = [
  "Level 4 (13-16 marks): a perceptive, detailed comparison of the writers' feelings and perspectives, analysing how each writer's methods convey them, with well-chosen detail from both sources.",
  "Level 3 (9-12 marks): compares the writers' feelings and perspectives clearly and directly, explaining how each writer conveys them, with relevant detail from both sources.",
  "Level 2 (5-8 marks): tries to compare the writers' views, with some comment on their methods and some useful detail.",
  "Level 1 (1-4 marks): makes a basic link between the writers' views and spots a method or two, with simple references.",
  'An answer that uses one source only scores 6 marks at most, and Level 3 and above need both sources. What the writers think and how they show it must both be compared.',
]

const Q5_MARKING = {
  'Content and organisation (24 marks)': [
    'Level 4 (19-24 marks): argues with real force and confidence, pitched exactly for the audience, with ambitious, precise vocabulary and a carefully planned structure that carries the reader through a developed argument.',
    'Level 3 (13-18 marks): argues clearly throughout, in a tone that suits the form and audience; words and persuasive methods are chosen for effect, and well-linked paragraphs build the case.',
    'Level 2 (7-12 marks): puts a view across in places, with some attempt at a suitable tone and form, some deliberate word choices, and paragraphs that begin to organise the argument.',
    'Level 1 (1-6 marks): states a view simply, with little sense of the audience; ideas are few and loosely joined.',
    'Writing that does not respond to the statement in the way the task asks cannot score more than 12 of these 24 marks.',
  ],
  'Technical accuracy (16 marks)': [
    'Level 4 (13-16 marks): every sentence starts and ends in the right place, a full range of punctuation is used with skill, even ambitious words are spelt correctly, and long sentences stay clear.',
    'Level 3 (9-12 marks): sentences nearly always start and end in the right place, most punctuation is used well, most words are spelt correctly, hard ones included, and sentence types are varied on purpose.',
    'Level 2 (5-8 marks): sentences usually start and end in the right place, several kinds of punctuation are tried, some harder words are spelt correctly, and there is some variety in sentences and words.',
    'Level 1 (1-4 marks): some sentences start and end in the right place and some punctuation is used on purpose; simple words are spelt correctly, but sentences and vocabulary are mostly simple.',
  ],
}

const Q3_THINK_ABOUT =
  'Think about the effect of single words and phrases, of images and other techniques, and of the length and shape of the sentences.'

const Q4_AIM_TO =
  "Aim to:\n• compare what each writer feels and thinks, point by point\n• explain how each writer's choices of words, tone and structure convey their perspective\n• support each point with short quotations from both sources."

const Q5_MARKS_LINE = '(40 marks: 24 for content and organisation, 16 for technical accuracy)'

// ─── Mock Exam Papers ────────────────────────────────────────────────────────

export const aqaP2B: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 06 - Environment & Climate
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p2-06',
    board: 'AQA',
    paperNumber: 2,
    title: "Paper 2: Writers' Viewpoints and Perspectives",
    subtitle: 'English Language 8700/2',
    code: '8700/2',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p2-06-reading',
        title: 'Section A: Reading',
        description: `${SECTION_A_GUIDANCE}\n\nSource A: ${EXAM_06_SOURCE_A_REF}\nSource B: ${EXAM_06_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p2-06-q1',
            questionNumber: 1,
            questionText: `${Q1_QUESTION_INTRO}\n\nA) The writer stood on the banks of the River Thames.\nB) Brown water flooded a row of terraced houses.\nC) The Environment Agency had told the families to expect a flood.\nD) Flood defence budgets have been cut.\nE) The government has spent two decades discussing climate adaptation.\nF) The water covered the houses in a matter of seconds.\nG) The writer watched the flooding happen.\nH) The flooding happened three months ago.`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${EXAM_06_SOURCE_A}\n\nSource B:\n${EXAM_06_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_06_SOURCE_A_REF} | Source B: ${EXAM_06_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': `B, D, E and G.\n\nB: the writer saw "murky brown water" swallow "a row of terraced houses".\nD: the government has been "cutting flood defence budgets by a third".\nE: it "has spent two decades talking about climate adaptation".\nG: "I stood on the banks of the River Severn and watched".\n\nA is not true: the river is the Severn. C is not true: the Environment Agency was one of those who told the families "they were safe". F is not true: the water rose "inch by inch". H is not true: it was "Three weeks ago".`,
            },
            markScheme: [
              'True: B, D, E and G.',
              'Not true: A (the river is the Severn), C (the Environment Agency told the families they were safe), F (the water rose "inch by inch") and H (it was three weeks ago).',
              ...Q1_MARKING,
            ],
          },
          {
            id: 'aqa-p2-06-q2',
            questionNumber: 2,
            questionText:
              'This question is about both sources.\n\nExplain what you can infer about the differences between the families flooded in Source A and the soldiers caught in the storm in Source B.\n\nTo infer is to work out what the details suggest. Support each point with details from both sources.',
            marks: 8,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: `Source A:\n${EXAM_06_SOURCE_A}\n\nSource B:\n${EXAM_06_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_06_SOURCE_A_REF} | Source B: ${EXAM_06_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 8-9': `The families in Source A are worn down by a loss that keeps returning, while the soldiers in Source B are hit by a sudden one. The flood swallows the houses "inch by inch", and Carol has "lost everything" four times, which suggests that flooding has become a permanent part of her life. The soldiers, by contrast, are "suddenly deprived of their frail covering" on a single November morning, so their loss is a shock rather than a pattern.\n\nWhat each group loses is different too. The families lose their possessions, but they go on living in their homes: Carol has learned to "live above the waterline". The soldiers lose shelter and warmth all at once, left "with empty stomachs, without the remotest prospect of obtaining food or shelter", which suggests that their health, and perhaps their lives, are at risk.\n\nTheir days after the weather also differ. Carol's life now centres on protecting what is left, such as keeping photographs off "low shelves". The soldiers cannot stop to recover: they "had to descend to the trenches again at night" to watch for "a crafty foe", which implies that the storm is only one of the dangers they face.\n\nFinally, the two groups seem to bear it in different spirits. Carol's "perfect calm" suggests weary acceptance; the writer calls it "resignation", as if she no longer expects anyone to help, which fits the fact that the families "had been told they were safe" by those who should have protected them. The soldiers bear their hardships "without a murmur", but this suggests discipline rather than defeat, because Russell sees in it "fortitude and high courage".`,
            },
            markScheme: {
              'How it is marked (8 marks)': Q2_MARKING,
              'Points you might make': [
                'The families lose everything again and again (Carol has "lost everything" four times); the soldiers lose their shelter in one storm, returning "to find fires out and tents gone".',
                'The flood is slow ("inch by inch"); the storm is sudden ("suddenly deprived of their frail covering").',
                'The families adapt and stay ("live above the waterline"); the soldiers must go straight back to duty ("descend to the trenches again at night").',
                `Carol's calm suggests "resignation"; the soldiers' silence suggests discipline, which Russell calls "fortitude and high courage".`,
                `The families were let down by those who said they were safe; no one is blamed for the soldiers' storm.`,
              ],
            },
          },
          {
            id: 'aqa-p2-06-q3',
            questionNumber: 3,
            questionText: `Look only at Source A, the first and second paragraphs (from "The flooding came" to "live above the waterline").\n\nHow does the writer use language to describe the flood and the people living through it?\n\n${Q3_THINK_ABOUT}`,
            marks: 12,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${EXAM_06_SOURCE_A}`,
            extractSource: EXAM_06_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': `The writer uses the verb "swallowed" to describe the water taking the houses, which makes the flood seem like a living creature eating them up. The repetition of "told" in "told by the Environment Agency, told by their insurance companies, told by a government" shows how many different people let the residents down. Carol's words about no longer "replacing the carpets" are effective because they show she has given up, which makes us feel sympathy. Her phrase "live above the waterline" suggests that people have had to change their lives for good because of flooding.`,
              'Grade 6-7': `The writer moves from the flood itself to the people living with it, and the language makes both feel worse than a news report would. The verb "swallowed" turns the water into a creature consuming the houses, while "inch by inch" stretches the moment out, so that the reader watches the homes disappear slowly. The tricolon "told by the Environment Agency, told by their insurance companies, told by a government" repeats "told" until it sounds like an accusation: each phrase adds another body that gave the families false comfort. In the second paragraph the writer turns from the water to "the faces of the people watching it rise". The short sentence "There was no panic." is unexpected, and the colon in "something worse than panic: resignation" holds back the key word so that it lands with force; resignation is presented as more disturbing than fear, because it means the people have stopped expecting help. Carol's direct speech then grounds this in ordinary detail: carpets that are no longer replaced and photographs kept off "low shelves". The phrase "live above the waterline" works literally and as a metaphor: people like Carol have retreated upwards in their own homes, giving up ground to a threat that keeps coming back.`,
              'Grade 8-9': `The writer closes the distance between politics and lived experience, so that the flood is described both as a natural force and as a failure of the people meant to prevent it. The short opening sentence, "The flooding came without adequate warning", states the event and passes judgement in the same breath: "adequate" is a cautious, official-sounding word, the kind of language the institutions named later might use, turned against them. The water that "swallowed" the houses is a predator, but the adverbial "inch by inch" makes the scene slow rather than dramatic, a creeping process that matches the slow neglect the writer blames. The repeated "told by" works like a prosecution, each phrase adding another defendant, and the order, from "the Environment Agency" through "their insurance companies" to "a government", widens the blame from one agency to the state itself. The long final clause, with its "two decades" of talk set against budgets cut "by a third", lets the numbers make the accusation.\n\nThe second paragraph turns from the water to "the faces of the people watching it rise", and the language becomes quieter. "There was no panic." is a short sentence that denies the reader the drama they expect, and the colon in "something worse than panic: resignation" delays the abstract noun so that it carries the weight of the paragraph. Carol is the emotional centre. In "You stop replacing the carpets after the second time" the second person is not direct address but a way of making her experience general, what anyone would learn to do. The move to "photographs on low shelves" turns that general habit into an image of grief: photographs hold memories, and lifting them out of reach of the water is a way of protecting the past from a loss that keeps returning. Her final sentence, "You learn to live above the waterline", sounds like practical advice, but its calm, measured tone makes it the most disturbing line in the paragraph, because it shows how ordinary the disaster has become.`,
            },
            markScheme: {
              'How it is marked (12 marks)': Q3_MARKING,
              'Points you might make': [
                '"swallowed" makes the water a predator, and "inch by inch" draws the destruction out.',
                'The repeated "told by" lines up the bodies that said the families were safe, widening the blame to "a government".',
                'The official-sounding "adequate" in the opening sentence quietly accuses those in charge.',
                'The short sentence "There was no panic." and the delayed "resignation" show a calm that is worse than fear.',
                `Carol's direct speech ("You stop replacing the carpets", "photographs on low shelves", "live above the waterline") makes the disaster ordinary and repeated.`,
              ],
            },
          },
          {
            id: 'aqa-p2-06-q4',
            questionNumber: 4,
            questionText: `Use all of Source A and all of Source B for this question.\n\nCompare the two writers' feelings and perspectives on severe weather and how people respond to it, and the methods each writer uses to convey them.\n\n${Q4_AIM_TO}`,
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${EXAM_06_SOURCE_A}\n\nSource B:\n${EXAM_06_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_06_SOURCE_A_REF} | Source B: ${EXAM_06_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': `Both writers show how severe weather affects people, but they see it differently. The writer of Source A blames the flooding on climate change and on a government that has spent "two decades talking about climate adaptation while cutting flood defence budgets by a third." Russell in Source B does not blame anyone for the storm; he presents it as a hardship that soldiers must face as part of their duty. Both writers help the reader picture the scene: Source A says climate change "has already arrived in her living room, and it smells of sewage and river mud", and Source B asks the reader to "imagine the bleakest common in all England". Both focus on the people affected: Carol in Source A and the men in the trenches in Source B. The writer of Source A is angry and wants things to change, while Russell wants his readers to admire the soldiers' courage.`,
              'Grade 6-7': `Both writers bear witness to people exposed to severe weather, but they understand its causes, and the right response to it, in almost opposite ways. The writer of Source A treats the flood as a political failure. The families "had been told they were safe", and the repeated "told by" lines up the Environment Agency, the insurance companies and the government as the ones who let them down. Even the climate is presented as a human matter: "two-degree warming" is no longer an abstraction in "policy documents" but something that "smells of sewage and river mud". Russell, describing the storm that struck the British army in the Crimea, looks for no one to blame. The weather is simply there, "a tornado of sleet, snow, and rain" under "leaden skies", and his question is how men bear it. His answer is admiration: "what fortitude and high courage to do all this without a murmur". Their methods reflect this difference. The writer of Source A builds a case: the first paragraph moves from what the writer saw to who is to blame, and Carol's calm becomes evidence of how badly people have been failed, since it is "something worse than panic". Russell uses imperatives to put his readers in the soldiers' place ("Let the reader imagine the bleakest common in all England", "Think of the men in the trenches") and then contrasts the soldiers with "A benighted sportsman caught in a storm", who at least finds that "repose and comfort await him" in the first hut he reaches. The comparison asks the comfortable reader at home to measure how much more the soldiers endure. Where the writer of Source A wants endurance to stop being necessary, Russell wants it honoured.`,
            },
            markScheme: {
              'How it is marked (16 marks)': Q4_MARKING,
              'Points you might make': [
                `Cause and blame: Source A blames those in power ("told by a government"); Russell blames no one and treats the storm as a trial that calls on "the soldier's highest qualities".`,
                'Feelings: anger and urgency in Source A; pity and admiration in Source B.',
                `Endurance: Carol's calm is "something worse than panic: resignation"; the soldiers' silence shows "fortitude and high courage".`,
                `Methods: Source A uses an eyewitness, a named woman's direct speech and the sense of smell ("smells of sewage and river mud"); Russell uses imperatives ("Let the reader imagine"), long lists and a contrast with "A benighted sportsman".`,
                'Endings: Source A brings a "future problem" into the present ("Carol is living with it now"); Russell ends with his own tent down and his party struggling "out into the mud".',
              ],
            },
          },
        ],
      },
      {
        id: 'aqa-p2-06-writing',
        title: 'Section B: Writing',
        description: SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p2-06-q5',
            questionNumber: 5,
            questionText: `"The environment is not a political issue: it is a survival issue. Every person alive today has a moral duty to change the way they live."\n\nWrite an article for a broadsheet newspaper arguing your own view of this statement.\n\n${Q5_MARKS_LINE}`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Our duty begins at home, but it cannot end there\n\nEvery few months another record falls: the hottest summer, the wettest winter, the river that bursts its banks for the third time in a decade. Each one arrives with the same advice. Switch off the lights, take the bus, eat less meat. It is tempting to agree that the environment is a matter of survival rather than politics, and that each of us has a moral duty to change the way we live. I agree with half of that. The environment is certainly a survival issue. But that is exactly why it must also be a political one.\n\nBegin with what is true. The air we breathe, the water we drink and the food we grow all depend on a climate that is changing faster than our grandparents could have imagined. When homes flood or harvests fail, what is lost is not an argument but a livelihood. In that sense survival is the right word, and anyone who treats climate change as a debate to be won is missing the point.\n\nIt is also true that our choices matter. If millions of households waste less, travel more lightly and buy more carefully, the difference adds up. A moral duty is not too strong a phrase for that. We would not excuse someone who dropped litter on the grounds that one crisp packet changes nothing, and we should not excuse ourselves.\n\nYet a duty placed on every person alive today falls unequally. A family in a draughty rented flat cannot fit a heat pump. A worker in a village with two buses a day cannot leave the car at home. To tell them that the planet's survival rests on their shoulders is not only unfair; it lets the largest polluters off the hook. A single coal-fired power station puts more carbon into the air in a year than any of us could in a lifetime.\n\nThat is where politics comes in. Only governments can build flood defences, insulate millions of homes, run trains that people can afford and set rules that companies must follow. Calling the environment non-political sounds like a call to rise above quarrels, but in practice it can become an excuse to do nothing: if the problem belongs to nobody in particular, it is nobody's job to solve it.\n\nSo yes, change the way you live, where you can. Turn down the heating. Walk when you are able to. But do not stop there. Ask your MP what is being done. Ask who pays when the river rises. Survival is too important to be left to private conscience alone.\n\nThe planet does not need us to choose between personal duty and political action. It needs both, and it needs them now.`,
            },
            markScheme: {
              ...Q5_MARKING,
              'What earns marks in this task': [
                'The features of a broadsheet article: a headline, an opening that draws the reader in, and paragraphs that develop the argument.',
                'A serious, informed tone and a formal register that suit broadsheet readers.',
                'A clear view of both parts of the statement: whether the environment is a matter of survival rather than politics, and whether every person has a moral duty to change how they live.',
                'Reasons and examples that develop the argument, with an opposing view answered.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 07 - Travel & Exploration
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p2-07',
    board: 'AQA',
    paperNumber: 2,
    title: "Paper 2: Writers' Viewpoints and Perspectives",
    subtitle: 'English Language 8700/2',
    code: '8700/2',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p2-07-reading',
        title: 'Section A: Reading',
        description: `${SECTION_A_GUIDANCE}\n\nSource A: ${EXAM_07_SOURCE_A_REF}\nSource B: ${EXAM_07_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p2-07-q1',
            questionNumber: 1,
            questionText: `${Q1_QUESTION_INTRO}\n\nA) The writer travelled to the Arctic on a journey of self-discovery.\nB) The writer wanted to see the ice sheets before they disappeared.\nC) The writer calls this kind of tourism honest.\nD) The landscape was welcoming to visitors.\nE) The writer's questions became more urgent in the Arctic.\nF) The writer compares the vanishing questions to breath in extreme cold.\nG) The writer had read about disappearing ice sheets.\nH) The landscape was small and enclosed.`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${EXAM_07_SOURCE_A}\n\nSource B:\n${EXAM_07_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_07_SOURCE_A_REF} | Source B: ${EXAM_07_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': `B, C, F and G.\n\nB: "I wanted to see them before they were gone".\nC: "a morbid kind of tourism, I suppose, but an honest one".\nF: the questions "simply evaporated, like breath in minus thirty degrees".\nG: "I had read about the ice sheets disappearing".\n\nA is not true: "I did not come to the Arctic to find myself". D is not true: the landscape is "indifferent to human presence". E is not true: the questions "simply evaporated". H is not true: the landscape is "so vast".`,
            },
            markScheme: [
              'True: B, C, F and G.',
              'Not true: A (the writer "did not come to the Arctic to find myself"), D (the landscape is "indifferent to human presence"), E (the questions "simply evaporated") and H (the landscape is "so vast").',
              ...Q1_MARKING,
            ],
          },
          {
            id: 'aqa-p2-07-q2',
            questionNumber: 2,
            questionText: `This question is about both sources.\n\nExplain what you can infer about the differences between the writer's visit to the glacier in Source A and Whymper's crossing of the crevasse in Source B.\n\nTo infer is to work out what the details suggest. Support each point with details from both sources.`,
            marks: 8,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: `Source A:\n${EXAM_07_SOURCE_A}\n\nSource B:\n${EXAM_07_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_07_SOURCE_A_REF} | Source B: ${EXAM_07_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 8-9': `The two experiences differ first in purpose. The writer of Source A goes to the ice as a witness, having come "specifically to photograph" the glaciers before they disappear, so the visit is about looking and remembering. Whymper and his companions are on the ice because they have to cross it: when "The axe of Croz all at once stopped", the party discover that "the chasm had to be passed then and there", which suggests that for them the ice is simply the obstacle between them and the rest of the climb.\n\nThe danger they face is also very different. The writer of Source A can stand on the glacier and listen to it, which implies that the visit, though uncomfortable, is safe. Whymper's crossing is genuinely dangerous: a jump that falls short of the "narrow ridge of ice" ends in the crevasse, which is "still gaping in many places". The fact that Croz has to untie Walker "in order to get rope enough" suggests how carefully the climbers must manage the risk.\n\nThe ice itself seems to be in a different state. In Source A it is shrinking: Ingrid says the glacier has "retreated two kilometres" since she first arrived, twenty years before, so the writer is watching something being lost. In Source B the ice is vast: a wall split by a fissure that stretches "as far as could be seen", which suggests a landscape far too large for people to change.\n\nFinally, the experiences leave the writers with different feelings. The writer of Source A ends in sorrow and helplessness, because the ice "does not care about our guilt or our grief". Whymper, once across, is relieved and a little embarrassed: having "felt supremely ridiculous", he "vowed that it was nothing" and turned to encourage his friend Reynaud, which suggests that for him the danger has already become a story to laugh about.`,
            },
            markScheme: {
              'How it is marked (8 marks)': Q2_MARKING,
              'Points you might make': [
                'Purpose: the writer of Source A comes as a witness, "specifically to photograph" the glaciers; the climbers in Source B must get past the ice, because "the chasm had to be passed then and there".',
                'Danger: Source A\'s visit is safe enough to stand and listen; Whymper\'s jump could end in a crevasse "still gaping in many places".',
                'The ice: shrinking in Source A ("retreated two kilometres"); vast in Source B, split by a fissure that runs "as far as could be seen".',
                'Pace: Source A\'s experience is slow and thoughtful; Whymper\'s is sudden ("all at once") and over in a moment.',
                'Feelings: grief and helplessness ("It simply melts") against relief and embarrassment ("I felt supremely ridiculous", "vowed that it was nothing").',
              ],
            },
          },
          {
            id: 'aqa-p2-07-q3',
            questionNumber: 3,
            questionText: `Look only at Source A, from the second paragraph to the end (from "Svalbard is not beautiful" to "It simply melts").\n\nHow does the writer use language to describe Svalbard and what is happening to its glaciers?\n\n${Q3_THINK_ABOUT}`,
            marks: 12,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${EXAM_07_SOURCE_A}`,
            extractSource: EXAM_07_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': `The writer uses negative language to show that the Arctic is not what the writer expected. The glaciers are "not the pristine white cathedrals" the writer had imagined but "dirty, fractured walls". The word "dirty" is surprising because we expect ice to be clean. The short sentence "They groaned." makes the glaciers sound alive, as if they are in pain. Ingrid's words about "a photograph of something that no longer exists" are powerful because they make the reader realise the ice is disappearing. Near the end, the sentence "The ice does not care about our guilt or our grief" personifies the ice to show that nature is indifferent to human feelings, which makes the loss feel even sadder.`,
              'Grade 6-7': `The writer builds a sense of loss out of disappointed expectations. Svalbard is "not beautiful in the way travel brochures suggest", there are "no sweeping panoramas", and the glaciers are "not the pristine white cathedrals I had imagined": the repeated negatives strip away the comforting pictures the reader brings, so that the real place is defined by what it fails to be. In their place come "dirty, fractured walls of blue-grey ice", where "fractured" already suggests damage. The short sentence "They groaned." isolates the sound, and the verb gives the ice a voice, suggesting pain or protest. The simile that follows, "like a building settling, or a body shifting in sleep", deepens this: the first hints at a structure shifting under its own weight, the second at something alive but unaware. Ingrid's words, "You are looking at a photograph of something that no longer exists", turn the present into the past, suggesting that even to witness the glacier is already to remember it. The penultimate sentence, "The ice does not care about our guilt or our grief", names the feelings the article has been building in two alliterating abstract nouns, while "does not care" refuses the reader any comfort from a natural world that might respond.`,
              'Grade 8-9': `The writer's description moves through disillusionment and witness to a bleak acceptance that refuses consolation. Svalbard is introduced through what it is not, "not beautiful in the way travel brochures suggest", and the description that follows works as a kind of anti-sublime: where Romantic writers found in Arctic landscapes a terror that lifted the spirit, this writer finds only "a flatness that goes on and on" and "a sky the colour of old steel". The comparison with "old steel" is precisely chosen, since it suggests not natural beauty but worn, industrial metal, as if the manufactured world had seeped into the natural one. Even the silence is unsettling: it is "so complete that you can hear your own blood moving", which turns the reader's attention from the landscape to the fragile human body inside it.\n\nThe glaciers' sounds are the passage's most original image: "Deep, structural sounds, like a building settling, or a body shifting in sleep." The word "structural" is key, because it implies that the groaning comes from the foundations of the ice rather than its surface. The fragment, with no main verb, lets the image stand on its own, and the move from "building" to "body" gives the ice a growing sense of life that prepares for Ingrid's paradox: "You are looking at a photograph of something that no longer exists." Presence and absence collapse into each other here, as the glacier is at once in front of the writer and already gone. The last paragraph is the shortest in the piece. After so much elaborate description, "It simply melts" uses three plain words, and the adverb "simply" makes the loss sound ordinary, almost casual; that refusal of rhetoric enacts the indifference the paragraph describes.`,
            },
            markScheme: {
              'How it is marked (12 marks)': Q3_MARKING,
              'Points you might make': [
                'Negatives ("not beautiful in the way travel brochures suggest", "no sweeping panoramas", "not the pristine white cathedrals") strip away the expected beauty.',
                '"a sky the colour of old steel" and "dirty, fractured walls of blue-grey ice" suggest decay and damage.',
                'The short sentence "They groaned." and the simile "like a building settling, or a body shifting in sleep" give the ice life and pain.',
                `Ingrid's "a photograph of something that no longer exists" makes witnessing a kind of remembering.`,
                'The final short paragraph, "The ice does not care about our guilt or our grief. It simply melts.", ends on plain, flat statements that refuse comfort.',
              ],
            },
          },
          {
            id: 'aqa-p2-07-q4',
            questionNumber: 4,
            questionText: `Use all of Source A and all of Source B for this question.\n\nCompare the two writers' feelings and perspectives on the natural world and people's place in it, and the methods each writer uses to convey them.\n\n${Q4_AIM_TO}`,
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${EXAM_07_SOURCE_A}\n\nSource B:\n${EXAM_07_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_07_SOURCE_A_REF} | Source B: ${EXAM_07_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': `Both writers describe vast, icy landscapes, but their feelings about them are very different. The writer of Source A sees the ice as something people are damaging: the glacier is melting, and "The ice does not care about our guilt or our grief." The writer feels guilty and sad. Whymper in Source B sees the ice as an obstacle and an adventure: the crevasse has to be crossed with "A downward jump of fifteen or sixteen feet". Both writers show the power of nature, but Source A makes people seem guilty and small, while Source B shows people overcoming nature with skill and nerve, like Croz, who "sprang over the chasm". Whymper also makes fun of himself, admitting that he "felt supremely ridiculous", which makes his account light-hearted, while Source A is serious throughout.`,
              'Grade 6-7': `The two writers stand at opposite ends of a changing relationship between people and the natural world. For Whymper, climbing in the 1860s, the ice is an adversary and a stage. When the clouds roll away "right and left" he calls the effect "dramatic", "a coup de théâtre", and the jump that follows is a "great sensation leap" to be performed "by the entire company": the language of the theatre turns a dangerous crevasse into a performance in which the climbers are the actors. Nature supplies the danger (the leap must be made "on an ice-slope of 54°", and the crevasse is "ready to receive an erratic body") and human beings supply the skill: Croz "alighted cleverly on his feet". The writer of Source A reverses these roles. The glacier is not an obstacle to be overcome but a casualty to be mourned; it has "retreated two kilometres", and its "Deep, structural sounds" suggest something breaking. The people in Source A are not heroes but spectators, and uneasy ones: the journey is "a morbid kind of tourism". The methods match the attitudes. Whymper uses precise measurement ("fifteen or sixteen feet", "seven or eight feet"), clipped direct speech ("Bergschrund, gentlemen.") and comic understatement ("That is not much, you will say."), and his self-mockery at the edge, "I felt supremely ridiculous", turns real fear into comedy, the voice of a man confident, looking back, that the mountain can be mastered. The writer of Source A uses negation and short, flat statements ("They groaned." "It simply melts.") to present a natural world that people have damaged and cannot repair. Whymper's ice waits to test the climber; the ice in Source A is disappearing, and "does not care about our guilt or our grief".`,
            },
            markScheme: {
              'How it is marked (16 marks)': Q4_MARKING,
              'Points you might make': [
                'Perspective: for Whymper the ice is an adversary and a stage ("a coup de théâtre"); for the writer of Source A it is a casualty ("retreated two kilometres").',
                'People: skilled and bold in Source B (Croz "alighted cleverly on his feet"); uneasy spectators in Source A ("a morbid kind of tourism").',
                'Feelings: excitement and self-mockery ("I felt supremely ridiculous") against grief and guilt ("our guilt or our grief").',
                `Methods: Whymper's theatrical language, precise measurements and comic understatement; Source A's negatives, personified sounds and short, flat sentences.`,
                'Endings: Whymper lands "sprawling in the snow" and makes light of it; Source A ends on "It simply melts".',
              ],
            },
          },
        ],
      },
      {
        id: 'aqa-p2-07-writing',
        title: 'Section B: Writing',
        description: SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p2-07-q5',
            questionNumber: 5,
            questionText: `"Travel broadens the mind, but in the age of climate change it also damages the planet. We need to rethink how and why we travel."\n\nWrite the speech you would give at a school assembly, arguing your own view of this statement.\n\n${Q5_MARKS_LINE}`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Good morning, everyone.\n\nThink back to the best trip you have ever taken. Perhaps it was a week by the sea, a visit to family in another country, or a day in a city you had only seen on a screen. Whatever it was, I would guess you came back a little different. You had tasted new food, heard a new language, or simply realised that the world is bigger than our town. Travel broadens the mind. On that, the statement is right.\n\nBut the statement says something else too. It says that travel damages the planet, and that we need to rethink how and why we do it. I agree, and I want to persuade you that rethinking travel does not mean giving it up. It means travelling better.\n\nLet us be honest about the cost. A single return flight to a holiday resort can produce more carbon than some people in the world's poorest countries are responsible for in a whole year. Cruise ships burn fuel day and night. Weekend breaks by plane have become so cheap that we hardly think about them. None of that makes travellers wicked. It makes us part of a problem we can help to solve.\n\nSo how should we rethink it? First, the how. Trains are slower than planes, but they turn the journey into part of the adventure: you watch the landscape change through the window instead of staring at the back of a seat. Coaches, ferries, even bicycles can take us further than we imagine. Second, the why. Do we need three short trips a year, or would one longer visit, where we really get to know a place, teach us more? A fortnight in one village may broaden the mind more than six hurried stops ticked off a list.\n\nSome of you will say that this is easy for people who can choose. You are right that not everyone can afford a slow holiday, and that families separated by oceans may have no option but to fly. Nobody is asking them to stay apart. What we can ask is that those of us who travel for fun think harder about the choices we make.\n\nAnd remember that broadening the mind does not always need a passport. A museum in the next city, a walk in hills you have never climbed, a conversation with a neighbour who grew up somewhere else: these are journeys too.\n\nSo here is my challenge. Next time someone in your family plans a trip, ask two questions. How will we get there? And why are we going? If the answers make the journey kinder to the planet, the trip will still broaden your mind. It might even broaden it more.\n\nThank you.`,
            },
            markScheme: {
              ...Q5_MARKING,
              'What earns marks in this task': [
                'The features of a speech: a greeting, direct address, questions and repetition that work when heard, and a memorable ending.',
                'A tone that suits students and teachers in a school hall: lively and clear, never lecturing.',
                'A clear view of both parts of the statement: what travel gives us, and whether, and how, we should rethink it.',
                `Reasons and examples close to the audience's own lives, with an opposing view answered.`,
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 08 - Health & Medicine
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p2-08',
    board: 'AQA',
    paperNumber: 2,
    title: "Paper 2: Writers' Viewpoints and Perspectives",
    subtitle: 'English Language 8700/2',
    code: '8700/2',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p2-08-reading',
        title: 'Section A: Reading',
        description: `${SECTION_A_GUIDANCE}\n\nSource A: ${EXAM_08_SOURCE_A_REF}\nSource B: ${EXAM_08_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p2-08-q1',
            questionNumber: 1,
            questionText: `${Q1_QUESTION_INTRO}\n\nA) The writer describes a hospital waiting room at three in the morning.\nB) The waiting room was empty.\nC) People had been sitting for six hours.\nD) The writer describes the waiting room as revealing.\nE) Patients were complaining loudly.\nF) The writer says the waiting room hides what the country is really like.\nG) The chairs in the waiting room were made of wood.\nH) The writer says the waiting room shows a country that is exhausted and anxious.`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${EXAM_08_SOURCE_A}\n\nSource B:\n${EXAM_08_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_08_SOURCE_A_REF} | Source B: ${EXAM_08_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': `A, C, D and H.\n\nA: "The waiting room of an NHS hospital at three o'clock in the morning".\nC: people "have been sitting in plastic chairs for six hours".\nD: it is "one of the most revealing places in Britain".\nH: "you see the country as it really is: exhausted, anxious".\n\nB is not true: people have been "sitting in plastic chairs" there for hours. E is not true: they wait "without complaint". F is not true: the waiting room shows "the country as it really is". G is not true: the chairs are "plastic".`,
            },
            markScheme: [
              'True: A, C, D and H.',
              'Not true: B (people have been sitting there for six hours), E (they wait "without complaint"), F (the room shows "the country as it really is") and G (the chairs are plastic).',
              ...Q1_MARKING,
            ],
          },
          {
            id: 'aqa-p2-08-q2',
            questionNumber: 2,
            questionText:
              'This question is about both sources.\n\nExplain what you can infer about the differences between the London hospital in Source A and the army hospital at Scutari in Source B.\n\nTo infer is to work out what the details suggest. Support each point with details from both sources.',
            marks: 8,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: `Source A:\n${EXAM_08_SOURCE_A}\n\nSource B:\n${EXAM_08_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_08_SOURCE_A_REF} | Source B: ${EXAM_08_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 8-9': `The two hospitals are under pressure for different reasons. The London hospital in Source A is short of beds: Arthur waits "in a corridor on a trolley for eleven hours because there are no beds", and the figures for waiting lists and unfilled nursing posts suggest a shortage that has built up over years. The hospital at Scutari has a different problem. It is overflowing because the wounded have arrived all at once, "all this fresh influx", laid in two corridors with "just room for one person to pass between". Its "four miles of Beds" suggest a hospital that has found beds but not the space for them, while the London hospital cannot find the beds at all.\n\nThe patients are different too. The London patients are ordinary members of the public, such as Arthur, who "paid his taxes for fifty years"; their suffering is the long wait. The patients at Scutari are soldiers "newly wounded" in war, many of them facing surgery, which suggests a far greater danger to life.\n\nThe staff seem different in spirit. In Source A they are presented as devoted: the system "functions through the sheer willpower of its staff", and Amira, fourteen hours into her shift, says "I love this job". Their problem is exhaustion. At Scutari the staff vary widely: "Two of them are brutes, and four are angels", and the young assistants complain about being called away "from their dinners", which suggests that some of them lack the care the work needs.\n\nFinally, the atmosphere is different. In the London waiting room the writer sees a country "exhausted, anxious", held together by people who wait "without complaint". At Scutari, on Nightingale's rounds "that first night", there is "the strictest discipline", and almost the only sound is "the steps of the Sentry", which suggests an army hospital where even the patients behave like soldiers.`,
            },
            markScheme: {
              'How it is marked (8 marks)': Q2_MARKING,
              'Points you might make': [
                'The problem: too few beds and long waits in London ("because there are no beds"); a sudden flood of wounded at Scutari ("all this fresh influx"), with beds "not eighteen inches apart".',
                'The patients: ordinary members of the public such as Arthur; soldiers "newly wounded" in war.',
                'The staff: devoted but exhausted in London ("I cannot sustain this"); mixed at Scutari ("Two of them are brutes, and four are angels").',
                'The atmosphere: anxious but patient in London; silent and disciplined at Scutari ("the strictest discipline").',
                'The place: an emergency department with a waiting room of "plastic chairs" (Source A); a barracks, with the wounded laid "between us and the Main Guard" (Source B).',
              ],
            },
          },
          {
            id: 'aqa-p2-08-q3',
            questionNumber: 3,
            questionText: `Look only at Source A, the second and third paragraphs (from "I spent a night" to "the measure of where we are").\n\nHow does the writer use language to describe the strain on the NHS and on its staff and patients?\n\n${Q3_THINK_ABOUT}`,
            marks: 12,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${EXAM_08_SOURCE_A}`,
            extractSource: EXAM_08_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': `The writer uses statistics to show the scale of the crisis: "7.8 million people on NHS waiting lists" is a shocking number that makes the reader understand how serious the problem is. The description of Amira working "fourteen hours" makes us feel sorry for NHS staff. The detail that she has "treated thirty-seven patients since midday" shows how overworked she is. Arthur waiting on "a trolley for eleven hours" creates sympathy because he is an elderly man being neglected. The fact that Arthur apologises "for being a nuisance" is particularly sad because he is the one being let down, not the one causing problems.`,
              'Grade 6-7': `The writer moves from the staff to the statistics to a single patient, and each step makes the strain more personal. The second paragraph opens by correcting the headlines: what the writer saw "was not the catastrophe the headlines describe but something more complicated", a system "crumbling at every institutional seam". The metaphor of seams presents the health service as a garment coming apart along its joins, held together only by "the sheer willpower of its staff". Amira's portrait then uses precise numbers ("thirty-seven patients since midday", "fourteen hours into her shift", coffee refilled "for the fifth time") to build up a sense of exhaustion. The two short sentences "Her hands were steady. Her eyes were not." are parallel, which invites comparison, and the final "were not" shows the strain her skill is hiding. In the third paragraph the writer turns the statistics against themselves: after "7.8 million people on NHS waiting lists", the short sentence "But numbers are abstractions." gives way to a man on a trolley, so the reader must turn data into suffering. Arthur is defined by negatives, "fought in no wars and climbed no mountains", which make him ordinary, so his neglect seems not a dramatic injustice but a routine one. His apology "for being a nuisance" is the emotional climax, because it reverses the moral relationship: the man who should receive care apologises to the nurses who cannot give him a bed.`,
              'Grade 8-9': `The writer tightens the reader's sympathy in stages, moving from the system to one doctor, then to the numbers, and finally to one patient. The second paragraph begins by refusing the easy story: the writer saw "not the catastrophe the headlines describe but something more complicated". The paradox that follows, a system that "functions through the sheer willpower of its staff while crumbling at every institutional seam", holds both truths in one sentence; "crumbling" suggests slow decay rather than sudden collapse, and "seam" makes the service a worn garment held together by effort alone.\n\nThe portrait of Amira is built from exact numbers ("twenty-eight years old", "fourteen hours", "thirty-seven patients", the "fifth time" she refills her coffee), each one adding weight to a load that is already too heavy. The parallel sentences "Her hands were steady. Her eyes were not." set professional skill against private exhaustion: the body keeps working while the person behind it falters. Her own words widen the point. "I love this job" is personal; the words that follow, "But I cannot sustain this. Nobody can.", move from "I" to "Nobody", so that one doctor's testimony becomes a judgement on the whole system.\n\nThe third paragraph uses statistics for their force and then undercuts them. After the list of figures, the short sentence "But numbers are abstractions." insists that individual experience matters more, and the writer supplies it: Arthur, "sitting in a corridor on a trolley for eleven hours". He is defined by negatives, "fought in no wars and climbed no mountains", which make him ordinary rather than heroic, and that is the point: his treatment is shameful precisely because he could be anyone. The image of him "apologising to the nurses for being a nuisance" reverses the moral order, as the person failed by the system shows politeness instead of anger. The final sentence, "That is the measure of where we are", points back to a man who "paid his taxes for fifty years" and "cannot get a bed", and makes his situation the yardstick for the whole country.`,
            },
            markScheme: {
              'How it is marked (12 marks)': Q3_MARKING,
              'Points you might make': [
                'The paradox of a system that "functions through the sheer willpower of its staff while crumbling at every institutional seam".',
                `Precise numbers in Amira's portrait ("fourteen hours into her shift", "thirty-seven patients since midday") build up exhaustion.`,
                'The parallel short sentences "Her hands were steady. Her eyes were not." and the move from "I" to "Nobody" in her speech.',
                '"But numbers are abstractions." turns the statistics into one man, Arthur, on "a trolley for eleven hours".',
                'Negatives ("fought in no wars and climbed no mountains"), the apology "for being a nuisance" and the closing judgement "That is the measure of where we are".',
              ],
            },
          },
          {
            id: 'aqa-p2-08-q4',
            questionNumber: 4,
            questionText: `Use all of Source A and all of Source B for this question.\n\nCompare the two writers' feelings and perspectives on hospitals under pressure and the people in them, and the methods each writer uses to convey them.\n\n${Q4_AIM_TO}`,
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${EXAM_08_SOURCE_A}\n\nSource B:\n${EXAM_08_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_08_SOURCE_A_REF} | Source B: ${EXAM_08_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': `Both writers are concerned about the state of hospitals and sympathetic to patients. The writer of Source A is frustrated that the NHS cannot cope, using statistics like "7.8 million people on NHS waiting lists" to prove the point. Nightingale in Source B describes the crowded wards of a military hospital, with "four miles of Beds". Both writers praise some of the staff (Amira works on despite exhaustion, and Nightingale calls four of the doctors "angels"), but Nightingale also criticises the "brutes" and the assistants who complain about missing their dinners. Both use patients to create sympathy: Arthur in Source A, and the wounded soldiers in Source B, who suffer "without a complaint". A key difference is that Nightingale is also hopeful: even in the "appalling Horror" of the hospital, she says "there is good".`,
              'Grade 6-7': `Both writers bear witness to hospitals under strain and side with the patients, but their positions and methods differ. The writer of Source A is an outsider who spends a single night in an emergency department "for this article", and builds an argument from statistics and interviews: the numbers ("7.8 million", "one in ten nursing posts unfilled") are followed by the insistence that "numbers are abstractions", and then by Arthur, whose apology "for being a nuisance" turns the statistics into a person. Nightingale writes from the inside, as one of those doing the work, in a private letter to Dr Bowman, a surgeon, and her voice is quick, frank and sometimes darkly funny. She judges the doctors bluntly, "Two of them are brutes, and four are angels", and explains why: "this is a work which makes either angels or devils of men and of women too". Her mockery of the young assistants as "Cubs" who "grow up into good old Bears" is affectionate as well as critical. Both writers turn to the patients to measure what is happening. Arthur, who "fought in no wars and climbed no mountains", is defined by his ordinariness; Nightingale's soldiers are defined by their courage, bearing their pain "with an unshrinking heroism which is really superhuman". In both, the patients' patience shows up the failings around them: Arthur's apology shames a system that leaves him in a corridor, and the soldiers' silence contrasts with the assistants who grumble about their dinners. The sharpest difference is in tone. The writer of Source A ends in judgement: "That is the measure of where we are." Nightingale, in the midst of "this appalling Horror", can still echo St Peter, "It is good for us to be here", and then joke that he might not have said so had he been there. She finds a meaning in the work that keeps her going, while the doctor in Source A, who says "I love this job", "cannot sustain this".`,
            },
            markScheme: {
              'How it is marked (16 marks)': Q4_MARKING,
              'Points you might make': [
                'Position: an outsider spending one night "for this article" (Source A); an insider writing a private letter from the wards (Source B).',
                'Staff: devoted but worn out (Amira: "I cannot sustain this"); sharply mixed ("Two of them are brutes, and four are angels").',
                `Patients: Arthur's ordinariness ("fought in no wars and climbed no mountains"); the soldiers' "unshrinking heroism".`,
                'Feelings: anger and judgement ("That is the measure of where we are") against a frank, wry hope ("there is good").',
                'Methods: statistics, a named doctor and a named patient (Source A); blunt judgements, nicknames ("Cubs", "old Bears") and a joke about St Peter (Source B).',
              ],
            },
          },
        ],
      },
      {
        id: 'aqa-p2-08-writing',
        title: 'Section B: Writing',
        description: SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p2-08-q5',
            questionNumber: 5,
            questionText: `"The NHS is the greatest achievement of British society. We must be prepared to pay whatever it costs to save it."\n\nWrite a letter to your local MP arguing your own view of this statement.\n\n${Q5_MARKS_LINE}`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Dear [your MP's name],\n\nI am writing as one of your younger constituents, a student at a local secondary school, about the future of the National Health Service. I have often heard it said that the NHS is the greatest achievement of British society and that we must pay whatever it costs to save it. I agree with the first half of that statement. The second half, I believe, needs more careful thought, and I would like to explain why.\n\nThere are many things Britain can be proud of, but few touch every family. The NHS does. It was there when I was born, and it was there when my grandfather needed a new hip. No one asked either of us for a credit card. The principle that care should depend on need rather than wealth is a remarkable one, and many countries still do not offer it. In that sense, the NHS may well be our greatest achievement.\n\nYet the words "whatever it costs" worry me. Money spent on the NHS is not spent elsewhere: on schools, on housing, on the clean air and good food that stop people becoming ill in the first place. If we pour ever more money into hospitals while neglecting those things, we may find that the queues grow longer however much we spend. A health service is only as strong as the health of the country it serves.\n\nI also believe that saving the NHS is about more than money. Nurses I have spoken to say that what they need most is time: enough colleagues to share the work, enough beds so that patients are not left in corridors, and enough support so that experienced staff do not leave. Some of that requires funding, of course. But it also requires planning, honest public debate and a willingness to change the way services are run.\n\nSome will say that any limit on spending is the first step towards dismantling the NHS. I understand that fear, and I share the belief that the service must remain free when people need it. But asking how money can be spent wisely is not an attack on the NHS. It is the best way to protect it, because a service that is run well keeps the trust of the taxpayers who fund it.\n\nI would therefore ask you to do three things. Please support fair, long-term funding for the NHS, rather than emergency payments each winter. Please speak up for spending on prevention, so that fewer people need hospital care at all. And please listen to the staff who keep the service running, because they know better than anyone what it needs.\n\nThe NHS deserves to be saved. Let us make sure we save it wisely.\n\nYours sincerely,\n\n[Your name]`,
            },
            markScheme: {
              ...Q5_MARKING,
              'What earns marks in this task': [
                'The conventions of a formal letter: a greeting, a clear reason for writing in the opening paragraph, and a suitable sign-off such as "Yours sincerely".',
                'A formal, respectful register that still argues firmly: the reader is an MP who could act on it.',
                'A clear view of both parts of the statement: whether the NHS is the greatest achievement of British society, and whether it should be saved whatever the cost.',
                'Reasons and examples, with an opposing view answered and a clear request at the end.',
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
    id: 'aqa-p2-09',
    board: 'AQA',
    paperNumber: 2,
    title: "Paper 2: Writers' Viewpoints and Perspectives",
    subtitle: 'English Language 8700/2',
    code: '8700/2',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p2-09-reading',
        title: 'Section A: Reading',
        description: `${SECTION_A_GUIDANCE}\n\nSource A: ${EXAM_09_SOURCE_A_REF}\nSource B: ${EXAM_09_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p2-09-q1',
            questionNumber: 1,
            questionText: `${Q1_QUESTION_INTRO}\n\nA) The writer's parents arrived with two suitcases.\nB) They spoke fluent English when they arrived.\nC) They already had family in Leicester.\nD) They brought a dictionary with them.\nE) The family settled in Manchester.\nF) They left behind everything that was familiar.\nG) Their new home was a council flat.\nH) The writer's father now runs two pharmacies.`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${EXAM_09_SOURCE_A}\n\nSource B:\n${EXAM_09_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_09_SOURCE_A_REF} | Source B: ${EXAM_09_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': `A, D, F and G.\n\nA and D: they came "with two suitcases and a dictionary".\nF: "They had left behind everything that was familiar".\nG: they left everything "in exchange for a council flat in Leicester".\n\nB is not true: "They spoke no English". C is not true: "They knew nobody". E is not true: the flat was in Leicester. H is not true: the father "now runs three pharmacies".`,
            },
            markScheme: [
              'True: A, D, F and G.',
              'Not true: B (they "spoke no English"), C (they "knew nobody"), E (the flat was in Leicester) and H (the father runs three pharmacies).',
              ...Q1_MARKING,
            ],
          },
          {
            id: 'aqa-p2-09-q2',
            questionNumber: 2,
            questionText: `This question is about both sources.\n\nExplain what you can infer about the differences between the writer's parents in Source A and the Irish immigrants Engels describes in Source B.\n\nTo infer is to work out what the details suggest. Support each point with details from both sources.`,
            marks: 8,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: `Source A:\n${EXAM_09_SOURCE_A}\n\nSource B:\n${EXAM_09_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_09_SOURCE_A_REF} | Source B: ${EXAM_09_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 8-9': `The two groups seem to have left home for different reasons. The writer's parents were escaping danger: "political violence had made their home uninhabitable", and the mother wanted her children to grow up where they would not be "beaten for their surname". The Irish in Source B, as Engels presents them, came mainly for work, because they had heard that across the sea there was "steady work and good pay for strong arms", which suggests a choice driven by poverty rather than by fear for their lives.\n\nWhat they arrived with also suggests different hopes. The parents brought "two suitcases and a dictionary", and the dictionary implies that they meant to learn the language and build a life. The Irish crossed "for fourpence" on the deck of a steamship, "packed like cattle", which suggests that they were too poor to travel any other way and were treated as cargo rather than passengers.\n\nTheir lives in their new country turned out very differently. The parents began in "a council flat in Leicester" but prospered: the father "now runs three pharmacies" and the mother "teaches mathematics". Engels's Irish remain at the bottom, forming "the lowest class of the population" and living in "The worst quarters of all the large towns", which suggests a poverty that did not lift.\n\nFinally, the two groups are seen very differently, and this tells us as much about the writers as about the migrants. The parents are one family, described with respect. The Irish are a mass, "armies of the Irish" and "more than a million", and Engels describes them with open prejudice as "rough, intemperate, and improvident". A modern reader can infer from his own details, such as their going without shoes and living on "potatoes and potatoes only", that much of what he blames on their character was really the result of poverty.`,
            },
            markScheme: {
              'How it is marked (8 marks)': Q2_MARKING,
              'Points you might make': [
                'Why they came: fear of "political violence" (Source A); the hope of "steady work and good pay for strong arms" (Source B).',
                'What they brought: "two suitcases and a dictionary", a sign of a plan to settle and learn (Source A); a fourpenny passage "packed like cattle" (Source B).',
                'Numbers: one family (Source A); "more than a million" and "armies of the Irish" (Source B).',
                'What became of them: success ("three pharmacies") against life at the bottom ("the lowest class of the population").',
                'How they are seen: with respect (Source A); through prejudice ("rough, intemperate, and improvident"), which says more about Engels than about the Irish (Source B).',
              ],
            },
          },
          {
            id: 'aqa-p2-09-q3',
            questionNumber: 3,
            questionText: `Look only at Source A, the second and third paragraphs (from "I am tired of it because" to "slogans on the side of a bus").\n\nHow does the writer use language to challenge the way immigration is talked about?\n\n${Q3_THINK_ABOUT}`,
            marks: 12,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${EXAM_09_SOURCE_A}`,
            extractSource: EXAM_09_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': `The writer uses the family's own story to challenge public debate. The metaphor of "balance sheets" is effective because it shows how the debate turns people into numbers in an account book. The writer gives the real reason the parents came, "because they were afraid", and repeats "because" to pile up the reasons that forced them to leave. The metaphor comparing immigration language to "plumbing" is effective because it shows how the debate treats people as if they were water in pipes. The list of "flows" and "pressures" and "capacity" shows how political language turns people into statistics. The image near the end of a family "making an impossible decision at three in the morning" creates sympathy by making the reader imagine the fear migrants feel.`,
              'Grade 6-7': `The writer challenges the debate by attacking the terms in which it is held. The second paragraph opens with a reason: "the demand that immigrants prove their worth through economic contribution reduces human beings to balance sheets." The metaphor of "balance sheets" exposes the accounting mind-set behind attitudes that may seem welcoming, and the blunt short sentence "My parents did not come here to boost GDP." brings the economic jargon down to earth. The writer then gives the real reasons in a run of clauses, each beginning "because", which builds up the pressure that drove the family out: fear, "political violence", and a mother's wish for her children's safety. The pairing "wonderful but irrelevant" grants the family's success and in the same breath denies that it matters to the moral question. The third paragraph turns on the debate's vocabulary: "flows", "pressures" and "capacity" are named and dismissed as "the language of plumbing, not of people." Naming and rejecting the words of immigration policy makes the writer a critic of the debate's terms, not just a voice within it. The image of "a family making an impossible decision at three in the morning" uses a precise, lonely hour to create intimacy and vulnerability, while "impossible" insists that neither choice is a good one. The final phrase, "slogans on the side of a bus", sets that seriousness against the crudeness of political campaigning.`,
              'Grade 8-9': `The writer refuses to argue on the debate's existing terms: rather than arguing for or against immigration, the writer questions the language in which it is discussed, exposing how that language shapes, and distorts, public understanding. The second paragraph opens with "I am tired of it because", picking up the words that closed the first, so that the weariness carries straight into the argument. Its central claim, that "the demand that immigrants prove their worth through economic contribution reduces human beings to balance sheets", uses a financial metaphor to expose the unspoken bargain behind some apparently tolerant attitudes: you may stay, provided you pay your way. The short, flat "My parents did not come here to boost GDP." punctures that bargain, and the three clauses beginning "because" replace economics with fear, "political violence" and a mother's hope. The pairing "wonderful but irrelevant" is precise rhetorical positioning, granting the fact of the family's success while denying that it bears on the moral question.\n\nThe third paragraph turns on the vocabulary of debate itself. The words "flows", "pressures" and "capacity" are held up in quotation marks, as if at arm's length, and then redescribed in a single devastating phrase: "the language of plumbing, not of people." The comparison is exact, because plumbing moves an undifferentiated substance through a system, and that, the writer implies, is how the debate treats human beings. The next sentence restores the individual: "Behind every statistic is a family". Its parallel structure, "to stay and risk everything, or to leave and lose everything", presents both options as catastrophic, and the repeated "everything" insists that there is no choice without cost. The closing reference to "slogans on the side of a bus" is placed last on purpose: after so much moral seriousness, it reminds the reader how crudely public argument is actually conducted.`,
            },
            markScheme: {
              'How it is marked (12 marks)': Q3_MARKING,
              'Points you might make': [
                'The financial metaphor "reduces human beings to balance sheets" and the blunt "My parents did not come here to boost GDP."',
                'Three clauses beginning "because" replace economics with fear and "political violence".',
                `"wonderful but irrelevant" grants the family's success but denies that it settles the moral question.`,
                `The debate's own words ("flows", "pressures", "capacity") held at a distance and called "the language of plumbing, not of people".`,
                'The parallel "to stay and risk everything, or to leave and lose everything" and the closing "slogans on the side of a bus".',
              ],
            },
          },
          {
            id: 'aqa-p2-09-q4',
            questionNumber: 4,
            questionText: `Use all of Source A and all of Source B for this question.\n\nCompare the two writers' feelings and perspectives on immigration and immigrants, and the methods each writer uses to convey them.\n\n${Q4_AIM_TO}`,
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${EXAM_09_SOURCE_A}\n\nSource B:\n${EXAM_09_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_09_SOURCE_A_REF} | Source B: ${EXAM_09_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': `Both writers explain why people migrated, but their attitudes to immigrants are very different. The writer of Source A uses a family's experience to argue that immigrants should not have to prove their worth, and is sympathetic throughout. Engels in Source B explains that English industry needed the Irish as "a reserve at command", but he describes the Irish themselves in an insulting way, as "rough, intemperate, and improvident" people who "bring all their brutal habits with them". Source A criticises the way people talk about immigration, calling it "the language of plumbing, not of people". Engels's own language often treats the Irish as a mass rather than as people: "armies of the Irish", "such a race". A difference is that the writer of Source A is personally connected to immigration as the child of immigrants, while Engels writes as an outside observer.`,
              'Grade 6-7': `Both writers set out to explain immigration, but they reach almost opposite attitudes towards immigrants. The writer of Source A writes as the child of immigrants and uses personal testimony as both evidence and authority. The argument is moral: it rejects the demand that immigrants "prove their worth through economic contribution", because that demand "reduces human beings to balance sheets", and its feeling is weariness as much as anger, since the writer is "tired of telling" the family's success story. Engels writes as an outside observer, and his argument is economic. For him the Irish matter because the growth of English industry "could not have taken place" without them as "a reserve at command", and he sets out their numbers city by city. The two passages therefore disagree about the very terms of the debate. The writer of Source A objects to "flows" and "pressures" and "capacity", "the language of plumbing, not of people"; Engels's language treats people in just that way, as a mass and a resource, with the Irish arriving as "armies" and valued as "strong arms". His attitude to the people themselves is openly prejudiced. He generalises about a whole nation, calling the Irish "rough, intemperate, and improvident", and asks "What does such a race want with high wages?" A modern reader should recognise this as prejudice. He does add that the English workers among whom the Irish settle are a class "which has, in truth, little inducement to cultivate education and morality", which suggests that he sees the conditions of English working life, and not only the Irish, as part of the problem, and one detail hints at how badly the Irish are treated: they cross the sea "packed like cattle". The writer of Source A, by contrast, ends by turning to the choice a migrant family faces, "to stay and risk everything, or to leave and lose everything", asking the reader to imagine that choice rather than judge it. Read together, the passages show how long the habit of discussing migrants as numbers and types has lasted, and why the writer of Source A thinks it must change.`,
            },
            markScheme: {
              'How it is marked (16 marks)': Q4_MARKING,
              'Points you might make': [
                'Position: the child of immigrants, writing from personal experience (Source A); an outside observer writing about the Irish as a class (Source B).',
                'Argument: moral, against reducing people to "balance sheets" (Source A); economic, the Irish as "a reserve at command" for industry (Source B).',
                'Feelings: weariness and compassion in Source A; contempt in Source B ("What does such a race want with high wages?"), which a modern reader recognises as prejudice.',
                'Methods: a family story, metaphor and a choice the reader is asked to imagine (Source A); statistics, sweeping generalisation and the Irish pictured as a mass, "armies of the Irish" (Source B).',
                'The terms of debate: Source A rejects "the language of plumbing, not of people"; Engels treats the Irish in just that way, as a mass and a resource ("armies of the Irish", "a reserve at command").',
              ],
            },
          },
        ],
      },
      {
        id: 'aqa-p2-09-writing',
        title: 'Section B: Writing',
        description: SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p2-09-q5',
            questionNumber: 5,
            questionText: `"This country has always been shaped by immigration. We should celebrate the diversity it brings rather than fear it."\n\nWrite an article for a broadsheet newspaper arguing your own view of this statement.\n\n${Q5_MARKS_LINE}`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Britain's story has always been written by newcomers\n\nWalk down almost any high street in Britain and you are walking through centuries of arrivals. The church may stand on a site chosen by the Normans. The curry house may serve dishes first cooked in Britain by chefs from Bangladesh, and the corner shop may be run by a family who came from East Africa fifty years ago. The claim that this country has always been shaped by immigration is not a slogan. It is simply history.\n\nShould we celebrate that? I believe we should, and not only because it has made our food more interesting. Immigration has given Britain doctors and nurses, scientists and shopkeepers, footballers and poets. Many of the people who keep our hospitals running were born abroad. When we talk about "diversity", we are really talking about people: neighbours, classmates and colleagues whose different starting points have enriched the country we share.\n\nCelebration matters for a less obvious reason too. People who feel welcome put down roots. They learn the language, start businesses, volunteer and vote. People who feel feared tend to keep to themselves, and suspicion on both sides grows. A country that celebrates its newcomers is not being naive; it is creating the conditions in which they can contribute most.\n\nBut the second half of the statement deserves care. It asks us to celebrate rather than fear, and it is fair to ask what people are afraid of. Some worry about pressure on housing, school places or doctors' surgeries. Those worries are real, and dismissing every one of them as prejudice only drives them underground. The answer is not to stop celebrating but to plan properly: to build the homes and train the staff that a growing population needs, wherever that population comes from.\n\nFear is a poor guide in any case. In the nineteenth century, the Irish labourers who helped to build Britain's canals and railways were often treated with suspicion and contempt. Few people now would question their place in our story. Looking back, the fear usually seems far more foolish than the change it opposed.\n\nCelebrating diversity does not mean pretending that every change is easy. It means recognising that the willingness to welcome and adapt has been one of this country's great strengths. A nation that has taken in so many people, and been renewed by them, has every reason to be confident rather than anxious.\n\nSo the next time immigration is discussed, let us begin with the facts of our own history. Almost all of us, if we go back far enough, are descended from somebody who arrived from somewhere else. That is not a threat to our identity. It is our identity.`,
            },
            markScheme: {
              ...Q5_MARKING,
              'What earns marks in this task': [
                'The features of a broadsheet article: a headline, an opening that draws the reader in, and paragraphs that develop the argument.',
                'A serious, informed tone and a formal register that suit broadsheet readers.',
                `A clear view of both parts of the statement: whether immigration has always shaped the country, and whether its diversity should be celebrated rather than feared.`,
                'Reasons and examples that develop the argument, with the concerns of those who disagree answered fairly.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 10 - Childhood & Youth
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p2-10',
    board: 'AQA',
    paperNumber: 2,
    title: "Paper 2: Writers' Viewpoints and Perspectives",
    subtitle: 'English Language 8700/2',
    code: '8700/2',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p2-10-reading',
        title: 'Section A: Reading',
        description: `${SECTION_A_GUIDANCE}\n\nSource A: ${EXAM_10_SOURCE_A_REF}\nSource B: ${EXAM_10_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p2-10-q1',
            questionNumber: 1,
            questionText: `${Q1_QUESTION_INTRO}\n\nA) The writer grew up in the 1980s.\nB) The writer believes something has gone wrong with childhood.\nC) The writer's own childhood was a golden age.\nD) The writer says the change in childhood happened suddenly.\nE) The writer is a secondary school teacher.\nF) The writer has taught for fifteen years.\nG) The writer's students often have long, boring afternoons with nothing to do.\nH) Every moment of the students' lives has been scheduled.`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${EXAM_10_SOURCE_A}\n\nSource B:\n${EXAM_10_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_10_SOURCE_A_REF} | Source B: ${EXAM_10_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': `B, E, F and H.\n\nB: "Something has gone wrong with childhood."\nE: the writer speaks "as a secondary school teacher".\nF: as a teacher, the writer has watched the change "over fifteen years".\nH: "every moment of their lives has been scheduled".\n\nA is not true: the writer's childhood was "in the 1990s". C is not true: the writer's childhood "was no golden age". D is not true: the writer describes "the slow erosion" of free time. G is not true: the students "do not experience" the boredom of "a long afternoon with nothing to do".`,
            },
            markScheme: [
              'True: B, E, F and H.',
              `Not true: A (the writer grew up in the 1990s), C (the writer's childhood "was no golden age"), D (the change is a "slow erosion") and G (the students "do not experience" such boredom).`,
              ...Q1_MARKING,
            ],
          },
          {
            id: 'aqa-p2-10-q2',
            questionNumber: 2,
            questionText:
              'This question is about both sources.\n\nExplain what you can infer about the differences between the children the writer teaches in Source A and the schoolboys Dickens remembers in Source B.\n\nTo infer is to work out what the details suggest. Support each point with details from both sources.',
            marks: 8,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: `Source A:\n${EXAM_10_SOURCE_A}\n\nSource B:\n${EXAM_10_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_10_SOURCE_A_REF} | Source B: ${EXAM_10_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 8-9': `The two groups are under pressure from different directions. The children in Source A are busy from morning to night: after school come "homework, tutoring, sports clubs, music practice", and "Their weekends are not their own", which suggests that adults have filled every part of their lives. Dickens's boys are worn down within the school day itself, poring over their books "for some hours" as "one of seventy boys", so their pressure comes from long lessons rather than from a crowded timetable.\n\nWhat each group lacks is also different. The children in Source A lack free time: they "do not play" and "do not wander", and they spend only "forty-seven minutes per day" in unstructured outdoor play. The boys in Source B seem to lack rest and the chance to move. After hours at their desks they find "the seats getting too hard to be sat upon" and suffer "intolerable twitches in our legs", which suggests bodies kept still for longer than children can bear.\n\nThe effects on them differ in depth. Dickens's boys become confused and drowsy, with "flushed faces and hot beating heads", but the work that defeated them in the afternoon becomes "perfectly clear and bright in the freshness of to-morrow morning", so a night's rest puts them right. The children in Source A seem to have lost something that rest alone cannot restore: they have "no idea what they actually enjoy", and a Year 10 student cannot even answer a question about fun.\n\nFinally, the adults around them behave differently. In Source A the adults organise everything: every moment is "scheduled, supervised, and optimised", which suggests care that has turned into control. In Source B the boys' tiredness is treated as bad behaviour; they "were always charged at" for it, "as if we had brought them on" themselves, which suggests teachers who blamed children for what the long hours had caused.`,
            },
            markScheme: {
              'How it is marked (8 marks)': Q2_MARKING,
              'Points you might make': [
                'The pressure: a timetable that fills evenings and weekends (Source A: "Their weekends are not their own"); long hours over books within the school day (Source B: "for some hours").',
                'What they lack: free time and play (Source A: "do not play", "do not wander"); rest and the chance to move (Source B: "intolerable twitches in our legs").',
                'The effects: a deeper loss in Source A ("no idea what they actually enjoy"); tiredness that a night cures in Source B ("perfectly clear and bright in the freshness of to-morrow morning").',
                'The adults: organisers in control (Source A: "scheduled, supervised, and optimised"); teachers who blame the boys (Source B: "always charged at").',
              ],
            },
          },
          {
            id: 'aqa-p2-10-q3',
            questionNumber: 3,
            questionText: `Look only at Source A, the first and second paragraphs (from "Something has gone wrong with childhood" to "spend commuting").\n\nHow does the writer use language to describe what has happened to children's free time?\n\n${Q3_THINK_ABOUT}`,
            marks: 12,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${EXAM_10_SOURCE_A}`,
            extractSource: EXAM_10_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': `The writer opens with the dramatic statement "Something has gone wrong with childhood", which tells the reader at once that there is a serious problem. The writer uses the rule of three, "scheduled, supervised, and optimised", to show how controlled children's lives are. The word "optimised" is interesting because it sounds like something from a business, not a childhood. The writer also exaggerates, saying a child's timetable "would exhaust a management consultant", which makes their lives sound as tiring as a busy adult's job. The statistic of "forty-seven minutes" compared with "four hours in the 1970s" shocks the reader, and the comparison with the time "most adults spend commuting" makes it seem even smaller.`,
              'Grade 6-7': `The writer builds the argument from personal authority to evidence, and the language makes the loss of free time feel both serious and absurd. The opening declarative, "Something has gone wrong with childhood", uses the vague pronoun "Something" to create unease: an unnamed problem is more unsettling than a named one. The pre-emptive defence, "I do not say this as a nostalgic adult romanticising the past", disarms the reader's likely objection before it forms. The phrase "the slow erosion" presents the change as gradual and almost invisible, like a coastline worn away. Two very short sentences, "My students do not play. They do not wander.", and a third that begins the same way, repeat a negative pattern, so that childhood is defined by what is missing. The tricolon "scheduled, supervised, and optimised" is in a corporate register: "optimised", a word from business, applied to childhood, makes the mismatch itself the criticism. The second paragraph continues the business imagery with a timetable "that would exhaust a management consultant", a hyperbole that sets children against adults known for overwork. The statistic "forty-seven minutes" against "four hours in the 1970s" is then repeated as a minor sentence, "Forty-seven minutes.", which makes the reader pause on how small the figure is, and the comparison with the time "most adults spend commuting" turns an abstract number into something familiar and dull.`,
              'Grade 8-9': `The writer catalogues what has been taken from childhood while using the very precision and efficiency the article criticises. The opening sentence, "Something has gone wrong with childhood", is deliberately vague: the indefinite "Something" and the plain "gone wrong" announce a problem the article will go on to diagnose, so the reader is placed like a patient awaiting a prognosis. The concession set off inside the next sentence, "my own childhood in the 1990s was no golden age", is shrewd: by denying nostalgia, the writer claims the authority of a clear-eyed observer rather than a sentimental one. The phrase the writer reaches for, "something I can only call unstructured time", is revealing too. The good thing that has been lost (freedom, play, even boredom) can only be named by negation, as the absence of structure, as if structure had become so complete that it now defines its own opposite. The writer then recovers that lost thing with tenderness: "the particular, irreplaceable boredom of a long afternoon with nothing to do" gives boredom two admiring adjectives, turning what adults usually dismiss into something precious. The tricolon "scheduled, supervised, and optimised" escalates from the organised to the industrial, and "optimised" is the key word, bringing the language of efficiency into childhood: the child has become a process to be refined.\n\nThe second paragraph extends that language. The colon after "a timetable that would exhaust a management consultant" opens a list that runs from "eight-thirty to three-thirty" through homework and clubs to "content creation for social media platforms", its length enacting the overload it describes. After it, the short sentence "Their weekends are not their own." closes the last gap. The figures then perform a double movement: "forty-seven minutes" against "four hours" is presented as evidence, but the minor sentence "Forty-seven minutes." makes the reader stop and repeat the number, and the comparison with commuting turns abstract data into an absurdity, since the time a child is given to play is shorter than the dullest part of an adult's day.`,
            },
            markScheme: {
              'How it is marked (12 marks)': Q3_MARKING,
              'Points you might make': [
                'The vague "Something has gone wrong with childhood" and the concession "no golden age", which claim authority without nostalgia.',
                'Repeated negatives ("My students do not play. They do not wander.") define childhood by what is missing.',
                'The corporate tricolon "scheduled, supervised, and optimised", with "optimised" as the key word.',
                'Hyperbole ("a timetable that would exhaust a management consultant") and a long list that enacts the overload.',
                'The minor sentence "Forty-seven minutes." and the comparison with the time "most adults spend commuting".',
              ],
            },
          },
          {
            id: 'aqa-p2-10-q4',
            questionNumber: 4,
            questionText: `Use all of Source A and all of Source B for this question.\n\nCompare the two writers' feelings and perspectives on childhood and what children need, and the methods each writer uses to convey them.\n\n${Q4_AIM_TO}`,
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${EXAM_10_SOURCE_A}\n\nSource B:\n${EXAM_10_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_10_SOURCE_A_REF} | Source B: ${EXAM_10_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': `Both writers believe children need rest from constant work. The writer of Source A argues that modern children are too busy with scheduled activities and have lost "unstructured time". Dickens in Source B remembers how, after hours over their books, he and his classmates grew confused and sleepy, and that these troubles "made us miserable enough". Both writers think adults are responsible for the problem: in Source A, children's lives have been "scheduled, supervised, and optimised", and in Source B, the boys were blamed "as if we had brought them on" themselves. A key difference is the tone. Source A is serious and uses statistics, while Dickens is funny, joking about "several active blue-bottles in each ear". Both writers use examples to make their points: the student in Source A who cannot answer "What do you do for fun?", and Dickens's memories of his own school in Source B.`,
              'Grade 6-7': `Both writers argue that adults misunderstand what children need, but they come at the argument from different directions and in different tones. The writer of Source A argues from professional observation and evidence, as "a secondary school teacher" of fifteen years: time is measured ("forty-seven minutes" against "four hours in the 1970s") and consequences are counted ("a 40% increase in childhood anxiety diagnoses"). The writer's view is that children need freedom from structure: "unstructured time", the chance to "wander", even "the particular, irreplaceable boredom of a long afternoon with nothing to do". Dickens argues from memory and from the body. He recreates the schoolroom from the inside through a long, repetitive list of what "wouldn’t" happen ("figures wouldn’t work", "memory wouldn’t come"), so that the sentence itself seems to drag like a long lesson. His view is that a child's mind and body have natural limits which long hours ignore: the seats become "too hard to be sat upon after a certain time", and the fidgeting and drowsiness that the boys were blamed for were never deliberate. His tone is comic, but the comedy has a point, and his closing appeal to "any well-trained and experienced teacher, not to say psychologist" and to "PROFESSOR OWEN", the anatomist, presents the complaint as a matter of science rather than a schoolboy's grumble. The writer of Source A ends on a student's silence; Dickens ends on a challenge to the experts. Both conclude that children suffer when adults fill their time without asking what a child can bear.`,
            },
            markScheme: {
              'How it is marked (16 marks)': Q4_MARKING,
              'Points you might make': [
                `Perspective: a teacher's view of the present ("a secondary school teacher") against an adult's memory of his own schooldays ("When I was at school").`,
                `What children need: unstructured time and the chance to "wander" (Source A); rest, and lessons that respect a child's natural limits (Source B).`,
                'Blame: a culture of achievement that schedules every moment (Source A); teachers who blamed the boys "as if we had brought them on" themselves (Source B).',
                'Feelings and tone: serious concern, backed by figures, against comic exaggeration with a serious point ("several active blue-bottles in each ear").',
                'Endings: a student\'s silence (Source A); an appeal to experts, "any well-trained and experienced teacher, not to say psychologist" (Source B).',
              ],
            },
          },
        ],
      },
      {
        id: 'aqa-p2-10-writing',
        title: 'Section B: Writing',
        description: SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p2-10-q5',
            questionNumber: 5,
            questionText: `"Children today are under more pressure than any previous generation. Schools, parents, and society must do more to protect young people's mental health."\n\nWrite a speech for a parents' evening at your school, arguing your own view of this statement.\n\n${Q5_MARKS_LINE}`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Good evening, parents, carers and teachers.\n\nThank you for staying after a long day to listen to a student. I want to talk about something that affects every family in this hall: the pressure on young people today, and what we can do about it together.\n\nYou may have heard it said that children today are under more pressure than any generation before. I am not sure that is quite true. My grandmother left school at fourteen to work in a factory, and her childhood was hardly carefree. Every generation has carried its own burdens. But I do believe that our pressures are different, and that they follow us further than they ever followed her.\n\nWhen my grandmother left work, she left it behind. When we leave school, school comes with us. Homework arrives on our phones. Group chats buzz until midnight. Social media tells us, every hour of the day, how much better everyone else seems to be doing. There is no front door that keeps the pressure out. That is what has changed.\n\nSo what should we do? The statement says that schools, parents and society must do more, and I agree. But "doing more" should not mean adding yet another activity to our timetables. Sometimes the most helpful thing an adult can do is less.\n\nFor schools, that might mean thinking hard about homework: setting work that matters, rather than work that fills time. It might mean making sure every student knows who they can talk to when things feel like too much, and that talking is seen as sensible, not weak.\n\nFor parents, it might mean something very simple. Ask us how we are, and then wait for the real answer. Notice when we are tired. Agree as a family that phones stay downstairs at night. You do not need to solve every problem for us. Often we just need to know that you are listening.\n\nAnd for society, it means taking young people's wellbeing as seriously as their exam results. Parks, youth clubs and libraries are not luxuries. They are places where we can simply be young, without being measured.\n\nSome of you may be thinking that a little pressure is good for us, that it builds resilience. You are right, up to a point. Pressure we can cope with helps us grow. But resilience grows best from security, not from strain. A young person who feels supported will take on a challenge; one who feels alone may not try at all.\n\nSo tonight I am asking you for one thing. When you go home, talk to your child, not about grades, but about how they are really doing. It may be the most important conversation you have all week.\n\nThank you for listening.`,
            },
            markScheme: {
              ...Q5_MARKING,
              'What earns marks in this task': [
                'The features of a speech: a greeting to the audience, direct address, questions and repetition that work when heard, and a clear closing appeal.',
                'A tone that suits parents and teachers: respectful and warm, but confident enough to persuade adults.',
                'A clear view of both parts of the statement: whether young people face more pressure than earlier generations, and what schools, parents and society should do.',
                'Reasons, examples and practical suggestions, with an opposing view answered.',
              ],
            },
          },
        ],
      },
    ],
  },
]
