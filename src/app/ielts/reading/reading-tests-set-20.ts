// ─── IELTS Academic Reading - practice item bank (Set 20) ──────────────────
// ORIGINAL content written for The English Hub. These passages and questions are
// invented purely to practise the Academic Reading question formats. They are
// NOT reproductions of any official IELTS past paper, and no official
// affiliation is implied. Academic track. Topic domains: the origins of
// agriculture and the domestication of wheat / the science of colour vision /
// the history of the telescope.
//
// This test is MATCHING-RICH. It contains three matching questions across two
// different variants: Matching Headings (Passage 1), Matching Information /
// which-paragraph (Passage 2) and Matching Features - statements to researchers
// (Passage 3), alongside the usual mix of True/False/Not Given, multiple choice
// and sentence/summary completion.
//
// One complete, carefully-checked test: 3 passages, 40 marks (each matching item
// counts as one mark). Every answer is verifiable from the passage text and is
// justified in the explanation. Marks: P1 = 6 (matching) + 7 = 13; P2 = 5
// (matching) + 8 = 13; P3 = 5 (matching) + 9 = 14. Total = 40.
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const READING_SET_20: ReadingTest[] = [
  {
    id: 'rd-academic-020',
    title: 'Academic Reading - Practice Test 20',
    track: 'academic',
    estimatedMinutes: 60,
    passages: [
      // ───────────────────────────── PASSAGE 1 ─────────────────────────────
      {
        id: 'rd-academic-020-p1',
        title: 'How Wheat Was Tamed',
        body: `Of all the plants that human beings have bent to their purposes, none has done more to shape the modern world than wheat. It feeds billions, covers more of the planet's farmed surface than any other crop, and underwrites the diet of civilisations from Europe to East Asia. Yet the wild grasses from which it descends would strike a modern farmer as almost useless. They are sparse, brittle and hard to gather, and the journey from those unpromising weeds to the heavy-eared plant of a wheat field was neither quick nor inevitable. It was the result of thousands of years of unconscious selection by people who had no idea they were breeding a new species at all.

The story begins in the Fertile Crescent, the arc of well-watered land curving from the eastern Mediterranean coast through what is now Iraq. There, towards the end of the last ice age, bands of hunter-gatherers harvested stands of wild wheat and barley that grew thickly on the hillsides. For a long time they simply gathered the grain where it stood, returning each year to the same productive slopes. Archaeologists working at ancient settlements in the region have found stone sickle blades, their edges polished to a characteristic sheen by the silica in cut stems, together with grinding stones and the charred remains of harvested seed. These people were not yet farmers, but they were already deeply dependent on the wild harvest, and that dependence set the stage for everything that followed.

The single most important difference between wild and domestic wheat lies in a structure at the top of the stem known as the rachis, the central axis to which the grains are attached. In wild wheat the rachis is brittle: as soon as the seed is ripe it shatters, scattering the grain across the ground so that a new generation can take root. This is excellent for the plant but a disaster for anyone trying to collect the harvest, because most of the seed falls before it can be gathered. Very occasionally, however, a chance mutation produces a plant whose rachis does not shatter but stays intact, holding its grain on the stem. In the wild such a plant is doomed, for it cannot sow itself; but in the hands of a human harvester it is exactly the plant most likely to be cut, carried home and, sooner or later, sown again.

Here lies the quiet mechanism of domestication. Every time people harvested a field with sickles and saved part of the crop for the next planting, they were unwittingly gathering a disproportionate share of seed from the rare non-shattering plants, simply because those were the plants whose grain had not already fallen to the ground. Sow that seed, harvest again, save the best once more, and over many generations the tough-rachis form comes to dominate the field. The farmers were not trying to redesign the plant; they were merely keeping what was easiest to keep. The result, achieved without any understanding of heredity, was a grass that had lost the ability to spread on its own and now depended entirely on human hands to reproduce. Wheat had been domesticated, and in a sense it had domesticated its growers in return.

Other changes followed the same logic. Wild seeds protect themselves with thick coats and germinate only after lying dormant through a season of cold or drought, a sensible insurance policy that spreads a plant's offspring across the years. For a farmer, however, dormancy is a nuisance: seed that refuses to sprout when it is sown is seed wasted. Plants that happened to germinate readily and uniformly were favoured by the simple fact that their seedlings appeared in the cultivated plot, and so domestic wheat gradually lost much of the caution of its wild ancestors. Its grains also grew larger, since bigger seeds produced sturdier seedlings that fared better in the crowded, weeded conditions of a field.

The consequences reached far beyond the plant itself. A grain that could be stored allowed communities to accumulate surpluses, and surpluses, once they could be owned and defended, made possible settled villages, then towns, and eventually the first cities with their officials, soldiers and scribes. Some historians have argued that the early farming diet, narrower and more monotonous than the varied fare of hunter-gatherers, may at first have made people less healthy rather than more, even as their numbers grew. Whatever the balance of gains and losses, there is no doubt about the direction of travel. A handful of brittle wild grasses, reshaped by the unthinking choices of countless harvesters, became the foundation on which much of human civilisation was built.`,
        questions: [
          // ── Matching Headings (6 items, 8 options → 2 distractors) = 6 marks ──
          {
            id: 'rd-020-p1-q1',
            type: 'matching',
            variant: 'headings',
            prompt:
              'The passage has six paragraphs, A-F. Choose the correct heading for each paragraph from the list of headings below. There are more headings than paragraphs, so you will not use them all. Write the correct number (i-viii) for each paragraph.',
            options: [
              { key: 'i', label: 'A brittle stalk versus one that holds on' },
              { key: 'ii', label: 'The hidden selection that reshaped the plant' },
              { key: 'iii', label: 'A humble weed that changed the world' },
              { key: 'iv', label: 'Gathering the wild harvest before farming began' },
              { key: 'v', label: 'How wheat spread to every continent by ship' },
              { key: 'vi', label: 'From stored grain to the first cities' },
              { key: 'vii', label: 'Losing caution: dormancy, germination and size' },
              { key: 'viii', label: 'The modern science of breeding better seed' },
            ],
            items: [
              { id: 'p1-h-a', text: 'Paragraph A', answer: 'iii' },
              { id: 'p1-h-b', text: 'Paragraph B', answer: 'iv' },
              { id: 'p1-h-c', text: 'Paragraph C', answer: 'i' },
              { id: 'p1-h-d', text: 'Paragraph D', answer: 'ii' },
              { id: 'p1-h-e', text: 'Paragraph E', answer: 'vii' },
              { id: 'p1-h-f', text: 'Paragraph F', answer: 'vi' },
            ],
            explanation:
              'A introduces wheat as a world-shaping crop descended from "unpromising weeds" (iii). B describes hunter-gatherers harvesting wild stands before they were farmers (iv). C contrasts the brittle wild rachis that shatters with the rare plant whose rachis "stays intact, holding its grain on the stem" (i). D explains the "quiet mechanism of domestication" - harvesters unwittingly saving the non-shattering form (ii). E covers the loss of dormancy, readier germination and larger grain size (vii). F traces stored grain through surpluses to "the first cities" (vi). Heading v (spread by ship to every continent) is a distractor never stated; heading viii (modern scientific breeding) is a distractor - the passage stresses selection was unconscious, not modern science.',
          },
          {
            id: 'rd-020-p1-q2',
            type: 'tfng',
            prompt:
              'The people who first harvested wild wheat understood that they were creating a new kind of plant.',
            answer: 'false',
            explanation:
              'Paragraph A states the change "was the result of thousands of years of unconscious selection by people who had no idea they were breeding a new species at all," and D repeats that they acted "without any understanding of heredity." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-020-p1-q3',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The central axis at the top of the stem, to which the grains are attached, is called the _______.',
            acceptableAnswers: ['rachis'],
            explanation:
              'Paragraph C defines "a structure at the top of the stem known as the rachis, the central axis to which the grains are attached." The required word is "rachis".',
          },
          {
            id: 'rd-020-p1-q4',
            type: 'mcq',
            prompt:
              'Why does a non-shattering mutation, which keeps its grain on the stem, fail to survive in the wild?',
            options: [
              'Its grains are too large for birds and animals to disperse.',
              'It cannot scatter its own seed, so it cannot sow itself.',
              'Its seeds germinate too quickly and are killed by frost.',
              'It is always cut down by human harvesters before ripening.',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph C says of the non-shattering plant: "In the wild such a plant is doomed, for it cannot sow itself." Option B states this. The passage actually presents human harvesting as what saves the mutation, not what dooms it, so option D is wrong.',
          },
          {
            id: 'rd-020-p1-q5',
            type: 'mcq',
            prompt:
              'According to paragraph D, why did the tough-rachis form gradually come to dominate cultivated fields?',
            options: [
              'Farmers deliberately searched for and replanted only the toughest plants.',
              'The brittle plants were killed off by repeated harvesting with sickles.',
              'Harvesters saved a disproportionate share of seed from non-shattering plants, because that grain had not already fallen.',
              'The tough-rachis plants produced far more seed than the brittle ones.',
            ],
            correctIndex: 2,
            explanation:
              'Paragraph D explains harvesters "were unwittingly gathering a disproportionate share of seed from the rare non-shattering plants, simply because those were the plants whose grain had not already fallen to the ground." Option C matches. Option A is wrong because the selection was unconscious, not deliberate.',
          },
          {
            id: 'rd-020-p1-q6',
            type: 'tfng',
            prompt: 'Wheat was the first crop to be domesticated anywhere in the world.',
            answer: 'not-given',
            explanation:
              'The passage describes wheat being domesticated in the Fertile Crescent and notes barley grew alongside it, but it never claims wheat was the first crop domesticated, nor compares its timing with that of any other crop in any region. There is no information to confirm or contradict the statement, so it is Not Given.',
          },
          {
            id: 'rd-020-p1-q7',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Wild seeds often remain _______ through a season of cold or drought, sprouting only later - a trait that farming gradually reduced.',
            acceptableAnswers: ['dormant'],
            explanation:
              'Paragraph E says wild seeds "germinate only after lying dormant through a season of cold or drought." The required word is "dormant".',
          },
          {
            id: 'rd-020-p1-q8',
            type: 'tfng',
            prompt:
              'Some historians believe the early farming diet may have been less healthy than that of hunter-gatherers.',
            answer: 'true',
            explanation:
              'Paragraph F states that "the early farming diet, narrower and more monotonous than the varied fare of hunter-gatherers, may at first have made people less healthy rather than more." This matches the statement, so it is True.',
          },
        ],
      },
      // ───────────────────────────── PASSAGE 2 ─────────────────────────────
      {
        id: 'rd-academic-020-p2',
        title: 'How We See Colour',
        body: `Colour feels like one of the plainest facts about the world. A ripe tomato is red, the summer sky is blue, fresh grass is green, and these qualities seem to belong to the objects themselves as solidly as their weight or shape. Yet colour is not, strictly speaking, a property of objects at all. It is a sensation manufactured inside the brain, a way of labelling differences in the wavelengths of light that reach the eye. The light itself has no colour; it is simply electromagnetic radiation of varying wavelength. What we call colour is the meaning our visual system attaches to those wavelengths, and the story of how it does so is one of the more surprising in all of biology.

The work begins at the back of the eye, on a thin sheet of light-sensitive tissue called the retina. Embedded in it are two kinds of receptor cell, named after their shapes. Rods, which are far more numerous, are extraordinarily sensitive and allow us to see in dim light, but they cannot distinguish colours; this is why a moonlit garden appears in shades of grey. The work of colour vision falls instead to the cones, which need much brighter light to function. In most people there are three types of cone, each containing a pigment that responds most strongly to a different part of the spectrum: one tuned to long wavelengths, broadly the reddish end, one to medium wavelengths in the green region, and one to short, bluish wavelengths.

It would be natural to assume that each type of cone simply signals its own colour, but the truth is more interesting. No single cone can report a colour by itself, because any one cone responds to a wide band of wavelengths and cannot tell, from its own signal alone, whether it is being struck by a few photons of its favourite wavelength or by many photons of another. A colour is identified only by comparing the outputs of all three cone types at once. The brain reads the ratio between them: when the long-wavelength cones fire much more strongly than the others, we see red; when the short-wavelength cones dominate, we see blue. Colour, in other words, is computed from differences, not detected directly.

Because the system depends on three separate channels, the loss or alteration of one of them changes everything. The condition popularly called colour blindness almost always involves not an absence of colour but a shift or weakening in one type of cone, most often the long- or medium-wavelength type. People with this very common inherited condition do not see in grey; they see a smaller range of distinct hues, and in particular may struggle to tell certain reds and greens apart. The trait is far more frequent in men than in women, a pattern explained by the fact that the relevant genes lie on the X chromosome, of which men carry only one copy. A woman with a faulty gene on one X chromosome usually has a working copy on the other.

Curiously, the same genetics that disadvantage some people may gift a few others with extra colour discrimination. A small number of women are thought to carry genes for two slightly different versions of one cone pigment, giving them four functioning cone types rather than three. In principle such individuals, sometimes called tetrachromats, could distinguish colours that look identical to the rest of us, perceiving distinctions in, say, a row of greens where others see no difference at all. Demonstrating this reliably in the laboratory has proved difficult, partly because our colour vocabulary and the screens used to test it are built for ordinary three-cone vision, but the possibility is a vivid reminder that the colour world is not the same for everyone.

The variation runs deeper still when other species are considered, which is why it is misleading to speak of the 'true' colour of anything. Dogs possess only two kinds of cone and inhabit a more muted palette than ours. Many birds, by contrast, have four or more and can see into the ultraviolet, so that flowers and feathers which appear plain to us may blaze with patterns we cannot even imagine. The mantis shrimp, a small marine creature, carries a dozen or more distinct types of colour receptor, though oddly it seems to use them in a way quite unlike our comparative method. Faced with such diversity, the lesson of the science is humbling: the riot of colour each creature experiences is a private construction, tailored by evolution to its own needs, and no version has any better claim than another to being the world as it 'really' is.`,
        questions: [
          // ── Matching Information / which-paragraph (5 items) = 5 marks ──
          {
            id: 'rd-020-p2-q1',
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
                text: 'an explanation of why colour blindness affects men more often than women',
                answer: 'D',
              },
              {
                id: 'p2-i-2',
                text: 'the statement that colour is produced by the brain rather than belonging to objects',
                answer: 'A',
              },
              {
                id: 'p2-i-3',
                text: 'examples of animals whose colour vision differs greatly from our own',
                answer: 'F',
              },
              {
                id: 'p2-i-4',
                text: 'a description of two kinds of receptor cell and their different roles',
                answer: 'B',
              },
              {
                id: 'p2-i-5',
                text: 'the idea that a single cone cannot identify a colour on its own',
                answer: 'C',
              },
            ],
            explanation:
              'Item 1 → D, which says colour blindness "is far more frequent in men than in women" because the genes "lie on the X chromosome, of which men carry only one copy." Item 2 → A: colour "is not, strictly speaking, a property of objects... It is a sensation manufactured inside the brain." Item 3 → F, with its dogs, birds and mantis shrimp examples. Item 4 → B, which introduces rods and cones and their roles. Item 5 → C: "No single cone can report a colour by itself."',
          },
          {
            id: 'rd-020-p2-q2',
            type: 'tfng',
            prompt: 'Light itself carries colour as one of its physical properties.',
            answer: 'false',
            explanation:
              'Paragraph A states plainly that "The light itself has no colour; it is simply electromagnetic radiation of varying wavelength." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-020-p2-q3',
            type: 'mcq',
            prompt: 'Why does a moonlit garden appear in shades of grey?',
            options: [
              'Because moonlight contains no colours of its own',
              'Because the cones are damaged by prolonged darkness',
              'Because in dim light we rely on rods, which cannot distinguish colours',
              'Because the brain switches off colour vision to save energy',
            ],
            correctIndex: 2,
            explanation:
              'Paragraph B explains that rods "are extraordinarily sensitive and allow us to see in dim light, but they cannot distinguish colours; this is why a moonlit garden appears in shades of grey." Option C matches.',
          },
          {
            id: 'rd-020-p2-q4',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The light-sensitive tissue at the back of the eye that contains the receptor cells is called the _______.',
            acceptableAnswers: ['retina'],
            explanation:
              'Paragraph B describes "a thin sheet of light-sensitive tissue called the retina" in which the receptor cells are embedded. The required word is "retina".',
          },
          {
            id: 'rd-020-p2-q5',
            type: 'mcq',
            prompt: 'How, according to paragraph C, does the brain identify a particular colour?',
            options: [
              'By reading the signal from whichever single cone responds most strongly',
              'By comparing the ratio of the outputs of all three cone types',
              'By counting the total number of photons striking the retina',
              'By combining the signals from the rods and the cones',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph C says "A colour is identified only by comparing the outputs of all three cone types at once. The brain reads the ratio between them," and that colour "is computed from differences, not detected directly." Option B matches; option A is explicitly ruled out.',
          },
          {
            id: 'rd-020-p2-q6',
            type: 'tfng',
            prompt:
              'People with the common inherited form of colour blindness see the world in grey.',
            answer: 'false',
            explanation:
              'Paragraph D states that such people "do not see in grey; they see a smaller range of distinct hues." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-020-p2-q7',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: A small number of women may have four functioning cone types rather than three, and are sometimes called _______.',
            acceptableAnswers: ['tetrachromats'],
            explanation:
              'Paragraph E refers to "such individuals, sometimes called tetrachromats," who could in principle distinguish extra colours. The required word is "tetrachromats".',
          },
          {
            id: 'rd-020-p2-q8',
            type: 'tfng',
            prompt:
              'Scientists have found it straightforward to prove in the laboratory that tetrachromats can see extra colours.',
            answer: 'false',
            explanation:
              'Paragraph E says "Demonstrating this reliably in the laboratory has proved difficult," partly because vocabulary and test screens are built for ordinary three-cone vision. This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-020-p2-q9',
            type: 'tfng',
            prompt: 'More men than women are born as tetrachromats with four cone types.',
            answer: 'not-given',
            explanation:
              'Paragraph E says only that "a small number of women" are thought to be tetrachromats; the passage never states whether tetrachromacy occurs in men at all, let alone compares its frequency between the sexes. There is no information to support or contradict the statement, so it is Not Given.',
          },
        ],
      },
      // ───────────────────────────── PASSAGE 3 ─────────────────────────────
      {
        id: 'rd-academic-020-p3',
        title: 'The Long Reach of the Telescope',
        body: `The telescope is one of those inventions whose origin is oddly hard to pin to a single mind. The earliest firm record dates from the autumn of 1608, when a spectacle-maker in the Dutch Republic, Hans Lippershey, applied to the authorities for a patent on a device for seeing distant things as though they were near. The patent was refused, partly because officials judged that the idea was already too widely known to belong to any one man; rival craftsmen were said to be making similar instruments at much the same time. What is certain is that the basic arrangement - a convex lens at the front and a concave lens at the eye - spread with remarkable speed across Europe within months, carried by word of mouth and by the brisk trade in spectacle lenses.

News of the Dutch instrument reached Italy the following year, and there it fell into the hands of a man who would transform it. Galileo Galilei did not invent the telescope, but on hearing a description he quickly worked out the principle and ground his own lenses, steadily improving the magnification until his instruments far outperformed the toys being sold in the markets. More importantly, he turned the device away from earthly views and pointed it at the night sky. What he saw overturned centuries of assumption: mountains and craters on a Moon that philosophers had held to be a perfect smooth sphere, four bright points circling the planet Jupiter like a miniature system, and countless faint stars invisible to the naked eye. The heavens, it appeared, were neither perfect nor unchanging, and the Earth was not obviously the centre around which all things turned.

Galileo's design, for all its fame, had real drawbacks. Its narrow field of view made the sky seem glimpsed through a straw, and its lenses smeared bright objects with troublesome fringes of false colour. A solution to the second problem came decades later from a different arrangement. Instead of a second convex lens, a curved mirror could be used to gather and focus the light, and because a mirror reflects all colours in exactly the same way it produces no colour fringing at all. Isaac Newton built the first working reflecting telescope of this kind in 1668, a compact instrument that folded the light's path and avoided the colour defects of the lens. The reflecting design would eventually dominate the largest observatories, since a mirror, supported from behind, can be made far wider than a lens, which can only be held at its rim and sags under its own weight beyond a certain size.

For three centuries the contest between lenses and mirrors drove the science forward, but every telescope on the ground laboured under a handicap that no amount of polishing could remove. The atmosphere through which starlight must pass is never perfectly still; layers of air at different temperatures shift and ripple, bending the light slightly this way and that. It is this constant churning, not any twinkling of the stars themselves, that makes a star appear to shimmer to the naked eye, and through a powerful telescope it blurs fine detail into a trembling smear. Astronomers learned to build their observatories on high, dry mountain peaks to climb above the thickest and most turbulent air, but they could never escape it entirely.

The obvious if costly answer was to leave the atmosphere behind altogether. A telescope placed in orbit looks out at a sky that is perfectly steady and unimaginably dark, free of both the blurring of the air and the glow of city lights. The most celebrated of these orbiting observatories returned images of such clarity that they reshaped public understanding of the universe, peering at galaxies so distant that their light had been travelling for most of the age of the cosmos. Because looking far into space is also looking far back in time, such instruments are in effect machines for studying the past, capturing light that set out long before the Earth itself existed.

Telescopes have also long since outgrown the part of light that human eyes can see. Visible light is only a sliver of a vast spectrum, and the sky glows in radiation our eyes cannot register - radio waves, infrared, ultraviolet, X-rays and more. Instruments tuned to these invisible bands have revealed objects and events that no ordinary telescope could show: the cold clouds where stars are born, the violent jets flung out by black holes, the faint afterglow left over from the birth of the universe. Each new window on the spectrum has brought surprises, a reminder that for four centuries the telescope has done more than magnify the visible. It has repeatedly revealed that most of what is out there had simply been beyond our senses all along.`,
        questions: [
          // ── Matching Features - statements to scientists (5 items) = 5 marks ──
          {
            id: 'rd-020-p3-q1',
            type: 'matching',
            variant: 'features',
            prompt:
              'Look at the following statements and the list of people below. Match each statement to the person it relates to in the passage. Write the correct letter, A, B or C. NB You may use any letter more than once.',
            options: [
              { key: 'A', label: 'Hans Lippershey' },
              { key: 'B', label: 'Galileo Galilei' },
              { key: 'C', label: 'Isaac Newton' },
            ],
            items: [
              {
                id: 'p3-f-1',
                text: 'used a curved mirror rather than a second lens to focus the light.',
                answer: 'C',
              },
              {
                id: 'p3-f-2',
                text: 'applied for a patent that the authorities decided to refuse.',
                answer: 'A',
              },
              {
                id: 'p3-f-3',
                text: 'discovered four bright points circling the planet Jupiter.',
                answer: 'B',
              },
              {
                id: 'p3-f-4',
                text: 'built the first working telescope of the reflecting type.',
                answer: 'C',
              },
              {
                id: 'p3-f-5',
                text: 'pointed the new instrument at the sky and saw craters on the Moon.',
                answer: 'B',
              },
            ],
            explanation:
              'Item 1 → C (Newton): a "curved mirror could be used to gather and focus the light," and Newton built such an instrument. Item 2 → A (Lippershey): he "applied to the authorities for a patent" which "was refused." Item 3 → B (Galileo): he saw "four bright points circling the planet Jupiter." Item 4 → C (Newton): he "built the first working reflecting telescope of this kind in 1668." Item 5 → B (Galileo): he pointed the device at the sky and saw "mountains and craters on a Moon."',
          },
          {
            id: 'rd-020-p3-q2',
            type: 'tfng',
            prompt: 'Hans Lippershey was granted the patent he applied for in 1608.',
            answer: 'false',
            explanation:
              'Paragraph A states that "The patent was refused, partly because officials judged that the idea was already too widely known." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-020-p3-q3',
            type: 'tfng',
            prompt:
              'Galileo sold his improved telescopes for a higher price than the instruments available in the markets.',
            answer: 'not-given',
            explanation:
              'Paragraph B says Galileo\'s instruments "far outperformed the toys being sold in the markets," but the passage says nothing about whether he sold his telescopes or at what price. There is no information to confirm or contradict the statement, so it is Not Given.',
          },
          {
            id: 'rd-020-p3-q4',
            type: 'mcq',
            prompt:
              'What did Galileo’s observations suggest about the heavens, according to paragraph B?',
            options: [
              'That the heavens were perfect, smooth and unchanging',
              'That the heavens were neither perfect nor unchanging',
              'That the Earth was clearly the centre of all motion',
              'That no stars existed beyond those visible to the naked eye',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph B concludes that "The heavens, it appeared, were neither perfect nor unchanging, and the Earth was not obviously the centre around which all things turned." Option B matches and directly contradicts options A and C.',
          },
          {
            id: 'rd-020-p3-q5',
            type: 'mcq',
            prompt:
              'According to paragraph C, why does a reflecting telescope using a mirror produce no false colour fringing?',
            options: [
              'Because a mirror gathers far less light than a lens',
              'Because a mirror reflects all colours in exactly the same way',
              'Because the mirror is supported from behind rather than at its rim',
              'Because the design folds the path of the light into a smaller space',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph C states that "because a mirror reflects all colours in exactly the same way it produces no colour fringing at all." Option B matches. The support-from-behind point (option C) explains why mirrors can be made larger, not why there is no fringing.',
          },
          {
            id: 'rd-020-p3-q6',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Beyond a certain size a lens, held only at its rim, _______ under its own weight, which is why large observatories favour mirrors.',
            acceptableAnswers: ['sags'],
            explanation:
              'Paragraph C explains that a lens "can only be held at its rim and sags under its own weight beyond a certain size." The required word is "sags".',
          },
          {
            id: 'rd-020-p3-q7',
            type: 'tfng',
            prompt:
              'The passage states that the twinkling of stars is caused by the movement of the stars themselves.',
            answer: 'false',
            explanation:
              'Paragraph D says it is the churning of the atmosphere, "not any twinkling of the stars themselves, that makes a star appear to shimmer." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-020-p3-q8',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: To rise above the most turbulent air, astronomers built their observatories on high, dry mountain _______.',
            acceptableAnswers: ['peaks'],
            explanation:
              'Paragraph D states that astronomers "learned to build their observatories on high, dry mountain peaks to climb above the thickest and most turbulent air." The required word is "peaks".',
          },
          {
            id: 'rd-020-p3-q9',
            type: 'mcq',
            prompt:
              'Why does the passage describe orbiting telescopes as "machines for studying the past"?',
            options: [
              'Because they were among the first telescopes ever built',
              'Because looking far into space means seeing light that left its source long ago',
              'Because they can only observe objects that no longer exist',
              'Because they are older and slower than telescopes on the ground',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph E says "looking far into space is also looking far back in time," capturing light "that set out long before the Earth itself existed." Option B matches this reasoning.',
          },
          {
            id: 'rd-020-p3-q10',
            type: 'tfng',
            prompt:
              'Telescopes tuned to invisible bands of the spectrum have revealed objects that ordinary telescopes could not show.',
            answer: 'true',
            explanation:
              'Paragraph F says instruments tuned to invisible bands "have revealed objects and events that no ordinary telescope could show," such as star-forming clouds and jets from black holes. This matches the statement, so it is True.',
          },
        ],
      },
    ],
  },
]
