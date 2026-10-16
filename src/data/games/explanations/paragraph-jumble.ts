import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Paragraph Jumble: the explanation a student sees after each answer, by question
 * key (src/data/games/banks/paragraph-jumble.ts). Written with AI on 16 October
 * 2026 and checked against each paragraph and its order, as the founder decided
 * (src/lib/games/explanations/types.ts).
 */
export const EXPLANATIONS: GameExplanations = {
  'A school trip to the coast': {
    why: "'Last Friday' opens by saying when, who and where. 'As soon as we arrived' must follow the journey, and 'My group' needs the groups the teacher has just made. Then time connectives run through the day: the morning, 'After lunch', and 'By the time the coach left' at the end.",
    more: "A recount usually opens with when, who and where, tells events in time order, and ends with a comment or feeling, as 'tired but happy' does here.",
    tip: "When you write a recount, start each new step with a time connective such as 'After lunch' or 'By the time', so your reader never loses track.",
  },
  'How rainbows form': {
    why: "'A rainbow appears' is the topic sentence: it says what the paragraph will explain. 'First', 'Next' and 'Finally' put the steps in order, and 'This is why' must come last, because 'This' points back to the whole process.",
    more: 'Explanation texts often open with a general statement, then give steps in order, then a conclusion about what it all means. The science is right too: light bends, splits into colours and reflects back to your eyes.',
    tip: "Sequence words such as 'First', 'Next' and 'Finally' are the strongest clues. Find them before you read the rest.",
  },
  'Why schools should keep libraries': {
    why: "'Some people argue' states the opposing view, so it comes first. 'However' turns against it, 'In addition' adds a second point, and 'For these reasons' sums up, so it must be last. 'It' in the third sentence also needs 'a library' from the second.",
    more: "This is a classic argument shape: the other side's view, a counter-argument, extra support, then a conclusion. Starting with the opposing view makes the writer seem fair.",
    tip: "In your own arguments, use 'However' to answer the other side and 'For these reasons' to conclude. They make your structure easy to follow.",
  },
  'A surprising discovery in the attic': {
    why: "'Maya had never been allowed' introduces Maya and the attic, so it comes first; later sentences call her 'she'. 'That afternoon' sets the moment, then the story follows her: up the stairs, the chest in the corner, 'the lid' of that chest, and 'Each one', the letters that just fell out.",
    more: "A pronoun such as 'she' or 'it' needs a name or noun before it, so the sentence with the name usually comes first. Phrases such as 'the lid' and 'each one' point back to things already mentioned.",
    tip: "When you unjumble a story, track pronouns and 'the' words back to what they refer to. Each one must come after the thing it points to.",
  },
  'The morning of the football final': {
    why: "The events follow the clock: waking up on 'The morning of the final', breakfast, 'On the way to the pitch', 'During the match' and 'In the end'. Each time phrase moves the day forward, so no sentence can swap places.",
    more: "'In the end' signals the last event, and the result, a last-minute goal, makes a satisfying ending after falling behind.",
    tip: "Time phrases at the start of sentences, such as 'During the match', are called fronted adverbials. They help readers follow a recount.",
  },
  'How bees make honey': {
    why: "'Honey begins as nectar' sets out the starting point. 'This nectar' points back to it, 'Inside the hive' follows carrying it back to the hive, 'They then' continues the bees' work, and 'As a result' gives the final product.",
    more: "Explanations of a process follow it from beginning to end. Words such as 'this' and 'they' link each sentence to the one before.",
    tip: "When you explain a process, link your sentences with 'this', 'then' and 'as a result', so each step leads into the next.",
  },
  'Should pupils wear school uniform?': {
    why: "'Many students complain' gives the opposing view first. 'On the other hand' answers it, 'Furthermore' adds a second point in favour of uniform, and 'Therefore' draws the conclusion, so it must come last.",
    more: "'Furthermore' only makes sense after a first point, and 'Therefore' only after the reasons it depends on. Connectives show the job each sentence does.",
    tip: 'Learn connectives by their job: contrast (on the other hand, however), addition (furthermore, moreover) and conclusion (therefore, in conclusion).',
  },
  'The night the power went out': {
    why: "'It was an ordinary evening' sets the scene and ends with the lights dying. 'Suddenly' follows at once with the darkness, then Dad finds candles, and 'the small flames' must come after the candles. 'Strangely' gives the ending, looking back on the whole night.",
    more: 'Stories often start with normal life, add a problem (the power cut), show how the characters respond, then end with a reflection. That shape helps you place each sentence.',
    tip: "In your own stories, a sentence such as 'It was an ordinary evening until...' is a quick way to set up a sudden change.",
  },
  'Visiting my grandparents in the countryside': {
    why: "'Every summer' opens by saying when and where the family goes. The visit then follows its own order: 'When we arrive', 'In the afternoons', 'Before we leave', and finally saying goodbye, which ends the trip.",
    more: "This recount describes something that happens every year, so it is written in the present tense ('drives', 'lets'). The time order works in just the same way.",
    tip: "Use 'When', 'Before' and 'After' to put events in order. They work in present and past tense recounts alike.",
  },
  'Why leaves change colour in autumn': {
    why: "'During summer' gives the starting point: green leaves full of chlorophyll. 'As the days grow shorter' brings the change, 'this chemical' points back to chlorophyll, 'Without the green chlorophyll' shows the result, and 'This is why' gives the conclusion.",
    more: 'The yellow and orange were in the leaf all along, hidden by the green. Red is different: many trees make red colours fresh in autumn.',
    tip: "'This is why' and 'As a result' signal a conclusion. In a jumbled explanation, a sentence starting with them usually goes last.",
  },
  'Should homework be banned?': {
    why: "'It is often claimed' gives the opposing view first. 'Nevertheless' argues back, 'Moreover' adds a further point, and 'In conclusion' gives the writer's final position, so it must come last.",
    more: "'Nevertheless' means 'in spite of that', so it must follow the claim it answers. The conclusion is balanced: set homework carefully rather than ban it.",
    tip: "'Nevertheless' is a more formal way of saying 'however'. Varying your connectives makes your writing sound more confident.",
  },
  'A letter that changed everything': {
    why: "'For weeks' sets up the long wait. 'Then, one rainy Tuesday' brings the envelope, 'it' in the next sentence is that envelope, 'Inside' reveals the letter, and 'From that moment' looks ahead to how it changed his life.",
    more: 'The writer builds suspense by making us wait, as Daniel waited, before we learn what the envelope holds.',
    tip: 'In your own stories, delay the big reveal by a sentence or two. Show a reaction, such as trembling hands, before you show the news.',
  },
  'My first day at secondary school': {
    why: "'On my first day' opens with when and how the writer felt. 'At the gate' is the arrival, 'Throughout the morning' comes next, 'By lunchtime, however' turns things around, and 'Looking back' reflects on the whole day.",
    more: "'However' shows a contrast: the struggle of the morning against the friends made by lunchtime. The ending looks back, as many recounts do.",
    tip: "Ending a recount by looking back, with phrases such as 'Looking back' or 'In the end', shows what the experience meant.",
  },
  'How a volcano erupts': {
    why: "'Deep beneath the ground' introduces magma, which the later sentences name. 'Because magma is lighter' explains why it rises, 'then' brings the pressure, 'When it finally bursts out' is the eruption, and 'Eventually' gives what happens last.",
    more: 'Each step causes the next: heat melts rock, magma rises, pressure builds, lava erupts and then cools. Cause and effect links the sentences like a chain.',
    tip: "In explanations, 'because' gives a cause and 'eventually' signals a final stage. Look for both when you sort a process.",
  },
  'Should mobile phones be allowed in lessons?': {
    why: "'Plenty of teachers believe' states the view the writer will argue against, so it comes first. 'In contrast' answers it, 'In addition' adds a second reason, and 'For these reasons' concludes. 'It' in the third sentence also needs 'a phone' from the second.",
    more: "Conclusions often begin 'For these reasons', which only makes sense once reasons have been given.",
    tip: 'Answer the other side early, as this writer does, then build your own case with addition connectives before you conclude.',
  },
  'The race I almost did not finish': {
    why: "'Halfway through the cross-country race' sets the scene and the struggle. The sharp pain makes the narrator want to stop, then 'Just then' brings the friend's shout, 'her voice' points back to that friend, and crossing the line comes last.",
    more: "The story turns on one moment, the friend's voice. Before it, everything goes wrong; after it, the narrator keeps going.",
    tip: "'Just then' and 'Suddenly' signal a turning point. Use them in your own stories when something changes everything.",
  },
  'A weekend camping in the forest': {
    why: "'Last weekend' says when and who. 'As soon as we set up the tent' brings the rain, 'We sheltered inside' is the response, 'Later that night' moves the time on, and 'Despite the rain' looks back on the whole trip.",
    more: "'Despite the rain' only makes sense once the rain has happened, which is why the comment on the trip must come last.",
    tip: "End a recount with a sentence that sums up the experience, such as 'Despite the rain, it turned out to be an unforgettable adventure.'",
  },
  'How recycling reduces waste': {
    why: "'Recycling is the process' defines the topic, so it comes first. 'First', 'then' and 'After that' put the stages in order, 'These materials' points back to the glass and plastic, and 'As a result' gives the final effect.",
    more: 'Explanation texts often begin with a definition, then describe the stages in order and finish with the result.',
    tip: 'When you write an explanation, define the topic in your first sentence. It tells your reader exactly what the paragraph will cover.',
  },
  'Should zoos still exist?': {
    why: "'Critics argue' states the opposing view first. 'However' answers it, 'Furthermore' adds a second benefit, 'they' points back to 'many modern zoos', and 'On balance' weighs both sides to conclude.",
    more: "'On balance' shows the writer has considered both sides before deciding, which makes the conclusion sound fair and reasonable.",
    tip: "Use 'On balance' in a conclusion when you want to show you have weighed up both sides of an argument.",
  },
  'The stray dog that followed me home': {
    why: "'On my walk back from school' introduces the dog; after that it is called 'it'. The events follow the walk home: trying to shoo it away, 'By the time I reached my street', Mum at the door, and 'That evening', the cosy ending.",
    more: "Following one pronoun, 'it', through a story is a good way to check the order. A pronoun normally comes after the thing it refers to.",
    tip: "Write stories in time order, and use time phrases such as 'By the time' and 'That evening' to move the reader along.",
  },
  'Sports day at primary school': {
    why: "'I still remember' opens the memory. 'In the morning' starts the day, 'During the relay' brings the mistake, 'Fortunately' shows how the teammates reacted to it, and the last sentence sums up the lesson learned.",
    more: "'Fortunately' only makes sense after something has gone wrong, so it must follow the dropped baton.",
    tip: "Words such as 'Fortunately' and 'Unfortunately' show how events turn out. They make a recount more than a list.",
  },
  'How the water cycle works': {
    why: "'The water cycle describes' introduces the topic. 'To begin with' starts the process, 'This water vapour' points back to the evaporated water, 'When the clouds become heavy' follows the clouds forming, and 'Finally' completes the loop.",
    more: "'To start again' at the end shows why it is called a cycle: the water goes round and round.",
    tip: 'In a process that loops, find the starting point first, here evaporation, then follow each step until you are back where you began.',
  },
  'Should children have less screen time?': {
    why: "'Some teenagers insist' gives the opposing view first. 'Even so' argues back, 'In addition' adds a second reason, and 'Ultimately' gives the writer's final view, so it comes last.",
    more: "'Even so' means 'despite that'. It accepts that the other side has a point, but argues against it.",
    tip: "'Ultimately' is a strong way to begin a conclusion. It tells the reader you are giving your final view.",
  },
  'The mysterious key in the garden': {
    why: "'While digging a flower bed' starts the discovery. 'Brushing away the soil' reveals the key, 'it' in the next sentence is that key, 'Then he remembered' brings the idea of the shed, and the key turning in the shed door is the climax.",
    more: 'The story is a chain of cause and effect: finding the key leads to searching for its lock, which leads to the shed.',
    tip: 'Story jumbles are easier if you ask what has to happen first. Leo cannot try the key in the shed before he has found it.',
  },
  'My grandmother teaching me to bake': {
    why: "'When I was small' opens the memory. 'First' and 'Next' give the baking steps in order, 'While the cake rose in the oven' comes after the mixing, and 'To this day' brings us back to the present.",
    more: "'To this day' links a memory to the present, showing that the experience still matters to the writer.",
    tip: "End a memory with a link to now, such as 'To this day' or 'Even now', to show why it matters.",
  },
  'How a seed becomes a plant': {
    why: "'Most plants start life as a tiny seed' gives the starting point. 'Given warmth and water' starts the growth, the root comes 'then', the shoot 'Soon afterwards', and 'this shoot' in the last sentence points back to it.",
    more: 'The science fixes the order too: a seed sends down its root first, to anchor it and take in water, and then its shoot grows up towards the light.',
    tip: "A reference word such as 'this shoot' must come after the sentence that introduces the shoot. Use reference words as anchors.",
  },
  'Should plastic bags be banned in shops?': {
    why: "'Shoppers often say' gives the view the writer disagrees with. 'However' challenges it, 'these bags' points back to the plastic bags, 'Moreover' adds another point, and 'For these reasons' concludes.",
    more: "'Moreover' means 'also' or 'what is more'. It must come after a first point, which here is that the bags take a long time to break down.",
    tip: "In a jumbled argument, find the conclusion first: it often starts with 'For these reasons', 'Therefore' or 'In conclusion'.",
  },
  'Lost on the way to the museum': {
    why: "'Our class was supposed to' sets up the plan. 'Distracted by a street performer' is how it goes wrong, 'When we looked up' shows the others have gone, 'Trying not to panic' is the response, and 'at last' marks the ending.",
    more: "'Was supposed to' hints that the plan will not go smoothly, which builds suspense from the first sentence.",
    tip: 'A story often follows plan, problem, response and resolution. Use that shape to sort jumbled sentences and to plan your own stories.',
  },
}
