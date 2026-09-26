// @ts-nocheck
// ─── WJEC/Eduqas Mock Exam Data ──────────────────────────────────────────────
// WJEC C700QS English Language: 6 mock exam papers (3x Component 1, 3x Component 2)
// Component 1: 20th Century Literature Reading + Creative Prose Writing
// Component 2: 19th/21st Century Non-Fiction Reading + Transactional Writing

/**
 * WHAT WAS WRONG (27 September 2026). These six papers are live: they are in
 * allMockExamPapers (src/data/mock-exams.ts), which the mock-exam pages serve.
 * The three Component 2 papers named six writers for their sources, and not
 * one of the six passages was by the writer named.
 *   - Mock 1, Source B: "From an essay by Thomas Carlyle, 'The Condition of
 *     England Question', 1847". Carlyle wrote no essay of that name in 1847:
 *     "Condition-of-England Question" is the first chapter of his Chartism
 *     (1839), and none of the passage's eleven sentences is in Past and
 *     Present (1843), whose first chapter opens "The condition of England".
 *     Its first sentence dated itself 1847, and its third marvelled at the
 *     telegraph.
 *   - Mocks 2 and 3, Source B: "a personal essay by Raymond Williams,
 *     'Culture and the Working Man', 1960" and "an autobiography by Richard
 *     Hoggart, 'The Uses of Literacy', 1957". An audit note in this file (28
 *     April 2026, FC20) recorded that both were "paraphrase composition, not
 *     verbatim". The second gave its narrator a stonemason for a father, which
 *     is Carlyle's biography. Both writers are in UK copyright: had the
 *     passages been theirs, 200 words of each would have been far beyond fair
 *     dealing.
 *   - Source A of all three: the same note recorded that "Dr Elena Kowalski"
 *     and "Dr James Chen" are not real authors and that the passage labelled
 *     Naomi Klein, "This Changes Everything", 2014, is not from her book.
 * The note left every label printing. Students were asked "How does Naomi
 * Klein use evidence" and "How does Dr Chen use evidence", and the model
 * answers credited the invented words to Klein, Williams, Hoggart and Carlyle.
 *
 * WHAT IT IS NOW.
 *   - Each Source B is a genuine nineteenth-century passage, cut by script
 *     from the Project Gutenberg text and never retyped. The papers stand for
 *     Eduqas C700QS/2, whose two sources are one nineteenth-century and one
 *     twenty-first-century text (src/data/exam-guides/wjec-guide.ts), so the
 *     "20th Century" Williams and Hoggart sources did not fit the paper
 *     either. Each replacement keeps the focus of the passage it replaces:
 *       Mock 1: Carlyle, Past and Present, book III, chapter II, "Gospel of
 *         Mammonism" (Gutenberg #13534), from "We call it a Society" to "but
 *         nothing more." The invented passage's isolation and indifference,
 *         in words Carlyle did write: a society whose only bond is payment.
 *       Mock 2: John Ruskin, Modern Painters, volume III (1856), part IV,
 *         chapter XVII, the end of section 23 and section 24 (Gutenberg
 *         #38923), with a French quotation, the words introducing it and the
 *         two sentences after it cut, marked [...]. An old labourer's
 *         patience against modern haste becomes Ruskin on impatience, novelty
 *         and the railway.
 *       Mock 3: William Cobbett, Rural Rides, the entry written at Reigate on
 *         20 October 1825 (Gutenberg #34238), with four sentences cut, marked
 *         [...]. A son writing of his father's labour becomes an eye-witness
 *         at a farm sale, blaming a system that "has ground the labourers
 *         down".
 *     The Gutenberg texts mark italics with underscores; the site cannot show
 *     italics, so they are dropped, and the labels say so.
 *   - Each passage was compared character by character with a fresh copy
 *     of its Gutenberg text, and word by word with scans of
 *     nineteenth-century printings on archive.org (27 September 2026). The
 *     scans showed that two of the Gutenberg texts are later editions, so
 *     each label now names the one it follows. Gutenberg's Carlyle is a
 *     later reprint that prints "woe" where the 1843 and 1890 printings have
 *     "wo" and differs from them in a few marks, and its Cobbett is the T.
 *     Nelson and Sons edition, which prints "Everything" and "farmhouse"
 *     where the 1830 edition has "Every thing" and "farm-house". Neither
 *     changes a word a student would quote. One slip in Gutenberg's Carlyle,
 *     a missing question mark, is printed as that edition has it (see
 *     WJEC_C2_SOURCE_B_1 for why it is not restored).
 *   - Each Source A is kept word for word, except that Mock 2's no longer
 *     credits an unsourced study to the University of Cambridge, and each is
 *     labelled as specially written for the site.
 *   - Every question, mark scheme and model answer that named those writers
 *     or quoted those passages was rewritten for the new sources.
 *
 * scripts/check-mock-exam-extracts.mjs (26 September 2026), and a reading of
 * every answer, also found model answers asserting what their extracts do not
 * say. Each is corrected below, so that every quotation is in its extract and
 * the analysis is true of the words quoted:
 *   - c1-m1-q2 quoted "Now Mr Walsh shops online" (the text has "shopped")
 *     and called "bought" and "came" present tense; c1-m1-q3 quoted "more
 *     deliberately, she turned the sign", dropping words without marking the
 *     cut, and gave Mr Walsh a loneliness the text never mentions; c1-m1-q4
 *     said the piece never names the forces closing the shop, when its first
 *     paragraph names the supermarket;
 *   - c1-m2-q4 said Henry "can't look up" (he looks down at the soil);
 *   - c1-m3-q2 said the smell is recycled through the building's lungs (the
 *     air is), and c1-m3-q4 quoted "the only air that wasn't recycled",
 *     another unmarked cut;
 *   - c2-m1-q2 said propaganda "had to convince", which the text does not;
 *   - c2-m2-q1 credited the passage with "likes and follower counts", which
 *     it never mentions, and c2-m2-q2 cited figures of 70% and 62% and
 *     quoted "a thirteen-year-old cannot eat breakfast without checking
 *     likes", "something has gone fundamentally wrong" and "We are witnessing
 *     a crisis", none of them in a passage whose only percentage is 14%;
 *   - c2-m3-q2 quoted "It is not a future problem", "calculated" and a
 *     repeated "now", none of which the passage has.
 * A second reading, against the new sources, found more of the same kind:
 *   - c1-m1-q1 asked for five things about "the shop and its owner" and
 *     answered with two that are about neither (the rain, the empty
 *     street), which a mark scheme would not credit;
 *   - c1-m2-q4 said Henry "does not fully understand" straight after
 *     quoting "Then he understood."; what he does not yet know is which son;
 *   - c1-m3-q1 listed "She watches pigeons from her window", which the text
 *     implies but does not say, in a question that asks what the text says;
 *   - c2-m1-q2 quoted "the algorithm", which the passage always begins with
 *     a capital, and c2-m1-q3 embedded "call it a Society" in a sentence
 *     it made ungrammatical;
 *   - c2-m3-q3 asked about "social inequality", which Source A never
 *     discusses: its victims are the planet and future generations. It now
 *     asks about the harm an economic system does and who is made to pay;
 *   - c2-m3-q4 faulted Cobbett for "assertion rather than proof", when his
 *     proof is the four sentences this extract cuts. A model answer must not
 *     blame a writer for what an editor removed.
 * The Component 1 labels said "Original literary fiction composition", which
 * a student can read as "the original text"; they now say, as the Source A
 * labels do, that the extracts were specially written.
 * Component 2 Questions 1 of Mocks 2 and 3 asked for four points for five
 * marks, and Component 1 Questions 1 of Mocks 1 and 2 pointed to line numbers
 * the site does not print; they now ask for five points and name paragraphs.
 * The stray quotation mark closing the third Component 1 extract is removed.
 *
 * NOT FIXED: the question pattern here (four reading questions of 5, 10, 10
 * and 15 marks, one writing task of 40) is not the one the site's own Eduqas
 * mark schemes give (src/lib/marking/mark-schemes/eduqas-lang.ts), nor is
 * the Component 2 writing task, one of 40 marks split 20, 12 and 8, where
 * that scheme has two tasks of 20, each marked 12 and 8. The Component 1
 * extracts are specially written, not twentieth-century fiction, and their
 * labels say so.
 */

// QA 2026-08-23: repointed from the aggregator to the type-only leaf so this
// lazy loader source cannot reach `src/data/mock-exams.ts` (which statically
// imports every bank) if the `type` keyword is ever dropped here.
import type { MockExamPaper } from './mock-exams/types'

// ─── Component 1 Literary Extracts ────────────────────────────────────────────

