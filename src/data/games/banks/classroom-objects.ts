import type { GameBank } from '@/lib/games/explanations/types'

/**
 * In the Classroom: choose the English word for a school thing from its
 * picture, or the school word that fits a sentence or a dialogue, and say
 * where something is. Since 24 October 2026 the bank holds 242 questions in
 * three tiers (REBUILT FOR DEPTH, below); what follows first is its history.
 *
 * Moved out of src/app/games/classroom-objects/page.tsx on 16 October 2026,
 * when every answer gained an explanation (src/lib/games/explanations/types.ts).
 * The 52 items gave 66 questions: a picture question for each item, and a
 * "Where is it?" question for the 14 items that have a sentence for one. The
 * page deals a round from the items and asks the second kind of an item only
 * as every third question, as it always did (QUESTIONS lists both kinds).
 *
 * WHAT WAS WRONG WITH THE QUESTIONS (found writing those explanations). In 19
 * of the 52 picture questions the picture was not what the answer said, or
 * another option fitted it as well, and 6 of the 14 "Where is it?" questions
 * were broken or had no single answer. Each picture was checked as drawn (the
 * Windows emoji set, 16 October 2026), and then by a second reader against the
 * emoji's own Unicode name, because each platform draws an emoji differently and
 * the name is what every drawing must show. That second reading found the last
 * two below: a lotion bottle marked "glue" and a placard marked "noticeboard".
 *
 * The picture was not the answer:
 *   - The sponge emoji was the picture for "rubber" and offered "sponge" as a
 *     wrong option. It is a sponge, so the item is now "sponge" and "rubber"
 *     is a wrong option.
 *   - The linked-paperclips emoji was "stapler", and offered "clip". There is no
 *     stapler emoji, so it is now "paper clips", with "stapler" as a wrong option.
 *   - The triangular-ruler emoji was the picture for both "set square" and
 *     "protractor", and the protractor question offered "set square", which is
 *     what it shows. There is no protractor emoji, so that item is now
 *     "calendar" (the calendar emoji), and set square stays as it was.
 *   - The lotion-bottle emoji, a bottle with a pump, was the picture for "glue".
 *     Glue does not come in a pump bottle, and there is no glue emoji, so the
 *     item is now "bottle", which is what the picture shows.
 *   - The placard emoji, a blank sign on a stick, was the picture for
 *     "noticeboard", which is a board fixed to a wall for notices. There is no
 *     noticeboard emoji, so the item is now "sign", and its "Where is it?"
 *     sentence is "The sign is on the wall." instead of "The noticeboard is on
 *     the wall."
 *
 * Another option fitted the picture, and was replaced:
 *   - set square offered ruler (its emoji is named "triangular ruler"): now pencil.
 *   - file offered folder, and its emoji is the standard folder: now bag.
 *   - The three book pictures (textbook, notebook, exercise book) cannot be told
 *     apart by a picture, and each offered another kind of book or of printed
 *     pages: textbook offered notebook, diary and magazine, notebook offered
 *     textbook, exercise book offered diary. They now offer things that are not
 *     books or pages.
 *   - bottle (glue, above) offered paint, ink and water, which also come in
 *     bottles; they became pencil, ruler and chair.
 *   - bin offered basket (its emoji is named "wastebasket"): now bag.
 *   - lift offered door, and the lift picture is a pair of doors: now window.
 *   - light offered lamp (in lighting, a bulb is itself called a lamp): now plug.
 *   - computer offered television, and a screen on a stand looks like one: now
 *     camera.
 *   - projector offered camera, and a film projector looks like a film camera:
 *     now speaker.
 *   - graduation cap offered hat, and it is a hat: now scarf.
 *   - sign (noticeboard, above) is a white board on a post, so whiteboard
 *     fitted: now shelf.
 *   - broom offered brush, and a broom is a brush: now bucket.
 *   - mirror offered frame, which the picture is mostly made of: now clock.
 *   - bell offered alarm, and an alarm can be a bell: now whistle.
 *
 * The "Where is it?" questions:
 *   - Chair, door and window each had a sentence about a different thing ("The
 *     bag is under the chair.", "The teacher is next to the door.", "The plant
 *     is on the window."), and the page used only the place from it, so it asked
 *     "Where is the chair? It is ___ the chair." Each now has a sentence about
 *     itself with one natural preposition: the chair is in the classroom, the
 *     door is next to the window, the window is next to the board.
 *   - A plural item asked "Where is the books?" It now asks "Where are the books?
 *     They are ___ the shelf."
 *   - "Where is the school bag? It is ___ the chair.": with no picture of where
 *     the bag is, on, under and next to are all natural. A clue (prepositionClue:
 *     "The chair is above the bag.") now settles it as under.
 *   - pencil: "in the desk" (in a drawer) is as natural as "on the desk", so the
 *     sentence is now about the table, which has no drawer to be in.
 *
 * What is NOT fixed: these questions show no picture of the position, so each
 * rests on where the thing is usually found (a pencil on a table, a ruler in a
 * pencil case, a clock on a wall). They were kept where one preposition is the
 * usual way to say it.
 *
 * Everything else is unchanged: the other 33 pictures, their words and their
 * options, the answers, and the way a round is dealt.
 *
 * REBUILT FOR DEPTH (24 October 2026). The founder found the games "weak in
 * depth and content ... too obvious and easy"; the audit
 * (.tmp-games-audit/REPORT-eal.md) found 66 questions, one A1 noun per
 * picture, "Where is it?" scenes that rested on where a thing usually is, a
 * clue that gave its answer away ("The chair is above the bag."), and ten
 * pictures that Picture Word Match also asked, with the same answers. The bank
 * grew to 242 questions, two "Where is it?" for every five, as the page deals
 * them (ten name questions and five "Where is it?" a round, unchanged; a page
 * that sets its own mix is not dealt by level, src/lib/games/start-round.ts):
 *
 *   - Tier 1 (A1), 80: 62 pictures to name (11 new: laptop, battery, plug,
 *     headphones, magnifying glass, thermometer, stopwatch, mobile phone,
 *     camera, microphone, safety pin) and 18 "Where is it?" with on, in, under
 *     or next to, each with a clue that settles the place without naming it
 *     ("Open the zip to get it out.").
 *   - Tier 2 (A2), 83, two new kinds: 52 school words in a sentence, where the
 *     sentence decides between near neighbours ("A ___ cuts two neat circles
 *     out of the side of a page": hole punch, stapler, scissors, sharpener),
 *     and 31 "Where is it?" with in front of, behind, between, opposite,
 *     above, below, inside and outside, worked out from a scene that never
 *     names the place.
 *   - Tier 3 (B1), 79: 48 words in a dialogue or a short text (register,
 *     detention, deadline, hand in and hand out, borrow and lend), and 31
 *     "Where is it?" in context: set phrases (at the top of the board, in the
 *     corner, on page 12, on the first floor) and two-step scenes (a queue, a
 *     seating plan, three floors), where the answer is never in the scene.
 *
 * A question in a sentence or a dialogue has no picture, since a picture would
 * name its word; the page shows only the prompt then, with its line breaks.
 *
 * Existing questions fixed:
 *   - school bag "Where is it?": its clue now describes the place ("lying
 *     between the four legs of the chair") instead of stating the other side
 *     of the answer.
 *   - pencil, ruler: "on the table" and "in the pencil case" each had a second
 *     natural place; they are now "in the pencil case" and "in the drawer",
 *     with a clue that needs it ("Pull the drawer open to find it.").
 *   - clock, map, globe, books, chart, computer, chair: each "Where is it?"
 *     gained a clue, so that one place is the only one that fits.
 *   - test tube and paper clips: given the fact 'test' and 'paper clip', so
 *     they are never dealt with the spelling test or the paper clip, which
 *     their explanations must name.
 * Removed:
 *   - school (the school building's picture): "school" is in almost every
 *     prompt and explanation of a school game, so its answer would be printed
 *     before it in most rounds.
 *   - the sign's "Where is it?": the picture is a sign on a stick, which can
 *     stand next to a wall as well as hang on it.
 *
 * CHECKED (24 October 2026) by a second reader, not the writer. What was
 * wrong, and what changed:
 *   - "The small zip bag where you keep your pens is your ___." (pencil case):
 *     "pens" matched the answer's first letters; the bag now holds a rubber
 *     and a sharpener.
 *   - magnifying glass offered mirror, and a hand mirror is a round glass on a
 *     handle too; now binoculars.
 *   - Options no reader would choose, or that could upset a child: "on fire"
 *     (display) became "on purpose", the school roof (field) the gym, and a
 *     school that was "burning" (freezing) one that was "crowded".
 *   - Clues that said the answer in other words: Ella "at his back" (behind)
 *     and the hamster "asleep in the straw" (inside); both cut.
 *   - "Where is the computer? It is ___ the desk." allowed "next to", since a
 *     screen beside the desk can be seen too; the clue is now that its screen
 *     is right in front of you as you sit at the desk.
 *   - goggles and "on foot", one sentence each and decided by a phrase, were
 *     tier 3; they are tier 2.
 *   - A preposition printed with its place in one question answered another
 *     in the same round ("Put a full ___ at the end of a sentence." before
 *     "It is ___ the end of the sentence."; "The library is on the first
 *     floor" before "It is ___ the first floor."). The shared give-away finder
 *     cannot see these: "on", "in" and "at" are too short for it, and the
 *     longer place words are answers to too many questions. Eleven prompts
 *     now leave the phrase out (report, prize, full stop, shelf, presentation,
 *     sign, the clock and the whiteboard, Ana, the coats, the art room), and
 *     where the phrase is the lesson a fact keeps the two apart: 'page' (the
 *     class photo "on page 2"), 'office' (the receptionist "in the school
 *     office"), 'floors' (the music room on the first floor) and 'top, middle
 *     and bottom' (the date, the title, the school and the fire exit, whose
 *     explanations compare those phrases).
 *
 * `group` is a name question's topic, or a "Where is it?" question's answer,
 * so a round holds at most two of one place word. `facts` is a name question's
 * word, a "Where is it?" question's thing and place, and every word the bank
 * asks for that a prompt uses (a plural or possessive read as the word).
 */

