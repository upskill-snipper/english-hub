import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Reading Detective: read a short original passage, then answer three
 * multiple-choice questions on it, some found in the text ("Find it",
 * retrieval) and some worked out from it ("Work it out", inference).
 *
 * Moved out of src/app/games/reading-detective/page.tsx on 16 October 2026,
 * when every answer gained an explanation (src/lib/games/explanations/types.ts).
 * The page deals whole passages; the bank lists their 36 questions one by one,
 * each with its passage.
 *
 * WHAT WAS WRONG WITH THE QUESTIONS (found writing those explanations):
 *
 *   - "What name is given to scientists who study volcanoes?" offered
 *     Geologists beside Volcanologists, and a volcanologist is a geologist, so
 *     a student who knew that was marked wrong. Geologists is now
 *     Meteorologists;
 *   - "What should you do after folding the paper in half lengthways?"
 *     offered "Fold the wings", which the instructions also have you do after
 *     that fold, later on. It is now "Fold it in half again";
 *   - the right answer to "Why was the narrator so curious about the drawer?"
 *     read "It was being forbidden made it tempting", which is not a sentence.
 *     It is now "Being forbidden made it tempting";
 *   - four questions whose answers the passage states in so many words were
 *     labelled "Work it out" (inference): why volcanologists monitor warning
 *     signs, the kind of throw, how Ana felt at first ("doubted") and why to
 *     avoid taps. They are now "Find it" (retrieval), which is also the skill
 *     the student's account records for them.
 *
 * The passages and the other questions are unchanged. Each question's
 * one-line "how we know", shown under the answer, gave way to its explanation
 * (src/data/games/explanations/reading-detective.ts) and is not carried here;
 * two of them misquoted their passage.
 *
 * THE OPTIONS WERE NEVER SHUFFLED (found by the second reader, 16 October
 * 2026). The page shuffled the passages but showed each question's options in
 * the order written here, and the right answer is written first 17 times,
 * second 16, third 3 and fourth never. A student who always picked the first
 * or second option did well without reading. Speed Analysis had the same
 * fault and was fixed on 13 October 2026. The page now shuffles each
 * question's options per attempt with the site's shared helper
 * (src/lib/quiz/shuffle.ts) and marks a click by the option itself, not by its
 * position. The order here is unchanged, and `answer` still names the right
 * option as written; the same option is right wherever it is shown.
 */

export type QType = 'retrieval' | 'inference'

export interface Question {
  prompt: string
  options: string[]
  /** index into options of the correct answer */
  answer: number
  type: QType
}

export interface Passage {
  kind: string
  title: string
  text: string
  questions: Question[]
}