const WJEC_C1_EXTRACT_1 = `She stood in the doorway of the village shop, watching the rain come down in sheets across the empty high street. The shop bell had stopped ringing an hour ago. No one came to the village anymore. They all went to the supermarket out on the ring road, where the car park was vast and empty under fluorescent lights, where everything was organised into categories that had nothing to do with living.

She had run the shop for forty years. Her hands knew every corner of it - the exact temperature the wine rack held in summer, the way the newspapers curled at the edges on humid days, the precise spot where the floorboards creaked. She knew her customers by their purchases: Mr Walsh bought instant coffee and the racing pages; Mrs Chen came for vegetables at 4 p.m. every Thursday; old James bought milk and solitude.

Now Mr Walsh shopped online. Mrs Chen had moved closer to the hospital where her daughter worked. James had died in the spring, alone in the flat above the ironmonger's that had been closed for three years.

The rain intensified. A channel ran down the middle of the high street, carrying with it sweet wrappers, leaves, the detritus of a world that was moving on without her. She thought about the paperwork in her office - the business plan she hadn't updated, the accounts she hadn't looked at in months, the letter from the bank marked "URGENT" that she had placed, unopened, under a pile of old magazines.

Behind her, the till stood silent. The shelves held stock that nobody wanted. In the back room, cardboard boxes were slowly collapsing under the weight of their own emptiness.

She closed the door and locked it. Then, more deliberately, she turned the "Open" sign to "Closed." The sign swung in the wind, caught between two certainties: one word, then the other, then the first again.`

const WJEC_C1_EXTRACT_1_SOURCE =
  'Specially written for The English Hub (not a published text, and not a twentieth-century one)'

const WJEC_C1_EXTRACT_2 = `The telegram arrived on a Tuesday. Henry was in the garden, turning the soil where the peas had been, when Mrs Webb from next door called over the fence. She held it at arm's length, as though the envelope itself carried contagion.

"It's come," she said. Her face had the particular expression of someone bearing bad news, a peculiar combination of sympathy and the faint thrill of importance. "They sent me to tell you. They couldn't deliver it direct because..." She paused. Because of the condition of the cottage. Because it was clear nobody was home. Because a telegram from the War Office required someone more official than a postman.

Henry's hands were still in the soil. He could feel it under his fingernails, dark and cool. He did not move them.

"Your boy," Mrs Webb said, and for a moment he thought she meant James, who was eighteen and in the kitchen making jam. Then he understood.

The soil fell from his hands onto his shoes. He looked down at it, at the small dark crescents under each nail, as though they might tell him something. Behind Mrs Webb, he could see his own garden continuing - the row of beans he had planted in April, the apple tree that had lost its blossom early this year.

"I'm very sorry," Mrs Webb said. In her voice was the careful grief of the borrowed, the sympathy one offers for a tragedy that has not touched one personally but which one has decided to rehearse, just in case.

Henry's hands were shaking now. He pressed them into the pockets of his trousers.

"Which one?" he asked. He meant: which boy? There were three of them, all grown or nearly grown, all in uniform, all somewhere in France or North Africa or the Far East, depending on which letter you read.

"I don't know," Mrs Webb said. "It's all there in the telegram. I haven't opened it."

Henry took the envelope. It was thin and pale, almost insubstantial. He could feel the words pressing against the paper from the inside, as though trying to escape.`

const WJEC_C1_EXTRACT_2_SOURCE =
  'Specially written for The English Hub (not a published text, and not a twentieth-century one)'

const WJEC_C1_EXTRACT_3 = `The flat was wrong in ways that only became apparent in morning light. The walls were too close together. The smell - old cooking oil, something sweet underneath, mould perhaps - seemed to intensify with the hours. When Sarah first moved in, she had thought it was temporary. She would stay six months. Two years had passed.

Her job at the call centre was the kind of work that made you grateful for silence. Eight hours of speaking to people you couldn't see, about problems they had chosen not to solve on their own. At six o'clock, she walked to the bus stop on legs that had forgotten how to feel excitement, and she went home to the flat that smelled like failure and proximity.

The window of her bedroom overlooked an alley between two office buildings. In the alley, pigeons fought over fragments of other people's lunches. They were vicious, these pigeons, tearing at scraps with a kind of desperate energy that Sarah recognised. She had seen that energy in the faces of the people on the phone, and in her own reflection when she allowed herself to look.

One evening, returning from work, she found a pigeon in her bedroom. It had come through the window, which she kept slightly open even in winter, seeking the only air in the flat that wasn't recycled through the lungs of the building itself. The bird flew from corner to corner, knocking against the glass, its body a small projectile of panic.

She watched it for a long time. She did not attempt to help it find the window, did not open the door to let it escape, did not move at all. Instead, she sat on the edge of her bed and watched the bird's desperation with a feeling that was not quite pity but not quite indifference either. It was something in between - a recognition, perhaps, or a kinship.`

const WJEC_C1_EXTRACT_3_SOURCE =
  'Specially written for The English Hub (not a published text, and not a twentieth-century one)'

// ─── Component 2 Non-Fiction Extracts ─────────────────────────────────────────

const WJEC_C2_SOURCE_A_1 = `The algorithm does not sleep. It works while we sleep, while we eat, while we make love and fight and forget why we started fighting in the first place. It watches us with the patient, unblinking attention of a creature that has all the time in the world and no emotional investment in what it sees. We think of the internet as a space of freedom, of infinite possibility, but we have created something far more controlling than any propaganda machine of the twentieth century could have dreamed of: a system that does not need to convince us of falsehood, only to ensure that we never encounter truth in the first place.

The social media platforms that mediate our public discourse employ algorithms that optimise for engagement. This might sound harmless - neutral, even - but engagement has nothing to do with truth. The algorithm cannot distinguish between a fact and a lie, but it can measure which one makes people feel more intensely. And what makes people feel most intensely? Outrage. Fear. Confirmation of their existing prejudices. The algorithm feeds us these things, not out of malice, but out of mathematical indifference. It is simply optimising for its profit model.`

const WJEC_C2_SOURCE_A_1_REF =
  'Specially written for The English Hub (not a published text): an article on social media algorithms'

// Gutenberg #13534, the middle of one paragraph and the start of the next,
// cut by script. KNOWN SLIP, LEFT AS THE EDITION HAS IT: Gutenberg's text has
// no question mark after "Where is thy brother", which every printing checked
// has (Boston and New York 1843, New York 1848, Chicago 1890, on
// archive.org). It is not restored by hand because
// scripts/check-mock-exam-extracts.mjs holds each extract to the edition its
// label names, mark for mark, and has no way to accept a verified
// correction; a hand-restored mark fails it. Restore it only together with
// such a mechanism.
const WJEC_C2_SOURCE_B_1 = `We call it a Society; and go about professing openly the totalest separation, isolation. Our life is not a mutual helpfulness; but rather, cloaked under due laws-of-war, named 'fair competition' and so forth, it is a mutual hostility. We have profoundly forgotten everywhere that Cash-payment is not the sole relation of human beings; we think, nothing doubting, that it absolves and liquidates all engagements of man. "My starving workers?" answers the rich Mill-owner: "Did not I hire them fairly in the market? Did I not pay them, to the last sixpence, the sum covenanted for? What have I to do with them more?"--Verily Mammon-worship is a melancholy creed. When Cain, for his own behoof, had killed Abel, and was questioned, "Where is thy brother" he too made answer, "Am I my brother's keeper?" Did I not pay my brother his wages, the thing he had merited from me?

O sumptuous Merchant-Prince, illustrious game-preserving Duke, is there no way of 'killing' thy brother but Cain's rude way! 'A good man by the very look of him, by his very presence with us as a fellow wayfarer in this Life-pilgrimage, promises so much:' woe to him if he forget all such promises, if he never know that they were given! To a deadened soul, seared with the brute Idolatry of Sense, to whom going to Hell is equivalent to not making money, all 'promises,' and moral duties, that cannot be pleaded for in Courts of Requests, address themselves in vain. Money he can be ordered to pay, but nothing more.`

const WJEC_C2_SOURCE_B_1_REF =
  'Thomas Carlyle, Past and Present (1843), book III, chapter II, "Gospel of Mammonism" (text of a later reprint, Project Gutenberg #13534; Carlyle\'s italics are not shown)'

const WJEC_C2_SOURCE_A_2 = `The average teenager now spends seven to nine hours per day consuming some form of media. For many, this consumption happens simultaneously: scrolling TikTok while watching Netflix while texting friends while doing homework. We call this "multitasking," but the neuroscience suggests something different is happening. The brain is not multitasking. Rather, it is rapidly switching between tasks, and each switch incurs a cognitive cost. What we experience as seamless is, neurologically, profoundly fragmented.

The consequences are significant. A 2023 study found that students who use social media while studying score on average 14% lower on assessments than those who do not. But the problem goes deeper than academic performance. Young people report unprecedented levels of anxiety and depression. They report feeling "fake," performing curated versions of themselves for an audience that may include thousands of strangers. They report a constant, underlying sense that they are not enough: not pretty enough, not funny enough, not interesting enough.`

const WJEC_C2_SOURCE_A_2_REF =
  'Specially written for The English Hub (not a published text): an article on young people and media. Its figures, and the study it mentions, are for practice and are not sourced'

