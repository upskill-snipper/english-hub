import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Paragraph Jumble: the explanation a student sees after each answer, by question
 * key (src/data/games/banks/paragraph-jumble.ts). Written with AI on 16 October
 * 2026 and checked against each paragraph and its order, as the founder decided
 * (src/lib/games/explanations/types.ts).
 *
 * Rebuilt for depth on 24 October 2026: explanations for the 187 questions
 * added (62 real paragraphs and 40 real gaps copied from the out-of-copyright
 * novels, 32 of the site's own paragraphs and 53 of its own "choose the
 * connective" gaps), and new ones for the seven arguments, which were
 * rewritten under their old topics so that no two share a shape. Each
 * paragraph's explanation names the clue that fixes each sentence's place;
 * each gap's says what job its connective does and, for every wrong option,
 * why that job does not fit. Written with AI and checked against each
 * question, as the founder decided (src/lib/games/explanations/types.ts).
 *
 * Checked on 31 October 2026 by a second reader, as the founder decided: the
 * six questions taken out of the bank (its docblock says why) took their
 * explanations with them, and two were rewritten: "Diana and Mary are
 * married", which now starts a sentence later in the book, and "Should
 * homework be banned?", for a slip of wording.
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
    why: "The question must come first, because the next sentence gives 'the answer'. 'It' then needs 'the school library', just named. 'That last point' picks up the librarian at the end of the third sentence, and 'that kind of help' in the conclusion points back to finding information a pupil can trust.",
    more: "Opening an argument with a question draws the reader in and sets up the case the rest of the paragraph makes. Phrases such as 'that last point' and 'that kind of help' form a reference chain: they tie each sentence to the one before without a single connective.",
    tip: 'Try opening a persuasive paragraph with a question your reader cannot easily answer, then answer it yourself in the next sentence.',
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
    why: "The writer states the view first: 'School uniform does more good than harm.' 'Its greatest benefit' needs uniform named before it, and 'also' adds a second benefit. 'Neither benefit, though' can only come once both are given, and 'both advantages' and 'the main complaint' sum up everything before them.",
    more: "This argument puts its view first and refines it at the end. The turn comes with 'though' in the middle of a sentence, not with a connective at the start, so you have to read for meaning, not just the first word.",
    tip: 'When you argue, you can state your view, give two reasons, admit a weakness, then offer an improved version of your view. It shows you have thought about the other side.',
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
    why: "'It is true that' concedes a point, so it opens. 'For example' gives an example of homework set out of habit, and 'homework like that' points back to the worksheet. 'Better homework' picks up the phrase just used, and 'that benefit' and 'the waste' in the last sentence gather both sides together.",
    more: "Starting with a concession makes a writer sound fair before they disagree. The 'however' in the third sentence marks the turn, but it sits inside the sentence, so the reference words do most of the work of ordering.",
    tip: "In an argument, concede a point with 'It is true that' or 'Admittedly', then turn it: 'The answer, however, is...'. Examiners reward writing that weighs a view rather than ignoring it.",
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
    why: "The first sentence introduces 'a phone' and what it can do. 'The same phone can also' must come next, with its downside. 'Which of the two it becomes' needs both sides, and the school's rule follows from it. 'That way' sums up the rule, and 'the tool' and 'the distraction' echo the first two sentences.",
    more: 'The paragraph sets out two sides of one object, then argues that the rules decide which side wins. A middle way like this is often more convincing than a simple yes or no.',
    tip: 'To argue for a middle way, show both sides fairly, then propose a rule that keeps the good and removes the bad.',
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
    why: "The oryx must be introduced before 'Its return'. 'Stories like this' needs the story told first, so the claim comes third. 'Critics are right, though' then admits a weakness, and 'The answer' settles both sides by sorting the zoos worth keeping from the rest.",
    more: 'Leading with a true example makes the argument concrete before it is stated. The Arabian oryx really did vanish from the wild and was returned from herds bred in zoos. A concession followed by a solution shows the writer has weighed the other side.',
    tip: 'Begin an argument with one striking, true example, then say what it proves. A specific case is more persuasive than a general claim.',
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
    why: "'Not all screen time is the same' is the claim, and the next sentence proves it with two kinds of hour. 'The second kind' points back to scrolling, so it follows that example. 'Instead of a single daily limit' proposes a different rule, and 'A rule like that' must come after the rule it describes.",
    more: "This writer argues against a simple limit by splitting screen time into kinds. Phrases such as 'the second kind' and 'a rule like that' are reference words: each depends on something the reader has already been told.",
    tip: "To challenge a popular view, make a distinction it ignores, as 'Not all screen time is the same' does, then build your proposal on that distinction.",
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
    why: "The paragraph begins with the fact the rest depends on: the 5p charge of October 2015. 'The charge' points back to it, and 'Within a few years' follows the shoppers' change of habit. 'That change' needs the fall in bags first, and the final sentence states the lesson drawn from it.",
    more: 'This argument is built on evidence: a real policy and what happened next. Large shops in England did start charging 5p in October 2015, and the main supermarkets went on to hand out far fewer bags. The view comes from the evidence, not before it.',
    tip: "When you use evidence in an argument, follow it with a sentence that says what it shows, such as 'That change suggests...'. Evidence without a comment makes no point.",
  },
  'Lost on the way to the museum': {
    why: "'Our class was supposed to' sets up the plan. 'Distracted by a street performer' is how it goes wrong, 'When we looked up' shows the others have gone, 'Trying not to panic' is the response, and 'at last' marks the ending.",
    more: "'Was supposed to' hints that the plan will not go smoothly, which builds suspense from the first sentence.",
    tip: 'A story often follows plan, problem, response and resolution. Use that shape to sort jumbled sentences and to plan your own stories.',
  },
  "Scrooge's clerk and the coal-box": {
    why: "The first sentence introduces 'his clerk' in his 'dismal little cell', so it opens. The two fires come next, and 'But he couldn't replenish it' needs the clerk's tiny fire just mentioned. 'Wherefore', an old word for 'therefore', gives the result: with no coal, he tries to warm himself at a candle.",
    more: "Dickens makes Scrooge's meanness comic and cruel at once: a fire so small it looks like one coal, and a threat of the sack for asking for more. The clerk's failure with the candle is a joke, but it also makes us pity him.",
    tip: "When you analyse a character, look at how other characters suffer because of them. The clerk's cold tells us more about Scrooge than any adjective.",
  },
  "Echoes in Scrooge's house": {
    why: "'The sound' opens the paragraph, and the 'echoes' in the second sentence are that sound ringing round the house. 'Scrooge was not a man to be frightened by echoes' can only come once the echoes have been described, and 'He fastened the door' shows him carrying on regardless.",
    more: 'Dickens builds an eerie mood and then lets Scrooge brush it aside. The reader is more uneasy than he is, which builds suspense before the ghost appears.',
    tip: 'To build suspense, describe something eerie and then show a character ignoring it. The reader worries on their behalf.',
  },
  'The city vanishes': {
    why: "The first sentence moves the Spirit and Scrooge onto a country road. 'The city had entirely vanished' explains the change, and 'Not a vestige of it' means not a trace of that same city. 'The darkness and the mist had vanished with it' adds what went with the city, and the clear winter day takes their place.",
    more: 'Dickens says the same thing three ways (vanished, not a vestige, vanished with it), which makes the sudden change of scene feel complete.',
    tip: "Reference words such as 'it' and 'with it' sit close to the noun they stand for. If two sentences both say 'it', check which noun each one points back to.",
  },
  'Scrooge sees himself as a younger man': {
    why: "'This was not addressed to Scrooge... but it produced an immediate effect' sets up a result, and 'For again Scrooge saw himself' gives it. 'He was older now' describes that younger Scrooge, his face comes next, and the 'eager, greedy' eye ends on the avarice his face has 'begun to wear'.",
    more: "Dickens moves from the whole person to the face and then to the eye, closing in like a camera. The 'growing tree' whose shadow will fall hints at the miser Scrooge will become.",
    tip: 'When you write a description, zoom in: the whole figure, then the face, then one telling detail. End on the detail that matters most.',
  },
  'Mr Jones fires into the dark': {
    why: 'The uproar wakes Mr Jones, so his waking comes first. He seizes the gun, the pellets hit the barn and the meeting breaks up; then everyone flees to bed, and the farm falls asleep. Each sentence is caused by the one before, so none can move.',
    more: 'Orwell tells a chain of cause and effect in plain, quick sentences. Jones thinks there is a fox in the yard, so he never learns that the animals were meeting, and the plan for a rebellion stays secret.',
    tip: 'In a jumbled story, ask what causes what. If one event causes another, the cause must come first.',
  },
  'The cows that had not been milked': {
    why: "'But at this moment' opens with the cows' loud lowing. The second sentence explains it: they had not been milked for a whole day. The pigs then milk them, and 'Soon there were five buckets' must follow the milking.",
    more: 'Each sentence answers the one before: a problem, its cause, a solution and its result. Ordering by problem and solution works for stories and explanations alike.',
    tip: 'When you write a paragraph, try the shape problem, cause, solution, result. It keeps a reader moving forward.',
  },
  'Napoleon and the puppies': {
    why: "The first two sentences set up Napoleon's claim about 'the education of the young'. The puppies are then born, and 'As soon as they were weaned' must follow their birth. 'He took them up into a loft' is the last step, ending with the farm forgetting they exist.",
    more: "Orwell plants a clue: Napoleon's interest in 'education' is really a plan to raise loyal, fierce dogs in secret. A reader who links his claim to the puppies can guess what he will use them for.",
    tip: "In an essay on Animal Farm, link a character's words to his actions. Napoleon's talk of education hides his real aim, which is power.",
  },
  "Frederick's bank-notes": {
    why: "'When it was all gone' needs the timber being carted away, so the timber comes first. The meeting follows, then Napoleon on the platform with the money, then the animals filing past it. 'And Boxer put out his nose' picks one animal from that line, so it comes last.",
    more: "The scene is quietly ironic: the animals admire the 'flimsy white things' as if they were treasure. The flimsy notes hint at the later discovery that they are forgeries.",
    tip: 'Writers often end a paragraph on one small, telling detail. Ask what that detail suggests: here, how thin and worthless the notes are.',
  },
  'Boxer feels his age': {
    why: "'They limped into the yard' opens the scene. The next sentence names Boxer and his wound, so 'He saw ahead of him' must follow it. 'But for the first time' turns from his usual determination to a new doubt, so it comes last.",
    more: "Orwell moves from the whole group to Boxer's body and then into his mind. The final thought, that his great muscles may be failing, makes the reader fear for him.",
    tip: "'For the first time' marks a turning point in a character. Look for phrases like it when you track how a character changes.",
  },
  'The pigs on two legs': {
    why: "'Yes, it was Squealer' answers what came before, so it opens, and 'he was strolling' describes him. 'And a moment later' brings the other pigs, 'Some did it better than others' describes their walking, and 'And finally' saves Napoleon for last.",
    more: 'Orwell builds a procession from one pig to many to the leader himself, each more shocking than the last. Walking upright shows the pigs have become like the humans they overthrew.',
    tip: 'A sequence that builds to its most important item, like this procession, is called a climax. Save your strongest point or image for the end.',
  },
  'Laughter from the farmhouse': {
    why: "The laughter and singing come first. 'At the sound of the mingled voices' reacts to them, and the animals' question shows the curiosity they now feel. 'With one accord they began to creep' is the action that follows, so it ends the paragraph.",
    more: "The question takes us inside the animals' minds. 'Terms of equality' is ironic: what they see next shows that the pigs have joined the humans, not freed the animals.",
    tip: "A question in a story can show what characters are thinking without a word like 'wondered'. Try it in your own writing.",
  },
  'Footsteps in the street': {
    why: "The steps come nearer, so the lawyer can then 'soon see what manner of man' he faces. The next sentence describes that man: 'He' is now the stranger, not the lawyer. 'But he made straight for the door' moves the stranger on, ending with the key.",
    more: "Stevenson builds suspense through sound before sight. Notice how 'he' changes from the lawyer to the stranger: the man is described as soon as Utterson can see him.",
    tip: "When a paragraph has two male characters, track each 'he' carefully. The sentence that describes a person must come right after the moment he is seen.",
  },
  'The mixture in the glass': {
    why: "The visitor adds the powder first. 'The mixture' then changes colour and fizzes, 'Suddenly and at the same moment' the fizzing stops, and 'these metamorphoses' in the last sentence gathers up all the changes just described.",
    more: "'Metamorphoses' means changes of form, and the changing colours hint at a bigger change about to happen before Lanyon's eyes. 'Ebullition' means bubbling or fizzing.",
    tip: "A summary phrase such as 'these changes' or 'these events' must come after the things it sums up. Use it as an anchor when you order sentences.",
  },
  'A knock at the cottage door': {
    why: "The knock comes first, making Eppie rise. 'Beautiful she looked... as she stepped to open the door' follows her rising, and 'The flush deepened' needs the 'slight flush' just mentioned. Her curtsy and holding the door wide come last, as the visitors enter.",
    more: "'The flush deepened' is a clue that only works after 'a slight flush'. Eliot shows Eppie's feelings through her blushing face, not by telling us what she thinks.",
    tip: "Look for words like 'deepened', 'again' or 'more', which only make sense after a first mention. They fix the order of two sentences.",
  },
  'Hester throws the letter away': {
    why: "Hester throws the letter first. 'The mystic token' is the same letter, now landing by the stream, and 'With a hand's-breadth further flight' imagines it falling in. 'But there lay the embroidered letter' turns back to where it really landed, so it comes last.",
    more: "Hawthorne names one object three ways: 'the scarlet letter', 'the mystic token' and 'the embroidered letter'. Changing the name avoids repetition and shows how much the letter means.",
    tip: 'Writers often swap a noun for another phrase meaning the same thing. When you order sentences, follow these chains: each new name points back to the first.',
  },
  'Hester listens to the sermon': {
    why: "The sermon begins in the meeting-house, so that comes first. 'Kept Hester near the spot' needs that place, and 'she took up her position' follows. 'It was in sufficient proximity' means her position was close enough to hear, so it must come last.",
    more: "'Proximity' means nearness, and 'auditor' here means a listener. The scaffold where Hester stands is where she was once shamed in public, which makes her choice of place striking.",
    tip: "When a sentence starts with 'It', ask what 'it' is. Here it is Hester's position, so the sentence must follow the one that gives her position.",
  },
  "Henry Clerval's last evening": {
    why: "The day of departure comes first, and 'the last evening' is the evening before it. 'He had endeavoured' says what Clerval had tried, 'His father' explains why it failed, and 'Henry', Clerval's first name, brings him back before 'He said little' ends on his quiet resolve.",
    more: "'Henry' is needed before 'He said little': straight after a sentence about his father, 'He' would seem to mean the father. Writers name a character again to keep pronouns clear.",
    tip: "When two people of the same sex share a paragraph, use a name again before 'he' or 'she' to show who you mean.",
  },
  'Justine is called on to speak': {
    why: "'Justine was called on for her defence' names her, so it opens. 'Her countenance had altered' describes her face, 'Surprise, horror, and misery were strongly expressed' says what it showed, and 'when she was desired to plead' returns to her defence, so it ends.",
    more: "'Countenance' means face or expression. Shelley shows Justine's fear through her face and then her effort to speak, which makes her seem innocent and brave.",
    tip: "Notice how the last sentence links back to the first ('defence', 'plead'). A paragraph that circles back like this feels complete.",
  },
  'A night at Chamounix': {
    why: "Arriving comes first, and exhaustion follows the long journey. At the window Victor watches the lightning and hears 'the rushing of the Arve', and 'The same lulling sounds' must come straight after that rushing, so the sentence about sleep ends the paragraph.",
    more: "'The same' always points back to something already named. Shelley sets the wild scene of lightning and a rushing river against the peace of sleep, which Victor calls 'oblivion', a forgetting of his grief.",
    tip: "'The same' and 'such' are reference words: they point back. When you find one, look for the sentence it points to, which usually comes just before it.",
  },
  'Home to Geneva': {
    why: "The return to Geneva comes first. 'The sweet girl' is Elizabeth, named in the first sentence, and her tears are at Victor's changed looks. 'I saw a change in her also' needs that change in Victor first, and 'She was thinner' describes the change in her, so it comes last.",
    more: "The word 'also' fixes the order: Elizabeth must notice a change in Victor before he can see a change in her too.",
    tip: "'Also', 'too' and 'as well' need something to add to. A sentence containing one usually comes after the sentence it adds to.",
  },
  'The long pursuit': {
    why: "'I pursued him' states the task, then the pursuit follows a route: along the Rhone, then to the Mediterranean, where the fiend boards a ship. 'I took my passage in the same ship' needs that ship, so it ends the paragraph.",
    more: 'The geography helps: the river Rhone flows into the Mediterranean, so the sea appears after following the river. Real places can fix the order of a journey.',
    tip: 'In a journey, follow the route. Ask where each place is and which one the traveller would reach first.',
  },
  'Trapped in the ice': {
    why: "The letter opens with Walton's peril. The ice comes next, then the crew who 'look towards me for aid'. 'My courage and hopes do not desert me' is answered by 'Yet it is terrible to reflect', and 'these men' needs the crew already named.",
    more: "Walton moves from danger to his crew to guilt, ending 'If we are lost, my mad schemes are the cause.' His ambition has endangered others, as Victor's did, which is one reason Shelley frames the novel with his letters.",
    tip: "Look for phrases like 'these men' that need a group already named. They often come late in a paragraph.",
  },
  "My sister's apron": {
    why: "The first sentence introduces 'My sister, Mrs. Joe', so it opens. The next describes her and her coarse apron, 'this apron' points back to it, and 'Though I really see no reason why she should have worn it at all' is Pip's comment on that apron, so it ends.",
    more: "Dickens's humour is in the details: skin so red she seems to wash with a nutmeg-grater, and a bib 'stuck full of pins and needles'. The apron becomes a sign of how prickly and proud Mrs Joe is.",
    tip: "When you write about a character, choose one object that shows their nature, as the pin-filled apron shows Mrs Joe's.",
  },
  'One memorable day': {
    why: "Pip begins with his own memorable day. 'But it is the same with any life' widens the point, 'Imagine one selected day struck out of it' asks us to test it on that life, and 'Pause you who read this' turns to the reader's own life, so it ends the paragraph.",
    more: "The paragraph moves from Pip to everyone to you, the reader. The chain 'of iron or gold, of thorns or flowers' is a metaphor: a life's course is linked, day by day, from a first link.",
    tip: 'Moving from a personal example to a general truth, then to the reader, is a strong way to end an essay or a speech.',
  },
  'The stranger at the inn': {
    why: "'He was a secret-looking man whom I had never seen before' introduces the stranger, so it opens. His head and eye are described next, then his pipe and his nod, and 'So, I nodded' answers that nod, so it comes last.",
    more: "Dickens makes the stranger strange and threatening through small details: one eye half shut 'as if he were taking aim'. The nods are a silent signal between them.",
    tip: 'A reply, like the nod back, always follows what it replies to. Look for answers and reactions when you order a story.',
  },
  'The night of the attack': {
    why: "Joe's time at the inn comes first, and 'While he was there' sets Pip's sister at the door. 'The man' is the farm-labourer just mentioned, so his doubt about the time follows. Joe finds her at five to ten, and 'had not then burnt' describes the room at that moment, so it ends.",
    more: "The paragraph reads like a detective's report: exact times, a witness and a clue. The blown-out candle hints that someone came in on purpose, which Dickens leaves the reader to puzzle over.",
    tip: 'In a report or a mystery, give times in order and end on the clue. It leaves the reader thinking.',
  },
  'Messages on a slate': {
    why: "Pip's sister lies ill first, and the next sentence lists what the injury has done to her. 'When, at last, she came round' moves on to her recovery and the slate. The muddles of spelling and reading follow from the slate, and the list of Pip's mistakes gives examples of them, so it ends.",
    more: "Dickens finds comedy even here: 'Tea for Joe' and 'the baker for bacon' are muddles of words that look alike. The humour softens a painful scene.",
    tip: "A list of examples usually comes after the general statement it illustrates, as the mistakes follow 'extraordinary complications'.",
  },
  'Herbert and the paper-bags': {
    why: "Herbert is wrestling with the door while holding his fruit, so Pip offers to take the bags. 'He relinquished them' needs that offer. 'It yielded so suddenly' is the door giving way after the struggle, and the last sentence turns from the joke to Pip's amazement, so it ends.",
    more: "'Making jam of his fruit' is a joke: he is squashing it. The comedy of the door 'as if it were a wild beast' contrasts with Pip's dreamlike feeling about his new life in London.",
    tip: "'But' at the start of a sentence often turns from an action to a feeling. It can close a funny scene on a serious note.",
  },
  'Drummle and Startop': {
    why: "Mr Pocket shows Pip his room first, then introduces him to the occupants of two others, 'Drummle and Startop'. Drummle is described next, and Startop, 'younger in years and appearance', must follow him, because 'younger' compares him with the 'old-looking' Drummle.",
    more: "The two descriptions are comic portraits: Drummle 'of a heavy order of architecture', like a building, and Startop afraid his head will explode with knowledge.",
    tip: "Comparatives such as 'younger' or 'taller' need the thing they are compared with. The sentence with the comparison comes second.",
  },
  'A footstep on the stair': {
    why: "Pip's start of fear comes first. 'It was past in a moment' means the fear passed, and he hears the footstep again. He then takes his lamp to the stair-head, and 'on seeing my lamp' needs the lamp, so 'Whoever was below had stopped' comes last.",
    more: "Dickens builds suspense by keeping the visitor unseen: 'Whoever was below'. The reader, like Pip, does not know who is coming up the stairs.",
    tip: "To build suspense, delay naming a person. 'Whoever was below' makes the reader want to read on.",
  },
  'Back to the marshes': {
    why: "The dismal marshes come first. 'A stranger would have found them insupportable' reacts to them, and Pip almost turns back. 'But, I knew them' answers that hesitation, and 'So... I went on against it' is his decision, so it ends.",
    more: "The paragraph turns twice, with 'But' and 'So'. Pip feels the dread a stranger would, but his knowledge of the marshes leaves him no excuse, which builds tension before the danger that follows.",
    tip: "'But' and 'So' are short but powerful: 'But' turns a point and 'So' gives the result. Two turns in four sentences can carry a whole decision.",
  },
  'The ruins of the old house': {
    why: "The mist and the missing moon come first, and 'But, the stars were shining' turns from dark to light. Only then can Pip 'trace out' the old house, and 'I had done so' must follow that tracing, ending with the figure in the garden.",
    more: "'I had done so' sums up the action before it, so it cannot come first. Dickens lets the mist part slowly, as if the scene itself is waiting for the figure to appear.",
    tip: "Phrases such as 'I had done so' sum up an earlier action. Place them right after the sentence they refer to.",
  },
  'Waking after the red-room': {
    why: "Jane's first memory, the red glare, comes first. 'I heard voices, too' adds a second sense to the first, 'Ere long' (before long) brings the gentle handling, and resting her head ends the paragraph as her fear eases.",
    more: "The red glare 'crossed with thick black bars' turns out to be the nursery fire seen through its guard, but Jane sees it as a terrified child would.",
    tip: "'Too' and 'also' add a second detail to the first. Use the senses one after another, sight then sound, to build a scene.",
  },
  'Sundays at Lowood': {
    why: "'Sundays were dreary days' is the topic sentence. The walk to church explains why, 'We set out cold, we arrived at church colder' follows the walk, and 'too far to return to dinner' describes the meal between services, so it ends.",
    more: "'Cold... colder... almost paralysed' builds in steps, a pattern called a climax. The cold, like the poor food, shows how harsh life is at Lowood.",
    tip: "A topic sentence often makes a claim, here 'dreary', that the rest of the paragraph proves. Find it first when you order sentences.",
  },
  'The night before leaving Lowood': {
    why: "The box is corded first, and 'call for it' needs the box. Jane then finishes her packing and 'tried to rest'; 'I could not' answers that attempt, and 'A phase of my life was closing' explains her excitement, so it ends.",
    more: "The paragraph moves from practical tasks to feelings. 'I could not' is a short reply that only works straight after 'tried to rest'.",
    tip: "A short reply such as 'I could not' must follow the sentence it answers. Look for replies like it when you order sentences.",
  },
  'A laugh in the corridor': {
    why: "The laugh 'struck my ear' first. 'It was a curious laugh' describes it, Jane stops and it begins again louder, and 'It passed off in a clamorous peal' is how it ends, so that sentence comes last.",
    more: "Brontë calls the laugh 'mirthless', a laugh without joy, which makes it eerie. The mystery of where it comes from runs through the first half of the novel.",
    tip: 'A sound in a story is usually introduced, then described, then followed to its end. That is a natural order to look for.',
  },
  'Waiting for dawn': {
    why: "The candle goes out as dawn approaches. Pilot's bark brings hope, 'Nor was it unwarranted' confirms that hope, and 'It could not have lasted more than two hours' looks back on the whole watch, so it ends.",
    more: "'Unwarranted' means without good reason, so 'Nor was it unwarranted' means the hope was justified. The last sentence shows how long the night felt: 'many a week has seemed shorter'.",
    tip: "Watch for negatives such as 'Nor was it', which reply to the sentence before. They cannot open a paragraph.",
  },
  'A coach on the road': {
    why: 'Jane rests and sees the coach come on. She stops it, asks where it is going, then asks the fare, and only then gets in: each step depends on the one before.',
    more: 'The fare is the turning point: Jane has only twenty shillings, and soon she will be left with nothing. Small facts like this matter in the plot.',
    tip: 'Some paragraphs follow a conversation step by step: question, answer, next question. Use that logic to order them.',
  },
  'Set down at Whitcross': {
    why: "'Two days are passed' jumps forward in time, so it opens. Jane is then set down at Whitcross, 'The coach is a mile off by this time' follows its leaving, and 'At this moment I discover' that her parcel is still on the coach, which leaves her destitute at the end.",
    more: "Brontë switches to the present tense here ('are passed', 'is a summer evening'), which makes Jane's situation feel immediate and desperate.",
    tip: 'A change of tense can make a moment vivid. If you try it, keep the new tense steady for the whole passage.',
  },
  'St John preaches': {
    why: "'Incommunicative as he was' explains why Jane could not judge St John's mind, so it opens. 'I first got an idea of its calibre' follows ('its' is his mind), 'that sermon' needs the preaching just mentioned, and 'I cannot even render' goes further than 'past my power', so it ends.",
    more: "'Calibre' means quality or ability. The word 'even' shows the last sentence goes further than the one before: she cannot describe the sermon, or even its effect.",
    tip: "'Even' signals a stronger point than the one before. Put a sentence containing it after the point it builds on.",
  },
  'Diana and Mary are married': {
    why: "'Diana and Mary Rivers are both married' names both sisters, so it opens. Diana's husband comes next, and 'Mary's is a clergyman' only makes sense after 'Diana's husband', because 'husband' is left out. 'Both Captain Fitzjames and Mr. Wharton' names the two husbands just described, the captain first, so it ends.",
    more: "Leaving out a word that the reader can supply is called ellipsis: 'Mary's' means 'Mary's husband'. Ellipsis only works after the full phrase has been given.",
    tip: "If a sentence leaves out a word, as 'Mary's is a clergyman' does, look for the sentence that supplies it. That sentence comes first.",
  },
  'Lydia reminds Mr Bingley of the ball': {
    why: "'Lydia was a stout, well-grown girl of fifteen' introduces her, so it opens, and 'She had high animal spirits' adds to that portrait. 'She was very equal therefore' follows from her confidence, and 'this sudden attack' in the last sentence is her reminder about the ball, so it ends.",
    more: "'Very equal... to address' means quite bold enough to speak to him. Austen describes Lydia first and then shows her in action, so her rudeness to Bingley seems to grow out of her character.",
    tip: 'When you describe a character, follow the description with an action that proves it.',
  },
  "Mr Darcy's eyes": {
    why: "Elizabeth first notices Darcy's eyes fixed on her. She cannot think he admires her, and 'at last' she settles on a reason: he must think her more wrong than anyone else present. 'The supposition' means that idea, and 'She liked him too little' explains why it did not hurt her.",
    more: 'This is dramatic irony: the reader suspects Darcy is falling for Elizabeth, while she decides he disapproves of her. Austen lets us see more than her heroine does.',
    tip: 'Dramatic irony is when the reader knows more than a character. It is worth naming in an essay, with the quotation that shows it.',
  },
  'Mr Collins stays on': {
    why: "Mrs Bennet's ill humour comes first, and 'Mr. Collins was also' adds a second unhappy person, so it follows. 'His resentment' is that angry pride, and 'He was always to have gone on Saturday' explains how his plan did not change, so it comes last.",
    more: "Austen's humour is dry: Collins is too proud to be pleasant, but too stubborn to leave early, so he stays on to the very day he planned.",
    tip: "'Also' and 'too' tell you a sentence adds to something already said. The sentence it adds to must come first.",
  },
  'Waiting for a son': {
    why: "Saving seemed useless because 'they were to have a son', so that comes first. 'This son' is the hoped-for boy who would end the entail. 'Five daughters successively entered the world' shows the hope failing, 'This event' is his birth, at last given up, and the last sentence explains why they never saved.",
    more: "The entail meant the Bennets' house would pass to the nearest male relative, Mr Collins, unless a son was born. Austen's irony lies in how certain they were: the son they relied on never arrives.",
    tip: 'In an essay on Pride and Prejudice, link the entail to the pressure on the Bennet daughters to marry well.',
  },
  'Where will Mr Bingley sit?': {
    why: "The guests arrive on Tuesday first. At dinner Elizabeth watches to see whether Bingley takes his old place by Jane, and her mother, 'occupied by the same ideas', holds back. Bingley hesitates, Jane smiles, 'it was decided', and 'He placed himself by her' is the decision, so it comes last.",
    more: "Austen turns a seating plan into suspense: everyone is watching one chair. 'Happened to look round, and happened to smile' is gently ironic, because Jane's smile is no accident.",
    tip: 'Small actions can carry big feelings. When you write, let a glance or a choice of seat show what characters cannot say.',
  },
  'The Thing in the sand': {
    why: "The Thing lying in the sand comes first, then its uncovered part, a cylinder, and 'It had a diameter of about thirty yards' measures that cylinder. Ogilvy is surprised 'at the size and more so at the shape', so his approach follows both details; 'It was, however, still so hot' stops him, and the stirring noise ends the paragraph.",
    more: "Wells builds suspense through a scientist's eyes: Ogilvy explains the noise away as cooling metal. The last clause, 'it had not occurred to him that it might be hollow', warns the reader of what he cannot see.",
    tip: "End a paragraph on a hint the character misses. The reader's worry pulls them into the next paragraph.",
  },
  'Henderson hears the news': {
    why: "Ogilvy tells his story, and Henderson takes 'a minute or so' to absorb it. 'Then he dropped his spade' is his response, the two men hurry back, and they find the sounds have stopped and a circle of metal showing. 'At the rim' needs that circle, so the sizzling air comes last.",
    more: 'Wells slows down, then speeds up: a minute of thought, then a rush of actions. The circle of bright metal shows the lid is turning, so the reader senses the cylinder is about to open.',
    tip: 'Set slow and fast moments side by side in a story: a pause before action makes the action feel quicker.',
  },
  'A day of suspense': {
    why: "'Saturday lives in my memory as a day of suspense' introduces the day, and 'a day of lassitude too' adds a second description of it. The narrator then says how little he slept and that he rose early, and going into the garden before breakfast comes next.",
    more: "'Lassitude' means weariness. A lark singing over the common, where the Martians are, makes the quiet feel uneasy: nothing seems to be happening, which is itself suspenseful.",
    tip: 'Quiet details, such as a single bird singing, can build more suspense than noise. Try them before a dramatic moment.',
  },
  'Through the storm': {
    why: "The narrator's vague idea of going home comes first. He then staggers through the trees and 'splashed out into the lane', and 'I say splashed' explains that word, so it must follow it. 'There in the darkness' places the collision in that lane, so it ends.",
    more: "'I say splashed' is the narrator picking out a word to make it exact. Wells uses it to show the flood of storm water, and it is a useful clue for ordering.",
    tip: "When a sentence picks out a word used just before, as 'I say splashed' does, it must come directly after the sentence with that word.",
  },
  'What are the machines?': {
    why: "The machines seem busy, so the narrator begins to wonder what they are. His first question is answered by 'Such a thing I felt was impossible', and 'Or' offers a second possibility. Comparing them to human machines comes last, as his thinking widens.",
    more: "The question and answer let us follow the narrator's mind. Wells imagines how our own machines might look to an animal, which makes us see ourselves as the Martians might.",
    tip: "In a jumbled paragraph, a question is usually followed by its answer, and 'Or' brings in a second possibility after the first.",
  },
  'A shot with no explosion': {
    why: "The narrator climbs into the hedge, and 'As I did so' a second shot flies over. He expects smoke or fire, 'But all I saw' is only sky and mist, and 'And there had been no crash' adds to that strange emptiness. The returning silence ends the paragraph.",
    more: "The suspense comes from what does not happen: no smoke, no fire, no crash. Wells lets the reader share the narrator's unease at a weapon he does not understand.",
    tip: "Writers build tension by setting up an expectation and then breaking it. Look for 'I expected' followed by 'But'.",
  },
  "Watson's wounded pride": {
    why: "Watson is annoyed at Holmes's criticism first, and 'I confess, too' adds a second feeling, irritation at his egotism. That leads to the vanity he has noticed before. 'I made no remark, however' shows him holding his tongue, and 'it' in the last sentence is the wounded leg just mentioned.",
    more: "Watson's leg was hit by a bullet from a Jezail, an Afghan musket, in the war in Afghanistan. Conan Doyle uses the aching leg to show Watson calming himself without a word.",
    tip: "Track how a narrator's feelings build: annoyance, then irritation, then a judgement. It shows a character thinking.",
  },
  'What Watson leaves out': {
    why: "Watson leaves the dog first, then finds Miss Morstan, and 'Mrs. Forrester, too' adds a second listener. 'I told them all' needs both women, 'Thus' gives an example of what he held back, and 'With all my omissions' gathers up everything he left out, so it ends.",
    more: 'Watson protects the women from the worst details of the crime. The final sentence turns: even the softened story is enough to amaze them.',
    tip: "A phrase like 'With all my omissions' sums up what came before. Summing-up phrases usually come near the end of a paragraph.",
  },
  'A late visitor': {
    why: "Watson lands at Vauxhall first, then drives to Mrs Forrester's house. The servant is surprised at a visitor so late, 'she explained' means the servant tells him her mistress is out, and 'Miss Morstan, however, was in' turns to the person he has come to see, so it ends.",
    more: 'The paragraph moves Watson step by step towards Miss Morstan, building quiet anticipation: he is carrying the box he believes holds her fortune.',
    tip: "'However' can sit after the subject, as in 'Miss Morstan, however, was in'. It still signals a turn from what came before.",
  },
  'Gatsby runs down like a clock': {
    why: "The 'two states' and 'a third' are named in the second sentence: embarrassment, joy and now wonder. 'He had been full of the idea so long' explains why, and 'Now, in the reaction' is the result of that long waiting, so the clock image ends the paragraph.",
    more: "Gatsby has dreamed of meeting Daisy again for five years. Fitzgerald's simile of 'an overwound clock' suggests a mechanism wound too tight by waiting, now unwinding.",
    tip: 'When you analyse a simile, explain both halves: what Gatsby is like, and what the image of the clock adds.',
  },
  'The green light': {
    why: "Gatsby is absorbed in what he has just said about the light, so Daisy's gesture comes first. 'That light' then loses its meaning, 'it had seemed very near to her' explains why it mattered, 'as close as a star to the moon' restates that closeness, and 'Now it was again a green light' returns to the present.",
    more: "The green light at the end of Daisy's dock stood for Gatsby's dream of her. Now that she is beside him, it is just a light again: getting what he wanted has made the dream smaller.",
    tip: 'A symbol can change its meaning in a story. In an essay, say what it meant before and what it means now.',
  },
  'Should the school day start later for teenagers?': {
    why: "The scientific fact comes first: teenagers' body clocks shift later. 'Then' in the second sentence means 'in that case', so it needs that fact. 'The result' follows the early start, 'that clock' points back to the body clock, and 'too' in the last sentence adds a later finish to the later start.",
    more: 'This argument is built like a chain: a fact, its consequence, a problem, a solution and an answer to the obvious objection about lost lessons. Each link depends on the one before.',
    tip: 'Answer the obvious objection before your reader raises it, as the last sentence here does with teaching time.',
  },
  'Is it worth learning a second language?': {
    why: "The cousin's move to Spain starts the story, and 'She' needs her named. 'That changed' refers to being left out of the jokes, 'Her story shows' draws the lesson from the anecdote, and 'That alone' sums up the point, so it ends.",
    more: 'An anecdote, a short story about one person, makes an argument human. This one moves from a single person to a general point about what languages give us.',
    tip: 'Open a persuasive piece with a short story about one person, then say what it shows. Readers remember stories better than claims.',
  },
  'Should cooking be taught in every year at school?': {
    why: "The first sentence sets out the gap between equations and cooking. 'That gap' picks it up, 'Those' means the ready meals and takeaways just named, 'close the gap' returns to the problem with a solution, and 'It might even save' adds a final benefit.",
    more: "Notice how 'the gap' runs through the paragraph: named in the first sentence, explained in the second and closed in the fourth. Repeating a key word like this ties an argument together.",
    tip: "Pick one key idea, such as 'the gap', and carry it through your paragraph. It gives the reader a thread to follow.",
  },
  'Should cars be kept out of town centres?': {
    why: "The busy Saturday high street comes first, then the car that makes the crowd scatter. 'That space' is the street just described, so the proposal comes third. The shop owners' fear is an objection to it, and 'Their fear is understandable, but' answers that objection, so it ends.",
    more: 'The paragraph moves from a picture to a proposal to an objection and a reply. Answering an objection makes an argument stronger than ignoring it.',
    tip: 'Paint a short scene before you make your point. A reader who can picture the crowded street is readier to agree with you.',
  },
  'Are school trips worth the cost?': {
    why: "The cost comes first, and 'Yet' turns to what pupils gain. 'That memory' points back to remembering the history, the shared cost adds a second point with 'too', and 'With that one change' refers to sharing the cost, so it ends the paragraph.",
    more: 'The writer admits the trip costs more, then argues it is worth it, and finally deals with fairness. Admitting a cost first can make a reader trust you.',
    tip: 'If your side has a weakness, mention it first and then explain why it is worth it. It takes the point away from your opponent.',
  },
  'Should pupils choose their own books in English lessons?': {
    why: "The claim about pupils who choose their books comes first, and 'That is a strong argument' comments on it. 'Though' then raises a problem, 'therefore mix the two kinds of reading' answers it, and 'That mix' describes what the mix would look like, so it comes last.",
    more: 'This writer weighs two sides and lands on a balance. A paragraph that shows both sides and then settles them sounds thoughtful rather than one-sided.',
    tip: "'Though' and 'however' in the middle of a sentence can turn an argument just as well as at the start. Look inside sentences for the turn.",
  },
  'Why the sea tastes salty': {
    why: "The puzzle comes first: fresh rivers, salty sea. 'Much of the salt comes from' begins the answer, 'As it does so' needs the rain wearing rocks away, 'these dissolved minerals' points back to them, and 'The minerals cannot rise with the vapour' explains why they stay behind.",
    more: 'Opening with a puzzle makes the reader want the explanation. The chain of rain, rocks, minerals, rivers, sea and vapour follows the journey of the salt.',
    tip: 'Start an explanation with a question or a surprising fact, then answer it step by step.',
  },
  'How a bat hunts in the dark': {
    why: "The first sentence names the skill, echolocation. 'As a bat flies, it makes high-pitched calls' explains how it begins, 'a call hits a moth' follows those calls, 'that echo' needs the echo just mentioned, and catching the moth ends the hunt.",
    more: 'Many bats really do hunt this way. Most of their calls are too high-pitched for human ears, which is why the night seems silent to us.',
    tip: 'When you explain a process, name it first, then follow it from start to finish.',
  },
  'Why we have leap years': {
    why: "The length of the Earth's year comes first, then 'however' sets the 365-day calendar against it. 'Therefore' gives the result, a quarter of a day lost each year, 'those quarters' points back to it, and the extra day in February is the solution.",
    more: 'Without leap years, the calendar would slip by about a day every four years, and over centuries the seasons would drift through the months.',
    tip: "'However' and 'therefore' in the middle of a sentence still do their jobs: one turns, the other concludes.",
  },
  'How a compass works': {
    why: "The Earth as 'a giant magnet' comes first, because the needle is 'a much smaller magnet' compared with it. 'Because it is free to turn' follows the needle's balance, 'therefore always points roughly north' is the result, and 'this' in the last sentence is that useful fact.",
    more: "The comparison 'much smaller' can only come after the giant magnet. Comparatives are strong ordering clues, because they need the thing they compare with.",
    tip: "When a sentence compares, with words like 'smaller' or 'faster', the thing it compares with must already have been mentioned.",
  },
  'Why bread rises': {
    why: "The ingredients come first. The yeast feeds while the dough rests, 'As it feeds' it gives off bubbles, 'these bubbles' are trapped by gluten, and 'The trapped gas' makes the dough swell before the oven sets it.",
    more: 'Yeast is a living fungus: it feeds on sugar and gives off carbon dioxide gas. Gluten, a stretchy network formed by kneading, traps the gas, which is why kneading matters.',
    tip: 'Follow one thing through an explanation: here the gas, from bubbles to trapped gas. Each mention points back to the last.',
  },
  'Why the Moon seems to change shape': {
    why: "The Moon shines only by reflected sunlight, so half of it is always lit. As it orbits, we see 'different amounts of that lit half'. The new moon, when its lit half faces away, comes next, and 'About two weeks later' must follow it, ending with the full moon.",
    more: 'The Moon does not really change shape: we see more or less of its sunlit half as it travels round the Earth each month.',
    tip: "A time phrase such as 'About two weeks later' needs an earlier moment to count from. Find that moment first.",
  },
  'How sound travels': {
    why: "The plucked string comes first, then its movement pushing on the air. 'These squeezes' are those pushes passing through the air, 'they reach your ear' follows them, and your brain turning 'those vibrations' into sound is the last step.",
    more: 'Sound is a vibration passed from one part of the air to the next. The ripple on a pond is a helpful comparison, though sound squeezes the air rather than lifting it.',
    tip: "Words such as 'these', 'those' and 'they' point back. Use them to check that each sentence follows the one it depends on.",
  },
  'Why a steel ship floats': {
    why: "Lowering an object pushes water aside first, then the water pushes back. 'That upward push' must follow that force, 'That is why' applies the rule to a ship and a bolt, and the last sentence explains the difference between them.",
    more: 'The Greek thinker Archimedes worked out that the upward push on an object equals the weight of the water it pushes aside. A hollow ship pushes aside a lot of water for its weight.',
    tip: "'That is why' applies an explanation to an example. It must come after the explanation it points back to.",
  },
  'How a camel survives in the desert': {
    why: "The first sentence sets the puzzle: days without drinking. The hump comes next, with the common mistake about it, 'this fat' points back to what the hump holds, 'also' adds a second way the camel copes, and 'these two tricks' sums up both.",
    more: "A camel's hump stores fat, not water. Camels also lose very little water, which helps them go a long time between drinks.",
    tip: "'Both' and 'these two' sum up earlier points. A sentence that contains them usually comes last.",
  },
  'The day our class hatched chicks': {
    why: "The incubator arrives first, then three weeks of checking the eggs. 'Then' brings the crack, 'Nobody could concentrate after that' reacts to it, and 'By home time' ends the day with the chicks and the sixth egg.",
    more: 'The writer saves the sixth egg for the last line, which leaves the reader wondering whether it will hatch.',
    tip: 'End a recount with a small detail that leaves a question open. It makes the ending linger.',
  },
  'Learning to swim at eleven': {
    why: "The first sentence says how late the writer learnt, and the next explains why it mattered. 'My mum noticed' needs the dread just described, 'The instructor there' needs the lessons, and 'she' in the last sentence is that instructor.",
    more: 'This recount is shaped like a story: a problem, a helper and a success. The kind instructor is the turning point.',
    tip: "Check who each 'she' refers to: here the last 'she' is the instructor, not the mum.",
  },
  'The school play that nearly went wrong': {
    why: "The forgotten costume is the problem, so it comes first. The teacher stays calm, 'She borrowed' shows how she solved it, 'Dressed like that' needs the borrowed clothes, and 'that crown' in the last sentence points back to the paper crown.",
    more: 'A problem and its clever solution make a recount worth telling. The ending shows the moment is remembered fondly.',
    tip: "'Like that' and 'that crown' point back to something just described. They can never open a paragraph.",
  },
  "Our street's snow day": {
    why: "The snow starts at night, 'By morning' it is deep, and the closed school sends the children out. The snowman they build comes next, and 'When it finally melted' must come after it was built.",
    more: "Time phrases such as 'just after midnight', 'By morning' and 'three days later' carry the reader through the recount.",
    tip: 'Before you order a recount, underline every time phrase. They usually give you most of the order.',
  },
  'A Saturday at the food bank': {
    why: "The visit comes first, then the job of sorting. 'It sounded simple, but' turns to a problem with that job, 'Those' means the out-of-date donations, and 'By the end of the day, though' returns to the good they did, so it ends.",
    more: "The paragraph moves from a plan to a problem to a good result. 'Though' in the last sentence turns from disappointment back to something positive.",
    tip: 'In a recount, show a small setback before the success. It makes the ending feel earned.',
  },
  'The day I met my favourite author': {
    why: "Hearing about the visit comes first, then queuing on the morning. 'She noticed how worn it was' needs the battered book, 'When I told her eleven' answers her question, and the last sentence says what became of the signed book.",
    more: 'Answers follow questions: the author asks how many times the book has been read, and the reply comes next. Speech in a recount often fixes the order.',
    tip: 'Look for a question in one sentence and its answer in another. The question always comes first.',
  },
  'Our class garden': {
    why: "The weedy patch comes first, then clearing it in the first weeks. 'Then we planted' follows the clearing, 'By June' shows the result, and 'This year' moves on to the newest event, the first apples.",
    more: 'The recount covers more than a year, moving from September to June to the following year. Each time phrase moves the story forward.',
    tip: "A recount that covers a long time needs clear time markers, such as 'In September' and 'By June'.",
  },
  'The note in the library book': {
    why: "Priya finds the note first. 'It was written in pencil' describes the note, 'It told her' gives what it said, 'There' means page 112, and Priya looking at the overgrown wall ends the paragraph, linking the book to her own school.",
    more: 'The final sentence links the underlined words to a real wall, which turns a note in a book into a mystery Priya might solve.',
    tip: "'There' can point back to a place just named, such as a page. Find the place before you place the sentence.",
  },
  "The lighthouse keeper's long night": {
    why: "Mr Penhale's thirty years of climbing the steps introduce him. The storm puts out the lamp, he knows a boat is in danger, he lights an oil lamp by hand, and 'At dawn' the rescued crew thank him.",
    more: 'The opening sentence shows his long, faithful routine, which makes his courage on the stormy night feel earned.',
    tip: "Introduce a character's routine before the night it is broken. Readers feel the change more strongly.",
  },
  'The wrong umbrella': {
    why: "Tom grabs an umbrella first, then discovers its flamingos when he opens it outside. 'His own umbrella... was still in the stand' follows that discovery, 'go back for it' needs his umbrella, and the swap ends the story.",
    more: 'A mix-up, a discovery and a happy swap give this short story a complete shape.',
    tip: "'It was only when...' is a good way to delay a discovery in a story.",
  },
  'The fox at the bins': {
    why: "The nightly clatter is the mystery, so it comes first. Dad's theory and his wait with a torch follow, 'When the clatter began' brings the torch on, 'Caught in the beam' reveals the fox, and the last sentence looks back from the present.",
    more: "The story sets up a wrong guess, teenagers, and then reveals the truth. The fox's name, Crispin, is a pun on the crisp packet.",
    tip: "'Caught in the beam' only makes sense after the torch is switched on. Light, sound and sight words often depend on an earlier action.",
  },
  'The message in the snow': {
    why: "Eli wakes first, then sees letters in the snow from his window. 'They spelt out' tells what the letters said, so it follows. He runs across the field, and what he finds 'Under the bench' must come after the message that sent him there.",
    more: "The message creates a small mystery, and the label in his grandfather's writing solves it in the last line.",
    tip: "When a message gives an instruction, the character's action follows it. Use that cause and effect to order a story.",
  },
  'The last bus': {
    why: "Amira misses the last bus first, and her dead phone makes it worse. 'She was still working out what to do' follows that problem, 'Its window wound down' needs the car just mentioned, and 'Twenty minutes later' ends with her safe at home.",
    more: 'The story builds a little tension with the car before revealing a friendly neighbour, which turns worry into relief.',
    tip: "'Its' must point back to a noun already named, here the car. Check what each possessive word belongs to.",
  },
  'The harbour at dawn': {
    why: "The still harbour and its boats come first. 'Their reflections' belong to those boats, 'Beyond the boats' moves the eye outwards to the lighthouse, 'Behind it' means behind the lighthouse, and the first engine starting ends the stillness.",
    more: "The description moves like a camera, from near to far, before an event breaks the calm. 'Beyond' and 'Behind it' are clues about place.",
    tip: "In a description, move the reader's eye in one direction, near to far or left to right, with words such as 'beyond' and 'behind'.",
  },
  'The market before it opens': {
    why: "The square of half-built stalls comes first. 'Their owners' work among those stalls, 'One man' is picked out from them, 'She' is his little daughter, and 'When it rolled off' needs the orange she was adding.",
    more: 'The description narrows from a whole square to one man and his daughter, and ends on a small, funny moment.',
    tip: 'Zoom in: a wide view first, then one person, then one action. It gives a description a clear shape.',
  },
  'An abandoned railway station': {
    why: "The empty platform comes first, 'its paving stones' belong to it, and 'Inside, through a gap in the leaves' looks past the ivy just described. 'The trains it listed' are on that timetable, and 'The last of them' needs those trains, so it ends.",
    more: 'The writer moves from outside to inside to one printed line. Weeds, ivy and an old timetable show how long the station has been abandoned.',
    tip: "Small details can show time passing. Instead of saying 'long ago', show the weeds and the faded timetable.",
  },
  "Grandad's shed": {
    why: "The shed at the bottom of the garden comes first. 'Inside' describes its tools, 'That way' explains the painted outlines, 'which one is missing' leads to 'Usually it is the trowel', and the last sentence shows Grandad's reaction to that borrowing.",
    more: 'A few details reveal a whole character: Grandad is tidy, pretends to be cross and secretly keeps a spare.',
    tip: 'End a description of a place with what it shows about the person who owns it.',
  },
  'The plan looked perfect. ___, nobody had checked the tide.': {
    why: "The first sentence says the plan looked perfect; the second reveals a flaw that nobody saw. A sentence that turns against what came before needs a contrast connective, and 'However' signals exactly that turn.",
    not: {
      Therefore:
        "'Therefore' introduces a result. Nobody checking the tide was not caused by the plan looking perfect; it undermines the plan.",
      Furthermore:
        "'Furthermore' adds another point of the same kind. A flaw is not one more reason the plan looked perfect.",
      'For example':
        "'For example' introduces an example of the point before. Nobody checking the tide is not an example of a perfect plan.",
    },
    tip: 'Before you choose a connective, decide the relation: does the second sentence add, contrast, give a result or give an example?',
  },
  'Mia had trained every morning for a year. ___, she won the county race by ten seconds.': {
    why: "A year of training every morning leads to the win. When the second sentence is the outcome of the first, you need a result connective: 'As a result' shows the win came from the training.",
    not: {
      However:
        "'However' signals a contrast. Winning after a year of training is what you would expect, not a surprise.",
      'For example':
        "'For example' would make the win an example of training. It is the outcome of the training.",
      Meanwhile:
        "'Meanwhile' means at the same time. The race came after the year of training, not during it.",
    },
  },
  'Our class wants to raise money for the animal shelter. ___, we could hold a cake sale at lunchtime.':
    {
      why: "The first sentence states a general aim, raising money. The second gives one particular way of doing it, so it needs a connective that introduces an example: 'For example'.",
      not: {
        However:
          "'However' introduces a contrast, but a cake sale does not go against raising money. It is a way of doing it.",
        Instead:
          "'Instead' replaces one thing with another. Nothing has been suggested yet for the cake sale to replace.",
        Finally:
          "'Finally' introduces the last item in a list or a sequence. No earlier ideas have been listed.",
      },
    },
  'Cycling to school keeps you fit. ___, it costs nothing.': {
    why: "Both sentences give reasons to cycle: it keeps you fit, and it costs nothing. A second point on the same side needs an adding connective, so 'In addition' fits.",
    not: {
      However:
        "'However' signals a contrast, but costing nothing is another benefit, not a drawback.",
      'For example':
        "'For example' introduces an example of the point before. Costing nothing is not an example of keeping fit.",
      Meanwhile:
        "'Meanwhile' links two things happening at the same time. Here the sentences give two reasons, not two events.",
    },
    tip: 'In a persuasive paragraph, an adding connective stacks up reasons on one side. Save the strongest reason for last.',
  },
  'The storm brought down the power lines. ___, the whole village was without electricity for two days.':
    {
      why: 'The storm brings down the power lines, and losing electricity is what follows. The second sentence is the consequence of the first, so a result connective is needed.',
      not: {
        However:
          "'However' introduces a contrast. Losing power after the lines come down is no surprise.",
        'For instance':
          "'For instance' introduces an example. A village losing power is a consequence of the storm, not an example of it.",
        Similarly:
          "'Similarly' links two things that are alike. The power cut is caused by the fallen lines; it is not like them.",
      },
    },
  'Ravi searched his bag, his pockets and his locker for his phone. ___, he found it in the fridge, next to the milk.':
    {
      why: "Ravi searches three places without success before the phone turns up. 'Eventually' means after a long time or many attempts, which is exactly what the list in the first sentence sets up.",
      not: {
        Therefore:
          "'Therefore' signals a result. Searching his bag did not cause the phone to be in the fridge.",
        Similarly:
          "'Similarly' links two things that are alike. Finding the phone is not like searching for it.",
        'For example':
          "'For example' introduces an example of the point before. Finding the phone ends the search; it is not an example of it.",
      },
    },
  'Penguins cannot fly. ___, they are superb swimmers.': {
    why: "The first sentence says what penguins cannot do; the second says what they are brilliant at. Moving from a weakness to a strength is a contrast, so 'However' fits.",
    not: {
      'For example':
        "'For example' would make swimming an example of not flying. It is the opposite kind of point.",
      Similarly:
        "'Similarly' links two points that are alike. A weakness and a strength are not alike.",
      Meanwhile:
        "'Meanwhile' means at the same time as another event. These sentences describe abilities, not events.",
    },
  },
  'The museum is closed on Mondays. ___, we will go on Tuesday.': {
    why: "The museum is closed on Mondays, so the visit moves to Tuesday. The second sentence is the decision that follows from the first, which is what 'Therefore' signals.",
    not: {
      However:
        "'However' introduces a contrast. Going on Tuesday does not go against the closure; it is caused by it.",
      'For example':
        "'For example' introduces an example. Going on Tuesday is not an example of the museum being closed.",
      'In addition':
        "'In addition' adds another point of the same kind. The second sentence is a result, not an extra fact.",
    },
  },
  'Sam was too nervous to sing in the school concert. ___, he played the piano while the others sang.':
    {
      why: "Sam does not sing; he plays the piano in place of singing. 'Instead' shows one action replacing another that did not happen.",
      not: {
        Furthermore:
          "'Furthermore' adds a further point to an argument. Playing the piano replaces singing; it is not one more reason he was nervous.",
        'For example':
          "'For example' introduces an example of the point before. Playing the piano is not an example of being nervous.",
        Similarly:
          "'Similarly' links two actions that are alike. Sam did not do both; one replaced the other.",
      },
    },
  'Wear your coat and gloves today. ___, you will be freezing at the bus stop.': {
    why: "The first sentence gives advice; the second says what will happen if you ignore it. 'Otherwise' means 'if not', so it links an instruction to its warning.",
    not: {
      'As a result':
        "'As a result' gives a consequence of the first sentence. Wearing a coat would not make you freezing; ignoring the advice would.",
      'For example':
        "'For example' introduces an example. Freezing at the bus stop is a warning, not an example of the advice.",
      Similarly:
        "'Similarly' links two points that are alike. A warning is not like the advice it follows.",
    },
    tip: "'Otherwise' is useful in persuasive writing: give the advice, then the price of ignoring it.",
  },
  'Many animals sleep through the winter. ___, hedgehogs hibernate from about November to March.': {
    why: "The first sentence makes a general point about many animals. The second names one animal that does it, so it is an example: 'For example' fits.",
    not: {
      However:
        "'However' signals a contrast, but hedgehogs hibernating agrees with the first sentence.",
      Therefore:
        "'Therefore' introduces a result. Hedgehogs do not hibernate because many animals do; they are one case of it.",
      Meanwhile:
        "'Meanwhile' links two events at the same time. Here the second sentence gives an example of the first.",
    },
    tip: 'A general statement followed by a specific example is one of the strongest shapes for an explanation paragraph.',
  },
  'The first half of the match was dull. ___, the second half was full of goals.': {
    why: "A dull first half is set against a second half full of goals. Two opposite halves need a connective that compares and shows the difference, which 'In contrast' does.",
    not: {
      'As a result':
        "'As a result' would make the dull first half the cause of the goals. The sentences compare the halves.",
      'For example':
        "'For example' introduces an example of the point before. A half full of goals is not an example of a dull one.",
      Furthermore:
        "'Furthermore' adds a similar point. The second half is the opposite of the first, not more of the same.",
    },
  },
  'Lily practised her lines every evening. ___, her brother rehearsed his guitar solo for the talent show.':
    {
      why: "Lily is practising and her brother is rehearsing on the same evenings. 'Meanwhile' links two actions happening at the same time, carried out by different people.",
      not: {
        Therefore:
          "'Therefore' would make his rehearsing a result of hers. They are simply happening at the same time.",
        'For example':
          "'For example' introduces an example of the point before. Her brother's practice is not an example of Lily's.",
        Instead:
          "'Instead' means one thing replaced another. Both Lily and her brother practise, so nothing is replaced.",
      },
    },
  'Bats are not blind. ___, many can see quite well.': {
    why: "The first sentence corrects a myth: bats are not blind. The second goes further, saying many see quite well. 'In fact' introduces a stronger, more surprising point that backs up the one before.",
    not: {
      However: "'However' signals a contrast, but seeing well agrees with not being blind.",
      'For example':
        "'For example' would introduce an example, yet the second sentence is a stronger statement of the same point.",
      Meanwhile:
        "'Meanwhile' links events at the same time. These sentences are facts about bats, not events.",
    },
  },
  'Most birds build their nests in trees or bushes. ___, puffins dig burrows in the grassy tops of cliffs.':
    {
      why: "The first sentence describes most birds; the second describes puffins doing something quite different. A connective that sets two different things side by side is needed: 'By contrast'.",
      not: {
        'As a result':
          "'As a result' would make the puffins' burrows a consequence of other birds' nests. They are simply different habits.",
        'For instance':
          "'For instance' introduces an example. Puffins are an exception to the first sentence, not an example of it.",
        Furthermore:
          "'Furthermore' adds a similar point. Digging a burrow is the opposite of nesting in a tree.",
      },
    },
  'The library has a quiet room for studying. ___, it lends laptops to pupils who need them.': {
    why: "Both sentences list things the library offers: a quiet room and laptops. Adding a second service to the first needs an adding connective, so 'In addition' fits.",
    not: {
      However:
        "'However' signals a contrast, but lending laptops is another benefit, not a drawback.",
      'For example':
        "'For example' introduces an example. Lending laptops is not an example of having a quiet room.",
      Instead: "'Instead' replaces one thing with another, but the library offers both.",
    },
  },
  'Our team trained hard all season. ___, we lost every single match.': {
    why: "Training hard should lead to wins, but the team lost every match. 'Nevertheless' means 'in spite of that': it introduces a result that goes against what the first sentence leads you to expect.",
    not: {
      Therefore: "'Therefore' would make losing the result of training hard, which makes no sense.",
      Furthermore:
        "'Furthermore' adds a point that supports the first. Losing every match goes against training hard.",
      'For example': "'For example' introduces an example of training hard, and losing is not one.",
    },
    tip: "'Nevertheless' is more formal than 'but'. It suits essays and speeches when you admit a fact and then go beyond it.",
  },
  'The road through the valley was flooded. ___, we had to take the long way round over the hills.':
    {
      why: "The flood is the cause and the long way round is its effect. 'Consequently' is a formal way of saying 'as a result', so it links the flooded road to the change of route.",
      not: {
        However:
          "'However' introduces a contrast. Taking another route does not go against the flood; it is caused by it.",
        Similarly: "'Similarly' links two things that are alike. A detour is not like a flood.",
        'For instance':
          "'For instance' introduces an example. Taking the long way is a result of the flood, not an example of it.",
      },
    },
  'Tom loves animals, especially dogs. ___, his sister prefers cats.': {
    why: "Tom loves dogs; his sister prefers cats. Two people with different tastes are being compared, so a connective that shows the other side is needed: 'On the other hand'.",
    not: {
      'As a result': "'As a result' would make her liking for cats a result of Tom loving dogs.",
      'For example':
        "'For example' introduces an example of the first sentence. The sister's taste is a different one, not an example.",
      'In addition':
        "'In addition' adds a similar point, but the sister's taste differs from Tom's.",
    },
  },
  'The tickets cost forty pounds each. ___, the concert sold out in ten minutes.': {
    why: "Forty pounds is a lot for a ticket, so you might expect slow sales, yet the concert sold out in minutes. 'Even so' means 'despite that', which fits an outcome that goes against expectations.",
    not: {
      'As a result':
        "'As a result' would make the high price the reason it sold out, which gets the logic the wrong way round.",
      'For example':
        "'For example' introduces an example of the price, and a quick sell-out is not one.",
      Similarly:
        "'Similarly' links two facts that are alike. Selling out fast is not like costing forty pounds.",
    },
  },
  'Owls hunt at night. ___, they have huge eyes that gather as much light as possible.': {
    why: "Hunting at night is the reason owls need huge eyes that gather light. 'For this reason' links a fact to what it explains, pointing back to the night hunting.",
    not: {
      However:
        "'However' signals a contrast, but huge eyes suit night hunting rather than going against it.",
      'For example':
        "'For example' introduces an example. Having huge eyes is not an example of hunting at night.",
      Meanwhile:
        "'Meanwhile' links events at the same time. These sentences give a reason and what it explains.",
    },
  },
  'The new skate park opened in May. ___, it has become the busiest place in town.': {
    why: "The skate park opened in May, and the second sentence covers everything from that moment until now. 'Since then' points back to a time and carries the story up to the present, which fits the verb 'has become'.",
    not: {
      However: "'However' introduces a contrast, but becoming popular does not go against opening.",
      'For example':
        "'For example' introduces an example of the point before, and becoming busy is not an example of opening.",
      Instead:
        "'Instead' replaces one thing with another. Nothing is replaced: the park opened and became busy.",
    },
  },
  'I was sure I had locked the front door. ___ when we got home, it was wide open.': {
    why: "The speaker was sure the door was locked, but it was wide open. 'Yet' introduces something surprising that goes against what came before.",
    not: {
      Also: "'Also' adds a similar point. A wide-open door does not agree with being sure it was locked.",
      Or: "'Or' offers a choice between two things. The second sentence is a surprising fact, not an alternative.",
      Because: "'Because' introduces a reason. The open door is not why the speaker felt sure.",
    },
  },
  'The film was two hours long. ___ it felt like twenty minutes.': {
    why: "A two-hour film would normally feel long, but this one felt like twenty minutes. 'Yet' sets the surprising feeling against the plain fact of its length.",
    not: {
      So: "'So' introduces a result. A long film would not make the time seem short.",
      Also: "'Also' adds a similar point, but the second sentence goes against what you would expect.",
      Then: "'Then' moves on to the next event. Feeling short is a reaction to the film, not a later event.",
    },
    tip: "'Yet' at the start of a sentence gives a twist real force. Use it sparingly, so that each twist lands.",
  },
  'Sound travels through air at about 340 metres a second. ___, light travels almost a million times faster.':
    {
      why: "Two speeds are set side by side: sound at about 340 metres a second and light almost a million times faster. 'In comparison' introduces the second thing measured against the first.",
      not: {
        'As a result':
          "'As a result' would make the speed of light a consequence of the speed of sound.",
        'For instance':
          "'For instance' introduces an example of the first fact, and light is not an example of sound.",
        Similarly: "'Similarly' suggests the two speeds are alike, but light is vastly faster.",
      },
      more: 'This is why you see lightning before you hear thunder: the light reaches you almost at once, while the sound takes about three seconds to travel a kilometre.',
    },
  'Some British birds spend the winter in Africa. Swallows, ___, fly all the way to South Africa.':
    {
      why: "The first sentence says some British birds winter in Africa; swallows are one of those birds. A connective placed after the subject can still introduce an example, as in 'Swallows, for example, fly...'.",
      not: {
        however: "'however' would set swallows against the first sentence, but they agree with it.",
        therefore:
          "'therefore' would make the swallows' journey a result of other birds wintering in Africa.",
        meanwhile:
          "'meanwhile' means at the same time as another event, but this sentence gives an example.",
      },
      tip: "A connective can sit after the subject, between commas, as in 'The answer, however, was wrong.' It makes your sentences less predictable.",
    },
  'I did not just tidy my bedroom. ___, I cleaned the whole house.': {
    why: "The first sentence hints that more than the bedroom was tidied, and the second reveals how much more: the whole house. 'In fact' introduces a stronger statement that goes further than the first.",
    not: {
      Therefore:
        "'Therefore' introduces a result, but cleaning the whole house is not caused by tidying the bedroom.",
      'For example':
        "'For example' gives an example, but the whole house is a bigger claim, not an example.",
      Meanwhile:
        "'Meanwhile' links two things happening at the same time; the second sentence builds on the first.",
    },
  },
  'Hedgehogs eat beetles, worms and slugs. ___, many gardeners are glad to see them.': {
    why: "Hedgehogs eat slugs and beetles that damage plants, which is why gardeners welcome them. 'For this reason' points back to the hedgehogs' diet as the cause of the gardeners' welcome.",
    not: {
      However:
        "'However' signals a contrast, but welcoming an animal that eats pests does not go against its diet.",
      'For example':
        "'For example' introduces an example of the diet, and gardeners' feelings are not one.",
      Instead: "'Instead' replaces one thing with another. Nothing is being replaced here.",
    },
  },
  'The volcano had been quiet for three hundred years. ___, scientists believed it was extinct.': {
    why: "Three hundred quiet years led scientists to a conclusion: the volcano was extinct. 'Consequently' introduces a result or conclusion drawn from the first sentence.",
    not: {
      However:
        "'However' introduces a contrast, but believing it extinct follows from its long silence.",
      'For example':
        "'For example' introduces an example, and a belief is not an example of a quiet volcano.",
      Meanwhile:
        "'Meanwhile' links events at the same time. The belief came from the long silence.",
    },
  },
  'The castle walls were three metres thick. ___, attackers almost never broke through them.': {
    why: "Walls three metres thick are hard to break, so attackers rarely got through. The second sentence is the effect of the first, which 'As a result' signals.",
    not: {
      However:
        "'However' signals a contrast, but failing to break thick walls is what you would expect.",
      'For example':
        "'For example' introduces an example of thick walls, but the attackers' failure is an effect of them.",
      Instead: "'Instead' replaces one thing with another, and nothing is replaced here.",
    },
  },
  'Grace forgot her lines halfway through the play. ___, she made up new ones, and nobody in the audience noticed.':
    {
      why: "Grace forgot her lines, so she made up new ones in their place. 'Instead' shows the made-up lines replacing the ones she should have said.",
      not: {
        Furthermore:
          "'Furthermore' adds a further point to an argument; making up lines is a replacement, not an extra point.",
        'For example':
          "'For example' introduces an example of forgetting, and inventing new lines is not one.",
        Similarly:
          "'Similarly' links two actions that are alike, but forgetting lines and inventing them are opposites.",
      },
    },
  'Put the lid on the pan. ___, the sauce will splash all over the cooker.': {
    why: "The instruction is to put the lid on; the second sentence warns what happens if you do not. 'Otherwise' means 'if not', linking the advice to the result of ignoring it.",
    not: {
      'As a result':
        "'As a result' would make the splashing a result of putting the lid on, the reverse of the truth.",
      Meanwhile:
        "'Meanwhile' links events at the same time; the splashing only happens if the advice is ignored.",
      'For instance':
        "'For instance' introduces an example, and the splash is a warning, not an example.",
    },
  },
  'You need to book a seat for the trip by Friday. ___, you may not get a place on the coach.': {
    why: "The first sentence sets a deadline; the second says what may happen if you miss it. 'Otherwise' links the instruction to the risk of not following it.",
    not: {
      Therefore:
        "'Therefore' would make losing your place the result of booking by Friday, the opposite of the meaning.",
      'In addition':
        "'In addition' adds a further instruction, but the second sentence is a warning.",
      'For instance':
        "'For instance' introduces an example, and the second sentence warns rather than illustrates.",
    },
  },
  'Leah wanted to play in the match. ___, she had to sit it out with a sprained ankle.': {
    why: "Leah wanted to play, but her sprained ankle stopped her. The second sentence goes against the first, so a contrast connective is needed: 'However'.",
    not: {
      Therefore:
        "'Therefore' would make sitting out a result of wanting to play, which makes no sense.",
      'In addition':
        "'In addition' adds a similar point; the injury works against her wish instead.",
      'For instance':
        "'For instance' introduces an example of wanting to play, and sitting out is not one.",
    },
  },
  'The sun was setting and the path was getting hard to see. ___, the lights of the village appeared below us.':
    {
      why: "As the light fades on the walk, the village lights finally appear below. 'Eventually' shows that something happened after a long time or a long effort.",
      not: {
        Therefore: "'Therefore' would make the village lights a result of the path getting dark.",
        Instead:
          "'Instead' replaces one thing with another; the lights are not in place of anything.",
        'For example':
          "'For example' introduces an example of a darkening path, and the lights are not one.",
      },
    },
  'Seeds need water to grow. ___, they need warmth, which is why few sprout in winter.': {
    why: "Seeds need water and warmth: the second sentence adds another need to the first. 'In addition' introduces a further point of the same kind.",
    not: {
      Instead: "'Instead' would mean warmth replaces water, but seeds need both.",
      'For example':
        "'For example' introduces an example of needing water, and warmth is a second need.",
      Otherwise:
        "'Otherwise' means 'if not', but the sentence adds a need rather than giving a warning.",
    },
  },
  'Dad cooked the dinner. ___, Mum and I set the table and found the candles.': {
    why: "Dad was cooking while Mum and the narrator laid the table. 'Meanwhile' joins two things happening at the same time.",
    not: {
      Therefore:
        "'Therefore' would make laying the table a result of Dad cooking, but the two happen together.",
      'For example':
        "'For example' introduces an example of cooking, and laying the table is not one.",
      Otherwise: "'Otherwise' means 'if not', and nothing here is a warning.",
    },
  },
  'The castle looked frightening from the outside. ___, the rooms inside were bright and cosy.': {
    why: 'The castle looks frightening from outside, but its rooms are bright and cosy. The inside contradicts the outside, so a contrast connective is needed.',
    not: {
      Therefore: "'Therefore' would make the cosy rooms a result of the frightening outside.",
      'For example':
        "'For example' introduces an example of looking frightening, and bright rooms are not one.",
      Meanwhile:
        "'Meanwhile' links two events at the same time; these sentences describe a building, not events.",
    },
  },
  'Ellie thought the test would be impossible. ___, she finished it with ten minutes to spare.': {
    why: "Ellie expected the test to be impossible, but the truth was very different: she finished early. 'In fact' introduces what really happened, correcting the expectation in the first sentence.",
    not: {
      Therefore: "'Therefore' would make finishing early a result of thinking the test impossible.",
      'For example':
        "'For example' introduces an example, and finishing early is not an example of fearing a test.",
      Meanwhile:
        "'Meanwhile' links events at the same time; the second sentence corrects the first.",
    },
  },
  'Keep the gate shut. ___, the sheep will get out onto the road.': {
    why: "The gate must be kept shut; the second sentence warns what will happen if it is not. 'Otherwise' means 'if not', so it links the instruction to its warning.",
    not: {
      'As a result': "'As a result' would make the sheep escaping a result of shutting the gate.",
      'For example': "'For example' introduces an example, but sheep on the road is a warning.",
      Similarly:
        "'Similarly' links two points that are alike, and a warning is not like an instruction.",
    },
  },
  'The storm kept us indoors all morning. ___, the sun came out and we went down to the beach.': {
    why: "The storm keeps everyone inside for the morning, and after a long wait the sun appears. 'Eventually' shows that something happened after a delay.",
    not: {
      Therefore: "'Therefore' would make the sunshine a result of staying indoors.",
      'For instance': "'For instance' introduces an example of the storm, and sunshine is not one.",
      Similarly:
        "'Similarly' links events that are alike, but sunshine is the opposite of the storm.",
    },
  },
  'Kai kept trying to fix his bike chain. ___, it clicked back into place.': {
    why: "Kai kept trying, and after many attempts the chain clicked back. 'Eventually' fits success that comes after a long effort.",
    not: {
      However:
        "'However' would set the chain's fixing against his trying, but it is the reward for trying.",
      'In addition':
        "'In addition' adds a similar point, but the chain clicking back ends the effort.",
      'For instance':
        "'For instance' introduces an example of trying, and success is not an example of it.",
    },
  },
  'The shop had sold out of the blue trainers. ___, I bought a black pair.': {
    why: "The blue trainers had sold out, so a black pair was bought in their place. 'Instead' shows one choice replacing another that was not possible.",
    not: {
      'In addition':
        "'In addition' would mean the black pair was bought as well as the blue, but the blue had sold out.",
      'For example':
        "'For example' introduces an example of selling out, and buying black is not one.",
      Meanwhile:
        "'Meanwhile' links events at the same time; buying the black pair replaced buying the blue.",
    },
  },
  'Nobody in the class expected Josh to win. ___, he had never run in a race before.': {
    why: "Nobody expected Josh to win, and the second sentence gives a striking fact that shows why: he had never raced before. 'In fact' introduces a fact that strengthens the point.",
    not: {
      However:
        "'However' signals a contrast, but never having raced supports nobody expecting him to win.",
      'For example':
        "'For example' would give an example of the class's doubts, but the sentence states a fact about Josh.",
      Otherwise: "'Otherwise' means 'if not', and the second sentence is not a warning.",
    },
  },
  'The bakery opens at six. ___, the first customers queue outside from half past five.': {
    why: "A shop that opens at six would not normally have a queue at half past five, but this one does. 'Even so' means 'despite that' and introduces the surprising queue.",
    not: {
      'As a result':
        "'As a result' would make the queue a result of the opening time, which does not explain why people arrive early.",
      'For example':
        "'For example' introduces an example of the opening time, and the queue is not one.",
      Instead: "'Instead' replaces one thing with another; nothing is replaced.",
    },
  },
  'The test was hard. ___, most of the class did well.': {
    why: "A hard test would usually bring low marks, but most of the class did well. 'Nevertheless' means 'in spite of that', so it introduces an outcome that defies the difficulty.",
    not: {
      Therefore: "'Therefore' would make doing well a result of the test being hard.",
      'In addition':
        "'In addition' adds a similar point, but doing well goes against the test being hard.",
      'For example':
        "'For example' introduces an example of a hard test, and good results are not one.",
    },
  },
  'It rained every day of our holiday. ___, we had a brilliant time.': {
    why: "Rain every day would normally spoil a holiday, but they had a brilliant time anyway. 'Even so' means 'despite that'.",
    not: {
      Therefore: "'Therefore' would make the rain the reason for the brilliant time.",
      'For example':
        "'For example' introduces an example of rain, and a brilliant time is not one.",
      Instead:
        "'Instead' replaces one thing with another, but the rain and the good time both happened.",
    },
  },
  'Seagulls will snatch food straight out of your hand. ___, do not eat chips on the promenade.': {
    why: "Seagulls snatch food, so the second sentence gives the sensible advice that follows. 'Therefore' introduces a conclusion drawn from the first sentence.",
    not: {
      However: "'However' introduces a contrast, but the advice follows from the warning.",
      'For example':
        "'For example' introduces an example of seagulls snatching food, and advice is not one.",
      Meanwhile: "'Meanwhile' links events at the same time; the second sentence is advice.",
    },
  },
  'The bridge was closed for repairs all summer. ___, traffic in the town centre doubled.': {
    why: "Closing the bridge sent its traffic through the town, so traffic there doubled. The second sentence is the effect of the first, which 'As a result' signals.",
    not: {
      However:
        "'However' introduces a contrast, but more traffic is the expected effect of a closed bridge.",
      'For example':
        "'For example' introduces an example of the closure, but doubled traffic is an effect of it.",
      Instead: "'Instead' replaces one thing with another, and nothing is replaced here.",
    },
  },
  'The teachers were setting up the hall for the exam. ___, the pupils waited nervously in the corridor.':
    {
      why: "The teachers set up the hall while the pupils waited outside. 'Meanwhile' joins two things happening at the same time in different places.",
      not: {
        Therefore:
          "'Therefore' would make the waiting a result of the setting up; the two simply happen together.",
        Otherwise: "'Otherwise' means 'if not', and nothing here is a warning.",
        'For example':
          "'For example' introduces an example of setting up the hall, and the pupils waiting is not one.",
      },
      tip: "In a story, 'Meanwhile' lets you cut between two places at once, which builds suspense.",
    },
  'Gran was asleep in her armchair. ___, the cat was quietly eating her sandwich.': {
    why: "While Gran slept, the cat was eating her sandwich. 'Meanwhile' links two things happening at the same time, and that is the joke: she misses it because she is asleep.",
    not: {
      Similarly:
        "'Similarly' would mean the cat was doing something like sleeping, but it was busy eating.",
      'For example':
        "'For example' introduces an example of Gran sleeping, and the cat eating is not one.",
      Instead:
        "'Instead' would mean the cat ate in place of something else, but nothing has been replaced.",
    },
  },
  'The bus was full and twenty minutes late. ___, we reached the concert before it began.': {
    why: "A full, late bus should have made them miss the start, but they arrived in time. 'Nevertheless' introduces an outcome that goes against what the first sentence leads you to expect.",
    not: {
      Therefore:
        "'Therefore' would make arriving in time a result of the late bus, which makes no sense.",
      'For example':
        "'For example' introduces an example of the late bus, and arriving on time is not one.",
      Instead: "'Instead' replaces one thing with another, and nothing is replaced here.",
    },
  },
  'Our new playing field is twice the size of the old one. ___, it has floodlights for winter evenings.':
    {
      why: "The field is bigger, and it has floodlights as well: two advantages on the same side. 'Moreover' adds the second advantage to the first.",
      not: {
        However:
          "'However' signals a contrast, but floodlights are another advantage, not a drawback.",
        Instead: "'Instead' would mean the floodlights replaced the bigger field, but it has both.",
        Otherwise: "'Otherwise' means 'if not', and nothing here is a condition or a warning.",
      },
    },
  'He does not give milk, he does not lay eggs, he is too weak to pull the plough, he cannot run fast enough to catch rabbits. ___ he is lord of all the animals.':
    {
      why: "Old Major lists everything Man cannot do, then says he rules the animals all the same. A fact that goes against what that list leads you to expect needs a contrast word, and 'Yet' gives the turn real force.",
      not: {
        So: "'So' introduces a result, but being lord of the animals does not follow from being weak.",
        Because: "'Because' introduces a reason, and Man's weakness is no reason for his power.",
        Then: "'Then' moves on in time, but Major is making a point about Man, not telling events in order.",
      },
      more: "This is the heart of Major's argument: Man takes everything and gives nothing back. Orwell gives the speech the rhythm of a list and a sudden turn, so that it sounds like real political speech-making.",
    },
  'It was much upon my mind (particularly when I first saw him looking about for his file) that I ought to tell Joe the whole truth. ___ I did not, and for the reason that I mistrusted that if I did, he would think me worse than I was.':
    {
      why: "Pip knows he ought to tell Joe the truth, but he does not. 'Yet' introduces what actually happened, which goes against what he felt he should do.",
      not: {
        So: "'So' would make not telling Joe a result of feeling he ought to, the opposite of the meaning.",
        Also: "'Also' adds a similar point, but not telling Joe goes against the sentence before.",
        Or: "'Or' offers an alternative, but this sentence reports what Pip actually did.",
      },
      more: "Pip's reason is revealing: he fears Joe would think him worse than he is. Dickens shows a guilt that grows because it is never spoken.",
    },
  'No, reader: gratitude, and many associations, all pleasurable and genial, made his face the object I best liked to see; his presence in a room was more cheering than the brightest fire. ___ I had not forgotten his faults; indeed, I could not, for he brought them frequently before me.':
    {
      why: "Jane praises Rochester's face and presence, then admits she had not forgotten his faults. A sentence that qualifies such strong praise needs a contrast word, so 'Yet' fits.",
      not: {
        So: "'So' would make remembering his faults a result of liking him, which makes no sense.",
        Because: "'Because' introduces a reason, and his faults are not why she liked him.",
        Then: "'Then' moves on in time, but this sentence balances her feelings rather than telling events.",
      },
      more: 'Brontë makes Jane a fair judge even of the man she loves: she sees his faults clearly, which makes her love seem clear-eyed rather than blind.',
    },
  'From what he said of Miss Darcy, I was thoroughly prepared to see a proud, reserved, disagreeable girl. ___ he knew to the contrary himself.':
    {
      why: "Elizabeth was led by Wickham to expect a proud, disagreeable girl, but he knew the truth was otherwise. 'Yet' introduces the fact that shows he misled her.",
      not: {
        So: "'So' would make his knowledge a result of her expectations, which gets the logic backwards.",
        Because:
          "'Because' gives a reason, and his knowing the truth is not why she expected a proud girl.",
        Or: "'Or' offers an alternative, but the sentence states a fact about what he knew.",
      },
      more: 'This is a turning point: Elizabeth realises that Wickham deliberately misled her, which helps her see Darcy differently.',
    },
  'He was endeavouring to pierce the darkness with his ferret eyes, when the chimes of a neighbouring church struck the four quarters. ___ he listened for the hour.':
    {
      why: "Scrooge hears the chimes strike the four quarters, which come just before the hour itself. Listening for the hour is the natural result, so 'So' fits.",
      not: {
        Yet: "'Yet' signals a contrast, but listening for the hour follows from hearing the quarters.",
        Also: "'Also' adds a similar point, but listening is a reaction to the chimes, not another fact.",
        Or: "'Or' offers an alternative, and nothing is being chosen between.",
      },
      more: 'Scrooge is waiting for the first of the three spirits, due when the bell tolls one. Dickens stretches out the waiting to build suspense.',
    },
  "My father's family name being Pirrip, and my Christian name Philip, my infant tongue could make of both names nothing longer or more explicit than Pip. ___, I called myself Pip, and came to be called Pip.":
    {
      why: "As a small child, Pip can only manage 'Pip' from Philip Pirrip, and the second sentence gives the result: he called himself Pip. 'So' introduces a consequence in a plain, everyday way.",
      not: {
        Yet: "'Yet' signals a contrast, but calling himself Pip follows from the name he could say.",
        Also: "'Also' adds another fact, but the second sentence is the result of the first.",
        Or: "'Or' offers an alternative, and nothing is being chosen.",
      },
      more: "These are the opening words of Great Expectations. In two sentences Dickens gives us the narrator's name and a child's voice.",
    },
  'The importance of keeping the pigs in good health was all too obvious. ___ it was agreed without further argument that the milk and the windfall apples (and also the main crop of apples when they ripened) should be reserved for the pigs alone.':
    {
      why: "Once keeping the pigs healthy seems obvious, the agreement to give them the milk and apples follows. 'So' introduces that result, and 'without further argument' shows how easily the animals were persuaded.",
      not: {
        Yet: "'Yet' would set the agreement against the obvious importance, but it follows from it.",
        Also: "'Also' adds another point, but the agreement is a result of the first sentence.",
        Or: "'Or' offers a choice between two things, and none is offered here.",
      },
      more: "Squealer has just persuaded the animals that the pigs need this food for their brain-work. The pigs' privileges begin here, presented as common sense.",
    },
  'Hester bade little Pearl run down to the margin of the water, and play with the shells and tangled sea-weed, until she should have talked awhile with yonder gatherer of herbs. ___ the child flew away like a bird, and, making bare her small white feet went pattering along the moist margin of the sea.':
    {
      why: "Hester tells Pearl to go and play by the water, and Pearl does. 'So' introduces the result of the instruction: the child runs off.",
      not: {
        Yet: "'Yet' signals a contrast, but Pearl does what she was told.",
        Also: "'Also' adds a similar point, and the second sentence is a response, not an extra fact.",
        Or: "'Or' offers an alternative, but the sentence says what happened.",
      },
      more: 'Hawthorne compares Pearl to a bird: free, wild and quick, which suits the strange, lively child of the novel.',
    },
  'Herbert was rarely there less frequently than three times in a week, and he never brought me a single word of intelligence that was at all alarming. ___, I knew that there was cause for alarm, and I could not get rid of the notion of being watched.':
    {
      why: "Herbert never brings alarming news, but Pip feels alarmed anyway. 'Still' here means 'all the same': it introduces a feeling that holds in spite of the reassuring facts.",
      not: {
        Therefore:
          "'Therefore' would make his alarm a result of hearing nothing alarming, which makes no sense.",
        Besides:
          "'Besides' adds a further point of the same kind, but alarm goes against the reassuring news.",
        'For instance':
          "'For instance' introduces an example, and Pip's alarm is not an example of Herbert's visits.",
      },
      more: "'Still' has two meanings: 'not moving' and 'all the same'. At the start of a sentence, followed by a comma, it usually means 'all the same'.",
    },
  'The door remained shut; darkness only came in through the window. ___ it was not late; he often sent for me at seven and eight o’clock, and it was yet but six.':
    {
      why: "The shut door and the darkness are discouraging, but Jane reassures herself: it is not late yet. 'Still' introduces a comforting thought in spite of the bad signs.",
      not: {
        Therefore: "'Therefore' would make it not being late a result of the door staying shut.",
        Besides: "'Besides' would add to the discouraging signs, but this sentence offers comfort.",
        Meanwhile:
          "'Meanwhile' links two events at the same time, but this sentence is Jane's thought, not an event.",
      },
    },
  'The rain was pouring in torrents, and thick mists hid the summits of the mountains, so that I even saw not the faces of those mighty friends. ___ I would penetrate their misty veil, and seek them in their cloudy retreats.':
    {
      why: "Rain and mist hide the mountains from Victor, but he decides to climb into them all the same. 'Still' introduces a decision made in spite of the conditions.",
      not: {
        Similarly:
          "'Similarly' links two points that are alike, but his resolve goes against the weather.",
        Besides:
          "'Besides' adds a further point of the same kind, and his resolve works against the obstacle.",
        'For instance':
          "'For instance' introduces an example, and climbing into the mist is not an example of the rain.",
      },
      more: "Victor calls the mountains 'mighty friends'. Shelley's Romantic heroes look to wild nature for comfort, even in a storm.",
    },
  "In the end they finished the harvest in two days' less time than it had usually taken Jones and his men. ___, it was the biggest harvest that the farm had ever seen.":
    {
      why: "Finishing the harvest faster is one success; the biggest harvest ever is a second, even better one. 'Moreover' adds a further point that strengthens the first.",
      not: {
        However: "'However' signals a contrast, but a record harvest is more good news, not bad.",
        Instead: "'Instead' replaces one thing with another, but both successes happened.",
        Otherwise: "'Otherwise' means 'if not', and nothing here is conditional.",
      },
      more: "Orwell shows the animals' early pride in working for themselves. Later chapters test whether that success can last.",
    },
  'Tired out but proud, the animals walked round and round their masterpiece, which appeared even more beautiful in their eyes than when it had been built the first time. ___, the walls were twice as thick as before.':
    {
      why: "The animals admire the rebuilt windmill, and the second sentence adds another reason to be proud: thicker walls. 'Moreover' adds a further point in support of the first.",
      not: {
        However: "'However' signals a contrast, but thicker walls are another reason for pride.",
        Instead: "'Instead' replaces one thing with another, and nothing is being replaced.",
        Otherwise: "'Otherwise' means 'if not', and nothing here is a warning or a condition.",
      },
    },
  'Already I had had a transient impression of these, and the first nausea no longer obscured my observation. ___, I was concealed and motionless, and under no urgency of action.':
    {
      why: "The narrator gives reasons he could study the Martians closely: his first sickness had passed, and he was hidden with nothing to do. 'Moreover' adds the second reason to the first.",
      not: {
        However:
          "'However' signals a contrast, but being hidden helps him observe, as the first point does.",
        Instead: "'Instead' replaces one thing with another, and both reasons hold.",
        Otherwise:
          "'Otherwise' means 'if not', and the sentence adds a reason rather than a warning.",
      },
    },
  'But, I saw nothing that in the least explained him. ___, I saw him next moment, once more holding out both his hands to me.':
    {
      why: "Pip looks for something that explains the stranger, but what he sees deepens the mystery: the man holding out his hands to him. 'On the contrary' introduces the opposite of an explanation.",
      not: {
        'As a result':
          "'As a result' would make the outstretched hands a result of Pip seeing nothing.",
        'For instance':
          "'For instance' introduces an example, but the outstretched hands go against the first sentence.",
        Similarly: "'Similarly' links alike points, and the second sentence goes the other way.",
      },
    },
  'He has not an ill-natured look. ___, there is something pleasing about his mouth when he speaks.':
    {
      why: "Mrs Gardiner says Darcy does not look ill-natured, then goes further: something about him is pleasing. 'On the contrary' introduces a point that is the opposite of the fault just denied.",
      not: {
        'As a result':
          "'As a result' would make his pleasing mouth a result of his look, which is not the link.",
        Otherwise: "'Otherwise' means 'if not', and the sentence is not a condition.",
        Meanwhile:
          "'Meanwhile' links two events at the same time, but these sentences describe a face.",
      },
      more: "Mrs Gardiner has just met Darcy and finds him far better than his reputation. Austen uses her fair judgement to show the reader that Elizabeth's view of Darcy may be wrong.",
    },
  'He did not seem offended. ___, he put his finger-tips together and leaned his elbows on the arms of his chair, like one who has a relish for conversation.':
    {
      why: "Holmes might have been offended, but he was not; far from it, he settled in eagerly to talk. 'On the contrary' introduces the opposite of being offended.",
      not: {
        'As a result':
          "'As a result' introduces a consequence, but settling in to talk is the opposite of offence, not caused by its absence.",
        Otherwise: "'Otherwise' means 'if not', and the sentence is not a condition.",
        Meanwhile:
          "'Meanwhile' links two events at the same time, but this sentence describes how he reacted.",
      },
    },
  'Reading over what I have written so far, I see I have given the impression that the events of three nights several weeks apart were all that absorbed me. ___, they were merely casual events in a crowded summer, and, until much later, they absorbed me infinitely less than my personal affairs.':
    {
      why: "Nick corrects an impression his own story has given: the three nights did not absorb him. 'On the contrary' introduces the opposite of that impression.",
      not: {
        'As a result':
          "'As a result' would make the nights seem unimportant because of the impression, which gets the logic wrong.",
        'For instance':
          "'For instance' introduces an example, but the sentence contradicts the impression.",
        Similarly: "'Similarly' links alike points, and this sentence denies the first.",
      },
      more: 'Nick Carraway, the narrator, steps out of the story to correct himself. It makes him seem honest, which is why some readers trust him and others do not.',
    },
  'Quite satisfied, he closed his door, and locked himself in; double-locked himself in, which was not his custom. ___ secured against surprise, he took off his cravat; put on his dressing-gown and slippers, and his nightcap; and sat down before the fire to take his gruel.':
    {
      why: "Scrooge double-locks his door, and 'Thus secured' means 'secured in this way', by the locking just described. 'Thus' points back to the action and leads into what he did next.",
      not: {
        Otherwise: "'Otherwise' means 'if not', and 'Otherwise secured' makes no sense here.",
        Meanwhile:
          "'Meanwhile' links two events at the same time, but 'secured' describes the result of the locking.",
        Instead: "'Instead' replaces one action with another, but he did lock the door.",
      },
      more: "Dickens shows Scrooge nervous for once: double-locking is 'not his custom'. The cosy details of nightcap and gruel make the coming ghost more startling.",
    },
  'I endeavoured to change my course, but quickly found that, if I again made the attempt, the boat would be instantly filled with water. ___ situated, my only resource was to drive before the wind.':
    {
      why: "Victor cannot change course without sinking, and 'Thus situated' means 'in this situation'. 'Thus' points back to the danger just described and introduces what he did about it.",
      not: {
        Besides: "'Besides' adds a further point, and 'Besides situated' is not English.",
        Meanwhile:
          "'Meanwhile' links events at the same time, and it cannot describe his situation.",
        Instead:
          "'Instead' replaces one thing with another, and 'Instead situated' makes no sense.",
      },
    },
  'I folded my shawl double, and spread it over me for a coverlet; a low, mossy swell was my pillow. ___ lodged, I was not, at least at the commencement of the night, cold.':
    {
      why: "Jane makes a bed of her shawl and the moss, and 'Thus lodged' means 'lodged in this way'. 'Thus' points back to the makeshift bed on the moor.",
      not: {
        Otherwise:
          "'Otherwise lodged' would mean lodged differently, but she is describing the bed she has just made.",
        Moreover: "'Moreover' adds a further point, and 'Moreover lodged' is not English.",
        Instead: "'Instead' replaces one thing with another, and her bed replaces nothing here.",
      },
    },
  'Mary would sit and watch me by the hour together: then she would take lessons; and a docile, intelligent, assiduous pupil she made. ___ occupied, and mutually entertained, days passed like hours, and weeks like days.':
    {
      why: "Jane describes days of teaching and talking with Mary, and 'Thus occupied' means 'occupied in this way'. 'Thus' gathers up the activities just described and leads into how quickly the time passed.",
      not: {
        Besides: "'Besides' adds a further point, and 'Besides occupied' is not English.",
        Otherwise:
          "'Otherwise occupied' would mean busy with something else, the opposite of the meaning.",
        Meanwhile:
          "'Meanwhile' links two events at the same time, and it cannot describe how they were occupied.",
      },
      tip: "'Thus' before a past participle, as in 'Thus occupied', means 'in this way'. It neatly links a paragraph's actions to their effect.",
    },
  "Except for Mollie and Snowball, no other animal had ever left the farm, and they did not like to think of their sick comrade in the hands of human beings. ___, Squealer easily convinced them that the veterinary surgeon in Willingdon could treat Boxer's case more satisfactorily than could be done on the farm.":
    {
      why: "The animals dislike the idea of Boxer in human hands, but Squealer talks them round. 'However' introduces the turn from their worry to his reassurance.",
      not: {
        Therefore:
          "'Therefore' would make Squealer's persuading a result of their worry, and it misses the turn.",
        Furthermore:
          "'Furthermore' adds a point that supports the first, but Squealer's persuasion goes against their worry.",
        'For example':
          "'For example' introduces an example, and Squealer's argument is not an example of their worry.",
      },
      more: "Readers who know the book feel the dramatic irony here: the animals trust Squealer, and Boxer's fate is not what they are told.",
    },
  'There were no horses to be procured, and I must return by the lake; but the wind was unfavourable, and the rain fell in torrents. ___, it was hardly morning, and I might reasonably hope to arrive by night.':
    {
      why: "The first sentence lists everything against Victor's journey: no horses, a bad wind and heavy rain. The second offers hope: it is early, so he may arrive by night. 'However' marks the turn from obstacles to hope.",
      not: {
        Therefore: "'Therefore' would make the early hour a result of the bad weather.",
        Besides:
          "'Besides' adds another point of the same kind, but this sentence offers hope rather than another obstacle.",
        Similarly:
          "'Similarly' links alike points, and the second sentence goes against the first.",
      },
    },
  'This was very uncomfortable, and I was half afraid. ___, the only thing to be done being to knock at the door, I knocked, and was told from within to enter.':
    {
      why: "Pip is uncomfortable and half afraid, but he knocks anyway. 'However' introduces the action he takes in spite of his fear.",
      not: {
        Therefore:
          "'Therefore' would make knocking a result of being afraid, which gets it the wrong way round.",
        Besides:
          "'Besides' adds a further point of the same kind, but knocking goes against his fear.",
        'For instance':
          "'For instance' introduces an example, and knocking is not an example of being afraid.",
      },
      more: "This is Pip's first visit to Satis House, where he meets Miss Havisham. His fear at the door builds suspense before the famous scene.",
    },
  'Adèle, too, would be dressed: though I thought she had little chance of being introduced to the party that day at least. ___, to please her, I allowed Sophie to apparel her in one of her short, full muslin frocks.':
    {
      why: "Jane thinks Adèle will probably not meet the guests that day, but she lets her be dressed up anyway. 'However' introduces an action that goes against the expectation just stated.",
      not: {
        Therefore:
          "'Therefore' would make dressing her a result of her not being introduced, which makes little sense.",
        Besides:
          "'Besides' adds a further point of the same kind, but this sentence turns against the first.",
        'For example':
          "'For example' introduces an example, and dressing Adèle is not an example of her small chance.",
      },
    },
  "On the present occasion, though I was hungry, I dared not eat my slice. I felt that I must have something in reserve for my dreadful acquaintance, and his ally the still more dreadful young man. I knew Mrs. Joe's housekeeping to be of the strictest kind, and that my larcenous researches might find nothing, available in the safe. ___ I resolved to put my hunk of bread-and-butter down the leg of my trousers.":
    {
      why: "Pip must save food for the convict, and he cannot take any from the safe. 'Therefore' introduces the plan that follows from both facts: hide his own bread down his trousers.",
      not: {
        However: "'However' signals a contrast, but hiding the bread is where his reasoning leads.",
        Meanwhile:
          "'Meanwhile' links two events at the same time, but the plan is the result of his reasoning.",
        Besides:
          "'Besides' adds a further reason, but the last sentence is his decision, not another reason.",
      },
      more: "Dickens makes Pip's frightened logic comic: a careful chain of reasons ends in bread-and-butter down a trouser leg.",
    },
  'We had made some pale efforts in the beginning to applaud Mr. Wopsle; but they were too hopeless to be persisted in. ___ we had sat, feeling keenly for him, but laughing, nevertheless, from ear to ear.':
    {
      why: "The audience's attempts to applaud Mr Wopsle soon failed, so they sat feeling for him while laughing. 'Therefore' introduces what followed from giving up the applause.",
      not: {
        However:
          "'However' would set their sitting against the failed applause, but it follows from it.",
        Similarly: "'Similarly' links alike points, but the second sentence is a result.",
        'For instance':
          "'For instance' introduces an example, and their sitting is not an example of applause.",
      },
      more: "Mr Wopsle is playing Hamlet, badly. Dickens's comedy comes from the mix of pity and laughter in 'feeling keenly for him, but laughing'.",
    },
  'I mistrusted a design to entrap me into some admission. ___, I glanced at him as we walked on together, but said nothing.':
    {
      why: "Pip suspects a plan to trick him into admitting something, so he says nothing. 'Therefore' introduces the careful silence that follows from his suspicion.",
      not: {
        However: "'However' signals a contrast, but his silence follows from his distrust.",
        Similarly:
          "'Similarly' links alike points, and his silence is a result of the first sentence.",
        'For instance':
          "'For instance' introduces an example, and glancing in silence is not an example of distrust.",
      },
    },
  'It would be quite bright, and people would be about in an hour or so. ___, I argued, they did not go very far.':
    {
      why: "Holmes reasons that daylight would soon bring people out, so the fugitives could not have gone far. 'Therefore' introduces a conclusion drawn from that fact, as a detective's reasoning should.",
      not: {
        However: "'However' would set the conclusion against the fact, but it follows from it.",
        Meanwhile: "'Meanwhile' links events at the same time, but this sentence is a conclusion.",
        'For instance': "'For instance' introduces an example, and a conclusion is not an example.",
      },
      tip: "'Therefore' is the classic word for a conclusion. In an essay, use it only when your evidence really does lead there.",
    },
  'The animals watched his coming and going with a kind of dread, and avoided him as much as possible. ___, the sight of Napoleon, on all fours, delivering orders to Whymper, who stood on two legs, roused their pride and partly reconciled them to the new arrangement.':
    {
      why: "The animals dread Whymper and avoid him, but seeing Napoleon give him orders makes them proud. 'Nevertheless' introduces a feeling that goes against the dread just described.",
      not: {
        Therefore: "'Therefore' would make their pride a result of their dread.",
        'For example':
          "'For example' introduces an example, and their pride is not an example of avoiding him.",
        Meanwhile:
          "'Meanwhile' links two events at the same time, but this sentence sets one feeling against another.",
      },
      more: "Orwell's irony: the animals are proud that a pig gives a man orders, not noticing that Napoleon now trades with the humans they rebelled against.",
    },
  'Throughout the spring and summer they worked a sixty-hour week, and in August Napoleon announced that there would be work on Sunday afternoons as well. This work was strictly voluntary, but any animal who absented himself from it would have his rations reduced by half. ___, it was found necessary to leave certain tasks undone.':
    {
      why: "The animals work a sixty-hour week and give up Sunday afternoons, yet some jobs go undone. 'Even so' introduces an outcome that happens despite all that extra work.",
      not: {
        'As a result':
          "'As a result' would make the extra work the cause of tasks being left undone.",
        'For instance':
          "'For instance' introduces an example of the work, and unfinished tasks are not one.",
        Similarly:
          "'Similarly' links alike points, but unfinished tasks go against the extra work.",
      },
      more: "'Strictly voluntary' is ironic: refusing to work would halve an animal's food. Orwell lets the reader see that the choice is no choice at all.",
    },
  'Sentinels were placed at all the approaches to the farm. ___, four pigeons were sent to Foxwood with a conciliatory message, which it was hoped might re-establish good relations with Pilkington.':
    {
      why: "Napoleon takes two precautions: guards at every approach, and pigeons with a friendly message to Pilkington. 'In addition' adds the second measure to the first.",
      not: {
        Instead: "'Instead' would mean the pigeons replaced the sentinels, but both were sent.",
        However: "'However' signals a contrast, but the second measure supports the first.",
        'For example':
          "'For example' introduces an example, and the pigeons are not an example of placing sentinels.",
      },
    },
  'I hastened to Mrs. Fairfax’s room; there was a fire there too, but no candle, and no Mrs. Fairfax. ___, all alone, sitting upright on the rug, and gazing with gravity at the blaze, I beheld a great black and white long-haired dog, just like the Gytrash of the lane.':
    {
      why: "Jane looks for Mrs Fairfax but does not find her; in her place is a great dog. 'Instead' introduces what Jane found in place of the person she expected.",
      not: {
        Therefore: "'Therefore' would make the dog a result of Mrs Fairfax's absence.",
        Moreover:
          "'Moreover' adds a further point of the same kind, but the dog takes the place of what she expected.",
        Finally:
          "'Finally' introduces the last in a series, and this is a surprise rather than the end of a list.",
      },
      more: "The dog is Pilot, Mr Rochester's dog, and Jane links it to the Gytrash, a ghostly creature from folk tales. Its appearance means Rochester has arrived.",
    },
  'What seems strange to you is only so because you do not follow my train of thought or observe the small facts upon which large inferences may depend. ___, I began by stating that your brother was careless.':
    {
      why: "Holmes says Watson does not follow his train of thought, then shows him one step of it: how he decided Watson's brother was careless. 'For example' introduces a particular case of the general point.",
      not: {
        However:
          "'However' signals a contrast, but the example supports what Holmes has just said.",
        'As a result':
          "'As a result' introduces a consequence, but this sentence illustrates rather than results.",
        Meanwhile:
          "'Meanwhile' links two events at the same time, and this sentence is an illustration.",
      },
    },
  'His friends were those of his own blood or those whom he had known the longest; his affections, like ivy, were the growth of time, they implied no aptness in the object. ___, no doubt the bond that united him to Mr. Richard Enfield, his distant kinsman, the well-known man about town.':
    {
      why: "Utterson's friendships grow from family ties and long acquaintance, 'like ivy'. 'Hence' means 'that is why', and it introduces what this explains: his bond with Enfield, a distant relative.",
      not: {
        However:
          "'However' would set his bond with Enfield against his habits, but it follows from them.",
        Meanwhile:
          "'Meanwhile' links events at the same time, but this sentence explains a friendship.",
        Instead: "'Instead' replaces one thing with another, and Enfield replaces nothing.",
      },
      more: "'Hence' is formal and old-fashioned. You will meet it in older texts where a modern writer might say 'that is why'.",
    },
  'I well knew that if any other had communicated such a relation to me, I should have looked upon it as the ravings of insanity. ___, the strange nature of the animal would elude all pursuit, even if I were so far credited as to persuade my relatives to commence it.':
    {
      why: "Victor gives two reasons not to tell anyone about the creature: he would be thought mad, and it could not be caught anyway. 'Besides' adds the second reason to the first.",
      not: {
        However:
          "'However' signals a contrast, but this sentence gives another reason for silence.",
        Therefore: "'Therefore' would make the creature's escape a result of being thought mad.",
        Meanwhile:
          "'Meanwhile' links two events at the same time, and this sentence adds a reason.",
      },
    },
  'I had sufficient leisure for these and many other reflections during my journey to Ingolstadt, which was long and fatiguing. ___ the high white steeple of the town met my eyes.':
    {
      why: "The journey to Ingolstadt is long and tiring, and in the end the town's steeple appears. 'At length' means 'after a long time', which fits the end of a long journey.",
      not: {
        Therefore: "'Therefore' would make the steeple appear because of his reflections.",
        Instead: "'Instead' replaces one thing with another, and the steeple replaces nothing.",
        'For example':
          "'For example' introduces an example, and seeing the steeple is not an example of reflecting.",
      },
      more: "'At length' is an older way of saying 'eventually'. It suits a sentence that ends a long wait or a long journey.",
    },
  'I responded that it was merely a fancy head, and hurried it beneath the other sheets. ___, I lied: it was, in fact, a very faithful representation of Mr. Rochester.':
    {
      why: "Asked by Eliza, Jane says the drawing is 'merely a fancy head', an imagined face, then admits she lied: it is Mr Rochester. 'Of course' signals a truth the reader can guess, since we know her feelings for him.",
      not: {
        Instead:
          "'Instead' replaces one thing with another, but Jane is admitting a lie, not replacing anything.",
        Therefore: "'Therefore' would make the lie a result of hiding the drawing.",
        Meanwhile:
          "'Meanwhile' links events at the same time, but this sentence comments on what she has just said.",
      },
    },
}
