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

export const READING_TESTS: ReadingTest[] = [
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
]
