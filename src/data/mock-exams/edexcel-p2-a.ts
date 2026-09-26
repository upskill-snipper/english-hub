// @ts-nocheck
import type { MockExamPaper } from './types'

/**
 * WHAT WAS WRONG (found 26 September 2026 by scripts/check-mock-exam-extracts.mjs,
 * fixed 27 September 2026).
 *
 * All five papers are served (index.ts and the chunk loader carry edexcelP2A),
 * and every Source B printed words its named author never wrote:
 *   - four were labelled "(adapted)" and were none of the work's words: 0 of
 *     11 sentences of the Montagu "Letters from the East", 0 of 11 of Tom
 *     Brown's School Days, 0 of 11 of North and South and 0 of 12 of The
 *     Natural History of Selborne are in any edition, and only 4 to 9% of
 *     their three-word runs occur anywhere in the work, so they were
 *     invented, not adapted. The North and South passage was written as a
 *     reporter's first-person account of three hundred idle weavers in
 *     Bolton, a scene the novel does not have;
 *   - the fifth, Charles Dickens, "The State of Our Schools", Household
 *     Words, 1853, is a piece nobody has found. None of its ten sentences is
 *     in Dickens's collected journalism;
 *   - the model answers to questions 3 and 4 quoted the invented lines back
 *     as the authors' words, about forty quotations of four words or more
 *     in eight questions besides those from the Dickens piece ("the soul
 *     requires wildness as the body requires bread" was offered as Gilbert
 *     White's);
 *   - two answers misquoted Source A of paper 4, printing "AI" where it says
 *     "artificial intelligence", and one silently dropped "about AI" from
 *     "any honest conversation about AI must reckon with both";
 *   - the five Source A articles were credited to named writers in real
 *     publications (Travel + Leisure, The Observer, the TES, New Scientist,
 *     BBC Wildlife Magazine). They are practice pieces written for this
 *     bank, and one byline is the name of a real journalist.
 *
 * WHAT WAS DONE. Each Source B is now a genuine passage, cut by a script from
 * the Project Gutenberg text named in its label (never retyped; underscores
 * that mark italics are dropped, "--" is printed as the dash it stands for,
 * and "[...]" marks each cut), chosen for the same subject as closely as the
 * real work allows. They run to about 365-430 words against about 230 for the
 * invented ones, so that each scene or argument is whole:
 *   1. Montagu: her letter to "the Countess of B----" on seeing Constantinople
 *      from the Bosphorus. She describes a city she has come to know, not an
 *      arrival, so question 4 now asks about experiences of a foreign city;
 *   2. Hughes: the scrummage in the School-house match, Part I, Chapter V;
 *   3. Dickens: "Crime and Education" (Daily News, 1846), on a Ragged School.
 *      There was no state school system to criticise in 1846, so questions 3
 *      and 4 now ask about society's failure to educate poor children;
 *   4. Gaskell: Bessy Higgins on the cotton fluff that is killing her,
 *      Chapter XIII. It is a mill-worker's illness, not machines replacing
 *      weavers, so questions 3 and 4 now ask about the cost of industry and
 *      technology to working people;
 *   5. White: Letter XVIII to Daines Barrington (1774), on the house-swallow
 *      nesting in chimneys; question 3 now asks about the wonder of nature,
 *      which is what the letter conveys.
 * Every model answer to questions 3 and 4 is rewritten on the new passages,
 * the Source A misquotations are corrected, and each Source A is labelled as
 * specially written, under its invented byline. The Source A articles
 * themselves, and their statistics, were not checked or changed.
 *
 * REVIEWED 27 September 2026, and these further faults fixed:
 *   - a rewritten answer (paper 2, question 3) added a comma to Hughes ("a
 *     leather ball, which seems"). The first quotation check ignored all
 *     punctuation; every quotation here has since been checked with only
 *     quotation marks, dashes and spacing normalised;
 *   - the North and South label gave the chapter title as "A Soft Breeze in
 *     a Sultry Place"; the edition it cites prints it without the "A";
 *   - the White extract opens on "this adroit bird" and "so narrow a pass"
 *     without saying where the bird is, so the label now says it nests down
 *     a chimney (as the paragraph before the extract says);
 *   - question 1 of papers 2, 3 and 5 offered five true statements for
 *     "choose four", the fifth ruled out only because it lay outside "lines
 *     1-8". The pages print the sources without line numbers, so a student
 *     could not know. That statement is now false in each paper;
 *   - answers named devices the words do not use: the taxi driver's
 *     imperatives called declaratives (paper 1), "We can demand..." called
 *     imperatives and the terraces' replacement called a metaphor (paper 2),
 *     "the people it leaves behind" said to personify displacement (paper
 *     4), and 75%, one in six and 50% called a descending series (paper 5,
 *     questions 2 and 4). The paper 5 answer also had the swallow's wings
 *     "in the shaft"; she hovers over its mouth;
 *   - each Source B now has a glossary in its section description, as a
 *     real paper has, for words a student could not otherwise read: "babies"
 *     (dolls) in Montagu, "nesh" and "gradely" in Bessy's dialect.
 */

// ─── Source Extracts: Edexcel Paper 2 Set A ─────────────────────────────────

// ── Exam 01: Travel ──────────────────────────────────────────────────────────

const E01_SOURCE_A = `I arrived in Marrakech at dusk, when the city's famous red walls glowed like embers against the darkening sky. The taxi driver, who had spent the journey from the airport narrating the history of every roundabout we passed, deposited me at the edge of the medina with a cheerful wave and an instruction: "Walk straight. Turn left at the smell of spices. You cannot get lost." He was wrong about the last part.

Within minutes I was deep in a labyrinth of narrow alleyways where the walls leaned towards each other like conspirators sharing secrets. The air was thick with competing scents - cumin, cedar, leather, diesel, something sweet and unidentifiable that drifted from an open doorway. A man on a moped appeared from nowhere, missed me by inches, and vanished around a corner without slowing down. A cat regarded me from a windowsill with the calm superiority of something that actually knew where it was going.

I had read the guidebooks. I had studied the map. But Marrakech is a city that refuses to be flattened into two dimensions. It exists in layers - sound upon smell upon colour upon heat - and the only way to understand it is to surrender to it, to stop trying to navigate and simply allow yourself to be carried along by its currents.`

const E01_SOURCE_A_REF =
  'Specially written for this practice paper (not a published text): travel writing, "Lost and Found in Marrakech", under the invented byline Priya Sharma'

const E01_SOURCE_B = `Since my last, I have staid (sic) quietly at Constantinople, a city that I ought in conscience to give your ladyship a right notion of, since I know you can have none but what is partial and mistaken from the writings of travellers. 'Tis certain, there are many people that pass years here in Pera, without having ever seen it, and yet they all pretend to describe it. [...] You'll wonder, madam, to hear me add, that I have been there very often. The asmack, or Turkish veil, is become not only very easy, but agreeable to me; and, if it was not, I would be content to endure some inconveniency, to gratify a passion that is become so powerful with me, as curiosity. And, indeed, the pleasure of going in a barge to Chelsea, is not comparable to that of rowing upon the canal of the sea here, where, for twenty miles together, down the Bosphorus, the most beautiful variety of prospects present themselves. The Asian side is covered with fruit-trees, villages, and the most delightful landskips (sic) in nature; on the European, stands Constantinople, situated on seven hills.—The unequal heights make it seem as large again as it is, (though one of the largest cities in the world) shewing an agreeable mixture of gardens, pine and cypress-trees, palaces, mosques, and public buildings, raised one above another, with as much beauty and appearance of symmetry, as your ladyship ever saw in a cabinet, adorned by the most skilful hands, where jars shew themselves above jars, mixed with canisters, babies and candlesticks. This is a very odd comparison; but it gives me an exact idea of the thing. I have taken care to see as much of the seraglio as is to be seen. It is on a point of land running into the sea; a palace of prodigious extent, but very irregular. The gardens take in a large compass of ground, full of high cypress-trees, which is all I know of them. The buildings are all of white stone, leaded on the top, with gilded turrets and spires, which look very magnificent; and, indeed, I believe there is no Christian-king's palace half so large.`

const E01_SOURCE_B_REF =
  'Lady Mary Wortley Montagu, from a letter to "the Countess of B----" (Letter XLI), written from Constantinople in 1717-18 and published posthumously in 1763, as printed in the Project Gutenberg text of her letters (#17520), which marks two old spellings "(sic)"'

const E01_SOURCE_B_GLOSSARY =
  "Glossary for Source B: staid - stayed; Pera - the district across the water from the old city, where European merchants and ambassadors lived; landskips - landscapes; shewing, shew - showing, show; cabinet - a set of shelves for displaying china and ornaments; canisters - small decorated boxes or jars; babies - dolls or small china figures; seraglio - the Sultan's palace; prodigious - enormous."

// ── Exam 02: Sport ───────────────────────────────────────────────────────────

const E02_SOURCE_A = `The problem with modern football is not the money - though the money is obscene - but what the money has done to the relationship between clubs and their communities. When my grandfather watched Sunderland in the 1960s, the players lived in the same streets as the fans. They drank in the same pubs, sent their children to the same schools, and earned wages that, while comfortable, did not place them in a different economic universe. The connection between player and supporter was not manufactured by marketing departments. It was real.

Today, a Premier League footballer earns more in a week than a nurse earns in a year. The average ticket price has risen by 1,100% since 1990, effectively pricing out the very communities that built these clubs from nothing. The terraces - those standing areas where generations of working people roared their teams to glory - have been replaced by corporate hospitality boxes where executives entertain clients who couldn't name a single player on the pitch.

I am not naive enough to suggest we can turn back the clock. Football is a global entertainment industry now, and there is no returning to the days of maximum wages and muddy pitches. But we can demand that clubs remember where they came from. We can insist that ticket prices include affordable allocations for local fans. We can refuse to accept that tradition and profit are mutually exclusive.`

const E02_SOURCE_A_REF =
  'Specially written for this practice paper (not a published text): an opinion column, "The Beautiful Game\'s Ugly Truth", under the invented byline James Harding, which is not the work of any real writer of that name'

