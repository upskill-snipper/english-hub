import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Comprehension Challenge: the explanation a student sees after each answer, by
 * question key (src/data/games/banks/comprehension-challenge.ts). Written with AI
 * on 16 October 2026 and checked against each question and its options, as the
 * founder decided (src/lib/games/explanations/types.ts).
 *
 * Rebuilt for depth on 24 October 2026: thirty passages, eleven of them
 * copied word for word from public-domain texts in src/data/full-texts/, and
 * 150 questions in place of six passages and 30 questions; every explanation
 * was written or rewritten for its question's new options, and each passage's
 * five were read as a set so that none states another's answer. Written with AI
 * and checked against each question, as the founder decided
 * (src/lib/games/explanations/types.ts).
 *
 * Checked on 24 October 2026 by a second reader. Twenty-four entries changed
 * with the bank's fixes (its docblock lists them): two re-keyed for reworded
 * prompts, and a `not` rewritten or re-keyed for each replaced or shortened
 * option. Five said what the passage does not: the cylinder's lid being
 * screwed out (not in the extract), the ticket clerk looking only at the sky
 * (he looks at the writer too), Leo's mum as Grandad's daughter (the passage
 * never says), "each paragraph begins with a time marker" (the first begins
 * with the market's name) and the neighbours' "amused" pity (the passage says
 * gentle pity). Another called the night crossing a storm; it is a rough sea.
 */
export const EXPLANATIONS: GameExplanations = {
  "The Storm: What can we infer about Eleanor's state of mind?": {
    why: "The passage tracks her fear rising. On the first evening she 'had tried to be sensible', making lists and reasoning with herself. Three days in, every creak 'made her heart stammer', and even her own laugh sounds strange to her. The word 'tried' hints that being sensible is no longer working.",
    not: {
      'She is calm, because she knows that old houses creak':
        "She does tell herself it is 'only the wind', but her heart stammers at every creak. Telling yourself to be calm is a sign that you are not.",
      'She is bored, with nothing to do but sort books':
        'Sorting books is why she came, but boredom does not fit someone whose heart stammers at every sound. Her mind is on the noises, not the chores.',
      'She is grieving quietly for her great-aunt':
        'Nothing shows grief. She plans to burn the letters unread and give the books away; what fills her thoughts is the house and its sounds.',
    },
    more: 'The writer never says that Eleanor is afraid. Physical reactions and small actions let the reader work it out, which is how Gothic writing builds dread: the reader senses the fear alongside the character instead of being told about it.',
    tip: "Name the feeling, quote a short phrase, then explain what it implies. For example, in 'his hands would not stay still', the restless hands suggest nerves he cannot control.",
  },
  'The Storm: What effect does the simile "like a thousand tiny fists" create?': {
    why: "Fists belong to people, so the simile gives the rain a body and a purpose: it seems to be beating on the glass to get in. 'Lash' adds force, and 'a thousand' makes the attackers countless, as if the house were under siege.",
    not: {
      'It makes the rain sound soft and light, like tapping':
        "'Tiny' might sound gentle, but fists that 'lash' against the glass are violent. The size of each fist matters less than how many there are and how hard they strike.",
      'It suggests that the window glass is about to shatter':
        'Nothing breaks. The simile describes the rain, not the glass, and its point is how fiercely the rain seems to attack.',
      'It shows that Eleanor wants to strike out at the storm':
        'The fists belong to the rain, not to Eleanor. She presses her face to the window and watches; she does not fight.',
    },
    more: 'Gothic settings often seem hostile, as if the weather itself wants to reach the main character. Giving the rain fists makes the storm an attacker and the house a place under threat.',
    tip: "Zoom in on one word and its connotations. In 'the wind clawed at the shutters', 'clawed' turns the wind into an animal with a will of its own. Then say what that does to the mood.",
  },
  'The Storm: What is the effect of the clause "She had been alone in this house for three days now"?':
    {
      why: "Among vivid descriptions of thunder and lashing rain, this clause is plain and factual. Stating the time, 'three days', so simply makes it stark: it stresses how long she has been cut off, without comment, and leaves the reader to feel the weight of it.",
      not: {
        'It shows she has lost count of the days and is confused':
          "'Three days now' is exact. She knows precisely how long she has been alone; the problem is the length of time, not confusion about it.",
        'It hints that she chose to be alone and is enjoying it':
          "She 'had meant to stay for one night only'. The flood keeps her there, and nothing she feels about it is enjoyment.",
        'It begins a flashback to the day she first arrived':
          "It sums up her situation as it is 'now'. 'Had been' looks back over the three days to this moment; it does not take us back to her arrival.",
      },
      more: "A plain sentence placed among rich description stands out by contrast. Here it moves the focus from the storm to Eleanor herself, and 'now' suggests the isolation is still going on.",
      tip: "When you write about a sentence, say what its form does to the reader: 'The flat, factual statement makes the reader pause on how long she has been alone.' Avoid simply calling it short or long.",
    },
  'The Storm: Why does the writer save the detail about footsteps until the end?': {
    why: "Everything before it can be explained: thunder, rain, creaking boards, wind. The footsteps cannot. They sound 'too deliberate, too measured' for weather, which suggests a person. Saving them for the last sentence turns the passage from a storm into a possible intruder, and leaves the reader in suspense.",
    not: {
      'To reveal that all the noises were only the wind after all':
        "It does the opposite. She tells herself 'only the wind', and the footsteps then prove that comfort false.",
      'To show that Eleanor finally falls asleep at midnight':
        'Midnight is when she hears the footsteps, not when she sleeps. Nothing suggests she rests at all.',
      'To explain at last why the telephone line went dead':
        'The line went down with the flood on the first night. The footsteps explain nothing; they leave a new question open.',
    },
    more: 'Ending on the most disturbing detail is a structural choice called a cliffhanger. The reader is left with a question, whose footsteps, that the passage refuses to answer.',
    tip: "In a structure answer, name where the detail comes and what it changes: 'By holding back the footsteps until the final sentence, the writer shifts the threat from the weather to a person.'",
  },
  'The Storm: Which judgement about the objects in the house does the passage best support?': {
    why: "Ordinary objects are given a sinister life. The clock 'ticked as though it were counting something down', as if time were running out, and the portrait's eyes 'seemed to follow her up the stairs'. Even indoors, Eleanor is watched and timed.",
    not: {
      'The candle and the window make the house feel like a safe refuge':
        "The candle only flickers and throws 'dancing shadows', and the window shows rain lashing like fists. Neither makes the house feel safe.",
      'The books and china show how much Eleanor treasured her great-aunt':
        'The books are for the charity shop and the china for her mother. They are jobs on a list, not signs of love.',
      'The wallpaper and letters show how lovingly the house has been kept':
        'The wallpaper is peeling, and the letters are to be burned unread. The house is neglected, not cherished.',
    },
    more: 'Gothic writers often make the familiar strange: a portrait, a clock or a door behaves as if it had a will of its own. This unsettles the reader, because the threat seems to come from the house itself.',
    tip: 'For an evaluation question, give a clear judgement, then two precise details that support it. Explain how each detail affects the reader, rather than listing them.',
  },
  'The Market: What can we infer about the chefs from their description?': {
    why: "The chefs move 'with purpose' and examine the produce 'with the concentration of surgeons'. A surgeon's concentration suggests precision and expertise, so these are professionals who know exactly what good produce should be like and check each item before they buy it.",
    not: {
      'They are rushing, so they grab whatever is nearest':
        "'Moving with purpose' means focused, not hurried. Someone grabbing the nearest item would not examine it with a surgeon's concentration.",
      'They are new to the market and unsure what to buy':
        'Their purposeful movement suggests they know exactly where they are going and what they want. Nothing suggests doubt.',
      'They are bored, and shop only because they have to':
        'Bored shoppers do not concentrate like surgeons. The comparison shows how seriously they take the job.',
    },
    more: 'Comparing the chefs to surgeons raises the status of their work: choosing ingredients becomes as precise and serious as an operation. Writers often borrow a comparison from a high-status job to make an ordinary task seem skilled.',
    tip: "Infer from verbs and comparisons, then say what they suggest. For example, a baker who 'cradled the loaf like a newborn' is careful and proud of her work.",
  },
  'The Market: Why does the writer describe the market as "a symphony"?': {
    why: "A symphony is a long piece of music in which many instruments play together, each with its own part. Calling the market 'a symphony of preparation' suggests that all its workers and noises fit together in harmony, as if every action had been rehearsed.",
    not: {
      'Because a band plays live music among the stalls':
        "The only music is a radio, 'half-drowned' by other noise. 'Symphony' is a metaphor for the market's activity, not real music.",
      'To show that the market is too loud to think in':
        'A symphony is about parts working together, not volume. The metaphor stresses order and harmony rather than noise.',
      'To suggest that the market is noisy and disorganised':
        'A symphony is carefully organised, the opposite of chaos. The writer presents the busy setting-up as coordinated, not disorderly.',
    },
    more: "An opening metaphor can shape how the rest is read. After 'symphony', the stallholders, the fishmonger and the clatter of shutters all seem like players taking their parts in one performance.",
    tip: "Explore the connotations of the key word: 'symphony' suggests harmony, skill and rehearsal. In your own writing, choose one image for a whole scene and let later details echo it.",
  },
  'The Market: What effect does the metaphor "each mackerel a small mirror" create?': {
    why: "Each fish is called 'a small mirror' because its skin reflects 'the strip lights above'. The image helps the reader see how the silver fish gleam, and that shine suggests they are fresh, like the crates of produce that 'gleam with morning dew'.",
    not: {
      'It suggests that the fish are still alive and moving':
        'A mirror reflects light; it does not move or breathe. The image is about how the fish shine, not about life.',
      'It shows that the fish are too expensive to buy':
        'Price is never mentioned. The image describes how the fish look under the lights.',
      'It shows that the lighting in the market is poor':
        'The fish reflect the strip lights, so the market is lit. The point is how brightly the fish shine.',
    },
    more: "Light runs through the opening: the 'blue half-light', the 'silver catch', the gleaming crates. Together these images make the market feel fresh and new at the start of the day.",
    tip: "Comment on what an image makes the reader see and what that suggests: 'The mirror metaphor makes the mackerel shine, suggesting freshness and care in how they are laid out.'",
  },
  'The Market: How does the writer organise this passage?': {
    why: "The passage follows time. It opens 'at dawn', then moves 'By seven' to the chefs, 'By ten' to the visitors and 'By evening' to the empty, hosed-down floor. Each paragraph is set at a later time of day, so the reader watches one whole day pass.",
    not: {
      'By place, moving from one stall to the next in turn':
        'Several stalls appear, but what moves the passage on is the clock, not a route round the market. Each paragraph is set at a new time of day.',
      'Around the fishmonger, from his first job to his last':
        'The fishmonger frames the passage, laying out fish at dawn and hosing trays at the end, but most of it is about other people.',
      'By comparing two markets in different parts of town':
        'Only one market, Borough Market, is described, at different times of day.',
    },
    more: "Time markers such as 'By seven' and 'By ten' guide the reader through a text and show how a place changes. Here the market fills, peaks and empties, like the tide the writer describes at the end.",
    tip: "In a structure answer, track the time markers and say how the focus shifts: 'The writer moves from dawn to evening, shifting the focus from the workers to the visitors and back.'",
  },
  'The Market: How does the writer appeal to the senses throughout the passage?': {
    why: "Every sense except taste is used directly. We see the 'silver catch' and phones 'held up like lanterns'; hear the radio and the 'clatter of metal shutters'; smell 'fresh bread, roasting coffee'; and feel the 'cold air'. Together they place the reader inside the market.",
    not: {
      'Mostly through taste, as visitors sample food at stalls':
        'People are offered a sliver of cheese, but no taste is ever described. The food is seen, smelled and handled far more than eaten.',
      'Only through sight, as the writer watches from afar':
        'There is plenty to see, but also sounds (the radio, the train) and smells (bread, coffee, crushed herbs).',
      'Mostly through sound, since the market is like music':
        "'Symphony' is one image among many. Sounds matter, but sight and smell fill just as much of the passage.",
    },
    more: "Using several senses makes description immersive: the reader can almost hear, smell and feel the scene. Smell often carries warmth and appetite; here it also closes the day, with 'crushed herbs and wet cardboard'.",
    tip: "In your own descriptive writing, use at least three senses and make each detail precise: not 'a nice smell' but 'the smell of roasting coffee'.",
  },
  'The Letter: When and where is this passage set?': {
    why: "The clues point to wartime: 'the regiment', 'the field hospital', 'the wounded', and cloth for uniforms counted as 'war work'. The 'mill', the 'loom' and the 'factory whistle' place Thomas in a town where cloth is woven.",
    not: {
      'During a war, in a farming village with no factories':
        'Thomas works at a loom in a mill, and a factory whistle calls him back. This is an industrial town, not a farming village.',
      'Some years after a war, once the soldiers are home':
        "The war is still going on: the regiment has 'moved north', and Mary will not leave the wounded. Nobody has come home.",
      'During a war, in a port town where warships are built':
        'There is a factory, but it makes cloth: Thomas works at a loom, and the mill weaves cloth for uniforms. Nothing mentions ships or the sea.',
    },
    more: "Writers often set the time and place through small details rather than dates. A reader builds the setting from clues, here the vocabulary of war ('regiment', 'wounded') and of the textile mill ('loom', 'whistle').",
    tip: 'When asked about setting, quote two or three clues and say what each tells you. One clue is a guess; three that agree make an inference.',
  },
  'The Letter: What does "braver than him" suggest about Thomas\'s view of himself?': {
    why: "Thomas measures himself against Mary and finds himself lacking: she climbed the bridge, faced the dog and told the truth, and now nurses the wounded. He repeats the manager's excuse that cloth is 'war work too', but 'the manager said' keeps it at arm's length, as if he does not quite believe it.",
    not: {
      'He believes that his work at the mill is quite as brave as hers':
        "That is the manager's claim, not his. 'The manager said' puts distance between Thomas and the excuse, and 'braver than him' shows he does not believe it.",
      'He resents her for always making him look weak and small':
        "Nothing shows resentment. He 'understood' her choice, and his memories of her bravery are fond, not bitter.",
      'He thinks she is reckless and really ought to come home':
        'He respects her decision to stay with the wounded. His ache is sadness at her absence, not disapproval of her courage.',
    },
    more: "A comparison with a brother or sister is a quick way to reveal how a character sees himself. Here the list of Mary's brave acts, each beginning 'Mary who', builds the contrast until his own safety at the loom feels small.",
    tip: "Infer from what a character says and what he leaves unsaid. 'The manager said' is a small phrase, but it suggests Thomas does not own the excuse he repeats.",
  },
  'The Letter: What does the metaphor "each one a small monument to absence" suggest?': {
    why: "A monument is built to remember someone who has gone, often someone who has died. Calling each letter 'a small monument to absence' suggests that every one marks Mary being away, and hints at Thomas's fear that she may never come back.",
    not: {
      'The letters are a comfort, keeping Mary close to him at home':
        "The metaphor stresses 'absence', not closeness. A monument marks what has been lost, so the letters remind him she is gone.",
      'The letters record each of the places Mary has been':
        "The metaphor is about what the letters mean to Thomas, not about their contents. 'Absence' is the key word.",
      'The letters describe a war memorial that Mary has seen':
        'This reads the metaphor literally. The letters do not describe a monument; the writer compares them to one.',
    },
    more: "'Small' matters too: each letter is a little memorial, and they are piling up in the tin box. The image suggests a growing collection of absences, one for every time she has not come home.",
    tip: 'Unpick a metaphor in two steps: what is the thing compared to, and what does that thing usually mean? A monument means remembrance, so the letters become reminders of loss.',
  },
  'The Letter: Why does the writer end with the factory whistle?': {
    why: "The whistle breaks into the quiet moment with the letter. It is 'summoning him back', so he has no time to sit with the news, and the noise of the looms is 'almost loud enough to drown out thought'. Work offers an escape, but only partly.",
    not: {
      'To show that Thomas is late for work and will be punished':
        'The whistle summons the workers; nothing suggests he is late or in trouble. Its point is the interruption, not punishment.',
      'To show that the war has ended and the mill can rest':
        'The war goes on, and the whistle calls him back to work. The mill is busy, not resting.',
      'To show that hard work will cure his sadness completely':
        "The noise is only 'almost loud enough to drown out thought'. 'Almost' tells us the sadness stays.",
    },
    more: "Ending on an outside sound pulls a story from a character's inner world back to the world around him. The contrast between a still moment and the demands of work makes the loss feel heavier.",
    tip: "Small words matter in endings. Here 'almost' changes the meaning: quote it, and explain that the noise cannot quite silence his thoughts.",
  },
  'The Letter: Which judgement about Thomas does the passage best support?': {
    why: "Thomas never speaks his feelings. He folds the letter 'carefully, pressing the creases with his thumbnail until the paper was a perfect square', then puts it in the tin box with the others. These careful, ordered actions suggest a way of holding himself together when he cannot change the news.",
    not: {
      'He is angry with Mary and cannot forgive the choice she made':
        "'Thomas understood this.' He respects her choice; what hurts is her absence, not anything she has done.",
      'He shares his sorrow openly with his mother as soon as he can':
        'His mother has gone out so that she will not have to watch him read it, and he faces the letter alone.',
      'He is relieved that Mary will be safer now that she is in the north':
        "Moving north means following the regiment with the field hospital. Nothing suggests safety, and his reaction is a 'hollow ache', not relief.",
    },
    more: 'Characters often reveal feeling through what they do rather than what they say. A small action done with great care, like folding a letter into a perfect square, can show a feeling being kept under control.',
    tip: 'In an evaluation answer, support a judgement about a character with actions as well as words. Two precise actions, explained, are stronger than a general statement about feelings.',
  },
  'Screen Time: Why did the boy on the train cry, according to the writer?': {
    why: "The writer says the boy cried 'not because the journey had ended but because the battery had'. The sentence sets up the expected reason and then swaps it for the real one, which makes the point sharply: the screen mattered more to him than the trip.",
    not: {
      'Because the journey to the coast was over':
        "That is the reason the writer rules out: 'not because the journey had ended'. Read to the end of the sentence before choosing.",
      'Because his parents took the tablet away':
        'Nobody takes the tablet away. He watched it for two hours, until the battery ran out.',
      'Because he had missed his first sight of the sea':
        "He did miss the sea, but he did not notice or care. 'He saw none of it' is the writer's complaint, not his.",
    },
    more: "'Not because X but because Y' is a pattern persuasive writers use to correct an expected idea. The surprise at the end of the sentence makes the point memorable.",
    tip: "In a retrieval question, the trap is often a detail the text mentions and then rejects. Check the whole sentence, especially words such as 'not', 'but' and 'only'.",
  },
  'Screen Time: What effect does the rule of three "not playing... not imagining... consuming" create?':
    {
      why: "The first two short sentences say what the children are not doing, playing and imagining, both active and creative. The third replaces them with 'consuming', and the list after it, 'endlessly, passively, silently', drives the criticism home. The pattern makes the last item land hardest.",
      not: {
        'It lists three hobbies the children enjoy on their tablets':
          'Two of the three are things the children are not doing. The pattern contrasts lost activities with passive consumption.',
        'It gives a fair, balanced view of how children use screens':
          'The writer is building criticism, not balance. Each sentence pushes the same point harder.',
        'It slows the pace to show that the children are calm':
          "The sentences are short, but their effect is emphatic, not calm. 'Passively, silently' are criticisms.",
      },
      more: "The rule of three gives rhythm, and its last item carries the most weight. Putting the writer's key accusation third makes it feel like the conclusion of an argument.",
      tip: "When you analyse a list, say which item comes last and why. For example, 'cold, tired and alone' ends on the loneliness, so that is what the reader feels most.",
    },
  'Screen Time: What is the effect of comparing children to "factory workers on an assembly line"?':
    {
      why: "Work on an assembly line is repetitive and done to someone else's rhythm. Comparing the children to such workers drains the joy from what should be play: their scrolling becomes mechanical, dull and endless, as if the tablet were running them.",
      not: {
        'It praises the children for being hard-working and focused':
          'The writer is criticising, not praising. The comparison stresses mindless repetition, not hard work.',
        'It suggests that the children will grow up to work in factories':
          'This reads the comparison literally. It describes how they scroll now, not what jobs they will do.',
        'It shows that the children are working together as a team':
          'Each child is alone with a tablet. The comparison is about mechanical rhythm, not teamwork.',
      },
      more: 'Comparing children to machines strips away what makes them children. Persuasive writers use such images to make readers uncomfortable enough to act.',
      tip: 'Name the comparison, then explain which qualities transfer: here repetition, monotony and lack of choice move from the factory to the child.',
    },
  'Screen Time: Why does the writer use the counter-argument "Some will argue that technology is a tool"?':
    {
      why: "The writer grants the opposing view a point, 'that is true', and even adds examples of screens helping. Then the hammer analogy shows why a useful tool still needs limits. Dealing with the objection before readers raise it makes the argument seem fair and harder to dismiss.",
      not: {
        'To show that the writer has changed their mind about screens':
          "The writer's view stays the same. The concession is followed straight away by 'A hammer is also a tool', which turns it back to the argument.",
        'To end the article on a fair, balanced and open note':
          'The counter-argument comes in the middle, and the article ends with direct instructions and a strong final line, not balance.',
        'To prove with evidence that screens help children learn':
          'The writer admits screens can help a struggling reader, but only to show that the point is not enough. It is a concession, not the argument.',
      },
      more: 'This technique is called concession and rebuttal: admit what is true in the other side, then explain why your view still holds. It builds trust with a reader who disagrees.',
      tip: "In your own persuasive writing, try 'Some will argue that... This is true, but...' and make your rebuttal concrete, as the hammer analogy does here.",
    },
  "Screen Time: What is the writer's attitude towards parents?": {
    why: "The writer does not attack parents: 'His parents looked exhausted, and I do not blame them. I have been that parent myself.' But the article still tells them firmly what to do, 'So set them', and not to give in: 'Do not.' The tone is sympathetic but demanding.",
    not: {
      'Admiring, because they keep their children quiet and safe':
        'The writer understands why parents hand over screens, but does not admire it. The whole article argues for firmer limits.',
      "Scornful, blaming them alone for every child's screen habit":
        "The writer admits 'I have been that parent myself'. That is sympathy, not scorn, even though the advice is firm.",
      'Sympathetic to parents, yet sure that limits will not work':
        "The sympathy is real, but the writer is sure that limits will work and must be kept: 'So set them', and when children complain, 'Do not' give in.",
    },
    more: "Admitting your own faults is a way of winning over a reader you want to change. 'I have been that parent myself' makes the advice sound as if it comes from a friend, not a judge.",
    tip: "Viewpoint questions often have a two-part answer. Look for where the writer softens the criticism and where they harden it, and describe both: 'sympathetic, but firm'.",
  },
  'The Garden: What broader message does the final sentence convey?': {
    why: "The final sentence says outright that 'stillness is not emptiness, and silence is not the same as having nothing to say'. The frozen garden looks lifeless, yet the writer suggests that quiet things, and quiet people, can be full of meaning.",
    not: {
      'That people should spend more of their time gardening':
        'The garden is the example, not the subject of the lesson. The message is about stillness and silence, which applies to people too.',
      'That winter is a far better season than spring or summer':
        "The writer values winter's patience but does not rank the seasons. Spring is described with delight: it will 'riot with colour'.",
      'That most people talk too much and should stay silent':
        'The sentence defends silence; it does not tell people to stop talking. Its point is that quiet is not the same as empty.',
    },
    more: 'Descriptive writing often moves from close detail to a wider reflection at the end. Here the frozen garden becomes a way of thinking about patience, which gives the description a purpose beyond itself.',
    tip: "When you explain a writer's message, put it in your own words and then link it to the details that prepare for it, such as the still pond and the sleeping lawn.",
  },
  'The Garden: What does the personification of the pond as "a dark eye refusing to blink" suggest?':
    {
      why: "An eye that refuses to blink seems alive and staring. The frozen pond becomes something watchful and wilful, as if the garden were keeping an eye on the narrator. 'Dark' adds a faint unease to an otherwise peaceful scene.",
      not: {
        'The pond is deep, and its water has been dirty for years':
          "'Dark' describes how the ice and water look in winter light. The image is about watching and stillness, not depth or dirt.",
        'The pond is stubborn because it is angry with the narrator':
          "'Refusing' gives the pond a will, but nothing suggests anger. The point is its fixed, unblinking stillness.",
        'There are fish under the ice, watching the narrator pass':
          "The 'eye' is the pond itself, sealed with ice. It is a metaphor, not a description of creatures underneath.",
      },
      more: 'Personification gives human features to things that are not human. Here it makes the garden seem aware of its visitor, which turns a quiet scene slightly uncanny.',
      tip: "Explain what the human quality adds. 'Refusing to blink' suggests determination and attention, so say what that does to the mood of the scene.",
    },
  'The Garden: How does the writer present the robin?': {
    why: "Everything else is frozen still, but the robin hops 'from post to post' and is 'the only thing in the whole garden that seemed to be in a hurry'. Called 'that small defiance of colour against the grey', it stands out as a spark of life.",
    not: {
      'As a timid bird that hides whenever the narrator comes near':
        "It follows the narrator 'at a polite distance', curious rather than afraid, hoping for a worm.",
      'As part of the frozen scene, as motionless as the pond':
        "'Nothing moved except the robin.' It is the one moving thing, which is why it stands out.",
      'As a threat, guarding the garden against all visitors':
        'It follows the narrator, but out of curiosity and the hope of food. Nothing about it is threatening.',
    },
    more: 'A single bright detail against a dull background draws the eye, in writing as in painting. The robin gives the reader a point of life and warmth in a cold, still scene.',
    tip: "When asked how a writer presents something, give an adjective and the evidence: 'The robin is presented as lively, the only thing in the whole garden that seemed to be in a hurry.'",
  },
  'The Garden: Why does the writer shift to spring at the end?': {
    why: "'In spring, this place would riot with colour' looks ahead to a future the frozen garden does not yet show. 'But now it waited' brings us back to winter. The contrast suggests that the stillness is a pause before life returns, not an ending.",
    not: {
      'To show that the narrator would rather it were spring':
        "The writer goes on to praise winter's patience. The shift is about what the garden is waiting for, not what the narrator prefers.",
      'To describe what the garden looked like last spring':
        "'Would riot' looks forward to the coming spring, not back. It imagines the future.",
      'To suggest that the winter has killed the garden for good':
        "The opposite: the garden will 'riot with colour' again. Winter is a pause, not an ending.",
    },
    more: 'Shifting in time, forward or back, is a structural choice that changes how we read the present. A glimpse of spring makes winter feel like waiting rather than death.',
    tip: "In a structure answer, name the shift and its effect: 'The writer shifts to spring to contrast the colour to come with the stillness now, suggesting renewal.'",
  },
  'The Garden: Which judgement about the narrator does the passage best support?': {
    why: "The narrator notices tiny details: footprints 'dark and exact', a 'single wrinkled apple' the birds missed, the robin's head 'on one side'. They even lift the disc of ice 'whole' from the bird bath and hold it 'up to the light', a small act of wonder.",
    not: {
      'They resent the cold and want to get back indoors soon':
        "The latch 'seemed to bite' their fingers, but they linger, admiring the ice and the robin. Nothing suggests hurry or resentment.",
      'They find the empty garden lonely and depressing':
        "They find the stillness full of meaning: 'stillness is not emptiness'. The tone is calm and appreciative, not gloomy.",
      'They are planning how to change the garden in spring':
        'They are looking after it for its owners, not redesigning it. Spring is mentioned only as what the garden is waiting for.',
    },
    more: 'Writers show character through what a narrator notices. Someone who sees the exact shape of footprints and holds ice up to the light is patient and observant.',
    tip: 'To support a judgement about a narrator, choose details of attention as well as feeling: what they look at closely tells you who they are.',
  },
  'The Interview: How does Priya really feel about the interview?': {
    why: "Her actions give her away: she has smoothed her blazer 'for the fourth time', and she has rehearsed her answers 'until they felt like someone else's words'. Repeating a small action and over-preparing both suggest anxiety, even though she works to look calm.",
    not: {
      'Calm inside, though she looks nervous to others':
        "It is the other way round: she works to look calm, but she has smoothed her blazer 'for the fourth time', and her rehearsed answers feel 'like someone else's words'.",
      'Excited, because she has prepared so thoroughly':
        "Her preparation has made her answers feel 'like someone else's words'. That is unease, not excitement.",
      'Bored, because she has heard these questions before':
        'She has rehearsed answers of her own; nothing suggests she has heard the questions before. Her repeated fidgeting is anxiety, not boredom.',
    },
    more: "Writers often show nerves through repeated actions rather than naming the feeling. 'For the fourth time' tells the reader she keeps checking, which is more convincing than 'she was nervous'.",
    tip: "Look for numbers and repetition in a character's actions: they often show a feeling. Quote the detail and explain what the repetition suggests.",
  },
  'The Interview: What effect does the metaphor "stomach was a washing machine on spin cycle" create?':
    {
      why: 'A washing machine on spin is loud, fast and out of control, and it churns whatever is inside it. The metaphor turns her anxiety into a physical sensation that keeps going whether she wants it to or not. It is an everyday image, so most readers recognise it at once.',
      not: {
        'It suggests that she is hungry and wants her lunch':
          'The churning stomach is nerves, not hunger. Nothing in the passage mentions food.',
        'It suggests a mild flutter of nerves that soon passes':
          'It is nerves, but not mild ones. A spin cycle is fast, loud and violent, and nothing in the image suggests a feeling that fades.',
        'It suggests she is ill and should not be there':
          'The churning is nerves before an interview. She carries on, steps out of the lift and shakes hands; she is not ill.',
      },
      more: 'Comparing a feeling to an everyday object makes an abstract emotion concrete. Readers cannot see anxiety, but they can picture a machine thrashing round on spin.',
      tip: "Explain both halves of a metaphor: what the object does, and what that tells you about the feeling. 'Spin cycle' suggests something fast that she cannot stop.",
    },
  "The Interview: How does the writer create contrast between Priya's external appearance and internal state?":
    {
      why: "The writer sets two views of Priya side by side. In the lift doors she sees a woman who looks 'composed, professional'. Then 'But inside' turns to her stomach. The single word 'But' marks the turn from what others see to what she feels.",
      not: {
        'Through a flashback to an earlier interview that went badly':
          'There is no flashback. The contrast happens in the present, in the lift, between her reflection and her stomach.',
        "Through the man's words, which show he can see her nerves":
          "The man says, 'We've been looking forward to meeting you.' He sees nothing of her nerves; that is the point.",
        'By describing the cold marble and concrete of the building':
          'The building sets the scene, but the contrast between outside and inside is in Priya herself: her reflection against her stomach.',
      },
      more: 'Juxtaposition places two contrasting things side by side so that each sharpens the other. A calm surface next to inner turmoil makes both more vivid.',
      tip: 'Name the turning word: \'The conjunction "But" shifts the focus from her composed appearance to the turmoil inside, showing the gap between them.\'',
    },
  'The Interview: Why is "Her palm was dry" described as "a small victory"?': {
    why: "'At least' matters: it suggests that other things are not going so well, but this one sign of nerves is not showing. 'Small' keeps it modest. A damp palm would have given her away in the handshake; a dry one lets her keep up the appearance of calm, for now.",
    not: {
      'Her nerves have now gone away completely and for good':
        "'At least' suggests only this one thing has gone right. Her nerves have not vanished; one sign of them has stayed hidden.",
      'She has already won the job with her handshake':
        "The interview has not even started. The 'victory' is personal and tiny, not the job.",
      'The man has praised her for her firm handshake':
        'The man says nothing about her handshake. The victory is in her own head.',
    },
    more: "Small, wry phrases like 'at least' let a character's own voice into the narration. Here they suggest Priya's humour and how hard she is working to stay in control.",
    tip: "Read the little words in a quotation. 'At least' and 'small' change the meaning of 'victory', so quote and explain them, not just the big word.",
  },
  'The Interview: Which judgement about Priya does the passage best support?': {
    why: "Several details show she feels she does not belong: she walks past the building 'twice' before going in, sits 'as far from him as the sofa allowed' and holds her supermarket wallet as if it 'might blow away'. Yet she goes in, rides the lift and shakes his hand.",
    not: {
      'She feels quietly superior to the relaxed man on the sofa':
        'She sits as far from him as she can, and his leather folder makes her conscious of her plastic one. That is unease, not superiority.',
      'She has lost her nerve and means to leave before she is called':
        'She hesitates outside, but she goes in, waits, rides the lift and shakes hands. Everything she does is about going through with it.',
      'She feels at home here yet doubts she can go through with it':
        'She does hesitate at first, walking past the building twice, but she never feels at home: the plastic wallet and her distance on the sofa show she feels out of place.',
    },
    more: 'Contrasting objects, a plastic supermarket wallet against a leather folder, can show differences of money or confidence without a word of explanation. Readers infer the feeling from the things.',
    tip: "In an evaluation answer, balance your judgement: 'Priya feels out of place, as the plastic wallet shows, yet she is determined, stepping out to shake his hand.' Two sides, two pieces of evidence.",
  },
  'Frankenstein, Chapter 5: According to the third paragraph, what has the narrator given up for his work?':
    {
      why: "The narrator says it plainly: 'For this I had deprived myself of rest and health.' Nearly two years of work have cost him sleep and his own wellbeing, which raises the stakes of the moment the creature wakes.",
      not: {
        'His family and his home':
          "The extract does not mention his family or his home. In the third paragraph the sacrifice he names is 'rest and health'.",
        'His fortune and his good name':
          "Money and reputation are never mentioned. He has given up 'rest and health', things of the body, not of status.",
        'His faith and his friendships':
          "He calls on God in shock, but he never says he has lost faith or friends. The sacrifice he names is 'rest and health'.",
      },
      more: "A retrieval question asks what the text says, not what you know of the whole novel. Readers of Frankenstein know more about Victor's life, but the answer must come from the extract in front of you.",
      tip: 'When a question names a paragraph, find the answer there and quote it briefly. Paraphrase in your own words, but keep the evidence exact.',
    },
  'Frankenstein, Chapter 5: In the first paragraph, which word most suggests the strain the narrator feels before the creature wakes?':
    {
      why: "The narrator's 'anxiety' is so strong that it 'almost amounted to agony', which is extreme pain. The word shows that the strain is physical as well as mental: even waiting for the moment of success hurts him.",
      not: {
        "'dreary', because the November night shows how tired he has become":
          "'Dreary' sets a gloomy mood for the night, but it describes the weather, not his feelings. 'Agony' names his strain directly.",
        "'dismally', because the sound of the rain reflects his own sadness":
          "'Dismally' describes the rain on the panes. It adds to the gloom, but the narrator is tense with expectation, not sad.",
        "'convulsive', because the sudden movement shows how afraid he is":
          "'Convulsive' describes the creature's limbs once it wakes, not the narrator. The question asks about his strain before that moment.",
      },
      more: "Gothic writers often build tension by pairing an anxious character with a gloomy setting: a dying candle, rain at night. Here the setting supports the mood, but the narrator's own word, 'agony', tells us most.",
      tip: "In a 'which word' question, test each word against the exact focus: who does it describe, and when? 'Convulsive' is a powerful word, but it belongs to the creature.",
    },
  'Frankenstein, Chapter 5: What does the phrase "these luxuriances only formed a more horrid contrast" suggest about the creature?':
    {
      why: "The 'luxuriances' are the creature's fine features: flowing black hair and teeth 'of a pearly whiteness'. Instead of helping, they only make the 'watery eyes' and 'shrivelled complexion' look worse by contrast. Beauty placed beside ugliness makes the ugliness more horrible.",
      not: {
        'Its fine features make up for the ugly ones in the end':
          "The phrase says they formed 'a more horrid contrast'. They make things worse, not better.",
        'It is vain, and proud of its lustrous, flowing hair':
          "The creature has only just woken; it has no thoughts about its looks here. 'Luxuriances' are the narrator's description of its features.",
        'Its body is healthy, so the experiment has succeeded':
          "The creature lives, but the phrase is about how it looks, and the narrator finds it 'horrid'.",
      },
      more: "Contrast heightens horror: something nearly beautiful can be more disturbing than something plainly ugly, because it shows what was hoped for. The narrator selected the features 'as beautiful', and that hope makes the result worse.",
      tip: "When a writer says one thing 'formed a contrast' with another, explain what each side adds. Here beauty is not a comfort; it sharpens the horror.",
    },
  'Frankenstein, Chapter 5: Which quotation best suggests that the narrator blames himself for going too far?':
    {
      why: "'I had desired it with an ardour that far exceeded moderation' is the narrator judging himself: his passion went beyond what was sensible. 'Far exceeded moderation' admits that he was too eager, so the quotation suggests he now sees his ambition as excessive.",
      not: {
        'How can I describe my emotions at this catastrophe':
          "This shows his horror at the result, calling it a 'catastrophe', but not that he blames himself for going too far.",
        'With an anxiety that almost amounted to agony':
          'This describes his strain before the creature wakes. It shows tension, not self-blame.',
        'I had worked hard for nearly two years':
          'This states how long he worked. Hard work alone is not a confession of going too far.',
      },
      more: "Romantic and Victorian writers often warn against overreaching: a character who pushes past natural limits pays for it. Words such as 'exceeded' and 'moderation' signal that warning.",
      tip: "In a best-evidence question, match the quotation to every part of the claim. 'Blames himself' and 'too far' both need support; 'far exceeded moderation' gives both.",
    },
  'Frankenstein, Chapter 5: Which judgement about the narrator does the extract best support?': {
    why: "As soon as the creature lives, the narrator flees: 'Unable to endure the aspect of the being I had created, I rushed out of the room'. Even in bed he cannot escape, since 'it was in vain'. He abandons his creation the moment it opens its eye.",
    not: {
      'He is proud of his creation and eager to show it to others':
        "He calls it 'the wretch' and the moment a 'catastrophe'. There is horror, not pride, and he tells no one.",
      'He pities the creature and wants to help it learn to live':
        "He feels 'breathless horror and disgust' and rushes out. Pity, if it comes, is not in this extract.",
      'He stays calm and records the facts like a careful scientist':
        "His description of skin and arteries is precise, but it is full of feeling: 'Great God', 'horrid', 'horror and disgust'. He is not calm.",
    },
    more: "Readers often notice that the creature's first acts are to open its eye and breathe, while its maker's first act is to run away. Many readings of the novel start from this abandonment.",
    tip: "Support a judgement about a character with what they do as well as what they feel. 'I rushed out of the room' is an action, and actions are strong evidence.",
  },
  'Great Expectations, Chapter 8: What has the lady not yet finished doing?': {
    why: "'She had not quite finished dressing, for she had but one shoe on', and 'the other was on the table near her hand'. Her veil is 'half-arranged' and her watch is not on, as if she stopped in the middle of getting ready.",
    not: {
      'Reading the Prayer-book on the table':
        "A Prayer-book lies among the things heaped about the looking-glass, but nothing says she was reading it. What she has not finished is dressing: she has 'but one shoe on'.",
      'Writing a letter that lies on the table':
        'No letter is mentioned. The table holds jewels, a shoe, lace, gloves, flowers and a Prayer-book.',
      'Eating the meal laid out beside her':
        'There is no meal in this extract. The things beside her are clothes, jewels and trinkets.',
    },
    more: 'Details of unfinished actions, a shoe on the table, a veil half-arranged, suggest a moment frozen in time. Writers use them to make the reader ask what interrupted it.',
    tip: "Read retrieval questions closely: 'not yet finished' points you to the sentence that says 'had not quite finished'. Quote it and say what it shows.",
  },
  'Great Expectations, Chapter 8: Which word most suggests what time has done to the lady?': {
    why: "'Withered' is used of flowers that dry up and die. Saying 'the bride within the bridal dress had withered like the dress, and like the flowers' suggests that time has dried her up just as it has her clothes and her flowers.",
    not: {
      "'sparkled', because her jewels show that she is still young":
        "The jewels sparkle, but she has white hair and 'sunken eyes'. Bright jewels on a withered bride sharpen the contrast; they do not make her young.",
      "'rich', because her clothes show she has kept her wealth":
        "'Rich materials' shows her wealth, but the question asks what time has done to her. Wealth has not stopped her fading.",
      "'confusedly', because it shows that she has lost her memory":
        "'Confusedly' describes how the objects are heaped about the looking-glass, not her mind.",
    },
    more: "Comparing a person to a plant is a common way to show ageing or decay. Here the bride, the dress and the flowers all wither together, so she seems part of the room's decay.",
    tip: "In a 'which word' question, choose the word that does the most work for the precise idea asked, then explain its connotations: 'withered' suggests drying, fading and death.",
  },
  'Great Expectations, Chapter 8: Why does the writer describe the white dress and jewels so fully in the third paragraph?':
    {
      why: "The third paragraph lists satins, lace and silks, a white veil and sparkling jewels, so the reader first imagines a splendid bride. Only then does the narrator reveal that everything 'had been white long ago' and is now 'faded and yellow'. The delay makes the decay a shock.",
      not: {
        'To show that she is getting ready for her wedding today':
          "That is how it first looks, which is the writer's point. The next paragraph reveals that everything has faded, so the wedding was long ago.",
        'To show that the narrator knows a great deal about fashion':
          "Much of the room is 'quite unknown' to him. The detail is there to build a picture that the next paragraph undoes.",
        'To show that the room is tidy and carefully looked after':
          "Things are 'scattered about' and 'confusedly heaped'. The room is in disorder, not cared for.",
      },
      more: 'Holding back a key fact is a structural choice: the reader forms one picture and is then forced to see it differently. Dickens builds the splendid bride first so that her decay hits harder.',
      tip: "In a structure answer, describe the order of information and its effect: 'The writer first lists the bride's finery, then reveals it has yellowed, so the reader's impression is overturned.'",
    },
  'Great Expectations, Chapter 8: Which quotation best suggests that the lady has worn her wedding dress for many years?':
    {
      why: "The dress 'had been put upon the rounded figure of a young woman', but the body inside it 'had shrunk to skin and bone'. The dress was made for a young bride; the change in the body inside it shows that years have passed while she has gone on wearing it.",
      not: {
        'Some bright jewels sparkled on her neck and on her hands':
          'The jewels still sparkle, so they tell us nothing about how long she has worn the dress.',
        'Dresses, less splendid than the dress she wore, and half-packed trunks':
          'The half-packed trunks show an interrupted moment, not how much time has passed since.',
        'She had not quite finished dressing, for she had but one shoe on':
          'This shows that she stopped part-way through dressing, but not for how long.',
      },
      more: 'Change over time is often shown through the body: hair turning white, clothes that no longer fit. Readers infer the years from the gap between the young bride the dress was made for and the woman inside it.',
      tip: 'In a best-evidence question, ask which quotation proves the exact claim. Several details here are strange, but only one shows a long passage of time.',
    },
  "Great Expectations, Chapter 8: Which judgement about the narrator's reaction does the extract best support?":
    {
      why: "He studies the scene closely, repeating 'I saw that' as he takes in each detail, and he notices 'more of them in the first moments than might be supposed'. Yet he is terrified: the waxwork and skeleton 'seemed to have dark eyes', and 'I should have cried out, if I could'.",
      not: {
        'He is calm, as he has seen such sights at the Fair before':
          "He has seen a 'ghastly waxwork' at the Fair, but the memory frightens him more, not less. He would have cried out if he could.",
        'He pities her and wants to help her finish dressing':
          'He feels fear and fascination, not pity, and makes no move to help. He stands and stares.',
        'He is curious, but feels no fear of her at all':
          "He is curious, taking in every detail, but he is afraid too: he was 'half afraid' at the door, and at the end 'I should have cried out, if I could.'",
      },
      more: "Readers often remember Pip's response as a mix of horror and fascination: he cannot look away. The repeated 'I saw that' slows the description, so the reader looks as closely as he does.",
      tip: "An evaluation answer can hold two feelings at once. Show both with evidence: 'He is fascinated, noticing every detail, yet horrified, wanting to cry out.'",
    },
  'Jane Eyre, Chapter 12: Why does the narrator not feel the cold as she sits on the stile?': {
    why: "'Gathering my mantle about me, and sheltering my hands in my muff, I did not feel the cold, though it froze keenly'. The sentence gives the reason itself: her warm cloak and her muff keep out the frost, even though the ice on the causeway shows how cold it is.",
    not: {
      'She walked fast up the lane and is still warm from it':
        "She did walk fast 'till I got warm', but then she walked slowly. At the stile, the reason she gives is her mantle and muff.",
      'The low winter sun is still warming the side of the hill':
        "The sun is 'low-gliding and pale-beaming', and soon it sets. It is freezing: a sheet of ice covers the causeway.",
      'She is sitting close to a fire in the nearby village of Hay':
        "Hay is 'a mile distant'; she sees only its chimney smoke. She is sitting alone on a stile in the lane.",
    },
    more: "Older prose often packs cause and effect into one long sentence. Reading to the main clause, 'I did not feel the cold', and back to the phrases before it shows the reason.",
    tip: 'In retrieval questions on older texts, find the sentence that states the answer and paraphrase it. A detail from elsewhere in the passage, however true, may answer a different question.',
  },
  'Jane Eyre, Chapter 12: What does the comparison of the birds to "single russet leaves that had forgotten to drop" suggest?':
    {
      why: "Russet is a reddish brown, the colour of dead leaves. Comparing the little brown birds in the bare hedge to leaves 'that had forgotten to drop' suggests they are so still and so well camouflaged that they look like part of the hedge. 'Forgotten' adds a gentle, playful touch.",
      not: {
        'They are dying, one by one, in the bitter cold of the winter':
          "The birds 'stirred occasionally'. The comparison is about how they look in the hedge, not about death.",
        'Autumn has not quite ended yet, so the leaves are still falling':
          "The bushes are 'stripped'; it is winter. The point is that the birds look like the last leaves, not that leaves remain.",
        'They are bright and colourful against the white winter snow':
          'Russet is a dull reddish brown, and there is frost and ice here, not snow. The birds blend in rather than stand out.',
      },
      more: "A comparison that adds a human touch, leaves that 'forgot', is a gentle form of personification. It keeps the scene calm and charming rather than bleak.",
      tip: "Look up colour words you are unsure of: 'russet' is reddish brown, and knowing it unlocks the comparison. Then explain what the reader sees and feels.",
    },
  'Jane Eyre, Chapter 12: What is the effect of the shift in the last paragraph of the extract?': {
    why: "Until this point the extract has been hushed and still. Then 'A rude noise broke' in: 'a positive tramp, tramp, a metallic clatter'. The harsh sounds interrupt the peace the narrator has been enjoying and signal that something, or someone, is coming.",
    not: {
      'It shows the narrator falling asleep on the stile at dusk':
        'The noise wakes the scene up rather than sending her to sleep. Nothing suggests she dozes.',
      'It moves the scene from the evening back to the morning':
        'The time does not change; it is still evening. What changes is the mood, from calm to disturbance.',
      'It describes a painting that the narrator once saw':
        "The picture is a comparison: the noise blots out the soft sounds as a dark crag in a painting's foreground hides the distant hills.",
    },
    more: 'A sudden change of mood at the end of a section creates suspense. The reader, like the narrator, wants to know what is making the noise.',
    tip: "In a structure answer, name the shift and its effect on the reader: 'The final paragraph shifts from stillness to a harsh noise, creating suspense about what is approaching.'",
  },
  'Jane Eyre, Chapter 12: Which judgement about the third paragraph does the extract best support?':
    {
      why: "The paragraph begins with what she sees, the 'rising moon' and the 'blue smoke' of Hay, and then turns to what she hears: 'thin murmurs of life', 'the flow of currents', 'the tinkle of the nearest streams'. In the dusk, her ears do the work her eyes did earlier.",
      not: {
        'The narrator hears nothing at all in the absolute hush':
          "The hush lets her hear more, not less: 'in the absolute hush I could hear plainly its thin murmurs of life'.",
        'Darkness falls, and the narrator can no longer see Hay':
          "She sees Hay 'half lost in trees' and the smoke from its chimneys. It is dusk, not darkness.",
        'The rising moon frightens the narrator with its cold light':
          "The moon 'looked over Hay' calmly. Nothing in the paragraph is frightening; the mood is peaceful.",
      },
      more: 'Shifting from one sense to another is a quiet structural device: it can show time passing, here from sunset to dusk, without saying so.',
      tip: 'When a question asks about a whole paragraph, track how its focus moves from start to end, then give a judgement that covers both halves.',
    },
  'Jane Eyre, Chapter 12: Which quotation best suggests that the narrator enjoys being alone?': {
    why: "The narrator says the lane's 'best winter delight lay in its utter solitude and leafless repose'. Calling solitude a 'delight', and the best one, shows that she values being alone there. The other quotations describe the scene without saying how she feels about it.",
    not: {
      'there were only fields, where no cattle now browsed':
        'This shows the lane is empty, but not that she enjoys it. A place can be empty and lonely.',
      'the church bell tolled as I passed under the belfry':
        'This tells us the time and her route, not her feelings about being alone.',
      'I did not feel the cold, though it froze keenly':
        'This explains why she is comfortable on the stile, not whether she enjoys being alone.',
    },
    more: "Writers often reveal a narrator's feelings through what she praises in a place. This narrator finds pleasure in a quiet, empty country lane, which says something about her character.",
    tip: "In a best-evidence question, look for the quotation that contains a feeling word linked to the claim: here 'delight' and 'solitude' together.",
  },
  "Save Our Library: According to the letter, why do some people use the library's computers?": {
    why: "The letter says there are 'people applying for jobs on the public computers, because not everyone has the internet at home'. The writer adds 'whatever we may assume', a reminder that not every household is online.",
    not: {
      'To play games together after school with their friends':
        "The children mentioned are at the homework club, finding 'a quiet table'. Nobody is described playing games.",
      'Because the library computers are faster than theirs':
        'The point is that some people have no internet at home at all, not that theirs is slower.',
      "To read about the council's plan to close the library":
        'The plan was reported in the newspaper, not read on the library computers. The users described are applying for jobs.',
    },
    more: "Persuasive writers often use concrete examples of real people to make a case feel human. 'People applying for jobs' turns a building into a lifeline.",
    tip: 'Retrieval answers should be brief and in your own words, but check the reason as well as the fact: people use the computers because they have no internet at home.',
  },
  'Save Our Library: What does the writer suggest by saying "A library is not a warehouse for books"?':
    {
      why: "A warehouse simply stores goods. By saying the library is 'not a warehouse for books', the writer rejects the idea that it is only about its stock, and goes on to say what it really offers: a warm place where anyone is welcome.",
      not: {
        'That the library has too few books and badly needs more':
          'The writer does not complain about the number of books. The metaphor says books are not the main point.',
        'That the books are stored badly and gathering dust':
          "This reads 'warehouse' literally. The writer is saying what a library is for, not how it is kept.",
        'That the books should be sold off to save the council money':
          "The writer wants to save the library, not sell its books. The whole letter argues against the council's saving.",
      },
      more: 'Defining something by what it is not is a strong persuasive move: it knocks down a narrow view before offering a better one.',
      tip: "When a writer says 'X is not Y', explain the view being rejected and the one put in its place. That shows you understand the direction of the argument.",
    },
  'Save Our Library: Why does the writer mention having used the library for forty years?': {
    why: "'I have used that library for forty years' tells readers that the writer knows it well and has watched generations use it, from childhood to grandchildren. A long, first-hand view makes the argument harder for the council to dismiss.",
    not: {
      'To prove that the building is far too old to be kept open':
        "The writer wants it kept open. Forty years describes the writer's use of it, not the building's condition.",
      'To turn the whole letter into a fond story about the past':
        "The writer rules this out: 'But this is not a letter about nostalgia.' The memory leads straight into the argument.",
      'To complain that the library has not changed in all those years':
        "The 'same desk' is mentioned with affection, not as a complaint. The writer is praising the library, not criticising it.",
    },
    more: "Showing who you are and why you can be trusted is called building credibility. In a letter to a newspaper, a writer's experience is often their strongest evidence.",
    tip: "In your own persuasive writing, give the reader one reason to trust you early on, then move quickly to the argument, as this writer does with 'But'.",
  },
  'Save Our Library: How does the writer deal with the council\'s argument that "everything is online now"?':
    {
      why: "The writer grants part of the claim, 'Some of it is.', then shows what a website cannot do: help someone whose eyesight is failing, or notice that an old man has not been in for a week. 'Our librarians have' ends the paragraph on human care.",
      not: {
        'By agreeing with it fully and suggesting the library move online':
          "'Some of it is' is only partial agreement, and the writer argues for keeping the building, not moving it online.",
        'By ignoring it and writing only about personal memories':
          "The writer quotes the council's claim directly and answers it with examples. Personal memories come earlier, in the third paragraph.",
        'By proving it wrong with figures about how people use the internet':
          'There are no figures in the letter. The writer answers the claim with examples of what only people can do.',
      },
      more: 'A concession followed by a rebuttal is one of the most persuasive moves in argument writing. Admitting what is true makes the writer seem fair, so the counter-example lands harder.',
      tip: "When you analyse a counter-argument, quote the concession and the rebuttal separately, then explain how the second turns the first back to the writer's side.",
    },
  'Save Our Library: What is the main purpose of the paragraph that begins "Closing the library would save money this year"?':
    {
      why: "The paragraph weighs a saving now against a greater cost later, 'It would cost us far more in the years to come', then turns to action: a public meeting on Thursday, and 'I urge every reader... to come'. It ends the letter with a call to act.",
      not: {
        'To thank the council for listening to the views of the town':
          "The writer is opposing the council's plan, not thanking it. Nothing suggests the council has listened.",
        'To admit that closing the library would save money':
          "It does admit a saving 'this year', but only to argue that the real cost is far higher. That admission is not the main purpose.",
        'To describe the people who use the library each day':
          "That is the job of the paragraph beginning 'Go in on any weekday afternoon'. This one draws the argument together and calls for action.",
      },
      more: 'Many persuasive texts end with a call to action: a clear, practical step the reader can take. Pairing it with a final warning about the cost of doing nothing adds urgency.',
      tip: 'Purpose questions ask what a part of the text is for. Look at its first and last sentences: here a cost argument opens it and an urgent request closes it.',
    },
  "Getting It Wrong: What happened on the speaker's third driving test?": {
    why: "'The third time, I did everything perfectly for forty minutes and then reversed, very slowly and very carefully, into the examiner's own car.' The careful build-up, 'very slowly and very carefully', makes the ending funnier.",
    not: {
      'The speaker drove the wrong way round a roundabout':
        'That was the first test. Each test has its own disaster, so match the number to the right sentence.',
      'The speaker stalled three times at a green light':
        "That was the second test, the one with the lorry driver. The third ended in the examiner's car.",
      'The speaker passed after forty perfect minutes':
        "The forty minutes were perfect, but the test ended with reversing into the examiner's car. The speaker passed on the fourth attempt.",
    },
    more: 'A list of three failures that grow worse each time is a classic comic structure, and the third holds the biggest surprise.',
    tip: "When several similar events are listed, retrieval questions often test which one is which. Underline markers such as 'The first time' and 'The third time'.",
  },
  'Getting It Wrong: What is the effect of the phrase "explained his feelings through the medium of his horn"?':
    {
      why: "The lorry driver was really hooting angrily, but the speaker describes it in grand, polite language, as if he had calmly 'explained his feelings'. The gap between the formal words and the rude reality is what makes it funny.",
      not: {
        'It shows that the lorry driver was calm and trying to help':
          'A driver stuck behind a stalling car and sounding his horn is annoyed, not helpful. The polite wording is ironic.',
        'It suggests that the speaker was hurt in a serious crash':
          "Nobody crashes here; the speaker stalls at a green light. The phrase is about the driver's horn.",
        'It shows that the speaker was furious with the lorry driver':
          "The feelings described are the lorry driver's, not the speaker's. The speaker looks back with amusement.",
      },
      more: 'Describing something rude in elaborate, polite language is a kind of irony called mock formality. It invites listeners to picture the scene and enjoy the gap.',
      tip: 'To explain humour, name the gap: what really happened, and the surprising way it is described. Then quote the words that create the gap.',
    },
  'Getting It Wrong: Why does the speaker open with the story of failing the driving test?': {
    why: "Opening with an embarrassing failure makes the speaker likeable and honest, and the laughter ('You are laughing. Good.') relaxes the audience. Students who have just laughed with a speaker are more likely to listen to the serious point that follows.",
    not: {
      'To teach the audience how to pass their driving tests':
        'The speech gives no driving advice. The tests are an example of failing and trying again.',
      'To show that driving tests are unfair to young people':
        "Every failure was the speaker's own mistake. Nothing suggests the tests were unfair.",
      'To boast that the speaker is now a skilled driver':
        'The speaker mentions twenty years of driving only at the end, and jokes about it. The opening is about failure, not boasting.',
    },
    more: 'An anecdote at the start of a speech is called a hook. A funny, self-mocking one also builds trust: the speaker is not pretending to be perfect.',
    tip: 'In your own speeches, open with a short story that makes the audience feel a point before you state it. Then link it clearly to your argument.',
  },
  "Getting It Wrong: Which quotation best shows that a mistake once shook the speaker's belief in themselves?":
    {
      why: "After failing, the speaker 'decided that I was simply not a person who could drive'. The mistake turned into a belief about who they were, which is the moment the speaker goes on to call dangerous.",
      not: {
        'I want to start with a confession, and it is not a small one':
          'This introduces the story of failing, but says nothing about how the speaker felt about themselves.',
        'I did everything perfectly for forty minutes':
          'This shows the speaker doing well, just before the final mistake. It is not about shaken belief.',
        'I failed my driving test three times':
          'This states the failures, but not their effect. The claim is about what the speaker came to believe afterwards.',
      },
      more: "The speech separates a mistake from the story we tell ourselves about it. The car park moment shows how quickly 'I failed' can become 'I am a failure'.",
      tip: 'In a best-evidence question, the fact of a failure is not the same as its effect. Choose the quotation that shows the precise part of the claim, here the shaken belief.',
    },
  "Getting It Wrong: What is the speaker's main purpose?": {
    why: "Everything builds to the lesson: 'Getting something wrong is not the opposite of learning. It is how learning happens.' The speaker then asks students to circle, question and fix their mistakes. The driving stories entertain, but they serve that persuasive purpose.",
    not: {
      'To entertain the students with stories about learning to drive':
        'The stories are entertaining, but they are a means to an end: each one supports the lesson about mistakes.',
      'To warn the students that their exams will be very difficult':
        'The speech says they will get things wrong, but its aim is to change how they respond, not to frighten them.',
      'To explain how to mark a mock paper accurately and quickly':
        'The speaker asks students to look at their wrong answers, not to mark papers. The aim is a change of attitude.',
    },
    more: "A speech can entertain, inform and persuade at once, but one purpose usually leads. Look for where the speaker tells the audience what to do: here, 'do not hide it. Circle it.'",
    tip: 'To identify purpose, ask what the speaker wants the audience to think or do afterwards. Name that, then explain how the other elements, such as humour, serve it.',
  },
  'The Sign of Four, Chapter 3: Where do the narrator and his companions meet the coachman?': {
    why: "'We had hardly reached the third pillar, which was our rendezvous, before a small, dark, brisk man in the dress of a coachman accosted us.' The pillar is at the Lyceum Theatre, where the crowds are gathering at the side-entrances.",
    not: {
      'In the theatre itself, during the play':
        'They never go inside. The crowds are arriving at the entrances, and the meeting happens outside, at a pillar.',
      'On the Strand, under one of the misty lamps':
        'The Strand is where they travel through the fog. They meet the coachman later, at the Lyceum Theatre.',
      "At the front door of Miss Morstan's lodgings":
        "Miss Morstan is with them already. The meeting place, their 'rendezvous', is the third pillar at the theatre.",
    },
    more: 'Retrieval questions on narrative often hinge on sequence: where the characters are at each point. Here the scene moves from the foggy Strand to the theatre, and only then to the meeting.',
    tip: "Look for the key noun the question needs, here a place, and find the sentence that names it. 'Rendezvous' means a meeting place, which confirms the answer.",
  },
  "The Sign of Four, Chapter 3: Which word most suggests that the city's lights are weak and blurred in the fog?":
    {
      why: "'Splotches' are blots or smears with no clear shape. Calling the lamps 'misty splotches of diffused light' suggests the fog has turned each lamp into a blurred smudge that throws only 'a feeble circular glimmer'.",
      not: {
        "'glare', because the shop lights are harsh, bright and dazzling":
          "The shop windows do give a 'yellow glare', but a glare is strong, not weak. The question asks for the word that shows weak, blurred light.",
        "'crowded', because the people block the light from view":
          "'Crowded' describes the busy street, not the light. The fog, not the people, is what blurs the lamps.",
        "'radiance', because the light is warm, bright and cheerful":
          "The radiance is 'murky' and 'shifting'. It is gloomy and unsteady, not cheerful.",
      },
      more: 'Fog is a favourite setting in Victorian fiction: it hides, blurs and confuses. Here weak, smeared light makes the city feel uncertain, which suits a mystery.',
      tip: "When a 'which word' question names two qualities, here weak and blurred, check that your word shows both. 'Splotches' shows the blur, and 'feeble' nearby adds the weakness.",
    },
  'The Sign of Four, Chapter 3: What does the narrator suggest by saying the faces "flitted from the gloom into the light, and so back into the gloom once more"?':
    {
      why: "'Like all human kind' turns a description of the crowd into a comment on humanity. People appear briefly in the light and pass 'back into the gloom', as if a human life were a short moment of light between two darknesses.",
      not: {
        'That the people are ghosts haunting the foggy Strand':
          "The faces seem 'ghost-like' to him, but they are real people. 'Like all human kind' shows the comment is about life, not ghosts.",
        'That the crowd is marching in a planned procession':
          "'Procession' describes the endless stream of faces, not an organised march. The point is how they pass in and out of the light.",
        'That most Londoners enjoy walking out on cold, foggy nights':
          "The faces are 'sad' and 'glad', 'haggard and merry'. The narrator says nothing about whether they enjoy the fog.",
      },
      more: "A writer can move from a precise detail to a general truth in one sentence. Watson's gloomy mood leads him to see the passing crowd as an image of how brief life is.",
      tip: "Look for phrases that widen the focus, such as 'Like all human kind'. They signal that a description has become a reflection, and that is worth explaining.",
    },
  "The Sign of Four, Chapter 3: Which quotation best shows that the weather affects the narrator's mood?":
    {
      why: "The narrator says that 'the dull, heavy evening', together with 'the strange business upon which we were engaged, combined to make me nervous and depressed'. The weather and the mystery work together on his mood, even though he claims he is 'not subject to impressions'.",
      not: {
        'Holmes alone could rise superior to petty influences':
          'This is about Holmes, who is not affected. It shows the contrast with the others, not how the weather affects the narrator.',
        'a dense drizzly fog lay low upon the great city':
          "This describes the weather but says nothing about the narrator's feelings.",
        'I could see from Miss Morstan’s manner that she was suffering from the same feeling':
          "This shows Miss Morstan's mood. It does not show what causes the narrator's.",
      },
      more: "When the weather seems to match or shape a character's mood, it is called pathetic fallacy. Here the narrator states the link outright, which makes it easy to quote.",
      tip: "In a best-evidence question, check that the quotation covers both parts of the claim: here the weather ('dull, heavy evening') and the mood ('nervous and depressed').",
    },
  "The Sign of Four, Chapter 3: Which judgement about the coachman's request does the extract best support?":
    {
      why: "The coachman says, 'I was to ask you', so someone has sent him with instructions, and they are to make sure 'neither of your companions is a police-officer'. Whoever is behind the invitation wants the police kept out, which deepens the mystery.",
      not: {
        'It shows that the coachman is a police officer in disguise':
          'He is checking that they are not police. Nothing suggests he is one himself.',
        'It proves that Miss Morstan has broken the law herself in some way':
          'Nothing suggests Miss Morstan has done wrong. The question is about who might be watching, not about her guilt.',
        "It shows that he is worried about Miss Morstan's safety":
          'Asking her to promise that no police are present would not make her safer. The request protects whoever sent him.',
      },
      more: 'Mystery writers often reveal a clue through what a character asks rather than what they say. A request for secrecy makes the reader suspect something hidden.',
      tip: "When asked to judge a detail, ask what it implies about someone who is not on the page. 'I was to ask you' points to the unseen person who gave the order.",
    },
  'The War of the Worlds, Book 1, Chapter 4: What did the narrator expect to come out of the cylinder?':
    {
      why: "The narrator says that 'everyone expected to see a man emerge', perhaps 'a little unlike us terrestrial men, but in all essentials a man', and adds 'I know I did.' He expected something human in shape, which makes what appears more shocking.",
      not: {
        'A machine that had been built to attack the people of Earth':
          'Nobody yet suspects an attack. The crowd expects a visitor in human form, not a machine.',
        'Nothing at all, as he thought it would be empty':
          "'Everyone expected to see a man emerge', and 'I know I did.' He expected something to come out, and in human form.",
        'A grey snake, like the one he saw moving inside':
          "The snake-like shape is what he actually sees, and it surprises him. What he expected was 'in all essentials a man'.",
      },
      more: "Setting up an expectation and then breaking it is a powerful way to create shock. The reader shares the narrator's assumption, so the gap between what was expected and what appears hits us too.",
      tip: "Inference questions about expectations often turn on words such as 'expected', 'thought' or 'supposed'. Find them, and contrast what was expected with what happened.",
    },
  'The War of the Worlds, Book 1, Chapter 4: Which word most suggests that the narrator is too frightened to move?':
    {
      why: "To be petrified is to be turned to stone. 'I stood petrified and staring' shows that his fear has frozen him in place: he can only stand and stare, unable to run.",
      not: {
        "'chill', because the cold air stops him from running":
          "The 'sudden chill' is a feeling of fear, not cold air, and straight after it he does move, pushing his way back from the pit.",
        "'shriek', because the woman's scream freezes him to the spot":
          "The shriek is the woman's. After it the narrator is still moving, 'pushing my way back'.",
        "'staring', because he cannot take his eyes off the pit":
          "'Staring' shows he cannot look away, but it is 'petrified' that shows he cannot move.",
      },
      more: "Words with a hidden image are powerful in analysis. 'Petrified' comes from the Greek for rock, so fear seems to turn his body into a statue.",
      tip: "In a 'which word' question, choose the word whose meaning matches the idea most precisely, then explain any image it holds: 'petrified' suggests he is turned to stone.",
    },
  "The War of the Worlds, Book 1, Chapter 4: Why does the writer describe the crowd's horror and the narrator's terror before giving a full description of the creature?":
    {
      why: "We glimpse only 'greyish billowy movements', two 'luminous disks' and tentacles, then see the crowd's 'astonishment giving place to horror' and the narrator 'petrified'. Showing the fear before the full creature makes the reader dread what is coming, so its appearance hits harder.",
      not: {
        'Because the narrator never sees the creature clearly':
          'He does: the last three paragraphs describe it in close detail, from its eyes to its mouth and skin.',
        'To show that the crowd is braver than the narrator':
          "The crowd runs away, 'Stent among them'. The narrator is left alone, staring.",
        'To suggest that the creature has already climbed out of the pit':
          "It is still 'rising slowly and painfully out of the cylinder' when the full description begins.",
      },
      more: "Horror writers often show reactions before the monster, because the reader's imagination fills the gap. A scream and a fleeing crowd make the threat feel enormous before we see it.",
      tip: "When a question asks why something comes first, describe the order and its effect on the reader: 'The writer shows the crowd's horror first, building dread before the reveal.'",
    },
  'The War of the Worlds, Book 1, Chapter 4: Which quotation best suggests that the creature is weak or suffering, rather than all-powerful?':
    {
      why: "'The evident heaviness and painfulness of movement' shows that the creature struggles to move. The sentence explains why, Earth's 'greater gravitational energy', so this alien is not an all-powerful invader here but a creature labouring in a world too heavy for it.",
      not: {
        'the extraordinary intensity of the immense eyes':
          'The eyes suggest a powerful, alert intelligence, not weakness.',
        'the Gorgon groups of tentacles':
          'The Gorgons were monsters of Greek myth; the comparison makes the creature more terrifying, not weaker.',
        'Two large dark-coloured eyes were regarding me steadfastly':
          'A steady gaze suggests calm attention, even threat. It shows nothing of weakness or pain.',
      },
      more: "The description mixes horror with hints of weakness: 'crippled', 'painfulness', 'tumultuous breathing'. A careful reader notices both, and that is the kind of detail that strengthens an evaluation answer.",
      tip: 'In best-evidence questions, rule out quotations that support the opposite claim. Two of these make the creature more frightening, not weaker.',
    },
  'The War of the Worlds, Book 1, Chapter 4: Which judgement about the final paragraph does the extract best support?':
    {
      why: "The final paragraph is one long list of features, the mouth, the missing chin, the tentacles, the breathing, the eyes, which piles up until it ends in five adjectives: 'vital, intense, inhuman, crippled and monstrous'. The build-up leaves the narrator 'overcome with disgust and dread'.",
      not: {
        'It describes the creature coolly and scientifically, without feeling':
          "The details are precise, but the language is full of feeling: 'strange horror', 'unspeakably nasty', 'disgust and dread'.",
        'It makes the creature seem friendly and curious about humans':
          "Nothing is friendly here. The creature is 'inhuman' and 'monstrous', and the narrator is horrified.",
        'It shows the narrator slowly losing his fear of the creature as he looks':
          "His fear grows rather than fades: the paragraph ends with him 'overcome with disgust and dread'.",
      },
      more: 'Listing, or accumulation, is a technique of both language and structure: each item adds weight until the reader feels overwhelmed, just as the narrator does.',
      tip: "When you analyse a list, comment on what is placed last. Here the adjectives end with 'monstrous', and the paragraph ends with 'dread', so horror has the final word.",
    },
  'A Christmas Carol, Stave 3: Why does Mrs Cratchit leave the room alone?': {
    why: "Mrs Cratchit leaves the room alone, 'too nervous to bear witnesses', to take the pudding up. She is so anxious about whether it will turn out well that she cannot bear anyone watching.",
    not: {
      'She is cross that the goose turned out too small':
        "The goose was a triumph: 'There never was such a goose.' Mrs Cratchit is delighted, not cross.",
      'She wants to surprise them with a second goose':
        'She goes to fetch the pudding, the next course, not another goose.',
      'She has to fetch the pudding from next door':
        "The pudding is in the copper at home. 'Next door' appears only in a comparison about how the steam smells.",
    },
    more: 'Small domestic worries, played big, are a source of warmth and comedy in Dickens. The whole family treats the pudding like an event of national importance.',
    tip: "Retrieval answers can be put in your own words, but keep the reason precise: she is 'too nervous to bear witnesses', so she goes alone.",
  },
  'A Christmas Carol, Stave 3: What does the comparison of the pudding to "a speckled cannon-ball" suggest?':
    {
      why: "A cannon-ball is round, dark, hard and heavy. 'Speckled' adds the dots of fruit, and the next words, 'so hard and firm', confirm how solid it is. The comparison makes the pudding sound impressive and substantial, which is exactly how the proud family sees it.",
      not: {
        'That it is dangerous and might explode in the kitchen':
          'This takes the comparison literally. The cannon-ball describes its shape and solidness, not any danger.',
        'That it has been burnt black in the copper while it was cooking':
          "'Speckled' suggests dots of fruit, and the pudding is a 'success'. Nothing suggests it is burnt.",
        'That it is far too small for such a large family':
          'The comparison is about shape and firmness. Its size comes up separately, and nobody in the family will call it small.',
      },
      more: "Comic writers often compare a homely object to something grand or warlike. A pudding like a cannon-ball becomes heroic, which suits the family's pride in it.",
      tip: 'Explain a comparison through the qualities the two things share: list what a cannon-ball and the pudding have in common, then say what impression that creates.',
    },
  'A Christmas Carol, Stave 3: What is the effect of the three sentences beginning "Suppose..."?': {
    why: "Each 'Suppose' imagines a new disaster: underdone, broken, stolen over the back-yard wall. 'All sorts of horrors were supposed', and the two young Cratchits turn 'livid' at the thought of theft. The fears are far bigger than a pudding deserves, which makes the wait both tense and funny.",
    not: {
      'They show that the pudding really was stolen from the yard':
        "They are only fears. Moments later Mrs Cratchit enters 'smiling proudly' with the pudding.",
      'They give instructions for making a Christmas pudding':
        "There are no instructions. 'Suppose' introduces imagined disasters, not steps in a recipe.",
      'They show that Mrs Cratchit is sure the pudding has failed':
        "The fears are 'supposed' by the whole family, and they are only possibilities. She later admits doubts about the flour, not certainty of failure.",
    },
    more: "Repeating the opening of a sentence, here 'Suppose', is called anaphora. It builds rhythm and tension, and the rising silliness of these fears makes it comic.",
    tip: "When a sentence pattern repeats, name it and say what it builds. 'Suppose' three times builds suspense, so the pudding's arrival feels like a triumph.",
  },
  "A Christmas Carol, Stave 3: Which judgement about the narrator's attitude to the Cratchits does the extract best support?":
    {
      why: "The narrator shares the family's joy, 'There never was such a goose', yet gently teases their loyalty: nobody would call it 'a small pudding for a large family', since that 'would have been flat heresy', and Bob calls half a circle 'a circle'. The humour is affectionate.",
      not: {
        'He mocks them harshly for being poor and foolish':
          "The teasing is gentle. The narrator joins in their delight, calling it 'a wonderful pudding'.",
        'He pities them so much that he cannot enjoy the happy scene':
          'The tone is warm and lively, full of exclamations. The narrator enjoys the scene as much as they do.',
        'He describes them coldly, giving no opinion of his own':
          "The narrator's voice is everywhere, in exclamations and jokes. He is anything but cold.",
      },
      more: "Dickens's narrator often speaks like a friendly guest at the scene, mixing comedy and sympathy. Readers laugh with the Cratchits, not at them, which makes their poverty more moving.",
      tip: "When asked about a narrator's attitude, look for exclamations, jokes and asides. Then describe the tone with two precise adjectives, such as 'affectionate and amused'.",
    },
  'A Christmas Carol, Stave 3: Which detail best suggests, without saying so, that the Cratchits are poor?':
    {
      why: "The 'family display of glass' turns out to be 'Two tumblers, and a custard-cup without a handle'. Calling so little a 'display' is a gentle joke, and it shows, without saying so, how few and how humble the family's possessions are.",
      not: {
        'apples and oranges were put upon the table':
          'Fruit on the table suggests a treat, not poverty. This detail adds to the sense of plenty.',
        'steeped in sage and onion to the eyebrows':
          'This is a comic picture of the youngest Cratchits full of sage and onion stuffing. It suggests fullness and fun, not poverty.',
        'Mrs. Cratchit said with great delight':
          'This shows her happiness about the meal, not how much the family owns.',
      },
      more: "Writers often show poverty through objects rather than statements: a cracked cup, a coat too thin. The reader's inference makes the point more moving than a plain statement would.",
      tip: "'Without saying so' signals an inference. Choose the detail that implies the idea through an object or action, and explain what it implies.",
    },
  'The Night Ferry: What does the man at the ticket office mean by "a bit of a swell"?': {
    why: "The writer explains: 'in his language, a bit of a swell meant waves the size of houses'. The man uses mild words for rough seas, in 'the voice a dentist uses for the words \"slight pressure\"', a tone meant to play down something unpleasant.",
    not: {
      'That the crossing will be a pleasant and gentle one tonight':
        "The writer soon learns that 'a bit of a swell' meant 'waves the size of houses'. The phrase sounds gentle; the sea is not.",
      'That the ferry will be crowded with people going on holiday':
        'A swell is a movement of the sea, not a crowd. Nothing suggests the ferry is busy.',
      'That the writer already looks unwell before getting on board':
        "He does look at the writer, but 'a bit of a swell' is about the sea: it 'meant waves the size of houses'. The writer's colour is assessed only later, at two in the morning.",
    },
    more: "Understatement says less than the truth, often for comic effect. 'A bit of a swell' is a classic British understatement, and the writer's explanation makes the joke clear.",
    tip: "When a character's words and the reality do not match, say so and explain the effect: 'The understatement makes the rough crossing that follows funnier, and more alarming.'",
  },
  'The Night Ferry: What is the effect of describing the sea as "politely asleep" before it "woke up"?':
    {
      why: "Calling the calm sea 'politely asleep' gives it manners and a mood, and then it 'woke up', like a creature rousing. The personification makes the sudden roughness feel like the sea's own decision, comic and slightly alarming at once.",
      not: {
        'It shows that the writer fell asleep as soon as they set off':
          "The sea is the one 'asleep'. The writer was on deck feeling 'like an explorer'.",
        'It suggests that the sea stayed calm for the whole night':
          "'Woke up' marks the moment it turned rough, and the next three hours were miserable.",
        'It shows that the crew woke the passengers with an alarm':
          'Nobody is woken by an alarm. The phrase describes the sea, not the people on board.',
      },
      more: "Personifying weather or water lets a writer give it a personality. A sea that is 'politely asleep' and then wakes makes nature seem playful and unpredictable.",
      tip: 'Explain what human quality the personification adds and how it changes the mood. Here politeness turns to wildness, which marks the turn in the journey.',
    },
  'The Night Ferry: What does "a deep and personal hatred of a vending machine" suggest about the writer?':
    {
      why: "A 'deep and personal hatred' of a vending machine is absurd, which is the joke. The overstatement shows how seasickness has made the writer irritable, so that even a machine that 'would not stop rattling' feels like a personal enemy.",
      not: {
        "That the machine had taken the writer's money and kept it":
          "No money is mentioned. The machine's only crime is that it 'would not stop rattling'.",
        'That the writer was hungry and the machine had run out of food':
          "Nothing suggests hunger. On a rough sea, food is the last thing on the writer's mind.",
        'That the writer dislikes all modern machines and gadgets':
          'The hatred is for one rattling machine, on one rough night. The writer is not making a point about technology.',
      },
      more: 'Comic exaggeration, or hyperbole, often works by giving a small thing huge importance. Readers recognise the feeling, which is why it makes them laugh.',
      tip: 'To analyse humour, explain the exaggeration and what it reveals: here a strong emotion aimed at a trivial target shows how miserable the writer feels.',
    },
  'The Night Ferry: Which judgement about the elderly woman does the passage best support?': {
    why: "While the ship lurches, she 'simply lifted her needles a little, waited, and carried on', as if she has done it many times. Her quiet kindness, handing over a ginger biscuit 'without a word', is practical and unfussy, the manner of someone who knows these crossings well.",
    not: {
      'She is rude, since she never says a single word to the writer':
        "She gives the biscuit 'without a word', but she does speak at dawn, and her silence is kindly, not rude.",
      'She is far too frightened of the sea to move from her seat':
        "She is the one passenger who 'seemed untroubled'. Staying calmly in her seat shows confidence, not fear.",
      'She is a member of the crew who has been sent to look after passengers':
        "She is described as a 'passenger', knitting by the window. Nothing suggests she works on the ferry.",
    },
    more: "A calm character beside a suffering narrator is a classic comic pairing. Her stillness makes the writer's misery funnier, and her kindness gives the story its warmth.",
    tip: 'Judge a character by what they do as well as what they say. This woman barely speaks, so her actions, the needles and the biscuit, are your evidence.',
  },
  "The Night Ferry: How does the writer's view of the journey at the end differ from the middle of the passage?":
    {
      why: "In the middle the night is miserable: the floor rises and falls, and passengers hide under their coats. At dawn the sea is 'a sheet of hammered silver' and the island rises 'out of the dawn'. When the woman says 'Worth it', the writer agrees: 'she was right'.",
      not: {
        'The writer regrets the whole trip and plans to fly home next time':
          "The writer agrees the trip was 'Worth it'. Nothing suggests regret or plans to fly.",
        'The writer still feels just as ill at dawn as during the storm':
          "The sea has 'flattened', and the writer has slept and woken to a beautiful view. The misery belongs to the night.",
        'The writer finds the island dull and flat after the drama at sea':
          "The island is described with wonder: 'a long green back, a scatter of white houses'. Nothing is dull about it.",
      },
      more: 'Many travel pieces follow a journey from hardship to reward. The contrast makes the ending more satisfying: the reader has suffered the night alongside the writer.',
      tip: "In a comparison question, quote one detail from each part and name the change: 'from the lurching lounge to the hammered silver of dawn, misery becomes wonder'.",
    },
  'The Swifts Return: According to the article, where do swifts nest?': {
    why: "The article says that when a swift comes down, 'it will be to a gap under the roof of a building', and that swifts squeeze 'into the spaces under tiles and eaves'.",
    not: {
      'High in the branches of tall trees':
        'Many birds nest in trees, but the article says swifts use gaps in buildings, under tiles and eaves.',
      'On the ground among long grass':
        'A swift does almost everything in the air and nests high under roofs, not on the ground.',
      'In holes dug into the banks of rivers':
        'Swifts skim rivers to drink, but they nest in buildings. Holes in riverbanks belong to other birds.',
    },
    more: 'Retrieval questions sometimes offer facts that are true of other things, here other birds. The answer must be what this article says about this bird.',
    tip: "Find the sentence that answers the question and check its exact words: 'a gap under the roof of a building'. Then answer in your own words.",
  },
  'The Swifts Return: What does "tearing across the sky as if they were late for something" suggest about the swifts?':
    {
      why: "'Tearing' suggests great speed and force, and 'as if they were late for something' adds urgency and purpose, as though the birds had somewhere important to be. The image captures the swifts' fast, dashing flight and the writer's delight in it.",
      not: {
        'They are injured and flying about the sky in panic':
          "Nothing suggests injury. 'Tearing' shows speed and energy, and the writer is delighted to see them.",
        'They are lost and searching for the way home':
          "They have just 'returned'; they are home. Being 'late for something' suggests purpose, not being lost.",
        'They are ripping holes in the clouds as they go':
          "This takes 'tearing' literally. Here it means moving very fast, not ripping.",
      },
      more: "Comparing animals to busy, hurrying people is a light form of personification. It makes the birds seem full of character and helps the reader share the writer's excitement.",
      tip: "Some words have two meanings. Say which one the writer uses: 'tearing' here means rushing, and 'as if they were late' confirms it.",
    },
  'The Swifts Return: What does the third paragraph do in the article as a whole?': {
    why: "'That is where the trouble starts' marks the turn. Until now the article has celebrated how 'strange' and remarkable swifts are; the third paragraph introduces the problem they face, the loss of the gaps where they nest.",
    not: {
      'It explains how swifts eat, drink and sleep in the air':
        "That is the second paragraph. The third turns to a problem: 'That is where the trouble starts'.",
      'It offers the reader a simple way to help the birds':
        "The help comes in the next paragraph, which begins 'The good news'. The third describes the problem.",
      "It describes the writer's first sight of the birds this year":
        "That is the opening paragraph, with the 'three dark crescents' over the rooftops.",
    },
    more: "Many articles follow a pattern of wonder, problem and solution. Signposts such as 'That is where the trouble starts' tell the reader the article is changing direction.",
    tip: "When asked what a paragraph does, describe its job in the whole text, not just its content: 'It shifts the focus from celebration to the threat the birds face.'",
  },
  "The Swifts Return: What is the writer's main purpose in the article?": {
    why: "The article celebrates the birds, explains the threat to their nest sites, then offers 'the fix': a swift brick or a nest box that costs 'about as much as a meal out'. Everything builds to persuading readers to care about swifts and act to help them.",
    not: {
      'To explain the science of how swifts manage to sleep in flight':
        "Sleeping on the wing is one fascinating fact among many, and the writer says only 'it is thought'. It is not the article's aim.",
      'To complain that modern houses are badly built and ugly':
        "The writer says modern houses are 'built tight', which leaves no gaps, not that they are badly built or ugly.",
      'To describe a summer spent watching birds in the garden':
        'The garden moment opens the article, but most of it explains a problem and a solution.',
    },
    more: 'Nature columns often combine information, description and persuasion. Here the facts create wonder, and the wonder gives the reader a reason to act.',
    tip: "To find a writer's main purpose, look at where the article ends up: the final paragraphs usually reveal what the writer wants the reader to think or do.",
  },
  "The Swifts Return: Which quotation best suggests that the swifts' return means something to the writer beyond the birds themselves?":
    {
      why: "For the writer, the swifts' return means more than birds: it means summer itself, 'a promise somebody intended to keep'. The other quotations are about the birds, their habits, their strangeness, their future; only this one shows what their arrival means beyond them.",
      not: {
        'It eats there, snapping up insects as it flies':
          'This is a fact about how swifts feed. It shows nothing about what they mean to the writer.',
        'It is hard to overstate how strange these birds are':
          'This shows wonder at the birds themselves, not what they stand for.',
        'I would like them to find a home waiting when they come back':
          "This is a wish for the birds' sake. It shows care for them, not a meaning beyond them.",
      },
      more: 'In nature writing, an animal often stands for something larger: a season, hope, the passing of time. Spotting that symbolic meaning is the mark of a careful reader.',
      tip: "When a question says 'beyond', look for the quotation that links the subject to something else, here summer and hope, and explain the link.",
    },
  'The High Board: How does Nadia know that the ladder has forty-two rungs?': {
    why: "Nadia knows 'because she had counted them every Thursday for a month', each time she tried the climb. Counting the rungs again and again shows how many times she has stood at the bottom of this ladder.",
    not: {
      'Mr Okafor told her before she began to climb':
        'Mr Okafor has not even looked up. Nadia knows the number because she has counted the rungs herself, every Thursday.',
      'A sign at the bottom of the ladder says so':
        'No sign is mentioned. The number comes from her own counting, week after week.',
      'She counts them for the first time tonight':
        "She has counted them 'every Thursday for a month'. Tonight is the latest of many attempts, not the first.",
    },
    more: 'Opening with a precise number makes the reader wonder why it matters. The answer, that she has counted the rungs every week, quietly tells us how long this fear has been with her.',
    tip: "In retrieval questions, check the time words: 'every Thursday for a month' rules out 'the first time tonight'. Small details of time are often what a question tests.",
  },
  'The High Board: What is the effect of the sentence "Her body had opinions about this"?': {
    why: "Saying her body 'had opinions' turns her fear into a voice of its own, arguing with her: her knees turn 'to string' and her heart pounds so that she feels it 'in her teeth'. Treating the fear as separate from her makes the jump feel like overruling a stubborn opponent.",
    not: {
      'It shows that she is calm and fully in control of herself':
        "Her knees 'had turned to string' and her heart is racing. Her body is anything but calm.",
      'It suggests that she has hurt herself on the long climb up':
        "Nothing suggests an injury. Her body's 'opinions' are the physical signs of fear.",
      'It shows that she is thinking hard about her technique':
        'The sentence is about fear, not technique. It is her body, not her training, that is speaking.',
    },
    more: 'Personifying a feeling, giving it a voice or opinions, is a vivid way to show inner conflict. It also adds a dry humour that keeps the scene from being only frightening.',
    tip: 'When a writer separates a character from her own feelings, explain the effect: the reader sees a struggle between two sides of one person.',
  },
  'The High Board: Why does the writer use very short sentences in the fifth paragraph?': {
    why: "The paragraph before is a long, rushing account of what her body wants. Then come three short sentences: 'She looked at her toes, curled over the edge. She thought of every Thursday. Then she stopped thinking.' They cut that noise off, so the decision happens almost before we see it.",
    not: {
      'To show that she has frozen and will climb back down':
        "The next paragraph shows that she jumps: 'When she came up, gasping and laughing'. The short sentences lead to the leap, not a retreat.",
      'To slow the pace, because nothing at all is happening':
        'Something decisive happens: she stops thinking and jumps. The short sentences mark that moment.',
      'To list the steps of a correct diving technique':
        "The sentences describe her mind, not a technique. 'Then she stopped thinking' is about a decision, not a method.",
    },
    more: 'Changing sentence length is a structural tool. Long sentences can carry rushing thoughts; a sudden run of short ones can show a mind going quiet and a choice being made.',
    tip: "When you write about sentence length, link it to meaning: 'The short sentences mirror her mind clearing, so the leap feels sudden and certain.'",
  },
  'The High Board: Which judgement about Mr Okafor does the passage best support?': {
    why: "Mr Okafor 'had not looked up once since she began to climb', and Nadia understands that this is 'deliberate': he gives her space so that she does not feel watched. Earlier he told her that fear is normal, and when she surfaces he is quietly smiling.",
    not: {
      'He has forgotten that Nadia is still in the pool':
        "Nadia knows his not looking up is 'deliberate', and he is smiling when she surfaces. He has not forgotten her.",
      'He is impatient to close the pool and go home':
        'He is stacking floats, but calmly, whistling an old tune. Nothing suggests impatience.',
      'He thinks her fear is silly and best ignored':
        "He told her that 'The day it stops being frightening... is the day you should worry.' He treats her fear as natural.",
    },
    more: "A character can be revealed by what he chooses not to do. Mr Okafor's restraint shows that he understands Nadia better than any words of encouragement could.",
    tip: "Look for words that tell you how to read an action: here 'deliberate' changes not looking up from neglect into kindness. Quote such words in your judgement.",
  },
  "The High Board: Which quotation best shows that Nadia's fear tempts her with safety?": {
    why: "Her fear's argument ends with safety: 'out into the car park, where nothing was high and nothing was deep'. The repeated 'nothing' makes an ordinary car park sound like a refuge, which shows how strongly her fear pulls her back towards safe ground.",
    not: {
      'At the top, the platform was narrower than it had looked from the ground':
        'This shows how exposed she feels at the top, but it is not her fear offering her a safe way out.',
      'She made herself walk to the very end':
        'This shows her courage overriding fear, the opposite of being tempted back to safety.',
      'her heart was going so fast that she could feel it in her teeth':
        'This shows the physical force of her fear, but not what it is tempting her towards.',
    },
    more: 'Writers often show temptation through a picture of comfort: a warm room, a familiar place. Here a plain car park becomes appealing because it is the opposite of high and deep.',
    tip: "In a best-evidence question, look for the quotation that matches the whole claim. 'Fear' and 'safety' must both be there; the car park line gives both.",
  },
  'The Workshop: Why is the workshop being cleared?': {
    why: "Grandad is moving to 'the flat at Elmfield', and 'The van would come in the morning'. Everything must be cleared before he goes, because a flat has no room for a workshop. That is why the benches are 'bare' by four o'clock.",
    not: {
      'Grandad has sold all his tools to pay for a holiday':
        'He gives his chisels to Leo; nothing is sold. He is moving to a flat, not going on holiday.',
      'The workshop is unsafe now and will have to be pulled down':
        'Nothing suggests the building is unsafe. It is being emptied because Grandad is moving away.',
      "Leo's mum wants to turn it into a room for herself":
        "Leo's mum talks about the new flat, not about using the workshop. The clearing is for Grandad's move.",
    },
    more: 'Writers often reveal a situation in fragments rather than explaining it at once. Here the move to Elmfield and the van in the morning are mentioned in passing, and the reader puts them together.',
    tip: 'Inference questions often need two clues joined together. Quote both, the flat and the van, and say what they add up to.',
  },
  'The Workshop: What does the simile "like a shoe made for somebody else" suggest?': {
    why: "The chisel handles are 'worn pale and smooth where his grandfather's thumb had pressed, for sixty years, in exactly the same place'. So the handle fits Leo's hand 'badly', the way a shoe moulds to one person's foot. The simile shows how deeply Grandad's life is pressed into his tools.",
    not: {
      'Leo is still too young to be trusted with such sharp tools':
        'The simile is about fit, not trust. At the end Grandad gives Leo the chisels himself.',
      'The chisel is broken and ought to be thrown away':
        'Nothing is broken. The handle fits badly only because it has shaped itself to another hand.',
      'Leo dislikes woodwork and wants to go home as soon as he can':
        "Nothing shows that Leo dislikes woodwork. The simile is about the tool, shaped by years of Grandad's use.",
    },
    more: "A worn object can hold a person's history. A handle shaped by sixty years of one thumb tells the reader more about Grandad's life than a paragraph of description could.",
    tip: "Read a simile with the sentence before it: the worn handle explains why it fits Leo 'badly'. Use the context to show what the comparison means.",
  },
  'The Workshop: What is the effect of the short fragments describing the shelves, such as "Jam jars of screws, sorted by size"?':
    {
      why: "Each fragment names one thing, 'Jam jars of screws, sorted by size. Tins of nails, rusted at the seams.', as if Leo were picking up each object in turn. The broken-up sentences slow the reader to the pace of someone taking stock of a lifetime's belongings.",
      not: {
        'They show that Leo is rushing to finish the job quickly':
          "Short fragments can feel quick, but here each one pauses on a detail, 'sorted by size', 'rusted at the seams'. The effect is careful, not hurried.",
        'They list all of the things that Grandad wants thrown away':
          'Nothing says which things are to be thrown away. The chisels, at least, are kept and given to Leo.',
        'They show that the workshop is messy and disorganised':
          "The screws are 'sorted by size' and the chisels laid out on felt. The workshop is orderly.",
      },
      more: 'Fragments, sentences without a main verb, can work like a list or an inventory. They make each item stand alone, so the reader notices it.',
      tip: 'If you write about fragments, say what the missing verb does: without action, the focus falls entirely on the objects themselves.',
    },
  'The Workshop: Which judgement about Grandad does the passage best support?': {
    why: "Grandad speaks briskly, 'Let's not make a meal of it', but 'he did not come in'. Later he looks at the dust on the empty shelf 'for a long time', and at the end 'His voice was perfectly steady. It was his hands that were not.' His words hide what his body shows.",
    not: {
      'He is relieved to be rid of the old workshop at long last':
        "'Let's not make a meal of it' sounds brisk, but he cannot bring himself to come in, and his hands shake. That is sadness, not relief.",
      'He is angry with Leo for touching and moving his tools':
        'He stays in the doorway and gives Leo his chisels at the end. Nothing suggests anger.',
      'He no longer cares about woodwork or his tools':
        "He looks at the dust 'for a long time' and hands over his chisels with care. He cares deeply.",
    },
    more: 'A gap between what a character says and what his body does is a classic way to show hidden feeling. The final sentence saves the clearest sign, his hands, for last.',
    tip: "When a character's words and actions disagree, trust the actions, and say so: 'His steady voice hides grief that his shaking hands reveal.'",
  },
  "The Workshop: Why does the writer include Leo's mum's words in the car?": {
    why: "Leo's mum speaks 'brightly, for the third time' about the balcony and tomatoes, trying to make the move sound good. Leo knows better: Grandad 'wanted this', the squeaking vice, the taped radio, the cobwebbed window. Setting her hopes against what he will miss shows how much the move costs him.",
    not: {
      'To show that Grandad is really looking forward to growing tomatoes':
        "The tomatoes are Leo's mum's idea. Leo knows 'that Grandad did not want a balcony'.",
      "To show that Leo's mum does not care about Grandad at all":
        'She cares; that is why she keeps talking brightly about the flat. She is trying to cheer everyone up, perhaps herself too.',
      "To explain where all of Grandad's tools will be stored":
        'The tools are never mentioned in her words. She talks about a balcony and tomatoes.',
    },
    more: "Including another character's view, even in a memory, lets a writer contrast two ways of seeing one event. The reader trusts Leo, who notices what his mother misses.",
    tip: "In a comparison question, name both sides and the gap between them: 'Mum's cheerful talk of tomatoes contrasts with the workshop Grandad really wants.'",
  },
  'Teenagers and Sleep: According to the article, why does a teenager sent to bed at ten often lie awake?':
    {
      why: "The article explains that 'the body clock shifts later' in the teenage years: 'The hormone that makes us feel sleepy is released later in the evening'. So a teenager sent to bed at ten can lie awake 'feeling entirely alert'.",
      not: {
        'They are lying awake worrying about the exams they have coming up':
          'Exams are mentioned later, as a reason why tiredness is so costly, not as the cause of lying awake.',
        'They have eaten a late snack just before they went up to bed':
          'Late snacking is mentioned later as something that makes the problem worse. The reason given for lying awake at ten is the body clock.',
        'Their bedroom is too light and too noisy to sleep in':
          "Light and noise are never mentioned. The article blames a hormone released 'later in the evening'.",
      },
      more: 'Articles that argue a case often anchor it in a clear, simple fact early on. Here the body clock explains the scene in the first paragraph and prepares for the argument that follows.',
      tip: "When a retrieval question asks 'why', the answer is usually a cause the text states. Look for linking words such as 'which is why'.",
    },
  'Teenagers and Sleep: What is the effect of the simile "like someone wading through wet cement"?':
    {
      why: "Wading through wet cement is slow, heavy and exhausting: every step takes effort. The simile makes the teenager's tiredness feel physical and almost comic, which helps the reader sympathise rather than judge.",
      not: {
        'It suggests that the teenager is lazy and unwilling':
          "'Lazy' is the parent's word, and the article sets out to challenge it. The simile shows how hard moving is, not unwillingness.",
        'It shows that the bathroom floor is wet and very slippery':
          'This reads the simile literally. The cement describes how heavy the teenager feels, not the floor.',
        'It shows that the teenager is cold after a shower':
          'The teenager is on the way to the shower, not out of it. The image is about heaviness, not cold.',
      },
      more: "A vivid simile in an opening scene can set the reader's sympathies. Here it quietly takes the teenager's side before the argument has even begun.",
      tip: "Explain what the two things in a simile share: here slowness and effort. Then say how that changes the reader's view of the person described.",
    },
  'Teenagers and Sleep: Why does the writer open with a scene of a morning at home?': {
    why: "The opening describes an alarm going off twice, a parent knocking and the word 'lazy', 'in houses up and down the country'. Many readers will recognise the scene from their own homes, which draws them in before the explanation begins.",
    not: {
      'To prove with evidence that teenagers really are lazy':
        "The article goes on to challenge the word 'lazy'. The opening scene sets up a view that the writer will question.",
      "To describe the writer's own life when they were a teenager":
        "The scene happens 'in houses up and down the country', not in the writer's own past.",
      'To explain the science of the body clock straight away':
        'The science comes in the second paragraph. The opening is a familiar scene, not an explanation.',
    },
    more: 'Opening with a familiar scene builds a connection with readers before asking them to change their minds. It is a common start for newspaper features.',
    tip: "In your own articles, try opening with a scene your reader knows well. Then turn it, as this writer does with 'It is tempting to see this as...'",
  },
  "Teenagers and Sleep: Which statement best describes the writer's viewpoint?": {
    why: "The writer says tiredness is 'mostly a matter of biology', but also admits that 'Screens in bedrooms, late-night snacking and lie-ins' make it worse and are 'things a family can change'. The view is firm but balanced: chiefly biology, with habits playing a part.",
    not: {
      'Teenagers are just lazy, and they need firmer rules at home':
        "The article ends its argument with 'we could stop treating a tired teenager as a lazy one'. It rejects this view.",
      'Teenage tiredness is mostly habit, though biology plays a part':
        "This turns the writer's view round. Tiredness is 'mostly a matter of biology'; habits such as screens in bedrooms only 'make the problem worse'.",
      'Teenagers need far less sleep than most of their parents believe':
        "The article says most teenagers need 'between eight and ten hours', and many get 'far less'. They need more, not less.",
    },
    more: 'Admitting a point against yourself, here that habits matter too, makes an argument more convincing. Readers trust a writer who does not claim that one cause explains everything.',
    tip: "Viewpoint answers are often two-part: the main view and its limit. Words such as 'mostly' and 'None of this means' show where a writer qualifies a claim.",
  },
  'Teenagers and Sleep: What does the final phrase, "on a timetable that nobody consulted it about", suggest?':
    {
      why: "The body 'is working exactly as it was designed to', but the timetable it must follow, early school mornings, was set without asking it. The final phrase suggests that the problem lies in the hours imposed on teenagers, not in teenagers themselves.",
      not: {
        'That teenagers should be allowed to write their own timetables':
          'The article never suggests that teenagers set their own hours. Its point is that the hours ignore their biology.',
        'That the body does not follow any kind of timetable at all':
          'The body has its own timetable, the body clock; it is the school timetable that does not match it.',
        'That teenagers ignore the rules that their parents make':
          'The phrase is about the body and the timetable, not about obeying parents.',
      },
      more: 'A strong final line often personifies the subject or turns the argument round. Here the body is like a worker forced onto a shift nobody asked it about.',
      tip: 'When asked about a final phrase, explain both its literal meaning and its job in the argument: it shifts the blame from teenagers to the timetable.',
    },
  "The First Day: What does the writer's mother's smile reveal?": {
    why: "The writer says the smile was 'so bright and so brave that I knew she was frightened too'. A smile that has to be brave is covering fear, and even a nine-year-old can see it.",
    not: {
      'That she is relieved to be leaving the school':
        "A relieved smile would not need to be 'brave'. The bravery shows that she is hiding something harder.",
      'That she is proud her child already speaks English':
        'The child knows only four things to say in English. Her smile is brave, not proud.',
      'That she is cross with the teacher for talking fast':
        'The teacher speaks after she has gone. Her smile is for her child, and it hides fear, not anger.',
    },
    more: "Children in memoirs often notice more than adults expect. 'I knew she was frightened too' tells us the writer was frightened as well, without saying so directly.",
    tip: "Look at how an adjective changes a noun: a 'brave' smile is very different from a happy one. Explain what the adjective reveals.",
  },
  'The First Day: What does the metaphor "English was not a language. It was weather" suggest?': {
    why: "Weather is all around you and you cannot stop it. Calling English 'weather', 'a steady drizzle of sound with no gaps in it', suggests the words surrounded the writer all day, constant and impossible to understand, so that 'I stood in it and got wet'.",
    not: {
      'That English people talk about the weather all the time':
        'The metaphor is about how the language felt to a child who did not understand it, not about what English people discuss.',
      "That the writer only knew words about the weather, like 'umbrella'":
        "'Umbrella' was one of only four things the writer could say, but the metaphor is about the sound of English, not its subjects.",
      "That it rained every single day of the writer's first week":
        "This reads the metaphor literally. The 'drizzle' is a drizzle of sound, not rain.",
    },
    more: 'A metaphor that turns something abstract, a language, into something physical, rain, helps readers feel an experience they may never have had.',
    tip: "Extend your analysis by following the metaphor through the passage: 'drizzle', 'no gaps', 'got wet'. Each detail adds to the picture.",
  },
  'The First Day: Which word most suggests the effort that listening took?': {
    why: "'Every evening I went home with a headache from listening so hard.' The headache shows that understanding took real physical effort: hours of straining to catch words left the writer exhausted.",
    not: {
      "'drizzle', because the words were soft and pleasant":
        'The drizzle is a metaphor for constant, meaningless sound. It is not pleasant, and it does not show effort.',
      "'rescued', because Ruth saved the writer from danger":
        "'Rescued' is about Ruth's help, not the effort of listening, and there is no real danger.",
      "'patient', because the writer waited calmly and quietly to learn":
        "It is Ruth who is 'patient'. The writer was listening so hard it hurt, which is the opposite of calm waiting.",
    },
    more: 'Memoirs often show emotional strain through physical symptoms: a headache, a knot in the stomach. The body makes the feeling concrete.',
    tip: "In a 'which word' question, check whose word it is and what it describes. Two of these words belong to Ruth, not to the effort of listening.",
  },
  'The First Day: Which judgement about Ruth does the passage best support?': {
    why: "'She did not try to teach me anything. She simply sat next to me at lunch, every day, and named things.' Ruth's help is quiet and steady, and 'she never once laughed at my accent'. Within a month, the writer knew 'the name of everything on the lunch table'.",
    not: {
      'She had been told by the teacher to look after the new pupil':
        "Nothing says a teacher asked her. She chooses to sit with the writer 'every day'.",
      "She found the writer's accent funny but kept it hidden":
        "'She never once laughed at my accent.' Nothing suggests she found it funny.",
      'She was lonely and wanted someone to sit with at lunch':
        "Nothing tells us about Ruth's own feelings. The passage shows what she gives, not what she needs.",
    },
    more: "Small, repeated acts of kindness often matter more in memoir than grand gestures. 'Every day' shows Ruth's patience, and 'though she would never have used that word' shows her modesty.",
    tip: "Support a judgement about a character with what they do repeatedly. 'Every day' turns one kind act into a pattern, which is strong evidence.",
  },
  'The First Day: Why does the writer end with the question "Do you want to play?" and the answer yes?':
    {
      why: "On the first day the writer said 'Yes' without understanding a word. At the end, asked 'Do you want to play?', the writer says yes 'and for the first time it was true'. The ending echoes the beginning, so the reader feels how far the writer has come.",
      not: {
        "It shows that the writer still knew only the one English word 'yes'":
          "By now the writer knows the names of everything on the lunch table. The point is that this 'yes' is finally meant.",
        'It shows that Ruth had taught the writer to play games':
          'Ruth taught names, not games. The ending is about understanding and belonging, not the game itself.',
        'It shows that the playground was where lessons happened':
          "The playground is simply where it happened. What matters is that the writer understood, and the 'yes' was true.",
      },
      more: 'A circular structure returns at the end to something from the beginning, changed. It gives a piece a satisfying shape and shows the change in a single moment.',
      tip: 'Look for echoes between the opening and the ending. Quote both, then explain what has changed between them: here an empty word becomes a true one.',
    },
  'Should Zoos Still Exist?: What happened to the Arabian oryx, according to the article?': {
    why: "The article says the Arabian oryx 'had been wiped out in the wild', but 'was bred in captivity and returned to the deserts of the Middle East'. It is the writer's example of a species that exists today partly because of zoos.",
    not: {
      'It died out completely and can no longer be saved':
        'It died out in the wild, but survived in captivity and was returned. The article presents it as a success.',
      'It was taken from the desert to live in a safari park':
        "The movement was the other way: bred in captivity, then 'returned to the deserts'.",
      'It is still common in the deserts of the Middle East':
        "It 'had been wiped out in the wild' before being returned. The article does not say it is common now.",
    },
    more: 'One well-chosen example can carry an argument. The oryx gives the case for zoos a concrete success story instead of a vague claim.',
    tip: 'In retrieval, follow the whole sequence of events: wiped out, bred, returned. An option that gets one step wrong is a common trap.',
  },
  "Should Zoos Still Exist?: Why does the writer open with two visitors' comments at the tiger enclosure?":
    {
      why: "One visitor says 'Isn't she beautiful', the next 'Poor thing', and 'They are looking at the same animal'. In a few words the opening shows that the same sight divides people, which is the debate the article goes on to explore.",
      not: {
        'To prove that the tiger is unwell and unhappy in its cage':
          "One visitor finds the tiger 'beautiful'. The opening shows two views, not a fact about the tiger's health.",
        'To describe a typical family day out at the zoo':
          'There is no family outing here. The two comments are chosen because they disagree.',
        'To show that most visitors to zoos dislike them':
          'One visitor admires the tiger and one pities it. Two voices cannot show what most visitors think.',
      },
      more: "Opening with a tiny scene that contains the whole argument is a neat structural device. 'One is thinking about stripes. The other is thinking about bars.' sums up the debate in two sentences.",
      tip: 'When asked why a text opens a certain way, say how the opening links to the whole: here it introduces both sides before the article weighs them.',
    },
  'Should Zoos Still Exist?: What does "the same circuit walked a thousand times" suggest about the animal?':
    {
      why: "Keepers recognise pacing 'along one stretch of fence' as one of 'the signs of an animal that is coping badly'. 'The same circuit walked a thousand times' exaggerates to show endless, pointless repetition, a sign of an animal in distress.",
      not: {
        'It is exercising carefully to stay fit and healthy':
          "The writer lists the pacing among 'the signs of an animal that is coping badly'. It is distress, not healthy exercise.",
        'Its keepers walk it round a set route each day':
          'The animal walks the circuit itself, along its fence. The keepers only recognise what it means.',
        'It has walked exactly a thousand laps of its cage':
          "'A thousand times' is exaggeration for 'endlessly', not an exact count.",
      },
      more: "Hyperbole such as 'a thousand times' is common in argument writing. It turns a fact into an image that sticks in the reader's mind.",
      tip: 'When a number seems too round to be exact, consider whether it is hyperbole. Then explain what the exaggeration emphasises.',
    },
  'Should Zoos Still Exist?: How does the writer make the article seem balanced?': {
    why: "The second paragraph makes 'the case for zoos', with the oryx as its best example; the third begins 'And yet the critics have a point' and gives the pacing tiger and the elephants. Each side gets its own paragraph and its strongest evidence before the writer gives a view.",
    not: {
      'By quoting several experts who disagree with one another':
        'No experts are quoted. The only quoted voices are the two visitors at the start.',
      "By refusing to give any opinion of the writer's own at all":
        'The writer does give a view at the end. Balance comes from treating both sides fairly first.',
      'By setting out statistics both for and against keeping zoos':
        'There are no statistics. The article uses examples, such as the oryx and the pacing tiger.',
    },
    more: "A balanced, or discursive, article weighs both sides before reaching a judgement. Signposts such as 'And yet' mark the turn from one side to the other.",
    tip: 'To show how a text is balanced, point to its structure: which paragraph argues which side, and which words mark the turn.',
  },
  "Should Zoos Still Exist?: Which statement best sums up the writer's conclusion?": {
    why: "The writer concludes that the word 'zoo' 'covers too many different places to be judged as one', and that the real question is 'which ones, and for which animals'. A zoo should be able to show how a creature's life 'is better because it is there'.",
    not: {
      'All zoos are cruel and should be closed as soon as possible':
        "The writer gives a strong case for some zoos, such as those that saved the oryx. 'All' goes too far.",
      'All zoos are good, because they save species from extinction':
        "The writer admits that some animals 'do poorly in captivity' and that roadside attractions differ from scientific centres.",
      'The question is far too difficult for anyone to answer fairly':
        'The writer does answer it: judge each zoo by what it does for its animals.',
    },
    more: "A conclusion that reframes the question, 'not whether... but which', is a mature way to end an argument. It moves the debate on instead of simply picking a side.",
    tip: "When summing up a conclusion, look for a 'not whether X, but Y' pattern: the writer's real answer is usually in the Y.",
  },
  'Our River: What did the speaker and their granddaughter find in the shallows?': {
    why: "The speaker took the granddaughter to see the ducks, 'and instead we found a shopping trolley, two tyres and a sofa cushion, sitting in the shallows as if they had been invited'. The ordinary household rubbish makes the state of the river feel close to home.",
    not: {
      'Young fish, ducks and a kingfisher by the footbridge':
        "They went to see the ducks, but 'instead' they found rubbish. The young fish and the kingfisher appeared later, by June, after the clean-up.",
      'A broken bridge and the wall of a closed factory':
        'The bridge and factory appear only in a comparison: a river is not like them, because it can mend itself.',
      'A van that had been filled with rubbish eleven times':
        'The van was filled during the clean-up that followed. It was not found in the shallows.',
    },
    more: 'Concrete, everyday details persuade better than general complaints. A sofa cushion in a river is easy to picture, and slightly funny, which keeps the audience listening.',
    tip: 'When a list appears in a retrieval question, check that every item in your answer comes from the right moment in the text. Lists from different times are a common trap.',
  },
  'Our River: What is the effect of describing the kingfisher as "like a spark of blue thrown along the water"?':
    {
      why: "A spark is bright, small and quick, and 'thrown along the water' suggests a flash of movement. The simile makes the kingfisher's return feel like a burst of life and hope, proof that the clean-up has worked. 'A real kingfisher' adds the speaker's own delight.",
      not: {
        'It suggests that the kingfisher is in danger from a fire':
          "This reads 'spark' literally. The comparison is about the bird's colour and speed, not fire.",
        'It shows that the water is still too dirty for any birds':
          "The kingfisher's return shows the opposite: the river is recovering. Kingfishers need fish to feed on.",
        'It suggests the bird was too fast to have really been seen':
          "The speaker insists it was 'a real kingfisher' and that it 'was seen'. Its speed adds to the wonder, not to doubt.",
      },
      more: 'Bright images of nature returning are a powerful persuasive tool: they show the audience what success looks like, so the next step feels worthwhile.',
      tip: "Explain the connotations of the key word: a 'spark' is bright, quick and full of energy, and can start something bigger. Link that to the speaker's purpose.",
    },
  'Our River: Why does the speaker begin with a question to the audience?': {
    why: "'When did you last look at the river? Not glance at it from the bridge... but really look at it?' The question makes each listener admit that they have walked past the river without noticing it, which prepares them for the problem the speaker will describe.",
    not: {
      'To find out who in the audience has visited the river lately':
        'The speaker does not want a show of hands. It is a rhetorical question, asked to make people think.',
      "To test whether the audience knows the town's history":
        'The question is about looking at the river now, not about history.',
      'To fill the time until the match on television is over':
        "The speaker promises to 'be quick' because of the match. The question is a way into the argument, not a delay.",
    },
    more: 'A rhetorical question expects no spoken answer. Asked at the start of a speech, it makes the audience think about themselves straight away, which draws them in.',
    tip: 'When you analyse a rhetorical question, say what answer the speaker expects listeners to give in their heads, and how that answer serves the argument.',
  },
  'Our River: Why does the speaker say the rubbish was put there by "all of us, a little at a time, mostly without meaning to"?':
    {
      why: "The speaker could have blamed someone, but instead says 'all of us', the speaker included, and adds 'mostly without meaning to'. Sharing the blame gently means that nobody in the audience feels accused, so they are more willing to help put things right.",
      not: {
        'To accuse the audience of dumping the rubbish on purpose':
          "'Mostly without meaning to' rules out deliberate dumping, and 'all of us' includes the speaker too.",
        'To excuse the council for failing to clean the river':
          'The council is never mentioned. The speech asks ordinary people to act, not to excuse anyone.',
        'To suggest that the rubbish appeared there by itself':
          "'As if they had been invited' is a joke about how the rubbish looked. The speaker says plainly that people put it there.",
      },
      more: "Inclusive pronouns such as 'we' and 'us' build a sense of shared responsibility. Persuaders use them to turn an audience from bystanders into a team.",
      tip: 'When a speaker chooses who to blame, consider the audience: blaming them would push them away, so sharing the blame keeps them on side.',
    },
  'Our River: Which quotation best shows that the speaker makes the request small and easy to agree to?':
    {
      why: "'Not your money, not your weekends for ever: one morning.' The speaker lists the bigger things the audience might fear being asked for, then shrinks the request to 'one morning'. A small, clear request is much harder to refuse.",
      not: {
        'Imagine what a hundred of us could do':
          'This makes the vision bigger, not the request smaller. It inspires rather than reassures.',
        'We filled that van eleven times':
          'This shows how much rubbish there was and what the group achieved. It does not make the request easier.',
        'it will mend itself astonishingly fast':
          'This is about how quickly the river can recover, not about how little the speaker is asking.',
      },
      more: 'Shrinking a request is a well-known persuasive technique: once people agree to something small, they often go on to give more.',
      tip: 'In a best-evidence question about persuasion, look for the quotation that does exactly what the claim describes, here making the request small.',
    },
  'Camping: A Confession: How long did the family spend struggling with the new tent?': {
    why: "The tent was meant to be 'a two-minute pitch', but 'For the next hour and a half' the family struggled with it, while the rain 'stopped threatening and started'. The real time makes a joke of the promise.",
    not: {
      "Two minutes, as the tent's makers had promised":
        "Two minutes was only how long it took 'for the instructions to blow into a hedge'. The struggle took far longer.",
      'All night, until the rain finally stopped at six':
        'Six in the morning is when the rain stopped, after a night spent in the tent. The struggle to pitch it lasted an hour and a half.',
      'Ten minutes, with help from a torch and the poles':
        "The torch and the poles were held 'For the next hour and a half', not ten minutes.",
    },
    more: "Comic writing often sets up an expectation and then knocks it down. 'A two-minute pitch' is the set-up; the hour and a half in the rain is the punchline.",
    tip: "Read numbers and times in context: here 'two minutes' belongs to the instructions, not the tent. Quote the phrase that answers the question exactly.",
  },
  'Camping: A Confession: What is the effect of "my mother held the poles, my sister held the torch and my father held forth"?':
    {
      why: "The sentence repeats 'held': the poles, the torch, and then 'held forth', which means talked at length. The pattern leads the reader to expect a third object, then turns into a joke about the father's endless complaining about the people who design tents.",
      not: {
        'It shows that the family worked well together as a team':
          'Two of them hold things, but the father only talks. The sentence is a joke at his expense, not praise for teamwork.',
        'It shows that the father was holding the instructions':
          'The instructions had already blown into a hedge. To hold forth is to talk, not to hold something.',
        'It lists the jobs in order, from the most to the least important':
          "The order builds to a joke, not a ranking of jobs. The last 'job' is not a job at all.",
      },
      more: "Using one word in two senses within a list, here 'held' and 'held forth', is a kind of wordplay. It rewards the reader who notices the shift.",
      tip: 'When a list repeats a word, check whether its meaning changes. If it does, explain the surprise and the humour it creates.',
    },
  'Camping: A Confession: What does the comparison to "a nature documentary about animals that are not going to make it" suggest about the neighbours?':
    {
      why: "The neighbours watch from their warm, lit motorhome over a roast dinner, with 'the gentle pity of people watching a nature documentary about animals that are not going to make it'. They feel sorry for the soaked family, but from a comfortable distance, as viewers feel for animals on a screen.",
      not: {
        'They are filming the family for a television programme':
          'This takes the comparison literally. They are compared to people watching a documentary, not making one.',
        'They are afraid that the family is in real danger':
          "The family's struggle is uncomfortable, not dangerous, and the neighbours carry on with their dinner. Their pity is 'gentle', not alarmed.",
        'They are annoyed by all the noise that the family is making':
          "Nothing suggests annoyance. Their look is 'gentle pity', not irritation.",
      },
      more: "Comparing people to wildlife on television is a comic reversal: the writer's own family becomes the doomed animals. Self-mockery like this makes the reader laugh with the writer.",
      tip: 'To explain a comic comparison, identify who is compared to what, then say what that suggests about how each side sees the other.',
    },
  "Camping: A Confession: Which judgement about the writer's attitude to camping does the essay best support?":
    {
      why: "The essay mocks camping throughout, from the 'two-minute pitch' to the leaking air mattress. Yet the ending admits that the misty sunrise made the world 'perfectly quiet and perfectly beautiful', and the writer 'understood, with some annoyance, why we keep coming back'.",
      not: {
        'They hate it and are determined never to go again':
          "The writer understands 'why we keep coming back'. The family's tradition continues, complaints and all.",
        'They think camping is only fun with expensive equipment':
          "The neighbours' motorhome is mocked gently, and the best moment, the misty dawn, costs nothing.",
        'They enjoy it at first but have come to hate it by dawn':
          "The order is the other way round. The trip begins in rain and misery, and it is at dawn that the world is 'perfectly quiet and perfectly beautiful'.",
      },
      more: "Humorous essays often end with a twist of sincerity. The joke, 'with some annoyance', keeps the tone light even as the writer admits something genuine.",
      tip: 'In an attitude question, look for both the complaint and the confession. A two-sided answer, mocking but fond, often fits a comic writer best.',
    },
  "Camping: A Confession: Which quotation best shows the writer exaggerating the night's discomfort for comic effect?":
    {
      why: "Waking 'on the bare, cold, lumpy floor of a field, with a tent pole in my ear' piles up three discomforts, then adds an absurd detail. A tent pole in the ear is an exaggeration chosen to make the reader laugh at the writer's misery.",
      not: {
        'I went to sleep on a cloud':
          "'On a cloud' exaggerates comfort, not discomfort. This is the set-up, before the bad part arrives.",
        'I would like to say that the night improved. It did not.':
          'This is deadpan understatement: short and flat, not exaggerated. It is funny, but in a different way.',
        'The rain drummed on the canvas all night':
          'This is plain description. On its own it shows discomfort without exaggerating it.',
      },
      more: "Comic exaggeration works best when it is specific. 'A tent pole in my ear' is funnier than 'I was uncomfortable' because the reader can picture it.",
      tip: 'Tell exaggeration and understatement apart: exaggeration makes things bigger than they are, understatement smaller. Both can be funny; name the right one.',
    },
  'The Lighthouse: Why did the keepers leave the lighthouse?': {
    why: "The lights 'around Britain's coast were made automatic in the last decades of the twentieth century', and so the keepers 'packed their bags and left'. Once a light could switch itself on, nobody was needed to keep it burning.",
    not: {
      'The tower was badly damaged in a great storm':
        'Storms are mentioned in the logbooks, but the tower still stands. The keepers left because of automation.',
      'Ships stopped sailing along that coast':
        'A cargo ship still slides along the horizon. The ships are now guided by satellites and an automatic light.',
      'Volunteers took over and made it a museum':
        'The museum came after the keepers had gone. It is what remains, not why they left.',
    },
    more: 'Feature writers often give a short burst of history to explain what the reader is seeing. One sentence of context here turns an empty tower into a story about change.',
    tip: "In a 'why' retrieval question, separate cause from what came after. The museum followed the keepers' departure; automation caused it.",
  },
  'The Lighthouse: What does the simile "like a full stop at the end of a long sentence" suggest about the lighthouse?':
    {
      why: "A full stop ends a sentence; the lighthouse ends the land. Placed at 'the end of the headland' after a long walk, it is small and final, like the dot that closes a long sentence. The simile also hints at how alone it stands.",
      not: {
        "It is the most important part of the coast's history":
          'The simile is about position and finality, not importance. A full stop is small, not grand.',
        'It is about to be pulled down and finished with':
          'A full stop marks an ending in a sentence, not a demolition. The lighthouse is a museum, still standing.',
        'It is covered in writing left by its keepers':
          "This reads 'sentence' literally. The logbooks hold writing, but the simile is about the lighthouse's place on the land.",
      },
      more: 'Comparing a landscape to writing, a headland as a sentence, is an unusual image that suits a piece about logbooks and records. Writers often choose images that echo their subject.',
      tip: 'Explain a simile by naming what the two things share, here position at an end and smallness, then say what feeling that creates.',
    },
  'The Lighthouse: What does the writer mean by "It is the ordinariness that gets you"?': {
    why: "'Gets you' means moves you or affects you deeply. The writer is touched most not by the grand lens but by ordinary things: 'blue-and-white mugs', a kettle, a window 'looking straight out at the weather'. Everyday objects make the keepers feel like real people.",
    not: {
      'The museum is dull because nothing in it is special':
        "The writer calls it 'one of the most moving places I have ever visited'. Ordinariness moves them; it does not bore them.",
      'Visitors often get lost among the ordinary rooms':
        "This reads 'gets you' literally. In everyday speech it means something affects you emotionally.",
      'The keepers lived easy and comfortable lives':
        'They kept the light burning through every night of the year. Ordinary objects show their daily life, not an easy one.',
    },
    more: "Informal phrases such as 'gets you' give a feature article a personal, conversational voice. They make the writer sound like a guide sharing a feeling, not a lecturer.",
    tip: 'When asked what a phrase means, give the meaning in context, then show how the details that follow support it.',
  },
  "The Lighthouse: Which judgement about the writer's view of automation does the passage best support?":
    {
      why: "The writer accepts the change, 'That is progress, and I would not wish it otherwise', but leaves 'thinking about the keepers, awake in the dark so that strangers could be safe', and wondering whether anyone on the ships 'ever thought about them at all'.",
      not: {
        "They accept it as progress but think the keepers' work was easy":
          "The acceptance is right, but the work was not easy: the keepers kept the lights burning 'through every night of the year', 'awake in the dark so that strangers could be safe'.",
        'They believe ships are less safe with satellites than with keepers':
          "The writer never questions the ships' safety. The point is about memory and gratitude, not danger.",
        "They are glad that the keepers' hard lives are now forgotten":
          "The writer is troubled that the keepers may be forgotten, wondering whether anyone 'ever thought about them at all'.",
      },
      more: 'A writer can hold two attitudes at once: acceptance and regret. Recognising such mixed views is a key skill in reading non-fiction, where few writers are simply for or against.',
      tip: "Look for a turning word such as 'But' in a writer's conclusion. What comes after it is often the feeling they most want the reader to share.",
    },
  "The Lighthouse: Which quotation best shows the writer's respect for the keepers' care and discipline?":
    {
      why: "The logbooks record 'the exact minute the lamp was lit, night after night', in fair weather and in storms. 'Exact' shows the keepers' precision, and 'night after night' their discipline. By choosing these details, the writer honours their patient care.",
      not: {
        'a huge beehive of prisms':
          'This describes the lens, an impressive machine, not the people who looked after it.',
        'a wind that seems determined to send you home':
          'This describes the walk to the lighthouse, not the keepers.',
        'watching a cargo ship slide along the horizon':
          'This describes the present-day view, not the keepers or their work.',
      },
      more: "Feature writers often let objects speak for people: a logbook full of exact times says more about a keeper's character than any adjective could.",
      tip: "To show a writer's attitude, pick details that the writer chose to include and explain why: here precision and repetition show respect.",
    },
  'Pride and Prejudice, Chapter 1: What news has Mrs Long brought to Mrs Bennet?': {
    why: "Mrs Bennet says that Mrs Long 'has just been here' with the news that 'Netherfield Park is let at last', taken 'by a young man of large fortune from the north of England'. A wealthy newcomer has rented the big house nearby.",
    not: {
      'That Mr Morris has bought Netherfield Park for himself':
        "Mr Morris is the person the young man 'agreed with' to rent the house. He has not bought it.",
      'That Mr Bingley is engaged to marry a girl from the north':
        "Bingley comes 'from the north of England', but he is 'single'. Mrs Bennet hopes he will marry one of her daughters.",
      'That Mr Bennet has been invited to dine at Netherfield':
        'Nobody has been invited anywhere. Mrs Bennet wants her husband to call on the newcomer first.',
    },
    more: "Austen often lets the plot's first move arrive as gossip. News passed from Mrs Long to Mrs Bennet shows how quickly a neighbourhood notices a wealthy single man.",
    tip: 'In dialogue-heavy extracts, track who is speaking and whose words are being reported. Mrs Bennet is repeating Mrs Long, so the news reaches us second-hand.',
  },
  'Pride and Prejudice, Chapter 1: What is the effect of calling it "a truth universally acknowledged" that a rich single man "must be in want of a wife"?':
    {
      why: "The sentence sounds like a grand, universal truth, but the next paragraph shows whose truth it is: 'the surrounding families' see such a man as 'the rightful property of some one or other of their daughters'. What they hope is dressed up as a law, which is the joke.",
      not: {
        'It proves that every rich young man is desperate to find a wife':
          "The sentence claims it, but the irony is that the 'truth' belongs to the families with daughters, not to the young men.",
        'It shows that the narrator is a rich single man looking for a wife':
          'The narrator is an observer commenting on society, not a character in the scene.',
        'It warns young women never to marry a man only for his money':
          'No warning is given. The sentence gently mocks how eagerly families look for rich husbands.',
      },
      more: "Irony means saying one thing while meaning another. Austen's famous opening states a 'truth' so grandly that the reader soon sees it is really a local hope.",
      tip: 'When a sentence sounds too sure of itself, test it against what follows. If the next lines undercut it, explain the irony and what it reveals.',
    },
  'Pride and Prejudice, Chapter 1: What does Mr Bennet\'s reply, "You want to tell me, and I have no objection to hearing it", suggest about him?':
    {
      why: "His wife asks whether he wants to know who has taken Netherfield, and he turns the question round: it is she who wants to tell. The dry reply shows that he sees through her eagerness and enjoys teasing it, and 'This was invitation enough' shows that she misses the joke.",
      not: {
        'He is angry and wants his wife to stop talking at once':
          "He says he has 'no objection to hearing it'. He is teasing, not angry, and she carries straight on.",
        'He is deeply curious to hear about the new neighbour':
          "He had 'made no answer' to her first hint. His reply shows that it is her curiosity, not his, that drives the talk.",
        'He has not understood what his wife has asked him':
          "He understands exactly: 'You want to tell me.' His reply is a clever turn on her question.",
      },
      more: "Austen often reveals character through short, sharp replies. Mr Bennet's dry wit against his wife's breathless chatter sets up the comic pairing that runs through the novel.",
      tip: 'When a character answers a question with a twist, explain what the twist shows: here a husband who enjoys teasing his wife more than discussing her news.',
    },
  'Pride and Prejudice, Chapter 1: Which judgement about Mrs Bennet does the extract best support?':
    {
      why: "Mrs Bennet asks 'impatiently', calls her husband 'tiresome' and insists that 'you must visit him as soon as he comes'. She admits that she is 'thinking of his marrying one of them'. Everything she says hurries towards one goal: a wedding for one of her five daughters.",
      not: {
        'She is calm, and waits patiently for her husband to act':
          "She speaks 'impatiently' and presses him: 'you must visit him as soon as he comes'. She is anything but calm.",
        'She hopes that Mr Bingley will fall in love with her':
          "That is Mr Bennet's joke, that Bingley 'might like you the best of the party'. She is flattered, but her hopes are for her daughters.",
        'She is shy and finds it hard to say what she wants':
          'She says exactly what she wants, and at length: she does most of the talking in the scene.',
      },
      more: "Mrs Bennet's eagerness makes sense in her world: five daughters, and few ways for a woman to secure a comfortable life except through marriage. Austen makes her comic, but the worry behind her is real.",
      tip: "Support a judgement about a character with what they say and how they say it: Mrs Bennet's exclamations and commands both show her impatience.",
    },
  'Pride and Prejudice, Chapter 1: Which quotation best shows that Mrs Bennet thinks of Mr Bingley chiefly in terms of money?':
    {
      why: "Asked whether Bingley is married, Mrs Bennet answers with his fortune: 'A single man of large fortune; four or five thousand a year.' She knows his income before she knows anything else about him, which shows what matters most to her.",
      not: {
        'that he is to take possession before Michaelmas':
          "This gives the date of his arrival, part of Mrs Long's news. It says nothing about money.",
        'You must know that I am thinking of his marrying one of them':
          'This shows her hope of a marriage, but not that she thinks of him in terms of money.',
        'But it is very likely that he may fall in love with one of them':
          'This is about love and marriage. It shows her hopes, not her interest in his income.',
      },
      more: "Austen's characters often reveal their values through what they mention first. A man described by his yearly income tells the reader how the speaker judges people.",
      tip: "When a question asks for the quotation that 'best' shows something, check each one against the key word, here money. Only one names a sum.",
    },
  "Silas Marner, Chapter 1: Why did the shepherd's dog bark at the weavers, according to the narrator?":
    {
      why: "The narrator asks, 'what dog likes a figure bent under a heavy bag?', and adds that 'these pale men rarely stirred abroad without that mysterious burden'. It is the bag, and the bent shape it makes, that sets the dog barking.",
      not: {
        'Because they were strangers who had stolen his sheep':
          'Nobody accuses the weavers of stealing. The narrator gives the heavy bag as the reason the dog barks.',
        'Because they appeared suddenly out of the dark night':
          "They appear 'dark against the early winter sunset', at dusk, not at night. The reason given is the bag.",
        'Because they smelled strongly of the flax they spun':
          'Flax thread is mentioned as what the bag held, but smell is never given as the reason for barking.',
      },
      more: "A rhetorical question in narration can state a reason as if it were obvious. 'What dog likes a figure bent under a heavy bag?' treats the dog's suspicion as natural, which prepares for the villagers' suspicion that follows.",
      tip: 'In retrieval questions on older prose, a reason can come in an unusual form, such as a question. Read the whole sentence around the detail before answering.',
    },
  'Silas Marner, Chapter 1: What does the narrator suggest by saying the weavers "looked like the remnants of a disinherited race"?':
    {
      why: "Beside 'the brawny country-folk', the weavers are 'pallid' and 'undersized'. Calling them 'the remnants of a disinherited race' suggests they look like the last survivors of a people who have lost their place in the world: outsiders, set apart from everyone around them.",
      not: {
        'They had lost all of their money in a bitter family quarrel':
          "'Disinherited' here describes how they look, like a people without a home, not a real family dispute about money.",
        'They had come over the sea from some faraway foreign country':
          "They are 'emigrants from the town into the country', not from abroad. They only look 'alien' to the villagers.",
        'They were the strongest and healthiest people in the district':
          "The opposite: they are 'pallid undersized men' beside the 'brawny country-folk'.",
      },
      more: 'Describing a group as if they were a separate race is a way of showing how the villagers see them: different, strange and not to be trusted.',
      tip: "Unpack each word of a dense phrase: 'remnants' means what is left, 'disinherited' means robbed of an inheritance. Together they create the image of an outcast people.",
    },
  'Silas Marner, Chapter 1: Why, according to the narrator, did the villagers find any skill or cleverness suspicious?':
    {
      why: "The narrator explains that 'the process by which rapidity and dexterity of any kind were acquired was so wholly hidden, that they partook of the nature of conjuring'. Because the villagers could not see how a skill was learned, it seemed like magic, and magic was suspect.",
      not: {
        'Clever people had cheated them many times before':
          'No cheating is mentioned. The suspicion comes from not understanding how skill is gained.',
        'Their church had taught them that cleverness was sin':
          "The shepherd wonders about 'the Evil One', but the reason given for distrusting cleverness is that its learning was 'wholly hidden'.",
        "Skilled workers were taking the farmers' jobs":
          "Weaving is called 'indispensable'; nobody fears for their work. The villagers distrust what they cannot understand.",
      },
      more: "Long sentences in Victorian narration often build an argument step by step. Here the narrator follows the villagers' logic through to its end: what is hidden seems like conjuring.",
      tip: "When a question asks 'why, according to the narrator', find the narrator's own explanation, often signalled by words such as 'so... that' or 'In this way'.",
    },
  "Silas Marner, Chapter 1: Which judgement about the narrator's attitude to the villagers does the extract best support?":
    {
      why: "The narrator explains the villagers' fears from their point of view, but with a smile: 'how was a man to be explained unless you at least knew somebody who knew his father and mother?', and honest folk were 'not overwise or clever', except at 'knowing the signs of the weather'. The tone is gently ironic.",
      not: {
        'The narrator shares their fear that weavers are evil':
          "The narrator explains the fear, 'In that far-off time superstition clung easily', but does not share it. The 'Evil One' belongs to the shepherd's doubts.",
        'The narrator angrily condemns them as cruel and stupid':
          'The tone is amused and understanding, not angry. The narrator even explains why their fears made sense to them.',
        'The narrator ignores the villagers to describe the weavers':
          "Much of the extract is about the villagers' beliefs: their superstition, their distrust, their view of cleverness.",
      },
      more: "Gentle irony lets a narrator describe people's limits with sympathy. Eliot's narrator stands a little above the villagers, but never sneers at them.",
      tip: "To judge a narrator's attitude, look for rhetorical questions and wry asides, such as 'at least, not beyond such a matter as knowing the signs of the weather'.",
    },
  'Silas Marner, Chapter 1: Which quotation best shows that the villagers distrusted even a newcomer who had lived among them for years?':
    {
      why: "'Even a settler, if he came from distant parts, hardly ever ceased to be viewed with a remnant of distrust.' A settler has come to stay, yet 'hardly ever ceased' shows the suspicion lasting for years. The other quotations describe wanderers, a dog and the villagers themselves.",
      not: {
        'No one knew where wandering men had their homes or their origin':
          'This is about wanderers passing through, not a newcomer who has settled in the village.',
        'The shepherd’s dog barked fiercely when one of these alien-looking men appeared':
          "This shows the dog's reaction to a weaver arriving, not the villagers' long distrust of a settler.",
        'honest folk, born and bred in a visible manner, were mostly not overwise or clever':
          'This describes the villagers themselves, not how they treated newcomers.',
      },
      more: "Precise words carry a claim: 'settler' means someone who has come to stay, and 'hardly ever ceased' means for years. Matching such words to the question is the heart of a best-evidence answer.",
      tip: "Underline the key idea in the question, here 'even a newcomer who had lived among them for years', and find the quotation that covers all of it, not just part.",
    },
  'Jekyll and Hyde, Chapter 8: What does Poole do when he and Mr Utterson reach the square?': {
    why: "'Poole, who had kept all the way a pace or two ahead, now pulled up in the middle of the pavement, and in spite of the biting weather, took off his hat and mopped his brow with a red pocket-handkerchief.'",
    not: {
      'He runs ahead to warn the other servants':
        "Poole has kept 'a pace or two ahead' all the way, but at the square he stops; he does not run on.",
      'He knocks loudly and shouts for help':
        "When he knocks, later, it is 'in a very guarded manner'. Nothing is loud.",
      'He offers Mr Utterson a glass of wine':
        "The wine was left untasted at Mr Utterson's house before they set out. Nothing is offered at the square.",
    },
    more: "Small physical actions often carry a scene's tension. A man mopping his brow on a freezing night makes the reader ask what is wrong before anyone says so.",
    tip: 'In retrieval, make sure you report the action at the right moment: the question asks what Poole does at the square, not on the way or at the door.',
  },
  'Jekyll and Hyde, Chapter 8: What does describing the moon as "lying on her back as though the wind had tilted her" suggest about the night?':
    {
      why: 'The moon is personified as a woman pushed over by the wind. If even the moon seems knocked off balance, the night feels wild and unnatural, as though the ordinary order of things has been upset.',
      not: {
        'That the moon is setting and morning will soon come':
          "'Lying on her back' describes how the moon looks, tipped over, not that it is setting. The night has only just begun.",
        'That the night is calm, still and perfectly peaceful':
          "It is 'a wild, cold, seasonable night', with wind that 'made talking difficult'. Nothing is calm.",
        'That the full moon is lighting up the streets brightly':
          "The moon is 'pale', and the image is about its tilted look, not its brightness.",
      },
      more: 'Personifying the moon as a woman blown over gives the setting a sense of disorder. Gothic writers often use unsettled weather to prepare the reader for something wrong.',
      tip: 'When explaining an image of setting, link it to the mood it creates: a tilted moon suggests a world off balance.',
    },
  "Jekyll and Hyde, Chapter 8: Which word most suggests that Poole's sweat comes from fear, not effort?":
    {
      why: "The narrator says these were 'not the dews of exertion that he wiped away, but the moisture of some strangling anguish'. 'Anguish' means terrible mental suffering, and 'strangling' makes it feel as if it is choking him. His sweat comes from terror, not from hurrying.",
      not: {
        "'exertion', because he has hurried all the way there":
          "The text rules this out: these were 'not the dews of exertion'. 'Exertion' is the cause the narrator rejects.",
        "'biting', because the cold weather makes him shiver":
          "'Biting' describes the cold weather, which makes the sweat more surprising. It is not the cause of it.",
        "'red', because his handkerchief shows that he is hot":
          'The handkerchief is simply red. Its colour says nothing about why he is sweating.',
      },
      more: 'Correcting an expected explanation is a powerful way to raise tension: the reader assumes Poole is hot from hurrying, and the narrator replaces that with something worse.',
      tip: "Watch for 'not... but' in a sentence. The word after 'but' is usually the one the writer wants you to notice, and the best word to analyse.",
    },
  'Jekyll and Hyde, Chapter 8: Which judgement about Mr Utterson does the extract best support?': {
    why: "On the walk he feels 'so sharp a wish to see and touch his fellow-creatures', a sign of deep unease. Yet when the frightened servants greet him, he speaks 'peevishly': 'Very irregular, very unseemly'. Fussing about what is proper is his way of holding his fear at bay.",
    not: {
      'He is calm and untroubled, quite sure that nothing is wrong':
        "He longs for company on the deserted streets and answers the servants 'peevishly'. He is far from untroubled.",
      'He is unkind to the servants and enjoys seeing their fear':
        'His words are sharp, but they come from strain, not cruelty. Nothing suggests he enjoys their fear.',
      'He is far too frightened to go into the house at all':
        'He goes in at once when the door is opened. His fear shows in his words, not in staying outside.',
    },
    more: "Characters often cover fear with a show of normality: rules, manners, small complaints. Utterson's fuss about what is 'unseemly' tells the reader how unsettled he really is.",
    tip: "When a character's words seem out of place, ask what feeling they might be covering. Then support your judgement with one detail of feeling and one of behaviour.",
  },
  'Jekyll and Hyde, Chapter 8: Which quotation best shows that Mr Utterson senses disaster before anything has happened?':
    {
      why: "On the way there, before he knows anything, 'there was borne in upon his mind a crushing anticipation of calamity'. 'Anticipation' means expecting something in advance, and 'calamity' means disaster, so the quotation shows him sensing catastrophe ahead.",
      not: {
        'the thin trees in the garden were lashing themselves along the railing':
          'The violent trees add to the wild mood of the setting, but they show the weather, not what Mr Utterson senses.',
        'the whole of the servants, men and women, stood huddled together like a flock of sheep':
          "This shows the servants' fear once he arrives, not his own sense of disaster before anything happens.",
        'The wind made talking difficult, and flecked the blood into the face':
          "This describes the physical effect of the wind, not Mr Utterson's thoughts.",
      },
      more: "Foreshadowing hints at events to come. A character's dread on the way to a scene prepares the reader for the horror waiting there.",
      tip: "In a best-evidence question, check the time words in the claim: 'before anything has happened' rules out details from after he arrives.",
    },
  'The Great Gatsby, Chapter 1: What does Tom Buchanan point out to the narrator from the porch?': {
    why: "Tom turns the narrator round and sweeps a hand along 'the front vista', taking in 'a sunken Italian garden, a half acre of deep, pungent roses, and a snub-nosed motor-boat that bumped the tide offshore'.",
    not: {
      'A tennis court, a stable block and a field full of horses':
        'None of these is mentioned. The vista Tom points to holds a garden, roses and a motor-boat.',
      'The house that Demaine, the oil man, owns across the bay':
        "'It belonged to Demaine, the oil man' is about Tom's own place, which Demaine once owned. Nothing across the bay is pointed out.",
      'A line of tall French windows glowing with gold':
        'The French windows belong to the room inside, which they enter afterwards. Tom points outward, along the front vista.',
    },
    more: "Retrieval in a descriptive passage often means finding a list. Fitzgerald packs three details into one long sentence, each with its own precise adjective: 'sunken', 'pungent', 'snub-nosed'.",
    tip: "When a retrieval question asks what a character points to or does, find the verb ('moved a broad flat hand') and read the list that follows it.",
  },
  'The Great Gatsby, Chapter 1: Which word most suggests that the room inside is light and airy?': {
    why: "The room is 'fragilely bound into the house by French windows at either end', as if it were only lightly tied on and might float away. 'Fragilely' suggests delicacy and weightlessness, which suits the breeze blowing straight through the room.",
    not: {
      "'enormous', because the couch fills up the whole room":
        "'Enormous' describes the couch, the one heavy, still object. It does not make the room light; it contrasts with it.",
      "'boom', because the windows slam shut with great force":
        'The boom is heavy and sudden. It ends the airy movement rather than suggesting it.',
      "'stationary', because nothing in the room is moving":
        "Only the couch is 'stationary'; everything else, curtains, rug and dresses, is moving in the breeze.",
    },
    more: "Fitzgerald builds lightness through many images: curtains 'like pale flags', a ceiling like 'frosted wedding-cake', women 'buoyed up as though upon an anchored balloon'. One precise adverb, 'fragilely', sets the tone.",
    tip: "In a 'which word' question, test each option against the passage: does it describe the room, and does it suggest the quality named? Only one does both.",
  },
  'The Great Gatsby, Chapter 1: What is the effect of the "boom" when Tom Buchanan shuts the rear windows?':
    {
      why: "Before it, everything moves: curtains 'whip and snap', a picture groans, dresses ripple. Then 'there was a boom', 'the caught wind died out about the room', and everything 'ballooned slowly to the floor'. One heavy sound ends the room's lightness at a stroke.",
      not: {
        'It shows that a thunderstorm has broken out over the bay':
          'There is no storm; it is a sunny, windy afternoon. The boom is the sound of the windows being shut.',
        'It wakes the two young women from a long, deep sleep':
          "The women are not asleep; their dresses were 'rippling and fluttering' in the breeze. The boom stops the movement around them.",
        'It shows that the windows have been smashed by the wind':
          "Tom 'shut the rear windows'. Nothing breaks; the wind is simply shut out.",
      },
      more: "A sudden sound after a passage of movement is a structural turning point. Here the reader feels the room deflate, as the curtains, rugs and women sink 'slowly to the floor'.",
      tip: "In a structure answer, describe the before and after: what the scene is like before the turning point, what changes, and how the reader's impression shifts.",
    },
  'The Great Gatsby, Chapter 1: Which judgement about Tom Buchanan does the extract best support?':
    {
      why: "Tom boasts 'I've got a nice place here', his eyes 'flashing about restlessly', and sweeps a hand over his garden, roses and boat. He also handles the narrator like an object, 'Turning me around by one arm', then 'politely and abruptly' again, before announcing 'We'll go inside.'",
      not: {
        'He is shy, and nervous about having a guest in his home':
          "His eyes flash 'restlessly', but he is not shy: he boasts about his house and turns his guest about at will.",
        'He is careless about money and dislikes his large house':
          "He is proud of it: 'I've got a nice place here.' Nothing suggests he dislikes it.",
        'He is gentle and lets the narrator explore the house alone':
          "He turns the narrator round 'by one arm' and decides when they go in. He leads every step.",
      },
      more: 'Small physical actions reveal power. A man who turns his guest round by the arm, twice, and announces when they will go in, is used to arranging people as well as things.',
      tip: "Support a judgement about a character with both words and actions: here a boast ('a nice place') and a gesture ('Turning me around by one arm').",
    },
  'The Great Gatsby, Chapter 1: Which quotation best shows that the young woman on the couch seems to ignore the narrator?':
    {
      why: "'If she saw me out of the corner of her eyes she gave no hint of it.' She does not acknowledge him at all, so completely that the narrator almost apologises 'for having disturbed her by coming in'. Her stillness looks like a refusal to notice him.",
      not: {
        'She was extended full length at her end of the divan, completely motionless':
          'This shows that she is still, but stillness alone is not ignoring someone. The next sentence shows that she gives no sign of seeing him.',
        'The younger of the two was a stranger to me':
          'This tells us the narrator does not know her. It says nothing about how she treats him.',
        'They were both in white, and their dresses were rippling and fluttering':
          "This describes both women's clothes in the breeze, not how either responds to the narrator.",
      },
      more: "Writers often show a character's attitude through what she does not do. Not looking up, not speaking, not acknowledging a guest: an absence of response can be as revealing as words.",
      tip: "In a best-evidence question, choose the quotation that shows the claim directly. 'Gave no hint of it' is about her response to him; stillness alone is not.",
    },
  'Frankenstein, Introduction (1831): Why were the friends often kept indoors that summer?': {
    why: "'But it proved a wet, ungenial summer, and incessant rain often confined us for days to the house.' 'Incessant' means never stopping, so the rain kept them indoors for days at a time.",
    not: {
      'Lord Byron needed quiet so that he could write':
        'Byron was writing, but he shared his poems with the others. The rain, not his writing, kept them inside.',
      'They were too frightened by ghost stories to go out':
        'The ghost stories came after they were confined; they read them because the rain kept them in.',
      'The lake had flooded the paths along its shores':
        'No flood is mentioned. They had spent pleasant hours by the lake before the rain set in.',
    },
    more: "'But' at the start of the second paragraph marks a turn from pleasant outdoor days to confinement. It is the change that leads, in the end, to Frankenstein.",
    tip: "Retrieval answers should be precise and in your own words. 'Incessant rain' becomes 'rain that would not stop', which is clearer than quoting the hard word alone.",
  },
  'Frankenstein, Introduction (1831): What does the writer suggest by saying that Byron\'s poems "seemed to stamp as divine the glories of heaven and earth"?':
    {
      why: "Byron's verses, 'clothed in all the light and harmony of poetry', made the beauty around them, 'the glories of heaven and earth', seem holy. To 'stamp as divine' is to mark something as sacred, so his poetry made the scenery feel touched by heaven.",
      not: {
        'That his poems were printed and sold across Switzerland':
          "This takes 'stamp' literally. He brought his poems to his friends; the phrase is about how they made the world seem.",
        'That he wrote only about God and never about nature':
          "His poems were about 'the glories of heaven and earth', which includes the natural world around them.",
        'That she found his poems too religious for her taste':
          "She admires them: they were 'clothed in all the light and harmony of poetry'. Nothing suggests she disliked them.",
      },
      more: "Romantic writers often saw nature as a sign of the divine. Mary Shelley's praise for Byron's poetry fits that view: great verse can make a landscape seem sacred.",
      tip: "When a phrase uses a familiar word in an unusual way, such as 'stamp', explain its meaning in context before its effect.",
    },
  'Frankenstein, Introduction (1831): Why does the writer describe the ghost as "clothed like the ghost in Hamlet, in complete armour"?':
    {
      why: "In Shakespeare's Hamlet, the ghost of Hamlet's father appears armed from head to foot, and Horatio notes that he wore his 'beaver up', the visor raised. The comparison calls up a famous image every reader would know, so the shadowy figure is easy to picture.",
      not: {
        'To suggest that Shakespeare himself wrote the German ghost story':
          "The stories were 'translated from the German into French'. The comparison borrows a famous image; it does not claim Shakespeare wrote them.",
        'To show that the friends were acting out Hamlet indoors':
          'The friends were reading ghost stories, not performing a play. Hamlet appears only as a comparison.',
        'To prove that the ghost was really the King of Denmark':
          "The ghost is 'the sinful founder of his race' from a German story. It is only dressed like Hamlet's ghost.",
      },
      more: 'A comparison to a well-known work gives readers a ready-made picture. Writers often borrow from Shakespeare because their readers are likely to know him.',
      tip: 'When a writer compares something to a famous text or figure, say what that reference brings with it: here a royal, armoured, tragic ghost.',
    },
  "Frankenstein, Introduction (1831): Which judgement about the writer's account of Polidori's story is best supported?":
    {
      why: "'Poor Polidori' sets a teasing tone. She cannot even remember what the lady peeped at, 'what to see I forget', calls it 'something very shocking and wrong of course', and says he 'did not know what to do with her', so he sent her to a tomb. The mockery is affectionate.",
      not: {
        'She admires it as the most frightening of all their stories':
          "She treats it as a muddle: he 'did not know what to do with her'. Nothing suggests she found it frightening.",
        'She is too shocked by it to describe any part of it':
          "She does describe it: the 'skull-headed lady', the keyhole, the tomb. 'Something very shocking and wrong of course' is ironic.",
        'She envies it and wishes she had thought of it first':
          'Nothing suggests envy. She remembers it as a story that went nowhere.',
      },
      more: "Gentle mockery in memoir, such as 'Poor Polidori', shows the writer's personality and her closeness to the people she describes.",
      tip: "To judge a writer's attitude, look at the small words: 'Poor', 'of course', 'I forget'. They often carry the tone more than the big statements do.",
    },
  'Frankenstein, Introduction (1831): Which quotation best shows that the ghost stories made a lasting impression on the writer?':
    {
      why: "Years later she writes: 'I have not seen these stories since then; but their incidents are as fresh in my mind as if I had read them yesterday.' The comparison 'as if I had read them yesterday' shows how vividly the stories have stayed with her.",
      not: {
        'Some volumes of ghost stories, translated from the German into French, fell into our hands':
          'This tells us how they came across the stories, not how long the stories stayed with her.',
        'We will each write a ghost story':
          "This is Byron's proposal, the challenge the stories inspired, not evidence of their lasting effect on her.",
        'The illustrious poets also, annoyed by the platitude of prose, speedily relinquished their uncongenial task':
          "This describes the poets giving up their stories. It says nothing about the ghost stories' effect on her.",
      },
      more: "Memoirs often signal a lasting impression with time words: 'since then', 'yesterday', 'I still remember'. These show the writer looking back across the years.",
      tip: "In a best-evidence question about memory, look for words that connect past and present, such as 'since then' and 'yesterday', and quote them.",
    },
  "This Year's Pantomime: According to the review, which scene earned the loudest laughter of the night?":
    {
      why: "'The ugly sisters' decorating scene, in which a pot of paste ends up almost everywhere except on the wall, earned the loudest laughter of the night.' The slapstick mess is the review's comic high point.",
      not: {
        "The Dame's arrival on a tricycle shaped like a bun":
          "The Dame's entrance is praised, but the review gives the loudest laughter to the ugly sisters.",
        'The ballroom scene with the chandelier costume':
          "The chandelier is one of the Dame's growing costumes. It is not the scene named as the funniest.",
        'The song about the importance of recycling':
          "The recycling song is a criticism: it 'stopped the story dead'. It did not earn laughter.",
      },
      more: "Reviews often single out a highlight to give readers a vivid reason to go. A specific, funny detail, paste everywhere except on the wall, is more persuasive than 'it was funny'.",
      tip: "In retrieval, watch for superlatives such as 'loudest' or 'best': they point to one particular sentence. Find it before you choose.",
    },
  'This Year\'s Pantomime: What does the reviewer mean by saying the jokes are "terrible, which is exactly the point"?':
    {
      why: "In pantomime, bad jokes are part of the tradition: the adults groan, and the children shriek with delight. The reviewer calls them 'terrible' as praise, because they do exactly what pantomime jokes are meant to do.",
      not: {
        'The writers ought to be ashamed of such weak jokes':
          "'Which is exactly the point' turns the word 'terrible' into praise. The reviewer enjoys the bad jokes.",
        'The jokes are far too rude for the children to hear':
          "The children love them: each groan is followed by 'a shriek of delight'. Nothing suggests they are rude.",
        'The audience at the back cannot hear any of the jokes':
          'The audience reacts to every joke, adults groaning and children shrieking. They hear them clearly.',
      },
      more: 'A word can be used as praise when it describes something meant to be bad. Reviewers rely on readers knowing the tradition, here the pantomime groan.',
      tip: "When a writer uses a negative word in a positive way, explain the twist: the context, 'which is exactly the point', changes the meaning.",
    },
  "This Year's Pantomime: What is the purpose of the fourth paragraph in the review as a whole?": {
    why: "'It is not perfect' signals the turn. The paragraph names the faults, a second half 'about twenty minutes too long' and a song that 'stopped the story dead', so that they are weighed before the review reaches its final judgement in the last paragraph.",
    not: {
      'To describe the plot of the long second half in detail':
        'The paragraph says the second half is too long, but it does not retell what happens in it. Its job is to judge, not to summarise.',
      'To praise the work of the younger members of the cast':
        'That is the job of the third paragraph, which praises Cinderella and Buttons. The fourth turns to faults.',
      'To tell readers where and when to buy their tickets':
        'No tickets, dates or prices are mentioned anywhere in the review.',
    },
    more: 'Reviews earn trust by admitting weaknesses. A paragraph of criticism, clearly signposted, tells the reader that the reviewer is weighing the show, not simply selling it.',
    tip: "When asked what a paragraph does, describe its job in the whole text and quote its signpost, here 'It is not perfect', which marks the change of direction.",
  },
  "This Year's Pantomime: Which statement best sums up the reviewer's overall view?": {
    why: "The reviewer names real flaws, a second half 'twenty minutes too long' and a song that 'stopped the story dead', but calls them 'small complaints' and urges readers to go. The verdict is warm: an imperfect show that delivers the joy a pantomime should.",
    not: {
      'A dull, overlong show that families should avoid':
        "The second half is too long, but the review ends 'Take the family.' It recommends the show.",
      'A joyful cast, but a show too long to be worth seeing':
        "The reviewer does say the second half 'runs about twenty minutes too long', but calls these 'small complaints' and ends 'Take the family.'",
      'A show for small children only, too silly for adults':
        'The adults groan, but happily, and the review urges everyone to go, grandmothers included.',
    },
    more: 'A credible review is rarely all praise. Admitting faults makes the final recommendation more convincing, because the reader trusts a reviewer who notices problems.',
    tip: 'Sum up an overall view in a balanced phrase that covers both praise and criticism, then support each half with a short quotation.',
  },
  "This Year's Pantomime: Which quotation best shows the reviewer's belief that pantomime matters to a whole community?":
    {
      why: "The reviewer says pantomime is 'not really about the glass slipper' but about 'a whole town sitting in the dark together, booing the same villains'. 'A whole town' and 'together' make the show a shared, community event.",
      not: {
        'every groan from the adults is followed by a shriek of delight from the children':
          'This shows the jokes working for adults and children, but it is about the jokes, not the community.',
        "By ten o'clock several of the smallest members of the audience were asleep":
          'This is part of a criticism about length, told with humour. It says nothing about community.',
        'Her costumes grow larger with every scene':
          "This describes the Dame's costumes, a comic detail, not the show's meaning for the town.",
      },
      more: 'Reviews of live events often end by saying what the experience means beyond the stage. That wider point gives the review its warmth and its persuasive force.',
      tip: "In a best-evidence question, look for the words that match the claim directly: here 'a whole town' and 'together' match 'a whole community'.",
    },
}
