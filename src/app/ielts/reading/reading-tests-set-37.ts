// ─── IELTS Academic Reading - practice item bank (Set 37) ──────────────────
// ORIGINAL content written for The English Hub. These passages and questions are
// invented purely to practise the Academic Reading question formats. They are
// NOT reproductions of any official IELTS past paper, and no official
// affiliation is implied. Academic track. Topic domains: tides and the moon /
// the evolution of whales / the history of rubber.
//
// This test is MATCHING-RICH. It contains three matching questions across three
// different variants: Matching Headings (Passage 1), Matching Information /
// which-paragraph (Passage 2) and Matching Features - statements to people
// (Passage 3), alongside the usual mix of True/False/Not Given, multiple choice
// and sentence/summary completion.
//
// One complete, carefully-checked test: 3 passages, 40 marks (each matching item
// counts as one mark). Every answer is verifiable from the passage text and is
// justified in the explanation. Marks: P1 = 6 (matching) + 7 = 13; P2 = 5
// (matching) + 8 = 13; P3 = 5 (matching) + 9 = 14. Total = 40.
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const READING_SET_37: ReadingTest[] = [
  {
    id: 'rd-academic-037',
    title: 'Academic Reading - Practice Test 37',
    track: 'academic',
    estimatedMinutes: 60,
    passages: [
      // ───────────────────────────── PASSAGE 1 ─────────────────────────────
      {
        id: 'rd-academic-037-p1',
        title: 'The Pull of the Moon',
        body: `Twice a day, along most of the world's coastlines, the sea climbs slowly up the shore and then withdraws again, a rhythm so dependable that people have set their lives by it for thousands of years. These are the tides, and although they seem to belong wholly to the sea, their ultimate cause lies a quarter of a million miles away. The tides are the ocean's response to the gravitational pull of the Moon, and to a lesser degree of the Sun, acting on a planet that is itself spinning beneath them. Understanding why the water rises is one of the more elegant lessons in physics, and one that took some of the greatest minds in science a long time to work out.

Gravity weakens with distance, and this simple fact is the key to the whole phenomenon. The Moon tugs on every part of the Earth, but it tugs hardest on the side facing it, more gently on the solid centre, and most weakly of all on the far side. The oceans, being liquid, are free to respond to these differences in a way that the rigid rock beneath cannot. On the side nearest the Moon the water is drawn outward into a bulge; on the opposite side, where the Moon's pull is weakest, the water is in effect left behind as the rest of the planet is drawn away from it, forming a second bulge. The Earth thus wears two low humps of raised ocean at any moment, one pointing roughly towards the Moon and one pointing away from it.

These two bulges stay more or less fixed in line with the Moon while the Earth rotates underneath them once a day. A given stretch of coast is carried first into one bulge, then out of it, then into the second, and so a typical shore experiences two high tides and two low tides in a little over twenty-four hours. The interval is not exactly twelve hours, because the Moon is itself moving slowly along its orbit, so each day the tides arrive about fifty minutes later than the day before. This steady drift is why a high tide that falls in the morning one week will fall in the afternoon a fortnight later.

The Sun complicates the picture. Although it is vastly more massive than the Moon, it is also vastly further away, and because gravity falls off so sharply with distance its tide-raising effect is only about half as strong. When the Sun, the Earth and the Moon fall into a straight line, which happens at the new and the full moon, the solar and lunar pulls reinforce one another and the bulges grow especially large. The result is a spring tide, in which high water is unusually high and low water unusually low. The name has nothing to do with the season; it comes from the sense of the water springing up. When the Sun and Moon instead pull at right angles, at the half moon, their effects partly cancel and the range between high and low water shrinks. This subdued tide is called a neap tide.

In the open ocean the rise and fall amounts to no more than a metre or so, hardly enough to notice from the deck of a ship. It is along coasts that tides become dramatic, for the shape of the sea floor and the coastline can funnel and amplify the moving water. Where a rising tide is squeezed into a narrowing bay or a shallowing channel, the water can pile up to a remarkable height. In a few favoured places the difference between high and low water exceeds fifteen metres, and the incoming tide advances so fast that a person walking on the exposed mud can be overtaken by it. Elsewhere, in seas that are nearly enclosed, the tidal range may be so small as to be almost imperceptible.

For coastal peoples the tides have always been both a timetable and a tool. Fishermen sail on the ebb and return on the flood; harbours are entered at high water and ships careened on the falling tide so that their hulls can be scraped clean. In recent times engineers have sought to harness the predictable surge of the sea itself, building barrages across estuaries with a large tidal range so that the trapped water, released through turbines, can generate electricity. Because the movements of the Moon and Sun can be calculated centuries in advance, the tides are among the most precisely predictable of all natural events, a rare case in which the future of a restless ocean can be written down in a table years before it arrives.`,
        questions: [
          // ── Matching Headings (6 items, 9 options → 3 distractors) = 6 marks ──
          {
            id: 'rd-037-p1-q1',
            type: 'matching',
            variant: 'headings',
            prompt:
              'The passage has six paragraphs, A-F. Choose the correct heading for each paragraph from the list of headings below. There are more headings than paragraphs, so you will not use them all. Write the correct number (i-ix) for each paragraph.',
            options: [
              { key: 'i', label: 'Why distance makes the water bulge on two sides' },
              { key: 'ii', label: 'A daily rhythm with a distant cause' },
              { key: 'iii', label: 'How the Moon was first formed' },
              { key: 'iv', label: 'Two high tides as the Earth turns beneath the bulges' },
              { key: 'v', label: 'Predicting earthquakes from the sea' },
              { key: 'vi', label: 'The Sun, spring tides and neap tides' },
              { key: 'vii', label: 'Why coasts magnify the rise and fall' },
              { key: 'viii', label: 'Living by the tide and putting it to work' },
              { key: 'ix', label: 'How sailors first measured longitude at sea' },
            ],
            items: [
              { id: 'p1-h-a', text: 'Paragraph A', answer: 'ii' },
              { id: 'p1-h-b', text: 'Paragraph B', answer: 'i' },
              { id: 'p1-h-c', text: 'Paragraph C', answer: 'iv' },
              { id: 'p1-h-d', text: 'Paragraph D', answer: 'vi' },
              { id: 'p1-h-e', text: 'Paragraph E', answer: 'vii' },
              { id: 'p1-h-f', text: 'Paragraph F', answer: 'viii' },
            ],
            explanation:
              'A presents the daily rhythm of tides whose "ultimate cause lies a quarter of a million miles away" (ii). B explains that gravity weakening with distance draws the water into two bulges (i). C describes two high tides as the Earth rotates beneath the fixed bulges (iv). D introduces the Sun and defines spring and neap tides (vi). E explains why coasts funnel and amplify the rise and fall (vii). F covers fishermen, harbours and tidal power, that is living by the tide and putting it to work (viii). Headings iii (formation of the Moon), v (predicting earthquakes) and ix (measuring longitude) are distractors never discussed.',
          },
          {
            id: 'rd-037-p1-q2',
            type: 'tfng',
            prompt:
              'The Moon pulls more strongly on the side of the Earth that faces it than on the far side.',
            answer: 'true',
            explanation:
              'Paragraph B states the Moon "tugs hardest on the side facing it, more gently on the solid centre, and most weakly of all on the far side." This supports the statement, so it is True.',
          },
          {
            id: 'rd-037-p1-q3',
            type: 'mcq',
            prompt:
              'According to paragraph B, why do the oceans form bulges while the rock of the Earth does not?',
            options: [
              'Because the oceans are heated by the Moon and expand',
              'Because the oceans are liquid and free to respond to the differences in pull',
              'Because the rock is held in place by the Earth’s rotation',
              'Because the rock is too far from the Moon to be affected',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph B says "The oceans, being liquid, are free to respond to these differences in a way that the rigid rock beneath cannot." Option B matches this directly.',
          },
          {
            id: 'rd-037-p1-q4',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: On the side of the Earth nearest the Moon, the water is drawn outward into a _______.',
            acceptableAnswers: ['bulge'],
            explanation:
              'Paragraph B states that "On the side nearest the Moon the water is drawn outward into a bulge." The required word is "bulge".',
          },
          {
            id: 'rd-037-p1-q5',
            type: 'tfng',
            prompt: 'The tides arrive at the same clock time every day.',
            answer: 'false',
            explanation:
              'Paragraph C explains that "each day the tides arrive about fifty minutes later than the day before" because the Moon is moving along its orbit. This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-037-p1-q6',
            type: 'mcq',
            prompt:
              'Why is the Sun’s tide-raising effect weaker than the Moon’s, despite the Sun being far more massive?',
            options: [
              'Because the Sun is much further away and gravity falls off sharply with distance',
              'Because the Sun pulls only on the rock and not on the oceans',
              'Because sunlight pushes the water back as fast as gravity pulls it',
              'Because the Sun and Moon always pull in opposite directions',
            ],
            correctIndex: 0,
            explanation:
              'Paragraph D says the Sun "is also vastly further away, and because gravity falls off so sharply with distance its tide-raising effect is only about half as strong." Option A matches.',
          },
          {
            id: 'rd-037-p1-q7',
            type: 'gap',
            prompt:
              'Complete the sentence with TWO words from the passage: When the Sun and Moon pull at right angles at the half moon, the range between high and low water shrinks, producing a _______.',
            acceptableAnswers: ['neap tide'],
            explanation:
              'Paragraph D states that when the Sun and Moon "pull at right angles, at the half moon, their effects partly cancel... This subdued tide is called a neap tide." The required words are "neap tide".',
          },
          {
            id: 'rd-037-p1-q8',
            type: 'tfng',
            prompt:
              'Tidal power stations generate more electricity than any other renewable source.',
            answer: 'not-given',
            explanation:
              'Paragraph F describes engineers building barrages so that trapped water released through turbines "can generate electricity," but the passage never compares the output of tidal power with that of any other renewable source. There is no information to confirm or contradict the statement, so it is Not Given.',
          },
        ],
      },
      // ───────────────────────────── PASSAGE 2 ─────────────────────────────
      {
        id: 'rd-academic-037-p2',
        title: 'The Whales That Walked',
        body: `Few facts in biology are stranger than this: the largest animals ever to have lived, the great whales of the open ocean, are descended from small, four-legged creatures that once walked on land. A whale is not a fish but a mammal. It breathes air, nurses its young on milk and maintains a warm body in cold water, and its ancestors were land animals that returned to the sea tens of millions of years ago. For a long time this claim rested largely on anatomy and could be dismissed as guesswork, but over the past few decades a remarkable series of fossils has turned it into one of the best-documented transitions in the whole history of life.

The most telling clues lie hidden inside the living whale. Although its body has become superbly streamlined, with the forelimbs reshaped into flippers and the hind limbs apparently gone, the skeleton still betrays its origins. Buried within the flesh of many whales are tiny, useless bones, the shrunken remnants of a hip and the upper leg, attached to nothing and serving no function. These vestigial limbs make little sense for an animal supposedly designed for the water, but they make perfect sense as the leftovers of ancestors that once bore weight on four legs. Similarly, the flipper of a whale, beneath its smooth covering, contains the same arrangement of bones as the limb of a land mammal: an upper arm, a forearm and a set of finger bones, all repurposed for steering through water.

The fossil record has supplied the intermediate steps that anatomy alone could only imply. The earliest creatures recognised as relatives of whales were not ocean-going giants at all but wolf-sized animals that lived around the margins of ancient seas some fifty million years ago, hunting in shallow water and resting on land. Later forms show the body lengthening and the legs dwindling, the nostrils creeping back from the tip of the snout towards the top of the head, and the tail growing more powerful. One celebrated fossil preserves an animal with stout legs still capable of bearing it ashore but with feet and a tail already well suited to swimming, an amphibious hunter caught, as it were, halfway between the two worlds.

The shift of the nostrils is one of the most revealing changes of all. In a land mammal the nostrils sit at the front of the face, but in a whale they have migrated to the crown of the head to form the blowhole, allowing the animal to breathe with only the top of its head breaking the surface. The fossils trace this journey vividly, the opening moving backwards stage by stage across a succession of species until it reaches its final position. Other adaptations followed the same logic. The ear was rebuilt to hear in water rather than in air, the body filled out with a thick layer of insulating blubber, and the young came to be born tail first, an arrangement that reduces the risk of a calf drowning during the long minutes of its birth beneath the waves.

What could have driven a perfectly competent land animal back into the sea? The likeliest answer is food. The shallow seas of the period teemed with fish and other prey, and an animal able to exploit that abundance, at first by wading and later by swimming, would have enjoyed a rich and largely uncontested living. Each small step that made an ancestor a slightly better swimmer, a little more streamlined, a little better insulated, would have been favoured, and over millions of years these advantages accumulated until the descendants were wholly committed to the water and could no longer survive on land at all.

The story did not end with a single kind of whale. From those early swimmers two great branches eventually arose. One led to the toothed whales, swift hunters that pursue fish and squid and that find their prey by emitting clicks and listening for the echoes, a kind of natural sonar. The other led to the baleen whales, the giants that include the blue whale, which abandoned teeth altogether in favour of fringed plates that strain vast quantities of tiny creatures from the water. That the same distant ancestor could give rise to both the nimble dolphin and the cathedral-sized blue whale is a measure of how much can change once evolution sets out along a new path.`,
        questions: [
          // ── Matching Information / which-paragraph (5 items) = 5 marks ──
          {
            id: 'rd-037-p2-q1',
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
                text: 'a suggestion that the abundance of prey in shallow seas drew the ancestors back to the water',
                answer: 'E',
              },
              {
                id: 'p2-i-2',
                text: 'a description of useless leg and hip bones hidden inside living whales',
                answer: 'B',
              },
              {
                id: 'p2-i-3',
                text: 'the division of whales into two great branches, toothed and baleen',
                answer: 'F',
              },
              {
                id: 'p2-i-4',
                text: 'the statement that a whale is a mammal rather than a fish',
                answer: 'A',
              },
              {
                id: 'p2-i-5',
                text: 'a fossil of an animal able to walk ashore yet already suited to swimming',
                answer: 'C',
              },
            ],
            explanation:
              'Item 1 -> E: "The likeliest answer is food. The shallow seas of the period teemed with fish." Item 2 -> B: "tiny, useless bones, the shrunken remnants of a hip and the upper leg." Item 3 -> F: the split into "the toothed whales" and "the baleen whales." Item 4 -> A: "A whale is not a fish but a mammal." Item 5 -> C: a fossil "with stout legs still capable of bearing it ashore but with feet and a tail already well suited to swimming."',
          },
          {
            id: 'rd-037-p2-q2',
            type: 'tfng',
            prompt: 'Whales are a kind of fish that has learned to breathe air.',
            answer: 'false',
            explanation:
              'Paragraph A states plainly that "A whale is not a fish but a mammal." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-037-p2-q3',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The tiny, useless leg and hip bones buried inside many whales are described as _______ limbs.',
            acceptableAnswers: ['vestigial'],
            explanation:
              'Paragraph B refers to "These vestigial limbs" when describing the shrunken hip and leg bones. The required word is "vestigial".',
          },
          {
            id: 'rd-037-p2-q4',
            type: 'mcq',
            prompt:
              'What does the bone arrangement inside a whale’s flipper show, according to paragraph B?',
            options: [
              'That the flipper grew from the fins of a fish ancestor',
              'That the flipper contains the same bones as the limb of a land mammal',
              'That the flipper has no bones beneath its smooth covering',
              'That the flipper is unrelated to any limb on land',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph B says the flipper "contains the same arrangement of bones as the limb of a land mammal: an upper arm, a forearm and a set of finger bones." Option B matches.',
          },
          {
            id: 'rd-037-p2-q5',
            type: 'tfng',
            prompt: 'The earliest relatives of whales were already large ocean-going animals.',
            answer: 'false',
            explanation:
              'Paragraph C states the earliest relatives "were not ocean-going giants at all but wolf-sized animals" that hunted in shallow water and rested on land. This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-037-p2-q6',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: In whales the nostrils have migrated to the top of the head to form the _______.',
            acceptableAnswers: ['blowhole'],
            explanation:
              'Paragraph D says the nostrils "have migrated to the crown of the head to form the blowhole." The required word is "blowhole".',
          },
          {
            id: 'rd-037-p2-q7',
            type: 'tfng',
            prompt:
              'Whale calves are born tail first, which lowers the risk of drowning during birth.',
            answer: 'true',
            explanation:
              'Paragraph D states that "the young came to be born tail first, an arrangement that reduces the risk of a calf drowning during the long minutes of its birth beneath the waves." This supports the statement, so it is True.',
          },
          {
            id: 'rd-037-p2-q8',
            type: 'mcq',
            prompt: 'How do toothed whales find their prey, according to paragraph F?',
            options: [
              'By straining tiny creatures from the water with fringed plates',
              'By emitting clicks and listening for the returning echoes',
              'By following the scent of fish over long distances',
              'By feeling vibrations through the bones of their flippers',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph F says toothed whales "find their prey by emitting clicks and listening for the echoes, a kind of natural sonar." Option B matches; the fringed plates belong to baleen whales.',
          },
          {
            id: 'rd-037-p2-q9',
            type: 'mcq',
            prompt:
              'According to paragraph E, how did the ancestors of whales come to be fully committed to the water?',
            options: [
              'A single large change suddenly turned a land animal into a swimmer',
              'Small advantages in swimming and insulation accumulated over millions of years',
              'They were driven into the sea by predators on land',
              'They lost the ability to walk because of a disease',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph E says each small step that made an ancestor "a slightly better swimmer, a little more streamlined, a little better insulated, would have been favoured, and over millions of years these advantages accumulated." Option B matches this gradual process.',
          },
        ],
      },
      // ───────────────────────────── PASSAGE 3 ─────────────────────────────
      {
        id: 'rd-academic-037-p3',
        title: 'A History of Rubber',
        body: `Rubber is so much a part of modern life, in tyres, seals, gloves and a thousand other things, that it is easy to forget how strange a material it once seemed. Its raw source is a milky fluid called latex, which oozes from cuts made in the bark of certain tropical trees, above all the species native to the Amazon rainforest. The peoples of Central and South America had used this substance long before any European saw it, shaping it into waterproof coverings and into bouncing balls for ritual games that astonished the first explorers to witness them. To European eyes the bouncing ball was a marvel, for nothing they knew behaved quite like it.

For a long time, however, raw rubber was more curiosity than commodity. In its natural state it has an awkward flaw: it is hopelessly sensitive to temperature. In hot weather a rubber article turns soft, sticky and foul-smelling, while in the cold it grows hard and brittle and cracks. Early enthusiasts who tried to make waterproof shoes and coats from it found their wares melting in summer and stiffening in winter, and the brief commercial excitement that surrounded the material in the early nineteenth century soon collapsed. Rubber seemed destined to remain a useless oddity, interesting to scientists but of little practical worth.

The breakthrough came from a determined and famously unlucky American, Charles Goodyear, who became convinced that rubber could be tamed and spent years, and much of his family's savings, trying to do it. The decisive discovery, according to the often-told story, owed something to accident: a mixture of rubber and sulphur was brought into contact with a hot stove, and instead of melting it charred slightly and turned firm and elastic. From this clue Goodyear worked out a process, later named vulcanisation, in which rubber is heated together with sulphur. The treatment transforms the material, leaving it strong and springy across a wide range of temperatures, neither melting in the heat nor cracking in the cold. Vulcanisation turned rubber from a novelty into one of the indispensable materials of industry.

Demand now exploded, and because the best rubber still came from wild trees in the Amazon, the region was swept up in a feverish boom. Fortunes were made by the merchants who controlled the trade, and the city of Manaus, deep in the rainforest, grew rich enough to build a grand opera house in the jungle. The wealth, however, rested on the labour of rubber tappers who worked in harsh and often brutal conditions, deep in the forest and far from any help. The boom also rested on a monopoly, for the rubber tree grew only in South America, and Brazil guarded its valuable seeds jealously against any attempt to carry them abroad.

That monopoly was broken by an act of botanical smuggling that changed the map of the rubber trade. In the 1870s thousands of rubber-tree seeds were collected in the Amazon and shipped to England, where they were raised in the great glasshouses at Kew before the seedlings were sent on to British colonies in South and Southeast Asia. There, planted in orderly rows on plantations, the trees flourished, and within a few decades the neat estates of Asia were producing rubber far more cheaply and abundantly than the scattered wild trees of the Amazon ever could. The South American boom collapsed almost as quickly as it had risen, and Manaus was left with its opera house and its memories.

The final twist in the story came from the laboratory. During the twentieth century, and especially under the pressure of wartime, when supplies of natural rubber were cut off, chemists learned to build rubber-like materials from scratch out of substances derived from oil. These synthetic rubbers could be tailored for particular jobs, some tougher, some more resistant to oil or heat than the natural product. Yet natural rubber was not made obsolete, for it retains qualities that the synthetic kinds have never fully matched, and the tapping of trees continues alongside the output of the chemical plants. The material that began as a bouncing curiosity in the rainforest is now drawn from two very different sources, the living tree and the oil refinery, and the world consumes more of it than ever.`,
        questions: [
          // ── Matching Features - statements to people (5 items) = 5 marks ──
          {
            id: 'rd-037-p3-q1',
            type: 'matching',
            variant: 'features',
            prompt:
              'Look at the following statements and the list of groups or people below. Match each statement to the group or person it relates to in the passage. Write the correct letter, A, B or C. NB You may use any letter more than once.',
            options: [
              { key: 'A', label: 'The peoples of Central and South America' },
              { key: 'B', label: 'Charles Goodyear' },
              { key: 'C', label: 'The rubber tappers of the Amazon boom' },
            ],
            items: [
              {
                id: 'p3-f-1',
                text: 'worked out the process later named vulcanisation.',
                answer: 'B',
              },
              {
                id: 'p3-f-2',
                text: 'made waterproof coverings and bouncing balls from latex before Europeans arrived.',
                answer: 'A',
              },
              {
                id: 'p3-f-3',
                text: 'laboured in harsh and often brutal conditions deep in the forest.',
                answer: 'C',
              },
              {
                id: 'p3-f-4',
                text: 'spent years and much family money trying to tame rubber.',
                answer: 'B',
              },
              {
                id: 'p3-f-5',
                text: 'used rubber in ritual ball games that amazed the first explorers.',
                answer: 'A',
              },
            ],
            explanation:
              'Item 1 -> B (Goodyear): "Goodyear worked out a process, later named vulcanisation." Item 2 -> A: the American peoples shaped latex "into waterproof coverings and into bouncing balls." Item 3 -> C: the boom "rested on the labour of rubber tappers who worked in harsh and often brutal conditions." Item 4 -> B (Goodyear): he "spent years, and much of his family\'s savings, trying to do it." Item 5 -> A: the "bouncing balls for ritual games that astonished the first explorers."',
          },
          {
            id: 'rd-037-p3-q2',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The milky fluid that oozes from cuts in the bark of certain tropical trees is called _______.',
            acceptableAnswers: ['latex'],
            explanation:
              'Paragraph A describes "a milky fluid called latex, which oozes from cuts made in the bark of certain tropical trees." The required word is "latex".',
          },
          {
            id: 'rd-037-p3-q3',
            type: 'tfng',
            prompt:
              'In its natural state, untreated rubber becomes hard and brittle in cold weather.',
            answer: 'true',
            explanation:
              'Paragraph B states that "in the cold it grows hard and brittle and cracks." This supports the statement, so it is True.',
          },
          {
            id: 'rd-037-p3-q4',
            type: 'mcq',
            prompt:
              'According to paragraph B, why did early attempts to sell waterproof rubber goods fail?',
            options: [
              'The goods were far too expensive for ordinary buyers',
              'The goods melted in summer and stiffened in winter',
              'The supply of latex from the Amazon ran out',
              'Buyers preferred goods made from synthetic materials',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph B says early enthusiasts "found their wares melting in summer and stiffening in winter." Option B matches this directly.',
          },
          {
            id: 'rd-037-p3-q5',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: In the process Goodyear devised, rubber is heated together with _______ to make it strong and springy.',
            acceptableAnswers: ['sulphur'],
            explanation:
              'Paragraph C describes "a process, later named vulcanisation, in which rubber is heated together with sulphur." The required word is "sulphur".',
          },
          {
            id: 'rd-037-p3-q6',
            type: 'tfng',
            prompt:
              'Goodyear discovered the effect of sulphur on rubber through careful, planned experiments alone.',
            answer: 'false',
            explanation:
              'Paragraph C says the decisive discovery "owed something to accident," when a mixture of rubber and sulphur touched a hot stove. This contradicts the claim that it came through planned experiments alone, so it is False.',
          },
          {
            id: 'rd-037-p3-q7',
            type: 'mcq',
            prompt: 'What does the passage say about the city of Manaus during the rubber boom?',
            options: [
              'It became the centre of synthetic rubber production',
              'It grew rich enough to build a grand opera house in the jungle',
              'It was where rubber-tree seeds were first raised in glasshouses',
              'It refused to take part in the rubber trade',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph D states that Manaus "grew rich enough to build a grand opera house in the jungle." Option B matches.',
          },
          {
            id: 'rd-037-p3-q8',
            type: 'tfng',
            prompt:
              'Rubber-tree seeds taken from the Amazon were raised at Kew before being sent to Asia.',
            answer: 'true',
            explanation:
              'Paragraph E says the seeds were shipped to England, "where they were raised in the great glasshouses at Kew before the seedlings were sent on to British colonies in South and Southeast Asia." This supports the statement, so it is True.',
          },
          {
            id: 'rd-037-p3-q9',
            type: 'tfng',
            prompt:
              'Synthetic rubber has completely replaced natural rubber in modern manufacturing.',
            answer: 'false',
            explanation:
              'Paragraph F states that "natural rubber was not made obsolete" and that "the tapping of trees continues alongside the output of the chemical plants." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-037-p3-q10',
            type: 'mcq',
            prompt: 'According to paragraph F, what prompted chemists to develop synthetic rubber?',
            options: [
              'A desire to make rubber that could bounce more highly',
              'Wartime pressure when supplies of natural rubber were cut off',
              'The complete disappearance of the rubber tree in Asia',
              'A government ban on tapping wild rubber trees',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph F says that "especially under the pressure of wartime, when supplies of natural rubber were cut off, chemists learned to build rubber-like materials from scratch." Option B matches.',
          },
        ],
      },
    ],
  },
]
