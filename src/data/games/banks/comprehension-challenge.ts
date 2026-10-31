import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Comprehension Challenge: read an unseen passage, then answer five
 * multiple-choice questions on it (retrieval, inference, language, structure,
 * comparison and evaluation). A round plays six passages, dealt whole by
 * dealSetsNow (src/lib/games/start-round.ts), those a student has not read
 * first.
 *
 * Moved out of src/app/games/comprehension-challenge/page.tsx on 16 October
 * 2026, when every answer gained an explanation
 * (src/lib/games/explanations/types.ts).
 *
 * The passages keep the shape the page plays them in, each holding its five
 * questions in the order they are asked, easiest first. BANK.items is the
 * same questions as one list, each with its passage, keyed by the passage
 * title and the prompt together: a prompt such as "Which judgement about the
 * narrator does the passage best support?" is unique only within its
 * passage.
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
 * REBUILT FOR DEPTH (24 October 2026). The founder that day: the games are
 * "too obvious and easy. not enough depth". Measured that day by a read-only
 * audit of every GCSE game: six passages of 115 to 153 words, all six
 * dealt every round, so round 2 was round 1 again; the right option was the
 * longest in 29 of 30 questions, so a student could score 97 per cent without
 * reading; one distractor was "Because she dislikes water"; and within a
 * passage one question gave another away (The Storm's evaluation answer
 * quoted the clause the next question asked about; The Interview's first,
 * third and fifth questions had one answer between them). What changed:
 *
 *   - Thirty passages of 305 to 499 words, so a student meets every passage
 *     once, in five rounds of six, before any comes back: sixteen fiction in
 *     the style of Language Paper 1 and fourteen non-fiction in the style of
 *     Paper 2.
 *   - Real text first, as the founder asked: eleven are copied word for word
 *     from public-domain texts held in src/data/full-texts/, each naming its
 *     book and chapter in its title and its writer in its genre, and each
 *     carrying `heldText` (the file and section) so that it can be checked
 *     against the held text: Frankenstein (Chapter 5, and Mary Shelley's 1831
 *     Introduction, her own account of how the novel began), Great
 *     Expectations, Jane Eyre, The Sign of Four, The War of the Worlds, A
 *     Christmas Carol, Pride and Prejudice, Silas Marner, Jekyll and Hyde and
 *     The Great Gatsby (Fitzgerald died in 1940, so it is free in the UK).
 *     The rest, the six older passages and thirteen new ones (two
 *     stories; a letter to a newspaper, two speeches, travel writing, a
 *     nature column, two articles, an autobiography, a humorous essay, a
 *     feature and a review), were written for the site. They name no real
 *     living person and invent no statistic; the few facts they state
 *     (swifts, teenage sleep, the Arabian oryx, lighthouse automation) are
 *     well established.
 *   - Every question has a tier (CompQuestion.tier): 1 retrieval and simple
 *     inference; 2 language (which word most suggests a feeling, and why; the
 *     effect of an image) and structure (why the writer opens, shifts or ends
 *     this way); 3 evaluation (which judgement the passage best supports),
 *     best evidence for a claim, and viewpoint or purpose in non-fiction. Each
 *     passage asks its five easiest first, and the page asks them in order.
 *   - A new type, 'retrieval', for a question answered by finding what the
 *     passage says, which the page used to badge "Inference".
 *   - Paragraphs: a passage's text holds paragraphs separated by a blank line,
 *     which the page prints one by one, so that a structure question can name
 *     "the third paragraph".
 *   - Passages are dealt whole, so the dealer cannot part the five questions
 *     of one passage: each passage's five were read as a set, so
 *     that no prompt, right answer or explanation states or quotes the answer
 *     to another, and each targets different evidence.
 *   - The five "How effectively...?" questions, every answer beginning "Very
 *     effectively", are gone; each of those passages gained a new question in
 *     its place.
 *   - The six older passages were lengthened to 305 to 327 words, keeping
 *     every sentence an existing question quotes and keeping each ending a
 *     question asks about at the end. The spaced hyphens they used as dashes
 *     (The Market, The Letter, Screen Time) are now commas, colons and full
 *     stops.
 *   - Every existing question's options were rewritten, and their `not`
 *     entries with them: each wrong option is now a true detail read the
 *     wrong way, or a misreading a student makes, close in length to the
 *     answer.
 *   - The Interview: "How does the writer create contrast between Priya's
 *     external appearance and internal state?" had the same answer as "How
 *     does Priya really feel about the interview?". It now asks for the
 *     method, the turn from her reflection to her stomach, and the first
 *     question's explanation cites other evidence.
 *   - The Letter's "What time period" options ("Modern day", "The future",
 *     "Medieval times") are now four settings that only the passage's clues
 *     tell apart.
 *
 * CHECKED (24 October 2026) by a second reader, as the founder decided: every
 * question against its passage, the eleven extracts word for word against
 * src/data/full-texts/ (all match; Pride and Prejudice drops the edition's
 * three italic marks), each author dead by 1955, and the non-fiction facts
 * (swifts sleeping and drinking on the wing and nesting under roofs, the UK
 * decline, teenage melatonin and eight to ten hours, the oryx, lighthouses
 * automated by 1998). Fixed, one line each:
 *
 *   - The Letter, setting: the prompt asked "What time period", but three
 *     options named the same war and differed only in place. It now asks
 *     "When and where is this passage set?".
 *   - Great Expectations, "not yet finished": "Packing, though her trunks are
 *     already full" was half right (the trunks are half-packed). It is now
 *     "Reading the Prayer-book on the table".
 *   - Great Expectations, the white dress: the prompt said "before revealing
 *     that they have faded", which gave the answer. It now asks why the third
 *     paragraph describes them so fully.
 *   - Great Expectations, Pip's reaction: "He finds the room funny" was chosen
 *     by nobody. It is now "He is curious, but feels no fear of her at all".
 *   - The Interview, the washing machine: "she does the laundry most mornings"
 *     was a joke. It is now "a mild flutter of nerves that soon passes".
 *   - Camping, the neighbours: the answer called their pity "amused", which
 *     the passage does not say. It is now "from a comfortable distance".
 *   - Our River, the shallows: "Young fish and a kingfisher" gained the ducks
 *     the pair went to see, so the answer is not the only list.
 *
 *   The form gave answers away. Measured before this check: the only option
 *   with a comma was the answer in 37 of 53 such questions, the only one with
 *   "yet", "but" or "though" in 10 of 17, and in all 18 best-evidence questions
 *   the answer was neither the longest nor the shortest quotation. After: 6 of
 *   23, 0 of 7, and the longest in 6 of 18. Each line below changes the form
 *   only, not what the answer says:
 *
 *   - The Storm, the clause: "Its plain, factual tone..." is now "It makes her
 *     long isolation stark by stating it plainly".
 *   - The Storm, the footsteps: "...explain, leaving suspense" is now "To end
 *     in suspense on a sound no storm can explain".
 *   - The Market, the mackerel: "It makes the fish gleam so that they look
 *     fresh".
 *   - The Letter, "braver than him": the comma is gone.
 *   - The Letter, the monument: "Each letter marks..." is now "The letters
 *     mark her absence, like memorials to the lost", as its options begin.
 *   - The Letter, Thomas: "He copes with sorrow through quiet acts done with
 *     great care".
 *   - Screen Time, the rule of three: the answer alone quoted "consuming" and
 *     alone did not begin "It"; it is now "It builds through two denials to
 *     the criticism at the end".
 *   - Screen Time, the assembly line: "joyless and machine-like".
 *   - Screen Time, parents: "Neutral, since..." is now the reversed
 *     "Sympathetic to parents, yet sure that limits will not work".
 *   - The Interview, her feeling: "Confident, because..." is now the reversed
 *     "Calm inside, though she looks nervous to others".
 *   - The Interview, the dry palm: "One sign of her nerves stays hidden from
 *     him".
 *   - The Interview, Priya: the comma is gone, and "entirely at home" is now
 *     the reversed "She feels at home here yet doubts she can go through
 *     with it".
 *   - Frankenstein, Chapter 5, the narrator: the comma is gone.
 *   - Frankenstein, Chapter 5, self-blame: the "How can I describe..."
 *     distractor is cut to end at "catastrophe".
 *   - Great Expectations, "not yet finished": "Getting dressed in her bridal
 *     clothes".
 *   - Great Expectations, the white dress: "To let the reader see the
 *     splendour before the decay", as its options begin "To".
 *   - Jane Eyre, the last paragraph: "A harsh noise breaks..." is now "It
 *     breaks the calm of the evening with a harsh noise".
 *   - Jane Eyre, solitude: the "Far and wide..." distractor is cut to begin at
 *     "there were only fields".
 *   - Save Our Library, the computers: "as they have no internet at home".
 *   - Save Our Library, the warehouse: "That its real worth lies in the people
 *     it helps".
 *   - Save Our Library, forty years: the comma is gone.
 *   - Save Our Library, "everything is online": "By granting some of it
 *     before showing what websites cannot do".
 *   - Getting It Wrong, the opening: "by admitting a funny failure".
 *   - The War of the Worlds, the delay: "so that dread can build first".
 *   - The War of the Worlds, the last paragraph: "Its long list..." is now "It
 *     piles up a long list of features until horror overwhelms him".
 *   - A Christmas Carol, the cannon-ball: "That it is solid and round and
 *     dotted with fruit" ("dark" was not in the text).
 *   - A Christmas Carol, poverty: the sage-and-onion distractor is cut to
 *     "steeped in sage and onion to the eyebrows".
 *   - The Night Ferry, the swell: "That the sea will be far rougher than he
 *     makes it sound".
 *   - The Night Ferry, the woman: "Her calm, practised kindness..." is now
 *     "She is as calm and kind as someone who often makes this trip".
 *   - The Night Ferry, the ending: "gives way to wonder that makes it worth
 *     it".
 *   - The Swifts Return, "tearing": "They fly fast and with urgent purpose".
 *   - Teenagers and Sleep, viewpoint: "caused entirely by screens" is now the
 *     reversed "Teenage tiredness is mostly habit, though biology plays a
 *     part".
 *   - The Workshop, the shoe: "The chisel has been worn to fit Grandad's
 *     hand".
 *   - The Workshop, the fragments: "each object in turn as Leo does".
 *   - The Workshop, Grandad: "He tries to hide his sadness behind brisk
 *     words".
 *   - The First Day, Ruth: "She helped through steady kindness rather than
 *     lessons".
 *   - Should Zoos Still Exist?, the circuit: "Its endless pacing is a sign
 *     that it is distressed".
 *   - Our River, the kingfisher: "bright and full of hope".
 *   - Our River, the blame: the comma is gone.
 *   - Our River, the small request: the "Give it half a chance..." distractor
 *     is cut to "it will mend itself astonishingly fast".
 *   - Camping, "held forth": "The pattern sets up a joke: to hold forth is..."
 *     defined the idiom; it is now "It repeats 'held' to end on a joke about
 *     his endless talk".
 *   - Camping, the attitude: the comma is gone, and "relaxing and enjoyable
 *     from start to finish" is now the reversed "They enjoy it at first but
 *     have come to hate it by dawn".
 *   - Camping, exaggeration: the air-mattress distractor is cut to "I went to
 *     sleep on a cloud".
 *   - The Lighthouse, the full stop: "It is the last small mark at the very
 *     end of the land".
 *   - The Lighthouse, automation: "a terrible mistake" is now the reversed
 *     "They accept it as progress but think the keepers' work was easy".
 *   - The Lighthouse, the keepers' care: the beehive distractor is cut to "a
 *     huge beehive of prisms".
 *   - Silas Marner, the dog: "Because each was bent under a heavy bag".
 *   - Silas Marner, the "disinherited race": "They seemed like the last
 *     survivors of an outcast people".
 *   - This Year's Pantomime, the jokes: "Groan-worthy jokes..." is now "The
 *     jokes are meant to be bad as part of the fun", as its options begin
 *     "The".
 *   - This Year's Pantomime, the verdict: "A perfect show..." is now the
 *     reversed "A joyful cast, but a show too long to be worth seeing".
 */

export type QuestionType =
  | 'retrieval'
  | 'inference'
  | 'language'
  | 'structure'
  | 'comparison'
  | 'evaluation'

export interface CompQuestion {
  type: QuestionType
  /**
   * 1 retrieval and simple inference; 2 language and structure; 3 evaluation,
   * best evidence, viewpoint and purpose. Added 24 October 2026.
   */
  tier: 1 | 2 | 3
  prompt: string
  options: string[]
  correctIndex: number
}

export interface Passage {
  title: string
  genre: string
  /** Paragraphs separated by a blank line; the page prints each as its own paragraph. */
  text: string
  /**
   * For an extract copied word for word from a public-domain text held in
   * src/data/full-texts/: the file and the section it comes from, so it can
   * be checked against the held text.
   */
  heldText?: { file: string; section: string }
  questions: CompQuestion[]
}

/** A passage's paragraphs, as the page prints them. */
const paragraphs = (...p: string[]) => p.join('\n\n')

