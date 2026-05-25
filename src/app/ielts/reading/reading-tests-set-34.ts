// ─── IELTS Academic Reading - practice item bank (Set 34) ──────────────────
// ORIGINAL content written for The English Hub. These passages and questions are
// invented purely to practise the Academic Reading question formats. They are
// NOT reproductions of any official IELTS past paper, and no official
// affiliation is implied. Academic track. Topic domains: glaciers and climate /
// spider silk and biomaterials / the history of the postal system.
//
// This test is MATCHING-RICH. It contains four matching questions across four
// different variants: Matching Headings (Passage 1), Matching Information /
// which-paragraph (Passage 2), Matching Features - statements to figures
// (Passage 3) and Matching Sentence Endings (Passage 3), alongside the usual
// mix of True/False/Not Given, multiple choice and sentence/summary completion.
//
// One complete, carefully-checked test: 3 passages, 40 marks (each matching item
// counts as one mark). Every answer is verifiable from the passage text and is
// justified in the explanation. Marks: P1 = 6 (matching) + 7 = 13; P2 = 5
// (matching) + 8 = 13; P3 = 5 (features) + 4 (endings) + 5 = 14. Total = 40.
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const READING_SET_34: ReadingTest[] = [
  {
    id: 'rd-academic-034',
    title: 'Academic Reading - Practice Test 34',
    track: 'academic',
    estimatedMinutes: 60,
    passages: [
      // ───────────────────────────── PASSAGE 1 ─────────────────────────────
      {
        id: 'rd-academic-034-p1',
        title: 'Rivers of Ice',
        body: `A glacier looks, at a glance, like the very emblem of stillness: a vast, frozen mass slumped between mountains, seemingly fixed for ever. The reality is almost the opposite. A glacier is a slow river of ice, born from snow, kept alive by snow, and forever creeping downhill under its own enormous weight. It is also one of the most faithful recorders of the planet's past that science has ever found, and at the same time one of the clearest warning signs of how that planet is now changing. To understand both roles, it helps to begin where every glacier begins, with a single falling snowflake.

Where more snow falls in winter than melts in summer, the surplus does not simply pile up loosely year after year. The weight of each new layer presses down on those beneath, squeezing out the trapped air and welding the delicate crystals together. Loose snow first becomes a granular, half-compacted material, and then, as the burden above grows, it is transformed into dense glacial ice. This whole upper region, where snow accumulates and is slowly converted, is known as the accumulation zone. Only when the ice has grown thick enough does the next remarkable thing happen: the glacier begins to move.

Movement comes about in two distinct ways, and the balance between them shapes the character of a glacier. The first is internal flow. Ice, for all its apparent rigidity, behaves over long periods rather like an extremely stiff fluid; under the immense pressure of its own mass the crystals slide and deform, and the whole body oozes gradually downslope. The second mechanism is basal sliding, in which the entire glacier slips over its bed, lubricated by a thin film of meltwater at its base. A cold glacier frozen firmly to the rock beneath it moves almost entirely by internal flow and creeps along very slowly; a warmer glacier with water at its base can slide far more quickly. Either way the motion is usually measured in metres per year, although a few unstable glaciers occasionally lurch forward in sudden bursts called surges.

As the ice travels downhill it eventually reaches lower, warmer ground where more melts away each year than is replaced. This lower region is called the ablation zone, and the imaginary line dividing it from the accumulation zone above is the point where, over a year, gain and loss exactly balance. The position of that line is the simplest measure of a glacier's health. When snowfall is plentiful and summers are cool the line sits low and the glacier may advance; when summers warm and snows fail the line climbs the mountain, more ice is lost than gained, and the glacier retreats. A glacier does not flow backwards when it retreats; the ice still moves downhill, but its lower end melts back faster than new ice arrives.

This is where the glacier's second role, as an archive, becomes precious. Because the ice in the accumulation zone is built up layer by layer, each year's snowfall traps a sample of the atmosphere of its time: dust, ash, pollen, and tiny bubbles of the very air that was present when the snow fell. By drilling down and extracting a long cylinder of ice, a core, researchers can read these layers in sequence, much as one reads the rings of a tree. The deepest cores recovered from the great ice sheets reach back hundreds of thousands of years. The trapped bubbles allow scientists to measure directly how the concentration of gases in the ancient atmosphere rose and fell, while the chemistry of the ice itself records the temperature at which each layer formed. No other natural record offers so direct a window onto the climate of the distant past.

The same sensitivity that makes glaciers superb recorders also makes them vulnerable, and across most of the world they are now shrinking. The consequences reach far beyond the mountains themselves. Many great rivers are fed in part by glacial meltwater, which acts as a natural reservoir, releasing water steadily through the dry season after the winter snows have gone; as the glaciers dwindle, that buffer weakens, threatening the water supply of communities far downstream. Meltwater from the vast ice sheets of Greenland and Antarctica, meanwhile, runs into the oceans and adds to a slow but relentless rise in sea level. The frozen rivers that seem so permanent are, in truth, among the most responsive features of the entire planet, and their quiet retreat is one of the plainest signals that the climate is warming.`,
        questions: [
          // ── Matching Headings (6 items, 8 options → 2 distractors) = 6 marks ──
          {
            id: 'rd-034-p1-q1',
            type: 'matching',
            variant: 'headings',
            prompt:
              'The passage has six paragraphs, A-F. Choose the correct heading for each paragraph from the list of headings below. There are more headings than paragraphs, so you will not use them all. Write the correct number (i-viii) for each paragraph.',
            options: [
              { key: 'i', label: 'The two ways a glacier moves' },
              { key: 'ii', label: 'From snowflake to solid ice' },
              { key: 'iii', label: 'Shrinking glaciers and their wider effects' },
              { key: 'iv', label: 'Not as still as it seems' },
              { key: 'v', label: 'How glaciers were first discovered and named' },
              { key: 'vi', label: 'Reading the climate of the past in the ice' },
              { key: 'vii', label: 'The balance point that marks a glacier’s health' },
              { key: 'viii', label: 'Using ice to generate clean electricity' },
            ],
            items: [
              { id: 'p1-h-a', text: 'Paragraph A', answer: 'iv' },
              { id: 'p1-h-b', text: 'Paragraph B', answer: 'ii' },
              { id: 'p1-h-c', text: 'Paragraph C', answer: 'i' },
              { id: 'p1-h-d', text: 'Paragraph D', answer: 'vii' },
              { id: 'p1-h-e', text: 'Paragraph E', answer: 'vi' },
              { id: 'p1-h-f', text: 'Paragraph F', answer: 'iii' },
            ],
            explanation:
              'A argues a glacier "looks... like the very emblem of stillness" but "the reality is almost the opposite" (iv). B traces snow being squeezed and "transformed into dense glacial ice" (ii). C describes the "two distinct ways" of movement - internal flow and basal sliding (i). D introduces the ablation zone and the balance line that is "the simplest measure of a glacier\'s health" (vii). E explains ice cores as a layered archive of past climate (vi). F covers shrinking glaciers and their effects on rivers and sea level (iii). Heading v (discovery and naming) and heading viii (generating electricity) are distractors never discussed.',
          },
          {
            id: 'rd-034-p1-q2',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The upper region of a glacier, where snow gathers and is slowly turned into ice, is known as the _______ zone.',
            acceptableAnswers: ['accumulation'],
            explanation:
              'Paragraph B states that the region "where snow accumulates and is slowly converted, is known as the accumulation zone." The required word is "accumulation".',
          },
          {
            id: 'rd-034-p1-q3',
            type: 'mcq',
            prompt:
              'According to paragraph C, how does a cold glacier that is frozen firmly to the rock beneath it move?',
            options: [
              'Mainly by sliding rapidly over a film of meltwater at its base',
              'Almost entirely by the internal flow of its deforming ice, and only slowly',
              'Chiefly through sudden forward bursts known as surges',
              'It does not move at all until the surrounding air warms',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph C says "A cold glacier frozen firmly to the rock beneath it moves almost entirely by internal flow and creeps along very slowly." Option B matches; basal sliding (option A) is described as the mechanism of warmer glaciers instead.',
          },
          {
            id: 'rd-034-p1-q4',
            type: 'tfng',
            prompt: 'When a glacier retreats, the ice within it begins to flow back uphill.',
            answer: 'false',
            explanation:
              'Paragraph D states that "A glacier does not flow backwards when it retreats; the ice still moves downhill, but its lower end melts back faster than new ice arrives." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-034-p1-q5',
            type: 'mcq',
            prompt: 'Why are the air bubbles trapped in glacial ice valuable to scientists?',
            options: [
              'They show how quickly a glacier is currently moving downhill',
              'They allow direct measurement of the gases present in the ancient atmosphere',
              'They reveal the depth at which a glacier is frozen to its bed',
              'They are used to date the surrounding rock rather than the ice',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph E says "The trapped bubbles allow scientists to measure directly how the concentration of gases in the ancient atmosphere rose and fell." Option B matches.',
          },
          {
            id: 'rd-034-p1-q6',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Researchers study past climate by drilling out a long cylinder of ice, called a _______, and reading its layers in sequence.',
            acceptableAnswers: ['core'],
            explanation:
              'Paragraph E describes "extracting a long cylinder of ice, a core," whose layers can be read in sequence. The required word is "core".',
          },
          {
            id: 'rd-034-p1-q7',
            type: 'tfng',
            prompt:
              'Glacial meltwater helps to maintain the flow of some major rivers during the dry season.',
            answer: 'true',
            explanation:
              'Paragraph F says glacial meltwater "acts as a natural reservoir, releasing water steadily through the dry season after the winter snows have gone." This supports the statement, so it is True.',
          },
          {
            id: 'rd-034-p1-q8',
            type: 'tfng',
            prompt: 'More of the world’s glaciers are currently growing than are shrinking.',
            answer: 'false',
            explanation:
              'Paragraph F states that "across most of the world they are now shrinking." This contradicts the statement, so it is False.',
          },
        ],
      },
      // ───────────────────────────── PASSAGE 2 ─────────────────────────────
      {
        id: 'rd-academic-034-p2',
        title: 'The Threads a Spider Spins',
        body: `Few materials made by living things have impressed engineers as deeply as the silk of a spider. Gram for gram, the dragline silk that forms the spokes and frame of an orb web is tougher than almost anything humans manufacture. It can absorb a great deal of energy before it breaks, combining a strength that rivals high-grade steel with an elasticity that lets it stretch and recoil without snapping. It performs this trick at ordinary temperatures, using water as its only solvent, and the spider produces it from nothing more exotic than the proteins in its own body. To a chemist accustomed to furnaces, harsh acids and high pressures, that is little short of astonishing.

What gives the silk these qualities is its molecular architecture. The thread is built from large proteins whose chains fold in two contrasting ways. In some regions the chains pack tightly into hard, orderly crystals, and these stiff blocks give the fibre its great strength. Elsewhere the same chains lie in loose, tangled coils, and these flexible stretches allow the thread to extend under load and spring back afterwards. The secret lies not in any single ingredient but in the proportion and arrangement of the two: hard crystals knitted into a soft, yielding matrix, so that the fibre is at once strong and stretchy. It is this combination, rather than sheer hardness, that makes the silk so difficult to break.

Just as remarkable as the material is the way the spider makes it. The silk does not exist as a thread inside the animal; it begins as a watery liquid stored in a gland, a concentrated solution of the silk proteins. As this fluid is drawn through a narrow duct towards the spinning organs, known as spinnerets, its acidity is gradually raised and salts are drawn out of it. These subtle chemical changes, together with the pulling force of the spider's own legs and weight, coax the dissolved proteins to line up and lock together, so that a liquid is converted into a solid fibre at the very moment it leaves the body. The animal is, in effect, an exquisitely controlled spinning machine that works at room temperature and wastes almost nothing.

The appeal of copying such a material is obvious. A fibre as strong, light and tough as spider silk, yet produced without heat or pollution, would be valuable for everything from lightweight cables to protective clothing. The most direct approach, simply farming spiders for their silk as silkworms are farmed, has always failed for a practical reason: spiders are fiercely territorial and cannibalistic, and crowding them together to harvest their threads is impossible. Researchers therefore turned to a different strategy, inserting the genes that carry the instructions for silk proteins into other, more cooperative organisms - bacteria, yeasts and even goats engineered to secrete the proteins in their milk - in the hope of mass-producing the raw material in a tank or a herd rather than from the spiders themselves.

Producing the protein, however, turned out to be only half the battle, and not the harder half. The greater challenge has been spinning it. Having extracted a quantity of silk protein, scientists then have to persuade it to assemble into a fibre as good as the natural one, reproducing outside the body the delicate sequence of chemical and physical changes that the spider performs effortlessly inside its duct. Early artificial threads were brittle and weak, falling far short of the real material, because the proteins did not fold and align in the right way. Progress has been real but slow, and recreating the full toughness of natural dragline silk in the laboratory remains difficult.

Even so, the effort has begun to bear fruit, and the potential rewards keep the work moving forward. Because spider silk is a protein and the body does not reject it, one of the most promising uses lies in medicine: as fine sutures for stitching wounds, as scaffolds on which to grow new tissue, and as supports for repairing damaged nerves. Engineers, meanwhile, are drawn less to any one product than to the underlying lesson. The spider shows that it is possible to make a high-performance material gently, from simple ingredients and at ordinary temperatures, and in an age increasingly anxious about the energy and waste of conventional manufacturing, that lesson may prove more valuable than any single thread.`,
        questions: [
          // ── Matching Information / which-paragraph (5 items) = 5 marks ──
          {
            id: 'rd-034-p2-q1',
            type: 'matching',
            variant: 'information',
            prompt:
              'The passage has six paragraphs, A-F. Which paragraph contains the following information? Write the correct letter, A-F. (You may use any letter more than once, but each statement here is found in only one paragraph.)',
            options: [
              { key: 'A', label: 'Paragraph A' },
              { key: 'B', label: 'Paragraph B' },
              { key: 'C', label: 'Paragraph C' },
              { key: 'D', label: 'Paragraph D' },
              { key: 'E', label: 'Paragraph E' },
              { key: 'F', label: 'Paragraph F' },
            ],
            items: [
              {
                id: 'p2-i-a',
                text: 'the reason why spiders cannot be farmed for their silk in the way silkworms are',
                answer: 'D',
              },
              {
                id: 'p2-i-b',
                text: 'a description of how a liquid inside the spider is turned into a solid thread',
                answer: 'C',
              },
              {
                id: 'p2-i-c',
                text: 'mention of possible medical uses for the silk',
                answer: 'F',
              },
              {
                id: 'p2-i-d',
                text: 'an explanation of how hard crystals and loose coils combine in the fibre',
                answer: 'B',
              },
              {
                id: 'p2-i-e',
                text: 'a comparison between the toughness of silk and that of a familiar manufactured material',
                answer: 'A',
              },
            ],
            explanation:
              'Item a → D: spiders "are fiercely territorial and cannibalistic," so crowding them to harvest threads "is impossible." Item b → C: chemical changes "convert a liquid... into a solid fibre at the very moment it leaves the body." Item c → F: promising uses "in medicine: as fine sutures... scaffolds... and supports for repairing damaged nerves." Item d → B: "hard crystals knitted into a soft, yielding matrix." Item e → A: the silk "rivals high-grade steel."',
          },
          {
            id: 'rd-034-p2-q2',
            type: 'tfng',
            prompt:
              'Spider dragline silk combines great strength with the ability to stretch and recoil.',
            answer: 'true',
            explanation:
              'Paragraph A says the silk combines "a strength that rivals high-grade steel with an elasticity that lets it stretch and recoil without snapping." This supports the statement, so it is True.',
          },
          {
            id: 'rd-034-p2-q3',
            type: 'mcq',
            prompt:
              'According to paragraph B, what is mainly responsible for the silk being so hard to break?',
            options: [
              'The sheer hardness of the crystalline blocks alone',
              'The combination of hard crystals set within a soft, stretchy matrix',
              'The thickness of each individual protein chain',
              'The water that the spider uses as a solvent',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph B states "It is this combination, rather than sheer hardness, that makes the silk so difficult to break," referring to hard crystals knitted into a soft matrix. Option B matches and option A is explicitly rejected.',
          },
          {
            id: 'rd-034-p2-q4',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Inside the spider the silk is stored as a watery liquid in a _______ before it is drawn out and spun.',
            acceptableAnswers: ['gland'],
            explanation:
              'Paragraph C says the silk "begins as a watery liquid stored in a gland, a concentrated solution of the silk proteins." The required word is "gland".',
          },
          {
            id: 'rd-034-p2-q5',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: As the silk fluid is drawn through a narrow duct, its _______ is gradually raised and salts are removed, helping the proteins lock together.',
            acceptableAnswers: ['acidity'],
            explanation:
              'Paragraph C states that as the fluid is drawn through the duct "its acidity is gradually raised and salts are drawn out of it." The required word is "acidity".',
          },
          {
            id: 'rd-034-p2-q6',
            type: 'mcq',
            prompt:
              'Why have researchers tried inserting silk genes into bacteria, yeasts and goats?',
            options: [
              'Because these organisms naturally produce silk of their own',
              'Because spiders cannot be crowded together to harvest their silk',
              'Because the silk of these organisms is stronger than a spider’s',
              'Because spiders refuse to produce silk in captivity at all',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph D explains that because farming spiders is impossible, researchers turned to "more cooperative organisms" to mass-produce the protein "rather than from the spiders themselves." Option B matches.',
          },
          {
            id: 'rd-034-p2-q7',
            type: 'tfng',
            prompt:
              'Scientists have found that spinning the extracted protein into a fibre is harder than producing the protein itself.',
            answer: 'true',
            explanation:
              'Paragraph E states that producing the protein "turned out to be only half the battle, and not the harder half. The greater challenge has been spinning it." This supports the statement, so it is True.',
          },
          {
            id: 'rd-034-p2-q8',
            type: 'tfng',
            prompt:
              'Artificial spider silk is now routinely used to make commercial bridge cables.',
            answer: 'not-given',
            explanation:
              'Paragraph D mentions "lightweight cables" only as a hoped-for application, and paragraph E stresses that recreating the silk "remains difficult." The passage never says artificial silk is used for commercial bridge cables, so there is no information to confirm or contradict the statement, making it Not Given.',
          },
          {
            id: 'rd-034-p2-q9',
            type: 'tfng',
            prompt:
              'Spider silk is suitable for medical use partly because the body does not reject it.',
            answer: 'true',
            explanation:
              'Paragraph F says that "because spider silk is a protein and the body does not reject it," one of its most promising uses lies in medicine. This supports the statement, so it is True.',
          },
        ],
      },
      // ───────────────────────────── PASSAGE 3 ─────────────────────────────
      {
        id: 'rd-academic-034-p3',
        title: 'Carrying the Word',
        body: `The wish to send a message to someone far away is older than writing itself, and the systems built to satisfy it form one of the longest threads in the history of organised society. Long before any public service existed, rulers maintained networks of mounted messengers to carry orders across their territories. The ancient Persian empire was famous for relays of riders posted along the royal roads, each carrying a despatch to the next station and handing it on, so that a message could cross hundreds of miles far faster than any single traveller. The Roman state ran a comparable network of staging posts with fresh horses for official couriers. These systems, however, were the private tools of governments; they existed to serve the ruler, not the ordinary person, and a farmer or a merchant had no right to use them.

For centuries afterwards, sending a letter remained slow, costly and unreliable for everyone else. A traveller or trader might be asked to carry a letter as a favour, and where official posts did open to the public the charges were high and the rules bewildering. In many places the fee was paid not by the sender but by the recipient, and it was reckoned according to the distance the letter had travelled and the number of sheets of paper it contained. The result was a tangle of expensive and inconsistent charges that put regular correspondence beyond the reach of most people, and that encouraged all manner of tricks to dodge the cost.

The change that swept this confusion away came in Britain in 1840, and it is associated above all with a reformer named Rowland Hill. Hill argued that the existing system was self-defeating: the high charges suppressed the volume of post, while the elaborate business of calculating and collecting a different fee for every letter cost more to administer than it was worth. His remedy was radical in its simplicity. There should be a single low charge for an ordinary letter regardless of the distance it travelled within the country, and crucially the fee should be paid in advance by the sender, not on delivery by the recipient. To show that payment had been made, the sender would attach a small printed label to the letter - the adhesive postage stamp, an invention that quickly spread around the world.

The effects of the penny post, as the reform became known, were dramatic. Freed from high and unpredictable charges, ordinary people began to write to one another as never before, and the volume of letters rose enormously within just a few years. Yet handling this flood of mail created a fresh problem of organisation. A letter now had to be gathered, carried, separated according to its destination and finally delivered, and doing this quickly for millions of items demanded a system of its own. Mail was brought to central offices where it was sorted, divided first into broad regions and then into ever finer divisions, before being sent onward in batches towards the addresses for which it was bound. As the volume grew, this sorting became the true bottleneck of the whole enterprise, and over the following century engineers devoted great effort to speeding it up, eventually building machines that could read an address and route a letter automatically.

For a century and a half the letter reigned as the chief means of corresponding at a distance, but in the closing decades of the twentieth century it met a rival it could not outrun. Electronic mail delivered a written message in seconds, at almost no cost and across any distance, and the volume of personal letters, which had climbed for generations, began to fall. The decline was uneven. The carrying of parcels, far from collapsing, was lifted by the rise of online shopping, as goods ordered on a screen still had to be delivered to a physical door. The handwritten personal letter, by contrast, became something close to a rarity. The postal services that survive have had to remake themselves around this new balance, leaning on parcels and official correspondence rather than the private letter that once filled their sacks. The basic human wish that set the messengers riding has not disappeared; it has simply found faster wings.`,
        questions: [
          // ── Matching Features - statements to people/things (5 items) = 5 marks ──
          {
            id: 'rd-034-p3-q1',
            type: 'matching',
            variant: 'features',
            prompt:
              'Look at the following statements and the list of options below. Match each statement to the option it relates to in the passage. Write the correct letter, A, B or C. NB You may use any letter more than once.',
            options: [
              { key: 'A', label: 'The ancient Persian empire' },
              { key: 'B', label: 'Rowland Hill' },
              { key: 'C', label: 'Electronic mail' },
            ],
            items: [
              {
                id: 'p3-f-a',
                text: 'argued that high postal charges actually reduced the amount of post sent.',
                answer: 'B',
              },
              {
                id: 'p3-f-b',
                text: 'used relays of mounted riders posted along royal roads.',
                answer: 'A',
              },
              {
                id: 'p3-f-c',
                text: 'could deliver a written message in seconds at almost no cost.',
                answer: 'C',
              },
              {
                id: 'p3-f-d',
                text: 'proposed that the fee be paid in advance by the sender.',
                answer: 'B',
              },
              {
                id: 'p3-f-e',
                text: 'caused the number of personal letters to begin falling.',
                answer: 'C',
              },
            ],
            explanation:
              'Item a → B (Hill): he "argued that the existing system was self-defeating: the high charges suppressed the volume of post." Item b → A (Persia): "relays of riders posted along the royal roads." Item c → C (email): it "delivered a written message in seconds, at almost no cost." Item d → B (Hill): "the fee should be paid in advance by the sender." Item e → C (email): with it "the volume of personal letters... began to fall."',
          },
          // ── Matching Sentence Endings (4 items) = 4 marks ──
          {
            id: 'rd-034-p3-q2',
            type: 'matching',
            variant: 'endings',
            prompt:
              'Complete each sentence with the correct ending, A-F, from the list below. There are more endings than sentences, so you will not use them all. Write the correct letter, A-F.',
            options: [
              {
                key: 'A',
                label: 'were the private tools of governments, closed to ordinary people.',
              },
              {
                key: 'B',
                label: 'depended on the distance travelled and the number of sheets of paper.',
              },
              { key: 'C', label: 'were delivered free of charge to every household.' },
              { key: 'D', label: 'rose enormously within just a few years.' },
              { key: 'E', label: 'became the main bottleneck as the volume of mail grew.' },
              { key: 'F', label: 'were abandoned once the postage stamp was introduced.' },
            ],
            items: [
              {
                id: 'p3-e-a',
                text: 'The early messenger networks of Persia and Rome',
                answer: 'A',
              },
              {
                id: 'p3-e-b',
                text: 'Before the reform, the charge for a letter often',
                answer: 'B',
              },
              {
                id: 'p3-e-c',
                text: 'After the penny post began, the number of letters sent',
                answer: 'D',
              },
              {
                id: 'p3-e-d',
                text: 'The task of sorting the mail',
                answer: 'E',
              },
            ],
            explanation:
              'Sentence a → A: the Persian and Roman systems "were the private tools of governments; they existed to serve the ruler, not the ordinary person." Sentence b → B: the fee "was reckoned according to the distance the letter had travelled and the number of sheets of paper it contained." Sentence c → D: "the volume of letters rose enormously within just a few years." Sentence d → E: "this sorting became the true bottleneck of the whole enterprise." Endings C and F are distractors not supported by the text.',
          },
          {
            id: 'rd-034-p3-q3',
            type: 'tfng',
            prompt:
              'The messenger networks of the Persian and Roman states could be used by ordinary farmers and merchants.',
            answer: 'false',
            explanation:
              'Paragraph A states these systems "were the private tools of governments... and a farmer or a merchant had no right to use them." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-034-p3-q4',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Under the old system the cost of a letter was often paid not by the sender but by the _______.',
            acceptableAnswers: ['recipient'],
            explanation:
              'Paragraph B says "the fee was paid not by the sender but by the recipient." The required word is "recipient".',
          },
          {
            id: 'rd-034-p3-q5',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: To prove that postage had been paid in advance, the sender attached a small printed label, the adhesive postage _______.',
            acceptableAnswers: ['stamp'],
            explanation:
              'Paragraph C describes the sender attaching "a small printed label to the letter - the adhesive postage stamp." The required word is "stamp".',
          },
          {
            id: 'rd-034-p3-q6',
            type: 'mcq',
            prompt:
              'According to the final paragraph, how did the rise of online shopping affect the postal services?',
            options: [
              'It caused the carrying of parcels to collapse along with letters',
              'It lifted the carrying of parcels, since ordered goods still needed delivery',
              'It made the handwritten personal letter more common again',
              'It had no measurable effect on the volume of mail of any kind',
            ],
            correctIndex: 1,
            explanation:
              'The final paragraph says "The carrying of parcels, far from collapsing, was lifted by the rise of online shopping, as goods ordered on a screen still had to be delivered to a physical door." Option B matches and option A is directly contradicted.',
          },
          {
            id: 'rd-034-p3-q7',
            type: 'tfng',
            prompt:
              'Rowland Hill proposed that letters should cost more to send over longer distances within the country.',
            answer: 'false',
            explanation:
              'Paragraph C states Hill wanted "a single low charge for an ordinary letter regardless of the distance it travelled within the country." This contradicts the statement, so it is False.',
          },
        ],
      },
    ],
  },
]
