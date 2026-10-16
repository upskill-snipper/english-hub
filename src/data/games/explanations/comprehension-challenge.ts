import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Comprehension Challenge: the explanation a student sees after each answer, by
 * question key (src/data/games/banks/comprehension-challenge.ts). Written with AI
 * on 16 October 2026 and checked against each question and its options, as the
 * founder decided (src/lib/games/explanations/types.ts).
 */
export const EXPLANATIONS: GameExplanations = {
  "The Storm: What can we infer about Eleanor's state of mind?": {
    why: "Every creak 'made her heart stammer', and she tells herself it was 'only the wind', as if trying to calm herself down. The footsteps that sounded 'too deliberate' to be the storm show she fears someone else is in the house.",
    not: {
      'She is relaxed and content':
        'Nothing about her is calm: every creak makes her heart stammer, and she has to reassure herself about the noises she hears.',
      'She is bored and indifferent':
        'Someone bored would not notice every creak. She presses her face to the window and reacts to each sound, so she is far from indifferent.',
      'She is excited by the storm':
        "The storm frightens her rather than thrilling her. Even the silence between storms is 'worse than the noise', and the footsteps scare her.",
    },
    more: 'The writer never says Eleanor is afraid. Physical details, like her stammering heart, and her attempt to reassure herself let the reader work it out. Showing feelings through the body and actions, rather than naming them, is a common way to build tension in Gothic fiction.',
    tip: "In an inference answer, name the feeling, then prove it with a short quotation and say what it implies: the floorboards 'made her heart stammer', which suggests fear she cannot control.",
  },
  'The Storm: What effect does the simile "like a thousand tiny fists" create?': {
    why: 'Fists belong to people, so the simile gives the rain a human body and a human purpose: it seems to be beating on the window to get in. That makes the rain feel violent and aggressive, as if the house is under attack.',
    not: {
      'It suggests the rain is gentle':
        "Fists pounding on glass are the opposite of gentle, and the verb 'lash' adds even more force.",
      'It shows the window is fragile':
        'The simile describes the rain, not the glass. Nothing suggests the window is breaking; the focus is on how fiercely the rain attacks.',
      'It creates a sense of warmth':
        'Fists suggest threat and violence, not comfort. The image adds to the fear the whole passage builds.',
    },
    more: "'A thousand tiny fists' also suggests a crowd, as if many attackers surround Eleanor at once. This suits Gothic writing, where the setting itself seems hostile and the main character feels trapped.",
    tip: "Zoom in on one word: 'fists' suggests deliberate, human violence, so the storm seems to want to break in. Explaining a single word in detail is stronger than describing the whole image.",
  },
  'The Storm: Why does the writer save the detail about footsteps until the end?': {
    why: "The passage builds from storm noises that can be explained to one detail that cannot: footsteps 'too deliberate, too measured' for any storm. Saving it for the last sentence makes it a climax, so the tension peaks just as the passage ends.",
    not: {
      'Because she forgot to mention it earlier':
        'Writers place details on purpose. Putting the most frightening detail last is a deliberate choice that shapes how the reader reacts.',
      'To show the passage of time':
        'The footsteps are not there to mark time. Their position matters because they change the mood from a storm to a possible intruder.',
      'Because footsteps are unimportant':
        'They are the most important detail, the one suggesting Eleanor may not be alone. That is exactly why the writer holds it back.',
    },
    more: 'This is a structural shift: the focus moves from the weather outside to a threat that may be inside the house. The passage ends without saying whose footsteps they were, which leaves the reader in suspense.',
    tip: "In a structure answer, say where a detail is placed and why: 'By saving the footsteps for the final sentence, the writer shifts the focus from the storm to a possible intruder, ending on a cliffhanger.'",
  },
  'The Storm: How effectively does the writer create a sense of isolation?': {
    why: "Eleanor is 'alone in this house for three days', and even the storm's noise is better than 'the silence between the storms'. The old house, the peeling wallpaper and the single flickering candle add to the feeling that nobody is there to help her.",
    not: {
      'Not effectively - the storm provides company':
        'The storm is a threat, not company. The writer says the silence between storms is worse, which shows how alone she feels when the noise stops.',
      'Somewhat - but Eleanor seems comfortable':
        'She is not comfortable: her heart stammers at every creak and she has to reassure herself. Her unease adds to the sense of isolation.',
      'Poorly - the house sounds welcoming':
        'The house is old, with peeling wallpaper, creaking floorboards and dancing shadows. It sounds neglected and frightening, not welcoming.',
    },
    more: 'Isolation is a common Gothic feature: a character alone in a remote, decaying building feels vulnerable, and so does the reader. Here the moors, the old house and her three days alone all cut Eleanor off from help.',
    tip: 'For an evaluation question, give a clear judgement and back it with two or three precise details. Then explain the effect of each detail on the reader.',
  },
  'The Storm: What is the effect of the clause "She had been alone in this house for three days now"?':
    {
      why: "Among dramatic descriptions of thunder and rain, this clause is plain and factual. Stating the time, 'three days', so simply makes it stark: it stresses how long she has been alone, without comment, and leaves the reader to feel the weight of it.",
      not: {
        'It speeds up the pace':
          "This is not a short sentence: the clause opens a long one that runs on to 'the silence between the storms'. Its effect is a plain, stark statement, not a quicker pace.",
        'It creates humour':
          'Nothing here is funny. The plain statement adds to the bleak, lonely mood.',
        'It shows she is counting incorrectly':
          'Nothing suggests she has miscounted. The exact number makes her isolation feel real and long.',
      },
      more: "Placing a plain statement among vivid description makes it stand out. Here it moves the focus from the storm to Eleanor's situation, and 'now' suggests the isolation is still going on.",
      tip: "When you write about sentence forms, say what the form does to the reader: 'The plain, factual clause stresses how long Eleanor has been alone, so the reader shares her growing unease.'",
    },
  'The Market: Why does the writer describe the market as "a symphony"?': {
    why: "A symphony is a long piece of music in which many instruments play together under a conductor. Calling the market 'a symphony of preparation' suggests its many workers and noises fit together in harmony, as if every action has its part to play.",
    not: {
      'Because there is live music':
        "The only music is a radio, 'half-drowned' by other noise. 'Symphony' is a metaphor for the market's activity, not real music.",
      'Because it is very loud':
        'A symphony is about many parts working together, not volume. The metaphor stresses order and harmony rather than loudness.',
      'To show it is chaotic':
        'A symphony is carefully organised, the opposite of chaos. The writer presents the busy market as coordinated, not disorderly.',
    },
    more: 'The music metaphor opens the passage and shapes how we read the rest: the stallholders, the fishmonger and the clatter of shutters all seem like players in one performance.',
    tip: "Explore the connotations of the key word: 'symphony' suggests harmony, skill and rehearsal, so the opening presents the market as a well-practised performance.",
  },
  'The Market: What can we infer about the chefs from their description?': {
    why: "The chefs move 'with purpose', squeezing avocados and sniffing coriander 'with the concentration of surgeons'. They test each item carefully before buying, which suggests skilled professionals who care about quality.",
    not: {
      'They are inexperienced':
        'Their sense of purpose and surgeon-like concentration suggest expertise. Judging produce by touch and smell is a skill.',
      'They are in a rush and careless':
        "'Moving with purpose' means focused, not careless. Surgeons are known for precision, so the comparison stresses care.",
      'They do not enjoy their work':
        'Nothing suggests they dislike their work. Their concentration shows they take it seriously.',
    },
    more: 'Comparing the chefs to surgeons raises the status of their work: choosing ingredients becomes as precise and serious as an operation.',
    tip: "Infer from verbs and comparisons: 'squeezing' and 'sniffing' show careful testing, and the comparison with surgeons adds precision. Explain what each detail suggests about the people.",
  },
  'The Market: How does the writer organise this passage?': {
    why: "The passage follows time. It opens 'at dawn' with stallholders setting up, moves through the morning preparations, then 'By seven' the first customers arrive, and it ends with a queue already forming. Each stage comes later than the one before.",
    not: {
      'By comparing two different markets':
        'Only one market, Borough Market, is described. There is no second market to compare it with.',
      'By listing prices of items':
        'No prices are mentioned. The writer describes sights, sounds and smells, not costs.',
      'Through dialogue between characters':
        'Nobody speaks in the passage. It is description, not conversation.',
    },
    more: "Time markers such as 'at dawn' and 'By seven' guide the reader. As the morning goes on, the market fills up, so the passage builds from quiet preparation to busy activity.",
    tip: "In a structure question, track the time markers and say how the focus changes: 'The writer moves chronologically from dawn to seven, shifting the focus from the workers to the customers.'",
  },
  'The Market: What effect does the metaphor "each mackerel a small mirror" create?': {
    why: "Each fish is called 'a small mirror' because its shiny skin reflects 'the strip lights above'. The image helps us see how the silver fish gleam, and that shine suggests they are fresh.",
    not: {
      'It shows fish are expensive':
        'Price is never mentioned. The image is about how the fish look, shining under the lights.',
      'It suggests the fish are still alive':
        'A mirror reflects light; it does not move or breathe. The image is about sheen, not life.',
      'It shows poor lighting in the market':
        'The fish reflect the strip lights, so the market is lit. The image shows the fish shining, not dim lighting.',
    },
    more: "The image belongs with other details of light, such as the 'silver catch' and produce that gleams 'with morning dew', which make the market seem fresh and bright.",
    tip: "Comment on the visual effect and what it suggests: 'The metaphor makes the mackerel shine like mirrors, suggesting they are fresh and carefully displayed.'",
  },
  'The Market: How does the writer appeal to the senses throughout the passage?': {
    why: "The writer uses four senses: sight (the 'blue half-light', the silver fish), sound (a radio, the 'clatter of metal shutters'), smell ('fresh bread, roasting coffee') and touch (the 'cold air', chefs squeezing avocados). Together they place the reader inside the market.",
    not: {
      'Only through visual description':
        'There is plenty to see, but also sounds (the radio, the clatter), smells (bread, coffee) and touch (the cold, the avocados).',
      'Mainly through taste': 'Nobody tastes anything. The food is smelled and handled, not eaten.',
      'The passage lacks sensory detail':
        "Almost every sentence appeals to a sense. Sensory detail is the passage's main technique.",
    },
    more: 'Using several senses makes description immersive: the reader can almost hear, smell and feel the scene. The smells come last, building to the doughnuts and the patient queue, so the passage ends with warmth and appetite.',
    tip: "In your own descriptive writing, use at least three senses and make each detail precise: not 'a nice smell' but 'the smell of roasting coffee'.",
  },
  'The Letter: What time period is this passage set in?': {
    why: "A 'regiment' and a 'field hospital' point to a war, and Mary staying with 'the wounded' suggests she is a nurse. The 'factory whistle' and the 'looms' place Thomas in an industrial town. Together these clues fit the First or Second World War.",
    not: {
      'Modern day':
        'The details belong to the past: letters kept in a tin box, a factory whistle and looms. The label also says this is historical fiction.',
      'The future':
        'Nothing is futuristic. Regiments, letters and looms all point to the past, and the passage is historical fiction.',
      'Medieval times':
        'Medieval towns had no factories. A factory whistle calling workers back to the looms belongs to the industrial age, centuries later.',
    },
    more: 'Inference means working out what the writer does not state. No date is given, so look for clues in the work, the war and how people communicate, then choose the answer that fits all of them, not just one.',
    tip: 'Quote the clues and explain each one: the factory whistle suggests an industrial town, and the regiment and field hospital suggest wartime. Two or three clues make an inference convincing.',
  },
  'The Letter: What does the metaphor "each one a small monument to absence" suggest?': {
    why: "A monument is built to remember someone who is gone, often someone who has died. Calling each letter 'a small monument to absence' suggests Thomas keeps them as memorials: each marks Mary's absence and is treated with care, almost as something sacred.",
    not: {
      'The letters are very large':
        "The writer says 'small' monument. The metaphor is about what the letters mean to Thomas, not their size.",
      'He has too many letters':
        'The pile is growing, but the metaphor is about what each letter means: a reminder that she is not there.',
      'The letters describe a war memorial':
        "No memorial is described. 'Monument' is a metaphor for the letters themselves, which Thomas keeps as reminders of his sister.",
    },
    more: "Monuments are usually for the dead, so the metaphor hints at Thomas's fear that Mary may never come home. Keeping the letters 'alongside the others' in a tin box under his bed suggests a private ritual of remembering.",
    tip: "When you analyse a metaphor, explain its connotations: 'monument' suggests memory, respect and even death, which shows how deeply Thomas feels his sister's absence.",
  },
  'The Letter: Why does the writer end with the factory whistle?': {
    why: "The passage moves from a quiet, private moment with the letter to the whistle 'summoning him back to the looms'. Thomas has no time to grieve: work calls him away, and its noise is 'almost loud enough to drown out thought', so his feelings must be pushed aside.",
    not: {
      'To show Thomas is late for work':
        'Nothing suggests he is late. The whistle simply calls the workers back, cutting into his private grief.',
      'To create a happy ending':
        "The ending is not happy. Thomas goes back to noisy work with the 'hollow ache' still there.",
      'Because the passage is about factories':
        'The passage is about loss. The factory is the setting that interrupts his grief.',
    },
    more: "Ending on an outside sound shifts the focus from Thomas's thoughts to the world around him. The idea that noise could 'drown out thought' suggests he may even welcome work as an escape from his feelings.",
    tip: "For structure questions, compare the start and the end: 'The passage moves from a quiet, private moment to the harsh factory whistle, showing how ordinary life forces Thomas to carry on.'",
  },
  'The Letter: What does "braver than him" suggest about Thomas\'s view of himself?': {
    why: "Thomas 'had always known Mary was braver than him', so he sees himself as the weaker one. She is caring for the wounded near the fighting while he works at the looms at home, which suggests he may feel guilty for not doing more.",
    not: {
      'He thinks he is very brave':
        'He thinks the opposite: Mary is braver than him. He compares himself unfavourably with his sister.',
      'He does not care about the war':
        'He reads the letter four times and the colour drains from his face, so he cares deeply about Mary and the war.',
      'He wants to be a soldier':
        "The passage never says he wants to fight. It shows him admiring his sister's courage and feeling smaller beside her.",
    },
    more: "'Had always known' suggests this is an old feeling, not a new one: he has measured himself against Mary for a long time. It also explains why he 'understood' her choice even though it hurts him.",
    tip: "Small phrases reveal how characters see themselves. Quote the phrase and explain what it implies: 'braver than him' shows that Thomas admires Mary and feels inadequate beside her.",
  },
  'The Letter: How effectively does the writer convey the theme of loss?': {
    why: "Loss is shown through the body and objects rather than stated: each reading of the letter 'drained a little more colour from his face', he feels a 'hollow ache in his chest', and the letters pile up in a tin box. These details make his grief feel real.",
    not: {
      'Poorly - Thomas seems happy':
        'Thomas is not happy: the colour drains from his face and he feels a hollow ache. The passage is full of sadness.',
      'Somewhat - but the passage is too short':
        'Length does not decide how effective a passage is. In a few sentences the writer builds loss through precise, physical details.',
      'Not at all - there is no loss in the passage':
        "His sister is not coming home, and the letters are 'a small monument to absence'. Loss is the passage's main theme.",
    },
    more: "The adjective 'hollow' suggests emptiness, as if part of him is missing. The short sentence 'His sister was not coming home.' delivers the news bluntly, which makes it hit harder.",
    tip: "Back up an evaluation with specific methods: name each detail, quote it briefly and say how it makes the reader feel Thomas's loss.",
  },
  'Screen Time: What effect does the rule of three "not playing... not imagining... consuming" create?':
    {
      why: "Two short sentences say what the children are not doing, 'not playing' and 'not imagining', then a third gives the writer's judgement: 'They are consuming'. The repeated pattern builds a rhythm, so 'consuming' lands hard as a criticism.",
      not: {
        'It creates a list of fun activities':
          'Playing and imagining are named only to say the children are not doing them. The point is what is missing.',
        'It shows children have many hobbies':
          'The opposite: the children are doing only one thing, consuming. The pattern stresses what they have lost.',
        'It creates a sense of balance':
          'The three parts do not balance each other. They build towards the criticism in the last one.',
      },
      more: "'Consuming' presents the children as passive users who take in content without making anything. The writer then adds another set of three, 'endlessly, passively, silently', to hammer the point home.",
      tip: "Use the rule of three in persuasive writing, and order it so the last item is the strongest: 'It is unfair, unnecessary and dangerous.'",
    },
  'Screen Time: Why does the writer use the counter-argument "Some will argue that technology is a tool"?':
    {
      why: "The writer admits that technology is a tool, then turns the point round: 'A hammer is also a tool', but nobody gives one to a toddler and walks away. Granting the point first makes the writer seem fair, so the rebuttal is more convincing.",
      not: {
        'Because they agree with it':
          'The writer agrees only that technology is a tool, then uses that very point against the opposing view. The article still argues for limits on screens.',
        'Because they have no opinion':
          'The writer has a strong opinion throughout. The counter-argument is raised in order to be knocked down.',
        'To end the article on a balanced note':
          'It comes in the middle, not at the end, and the article ends one-sided, urging readers to set boundaries.',
      },
      more: 'Raising an opposing view and then answering it is called counter-argument and rebuttal. It deals with what a doubtful reader might think before they can object.',
      tip: "In your own persuasive writing, try: 'Some may argue that... However,...' Then give a strong reason or example that undermines the opposing view.",
    },
  'Screen Time: What is the effect of comparing children to "factory workers on an assembly line"?':
    {
      why: "The children's thumbs scroll 'with the mechanical rhythm of factory workers on an assembly line'. Assembly-line work is repetitive and done without thought, so the comparison makes the children seem like machines rather than playful, imaginative young people.",
      not: {
        'It shows children are productive':
          "They produce nothing: the writer says they are 'consuming'. The comparison is about repetition, not useful work.",
        'It is a compliment to their focus':
          "'Mechanical' is critical. The comparison suggests mindless repetition, not admirable concentration.",
        'It suggests they will get good jobs':
          'The comparison is not about the future. It criticises how the children use screens now.',
      },
      more: "The image is unsettling: childhood should be free and creative, but the writer pictures children as workers repeating the same motion. 'Mechanical' strips away their humanity.",
      tip: "Explain the connotations of the comparison: 'The image of factory workers suggests repetitive, joyless labour, implying that screens have turned children into machines.'",
    },
  "Screen Time: What is the writer's attitude towards parents?": {
    why: "The writer blames adults, parents included: 'We are raising' these children, we would not hand a toddler a hammer 'and walk away', and the real question is whether 'we have the courage to set boundaries'. This suggests parents are not doing enough.",
    not: {
      Admiration:
        'Nothing praises parents. The writer questions whether they have the courage to set limits.',
      Neutral:
        "The tone is not neutral: emotive words such as 'haunting' and the challenge about courage show a strong, critical view.",
      'Supportive and encouraging':
        'The writer challenges adults rather than reassuring them, suggesting they are failing their children.',
    },
    more: "Using 'we' includes the writer among the people being criticised, which softens the blame and makes readers more willing to accept it. It also presents the problem as one the whole of society shares.",
    tip: "To work out a writer's attitude, look at who is blamed and at emotive word choices. Name the attitude in one word, such as 'critical', and support it with a quotation.",
  },
  'Screen Time: How effectively does the writer use rhetorical devices to persuade?': {
    why: "The writer uses emotive imagery ('small faces illuminated by the blue glow'), an analogy (the hammer and the toddler), the rule of three ('any restaurant, any waiting room, any playground') and direct address ('you will see'). Together they make the argument vivid and hard to dismiss.",
    not: {
      'Poorly - the argument is weak':
        'The argument is built with care: it pictures the problem, answers an objection and ends on a memorable line. It is persuasive.',
      'The passage does not try to persuade':
        'It is a persuasive article: it aims to change how readers think about children and screens.',
      'Only through statistics':
        'There are no statistics. The writer persuades through imagery, analogy and emotional appeal.',
    },
    more: "The ending is a balanced contrast: an hour 'watching someone else's life' is an hour 'not spent living your own'. Ending on direct address leaves readers thinking about their own lives.",
    tip: 'For evaluation, do not just list devices. Choose the two strongest, quote each one and explain how it would affect a reader.',
  },
  'The Garden: What does the personification of the pond as "a dark eye refusing to blink" suggest?':
    {
      why: "The frozen pond is 'a dark eye refusing to blink'. An eye that never blinks seems to stare, so the pond appears to watch the garden. 'Refusing' gives it a will of its own, which makes it seem alive and slightly unsettling.",
      not: {
        'The pond is clean':
          "The image says nothing about cleanliness. It is about the pond's stillness and its staring, watchful look.",
        'The pond is very deep':
          'Dark water can look deep, but the point of the image is the eye that will not blink: watchfulness and stillness.',
        'There are fish in the pond':
          "No fish are mentioned. The pond has 'sealed itself shut' under the frost.",
      },
      more: "'Sealed itself shut' and 'refusing' both suggest the pond is choosing to close itself off, as if the garden is guarding itself through the winter. Personification makes the frozen garden feel alert rather than dead.",
      tip: "Focus on the verb: 'refusing' gives the pond a will, so the garden seems alive and watchful. Zooming in on one word lets you explain its effect precisely.",
    },
  'The Garden: How does the writer present the robin?': {
    why: "In a frozen, grey garden where 'Nothing moved', the robin hops from post to post. The writer calls it 'that small defiance of colour against the grey', so it stands out as a sign of life carrying on through the winter.",
    not: {
      'As a threat to the garden':
        "The robin is lively and cheerful, not dangerous. Its 'defiance' is against the grey winter, not the garden.",
      'As a nuisance':
        'Nothing suggests it is annoying. The writer admires it as the one bright, moving thing in the scene.',
      'As part of the frost':
        'The robin contrasts with the frost: it is colourful and moving, while nothing else in the garden moves.',
    },
    more: "'Defiance' suggests courage, as if the robin is standing up to winter. The comparison to 'conducting an orchestra only it could hear' adds playfulness and joy.",
    tip: "When asked how a writer presents something, give an adjective and a quotation: the robin is presented as defiant, 'that small defiance of colour against the grey'.",
  },
  'The Garden: Why does the writer shift to spring at the end?': {
    why: "Near the end the writer looks ahead: 'In spring, this place would riot with colour.' Then: 'But now it waited.' Setting the future riot of colour against the present stillness shows that winter is a pause, not an end: life will return as the seasons turn.",
    not: {
      'To change the topic':
        'The topic stays the same: this garden. The writer compares its two seasons to make a point about patience.',
      'Because they prefer summer':
        "Summer is never mentioned, and the writer clearly values the winter garden's patience.",
      'To introduce new characters': 'No new characters appear. The shift is in time, not people.',
    },
    more: "'Riot' suggests noisy, wild energy, the opposite of the quiet frost. The short sentence 'But now it waited.' brings us back to winter and prepares for the closing reflection on patience.",
    tip: "In a structure answer, name the shift and its purpose: 'The writer shifts in time to spring to contrast its colour with the winter stillness, suggesting renewal is coming.'",
  },
  'The Garden: What broader message does the final sentence convey?': {
    why: "The final sentence calls the garden's winter patience 'a lesson most humans never learn': 'stillness is not emptiness'. The garden looks dead but is waiting to bloom. The message is that quiet, patient times have value, even when nothing seems to be happening.",
    not: {
      'Gardens are better than people':
        'The writer suggests people can learn from the garden, not that gardens are better than people. The point is about patience.',
      'That winter is the best season':
        'The writer does not rank the seasons. Winter is used to show that stillness can be meaningful.',
      'That people should garden more':
        'Gardening is not the lesson. The garden is an example that teaches something about patience and quiet.',
    },
    more: 'The ending moves from describing one scene to a general truth about people. This shift from the particular to a wider message is common in reflective writing, and it gives the description a purpose.',
    tip: 'In your own descriptive writing, try ending with a short reflection that links the scene to a wider idea about life. It leaves the reader with something to think about.',
  },
  'The Garden: How effectively does the writer use extended metaphor throughout the passage?': {
    why: "The garden is treated as a living being throughout: it 'slept beneath a quilt of frost', the pond refuses to blink, the ivy has 'knuckles', and the garden 'waited' with patience. Because the image is sustained, the closing lesson about patience feels earned.",
    not: {
      'There are no metaphors':
        "There are many: frost as a 'quilt', grass as needles, the pond as an eye and the ivy's 'knuckles of green'.",
      'Somewhat - but the metaphors are confusing':
        'The images are clear, and they all build one idea: the garden as a living, waiting being.',
      'Poorly - the metaphors are mixed':
        'A mixed metaphor clashes within a single image. Here each image is separate, and together they keep up one idea: the garden is alive.',
    },
    more: 'An extended metaphor carries one comparison through a whole text. Here it lets the writer end with a lesson for people: if the garden is a patient being, humans can learn from it.',
    tip: "To evaluate an extended metaphor, trace it from start to end with two or three quotations and explain how it builds towards the writer's message.",
  },
  'The Interview: How does Priya really feel about the interview?': {
    why: "Her reflection looks 'composed, professional', but 'inside' her stomach is 'a washing machine on spin cycle'. She has smoothed her blazer 'for the fourth time', a nervous habit. She looks calm but feels anxious.",
    not: {
      'Confident and relaxed':
        'She only looks it. Her churning stomach and her repeated smoothing of her blazer show nerves.',
      'Angry and resentful':
        'Nothing suggests anger. She doubts her rehearsed answers, but that is self-doubt, not resentment.',
      'Bored and uninterested':
        'She cares a great deal: she has rehearsed her answers and prepared her appearance carefully.',
    },
    more: "'But inside' is the turning point between how she looks and how she feels. A contrast between a character's appearance and their feelings is a common way to build sympathy.",
    tip: "In inference answers, look for small repeated actions: smoothing a blazer 'for the fourth time' shows nerves without the writer saying so.",
  },
  'The Interview: What effect does the metaphor "stomach was a washing machine on spin cycle" create?':
    {
      why: "A washing machine on spin cycle churns fast and cannot be stopped. Saying her stomach 'was' one makes us feel the physical, out-of-control sensation of nerves. Because almost everyone knows the image, readers recognise the feeling at once.",
      not: {
        'It shows she is hungry':
          "Hunger is never mentioned. Her stomach churns because of nerves, and the metaphor follows 'But inside', the contrast with her calm appearance.",
        'It suggests she does laundry often':
          'The washing machine is a metaphor, not a fact about her life. It describes a feeling.',
        'It shows she is ill':
          'Nothing suggests illness. The feeling comes as she faces the interview, so it is caused by nerves.',
      },
      more: "The everyday, domestic image contrasts with the grand building of 'marble floors', reminding us that Priya is an ordinary person in an intimidating place.",
      tip: "Explain what a metaphor shows and why it works on readers: 'The everyday image makes her anxiety instantly recognisable, so we sympathise with her.'",
    },
  "The Interview: How does the writer create contrast between Priya's external appearance and internal state?":
    {
      why: "The writer puts her calm reflection, 'composed, professional', right next to 'But inside' and the churning stomach, then adds her doubts about her rehearsed answers: 'Who actually said things like that?' Placing the two side by side makes the gap between outside and inside clear.",
      not: {
        'Through dialogue only':
          'There is little dialogue. The contrast comes mostly from her reflection and her inner thoughts.',
        'There is no contrast':
          'The contrast is central: she looks composed while her stomach churns.',
        'Through flashbacks':
          'There is no flashback scene. Apart from a brief mention that she had rehearsed her answers, the passage follows Priya moment by moment, from the lift to the handshake.',
      },
      more: 'The reflection in the lift doors is a useful device: it shows how others see her, while the narration shows what she feels. Juxtaposition means placing two things side by side to highlight their differences.',
      tip: "Name the method and its effect: 'The writer juxtaposes Priya's composed reflection with her inner panic, so the reader sees the effort it takes to appear confident.'",
    },
  'The Interview: Why is "Her palm was dry" described as "a small victory"?': {
    why: "Sweaty palms are a common sign of nerves. Because her palm is dry, the handshake does not give her away, so her anxiety stays hidden. It is 'a small victory' because it is one thing that went right in a stressful moment.",
    not: {
      'Because she dislikes water':
        "Water is not the point. 'Dry' matters because sweaty hands would show her nerves.",
      'Because the office is hot':
        'Heat is never mentioned. The dryness matters because of her nerves, not the temperature.',
      'Because she washed her hands':
        'Washing is never mentioned. A dry palm matters because it shows she has kept her nerves hidden.',
    },
    more: "Ending on 'a small victory' gives the passage a gently hopeful close: after all her worry, Priya succeeds at something, however small, and the reader is left on her side.",
    tip: "When a question quotes a phrase, explain why the writer chose those exact words: 'victory' makes a handshake feel like winning a battle, showing how much the interview means to her.",
  },
  'The Interview: How effectively does the writer make Priya a relatable character?': {
    why: "Most readers know what it is like to look calm while feeling nervous. Priya's rehearsed answers, repeated checks of her appearance and relief at a dry palm are ordinary, honest details, so readers recognise themselves in her.",
    not: {
      'Not at all - she is too confident':
        'She is not confident inside. Her nerves and self-doubt are what make her relatable.',
      'Somewhat - but we learn nothing about her':
        'We learn a lot: her nerves, her preparation, her doubts about stock answers and her relief. These details build a believable character.',
      'Poorly - the passage is too short':
        'A short passage can still create a vivid character. Precise details matter more than length.',
    },
    more: "Her wry question, 'Who actually said things like that?', adds humour and honesty, which makes her likeable. Readers warm to characters who see through the act they are putting on.",
    tip: 'In an evaluation answer, say how the writer makes readers feel about a character, and quote a detail that does it, such as her wry question about rehearsed answers.',
  },
}
