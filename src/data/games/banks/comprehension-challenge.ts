import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Comprehension Challenge: read a short unseen passage, then answer five
 * multiple-choice questions on it (inference, language, structure and
 * evaluation). A round plays all six passages in a random order.
 *
 * Moved out of src/app/games/comprehension-challenge/page.tsx on 16 October
 * 2026, when every answer gained an explanation
 * (src/lib/games/explanations/types.ts).
 *
 * The passages keep the shape the page plays them in, each holding its five
 * questions. BANK.items is the same 30 questions as one list, each with its
 * passage, keyed by the passage title and the prompt together: a prompt such
 * as "How effectively does the writer..." is unique only within its passage.
 *
 * WHAT WAS WRONG WITH THE QUESTIONS (found writing those explanations, with
 * every question read against its passage and each of its options):
 *
 *   - The Storm, "How effectively does the writer create a sense of
 *     isolation?": the right answer quoted "three days alone" and "silence
 *     between storms", words the passage does not contain. It now quotes
 *     "alone in this house for three days" and "the silence between the
 *     storms".
 *   - The Storm: the prompt called "She had been alone in this house for three
 *     days now" a short sentence. It is the first clause of a 23-word sentence
 *     that goes on "and the silence between the storms...", so the prompt now
 *     calls it a clause.
 *   - The Letter, "each one a small monument to absence": the distractor "The
 *     tin box is like a graveyard" was a fair reading (monuments mark the dead,
 *     and the box holds them), so a student who saw it was marked wrong. It is
 *     now "The letters describe a war memorial", a literal misreading.
 *   - Screen Time, "How effectively does the writer use rhetorical devices to
 *     persuade?": the right answer named rhetorical questions, and the passage
 *     asks none. It now names the rule of three, which the passage uses three
 *     times.
 *   - The Garden was labelled "Poetry Analysis". It is descriptive prose, not a
 *     poem and not an analysis, and is now labelled "Descriptive Prose".
 *   - The Garden, "How effectively does the writer use extended metaphor...?":
 *     the right answer ended "creating a cohesive allegorical reading". The
 *     passage is not an allegory (Vocabulary Builder's own definition is a
 *     story with a hidden moral or political meaning; this one states its
 *     lesson outright). It now ends "creating a cohesive image that earns the
 *     closing lesson".
 *   - The Interview: the distractor "Bored and disinterested" used
 *     "disinterested", which means impartial, for "uninterested". It now reads
 *     "Bored and uninterested".
 *
 * Nothing else in the passages, prompts or options changed, and every
 * question's right answer is still the option it was.
 */

export type QuestionType = 'inference' | 'language' | 'structure' | 'comparison' | 'evaluation'

export interface CompQuestion {
  type: QuestionType
  prompt: string
  options: string[]
  correctIndex: number
}

export interface Passage {
  title: string
  genre: string
  text: string
  questions: CompQuestion[]
}

