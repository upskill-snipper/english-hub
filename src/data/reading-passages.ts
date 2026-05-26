// ─── Reading Assessment Passages ─────────────────────────────────────────────
// Graded passages from Year 3 (age ~7-8) to Year 13 (age ~17-18)
// Each passage includes comprehension questions (multiple choice + short answer)
// Passages cover fiction and non-fiction across increasing difficulty levels.
// ──────────────────────────────────────────────────────────────────────────────

export type QuestionType = 'multiple-choice' | 'short-answer'

export interface AnswerOption {
  id: string
  text: string
}

export interface ComprehensionQuestion {
  id: string
  type: QuestionType
  question: string
  /** For multiple-choice questions */
  options?: AnswerOption[]
  /** Correct answer - option id for MC, keyword(s) for short-answer */
  correctAnswer: string
  /** Alternative acceptable keywords for short-answer scoring */
  acceptableKeywords?: string[]
  /** Whether this tests literal (retrieval) or inferential comprehension */
  skill: 'literal' | 'inferential' | 'evaluative' | 'vocabulary'
  /** Points awarded for correct answer */
  points: number
}

export interface ReadingPassage {
  id: string
  level: number // 1-10 difficulty
  yearGroup: string // e.g. "Year 3", "Year 7"
  ageRange: string // e.g. "7-8"
  title: string
  genre: 'fiction' | 'non-fiction'
  /** Approximate word count - used for fluency calculation */
  wordCount: number
  text: string
  questions: ComprehensionQuestion[]
  /** Expected reading time in seconds for age-appropriate reader */
  expectedReadingTimeSeconds: number
}

export interface DecodingWord {
  id: string
  word: string
  isReal: boolean // true = real word, false = pseudo-word
  level: number // 1-10 difficulty
  phonicPattern: string // e.g. "CVC", "CCVC", "split digraph"
}

// ─── Decoding Word Lists ─────────────────────────────────────────────────────

export const DECODING_WORDS: DecodingWord[] = [
  // Level 1 - CVC words (Year 1-2)
  { id: 'd1', word: 'cat', isReal: true, level: 1, phonicPattern: 'CVC' },
  { id: 'd2', word: 'bim', isReal: false, level: 1, phonicPattern: 'CVC' },
  { id: 'd3', word: 'dog', isReal: true, level: 1, phonicPattern: 'CVC' },
  { id: 'd4', word: 'teg', isReal: false, level: 1, phonicPattern: 'CVC' },
  { id: 'd5', word: 'sun', isReal: true, level: 1, phonicPattern: 'CVC' },
  { id: 'd6', word: 'mup', isReal: false, level: 1, phonicPattern: 'CVC' },

  // Level 2 - CCVC / CVCC (Year 2-3)
  { id: 'd7', word: 'stop', isReal: true, level: 2, phonicPattern: 'CCVC' },
  { id: 'd8', word: 'brap', isReal: false, level: 2, phonicPattern: 'CCVC' },
  { id: 'd9', word: 'jump', isReal: true, level: 2, phonicPattern: 'CVCC' },
  { id: 'd10', word: 'flim', isReal: false, level: 2, phonicPattern: 'CCVC' },
  { id: 'd11', word: 'help', isReal: true, level: 2, phonicPattern: 'CVCC' },
  { id: 'd12', word: 'snep', isReal: false, level: 2, phonicPattern: 'CCVC' },

  // Level 3 - Digraphs (Year 3-4)
  { id: 'd13', word: 'sheep', isReal: true, level: 3, phonicPattern: 'digraph' },
  { id: 'd14', word: 'thane', isReal: false, level: 3, phonicPattern: 'digraph' },
  { id: 'd15', word: 'chain', isReal: true, level: 3, phonicPattern: 'digraph' },
  { id: 'd16', word: 'phote', isReal: false, level: 3, phonicPattern: 'digraph' },
  { id: 'd17', word: 'night', isReal: true, level: 3, phonicPattern: 'digraph' },
  { id: 'd18', word: 'cheel', isReal: false, level: 3, phonicPattern: 'digraph' },

  // Level 4 - Split digraphs & longer words (Year 4-5)
  { id: 'd19', word: 'strive', isReal: true, level: 4, phonicPattern: 'split digraph' },
  { id: 'd20', word: 'grulp', isReal: false, level: 4, phonicPattern: 'cluster' },
  { id: 'd21', word: 'polite', isReal: true, level: 4, phonicPattern: 'split digraph' },
  { id: 'd22', word: 'blinter', isReal: false, level: 4, phonicPattern: 'cluster' },
  { id: 'd23', word: 'escape', isReal: true, level: 4, phonicPattern: 'multi-syllable' },
  { id: 'd24', word: 'trivane', isReal: false, level: 4, phonicPattern: 'split digraph' },

  // Level 5 - Multi-syllable (Year 5-6)
  { id: 'd25', word: 'adventure', isReal: true, level: 5, phonicPattern: 'multi-syllable' },
  { id: 'd26', word: 'contrive', isReal: true, level: 5, phonicPattern: 'multi-syllable' },
  { id: 'd27', word: 'plodicate', isReal: false, level: 5, phonicPattern: 'multi-syllable' },
  { id: 'd28', word: 'beautiful', isReal: true, level: 5, phonicPattern: 'multi-syllable' },
  { id: 'd29', word: 'tremblion', isReal: false, level: 5, phonicPattern: 'multi-syllable' },
  { id: 'd30', word: 'sploinder', isReal: false, level: 5, phonicPattern: 'multi-syllable' },

  // Level 6 - Complex vocabulary (Year 7-8)
  { id: 'd31', word: 'catastrophe', isReal: true, level: 6, phonicPattern: 'multi-syllable' },
  { id: 'd32', word: 'preliminary', isReal: true, level: 6, phonicPattern: 'multi-syllable' },
  { id: 'd33', word: 'obstreviant', isReal: false, level: 6, phonicPattern: 'multi-syllable' },
  { id: 'd34', word: 'benevolent', isReal: true, level: 6, phonicPattern: 'multi-syllable' },
  { id: 'd35', word: 'crenulvate', isReal: false, level: 6, phonicPattern: 'multi-syllable' },
  { id: 'd36', word: 'perambulate', isReal: true, level: 6, phonicPattern: 'multi-syllable' },

  // Level 7 - Advanced (Year 9-10)
  { id: 'd37', word: 'juxtaposition', isReal: true, level: 7, phonicPattern: 'multi-syllable' },
  { id: 'd38', word: 'verisimilitude', isReal: true, level: 7, phonicPattern: 'multi-syllable' },
  { id: 'd39', word: 'pernicitous', isReal: false, level: 7, phonicPattern: 'multi-syllable' },
  { id: 'd40', word: 'ubiquitous', isReal: true, level: 7, phonicPattern: 'multi-syllable' },
  { id: 'd41', word: 'conflagrivate', isReal: false, level: 7, phonicPattern: 'multi-syllable' },
  { id: 'd42', word: 'magniloquent', isReal: true, level: 7, phonicPattern: 'multi-syllable' },

  // Level 8 - Advanced+ (Year 11-13)
  { id: 'd43', word: 'perspicacious', isReal: true, level: 8, phonicPattern: 'multi-syllable' },
  { id: 'd44', word: 'sesquipedalian', isReal: true, level: 8, phonicPattern: 'multi-syllable' },
  { id: 'd45', word: 'defenestration', isReal: true, level: 8, phonicPattern: 'multi-syllable' },
  { id: 'd46', word: 'contumacious', isReal: true, level: 8, phonicPattern: 'multi-syllable' },
  { id: 'd47', word: 'absquatulate', isReal: true, level: 8, phonicPattern: 'multi-syllable' },
  { id: 'd48', word: 'phantasmogrify', isReal: false, level: 8, phonicPattern: 'multi-syllable' },
]