/** A picture to name: every tier 1 "Which word matches the picture?" question. */
export interface ClassroomItem {
  emoji: string
  word: string
  distractors: [string, string, string]
  /** What the thing is for (writing, paper, the room, science...), which a round spreads (BANK.group). */
  topic: string
  /** What else would give this question away to another, beyond its word. */
  facts?: string[]
}

/** Tiers 2 and 3: the word that fits a sentence, a short text or a dialogue, its place shown as ___. */
export interface SentenceItem {
  word: string
  distractors: [string, string, string]
  sentence: string
  tier: 2 | 3
  topic: string
  /** What else would give this question away to another, beyond the words it uses. */
  facts?: string[]
}

/** A "Where is it?" question: the place to choose for a thing, from four. */
export interface WhereItem {
  /** The thing's picture, or '' where the thing is a person or a room. */
  emoji: string
  thing: string
  tier: 1 | 2 | 3
  /** All the student reads: the scene, if any, and the question with its gap. */
  prompt: string
  options: [string, string, string, string]
  answer: string
  /** Where the thing is (the wall, the shelf): no two questions about one place share a round. */
  place: string
  facts?: string[]
}

// UK-English classroom and school vocabulary, A1 to B1.
export const ITEM_BANK: ClassroomItem[] = [
  {
    emoji: '✏️',
    word: 'pencil',
    topic: 'Writing and drawing',
    distractors: ['pen', 'crayon', 'marker'],
  },
  {
    emoji: '🖊️',
    word: 'pen',
    topic: 'Writing and drawing',
    distractors: ['pencil', 'brush', 'ruler'],
  },
  { emoji: '📏', word: 'ruler', topic: 'Desk tools', distractors: ['pencil', 'rubber', 'stapler'] },
  { emoji: '🧽', word: 'sponge', topic: 'Cleaning', distractors: ['rubber', 'cloth', 'glue'] },
  { emoji: '✂️', word: 'scissors', topic: 'Desk tools', distractors: ['knife', 'stapler', 'clip'] },
  {
    emoji: '📚',
    word: 'books',
    topic: 'Paper and books',
    distractors: ['boxes', 'bricks', 'bags'],
  },
  {
    emoji: '📖',
    word: 'textbook',
    topic: 'Paper and books',
    distractors: ['envelope', 'folder', 'calculator'],
  },
  {
    emoji: '📓',
    word: 'notebook',
    topic: 'Paper and books',
    distractors: ['poster', 'folder', 'envelope'],
  },
  {
    emoji: '📒',
    word: 'exercise book',
    topic: 'Paper and books',
    distractors: ['calculator', 'wallet', 'poster'],
  },
  {
    emoji: '🎒',
    word: 'school bag',
    topic: 'The room',
    distractors: ['suitcase', 'basket', 'pocket'],
  },
  {
    emoji: '🖍️',
    word: 'crayon',
    topic: 'Writing and drawing',
    distractors: ['chalk', 'pen', 'pin'],
  },
  { emoji: '🖌️', word: 'paintbrush', topic: 'Art', distractors: ['pencil', 'feather', 'broom'] },
  { emoji: '🎨', word: 'paints', topic: 'Art', distractors: ['inks', 'dyes', 'crayons'] },
  {
    emoji: '📐',
    word: 'set square',
    topic: 'Maths',
    distractors: ['pencil', 'compass', 'protractor'],
  },
  { emoji: '🧮', word: 'abacus', topic: 'Maths', distractors: ['calculator', 'clock', 'till'] },
  {
    emoji: '🗒️',
    word: 'notepad',
    topic: 'Paper and books',
    distractors: ['letter', 'card', 'leaflet'],
  },
  {
    emoji: '📝',
    word: 'worksheet',
    topic: 'Paper and books',
    distractors: ['poster', 'ticket', 'receipt'],
  },
  {
    emoji: '📎',
    word: 'paper clip',
    topic: 'Desk tools',
    distractors: ['drawing pin', 'staple', 'peg'],
  },
  {
    emoji: '📌',
    word: 'drawing pin',
    topic: 'Desk tools',
    distractors: ['needle', 'nail', 'paper clip'],
  },
  { emoji: '🗂️', word: 'folder', topic: 'Paper and books', distractors: ['drawer', 'box', 'tray'] },
  {
    emoji: '📁',
    word: 'file',
    topic: 'Paper and books',
    distractors: ['bag', 'shelf', 'cupboard'],
  },
  {
    emoji: '📋',
    word: 'clipboard',
    topic: 'Paper and books',
    distractors: ['whiteboard', 'noticeboard', 'tray'],
  },
  {
    emoji: '🖇️',
    word: 'paper clips',
    topic: 'Desk tools',
    distractors: ['stapler', 'hole punch', 'tape'],
    facts: ['paper clip'],
  },
  {
    emoji: '📅',
    word: 'calendar',
    topic: 'The room',
    distractors: ['clock', 'envelope', 'ticket'],
  },
  { emoji: '🧴', word: 'bottle', topic: 'Cleaning', distractors: ['pencil', 'ruler', 'chair'] },
  { emoji: '🪣', word: 'bucket', topic: 'Cleaning', distractors: ['bin', 'bowl', 'jug'] },
  { emoji: '🗑️', word: 'bin', topic: 'Cleaning', distractors: ['bucket', 'box', 'bag'] },
  { emoji: '🪑', word: 'chair', topic: 'The room', distractors: ['stool', 'bench', 'sofa'] },
  { emoji: '🛗', word: 'lift', topic: 'The room', distractors: ['stairs', 'window', 'ramp'] },
  { emoji: '🚪', word: 'door', topic: 'The room', distractors: ['window', 'wall', 'gate'] },
  { emoji: '🪟', word: 'window', topic: 'The room', distractors: ['door', 'mirror', 'screen'] },
  { emoji: '🕰️', word: 'clock', topic: 'The room', distractors: ['watch', 'timer', 'bell'] },
  { emoji: '🔔', word: 'bell', topic: 'The room', distractors: ['clock', 'horn', 'whistle'] },
  { emoji: '💡', word: 'light', topic: 'The room', distractors: ['plug', 'torch', 'candle'] },
  {
    emoji: '🖥️',
    word: 'computer',
    topic: 'Computers and machines',
    distractors: ['camera', 'radio', 'phone'],
  },
  {
    emoji: '⌨️',
    word: 'keyboard',
    topic: 'Computers and machines',
    distractors: ['screen', 'mouse', 'printer'],
  },
  {
    emoji: '🖱️',
    word: 'mouse',
    topic: 'Computers and machines',
    distractors: ['keyboard', 'remote', 'plug'],
  },
  {
    emoji: '🖨️',
    word: 'printer',
    topic: 'Computers and machines',
    distractors: ['scanner', 'computer', 'speaker'],
  },
  {
    emoji: '📽️',
    word: 'projector',
    topic: 'Computers and machines',
    distractors: ['speaker', 'screen', 'torch'],
  },
  { emoji: '🗺️', word: 'map', topic: 'The room', distractors: ['poster', 'painting', 'chart'] },
  { emoji: '🌍', word: 'globe', topic: 'The room', distractors: ['ball', 'map', 'lamp'] },
  {
    emoji: '🔬',
    word: 'microscope',
    topic: 'Science',
    distractors: ['telescope', 'camera', 'magnet'],
  },
  { emoji: '🧲', word: 'magnet', topic: 'Science', distractors: ['battery', 'bell', 'clip'] },
  {
    emoji: '🔭',
    word: 'telescope',
    topic: 'Science',
    distractors: ['microscope', 'binoculars', 'lamp'],
  },
  {
    emoji: '🧪',
    word: 'test tube',
    topic: 'Science',
    distractors: ['bottle', 'jar', 'cup'],
    facts: ['test'],
  },
  { emoji: '📊', word: 'chart', topic: 'Maths', distractors: ['map', 'list', 'photo'] },
  {
    emoji: '🎓',
    word: 'graduation cap',
    topic: 'School life',
    distractors: ['scarf', 'helmet', 'crown'],
  },
  { emoji: '🪧', word: 'sign', topic: 'The room', distractors: ['shelf', 'clipboard', 'mirror'] },
  {
    emoji: '📞',
    word: 'telephone',
    topic: 'Computers and machines',
    distractors: ['radio', 'speaker', 'remote'],
  },
  { emoji: '🧹', word: 'broom', topic: 'Cleaning', distractors: ['mop', 'bucket', 'rake'] },
  { emoji: '🪞', word: 'mirror', topic: 'The room', distractors: ['window', 'screen', 'clock'] },
  {
    emoji: '💻',
    word: 'laptop',
    topic: 'Computers and machines',
    distractors: ['tablet', 'printer', 'projector'],
  },
  {
    emoji: '🔋',
    word: 'battery',
    topic: 'Computers and machines',
    distractors: ['charger', 'plug', 'magnet'],
  },
  {
    emoji: '🔌',
    word: 'plug',
    topic: 'Computers and machines',
    distractors: ['socket', 'battery', 'switch'],
  },
  {
    emoji: '🎧',
    word: 'headphones',
    topic: 'Computers and machines',
    distractors: ['speakers', 'microphone', 'radio'],
  },
  {
    emoji: '🔍',
    word: 'magnifying glass',
    topic: 'Science',
    distractors: ['microscope', 'telescope', 'binoculars'],
  },
  { emoji: '🌡️', word: 'thermometer', topic: 'Science', distractors: ['ruler', 'clock', 'pencil'] },
  {
    emoji: '⏱️',
    word: 'stopwatch',
    topic: 'Science',
    distractors: ['compass', 'calculator', 'magnet'],
  },
  {
    emoji: '📱',
    word: 'mobile phone',
    topic: 'Computers and machines',
    distractors: ['calculator', 'remote control', 'camera'],
  },
  {
    emoji: '📷',
    word: 'camera',
    topic: 'Computers and machines',
    distractors: ['projector', 'printer', 'telescope'],
  },
  {
    emoji: '🎤',
    word: 'microphone',
    topic: 'Computers and machines',
    distractors: ['speaker', 'headphones', 'torch'],
  },
  {
    emoji: '🧷',
    word: 'safety pin',
    topic: 'Desk tools',
    distractors: ['drawing pin', 'paper clip', 'needle'],
  },
]

