// ─── IELTS Academic Reading - practice item bank (Set 24) ──────────────────
// ORIGINAL content written for The English Hub. These passages and questions are
// invented purely to practise the Academic Reading question formats. They are
// NOT reproductions of any official IELTS past paper, and no official
// affiliation is implied. Academic track. Topic domains: the history of
// cartography / the science of sleep / coral reef restoration.
//
// This test is MATCHING-RICH. It contains three matching questions across two
// different variants: Matching Headings (Passage 1), Matching Information /
// which-paragraph (Passage 2) and Matching Features - methods to restoration
// techniques (Passage 3), alongside the usual mix of True/False/Not Given,
// multiple choice and sentence/summary completion.
//
// One complete, carefully-checked test: 3 passages, 40 marks (each matching item
// counts as one mark). Every answer is verifiable from the passage text and is
// justified in the explanation. Marks: P1 = 6 (matching) + 7 = 13; P2 = 5
// (matching) + 8 = 13; P3 = 5 (matching) + 9 = 14. Total = 40.
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const READING_SET_24: ReadingTest[] = [
  {
    id: 'rd-academic-024',
    title: 'Academic Reading - Practice Test 24',
    track: 'academic',
    estimatedMinutes: 60,
    passages: [
      // ───────────────────────────── PASSAGE 1 ─────────────────────────────
      {
        id: 'rd-academic-024-p1',
        title: 'Drawing the World',
        body: `A map is a quiet act of ambition. To draw one is to claim that the sprawling, uneven surface of the earth can be shrunk onto a sheet small enough to hold in the hands, and that the result will be trustworthy enough to steer a ship or settle a boundary. For most of human history that claim was wildly optimistic. The oldest surviving maps owe more to belief than to measurement, and the long road from those early sketches to the precise digital charts of today is a story of stubborn problems gradually solved, often by people working in fields that had little obviously to do with geography.

The maps of the ancient and medieval world were rarely meant to show what a traveller would actually see. Many were diagrams of meaning rather than guides to distance. A famous example is the medieval European world map that placed the holy city of Jerusalem at the very centre of the earth, with the known continents arranged symmetrically around it and unknown lands filled in with monsters and marvels. Such maps were never wrong by the standards of their makers, because they were not trying to be accurate in the modern sense; they expressed how the world was understood to be ordered, not how far one place lay from another.

The shift towards measurement began in earnest when sailors needed to know not just the shape of a coast but their own position upon the open sea. Latitude, the distance north or south of the equator, had long been simple enough to find: one had only to measure the height of the sun at noon or of certain stars at night. Longitude, the east-west position, was a far crueller problem. Because the earth turns, the local time at any place depends on how far east or west it lies, so in principle a navigator who knew the time both at home and at the ship's present location could convert the difference into a distance. The difficulty was keeping accurate home time on a heaving, damp deck through months at sea, when the pendulum clocks of the age were hopelessly disturbed by the motion.

The eventual answer was mechanical rather than astronomical. After decades of patient work, an English clockmaker built a sealed, spring-driven timepiece, later called a chronometer, that kept good time despite the rolling of a ship and the swings of temperature on a long voyage. Carrying such a clock, a navigator could read off the home time at a glance, compare it with local noon, and fix longitude with an accuracy that had eluded the finest minds for two hundred years. Maps of the world's coastlines could at last be assembled from positions that were genuinely known rather than guessed, and the great blank distortions of earlier sea charts slowly disappeared.

On land a different technique brought the same revolution. To map a country in detail, surveyors used triangulation, a method that turns a sprawling territory into a web of triangles. The idea is elegant. If the exact length of one short baseline is measured on the ground with great care, and the angles from each end of that line to a distant landmark are taken, then simple geometry fixes the position of the landmark without anyone having to march the intervening distance. From that first triangle the network grows outward, each new point becoming the corner of fresh triangles, until an entire nation is bound together in a rigid lattice of measured angles. The great national surveys of the eighteenth and nineteenth centuries, carried out with heavy instruments hauled up hills and church towers, produced maps of a detail and reliability never seen before.

The most recent transformation has come from above. A constellation of satellites now broadcasts timing signals that a small receiver on the ground can use to calculate its own position to within a few metres, anywhere on earth, in any weather. The painstaking baselines and angle-measurements of the surveyors have given way to a global system that fixes location automatically. Alongside it, the geographic information system, or GIS, stores maps not as fixed pictures but as layers of data that can be combined, queried and redrawn at will, so that a single underlying record can yield a road atlas, a flood-risk chart or a census map as needed. The map has become less an object than a living database, yet its old ambition is unchanged: to make the vastness of the world fit, faithfully, into a form that human beings can grasp.`,
        questions: [
          // ── Matching Headings (6 items, 8 options → 2 distractors) = 6 marks ──
          {
            id: 'rd-024-p1-q1',
            type: 'matching',
            variant: 'headings',
            prompt:
              'The passage has six paragraphs, A-F. Choose the correct heading for each paragraph from the list of headings below. There are more headings than paragraphs, so you will not use them all. Write the correct number (i-viii) for each paragraph.',
            options: [
              { key: 'i', label: 'Binding a nation together with triangles' },
              { key: 'ii', label: 'A clock that solved the east-west problem' },
              { key: 'iii', label: 'The bold ambition behind every map' },
              { key: 'iv', label: 'How printing spread maps to ordinary people' },
              { key: 'v', label: 'Early maps as pictures of meaning, not distance' },
              { key: 'vi', label: 'From satellites to maps made of data' },
              { key: 'vii', label: 'Why finding longitude was so hard at sea' },
              { key: 'viii', label: 'The first explorers to circle the globe' },
            ],
            items: [
              { id: 'p1-h-a', text: 'Paragraph A', answer: 'iii' },
              { id: 'p1-h-b', text: 'Paragraph B', answer: 'v' },
              { id: 'p1-h-c', text: 'Paragraph C', answer: 'vii' },
              { id: 'p1-h-d', text: 'Paragraph D', answer: 'ii' },
              { id: 'p1-h-e', text: 'Paragraph E', answer: 'i' },
              { id: 'p1-h-f', text: 'Paragraph F', answer: 'vi' },
            ],
            explanation:
              'A frames map-making as "a quiet act of ambition" to shrink the earth onto a sheet (iii). B argues early maps "were diagrams of meaning rather than guides to distance" (v). C sets out why "Longitude, the east-west position, was a far crueller problem" at sea (vii). D describes the chronometer that let navigators "fix longitude" (ii). E explains triangulation binding "an entire nation... in a rigid lattice" (i). F covers satellites and GIS, the map as "a living database" (vi). Heading iv (printing for ordinary people) and heading viii (first explorers to circle the globe) are distractors never discussed.',
          },
          {
            id: 'rd-024-p1-q2',
            type: 'tfng',
            prompt:
              'The medieval European world map described in the passage was intended to show accurate distances between places.',
            answer: 'false',
            explanation:
              'Paragraph B says such maps "were not trying to be accurate in the modern sense" and "expressed how the world was understood to be ordered, not how far one place lay from another." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-024-p1-q3',
            type: 'mcq',
            prompt: 'Why was finding latitude relatively straightforward for early navigators?',
            options: [
              'It could be read directly from a ship-borne mechanical clock.',
              'It could be found by measuring the height of the sun or stars.',
              'It depended only on knowing the local time at the ship.',
              'It was fixed automatically by signals broadcast from above.',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph C says latitude "had long been simple enough to find: one had only to measure the height of the sun at noon or of certain stars at night." Option B matches; the clock and broadcast signals relate to other methods discussed elsewhere.',
          },
          {
            id: 'rd-024-p1-q4',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The sealed, spring-driven timepiece that kept accurate home time at sea was later called a _______.',
            acceptableAnswers: ['chronometer'],
            explanation:
              'Paragraph D states the clockmaker built "a sealed, spring-driven timepiece, later called a chronometer." The required word is "chronometer".',
          },
          {
            id: 'rd-024-p1-q5',
            type: 'mcq',
            prompt:
              'According to paragraph C, why was keeping accurate home time so difficult on a long sea voyage?',
            options: [
              'The crew had no way of knowing the local time aboard the ship.',
              'The pendulum clocks of the age were disturbed by the ship’s motion.',
              'The earth’s rotation altered the speed of every clock at sea.',
              'Temperature changes had no effect on the clocks then available.',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph C explains the difficulty was "keeping accurate home time... when the pendulum clocks of the age were hopelessly disturbed by the motion." Option B matches; option D is the opposite of what paragraph D later implies about temperature.',
          },
          {
            id: 'rd-024-p1-q6',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: To map a country in detail, surveyors used _______, a method that turns a territory into a web of triangles.',
            acceptableAnswers: ['triangulation'],
            explanation:
              'Paragraph E says "surveyors used triangulation, a method that turns a sprawling territory into a web of triangles." The required word is "triangulation".',
          },
          {
            id: 'rd-024-p1-q7',
            type: 'tfng',
            prompt:
              'In a triangulation survey, the distance to a distant landmark had to be physically walked before it could be recorded.',
            answer: 'false',
            explanation:
              'Paragraph E states geometry "fixes the position of the landmark without anyone having to march the intervening distance." This directly contradicts the statement, so it is False.',
          },
          {
            id: 'rd-024-p1-q8',
            type: 'tfng',
            prompt:
              'A GIS stores maps as layers of data that can be combined and redrawn for different purposes.',
            answer: 'true',
            explanation:
              'Paragraph F says GIS "stores maps not as fixed pictures but as layers of data that can be combined, queried and redrawn at will." This supports the statement, so it is True.',
          },
        ],
      },
      // ───────────────────────────── PASSAGE 2 ─────────────────────────────
      {
        id: 'rd-academic-024-p2',
        title: 'A Third of a Life Asleep',
        body: `We spend roughly a third of our lives asleep, yet for most of history sleep was treated as little more than an inconvenient pause, a nightly switching-off of the body until the morning brought it back on. Modern research tells a very different story. Far from being a blank, sleep is a busy and tightly organised state in which the brain runs through a sequence of distinct phases, each with its own pattern of electrical activity and its own work to do. Understanding that sequence has reshaped the way scientists think about memory, mood and health.

A night's sleep is not one uniform condition but a cycle that repeats several times. As we drift off, we pass through progressively deeper stages of what is called non-REM sleep, in which the brain's electrical waves grow slower and larger and the body's pace winds down. Breathing settles into a steady rhythm, the heart slows, and the muscles relax stage by stage, so that the deepest non-REM sleep is also the hardest to be woken from; a person roused at that point is groggy and disoriented for several minutes. After a stretch of this deep, slow-wave sleep the pattern abruptly changes: the brain becomes almost as active as it is in waking life, the eyes dart rapidly beneath closed lids, and most vivid dreaming occurs. Curiously, during this phase the body's main muscles are temporarily paralysed, a safeguard that seems to stop the sleeper from physically acting out the events of a dream. This phase is known as REM sleep, after those rapid eye movements. A single full cycle, from light sleep down to deep sleep and up into REM, lasts roughly ninety minutes, and a sleeper moves through four or five such cycles before waking, with the deep stages dominating early in the night and REM lengthening towards morning.

The timing of sleep is governed by an internal clock that runs on a rhythm of about twenty-four hours, the so-called circadian rhythm. This clock, seated deep in the brain, does not keep perfect time on its own; left in constant darkness it would gradually drift out of step with the day. To stay aligned it relies on cues from the outside world, of which the most powerful by far is light. Bright morning light, striking the eye, resets the clock and signals that the day has begun, while the fading of light in the evening allows the brain to release a hormone called melatonin that helps prepare the body for sleep. This is why travellers crossing several time zones feel so disoriented: their internal clock still keeps the time of the place they left, and it takes days of exposure to local daylight for it to catch up.

Why we need sleep at all is a question that has proved surprisingly stubborn, and despite a great deal of research no single explanation accounts for every benefit that sleep provides. A number of clear functions have nonetheless emerged. One is the consolidation of memory. During sleep, and particularly during certain stages, the brain appears to replay and reorganise the experiences of the day, strengthening the connections that store useful information and weakening those that are not worth keeping. A skill practised before a good night's sleep is often performed noticeably better the following day, as though the learning had been quietly rehearsed in the dark. Sleep also seems to serve a kind of housekeeping role, allowing the brain to clear away waste products that build up during waking hours, and it plays a part in regulating the body's use of energy and the workings of the immune system. Some researchers suspect that this clearing-away may be one of the oldest reasons for sleep, since even very simple animals with the barest nervous systems show periods of rest that resemble it.

The clearest evidence for the importance of sleep comes, paradoxically, from going without it. Even a single night of poor sleep blunts concentration, slows reactions and sours the mood, and the effects accumulate alarmingly when short sleep continues night after night. People who are chronically sleep-deprived perform worse on tests of attention and judgement, often without realising how impaired they have become, since the sense of one's own tiredness adjusts and ceases to ring alarm bells. Longer-term studies have linked persistent lack of sleep with a raised risk of several serious conditions, among them weight gain, high blood pressure and a weakened resistance to infection. Far from being wasted time that could be trimmed away, sleep turns out to be one of the foundations on which waking health is built.`,
        questions: [
          // ── Matching Information / which-paragraph (5 items) = 5 marks ──
          {
            id: 'rd-024-p2-q1',
            type: 'matching',
            variant: 'information',
            prompt:
              'The passage has five paragraphs, A-E. Which paragraph contains the following information? Write the correct letter, A-E. (You may use any letter more than once, but each statement here is found in only one paragraph.)',
            options: [
              { key: 'A', label: 'Paragraph A' },
              { key: 'B', label: 'Paragraph B' },
              { key: 'C', label: 'Paragraph C' },
              { key: 'D', label: 'Paragraph D' },
              { key: 'E', label: 'Paragraph E' },
            ],
            items: [
              {
                id: 'p2-i-1',
                text: 'a description of how light keeps the body’s internal clock aligned with the day',
                answer: 'C',
              },
              {
                id: 'p2-i-2',
                text: 'the claim that sleep was once dismissed as an unimportant pause',
                answer: 'A',
              },
              {
                id: 'p2-i-3',
                text: 'examples of serious illnesses linked to long-term lack of sleep',
                answer: 'E',
              },
              {
                id: 'p2-i-4',
                text: 'an account of the stages that make up a single sleep cycle',
                answer: 'B',
              },
              {
                id: 'p2-i-5',
                text: 'the idea that sleep helps the brain strengthen useful memories',
                answer: 'D',
              },
            ],
            explanation:
              'Item 1 → C: "Bright morning light... resets the clock" and light is "the most powerful by far" cue. Item 2 → A: sleep "was treated as little more than an inconvenient pause." Item 3 → E lists "weight gain, high blood pressure and a weakened resistance to infection." Item 4 → B describes the cycle from non-REM through deep sleep into REM. Item 5 → D: the brain "strengthening the connections that store useful information."',
          },
          {
            id: 'rd-024-p2-q2',
            type: 'tfng',
            prompt: 'A single full sleep cycle lasts about ninety minutes.',
            answer: 'true',
            explanation:
              'Paragraph B states "A single full cycle, from light sleep down to deep sleep and up into REM, lasts roughly ninety minutes." This supports the statement, so it is True.',
          },
          {
            id: 'rd-024-p2-q3',
            type: 'mcq',
            prompt: 'What happens to the brain during REM sleep, according to paragraph B?',
            options: [
              'Its electrical waves become slower and larger than in deep sleep.',
              'It becomes almost as active as it is during waking life.',
              'It shuts down almost entirely until the morning.',
              'It stops producing dreams of any kind.',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph B says that in REM "the brain becomes almost as active as it is in waking life," with rapid eye movements and vivid dreaming. Option B matches; the slow, large waves belong to non-REM deep sleep.',
          },
          {
            id: 'rd-024-p2-q4',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The body’s internal clock, which runs on a roughly twenty-four-hour cycle, controls the timing of sleep and is known as the _______ rhythm.',
            acceptableAnswers: ['circadian'],
            explanation:
              'Paragraph C describes "an internal clock that runs on a rhythm of about twenty-four hours, the so-called circadian rhythm." The required word is "circadian".',
          },
          {
            id: 'rd-024-p2-q5',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: As evening light fades, the brain releases a hormone called _______ that helps prepare the body for sleep.',
            acceptableAnswers: ['melatonin'],
            explanation:
              'Paragraph C says the fading of evening light "allows the brain to release a hormone called melatonin that helps prepare the body for sleep." The required word is "melatonin".',
          },
          {
            id: 'rd-024-p2-q6',
            type: 'tfng',
            prompt:
              'Left in constant darkness, the body’s internal clock would keep perfect twenty-four-hour time on its own.',
            answer: 'false',
            explanation:
              'Paragraph C states the clock "does not keep perfect time on its own; left in constant darkness it would gradually drift out of step with the day." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-024-p2-q7',
            type: 'mcq',
            prompt:
              'According to paragraph E, why do chronically sleep-deprived people often fail to notice how impaired they are?',
            options: [
              'Their reactions and concentration are not actually affected.',
              'They sleep more deeply than other people without knowing it.',
              'The sense of their own tiredness adjusts and stops alerting them.',
              'They are tested only on tasks that tiredness does not affect.',
            ],
            correctIndex: 2,
            explanation:
              'Paragraph E says they perform worse "often without realising how impaired they have become, since the sense of one’s own tiredness adjusts and ceases to ring alarm bells." Option C matches; option A contradicts the paragraph.',
          },
          {
            id: 'rd-024-p2-q8',
            type: 'tfng',
            prompt:
              'Sleeping pills are the most effective way for travellers to reset their internal clock after crossing time zones.',
            answer: 'not-given',
            explanation:
              'Paragraph C says it takes "days of exposure to local daylight" for the clock to catch up, but the passage never mentions sleeping pills or compares treatments for jet lag. There is no information to support or contradict the statement, so it is Not Given.',
          },
          {
            id: 'rd-024-p2-q9',
            type: 'tfng',
            prompt:
              'A skill practised before a good night’s sleep is often performed better the next day.',
            answer: 'true',
            explanation:
              'Paragraph D states "A skill practised before a good night’s sleep is often performed noticeably better the following day." This supports the statement, so it is True.',
          },
        ],
      },
      // ───────────────────────────── PASSAGE 3 ─────────────────────────────
      {
        id: 'rd-academic-024-p3',
        title: 'Rebuilding the Reef',
        body: `Coral reefs are among the most crowded habitats on the planet. Though they cover a tiny fraction of the ocean floor, they shelter a quarter or more of all marine species, and they protect low-lying coasts from the force of storm waves. They also support the livelihoods of many millions of people, through the fish that feed coastal communities and the visitors drawn to dive among them, so the loss of a reef is felt far beyond the water. Yet these vast living structures are built by tiny animals, coral polyps, that lay down stone skeletons over centuries. Each polyp is no larger than a fingertip, and a reef visible from space is the accumulated work of countless generations of them. The colour and much of the energy of a healthy reef come not from the polyps themselves but from microscopic algae that live inside their tissues, trading food made from sunlight for shelter. That partnership is the reef's great strength, and also its great weakness.

When the surrounding water grows too warm, even by a degree or two for a sustained period, the relationship breaks down. The stressed polyps expel the algae living within them, and because those algae supply both colour and most of the coral's nourishment, the coral turns a stark, ghostly white and begins to starve. This is the process known as bleaching. A bleached coral is not yet dead, and if cooler conditions return quickly the algae can recolonise and the coral may recover. But if the heat persists, the starving colonies die, and a reef that took centuries to grow can be reduced to rubble within a single hot season. As ocean temperatures climb, such events have grown more frequent and more severe, and the search for ways to help reefs recover has become urgent.

The oldest and most widely used response is a technique often called coral gardening. Small fragments are broken from healthy colonies-corals naturally regrow from such pieces-and are tied to underwater frames or ropes in sheltered nurseries, where they grow far faster than they would on an open reef exposed to predators and competition. Once the fragments have grown large enough, divers carry them out and cement them onto damaged reef, much as a gardener raises seedlings in trays before planting them out. The method is simple and effective, but it has a serious limitation: because every fragment is a clone of its parent, a garden raised this way may contain very little genetic variety, leaving the replanted reef no better able to withstand heat than the corals that were lost.

A second technique aims to restore that lost variety by working with the way corals breed in the wild. Once a year, on cues of temperature and moonlight, many corals spawn at once, releasing eggs and sperm into the water in a synchronised mass event that turns the sea cloudy for a night or two. The timing is so precise that whole stretches of reef may release their spawn within the same hour, a spectacle that researchers wait all year to witness. They can collect this spawn at sea, allow it to fertilise, and rear the resulting larvae in protected tanks or floating enclosures, safe from the currents and predators that destroy almost all of them in nature. The young corals are then released, or settled onto tiles and placed on the reef. Because each larva is the product of two parents, this approach-known as larval reseeding-restocks a reef with genetically varied young, giving the new generation a far better chance of including individuals that can cope with a warmer sea.

The most ambitious and most debated idea goes a step further and tries to make corals tougher in advance. Known as assisted evolution, it seeks to speed up the natural process by which a population adapts to stress. In one version, researchers breed together corals that have survived previous heatwaves, in the hope that their offspring will inherit the same resilience. In another, the focus is on the algae rather than the coral: strains of the partner algae are cultured for many generations at higher temperatures, selecting those that tolerate heat best, so that corals stocked with these hardened partners may resist bleaching. Such methods raise difficult questions, since deliberately altering wild populations could carry unforeseen consequences, and even their supporters stress that no reef intervention can succeed unless the warming of the oceans is itself brought under control. Restoration can buy a threatened reef precious time, but it cannot, on its own, remove the cause of the danger.`,
        questions: [
          // ── Matching Features - methods to restoration techniques (5 items) = 5 marks ──
          {
            id: 'rd-024-p3-q1',
            type: 'matching',
            variant: 'features',
            prompt:
              'Look at the following descriptions and the list of restoration techniques below. Match each description to the technique it relates to in the passage. Write the correct letter, A, B or C. NB You may use any letter more than once.',
            options: [
              { key: 'A', label: 'Coral gardening' },
              { key: 'B', label: 'Larval reseeding' },
              { key: 'C', label: 'Assisted evolution' },
            ],
            items: [
              {
                id: 'p3-f-1',
                text: 'Fragments are grown in nurseries before being cemented onto damaged reef.',
                answer: 'A',
              },
              {
                id: 'p3-f-2',
                text: 'Corals that survived past heatwaves are bred together for resilient offspring.',
                answer: 'C',
              },
              {
                id: 'p3-f-3',
                text: 'Spawn is collected at sea and reared into genetically varied young.',
                answer: 'B',
              },
              {
                id: 'p3-f-4',
                text: 'It is criticised for producing reefs with very little genetic variety.',
                answer: 'A',
              },
              {
                id: 'p3-f-5',
                text: 'Partner algae are cultured at higher temperatures to tolerate heat.',
                answer: 'C',
              },
            ],
            explanation:
              'Item 1 → A: in coral gardening fragments grow in nurseries and divers "cement them onto damaged reef." Item 2 → C: assisted evolution breeds "corals that have survived previous heatwaves." Item 3 → B: larval reseeding collects spawn at sea and rears "genetically varied young." Item 4 → A: a garden "may contain very little genetic variety." Item 5 → C: the algae version cultures heat-tolerant "strains of the partner algae... at higher temperatures."',
          },
          {
            id: 'rd-024-p3-q2',
            type: 'tfng',
            prompt:
              'Coral reefs occupy only a small fraction of the ocean floor yet support a large share of marine species.',
            answer: 'true',
            explanation:
              'Paragraph A says reefs "cover a tiny fraction of the ocean floor" but "shelter a quarter or more of all marine species." This supports the statement, so it is True.',
          },
          {
            id: 'rd-024-p3-q3',
            type: 'mcq',
            prompt:
              'According to paragraph A, where does most of a healthy reef’s energy come from?',
            options: [
              'From the stone skeletons laid down by the coral polyps',
              'From microscopic algae living inside the polyps’ tissues',
              'From storm waves that wash nutrients onto the reef',
              'From the predators that feed among the coral colonies',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph A says the energy "come not from the polyps themselves but from microscopic algae that live inside their tissues, trading food made from sunlight for shelter." Option B matches.',
          },
          {
            id: 'rd-024-p3-q4',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: When stressed coral expels its algae and turns white, the process is known as _______.',
            acceptableAnswers: ['bleaching'],
            explanation:
              'Paragraph B says the coral "turns a stark, ghostly white and begins to starve. This is the process known as bleaching." The required word is "bleaching".',
          },
          {
            id: 'rd-024-p3-q5',
            type: 'tfng',
            prompt: 'A coral that has bleached is certain to die and cannot recover.',
            answer: 'false',
            explanation:
              'Paragraph B states "A bleached coral is not yet dead, and if cooler conditions return quickly the algae can recolonise and the coral may recover." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-024-p3-q6',
            type: 'mcq',
            prompt: 'What is the main limitation of coral gardening identified in paragraph C?',
            options: [
              'The fragments grow more slowly in nurseries than on an open reef.',
              'The technique is too complicated for divers to carry out.',
              'Every fragment is a clone, so the replanted reef has little genetic variety.',
              'The fragments cannot be attached to damaged reef once grown.',
            ],
            correctIndex: 2,
            explanation:
              'Paragraph C says "because every fragment is a clone of its parent, a garden raised this way may contain very little genetic variety," leaving the reef no better able to withstand heat. Option C matches; option A reverses the text, which says nursery fragments grow faster.',
          },
          {
            id: 'rd-024-p3-q7',
            type: 'gap',
            prompt:
              'Complete the sentence with NO MORE THAN TWO WORDS from the passage: Larval reseeding works with the annual event in which many corals release eggs and sperm together, when they _______.',
            acceptableAnswers: ['spawn'],
            explanation:
              'Paragraph D says that once a year "many corals spawn at once, releasing eggs and sperm into the water." The single word "spawn" appears verbatim and fits the two-word limit.',
          },
          {
            id: 'rd-024-p3-q8',
            type: 'tfng',
            prompt: 'In nature, almost all coral larvae are destroyed by currents and predators.',
            answer: 'true',
            explanation:
              'Paragraph D refers to rearing larvae "safe from the currents and predators that destroy almost all of them in nature." This supports the statement, so it is True.',
          },
          {
            id: 'rd-024-p3-q9',
            type: 'tfng',
            prompt:
              'Supporters of assisted evolution argue that it can succeed even if ocean warming is not controlled.',
            answer: 'false',
            explanation:
              'Paragraph E says "even their supporters stress that no reef intervention can succeed unless the warming of the oceans is itself brought under control." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-024-p3-q10',
            type: 'mcq',
            prompt:
              'What overall point does the passage make about reef restoration in its final paragraph?',
            options: [
              'It can permanently remove the threats that reefs face.',
              'It can buy a threatened reef time but not remove the underlying cause.',
              'It has already reversed the warming of the oceans.',
              'It is certain to harm wild coral populations.',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph E concludes that restoration "can buy a threatened reef precious time, but it cannot, on its own, remove the cause of the danger." Option B matches; option D overstates the cautious wording about "unforeseen consequences."',
          },
        ],
      },
    ],
  },
]
