// ─── IELTS Academic Reading — practice item bank (Set 31) ──────────────────
// ORIGINAL content written for The English Hub. These passages and questions are
// invented purely to practise the Academic Reading question formats. They are
// NOT reproductions of any official IELTS past paper, and no official
// affiliation is implied. Academic track. Topic domains: the domestication of
// the horse / the measurement of earthquakes / why leaves change colour in
// autumn.
//
// This test is MATCHING-RICH. It contains four matching questions across all
// four variants: Matching Headings (Passage 1), Matching Information /
// which-paragraph (Passage 2), Matching Features — statements to scales
// (Passage 3) and Matching Sentence Endings (Passage 3), alongside the usual mix
// of True/False/Not Given, multiple choice and sentence/summary completion.
//
// One complete, carefully-checked test: 3 passages, 40 marks (each matching item
// counts as one mark). Every answer is verifiable from the passage text and is
// justified in the explanation. Marks: P1 = 6 (matching) + 7 = 13; P2 = 5
// (matching) + 8 = 13; P3 = 5 (features) + 4 (endings) + 5 = 14. Total = 40.
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const READING_SET_31: ReadingTest[] = [
  {
    id: 'rd-academic-031',
    title: 'Academic Reading — Practice Test 31',
    track: 'academic',
    estimatedMinutes: 60,
    passages: [
      // ───────────────────────────── PASSAGE 1 ─────────────────────────────
      {
        id: 'rd-academic-031-p1',
        title: 'The Taming of the Horse',
        body: `Few partnerships between humans and animals have done more to reshape history than the one struck with the horse. For thousands of years it carried messages, ploughed fields, hauled wagons and bore soldiers into battle, collapsing distances that had once seemed unbridgeable. Yet the horse was a comparative latecomer to the farmyard. Long after dogs, sheep, goats and cattle had been brought under human control, wild horses still ran free across the grasslands of Europe and Asia, hunted for their meat but not yet ridden or harnessed. Working out exactly where and when that changed has proved one of the more stubborn puzzles in the study of the human past.

The trail leads to the wide, treeless plains known as the steppe, a belt of grassland stretching from the plains north of the Black Sea eastward into Central Asia. Here, around five and a half thousand years ago, a herding people left behind clues that have intrigued researchers ever since. Among the most suggestive is the sheer quantity of horse bones at certain settlements, far outnumbering those of other animals and hinting that horses were being kept in numbers rather than merely chased down in the occasional hunt. A concentration of bones, however, proves only that people ate a great deal of horse meat; on its own it cannot show whether the animals were tame or wild, and for years that ambiguity left the question open.

The decisive evidence came not from bones in general but from teeth in particular. When a horse is controlled by a bit — the bar placed in its mouth and joined to the reins — the animal habitually chews and grinds against it, and over time this wears a distinctive band of damage on the surface of certain teeth. Archaeologists examining horse teeth from the steppe found exactly this pattern of wear on specimens far older than any previously accepted date for riding. Because nothing in a wild horse's life would produce such marks, the worn teeth were taken as a fingerprint of harnessing, pushing the likely origin of horse control back by centuries and anchoring it firmly on the steppe.

Other lines of inquiry have since converged on the same region. Chemical traces absorbed into the clay of ancient pottery suggest that the people of the steppe were not only eating horses but milking them, a practice that makes little sense unless the animals were tame enough to be approached and handled daily. The very shape of the settlements offered further hints: enclosures and post-holes consistent with pens or corrals, the kind of structures used to confine a herd rather than store the spoils of a hunt. No single clue was conclusive, but together the bones, the teeth, the milk residues and the corrals built a picture far more persuasive than any one of them alone.

Once tamed, the horse changed human life with startling speed. A rider could cover in a day a distance that would take a walker the better part of a week, so that herders could manage far larger flocks across far wider territories, and news, goods and people moved as never before. Languages and customs spread along the routes the riders opened, knitting together communities that had been effectively isolated. The horse became an engine of contact, carrying not only its rider but ideas, trade and occasionally disease across distances that had previously swallowed such things whole.

Nowhere was the impact more dramatic than in war. A mounted warrior enjoyed height, speed and reach over an opponent on foot, and the later marriage of the horse to the wheel — in the form of the light, fast chariot — produced a mobile fighting platform that dominated the battlefields of the ancient world for centuries. Empires rose and fell on the strength of their cavalry, and peoples who mastered the horse could project power over enormous areas. It is no exaggeration to say that for the better part of five thousand years, from the steppe herders to the eve of the machine age, the reach of a society was measured in good part by the reach of its horses.`,
        questions: [
          // ── Matching Headings (6 items, 8 options → 2 distractors) = 6 marks ──
          {
            id: 'rd-031-p1-q1',
            type: 'matching',
            variant: 'headings',
            prompt:
              'The passage has six paragraphs, A–F. Choose the correct heading for each paragraph from the list of headings below. There are more headings than paragraphs, so you will not use them all. Write the correct number (i–viii) for each paragraph.',
            options: [
              { key: 'i', label: 'Teeth that betray the bit' },
              { key: 'ii', label: 'A late arrival among tamed animals' },
              { key: 'iii', label: 'Breeding faster and stronger horses' },
              { key: 'iv', label: 'Milk, corrals and a converging case' },
              { key: 'v', label: 'The steppe and its puzzle of bones' },
              { key: 'vi', label: 'Collapsing distance across the land' },
              { key: 'vii', label: 'The horse decides the battlefield' },
              { key: 'viii', label: 'How horses were first hunted for meat' },
            ],
            items: [
              { id: 'p1-h-a', text: 'Paragraph A', answer: 'ii' },
              { id: 'p1-h-b', text: 'Paragraph B', answer: 'v' },
              { id: 'p1-h-c', text: 'Paragraph C', answer: 'i' },
              { id: 'p1-h-d', text: 'Paragraph D', answer: 'iv' },
              { id: 'p1-h-e', text: 'Paragraph E', answer: 'vi' },
              { id: 'p1-h-f', text: 'Paragraph F', answer: 'vii' },
            ],
            explanation:
              'A stresses that the horse was "a comparative latecomer to the farmyard," tamed long after dogs, sheep, goats and cattle (ii). B introduces the steppe and the ambiguous abundance of horse bones (v). C presents the worn teeth as "a fingerprint of harnessing" caused by the bit (i). D gathers the milk residues and corrals into a "far more persuasive" combined case (iv). E describes a rider covering in a day what took a walker a week, collapsing distance (vi). F covers the mounted warrior and the chariot dominating the battlefield (vii). Heading iii (selective breeding) and heading viii (how horses were hunted) are distractors never developed by the passage.',
          },
          {
            id: 'rd-031-p1-q2',
            type: 'tfng',
            prompt: 'The horse was domesticated before animals such as sheep, goats and cattle.',
            answer: 'false',
            explanation:
              'Paragraph A states that "Long after dogs, sheep, goats and cattle had been brought under human control, wild horses still ran free." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-031-p1-q3',
            type: 'mcq',
            prompt:
              'According to paragraph B, why could a large quantity of horse bones at a settlement NOT prove that the horses were tame?',
            options: [
              'Because the bones could not be dated with any accuracy',
              'Because abundant bones show only that a great deal of horse meat was eaten',
              'Because wild horses left no bones at human settlements',
              'Because the bones belonged to several different animal species',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph B says a concentration of bones "proves only that people ate a great deal of horse meat; on its own it cannot show whether the animals were tame or wild." Option B matches.',
          },
          {
            id: 'rd-031-p1-q4',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The bar placed in a horse’s mouth and joined to the reins is called the _______.',
            acceptableAnswers: ['bit'],
            explanation:
              'Paragraph C defines the bit as "the bar placed in its mouth and joined to the reins." The required word is "bit".',
          },
          {
            id: 'rd-031-p1-q5',
            type: 'mcq',
            prompt: 'Why were the worn marks on the horse teeth treated as evidence of harnessing?',
            options: [
              'Because such marks appear naturally as a horse grows older',
              'Because only the oldest horses on the steppe showed them',
              'Because nothing in a wild horse’s life would produce such marks',
              'Because the same marks were found on the teeth of cattle and goats',
            ],
            correctIndex: 2,
            explanation:
              'Paragraph C states that "Because nothing in a wild horse\'s life would produce such marks, the worn teeth were taken as a fingerprint of harnessing." Option C matches.',
          },
          {
            id: 'rd-031-p1-q6',
            type: 'tfng',
            prompt:
              'Chemical traces in ancient pottery suggest that steppe people drank the milk of their horses.',
            answer: 'true',
            explanation:
              'Paragraph D says chemical traces in the clay of ancient pottery "suggest that the people of the steppe were not only eating horses but milking them." This supports the statement, so it is True.',
          },
          {
            id: 'rd-031-p1-q7',
            type: 'tfng',
            prompt: 'The chariot was invented before horses were first ridden.',
            answer: 'not-given',
            explanation:
              'Paragraph F mentions "the later marriage of the horse to the wheel" in the form of the chariot, but the passage never states when the chariot was invented relative to riding, nor claims it came first. There is no information to confirm or contradict the statement, so it is Not Given.',
          },
          {
            id: 'rd-031-p1-q8',
            type: 'tfng',
            prompt:
              'The passage states that languages and customs spread along the routes that riders opened up.',
            answer: 'true',
            explanation:
              'Paragraph E states that "Languages and customs spread along the routes the riders opened, knitting together communities that had been effectively isolated." This supports the statement, so it is True.',
          },
        ],
      },
      // ───────────────────────────── PASSAGE 2 ─────────────────────────────
      {
        id: 'rd-academic-031-p2',
        title: 'Taking the Measure of an Earthquake',
        body: `An earthquake announces itself as a violent shaking of the ground, but the shaking is only the surface expression of a sudden release of energy deep within the planet. Most large earthquakes occur where the great rigid plates that make up the outer shell of the Earth grind past or against one another. Friction locks the rock in place while the slow, relentless movement of the plates loads it with strain, like a stick being bent further and further. When the rock can bend no more it fractures and slips, and the stored energy is released in an instant, radiating outward through the ground as waves. Understanding, measuring and eventually anticipating those waves has been one of the central tasks of the science of seismology.

The energy travels in several distinct kinds of wave, and the differences between them turn out to be extremely useful. The fastest are the so-called primary waves, which compress and stretch the rock in the direction they travel, much as a sound wave moves through air; being quickest, they arrive first at any distant point. Behind them come the slower secondary waves, which shake the rock from side to side. Last of all, and often most destructive, come the surface waves, which travel along the ground itself and produce the rolling, heaving motion that topples buildings. Because the first two kinds travel at different and well-known speeds, the gap in time between their arrivals grows steadily with distance, and that simple fact lies at the heart of much of what seismologists can do.

The instrument that records these waves is the seismograph. In its classic form the principle is elegantly simple: a heavy weight is suspended so that, when the ground and the frame of the instrument jolt during a quake, the weight's own inertia keeps it nearly still while everything around it moves. A pen attached to the weight, or in modern versions a beam of light or an electronic sensor, traces the relative motion onto a moving record, producing the jagged line known as a seismogram. By comparing the seismograms gathered at three or more separated stations, and measuring at each the delay between the primary and secondary waves, seismologists can calculate how far the quake was from every station and so pinpoint where it began.

The size of an earthquake can be described in two quite different ways, a distinction that is often blurred in everyday speech. The first is magnitude, a measure of the total energy released at the source. The best-known magnitude scale was devised in the 1930s and is logarithmic, meaning that each whole step up the scale represents roughly a tenfold increase in the amplitude of the recorded waves and far more than that in actual energy. A single, fixed number, the magnitude is the same regardless of where it is measured, because it refers to the event itself rather than to its effects in any one place.

Intensity is a different thing altogether. Rather than the energy at the source, it measures how strongly the shaking was felt and how much damage was done at a particular location, and it is gauged not by instruments but by observation — cracked plaster, fallen chimneys, the reports of people who felt the ground move. A single earthquake therefore has only one magnitude but many intensities, high near the epicentre and fading with distance, and shaped as well by the local geology. Soft, water-logged ground can amplify the shaking dramatically, so that two towns the same distance from the source may suffer very unequally depending on what lies beneath their foundations.

Because the destructive surface waves travel more slowly than the first tremors, a narrow but precious window of warning exists. Modern early-warning systems exploit it: a dense network of sensors detects the fast, relatively harmless primary waves as they radiate from the source, instantly estimates the earthquake's size and location, and transmits an alert electronically — far faster than the damaging waves themselves can travel. The warning may amount only to seconds, occasionally a little more, but even that can be enough for trains to brake, gas valves to close and people to take cover. Such systems cannot predict an earthquake before it begins; what they do is race the slower waves across the intervening ground and, now and then, win.`,
        questions: [
          // ── Matching Information / which-paragraph (5 items) = 5 marks ──
          {
            id: 'rd-031-p2-q1',
            type: 'matching',
            variant: 'information',
            prompt:
              'The passage has six paragraphs, A–F. Which paragraph contains the following information? Write the correct letter, A–F. (Each statement here is found in only one paragraph.)',
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
                text: 'a description of how a suspended weight stays still while the ground moves',
                answer: 'C',
              },
              {
                id: 'p2-i-b',
                text: 'the point that soft ground can make the shaking far worse',
                answer: 'E',
              },
              {
                id: 'p2-i-c',
                text: 'an explanation of how strain builds in locked rock until it fractures',
                answer: 'A',
              },
              {
                id: 'p2-i-d',
                text: 'a statement that a warning may give only a few seconds',
                answer: 'F',
              },
              {
                id: 'p2-i-e',
                text: 'the fact that the best-known magnitude scale is logarithmic',
                answer: 'D',
              },
            ],
            explanation:
              'Item a → C, which describes the heavy weight whose "inertia keeps it nearly still while everything around it moves." Item b → E: "Soft, water-logged ground can amplify the shaking dramatically." Item c → A: friction locks the rock while plate movement "loads it with strain" until it "fractures and slips." Item d → F: "The warning may amount only to seconds." Item e → D: the best-known scale "is logarithmic."',
          },
          {
            id: 'rd-031-p2-q2',
            type: 'mcq',
            prompt: 'According to paragraph A, what is the shaking felt during an earthquake?',
            options: [
              'The cause of the movement of the Earth’s plates',
              'The surface expression of a sudden release of energy underground',
              'A slow bending of rock that continues for many years',
              'A direct result of friction between the ground and buildings',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph A says the shaking "is only the surface expression of a sudden release of energy deep within the planet." Option B matches.',
          },
          {
            id: 'rd-031-p2-q3',
            type: 'tfng',
            prompt: 'Primary waves reach a distant location before secondary waves do.',
            answer: 'true',
            explanation:
              'Paragraph B states the primary waves are the fastest and "arrive first at any distant point," while the secondary waves come "Behind them." This supports the statement, so it is True.',
          },
          {
            id: 'rd-031-p2-q4',
            type: 'tfng',
            prompt: 'Surface waves are the fastest of the three kinds of wave described.',
            answer: 'false',
            explanation:
              'Paragraph B describes the surface waves as coming "Last of all," whereas the primary waves are "The fastest." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-031-p2-q5',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The jagged line traced by the recording instrument is known as a _______.',
            acceptableAnswers: ['seismogram'],
            explanation:
              'Paragraph C says the instrument traces the motion onto a moving record, "producing the jagged line known as a seismogram." The required word is "seismogram".',
          },
          {
            id: 'rd-031-p2-q6',
            type: 'mcq',
            prompt:
              'How do seismologists work out where an earthquake began, according to paragraph C?',
            options: [
              'By measuring the height of the surface waves at a single station',
              'By comparing seismograms from three or more separated stations and the wave delays at each',
              'By recording the total energy released at the source',
              'By observing the amount of damage caused at the epicentre',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph C says that "By comparing the seismograms gathered at three or more separated stations, and measuring at each the delay between the primary and secondary waves," seismologists can pinpoint where the quake began. Option B matches.',
          },
          {
            id: 'rd-031-p2-q7',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: _______ is a measure of the total energy released at the source of an earthquake.',
            acceptableAnswers: ['magnitude'],
            explanation:
              'Paragraph D defines magnitude as "a measure of the total energy released at the source." The required word is "magnitude".',
          },
          {
            id: 'rd-031-p2-q8',
            type: 'tfng',
            prompt: 'A single earthquake can be assigned more than one intensity value.',
            answer: 'true',
            explanation:
              'Paragraph E states that "A single earthquake therefore has only one magnitude but many intensities, high near the epicentre and fading with distance." This supports the statement, so it is True.',
          },
          {
            id: 'rd-031-p2-q9',
            type: 'tfng',
            prompt: 'Early-warning systems can predict an earthquake before it begins.',
            answer: 'false',
            explanation:
              'Paragraph F states plainly that "Such systems cannot predict an earthquake before it begins"; instead they detect the fast primary waves and race the slower waves. This contradicts the statement, so it is False.',
          },
        ],
      },
      // ───────────────────────────── PASSAGE 3 ─────────────────────────────
      {
        id: 'rd-academic-031-p3',
        title: 'The Colours of Autumn',
        body: `Every autumn, across the cooler regions of the world, whole forests change their dress. The uniform green of summer dissolves into a blaze of yellow, orange, scarlet and bronze, a transformation so familiar that it is easy to forget how strange it is. The colours do not so much arrive as emerge: most of them were present in the leaf all along, masked through the growing season by a single dominant pigment. To understand the spectacle of autumn is really to understand why that pigment vanishes, and what it leaves behind.

The pigment in question is chlorophyll, the green substance that allows a plant to make food. Using the energy of sunlight, chlorophyll drives the process by which a leaf combines water and carbon dioxide into sugars, the fuel on which the whole tree runs. Chlorophyll is abundant in a working leaf and is constantly being broken down and remade, so that through spring and summer the leaf stays a vivid green. It is this ceaseless renewal, rather than any permanence of the pigment itself, that keeps the summer canopy its familiar colour, and it is the failure of that renewal that sets the autumn display in motion.

As the days shorten and the nights cool, a deciduous tree prepares to shed its leaves, and the first step is to stop maintaining the chlorophyll. Production ceases, the existing pigment continues to break down and is not replaced, and the green steadily drains away. What is revealed is a class of pigments that were in the leaf throughout the summer but hidden beneath the green: the carotenoids, which colour the leaf yellow and orange. Because these pigments were there all along, the yellows of autumn are in a sense merely uncovered rather than created — the green curtain is simply drawn back to show colours that the leaf possessed the whole time.

The fiery reds and purples are a different and more puzzling matter. Unlike the carotenoids, the pigments responsible, called anthocyanins, are not unmasked but manufactured afresh in the dying leaf, often in the very last weeks of its life. This is curious, for it costs the tree energy to make a pigment in a leaf it is about to discard, and biologists have proposed several explanations. One leading idea is that the red pigment acts as a kind of sunscreen, shielding the leaf from bright autumn light while the tree withdraws and stores the last of its valuable nutrients before the leaf falls. The brightest red displays tend to follow bright, cool, dry autumn days, conditions that fit this protective explanation rather neatly.

Why a tree should go to the trouble of dropping its leaves at all becomes clear once winter is considered. Broad, thin leaves are superb at gathering light but are fragile and leak water freely, and in a cold season when the ground may be frozen and water hard to draw up, keeping them would be a dangerous liability. Worse, a canopy of leaves catches snow, and the accumulated weight can break branches. By sealing off and discarding its leaves before winter, a deciduous tree cuts its losses, protecting itself from drought and damage during the months when a leaf could not pay its way in any case. The falling of the leaves, far from being a kind of death, is a careful act of self-preservation.

Because the display is tuned so finely to weather, it is sensitive to a changing climate. Warmer autumns can delay the breakdown of chlorophyll and push the whole spectacle later in the year, and unusual patterns of temperature and rainfall can mute the brilliance of the reds or cut the season short. Scientists who monitor the timing of natural events have noted that in many places the onset of autumn colour has shifted in recent decades. The annual turning of the leaves, long treated as one of the fixed certainties of the calendar, is turning out to be a surprisingly delicate indicator of the warming world.`,
        questions: [
          // ── Matching Features — statements to scientific terms (5 items) = 5 marks ──
          {
            id: 'rd-031-p3-q1',
            type: 'matching',
            variant: 'features',
            prompt:
              'Look at the following statements and the list of pigments below. Match each statement to the pigment it relates to in the passage. Write the correct letter, A, B or C. NB You may use any letter more than once.',
            options: [
              { key: 'A', label: 'Chlorophyll' },
              { key: 'B', label: 'Carotenoids' },
              { key: 'C', label: 'Anthocyanins' },
            ],
            items: [
              {
                id: 'p3-f-a',
                text: 'produces the yellow and orange colours of autumn leaves.',
                answer: 'B',
              },
              {
                id: 'p3-f-b',
                text: 'is constantly broken down and remade in a working leaf.',
                answer: 'A',
              },
              {
                id: 'p3-f-c',
                text: 'is newly manufactured in the dying leaf rather than uncovered.',
                answer: 'C',
              },
              {
                id: 'p3-f-d',
                text: 'allows the plant to turn water and carbon dioxide into sugars.',
                answer: 'A',
              },
              {
                id: 'p3-f-e',
                text: 'is thought to act as a kind of sunscreen for the leaf.',
                answer: 'C',
              },
            ],
            explanation:
              'Item a → B (carotenoids), "which colour the leaf yellow and orange." Item b → A (chlorophyll), which "is constantly being broken down and remade." Item c → C (anthocyanins), which "are not unmasked but manufactured afresh in the dying leaf." Item d → A (chlorophyll), which combines "water and carbon dioxide into sugars." Item e → C (anthocyanins): the leading idea is "that the red pigment acts as a kind of sunscreen."',
          },
          // ── Matching Sentence Endings (4 items, 6 options → 2 distractors) = 4 marks ──
          {
            id: 'rd-031-p3-q2',
            type: 'matching',
            variant: 'endings',
            prompt:
              'Complete each sentence with the correct ending, A–F, from the box below. There are more endings than sentences, so you will not use them all. Write the correct letter, A–F.',
            options: [
              { key: 'A', label: 'because the existing pigment is no longer replaced.' },
              { key: 'B', label: 'because they were present in the leaf throughout the summer.' },
              { key: 'C', label: 'because they are fragile and lose water easily.' },
              { key: 'D', label: 'because the tree manufactures more of it each spring.' },
              { key: 'E', label: 'because warmer autumns can delay the loss of chlorophyll.' },
              { key: 'F', label: 'because snow makes the branches grow more quickly.' },
            ],
            items: [
              {
                id: 'p3-e-a',
                text: 'The green of a leaf drains away in autumn',
                answer: 'A',
              },
              {
                id: 'p3-e-b',
                text: 'The yellows of autumn are described as uncovered rather than created',
                answer: 'B',
              },
              {
                id: 'p3-e-c',
                text: 'Broad, thin leaves would be a liability in a cold winter',
                answer: 'C',
              },
              {
                id: 'p3-e-d',
                text: 'Autumn colour now tends to appear later in the year',
                answer: 'E',
              },
            ],
            explanation:
              'Sentence a → A: in autumn "the existing pigment continues to break down and is not replaced, and the green steadily drains away." Sentence b → B: the yellows are "merely uncovered rather than created" because the carotenoids "were there all along." Sentence c → C: broad leaves "are fragile and leak water freely," a liability in winter. Sentence d → E: "Warmer autumns can delay the breakdown of chlorophyll and push the whole spectacle later." Endings D and F are distractors not supported by the passage.',
          },
          {
            id: 'rd-031-p3-q3',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The green substance that allows a plant to make food is called _______.',
            acceptableAnswers: ['chlorophyll'],
            explanation:
              'Paragraph B identifies "chlorophyll, the green substance that allows a plant to make food." The required word is "chlorophyll".',
          },
          {
            id: 'rd-031-p3-q4',
            type: 'mcq',
            prompt:
              'Why does the leaf stay green throughout spring and summer, according to paragraph B?',
            options: [
              'Because the chlorophyll never breaks down once it has formed',
              'Because the chlorophyll is constantly broken down and remade',
              'Because the carotenoids reinforce the green colour',
              'Because sunlight turns the other pigments green',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph B says chlorophyll "is constantly being broken down and remade, so that through spring and summer the leaf stays a vivid green," and credits "ceaseless renewal, rather than any permanence of the pigment." Option B matches.',
          },
          {
            id: 'rd-031-p3-q5',
            type: 'tfng',
            prompt: 'Anthocyanins are present in the leaf throughout the whole summer.',
            answer: 'false',
            explanation:
              'Paragraph D states that, unlike the carotenoids, anthocyanins "are not unmasked but manufactured afresh in the dying leaf, often in the very last weeks of its life." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-031-p3-q6',
            type: 'tfng',
            prompt: 'The brightest red autumn displays tend to follow bright, cool, dry days.',
            answer: 'true',
            explanation:
              'Paragraph D says "The brightest red displays tend to follow bright, cool, dry autumn days." This supports the statement, so it is True.',
          },
          {
            id: 'rd-031-p3-q7',
            type: 'tfng',
            prompt:
              'Evergreen trees lose fewer leaves in winter than deciduous trees because their leaves are tougher.',
            answer: 'not-given',
            explanation:
              'The passage discusses why deciduous trees shed their leaves, but it never mentions evergreen trees or compares the toughness of their leaves. There is no information to confirm or contradict the statement, so it is Not Given.',
          },
        ],
      },
    ],
  },
]
