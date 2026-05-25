// ─── IELTS Academic Reading — practice item bank (Set 7) ───────────────────
// ORIGINAL content written for The English Hub. These passages and questions are
// invented purely to practise the Academic Reading question formats (MCQ,
// True/False/Not Given, and sentence/summary completion). They are NOT
// reproductions of any official IELTS past paper, and no official affiliation is
// implied. Academic track. Topic domains: global trade / materials science /
// the economics and psychology of work.
//
// One complete, carefully-checked test: 3 passages, 40 questions. Every answer
// is verifiable from the passage text and is justified in the explanation.
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const READING_SET_7: ReadingTest[] = [
  {
    id: 'rd-academic-007',
    title: 'Academic Reading — Practice Test 7',
    track: 'academic',
    estimatedMinutes: 60,
    passages: [
      {
        id: 'rd-academic-007-p1',
        title: 'The Box That Shrank the World',
        body: `For most of human history, loading a ship was a slow and ruinously expensive business. Goods arrived at the docks as a chaotic assortment of barrels, sacks, crates and loose bales, and each item had to be carried aboard and stowed by hand. Gangs of dockworkers, known in different ports as longshoremen or stevedores, might spend a week or more filling a single vessel, wedging awkward cargoes into the curved hull as tightly as a puzzle. The labour was dangerous, the pilfering was constant, and the cost of moving freight across an ocean could swallow a large share of the value of the goods themselves.

The man usually credited with changing this was not an engineer or a shipping magnate but an American trucking operator named Malcom McLean. Frustrated by the hours his drivers wasted waiting on the quayside while their loads were unpacked and reloaded, he reasoned that it would be far simpler to lift an entire truck trailer onto a ship and set it down again at the other end. In 1956 he sent a converted tanker carrying fifty-eight metal boxes from Newark to Houston. The idea seemed almost too obvious to patent, yet its consequences would prove enormous.

The genius of the shipping container lay less in the box itself than in what it allowed everything around it to become. Because every container shared the same dimensions and the same corner fittings, it could be stacked, locked and lifted by standard equipment anywhere in the world. A crane that had once shifted a few tonnes an hour could now move thirty in a single lift, and a ship that had idled in port for a week could be turned around in a day. The container did not merely speed up loading; it allowed the whole journey — factory, lorry, ship, train and warehouse — to be treated as one smooth, mechanised flow.

The savings were staggering. By some estimates the cost of loading loose cargo fell by more than ninety per cent once containers came into general use. For the first time, the expense of transport ceased to be a serious obstacle to trade. A manufacturer in one country could now buy components from a dozen others, assemble them, and ship the finished article across the planet without the freight bill destroying the profit. Factories no longer had to sit close to their customers or their ports; they could be built wherever land and labour were cheapest, and their products could reach distant markets at a price that would once have been unthinkable.

This transformation did not arrive without resistance. The new system threatened the livelihoods of the dockworkers whose muscle it replaced, and bitter disputes broke out in many ports as unions fought to protect their members. Older harbours, hemmed in by narrow streets and shallow water, often could not accommodate the vast new vessels and the acres of paved yard the containers demanded. Trade migrated to purpose-built terminals, and some historic ports that failed to adapt sank into decline within a generation, their warehouses abandoned and their quaysides silent.

Standardisation, however, posed a problem of its own. In the early years rival companies built containers of differing sizes, each convinced that its own design would prevail, and a box that fitted one company's cranes and ships was useless to another. The full benefit of the system could only be unlocked if everyone agreed to a common pattern. After years of negotiation, international bodies settled on standard lengths and fittings during the 1960s, and it was this unglamorous agreement, as much as any single invention, that turned a clever idea into a global infrastructure.

Today the descendants of McLean's fifty-eight boxes number in the tens of millions, and at any moment a large fraction of them are at sea. They have become so ordinary that they are almost invisible, yet the cheap and reliable movement of goods they made possible underpins much of modern economic life. Historians of commerce have observed that the container reshaped the world more quietly, and arguably more profoundly, than many of the inventions that fill the textbooks.`,
        questions: [
          {
            id: 'rd-007-p1-q1',
            type: 'tfng',
            prompt: 'Before containers, loading a single ship by hand could take a week or longer.',
            answer: 'true',
            explanation:
              'The first paragraph states that gangs of dockworkers "might spend a week or more filling a single vessel." This matches the statement, so it is True.',
          },
          {
            id: 'rd-007-p1-q2',
            type: 'tfng',
            prompt: 'Malcom McLean had trained and worked as a marine engineer before 1956.',
            answer: 'false',
            explanation:
              'The second paragraph explicitly states McLean "was not an engineer or a shipping magnate but an American trucking operator." The statement contradicts the text, so it is False.',
          },
          {
            id: 'rd-007-p1-q3',
            type: 'tfng',
            prompt: 'McLean took out a patent to protect the design of his metal box.',
            answer: 'not-given',
            explanation:
              'The passage says the idea "seemed almost too obvious to patent," but it never states whether McLean actually applied for or obtained a patent. There is no information either way, so the answer is Not Given.',
          },
          {
            id: 'rd-007-p1-q4',
            type: 'tfng',
            prompt:
              'Every shipping container was built to the same dimensions from the moment the system was introduced.',
            answer: 'false',
            explanation:
              'The sixth paragraph says that "in the early years rival companies built containers of differing sizes," and that common standards were only agreed during the 1960s. The statement contradicts this, so it is False.',
          },
          {
            id: 'rd-007-p1-q5',
            type: 'mcq',
            prompt:
              'According to the passage, what was the most important advantage of the container?',
            options: [
              'It was cheaper to manufacture than older forms of packaging.',
              'It allowed the entire journey of goods to be handled as one mechanised flow.',
              'It made ships able to carry heavier loads than ever before.',
              'It reduced the amount of theft that took place in ports.',
            ],
            correctIndex: 1,
            explanation:
              'The third paragraph states that the container "allowed the whole journey — factory, lorry, ship, train and warehouse — to be treated as one smooth, mechanised flow," and stresses that its genius lay in what it let everything around it become. Option B captures this.',
          },
          {
            id: 'rd-007-p1-q6',
            type: 'mcq',
            prompt: 'What effect did cheaper transport have on where factories could be located?',
            options: [
              'Factories had to be built as close as possible to major ports.',
              'Factories could be built wherever land and labour were cheapest.',
              'Factories were forced to move into the centres of large cities.',
              'Factories had to stay near the customers who bought their goods.',
            ],
            correctIndex: 1,
            explanation:
              'The fourth paragraph says factories "no longer had to sit close to their customers or their ports; they could be built wherever land and labour were cheapest." Option B matches; the others state the opposite or are not mentioned.',
          },
          {
            id: 'rd-007-p1-q7',
            type: 'mcq',
            prompt: 'Why did some historic ports fall into decline?',
            options: [
              'Their dockworkers refused to handle any containers at all.',
              'They were too far from the factories that produced goods.',
              'They could not accommodate the large new vessels and the space the containers needed.',
              'They were damaged during the disputes between unions and shipping firms.',
            ],
            correctIndex: 2,
            explanation:
              'The fifth paragraph explains that older harbours "hemmed in by narrow streets and shallow water, often could not accommodate the vast new vessels and the acres of paved yard the containers demanded," so trade moved elsewhere. Option C is correct.',
          },
          {
            id: 'rd-007-p1-q8',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: McLean was an American _______ operator who was annoyed by the time his drivers wasted at the quayside.',
            acceptableAnswers: ['trucking'],
            explanation:
              'The second paragraph describes McLean as "an American trucking operator" who was frustrated by the hours his drivers wasted waiting. The missing word is "trucking".',
          },
          {
            id: 'rd-007-p1-q9',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE NUMBER from the passage: In 1956, McLean sent a converted tanker carrying _______ metal boxes from Newark to Houston.',
            acceptableAnswers: ['fifty-eight', '58'],
            explanation:
              'The second paragraph states he "sent a converted tanker carrying fifty-eight metal boxes from Newark to Houston." The answer is "fifty-eight" (or 58).',
          },
          {
            id: 'rd-007-p1-q10',
            type: 'gap',
            prompt:
              'Complete the summary with ONE word from the passage: Because every container shared the same dimensions and the same corner _______, it could be handled by standard equipment anywhere in the world.',
            acceptableAnswers: ['fittings'],
            explanation:
              'The third paragraph says each container "shared the same dimensions and the same corner fittings." The required word is "fittings".',
          },
          {
            id: 'rd-007-p1-q11',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE NUMBER (as a percentage) from the passage: The cost of loading loose cargo is estimated to have fallen by more than _______ per cent once containers were widely used.',
            acceptableAnswers: ['ninety', '90'],
            explanation:
              'The fourth paragraph states that "the cost of loading loose cargo fell by more than ninety per cent." The answer is "ninety" (or 90).',
          },
          {
            id: 'rd-007-p1-q12',
            type: 'gap',
            prompt:
              'Complete the summary with ONE word from the passage: The full benefit of the system could only be unlocked once everyone agreed on a common _______ for the boxes.',
            acceptableAnswers: ['pattern', 'design'],
            explanation:
              'The sixth paragraph says the benefit could only be unlocked "if everyone agreed to a common pattern," after rival firms had each built their own "design." Either "pattern" or "design" fits the meaning.',
          },
          {
            id: 'rd-007-p1-q13',
            type: 'tfng',
            prompt:
              'The writer suggests the container changed the world less dramatically than the famous inventions found in textbooks.',
            answer: 'false',
            explanation:
              'The final paragraph says the container "reshaped the world more quietly, and arguably more profoundly, than many of the inventions that fill the textbooks." "More profoundly" is the opposite of "less dramatically," so the statement is False.',
          },
        ],
      },
      {
        id: 'rd-academic-007-p2',
        title: 'The Hidden Elements Inside Our Devices',
        body: `The smartphone in a person's pocket is, among other things, a small museum of the periodic table. Tucked inside it are tiny quantities of a group of metals with unfamiliar names — neodymium, dysprosium, europium, yttrium and a dozen others — collectively known as the rare earth elements. Despite their grand title, these metals are not especially scarce in the ground. Some are more abundant in the Earth's crust than copper or lead. What makes them difficult, and strategically important, is something quite different.

The first peculiarity is the way they occur. Rare earths are almost never found in concentrated, easily mined seams. Instead they are thinly scattered through ordinary rock, and the seventeen elements are chemically so similar to one another that they tend to appear mixed together in the same mineral. Separating a single desired element from this cocktail is a delicate and laborious task, requiring the ore to be dissolved and passed through dozens or even hundreds of chemical stages. The process is costly, consumes large amounts of acid, and generates a great deal of toxic and sometimes radioactive waste. It is the refining, far more than the digging, that limits supply.

Yet the effort is worth it because the properties of these metals are extraordinary and, in many cases, irreplaceable. Neodymium, combined with iron and boron, produces the most powerful permanent magnets ever made. A magnet small enough to sit on a fingertip can be strong enough to require care in handling, and it is this strength that allows engineers to build motors and loudspeakers that are both tiny and efficient. Such magnets spin the hard drives of computers, vibrate the speakers of headphones, and, on a far larger scale, turn the generators inside wind turbines and drive the motors of electric cars.

Other rare earths contribute in subtler ways. Europium and terbium glow in precise colours when struck by electrons or ultraviolet light, and for decades they produced the vivid reds and greens of television and computer screens. Erbium amplifies the pulses of light that race through the optical fibres carrying the internet across the seabed. Cerium is used to polish glass to an exceptional smoothness, and lanthanum improves the lenses of cameras. In each case the quantity required is small, but the function is one that ordinary materials cannot perform.

This combination of small volumes and critical functions creates an unusual kind of vulnerability. A modern economy needs only a few thousand tonnes of some of these elements each year, a trivial figure beside the millions of tonnes of steel it consumes. But because no good substitute exists, even a brief interruption in supply can halt the production of goods worth vastly more than the metals themselves. A factory cannot build an electric motor without its magnets, however cheap the surrounding steel and copper may be.

The vulnerability is sharpened by geography. For historical and economic reasons, the mining and especially the refining of rare earths became heavily concentrated in a small number of countries during the late twentieth century. Many other nations, deterred by the pollution and the cost, allowed their own capacity to lapse. The result is a global supply chain that depends to an uncomfortable degree on decisions made in a few places, and this concentration has turned a question of chemistry into a question of politics. When supplies have been threatened, even briefly, the prices of some rare earths have leapt alarmingly, and governments have begun to treat access to them as a matter of national security.

Several responses are now under way. Old mines are being reopened in regions that abandoned them decades ago, and new deposits are being surveyed in places once thought uneconomic. Engineers are searching for ways to recover rare earths from the mountains of discarded electronics that accumulate each year, a source sometimes called the urban mine. Others are working to design magnets and phosphors that use smaller amounts of the scarcest elements, or none at all. None of these efforts offers a quick or complete solution, and recycling in particular remains technically awkward, but together they may gradually loosen the grip that a handful of suppliers currently hold over some of the most useful materials of the modern age.`,
        questions: [
          {
            id: 'rd-007-p2-q14',
            type: 'tfng',
            prompt: 'All of the rare earth elements are extremely scarce within the Earth’s crust.',
            answer: 'false',
            explanation:
              'The first paragraph states that rare earths "are not especially scarce in the ground" and that "some are more abundant in the Earth\'s crust than copper or lead." The statement contradicts this, so it is False.',
          },
          {
            id: 'rd-007-p2-q15',
            type: 'tfng',
            prompt:
              'The main difficulty with rare earths comes from separating them rather than from mining them.',
            answer: 'true',
            explanation:
              'The second paragraph says separating a desired element is "a delicate and laborious task" and concludes, "It is the refining, far more than the digging, that limits supply." This supports the statement, so it is True.',
          },
          {
            id: 'rd-007-p2-q16',
            type: 'tfng',
            prompt:
              'The refining of rare earths produces waste that can be toxic and sometimes radioactive.',
            answer: 'true',
            explanation:
              'The second paragraph states that the process "generates a great deal of toxic and sometimes radioactive waste." This matches the statement, so it is True.',
          },
          {
            id: 'rd-007-p2-q17',
            type: 'tfng',
            prompt:
              'Scientists have already developed cheap and effective substitutes for neodymium magnets.',
            answer: 'false',
            explanation:
              'The fifth paragraph states that "no good substitute exists" for these elements, and the final paragraph describes the search for alternatives as offering no "quick or complete solution." The statement contradicts this, so it is False.',
          },
          {
            id: 'rd-007-p2-q18',
            type: 'tfng',
            prompt:
              'Rare earth elements were first discovered by scientists working in the late twentieth century.',
            answer: 'not-given',
            explanation:
              'The passage discusses where rare earths occur and how supply became concentrated "during the late twentieth century," but it never states when or by whom the elements were first discovered. There is no information about this, so the answer is Not Given.',
          },
          {
            id: 'rd-007-p2-q19',
            type: 'mcq',
            prompt:
              'Why are the seventeen rare earth elements difficult to separate from one another?',
            options: [
              'They are buried far deeper underground than other metals.',
              'They are chemically very similar and tend to occur mixed together.',
              'They react violently when they are brought into contact with acid.',
              'They are found only in extremely remote parts of the world.',
            ],
            correctIndex: 1,
            explanation:
              'The second paragraph states that the elements "are chemically so similar to one another that they tend to appear mixed together in the same mineral," which makes separation laborious. Option B is correct.',
          },
          {
            id: 'rd-007-p2-q20',
            type: 'mcq',
            prompt: 'What is special about neodymium according to the passage?',
            options: [
              'It glows in precise colours when struck by electrons.',
              'It is used to polish glass to an exceptional smoothness.',
              'Combined with iron and boron, it makes the strongest permanent magnets ever produced.',
              'It amplifies pulses of light travelling through optical fibres.',
            ],
            correctIndex: 2,
            explanation:
              'The third paragraph states that neodymium, "combined with iron and boron, produces the most powerful permanent magnets ever made." The other options describe europium/terbium, cerium and erbium respectively. Option C is correct.',
          },
          {
            id: 'rd-007-p2-q21',
            type: 'mcq',
            prompt:
              'Why can a brief interruption in rare earth supply be so damaging to an economy?',
            options: [
              'Because these metals make up most of the weight of modern machines',
              'Because the metals are extremely expensive compared with steel',
              'Because no good substitute exists, so production of valuable goods can stop',
              'Because the metals are consumed in enormous quantities every year',
            ],
            correctIndex: 2,
            explanation:
              'The fifth paragraph explains that "because no good substitute exists, even a brief interruption in supply can halt the production of goods worth vastly more than the metals themselves." Option C is correct; the quantities involved are described as small, not enormous.',
          },
          {
            id: 'rd-007-p2-q22',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The seventeen rare earth elements are chemically so _______ that they tend to occur mixed together in the same mineral.',
            acceptableAnswers: ['similar'],
            explanation:
              'The second paragraph states the elements "are chemically so similar to one another that they tend to appear mixed together." The required word is "similar".',
          },
          {
            id: 'rd-007-p2-q23',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Erbium is used to _______ the pulses of light that travel through the optical fibres carrying the internet.',
            acceptableAnswers: ['amplify'],
            explanation:
              'The fourth paragraph says "Erbium amplifies the pulses of light that race through the optical fibres." Stated to fit the verb slot, the answer is "amplify" (the text uses "amplifies").',
          },
          {
            id: 'rd-007-p2-q24',
            type: 'gap',
            prompt:
              'Complete the summary with ONE word from the passage: The concentration of supply in a few countries has turned a question of chemistry into a question of _______.',
            acceptableAnswers: ['politics'],
            explanation:
              'The sixth paragraph states that "this concentration has turned a question of chemistry into a question of politics." The required word is "politics".',
          },
          {
            id: 'rd-007-p2-q25',
            type: 'gap',
            prompt:
              'Complete the sentence with TWO words from the passage: Recovering rare earths from discarded electronics is drawing on a source sometimes called the _______.',
            acceptableAnswers: ['urban mine'],
            explanation:
              'The final paragraph refers to recovering rare earths "from the mountains of discarded electronics... a source sometimes called the urban mine." The two-word answer is "urban mine".',
          },
          {
            id: 'rd-007-p2-q26',
            type: 'mcq',
            prompt:
              'Which of the following is NOT mentioned in the passage as a response to the supply problem?',
            options: [
              'Reopening old mines in regions that abandoned them',
              'Recovering rare earths from discarded electronics',
              'Designing magnets that use smaller amounts of the scarcest elements',
              'Banning the export of finished electronic goods',
            ],
            correctIndex: 3,
            explanation:
              'The final paragraph lists reopening old mines, recovering rare earths from electronics, and designing magnets and phosphors that use less material. Banning the export of finished goods is never mentioned, so Option D is the correct answer to this "NOT mentioned" question.',
          },
        ],
      },
      {
        id: 'rd-academic-007-p3',
        title: 'Working Apart Together',
        body: `When a respiratory pandemic forced offices around the world to close almost overnight, a vast and unplanned experiment in remote work began. Millions of employees who had never expected to do so found themselves working from spare bedrooms and kitchen tables, connected to their colleagues only by video screens. What had been a fringe arrangement, granted reluctantly to a privileged few, became for a time the ordinary way of working. When the immediate crisis passed, neither workers nor employers were entirely willing to return to the way things had been, and the debate about where work should happen has continued ever since.

The economic case for remote work is, at first glance, straightforward. A company that does not need to house all its staff can rent less office space, and for many firms property is among the largest costs after wages. Employees, for their part, are spared the daily commute, which in large cities can consume two hours or more of a person's day and a noticeable share of their income. Researchers who measured productivity during the pandemic found, somewhat to their surprise, that for many kinds of work output did not fall when people worked from home, and in some studies it modestly rose. Freed from the interruptions of a busy office, some employees concentrated better; others simply redirected the hours once lost to commuting into their tasks.

Yet the picture is more complicated than these figures suggest, and the complications are as much psychological as economic. Human beings are social animals, and an office is not only a place to perform tasks but a web of relationships. Much of the useful knowledge that circulates within an organisation is never written down; it passes informally, in the chance remark by the coffee machine or the question asked across a desk. Economists call this kind of exchange a spillover, and there is evidence that it suffers when colleagues are dispersed. Junior staff, in particular, may learn their craft more slowly when they cannot watch experienced colleagues at close quarters or ask small questions without the formality of scheduling a call.

The effects on the individual are equally mixed. Many remote workers report greater satisfaction, citing the freedom to arrange their day around family life and the relief of escaping a stressful journey. Others, however, describe a creeping sense of isolation. The boundary between work and home, once marked by the act of leaving the building, dissolves when the laptop sits in the corner of the living room, and some find that they work longer hours than before without quite noticing. The colleague who might once have suggested a break is no longer in the room. For workers who live alone, the loss of incidental human contact can weigh heavily, and a few studies have linked prolonged isolated working to a decline in well-being.

There is also a question of fairness that the simple economics conceals. Remote work suits some jobs and some homes far better than others. A senior manager with a spacious house and a dedicated study experiences it very differently from a young employee sharing a small flat with several others and working from a bed. The option to work remotely tends to be available chiefly to office workers, while those whose jobs are physical — in factories, hospitals, shops and transport — must still travel as before. A policy that delights one part of the workforce may therefore deepen the divide between it and another, and managers worry, too, that those who choose to come into the office may quietly gain an advantage in promotion over equally capable colleagues who stay at home.

Faced with these competing pressures, most large organisations have edged towards a compromise. Rather than choosing wholly between the office and the home, they have adopted what is usually called a hybrid model, in which employees spend part of the week in the workplace and part of it elsewhere. The hope is to keep the concentration and flexibility of home while preserving the collaboration and the sense of belonging that the office provides. Whether such arrangements can capture the best of both, or merely the inconveniences of each, is not yet clear. What does seem certain is that the sudden experiment, however it began, has permanently altered the assumption that work and the workplace must be one and the same thing.`,
        questions: [
          {
            id: 'rd-007-p3-q27',
            type: 'tfng',
            prompt:
              'Before the pandemic, remote working was a common arrangement available to most office employees.',
            answer: 'false',
            explanation:
              'The first paragraph describes remote work before the pandemic as "a fringe arrangement, granted reluctantly to a privileged few." The statement says it was common and available to most, which contradicts the text, so it is False.',
          },
          {
            id: 'rd-007-p3-q28',
            type: 'tfng',
            prompt: 'For many firms, property costs are among the largest expenses after wages.',
            answer: 'true',
            explanation:
              'The second paragraph states that "for many firms property is among the largest costs after wages." This matches the statement, so it is True.',
          },
          {
            id: 'rd-007-p3-q29',
            type: 'tfng',
            prompt:
              'Researchers found that productivity fell sharply for almost all kinds of work done from home.',
            answer: 'false',
            explanation:
              'The second paragraph reports that "for many kinds of work output did not fall when people worked from home, and in some studies it modestly rose." This contradicts the claim of a sharp fall, so it is False.',
          },
          {
            id: 'rd-007-p3-q30',
            type: 'tfng',
            prompt:
              'Working from home saves city commuters time that can amount to two hours or more a day.',
            answer: 'true',
            explanation:
              'The second paragraph says the commute "in large cities can consume two hours or more of a person\'s day," and that employees are "spared" it. This supports the statement, so it is True.',
          },
          {
            id: 'rd-007-p3-q31',
            type: 'tfng',
            prompt:
              'Remote working has been shown to increase the number of patents that companies produce.',
            answer: 'not-given',
            explanation:
              'The passage discusses informal knowledge "spillovers" and the slower learning of junior staff, but it never mentions patents or any measure of invention. There is no information about this, so the answer is Not Given.',
          },
          {
            id: 'rd-007-p3-q32',
            type: 'mcq',
            prompt: 'What do economists mean by a "spillover" in the context of this passage?',
            options: [
              'The extra hours that employees work without being paid',
              'Useful knowledge that passes informally between colleagues',
              'The money a company saves by renting less office space',
              'The stress that a long daily commute causes workers',
            ],
            correctIndex: 1,
            explanation:
              'The third paragraph describes knowledge that "passes informally, in the chance remark by the coffee machine," and states "economists call this kind of exchange a spillover." Option B is correct.',
          },
          {
            id: 'rd-007-p3-q33',
            type: 'mcq',
            prompt:
              'According to the passage, why might junior staff be especially affected by remote work?',
            options: [
              'They are more likely to be made redundant than senior staff.',
              'They tend to have smaller homes and weaker internet connections.',
              'They may learn their craft more slowly without close contact with experienced colleagues.',
              'They are usually given the most repetitive and isolating tasks.',
            ],
            correctIndex: 2,
            explanation:
              'The third paragraph states that junior staff "may learn their craft more slowly when they cannot watch experienced colleagues at close quarters or ask small questions." Option C matches this directly.',
          },
          {
            id: 'rd-007-p3-q34',
            type: 'mcq',
            prompt: 'What concern does the passage raise about fairness and remote work?',
            options: [
              'Remote workers are always paid less than those in the office.',
              'Remote work suits some jobs and homes much better than others, which may deepen divides.',
              'Employers prefer to hire only workers who own large houses.',
              'Physical workers are gradually being replaced by office workers.',
            ],
            correctIndex: 1,
            explanation:
              'The fifth paragraph explains that remote work "suits some jobs and some homes far better than others" and that it may "deepen the divide" between office workers and those whose jobs are physical. Option B captures this.',
          },
          {
            id: 'rd-007-p3-q35',
            type: 'mcq',
            prompt: 'What is the main aim of the hybrid model described in the passage?',
            options: [
              'To reduce the number of employees a company needs to hire',
              'To eliminate the office entirely over a period of years',
              'To keep the flexibility of home while preserving the collaboration of the office',
              'To make sure every worker spends exactly half the week at home',
            ],
            correctIndex: 2,
            explanation:
              'The final paragraph states that the hope of the hybrid model is "to keep the concentration and flexibility of home while preserving the collaboration and the sense of belonging that the office provides." Option C is correct.',
          },
          {
            id: 'rd-007-p3-q36',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Much of the useful knowledge in an organisation is never written down; it passes _______ between colleagues.',
            acceptableAnswers: ['informally'],
            explanation:
              'The third paragraph says such knowledge "passes informally, in the chance remark by the coffee machine." The required word is "informally".',
          },
          {
            id: 'rd-007-p3-q37',
            type: 'gap',
            prompt:
              'Complete the summary with ONE word from the passage: Some employees working from home describe a creeping sense of _______ caused by the loss of human contact.',
            acceptableAnswers: ['isolation'],
            explanation:
              'The fourth paragraph says some workers "describe a creeping sense of isolation," and links "isolated working to a decline in well-being." The required word is "isolation".',
          },
          {
            id: 'rd-007-p3-q38',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: When the laptop sits in the living room, the _______ between work and home, once marked by leaving the building, dissolves.',
            acceptableAnswers: ['boundary'],
            explanation:
              'The fourth paragraph states that "the boundary between work and home, once marked by the act of leaving the building, dissolves." The required word is "boundary".',
          },
          {
            id: 'rd-007-p3-q39',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Most large organisations have edged towards a compromise usually called the _______ model.',
            acceptableAnswers: ['hybrid'],
            explanation:
              'The final paragraph states that organisations "have adopted what is usually called a hybrid model." The required word is "hybrid".',
          },
          {
            id: 'rd-007-p3-q40',
            type: 'tfng',
            prompt:
              'The writer concludes that it is already clear the hybrid model captures the best of both office and home.',
            answer: 'false',
            explanation:
              'The final paragraph states that whether hybrid arrangements "can capture the best of both, or merely the inconveniences of each, is not yet clear." The statement claims it is already clear, which contradicts the text, so it is False.',
          },
        ],
      },
    ],
  },
]
