import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Synonym Shuffle: a tired word is crossed out in each sentence, and the
 * student picks the most precise of four words for that context.
 *
 * Moved out of src/app/games/synonym-shuffle/page.tsx on 16 October 2026, when
 * every answer gained an explanation (src/lib/games/explanations/types.ts).
 *
 * REBUILT FOR DEPTH (24 October 2026). The founder found the games "too
 * obvious and easy"; the audit (.tmp-games-audit/REPORT-ks3.md) found that in
 * 52 of the 60 questions no wrong option was tempting (an argument was offered
 * "tasty" and "kind", a cathedral "plump" and "mild"), and that 54 of the 60
 * sentences spelt out the answer's meaning ("under his breath" for muttered,
 * "angrily" for glared), so a student who knew only roughly what each word
 * meant scored 93 per cent. It now holds 200 questions, built to three rules:
 *
 *   - all four options belong to one subject area (ways of speaking, of
 *     looking, of moving; kinds of size, light, sound, smell), so every wrong
 *     option is a word a student might reach for;
 *   - the sentence never states the answer's meaning: it gives a situation or
 *     an effect ("he shrank into his seat") from which the precise word
 *     follows, and each wrong option is ruled out by something in it, which
 *     that option's explanation names;
 *   - every option fits the sentence's grammar, an article before the
 *     crossed-out word included, since "a" before an option that begins with
 *     a vowel would give the answer away.
 *
 * Tiers. 1 (58): the right word for a plain situation, the options differing
 * in a basic feature such as loudness, speed or size. 2 (76): near neighbours
 * told apart (a glance, a gaze, a stare), and the sense a word with several
 * meanings has in its sentence (a keen wind, a dull bell). 3 (66): shades of
 * meaning and connotation: the approving and the disapproving word for one
 * trait (thrifty or miserly, renowned or notorious, slender or scrawny), the
 * strength of a feeling (peckish or ravenous, irritated or livid), register
 * (the verb for a formal letter) and sarcasm ("Oh, brilliant, another flat
 * tyre").
 *
 * REAL TEXT FIRST. Fifteen sentences are real lines copied exactly from the
 * texts out of UK copyright in src/data/full-texts (A Christmas Carol, Great
 * Expectations, Frankenstein, Jane Eyre, Pride and Prejudice, Animal Farm),
 * each with its `source`, which the page shows under it: a word the writer
 * used is crossed out, and the line fixes its sense or shade ("a single man in
 * possession of a good fortune": sizeable, not lucky). The other sentences
 * are the site's own, because the game needs a sentence that rules out three
 * near neighbours, and few real lines do that for a plain word. The KS3 games
 * use real lines most in Dictionary Skills, where meanings in context take
 * them more naturally.
 *
 * Two questions that ask for the approving and the disapproving word for one
 * trait share a fact (`also`), so they are never dealt together, and a round
 * spreads the subject areas (`field`). No explanation's why, more or tip
 * names another question's answer.
 *
 * THE SIXTY BEFORE. Eight were kept, with new options of one subject area:
 * the speechless audience (remarkable, now beside competent, respectable and
 * promising), the move abroad (now momentous, beside bulky, spacious and
 * cavernous), the milk (now sour, the word for milk that has gone off, beside
 * stale, mouldy and musty), the cancelled match (atrocious, beside dull,
 * changeable and mild), the locked room (now peculiar, beside amusing,
 * hilarious and witty, since strange is now the crossed-out word in two other
 * sentences), the roaring lion (terrified, beside uneasy, apprehensive and
 * suspicious), the collapsing runner (exhausted, beside drowsy, jaded and
 * listless) and the clear water (transparent; cloudy, an opposite, is now
 * cloudless, another sense of clear). The other 52 were removed: each sentence
 * spelt out its answer's meaning, and most offered wrong options from other
 * subject areas; one also became ungrammatical with its own answer ("The
 * detective examined closely at the muddy footprint"). Their tired words come
 * back in new sentences.
 *
 * CHECKED (24 October 2026) by a second reader, question by question:
 *
 *   - the quiz grin offered "content", which cannot stand before a noun ("a
 *     content little grin"), so grammar alone ruled it out: now "contented";
 *   - "Looking back, Tom thought he should have trusted his sister" let
 *     "suspected" stand as well as realised: the sentence is now "Once the
 *     truth came out", which leaves no room for a guess, and it is tier 2, a
 *     near neighbour told apart, like the other verbs of thinking;
 *   - the squirrels' "display" was no sense of keep at all: now "maintain";
 *   - the diesel whiff is tier 2, not 3: its sentence says how faint it is;
 *   - three pairs gave one another away through a shared word the dealer
 *     could not see (creaky stairs and creaked, the drizzle and drizzling,
 *     the suspect and suspected): each pair now shares a fact, so they are
 *     never dealt together;
 *   - sixteen explanations named another question's answer in passing (a
 *     "rumbling" gurgle beside the thunder question, "rescue" beside the
 *     lifeguard, "assumes", "realise", "shiver", "tremble" and others):
 *     reworded.
 */

export interface SynonymItem {
  /** Sentence with the weak word marked by ⟨…⟩ */
  sentence: string
  /** The tired word to replace */
  weakWord: string
  /** Four options, all of one subject area; exactly one fits this context */
  options: [string, string, string, string]
  /** The precise word for this context */
  answer: string
  /**
   * 1, the right word for a plain situation; 2, near neighbours told apart,
   * or the sense a word has in context; 3, shades of meaning and connotation
   * (GameBank.tier).
   */
  tier: 1 | 2 | 3
  /** The subject area the four options share: ways of speaking, of looking, size (GameBank.group). */
  field: string
  /**
   * Where a real sentence comes from, as the study guides cite it, shown under
   * it. Absent where the sentence is the site's own.
   */
  source?: string
  /**
   * What this question shares with another that would give one away: the two
   * questions that ask for the approving and the disapproving word for one
   * trait, or a word one sentence uses and another asks for (GameBank.facts).
   */
  also?: string[]
}

export const SYNONYM_BANK: SynonymItem[] = [
  {
    sentence: 'Across the noisy playground, Mr Hale ⟨said⟩ that the bell had already gone.',
    weakWord: 'said',
    options: ['whispered', 'murmured', 'bellowed', 'mumbled'],
    answer: 'bellowed',
    tier: 1,
    field: 'speaking',
  },
  {
    sentence:
      "'Please let me stay up for the fireworks,' Ruby ⟨said⟩, clasping her hands together.",
    weakWord: 'said',
    options: ['ordered', 'boasted', 'begged', 'joked'],
    answer: 'begged',
    tier: 1,
    field: 'speaking',
  },
  {
    sentence: "'Fine, it was me who ate the last slice,' Tom ⟨said⟩, his ears turning pink.",
    weakWord: 'said',
    options: ['boasted', 'insisted', 'admitted', 'explained'],
    answer: 'admitted',
    tier: 2,
    field: 'speaking',
  },
  {
    sentence:
      "'I scored the winner, and with my weaker foot,' Jake ⟨said⟩ to anyone who would listen.",
    weakWord: 'said',
    options: ['bragged', 'confessed', 'grumbled', 'whispered'],
    answer: 'bragged',
    tier: 2,
    field: 'speaking',
  },
  {
    sentence: "'If you touch that wire, the fence will give you a shock,' the farmer ⟨said⟩.",
    weakWord: 'said',
    options: ['threatened', 'promised', 'suggested', 'warned'],
    answer: 'warned',
    tier: 2,
    field: 'speaking',
  },
  {
    sentence: "'I'll pay you back on Friday, every penny,' Leon ⟨said⟩, shaking his friend's hand.",
    weakWord: 'said',
    options: ['vowed', 'hinted', 'grumbled', 'joked'],
    answer: 'vowed',
    tier: 2,
    field: 'speaking',
  },
  {
    sentence: "'We could build the den behind the shed, where nobody would see it,' Kofi ⟨said⟩.",
    weakWord: 'said',
    options: ['insisted', 'demanded', 'confessed', 'suggested'],
    answer: 'suggested',
    tier: 2,
    field: 'speaking',
  },
  {
    sentence: "'W-w-what was that noise?' Ella ⟨said⟩, pulling the duvet over her head.",
    weakWord: 'said',
    options: ['drawled', 'stammered', 'chanted', 'proclaimed'],
    answer: 'stammered',
    tier: 1,
    field: 'speaking',
  },
  {
    sentence: "'Is it far to the station?' the tourist ⟨said⟩, holding out a crumpled map.",
    weakWord: 'said',
    options: ['replied', 'enquired', 'explained', 'argued'],
    answer: 'enquired',
    tier: 1,
    field: 'speaking',
  },
  {
    sentence: "'Don't worry, the stitches come out next week,' the nurse ⟨told⟩ the boy.",
    weakWord: 'told',
    options: ['reassured', 'cautioned', 'instructed', 'scolded'],
    answer: 'reassured',
    tier: 2,
    field: 'speaking',
  },
  {
    sentence: "'Oh, brilliant, another flat tyre,' Dad ⟨said⟩, kicking the wheel.",
    weakWord: 'said',
    options: ['grumbled', 'enthused', 'chuckled', 'announced'],
    answer: 'grumbled',
    tier: 3,
    field: 'speaking',
  },
  {
    sentence:
      "'Everyone line up by the door,' Miss Begum ⟨said⟩, and the whole class stood at once.",
    weakWord: 'said',
    options: ['suggested', 'instructed', 'recommended', 'pleaded'],
    answer: 'instructed',
    tier: 1,
    field: 'speaking',
  },
  {
    sentence: "'I really am sorry about your bike; I should never have borrowed it,' Sam ⟨said⟩.",
    weakWord: 'said',
    options: ['sympathised', 'protested', 'apologised', 'explained'],
    answer: 'apologised',
    tier: 2,
    field: 'speaking',
  },
  {
    sentence:
      "'You haven't fed the cat, you haven't tidied up, and you're still in your pyjamas,' Mum ⟨said⟩, hands on her hips.",
    weakWord: 'said',
    options: ['praised', 'consoled', 'teased', 'scolded'],
    answer: 'scolded',
    tier: 2,
    field: 'speaking',
  },
  {
    sentence:
      "'Mmm, five more minutes,' Grandad ⟨said⟩ from deep in his armchair, eyes still shut.",
    weakWord: 'said',
    options: ['bellowed', 'murmured', 'declared', 'snapped'],
    answer: 'murmured',
    tier: 1,
    field: 'speaking',
  },
  {
    sentence: 'Lena ⟨looked⟩ at the menu board, unable to read it without her glasses.',
    weakWord: 'looked',
    options: ['glowered', 'gazed', 'glanced', 'squinted'],
    answer: 'squinted',
    tier: 1,
    field: 'looking',
  },
  {
    sentence:
      'Without breaking her stride, Aisha ⟨looked⟩ at her watch and kept running for the bus.',
    weakWord: 'looked',
    options: ['glanced', 'gazed', 'stared', 'goggled'],
    answer: 'glanced',
    tier: 2,
    field: 'looking',
  },
  {
    sentence:
      'For a whole hour the old sailor ⟨looked⟩ out at the horizon, as if waiting for a ship that would never come.',
    weakWord: 'looked',
    options: ['gazed', 'glanced', 'glared', 'peeped'],
    answer: 'gazed',
    tier: 2,
    field: 'looking',
  },
  {
    sentence:
      'Before signing, Grandad ⟨looked at⟩ every line of the contract, his finger moving word by word.',
    weakWord: 'looked at',
    options: ['skimmed', 'studied', 'surveyed', 'glimpsed'],
    answer: 'studied',
    tier: 2,
    field: 'looking',
  },
  {
    sentence:
      'From the top of the castle tower, the queen ⟨looked at⟩ her lands stretching to the distant hills.',
    weakWord: 'looked at',
    options: ['surveyed', 'scrutinised', 'inspected', 'eyed'],
    answer: 'surveyed',
    tier: 2,
    field: 'looking',
  },
  {
    sentence:
      'When the whale burst out of the water beside the boat, the tourists ⟨looked⟩, their cameras forgotten in their hands.',
    weakWord: 'looked',
    options: ['glanced', 'gaped', 'peeped', 'glowered'],
    answer: 'gaped',
    tier: 1,
    field: 'looking',
  },
  {
    sentence:
      "Hidden behind the curtain, Jack ⟨looked⟩ out at the guests arriving for his sister's birthday.",
    weakWord: 'looked',
    options: ['glared', 'squinted', 'gaped', 'peeped'],
    answer: 'peeped',
    tier: 1,
    field: 'looking',
  },
  {
    sentence: 'Mr Okafor gave the joker a ⟨hard⟩ look, and he shrank into his seat.',
    weakWord: 'hard',
    options: ['sideways', 'fleeting', 'steady', 'withering'],
    answer: 'withering',
    tier: 2,
    field: 'looking',
  },
  {
    sentence:
      'The new boy kept ⟨looking at⟩ the last cake on the plate, waiting for someone else to say no.',
    weakWord: 'looking at',
    options: ['eyeing', 'admiring', 'surveying', 'scanning'],
    answer: 'eyeing',
    tier: 2,
    field: 'looking',
  },
  {
    sentence:
      'The guard ⟨looked at⟩ my passport for a long minute, checking the photo against my face as if I might be a spy.',
    weakWord: 'looked at',
    options: ['glimpsed', 'skimmed', 'admired', 'examined'],
    answer: 'examined',
    tier: 2,
    field: 'looking',
  },
  {
    sentence: 'With a heavy rucksack and blisters on both feet, Tom ⟨walked⟩ up the last hill.',
    weakWord: 'walked',
    options: ['skipped', 'strolled', 'pranced', 'trudged'],
    answer: 'trudged',
    tier: 1,
    field: 'moving',
  },
  {
    sentence:
      'On a sunny Sunday afternoon, the couple ⟨walked⟩ along the seafront, stopping for ice creams.',
    weakWord: 'walked',
    options: ['trudged', 'strolled', 'marched', 'scurried'],
    answer: 'strolled',
    tier: 1,
    field: 'moving',
  },
  {
    sentence:
      'Late for her interview, Nadia ⟨walked⟩ across the car park, her bag swinging at her side.',
    weakWord: 'walked',
    options: ['sauntered', 'tiptoed', 'hurried', 'staggered'],
    answer: 'hurried',
    tier: 1,
    field: 'moving',
  },
  {
    sentence: 'Trying not to wake his parents, Ben ⟨walked⟩ down the creaky stairs.',
    weakWord: 'walked',
    options: ['stomped', 'tiptoed', 'strode', 'thundered'],
    answer: 'tiptoed',
    tier: 1,
    field: 'moving',
    also: ['creaking stairs'],
  },
  {
    sentence:
      'After spinning round twenty times, the children ⟨walked⟩ across the grass, giggling and falling over.',
    weakWord: 'walked',
    options: ['strolled', 'marched', 'scampered', 'staggered'],
    answer: 'staggered',
    tier: 1,
    field: 'moving',
  },
  {
    sentence:
      'Having won the race again, Jamal ⟨walked⟩ past the other runners with his chin in the air.',
    weakWord: 'walked',
    options: ['strutted', 'trudged', 'shuffled', 'tiptoed'],
    answer: 'strutted',
    tier: 2,
    field: 'moving',
  },
  {
    sentence: 'Stiff after its long sleep, the old dog ⟨walked⟩ to its bowl.',
    weakWord: 'walked',
    options: ['hobbled', 'bounded', 'scampered', 'pranced'],
    answer: 'hobbled',
    tier: 1,
    field: 'moving',
  },
  {
    sentence: 'The lost tourists ⟨walked⟩ around the old town for hours, with no map and no plan.',
    weakWord: 'walked',
    options: ['marched', 'strode', 'hastened', 'wandered'],
    answer: 'wandered',
    tier: 1,
    field: 'moving',
  },
  {
    sentence:
      'I motioned to him to take up the letter, while I ⟨walked⟩ up and down the room in the extremest agitation.',
    weakWord: 'walked',
    options: ['paced', 'strolled', 'tiptoed', 'limped'],
    answer: 'paced',
    tier: 2,
    field: 'moving',
    source: 'Mary Shelley, Frankenstein, Chapter 7',
  },
  {
    sentence:
      'I ⟨walked⟩ about the isle like a restless spectre, separated from all it loved, and miserable in the separation.',
    weakWord: 'walked',
    options: ['marched', 'roamed', 'strode', 'strolled'],
    answer: 'roamed',
    tier: 2,
    field: 'moving',
    source: 'Mary Shelley, Frankenstein, Chapter 20',
  },
  {
    sentence:
      "When the shop's alarm went off, the thief ⟨ran⟩ out of the back door and into the night.",
    weakWord: 'ran',
    options: ['jogged', 'trotted', 'bolted', 'plodded'],
    answer: 'bolted',
    tier: 1,
    field: 'moving',
  },
  {
    sentence: 'The mouse ⟨ran⟩ across the kitchen floor and vanished under the fridge.',
    weakWord: 'ran',
    options: ['plodded', 'lumbered', 'scurried', 'strode'],
    answer: 'scurried',
    tier: 1,
    field: 'moving',
  },
  {
    sentence: 'Drums beat as the soldiers ⟨walked⟩ through the town in their dress uniforms.',
    weakWord: 'walked',
    options: ['marched', 'ambled', 'sauntered', 'scurried'],
    answer: 'marched',
    tier: 1,
    field: 'moving',
  },
  {
    sentence: 'With seconds left on the clock, the winger ⟨ran⟩ the length of the pitch to score.',
    weakWord: 'ran',
    options: ['sprinted', 'jogged', 'trotted', 'meandered'],
    answer: 'sprinted',
    tier: 2,
    field: 'moving',
  },
  {
    sentence: 'The clerk promised that he would; and Scrooge ⟨walked⟩ out with a growl.',
    weakWord: 'walked',
    options: ['stormed', 'tiptoed', 'skipped', 'strolled'],
    answer: 'stormed',
    tier: 1,
    field: 'moving',
    source: 'Charles Dickens, A Christmas Carol, Stave 1',
  },
  {
    sentence: 'The ⟨big⟩ suitcase would not fit in the overhead locker, so she had to check it in.',
    weakWord: 'big',
    options: ['sprawling', 'towering', 'vast', 'bulky'],
    answer: 'bulky',
    tier: 1,
    field: 'size',
  },
  {
    sentence: 'Our new flat is ⟨big⟩ enough for a dining table, a sofa and a piano.',
    weakWord: 'big',
    options: ['bulky', 'hefty', 'towering', 'spacious'],
    answer: 'spacious',
    tier: 1,
    field: 'size',
  },
  {
    sentence: 'The ⟨big⟩ city has swallowed the farms and villages that once stood around it.',
    weakWord: 'big',
    options: ['towering', 'cavernous', 'bulky', 'sprawling'],
    answer: 'sprawling',
    tier: 2,
    field: 'size',
  },
  {
    sentence: 'Six of us shared a ⟨small⟩ tent, with elbows in our faces all night.',
    weakWord: 'small',
    options: ['compact', 'miniature', 'dainty', 'cramped'],
    answer: 'cramped',
    tier: 3,
    field: 'size',
    also: ['small: cramped or compact'],
  },
  {
    sentence: 'The ⟨small⟩ camera folds flat and slips easily into a pocket.',
    weakWord: 'small',
    options: ['cramped', 'meagre', 'compact', 'poky'],
    answer: 'compact',
    tier: 3,
    field: 'size',
    also: ['small: cramped or compact'],
  },
  {
    sentence: 'The model railway has ⟨small⟩ trees, houses and people, all made by hand.',
    weakWord: 'small',
    options: ['meagre', 'cramped', 'miniature', 'slight'],
    answer: 'miniature',
    tier: 1,
    field: 'size',
  },
  {
    sentence: 'The decision to move abroad was a ⟨big⟩ one that changed everything.',
    weakWord: 'big',
    options: ['momentous', 'bulky', 'spacious', 'cavernous'],
    answer: 'momentous',
    tier: 1,
    field: 'size',
  },
  {
    sentence:
      'Having beaten everyone at the quiz, Oscar sat back with a ⟨happy⟩ little grin that annoyed the whole table.',
    weakWord: 'happy',
    options: ['contented', 'cheerful', 'grateful', 'smug'],
    answer: 'smug',
    tier: 3,
    field: 'feeling happy',
  },
  {
    sentence:
      "The crowd was ⟨happy⟩, singing and dancing in the streets after the town's first-ever cup win.",
    weakWord: 'happy',
    options: ['contented', 'jubilant', 'serene', 'smug'],
    answer: 'jubilant',
    tier: 2,
    field: 'feeling happy',
  },
  {
    sentence:
      'Curled up with a book while the rain fell outside, Ivy felt ⟨happy⟩ and wanted nothing more.',
    weakWord: 'happy',
    options: ['elated', 'content', 'relieved', 'grateful'],
    answer: 'content',
    tier: 1,
    field: 'feeling happy',
  },
  {
    sentence: 'The twins were ⟨happy⟩ as they planned the trick they would play on their uncle.',
    weakWord: 'happy',
    options: ['gleeful', 'content', 'serene', 'grateful'],
    answer: 'gleeful',
    tier: 2,
    field: 'feeling happy',
  },
  {
    sentence:
      'When the last exam ended, Ella gave a long, ⟨happy⟩ sigh and let her shoulders drop.',
    weakWord: 'happy',
    options: ['smug', 'elated', 'relieved', 'grateful'],
    answer: 'relieved',
    tier: 2,
    field: 'feeling happy',
  },
  {
    sentence: 'Looking at old photos of the house she grew up in, Gran gave a ⟨sad⟩ smile.',
    weakWord: 'sad',
    options: ['bitter', 'gloomy', 'resentful', 'wistful'],
    answer: 'wistful',
    tier: 2,
    field: 'feeling sad',
  },
  {
    sentence: 'After the argument, Raj sat in a ⟨sad⟩ silence, refusing to answer anyone.',
    weakWord: 'sad',
    options: ['sullen', 'wistful', 'sombre', 'mournful'],
    answer: 'sullen',
    tier: 3,
    field: 'feeling sad',
  },
  {
    sentence:
      'Three weeks into the camp, Leo was ⟨sad⟩ and kept asking when he could see his own bedroom again.',
    weakWord: 'sad',
    options: ['remorseful', 'homesick', 'heartbroken', 'grief-stricken'],
    answer: 'homesick',
    tier: 2,
    field: 'feeling sad',
  },
  {
    sentence:
      "Having broken her grandmother's favourite vase and hidden the pieces, Kezia felt ⟨sad⟩ and could not sleep.",
    weakWord: 'sad',
    options: ['wistful', 'homesick', 'remorseful', 'melancholic'],
    answer: 'remorseful',
    tier: 2,
    field: 'feeling sad',
  },
  {
    sentence:
      'Accused of cheating when she had worked for weeks, Jo was ⟨angry⟩ and demanded an apology.',
    weakWord: 'angry',
    options: ['irritable', 'grumpy', 'exasperated', 'indignant'],
    answer: 'indignant',
    tier: 3,
    field: 'feeling angry',
  },
  {
    sentence:
      'The little boy was ⟨angry⟩ about not getting a second biscuit and refused to speak to anyone.',
    weakWord: 'angry',
    options: ['sulky', 'livid', 'hysterical', 'frantic'],
    answer: 'sulky',
    tier: 2,
    field: 'feeling angry',
  },
  {
    sentence: 'The buzzing fly made Dad more ⟨angry⟩ with every lap it made of the kitchen.',
    weakWord: 'angry',
    options: ['outraged', 'livid', 'indignant', 'irritated'],
    answer: 'irritated',
    tier: 3,
    field: 'feeling angry',
  },
  {
    sentence:
      'Finding muddy boots on the clean carpet for the third time that week, Mum was ⟨annoyed⟩.',
    weakWord: 'annoyed',
    options: ['exasperated', 'indignant', 'outraged', 'sulky'],
    answer: 'exasperated',
    tier: 2,
    field: 'feeling angry',
  },
  {
    sentence:
      'The night before her first day at a new school, Mia felt ⟨scared⟩ about who she would sit with.',
    weakWord: 'scared',
    options: ['petrified', 'horrified', 'panic-stricken', 'apprehensive'],
    answer: 'apprehensive',
    tier: 3,
    field: 'feeling afraid',
  },
  {
    sentence:
      'The deer was ⟨scared⟩, lifting its head at every snap of a twig as the walkers passed.',
    weakWord: 'scared',
    options: ['wary', 'petrified', 'hysterical', 'horrified'],
    answer: 'wary',
    tier: 2,
    field: 'feeling afraid',
  },
  {
    sentence: 'When the bull charged, Ewan was too ⟨scared⟩ to move a muscle.',
    weakWord: 'scared',
    options: ['petrified', 'uneasy', 'wary', 'apprehensive'],
    answer: 'petrified',
    tier: 1,
    field: 'feeling afraid',
  },
  {
    sentence: 'When the lion roared, the visitors were ⟨scared⟩ and ran for the exit.',
    weakWord: 'scared',
    options: ['uneasy', 'apprehensive', 'suspicious', 'terrified'],
    answer: 'terrified',
    tier: 1,
    field: 'feeling afraid',
  },
  {
    sentence: 'The runner was ⟨tired⟩ and collapsed onto the grass at the finish line.',
    weakWord: 'tired',
    options: ['exhausted', 'drowsy', 'jaded', 'listless'],
    answer: 'exhausted',
    tier: 2,
    field: 'feeling tired',
  },
  {
    sentence:
      'Gran is ⟨careful⟩ with money: she mends her own socks, yet still gives generously to charity.',
    weakWord: 'careful',
    options: ['stingy', 'thrifty', 'extravagant', 'greedy'],
    answer: 'thrifty',
    tier: 3,
    field: 'character: money',
    also: ['careful with money'],
  },
  {
    sentence: 'Mr Grimble is so ⟨mean⟩ that he once charged his own son for a cup of tea.',
    weakWord: 'mean',
    options: ['thrifty', 'economical', 'miserly', 'spiteful'],
    answer: 'miserly',
    tier: 3,
    field: 'character: money',
    also: ['careful with money'],
  },
  {
    sentence: 'Kai is so ⟨proud⟩ that he checks his hair in every shop window he passes.',
    weakWord: 'proud',
    options: ['vain', 'dignified', 'honoured', 'confident'],
    answer: 'vain',
    tier: 3,
    field: 'character: pride',
    also: ['proud'],
  },
  {
    sentence: 'Even in her old coat, Mrs Adebayo walked into the courtroom ⟨proud⟩ and calm.',
    weakWord: 'proud',
    options: ['dignified', 'vain', 'conceited', 'arrogant'],
    answer: 'dignified',
    tier: 3,
    field: 'character: pride',
    also: ['proud'],
  },
  {
    sentence:
      'Cycling down the steepest hill in town with no brakes was ⟨brave⟩, and it ended in hospital.',
    weakWord: 'brave',
    options: ['heroic', 'courageous', 'reckless', 'valiant'],
    answer: 'reckless',
    tier: 3,
    field: 'character: courage',
    also: ['brave'],
  },
  {
    sentence:
      'The firefighter was ⟨brave⟩, going back into the smoke three times to carry people out.',
    weakWord: 'brave',
    options: ['reckless', 'foolhardy', 'rash', 'heroic'],
    answer: 'heroic',
    tier: 3,
    field: 'character: courage',
    also: ['brave'],
  },
  {
    sentence: 'Our ⟨curious⟩ neighbour reads our post when it is left on the doormat.',
    weakWord: 'curious',
    options: ['inquiring', 'attentive', 'prying', 'thoughtful'],
    answer: 'prying',
    tier: 3,
    field: 'character: curiosity',
    also: ['curious'],
  },
  {
    sentence:
      'Always ⟨curious⟩ in science lessons, Femi asked so many questions that his teacher lent him her own books.',
    weakWord: 'curious',
    options: ['nosy', 'inquisitive', 'interfering', 'gossipy'],
    answer: 'inquisitive',
    tier: 3,
    field: 'character: curiosity',
    also: ['curious'],
  },
  {
    sentence:
      'Grandpa is ⟨firm⟩ about it: he refuses to try the new computer, though it would save him hours.',
    weakWord: 'firm',
    options: ['resolute', 'steadfast', 'obstinate', 'principled'],
    answer: 'obstinate',
    tier: 3,
    field: 'character: firmness',
    also: ['firm'],
  },
  {
    sentence:
      'Despite four failed attempts, Grace stayed ⟨firm⟩ and passed her driving test at the fifth.',
    weakWord: 'firm',
    options: ['obstinate', 'resolute', 'inflexible', 'pig-headed'],
    answer: 'resolute',
    tier: 3,
    field: 'character: firmness',
    also: ['firm'],
  },
  {
    sentence: 'The ⟨famous⟩ pirate Blackbeard frightened sailors from Virginia to the Caribbean.',
    weakWord: 'famous',
    options: ['renowned', 'notorious', 'celebrated', 'acclaimed'],
    answer: 'notorious',
    tier: 3,
    field: 'reputation',
    also: ['famous'],
  },
  {
    sentence:
      'Edinburgh is ⟨famous⟩ for its summer festival, which draws performers from all over the world.',
    weakWord: 'famous',
    options: ['notorious', 'infamous', 'renowned', 'feared'],
    answer: 'renowned',
    tier: 3,
    field: 'reputation',
    also: ['famous'],
  },
  {
    sentence: 'The shop sold ⟨cheap⟩ souvenirs that broke before we even got them home.',
    weakWord: 'cheap',
    options: ['economical', 'affordable', 'shoddy', 'reasonable'],
    answer: 'shoddy',
    tier: 3,
    field: 'value for money',
    also: ['cheap'],
  },
  {
    sentence: 'The museum café was ⟨cheap⟩, so all four of us had lunch for under ten pounds.',
    weakWord: 'cheap',
    options: ['shoddy', 'tacky', 'affordable', 'second-rate'],
    answer: 'affordable',
    tier: 3,
    field: 'value for money',
    also: ['cheap'],
  },
  {
    sentence: 'Sixty-year-old Dot stays ⟨young⟩ by swimming in the sea every morning.',
    weakWord: 'young',
    options: ['youthful', 'childish', 'immature', 'juvenile'],
    answer: 'youthful',
    tier: 3,
    field: 'character: youth',
    also: ['young'],
  },
  {
    sentence: "Laughing at the supply teacher's name was ⟨young⟩ behaviour for pupils of fifteen.",
    weakWord: 'young',
    options: ['youthful', 'childish', 'sprightly', 'innocent'],
    answer: 'childish',
    tier: 3,
    field: 'character: youth',
    also: ['young'],
  },
  {
    sentence: 'Amina is ⟨quiet⟩ in big groups but chatty with her close friends.',
    weakWord: 'quiet',
    options: ['sullen', 'reserved', 'mute', 'haughty'],
    answer: 'reserved',
    tier: 3,
    field: 'character: manner',
  },
  {
    sentence:
      'Max was so ⟨honest⟩ that he told Priya her essay was boring, right in front of the class.',
    weakWord: 'honest',
    options: ['tactful', 'discreet', 'blunt', 'gentle'],
    answer: 'blunt',
    tier: 3,
    field: 'character: manner',
  },
  {
    sentence: 'The candle ⟨shone⟩ in the draught from the open window, almost going out.',
    weakWord: 'shone',
    options: ['glared', 'dazzled', 'glistened', 'flickered'],
    answer: 'flickered',
    tier: 1,
    field: 'light',
  },
  {
    sentence: 'On the frosty lawn, a million tiny crystals ⟨shone⟩ in the morning sun.',
    weakWord: 'shone',
    options: ['glittered', 'glowed', 'flickered', 'smouldered'],
    answer: 'glittered',
    tier: 2,
    field: 'light',
  },
  {
    sentence: 'The embers ⟨shone⟩ red long after the last flames had died.',
    weakWord: 'shone',
    options: ['glittered', 'glowed', 'twinkled', 'flashed'],
    answer: 'glowed',
    tier: 1,
    field: 'light',
  },
  {
    sentence: 'Far out at sea, the lighthouse ⟨shone⟩ every ten seconds.',
    weakWord: 'shone',
    options: ['glowed', 'shimmered', 'flashed', 'smouldered'],
    answer: 'flashed',
    tier: 1,
    field: 'light',
  },
  {
    sentence: 'The moonlight ⟨shone⟩ on the surface of the lake as the breeze rippled across it.',
    weakWord: 'shone',
    options: ['flashed', 'shimmered', 'blazed', 'glared'],
    answer: 'shimmered',
    tier: 2,
    field: 'light',
  },
  {
    sentence:
      "Behind his glasses, the old professor's eyes ⟨shone⟩ with mischief as he revealed the answer.",
    weakWord: 'shone',
    options: ['glared', 'blazed', 'twinkled', 'smouldered'],
    answer: 'twinkled',
    tier: 2,
    field: 'light',
  },
  {
    sentence: 'The midday sun ⟨shone⟩ off the white sand until we had to shield our eyes.',
    weakWord: 'shone',
    options: ['glared', 'glimmered', 'glowed', 'twinkled'],
    answer: 'glared',
    tier: 2,
    field: 'light',
  },
  {
    sentence: 'The old stairs ⟨made a noise⟩ under every step, giving away our midnight snack.',
    weakWord: 'made a noise',
    options: ['rustled', 'chimed', 'gurgled', 'creaked'],
    answer: 'creaked',
    tier: 1,
    field: 'sound',
    also: ['creaking stairs'],
  },
  {
    sentence: 'Dry leaves ⟨made a noise⟩ under our boots as we kicked through the park.',
    weakWord: 'made a noise',
    options: ['clanged', 'crunched', 'whistled', 'chimed'],
    answer: 'crunched',
    tier: 1,
    field: 'sound',
  },
  {
    sentence: 'Light rain ⟨made a noise⟩ on the roof of the tent all night.',
    weakWord: 'made a noise',
    options: ['thundered', 'clanged', 'pattered', 'roared'],
    answer: 'pattered',
    tier: 1,
    field: 'sound',
  },
  {
    sentence: 'When Ollie dropped the tray, cutlery ⟨made a noise⟩ all over the canteen floor.',
    weakWord: 'made a noise',
    options: ['clattered', 'rustled', 'hummed', 'squelched'],
    answer: 'clattered',
    tier: 1,
    field: 'sound',
  },
  {
    sentence: 'Somewhere in the walls, the old pipes ⟨made a noise⟩ like a hungry stomach.',
    weakWord: 'made a noise',
    options: ['chimed', 'tinkled', 'crackled', 'gurgled'],
    answer: 'gurgled',
    tier: 2,
    field: 'sound',
  },
  {
    sentence: 'The logs on the fire ⟨made a noise⟩ and spat sparks onto the rug.',
    weakWord: 'made a noise',
    options: ['rustled', 'tinkled', 'crackled', 'squeaked'],
    answer: 'crackled',
    tier: 1,
    field: 'sound',
  },
  {
    sentence: 'Far away over the hills, thunder ⟨made a noise⟩ like a lorry crossing a bridge.',
    weakWord: 'made a noise',
    options: ['rumbled', 'tinkled', 'crackled', 'squeaked'],
    answer: 'rumbled',
    tier: 1,
    field: 'sound',
  },
  {
    sentence: 'The snake ⟨made a noise⟩ and raised its head when the keeper opened the tank.',
    weakWord: 'made a noise',
    options: ['growled', 'hissed', 'snorted', 'squealed'],
    answer: 'hissed',
    tier: 1,
    field: 'sound',
  },
  {
    sentence:
      'We set off on a ⟨cold⟩, bright winter morning, our breath puffing like smoke, and loved every minute.',
    weakWord: 'cold',
    options: ['bleak', 'crisp', 'raw', 'bitter'],
    answer: 'crisp',
    tier: 3,
    field: 'weather',
    also: ['cold weather'],
  },
  {
    sentence: 'A ⟨cold⟩, grey drizzle seeped through our coats and seemed to reach our bones.',
    weakWord: 'cold',
    options: ['raw', 'crisp', 'brisk', 'fresh'],
    answer: 'raw',
    tier: 3,
    field: 'weather',
    also: ['cold weather', 'drizzle'],
  },
  {
    sentence:
      "With no air conditioning, the packed train was ⟨hot⟩ and everyone's shirts stuck to their backs.",
    weakWord: 'hot',
    options: ['balmy', 'mild', 'lukewarm', 'stifling'],
    answer: 'stifling',
    tier: 2,
    field: 'weather',
  },
  {
    sentence:
      'We ate dinner outside on a ⟨warm⟩ evening, with a light breeze and the scent of jasmine in the air.',
    weakWord: 'warm',
    options: ['sweltering', 'scorching', 'stuffy', 'balmy'],
    answer: 'balmy',
    tier: 3,
    field: 'weather',
  },
  {
    sentence:
      'With every window shut, the classroom was so ⟨hot⟩ that half the class kept yawning.',
    weakWord: 'hot',
    options: ['scorching', 'stuffy', 'balmy', 'tropical'],
    answer: 'stuffy',
    tier: 2,
    field: 'weather',
  },
  {
    sentence:
      'After the storm, the football pitch was so ⟨wet⟩ that the ball stopped dead in the puddles.',
    weakWord: 'wet',
    options: ['sodden', 'damp', 'moist', 'clammy'],
    answer: 'sodden',
    tier: 2,
    field: 'weather',
  },
  {
    sentence: "Mum's lemon cake was ⟨wet⟩ in the middle, just as a good sponge should be.",
    weakWord: 'wet',
    options: ['moist', 'soggy', 'damp', 'clammy'],
    answer: 'moist',
    tier: 3,
    field: 'weather',
  },
  {
    sentence: "Before his speech, Dev's hands were ⟨wet⟩ with nerves.",
    weakWord: 'wet',
    options: ['soaked', 'waterlogged', 'clammy', 'dewy'],
    answer: 'clammy',
    tier: 2,
    field: 'weather',
  },
  {
    sentence: 'The ⟨smell⟩ of fresh coffee drifted up the stairs and woke the whole house.',
    weakWord: 'smell',
    options: ['aroma', 'stench', 'reek', 'odour'],
    answer: 'aroma',
    tier: 3,
    field: 'smell',
  },
  {
    sentence: 'The ⟨smell⟩ from the overflowing bins made the whole street hold its breath.',
    weakWord: 'smell',
    options: ['aroma', 'fragrance', 'stench', 'whiff'],
    answer: 'stench',
    tier: 3,
    field: 'smell',
  },
  {
    sentence:
      'As the bus pulled away, a ⟨smell⟩ of diesel, so faint I barely noticed it, drifted in and was gone.',
    weakWord: 'smell',
    options: ['stench', 'perfume', 'fragrance', 'whiff'],
    answer: 'whiff',
    tier: 2,
    field: 'smell',
  },
  {
    sentence: 'After a whole day of hiking, the boys ⟨ate⟩ their pizzas in minutes.',
    weakWord: 'ate',
    options: ['devoured', 'nibbled', 'savoured', 'tasted'],
    answer: 'devoured',
    tier: 1,
    field: 'eating',
  },
  {
    sentence: 'Feeling sick with nerves, Asha ⟨ate⟩ a corner of her toast and left the rest.',
    weakWord: 'ate',
    options: ['devoured', 'gobbled', 'nibbled', 'savoured'],
    answer: 'nibbled',
    tier: 1,
    field: 'eating',
  },
  {
    sentence:
      'Eyes closed, Grandpa ⟨ate⟩ the first strawberry of summer, as if it might be his last.',
    weakWord: 'ate',
    options: ['gobbled', 'savoured', 'munched', 'gulped'],
    answer: 'savoured',
    tier: 2,
    field: 'eating',
  },
  {
    sentence: 'After weeks of saving her pocket money, Hana finally ⟨got⟩ the bike she wanted.',
    weakWord: 'got',
    options: ['won', 'bought', 'borrowed', 'inherited'],
    answer: 'bought',
    tier: 1,
    field: 'getting and giving',
  },
  {
    sentence: 'Our class ⟨got⟩ a certificate for the best attendance in the school.',
    weakWord: 'got',
    options: ['borrowed', 'caught', 'fetched', 'received'],
    answer: 'received',
    tier: 1,
    field: 'getting and giving',
  },
  {
    sentence: 'On the walk home in the downpour, Ella ⟨got⟩ a terrible cold.',
    weakWord: 'got',
    options: ['earned', 'received', 'caught', 'won'],
    answer: 'caught',
    tier: 1,
    field: 'getting and giving',
  },
  {
    sentence: 'It took three readings before I ⟨got⟩ the joke.',
    weakWord: 'got',
    options: ['received', 'grasped', 'fetched', 'earned'],
    answer: 'grasped',
    tier: 2,
    field: 'getting and giving',
  },
  {
    sentence: 'The seagull ⟨took⟩ the chip right out of my hand and flew off with it.',
    weakWord: 'took',
    options: ['accepted', 'snatched', 'borrowed', 'collected'],
    answer: 'snatched',
    tier: 1,
    field: 'getting and giving',
  },
  {
    sentence: 'The head teacher ⟨gave⟩ the cup to the winning team at the end-of-year assembly.',
    weakWord: 'gave',
    options: ['donated', 'presented', 'bequeathed', 'surrendered'],
    answer: 'presented',
    tier: 2,
    field: 'getting and giving',
  },
  {
    sentence: 'Every Friday the bakery ⟨gives⟩ its unsold bread to the night shelter.',
    weakWord: 'gives',
    options: ['lends', 'awards', 'presents', 'donates'],
    answer: 'donates',
    tier: 2,
    field: 'getting and giving',
  },
  {
    sentence: 'Can you ⟨give⟩ your calculator to me until the end of the lesson?',
    weakWord: 'give',
    options: ['donate', 'lend', 'award', 'present'],
    answer: 'lend',
    tier: 1,
    field: 'getting and giving',
  },
  {
    sentence:
      'When the football hit it, the greenhouse window ⟨broke⟩, and we spent an hour sweeping up glass.',
    weakWord: 'broke',
    options: ['snapped', 'dented', 'shattered', 'crumpled'],
    answer: 'shattered',
    tier: 1,
    field: 'breaking',
  },
  {
    sentence: 'Left out in the rain, the old biscuits ⟨broke⟩ between our fingers.',
    weakWord: 'broke',
    options: ['crumbled', 'shattered', 'snapped', 'burst'],
    answer: 'crumbled',
    tier: 1,
    field: 'breaking',
  },
  {
    sentence:
      'The branch ⟨broke⟩ with a crack like a pistol shot, and the swing landed in the grass.',
    weakWord: 'broke',
    options: ['snapped', 'crumbled', 'shattered', 'dented'],
    answer: 'snapped',
    tier: 2,
    field: 'breaking',
  },
  {
    sentence:
      'Without checking, Liam ⟨thought⟩ the shop would be open on a Sunday, and wasted the trip.',
    weakWord: 'thought',
    options: ['assumed', 'remembered', 'doubted', 'proved'],
    answer: 'assumed',
    tier: 2,
    field: 'thinking',
  },
  {
    sentence: 'The detective ⟨thought⟩ the butler had lied, but she could not yet prove it.',
    weakWord: 'thought',
    options: ['doubted', 'recalled', 'established', 'suspected'],
    answer: 'suspected',
    tier: 2,
    field: 'thinking',
    also: ['suspect'],
  },
  {
    sentence: 'Once the truth came out, Tom ⟨thought⟩ that he should have trusted his sister.',
    weakWord: 'thought',
    options: ['suspected', 'realised', 'assumed', 'doubted'],
    answer: 'realised',
    tier: 2,
    field: 'thinking',
  },
  {
    sentence: 'Remembering the joke from the night before, Grandpa ⟨laughed⟩ into his newspaper.',
    weakWord: 'laughed',
    options: ['cackled', 'chuckled', 'guffawed', 'shrieked'],
    answer: 'chuckled',
    tier: 2,
    field: 'laughing and crying',
  },
  {
    sentence:
      'When Nikhil tripped on the stage steps, two boys at the back ⟨laughed⟩ behind their hands.',
    weakWord: 'laughed',
    options: ['chuckled', 'guffawed', 'sniggered', 'chortled'],
    answer: 'sniggered',
    tier: 3,
    field: 'laughing and crying',
  },
  {
    sentence: 'The witch in the pantomime ⟨laughed⟩ as she stirred her bubbling pot.',
    weakWord: 'laughed',
    options: ['cackled', 'giggled', 'chuckled', 'tittered'],
    answer: 'cackled',
    tier: 1,
    field: 'laughing and crying',
  },
  {
    sentence:
      "'I told you I'd win,' said Zara, with a ⟨smile⟩ that made her brother want to scream.",
    weakWord: 'smile',
    options: ['smirk', 'beam', 'simper', 'grimace'],
    answer: 'smirk',
    tier: 3,
    field: 'laughing and crying',
    also: ['smiles'],
  },
  {
    sentence:
      'When the baby took her first steps, Dad ⟨smiled⟩ so widely that his face could barely contain it.',
    weakWord: 'smiled',
    options: ['beamed', 'smirked', 'sneered', 'simpered'],
    answer: 'beamed',
    tier: 2,
    field: 'laughing and crying',
    also: ['smiles'],
  },
  {
    sentence:
      'Lost in the supermarket, the toddler ⟨cried⟩ so loudly that shoppers came running from every aisle.',
    weakWord: 'cried',
    options: ['whimpered', 'wailed', 'sniffled', 'sighed'],
    answer: 'wailed',
    tier: 1,
    field: 'laughing and crying',
  },
  {
    sentence: 'Shut in the kitchen for the night, the puppy ⟨cried⟩ at the door.',
    weakWord: 'cried',
    options: ['whimpered', 'sobbed', 'wept', 'blubbered'],
    answer: 'whimpered',
    tier: 2,
    field: 'laughing and crying',
  },
  {
    sentence: 'The judges agreed it was a ⟨good⟩ performance that left the audience speechless.',
    weakWord: 'good',
    options: ['competent', 'remarkable', 'respectable', 'promising'],
    answer: 'remarkable',
    tier: 3,
    field: 'praise and blame',
  },
  {
    sentence: "The new café's coffee is ⟨good⟩, but it's nothing special.",
    weakWord: 'good',
    options: ['outstanding', 'exceptional', 'superb', 'decent'],
    answer: 'decent',
    tier: 3,
    field: 'praise and blame',
  },
  {
    sentence: 'Stealing from people too frail to defend themselves is a truly ⟨bad⟩ act.',
    weakWord: 'bad',
    options: ['naughty', 'wicked', 'mischievous', 'faulty'],
    answer: 'wicked',
    tier: 2,
    field: 'praise and blame',
  },
  {
    sentence: 'The weather was so ⟨bad⟩ that the match had to be cancelled.',
    weakWord: 'bad',
    options: ['dull', 'changeable', 'atrocious', 'mild'],
    answer: 'atrocious',
    tier: 1,
    field: 'praise and blame',
  },
  {
    sentence: 'There was something ⟨funny⟩ about the locked room that did not feel right.',
    weakWord: 'funny',
    options: ['amusing', 'hilarious', 'witty', 'peculiar'],
    answer: 'peculiar',
    tier: 2,
    field: 'word senses',
  },
  {
    sentence: 'Through the ⟨clear⟩ water you could see every pebble on the riverbed.',
    weakWord: 'clear',
    options: ['cloudless', 'obvious', 'logical', 'transparent'],
    answer: 'transparent',
    tier: 2,
    field: 'word senses',
    also: ['clear'],
  },
  {
    sentence: "The teacher's explanation was ⟨clear⟩: even beginners understood it at once.",
    weakWord: 'clear',
    options: ['audible', 'lucid', 'cloudless', 'empty'],
    answer: 'lucid',
    tier: 2,
    field: 'word senses',
    also: ['clear'],
  },
  {
    sentence: 'She wore a dress so ⟨nice⟩ that it turned heads as she entered the hall.',
    weakWord: 'nice',
    options: ['sensible', 'cosy', 'elegant', 'practical'],
    answer: 'elegant',
    tier: 2,
    field: 'word senses',
  },
  {
    sentence: 'The milk had a ⟨bad⟩ smell, so she poured it down the sink.',
    weakWord: 'bad',
    options: ['stale', 'mouldy', 'sour', 'musty'],
    answer: 'sour',
    tier: 2,
    field: 'word senses',
  },
  {
    sentence:
      'He spoke before the hour bell sounded, which it now did with a deep, ⟨dull⟩, hollow, melancholy ONE.',
    weakWord: 'dull',
    options: ['boring', 'overcast', 'muffled', 'blunt'],
    answer: 'muffled',
    tier: 2,
    field: 'word senses',
    source: 'Charles Dickens, A Christmas Carol, Stave 2',
  },
  {
    sentence: "I'll be ⟨plain⟩ with you, my friend Pip.",
    weakWord: 'plain',
    options: ['simple', 'frank', 'ordinary', 'undecorated'],
    answer: 'frank',
    tier: 2,
    field: 'word senses',
    source: 'Charles Dickens, Great Expectations, Chapter 36',
  },
  {
    sentence:
      'She sang, and her voice flowed in a ⟨rich⟩ cadence, swelling or dying away, like a nightingale of the woods.',
    weakWord: 'rich',
    options: ['resonant', 'wealthy', 'fertile', 'fattening'],
    answer: 'resonant',
    tier: 2,
    field: 'word senses',
    source: 'Mary Shelley, Frankenstein, Chapter 13',
  },
  {
    sentence:
      'The next day a ⟨keen⟩ wind brought fresh and blinding falls; by twilight the valley was drifted up and almost impassable.',
    weakWord: 'keen',
    options: ['willing', 'biting', 'sharp-witted', 'competitive'],
    answer: 'biting',
    tier: 2,
    field: 'word senses',
    source: 'Charlotte Brontë, Jane Eyre, Chapter 33',
  },
  {
    sentence:
      'His eyes were set very deep in his head, and were disagreeably ⟨sharp⟩ and suspicious.',
    weakWord: 'sharp',
    options: ['pointed', 'acidic', 'watchful', 'fashionable'],
    answer: 'watchful',
    tier: 2,
    field: 'word senses',
    source: 'Charles Dickens, Great Expectations, Chapter 11',
  },
  {
    sentence:
      'It is a truth universally acknowledged, that a single man in possession of a ⟨good⟩ fortune, must be in want of a wife.',
    weakWord: 'good',
    options: ['sizeable', 'lucky', 'virtuous', 'skilful'],
    answer: 'sizeable',
    tier: 3,
    field: 'word senses',
    source: 'Jane Austen, Pride and Prejudice, Chapter 1',
  },
  {
    sentence:
      'I shall commit my thoughts to paper, it is true; but that is a ⟨poor⟩ medium for the communication of feeling.',
    weakWord: 'poor',
    options: ['penniless', 'luckless', 'feeble', 'needy'],
    answer: 'feeble',
    tier: 2,
    field: 'word senses',
    source: 'Mary Shelley, Frankenstein, Letter 2',
  },
  {
    sentence:
      'From that room, too, the daylight was completely excluded, and it had an airless ⟨smell⟩ that was oppressive.',
    weakWord: 'smell',
    options: ['aroma', 'fragrance', 'odour', 'tang'],
    answer: 'odour',
    tier: 3,
    field: 'smell',
    source: 'Charles Dickens, Great Expectations, Chapter 11',
  },
  {
    sentence: "I'm a bit ⟨hungry⟩; could I have an apple before dinner?",
    weakWord: 'hungry',
    options: ['ravenous', 'famished', 'peckish', 'starving'],
    answer: 'peckish',
    tier: 3,
    field: 'hunger',
    also: ['hungry'],
  },
  {
    sentence:
      'After two days lost on the moor, the walkers were ⟨hungry⟩ enough to eat anything put in front of them.',
    weakWord: 'hungry',
    options: ['peckish', 'gluttonous', 'picky', 'ravenous'],
    answer: 'ravenous',
    tier: 3,
    field: 'hunger',
    also: ['hungry'],
  },
  {
    sentence:
      'The critics called the play ⟨bad⟩, the worst they had seen in years: dull, wooden and far too long.',
    weakWord: 'bad',
    options: ['mediocre', 'disappointing', 'uneven', 'dreadful'],
    answer: 'dreadful',
    tier: 3,
    field: 'praise and blame',
  },
  {
    sentence:
      "The polite letter began, 'I am writing to ⟨ask for⟩ a refund for the broken kettle.'",
    weakWord: 'ask for',
    options: ['request', 'demand', 'beg', 'wheedle'],
    answer: 'request',
    tier: 3,
    field: 'register',
  },
  {
    sentence: 'A ⟨group⟩ of angry fans pushed through the barriers and onto the pitch.',
    weakWord: 'group',
    options: ['congregation', 'panel', 'troupe', 'mob'],
    answer: 'mob',
    tier: 3,
    field: 'groups',
    also: ['groups of people'],
  },
  {
    sentence: 'The ⟨group⟩ of tourists followed their guide quietly around the castle.',
    weakWord: 'group',
    options: ['mob', 'gang', 'pack', 'party'],
    answer: 'party',
    tier: 2,
    field: 'groups',
    also: ['groups of people'],
  },
  {
    sentence: 'Uncle Ray is so ⟨talkative⟩ that a five-minute story takes him an hour to tell.',
    weakWord: 'talkative',
    options: ['eloquent', 'long-winded', 'articulate', 'quick-witted'],
    answer: 'long-winded',
    tier: 3,
    field: 'talk',
    also: ['talkative'],
  },
  {
    sentence: 'The ⟨talkative⟩ storyteller held the whole hall spellbound for an hour.',
    weakWord: 'talkative',
    options: ['long-winded', 'eloquent', 'gossipy', 'rambling'],
    answer: 'eloquent',
    tier: 3,
    field: 'talk',
    also: ['talkative'],
  },
  {
    sentence:
      'Nadia was ⟨sure of herself⟩ in the interview, answering every question calmly and thanking the panel.',
    weakWord: 'sure of herself',
    options: ['arrogant', 'cocky', 'boastful', 'assured'],
    answer: 'assured',
    tier: 3,
    field: 'character: confidence',
    also: ['sure of yourself'],
  },
  {
    sentence:
      'Having never lost a game, Theo was ⟨sure of himself⟩ and stopped practising with the rest of the team.',
    weakWord: 'sure of himself',
    options: ['assured', 'poised', 'unassuming', 'complacent'],
    answer: 'complacent',
    tier: 3,
    field: 'character: confidence',
    also: ['sure of yourself'],
  },
  {
    sentence: "The ballet teacher praised the dancer's ⟨thin⟩, graceful arms.",
    weakWord: 'thin',
    options: ['slender', 'skinny', 'scrawny', 'gaunt'],
    answer: 'slender',
    tier: 3,
    field: 'appearance',
    also: ['thin'],
  },
  {
    sentence: 'After a winter with too little food, the stray cat looked ⟨thin⟩ and pitiful.',
    weakWord: 'thin',
    options: ['slender', 'scrawny', 'slim', 'lean'],
    answer: 'scrawny',
    tier: 3,
    field: 'appearance',
    also: ['thin'],
  },
  {
    sentence: "The baby's ⟨fat⟩ little cheeks made everyone want to pinch them.",
    weakWord: 'fat',
    options: ['chubby', 'portly', 'obese', 'stout'],
    answer: 'chubby',
    tier: 3,
    field: 'appearance',
  },
  {
    sentence: 'My great-grandmother is ⟨old⟩ now, but she still walks to the shops every morning.',
    weakWord: 'old',
    options: ['antique', 'elderly', 'ancient', 'decrepit'],
    answer: 'elderly',
    tier: 3,
    field: 'age',
    also: ['old'],
  },
  {
    sentence: "The museum's ⟨old⟩ clock is worth thousands of pounds.",
    weakWord: 'old',
    options: ['elderly', 'antique', 'decrepit', 'outdated'],
    answer: 'antique',
    tier: 3,
    field: 'age',
    also: ['old'],
  },
  {
    sentence: 'The ⟨old⟩ shed leaned to one side, its roof full of holes and its door hanging off.',
    weakWord: 'old',
    options: ['antique', 'vintage', 'rickety', 'venerable'],
    answer: 'rickety',
    tier: 3,
    field: 'age',
    also: ['old'],
  },
  {
    sentence: "The fox was ⟨clever⟩ enough to steal the farmer's eggs without ever being seen.",
    weakWord: 'clever',
    options: ['wise', 'brainy', 'cunning', 'talented'],
    answer: 'cunning',
    tier: 3,
    field: 'character: cleverness',
    also: ['clever'],
  },
  {
    sentence: 'Grandma is ⟨clever⟩: she always knows the right thing to say when someone is upset.',
    weakWord: 'clever',
    options: ['wise', 'cunning', 'sly', 'crafty'],
    answer: 'wise',
    tier: 3,
    field: 'character: cleverness',
    also: ['clever'],
  },
  {
    sentence:
      'The empty house was ⟨strange⟩ at night, with footsteps sounding where nobody walked.',
    weakWord: 'strange',
    options: ['eerie', 'quirky', 'unusual', 'exotic'],
    answer: 'eerie',
    tier: 3,
    field: 'strangeness',
    also: ['strange'],
  },
  {
    sentence:
      'Our art teacher has a ⟨strange⟩ collection of teapots shaped like animals, which everyone loves.',
    weakWord: 'strange',
    options: ['sinister', 'ghostly', 'foreign', 'quirky'],
    answer: 'quirky',
    tier: 3,
    field: 'strangeness',
    also: ['strange'],
  },
  {
    sentence: 'The puppy has been ⟨bad⟩ again: there are chewed slippers all over the hall.',
    weakWord: 'bad',
    options: ['wicked', 'evil', 'criminal', 'naughty'],
    answer: 'naughty',
    tier: 3,
    field: 'praise and blame',
    also: ['bad behaviour'],
  },
  {
    sentence:
      'When the bus left without her, Priya was ⟨upset⟩ for a moment, but soon laughed about it.',
    weakWord: 'upset',
    options: ['disappointed', 'devastated', 'distraught', 'inconsolable'],
    answer: 'disappointed',
    tier: 3,
    field: 'feeling sad',
  },
  {
    sentence: "My little brother ⟨likes⟩ dinosaurs so much that he knows every one's name.",
    weakWord: 'likes',
    options: ['tolerates', 'adores', 'appreciates', 'respects'],
    answer: 'adores',
    tier: 3,
    field: 'liking',
    also: ['liking'],
  },
  {
    sentence: "Gran doesn't love my music, but she ⟨likes⟩ it when I play it in the car.",
    weakWord: 'likes',
    options: ['adores', 'tolerates', 'cherishes', 'treasures'],
    answer: 'tolerates',
    tier: 3,
    field: 'liking',
    also: ['liking'],
  },
  {
    sentence: 'The marathon runner ⟨drank⟩ the whole bottle of water in one go.',
    weakWord: 'drank',
    options: ['gulped', 'sipped', 'sampled', 'savoured'],
    answer: 'gulped',
    tier: 1,
    field: 'eating',
  },
  {
    sentence:
      'The lifeguard ⟨helped⟩ the swimmer who had been swept out to sea, bringing her back to the beach.',
    weakWord: 'helped',
    options: ['rescued', 'encouraged', 'advised', 'cheered'],
    answer: 'rescued',
    tier: 1,
    field: 'helping',
  },
  {
    sentence: 'At dawn the scientists ⟨started⟩ their new rocket on its journey to Mars.',
    weakWord: 'started',
    options: ['founded', 'opened', 'triggered', 'launched'],
    answer: 'launched',
    tier: 1,
    field: 'starting and stopping',
    also: ['started'],
  },
  {
    sentence: 'Two friends ⟨started⟩ the charity in 1998 with fifty pounds and a borrowed van.',
    weakWord: 'started',
    options: ['kindled', 'founded', 'triggered', 'ignited'],
    answer: 'founded',
    tier: 2,
    field: 'starting and stopping',
    also: ['started'],
  },
  {
    sentence: 'The referee ⟨stopped⟩ the match early because of the lightning.',
    weakWord: 'stopped',
    options: ['extended', 'abandoned', 'completed', 'postponed'],
    answer: 'abandoned',
    tier: 2,
    field: 'starting and stopping',
  },
  {
    sentence:
      "The tailor ⟨changed⟩ Grandad's old trousers, taking in the waist so that they fitted perfectly.",
    weakWord: 'changed',
    options: ['altered', 'swapped', 'replaced', 'converted'],
    answer: 'altered',
    tier: 2,
    field: 'changing and keeping',
  },
  {
    sentence: 'Squirrels ⟨keep⟩ nuts in autumn so that they have food through the winter.',
    weakWord: 'keep',
    options: ['hoard', 'guard', 'crack', 'maintain'],
    answer: 'hoard',
    tier: 2,
    field: 'changing and keeping',
  },
  {
    sentence: 'In the cold, Ella ⟨shook⟩ in her thin coat.',
    weakWord: 'shook',
    options: ['shivered', 'wobbled', 'quaked', 'juddered'],
    answer: 'shivered',
    tier: 2,
    field: 'shaking',
    also: ['shaking'],
  },
  {
    sentence: 'Standing in front of the head teacher, Joe felt his knees ⟨shake⟩.',
    weakWord: 'shake',
    options: ['shiver', 'tremble', 'judder', 'vibrate'],
    answer: 'tremble',
    tier: 2,
    field: 'shaking',
    also: ['shaking'],
  },
  {
    sentence: "The frightened child ⟨held⟩ her mother's hand all the way through the dark tunnel.",
    weakWord: 'held',
    options: ['clutched', 'cradled', 'caressed', 'grazed'],
    answer: 'clutched',
    tier: 2,
    field: 'hands',
  },
  {
    sentence: 'The café was ⟨nice⟩: soft chairs, warm lamps and a cat asleep by the fire.',
    weakWord: 'nice',
    options: ['spacious', 'glamorous', 'cosy', 'bustling'],
    answer: 'cosy',
    tier: 2,
    field: 'places',
  },
  {
    sentence: 'For three hours, in a small grey room, the police ⟨talked to⟩ the suspect.',
    weakWord: 'talked to',
    options: ['questioned', 'consulted', 'lectured', 'entertained'],
    answer: 'questioned',
    tier: 2,
    field: 'speaking',
    also: ['suspect'],
  },
  {
    sentence: "It's only ⟨raining a little⟩, so we can still walk to school.",
    weakWord: 'raining a little',
    options: ['pouring', 'bucketing', 'drizzling', 'teeming'],
    answer: 'drizzling',
    tier: 2,
    field: 'weather',
    also: ['drizzle'],
  },
  {
    sentence: 'Furious, the toddler ⟨threw⟩ his toy train across the room.',
    weakWord: 'threw',
    options: ['tossed', 'lobbed', 'passed', 'hurled'],
    answer: 'hurled',
    tier: 2,
    field: 'hands',
  },
  {
    sentence: 'The tower of bricks ⟨fell⟩ when the toddler pulled out the bottom one.',
    weakWord: 'fell',
    options: ['sagged', 'sank', 'slumped', 'toppled'],
    answer: 'toppled',
    tier: 1,
    field: 'falling',
  },
  {
    sentence: 'The cat ⟨jumped⟩ onto the mouse before it could reach its hole.',
    weakWord: 'jumped',
    options: ['hopped', 'vaulted', 'pounced', 'skipped'],
    answer: 'pounced',
    tier: 1,
    field: 'moving',
  },
  {
    sentence: 'The children ⟨ran⟩ around the playground like puppies let off the lead.',
    weakWord: 'ran',
    options: ['plodded', 'trudged', 'scampered', 'lumbered'],
    answer: 'scampered',
    tier: 1,
    field: 'moving',
  },
  {
    sentence: 'When the dentist ⟨touched⟩ the sore tooth, Ali flinched.',
    weakWord: 'touched',
    options: ['caressed', 'stroked', 'patted', 'prodded'],
    answer: 'prodded',
    tier: 2,
    field: 'hands',
  },
  {
    sentence:
      'After the long drive, Grandpa ⟨slept⟩ in his armchair for ten minutes before dinner.',
    weakWord: 'slept',
    options: ['hibernated', 'fainted', 'dozed', 'yawned'],
    answer: 'dozed',
    tier: 1,
    field: 'resting',
  },
  {
    sentence: 'Through the trees and the mist, the lights of a distant village ⟨shone⟩.',
    weakWord: 'shone',
    options: ['glared', 'blazed', 'glimmered', 'dazzled'],
    answer: 'glimmered',
    tier: 1,
    field: 'light',
  },
  {
    sentence: 'All afternoon, bees ⟨made a noise⟩ among the lavender.',
    weakWord: 'made a noise',
    options: ['clanged', 'shrieked', 'hummed', 'boomed'],
    answer: 'hummed',
    tier: 1,
    field: 'sound',
  },
  {
    sentence:
      "Dad's ⟨old⟩ car is his pride and joy: he polishes it every Sunday and takes it to shows.",
    weakWord: 'old',
    options: ['vintage', 'decrepit', 'outdated', 'battered'],
    answer: 'vintage',
    tier: 3,
    field: 'age',
    also: ['old'],
  },
  {
    sentence:
      "Scrooge had a very ⟨small⟩ fire, but the clerk's fire was so very much smaller that it looked like one coal.",
    weakWord: 'small',
    options: ['compact', 'miniature', 'meagre', 'dainty'],
    answer: 'meagre',
    tier: 3,
    field: 'size',
    source: 'Charles Dickens, A Christmas Carol, Stave 1',
  },
  {
    sentence:
      'Napoleon was a ⟨large⟩, rather fierce-looking Berkshire boar, the only Berkshire on the farm, not much of a talker, but with a reputation for getting his own way.',
    weakWord: 'large',
    options: ['portly', 'towering', 'hulking', 'lanky'],
    answer: 'hulking',
    tier: 3,
    field: 'size',
    source: 'George Orwell, Animal Farm, Chapter 2',
  },
  {
    sentence: 'Darkness is ⟨cheap⟩, and Scrooge liked it.',
    weakWord: 'cheap',
    options: ['shoddy', 'tacky', 'second-rate', 'inexpensive'],
    answer: 'inexpensive',
    tier: 3,
    field: 'value for money',
    source: 'Charles Dickens, A Christmas Carol, Stave 1',
    also: ['cheap'],
  },
  {
    sentence:
      'Joe was a ⟨fair⟩ man, with curls of flaxen hair on each side of his smooth face, and with eyes of such a very undecided blue that they seemed to have somehow got mixed with their own whites.',
    weakWord: 'fair',
    options: ['just', 'sunny', 'blond', 'moderate'],
    answer: 'blond',
    tier: 3,
    field: 'word senses',
    source: 'Charles Dickens, Great Expectations, Chapter 2',
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
  // A round climbs from the plain situations to the shades of meaning.
  tier: (q) => q.tier,
  // A round spreads the subject areas: not five ways of speaking in a row.
  group: (q) => q.field,
  // The approving and the disapproving word for one trait are never dealt together.
  facts: (q) => q.also ?? [],
  // Rebuilt for depth (see the docblock); held to it by
  // src/__tests__/a-game-question-takes-knowing.test.ts.
  deepened: '2026-10-24',
}