export const PASSAGE_BANK: Passage[] = [
  {
    title: 'The Storm',
    genre: 'Gothic Fiction',
    text: paragraphs(
      "The road had flooded on the first night, and the telephone line had gone down with it. Eleanor had come to Harrow End to sort through her great-aunt's belongings before the house was sold, and she had meant to stay for one night only. The house had never been wired beyond the kitchen, so she lived by candlelight now. The lane outside was a brown river, the nearest farm lay two miles off across the open moor, and the only voice in the house belonged to the long-case clock in the hall, which ticked as though it were counting something down.",
      'The sky darkened as if a great curtain had been drawn across the heavens. Thunder rolled across the moors, each clap louder than the last, shaking the very foundations of the old house. Eleanor pressed her face to the window, watching the rain lash against the glass like a thousand tiny fists. The candle behind her flickered, casting dancing shadows across the peeling wallpaper.',
      'She had tried to be sensible. On the first evening she had made a list: books for the charity shop, china for her mother, a drawer of old letters to be burned unread. She had counted the seconds between each flash and its thunder, as her father had taught her when she was small, and reminded herself that a storm was only weather. She had even laughed aloud at the portrait on the landing, a stern woman in black whose eyes seemed to follow her up the stairs. The laugh had not sounded like her own.',
      'She had been alone in this house for three days now, and the silence between the storms was worse than the noise itself. Every creak of the floorboards made her heart stammer. She told herself it was the wind, only the wind, but the footsteps she heard at midnight had sounded too deliberate, too measured, to belong to any storm.',
    ),
    questions: [
      {
        type: 'inference',
        tier: 1,
        prompt: "What can we infer about Eleanor's state of mind?",
        options: [
          'She is calm, because she knows that old houses creak',
          'She is growing more frightened as the days go by',
          'She is bored, with nothing to do but sort books',
          'She is grieving quietly for her great-aunt',
        ],
        correctIndex: 1,
      },
      {
        type: 'language',
        tier: 2,
        prompt: 'What effect does the simile "like a thousand tiny fists" create?',
        options: [
          'It makes the rain sound soft and light, like tapping',
          'It suggests that the window glass is about to shatter',
          'It makes the rain seem to be attacking the old house',
          'It shows that Eleanor wants to strike out at the storm',
        ],
        correctIndex: 2,
      },
      {
        type: 'language',
        tier: 2,
        prompt:
          'What is the effect of the clause "She had been alone in this house for three days now"?',
        options: [
          'It shows she has lost count of the days and is confused',
          'It hints that she chose to be alone and is enjoying it',
          'It begins a flashback to the day she first arrived',
          'It makes her long isolation stark by stating it plainly',
        ],
        correctIndex: 3,
      },
      {
        type: 'structure',
        tier: 2,
        prompt: 'Why does the writer save the detail about footsteps until the end?',
        options: [
          'To end in suspense on a sound no storm can explain',
          'To reveal that all the noises were only the wind after all',
          'To show that Eleanor finally falls asleep at midnight',
          'To explain at last why the telephone line went dead',
        ],
        correctIndex: 0,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt: 'Which judgement about the objects in the house does the passage best support?',
        options: [
          'The candle and the window make the house feel like a safe refuge',
          'The old clock and the portrait are made to seem quietly threatening',
          'The books and china show how much Eleanor treasured her great-aunt',
          'The wallpaper and letters show how lovingly the house has been kept',
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    title: 'The Market',
    genre: 'Descriptive Non-fiction',
    text: paragraphs(
      'Borough Market at dawn is a symphony of preparation. Stallholders arrive in the blue half-light, their breath visible in the cold air, hauling crates of produce that gleam with morning dew. The fishmonger arranges his silver catch in neat rows, each mackerel a small mirror reflecting the strip lights above. Somewhere a radio plays, half-drowned by the clatter of metal shutters being rolled up.',
      'By seven, the first customers appear: chefs in checked trousers, moving with purpose, squeezing avocados and sniffing bunches of coriander with the concentration of surgeons. The air thickens with the smell of fresh bread, roasting coffee, and something sweet, perhaps the doughnuts from the stall on the corner, already drawing a small, patient queue.',
      "By ten, the market belongs to everyone else. Visitors drift between the stalls with their phones held up like lanterns, photographing wheels of cheese the size of drums. A cheesemonger offers a sliver on the tip of a knife to anyone who will stop, and most people do. A man in a flat cap sells honey from his own hives and tells anyone who will listen the names of his bees' favourite flowers. Parents steer pushchairs through gaps that are not quite wide enough, and somewhere a small child is bargaining, loudly and without success, for a second brownie. Overhead, a train rumbles across the arches, and nobody looks up.",
      'By evening, it is over. The shutters come down with the same clatter that raised them, and the fishmonger hoses his empty trays until the concrete shines. What remains is a smell of crushed herbs and wet cardboard, and a single pigeon working its way along the gutter. It is easy to think of a market as a place where things are sold. Watching one from dawn until it empties, I think it is closer to a tide: it comes in, it fills every corner, and then, quite suddenly, it goes out, leaving the floor washed clean for tomorrow.',
    ),
    questions: [
      {
        type: 'inference',
        tier: 1,
        prompt: 'What can we infer about the chefs from their description?',
        options: [
          'They are rushing, so they grab whatever is nearest',
          'They are skilled buyers who judge quality with care',
          'They are new to the market and unsure what to buy',
          'They are bored, and shop only because they have to',
        ],
        correctIndex: 1,
      },
      {
        type: 'language',
        tier: 2,
        prompt: 'Why does the writer describe the market as "a symphony"?',
        options: [
          'Because a band plays live music among the stalls',
          'To show that the market is too loud to think in',
          'To suggest that the market is noisy and disorganised',
          'To suggest that its many jobs and sounds fit together',
        ],
        correctIndex: 3,
      },
      {
        type: 'language',
        tier: 2,
        prompt: 'What effect does the metaphor "each mackerel a small mirror" create?',
        options: [
          'It makes the fish gleam so that they look fresh',
          'It suggests that the fish are still alive and moving',
          'It shows that the fish are too expensive to buy',
          'It shows that the lighting in the market is poor',
        ],
        correctIndex: 0,
      },
      {
        type: 'structure',
        tier: 2,
        prompt: 'How does the writer organise this passage?',
        options: [
          'By place, moving from one stall to the next in turn',
          'Around the fishmonger, from his first job to his last',
          'By time, following one day from dawn until it empties',
          'By comparing two markets in different parts of town',
        ],
        correctIndex: 2,
      },
      {
        type: 'evaluation',
        tier: 2,
        prompt: 'How does the writer appeal to the senses throughout the passage?',
        options: [
          'Mostly through taste, as visitors sample food at stalls',
          'Only through sight, as the writer watches from afar',
          'Through sight, sound, smell and touch, placing us there',
          'Mostly through sound, since the market is like music',
        ],
        correctIndex: 2,
      },
    ],
  },
  {
    title: 'The Letter',
    genre: 'Historical Fiction',
    text: paragraphs(
      'The letter had come with the second post, and his mother had left it propped against the clock on the mantelpiece, unopened, as if it might be safer there. She had gone out to the shop. Thomas knew that she had gone so that she would not have to watch him read it, and he sat at the kitchen table for a long time before he opened it, listening to the tap drip.',
      'Thomas folded the letter carefully, pressing the creases with his thumbnail until the paper was a perfect square. He had read it four times, and each reading had drained a little more colour from his face. His sister was not coming home. The regiment had moved north, she had written, and the field hospital moved with it. She would not leave the wounded.',
      "Thomas understood this. He had always known that Mary was braver than him. When they were children it was Mary who climbed the railway bridge for a dare, Mary who walked him past the Hendersons' dog every morning, Mary who told the teacher the truth about the broken window. When the fighting began she had trained as a nurse within the month, while the mill had kept him at his loom, because cloth for uniforms, the manager said, was war work too. On her last leave she had slept for two whole days, then sat by the fire, very quiet, turning her cup round and round in her hands. But understanding did not lessen the hollow ache in his chest.",
      'He placed the letter in the tin box under his bed, alongside the others, each one a small monument to absence. For a moment he sat on the edge of the bed with the lid in his hands. Outside, the factory whistle blew, summoning him back to the looms, back to the noise that was almost loud enough to drown out thought.',
    ),
    questions: [
      {
        type: 'inference',
        tier: 1,
        prompt: 'When and where is this passage set?',
        options: [
          'During a war, in a farming village with no factories',
          'Some years after a war, once the soldiers are home',
          'During a war, in a town where cloth is woven in mills',
          'During a war, in a port town where warships are built',
        ],
        correctIndex: 2,
      },
      {
        type: 'inference',
        tier: 2,
        prompt: 'What does "braver than him" suggest about Thomas\'s view of himself?',
        options: [
          'He feels he falls short of her and is uneasy at being safe',
          'He believes that his work at the mill is quite as brave as hers',
          'He resents her for always making him look weak and small',
          'He thinks she is reckless and really ought to come home',
        ],
        correctIndex: 0,
      },
      {
        type: 'language',
        tier: 2,
        prompt: 'What does the metaphor "each one a small monument to absence" suggest?',
        options: [
          'The letters are a comfort, keeping Mary close to him at home',
          'The letters record each of the places Mary has been',
          'The letters mark her absence, like memorials to the lost',
          'The letters describe a war memorial that Mary has seen',
        ],
        correctIndex: 2,
      },
      {
        type: 'structure',
        tier: 2,
        prompt: 'Why does the writer end with the factory whistle?',
        options: [
          'To show that Thomas is late for work and will be punished',
          'To show that the war has ended and the mill can rest',
          'To show that hard work will cure his sadness completely',
          'To pull him from his thoughts to work that will not wait',
        ],
        correctIndex: 3,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt: 'Which judgement about Thomas does the passage best support?',
        options: [
          'He is angry with Mary and cannot forgive the choice she made',
          'He copes with sorrow through quiet acts done with great care',
          'He shares his sorrow openly with his mother as soon as he can',
          'He is relieved that Mary will be safer now that she is in the north',
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    title: 'Screen Time',
    genre: 'Persuasive Article',
    text: paragraphs(
      'We are raising a generation of children who cannot look up from their screens. Walk through any restaurant, any waiting room, any playground, and you will see the same haunting scene: small faces illuminated by the blue glow of tablets, thumbs scrolling with the mechanical rhythm of factory workers on an assembly line. These children are not playing. They are not imagining. They are consuming: endlessly, passively, silently.',
      'Last month, on a train to the coast, I sat opposite a boy of about seven. Outside the window, the whole countryside was putting on a show: a kestrel hanging over a field, a castle on a hill, the first grey glint of the sea. He saw none of it. For two hours he watched a stranger open parcels on a tablet, and when the train pulled in he cried, not because the journey had ended but because the battery had. His parents looked exhausted, and I do not blame them. I have been that parent myself, handing over a phone in a restaurant to buy ten minutes of peace.',
      "Some will argue that technology is a tool, and that is true. Screens can carry a grandparent's face across an ocean, or help a struggling reader find the words. A hammer is also a tool, but we do not hand one to a toddler and walk away. The question is not whether screens have value, but whether we have the courage to set boundaries.",
      "So set them. Make the dinner table a place for talking. Leave the tablet at home when you go to the park. Let the car journey be long and the window be the only screen. Children will complain, loudly and at length, and you will be tempted to give in. Do not. Every hour spent watching someone else's life on a screen is an hour not spent living your own.",
    ),
    questions: [
      {
        type: 'retrieval',
        tier: 1,
        prompt: 'Why did the boy on the train cry, according to the writer?',
        options: [
          'Because the journey to the coast was over',
          'Because the battery on his tablet had run out',
          'Because his parents took the tablet away',
          'Because he had missed his first sight of the sea',
        ],
        correctIndex: 1,
      },
      {
        type: 'language',
        tier: 2,
        prompt:
          'What effect does the rule of three "not playing... not imagining... consuming" create?',
        options: [
          'It lists three hobbies the children enjoy on their tablets',
          'It gives a fair, balanced view of how children use screens',
          'It builds through two denials to the criticism at the end',
          'It slows the pace to show that the children are calm',
        ],
        correctIndex: 2,
      },
      {
        type: 'language',
        tier: 2,
        prompt:
          'What is the effect of comparing children to "factory workers on an assembly line"?',
        options: [
          'It makes their scrolling seem joyless and machine-like',
          'It praises the children for being hard-working and focused',
          'It suggests that the children will grow up to work in factories',
          'It shows that the children are working together as a team',
        ],
        correctIndex: 0,
      },
      {
        type: 'structure',
        tier: 2,
        prompt:
          'Why does the writer use the counter-argument "Some will argue that technology is a tool"?',
        options: [
          'To show that the writer has changed their mind about screens',
          'To grant the other side a point, then show it is not enough',
          'To end the article on a fair, balanced and open note',
          'To prove with evidence that screens help children learn',
        ],
        correctIndex: 1,
      },
      {
        type: 'inference',
        tier: 3,
        prompt: "What is the writer's attitude towards parents?",
        options: [
          'Admiring, because they keep their children quiet and safe',
          "Scornful, blaming them alone for every child's screen habit",
          'Sympathetic to parents, yet sure that limits will not work',
          'Sympathetic to tired parents, yet sure they must set limits',
        ],
        correctIndex: 3,
      },
    ],
  },
  {
    title: 'The Garden',
    genre: 'Descriptive Prose',
    text: paragraphs(
      'I let myself in by the side gate before the sun was fully up. The house had stood empty since October, and I had promised its owners that I would keep an eye on the garden until they came home. The latch was so cold that it seemed to bite my fingers, and the hinges gave a long complaint, as if the garden resented being woken. My footprints followed me across the lawn, dark and exact, the only marks on the whole white page of it.',
      "The old garden slept beneath a quilt of frost, each blade of grass a needle of white crystal. The pond had sealed itself shut, a dark eye refusing to blink. Along the wall, the ivy had tightened its grip, knuckles of green pressing into ancient brick. The apple tree, bare to its fingertips, still held a single wrinkled apple that the birds had somehow missed. In the greenhouse, last summer's tomato plants hung from their canes like coats left on their pegs, and the bird bath held a perfect disc of ice, which I lifted out whole and held up to the light.",
      'Nothing moved except the robin, that small defiance of colour against the grey, hopping from post to post as if conducting an orchestra only it could hear. It followed me along the path at a polite distance, head on one side, as though it suspected I might turn up a worm for it. When I stopped, it stopped. It was the only thing in the whole garden that seemed to be in a hurry.',
      'In spring, this place would riot with colour. But now it waited. The patience of a garden in winter is a lesson most humans never learn: that stillness is not emptiness, and silence is not the same as having nothing to say.',
    ),
    questions: [
      {
        type: 'inference',
        tier: 1,
        prompt: 'What broader message does the final sentence convey?',
        options: [
          'That people should spend more of their time gardening',
          'That quiet and stillness are not the same as emptiness',
          'That winter is a far better season than spring or summer',
          'That most people talk too much and should stay silent',
        ],
        correctIndex: 1,
      },
      {
        type: 'language',
        tier: 2,
        prompt:
          'What does the personification of the pond as "a dark eye refusing to blink" suggest?',
        options: [
          'The pond is deep, and its water has been dirty for years',
          'The pond is stubborn because it is angry with the narrator',
          'There are fish under the ice, watching the narrator pass',
          'The frozen pond seems alive and watchful, and faintly eerie',
        ],
        correctIndex: 3,
      },
      {
        type: 'language',
        tier: 2,
        prompt: 'How does the writer present the robin?',
        options: [
          'As a bold, bright exception in a garden that is still',
          'As a timid bird that hides whenever the narrator comes near',
          'As part of the frozen scene, as motionless as the pond',
          'As a threat, guarding the garden against all visitors',
        ],
        correctIndex: 0,
      },
      {
        type: 'structure',
        tier: 2,
        prompt: 'Why does the writer shift to spring at the end?',
        options: [
          'To show that the narrator would rather it were spring',
          'To describe what the garden looked like last spring',
          'To set the waiting garden against the colour to come',
          'To suggest that the winter has killed the garden for good',
        ],
        correctIndex: 2,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt: 'Which judgement about the narrator does the passage best support?',
        options: [
          'They resent the cold and want to get back indoors soon',
          'They find the empty garden lonely and depressing',
          'They are planning how to change the garden in spring',
          'They notice small things closely and with quiet wonder',
        ],
        correctIndex: 3,
      },
    ],
  },
  {
    title: 'The Interview',
    genre: 'Modern Fiction',
    text: paragraphs(
      'The building was the tallest on the street, a column of dark glass that held the whole sky upside down. Priya walked past it twice before she found the courage to go in. In her bag was a plastic wallet from the supermarket, holding three copies of a CV she had printed at the library that morning, and her phone, with a text from her mother that she had read on the bus until she knew it by heart: "Whatever happens, we are proud of you."',
      'The reception desk was a single slab of white stone. A young man in a headset asked, "How may I direct you?" and typed her name without looking up. On the leather sofa opposite, another candidate was reading a newspaper as though he had all the time in the world. His folder was leather too. Priya sat as far from him as the sofa allowed and held her plastic wallet flat on her knees, as if it might blow away.',
      'Priya smoothed the front of her blazer for the fourth time and checked her reflection in the lift doors. The woman staring back looked composed, professional, exactly the kind of person who belonged in a building with marble floors and receptionists who said "How may I direct you?" But inside, Priya\'s stomach was a washing machine on spin cycle. She had rehearsed her answers until they felt like someone else\'s words. "My greatest weakness is that I care too much about quality." Who actually said things like that?',
      'She stepped out onto the fourteenth floor. The corridor was silent except for the hum of air conditioning and the soft click of her heels on polished concrete. A door opened. A man in a grey suit smiled and extended his hand. "Priya? We\'ve been looking forward to meeting you." She shook his hand. Her palm was dry. That, at least, was a small victory.',
    ),
    questions: [
      {
        type: 'inference',
        tier: 1,
        prompt: 'How does Priya really feel about the interview?',
        options: [
          'Calm inside, though she looks nervous to others',
          'Anxious, though she is working hard to hide it',
          'Excited, because she has prepared so thoroughly',
          'Bored, because she has heard these questions before',
        ],
        correctIndex: 1,
      },
      {
        type: 'language',
        tier: 2,
        prompt:
          'What effect does the metaphor "stomach was a washing machine on spin cycle" create?',
        options: [
          'It suggests that she is hungry and wants her lunch',
          'It suggests a mild flutter of nerves that soon passes',
          'It suggests she is ill and should not be there',
          'It conveys a churning feeling that she cannot stop',
        ],
        correctIndex: 3,
      },
      {
        type: 'structure',
        tier: 2,
        prompt:
          "How does the writer create contrast between Priya's external appearance and internal state?",
        options: [
          'Through a flashback to an earlier interview that went badly',
          "Through the man's words, which show he can see her nerves",
          'By moving from the calm reflection to what her stomach does',
          'By describing the cold marble and concrete of the building',
        ],
        correctIndex: 2,
      },
      {
        type: 'language',
        tier: 2,
        prompt: 'Why is "Her palm was dry" described as "a small victory"?',
        options: [
          'One sign of her nerves stays hidden from him',
          'Her nerves have now gone away completely and for good',
          'She has already won the job with her handshake',
          'The man has praised her for her firm handshake',
        ],
        correctIndex: 0,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt: 'Which judgement about Priya does the passage best support?',
        options: [
          'She feels quietly superior to the relaxed man on the sofa',
          'She has lost her nerve and means to leave before she is called',
          'She feels out of place here yet is set on seeing it through',
          'She feels at home here yet doubts she can go through with it',
        ],
        correctIndex: 2,
      },
    ],
  },
  {
    title: 'Frankenstein, Chapter 5',
    genre: '19th-century fiction: Mary Shelley',
    heldText: { file: 'frankenstein', section: 'Chapter V' },
    text: paragraphs(
      'It was on a dreary night of November, that I beheld the accomplishment of my toils. With an anxiety that almost amounted to agony, I collected the instruments of life around me, that I might infuse a spark of being into the lifeless thing that lay at my feet. It was already one in the morning; the rain pattered dismally against the panes, and my candle was nearly burnt out, when, by the glimmer of the half-extinguished light, I saw the dull yellow eye of the creature open; it breathed hard, and a convulsive motion agitated its limbs.',
      'How can I describe my emotions at this catastrophe, or how delineate the wretch whom with such infinite pains and care I had endeavoured to form? His limbs were in proportion, and I had selected his features as beautiful. Beautiful!--Great God! His yellow skin scarcely covered the work of muscles and arteries beneath; his hair was of a lustrous black, and flowing; his teeth of a pearly whiteness; but these luxuriances only formed a more horrid contrast with his watery eyes, that seemed almost of the same colour as the dun white sockets in which they were set, his shrivelled complexion and straight black lips.',
      'The different accidents of life are not so changeable as the feelings of human nature. I had worked hard for nearly two years, for the sole purpose of infusing life into an inanimate body. For this I had deprived myself of rest and health. I had desired it with an ardour that far exceeded moderation; but now that I had finished, the beauty of the dream vanished, and breathless horror and disgust filled my heart. Unable to endure the aspect of the being I had created, I rushed out of the room, and continued a long time traversing my bedchamber, unable to compose my mind to sleep. At length lassitude succeeded to the tumult I had before endured; and I threw myself on the bed in my clothes, endeavouring to seek a few moments of forgetfulness. But it was in vain: I slept, indeed, but I was disturbed by the wildest dreams.',
    ),
    questions: [
      {
        type: 'retrieval',
        tier: 1,
        prompt: 'According to the third paragraph, what has the narrator given up for his work?',
        options: [
          'His family and his home',
          'His rest and his health',
          'His fortune and his good name',
          'His faith and his friendships',
        ],
        correctIndex: 1,
      },
      {
        type: 'language',
        tier: 2,
        prompt:
          'In the first paragraph, which word most suggests the strain the narrator feels before the creature wakes?',
        options: [
          "'dreary', because the November night shows how tired he has become",
          "'agony', because his anxiety is so intense that it is almost pain",
          "'dismally', because the sound of the rain reflects his own sadness",
          "'convulsive', because the sudden movement shows how afraid he is",
        ],
        correctIndex: 1,
      },
      {
        type: 'language',
        tier: 2,
        prompt:
          'What does the phrase "these luxuriances only formed a more horrid contrast" suggest about the creature?',
        options: [
          'Its fine features make up for the ugly ones in the end',
          'It is vain, and proud of its lustrous, flowing hair',
          'Its fine features make its ugly ones look even worse',
          'Its body is healthy, so the experiment has succeeded',
        ],
        correctIndex: 2,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt: 'Which quotation best suggests that the narrator blames himself for going too far?',
        options: [
          'How can I describe my emotions at this catastrophe',
          'With an anxiety that almost amounted to agony',
          'I had worked hard for nearly two years',
          'I had desired it with an ardour that far exceeded moderation',
        ],
        correctIndex: 3,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt: 'Which judgement about the narrator does the extract best support?',
        options: [
          'He cannot bear to face what he has made and runs from it',
          'He is proud of his creation and eager to show it to others',
          'He pities the creature and wants to help it learn to live',
          'He stays calm and records the facts like a careful scientist',
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    title: 'Great Expectations, Chapter 8',
    genre: '19th-century fiction: Charles Dickens',
    heldText: { file: 'great-expectations', section: 'Chapter 8' },
    text: paragraphs(
      "This was very uncomfortable, and I was half afraid. However, the only thing to be done being to knock at the door, I knocked, and was told from within to enter. I entered, therefore, and found myself in a pretty large room, well lighted with wax candles. No glimpse of daylight was to be seen in it. It was a dressing-room, as I supposed from the furniture, though much of it was of forms and uses then quite unknown to me. But prominent in it was a draped table with a gilded looking-glass, and that I made out at first sight to be a fine lady's dressing-table.",
      'Whether I should have made out this object so soon, if there had been no fine lady sitting at it, I cannot say. In an arm-chair, with an elbow resting on the table and her head leaning on that hand, sat the strangest lady I have ever seen, or shall ever see.',
      'She was dressed in rich materials—satins, and lace, and silks—all of white. Her shoes were white. And she had a long white veil dependent from her hair, and she had bridal flowers in her hair, but her hair was white. Some bright jewels sparkled on her neck and on her hands, and some other jewels lay sparkling on the table. Dresses, less splendid than the dress she wore, and half-packed trunks, were scattered about. She had not quite finished dressing, for she had but one shoe on—the other was on the table near her hand—her veil was but half-arranged, her watch and chain were not put on, and some lace for her bosom lay with those trinkets, and with her handkerchief, and gloves, and some flowers, and a Prayer-book, all confusedly heaped about the looking-glass.',
      'It was not in the first few moments that I saw all these things, though I saw more of them in the first moments than might be supposed. But, I saw that everything within my view which ought to be white, had been white long ago, and had lost its lustre, and was faded and yellow. I saw that the bride within the bridal dress had withered like the dress, and like the flowers, and had no brightness left but the brightness of her sunken eyes. I saw that the dress had been put upon the rounded figure of a young woman, and that the figure upon which it now hung loose, had shrunk to skin and bone. Once, I had been taken to see some ghastly waxwork at the Fair, representing I know not what impossible personage lying in state. Once, I had been taken to one of our old marsh churches to see a skeleton in the ashes of a rich dress, that had been dug out of a vault under the church pavement. Now, waxwork and skeleton seemed to have dark eyes that moved and looked at me. I should have cried out, if I could.',
    ),
    questions: [
      {
        type: 'retrieval',
        tier: 1,
        prompt: 'What has the lady not yet finished doing?',
        options: [
          'Reading the Prayer-book on the table',
          'Writing a letter that lies on the table',
          'Getting dressed in her bridal clothes',
          'Eating the meal laid out beside her',
        ],
        correctIndex: 2,
      },
      {
        type: 'language',
        tier: 2,
        prompt: 'Which word most suggests what time has done to the lady?',
        options: [
          "'sparkled', because her jewels show that she is still young",
          "'rich', because her clothes show she has kept her wealth",
          "'confusedly', because it shows that she has lost her memory",
          "'withered', because it likens her to a flower that is dying",
        ],
        correctIndex: 3,
      },
      {
        type: 'structure',
        tier: 2,
        prompt:
          'Why does the writer describe the white dress and jewels so fully in the third paragraph?',
        options: [
          'To let the reader see the splendour before the decay',
          'To show that she is getting ready for her wedding today',
          'To show that the narrator knows a great deal about fashion',
          'To show that the room is tidy and carefully looked after',
        ],
        correctIndex: 0,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt:
          'Which quotation best suggests that the lady has worn her wedding dress for many years?',
        options: [
          'Some bright jewels sparkled on her neck and on her hands',
          'the figure upon which it now hung loose, had shrunk to skin and bone',
          'Dresses, less splendid than the dress she wore, and half-packed trunks',
          'She had not quite finished dressing, for she had but one shoe on',
        ],
        correctIndex: 1,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt: "Which judgement about the narrator's reaction does the extract best support?",
        options: [
          'He is calm, as he has seen such sights at the Fair before',
          'He is drawn to look closely, even while he is horrified',
          'He pities her and wants to help her finish dressing',
          'He is curious, but feels no fear of her at all',
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    title: 'Jane Eyre, Chapter 12',
    genre: '19th-century fiction: Charlotte Brontë',
    heldText: { file: 'jane-eyre', section: 'Chapter 12' },
    text: paragraphs(
      'The ground was hard, the air was still, my road was lonely; I walked fast till I got warm, and then I walked slowly to enjoy and analyse the species of pleasure brooding for me in the hour and situation. It was three o’clock; the church bell tolled as I passed under the belfry: the charm of the hour lay in its approaching dimness, in the low-gliding and pale-beaming sun. I was a mile from Thornfield, in a lane noted for wild roses in summer, for nuts and blackberries in autumn, and even now possessing a few coral treasures in hips and haws, but whose best winter delight lay in its utter solitude and leafless repose. If a breath of air stirred, it made no sound here; for there was not a holly, not an evergreen to rustle, and the stripped hawthorn and hazel bushes were as still as the white, worn stones which causewayed the middle of the path. Far and wide, on each side, there were only fields, where no cattle now browsed; and the little brown birds, which stirred occasionally in the hedge, looked like single russet leaves that had forgotten to drop.',
      'This lane inclined up-hill all the way to Hay; having reached the middle, I sat down on a stile which led thence into a field. Gathering my mantle about me, and sheltering my hands in my muff, I did not feel the cold, though it froze keenly; as was attested by a sheet of ice covering the causeway, where a little brooklet, now congealed, had overflowed after a rapid thaw some days since. From my seat I could look down on Thornfield: the grey and battlemented hall was the principal object in the vale below me; its woods and dark rookery rose against the west. I lingered till the sun went down amongst the trees, and sank crimson and clear behind them. I then turned eastward.',
      'On the hill-top above me sat the rising moon; pale yet as a cloud, but brightening momentarily, she looked over Hay, which, half lost in trees, sent up a blue smoke from its few chimneys: it was yet a mile distant, but in the absolute hush I could hear plainly its thin murmurs of life. My ear, too, felt the flow of currents; in what dales and depths I could not tell: but there were many hills beyond Hay, and doubtless many becks threading their passes. That evening calm betrayed alike the tinkle of the nearest streams, the sough of the most remote.',
      'A rude noise broke on these fine ripplings and whisperings, at once so far away and so clear: a positive tramp, tramp, a metallic clatter, which effaced the soft wave-wanderings; as, in a picture, the solid mass of a crag, or the rough boles of a great oak, drawn in dark and strong on the foreground, efface the aërial distance of azure hill, sunny horizon, and blended clouds where tint melts into tint.',
    ),
    questions: [
      {
        type: 'retrieval',
        tier: 1,
        prompt: 'Why does the narrator not feel the cold as she sits on the stile?',
        options: [
          'She walked fast up the lane and is still warm from it',
          'Her mantle is wrapped round her and her hands are in a muff',
          'The low winter sun is still warming the side of the hill',
          'She is sitting close to a fire in the nearby village of Hay',
        ],
        correctIndex: 1,
      },
      {
        type: 'language',
        tier: 2,
        prompt:
          'What does the comparison of the birds to "single russet leaves that had forgotten to drop" suggest?',
        options: [
          'They are dying, one by one, in the bitter cold of the winter',
          'They are so small, brown and still that they blend into the hedge',
          'Autumn has not quite ended yet, so the leaves are still falling',
          'They are bright and colourful against the white winter snow',
        ],
        correctIndex: 1,
      },
      {
        type: 'structure',
        tier: 2,
        prompt: 'What is the effect of the shift in the last paragraph of the extract?',
        options: [
          'It shows the narrator falling asleep on the stile at dusk',
          'It moves the scene from the evening back to the morning',
          'It describes a painting that the narrator once saw',
          'It breaks the calm of the evening with a harsh noise',
        ],
        correctIndex: 3,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt: 'Which judgement about the third paragraph does the extract best support?',
        options: [
          'The narrator hears nothing at all in the absolute hush',
          'Her hearing takes over from her sight as the dusk falls',
          'Darkness falls, and the narrator can no longer see Hay',
          'The rising moon frightens the narrator with its cold light',
        ],
        correctIndex: 1,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt: 'Which quotation best suggests that the narrator enjoys being alone?',
        options: [
          'there were only fields, where no cattle now browsed',
          'the church bell tolled as I passed under the belfry',
          'whose best winter delight lay in its utter solitude and leafless repose',
          'I did not feel the cold, though it froze keenly',
        ],
        correctIndex: 2,
      },
    ],
  },
  {
    title: 'Save Our Library',
    genre: 'Letter to a newspaper',
    text: paragraphs(
      'Dear Editor,',
      "I am writing about the council's plan to close the library on Station Road, which your newspaper described last week as a sensible saving. I would like to suggest, as politely as I can manage, that it is nothing of the kind.",
      'I have used that library for forty years. I borrowed my first book there, a battered story about a lighthouse, and I have watched my own children, and then my grandchildren, queue at the same desk with the same look of serious excitement. But this is not a letter about nostalgia. A library is not a warehouse for books. It is the only warm building in town where you are welcome without being asked to buy anything.',
      'Go in on any weekday afternoon and look around. There is the homework club, where children whose homes are too crowded or too noisy find a quiet table and a patient volunteer. There are people applying for jobs on the public computers, because not everyone has the internet at home, whatever we may assume. And there are the regulars, many of them living alone, for whom a chat with the staff may be the only conversation they have all day.',
      'The council says that everything is online now. Some of it is. But a website cannot help you fill in a form when your eyesight is failing, and a search engine has never once noticed that an old man has not been in for a week and picked up the phone to check that he is all right. Our librarians have.',
      'Closing the library would save money this year. It would cost us far more in the years to come: in lonely people, in children with nowhere to work, and in a town that has quietly decided that some of its people do not matter. There is a public meeting at the town hall on Thursday at seven. I urge every reader who has ever borrowed a book, or simply sheltered there from the rain, to come.',
      'Yours faithfully,',
      'M. Lowe',
    ),
    questions: [
      {
        type: 'retrieval',
        tier: 1,
        prompt: "According to the letter, why do some people use the library's computers?",
        options: [
          'To play games together after school with their friends',
          'To apply for jobs as they have no internet at home',
          'Because the library computers are faster than theirs',
          "To read about the council's plan to close the library",
        ],
        correctIndex: 1,
      },
      {
        type: 'language',
        tier: 2,
        prompt: 'What does the writer suggest by saying "A library is not a warehouse for books"?',
        options: [
          'That the library has too few books and badly needs more',
          'That the books are stored badly and gathering dust',
          'That its real worth lies in the people it helps',
          'That the books should be sold off to save the council money',
        ],
        correctIndex: 2,
      },
      {
        type: 'structure',
        tier: 2,
        prompt: 'Why does the writer mention having used the library for forty years?',
        options: [
          'To show the letter comes from long first-hand experience',
          'To prove that the building is far too old to be kept open',
          'To turn the whole letter into a fond story about the past',
          'To complain that the library has not changed in all those years',
        ],
        correctIndex: 0,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt:
          'How does the writer deal with the council\'s argument that "everything is online now"?',
        options: [
          'By agreeing with it fully and suggesting the library move online',
          'By ignoring it and writing only about personal memories',
          'By proving it wrong with figures about how people use the internet',
          'By granting some of it before showing what websites cannot do',
        ],
        correctIndex: 3,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt:
          'What is the main purpose of the paragraph that begins "Closing the library would save money this year"?',
        options: [
          'To thank the council for listening to the views of the town',
          'To weigh the true cost of closing and urge readers to act',
          'To admit that closing the library would save money',
          'To describe the people who use the library each day',
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    title: 'Getting It Wrong',
    genre: 'Speech to a school assembly',
    text: paragraphs(
      'Good morning. I want to start with a confession, and it is not a small one. I failed my driving test three times.',
      "The first time, I drove the wrong way round a roundabout. The second time, I stalled at a green light, then stalled again, then a third time, while a lorry driver behind me explained his feelings through the medium of his horn. The third time, I did everything perfectly for forty minutes and then reversed, very slowly and very carefully, into the examiner's own car.",
      'You are laughing. Good. I laughed too, eventually, though not on the day. On the day I sat in the test centre car park and decided that I was simply not a person who could drive, and that I would spend the rest of my life on buses. That is the dangerous moment, I think: not the mistake itself, but the story we tell ourselves straight afterwards.',
      'Because here is the thing nobody tells you at sixteen. Getting something wrong is not the opposite of learning. It is how learning happens. Every wrong answer in your mock papers is a small map of exactly what you do not yet know, and a map, however embarrassing, is more useful than a blindfold. The people who never get anything wrong are not the clever ones. They are the ones who never try anything difficult.',
      'So this term, I would like you to do something that will feel strange. When you get a question wrong, do not hide it. Circle it. Ask why. Find the mistake, name it and fix it, and then go looking for the next one. Treat your errors like evidence, not like a verdict.',
      'I passed my driving test on the fourth attempt. I have now been driving for twenty years, and I have never once reversed into anybody. You will get things wrong this year. Of course you will. The only question that matters is what you do next.',
    ),
    questions: [
      {
        type: 'retrieval',
        tier: 1,
        prompt: "What happened on the speaker's third driving test?",
        options: [
          'The speaker drove the wrong way round a roundabout',
          'The speaker stalled three times at a green light',
          "The speaker reversed into the examiner's own car",
          'The speaker passed after forty perfect minutes',
        ],
        correctIndex: 2,
      },
      {
        type: 'language',
        tier: 2,
        prompt:
          'What is the effect of the phrase "explained his feelings through the medium of his horn"?',
        options: [
          "It turns an angry driver's hooting into a mock-polite joke",
          'It shows that the lorry driver was calm and trying to help',
          'It suggests that the speaker was hurt in a serious crash',
          'It shows that the speaker was furious with the lorry driver',
        ],
        correctIndex: 0,
      },
      {
        type: 'structure',
        tier: 2,
        prompt: 'Why does the speaker open with the story of failing the driving test?',
        options: [
          'To teach the audience how to pass their driving tests',
          'To show that driving tests are unfair to young people',
          'To win the audience over by admitting a funny failure',
          'To boast that the speaker is now a skilled driver',
        ],
        correctIndex: 2,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt:
          "Which quotation best shows that a mistake once shook the speaker's belief in themselves?",
        options: [
          'I want to start with a confession, and it is not a small one',
          'decided that I was simply not a person who could drive',
          'I did everything perfectly for forty minutes',
          'I failed my driving test three times',
        ],
        correctIndex: 1,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt: "What is the speaker's main purpose?",
        options: [
          'To entertain the students with stories about learning to drive',
          'To warn the students that their exams will be very difficult',
          'To persuade the students to treat mistakes as part of learning',
          'To explain how to mark a mock paper accurately and quickly',
        ],
        correctIndex: 2,
      },
    ],
  },
  {
    title: 'The Sign of Four, Chapter 3',
    genre: '19th-century fiction: Arthur Conan Doyle',
    heldText: { file: 'the-sign-of-four', section: 'Chapter III' },
    text: paragraphs(
      'It was a September evening, and not yet seven o’clock, but the day had been a dreary one, and a dense drizzly fog lay low upon the great city. Mud-coloured clouds drooped sadly over the muddy streets. Down the Strand the lamps were but misty splotches of diffused light which threw a feeble circular glimmer upon the slimy pavement. The yellow glare from the shop-windows streamed out into the steamy, vaporous air, and threw a murky, shifting radiance across the crowded thoroughfare. There was, to my mind, something eerie and ghost-like in the endless procession of faces which flitted across these narrow bars of light,—sad faces and glad, haggard and merry. Like all human kind, they flitted from the gloom into the light, and so back into the gloom once more. I am not subject to impressions, but the dull, heavy evening, with the strange business upon which we were engaged, combined to make me nervous and depressed. I could see from Miss Morstan’s manner that she was suffering from the same feeling. Holmes alone could rise superior to petty influences. He held his open note-book upon his knee, and from time to time he jotted down figures and memoranda in the light of his pocket-lantern.',
      'At the Lyceum Theatre the crowds were already thick at the side-entrances. In front a continuous stream of hansoms and four-wheelers were rattling up, discharging their cargoes of shirt-fronted men and beshawled, bediamonded women. We had hardly reached the third pillar, which was our rendezvous, before a small, dark, brisk man in the dress of a coachman accosted us.',
      '“Are you the parties who come with Miss Morstan?” he asked.',
      '“I am Miss Morstan, and these two gentlemen are my friends,” said she.',
      'He bent a pair of wonderfully penetrating and questioning eyes upon us. “You will excuse me, miss,” he said with a certain dogged manner, “but I was to ask you to give me your word that neither of your companions is a police-officer.”',
      '“I give you my word on that,” she answered.',
    ),
    questions: [
      {
        type: 'retrieval',
        tier: 1,
        prompt: 'Where do the narrator and his companions meet the coachman?',
        options: [
          'In the theatre itself, during the play',
          'By the third pillar at the Lyceum Theatre',
          'On the Strand, under one of the misty lamps',
          "At the front door of Miss Morstan's lodgings",
        ],
        correctIndex: 1,
      },
      {
        type: 'language',
        tier: 2,
        prompt: "Which word most suggests that the city's lights are weak and blurred in the fog?",
        options: [
          "'glare', because the shop lights are harsh, bright and dazzling",
          "'splotches', because the lamps make shapeless smears of light",
          "'crowded', because the people block the light from view",
          "'radiance', because the light is warm, bright and cheerful",
        ],
        correctIndex: 1,
      },
      {
        type: 'language',
        tier: 2,
        prompt:
          'What does the narrator suggest by saying the faces "flitted from the gloom into the light, and so back into the gloom once more"?',
        options: [
          'That the people are ghosts haunting the foggy Strand',
          'That the crowd is marching in a planned procession',
          'That most Londoners enjoy walking out on cold, foggy nights',
          'That human lives seem brief, passing from dark to dark',
        ],
        correctIndex: 3,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt: "Which quotation best shows that the weather affects the narrator's mood?",
        options: [
          'Holmes alone could rise superior to petty influences',
          'the dull, heavy evening ... combined to make me nervous and depressed',
          'a dense drizzly fog lay low upon the great city',
          'I could see from Miss Morstan’s manner that she was suffering from the same feeling',
        ],
        correctIndex: 1,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt: "Which judgement about the coachman's request does the extract best support?",
        options: [
          'It shows that the coachman is a police officer in disguise',
          'It suggests that whoever sent him wants to avoid the police',
          'It proves that Miss Morstan has broken the law herself in some way',
          "It shows that he is worried about Miss Morstan's safety",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    title: 'The War of the Worlds, Book 1, Chapter 4',
    genre: '19th-century fiction: H. G. Wells',
    heldText: {
      file: 'the-war-of-the-worlds',
      section: 'Book One, Chapter IV: The Cylinder Opens',
    },
    text: paragraphs(
      'I think everyone expected to see a man emerge—possibly something a little unlike us terrestrial men, but in all essentials a man. I know I did. But, looking, I presently saw something stirring within the shadow: greyish billowy movements, one above another, and then two luminous disks—like eyes. Then something resembling a little grey snake, about the thickness of a walking stick, coiled up out of the writhing middle, and wriggled in the air towards me—and then another.',
      'A sudden chill came over me. There was a loud shriek from a woman behind. I half turned, keeping my eyes fixed upon the cylinder still, from which other tentacles were now projecting, and began pushing my way back from the edge of the pit. I saw astonishment giving place to horror on the faces of the people about me. I heard inarticulate exclamations on all sides. There was a general movement backwards. I saw the shopman struggling still on the edge of the pit. I found myself alone, and saw the people on the other side of the pit running off, Stent among them. I looked again at the cylinder, and ungovernable terror gripped me. I stood petrified and staring.',
      'A big greyish rounded bulk, the size, perhaps, of a bear, was rising slowly and painfully out of the cylinder. As it bulged up and caught the light, it glistened like wet leather.',
      'Two large dark-coloured eyes were regarding me steadfastly. The mass that framed them, the head of the thing, was rounded, and had, one might say, a face. There was a mouth under the eyes, the lipless brim of which quivered and panted, and dropped saliva. The whole creature heaved and pulsated convulsively. A lank tentacular appendage gripped the edge of the cylinder, another swayed in the air.',
      'Those who have never seen a living Martian can scarcely imagine the strange horror of its appearance. The peculiar V-shaped mouth with its pointed upper lip, the absence of brow ridges, the absence of a chin beneath the wedgelike lower lip, the incessant quivering of this mouth, the Gorgon groups of tentacles, the tumultuous breathing of the lungs in a strange atmosphere, the evident heaviness and painfulness of movement due to the greater gravitational energy of the earth—above all, the extraordinary intensity of the immense eyes—were at once vital, intense, inhuman, crippled and monstrous. There was something fungoid in the oily brown skin, something in the clumsy deliberation of the tedious movements unspeakably nasty. Even at this first encounter, this first glimpse, I was overcome with disgust and dread.',
    ),
    questions: [
      {
        type: 'inference',
        tier: 1,
        prompt: 'What did the narrator expect to come out of the cylinder?',
        options: [
          'A machine that had been built to attack the people of Earth',
          'Something like a man, if a little different from us',
          'Nothing at all, as he thought it would be empty',
          'A grey snake, like the one he saw moving inside',
        ],
        correctIndex: 1,
      },
      {
        type: 'language',
        tier: 2,
        prompt: 'Which word most suggests that the narrator is too frightened to move?',
        options: [
          "'chill', because the cold air stops him from running",
          "'shriek', because the woman's scream freezes him to the spot",
          "'petrified', because it means turned to stone with fear",
          "'staring', because he cannot take his eyes off the pit",
        ],
        correctIndex: 2,
      },
      {
        type: 'structure',
        tier: 2,
        prompt:
          "Why does the writer describe the crowd's horror and the narrator's terror before giving a full description of the creature?",
        options: [
          'To delay the full view so that dread can build first',
          'Because the narrator never sees the creature clearly',
          'To show that the crowd is braver than the narrator',
          'To suggest that the creature has already climbed out of the pit',
        ],
        correctIndex: 0,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt:
          'Which quotation best suggests that the creature is weak or suffering, rather than all-powerful?',
        options: [
          'the extraordinary intensity of the immense eyes',
          'the Gorgon groups of tentacles',
          'Two large dark-coloured eyes were regarding me steadfastly',
          'the evident heaviness and painfulness of movement',
        ],
        correctIndex: 3,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt: 'Which judgement about the final paragraph does the extract best support?',
        options: [
          'It describes the creature coolly and scientifically, without feeling',
          'It piles up a long list of features until horror overwhelms him',
          'It makes the creature seem friendly and curious about humans',
          'It shows the narrator slowly losing his fear of the creature as he looks',
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    title: 'A Christmas Carol, Stave 3',
    genre: '19th-century fiction: Charles Dickens',
    heldText: { file: 'a-christmas-carol', section: 'Stave III: The Second of the Three Spirits' },
    text: paragraphs(
      "There never was such a goose. Bob said he didn't believe there ever was such a goose cooked. Its tenderness and flavour, size and cheapness, were the themes of universal admiration. Eked out by apple-sauce and mashed potatoes, it was a sufficient dinner for the whole family; indeed, as Mrs. Cratchit said with great delight (surveying one small atom of a bone upon the dish), they hadn't ate it all at last! Yet every one had had enough, and the youngest Cratchits in particular, were steeped in sage and onion to the eyebrows! But now, the plates being changed by Miss Belinda, Mrs. Cratchit left the room alone--too nervous to bear witnesses--to take the pudding up and bring it in.",
      'Suppose it should not be done enough! Suppose it should break in turning out! Suppose somebody should have got over the wall of the back-yard, and stolen it, while they were merry with the goose--a supposition at which the two young Cratchits became livid! All sorts of horrors were supposed.',
      "Hallo! A great deal of steam! The pudding was out of the copper. A smell like a washing-day! That was the cloth. A smell like an eating-house and a pastrycook's next door to each other, with a laundress's next door to that! That was the pudding! In half a minute Mrs. Cratchit entered--flushed, but smiling proudly--with the pudding, like a speckled cannon-ball, so hard and firm, blazing in half of half-a-quartern of ignited brandy, and bedight with Christmas holly stuck into the top.",
      'Oh, a wonderful pudding! Bob Cratchit said, and calmly too, that he regarded it as the greatest success achieved by Mrs. Cratchit since their marriage. Mrs. Cratchit said that now the weight was off her mind, she would confess she had had her doubts about the quantity of flour. Everybody had something to say about it, but nobody said or thought it was at all a small pudding for a large family. It would have been flat heresy to do so. Any Cratchit would have blushed to hint at such a thing.',
      "At last the dinner was all done, the cloth was cleared, the hearth swept, and the fire made up. The compound in the jug being tasted, and considered perfect, apples and oranges were put upon the table, and a shovel-full of chestnuts on the fire. Then all the Cratchit family drew round the hearth, in what Bob Cratchit called a circle, meaning half a one; and at Bob Cratchit's elbow stood the family display of glass. Two tumblers, and a custard-cup without a handle.",
    ),
    questions: [
      {
        type: 'retrieval',
        tier: 1,
        prompt: 'Why does Mrs Cratchit leave the room alone?',
        options: [
          'She is cross that the goose turned out too small',
          'She is too nervous to have anyone else watch her',
          'She wants to surprise them with a second goose',
          'She has to fetch the pudding from next door',
        ],
        correctIndex: 1,
      },
      {
        type: 'language',
        tier: 2,
        prompt: 'What does the comparison of the pudding to "a speckled cannon-ball" suggest?',
        options: [
          'That it is dangerous and might explode in the kitchen',
          'That it has been burnt black in the copper while it was cooking',
          'That it is solid and round and dotted with fruit',
          'That it is far too small for such a large family',
        ],
        correctIndex: 2,
      },
      {
        type: 'structure',
        tier: 2,
        prompt: 'What is the effect of the three sentences beginning "Suppose..."?',
        options: [
          "They build up the whole family's fears into comic suspense",
          'They show that the pudding really was stolen from the yard',
          'They give instructions for making a Christmas pudding',
          'They show that Mrs Cratchit is sure the pudding has failed',
        ],
        correctIndex: 0,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt:
          "Which judgement about the narrator's attitude to the Cratchits does the extract best support?",
        options: [
          'He mocks them harshly for being poor and foolish',
          'He pities them so much that he cannot enjoy the happy scene',
          'He describes them coldly, giving no opinion of his own',
          'He gently teases their pride while sharing their delight',
        ],
        correctIndex: 3,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt: 'Which detail best suggests, without saying so, that the Cratchits are poor?',
        options: [
          'apples and oranges were put upon the table',
          'steeped in sage and onion to the eyebrows',
          'Two tumblers, and a custard-cup without a handle',
          'Mrs. Cratchit said with great delight',
        ],
        correctIndex: 2,
      },
    ],
  },
  {
    title: 'The Night Ferry',
    genre: 'Travel writing',
    text: paragraphs(
      'The man at the ticket office looked at the sky, then at me, then at the sky again. "Bit of a swell tonight," he said, in the voice a dentist uses for the words "slight pressure". I did not yet know that, in his language, a bit of a swell meant waves the size of houses.',
      'The ferry left at eleven. For the first half hour I stood on deck and felt like an explorer. The lights of the harbour shrank behind us, the wind smelled of salt and diesel, and the black water slid past the hull with a sound like a long breath. Then we left the shelter of the bay, and the sea, which had been politely asleep, woke up.',
      'I will not describe the next three hours in detail. It is enough to say that the floor of the lounge rose to meet me and then, just as I had got used to it, fell away; that a plastic cup of tea travelled the length of a table by itself; and that I developed a deep and personal hatred of a vending machine that would not stop rattling. Around me, passengers lay along the benches with their coats pulled over their faces, as still as people pretending to be furniture.',
      'Only one passenger seemed untroubled. An elderly woman in a green waterproof sat by the window, knitting something enormous and purple, and every time the ship lurched she simply lifted her needles a little, waited, and carried on. At about two in the morning she looked across at me, assessed my colour, and handed me a ginger biscuit without a word. It remains one of the kindest things anyone has ever done for me.',
      'When I woke, the engines had changed their note. The sea had flattened into a sheet of hammered silver, and ahead of us the island was rising out of the dawn: a long green back, a scatter of white houses, a single road climbing into the hills. The woman in the green waterproof was folding her knitting into a bag. "Worth it," she said, and she was right.',
    ),
    questions: [
      {
        type: 'inference',
        tier: 1,
        prompt: 'What does the man at the ticket office mean by "a bit of a swell"?',
        options: [
          'That the crossing will be a pleasant and gentle one tonight',
          'That the ferry will be crowded with people going on holiday',
          'That the sea will be far rougher than he makes it sound',
          'That the writer already looks unwell before getting on board',
        ],
        correctIndex: 2,
      },
      {
        type: 'language',
        tier: 2,
        prompt:
          'What is the effect of describing the sea as "politely asleep" before it "woke up"?',
        options: [
          'It makes the sudden roughness seem like a creature waking',
          'It shows that the writer fell asleep as soon as they set off',
          'It suggests that the sea stayed calm for the whole night',
          'It shows that the crew woke the passengers with an alarm',
        ],
        correctIndex: 0,
      },
      {
        type: 'language',
        tier: 2,
        prompt:
          'What does "a deep and personal hatred of a vending machine" suggest about the writer?',
        options: [
          "That the machine had taken the writer's money and kept it",
          'That seasickness has made them absurdly cross at small things',
          'That the writer was hungry and the machine had run out of food',
          'That the writer dislikes all modern machines and gadgets',
        ],
        correctIndex: 1,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt: 'Which judgement about the elderly woman does the passage best support?',
        options: [
          'She is rude, since she never says a single word to the writer',
          'She is far too frightened of the sea to move from her seat',
          'She is as calm and kind as someone who often makes this trip',
          'She is a member of the crew who has been sent to look after passengers',
        ],
        correctIndex: 2,
      },
      {
        type: 'comparison',
        tier: 3,
        prompt:
          "How does the writer's view of the journey at the end differ from the middle of the passage?",
        options: [
          'The writer regrets the whole trip and plans to fly home next time',
          'The writer still feels just as ill at dawn as during the storm',
          "The night's misery gives way to wonder that makes it worth it",
          'The writer finds the island dull and flat after the drama at sea',
        ],
        correctIndex: 2,
      },
    ],
  },
  {
    title: 'The Swifts Return',
    genre: 'Nature column',
    text: paragraphs(
      'They came back on a Tuesday. I was hanging out washing when I heard it, a thin, high scream above the rooftops, and I looked up to see three dark crescents tearing across the sky as if they were late for something. The swifts had returned, and for the first time in weeks I felt that summer was a promise somebody intended to keep.',
      'It is hard to overstate how strange these birds are. A swift does almost everything in the air. It eats there, snapping up insects as it flies; it drinks there, skimming the surface of rivers; it even sleeps there, it is thought, climbing high into the dark and dozing on the wing. A young swift that leaves its nest this summer may not land again for years. When it does finally come down, it will be to a gap under the roof of a building, perhaps the very one where it hatched.',
      'That is where the trouble starts. Swifts have nested in our buildings for centuries, squeezing into the spaces under tiles and eaves. But modern houses are built tight, and old ones are repaired and sealed, and every gap that is filled is a home that is gone. Their numbers in Britain have fallen sharply in recent decades, and conservationists believe that the loss of nest sites is one reason why.',
      'The good news is that the fix is almost embarrassingly simple. A swift brick, built into a new wall, or a nest box fixed high under an eave, can give a pair somewhere to breed for many years. It costs about as much as a meal out. It asks nothing of the people inside except that they look up, now and then, on a long June evening, when the birds race round the rooftops in screaming parties.',
      'By August they will be gone again, south to Africa, and the sky will feel emptier than it should. I would like them to find a home waiting when they come back.',
    ),
    questions: [
      {
        type: 'retrieval',
        tier: 1,
        prompt: 'According to the article, where do swifts nest?',
        options: [
          'High in the branches of tall trees',
          'In gaps under the roofs of buildings',
          'On the ground among long grass',
          'In holes dug into the banks of rivers',
        ],
        correctIndex: 1,
      },
      {
        type: 'language',
        tier: 2,
        prompt:
          'What does "tearing across the sky as if they were late for something" suggest about the swifts?',
        options: [
          'They are injured and flying about the sky in panic',
          'They are lost and searching for the way home',
          'They fly fast and with urgent purpose',
          'They are ripping holes in the clouds as they go',
        ],
        correctIndex: 2,
      },
      {
        type: 'structure',
        tier: 2,
        prompt: 'What does the third paragraph do in the article as a whole?',
        options: [
          'It explains how swifts eat, drink and sleep in the air',
          'It turns from wonder at the birds to the danger they face',
          'It offers the reader a simple way to help the birds',
          "It describes the writer's first sight of the birds this year",
        ],
        correctIndex: 1,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt: "What is the writer's main purpose in the article?",
        options: [
          'To explain the science of how swifts manage to sleep in flight',
          'To complain that modern houses are badly built and ugly',
          'To make readers care about swifts and give them places to nest',
          'To describe a summer spent watching birds in the garden',
        ],
        correctIndex: 2,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt:
          "Which quotation best suggests that the swifts' return means something to the writer beyond the birds themselves?",
        options: [
          'It eats there, snapping up insects as it flies',
          'It is hard to overstate how strange these birds are',
          'I felt that summer was a promise somebody intended to keep',
          'I would like them to find a home waiting when they come back',
        ],
        correctIndex: 2,
      },
    ],
  },
  {
    title: 'The High Board',
    genre: 'Modern Fiction',
    text: paragraphs(
      'The ladder had forty-two rungs. Nadia knew, because she had counted them every Thursday for a month, from the bottom, with her hands on the cold rails, and every Thursday she had climbed down again before she reached the top.',
      'Tonight the pool was almost empty. The lane ropes had been taken out, and the water lay flat and green beneath the strip lights, as still as a sheet of glass. Below her, Mr Okafor was stacking floats at the far end, whistling a tune that had been old when her parents were young. He had not looked up once since she began to climb. That, she understood, was deliberate. She had asked him, the week before, whether it was normal to be this frightened. "The day it stops being frightening," he had said, "is the day you should worry."',
      'At the top, the platform was narrower than it had looked from the ground. Its surface was rough and gritty, and it bit into the soles of her feet. She made herself walk to the very end. Ten metres. From here the people in the café upstairs looked like chess pieces, and the pool was not a pool at all but a small green postage stamp that someone had dropped on the floor.',
      'Her body had opinions about this. Her knees had turned to string, and her heart was going so fast that she could feel it in her teeth. Every part of her was making the same simple argument: go back. Go back down the forty-two rungs, past the whistling, out into the car park, where nothing was high and nothing was deep.',
      'She looked at her toes, curled over the edge. She thought of every Thursday. Then she stopped thinking.',
      'The air was loud. The water was louder. When she came up, gasping and laughing at once, the whole pool seemed to be ringing like a bell. Mr Okafor was still stacking floats, and still whistling, but now he was smiling as well.',
    ),
    questions: [
      {
        type: 'retrieval',
        tier: 1,
        prompt: 'How does Nadia know that the ladder has forty-two rungs?',
        options: [
          'Mr Okafor told her before she began to climb',
          'A sign at the bottom of the ladder says so',
          'She has counted them on each of her attempts',
          'She counts them for the first time tonight',
        ],
        correctIndex: 2,
      },
      {
        type: 'language',
        tier: 2,
        prompt: 'What is the effect of the sentence "Her body had opinions about this"?',
        options: [
          'It treats her fear as a separate voice she has to overrule',
          'It shows that she is calm and fully in control of herself',
          'It suggests that she has hurt herself on the long climb up',
          'It shows that she is thinking hard about her technique',
        ],
        correctIndex: 0,
      },
      {
        type: 'structure',
        tier: 2,
        prompt: 'Why does the writer use very short sentences in the fifth paragraph?',
        options: [
          'To show that she has frozen and will climb back down',
          'To slow the pace, because nothing at all is happening',
          'To cut off the argument in her head as she decides',
          'To list the steps of a correct diving technique',
        ],
        correctIndex: 2,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt: 'Which judgement about Mr Okafor does the passage best support?',
        options: [
          'He has forgotten that Nadia is still in the pool',
          'He helps her most by seeming not to watch her',
          'He is impatient to close the pool and go home',
          'He thinks her fear is silly and best ignored',
        ],
        correctIndex: 1,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt: "Which quotation best shows that Nadia's fear tempts her with safety?",
        options: [
          'At the top, the platform was narrower than it had looked from the ground',
          'out into the car park, where nothing was high and nothing was deep',
          'She made herself walk to the very end',
          'her heart was going so fast that she could feel it in her teeth',
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    title: 'The Workshop',
    genre: 'Modern Fiction',
    text: paragraphs(
      'The workshop smelled the way it always had, of sawdust and linseed oil and something sharper underneath that Leo had never been able to name. Grandad stood in the doorway with his hands in his cardigan pockets, looking at the benches as if they belonged to someone else.',
      '"Right," he said. "Let\'s not make a meal of it." But he did not come in.',
      "Leo started with the shelves. Jam jars of screws, sorted by size. Tins of nails, rusted at the seams. A coffee tin of pencils, each one sharpened with a knife to a long, flat point. A row of chisels laid out on a strip of green felt, their handles worn pale and smooth where his grandfather's thumb had pressed, for sixty years, in exactly the same place. Leo picked one up, and the handle fitted his own hand badly, like a shoe made for somebody else.",
      '"The flat at Elmfield has a balcony," his mum had said in the car, brightly, for the third time. "He can grow tomatoes." Leo had nodded. He had not said that Grandad did not want a balcony. He wanted this: the vice that squeaked, the radio held together with tape, the window so thick with cobwebs that the light came through it grey and soft, like light through a cloth.',
      "By four o'clock the benches were bare. The van would come in the morning. Leo carried the last box out to the car and did not look back at the empty room. When he returned, Grandad had finally stepped inside. He ran one finger along the empty shelf and looked at the dust on it for a long time.",
      '"You\'ll want these," he said at last, and held out the strip of green felt, rolled tight, with the chisels inside. "They\'re sharp. Respect them, and they\'ll respect you." His voice was perfectly steady. It was his hands that were not.',
    ),
    questions: [
      {
        type: 'inference',
        tier: 1,
        prompt: 'Why is the workshop being cleared?',
        options: [
          'Grandad has sold all his tools to pay for a holiday',
          'Grandad is moving to a flat and cannot take it with him',
          'The workshop is unsafe now and will have to be pulled down',
          "Leo's mum wants to turn it into a room for herself",
        ],
        correctIndex: 1,
      },
      {
        type: 'language',
        tier: 2,
        prompt: 'What does the simile "like a shoe made for somebody else" suggest?',
        options: [
          'Leo is still too young to be trusted with such sharp tools',
          'The chisel is broken and ought to be thrown away',
          "The chisel has been worn to fit Grandad's hand",
          'Leo dislikes woodwork and wants to go home as soon as he can',
        ],
        correctIndex: 2,
      },
      {
        type: 'structure',
        tier: 2,
        prompt:
          'What is the effect of the short fragments describing the shelves, such as "Jam jars of screws, sorted by size"?',
        options: [
          'They show that Leo is rushing to finish the job quickly',
          'They take stock of each object in turn as Leo does',
          'They list all of the things that Grandad wants thrown away',
          'They show that the workshop is messy and disorganised',
        ],
        correctIndex: 1,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt: 'Which judgement about Grandad does the passage best support?',
        options: [
          'He is relieved to be rid of the old workshop at long last',
          'He is angry with Leo for touching and moving his tools',
          'He no longer cares about woodwork or his tools',
          'He tries to hide his sadness behind brisk words',
        ],
        correctIndex: 3,
      },
      {
        type: 'comparison',
        tier: 3,
        prompt: "Why does the writer include Leo's mum's words in the car?",
        options: [
          'To set her bright hopes against what Leo knows Grandad will miss',
          'To show that Grandad is really looking forward to growing tomatoes',
          "To show that Leo's mum does not care about Grandad at all",
          "To explain where all of Grandad's tools will be stored",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    title: 'Teenagers and Sleep',
    genre: 'Newspaper article',
    text: paragraphs(
      'Every morning, in houses up and down the country, the same scene plays out. An alarm goes off. It goes off again. A parent knocks on a bedroom door, then opens it, then says the word "lazy", and a teenager who went to bed at midnight but did not fall asleep until one drags themselves towards the shower like someone wading through wet cement.',
      'It is tempting to see this as a failure of character. It is mostly a matter of biology. Scientists who study sleep have found that during the teenage years the body clock shifts later. The hormone that makes us feel sleepy is released later in the evening, which is why a fifteen-year-old who is sent to bed at ten often lies awake, staring at the ceiling, feeling entirely alert. Asking them to fall asleep earlier is a little like asking someone to feel hungry on command.',
      'Meanwhile, the morning does not move. Most teenagers need somewhere between eight and ten hours of sleep a night, and a great many get far less. The cost of that gap is not just yawning. Tired brains find it harder to concentrate, harder to remember what they learned the day before, and harder to manage their moods, which is a cruel combination in the year of your exams.',
      'None of this means that teenagers are helpless. Screens in bedrooms, late-night snacking and lie-ins that swallow whole weekends all make the problem worse, and those are things a family can change. But the adults in charge should be honest about the part they play too. Schools in some countries have experimented with later start times. At the very least, we could stop treating a tired teenager as a lazy one.',
      'The next time you see a sixteen-year-old asleep at nine in the morning, try not to judge. Their body is not refusing to work. It is working exactly as it was designed to, on a timetable that nobody consulted it about.',
    ),
    questions: [
      {
        type: 'retrieval',
        tier: 1,
        prompt: 'According to the article, why does a teenager sent to bed at ten often lie awake?',
        options: [
          'They are lying awake worrying about the exams they have coming up',
          'The hormone that makes us sleepy is released later in the evening',
          'They have eaten a late snack just before they went up to bed',
          'Their bedroom is too light and too noisy to sleep in',
        ],
        correctIndex: 1,
      },
      {
        type: 'language',
        tier: 2,
        prompt: 'What is the effect of the simile "like someone wading through wet cement"?',
        options: [
          'It suggests that the teenager is lazy and unwilling',
          'It shows that the bathroom floor is wet and very slippery',
          "It makes the teenager's tiredness feel heavy and slow",
          'It shows that the teenager is cold after a shower',
        ],
        correctIndex: 2,
      },
      {
        type: 'structure',
        tier: 2,
        prompt: 'Why does the writer open with a scene of a morning at home?',
        options: [
          'To start with a situation that many readers will recognise',
          'To prove with evidence that teenagers really are lazy',
          "To describe the writer's own life when they were a teenager",
          'To explain the science of the body clock straight away',
        ],
        correctIndex: 0,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt: "Which statement best describes the writer's viewpoint?",
        options: [
          'Teenagers are just lazy, and they need firmer rules at home',
          'Teenage tiredness is mostly habit, though biology plays a part',
          'Teenagers need far less sleep than most of their parents believe',
          'Teenage tiredness is mostly biology, though habits play a part',
        ],
        correctIndex: 3,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt:
          'What does the final phrase, "on a timetable that nobody consulted it about", suggest?',
        options: [
          'That teenagers should be allowed to write their own timetables',
          'That school hours were set without thinking of teenage biology',
          'That the body does not follow any kind of timetable at all',
          'That teenagers ignore the rules that their parents make',
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    title: 'The First Day',
    genre: 'Autobiography',
    text: paragraphs(
      'I was nine when we came to England, and I knew precisely four things to say in English: yes, no, thank you and, for reasons nobody in my family has ever been able to explain, umbrella.',
      'On my first morning at school my mother walked me to the classroom door, fixed my collar twice, and left me there with a smile so bright and so brave that I knew she was frightened too. The teacher said something warm and fast. Twenty-eight faces turned towards me. I said, "Yes."',
      "That first week, English was not a language. It was weather. It fell on me all day, a steady drizzle of sound with no gaps in it, and I stood in it and got wet. I could not tell where one word stopped and the next began. I learned the shape of my own name in a stranger's mouth, and the word for the bell, which meant that everyone stood up at once. When the other children laughed, I laughed a moment later, so that nobody would notice I had not understood the joke, and every evening I went home with a headache from listening so hard.",
      'It was a girl called Ruth who rescued me, though she would never have used that word. She did not try to teach me anything. She simply sat next to me at lunch, every day, and named things. "Spoon," she would say, holding it up. "Spoon." "Yoghurt." "Window." "Rain." She was patient in the way that only a child who has decided to be patient can be, and she never once laughed at my accent. Within a month I knew the name of everything on the lunch table and most of the things in the sky.',
      'I do not remember the day I first understood a whole sentence. I remember only that it happened in the playground, that the sentence was "Do you want to play?", and that I said yes, and for the first time it was true.',
    ),
    questions: [
      {
        type: 'inference',
        tier: 1,
        prompt: "What does the writer's mother's smile reveal?",
        options: [
          'That she is relieved to be leaving the school',
          'That she is hiding her own fear for her child',
          'That she is proud her child already speaks English',
          'That she is cross with the teacher for talking fast',
        ],
        correctIndex: 1,
      },
      {
        type: 'language',
        tier: 2,
        prompt: 'What does the metaphor "English was not a language. It was weather" suggest?',
        options: [
          'That English people talk about the weather all the time',
          'That the words fell all around, constant and without meaning',
          "That the writer only knew words about the weather, like 'umbrella'",
          "That it rained every single day of the writer's first week",
        ],
        correctIndex: 1,
      },
      {
        type: 'language',
        tier: 2,
        prompt: 'Which word most suggests the effort that listening took?',
        options: [
          "'drizzle', because the words were soft and pleasant",
          "'headache', because listening so hard wore the writer out",
          "'rescued', because Ruth saved the writer from danger",
          "'patient', because the writer waited calmly and quietly to learn",
        ],
        correctIndex: 1,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt: 'Which judgement about Ruth does the passage best support?',
        options: [
          'She had been told by the teacher to look after the new pupil',
          "She found the writer's accent funny but kept it hidden",
          'She helped through steady kindness rather than lessons',
          'She was lonely and wanted someone to sit with at lunch',
        ],
        correctIndex: 2,
      },
      {
        type: 'structure',
        tier: 3,
        prompt:
          'Why does the writer end with the question "Do you want to play?" and the answer yes?',
        options: [
          "It shows that the writer still knew only the one English word 'yes'",
          "It echoes the empty 'Yes' of the first day with one that is meant",
          'It shows that Ruth had taught the writer to play games',
          'It shows that the playground was where lessons happened',
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    title: 'Should Zoos Still Exist?',
    genre: 'Magazine article',
    text: paragraphs(
      'Stand by the glass at the tiger enclosure on a busy Saturday and you will hear both sides of an old argument in the space of five minutes. "Isn\'t she beautiful," says one visitor. "Poor thing," says the next. They are looking at the same animal. One is thinking about stripes. The other is thinking about bars.',
      'The case for zoos is stronger than their critics sometimes allow. Modern zoos run careful breeding programmes for animals that are rare or vanishing in the wild, sharing animals between countries to keep populations healthy. Some species exist today partly because of this work. The Arabian oryx, a white antelope that had been wiped out in the wild, was bred in captivity and returned to the deserts of the Middle East. Zoos also fund conservation projects far from their own gates, and for many children they are the only place they will ever see an elephant breathe.',
      'And yet the critics have a point. A tiger in the wild may patrol a territory many miles across; even a generous enclosure is a few acres. Keepers know the signs of an animal that is coping badly: the endless pacing along one stretch of fence, the same circuit walked a thousand times. Some animals that roam vast distances in the wild, elephants among them, have been found to do poorly in captivity, however devoted their keepers.',
      'Perhaps the honest answer is that the word "zoo" covers too many different places to be judged as one. A cramped roadside attraction with a bear in a concrete pit and a scientific centre that breeds endangered frogs are not the same thing, and it is unhelpful to pretend that they are.',
      "The question worth asking is not whether zoos should exist, but which ones, and for which animals. A zoo that cannot explain how a creature's life is better because it is there should probably not be keeping it.",
    ),
    questions: [
      {
        type: 'retrieval',
        tier: 1,
        prompt: 'What happened to the Arabian oryx, according to the article?',
        options: [
          'It died out completely and can no longer be saved',
          'It was taken from the desert to live in a safari park',
          'It was bred in captivity and returned to the wild',
          'It is still common in the deserts of the Middle East',
        ],
        correctIndex: 2,
      },
      {
        type: 'structure',
        tier: 2,
        prompt: "Why does the writer open with two visitors' comments at the tiger enclosure?",
        options: [
          'To prove that the tiger is unwell and unhappy in its cage',
          'To show in one moment how differently people see zoos',
          'To describe a typical family day out at the zoo',
          'To show that most visitors to zoos dislike them',
        ],
        correctIndex: 1,
      },
      {
        type: 'language',
        tier: 2,
        prompt: 'What does "the same circuit walked a thousand times" suggest about the animal?',
        options: [
          'It is exercising carefully to stay fit and healthy',
          'Its keepers walk it round a set route each day',
          'It has walked exactly a thousand laps of its cage',
          'Its endless pacing is a sign that it is distressed',
        ],
        correctIndex: 3,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt: 'How does the writer make the article seem balanced?',
        options: [
          'By giving each side a paragraph and its strongest example',
          'By quoting several experts who disagree with one another',
          "By refusing to give any opinion of the writer's own at all",
          'By setting out statistics both for and against keeping zoos',
        ],
        correctIndex: 0,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt: "Which statement best sums up the writer's conclusion?",
        options: [
          'All zoos are cruel and should be closed as soon as possible',
          'All zoos are good, because they save species from extinction',
          'The question is far too difficult for anyone to answer fairly',
          'Zoos should be judged one by one, by what they do for animals',
        ],
        correctIndex: 3,
      },
    ],
  },
  {
    title: 'Our River',
    genre: 'Speech at a community meeting',
    text: paragraphs(
      'Thank you all for coming out on a wet Tuesday. I know there is a match on, so I will be quick, and I will start with a question. When did you last look at the river? Not glance at it from the bridge on your way to the shops, but really look at it?',
      'I looked at it properly last March, when my granddaughter asked me why the water was brown. I took her down to the bank to show her the ducks, and instead we found a shopping trolley, two tyres and a sofa cushion, sitting in the shallows as if they had been invited. She asked me who had put them there. I told her the truth: all of us, a little at a time, mostly without meaning to.',
      'But here is the good news. A river is not like a broken bridge or a closed factory. Give it half a chance and it will mend itself astonishingly fast. Last spring, a dozen of us spent four Saturday mornings with gloves, grabbers and a borrowed van. We filled that van eleven times. By June there were young fish in the shallows by the old mill, and a kingfisher, a real kingfisher, like a spark of blue thrown along the water, was seen below the footbridge for the first time in years.',
      'Imagine what a hundred of us could do. Imagine children paddling where we were once told never to go, and benches along the bank where people actually want to sit. That is not a dream. It is a few Saturdays, some good boots and a willingness to get muddy.',
      'So I am asking you for one morning. Not your money, not your weekends for ever: one morning. There is a sign-up sheet by the door and tea in the urn. The river has waited a long time for us. Let us not keep it waiting any longer.',
    ),
    questions: [
      {
        type: 'retrieval',
        tier: 1,
        prompt: 'What did the speaker and their granddaughter find in the shallows?',
        options: [
          'Young fish, ducks and a kingfisher by the footbridge',
          'A shopping trolley, two tyres and a sofa cushion',
          'A broken bridge and the wall of a closed factory',
          'A van that had been filled with rubbish eleven times',
        ],
        correctIndex: 1,
      },
      {
        type: 'language',
        tier: 2,
        prompt:
          'What is the effect of describing the kingfisher as "like a spark of blue thrown along the water"?',
        options: [
          'It suggests that the kingfisher is in danger from a fire',
          "It makes the bird's return feel bright and full of hope",
          'It shows that the water is still too dirty for any birds',
          'It suggests the bird was too fast to have really been seen',
        ],
        correctIndex: 1,
      },
      {
        type: 'structure',
        tier: 2,
        prompt: 'Why does the speaker begin with a question to the audience?',
        options: [
          'To find out who in the audience has visited the river lately',
          "To test whether the audience knows the town's history",
          'To make listeners realise how little they notice the river',
          'To fill the time until the match on television is over',
        ],
        correctIndex: 2,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt:
          'Why does the speaker say the rubbish was put there by "all of us, a little at a time, mostly without meaning to"?',
        options: [
          'To accuse the audience of dumping the rubbish on purpose',
          'To share the blame gently so that nobody feels attacked',
          'To excuse the council for failing to clean the river',
          'To suggest that the rubbish appeared there by itself',
        ],
        correctIndex: 1,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt:
          'Which quotation best shows that the speaker makes the request small and easy to agree to?',
        options: [
          'Imagine what a hundred of us could do',
          'We filled that van eleven times',
          'it will mend itself astonishingly fast',
          'Not your money, not your weekends for ever: one morning',
        ],
        correctIndex: 3,
      },
    ],
  },
  {
    title: 'Camping: A Confession',
    genre: 'Humorous personal essay',
    text: paragraphs(
      'My family has a tradition. Once a year, usually in August, we forget everything we learned the previous August and go camping.',
      'This year\'s trip began, as they all do, with optimism. My father had bought a new tent, which he described as "a two-minute pitch". This turned out to be true only in the sense that it took two minutes for the instructions to blow into a hedge. For the next hour and a half, my mother held the poles, my sister held the torch and my father held forth on the subject of the people who design tents, while the rain, which had been threatening all afternoon, stopped threatening and started.',
      'Our neighbours on the field had arrived in a motorhome the size of a small bungalow. Through its lit window we could see them sitting at a table, eating what looked like a roast dinner, and occasionally glancing out at us with the gentle pity of people watching a nature documentary about animals that are not going to make it.',
      'I would like to say that the night improved. It did not. My air mattress had a slow puncture, so that I went to sleep on a cloud and woke at three on the bare, cold, lumpy floor of a field, with a tent pole in my ear. The rain drummed on the canvas all night like impatient fingers on a desk.',
      'And then, at six, something happened that I still cannot quite explain. The rain stopped. I unzipped the door to find the whole valley full of mist, with the sun coming up gold behind it and a heron standing in the stream as still as a garden ornament. Nobody else was awake. For five minutes the world was perfectly quiet and perfectly beautiful, and I understood, with some annoyance, why we keep coming back.',
    ),
    questions: [
      {
        type: 'retrieval',
        tier: 1,
        prompt: 'How long did the family spend struggling with the new tent?',
        options: [
          "Two minutes, as the tent's makers had promised",
          'An hour and a half, while the rain began to fall',
          'All night, until the rain finally stopped at six',
          'Ten minutes, with help from a torch and the poles',
        ],
        correctIndex: 1,
      },
      {
        type: 'language',
        tier: 2,
        prompt:
          'What is the effect of "my mother held the poles, my sister held the torch and my father held forth"?',
        options: [
          'It shows that the family worked well together as a team',
          "It repeats 'held' to end on a joke about his endless talk",
          'It shows that the father was holding the instructions',
          'It lists the jobs in order, from the most to the least important',
        ],
        correctIndex: 1,
      },
      {
        type: 'language',
        tier: 2,
        prompt:
          'What does the comparison to "a nature documentary about animals that are not going to make it" suggest about the neighbours?',
        options: [
          'They are filming the family for a television programme',
          'They are afraid that the family is in real danger',
          'They pity the family from a comfortable distance',
          'They are annoyed by all the noise that the family is making',
        ],
        correctIndex: 2,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt:
          "Which judgement about the writer's attitude to camping does the essay best support?",
        options: [
          'They hate it and are determined never to go again',
          'They think camping is only fun with expensive equipment',
          'They mock it fondly but admit it gives them something rare',
          'They enjoy it at first but have come to hate it by dawn',
        ],
        correctIndex: 2,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt:
          "Which quotation best shows the writer exaggerating the night's discomfort for comic effect?",
        options: [
          'I went to sleep on a cloud',
          'the bare, cold, lumpy floor of a field, with a tent pole in my ear',
          'I would like to say that the night improved. It did not.',
          'The rain drummed on the canvas all night',
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    title: 'The Lighthouse',
    genre: 'Feature article',
    text: paragraphs(
      'The lighthouse stands at the end of the headland like a full stop at the end of a long sentence. From the car park it looks almost small, a white pencil against the grey of the sea, and it is only as you climb the path towards it, leaning into a wind that seems determined to send you home, that you understand how tall it is, and how alone.',
      "Nobody has lived here for decades. The lights around Britain's coast were made automatic in the last decades of the twentieth century, and the keepers, who once kept them burning through every night of the year, packed their bags and left. What remains is a museum, run by volunteers, and it is one of the most moving places I have ever visited.",
      "It is the ordinariness that gets you. The keepers' kitchen is still there, with its blue-and-white mugs and its kettle and its window looking straight out at the weather. So is the little brass handle that one of them would wind, again and again through the night, to keep the great lens turning. In a glass case lie the logbooks: page after page of careful handwriting recording the wind, the state of the sea and the exact minute the lamp was lit, night after night, in good weather and in storms that must have made the whole tower hum.",
      "At the top, the lens itself sits in its cage of glass, a huge beehive of prisms that once gathered a single flame and threw it miles out to sea. A volunteer told me that sailors could tell one lighthouse from another by the pattern of its flashes, the way you might recognise a friend's knock at the door.",
      'I stood there for a long time, watching a cargo ship slide along the horizon. It was guided now by satellites, and by a light that switched itself on. That is progress, and I would not wish it otherwise. But I came down the stairs thinking about the keepers, awake in the dark so that strangers could be safe, and wondering whether anyone on those ships ever thought about them at all.',
    ),
    questions: [
      {
        type: 'retrieval',
        tier: 1,
        prompt: 'Why did the keepers leave the lighthouse?',
        options: [
          'The tower was badly damaged in a great storm',
          'Ships stopped sailing along that coast',
          'The lights were made to work automatically',
          'Volunteers took over and made it a museum',
        ],
        correctIndex: 2,
      },
      {
        type: 'language',
        tier: 2,
        prompt:
          'What does the simile "like a full stop at the end of a long sentence" suggest about the lighthouse?',
        options: [
          "It is the most important part of the coast's history",
          'It is the last small mark at the very end of the land',
          'It is about to be pulled down and finished with',
          'It is covered in writing left by its keepers',
        ],
        correctIndex: 1,
      },
      {
        type: 'language',
        tier: 2,
        prompt: 'What does the writer mean by "It is the ordinariness that gets you"?',
        options: [
          'The museum is dull because nothing in it is special',
          'Visitors often get lost among the ordinary rooms',
          'The everyday objects are what move the writer most',
          'The keepers lived easy and comfortable lives',
        ],
        correctIndex: 2,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt:
          "Which judgement about the writer's view of automation does the passage best support?",
        options: [
          'They accept it as progress but regret that the keepers are forgotten',
          "They accept it as progress but think the keepers' work was easy",
          'They believe ships are less safe with satellites than with keepers',
          "They are glad that the keepers' hard lives are now forgotten",
        ],
        correctIndex: 0,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt:
          "Which quotation best shows the writer's respect for the keepers' care and discipline?",
        options: [
          'a huge beehive of prisms',
          'the exact minute the lamp was lit, night after night',
          'a wind that seems determined to send you home',
          'watching a cargo ship slide along the horizon',
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    title: 'Pride and Prejudice, Chapter 1',
    genre: '19th-century fiction: Jane Austen',
    heldText: { file: 'pride-and-prejudice', section: 'Chapter 1' },
    text: paragraphs(
      'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.',
      'However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered as the rightful property of some one or other of their daughters.',
      '"My dear Mr. Bennet," said his lady to him one day, "have you heard that Netherfield Park is let at last?"',
      'Mr. Bennet replied that he had not.',
      '"But it is," returned she; "for Mrs. Long has just been here, and she told me all about it."',
      'Mr. Bennet made no answer.',
      '"Do not you want to know who has taken it?" cried his wife impatiently.',
      '"You want to tell me, and I have no objection to hearing it."',
      'This was invitation enough.',
      '"Why, my dear, you must know, Mrs. Long says that Netherfield is taken by a young man of large fortune from the north of England; that he came down on Monday in a chaise and four to see the place, and was so much delighted with it that he agreed with Mr. Morris immediately; that he is to take possession before Michaelmas, and some of his servants are to be in the house by the end of next week."',
      '"What is his name?"',
      '"Bingley."',
      '"Is he married or single?"',
      '"Oh! single, my dear, to be sure! A single man of large fortune; four or five thousand a year. What a fine thing for our girls!"',
      '"How so? how can it affect them?"',
      '"My dear Mr. Bennet," replied his wife, "how can you be so tiresome! You must know that I am thinking of his marrying one of them."',
      '"Is that his design in settling here?"',
      '"Design! nonsense, how can you talk so! But it is very likely that he may fall in love with one of them, and therefore you must visit him as soon as he comes."',
      '"I see no occasion for that. You and the girls may go, or you may send them by themselves, which perhaps will be still better, for as you are as handsome as any of them, Mr. Bingley might like you the best of the party."',
      '"My dear, you flatter me. I certainly have had my share of beauty, but I do not pretend to be any thing extraordinary now. When a woman has five grown up daughters, she ought to give over thinking of her own beauty."',
      '"In such cases, a woman has not often much beauty to think of."',
    ),
    questions: [
      {
        type: 'retrieval',
        tier: 1,
        prompt: 'What news has Mrs Long brought to Mrs Bennet?',
        options: [
          'That Mr Morris has bought Netherfield Park for himself',
          'That Netherfield Park has been let to a wealthy young man',
          'That Mr Bingley is engaged to marry a girl from the north',
          'That Mr Bennet has been invited to dine at Netherfield',
        ],
        correctIndex: 1,
      },
      {
        type: 'language',
        tier: 2,
        prompt:
          'What is the effect of calling it "a truth universally acknowledged" that a rich single man "must be in want of a wife"?',
        options: [
          'It proves that every rich young man is desperate to find a wife',
          'It presents what families hope as if it were a universal law',
          'It shows that the narrator is a rich single man looking for a wife',
          'It warns young women never to marry a man only for his money',
        ],
        correctIndex: 1,
      },
      {
        type: 'inference',
        tier: 2,
        prompt:
          'What does Mr Bennet\'s reply, "You want to tell me, and I have no objection to hearing it", suggest about him?',
        options: [
          'He is angry and wants his wife to stop talking at once',
          'He is deeply curious to hear about the new neighbour',
          'He is amused by his wife and teases her eagerness',
          'He has not understood what his wife has asked him',
        ],
        correctIndex: 2,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt: 'Which judgement about Mrs Bennet does the extract best support?',
        options: [
          'She is impatient to see one of her daughters married',
          'She is calm, and waits patiently for her husband to act',
          'She hopes that Mr Bingley will fall in love with her',
          'She is shy and finds it hard to say what she wants',
        ],
        correctIndex: 0,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt:
          'Which quotation best shows that Mrs Bennet thinks of Mr Bingley chiefly in terms of money?',
        options: [
          'that he is to take possession before Michaelmas',
          'You must know that I am thinking of his marrying one of them',
          'A single man of large fortune; four or five thousand a year',
          'But it is very likely that he may fall in love with one of them',
        ],
        correctIndex: 2,
      },
    ],
  },
  {
    title: 'Silas Marner, Chapter 1',
    genre: '19th-century fiction: George Eliot',
    heldText: { file: 'silas-marner', section: 'Chapter I' },
    text: paragraphs(
      'In the days when the spinning-wheels hummed busily in the farmhouses—and even great ladies, clothed in silk and thread-lace, had their toy spinning-wheels of polished oak—there might be seen in districts far away among the lanes, or deep in the bosom of the hills, certain pallid undersized men, who, by the side of the brawny country-folk, looked like the remnants of a disinherited race. The shepherd’s dog barked fiercely when one of these alien-looking men appeared on the upland, dark against the early winter sunset; for what dog likes a figure bent under a heavy bag?—and these pale men rarely stirred abroad without that mysterious burden. The shepherd himself, though he had good reason to believe that the bag held nothing but flaxen thread, or else the long rolls of strong linen spun from that thread, was not quite sure that this trade of weaving, indispensable though it was, could be carried on entirely without the help of the Evil One. In that far-off time superstition clung easily round every person or thing that was at all unwonted, or even intermittent and occasional merely, like the visits of the pedlar or the knife-grinder. No one knew where wandering men had their homes or their origin; and how was a man to be explained unless you at least knew somebody who knew his father and mother? To the peasants of old times, the world outside their own direct experience was a region of vagueness and mystery: to their untravelled thought a state of wandering was a conception as dim as the winter life of the swallows that came back with the spring; and even a settler, if he came from distant parts, hardly ever ceased to be viewed with a remnant of distrust, which would have prevented any surprise if a long course of inoffensive conduct on his part had ended in the commission of a crime; especially if he had any reputation for knowledge, or showed any skill in handicraft. All cleverness, whether in the rapid use of that difficult instrument the tongue, or in some other art unfamiliar to villagers, was in itself suspicious: honest folk, born and bred in a visible manner, were mostly not overwise or clever—at least, not beyond such a matter as knowing the signs of the weather; and the process by which rapidity and dexterity of any kind were acquired was so wholly hidden, that they partook of the nature of conjuring. In this way it came to pass that those scattered linen-weavers—emigrants from the town into the country—were to the last regarded as aliens by their rustic neighbours, and usually contracted the eccentric habits which belong to a state of loneliness.',
    ),
    questions: [
      {
        type: 'retrieval',
        tier: 1,
        prompt: "Why did the shepherd's dog bark at the weavers, according to the narrator?",
        options: [
          'Because they were strangers who had stolen his sheep',
          'Because each was bent under a heavy bag',
          'Because they appeared suddenly out of the dark night',
          'Because they smelled strongly of the flax they spun',
        ],
        correctIndex: 1,
      },
      {
        type: 'language',
        tier: 2,
        prompt:
          'What does the narrator suggest by saying the weavers "looked like the remnants of a disinherited race"?',
        options: [
          'They had lost all of their money in a bitter family quarrel',
          'They had come over the sea from some faraway foreign country',
          'They seemed like the last survivors of an outcast people',
          'They were the strongest and healthiest people in the district',
        ],
        correctIndex: 2,
      },
      {
        type: 'inference',
        tier: 2,
        prompt:
          'Why, according to the narrator, did the villagers find any skill or cleverness suspicious?',
        options: [
          'Clever people had cheated them many times before',
          'They could not see how such skill was ever learned',
          'Their church had taught them that cleverness was sin',
          "Skilled workers were taking the farmers' jobs",
        ],
        correctIndex: 1,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt:
          "Which judgement about the narrator's attitude to the villagers does the extract best support?",
        options: [
          'The narrator shares their fear that weavers are evil',
          'The narrator angrily condemns them as cruel and stupid',
          'The narrator explains their suspicion with gentle irony',
          'The narrator ignores the villagers to describe the weavers',
        ],
        correctIndex: 2,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt:
          'Which quotation best shows that the villagers distrusted even a newcomer who had lived among them for years?',
        options: [
          'No one knew where wandering men had their homes or their origin',
          'a settler ... hardly ever ceased to be viewed with a remnant of distrust',
          'The shepherd’s dog barked fiercely when one of these alien-looking men appeared',
          'honest folk, born and bred in a visible manner, were mostly not overwise or clever',
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    title: 'Jekyll and Hyde, Chapter 8',
    genre: '19th-century fiction: Robert Louis Stevenson',
    heldText: { file: 'jekyll-and-hyde', section: 'The Last Night' },
    text: paragraphs(
      'Mr. Utterson’s only answer was to rise and get his hat and greatcoat; but he observed with wonder the greatness of the relief that appeared upon the butler’s face, and perhaps with no less, that the wine was still untasted when he set it down to follow.',
      'It was a wild, cold, seasonable night of March, with a pale moon, lying on her back as though the wind had tilted her, and flying wrack of the most diaphanous and lawny texture. The wind made talking difficult, and flecked the blood into the face. It seemed to have swept the streets unusually bare of passengers, besides; for Mr. Utterson thought he had never seen that part of London so deserted. He could have wished it otherwise; never in his life had he been conscious of so sharp a wish to see and touch his fellow-creatures; for struggle as he might, there was borne in upon his mind a crushing anticipation of calamity. The square, when they got there, was full of wind and dust, and the thin trees in the garden were lashing themselves along the railing. Poole, who had kept all the way a pace or two ahead, now pulled up in the middle of the pavement, and in spite of the biting weather, took off his hat and mopped his brow with a red pocket-handkerchief. But for all the hurry of his coming, these were not the dews of exertion that he wiped away, but the moisture of some strangling anguish; for his face was white and his voice, when he spoke, harsh and broken.',
      '“Well, sir,” he said, “here we are, and God grant there be nothing wrong.”',
      '“Amen, Poole,” said the lawyer.',
      'Thereupon the servant knocked in a very guarded manner; the door was opened on the chain; and a voice asked from within, “Is that you, Poole?”',
      '“It’s all right,” said Poole. “Open the door.”',
      'The hall, when they entered it, was brightly lighted up; the fire was built high; and about the hearth the whole of the servants, men and women, stood huddled together like a flock of sheep. At the sight of Mr. Utterson, the housemaid broke into hysterical whimpering; and the cook, crying out “Bless God! it’s Mr. Utterson,” ran forward as if to take him in her arms.',
      '“What, what? Are you all here?” said the lawyer peevishly. “Very irregular, very unseemly; your master would be far from pleased.”',
    ),
    questions: [
      {
        type: 'retrieval',
        tier: 1,
        prompt: 'What does Poole do when he and Mr Utterson reach the square?',
        options: [
          'He runs ahead to warn the other servants',
          'He takes off his hat and mops his brow',
          'He knocks loudly and shouts for help',
          'He offers Mr Utterson a glass of wine',
        ],
        correctIndex: 1,
      },
      {
        type: 'language',
        tier: 2,
        prompt:
          'What does describing the moon as "lying on her back as though the wind had tilted her" suggest about the night?',
        options: [
          'That the moon is setting and morning will soon come',
          'That the night is calm, still and perfectly peaceful',
          'That even the moon seems knocked over by the wild wind',
          'That the full moon is lighting up the streets brightly',
        ],
        correctIndex: 2,
      },
      {
        type: 'language',
        tier: 2,
        prompt: "Which word most suggests that Poole's sweat comes from fear, not effort?",
        options: [
          "'exertion', because he has hurried all the way there",
          "'anguish', because the moisture comes from inner torment",
          "'biting', because the cold weather makes him shiver",
          "'red', because his handkerchief shows that he is hot",
        ],
        correctIndex: 1,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt: 'Which judgement about Mr Utterson does the extract best support?',
        options: [
          'He is calm and untroubled, quite sure that nothing is wrong',
          'He hides his own dread behind a fuss about proper order',
          'He is unkind to the servants and enjoys seeing their fear',
          'He is far too frightened to go into the house at all',
        ],
        correctIndex: 1,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt:
          'Which quotation best shows that Mr Utterson senses disaster before anything has happened?',
        options: [
          'the thin trees in the garden were lashing themselves along the railing',
          'there was borne in upon his mind a crushing anticipation of calamity',
          'the whole of the servants, men and women, stood huddled together like a flock of sheep',
          'The wind made talking difficult, and flecked the blood into the face',
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    title: 'The Great Gatsby, Chapter 1',
    genre: '20th-century fiction: F. Scott Fitzgerald',
    heldText: { file: 'the-great-gatsby', section: 'Chapter I' },
    text: paragraphs(
      'We talked for a few minutes on the sunny porch.',
      '“I’ve got a nice place here,” he said, his eyes flashing about restlessly.',
      'Turning me around by one arm, he moved a broad flat hand along the front vista, including in its sweep a sunken Italian garden, a half acre of deep, pungent roses, and a snub-nosed motor-boat that bumped the tide offshore.',
      "“It belonged to Demaine, the oil man.” He turned me around again, politely and abruptly. “We'll go inside.”",
      'We walked through a high hallway into a bright rosy-colored space, fragilely bound into the house by French windows at either end. The windows were ajar and gleaming white against the fresh grass outside that seemed to grow a little way into the house. A breeze blew through the room, blew curtains in at one end and out the other like pale flags, twisting them up toward the frosted wedding-cake of the ceiling, and then rippled over the wine-colored rug, making a shadow on it as wind does on the sea.',
      'The only completely stationary object in the room was an enormous couch on which two young women were buoyed up as though upon an anchored balloon. They were both in white, and their dresses were rippling and fluttering as if they had just been blown back in after a short flight around the house. I must have stood for a few moments listening to the whip and snap of the curtains and the groan of a picture on the wall. Then there was a boom as Tom Buchanan shut the rear windows and the caught wind died out about the room, and the curtains and the rugs and the two young women ballooned slowly to the floor.',
      'The younger of the two was a stranger to me. She was extended full length at her end of the divan, completely motionless, and with her chin raised a little, as if she were balancing something on it which was quite likely to fall. If she saw me out of the corner of her eyes she gave no hint of it—indeed, I was almost surprised into murmuring an apology for having disturbed her by coming in.',
    ),
    questions: [
      {
        type: 'retrieval',
        tier: 1,
        prompt: 'What does Tom Buchanan point out to the narrator from the porch?',
        options: [
          'A tennis court, a stable block and a field full of horses',
          'A sunken garden, half an acre of roses and a motor-boat',
          'The house that Demaine, the oil man, owns across the bay',
          'A line of tall French windows glowing with gold',
        ],
        correctIndex: 1,
      },
      {
        type: 'language',
        tier: 2,
        prompt: 'Which word most suggests that the room inside is light and airy?',
        options: [
          "'enormous', because the couch fills up the whole room",
          "'fragilely', because the room seems barely tied to the house",
          "'boom', because the windows slam shut with great force",
          "'stationary', because nothing in the room is moving",
        ],
        correctIndex: 1,
      },
      {
        type: 'structure',
        tier: 2,
        prompt: 'What is the effect of the "boom" when Tom Buchanan shuts the rear windows?',
        options: [
          'It shows that a thunderstorm has broken out over the bay',
          'It ends the airy movement at once, bringing it all down',
          'It wakes the two young women from a long, deep sleep',
          'It shows that the windows have been smashed by the wind',
        ],
        correctIndex: 1,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt: 'Which judgement about Tom Buchanan does the extract best support?',
        options: [
          'He is shy, and nervous about having a guest in his home',
          'He shows off his wealth and steers people as he pleases',
          'He is careless about money and dislikes his large house',
          'He is gentle and lets the narrator explore the house alone',
        ],
        correctIndex: 1,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt:
          'Which quotation best shows that the young woman on the couch seems to ignore the narrator?',
        options: [
          'She was extended full length at her end of the divan, completely motionless',
          'The younger of the two was a stranger to me',
          'If she saw me out of the corner of her eyes she gave no hint of it',
          'They were both in white, and their dresses were rippling and fluttering',
        ],
        correctIndex: 2,
      },
    ],
  },
  {
    title: 'Frankenstein, Introduction (1831)',
    genre: '19th-century non-fiction: Mary Shelley',
    heldText: { file: 'frankenstein', section: 'Introduction' },
    text: paragraphs(
      'In the summer of 1816, we visited Switzerland, and became the neighbours of Lord Byron. At first we spent our pleasant hours on the lake, or wandering on its shores; and Lord Byron, who was writing the third canto of Childe Harold, was the only one among us who put his thoughts upon paper. These, as he brought them successively to us, clothed in all the light and harmony of poetry, seemed to stamp as divine the glories of heaven and earth, whose influences we partook with him.',
      "But it proved a wet, ungenial summer, and incessant rain often confined us for days to the house. Some volumes of ghost stories, translated from the German into French, fell into our hands. There was the History of the Inconstant Lover, who, when he thought to clasp the bride to whom he had pledged his vows, found himself in the arms of the pale ghost of her whom he had deserted. There was the tale of the sinful founder of his race, whose miserable doom it was to bestow the kiss of death on all the younger sons of his fated house, just when they reached the age of promise. His gigantic, shadowy form, clothed like the ghost in Hamlet, in complete armour, but with the beaver up, was seen at midnight, by the moon's fitful beams, to advance slowly along the gloomy avenue. The shape was lost beneath the shadow of the castle walls; but soon a gate swung back, a step was heard, the door of the chamber opened, and he advanced to the couch of the blooming youths, cradled in healthy sleep. Eternal sorrow sat upon his face as he bent down and kissed the forehead of the boys, who from that hour withered like flowers snapt upon the stalk. I have not seen these stories since then; but their incidents are as fresh in my mind as if I had read them yesterday.",
      '"We will each write a ghost story," said Lord Byron; and his proposition was acceded to. There were four of us. The noble author began a tale, a fragment of which he printed at the end of his poem of Mazeppa. Shelley, more apt to embody ideas and sentiments in the radiance of brilliant imagery, and in the music of the most melodious verse that adorns our language, than to invent the machinery of a story, commenced one founded on the experiences of his early life. Poor Polidori had some terrible idea about a skull-headed lady, who was so punished for peeping through a key-hole--what to see I forget--something very shocking and wrong of course; but when she was reduced to a worse condition than the renowned Tom of Coventry, he did not know what to do with her, and was obliged to despatch her to the tomb of the Capulets, the only place for which she was fitted. The illustrious poets also, annoyed by the platitude of prose, speedily relinquished their uncongenial task.',
    ),
    questions: [
      {
        type: 'retrieval',
        tier: 1,
        prompt: 'Why were the friends often kept indoors that summer?',
        options: [
          'Lord Byron needed quiet so that he could write',
          'Days of heavy rain kept them shut up in the house',
          'They were too frightened by ghost stories to go out',
          'The lake had flooded the paths along its shores',
        ],
        correctIndex: 1,
      },
      {
        type: 'language',
        tier: 2,
        prompt:
          'What does the writer suggest by saying that Byron\'s poems "seemed to stamp as divine the glories of heaven and earth"?',
        options: [
          'That his poems were printed and sold across Switzerland',
          'That he wrote only about God and never about nature',
          'That she found his poems too religious for her taste',
          'That his poetry made the scenery around them seem holy',
        ],
        correctIndex: 3,
      },
      {
        type: 'language',
        tier: 2,
        prompt:
          'Why does the writer describe the ghost as "clothed like the ghost in Hamlet, in complete armour"?',
        options: [
          'To call to mind a famous armoured ghost that readers know',
          'To suggest that Shakespeare himself wrote the German ghost story',
          'To show that the friends were acting out Hamlet indoors',
          'To prove that the ghost was really the King of Denmark',
        ],
        correctIndex: 0,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt: "Which judgement about the writer's account of Polidori's story is best supported?",
        options: [
          'She admires it as the most frightening of all their stories',
          'She gently mocks it as a muddled tale he could not finish',
          'She is too shocked by it to describe any part of it',
          'She envies it and wishes she had thought of it first',
        ],
        correctIndex: 1,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt:
          'Which quotation best shows that the ghost stories made a lasting impression on the writer?',
        options: [
          'Some volumes of ghost stories, translated from the German into French, fell into our hands',
          'We will each write a ghost story',
          'their incidents are as fresh in my mind as if I had read them yesterday',
          'The illustrious poets also, annoyed by the platitude of prose, speedily relinquished their uncongenial task',
        ],
        correctIndex: 2,
      },
    ],
  },
  {
    title: "This Year's Pantomime",
    genre: 'Theatre review',
    text: paragraphs(
      'There is a moment in every good pantomime when a grown man in a ballgown asks a theatre full of strangers whether he looks beautiful, and a theatre full of strangers shouts back, "No." This year\'s Cinderella reaches that moment within ten minutes, and from then on it hardly puts a foot wrong.',
      "The star, as ever, is the Dame. Doreen Doughnut, the baker who has somehow ended up as Cinderella's stepmother, arrives on a tricycle shaped like an iced bun and is rarely off the stage after that. Her costumes grow larger with every scene, until by the ballroom she appears to be wearing a chandelier. The jokes are terrible, which is exactly the point: every groan from the adults is followed by a shriek of delight from the children beside them.",
      "The younger cast are a delight too. Cinderella sings beautifully, and Buttons, played with real warmth, manages the trickiest job in pantomime: making the audience feel sorry for him without ever slowing the fun. The ugly sisters' decorating scene, in which a pot of paste ends up almost everywhere except on the wall, earned the loudest laughter of the night.",
      "It is not perfect. The second half runs about twenty minutes too long, and a song about the importance of recycling, however worthy, stopped the story dead. By ten o'clock several of the smallest members of the audience were asleep on their parents' shoulders, which may be the most honest review a show can get.",
      'But these are small complaints about a show that understands exactly what a pantomime is for. It is not really about the glass slipper. It is about a whole town sitting in the dark together, booing the same villains and singing the same silly songs, and going home a little warmer than it came. Take the family. Take your grandmother. Shout as loudly as you can.',
    ),
    questions: [
      {
        type: 'retrieval',
        tier: 1,
        prompt: 'According to the review, which scene earned the loudest laughter of the night?',
        options: [
          "The Dame's arrival on a tricycle shaped like a bun",
          "The ugly sisters' messy scene with a pot of paste",
          'The ballroom scene with the chandelier costume',
          'The song about the importance of recycling',
        ],
        correctIndex: 1,
      },
      {
        type: 'language',
        tier: 2,
        prompt:
          'What does the reviewer mean by saying the jokes are "terrible, which is exactly the point"?',
        options: [
          'The writers ought to be ashamed of such weak jokes',
          'The jokes are meant to be bad as part of the fun',
          'The jokes are far too rude for the children to hear',
          'The audience at the back cannot hear any of the jokes',
        ],
        correctIndex: 1,
      },
      {
        type: 'structure',
        tier: 2,
        prompt: 'What is the purpose of the fourth paragraph in the review as a whole?',
        options: [
          'To describe the plot of the long second half in detail',
          "To admit the show's faults before the final judgement",
          'To praise the work of the younger members of the cast',
          'To tell readers where and when to buy their tickets',
        ],
        correctIndex: 1,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt: "Which statement best sums up the reviewer's overall view?",
        options: [
          'A dull, overlong show that families should avoid',
          'A flawed but joyful show that does what pantomime should',
          'A joyful cast, but a show too long to be worth seeing',
          'A show for small children only, too silly for adults',
        ],
        correctIndex: 1,
      },
      {
        type: 'evaluation',
        tier: 3,
        prompt:
          "Which quotation best shows the reviewer's belief that pantomime matters to a whole community?",
        options: [
          'every groan from the adults is followed by a shriek of delight from the children',
          'a whole town sitting in the dark together, booing the same villains',
          "By ten o'clock several of the smallest members of the audience were asleep",
          'Her costumes grow larger with every scene',
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
  // Prompts such as "Which judgement about the narrator does the passage best
  // support?" recur from passage to passage, so the key is the passage title
  // and the prompt together.
  key: ({ passage, question }) => `${passage.title}: ${question.prompt}`,
  answer: ({ question }) => question.options[question.correctIndex],
  options: ({ question }) => question.options,
  tag: ({ question }) => question.type,
  tier: ({ question }) => question.tier,
  deepened: '2026-10-24',
}
