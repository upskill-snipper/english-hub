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

The consequences are measurable and alarming: a 40% increase in childhood anxiety diagnoses over the past decade, a 25% rise in self-harm among under-sixteens, and - perhaps most insidiously - a generation of young people who have been so thoroughly trained in the art of achievement that they have no idea what they actually enjoy. "What do you do for fun?" I asked a Year 10 student recently. She stared at me as though I had asked the question in a foreign language.`

const EXAM_10_SOURCE_A_REF = 'Opinion article, specially written for this paper'

const EXAM_10_SOURCE_B = `‘When I was at school, one of seventy boys, I wonder by what secret understanding our attention began to wander when we had pored over our books for some hours. I wonder by what ingenuity we brought on that confused state of mind when sense became nonsense, when figures wouldn’t work, when dead languages wouldn’t construe, when live languages wouldn’t be spoken, when memory wouldn’t come, when dulness and vacancy wouldn’t go. I cannot remember that we ever conspired to be sleepy after dinner, or that we ever particularly wanted to be stupid, and to have flushed faces and hot beating heads, or to find blank hopelessness and obscurity this afternoon in what would become perfectly clear and bright in the freshness of to-morrow morning. We suffered for these things, and they made us miserable enough. Neither do I remember that we ever bound ourselves by any secret oath or other solemn obligation, to find the seats getting too hard to be sat upon after a certain time; or to have intolerable twitches in our legs, rendering us aggressive and malicious with those members; or to be troubled with a similar uneasiness in our elbows, attended with fistic consequences to our neighbours; or to carry two pounds of lead in the chest, four pounds in the head, and several active blue-bottles in each ear. Yet, for certain, we suffered under those distresses, and were always charged at for labouring under them, as if we had brought them on, of our own deliberate act and deed. As to the mental portion of them being my own fault in my own case—I should like to ask any well-trained and experienced teacher, not to say psychologist. And as to the physical portion—I should like to ask PROFESSOR OWEN.’`

const EXAM_10_SOURCE_B_REF =
  'Charles Dickens, "The Short-Timers", The Uncommercial Traveller (first published in All the Year Round, 1863)'

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
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${EXAM_06_SOURCE_A_REF}\nSource B: ${EXAM_06_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p2-06-q1',
            questionNumber: 1,
            questionText:
              'Read again Source A, the first paragraph.\n\nChoose four statements below which are TRUE.\n\nA) The writer stood on the banks of the River Thames.\nB) Brown water flooded a row of terraced houses.\nC) The Environment Agency had warned of flooding.\nD) Flood defence budgets have been cut.\nE) The government has spent two decades discussing climate adaptation.\nF) The families had been told they were at risk.\nG) The writer watched the flooding happen.\nH) Insurance companies had guaranteed safety.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${EXAM_06_SOURCE_A}\n\nSource B:\n${EXAM_06_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_06_SOURCE_A_REF} | Source B: ${EXAM_06_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'B, D, E, G - B: "murky brown water swallowed a row of terraced houses." D: "cutting flood defence budgets by a third." E: "spent two decades talking about climate adaptation." G: "I stood on the banks... and watched." A is false (it was the River Severn). C is false (the warning was inadequate). F is false (they were told they were safe, not at risk). H is a distortion (they were told they were safe, not given a guarantee).',
            },
            markScheme: [
              '1 mark for each correct answer',
              'Maximum 4 marks',
              'No marks for incorrect selections',
            ],
          },
          {
            id: 'aqa-p2-06-q2',
            questionNumber: 2,
            questionText:
              'You need to refer to Source A and Source B for this question.\n\nUse details from both sources. Write a summary of the similarities and differences in how the two sources present the effects of severe weather on ordinary people.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'summary',
            extract: `Source A:\n${EXAM_06_SOURCE_A}\n\nSource B:\n${EXAM_06_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_06_SOURCE_A_REF} | Source B: ${EXAM_06_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both sources show ordinary people suffering because of severe weather. In Source A, floodwater takes over a row of terraced houses, and Carol has lost everything four times. In Source B, soldiers in the Crimea are left in "bitter cold, with empty stomachs" after a storm, and men come back from the trenches "to find fires out and tents gone." Both sources show people bearing their suffering calmly: Carol speaks "with perfect calm", and Russell praises the soldiers for enduring their hardships "without a murmur". A difference is that the people in Source A lose their homes and belongings again and again, while the soldiers in Source B lose their shelter in a single storm and must still go on doing their duty in the trenches. Source A focuses on one woman and her community, while Source B describes a whole army.',
              'Grade 6-7':
                'Both writers present severe weather as something that strips ordinary people of shelter and security, and both admire the way those people endure it, yet the suffering and the endurance take different forms. The residents in Source A lose their homes slowly and repeatedly: the water swallows the houses "inch by inch", and Carol has adapted to a loss that keeps returning, so that she no longer puts "photographs on low shelves". The soldiers in Source B lose everything at once: a "tornado of sleet, snow, and rain" turns the roads into "torrents of mud and water", and the men return from the trenches "to find fires out and tents gone". Their suffering is physical and immediate - "bitter cold, with empty stomachs, without the remotest prospect of obtaining food or shelter" - where Carol\'s is the weariness of repetition. The writers also judge endurance differently. The writer of Source A presents Carol\'s calm as "something worse than panic: resignation", a sign of how badly she has been failed. Russell presents the soldiers\' endurance as heroism, asking the reader to consider "what fortitude and high courage" it takes to bear such hardships "with unflinching resolution". Responsibility is treated differently too: Source A blames the Environment Agency, the insurers and the government, while in Source B no one is blamed for the storm, which is simply a trial demanding "the exercise of the soldier\'s highest qualities".',
            },
            markScheme: [
              'Must reference both sources',
              'Identifies clear differences and/or similarities',
              'Uses evidence from both texts',
              'Synthesises rather than alternates between texts',
              'Infers beyond surface-level details',
            ],
          },
          {
            id: 'aqa-p2-06-q3',
            questionNumber: 3,
            questionText:
              'You now need to refer only to Source A.\n\nHow does the writer use language to convey the devastating impact of flooding and to criticise those responsible?',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: `Source A:\n${EXAM_06_SOURCE_A}`,
            extractSource: EXAM_06_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses the verb "swallowed" to describe the water taking the houses, which makes the flood seem like a living creature eating them up. The repetition of "told" - "told by the Environment Agency, told by their insurance companies, told by a government" - shows all the different people who let the residents down. Carol\'s quote about stopping "replacing the carpets" is effective because it shows she has given up, which makes us feel sympathy. Her phrase "live above the waterline" suggests people have had to permanently change their lives because of flooding.',
              'Grade 6-7':
                'The writer deploys a carefully constructed rhetoric that moves from witness testimony to systemic indictment. The personification of water as something that "swallowed" houses transforms a natural event into an act of predation, while "inch by inch" creates a painful temporal extension - the reader is forced to experience the slow violation of domestic space. The anaphoric tricolon "told by the Environment Agency, told by their insurance companies, told by a government" structures blame as a cascade of institutional failure, the repetition of "told" becoming increasingly accusatory with each iteration. Carol\'s direct speech is strategically deployed: her pragmatic detail about carpets and photograph shelves grounds the abstract crisis in devastating domestic specificity. The phrase "live above the waterline" operates as both literal description and metaphor - these people have been forced to retreat upward in their own homes, conceding territory to a threat their government was supposed to prevent. The final paragraph\'s masterstroke is the juxtaposition of abstract policy language ("two-degree warming," "policy documents") with visceral sensory reality: the warming "has already arrived in her living room, and it smells of sewage and river mud." The olfactory detail punctures bureaucratic abstraction with unignorable physicality.',
              'Grade 8-9':
                'The writer constructs a rhetorical architecture that systematically collapses the distance between political abstraction and lived experience. The short declarative opening - "The flooding came without adequate warning" - performs a double function: it establishes the event while embedding a judgment within the adjective "adequate," a word whose bureaucratic register ironically mirrors the institutional language the article will go on to indict. The personification of water that "swallowed" houses invokes a Gothic vocabulary of consumption, but the adverbial "inch by inch" transforms this from dramatic spectacle into something more insidious - a creeping, relentless process that mirrors the slow political neglect the writer holds responsible. The anaphoric "told by" tricolon operates as a structural prosecution, each repetition adding another defendant to the dock. The progression from "Environment Agency" through "insurance companies" to "a government" enacts an escalation of culpability - from the specific agency to the abstract state. Carol\'s voice is the article\'s emotional and rhetorical centre. Her statement "You stop replacing the carpets after the second time" deploys the second-person "you" not as direct address but as a marker of universalised experience - this is what anyone would do. The shift from "you" to the devastating specificity of "photographs on low shelves" transforms a general coping strategy into an image of mourning: photographs are memory made material, and their elevation is an act of preservation against recurring loss. The final sentence performs the article\'s central argument in miniature: "it smells of sewage and river mud" translates policy failure into olfactory reality, the present tense insisting that this is not a story about the past but an ongoing condition.',
            },
            markScheme: [
              'Analyses persuasive and descriptive language techniques in detail',
              'Comments on the effect of specific words and phrases',
              'Considers how language positions the reader',
              'Uses subject terminology accurately and precisely',
              'Top band: perceptive, detailed, conceptualised analysis',
            ],
          },
          {
            id: 'aqa-p2-06-q4',
            questionNumber: 4,
            questionText:
              'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different perspectives on severe weather and on how people respond to it.\n\nIn your answer, you could:\n- compare their different perspectives\n- compare the methods they use to convey their perspectives\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${EXAM_06_SOURCE_A}\n\nSource B:\n${EXAM_06_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_06_SOURCE_A_REF} | Source B: ${EXAM_06_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers show how severe weather affects people, but they see it differently. The writer of Source A blames the flooding on climate change and on a government that has spent "two decades talking about climate adaptation while cutting flood defence budgets by a third." Russell in Source B does not blame anyone for the storm; he presents it as a hardship that soldiers must face as part of their duty. Both writers help the reader picture the scene: Source A says climate change "has already arrived in her living room, and it smells of sewage and river mud", and Source B asks the reader to "imagine the bleakest common in all England". Both focus on the people affected - Carol in Source A and the men in the trenches in Source B. The writer of Source A is angry and wants things to change, while Russell wants his readers to admire the soldiers\' courage.',
              'Grade 6-7':
                'Both writers bear witness to people exposed to severe weather, but they understand its causes, and the right response to it, in almost opposite ways. The writer of Source A treats the flood as a political failure. The families "had been told they were safe", and the repeated "told by" lines up the Environment Agency, the insurance companies and the government as the ones who let them down. Even the climate is presented as a human matter: "two-degree warming" is no longer an abstraction in "policy documents" but something that "smells of sewage and river mud". Russell, describing the storm that struck the British army in the Crimea, looks for no one to blame. The weather is simply there, "a tornado of sleet, snow, and rain" under "leaden skies", and his question is how men bear it. His answer is admiration: "what fortitude and high courage to do all this without a murmur". Their methods reflect this difference. The writer of Source A builds a case, moving from what was seen to who is to blame, and uses Carol\'s calm as evidence of how badly people have been failed; it is "something worse than panic". Russell uses imperatives to put his readers in the soldiers\' place - "Let the reader imagine the bleakest common in all England", "Think of the men in the trenches" - and then contrasts the soldiers with "A benighted sportsman caught in a storm", who at least finds that "repose and comfort await him" in the first hut he reaches. The comparison asks the comfortable reader at home to measure how much more the soldiers endure. Where the writer of Source A wants endurance to stop being necessary, Russell wants it honoured.',
            },
            markScheme: [
              'Compares perspectives from both sources throughout',
              'Analyses methods used by both writers',
              'Uses evidence from both texts',
              'Shows clear understanding of different perspectives',
              'Top band: perceptive, detailed comparison with sustained critical voice',
            ],
          },
        ],
      },
      {
        id: 'aqa-p2-06-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 45 minutes on this section. Write in full sentences. You are reminded of the need to plan your answer.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p2-06-q5',
            questionNumber: 5,
            questionText:
              '"The environment is not a political issue - it is a survival issue. Every person alive today has a moral duty to change the way they live."\n\nWrite an article for a broadsheet newspaper in which you argue your point of view on this statement.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear argumentative piece that: addresses the statement directly and takes a clear position; uses some persuasive devices (rhetorical questions, statistics, direct address); has a clear structure with introduction, body paragraphs, and conclusion; demonstrates generally accurate spelling and punctuation with some variety in sentence forms.',
              'Grade 6-7':
                'A well-crafted argument that: engages critically with both the "survival issue" and "moral duty" elements; uses a range of rhetorical techniques fluently (anaphora, tricolon, counter-argument); deploys evidence and examples effectively; matches the register of a broadsheet article consistently; demonstrates consistent technical accuracy with ambitious vocabulary and varied syntax.',
              'Grade 8-9':
                'A compelling, assured argument that: offers a nuanced, sophisticated perspective that interrogates the terms of the statement; crafts a distinctive authorial voice appropriate to the broadsheet form; deploys rhetorical strategies with precision and control, including effective counter-argument; demonstrates extensive vocabulary, varied syntax, and technical virtuosity throughout; creates a sense of urgency without sacrificing intellectual rigour.',
            },
            markScheme: [
              'AO5 (24 marks): Clear, effective communication matched to form, purpose, audience',
              'AO5: Structured argument with coherent paragraphing',
              'AO6 (16 marks): Accurate sentence demarcation',
              'AO6: Range of punctuation used effectively',
              'AO6: Accurate spelling of ambitious vocabulary',
              'AO6: Varied sentence forms for purpose and effect',
            ],
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
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${EXAM_07_SOURCE_A_REF}\nSource B: ${EXAM_07_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p2-07-q1',
            questionNumber: 1,
            questionText:
              'Read again Source A, the first paragraph.\n\nChoose four statements below which are TRUE.\n\nA) The writer went to the Arctic to find herself.\nB) The writer wanted to see the ice sheets before they disappeared.\nC) The writer describes her tourism as honest.\nD) The landscape was welcoming to visitors.\nE) The questions she brought with her became more urgent.\nF) The writer compares her vanishing questions to breath in extreme cold.\nG) The writer had read about disappearing ice sheets.\nH) Human presence dominated the landscape.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${EXAM_07_SOURCE_A}\n\nSource B:\n${EXAM_07_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_07_SOURCE_A_REF} | Source B: ${EXAM_07_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'B, C, F, G - B: "I wanted to see them before they were gone." C: "a morbid kind of tourism, I suppose, but an honest one." F: "evaporated, like breath in minus thirty degrees." G: "I had read about the ice sheets disappearing." A is false (she explicitly says she did not come to find herself). D is false (the landscape was "indifferent to human presence"). E is false (her questions "evaporated"). H is false (the landscape was indifferent to human presence).',
            },
            markScheme: [
              '1 mark for each correct answer',
              'Maximum 4 marks',
              'No marks for incorrect selections',
            ],
          },
          {
            id: 'aqa-p2-07-q2',
            questionNumber: 2,
            questionText:
              'You need to refer to Source A and Source B for this question.\n\nUse details from both sources. Write a summary of the similarities and differences in how the two writers describe their experiences on the ice.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'summary',
            extract: `Source A:\n${EXAM_07_SOURCE_A}\n\nSource B:\n${EXAM_07_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_07_SOURCE_A_REF} | Source B: ${EXAM_07_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers describe the ice as powerful and surprising. In Source A, the writer is surprised that the glaciers "groaned" and that they were "dirty, fractured walls of blue-grey ice" rather than white. In Source B, Whymper and his companions are stopped by "a mighty crevasse" and have to jump across it onto "a narrow ridge of ice". A difference is that Source A focuses on the ice melting and disappearing - the glacier has "retreated two kilometres" - while Source B presents the ice as a dangerous obstacle to get past. Source A is sad and thoughtful, while Source B is exciting and funny: Whymper says he "felt supremely ridiculous" when it was his turn to jump.',
              'Grade 6-7':
                'Both writers find that the ice is not what they expected, but the surprise takes them in different directions. The writer of Source A expected "pristine white cathedrals" and found "dirty, fractured walls of blue-grey ice"; the disappointment turns into grief, because the glacier is already disappearing and "had retreated two kilometres". Whymper\'s surprise is sudden and physical: "The axe of Croz all at once stopped", and the party find themselves cut off by "a mighty crevasse". Both writers notice forces in the ice that cannot be seen. In Source A the glaciers make "Deep, structural sounds, like a building settling"; in Source B "Some unseen cause" has split the wall of ice in two. Both also present the ice as indifferent to people, but to different effect. For the writer of Source A, "The ice does not care about our guilt or our grief", and that indifference is a source of sorrow. For Whymper, the crevasse lies "ready to receive an erratic body", a grimly comic way of describing a fall, and the danger becomes a test to be passed with one jump. The endings show the difference most clearly: Source A closes on loss ("It simply melts"), while Whymper, having leapt, finds himself "sprawling in the snow" and "vowed that it was nothing" - a mixture of relief, embarrassment and pride.',
            },
            markScheme: [
              'Must reference both sources',
              'Identifies clear differences and/or similarities',
              'Uses evidence from both texts',
              'Synthesises rather than alternates between texts',
              'Infers beyond surface-level details',
            ],
          },
          {
            id: 'aqa-p2-07-q3',
            questionNumber: 3,
            questionText:
              'You now need to refer only to Source A.\n\nHow does the writer use language to convey a sense of loss and environmental grief?',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: `Source A:\n${EXAM_07_SOURCE_A}`,
            extractSource: EXAM_07_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses negative language to show the Arctic is not what she expected. The glaciers are "not the pristine white cathedrals" she imagined but "dirty, fractured walls." The word "dirty" is surprising because we expect ice to be clean. The guide\'s quote about "a photograph of something that no longer exists" is powerful because it makes the reader realise the ice is disappearing. Near the end, the sentence "The ice does not care about our guilt or our grief" personifies the ice to show nature is indifferent to human feelings, which makes the loss feel even sadder.',
              'Grade 6-7':
                'The writer constructs environmental grief through a sustained rhetoric of disappointed expectation and temporal anxiety. The opening paragraph establishes the journey as a form of pre-emptive mourning - "I wanted to see them before they were gone" - the subordinate clause transforming tourism into elegy. The description of Svalbard systematically dismantles aesthetic consolation: it is "not beautiful in the way travel brochures suggest," the glaciers are "not the pristine white cathedrals I had imagined." This repeated negation ("not... not...") performs the stripping away of comforting narratives. The personification of glaciers through sound - "They groaned" - is particularly effective: the short declarative sentence isolates the sound, and the verb "groaned" anthropomorphises the ice, suggesting pain or protest. The simile "like a building settling, or a body shifting in sleep" deepens this: both comparisons carry intimations of collapse and unconsciousness. Ingrid\'s devastating observation - "You are looking at a photograph of something that no longer exists" - collapses present and future, suggesting that even the act of witnessing is already a form of retrospection. The penultimate sentence\'s personification - "The ice does not care about our guilt or our grief" - uses the paired abstract nouns to name the emotional complex the article has been constructing, while "does not care" denies the reader the consolation of a responsive natural world.',
              'Grade 8-9':
                'The writer\'s prose enacts a phenomenology of environmental grief, moving through stages of anticipation, disillusionment, witness, and finally a bleak acceptance that refuses consolation. The opening sentence\'s negation - "I did not come to the Arctic to find myself" - immediately resists the conventions of travel writing, rejecting the genre\'s promise of personal transformation. Instead, the journey is framed as "a morbid kind of tourism," the adjective acknowledging the ethical discomfort of witnessing destruction as spectacle. The description of Svalbard performs what might be termed an "anti-sublime": where Romantic writers found in Arctic landscapes a transcendent terror that elevated the human spirit, this writer finds only "a flatness that goes on and on" and "a sky the colour of old steel." The comparison with "old steel" is precisely chosen - it connotes not natural beauty but industrial decay, the manufactured world bleeding into the natural. The glaciers\' sounds constitute the passage\'s most original and disturbing image: "Deep, structural sounds, like a building settling, or a body shifting in sleep." The word "structural" is key - it implies that the sounds emanate from the fundamental architecture of the ice, that what is groaning is not the surface but the foundation. The simile\'s progression from "building" to "body" enacts an escalating anthropomorphism that culminates in Ingrid\'s temporal paradox: "You are looking at a photograph of something that no longer exists." This statement collapses the ontological distinction between presence and absence - the glacier is simultaneously here and already gone, existing in a state of continuous disappearance. The final sentence\'s stark declarative - "It simply melts" - is devastating in its refusal of rhetoric. After three paragraphs of elaborate description, the bare simplicity of three short words enacts the indifference it describes.',
            },
            markScheme: [
              'Analyses descriptive and persuasive language techniques in detail',
              'Comments on the effect of specific words and phrases',
              'Considers how language creates emotional response in the reader',
              'Uses subject terminology accurately and precisely',
              'Top band: perceptive, detailed, conceptualised analysis',
            ],
          },
          {
            id: 'aqa-p2-07-q4',
            questionNumber: 4,
            questionText:
              "For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different attitudes to the natural world and humanity's place within it.\n\nIn your answer, you could:\n- compare their different attitudes\n- compare the methods they use to convey their attitudes\n- support your response with references to both texts.",
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${EXAM_07_SOURCE_A}\n\nSource B:\n${EXAM_07_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_07_SOURCE_A_REF} | Source B: ${EXAM_07_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers describe dramatic icy landscapes, but their attitudes are very different. The writer of Source A sees the ice as something humans are damaging - the glacier is melting and "The ice does not care about our guilt or our grief." She feels guilty and sad. Whymper in Source B sees the ice as an obstacle and an adventure: the crevasse has to be crossed with "A downward jump of fifteen or sixteen feet". Both writers show that nature is far more powerful than people, but Source A makes people seem guilty and small, while Source B shows people overcoming nature with skill and nerve, like Croz, who "sprang over the chasm". Whymper also makes fun of himself, admitting that he "felt supremely ridiculous", which makes his account light-hearted, while Source A is serious throughout.',
              'Grade 6-7':
                'The two writers stand at opposite ends of a changing relationship between people and the natural world. For Whymper, climbing in the 1860s, the ice is an adversary and a stage. When the clouds roll away "right and left" he calls the effect "dramatic", "a coup de théâtre", and the jump that follows is a "great sensation leap" to be performed "by the entire company": the language of the theatre turns a dangerous crevasse into a performance in which the climbers are the actors. Nature supplies the danger - the leap must be made "on an ice-slope of 54°", and the crevasse is "ready to receive an erratic body" - and human beings supply the skill: Croz "alighted cleverly on his feet". The writer of Source A reverses these roles. The glacier is not an obstacle to be overcome but a casualty to be mourned; it has "retreated two kilometres", and its "Deep, structural sounds" suggest something breaking. The people in Source A are not heroes but spectators, and uneasy ones: the journey is "a morbid kind of tourism". The methods match the attitudes. Whymper uses precise measurement ("fifteen or sixteen feet", "seven or eight feet"), clipped direct speech ("Bergschrund, gentlemen.") and comic understatement ("That is not much, you will say."), and his self-mockery at the edge - "I felt supremely ridiculous" - turns real fear into comedy, the voice of a man confident, looking back, that the mountain can be mastered. The writer of Source A uses negation and short, flat statements ("They groaned." "It simply melts.") to present a natural world that people have damaged and cannot repair. Whymper\'s ice waits to test the climber; the ice in Source A is disappearing, and "does not care about our guilt or our grief".',
            },
            markScheme: [
              'Compares attitudes from both sources throughout',
              'Analyses methods used by both writers',
              'Uses evidence from both texts',
              'Shows clear understanding of different perspectives',
              'Top band: perceptive, detailed comparison with sustained critical voice',
            ],
          },
        ],
      },
      {
        id: 'aqa-p2-07-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 45 minutes on this section. Write in full sentences. You are reminded of the need to plan your answer.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p2-07-q5',
            questionNumber: 5,
            questionText:
              '"Travel broadens the mind - but in the age of climate change, it also damages the planet. We need to rethink how and why we travel."\n\nWrite a speech to be delivered at a school assembly in which you argue your point of view on this statement.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear speech that: addresses the statement and takes a position; uses some rhetorical devices appropriate to speech (direct address, rhetorical questions, repetition); has a clear structure with an engaging opening and a memorable conclusion; demonstrates generally accurate spelling and punctuation.',
              'Grade 6-7':
                "A well-crafted speech that: engages critically with the tension between travel's benefits and environmental cost; uses a range of techniques appropriate to the spoken form (anaphora, shifts in pace, audience interaction); deploys specific examples and evidence persuasively; maintains an appropriate register for a school assembly; demonstrates consistent technical accuracy with ambitious vocabulary.",
              'Grade 8-9':
                'A compelling, assured speech that: offers a nuanced perspective acknowledging complexity without sacrificing clarity of argument; crafts a distinctive voice that balances authority with accessibility; deploys rhetorical strategies with precision, including effective use of pauses, shifts in tone, and audience engagement; demonstrates extensive vocabulary, varied syntax, and technical virtuosity; creates a memorable and thought-provoking experience for the audience.',
            },
            markScheme: [
              'AO5 (24 marks): Clear, effective communication matched to form, purpose, audience',
              'AO5: Structured argument with coherent paragraphing',
              'AO6 (16 marks): Accurate sentence demarcation',
              'AO6: Range of punctuation used effectively',
              'AO6: Accurate spelling of ambitious vocabulary',
              'AO6: Varied sentence forms for purpose and effect',
            ],
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
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${EXAM_08_SOURCE_A_REF}\nSource B: ${EXAM_08_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p2-08-q1',
            questionNumber: 1,
            questionText:
              'Read again Source A, the first paragraph.\n\nChoose four statements below which are TRUE.\n\nA) The writer describes a hospital waiting room at three in the morning.\nB) The waiting room was empty.\nC) People had been sitting for six hours.\nD) The writer describes the waiting room as revealing.\nE) Patients were complaining loudly.\nF) The writer says the waiting room hides what the country is really like.\nG) The chairs were comfortable.\nH) People were exhausted and anxious.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${EXAM_08_SOURCE_A}\n\nSource B:\n${EXAM_08_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_08_SOURCE_A_REF} | Source B: ${EXAM_08_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'A, C, D, H - A: "The waiting room of an NHS hospital at three o\'clock in the morning." C: "sitting in plastic chairs for six hours." D: "one of the most revealing places in Britain." H: "exhausted, anxious." B is false (it was full of people). E is false (they waited "without complaint"). F is false (the waiting room shows "the country as it really is"). G is false (the chairs are "plastic").',
            },
            markScheme: [
              '1 mark for each correct answer',
              'Maximum 4 marks',
              'No marks for incorrect selections',
            ],
          },
          {
            id: 'aqa-p2-08-q2',
            questionNumber: 2,
            questionText:
              'You need to refer to Source A and Source B for this question.\n\nUse details from both sources. Write a summary of the similarities and differences in the problems facing healthcare in each source.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'summary',
            extract: `Source A:\n${EXAM_08_SOURCE_A}\n\nSource B:\n${EXAM_08_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_08_SOURCE_A_REF} | Source B: ${EXAM_08_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both sources show hospitals that are overcrowded and under pressure. In Source A, there are "7.8 million people on NHS waiting lists", and Arthur waits on a trolley in a corridor "for eleven hours because there are no beds". In Source B, Nightingale describes "four miles of Beds, and not eighteen inches apart", with wounded soldiers laid in corridors where there is "just room for one person to pass between". Both writers show staff working very hard: Amira has treated "thirty-seven patients since midday", and Nightingale praises the doctors who are "angels". A difference is that Source B also criticises some of the staff: two of the doctors are "brutes", and the young assistants complain about being called away from their dinners. Both sources show patients who do not complain: Arthur apologises "for being a nuisance", and Nightingale\'s soldiers die "without a complaint".',
              'Grade 6-7':
                'Both writers describe care overwhelmed by the number of people who need it, but the crisis takes a different form in each. The writer of Source A presents a crisis of waiting: "7.8 million people on NHS waiting lists", ambulance response times doubled, "one in ten nursing posts unfilled", and a man left on a trolley "because there are no beds". Nightingale\'s crisis is one of sudden arrival: "all this fresh influx" of wounded has been laid down in two corridors of the Barrack Hospital, and there are "four miles of Beds, and not eighteen inches apart". In Source A there are too few beds; in Source B the beds fill every space. Both writers also consider the staff. The writer of Source A presents staff as dedicated but exhausted: Amira\'s "hands were steady" but her "eyes were not". Nightingale is more critical and more mixed: "Two of them are brutes, and four are angels", and the young assistants complain of the "annoyance of being called up from their dinners" while a man is "breathing his last breath under the knife". Both writers dwell on the patients\' patience: Arthur apologises "for being a nuisance", and Nightingale\'s wounded "bear pain and mutilation with an unshrinking heroism which is really superhuman". Both use this uncomplaining endurance to make the reader feel how much these patients deserve better. The greatest difference is in scale and cause: Source A describes a peacetime system slowly worn down, Source B a wartime hospital in the middle of "this appalling Horror".',
            },
            markScheme: [
              'Must reference both sources',
              'Identifies clear differences and/or similarities',
              'Uses evidence from both texts',
              'Synthesises rather than alternates between texts',
              'Infers beyond surface-level details',
            ],
          },
          {
            id: 'aqa-p2-08-q3',
            questionNumber: 3,
            questionText:
              'You now need to refer only to Source A.\n\nHow does the writer use language to convey the scale of the NHS crisis and to generate sympathy for those affected?',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: `Source A:\n${EXAM_08_SOURCE_A}`,
            extractSource: EXAM_08_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses statistics to show the scale of the crisis: "7.8 million people on NHS waiting lists" is a shocking number that makes the reader understand how serious the problem is. The description of Amira working "fourteen hours" makes us feel sorry for NHS staff. The detail that she has "treated thirty-seven patients since midday" shows how overworked she is. Arthur waiting on "a trolley for eleven hours" creates sympathy because he is an elderly man being neglected. The fact that Arthur apologises "for being a nuisance" is particularly sad because he is the one being let down, not causing problems.',
              'Grade 6-7':
                'The writer deploys a carefully layered rhetorical strategy that moves from atmospheric scene-setting to statistical evidence to devastating individual portraiture. The opening claim that the waiting room is "one of the most revealing places in Britain" establishes the hospital as a microcosm of national failure. The description "stripped of pretension and daylight" uses the participial phrase to create a double exposure: the people waiting have lost both the daylight and the social masks they wear by day. Amira\'s portrait uses precise numerical detail - "thirty-seven patients since midday," "fourteen hours into her shift," "fifth time" refilling coffee - to create an accumulation of exhaustion. The syntactic contrast between "Her hands were steady. Her eyes were not" is masterful: the parallel structure invites comparison, while the terminal negation ("were not") performs the failure. The transition from statistics to Arthur enacts the article\'s central argument: "numbers are abstractions" gives way to a man on a trolley, and the reader is forced to convert data into suffering. Arthur\'s characterisation is strategic: he "fought in no wars and climbed no mountains" - the negatives define him by his ordinariness, making his neglect not a dramatic injustice but a routine one. His apology "for being a nuisance" is the passage\'s emotional climax because it reverses the moral relationship: the man who should receive care instead offers consideration to those failing to provide it.',
              'Grade 8-9':
                'The writer constructs a rhetoric of escalating moral indictment that moves from institutional critique to individual portraiture, with each rhetorical shift tightening the argument\'s emotional grip. The opening sentence\'s claim that the A&E waiting room is "one of the most revealing places in Britain" operates as a thesis statement: the hospital will function throughout as a diagnostic tool for national health - in both the medical and political sense. The participial "stripped of pretension and daylight" performs a dual exposure, connecting the physical (the small hours, the plastic chairs) with the social (the absence of the comfortable fictions daylight enables). The portrait of Amira is built through a rhetoric of precise enumeration - "twenty-eight years old," "fourteen hours," "thirty-seven patients," "fifth time" - each number adding weight to an already unsustainable load. The syntactic parallelism of "Her hands were steady. Her eyes were not" distils professional competence and personal exhaustion into a single, devastating opposition: the body functions while the person behind it falters. Her quoted speech - "I love this job," and then "But I cannot sustain this. Nobody can." - escalates from individual to universal through pronominal shift: "I" becomes "nobody," personal testimony becomes systemic diagnosis. The move to statistics in the next paragraph is strategically positioned after Amira\'s testimony, ensuring the numbers attach to a human face. But it is the subsequent reversal - "But numbers are abstractions" - that performs the article\'s most sophisticated argumentative move: having deployed statistics for their rhetorical force, the writer then undermines the very medium, insisting on the irreducibility of individual experience. Arthur is the article\'s moral centre precisely because of his absence of distinction: "fought in no wars and climbed no mountains" constructs him through negation, defining ordinary citizenship by what it lacks. The image of Arthur "apologising to the nurses for being a nuisance" is devastating because it exposes a specifically British pathology: the citizen who has been failed by the state and responds not with anger but with politeness, not with demands but with self-deprecation. The concluding sentence - "That is the measure of where we are" - uses the demonstrative "that" to crystallise the entire article into Arthur\'s apology, transforming a moment of individual kindness into an indictment of national failure.',
            },
            markScheme: [
              'Analyses persuasive and descriptive language techniques in detail',
              'Comments on the effect of specific words and phrases',
              'Considers how language generates sympathy and positions the reader',
              'Uses subject terminology accurately and precisely',
              'Top band: perceptive, detailed, conceptualised analysis',
            ],
          },
          {
            id: 'aqa-p2-08-q4',
            questionNumber: 4,
            questionText:
              'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different attitudes to healthcare failures and the treatment of vulnerable people.\n\nIn your answer, you could:\n- compare their different attitudes\n- compare the methods they use to convey their attitudes\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${EXAM_08_SOURCE_A}\n\nSource B:\n${EXAM_08_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_08_SOURCE_A_REF} | Source B: ${EXAM_08_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers are concerned about the state of hospitals and sympathetic to patients. The writer of Source A is frustrated that the NHS cannot cope, using statistics like "7.8 million people on NHS waiting lists" to prove the point. Nightingale in Source B describes the crowded wards of a military hospital, with "four miles of Beds". Both writers praise some of the staff - Amira works on despite exhaustion, and Nightingale calls four of the doctors "angels" - but Nightingale also criticises the "brutes" and the assistants who complain about missing their dinners. Both use patients to create sympathy: Arthur in Source A, and the wounded soldiers in Source B, who "bear pain and mutilation" without complaining. A key difference is that Nightingale is also hopeful: even in the "appalling Horror" of the hospital, she says "there is good".',
              'Grade 6-7':
                'Both writers bear witness to failing care while protecting the vulnerable from blame, but their positions and methods differ. The writer of Source A is an outsider who spends a single night in an emergency department "for this article", and builds an argument from statistics and interviews: the numbers ("7.8 million", "one in ten nursing posts unfilled") are followed by the insistence that "numbers are abstractions", and then by Arthur, whose apology "for being a nuisance" turns the statistics into a person. Nightingale writes from the inside, as one of those doing the work, in a private letter to a surgeon friend, and her voice is quick, frank and sometimes darkly funny. She judges the doctors bluntly - "Two of them are brutes, and four are angels" - and explains why: "this is a work which makes either angels or devils of men and of women too". Her mockery of the young assistants as "Cubs" who "grow up into good old Bears" is affectionate as well as critical. Both writers turn to the patients to measure the failure. Arthur, who "fought in no wars and climbed no mountains", is defined by his ordinariness; Nightingale\'s soldiers are defined by their courage, bearing "pain and mutilation with an unshrinking heroism which is really superhuman". Both writers present these uncomplaining patients as a reproach to the system that fails them. The sharpest difference is in tone. The writer of Source A ends in judgement: "That is the measure of where we are." Nightingale, "steeped up to our necks in blood", can still echo St Peter, "It is good for us to be here", and then joke that he might not have said so had he been there. She finds a purpose in the work that the exhausted doctor in Source A, who "cannot sustain this", seems to be losing.',
            },
            markScheme: [
              'Compares attitudes from both sources throughout',
              'Analyses methods used by both writers',
              'Uses evidence from both texts',
              'Shows clear understanding of different perspectives',
              'Top band: perceptive, detailed comparison with sustained critical voice',
            ],
          },
        ],
      },
      {
        id: 'aqa-p2-08-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 45 minutes on this section. Write in full sentences. You are reminded of the need to plan your answer.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p2-08-q5',
            questionNumber: 5,
            questionText:
              '"The NHS is the greatest achievement of British society. We must be prepared to pay whatever it costs to save it."\n\nWrite a letter to your local MP in which you argue your point of view on this statement.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear formal letter that: addresses the statement and takes a position; uses appropriate letter conventions (Dear..., Yours sincerely); uses some persuasive devices (rhetorical questions, examples, direct address); has a clear structure with introduction, body paragraphs, and conclusion; demonstrates generally accurate spelling and punctuation.',
              'Grade 6-7':
                'A well-crafted formal letter that: engages critically with both the "greatest achievement" claim and the "whatever it costs" element; maintains an appropriate formal register throughout while remaining persuasive; uses a range of rhetorical techniques suited to the form (appeal to shared values, logical argument, evidence); demonstrates consistent technical accuracy with ambitious vocabulary and varied syntax.',
              'Grade 8-9':
                'A compelling, assured formal letter that: offers a nuanced position that acknowledges the complexity of healthcare funding; crafts a distinctive voice that balances deference to the recipient with moral authority; deploys rhetorical strategies with precision, including effective counter-argument and strategic concession; demonstrates extensive vocabulary, varied syntax, and technical virtuosity; maintains the formal letter register throughout while building a powerful and memorable argument.',
            },
            markScheme: [
              'AO5 (24 marks): Clear, effective communication matched to form, purpose, audience',
              'AO5: Structured argument with coherent paragraphing',
              'AO6 (16 marks): Accurate sentence demarcation',
              'AO6: Range of punctuation used effectively',
              'AO6: Accurate spelling of ambitious vocabulary',
              'AO6: Varied sentence forms for purpose and effect',
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
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${EXAM_09_SOURCE_A_REF}\nSource B: ${EXAM_09_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p2-09-q1',
            questionNumber: 1,
            questionText:
              "Read again Source A, the first paragraph.\n\nChoose four statements below which are TRUE.\n\nA) The writer's parents arrived with two suitcases.\nB) They spoke fluent English on arrival.\nC) They brought a dictionary with them.\nD) They had family already in Leicester.\nE) They were given a council flat.\nF) Their new home was in Manchester.\nG) They left behind everything familiar.\nH) The writer's father now runs two pharmacies.",
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${EXAM_09_SOURCE_A}\n\nSource B:\n${EXAM_09_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_09_SOURCE_A_REF} | Source B: ${EXAM_09_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'A, C, E, G - A: "two suitcases and a dictionary." C: "a dictionary." E: "a council flat in Leicester." G: "left behind everything that was familiar." B is false (they "spoke no English"). D is false (they "knew nobody"). F is false (the flat was in Leicester). H is false (he runs three pharmacies, not two).',
            },
            markScheme: [
              '1 mark for each correct answer',
              'Maximum 4 marks',
              'No marks for incorrect selections',
            ],
          },
          {
            id: 'aqa-p2-09-q2',
            questionNumber: 2,
            questionText:
              'You need to refer to Source A and Source B for this question.\n\nUse details from both sources. Write a summary of the similarities and differences in how the two sources present the experiences of immigrants.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'summary',
            extract: `Source A:\n${EXAM_09_SOURCE_A}\n\nSource B:\n${EXAM_09_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_09_SOURCE_A_REF} | Source B: ${EXAM_09_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both sources show immigrants arriving with very little. In Source A, the writer\'s parents came with "two suitcases and a dictionary". In Source B, Engels says the Irish "had nothing to lose at home" and crossed to England "packed like cattle" on the deck of a steamship. Both sources show immigrants starting at the bottom: the writer\'s parents had "a council flat in Leicester", and the Irish in Source B "form the lowest class of the population" and live in "The worst quarters of all the large towns". A difference is that Source A tells the story of one family that later did well, while Source B describes huge numbers of people - "more than a million" - and follows none of them to success. Source A presents the parents with respect, but Engels describes the Irish in insulting terms, as "rough, intemperate, and improvident".',
              'Grade 6-7':
                'Both writers present migration as driven by hardship at home and as beginning at the bottom of the society that receives it, but they present the people involved in very different ways. The writer of Source A makes the experience individual and intimate: the parents arrive with "two suitcases and a dictionary", speaking "no English" and knowing "nobody", and what they left is named precisely - "language, food, family, the particular quality of light in a Gujarati afternoon". Engels makes it collective and statistical: "armies of the Irish", "more than a million", and a list of cities with the number of "poor Irish people" in each. Both explain why people came. The parents in Source A fled "political violence"; Engels\'s Irish "had nothing to lose at home, and much to gain in England", drawn by "steady work and good pay for strong arms". Both describe a hard start: a council flat in one case and, in the other, "The worst dwellings", clothing held together "by a single thread" and food of "potatoes and potatoes only". The greatest difference is in the writers\' attitudes. The writer of Source A insists on the parents\' humanity and refuses to measure them by what they earn. Engels explains the migration by the needs of "English industry", but he describes the Irish through the prejudices of his time, as people who "bring all their brutal habits with them" and "spend upon drink" whatever they earn beyond their needs. Where one writer argues against reducing people to economics, the other treats them almost entirely as a supply of labour.',
            },
            markScheme: [
              'Must reference both sources',
              'Identifies clear differences and/or similarities',
              'Uses evidence from both texts',
              'Synthesises rather than alternates between texts',
              'Infers beyond surface-level details',
            ],
          },
          {
            id: 'aqa-p2-09-q3',
            questionNumber: 3,
            questionText:
              'You now need to refer only to Source A.\n\nHow does the writer use language to challenge the way immigration is discussed in public debate?',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: `Source A:\n${EXAM_09_SOURCE_A}`,
            extractSource: EXAM_09_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses personal experience to challenge public debate. The opening image of "two suitcases and a dictionary" is powerful because it shows how little the writer\'s parents had. The writer repeats "I am tired" to show frustration with having to prove immigrants\' worth. The metaphor comparing immigration language to "plumbing" is effective because it shows how the debate dehumanises people. The listing of "flows" and "pressures" and "capacity" shows how political language turns people into statistics. The image near the end of a family "making an impossible decision at three in the morning" creates sympathy by making the reader imagine the fear immigrants feel.',
              'Grade 6-7':
                'The writer constructs a rhetorically sophisticated challenge to immigration discourse by first presenting and then dismantling the "success story" narrative. The opening paragraph\'s accumulation of detail - "two suitcases," "no English," "knew nobody" - establishes the classic immigrant trajectory, but the declarative "I am tired of telling it" subverts expectation: the reader anticipates celebration and receives exhaustion. The second paragraph articulates why: "the demand that immigrants prove their worth through economic contribution reduces human beings to balance sheets." The metaphor of "balance sheets" exposes the transactional framework underlying supposedly welcoming attitudes. The third paragraph attacks the linguistic infrastructure of the debate itself: "flows," "pressures," "capacity" are identified and dismissed as "the language of plumbing, not of people." This metalinguistic strategy - naming and rejecting the vocabulary of immigration policy - positions the writer not merely as a contributor to the debate but as a critic of its terms. The image near the end - "a family making an impossible decision at three in the morning" - deploys temporal specificity ("three in the morning") to create intimacy and vulnerability, while "impossible" resists the binary of stay/leave that policy debate assumes. The concluding phrase "slogans on the side of a bus" is a pointed cultural reference that anchors the abstract argument in recent political history.',
              'Grade 8-9':
                'The writer\'s rhetorical strategy is radical in its refusal to participate in the debate on its existing terms: rather than arguing for or against immigration, the writer interrogates the discursive framework itself, exposing how language shapes - and distorts - public understanding. The opening paragraph performs a deliberate seduction: the archetypal immigration narrative (poverty to success, struggle to achievement) is presented with precision and apparent pride, only to be repudiated in the devastating pivot "I am tired of telling it." The anaphoric "I am tired" performs exhaustion at the level of syntax, the repetition enacting the very cycle of justification the writer refuses. The second paragraph\'s central argument - that "the demand that immigrants prove their worth through economic contribution reduces human beings to balance sheets" - deploys the financial metaphor to expose the implicit contract underlying liberal tolerance: you may stay, provided you produce. The pairing "wonderful but irrelevant" applied to the parents\' prosperity is a masterclass in rhetorical positioning: conceding the fact while denying its pertinence. The third paragraph executes a metalinguistic critique: the scare-quoted "flows," "pressures," "capacity" are first presented as the accepted vocabulary of debate, then recharacterised through the devastating analogy "the language of plumbing, not of people." The reduction is precise - plumbing manages the movement of an undifferentiated substance through a system, which is exactly how immigration policy treats human beings. The penultimate sentence\'s structure - "to stay and risk everything, or to leave and lose everything" - uses syntactic parallelism to present both options as equally catastrophic, the repeated "everything" insisting that there is no cost-free choice. The closing reference to "slogans on the side of a bus" is strategically placed as the article\'s final image, deflating the preceding moral seriousness with a reminder of the crudeness with which public discourse actually operates.',
            },
            markScheme: [
              'Analyses persuasive and rhetorical language techniques in detail',
              'Comments on the effect of specific words and phrases',
              'Considers how language challenges assumptions and positions the reader',
              'Uses subject terminology accurately and precisely',
              'Top band: perceptive, detailed, conceptualised analysis',
            ],
          },
          {
            id: 'aqa-p2-09-q4',
            questionNumber: 4,
            questionText:
              'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their attitudes towards immigration and the treatment of immigrants.\n\nIn your answer, you could:\n- compare their different attitudes\n- compare the methods they use to convey their attitudes\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${EXAM_09_SOURCE_A}\n\nSource B:\n${EXAM_09_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_09_SOURCE_A_REF} | Source B: ${EXAM_09_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers explain why people migrated, but their attitudes to immigrants are very different. The writer of Source A uses a family\'s experience to argue that immigrants should not have to prove their worth, and is sympathetic throughout. Engels in Source B explains that English industry needed the Irish as "a reserve at command", but he describes the Irish themselves in an insulting way, as "rough, intemperate, and improvident" people who "bring all their brutal habits with them". Source A criticises the way people talk about immigration, calling it "the language of plumbing, not of people". Engels\'s own language often treats the Irish as a mass rather than as people: "armies of the Irish", "such a race". A difference is that the writer of Source A is personally connected to immigration as the child of immigrants, while Engels writes as an outside observer.',
              'Grade 6-7':
                'Both writers set out to explain immigration, but they reach almost opposite attitudes towards immigrants. The writer of Source A writes as the child of immigrants and uses personal testimony as both evidence and authority. The argument is moral: it rejects the demand that immigrants "prove their worth through economic contribution", because that demand "reduces human beings to balance sheets". Engels writes as an outside observer, and his argument is economic. For him the Irish matter because the growth of English industry "could not have taken place" without them as "a reserve at command", and he sets out their numbers city by city. The two passages therefore disagree about the very terms of the debate. The writer of Source A objects to "flows" and "pressures" and "capacity", "the language of plumbing, not of people"; Engels\'s language is of exactly that kind, with the Irish arriving as "armies" and valued as "strong arms". His attitude to the people themselves is openly prejudiced. He generalises about a whole nation, calling the Irish "rough, intemperate, and improvident", and asks "What does such a race want with high wages?" A modern reader should recognise this as prejudice. He does add that the English workers among whom the Irish settle are a class "which has, in truth, little inducement to cultivate education and morality", which places some of the blame on English conditions rather than on the Irish alone, and one detail hints at how badly they are treated: they cross the sea "packed like cattle". The writer of Source A, by contrast, ends by turning to the choice a migrant family faces, "to stay and risk everything, or to leave and lose everything", asking the reader to imagine that choice rather than judge it. Read together, the passages show how long the habit of discussing migrants as numbers and types has lasted, and why the writer of Source A thinks it must change.',
            },
            markScheme: [
              'Compares attitudes from both sources throughout',
              'Analyses methods used by both writers',
              'Uses evidence from both texts',
              'Shows clear understanding of different perspectives',
              'Top band: perceptive, detailed comparison with sustained critical voice',
            ],
          },
        ],
      },
      {
        id: 'aqa-p2-09-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 45 minutes on this section. Write in full sentences. You are reminded of the need to plan your answer.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p2-09-q5',
            questionNumber: 5,
            questionText:
              '"This country has always been shaped by immigration. We should celebrate the diversity it brings rather than fear it."\n\nWrite an article for a broadsheet newspaper in which you argue your point of view on this statement.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear argumentative piece that: addresses the statement directly and takes a clear position; uses some persuasive devices (rhetorical questions, examples, direct address); has a clear structure with introduction, body paragraphs, and conclusion; demonstrates generally accurate spelling and punctuation with some variety in sentence forms.',
              'Grade 6-7':
                'A well-crafted argument that: engages critically with both the historical claim and the call to celebrate diversity; uses a range of rhetorical techniques fluently, including counter-argument; deploys specific evidence and examples effectively; matches the register of a broadsheet article consistently; demonstrates consistent technical accuracy with ambitious vocabulary and varied syntax.',
              'Grade 8-9':
                'A compelling, assured argument that: offers a nuanced, sophisticated perspective that goes beyond simple agreement or disagreement; crafts a distinctive authorial voice appropriate to the form; deploys rhetorical strategies with precision and control, including effective counter-argument and strategic concession; demonstrates extensive vocabulary, varied syntax, and technical virtuosity throughout; engages with the complexity of identity, belonging, and national narratives.',
            },
            markScheme: [
              'AO5 (24 marks): Clear, effective communication matched to form, purpose, audience',
              'AO5: Structured argument with coherent paragraphing',
              'AO6 (16 marks): Accurate sentence demarcation',
              'AO6: Range of punctuation used effectively',
              'AO6: Accurate spelling of ambitious vocabulary',
              'AO6: Varied sentence forms for purpose and effect',
            ],
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
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${EXAM_10_SOURCE_A_REF}\nSource B: ${EXAM_10_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p2-10-q1',
            questionNumber: 1,
            questionText:
              "Read again Source A, the first paragraph.\n\nChoose four statements below which are TRUE.\n\nA) The writer believes something has gone wrong with childhood.\nB) The writer grew up in the 1980s.\nC) The writer is a secondary school teacher.\nD) The writer romanticises her own childhood.\nE) The writer has taught for fifteen years.\nF) Students experience long periods of boredom.\nG) Every moment of students' lives has been scheduled.\nH) The writer's childhood was a golden age.",
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${EXAM_10_SOURCE_A}\n\nSource B:\n${EXAM_10_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_10_SOURCE_A_REF} | Source B: ${EXAM_10_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'A, C, E, G - A: "Something has gone wrong with childhood." C: "a secondary school teacher." E: "over fifteen years." G: "every moment of their lives has been scheduled, supervised, and optimised." B is false (she grew up in the 1990s). D is false (she explicitly says she is not romanticising). F is false (children do not experience boredom - that is her point). H is false (she says "my own childhood in the 1990s was no golden age").',
            },
            markScheme: [
              '1 mark for each correct answer',
              'Maximum 4 marks',
              'No marks for incorrect selections',
            ],
          },
          {
            id: 'aqa-p2-10-q2',
            questionNumber: 2,
            questionText:
              'You need to refer to Source A and Source B for this question.\n\nUse details from both sources. Write a summary of the similarities and differences in how the two sources present the experiences of children.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'summary',
            extract: `Source A:\n${EXAM_10_SOURCE_A}\n\nSource B:\n${EXAM_10_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_10_SOURCE_A_REF} | Source B: ${EXAM_10_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both sources describe children who are made unhappy by too much time spent on work. In Source A, children have timetables "that would exhaust a management consultant" and spend only "forty-seven minutes per day" in unstructured outdoor play. In Source B, Dickens remembers being "one of seventy boys" at school, poring over books "for some hours" until he and his classmates could no longer think. Both writers show the effects on children: Source A mentions rising "anxiety" and a student who cannot say what she does for fun, while Dickens remembers "flushed faces and hot beating heads" and says these troubles made the boys "miserable enough". A difference is that Dickens also shows the physical effects, like "intolerable twitches in our legs", and says the boys were blamed for things they could not help. Source A presents a problem of modern life, while Source B looks back at the writer\'s own schooldays.',
              'Grade 6-7':
                'Both writers describe childhoods squeezed by too much formal work, and both insist that the children are not to blame for how they react. The students in Source A are over-scheduled: "school from eight-thirty to three-thirty, followed by homework, tutoring, sports clubs, music practice", until "Their weekends are not their own". Dickens\'s schoolboys are over-taught within the school day itself, poring over books "for some hours" until "sense became nonsense" and "dulness and vacancy wouldn\'t go". The effects are described differently. The writer of Source A uses figures - "a 40% increase in childhood anxiety diagnoses", "a 25% rise in self-harm" - and the silence of a student who cannot say what she does for fun. Dickens uses comic, physical exaggeration: "two pounds of lead in the chest, four pounds in the head, and several active blue-bottles in each ear". Both writers blame adults and the system rather than the children. Dickens protests that the boys "were always charged at for labouring under them, as if we had brought them on, of our own deliberate act and deed", and appeals to "any well-trained and experienced teacher" to confirm it. The writer of Source A similarly blames a culture of achievement that has left young people with "no idea what they actually enjoy". The key difference is what has been lost. For Dickens\'s boys, the lesson that defeated them in the afternoon would become "perfectly clear and bright in the freshness of to-morrow morning": their problem was exhaustion, and rest cured it. The writer of Source A fears something deeper, a generation that no longer knows what it enjoys at all.',
            },
            markScheme: [
              'Must reference both sources',
              'Identifies clear differences and/or similarities',
              'Uses evidence from both texts',
              'Synthesises rather than alternates between texts',
              'Infers beyond surface-level details',
            ],
          },
          {
            id: 'aqa-p2-10-q3',
            questionNumber: 3,
            questionText:
              'You now need to refer only to Source A.\n\nHow does the writer use language to convey her concern about modern childhood and to persuade the reader that something needs to change?',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: `Source A:\n${EXAM_10_SOURCE_A}`,
            extractSource: EXAM_10_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer opens with the dramatic statement "Something has gone wrong with childhood" which immediately tells the reader there is a serious problem. She uses the rule of three - "scheduled, supervised, and optimised" - to show how controlled children\'s lives are. The word "optimised" is interesting because it sounds like something from a business, not a childhood. The statistic of "forty-seven minutes" compared to "four hours in the 1970s" shocks the reader. The final anecdote about the student who couldn\'t answer "What do you do for fun?" is very effective because it shows a real example of the problem.',
              'Grade 6-7':
                'The writer constructs her argument through a carefully escalating rhetoric that moves from personal authority to statistical evidence to devastating anecdote. The opening declarative - "Something has gone wrong with childhood" - deploys the vague pronoun "something" strategically: it creates anxiety through imprecision, the unidentified threat more unsettling than a named one. The pre-emptive defence ("I do not say this as a nostalgic adult romanticising the past") disarms the reader\'s likely objection before it forms. The tricolon "scheduled, supervised, and optimised" is charged with corporate register - particularly "optimised," a word from business management repurposed to describe childhood, the mismatch between register and subject performing the very critique the article makes. The statistical comparison - "forty-seven minutes" versus "four hours in the 1970s" - is strategically followed by the comparative "less time than most adults spend commuting," which reframes the abstract number as a lived reality. The final paragraph\'s statistics ("40% increase," "25% rise") provide the evidential foundation, but it is the concluding anecdote that delivers the emotional payload: the student who stares at the question "What do you do for fun?" "as though I had asked the question in a foreign language." The simile is devastating because it implies that the concept of fun has become linguistically inaccessible - not merely unfamiliar but incomprehensible.',
              'Grade 8-9':
                'The writer\'s prose operates through a sustained rhetoric of dispossession, systematically cataloguing what has been taken from childhood while deploying the very precision and efficiency she critiques. The opening sentence - "Something has gone wrong with childhood" - is structurally foundational: the abstract pronoun "something" and the euphemistic "gone wrong" create a deliberate vagueness that the article will progressively diagnose, positioning the reader as patient receiving a gradually revealed prognosis. The parenthetical concession about the 1990s is rhetorically sophisticated: by denying nostalgia, the writer claims the authority of the dispassionate analyst rather than the sentimental traditionalist. The term she coins - "unstructured time" - is itself revealing: the positive state (freedom, play, boredom) can only be named through negation, as the absence of structure, suggesting that structure has become so totalising that it defines even its own opposite. The tricolon "scheduled, supervised, and optimised" enacts a semantic escalation from the organisational to the industrial: "optimised" is the key term, importing the vocabulary of algorithmic efficiency into the domain of childhood. The child has become a process to be refined. The statistical paragraph performs a rhetorical double movement: the numbers - "forty-seven minutes," "four hours" - are presented as evidence, but the subsequent comparison to commuting time re-encodes the abstract data as experiential absurdity. The final anecdote is the article\'s structural and emotional climax, and its power lies in the gap between question and non-response. The simile "as though I had asked the question in a foreign language" does not merely suggest unfamiliarity but untranslatability - "fun" exists in a linguistic register that the student can no longer access. This is not a child who has forgotten how to play; it is a child for whom the category of play has been cognitively eliminated. The horror is not in what the student says but in the fact that she has nothing to say.',
            },
            markScheme: [
              'Analyses persuasive and rhetorical language techniques in detail',
              'Comments on the effect of specific words and phrases',
              'Considers how language creates concern and positions the reader',
              'Uses subject terminology accurately and precisely',
              'Top band: perceptive, detailed, conceptualised analysis',
            ],
          },
          {
            id: 'aqa-p2-10-q4',
            questionNumber: 4,
            questionText:
              'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different perspectives on childhood and what children need.\n\nIn your answer, you could:\n- compare their different perspectives\n- compare the methods they use to convey their perspectives\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${EXAM_10_SOURCE_A}\n\nSource B:\n${EXAM_10_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_10_SOURCE_A_REF} | Source B: ${EXAM_10_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers believe children need rest from constant work. The writer of Source A argues that modern children are too busy with scheduled activities and have lost "unstructured time". Dickens in Source B remembers how long hours of lessons left him and his classmates confused, sleepy and "miserable enough". Both writers think adults are responsible for the problem: in Source A, children\'s lives have been "scheduled, supervised, and optimised", and in Source B, the boys were blamed "as if we had brought them on" themselves. A key difference is the tone. Source A is serious and uses statistics, while Dickens is funny, joking about "several active blue-bottles in each ear". Both writers use examples to make their points - the student in Source A who cannot answer "What do you do for fun?", and Dickens\'s memories of his own school in Source B.',
              'Grade 6-7':
                'Both writers argue that adults misunderstand what children need, but they come at the argument from different directions and in different tones. The writer of Source A argues from professional observation and evidence, as "a secondary school teacher" of fifteen years: time is measured ("forty-seven minutes" against "four hours in the 1970s") and consequences are counted ("a 40% increase in childhood anxiety diagnoses"). Her view is that children need freedom from structure: "unstructured time", the chance to "wander", even "the particular, irreplaceable boredom of a long afternoon with nothing to do". Dickens argues from memory and from the body. He recreates the schoolroom from the inside through a long, repetitive list of what "wouldn\'t" happen - "figures wouldn\'t work", "memory wouldn\'t come" - so that the sentence itself seems to drag like a long lesson. His view is that a child\'s mind and body have natural limits which long hours ignore: the seats become "too hard to be sat upon after a certain time", and the fidgeting and drowsiness that the boys were blamed for were never deliberate. His tone is comic, but the comedy has a point, and his closing appeal to "any well-trained and experienced teacher, not to say psychologist" and to "PROFESSOR OWEN", the anatomist, presents the complaint as a matter of science rather than a schoolboy\'s grumble. The writer of Source A ends on a student\'s silence; Dickens ends on a challenge to the experts. Both conclude that children suffer when adults fill their time without asking what a child can bear.',
            },
            markScheme: [
              'Compares perspectives from both sources throughout',
              'Analyses methods used by both writers',
              'Uses evidence from both texts',
              'Shows clear understanding of different perspectives',
              'Top band: perceptive, detailed comparison with sustained critical voice',
            ],
          },
        ],
      },
      {
        id: 'aqa-p2-10-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 45 minutes on this section. Write in full sentences. You are reminded of the need to plan your answer.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p2-10-q5',
            questionNumber: 5,
            questionText:
              '"Children today are under more pressure than any previous generation. Schools, parents, and society must do more to protect young people\'s mental health."\n\nWrite a speech to be delivered at a parents\' evening in which you argue your point of view on this statement.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear speech that: addresses the statement and takes a position; uses some rhetorical devices appropriate to speech (direct address to parents, rhetorical questions, repetition); has a clear structure with an engaging opening and a memorable conclusion; demonstrates generally accurate spelling and punctuation.',
              'Grade 6-7':
                'A well-crafted speech that: engages critically with both the claim about pressure and the call for protection; uses techniques appropriate to the spoken form and the specific audience of parents (shared responsibility, emotional appeal, practical suggestions); deploys evidence and examples persuasively; maintains an appropriate register for the setting; demonstrates consistent technical accuracy with ambitious vocabulary.',
              'Grade 8-9':
                'A compelling, assured speech that: offers a nuanced perspective that avoids simplistic blame while maintaining a clear argument; crafts a distinctive voice that balances authority with empathy, appropriate for addressing parents; deploys rhetorical strategies with precision, including effective counter-argument, personal anecdote, and audience engagement; demonstrates extensive vocabulary, varied syntax, and technical virtuosity; creates a genuine sense of shared purpose and urgency.',
            },
            markScheme: [
              'AO5 (24 marks): Clear, effective communication matched to form, purpose, audience',
              'AO5: Structured argument with coherent paragraphing',
              'AO6 (16 marks): Accurate sentence demarcation',
              'AO6: Range of punctuation used effectively',
              'AO6: Accurate spelling of ambitious vocabulary',
              'AO6: Varied sentence forms for purpose and effect',
            ],
          },
        ],
      },
    ],
  },
]
