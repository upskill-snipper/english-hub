// ─── IELTS Academic Reading — practice item bank (Wave 1) ──────────────────
// ORIGINAL content written for The English Hub. These are NOT reproductions of
// any official IELTS past paper; the passages and questions are invented purely
// to practise the Academic Reading question formats (MCQ, True/False/Not Given,
// and sentence/summary completion). Framed as "IELTS preparation" only — no
// official affiliation is implied. Academic track.
//
// Phase 2 scales this bank via the content pipeline; Wave 1 ships ONE complete,
// carefully-checked test (2 passages, 14 questions) so the experience is real.
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'
// Additional Academic reading tests (item-bank scaling, 2026-05-25).
import { READING_SET_2 } from './reading-tests-set-2'
import { READING_SET_3 } from './reading-tests-set-3'
import { READING_SET_4 } from './reading-tests-set-4'
// Premium expansion (2026-05-25): additional full Academic tests.
import { READING_SET_5 } from './reading-tests-set-5'
import { READING_SET_6 } from './reading-tests-set-6'
import { READING_SET_7 } from './reading-tests-set-7'
// General Training reading tests (track: 'general') — filtered by the reading
// page via the TrackToggle. These live alongside the Academic tests so the bank
// is one filterable array.
import { GT_READING_SET_1 } from './gt-reading-tests-1'
import { GT_READING_SET_2 } from './gt-reading-tests-2'
import { GT_READING_SET_3 } from './gt-reading-tests-3'

