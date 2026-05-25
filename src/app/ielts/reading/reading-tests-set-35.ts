// ─── IELTS Academic Reading — practice item bank (Set 35) ──────────────────
// ORIGINAL content written for The English Hub. These passages and questions are
// invented purely to practise the Academic Reading question formats. They are
// NOT reproductions of any official IELTS past paper, and no official
// affiliation is implied. Academic track. Topic domains: echolocation in animals
// / the invention of the telephone / why soil matters.
//
// This test is MATCHING-RICH. It contains four matching questions across four
// different variants: Matching Headings (Passage 1), Matching Information /
// which-paragraph (Passage 2), Matching Features — statements to animals
// (Passage 3) and Matching Sentence Endings (Passage 3), alongside the usual mix
// of True/False/Not Given, multiple choice and sentence/summary completion.
//
// One complete, carefully-checked test: 3 passages, 40 marks (each matching item
// counts as one mark). Every answer is verifiable from the passage text and is
// justified in the explanation. Marks: P1 = 6 (matching) + 7 = 13; P2 = 5
// (matching) + 8 = 13; P3 = 5 (matching features) + 4 (matching endings) + 5 =
// 14. Total = 40.
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const READING_SET_35: ReadingTest[] = [
  {
    id: 'rd-academic-035',
    title: 'Academic Reading — Practice Test 35',
    track: 'academic',
    estimatedMinutes: 60,
    passages: [
      // ───────────────────────────── PASSAGE 1 ─────────────────────────────
      {
        id: 'rd-academic-035-p1',
        title: 'Seeing With Sound',
        body: `On a moonless night a bat slips between the branches of a wood, snatching insects from the air without once colliding with a twig. It is not guided by its eyes, which in many species are small and of little use in the dark. Instead the animal is listening to a world it has built for itself out of sound. As it flies it pours out a stream of high-pitched calls and reads the faint echoes that bounce back, assembling from them a picture of its surroundings as detailed, in its own way, as anything we see by light. This trick of navigating and hunting by echo is called echolocation, and it is one of the most remarkable adaptations in the animal kingdom.

The principle is simple to state. A bat produces a burst of sound, the sound spreads out and strikes whatever lies ahead, and a portion of it returns as an echo. From the time the echo takes to come back, the animal can judge how far away an object is, since sound travels at a steady speed; from the direction the echo arrives, it can tell where the object lies; and from subtle changes in the returning sound it can read the object's size, texture and even whether it is moving. The calls themselves are mostly far too high for human ears, lying in the ultrasonic range above the upper limit of our hearing, which is why a hunting bat seems to us to fly in silence.

Producing and interpreting these signals demands an extraordinary body. Many bats generate their calls in the voice box, or larynx, and emit them through the mouth or, in some species, the nose, which may be wrapped in elaborate folds of skin that help to shape and aim the beam. The ears are large and exquisitely sensitive, often equipped with their own muscles that can adjust their shape from one instant to the next. There is, however, an obvious danger in shouting and listening at the same moment: the outgoing call is many times louder than the returning echo, and could easily deafen the animal to the very signal it needs to hear. To avoid this, a bat momentarily contracts a tiny muscle in its middle ear that dampens its hearing during each call, then relaxes it in time to catch the echo a fraction of a second later, a feat of timing repeated many times every second.

Bats are not alone in this skill. In the sea, where light fades to blackness within a few hundred metres of the surface, dolphins and other toothed whales have arrived at a strikingly similar solution. A dolphin produces rapid trains of clicks, not in its larynx but by forcing air through structures in its nasal passages, and focuses the sound through a rounded mass of fatty tissue in its forehead known as the melon, which works rather like a lens to concentrate the clicks into a beam. The returning echoes are received not through the ear opening but largely through the lower jaw, whose fat-filled channel carries the vibrations inward to the ear. With this apparatus a dolphin can locate a fish buried in sand or distinguish objects that differ only slightly in shape, building a sound-picture of its murky world.

That two such different creatures, a flying mammal and a swimming one, should have developed the same fundamental ability is a textbook case of what biologists call convergent evolution: the independent arrival at similar solutions because both face a similar problem, in this case the need to sense surroundings where vision fails. The resemblance is not one of shared ancestry but of shared challenge. Nature, it seems, will find the same good answer more than once if the question is pressing enough.

Human beings have learned to borrow the idea. The sonar that allows ships to map the seabed or detect objects underwater works on exactly the bat's principle, sending out a pulse of sound and timing its echo, and was developed with particular urgency for finding hidden vessels during the wars of the twentieth century. The same reasoning, using radio waves rather than sound, underlies radar. More quietly, a number of blind people have taught themselves a form of human echolocation, making sharp clicks with the tongue and learning to read the echoes well enough to walk through unfamiliar places and avoid obstacles, a striking reminder that the brain, given the right signals, can construct a sense of space from sound alone.`,
        questions: [
          // ── Matching Headings (6 items, 8 options → 2 distractors) = 6 marks ──
          {
            id: 'rd-035-p1-q1',
            type: 'matching',
            variant: 'headings',
            prompt:
              'The passage has six paragraphs, A–F. Choose the correct heading for each paragraph from the list of headings below. There are more headings than paragraphs, so you will not use them all. Write the correct number (i–viii) for each paragraph.',
            options: [
              { key: 'i', label: 'Two distant animals, one shared answer' },
              { key: 'ii', label: 'The body built for sound' },
              { key: 'iii', label: 'A hunter that listens in the dark' },
              { key: 'iv', label: 'How echoes are turned into a picture' },
              { key: 'v', label: 'The same skill beneath the waves' },
              { key: 'vi', label: 'From warships to the human tongue' },
              { key: 'vii', label: 'Why bats are losing their eyesight' },
              { key: 'viii', label: 'Teaching dolphins to follow ships' },
            ],
            items: [
              { id: 'p1-h-a', text: 'Paragraph A', answer: 'iii' },
              { id: 'p1-h-b', text: 'Paragraph B', answer: 'iv' },
              { id: 'p1-h-c', text: 'Paragraph C', answer: 'ii' },
              { id: 'p1-h-d', text: 'Paragraph D', answer: 'v' },
              { id: 'p1-h-e', text: 'Paragraph E', answer: 'i' },
              { id: 'p1-h-f', text: 'Paragraph F', answer: 'vi' },
            ],
            explanation:
              'A introduces a bat hunting in darkness by listening, not by sight (iii). B explains how the timing and direction of echoes are read into a picture of distance, size and movement (iv). C describes the specialised larynx, nose folds, sensitive ears and the middle-ear muscle — the body built for sound (ii). D moves to dolphins and toothed whales using the same skill in the sea (v). E names convergent evolution: two distant animals reaching one shared answer (i). F covers sonar, radar and human tongue-clicking (vi). Heading vii (bats losing eyesight) is a distractor — the passage says their eyes are small but never that sight is being lost; heading viii (training dolphins to follow ships) is never stated.',
          },
          {
            id: 'rd-035-p1-q2',
            type: 'tfng',
            prompt: 'The calls most bats make are too high-pitched for people to hear.',
            answer: 'true',
            explanation:
              'Paragraph B says the calls are "mostly far too high for human ears, lying in the ultrasonic range above the upper limit of our hearing." This matches the statement, so it is True.',
          },
          {
            id: 'rd-035-p1-q3',
            type: 'mcq',
            prompt: 'According to paragraph B, how can a bat judge how far away an object is?',
            options: [
              'From how loud the returning echo is',
              'From the time the echo takes to come back, since sound travels at a steady speed',
              'From the direction in which the echo arrives',
              'From the pitch of the call it sends out',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph B states that "From the time the echo takes to come back, the animal can judge how far away an object is, since sound travels at a steady speed." Option B matches. Direction (option C) tells the bat where the object lies, not how far away.',
          },
          {
            id: 'rd-035-p1-q4',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Many bats produce their calls in the voice box, or _______, and emit them through the mouth or nose.',
            acceptableAnswers: ['larynx'],
            explanation:
              'Paragraph C says many bats "generate their calls in the voice box, or larynx, and emit them through the mouth or... the nose." The required word is "larynx".',
          },
          {
            id: 'rd-035-p1-q5',
            type: 'mcq',
            prompt:
              'Why does a bat briefly contract a tiny muscle in its middle ear during each call?',
            options: [
              'To make its own call louder so the echo returns more strongly',
              'To aim the outgoing beam of sound more precisely',
              'To dampen its hearing so the loud call does not deafen it to the faint echo',
              'To keep the ear from being damaged by cold air during flight',
            ],
            correctIndex: 2,
            explanation:
              'Paragraph C explains that the call "could easily deafen the animal," so "a bat momentarily contracts a tiny muscle in its middle ear that dampens its hearing during each call, then relaxes it in time to catch the echo." Option C matches.',
          },
          {
            id: 'rd-035-p1-q6',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: A dolphin focuses its clicks through a rounded mass of fatty tissue in its forehead called the _______, which acts like a lens.',
            acceptableAnswers: ['melon'],
            explanation:
              'Paragraph D describes "a rounded mass of fatty tissue in its forehead known as the melon, which works rather like a lens." The required word is "melon".',
          },
          {
            id: 'rd-035-p1-q7',
            type: 'tfng',
            prompt:
              'Bats and dolphins developed echolocation because they inherited it from a recent common ancestor.',
            answer: 'false',
            explanation:
              'Paragraph E states the resemblance "is not one of shared ancestry but of shared challenge," calling it convergent evolution. This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-035-p1-q8',
            type: 'tfng',
            prompt:
              'Sonar was used to locate enemy ships during the wars of the twentieth century.',
            answer: 'true',
            explanation:
              'Paragraph F says sonar "was developed with particular urgency for finding hidden vessels during the wars of the twentieth century." This matches the statement, so it is True.',
          },
        ],
      },
      // ───────────────────────────── PASSAGE 2 ─────────────────────────────
      {
        id: 'rd-academic-035-p2',
        title: 'The Race to Speak Down a Wire',
        body: `For most of human history a message could travel no faster than the person or horse that carried it. The electric telegraph, which spread along the railways from the 1840s, broke that limit by sending coded pulses down a wire almost instantly, but it could carry only dots and dashes, tapped out and decoded by trained operators. The dream that followed was bolder: to send not a code but the human voice itself, so that two people far apart might simply talk. Turning that dream into a working machine was the great communications puzzle of the middle of the nineteenth century, and the contest to solve it was unusually close.

The man whose name is now bound to the invention is Alexander Graham Bell, a teacher of the deaf whose deep interest in the mechanics of speech and hearing led him toward the problem. Bell reasoned that if a sound could be made to vary an electric current in step with itself, the current could be sent down a wire and used to recreate the sound at the far end. His version of the device used a thin sheet, or diaphragm, that vibrated when a person spoke into it; the vibration disturbed a magnet and so varied a current flowing in a nearby coil of wire. At the receiving end the changing current worked a second diaphragm, pushing it back and forth to reproduce the original sound. On the tenth of March 1876, Bell famously called to his assistant in the next room, and the words carried clearly down the wire.

How close the race had been became a matter of bitter dispute. On the very same day that Bell's lawyers filed his patent application, another American inventor, Elisha Gray, lodged a document describing a strikingly similar idea. Which of the two had reached the patent office first, and whether either had borrowed from the other, would be argued in courtrooms for years; Bell's patent was challenged many times but ultimately upheld. The episode is often cited as a reminder that great inventions rarely spring from a single mind in isolation, but tend to ripen when the surrounding knowledge has made them, in a sense, ready to be found.

A single telephone is useless; its value lies in the network of other telephones it can reach. The earliest systems simply joined one instrument directly to another by a private line, which was adequate for a factory owner who wished to speak to his warehouse but hopeless as a way of connecting a whole city. The breakthrough was the exchange, a central office to which every subscriber's line ran and at which calls could be joined together. In the first exchanges this joining was done by hand: an operator sitting before a switchboard listened to each request and physically plugged a cord into the socket of the wanted line. As cities grew, these manual exchanges employed armies of operators and grew ever harder to manage, until they were gradually replaced by automatic switching machines that connected calls without human help.

The social effects of the spreading network were profound and not always the ones expected. The telephone collapsed distance, allowing a voice to cross a city or, in time, a continent in an instant, and it gradually reached from the offices of business into ordinary homes. It changed the texture of daily life in ways large and small: families kept in touch across greater distances, businesses could coordinate far-flung operations, and a call could summon help in an emergency far faster than any messenger. Some observers worried that the device would erode privacy or encourage idle chatter, and the early shared lines, on which several households used a single circuit, certainly allowed the curious to listen in on their neighbours. Yet the convenience proved irresistible, and within a few decades the once-astonishing ability to speak to a distant person had become so ordinary that people ceased to think of it as remarkable at all.`,
        questions: [
          // ── Matching Information / which-paragraph (5 items) = 5 marks ──
          {
            id: 'rd-035-p2-q1',
            type: 'matching',
            variant: 'information',
            prompt:
              'The passage has five paragraphs, A–E. Which paragraph contains the following information? Write the correct letter, A–E. (You may use any letter more than once, but each statement here is found in only one paragraph.)',
            options: [
              { key: 'A', label: 'Paragraph A' },
              { key: 'B', label: 'Paragraph B' },
              { key: 'C', label: 'Paragraph C' },
              { key: 'D', label: 'Paragraph D' },
              { key: 'E', label: 'Paragraph E' },
            ],
            items: [
              {
                id: 'p2-i-a',
                text: 'a description of how the central exchange replaced direct connections between instruments',
                answer: 'D',
              },
              {
                id: 'p2-i-b',
                text: 'an account of two inventors filing similar claims on the same day',
                answer: 'C',
              },
              {
                id: 'p2-i-c',
                text: 'an explanation of the limitation of the telegraph that the telephone overcame',
                answer: 'A',
              },
              {
                id: 'p2-i-d',
                text: 'a concern that the new device might reduce privacy',
                answer: 'E',
              },
              {
                id: 'p2-i-e',
                text: 'a description of how a diaphragm and a magnet were used to vary an electric current',
                answer: 'B',
              },
            ],
            explanation:
              'Item a → D: the exchange, "a central office to which every subscriber\'s line ran," replaced private lines joining one instrument to another. Item b → C: on the same day Bell filed, "Elisha Gray, lodged a document describing a strikingly similar idea." Item c → A: the telegraph "could carry only dots and dashes," a limit the telephone overcame by sending the voice. Item d → E: "Some observers worried that the device would erode privacy." Item e → B: a vibrating diaphragm "disturbed a magnet and so varied a current flowing in a nearby coil of wire."',
          },
          {
            id: 'rd-035-p2-q2',
            type: 'tfng',
            prompt: 'The electric telegraph could send the sound of a human voice along a wire.',
            answer: 'false',
            explanation:
              'Paragraph A says the telegraph "could carry only dots and dashes," whereas sending "the human voice itself" was the later dream. This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-035-p2-q3',
            type: 'gap',
            prompt:
              "Complete the sentence with ONE word from the passage: In Bell's device a thin sheet, or _______, vibrated when a person spoke into it.",
            acceptableAnswers: ['diaphragm'],
            explanation:
              'Paragraph B describes "a thin sheet, or diaphragm, that vibrated when a person spoke into it." The required word is "diaphragm".',
          },
          {
            id: 'rd-035-p2-q4',
            type: 'mcq',
            prompt: "What was the basic idea behind Bell's telephone, according to paragraph B?",
            options: [
              'That a sound could be tapped out as a code and decoded at the far end',
              'That a sound could vary an electric current in step with itself, and the current could recreate the sound elsewhere',
              'That two diaphragms could be joined directly by a magnet without any wire',
              'That the human voice could be made loud enough to cross a room without electricity',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph B says Bell "reasoned that if a sound could be made to vary an electric current in step with itself, the current could be sent down a wire and used to recreate the sound at the far end." Option B matches.',
          },
          {
            id: 'rd-035-p2-q5',
            type: 'tfng',
            prompt: "Bell's patent was overturned after being challenged in the courts.",
            answer: 'false',
            explanation:
              'Paragraph C states that "Bell\'s patent was challenged many times but ultimately upheld." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-035-p2-q6',
            type: 'mcq',
            prompt: 'Why does the passage describe a single telephone as "useless"?',
            options: [
              'Because the early instruments broke down very frequently',
              'Because its value lies in the network of other telephones it can reach',
              'Because it could not carry a voice over any useful distance',
              'Because it cost far more than the telegraph it replaced',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph D says "A single telephone is useless; its value lies in the network of other telephones it can reach." Option B matches this directly.',
          },
          {
            id: 'rd-035-p2-q7',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: At the central office, calls could be joined together; this central office was called the _______.',
            acceptableAnswers: ['exchange'],
            explanation:
              'Paragraph D says "The breakthrough was the exchange, a central office to which every subscriber\'s line ran and at which calls could be joined together." The required word is "exchange".',
          },
          {
            id: 'rd-035-p2-q8',
            type: 'tfng',
            prompt:
              "On the early shared lines, several households could listen in on one another's calls.",
            answer: 'true',
            explanation:
              'Paragraph E says the early shared lines, "on which several households used a single circuit, certainly allowed the curious to listen in on their neighbours." This matches the statement, so it is True.',
          },
          {
            id: 'rd-035-p2-q9',
            type: 'tfng',
            prompt:
              'Bell earned more money from the telephone than any other inventor of his time.',
            answer: 'not-given',
            explanation:
              'The passage discusses the patent dispute and the spread of the network but never mentions how much money Bell or anyone else earned, nor compares his wealth with that of other inventors. There is no information to confirm or contradict the statement, so it is Not Given.',
          },
        ],
      },
      // ───────────────────────────── PASSAGE 3 ─────────────────────────────
      {
        id: 'rd-academic-035-p3',
        title: 'The Thin Skin of the Earth',
        body: `Beneath our feet lies a substance we rarely stop to consider, yet one on which almost all life on land depends. Soil is not, as is sometimes assumed, merely dirt or crushed rock. It is a living mixture: weathered mineral grains, the decaying remains of plants and animals, water, air, and a teeming population of microscopic organisms, all bound together into a fragile layer seldom more than a metre or two deep. This thin skin covering the continents is where plants anchor their roots and draw their nourishment, and so, ultimately, it is the foundation of the food on every table.

Soil begins with the slow breakdown of rock, a process called weathering. Frost prises grains apart as water freezes and expands in tiny cracks; rain, slightly acidic, dissolves certain minerals; and the roots of plants exert a steady mechanical pressure that splits stone over time. But the mineral fragments alone do not make soil. The crucial ingredient is organic matter: as plants shed leaves and die and as animals leave their droppings and remains, this material is broken down by fungi, bacteria and small creatures such as earthworms into a dark, spongy substance called humus. Humus binds the mineral grains into crumbs, holds water like a sponge, and stores the nutrients that plants need. The making of a soil is therefore the joint work of the non-living and the living, and it is exceedingly slow: under natural conditions it may take many centuries to build a few centimetres.

A healthy soil is full of life, and that life does much of the work. Earthworms drag leaves down from the surface and, by tunnelling, mix the layers and let in air and water. Countless bacteria and fungi recycle dead matter, releasing the nutrients locked within it back into a form that roots can absorb; some bacteria perform the vital service of capturing nitrogen from the air and converting it into compounds plants can use. A mere handful of fertile soil may contain more microorganisms than there are people on the planet. It is this hidden community, more than the mineral grains, that makes the difference between a living soil and a sterile one.

Because soil forms so slowly and feeds so much, its loss is among the most serious of environmental problems, and the chief agent of that loss is erosion. Wind and water are constantly at work carrying soil away, and although some erosion is natural, human activity has hugely accelerated it. When land is stripped of its plant cover — by ploughing, by overgrazing, or by the clearing of forests — the bare surface is left exposed; rain then washes the loosened earth into rivers and the wind lifts the dry dust into the sky. Soil that took a thousand years to form can be carried off in a single season. Worse, it is the uppermost layer, the topsoil, that is richest in humus and nutrients and that erosion strips away first, leaving behind a poorer, less productive ground.

Other threats compound the damage. Where irrigation water evaporates in hot climates it can leave behind a crust of salts that few crops will tolerate, a process called salinisation that has ruined farmland since ancient times. Heavy machinery presses the soil into a hard, airless mass that roots and water struggle to penetrate. And the relentless growing of a single crop, season after season, can strip the ground of particular nutrients faster than they are replaced. Each of these processes quietly reduces the land's capacity to grow food, and they often act together.

The encouraging news is that soil can be protected and even rebuilt, and many of the methods are well understood. Keeping the ground covered with plants or their residues shields it from wind and rain. Ploughing along the contours of a slope, rather than up and down it, slows the run-off that carries soil away. Rotating crops and planting legumes, which host the nitrogen-fixing bacteria, restores fertility without the heavy use of artificial fertiliser. None of this is new knowledge, yet the pressure to extract the greatest possible yield in the shortest time continually works against it. The challenge, as a growing population asks ever more of a finite resource, is less to discover how to care for the soil than to find the will to do so before the thin skin of the Earth is worn away.`,
        questions: [
          // ── Matching Features — statements to soil components (5 items) = 5 marks ──
          {
            id: 'rd-035-p3-q1',
            type: 'matching',
            variant: 'features',
            prompt:
              'Look at the following statements and the list of soil components and organisms below. Match each statement to the thing it relates to in the passage. Write the correct letter, A–D. NB You may use any letter more than once.',
            options: [
              { key: 'A', label: 'Humus' },
              { key: 'B', label: 'Earthworms' },
              { key: 'C', label: 'Nitrogen-fixing bacteria' },
              { key: 'D', label: 'Topsoil' },
            ],
            items: [
              {
                id: 'p3-f-a',
                text: 'captures a gas from the air and converts it into a form plants can use.',
                answer: 'C',
              },
              {
                id: 'p3-f-b',
                text: 'binds mineral grains into crumbs and holds water like a sponge.',
                answer: 'A',
              },
              {
                id: 'p3-f-c',
                text: 'is the uppermost, nutrient-rich layer that erosion removes first.',
                answer: 'D',
              },
              {
                id: 'p3-f-d',
                text: 'mixes the soil layers and lets in air and water by tunnelling.',
                answer: 'B',
              },
              {
                id: 'p3-f-e',
                text: 'is the dark, spongy material formed when dead plants and animals are broken down.',
                answer: 'A',
              },
            ],
            explanation:
              'Item a → C: "some bacteria perform the vital service of capturing nitrogen from the air and converting it into compounds plants can use." Item b → A: "Humus binds the mineral grains into crumbs, holds water like a sponge." Item c → D: erosion strips away "the uppermost layer, the topsoil, that is richest in humus and nutrients." Item d → B: "Earthworms... by tunnelling, mix the layers and let in air and water." Item e → A: humus is "a dark, spongy substance" formed when dead matter is broken down.',
          },
          // ── Matching Sentence Endings (4 items) = 4 marks ──
          {
            id: 'rd-035-p3-q2',
            type: 'matching',
            variant: 'endings',
            prompt:
              'Complete each sentence with the correct ending from the list below. Write the correct letter, A–F. There are more endings than sentences, so you will not use them all.',
            options: [
              { key: 'A', label: 'it may take many centuries to build only a few centimetres.' },
              { key: 'B', label: 'few crops will tolerate the crust of salts left behind.' },
              { key: 'C', label: 'roots and water struggle to penetrate the hard, airless mass.' },
              {
                key: 'D',
                label: 'the soil is washed into rivers and lifted into the sky as dust.',
              },
              { key: 'E', label: 'the telephone network spread into ordinary homes.' },
              { key: 'F', label: 'plants can no longer anchor their roots in crushed rock.' },
            ],
            items: [
              {
                id: 'p3-e-a',
                text: 'Because soil forms under natural conditions so slowly,',
                answer: 'A',
              },
              {
                id: 'p3-e-b',
                text: 'When land is stripped of its plant cover and the bare surface is exposed,',
                answer: 'D',
              },
              {
                id: 'p3-e-c',
                text: 'When irrigation water evaporates in a hot climate,',
                answer: 'B',
              },
              {
                id: 'p3-e-d',
                text: 'When heavy machinery presses the soil into a compacted layer,',
                answer: 'C',
              },
            ],
            explanation:
              'Sentence a → A: paragraph B says soil-making "is exceedingly slow: under natural conditions it may take many centuries to build a few centimetres." Sentence b → D: paragraph D says once the surface is bare, "rain then washes the loosened earth into rivers and the wind lifts the dry dust into the sky." Sentence c → B: paragraph E says evaporating irrigation water "can leave behind a crust of salts that few crops will tolerate." Sentence d → C: paragraph E says machinery "presses the soil into a hard, airless mass that roots and water struggle to penetrate." Endings E and F are distractors not supported here.',
          },
          {
            id: 'rd-035-p3-q3',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The slow breakdown of rock by frost, rain and roots is a process called _______.',
            acceptableAnswers: ['weathering'],
            explanation:
              'Paragraph B says "Soil begins with the slow breakdown of rock, a process called weathering." The required word is "weathering".',
          },
          {
            id: 'rd-035-p3-q5',
            type: 'mcq',
            prompt: 'According to paragraph D, which part of the soil does erosion remove first?',
            options: [
              'The deep mineral grains at the very bottom of the soil',
              'The uppermost topsoil, which is richest in humus and nutrients',
              'The bedrock from which the soil originally formed',
              'The layer of salts left behind by irrigation',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph D says "it is the uppermost layer, the topsoil, that is richest in humus and nutrients and that erosion strips away first." Option B matches.',
          },
          {
            id: 'rd-035-p3-q6',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: In hot climates, evaporating irrigation water can leave a crust of salts, a process called _______.',
            acceptableAnswers: ['salinisation', 'salinization'],
            explanation:
              'Paragraph E describes evaporating water leaving "a crust of salts that few crops will tolerate, a process called salinisation." The required word is "salinisation".',
          },
          {
            id: 'rd-035-p3-q7',
            type: 'tfng',
            prompt: 'The passage says we still do not understand how to protect and rebuild soil.',
            answer: 'false',
            explanation:
              'Paragraph F says soil "can be protected and even rebuilt, and many of the methods are well understood," adding that "None of this is new knowledge." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-035-p3-q8',
            type: 'mcq',
            prompt: 'What does the passage suggest is the main challenge in caring for the soil?',
            options: [
              'Discovering entirely new scientific methods of soil conservation',
              'Persuading farmers that soil erosion is actually occurring',
              'Finding the will to act, given the pressure to extract the greatest yield quickly',
              'Inventing machinery light enough not to compact the ground',
            ],
            correctIndex: 2,
            explanation:
              'Paragraph F says "the pressure to extract the greatest possible yield in the shortest time continually works against" known methods, so the challenge "is less to discover how to care for the soil than to find the will to do so." Option C matches.',
          },
        ],
      },
    ],
  },
]
