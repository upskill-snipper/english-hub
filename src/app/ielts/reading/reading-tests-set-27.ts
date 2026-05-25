// ─── IELTS Academic Reading — practice item bank (Set 27) ──────────────────
// ORIGINAL content written for The English Hub. These passages and questions are
// invented purely to practise the Academic Reading question formats. They are
// NOT reproductions of any official IELTS past paper, and no official
// affiliation is implied. Academic track. Topic domains: the history of
// timekeeping / the science of taste and flavour / how desert plants survive.
//
// This test is MATCHING-RICH. It contains three matching questions across three
// different variants: Matching Headings (Passage 1), Matching Information /
// which-paragraph (Passage 2) and Matching Features — adaptations to plants
// (Passage 3), alongside the usual mix of True/False/Not Given, multiple choice
// and sentence/summary completion.
//
// One complete, carefully-checked test: 3 passages, 40 marks (each matching item
// counts as one mark). Every answer is verifiable from the passage text and is
// justified in the explanation. Marks: P1 = 6 (matching) + 7 = 13; P2 = 5
// (matching) + 8 = 13; P3 = 5 (matching) + 9 = 14. Total = 40.
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const READING_SET_27: ReadingTest[] = [
  {
    id: 'rd-academic-027',
    title: 'Academic Reading — Practice Test 27',
    track: 'academic',
    estimatedMinutes: 60,
    passages: [
      // ───────────────────────────── PASSAGE 1 ─────────────────────────────
      {
        id: 'rd-academic-027-p1',
        title: 'Marking the Hours',
        body: `For most of human history the passing of time was read directly from the sky. The Sun rose and set, the Moon waxed and waned, and the seasons turned, and these great cycles were enough to govern planting, worship and rest. But as soon as people wished to divide the day into smaller, agreed parts, they had to invent devices that would measure time on a human scale. The long search for an accurate clock is one of the quietest yet most consequential threads in the story of technology, and its turning points reshaped navigation, science and daily life alike.

The oldest of these devices simply borrowed the Sun. A sundial casts the shadow of an upright rod, or gnomon, onto a marked surface, and as the Sun moves across the sky the shadow sweeps slowly round, pointing to the hour. Sundials were cheap, silent and surprisingly accurate, and versions of them were used across the ancient world. Yet they had two obvious limitations: they were useless at night or under cloud, and the length of the daylight hours they marked changed with the seasons. A device was needed that would keep running whatever the weather and whatever the time of day.

The answer, found independently in several civilisations, was to measure time by the steady flow of water. A water clock, known to the Greeks as a clepsydra, let water drip at a controlled rate from one vessel into another; the rising or falling level, read against a scale, showed how much time had passed. Such clocks ran in darkness and indoors, a clear advance on the sundial. They were far from perfect, however, for water flows faster when the vessel is full than when it is nearly empty, and it flows more sluggishly in cold weather as it thickens. Keeping a water clock accurate demanded constant attention, and the search for something better went on.

The decisive breakthrough came in medieval Europe with a mechanism of pure ingenuity called the escapement. The principle was to drive a clock with a falling weight, but to prevent the weight from simply plummeting by allowing it to advance only in small, regular steps. A toothed wheel was held back by a swinging arm that released it one tooth at a time, producing the familiar tick and giving the hands their measured progress. The escapement freed clockmakers from the weather altogether and made possible the great mechanical clocks that began to appear in the towers of European towns, striking the hours for everyone within earshot. For the first time, a community could share a single public time.

Even these clocks, though, drifted by many minutes a day, because nothing in them beat at a truly constant rate. The next leap solved exactly that. In the seventeenth century it was realised that a swinging pendulum of a given length takes the same time to complete each swing, regardless of how wide the swing is. By using a pendulum to govern the escapement, clockmakers built timepieces of unprecedented steadiness, accurate to within seconds rather than minutes a day. The pendulum clock dominated precise timekeeping for nearly three hundred years and turned the clock from a rough public signal into a genuine scientific instrument.

One problem, however, defeated the pendulum: the sea. A pendulum depends on gravity and a stable mounting, and the constant pitching of a ship threw it hopelessly off. This mattered enormously, because a sailor who knew the exact time at a fixed reference place could, by comparing it with local noon, work out how far east or west the ship had travelled. The want of a sea-going clock cost countless lives in shipwrecks. The solution, perfected by a self-taught English carpenter named John Harrison in the eighteenth century, was the marine chronometer, a clock driven not by a pendulum but by a tightly coiled spring and balanced so cleverly that it kept good time through storms and changes of temperature alike. With it, the longitude problem that had baffled navigators for generations was at last brought under control.

The modern era of timekeeping abandoned moving weights and springs in favour of vibration. A small sliver of quartz crystal, when an electric current is applied, vibrates at an extremely steady and rapid rate, and counting these vibrations yields a far more reliable beat than any mechanical part. Cheap and tiny, quartz movements soon filled the world's watches and clocks. Yet even quartz is outdone by the atomic clock, which counts the unimaginably regular oscillations within atoms themselves and loses no more than a second over millions of years. Such clocks now define the second itself and silently keep the satellite navigation, communication and computer networks of the modern world in step. The shadow on the dial has come a very long way.`,
        questions: [
          // ── Matching Headings (6 items, 9 options → 3 distractors) = 6 marks ──
          {
            id: 'rd-027-p1-q1',
            type: 'matching',
            variant: 'headings',
            prompt:
              'The passage has seven paragraphs, A–G. Choose the correct heading for paragraphs B–G from the list of headings below. There are more headings than paragraphs, so you will not use them all. Write the correct number (i–ix) for each paragraph.',
            options: [
              { key: 'i', label: 'Borrowing the Sun to tell the hour' },
              { key: 'ii', label: 'A steady beat from a swinging weight' },
              { key: 'iii', label: 'How clocks reshaped religious worship' },
              { key: 'iv', label: 'Measuring time by flowing water' },
              { key: 'v', label: 'A clock that could survive a voyage' },
              { key: 'vi', label: 'The ticking mechanism that beat the weather' },
              { key: 'vii', label: 'Selling watches to the masses' },
              { key: 'viii', label: 'From vibrating crystals to atoms' },
              { key: 'ix', label: 'Why the seasons confused early astronomers' },
            ],
            items: [
              { id: 'p1-h-b', text: 'Paragraph B', answer: 'i' },
              { id: 'p1-h-c', text: 'Paragraph C', answer: 'iv' },
              { id: 'p1-h-d', text: 'Paragraph D', answer: 'vi' },
              { id: 'p1-h-e', text: 'Paragraph E', answer: 'ii' },
              { id: 'p1-h-f', text: 'Paragraph F', answer: 'v' },
              { id: 'p1-h-g', text: 'Paragraph G', answer: 'viii' },
            ],
            explanation:
              'B describes the sundial, which "simply borrowed the Sun" (i). C explains the water clock or clepsydra (iv). D introduces the escapement, the "ticking mechanism" that "freed clockmakers from the weather" (vi). E covers the pendulum, a steady beat from a swinging weight (ii). F is about the marine chronometer that could survive a voyage at sea (v). G moves to quartz crystals and atomic clocks (viii). Headings iii (religious worship), vii (selling watches to the masses) and ix (seasons confusing astronomers) are distractors never developed as paragraph topics.',
          },
          {
            id: 'rd-027-p1-q2',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: A sundial casts the shadow of an upright rod, also called a _______, onto a marked surface.',
            acceptableAnswers: ['gnomon'],
            explanation:
              'Paragraph B states that a sundial "casts the shadow of an upright rod, or gnomon, onto a marked surface." The required word is "gnomon".',
          },
          {
            id: 'rd-027-p1-q3',
            type: 'tfng',
            prompt:
              'Sundials measured daylight hours of a fixed, unchanging length throughout the year.',
            answer: 'false',
            explanation:
              'Paragraph B states that "the length of the daylight hours they marked changed with the seasons." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-027-p1-q4',
            type: 'mcq',
            prompt: 'According to paragraph C, why does a water clock tend to lose accuracy?',
            options: [
              'Because it cannot be used indoors or in darkness',
              'Because water flows faster when the vessel is full than when it is nearly empty',
              'Because the scale used to read the level wears away over time',
              'Because the Sun heats the water and speeds up the flow',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph C says a water clock is imperfect because "water flows faster when the vessel is full than when it is nearly empty, and it flows more sluggishly in cold weather." Option B matches; option A is wrong because the passage praises the water clock for running indoors and in darkness.',
          },
          {
            id: 'rd-027-p1-q5',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: In a mechanical clock, a falling weight was prevented from plummeting by a mechanism called the _______, which released a toothed wheel one tooth at a time.',
            acceptableAnswers: ['escapement'],
            explanation:
              'Paragraph D introduces "a mechanism of pure ingenuity called the escapement" that releases a toothed wheel "one tooth at a time." The required word is "escapement".',
          },
          {
            id: 'rd-027-p1-q6',
            type: 'mcq',
            prompt: 'Why was a pendulum used to govern a clock, according to paragraph E?',
            options: [
              'Because a pendulum could keep working aboard a moving ship',
              'Because a pendulum of a given length takes the same time to complete each swing',
              'Because a pendulum was cheaper to manufacture than a falling weight',
              'Because a pendulum could be heard striking the hours across a town',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph E states it was realised that "a swinging pendulum of a given length takes the same time to complete each swing, regardless of how wide the swing is." Option B matches. Option A is contradicted by paragraph F, where the sea defeats the pendulum.',
          },
          {
            id: 'rd-027-p1-q7',
            type: 'tfng',
            prompt:
              'John Harrison received a large financial reward from the British government for his marine chronometer.',
            answer: 'not-given',
            explanation:
              'Paragraph F credits Harrison with perfecting the marine chronometer, but the passage says nothing about any reward, payment or prize. There is no information to confirm or contradict the statement, so it is Not Given.',
          },
          {
            id: 'rd-027-p1-q8',
            type: 'tfng',
            prompt: 'An atomic clock is more accurate than a quartz clock.',
            answer: 'true',
            explanation:
              'Paragraph G says "even quartz is outdone by the atomic clock," which "loses no more than a second over millions of years." This supports the statement, so it is True.',
          },
        ],
      },
      // ───────────────────────────── PASSAGE 2 ─────────────────────────────
      {
        id: 'rd-academic-027-p2',
        title: 'The Architecture of Flavour',
        body: `Ask most people what they taste when they eat a strawberry and they will describe its sweetness, its slight tartness and, above all, its rich strawberry character. They would be surprised to learn that, strictly speaking, the tongue detects only the first two of these. The strawberry-ness itself is not a taste at all. The everyday word 'taste' rolls together two quite separate senses, and untangling them reveals that the pleasure of eating is built from far more channels than the mouth alone.

The tongue, and the roof of the mouth and throat with it, is studded with thousands of tiny sensory clusters called taste buds. These respond to just five basic qualities. Sweetness signals the presence of sugars and hence of energy. Saltiness reports on sodium and other minerals the body needs. Sourness marks acidity, a useful warning of unripe fruit or spoiled food. Bitterness, often a sign of toxins, triggers caution and even disgust. The fifth and most recently accepted is savouriness, frequently called by its Japanese name umami, the rounded, meaty quality of broths, ripe tomatoes and aged cheeses, which detects certain amino acids that mark protein-rich food. Every taste the tongue can register is some combination of these five.

Five qualities, however, cannot begin to account for the thousands of distinct flavours we recognise, from coffee to cinnamon to roast lamb. The missing ingredient is smell. As food is chewed, volatile molecules drift up from the back of the mouth into the nasal cavity, where a vast array of receptors identifies them with extraordinary precision. This internal route to the nose, quite different from sniffing an aroma through the nostrils, is what supplies almost all of what we loosely call the taste of a food. The proof is familiar to anyone with a heavy cold: when the nose is blocked, meals turn strangely dull, and an onion may be hard to tell from an apple. The tongue is working as well as ever; it is the contribution of smell that has been switched off.

Flavour, then, is not a single sensation but a construction assembled by the brain from several streams at once. Alongside taste and smell it draws on touch, which registers the texture of food, the crispness of a crisp or the smoothness of cream, and on temperature, since the very same dish can seem a different food hot and cold. Even pain has a part to play. The heat of a chilli is not a taste; it is the stimulation of pain and heat receptors by a compound called capsaicin, which fools the nerves into reporting a burn where there is no actual injury. The brain weaves these separate reports into the unified experience we sit down to enjoy, which is why flavour is best described as multisensory.

The senses also lean on one another in ways that can deceive. Colour is a striking example: a drink dyed an unexpected shade is routinely misjudged, and people will confidently name the 'wrong' fruit when the colour and the flavour are made to disagree. Sound matters too, for the crunch of a fresh biscuit makes it taste fresher, and the very weight and shape of a cup or spoon can nudge our judgement of what it holds. None of this is failure on the part of the senses. It reflects the brain's constant effort to combine every available clue into a single, confident verdict about what is entering the body.

Against this shared backdrop, individuals differ more than is often realised. Some people, labelled supertasters, are born with an unusually high density of taste buds and experience certain flavours, particularly bitterness, far more intensely than the rest of us. To a supertaster, vegetables such as broccoli or grapefruit can seem harshly bitter, and strong coffee almost punishing, which may steer their diets for a lifetime. At the opposite extreme, those with comparatively few taste buds register the same foods as mild and may reach more readily for bold seasoning. Such variation is a reminder that no two people sit down to quite the same meal. The dish on the plate may be identical, but the flavour each diner experiences is, in a real sense, their own.`,
        questions: [
          // ── Matching Information / which-paragraph (5 items) = 5 marks ──
          {
            id: 'rd-027-p2-q1',
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
                text: 'a list of the five qualities that the taste buds can detect',
                answer: 'B',
              },
              {
                id: 'p2-i-2',
                text: 'an explanation of why food tastes dull when a person has a cold',
                answer: 'C',
              },
              {
                id: 'p2-i-3',
                text: 'a description of people who are born with an unusually high number of taste buds',
                answer: 'F',
              },
              {
                id: 'p2-i-4',
                text: 'the claim that the everyday word for taste actually covers two separate senses',
                answer: 'A',
              },
              {
                id: 'p2-i-5',
                text: 'an example of how the colour of a drink can affect what flavour people report',
                answer: 'E',
              },
            ],
            explanation:
              'Item 1 → B, which lists sweetness, saltiness, sourness, bitterness and umami. Item 2 → C: when "the nose is blocked, meals turn strangely dull" because smell is switched off. Item 3 → F, describing supertasters with "an unusually high density of taste buds." Item 4 → A: the word "taste" "rolls together two quite separate senses." Item 5 → E: "a drink dyed an unexpected shade is routinely misjudged."',
          },
          {
            id: 'rd-027-p2-q2',
            type: 'tfng',
            prompt:
              'The distinctive strawberry character of a strawberry is detected by the tongue.',
            answer: 'false',
            explanation:
              'Paragraph A states that the tongue detects only sweetness and tartness, and that "the strawberry-ness itself is not a taste at all." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-027-p2-q3',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The tongue and mouth are studded with thousands of tiny sensory clusters called taste _______.',
            acceptableAnswers: ['buds'],
            explanation:
              'Paragraph B refers to "thousands of tiny sensory clusters called taste buds." The required word is "buds".',
          },
          {
            id: 'rd-027-p2-q4',
            type: 'mcq',
            prompt: 'According to paragraph B, what does the savoury taste known as umami detect?',
            options: [
              'Sugars, and therefore a source of energy',
              'Certain amino acids that mark protein-rich food',
              'Acidity, a warning of unripe or spoiled food',
              'Sodium and other minerals the body needs',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph B says umami "detects certain amino acids that mark protein-rich food." Option B matches; the other options describe sweetness, sourness and saltiness respectively.',
          },
          {
            id: 'rd-027-p2-q5',
            type: 'mcq',
            prompt:
              'Why does an onion become hard to tell from an apple when someone has a blocked nose?',
            options: [
              'Because a cold damages the taste buds on the tongue',
              'Because the tongue stops working until the cold has passed',
              'Because the contribution of smell, which supplies most flavour, has been switched off',
              'Because the brain cannot register texture when the nose is blocked',
            ],
            correctIndex: 2,
            explanation:
              'Paragraph C explains that with a blocked nose "the tongue is working as well as ever; it is the contribution of smell that has been switched off," and smell supplies "almost all of what we loosely call the taste of a food." Option C matches; option A is explicitly ruled out.',
          },
          {
            id: 'rd-027-p2-q6',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The burning heat of a chilli comes not from taste but from a compound called _______, which stimulates pain and heat receptors.',
            acceptableAnswers: ['capsaicin'],
            explanation:
              'Paragraph D states that the heat of a chilli "is the stimulation of pain and heat receptors by a compound called capsaicin." The required word is "capsaicin".',
          },
          {
            id: 'rd-027-p2-q7',
            type: 'tfng',
            prompt:
              'The passage says that the sound a food makes can influence how fresh it seems.',
            answer: 'true',
            explanation:
              'Paragraph E states that "the crunch of a fresh biscuit makes it taste fresher." This supports the statement, so it is True.',
          },
          {
            id: 'rd-027-p2-q8',
            type: 'tfng',
            prompt:
              'Supertasters tend to find vegetables such as broccoli and grapefruit harshly bitter.',
            answer: 'true',
            explanation:
              'Paragraph F says that to a supertaster "vegetables such as broccoli or grapefruit can seem harshly bitter." This supports the statement, so it is True.',
          },
          {
            id: 'rd-027-p2-q9',
            type: 'tfng',
            prompt: 'Supertasters make up the majority of the human population.',
            answer: 'not-given',
            explanation:
              'Paragraph F describes supertasters and those with few taste buds, but it never states what proportion of people are supertasters. There is no information to confirm or contradict the statement, so it is Not Given.',
          },
        ],
      },
      // ───────────────────────────── PASSAGE 3 ─────────────────────────────
      {
        id: 'rd-academic-027-p3',
        title: 'Living on Almost Nothing',
        body: `A desert is defined less by its heat than by its dryness: a place where rain is scarce, unpredictable and quickly lost to evaporation. For a plant, which cannot move to find water and must build its body from what little is available, such a home seems impossible. Yet deserts are far from lifeless. The plants that grow there have evolved an extraordinary range of solutions to the single overriding problem of obtaining water and then refusing to give it back, and together these strategies form one of the great showcases of adaptation in the living world.

The most visible approach is simply to hoard water whenever it comes. The cacti of the Americas, and many unrelated plants elsewhere that resemble them, are succulents: they store water in thick, fleshy stems or leaves that swell after rain like living reservoirs and shrink slowly as the supply is drawn down through the long dry months. A large cactus can hold an astonishing quantity of water in its spongy interior, protected from thirsty animals by a forbidding armour of spines. To lose as little of this hoard as possible, the plant's outer surface is coated with a thick, waxy skin that water can barely cross, sealing the precious store inside.

Hand in hand with storing water goes the problem of leaves. An ordinary broad leaf is a marvellous device for catching sunlight, but it is also a ruinous one for losing water, since it is dotted with tiny pores, called stomata, through which water vapour escapes whenever they open to admit the air the plant needs. In the desert this trade-off tips heavily towards caution. Many desert plants have shrunk their leaves to narrow slivers or done away with them altogether; the spines of a cactus are in fact leaves reduced almost to nothing, and the work of capturing sunlight has been taken over by the green stem. A smaller surface means less water lost, even at the cost of catching less light.

The hunt for water continues underground, where desert plants pursue two opposite strategies. Some send down a single root to extraordinary depths, reaching far below the surface to tap moisture that never dries out, so that the plant can ignore the droughts above. Others spread a dense, shallow net of roots just beneath the surface over a wide area, poised to drink in the lightest shower before the sun can steal it back. A brief desert rain may wet only the top few centimetres of soil, and a plant with a broad shallow mat can absorb a great deal of that fleeting moisture in a matter of hours. Each strategy suits a different kind of plant and a different supply of water.

A more hidden adaptation lies in the very chemistry of photosynthesis. Ordinary plants open their stomata in the daytime to take in carbon dioxide, but in the desert the daytime air is precisely when water loss is most punishing. A number of desert plants have evolved a different timetable, known as CAM photosynthesis. They keep their stomata firmly shut through the heat of the day and open them only at night, when the air is cool and water escapes far more slowly. The carbon dioxide taken in after dark is stored in the form of an acid and then released and used for photosynthesis the following day behind closed pores. By separating the gathering of carbon from its use in time, CAM lets a plant feed itself while losing only a fraction of the water that daytime breathing would cost.

For some plants the boldest answer of all is to avoid the worst of the desert by not being active during it. Certain shrubs respond to a long drought by dropping their leaves and slowing their life almost to a standstill, a dormancy from which a single good rain can rouse them within days. Others go further still and survive only as seeds, racing through their entire lives in the brief window after a downpour. Such seeds may lie in the soil for years, even decades, protected by coats that will not allow them to sprout until enough rain has fallen to see the new generation through to flowering. When at last the rains are heavy enough, a barren plain can erupt almost overnight into a carpet of bloom — proof that the desert is not empty of life but merely waiting, with great patience, for water.`,
        questions: [
          // ── Matching Features — adaptations to plant types (5 items) = 5 marks ──
          {
            id: 'rd-027-p3-q1',
            type: 'matching',
            variant: 'features',
            prompt:
              'Look at the following descriptions and the list of desert survival strategies below. Match each description to the strategy it relates to in the passage. Write the correct letter, A–D. NB You may use any letter more than once.',
            options: [
              { key: 'A', label: 'Storing water in fleshy tissue (succulence)' },
              { key: 'B', label: 'Reducing or losing the leaves' },
              { key: 'C', label: 'CAM photosynthesis' },
              { key: 'D', label: 'Surviving drought as dormant seeds' },
            ],
            items: [
              {
                id: 'p3-f-1',
                text: 'The pores are kept shut during the day and opened only at night.',
                answer: 'C',
              },
              {
                id: 'p3-f-2',
                text: 'Water swells the stem after rain and is drawn down over the dry months.',
                answer: 'A',
              },
              {
                id: 'p3-f-3',
                text: 'The task of capturing sunlight is handed over to the green stem.',
                answer: 'B',
              },
              {
                id: 'p3-f-4',
                text: 'A protective coat prevents sprouting until enough rain has fallen.',
                answer: 'D',
              },
              {
                id: 'p3-f-5',
                text: 'Carbon dioxide taken in after dark is stored as an acid for use the next day.',
                answer: 'C',
              },
            ],
            explanation:
              'Item 1 → C (CAM): plants "keep their stomata firmly shut through the heat of the day and open them only at night." Item 2 → A (succulence): fleshy stems "swell after rain like living reservoirs and shrink slowly as the supply is drawn down." Item 3 → B (reduced leaves): "the work of capturing sunlight has been taken over by the green stem." Item 4 → D (seeds): coats "will not allow them to sprout until enough rain has fallen." Item 5 → C (CAM): "carbon dioxide taken in after dark is stored in the form of an acid."',
          },
          {
            id: 'rd-027-p3-q2',
            type: 'mcq',
            prompt: 'According to paragraph A, what most truly defines a desert?',
            options: [
              'Its extreme heat throughout the year',
              'Its dryness, where rain is scarce and quickly lost',
              'Its complete absence of plant life',
              'Its sandy and rocky terrain',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph A states that "A desert is defined less by its heat than by its dryness: a place where rain is scarce, unpredictable and quickly lost to evaporation." Option B matches; option A is explicitly downplayed.',
          },
          {
            id: 'rd-027-p3-q3',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Plants that store water in thick, fleshy stems or leaves are known as _______.',
            acceptableAnswers: ['succulents'],
            explanation:
              'Paragraph B states that cacti and similar plants "are succulents: they store water in thick, fleshy stems or leaves." The required word is "succulents".',
          },
          {
            id: 'rd-027-p3-q4',
            type: 'tfng',
            prompt: 'The waxy skin of a cactus allows water to cross it easily.',
            answer: 'false',
            explanation:
              'Paragraph B says the outer surface "is coated with a thick, waxy skin that water can barely cross, sealing the precious store inside." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-027-p3-q5',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Water vapour escapes from a leaf through tiny pores called _______, which open to admit the air the plant needs.',
            acceptableAnswers: ['stomata'],
            explanation:
              'Paragraph C describes "tiny pores, called stomata, through which water vapour escapes whenever they open." The required word is "stomata".',
          },
          {
            id: 'rd-027-p3-q6',
            type: 'mcq',
            prompt: 'What are the spines of a cactus, according to paragraph C?',
            options: [
              'Specialised roots that draw in moisture from the air',
              'Leaves reduced almost to nothing',
              'Hollow tubes used to store extra water',
              'Outgrowths of the waxy skin',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph C states that "the spines of a cactus are in fact leaves reduced almost to nothing." Option B matches.',
          },
          {
            id: 'rd-027-p3-q7',
            type: 'mcq',
            prompt:
              'Why is a broad, shallow network of roots useful in the desert, according to paragraph D?',
            options: [
              'It reaches moisture deep underground that never dries out',
              'It anchors the plant against strong desert winds',
              'It can quickly absorb a light shower before the water evaporates',
              'It stores water in the same way as a fleshy stem',
            ],
            correctIndex: 2,
            explanation:
              'Paragraph D says a broad shallow mat is "poised to drink in the lightest shower before the sun can steal it back" and "can absorb a great deal of that fleeting moisture in a matter of hours." Option C matches; reaching deep moisture (option A) is the opposite strategy.',
          },
          {
            id: 'rd-027-p3-q8',
            type: 'tfng',
            prompt:
              'CAM photosynthesis allows a plant to lose less water than it would by opening its pores in the daytime.',
            answer: 'true',
            explanation:
              'Paragraph E states that CAM "lets a plant feed itself while losing only a fraction of the water that daytime breathing would cost." This supports the statement, so it is True.',
          },
          {
            id: 'rd-027-p3-q9',
            type: 'tfng',
            prompt:
              'CAM photosynthesis produces more sugar than the photosynthesis of ordinary plants.',
            answer: 'not-given',
            explanation:
              'Paragraph E explains that CAM saves water by shifting when carbon dioxide is taken in, but it never compares the amount of sugar produced by CAM and ordinary photosynthesis. There is no information to confirm or contradict the statement, so it is Not Given.',
          },
          {
            id: 'rd-027-p3-q10',
            type: 'tfng',
            prompt: 'Some desert seeds can remain in the soil for many years before they sprout.',
            answer: 'true',
            explanation:
              'Paragraph F states that "such seeds may lie in the soil for years, even decades," before enough rain allows them to sprout. This supports the statement, so it is True.',
          },
        ],
      },
    ],
  },
]
