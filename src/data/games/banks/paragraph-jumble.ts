import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Paragraph Jumble: put the sentences of a short paragraph back in order,
 * using the topic sentence, connectives, time order and reference words
 * ("she", "this nectar", "the lid") as clues. An order is right only when
 * every sentence is in its place.
 *
 * Moved out of src/app/games/paragraph-jumble/page.tsx on 16 October 2026,
 * when every answer gained an explanation (src/lib/games/explanations/types.ts).
 *
 * WHAT WAS WRONG WITH THE QUESTIONS (found writing those explanations). Every
 * paragraph was read for a second order that also makes sense, since a
 * student who built one would be marked wrong; none has one. Two paragraphs
 * taught something untrue:
 *
 *   - "Why leaves change colour in autumn" ended "This is why leaves turn
 *     yellow, orange and red", after saying the colours were hidden in the leaf
 *     all summer. The yellows and oranges are; the reds are not, and many
 *     trees make them fresh in autumn. It now ends "yellow and orange";
 *   - "How a seed becomes a plant" began "Every plant starts its life as a
 *     tiny seed". Ferns and mosses grow from spores, and many plants grow from
 *     bulbs or cuttings. It now begins "Most plants start life as a tiny seed".
 *
 * The other paragraphs are unchanged. Each paragraph's one-line "cohesion
 * clue", shown after checking, gave way to its explanation
 * (src/data/games/explanations/paragraph-jumble.ts) and is not carried here.
 *
 * REBUILT FOR DEPTH (24 October 2026). The founder found the games "weak in
 * depth and content"; the audit (.tmp-games-audit/REPORT-ks3.md) found 28
 * paragraphs, a student meeting most of them by round 5, every argument built
 * on one template (a claim, a "However", an "In addition", a conclusion,
 * which one explanation even taught), and the genre printed above each
 * paragraph. Generic connective knowledge alone ordered 27 per cent of
 * paragraphs exactly, against 1.8 per cent by chance. The bank now holds 215
 * questions: 122 paragraphs and 93 "choose the connective" gaps.
 *
 *   - Real text first. 62 paragraphs and 40 gaps are copied, by script and
 *     word for word, from the out-of-copyright novels in src/data/full-texts
 *     (Dickens, Orwell, Charlotte Brontë, Austen, Mary Shelley, Wells, Conan
 *     Doyle, Stevenson, George Eliot, Hawthorne, Fitzgerald), each with its
 *     `source`, which the page shows. More were read and left out: every
 *     candidate was read for a second order that also makes sense (two
 *     descriptive sentences that can swap, a reaction that fits before or
 *     after an event), and 21 failed and are not here.
 *   - The site's own: 32 new paragraphs in five kinds (Description is new),
 *     whose order rests on reference words ("those quarters", "that gap",
 *     "Behind it"), cause and effect, comparison and ellipsis rather than on
 *     sentence-opening connectives; and 53 gaps for the commonest links.
 *   - Tiers: 1, plain cues in short paragraphs; 2, reference chains and cause;
 *     3, nineteenth-century prose, and arguments that concede and answer.
 *   - The connective-only trick now orders 2.0 per cent of paragraphs exactly
 *     (1.8 by chance), and 17 of 122 paragraphs (14 per cent) are led by
 *     connectives or time phrases.
 *
 * A gap's answer is the connective the sentences need, and every option is a
 * connective of a different job (contrast, result, addition, example, time),
 * so that only one fits. The answer is the unique longest option in 17 per
 * cent of gaps and the unique shortest in 23 per cent. Answers that are
 * everyday words (yet, so, still, however, therefore) each answer four or
 * more gaps, so the dealer reads them as the game's subject; the rarer ones
 * (hence, of course, at length) appear in no other explanation.
 *
 * Existing questions fixed: the seven arguments kept their topics (their keys)
 * and were rewritten so that no two share a shape: a question answered, a view
 * stated then refined, a concession then a turn, two sides then a middle way,
 * a true example (the Arabian oryx, returned to the wild from zoo herds), a
 * distinction, and evidence (England's 5p bag charge of October 2015). Their
 * explanations were rewritten with them. The other 21 are unchanged, with a
 * tier each. Nothing was removed.
 *
 * CHECKED (31 October 2026) by a second reader, as the founder decided. Every
 * paragraph was read again for a second order a careful reader would accept,
 * every gap for a second answer, and every real line against the book (its
 * sentences consecutive, in the chapter named, the gap's word the author's
 * own). What was wrong, and what changed:
 *
 *   - "The name over Scrooge's door": "The firm was known as Scrooge and
 *     Marley" reads as well first, before the sign that explains it; removed.
 *   - "A warning from the pigeons": "Obviously they were going to attempt the
 *     recapture" follows the men on the cart-track as well as their sticks and
 *     gun, so it could come third or fourth; removed.
 *   - "Dinner at Lowood": "Of this preparation" can point back to the dinner in
 *     its tin vessels, so the plateful can come before "I found the mess";
 *     removed.
 *   - "Fire in Mr Rochester's room": Rochester asleep "in the midst of blaze
 *     and vapour" reads as well before the flames round the bed; removed.
 *   - "Meeting Miss Darcy": the single monosyllable reads as well before the
 *     sentence that finds her shy as after it; removed.
 *   - "Diana and Mary are married": its first sentence, "My Edward and I, then,
 *     are happy", closed the paragraph as well as it opened it. It now starts
 *     at the next sentence, so it is the book's own four in a row.
 *   - "Our class garden": sunflower seeds are sown in spring, not after
 *     September's weeding; they are now wildflower seeds, which can be sown in
 *     autumn.
 *   - The Jane Eyre gap answered "Still" printed "still less" just before the
 *     gap, a word to match rather than a link to read; removed.
 *
 * The figures above are the rebuild's. The bank now holds 209: 117 paragraphs
 * (57 real) and 92 gaps (39 real); 58 at tier 1, 79 at tier 2 and 72 at tier
 * 3. The answer is the unique longest option in 17 per cent of gaps and the
 * unique shortest in 22.
 */

export type Genre = 'Recount' | 'Explanation' | 'Argument' | 'Story' | 'Description'

/** A paragraph whose sentences the student puts back in order. */
export interface Paragraph {
  kind?: undefined
  /** Sentences in their correct, coherent order. */
  sentences: string[]
  topic: string
  genre: Genre
  /** 1 recognise the cues, 2 follow reference and cause, 3 real prose or a subtle argument. */
  tier: 1 | 2 | 3
  /** Where a real paragraph comes from, copied exactly; shown under the topic. */
  source?: string
}

/** What a connective tells the reader about the sentence it opens. */
export type Link =
  | 'Contrast'
  | 'Concession'
  | 'Result'
  | 'Addition'
  | 'Example'
  | 'Time'
  | 'Replacement'
  | 'Condition'
  | 'Emphasis'
  | 'Summary'
  | 'Similarity'
  | 'Cause'

/**
 * A "choose the connective" question (24 October 2026): two or three
 * sentences with ___ where the linking word goes, and four options.
 */
export interface ConnectiveGap {
  kind: 'connective'
  /** The sentences, with ___ where the connective goes. */
  text: string
  answer: string
  /** Every option shown, the answer among them; the page shuffles them. */
  options: string[]
  link: Link
  tier: 1 | 2 | 3
  /** Where real sentences come from, copied exactly; shown under them. */
  source?: string
}

export type JumbleItem = Paragraph | ConnectiveGap

export const isGap = (item: JumbleItem): item is ConnectiveGap => item.kind === 'connective'

export const PARAGRAPH_BANK: Paragraph[] = [
  // ── The site's own paragraphs, written for the game (UK English) ──────────
  {
    topic: 'A school trip to the coast',
    genre: 'Recount',
    tier: 1,
    sentences: [
      'Last Friday, our class travelled to the seaside for a geography field trip.',
      'As soon as we arrived, our teacher divided us into small groups.',
      'My group spent the morning measuring the height of the cliffs.',
      'After lunch, we collected samples of rock from the beach.',
      'By the time the coach left, everyone was tired but happy.',
    ],
  },
  {
    topic: 'How rainbows form',
    genre: 'Explanation',
    tier: 1,
    sentences: [
      'A rainbow appears when sunlight passes through droplets of water in the air.',
      'First, the light bends as it enters each tiny droplet.',
      'Next, the colours separate because each one bends by a slightly different amount.',
      'Finally, the light reflects off the back of the droplet and returns to your eyes.',
      'This is why we usually see rainbows after rain, when the sun is behind us.',
    ],
  },
  {
    topic: 'Why schools should keep libraries',
    genre: 'Argument',
    tier: 2,
    sentences: [
      'Where can a pupil with no computer at home do their research after school?',
      'For many, the answer is the school library.',
      'It offers free books, quiet desks and a librarian who knows how to find reliable information.',
      'That last point matters more than ever, because a search engine cannot tell a pupil which websites to trust.',
      'A school that closes its library takes away the one place built to give that kind of help.',
    ],
  },
  {
    topic: 'A surprising discovery in the attic',
    genre: 'Story',
    tier: 1,
    sentences: [
      'Maya had never been allowed into the dusty attic before.',
      'That afternoon, while her parents were out, she crept up the narrow stairs.',
      'In the corner, she noticed an old wooden chest covered in cobwebs.',
      'When she lifted the lid, a bundle of yellowed letters slid onto the floor.',
      'Each one was addressed to a girl who shared her exact name.',
    ],
  },
  {
    topic: 'The morning of the football final',
    genre: 'Recount',
    tier: 1,
    sentences: [
      'The morning of the final, I woke up before my alarm even rang.',
      'My stomach was full of nerves, so I could barely eat my breakfast.',
      'On the way to the pitch, my coach reminded us to stay calm and trust our training.',
      'During the match, we fell behind early but never gave up.',
      'In the end, a last-minute goal won us the trophy.',
    ],
  },
  {
    topic: 'How bees make honey',
    genre: 'Explanation',
    tier: 1,
    sentences: [
      'Honey begins as nectar, a sugary liquid found inside flowers.',
      'Worker bees collect this nectar and carry it back to the hive.',
      'Inside the hive, the bees pass the nectar between them, slowly thickening it.',
      'They then fan it with their wings until most of the water evaporates.',
      'As a result, the nectar turns into the thick honey we eat.',
    ],
  },
  {
    topic: 'Should pupils wear school uniform?',
    genre: 'Argument',
    tier: 2,
    sentences: [
      'School uniform does more good than harm.',
      'Its greatest benefit is cost, since one set of clothes for every school day is cheaper than keeping up with fashion.',
      'It also stops pupils being judged on the brands they wear.',
      'Neither benefit, though, needs the stiff blazers and ties that so many pupils dislike.',
      'A simple, comfortable uniform would keep both advantages and lose the main complaint.',
    ],
  },
  {
    topic: 'The night the power went out',
    genre: 'Story',
    tier: 1,
    sentences: [
      'It was an ordinary evening until the lights flickered and died.',
      'Suddenly, the whole house was wrapped in complete darkness.',
      'Dad fumbled in the kitchen drawer and finally found a box of candles.',
      'We gathered around the small flames and began telling ghost stories.',
      'Strangely, it became one of the most memorable nights of the summer.',
    ],
  },
  {
    topic: 'Visiting my grandparents in the countryside',
    genre: 'Recount',
    tier: 1,
    sentences: [
      'Every summer, my family drives out to visit my grandparents on their farm.',
      'When we arrive, my grandmother always has a fresh cake waiting on the table.',
      'In the afternoons, my grandfather lets me help feed the chickens.',
      'Before we leave, we pick a basket of vegetables from the garden.',
      'Saying goodbye is always the hardest part of the trip.',
    ],
  },
  {
    topic: 'Why leaves change colour in autumn',
    genre: 'Explanation',
    tier: 2,
    sentences: [
      'During summer, leaves are green because they are full of a chemical called chlorophyll.',
      'As the days grow shorter, the tree stops producing this chemical.',
      'Without the green chlorophyll, other colours hidden in the leaf become visible.',
      'This is why leaves turn yellow and orange before they fall.',
    ],
  },
  {
    topic: 'Should homework be banned?',
    genre: 'Argument',
    tier: 3,
    sentences: [
      'It is true that some homework is set out of habit rather than for a purpose.',
      "A worksheet that simply repeats the day's lesson, for example, teaches very little.",
      'The cure for homework like that, however, is better homework, not none at all.',
      'Better homework means short tasks that make pupils recall what they have learnt, which helps it stay in the memory.',
      'Banning all homework would throw away that benefit along with the waste.',
    ],
  },
  {
    topic: 'A letter that changed everything',
    genre: 'Story',
    tier: 1,
    sentences: [
      'For weeks, Daniel had checked the post every morning without success.',
      'Then, one rainy Tuesday, a thick envelope landed on the mat.',
      'His hands trembled as he tore it open in the hallway.',
      'Inside was the acceptance letter he had almost stopped hoping for.',
      'From that moment, his whole future felt completely different.',
    ],
  },
  {
    topic: 'My first day at secondary school',
    genre: 'Recount',
    tier: 1,
    sentences: [
      'On my first day at secondary school, I felt both excited and terrified.',
      'At the gate, an older pupil kindly showed me where to find my form room.',
      'Throughout the morning, I struggled to remember which corridor led where.',
      'By lunchtime, however, I had already made two new friends.',
      'Looking back, my fears had been far worse than the reality.',
    ],
  },
  {
    topic: 'How a volcano erupts',
    genre: 'Explanation',
    tier: 2,
    sentences: [
      'Deep beneath the ground, intense heat melts rock into a liquid called magma.',
      'Because magma is lighter than the solid rock around it, it slowly rises.',
      'Pressure then builds up until the magma forces its way to the surface.',
      'When it finally bursts out, the magma is known as lava.',
      'Eventually the lava cools and hardens, forming new layers of rock.',
    ],
  },
  {
    topic: 'Should mobile phones be allowed in lessons?',
    genre: 'Argument',
    tier: 2,
    sentences: [
      "A phone in a pupil's pocket can be a dictionary, a calculator and a camera all at once.",
      "The same phone can also bring a stream of messages that break a pupil's concentration.",
      'Which of the two it becomes depends less on the phone than on the rules around it.',
      'A school could let teachers ask for phones when a task needs them and keep them in bags the rest of the time.',
      'That way pupils keep the tool and lose the distraction.',
    ],
  },
  {
    topic: 'The race I almost did not finish',
    genre: 'Story',
    tier: 1,
    sentences: [
      'Halfway through the cross-country race, my legs felt like heavy stone.',
      'A sharp pain shot through my side, and I wanted to stop completely.',
      'Just then, I heard my best friend shouting my name from the crowd.',
      'Somehow, her voice gave me the strength to keep going.',
      'I crossed the line last, yet I had never felt prouder.',
    ],
  },
  {
    topic: 'A weekend camping in the forest',
    genre: 'Recount',
    tier: 1,
    sentences: [
      'Last weekend, my dad and I went camping in the forest for the first time.',
      'As soon as we set up the tent, it began to rain heavily.',
      'We sheltered inside and played cards by the light of a torch.',
      'Later that night, the sky cleared and we counted the stars.',
      'Despite the rain, it turned out to be an unforgettable adventure.',
    ],
  },
  {
    topic: 'How recycling reduces waste',
    genre: 'Explanation',
    tier: 1,
    sentences: [
      'Recycling is the process of turning used materials into something new.',
      'First, items such as glass and plastic are collected and sorted by type.',
      'These materials are then cleaned and broken down at a special factory.',
      'After that, they are made into fresh products instead of being thrown away.',
      'As a result, far less rubbish ends up buried in landfill sites.',
    ],
  },
  {
    topic: 'Should zoos still exist?',
    genre: 'Argument',
    tier: 3,
    sentences: [
      'By the early 1970s, the Arabian oryx had disappeared from the wild.',
      'Its return began with a herd bred in zoos, and in 1982 the first of those animals were released in Oman.',
      'Stories like this are the strongest case for keeping zoos.',
      'Critics are right, though, that a small enclosure is no life for an animal that would roam for miles.',
      'The answer is to keep the zoos that breed and release endangered animals, and to close the ones that only display them.',
    ],
  },
  {
    topic: 'The stray dog that followed me home',
    genre: 'Story',
    tier: 2,
    sentences: [
      'On my walk back from school, a thin brown dog began trotting beside me.',
      'I tried to shoo it away, but it simply wagged its tail and stayed.',
      'By the time I reached my street, it clearly had no intention of leaving.',
      'My mum sighed at the door, yet she could not resist its hopeful eyes.',
      'That evening, the dog curled up by the fire as if it had always lived there.',
    ],
  },
  {
    topic: 'Sports day at primary school',
    genre: 'Recount',
    tier: 1,
    sentences: [
      'I still remember the excitement of sports day when I was nine years old.',
      'In the morning, the whole school marched onto the field behind colourful banners.',
      'During the relay, I dropped the baton and nearly cost my team the race.',
      'Fortunately, my teammates cheered me on instead of blaming me.',
      'We did not win, but I learned that effort matters more than medals.',
    ],
  },
  {
    topic: 'How the water cycle works',
    genre: 'Explanation',
    tier: 1,
    sentences: [
      'The water cycle describes how water moves between the sky and the ground.',
      'To begin with, heat from the sun causes water in oceans and lakes to evaporate.',
      'This water vapour then rises and cools, forming clouds high in the air.',
      'When the clouds become heavy, the water falls back down as rain or snow.',
      'Finally, the water flows into rivers and returns to the sea to start again.',
    ],
  },
  {
    topic: 'Should children have less screen time?',
    genre: 'Argument',
    tier: 2,
    sentences: [
      'Not all screen time is the same.',
      'An hour spent video-calling a grandparent or learning to code is very different from an hour of scrolling through short videos.',
      'The second kind is the problem, because it is designed to be hard to stop.',
      'Instead of a single daily limit, families could agree which uses count and which do not.',
      'A rule like that teaches young people to judge their own habits, which a timer never does.',
    ],
  },
  {
    topic: 'The mysterious key in the garden',
    genre: 'Story',
    tier: 2,
    sentences: [
      'While digging a flower bed, Leo struck something hard with his trowel.',
      'Brushing away the soil, he uncovered a small, rusted iron key.',
      'He searched the whole house, but no lock seemed to match it.',
      'Then he remembered the old shed nobody had opened for years.',
      'With a stiff turn, the key clicked, and the door swung slowly open.',
    ],
  },
  {
    topic: 'My grandmother teaching me to bake',
    genre: 'Recount',
    tier: 1,
    sentences: [
      'When I was small, my grandmother decided it was time I learned to bake.',
      'First, she showed me how to weigh the flour and sugar carefully.',
      'Next, she let me crack the eggs, even when I made a mess.',
      'While the cake rose in the oven, she told me stories about her own childhood.',
      'To this day, that smell of warm sponge reminds me of her kitchen.',
    ],
  },
  {
    topic: 'How a seed becomes a plant',
    genre: 'Explanation',
    tier: 1,
    sentences: [
      'Most plants start life as a tiny seed buried in the soil.',
      'Given warmth and water, the seed begins to swell and split open.',
      'A small root then grows downwards to anchor the plant and drink water.',
      'Soon afterwards, a green shoot pushes upwards towards the sunlight.',
      'In time, this shoot develops leaves and grows into a mature plant.',
    ],
  },
  {
    topic: 'Should plastic bags be banned in shops?',
    genre: 'Argument',
    tier: 3,
    sentences: [
      'In October 2015, large shops in England had to start charging 5p for each single-use plastic bag.',
      'The charge was small, but shoppers soon started bringing their own bags.',
      'Within a few years, the main supermarkets were handing out only a small fraction of the bags they once had.',
      'That change suggests that a ban is not needed.',
      'A small charge, which still leaves people free to choose, can do most of the work.',
    ],
  },
  {
    topic: 'Lost on the way to the museum',
    genre: 'Story',
    tier: 2,
    sentences: [
      'Our class was supposed to follow the teacher straight to the museum entrance.',
      'Distracted by a street performer, Sam and I drifted away from the group.',
      'When we looked up, the others had completely vanished into the crowd.',
      'Trying not to panic, we asked a friendly shopkeeper for directions.',
      'We reached the museum at last, just as the teacher was counting heads.',
    ],
  },
  {
    topic: "Scrooge's clerk and the coal-box",
    genre: 'Story',
    tier: 3,
    source: 'Charles Dickens, A Christmas Carol, Stave I',
    sentences: [
      "The door of Scrooge's counting-house was open that he might keep his eye upon his clerk, who in a dismal little cell beyond, a sort of tank, was copying letters.",
      "Scrooge had a very small fire, but the clerk's fire was so very much smaller that it looked like one coal.",
      "But he couldn't replenish it, for Scrooge kept the coal-box in his own room; and so surely as the clerk came in with the shovel, the master predicted that it would be necessary for them to part.",
      'Wherefore the clerk put on his white comforter, and tried to warm himself at the candle; in which effort, not being a man of a strong imagination, he failed.',
    ],
  },
  {
    topic: "Echoes in Scrooge's house",
    genre: 'Story',
    tier: 2,
    source: 'Charles Dickens, A Christmas Carol, Stave I',
    sentences: [
      'The sound resounded through the house like thunder.',
      "Every room above, and every cask in the wine-merchant's cellars below, appeared to have a separate peal of echoes of its own.",
      'Scrooge was not a man to be frightened by echoes.',
      'He fastened the door, and walked across the hall, and up the stairs; slowly too: trimming his candle as he went.',
    ],
  },
  {
    topic: 'The city vanishes',
    genre: 'Story',
    tier: 2,
    source: 'Charles Dickens, A Christmas Carol, Stave II',
    sentences: [
      'As the words were spoken, they passed through the wall, and stood upon an open country road, with fields on either hand.',
      'The city had entirely vanished.',
      'Not a vestige of it was to be seen.',
      'The darkness and the mist had vanished with it, for it was a clear, cold, winter day, with snow upon the ground.',
    ],
  },
  {
    topic: 'Scrooge sees himself as a younger man',
    genre: 'Story',
    tier: 3,
    source: 'Charles Dickens, A Christmas Carol, Stave II',
    sentences: [
      'This was not addressed to Scrooge, or to any one whom he could see, but it produced an immediate effect.',
      'For again Scrooge saw himself.',
      'He was older now; a man in the prime of life.',
      'His face had not the harsh and rigid lines of later years; but it had begun to wear the signs of care and avarice.',
      'There was an eager, greedy, restless motion in the eye, which showed the passion that had taken root, and where the shadow of the growing tree would fall.',
    ],
  },
  {
    topic: 'Mr Jones fires into the dark',
    genre: 'Story',
    tier: 2,
    source: 'George Orwell, Animal Farm, Chapter I',
    sentences: [
      'Unfortunately, the uproar awoke Mr. Jones, who sprang out of bed, making sure that there was a fox in the yard.',
      'He seized the gun which always stood in a corner of his bedroom, and let fly a charge of number 6 shot into the darkness.',
      'The pellets buried themselves in the wall of the barn and the meeting broke up hurriedly.',
      'Everyone fled to his own sleeping-place.',
      'The birds jumped on to their perches, the animals settled down in the straw, and the whole farm was asleep in a moment.',
    ],
  },
  {
    topic: 'The cows that had not been milked',
    genre: 'Story',
    tier: 1,
    source: 'George Orwell, Animal Farm, Chapter II',
    sentences: [
      'But at this moment the three cows, who had seemed uneasy for some time past, set up a loud lowing.',
      'They had not been milked for twenty-four hours, and their udders were almost bursting.',
      'After a little thought, the pigs sent for buckets and milked the cows fairly successfully, their trotters being well adapted to this task.',
      'Soon there were five buckets of frothing creamy milk at which many of the animals looked with considerable interest.',
    ],
  },
  {
    topic: 'Napoleon and the puppies',
    genre: 'Story',
    tier: 3,
    source: 'George Orwell, Animal Farm, Chapter III',
    sentences: [
      "Napoleon took no interest in Snowball's committees.",
      'He said that the education of the young was more important than anything that could be done for those who were already grown up.',
      'It happened that Jessie and Bluebell had both whelped soon after the hay harvest, giving birth between them to nine sturdy puppies.',
      'As soon as they were weaned, Napoleon took them away from their mothers, saying that he would make himself responsible for their education.',
      'He took them up into a loft which could only be reached by a ladder from the harness-room, and there kept them in such seclusion that the rest of the farm soon forgot their existence.',
    ],
  },
  {
    topic: "Frederick's bank-notes",
    genre: 'Story',
    tier: 3,
    source: 'George Orwell, Animal Farm, Chapter VIII',
    sentences: [
      'Meanwhile the timber was being carted away at high speed.',
      "When it was all gone, another special meeting was held in the barn for the animals to inspect Frederick's bank-notes.",
      'Smiling beatifically, and wearing both his decorations, Napoleon reposed on a bed of straw on the platform, with the money at his side, neatly piled on a china dish from the farmhouse kitchen.',
      'The animals filed slowly past, and each gazed his fill.',
      'And Boxer put out his nose to sniff at the bank-notes, and the flimsy white things stirred and rustled in his breath.',
    ],
  },
  {
    topic: 'Boxer feels his age',
    genre: 'Story',
    tier: 3,
    source: 'George Orwell, Animal Farm, Chapter VIII',
    sentences: [
      'They limped into the yard.',
      "The pellets under the skin of Boxer's leg smarted painfully.",
      'He saw ahead of him the heavy labour of rebuilding the windmill from the foundations, and already in imagination he braced himself for the task.',
      'But for the first time it occurred to him that he was eleven years old and that perhaps his great muscles were not quite what they had once been.',
    ],
  },
  {
    topic: 'The pigs on two legs',
    genre: 'Story',
    tier: 3,
    source: 'George Orwell, Animal Farm, Chapter X',
    sentences: [
      'Yes, it was Squealer.',
      'A little awkwardly, as though not quite used to supporting his considerable bulk in that position, but with perfect balance, he was strolling across the yard.',
      'And a moment later, out from the door of the farmhouse came a long file of pigs, all walking on their hind legs.',
      'Some did it better than others, one or two were even a trifle unsteady and looked as though they would have liked the support of a stick, but every one of them made his way right round the yard successfully.',
      'And finally there was a tremendous baying of dogs and a shrill crowing from the black cockerel, and out came Napoleon himself, majestically upright, casting haughty glances from side to side, and with his dogs gambolling round him.',
    ],
  },
  {
    topic: 'Laughter from the farmhouse',
    genre: 'Story',
    tier: 2,
    source: 'George Orwell, Animal Farm, Chapter X',
    sentences: [
      'That evening loud laughter and bursts of singing came from the farmhouse.',
      'And suddenly, at the sound of the mingled voices, the animals were stricken with curiosity.',
      'What could be happening in there, now that for the first time animals and human beings were meeting on terms of equality?',
      'With one accord they began to creep as quietly as possible into the farmhouse garden.',
    ],
  },
  {
    topic: 'Footsteps in the street',
    genre: 'Story',
    tier: 3,
    source: 'Robert Louis Stevenson, Jekyll and Hyde, Search for Mr. Hyde',
    sentences: [
      'The steps drew swiftly nearer, and swelled out suddenly louder as they turned the end of the street.',
      'The lawyer, looking forth from the entry, could soon see what manner of man he had to deal with.',
      'He was small and very plainly dressed and the look of him, even at that distance, went somehow strongly against the watcher’s inclination.',
      'But he made straight for the door, crossing the roadway to save time; and as he came, he drew a key from his pocket like one approaching home.',
    ],
  },
  {
    topic: 'The mixture in the glass',
    genre: 'Story',
    tier: 3,
    source: 'Robert Louis Stevenson, Jekyll and Hyde, Dr. Lanyon’s Narrative',
    sentences: [
      'He thanked me with a smiling nod, measured out a few minims of the red tincture and added one of the powders.',
      'The mixture, which was at first of a reddish hue, began, in proportion as the crystals melted, to brighten in colour, to effervesce audibly, and to throw off small fumes of vapour.',
      'Suddenly and at the same moment, the ebullition ceased and the compound changed to a dark purple, which faded again more slowly to a watery green.',
      'My visitor, who had watched these metamorphoses with a keen eye, smiled, set down the glass upon the table, and then turned and looked upon me with an air of scrutiny.',
    ],
  },
  {
    topic: 'A knock at the cottage door',
    genre: 'Story',
    tier: 3,
    source: 'George Eliot, Silas Marner, Chapter XIX',
    sentences: [
      'At that moment there was a knocking at the door; and Eppie was obliged to rise without answering Silas.',
      'Beautiful she looked, with the tenderness of gathering tears in her eyes and a slight flush on her cheeks, as she stepped to open the door.',
      'The flush deepened when she saw Mr. and Mrs. Godfrey Cass.',
      'She made her little rustic curtsy, and held the door wide for them to enter.',
    ],
  },
  {
    topic: 'Hester throws the letter away',
    genre: 'Story',
    tier: 3,
    source: 'Nathaniel Hawthorne, The Scarlet Letter, Chapter XVIII',
    sentences: [
      'So speaking, she undid the clasp that fastened the scarlet letter, and, taking it from her bosom, threw it to a distance among the withered leaves.',
      'The mystic token alighted on the hither verge of the stream.',
      'With a hand’s-breadth further flight, it would have fallen into the water, and have given the little brook another woe to carry onward, besides the unintelligible tale which it still kept murmuring about.',
      'But there lay the embroidered letter, glittering like a lost jewel, which some ill-fated wanderer might pick up, and thenceforth be haunted by strange phantoms of guilt, sinkings of the heart, and unaccountable misfortune.',
    ],
  },
  {
    topic: 'Hester listens to the sermon',
    genre: 'Story',
    tier: 3,
    source: 'Nathaniel Hawthorne, The Scarlet Letter, Chapter XXII',
    sentences: [
      'By this time the preliminary prayer had been offered in the meeting-house, and the accents of the Reverend Mr. Dimmesdale were heard commencing his discourse.',
      'An irresistible feeling kept Hester near the spot.',
      'As the sacred edifice was too much thronged to admit another auditor, she took up her position close beside the scaffold of the pillory.',
      'It was in sufficient proximity to bring the whole sermon to her ears, in the shape of an indistinct but varied murmur and flow of the minister’s very peculiar voice.',
    ],
  },
  {
    topic: "Henry Clerval's last evening",
    genre: 'Story',
    tier: 3,
    source: 'Mary Shelley, Frankenstein, Chapter III',
    sentences: [
      'The day of my departure at length arrived.',
      'Clerval spent the last evening with us.',
      'He had endeavoured to persuade his father to permit him to accompany me, and to become my fellow student; but in vain.',
      'His father was a narrow-minded trader, and saw idleness and ruin in the aspirations and ambition of his son.',
      'Henry deeply felt the misfortune of being debarred from a liberal education.',
      'He said little; but when he spoke, I read in his kindling eye and in his animated glance a restrained but firm resolve, not to be chained to the miserable details of commerce.',
    ],
  },
  {
    topic: 'Justine is called on to speak',
    genre: 'Story',
    tier: 2,
    source: 'Mary Shelley, Frankenstein, Chapter VIII',
    sentences: [
      'Justine was called on for her defence.',
      'As the trial had proceeded, her countenance had altered.',
      'Surprise, horror, and misery were strongly expressed.',
      'Sometimes she struggled with her tears; but, when she was desired to plead, she collected her powers, and spoke, in an audible, although variable voice.',
    ],
  },
  {
    topic: 'A night at Chamounix',
    genre: 'Description',
    tier: 3,
    source: 'Mary Shelley, Frankenstein, Chapter IX',
    sentences: [
      'At length I arrived at the village of Chamounix.',
      'Exhaustion succeeded to the extreme fatigue both of body and of mind which I had endured.',
      'For a short space of time I remained at the window, watching the pallid lightnings that played above Mont Blanc, and listening to the rushing of the Arve, which pursued its noisy way beneath.',
      'The same lulling sounds acted as a lullaby to my too keen sensations: when I placed my head upon my pillow, sleep crept over me; I felt it as it came, and blest the giver of oblivion.',
    ],
  },
  {
    topic: 'Home to Geneva',
    genre: 'Story',
    tier: 3,
    source: 'Mary Shelley, Frankenstein, Chapter XXII',
    sentences: [
      "In about a week after the arrival of Elizabeth's letter, we returned to Geneva.",
      'The sweet girl welcomed me with warm affection; yet tears were in her eyes, as she beheld my emaciated frame and feverish cheeks.',
      'I saw a change in her also.',
      'She was thinner, and had lost much of that heavenly vivacity that had before charmed me; but her gentleness, and soft looks of compassion, made her a more fit companion for one blasted and miserable as I was.',
    ],
  },
  {
    topic: 'The long pursuit',
    genre: 'Story',
    tier: 2,
    source: 'Mary Shelley, Frankenstein, Chapter XXIV',
    sentences: [
      'I pursued him; and for many months this has been my task.',
      'Guided by a slight clue, I followed the windings of the Rhone, but vainly.',
      'The blue Mediterranean appeared; and, by a strange chance, I saw the fiend enter by night, and hide himself in a vessel bound for the Black Sea.',
      'I took my passage in the same ship; but he escaped, I know not how.',
    ],
  },
  {
    topic: 'Trapped in the ice',
    genre: 'Story',
    tier: 3,
    source: 'Mary Shelley, Frankenstein, Chapter XXIV',
    sentences: [
      'I write to you, encompassed by peril, and ignorant whether I am ever doomed to see again dear England, and the dearer friends that inhabit it.',
      'I am surrounded by mountains of ice, which admit of no escape, and threaten every moment to crush my vessel.',
      'The brave fellows, whom I have persuaded to be my companions, look towards me for aid; but I have none to bestow.',
      'There is something terribly appalling in our situation, yet my courage and hopes do not desert me.',
      'Yet it is terrible to reflect that the lives of all these men are endangered through me.',
      'If we are lost, my mad schemes are the cause.',
    ],
  },
  {
    topic: "My sister's apron",
    genre: 'Description',
    tier: 3,
    source: 'Charles Dickens, Great Expectations, Chapter 2',
    sentences: [
      'My sister, Mrs. Joe, with black hair and eyes, had such a prevailing redness of skin, that I sometimes used to wonder whether it was possible she washed herself with a nutmeg-grater instead of soap.',
      'She was tall and bony, and almost always wore a coarse apron, fastened over her figure behind with two loops, and having a square impregnable bib in front, that was stuck full of pins and needles.',
      'She made it a powerful merit in herself, and a strong reproach against Joe, that she wore this apron so much.',
      'Though I really see no reason why she should have worn it at all; or why, if she did wear it at all, she should not have taken it off every day of her life.',
    ],
  },
  {
    topic: 'One memorable day',
    genre: 'Argument',
    tier: 3,
    source: 'Charles Dickens, Great Expectations, Chapter 9',
    sentences: [
      'That was a memorable day to me, for it made great changes in me.',
      'But it is the same with any life.',
      'Imagine one selected day struck out of it, and think how different its course would have been.',
      'Pause you who read this, and think for a moment of the long chain of iron or gold, of thorns or flowers, that would never have bound you, but for the formation of the first link on one memorable day.',
    ],
  },
  {
    topic: 'The stranger at the inn',
    genre: 'Story',
    tier: 2,
    source: 'Charles Dickens, Great Expectations, Chapter 10',
    sentences: [
      'He was a secret-looking man whom I had never seen before.',
      'His head was all on one side, and one of his eyes was half shut up, as if he were taking aim at something with an invisible gun.',
      'He had a pipe in his mouth, and he took it out, and, after slowly blowing all his smoke away and looking hard at me all the time, nodded.',
      'So, I nodded, and then he nodded again, and made room on the settle beside him that I might sit down there.',
    ],
  },
  {
    topic: 'The night of the attack',
    genre: 'Story',
    tier: 3,
    source: 'Charles Dickens, Great Expectations, Chapter 16',
    sentences: [
      "Joe had been at the Three Jolly Bargemen, smoking his pipe, from a quarter after eight o'clock to a quarter before ten.",
      'While he was there, my sister had been seen standing at the kitchen door and had exchanged Good Night with a farm-labourer going home.',
      'The man could not be more particular as to the time at which he saw her (he got into dense confusion when he tried to be) than that it must have been before nine.',
      'When Joe went home at five minutes before ten, he found her struck down on the floor, and promptly called in assistance.',
      'The fire had not then burnt unusually low, nor was the snuff of the candle very long; the candle, however, had been blown out.',
    ],
  },
  {
    topic: 'Messages on a slate',
    genre: 'Story',
    tier: 3,
    source: 'Charles Dickens, Great Expectations, Chapter 16',
    sentences: [
      'Long after these constitutional powers had dispersed, my sister lay very ill in bed.',
      'Her sight was disturbed, so that she saw objects multiplied, and grasped at visionary teacups and wine-glasses instead of the realities; her hearing was greatly impaired; her memory also; and her speech was unintelligible.',
      'When, at last, she came round so far as to be helped downstairs, it was still necessary to keep my slate always by her, that she might indicate in writing what she could not indicate in speech.',
      'As she was (very bad handwriting apart) a more than indifferent speller, and as Joe was a more than indifferent reader, extraordinary complications arose between them, which I was always called in to solve.',
      'The administration of mutton instead of medicine, the substitution of Tea for Joe, and the baker for bacon, were among the mildest of my own mistakes.',
    ],
  },
  {
    topic: 'Herbert and the paper-bags',
    genre: 'Story',
    tier: 3,
    source: 'Charles Dickens, Great Expectations, Chapter 21',
    sentences: [
      'As he was fast making jam of his fruit by wrestling with the door while the paper-bags were under his arms, I begged him to allow me to hold them.',
      'He relinquished them with an agreeable smile, and combated with the door as if it were a wild beast.',
      'It yielded so suddenly at last, that he staggered back upon me, and I staggered back upon the opposite door, and we both laughed.',
      'But still I felt as if my eyes must start out of my head, and as if this must be a dream.',
    ],
  },
  {
    topic: 'Drummle and Startop',
    genre: 'Description',
    tier: 2,
    source: 'Charles Dickens, Great Expectations, Chapter 23',
    sentences: [
      'Mr. Pocket took me into the house and showed me my room; which was a pleasant one, and so furnished as that I could use it with comfort for my own private sitting-room.',
      'He then knocked at the doors of two other similar rooms, and introduced me to their occupants, by name Drummle and Startop.',
      'Drummle, an old-looking young man of a heavy order of architecture, was whistling.',
      'Startop, younger in years and appearance, was reading and holding his head, as if he thought himself in danger of exploding it with too strong a charge of knowledge.',
    ],
  },
  {
    topic: 'A footstep on the stair',
    genre: 'Story',
    tier: 3,
    source: 'Charles Dickens, Great Expectations, Chapter 39',
    sentences: [
      'What nervous folly made me start, and awfully connect it with the footstep of my dead sister, matters not.',
      'It was past in a moment, and I listened again, and heard the footstep stumble in coming on.',
      'Remembering then, that the staircase-lights were blown out, I took up my reading-lamp and went out to the stair-head.',
      'Whoever was below had stopped on seeing my lamp, for all was quiet.',
    ],
  },
  {
    topic: 'Back to the marshes',
    genre: 'Story',
    tier: 3,
    source: 'Charles Dickens, Great Expectations, Chapter 53',
    sentences: [
      'There was a melancholy wind, and the marshes were very dismal.',
      'A stranger would have found them insupportable, and even to me they were so oppressive that I hesitated, half inclined to go back.',
      'But, I knew them, and could have found my way on a far darker night, and had no excuse for returning, being there.',
      'So, having come there against my inclination, I went on against it.',
    ],
  },
  {
    topic: 'The ruins of the old house',
    genre: 'Description',
    tier: 3,
    source: 'Charles Dickens, Great Expectations, Chapter 59',
    sentences: [
      'A cold silvery mist had veiled the afternoon, and the moon was not yet up to scatter it.',
      'But, the stars were shining beyond the mist, and the moon was coming, and the evening was not dark.',
      'I could trace out where every part of the old house had been, and where the brewery had been, and where the gates, and where the casks.',
      'I had done so, and was looking along the desolate garden-walk, when I beheld a solitary figure in it.',
    ],
  },
  {
    topic: 'Waking after the red-room',
    genre: 'Story',
    tier: 3,
    source: 'Charlotte Brontë, Jane Eyre, Chapter 3',
    sentences: [
      'The next thing I remember is, waking up with a feeling as if I had had a frightful nightmare, and seeing before me a terrible red glare, crossed with thick black bars.',
      'I heard voices, too, speaking with a hollow sound, and as if muffled by a rush of wind or water: agitation, uncertainty, and an all-predominating sense of terror confused my faculties.',
      'Ere long, I became aware that some one was handling me; lifting me up and supporting me in a sitting posture, and that more tenderly than I had ever been raised or upheld before.',
      'I rested my head against a pillow or an arm, and felt easy.',
    ],
  },
  {
    topic: 'Sundays at Lowood',
    genre: 'Recount',
    tier: 2,
    source: 'Charlotte Brontë, Jane Eyre, Chapter 7',
    sentences: [
      'Sundays were dreary days in that wintry season.',
      'We had to walk two miles to Brocklebridge Church, where our patron officiated.',
      'We set out cold, we arrived at church colder: during the morning service we became almost paralysed.',
      'It was too far to return to dinner, and an allowance of cold meat and bread, in the same penurious proportion observed in our ordinary meals, was served round between the services.',
    ],
  },
  {
    topic: 'The night before leaving Lowood',
    genre: 'Story',
    tier: 3,
    source: 'Charlotte Brontë, Jane Eyre, Chapter 10',
    sentences: [
      'The box was corded, the card nailed on.',
      'In half-an-hour the carrier was to call for it to take it to Lowton, whither I myself was to repair at an early hour the next morning to meet the coach.',
      'I had brushed my black stuff travelling-dress, prepared my bonnet, gloves, and muff; sought in all my drawers to see that no article was left behind; and now having nothing more to do, I sat down and tried to rest.',
      'I could not; though I had been on foot all day, I could not now repose an instant; I was too much excited.',
      'A phase of my life was closing to-night, a new one opening to-morrow: impossible to slumber in the interval; I must watch feverishly while the change was being accomplished.',
    ],
  },
  {
    topic: 'A laugh in the corridor',
    genre: 'Story',
    tier: 3,
    source: 'Charlotte Brontë, Jane Eyre, Chapter 11',
    sentences: [
      'While I paced softly on, the last sound I expected to hear in so still a region, a laugh, struck my ear.',
      'It was a curious laugh; distinct, formal, mirthless.',
      'I stopped: the sound ceased, only for an instant; it began again, louder: for at first, though distinct, it was very low.',
      'It passed off in a clamorous peal that seemed to wake an echo in every lonely chamber; though it originated but in one, and I could have pointed out the door whence the accents issued.',
    ],
  },
  {
    topic: 'Waiting for dawn',
    genre: 'Story',
    tier: 3,
    source: 'Charlotte Brontë, Jane Eyre, Chapter 20',
    sentences: [
      'The candle, wasted at last, went out; as it expired, I perceived streaks of grey light edging the window curtains: dawn was then approaching.',
      'Presently I heard Pilot bark far below, out of his distant kennel in the courtyard: hope revived.',
      'Nor was it unwarranted: in five minutes more the grating key, the yielding lock, warned me my watch was relieved.',
      'It could not have lasted more than two hours: many a week has seemed shorter.',
    ],
  },
  {
    topic: 'A coach on the road',
    genre: 'Story',
    tier: 2,
    source: 'Charlotte Brontë, Jane Eyre, Chapter 27',
    sentences: [
      'When I got there, I was forced to sit to rest me under the hedge; and while I sat, I heard wheels, and saw a coach come on.',
      'I stood up and lifted my hand; it stopped.',
      'I asked where it was going: the driver named a place a long way off, and where I was sure Mr. Rochester had no connections.',
      'I asked for what sum he would take me there; he said thirty shillings; I answered I had but twenty; well, he would try to make it do.',
      'He further gave me leave to get into the inside, as the vehicle was empty: I entered, was shut in, and it rolled on its way.',
    ],
  },
  {
    topic: 'Set down at Whitcross',
    genre: 'Story',
    tier: 3,
    source: 'Charlotte Brontë, Jane Eyre, Chapter 28',
    sentences: [
      'Two days are passed.',
      'It is a summer evening; the coachman has set me down at a place called Whitcross; he could take me no farther for the sum I had given, and I was not possessed of another shilling in the world.',
      'The coach is a mile off by this time; I am alone.',
      'At this moment I discover that I forgot to take my parcel out of the pocket of the coach, where I had placed it for safety; there it remains, there it must remain; and now, I am absolutely destitute.',
    ],
  },
  {
    topic: 'St John preaches',
    genre: 'Story',
    tier: 2,
    source: 'Charlotte Brontë, Jane Eyre, Chapter 30',
    sentences: [
      'Incommunicative as he was, some time elapsed before I had an opportunity of gauging his mind.',
      'I first got an idea of its calibre when I heard him preach in his own church at Morton.',
      'I wish I could describe that sermon: but it is past my power.',
      'I cannot even render faithfully the effect it produced on me.',
    ],
  },
  {
    topic: 'Diana and Mary are married',
    genre: 'Recount',
    tier: 3,
    source: 'Charlotte Brontë, Jane Eyre, Chapter 38',
    sentences: [
      'Diana and Mary Rivers are both married: alternately, once every year, they come to see us, and we go to see them.',
      'Diana’s husband is a captain in the navy, a gallant officer and a good man.',
      'Mary’s is a clergyman, a college friend of her brother’s, and, from his attainments and principles, worthy of the connection.',
      'Both Captain Fitzjames and Mr. Wharton love their wives, and are loved by them.',
    ],
  },
  {
    topic: 'Lydia reminds Mr Bingley of the ball',
    genre: 'Description',
    tier: 3,
    source: 'Jane Austen, Pride and Prejudice, Chapter 9',
    sentences: [
      'Lydia was a stout, well-grown girl of fifteen, with a fine complexion and good-humoured countenance; a favourite with her mother, whose affection had brought her into public at an early age.',
      "She had high animal spirits, and a sort of natural self-consequence, which the attentions of the officers, to whom her uncle's good dinners and her own easy manners recommended her, had increased into assurance.",
      'She was very equal therefore to address Mr. Bingley on the subject of the ball, and abruptly reminded him of his promise; adding, that it would be the most shameful thing in the world if he did not keep it.',
      "His answer to this sudden attack was delightful to their mother's ear.",
    ],
  },
  {
    topic: "Mr Darcy's eyes",
    genre: 'Story',
    tier: 3,
    source: 'Jane Austen, Pride and Prejudice, Chapter 10',
    sentences: [
      "Mrs. Hurst sang with her sister, and while they were thus employed Elizabeth could not help observing as she turned over some music books that lay on the instrument, how frequently Mr. Darcy's eyes were fixed on her.",
      'She hardly knew how to suppose that she could be an object of admiration to so great a man; and yet that he should look at her because he disliked her, was still more strange.',
      'She could only imagine however at last, that she drew his notice because there was a something about her more wrong and reprehensible, according to his ideas of right, than in any other person present.',
      'The supposition did not pain her.',
      'She liked him too little to care for his approbation.',
    ],
  },
  {
    topic: 'Mr Collins stays on',
    genre: 'Story',
    tier: 2,
    source: 'Jane Austen, Pride and Prejudice, Chapter 21',
    sentences: [
      "The morrow produced no abatement of Mrs. Bennet's ill humour or ill health.",
      'Mr. Collins was also in the same state of angry pride.',
      'Elizabeth had hoped that his resentment might shorten his visit, but his plan did not appear in the least affected by it.',
      'He was always to have gone on Saturday, and to Saturday he still meant to stay.',
    ],
  },
  {
    topic: 'Waiting for a son',
    genre: 'Explanation',
    tier: 3,
    source: 'Jane Austen, Pride and Prejudice, Chapter 50',
    sentences: [
      'When first Mr. Bennet had married, economy was held to be perfectly useless; for, of course, they were to have a son.',
      'This son was to join in cutting off the entail, as soon as he should be of age, and the widow and younger children would by that means be provided for.',
      "Five daughters successively entered the world, but yet the son was to come; and Mrs. Bennet, for many years after Lydia's birth, had been certain that he would.",
      'This event had at last been despaired of, but it was then too late to be saving.',
      "Mrs. Bennet had no turn for economy, and her husband's love of independence had alone prevented their exceeding their income.",
    ],
  },
  {
    topic: 'Where will Mr Bingley sit?',
    genre: 'Story',
    tier: 3,
    source: 'Jane Austen, Pride and Prejudice, Chapter 54',
    sentences: [
      'On Tuesday there was a large party assembled at Longbourn; and the two, who were most anxiously expected, to the credit of their punctuality as sportsmen, were in very good time.',
      'When they repaired to the dining-room, Elizabeth eagerly watched to see whether Bingley would take the place, which, in all their former parties, had belonged to him, by her sister.',
      'Her prudent mother, occupied by the same ideas, forbore to invite him to sit by herself.',
      'On entering the room, he seemed to hesitate; but Jane happened to look round, and happened to smile: it was decided.',
      'He placed himself by her.',
    ],
  },
  {
    topic: 'The Thing in the sand',
    genre: 'Description',
    tier: 3,
    source: 'H. G. Wells, The War of the Worlds, Book One, Chapter II',
    sentences: [
      'The Thing itself lay almost entirely buried in sand, amidst the scattered splinters of a fir tree it had shivered to fragments in its descent.',
      'The uncovered part had the appearance of a huge cylinder, caked over and its outline softened by a thick scaly dun-coloured incrustation.',
      'It had a diameter of about thirty yards.',
      'He approached the mass, surprised at the size and more so at the shape, since most meteorites are rounded more or less completely.',
      'It was, however, still so hot from its flight through the air as to forbid his near approach.',
      'A stirring noise within its cylinder he ascribed to the unequal cooling of its surface; for at that time it had not occurred to him that it might be hollow.',
    ],
  },
  {
    topic: 'Henderson hears the news',
    genre: 'Story',
    tier: 2,
    source: 'H. G. Wells, The War of the Worlds, Book One, Chapter II',
    sentences: [
      'Ogilvy told him all that he had seen.',
      'Henderson was a minute or so taking it in.',
      'Then he dropped his spade, snatched up his jacket, and came out into the road.',
      'The two men hurried back at once to the common, and found the cylinder still lying in the same position.',
      'But now the sounds inside had ceased, and a thin circle of bright metal showed between the top and the body of the cylinder.',
      'Air was either entering or escaping at the rim with a thin, sizzling sound.',
    ],
  },
  {
    topic: 'A day of suspense',
    genre: 'Recount',
    tier: 2,
    source: 'H. G. Wells, The War of the Worlds, Book One, Chapter IX',
    sentences: [
      'Saturday lives in my memory as a day of suspense.',
      'It was a day of lassitude too, hot and close, with, I am told, a rapidly fluctuating barometer.',
      'I had slept but little, though my wife had succeeded in sleeping, and I rose early.',
      'I went into my garden before breakfast and stood listening, but towards the common there was nothing stirring but a lark.',
    ],
  },
  {
    topic: 'Through the storm',
    genre: 'Story',
    tier: 3,
    source: 'H. G. Wells, The War of the Worlds, Book One, Chapter X',
    sentences: [
      'I had a vague idea of going on to my own house, and that was as much motive as I had.',
      'I staggered through the trees, fell into a ditch and bruised my knees against a plank, and finally splashed out into the lane that ran down from the College Arms.',
      'I say splashed, for the storm water was sweeping the sand down the hill in a muddy torrent.',
      'There in the darkness a man blundered into me and sent me reeling back.',
    ],
  },
  {
    topic: 'What are the machines?',
    genre: 'Story',
    tier: 3,
    source: 'H. G. Wells, The War of the Worlds, Book One, Chapter XI',
    sentences: [
      'They seemed amazingly busy.',
      'I began to ask myself what they could be.',
      'Were they intelligent mechanisms?',
      'Such a thing I felt was impossible.',
      'Or did a Martian sit within each, ruling, directing, using, much as a man’s brain sits and rules in his body?',
      'I began to compare the things to human machines, to ask myself for the first time in my life how an ironclad or a steam engine would seem to an intelligent lower animal.',
    ],
  },
  {
    topic: 'A shot with no explosion',
    genre: 'Story',
    tier: 3,
    source: 'H. G. Wells, The War of the Worlds, Book One, Chapter XV',
    sentences: [
      'I was so excited by these heavy minute-guns following one another that I so far forgot my personal safety and my scalded hands as to clamber up into the hedge and stare towards Sunbury.',
      'As I did so a second report followed, and a big projectile hurtled overhead towards Hounslow.',
      'I expected at least to see smoke or fire, or some such evidence of its work.',
      'But all I saw was the deep blue sky above, with one solitary star, and the white mist spreading wide and low beneath.',
      'And there had been no crash, no answering explosion.',
      'The silence was restored; the minute lengthened to three.',
    ],
  },
  {
    topic: "Watson's wounded pride",
    genre: 'Story',
    tier: 3,
    source: 'Arthur Conan Doyle, The Sign of Four, Chapter I',
    sentences: [
      'I was annoyed at this criticism of a work which had been specially designed to please him.',
      'I confess, too, that I was irritated by the egotism which seemed to demand that every line of my pamphlet should be devoted to his own special doings.',
      'More than once during the years that I had lived with him in Baker Street I had observed that a small vanity underlay my companion’s quiet and didactic manner.',
      'I made no remark, however, but sat nursing my wounded leg.',
      'I had a Jezail bullet through it some time before, and, though it did not prevent me from walking, it ached wearily at every change of the weather.',
    ],
  },
  {
    topic: 'What Watson leaves out',
    genre: 'Story',
    tier: 3,
    source: 'Arthur Conan Doyle, The Sign of Four, Chapter IX',
    sentences: [
      'I took our mongrel accordingly, and left him, together with a half-sovereign, at the old naturalist’s in Pinchin Lane.',
      'At Camberwell I found Miss Morstan a little weary after her night’s adventures, but very eager to hear the news.',
      'Mrs. Forrester, too, was full of curiosity.',
      'I told them all that we had done, suppressing, however, the more dreadful parts of the tragedy.',
      'Thus, although I spoke of Mr. Sholto’s death, I said nothing of the exact manner and method of it.',
      'With all my omissions, however, there was enough to startle and amaze them.',
    ],
  },
  {
    topic: 'A late visitor',
    genre: 'Story',
    tier: 2,
    source: 'Arthur Conan Doyle, The Sign of Four, Chapter XI',
    sentences: [
      'They landed me at Vauxhall, with my heavy iron box, and with a bluff, genial inspector as my companion.',
      'A quarter of an hour’s drive brought us to Mrs. Cecil Forrester’s.',
      'The servant seemed surprised at so late a visitor.',
      'Mrs. Cecil Forrester was out for the evening, she explained, and likely to be very late.',
      'Miss Morstan, however, was in the drawing-room: so to the drawing-room I went, box in hand, leaving the obliging inspector in the cab.',
    ],
  },
  {
    topic: 'Gatsby runs down like a clock',
    genre: 'Story',
    tier: 3,
    source: 'F. Scott Fitzgerald, The Great Gatsby, Chapter V',
    sentences: [
      'He had passed visibly through two states and was entering upon a third.',
      'After his embarrassment and his unreasoning joy he was consumed with wonder at her presence.',
      'He had been full of the idea so long, dreamed it right through to the end, waited with his teeth set, so to speak, at an inconceivable pitch of intensity.',
      'Now, in the reaction, he was running down like an overwound clock.',
    ],
  },
  {
    topic: 'The green light',
    genre: 'Story',
    tier: 3,
    source: 'F. Scott Fitzgerald, The Great Gatsby, Chapter V',
    sentences: [
      'Daisy put her arm through his abruptly, but he seemed absorbed in what he had just said.',
      'Possibly it had occurred to him that the colossal significance of that light had now vanished forever.',
      'Compared to the great distance that had separated him from Daisy it had seemed very near to her, almost touching her.',
      'It had seemed as close as a star to the moon.',
      'Now it was again a green light on a dock.',
      'His count of enchanted objects had diminished by one.',
    ],
  },
  // ── The site's own paragraphs added for depth (24 October 2026) ──────────
  {
    topic: 'Should the school day start later for teenagers?',
    genre: 'Argument',
    tier: 3,
    sentences: [
      'During the teenage years, the body clock shifts, so most teenagers begin to feel sleepy later at night than they did as children.',
      'A school that starts at half past eight then asks them to get up while their bodies still expect sleep.',
      'The result is a class of pupils who are present but not fully awake.',
      'Starting the day even half an hour later would let that clock and the timetable work together.',
      'It would cost no teaching time at all if the day simply ended half an hour later too.',
    ],
  },
  {
    topic: 'Is it worth learning a second language?',
    genre: 'Argument',
    tier: 2,
    sentences: [
      'When my cousin moved to Spain, she spoke only English for her first few months there.',
      'She learnt enough to buy bread and catch a bus, but she could not join in the jokes at the dinner table.',
      'That changed once she could follow conversations in Spanish.',
      "Her story shows what a second language really gives you: a way into other people's lives, not just a list of words.",
      'That alone makes learning one worth the effort.',
    ],
  },
  {
    topic: 'Should cooking be taught in every year at school?',
    genre: 'Argument',
    tier: 2,
    sentences: [
      'Plenty of teenagers can solve an equation but cannot cook a simple, healthy meal.',
      'That gap matters, because a person who cannot cook has to rely on ready meals and takeaways.',
      'Those usually cost more than cooking from scratch, and they are often less healthy too.',
      'A cooking lesson in every year of school would close the gap at very little cost.',
      'It might even save pupils money for the rest of their lives.',
    ],
  },
  {
    topic: 'Should cars be kept out of town centres?',
    genre: 'Argument',
    tier: 3,
    sentences: [
      'On a Saturday morning, our high street is full of shoppers stepping into the road to get past one another.',
      'Every few minutes, a car squeezes through and the crowd has to scatter.',
      'Closing the street to traffic would give that space back to the people who use it most.',
      'Shop owners often fear that customers who cannot park outside will go elsewhere.',
      'Their fear is understandable, but a car park at the edge of the centre and a short walk would keep those customers coming.',
    ],
  },
  {
    topic: 'Are school trips worth the cost?',
    genre: 'Argument',
    tier: 2,
    sentences: [
      'A day at a castle costs a school far more than a day in its own classrooms.',
      'Yet pupils who have climbed the walls and stood in the great hall remember the history long after the trip.',
      'That memory is what a textbook struggles to give.',
      'The cost could be shared, too, so that no family is asked to pay more than it can afford.',
      'With that one change, trips would be worth every penny.',
    ],
  },
  {
    topic: 'Should pupils choose their own books in English lessons?',
    genre: 'Argument',
    tier: 3,
    sentences: [
      'Pupils who choose their own books often read more than those who are always told what to read.',
      'That is a strong argument for letting them choose.',
      'A class that only ever reads its own choices, though, may never meet a book that is difficult at first and rewarding later.',
      'The best lessons would therefore mix the two kinds of reading.',
      'That mix might mean one shared book each term alongside books that pupils pick for themselves.',
    ],
  },
  {
    topic: 'Why the sea tastes salty',
    genre: 'Explanation',
    tier: 2,
    sentences: [
      'Rivers taste fresh, yet the sea they flow into is salty.',
      'Much of the salt comes from rocks on land, which rain slowly wears away.',
      'As it does so, the rain dissolves tiny amounts of the minerals in them.',
      "Rivers carry these dissolved minerals to the sea, where the sun's heat turns some of the water into vapour.",
      'The minerals cannot rise with the vapour, so over millions of years they have built up and made the oceans salty.',
    ],
  },
  {
    topic: 'How a bat hunts in the dark',
    genre: 'Explanation',
    tier: 2,
    sentences: [
      'Bats that hunt insects at night use a skill called echolocation.',
      'As a bat flies, it makes high-pitched calls, most of them too high for people to hear.',
      'When a call hits a moth, part of the sound bounces back as an echo.',
      'From how quickly that echo returns, the bat can tell how far away the moth is.',
      'It can then swoop and catch the moth without ever needing to see it.',
    ],
  },
  {
    topic: 'Why we have leap years',
    genre: 'Explanation',
    tier: 2,
    sentences: [
      'The Earth takes about 365 and a quarter days to travel once round the Sun.',
      'A calendar year, however, has only 365 days.',
      "Each year, the calendar therefore falls about a quarter of a day behind the Earth's journey.",
      'Left alone, those quarters would add up, and the seasons would slowly drift through the months.',
      'Adding an extra day, 29 February, in most years that divide by four keeps the calendar in step.',
    ],
  },
  {
    topic: 'How a compass works',
    genre: 'Explanation',
    tier: 2,
    sentences: [
      'Deep inside the Earth, the movement of molten iron makes the whole planet behave like a giant magnet.',
      'A compass needle is a much smaller magnet, balanced so that it can turn freely.',
      "Because it is free to turn, the needle lines up with the Earth's magnetic field.",
      'One end of it therefore always points roughly north, wherever you stand.',
      'Sailors and walkers have used this to find their way for hundreds of years.',
    ],
  },
  {
    topic: 'Why bread rises',
    genre: 'Explanation',
    tier: 2,
    sentences: [
      'Most bread dough is made from flour, water and a tiny living fungus called yeast.',
      'While the dough rests in a warm place, the yeast feeds on sugars in the flour.',
      'As it feeds, it gives off bubbles of carbon dioxide gas.',
      'Stretchy strands of gluten, formed when the dough is kneaded, trap these bubbles.',
      'The trapped gas makes the dough swell, and the heat of the oven later sets it into a light loaf.',
    ],
  },
  {
    topic: 'Why the Moon seems to change shape',
    genre: 'Explanation',
    tier: 3,
    sentences: [
      'The Moon makes no light of its own: it shines because sunlight falls on it.',
      'At any moment, the half facing the Sun is lit and the other half is dark.',
      'As the Moon travels round the Earth each month, we see different amounts of that lit half.',
      'When the Moon passes between the Earth and the Sun, its lit half faces away from us and we can hardly see it.',
      'About two weeks later, on the far side of the Earth, it shows us the whole of its lit face as a full moon.',
    ],
  },
  {
    topic: 'How sound travels',
    genre: 'Explanation',
    tier: 2,
    sentences: [
      'When you pluck a guitar string, it moves rapidly backwards and forwards.',
      'Each movement pushes on the air beside the string, squeezing it together and then letting it spread out.',
      'These squeezes pass from one part of the air to the next, like a ripple spreading across a pond.',
      'When they reach your ear, they make your eardrum vibrate in the same pattern.',
      'Your brain turns those vibrations into the sound you hear.',
    ],
  },
  {
    topic: 'Why a steel ship floats',
    genre: 'Explanation',
    tier: 3,
    sentences: [
      'When an object is lowered into water, it pushes some of the water out of the way.',
      'The water pushes back with an upward force, and the more water is pushed aside, the stronger that force is.',
      'An object floats if that upward push can match its weight before the object is completely under the water.',
      'That is why a steel ship floats while a steel bolt sinks.',
      "The ship's hollow shape pushes aside a huge amount of water for its weight, but the solid bolt cannot.",
    ],
  },
  {
    topic: 'How a camel survives in the desert',
    genre: 'Explanation',
    tier: 2,
    sentences: [
      'Camels can travel for days across the desert without drinking.',
      'Many people think their humps are full of water, but they are full of fat.',
      "When food is scarce, a camel's body breaks down this fat for energy.",
      'The camel is also careful with water, losing very little in its droppings.',
      'Together, these two tricks let it survive where most large animals would soon die.',
    ],
  },
  {
    topic: 'The day our class hatched chicks',
    genre: 'Recount',
    tier: 1,
    sentences: [
      'Our science teacher arrived one Monday carrying an incubator with six eggs inside.',
      'For three weeks, we took turns checking that the eggs were warm enough.',
      'Then, during a maths lesson, someone noticed a tiny crack in one of the shells.',
      'Nobody could concentrate after that.',
      'By home time, five fluffy chicks were cheeping under the lamp, and the sixth egg had finally begun to wobble.',
    ],
  },
  {
    topic: 'Learning to swim at eleven',
    genre: 'Recount',
    tier: 1,
    sentences: [
      'I was eleven before I could swim a single length.',
      'Most of my friends had learnt years before, so I dreaded every school swimming lesson.',
      'My mum noticed and booked me some private lessons at the leisure centre.',
      'The instructor there never once laughed at how much I splashed.',
      'Six weeks later, I swam my first length while she walked beside me along the edge of the pool.',
    ],
  },
  {
    topic: 'The school play that nearly went wrong',
    genre: 'Recount',
    tier: 1,
    sentences: [
      'Ten minutes before the curtain went up, Jamal realised he had left his costume on the bus.',
      'Our drama teacher did not panic.',
      'She borrowed a dressing gown from the caretaker and a paper crown from the reception class.',
      'Dressed like that, Jamal looked more like a sleepy king than a fierce one.',
      'The audience loved it, and that crown is still pinned to the drama room wall.',
    ],
  },
  {
    topic: "Our street's snow day",
    genre: 'Recount',
    tier: 1,
    sentences: [
      'The snow started falling just after midnight.',
      'By morning, it was deep enough to cover the wheels of the parked cars.',
      'School was closed, so every child on our street was outside before breakfast.',
      'We built a snowman so tall that we needed a stepladder to put on its hat.',
      'When it finally melted three days later, its carrot nose was the last thing left on the pavement.',
    ],
  },
  {
    topic: 'A Saturday at the food bank',
    genre: 'Recount',
    tier: 2,
    sentences: [
      'Last December, my dad and I spent a Saturday helping at our local food bank.',
      'Our job was to sort the donations into tins, packets and fresh food.',
      'It sounded simple, but some people had given things that were long past their dates.',
      "Those had to be thrown away, which felt like a waste of someone's kindness.",
      'By the end of the day, though, we had packed sixty bags for families who needed them.',
    ],
  },
  {
    topic: 'The day I met my favourite author',
    genre: 'Recount',
    tier: 1,
    sentences: [
      'When I heard that my favourite author was visiting the town library, I counted down the days.',
      'On the morning of the visit, I queued for an hour clutching my battered copy of her first book.',
      'She noticed how worn it was and asked how many times I had read it.',
      'When I told her eleven, she laughed and wrote "To my most loyal reader" inside the cover.',
      'That book now sits on my shelf, and nobody else is allowed to borrow it.',
    ],
  },
  {
    topic: 'Our class garden',
    genre: 'Recount',
    tier: 1,
    sentences: [
      'In September, our class was given a small, weedy patch of ground behind the science block.',
      'We spent the first few weeks just pulling up nettles and dandelions.',
      'Then we planted bulbs, wildflower seeds and two small apple trees.',
      'By June, the patch was so full of colour that other classes came to look.',
      'This year, the apple trees gave us our first apples, enough for one each.',
    ],
  },
  {
    topic: 'The note in the library book',
    genre: 'Story',
    tier: 2,
    sentences: [
      'Halfway through the book, Priya found a folded note tucked between two pages.',
      'It was written in pencil, in handwriting so old-fashioned that it took her a minute to read.',
      'It told her to turn to page 112.',
      'There, someone had underlined a single sentence about a garden hidden behind a wall.',
      'Priya looked up from the library table at the overgrown wall at the end of the playground.',
    ],
  },
  {
    topic: "The lighthouse keeper's long night",
    genre: 'Story',
    tier: 2,
    sentences: [
      'For thirty years, Mr Penhale had climbed the hundred and twelve steps of the lighthouse every evening.',
      'On the night of the great storm, the lamp at the top flickered and went out.',
      'He knew that a fishing boat was still out beyond the rocks.',
      'With the wind screaming at the windows, he lit an old oil lamp by hand and held it up to the glass.',
      "At dawn, the boat's crew climbed the cliff path to thank him.",
    ],
  },
  {
    topic: 'The wrong umbrella',
    genre: 'Story',
    tier: 1,
    sentences: [
      'When the rain started, Tom grabbed the nearest umbrella from the stand by the café door.',
      'It was only when he opened it outside that he saw it was covered in pink flamingos.',
      'His own umbrella, plain and black, was still in the stand.',
      'Before he could go back for it, a girl came running out of the café, waving his black umbrella.',
      "They swapped umbrellas, laughing, under the café's dripping sign.",
    ],
  },
  {
    topic: 'The fox at the bins',
    genre: 'Story',
    tier: 1,
    sentences: [
      'Every night at eleven, a clatter came from the bins behind our flats.',
      'Dad was sure it was teenagers, so one night he waited by the window with a torch.',
      'When the clatter began, he switched on the torch.',
      'Caught in the beam was a young fox with a crisp packet stuck on its nose.',
      'Since then, Dad has called it Crispin and keeps the bin lid shut.',
    ],
  },
  {
    topic: 'The message in the snow',
    genre: 'Story',
    tier: 2,
    sentences: [
      'Eli was the first awake on the morning after the snowfall.',
      'From his bedroom window, he could see that someone had trampled letters into the snow on the field.',
      'They spelt out his name and the words "Look under the bench".',
      'Pulling his coat over his pyjamas, he ran downstairs and across the field.',
      "Under the bench was a sledge with a red ribbon round it and a label in his grandfather's writing.",
    ],
  },
  {
    topic: 'The last bus',
    genre: 'Story',
    tier: 2,
    sentences: [
      'Amira reached the bus stop just as the last bus pulled away.',
      'Her phone battery had died an hour earlier, so she could not call home.',
      'She was still working out what to do when a car slowed beside her.',
      'Its window wound down, and she saw her neighbour, Mrs Okoro, smiling at her.',
      'Twenty minutes later, Amira was home, warm and very grateful.',
    ],
  },
  {
    topic: 'The harbour at dawn',
    genre: 'Description',
    tier: 2,
    sentences: [
      'At dawn, the harbour was so still that the boats seemed to be painted on the water.',
      'Their reflections were broken only when a gull landed among them.',
      'Beyond the boats, the old stone wall curved out to a small white lighthouse.',
      'Behind it, the sky was turning from grey to pale gold.',
      'Then the first fishing boat started its engine, and the stillness was gone.',
    ],
  },
  {
    topic: 'The market before it opens',
    genre: 'Description',
    tier: 2,
    sentences: [
      'An hour before the market opened, the square was full of half-built stalls.',
      'Their owners moved between them, carrying crates of apples and buckets of flowers.',
      'One man was stacking oranges into a pyramid taller than his little daughter.',
      'She was trying to add one more orange to the top without being noticed.',
      'When it rolled off and bounced across the cobbles, both of them burst out laughing.',
    ],
  },
  {
    topic: 'An abandoned railway station',
    genre: 'Description',
    tier: 3,
    sentences: [
      'Nobody had waited on the platform at Ashby Road for over forty years.',
      'Weeds had pushed up between its paving stones, and ivy covered the ticket office window.',
      'Inside, through a gap in the leaves, a timetable could still be seen pinned to the wall.',
      'The trains it listed had stopped running before most of the village was born.',
      'The last of them, the twenty past four to Leicester, was still printed at the bottom.',
    ],
  },
  {
    topic: "Grandad's shed",
    genre: 'Description',
    tier: 1,
    sentences: [
      "Grandad's shed stands at the very bottom of the garden, half hidden by a holly bush.",
      'Inside, every tool hangs on its own nail, with its outline painted on the wall behind it.',
      'That way, he can see at a glance which one is missing.',
      'Usually it is the trowel, because I have borrowed it again.',
      'He always pretends to be cross, but he keeps a spare one in his coat pocket.',
    ],
  },
]

/** "Choose the connective" questions (24 October 2026). */
export const CONNECTIVE_BANK: ConnectiveGap[] = [
  {
    kind: 'connective',
    text: 'The plan looked perfect. ___, nobody had checked the tide.',
    answer: 'However',
    options: ['However', 'Therefore', 'Furthermore', 'For example'],
    link: 'Contrast',
    tier: 1,
  },
  {
    kind: 'connective',
    text: 'Mia had trained every morning for a year. ___, she won the county race by ten seconds.',
    answer: 'As a result',
    options: ['As a result', 'However', 'For example', 'Meanwhile'],
    link: 'Result',
    tier: 1,
  },
  {
    kind: 'connective',
    text: 'Our class wants to raise money for the animal shelter. ___, we could hold a cake sale at lunchtime.',
    answer: 'For example',
    options: ['For example', 'However', 'Instead', 'Finally'],
    link: 'Example',
    tier: 1,
  },
  {
    kind: 'connective',
    text: 'Cycling to school keeps you fit. ___, it costs nothing.',
    answer: 'In addition',
    options: ['In addition', 'However', 'For example', 'Meanwhile'],
    link: 'Addition',
    tier: 1,
  },
  {
    kind: 'connective',
    text: 'The storm brought down the power lines. ___, the whole village was without electricity for two days.',
    answer: 'As a result',
    options: ['As a result', 'However', 'For instance', 'Similarly'],
    link: 'Result',
    tier: 1,
  },
  {
    kind: 'connective',
    text: 'Ravi searched his bag, his pockets and his locker for his phone. ___, he found it in the fridge, next to the milk.',
    answer: 'Eventually',
    options: ['Eventually', 'Therefore', 'Similarly', 'For example'],
    link: 'Time',
    tier: 1,
  },
  {
    kind: 'connective',
    text: 'Penguins cannot fly. ___, they are superb swimmers.',
    answer: 'However',
    options: ['However', 'For example', 'Similarly', 'Meanwhile'],
    link: 'Contrast',
    tier: 1,
  },
  {
    kind: 'connective',
    text: 'The museum is closed on Mondays. ___, we will go on Tuesday.',
    answer: 'Therefore',
    options: ['Therefore', 'However', 'For example', 'In addition'],
    link: 'Result',
    tier: 1,
  },
  {
    kind: 'connective',
    text: 'Sam was too nervous to sing in the school concert. ___, he played the piano while the others sang.',
    answer: 'Instead',
    options: ['Instead', 'Furthermore', 'For example', 'Similarly'],
    link: 'Replacement',
    tier: 1,
  },
  {
    kind: 'connective',
    text: 'Wear your coat and gloves today. ___, you will be freezing at the bus stop.',
    answer: 'Otherwise',
    options: ['Otherwise', 'As a result', 'For example', 'Similarly'],
    link: 'Condition',
    tier: 1,
  },
  {
    kind: 'connective',
    text: 'Many animals sleep through the winter. ___, hedgehogs hibernate from about November to March.',
    answer: 'For example',
    options: ['For example', 'However', 'Therefore', 'Meanwhile'],
    link: 'Example',
    tier: 1,
  },
  {
    kind: 'connective',
    text: 'The first half of the match was dull. ___, the second half was full of goals.',
    answer: 'In contrast',
    options: ['In contrast', 'As a result', 'For example', 'Furthermore'],
    link: 'Contrast',
    tier: 1,
  },
  {
    kind: 'connective',
    text: 'Lily practised her lines every evening. ___, her brother rehearsed his guitar solo for the talent show.',
    answer: 'Meanwhile',
    options: ['Meanwhile', 'Therefore', 'For example', 'Instead'],
    link: 'Time',
    tier: 2,
  },
  {
    kind: 'connective',
    text: 'Bats are not blind. ___, many can see quite well.',
    answer: 'In fact',
    options: ['In fact', 'However', 'For example', 'Meanwhile'],
    link: 'Emphasis',
    tier: 2,
  },
  {
    kind: 'connective',
    text: 'Most birds build their nests in trees or bushes. ___, puffins dig burrows in the grassy tops of cliffs.',
    answer: 'By contrast',
    options: ['By contrast', 'As a result', 'For instance', 'Furthermore'],
    link: 'Contrast',
    tier: 2,
  },
  {
    kind: 'connective',
    text: 'The library has a quiet room for studying. ___, it lends laptops to pupils who need them.',
    answer: 'In addition',
    options: ['In addition', 'However', 'For example', 'Instead'],
    link: 'Addition',
    tier: 1,
  },
  {
    kind: 'connective',
    text: 'Our team trained hard all season. ___, we lost every single match.',
    answer: 'Nevertheless',
    options: ['Nevertheless', 'Therefore', 'Furthermore', 'For example'],
    link: 'Concession',
    tier: 2,
  },
  {
    kind: 'connective',
    text: 'The road through the valley was flooded. ___, we had to take the long way round over the hills.',
    answer: 'Consequently',
    options: ['Consequently', 'However', 'Similarly', 'For instance'],
    link: 'Result',
    tier: 2,
  },
  {
    kind: 'connective',
    text: 'Tom loves animals, especially dogs. ___, his sister prefers cats.',
    answer: 'On the other hand',
    options: ['On the other hand', 'As a result', 'For example', 'In addition'],
    link: 'Contrast',
    tier: 1,
  },
  {
    kind: 'connective',
    text: 'The tickets cost forty pounds each. ___, the concert sold out in ten minutes.',
    answer: 'Even so',
    options: ['Even so', 'As a result', 'For example', 'Similarly'],
    link: 'Concession',
    tier: 2,
  },
  {
    kind: 'connective',
    text: 'Owls hunt at night. ___, they have huge eyes that gather as much light as possible.',
    answer: 'For this reason',
    options: ['For this reason', 'However', 'For example', 'Meanwhile'],
    link: 'Result',
    tier: 2,
  },
  {
    kind: 'connective',
    text: 'The new skate park opened in May. ___, it has become the busiest place in town.',
    answer: 'Since then',
    options: ['Since then', 'However', 'For example', 'Instead'],
    link: 'Time',
    tier: 2,
  },
  {
    kind: 'connective',
    text: 'I was sure I had locked the front door. ___ when we got home, it was wide open.',
    answer: 'Yet',
    options: ['Yet', 'Also', 'Or', 'Because'],
    link: 'Contrast',
    tier: 1,
  },
  {
    kind: 'connective',
    text: 'The film was two hours long. ___ it felt like twenty minutes.',
    answer: 'Yet',
    options: ['Yet', 'So', 'Also', 'Then'],
    link: 'Contrast',
    tier: 1,
  },
  {
    kind: 'connective',
    text: 'Sound travels through air at about 340 metres a second. ___, light travels almost a million times faster.',
    answer: 'In comparison',
    options: ['In comparison', 'As a result', 'For instance', 'Similarly'],
    link: 'Contrast',
    tier: 2,
  },
  {
    kind: 'connective',
    text: 'Some British birds spend the winter in Africa. Swallows, ___, fly all the way to South Africa.',
    answer: 'for example',
    options: ['for example', 'however', 'therefore', 'meanwhile'],
    link: 'Example',
    tier: 2,
  },
  {
    kind: 'connective',
    text: 'I did not just tidy my bedroom. ___, I cleaned the whole house.',
    answer: 'In fact',
    options: ['In fact', 'Therefore', 'For example', 'Meanwhile'],
    link: 'Emphasis',
    tier: 2,
  },
  {
    kind: 'connective',
    text: 'Hedgehogs eat beetles, worms and slugs. ___, many gardeners are glad to see them.',
    answer: 'For this reason',
    options: ['For this reason', 'However', 'For example', 'Instead'],
    link: 'Result',
    tier: 2,
  },
  {
    kind: 'connective',
    text: 'The volcano had been quiet for three hundred years. ___, scientists believed it was extinct.',
    answer: 'Consequently',
    options: ['Consequently', 'However', 'For example', 'Meanwhile'],
    link: 'Result',
    tier: 2,
  },
  {
    kind: 'connective',
    text: 'The castle walls were three metres thick. ___, attackers almost never broke through them.',
    answer: 'As a result',
    options: ['As a result', 'However', 'For example', 'Instead'],
    link: 'Result',
    tier: 1,
  },
  {
    kind: 'connective',
    text: 'Grace forgot her lines halfway through the play. ___, she made up new ones, and nobody in the audience noticed.',
    answer: 'Instead',
    options: ['Instead', 'Furthermore', 'For example', 'Similarly'],
    link: 'Replacement',
    tier: 2,
  },
  {
    kind: 'connective',
    text: 'Put the lid on the pan. ___, the sauce will splash all over the cooker.',
    answer: 'Otherwise',
    options: ['Otherwise', 'As a result', 'Meanwhile', 'For instance'],
    link: 'Condition',
    tier: 1,
  },
  {
    kind: 'connective',
    text: 'You need to book a seat for the trip by Friday. ___, you may not get a place on the coach.',
    answer: 'Otherwise',
    options: ['Otherwise', 'Therefore', 'In addition', 'For instance'],
    link: 'Condition',
    tier: 2,
  },
  {
    kind: 'connective',
    text: 'Leah wanted to play in the match. ___, she had to sit it out with a sprained ankle.',
    answer: 'However',
    options: ['However', 'Therefore', 'In addition', 'For instance'],
    link: 'Contrast',
    tier: 1,
  },
  {
    kind: 'connective',
    text: 'The sun was setting and the path was getting hard to see. ___, the lights of the village appeared below us.',
    answer: 'Eventually',
    options: ['Eventually', 'Therefore', 'Instead', 'For example'],
    link: 'Time',
    tier: 2,
  },
  {
    kind: 'connective',
    text: 'Seeds need water to grow. ___, they need warmth, which is why few sprout in winter.',
    answer: 'In addition',
    options: ['In addition', 'Instead', 'For example', 'Otherwise'],
    link: 'Addition',
    tier: 2,
  },
  {
    kind: 'connective',
    text: 'Dad cooked the dinner. ___, Mum and I set the table and found the candles.',
    answer: 'Meanwhile',
    options: ['Meanwhile', 'Therefore', 'For example', 'Otherwise'],
    link: 'Time',
    tier: 1,
  },
  {
    kind: 'connective',
    text: 'The castle looked frightening from the outside. ___, the rooms inside were bright and cosy.',
    answer: 'However',
    options: ['However', 'Therefore', 'For example', 'Meanwhile'],
    link: 'Contrast',
    tier: 1,
  },
  {
    kind: 'connective',
    text: 'Ellie thought the test would be impossible. ___, she finished it with ten minutes to spare.',
    answer: 'In fact',
    options: ['In fact', 'Therefore', 'For example', 'Meanwhile'],
    link: 'Emphasis',
    tier: 2,
  },
  {
    kind: 'connective',
    text: 'Keep the gate shut. ___, the sheep will get out onto the road.',
    answer: 'Otherwise',
    options: ['Otherwise', 'As a result', 'For example', 'Similarly'],
    link: 'Condition',
    tier: 1,
  },
  {
    kind: 'connective',
    text: 'The storm kept us indoors all morning. ___, the sun came out and we went down to the beach.',
    answer: 'Eventually',
    options: ['Eventually', 'Therefore', 'For instance', 'Similarly'],
    link: 'Time',
    tier: 1,
  },
  {
    kind: 'connective',
    text: 'Kai kept trying to fix his bike chain. ___, it clicked back into place.',
    answer: 'Eventually',
    options: ['Eventually', 'However', 'In addition', 'For instance'],
    link: 'Time',
    tier: 1,
  },
  {
    kind: 'connective',
    text: 'The shop had sold out of the blue trainers. ___, I bought a black pair.',
    answer: 'Instead',
    options: ['Instead', 'In addition', 'For example', 'Meanwhile'],
    link: 'Replacement',
    tier: 1,
  },
  {
    kind: 'connective',
    text: 'Nobody in the class expected Josh to win. ___, he had never run in a race before.',
    answer: 'In fact',
    options: ['In fact', 'However', 'For example', 'Otherwise'],
    link: 'Emphasis',
    tier: 2,
  },
  {
    kind: 'connective',
    text: 'The bakery opens at six. ___, the first customers queue outside from half past five.',
    answer: 'Even so',
    options: ['Even so', 'As a result', 'For example', 'Instead'],
    link: 'Concession',
    tier: 2,
  },
  {
    kind: 'connective',
    text: 'The test was hard. ___, most of the class did well.',
    answer: 'Nevertheless',
    options: ['Nevertheless', 'Therefore', 'In addition', 'For example'],
    link: 'Concession',
    tier: 2,
  },
  {
    kind: 'connective',
    text: 'It rained every day of our holiday. ___, we had a brilliant time.',
    answer: 'Even so',
    options: ['Even so', 'Therefore', 'For example', 'Instead'],
    link: 'Concession',
    tier: 1,
  },
  {
    kind: 'connective',
    text: 'Seagulls will snatch food straight out of your hand. ___, do not eat chips on the promenade.',
    answer: 'Therefore',
    options: ['Therefore', 'However', 'For example', 'Meanwhile'],
    link: 'Result',
    tier: 1,
  },
  {
    kind: 'connective',
    text: 'The bridge was closed for repairs all summer. ___, traffic in the town centre doubled.',
    answer: 'As a result',
    options: ['As a result', 'However', 'For example', 'Instead'],
    link: 'Result',
    tier: 1,
  },
  {
    kind: 'connective',
    text: 'The teachers were setting up the hall for the exam. ___, the pupils waited nervously in the corridor.',
    answer: 'Meanwhile',
    options: ['Meanwhile', 'Therefore', 'Otherwise', 'For example'],
    link: 'Time',
    tier: 1,
  },
  {
    kind: 'connective',
    text: 'Gran was asleep in her armchair. ___, the cat was quietly eating her sandwich.',
    answer: 'Meanwhile',
    options: ['Meanwhile', 'Similarly', 'For example', 'Instead'],
    link: 'Time',
    tier: 1,
  },
  {
    kind: 'connective',
    text: 'The bus was full and twenty minutes late. ___, we reached the concert before it began.',
    answer: 'Nevertheless',
    options: ['Nevertheless', 'Therefore', 'For example', 'Instead'],
    link: 'Concession',
    tier: 2,
  },
  {
    kind: 'connective',
    text: 'Our new playing field is twice the size of the old one. ___, it has floodlights for winter evenings.',
    answer: 'Moreover',
    options: ['Moreover', 'However', 'Instead', 'Otherwise'],
    link: 'Addition',
    tier: 1,
  },
  {
    kind: 'connective',
    text: 'He does not give milk, he does not lay eggs, he is too weak to pull the plough, he cannot run fast enough to catch rabbits. ___ he is lord of all the animals.',
    answer: 'Yet',
    options: ['Yet', 'So', 'Because', 'Then'],
    link: 'Contrast',
    tier: 2,
    source: 'George Orwell, Animal Farm, Chapter I',
  },
  {
    kind: 'connective',
    text: 'It was much upon my mind (particularly when I first saw him looking about for his file) that I ought to tell Joe the whole truth. ___ I did not, and for the reason that I mistrusted that if I did, he would think me worse than I was.',
    answer: 'Yet',
    options: ['Yet', 'So', 'Also', 'Or'],
    link: 'Contrast',
    tier: 2,
    source: 'Charles Dickens, Great Expectations, Chapter 6',
  },
  {
    kind: 'connective',
    text: 'No, reader: gratitude, and many associations, all pleasurable and genial, made his face the object I best liked to see; his presence in a room was more cheering than the brightest fire. ___ I had not forgotten his faults; indeed, I could not, for he brought them frequently before me.',
    answer: 'Yet',
    options: ['Yet', 'So', 'Because', 'Then'],
    link: 'Contrast',
    tier: 3,
    source: 'Charlotte Brontë, Jane Eyre, Chapter 15',
  },
  {
    kind: 'connective',
    text: 'From what he said of Miss Darcy, I was thoroughly prepared to see a proud, reserved, disagreeable girl. ___ he knew to the contrary himself.',
    answer: 'Yet',
    options: ['Yet', 'So', 'Because', 'Or'],
    link: 'Contrast',
    tier: 3,
    source: 'Jane Austen, Pride and Prejudice, Chapter 47',
  },
  {
    kind: 'connective',
    text: 'He was endeavouring to pierce the darkness with his ferret eyes, when the chimes of a neighbouring church struck the four quarters. ___ he listened for the hour.',
    answer: 'So',
    options: ['So', 'Yet', 'Also', 'Or'],
    link: 'Result',
    tier: 2,
    source: 'Charles Dickens, A Christmas Carol, Stave II',
  },
  {
    kind: 'connective',
    text: "My father's family name being Pirrip, and my Christian name Philip, my infant tongue could make of both names nothing longer or more explicit than Pip. ___, I called myself Pip, and came to be called Pip.",
    answer: 'So',
    options: ['So', 'Yet', 'Also', 'Or'],
    link: 'Result',
    tier: 1,
    source: 'Charles Dickens, Great Expectations, Chapter 1',
  },
  {
    kind: 'connective',
    text: 'The importance of keeping the pigs in good health was all too obvious. ___ it was agreed without further argument that the milk and the windfall apples (and also the main crop of apples when they ripened) should be reserved for the pigs alone.',
    answer: 'So',
    options: ['So', 'Yet', 'Also', 'Or'],
    link: 'Result',
    tier: 2,
    source: 'George Orwell, Animal Farm, Chapter III',
  },
  {
    kind: 'connective',
    text: 'Hester bade little Pearl run down to the margin of the water, and play with the shells and tangled sea-weed, until she should have talked awhile with yonder gatherer of herbs. ___ the child flew away like a bird, and, making bare her small white feet went pattering along the moist margin of the sea.',
    answer: 'So',
    options: ['So', 'Yet', 'Also', 'Or'],
    link: 'Result',
    tier: 2,
    source: 'Nathaniel Hawthorne, The Scarlet Letter, Chapter XIV',
  },
  {
    kind: 'connective',
    text: 'Herbert was rarely there less frequently than three times in a week, and he never brought me a single word of intelligence that was at all alarming. ___, I knew that there was cause for alarm, and I could not get rid of the notion of being watched.',
    answer: 'Still',
    options: ['Still', 'Therefore', 'Besides', 'For instance'],
    link: 'Concession',
    tier: 3,
    source: 'Charles Dickens, Great Expectations, Chapter 46',
  },
  {
    kind: 'connective',
    text: 'The door remained shut; darkness only came in through the window. ___ it was not late; he often sent for me at seven and eight o’clock, and it was yet but six.',
    answer: 'Still',
    options: ['Still', 'Therefore', 'Besides', 'Meanwhile'],
    link: 'Concession',
    tier: 3,
    source: 'Charlotte Brontë, Jane Eyre, Chapter 16',
  },
  {
    kind: 'connective',
    text: 'The rain was pouring in torrents, and thick mists hid the summits of the mountains, so that I even saw not the faces of those mighty friends. ___ I would penetrate their misty veil, and seek them in their cloudy retreats.',
    answer: 'Still',
    options: ['Still', 'Similarly', 'Besides', 'For instance'],
    link: 'Concession',
    tier: 3,
    source: 'Mary Shelley, Frankenstein, Chapter X',
  },
  {
    kind: 'connective',
    text: "In the end they finished the harvest in two days' less time than it had usually taken Jones and his men. ___, it was the biggest harvest that the farm had ever seen.",
    answer: 'Moreover',
    options: ['Moreover', 'However', 'Instead', 'Otherwise'],
    link: 'Addition',
    tier: 2,
    source: 'George Orwell, Animal Farm, Chapter III',
  },
  {
    kind: 'connective',
    text: 'Tired out but proud, the animals walked round and round their masterpiece, which appeared even more beautiful in their eyes than when it had been built the first time. ___, the walls were twice as thick as before.',
    answer: 'Moreover',
    options: ['Moreover', 'However', 'Instead', 'Otherwise'],
    link: 'Addition',
    tier: 2,
    source: 'George Orwell, Animal Farm, Chapter VIII',
  },
  {
    kind: 'connective',
    text: 'Already I had had a transient impression of these, and the first nausea no longer obscured my observation. ___, I was concealed and motionless, and under no urgency of action.',
    answer: 'Moreover',
    options: ['Moreover', 'However', 'Instead', 'Otherwise'],
    link: 'Addition',
    tier: 3,
    source: 'H. G. Wells, The War of the Worlds, Book Two, Chapter II',
  },
  {
    kind: 'connective',
    text: 'But, I saw nothing that in the least explained him. ___, I saw him next moment, once more holding out both his hands to me.',
    answer: 'On the contrary',
    options: ['On the contrary', 'As a result', 'For instance', 'Similarly'],
    link: 'Contrast',
    tier: 3,
    source: 'Charles Dickens, Great Expectations, Chapter 39',
  },
  {
    kind: 'connective',
    text: 'He has not an ill-natured look. ___, there is something pleasing about his mouth when he speaks.',
    answer: 'On the contrary',
    options: ['On the contrary', 'As a result', 'Otherwise', 'Meanwhile'],
    link: 'Contrast',
    tier: 3,
    source: 'Jane Austen, Pride and Prejudice, Chapter 43',
  },
  {
    kind: 'connective',
    text: 'He did not seem offended. ___, he put his finger-tips together and leaned his elbows on the arms of his chair, like one who has a relish for conversation.',
    answer: 'On the contrary',
    options: ['On the contrary', 'As a result', 'Otherwise', 'Meanwhile'],
    link: 'Contrast',
    tier: 2,
    source: 'Arthur Conan Doyle, The Sign of Four, Chapter I',
  },
  {
    kind: 'connective',
    text: 'Reading over what I have written so far, I see I have given the impression that the events of three nights several weeks apart were all that absorbed me. ___, they were merely casual events in a crowded summer, and, until much later, they absorbed me infinitely less than my personal affairs.',
    answer: 'On the contrary',
    options: ['On the contrary', 'As a result', 'For instance', 'Similarly'],
    link: 'Contrast',
    tier: 3,
    source: 'F. Scott Fitzgerald, The Great Gatsby, Chapter III',
  },
  {
    kind: 'connective',
    text: 'Quite satisfied, he closed his door, and locked himself in; double-locked himself in, which was not his custom. ___ secured against surprise, he took off his cravat; put on his dressing-gown and slippers, and his nightcap; and sat down before the fire to take his gruel.',
    answer: 'Thus',
    options: ['Thus', 'Otherwise', 'Meanwhile', 'Instead'],
    link: 'Result',
    tier: 3,
    source: 'Charles Dickens, A Christmas Carol, Stave I',
  },
  {
    kind: 'connective',
    text: 'I endeavoured to change my course, but quickly found that, if I again made the attempt, the boat would be instantly filled with water. ___ situated, my only resource was to drive before the wind.',
    answer: 'Thus',
    options: ['Thus', 'Besides', 'Meanwhile', 'Instead'],
    link: 'Result',
    tier: 3,
    source: 'Mary Shelley, Frankenstein, Chapter XX',
  },
  {
    kind: 'connective',
    text: 'I folded my shawl double, and spread it over me for a coverlet; a low, mossy swell was my pillow. ___ lodged, I was not, at least at the commencement of the night, cold.',
    answer: 'Thus',
    options: ['Thus', 'Otherwise', 'Moreover', 'Instead'],
    link: 'Result',
    tier: 3,
    source: 'Charlotte Brontë, Jane Eyre, Chapter 28',
  },
  {
    kind: 'connective',
    text: 'Mary would sit and watch me by the hour together: then she would take lessons; and a docile, intelligent, assiduous pupil she made. ___ occupied, and mutually entertained, days passed like hours, and weeks like days.',
    answer: 'Thus',
    options: ['Thus', 'Besides', 'Otherwise', 'Meanwhile'],
    link: 'Result',
    tier: 3,
    source: 'Charlotte Brontë, Jane Eyre, Chapter 30',
  },
  {
    kind: 'connective',
    text: "Except for Mollie and Snowball, no other animal had ever left the farm, and they did not like to think of their sick comrade in the hands of human beings. ___, Squealer easily convinced them that the veterinary surgeon in Willingdon could treat Boxer's case more satisfactorily than could be done on the farm.",
    answer: 'However',
    options: ['However', 'Therefore', 'Furthermore', 'For example'],
    link: 'Contrast',
    tier: 2,
    source: 'George Orwell, Animal Farm, Chapter IX',
  },
  {
    kind: 'connective',
    text: 'There were no horses to be procured, and I must return by the lake; but the wind was unfavourable, and the rain fell in torrents. ___, it was hardly morning, and I might reasonably hope to arrive by night.',
    answer: 'However',
    options: ['However', 'Therefore', 'Besides', 'Similarly'],
    link: 'Contrast',
    tier: 3,
    source: 'Mary Shelley, Frankenstein, Chapter XXIII',
  },
  {
    kind: 'connective',
    text: 'This was very uncomfortable, and I was half afraid. ___, the only thing to be done being to knock at the door, I knocked, and was told from within to enter.',
    answer: 'However',
    options: ['However', 'Therefore', 'Besides', 'For instance'],
    link: 'Contrast',
    tier: 2,
    source: 'Charles Dickens, Great Expectations, Chapter 8',
  },
  {
    kind: 'connective',
    text: 'Adèle, too, would be dressed: though I thought she had little chance of being introduced to the party that day at least. ___, to please her, I allowed Sophie to apparel her in one of her short, full muslin frocks.',
    answer: 'However',
    options: ['However', 'Therefore', 'Besides', 'For example'],
    link: 'Contrast',
    tier: 3,
    source: 'Charlotte Brontë, Jane Eyre, Chapter 17',
  },
  {
    kind: 'connective',
    text: "On the present occasion, though I was hungry, I dared not eat my slice. I felt that I must have something in reserve for my dreadful acquaintance, and his ally the still more dreadful young man. I knew Mrs. Joe's housekeeping to be of the strictest kind, and that my larcenous researches might find nothing, available in the safe. ___ I resolved to put my hunk of bread-and-butter down the leg of my trousers.",
    answer: 'Therefore',
    options: ['Therefore', 'However', 'Meanwhile', 'Besides'],
    link: 'Result',
    tier: 2,
    source: 'Charles Dickens, Great Expectations, Chapter 2',
  },
  {
    kind: 'connective',
    text: 'We had made some pale efforts in the beginning to applaud Mr. Wopsle; but they were too hopeless to be persisted in. ___ we had sat, feeling keenly for him, but laughing, nevertheless, from ear to ear.',
    answer: 'Therefore',
    options: ['Therefore', 'However', 'Similarly', 'For instance'],
    link: 'Result',
    tier: 3,
    source: 'Charles Dickens, Great Expectations, Chapter 31',
  },
  {
    kind: 'connective',
    text: 'I mistrusted a design to entrap me into some admission. ___, I glanced at him as we walked on together, but said nothing.',
    answer: 'Therefore',
    options: ['Therefore', 'However', 'Similarly', 'For instance'],
    link: 'Result',
    tier: 2,
    source: 'Charles Dickens, Great Expectations, Chapter 47',
  },
  {
    kind: 'connective',
    text: 'It would be quite bright, and people would be about in an hour or so. ___, I argued, they did not go very far.',
    answer: 'Therefore',
    options: ['Therefore', 'However', 'Meanwhile', 'For instance'],
    link: 'Result',
    tier: 2,
    source: 'Arthur Conan Doyle, The Sign of Four, Chapter X',
  },
  {
    kind: 'connective',
    text: 'The animals watched his coming and going with a kind of dread, and avoided him as much as possible. ___, the sight of Napoleon, on all fours, delivering orders to Whymper, who stood on two legs, roused their pride and partly reconciled them to the new arrangement.',
    answer: 'Nevertheless',
    options: ['Nevertheless', 'Therefore', 'For example', 'Meanwhile'],
    link: 'Concession',
    tier: 3,
    source: 'George Orwell, Animal Farm, Chapter VI',
  },
  {
    kind: 'connective',
    text: 'Throughout the spring and summer they worked a sixty-hour week, and in August Napoleon announced that there would be work on Sunday afternoons as well. This work was strictly voluntary, but any animal who absented himself from it would have his rations reduced by half. ___, it was found necessary to leave certain tasks undone.',
    answer: 'Even so',
    options: ['Even so', 'As a result', 'For instance', 'Similarly'],
    link: 'Concession',
    tier: 3,
    source: 'George Orwell, Animal Farm, Chapter VI',
  },
  {
    kind: 'connective',
    text: 'Sentinels were placed at all the approaches to the farm. ___, four pigeons were sent to Foxwood with a conciliatory message, which it was hoped might re-establish good relations with Pilkington.',
    answer: 'In addition',
    options: ['In addition', 'Instead', 'However', 'For example'],
    link: 'Addition',
    tier: 2,
    source: 'George Orwell, Animal Farm, Chapter VIII',
  },
  {
    kind: 'connective',
    text: 'I hastened to Mrs. Fairfax’s room; there was a fire there too, but no candle, and no Mrs. Fairfax. ___, all alone, sitting upright on the rug, and gazing with gravity at the blaze, I beheld a great black and white long-haired dog, just like the Gytrash of the lane.',
    answer: 'Instead',
    options: ['Instead', 'Therefore', 'Moreover', 'Finally'],
    link: 'Replacement',
    tier: 3,
    source: 'Charlotte Brontë, Jane Eyre, Chapter 12',
  },
  {
    kind: 'connective',
    text: 'What seems strange to you is only so because you do not follow my train of thought or observe the small facts upon which large inferences may depend. ___, I began by stating that your brother was careless.',
    answer: 'For example',
    options: ['For example', 'However', 'As a result', 'Meanwhile'],
    link: 'Example',
    tier: 2,
    source: 'Arthur Conan Doyle, The Sign of Four, Chapter I',
  },
  {
    kind: 'connective',
    text: 'His friends were those of his own blood or those whom he had known the longest; his affections, like ivy, were the growth of time, they implied no aptness in the object. ___, no doubt the bond that united him to Mr. Richard Enfield, his distant kinsman, the well-known man about town.',
    answer: 'Hence',
    options: ['Hence', 'However', 'Meanwhile', 'Instead'],
    link: 'Result',
    tier: 3,
    source: 'Robert Louis Stevenson, Jekyll and Hyde, Story of the Door',
  },
  {
    kind: 'connective',
    text: 'I well knew that if any other had communicated such a relation to me, I should have looked upon it as the ravings of insanity. ___, the strange nature of the animal would elude all pursuit, even if I were so far credited as to persuade my relatives to commence it.',
    answer: 'Besides',
    options: ['Besides', 'However', 'Therefore', 'Meanwhile'],
    link: 'Addition',
    tier: 3,
    source: 'Mary Shelley, Frankenstein, Chapter VII',
  },
  {
    kind: 'connective',
    text: 'I had sufficient leisure for these and many other reflections during my journey to Ingolstadt, which was long and fatiguing. ___ the high white steeple of the town met my eyes.',
    answer: 'At length',
    options: ['At length', 'Therefore', 'Instead', 'For example'],
    link: 'Time',
    tier: 2,
    source: 'Mary Shelley, Frankenstein, Chapter III',
  },
  {
    kind: 'connective',
    text: 'I responded that it was merely a fancy head, and hurried it beneath the other sheets. ___, I lied: it was, in fact, a very faithful representation of Mr. Rochester.',
    answer: 'Of course',
    options: ['Of course', 'Instead', 'Therefore', 'Meanwhile'],
    link: 'Emphasis',
    tier: 3,
    source: 'Charlotte Brontë, Jane Eyre, Chapter 21',
  },
]

export const JUMBLE_ITEMS: JumbleItem[] = [...PARAGRAPH_BANK, ...CONNECTIVE_BANK]

export const BANK: GameBank<JumbleItem> = {
  slug: 'paragraph-jumble',
  items: JUMBLE_ITEMS,
  // A paragraph is named by its topic, shown above its sentences; a gap by its
  // sentences. No two are the same.
  key: (p) => (isGap(p) ? p.text : p.topic),
  // The paragraph in its right order, as the page shows it after a wrong
  // answer; or the connective that fills the gap.
  answer: (p) => (isGap(p) ? p.answer : p.sentences.join(' ')),
  // A paragraph is put in order: there are no options to choose. A gap offers four.
  options: (p) => (isGap(p) ? p.options : null),
  // What the question tests: the kind of paragraph, or what the connective signals.
  tag: (p) => (isGap(p) ? p.link : p.genre),
  // The round climbs from the paragraphs with plain cues to real prose.
  tier: (p) => p.tier,
  // At most two gaps a round, and two paragraphs of one kind, not back to back.
  group: (p) => (isGap(p) ? 'Connective' : p.genre),
  // Two questions from one chapter of a book share its scene: never one round.
  facts: (p) => (p.source ? [`scene:${p.source}`] : []),
  // Rebuilt for depth (see the docblock); held to it by
  // src/__tests__/a-game-question-takes-knowing.test.ts.
  deepened: '2026-10-24',
}