const E02_SOURCE_B = `You say you don't see much in it all—nothing but a struggling mass of boys, and a leather ball which seems to excite them all to great fury, as a red rag does a bull. My dear sir, a battle would look much the same to you, except that the boys would be men, and the balls iron; but a battle would be worth your looking at for all that, and so is a football match. You can't be expected to appreciate the delicate strokes of play, the turns by which a game is lost and won—it takes an old player to do that; but the broad philosophy of football you can understand if you will. Come along with me a little nearer, and let us consider it together.

The ball has just fallen again where the two sides are thickest, and they close rapidly around it in a scrummage. It must be driven through now by force or skill, till it flies out on one side or the other. Look how differently the boys face it! Here come two of the bulldogs, bursting through the outsiders; in they go, straight to the heart of the scrummage, bent on driving that ball out on the opposite side. That is what they mean to do. My sons, my sons! you are too hot; you have gone past the ball, and must struggle now right through the scrummage, and get round and back again to your own side, before you can be of any further use. Here comes young Brooke; he goes in as straight as you, but keeps his head, and backs and bends, holding himself still behind the ball, and driving it furiously when he gets the chance. Take a leaf out of his book, you young chargers. Here comes Speedicut, and Flashman the School-house bully, with shouts and great action. Won't you two come up to young Brooke, after locking-up, by the School-house fire, with “Old fellow, wasn't that just a splendid scrummage by the three trees?” But he knows you, and so do we. You don't really want to drive that ball through that scrummage, chancing all hurt for the glory of the School-house, but to make us think that's what you want—a vastly different thing; and fellows of your kidney will never go through more than the skirts of a scrummage, where it's all push and no kicking. We respect boys who keep out of it, and don't sham going in; but you—we had rather not say what we think of you.`

const E02_SOURCE_B_REF =
  'Thomas Hughes, Tom Brown\'s School Days (1857), Part I, Chapter V, "Rugby and Football", from the Project Gutenberg text (#1480): a novel drawn from Hughes\'s own schooldays at Rugby, in which the narrator shows a visitor the School-house match'

const E02_SOURCE_B_GLOSSARY =
  'Glossary for Source B: the School-house - the boarding house whose team is playing the rest of the school; scrummage - a scrum, the struggling crowd of players round the ball; bulldogs - the School-house\'s toughest players, its "fighting brigade"; chargers - horses ridden into battle; locking-up - the hour in the evening when the boys were locked into their house; of your kidney - of your sort; skirts - outer edges; sham - pretend.'

// ── Exam 03: Education ───────────────────────────────────────────────────────

const E03_SOURCE_A = `We are testing our children to destruction. By the age of sixteen, a typical British student will have sat through over seventy formal assessments, each one carrying the implicit message: your worth can be measured, quantified, and ranked on a spreadsheet. We have created an education system that is extraordinarily efficient at producing data and extraordinarily inefficient at producing curious, resilient, creative human beings.

The statistics tell a grim story. Referrals to child mental health services have doubled in the last five years, with exam stress cited as a primary factor in over 40% of cases. Teachers - demoralised, overworked, and buried under marking - are leaving the profession at record rates. One in three newly qualified teachers quits within five years. The system is burning through its most valuable resource: the people who make it work.

I have taught English for twenty-two years, and I can tell you this: the best learning I have ever witnessed happened when students forgot they were being assessed. It happened during a debate that overran into lunchtime because nobody wanted to stop. It happened when a boy who had never willingly read a book devoured an entire novel in a weekend because his teacher had chosen exactly the right one. It happened in the margins, in the spaces between lessons, in the conversations that no mark scheme could capture.`

const E03_SOURCE_A_REF =
  'Specially written for this practice paper (not a published text): an opinion article, "Let Them Learn", under the invented byline Rachel Evans'

const E03_SOURCE_B = `The close, low chamber at the back, in which the boys were crowded, was so foul and stifling as to be, at first, almost insupportable. But its moral aspect was so far worse than its physical, that this was soon forgotten. Huddled together on a bench about the room, and shown out by some flaring candles stuck against the walls, were a crowd of boys, varying from mere infants to young men; sellers of fruit, herbs, lucifer-matches, flints; sleepers under the dry arches of bridges; young thieves and beggars—with nothing natural to youth about them: with nothing frank, ingenuous, or pleasant in their faces; low-browed, vicious, cunning, wicked; abandoned of all help but this; speeding downward to destruction; and UNUTTERABLY IGNORANT.

This, Reader, was one room as full as it could hold; but these were only grains in sample of a Multitude that are perpetually sifting through these schools; in sample of a Multitude who had within them once, and perhaps have now, the elements of men as good as you or I, and maybe infinitely better; in sample of a Multitude among whose doomed and sinful ranks (oh, think of this, and think of them!) the child of any man upon this earth, however lofty his degree, must, as by Destiny and Fate, be found, if, at its birth, it were consigned to such an infancy and nurture, as these fallen creatures had!

This was the Class I saw at the Ragged School. They could not be trusted with books; they could only be instructed orally; they were difficult of reduction to anything like attention, obedience, or decent behaviour; their benighted ignorance in reference to the Deity, or to any social duty (how could they guess at any social duty, being so discarded by all social teachers but the gaoler and the hangman!) was terrible to see.

[...]

The new exposition I found in this Ragged School, of the frightful neglect by the State of those whom it punishes so constantly, and whom it might, as easily and less expensively, instruct and save; together with the sight I had seen there, in the heart of London; haunted me, and finally impelled me to an endeavour to bring these Institutions under the notice of the Government; with some faint hope that the vastness of the question would supersede the Theology of the schools, and that the Bench of Bishops might adjust the latter question, after some small grant had been conceded. I made the attempt; and have heard no more of the subject from that hour.`

const E03_SOURCE_B_REF =
  'Charles Dickens, "Crime and Education", a letter to the Daily News, 4 February 1846, on a Ragged School in London, from his Miscellaneous Papers (Project Gutenberg #1435)'

const E03_SOURCE_B_GLOSSARY =
  'Glossary for Source B: Ragged School - a charity school that taught the poorest children for nothing; insupportable - unbearable; lucifer-matches - matches that light when struck; flints - stones for striking a spark; ingenuous - innocent, open; degree - rank in society; benighted - ignorant, as if in darkness; the Deity - God; gaoler - jailer; exposition - revelation; supersede - take priority over; the Theology of the schools - arguments about what religion the schools should teach; the Bench of Bishops - the bishops who sit in the House of Lords.'

// ── Exam 04: Technology ──────────────────────────────────────────────────────

const E04_SOURCE_A = `Artificial intelligence will not take your job. But someone who knows how to use artificial intelligence will. This is the message I deliver to audiences across the country, and it is met, invariably, with a mixture of relief and anxiety - relief that the robots are not yet at the gates, anxiety that the gates may be closer than anyone thought.

The reality is more nuanced than either the utopians or the doomsayers suggest. AI is not a single technology but a constellation of capabilities that are being integrated, unevenly and unpredictably, into every sector of the economy. A radiologist who uses AI to screen images can process three times as many scans with greater accuracy. A lawyer who uses AI to review documents can complete in hours what previously took weeks. These professionals have not been replaced. They have been amplified.

But amplification has consequences. If one radiologist can now do the work of three, what happens to the other two? If a legal team of twenty can be reduced to five, where do the fifteen go? The efficiency gains are real, but so are the human costs, and any honest conversation about AI must reckon with both. We cannot celebrate the productivity while ignoring the displacement. We cannot marvel at the technology while forgetting the people it leaves behind.`

const E04_SOURCE_A_REF =
  'Specially written for this practice paper (not a published text): an article, "The AI Reckoning", under the invented byline Professor David Chen'

const E04_SOURCE_B = `“I think I was well when mother died, but I have never been rightly strong sin’ somewhere about that time. I began to work in a carding-room soon after, and the fluff got into my lungs, and poisoned me.”

“Fluff?” said Margaret, inquiringly.

“Fluff,” repeated Bessy. “Little bits, as fly off fro’ the cotton, when they’re carding it, and fill the air till it looks all fine white dust. They say it winds rounds the lungs, and tightens them up. Anyhow, there’s many a one as works in a carding-room, that falls into a waste, coughing and spitting blood, because they’re just poisoned by the fluff.”

“But can’t it be helped?” asked Margaret.

“I dunno. Some folk have a great wheel at one end o’ their carding-rooms to make a draught, and carry off th’ dust; but that wheel costs a deal of money—five or six hundred pounds, maybe, and brings in no profit; so it’s but a few of th’ masters as will put ’em up; and I’ve heard tell o’ men who didn’t like working in places where there was a wheel, because they said as how it made ’em hungry, at after they’d been long used to swallowing fluff, to go without it, and that their wages ought to be raised if they were to work in such places. So between masters and men th’ wheels fall through. I know I wish there’d been a wheel in our place, though.”

“Did not your father know about it?” asked Margaret.

“Yes! And he was sorry. But our factory were a good one on the whole; and a steady likely set o’ people; and father was afeard of letting me go to a strange place, for though yo’ would na think it now, many a one then used to call me a gradely lass enough. And I did na like to be reckoned nesh and soft, and Mary’s schooling were to be kept up, mother said, and father he were always liking to buy books, and go to lectures o’ one kind and another—all which took money—so I just worked on till I shall ne’er get the whirr out o’ my ears, or the fluff out o’ my throat i’ this world. That’s all.”

“How old are you?” asked Margaret.

“Nineteen, come July.”

“And I too am nineteen.” She thought more sorrowfully than Bessy did, of the contrast between them. She could not speak for a moment or two for the emotion she was trying to keep down.`

const E04_SOURCE_B_REF =
  'Elizabeth Gaskell, North and South (1855), Chapter XIII, "Soft Breeze in a Sultry Place", from the Project Gutenberg text (#4276): Bessy Higgins, who has worked in a Milton cotton mill, talks with Margaret Hale'

const E04_SOURCE_B_GLOSSARY =
  "Glossary for Source B: Bessy speaks in the dialect of the northern mill towns. carding-room - the room where raw cotton was combed out before spinning; sin' - since; fro' - from; th' - the; o' - of; i' - in; yo' - you; na - not; ne'er - never; falls into a waste - wastes away with illness; a deal of - a great deal of; masters - mill-owners; at after - after; likely - decent, promising; afeard - afraid; gradely - fine, handsome; nesh - weak, delicate."