export const SENTENCE_BANK: SentenceItem[] = [
  {
    word: 'rubber',
    tier: 2,
    topic: 'Writing and drawing',
    sentence: 'A ___ takes away pencil marks.',
    distractors: ['ruler', 'stapler', 'sharpener'],
  },
  {
    word: 'sharpener',
    tier: 2,
    topic: 'Writing and drawing',
    sentence: 'If the point of your pencil breaks, use a ___.',
    distractors: ['rubber', 'ruler', 'stapler'],
  },
  {
    word: 'stapler',
    tier: 2,
    topic: 'Desk tools',
    sentence: 'Press the ___ down hard, and a tiny piece of metal joins the pages together.',
    distractors: ['hole punch', 'glue stick', 'paper clip'],
  },
  {
    word: 'hole punch',
    tier: 2,
    topic: 'Desk tools',
    sentence:
      'A ___ cuts two neat circles out of the side of a page, so that it fits in a ring binder.',
    distractors: ['stapler', 'scissors', 'sharpener'],
  },
  {
    word: 'compass',
    tier: 2,
    topic: 'Maths',
    sentence: 'Use a ___ to draw a perfect circle.',
    distractors: ['ruler', 'set square', 'protractor'],
  },
  {
    word: 'protractor',
    tier: 2,
    topic: 'Maths',
    sentence: 'Use a ___ to measure the size of an angle.',
    distractors: ['ruler', 'compass', 'calculator'],
  },
  {
    word: 'highlighter',
    tier: 2,
    topic: 'Writing and drawing',
    sentence: 'Colour the most important words with a ___ so that they stand out.',
    distractors: ['rubber', 'sharpener', 'stapler'],
  },
  {
    word: 'glue',
    tier: 2,
    topic: 'Art',
    sentence: 'Put a little ___ on the back of the photo, then press it onto the page.',
    distractors: ['paint', 'ink', 'chalk'],
  },
  {
    word: 'marker',
    tier: 2,
    topic: 'Writing and drawing',
    sentence: 'Write on the whiteboard with a ___.',
    distractors: ['crayon', 'chalk', 'pencil'],
  },
  {
    word: 'pencil case',
    tier: 2,
    topic: 'Desk tools',
    sentence: 'The small zip bag where you keep your rubber and your sharpener is your ___.',
    distractors: ['lunch box', 'wallet', 'envelope'],
    facts: ['pencil'],
  },
  {
    word: 'lunch box',
    tier: 2,
    topic: 'School life',
    sentence: 'Put your sandwiches in your ___.',
    distractors: ['pencil case', 'wallet', 'envelope'],
    facts: ['lunch'],
  },
  {
    word: 'atlas',
    tier: 2,
    topic: 'Paper and books',
    sentence: 'To find a map of Africa, look in the ___.',
    distractors: ['dictionary', 'diary', 'register'],
  },
  {
    word: 'dictionary',
    tier: 2,
    topic: 'Paper and books',
    sentence: 'A ___ tells you what words mean.',
    distractors: ['atlas', 'calendar', 'timetable'],
  },
  {
    word: 'whiteboard',
    tier: 2,
    topic: 'The room',
    sentence: 'Ms Khan writes on the ___ at the front of the class.',
    distractors: ['noticeboard', 'clipboard', 'keyboard'],
  },
  {
    word: 'noticeboard',
    tier: 2,
    topic: 'The room',
    sentence: 'Pin your poster on the ___ in the corridor.',
    distractors: ['whiteboard', 'clipboard', 'keyboard'],
  },
  {
    word: 'receptionist',
    tier: 2,
    topic: 'People at school',
    sentence: 'The ___ works in the school office and answers the phone.',
    distractors: ['caretaker', 'cook', 'cleaner'],
    facts: ['office'],
  },
  {
    word: 'pupil',
    tier: 2,
    topic: 'People at school',
    sentence: 'A child who goes to school is a ___.',
    distractors: ['teacher', 'parent', 'caretaker'],
  },
  {
    word: 'head teacher',
    tier: 2,
    topic: 'People at school',
    sentence: 'The ___ is in charge of the whole school.',
    distractors: ['teacher', 'caretaker', 'cook'],
  },
  {
    word: 'cook',
    tier: 2,
    topic: 'People at school',
    sentence: 'The ___ makes our lunch in the school kitchen.',
    distractors: ['caretaker', 'librarian', 'nurse'],
  },
  {
    word: 'caretaker',
    tier: 2,
    topic: 'People at school',
    sentence: 'The ___ looks after the school building and mends broken things.',
    distractors: ['head teacher', 'cook', 'librarian'],
  },
  {
    word: 'canteen',
    tier: 2,
    topic: 'Places at school',
    sentence: 'At lunchtime we queue for hot food in the ___.',
    distractors: ['library', 'gym', 'office'],
  },
  {
    word: 'playground',
    tier: 2,
    topic: 'Places at school',
    sentence: 'At break we run about and kick a ball in the ___.',
    distractors: ['library', 'canteen', 'office'],
  },
  {
    word: 'gym',
    tier: 2,
    topic: 'Places at school',
    sentence: 'When it rains, we do PE indoors, in the ___.',
    distractors: ['library', 'canteen', 'office'],
  },
  {
    word: 'library',
    tier: 2,
    topic: 'Places at school',
    sentence: 'Read quietly in the school ___ at lunchtime.',
    distractors: ['playground', 'canteen', 'gym'],
  },
  {
    word: 'timetable',
    tier: 2,
    topic: 'Lessons and tests',
    sentence: 'Look at your ___ to see which lesson is next.',
    distractors: ['register', 'report', 'menu'],
  },
  {
    word: 'trip',
    tier: 2,
    topic: 'School life',
    sentence: 'We are going on a school ___ to the museum.',
    distractors: ['holiday', 'lesson', 'test'],
  },
  {
    word: 'report',
    tier: 2,
    topic: 'Lessons and tests',
    sentence: 'Once a year, your parents get a ___ about your work.',
    distractors: ['register', 'timetable', 'receipt'],
  },
  {
    word: 'test',
    tier: 2,
    topic: 'Lessons and tests',
    sentence: 'We have a spelling ___ on Friday. Learn your words.',
    distractors: ['trip', 'lesson', 'break'],
  },
  {
    word: 'homework',
    tier: 2,
    topic: 'Lessons and tests',
    sentence: 'Your teacher sets ___ for you to do after school.',
    distractors: ['break', 'assembly', 'register'],
  },
  {
    word: 'assembly',
    tier: 2,
    topic: 'School life',
    sentence: 'The whole school meets in the hall for ___ on Monday morning.',
    distractors: ['homework', 'break', 'register'],
  },
  {
    word: 'lab',
    tier: 2,
    topic: 'Places at school',
    sentence: 'In the science ___, we do experiments with test tubes.',
    distractors: ['library', 'gym', 'hall'],
  },
  {
    word: 'maths',
    tier: 2,
    topic: 'Subjects',
    sentence: 'In ___, we learn about numbers and shapes.',
    distractors: ['science', 'history', 'music'],
  },
  {
    word: 'history',
    tier: 2,
    topic: 'Subjects',
    sentence: 'In ___, we learn about the past, like the Romans.',
    distractors: ['geography', 'maths', 'art'],
  },
  {
    word: 'geography',
    tier: 2,
    topic: 'Subjects',
    sentence: 'In ___, we learn about countries, rivers and mountains.',
    distractors: ['history', 'science', 'music'],
  },
  {
    word: 'science',
    tier: 2,
    topic: 'Subjects',
    sentence: 'In ___, we do experiments and learn how things work.',
    distractors: ['history', 'art', 'PE'],
  },
  {
    word: 'art',
    tier: 2,
    topic: 'Subjects',
    sentence: 'In ___, we paint and draw.',
    distractors: ['music', 'maths', 'history'],
  },
  {
    word: 'music',
    tier: 2,
    topic: 'Subjects',
    sentence: 'In ___, we sing songs and play instruments.',
    distractors: ['art', 'maths', 'geography'],
  },
  {
    word: 'PE',
    tier: 2,
    topic: 'Subjects',
    sentence: 'In ___, we run, jump and play team games.',
    distractors: ['maths', 'art', 'music'],
  },
  {
    word: 'desk',
    tier: 2,
    topic: 'The room',
    sentence: 'Sit at your ___ and get out your books.',
    distractors: ['shelf', 'cupboard', 'bin'],
  },
  {
    word: 'shelf',
    tier: 2,
    topic: 'The room',
    sentence: 'The ___ fixed to the wall holds thirty books in a row.',
    distractors: ['desk', 'bin', 'tray'],
  },
  {
    word: 'calculator',
    tier: 2,
    topic: 'Maths',
    sentence: 'We use a ___ to do hard sums quickly.',
    distractors: ['compass', 'protractor', 'stapler'],
  },
  {
    word: 'mark',
    tier: 2,
    topic: 'Lessons and tests',
    sentence: 'Mr Jones checks our work and gives us a ___ out of ten.',
    distractors: ['prize', 'page', 'test'],
  },
  {
    word: 'prize',
    tier: 2,
    topic: 'School life',
    sentence: 'If you work hard all year, you might win a ___ when the term ends.',
    distractors: ['report', 'test', 'mark'],
  },
  {
    word: 'uniform',
    tier: 2,
    topic: 'School life',
    sentence: 'At my school, everyone wears the same blue ___.',
    distractors: ['timetable', 'homework', 'register'],
  },
  {
    word: 'task',
    tier: 2,
    topic: 'Lessons and tests',
    sentence: 'Do the ___ quietly. You have twenty minutes to finish it.',
    distractors: ['assembly', 'break', 'trip'],
  },
  {
    word: 'letters',
    tier: 2,
    topic: 'Writing and drawing',
    sentence: 'There are twenty-six ___ in the English alphabet.',
    distractors: ['words', 'numbers', 'pages'],
  },
  {
    word: 'stop',
    tier: 2,
    topic: 'Writing and drawing',
    sentence: 'Every sentence finishes with a full ___.',
    distractors: ['mark', 'line', 'space'],
  },
  {
    word: 'story',
    tier: 2,
    topic: 'Lessons and tests',
    sentence: 'The teacher reads us a ___ about a dragon.',
    distractors: ['test', 'map', 'report'],
  },
  {
    word: 'garden',
    tier: 2,
    topic: 'Places at school',
    sentence: 'We grow beans in the school ___.',
    distractors: ['gym', 'canteen', 'library'],
  },
  {
    word: 'pet',
    tier: 2,
    topic: 'School life',
    sentence: 'Our class ___ is a hamster called Bob.',
    distractors: ['teacher', 'pupil', 'prize'],
  },
  {
    word: 'goggles',
    tier: 2,
    topic: 'Science',
    sentence: 'In the science lab, always wear ___ to protect your eyes.',
    distractors: ['gloves', 'aprons', 'helmets'],
  },
  {
    word: 'foot',
    tier: 2,
    topic: 'School life',
    sentence: 'Some pupils come to school by bus, and some come on ___.',
    distractors: ['feet', 'walk', 'legs'],
  },
  // TIER2
  {
    word: 'register',
    tier: 3,
    topic: 'Lessons and tests',
    sentence: 'Miss Lee calls out our names to check who is here. She is taking the ___.',
    distractors: ['timetable', 'report', 'test'],
  },
  {
    word: 'detention',
    tier: 3,
    topic: 'School life',
    sentence:
      "A: Why are you staying after school?\nB: I've got a ___. I forgot my homework three times.",
    distractors: ['lesson', 'trip', 'break'],
  },
  {
    word: 'exam',
    tier: 3,
    topic: 'Lessons and tests',
    sentence: "A: Why are you revising so hard?\nB: I've got a maths ___ on Monday.",
    distractors: ['trip', 'assembly', 'register'],
  },
  {
    word: 'results',
    tier: 3,
    topic: 'Lessons and tests',
    sentence: "A: Did you pass?\nB: I don't know yet. We get our ___ next week.",
    distractors: ['homework', 'uniforms', 'timetables'],
  },
  {
    word: 'deadline',
    tier: 3,
    topic: 'Lessons and tests',
    sentence: "A: When do we have to hand in the project?\nB: The ___ is Friday at nine o'clock.",
    distractors: ['timetable', 'register', 'holiday'],
  },
  {
    word: 'hand in',
    tier: 3,
    topic: 'Lessons and tests',
    sentence: 'Please ___ your homework on Monday morning.',
    distractors: ['hand out', 'give up', 'look up'],
  },
  {
    word: 'hand out',
    tier: 3,
    topic: 'Lessons and tests',
    sentence: 'A: Can you ___ the worksheets, please? Give one to everyone.\nB: OK, miss.',
    distractors: ['hand in', 'give up', 'look up'],
  },
  {
    word: 'revise',
    tier: 3,
    topic: 'Lessons and tests',
    sentence: "I need to ___ for my history test. I'll read my notes again tonight.",
    distractors: ['forget', 'borrow', 'lend'],
  },
  {
    word: 'lend',
    tier: 3,
    topic: 'School life',
    sentence: 'A: Can you ___ me your calculator?\nB: Sure, here it is.',
    distractors: ['borrow', 'take', 'keep'],
    facts: ['lend and borrow'],
  },
  {
    word: 'borrow',
    tier: 3,
    topic: 'School life',
    sentence: 'A: Can I ___ your ruler?\nB: Yes, but give it back after the lesson.',
    distractors: ['lend', 'give', 'keep'],
    facts: ['lend and borrow'],
  },
  {
    word: 'partner',
    tier: 3,
    topic: 'Lessons and tests',
    sentence: 'Work with a ___. Turn to the person next to you and talk about the picture.',
    distractors: ['group', 'team', 'class'],
  },
  {
    word: 'presentation',
    tier: 3,
    topic: 'Lessons and tests',
    sentence:
      "Tomorrow I'm giving a ___ to the class about my favourite animal, with slides for everyone to see.",
    distractors: ['homework', 'register', 'uniform'],
  },
  {
    word: 'project',
    tier: 3,
    topic: 'Lessons and tests',
    sentence: 'Our class is doing a ___ on the Romans. Each group is making a poster.',
    distractors: ['test', 'trip', 'register'],
  },
  {
    word: 'notes',
    tier: 3,
    topic: 'Lessons and tests',
    sentence: 'Listen to the teacher and write ___ in your exercise book.',
    distractors: ['maps', 'stamps', 'tickets'],
  },
  {
    word: 'password',
    tier: 3,
    topic: 'Computers and machines',
    sentence: "A: I can't log in to the computer.\nB: Check your ___. Is Caps Lock on?",
    distractors: ['printer', 'mouse', 'battery'],
  },
  {
    word: 'charger',
    tier: 3,
    topic: 'Computers and machines',
    sentence: "A: My laptop has gone dead.\nB: Here's my ___. Plug it in over there.",
    distractors: ['battery', 'headphones', 'mouse'],
  },
  {
    word: 'certificate',
    tier: 3,
    topic: 'School life',
    sentence: 'Everyone who finished the swimming course got a ___ with their name on it.',
    distractors: ['register', 'timetable', 'receipt'],
  },
  {
    word: 'trophy',
    tier: 3,
    topic: 'School life',
    sentence: 'Our school team won the football final, and the captain held up the shiny ___.',
    distractors: ['certificate', 'ticket', 'register'],
  },
  {
    word: 'classmate',
    tier: 3,
    topic: 'People at school',
    sentence: 'Jo sits next to me in every lesson. She is my ___.',
    distractors: ['teacher', 'caretaker', 'head teacher'],
  },
  {
    word: 'absent',
    tier: 3,
    topic: 'School life',
    sentence: "Mia couldn't come to school today because she was ill. She was ___.",
    distractors: ['present', 'late', 'early'],
  },
  {
    word: 'late',
    tier: 3,
    topic: 'School life',
    sentence: 'Tom came into the lesson ten minutes after it started. He was ___.',
    distractors: ['absent', 'early', 'ready'],
  },
  {
    word: 'stairs',
    tier: 3,
    topic: 'Places at school',
    sentence: "A: Which room is maths in?\nB: Room 12. Go up the ___, and it's on the right.",
    distractors: ['lift', 'roof', 'wall'],
  },
  {
    word: 'display',
    tier: 3,
    topic: 'Art',
    sentence: 'Our teacher put our best paintings on ___ so that everyone could see them.',
    distractors: ['holiday', 'time', 'purpose'],
  },
  {
    word: 'sentences',
    tier: 3,
    topic: 'Writing and drawing',
    sentence: 'Please write in full ___, not in notes.',
    distractors: ['letters', 'numbers', 'colours'],
  },
  {
    word: 'terms',
    tier: 3,
    topic: 'School life',
    sentence: 'There are three ___ in the school year: autumn, spring and summer.',
    distractors: ['seasons', 'holidays', 'months'],
  },
  {
    word: 'university',
    tier: 3,
    topic: 'School life',
    sentence: 'My big sister goes to ___. She is studying medicine.',
    distractors: ['nursery', 'primary school', 'playground'],
  },
  {
    word: 'nursery',
    tier: 3,
    topic: 'School life',
    sentence: 'Many children aged three go to ___ before they start school.',
    distractors: ['university', 'college', 'assembly'],
  },
  {
    word: 'hint',
    tier: 3,
    topic: 'Lessons and tests',
    sentence:
      "A: I'm stuck on question 5.\nB: Ask Miss Lee for a ___. She might tell you how to start.",
    distractors: ['mark', 'test', 'trip'],
  },
  {
    word: 'wrong',
    tier: 3,
    topic: 'Lessons and tests',
    sentence:
      'A: What did you get in the spelling test?\nB: Nine out of ten. I only got one word ___.',
    distractors: ['right', 'easy', 'late'],
  },
  {
    word: 'form',
    tier: 3,
    topic: 'People at school',
    sentence:
      'Our ___ teacher, Mrs Hall, looks after our class and takes the register every morning.',
    distractors: ['head', 'music', 'art'],
  },
  {
    word: 'raise',
    tier: 3,
    topic: 'Lessons and tests',
    sentence: 'If you know the answer, ___ your hand.',
    distractors: ['rise', 'shake', 'clap'],
  },
  {
    word: 'copy',
    tier: 3,
    topic: 'Writing and drawing',
    sentence: 'I need to ___ the date from the board into my exercise book.',
    distractors: ['read', 'cut', 'rub'],
  },
  {
    word: 'field',
    tier: 3,
    topic: 'Places at school',
    sentence: 'Sports day is in June. Everyone runs, jumps and throws on the school ___.',
    distractors: ['gym', 'lab', 'library'],
  },
  {
    word: 'capital',
    tier: 3,
    topic: 'Writing and drawing',
    sentence: 'Write your answers in ___ letters so that they are easy to read.',
    distractors: ['tiny', 'secret', 'silent'],
  },
  {
    word: 'alphabetical',
    tier: 3,
    topic: 'Paper and books',
    sentence:
      "A: I can't find 'tortoise' in the dictionary.\nB: Remember, the words are in ___ order.",
    distractors: ['number', 'size', 'colour'],
  },
  {
    word: 'pass',
    tier: 3,
    topic: 'Paper and books',
    sentence:
      'Please ___ the worksheets to the back: take one and give the rest to the person behind you.',
    distractors: ['hold', 'throw', 'keep'],
  },
  {
    word: 'corridor',
    tier: 3,
    topic: 'Places at school',
    sentence: 'We must not run in the ___. Walk to your next lesson.',
    distractors: ['playground', 'field', 'gym'],
  },
  {
    word: 'spare',
    tier: 3,
    topic: 'Writing and drawing',
    sentence: 'A: Have you got a ___ pen? Mine has run out of ink.\nB: Yes, take this one.',
    distractors: ['empty', 'broken', 'missing'],
  },
  {
    word: 'property',
    tier: 3,
    topic: 'School life',
    sentence: "I left my jumper at school. I'll look in the lost ___ box tomorrow.",
    distractors: ['paper', 'school', 'office'],
  },
  {
    word: 'kit',
    tier: 3,
    topic: 'School life',
    sentence: "Don't forget your PE ___. We're playing netball today.",
    distractors: ['test', 'team', 'report'],
  },
  {
    word: 'lunch',
    tier: 3,
    topic: 'School life',
    sentence: "I don't eat school dinners. I bring a packed ___ from home.",
    distractors: ['dinner', 'breakfast', 'supper'],
  },
  {
    word: 'drill',
    tier: 3,
    topic: 'School life',
    sentence: 'The fire alarm rang, but there was no fire. It was only a fire ___.',
    distractors: ['door', 'engine', 'exit'],
  },
  {
    word: 'fire exit',
    tier: 3,
    topic: 'Places at school',
    sentence: 'If the alarm rings, leave the building quickly by the ___.',
    distractors: ['lift', 'window', 'roof'],
  },
  {
    word: 'silence',
    tier: 3,
    topic: 'Lessons and tests',
    sentence: 'During the exam there must be total ___. Nobody may speak.',
    distractors: ['noise', 'music', 'light'],
  },
  {
    word: 'quiz',
    tier: 3,
    topic: 'Lessons and tests',
    sentence: 'We had a ___ in maths today: thirty questions in twenty minutes.',
    distractors: ['trip', 'register', 'uniform'],
  },
  {
    word: 'freezing',
    tier: 3,
    topic: 'School life',
    sentence:
      'The teacher sent us home early, because the heating was broken and the school was ___.',
    distractors: ['crowded', 'noisy', 'open'],
  },
  {
    word: 'left',
    tier: 3,
    topic: 'Places at school',
    sentence:
      'A: Excuse me, which way is the hall?\nB: Go down this corridor and take the second door on the ___.',
    distractors: ['front', 'top', 'middle'],
  },
  {
    word: 'sign',
    tier: 3,
    topic: 'Art',
    sentence: 'A: Have you finished your drawing?\nB: Almost. I just need to ___ my name on it.',
    distractors: ['cut', 'rub', 'fold'],
  },
  // TIER3
]

