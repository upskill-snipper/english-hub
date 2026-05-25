// ─── IELTS Academic Reading - practice item bank (Set 21) ──────────────────
// ORIGINAL content written for The English Hub. These passages and questions are
// invented purely to practise the Academic Reading question formats. They are
// NOT reproductions of any official IELTS past paper, and no official
// affiliation is implied. Academic track. Topic domains: the properties of water
// and why ice floats / a short history of banking and money / the exploration of
// the deep sea.
//
// This test uses the Matching question type three times: Matching Headings
// (Passage 1), Matching Information / which-paragraph (Passage 2), and Matching
// Features - statements to named people (Passage 3) - alongside the usual mix of
// True/False/Not Given, multiple choice and sentence/summary completion.
//
// One complete, carefully-checked test: 3 passages, 40 marks (each matching item
// counts as one mark). Every answer is verifiable from the passage text and is
// justified in the explanation. Every gap answer appears verbatim in its passage
// and each stated word limit matches the answer length exactly.
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const READING_SET_21: ReadingTest[] = [
  {
    id: 'rd-academic-021',
    title: 'Academic Reading - Practice Test 21',
    track: 'academic',
    estimatedMinutes: 60,
    passages: [
      // ───────────────────────────── PASSAGE 1 ─────────────────────────────
      {
        id: 'rd-academic-021-p1',
        title: 'Why Ice Floats',
        body: `Water is the most familiar substance on Earth, yet in several respects it behaves quite unlike almost any other liquid, and these oddities are the reason life as we know it is possible. The most striking of them is something we take entirely for granted: solid water floats on liquid water. Drop an ice cube into a glass and it bobs at the surface; in winter, lakes and ponds freeze from the top down rather than the bottom up. This seems so ordinary that few people stop to ask why it happens, but for the great majority of materials the opposite is true. When most substances freeze, their solid form is denser than their liquid form and therefore sinks. Water is a rare and important exception.

The explanation lies in the shape of the water molecule and the way its molecules link together. A single molecule consists of one oxygen atom joined to two hydrogen atoms, arranged not in a straight line but in a wide V. The oxygen atom pulls electric charge towards itself, so the molecule carries a slightly negative region near the oxygen and slightly positive regions near the hydrogens. Because opposite charges attract, the positive part of one molecule is drawn to the negative part of a neighbour, forming a weak link known as a hydrogen bond. These bonds are far weaker than the bonds holding a single molecule together, yet there are so many of them that, collectively, they govern almost everything water does.

In liquid water the molecules are close together but constantly jostling, their hydrogen bonds forming, breaking and reforming many times every second. When water cools and finally freezes, the molecules slow down and lock into a fixed, open framework in which each one is held at arm's length from its neighbours by rigid hydrogen bonds. This crystalline arrangement, with its regular hexagonal pattern, actually holds the molecules slightly further apart than they sit in the liquid. Because the same number of molecules now occupies a larger volume, ice is about nine per cent less dense than the water from which it formed, and so it floats. The very stiffness that makes ice solid is what makes it spacious, and therefore light.

This single quirk has consequences out of all proportion to its cause. Consider a lake in a cold climate. As the surface water cools it grows denser and sinks, drawing warmer water up to be cooled in turn, so the whole body of water mixes. But water reaches its greatest density not at freezing point but a few degrees above it, at around four degrees Celsius. Below that temperature the cold surface water becomes lighter again and stays on top, where it eventually freezes into a lid of ice. That floating lid then insulates the water beneath, slowing further heat loss. The result is that deep lakes seldom freeze solid, and fish and other creatures survive the winter in the liquid water below. Were ice to sink instead, lakes would freeze from the bottom upward and many would become solid blocks, lethal to almost everything living in them.

Water's hydrogen bonds explain a cluster of its other unusual habits as well. It can absorb a great deal of heat while changing temperature only slightly, because much of the incoming energy goes into breaking bonds rather than speeding the molecules up. This large heat capacity is why the oceans warm and cool slowly and so moderate the climate of the planet, keeping coastal regions milder than places far inland. The same bonding gives water an unusually high surface tension, strong enough to support small insects that skate across a pond, and it makes water a powerful solvent, able to dissolve a great variety of substances and carry them through soil, rivers and living bodies alike.

It is tempting to regard these properties as happy accidents, but they are better seen as the ordinary consequences of a particular molecular shape. The wide V of the water molecule and the hydrogen bonds it permits are not unique to our planet; the same physics would operate anywhere in the universe. What is remarkable is how much depends on them. A liquid whose solid floated, which stored heat, dissolved minerals and clung to itself, turned out to be exactly the medium in which complex chemistry, and eventually life, could take hold. The humble fact that ice floats is, in this light, one of the quiet foundations of the living world.`,
        questions: [
          // ── Matching Headings (6 items, 8 options → 2 distractors) = 6 marks ──
          {
            id: 'rd-021-p1-q1',
            type: 'matching',
            variant: 'headings',
            prompt:
              'The passage has six paragraphs, A-F. Choose the correct heading for each paragraph from the list of headings below. There are more headings than paragraphs, so you will not use them all. Write the correct number (i-viii) for each paragraph.',
            options: [
              { key: 'i', label: 'A familiar exception to a general rule' },
              { key: 'ii', label: 'How a method of measuring density was discovered' },
              { key: 'iii', label: 'The bent molecule and its weak links' },
              { key: 'iv', label: 'Why a floating lid keeps a lake alive' },
              { key: 'v', label: 'Freezing into an open, spacious framework' },
              { key: 'vi', label: 'Other habits explained by the same bonds' },
              { key: 'vii', label: 'Ordinary physics with extraordinary results' },
              { key: 'viii', label: 'How water is purified for drinking' },
            ],
            items: [
              { id: 'p1-h-a', text: 'Paragraph A', answer: 'i' },
              { id: 'p1-h-b', text: 'Paragraph B', answer: 'iii' },
              { id: 'p1-h-c', text: 'Paragraph C', answer: 'v' },
              { id: 'p1-h-d', text: 'Paragraph D', answer: 'iv' },
              { id: 'p1-h-e', text: 'Paragraph E', answer: 'vi' },
              { id: 'p1-h-f', text: 'Paragraph F', answer: 'vii' },
            ],
            explanation:
              'A points out that solid water floating is something "we take entirely for granted" although "for the great majority of materials the opposite is true" - a familiar exception (i). B describes the molecule as a "wide V" whose charges form a "weak link known as a hydrogen bond" (iii). C explains that on freezing the molecules "lock into a fixed, open framework" that is more spacious and so less dense (v). D works through how a floating "lid of ice" insulates the water so creatures "survive the winter" (iv). E lists water\'s other habits - high heat capacity, surface tension and solvent power - all from the same bonds (vi). F argues these are "the ordinary consequences of a particular molecular shape" with results on which "much depends" (vii). Heading ii (a method of measuring density) and heading viii (purifying drinking water) are distractors the passage never discusses.',
          },
          {
            id: 'rd-021-p1-q2',
            type: 'tfng',
            prompt: 'Most substances become denser when they change from a liquid into a solid.',
            answer: 'true',
            explanation:
              'Paragraph A states that "When most substances freeze, their solid form is denser than their liquid form and therefore sinks," and calls water "a rare and important exception." This matches the statement, so it is True.',
          },
          {
            id: 'rd-021-p1-q3',
            type: 'gap',
            prompt:
              'Complete the sentence with TWO words from the passage: The weak link formed between the positive part of one water molecule and the negative part of another is called a _______.',
            acceptableAnswers: ['hydrogen bond'],
            explanation:
              'Paragraph B says the positive part of one molecule "is drawn to the negative part of a neighbour, forming a weak link known as a hydrogen bond." The required two-word answer is "hydrogen bond".',
          },
          {
            id: 'rd-021-p1-q4',
            type: 'mcq',
            prompt: 'According to the passage, why is ice less dense than liquid water?',
            options: [
              'Its molecules move faster and so spread out.',
              'It contains fewer molecules than the same volume of liquid.',
              'Its rigid framework holds the molecules slightly further apart.',
              'The hydrogen bonds in ice are stronger than those in liquid water.',
            ],
            correctIndex: 2,
            explanation:
              'Paragraph C explains that the frozen, "open framework" holds molecules "slightly further apart than they sit in the liquid," so the same number of molecules "occupies a larger volume" and ice is "about nine per cent less dense." Option C states this.',
          },
          {
            id: 'rd-021-p1-q5',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Water reaches its greatest density at around _______ degrees Celsius, which is a little above its freezing point.',
            acceptableAnswers: ['four'],
            explanation:
              'Paragraph D states that "water reaches its greatest density not at freezing point but a few degrees above it, at around four degrees Celsius." The single required word is "four".',
          },
          {
            id: 'rd-021-p1-q6',
            type: 'tfng',
            prompt: 'In a cold climate, deep lakes usually freeze solid all the way to the bottom.',
            answer: 'false',
            explanation:
              'Paragraph D says "deep lakes seldom freeze solid" because the floating ice lid insulates the water below, allowing fish to survive. The statement contradicts this, so it is False.',
          },
          {
            id: 'rd-021-p1-q7',
            type: 'tfng',
            prompt:
              'Scientists have recently found liquid water on a planet beyond our solar system.',
            answer: 'not-given',
            explanation:
              'Paragraph F observes that the same physics "would operate anywhere in the universe," but the passage makes no claim that liquid water has actually been found on any other planet. There is no information to confirm or deny the statement, so it is Not Given.',
          },
          {
            id: 'rd-021-p1-q8',
            type: 'mcq',
            prompt: 'According to the passage, why do the oceans warm and cool slowly?',
            options: [
              'Because salt water freezes at a lower temperature than fresh water',
              'Because water can absorb much heat while changing temperature only slightly',
              'Because the high surface tension of water traps heat at the surface',
              'Because ice forms a lid that prevents heat from escaping the oceans',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph E states that water "can absorb a great deal of heat while changing temperature only slightly," and that "This large heat capacity is why the oceans warm and cool slowly and so moderate the climate." Option B states this; the ice-lid point (D) concerns lakes, not the oceans.',
          },
          {
            id: 'rd-021-p1-q9',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Compared with the water from which it forms, ice is about nine per cent less _______, which is why it floats.',
            acceptableAnswers: ['dense'],
            explanation:
              'Paragraph C states that "ice is about nine per cent less dense than the water from which it formed, and so it floats." The single required word is "dense".',
          },
        ],
      },
      // ───────────────────────────── PASSAGE 2 ─────────────────────────────
      {
        id: 'rd-academic-021-p2',
        title: 'A Short History of Money and Banking',
        body: `Long before there were coins or banks, people exchanged goods directly: a farmer with surplus grain might swap it for a neighbour's cloth or tools. Such barter works well enough in a small community, but it suffers from an awkward limitation that economists call the double coincidence of wants. For a trade to happen, each party must want precisely what the other is offering, at the same moment and in the right quantity. A potter who needs shoes must find a shoemaker who happens to want pots; if the shoemaker wants only grain, no exchange can take place. As communities grew larger and their goods more varied, this clumsiness became a serious brake on trade, and the search for something better was on.

The solution was money: some commodity that everyone in a society agreed to accept, not because they wanted it for its own sake but because they knew others would take it in turn. Many things have served this purpose, including cattle, salt, shells and bars of grain, but metals proved especially convenient. Gold and silver are durable, easy to divide into smaller amounts, and valuable enough that a worthwhile sum is light to carry. At first such metal changed hands as rough lumps that had to be weighed and tested at every transaction. The decisive refinement, which appeared independently in several ancient societies, was the coin: a piece of metal of standard weight and purity, stamped by an authority to certify its value, so that it could be counted rather than weighed.

Coins solved many problems but created a new one, for precious metal is heavy and risky to move in quantity over long distances. Merchants travelling between distant cities were reluctant to carry chests of gold along roads where robbers waited. An elegant answer emerged in several trading civilisations: the merchant deposited coin with a trusted party in one city and received a written note promising that the same sum could be collected from an associate in another. The note, not the metal, then made the journey. This was the seed of paper money, and it rested entirely on trust - on the confidence that the promise written on the paper would be honoured.

From safekeeping it was a short step to lending, and with lending the bank in its modern sense was born. Those who stored other people's gold soon noticed that depositors rarely came to reclaim it all at once; on any given day, only a fraction was withdrawn while the rest lay idle in the vault. A storekeeper of gold could therefore lend out much of what was deposited, charging interest, while keeping back enough to satisfy the few who came to withdraw. This practice, in which a bank holds only a portion of its deposits in reserve and lends the remainder, is the foundation of banking to this day. It allows savings to be put to productive use rather than sitting uselessly in a strongbox, and in effect it creates new money, since both the original depositor and the borrower now have funds to spend.

The arrangement is powerful but contains an obvious danger. Because the bank does not actually hold all the money it owes, it depends on depositors not demanding their funds simultaneously. If enough people lose confidence and rush to withdraw at once, even a sound bank can be drained, for it cannot quickly turn its loans back into cash. Such a panic, known as a bank run, can spread from one institution to another as fear feeds on itself. The history of banking is in large part a history of attempts to guard against this fragility, through reserves, regulation, and ultimately central banks willing to lend in an emergency.

Money has continued to grow more abstract with each stage of this history. It began as a useful commodity, became a stamped coin, then a paper promise, then an entry in a ledger, and is now most often a pattern of electrons in a computer, moved between accounts at the touch of a screen. At each step the physical substance has mattered less and the underlying trust has mattered more. A modern banknote is worth something not because of the paper but because a society collectively agrees to treat it as valuable, and the same is true of the figures in a bank account. For all its sophistication, the financial system still rests on the same foundation as that first reluctant swap of grain for cloth: the confidence that what one accepts today, others will accept tomorrow.`,
        questions: [
          // ── Matching Information / which-paragraph (5 items) = 5 marks ──
          {
            id: 'rd-021-p2-q1',
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
                id: 'p2-i-1',
                text: 'an account of how lending against deposits effectively creates new money',
                answer: 'D',
              },
              {
                id: 'p2-i-2',
                text: 'a description of the difficulty known as the double coincidence of wants',
                answer: 'A',
              },
              {
                id: 'p2-i-3',
                text: 'the claim that money has become steadily less physical over time',
                answer: 'F',
              },
              {
                id: 'p2-i-4',
                text: 'an explanation of why a written note rather than metal began to travel between cities',
                answer: 'C',
              },
              {
                id: 'p2-i-5',
                text: 'the reasons metals such as gold and silver were well suited to use as money',
                answer: 'B',
              },
            ],
            explanation:
              'Item 1 → D, which says a bank that lends most of its deposits "in effect... creates new money, since both the original depositor and the borrower now have funds to spend." Item 2 → A, which defines "the double coincidence of wants." Item 3 → F: money "began as a useful commodity... and is now most often a pattern of electrons," growing "more abstract." Item 4 → C: merchants used a written note so "The note, not the metal, then made the journey." Item 5 → B: "Gold and silver are durable, easy to divide... and valuable enough that a worthwhile sum is light to carry."',
          },
          {
            id: 'rd-021-p2-q2',
            type: 'tfng',
            prompt:
              'For a barter exchange to succeed, each person must want exactly what the other is offering.',
            answer: 'true',
            explanation:
              'Paragraph A explains that for a barter trade "each party must want precisely what the other is offering, at the same moment and in the right quantity." This matches the statement, so it is True.',
          },
          {
            id: 'rd-021-p2-q3',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: A piece of metal of standard weight and purity, stamped by an authority to certify its value, is a _______.',
            acceptableAnswers: ['coin'],
            explanation:
              'Paragraph B defines "the coin: a piece of metal of standard weight and purity, stamped by an authority to certify its value, so that it could be counted rather than weighed." The single required word is "coin".',
          },
          {
            id: 'rd-021-p2-q4',
            type: 'mcq',
            prompt:
              'Why did merchants begin to use written notes instead of carrying coin between cities?',
            options: [
              'Coins were often found to be of impure metal.',
              'Precious metal was heavy and risky to transport over long distances.',
              'Notes could be exchanged for a greater amount of gold.',
              'Authorities had banned the movement of coins between cities.',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph C states that "precious metal is heavy and risky to move in quantity over long distances" and that merchants feared robbers, so they sent a note instead of the metal. Option B captures this; the other options are not stated.',
          },
          {
            id: 'rd-021-p2-q5',
            type: 'gap',
            prompt:
              'Complete the summary with ONE word from the passage: Bankers realised that depositors rarely withdrew all their gold at once, so much of it lay _______ in the vault and could be lent out.',
            acceptableAnswers: ['idle'],
            explanation:
              'Paragraph D says that "on any given day, only a fraction was withdrawn while the rest lay idle in the vault." The single required word is "idle".',
          },
          {
            id: 'rd-021-p2-q6',
            type: 'gap',
            prompt:
              'Complete the sentence with TWO words from the passage: A sudden loss of confidence that makes many depositors try to withdraw their money at the same time is called a _______.',
            acceptableAnswers: ['bank run'],
            explanation:
              'Paragraph E says that when people "rush to withdraw at once," such a panic is "known as a bank run." The required two-word answer is "bank run".',
          },
          {
            id: 'rd-021-p2-q7',
            type: 'tfng',
            prompt: 'A bank run is dangerous only for banks that have been managed badly.',
            answer: 'false',
            explanation:
              'Paragraph E states that if enough people withdraw at once, "even a sound bank can be drained," because it cannot quickly turn loans into cash. Since well-run banks are also at risk, the statement is False.',
          },
          {
            id: 'rd-021-p2-q8',
            type: 'mcq',
            prompt:
              'What does the writer suggest is the ultimate basis of the modern financial system?',
            options: [
              'The amount of gold a country keeps in reserve',
              'The physical materials from which money is made',
              'The collective trust that others will accept what one accepts today',
              'The speed at which money can be moved electronically',
            ],
            correctIndex: 2,
            explanation:
              'Paragraph F concludes that a banknote is valuable "not because of the paper but because a society collectively agrees to treat it as valuable," and that the system rests on "the confidence that what one accepts today, others will accept tomorrow." Option C reflects this.',
          },
          {
            id: 'rd-021-p2-q9',
            type: 'tfng',
            prompt:
              'The first coins were created in China before spreading to other parts of the world.',
            answer: 'not-given',
            explanation:
              'Paragraph B says the coin "appeared independently in several ancient societies" but does not name China or describe coins spreading from one place. The passage gives no information to confirm or deny this, so it is Not Given.',
          },
        ],
      },
      // ───────────────────────────── PASSAGE 3 ─────────────────────────────
      {
        id: 'rd-academic-021-p3',
        title: 'Into the Deep',
        body: `For most of human history the deep ocean was less a place than a void, imagined as a lightless, lifeless abyss beneath the reach of any sounding line. The sea floor that covers most of the planet remained, until astonishingly recently, more obscure to us than the surface of the Moon. The reason is not lack of interest but the sheer hostility of the environment. Sunlight fades to nothing within a few hundred metres of the surface, and below that the water is utterly dark, close to freezing, and crushed under a pressure that climbs by roughly one atmosphere for every ten metres of depth. At the bottom of the deepest trenches the weight of water overhead is more than a thousand times that at the surface - enough, the engineer Marcus Devi observes, to flatten any vessel not built as a thick, near-perfect sphere, since that shape alone distributes such a load evenly.

The first systematic attempt to learn what lay below came in the nineteenth century, when a converted warship spent more than three years dragging nets and lowering weighted lines across the world's oceans. The expedition hauled up thousands of previously unknown creatures and produced the first rough map of the sea floor, overturning the widespread assumption that nothing could live in the cold and dark of the depths. The marine biologist Helen Sato regards that voyage as the true beginning of the science, not because its equipment was sophisticated - it was crude, and much was guessed at - but because it replaced speculation with specimens. After it, she argues, the deep sea could no longer be dismissed as empty; it had become a place with inhabitants, however strange, that demanded explanation.

Reaching the bottom in person took longer. In the mid-twentieth century a specially built vessel, in essence a heavy steel sphere slung beneath a float, carried two people to the floor of the deepest known trench, almost eleven kilometres down. It was a feat of extraordinary daring, but the craft could barely manoeuvre and the visit was brief, and for decades afterwards almost no one returned. Manned descents of this kind, Devi points out, are spectacular but enormously expensive and risky, and they keep a human being in danger for the sake of a few hours on the bottom. The future of exploration, in his view, belongs largely to machines.

Those machines now do most of the work. Remotely operated vehicles, tethered to a ship by a long cable that supplies power and carries back a stream of images, can hover over the sea floor for hours while an operator far above guides their cameras and robotic arms. Their untethered cousins, the autonomous vehicles, carry their own power and follow a programmed course, mapping vast areas of seabed without any cable at all. Helen Sato is enthusiastic about these tools but warns against expecting too much of them. A camera, she notes, sees only a narrow patch of ground at a time, and much of the deep sea is so little explored that a single dive in a new region routinely turns up species unknown to science. We have, she suggests, glimpsed only scattered fragments of the largest habitat on Earth.

What those fragments reveal has overturned an old assumption about the basis of life itself. On the sunlit surface, almost all life depends ultimately on photosynthesis, the capture of light by plants and algae. Yet in the 1970s explorers discovered, around volcanic vents on the deep sea floor, dense communities of creatures thriving in total darkness. These ecosystems are built not on sunlight but on chemosynthesis: bacteria there harvest energy from chemicals dissolved in the hot water gushing from the vents, and larger animals feed on the bacteria in turn. The discovery showed that life can be powered by sources other than the Sun, a finding that, the astrobiologist Tomas Reyes argues, transformed the search for life beyond Earth. If life can flourish around a vent in the dark, he reasons, it might equally exist in the hidden oceans thought to lie beneath the ice of certain moons of the outer planets.

The deep ocean therefore occupies a curious position in science: it is at once the least explored part of our own planet and a rehearsal for the exploration of others. Reyes is fond of noting that we have far better maps of the surface of Mars than of our own sea floor, much of which has never been seen at the fine scale at which the land has long been charted. The instruments improve year by year, and each expedition fills in a little more of the blank. But the deep remains, for now, the great unexplored country of the Earth, vast and dark and full of life we are only beginning to suspect.`,
        questions: [
          // ── Matching Features - statements to people (5 items) = 5 marks ──
          {
            id: 'rd-021-p3-q1',
            type: 'matching',
            variant: 'features',
            prompt:
              'Look at the following statements and the list of people below. Match each statement to the person who expresses that view in the passage. Write the correct letter, A, B or C. NB You may use any letter more than once.',
            options: [
              { key: 'A', label: 'Marcus Devi' },
              { key: 'B', label: 'Helen Sato' },
              { key: 'C', label: 'Tomas Reyes' },
            ],
            items: [
              {
                id: 'p3-f-1',
                text: 'The future of deep-sea exploration belongs mainly to machines rather than people.',
                answer: 'A',
              },
              {
                id: 'p3-f-2',
                text: 'The discovery of life around vents changed the search for life on other worlds.',
                answer: 'C',
              },
              {
                id: 'p3-f-3',
                text: 'A nineteenth-century voyage marked the true beginning of deep-sea science.',
                answer: 'B',
              },
              {
                id: 'p3-f-4',
                text: 'A near-perfect sphere is the only shape that can withstand the deepest pressures.',
                answer: 'A',
              },
              {
                id: 'p3-f-5',
                text: 'Even today, a single dive in an unexplored area often finds new species.',
                answer: 'B',
              },
            ],
            explanation:
              'Item 1 → A (Devi): manned descents are "spectacular but enormously expensive and risky," and "The future of exploration, in his view, belongs largely to machines." Item 2 → C (Reyes): the vent discovery "transformed the search for life beyond Earth." Item 3 → B (Sato): she "regards that voyage as the true beginning of the science." Item 4 → A (Devi): pressure is "enough... to flatten any vessel not built as a thick, near-perfect sphere, since that shape alone distributes such a load evenly." Item 5 → B (Sato): "a single dive in a new region routinely turns up species unknown to science."',
          },
          {
            id: 'rd-021-p3-q2',
            type: 'tfng',
            prompt:
              'Water pressure in the ocean increases by about one atmosphere for every ten metres of depth.',
            answer: 'true',
            explanation:
              'Paragraph A states that pressure "climbs by roughly one atmosphere for every ten metres of depth." This matches the statement, so it is True.',
          },
          {
            id: 'rd-021-p3-q3',
            type: 'mcq',
            prompt:
              'According to the passage, why was the nineteenth-century expedition so important?',
            options: [
              'It used highly sophisticated equipment for its time.',
              'It was the first craft to carry people to the deepest trench.',
              'It replaced guesswork about the deep sea with actual specimens.',
              'It produced the first detailed map of the surface of the Moon.',
            ],
            correctIndex: 2,
            explanation:
              'Paragraph B says the voyage mattered "not because its equipment was sophisticated - it was crude... but because it replaced speculation with specimens." Option C states this; the manned descent to the trench is a separate, later event (paragraph C).',
          },
          {
            id: 'rd-021-p3-q4',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: A remotely operated vehicle is connected to its ship by a long _______ that supplies power and carries back images.',
            acceptableAnswers: ['cable'],
            explanation:
              'Paragraph D describes remotely operated vehicles as "tethered to a ship by a long cable that supplies power and carries back a stream of images." The single required word is "cable".',
          },
          {
            id: 'rd-021-p3-q5',
            type: 'tfng',
            prompt:
              'Autonomous underwater vehicles are connected to a ship by a cable while they work.',
            answer: 'false',
            explanation:
              'Paragraph D calls the autonomous vehicles the "untethered cousins" of remotely operated ones; they "carry their own power and follow a programmed course... without any cable at all." The statement contradicts this, so it is False.',
          },
          {
            id: 'rd-021-p3-q6',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Around volcanic vents, communities of creatures live by _______ rather than by photosynthesis, harvesting energy from chemicals in the water.',
            acceptableAnswers: ['chemosynthesis'],
            explanation:
              'Paragraph E states that these vent ecosystems "are built not on sunlight but on chemosynthesis: bacteria there harvest energy from chemicals dissolved in the hot water." The single required word is "chemosynthesis".',
          },
          {
            id: 'rd-021-p3-q7',
            type: 'mcq',
            prompt: 'What did the discovery of life around deep-sea vents demonstrate?',
            options: [
              'That photosynthesis also takes place in the deep ocean',
              'That life can be powered by sources other than the Sun',
              'That the deep sea contains no life except bacteria',
              'That sunlight reaches the floor of the deepest trenches',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph E says the vent communities "showed that life can be powered by sources other than the Sun." Option B states this directly; the larger animals there feed on bacteria, so option C is wrong.',
          },
          {
            id: 'rd-021-p3-q8',
            type: 'tfng',
            prompt:
              'There are more detailed maps of the surface of Mars than of much of the Earth’s sea floor.',
            answer: 'true',
            explanation:
              'Paragraph F reports Reyes "noting that we have far better maps of the surface of Mars than of our own sea floor, much of which has never been seen at the fine scale at which the land has long been charted." This matches the statement, so it is True.',
          },
          {
            id: 'rd-021-p3-q9',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Reyes suggests life might exist in the hidden oceans thought to lie beneath the ice of certain _______ of the outer planets.',
            acceptableAnswers: ['moons'],
            explanation:
              'Paragraph E reports Reyes reasoning that life "might equally exist in the hidden oceans thought to lie beneath the ice of certain moons of the outer planets." The single required word is "moons".',
          },
        ],
      },
    ],
  },
]