export const PASSAGE_BANK: Passage[] = [
  {
    title: 'The Storm',
    genre: 'Gothic Fiction',
    text: 'The sky darkened as if a great curtain had been drawn across the heavens. Thunder rolled across the moors, each clap louder than the last, shaking the very foundations of the old house. Eleanor pressed her face to the window, watching the rain lash against the glass like a thousand tiny fists. The candle behind her flickered, casting dancing shadows across the peeling wallpaper. She had been alone in this house for three days now, and the silence between the storms was worse than the noise itself. Every creak of the floorboards made her heart stammer. She told herself it was the wind, only the wind, but the footsteps she heard at midnight had sounded too deliberate, too measured, to belong to any storm.',
    questions: [
      {
        type: 'inference',
        prompt: "What can we infer about Eleanor's state of mind?",
        options: [
          'She is relaxed and content',
          'She is anxious and fearful',
          'She is bored and indifferent',
          'She is excited by the storm',
        ],
        correctIndex: 1,
      },
      {
        type: 'language',
        prompt: 'What effect does the simile "like a thousand tiny fists" create?',
        options: [
          'It suggests the rain is gentle',
          'It personifies the rain as violent and aggressive',
          'It shows the window is fragile',
          'It creates a sense of warmth',
        ],
        correctIndex: 1,
      },
      {
        type: 'structure',
        prompt: 'Why does the writer save the detail about footsteps until the end?',
        options: [
          'Because she forgot to mention it earlier',
          'To create a climactic reveal that heightens tension',
          'To show the passage of time',
          'Because footsteps are unimportant',
        ],
        correctIndex: 1,
      },
      {
        type: 'evaluation',
        prompt: 'How effectively does the writer create a sense of isolation?',
        options: [
          'Not effectively - the storm provides company',
          'Very effectively - details like "alone in this house for three days" and "the silence between the storms" build a vivid sense of loneliness',
          'Somewhat - but Eleanor seems comfortable',
          'Poorly - the house sounds welcoming',
        ],
        correctIndex: 1,
      },
      {
        type: 'language',
        prompt:
          'What is the effect of the clause "She had been alone in this house for three days now"?',
        options: [
          'It speeds up the pace',
          'It emphasises the duration of her isolation as a stark, matter-of-fact statement',
          'It creates humour',
          'It shows she is counting incorrectly',
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    title: 'The Market',
    genre: 'Descriptive Non-fiction',
    text: 'Borough Market at dawn is a symphony of preparation. Stallholders arrive in the blue half-light, their breath visible in the cold air, hauling crates of produce that gleam with morning dew. The fishmonger arranges his silver catch in neat rows, each mackerel a small mirror reflecting the strip lights above. Somewhere a radio plays, half-drowned by the clatter of metal shutters being rolled up. By seven, the first customers appear: chefs in checked trousers, moving with purpose, squeezing avocados and sniffing bunches of coriander with the concentration of surgeons. The air thickens with the smell of fresh bread, roasting coffee, and something sweet - perhaps the doughnuts from the stall on the corner, already drawing a small, patient queue.',
    questions: [
      {
        type: 'language',
        prompt: 'Why does the writer describe the market as "a symphony"?',
        options: [
          'Because there is live music',
          'To suggest the sounds work together harmoniously, creating a sense of orchestrated activity',
          'Because it is very loud',
          'To show it is chaotic',
        ],
        correctIndex: 1,
      },
      {
        type: 'inference',
        prompt: 'What can we infer about the chefs from their description?',
        options: [
          'They are inexperienced',
          'They are professional and selective about quality',
          'They are in a rush and careless',
          'They do not enjoy their work',
        ],
        correctIndex: 1,
      },
      {
        type: 'structure',
        prompt: 'How does the writer organise this passage?',
        options: [
          'By comparing two different markets',
          'Chronologically, from dawn preparations to the arrival of customers',
          'By listing prices of items',
          'Through dialogue between characters',
        ],
        correctIndex: 1,
      },
      {
        type: 'language',
        prompt: 'What effect does the metaphor "each mackerel a small mirror" create?',
        options: [
          'It shows fish are expensive',
          'It creates a vivid visual image emphasising the freshness and sheen of the fish',
          'It suggests the fish are still alive',
          'It shows poor lighting in the market',
        ],
        correctIndex: 1,
      },
      {
        type: 'evaluation',
        prompt: 'How does the writer appeal to the senses throughout the passage?',
        options: [
          'Only through visual description',
          'Through sight, sound, smell, and touch - creating an immersive, multi-sensory experience',
          'Mainly through taste',
          'The passage lacks sensory detail',
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    title: 'The Letter',
    genre: 'Historical Fiction',
    text: 'Thomas folded the letter carefully, pressing the creases with his thumbnail until the paper was a perfect square. He had read it four times, and each reading had drained a little more colour from his face. His sister was not coming home. The regiment had moved north, she had written, and the field hospital moved with it. She would not leave the wounded. Thomas understood this - he had always known Mary was braver than him - but understanding did not lessen the hollow ache in his chest. He placed the letter in the tin box under his bed, alongside the others, each one a small monument to absence. Outside, the factory whistle blew, summoning him back to the looms, back to the noise that was almost loud enough to drown out thought.',
    questions: [
      {
        type: 'inference',
        prompt: 'What time period is this passage set in?',
        options: [
          'Modern day',
          'The future',
          'During a war, likely WWI or WWII, in an industrial town',
          'Medieval times',
        ],
        correctIndex: 2,
      },
      {
        type: 'language',
        prompt: 'What does the metaphor "each one a small monument to absence" suggest?',
        options: [
          'The letters are very large',
          'Each letter is a permanent reminder of Mary being gone, elevating her absence to something almost sacred',
          'He has too many letters',
          'The letters describe a war memorial',
        ],
        correctIndex: 1,
      },
      {
        type: 'structure',
        prompt: 'Why does the writer end with the factory whistle?',
        options: [
          'To show Thomas is late for work',
          'To contrast the emotional, private moment with the harsh demands of industrial life',
          'To create a happy ending',
          'Because the passage is about factories',
        ],
        correctIndex: 1,
      },
      {
        type: 'inference',
        prompt: 'What does "braver than him" suggest about Thomas\'s view of himself?',
        options: [
          'He thinks he is very brave',
          'He feels inadequate compared to his sister and perhaps guilty for not serving',
          'He does not care about the war',
          'He wants to be a soldier',
        ],
        correctIndex: 1,
      },
      {
        type: 'evaluation',
        prompt: 'How effectively does the writer convey the theme of loss?',
        options: [
          'Poorly - Thomas seems happy',
          'Very effectively - through physical details like draining colour, the hollow ache, and the accumulating letters',
          'Somewhat - but the passage is too short',
          'Not at all - there is no loss in the passage',
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    title: 'Screen Time',
    genre: 'Persuasive Article',
    text: "We are raising a generation of children who cannot look up from their screens. Walk through any restaurant, any waiting room, any playground, and you will see the same haunting scene: small faces illuminated by the blue glow of tablets, thumbs scrolling with the mechanical rhythm of factory workers on an assembly line. These children are not playing. They are not imagining. They are consuming - endlessly, passively, silently. Some will argue that technology is a tool, and that is true. A hammer is also a tool, but we do not hand one to a toddler and walk away. The question is not whether screens have value, but whether we have the courage to set boundaries. Every hour spent watching someone else's life on a screen is an hour not spent living your own.",
    questions: [
      {
        type: 'language',
        prompt:
          'What effect does the rule of three "not playing... not imagining... consuming" create?',
        options: [
          'It creates a list of fun activities',
          'It builds a rhythmic emphasis, each phrase escalating the criticism of passive screen use',
          'It shows children have many hobbies',
          'It creates a sense of balance',
        ],
        correctIndex: 1,
      },
      {
        type: 'structure',
        prompt:
          'Why does the writer use the counter-argument "Some will argue that technology is a tool"?',
        options: [
          'Because they agree with it',
          'To acknowledge the opposing view before undermining it, strengthening their own argument',
          'Because they have no opinion',
          'To end the article on a balanced note',
        ],
        correctIndex: 1,
      },
      {
        type: 'language',
        prompt:
          'What is the effect of comparing children to "factory workers on an assembly line"?',
        options: [
          'It shows children are productive',
          'It dehumanises the children, suggesting their screen use is repetitive, mindless, and mechanical',
          'It is a compliment to their focus',
          'It suggests they will get good jobs',
        ],
        correctIndex: 1,
      },
      {
        type: 'inference',
        prompt: "What is the writer's attitude towards parents?",
        options: [
          'Admiration',
          'Critical - implying parents are failing to set boundaries',
          'Neutral',
          'Supportive and encouraging',
        ],
        correctIndex: 1,
      },
      {
        type: 'evaluation',
        prompt: 'How effectively does the writer use rhetorical devices to persuade?',
        options: [
          'Poorly - the argument is weak',
          'Very effectively - combining emotive imagery, analogy, the rule of three and direct address to create a compelling case',
          'The passage does not try to persuade',
          'Only through statistics',
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    title: 'The Garden',
    genre: 'Descriptive Prose',
    text: 'The old garden slept beneath a quilt of frost, each blade of grass a needle of white crystal. The pond had sealed itself shut, a dark eye refusing to blink. Along the wall, the ivy had tightened its grip, knuckles of green pressing into ancient brick. Nothing moved except the robin, that small defiance of colour against the grey, hopping from post to post as if conducting an orchestra only it could hear. In spring, this place would riot with colour. But now it waited. The patience of a garden in winter is a lesson most humans never learn: that stillness is not emptiness, and silence is not the same as having nothing to say.',
    questions: [
      {
        type: 'language',
        prompt:
          'What does the personification of the pond as "a dark eye refusing to blink" suggest?',
        options: [
          'The pond is clean',
          'The frozen pond appears watchful and still, creating an eerie, almost sentient quality',
          'The pond is very deep',
          'There are fish in the pond',
        ],
        correctIndex: 1,
      },
      {
        type: 'language',
        prompt: 'How does the writer present the robin?',
        options: [
          'As a threat to the garden',
          'As a small, vivid contrast to the winter landscape - a symbol of life persisting',
          'As a nuisance',
          'As part of the frost',
        ],
        correctIndex: 1,
      },
      {
        type: 'structure',
        prompt: 'Why does the writer shift to spring at the end?',
        options: [
          'To change the topic',
          'To contrast winter stillness with the promise of renewal, suggesting cycles of nature',
          'Because they prefer summer',
          'To introduce new characters',
        ],
        correctIndex: 1,
      },
      {
        type: 'inference',
        prompt: 'What broader message does the final sentence convey?',
        options: [
          'Gardens are better than people',
          'That patience and quiet reflection have value, and humans often mistake stillness for inactivity',
          'That winter is the best season',
          'That people should garden more',
        ],
        correctIndex: 1,
      },
      {
        type: 'evaluation',
        prompt: 'How effectively does the writer use extended metaphor throughout the passage?',
        options: [
          'There are no metaphors',
          'Very effectively - the garden is consistently personified as a living, patient being, creating a cohesive image that earns the closing lesson',
          'Somewhat - but the metaphors are confusing',
          'Poorly - the metaphors are mixed',
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    title: 'The Interview',
    genre: 'Modern Fiction',
    text: 'Priya smoothed the front of her blazer for the fourth time and checked her reflection in the lift doors. The woman staring back looked composed, professional, exactly the kind of person who belonged in a building with marble floors and receptionists who said "How may I direct you?" But inside, Priya\'s stomach was a washing machine on spin cycle. She had rehearsed her answers until they felt like someone else\'s words. "My greatest weakness is that I care too much about quality." Who actually said things like that? She stepped out onto the fourteenth floor. The corridor was silent except for the hum of air conditioning and the soft click of her heels on polished concrete. A door opened. A man in a grey suit smiled and extended his hand. "Priya? We\'ve been looking forward to meeting you." She shook his hand. Her palm was dry. That, at least, was a small victory.',
    questions: [
      {
        type: 'inference',
        prompt: 'How does Priya really feel about the interview?',
        options: [
          'Confident and relaxed',
          'Nervous despite her composed exterior',
          'Angry and resentful',
          'Bored and uninterested',
        ],
        correctIndex: 1,
      },
      {
        type: 'language',
        prompt:
          'What effect does the metaphor "stomach was a washing machine on spin cycle" create?',
        options: [
          'It shows she is hungry',
          'It vividly conveys the churning, uncontrollable physical sensation of anxiety through a relatable domestic image',
          'It suggests she does laundry often',
          'It shows she is ill',
        ],
        correctIndex: 1,
      },
      {
        type: 'structure',
        prompt:
          "How does the writer create contrast between Priya's external appearance and internal state?",
        options: [
          'Through dialogue only',
          'By juxtaposing her composed reflection with internal thoughts full of anxiety and self-doubt',
          'There is no contrast',
          'Through flashbacks',
        ],
        correctIndex: 1,
      },
      {
        type: 'language',
        prompt: 'Why is "Her palm was dry" described as "a small victory"?',
        options: [
          'Because she dislikes water',
          'Because a sweaty handshake would betray her nerves - maintaining dry hands means her anxiety remains hidden',
          'Because the office is hot',
          'Because she washed her hands',
        ],
        correctIndex: 1,
      },
      {
        type: 'evaluation',
        prompt: 'How effectively does the writer make Priya a relatable character?',
        options: [
          'Not at all - she is too confident',
          'Very effectively - the gap between outward composure and inner turmoil captures a universally relatable experience of performing competence',
          'Somewhat - but we learn nothing about her',
          'Poorly - the passage is too short',
        ],
        correctIndex: 1,
      },
    ],
  },
]

/** One question, with the passage it is asked about. */
export interface ComprehensionItem {
  passage: Passage
  question: CompQuestion
}

/** Every question as one list, passage by passage, in the order written. */
export const QUESTIONS: ComprehensionItem[] = PASSAGE_BANK.flatMap((passage) =>
  passage.questions.map((question) => ({ passage, question })),
)

export const BANK: GameBank<ComprehensionItem> = {
  slug: 'comprehension-challenge',
  items: QUESTIONS,
  // Prompts such as "How effectively does the writer..." recur from passage to
  // passage, so the key is the passage title and the prompt together.
  key: ({ passage, question }) => `${passage.title}: ${question.prompt}`,
  answer: ({ question }) => question.options[question.correctIndex],
  options: ({ question }) => question.options,
  tag: ({ question }) => question.type,
}