export const WHERE_BANK: WhereItem[] = [
  {
    emoji: '🕰️',
    thing: 'clock',
    tier: 1,
    prompt: 'Where is the clock? It is ___ the wall. Look up and you can read the time.',
    options: ['on', 'in', 'under', 'next to'],
    answer: 'on',
    place: 'wall',
  },
  {
    emoji: '🗺️',
    thing: 'map',
    tier: 1,
    prompt:
      'Where is the map? It is ___ the wall. It is pinned up so that the whole class can see it.',
    options: ['on', 'in', 'under', 'next to'],
    answer: 'on',
    place: 'wall',
  },
  {
    emoji: '🌍',
    thing: 'globe',
    tier: 1,
    prompt: 'Where is the globe? It is ___ the shelf. Reach up high to get it down.',
    options: ['on', 'in', 'under', 'next to'],
    answer: 'on',
    place: 'shelf',
  },
  {
    emoji: '📚',
    thing: 'books',
    tier: 1,
    prompt:
      'Where are the books? They are ___ the shelf. They stand up straight, ready for the next lesson.',
    options: ['on', 'in', 'under', 'next to'],
    answer: 'on',
    place: 'shelf',
  },
  {
    emoji: '📊',
    thing: 'chart',
    tier: 1,
    prompt:
      'Where is the chart? It is ___ the noticeboard. It is pinned up with four drawing pins.',
    options: ['on', 'in', 'under', 'next to'],
    answer: 'on',
    place: 'noticeboard',
  },
  {
    emoji: '🖥️',
    thing: 'computer',
    tier: 1,
    prompt:
      'Where is the computer? It is ___ the desk. Sit at the desk, and its screen is right in front of you.',
    options: ['on', 'in', 'under', 'next to'],
    answer: 'on',
    place: 'desk',
  },
  {
    emoji: '✏️',
    thing: 'pencil',
    tier: 1,
    prompt: 'Where is the pencil? It is ___ the pencil case. Open the zip to get it out.',
    options: ['in', 'on', 'under', 'next to'],
    answer: 'in',
    place: 'pencil case',
  },
  {
    emoji: '📏',
    thing: 'ruler',
    tier: 1,
    prompt: 'Where is the ruler? It is ___ the drawer. Pull the drawer open to find it.',
    options: ['in', 'on', 'under', 'next to'],
    answer: 'in',
    place: 'drawer',
  },
  {
    emoji: '🪑',
    thing: 'chair',
    tier: 1,
    prompt:
      'Where is the chair? It is ___ the classroom. It stands at your desk, where you sit for the lesson.',
    options: ['in', 'on', 'under', 'next to'],
    answer: 'in',
    place: 'classroom',
  },
  {
    emoji: '🎨',
    thing: 'paints',
    tier: 1,
    prompt: 'Where are the paints? They are ___ the cupboard. Open the cupboard doors to get them.',
    options: ['in', 'on', 'under', 'next to'],
    answer: 'in',
    place: 'cupboard',
  },
  {
    emoji: '📞',
    thing: 'telephone',
    tier: 1,
    prompt: 'Where is the telephone? It is ___ the office. The school secretary answers it.',
    options: ['in', 'on', 'under', 'next to'],
    answer: 'in',
    place: 'office',
  },
  {
    emoji: '✂️',
    thing: 'scissors',
    tier: 1,
    prompt: 'Where are the scissors? They are ___ the tall pot, with the pens and pencils.',
    options: ['in', 'on', 'under', 'next to'],
    answer: 'in',
    place: 'pot',
  },
  {
    emoji: '🎒',
    thing: 'school bag',
    tier: 1,
    prompt:
      'Where is the school bag? It is ___ the chair. It is lying between the four legs of the chair.',
    options: ['under', 'on', 'in', 'next to'],
    answer: 'under',
    place: 'chair',
  },
  {
    emoji: '📒',
    thing: 'exercise book',
    tier: 1,
    prompt:
      'Where is the exercise book? It is ___ the desk. It slipped off the desk top, and now it lies where your feet go.',
    options: ['under', 'on', 'in', 'next to'],
    answer: 'under',
    place: 'desk',
  },
  {
    emoji: '🗑️',
    thing: 'bin',
    tier: 1,
    prompt: 'Where is the bin? It is ___ the door.',
    options: ['next to', 'on', 'in', 'under'],
    answer: 'next to',
    place: 'door',
  },
  {
    emoji: '🚪',
    thing: 'door',
    tier: 1,
    prompt: 'Where is the door? It is ___ the window.',
    options: ['next to', 'on', 'in', 'under'],
    answer: 'next to',
    place: 'window',
  },
  {
    emoji: '🪟',
    thing: 'window',
    tier: 1,
    prompt: 'Where is the window? It is ___ the board.',
    options: ['next to', 'on', 'in', 'under'],
    answer: 'next to',
    place: 'board',
  },
  {
    emoji: '🖱️',
    thing: 'mouse',
    tier: 1,
    prompt:
      'Where is the mouse? It is ___ the keyboard. Your right hand moves it while your left hand types.',
    options: ['next to', 'on', 'in', 'under'],
    answer: 'next to',
    place: 'keyboard',
  },
  {
    emoji: '',
    thing: 'teacher',
    tier: 2,
    prompt:
      'The teacher stands with her back to the board and talks to the class. Where is the teacher? She is ___ the board.',
    options: ['in front of', 'behind', 'above', 'between'],
    answer: 'in front of',
    place: 'board',
    facts: ['teacher at the board'],
  },
  {
    emoji: '',
    thing: 'board',
    tier: 2,
    prompt:
      'Where is the board? It is ___ the teacher. She stands with her back to it, facing the class.',
    options: ['behind', 'in front of', 'under', 'between'],
    answer: 'behind',
    place: 'teacher',
    facts: ['teacher at the board'],
  },
  {
    emoji: '',
    thing: 'desk',
    tier: 2,
    prompt:
      "Sara's desk has Ali's desk on its left and Ben's desk on its right. Where is Sara's desk? It is ___ Ali's desk and Ben's desk.",
    options: ['between', 'behind', 'opposite', 'above'],
    answer: 'between',
    place: 'desks',
  },
  {
    emoji: '',
    thing: 'bookcase',
    tier: 2,
    prompt:
      'The bookcase has the window on one side and the door on the other. Where is the bookcase? It is ___ the window and the door.',
    options: ['between', 'opposite', 'above', 'behind'],
    answer: 'between',
    place: 'window',
  },
  {
    emoji: '',
    thing: 'Mia',
    tier: 2,
    prompt:
      'Leo sits at one end of the long table, and Mia sits at the other end, looking at him. Where is Mia? She is ___ Leo.',
    options: ['opposite', 'next to', 'behind', 'above'],
    answer: 'opposite',
    place: 'table',
  },
  {
    emoji: '🕰️',
    thing: 'clock',
    tier: 2,
    prompt:
      'The clock hangs high up. The whiteboard hangs lower down, at the same spot. Where is the clock? It is ___ the whiteboard.',
    options: ['above', 'below', 'behind', 'between'],
    answer: 'above',
    place: 'whiteboard',
    facts: ['clock and whiteboard'],
  },
  {
    emoji: '',
    thing: 'whiteboard',
    tier: 2,
    prompt:
      'Where is the whiteboard? It is ___ the clock. The clock hangs high up, and the whiteboard hangs lower down.',
    options: ['below', 'above', 'behind', 'opposite'],
    answer: 'below',
    place: 'clock',
    facts: ['clock and whiteboard'],
  },
  {
    emoji: '🗑️',
    thing: 'bin',
    tier: 2,
    prompt:
      "You cannot see the bin from the door, because the teacher's big desk hides it. Where is the bin? It is ___ the desk.",
    options: ['behind', 'in front of', 'above', 'opposite'],
    answer: 'behind',
    place: 'desk',
  },
  {
    emoji: '',
    thing: 'Ella',
    tier: 2,
    prompt:
      'The children stand in a line. Tom is first, and Ella is next. Where is Ella? She is ___ Tom.',
    options: ['behind', 'in front of', 'above', 'opposite'],
    answer: 'behind',
    place: 'line',
    facts: ['Tom and Ella'],
  },
  {
    emoji: '',
    thing: 'Tom',
    tier: 2,
    prompt: 'Where is Tom? He is ___ Ella. They are standing in a line, and Tom is first.',
    options: ['in front of', 'behind', 'opposite', 'between'],
    answer: 'in front of',
    place: 'line',
    facts: ['Tom and Ella'],
  },
  {
    emoji: '📽️',
    thing: 'projector',
    tier: 2,
    prompt:
      'The projector hangs from the ceiling. The table is on the floor, at the same spot. Where is the projector? It is ___ the table.',
    options: ['above', 'below', 'behind', 'between'],
    answer: 'above',
    place: 'table',
  },
  {
    emoji: '',
    thing: 'mat',
    tier: 2,
    prompt:
      'Where is the mat? It is ___ the door. You wipe your feet on it before you go into the room.',
    options: ['in front of', 'behind', 'above', 'between'],
    answer: 'in front of',
    place: 'door',
  },
  {
    emoji: '',
    thing: 'park',
    tier: 2,
    prompt:
      'The school is on one side of the road, and the park is on the other side. You cross the road to go from one to the other. Where is the park? It is ___ the school.',
    options: ['opposite', 'next to', 'behind', 'between'],
    answer: 'opposite',
    place: 'school',
    facts: ['school and park'],
  },
  {
    emoji: '',
    thing: 'road',
    tier: 2,
    prompt:
      'Where is the road? It is ___ the school and the park. The school is on one side of it, and the park is on the other.',
    options: ['between', 'opposite', 'behind', 'above'],
    answer: 'between',
    place: 'road',
    facts: ['school and park'],
  },
  {
    emoji: '',
    thing: 'dictionaries',
    tier: 2,
    prompt:
      'There are two shelves. The dictionaries are on the top shelf, and the atlases are on the shelf lower down. Where are the dictionaries? They are ___ the atlases.',
    options: ['above', 'below', 'between', 'opposite'],
    answer: 'above',
    place: 'shelf',
    facts: ['dictionaries and atlases'],
  },
  {
    emoji: '',
    thing: 'atlases',
    tier: 2,
    prompt:
      'Where are the atlases? They are ___ the dictionaries. The dictionaries are on the top shelf, and the atlases are on the shelf lower down.',
    options: ['below', 'above', 'behind', 'opposite'],
    answer: 'below',
    place: 'shelf',
    facts: ['dictionaries and atlases'],
  },
  {
    emoji: '',
    thing: 'Ana',
    tier: 2,
    prompt:
      'Ana is hiding. The curtain covers her, and you can see only her shoes. Where is Ana? She is ___ the curtain.',
    options: ['behind', 'in front of', 'above', 'between'],
    answer: 'behind',
    place: 'curtain',
  },
  {
    emoji: '',
    thing: 'children',
    tier: 2,
    prompt:
      'The children sit on the floor, facing the screen. They can see the film clearly. Where are the children? They are ___ the screen.',
    options: ['in front of', 'behind', 'above', 'between'],
    answer: 'in front of',
    place: 'screen',
  },
  {
    emoji: '',
    thing: 'desk',
    tier: 2,
    prompt:
      "When you open the door, the first thing you see, right across the room, is Ms Khan's desk. Where is the desk? It is ___ the door.",
    options: ['opposite', 'next to', 'behind', 'under'],
    answer: 'opposite',
    place: 'door',
  },
  {
    emoji: '',
    thing: 'playground',
    tier: 2,
    prompt:
      'From the street, you can see the school, but not the playground. To get to it, you walk right round the building. Where is the playground? It is ___ the school.',
    options: ['behind', 'in front of', 'above', 'between'],
    answer: 'behind',
    place: 'school',
  },
  {
    emoji: '',
    thing: 'gate',
    tier: 2,
    prompt:
      'When you walk up to the school from the street, you come to the gate first, and then the building. Where is the gate? It is ___ the school.',
    options: ['in front of', 'behind', 'above', 'under'],
    answer: 'in front of',
    place: 'school',
  },
  {
    emoji: '',
    thing: 'lamp',
    tier: 2,
    prompt:
      "The lamp hangs from the ceiling, high up, at the spot where the teacher's desk stands. Where is the lamp? It is ___ the desk.",
    options: ['above', 'below', 'behind', 'next to'],
    answer: 'above',
    place: 'desk',
  },
  {
    emoji: '',
    thing: 'children',
    tier: 2,
    prompt:
      'Where are the children at break time? They are ___ the classroom. They are playing in the playground.',
    options: ['outside', 'inside', 'under', 'above'],
    answer: 'outside',
    place: 'classroom',
  },
  {
    emoji: '🐹',
    thing: 'hamster',
    tier: 2,
    prompt:
      'Where is the hamster? It is ___ its cage. The door of the cage is shut, and the hamster is fast asleep.',
    options: ['inside', 'outside', 'above', 'opposite'],
    answer: 'inside',
    place: 'cage',
  },
  {
    emoji: '',
    thing: 'Room 6',
    tier: 2,
    prompt:
      'When you come out of Room 5, you only have to cross the corridor to go into Room 6. Where is Room 6? It is ___ Room 5.',
    options: ['opposite', 'next to', 'above', 'between'],
    answer: 'opposite',
    place: 'corridor',
  },
  {
    emoji: '',
    thing: 'library',
    tier: 2,
    prompt:
      'The library is on the first floor, and the canteen is on the ground floor, at the same end of the building. Where is the library? It is ___ the canteen.',
    options: ['above', 'below', 'between', 'opposite'],
    answer: 'above',
    place: 'floors',
  },
  {
    emoji: '',
    thing: 'art room',
    tier: 2,
    prompt:
      'The art room is on the ground floor, and the music room is on the first floor, at the same end of the building. Where is the art room? It is ___ the music room.',
    options: ['below', 'above', 'behind', 'opposite'],
    answer: 'below',
    place: 'floors',
  },
  {
    emoji: '',
    thing: 'Zoe',
    tier: 2,
    prompt:
      'At lunch, Zoe is first in the queue, and Max comes after her. Where is Zoe? She is ___ Max.',
    options: ['in front of', 'behind', 'opposite', 'between'],
    answer: 'in front of',
    place: 'queue',
  },
  {
    emoji: '',
    thing: 'tall children',
    tier: 2,
    prompt:
      'In the class photo, the short children stand in the first row, and the tall children stand in the row after them, so that every face can be seen. Where are the tall children? They are ___ the short children.',
    options: ['behind', 'in front of', 'between', 'below'],
    answer: 'behind',
    place: 'photo',
  },
  {
    emoji: '',
    thing: 'Mr Lee',
    tier: 2,
    prompt:
      "The computer is on Mr Lee's left, and the printer is on his right. Where is Mr Lee? He is ___ the computer and the printer.",
    options: ['between', 'behind', 'above', 'opposite'],
    answer: 'between',
    place: 'printer',
  },
  {
    emoji: '',
    thing: 'coats',
    tier: 2,
    prompt: 'Where are the coats? They are ___ the classroom. They hang in the corridor.',
    options: ['outside', 'inside', 'above', 'between'],
    answer: 'outside',
    place: 'classroom',
  },
  // WHERE2
  {
    emoji: '',
    thing: 'date',
    tier: 3,
    prompt: 'Where is the date? It is ___ the top of the board.',
    options: ['at', 'on', 'in', 'to'],
    answer: 'at',
    place: 'board',
    facts: ['top, middle and bottom'],
  },
  {
    emoji: '',
    thing: 'plant',
    tier: 3,
    prompt: 'Where is the plant? It is ___ the corner of the classroom.',
    options: ['in', 'at', 'on', 'to'],
    answer: 'in',
    place: 'corner',
  },
  {
    emoji: '',
    thing: 'answer',
    tier: 3,
    prompt: 'Where is the answer? It is ___ page 12.',
    options: ['on', 'in', 'at', 'to'],
    answer: 'on',
    place: 'page',
  },
  {
    emoji: '',
    thing: 'title',
    tier: 3,
    prompt: 'Where is the title? It is ___ the middle of the page.',
    options: ['in', 'at', 'on', 'to'],
    answer: 'in',
    place: 'page',
    facts: ['top, middle and bottom'],
  },
  {
    emoji: '',
    thing: 'castle',
    tier: 3,
    prompt: 'Where is the picture of a castle? It is ___ the screen.',
    options: ['on', 'in', 'at', 'to'],
    answer: 'on',
    place: 'screen',
  },
  {
    emoji: '',
    thing: 'homework',
    tier: 3,
    prompt: "Where is today's homework? It is ___ the board, below the date.",
    options: ['on', 'in', 'at', 'to'],
    answer: 'on',
    place: 'board',
  },
  {
    emoji: '',
    thing: 'Room 9',
    tier: 3,
    prompt: 'Where is Room 9? It is ___ the end of the corridor.',
    options: ['at', 'in', 'on', 'to'],
    answer: 'at',
    place: 'end',
  },
  {
    emoji: '',
    thing: 'music room',
    tier: 3,
    prompt: 'Where is the music room? It is ___ the first floor.',
    options: ['on', 'in', 'at', 'to'],
    answer: 'on',
    place: 'first floor',
    facts: ['floors'],
  },
  {
    emoji: '',
    thing: 'exit',
    tier: 3,
    prompt: 'Where is the exit? It is ___ the left, past the library.',
    options: ['on', 'in', 'at', 'by'],
    answer: 'on',
    place: 'left',
  },
  {
    emoji: '🏫',
    thing: 'school',
    tier: 3,
    prompt: 'Where is the school? It is ___ the bottom of the hill.',
    options: ['at', 'in', 'on', 'to'],
    answer: 'at',
    place: 'bottom',
    facts: ['top, middle and bottom'],
  },
  {
    emoji: '',
    thing: 'class photo',
    tier: 3,
    prompt: 'Where is the class photo? It is ___ the newsletter, on page 2.',
    options: ['in', 'on', 'at', 'to'],
    answer: 'in',
    place: 'newsletter',
    facts: ['page'],
  },
  {
    emoji: '🗑️',
    thing: 'bin',
    tier: 3,
    prompt:
      "In our classroom, the teacher's desk stands between the board and the pupils. The bin is just to the left of the teacher's desk. Where is the bin? It is ___ the board.",
    options: ['in front of', 'behind', 'above', 'between'],
    answer: 'in front of',
    place: 'board',
  },
  {
    emoji: '',
    thing: 'clock poster',
    tier: 3,
    prompt:
      'Three posters hang in a row: the map at one end, the poem at the other end, and the clock poster in the only space left. Where is the clock poster? It is ___ the map and the poem.',
    options: ['between', 'behind', 'opposite', 'below'],
    answer: 'between',
    place: 'wall',
  },
  {
    emoji: '',
    thing: 'desk',
    tier: 3,
    prompt:
      "My desk is next to the window. Jo's desk is next to mine, on the other side. Where is my desk? It is ___ the window and Jo's desk.",
    options: ['between', 'behind', 'opposite', 'above'],
    answer: 'between',
    place: 'window',
  },
  {
    emoji: '',
    thing: 'Leo',
    tier: 3,
    prompt:
      'At the canteen, Leo is first in the queue, Ana is second and Tom is third. Where is Leo? He is ___ Ana.',
    options: ['in front of', 'behind', 'next to', 'opposite'],
    answer: 'in front of',
    place: 'queue',
    facts: ['Tom, Ana and Leo'],
  },
  {
    emoji: '',
    thing: 'Tom',
    tier: 3,
    prompt:
      'At the canteen, Leo is first in the queue, Ana is second and Tom is third. Where is Tom? He is ___ Leo.',
    options: ['behind', 'in front of', 'next to', 'opposite'],
    answer: 'behind',
    place: 'queue',
    facts: ['Tom, Ana and Leo'],
  },
  {
    emoji: '',
    thing: 'dictionaries',
    tier: 3,
    prompt:
      'A: Where shall I put the dictionaries?\nB: Back ___ the shelf, please. We keep them up there.',
    options: ['on', 'in', 'under', 'next to'],
    answer: 'on',
    place: 'shelf',
  },
  {
    emoji: '',
    thing: 'coat',
    tier: 3,
    prompt:
      "A: I can't find my coat.\nB: Look ___ your peg. That's where you hang it every morning.",
    options: ['on', 'in', 'under', 'between'],
    answer: 'on',
    place: 'peg',
  },
  {
    emoji: '',
    thing: 'music room',
    tier: 3,
    prompt:
      'The art room is the last room along the corridor. The music room is next to it, and the library is next to the music room. Where is the music room? It is ___ the art room and the library.',
    options: ['between', 'opposite', 'above', 'behind'],
    answer: 'between',
    place: 'corridor',
  },
  {
    emoji: '',
    thing: 'library',
    tier: 3,
    prompt:
      'The canteen is on the ground floor, the science labs are on the first floor, and the library is on the second floor. Where is the library? It is ___ the science labs.',
    options: ['above', 'below', 'between', 'opposite'],
    answer: 'above',
    place: 'floors',
    facts: ['three floors'],
  },
  {
    emoji: '',
    thing: 'canteen',
    tier: 3,
    prompt:
      'The canteen is on the ground floor, the science labs are on the first floor, and the library is on the second floor. Where is the canteen? It is ___ the science labs.',
    options: ['below', 'above', 'between', 'opposite'],
    answer: 'below',
    place: 'floors',
    facts: ['three floors'],
  },
  {
    emoji: '',
    thing: 'Mr Shah',
    tier: 3,
    prompt: "A: Where's Mr Shah?\nB: He's ___ the staff room, marking books.",
    options: ['in', 'on', 'at', 'to'],
    answer: 'in',
    place: 'staff room',
  },
  {
    emoji: '',
    thing: 'stapler',
    tier: 3,
    prompt:
      "A: Where's the stapler?\nB: It's ___ the drawer of my desk. Open it and you'll see it.",
    options: ['in', 'on', 'at', 'under'],
    answer: 'in',
    place: 'drawer',
  },
  {
    emoji: '',
    thing: 'water fountain',
    tier: 3,
    prompt: 'Where is the water fountain? It is ___ the corridor, by the door of the hall.',
    options: ['in', 'on', 'at', 'to'],
    answer: 'in',
    place: 'corridor',
  },
  {
    emoji: '✂️',
    thing: 'scissors',
    tier: 3,
    prompt: 'Where are the scissors? They are ___ the top drawer, with the glue.',
    options: ['in', 'on', 'at', 'to'],
    answer: 'in',
    place: 'drawer',
  },
  {
    emoji: '',
    thing: 'fire exit',
    tier: 3,
    prompt: 'Where is the fire exit? It is ___ the bottom of the stairs.',
    options: ['at', 'in', 'on', 'to'],
    answer: 'at',
    place: 'bottom',
    facts: ['top, middle and bottom'],
  },
  {
    emoji: '',
    thing: 'Mia',
    tier: 3,
    prompt:
      'Look at the seating plan. Row 1 is nearest the board. Ali sits in row 2, and Mia sits in row 3, at the same desk number as Ali. Where is Mia? She is ___ Ali.',
    options: ['behind', 'in front of', 'opposite', 'between'],
    answer: 'behind',
    place: 'seats',
    facts: ['seating plan'],
  },
  {
    emoji: '',
    thing: 'Ali',
    tier: 3,
    prompt:
      'Look at the seating plan. Row 1 is nearest the board. Ali sits in row 2, and Mia sits in row 3, at the same desk number as Ali. Where is Ali? He is ___ Mia.',
    options: ['in front of', 'behind', 'opposite', 'between'],
    answer: 'in front of',
    place: 'seats',
    facts: ['seating plan'],
  },
  {
    emoji: '',
    thing: 'coats',
    tier: 3,
    prompt: 'Where are the coats? They are ___ the pegs in the corridor.',
    options: ['on', 'in', 'at', 'under'],
    answer: 'on',
    place: 'peg',
  },
  {
    emoji: '',
    thing: 'river',
    tier: 3,
    prompt: "Where is the word 'river'? It is ___ the end of the sentence.",
    options: ['at', 'in', 'on', 'to'],
    answer: 'at',
    place: 'end',
  },
  {
    emoji: '🖨️',
    thing: 'printer',
    tier: 3,
    prompt:
      'The computer is on the left of the printer, and the scanner is on its right. Where is the printer? It is ___ the computer and the scanner.',
    options: ['between', 'behind', 'above', 'opposite'],
    answer: 'between',
    place: 'printer',
  },
  // WHERE3
]