// Gutenberg #38923, the end of section 23 and section 24, cut by script.
const WJEC_C2_SOURCE_B_2 = `And if we grow impatient under it, and seek to recover the mental energy by more quickly repeated and brighter novelty, it is all over with our enjoyment. There is no cure for this evil, any more than for the weariness of the imagination already described, but in patience and rest: if we try to obtain perpetual change, change itself will become monotonous; and then we are reduced to that old despair, "If water chokes, what will you drink after it?" And the two points of practical wisdom in this matter are, first, to be content with as little novelty as possible at a time; and, secondly, to preserve, as much as possible in the world, the sources of novelty.

I say, first, to be content with as little change as possible. If the attention is awake, and the feelings in proper train, a turn of a country road, with a cottage beside it, which we have not seen before, is as much as we need for refreshment; if we hurry past it, and take two cottages at a time, it is already too much: hence, to any person who has all his senses about him, a quiet walk along not more than ten or twelve miles of road a day, is the most amusing of all travelling; and all travelling becomes dull in exact proportion to its rapidity. Going by railroad I do not consider as travelling at all; it is merely "being sent" to a place, and very little different from becoming a parcel; the next step to it would of course be telegraphic transport [...] A man who really loves travelling would as soon consent to pack a day of such happiness into an hour of railroad, as one who loved eating would agree, if it were possible, to concentrate his dinner into a pill.`

const WJEC_C2_SOURCE_B_2_REF =
  'John Ruskin, Modern Painters, volume III (1856), part IV, chapter XVII, "The Moral of Landscape", from sections 23 and 24 (Project Gutenberg #38923). Ruskin has just quoted Wordsworth on "custom", the familiarity that dulls the delight of new sights'

const WJEC_C2_SOURCE_A_3 = `The climate crisis is not a future problem. It is happening now. We are not preparing for a catastrophe that might occur in fifty years. We are living through the early stages of a catastrophe that is already underway. The glaciers are melting. The oceans are warming. Extreme weather events - droughts, floods, hurricanes of unprecedented intensity - are becoming routine. And yet, in the midst of this crisis, we are paralysed by inaction.

The reasons for this paralysis are complex, but one factor stands out: we have constructed an economic system in which the price of a product bears no relationship to the true cost of its production. A cheap plastic bottle costs two pounds in the shop, but the true cost - measured in the carbon released in its manufacture, the energy required to transport it, the environmental damage caused by its disposal - is far higher. We have externalised the costs onto the planet and onto future generations. And because these costs do not appear on a price tag, they do not appear in our moral calculus.`

const WJEC_C2_SOURCE_A_3_REF =
  'Specially written for The English Hub (not a published text): an article on the climate crisis and the price of goods'

// Gutenberg #34238, one paragraph with four sentences cut, cut by script.
const WJEC_C2_SOURCE_B_3 = `Everything about this farmhouse was formerly the scene of plain manners and plentiful living. Oak clothes-chests, oak bedsteads, oak chests of drawers, and oak tables to eat on, long, strong, and well supplied with joint stools. Some of the things were many hundreds of years old. But all appeared to be in a state of decay and nearly of disuse. There appeared to have been hardly any family in that house, where formerly there were, in all probability, from ten to fifteen men, boys, and maids: and, which was the worst of all, there was a parlour. Aye, and a carpet and bell-pull too! One end of the front of this once plain and substantial house had been moulded into a "parlour;" and there was the mahogany table, and the fine chairs, and the fine glass, and all as bare-faced upstart as any stock-jobber in the kingdom can boast of. And there were the decanters, the glasses, the "dinner-set" of crockery-ware, and all just in the true stock-jobber style. And I dare say it has been 'Squire Charington and the Miss Charington's; and not plain Master Charington, and his son Hodge, and his daughter Betty Charington, all of whom this accursed system has, in all likelihood, transmuted into a species of mock gentlefolks, while it has ground the labourers down into real slaves. Why do not farmers now feed and lodge their work-people, as they did formerly? Because they cannot keep them upon so little as they give them in wages. This is the real cause of the change. There needs no more to prove that the lot of the working classes has become worse than it formerly was. This fact alone is quite sufficient to settle this point. [...] Judge, then, of the change that has taken place in the condition of these labourers! And be astonished, if you can, at the pauperism and the crimes that now disgrace this once happy and moral England.`

const WJEC_C2_SOURCE_B_3_REF =
  "William Cobbett, Rural Rides (1830), from the entry written at Reigate on 20 October 1825, after Cobbett had been to the sale of a farmer's goods (T. Nelson and Sons edition, Project Gutenberg #34238; Cobbett's italics are not shown)"

// ─── Mock Exam Papers ─────────────────────────────────────────────────────────