// ── Exam 05: Nature ──────────────────────────────────────────────────────────

const E05_SOURCE_A = `Last spring, a pair of peregrine falcons nested on the roof of a multi-storey car park in the centre of Sheffield. Within days, a webcam had been installed, a Twitter account created, and thousands of people - office workers, schoolchildren, pensioners, insomniacs watching at 3am - were following every moment of the nesting season with an intensity usually reserved for reality television.

Something about those falcons captured the public imagination in a way that a hundred environmental reports never could. Perhaps it was the sheer improbability of it: the fastest animal on earth, a creature designed for wild cliffs and open skies, choosing to raise its young on a concrete ledge above a pay-and-display car park. Perhaps it was the drama - the moment when one of the chicks teetered on the edge and the entire internet held its breath. Perhaps it was simply that, in a world of relentless bad news about nature, here was a story of adaptation and survival that suggested the natural world had not entirely given up on us.

But I wonder whether our enthusiasm for urban wildlife is, in part, a way of avoiding the harder truth. While we celebrate falcons on car parks and foxes in gardens, the wider natural world is in catastrophic decline. Insect populations have fallen by 75% in the last thirty years. One in six species in Britain is at risk of extinction. The hedgehog - once so common it was a nuisance - has declined by 50% since the millennium.`

const E05_SOURCE_A_REF =
  'Specially written for this practice paper (not a published text): a magazine article, "Wild in the City", under the invented byline Tom Barker'

const E05_SOURCE_B = `Wonderful is the address which this adroit bird shows all day long in ascending and descending with security through so narrow a pass. When hovering over the mouth of the funnel, the vibrations of her wings acting on the confined air occasion a rumbling like thunder. It is not improbable that the dam submits to this inconvenient situation so low in the shaft, in order to secure her broods from rapacious birds, and particularly from owls, which frequently fall down chimneys, perhaps in attempting to get at these nestlings.

The swallow lays from four to six white eggs, dotted with red specks; and brings out her first brood about the last week in June, or the first week in July. The progressive method by which the young are introduced into life is very amusing: first, they emerge from the shaft with difficulty enough, and often fall down into the rooms below: for a day or so they are fed on the chimney-top, and then are conducted to the dead leafless bough of some tree, where, sitting in a row, they are attended with great assiduity, and may then be called perchers. In a day or two more they become flyers, but are still unable to take their own food; therefore they play about near the place where the dams are hawking for flies; and when a mouthful is collected, at a certain signal given, the dam and the nestling advance, rising towards each other, and meeting at an angle; the young one all the while uttering such a little quick note of gratitude and complacency, that a person must have paid very little regard to the wonders of nature that has not often remarked this feat.

[...]

All the summer long is the swallow a most instructive pattern of unwearied industry and affection; for, from morning to night, while there is a family to be supported, she spends the whole day in skimming close to the ground, and exerting the most sudden turns and quick evolutions. Avenues, and long walks under hedges, and pasture-fields, and mown meadows where cattle graze, are her delight, especially if there are trees interspersed; because in such spots insects most abound. When a fly is taken a smart snap from her bill is heard, resembling the noise at the shutting of a watch-case; but the motion of the mandibles are too quick for the eye.`

const E05_SOURCE_B_REF =
  'Gilbert White, The Natural History of Selborne (1789), from Letter XVIII to the Honourable Daines Barrington, dated Selborne, 29 January 1774, on the house-swallow, which builds its nest five or six feet or more down a chimney, from the Project Gutenberg text (#1408)'

const E05_SOURCE_B_GLOSSARY =
  'Glossary for Source B: address - skill; adroit - skilful; the funnel, the shaft - the chimney; occasion - cause; dam - the mother bird; rapacious - preying on other creatures; broods - families of young birds; assiduity - constant care; hawking for flies - catching insects in flight; complacency - contentment; remarked - noticed; evolutions - turns and manoeuvres; mandibles - the two halves of the beak; watch-case - the hinged metal case of a pocket watch.'

// ─── Mock Exam Papers ────────────────────────────────────────────────────────