export type Mode = 'name' | 'preposition'

/** One question as the page asks it. */
export interface ClassroomQuestion {
  mode: Mode
  /** The picture shown ('' for none), and the word said aloud once a name question is answered. */
  item: { emoji: string; word: string }
  prompt: string
  options: string[]
  answer: string
  tier: 1 | 2 | 3
  group: string
  facts: string[]
}

/** What the student is asked when they see a picture. */
export const NAME_PROMPT = 'Which word matches the picture?'

const pictureQuestion = (i: ClassroomItem): ClassroomQuestion => ({
  mode: 'name',
  item: { emoji: i.emoji, word: i.word },
  prompt: NAME_PROMPT,
  options: [i.word, ...i.distractors],
  answer: i.word,
  tier: 1,
  group: i.topic,
  facts: [i.word, ...(i.facts ?? [])],
})

const sentenceQuestion = (s: SentenceItem): ClassroomQuestion => ({
  mode: 'name',
  item: { emoji: '', word: s.word },
  prompt: s.sentence,
  options: [s.word, ...s.distractors],
  answer: s.word,
  tier: s.tier,
  group: s.topic,
  facts: [s.word, ...(s.facts ?? [])],
})

const whereQuestion = (w: WhereItem): ClassroomQuestion => ({
  mode: 'preposition',
  item: { emoji: w.emoji, word: w.thing },
  prompt: w.prompt,
  options: [...w.options],
  answer: w.answer,
  tier: w.tier,
  // A round holds at most two questions with one answer (src/lib/games/deal-round.ts).
  group: `where: ${w.answer}`,
  facts: [w.thing, w.place, ...(w.facts ?? [])],
})

