// ─── IELTS Academic Reading — practice item bank (Set 29) ──────────────────
// ORIGINAL content written for The English Hub. These passages and questions are
// invented purely to practise the Academic Reading question formats. They are
// NOT reproductions of any official IELTS past paper, and no official
// affiliation is implied. Academic track. Topic domains: the history of the
// bicycle / bioluminescence / animal migration and navigation.
//
// This test is MATCHING-RICH. It contains three matching questions across three
// different variants: Matching Headings (Passage 1), Matching Information /
// which-paragraph (Passage 2) and Matching Features — cues to species
// (Passage 3), alongside the usual mix of True/False/Not Given, multiple choice
// and sentence/summary completion.
//
// One complete, carefully-checked test: 3 passages, 40 marks (each matching item
// counts as one mark). Every answer is verifiable from the passage text and is
// justified in the explanation. Marks: P1 = 6 (matching) + 7 = 13; P2 = 5
// (matching) + 8 = 13; P3 = 5 (matching) + 9 = 14. Total = 40.
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const READING_SET_29: ReadingTest[] = [
  {
    id: 'rd-academic-029',
    title: 'Academic Reading — Practice Test 29',
    track: 'academic',
    estimatedMinutes: 60,
    passages: [
      // ───────────────────────────── PASSAGE 1 ─────────────────────────────
      {
        id: 'rd-academic-029-p1',
        title: 'Two Wheels That Changed the World',
        body: `It is easy to assume that the bicycle, being a simple machine of two wheels and a frame, must have arrived fully formed. In fact it took most of a century of false starts, dead ends and clumsy experiments before the comfortable, efficient machine we recognise today finally emerged. The bicycle was not invented so much as gradually assembled, each generation of makers borrowing from the last and adding one further idea, until a contraption fit only for daredevils became a vehicle that almost anyone could ride.

The earliest ancestor appeared in 1817, when a German nobleman, Karl von Drais, built a wooden two-wheeler that the rider straddled and pushed along the ground with the feet, steering by means of a pivoting front wheel. Nicknamed the hobby-horse, it had no pedals at all; the rider simply scooted, lifting the feet to coast down slopes. For a brief season it was the height of fashion among wealthy young men, who raced their machines along the smoother boulevards of European cities. But the roads of the time were mostly rutted and filthy, the wooden frame was punishingly heavy, and the novelty soon faded. The hobby-horse was a curiosity rather than a practical means of getting about, and within a few years it had all but disappeared.

The decisive leap came in the 1860s in France, when an unknown craftsman fixed cranks and pedals directly to the front wheel. Now the rider could drive the machine round without touching the ground, and the bicycle became a self-propelled vehicle in the true sense. These machines, with their iron frames and iron-banded wooden wheels, were known with grim affection as 'boneshakers', for every bump in the cobbles travelled straight up through the rigid frame into the rider. They were exhausting and uncomfortable, yet they sold in their thousands, and for the first time riding schools opened in the cities to teach the curious how to balance.

A peculiar logic of the pedal-on-wheel design now drove the machine into its strangest phase. Because the pedals turned the front wheel directly, one full turn of the pedals carried the rider only as far as the wheel's circumference. The obvious way to go faster was simply to make the front wheel bigger, and makers duly enlarged it until it towered over the rider's head, balanced above a tiny trailing wheel at the back. This was the famous high-wheeler, often called the penny-farthing after two British coins of very different sizes. It could reach an impressive speed, but the rider perched far above the ground was alarmingly easy to pitch over the handlebars by a sudden stop or a stone in the road. Riding one demanded youth, nerve and athleticism, and the machine remained, like the hobby-horse before it, the preserve of a bold minority.

The breakthrough that finally opened cycling to everyone arrived in the 1880s, and its key idea was indirect drive. Instead of fixing the pedals to the wheel itself, the new design placed them on a separate axle in the middle of the frame and connected them to the rear wheel by a loop of chain running over toothed wheels of different sizes. By choosing the ratio of those toothed wheels, a maker could make one turn of the pedals spin the rear wheel more than once, so speed no longer depended on a giant wheel. The two wheels could shrink to a sensible, equal size, the rider could sit low and safely between them, and the danger of being thrown headfirst all but vanished. The machine was so much safer than the towering high-wheeler that it became known simply as the safety bicycle, and its basic layout — a diamond-shaped frame, a chain to the back wheel, two wheels of equal size — is essentially the one still in use today. The arrival of the air-filled rubber tyre a few years later, cushioning the ride at last, completed the transformation.

The social consequences were greater than anyone had foreseen. The safety bicycle was cheap enough that working people could eventually afford one, and for the first time ordinary men and women could travel several miles under their own power, quickly and for free, whenever they wished. Country labourers could court partners in neighbouring villages; factory workers could live further from the noise and dirt of their workplaces. The effect on women was especially marked. The bicycle offered a respectable, independent means of travel that required no horse, no carriage and no chaperone, and it could not easily be ridden in the heavy, restrictive skirts then in fashion. Dress reformers seized on the machine as an argument for lighter, more practical clothing, and many later commentators credited the humble bicycle with quietly advancing the cause of women's freedom. A device built for sport and novelty had, almost by accident, helped to loosen the bonds of a rigid society.`,
        questions: [
          // ── Matching Headings (6 items, 8 options → 2 distractors) = 6 marks ──
          {
            id: 'rd-029-p1-q1',
            type: 'matching',
            variant: 'headings',
            prompt:
              'The passage has six paragraphs, A–F. Choose the correct heading for each paragraph from the list of headings below. There are more headings than paragraphs, so you will not use them all. Write the correct number (i–viii) for each paragraph.',
            options: [
              { key: 'i', label: 'The towering machine for the brave few' },
              { key: 'ii', label: 'A slow assembly rather than a single invention' },
              { key: 'iii', label: 'How racing rules shaped the modern frame' },
              { key: 'iv', label: 'The footed wooden machine and its brief craze' },
              { key: 'v', label: 'Pedals on the wheel: the jolting boneshaker' },
              { key: 'vi', label: 'The chain and the safe machine for all' },
              { key: 'vii', label: 'Wider freedom, especially for women' },
              { key: 'viii', label: 'The decline of the bicycle in the motor age' },
            ],
            items: [
              { id: 'p1-h-a', text: 'Paragraph A', answer: 'ii' },
              { id: 'p1-h-b', text: 'Paragraph B', answer: 'iv' },
              { id: 'p1-h-c', text: 'Paragraph C', answer: 'v' },
              { id: 'p1-h-d', text: 'Paragraph D', answer: 'i' },
              { id: 'p1-h-e', text: 'Paragraph E', answer: 'vi' },
              { id: 'p1-h-f', text: 'Paragraph F', answer: 'vii' },
            ],
            explanation:
              'A says the bicycle "was not invented so much as gradually assembled" over a century (ii). B describes von Drais\'s footed wooden hobby-horse and its short-lived craze (iv). C introduces pedals fixed to the front wheel and the jolting "boneshakers" (v). D covers the towering high-wheeler / penny-farthing ridden only by a "bold minority" (i). E explains the chain-driven safety bicycle that opened cycling to everyone (vi). F traces the wider social effects, "especially marked" for women (vii). Heading iii (racing rules) is a distractor — the front wheel grew for speed, not because of rules; heading viii (decline in the motor age) is never discussed.',
          },
          {
            id: 'rd-029-p1-q2',
            type: 'gap',
            prompt:
              "Complete the sentence with ONE word from the passage: Karl von Drais's 1817 two-wheeler, which the rider pushed along with the feet, was nicknamed the _______-horse.",
            acceptableAnswers: ['hobby'],
            explanation:
              'Paragraph B says the machine was "Nicknamed the hobby-horse" and "had no pedals at all." The required word is "hobby".',
          },
          {
            id: 'rd-029-p1-q3',
            type: 'tfng',
            prompt: 'The hobby-horse remained popular for many decades after it first appeared.',
            answer: 'false',
            explanation:
              'Paragraph B states the novelty "soon faded" and that "within a few years it had all but disappeared," contradicting the claim that it stayed popular for many decades. So it is False.',
          },
          {
            id: 'rd-029-p1-q4',
            type: 'mcq',
            prompt: 'Why were the machines of the 1860s known as "boneshakers"?',
            options: [
              'Because their wheels frequently broke on rough roads',
              'Because every bump in the road travelled up through the rigid frame into the rider',
              'Because they were too heavy for most riders to lift',
              'Because riders often fell from them and broke bones',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph C explains they were called boneshakers "for every bump in the cobbles travelled straight up through the rigid frame into the rider." Option B matches.',
          },
          {
            id: 'rd-029-p1-q5',
            type: 'mcq',
            prompt:
              'According to paragraph D, why did makers enlarge the front wheel of the high-wheeler?',
            options: [
              'To make the machine more comfortable on rough roads',
              'To lower the rider closer to the ground for safety',
              'Because the pedals drove the front wheel directly, so a bigger wheel meant greater speed',
              'Because a larger wheel was cheaper to manufacture',
            ],
            correctIndex: 2,
            explanation:
              'Paragraph D says that because the pedals turned the front wheel directly, "one full turn of the pedals carried the rider only as far as the wheel\'s circumference," so "the obvious way to go faster was simply to make the front wheel bigger." Option C matches.',
          },
          {
            id: 'rd-029-p1-q6',
            type: 'tfng',
            prompt:
              'The basic layout of the safety bicycle is essentially still in use on bicycles today.',
            answer: 'true',
            explanation:
              'Paragraph E states the safety bicycle\'s layout — "a diamond-shaped frame, a chain to the back wheel, two wheels of equal size — is essentially the one still in use today." This matches the statement, so it is True.',
          },
          {
            id: 'rd-029-p1-q7',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: In the safety bicycle the pedals were linked to the rear wheel by a loop of _______ running over toothed wheels.',
            acceptableAnswers: ['chain'],
            explanation:
              'Paragraph E describes connecting the pedals "to the rear wheel by a loop of chain running over toothed wheels of different sizes." The required word is "chain".',
          },
          {
            id: 'rd-029-p1-q8',
            type: 'tfng',
            prompt:
              'The high-wheeler was the first bicycle that could be bought cheaply by factory workers.',
            answer: 'false',
            explanation:
              'Paragraph F states it was the later safety bicycle that "was cheap enough that working people could eventually afford one." It was not the high-wheeler, so the statement is contradicted and is False.',
          },
        ],
      },
      // ───────────────────────────── PASSAGE 2 ─────────────────────────────
      {
        id: 'rd-academic-029-p2',
        title: 'Living Light',
        body: `On a dark night in late summer, a meadow may flicker with the cold green sparks of fireflies, and a breaking wave on certain coasts can glow an eerie blue as it curls and falls. These are everyday glimpses of bioluminescence, the ability of living things to make their own light. Far from being a rare trick, it is one of the most widespread phenomena in nature, found in creatures as different as bacteria, fungi, insects and fish, and it has evolved independently dozens of times. The light is real, but the way it is produced has almost nothing in common with the glow of a household bulb.

The chemistry behind living light is remarkably efficient. At its heart lies a light-emitting molecule, generally called a luciferin, and an enzyme, a luciferase, that helps it react with oxygen. When the two combine in the presence of oxygen, the chemical energy released is given off almost entirely as light rather than heat. This is the crucial difference from an ordinary lamp, whose filament must be heated until it glows and which therefore wastes most of its energy as warmth. Biological light is so nearly cold that it can be produced inside the delicate tissues of a living animal without harm, and it is among the most efficient light-producing processes known.

Not every glowing organism makes its own chemistry from scratch. A great many marine animals borrow the trick from bacteria instead. Certain light-producing bacteria glow continuously, and a host animal can cultivate colonies of them in special pouches or organs, feeding and sheltering them in return for a steady supply of light. Some squid, for example, house luminous bacteria in an organ on their underside and can dim or expose the glow at will. The arrangement is a partnership that benefits both sides: the bacteria gain a safe, nourishing home, and the animal gains a light source it never has to manufacture for itself. Such relationships are common in the sea and rare on land.

Why should so many creatures have gone to the trouble of evolving light at all? The most common reason is defence. A startled deep-sea shrimp may spew out a glowing cloud, much as a squid releases ink, dazzling a predator while the shrimp escapes into the dark. Other animals use the opposite tactic, lighting themselves up when seized in the hope of attracting a still larger predator that will turn on their attacker. There is even a strategy of disguise: many fish that live in the dim twilight zone of the ocean carry rows of small lights along their bellies, tuned to match the faint glow filtering down from the surface, so that a predator looking up from below sees no telltale silhouette against the brighter water. This trick of erasing one's own shadow is known as counter-illumination.

Light is also a powerful tool for attraction, whether of prey or of mates. The most famous hunter is the deep-sea anglerfish, which dangles a glowing lure in front of its jaws to draw small fish within reach; here, as in many deep-sea fishes, the light itself is produced by bacteria living in the lure. On land, the flashing of fireflies is a courtship signal, and each species flashes in its own particular rhythm so that males and females of the same kind can recognise one another in the dark. The system is not foolproof. In some species the females of one kind have learned to imitate the answering flash of another, luring hopeful males of the wrong species close — and then eating them.

It is in the deep ocean, far below the reach of sunlight, that living light comes into its own. Sunlight fades to nothing within a few hundred metres of the surface, and below that lies a vast, permanently dark realm that makes up most of the living space on the planet. In this enormous habitat, bioluminescence is not a curiosity but a normal feature of life: a remarkably high proportion of deep-sea animals can produce light of some kind. Most of that light is blue, for blue travels furthest through seawater, though a few unusual fishes can produce and detect red light, giving them a private channel invisible to their prey. In the perpetual darkness of the deep, the ability to make light is less a luxury than one of the basic currencies of survival.`,
        questions: [
          // ── Matching Information / which-paragraph (5 items) = 5 marks ──
          {
            id: 'rd-029-p2-q1',
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
                text: "an example of one animal mimicking another's light signal in order to eat it",
                answer: 'E',
              },
              {
                id: 'p2-i-2',
                text: 'the statement that biological light gives off energy as light rather than heat',
                answer: 'B',
              },
              {
                id: 'p2-i-3',
                text: 'the point that most deep-sea light is blue because blue travels furthest in seawater',
                answer: 'F',
              },
              {
                id: 'p2-i-4',
                text: 'a description of an animal housing glowing bacteria and controlling the light',
                answer: 'C',
              },
              {
                id: 'p2-i-5',
                text: 'an explanation of how some fish erase their own silhouette from below',
                answer: 'D',
              },
            ],
            explanation:
              'Item 1 → E: females of one firefly kind "imitate the answering flash of another" and "then eating them." Item 2 → B: the energy "is given off almost entirely as light rather than heat." Item 3 → F: "Most of that light is blue, for blue travels furthest through seawater." Item 4 → C: some squid "house luminous bacteria in an organ on their underside and can dim or expose the glow at will." Item 5 → D: belly lights tuned to the surface glow so a predator "sees no telltale silhouette," i.e. counter-illumination.',
          },
          {
            id: 'rd-029-p2-q2',
            type: 'tfng',
            prompt:
              'Bioluminescence has evolved only once and is found in just a few related species.',
            answer: 'false',
            explanation:
              'Paragraph A says living light is "found in creatures as different as bacteria, fungi, insects and fish, and it has evolved independently dozens of times." This directly contradicts the statement, so it is False.',
          },
          {
            id: 'rd-029-p2-q3',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The light-emitting molecule at the heart of bioluminescence is generally called a _______.',
            acceptableAnswers: ['luciferin'],
            explanation:
              'Paragraph B states that "At its heart lies a light-emitting molecule, generally called a luciferin." The required word is "luciferin".',
          },
          {
            id: 'rd-029-p2-q4',
            type: 'mcq',
            prompt:
              'According to paragraph B, what is the crucial difference between biological light and the light of a household bulb?',
            options: [
              'Biological light is brighter than the light of a bulb',
              'A bulb produces blue light while biological light is green',
              'A bulb must be heated until it glows and so wastes most of its energy as warmth',
              'Biological light can only be produced in the presence of sunlight',
            ],
            correctIndex: 2,
            explanation:
              'Paragraph B contrasts biological light with "an ordinary lamp, whose filament must be heated until it glows and which therefore wastes most of its energy as warmth." Option C matches.',
          },
          {
            id: 'rd-029-p2-q5',
            type: 'tfng',
            prompt: 'Partnerships with glowing bacteria are more common in the sea than on land.',
            answer: 'true',
            explanation:
              'Paragraph C states that "Such relationships are common in the sea and rare on land." This matches the statement, so it is True.',
          },
          {
            id: 'rd-029-p2-q6',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The trick by which fish match the dim glow from above to erase their shadow from below is known as _______-illumination.',
            acceptableAnswers: ['counter'],
            explanation:
              'Paragraph D states: "This trick of erasing one\'s own shadow is known as counter-illumination." The required word is "counter".',
          },
          {
            id: 'rd-029-p2-q7',
            type: 'mcq',
            prompt:
              'How does the deep-sea anglerfish use bioluminescence, according to paragraph E?',
            options: [
              'It releases a glowing cloud to confuse predators',
              'It dangles a glowing lure in front of its jaws to attract small fish',
              'It lights up its belly to match the surface glow',
              'It flashes in a particular rhythm to attract a mate',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph E says the anglerfish "dangles a glowing lure in front of its jaws to draw small fish within reach." Option B matches; the glowing cloud and counter-illumination describe other animals.',
          },
          {
            id: 'rd-029-p2-q8',
            type: 'tfng',
            prompt:
              'Sunlight reaches every part of the deep ocean where bioluminescent animals live.',
            answer: 'false',
            explanation:
              'Paragraph F says sunlight "fades to nothing within a few hundred metres of the surface," below which lies "a vast, permanently dark realm" full of luminous life. This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-029-p2-q9',
            type: 'tfng',
            prompt:
              'Bioluminescent fungi produce more light than any other group of glowing organisms.',
            answer: 'not-given',
            explanation:
              'Paragraph A lists fungi among the organisms that glow, but the passage never compares the amount of light produced by different groups. There is no information to confirm or contradict the statement, so it is Not Given.',
          },
        ],
      },
      // ───────────────────────────── PASSAGE 3 ─────────────────────────────
      {
        id: 'rd-academic-029-p3',
        title: 'Finding the Way',
        body: `Every year, billions of animals undertake journeys that dwarf anything in human experience. Birds cross oceans, whales travel the length of hemispheres, and even insects no heavier than a paperclip migrate thousands of kilometres between breeding and feeding grounds. What is most astonishing is not the distance but the precision: a young bird may fly to a wintering ground it has never seen and return, months later, to the very hedgerow where it hatched. For centuries the question of how animals find their way seemed an impenetrable mystery. Only patient experiment has begun to reveal the answer, which is that there is no single answer at all. Animals navigate by combining a whole toolkit of different cues, switching between them as conditions allow.

The most obvious cue is the sun, and many creatures use it as a compass. The difficulty is that the sun moves across the sky through the day, so its position alone cannot indicate a fixed direction. To use the sun for steering, an animal must also keep track of the time of day and make allowance for the sun's movement, a feat that requires an accurate internal clock. Experiments with birds have shown this clock at work in a striking way. When captive birds were kept under artificial lighting that shifted their sense of time by several hours and then released, they set off at a predictable angle away from their proper course — exactly the error expected if they were reading the sun's position against a clock that was now wrong.

For animals that travel by night, the stars offer a similar service. Unlike the sun, the night sky appears to wheel around a single fixed point, the celestial pole, about which the other stars seem to turn. An animal that can locate this still centre has found a reliable indicator of direction that does not depend on knowing the time. In a famous series of experiments, young songbirds were raised inside a planetarium, a domed theatre on whose ceiling an artificial night sky can be projected. The birds learned to orient themselves by the patterns they saw there, and when the projected sky was rotated about a false centre, they shifted their preferred direction to match — clear evidence that they read the stars rather than relying on any inborn map of particular constellations.

Perhaps the most remarkable cue of all is one entirely hidden from human senses: the magnetic field of the Earth itself. The planet behaves like a vast, weak magnet, and its field varies in a regular way across the globe, offering in principle a source of directional and even positional information. A wide range of animals, from migratory birds to sea turtles, appears able to detect this field and use it as a compass, and some may even sense its strength and angle precisely enough to gauge their position. Exactly how they do so is still debated; the sense organ involved is tiny and hard to locate, and the magnetic signal is extraordinarily faint. What is clear from experiment is that the ability is real, for animals exposed to artificial magnetic fields can be made to alter course.

Closer to the ground, more familiar cues come into play. Animals that travel shorter distances, or that are completing the final stage of a long journey, often steer by landmarks — coastlines, mountain ranges, rivers and other features of the land that can be learned and remembered. Smell, too, can be a powerful guide. The classic case is the salmon, which hatches in a particular stream, migrates far out to sea, and years later returns to spawn in the very same stretch of water. The fish is thought to memorise the distinctive chemical scent of its home stream as a young fish and to follow that remembered odour back upriver, sniffing its way to the exact spot of its birth among countless alternative branches.

These many cues are not used in isolation but woven together, with one taking over when another fails. A bird may steer by the sun by day, switch to the stars at night, fall back on the Earth's magnetic field when clouds hide both, and finally home in on familiar landmarks as it nears its destination. This flexibility is also what makes migration so vulnerable to a changing world. Artificial light at night can lure migrating birds off course and exhaust them; structures such as tall towers and bright buildings claim great numbers each year; and there is concern that human activity which alters the cues themselves may interfere with the delicate senses on which these journeys depend. A system perfected over millions of years can be disrupted in a single human lifetime.`,
        questions: [
          // ── Matching Features — cues to the species/example (5 items) = 5 marks ──
          {
            id: 'rd-029-p3-q1',
            type: 'matching',
            variant: 'features',
            prompt:
              'Look at the following statements and the list of navigational cues below. Match each statement to the cue it relates to in the passage. Write the correct letter, A, B, C or D. NB You may use any letter more than once.',
            options: [
              { key: 'A', label: 'The sun' },
              { key: 'B', label: 'The stars' },
              { key: 'C', label: "The Earth's magnetic field" },
              { key: 'D', label: 'Smell' },
            ],
            items: [
              {
                id: 'p3-f-1',
                text: 'To use it for steering, an animal must also keep track of the time of day.',
                answer: 'A',
              },
              {
                id: 'p3-f-2',
                text: 'It guides a salmon back to the exact stream where it hatched.',
                answer: 'D',
              },
              {
                id: 'p3-f-3',
                text: 'It appears to wheel around a single fixed point that marks a reliable direction.',
                answer: 'B',
              },
              {
                id: 'p3-f-4',
                text: 'The sense organ that detects it is tiny and hard to locate.',
                answer: 'C',
              },
              {
                id: 'p3-f-5',
                text: 'Songbirds raised in a planetarium learned to orient by it.',
                answer: 'B',
              },
            ],
            explanation:
              'Item 1 → A (the sun): "an animal must also keep track of the time of day and make allowance for the sun\'s movement." Item 2 → D (smell): the salmon follows "the distinctive chemical scent of its home stream" back to its birthplace. Item 3 → B (the stars): the night sky "appears to wheel around a single fixed point, the celestial pole." Item 4 → C (magnetic field): "the sense organ involved is tiny and hard to locate." Item 5 → B (the stars): songbirds "raised inside a planetarium" learned to orient by the projected sky.',
          },
          {
            id: 'rd-029-p3-q2',
            type: 'tfng',
            prompt: 'Scientists have found that animals rely on a single cue to navigate.',
            answer: 'false',
            explanation:
              'Paragraph A says "there is no single answer at all" and that animals "navigate by combining a whole toolkit of different cues." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-029-p3-q3',
            type: 'mcq',
            prompt:
              'Why can the position of the sun alone not indicate a fixed direction, according to paragraph B?',
            options: [
              'Because the sun is too bright for animals to look at directly',
              'Because the sun moves across the sky through the day',
              'Because clouds frequently hide the sun from view',
              'Because the sun only appears for part of the year',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph B states "the sun moves across the sky through the day, so its position alone cannot indicate a fixed direction." Option B matches.',
          },
          {
            id: 'rd-029-p3-q4',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: To steer by the sun and allow for its movement, an animal needs an accurate internal _______.',
            acceptableAnswers: ['clock'],
            explanation:
              'Paragraph B says using the sun "requires an accurate internal clock." The required word is "clock" (the prompt already supplies "internal"); the full phrase "internal clock" is also accepted.',
          },
          {
            id: 'rd-029-p3-q5',
            type: 'mcq',
            prompt:
              'What did the planetarium experiment with young songbirds demonstrate, according to paragraph C?',
            options: [
              'That birds are born knowing the shapes of particular constellations',
              'That birds read the stars rather than relying on an inborn star map',
              'That birds cannot navigate without seeing the real night sky',
              'That birds use the stars only when the magnetic field is unavailable',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph C says that when the projected sky was rotated, the birds shifted direction to match — "clear evidence that they read the stars rather than relying on any inborn map of particular constellations." Option B matches and rules out option A.',
          },
          {
            id: 'rd-029-p3-q6',
            type: 'tfng',
            prompt:
              "Scientists fully understand the mechanism by which animals detect the Earth's magnetic field.",
            answer: 'false',
            explanation:
              'Paragraph D states "Exactly how they do so is still debated; the sense organ involved is tiny and hard to locate." This contradicts the claim of full understanding, so it is False.',
          },
          {
            id: 'rd-029-p3-q7',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: A young salmon is thought to memorise the chemical _______ of its home stream and follow it back upriver years later.',
            acceptableAnswers: ['scent', 'odour'],
            explanation:
              'Paragraph E says the salmon memorises "the distinctive chemical scent of its home stream" and follows "that remembered odour back upriver." Either "scent" or "odour" appears verbatim and fits.',
          },
          {
            id: 'rd-029-p3-q8',
            type: 'tfng',
            prompt:
              'Animals exposed to artificial magnetic fields in experiments can be made to change direction.',
            answer: 'true',
            explanation:
              'Paragraph D states the magnetic sense is real because "animals exposed to artificial magnetic fields can be made to alter course." This matches the statement, so it is True.',
          },
          {
            id: 'rd-029-p3-q9',
            type: 'mcq',
            prompt:
              'How does paragraph F describe the way animals use their various navigational cues?',
            options: [
              'Each animal chooses one cue at birth and uses only that cue for life',
              'The cues are woven together, with one taking over when another fails',
              'The cues are used only during the final stage of a journey',
              'The cues cancel one another out unless the sky is clear',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph F says the cues "are not used in isolation but woven together, with one taking over when another fails," giving the example of a bird switching from sun to stars to magnetic field to landmarks. Option B matches.',
          },
          {
            id: 'rd-029-p3-q10',
            type: 'tfng',
            prompt:
              'Artificial light at night can draw migrating birds off course and tire them out.',
            answer: 'true',
            explanation:
              'Paragraph F states that "Artificial light at night can lure migrating birds off course and exhaust them." This matches the statement, so it is True.',
          },
        ],
      },
    ],
  },
]
