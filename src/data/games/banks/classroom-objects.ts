import type { GameBank } from '@/lib/games/explanations/types'

/**
 * In the Classroom: look at a picture and choose the English word for it, and
 * now and then say where something is (on, in, under or next to).
 *
 * Moved out of src/app/games/classroom-objects/page.tsx on 16 October 2026,
 * when every answer gained an explanation (src/lib/games/explanations/types.ts).
 * The 52 items give 66 questions: a picture question for each item, and a
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
 */

export interface ClassroomItem {
  emoji: string
  word: string
  distractors: [string, string, string]
  /** Optional "Where is the ___?" preposition mini-round */
  prepositionPrompt?: string
  /** Optional words added to that question where its sentence alone would not settle the answer. */
  prepositionClue?: string
}

// Original bank of UK-English classroom & school vocabulary (A1-A2).
export const ITEM_BANK: ClassroomItem[] = [
  {
    emoji: '✏️',
    word: 'pencil',
    distractors: ['pen', 'crayon', 'marker'],
    prepositionPrompt: 'The pencil is on the table.',
  },
  { emoji: '🖊️', word: 'pen', distractors: ['pencil', 'brush', 'ruler'] },
  {
    emoji: '📏',
    word: 'ruler',
    distractors: ['pencil', 'rubber', 'stapler'],
    prepositionPrompt: 'The ruler is in the pencil case.',
  },
  { emoji: '🧽', word: 'sponge', distractors: ['rubber', 'cloth', 'glue'] },
  { emoji: '✂️', word: 'scissors', distractors: ['knife', 'stapler', 'clip'] },
  {
    emoji: '📚',
    word: 'books',
    distractors: ['boxes', 'bricks', 'bags'],
    prepositionPrompt: 'The books are on the shelf.',
  },
  { emoji: '📖', word: 'textbook', distractors: ['envelope', 'folder', 'calculator'] },
  { emoji: '📓', word: 'notebook', distractors: ['poster', 'folder', 'envelope'] },
  { emoji: '📒', word: 'exercise book', distractors: ['calculator', 'wallet', 'poster'] },
  {
    emoji: '🎒',
    word: 'school bag',
    distractors: ['suitcase', 'basket', 'pocket'],
    prepositionPrompt: 'The school bag is under the chair.',
    prepositionClue: 'The chair is above the bag.',
  },
  { emoji: '🖍️', word: 'crayon', distractors: ['chalk', 'pen', 'pin'] },
  { emoji: '🖌️', word: 'paintbrush', distractors: ['pencil', 'feather', 'broom'] },
  { emoji: '🎨', word: 'paints', distractors: ['inks', 'dyes', 'crayons'] },
  { emoji: '📐', word: 'set square', distractors: ['pencil', 'compass', 'protractor'] },
  { emoji: '🧮', word: 'abacus', distractors: ['calculator', 'clock', 'till'] },
  { emoji: '🗒️', word: 'notepad', distractors: ['letter', 'card', 'leaflet'] },
  { emoji: '📝', word: 'worksheet', distractors: ['poster', 'ticket', 'receipt'] },
  { emoji: '📎', word: 'paper clip', distractors: ['drawing pin', 'staple', 'peg'] },
  { emoji: '📌', word: 'drawing pin', distractors: ['needle', 'nail', 'paper clip'] },
  { emoji: '🗂️', word: 'folder', distractors: ['drawer', 'box', 'tray'] },
  { emoji: '📁', word: 'file', distractors: ['bag', 'shelf', 'cupboard'] },
  { emoji: '📋', word: 'clipboard', distractors: ['whiteboard', 'noticeboard', 'tray'] },
  { emoji: '🖇️', word: 'paper clips', distractors: ['stapler', 'hole punch', 'tape'] },
  { emoji: '📅', word: 'calendar', distractors: ['clock', 'envelope', 'ticket'] },
  { emoji: '🧴', word: 'bottle', distractors: ['pencil', 'ruler', 'chair'] },
  { emoji: '🪣', word: 'bucket', distractors: ['bin', 'bowl', 'jug'] },
  {
    emoji: '🗑️',
    word: 'bin',
    distractors: ['bucket', 'box', 'bag'],
    prepositionPrompt: 'The bin is next to the door.',
  },
  {
    emoji: '🪑',
    word: 'chair',
    distractors: ['stool', 'bench', 'sofa'],
    prepositionPrompt: 'The chair is in the classroom.',
  },
  { emoji: '🛗', word: 'lift', distractors: ['stairs', 'window', 'ramp'] },
  {
    emoji: '🚪',
    word: 'door',
    distractors: ['window', 'wall', 'gate'],
    prepositionPrompt: 'The door is next to the window.',
  },
  {
    emoji: '🪟',
    word: 'window',
    distractors: ['door', 'mirror', 'screen'],
    prepositionPrompt: 'The window is next to the board.',
  },
  {
    emoji: '🕰️',
    word: 'clock',
    distractors: ['watch', 'timer', 'bell'],
    prepositionPrompt: 'The clock is on the wall.',
  },
  { emoji: '🔔', word: 'bell', distractors: ['clock', 'horn', 'whistle'] },
  { emoji: '💡', word: 'light', distractors: ['plug', 'torch', 'candle'] },
  {
    emoji: '🖥️',
    word: 'computer',
    distractors: ['camera', 'radio', 'phone'],
    prepositionPrompt: 'The computer is on the desk.',
  },
  { emoji: '⌨️', word: 'keyboard', distractors: ['screen', 'mouse', 'printer'] },
  { emoji: '🖱️', word: 'mouse', distractors: ['keyboard', 'remote', 'plug'] },
  { emoji: '🖨️', word: 'printer', distractors: ['scanner', 'computer', 'speaker'] },
  { emoji: '📽️', word: 'projector', distractors: ['speaker', 'screen', 'torch'] },
  {
    emoji: '🗺️',
    word: 'map',
    distractors: ['poster', 'painting', 'chart'],
    prepositionPrompt: 'The map is on the wall.',
  },
  {
    emoji: '🌍',
    word: 'globe',
    distractors: ['ball', 'map', 'lamp'],
    prepositionPrompt: 'The globe is on the shelf.',
  },
  { emoji: '🔬', word: 'microscope', distractors: ['telescope', 'camera', 'magnet'] },
  { emoji: '🧲', word: 'magnet', distractors: ['battery', 'bell', 'clip'] },
  { emoji: '🔭', word: 'telescope', distractors: ['microscope', 'binoculars', 'lamp'] },
  { emoji: '🧪', word: 'test tube', distractors: ['bottle', 'jar', 'cup'] },
  {
    emoji: '📊',
    word: 'chart',
    distractors: ['map', 'list', 'photo'],
    prepositionPrompt: 'The chart is on the noticeboard.',
  },
  { emoji: '🏫', word: 'school', distractors: ['library', 'office', 'shop'] },
  { emoji: '🎓', word: 'graduation cap', distractors: ['scarf', 'helmet', 'crown'] },
  {
    emoji: '🪧',
    word: 'sign',
    distractors: ['shelf', 'clipboard', 'mirror'],
    prepositionPrompt: 'The sign is on the wall.',
  },
  { emoji: '📞', word: 'telephone', distractors: ['radio', 'speaker', 'remote'] },
  { emoji: '🧹', word: 'broom', distractors: ['mop', 'bucket', 'rake'] },
  { emoji: '🪞', word: 'mirror', distractors: ['window', 'screen', 'clock'] },
]

