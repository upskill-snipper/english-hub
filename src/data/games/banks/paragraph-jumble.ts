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
 */

export type Genre = 'Recount' | 'Explanation' | 'Argument' | 'Story'

export interface Paragraph {
  /** Sentences in their correct, coherent order. */
  sentences: string[]
  topic: string
  genre: Genre
}

// 25+ original paragraphs. UK English throughout.
export const PARAGRAPH_BANK: Paragraph[] = [
  {
    topic: 'A school trip to the coast',
    genre: 'Recount',
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
    sentences: [
      'Some people argue that libraries are no longer necessary in the age of the internet.',
      'However, a library offers a calm space where pupils can concentrate.',
      'In addition, it gives every student free access to books they could not afford to buy.',
      'For these reasons, schools should protect their libraries rather than close them.',
    ],
  },
  {
    topic: 'A surprising discovery in the attic',
    genre: 'Story',
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
    sentences: [
      'Many students complain that school uniform is uncomfortable and unfair.',
      'On the other hand, a uniform removes pressure to wear expensive fashionable clothes.',
      'Furthermore, it helps everyone feel part of the same community.',
      'Therefore, the benefits of a uniform clearly outweigh the drawbacks.',
    ],
  },
  {
    topic: 'The night the power went out',
    genre: 'Story',
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
    sentences: [
      'It is often claimed that homework simply adds stress to young people.',
      'Nevertheless, regular practice at home helps ideas stick in the memory.',
      'Moreover, it teaches pupils to manage their own time independently.',
      'In conclusion, homework should be set carefully rather than banned altogether.',
    ],
  },
  {
    topic: 'A letter that changed everything',
    genre: 'Story',
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
    sentences: [
      'Plenty of teachers believe that phones are nothing but a distraction in class.',
      'In contrast, a phone can be a powerful research tool when used responsibly.',
      'In addition, it allows pupils to record important instructions they might forget.',
      'For these reasons, phones should be permitted under clear classroom rules.',
    ],
  },
  {
    topic: 'The race I almost did not finish',
    genre: 'Story',
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
    sentences: [
      'Critics argue that keeping wild animals in zoos is cruel and unnatural.',
      'However, many modern zoos run vital programmes to protect endangered species.',
      'Furthermore, they teach millions of visitors why wildlife must be conserved.',
      'On balance, well-run zoos do more good than harm.',
    ],
  },
  {
    topic: 'The stray dog that followed me home',
    genre: 'Story',
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
    sentences: [
      'Some teenagers insist that screens are an essential part of modern life.',
      'Even so, spending hours online can harm both sleep and concentration.',
      'In addition, less screen time leaves more room for exercise and friendships.',
      'Ultimately, a sensible daily limit would benefit young people greatly.',
    ],
  },
  {
    topic: 'The mysterious key in the garden',
    genre: 'Story',
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
    sentences: [
      'Shoppers often say that plastic bags are simply too convenient to give up.',
      'However, these bags can take hundreds of years to break down in nature.',
      'Moreover, reusable bags are cheap and easy to carry once they become a habit.',
      'For these reasons, banning single-use plastic bags is a sensible step.',
    ],
  },
  {
    topic: 'Lost on the way to the museum',
    genre: 'Story',
    sentences: [
      'Our class was supposed to follow the teacher straight to the museum entrance.',
      'Distracted by a street performer, Sam and I drifted away from the group.',
      'When we looked up, the others had completely vanished into the crowd.',
      'Trying not to panic, we asked a friendly shopkeeper for directions.',
      'We reached the museum at last, just as the teacher was counting heads.',
    ],
  },
]

export const BANK: GameBank<Paragraph> = {
  slug: 'paragraph-jumble',
  items: PARAGRAPH_BANK,
  // No two topics are the same, and the topic is shown above the sentences.
  key: (p) => p.topic,
  // The paragraph in its right order, as the page shows it after a wrong answer.
  answer: (p) => p.sentences.join(' '),
  // The student puts the sentences in order: there are no options to choose.
  options: () => null,
  tag: (p) => p.genre,
}
