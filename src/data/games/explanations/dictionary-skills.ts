import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Dictionary Skills: the explanation a student sees after each answer, by question
 * key (src/data/games/banks/dictionary-skills.ts). Written with AI on 16 October
 * 2026 and checked against each question and its options, as the founder decided
 * (src/lib/games/explanations/types.ts).
 */
export const EXPLANATIONS: GameExplanations = {
  'Which word comes first in alphabetical order? orchard, ocean, olive, oyster': {
    why: "Ocean comes first. All four words start with 'o', so look at the second letter. The second letters are r, c, l and y, and 'c' comes earliest in the alphabet.",
    not: {
      orchard:
        "Its second letter is 'r', which comes after both 'c' and 'l'. Orchard is third in the order.",
      olive: "Its second letter is 'l', which comes after 'c'. Olive is second.",
      oyster: "Its second letter is 'y', near the end of the alphabet. Oyster is last.",
    },
    more: "The full order is ocean, olive, orchard, oyster. Here every word begins with 'o', so the second letter decides.",
    tip: 'Say the alphabet quietly if you are unsure which of two letters comes first. It is more reliable than guessing.',
  },
  'Which word comes first in alphabetical order? breeze, brick, branch, bridge': {
    why: "Branch comes first. All four words begin 'br', so compare the third letter. The third letters are e, i, a and i, and 'a' comes first in the alphabet.",
    not: {
      breeze: "Its third letter is 'e', which comes after 'a'. Breeze is second in the order.",
      brick: "Its third letter is 'i', which comes after 'a' and 'e'. Brick is third.",
      bridge:
        "Its third letter is 'i', which comes after 'a'. Bridge is last, because its fourth letter 'd' comes after the 'c' in brick.",
    },
    more: "Brick and bridge both start 'bri', so you must go as far as the fourth letter: c comes before d. The full order is branch, breeze, brick, bridge.",
    tip: 'If two words match for several letters, keep going one letter at a time until they differ.',
  },
  'Which word comes first in alphabetical order? carpet, cabin, cellar, clutch': {
    why: "Cabin comes first. All four start with 'c'. Cabin and carpet both have 'a' as their second letter, which comes before the 'e' and 'l' of the others. Their third letters are b and r, and 'b' comes first.",
    not: {
      carpet:
        "It matches cabin up to 'ca', but its third letter 'r' comes after 'b'. Carpet is second.",
      cellar: "Its second letter is 'e', which comes after 'a'. Cellar is third.",
      clutch: "Its second letter is 'l', which comes after 'a' and 'e'. Clutch is last.",
    },
    more: 'The full order is cabin, carpet, cellar, clutch. Cabin and carpet tie on their first two letters, so only the third letter can separate them.',
    tip: 'Sort in stages: by first letter, then second, then third. Cross out words that have lost as you go.',
  },
  'Which word comes first in alphabetical order? stream, storm, stone, stove': {
    why: "Stone comes first. All four start 'st'. The third letters are r, o, o and o, so stream goes last. The other three all start 'sto', so look at the fourth letter: n, r and v. 'n' comes first.",
    not: {
      stream: "Its third letter is 'r', which comes after 'o'. Stream is last of the four.",
      storm: "After 'sto' it has 'r', which comes after 'n'. Storm is second.",
      stove: "After 'sto' it has 'v', the latest letter of the three. Stove is third.",
    },
    more: 'The full order is stone, storm, stove, stream. It took four letters to separate stone, storm and stove.',
    tip: 'Find the first letter where the words differ, and compare only that letter. Letters that match tell you nothing.',
  },
  'Which word comes first in alphabetical order? planet, plaster, plank, platform': {
    why: "Planet comes first. All four start 'pla'. Planet and plank both continue with 'n', so look at the fifth letter. Planet has 'e' and plank has 'k', and 'e' comes earlier in the alphabet.",
    not: {
      plaster: "After 'pla' it has 's', which comes after 'n'. Plaster is third.",
      plank:
        "It matches planet as far as 'plan', but its fifth letter 'k' comes after 'e'. Plank is second.",
      platform: "After 'pla' it has 't', the latest letter here. Platform is last.",
    },
    more: 'The full order is planet, plank, plaster, platform. Planet and plank look alike, so this question needs the fifth letter.',
    tip: 'Do not stop at letters that look similar. Keep going until the words really differ, which here is the fifth letter.',
  },
  'Which word comes first in alphabetical order? frost, fragment, frame, freckle': {
    why: "Fragment comes first. All four start 'fr'. Fragment and frame both have 'a' as the third letter, which comes before 'e' and 'o'. Their fourth letters are g and m, and 'g' comes first.",
    not: {
      frost: "Its third letter is 'o', the latest of the four. Frost is last.",
      frame: "It matches fragment up to 'fra', but 'm' comes after 'g'. Frame is second.",
      freckle: "Its third letter is 'e', which comes after 'a'. Freckle is third.",
    },
    more: 'The full order is fragment, frame, freckle, frost. The vowels run a, e, i, o, u in alphabetical order, which helps when words differ only by a vowel.',
  },
  'Which word comes first in alphabetical order? thunder, thimble, thorn, throne': {
    why: "Thimble comes first. All four start 'th', so the third letter decides. The third letters are u, i, o and r, and 'i' comes earliest.",
    not: {
      thunder: "Its third letter is 'u', the latest of the four. Thunder is last.",
      thorn: "Its third letter is 'o', which comes after 'i'. Thorn is second.",
      throne: "Its third letter is 'r', which comes after 'i' and 'o'. Throne is third.",
    },
    more: "'Th' makes one sound, but a dictionary still sorts it as two letters, t and h. Dictionaries go letter by letter, not sound by sound. The full order is thimble, thorn, throne, thunder.",
    tip: 'Ignore how a word sounds and compare only its letters, in order.',
  },
  'Which word comes first in alphabetical order? velvet, vacant, vessel, vivid': {
    why: "Vacant comes first. All four start with 'v', so compare the second letters: e, a, e and i. 'a' is earliest.",
    not: {
      velvet:
        "Its second letter is 'e', which comes after 'a'. Velvet is second, ahead of vessel because 'l' comes before 's'.",
      vessel:
        "Its second letter is 'e', which comes after 'a'. Vessel is third, because its third letter 's' comes after the 'l' of velvet.",
      vivid: "Its second letter is 'i', the latest of the four. Vivid is last.",
    },
    more: "Velvet and vessel both start 've', so only their third letters, l and s, separate them. The full order is vacant, velvet, vessel, vivid.",
    tip: 'When two words tie, set the others aside and compare just those two, one letter at a time.',
  },
  'Which word comes first in alphabetical order? gravel, glance, glory, grain': {
    why: "Glance comes first. All four start with 'g'. The second letters are r, l, l and r, and 'l' comes before 'r', so it is glance or glory. Their third letters are a and o, and 'a' is first.",
    not: {
      gravel:
        "Its second letter is 'r', which comes after 'l'. Gravel is last, because 'grav' comes after 'grai' in grain.",
      glory:
        "It matches glance for 'gl', but its third letter 'o' comes after 'a'. Glory is second.",
      grain: "Its second letter is 'r', which comes after 'l'. Grain is third.",
    },
    more: 'The full order is glance, glory, grain, gravel. Two pairs tied here, so two separate comparisons were needed.',
    tip: 'Sort in rounds: first split the words by second letter, then settle each pair on its own.',
  },
  'Which word comes first in alphabetical order? mirror, meadow, mingle, mosaic': {
    why: "Meadow comes first. All four start with 'm', so compare the second letters: i, e, i and o. 'e' comes before 'i' and 'o'.",
    not: {
      mirror:
        "Its second letter is 'i', which comes after 'e'. Mirror is third, because its third letter 'r' comes after the 'n' of mingle.",
      mingle: "Its second letter is 'i', which comes after 'e'. Mingle is second.",
      mosaic: "Its second letter is 'o', the latest of the four. Mosaic is last.",
    },
    more: "Mingle and mirror both begin 'mi', so the third letters, n and r, decide between them. The full order is meadow, mingle, mirror, mosaic.",
    tip: 'Remember the vowels in order: a, e, i, o, u. Here the second letters e, i and o come in that order.',
  },
  'Which word comes first in alphabetical order? ribbon, rhythm, rescue, ripple': {
    why: "Rescue comes first. All four start with 'r'. The second letters are i, h, e and i, and 'e' comes earliest.",
    not: {
      ribbon:
        "Its second letter is 'i', which comes after 'e' and 'h'. Ribbon is third, ahead of ripple because 'b' comes before 'p'.",
      rhythm: "Its second letter is 'h', which comes after 'e'. Rhythm is second.",
      ripple:
        "Its second letter is 'i', and its third letter 'p' comes after the 'b' of ribbon. Ripple is last.",
    },
    more: 'Rhythm has no a, e, i, o or u, but a dictionary sorts it like any other word, letter by letter. The full order is rescue, rhythm, ribbon, ripple.',
    tip: 'Do not be put off by an odd spelling. Compare the letters, not the sound.',
  },
  'Which word comes first in alphabetical order? shadow, shallow, shatter, shelter': {
    why: "Shadow comes first. All four start 'sh'. Three go on with 'a', and only shelter has 'e', which comes later. Shadow, shallow and shatter then differ at the fourth letter: d, l and t. 'd' is first.",
    not: {
      shallow:
        "It matches shadow up to 'sha', but its fourth letter 'l' comes after 'd'. Shallow is second.",
      shatter:
        "It also starts 'sha', but its fourth letter 't' is the latest of the three. Shatter is third.",
      shelter: "Its third letter is 'e', which comes after 'a'. Shelter is last.",
    },
    more: 'The full order is shadow, shallow, shatter, shelter. Four letters were needed to separate the first three words.',
    tip: 'When several words share the same start, cover the matching letters with your finger and compare what is left.',
  },
  'Which word comes first in alphabetical order? drizzle, drama, driftwood, drowsy': {
    why: "Drama comes first. All four start 'dr', so compare the third letters: i, a, i and o. 'a' is earliest.",
    not: {
      drizzle:
        "Its third letter is 'i', which comes after 'a'. Drizzle is third, because its fourth letter 'z' comes after the 'f' of driftwood.",
      driftwood: "Its third letter is 'i', which comes after 'a'. Driftwood is second.",
      drowsy: "Its third letter is 'o', the latest of the four. Drowsy is last.",
    },
    more: "Drizzle and driftwood tie on 'dri', so the fourth letters, f and z, decide. The full order is drama, driftwood, drizzle, drowsy.",
    tip: 'If two words match until one has a z, the z word comes second, because z is the last letter of the alphabet.',
  },
  'Which word comes first in alphabetical order? anchor, amber, apron, awning': {
    why: "Amber comes first. All four start with 'a', so compare the second letters: n, m, p and w. 'm' comes earliest.",
    not: {
      anchor: "Its second letter is 'n', which comes after 'm'. Anchor is second.",
      apron: "Its second letter is 'p', which comes after 'm' and 'n'. Apron is third.",
      awning: "Its second letter is 'w', near the end of the alphabet. Awning is last.",
    },
    more: 'The full order is amber, anchor, apron, awning. The letters m and n sit side by side in the alphabet, so they are easy to mix up.',
    tip: 'Take care with neighbouring letters such as m and n. M comes first.',
  },
  'Guide words at the top of a page are "castle" and "cattle". Would you find "casual" on this page?':
    {
      why: "Yes. In order the words go castle, casual, cattle, so casual falls between the guide words. It comes after castle because its fourth letter 'u' is after 't', and before cattle because its third letter 's' is before 't'.",
      not: {
        'No, "casual" is not on this page':
          'Casual does belong. It comes after castle and before cattle, so it would be found on this page.',
      },
      more: 'Guide words show the first and last entries on a page. Any word that sorts between them is printed on that page.',
      tip: 'Check both sides: is the word after the left guide word and before the right one? It must pass both tests.',
    },
  'Guide words at the top of a page are "garden" and "gather". Would you find "garlic" on this page?':
    {
      why: "Yes. In order the words go garden, garlic, gather, so garlic falls between the guide words. It comes after garden because its fourth letter 'l' is after 'd', and before gather because its third letter 'r' is before 't'.",
      not: {
        'No, "garlic" is not on this page':
          'Garlic does belong. It comes after garden and before gather, so it is on this page.',
      },
      more: "These words all start 'ga', so you have to look at the third or fourth letter. Guide words are often close together like this.",
      tip: 'Look first for the letter where garden and gather begin to differ. Guide words that start alike make you look further in.',
    },
  'Guide words at the top of a page are "pebble" and "pepper". Would you find "pencil" on this page?':
    {
      why: "Yes. All three words start 'pe', so the third letter decides. Pebble has 'b', pencil has 'n' and pepper has 'p'. The letters b, n, p are in alphabetical order, so pencil sits between the guide words.",
      not: {
        'No, "pencil" is not on this page':
          "Pencil does belong. Its third letter 'n' comes after the 'b' of pebble and before the 'p' of pepper.",
      },
      more: 'Guide words save time. Instead of reading every entry, you check only the two words at the top of the page.',
      tip: 'List the deciding letters in this order: left guide word, your word, right guide word. Here that gives b, n, p. If they are in alphabetical order, your word is on the page.',
    },
  'Guide words at the top of a page are "lemon" and "lever". Would you find "mango" on this page?':
    {
      why: "No. Mango starts with 'm', but both guide words start with 'l'. 'm' comes after 'l', so mango comes after lever, the last word on the page. It would be on a later page.",
      not: {
        'Yes, "mango" is on this page':
          'Mango cannot be here. It sorts after the right guide word, lever, so it is on a later page.',
      },
      more: 'When both guide words share a first letter and your word starts with a different one, you do not need to look any further. A later first letter means a later page.',
      tip: "If the word's first letter comes later in the alphabet than both guide words' first letters, stop: the word is on a later page.",
    },
  'Guide words at the top of a page are "frost" and "fungus". Would you find "fragment" on this page?':
    {
      why: "No. Fragment comes before frost, because both start 'fr' and the third letter 'a' comes before 'o'. Frost is the first word on the page, so nothing before it can be there. Fragment is on an earlier page.",
      not: {
        'Yes, "fragment" is on this page':
          'Fragment is not on this page. It sorts before the left guide word, frost, so it is on an earlier page.',
      },
      more: 'Words that do belong on this page sort after frost and before fungus, such as frozen, fruit and fudge.',
      tip: 'A word can share its first letter with the guide words and still be off the page. Compare the second and third letters too.',
    },
  'Guide words at the top of a page are "marble" and "meadow". Would you find "mayhem" on this page?':
    {
      why: "Yes. Mayhem comes after marble: they share 'ma', and 'y' comes after 'r'. It also comes before meadow, because its second letter 'a' comes before the 'e' of meadow. So it belongs between the guide words.",
      not: {
        'No, "mayhem" is not on this page':
          'Mayhem does belong. It sorts after marble and before meadow, so it is on this page.',
      },
      more: 'Each guide word tests a different letter. Against marble, the third letter decides. Against meadow, the second letter decides.',
      tip: 'Test each guide word separately, and note which letter decided each time.',
    },
  'Guide words at the top of a page are "noble" and "novel". Would you find "nostril" on this page?':
    {
      why: "Yes. All three words start 'no', so the third letter decides. Noble has 'b', nostril has 's' and novel has 'v'. The letters b, s, v are in alphabetical order, so nostril sits between the guide words.",
      not: {
        'No, "nostril" is not on this page':
          "Nostril does belong. Its third letter 's' comes after the 'b' of noble and before the 'v' of novel.",
      },
      more: 'A page of a dictionary is a slice of one long alphabetical list. Any word that falls inside the slice is printed there.',
    },
  'Guide words at the top of a page are "sail" and "salt". Would you find "scarf" on this page?': {
    why: "No. The guide words both start 'sa', but scarf starts 'sc'. Since 'c' comes after 'a', scarf sorts after salt, the last word on the page. It would be on a later page.",
    not: {
      'Yes, "scarf" is on this page':
        "Scarf is not here. Its second letter 'c' comes after the 'a' of both guide words, so scarf is on a later page.",
    },
    more: "Words that do belong on this page begin 'sa' and fall between sail and salt, such as saint and salad. Scarf starts 'sc', which is further on.",
    tip: 'If your word starts with the same letter as both guide words, but its second letter comes later in the alphabet than theirs, the word is past the page.',
  },
  'Guide words at the top of a page are "tablet" and "talent". Would you find "tackle" on this page?':
    {
      why: "Yes. All three words start 'ta', so the third letter decides. Tablet has 'b', tackle has 'c' and talent has 'l'. The letters b, c, l are in alphabetical order, so tackle fits between the guide words.",
      not: {
        'No, "tackle" is not on this page':
          "Tackle does belong. Its third letter 'c' comes after the 'b' of tablet and before the 'l' of talent.",
      },
      tip: 'Neighbouring letters such as b and c are easy to mix up. Say the alphabet through to check which comes first.',
    },
  'Guide words at the top of a page are "velvet" and "vessel". Would you find "venom" on this page?':
    {
      why: "Yes. All three words start 've', so the third letter decides. Velvet has 'l', venom has 'n' and vessel has 's'. The letters l, n, s are in alphabetical order, so venom fits between the guide words.",
      not: {
        'No, "venom" is not on this page':
          "Venom does belong. Its third letter 'n' comes after the 'l' of velvet and before the 's' of vessel.",
      },
      tip: 'Find the first letter where the three words differ, and ignore everything before it. Here that is the third letter.',
    },
  'Guide words at the top of a page are "brave" and "breeze". Would you find "broom" on this page?':
    {
      why: "No. All three words start 'br'. The third letter of the right guide word, breeze, is 'e', but broom has 'o'. 'o' comes after 'e', so broom sorts after breeze and is on a later page.",
      not: {
        'Yes, "broom" is on this page':
          "Broom is not on this page. Its third letter 'o' comes after the 'e' of breeze, so it is past the last word here.",
      },
      more: 'A word can fail at either end of a page. One that sorts before the left guide word is on an earlier page, and one that sorts after the right guide word is on a later page.',
      tip: 'Do not stop after the left guide word. A word can pass the first test and still fail the second.',
    },
  'Guide words at the top of a page are "orchard" and "ostrich". Would you find "oregano" on this page?':
    {
      why: "Yes. Oregano shares 'or' with orchard, and its third letter 'e' comes after 'c', so it sorts after the left guide word. Its second letter 'r' comes before the 's' of ostrich, so it sorts before the right one. It belongs.",
      not: {
        'No, "oregano" is not on this page':
          'Oregano does belong. It sorts after orchard and before ostrich, so it is on this page.',
      },
      more: 'The two tests use different letters: the third letter against orchard, and the second letter against ostrich.',
    },
  'Guide words at the top of a page are "hammer" and "harvest". Would you find "happen" on this page?':
    {
      why: "Yes. All three words start 'ha', so the third letter decides. Hammer has 'm', happen has 'p' and harvest has 'r'. The letters m, p, r are in alphabetical order, so happen fits between the guide words.",
      not: {
        'No, "happen" is not on this page':
          "Happen does belong. Its third letter 'p' comes after the 'm' of hammer and before the 'r' of harvest.",
      },
      more: 'Many other words sit on this page between hammer and harvest, such as hand, happy and hard. They all sort inside the guide words.',
      tip: 'Use the guide words to find the right page, then use alphabetical order again to find the word on that page.',
    },
  'Guide words at the top of a page are "dusk" and "dwell". Would you find "cradle" on this page?':
    {
      why: "No. Cradle starts with 'c', but both guide words start with 'd'. 'c' comes before 'd', so cradle sorts before dusk, the first word on the page. It would be on an earlier page.",
      not: {
        'Yes, "cradle" is on this page':
          "Cradle is not here. Its first letter 'c' comes before the 'd' of both guide words, so it is on an earlier page.",
      },
      more: 'This page covers a very short stretch, from dusk to dwell, with words such as dust, duty and dwarf. Cradle is nowhere near.',
      tip: "If the word's first letter comes earlier in the alphabet than both guide words' first letters, stop: the word is on an earlier page.",
    },
  'Which definition correctly matches the word "meander"?': {
    why: 'Meander means to follow a winding course, like a slow river, or to wander without a fixed direction. People and animals can meander too, if they stroll with no hurry and no goal.',
    not: {
      'To complain loudly about a small problem; to grumble and moan':
        'That describes someone who moans or grumbles. Meander is about how something moves, not about complaining.',
      'To repair something using simple tools; to patch it up':
        'That describes mending or fixing. Meander has nothing to do with repairs.',
      'To gather a large crowd of people together in one place':
        'That describes assembling a crowd. Meander describes a winding or wandering path.',
    },
    more: 'Meander comes from the Maeander, a very twisty river in what is now Turkey. A river that bends back and forth is said to meander.',
    tip: "Use meander for rivers, roads, paths and even conversations that wander. 'The river meanders through the valley' is a good image for descriptive writing.",
  },
  'Which definition correctly matches the word "brittle"?': {
    why: 'Brittle describes something hard that snaps or shatters easily instead of bending. Dry twigs, thin ice and some biscuits are brittle.',
    not: {
      'Soft and able to bend without breaking':
        'That is the opposite of brittle. A brittle thing snaps instead of bending.',
      'Warm, soft and pleasant to the touch':
        'That describes how something feels to touch. A brittle thing is hard, not soft, and the word is about how easily it breaks.',
      'Heavy and difficult to lift or carry':
        'That describes weight. A brittle thing can be very light, like a dry leaf.',
    },
    more: 'Brittle can describe people and sounds too. A brittle laugh sounds hard and tense, as if it could crack at any moment.',
    tip: 'Fragile is a wider word than brittle. Anything easily damaged is fragile, but only a hard thing that snaps is brittle.',
  },
  'Which definition correctly matches the word "vacant"?': {
    why: 'Vacant means empty and not being used or lived in. A vacant seat has nobody in it, and a vacant house has no one living there.',
    not: {
      'Full; crowded with many people':
        'That is the opposite of vacant. A vacant place has nobody in it.',
      'Decorated for a celebration':
        'That describes how a place looks. Vacant tells you whether anyone is there.',
      'Locked and impossible to enter':
        'A vacant room may be locked or unlocked. Vacant only means that nobody is using it.',
    },
    more: 'Vacant can describe a face too: a vacant look is blank, as if nobody is thinking behind it. A vacancy is a job or a room that is free.',
    tip: 'Vacant is the opposite of occupied. On a door or sign it tells you the space is free to use.',
  },
  'Which definition correctly matches the word "summit"?': {
    why: 'The summit is the very top of a mountain or hill. Climbers aim for the summit because it is the highest point they can reach on the climb.',
    not: {
      'A deep, narrow valley between two steep slopes':
        'That describes a valley, which is the opposite of a summit. A summit is high and a valley is low.',
      'A path that leads all the way around a lake':
        'That describes a trail or shore path. A summit is a point, not a path.',
      'The flat ground at the foot of a hill or mountain':
        'That describes the bottom of a hill, the opposite end. The summit is the top, the highest point a climber can reach.',
    },
    more: 'A summit is also a meeting between top leaders, such as a world summit, because they meet at the highest level. The idea of reaching the top is the same.',
    tip: "Summit and peak are close in meaning. Use summit when a climb is the focus: 'They reached the summit at dawn.'",
  },
  'Which definition correctly matches the word "fragile"?': {
    why: 'Fragile describes something that breaks or is damaged very easily and needs gentle handling. Glass, old paper and eggs are fragile.',
    not: {
      'Strong enough to carry heavy loads; tough':
        'That is the opposite of fragile. Something fragile could not carry a heavy load.',
      'Bright and colourful to look at':
        'That describes how something looks. A fragile object can be plain.',
      'Slow-moving but very steady':
        'That describes movement. Fragile describes how easily something breaks.',
    },
    more: "A parcel marked 'Fragile' asks the carrier to take care. The word can describe things that are not objects, such as a fragile peace or a fragile hope.",
    tip: 'Describing a feeling or a situation as fragile shows that it could break at any moment.',
  },
  'Which definition correctly matches the word "drowsy"?': {
    why: 'Drowsy means sleepy and slow, as if you could nod off. You might feel drowsy after a big meal, a warm bath or a long journey.',
    not: {
      'Excited, wide awake and full of fresh energy':
        'That is the opposite of drowsy. A drowsy person is only half awake and has little energy.',
      'Angry; quick to argue and hard to calm down':
        'That describes a bad temper. Drowsy describes being sleepy.',
      'Curious about new surroundings':
        'That describes interest in new things. A drowsy person is too sleepy to be eager.',
    },
    more: 'Drowsy often goes with warm, quiet places and times, such as a drowsy afternoon or the drowsy hum of bees. Writers use it to create a slow, sleepy mood.',
    tip: "Some medicine labels say it 'may cause drowsiness'. Knowing the word helps you understand that it could make you sleepy.",
  },
  'Which definition correctly matches the word "gleam"?': {
    why: 'Gleam means to shine with a soft, steady light, often light reflected from something smooth or polished. A polished shoe, a wet road or moonlight on water can gleam.',
    not: {
      'To make a sudden loud noise, such as a bang':
        'That describes a noise, such as a bang or a crash. Gleam is about light, not sound.',
      'To move quickly out of sight and disappear':
        'That describes darting away or vanishing. Gleam is about shining.',
      'To grow dim and fade slowly into darkness':
        'That describes light dying away, the opposite of gleaming. To gleam is to shine.',
    },
    more: "Gleam can be a noun too: a gleam in someone's eye shows excitement or a clever idea. Glow, gleam and glint all describe light: a glow often comes from something warm, a gleam often shines off a smooth surface, and a glint is a quick, small flash.",
    tip: "Use gleam in descriptions of metal, water or eyes. 'The armour gleamed in the sunlight' is a precise, vivid image.",
  },
  'Which definition correctly matches the word "pursue"?': {
    why: 'Pursue means to chase or follow something in order to catch it, or to keep working towards a goal. Police pursue a thief, and a student might pursue a dream of becoming a pilot.',
    not: {
      'To turn away from a goal and give up trying to reach it':
        'That is the opposite of pursue. To pursue is to keep going after something.',
      'To rest after a long effort; to take a break':
        'That describes taking a break. Pursue means carrying on, not resting.',
      'To explain an idea clearly so that others understand it':
        'That describes explaining. Pursue is about chasing, not telling.',
    },
    more: "Pursue works for people and for goals: pursue a suspect, pursue a career, pursue an interest. The noun is pursuit, as in 'in hot pursuit'.",
    tip: "Pursue sounds more formal than 'chase' or 'follow'. Use it in essays: 'The character pursues power at any cost.'",
  },
  'Which definition correctly matches the word "scarce"?': {
    why: 'Scarce means there is not much of something, so it is hard to get. Water is scarce in a desert, and tickets can be scarce for a popular concert.',
    not: {
      'Found everywhere in large numbers; very common':
        'That is the opposite of scarce. Scarce things are hard to find.',
      'Cheap and easy to buy in most shops':
        'Scarce things are usually hard to get, and often cost more. That is the opposite of cheap and easy.',
      'New; invented or made only recently':
        'That describes age. A scarce thing can be very old. Scarce is about how little of it there is.',
    },
    more: 'Scarce appears in geography and history: scarce water, scarce food, scarce jobs. The noun for a shortage is scarcity.',
    tip: "To write about shortages, use scarce instead of 'not much': 'Fresh water was scarce on the island.'",
  },
  'Which definition correctly matches the word "mimic"?': {
    why: "Mimic means to copy how someone speaks or moves, usually to be funny. A comedian who copies a politician's voice is mimicking them.",
    not: {
      'To create something entirely new that nobody has ever seen before':
        'That is the opposite of copying. Mimic means to imitate something that already exists.',
      'To hide an object carefully so nobody can find it':
        'That describes hiding or concealing. Mimic is about copying.',
      'To measure the size of something; to find out exactly how big it is':
        'That describes measuring. Mimic has nothing to do with size.',
    },
    more: 'Some animals mimic others to stay safe, such as a harmless insect that looks like a wasp. Mimic is also a noun: a mimic is a person or animal that copies others.',
    tip: 'Mimic can be playful, but mock is unkind. Choose the word that matches the tone you mean.',
  },
  'Which definition correctly matches the word "feeble"?': {
    why: 'Feeble means weak, with little strength or force. A feeble voice is hard to hear, and a feeble excuse is one nobody believes.',
    not: {
      'Full of power and force': 'That is the opposite of feeble. A feeble thing has little force.',
      'Tall and clearly visible':
        'That describes height and how easy something is to see. Feeble describes weakness.',
      'Relaxed; free from worry': 'That describes a relaxed mood. Feeble describes weakness.',
    },
    more: 'Feeble can describe a body, a sound or an argument: a feeble light, a feeble attempt. It sounds a little scornful, so use it when you want to criticise.',
    tip: "In writing about characters, feeble suggests weakness of body or will. Pair it with a detail, such as 'a feeble wave of the hand'.",
  },
  'Which definition correctly matches the word "linger"?': {
    why: 'Linger means to stay somewhere longer than you need to, because you are slow to leave. People linger after a lesson to chat, and a smell can linger in a room.',
    not: {
      'To rush ahead of the others; to hurry to arrive first':
        'That is the opposite of linger. Someone who lingers is slow, not fast.',
      'To shout loudly in order to be heard above a noisy crowd':
        'That describes shouting. Linger is about staying, not speaking.',
      'To divide something into parts; to share it out equally between people':
        'That describes splitting or sharing. Linger is about time, not dividing.',
    },
    more: 'Linger works for things as well as people. Smells, sounds, memories and illnesses can all linger, meaning they stay on after they should have faded.',
    tip: "Linger gives a sense of reluctance. 'She lingered at the door' shows that she did not want to leave.",
  },
  'Which definition correctly matches the word "vivid"?': {
    why: 'Vivid means so bright, clear and strong that you can picture it in your mind. A vivid description makes the reader see a scene, and vivid colours are bold and bright.',
    not: {
      'Dull and faded; difficult to notice or remember':
        'That is the opposite of vivid. Vivid things stand out and stay in your memory.',
      'Quiet and shy; rarely speaking to other people':
        'That describes a shy, quiet person. Vivid describes colours, descriptions and memories that are strong.',
      'Cold, damp and unpleasant to the touch':
        'That describes temperature and feel. Vivid is about strong images.',
    },
    more: "Vivid can describe colours (vivid red), memories (a vivid memory) and writing (a vivid description). It comes from a Latin word meaning 'lively', from the verb for 'to live', so vivid things feel full of life.",
    tip: 'To write a vivid description, choose details for the senses: colours, sounds and smells. They help the reader picture the scene.',
  },
  'Which definition correctly matches the word "sturdy"?': {
    why: 'Sturdy means strong and solidly made, so it will not break or fall over easily. A sturdy table can take a lot of weight.',
    not: {
      'Thin, weak and likely to bend or snap under weight':
        'That is the opposite of sturdy. A sturdy thing is solid and does not bend easily.',
      'Light enough to float on the surface of water':
        'That describes weight and floating. A sturdy object may be heavy.',
      'Smooth and slippery; hard to keep hold of':
        'That describes the feel of a surface. Sturdy describes strength.',
    },
    more: 'Sturdy can describe people and animals too: a sturdy child, a sturdy pony. It suggests strong, solid and reliable, usually in a good way.',
    tip: 'Use sturdy for things built to last, such as boots, furniture or bridges. It suggests strength you can rely on.',
  },
  'What part of speech is "harbour" in this sentence?': {
    why: "Harbour is a noun here. It names a place, the sheltered water where boats stay, and it follows 'the', a word that comes before a noun.",
    not: {
      'v.': "Harbour can be a verb, as in 'harbour a grudge', but here it follows 'the' and names a place, so it is a noun.",
      'adj.':
        "An adjective describes a noun. Here 'harbour' is not describing anything. It is the place the boats are in.",
    },
    more: "Many English words can be more than one word class, which is also called a part of speech. Harbour is a noun here, but in 'Do not harbour a grudge' it is a verb. The rest of the sentence decides.",
    tip: "A quick test for a noun: can you make it plural in the sentence? 'The boats stayed safe inside the harbours' still makes sense, so harbour is a noun here.",
  },
  'What part of speech is "whisper" in this sentence?': {
    why: "Whisper is a verb here. It tells us what she began to do, and it comes after 'to'. The secret is what she whispered, the thing the action affects.",
    not: {
      'n.': "Whisper can be a noun, as in 'a whisper', but here it is an action she begins, and it has an object, 'the secret'.",
      'adj.':
        "An adjective describes a noun. Here 'whisper' does not describe anything. It is what she does.",
    },
    more: "Whisper is a verb in 'to whisper' and a noun in 'a whisper'. The 'to' before it and the object 'the secret' after it show that it is the verb here.",
    tip: 'Look for the doer and the action. She is the doer and whisper is what she does, so it is a verb.',
  },
  'What part of speech is "ancient" in this sentence?': {
    why: "Ancient is an adjective. It describes the noun 'ruins' by telling us what kind of ruins they are, and it sits between 'the' and the noun, where adjectives often sit.",
    not: {
      'n.': "A noun names a person, place or thing. 'Ancient' names nothing here. It describes the ruins, which are the noun.",
      'v.': "A verb shows an action or a state. Nobody does anything called 'ancient'. It tells us what the ruins are like.",
    },
    more: "Ask 'What kind of ruins?' and the answer is 'ancient'. A word that answers 'what kind?' about a noun is an adjective.",
    tip: "Adjectives add detail. Choose exact ones: 'ancient' says more than 'old' about how far back the ruins go.",
  },
  'What part of speech is "lantern" in this sentence?': {
    why: "Lantern is a noun. It names a thing, a light in a case, and it is the subject of the sentence: it is what glowed. 'A' comes before it, as it does before many nouns.",
    not: {
      'v.': "The verb in this sentence is 'glowed', which tells us what the lantern did. 'Lantern' is the thing that did it.",
      'adj.':
        "An adjective describes a noun. 'Lantern' does not describe anything here. It is what glowed.",
    },
    more: "Most sentences have a subject, often a noun, and a verb that says what it does. Here the subject is the noun lantern, and the verb is glowed. 'Window' is a noun too, but it is only where the glowing happened.",
    tip: "To find the subject, look for the thing doing the action. Ask 'What glowed?' and the answer is a lantern, which is a noun.",
  },
  'What part of speech is "scatter" in this sentence?': {
    why: "Scatter is a verb. It is an action: the wind throws the leaves in different directions. It comes after 'to' and has an object, 'the leaves'.",
    not: {
      'n.': "A noun names a thing. 'Scatter' is not a thing here. It is something the wind does.",
      'adj.':
        "An adjective describes a noun. 'Scatter' does not describe anything. It shows what the wind does to the leaves.",
    },
    more: "A verb with an object does something to someone or something. Ask 'scatter what?' and the answer is 'the leaves'.",
    tip: "Try changing the time: 'The wind scattered the leaves' and 'The wind scatters the leaves' both make sense. A word that changes like this to show past or present is a verb.",
  },
  'What part of speech is "fierce" in this sentence?': {
    why: "Fierce is an adjective. It describes the noun 'storm' by telling us how violent it was. It comes just before the noun it describes.",
    not: {
      'n.': "A noun names a thing. 'Storm' is the noun here, and 'fierce' only describes it.",
      'v.': "A verb shows an action. The action in this sentence is 'crossed'. 'Fierce' tells us what kind of storm it was.",
    },
    more: "Adjectives often come directly before the noun, as fierce does. They can also come after 'was' or 'is': 'The storm was fierce'. It is an adjective in both places.",
    tip: 'A strong adjective helps the reader picture the weather. Fierce makes the storm sound like an animal on the attack.',
  },
  'What part of speech is "meadow" in this sentence?': {
    why: "Meadow is a noun. It names a place, a field of grass, and it is the last word of the phrase 'the open meadow'. 'Open' describes it.",
    not: {
      'v.': "A verb shows an action. The action here is 'grazed'. A meadow is the place where it happens.",
      'adj.':
        "An adjective describes a noun. 'Open' is the adjective here, describing 'meadow'. Meadow is the noun being described.",
    },
    more: "In 'the open meadow', open is the adjective and meadow is the noun. A describing word and the noun it describes often sit side by side.",
    tip: "Ask 'where?' The answer is 'in the open meadow'. The name of a place is usually a noun.",
  },
  'What part of speech is "tremble" in this sentence?': {
    why: "Tremble is a verb. It tells us what his hands did: they shook. It follows 'began to', and a verb comes after those words.",
    not: {
      'n.': "Tremble can be a noun, as in 'a tremble in her voice', but here it is an action his hands do, after 'began to'.",
      'adj.':
        "An adjective describes a noun. 'Tremble' does not describe his hands. It says what they do.",
    },
    more: "The same word can belong to more than one class: 'to tremble' is a verb, and 'a tremble' is a noun. The 'to' before tremble shows the verb.",
    tip: "'Began to' is a helpful clue. The word after it is nearly always a verb, as in began to run, began to cry and began to tremble.",
  },
  'What part of speech is "gentle" in this sentence?': {
    why: "Gentle is an adjective. It describes the noun 'breeze' by saying how soft it was. It comes between 'a' and the noun.",
    not: {
      'n.': "A noun names a thing. 'Breeze' is the noun here, and 'gentle' describes it.",
      'v.': "A verb shows an action. The verb here is 'cooled'. 'Gentle' tells us what sort of breeze it was.",
    },
    more: 'Gentle can describe people, animals and movements as well as weather: a gentle voice, a gentle hand. In every case it describes a noun.',
    tip: "Adjectives set the mood. A 'gentle' breeze feels calm, but a 'bitter' breeze would feel harsh. Choose the one that matches the feeling you want.",
  },
  'What part of speech is "bridge" in this sentence?': {
    why: "Bridge is a noun. It names the thing they crossed, and it is the last word of 'the old stone bridge'. 'Old' and 'stone' both describe it.",
    not: {
      'v.': "Bridge can be a verb, as in 'bridge a gap', but here it follows 'the old stone' and names the thing they crossed, so it is a noun.",
      'adj.':
        "Adjectives describe nouns, and 'old' does that here. 'Stone' describes it too, though it is usually a noun. 'Bridge' is the noun being described.",
    },
    more: "A word such as 'stone' can act as a describing word even though it is usually a noun. In a phrase like this, the main noun is the last word.",
    tip: "In a phrase with describing words in front, the noun usually comes last. Here 'old' and 'stone' both describe 'bridge'.",
  },
  'What part of speech is "gather" in this sentence?': {
    why: "Gather is a verb. It tells us what the class will do: come together. It follows 'will', a word that comes before a verb.",
    not: {
      'n.': "A noun names a thing. 'Gather' does not name a thing here. It is an action the class will do.",
      'adj.':
        "An adjective describes a noun. 'Gather' does not describe the class. It says what the class will do.",
    },
    more: "Words like 'will', 'can' and 'must' are followed by a verb. Seeing 'will' before a word is a strong clue that the word is a verb.",
    tip: "Try changing the tense: 'The class gathered' and 'The class gathers' both work. If a word can change tense, it is a verb.",
  },
  'What part of speech is "curious" in this sentence?': {
    why: "Curious is an adjective. It describes the noun 'child' by telling us what the child is like: someone who wants to know things. It comes before the noun it describes.",
    not: {
      'n.': "A noun names a thing. 'Child' is the noun here, and 'curious' describes it.",
      'v.': "A verb shows an action. The action here is 'asked'. 'Curious' tells us what sort of child it was.",
    },
    more: 'Curious and asked are linked in meaning, since a curious child asks questions, but they belong to different word classes. Curious describes, and asked acts.',
    tip: 'Many adjectives end in -ous, such as curious, famous and nervous. Endings can be a clue, but always check how the word works in the sentence.',
  },
  'What part of speech is "cottage" in this sentence?': {
    why: "Cottage is a noun. It names the thing they rented, a small house, and 'a small' comes just before it.",
    not: {
      'v.': "A verb shows an action. The action here is 'rented'. A cottage is the thing they rented.",
      'adj.':
        "An adjective describes a noun. 'Small' is the adjective here, describing 'cottage'. Cottage is the thing described.",
    },
    more: "The noun answers the question 'rented what?' It is also the main word in the phrase 'a small cottage by the sea'.",
    tip: "To spot a noun that is an object, ask 'who?' or 'what?' after the verb. They rented what? A cottage.",
  },
  'What part of speech is "vanish" in this sentence?': {
    why: "Vanish is a verb. It tells us what the fog will do: disappear. It follows 'will', which comes before a verb.",
    not: {
      'n.': "A noun names a thing. 'Fog' is the noun here, and 'vanish' is what it will do.",
      'adj.':
        "An adjective describes a noun. 'Vanish' does not describe the fog. It says what happens to it.",
    },
    more: 'Some verbs, such as vanish, do not need an object. The fog vanishes, and nothing else needs to be named to complete the idea.',
    tip: "A word like 'will' before another word can help you find verbs fast. 'Will vanish' is a verb phrase.",
  },
  'What part of speech is "brilliant" in this sentence?': {
    why: "Brilliant is an adjective. It describes the noun 'idea' by saying how clever it is. It sits between 'a' and the noun it describes.",
    not: {
      'n.': "A noun names a thing. 'Idea' is the noun here, and 'brilliant' describes it.",
      'v.': "A verb shows an action or a state. The verb here is 'was'. 'Brilliant' describes the idea.",
    },
    more: 'Brilliant can describe people, ideas and light: a brilliant student, a brilliant idea, a brilliant light. In each case it describes a noun.',
    tip: "Dictionary entries show the word class straight after the word. 'adj.' means adjective, so check it before you decide how to use a word.",
  },
}
