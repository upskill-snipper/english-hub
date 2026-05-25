// ─── IELTS Academic Reading — practice item bank (Set 28) ──────────────────
// ORIGINAL content written for The English Hub. These passages and questions are
// invented purely to practise the Academic Reading question formats. They are
// NOT reproductions of any official IELTS past paper, and no official
// affiliation is implied. Academic track. Topic domains: the growth of
// megacities / how vaccines train the immune system / the archaeology of
// shipwrecks.
//
// This test is MATCHING-RICH. It contains three matching questions across three
// different variants: Matching Headings (Passage 1), Matching Information /
// which-paragraph (Passage 2) and Matching Features — statements to vaccine
// types is replaced by statements to people/wreck types (Passage 3), alongside
// the usual mix of True/False/Not Given, multiple choice and sentence/summary
// completion.
//
// One complete, carefully-checked test: 3 passages, 40 marks (each matching item
// counts as one mark). Every answer is verifiable from the passage text and is
// justified in the explanation. Marks: P1 = 6 (matching) + 7 = 13; P2 = 5
// (matching) + 8 = 13; P3 = 5 (matching) + 9 = 14. Total = 40.
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const READING_SET_28: ReadingTest[] = [
  {
    id: 'rd-academic-028',
    title: 'Academic Reading — Practice Test 28',
    track: 'academic',
    estimatedMinutes: 60,
    passages: [
      // ───────────────────────────── PASSAGE 1 ─────────────────────────────
      {
        id: 'rd-academic-028-p1',
        title: 'The Rise of the Megacity',
        body: `For most of human history, almost everyone lived on the land. Cities existed, but they were small islands of dense settlement in a sea of farms and villages, and the great majority of people spent their lives growing food. That balance has now been reversed. Sometime around 2007, for the first time, more of the world's population lived in towns and cities than in the countryside, and the share has climbed steadily since. The most striking symbol of this shift is the megacity, a term planners use for an urban area whose population has passed ten million people. A century ago there were almost none; today there are dozens, and most of them lie not in the wealthy nations of Europe and North America but across Asia, Africa and Latin America.

The forces driving people into cities are easy to list but hard to halt. The oldest is the simple pull of work. Factories, ports, offices and markets cluster together because firms that locate near one another can share suppliers, customers and skilled labour, and this concentration creates jobs that the countryside cannot match. Alongside this pull there is a push: as farming becomes more mechanised, fewer hands are needed on the land, and rural families who can no longer make a living from a small plot send their sons and daughters to the city in search of wages. To these economic motives are added the lure of schools, hospitals and the bright promise of opportunity, all of which are concentrated where people already are. Each new arrival makes the city a little larger and, by adding to its market and its workforce, a little more attractive to the next.

Cities do not only grow because people move into them. A great deal of urban growth is simply the result of the people already there having children, a process demographers call natural increase. In many fast-growing cities this internal growth now outweighs the contribution of migration from the countryside. There is also a third, quieter mechanism. As a city spreads outward, it swallows the towns and villages at its edge, so that settlements once counted as separate become, almost overnight and without anyone moving house, parts of a single vast conurbation. Much of the apparent explosion of the largest cities is really this knitting together of many smaller places into one continuous built-up area.

Growth on this scale places enormous strain on the systems that keep a city working. Water must be found, cleaned and piped to tens of millions of taps; sewage and rubbish must be carried away; roads, railways and power lines must reach every district. When a city's population doubles in a generation, the pipes and cables laid for a far smaller place are quickly overwhelmed, and the cost of digging up streets to replace them is staggering. The result, in many megacities, is a daily struggle with congested traffic, unreliable electricity and water that does not always flow. The very density that makes a city efficient also makes its failures contagious: a breakdown in one network, such as a power cut, can ripple outwards and paralyse transport, water pumping and communications all at once.

Where official housing and services cannot keep pace, people build for themselves. Around the edges of many megacities, and on any scrap of unclaimed land within them, sprawl the informal settlements that are home to a large share of the urban poor. These districts are often erected without permits on land their residents do not legally own, and they may lack paved roads, piped water, proper drains or a reliable connection to the electricity grid. Yet to dismiss them as mere slums is to miss what they are: dense, resourceful communities full of small workshops, traders and labourers who supply the wider city with much of its everyday work. Their chief weakness is insecurity. Because residents have no legal title to their plots, they are reluctant to invest in better houses they might be evicted from, and governments are reluctant to extend services to settlements they regard as temporary.

Faced with these pressures, planners have moved away from the old dream of stopping cities from growing, which has almost never worked, towards trying to shape that growth instead. One increasingly favoured approach concentrates new housing and offices along corridors served by mass transit, so that people can reach work by train or bus rather than by private car, easing both congestion and pollution. Another grants residents of informal settlements legal title to their land, which gives them both the security and the incentive to improve their own homes while making it easier for the city to lay on water and power. None of these measures is a cure, and the largest cities will go on testing the limits of what can be governed. But they reflect a hard-won lesson: the megacity is not a problem to be solved and made to disappear, but a permanent feature of the modern world that must be lived with and steadily improved.`,
        questions: [
          // ── Matching Headings (6 items, 8 options → 2 distractors) = 6 marks ──
          {
            id: 'rd-028-p1-q1',
            type: 'matching',
            variant: 'headings',
            prompt:
              'The passage has six paragraphs, A–F. Choose the correct heading for each paragraph from the list of headings below. There are more headings than paragraphs, so you will not use them all. Write the correct number (i–viii) for each paragraph.',
            options: [
              { key: 'i', label: 'Why people are pulled and pushed towards cities' },
              { key: 'ii', label: 'Building for oneself where the state cannot keep up' },
              { key: 'iii', label: 'A world that has become mostly urban' },
              { key: 'iv', label: 'The cost of cleaner air in wealthy nations' },
              { key: 'v', label: 'Growth from within and from swallowing neighbours' },
              { key: 'vi', label: 'Shaping growth rather than trying to stop it' },
              { key: 'vii', label: 'When the pipes and cables cannot cope' },
              { key: 'viii', label: 'The decline of the great industrial port' },
            ],
            items: [
              { id: 'p1-h-a', text: 'Paragraph A', answer: 'iii' },
              { id: 'p1-h-b', text: 'Paragraph B', answer: 'i' },
              { id: 'p1-h-c', text: 'Paragraph C', answer: 'v' },
              { id: 'p1-h-d', text: 'Paragraph D', answer: 'vii' },
              { id: 'p1-h-e', text: 'Paragraph E', answer: 'ii' },
              { id: 'p1-h-f', text: 'Paragraph F', answer: 'vi' },
            ],
            explanation:
              'A reports that more people now live in towns and cities than in the countryside, introducing a mostly urban world (iii). B lists the "pull" of work and the rural "push" that drive people to cities (i). C describes natural increase and the swallowing of edge towns into a conurbation (v). D explains how doubling populations overwhelm the pipes and cables of infrastructure (vii). E covers self-built informal settlements where official services cannot keep pace (ii). F describes planners shaping growth via transit corridors and land titling rather than stopping it (vi). Heading iv (cost of cleaner air) and heading viii (decline of the industrial port) are distractors never developed in the passage.',
          },
          {
            id: 'rd-028-p1-q2',
            type: 'tfng',
            prompt:
              'For most of human history, the majority of people earned their living by farming.',
            answer: 'true',
            explanation:
              'Paragraph A states that "for most of human history, almost everyone lived on the land" and "the great majority of people spent their lives growing food." This supports the statement, so it is True.',
          },
          {
            id: 'rd-028-p1-q3',
            type: 'mcq',
            prompt: 'What does the passage say the term "megacity" means?',
            options: [
              'Any national capital with a large industrial economy',
              'An urban area whose population has passed ten million people',
              'A city that has grown faster than its national average',
              'A wealthy city in Europe or North America',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph A defines a megacity as "an urban area whose population has passed ten million people." Option B matches; the passage notes most megacities are NOT in Europe and North America, ruling out option D.',
          },
          {
            id: 'rd-028-p1-q4',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Urban growth caused by the existing residents of a city having children is called natural _______.',
            acceptableAnswers: ['increase'],
            explanation:
              'Paragraph C says urban growth from residents having children is "a process demographers call natural increase." The required word is "increase".',
          },
          {
            id: 'rd-028-p1-q5',
            type: 'tfng',
            prompt:
              'In every fast-growing city, migration from the countryside contributes more to growth than natural increase does.',
            answer: 'false',
            explanation:
              'Paragraph C states that "in many fast-growing cities this internal growth now outweighs the contribution of migration from the countryside," meaning natural increase often contributes more, not less. This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-028-p1-q6',
            type: 'mcq',
            prompt:
              'According to paragraph E, why are residents of informal settlements often reluctant to improve their homes?',
            options: [
              'They prefer to spend their wages on workshops and trade instead',
              'They have no legal title to their plots and fear being evicted',
              'The city has promised to rebuild the settlements for them',
              'Building materials are too expensive to obtain in the city',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph E states that "because residents have no legal title to their plots, they are reluctant to invest in better houses they might be evicted from." Option B matches this reasoning directly.',
          },
          {
            id: 'rd-028-p1-q7',
            type: 'tfng',
            prompt:
              'Planners have generally succeeded in preventing the largest cities from growing.',
            answer: 'false',
            explanation:
              'Paragraph F says planners have moved away from "the old dream of stopping cities from growing, which has almost never worked." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-028-p1-q8',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: One favoured approach concentrates new housing and offices along _______ served by mass transit, so people can travel by train or bus rather than car.',
            acceptableAnswers: ['corridors'],
            explanation:
              'Paragraph F describes concentrating new housing and offices "along corridors served by mass transit." The required word is "corridors".',
          },
        ],
      },
      // ───────────────────────────── PASSAGE 2 ─────────────────────────────
      {
        id: 'rd-academic-028-p2',
        title: 'Teaching the Body to Fight',
        body: `The human body is under constant siege. Bacteria, viruses, fungi and parasites surround us and slip inside at every opportunity, and any one of them, left unchecked, could multiply until it overwhelmed us. That this rarely happens is the work of the immune system, a defensive network of cells and molecules that patrols the body, recognises invaders and destroys them. A vaccine is a way of preparing that system in advance, so that when a dangerous microbe arrives the defences are already primed to defeat it before it can cause serious illness.

To understand how a vaccine works, one must first understand how the immune system identifies its enemies. Every microbe carries on its surface a set of distinctive molecules, often proteins or sugars, that the body can recognise as foreign. These molecular markers are called antigens, and they act rather like a uniform that tells the immune system which side a cell is on. When immune cells encounter an antigen they have not met before, a slow and elaborate response begins. Specialised white blood cells learn to recognise the new antigen and manufacture proteins called antibodies, which lock onto it with great precision, tagging the invader for destruction and blocking its ability to enter the body's own cells.

The first time the body meets a particular pathogen, this process is dangerously slow. It can take a week or more to build up enough antibodies to gain the upper hand, and during that time the invader multiplies freely and the person falls ill. The crucial feature of the system, however, is that it does not forget. After the threat has been beaten, a population of long-lived memory cells remains behind, carrying the recipe for the right antibody. Should the same pathogen ever return, these memory cells spring into action almost at once, flooding the body with antibodies so quickly that the infection is crushed before any symptoms appear. This is why a person who has recovered from certain diseases, such as measles, is protected against them for life.

A vaccine exploits this memory without requiring the person to suffer the disease first. It introduces the antigens of a dangerous microbe into the body in a form that cannot cause serious illness, tricking the immune system into mounting its slow first response and, crucially, into laying down memory cells. The person feels little or nothing, perhaps a sore arm or a mild fever, but emerges with the same lasting protection they would have gained from surviving the real infection. In effect, the vaccine lets the body rehearse the battle against a harmless stand-in, so that the real fight, if it ever comes, is won before it has begun.

Vaccines achieve this in several different ways, and the distinctions matter. The oldest kind uses whole microbes that have been either killed outright or weakened so severely that they can no longer cause disease; because the whole organism is present, such vaccines often produce a strong and durable response, though weakened-microbe versions are not always suitable for people with fragile immune systems. A second approach abandons the whole microbe and uses only a fragment of it — a single characteristic protein, for instance — which is enough to teach the immune system the antigen without introducing anything that could ever multiply. The newest methods go further still: rather than delivering the antigen itself, they deliver a set of genetic instructions that prompt the person's own cells to manufacture the antigen for a short time, after which the immune system responds to it as though to an invader.

The benefits of vaccination reach beyond the individual who receives the dose. When a large enough fraction of a population is immune, a chain of infection struggles to spread, because most of the people an infectious person meets cannot catch and pass on the disease. This indirect shield is known as herd immunity, and it protects even those who are not themselves vaccinated, including newborn babies too young for certain vaccines and people whose immune systems are too weak to be immunised safely. The exact proportion that must be immune for herd immunity to take hold varies from disease to disease, being higher for those that spread most easily. It is for this reason that gaps in vaccination coverage can allow a disease once thought banished to return, and why public health depends not only on individual choices but on the protection a community builds together.`,
        questions: [
          // ── Matching Information / which-paragraph (5 items) = 5 marks ──
          {
            id: 'rd-028-p2-q1',
            type: 'matching',
            variant: 'information',
            prompt:
              'The passage has six paragraphs, A–F. Which paragraph contains the following information? Write the correct letter, A–F. (You may use any letter more than once, but each statement here is found in only one paragraph.)',
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
                id: 'p2-i-1',
                text: 'a description of three different ways in which vaccines can be made',
                answer: 'E',
              },
              {
                id: 'p2-i-2',
                text: 'an explanation of how vaccination can protect people who have not been vaccinated',
                answer: 'F',
              },
              {
                id: 'p2-i-3',
                text: 'a definition of the molecular markers that allow the body to recognise invaders',
                answer: 'B',
              },
              {
                id: 'p2-i-4',
                text: 'the point that the body responds slowly the first time it meets a pathogen but remembers it afterwards',
                answer: 'C',
              },
              {
                id: 'p2-i-5',
                text: 'a statement that the immune system patrols the body and destroys invaders',
                answer: 'A',
              },
            ],
            explanation:
              'Item 1 → E, which contrasts killed/weakened whole microbes, single-protein fragments and genetic-instruction vaccines. Item 2 → F: herd immunity "protects even those who are not themselves vaccinated." Item 3 → B, which defines antigens as the surface "molecular markers" the body recognises as foreign. Item 4 → C: the first response is "dangerously slow" but the system "does not forget," leaving memory cells. Item 5 → A: the immune system "patrols the body, recognises invaders and destroys them."',
          },
          {
            id: 'rd-028-p2-q2',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The distinctive surface molecules that the body recognises as foreign are called _______.',
            acceptableAnswers: ['antigens'],
            explanation:
              'Paragraph B says these molecular markers "are called antigens." The required word is "antigens".',
          },
          {
            id: 'rd-028-p2-q3',
            type: 'mcq',
            prompt: 'According to paragraph B, what is the role of the proteins called antibodies?',
            options: [
              'They form the outer uniform that identifies a microbe',
              'They lock onto an antigen, tagging the invader and blocking its entry into cells',
              'They store the recipe for fighting a pathogen for life',
              'They weaken a microbe so it can no longer multiply',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph B says antibodies "lock onto it with great precision, tagging the invader for destruction and blocking its ability to enter the body\'s own cells." Option B matches; the long-term recipe is held by memory cells (paragraph C), not antibodies.',
          },
          {
            id: 'rd-028-p2-q4',
            type: 'gap',
            prompt:
              'Complete the sentence with TWO words from the passage: After an infection is beaten, long-lived _______ remain behind, carrying the recipe for the right antibody so the body can respond quickly next time.',
            acceptableAnswers: ['memory cells'],
            explanation:
              'Paragraph C states that "a population of long-lived memory cells remains behind, carrying the recipe for the right antibody." The required two words are "memory cells".',
          },
          {
            id: 'rd-028-p2-q5',
            type: 'tfng',
            prompt:
              'The first time the body meets a new pathogen, it produces enough antibodies within a few hours.',
            answer: 'false',
            explanation:
              'Paragraph C says the first response "is dangerously slow" and "can take a week or more to build up enough antibodies." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-028-p2-q6',
            type: 'mcq',
            prompt: 'How does a vaccine give protection, according to paragraph D?',
            options: [
              'By giving the person a mild case of the real disease to recover from',
              'By introducing antigens in a form that cannot cause serious illness, prompting memory cells to form',
              'By supplying ready-made antibodies that the body can use at once',
              'By permanently strengthening the rods and cones of the immune system',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph D says a vaccine "introduces the antigens of a dangerous microbe into the body in a form that cannot cause serious illness," prompting the slow first response and "laying down memory cells." Option B matches.',
          },
          {
            id: 'rd-028-p2-q7',
            type: 'tfng',
            prompt:
              'Vaccines that use weakened microbes are suitable for everyone, including people with fragile immune systems.',
            answer: 'false',
            explanation:
              'Paragraph E notes that "weakened-microbe versions are not always suitable for people with fragile immune systems." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-028-p2-q8',
            type: 'tfng',
            prompt:
              'The proportion of a population that must be immune for herd immunity is the same for every disease.',
            answer: 'false',
            explanation:
              'Paragraph F states that the proportion "varies from disease to disease, being higher for those that spread most easily." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-028-p2-q9',
            type: 'tfng',
            prompt:
              'The newest gene-based vaccines were more expensive to develop than older types of vaccine.',
            answer: 'not-given',
            explanation:
              'Paragraph E describes how the newest methods deliver genetic instructions rather than the antigen itself, but the passage says nothing about their cost compared with older vaccines. There is no information to confirm or contradict the statement, so it is Not Given.',
          },
        ],
      },
      // ───────────────────────────── PASSAGE 3 ─────────────────────────────
      {
        id: 'rd-academic-028-p3',
        title: 'Reading the Wrecks Beneath the Sea',
        body: `When a ship goes down, it carries with it a sealed record of the moment it sank. Unlike a settlement on land, which is built, rebuilt, robbed and rearranged over centuries, a wreck is created in an instant and then, in the best cases, left undisturbed for hundreds of years. Everything aboard at the fatal hour — the cargo, the crew's possessions, the tools, the food in the galley — settles together onto the seabed as a single closed group of objects, all of the same date. For this reason archaeologists prize wrecks as 'time capsules', and the study of them has become one of the most revealing branches of their science.

The sea, perhaps surprisingly, can be a far kinder guardian of the past than the land. The chief enemy of buried wood and metal is oxygen, which feeds the bacteria and chemical reactions that rot and corrode. On the open seabed, currents and burrowing creatures keep this destruction going, and an exposed wreck may be picked apart within a few decades. But where a wreck is quickly buried in fine mud or sand, the sediment seals it off from oxygen-rich water, and decay slows almost to a halt. Under such conditions materials that would have vanished long ago on land — timber hulls, leather shoes, coils of rope, even baskets of fruit — can survive in astonishing condition, because the very thing that destroys them has been shut out.

Finding and recording a wreck is painstaking work, carried out in a hostile environment where divers can stay down only for limited periods. The first task is to map the site precisely before anything is touched, since the position of each object relative to its neighbours is itself a vital piece of evidence. Archaeologists lay out a grid of lines across the seabed and record the location of every visible item within it, building up a detailed plan of the wreck as it lies. Only when this map is complete does careful excavation begin, often using a gentle suction device that lifts away sediment without disturbing the fragile objects beneath. The guiding rule is that an excavation destroys the very thing it studies, so nothing may be moved until its exact position has been written down.

The cargo of a wreck can tell historians far more than the simple fact of what was being carried. Because the goods aboard all date from a single voyage, a cargo of pottery or coins offers a tightly dated sample that can be used to fix the age of similar objects found elsewhere. The mixture of goods reveals the web of trade that the ship was part of: amphorae of a known type point to the region that produced the wine or oil they held, while a hold containing wares from several different lands maps out the routes along which those goods travelled. Even the humblest items matter. The remains of the crew's meals, the design of their cooking pots and the personal trinkets they carried can reveal where the sailors came from and how ordinary people of the period actually lived, a story rarely told by written records.

Raising an object from the sea is not the end of its journey but the beginning of a new and urgent struggle. An item that has lain waterlogged for centuries has reached a fragile equilibrium with its surroundings, and hauling it suddenly into the air can be catastrophic. Waterlogged wood, for example, may look solid but is often a soft, sodden sponge held together only by the water filling it; allowed to dry in the open, it shrinks, cracks and crumbles into fragments within days. To prevent this, conservators keep such timbers wet and replace the water inside them, over months or years, with a special wax that supports the cell walls so the wood can at last be dried without collapsing. Metal objects pose their own problem, having absorbed corrosive salts from the seawater that must be slowly washed out before the artefact can be stable in a museum. The work is so lengthy and costly that some experts argue many wrecks are better left where they lie, safe on the seabed, until the resources exist to treat properly whatever is brought up.`,
        questions: [
          // ── Matching Features — statements to categories (5 items) = 5 marks ──
          {
            id: 'rd-028-p3-q1',
            type: 'matching',
            variant: 'features',
            prompt:
              'Look at the following statements and the list of materials below. Match each statement to the material it relates to in the passage. Write the correct letter, A, B or C. NB You may use any letter more than once.',
            options: [
              { key: 'A', label: 'Waterlogged wood' },
              { key: 'B', label: 'Metal objects' },
              { key: 'C', label: 'Pottery and coins' },
            ],
            items: [
              {
                id: 'p3-f-1',
                text: 'have absorbed corrosive salts that must be slowly washed out.',
                answer: 'B',
              },
              {
                id: 'p3-f-2',
                text: 'provide a tightly dated sample that helps fix the age of similar finds elsewhere.',
                answer: 'C',
              },
              {
                id: 'p3-f-3',
                text: 'may look solid but can crumble into fragments within days if allowed to dry.',
                answer: 'A',
              },
              {
                id: 'p3-f-4',
                text: 'must have the water inside replaced with a special wax before drying.',
                answer: 'A',
              },
              {
                id: 'p3-f-5',
                text: 'in the form of amphorae can point to the region that produced their contents.',
                answer: 'C',
              },
            ],
            explanation:
              'Item 1 → B (metal): metal objects have "absorbed corrosive salts from the seawater that must be slowly washed out." Item 2 → C (pottery/coins): "a cargo of pottery or coins offers a tightly dated sample that can be used to fix the age of similar objects." Item 3 → A (wood): waterlogged wood "may look solid but... shrinks, cracks and crumbles into fragments within days." Item 4 → A (wood): conservators "replace the water inside them... with a special wax." Item 5 → C (pottery): "amphorae of a known type point to the region that produced the wine or oil they held."',
          },
          {
            id: 'rd-028-p3-q2',
            type: 'mcq',
            prompt: 'Why do archaeologists describe shipwrecks as "time capsules"?',
            options: [
              'Because they are usually discovered many centuries after they sank',
              'Because everything aboard sinks together as a single closed group of objects of the same date',
              'Because they are sealed inside containers before they go down',
              'Because they are rebuilt and rearranged over the centuries',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph A says everything aboard "settles together onto the seabed as a single closed group of objects, all of the same date," which is why wrecks are prized as "time capsules." Option B matches; option D describes settlements on land, the opposite case.',
          },
          {
            id: 'rd-028-p3-q3',
            type: 'tfng',
            prompt: 'The land usually preserves the remains of the past better than the sea does.',
            answer: 'false',
            explanation:
              'Paragraph B states that "the sea, perhaps surprisingly, can be a far kinder guardian of the past than the land." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-028-p3-q4',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The chief enemy of buried wood and metal is _______, which feeds the bacteria and chemical reactions that cause decay.',
            acceptableAnswers: ['oxygen'],
            explanation:
              'Paragraph B identifies the chief enemy of buried wood and metal as "oxygen, which feeds the bacteria and chemical reactions that rot and corrode." The required word is "oxygen".',
          },
          {
            id: 'rd-028-p3-q5',
            type: 'mcq',
            prompt:
              'According to paragraph B, why can a wreck buried in fine mud or sand survive in good condition?',
            options: [
              'Because the mud contains chemicals that strengthen old timber',
              'Because the sediment seals the wreck off from oxygen-rich water, slowing decay almost to a halt',
              'Because currents and burrowing creatures protect the buried objects',
              'Because cold deep water freezes the materials and stops all change',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph B explains that where a wreck is quickly buried, "the sediment seals it off from oxygen-rich water, and decay slows almost to a halt." Option B matches; currents and burrowing creatures are described as agents of destruction, not protection.',
          },
          {
            id: 'rd-028-p3-q6',
            type: 'tfng',
            prompt:
              'Archaeologists begin lifting objects from a wreck before making a map of the site.',
            answer: 'false',
            explanation:
              'Paragraph C says "the first task is to map the site precisely before anything is touched" and excavation begins "only when this map is complete." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-028-p3-q7',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Before recording begins, archaeologists lay out a _______ of lines across the seabed and note the location of every visible item within it.',
            acceptableAnswers: ['grid'],
            explanation:
              'Paragraph C states that "archaeologists lay out a grid of lines across the seabed and record the location of every visible item within it." The required word is "grid".',
          },
          {
            id: 'rd-028-p3-q8',
            type: 'tfng',
            prompt:
              'The everyday possessions of the crew can reveal information that written records rarely provide.',
            answer: 'true',
            explanation:
              'Paragraph D says the crew\'s meals, cooking pots and personal trinkets "can reveal where the sailors came from and how ordinary people of the period actually lived, a story rarely told by written records." This supports the statement, so it is True.',
          },
          {
            id: 'rd-028-p3-q9',
            type: 'mcq',
            prompt:
              'Why does the passage say that raising an object from the sea is "the beginning of a new and urgent struggle"?',
            options: [
              'Because the object must immediately be sold to a museum',
              'Because an object in a fragile equilibrium can be damaged when suddenly exposed to air',
              'Because divers can only stay underwater for limited periods',
              'Because the object must be photographed before it is moved',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph E says an object "has reached a fragile equilibrium with its surroundings, and hauling it suddenly into the air can be catastrophic," beginning the struggle of conservation. Option B matches this reasoning.',
          },
          {
            id: 'rd-028-p3-q10',
            type: 'tfng',
            prompt:
              'Some experts believe that many wrecks should be left on the seabed until there are resources to treat what is recovered.',
            answer: 'true',
            explanation:
              'Paragraph E states that "some experts argue many wrecks are better left where they lie, safe on the seabed, until the resources exist to treat properly whatever is brought up." This supports the statement, so it is True.',
          },
        ],
      },
    ],
  },
]
