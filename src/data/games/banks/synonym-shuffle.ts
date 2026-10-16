import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Synonym Shuffle: a tired word is crossed out in each sentence, and the
 * student picks the most precise of four synonyms for that context.
 *
 * Moved out of src/app/games/synonym-shuffle/page.tsx on 16 October 2026, when
 * every answer gained an explanation (src/lib/games/explanations/types.ts).
 *
 * WHAT WAS WRONG WITH THE QUESTIONS (found writing those explanations, and
 * checking them). The game asks for the best word for the sense of the
 * sentence, so no wrong option may be a fair synonym in that sense. Seven of the
 * 60 questions failed that test:
 *
 *   - "Her cold reply made it clear the friendship was over" offered frosty,
 *     chilly and freezing beside icy, and its note said the others "mean low
 *     temperature". They do not: a frosty or chilly reply is exactly an
 *     unfriendly one, so three options were right. The options are now icy,
 *     fiery, warm and gentle.
 *   - "a good performance that left the audience speechless" offered fine beside
 *     remarkable, and dictionaries give fine as "of high quality" (a fine
 *     performance). Fine is now satisfactory, which means only good enough.
 *   - "The weather was so bad that the match had to be cancelled" and "The milk
 *     had a bad smell" both offered wicked, which learner's dictionaries list
 *     informally as "very bad or unpleasant", so a student could defend it for
 *     foul weather or a foul smell. It is now rancid in the weather question,
 *     which only describes food, and faint in the milk one. Wicked is still the
 *     right answer to "Stealing from the elderly is a truly bad act".
 *   - The child who says "It is not fair" angrily, stamping a foot, was offered
 *     replied, the commonest neutral word for said, and "replied angrily" fits
 *     the sentence. It is now wondered, which cannot be said in anger.
 *   - "he sat by the fire feeling quietly happy" offered thrilled, and "quietly
 *     thrilled" is an ordinary phrase, so it competed with content. It is now
 *     jubilant, the joy of a victory, and nobody in the sentence has won
 *     anything.
 *   - "When she heard she had won, she was happy beyond words and burst into
 *     tears" offered pleased, and "pleased beyond words" says exactly what the
 *     sentence says, so it competed with overjoyed. It is now amused: winning
 *     is not a joke, and amusement does not end in tears.
 *
 * Every other question was read against the same test and kept as it was.
 *
 * One sentence used a spaced hyphen as a dash ("a very nice thing to do - you
 * helped"), which the house style does not; it is now a colon.
 *
 * NOTICED AND NOT CHANGED. The precise word is often the longest of the four,
 * so always choosing the longest scores about 42%, where guessing scores 25%.
 * Mending it means longer wrong words in many questions, which this change did
 * not make.
 *
 * The one-line nuanceNote on each question is gone. The explanation panel says
 * what it said, at more length, for the right answer and for every wrong option,
 * and the cold-reply note was false (above).
 */

export interface SynonymItem {
  /** Sentence with the weak word marked by ⟨…⟩ */
  sentence: string
  /** The tired/overused word to replace */
  weakWord: string
  /** Four options - exactly one is the best precise upgrade for this context */
  options: [string, string, string, string]
  /** The correct, most precise ambitious synonym */
  answer: string
}

export const SYNONYM_BANK: SynonymItem[] = [
  // ── said ───────────────────────────────────────────────────────────────
  {
    sentence: 'Careful not to wake the baby, she ⟨said⟩ the secret into his ear.',
    weakWord: 'said',
    options: ['whispered', 'declared', 'shouted', 'announced'],
    answer: 'whispered',
  },
  {
    sentence: 'Standing before the court, the lawyer ⟨said⟩ that her client was innocent.',
    weakWord: 'said',
    options: ['mumbled', 'declared', 'whispered', 'muttered'],
    answer: 'declared',
  },
  {
    sentence: '"It is not fair!" the child ⟨said⟩ angrily, stamping a foot.',
    weakWord: 'said',
    options: ['protested', 'suggested', 'wondered', 'observed'],
    answer: 'protested',
  },
  {
    sentence: 'Unsure of the answer, he ⟨said⟩ something under his breath.',
    weakWord: 'said',
    options: ['proclaimed', 'muttered', 'bellowed', 'announced'],
    answer: 'muttered',
  },
  {
    sentence: 'She ⟨said⟩ that the holiday had been the best week of her life.',
    weakWord: 'said',
    options: ['enthused', 'grumbled', 'snapped', 'objected'],
    answer: 'enthused',
  },
  {
    sentence: '"You will regret this," the villain ⟨said⟩ with a cold smile.',
    weakWord: 'said',
    options: ['giggled', 'sneered', 'chirped', 'sighed'],
    answer: 'sneered',
  },
  // ── good ───────────────────────────────────────────────────────────────
  {
    sentence: 'The judges agreed it was a ⟨good⟩ performance that left the audience speechless.',
    weakWord: 'good',
    options: ['adequate', 'remarkable', 'acceptable', 'satisfactory'],
    answer: 'remarkable',
  },
  {
    sentence: 'He gave a ⟨good⟩ argument, supported by clear and convincing evidence.',
    weakWord: 'good',
    options: ['compelling', 'pleasant', 'tasty', 'kind'],
    answer: 'compelling',
  },
  {
    sentence: 'The soup was so ⟨good⟩ that everyone asked for the recipe.',
    weakWord: 'good',
    options: ['delicious', 'virtuous', 'skilful', 'generous'],
    answer: 'delicious',
  },
  {
    sentence: 'She is a ⟨good⟩ person who volunteers every weekend without being asked.',
    weakWord: 'good',
    options: ['tasty', 'virtuous', 'fluent', 'rapid'],
    answer: 'virtuous',
  },
  {
    sentence: 'After months of practice, she became a ⟨good⟩ violinist.',
    weakWord: 'good',
    options: ['accomplished', 'delicious', 'honest', 'spacious'],
    answer: 'accomplished',
  },
  // ── big ────────────────────────────────────────────────────────────────
  {
    sentence: 'They explored the ⟨big⟩ cathedral, craning their necks at its towering ceiling.',
    weakWord: 'big',
    options: ['cramped', 'vast', 'plump', 'mild'],
    answer: 'vast',
  },
  {
    sentence: 'Losing the championship was a ⟨big⟩ disappointment for the whole team.',
    weakWord: 'big',
    options: ['spacious', 'crushing', 'roomy', 'bulky'],
    answer: 'crushing',
  },
  {
    sentence: 'The decision to move abroad was a ⟨big⟩ one that changed everything.',
    weakWord: 'big',
    options: ['monumental', 'wide', 'tall', 'fat'],
    answer: 'monumental',
  },
  {
    sentence: 'A ⟨big⟩ wave rose above the boat and crashed onto the deck.',
    weakWord: 'big',
    options: ['plump', 'towering', 'broad', 'chubby'],
    answer: 'towering',
  },
  {
    sentence: 'The factory was a ⟨big⟩ building that stretched the length of the street.',
    weakWord: 'big',
    options: ['enormous', 'crushing', 'serious', 'weighty'],
    answer: 'enormous',
  },
  // ── nice ───────────────────────────────────────────────────────────────
  {
    sentence: 'The hotel staff were so ⟨nice⟩ that guests felt welcome the moment they arrived.',
    weakWord: 'nice',
    options: ['hospitable', 'wealthy', 'punctual', 'silent'],
    answer: 'hospitable',
  },
  {
    sentence: 'It was a ⟨nice⟩ summer afternoon, warm with a gentle breeze.',
    weakWord: 'nice',
    options: ['generous', 'pleasant', 'honest', 'brave'],
    answer: 'pleasant',
  },
  {
    sentence: 'That was a very ⟨nice⟩ thing to do: you helped without expecting thanks.',
    weakWord: 'nice',
    options: ['kind', 'mild', 'tidy', 'rapid'],
    answer: 'kind',
  },
  {
    sentence: 'She wore a ⟨nice⟩ dress that turned heads as she entered the hall.',
    weakWord: 'nice',
    options: ['elegant', 'honest', 'punctual', 'humble'],
    answer: 'elegant',
  },
  {
    sentence: 'Their new neighbour seemed ⟨nice⟩, always smiling and ready to chat.',
    weakWord: 'nice',
    options: ['vast', 'friendly', 'ancient', 'fluent'],
    answer: 'friendly',
  },
  // ── bad ────────────────────────────────────────────────────────────────
  {
    sentence: 'The milk had a ⟨bad⟩ smell, so she poured it down the sink.',
    weakWord: 'bad',
    options: ['rude', 'rancid', 'faint', 'severe'],
    answer: 'rancid',
  },
  {
    sentence: 'Stealing from the elderly is a truly ⟨bad⟩ act.',
    weakWord: 'bad',
    options: ['wicked', 'rancid', 'faint', 'bland'],
    answer: 'wicked',
  },
  {
    sentence: 'He made a ⟨bad⟩ mistake that cost the company thousands of pounds.',
    weakWord: 'bad',
    options: ['costly', 'tasty', 'gentle', 'quiet'],
    answer: 'costly',
  },
  {
    sentence: 'The weather was so ⟨bad⟩ that the match had to be cancelled.',
    weakWord: 'bad',
    options: ['atrocious', 'rancid', 'rude', 'dull'],
    answer: 'atrocious',
  },
  {
    sentence: 'His ⟨bad⟩ behaviour towards the waiter embarrassed everyone at the table.',
    weakWord: 'bad',
    options: ['rude', 'rancid', 'stale', 'damp'],
    answer: 'rude',
  },
  // ── happy ──────────────────────────────────────────────────────────────
  {
    sentence: 'When she heard she had won, she was ⟨happy⟩ beyond words and burst into tears.',
    weakWord: 'happy',
    options: ['content', 'overjoyed', 'amused', 'calm'],
    answer: 'overjoyed',
  },
  {
    sentence: 'After a long day, he sat by the fire feeling quietly ⟨happy⟩.',
    weakWord: 'happy',
    options: ['ecstatic', 'content', 'jubilant', 'frantic'],
    answer: 'content',
  },
  {
    sentence: 'The children were ⟨happy⟩ and bouncing with energy on the trampoline.',
    weakWord: 'happy',
    options: ['gleeful', 'serene', 'tranquil', 'sombre'],
    answer: 'gleeful',
  },
  {
    sentence: 'She gave a ⟨happy⟩ sigh, finally relaxed now the exams were over.',
    weakWord: 'happy',
    options: ['relieved', 'frantic', 'anxious', 'furious'],
    answer: 'relieved',
  },
  {
    sentence: 'He was ⟨happy⟩ to help and grateful to be asked at all.',
    weakWord: 'happy',
    options: ['delighted', 'reluctant', 'gloomy', 'bored'],
    answer: 'delighted',
  },
  // ── sad ────────────────────────────────────────────────────────────────
  {
    sentence: 'After the funeral she felt deeply ⟨sad⟩ and could not stop weeping.',
    weakWord: 'sad',
    options: ['grief-stricken', 'irritated', 'puzzled', 'restless'],
    answer: 'grief-stricken',
  },
  {
    sentence: 'Staring out at the rain, he felt a vague, ⟨sad⟩ longing for home.',
    weakWord: 'sad',
    options: ['furious', 'wistful', 'cheerful', 'panicked'],
    answer: 'wistful',
  },
  {
    sentence: 'The film’s ending was so ⟨sad⟩ that the whole cinema fell silent.',
    weakWord: 'sad',
    options: ['heartbreaking', 'annoying', 'confusing', 'tiring'],
    answer: 'heartbreaking',
  },
  {
    sentence: 'He looked ⟨sad⟩ and downcast after missing the final goal.',
    weakWord: 'sad',
    options: ['dejected', 'thrilled', 'amused', 'curious'],
    answer: 'dejected',
  },
  {
    sentence: 'A ⟨sad⟩ grey light fell over the empty, abandoned town.',
    weakWord: 'sad',
    options: ['melancholy', 'furious', 'jolly', 'frantic'],
    answer: 'melancholy',
  },
  // ── walk ───────────────────────────────────────────────────────────────
  {
    sentence: 'Exhausted, the hikers ⟨walked⟩ slowly up the last steep hill.',
    weakWord: 'walked',
    options: ['trudged', 'sprinted', 'skipped', 'darted'],
    answer: 'trudged',
  },
  {
    sentence: 'The soldiers ⟨walked⟩ in perfect time across the parade ground.',
    weakWord: 'walked',
    options: ['marched', 'wandered', 'stumbled', 'crept'],
    answer: 'marched',
  },
  {
    sentence: 'Proud of her medal, she ⟨walked⟩ confidently onto the stage.',
    weakWord: 'walked',
    options: ['strode', 'limped', 'shuffled', 'staggered'],
    answer: 'strode',
  },
  {
    sentence: 'Not wanting to be seen, the thief ⟨walked⟩ quietly along the dark hallway.',
    weakWord: 'walked',
    options: ['crept', 'galloped', 'marched', 'bounded'],
    answer: 'crept',
  },
  {
    sentence: 'With nowhere to be, they ⟨walked⟩ aimlessly through the old market.',
    weakWord: 'walked',
    options: ['wandered', 'sprinted', 'marched', 'lunged'],
    answer: 'wandered',
  },
  // ── look ───────────────────────────────────────────────────────────────
  {
    sentence: 'The detective ⟨looked⟩ closely at the muddy footprint for any clue.',
    weakWord: 'looked',
    options: ['examined', 'glanced', 'glimpsed', 'peeked'],
    answer: 'examined',
  },
  {
    sentence: 'She only ⟨looked⟩ at the headline before rushing out of the door.',
    weakWord: 'looked',
    options: ['glanced', 'studied', 'examined', 'scrutinised'],
    answer: 'glanced',
  },
  {
    sentence: 'He ⟨looked⟩ angrily at the boy who had broken his window.',
    weakWord: 'looked',
    options: ['glared', 'peeked', 'skimmed', 'browsed'],
    answer: 'glared',
  },
  {
    sentence: 'The tourists ⟨looked⟩ in wonder at the snow-capped mountains.',
    weakWord: 'looked',
    options: ['gazed', 'glared', 'glanced', 'squinted'],
    answer: 'gazed',
  },
  {
    sentence: 'Through the keyhole the child ⟨looked⟩ secretly at the party inside.',
    weakWord: 'looked',
    options: ['peered', 'announced', 'marched', 'shouted'],
    answer: 'peered',
  },
  // ── extra mixed (variety) ──────────────────────────────────────────────
  {
    sentence: 'The detective gave a ⟨small⟩ nod, barely moving his head.',
    weakWord: 'small',
    options: ['slight', 'enormous', 'generous', 'lengthy'],
    answer: 'slight',
  },
  {
    sentence: 'It was a ⟨small⟩ cottage, just big enough for one person.',
    weakWord: 'small',
    options: ['compact', 'vast', 'towering', 'broad'],
    answer: 'compact',
  },
  {
    sentence: 'After the storm the sea became ⟨calm⟩ and perfectly still.',
    weakWord: 'calm',
    options: ['serene', 'frantic', 'turbulent', 'stormy'],
    answer: 'serene',
  },
  {
    sentence: 'He stayed ⟨calm⟩ even as the alarm blared and people panicked.',
    weakWord: 'calm',
    options: ['composed', 'hysterical', 'restless', 'anxious'],
    answer: 'composed',
  },
  {
    sentence: 'The old man told a ⟨funny⟩ story that had everyone roaring with laughter.',
    weakWord: 'funny',
    options: ['hilarious', 'tragic', 'tedious', 'solemn'],
    answer: 'hilarious',
  },
  {
    sentence: 'There was something ⟨funny⟩ about the locked room that did not feel right.',
    weakWord: 'funny',
    options: ['strange', 'amusing', 'comical', 'witty'],
    answer: 'strange',
  },
  {
    sentence: 'She felt ⟨scared⟩ as the floorboards creaked in the empty house.',
    weakWord: 'scared',
    options: ['uneasy', 'cheerful', 'curious', 'bored'],
    answer: 'uneasy',
  },
  {
    sentence: 'When the lion roared, the visitors were ⟨scared⟩ and ran for the exit.',
    weakWord: 'scared',
    options: ['terrified', 'amused', 'relaxed', 'delighted'],
    answer: 'terrified',
  },
  {
    sentence: 'The runner was ⟨tired⟩ and collapsed onto the grass at the finish line.',
    weakWord: 'tired',
    options: ['exhausted', 'refreshed', 'eager', 'lively'],
    answer: 'exhausted',
  },
  {
    sentence: 'After a poor night’s sleep she felt a little ⟨tired⟩ but carried on.',
    weakWord: 'tired',
    options: ['weary', 'energetic', 'thrilled', 'alert'],
    answer: 'weary',
  },
  {
    sentence: 'The teacher gave a ⟨clear⟩ explanation that even beginners understood at once.',
    weakWord: 'clear',
    options: ['lucid', 'murky', 'vague', 'confusing'],
    answer: 'lucid',
  },
  {
    sentence: 'Through the ⟨clear⟩ water you could see every pebble on the riverbed.',
    weakWord: 'clear',
    options: ['transparent', 'cloudy', 'obvious', 'logical'],
    answer: 'transparent',
  },
  {
    sentence: 'It was a ⟨cold⟩ winter morning and ice coated every window.',
    weakWord: 'cold',
    options: ['frosty', 'mild', 'warm', 'tepid'],
    answer: 'frosty',
  },
  {
    sentence: 'Her ⟨cold⟩ reply made it clear the friendship was over.',
    weakWord: 'cold',
    options: ['icy', 'fiery', 'warm', 'gentle'],
    answer: 'icy',
  },
]

export const BANK: GameBank<SynonymItem> = {
  slug: 'synonym-shuffle',
  items: SYNONYM_BANK,
  // No two sentences are the same, and the sentence is what the student sees,
  // with the word between the ⟨ ⟩ marks drawn crossed out.
  key: (q) => q.sentence,
  answer: (q) => q.answer,
  // The page shuffles these per question; the set is fixed.
  options: (q) => q.options,
  // The tired word being upgraded: said, good, big, nice and so on.
  tag: (q) => q.weakWord,
}
