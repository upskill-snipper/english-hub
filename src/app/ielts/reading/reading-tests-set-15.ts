// ─── IELTS Academic Reading - practice item bank (Set 15) ──────────────────
// ORIGINAL content written for The English Hub. These passages and questions are
// invented purely to practise the Academic Reading question formats (Matching
// Headings, Matching Information, MCQ, True/False/Not Given, and
// sentence/summary completion). They are NOT reproductions of any official IELTS
// past paper, and no official affiliation is implied. Academic track.
// Topic domains: medicine (antibiotics and resistance) / cultural history (the
// public museum) / urban ecology (green roofs).
//
// One complete, carefully-checked test: 3 passages, 40 marks. Every answer is
// verifiable from the passage text and is justified in the explanation. Matching
// questions score one mark per item, mirroring the real exam.
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const READING_SET_15: ReadingTest[] = [
  {
    id: 'rd-academic-015',
    title: 'Academic Reading - Practice Test 15',
    track: 'academic',
    estimatedMinutes: 60,
    passages: [
      {
        id: 'rd-academic-015-p1',
        title: 'The Double-Edged Triumph of Antibiotics',
        body: `A  For most of human history, a deep cut, a chest infection or a difficult birth could be a death sentence. Bacteria that entered the body through a wound or the lungs multiplied unchecked, and physicians could do little but wait and hope. The arrival of antibiotics in the middle of the twentieth century changed this so completely that it is now hard to imagine the fear that ordinary infections once inspired. Diseases that had killed for millennia became, almost overnight, a matter of a short course of tablets. Yet the very speed and scale of that victory carried within it the seeds of a new and growing danger.

B  An antibiotic is a substance that kills bacteria or stops them multiplying, while leaving the cells of the patient unharmed. This selective action is possible because bacterial cells differ from our own in important ways. Many antibiotics attack structures that bacteria possess but humans do not. Penicillin, the first to be used widely, works by interfering with the construction of the bacterial cell wall, a tough outer layer that human cells lack entirely. As the bacterium tries to grow and divide, it can no longer build a sound wall, and it bursts under its own internal pressure. Other drugs jam the machinery a bacterium uses to copy its genetic material, or block the tiny factories in which it assembles proteins. In each case the trick is to find a difference between the invader and the host, and to exploit it.

C  The discovery of penicillin is among the most famous stories in science. In 1928 the Scottish researcher Alexander Fleming returned from holiday to find that a mould had drifted onto a dish of bacteria he had left out, and that the bacteria near the mould had died. Fleming recognised that the mould was releasing something lethal to them, but he was unable to extract the active substance in any useful quantity, and for a decade the observation lay largely neglected. It was only when a team at Oxford, led by Howard Florey and Ernst Chain, found a way to purify and produce the drug that penicillin could be tested on patients and then manufactured on a vast scale. Their work, completed under the pressure of the Second World War, turned a laboratory curiosity into a medicine that would save millions of lives.

D  The problem is that bacteria do not stay still. They reproduce with extraordinary speed, a single cell becoming millions within a day, and each generation carries the possibility of small random changes in its genetic material. Occasionally such a change happens to make a bacterium less vulnerable to a particular drug. When an antibiotic is then applied, the vulnerable bacteria die while the resistant one survives and multiplies, passing its advantage to its descendants. This is natural selection at its swiftest and most visible: the drug itself clears the way for the very organisms that can withstand it. Worse still, bacteria can swap useful genes directly with their neighbours, even across different species, so that resistance acquired by one kind of bacterium can spread to another.

E  Human behaviour has accelerated this process at every turn. Antibiotics have often been prescribed for illnesses they cannot touch, such as colds and influenza, which are caused by viruses rather than bacteria. Patients frequently stop taking their tablets as soon as they feel better, leaving behind the hardier bacteria that the full course would have finished off. On a far larger scale, antibiotics have been fed routinely to farm animals, not to treat disease but to make them grow faster, exposing countless bacteria to the drugs and breeding resistance on an industrial scale. Each unnecessary dose is, in effect, a training exercise that teaches the bacterial world how to survive our best weapons.

F  The consequences are already being felt in hospitals around the globe. Certain strains of bacteria have emerged that shrug off almost every drug available, and infections that were once trivial to cure can again become life-threatening. Physicians increasingly find themselves reaching for older, more toxic medicines that had been set aside, or combining several drugs in the hope that what one fails to kill another will. The fear among specialists is of a return to a world in which routine surgery, cancer treatment and organ transplants - all of which depend on the ability to control infection - become far more dangerous than they are today.

G  There is, however, no single solution waiting to be discovered. Developing a genuinely new class of antibiotic is slow, difficult and unprofitable, since a successful drug would deliberately be held in reserve and used as little as possible. Researchers are therefore pursuing many paths at once: tighter rules on prescribing, restrictions on the use of antibiotics in farming, faster tests so that doctors can identify the precise culprit before treating, and entirely new approaches such as viruses that prey on bacteria. None promises a quick escape. What is clear is that the antibiotic era, far from being a permanent conquest, must be defended continually if its extraordinary gains are not to be lost.`,
        questions: [
          {
            id: 'rd-015-p1-q1',
            type: 'matching',
            variant: 'headings',
            prompt:
              'The passage has seven paragraphs, A-G. Choose the correct heading for each paragraph from the list of headings below. There are more headings than paragraphs, so you will not use them all. Write the correct number (i-ix) for each paragraph.',
            options: [
              { key: 'i', label: 'How resistance arises and spreads among bacteria' },
              { key: 'ii', label: 'A chance observation rescued years later' },
              { key: 'iii', label: 'The high cost of producing penicillin today' },
              { key: 'iv', label: 'A transformation that ended an age of fear' },
              { key: 'v', label: 'No easy way out, and a warning' },
              { key: 'vi', label: 'How the drugs tell friend from foe' },
              { key: 'vii', label: 'The threat now visible in the wards' },
              { key: 'viii', label: 'Human habits that hasten the danger' },
              { key: 'ix', label: 'Why viruses are harder to treat than bacteria' },
            ],
            items: [
              { id: 'rd-015-p1-h-a', text: 'Paragraph A', answer: 'iv' },
              { id: 'rd-015-p1-h-b', text: 'Paragraph B', answer: 'vi' },
              { id: 'rd-015-p1-h-c', text: 'Paragraph C', answer: 'ii' },
              { id: 'rd-015-p1-h-d', text: 'Paragraph D', answer: 'i' },
              { id: 'rd-015-p1-h-e', text: 'Paragraph E', answer: 'viii' },
              { id: 'rd-015-p1-h-f', text: 'Paragraph F', answer: 'vii' },
              { id: 'rd-015-p1-h-g', text: 'Paragraph G', answer: 'v' },
            ],
            explanation:
              "A introduces the transformation that ended the old fear of infection (iv). B explains the selective action that lets the drugs distinguish bacteria from human cells (vi). C is the story of Fleming's chance observation, neglected for a decade until Oxford revived it (ii). D explains how resistance arises through random change and spreads, including between species (i). E lists human habits - over-prescribing, unfinished courses, farm use - that hasten the danger (viii). F describes the threat already visible in hospitals (vii). G concludes that there is no easy solution and that the era must be defended (v). Headings iii and ix are distractors: the cost of producing penicillin and why viruses are hard to treat are not the subject of any paragraph.",
          },
          {
            id: 'rd-015-p1-q2',
            type: 'tfng',
            prompt: 'Penicillin works by damaging a structure that human cells do not possess.',
            answer: 'true',
            explanation:
              'Paragraph B states that penicillin "works by interfering with the construction of the bacterial cell wall, a tough outer layer that human cells lack entirely." The statement matches this, so it is True.',
          },
          {
            id: 'rd-015-p1-q3',
            type: 'tfng',
            prompt:
              'Alexander Fleming succeeded in producing penicillin in large quantities soon after his discovery.',
            answer: 'false',
            explanation:
              'Paragraph C says Fleming "was unable to extract the active substance in any useful quantity," and that mass production only came later through the Oxford team led by Florey and Chain. The statement contradicts this, so it is False.',
          },
          {
            id: 'rd-015-p1-q4',
            type: 'tfng',
            prompt: 'Bacteria can pass resistance genes to other species of bacteria.',
            answer: 'true',
            explanation:
              'Paragraph D states that "bacteria can swap useful genes directly with their neighbours, even across different species, so that resistance acquired by one kind of bacterium can spread to another." This supports the statement, so it is True.',
          },
          {
            id: 'rd-015-p1-q5',
            type: 'tfng',
            prompt: 'Alexander Fleming was awarded a Nobel Prize for his discovery of penicillin.',
            answer: 'not-given',
            explanation:
              "The passage describes Fleming's discovery and the later work of Florey and Chain, but it never mentions any prize or award. There is no information about this, so the answer is Not Given.",
          },
          {
            id: 'rd-015-p1-q6',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: As a bacterium treated with penicillin tries to grow, it cannot build a sound wall and eventually _______ under its own internal pressure.',
            acceptableAnswers: ['bursts'],
            explanation:
              'Paragraph B states that the bacterium "bursts under its own internal pressure." The required word is "bursts".',
          },
          {
            id: 'rd-015-p1-q7',
            type: 'gap',
            prompt:
              'Complete the summary with ONE word from the passage: Antibiotics have often been wrongly prescribed for illnesses such as colds and influenza, which are caused by _______ rather than bacteria.',
            acceptableAnswers: ['viruses'],
            explanation:
              'Paragraph E says colds and influenza "are caused by viruses rather than bacteria." The required word is "viruses".',
          },
        ],
      },
      {
        id: 'rd-academic-015-p2',
        title: 'Opening the Cabinet: A Short History of the Public Museum',
        body: `A  The idea that anyone may walk in off the street to study the treasures of art and nature is so familiar today that it is easy to forget how recent it is. For most of recorded history, collections of rare and beautiful objects were private possessions, assembled by the powerful for their own pleasure and prestige. A king might fill a chamber with antique sculpture, a wealthy merchant might line his study with curiosities brought back by sailors, but such hoards were shown only to invited guests and admired by a fortunate few. To be granted a private viewing was a mark of favour, and a visitor who wished to see the objects had first to secure an introduction to their owner. The collection was a mirror of its owner's wealth and learning, not a resource for the public.

B  The most characteristic form of the early collection was the so-called cabinet of curiosities, which flourished among European nobles and scholars from the sixteenth century onwards. These were rooms, or sometimes entire suites of rooms, crammed with an astonishing jumble of objects: stuffed crocodiles hanging from the ceiling, coral and seashells, ancient coins, the horn of a narwhal sold as that of a unicorn, mechanical toys and preserved human remains. There was little attempt to separate the natural from the man-made, or fact from legend. The aim was to gather the whole world in miniature, to provoke wonder, and to display the breadth of the collector's reach across distant lands and ages.

C  A crucial shift came when private collections began to pass into public hands. Some owners, late in life, bequeathed their treasures to a city or a learned society on the condition that they be preserved and shown. One of the earliest institutions to open its doors to the curious was the Ashmolean in Oxford, founded in the late seventeenth century around a collection given to the university. A few decades later the British Museum was established by act of parliament, its founding collection purchased for the nation, and it admitted visitors free of charge - though in its first years entry was by written application only, and the numbers allowed in each day were strictly limited.

D  The decisive change in the character of the museum, however, came with the political upheavals at the end of the eighteenth century. When the French monarchy fell, the royal art collection was declared the property of the people, and the palace of the Louvre was reopened as a public gallery. The gesture was deeply symbolic: paintings that had hung in private royal apartments now belonged, at least in principle, to every citizen. The notion took hold across Europe that a nation's cultural heritage was a common inheritance, and that the state had a duty to preserve it and make it available to all. The museum was thus recast from a private luxury into a public institution with an educational mission.

E  This new sense of purpose changed not only who could enter but how the objects themselves were arranged. The old cabinets had delighted in variety and surprise; the new museums sought order and instruction. Curators began to classify their holdings, grouping objects by material, by period or by region, and to lay them out so that a visitor might trace the development of an art form or the history of a people. Labels appeared, explaining what each object was and why it mattered. The visit was no longer meant merely to astonish but to teach, and the arrangement of a gallery came to embody a particular way of understanding the world.

F  The nineteenth century became the great age of museum building. Growing cities competed to erect grand halls of art, science and industry, often in imposing classical styles intended to lend dignity to learning. Reformers argued that exposure to fine objects would improve the taste and even the morals of ordinary working people, and admission was increasingly made free so that the labouring classes might benefit. By the close of the century the public museum had become a fixture of civic life, a place that a city was almost embarrassed to be without. The descendants of the cluttered private cabinet had become spacious, orderly and, above all, open - institutions that belonged, in theory at least, to everyone.`,
        questions: [
          {
            id: 'rd-015-p2-q1',
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
                id: 'rd-015-p2-i-1',
                text: 'the claim that displaying fine objects might improve the behaviour of ordinary people',
                answer: 'F',
              },
              {
                id: 'rd-015-p2-i-2',
                text: 'an example of an animal part being passed off as something it was not',
                answer: 'B',
              },
              {
                id: 'rd-015-p2-i-3',
                text: 'a description of how curators began to group objects to show development over time',
                answer: 'E',
              },
              {
                id: 'rd-015-p2-i-4',
                text: 'a statement that early collections reflected the owner rather than serving the public',
                answer: 'A',
              },
              {
                id: 'rd-015-p2-i-5',
                text: 'a reference to a museum that at first admitted visitors only by written request',
                answer: 'C',
              },
            ],
            explanation:
              'F contains the reformers\' claim that exposure to fine objects "would improve the taste and even the morals of ordinary working people." B gives the example of the narwhal horn "sold as that of a unicorn." E describes curators classifying holdings so a visitor "might trace the development of an art form or the history of a people." A states that the collection "was a mirror of its owner\'s wealth and learning, not a resource for the public." C notes that the British Museum at first admitted visitors "by written application only."',
          },
          {
            id: 'rd-015-p2-q2',
            type: 'tfng',
            prompt:
              'Cabinets of curiosities usually kept natural objects strictly separate from man-made ones.',
            answer: 'false',
            explanation:
              'Paragraph B states that in these cabinets "there was little attempt to separate the natural from the man-made, or fact from legend." The statement claims the opposite, so it is False.',
          },
          {
            id: 'rd-015-p2-q3',
            type: 'tfng',
            prompt: 'When it first opened, the British Museum charged visitors an entrance fee.',
            answer: 'false',
            explanation:
              'Paragraph C says the British Museum "admitted visitors free of charge." The statement contradicts this, so it is False.',
          },
          {
            id: 'rd-015-p2-q4',
            type: 'tfng',
            prompt:
              'The reopening of the Louvre as a public gallery followed the fall of the French monarchy.',
            answer: 'true',
            explanation:
              'Paragraph D states that "when the French monarchy fell, the royal art collection was declared the property of the people, and the palace of the Louvre was reopened as a public gallery." This supports the statement, so it is True.',
          },
          {
            id: 'rd-015-p2-q5',
            type: 'mcq',
            prompt: 'According to the passage, what was the main aim of a cabinet of curiosities?',
            options: [
              'To educate the public about the natural world',
              'To gather the whole world in miniature and provoke wonder',
              "To preserve a nation's cultural heritage for future generations",
              'To classify objects by their material and period',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph B states that "the aim was to gather the whole world in miniature, to provoke wonder, and to display the breadth of the collector\'s reach." Option B matches. Education and classification belong to the later public museum (paragraphs D and E), and these collections were private, not public.',
          },
          {
            id: 'rd-015-p2-q6',
            type: 'mcq',
            prompt:
              'Why does the writer describe the reopening of the Louvre as "deeply symbolic"?',
            options: [
              'Because the building was the largest gallery in Europe at the time',
              'Because paintings once kept in private royal apartments now belonged, in principle, to every citizen',
              'Because it was the first museum to charge no admission fee',
              'Because it introduced the practice of labelling each object on display',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph D explains the symbolism: "paintings that had hung in private royal apartments now belonged, at least in principle, to every citizen." Option B captures this. The size of the building, free admission and labelling are not the reason given for calling it symbolic.',
          },
          {
            id: 'rd-015-p2-q7',
            type: 'mcq',
            prompt: 'What does the passage suggest about museums in the nineteenth century?',
            options: [
              'They gradually returned to the cluttered style of the early cabinets.',
              'They were mostly built in remote areas away from major cities.',
              'They became a feature of civic life that cities felt they ought to have.',
              'They began once again to restrict entry to invited guests only.',
            ],
            correctIndex: 2,
            explanation:
              'Paragraph F states that the public museum "had become a fixture of civic life, a place that a city was almost embarrassed to be without." Option C matches. The other options contradict the passage, which describes museums becoming more orderly and more open, not more cluttered or restricted.',
          },
          {
            id: 'rd-015-p2-q8',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The most characteristic early collection was the so-called _______ of curiosities, a room crammed with an astonishing jumble of objects.',
            acceptableAnswers: ['cabinet'],
            explanation:
              'Paragraph B refers to "the so-called cabinet of curiosities." The required word is "cabinet".',
          },
          {
            id: 'rd-015-p2-q9',
            type: 'gap',
            prompt:
              'Complete the summary with ONE word from the passage: In the new public museums, _______ appeared beside the objects, explaining what each one was and why it mattered.',
            acceptableAnswers: ['labels'],
            explanation:
              'Paragraph E says "labels appeared, explaining what each object was and why it mattered." The required word is "labels".',
          },
        ],
      },
      {
        id: 'rd-academic-015-p3',
        title: 'A Fifth Façade: The Rise of the Green Roof',
        body: `Look down on almost any modern city from the air and a striking feature reveals itself: a vast expanse of flat, dark, empty rooftops. These surfaces, often described by architects as the building's neglected fifth façade, have traditionally been treated as nothing more than a cap to keep out the rain. In a growing number of cities, however, they are being reimagined as living landscapes. A green roof - a roof partly or wholly covered with growing plants over a waterproof membrane - turns this dead space into something that can cool the air, soak up rain, shelter wildlife and even grow food.

The practice is far from new. Turf roofs of grass and earth kept turf-walled houses warm in cold northern climates for centuries, and the legendary hanging gardens of the ancient world suggest the appeal is very old indeed. What is new is the engineering that allows plants to be grown safely and reliably on a modern structure. A contemporary green roof is built up in distinct layers. Above the structural roof sits a waterproof membrane, protected by a barrier that stops roots from working their way through it. Above that lie a drainage layer that carries away excess water, a filter sheet, a thin growing medium - usually a lightweight mineral mix rather than ordinary garden soil - and finally the plants themselves.

Engineers draw a basic distinction between two kinds of green roof. An extensive roof has only a shallow layer of growing medium, a few centimetres deep, and is planted with tough, low, drought-tolerant species that need almost no attention once established. It is light enough to be added to many existing buildings and is intended to be looked at rather than walked upon. An intensive roof, by contrast, has a much deeper soil layer capable of supporting shrubs, lawns and even small trees, creating in effect a roof garden that people can enter and enjoy. The price of this richness is considerable weight, regular maintenance and a far stronger structure to bear the load, so intensive roofs are usually designed into a building from the start.

The benefits that have driven this revival are largely practical. A bare dark roof absorbs the sun and grows fiercely hot, radiating heat that helps to make a city centre several degrees warmer than the countryside around it - an effect known as the urban heat island. A planted roof, by contrast, stays cool: the plants shade the surface and release moisture as they transpire, much as a tree cools the ground beneath it. This lowers the temperature both of the building below, cutting the energy needed for air conditioning, and of the surrounding air. Spread across thousands of roofs, the cooling effect on a whole district can be significant.

A second benefit concerns water. When rain falls on a conventional city of hard, sealed surfaces, it runs off almost instantly, and during a heavy storm this sudden surge can overwhelm the drains and cause flooding. A green roof behaves quite differently. Its growing medium acts like a sponge, absorbing a large proportion of the rainfall and releasing the rest slowly over the hours that follow. By holding back and delaying the flow, a city's green roofs can ease the strain on its drainage system at exactly the moment when that strain is greatest.

There are gains for living things, too. As cities expand, the habitats of many small creatures shrink, and rooftops can offer an unexpected refuge. Even a simple planted roof may attract bees and other pollinating insects, while more varied schemes provide nesting sites for birds and stepping stones that allow wildlife to move across an otherwise hostile sea of concrete. Some city authorities now actively encourage such roofs as part of a wider effort to weave threads of nature back through the built environment.

None of this comes without difficulty. A green roof costs considerably more to install than a plain one, and although it can pay for itself over time through energy savings and a longer-lasting membrane, the higher initial outlay deters many owners. Older buildings may simply be unable to bear the additional weight without expensive strengthening. Poorly built roofs can leak, and neglected planting can wither and die, leaving an eyesore rather than an asset. For these reasons many cities have turned to regulation and subsidy, requiring green roofs on certain new buildings or helping to meet the cost, in the belief that the collective gains to the city outweigh the burden on the individual builder. The empty rooftop, long ignored, is slowly being recognised as one of the city's most promising unused resources.`,
        questions: [
          {
            id: 'rd-015-p3-q1',
            type: 'mcq',
            prompt: 'Why do architects refer to the roof as the building\'s "fifth façade"?',
            options: [
              'Because it is the most expensive surface of the building to construct',
              'Because it is a large surface that has traditionally been neglected',
              'Because it is always the fifth layer to be added during building work',
              'Because it faces in a different direction from the four walls',
            ],
            correctIndex: 1,
            explanation:
              'The first paragraph describes rooftops as "the building\'s neglected fifth façade" - vast surfaces "traditionally treated as nothing more than a cap to keep out the rain." Option B captures the idea of a large, neglected surface. The other options are not supported.',
          },
          {
            id: 'rd-015-p3-q2',
            type: 'mcq',
            prompt: 'According to the passage, what is genuinely new about green roofs?',
            options: [
              'The idea of growing plants on top of buildings',
              'The use of roofs to keep buildings warm in cold climates',
              'The engineering that lets plants grow safely on a modern structure',
              'The desire of people to be surrounded by gardens',
            ],
            correctIndex: 2,
            explanation:
              'The second paragraph states that the practice "is far from new" but that "what is new is the engineering that allows plants to be grown safely and reliably on a modern structure." Option C is correct; the idea itself, warmth and the appeal of gardens are described as old.',
          },
          {
            id: 'rd-015-p3-q3',
            type: 'mcq',
            prompt: 'What is the main difference between an extensive and an intensive green roof?',
            options: [
              'An extensive roof is far more expensive to build than an intensive one.',
              'An extensive roof has a shallow growing layer, while an intensive roof has a deep one supporting larger plants.',
              'An extensive roof can support small trees, while an intensive roof cannot.',
              'An extensive roof must be designed into a building from the very start.',
            ],
            correctIndex: 1,
            explanation:
              'The third paragraph explains that an extensive roof "has only a shallow layer of growing medium," whereas an intensive roof "has a much deeper soil layer capable of supporting shrubs, lawns and even small trees." Option B is correct. It is the intensive roof that supports trees and is usually designed in from the start.',
          },
          {
            id: 'rd-015-p3-q4',
            type: 'mcq',
            prompt: 'How does a green roof help to reduce the urban heat island effect?',
            options: [
              'By reflecting almost all sunlight back into space with a pale surface',
              'By shading the surface and releasing moisture as the plants transpire',
              'By absorbing heat during the day and storing it underground',
              'By preventing rainwater from reaching the drains',
            ],
            correctIndex: 1,
            explanation:
              'The fourth paragraph says a planted roof "stays cool: the plants shade the surface and release moisture as they transpire, much as a tree cools the ground beneath it." Option B matches. Reflection by a pale surface, heat storage and drainage are not the mechanism described.',
          },
          {
            id: 'rd-015-p3-q5',
            type: 'tfng',
            prompt: 'Green roofs are a recent invention with no precedent in earlier times.',
            answer: 'false',
            explanation:
              'The second paragraph states that "the practice is far from new," citing turf roofs and the ancient hanging gardens. The statement contradicts this, so it is False.',
          },
          {
            id: 'rd-015-p3-q6',
            type: 'tfng',
            prompt:
              'An extensive green roof normally requires very little care once the plants are established.',
            answer: 'true',
            explanation:
              'The third paragraph says an extensive roof is "planted with tough, low, drought-tolerant species that need almost no attention once established." This supports the statement, so it is True.',
          },
          {
            id: 'rd-015-p3-q7',
            type: 'tfng',
            prompt:
              'On a roof covered with plants, rainwater runs off just as quickly as it does from a conventional roof.',
            answer: 'false',
            explanation:
              'The fifth paragraph contrasts the two: on a conventional surface rain "runs off almost instantly," whereas a green roof\'s growing medium "acts like a sponge, absorbing a large proportion of the rainfall and releasing the rest slowly." The statement contradicts this, so it is False.',
          },
          {
            id: 'rd-015-p3-q8',
            type: 'tfng',
            prompt:
              'Green roofs can provide nesting sites for birds and help wildlife move across a city.',
            answer: 'true',
            explanation:
              'The sixth paragraph states that more varied schemes "provide nesting sites for birds and stepping stones that allow wildlife to move across an otherwise hostile sea of concrete." This matches the statement, so it is True.',
          },
          {
            id: 'rd-015-p3-q9',
            type: 'tfng',
            prompt:
              "Most green roofs installed in cities today produce enough vegetables to feed the building's residents.",
            answer: 'not-given',
            explanation:
              'The first paragraph mentions that a green roof can "even grow food," but the passage never states how many roofs grow food or whether they feed residents. There is no information about this, so the answer is Not Given.',
          },
          {
            id: 'rd-015-p3-q10',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: A green roof is built over a waterproof _______ that prevents water from reaching the structure below.',
            acceptableAnswers: ['membrane'],
            explanation:
              'The first and second paragraphs describe the plants growing "over a waterproof membrane." The required word is "membrane".',
          },
          {
            id: 'rd-015-p3-q11',
            type: 'gap',
            prompt:
              'Complete the summary with ONE word from the passage: A dark roof radiates heat that helps make a city centre warmer than the countryside, an effect known as the urban heat _______.',
            acceptableAnswers: ['island'],
            explanation:
              'The fourth paragraph names this "an effect known as the urban heat island." The required word is "island".',
          },
          {
            id: 'rd-015-p3-q12',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: During a storm, the growing medium of a green roof acts like a _______, soaking up much of the rainfall and releasing it slowly.',
            acceptableAnswers: ['sponge'],
            explanation:
              'The fifth paragraph says the growing medium "acts like a sponge, absorbing a large proportion of the rainfall." The required word is "sponge".',
          },
          {
            id: 'rd-015-p3-q13',
            type: 'gap',
            prompt:
              'Complete the summary with ONE word from the passage: Because the collective gains are thought to outweigh the cost to the builder, many cities use regulation and _______ to encourage green roofs.',
            acceptableAnswers: ['subsidy'],
            explanation:
              'The final paragraph states that "many cities have turned to regulation and subsidy, requiring green roofs on certain new buildings or helping to meet the cost." The missing word completing the pair "regulation and ___" is "subsidy".',
          },
          {
            id: 'rd-015-p3-q14',
            type: 'tfng',
            prompt:
              'The higher initial cost of a green roof discourages some building owners from installing one.',
            answer: 'true',
            explanation:
              'The final paragraph states that "the higher initial outlay deters many owners." This supports the statement, so it is True.',
          },
        ],
      },
    ],
  },
]