export const READING_TESTS: ReadingTest[] = [
  ...READING_SET_2,
  ...READING_SET_3,
  ...READING_SET_4,
  ...READING_SET_5,
  ...READING_SET_6,
  ...READING_SET_7,
  {
    id: 'rd-academic-001',
    title: 'Academic Reading — Practice Test 1',
    track: 'academic',
    estimatedMinutes: 20,
    passages: [
      {
        id: 'rd-academic-001-p1',
        title: 'The Quiet Return of the Urban Tram',
        body: `For much of the twentieth century the electric tram was treated as a relic. As private cars filled the roads of growing cities, planners across Europe and North America tore up the rails, arguing that buses were cheaper and far more flexible. By the 1960s many once-extensive tram networks had vanished almost entirely, surviving only in a handful of cities that lacked the funds to replace them.

The reversal that followed was gradual and, at first, unremarked. The French city of Nantes reopened a modern tram line in 1985, and within two decades dozens of cities had followed its example. The new vehicles bore little resemblance to their rattling predecessors. They were low-floored for step-free boarding, ran on smooth welded rails, and drew power without the showers of sparks that older systems produced. Just as importantly, they were quiet, a quality that made them politically acceptable in dense residential districts where noise had once provoked complaints.

Engineers point out that the appeal of the tram is not merely nostalgic. A single modern tram can carry the passengers of several buses, and because it runs on a fixed route its movements are predictable, which allows traffic signals to be timed in its favour. Where a dedicated lane is provided, the tram is largely immune to the congestion that slows road traffic, and journey times become reliable enough that commuters are willing to abandon their cars.

Critics counter that trams are expensive to build and that the same money might buy a far larger network of buses. Laying track and stringing overhead wires through a working city is disruptive, and the bill frequently exceeds early estimates. Supporters reply that the comparison misses the point: passengers, they argue, simply prefer rail, and a tram line tends to attract investment along its route in a way that a bus service rarely does. New housing and shops cluster around the stops, and the value created, though hard to measure precisely, may eventually outweigh the construction cost.

Whatever the balance of the argument, the trend is unmistakable. A mode of transport once written off as obsolete now glides through hundreds of cities, and few of those cities show any sign of regret.`,
        questions: [
          {
            id: 'rd-001-p1-q1',
            type: 'tfng',
            prompt:
              'In the mid-twentieth century, most planners believed buses were a more economical option than trams.',
            answer: 'true',
            explanation:
              'The first paragraph states that planners "argued that buses were cheaper and far more flexible," which directly supports this statement, so it is True.',
          },
          {
            id: 'rd-001-p1-q2',
            type: 'tfng',
            prompt: 'Nantes was the first city in the world to reintroduce a modern tram system.',
            answer: 'not-given',
            explanation:
              'The passage says Nantes "reopened a modern tram line in 1985" and that cities followed "its example," but it never claims Nantes was the first city in the world to do so. The text gives no information either way, so the answer is Not Given.',
          },
          {
            id: 'rd-001-p1-q3',
            type: 'tfng',
            prompt: 'Modern trams produce more visible sparks than the trams used in the past.',
            answer: 'false',
            explanation:
              'The passage says modern vehicles "drew power without the showers of sparks that older systems produced," meaning they produce fewer sparks, not more. The statement contradicts the text, so it is False.',
          },
          {
            id: 'rd-001-p1-q4',
            type: 'mcq',
            prompt: 'According to the passage, why can traffic signals be timed to favour a tram?',
            options: [
              'Because trams are quieter than buses',
              'Because a tram follows a fixed, predictable route',
              'Because trams carry fewer passengers than buses',
              'Because trams are cheaper to operate at night',
            ],
            correctIndex: 1,
            explanation:
              'The third paragraph explains that "because it runs on a fixed route its movements are predictable, which allows traffic signals to be timed in its favour." Option B captures this reasoning.',
          },
          {
            id: 'rd-001-p1-q5',
            type: 'mcq',
            prompt: 'How do supporters respond to the criticism that trams are expensive?',
            options: [
              'They argue the cost figures are usually exaggerated.',
              'They claim trams are always cheaper than buses in the long run.',
              'They say passengers prefer rail and that lines attract nearby investment.',
              'They point out that buses cause more congestion than trams.',
            ],
            correctIndex: 2,
            explanation:
              'In the fourth paragraph supporters reply that "passengers... simply prefer rail, and a tram line tends to attract investment along its route." Option C matches this; the other options are not the argument the supporters make.',
          },
          {
            id: 'rd-001-p1-q6',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Where a tram is given a dedicated _______, it largely avoids the congestion that slows other road traffic.',
            acceptableAnswers: ['lane'],
            explanation:
              'The third paragraph states: "Where a dedicated lane is provided, the tram is largely immune to the congestion that slows road traffic." The missing word is "lane".',
          },
          {
            id: 'rd-001-p1-q7',
            type: 'gap',
            prompt:
              'Complete the summary with ONE word from the passage: Critics say that laying track and overhead wires through a city is _______, and that the final cost often exceeds early estimates.',
            acceptableAnswers: ['disruptive'],
            explanation:
              'The fourth paragraph says: "Laying track and stringing overhead wires through a working city is disruptive, and the bill frequently exceeds early estimates." The required word is "disruptive".',
          },
        ],
      },
      {
        id: 'rd-academic-001-p2',
        title: 'Why Some Memories Last',
        body: `Most of the events of an ordinary day are forgotten within hours. We remember almost nothing of last Tuesday's lunch, yet a single dramatic moment from years ago can remain astonishingly vivid. Psychologists who study memory have long been interested in this uneven pattern, and recent work suggests that the difference lies less in the event itself than in what the brain does in the hours and days that follow.

When we first encounter information, it is held in a fragile state. For a memory to last, it must undergo a process known as consolidation, during which connections between neurons are strengthened and the memory is, in effect, rewritten into a more stable form. Sleep appears to play a central role. In a series of laboratory studies, participants who slept after learning a list of words recalled noticeably more of them the following day than participants who stayed awake for the same period, even when both groups were tested at the same hour.

Emotion is a second powerful factor. Events that frighten or delight us release hormones that act on the amygdala, a small structure deep in the brain that flags an experience as significant. The amygdala does not store the memory itself, but it appears to instruct neighbouring regions to preserve the details with particular care. This may explain why people can often describe exactly where they were when they heard shocking news, while the surrounding ordinary days have dissolved.

Yet a vivid memory is not necessarily an accurate one. Each time a memory is recalled it becomes briefly unstable again and must be re-stored, and during this window it can be altered, sometimes by nothing more than the way a question is phrased. In one well-known line of research, witnesses who were asked how fast cars were going when they "smashed" into each other later remembered seeing broken glass that had never been present in the film they watched. The memory felt entirely real to them, which is precisely what makes such errors so difficult to detect.

Understanding these mechanisms has practical value. It cautions courts against treating confident testimony as proof, and it suggests, more cheerfully, that a good night's sleep may be one of the simplest ways to make what we learn endure.`,
        questions: [
          {
            id: 'rd-001-p2-q8',
            type: 'mcq',
            prompt:
              'What does recent research suggest is the main reason some memories last and others do not?',
            options: [
              'The importance of the event at the moment it happens',
              'What the brain does in the hours and days after the event',
              'The age of the person when the event occurs',
              'How many times the event is described to others',
            ],
            correctIndex: 1,
            explanation:
              'The first paragraph states that "the difference lies less in the event itself than in what the brain does in the hours and days that follow." Option B is therefore correct.',
          },
          {
            id: 'rd-001-p2-q9',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: For a memory to become stable it must undergo a process called _______.',
            acceptableAnswers: ['consolidation'],
            explanation:
              'The second paragraph introduces "a process known as consolidation, during which connections between neurons are strengthened." The missing word is "consolidation".',
          },
          {
            id: 'rd-001-p2-q10',
            type: 'tfng',
            prompt:
              'Participants who slept after learning a word list remembered more words than those who stayed awake.',
            answer: 'true',
            explanation:
              'The second paragraph reports that sleepers "recalled noticeably more of them the following day than participants who stayed awake." This matches the statement, so it is True.',
          },
          {
            id: 'rd-001-p2-q11',
            type: 'tfng',
            prompt: 'The amygdala is where emotional memories are permanently stored.',
            answer: 'false',
            explanation:
              'The third paragraph states that "the amygdala does not store the memory itself" but instead instructs neighbouring regions to preserve details. The statement contradicts the passage, so it is False.',
          },
          {
            id: 'rd-001-p2-q12',
            type: 'gap',
            prompt:
              'Complete the summary with ONE word from the passage: Each time a memory is recalled it becomes briefly _______ again and must be re-stored, allowing it to be altered.',
            acceptableAnswers: ['unstable'],
            explanation:
              'The fourth paragraph says: "Each time a memory is recalled it becomes briefly unstable again and must be re-stored." The required word is "unstable".',
          },
          {
            id: 'rd-001-p2-q13',
            type: 'mcq',
            prompt:
              'What did witnesses in the research wrongly remember after being asked about cars that "smashed" into each other?',
            options: [
              'That the cars were a particular colour',
              'That there were injured passengers',
              'That they had seen broken glass',
              'That the crash happened at night',
            ],
            correctIndex: 2,
            explanation:
              'The fourth paragraph states the witnesses "later remembered seeing broken glass that had never been present in the film." Option C is correct.',
          },
          {
            id: 'rd-001-p2-q14',
            type: 'tfng',
            prompt:
              'The passage advises courts to treat a witness’s confident testimony as reliable proof.',
            answer: 'false',
            explanation:
              'The final paragraph says the research "cautions courts against treating confident testimony as proof." This is the opposite of the statement, so it is False.',
          },
        ],
      },
    ],
  },
  {
    id: 'rd-academic-002',
    title: 'Academic Reading — Practice Test 2',
    track: 'academic',
    estimatedMinutes: 20,
    passages: [
      {
        id: 'rd-academic-002-p1',
        title: 'The Lighthouse Keepers of the North Atlantic',
        body: `Before the spread of automated navigation, the safety of every ship rounding a rocky coast depended on a handful of people most passengers never saw. Lighthouse keepers lived for weeks at a time on isolated towers and storm-battered islands, tending a single flame whose only purpose was to warn vessels away from danger. The work demanded a peculiar mixture of vigilance and patience, for the great enemy of the keeper was not the weather but boredom.

The earliest lights were simple coal fires burned on open platforms, but these were unreliable: rain could quench them and smoke could obscure them at exactly the moment a ship needed guidance most. The breakthrough came in the early nineteenth century with the invention of a lens that could gather a weak flame's light and bend it into a single concentrated beam visible far out to sea. A lamp that had once been useful for a few kilometres could now be seen from twenty or more, and the design spread rapidly along the coasts of Europe.

Yet the brilliant beam created a new problem. From a distance, one fixed light looked much like another, and a captain who mistook one headland for its neighbour might steer confidently onto the rocks. The solution was to give each lighthouse its own rhythm. By rotating the lens or shielding it at set intervals, engineers made every light flash in a distinct pattern, so that a navigator consulting a chart could identify exactly which coast lay ahead. The light no longer merely shone; it carried information.

The keepers themselves were eventually made redundant by electric lamps and automatic timers, and the last of them were withdrawn from their towers in the closing decades of the twentieth century. Their lights still turn, now watched by sensors rather than human eyes. Something, many sailors feel, has been lost along with them — though none would wish to return to a time when a single sleepy keeper stood between a ship and the rocks.`,
        questions: [
          {
            id: 'rd-002-p1-q1',
            type: 'tfng',
            prompt:
              'According to the passage, the hardest part of a keeper’s job was coping with severe weather.',
            answer: 'false',
            explanation:
              'The first paragraph states that "the great enemy of the keeper was not the weather but boredom." The statement names the weather as the hardest part, which directly contradicts the text, so it is False.',
          },
          {
            id: 'rd-002-p1-q2',
            type: 'tfng',
            prompt: 'Early coal-fire lights could be put out by rain.',
            answer: 'true',
            explanation:
              'The second paragraph says the early coal fires "were unreliable: rain could quench them." To quench a fire is to put it out, so the statement is True.',
          },
          {
            id: 'rd-002-p1-q3',
            type: 'tfng',
            prompt: 'The lens that concentrated the light was first developed in Asia.',
            answer: 'not-given',
            explanation:
              'The passage dates the lens to "the early nineteenth century" and says the design "spread rapidly along the coasts of Europe," but it never states where the lens was first developed. There is no information about Asia, so the answer is Not Given.',
          },
          {
            id: 'rd-002-p1-q4',
            type: 'mcq',
            prompt: 'What was the new problem created by the bright concentrated beam?',
            options: [
              'The lamps used too much fuel to stay lit all night.',
              'From a distance, different fixed lights looked the same.',
              'The beam was too weak to be seen in bad weather.',
              'Ships began to travel closer to the coast than before.',
            ],
            correctIndex: 1,
            explanation:
              'The third paragraph explains that "From a distance, one fixed light looked much like another, and a captain who mistook one headland for its neighbour might steer confidently onto the rocks." Option B captures this problem.',
          },
          {
            id: 'rd-002-p1-q5',
            type: 'mcq',
            prompt: 'How did engineers make it possible to tell one lighthouse from another?',
            options: [
              'By using a different colour of light at each tower',
              'By building the towers to different heights',
              'By giving each light its own distinct flashing pattern',
              'By placing keepers at only the most dangerous sites',
            ],
            correctIndex: 2,
            explanation:
              'The third paragraph says engineers "made every light flash in a distinct pattern, so that a navigator consulting a chart could identify exactly which coast lay ahead." Option C is correct; colour and height are not mentioned.',
          },
          {
            id: 'rd-002-p1-q6',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: By rotating or shielding the lens, engineers gave each light a distinct _______ that identified the coast.',
            acceptableAnswers: ['pattern', 'rhythm'],
            explanation:
              'The third paragraph refers to giving "each lighthouse its own rhythm" and making each light "flash in a distinct pattern." Either "pattern" or "rhythm" fits the gap and the meaning.',
          },
          {
            id: 'rd-002-p1-q7',
            type: 'gap',
            prompt:
              'Complete the summary with ONE word from the passage: The keepers were eventually made _______ by electric lamps and automatic timers.',
            acceptableAnswers: ['redundant'],
            explanation:
              'The final paragraph says "The keepers themselves were eventually made redundant by electric lamps and automatic timers." The required word is "redundant".',
          },
        ],
      },
      {
        id: 'rd-academic-002-p2',
        title: 'The Surprising Mathematics of Honeybees',
        body: `A honeycomb is one of the most familiar structures in nature, and also one of the most quietly remarkable. Each cell is a near-perfect hexagon, and the cells fit together so neatly that not a scrap of space is wasted between them. For centuries observers assumed that bees must possess some innate geometric genius, but the truth, as is often the case in biology, is both simpler and more interesting.

The advantage of the hexagon is real. Of all the shapes that can tile a flat surface without leaving gaps — triangles, squares and hexagons — the hexagon encloses the largest area for the least amount of wall. For an insect that must produce wax from its own body at considerable energetic cost, using the least material to store the most honey is a powerful saving. A colony that wasted wax would be at a disadvantage, and over millions of years natural selection would favour those that did not.

But this does not mean each bee is calculating angles. The leading explanation is that bees first build cells that are roughly circular, packing them together as tightly as they can. The warmth of the working bees keeps the fresh wax soft, and in this semi-liquid state the walls are pulled by surface tension into the most stable arrangement available — which, for circles pressed evenly together, is precisely the hexagonal grid. The mathematics is performed not by the bee but by the physics of the wax itself.

This idea is supported by a telling observation. When researchers examine cells built quickly or at the edges of a comb, where the packing is less even, the hexagons are noticeably less regular, and some cells have five or seven sides. A true geometric instinct would not make such errors. The imperfections are exactly what one would expect if the shape emerges from physical forces rather than design.

The honeycomb, then, is a reminder that the elegant order we admire in nature need not be the product of intention. Sometimes it is enough for a simple behaviour to meet the indifferent laws of physics.`,
        questions: [
          {
            id: 'rd-002-p2-q8',
            type: 'mcq',
            prompt: 'Why is the hexagon an efficient shape for a honeycomb cell?',
            options: [
              'It is the strongest shape against the weight of honey.',
              'It encloses the largest area using the least wall material.',
              'It is the easiest shape for a bee to build quickly.',
              'It allows cells to be stacked in more than one layer.',
            ],
            correctIndex: 1,
            explanation:
              'The second paragraph states that the hexagon "encloses the largest area for the least amount of wall." Option B matches this directly; the other options are not given as the reason.',
          },
          {
            id: 'rd-002-p2-q9',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Producing wax from their own bodies costs bees a great deal of _______, so using less material is a valuable saving.',
            acceptableAnswers: ['energy'],
            explanation:
              'The second paragraph describes wax as produced "at considerable energetic cost." The completion word that fits the noun slot is "energy" (the adjective in the text is "energetic").',
          },
          {
            id: 'rd-002-p2-q10',
            type: 'tfng',
            prompt:
              'The passage states that each individual bee calculates the angles of the cells it builds.',
            answer: 'false',
            explanation:
              'The third paragraph explicitly says "this does not mean each bee is calculating angles" and that "the mathematics is performed not by the bee but by the physics of the wax itself." The statement contradicts this, so it is False.',
          },
          {
            id: 'rd-002-p2-q11',
            type: 'gap',
            prompt:
              'Complete the summary with ONE word from the passage: Bees begin by building roughly _______ cells and packing them tightly together.',
            acceptableAnswers: ['circular', 'round'],
            explanation:
              'The third paragraph says "bees first build cells that are roughly circular." The expected answer is "circular"; "round" is accepted as an equivalent.',
          },
          {
            id: 'rd-002-p2-q12',
            type: 'mcq',
            prompt:
              'According to the passage, what pulls the soft wax walls into a hexagonal grid?',
            options: [
              'The weight of the honey stored in the cells',
              'The careful shaping done by the bees’ legs',
              'Surface tension acting while the wax is semi-liquid',
              'The cooling of the wax as the bees leave the comb',
            ],
            correctIndex: 2,
            explanation:
              'The third paragraph explains that in the "semi-liquid state the walls are pulled by surface tension into the most stable arrangement available." Option C is correct.',
          },
          {
            id: 'rd-002-p2-q13',
            type: 'tfng',
            prompt:
              'Cells built quickly or at the edges of a comb tend to be less regular in shape.',
            answer: 'true',
            explanation:
              'The fourth paragraph reports that in cells "built quickly or at the edges of a comb... the hexagons are noticeably less regular, and some cells have five or seven sides." This supports the statement, so it is True.',
          },
          {
            id: 'rd-002-p2-q14',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The author argues that the order seen in a honeycomb is not the product of _______ but of physical forces.',
            acceptableAnswers: ['intention', 'design'],
            explanation:
              'The final paragraph states the honeycomb shows "the elegant order we admire in nature need not be the product of intention," contrasting it earlier with shapes that "emerge from physical forces rather than design." Both "intention" and "design" fit.',
          },
        ],
      },
    ],
  },
  // ── General Training reading tests (track: 'general') ────────────────────
  ...GT_READING_SET_1,
  ...GT_READING_SET_2,
  ...GT_READING_SET_3,
]
