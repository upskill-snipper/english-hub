// ─── IELTS Academic Reading — practice item bank (Set 6) ───────────────────
// ORIGINAL content written for The English Hub. These passages and questions are
// invented purely to practise the Academic Reading question formats (MCQ,
// True/False/Not Given, and sentence/summary completion). They are NOT
// reproductions of any official IELTS past paper, and no official affiliation is
// implied. Academic track. Topic domain: history of technology and ideas
// (the printing press; the European coffee house; railways and standard time).
//
// One complete, carefully-checked test: 3 passages, 40 questions total
// (14 + 13 + 13). Answers are unambiguously verifiable from the passage text,
// and every question carries an explanation justified from that text.
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const READING_SET_6: ReadingTest[] = [
  {
    id: 'rd-academic-006',
    title: 'Academic Reading — Practice Test 6',
    track: 'academic',
    estimatedMinutes: 60,
    passages: [
      {
        id: 'rd-academic-006-p1',
        title: 'The Press That Reshaped a Continent',
        body: `When the goldsmith Johannes Gutenberg assembled his printing workshop in the German city of Mainz around 1450, he was not inventing the idea of printing itself. Printing from carved wooden blocks had been practised in East Asia for centuries, and craftsmen in Europe already pressed images and short texts onto paper from single engraved plates. Gutenberg's contribution was narrower but far more powerful: he devised a way of casting individual letters as separate, reusable metal pieces, which could be arranged into a page, inked, pressed, and then broken apart and rearranged for the next page. This system of movable metal type, combined with an oil-based ink that clung to metal and a press adapted from the kind used to crush grapes and olives, turned the slow copying of books into something resembling manufacture.

The change in scale was dramatic. A skilled medieval scribe, working steadily, might produce a single substantial book in the course of a year, and every copy was therefore expensive and rare. Such books were luxuries, often locked away and consulted only under supervision, and a scholar might travel for days simply to read a volume that existed nowhere nearer home. A printing workshop, by contrast, could strike off hundreds of identical copies of the same text in a matter of weeks. Within fifty years of Gutenberg's first Bibles, presses were operating in more than two hundred and fifty European towns, and the number of books in circulation had multiplied beyond anything the manuscript age could have imagined. Prices fell as supply rose, and works that had once been chained inside monastery libraries began to appear on the shelves of merchants, lawyers and physicians. Reading, once the guarded privilege of a narrow clerical class, slowly became an ordinary activity of the prosperous town.

This abundance had effects that went well beyond the convenience of owning more books. Because printed copies were mechanically identical, a scholar in one city could now refer another, hundreds of kilometres away, to a precise page and line and be confident that they were looking at exactly the same text. Hand-copied manuscripts had always drifted, as tired or careless scribes introduced small errors that were then faithfully reproduced by the next copyist; over generations a single work might splinter into many subtly different versions. Print did not make error impossible, but it made it correctable, for a mistake spotted in one copy could be fixed in the next printing and the correction shared widely. Diagrams, maps and astronomical tables, in particular, gained a reliability they had never previously possessed, since a chart that survived copying unaltered was worth far more to a navigator or an astronomer than one that might quietly mislead. For the first time, scholars in distant places could build steadily on one another's work, confident that the foundation beneath them would not shift.

The new medium also unsettled those in authority. Ideas that had once spread slowly, by word of mouth or in a handful of laboriously copied pamphlets, could now be scattered across a region faster than the authorities could respond. The religious reformer Martin Luther understood this instinctively, and his short, vigorously written tracts were reprinted again and again by sympathetic printers, reaching an audience of a size no earlier dissenter could have addressed. Rulers and churches, alarmed, responded with licensing systems and lists of forbidden books, attempting to control what the presses produced. Such measures slowed the circulation of unwelcome ideas but rarely stopped it, for a text banned in one territory could be printed across a border and smuggled back.

It would be a mistake, however, to imagine that print transformed society overnight, or that its effects were everywhere the same. Most ordinary people in the first centuries of printing could not read at all, and the spoken sermon and the public notice remained, for them, the primary sources of news. Books in Latin, the language of the educated, circulated easily across borders, while works in everyday local languages stayed closer to home and helped, over time, to fix those languages in a standard written form. The press magnified existing trends as often as it created new ones; it gave force to movements that were already stirring rather than conjuring them from nothing. What is beyond dispute is that the quiet workshop in Mainz set in motion a long, uneven process whose consequences — for learning, for religion, and for the very idea of a shared public conversation — are still unfolding.`,
        questions: [
          {
            id: 'rd-006-p1-q1',
            type: 'tfng',
            prompt: 'Gutenberg was the first person anywhere to print text onto paper.',
            answer: 'false',
            explanation:
              'The first paragraph states that "Printing from carved wooden blocks had been practised in East Asia for centuries" and that European craftsmen already printed images and short texts. Gutenberg therefore did not invent printing itself, so the statement is False.',
          },
          {
            id: 'rd-006-p1-q2',
            type: 'mcq',
            prompt: 'What does the passage identify as Gutenberg’s key innovation?',
            options: [
              'Adapting a press that had been used for crushing grapes and olives',
              'Casting individual letters as separate, reusable metal pieces',
              'Replacing wooden printing blocks with engraved metal plates',
              'Inventing an oil-based ink that would cling to metal type',
            ],
            correctIndex: 1,
            explanation:
              'The first paragraph says his contribution was that "he devised a way of casting individual letters as separate, reusable metal pieces." The press and the ink are described as things he combined with this system, not the central innovation, so option B is correct.',
          },
          {
            id: 'rd-006-p1-q3',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Gutenberg adapted his press from the kind used to crush grapes and _______.',
            acceptableAnswers: ['olives'],
            explanation:
              'The first paragraph refers to "a press adapted from the kind used to crush grapes and olives." The missing word is "olives".',
          },
          {
            id: 'rd-006-p1-q4',
            type: 'tfng',
            prompt:
              'A medieval scribe could typically produce only about one substantial book in a year.',
            answer: 'true',
            explanation:
              'The second paragraph states that "A skilled medieval scribe, working steadily, might produce a single substantial book in the course of a year." This matches the statement, so it is True.',
          },
          {
            id: 'rd-006-p1-q5',
            type: 'mcq',
            prompt:
              'According to the passage, within fifty years of Gutenberg’s first Bibles, presses were operating in:',
            options: [
              'a single German region around Mainz',
              'fewer than fifty European towns',
              'more than two hundred and fifty European towns',
              'every major city in the world',
            ],
            correctIndex: 2,
            explanation:
              'The second paragraph states that presses "were operating in more than two hundred and fifty European towns" within fifty years. Option C is correct.',
          },
          {
            id: 'rd-006-p1-q6',
            type: 'gap',
            prompt:
              'Complete the summary with ONE word from the passage: As the supply of books rose, their _______ fell, so that works once chained in monastery libraries reached merchants and lawyers.',
            acceptableAnswers: ['prices', 'price'],
            explanation:
              'The second paragraph says "Prices fell as supply rose." The required word is "prices" (the singular "price" is accepted as an equivalent).',
          },
          {
            id: 'rd-006-p1-q7',
            type: 'tfng',
            prompt: 'The passage claims that printing made errors in books impossible.',
            answer: 'false',
            explanation:
              'The third paragraph explicitly states that "Print did not make error impossible, but it made it correctable." The statement contradicts this, so it is False.',
          },
          {
            id: 'rd-006-p1-q8',
            type: 'mcq',
            prompt:
              'Why, according to the passage, could two distant scholars be confident they were reading the same text?',
            options: [
              'Because printers employed scholars to check every page by hand',
              'Because printed copies of a work were mechanically identical',
              'Because all printed books were written in Latin',
              'Because monasteries kept a single official version of each book',
            ],
            correctIndex: 1,
            explanation:
              'The third paragraph explains that "Because printed copies were mechanically identical, a scholar in one city could now refer another... to a precise page and line." Option B is correct.',
          },
          {
            id: 'rd-006-p1-q9',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Hand-copied manuscripts had always _______ as scribes introduced small errors that later copyists reproduced.',
            acceptableAnswers: ['drifted'],
            explanation:
              'The third paragraph states that "Hand-copied manuscripts had always drifted, as tired or careless scribes introduced small errors." The missing word is "drifted".',
          },
          {
            id: 'rd-006-p1-q10',
            type: 'tfng',
            prompt:
              'Martin Luther personally operated a printing press to reproduce his own tracts.',
            answer: 'not-given',
            explanation:
              'The fourth paragraph says Luther "understood this instinctively" and that his tracts "were reprinted again and again by sympathetic printers," but it never states that he personally operated a press. There is no information about this, so the answer is Not Given.',
          },
          {
            id: 'rd-006-p1-q11',
            type: 'mcq',
            prompt: 'How did rulers and churches respond to ideas they considered dangerous?',
            options: [
              'By destroying all the printing presses they could find',
              'By introducing licensing systems and lists of forbidden books',
              'By paying printers not to reproduce certain pamphlets',
              'By banning the use of local languages in print',
            ],
            correctIndex: 1,
            explanation:
              'The fourth paragraph states that rulers and churches "responded with licensing systems and lists of forbidden books." Option B matches the text directly.',
          },
          {
            id: 'rd-006-p1-q12',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: A text banned in one territory could be printed across a _______ and smuggled back.',
            acceptableAnswers: ['border'],
            explanation:
              'The fourth paragraph says "a text banned in one territory could be printed across a border and smuggled back." The missing word is "border".',
          },
          {
            id: 'rd-006-p1-q13',
            type: 'tfng',
            prompt:
              'In the first centuries of printing, most ordinary people relied on books as their main source of news.',
            answer: 'false',
            explanation:
              'The final paragraph states that "Most ordinary people in the first centuries of printing could not read at all, and the spoken sermon and the public notice remained, for them, the primary sources of news." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-006-p1-q14',
            type: 'mcq',
            prompt: 'What is the author’s overall view of the printing press’s impact?',
            options: [
              'It changed European society almost overnight and in the same way everywhere.',
              'It had little real effect because so few people could read.',
              'It often magnified trends already under way rather than creating them from nothing.',
              'Its main importance was to fix Latin as the language of the educated.',
            ],
            correctIndex: 2,
            explanation:
              'The final paragraph states that "The press magnified existing trends as often as it created new ones; it gave force to movements that were already stirring rather than conjuring them from nothing." Option C captures the author’s balanced view; the passage explicitly rejects the idea of an overnight, uniform transformation.',
          },
        ],
      },
      {
        id: 'rd-academic-006-p2',
        title: 'The Penny University',
        body: `In the second half of the seventeenth century a new kind of public space appeared in the cities of western Europe, and within a generation it had become almost impossible to imagine urban life without it. The coffee house arrived first in the trading ports of the eastern Mediterranean, carried westward along the same routes that brought the beans themselves, and reached London, Oxford, Paris and Amsterdam in quick succession. By 1700 London alone is thought to have contained hundreds of such establishments, each a smoky, crowded room where, for the price of a single dish of coffee, a man might sit for hours. The drink itself was unfamiliar and, to some palates, unpleasant — dark, bitter and served scaldingly hot — but its novelty was part of the attraction, and the rooms that served it acquired a reputation for seriousness that the older drinking houses had never enjoyed.

What made these rooms remarkable was not the drink but the company. Unlike the tavern, where ale dulled the wits and conversation tended to wander, the coffee house offered a beverage that sharpened attention and kept its patrons alert and argumentative. Just as importantly, the price of admission was low and, in principle, the same for everyone. A merchant might find himself at the same long table as a poet, a sea captain or a clergyman, and the ordinary distinctions of rank were, for a few hours, quietly set aside. People came not only to drink but to talk, to read the news-sheets that lay on the tables, and to listen to others who knew more than they did. It was this atmosphere of cheap, sociable learning that earned the London coffee houses their affectionate nickname, the penny universities, for the price of entry was a penny and the education, some said, was as good as any to be had at Oxford.

The houses quickly began to specialise, and a man with business to conduct soon learned which door to enter. Those interested in shipping and marine insurance gathered at one establishment near the docks, where lists of vessels and their cargoes were posted and where, in time, a famous insurance market would grow directly out of the conversations held over the tables. Men of science met at another, dealers in stocks at a third, writers and critics at a fourth. The coffee house thus became something more than a place to relax: it was an informal exchange where information was traded as briskly as goods, and where a piece of news — the loss of a ship, the outcome of a battle, the rumour of a new invention — could pass through a whole community in an afternoon.

This rapid circulation of talk did not please everyone. Governments watched the coffee houses with unease, suspecting, not without reason, that rooms full of strangers freely discussing the affairs of the day might prove difficult to control. In 1675 the English authorities went so far as to attempt to suppress them outright, issuing a proclamation that ordered the houses closed on the grounds that they were nurseries of idleness and discontent. The reaction was so immediate and so hostile that the order was quietly withdrawn within a fortnight, before it ever truly took effect. The episode revealed how deeply the institution had already embedded itself in the daily routines of the propertied classes, who were unwilling to surrender their newspapers and their arguments so easily.

Historians have sometimes been tempted to credit the coffee house with more than it deserves, presenting it as the single cradle of modern science, finance and the free press all at once. The reality is more modest. The coffee house did not invent these things, but it provided an unusually fertile setting in which they could develop, a neutral ground where men who would otherwise never have met could pool what they knew. Its very openness had limits that a modern reader should not overlook: women were, with few exceptions, excluded from the public rooms, and the penny that bought a seat, though small, was still beyond the reach of the labouring poor. For those who could enter, however, the coffee house offered something genuinely new — a place where ideas, like the customers, were free to mingle.`,
        questions: [
          {
            id: 'rd-006-p2-q1',
            type: 'tfng',
            prompt: 'The coffee house first appeared in the cities of western Europe.',
            answer: 'false',
            explanation:
              'The first paragraph states that "The coffee house arrived first in the trading ports of the eastern Mediterranean" and was then carried westward to cities such as London and Paris. It did not first appear in western Europe, so the statement is False.',
          },
          {
            id: 'rd-006-p2-q2',
            type: 'mcq',
            prompt:
              'Why, according to the passage, did the coffee house encourage sharper conversation than the tavern?',
            options: [
              'It was quieter and less crowded than a tavern.',
              'It served a drink that kept patrons alert rather than dulling their wits.',
              'It admitted only educated and wealthy customers.',
              'It banned the discussion of politics and trade.',
            ],
            correctIndex: 1,
            explanation:
              'The second paragraph contrasts the tavern, where "ale dulled the wits," with the coffee house, which "offered a beverage that sharpened attention and kept its patrons alert and argumentative." Option B is correct.',
          },
          {
            id: 'rd-006-p2-q3',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: In the coffee house the ordinary distinctions of _______ were, for a few hours, quietly set aside.',
            acceptableAnswers: ['rank'],
            explanation:
              'The second paragraph states that "the ordinary distinctions of rank were, for a few hours, quietly set aside." The missing word is "rank".',
          },
          {
            id: 'rd-006-p2-q4',
            type: 'mcq',
            prompt: 'Why were London coffee houses nicknamed the "penny universities"?',
            options: [
              'Because students from Oxford ran them to earn money',
              'Because they each charged exactly one penny per year in membership',
              'Because the entry price was a penny and the learning was thought to rival a university’s',
              'Because only university graduates were allowed to speak there',
            ],
            correctIndex: 2,
            explanation:
              'The second paragraph explains that the nickname arose "for the price of entry was a penny and the education, some said, was as good as any to be had at Oxford." Option C captures both halves of the explanation.',
          },
          {
            id: 'rd-006-p2-q5',
            type: 'tfng',
            prompt:
              'Different coffee houses came to be associated with particular trades or interests.',
            answer: 'true',
            explanation:
              'The third paragraph states that "The houses quickly began to specialise," with shipping men at one, men of science at another, stock dealers at a third and writers at a fourth. This supports the statement, so it is True.',
          },
          {
            id: 'rd-006-p2-q6',
            type: 'gap',
            prompt:
              'Complete the summary with ONE word from the passage: A coffee house near the docks dealt in shipping and marine _______, and a famous market later grew out of the conversations held there.',
            acceptableAnswers: ['insurance'],
            explanation:
              'The third paragraph refers to those "interested in shipping and marine insurance" gathering near the docks, where "a famous insurance market would grow." The missing word is "insurance".',
          },
          {
            id: 'rd-006-p2-q7',
            type: 'mcq',
            prompt:
              'The passage describes the coffee house as an "informal exchange" mainly because:',
            options: [
              'goods were physically bought and sold on the premises',
              'information was traded there as briskly as goods were elsewhere',
              'it operated under official government licence',
              'customers exchanged one drink for another',
            ],
            correctIndex: 1,
            explanation:
              'The third paragraph calls it "an informal exchange where information was traded as briskly as goods," and gives examples of news passing through a community in an afternoon. Option B is correct.',
          },
          {
            id: 'rd-006-p2-q8',
            type: 'tfng',
            prompt: 'The English authorities tried to shut down the coffee houses in 1675.',
            answer: 'true',
            explanation:
              'The fourth paragraph states that "In 1675 the English authorities went so far as to attempt to suppress them outright, issuing a proclamation that ordered the houses closed." This matches the statement, so it is True.',
          },
          {
            id: 'rd-006-p2-q9',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The 1675 proclamation was withdrawn within a _______, before it ever truly took effect.',
            acceptableAnswers: ['fortnight'],
            explanation:
              'The fourth paragraph says "the order was quietly withdrawn within a fortnight, before it ever truly took effect." The missing word is "fortnight".',
          },
          {
            id: 'rd-006-p2-q10',
            type: 'mcq',
            prompt:
              'What does the rapid withdrawal of the 1675 order show, according to the passage?',
            options: [
              'That the government had no real power over the coffee houses',
              'That the coffee houses were already deeply embedded in the lives of the propertied classes',
              'That very few people actually used the coffee houses',
              'That coffee had become too expensive to sell',
            ],
            correctIndex: 1,
            explanation:
              'The fourth paragraph says the episode "revealed how deeply the institution had already embedded itself in the daily routines of the propertied classes." Option B is correct.',
          },
          {
            id: 'rd-006-p2-q11',
            type: 'tfng',
            prompt:
              'The author agrees that the coffee house was the single origin of modern science, finance and the free press.',
            answer: 'false',
            explanation:
              'The final paragraph says historians have been "tempted to credit the coffee house with more than it deserves" and that "The reality is more modest"; the coffee house "did not invent these things." The author rejects this claim, so the statement is False.',
          },
          {
            id: 'rd-006-p2-q12',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The coffee house provided a neutral _______ where men who would otherwise never have met could pool what they knew.',
            acceptableAnswers: ['ground'],
            explanation:
              'The final paragraph describes it as "a neutral ground where men who would otherwise never have met could pool what they knew." The missing word is "ground".',
          },
          {
            id: 'rd-006-p2-q13',
            type: 'mcq',
            prompt:
              'According to the final paragraph, what was one important limit on the openness of the coffee house?',
            options: [
              'It closed during the winter months.',
              'It admitted only foreign merchants.',
              'Women were, with few exceptions, excluded from the public rooms.',
              'Customers were forbidden to read newspapers.',
            ],
            correctIndex: 2,
            explanation:
              'The final paragraph notes that "women were, with few exceptions, excluded from the public rooms," and that the penny was beyond the reach of the labouring poor. Option C states one of these limits correctly.',
          },
        ],
      },
      {
        id: 'rd-academic-006-p3',
        title: 'Setting the Clocks Together',
        body: `For most of human history there was no need for two towns to agree on the time. Each community set its clocks by the sun, declaring it noon at the moment the sun stood highest over the local church or market square. Because the sun reaches its peak a few minutes earlier in the east than in the west, a town lying some distance to the east of its neighbour would run its day slightly ahead. The difference was real but harmless. A traveller crossing the country on horseback moved so slowly that the gradual drift of local time was never noticed, and a clock that disagreed with the next village by a quarter of an hour caused nobody any difficulty.

The railway changed this almost as soon as it appeared. A train could carry a passenger between distant towns in a few hours rather than a few days, and suddenly the small disagreements between local clocks became a serious practical problem. A timetable printed in one city was meaningless in another that kept a different time, and stations along a single line might each follow their own local noon. Worse, the danger was not merely one of confusion but of collision. On the early single-track lines, where trains travelling in opposite directions shared the same rails and were kept apart only by careful scheduling, a clock that was wrong by a few minutes could place two trains on the same stretch of track at the same moment. Safety, as much as convenience, demanded that everyone consult a single agreed time.

The railway companies acted first, well ahead of any government. In Britain they began, from the late 1840s, to run their entire networks on the time kept at a single observatory, distributing it along the lines by telegraph so that every station could set its clocks to the same standard. This became known as railway time, and for a while it coexisted awkwardly with the older local time. In some towns a single clock face was fitted with two minute hands, or two separate dials were displayed side by side, one showing the time the town had always kept and the other the time the trains obeyed. Travellers learned to ask which time a given figure referred to, and gradually, as the inconvenience of the older system became obvious, the railway's version won out in daily life long before the law caught up with it.

The problem, however, did not stop at national borders, and as railway and telegraph networks spread across continents the case for a single global framework grew harder to ignore. In 1884 delegates from many countries met in Washington to address the question. They agreed to divide the world into a series of standard time zones, each keeping a uniform time and differing from its neighbours by a whole number of hours, and to measure all of them from a single agreed starting line, the meridian passing through the observatory at Greenwich in London. The choice was partly a matter of convenience: a great proportion of the world's shipping already used charts based on Greenwich, and adopting it as the global reference saved the labour of redrawing them. Not every country accepted the new scheme at once, and some clung to their own arrangements for decades, but the principle established at Washington gradually became the framework the whole world now takes for granted.

It is easy, looking back, to assume that standard time was simply a rational improvement that any sensible society would adopt. Yet at the time the change was felt by many as a loss. To set the clocks of a whole region by a distant observatory was to override the testimony of the local sun, and some critics complained that an artificial, imposed time had replaced the natural day. There was a genuine sacrifice in this: noon by the clock would no longer be the true midday of any but a few favoured places. But the gain was a world that could be coordinated — in which a timetable, a telegram or a meeting could be arranged between distant points with confidence that all sides meant the same hour. The clocks of the world were set together not because the sun had changed, but because people had at last acquired machines fast enough to make their old, comfortable disagreement impossible to sustain.`,
        questions: [
          {
            id: 'rd-006-p3-q1',
            type: 'tfng',
            prompt:
              'In earlier centuries, each town typically set its clocks by the position of the sun.',
            answer: 'true',
            explanation:
              'The first paragraph states that "Each community set its clocks by the sun, declaring it noon at the moment the sun stood highest over the local church or market square." This matches the statement, so it is True.',
          },
          {
            id: 'rd-006-p3-q2',
            type: 'mcq',
            prompt: 'Why did a town to the east run its day slightly ahead of a town to the west?',
            options: [
              'Because eastern towns had more accurate clocks',
              'Because the sun reaches its highest point earlier in the east',
              'Because eastern towns were generally larger',
              'Because western towns started work later in the morning',
            ],
            correctIndex: 1,
            explanation:
              'The first paragraph explains that "the sun reaches its peak a few minutes earlier in the east than in the west," so an eastern town "would run its day slightly ahead." Option B is correct.',
          },
          {
            id: 'rd-006-p3-q3',
            type: 'tfng',
            prompt:
              'A traveller on horseback often noticed the small differences between the local times of different villages.',
            answer: 'false',
            explanation:
              'The first paragraph states that a horseback traveller "moved so slowly that the gradual drift of local time was never noticed." The statement says such differences were often noticed, which contradicts the text, so it is False.',
          },
          {
            id: 'rd-006-p3-q4',
            type: 'mcq',
            prompt:
              'According to the passage, what made differences between local clocks dangerous once railways appeared?',
            options: [
              'Trains could not run at night without synchronised clocks.',
              'Passengers frequently missed their trains and demanded refunds.',
              'On single-track lines, a clock wrong by minutes could put two trains on the same track at once.',
              'Telegraph signals interfered with the running of the clocks.',
            ],
            correctIndex: 2,
            explanation:
              'The second paragraph explains that on single-track lines kept apart "only by careful scheduling, a clock that was wrong by a few minutes could place two trains on the same stretch of track at the same moment." Option C is correct.',
          },
          {
            id: 'rd-006-p3-q5',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The danger posed by inaccurate clocks on single-track lines was not merely confusion but _______.',
            acceptableAnswers: ['collision'],
            explanation:
              'The second paragraph states that "the danger was not merely one of confusion but of collision." The missing word is "collision".',
          },
          {
            id: 'rd-006-p3-q6',
            type: 'tfng',
            prompt:
              'In Britain, the government introduced standard railway time before the railway companies did.',
            answer: 'false',
            explanation:
              'The third paragraph states that "The railway companies acted first, well ahead of any government," running their networks on a single observatory’s time from the late 1840s. The statement reverses this, so it is False.',
          },
          {
            id: 'rd-006-p3-q7',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The railway companies distributed a single standard time along their lines by _______ so that every station could set its clocks alike.',
            acceptableAnswers: ['telegraph'],
            explanation:
              'The third paragraph says they were "distributing it along the lines by telegraph so that every station could set its clocks to the same standard." The missing word is "telegraph".',
          },
          {
            id: 'rd-006-p3-q8',
            type: 'mcq',
            prompt:
              'How did some towns display both local time and railway time during the period of transition?',
            options: [
              'By ringing a bell whenever the two times differed',
              'By fitting a clock with two minute hands or showing two dials side by side',
              'By switching the town clock off until the change was complete',
              'By printing the two times in the local newspaper each morning',
            ],
            correctIndex: 1,
            explanation:
              'The third paragraph describes how "a single clock face was fitted with two minute hands, or two separate dials were displayed side by side," one for local time and one for railway time. Option B is correct.',
          },
          {
            id: 'rd-006-p3-q9',
            type: 'gap',
            prompt:
              'Complete the summary with ONE word from the passage: In 1884, delegates meeting in Washington agreed to divide the world into a series of standard time _______.',
            acceptableAnswers: ['zones'],
            explanation:
              'The fourth paragraph states that the delegates "agreed to divide the world into a series of standard time zones." The missing word is "zones".',
          },
          {
            id: 'rd-006-p3-q10',
            type: 'mcq',
            prompt:
              'According to the passage, why was Greenwich chosen as the global reference meridian?',
            options: [
              'Because it lay exactly halfway between east and west',
              'Because Britain had the largest railway network',
              'Because much of the world’s shipping already used charts based on Greenwich',
              'Because the other delegates could not agree on any alternative',
            ],
            correctIndex: 2,
            explanation:
              'The fourth paragraph says the choice was "partly a matter of convenience: a great proportion of the world’s shipping already used charts based on Greenwich, and adopting it as the global reference saved the labour of redrawing them." Option C is correct.',
          },
          {
            id: 'rd-006-p3-q11',
            type: 'tfng',
            prompt: 'Every country adopted the Washington scheme immediately.',
            answer: 'false',
            explanation:
              'The fourth paragraph states that "Not every country accepted the new scheme at once, and some clung to their own arrangements for decades." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-006-p3-q12',
            type: 'tfng',
            prompt:
              'The delegates at the Washington meeting also agreed to change the length of the standard hour.',
            answer: 'not-given',
            explanation:
              'The fourth paragraph describes the agreement to create time zones differing "by a whole number of hours" measured from Greenwich, but it says nothing about altering the length of the hour itself. There is no information on this point, so the answer is Not Given.',
          },
          {
            id: 'rd-006-p3-q13',
            type: 'mcq',
            prompt: 'What is the author’s main point in the final paragraph?',
            options: [
              'Standard time was a purely rational improvement that everyone welcomed.',
              'Standard time brought a real loss as well as a gain, replacing the local sun with a coordinated world.',
              'The sun itself changed once standard time was adopted.',
              'Standard time should be abandoned in favour of local solar time.',
            ],
            correctIndex: 1,
            explanation:
              'The final paragraph acknowledges that the change "was felt by many as a loss" and involved "a genuine sacrifice," but that "the gain was a world that could be coordinated." Option B captures this balance; the passage explicitly says the sun had not changed and does not call for abandoning standard time.',
          },
        ],
      },
    ],
  },
]