export const wjecMockExams: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // WJEC COMPONENT 1 - MOCK 1
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c1-mock-1',
    board: 'WJEC',
    paperNumber: 1,
    title: 'Component 1: 20th Century Literature Reading and Creative Prose Writing',
    subtitle: 'English Language C700QS/1 - Mock Exam 1',
    code: 'C700QS/1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c1-m1-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${WJEC_C1_EXTRACT_1_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c1-m1-q1',
            questionNumber: 1,
            questionText:
              'Read the first two paragraphs of the extract. List five things you learn about the shop and its owner from these paragraphs.',
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: WJEC_C1_EXTRACT_1,
            extractSource: WJEC_C1_EXTRACT_1_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                "1. The shop is in a village, on the high street. 2. Its customers now go to the supermarket on the ring road instead. 3. The owner is a woman who has run it for forty years. 4. She knows every corner of it, down to where the floorboards creak. 5. She knows her customers by what they buy, such as Mr Walsh's instant coffee and racing pages.",
            },
            markScheme: ['1 mark per valid point, maximum 5'],
          },
          {
            id: 'wjec-c1-m1-q2',
            questionNumber: 2,
            questionText:
              "How does the writer create a sense of isolation and loss in this extract?\n\nYou should comment on:\n- what is described and what is missing\n- the writer's use of language and structure\n- the effects on the reader.\n\nYou must refer to the text to support your answer.",
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: WJEC_C1_EXTRACT_1,
            extractSource: WJEC_C1_EXTRACT_1_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The writer creates isolation by showing the empty high street and the customers who have left. Words like "detritus" and "empty" emphasise loss. The list of what people used to do - "Mr Walsh bought," "Mrs Chen came" - shows what is gone. The rain intensifies the lonely mood. The sign swinging between "Open" and "Closed" symbolises her uncertainty.',
              'Grade 6-7':
                'The writer constructs loss through systematic negation. Customers are first defined by their routines, in a habitual past tense ("Mr Walsh bought," "Mrs Chen came"), and then by what they no longer do: "Now Mr Walsh shopped online," "Mrs Chen had moved," "James had died." The single word "Now" divides the paragraph that remembers from the paragraph that records each ending. Her sensory knowledge ("hands knew every corner") becomes useless in a world that has moved to the supermarket, where everything is sorted "into categories that had nothing to do with living." The rain becomes an instrument of erasure, carrying "the detritus of a world that was moving on without her." The structure then turns inward to the machinery of closure: accounts she has not looked at, a letter from the bank placed "unopened, under a pile of old magazines," and, in the back room, boxes "slowly collapsing under the weight of their own emptiness." The final image of the sign "caught between two certainties" reverses the apparent binary: open and closed are not a hope and a fear but two certainties, and the sign swinging from one to the other suggests a woman who has made her decision and cannot yet leave it.',
            },
            markScheme: [
              'Analyses language and structural techniques',
              'Comments on what is present and absent',
              'Considers effects on the reader',
              'Uses textual references to support analysis',
              'Top band: perceptive, detailed analysis',
            ],
          },
          {
            id: 'wjec-c1-m1-q3',
            questionNumber: 3,
            questionText:
              "What impressions do you get of the shop owner's character and feelings throughout the extract?\n\nYou must refer to the text to support your answer.",
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: WJEC_C1_EXTRACT_1,
            extractSource: WJEC_C1_EXTRACT_1_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The shop owner seems sad and tired. She loves her shop and knows it well, but she is helpless to save it. She avoids dealing with her problems - she has not opened an urgent letter from the bank. She seems passive and defeated by the end, just accepting that she must close. She is isolated because the community has left her.',
              'Grade 6-7':
                'The shop owner is characterised through the tension between intimate knowledge and powerlessness. She possesses encyclopaedic knowledge of her space ("exact temperature," "precise spot") and of her customers\' habits, from Mr Walsh\'s "instant coffee and the racing pages" to old James\'s "milk and solitude", a phrase that lets her notice a loneliness nobody else would. This knowledge has been rendered obsolete by economic forces beyond her control. Her emotional state is one of compartmentalisation and avoidance: the letter marked "URGENT" was placed "unopened, under a pile of old magazines", which is not negligence but psychological defence. The rain, which she watches rather than acts upon, becomes an external correlative for her internal paralysis. Yet there is also a kind of dignity in her final action: she does not fight the inevitable. The adverb in "more deliberately" marks the turning of the sign as a choice, which suggests acceptance rather than despair. She is not a tragic figure but a modest, unseen one, like her own customers.',
            },
            markScheme: [
              'Analyses character with textual support',
              'Comments on her feelings and motivations',
              'Considers what is implied as well as stated',
              'Top band: perceptive, thoughtful interpretation',
            ],
          },
          {
            id: 'wjec-c1-m1-q4',
            questionNumber: 4,
            questionText:
              '"The writer successfully uses small details to create a powerful sense of loss."\n\nTo what extent do you agree? You should consider the writer\'s use of language and structure in your response.',
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'evaluation',
            extract: WJEC_C1_EXTRACT_1,
            extractSource: WJEC_C1_EXTRACT_1_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'I strongly agree. Small details like the way the papers curl in humidity and the exact spot where the floorboards creak show how well she knows her shop. These details make the loss more powerful because we understand how much the shop meant to her. The silent till and the collapsing boxes are small details but heartbreaking. The sign swinging is a small detail that summarises the whole thing.',
              'Grade 6-7':
                'I entirely agree, and I would argue that the small details are not supplementary but structural. The extract\'s power depends on accumulation: each specific sensory memory ("exact temperature," "newspapers curled") functions as a small theft from her. The small details create the framework through which we measure absence. When Mr Walsh is reduced to "instant coffee and the racing pages," the specificity makes his departure more poignant than abstract reference to lost customers would. The unopened letter, the sweet wrappers carried down the street by the rain, the cardboard boxes - these are the objects that reveal the economic and social forces that have rendered her world obsolete. The writer names those forces only briefly, in the supermarket "out on the ring road" and in Mr Walsh shopping online, and never explains them. Instead, the extract shows their effects through things: small, concrete, irrefutable evidence of loss.',
            },
            markScheme: [
              'Evaluates with a clear, sustained personal response',
              'Analyses specific techniques and their effects',
              'Uses embedded quotations',
              'Top band: evaluative, critical, well-reasoned',
            ],
          },
        ],
      },
      {
        id: 'wjec-c1-m1-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 45 minutes on this section. You are reminded of the need to plan your answer.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'wjec-c1-m1-q5',
            questionNumber: 5,
            questionText:
              'Choose ONE of the following titles for your creative prose writing:\n\nEither:\n(a) Write about a place that has changed.\nYour response could be real or imagined.\n\nOr:\n(b) Endings.\nWrite a short piece of prose with this title.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear piece of creative prose with: recognisable structure; use of descriptive techniques; varied vocabulary; generally accurate SPaG.',
              'Grade 6-7':
                'A compelling piece with: controlled atmosphere; crafted imagery; structural sophistication; consistent SPaG accuracy.',
              'Grade 8-9':
                'An assured, distinctive piece with: original voice; precise imagery; masterful control of pace and structure; technical virtuosity.',
            },
            markScheme: [
              'Content & Organisation (24 marks): Communication, voice, structure',
              'Technical Accuracy (16 marks): Sentence demarcation, punctuation, spelling, sentence variety',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WJEC COMPONENT 1 - MOCK 2
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c1-mock-2',
    board: 'WJEC',
    paperNumber: 1,
    title: 'Component 1: 20th Century Literature Reading and Creative Prose Writing',
    subtitle: 'English Language C700QS/1 - Mock Exam 2',
    code: 'C700QS/1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c1-m2-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${WJEC_C1_EXTRACT_2_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c1-m2-q1',
            questionNumber: 1,
            questionText:
              'Read the first five paragraphs of the extract, up to "lost its blossom early this year". List five things you learn about Henry and the situation from these paragraphs.',
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: WJEC_C1_EXTRACT_2,
            extractSource: WJEC_C1_EXTRACT_2_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                '1. A telegram has arrived from the War Office. 2. Henry was working in his garden. 3. His neighbour, Mrs Webb, brought the telegram. 4. The news is about one of his sons. 5. Henry is shocked: the soil falls from his hands.',
            },
            markScheme: ['1 mark per valid point, maximum 5'],
          },
          {
            id: 'wjec-c1-m2-q2',
            questionNumber: 2,
            questionText:
              "How does the writer create a sense of dread and emotional impact in this extract?\n\nYou should comment on:\n- the use of physical details\n- the writer's control of pace and structure\n- the effects on the reader.\n\nYou must refer to the text to support your answer.",
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: WJEC_C1_EXTRACT_2,
            extractSource: WJEC_C1_EXTRACT_2_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The writer builds dread through Mrs Webb\'s hesitation and careful language. Physical details like the soil under his fingernails and his shaking hands show Henry\'s emotional response. The slow revelation - first the telegram, then what it contains - creates suspense. The telegram envelope is described as "thin and pale" and Henry can feel the words "trying to escape," which emphasises the terrible news inside.',
              'Grade 6-7':
                'The writer constructs emotional impact through sustained physical anchoring. Henry\'s hands in soil function as a temporal anchor to a moment before knowledge. When Mrs Webb speaks, the soil "fell from his hands" - a gesture that signals the collapse of the normal world. The repeated attention to hands (soil under nails, pressing into pockets, receiving the envelope) tracks his emotional disintegration through bodily response. Mrs Webb\'s language is clinically careful - "I\'m very sorry," "It\'s all there" - which creates an obscene gap between the magnitude of what is happening and the adequacy of language to contain it. The pace accelerates through short, fragmented sentences as Henry\'s comprehension dawns. The final image of words "pressing against the paper from the inside, as though trying to escape" is masterful: it externalises Henry\'s internal psychological state. The unopened envelope is a barrier between him and a knowledge he already possesses but has not yet read.',
            },
            markScheme: [
              'Analyses language and structural techniques',
              'Comments on physical details and their effects',
              'Considers how pace builds emotional impact',
              'Uses textual references to support analysis',
              'Top band: perceptive analysis of technique and effect',
            ],
          },
          {
            id: 'wjec-c1-m2-q3',
            questionNumber: 3,
            questionText:
              'What impressions do you get of Mrs Webb and how she handles this situation?\n\nYou must refer to the text to support your answer.',
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: WJEC_C1_EXTRACT_2,
            extractSource: WJEC_C1_EXTRACT_2_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'Mrs Webb is sympathetic but also somewhat pleased to have important news to deliver. She holds the telegram at arm\'s length as if it might be dangerous. She uses careful language like "I\'m very sorry" but the narrator says her sympathy is "borrowed" - she is rehearsing grief for something that hasn\'t touched her personally. She doesn\'t open the telegram herself, keeping some distance from what it contains.',
              'Grade 6-7':
                'Mrs Webb is characterised as simultaneously well-meaning and morally deficient. The "faint thrill of importance" reveals how historical catastrophe becomes social currency. She holds the envelope at arm\'s length, both literally and emotionally distancing herself from its contents. The narrator\'s assessment - "the careful grief of the borrowed, the sympathy one offers for a tragedy that has not touched one personally but which one has decided to rehearse" - is devastating. Mrs Webb\'s language demonstrates this performance: "I\'m very sorry" is the appropriate phrase, delivered with appropriate intonation. But it is precisely this adequacy that condemns her. She can say everything grief requires without feeling it. She has not opened the telegram, maintaining plausible deniability about the specifics. Her role is to deliver news and witness the moment, but not to truly enter into Henry\'s suffering.',
            },
            markScheme: [
              'Analyses character with textual support',
              'Comments on motivations and behaviour',
              'Recognises what is implied rather than stated',
              'Top band: sophisticated character analysis',
            ],
          },
          {
            id: 'wjec-c1-m2-q4',
            questionNumber: 4,
            questionText:
              '"The writer powerfully conveys Henry\'s emotional state through physical detail rather than direct statements about his feelings."\n\nTo what extent do you agree? Support your answer with references to the text.',
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'evaluation',
            extract: WJEC_C1_EXTRACT_2,
            extractSource: WJEC_C1_EXTRACT_2_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'I agree completely. The writer doesn\'t tell us directly that Henry is devastated. Instead, we see the soil falling from his hands, his hands shaking, and the way he stares down at the soil on his shoes. These physical details are much more powerful than if the writer had just said "Henry was heartbroken." By showing his hands and body, we feel his shock more intensely.',
              'Grade 6-7':
                'I entirely agree, and I would argue this is essential to the extract\'s emotional integrity. Direct statements about Henry\'s inner life would constitute literary interpretation, imposing meaning onto his experience. By showing mainly his physical responses - soil falling, hands shaking, hands pressed into his pockets - the writer allows the reader to participate in Henry\'s own confusion. The one direct statement, "Then he understood.", is three words long and names no feeling at all. Even then he does not know which of his sons the telegram concerns ("Which one?"), so he is still in the moment before full knowledge, and the physical details hold him there. The envelope with words "trying to escape" suggests that Henry\'s emotional life is not yet available to him. The extract ends before he reads it, which is structurally crucial: we are denied the narrative satisfaction of knowing what the telegram says, just as Henry is denied the narrative of linear time - the moment before knowledge and the moment after are compressed together.',
            },
            markScheme: [
              'Evaluates with clear personal response',
              'Supports evaluation with specific techniques',
              'Considers why this method is effective',
              'Top band: evaluative, perceptive, well-reasoned',
            ],
          },
        ],
      },
      {
        id: 'wjec-c1-m2-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 45 minutes on this section. You are reminded of the need to plan your answer.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'wjec-c1-m2-q5',
            questionNumber: 5,
            questionText:
              'Choose ONE of the following titles for your creative prose writing:\n\nEither:\n(a) Write about a moment that changed everything.\nYour response could be real or imagined.\n\nOr:\n(b) The Messenger.\nWrite a short piece of prose with this title.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear piece of creative prose with: recognisable narrative structure; effective descriptions; varied vocabulary; mostly accurate SPaG.',
              'Grade 6-7':
                'A well-constructed piece with: engaging voice; vivid imagery; controlled structure; consistent accuracy.',
              'Grade 8-9':
                'A sophisticated, original piece with: distinctive voice; precise language; complex structure; technical excellence.',
            },
            markScheme: [
              'Content & Organisation (24 marks): Narrative drive, voice, descriptive technique',
              'Technical Accuracy (16 marks): Sentence control, punctuation, spelling, vocabulary',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WJEC COMPONENT 1 - MOCK 3
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c1-mock-3',
    board: 'WJEC',
    paperNumber: 1,
    title: 'Component 1: 20th Century Literature Reading and Creative Prose Writing',
    subtitle: 'English Language C700QS/1 - Mock Exam 3',
    code: 'C700QS/1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c1-m3-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${WJEC_C1_EXTRACT_3_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c1-m3-q1',
            questionNumber: 1,
            questionText:
              'Read the whole extract. List five things you learn about Sarah and her life from the text.',
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: WJEC_C1_EXTRACT_3,
            extractSource: WJEC_C1_EXTRACT_3_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                '1. She lives in a flat that she dislikes. 2. She works at a call centre. 3. She has been there for two years. 4. The flat smells bad. 5. Her bedroom window overlooks an alley where pigeons fight over scraps.',
            },
            markScheme: ['1 mark per valid point, maximum 5'],
          },
          {
            id: 'wjec-c1-m3-q2',
            questionNumber: 2,
            questionText:
              "How does the writer create a sense of alienation and dissatisfaction in this extract?\n\nYou should comment on:\n- what the writing tells us about Sarah's environment\n- the writer's use of language and imagery\n- the effects on the reader.\n\nYou must refer to the text to support your answer.",
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: WJEC_C1_EXTRACT_3,
            extractSource: WJEC_C1_EXTRACT_3_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The writer describes the flat as "wrong" with bad smells. Sarah\'s job involves speaking to people she can\'t see, which isolates her further. The flat window overlooks only an alley with fighting pigeons, which is a bleak view. The language throughout is negative - "failure," "desperation." The pigeon trapped in her room becomes a symbol for how trapped Sarah feels.',
              'Grade 6-7':
                'The writer constructs alienation through imagery of confinement and stale air. The walls are "too close together," and the air is "recycled through the lungs of the building itself" - language that makes the architecture itself into a living organism, but one pathologically diseased. Sarah\'s work is fundamentally abstracted from human presence ("people you couldn\'t see"), and her home offers no refuge from this abstraction. The alley becomes an external correlative for her psychological state: the pigeons\' "desperate energy" is energy without purpose. The pigeon in her bedroom is the extract\'s central image: it is a living creature in a space it should not occupy, just as Sarah exists in a life she should not inhabit. Crucially, the writer does not allow her to help the pigeon. This refusal creates a moment of profound moral and emotional paralysis. The feeling "not quite pity but not quite indifference" is precisely the emotional state that defines modern alienation: she recognises kinship but cannot act on it.',
            },
            markScheme: [
              'Analyses language and imagery',
              "Comments on Sarah's environment and its effects",
              'Considers the symbolic function of the pigeon',
              'Uses textual evidence effectively',
              'Top band: perceptive analysis of alienation theme',
            ],
          },
          {
            id: 'wjec-c1-m3-q3',
            questionNumber: 3,
            questionText:
              "What can you infer about Sarah's character and state of mind from her response to the pigeon in her bedroom?\n\nYou must refer to the text to support your answer.",
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: WJEC_C1_EXTRACT_3,
            extractSource: WJEC_C1_EXTRACT_3_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                "Sarah's inaction when the pigeon is in her room shows she is depressed or emotionally numb. She doesn't help the bird escape, which suggests she has given up on helping anything - maybe even herself. She seems to see herself in the pigeon's desperation. She is passive and perhaps hopeless about change.",
              'Grade 6-7':
                'Sarah\'s passivity is not merely depression but a complex form of self-recognition. Her refusal to intervene is not a failure of compassion but a moment of terrible clarity. She sees the pigeon\'s desperation as belonging to a category of experience she now inhabits - an existence that is always trying to escape something but lacks the resources or clarity to do so. Her emotional response is "not quite pity but not quite indifference" because both of these would require some form of action. Indifference would suggest disconnection; pity would suggest the capacity to help. What she feels instead is kinship - a recognition that the pigeon and she are both subject to forces larger than individual agency. Her immobility in this moment is not character failure but epistemological rupture. She understands that the world is not amenable to her intervention.',
            },
            markScheme: [
              'Infers character from action and inaction',
              'Considers psychological state',
              'Recognises significance of what is not done',
              'Top band: insightful character analysis',
            ],
          },
          {
            id: 'wjec-c1-m3-q4',
            questionNumber: 4,
            questionText:
              '"The writer uses the pigeon as a symbol to comment on modern life and human existence."\n\nTo what extent do you agree? Support your evaluation with evidence from the text.',
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'evaluation',
            extract: WJEC_C1_EXTRACT_3,
            extractSource: WJEC_C1_EXTRACT_3_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                "I agree completely. The pigeon is clearly meant to represent Sarah's own situation. It is trapped and panicking, just like Sarah is trapped in her flat and her life. The fact that she doesn't help it shows that she feels helpless to change her own situation. The symbolism is very effective because it makes abstract unhappiness concrete and visible.",
              'Grade 6-7':
                'I strongly agree. The pigeon functions as a symbolic nexus, but in a way that complicates rather than resolves Sarah\'s situation. It enters the flat "seeking the only air in the flat that wasn\'t recycled" - an image that captures the staleness of the life Sarah leads. The pigeons\' "desperate energy" is one Sarah recognises in "the people on the phone" and in her own reflection: energy without direction, desperation without hope. But the symbolism is not reductive. The extract doesn\'t ask us to see the pigeon "as" Sarah; rather, it suggests that a certain category of modern existence - characterised by spatial confinement, recycled experience, the absence of choice - affects multiple forms of consciousness. The pigeon is not a metaphor for Sarah but a fellow creature in a world that has stopped making sense.',
            },
            markScheme: [
              'Evaluates symbolic function with evidence',
              'Supports judgment with textual analysis',
              'Considers complexity of symbolism',
              'Top band: evaluative, thoughtful, well-supported',
            ],
          },
        ],
      },
      {
        id: 'wjec-c1-m3-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 45 minutes on this section. You are reminded of the need to plan your answer.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'wjec-c1-m3-q5',
            questionNumber: 5,
            questionText:
              'Choose ONE of the following titles for your creative prose writing:\n\nEither:\n(a) Write about a moment of recognition or realisation.\nYour response could be real or imagined.\n\nOr:\n(b) Trapped.\nWrite a short piece of prose with this title.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear, focused piece of prose with: coherent narrative structure; descriptive language; varied vocabulary; generally accurate SPaG.',
              'Grade 6-7':
                'A compelling piece with: controlled voice; sophisticated imagery; effective structure; consistent technical accuracy.',
              'Grade 8-9':
                'An assured, original piece with: distinctive authorial voice; precise, vivid language; masterful structural control; technical excellence.',
            },
            markScheme: [
              'Content & Organisation (24 marks): Communication of idea/experience, voice, structure',
              'Technical Accuracy (16 marks): Sentence control, spelling, punctuation, vocabulary',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WJEC COMPONENT 2 - MOCK 1
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c2-mock-1',
    board: 'WJEC',
    paperNumber: 2,
    title: 'Component 2: 19th and 21st Century Non-Fiction Reading and Transactional Writing',
    subtitle: 'English Language C700QS/2 - Mock Exam 1',
    code: 'C700QS/2',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c2-m1-reading',
        title: 'Section A: Reading',
        description:
          'Read both source texts carefully. Then answer all the questions in this section.\n\nGlossary for Source B: totalest - most complete; Verily - truly; Mammon-worship - the worship of money as if it were a god (Mammon is a Bible word for riches); laws-of-war - the rules of warfare (Carlyle means that "fair competition" is war with rules); Cash-payment - payment in money; liquidates all engagements - settles every obligation, like paying off a debt; covenanted - agreed in a contract; behoof - benefit; Cain and Abel - in the Bible, Cain kills his brother Abel, and when asked where Abel is, replies "Am I my brother\'s keeper?"; game-preserving - keeping wild birds and animals on an estate for the owner to shoot; wayfarer - traveller; Idolatry of Sense - worship of what the senses enjoy; Courts of Requests - local courts that settled claims for small debts.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-m1-q1',
            questionNumber: 1,
            questionText: `Read Source A (21st century).\n\nList five points about how algorithms work or what they do, according to this text.`,
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Source A (21st Century):\n${WJEC_C2_SOURCE_A_1}\n\nSource B (19th Century):\n${WJEC_C2_SOURCE_B_1}`,
            extractSource: `Source A: ${WJEC_C2_SOURCE_A_1_REF} | Source B: ${WJEC_C2_SOURCE_B_1_REF}`,
            modelAnswers: {
              'Grade 4-5':
                '1. Algorithms work while people sleep and in their daily lives. 2. They watch people with constant attention. 3. They optimise for engagement rather than truth. 4. They measure which information makes people feel most intensely. 5. They feed people content that creates outrage and confirms their beliefs.',
            },
            markScheme: ['1 mark per valid point, maximum 5'],
          },
          {
            id: 'wjec-c2-m1-q2',
            questionNumber: 2,
            questionText:
              'How does the 21st-century writer use language to persuade the reader to be concerned about algorithms and social media?\n\nYou should comment on specific words and phrases and their effects.',
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: WJEC_C2_SOURCE_A_1,
            extractSource: WJEC_C2_SOURCE_A_1_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses scary language like "does not sleep," "unblinking," and "creature." Words like "controlling" and "propaganda" are very dramatic. The phrase "far more controlling than any propaganda machine" compares algorithms to something historically dangerous. Beginning three sentences with "The algorithm" emphasises that this is something ever-present and inescapable.',
              'Grade 6-7':
                'The writer constructs concern through carefully calibrated menace. Personifying the algorithm as something that "does not sleep" and watches with "patient, unblinking attention" turns a piece of mathematics into something like a predator. The comparison with "any propaganda machine of the twentieth century" borrows the weight of history, and then goes further: propaganda has to persuade, whereas this system "does not need to convince us of falsehood", only to ensure "that we never encounter truth in the first place". The rhetorical question "And what makes people feel most intensely?" is answered in blunt fragments, "Outrage. Fear.", which make the danger feel certain. The paradox of "mathematical indifference" is particularly effective: the algorithm has no malice, yet its effects are total. The final sentence, "It is simply optimising for its profit model", suggests that the harm is neither accidental nor a conspiracy but built into the business itself.',
            },
            markScheme: [
              'Analyses specific language techniques',
              'Comments on word-level effects and choices',
              'Considers how language creates persuasive impact',
              'Uses embedded quotations',
            ],
          },
          {
            id: 'wjec-c2-m1-q3',
            questionNumber: 3,
            questionText:
              "Now look at both texts. Compare and contrast the writers' views of what drives their societies and what it does to people.\n\nYou should compare:\n- what they think has gone wrong\n- how they present their concerns\n- the reasons they give for their views.",
            marks: 10,
            suggestedTimeMinutes: 15,
            questionType: 'comparison',
            extract: `Source A:\n${WJEC_C2_SOURCE_A_1}\n\nSource B:\n${WJEC_C2_SOURCE_B_1}`,
            extractSource: `Source A: ${WJEC_C2_SOURCE_A_1_REF} | Source B: ${WJEC_C2_SOURCE_B_1_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers think their society is run by something that does not care about people. The 21st-century writer says algorithms feed us "Outrage. Fear." because that is what earns a profit. Carlyle says people have forgotten that "Cash-payment is not the sole relation of human beings", so a rich mill-owner thinks that paying wages is all he owes his "starving workers". The 21st-century writer uses modern examples and short, punchy sentences. Carlyle uses a story from the Bible, Cain and Abel, and speaks directly to the rich ("O sumptuous Merchant-Prince"). Both blame the pursuit of money, but Carlyle blames what people have come to believe, while the modern writer blames a system that cannot care.',
              'Grade 6-7':
                'Both writers describe a society organised around money and indifferent to the people inside it, but they locate the indifference differently. For the 21st-century writer it is built into a machine: the algorithm acts "not out of malice, but out of mathematical indifference" because it is "simply optimising for its profit model". For Carlyle it is a creed people hold: society has forgotten that "Cash-payment is not the sole relation of human beings", and he lets a mill-owner condemn himself in his own words, "What have I to do with them more?" Both expose a paradox. The modern writer\'s "space of freedom" has become "something far more controlling"; what Carlyle\'s age calls "a Society" is in fact "the totalest separation, isolation". Their methods differ with their periods. The modern writer argues by explanation and short, emphatic fragments. Carlyle argues by accusation: he sets the mill-owner\'s excuse beside Cain\'s "Am I my brother\'s keeper?", turning a business defence into the words of the first murderer, and addresses the rich in mock-grand titles ("O sumptuous Merchant-Prince, illustrious game-preserving Duke"). The modern writer treats readers as users of the platforms who may not see the danger; Carlyle treats his as a society that must be shamed into remembering its duties.',
            },
            markScheme: [
              'Compares views from both texts',
              'Analyses methods of presentation',
              'Uses evidence from both sources',
              'Shows clear comparative analysis',
            ],
          },
          {
            id: 'wjec-c2-m1-q4',
            questionNumber: 4,
            questionText:
              '"Carlyle\'s 19th-century concerns are more valid than the 21st-century writer\'s concerns because they focus on human connection, which is more important than information control."\n\nTo what extent do you agree? You should refer to both texts.',
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'evaluation',
            extract: `Source A:\n${WJEC_C2_SOURCE_A_1}\n\nSource B:\n${WJEC_C2_SOURCE_B_1}`,
            extractSource: `Source A: ${WJEC_C2_SOURCE_A_1_REF} | Source B: ${WJEC_C2_SOURCE_B_1_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'I partly agree. Carlyle\'s point that people owe each other more than money still matters: the mill-owner who asks "What have I to do with them more?" has forgotten that his workers are human beings. But the 21st-century writer\'s worry about information is also important, because if we "never encounter truth", we cannot make good choices about anything, including how we treat each other. I think both concerns matter, for different reasons.',
              'Grade 6-7':
                'I would challenge the division the statement makes. Information control and human connection are not separate: the 21st-century writer argues that algorithms feed each of us whatever "makes people feel more intensely", and a public fed "Confirmation of their existing prejudices" will find it harder to connect across its differences. Nor does Carlyle deal only in feeling. His target is an economic creed, the belief that cash "absolves and liquidates all engagements of man", so that his mill-owner can ask "Did I not pay them, to the last sixpence" and believe his duty done. Both writers, in other words, describe a system that values people only for what they are worth to it. Carlyle\'s concern is not more valid because it is older, though it may prove more lasting: the phrase he quotes, "fellow wayfarer in this Life-pilgrimage", names a bond that no technology creates or removes. The 21st-century writer\'s concern is more specific to our moment, and more precise about how the harm works. Each is valid, and neither makes the other less so.',
            },
            markScheme: [
              'Evaluates both texts with personal response',
              'Supports evaluation with textual evidence',
              'Shows critical engagement with the premise',
              'Top band: nuanced, well-reasoned evaluation',
            ],
          },
        ],
      },
      {
        id: 'wjec-c2-m1-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 40 minutes on this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 40,
        questions: [
          {
            id: 'wjec-c2-m1-q5',
            questionNumber: 5,
            questionText:
              "Your school is running a digital wellbeing campaign. The headteacher has asked students to write an article for the school website about the impact of social media on young people's mental health.\n\nWrite an article for the school website persuading young people to think carefully about their social media use.\n\n(20 marks for communication and organisation / 12 marks for writing accurately / 8 marks for SPaG)",
            marks: 40,
            suggestedTimeMinutes: 40,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear article with: appropriate tone for school audience; clear position on social media; generally accurate SPaG.',
              'Grade 6-7':
                'A well-structured article with: engaging opening; persuasive techniques; consistent accuracy.',
              'Grade 8-9':
                'An outstanding article with: sophisticated voice; compelling argument; technical excellence.',
            },
            markScheme: [
              'Communication & Organisation (20 marks): Purpose, form, audience, persuasive technique',
              'Writing Accurately (12 marks): Sentence variety, vocabulary range',
              'SPaG (8 marks): Spelling, punctuation, grammar',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WJEC COMPONENT 2 - MOCK 2
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c2-mock-2',
    board: 'WJEC',
    paperNumber: 2,
    title: 'Component 2: 19th and 21st Century Non-Fiction Reading and Transactional Writing',
    subtitle: 'English Language C700QS/2 - Mock Exam 2',
    code: 'C700QS/2',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c2-m2-reading',
        title: 'Section A: Reading',
        description:
          'Read both source texts carefully. Then answer all the questions in this section.\n\nGlossary for Source B: novelty - newness, the pleasure of something not seen before; "If water chokes, what will you drink after it?" - an old proverb: when the remedy itself is what harms you, there is nothing left to try; in proper train - in the right state; railroad - railway; telegraphic transport - Ruskin imagines people sent from place to place as instantly as a telegraph message.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-m2-q1',
            questionNumber: 1,
            questionText: `Read Source A (21st century).\n\nList five things you learn about young people and their use of media, according to this text.`,
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Source A (21st Century):\n${WJEC_C2_SOURCE_A_2}\n\nSource B (19th Century):\n${WJEC_C2_SOURCE_B_2}`,
            extractSource: `Source A: ${WJEC_C2_SOURCE_A_2_REF} | Source B: ${WJEC_C2_SOURCE_B_2_REF}`,
            modelAnswers: {
              'Grade 4-5':
                '1. The average teenager spends seven to nine hours a day consuming media. 2. Many use several kinds of media at once, such as scrolling TikTok while watching Netflix. 3. Their brains are not really multitasking but switching rapidly between tasks, and each switch has a cognitive cost. 4. In one study, students who used social media while studying scored on average 14% lower on assessments. 5. Young people report high levels of anxiety and depression, and a sense that they are "not enough".',
            },
            markScheme: ['1 mark per valid point, maximum 5'],
          },
          {
            id: 'wjec-c2-m2-q2',
            questionNumber: 2,
            questionText:
              'How does the writer of Source A use evidence and language to support the argument that heavy media use harms young people?\n\nYou should comment on specific techniques and their effects.',
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: WJEC_C2_SOURCE_A_2,
            extractSource: WJEC_C2_SOURCE_A_2_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses statistics, such as "seven to nine hours per day" and a study in which students scored "14% lower", to show the size of the problem. The list "scrolling TikTok while watching Netflix while texting friends while doing homework" repeats "while" to make the reader feel how crowded a teenager\'s attention is. Words like "fragmented" and "cognitive cost" sound scientific and serious. The repetition in "not pretty enough, not funny enough, not interesting enough" makes the damage to young people\'s confidence feel personal.',
              'Grade 6-7':
                'The writer moves from measurement to meaning. The opening statistic, "seven to nine hours per day", establishes scale, and the list linked by "while" enacts the overload it describes. The writer then corrects everyday language: the word "multitasking" is set against what "the neuroscience suggests", and the short declarative "The brain is not multitasking." reads as a correction of the reader. The antithesis in "What we experience as seamless is, neurologically, profoundly fragmented" sets appearance against reality. The evidence then escalates: the study\'s "14% lower" concerns marks, but "the problem goes deeper than academic performance", and the last paragraph turns to feelings. The repeated "They report" presents these as young people\'s own testimony rather than the writer\'s opinion, and the closing tricolon, "not pretty enough, not funny enough, not interesting enough", ends on the most personal harm. A critical reader might note one weakness: the study is identified only by its year, so its finding has to be taken on trust.',
            },
            markScheme: [
              'Analyses use of evidence and statistics',
              'Comments on language techniques',
              'Considers effects of specific examples',
              'Shows understanding of how evidence supports argument',
            ],
          },
          {
            id: 'wjec-c2-m2-q3',
            questionNumber: 3,
            questionText:
              'Compare and contrast how the two writers approach the question of technology and modern life.\n\nYou should compare:\n- their main concerns and ideas\n- the tones they use\n- the assumptions they make about their readers.',
            marks: 10,
            suggestedTimeMinutes: 15,
            questionType: 'comparison',
            extract: `Source A:\n${WJEC_C2_SOURCE_A_2}\n\nSource B:\n${WJEC_C2_SOURCE_B_2}`,
            extractSource: `Source A: ${WJEC_C2_SOURCE_A_2_REF} | Source B: ${WJEC_C2_SOURCE_B_2_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers worry that modern life moves too fast for people to take things in properly. The 21st-century writer is concerned about teenagers switching between screens, which leaves their minds "fragmented". Ruskin is concerned about people who "hurry past" what they see, and about railway travel, which he says is not travelling at all but "being sent" to a place. The 21st-century writer uses a serious, scientific tone with statistics. Ruskin uses a personal and sometimes humorous tone, comparing a train journey to "becoming a parcel" and to a man who would "concentrate his dinner into a pill". The modern writer expects readers to recognise the habits described, while Ruskin writes for readers who travel and enjoy the countryside.',
              'Grade 6-7':
                'Both writers argue that speed and constant novelty damage attention, and both use a paradox to say so. The 21st-century writer\'s is that "What we experience as seamless is, neurologically, profoundly fragmented"; Ruskin\'s is that "if we try to obtain perpetual change, change itself will become monotonous". Ruskin\'s image of the traveller who would "take two cottages at a time" is close to the modern writer\'s account of a brain "rapidly switching between tasks". Their evidence differs: the modern writer cites hours of media use, "the neuroscience" and a study, while Ruskin relies on his own judgement ("I say, first") and on analogy. So do their tones. The modern writer is urgent and clinical, moving from "cognitive cost" to "anxiety and depression". Ruskin is calm, witty and sure of himself: railway travel is "very little different from becoming a parcel", and a traveller who would "pack a day of such happiness into an hour of railroad" is as absurd as a diner who would "concentrate his dinner into a pill". The modern writer diagnoses without prescribing, whereas Ruskin prescribes "patience and rest" and "a quiet walk along not more than ten or twelve miles of road a day". The modern writer assumes readers who live among screens, perhaps teenagers or their parents; Ruskin assumes leisured readers free to choose how fast they travel, and appeals to "any person who has all his senses about him".',
            },
            markScheme: [
              'Compares concerns from both texts',
              'Analyses tone and its effects',
              'Comments on implied reader/audience',
              'Uses evidence from both sources',
            ],
          },
          {
            id: 'wjec-c2-m2-q4',
            questionNumber: 4,
            questionText:
              '"Ruskin\'s personal, reflective argument is more persuasive than the statistics and research in Source A because it appeals to the reader\'s own experience."\n\nTo what extent do you agree? Support your evaluation with references to both texts.',
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'evaluation',
            extract: `Source A:\n${WJEC_C2_SOURCE_A_2}\n\nSource B:\n${WJEC_C2_SOURCE_B_2}`,
            extractSource: `Source A: ${WJEC_C2_SOURCE_A_2_REF} | Source B: ${WJEC_C2_SOURCE_B_2_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'I partly agree. Ruskin\'s examples, like "a turn of a country road, with a cottage beside it", are things readers can picture from their own lives, and his comparison with a dinner turned into "a pill" is memorable. But the statistics in Source A, like "seven to nine hours per day", are harder to argue with, because they suggest how many young people are affected. I think Ruskin makes you share his feelings, while Source A makes you believe there is a real problem.',
              'Grade 6-7':
                'I would challenge the idea that the two methods compete. Ruskin persuades through shared experience and wit: most readers have felt that "all travelling becomes dull in exact proportion to its rapidity", and the traveller who would "pack a day of such happiness into an hour of railroad" makes the opposing view look absurd rather than wrong. That is powerful, but it rests on his authority and the reader\'s agreement; a reader who enjoys fast travel has nothing to test it against. Source A offers what Ruskin cannot: figures and "the neuroscience", which claim to be true whatever the reader feels. Yet Source A also appeals to experience. The list "scrolling TikTok while watching Netflix while texting friends while doing homework" is written to be recognised, and its last paragraph turns to what young people "report" feeling. Its weakness is that its one study is identified only by its year, so its evidence must be taken on trust as much as Ruskin\'s judgement must. Ruskin is the more memorable, Source A the more testable, and Source A itself shows that the most persuasive writing combines the two.',
            },
            markScheme: [
              'Evaluates both texts with sustained response',
              'Considers different kinds of persuasive effect',
              'Uses evidence from both sources',
              'Shows critical engagement with the premise',
            ],
          },
        ],
      },
      {
        id: 'wjec-c2-m2-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 40 minutes on this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 40,
        questions: [
          {
            id: 'wjec-c2-m2-q5',
            questionNumber: 5,
            questionText:
              "A local newspaper is looking for letters from readers about technology's impact on modern life.\n\nWrite a letter to the editor about whether technology has improved or diminished the quality of modern life.\n\nYou should aim to persuade readers of your point of view.\n\n(20 marks for communication and organisation / 12 marks for writing accurately / 8 marks for SPaG)",
            marks: 40,
            suggestedTimeMinutes: 40,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear letter with: appropriate letter format; clear point of view; relevant examples; generally accurate SPaG.',
              'Grade 6-7':
                'A persuasive letter with: proper conventions; well-developed argument; sophisticated vocabulary.',
              'Grade 8-9':
                'An outstanding letter with: impeccable conventions; compelling argument; technical excellence.',
            },
            markScheme: [
              'Communication & Organisation (20 marks): Form, persuasive technique, voice, structure',
              'Writing Accurately (12 marks): Sentence variety, vocabulary',
              'SPaG (8 marks): Spelling, punctuation, grammar',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WJEC COMPONENT 2 - MOCK 3
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c2-mock-3',
    board: 'WJEC',
    paperNumber: 2,
    title: 'Component 2: 19th and 21st Century Non-Fiction Reading and Transactional Writing',
    subtitle: 'English Language C700QS/2 - Mock Exam 3',
    code: 'C700QS/2',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c2-m3-reading',
        title: 'Section A: Reading',
        description:
          "Read both source texts carefully. Then answer all the questions in this section.\n\nGlossary for Source B: joint stools - simple wooden stools made by a joiner; parlour - a private sitting room, here one where the farmer's family could sit apart from their workers; bell-pull - a cord pulled to ring for a servant; stock-jobber - a dealer in stocks and shares, for Cobbett someone grown rich on money rather than work; 'Squire - a country gentleman, a title Cobbett mocks the farmer's family for taking; Hodge, Betty - plain country names (Cobbett means the family were once ordinary farming people); transmuted - changed; work-people - farm workers; pauperism - being so poor as to depend on poor relief from the parish.",
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-m3-q1',
            questionNumber: 1,
            questionText: `Read Source A (21st century).\n\nList five things the writer says about the climate crisis and the economic system.`,
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Source A (21st Century):\n${WJEC_C2_SOURCE_A_3}\n\nSource B (19th Century):\n${WJEC_C2_SOURCE_B_3}`,
            extractSource: `Source A: ${WJEC_C2_SOURCE_A_3_REF} | Source B: ${WJEC_C2_SOURCE_B_3_REF}`,
            modelAnswers: {
              'Grade 4-5':
                '1. The climate crisis is happening now, not in the future. 2. Glaciers are melting, oceans are warming and extreme weather is becoming routine. 3. We are paralysed by inaction. 4. The price of a product bears no relationship to the true cost of making it. 5. The costs are pushed onto the planet and future generations, and because they do not appear on a price tag, they do not appear in our moral thinking.',
            },
            markScheme: ['1 mark per valid point, maximum 5'],
          },
          {
            id: 'wjec-c2-m3-q2',
            questionNumber: 2,
            questionText:
              'How does the writer of Source A use evidence, language and rhetorical techniques to support the argument about the climate crisis and the economy?\n\nYou should comment on specific techniques and their effects.',
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: WJEC_C2_SOURCE_A_3,
            extractSource: WJEC_C2_SOURCE_A_3_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses short sentences such as "It is happening now." to create urgency. The list of climate events ("The glaciers are melting. The oceans are warming.") makes the problem concrete. The example of a plastic bottle that "costs two pounds in the shop" is striking because it is something everyone has bought. Technical words like "externalised" and "moral calculus" make the argument sound expert and show that the problem lies in the system, not in bad luck.',
              'Grade 6-7':
                'The writer builds urgency by collapsing the future into the present: "The climate crisis is not a future problem. It is happening now." The parallel sentences that follow, "We are not preparing..." and "We are living through...", replace a comfortable assumption with an uncomfortable one. Short declaratives ("The glaciers are melting. The oceans are warming.") present the evidence as plain fact, and the list set between dashes, "droughts, floods, hurricanes of unprecedented intensity", widens it. The turn comes with "And yet": the problem is not that the crisis is unknown but that "we are paralysed by inaction". The plastic bottle is the most effective example, because it takes an everyday object and exposes the gap between the price paid and the true cost, itemised in a second list of carbon, energy and damage. The verb "externalised" is technical, lending the argument economic credibility, and the closing parallelism, in which costs that "do not appear on a price tag" also "do not appear in our moral calculus", suggests that the economy does not merely damage the planet but removes the damage from moral view.',
            },
            markScheme: [
              'Analyses rhetoric and persuasive techniques',
              'Comments on specific examples and their effects',
              'Considers how language creates argument',
              'Shows understanding of economic argument',
            ],
          },
          {
            id: 'wjec-c2-m3-q3',
            questionNumber: 3,
            questionText:
              'Compare and contrast how the two writers present the harm done by an economic system, and who is made to pay for it.\n\nYou should compare:\n- the problems they identify\n- their explanation for why these problems exist\n- the relationship between individuals and systems in their writing.',
            marks: 10,
            suggestedTimeMinutes: 15,
            questionType: 'comparison',
            extract: `Source A:\n${WJEC_C2_SOURCE_A_3}\n\nSource B:\n${WJEC_C2_SOURCE_B_3}`,
            extractSource: `Source A: ${WJEC_C2_SOURCE_A_3_REF} | Source B: ${WJEC_C2_SOURCE_B_3_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers blame an economic system for harm that ordinary people cannot see or control. The 21st-century writer says the price of a product "bears no relationship to the true cost", so the damage is pushed onto the planet and "future generations". Cobbett describes a farmhouse where the farmer\'s family had come to live like "mock gentlefolks", with a parlour and decanters, while the labourers have been ground "down into real slaves". The modern writer explains the problem through prices; Cobbett explains it through wages, saying farmers no longer feed their workers because they "cannot keep them upon so little as they give them in wages". Cobbett mocks the farmer\'s family but blames "this accursed system" for changing them, and the modern writer blames the system "we have constructed".',
              'Grade 6-7':
                'Both writers identify a hidden cost that someone else is made to pay. For the 21st-century writer it is environmental: the true cost of a product is "externalised" onto "the planet and onto future generations". For Cobbett it is human: the comfort of the new parlour, with its "mahogany table" and "decanters", is paid for by labourers who are no longer fed and lodged. Both explain the problem as the working of a system rather than the wickedness of individuals. The modern writer\'s system is one "we have constructed", in which a cost missing from the "price tag" goes missing from "our moral calculus". Cobbett\'s is "this accursed system", which has "transmuted" a farming family "into a species of mock gentlefolks, while it has ground the labourers down into real slaves"; the antithesis of "mock" and "real" shows who gains and who pays. Individuals stand in different relations to these systems. In Source A "we" are all implicated, consumers who cannot see the cost. Cobbett names individuals, "plain Master Charington, and his son Hodge", and sneers at their pretensions, yet grants that they have been changed by a force larger than themselves, while the labourers appear only as a class. Their evidence differs with their periods: the modern writer reasons from a typical plastic bottle, Cobbett from what he saw that day, oak furniture "in a state of decay and nearly of disuse". Both, finally, see moral damage: a "moral calculus" that no longer counts the cost, and "the pauperism and the crimes that now disgrace this once happy and moral England."',
            },
            markScheme: [
              "Compares both writers' views of systems",
              'Analyses their explanations for the harm',
              'Comments on individual/system relationship',
              'Uses evidence from both texts',
            ],
          },
          {
            id: 'wjec-c2-m3-q4',
            questionNumber: 4,
            questionText:
              '"Cobbett\'s first-hand account of the farmhouse is more effective than the economic argument in Source A because it reveals the human impact of inequality."\n\nTo what extent do you agree? Support your evaluation with detailed references to both texts.',
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'evaluation',
            extract: `Source A:\n${WJEC_C2_SOURCE_A_3}\n\nSource B:\n${WJEC_C2_SOURCE_B_3}`,
            extractSource: `Source A: ${WJEC_C2_SOURCE_A_3_REF} | Source B: ${WJEC_C2_SOURCE_B_3_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'I mostly agree. Cobbett describes real things he saw, like the oak tables and the new "carpet and bell-pull", so the reader can picture how the farmer\'s family now live apart from their workers. His anger that the labourers have been ground "down into real slaves" makes you care about them. The economic argument in Source A is clever, and the plastic bottle is a good example, but it is harder to feel for "future generations" than for people in a real place. Still, Source A shows why the problem is so hard to fix: the costs "do not appear on a price tag".',
              'Grade 6-7':
                'I would resist the dichotomy. Cobbett\'s account does reveal human impact, but it is also an economic argument: he reasons from the furniture to a cause, "Because they cannot keep them upon so little as they give them in wages. This is the real cause of the change." The unused oak tables and the new parlour are evidence of wealth shared out differently, and his irony ("Aye, and a carpet and bell-pull too!") makes the reader share his contempt. Yet its force has a limit: the labourers themselves are never seen or heard, only the rooms they no longer use, and his account of the Charingtons is partly guesswork, as "I dare say" and "in all likelihood" admit. Nor is the argument in Source A merely abstract. The plastic bottle grounds it in an ordinary purchase, and it shows why good intentions cannot solve the problem while the costs "do not appear in our moral calculus". Its victims, though, are unnamed "future generations", which is exactly why the harm is so easy to ignore. Cobbett is the more vivid and makes us feel the injustice; Source A is the more useful for explaining why it continues. Both connect individual lives to a system, one by showing and one by explaining.',
            },
            markScheme: [
              'Evaluates both texts with critical engagement',
              'Shows understanding of personal narrative and economic argument',
              'Uses evidence from both sources',
              'Top band: nuanced, thoughtful evaluation',
            ],
          },
        ],
      },
      {
        id: 'wjec-c2-m3-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 40 minutes on this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 40,
        questions: [
          {
            id: 'wjec-c2-m3-q5',
            questionNumber: 5,
            questionText:
              'Your school is running a sustainable living campaign. The campaign organisers have asked students to write a persuasive article for the school website explaining how young people can make more environmentally responsible choices.\n\nWrite an article persuading your fellow students to live more sustainably.\n\n(20 marks for communication and organisation / 12 marks for writing accurately / 8 marks for SPaG)',
            marks: 40,
            suggestedTimeMinutes: 40,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear, well-organised article with: appropriate tone for peers; clear examples of sustainable choices; generally accurate SPaG.',
              'Grade 6-7':
                'A persuasive article with: engaging voice; concrete examples; strong use of persuasive language.',
              'Grade 8-9':
                'An outstanding article with: compelling voice; sophisticated argument; technical excellence.',
            },
            markScheme: [
              'Communication & Organisation (20 marks): Persuasive technique, form, audience awareness',
              'Writing Accurately (12 marks): Sentence variety, vocabulary range',
              'SPaG (8 marks): Spelling, punctuation, grammar',
            ],
          },
        ],
      },
    ],
  },
]