// All passages and questions below are 100% original. Any facts referenced are
// well-known and true, or the passage is clearly fictional.
export const PASSAGES: Passage[] = [
  {
    kind: 'Story snippet',
    title: 'The Last Bus',
    text: 'Mara checked her watch for the third time. The 17:40 should have arrived eight minutes ago, and the sky was turning the colour of cold tea. She had spent her last coins on a sandwich at lunch, so a taxi was out of the question. When a pair of headlights finally swung round the corner, she stood up so quickly that her bag slid off the bench.',
    questions: [
      {
        prompt: 'How many times had Mara checked her watch?',
        options: ['Once', 'Twice', 'Three times', 'Eight times'],
        answer: 2,
        type: 'retrieval',
      },
      {
        prompt: 'Why could Mara not take a taxi?',
        options: [
          'She had no money left',
          'There were no taxis nearby',
          'She disliked taxis',
          'The taxi was full',
        ],
        answer: 0,
        type: 'inference',
      },
      {
        prompt: 'How does Mara most likely feel when the headlights appear?',
        options: ['Bored', 'Relieved and eager', 'Angry', 'Sleepy'],
        answer: 1,
        type: 'inference',
      },
    ],
  },
  {
    kind: 'Fact box',
    title: 'The Honey Bee',
    text: 'A single honey bee will produce only about a twelfth of a teaspoon of honey in its entire life. To make one jar, thousands of bees must visit millions of flowers. Bees communicate the direction of food by performing a movement scientists call the "waggle dance". Without bees and other pollinators, many of the fruits and vegetables we eat would become far harder to grow.',
    questions: [
      {
        prompt: 'How much honey does one bee make in its whole life?',
        options: [
          'About a twelfth of a teaspoon',
          'A full teaspoon',
          'One jar',
          'A million teaspoons',
        ],
        answer: 0,
        type: 'retrieval',
      },
      {
        prompt: 'What is the "waggle dance" used for?',
        options: [
          'To rest the bees',
          'To show the direction of food',
          'To clean the hive',
          'To scare predators',
        ],
        answer: 1,
        type: 'retrieval',
      },
      {
        prompt: 'What does the passage suggest would happen if bees disappeared?',
        options: [
          'Honey would taste sweeter',
          'Growing many foods would be much harder',
          'Flowers would grow faster',
          'Nothing would change',
        ],
        answer: 1,
        type: 'inference',
      },
    ],
  },
  {
    kind: 'Instructions',
    title: 'Repotting a Plant',
    text: 'Before you begin, water the plant lightly an hour ahead so the soil holds together. Choose a new pot only one size larger than the old one; a pot that is too big can lead to soggy roots. Gently tip the plant out, loosen the tangled roots with your fingers, and place it in fresh compost. Finally, press the soil down softly and water it once more.',
    questions: [
      {
        prompt: 'When should you water the plant before starting?',
        options: ['An hour before', 'A day before', 'A week before', 'Never'],
        answer: 0,
        type: 'retrieval',
      },
      {
        prompt: 'Why should the new pot be only one size larger?',
        options: [
          'It looks neater',
          'A pot too big can cause soggy roots',
          'It is cheaper',
          'It is easier to carry',
        ],
        answer: 1,
        type: 'retrieval',
      },
      {
        prompt: 'What can you infer about the plant’s roots before repotting?',
        options: [
          'They are tangled and crowded',
          'They are completely dry',
          'They have been removed',
          'They are painted',
        ],
        answer: 0,
        type: 'inference',
      },
    ],
  },
  {
    kind: 'Blog post',
    title: 'My First Coding Club',
    text: 'I almost did not go. I imagined a room full of experts who would laugh at my questions. Instead, the leader handed me a sticky note and said everyone there had once been a beginner. By the end, my little program made a cat picture move across the screen. I walked home grinning, already planning what to build next week.',
    questions: [
      {
        prompt: 'What did the leader hand the writer?',
        options: ['A laptop', 'A sticky note', 'A book', 'A cat'],
        answer: 1,
        type: 'retrieval',
      },
      {
        prompt: 'Why did the writer almost not go?',
        options: [
          'They were too tired',
          'They feared being laughed at',
          'They had no transport',
          'They were ill',
        ],
        answer: 1,
        type: 'inference',
      },
      {
        prompt: 'How does the writer feel by the end?',
        options: ['Disappointed', 'Excited and confident', 'Frightened', 'Confused'],
        answer: 1,
        type: 'inference',
      },
    ],
  },
  {
    kind: 'Story snippet',
    title: 'The Locked Drawer',
    text: 'Dad had told us never to touch the bottom drawer of his desk, so of course it was all I could think about. One rainy afternoon I found the small brass key hidden under a pot of pencils. My hands were shaking as I turned it. Inside there were no jewels or secrets, only a faded photograph of a boy who looked exactly like me.',
    questions: [
      {
        prompt: 'Where was the brass key hidden?',
        options: ['Under a pot of pencils', 'In Dad’s coat', 'Behind a book', 'In the drawer'],
        answer: 0,
        type: 'retrieval',
      },
      {
        prompt: 'What was actually inside the drawer?',
        options: ['Jewels', 'Money', 'A faded photograph', 'A letter'],
        answer: 2,
        type: 'retrieval',
      },
      {
        prompt: 'Why was the narrator so curious about the drawer?',
        options: [
          'Being forbidden made it tempting',
          'It was always open',
          'A friend dared them',
          'It made a strange noise',
        ],
        answer: 0,
        type: 'inference',
      },
    ],
  },
  {
    kind: 'Fact box',
    title: 'Volcanoes',
    text: 'A volcano is an opening in the Earth’s surface through which melted rock, ash and gases can escape. Melted rock below the ground is called magma; once it reaches the surface it is called lava. Not all volcanoes erupt violently - some release lava slowly and steadily for years. Scientists who study volcanoes are known as volcanologists, and they monitor warning signs to help keep nearby towns safe.',
    questions: [
      {
        prompt: 'What is melted rock called once it reaches the surface?',
        options: ['Magma', 'Lava', 'Ash', 'Gas'],
        answer: 1,
        type: 'retrieval',
      },
      {
        prompt: 'What name is given to scientists who study volcanoes?',
        options: ['Meteorologists', 'Biologists', 'Volcanologists', 'Astronomers'],
        answer: 2,
        type: 'retrieval',
      },
      {
        prompt: 'Why do volcanologists monitor warning signs?',
        options: [
          'To help keep nearby towns safe',
          'To collect lava samples for fun',
          'To stop volcanoes erupting',
          'To name new volcanoes',
        ],
        answer: 0,
        type: 'retrieval',
      },
    ],
  },
  {
    kind: 'Instructions',
    title: 'Making a Paper Aeroplane',
    text: 'Take a clean sheet of A4 paper and fold it exactly in half lengthways, then open it out again so a crease remains. Fold the top two corners in to meet the centre line, forming a sharp point. Fold each side down to make the wings, keeping both sides even so the plane flies straight. Hold it under the wings and launch it with a gentle, level throw.',
    questions: [
      {
        prompt: 'What should you do after folding the paper in half lengthways?',
        options: [
          'Open it out again',
          'Tear it in two',
          'Fold it in half again',
          'Throw it at once',
        ],
        answer: 0,
        type: 'retrieval',
      },
      {
        prompt: 'Why must both sides be kept even?',
        options: [
          'So the plane flies straight',
          'So it looks colourful',
          'So it is heavier',
          'So it folds faster',
        ],
        answer: 0,
        type: 'retrieval',
      },
      {
        prompt: 'What kind of throw does the text recommend?',
        options: [
          'A hard upward throw',
          'A gentle, level throw',
          'A spinning throw',
          'A downward throw',
        ],
        answer: 1,
        type: 'retrieval',
      },
    ],
  },
  {
    kind: 'Blog post',
    title: 'Why I Switched Off Notifications',
    text: 'For months my phone buzzed every few minutes, and I felt I had to reply at once. Last weekend I turned every notification off and left the phone in another room while I read. At first I kept reaching for a phone that was not there. By Sunday evening I had finished an entire book and felt strangely calm - something I had not felt in a long time.',
    questions: [
      {
        prompt: 'Where did the writer leave their phone while reading?',
        options: ['In their pocket', 'In another room', 'On the table', 'In a bag'],
        answer: 1,
        type: 'retrieval',
      },
      {
        prompt: 'What does "kept reaching for a phone that was not there" suggest?',
        options: [
          'The writer had a habit hard to break',
          'The writer lost their phone',
          'The phone was broken',
          'The writer had two phones',
        ],
        answer: 0,
        type: 'inference',
      },
      {
        prompt: 'How did the writer feel by Sunday evening?',
        options: ['Anxious', 'Strangely calm', 'Bored', 'Annoyed'],
        answer: 1,
        type: 'retrieval',
      },
    ],
  },
  {
    kind: 'Story snippet',
    title: 'The Marble Race',
    text: 'Tomas had built the track himself out of cardboard tubes taped along the staircase. His little sister Ana doubted it would work and folded her arms. He let the blue marble go; it rattled, dropped, looped, and shot off the final ramp straight into the waiting cup. Ana’s arms slowly unfolded, and a grin spread across her face.',
    questions: [
      {
        prompt: 'What did Tomas build the track from?',
        options: ['Wood', 'Cardboard tubes', 'Metal pipes', 'Plastic bricks'],
        answer: 1,
        type: 'retrieval',
      },
      {
        prompt: 'How did Ana feel about the track at first?',
        options: ['Excited', 'Doubtful', 'Frightened', 'Proud'],
        answer: 1,
        type: 'retrieval',
      },
      {
        prompt: 'What does Ana’s grin at the end show?',
        options: [
          'She was now impressed',
          'She was still doubtful',
          'She was tired',
          'She was upset',
        ],
        answer: 0,
        type: 'inference',
      },
    ],
  },
  {
    kind: 'Fact box',
    title: 'The River Nile',
    text: 'The Nile is one of the longest rivers in the world and flows northwards through north-eastern Africa. For thousands of years its yearly floods left rich, dark soil along its banks, allowing farmers to grow crops in an otherwise dry land. Many ancient towns and cities grew up close to the water. Today the river is still vital, providing water and transport for millions of people.',
    questions: [
      {
        prompt: 'In which direction does the Nile flow?',
        options: ['Southwards', 'Northwards', 'Eastwards', 'Westwards'],
        answer: 1,
        type: 'retrieval',
      },
      {
        prompt: 'Why did the yearly floods help farmers?',
        options: [
          'They left rich, dark soil',
          'They washed crops away',
          'They cooled the air',
          'They created roads',
        ],
        answer: 0,
        type: 'retrieval',
      },
      {
        prompt: 'Why did many ancient towns grow up near the Nile?',
        options: [
          'The water made the land good for living and farming',
          'It was the only flat land',
          'It was always cold there',
          'There were no animals',
        ],
        answer: 0,
        type: 'inference',
      },
    ],
  },
  {
    kind: 'Instructions',
    title: 'Staying Safe in a Storm',
    text: 'If you are outdoors when a thunderstorm begins, do not shelter under a tall, lone tree, as it can attract lightning. Move quickly to a building or a car with a solid roof. Once inside, stay away from windows and avoid using taps, since pipes can carry an electrical charge. Wait until at least thirty minutes after the last thunder before going back outside.',
    questions: [
      {
        prompt: 'How long should you wait after the last thunder?',
        options: ['Five minutes', 'At least thirty minutes', 'Two hours', 'No need to wait'],
        answer: 1,
        type: 'retrieval',
      },
      {
        prompt: 'Why should you avoid sheltering under a lone tree?',
        options: [
          'It can attract lightning',
          'It is uncomfortable',
          'It blocks the view',
          'It is too far away',
        ],
        answer: 0,
        type: 'retrieval',
      },
      {
        prompt: 'Why does the text say to avoid using taps?',
        options: [
          'Pipes can carry an electrical charge',
          'The water may be dirty',
          'It wastes water',
          'It makes noise',
        ],
        answer: 0,
        type: 'retrieval',
      },
    ],
  },
  {
    kind: 'Blog post',
    title: 'Learning to Cook',
    text: 'When I moved into my own flat, I could barely boil an egg. My first attempt at pasta ended with a smoke alarm and a very hard lump in the pan. Rather than giving up, I watched my grandmother carefully the next time I visited and wrote down every step. A month later, I cooked a meal for friends and nobody guessed it was only my fifth attempt.',
    questions: [
      {
        prompt: 'What happened during the first pasta attempt?',
        options: ['It was delicious', 'A smoke alarm went off', 'Guests arrived', 'The pan broke'],
        answer: 1,
        type: 'retrieval',
      },
      {
        prompt: 'What did the writer do to improve?',
        options: [
          'Watched their grandmother and wrote down steps',
          'Bought ready meals',
          'Gave up cooking',
          'Ate out every day',
        ],
        answer: 0,
        type: 'retrieval',
      },
      {
        prompt: 'What can you infer from "nobody guessed it was only my fifth attempt"?',
        options: [
          'The writer had improved a lot',
          'The meal was a failure',
          'The friends did not eat',
          'The writer cooked daily',
        ],
        answer: 0,
        type: 'inference',
      },
    ],
  },
]

/** One question with the passage it is asked about: what the bank lists. */
export interface PassageQuestion {
  passage: Passage
  question: Question
}

export const BANK: GameBank<PassageQuestion> = {
  slug: 'reading-detective',
  // Every question in one list, passage by passage, each with its passage.
  items: PASSAGES.flatMap((passage) =>
    passage.questions.map((question) => ({ passage, question })),
  ),
  // No two prompts repeat, but a prompt such as "How does the writer feel by
  // the end?" names its question only beside its passage, so the key has both.
  key: ({ passage, question }) => `${passage.title}: ${question.prompt}`,
  answer: ({ question }) => question.options[question.answer],
  options: ({ question }) => question.options,
  tag: ({ question }) => question.type,
}