export const edexcelP2A: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 01: Travel
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p2-01',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-Fiction and Transactional Writing',
    subtitle: 'English Language 1EN0/02',
    code: '1EN0/02',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p2-01-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${E01_SOURCE_A_REF}\nSource B: ${E01_SOURCE_B_REF}\n\n${E01_SOURCE_B_GLOSSARY}`,
        totalMarks: 36,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-p2-01-q1',
            questionNumber: 1,
            questionText:
              'Read again Source A, lines 1-6.\n\nChoose four statements below which are TRUE.\n\nA) The writer arrived in Marrakech at dawn.\nB) The city walls are famous for their red colour.\nC) The taxi driver was silent throughout the journey.\nD) The writer was dropped at the edge of the medina.\nE) The alleyways were wide and open.\nF) The air contained competing scents.\nG) A man on a moped nearly hit the writer.\nH) The writer had not read any guidebooks.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${E01_SOURCE_A}\n\nSource B:\n${E01_SOURCE_B}`,
            extractSource: `Source A: ${E01_SOURCE_A_REF} | Source B: ${E01_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'B, D, F, G - B: "the city\'s famous red walls." D: "deposited me at the edge of the medina." F: "thick with competing scents." G: "missed me by inches."',
              'Grade 6-7':
                'B, D, F, G - A is false (arrived at dusk, not dawn). C is false (the driver narrated the history of every roundabout). E is false (narrow alleyways). H is false ("I had read the guidebooks").',
            },
            markScheme: [
              '1 mark per correct answer, maximum 4',
              'No marks deducted for incorrect selections beyond four',
            ],
          },
          {
            id: 'edexcel-p2-01-q2',
            questionNumber: 2,
            questionText:
              "You need to refer only to Source A for this question.\n\nHow does the writer use language to convey the experience of arriving in Marrakech?\n\nYou could include the writer's choice of:\n- words and phrases\n- language features and techniques\n- sentence forms.",
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${E01_SOURCE_A}`,
            extractSource: E01_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses a simile - "the walls leaned towards each other like conspirators sharing secrets" - to make the alleyways feel secretive and mysterious. The list of smells - "cumin, cedar, leather, diesel" - uses sensory language to make the reader feel like they are there. The cat has "calm superiority" which is personification and adds humour. The metaphor "carried along by its currents" compares the city to a river, suggesting it is powerful and overwhelming.',
              'Grade 6-7':
                'Sharma constructs the arrival as a surrender of Western rationality to sensory overload. The simile "like conspirators sharing secrets" personifies the architecture, transforming the medina into an active, almost sentient space that conceals rather than reveals. The asyndetic list of smells - "cumin, cedar, leather, diesel, something sweet and unidentifiable" - enacts the experience of sensory bombardment, the final element ("something sweet and unidentifiable") deliberately resisting the catalogue\'s apparent order. The driver\'s confident imperatives - "Walk straight. Turn left at the smell of spices" - use short, clipped sentences to parody the certainty of directions before the writer\'s admission "He was wrong about the last part" deflates them. The concluding metaphor of "currents" reconceptualises the city as a force of nature rather than a human construction, while the tricolon "stop trying to navigate and simply allow yourself to be carried" performs syntactically the very act of surrender it describes.',
              'Grade 8-9':
                'Sharma\'s prose enacts a systematic dismantling of the Western tourist\'s desire for legibility. The opening simile - "glowed like embers" - establishes Marrakech as a place of residual, smouldering energy rather than static beauty. The personification of walls "like conspirators sharing secrets" transforms urban planning into narrative agency: the medina is not merely confusing but actively secretive, withholding meaning from the outsider. The asyndetic sensory catalogue ("cumin, cedar, leather, diesel") progresses from the exotic to the industrial, its final term - "something sweet and unidentifiable" - refusing closure and enacting the epistemological failure the writer describes. The cat, with its "calm superiority of something that actually knew where it was going," functions as both comic relief and symbolic rebuke: the non-human navigates effortlessly what the human cannot. The concluding metaphor of "currents" is particularly resonant, recasting the city as hydrological rather than architectural - a place one does not walk through but is swept through, where the only viable strategy is the surrender of control.',
            },
            markScheme: [
              'Identifies relevant language features with examples',
              'Analyses effects of specific word choices',
              'Comments on how language conveys experience to the reader',
              'Top band: detailed, perceptive, conceptualised analysis',
            ],
          },
          {
            id: 'edexcel-p2-01-q3',
            questionNumber: 3,
            questionText:
              'You need to refer only to Source B for this question.\n\nHow does Lady Mary Wortley Montagu use language to present Constantinople to her readers?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source B:\n${E01_SOURCE_B}`,
            extractSource: E01_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5':
                'Montagu presents Constantinople as a beautiful city that few Europeans have really seen. She says other travellers\' accounts are "partial and mistaken", which makes the reader trust her own description more. From a boat on the Bosphorus she sees "the most beautiful variety of prospects", and she lists what she sees: "gardens, pine and cypress-trees, palaces, mosques, and public buildings". The list shows how much there is to look at. She compares the hillsides to "a cabinet" where "jars shew themselves above jars", a homely comparison that helps an English reader picture buildings piled up the hills. The seraglio is "a palace of prodigious extent", and she ends by saying that no "Christian-king\'s palace" is "half so large", so the city seems grander than anything in Europe.',
              'Grade 6-7':
                'Montagu presents Constantinople as a city she has earned the right to describe, and she shows it to her reader through English eyes. She opens by dismissing other accounts as "partial and mistaken from the writings of travellers" and mocks those who "pass years here in Pera, without having ever seen it, and yet they all pretend to describe it": the verb "pretend" sets up her own authority as an eyewitness. The aside "You\'ll wonder, madam, to hear me add, that I have been there very often" speaks directly to her correspondent and turns her boldness (she goes veiled, to "gratify a passion" for curiosity) into a playful confession. Her description works by comparison with home. Rowing down the Bosphorus is preferred to "a barge to Chelsea", and the hills of "gardens, pine and cypress-trees, palaces, mosques, and public buildings, raised one above another" are likened to "a cabinet, adorned by the most skilful hands, where jars shew themselves above jars". The simile shrinks a great city to an ornamental display in an English room, and she knows it: "This is a very odd comparison; but it gives me an exact idea of the thing." Exactness matters more to her than dignity. The seraglio is "a palace of prodigious extent, but very irregular", a judgement that balances awe with an eye for order, and her honesty about the limits of what she saw ("which is all I know of them") makes her last comparison more persuasive: "there is no Christian-king\'s palace half so large." An English reader is invited to admire the Ottoman capital, not to look down on it.',
            },
            markScheme: [
              'Analyses language features with specific examples from Source B',
              'Comments on effects of vocabulary and imagery',
              "Considers writer's purpose and audience",
              'Top band: sophisticated, perceptive analysis of language choices',
            ],
          },
          {
            id: 'edexcel-p2-01-q4',
            questionNumber: 4,
            questionText:
              'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different experiences of a foreign city.\n\nIn your answer, you could:\n- compare their different experiences and reactions\n- compare the methods they use to convey their experiences\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${E01_SOURCE_A}\n\nSource B:\n${E01_SOURCE_B}`,
            extractSource: `Source A: ${E01_SOURCE_A_REF} | Source B: ${E01_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers describe a foreign city that amazes them. Sharma is lost in "a labyrinth of narrow alleyways" and says Marrakech "refuses to be flattened into two dimensions", while Montagu sees Constantinople from a boat, where "the most beautiful variety of prospects" appears. Both writers use lists: Sharma lists smells ("cumin, cedar, leather, diesel") while Montagu lists what she sees ("gardens, pine and cypress-trees, palaces, mosques, and public buildings"). Both compare the city with something else: Sharma compares the walls to "conspirators sharing secrets" and Montagu compares the hillsides to "a cabinet" of jars. However, Sharma gets lost and gives in to the city, while Montagu stays in control and claims to know it better than other travellers, whose accounts are "partial and mistaken". Sharma\'s tone is casual and funny, while Montagu writes a polite letter to a countess, whom she calls "madam".',
              'Grade 6-7':
                'Both writers set out to correct what their readers think they know about a foreign city, but they reach opposite conclusions about how such a city can be known. Sharma has "read the guidebooks" and "studied the map" and finds them useless: Marrakech "refuses to be flattened into two dimensions", and understanding comes only when you "stop trying to navigate". Montagu dismisses the books too, calling travellers\' accounts "partial and mistaken", but her answer is the opposite of surrender: go and look, again and again ("I have been there very often"), and report exactly. Their methods follow from this. Sharma writes impressionistically, her senses overwhelmed by an asyndetic list of smells that ends in "something sweet and unidentifiable"; Montagu writes panoramically, from a boat on the Bosphorus, ordering the view into a list of "gardens, pine and cypress-trees, palaces, mosques, and public buildings, raised one above another". Both reach for comparisons, to different ends. Sharma\'s simile makes the city strange, its walls leaning "like conspirators sharing secrets"; Montagu\'s make it familiar to an English reader, the hills becoming "a cabinet" of jars and the boat trip better than "a barge to Chelsea". Even her self-correction ("This is a very odd comparison; but it gives me an exact idea of the thing") values exactness above elegance. Both writers laugh at themselves, Sharma through the cat that "actually knew where it was going", Montagu through her confession that she goes veiled to "gratify a passion" for curiosity. But Sharma ends lost and content, "carried along by its currents", while Montagu ends with a confident verdict that there is "no Christian-king\'s palace half so large". One writer lets the city carry her; the other makes the city clear to a reader who will never see it.',
            },
            markScheme: [
              'Compares experiences and perspectives from both sources',
              'Analyses methods used by both writers with examples',
              'Identifies similarities and differences throughout',
              'Top band: perceptive comparative analysis with sustained engagement',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-01-writing',
        title: 'Section B: Transactional Writing',
        description:
          'You are advised to spend about 50 minutes on this section. Answer BOTH questions.',
        totalMarks: 28,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'edexcel-p2-01-q5',
            questionNumber: 5,
            questionText:
              'Your local council is considering closing a community centre to save money.\n\nWrite a letter to the council in which you argue that the community centre should remain open.\n\n(8 marks for content / 4 marks for SPaG)',
            marks: 12,
            suggestedTimeMinutes: 20,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear letter with: appropriate formal register and letter conventions (Dear..., Yours faithfully); a sustained argument with reasons; use of some rhetorical techniques; generally accurate SPaG.',
              'Grade 6-7':
                'A well-crafted letter with: confident formal register; persuasive techniques including counter-argument; emotive and logical appeals balanced; accurate and varied SPaG with ambitious vocabulary.',
              'Grade 8-9':
                'An assured, compelling letter with: sophisticated rhetorical strategy; nuanced argument acknowledging financial realities while insisting on social value; distinctive, authoritative voice; technical virtuosity in SPaG.',
            },
            markScheme: [
              'Content (8 marks): Purpose, audience, form, register, organisation',
              'SPaG (4 marks): Sentence demarcation, punctuation, spelling, sentence variety',
            ],
          },
          {
            id: 'edexcel-p2-01-q6',
            questionNumber: 6,
            questionText:
              'A travel magazine is running a writing competition. The theme is "A Place That Changed Me."\n\nWrite your entry for the competition.\n\n(12 marks for content / 4 marks for SPaG)',
            marks: 16,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear travel article with: appropriate features (headline optional); sustained description and reflection; personal voice; generally accurate SPaG.',
              'Grade 6-7':
                'A compelling magazine entry with: vivid sensory writing; reflective voice connecting place to personal growth; effective structural choices; accurate and varied SPaG.',
              'Grade 8-9':
                'An outstanding piece with: assured literary voice blending description with introspection; sophisticated structural control; ambitious, precise language; technical excellence.',
            },
            markScheme: [
              'Content (12 marks): Communication, register, form, organisation, engagement with reader',
              'SPaG (4 marks): Sentence demarcation, punctuation range, spelling, sentence variety',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 02: Sport
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p2-02',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-Fiction and Transactional Writing',
    subtitle: 'English Language 1EN0/02',
    code: '1EN0/02',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p2-02-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${E02_SOURCE_A_REF}\nSource B: ${E02_SOURCE_B_REF}\n\n${E02_SOURCE_B_GLOSSARY}`,
        totalMarks: 36,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-p2-02-q1',
            questionNumber: 1,
            questionText:
              "Read again Source A, lines 1-8.\n\nChoose four statements below which are TRUE.\n\nA) The writer thinks money is the main problem with modern football.\nB) The writer's grandfather watched Sunderland.\nC) Players in the 1960s lived near the fans.\nD) The connection between players and fans was created by marketing.\nE) Players and fans used the same pubs.\nF) A Premier League footballer earns more weekly than a nurse earns yearly.\nG) Ticket prices have risen by 110% since 1990.\nH) Corporate hospitality boxes have been replaced by terraces.",
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${E02_SOURCE_A}\n\nSource B:\n${E02_SOURCE_B}`,
            extractSource: `Source A: ${E02_SOURCE_A_REF} | Source B: ${E02_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'B, C, E, F - B: "my grandfather watched Sunderland in the 1960s." C: "the players lived in the same streets as the fans." E: "drank in the same pubs." F: "earns more in a week than a nurse earns in a year."',
              'Grade 6-7':
                'B, C, E, F - A is false (he says money is not the main problem). D is false (the connection was "not manufactured by marketing departments"). G is false (1,100%, not 110%). H is false (it is the other way round: the terraces "have been replaced by corporate hospitality boxes").',
            },
            markScheme: ['1 mark per correct answer, maximum 4'],
          },
          {
            id: 'edexcel-p2-02-q2',
            questionNumber: 2,
            questionText:
              "You need to refer only to Source A for this question.\n\nHow does the writer use language to argue that modern football has lost its connection with communities?\n\nYou could include the writer's choice of:\n- words and phrases\n- language features and techniques\n- sentence forms.",
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${E02_SOURCE_A}`,
            extractSource: E02_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer contrasts the past with the present to show what has been lost. In the 1960s, players "lived in the same streets," "drank in the same pubs" - the repetition of "same" emphasises equality. Today, the statistic "earns more in a week than a nurse earns in a year" shocks the reader by comparing football wages to an essential worker. The phrase "pricing out" is emotive, suggesting fans are being deliberately excluded. The image of "terraces" being "replaced by corporate hospitality boxes" symbolises the loss of working-class culture.',
              'Grade 6-7':
                'Harding constructs his argument through a temporal structure that positions the past as communal and the present as corporate. The repetition of "the same" - "same streets," "same pubs," "same schools" - creates a rhythmic insistence on shared space that performs linguistically the social cohesion it describes. The parenthetical aside "though the money is obscene" is rhetorically strategic: the concession to the obvious criticism (that money is the problem) allows Harding to redirect towards a more nuanced argument about community. The statistical comparison - "more in a week than a nurse earns in a year" - juxtaposes football with healthcare, implicitly invoking a moral hierarchy of social value. The terraces are described not merely as standing areas but as places "where generations of working people roared their teams to glory": the verb "roared" connotes primal, communal energy, while "generations" implies inheritance and continuity. Their replacement by "corporate hospitality boxes" is loaded: "hospitality" is ironically distanced from genuine welcome, while "boxes" connotes containment and separation. The concluding tricolon - "We can demand... We can insist... We can refuse" - shifts from analysis to activism, the collective pronoun "we" recruiting the reader into a community of resistance.',
            },
            markScheme: [
              'Identifies language features with specific examples',
              'Analyses effects of language on the reader',
              'Comments on persuasive techniques and their impact',
              'Top band: perceptive, conceptualised analysis',
            ],
          },
          {
            id: 'edexcel-p2-02-q3',
            questionNumber: 3,
            questionText:
              'You need to refer only to Source B for this question.\n\nHow does the writer use language to convey his attitude towards the game of football and the boys who play it?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source B:\n${E02_SOURCE_B}`,
            extractSource: E02_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer admires football and wants the reader to admire it too. He speaks to the reader directly as "My dear sir", answering someone who sees "nothing but a struggling mass of boys, and a leather ball". He compares the match to a battle: "a battle would look much the same to you, except that the boys would be men, and the balls iron". This makes the game sound serious and brave. He praises young Brooke, who "keeps his head", and tells the over-eager boys to "Take a leaf out of his book". He is harder on Speedicut and Flashman, who make "shouts and great action" but only pretend to go into the scrummage. The last sentence, "We respect boys who keep out of it, and don\'t sham going in", shows that he values honesty and courage more than showing off.',
              'Grade 6-7':
                'Hughes writes as an old player guiding an outsider round the pitch, and his attitude is enthusiastic, affectionate and morally watchful. The outsider\'s objection - "nothing but a struggling mass of boys, and a leather ball which seems to excite them all to great fury, as a red rag does a bull" - is voiced only to be overturned: the animal simile is the outsider\'s view, not his. His reply, "My dear sir, a battle would look much the same to you, except that the boys would be men, and the balls iron", raises the game to the level of war, and the closing clause "and so is a football match" insists that it deserves the same attention. He claims a special knowledge ("it takes an old player to do that") yet offers the reader "the broad philosophy of football", and the invitation to "consider it together" draws us into his circle. The present tense and the commentary of "Here comes young Brooke" put us beside him on the touchline. His judgements of the boys are graded with care. The bulldogs are rebuked with a fond, fatherly exclamation, "My sons, my sons! you are too hot"; young Brooke "keeps his head" and is held up as a model in the imperative "Take a leaf out of his book, you young chargers". Speedicut and Flashman, with their "shouts and great action", get the one openly scornful passage: they do not want to risk "all hurt for the glory of the School-house", only "to make us think that\'s what you want - a vastly different thing". The final antithesis, "We respect boys who keep out of it, and don\'t sham going in; but you - we had rather not say what we think of you", shows what he values most. Courage matters, but honesty matters more: the boy who stays out is respected, while the boy who fakes courage is not even worth describing.',
            },
            markScheme: [
              'Analyses language with specific examples from Source B',
              "Comments on writer's attitude and how it is conveyed",
              'Considers tone and shifts in tone',
              "Top band: perceptive analysis of the writer's craft",
            ],
          },
          {
            id: 'edexcel-p2-02-q4',
            questionNumber: 4,
            questionText:
              'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different perspectives on sport and community.\n\nIn your answer, you could:\n- compare their different perspectives\n- compare the methods they use to convey their perspectives\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${E02_SOURCE_A}\n\nSource B:\n${E02_SOURCE_B}`,
            extractSource: `Source A: ${E02_SOURCE_A_REF} | Source B: ${E02_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers see sport as something that brings people together. Harding argues that modern football has lost its connection with communities because of money, while Hughes describes a school football match that he clearly loves. Harding\'s tone is angry: he uses statistics such as "a Premier League footballer earns more in a week than a nurse earns in a year". Hughes\'s tone is warm and admiring: he compares the match to "a battle" and says it is "worth your looking at". Both writers care about belonging. Harding remembers when players "drank in the same pubs" as the fans, and Hughes\'s best players risk getting hurt "for the glory of the School-house". Both writers also judge people: Harding criticises the executives in "corporate hospitality boxes", and Hughes criticises boys who "sham going in". The main difference is that Harding looks back at a community that has been lost, while Hughes shows one that is alive in front of him.',
              'Grade 6-7':
                'Harding and Hughes both treat sport as the expression of a community, but one writes an elegy and the other a celebration. Harding\'s community is in the past: in the 1960s players "lived in the same streets as the fans", and the repetition of "same" builds a picture of shared lives that money has since broken, the terraces "replaced by corporate hospitality boxes". Hughes\'s community is present and physical: the School-house side drives into the scrummage together, and the highest motive he can name is to risk "all hurt for the glory of the School-house". Their methods suit their purposes. Harding argues like a journalist, with statistics ("1,100% since 1990") and a comparison with a nurse\'s pay that asks the reader to judge football\'s values. Hughes argues like an old boy showing a guest round, with direct address ("My dear sir") and a running commentary in the present tense ("Here comes young Brooke"), so that the reader is drawn into the "we" of the school. Both writers make moral distinctions within their communities. Harding sets "generations of working people" against executives entertaining clients "who couldn\'t name a single player on the pitch"; Hughes sets young Brooke, who "keeps his head", against Speedicut and Flashman, who only want "to make us think that\'s what you want". For both, belonging has to be real rather than performed. The difference lies in the endings. Harding closes with a call to action - "We can demand... We can insist... We can refuse" - because his community must be rebuilt. Hughes needs no call to action: his community exists on the pitch, and what it asks of each boy is courage and honesty.',
            },
            markScheme: [
              'Compares perspectives from both sources throughout',
              'Analyses methods with specific examples from both texts',
              'Identifies and explores similarities and differences',
              'Top band: perceptive, sustained comparative analysis',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-02-writing',
        title: 'Section B: Transactional Writing',
        description:
          'You are advised to spend about 50 minutes on this section. Answer BOTH questions.',
        totalMarks: 28,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'edexcel-p2-02-q5',
            questionNumber: 5,
            questionText:
              'Your school or college is planning to reduce the number of PE lessons to make more time for academic subjects.\n\nWrite a speech to be delivered at a school assembly in which you argue for or against this proposal.\n\n(8 marks for content / 4 marks for SPaG)',
            marks: 12,
            suggestedTimeMinutes: 20,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear speech with: direct address to the audience; sustained argument with reasons and examples; some rhetorical devices (rhetorical questions, rule of three); generally accurate SPaG.',
              'Grade 6-7':
                'A well-crafted speech with: confident, engaging address; persuasive techniques including counter-argument; varied sentence structures for effect; accurate and ambitious SPaG.',
              'Grade 8-9':
                'An assured, compelling speech with: commanding rhetorical strategy; nuanced argument balancing academic and physical wellbeing; distinctive, authoritative voice; technical excellence.',
            },
            markScheme: [
              'Content (8 marks): Purpose, audience, form, register, organisation',
              'SPaG (4 marks): Sentence demarcation, punctuation, spelling, sentence variety',
            ],
          },
          {
            id: 'edexcel-p2-02-q6',
            questionNumber: 6,
            questionText:
              '"Sport is about more than winning." Write an article for a broadsheet newspaper in which you argue for or against this view.\n\n(12 marks for content / 4 marks for SPaG)',
            marks: 16,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear article with: appropriate form features (headline, paragraphs); sustained argument; use of examples and evidence; generally accurate SPaG.',
              'Grade 6-7':
                'A compelling article with: distinctive journalistic voice; well-structured argument with evidence and anecdote; effective use of counter-argument; accurate and varied SPaG.',
              'Grade 8-9':
                'An outstanding article with: assured, authoritative voice; sophisticated argument weaving personal reflection with broader social commentary; ambitious vocabulary and syntax; technical virtuosity.',
            },
            markScheme: [
              'Content (12 marks): Communication, register, form, organisation',
              'SPaG (4 marks): Sentence demarcation, punctuation range, spelling, sentence variety',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 03: Education
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p2-03',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-Fiction and Transactional Writing',
    subtitle: 'English Language 1EN0/02',
    code: '1EN0/02',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p2-03-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${E03_SOURCE_A_REF}\nSource B: ${E03_SOURCE_B_REF}\n\n${E03_SOURCE_B_GLOSSARY}`,
        totalMarks: 36,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-p2-03-q1',
            questionNumber: 1,
            questionText:
              'Read again Source A, lines 1-7.\n\nChoose four statements below which are TRUE.\n\nA) A typical student will have sat over seventy assessments by age sixteen.\nB) The education system produces curious human beings effectively.\nC) Students receive the message that their worth can be measured.\nD) Referrals to child mental health services have tripled.\nE) Exam stress is cited in over 40% of mental health cases.\nF) Teachers are staying in the profession for longer than before.\nG) One in five newly qualified teachers quits within five years.\nH) The system is efficient at producing data.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${E03_SOURCE_A}\n\nSource B:\n${E03_SOURCE_B}`,
            extractSource: `Source A: ${E03_SOURCE_A_REF} | Source B: ${E03_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'A, C, E, H - A: "over seventy formal assessments." C: "your worth can be measured, quantified, and ranked." E: "exam stress cited as a primary factor in over 40% of cases." H: "extraordinarily efficient at producing data."',
              'Grade 6-7':
                'A, C, E, H - B is false (the system is "extraordinarily inefficient" at this). D is false (doubled, not tripled). F is false (teachers are "leaving the profession at record rates"). G is false (one in three, not one in five).',
            },
            markScheme: ['1 mark per correct answer, maximum 4'],
          },
          {
            id: 'edexcel-p2-03-q2',
            questionNumber: 2,
            questionText:
              "You need to refer only to Source A for this question.\n\nHow does the writer use language to argue against the current examination system?\n\nYou could include the writer's choice of:\n- words and phrases\n- language features and techniques\n- sentence forms.",
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${E03_SOURCE_A}`,
            extractSource: E03_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer opens with the powerful phrase "testing our children to destruction" which uses emotive language to make exams sound violent and harmful. The statistic "over seventy formal assessments" shocks the reader with a specific number. The contrast between "extraordinarily efficient at producing data" and "extraordinarily inefficient at producing curious... human beings" uses the same word to highlight the system\'s wrong priorities. The metaphor "burning through its most valuable resource" compares teachers to something being wasted, which is a strong image.',
              'Grade 6-7':
                'Evans constructs her argument through a rhetorical strategy that systematically dismantles the language of institutional authority. The opening phrase "testing our children to destruction" repurposes the engineering term (testing to destruction means testing until something breaks) as a metaphor for educational practice, implying that the system has exceeded its subjects\' structural capacity. The antithetical parallelism - "extraordinarily efficient at producing data and extraordinarily inefficient at producing curious, resilient, creative human beings" - weaponises the system\'s own vocabulary of efficiency against it. The tricolon of adjectives ("curious, resilient, creative") defines humanity in terms that resist quantification, implicitly arguing that what matters most cannot be measured. The statistics in paragraph two function as strategic irony: the writer deploys data to argue against a data-driven system. The metaphor "burning through" connotes both consumption and waste, while the final paragraph\'s shift to anecdotal evidence - "a debate that overran into lunchtime," "a boy who had never willingly read a book" - deliberately privileges narrative over data, performing the argument\'s thesis through its own methodology.',
            },
            markScheme: [
              'Identifies language techniques with examples from Source A',
              'Analyses effects of specific word choices',
              'Considers how language shapes the argument',
              'Top band: detailed, conceptualised analysis',
            ],
          },
          {
            id: 'edexcel-p2-03-q3',
            questionNumber: 3,
            questionText:
              "You need to refer only to Source B for this question.\n\nHow does Dickens use language to criticise his society's failure to educate poor children?",
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source B:\n${E03_SOURCE_B}`,
            extractSource: E03_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5':
                'Dickens uses shocking description to make the reader pity the children and blame the people who have neglected them. The room is "so foul and stifling" that it is "almost insupportable", but he says its "moral aspect was so far worse than its physical". He lists who the boys are - "sellers of fruit, herbs, lucifer-matches, flints", "young thieves and beggars" - to show how poor and neglected they are. The capital letters in "UNUTTERABLY IGNORANT" work like shouting and make the point unforgettable. He speaks straight to the reader ("This, Reader") and says these children had in them "the elements of men as good as you or I". He blames the country, not the children, for "the frightful neglect by the State", and his last sentence, "I made the attempt; and have heard no more of the subject from that hour", shows that the Government ignored him.',
              'Grade 6-7':
                'Dickens builds his criticism in three stages: he shows the reader the children, insists that they could have been anyone\'s, and then names who is to blame. The description of the room moves quickly from the physical ("so foul and stifling") to the moral, and the long third sentence piles up the boys\' trades and sleeping places - "sellers of fruit, herbs, lucifer-matches, flints; sleepers under the dry arches of bridges; young thieves and beggars" - before a run of harsh adjectives, "low-browed, vicious, cunning, wicked". The sentence could seem to condemn the boys, but it ends "abandoned of all help but this; speeding downward to destruction; and UNUTTERABLY IGNORANT": the capitals move the charge from what the boys are to what nobody has taught them. The next paragraph turns on the reader. "This, Reader" is a direct appeal, the repeated "in sample of a Multitude" makes one room stand for thousands of children, and the parenthesis "(oh, think of this, and think of them!)" breaks into the formal sentence with feeling. The argument is that any child, "however lofty his degree", would end the same way "if, at its birth, it were consigned to such an infancy and nurture". Dickens then attacks the institutions directly. The bitter parenthesis "being so discarded by all social teachers but the gaoler and the hangman" says that the only lessons society gives these children are prison and execution, and the last paragraph names "the frightful neglect by the State of those whom it punishes so constantly, and whom it might, as easily and less expensively, instruct and save". Setting "punishes" against "instruct and save" makes the neglect sound both cruel and foolish, and the flat final sentence, in which he "made the attempt" and has "heard no more of the subject from that hour", lets the Government\'s silence condemn itself.',
            },
            markScheme: [
              'Analyses language with specific examples from Source B',
              'Comments on effects of irony, imagery and word choice',
              'Considers how language conveys criticism',
              'Top band: sophisticated, perceptive analysis',
            ],
          },
          {
            id: 'edexcel-p2-03-q4',
            questionNumber: 4,
            questionText:
              'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different perspectives on the ways education fails children.\n\nIn your answer, you could:\n- compare their different perspectives\n- compare the methods they use to convey their perspectives\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${E03_SOURCE_A}\n\nSource B:\n${E03_SOURCE_B}`,
            extractSource: `Source A: ${E03_SOURCE_A_REF} | Source B: ${E03_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers think education is failing children. Evans argues that "We are testing our children to destruction" with too many exams, while Dickens describes poor boys in London who have had almost no education at all and are "UNUTTERABLY IGNORANT". Evans uses statistics, such as "over seventy formal assessments", to prove her point, while Dickens uses shocking description of a "crowd of boys" in a stifling room. Both writers blame the system rather than the children: Evans says the system is "burning through its most valuable resource", and Dickens blames "the frightful neglect by the State". Both also believe that teaching can help: Evans describes a boy who "devoured an entire novel in a weekend", and Dickens says the State could "instruct and save" these children instead of punishing them. The main difference is that Evans writes about too much testing, while Dickens writes about children with almost no schooling at all.',
              'Grade 6-7':
                'Evans and Dickens, writing about 180 years apart, both accuse the education of their day of failing the children it should serve, but they describe opposite failures. For Evans the fault is too much of the wrong kind of schooling: "We are testing our children to destruction". For Dickens the fault is almost no schooling at all: the boys he sees are "abandoned of all help but this" and "UNUTTERABLY IGNORANT". Both writers blame the system, not the child. Evans turns the language of efficiency against itself ("extraordinarily efficient at producing data and extraordinarily inefficient at producing curious, resilient, creative human beings"); Dickens turns the language of justice against the State, which "punishes so constantly" the children it "might, as easily and less expensively, instruct and save". Both arguments rest on waste. Their methods differ with their positions. Evans writes from inside the system, as a teacher of "twenty-two years", and moves from statistics to moments of learning that "no mark scheme could capture". Dickens writes as a witness from outside, and his method is description followed by direct appeal: the list of the boys\' trades, the capitals of "UNUTTERABLY IGNORANT", then "This, Reader" and the insistence that any child, "however lofty his degree", would be the same if brought up as they were. Both writers find hope in teaching itself, Evans in the teacher who had chosen "exactly the right one", Dickens in the Ragged School that is the boys\' only help, but they end differently. Evans ends with those moments of real learning, implying that the system could make room for them. Dickens ends with official silence: he tried to bring the schools to the Government\'s notice and has "heard no more of the subject from that hour". Evans wants a system reformed; Dickens is asking for the poorest children to be taught at all.',
            },
            markScheme: [
              'Compares perspectives throughout with sustained engagement',
              'Analyses methods from both sources with examples',
              'Identifies and explores similarities and differences',
              'Top band: perceptive, conceptualised comparative analysis',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-03-writing',
        title: 'Section B: Transactional Writing',
        description:
          'You are advised to spend about 50 minutes on this section. Answer BOTH questions.',
        totalMarks: 28,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'edexcel-p2-03-q5',
            questionNumber: 5,
            questionText:
              'Your headteacher has asked students for their views on whether homework should be abolished.\n\nWrite a letter to your headteacher in which you argue your point of view.\n\n(8 marks for content / 4 marks for SPaG)',
            marks: 12,
            suggestedTimeMinutes: 20,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear formal letter with: appropriate conventions; a sustained argument with supporting reasons; some persuasive techniques; generally accurate SPaG.',
              'Grade 6-7':
                'A well-crafted formal letter with: confident, respectful register; balanced argument acknowledging both sides; effective use of evidence and personal experience; accurate and varied SPaG.',
              'Grade 8-9':
                'An assured letter with: sophisticated argument that reframes the debate; distinctive voice balancing deference with conviction; ambitious vocabulary and syntax; technical excellence.',
            },
            markScheme: [
              'Content (8 marks): Purpose, audience, form, register, organisation',
              'SPaG (4 marks): Sentence demarcation, punctuation, spelling, sentence variety',
            ],
          },
          {
            id: 'edexcel-p2-03-q6',
            questionNumber: 6,
            questionText:
              '"Exams are the fairest way to assess students." Write an article for a broadsheet newspaper in which you argue for or against this view.\n\n(12 marks for content / 4 marks for SPaG)',
            marks: 16,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear article with: appropriate form features; sustained argument with reasons and examples; awareness of audience; generally accurate SPaG.',
              'Grade 6-7':
                'A compelling article with: distinctive voice; well-structured argument using evidence, example and counter-argument; structural variety; accurate and ambitious SPaG.',
              'Grade 8-9':
                'An outstanding article with: authoritative journalistic voice; sophisticated argument exploring fairness, equity and assessment philosophy; compelling rhetoric; technical virtuosity.',
            },
            markScheme: [
              'Content (12 marks): Communication, register, form, organisation',
              'SPaG (4 marks): Sentence demarcation, punctuation range, spelling, sentence variety',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 04: Technology
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p2-04',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-Fiction and Transactional Writing',
    subtitle: 'English Language 1EN0/02',
    code: '1EN0/02',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p2-04-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${E04_SOURCE_A_REF}\nSource B: ${E04_SOURCE_B_REF}\n\n${E04_SOURCE_B_GLOSSARY}`,
        totalMarks: 36,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-p2-04-q1',
            questionNumber: 1,
            questionText:
              'Read again Source A, lines 1-8.\n\nChoose four statements below which are TRUE.\n\nA) AI will definitely take your job.\nB) The writer delivers this message to audiences across the country.\nC) Audiences respond with only relief.\nD) AI is a single technology.\nE) AI capabilities are being integrated unevenly.\nF) A radiologist using AI can process three times as many scans.\nG) A lawyer using AI completes document review more slowly.\nH) These professionals have been amplified, not replaced.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${E04_SOURCE_A}\n\nSource B:\n${E04_SOURCE_B}`,
            extractSource: `Source A: ${E04_SOURCE_A_REF} | Source B: ${E04_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'B, E, F, H - B: "I deliver to audiences across the country." E: "being integrated, unevenly and unpredictably." F: "can process three times as many scans." H: "They have been amplified."',
              'Grade 6-7':
                'B, E, F, H - A is false ("Artificial intelligence will not take your job"). C is false (a "mixture of relief and anxiety"). D is false ("not a single technology but a constellation"). G is false ("can complete in hours what previously took weeks").',
            },
            markScheme: ['1 mark per correct answer, maximum 4'],
          },
          {
            id: 'edexcel-p2-04-q2',
            questionNumber: 2,
            questionText:
              "You need to refer only to Source A for this question.\n\nHow does the writer use language to present a balanced argument about artificial intelligence?\n\nYou could include the writer's choice of:\n- words and phrases\n- language features and techniques\n- sentence forms.",
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${E04_SOURCE_A}`,
            extractSource: E04_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer opens with a bold statement - "Artificial intelligence will not take your job" - that grabs the reader\'s attention. But it is immediately followed by a warning: "someone who knows how to use artificial intelligence will." This two-sentence structure creates a surprising twist. The metaphor "constellation of capabilities" makes AI sound vast and complex, like the night sky. The writer uses concrete examples (radiologists, lawyers) to make the argument feel real. The rhetorical questions "what happens to the other two?" and "where do the fifteen go?" force the reader to think about the human consequences.',
              'Grade 6-7':
                'Chen constructs balance through a deliberately binary rhetorical architecture. The opening two sentences establish the argumentative method: the first ("will not take your job") reassures; the second ("someone who knows how to use artificial intelligence will") destabilises. This claim-and-qualify structure operates throughout the piece. The metaphor "constellation of capabilities" replaces the monolithic popular image of AI with something distributed and complex; "unevenly and unpredictably" further resists simplification. The examples of radiologists and lawyers are strategically chosen: both are high-status, highly-skilled professions, implicitly arguing that AI disruption is not limited to manual labour. The verb "amplified" is carefully chosen - it retains human agency (the professional is still the primary actor) while acknowledging technological enhancement. The rhetorical pivot in the final paragraph deploys paired structures that refuse to allow one perspective without the other: "the efficiency gains are real, but so are the human costs." The anaphoric "We cannot... We cannot..." insists on dual awareness, while the concluding image - "the people it leaves behind" - gives displacement a human face with quiet emotional force.',
            },
            markScheme: [
              'Identifies language techniques with examples from Source A',
              'Analyses effects of specific word choices and structures',
              'Comments on how language creates balance and nuance',
              'Top band: perceptive, conceptualised analysis',
            ],
          },
          {
            id: 'edexcel-p2-04-q3',
            questionNumber: 3,
            questionText:
              'You need to refer only to Source B for this question.\n\nHow does the writer use language to convey the effects of factory work on Bessy and other working people?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source B:\n${E04_SOURCE_B}`,
            extractSource: E04_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5':
                'Gaskell shows the effects of factory work through Bessy\'s own words. Bessy explains that "the fluff got into my lungs, and poisoned me", and the verb "poisoned" makes the factory sound deadly. Her description of the cotton, which fills the air "till it looks all fine white dust", sounds almost pretty, which makes the harm worse. Gaskell writes Bessy\'s speech in dialect to show that she is a real working girl from the mill town. The details "coughing and spitting blood" are shocking. Bessy explains that a wheel could "carry off th\' dust" but that it "brings in no profit", so few masters put one in, which shows that money matters more than workers\' health. She says she will never get "the whirr" of the machines out of her ears. At the end Margaret learns that Bessy is "Nineteen, come July", the same age as herself, and she cannot speak "for the emotion she was trying to keep down", which makes the reader feel the unfairness too.',
              'Grade 6-7':
                'Gaskell lets a worker describe the damage in her own voice, and the plainness of that voice is the source of its force. Bessy\'s first account is brief and literal: "the fluff got into my lungs, and poisoned me". The verb "poisoned" turns an ordinary by-product of cotton into something deadly, and when Margaret echoes "Fluff?" the soft, almost comic word is made to carry a death sentence. Bessy\'s description, "Little bits, as fly off fro\' the cotton... and fill the air till it looks all fine white dust", has a strange beauty, which makes the next sentence harder to read: carding-room workers fall "into a waste, coughing and spitting blood". Her dialect marks her as a mill-hand talking to a middle-class listener, and Gaskell gives it the dignity of being believed. The long central speech shows that the harm is not an accident but a matter of money. A wheel "to make a draught, and carry off th\' dust" exists, but it costs "a deal of money" and "brings in no profit", so "it\'s but a few of th\' masters as will put \'em up"; some men dislike it too, because going without the fluff "made \'em hungry" and they wanted higher wages for it. The balanced sentence "So between masters and men th\' wheels fall through" spreads the blame and shows each side\'s short-term interest defeating the remedy. The machines themselves are heard in her fear that she will never "get the whirr out o\' my ears". The ending moves from argument to feeling: "Nineteen, come July" is answered by "And I too am nineteen", and the parallel of two girls of one age, one healthy and one dying, leaves Margaret, and the reader, unable to speak.',
            },
            markScheme: [
              'Analyses language with specific examples from Source B',
              'Comments on effects of vocabulary, imagery and tone',
              'Considers how language conveys suffering and moral argument',
              'Top band: sophisticated, perceptive analysis',
            ],
          },
          {
            id: 'edexcel-p2-04-q4',
            questionNumber: 4,
            questionText:
              'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different perspectives on what industry and new technology cost working people.\n\nIn your answer, you could:\n- compare their different perspectives\n- compare the methods they use to convey their perspectives\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${E04_SOURCE_A}\n\nSource B:\n${E04_SOURCE_B}`,
            extractSource: `Source A: ${E04_SOURCE_A_REF} | Source B: ${E04_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers are worried about what industry and new technology cost working people. Chen writes about artificial intelligence today, and Gaskell, in a novel published in 1855, writes about the cotton mills of her own time. Chen admits that AI has good effects, since professionals "have been amplified", but asks "what happens to the other two?" Gaskell shows the cost more personally, through Bessy, whose lungs have been "poisoned" by the cotton fluff. Both writers show that money is part of the problem: Chen says "the efficiency gains are real, but so are the human costs", and Bessy says that the wheel which would clear the dust "brings in no profit", so the masters will not put it in. Chen uses examples and rhetorical questions, while Gaskell uses a conversation written in dialect. Chen\'s tone is balanced and thoughtful, while Gaskell\'s is sad and personal.',
              'Grade 6-7':
                'Chen and Gaskell both ask who pays for the gains of industry and technology, but one answers with an argument and the other with a person. Chen writes as an expert addressing "audiences across the country": his method is claim and counter-claim, from "will not take your job" to "someone who knows how to use artificial intelligence will", and his displaced workers are figures in a calculation, "the other two" radiologists and "the fifteen" lawyers. Gaskell\'s cost has a name and an age. Bessy, "Nineteen, come July", describes in her own dialect how the fluff "got into my lungs, and poisoned me", and the detail of workers "coughing and spitting blood" gives the human cost a body that Chen\'s examples lack. Yet the two texts reach a similar diagnosis. Chen warns that "the efficiency gains are real, but so are the human costs" and that "We cannot celebrate the productivity while ignoring the displacement"; Bessy explains that the wheel which would clear the dust "brings in no profit", so few masters install it, and "between masters and men th\' wheels fall through". In both, the gains are counted and the costs fall on the workers. The difference is in how each writer asks the reader to respond. Chen ends with a demand for honesty: "any honest conversation about AI must reckon with both". Gaskell ends with silence: Margaret, nineteen too, cannot speak "for the emotion she was trying to keep down". Chen asks us to think clearly; Gaskell makes us feel what the thinking is about.',
            },
            markScheme: [
              'Compares perspectives from both sources throughout',
              'Analyses methods with specific examples from both texts',
              'Explores how context shapes perspective and method',
              'Top band: perceptive, sustained comparative analysis',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-04-writing',
        title: 'Section B: Transactional Writing',
        description:
          'You are advised to spend about 50 minutes on this section. Answer BOTH questions.',
        totalMarks: 28,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'edexcel-p2-04-q5',
            questionNumber: 5,
            questionText:
              'A technology company has invited young people to contribute to a report on how AI is changing education.\n\nWrite a report in which you explain the advantages and disadvantages of AI in the classroom.\n\n(8 marks for content / 4 marks for SPaG)',
            marks: 12,
            suggestedTimeMinutes: 20,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear report with: appropriate form features (title, subheadings, formal register); balanced coverage of advantages and disadvantages; some use of evidence or examples; generally accurate SPaG.',
              'Grade 6-7':
                'A well-crafted report with: professional format and register; balanced, evidence-informed discussion; clear recommendations; accurate and varied SPaG.',
              'Grade 8-9':
                'An assured report with: authoritative professional voice; nuanced analysis that avoids simplistic binary; strategic recommendations; ambitious vocabulary and syntax; technical excellence.',
            },
            markScheme: [
              'Content (8 marks): Purpose, audience, form, register, organisation',
              'SPaG (4 marks): Sentence demarcation, punctuation, spelling, sentence variety',
            ],
          },
          {
            id: 'edexcel-p2-04-q6',
            questionNumber: 6,
            questionText:
              '"Technology connects us to information but disconnects us from each other." Write an article for a magazine aimed at young adults in which you explore this idea.\n\n(12 marks for content / 4 marks for SPaG)',
            marks: 16,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear article with: appropriate form features; sustained exploration of the idea; personal voice and examples; generally accurate SPaG.',
              'Grade 6-7':
                'A compelling article with: engaging voice appropriate for young adult audience; nuanced exploration that avoids simplistic agreement or disagreement; effective use of anecdote and evidence; accurate and varied SPaG.',
              'Grade 8-9':
                'An outstanding article with: distinctive, witty voice; sophisticated argument that interrogates the premise; ambitious structural choices; compelling rhetoric; technical virtuosity.',
            },
            markScheme: [
              'Content (12 marks): Communication, register, form, organisation',
              'SPaG (4 marks): Sentence demarcation, punctuation range, spelling, sentence variety',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 05: Nature
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p2-05',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-Fiction and Transactional Writing',
    subtitle: 'English Language 1EN0/02',
    code: '1EN0/02',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p2-05-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${E05_SOURCE_A_REF}\nSource B: ${E05_SOURCE_B_REF}\n\n${E05_SOURCE_B_GLOSSARY}`,
        totalMarks: 36,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-p2-05-q1',
            questionNumber: 1,
            questionText:
              'Read again Source A, lines 1-8.\n\nChoose four statements below which are TRUE.\n\nA) Peregrine falcons nested on a church roof.\nB) A webcam was installed within days.\nC) Thousands of people followed the nesting season.\nD) The falcons are the slowest animal on earth.\nE) The peregrine falcon is the fastest animal on earth.\nF) The chicks were raised on a concrete ledge.\nG) No one watched the webcam at night.\nH) No one noticed when one of the chicks teetered on the edge.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${E05_SOURCE_A}\n\nSource B:\n${E05_SOURCE_B}`,
            extractSource: `Source A: ${E05_SOURCE_A_REF} | Source B: ${E05_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'B, C, E, F - B: "a webcam had been installed." C: "thousands of people... were following." E: "the fastest animal on earth." F: "choosing to raise its young on a concrete ledge."',
              'Grade 6-7':
                'B, C, E, F - A is false (multi-storey car park, not a church). D is false (fastest, not slowest). G is false ("insomniacs watching at 3am"). H is false (when a chick teetered on the edge, "the entire internet held its breath").',
            },
            markScheme: ['1 mark per correct answer, maximum 4'],
          },
          {
            id: 'edexcel-p2-05-q2',
            questionNumber: 2,
            questionText:
              "You need to refer only to Source A for this question.\n\nHow does the writer use language to explore the relationship between humans and urban wildlife?\n\nYou could include the writer's choice of:\n- words and phrases\n- language features and techniques\n- sentence forms.",
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${E05_SOURCE_A}`,
            extractSource: E05_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer creates a sense of wonder through language. The phrase "the fastest animal on earth" choosing a "pay-and-display car park" creates a contrast between the wild and the ordinary that is both funny and amazing. The comparison to "reality television" suggests humans are treating nature as entertainment. The list of people watching - "office workers, schoolchildren, pensioners, insomniacs" - shows how many different people were engaged. The phrase "the entire internet held its breath" is personification and hyperbole, showing the excitement. But the final paragraph changes tone with statistics about decline: "75%... one in six... 50%" - the numbers feel relentless and depressing.',
              'Grade 6-7':
                'Barker constructs a deliberately two-movement piece whose structure enacts its argument: celebration followed by uncomfortable truth. The opening anecdote is presented through the vocabulary of social media culture - "webcam," "Twitter account" - implicitly questioning whether our engagement with nature has become mediated through technology. The catalogue of watchers ("office workers, schoolchildren, pensioners, insomniacs watching at 3am") is both celebratory and faintly absurd, the specificity of "3am" suggesting obsession as much as wonder. The comparison to "reality television" is strategically ambivalent: it could indicate genuine public enthusiasm, or it could imply that nature has been reduced to entertainment. The anaphoric "Perhaps it was" structure defers definitive explanation, enacting the writer\'s own uncertainty about what the falcons represent. The rhetorical pivot - "But I wonder whether our enthusiasm for urban wildlife is, in part, a way of avoiding the harder truth" - is devastating in its quietness: "I wonder" is more damaging than "I believe" because it invites complicity rather than resistance. The closing statistics (75%, one in six, 50%) arrive in three short declarative sentences, a relentless series that mirrors ecological decline, while the parenthetical aside about the hedgehog - "once so common it was a nuisance" - uses bathos to measure loss through the mundane rather than the spectacular.',
            },
            markScheme: [
              'Identifies language features with specific examples',
              'Analyses effects of tone, imagery and structure',
              'Comments on how language explores the central tension',
              'Top band: perceptive, conceptualised analysis',
            ],
          },
          {
            id: 'edexcel-p2-05-q3',
            questionNumber: 3,
            questionText:
              'You need to refer only to Source B for this question.\n\nHow does the writer use language to convey the wonder of the natural world?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source B:\n${E05_SOURCE_B}`,
            extractSource: E05_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5':
                'White shows his fascination with the swallow through careful, admiring description. He begins "Wonderful is the address which this adroit bird shows", putting "Wonderful" first to show his amazement at how skilfully the bird flies up and down a narrow chimney. He uses a simile, "a rumbling like thunder", for the sound of her wings in the chimney. He describes the young birds step by step, as they become "perchers" and then "flyers", which makes their growing up sound like stages in a child\'s life. He says the young bird makes "a little quick note of gratitude and complacency", giving it human feelings. He calls the swallow "a most instructive pattern of unwearied industry and affection", which suggests that people could learn from how hard she works for her family. The comparison with the "watch-case" shows how closely he has listened.',
              'Grade 6-7':
                'White conveys the wonder of nature through patient, exact observation, and his language moves between a scientist\'s precision and an admirer\'s delight. The inverted opening, "Wonderful is the address which this adroit bird shows", puts his response first and the evidence second; "address" (skill) and "adroit" treat the swallow as an expert craftsman. Precise sound imagery follows: as she hovers over the mouth of the funnel, the vibrations of her wings on the confined air "occasion a rumbling like thunder", a simile that lets a small bird fill a chimney with noise. White reasons as well as describes, and "It is not improbable that" is a careful scientist\'s way of offering an explanation (safety from owls) without overclaiming. The account of the young birds is a sequence - "first", "for a day or so", "In a day or two more" - with the new names "perchers" and "flyers", so that growing up becomes a series of stages, and the feeding in mid-air is described like a ceremony: "at a certain signal given, the dam and the nestling advance, rising towards each other, and meeting at an angle". The human vocabulary is deliberate. The nestling utters "a little quick note of gratitude and complacency", and the swallow is "a most instructive pattern of unwearied industry and affection", a phrase that holds up a bird as a moral model for a human family. White also turns to the reader: "a person must have paid very little regard to the wonders of nature that has not often remarked this feat" suggests that attention to nature is almost a duty, and that anyone who has missed this has missed something. The closing simile of a snap "resembling the noise at the shutting of a watch-case" brings the wild bird into the domestic world of the reader and shows how closely he has listened.',
            },
            markScheme: [
              'Analyses language with specific examples from Source B',
              'Comments on effects of personification, imagery and tone',
              'Considers how language conveys wonder and admiration',
              'Top band: sophisticated, perceptive analysis of language choices',
            ],
          },
          {
            id: 'edexcel-p2-05-q4',
            questionNumber: 4,
            questionText:
              'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different perspectives on the relationship between humans and the natural world.\n\nIn your answer, you could:\n- compare their different perspectives\n- compare the methods they use to convey their perspectives\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${E05_SOURCE_A}\n\nSource B:\n${E05_SOURCE_B}`,
            extractSource: `Source A: ${E05_SOURCE_A_REF} | Source B: ${E05_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers describe birds that live alongside people. Barker writes about peregrine falcons nesting "on the roof of a multi-storey car park", and White writes about swallows nesting in chimneys, whose young "often fall down into the rooms below". Both writers show that people are fascinated by birds: "thousands of people" followed the falcons on a webcam, and White says that anyone who has not noticed the swallows feeding "must have paid very little regard to the wonders of nature". However, Barker is worried: he thinks our love of urban wildlife may hide the "catastrophic decline" of nature. White is calm and admiring, calling the swallow "a most instructive pattern of unwearied industry and affection". Barker uses statistics to shock the reader, while White uses close description and similes, such as "a rumbling like thunder".',
              'Grade 6-7':
                'Barker and White both write about wild birds raising their young among human buildings, peregrines on "a concrete ledge above a pay-and-display car park" and swallows in a chimney shaft whose young "often fall down into the rooms below", but their relationships with nature differ. Barker\'s is mediated and public: the falcons are watched through a webcam by "thousands of people", and the comparison with "reality television" leaves it unclear whether we are wondering at nature or consuming it as entertainment. White\'s is direct and private: he writes from his own watching, and the feeding of the young in mid-air is a "feat" he expects any attentive person to have "often remarked". Their methods follow. Barker writes in the language of media and data, ending with a run of losses ("75%", "One in six", "50%"). White writes in the language of observation, sequence and comparison ("perchers", "flyers", "a rumbling like thunder") and in a moral vocabulary that makes the swallow "a most instructive pattern of unwearied industry and affection". Both writers imply that paying attention to nature is a test of character. White says that anyone who has missed the swallows\' feeding "must have paid very little regard to the wonders of nature"; Barker wonders whether our enthusiasm for urban wildlife is "a way of avoiding the harder truth". The deepest difference is their sense of the future. White describes the swallow\'s habits in a timeless present tense ("The swallow lays from four to six white eggs"), as though they will go on for ever; Barker writes about a natural world in "catastrophic decline". Read alongside Barker, White\'s calm confidence becomes a reminder of what is at stake.',
            },
            markScheme: [
              'Compares perspectives from both sources throughout',
              'Analyses methods with specific examples from both texts',
              'Explores how context shapes perspective',
              'Top band: perceptive, sustained comparative analysis',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-05-writing',
        title: 'Section B: Transactional Writing',
        description:
          'You are advised to spend about 50 minutes on this section. Answer BOTH questions.',
        totalMarks: 28,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'edexcel-p2-05-q5',
            questionNumber: 5,
            questionText:
              'Your school or college is planning to create a wildlife garden on the school grounds.\n\nWrite a speech to be delivered at a school assembly in which you persuade students and staff to support this project.\n\n(8 marks for content / 4 marks for SPaG)',
            marks: 12,
            suggestedTimeMinutes: 20,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear speech with: appropriate direct address; sustained persuasive argument with reasons; some rhetorical devices; generally accurate SPaG.',
              'Grade 6-7':
                'A well-crafted speech with: engaging, enthusiastic address; persuasive techniques including counter-argument and emotional appeal; effective use of evidence and example; accurate and varied SPaG.',
              'Grade 8-9':
                'An assured, compelling speech with: commanding rhetorical strategy connecting the local project to broader environmental themes; distinctive voice; ambitious language; technical excellence.',
            },
            markScheme: [
              'Content (8 marks): Purpose, audience, form, register, organisation',
              'SPaG (4 marks): Sentence demarcation, punctuation, spelling, sentence variety',
            ],
          },
          {
            id: 'edexcel-p2-05-q6',
            questionNumber: 6,
            questionText:
              '"We have lost our connection with the natural world, and we are poorer for it." Write an article for a broadsheet newspaper in which you argue for or against this view.\n\n(12 marks for content / 4 marks for SPaG)',
            marks: 16,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear article with: appropriate form features; sustained argument with personal examples and wider evidence; generally accurate SPaG.',
              'Grade 6-7':
                'A compelling article with: distinctive voice; well-structured argument combining personal reflection with broader social and environmental commentary; effective counter-argument; accurate and varied SPaG.',
              'Grade 8-9':
                'An outstanding article with: assured, literary voice; sophisticated argument interrogating definitions of "connection" and "nature"; ambitious structural choices; compelling rhetoric; technical virtuosity.',
            },
            markScheme: [
              'Content (12 marks): Communication, register, form, organisation',
              'SPaG (4 marks): Sentence demarcation, punctuation range, spelling, sentence variety',
            ],
          },
        ],
      },
    ],
  },
]