// ─── Reading Passages ────────────────────────────────────────────────────────

export const READING_PASSAGES: ReadingPassage[] = [
  // ── Level 1: Year 3 (age 7-8) ──────────────────────────────────────────
  {
    id: 'p1',
    level: 1,
    yearGroup: 'Year 3',
    ageRange: '7-8',
    title: 'The Lost Kitten',
    genre: 'fiction',
    wordCount: 82,
    expectedReadingTimeSeconds: 60,
    text: `One morning, Lily found a tiny kitten sitting by the garden gate. It was grey with white paws and it looked very cold. Lily picked it up gently and carried it inside. She gave it a saucer of warm milk and wrapped it in an old towel. The kitten purred loudly.

"Can we keep it?" Lily asked her mum. Her mum smiled. "Let's put up some posters first," she said. "Someone might be looking for it." Lily nodded, but she secretly hoped nobody would come.`,
    questions: [
      {
        id: 'p1q1',
        type: 'multiple-choice',
        question: 'What colour was the kitten?',
        options: [
          { id: 'a', text: 'Black with white spots' },
          { id: 'b', text: 'Grey with white paws' },
          { id: 'c', text: 'White with grey stripes' },
          { id: 'd', text: 'Orange with brown ears' },
        ],
        correctAnswer: 'b',
        skill: 'literal',
        points: 1,
      },
      {
        id: 'p1q2',
        type: 'multiple-choice',
        question: 'What did Lily give the kitten to drink?',
        options: [
          { id: 'a', text: 'Cold water' },
          { id: 'b', text: 'Orange juice' },
          { id: 'c', text: 'Warm milk' },
          { id: 'd', text: 'Tea' },
        ],
        correctAnswer: 'c',
        skill: 'literal',
        points: 1,
      },
      {
        id: 'p1q3',
        type: 'multiple-choice',
        question: 'Why did Lily secretly hope nobody would come?',
        options: [
          { id: 'a', text: 'She was scared of strangers' },
          { id: 'b', text: 'She wanted to keep the kitten' },
          { id: 'c', text: 'She did not want to put up posters' },
          { id: 'd', text: 'She wanted to go back to bed' },
        ],
        correctAnswer: 'b',
        skill: 'inferential',
        points: 2,
      },
      {
        id: 'p1q4',
        type: 'short-answer',
        question: 'How can you tell the kitten was happy with Lily? Use evidence from the text.',
        correctAnswer: 'purred',
        acceptableKeywords: ['purr', 'purred', 'purred loudly', 'purring'],
        skill: 'inferential',
        points: 2,
      },
    ],
  },

  // ── Level 2: Year 4 (age 8-9) ──────────────────────────────────────────
  {
    id: 'p2',
    level: 2,
    yearGroup: 'Year 4',
    ageRange: '8-9',
    title: 'Volcanoes',
    genre: 'non-fiction',
    wordCount: 110,
    expectedReadingTimeSeconds: 70,
    text: `A volcano is an opening in the Earth's surface where hot, melted rock called magma escapes from deep underground. When magma reaches the surface, it is called lava. Lava can be incredibly hot - sometimes over 1,000 degrees Celsius.

There are three types of volcano: active, dormant, and extinct. An active volcano erupts regularly. A dormant volcano has not erupted for a long time but could erupt again. An extinct volcano will never erupt again.

The most famous volcanic eruption in history was Mount Vesuvius in AD 79, which buried the Roman city of Pompeii under thick layers of ash and rock.`,
    questions: [
      {
        id: 'p2q1',
        type: 'multiple-choice',
        question: "What is magma called when it reaches the Earth's surface?",
        options: [
          { id: 'a', text: 'Ash' },
          { id: 'b', text: 'Rock' },
          { id: 'c', text: 'Lava' },
          { id: 'd', text: 'Steam' },
        ],
        correctAnswer: 'c',
        skill: 'literal',
        points: 1,
      },
      {
        id: 'p2q2',
        type: 'multiple-choice',
        question: 'What type of volcano could erupt again but has not erupted for a long time?',
        options: [
          { id: 'a', text: 'Active' },
          { id: 'b', text: 'Extinct' },
          { id: 'c', text: 'Dormant' },
          { id: 'd', text: 'Explosive' },
        ],
        correctAnswer: 'c',
        skill: 'literal',
        points: 1,
      },
      {
        id: 'p2q3',
        type: 'multiple-choice',
        question: 'Why is the eruption of Mount Vesuvius considered historically important?',
        options: [
          { id: 'a', text: 'It was the biggest eruption ever' },
          { id: 'b', text: 'It buried the city of Pompeii' },
          { id: 'c', text: 'It happened last year' },
          { id: 'd', text: 'It created a new island' },
        ],
        correctAnswer: 'b',
        skill: 'inferential',
        points: 2,
      },
      {
        id: 'p2q4',
        type: 'short-answer',
        question: 'What is the difference between an active volcano and an extinct volcano?',
        correctAnswer: 'active erupts regularly extinct never erupt again',
        acceptableKeywords: ['active', 'erupts', 'regularly', 'extinct', 'never', 'erupt again'],
        skill: 'literal',
        points: 2,
      },
    ],
  },

  // ── Level 3: Year 5 (age 9-10) ─────────────────────────────────────────
  {
    id: 'p3',
    level: 3,
    yearGroup: 'Year 5',
    ageRange: '9-10',
    title: 'The Midnight Garden',
    genre: 'fiction',
    wordCount: 140,
    expectedReadingTimeSeconds: 80,
    text: `Tom crept down the stairs, wincing at every creak. The grandfather clock in the hallway had just struck thirteen - an impossible number - and something had shifted. He could feel it in the air, like the house itself was holding its breath.

The back door swung open without a sound. Beyond it lay a garden Tom had never seen before, bathed in silver moonlight. Where the concrete yard should have been, there were enormous hedges trimmed into the shapes of animals, a stone fountain with water that sparkled like diamonds, and flower beds bursting with colours he couldn't name.

A girl stood beneath an ancient yew tree, her dress old-fashioned and faded. She looked directly at him. "I've been waiting for you," she said simply, as though they had arranged to meet. Tom's heart hammered. He stepped through the doorway.`,
    questions: [
      {
        id: 'p3q1',
        type: 'multiple-choice',
        question: 'What unusual time did the clock strike?',
        options: [
          { id: 'a', text: 'Twelve' },
          { id: 'b', text: 'Thirteen' },
          { id: 'c', text: 'Midnight' },
          { id: 'd', text: 'One' },
        ],
        correctAnswer: 'b',
        skill: 'literal',
        points: 1,
      },
      {
        id: 'p3q2',
        type: 'multiple-choice',
        question: 'What should normally have been behind the back door?',
        options: [
          { id: 'a', text: 'A flower garden' },
          { id: 'b', text: 'A concrete yard' },
          { id: 'c', text: 'A swimming pool' },
          { id: 'd', text: 'A car park' },
        ],
        correctAnswer: 'b',
        skill: 'literal',
        points: 1,
      },
      {
        id: 'p3q3',
        type: 'multiple-choice',
        question: "The phrase 'the house itself was holding its breath' suggests that:",
        options: [
          { id: 'a', text: 'The house was alive' },
          { id: 'b', text: 'There was an atmosphere of tension and anticipation' },
          { id: 'c', text: 'Tom could not breathe properly' },
          { id: 'd', text: 'The windows were closed' },
        ],
        correctAnswer: 'b',
        skill: 'inferential',
        points: 2,
      },
      {
        id: 'p3q4',
        type: 'short-answer',
        question: 'What evidence suggests that the girl might be from a different time period?',
        correctAnswer: 'old-fashioned dress',
        acceptableKeywords: ['old-fashioned', 'dress', 'faded', 'old fashioned'],
        skill: 'inferential',
        points: 2,
      },
    ],
  },

  // ── Level 4: Year 6 (age 10-11) ────────────────────────────────────────
  {
    id: 'p4',
    level: 4,
    yearGroup: 'Year 6',
    ageRange: '10-11',
    title: 'The Great Fire of London',
    genre: 'non-fiction',
    wordCount: 160,
    expectedReadingTimeSeconds: 90,
    text: `In the early hours of 2 September 1666, a fire broke out in a bakery on Pudding Lane in the City of London. Fanned by strong easterly winds and fuelled by the tightly packed timber-framed buildings, the fire spread with terrifying speed. Over four days it consumed more than 13,000 houses, 87 churches, and the old St Paul's Cathedral.

Remarkably, only a handful of deaths were officially recorded, though historians believe the true figure was considerably higher, as the deaths of poorer citizens often went unregistered. Thousands of Londoners were left homeless, camping in fields beyond the city walls.

The destruction, however, brought unexpected benefits. The medieval street plan, with its narrow, crowded lanes, was replaced by wider streets and buildings constructed from brick and stone. New building regulations were introduced, and Sir Christopher Wren was commissioned to design a magnificent new St Paul's Cathedral, which still stands today.`,
    questions: [
      {
        id: 'p4q1',
        type: 'multiple-choice',
        question: 'Where did the Great Fire begin?',
        options: [
          { id: 'a', text: "St Paul's Cathedral" },
          { id: 'b', text: 'A bakery on Pudding Lane' },
          { id: 'c', text: 'The Tower of London' },
          { id: 'd', text: 'A warehouse by the river' },
        ],
        correctAnswer: 'b',
        skill: 'literal',
        points: 1,
      },
      {
        id: 'p4q2',
        type: 'multiple-choice',
        question: 'Why might the true death toll have been higher than officially recorded?',
        options: [
          { id: 'a', text: 'People escaped to other cities' },
          { id: 'b', text: 'Deaths of poorer citizens often went unregistered' },
          { id: 'c', text: 'The records were destroyed in the fire' },
          { id: 'd', text: 'Nobody counted the deaths' },
        ],
        correctAnswer: 'b',
        skill: 'inferential',
        points: 2,
      },
      {
        id: 'p4q3',
        type: 'multiple-choice',
        question: "What 'unexpected benefits' came from the fire?",
        options: [
          { id: 'a', text: 'London became the capital of England' },
          { id: 'b', text: 'Wider streets, brick buildings, and new regulations' },
          { id: 'c', text: 'The population increased' },
          { id: 'd', text: 'New trade routes were established' },
        ],
        correctAnswer: 'b',
        skill: 'inferential',
        points: 2,
      },
      {
        id: 'p4q4',
        type: 'short-answer',
        question: 'Name two factors that helped the fire spread so quickly.',
        correctAnswer: 'strong winds timber buildings',
        acceptableKeywords: [
          'wind',
          'winds',
          'easterly',
          'timber',
          'wooden',
          'tightly packed',
          'close together',
          'narrow',
        ],
        skill: 'literal',
        points: 2,
      },
    ],
  },

  // ── Level 5: Year 7-8 (age 11-13) ──────────────────────────────────────
  {
    id: 'p5',
    level: 5,
    yearGroup: 'Year 7-8',
    ageRange: '11-13',
    title: 'The Storm',
    genre: 'fiction',
    wordCount: 175,
    expectedReadingTimeSeconds: 100,
    text: `The sky had been bruising all afternoon - great swells of indigo and charcoal rolling in from the west. By four o'clock the light had an eerie, yellowish quality, as if someone had placed a sepia filter over the world.

Marcus stood at the window, watching the first fat drops of rain explode against the glass. His mother was somewhere in the barn, securing the livestock. His father was still out on the moor, checking the boundary fences, and had been gone since morning. The radio had warned of gale-force winds.

A flash of lightning split the sky and, a heartbeat later, thunder cracked so violently that the windowpane shuddered. The power died. In the sudden, absolute darkness, Marcus became aware of a sound that did not belong to the storm - a slow, deliberate knocking at the front door. Three measured raps.

He held his breath. Nobody visited the farm in weather like this. Nobody reasonable, anyway. The knocking came again, patient and unhurried, and this time it was accompanied by a voice he did not recognise.`,
    questions: [
      {
        id: 'p5q1',
        type: 'multiple-choice',
        question: "What does 'the sky had been bruising' suggest?",
        options: [
          { id: 'a', text: 'The sky was blue and sunny' },
          { id: 'b', text: 'Dark, threatening clouds were gathering' },
          { id: 'c', text: 'It was already nighttime' },
          { id: 'd', text: 'The sky was red from a fire' },
        ],
        correctAnswer: 'b',
        skill: 'vocabulary',
        points: 2,
      },
      {
        id: 'p5q2',
        type: 'multiple-choice',
        question: "Where was Marcus's father?",
        options: [
          { id: 'a', text: 'In the barn with the livestock' },
          { id: 'b', text: 'At the front door' },
          { id: 'c', text: 'On the moor checking fences' },
          { id: 'd', text: 'At the window with Marcus' },
        ],
        correctAnswer: 'c',
        skill: 'literal',
        points: 1,
      },
      {
        id: 'p5q3',
        type: 'short-answer',
        question:
          'How does the writer create a sense of tension in the final paragraph? Give two techniques with evidence.',
        correctAnswer: 'short sentences darkness unknown visitor knocking',
        acceptableKeywords: [
          'short sentence',
          'darkness',
          'unknown',
          'mystery',
          'knocking',
          'suspense',
          'tension',
          'nobody',
          'did not recognise',
          'patient',
          'unhurried',
          'deliberate',
        ],
        skill: 'evaluative',
        points: 3,
      },
      {
        id: 'p5q4',
        type: 'multiple-choice',
        question: "The sentence 'Nobody reasonable, anyway' implies that:",
        options: [
          { id: 'a', text: 'The visitor is probably friendly' },
          { id: 'b', text: 'The visitor might be suspicious or dangerous' },
          { id: 'c', text: 'Marcus is being rude' },
          { id: 'd', text: 'The weather is not really that bad' },
        ],
        correctAnswer: 'b',
        skill: 'inferential',
        points: 2,
      },
    ],
  },

  // ── Level 6: Year 9 (age 13-14) ────────────────────────────────────────
  {
    id: 'p6',
    level: 6,
    yearGroup: 'Year 9',
    ageRange: '13-14',
    title: 'Ocean Plastic: A Crisis Below the Surface',
    genre: 'non-fiction',
    wordCount: 195,
    expectedReadingTimeSeconds: 110,
    text: `Every year, approximately eight million tonnes of plastic waste enters the world's oceans - the equivalent of dumping a rubbish lorry into the sea every single minute. While images of plastic bottles washing up on beaches are distressing enough, the far greater danger lies in what we cannot see: microplastics.

These fragments, smaller than five millimetres in diameter, result from the gradual breakdown of larger plastic items by sunlight and wave action. They have been found in the deepest ocean trenches, in Arctic sea ice, and in the stomachs of creatures ranging from plankton to whales. Recent studies have even detected microplastics in human blood samples.

The consequences are far-reaching. Marine animals mistake plastic for food, leading to starvation, internal injuries, and the accumulation of toxic chemicals in the food chain. Coral reefs, already stressed by rising sea temperatures, suffer additional damage when plastic debris smothers their surfaces.

Solutions exist but require coordinated global action: reducing single-use plastics, investing in waste management infrastructure in developing nations, and funding research into biodegradable alternatives. Without urgent intervention, scientists estimate that by 2050, the ocean will contain more plastic by weight than fish.`,
    questions: [
      {
        id: 'p6q1',
        type: 'multiple-choice',
        question: 'How much plastic enters the oceans each year?',
        options: [
          { id: 'a', text: 'Eight million kilograms' },
          { id: 'b', text: 'Eight million tonnes' },
          { id: 'c', text: 'Eight hundred thousand tonnes' },
          { id: 'd', text: 'Eighty million tonnes' },
        ],
        correctAnswer: 'b',
        skill: 'literal',
        points: 1,
      },
      {
        id: 'p6q2',
        type: 'multiple-choice',
        question: "What is the purpose of the comparison 'a rubbish lorry every single minute'?",
        options: [
          { id: 'a', text: 'To make the reader laugh' },
          { id: 'b', text: 'To show that lorries are polluting' },
          { id: 'c', text: 'To help the reader visualise the enormous scale of the problem' },
          { id: 'd', text: 'To explain how plastic gets to the ocean' },
        ],
        correctAnswer: 'c',
        skill: 'evaluative',
        points: 2,
      },
      {
        id: 'p6q3',
        type: 'short-answer',
        question:
          "Explain why microplastics are described as a 'far greater danger' than visible plastic waste.",
        correctAnswer: 'invisible found everywhere food chain blood',
        acceptableKeywords: [
          'invisible',
          'cannot see',
          'everywhere',
          'food chain',
          'blood',
          'toxic',
          'smaller',
          'difficult to remove',
          'plankton',
          'whales',
          'human',
        ],
        skill: 'inferential',
        points: 3,
      },
      {
        id: 'p6q4',
        type: 'multiple-choice',
        question: 'Which of the following is NOT listed as a solution in the passage?',
        options: [
          { id: 'a', text: 'Reducing single-use plastics' },
          { id: 'b', text: 'Banning all fishing' },
          { id: 'c', text: 'Investing in waste management in developing nations' },
          { id: 'd', text: 'Funding research into biodegradable alternatives' },
        ],
        correctAnswer: 'b',
        skill: 'literal',
        points: 1,
      },
    ],
  },

  // ── Level 7: Year 10 (age 14-15, GCSE) ─────────────────────────────────
  {
    id: 'p7',
    level: 7,
    yearGroup: 'Year 10',
    ageRange: '14-15',
    title: 'The Abandoned House',
    genre: 'fiction',
    wordCount: 210,
    expectedReadingTimeSeconds: 120,
    text: `The house had not been lived in for decades, though it resisted emptiness with a kind of stubborn dignity. Wallpaper, once fashionable with its pattern of climbing roses, now hung in damp strips that curled away from the plaster like dead skin. The floorboards, swollen with moisture, groaned beneath the slightest pressure, and everywhere there was the sweet, oppressive smell of decay.

Elise moved through the ground floor with practised caution, her torch beam cutting narrow channels through the darkness. She had photographed dozens of abandoned buildings for her project, but this one was different. There was a quality to the silence here that felt less like absence and more like presence - as though the house were actively listening.

In the parlour, she found what she had come for: a Victorian writing desk, its leather surface cracked but intact, its drawers still holding their secrets. She pulled the top drawer open and discovered a bundle of letters tied with a faded ribbon, the ink brown and spidery. The top letter was dated November 1891.

She began to read, and as she did, the temperature in the room dropped so markedly that her breath became visible. The torch flickered once, twice, and then steadied. Behind her, a floorboard creaked though she was standing perfectly still.`,
    questions: [
      {
        id: 'p7q1',
        type: 'multiple-choice',
        question: "What does the metaphor 'curled away from the plaster like dead skin' suggest?",
        options: [
          { id: 'a', text: 'The wallpaper was beautifully designed' },
          { id: 'b', text: 'The house is decaying and lifeless, like a body decomposing' },
          { id: 'c', text: 'The wallpaper was brand new' },
          { id: 'd', text: 'Someone had recently redecorated' },
        ],
        correctAnswer: 'b',
        skill: 'vocabulary',
        points: 2,
      },
      {
        id: 'p7q2',
        type: 'short-answer',
        question:
          'How does the writer use structural techniques to build suspense in the final paragraph? Refer to specific details.',
        correctAnswer:
          'short sentences temperature drop torch flicker floorboard creak standing still',
        acceptableKeywords: [
          'short sentence',
          'temperature',
          'drop',
          'cold',
          'breath visible',
          'torch',
          'flicker',
          'floorboard',
          'creak',
          'standing still',
          'contrast',
          'shift',
          'pace',
          'tension',
        ],
        skill: 'evaluative',
        points: 3,
      },
      {
        id: 'p7q3',
        type: 'multiple-choice',
        question: "The silence 'felt less like absence and more like presence' is an example of:",
        options: [
          { id: 'a', text: 'Simile' },
          { id: 'b', text: 'Alliteration' },
          { id: 'c', text: 'Paradox' },
          { id: 'd', text: 'Hyperbole' },
        ],
        correctAnswer: 'c',
        skill: 'vocabulary',
        points: 2,
      },
      {
        id: 'p7q4',
        type: 'multiple-choice',
        question: 'Why is Elise in the house?',
        options: [
          { id: 'a', text: 'She is looking for treasure' },
          { id: 'b', text: 'She is photographing abandoned buildings for a project' },
          { id: 'c', text: 'She is trying to buy the house' },
          { id: 'd', text: 'She is hiding from someone' },
        ],
        correctAnswer: 'b',
        skill: 'literal',
        points: 1,
      },
    ],
  },

  // ── Level 8: Year 11 (age 15-16, GCSE exam year) ───────────────────────
  {
    id: 'p8',
    level: 8,
    yearGroup: 'Year 11',
    ageRange: '15-16',
    title: 'The Ethics of Artificial Intelligence',
    genre: 'non-fiction',
    wordCount: 230,
    expectedReadingTimeSeconds: 130,
    text: `The rapid advancement of artificial intelligence presents humanity with moral questions that previous generations could scarcely have imagined. As algorithms increasingly determine who receives a mortgage, which patients receive medical treatment, and even who is released on parole, the consequences of encoded bias become a matter of profound ethical concern.

Consider the case of facial recognition technology. Multiple studies have demonstrated that these systems exhibit significantly higher error rates when identifying individuals with darker skin tones - a flaw that can lead to wrongful arrests and the reinforcement of systemic discrimination. The technology, trained predominantly on datasets that over-represent lighter-skinned faces, has effectively automated prejudice.

Proponents argue that AI, properly designed, can eliminate human bias from decision-making processes. An algorithm, they suggest, cannot be swayed by prejudice, fatigue, or emotion in the way that a human judge or loan officer might be. There is merit in this argument, but it assumes a neutrality in design and data that frequently does not exist.

The question is not whether we should develop artificial intelligence - that ship has sailed - but how we can ensure that these systems are transparent, accountable, and fair. This requires not only technical solutions but interdisciplinary oversight involving ethicists, sociologists, and the communities most likely to be affected by algorithmic decision-making.`,
    questions: [
      {
        id: 'p8q1',
        type: 'multiple-choice',
        question:
          'According to the passage, why does facial recognition technology have higher error rates for people with darker skin?',
        options: [
          { id: 'a', text: 'The cameras are not powerful enough' },
          { id: 'b', text: 'The training datasets over-represent lighter-skinned faces' },
          { id: 'c', text: 'Darker skin is harder for any system to detect' },
          { id: 'd', text: 'The technology is too new to work properly' },
        ],
        correctAnswer: 'b',
        skill: 'literal',
        points: 1,
      },
      {
        id: 'p8q2',
        type: 'short-answer',
        question:
          "What does the writer mean by 'effectively automated prejudice'? Explain in your own words.",
        correctAnswer: 'technology reproduces human biases automatically without intention',
        acceptableKeywords: [
          'automat',
          'bias',
          'prejudice',
          'discriminat',
          'reproduce',
          'built in',
          'coded',
          'systematic',
          'without knowing',
          'unintentional',
        ],
        skill: 'inferential',
        points: 3,
      },
      {
        id: 'p8q3',
        type: 'multiple-choice',
        question: "The metaphor 'that ship has sailed' means:",
        options: [
          { id: 'a', text: 'AI was invented on ships' },
          {
            id: 'b',
            text: 'The decision to develop AI has already been made and cannot be reversed',
          },
          { id: 'c', text: 'We should stop developing AI immediately' },
          { id: 'd', text: 'AI development is moving slowly' },
        ],
        correctAnswer: 'b',
        skill: 'vocabulary',
        points: 2,
      },
      {
        id: 'p8q4',
        type: 'multiple-choice',
        question: 'What does the writer suggest is needed to ensure AI is fair?',
        options: [
          { id: 'a', text: 'Only computer scientists should make decisions' },
          { id: 'b', text: 'AI should be banned' },
          {
            id: 'c',
            text: 'Interdisciplinary oversight including ethicists, sociologists, and affected communities',
          },
          { id: 'd', text: 'More powerful computers' },
        ],
        correctAnswer: 'c',
        skill: 'literal',
        points: 2,
      },
    ],
  },

  // ── Level 9: Year 12 (age 16-17, AS / A-level) ─────────────────────────
  {
    id: 'p9',
    level: 9,
    yearGroup: 'Year 12',
    ageRange: '16-17',
    title: 'The Fragility of Memory',
    genre: 'fiction',
    wordCount: 240,
    expectedReadingTimeSeconds: 140,
    text: `It began, as these things so often do, with a photograph. Clara found it wedged between the pages of a library book she had borrowed on impulse - a dog-eared copy of Middlemarch that smelled of someone else's house. The photograph was small, its edges scalloped in the style of the 1960s, and it showed a young woman standing on a pier, laughing into the wind, her hair a flag of dark curls.

Clara did not know this woman, yet something about the image arrested her with a force that bordered on recognition. It was not the face itself - attractive but unremarkable - but the quality of the laugh: unguarded, reckless, entirely unselfconscious. It was the kind of laugh Clara could not imagine producing.

She found herself constructing a narrative. The woman was twenty-three, newly graduated, visiting the coast with a lover whose presence was implied by the angle of the shot - someone close, someone trusted enough to be allowed this unposed moment. They were happy in the way that people in photographs from the 1960s always seem happy: luminously, impossibly, as though unhappiness had not yet been invented.

But this was fiction, Clara knew. The photograph was a surface, and whatever truth it had once contained was now irretrievable. The woman might have been miserable five minutes after this shutter fell. Memory, like photography, was an act of ruthless editing - it preserved the frame and discarded the context.`,
    questions: [
      {
        id: 'p9q1',
        type: 'short-answer',
        question:
          "Analyse the significance of the metaphor 'her hair a flag of dark curls' and what it suggests about the woman in the photograph.",
        correctAnswer: 'freedom movement energy vitality flag suggests patriotism or declaration',
        acceptableKeywords: [
          'freedom',
          'movement',
          'energy',
          'vitality',
          'wild',
          'flag',
          'declaration',
          'visible',
          'bold',
          'wind',
          'dynamic',
          'uncontrolled',
        ],
        skill: 'evaluative',
        points: 3,
      },
      {
        id: 'p9q2',
        type: 'multiple-choice',
        question:
          "What does the phrase 'bordered on recognition' suggest about Clara's response to the photograph?",
        options: [
          { id: 'a', text: 'She definitely recognised the woman' },
          { id: 'b', text: 'She felt an inexplicable connection or familiarity' },
          { id: 'c', text: 'She had seen the photograph before' },
          { id: 'd', text: 'She recognised the location of the pier' },
        ],
        correctAnswer: 'b',
        skill: 'inferential',
        points: 2,
      },
      {
        id: 'p9q3',
        type: 'short-answer',
        question:
          "Explain the final sentence: 'Memory, like photography, was an act of ruthless editing - it preserved the frame and discarded the context.' What is the writer arguing about memory?",
        correctAnswer:
          'memory is selective preserves some moments discards full truth incomplete partial',
        acceptableKeywords: [
          'selective',
          'incomplete',
          'partial',
          'editing',
          'choose',
          'discard',
          'unreliable',
          'construct',
          'frame',
          'context',
          'truth',
          'subjective',
        ],
        skill: 'evaluative',
        points: 4,
      },
      {
        id: 'p9q4',
        type: 'multiple-choice',
        question: 'The tone of this passage is best described as:',
        options: [
          { id: 'a', text: 'Humorous and lighthearted' },
          { id: 'b', text: 'Angry and confrontational' },
          { id: 'c', text: 'Reflective and philosophical' },
          { id: 'd', text: 'Urgent and alarming' },
        ],
        correctAnswer: 'c',
        skill: 'evaluative',
        points: 2,
      },
    ],
  },

  // ── Level 10: Year 13 (age 17-18, A-level) ─────────────────────────────
  {
    id: 'p10',
    level: 10,
    yearGroup: 'Year 13',
    ageRange: '17-18',
    title: 'The Paradox of Choice in Consumer Society',
    genre: 'non-fiction',
    wordCount: 260,
    expectedReadingTimeSeconds: 150,
    text: `It is an article of faith in free-market economies that choice is intrinsically desirable - that the proliferation of options is synonymous with freedom and that to restrict choice is, by definition, to diminish autonomy. The supermarket aisle groaning with forty varieties of breakfast cereal is presented as a triumph of consumer sovereignty. Yet a growing body of psychological research suggests that this assumption may be fundamentally flawed.

The psychologist Barry Schwartz has argued persuasively that excessive choice does not liberate but paralyses. Confronted with an overwhelming array of options, individuals experience what Schwartz terms 'the paradox of choice': increased anxiety about making the wrong decision, diminished satisfaction with the decision eventually made, and a corrosive sense of opportunity cost - the nagging awareness that an alternative might have been preferable.

This phenomenon extends far beyond supermarket aisles. In education, students offered unlimited course selections report higher levels of dissatisfaction than those guided through a structured curriculum. In healthcare, patients presented with multiple treatment options without clear clinical recommendation experience significantly greater decisional conflict and worse psychological outcomes.

The implications for public policy are considerable. If maximising choice does not maximise wellbeing - and may actively undermine it - then the role of institutions becomes not merely to provide options but to curate them: to present information in ways that facilitate good decisions rather than simply piling alternatives upon individuals already overwhelmed by the cognitive demands of modern life. This is not paternalism; it is the recognition that freedom without structure is merely another form of abandonment.`,
    questions: [
      {
        id: 'p10q1',
        type: 'multiple-choice',
        question: "What is 'the paradox of choice' as described by Schwartz?",
        options: [
          { id: 'a', text: 'Having more choice always leads to better decisions' },
          { id: 'b', text: 'People prefer not to make any choices at all' },
          {
            id: 'c',
            text: 'More choice leads to anxiety, dissatisfaction, and a sense of missed opportunity',
          },
          { id: 'd', text: 'Choice is only a problem in supermarkets' },
        ],
        correctAnswer: 'c',
        skill: 'literal',
        points: 2,
      },
      {
        id: 'p10q2',
        type: 'short-answer',
        question:
          "Analyse the rhetorical effect of the final sentence: 'freedom without structure is merely another form of abandonment.' How does the writer use this to conclude their argument?",
        correctAnswer: 'redefines freedom challenges assumption paradox epigram provocative',
        acceptableKeywords: [
          'redefin',
          'paradox',
          'epigram',
          'provocat',
          'challenge',
          'assumption',
          'freedom',
          'abandon',
          'structure',
          'antithes',
          'contrast',
          'powerful',
          'memorable',
          'conclud',
        ],
        skill: 'evaluative',
        points: 4,
      },
      {
        id: 'p10q3',
        type: 'multiple-choice',
        question: "The writer's overall argument is that:",
        options: [
          { id: 'a', text: 'Supermarkets should reduce their product range' },
          { id: 'b', text: 'Choice should be eliminated from public policy' },
          {
            id: 'c',
            text: 'Institutions should curate and structure choices rather than simply maximising them',
          },
          { id: 'd', text: 'Barry Schwartz is wrong about the paradox of choice' },
        ],
        correctAnswer: 'c',
        skill: 'evaluative',
        points: 2,
      },
      {
        id: 'p10q4',
        type: 'short-answer',
        question:
          "Why does the writer argue that curating choices 'is not paternalism'? What distinction are they drawing?",
        correctAnswer:
          'distinction between controlling people and helping them make better decisions supporting not restricting',
        acceptableKeywords: [
          'paternalism',
          'control',
          'help',
          'support',
          'facilitat',
          'good decision',
          'overwhelm',
          'structure',
          'freedom',
          'guid',
          'not restrict',
          'curate',
          'inform',
        ],
        skill: 'inferential',
        points: 3,
      },
    ],
  },
]

// ─── Helper: Get passages by level range ─────────────────────────────────────

export function getPassagesByLevelRange(minLevel: number, maxLevel: number): ReadingPassage[] {
  return READING_PASSAGES.filter((p) => p.level >= minLevel && p.level <= maxLevel)
}

export function getDecodingWordsByLevel(maxLevel: number): DecodingWord[] {
  return DECODING_WORDS.filter((w) => w.level <= maxLevel)
}
