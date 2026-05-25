// ─── IELTS Academic Reading — practice item bank (Set 14) ──────────────────
// ORIGINAL content written for The English Hub. These passages and questions are
// invented purely to practise the Academic Reading question formats (Matching
// Headings / Information / Sentence Endings, MCQ, True/False/Not Given, and
// sentence/summary completion). They are NOT reproductions of any official IELTS
// past paper, and no official affiliation is implied. Academic track. Topic
// domains: animal behaviour and navigation / materials and economic history /
// the economics of repair, reuse and second-hand markets.
//
// One complete, carefully-checked test: 3 passages, 40 marks. Every answer is
// verifiable from the passage text and is justified in the explanation. Matching
// items each score one mark, mirroring the real exam.
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const READING_SET_14: ReadingTest[] = [
  {
    id: 'rd-academic-014',
    title: 'Academic Reading — Practice Test 14',
    track: 'academic',
    estimatedMinutes: 60,
    passages: [
      {
        id: 'rd-academic-014-p1',
        title: 'The Songs and Maps of Birds',
        body: `A. To a person waking at dawn, the chorus of birdsong outside the window can sound like a single joyful noise. To the birds themselves it is anything but. Each species sings in its own pattern of notes, and within a species each male advertises his presence with a performance that other birds read as precisely as we read a signature. Song is not, for most birds, an idle pleasure. It is work, and it carries information about who is singing, where he is, and how fit he is to hold a territory or attract a mate.

B. The first surprise for many people is that birds are not born knowing their song. In a number of well-studied species, a young male must hear an adult of his own kind during a sensitive period early in life, and then practise for weeks, gradually shaping a rambling, formless warble into the crisp song of his species. A bird raised in silence produces only a poor, broken version, and one raised among the wrong species may pick up the wrong tune entirely. In this respect the learning of song resembles the way a human infant acquires speech: by listening, imitating and rehearsing, long before the result is any use.

C. Why sing at dawn in particular? Several explanations have been offered, and they need not exclude one another. The cool, still air of early morning carries sound farther than the warmer, more turbulent air of midday, so a song broadcast at first light travels a greater distance for the same effort. The dim light also makes the hour a poor one for hunting insects or watching for predators, so the time is, in a sense, spare. A male who sings vigorously at dawn may also be signalling his strength: surviving the cold night with enough energy to perform is itself a kind of advertisement.

D. Song, however, is only one of the puzzles that birds present. The other, still more remarkable, is how they find their way. Many species migrate thousands of kilometres between their breeding and wintering grounds, often returning year after year to the very same hedge or pond. A young bird may make this journey alone, without any older companion to follow, which means the route cannot simply be copied. Some part of the knowledge appears to be inherited, written into the bird before it has ever travelled.

E. To navigate, birds draw on several different cues, and the evidence suggests they switch between them as conditions allow. By day, the sun provides a compass, though to use it as a reliable guide a bird must correct for the way the sun moves across the sky, which in turn requires an accurate internal clock. By night, many migrants steer by the stars, and experiments in planetariums have shown that birds raised under an artificial sky will orient themselves by the patterns of rotation they learned there rather than by any single star.

F. Perhaps the strangest of these abilities is the use of the Earth's magnetic field. The planet behaves as though a vast bar magnet lay within it, and the invisible lines of force that result vary in direction and steepness from the equator to the poles. A number of birds can sense this field and read from it both a direction and, it seems, a rough indication of latitude. Exactly how they do so is still debated; one leading idea points to specialised cells containing crystals of iron, while another, stranger proposal links the sense to chemical reactions in the eye that are influenced by magnetism, so that the bird may in some fashion see the field.

G. None of these systems is used in isolation. A migrating bird seems to weigh the sun, the stars and the magnetic field together, trusting whichever is most reliable and recalibrating one against another when they disagree. When clouds hide the sky, the magnetic sense can take over; when the magnetic information is confusing, the celestial cues can correct it. It is this overlapping of methods, rather than any single miraculous organ, that allows so small a creature to cross continents and arrive, against all the odds, at a destination it may never have seen.`,
        questions: [
          {
            id: 'rd-014-p1-q1',
            type: 'matching',
            variant: 'headings',
            prompt:
              'The passage has seven paragraphs, A–G. Choose the most suitable heading for paragraphs B, C, E and F from the list of headings below. There are more headings than paragraphs, so you will not use them all. Write the correct number for each paragraph.',
            options: [
              { key: 'i', label: 'A direction sensed from within the Earth' },
              { key: 'ii', label: 'Why the early morning suits the singer' },
              { key: 'iii', label: 'A skill that must be learned, not inherited' },
              { key: 'iv', label: 'Reading the sun and the stars' },
              { key: 'v', label: 'How song first evolved in reptiles' },
              { key: 'vi', label: 'Combining every clue at once' },
              { key: 'vii', label: 'The dangers faced on a long migration' },
            ],
            items: [
              {
                id: 'rd-014-p1-q1-b',
                text: 'Paragraph B ("The first surprise for many people…")',
                answer: 'iii',
              },
              {
                id: 'rd-014-p1-q1-c',
                text: 'Paragraph C ("Why sing at dawn in particular?…")',
                answer: 'ii',
              },
              {
                id: 'rd-014-p1-q1-e',
                text: 'Paragraph E ("To navigate, birds draw on several different cues…")',
                answer: 'iv',
              },
              {
                id: 'rd-014-p1-q1-f',
                text: 'Paragraph F ("Perhaps the strangest of these abilities…")',
                answer: 'i',
              },
            ],
            explanation:
              'B explains that song is learned by listening and rehearsing rather than known at birth → iii. C asks why birds sing at dawn and gives reasons tied to the early morning → ii. E describes navigating by the sun (a compass) and the stars → iv. F is about sensing the Earth’s magnetic field as a direction → i. Headings v, vi and vii are distractors (vi fits G, not the four paragraphs asked about).',
          },
          {
            id: 'rd-014-p1-q5',
            type: 'tfng',
            prompt: 'Most birds are born already knowing the full song of their species.',
            answer: 'false',
            explanation:
              'Paragraph B states that "birds are not born knowing their song" and that a young male must hear an adult and then practise for weeks. This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-014-p1-q6',
            type: 'tfng',
            prompt:
              'A bird raised without hearing any adult of its own species sings only a poor, incomplete song.',
            answer: 'true',
            explanation:
              'Paragraph B says "A bird raised in silence produces only a poor, broken version." This matches the statement, so it is True.',
          },
          {
            id: 'rd-014-p1-q7',
            type: 'tfng',
            prompt:
              'The writer states that learning birdsong is more difficult than a human child learning to speak.',
            answer: 'not-given',
            explanation:
              'Paragraph B compares song learning to a human infant acquiring speech "by listening, imitating and rehearsing," but it never claims that one is more difficult than the other. There is no information about relative difficulty, so the answer is Not Given.',
          },
          {
            id: 'rd-014-p1-q8',
            type: 'tfng',
            prompt: 'Young birds always migrate in the company of an older, experienced bird.',
            answer: 'false',
            explanation:
              'Paragraph D states that "A young bird may make this journey alone, without any older companion to follow." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-014-p1-q9',
            type: 'mcq',
            prompt:
              'According to paragraph C, why does sound carry farther at dawn than at midday?',
            options: [
              'Because birds sing more loudly in the early morning',
              'Because the cool, still morning air carries sound farther than warmer, more turbulent air',
              'Because there are fewer other animals making noise at dawn',
              'Because predators are asleep and do not absorb the sound',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph C states that "The cool, still air of early morning carries sound farther than the warmer, more turbulent air of midday." Option B matches this directly.',
          },
          {
            id: 'rd-014-p1-q10',
            type: 'mcq',
            prompt:
              'Which statement best reflects the writer’s overall conclusion about bird navigation in paragraph G?',
            options: [
              'Birds depend chiefly on one extraordinary organ to find their way.',
              'Birds combine several cues and switch between them depending on which is most reliable.',
              'Birds can only navigate successfully when the sky is completely clear.',
              'Birds learn their entire route by following the magnetic field alone.',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph G says a migrating bird "seems to weigh the sun, the stars and the magnetic field together, trusting whichever is most reliable," and that it is "this overlapping of methods, rather than any single miraculous organ," that works. Option B is correct.',
          },
          {
            id: 'rd-014-p1-q11',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: To use the sun as a reliable guide, a bird must correct for its movement across the sky, which requires an accurate internal _______.',
            acceptableAnswers: ['clock'],
            explanation:
              'Paragraph E states that using the sun "requires an accurate internal clock." The required word is "clock".',
          },
          {
            id: 'rd-014-p1-q12',
            type: 'gap',
            prompt:
              'Complete the summary with ONE word from the passage: One explanation for the magnetic sense points to specialised cells that contain crystals of _______.',
            acceptableAnswers: ['iron'],
            explanation:
              'Paragraph F states that "one leading idea points to specialised cells containing crystals of iron." The required word is "iron".',
          },
          {
            id: 'rd-014-p1-q13',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: A second proposal links the magnetic sense to chemical reactions in the _______ that are influenced by magnetism.',
            acceptableAnswers: ['eye'],
            explanation:
              'Paragraph F describes "another, stranger proposal" that "links the sense to chemical reactions in the eye." The required word is "eye".',
          },
        ],
      },
      {
        id: 'rd-academic-014-p2',
        title: 'The Story of Natural Rubber',
        body: `Long before the substance had a name in any European language, the peoples of Central and South America were tapping a milky fluid from certain forest trees and turning it to use. They smoked it over fires to harden it, shaped it into balls for games, and waterproofed cloth and containers with it. The fluid, which they collected by cutting the bark of the tree, was a thick white liquid called latex, and the trees that yielded the best of it grew wild in the great river basin of the Amazon.

When the material first reached Europe, it was regarded as little more than a curiosity. An early and lasting use was the rubbing out of pencil marks, and it is from this humble task that the English word "rubber" descends. For practical purposes, however, the substance was deeply frustrating. In the heat of summer it turned soft and sticky and gave off an unpleasant smell; in the cold of winter it grew hard and brittle and cracked. A raincoat made of it might be useful in spring and useless by August. For decades, inventors searched for a way to tame these maddening swings of temperature.

The breakthrough came, as such things often do, partly by accident. An American experimenter who had spent years and a small fortune mixing rubber with every additive he could think of happened to bring a sample treated with sulphur into contact with a hot stove. Instead of melting into a sticky mess, the rubber charred slightly but remained firm and elastic. Heating rubber with sulphur, he realised, transformed it: the treated material stayed springy in the heat and supple in the cold, and it sprang back into shape after being stretched. The process, later named vulcanisation after the Roman god of fire, turned an unreliable curiosity into one of the most useful materials of the industrial age.

Demand now soared, and for a time it could be met only from the wild trees of the Amazon. The boom that followed made fortunes for a small number of merchants and brought misery to many of the labourers, often drawn from indigenous communities, who were forced or tricked into gathering latex deep in the forest under brutal conditions. The trees themselves grew far apart, scattered through the rainforest rather than standing in convenient groves, so that a tapper might walk for hours between them. Yet so long as the Amazon held a near-monopoly, the region prospered, and grand opera houses and mansions rose in towns that owed everything to the milky sap.

The monopoly did not last. Seeds of the rubber tree were taken out of the Amazon and germinated in a botanical garden in London, and the young plants were then shipped to colonies in South and South-East Asia. There, planted close together in orderly rows on large estates, and free for a time of the pests and diseases that attacked them in their native forest, the trees flourished. A plantation could be tapped far more cheaply and efficiently than the scattered wild trees of the Amazon, and within a few decades the centre of world production had shifted decisively to the other side of the planet. The Amazon boom collapsed almost as quickly as it had begun, and the opera houses fell silent.

The twentieth century brought a new threat to natural rubber: competition from the laboratory. During wartime, when supplies from the plantations of Asia were cut off, chemists in several countries raced to manufacture synthetic substitutes from oil. These artificial rubbers improved rapidly, and today they account for a large share of the world's supply. For many uses the synthetic product is perfectly adequate and cheaper to make. Yet natural rubber has never been wholly replaced. Its particular combination of strength, springiness and resistance to heat remains difficult to match, and certain demanding products, including the great tyres of aircraft and heavy vehicles, still rely on it.

This continuing dependence carries its own risks. The plantation rubber of Asia is overwhelmingly drawn from trees grown from a narrow stock of original seed, which makes the crop dangerously uniform: a disease able to attack one tree can, in principle, attack almost all of them. The very disease that helped drive cultivation out of the Amazon has so far been kept out of Asia largely by distance and vigilance, but plant scientists watch the situation with unease. A material that has been woven through human history for centuries, from ancient ball games to modern aviation, thus rests on a surprisingly slender botanical foundation.`,
        questions: [
          {
            id: 'rd-014-p2-q14',
            type: 'matching',
            variant: 'information',
            prompt:
              'The passage has seven paragraphs. Which paragraph contains each of the following pieces of information? Choose the correct option (A–G) for each statement. NB You may use any letter more than once.',
            options: [
              { key: 'A', label: 'Paragraph 1 (peoples of the Americas tapping the trees)' },
              { key: 'B', label: 'Paragraph 2 (the material reaching Europe)' },
              { key: 'C', label: 'Paragraph 3 (the breakthrough with sulphur)' },
              { key: 'D', label: 'Paragraph 4 (the Amazon boom)' },
              { key: 'E', label: 'Paragraph 5 (the shift to Asian plantations)' },
              { key: 'F', label: 'Paragraph 6 (competition from synthetics)' },
              { key: 'G', label: 'Paragraph 7 (the risk of uniformity)' },
            ],
            items: [
              {
                id: 'rd-014-p2-q14-1',
                text: 'an explanation of where the English name of the material comes from',
                answer: 'B',
              },
              {
                id: 'rd-014-p2-q14-2',
                text: 'a description of the harsh treatment of the people who collected latex',
                answer: 'D',
              },
              {
                id: 'rd-014-p2-q14-3',
                text: 'a reference to a discovery that occurred by chance',
                answer: 'C',
              },
              {
                id: 'rd-014-p2-q14-4',
                text: 'the reason the modern crop is considered dangerously uniform',
                answer: 'G',
              },
              {
                id: 'rd-014-p2-q14-5',
                text: 'how rubber seeds were moved from the Amazon to other parts of the world',
                answer: 'E',
              },
            ],
            explanation:
              'Statement 1 → paragraph 2 (B), which explains "rubber" comes from rubbing out pencil marks. Statement 2 → paragraph 4 (D), describing labourers forced or tricked into gathering latex under brutal conditions. Statement 3 → paragraph 3 (C), where the breakthrough "came... partly by accident." Statement 4 → paragraph 7 (G), which says the crop is drawn from a narrow stock of seed, making it dangerously uniform. Statement 5 → paragraph 5 (E), describing seeds taken to London and shipped to Asian colonies.',
          },
          {
            id: 'rd-014-p2-q19',
            type: 'tfng',
            prompt: 'In its untreated state, rubber became hard and brittle in cold weather.',
            answer: 'true',
            explanation:
              'The second paragraph states that "in the cold of winter it grew hard and brittle and cracked." This matches the statement, so it is True.',
          },
          {
            id: 'rd-014-p2-q20',
            type: 'tfng',
            prompt:
              'The discovery that heating rubber with sulphur improved it happened entirely as a result of careful, planned experiments.',
            answer: 'false',
            explanation:
              'The third paragraph says the breakthrough "came... partly by accident," when a treated sample "happened to" touch a hot stove. "Entirely... planned" contradicts this, so it is False.',
          },
          {
            id: 'rd-014-p2-q21',
            type: 'tfng',
            prompt:
              'The first manager of the London botanical garden was personally rewarded for sending the seeds abroad.',
            answer: 'not-given',
            explanation:
              'The fifth paragraph mentions that seeds were germinated in a botanical garden in London and shipped to Asia, but it says nothing about any individual being rewarded. There is no information about this, so the answer is Not Given.',
          },
          {
            id: 'rd-014-p2-q22',
            type: 'mcq',
            prompt: 'What does the passage say was an early use of rubber in Europe?',
            options: [
              'Making waterproof raincoats',
              'Rubbing out pencil marks',
              'Manufacturing tyres for vehicles',
              'Sealing the hulls of ships',
            ],
            correctIndex: 1,
            explanation:
              'The second paragraph says "An early and lasting use was the rubbing out of pencil marks," and that the word "rubber" descends from this. Option B is correct.',
          },
          {
            id: 'rd-014-p2-q23',
            type: 'mcq',
            prompt: 'Why did production shift from the Amazon to plantations in Asia?',
            options: [
              'The Amazon trees stopped producing latex altogether.',
              'Asian plantations grew the trees close together and could be tapped more cheaply and efficiently.',
              'European governments banned the export of Amazon rubber.',
              'The synthetic rubber industry was based entirely in Asia.',
            ],
            correctIndex: 1,
            explanation:
              'The fifth paragraph explains that on Asian estates the trees were "planted close together in orderly rows" and that "A plantation could be tapped far more cheaply and efficiently than the scattered wild trees of the Amazon." Option B is correct.',
          },
          {
            id: 'rd-014-p2-q24',
            type: 'mcq',
            prompt:
              'According to the final two paragraphs, why has natural rubber not been entirely replaced by synthetic rubber?',
            options: [
              'Synthetic rubber is far more expensive to manufacture.',
              'Natural rubber is the only material that can be made from oil.',
              'Natural rubber’s combination of strength, springiness and heat resistance is hard to match for some demanding products.',
              'Governments require aircraft tyres to be made from synthetic rubber.',
            ],
            correctIndex: 2,
            explanation:
              'The sixth paragraph states that natural rubber’s "particular combination of strength, springiness and resistance to heat remains difficult to match," and that demanding products such as aircraft tyres "still rely on it." Option C is correct.',
          },
          {
            id: 'rd-014-p2-q25',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The milky white liquid that the trees yielded, collected by cutting the bark, is called _______.',
            acceptableAnswers: ['latex'],
            explanation:
              'The first paragraph says "a thick white liquid called latex." The required word is "latex".',
          },
          {
            id: 'rd-014-p2-q26',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The process of heating rubber with sulphur was later named _______, after the Roman god of fire.',
            acceptableAnswers: ['vulcanisation', 'vulcanization'],
            explanation:
              'The third paragraph states that "The process, later named vulcanisation after the Roman god of fire," transformed the material. The required word is "vulcanisation".',
          },
        ],
      },
      {
        id: 'rd-academic-014-p3',
        title: 'The Economics of Repair and Reuse',
        body: `For much of the twentieth century, the direction of travel in wealthy economies was clear: goods were made to be bought, used and thrown away. A broken appliance was replaced rather than mended, and the second-hand shop was widely seen as a last resort for those who could not afford new. In the past two decades, however, the trade in used goods and the business of repair have grown into a serious part of the economy, driven by a combination of thrift, environmental concern and the rise of online marketplaces that let strangers buy and sell with ease.

The economic logic of reuse is at heart very simple. A manufactured object embodies not only the materials it is made from but the energy and labour that went into making it. When the object is discarded while it still works, all of that embodied value is thrown away with it. Extending the life of the object — by passing it to a second owner, or by repairing it rather than replacing it — spreads that original cost over a longer period of use, and avoids the further cost of making a replacement. From the point of view of society as a whole, a well-functioning second-hand market is therefore a way of getting more service out of the same quantity of resources.

For the individual, the appeal is more immediate. A used item is almost always cheaper than its new equivalent, sometimes dramatically so, and for many households the second-hand market is what makes a particular good affordable at all. There is also a less obvious benefit. A buyer who knows that an item can later be resold treats part of its price not as money spent but as money lent: the object can be sold on when it is no longer wanted, recovering some of the outlay. Economists note that goods which hold their value well, and which are easy to resell, effectively cost their owners less than the sticker price suggests, because a portion of that price is recovered at the end.

Repair follows a similar logic but faces stiffer obstacles. In principle, mending a device is almost always cheaper in resources than building a new one. In practice, several forces push the other way. The cost of skilled labour in wealthy countries is high, while the cost of mass-producing goods in large factories has fallen, so that the bill for an hour of a technician's time may exceed the price of a brand-new replacement. Faced with such arithmetic, even a thrifty customer will often choose to replace rather than repair, and the repair trade struggles to compete.

Manufacturers have not always been neutral bystanders in this calculation. Some have designed their products in ways that make independent repair difficult: sealing cases shut, using unusual screws, soldering components in place so that a single failure requires the replacement of a whole unit, or restricting the supply of spare parts and repair manuals to their own approved workshops. Critics argue that such practices, whether deliberate or merely convenient, shorten the working life of goods and push customers towards buying new. The charge is hard to prove in any single case, but the pattern has been widespread enough to attract the attention of lawmakers.

In response, a movement has grown up under the banner of the "right to repair." Its supporters campaign for rules that would oblige manufacturers to make spare parts, tools and information available to independent repairers and to ordinary owners, and to design products that can be opened and mended. Several governments have begun to legislate in this direction. Supporters present the cause as a matter of both thrift and environmental responsibility; manufacturers sometimes reply that opening their products to untrained repairers raises concerns about safety and quality. The debate is far from settled, but the very fact that it is taking place marks a shift in expectations.

The rise of the second-hand and repair economy is not without complications of its own. A brisk resale market can, paradoxically, encourage people to buy more, on the comforting assumption that they can always sell later; the environmental gain from reuse may then be partly cancelled by extra consumption. Repair, too, is not always the greener choice: keeping an old, inefficient machine running can, in some cases, consume more energy over its life than replacing it with a modern one. The lesson is not that newer is always better, nor that older is always greener, but that the sensible course depends on the particular object and how it is used. What has changed is that repair and reuse are once again being taken seriously, after a long period in which the new and the disposable held almost undisputed sway.`,
        questions: [
          {
            id: 'rd-014-p3-q27',
            type: 'tfng',
            prompt:
              'For much of the twentieth century, repairing a broken appliance was generally preferred to replacing it.',
            answer: 'false',
            explanation:
              'The first paragraph states that "A broken appliance was replaced rather than mended." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-014-p3-q28',
            type: 'tfng',
            prompt:
              'The recent growth of the trade in used goods has been helped by online marketplaces.',
            answer: 'true',
            explanation:
              'The first paragraph attributes the growth partly to "the rise of online marketplaces that let strangers buy and sell with ease." This matches the statement, so it is True.',
          },
          {
            id: 'rd-014-p3-q29',
            type: 'tfng',
            prompt:
              'The passage claims that repairing a device always uses fewer resources than replacing it in every real-world situation.',
            answer: 'false',
            explanation:
              'The final paragraph notes that "keeping an old, inefficient machine running can, in some cases, consume more energy over its life than replacing it." So repair is not always the lower-resource choice, and the statement is False.',
          },
          {
            id: 'rd-014-p3-q30',
            type: 'tfng',
            prompt: 'Right-to-repair laws have now been adopted in every wealthy country.',
            answer: 'not-given',
            explanation:
              'The sixth paragraph says only that "Several governments have begun to legislate in this direction." It does not say that every wealthy country has adopted such laws, so the answer is Not Given.',
          },
          {
            id: 'rd-014-p3-q31',
            type: 'tfng',
            prompt:
              'The writer believes that interest in repair and reuse is being taken seriously again after a long period of favouring disposable goods.',
            answer: 'true',
            explanation:
              'The final paragraph concludes that "repair and reuse are once again being taken seriously, after a long period in which the new and the disposable held almost undisputed sway." This matches the statement, so it is True.',
          },
          {
            id: 'rd-014-p3-q32',
            type: 'mcq',
            prompt:
              'What does the passage mean when it says a manufactured object "embodies" energy and labour?',
            options: [
              'The object can produce energy when it is used.',
              'The energy and labour used to make it are, in effect, contained in its value.',
              'The object is heavier than the materials it is made from.',
              'The object was made entirely by hand rather than by machine.',
            ],
            correctIndex: 1,
            explanation:
              'The second paragraph explains that an object "embodies not only the materials it is made from but the energy and labour that went into making it," so that discarding a working object throws that value away. Option B captures this meaning.',
          },
          {
            id: 'rd-014-p3-q33',
            type: 'mcq',
            prompt:
              'Why, according to the third paragraph, may a good that is easy to resell effectively cost its owner less than the sticker price?',
            options: [
              'Because shops give discounts on goods that are popular',
              'Because part of the price can be recovered when the item is sold on',
              'Because such goods are cheaper to manufacture',
              'Because the buyer never intends to use the item',
            ],
            correctIndex: 1,
            explanation:
              'The third paragraph says a buyer treats part of the price "not as money spent but as money lent," because the object "can be sold on... recovering some of the outlay." Option B is correct.',
          },
          {
            id: 'rd-014-p3-q34',
            type: 'mcq',
            prompt: 'Why does the repair trade often struggle to compete in wealthy countries?',
            options: [
              'Because customers cannot find anyone able to carry out repairs',
              'Because the cost of a technician’s time can exceed the price of a new replacement',
              'Because repairing goods is illegal in many places',
              'Because repaired goods cannot be resold afterwards',
            ],
            correctIndex: 1,
            explanation:
              'The fourth paragraph explains that skilled labour is expensive while mass production is cheap, "so that the bill for an hour of a technician’s time may exceed the price of a brand-new replacement." Option B is correct.',
          },
          {
            id: 'rd-014-p3-q35',
            type: 'matching',
            variant: 'endings',
            prompt:
              'Complete each sentence (1–4) with the correct ending (A–G) from the box below, based on the information in the passage. There are more endings than sentences, so you will not use them all.',
            options: [
              {
                key: 'A',
                label: 'spreads the original cost over a longer period of use.',
              },
              {
                key: 'B',
                label: 'make independent repair more difficult.',
              },
              {
                key: 'C',
                label: 'that manufacturers provide spare parts, tools and information.',
              },
              {
                key: 'D',
                label: 'because newer machines are always more efficient.',
              },
              {
                key: 'E',
                label: 'may be partly cancelled out by extra consumption.',
              },
              {
                key: 'F',
                label: 'because the materials they contain are valuable.',
              },
              {
                key: 'G',
                label: 'so that customers can no longer afford new goods.',
              },
            ],
            items: [
              {
                id: 'rd-014-p3-q35-1',
                text: 'Extending the life of an object by reuse or repair',
                answer: 'A',
              },
              {
                id: 'rd-014-p3-q35-2',
                text: 'Some manufacturers have designed their products in ways that',
                answer: 'B',
              },
              {
                id: 'rd-014-p3-q35-3',
                text: 'Supporters of the right-to-repair movement campaign for rules requiring',
                answer: 'C',
              },
              {
                id: 'rd-014-p3-q35-4',
                text: 'The environmental gain from a brisk resale market',
                answer: 'E',
              },
            ],
            explanation:
              'Sentence 1 → A: paragraph 2 says extending an object’s life "spreads that original cost over a longer period of use." Sentence 2 → B: paragraph 5 says some manufacturers designed products "in ways that make independent repair difficult." Sentence 3 → C: paragraph 6 says supporters campaign for rules obliging manufacturers "to make spare parts, tools and information available." Sentence 4 → E: paragraph 7 says the environmental gain "may then be partly cancelled by extra consumption." Endings D, F and G are distractors not supported by the text.',
          },
          {
            id: 'rd-014-p3-q39',
            type: 'gap',
            prompt:
              'Complete the sentence with THREE words from the passage: The movement campaigning for rules that oblige manufacturers to support independent repairers is known as the _______ movement.',
            acceptableAnswers: ['right to repair', 'right-to-repair'],
            explanation:
              'The sixth paragraph states that "a movement has grown up under the banner of the “right to repair.”" The required phrase is "right to repair".',
          },
          {
            id: 'rd-014-p3-q40',
            type: 'gap',
            prompt:
              'Complete the summary with ONE word from the passage: Manufacturers sometimes reply that allowing untrained repairers to open their products raises concerns about safety and _______.',
            acceptableAnswers: ['quality'],
            explanation:
              'The sixth paragraph says manufacturers argue that opening products to untrained repairers "raises concerns about safety and quality." The required word is "quality".',
          },
        ],
      },
    ],
  },
]