/** A text's words, lower case, each also read without a plural "s" or "es" or a possessive "'s". */
function wordsAndStems(text: string): Set<string> {
  const out = new Set<string>()
  for (const w of text
    .toLowerCase()
    .replace(/’/g, "'")
    .split(/[^a-z'-]+/)) {
    if (!w) continue
    out.add(w)
    if (w.endsWith("'s")) out.add(w.slice(0, -2))
    if (w.endsWith('es')) out.add(w.slice(0, -2))
    if (w.endsWith('s')) out.add(w.slice(0, -1))
  }
  return out
}

const RAW: ClassroomQuestion[] = [
  ...ITEM_BANK.map(pictureQuestion),
  ...SENTENCE_BANK.map(sentenceQuestion),
  ...WHERE_BANK.map(whereQuestion),
]

/** Every word the bank asks for. */
const WORDS = [...new Set(RAW.filter((x) => x.mode === 'name').map((x) => x.answer.toLowerCase()))]

/**
 * Every question the game can ask, each with its facts: its own word or thing
 * and place, and every word the bank asks for that its prompt uses ("Where is
 * the clock?" uses "clock"), so the two are never dealt in one round.
 */
export const QUESTIONS: ClassroomQuestion[] = RAW.map((x) => {
  if (x.prompt === NAME_PROMPT) return x
  const words = wordsAndStems(x.prompt)
  const text = ` ${x.prompt.toLowerCase().replace(/[^a-z'-]+/g, ' ')} `
  const used = WORDS.filter(
    (w) =>
      w !== x.answer.toLowerCase() && (w.includes(' ') ? text.includes(` ${w} `) : words.has(w)),
  )
  return { ...x, facts: [...new Set([...x.facts.map((f) => f.toLowerCase()), ...used])] }
})

export const BANK: GameBank<ClassroomQuestion> = {
  slug: 'classroom-objects',
  items: QUESTIONS,
  // A picture question is named by its word (every word is pictured once);
  // every other question by its prompt, which is what the student reads.
  key: (x) => (x.prompt === NAME_PROMPT ? x.item.word : x.prompt),
  answer: (x) => x.answer,
  // The page deals the options in a new order each time; they are fixed.
  options: (x) => x.options,
  tag: (x) => (x.mode === 'name' ? 'vocabulary' : 'prepositions'),
  tier: (x) => x.tier,
  group: (x) => x.group,
  facts: (x) => x.facts,
  deepened: '2026-10-24',
}