/** The four words every "Where is it?" question offers. */
export const PREP_OPTIONS = ['on', 'in', 'under', 'next to']

export type Mode = 'name' | 'preposition'

/** One question as the page asks it: its mode, its item, its prompt, its options and its answer. */
export interface ClassroomQuestion {
  mode: Mode
  item: ClassroomItem
  prompt: string
  options: string[]
  answer: string
}

/** What the student is asked when they see a picture. */
export const NAME_PROMPT = 'Which word matches the picture?'

// "The pencil is on the desk." has the verb, the preposition and the place in it.
const WHERE_SENTENCE = /^The .+? (is|are) (on|in|under|next to) (the .+)\.$/i

/**
 * The "Where is it?" question for an item that has a preposition sentence, or
 * null. "The clock is on the wall." becomes "Where is the clock? It is ___ the
 * wall." with the answer "on"; a plural item ("The books are on the shelf.")
 * asks "Where are the books? They are ___ the shelf."
 */
export function whereQuestion(item: ClassroomItem): ClassroomQuestion | null {
  const m = item.prepositionPrompt ? WHERE_SENTENCE.exec(item.prepositionPrompt) : null
  if (!m) return null
  const plural = m[1].toLowerCase() === 'are'
  const clue = item.prepositionClue ? ` ${item.prepositionClue}` : ''
  return {
    mode: 'preposition',
    item,
    prompt: `Where ${plural ? 'are' : 'is'} the ${item.word}? ${plural ? 'They are' : 'It is'} ___ ${m[3]}.${clue}`,
    options: [...PREP_OPTIONS],
    answer: m[2].toLowerCase(),
  }
}

function nameQuestion(item: ClassroomItem): ClassroomQuestion {
  return {
    mode: 'name',
    item,
    prompt: NAME_PROMPT,
    options: [item.word, ...item.distractors],
    answer: item.word,
  }
}

/**
 * Every question the game can ask: a picture question for each item, then a
 * "Where is it?" question for each item that has a sentence for one. The page
 * deals a round from the items (ITEM_BANK) and asks the second kind of an item
 * only where it has one.
 */
export const QUESTIONS: ClassroomQuestion[] = [
  ...ITEM_BANK.map(nameQuestion),
  ...ITEM_BANK.flatMap((item) => whereQuestion(item) ?? []),
]

export const BANK: GameBank<ClassroomQuestion> = {
  slug: 'classroom-objects',
  items: QUESTIONS,
  // A picture question is named by its word (every word is pictured once); a
  // "Where is it?" question by its prompt, which names the thing and the place.
  key: (q) => (q.mode === 'name' ? q.item.word : q.prompt),
  answer: (q) => q.answer,
  // The page deals the four in a new order each time; the four are fixed.
  options: (q) => q.options,
  tag: (q) => (q.mode === 'name' ? 'vocabulary' : 'prepositions'),
  // A picture question and a "Where is it?" question about one thing are
  // never dealt in one round: the second names what the first asks for.
  facts: (q) => [q.item.word],
}
