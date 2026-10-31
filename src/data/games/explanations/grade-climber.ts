import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Grade Climber: the explanation a student sees after each answer, by question
 * key (src/data/games/banks/grade-climber.ts). Written with AI on 16 October
 * 2026 and checked against each question and its options, as the founder decided
 * (src/lib/games/explanations/types.ts).
 *
 * Rebuilt for depth on 24 October 2026: 330 new questions, from a method's
 * effect on rung 3 to a critic's claim on rung 9, most of them on real lines
 * copied from the held texts, and new explanations for every one of the 156
 * questions already here whose options changed. Written with AI and checked
 * against each question, as the founder decided
 * (src/lib/games/explanations/types.ts).
 *
 * Checked on 31 October 2026 by a second, independent reader, as the founder
 * decided: the explanations of 51 questions were corrected, or carried over
 * to a corrected question, and each change is recorded in the bank's
 * docblock (src/data/games/banks/grade-climber.ts).
 */
export const EXPLANATIONS: GameExplanations = {
  'Dickens describes Scrooge as "Hard and sharp as flint". What technique is used?': {
    why: "Scrooge is compared to flint, a hard stone, with the word 'as'. A comparison made with 'like' or 'as' is a simile, even when only one 'as' is used.",
    not: {
      Metaphor:
        "A metaphor would say Scrooge was flint. The word 'as' makes this a comparison, so it is a simile.",
      Alliteration:
        "Alliteration repeats the first sound of nearby words. 'Hard', 'sharp' and 'flint' all begin differently.",
      Personification:
        'Personification gives human qualities to something non-human. Here a man is given the qualities of a stone, the other way round.',
    },
    more: "Flint is hard enough to strike sparks, yet Dickens adds that no steel had ever struck 'generous fire' from Scrooge. The simile makes his coldness seem fixed and unbreakable.",
    tip: "Do not stop at naming the simile. Say what the comparison suggests: 'The simile suggests Scrooge is cold, hard and unfeeling.'",
  },
  'Stevenson writes: "The fog still slept on the wing above the drowned city". What technique is "slept"?':
    {
      why: "Sleeping is something living creatures do. Saying the fog 'slept' gives it a body and a life of its own, which is personification.",
      not: {
        Simile: "There is no comparison using 'like' or 'as'. The fog simply sleeps.",
        Hyperbole:
          "Hyperbole is deliberate exaggeration. 'Slept' gives the fog a living action; it does not overstate anything.",
        Onomatopoeia: "Onomatopoeia is a word that imitates a sound. 'Slept' is not a sound word.",
      },
      more: "A sleeping fog is heavy and unmoving, so London seems smothered and still. The same sentence calls it a 'drowned city': the fog is something the city cannot escape.",
      tip: "Pick out the verb that does the personifying and say what it suggests: 'slept' makes the fog seem heavy, settled and in no hurry to lift.",
    },
  'What does "cold-hearted" suggest about a character?': {
    why: "'Cold-hearted' is not about temperature. The heart stands for feelings, so a cold heart belongs to someone with no warmth or kindness towards others.",
    not: {
      'They have a weak heart':
        "This reads the heart literally, as the organ. Here the heart stands for feelings, and 'cold' describes how little warmth the person shows.",
      'They stay calm under pressure':
        "That is 'cool-headed': the head, not the heart, and cool there means calm. A cold heart is a lack of kindness, not a steady nerve.",
      'They live somewhere cold':
        "The word is figurative. 'Cold' describes their feelings, not where they live.",
    },
    more: "We often link warmth with kindness and coldness with cruelty: a 'warm welcome', a 'cold stare'. Writers use this link to show character quickly.",
    tip: 'When a word is used figuratively, explain the literal meaning first, then what it suggests about the character.',
  },
  'On Christmas morning Scrooge hears the church bells: "Clash, clang, hammer; ding, dong, bell." What technique is used?':
    {
      why: 'Clash, clang, ding and dong imitate the sounds of bells ringing. Words that sound like the noise they describe are onomatopoeia.',
      not: {
        Simile: "There is no comparison using 'like' or 'as'. The words copy the sound itself.",
        Metaphor: 'Nothing is said to be something else. The words imitate the bells directly.',
        Personification:
          'The bells are not given human qualities. Ringing is what bells really do.',
      },
      more: 'The sound words tumble out in a rush, so the reader hears the joyful noise that greets the changed Scrooge. Dickens makes the morning burst into life.',
      tip: "Say what the sounds add to the moment: 'The onomatopoeia fills the morning with the joyful noise of Christmas.'",
    },
  'If a writer uses short sentences, what effect might this create?': {
    why: 'Short sentences are quick to read and stop often, so the pace speeds up. This sudden, clipped rhythm usually builds tension or a sense of urgency.',
    not: {
      'A relaxed mood':
        'A relaxed mood usually comes from long, flowing sentences. Short sentences feel sharp and hurried, not calm.',
      'A slow, lingering pace':
        'Short sentences do the opposite: they speed the reader up. Long sentences with many clauses slow a reader down.',
      'Rich, detailed description':
        'Detail needs room: adjectives, clauses and lists build up in longer sentences. Short sentences strip detail away to keep the pace quick.',
    },
    more: "A run of short sentences can mirror a racing heartbeat or a character's panic: 'He ran. He stopped. Silence.' One short sentence after several long ones can also shock.",
    tip: 'In your own writing, use a short sentence at a moment of danger or shock. In analysis, link the sentence length to the mood it creates.',
  },
  '"Peter Piper picked a peck." What technique is used?': {
    why: "Peter, Piper, picked and peck all begin with the same 'p' sound. Repeating the first sound of words close together is alliteration.",
    not: {
      Sibilance: "Sibilance repeats hissing 's' or 'sh' sounds. The repeated sound here is 'p'.",
      Assonance:
        "Assonance repeats vowel sounds inside words, as in 'deep green'. The pattern here is the opening consonant 'p'.",
      Onomatopoeia:
        "Onomatopoeia is a word that imitates a noise, like 'pop'. Here 'peck' is an old measure of quantity, and no word copies a sound.",
    },
    more: "The 'p' is a plosive sound, made with a small burst of air. Repeated plosives give a line a bouncy, punchy rhythm.",
    tip: "Name the sound as well as the device: 'The plosive alliteration creates a lively, bouncing rhythm.'",
  },
  'Romeo, looking up at Juliet\'s window, says: "Arise fair sun and kill the envious moon". What does "envious" suggest about the moon?':
    {
      why: "Envy is a human feeling: wanting what someone else has. Calling the moon 'envious' suggests it is jealous of Juliet, whose beauty outshines it.",
      not: {
        'It is shining more brightly than her':
          "The moon is envious because Juliet outshines it, and Romeo goes on to call it 'sick and pale with grief'.",
        'It is full and about to set':
          "Nothing in 'envious' describes the moon's phase. The word gives it a jealous feeling.",
        'It is a friend that watches over her':
          "Romeo wants the sun to 'kill' the moon. It is presented as a jealous rival, not a friend.",
      },
      more: "Personifying the moon as an envious rival flatters Juliet: even the heavens are jealous of her. Romeo's love talks in images of light.",
      tip: 'When a non-human thing is given a feeling, name the feeling precisely and say what it suggests about the person being described.',
    },
  '"He was as brave as a lion." What technique is this?': {
    why: "His bravery is compared to a lion's using 'as brave as'. A comparison with 'like' or 'as' is a simile.",
    not: {
      Metaphor:
        "A metaphor would say he was a lion. The words 'as brave as' make this a comparison, so it is a simile.",
      Personification:
        'Personification gives human qualities to something non-human. Here a human is compared to an animal, the other way round.',
      Alliteration:
        "Alliteration needs nearby words that begin with the same sound. 'Brave' and 'lion' begin differently.",
    },
    more: 'Lions are known for courage and strength, so the simile suggests he is fearless and powerful. Writers often borrow animals for the qualities people link with them: a fox is sly, a mouse is timid.',
    tip: "Explain why the writer chose that animal: 'Comparing him to a lion suggests fierce, natural courage.'",
  },
  'What does an exclamation mark at the end of a sentence usually show?': {
    why: 'An exclamation mark shows strong feeling: shock, anger, joy or surprise. It tells the reader to read the sentence with force.',
    not: {
      'A pause before the next idea':
        'A comma, a dash or an ellipsis makes a pause inside a sentence. An exclamation mark ends one and tells the reader to say it with force.',
      'A question with no answer':
        'A question asked with no answer expected is a rhetorical question, and it ends with a question mark, not an exclamation mark.',
      'Words left out of a quotation':
        'Words left out of a quotation are shown by an ellipsis, three dots. An exclamation mark shows feeling.',
    },
    more: 'Writers use exclamation marks for shouted speech, sudden events and strong reactions. Too many weaken the effect, so careful writers use them sparingly.',
    tip: 'In your own writing, save exclamation marks for real moments of shock or emotion. In analysis, say what feeling the punctuation shows.',
  },
  'D. H. Lawrence\'s poem opens: "Softly, in the dusk, a woman is singing to me". Which sound technique runs through the line?':
    {
      why: "The soft 's' sounds in softly, dusk, is and singing run through the line. Repeated hissing 's' sounds are sibilance, and here they are hushed and gentle.",
      not: {
        Assonance:
          "Assonance repeats vowel sounds. The pattern here is the soft consonant 's', not a vowel.",
        Onomatopoeia:
          "Onomatopoeia is a word that imitates a sound, like 'boom'. The singing is described, not imitated.",
        'Plosive sounds':
          "Plosives are hard sounds such as 'p', 'b' and 't'. The line's sound is soft and hushed, the opposite.",
      },
      more: 'The hush of the sibilance suits the dusk and the quiet song, drawing the speaker, and the reader, gently into a memory of childhood.',
      tip: "Link the sound to the mood: 'The sibilance creates a soft, hushed atmosphere as the memory begins.'",
    },
  'If a character is described as having "a heart of stone", what does this mean?': {
    why: "The heart stands for feelings. A stone is hard and cold, so 'a heart of stone' belongs to someone who feels no pity and treats others harshly.",
    not: {
      'They have a medical condition':
        'The phrase is a metaphor, not a fact about their body. It describes their feelings.',
      'They are brave and fearless':
        "That would be 'nerves of steel'. The heart stands for feelings, and a stone heart is one that feels no pity, which is different from courage.",
      'They are calm and patient':
        'Stone is still, but the image is about the heart, where feelings live. A stony heart is hard and pitiless, not patient.',
    },
    more: "This is a metaphor: the heart is said to be made of stone. Its opposite is 'a heart of gold', which describes a very kind person.",
    tip: 'When you meet a phrase like this, explain both parts: what the object is like, and what that suggests about the character.',
  },
  'In H. G. Wells\'s novel, a strange cry carries across empty London: "Ulla, ulla, ulla, ulla". What technique is used to write it down?':
    {
      why: "'Ulla, ulla' imitates the howl the narrator hears as it carries over the streets. Letters that copy a sound are onomatopoeia.",
      not: {
        Personification:
          'Personification gives human qualities to something non-human. The cry is written down as it sounds; nothing is given a human trait.',
        Simile: "There is no comparison using 'like' or 'as'.",
        Metaphor: 'Nothing is said to be something else. The letters copy a sound.',
      },
      more: 'The sound is eerie because it is no word in any human language. The narrator hears it long before he finds out what is making it, so the reader shares his dread.',
      tip: 'When onomatopoeia copies a strange sound rather than a familiar one, say what the strangeness adds: here, a sense of something alien.',
    },
  'Pip says of Estella: "I loved her against reason, against promise, against peace, against hope". What does repeating "against" create?':
    {
      why: "Each 'against' names something that should have stopped him, and he loved her anyway. The repetition piles up the obstacles, so his love sounds helpless and unstoppable.",
      not: {
        'A love that is calm, sensible and wise':
          "Loving 'against reason' is the opposite of sensible. The repetition shows a love that ignores every sensible objection.",
        'A sense that he is unsure of his feelings':
          'He is certain he loved her; what he admits is that it made no sense. The repetition stresses the strength of the feeling, not doubt.',
        'A sense of his anger towards Estella':
          'Nothing here is angry. He is confessing how hopelessly he loved her, despite everything.',
      },
      more: 'Repeating a word at the start of each phrase is called anaphora. Here the rhythm builds like a confession that cannot stop, which suits a love Pip cannot control.',
      tip: "When you analyse repetition, say what is repeated, what the list builds up, and what that shows about the speaker's feelings.",
    },
  'On the night Rochester proposes, Jane notices the chestnut tree in the orchard: "it writhed and groaned". What does this suggest?':
    {
      why: 'Writhing and groaning are what a body does in agony. Giving them to the tree makes nature seem to suffer at the very moment of the proposal, which hints that something is wrong.',
      not: {
        'The night is calm and perfectly still':
          'The tree writhes and the wind roars. Nothing in these verbs is calm or still.',
        'The tree is bending to greet the lovers':
          'Writhing and groaning are signs of pain, not welcome. The tree is not celebrating the lovers.',
        'The tree is simply growing in the rain':
          'Writhing and groaning are not growth. The verbs give the tree a living body in pain.',
      },
      more: 'That same night the chestnut is struck by lightning and half of it is split away. The groaning tree foreshadows that the engagement will be broken apart.',
      tip: "When nature is personified at a key moment, ask what its feelings suggest about the characters' future, then check whether the story fulfils the hint.",
    },
  'Blake asks what immortal hand "Could frame thy fearful symmetry". Which technique links "frame" and "fearful"?':
    {
      why: "'Frame' and 'fearful' begin with the same 'f' sound, close together. Repeating the first sound of nearby words is alliteration.",
      not: {
        Sibilance:
          "Sibilance repeats hissing 's' sounds. There is only one, in 'symmetry', so there is no hissing pattern.",
        Onomatopoeia: "Onomatopoeia imitates a sound. 'Frame' and 'fearful' do not copy any noise.",
        Personification:
          'Personification gives human qualities to something non-human. The question is about a sound pattern, and these two words share their first sound.',
      },
      more: "The soft 'f' gives the line a breathy, awed quality, as if the speaker hardly dares to ask. Blake's whole poem is a string of questions about who could make such a creature.",
      tip: 'Name the sound and its effect together: \'The alliteration of "frame" and "fearful" makes the question sound awed and hushed.\'',
    },
  'If a poem uses words like "dark", "shadow" and "cold", what mood is created?': {
    why: 'Dark, shadow and cold all suggest a lack of light and warmth, which we link with danger and sadness. Together they build a gloomy, threatening mood.',
    not: {
      'Calm and peaceful':
        "Darkness can be quiet, but 'shadow' and 'cold' suggest something hidden or harsh, which makes the mood uneasy rather than peaceful.",
      'Lively and full of energy':
        'Lively writing is full of movement and noise. Dark, shadow and cold are still, lifeless words that slow the mood into gloom.',
      'Bright and cheerful':
        "A cheerful mood would use words like 'bright', 'warm' and 'sunny'. These three words suggest the opposite.",
    },
    more: 'A group of words linked by meaning is called a semantic field. Here a semantic field of darkness and cold creates the atmosphere.',
    tip: "Use the term in analysis: 'The semantic field of darkness creates a gloomy, threatening mood.'",
  },
  '"Her smile was like sunshine." What does the simile suggest about her smile?': {
    why: 'Sunshine is warm and bright and makes people feel happy. Comparing her smile to it suggests her smile spreads warmth and cheers up everyone who sees it.',
    not: {
      'It is so dazzling that it hurts the eyes':
        "That takes the comparison too literally. The simile borrows sunshine's warmth and brightness, not its glare.",
      'It is cold and keeps people away':
        'Sunshine is warm, so the simile suggests the opposite of coldness. A cold smile would be compared to ice or frost.',
      'It is fake and hides her feelings':
        'Nothing in the simile suggests a false smile. Sunshine is natural and welcome, so the comparison suggests her happiness is real.',
    },
    more: 'Writers choose the second half of a simile for its connotations. Sunshine suggests warmth, light and joy, so the reader feels how welcome her smile is.',
    tip: "Name the device, then unpack the image: 'The simile suggests her smile brings warmth and happiness to others.'",
  },
  'What does an ellipsis (...) at the end of a sentence usually suggest?': {
    why: 'An ellipsis, three dots, at the end of a sentence shows something unfinished. It can build suspense, show a thought trailing off, or hint at something the speaker cannot or will not say.',
    not: {
      'A firm, final end to the thought':
        'A full stop gives a firm ending. An ellipsis does the opposite: it leaves the thought hanging.',
      'A change of speaker in the dialogue':
        'A new speaker in dialogue is shown by a new line and new speech marks. An ellipsis shows words trailing off.',
      'A list of items of equal weight':
        'Commas or semicolons separate items in a list. Three dots at the end of a sentence show that something has been left unfinished.',
    },
    more: 'An ellipsis can also show where words have been left out of a quotation. In stories, ending a chapter with one creates a cliffhanger.',
    tip: 'In your own writing, use an ellipsis sparingly, at a moment of tension or hesitation, so it keeps its effect.',
  },
  '"The thunder grumbled in the distance." What does "grumbled" suggest about the storm?': {
    why: 'To grumble is to complain in a low, cross voice. The thunder sounds far off but bad-tempered, as if the storm is building and trouble is on its way.',
    not: {
      'It is right overhead and deafening':
        "The line places the thunder 'in the distance', and grumbling is a low sound. Deafening thunder would crash or explode.",
      'It is cheerful and playful':
        'Grumbling is what a cross person does. It gives the thunder a bad temper, not a playful one.',
      'It is soothing and gentle':
        'A grumble is a sound of discontent. The verb makes the thunder sound sulky and threatening, not restful.',
    },
    more: 'The verb hints at what may come: a storm that grumbles now may break later. Writers use distant thunder to build tension slowly.',
    tip: "Explain what the human quality suggests: 'Personifying the thunder as grumbling creates a sense of distant threat.'",
  },
  'If a character is described as having "fiery eyes", what does this suggest?': {
    why: "Fire is hot, bright and dangerous, so 'fiery eyes' suggests strong feelings blazing out: usually anger, sometimes passion or determination.",
    not: {
      'They are red and sore from crying':
        "Fire is red, but 'fiery' suggests heat and energy blazing out, not soreness. Eyes red from crying would be 'red-rimmed' or 'swollen'.",
      'They are calm and thoughtful':
        "Fire is restless and dangerous. 'Fiery' suggests strong, burning feeling, the opposite of calm.",
      'They are tired and heavy':
        "Tired eyes are dull or heavy. 'Fiery' suggests energy and strong emotion.",
    },
    more: "Eyes are often used to show feelings in fiction. Compare 'cold eyes', which suggest cruelty, or 'sparkling eyes', which suggest joy.",
    tip: "When you analyse a description, ask what the image suggests about the character's feelings, and use the word connotations.",
  },
  '"The buzzing bees flew by." Which technique is "buzzing" an example of?': {
    why: "'Buzzing' imitates the humming sound bees make as they fly. A word that sounds like the noise it describes is onomatopoeia.",
    not: {
      Personification: 'Buzzing is a real bee sound, not a human quality given to the bees.',
      Simile: "There is no comparison using 'like' or 'as'.",
      Metaphor: "Nothing is described as being something else. 'Buzzing' is a sound word.",
    },
    more: "'Buzzing bees' also repeats the 'b' sound, so alliteration and onomatopoeia work together. Alliteration needs two or more words, though, and this question asks about one: on its own, 'buzzing' is onomatopoeia.",
    tip: 'When a question asks about one word, name the device that word creates by itself, then mention any pattern it joins.',
  },
  'What does the word "crept" suggest about how someone is moving?': {
    why: "To creep is to move slowly and quietly so as not to be noticed. 'Crept' suggests the person is being careful and secretive.",
    not: {
      'Quickly and loudly': 'Creeping is slow and quiet, the opposite of rushing noisily.',
      'Happily and openly': 'Creeping is done to avoid being seen, so it is secretive, not open.',
      'Clumsily and noisily': 'A creeping person tries hard not to make a sound.',
    },
    more: "Writers use 'crept' to build tension: a character creeping may be afraid of being caught, or may be about to do something wrong.",
    tip: "In your own stories, choose precise verbs. 'She crept down the stairs' tells the reader far more than 'she went'.",
  },
  '"Time is money." What technique is this?': {
    why: "Time is said to be money, with no 'like' or 'as'. Saying one thing is another is a metaphor.",
    not: {
      Simile: "A simile would say time is like money. Without 'like' or 'as', it is a metaphor.",
      Personification: 'Time is not given human qualities. It is compared to money, an object.',
      Onomatopoeia: 'No word imitates a sound.',
    },
    more: 'The saying, made famous by Benjamin Franklin, suggests that wasted time is wasted money. Many everyday phrases are metaphors we hardly notice.',
    tip: 'Spot metaphors in everyday sayings, then explain what is being compared: here, time is treated as something you can spend or waste.',
  },
  '"Deep in the green sea, the eels creep." What technique is used?': {
    why: "The long 'ee' sound is repeated inside deep, green, sea, eels and creep. Repeating a vowel sound in nearby words is assonance.",
    not: {
      Alliteration:
        'Alliteration repeats the first sound of nearby words. Deep, green, sea, eels and creep all begin differently; what they share is the vowel inside.',
      Sibilance:
        "Sibilance repeats hissing 's' or 'sh' sounds. Only 'sea' and the end of 'eels' have one, too few to make a pattern; what repeats is the vowel 'ee'.",
      Onomatopoeia:
        "Onomatopoeia is a word that imitates a noise, like 'splash'. None of these words copies a sound.",
    },
    more: "Long vowels slow a line down. Here the drawn-out 'ee' makes the movement of the eels feel slow and quiet, deep under the water.",
    tip: 'Read the line aloud and listen to the middle of the words. If the vowels match, name the assonance and say what the sound does to the pace.',
  },
  'King Henry urges his soldiers on: "Stiffen the sinews, summon up the blood". What technique is used?':
    {
      why: "'Stiffen' and 'summon' are commands: Henry orders his men to tense their muscles and call up their courage. Verbs that give orders are imperatives.",
      not: {
        'Rhetorical questions':
          'A rhetorical question is asked for effect and ends with a question mark. Henry gives orders; he asks nothing.',
        Similes:
          "A simile compares using 'like' or 'as'. Here Henry tells his men what to do with their bodies.",
        Onomatopoeia:
          "Onomatopoeia imitates a sound. 'Stiffen' and 'summon' are actions, not noises.",
      },
      more: "The commands come in a rush, with a hissing run of 's' sounds, so the speech sounds urgent and fierce. Henry is turning tired men into fighters by words alone.",
      tip: 'When you spot imperatives in a speech, say who is being ordered and what the commands are meant to make them feel or do.',
    },
  'Shylock asks: "If you prick us, do we not bleed?" What technique is used?': {
    why: 'Shylock does not expect an answer: everyone knows that pricked skin bleeds. A question asked to make a point, whose answer is obvious, is a rhetorical question.',
    not: {
      Hyperbole:
        'Hyperbole is deliberate exaggeration. A pin-prick drawing blood is plain fact, which is the whole point.',
      'Imperative sentence':
        "An imperative sentence gives an order, such as 'Stand still.' Shylock asks a question instead.",
      Oxymoron:
        "An oxymoron joins two contradictory words, like 'living death'. No words here contradict each other.",
    },
    more: 'The obvious answer makes his point for him: a Jew bleeds like any Christian. The question forces his listeners to admit a shared humanity they have denied him.',
    tip: 'When you analyse a rhetorical question, say what answer it expects and what admitting that answer forces the listener to accept.',
  },
  'Antony opens his funeral speech: "Friends, Romans, countrymen, lend me your ears". What technique opens the line?':
    {
      why: 'Antony speaks straight to the crowd, naming them three ways: friends, Romans, countrymen. Speaking directly to an audience is direct address, and it pulls every listener in.',
      not: {
        'Rhetorical question':
          "It is a request, not a question: 'lend me your ears' asks the crowd to listen, with no question mark.",
        Onomatopoeia: 'Onomatopoeia imitates a sound. None of these words copies a noise.',
        Oxymoron:
          'An oxymoron joins two contradictory words. Friends, Romans and countrymen do not contradict each other.',
      },
      more: "The crowd has just cheered Brutus and called Caesar a tyrant. Greeting them first as friends claims their goodwill; only then does he name Caesar: 'I come to bury Caesar, not to praise him.'",
      tip: 'In your own speeches, open by addressing your audience by a name that flatters or includes them.',
    },
  'Told that his wife is dead, a king says: "Life\'s but a walking shadow". What technique is used?':
    {
      why: "Life is said to be a shadow, with no 'like' or 'as'. Saying one thing is another is a metaphor.",
      not: {
        Simile:
          "A simile would say life is like a walking shadow. Without 'like' or 'as', it is a metaphor.",
        Hyperbole:
          'Hyperbole is exaggeration. Macbeth is not overstating; he is saying what he now believes life is.',
        Onomatopoeia: "Onomatopoeia imitates a sound. 'Shadow' copies no noise.",
      },
      more: "A shadow has no substance and soon vanishes. Coming just after Lady Macbeth's death, the metaphor shows a man who now sees life as empty and meaningless.",
      tip: 'Explain what carries over from the image: a shadow is dark, brief and empty, so life seems the same.',
    },
  '"This is the cheapest, fastest and greenest way to travel." Which kind of word is repeated to persuade?':
    {
      why: "Cheapest, fastest and greenest all end in '-est', the form that says something is the most of all. Superlatives make the claim sound unbeatable.",
      not: {
        'Comparative adjectives':
          "Comparatives compare two things and end in '-er', like 'cheaper'. These words end in '-est', claiming to beat everything.",
        'Imperative verbs':
          "Imperatives give orders, like 'Travel green'. There is no command in this sentence.",
        'Personal pronouns':
          "Personal pronouns are words like 'I', 'you' and 'we'. The repeated feature here is the '-est' adjectives.",
      },
      more: 'Adverts rely on superlatives because they sound confident and are hard to check. Three of them in a row make the claim feel complete.',
      tip: 'When you analyse persuasion, ask whether a superlative is proven. Pointing out an unproven claim shows critical reading.',
    },
  'Dickens calls Scrooge "a squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner". What links "squeezing", "grasping" and "clutching"?':
    {
      why: 'Squeezing, grasping and clutching all describe hands holding on hard. Together they build a semantic field of greed: Scrooge grips his money and will not let go.',
      not: {
        'They all imitate the sound of coins':
          'None of the words copies a sound. They describe what hands do, not what money sounds like.',
        'They all describe a generous, kind man':
          'Each word describes taking and keeping, the opposite of generosity.',
        'They all begin with the very same sound':
          'They begin with different sounds: s, g and c. What links them is their meaning.',
      },
      more: "The list itself feels grasping: seven words piled up before 'sinner' with no 'and', as if Dickens cannot stop. The pile makes Scrooge's greed seem endless.",
      tip: 'When a writer lists words from one area of meaning, name the semantic field and say what picture it builds.',
    },
  'Just after killing the king, a murderer asks: "Will all great Neptune\'s ocean wash this blood / Clean from my hand?" Which technique is used?':
    {
      why: 'Macbeth imagines that the whole ocean could not wash a little blood from one hand. The impossible scale is deliberate exaggeration, which is hyperbole, and it shows how vast his guilt feels.',
      not: {
        Simile: "There is no comparison using 'like' or 'as'. Macbeth asks about the ocean itself.",
        Euphemism:
          'A euphemism softens something unpleasant. Macbeth makes his crime sound bigger, not gentler.',
        Onomatopoeia: 'Onomatopoeia imitates a sound. None of these words copies a noise.',
      },
      more: 'He answers himself: his hand would rather turn the green sea red. The blood is real, but the hyperbole shows a guilt that no washing can remove.',
      tip: 'When you find hyperbole, link the exaggeration to the feeling behind it: here, guilt so great it seems bigger than the sea.',
    },
  '"The bacon sizzled in the pan while Grandad read the newspaper." Which word is onomatopoeia?': {
    why: "'Sizzled' imitates the hissing, spitting sound of bacon frying. A word that sounds like the noise it describes is onomatopoeia.",
    not: {
      Grandad: "'Grandad' names a person. It does not imitate any sound.",
      newspaper:
        "'Newspaper' names an object. Reading a paper is quiet, and the word does not copy a sound.",
      bacon: "'Bacon' names the food. It is the verb that tells us how the bacon sounds.",
    },
    more: 'One sound word can make a quiet scene feel real and homely: the reader is in the kitchen with Grandad, smelling breakfast.',
    tip: 'Look for verbs of sound, such as sizzle, crackle and hiss. Then say what the sound adds to the mood of the scene.',
  },
  'A nobleman who has begun to dream of murder says in an aside: "Let not light see my black and deep desires." Which word gives the light a human power?':
    {
      why: "Seeing is something people do. Macbeth speaks of the light as if it had eyes that could watch him, so 'see' gives it a human power.",
      not: {
        black: "'Black' describes his desires, not the light. It makes them sound evil.",
        deep: "'Deep' describes how hidden his desires are, not anything the light does.",
        desires: "'Desires' names what he wants hidden. The light's human power lies in the verb.",
      },
      more: 'Macbeth wants darkness to hide what he has begun to plan. He fears being seen even by the light, which shows he already knows his wish is wicked.',
      tip: 'When a line personifies, find the exact word that does it and say what it shows about the speaker: here, a man afraid of being seen.',
    },
  '"All night, rain lashed the bedroom windows." Which word makes the rain seem violent?': {
    why: 'To lash is to strike hard, like a whip. The verb makes the rain beat against the glass with force, so the night feels wild and violent.',
    not: {
      bedroom:
        "'Bedroom' tells us where the windows are. It may make the storm feel close, but the violence is in the verb.",
      windows: "'Windows' names what the rain hits. The force comes from how it hits them.",
      night:
        "'All night' tells us how long the storm lasts. It makes the rain relentless, but it is the verb that makes it violent.",
    },
    more: "A precise verb does more than an adjective. 'Lashed' suggests a whip, so the rain sounds cruel and the storm seems to attack the house.",
    tip: "In analysis, quote the single verb and explore its connotations. In your own writing, replace 'fell' with a verb that shows force.",
  },
  'Caliban says the island is full of "Sounds, and sweet airs, that give delight, and hurt not." Which sound creates the sibilance?':
    {
      why: "Sibilance is the repetition of hissing 's' sounds, and here they run through sounds, sweet and airs.",
      not: {
        "the 't' sound":
          "There are several 't' sounds, but 't' is a hard sound made with a tap of the tongue. Sibilance is made by hissing sounds.",
        "the 'd' sound":
          "'D' is a hard sound, made by stopping the air with the tongue. It cannot hiss.",
        "the 'l' sound":
          "'L' is a soft, flowing sound, but it does not hiss, so it is not sibilance.",
      },
      more: 'The soft hiss suits what Caliban describes: gentle music that soothes rather than hurts. His speech is one of the most beautiful in the play, though others treat him as a monster.',
      tip: "Name the sound, then link it to the meaning: 'The sibilance makes the island's music sound soft and soothing.'",
    },
  '"Mia froze as the footsteps came closer." Which word shows how Mia reacts to her fear?': {
    why: "Freezing is a sudden stop caused by fear, when the body goes rigid. 'Froze' shows Mia's terror through what she does, without the writer saying 'she was scared'.",
    not: {
      footsteps:
        'The footsteps are what frightens Mia, not her reaction. They build the tension around her.',
      closer:
        "'Closer' makes the threat grow, which builds tension. It describes the footsteps, not how Mia responds.",
      came: "'Came' is a plain verb of movement for the footsteps. It tells us nothing about how Mia feels.",
    },
    more: "This is 'show, not tell': one physical reaction lets the reader feel the fear for themselves. The approaching footsteps then keep the tension climbing.",
    tip: "In your own stories, show a character's fear through the body: freezing, trembling, holding a breath. It is more powerful than naming the feeling.",
  },
  '"The fox darted across the frozen field." Which word shows the fox moves quickly?': {
    why: "To dart is to move suddenly and fast, in a quick straight line. 'Darted' shows the fox's speed and alertness in a single verb.",
    not: {
      frozen: "'Frozen' describes the field, not the fox. It sets a cold, wintry scene.",
      across: "'Across' tells us the direction the fox goes. It says where, not how fast.",
      field: "'Field' names the place. The speed is in the verb.",
    },
    more: "Compare 'The fox walked across the field'. Changing one verb changes the whole picture, from calm to quick and nervous.",
    tip: 'Choose precise verbs in your own writing: darted, strolled, stumbled and marched each show a different kind of movement.',
  },
  '"The room was warm and bright, but outside the wind screamed." Which connective signals the contrast?':
    {
      why: "'But' is a contrasting connective: it sets what follows against what came before. Here it swings the sentence from a cosy room to a screaming wind.",
      not: {
        and: "'And' is a connective too, but it adds, joining warm and bright. It does not set one idea against another.",
        outside:
          "'Outside' tells us where the wind is, and it is not a connective. The word that joins and contrasts the two halves is 'but'.",
        bright:
          "'Bright' describes the room. It belongs to the comfort on one side of the contrast.",
      },
      more: 'Contrast makes both halves stronger: the warmth feels safer because of the storm, and the storm feels wilder because of the warmth.',
      tip: "When you analyse a sentence's structure, look for the turning word, such as but, yet or however, and explain the shift it creates.",
    },
  '"Thousands of innocent animals suffer every year." Which adjective is chosen to make readers feel sympathy?':
    {
      why: "'Innocent' tells the reader the animals have done nothing to deserve their suffering. It is an emotive adjective, chosen to make the reader feel pity and anger.",
      not: {
        thousands:
          "'Thousands' shows the scale of the problem, which adds weight, but it is a number, not an adjective chosen for feeling.",
        suffer: "'Suffer' does stir sympathy, but it is a verb, not an adjective.",
        every:
          "'Every' shows the suffering happens year after year. It adds no feeling of its own.",
      },
      more: 'Charities choose emotive words such as innocent, helpless and defenceless because readers feel more when the victims seem blameless.',
      tip: "When you analyse persuasive writing, name the emotive word, its word class and the feeling it targets: 'The adjective innocent provokes pity.'",
    },
  'Weary of life, a king says: "Tomorrow, and tomorrow, and tomorrow, / Creeps in this petty pace from day to day". What does repeating "tomorrow" do?':
    {
      why: "Saying 'tomorrow' three times, joined by 'and', makes the days pile up with no end, and 'Creeps' slows them down. Time feels like a slow, pointless crawl.",
      not: {
        'It makes the future sound bright and exciting':
          "Nothing in 'petty pace' or 'Creeps' is exciting. The future sounds dull and empty.",
        'It shows that time is running out quickly':
          'The days creep, so time drags rather than rushes.',
        'It makes the line sound light and playful':
          'The repetition sounds weary and heavy, not light.',
      },
      more: 'Macbeth has just been told that the queen is dead. The repetition shows a man for whom the future holds nothing but more empty days.',
      tip: "Link repetition to rhythm: the repeated 'and tomorrow' slows the line, so the sound itself drags like the time it describes.",
    },
  '"Buy now. Save more. Live better." What effect do the commands have on a reader?': {
    why: 'Each sentence is a short command. Three in a row, with no reasons given, create pressure to act straight away, before the reader stops to think.',
    not: {
      'They describe the product in detail':
        'There are no details about any product: no size, price or feature. The sentences give orders, not description.',
      'They ask the reader for an opinion':
        'Asking for an opinion would need a question. These are commands, which leave the reader no room to disagree.',
      'They warn the reader about a danger':
        'A warning tells the reader to avoid something. These commands promise gains, saving and living better, to tempt the reader in.',
    },
    more: 'Adverts pair commands with promises: each verb is followed by a reward. The rhythm of three short sentences makes the slogan easy to remember.',
    tip: 'When you analyse a slogan, name the imperatives, then explain how their pace and confidence pressure the reader.',
  },
  'A new king, afraid of his rivals, tells his wife: "O, full of scorpions is my mind, dear wife". What does the metaphor suggest about his mind?':
    {
      why: "Scorpions sting, and a mind full of them can never rest. The metaphor shows Macbeth's thoughts as poisonous and painful: his fears torment him even though he is king.",
      not: {
        'It is calm and settled now he is king':
          'Being king has not brought peace. The scorpions show his mind is in torment.',
        'It is sharp, clever and ready for battle':
          'Scorpions are not weapons for a fight. They are creatures that sting the mind they live in.',
        'It is fascinated by dangerous creatures':
          'That reads the image literally. The scorpions stand for his tormenting thoughts.',
      },
      more: 'In the next line he reminds her that Banquo and Fleance still live. The scorpions are his fears, and they will drive him to more murder.',
      tip: 'Explain what the image carries over: scorpions suggest stings, poison and constant danger, all inside his own head.',
    },
  '"The streets were empty, silent, lifeless." What effect does the list of three adjectives create?':
    {
      why: 'Empty, silent and lifeless all point the same way: no people, no sound, no life. Three adjectives in a row pile up the emptiness, so the mood feels bleak.',
      not: {
        'It makes the streets sound busy':
          'Every adjective says the opposite: empty streets with no sound and no life.',
        'It creates a cheerful, lively feel':
          'Lifeless and silent are bleak words. A cheerful scene would be full of noise and movement.',
        'It shows the narrator is excited':
          'The adjectives describe dead, empty streets. They suggest unease or sadness, not excitement.',
      },
      more: "In a list, the last word often hits hardest. 'Lifeless' goes beyond empty and silent, making the streets seem not just quiet but dead.",
      tip: 'When you analyse a list, look at the order. Explain how the final item builds on the first two.',
    },
  '"Pop, crackle, fizz went the fireworks." What does the onomatopoeia help the reader do?': {
    why: 'Pop, crackle and fizz imitate the sounds of the fireworks going off. Words that copy sounds make the reader hear the display, not just picture it.',
    not: {
      'See the colours in the sky':
        "Colours come from visual words, such as 'gold' or 'glittering'. These three words copy sounds.",
      'Feel the cold of the night air':
        'Nothing in the line describes temperature. The three words are all sounds.',
      'Smell the smoke from the bonfire':
        "Smell would need words like 'smoky' or 'burnt'. Onomatopoeia works on the ear.",
    },
    more: 'Writers mix the senses to make a scene vivid. A run of sound words also gives a line a quick, crackling rhythm, like the fireworks themselves.',
    tip: "Say which sense a technique appeals to and what that adds: 'The onomatopoeia brings the display to life through sound.'",
  },
  '"The sweet, soft scent of summer roses." What mood does the sibilance help to create?': {
    why: "The soft 's' sounds in sweet, soft, scent and summer are quiet and smooth, like a whisper. With the gentle words around them, they create a calm, soothing mood.",
    not: {
      'Harsh and violent':
        "Harsh moods come from hard sounds, like 'k' and 't'. Soft 's' sounds and words like 'sweet' make this line smooth.",
      'Tense and fearful':
        "Sibilance can sound sinister, like a snake's hiss, but here it describes sweet summer roses, so it feels peaceful.",
      'Loud and lively':
        "A hiss is quiet. Repeated 's' sounds hush a line rather than make it noisy.",
    },
    more: 'A sound has no fixed meaning: it takes its effect from the words around it. In a description of roses, sibilance soothes.',
    tip: 'Never say a sound has one fixed effect. Explain how the sibilance works with the meaning of the words around it.',
  },
  '"Bang. The door slammed shut." What is the effect of opening with "Bang"?': {
    why: "'Bang' is a sound word standing alone as a sentence. Placed first, it hits the reader before they know what is happening, so the opening is sudden and startling.",
    not: {
      'It slowly builds a calm and quiet mood':
        'One loud word with a full stop is abrupt. It creates shock, not calm.',
      'It introduces the main character':
        'No character is named. The opening word is a sound, not a person.',
      'It explains why the door was shut':
        'Nothing explains why the door shut. The sound comes first and the cause is left unknown, which creates mystery.',
    },
    more: 'Starting with a sound drops the reader straight into the action. The short second sentence then says what happened, keeping the pace quick.',
    tip: 'Try opening a story with a single sound word or a very short sentence. It grabs attention far faster than a long description.',
  },
  'Shakespeare writes that true love "is the star to every wandering bark", a bark being a ship. What does the metaphor suggest about love?':
    {
      why: "Sailors steered by the stars long before modern instruments. Calling love 'the star to every wandering bark' makes it a fixed guide that keeps people on course, however lost they are.",
      not: {
        'It is distant and hard to reach':
          'Stars are far away, but the point is that sailors steer by them. Love is shown as a guide, not out of reach.',
        'It only shines for a short time':
          'The poem praises love that does not change or fade. The star is fixed and lasting.',
        'It is cold and has no feeling':
          'The image is about guidance. The poem presents love as constant and true, not cold.',
      },
      more: 'The sonnet defines true love by what it is not: it does not alter or end. The star gives that constancy a picture, something fixed in a changing world.',
      tip: 'Explain both halves of the image: what a star does for a lost ship, and what that suggests love does for people.',
    },
  '"The lake was a mirror, still and silver." What does the metaphor suggest about the water?': {
    why: 'A mirror is flat and smooth and reflects what is around it. Calling the lake a mirror suggests the water is so still that it reflects the sky.',
    not: {
      'It is choppy and rough in the wind':
        "A mirror is perfectly flat. Waves would break up any reflection, and the line says the water is 'still'.",
      'It is dirty and murky':
        "Mirrors are clear and reflective, and 'silver' suggests brightness. Nothing suggests mud or dirt.",
      'It is deep and dangerous':
        'The image is about the surface, not the depth. A mirror suggests calm, not danger.',
    },
    more: "The words 'still and silver' extend the image: stillness and a silver shine both belong to a mirror. The scene feels peaceful and almost magical.",
    tip: 'In analysis, explain the link between the two things compared: what a mirror and a still lake share is a flat, reflecting surface.',
  },
  '"I trudged home through the rain." What does "trudged" suggest?': {
    why: 'To trudge is to walk slowly and heavily, as if each step is an effort. It suggests the speaker is tired, fed up or sad on the way home.',
    not: {
      'Running home in excitement':
        'Trudging is slow and heavy. It is the opposite of running, and it shows reluctance, not excitement.',
      'Skipping along happily': 'Skipping is light and happy. Trudging is heavy and weary.',
      'Marching proudly and fast':
        'Marching is firm and confident. Trudging drags, as if the walker can barely be bothered.',
    },
    more: "With 'through the rain', the verb paints a whole mood: a soggy, miserable walk home. One well-chosen verb can show feelings without naming them.",
    tip: "Collect verbs of movement and their connotations: trudge, stroll, stride, scurry. Choose the one that shows your character's mood.",
  },
  '"Silence. Then a scream." What does the one-word sentence "Silence." create?': {
    why: 'A single word with a full stop makes the reader pause. The silence hangs there, and the reader waits, sensing that something is about to break it.',
    not: {
      'A peaceful, relaxed end to the scene':
        'The scream that follows shows the silence was not peaceful. It was the calm before a shock.',
      'A long and detailed piece of description':
        'One word is the opposite of a long description. Its power comes from being so short.',
      'A cheerful change of mood':
        'Nothing cheerful happens: the silence leads straight to a scream. The mood darkens, not lifts.',
    },
    more: 'A sentence of a single word or phrase is called a minor sentence. Its abruptness can mimic a held breath.',
    tip: 'In your own writing, use a one-word sentence just before a dramatic moment, so the reader is forced to stop and wait.',
  },
  'Before the battle, King Henry tells his army: "We few, we happy few, we band of brothers." What does repeating "we" do?':
    {
      why: "'We' includes Henry with his men: king and common soldier become one band of brothers. Repeating it makes the army feel united and proud before the battle.",
      not: {
        'It makes the king sound lonely and apart':
          "'We' joins him to his men. Henry speaks as one of them, not apart from them.",
        'It describes the army in great detail':
          "The phrases say nothing about the army's size or weapons. Their force is in the shared 'we'.",
        'It asks the soldiers a direct question':
          'There is no question here; each phrase is a statement.',
      },
      more: "'Few' turns a weakness into a boast: fewer men means a greater share of honour. Inclusive pronouns are still a speechmaker's first tool.",
      tip: 'In a speech, use inclusive pronouns to make your audience feel part of a team, and turn a weakness into a source of pride.',
    },
  '"The old man\'s face was a map of wrinkles." What does the metaphor suggest?': {
    why: "A map is covered in lines. Calling his face 'a map of wrinkles' suggests deep lines built up over many years, as if his face records the story of his life.",
    not: {
      'He has travelled all over the world':
        'That takes the map literally. The image is about the lines on his face, not journeys he has made.',
      'He is lost and cannot find his way':
        'Maps help people find their way, but the metaphor describes how his face looks, not his sense of direction.',
      'His face is young and smooth':
        'Wrinkles are lines of age. The metaphor stresses how lined his face is, the opposite of smooth.',
    },
    more: 'A good metaphor can work on more than one level: the map suggests both the criss-crossing lines and a long life lived.',
    tip: 'When you analyse a metaphor, explain what the two things have in common, then any wider idea it suggests.',
  },
  "After his father's murder, Donalbain warns: \"There's daggers in men's smiles\". What does he mean?":
    {
      why: 'A smile looks friendly, but Donalbain fears it may hide a killer. The metaphor of daggers in smiles means that anyone being kind to them could be plotting their death.',
      not: {
        'Everyone at court carries a knife':
          'That takes the daggers literally. The point is that danger hides behind friendly faces.',
        'Their friends here will keep them safe':
          'Smiles look friendly, but Donalbain warns that daggers hide in them: the friendliest faces may be the most dangerous.',
        'The killers have been caught smiling':
          'No one has been caught. The danger he fears is that the murderer is still among them, smiling.',
      },
      more: 'Donalbain and his brother Malcolm flee at once, which makes them look guilty. The line sums up a play in which faces cannot be trusted.',
      tip: 'When a line says appearance and reality differ, link it to the theme of deception and to a character who hides behind a smile.',
    },
  '"Our town is drowning in litter." What does "drowning" suggest about the litter?': {
    why: "Drowning means being overwhelmed until you cannot breathe. Saying the town is 'drowning in litter' suggests there is so much rubbish that the town is swamped by it.",
    not: {
      'The litter is floating in the local river':
        "That takes the verb literally. No water is mentioned; 'drowning' shows the amount of litter.",
      'The town has been flooded by heavy rain':
        'There is no rain in the sentence. The town is drowning in litter, not water.',
      'A small amount of litter is easy to clear':
        "'Drowning' suggests far too much, the opposite of a small amount.",
    },
    more: 'The town is not literally under anything; the image overstates the problem on purpose, to make it feel urgent and serious.',
    tip: 'Persuasive writers use strong verbs to make a problem feel urgent. Quote the verb and explain the feeling it is meant to stir.',
  },
  '"The cake was a masterpiece, a work of art, a thing of beauty." What effect do the three phrases create?':
    {
      why: 'Each phrase praises the cake more grandly than the last: a masterpiece, a work of art, a thing of beauty. Three in a row pile up the admiration.',
      not: {
        'They list what the cake is made of':
          'No ingredients are named. The phrases describe how impressive the cake is, not what is in it.',
        'They suggest the cake has gone wrong':
          'Every phrase is full of praise. A cake that had gone wrong would not be called a masterpiece.',
        'They show the speaker is unsure of it':
          'Three confident phrases sound certain, not unsure. Each one adds more praise.',
      },
      more: 'Calling a cake a masterpiece is deliberately over the top, so the praise may sound playful, or proud if the speaker baked it.',
      tip: 'When you analyse a list of three, say what each item adds and how the list builds to its end.',
    },
  '"The match was cancelled. Again." What does the one-word sentence "Again." suggest about the speaker?':
    {
      why: "'Again.' standing alone shows this has happened before. Giving the word its own sentence makes it sound flat and weary, as if the speaker is sighing.",
      not: {
        'They are shocked by a new event':
          "'Again' tells us it is not new. Something that keeps happening is a let-down, not a shock.",
        'They are glad to have a free day':
          "The flat, separate 'Again.' sounds disappointed. Nothing suggests the speaker welcomes the free time.",
        'They are unsure what has happened':
          'The speaker knows exactly what has happened: the match is cancelled, and not for the first time.',
      },
      more: "Tone is the attitude a writer's words suggest. A single word set apart can carry a lot of it: weariness, sarcasm or frustration.",
      tip: 'When you write about tone, name the feeling precisely, such as weary, bitter or amused, and quote the words that create it.',
    },
  '"Fresh, fast and full of flavour: try our new noodles." What does the alliteration do?': {
    why: "Fresh, fast, full and flavour all begin with 'f'. The repeated sound makes the slogan easy to say and easy to remember, which is exactly what an advert wants.",
    not: {
      'It slows the reader right down':
        "Nothing here asks the reader to pause. The repeated 'f' makes the slogan quick and easy to say, so it moves along briskly.",
      'It makes the noodles sound risky':
        'Every word is positive: fresh, fast, full of flavour. The sound pattern sells the noodles; it does not warn about them.',
      'It hides what the noodles are like':
        'The words do describe the noodles: fresh, quick and tasty. The alliteration makes that description stick.',
    },
    more: "Brand names and slogans often use alliteration for this reason. The light 'f' sound also suits the idea of something fresh and quick.",
    tip: 'Do not stop at naming alliteration. Say why the writer wants the sound: here, to make readers remember the advert.',
  },
  '"I glanced at the letter. My stomach dropped." What does "My stomach dropped" show?': {
    why: "'My stomach dropped' describes the sinking feeling of sudden fear or dread. Coming straight after the glance at the letter, it shows the news is bad, without saying so.",
    not: {
      'That the narrator has not eaten':
        'The phrase describes a feeling, not hunger. It comes the moment the narrator reads the letter.',
      'That the narrator dropped the letter':
        "Nothing falls except, in a sense, the narrator's stomach. The phrase is figurative.",
      'Relief that the news is good':
        'Relief feels like lightness. A dropping stomach is a feeling of shock and dread.',
    },
    more: 'Writers often show emotion through the body: a dropping stomach, a racing heart, cold hands. The reader recognises the feeling from their own experience.',
    tip: 'In creative writing, follow a small action with a physical reaction, as here. It shows the emotion and keeps the reader guessing about the cause.',
  },
  '"He was a lion in battle." What technique is this?': {
    why: "He is described as actually being a lion, with no 'like' or 'as'. Saying one thing is another is a metaphor.",
    not: {
      Simile:
        'A simile would say he fought like a lion. Here he simply is one, so it is a metaphor.',
      Hyperbole:
        "Hyperbole is deliberate exaggeration, such as 'a million times'. Here the point is the comparison: he is called a lion to give him a lion's courage, which makes it a metaphor.",
      Personification:
        "Personification gives human qualities to non-human things. Here a human is given an animal's qualities, the other way round.",
    },
    more: 'A metaphor is often stronger than a simile because it does not soften the comparison. He does not just fight like a lion; he becomes one.',
    tip: "Explain the qualities carried over: 'The metaphor suggests he is fierce, fearless and powerful.'",
  },
  '"The room fell silent." What does "fell" suggest?': {
    why: "'Fell' suggests something dropping quickly, so the silence arrives all at once, as if everyone stopped speaking at the same moment.",
    not: {
      'The ceiling caved in':
        "'Fell' is not literal here. Nothing in the room falls down; it is the noise that stops.",
      'A person tripped and fell over':
        "No person falls. 'Fell' describes how the silence arrived.",
      'Night had begun to fall':
        'We do say night falls, but here it is the silence that falls, and nothing mentions the time of day.',
    },
    more: 'Sudden silence often signals shock or tension: something has just happened, or everyone is waiting. Writers use it to make readers hold their breath.',
    tip: "Zoom in on single verbs. Explain what 'fell' suggests about speed and mood, not just what happened.",
  },
  'Why might a writer use a rhetorical question?': {
    why: "A rhetorical question is asked for effect, not for an answer. It pulls the reader in and makes them consider the issue, often leading them towards the writer's view.",
    not: {
      'To get a written answer from the reader':
        'A rhetorical question expects no answer at all. Its answer is usually so obvious that the reader supplies it silently.',
      'To give the reader new facts and figures':
        'A question gives no information; it prompts thought. Facts and figures are a different persuasive method.',
      'To mark the end of a paragraph':
        'It can appear anywhere in a text. Where it goes matters less than the thinking it provokes.',
    },
    more: "Persuasive writers use rhetorical questions to make the answer feel obvious: 'Who would want their children to breathe dirty air?'",
    tip: 'In persuasive writing, use one or two rhetorical questions to involve your reader. Too many can sound like nagging.',
  },
  '"I\'ve told you a million times to tidy your room." What technique is used?': {
    why: 'Nobody has really said something a million times. The speaker exaggerates on purpose to show frustration, and deliberate exaggeration is hyperbole.',
    not: {
      Metaphor: 'Nothing is described as being something else. The number is simply exaggerated.',
      Irony:
        'Irony says the opposite of what is meant, or shows the opposite of what is expected. This speaker means what they say; they just exaggerate.',
      Understatement:
        'Understatement makes something seem smaller than it is. This does the opposite: it makes the number enormous.',
    },
    more: 'Hyperbole is common in everyday speech and in persuasive writing. It shows strong emotion and grabs attention, but no one takes it literally.',
    tip: "Explain the feeling behind the exaggeration: 'The hyperbole shows how frustrated and impatient the speaker is.'",
  },
  '"The weather wept." What does this suggest?': {
    why: "Weeping means crying, so 'wept' suggests rain falling like tears. Giving the weather a human feeling also tells us the mood is sad.",
    not: {
      'A person is crying out in the rain':
        "It is the weather that weeps, not a person. 'Wept' is used figuratively for the rain.",
      'The sun is out and the day is bright':
        'Tears suggest rain and gloom. Weeping weather is not bright or sunny.',
      'A strong wind is blowing hard':
        "Weeping is quiet crying, which suggests falling rain. Nothing in 'wept' suggests a strong wind.",
    },
    more: 'This is personification, and also pathetic fallacy: the weather mirrors the sadness of the characters or the scene.',
    tip: "When weather matches a character's feelings, name it as pathetic fallacy and explain the link: 'The weeping weather mirrors her grief.'",
  },
  '"She sells sea shells on the sea shore." This contains which two techniques?': {
    why: "The line repeats 's' and 'sh' sounds at the start of words: she, sells, sea, shells, shore. That is alliteration, and because the sounds are hissing ones, it is also sibilance.",
    not: {
      'Metaphor and simile':
        "Nothing is compared to anything else, with or without 'like' or 'as'. The line is about sound, not comparison.",
      'Personification and hyperbole':
        'No object is given human qualities and nothing is exaggerated. She really sells shells.',
      'Oxymoron and irony':
        'No two words contradict each other, and nothing means the opposite of what it says.',
    },
    more: "Sibilance is sound repetition using hissing or hushing sounds such as 's', 'sh' and 'z'. Here the hushing sounds even suit the sea.",
    tip: 'When one line contains two sound devices, name both and say which sounds create them. Precise terms show precise reading.',
  },
  '"Life is a rollercoaster." What does the metaphor suggest about life?': {
    why: 'A rollercoaster climbs, plunges and twists without warning. The metaphor suggests life is full of sudden ups and downs: thrilling moments and frightening drops.',
    not: {
      'It is fun from start to finish':
        'Rollercoasters thrill, but they also frighten. The metaphor stresses the ups and downs, not constant fun.',
      'It goes round and round in circles':
        'Some rides loop, but the image is about rising and falling. Life is shown as unpredictable, not repetitive.',
      'It is short and soon over':
        'A ride is brief, but the metaphor borrows its motion, the climbs and drops, not its length.',
    },
    more: 'Everyday metaphors like this are so familiar we barely notice them. In analysis, say which features of the image carry over to the subject.',
    tip: "Explain which features of the image carry over: 'The rollercoaster metaphor suggests life's sudden highs and lows.'",
  },
  'In Romeo and Juliet, what does "star-cross\'d lovers" mean?': {
    why: "In Shakespeare's time many people believed the stars shaped human lives. 'Star-cross'd' means the stars are against them, so Romeo and Juliet are doomed by fate from the start.",
    not: {
      'They quarrel and cross each other':
        "'Cross'd' here means thwarted, blocked. They are crossed by the stars, not cross with each other, and the lovers never turn on each other.",
      'They are blessed with good luck':
        "The stars here are against them. 'Star-cross'd' means ill-fated, the opposite of lucky.",
      'They first met under the stars':
        "They first meet at the Capulets' feast. 'Star-cross'd' is about fate working against them, not where they met.",
    },
    more: 'The Chorus says this in the Prologue, before the action begins, so the audience knows the lovers will die. Watching them hope while knowing the ending creates dramatic irony.',
    tip: 'Use the phrase as evidence for the theme of fate, and link it to later moments where characters feel trapped by forces beyond their control.',
  },
  'Holding his dead daughter Cordelia, Lear says: "Never, never, never, never, never". What technique is used?':
    {
      why: "The single word 'never' is said five times in one line. Repeating a word like this is repetition, and here it hammers home that Cordelia will never come back.",
      not: {
        Personification:
          'Nothing non-human is given human qualities. Lear is speaking of his daughter.',
        Simile: "Nothing is compared using 'like' or 'as'.",
        Onomatopoeia: "'Never' does not imitate a sound.",
      },
      more: "The line is five stressed beats on one word and nothing else. Grief has stripped Lear's language down to a single, unbearable fact.",
      tip: 'When a writer repeats one word, say what the repetition does to the rhythm and to the feeling: here, it sounds like a heart breaking.',
    },
  'What does the word "lurking" suggest about a character?': {
    why: 'To lurk is to wait out of sight, usually to do something bad. The word suggests the character is hidden, watching, and dangerous.',
    not: {
      'They are shy and keep to themselves':
        "A shy person may stay out of sight, but 'lurking' adds menace: the character is waiting, watching and planning something.",
      'They are lost and looking for help':
        'A lost person is unsure where to go. Lurking is deliberate: the character chooses to hide and wait.',
      'They are resting after a long day':
        'Lurking is an alert, watchful act. A resting character is not waiting to strike.',
    },
    more: 'Verbs like lurking, creeping and prowling make a reader uneasy before anything happens. They are useful for building tension in a story.',
    tip: "Comment on the connotations of a single verb: 'lurking' suggests secrecy and menace, which builds suspense.",
  },
  '"The classroom was a zoo." What does the metaphor suggest about the class?': {
    why: 'A zoo is full of noisy, restless animals. Calling the classroom a zoo suggests the pupils are loud, wild and out of control, behaving more like animals than students.',
    not: {
      'They are learning all about animals':
        'That takes the zoo literally. The metaphor describes how the class behaves, not what it is studying.',
      'They are quiet and well behaved':
        'A zoo is noisy and chaotic. The metaphor suggests the opposite of good behaviour.',
      'They are bored and half asleep':
        'Some zoo animals do doze, but a zoo is known for noise and chaos, and the metaphor points to wild behaviour.',
    },
    more: 'The metaphor exaggerates for comic effect: the class is not really full of animals, but the image makes the chaos easy to picture.',
    tip: "Explain what the image suggests about behaviour: 'The zoo metaphor suggests the pupils are wild, noisy and out of control.'",
  },
  'If a poem has a regular rhyme scheme (ABAB), what effect does this create?': {
    why: 'In ABAB, lines one and three rhyme, and lines two and four rhyme. The pattern makes a poem sound musical and ordered, like a song.',
    not: {
      'A sense of chaos and disorder':
        'A regular pattern does the opposite: it makes a poem feel predictable and ordered. Irregular or broken rhyme is more likely to unsettle.',
      'A natural, chatty speaking voice':
        'A natural speaking voice usually comes from free verse, with no fixed rhyme. A regular ABAB pattern sounds crafted and song-like.',
      'A sense of rising tension':
        'The rhyme scheme itself creates order. Tension would come from the words, or from a pattern that breaks.',
    },
    more: 'A regular pattern can also clash with dark content, making it more unsettling. When a poet breaks the pattern, that moment stands out.',
    tip: "Do not just label the rhyme scheme. Say what the order, or a break in the order, does to the poem's meaning.",
  },
  'Why might a writer use a list of three (tricolon)?': {
    why: 'Three items in a row feel balanced and complete, and the pattern sticks in the memory. Writers use a list of three to stress an idea and make it persuasive.',
    not: {
      'To give every example the writer knows':
        'A list of three is chosen for rhythm, not to cover everything. Writers pick three because the pattern sounds finished, even when more examples exist.',
      'To show the writer cannot choose one':
        'The three items are chosen to work together. The pattern is a deliberate choice, not a sign of indecision.',
      'To break a long sentence into short parts':
        'A list of three often sits inside one sentence. Its purpose is emphasis and rhythm, not splitting sentences up.',
    },
    more: "A famous example is 'I came, I saw, I conquered'. Speakers often build the three items in order of importance, saving the strongest for last.",
    tip: 'In persuasive writing, use a list of three adjectives or phrases, with the strongest last, to build to a climax.',
  },
  'A poem gives this advice: "If you can meet with Triumph and Disaster / And treat those two impostors just the same". What technique turns Triumph and Disaster into impostors?':
    {
      why: "Triumph and Disaster are ideas, but the poem treats them as people you 'meet' and calls them 'impostors', liars in disguise. Giving abstract ideas human qualities is personification.",
      not: {
        Oxymoron:
          'An oxymoron joins two contradictory words in one phrase. Triumph and Disaster are opposites, but they appear as two separate figures.',
        'Pathetic fallacy':
          'Pathetic fallacy is when weather or nature reflects a feeling. Triumph and Disaster are ideas, not weather or landscape.',
        Hyperbole:
          'Nothing is exaggerated. The poem calmly advises treating success and failure alike.',
      },
      more: "The capital letters help: Triumph and Disaster become characters. Calling both 'impostors' suggests that neither success nor failure is as real or as lasting as it seems.",
      tip: 'When abstract nouns are capitalised and given actions, look for personification and say what kind of person the idea becomes.',
    },
  'What is pathetic fallacy?': {
    why: 'Pathetic fallacy is when the weather or the natural world matches human feelings: a storm during an argument, or rain at a funeral.',
    not: {
      'A character who is feeling sorry for themselves':
        "'Pathetic' here comes from an old meaning, 'to do with feelings', not 'pitiful'. The term is about nature showing feelings.",
      'Animals given human speech and actions':
        'Animals that talk and act like people are anthropomorphism, as in fables. Pathetic fallacy is about weather and nature reflecting emotion.',
      'An argument that is weak and illogical':
        'A fallacy is a mistaken argument, but this term names a literary device: nature mirroring human emotion.',
    },
    more: 'The term was coined by the critic John Ruskin in 1856. Writers use it to set the atmosphere and to hint at what is coming.',
    tip: "Name it and link it to a feeling: 'The pathetic fallacy of the storm reflects his anger.'",
  },
  'Juliet says goodnight to Romeo: "Parting is such sweet sorrow". What technique is "sweet sorrow"?':
    {
      why: 'Sweetness and sorrow are opposite feelings joined in one phrase. Putting two contradictory words together like this is an oxymoron.',
      not: {
        Simile: "Nothing is compared using 'like' or 'as'.",
        Personification:
          'Nothing non-human is given human qualities; the phrase describes a mixed feeling.',
        Onomatopoeia: 'Onomatopoeia imitates a sound. Neither word copies a noise.',
      },
      more: 'The oxymoron captures how love feels at that moment: parting hurts, but it is sweet because it promises the next meeting.',
      tip: 'Explain how the two opposites work together: the sorrow of parting and the sweetness of a love that will bring them back together.',
    },
  'The witches chant over their cauldron: "Double, double, toil and trouble". Which technique opens the line?':
    {
      why: "'Double' is said twice before anything else. Repeating a word like this is repetition, and in a chant it makes the words sound like a spell.",
      not: {
        Simile: "There is no comparison using 'like' or 'as'.",
        Metaphor:
          'Nothing is said to be something else. The witches are naming what they want: double the trouble.',
        Personification: 'No object is given human qualities. The witches are casting a spell.',
      },
      more: "The witches speak in short, rhyming lines with four stresses, unlike the play's other characters. The beat sets them apart and makes their words sound like magic.",
      tip: 'When you analyse a chant, comment on its sound as a whole: repetition, rhyme and rhythm working together.',
    },
  'What does it mean if a writer describes a character\'s hands as "trembling"?': {
    why: 'Hands tremble when someone is afraid, nervous or overwhelmed by emotion. Writers use the detail to show feelings without stating them.',
    not: {
      'They are confident and in control':
        'Trembling hands are out of control. They suggest fear or nerves, the opposite of confidence.',
      'They are waving to a friend':
        'Trembling is a small, uncontrolled shaking, not a deliberate wave.',
      'They are bored and restless':
        'Boredom makes people fidget or slump. Trembling shows fear, nerves or strong emotion.',
    },
    more: "This is 'show, not tell': instead of writing 'she was scared', a writer shows her trembling hands and lets the reader work it out.",
    tip: 'In creative writing, show emotion through body language, such as trembling hands, a dry mouth or a racing heart.',
  },
  'Why might a writer use a flashback?': {
    why: 'A flashback takes the reader back to earlier events. It fills in background and helps explain why a character thinks or acts as they do now.',
    not: {
      'To give hints about what will happen later':
        'Hinting at what is to come is foreshadowing. A flashback goes the other way, back into the past.',
      'To speed the story on towards its ending':
        'A flashback interrupts the story to go back in time, which usually holds up the forward action rather than speeding it on.',
      'To describe the setting in much more detail':
        'A flashback may show a place, but its job is to reveal the past: what happened before, and why it matters now.',
    },
    more: 'In A Christmas Carol, the Ghost of Christmas Past shows Scrooge scenes from his youth, which help explain how he became so cold and lonely.',
    tip: 'When you write about a flashback, explain what it reveals and why the writer placed it at that point.',
  },
  '"The silence was deafening." What technique is this?': {
    why: "Silence is the absence of sound, yet 'deafening' means so loud it hurts your ears. Pairing these contradictory ideas is an oxymoron.",
    not: {
      Simile: "There is no comparison using 'like' or 'as'.",
      Personification:
        'Silence is not given a human action. The phrase describes how intense the silence feels.',
      Alliteration:
        "Alliteration repeats the first sound of nearby words. 'Silence' and 'deafening' begin differently.",
    },
    more: 'The contradiction suggests a silence so tense or shocking that it feels overwhelming, as after bad news or an argument.',
    tip: "Explain why the contradiction works: 'The oxymoron shows the silence is so tense it feels as powerful as noise.'",
  },
  'In Romeo and Juliet, why are the families called "Montagues" and "Capulets"?': {
    why: "Shakespeare based the play on Arthur Brooke's long poem The Tragicall Historye of Romeus and Juliet (1562), which already told of these two feuding families. The story came from earlier Italian tales.",
    not: {
      'They were names of London theatres':
        'London playhouses had names like the Globe and the Theatre, in Shoreditch. The family names come from the story Shakespeare adapted.',
      'He made them up to sound Italian':
        'He kept names that were already part of the story he adapted, which reached back to earlier Italian tales.',
      'They are the Italian words for love':
        'They are family names, not words for love. They go back to two real Italian families, the Montecchi and the Cappelletti.',
    },
    more: "The story began in Italian prose, such as Luigi da Porto's tale of 1530, and reached England through Brooke's poem. Shakespeare kept the feuding families and their names.",
    tip: "Knowing a writer's sources is useful context. Shakespeare changed a lot: he enlarged Mercutio's part and squeezed months of action into a few days.",
  },
  '"The road stretched endlessly before them." What technique is used?': {
    why: "No road is truly endless. 'Endlessly' exaggerates how long the road seems, to show how tired or hopeless the travellers feel. Deliberate exaggeration is hyperbole.",
    not: {
      Personification:
        "'Stretched' here simply means extended, as in 'the beach stretched for miles'. The road is not given human feelings or actions.",
      Simile: "There is no comparison using 'like' or 'as'.",
      Onomatopoeia: 'No word imitates a sound.',
    },
    more: "Hyperbole can reveal a character's feelings: an endless road suggests exhaustion, boredom or dread of the journey ahead.",
    tip: "Ask why the writer exaggerates. The answer usually reveals a character's mood.",
  },
  'What is the effect of a writer using a question as the opening of a text?': {
    why: 'Starting with a question makes readers want to know the answer, so they keep reading. It draws them in from the first line.',
    not: {
      'It shows the writer does not know the answer':
        'The writer usually does know the answer. The question is a hook for the reader.',
      'It sums up the whole text in one line':
        'An opening question raises an issue rather than summing anything up. The answers come later, which is what keeps readers reading.',
      'It makes the opening calm and slow':
        'A question creates curiosity and energy, pulling the reader in. Any mood comes from what the question is about.',
    },
    more: "Opening questions are common in persuasive writing: 'Have you ever wondered where your rubbish goes?' They make the reader feel personally involved.",
    tip: 'In a persuasive or descriptive piece, try opening with a question, then answer it in a way that surprises the reader.',
  },
  '"The rich man\'s palace stood beside the beggar\'s hut." What technique is used?': {
    why: 'A palace and a hut, wealth and poverty, are placed side by side. Setting two contrasting things next to each other so that each sharpens the other is juxtaposition.',
    not: {
      Oxymoron:
        "An oxymoron fuses two contradictory words into one phrase, like 'bitter-sweet'. Here two separate things sit side by side.",
      Paradox:
        'A paradox is a statement that seems to contradict itself yet holds a truth. Nothing here contradicts itself; it is a contrast.',
      Personification:
        'Neither building is given human qualities. The palace simply stands, as buildings do.',
    },
    more: 'Juxtaposition makes a reader notice a gap. Next to the hut, the palace looks greedier; next to the palace, the hut looks poorer.',
    tip: 'When you spot a juxtaposition, say what the contrast exposes, here the unfairness of wealth and poverty side by side.',
  },
  'Caesar says: "Cowards die many times before their deaths". What technique is used?': {
    why: 'No one can die many times before dying, so the line seems to contradict itself. Yet it holds a truth: cowards suffer death over and over in their fear of it. That is a paradox.',
    not: {
      Oxymoron:
        "An oxymoron joins two contradictory words in one phrase, like 'living death'. This is a whole statement that seems to contradict itself, which is a paradox.",
      'Rhetorical question':
        'A rhetorical question is asked for effect, with no answer expected. Caesar makes a statement, not a question: a claim that seems to contradict itself.',
      Euphemism: 'A euphemism softens something unpleasant. Caesar speaks of death plainly.',
    },
    more: "Caesar goes on: 'The valiant never taste of death but once.' The paradox shows his pride: he refuses to fear death on the very day he is killed.",
    tip: 'To tell an oxymoron from a paradox, count the words: two words side by side is an oxymoron; a whole idea that contradicts itself is a paradox.',
  },
  'A duke says of his dead wife\'s portrait: "Then all smiles stopped together. There she stands / As if alive." Which technique carries the sentence over the line break?':
    {
      why: "'There she stands' does not end at the line break: the sentence runs on into 'As if alive.' Carrying a sentence over the end of a line is enjambment.",
      not: {
        Caesura:
          "There is a caesura, the full stop after 'together', but it is a pause inside the line. The question asks what carries the sentence over the break.",
        'End-stopping':
          "An end-stopped line finishes with punctuation, so the sense pauses at the line's end. This line has none there.",
        Refrain: 'A refrain is a line repeated through a poem. Nothing is repeated here.',
      },
      more: "The run-on makes the reader wait for 'As if alive', and the full stop after it lands like a chill: she only looks alive. The Duke's calm rhythm hides something terrible.",
      tip: 'When you analyse enjambment, quote the words either side of the line break and explain what the delay makes the reader feel.',
    },
  'On his way to the Capulets\' feast, Romeo says: "my mind misgives / Some consequence yet hanging in the stars". What technique is used?':
    {
      why: "Romeo senses that something 'hanging in the stars', a fate not yet arrived, will begin that night. A hint of events still to come is foreshadowing, and this one points to his death.",
      not: {
        Flashback:
          'A flashback goes back to earlier events. Romeo looks forward to what the night will bring.',
        Cliffhanger:
          'A cliffhanger ends a scene or chapter on an unresolved crisis. This is a passing fear, spoken as he walks to the feast.',
        'Pathetic fallacy':
          'Pathetic fallacy is weather reflecting feelings. Romeo speaks of the stars as fate, not as weather.',
      },
      more: "The same sentence ends by fearing 'untimely death'. The audience already knows from the Prologue how the story ends, so his fear makes them dread it with him.",
      tip: 'When you find foreshadowing, quote the hint and say what it makes the audience expect, then show where the play fulfils it.',
    },
  '"Four out of five teenagers say they feel tired at school." Which persuasive method is this?': {
    why: "'Four out of five' is a number drawn from a survey of many people. Using figures like this as evidence is a statistic, and it makes a claim sound proven.",
    not: {
      Anecdote:
        'An anecdote is a short story about one person or event. This is a figure about a whole group.',
      'Expert opinion':
        'Expert opinion quotes a qualified person, such as a doctor. No expert is named here.',
      'Emotive language':
        "Emotive language is chosen to stir feelings, like 'heartbreaking'. 'Feel tired' is plain, and the force comes from the number.",
    },
    more: 'Statistics sound objective, which is why persuasive writers use them. A careful reader asks who was surveyed, how many, and by whom.',
    tip: 'In your own persuasive writing, one clear statistic is stronger than several vague ones. Say what it proves straight after.',
  },
  '"Last winter, my neighbour slipped on the icy path outside the library." Which persuasive method is this?':
    {
      why: 'It is a short true-to-life story about one person and one event. A brief personal story used to support an argument is an anecdote.',
      not: {
        Statistic: 'There are no figures or survey results here, just one event.',
        'Expert opinion': 'No expert is quoted. The neighbour is an ordinary person in a story.',
        'Rhetorical question': 'It is a statement, not a question.',
      },
      more: 'Anecdotes make an issue feel real and close to home. A reader may forget a figure, but remembers the neighbour on the ice.',
      tip: 'When you analyse an anecdote, say how it makes the issue personal, and whether one story is enough to prove the point.',
    },
  '"Dr Patel, a sleep scientist, says teenagers need far more sleep than adults." Which persuasive method is this?':
    {
      why: 'The claim comes from a named scientist who studies sleep. Quoting someone qualified to judge is expert opinion, and it gives the argument authority.',
      not: {
        Statistic: "No figures are given: 'far more' is a judgement, not a number.",
        Anecdote: 'An anecdote tells a story about an event. This reports what an expert says.',
        'Direct address':
          "Direct address speaks to the reader as 'you'. This sentence reports what someone else thinks.",
      },
      more: "Writers name the expert's job so the reader trusts the claim. A careful reader asks whether the expert really is an expert in this field.",
      tip: "In your own writing, give an expert's name and role in a few words, then explain why their view supports your point.",
    },
  '"Some people say homework builds discipline. However, too much of it leaves no time for rest." What is the first sentence doing?':
    {
      why: "The writer states an opposing view, 'Some people say...', then answers it with 'However'. Raising the other side in order to rebut it is a counter-argument.",
      not: {
        "Quoting an expert's opinion":
          "No expert is named or quoted. 'Some people' are unnamed, and the writer is about to disagree with them.",
        'Telling a short anecdote':
          'There is no story about a person or event, only a general view.',
        'Giving a statistic as proof':
          "No numbers are given. 'Some people' is vague, not a statistic.",
      },
      more: "Dealing with the other side makes a writer seem fair and confident. The reply after 'However' is where the writer's own view lands.",
      tip: "In an argument essay, raise one counter-argument, then rebut it with 'However' and a reason. It shows you have weighed both sides.",
    },
  'At Caesar\'s funeral, Antony keeps saying of Caesar\'s killer that "Brutus is an honourable man". What tone does the repetition build?':
    {
      why: "Antony calls Brutus 'honourable' again and again while showing what Caesar did for Rome. Each repetition sounds less sincere, until the praise means its opposite. Saying one thing and meaning the reverse is verbal irony.",
      not: {
        Admiring:
          "On the surface the words praise Brutus, but repeated beside the evidence of Caesar's goodness, they turn into mockery.",
        Frightened:
          'Antony is in control of the crowd, not afraid of it. His repetition is a careful weapon.',
        Uncertain:
          'Nothing is hesitant: the phrase keeps returning, almost word for word, like a drumbeat.',
      },
      more: 'Antony was allowed to speak only if he did not blame the conspirators. Irony lets him turn the crowd against Brutus while seeming to keep to that rule.',
      tip: 'When praise is repeated in a hostile context, look for irony, and explain how the repetition changes the meaning of the words.',
    },
  'A king says of a traitor he trusted: "He was a gentleman on whom I built / An absolute trust." At that moment the man who will murder him walks in. What technique is this?':
    {
      why: 'The audience has just heard Macbeth think of murder; Duncan has not. As he speaks of trusting a traitor, the next traitor enters. When the audience knows what a character does not, it is dramatic irony.',
      not: {
        'Verbal irony':
          'Verbal irony is saying the opposite of what you mean. Duncan means every word; the irony lies in what the audience knows.',
        Flashback:
          "A flashback shows an earlier scene. This happens in the play's present, on stage.",
        'Pathetic fallacy':
          'Pathetic fallacy is weather or nature reflecting feeling. No weather is involved.',
      },
      more: "Shakespeare times Macbeth's entrance to the word 'trust'. The audience watches Duncan about to make the same mistake again, which makes his warmth painful to watch.",
      tip: 'When you write about dramatic irony, say what the audience knows, what the character does not, and how that gap makes the audience feel.',
    },
  'A chapter ends: "Then, from downstairs, came the sound of the front door opening." What technique is this ending?':
    {
      why: 'The chapter stops at a moment of tension, with a question left hanging: who is at the door? Ending on an unresolved moment so that the reader must read on is a cliffhanger.',
      not: {
        Flashback:
          'A flashback goes back to earlier events. This ending pushes forward into what will happen next.',
        Resolution: "A resolution ties up the story's problems. This ending opens a new one.",
        'Circular structure':
          'A circular structure ends where it began, echoing the opening. This ending leaves a new question hanging instead.',
      },
      more: 'Cliffhangers are common in serial stories and television, where the writer needs the audience to come back. Dickens published many novels in parts and used them often.',
      tip: 'In your own stories, end a section on a sound or a sight that raises a question, and leave it unanswered until the next part.',
    },
  'Utterson rebukes Hyde, and Stevenson writes: "The other snarled aloud into a savage laugh". What technique is used?':
    {
      why: "'Snarled' is the sound of an angry dog or a wild animal, and 'savage' adds a beast's ferocity. Giving animal qualities to a human is zoomorphism, and it makes Hyde seem dangerous.",
      not: {
        Personification:
          "Personification gives human qualities to something non-human. Here it is the reverse: a man is given an animal's.",
        Simile: "There is no comparison using 'like' or 'as'. Hyde simply snarls.",
        'Pathetic fallacy':
          'Pathetic fallacy is weather or nature reflecting feeling. This describes how a man behaves.',
      },
      more: "Stevenson gives Hyde animal traits again and again. In the same chapter Hyde shrinks back 'with a hissing intake of the breath', like a snake. The pattern makes him seem barely human.",
      tip: "Name the animal behind the verb, then say what it suggests about the character: 'The zoomorphism makes Hyde sound like a snarling dog, more beast than gentleman.'",
    },
  'A Victorian sonnet opens: "Remember me when I am gone away, / Gone far away into the silent land". Which technique is "gone away"?':
    {
      why: "The speaker means 'when I am dead', but says 'gone away', and calls death 'the silent land'. Using a gentle phrase in place of a painful one is a euphemism.",
      not: {
        Hyperbole: 'Hyperbole exaggerates. A euphemism does the opposite: it softens.',
        Oxymoron: "An oxymoron joins two contradictory words. 'Gone away' contradicts nothing.",
        Onomatopoeia: 'Onomatopoeia imitates a sound. Neither word copies a noise.',
      },
      more: 'The gentle phrasing suits a poem spoken to someone she loves: she softens the fact of her own death, perhaps to spare them.',
      tip: 'When you spot a euphemism, say what it softens and why the speaker softens it.',
    },
  'Fatally wounded by Tybalt, Mercutio is asked if he is hurt. He replies: "Ay, ay, a scratch, a scratch." What technique is used?':
    {
      why: "Mercutio has just said 'I am sped', meaning he is done for, yet he calls the wound 'a scratch'. Deliberately making something sound much less serious than it is is understatement.",
      not: {
        Hyperbole:
          'Hyperbole exaggerates. Mercutio does the opposite, shrinking a deadly wound to a scratch.',
        Personification:
          'Nothing non-human is given a human quality. Mercutio is describing his own wound.',
        Oxymoron:
          "An oxymoron joins two contradictory words in one phrase. 'A scratch' joins no opposites: the gap is between the word and the wound.",
      },
      more: "Romeo answers that 'the hurt cannot be much.' Soon afterwards Mercutio is dead, so the brave joke makes the loss more shocking, for Romeo and for the audience.",
      tip: 'When you find understatement, compare what is said with what is true, then explain what the gap shows about the speaker: here, wit and courage in the face of death.',
    },
  'A pale knight wanders by a lake where "The sedge is withered from the lake, / And no birds sing". What is it called when a setting mirrors a character\'s state like this?':
    {
      why: "The withered sedge and the silent birds make the landscape as drained and lifeless as the knight. When nature or the weather reflects a character's feelings, it is pathetic fallacy.",
      not: {
        Personification:
          'Personification gives human qualities to non-human things. The sedge withers and the birds fall silent, as real plants and birds do; it is their match with his state that matters.',
        Simile: "There is no comparison using 'like' or 'as'.",
        'Extended metaphor':
          'There is no metaphor: the dead plants and silent birds are described plainly.',
      },
      more: 'The setting is late autumn, the harvest in and the sedge dead, so the reader senses something has drained the life from the knight before learning what. The same lines return at the end, closing him in that bleak place.',
      tip: "When you name pathetic fallacy, link the details of the setting to the character's feelings, and quote both.",
    },
  'Brutus explains why he killed Caesar: "Not that I loved Caesar less, but that I loved Rome more." What technique is used?':
    {
      why: "The sentence sets two balanced halves against each other: Caesar less, Rome more. Placing contrasting ideas in matching structures is antithesis, and it makes Brutus's choice sound reasoned and fair.",
      not: {
        Simile: "There is no comparison using 'like' or 'as'.",
        Onomatopoeia: 'Onomatopoeia imitates a sound. None of these words copies a noise.',
        Oxymoron:
          'An oxymoron fuses two contradictory words into one phrase. Here two whole clauses are balanced against each other, which is antithesis.',
      },
      more: 'Brutus speaks in calm, balanced prose, appealing to reason. Antony, speaking next, appeals to feeling instead, and turns the crowd.',
      tip: "When you spot antithesis, quote both halves and explain what the balance suggests about the speaker's thinking.",
    },
  '"I run. The ground shakes. The dog is right behind me." What does the present tense do?': {
    why: 'The present tense tells the events as they happen, so the reader is inside the chase with the narrator. Nothing is safely in the past; the danger is now.',
    not: {
      'It shows the events happened long ago':
        'Events long ago would usually be told in the past tense. The present tense brings them right up close.',
      'It makes the narrator seem calm':
        'Short, present-tense sentences sound breathless. Nothing suggests calm.',
      'It shows the events are imagined':
        'The present tense does not mean events are imagined. It makes real events feel as if they are happening now.',
    },
    more: 'Writers switch into the present tense at moments of danger to make them vivid. Short sentences add to the breathless pace.',
    tip: 'In your own writing, try the present tense for a tense scene, and keep the sentences short so the reader feels the speed.',
  },
  'A story begins: "I never told anyone what I saw that night." What does the first-person narrator do?':
    {
      why: "'I' puts the reader inside the narrator's head, and 'never told anyone' makes them the first to hear. The opening turns the reader into the narrator's confidant.",
      not: {
        "It shows every character's thoughts":
          "Seeing into every character's mind is third-person omniscient narration. A first-person narrator knows only their own thoughts.",
        'It keeps the reader at a distance':
          'First person usually brings the reader close. Confessing a secret pulls the reader in, not away.',
        'It shows the narrator is a liar':
          'Keeping a secret is not the same as lying. Nothing yet suggests the narrator is untruthful.',
      },
      more: "First-person narrators can be trusted or doubted. Later in a story, a reader may ask whether 'I' sees everything clearly.",
      tip: 'When you write about narrative voice, say who tells the story and what that choice lets the reader know, or not know.',
    },
  '"Outside, children laughed in the sunshine. Inside, the old man sat alone in the dark." What does the juxtaposition do?':
    {
      why: "The two sentences are built the same way but say opposite things: laughter and light outside, silence and darkness inside. Set against the children's joy, his isolation feels sharper.",
      not: {
        'It shows the children are unkind to him':
          'The children are simply playing. Nothing suggests they know he is there or treat him badly.',
        'It describes the weather in detail':
          'The sunshine is one detail. The point of the pairing is the contrast between his life and theirs.',
        'It shows the old man is content':
          'Sitting alone in the dark, set against laughter outside, suggests sadness, not contentment.',
      },
      more: "The matching structure, 'Outside... Inside...', makes the reader compare the two halves directly. That is how juxtaposition does its work.",
      tip: 'When you analyse juxtaposition, describe both halves, then say what the contrast makes the reader feel about one of them.',
    },
  'On the night Duncan is murdered, Lennox reports: "The night has been unruly: where we lay, / Our chimneys were blown down". What does the wild weather suggest?':
    {
      why: 'Lennox knows nothing of the murder yet, but the night he describes is wild: chimneys blown down, strange screams. The storm mirrors the crime, as if nature itself is in uproar at the killing of a king.',
      not: {
        'The storm itself was what killed the king':
          'Duncan was murdered by Macbeth. The storm comes with the crime; it does not cause it.',
        'The night was peaceful, calm and still':
          "'Unruly' means wild and lawless, and chimneys were blown down. Nothing was peaceful.",
        'Winter has come early this year to Scotland':
          'Nothing suggests the season. The storm belongs to the night of the murder, not to winter.',
      },
      more: "Many in Shakespeare's time believed a king was appointed by God, so killing one disturbed the whole order of nature. In the next scene, Ross and an old man report that Duncan's horses turned wild and ate each other.",
      tip: 'Link the weather to the event it mirrors, and to the belief behind it: an unnatural crime brings unnatural weather.',
    },
  '"Pick up your pens, put down your phones and pay attention." What do the repeated \'p\' sounds do?':
    {
      why: "'P' is a plosive, a sound made with a small burst of air. Repeated plosives give the commands a crisp, punchy beat, so the speaker sounds sharp and in charge.",
      not: {
        'They make the orders sound soft and gentle':
          "Plosives are hard sounds, the opposite of soft. Gentle sounds would be 'm', 'l' or 's'.",
        'They make the speaker sound unsure':
          'Three clear commands with a punchy rhythm sound confident, not unsure.',
        'They slow the sentence into a dreamy pace':
          "The hard 'p' sounds quicken the line rather than slow it.",
      },
      more: 'Plosive alliteration often adds force, anger or energy. Here it works with the imperatives to make the teacher sound firm.',
      tip: "Name the type of sound, plosive, sibilant or soft, and link it to the tone: 'The plosives make the commands sound sharp.'",
    },
  '"The road went on and on, past fields and farms and empty barns, past the river and the mill, until at last the village appeared." What does the long sentence do?':
    {
      why: "The sentence keeps going, clause after clause, the way the road does. The reader feels the length of the journey before 'at last' brings relief.",
      not: {
        'It creates a moment of sudden shock':
          'Shock comes from short, abrupt sentences. This one stretches out slowly.',
        'It shows the journey was quick and easy':
          "'On and on' and 'at last' show the journey felt long. The sentence's length mirrors that.",
        'It makes the village seem frightening':
          "'At last the village appeared' sounds like relief, not fear.",
      },
      more: "Repeated 'and' and 'past' pile up the places, so the sentence itself seems to travel. Matching sentence length to meaning is a structural choice.",
      tip: 'When you analyse sentence length, connect it to what is happening: long sentences for long journeys, short ones for sudden events.',
    },
  '"Honestly, mate, it was a total nightmare." What does the informal language do?': {
    why: "'Honestly', 'mate' and 'a total nightmare' are everyday spoken words. Informal language makes the speaker sound relaxed and believable, like a real person chatting.",
    not: {
      'It makes the speaker sound formal and distant':
        "Formal language would avoid 'mate' and slang. This is the opposite: chatty and close.",
      'It makes the speaker sound old-fashioned':
        "'Mate' and 'a total nightmare' are modern, everyday phrases, not old-fashioned ones.",
      'It makes the speaker sound like an expert':
        'Experts usually sound precise and formal. This speaker sounds like a friend.',
    },
    more: 'Writers use informal dialogue to make characters convincing, and informal tone in articles to make readers feel spoken to as equals.',
    tip: 'When you comment on register, name it, formal or informal, and say how it shapes the relationship with the reader.',
  },
  '"We regret to inform you that your application has been unsuccessful." What tone does the formal wording create?':
    {
      why: "'We regret to inform you' and 'unsuccessful' are formal phrases. They are polite, but they keep the reader at arm's length and soften the bad news without any personal warmth.",
      not: {
        'Warm and chatty':
          "Chatty writing would use 'we're really sorry'. These phrases are stiff and official.",
        'Angry and rude':
          "Nothing is rude: 'We regret' is polite. The coolness comes from the formality.",
        'Excited and cheerful':
          'The letter delivers bad news, and nothing in its wording sounds excited.',
      },
      more: "'Unsuccessful' is gentler than 'rejected', so the formality also works as a kind of softening. Official letters choose words that cannot cause offence.",
      tip: 'When you analyse a formal text, quote one formal phrase and explain how it shapes the relationship between writer and reader.',
    },
  '"I just... I can\'t... I\'m sorry." What do the ellipses show about the speaker?': {
    why: 'Each ellipsis breaks off a sentence before it is finished. The broken, stopping speech shows she is overwhelmed, unable to say what she means.',
    not: {
      'She is calmly listing all of her reasons':
        'There are no reasons given, and each attempt trails off unfinished. That is not calm.',
      'She is shouting at the listener':
        'Shouted speech is usually short and forceful. Ellipses show hesitation and trailing off.',
      'She is reading from a script':
        'A script would be fluent. These broken phrases show her searching for words.',
    },
    more: 'Punctuation can show emotion in dialogue: ellipses for hesitation, dashes for interruption, short sentences for shock.',
    tip: "In your own dialogue, let punctuation do some of the work. A few ellipses can show a character's distress better than describing it.",
  },
  'Lear cries: "How sharper than a serpent\'s tooth it is / To have a thankless child". What does the comparison suggest?':
    {
      why: "A snake's bite is sharp and poisonous, yet Lear says a thankless child hurts even more. The comparison shows how deeply his daughter's ingratitude wounds him.",
      not: {
        'He has been bitten by a snake at the palace':
          "That takes the image literally. The serpent's tooth is a comparison for the pain of ingratitude.",
        'His daughter has given him a generous gift':
          "'Thankless' means ungrateful. He is complaining that his daughter has given him no thanks, let alone a gift.",
        'He is calm and forgiving towards his child':
          'The line ends a furious curse on Goneril, not words of forgiveness.',
      },
      more: 'Lear calls on nature to curse his daughter Goneril, who has just demanded that he cut down the number of his knights. His pride and his grief speak together.',
      tip: 'When you analyse a comparison, say what the two things share: here, a sharp, poisonous pain.',
    },
  '"The minister gave a slippery answer to the reporter\'s question." What does "slippery" suggest?':
    {
      why: 'Something slippery is hard to hold. A slippery answer cannot be pinned down: the minister is avoiding giving a straight reply.',
      not: {
        'He is clumsy and falls over':
          "That reads 'slippery' literally. It describes his answer, not his footing.",
        'He is speaking very fast':
          'Speed is not the point. A slippery answer is vague and evasive, however fast it comes.',
        'He is warm and friendly':
          "'Slippery' suggests distrust, not warmth. It makes him sound evasive.",
      },
      more: "Adjectives like slippery, shifty and slick suggest dishonesty without saying 'he lied'. They let a writer judge someone while seeming only to describe.",
      tip: 'When an adjective is used figuratively, explain its literal meaning and then the judgement it carries.',
    },
  'Hearing that his wife is dead, a king says: "Out, out, brief candle". What does the candle stand for?':
    {
      why: 'A candle burns for a short time and is easily blown out. Macbeth uses it for life itself: brief, fragile and snuffed out in a moment.',
      not: {
        'A light that guides him through the dark':
          'He wants the candle put out, not followed. It stands for a life that ends, not a guide.',
        'A celebration of his victory in battle':
          'He has just heard of a death. Nothing in the line celebrates.',
        'A fire that will burn his enemies':
          "The candle is 'brief': it stands for the shortness of life, not a weapon.",
      },
      more: "The image of a snuffed candle shows a man who now finds life short, fragile and empty. His wife's death leaves him with nothing he values.",
      tip: "Explain what the object and the action suggest together: a 'brief' candle being put out is a life ending too soon.",
    },
  '"The head teacher marched into the hall." What does "marched" suggest about her?': {
    why: 'Marching is how soldiers move: firm, quick and purposeful. The verb suggests she enters with authority and means business.',
    not: {
      'She is shy and uncertain of herself':
        'A shy person would hover or creep in. Marching is bold.',
      'She is tired and slow': 'Marching is brisk, the opposite of a tired, slow walk.',
      'She is lost and confused':
        'Marching has a clear direction and purpose. A lost person wanders.',
    },
    more: "One verb of movement can establish a character's power. Compare 'drifted', 'strode' and 'crept' into the hall: each gives a different person.",
    tip: 'When you analyse a verb, say what kind of person moves that way, and what the reader expects to happen next.',
  },
  '"It was a cramped, airless flat with one small window." What impression do the adjectives create?':
    {
      why: "'Cramped' means too small, 'airless' means hard to breathe in, and one small window lets in little light. Together they make the flat feel stifling, like a trap.",
      not: {
        'It feels spacious and bright':
          "'Cramped' and 'one small window' say the opposite of spacious and bright.",
        'It feels cosy and welcoming':
          "A small flat could be cosy, but 'cramped' and 'airless' are negative words, suggesting discomfort.",
        'It feels grand, expensive and stylish':
          'Nothing suggests wealth. The details point to a poor, uncomfortable home.',
      },
      more: "Setting often reflects a character's situation. A cramped, airless home can suggest poverty, or a life with no room to grow.",
      tip: 'When you analyse a setting, group the adjectives and say what they add up to, then what that suggests about the people who live there.',
    },
  '"Where was she? Why hadn\'t she called?" What do these questions in a story show?': {
    why: "The questions run through the character's mind as he waits. Unanswered questions, one after another, show his anxiety rising.",
    not: {
      'A quiz for the reader to answer':
        'The reader is not expected to answer. The questions show what the character is thinking.',
      'That the character is calm':
        'A calm person would not fire questions like this. They show unease.',
      'That the story has ended': 'The questions open a mystery and push the story forward.',
    },
    more: "Questions in a narrator's thoughts are a quick way to show feeling and build suspense: the reader wants the answers as much as the character does.",
    tip: 'In your own stories, show a worried character through a few short questions in their thoughts, then delay the answer.',
  },
  '"The low moan of the old foghorn rolled across the bay." What does the repeated long \'o\' sound create?':
    {
      why: "Low, moan, old and rolled all hold a long 'o', so the line is slow to say, like the foghorn itself. The drawn-out vowel sounds create a slow, mournful mood.",
      not: {
        'A quick, cheerful rhythm':
          'Long vowels slow a line down. Nothing here is quick or cheerful.',
        'A sharp, sudden noise':
          "A sharp noise would need hard consonants, like 'crack'. The long vowels make this sound drawn out.",
        'A light, playful mood': "'Moan' and the long, low sounds create sadness, not playfulness.",
      },
      more: 'Repeating a vowel sound is assonance. Long vowels suit sad, slow or heavy moments; short vowels suit quick, light ones.',
      tip: 'Read the line aloud and listen to the vowels. Then explain how their length matches the meaning.',
    },
  '"The rumour spread like wildfire." What does the simile suggest about the rumour?': {
    why: 'A wildfire spreads at great speed and is almost impossible to control. The simile suggests the rumour reached everyone quickly and nobody could stop it.',
    not: {
      'It was hot and dangerous to touch':
        "That takes the fire literally. A rumour cannot be touched; the simile borrows the fire's speed.",
      'It was bright and beautiful to see':
        'Wildfire is not chosen for its beauty here. The comparison is about how fast it spreads.',
      'It started in a forest far away from town':
        'Nothing suggests a forest. The simile describes how the rumour spread, not where it began.',
    },
    more: 'Many similes become everyday phrases, like this one. In analysis, still explain what the image adds: speed, and a sense of things out of control.',
    tip: 'Even with a familiar simile, unpack the comparison: what is a wildfire like, and how is the rumour like it?',
  },
  '"School uniform is expensive. However, it stops pupils judging each other\'s clothes." What does "However" do?':
    {
      why: "'However' signals a contrast: after a point against uniform, the writer turns to a point in its favour. It is a discourse marker that changes direction.",
      not: {
        'It adds another reason for the same view':
          "'Furthermore' or 'also' would add another reason for the same view. 'However' introduces an opposing point.",
        'It sums up the whole argument':
          "Summing up would use 'overall' or 'in conclusion'. 'However' turns the argument rather than closing it.",
        'It introduces an example':
          "An example would follow 'for instance'. 'However' brings in a contrasting idea.",
      },
      more: "Discourse markers guide the reader through an argument: adding (furthermore), contrasting (however), concluding (therefore). They make a writer's thinking easy to follow.",
      tip: 'Use a range of discourse markers in your own arguments, and choose the one that matches the job: adding, contrasting or concluding.',
    },
  'In a story, one paragraph is a single short line: "Nobody came." What is the effect of giving it a paragraph of its own?':
    {
      why: "A one-line paragraph is surrounded by white space, so the reader's eye stops on it. 'Nobody came' stands alone, just like the character, and the loneliness hits harder.",
      not: {
        'It adds many details at once': 'It is only two words, the opposite of many details.',
        'It introduces a new character': 'It says that nobody came: no one new appears.',
        'It moves the story back in time':
          'Nothing moves into the past. The line states what happens, or does not, now.',
      },
      more: 'Paragraph length is a structural choice. A single-line paragraph after longer ones works like a drumbeat: it marks a turning point or a blow.',
      tip: 'When you comment on structure, notice paragraph length. Explain why a writer isolates a line and what the isolation adds.',
    },
  '"The bread was warm, crusty and golden." Which senses does the description appeal to?': {
    why: "'Warm' and 'crusty' describe how the bread feels, which is touch. 'Golden' describes how it looks, which is sight.",
    not: {
      'Sound and smell': "No sound is described, and 'warm' and 'golden' are not smells.",
      'Taste and hearing':
        'Nothing in the line describes a noise, and none of the three words names a flavour.',
      'Smell and taste':
        "No word describes a smell or a flavour: 'warm' and 'crusty' are felt, and 'golden' is seen.",
    },
    more: 'Sensory description makes a reader experience a scene. Writers often combine two or three senses to make something vivid and tempting.',
    tip: 'In your own descriptions, use at least two senses. Sight is easy; touch, smell and sound make the reader feel present.',
  },
  'What is a volta in a sonnet?': {
    why: "'Volta' is Italian for 'turn'. In a sonnet, the volta is the point where the argument, mood or tone shifts, often at line 9 or in the final couplet.",
    not: {
      'The title at the head of the poem':
        'The title names the poem. The volta is a turning point inside it.',
      'A line that is repeated as a refrain':
        'A refrain is a repeated line. A volta is a single turning point where the thought shifts.',
      'The pattern of the rhyme scheme':
        'A volta is about meaning and tone, not sound. It can happen whatever the rhyme scheme.',
    },
    more: 'In a Petrarchan sonnet the volta usually comes between the octave and the sestet, at line 9. In a Shakespearean sonnet it often comes in the final couplet.',
    tip: "Find the volta and explain what changes there: the speaker's mood, argument or attitude. Points about structure like this are highly rewarded.",
  },
  'What is a caesura?': {
    why: 'A caesura is a pause in the middle of a line, usually made by punctuation such as a full stop, comma or colon. It breaks the rhythm on purpose.',
    not: {
      'A line that runs on into the next':
        'A line that runs on into the next is enjambment. A caesura is a pause within one line.',
      'A pair of rhyming lines together':
        'A rhyming couplet is two rhyming lines together. A caesura is a pause within one line.',
      'The final line of a stanza':
        'A caesura happens inside a line. The end of a line or stanza is a different kind of break.',
    },
    more: 'A caesura can create hesitation, shock or emphasis, making the reader stop at a key moment. Do not confuse it with an end-stopped line, where the pause falls at the end of the line.',
    tip: 'Name the punctuation that creates the caesura, then explain why the poet wants the reader to stop there.',
  },
  'What is free verse?': {
    why: 'Free verse is poetry with no fixed rhyme scheme and no regular metre. The lines follow the rhythms of natural speech, and the poet decides where each line breaks.',
    not: {
      'Poetry with strict metre but no rhyme':
        'That is blank verse, the unrhymed iambic pentameter of much of Shakespeare. Free verse has no regular metre either.',
      'A sonnet that breaks the usual rules':
        'A sonnet keeps strict rules: fourteen lines, usually with a set rhyme scheme and metre. Free verse is not a kind of sonnet.',
      'Poetry set out in paragraphs, not lines':
        'Poetry written in paragraphs is called a prose poem. Free verse still uses lines, just without a fixed pattern.',
    },
    more: 'Free verse gives a poet flexibility: line breaks and pauses can create emphasis instead of rhyme. Many modern poems, including several in the exam anthologies, use it.',
    tip: 'If a poem has no regular pattern, say so, then explain what the freedom allows: a natural, conversational voice, or a sense of chaos.',
  },
  'What is an extended metaphor?': {
    why: 'An extended metaphor is a comparison that continues beyond one phrase, developed over several lines or a whole text, so its meaning builds as it goes.',
    not: {
      'A very long sentence with many clauses':
        'A long sentence is about grammar. An extended metaphor is about a comparison that keeps developing.',
      'Two different metaphors placed side by side':
        'Two separate metaphors are just two metaphors. An extended metaphor develops one comparison.',
      'A metaphor that everyone understands':
        'Whether a metaphor is easy to understand has nothing to do with whether it is extended.',
    },
    more: 'When Romeo and Juliet first speak, he is a pilgrim and her hand a holy shrine, and the comparison runs through the whole sonnet they share.',
    tip: 'When you find an extended metaphor, track how it develops, and explain what each new stage adds.',
  },
  'In Macbeth, what does blood symbolise?': {
    why: 'Blood runs through the play as a sign of murder and the guilt it brings. After killing Duncan, Macbeth fears that not even the ocean could wash the blood from his hand, because the stain is now on his conscience.',
    not: {
      'Power and ambition':
        'Ambition drives the murders, but blood stands for what they cost: the violence done and the guilt that follows.',
      'Love and passion': 'Blood is not linked to love in Macbeth. It marks killing and guilt.',
      'Peace and innocence':
        'Blood is the opposite of innocence here. Lady Macbeth hopes a little water will clear them, but the stain stays in their minds.',
    },
    more: "Blood changes meaning. In Act 1 it marks Macbeth's bravery in battle; after Duncan's murder it marks guilt. In Act 3 Macbeth says 'blood will have blood': one killing leads to another.",
    tip: 'Track the motif across the play. Showing how blood shifts from honour to guilt is the kind of whole-text point a top-band answer makes.',
  },
  'On Christmas Eve, Dickens writes: "The fog came pouring in at every chink and keyhole". What does "pouring" suggest about the fog?':
    {
      why: "Liquids pour. Saying the fog 'came pouring in' makes it so thick that it flows like water, filling every gap: the cold outside forces its way into Scrooge's office.",
      not: {
        'It drifts in lightly and will soon lift':
          "'Pouring' is heavy and unstoppable, the opposite of drifting lightly. Nothing suggests the fog will lift.",
        'It is turning into a heavy, freezing rain':
          "The fog is not rain; 'pouring' is used figuratively, to show how thickly it flows in.",
        'It warms the office like steam from a kettle':
          'The fog is cold and dense, and the office is already chilly. Nothing about it is warm or welcome.',
      },
      more: 'The fog and cold outside match the man inside: Dickens surrounds Scrooge with a world as cold and closed as he is.',
      tip: 'Choose the verb doing the work and explain its usual meaning, then what it suggests in this new context.',
    },
  'A scientist recalls the night he brought his creation to life: "a dreary night of November", when "the rain pattered dismally against the panes". What does the weather add to the moment?':
    {
      why: "'Dreary' and 'dismally' fill the scene with gloom at what should be his moment of triumph. The weather mirrors the horror he is about to feel, so the reader senses disaster before he does.",
      not: {
        'A sense that nature is celebrating with him':
          "Nothing in 'dreary' or 'dismally' is joyful. Nature seems to mourn, not celebrate.",
        'A reason why the experiment fails at first':
          'The experiment works: the creature opens its eyes. The weather sets a mood; it does not cause anything.',
        'A calm that shows he is proud and content':
          "The scene is gloomy and anxious. He works with 'an anxiety that almost amounted to agony', not calm pride.",
      },
      more: "Weather that mirrors feeling is called pathetic fallacy. Here it works ahead of the scientist, who feels the horror only once the creature's 'dull yellow eye' opens.",
      tip: 'Do not stop at naming the device. Say which feeling the weather mirrors, and whether it matches what the character feels or warns of what is coming.',
    },
  'A doctor writes in his final statement: "man is not truly one, but truly two." This is an example of:':
    {
      why: "The doctor sets two opposite ideas side by side in matching phrases: man is not 'truly one' but 'truly two'. Placing contrasting ideas next to each other like this is juxtaposition.",
      not: {
        Oxymoron:
          "An oxymoron fuses two opposite words into one phrase, like 'bitter-sweet'. Here the opposites sit in two separate, balanced phrases.",
        Irony:
          'Irony needs a gap between what is said and what is meant or expected. The doctor means exactly what he says about human nature.',
        Personification:
          'Nothing non-human is given human qualities. The line sets two opposite ideas about human nature side by side.',
      },
      more: "This comes from Henry Jekyll's own statement, the last chapter of Stevenson's novella. The matching phrases, a pattern called antithesis, sum up the book's central idea: that every person has two sides.",
      tip: 'For contrasting ideas in matching phrases, you can also use the precise term antithesis. Then explain what the contrast suggests.',
    },
  'In "A Christmas Carol", why does Dickens present Scrooge as "solitary as an oyster"?': {
    why: 'An oyster lives shut inside a hard shell. The simile suggests Scrooge has closed himself off from everyone: he is secretive, self-contained and alone by choice.',
    not: {
      'He lives alone in a cottage by the sea':
        'Scrooge lives in gloomy rooms in London, not by the sea. The oyster describes his character, not his home.',
      'He has made his fortune trading at sea':
        'Scrooge made his money in his counting-house in London. The oyster is chosen for its hard, closed shell.',
      'He is slippery and hard to pin down':
        'Oysters can be slippery, but the simile points to the shell: Scrooge is closed and alone, not evasive.',
    },
    more: "The same passage calls him 'Hard and sharp as flint'. Together the images suggest a man who has made himself cold and closed, which makes his later change more striking.",
    tip: "Link Stave 1 to Stave 5: the closed oyster opens up when Scrooge becomes generous and joins his nephew's Christmas dinner.",
  },
  'Why might a poet use enjambment?': {
    why: 'Enjambment carries a sentence over the end of a line without punctuation, so the reader runs on to the next line. This creates flow, speed or a sense of urgency.',
    not: {
      'To make the reader stop at each line end':
        'Stopping at each line end is end-stopping, made with punctuation. Enjambment does the opposite: it carries the sense over the break.',
      'To make the rhyme scheme easier to fit':
        'Enjambment is about where sentences run across lines, not about finding rhymes.',
      'To mark a change of speaker in the poem':
        'A new speaker is shown by speech marks or a new stanza. Enjambment is about a sentence running over a line break.',
    },
    more: 'Enjambment can also put weight on the word at the start of the next line, or show thoughts spilling over, out of control.',
    tip: 'When you spot enjambment, say what the run-on movement suggests: excitement, panic, or a feeling too big for one line.',
  },
  'In Romeo and Juliet, why does Shakespeare use light and dark imagery?': {
    why: 'Romeo sees Juliet as light: she teaches the torches to burn bright, and she is the sun. But their love must hide in darkness, so the contrast shows both its beauty and its danger.',
    not: {
      'To show which family each person is from':
        'Light and dark are not tied to either family. Romeo uses light for Juliet, a Capulet, and their love must hide in the dark from both houses.',
      'To describe the hot summer weather in Verona':
        'The light and dark images are symbols of love and danger, not descriptions of the weather.',
      'To show the lovers are only safe by day':
        "The reverse is true. Romeo has 'night's cloak to hide me' from Juliet's kinsmen: darkness keeps the lovers safe, and daylight brings danger.",
    },
    more: "At dawn in Act 3, Romeo says 'More light and light, more dark and dark our woes': as day comes he must leave, so light now brings danger.",
    tip: 'Trace an image pattern across the play. Explaining how light and dark change meaning shows the whole-text understanding examiners reward.',
  },
  'In "Ozymandias", what does the "shattered visage" represent?': {
    why: "The visage is the broken stone face of the king's statue, half sunk in sand. Its ruin shows that even the mightiest ruler's power and works fade with time.",
    not: {
      'A mirror broken by the king in anger':
        'A visage is a face. Here it is the face of a statue, half sunk in the sand, not a mirror.',
      "The sculptor's failure to finish his work":
        "The sculptor's skill is praised: he 'well those passions read'. The statue is ruined by time, not unfinished.",
      'A face damaged by grave robbers':
        'Nothing in the poem mentions robbers. Time and the desert have broken the statue, and that is the point.',
    },
    more: "The irony is sharp: the face still shows the king's sneer of command, but the empire it ruled has gone. Only lone and level sands remain.",
    tip: "Link the image to the inscription's boast: the gap between his claim of mighty works and the empty desert creates the poem's irony.",
  },
  'In Jekyll and Hyde, what does the locked door of the laboratory represent?': {
    why: "Doors in the novella guard secrets. The locked laboratory door hides Hyde, and with him Jekyll's hidden life, keeping the respectable doctor apart from the evil he has let loose.",
    not: {
      "The poor state of Jekyll's old house":
        "The building's neglect is described, but the locked door matters for what it hides: Hyde, and Jekyll's double life.",
      "The laboratory's danger to visitors":
        'The laboratory is not shown as a physical danger. The locked door guards a secret, not visitors.',
      "Jekyll's wish to work in peace and quiet":
        'Jekyll shuts himself away to hide Hyde, not to work undisturbed.',
    },
    more: "Hyde uses a shabby back door with neither bell nor knocker, while Jekyll's front door faces a respectable square. The two doors mirror the two sides of one man.",
    tip: "Use setting as evidence. Explain how Stevenson's doors and buildings reflect the theme of duality and Victorian secrecy.",
  },
  'In "London" by Blake, what does the phrase "mind-forged manacles" suggest?': {
    why: "Manacles are chains, and 'mind-forged' means they are made in the mind. Blake suggests people are trapped by ideas and rules, imposed by those in power and accepted without question.",
    not: {
      "People are chained up in London's prisons":
        "The manacles are not real chains. 'Mind-forged' means they are made in the mind.",
      'People are free to think as they choose':
        'The image suggests the opposite: minds that are locked in, not free.',
      "London's blacksmiths make chains for ships":
        "'Forged' is a metalworking word, but these chains are made by the mind, not by smiths.",
    },
    more: 'Blake hears these manacles in every voice around him, so the oppression is everywhere. The poem goes on to blame the Church and the monarchy for the suffering of chimney sweeps and soldiers.',
    tip: "Explore both halves of the phrase: 'mind-forged' suggests people help build their own prisons, which makes the oppression harder to escape.",
  },
  'Romeo says: "But soft, what light through yonder window breaks?" What is the metre of this line?':
    {
      why: "Read aloud, the line rises five times: 'But SOFT, what LIGHT through YONder WINdow BREAKS'. Each beat is an iamb, an unstressed then a stressed syllable, and five of them make iambic pentameter.",
      not: {
        'Trochaic pentameter':
          "A trochee falls, stressed then unstressed, DUM-da. Romeo's line rises: every beat goes from unstressed to stressed.",
        'Iambic tetrameter':
          'Iambic tetrameter has four iambs, eight syllables in all. This line has ten syllables and five beats.',
        'Free verse':
          'Free verse has no regular metre. This line keeps a strict pattern of five rising beats.',
      },
      more: 'Iambic pentameter is close to the rhythm of English speech, which is why it can sound natural and formal at once. Unrhymed, it is called blank verse.',
      tip: 'Read a line aloud and tap the stresses. Then say what the rhythm does: a steady beat can sound calm and controlled; a broken one can show disturbance.',
    },
  'In "Bayonet Charge" by Hughes, the soldier runs in a "raw-seamed" uniform. What does "raw-seamed" suggest?':
    {
      why: "'Raw' suggests skin rubbed sore, and seams are where rough cloth chafes. Hughes puts the reader inside the soldier's uncomfortable body as he runs: the charge is physical and painful, not glorious.",
      not: {
        'His uniform is smart, neat and stylish':
          "Nothing in 'raw-seamed' is smart or neat. 'Raw' points to rough cloth and sore skin.",
        'His uniform has been ripped by bullets':
          "Bullets fill the air, but 'raw-seamed' describes rough seams and the soreness they cause, not damage from gunfire.",
        'His uniform makes him proud to serve':
          "The poem strips pride away. The 'patriotic tear' that once moved him now means nothing, and the uniform that stands for duty is hurting him.",
      },
      more: 'Hughes drops the reader straight into the action. Tactile details like the chafing uniform show war as bodily suffering, far from the noble ideals the soldier once believed in.',
      tip: 'Pick out sensory details and say what they reveal: the physical reality of war replacing patriotic ideas.',
    },
  'In Great Expectations, what does Satis House symbolise?': {
    why: 'At Satis House every clock stopped at twenty minutes to nine, when Miss Havisham was jilted, and her wedding cake rots on the table. The house stands for time frozen and a life stuck in bitterness.',
    not: {
      'Honest work and the warmth of family':
        "That is closer to Joe's forge, where the novel values honest work. At Satis House no brewing has gone on for a long time, and the clocks have stopped.",
      'A typical, comfortable Victorian home':
        'Its stopped clocks, rotting cake and a bride who never took off her dress make it strange and Gothic, not typical.',
      'Wealth that brings happiness to its owner':
        'Miss Havisham is rich, yet she sits in a rotting wedding dress among stopped clocks. Her wealth has brought her only bitterness.',
    },
    more: "'Satis' means 'enough', as Estella explains: whoever owned the house could want nothing else. The irony is bitter, since its wealth brought no happiness.",
    tip: 'Use Satis House to discuss the theme of wealth: Dickens shows that money and status cannot buy happiness.',
  },
  'In "The Charge of the Light Brigade", what does "valley of Death" allude to?': {
    why: "Psalm 23 speaks of walking through 'the valley of the shadow of death'. Tennyson's phrase echoes it, giving the charge a solemn, biblical weight and signalling that the riders are heading for death.",
    not: {
      'A Shakespeare play about a doomed army':
        "The phrase echoes Psalm 23 from the Bible, which Tennyson's readers knew well, not Shakespeare.",
      'A Greek myth of the road to the underworld':
        "Greek myths do describe a road to the underworld, but 'valley of Death' echoes the Bible's 'valley of the shadow of death'.",
      'A hymn sung by the soldiers as they rode':
        "Nothing in the poem shows the riders singing. The phrase is Tennyson's allusion, for his readers to recognise.",
    },
    more: "The charge took place at Balaclava in 1854, during the Crimean War. Repeating 'valley of Death' stresses that every rider moves closer to death.",
    tip: 'When you spot an allusion, name its source and explain what it adds: here, a religious seriousness that honours the dead.',
  },
  'In Macbeth, why does Lady Macbeth sleepwalk and try to wash her hands?': {
    why: "In Act 5 Lady Macbeth walks in her sleep, rubbing her hands as if washing them, and cries 'Out, damned spot'. The guilt she once dismissed breaks through, showing she cannot escape her conscience.",
    not: {
      'She is ill with a fever from the cold castle':
        'Her sleepwalking is a sign of a troubled mind, not a fever. The Doctor says she needs a priest more than a doctor.',
      'She is rehearsing a spell from the witches':
        'She has no dealings with the witches, and her words replay the night of the murder, not a spell.',
      'She is pretending, to fool the doctor':
        'She is asleep and does not know she is watched: the Doctor and her gentlewoman observe her unseen.',
    },
    more: "After the murder she told Macbeth that a little water would clear them of the deed. Now she says 'all the perfumes of Arabia will not sweeten this little hand'.",
    tip: 'Compare Lady Macbeth in Act 1 and Act 5 to show how guilt destroys her. That before-and-after contrast makes a strong essay structure.',
  },
  'In "Poppies" by Weir, what do poppies symbolise?': {
    why: 'Since the First World War, red poppies have been worn to remember those killed in war. The poem is set just before Armistice Sunday, when poppies honour the dead.',
    not: {
      'The joy of spring in the garden':
        'The poppy in the poem is a paper poppy of remembrance, not a garden flower.',
      'The bright colour red and nothing more':
        'Red is part of the image, and it can suggest blood, but the poppy stands for remembrance.',
      'Victory and celebration after war':
        'Poppies are worn in sorrow and respect, to remember the dead, not to celebrate.',
    },
    more: "Poppies grew on the battlefields of Flanders in the First World War, which is why they became the symbol of remembrance. In the poem, one poppy links a family's private grief to national mourning.",
    tip: "Link the symbol to the poem's contrast between public remembrance and one mother's private loss.",
  },
  'In Animal Farm, what does the windmill represent?': {
    why: "Snowball promises the windmill will bring electricity and a three-day week. The animals wear themselves out building it, but its comforts never reach them. It stands for Stalin's plans for industry and the promises used to make workers toil.",
    not: {
      'A real mill that makes the farm rich for all':
        'It is a real windmill in the story, but its comforts never reach the animals: in the end it is used for milling corn, at a profit for the pigs.',
      "Napoleon's own idea from the very start":
        "The windmill is Snowball's plan. Napoleon opposes it, then claims it as his own once Snowball is driven out.",
      'The power of nature over the farm':
        'A storm does knock it down once, but the windmill stands for human plans and propaganda, not nature.',
    },
    more: 'When the windmill falls, Napoleon blames Snowball, turning disaster into propaganda. The comforts it promised never come.',
    tip: "Connect the symbol to context: Stalin's Five-Year Plans promised progress while workers suffered.",
  },
  'In "War Photographer" by Duffy, the photographer\'s rolls of film are called "spools of suffering". What does the phrase suggest?':
    {
      why: "The rolls of film are named by what they hold: suffering. The phrase reminds the reader that every picture on the spool is a real person's pain, now neatly wound up and stored.",
      not: {
        'The photographer is suffering from illness':
          "The suffering belongs to the people in the photographs, not to the photographer's health.",
        'The films are old, damaged and worn out':
          'The films are new: he has just come home to develop them.',
        'The camera is broken and hard to use':
          "Nothing suggests a fault with the camera. 'Suffering' names what the pictures show.",
      },
      more: "The soft sibilance of 'spools of suffering' is hushed, like the darkroom itself. The quiet sound sits uneasily with what the films contain.",
      tip: 'When a writer names an object by what it contains, explain both: here, ordinary rolls of film, and the human pain they carry.',
    },
  'In Jekyll and Hyde, why does Hyde become progressively harder to control?': {
    why: "Once Jekyll lets his evil side loose, it grows, and Hyde starts to appear without the drug. When Jekyll tries to give him up for two months, Hyde returns 'roaring' and murders Carew. Indulged or repressed, the dark side only gets stronger.",
    not: {
      "Jekyll's body grows physically stronger":
        "It is Hyde who grows. Jekyll says Hyde's body seemed to grow in stature, while Jekyll himself weakens.",
      'Utterson secretly protects Hyde':
        'Utterson does the opposite: he hunts Hyde, trying to protect his friend Jekyll.',
      'Lanyon gives Hyde a stronger drug':
        "Lanyon only fetches the drawer of chemicals at Jekyll's request. Hyde mixes the draught himself, and Lanyon is horrified.",
    },
    more: "Jekyll says the side of him he had been projecting had been 'much exercised and nourished'. Stevenson suggests that evil feeds on indulgence.",
    tip: "Link this to Victorian respectability: Jekyll's double life suggests the dangers of hiding desires rather than facing them.",
  },
  'A scientist describes the being he has brought to life: "the miserable monster whom I had created". Which word shows he cannot escape responsibility for it?':
    {
      why: "'Created' makes him the maker of what horrifies him. However much he calls it a monster, the verb puts the responsibility on him: he made it.",
      not: {
        miserable:
          "'Miserable' describes the creature as wretched, which may even stir pity. It does not point back to its maker.",
        monster:
          "'Monster' is his judgement of the creature, pushing it away. The word that ties it to him is the verb.",
        whom: "'Whom' only links the clause. The responsibility lies in what he did.",
      },
      more: 'The phrase turns on itself: it begins in disgust and ends in his own action. Shelley lets his grammar admit what he will spend the novel running from.',
      tip: 'In a sentence that judges someone, look for the word that implicates the speaker. Contrasting the two shows close reading.',
    },
  'Jane tells Rochester: "I am no bird; and no net ensnares me". What is she claiming?': {
    why: 'A bird in a net is caught, helpless and owned. By denying she is either, Jane claims her freedom: no one, not even the man she loves, can trap or keep her against her will.',
    not: {
      'She is a wild bird that he must set free':
        'She denies being a bird at all. Her freedom is not his to give; she claims it for herself.',
      'She is trapped, too weak to escape his hold':
        "That is what Rochester's bird image implies, and she rejects it: 'no net ensnares me' denies that she is caught at all.",
      'She will trap him, as a hunter traps birds':
        'The net is something that might catch her, not one she sets. She refuses to be prey; she has no plan to trap him.',
    },
    more: "Rochester has just told her not to struggle 'like a wild frantic bird'. Jane turns his image against him and claims an 'independent will' of her own.",
    tip: 'When a character uses a metaphor about themselves, say what it shows about how they see their position, and who they are speaking to.',
  },
  'A novel opens: "No one would have believed in the last years of the nineteenth century that this world was being watched keenly and closely by intelligences greater than man\'s". Which word first makes the reader feel spied on?':
    {
      why: "'Watched' turns the whole Earth into something observed in secret. Before any alien appears, the reader feels studied from afar.",
      not: {
        believed:
          "'Believed' is about what people thought possible. It sets up the surprise, but it does not make anyone watched.",
        nineteenth:
          "'Nineteenth' fixes the time. The feeling of being observed comes from the verb.",
        greater:
          "'Greater' makes the watchers superior and frightening, but it is the verb that makes the reader feel spied on.",
      },
      more: 'The sentence goes on to compare humans to the tiny creatures a scientist studies under a microscope. Wells reverses the usual order: people, who study everything, are the ones being studied.',
      tip: 'Opening lines are built to hook. Pick the word that does the hooking and explain the feeling it plants before anything has happened.',
    },
  'A novel ends: "So we beat on, boats against the current, borne back ceaselessly into the past." What does the image suggest about people?':
    {
      why: "'Beat on' shows effort, rowing hard against the current. But 'borne back ceaselessly into the past' shows the effort failing: however hard people strive towards the future, the past keeps pulling them back.",
      not: {
        'They sail calmly towards a bright future':
          'Beating against a current is hard work, not calm sailing, and the boats are carried backwards.',
        'They stop trying and drift with the tide':
          "'Beat on' means they keep trying. The sadness is that effort, not surrender, still ends in the past.",
        'They are sailors on their voyage home':
          "The boats are an image for people in general: 'we'. Nothing here is a literal voyage.",
      },
      more: "The plosive 'b' sounds of beat, boats and borne give the line a rowing rhythm. The 'we' widens one man's longing for his lost past to everyone.",
      tip: "With a closing line, say how it sums up the whole book's idea, and quote the words that carry it.",
    },
  'A poem begins: "If you can keep your head when all about you / Are losing theirs and blaming it on you". What does "keep your head" mean here?':
    {
      why: "To 'lose your head' is to panic, so to 'keep your head' is to stay calm. The poem's first test is staying level-headed while everyone around you loses theirs, and blames you as well.",
      not: {
        'Stay alive when others die':
          'The idiom is about the mind, not survival. Nobody is losing a real head; they are losing their calm.',
        'Keep your thoughts to yourself':
          "Keeping thoughts private is 'keeping your counsel'. 'Keep your head' means not panicking.",
        'Stay proud and look down on others':
          "The poem warns against showing off: 'don't look too good, nor talk too wise'. Here the test is calm under pressure.",
      },
      more: "The joke in the idiom is that the others have lost their heads while the reader keeps theirs. The whole poem is one long sentence of 'If' conditions, and its main clause does not arrive until line 31 of 32.",
      tip: 'When a writer uses an idiom, explain its everyday meaning first, then what it adds: here, the picture of panic spreading through a crowd.',
    },
  'A play opens with a lovesick duke saying: "If music be the food of love, play on". What does the metaphor suggest?':
    {
      why: "Food keeps a body alive, so calling music 'the food of love' means it nourishes love. The duke wants more of it, though he goes on to hope that too much will make his appetite sicken.",
      not: {
        'Music makes him feel angry and restless':
          'Nothing in the line is angry. He asks the musicians to keep playing because the music feeds his feeling.',
        'He is hungry and wants his dinner served':
          "That takes the metaphor literally. 'Food' stands for what love feeds on.",
        'Love is a song that he wants to write':
          'He asks others to play; he is not composing. The metaphor is about music nourishing love.',
      },
      more: "The next lines ask for 'excess of it', so much that his appetite may sicken and die. The opening shows a man in love with being in love, which the play will test.",
      tip: "Follow a metaphor into the next lines. Here the food image becomes overeating, which shows the duke's self-indulgence.",
    },
  'A young lover sighs: "The course of true love never did run smooth". What does the image suggest about love?':
    {
      why: "A course is a path, like a river's, and a smooth one has no bumps. Saying true love never runs smooth means it always meets obstacles: families, rivals, misunderstandings.",
      not: {
        'It always flows calmly once it starts':
          "The line says the opposite: love's course is never smooth.",
        'It is a race that the fastest lover will win':
          "'Course' here means a path or route, not a racecourse. Nobody is competing to be fastest.",
        'It ends as soon as the lovers marry':
          'Nothing suggests love ends with marriage. The line is about the troubles lovers meet on the way.',
      },
      more: 'Lysander says it to comfort Hermia, whose father forbids her to marry him. The whole comedy proves him right before letting the lovers reach the end of the course.',
      tip: "Explain the image's literal sense first, a rough path or river, then what it suggests about the idea it describes.",
    },
  'Portia says: "The quality of mercy is not strain\'d, / It droppeth as the gentle rain from heaven". What does the simile suggest about mercy?':
    {
      why: "Rain falls from above on everyone, without being asked or earned. Comparing mercy to 'gentle rain from heaven' makes it a free, natural gift, never forced, which is what 'not strain'd' means.",
      not: {
        'It must be forced out of people with effort':
          "'Not strain'd' means not forced. The simile makes mercy fall freely.",
        'It is rare and falls only now and then':
          'Nothing suggests rarity. Rain falls on everyone below, which is the point: mercy is for all.',
        'It is cold and harsh, like a winter storm':
          "The rain is 'gentle'. The simile makes mercy soft and nourishing, not harsh.",
      },
      more: 'Portia, disguised as a lawyer, is pleading with Shylock to show mercy. Her speech is beautiful, but the court that follows shows him very little.',
      tip: "Unpack both halves of a simile, then ask whether the speaker's side lives up to it. Gaps between words and actions make strong analysis.",
    },
  'A sentry on watch, having just seen a ghost, says: "Something is rotten in the state of Denmark." What does "rotten" suggest?':
    {
      why: "Rot spreads unseen and spoils everything it touches. 'Rotten' suggests a hidden corruption at the heart of the state, which the ghost's appearance has hinted at.",
      not: {
        "The castle's food stores have gone bad":
          "That takes the word literally. 'Rotten' describes the state of the country, not its food.",
        'The weather has turned damp and cold':
          "It is a cold night, but 'rotten' points to something wrong in the state, not the weather.",
        'The country is poor after a long war':
          'Nothing in the word suggests poverty. It suggests decay and corruption.',
      },
      more: 'Images of disease and decay run through the play. The audience soon learns why: the new king murdered his brother to take the crown.',
      tip: 'A metaphor of disease or decay usually points to moral corruption. Say what is rotten, and where the rot began.',
    },
  'A forged letter tells its reader: "Some are born great, some achieve greatness, and some have greatness thrust upon \'em". Which technique shapes the sentence?':
    {
      why: 'Three balanced clauses each name a way to be great: by birth, by effort, or by having it handed to you. A list of three sounds complete and memorable, which makes the flattery hard to resist.',
      not: {
        Personification:
          "Greatness is 'thrust upon' people, but it is not given a human mind or body. The structure is a list of three.",
        'An oxymoron':
          'No two contradictory words are joined. The three clauses agree with each other.',
        Onomatopoeia: 'No word imitates a sound.',
      },
      more: 'The letter is written to fool the steward Malvolio into thinking his lady loves him. The grand list flatters his ambition, and he believes every word.',
      tip: 'When you find a list of three, look at the order: here it builds from what you are born with to what is handed to you, the one Malvolio hopes for.',
    },
  'A magician, ending the show he has staged for his daughter and her betrothed, says: "We are such stuff / As dreams are made on, and our little life / Is rounded with a sleep." What does he suggest about life?':
    {
      why: "People are made of the same 'stuff' as dreams: insubstantial and soon gone. 'Our little life' is short, and 'rounded with a sleep' means it ends in sleep, a gentle word for death.",
      not: {
        'It is long and full of great adventures':
          "'Little life' says the opposite: life is short.",
        'It is a nightmare full of fear and pain':
          'Dreams here are insubstantial, not frightening. The tone is calm and wondering, not afraid.',
        'It goes round in circles, year after year':
          "'Rounded' means completed or surrounded, not circling. Life is framed by sleep.",
      },
      more: "Prospero speaks just after ending a magical show for the young lovers. The vanished spectacle becomes an image for everything, even 'the great globe itself', which some hear as a nod to Shakespeare's own theatre.",
      tip: 'When a character speaks about life in general, link the speech to what has just happened on stage: here, a show that has melted into air.',
    },
  'In Macbeth, Lady Macbeth says "A little water clears us of this deed". Which word shows how lightly she treats the murder?':
    {
      why: "'Little' shrinks the murder to something a splash of water can wash away. Lady Macbeth makes regicide sound small and easy, which the play will prove terribly wrong.",
      not: {
        water:
          "'Water' is the means of cleaning, but it is 'little' that makes the task sound small.",
        clears:
          "'Clears' claims the stain can go, but it is the size word that makes the claim so light.",
        deed: "'Deed' is a vague, neutral word for the murder, but it is 'little' that shrinks the job of washing it away.",
      },
      more: "Act 5 answers this line: in her sleep she cannot wash out the 'spot'. Her lightness here makes the later breakdown more striking.",
      tip: 'Choose the single word that carries the attitude and say what it reveals about the speaker at this point in the play.',
    },
  'In A Christmas Carol, as Scrooge climbs his dark stairs, the narrator remarks: "Darkness is cheap, and Scrooge liked it." What does this short sentence suggest?':
    {
      why: 'The sentence gives the reason first: darkness is cheap. Scrooge likes it not for its peace but because it saves money, so even his taste in light is ruled by meanness.',
      not: {
        'He is afraid of the dark and hides from it':
          "He is not afraid: he walks up the stairs 'not caring a button' for the gloom. It is the cost he cares about.",
        'He cannot afford candles because he is poor':
          'Scrooge is rich. He chooses darkness because it is cheap, not because he cannot pay for light.',
        'He enjoys the dark because it helps him sleep':
          'Nothing mentions sleep. The narrator gives money as the reason, which is the joke.',
      },
      more: 'The dry, short sentence lets Dickens mock Scrooge in a single beat. The darkness he saves on is also the darkness he will be shown in the visions to come.',
      tip: 'When a narrator gives a reason in few words, quote the sentence whole and explain the judgement hidden in its brevity.',
    },
  'In An Inspector Calls, Birling sneers at people who talk of "community and all that nonsense". Which word shows his contempt?':
    {
      why: "'Nonsense' dismisses the whole idea of caring for others as foolish. In one word Birling waves away the belief the Inspector will spend the play defending.",
      not: {
        community:
          "'Community' is the idea he is mocking, not the word that mocks it. The scorn comes in 'nonsense'.",
        all: "'All' lumps the ideas together carelessly, but it is 'nonsense' that judges them.",
        that: "'That' is a pointing word with no feeling of its own. His contempt is in the final noun.",
      },
      more: "Priestley lets Birling say this just before the doorbell rings. The Inspector's arrival answers the sneer at once, which the audience can enjoy.",
      tip: 'When a character dismisses an idea, quote the dismissive word and link it to the character or speech that proves them wrong.',
    },
  'Pride and Prejudice opens: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife." Which word exaggerates how widely the idea is believed?':
    {
      why: "'Universally' claims that everyone everywhere agrees. The grand claim is the joke: the novel soon shows that it is the families with daughters who want a rich young man to need a wife.",
      not: {
        truth:
          "'Truth' does sound grand, but it is 'universally' that claims everyone agrees with it.",
        single:
          "'Single' tells us the man is unmarried. It does not say how widely anything is believed.",
        fortune:
          "'Fortune' tells us he is rich, which is why he is wanted. It says nothing about who believes it.",
      },
      more: "The sentence is ironic: it sounds like a solemn law but describes the hopes of mothers like Mrs Bennet. Austen's narrator often says one thing and means another.",
      tip: 'When an opening line sounds too grand, look for irony. Say what it claims and what the novel actually shows.',
    },
  'In Jekyll and Hyde, Utterson struggles to describe Hyde, who seems "hardly human": "Something troglodytic, shall we say?" Which word makes Hyde seem primitive?':
    {
      why: 'A troglodyte is a cave-dweller, a person from an earlier, more primitive age. Utterson reaches for it to say Hyde seems less evolved, a throwback to something older and more animal.',
      not: {
        human:
          "'Human' is what Hyde seems hardly to be. It is 'troglodytic' that names what he seems instead.",
        hardly:
          "'Hardly' weakens the claim that Hyde is human, but it is 'troglodytic' that makes him primitive.",
        Something:
          "'Something' shows Utterson struggling to name what he sees. The word he finds is 'troglodytic'.",
      },
      more: 'Writing soon after Darwin, Stevenson taps a Victorian fear that humans might slide back down the ladder of evolution. Hyde is described again and again as ape-like.',
      tip: 'When a character struggles to describe something, quote the word they settle on and explain the fear it reveals.',
    },
  'In Romeo and Juliet, just before the secret wedding, Friar Lawrence warns: "These violent delights have violent ends". What does the line suggest?':
    {
      why: "Repeating 'violent' ties the start to the end: a love as sudden and fierce as theirs may burn out just as violently. The Friar's warning foreshadows the deaths to come.",
      not: {
        'The lovers will soon grow bored of each other':
          "The Friar fears an explosive end, not boredom: 'violent' is the opposite of fading interest.",
        'The wedding party will turn into a brawl':
          'There is no wedding party; the marriage is secret. The violence he warns of is the ending their haste may bring.',
        'Their love is calm and will last a lifetime':
          "The Friar calls their delight 'violent', the opposite of calm, and warns that it may not last.",
      },
      more: "He goes on to compare such love to fire and powder, which 'as they kiss consume'. The audience, who know from the Prologue how the story ends, hear the warning come true.",
      tip: 'When a wise character gives a warning, link it to the ending it foreshadows, and quote the repeated word that carries it.',
    },
  'In Animal Farm, the sheep learn to bleat "Four legs good, two legs bad" for hours on end. What does the slogan do?':
    {
      why: 'The slogan shrinks the whole of Animalism into four words a sheep can bleat. Chanted for hours, it drowns out any discussion, so slogans end up doing the thinking.',
      not: {
        'It explains the rules of Animalism in full':
          'It is a drastic shortening of the Seven Commandments, not a full explanation.',
        'It shows the sheep are the cleverest animals':
          'The sheep are among the least able animals; they learn the slogan because it is simple.',
        'It welcomes humans back on to the farm':
          'The slogan sets animals against humans, the opposite of a welcome.',
      },
      more: "Later the same sheep are taught 'Four legs good, two legs better'. Orwell shows how propaganda can change its message while the chant stays just as loud.",
      tip: 'When you analyse a slogan, say what it simplifies and what it stops people doing: here, thinking for themselves.',
    },
  'In Great Expectations, after his first visit to Satis House, Pip goes off alone "to look at my coarse hands and my common boots". What has Estella taught him to feel?':
    {
      why: "Estella has mocked his coarse hands and thick boots. Now Pip examines them alone: 'common' is her word for his class, and he has learned to be ashamed of what he is.",
      not: {
        'Pride in his strong, working hands':
          "He looks at his hands in shame, not pride. Estella's scorn has made them a mark of low birth.",
        'Worry that his boots are worn out':
          "The boots matter for what they say about his class, not their condition. 'Common' is a word about rank.",
        'Delight that Estella noticed him':
          'Estella noticed him only to mock him. He is hurt, not delighted.',
      },
      more: 'This is the start of the snobbery the older Pip narrates with regret. One afternoon has taught him to despise the forge and Joe.',
      tip: "Track a word across a novel. 'Common' here begins Pip's shame; follow how his attitude to it changes by the end.",
    },
  'In The Explorer\'s Daughter, Kari Herbert writes "my heart leapt for both hunter and narwhal" as a hunter raises his harpoon. Which word shows that she will not take sides?':
    {
      why: "'Both' sets hunter and narwhal side by side with equal weight. Herbert's heart goes out to two lives at risk at once, since the hunter in his flimsy kayak could drown, so the reader cannot settle on one side.",
      not: {
        heart:
          "'Heart' makes the reaction instinctive and emotional, but it does not say where her sympathy goes. It is 'both' that divides it.",
        leapt:
          "'Leapt' shows how sudden the feeling is, faster than thought, but it is 'both' that shares it between the two.",
        narwhal:
          "'Narwhal' names only one of the two lives. Many answers call this sympathy for the whale, but 'both' takes in the hunter as well.",
      },
      more: "The next lines keep pulling her both ways: the hunt is a 'foolhardy exercise and one that could only inspire respect', and then, with 'And yet', she silently wills the narwhal to escape.",
      tip: "Call it sympathy for two lives at risk, not for the whale alone. Pinning an effect on one small word like 'both' is the precise reading examiners reward.",
    },
  'Near the end of Young and dyslexic? You\'ve got it going on, Benjamin Zephaniah tells children "Us dyslexic people, we\'ve got it going on". Which word breaks formal grammar, so the line sounds like everyday speech?':
    {
      why: "Formal grammar wants 'We dyslexic people'. The nonstandard 'Us' is how people talk, and Zephaniah keeps it on purpose: a professor speaking to children in their own register, showing the confidence he recommends by not tidying his grammar for anyone.",
      not: {
        dyslexic:
          "'Dyslexic' is a standard adjective. It names the group he is proud to belong to, but it obeys the rules of formal grammar.",
        people:
          "'People' is a standard noun in its usual place. The break comes in the pronoun before it, 'Us', where formal English has 'We'.",
        going:
          "'Going' belongs to the idiom 'got it going on', which is informal slang, but the phrase is grammatical. The break in grammar is 'Us'.",
      },
      more: 'These words give the article its title. Its closing lines, slang and then a joke, turn the hierarchy round: being dyslexic becomes something to be proud of, not something to hide.',
      tip: 'When a writer breaks a rule of grammar, treat it as a choice: say who is being addressed, and what the informal voice does for them.',
    },
  'In Robert Frost\'s "Out, Out", the accident comes just as the boy\'s sister announces supper, as if "saws knew what supper meant". Which word gives the machine a mind of its own?':
    {
      why: "'Knew' is a verb of understanding, and giving it to a machine is personification at its height. The saw seems to grasp the sister's call and strike on cue, like a hungry animal, so the word that should mean rest becomes the cue for injury.",
      not: {
        saws: "'Saws' simply names the machine. The plural makes the remark sound like a general rule, but it is the verb 'knew' that gives it a mind.",
        supper:
          "'Supper' is the sister's word, the call to food and rest. Its timing is the cruel irony, but 'knew' is what makes the saw understand it.",
        meant:
          "'Meant' points to what the word supper signifies. It is 'knew' that credits the saw with grasping that meaning.",
      },
      more: "The personification begins in line 1, where the saw 'snarled and rattled', a phrase repeated twice more in line 7. Frost builds the threat long before the injury, so the saw feels like a presence, not a tool.",
      tip: "Find the verb that does the personifying and say what it suggests: here 'knew' makes the accident feel almost intended.",
    },
  'In An Unknown Girl by Moniza Alvi, the speaker looks at the henna pattern on her hand and says "I have new brown veins". Which word quietly admits that this belonging has only just been acquired?':
    {
      why: "'New' is the telling word. The pattern feels as if it has entered her blood like ancestry, but what is new has been acquired, not inherited, and what is new can be lost, as the poem admits when the stain will 'fade in a week'.",
      not: {
        have: "'Have' claims possession, the speaker's confidence at its height. It asserts rather than admits: 'new' is what concedes how recent the belonging is.",
        brown:
          "'Brown' is the colour of the paste and may suggest skin and heritage, but it says nothing about how long she has had it.",
        veins:
          "'Veins' takes the pattern inside her body, as if heritage ran in her blood. It is 'new' that quietly undercuts the claim.",
      },
      more: 'The short, certain sentence is the climax of the first part of the poem, and the moment she is most carried away. From line 38 the verbs turn to the future, and to loss.',
      tip: 'Look for the small word that pulls against a confident statement. Analysing that tension is more precise than calling the line simply happy.',
    },
  'In Chinese Cinderella, Adeline is "summoned by Father to enter the Holy of Holies", a room she has never been invited into. What does this image suggest about Father?':
    {
      why: "The Holy of Holies was the innermost sanctuary of the Temple in Jerusalem, which only the High Priest could enter. The comparison makes Father god-like and his room forbidden, and 'summoned' belongs to kings and courts, not to parents.",
      not: {
        'He is a devout man who spends his evenings praying alone in a chapel at home':
          'The image is a comparison, not a fact about his habits. Nothing in the extract shows Father praying: the religious language measures his power and distance.',
        'He is a warm, open father, and his room is the busy heart of family life':
          "The opposite: she has never been invited in, and she knocks 'Timidly'. The room inspires awe and fear, not family warmth.",
        'He is a priest, given the title Father, who runs the boarding school she attends':
          'Father is her own father, a wealthy businessman never named in the extract: the capital letter makes the word a title. At school it is Mother Valentino who sends her downstairs.',
      },
      more: "One reading is that this is the child's genuine awe; another is that the adult writer is gently ironic about an ordinary room treated as a shrine. Both can be true at once.",
      tip: "Explain the allusion briefly, then say what it suggests about power. Offering two readings, the child's awe and the adult's irony, marks a strong answer.",
    },
  'In To Kill a Mockingbird, Chapter 27 ends as Jem sets off to walk Scout, dressed as a ham, to the school pageant: "Thus began our longest journey together." Which word jokes about the distance, when the school is only a short walk away?':
    {
      why: "'Longest' is a superlative for a short walk to school, so at first the line reads as mock-epic humour. In hindsight it turns ominous: on the way home that night the children are attacked, and the injury promised in the novel's first sentence arrives.",
      not: {
        Thus: "'Thus' gives the sentence a grand, storybook opening, but it measures nothing. The joke about distance lies in the superlative.",
        began:
          "'Began' marks a starting point and hints that the night has only just started. It is 'longest' that turns a short walk into an epic.",
        together:
          "'Together' stresses that brother and sister set out side by side, which matters when Jem tries to protect her. The exaggeration is in 'longest'.",
      },
      more: "Lee often ends a chapter on a quiet line that turns the story. This one is a hinge: in Chapter 28 the novel's two plots collide, when Bob Ewell attacks the children on the dark road home and Boo saves them.",
      tip: 'Chapter endings are short enough to learn by heart. Quote one, then explain how its meaning changes once the reader knows what follows: that double reading is how to write about structure.',
    },
  'In Things Fall Apart, in the days after Ikemefuna\'s death, Okonkwo feels "like a drunken giant walking with the limbs of a mosquito". What does this image suggest about him?':
    {
      why: 'The simile sets huge size against tiny, spindly limbs, and the mismatch is almost comic, which makes it more painful. The man who threw Amalinze the Cat cannot eat for two days: his body shows the grief over Ikemefuna that his pride will not let him speak.',
      not: {
        'He has caught a fever from the mosquitoes of the forest and is too weak to work':
          'The mosquito is part of a comparison, not an illness. It is Ezinma who later falls ill with fever; here the thin limbs picture grief.',
        "He is proud of a giant's strength that makes all the other men look small beside him":
          "The opposite: the giant is undone by limbs too weak to carry him. The image shrinks Okonkwo's strength rather than celebrating it.",
        "He has been drinking palm-wine with Obierika to celebrate the Oracle's decision":
          'He drinks because he cannot eat or sleep, not in celebration, and Obierika tells him he would not have been the one to carry out the decree.',
      },
      more: "Achebe's similes come from farm, forest, river and village rather than from European literature. Set this one beside Chapter 14, when exile casts Okonkwo out 'like a fish on to a dry, sandy beach': both turn a strong man into something helpless.",
      tip: 'Analyse the contrast inside an image, not just the image: here size against frailty. Then say what it reveals that Okonkwo will not say aloud, which is the strongest evidence for sympathy.',
    },
  'In A Midsummer Night\'s Dream, as the two friends turn on each other in the wood, Helena says of Hermia "And though she be but little, she is fierce." Which word holds a grudging respect inside the insult?':
    {
      why: "'Fierce' warns that small Hermia is dangerous, so an insult about her height becomes an admission of her strength. The plain monosyllables make the line memorable, and Helena means it: she has just asked the men to protect her.",
      not: {
        though:
          "'Though' sets up the turn from size to strength, but it carries no judgement of its own. The respect arrives with 'fierce'.",
        but: "'But' here means only, so 'but little' shrinks Hermia further. It sharpens the insult rather than softening it.",
        little:
          "'Little' is the insult itself: the quarrel turns on height, a subject Hermia is sensitive about. The respect is in 'fierce'.",
      },
      more: "The charm has destroyed more than romantic loyalty. Two friends since childhood trade insults about each other's bodies, Hermia calling Helena a 'painted maypole', and Helena's plea for their 'school-days' friendship' shows how much has been lost.",
      tip: 'When a line insults and praises at once, analyse both halves and the word that turns between them. Mixed feeling is more precise than calling a line simply rude.',
    },
  'In Blues for an Alabama Sky, Leland proposes to Angel by recalling the night he first saw her, when Harlem\'s sky looked like "that Alabama sky where the stars are so thick it\'s bright as day". What does this image suggest about him?':
    {
      why: "Stars so thick that night becomes day make the most lyrical moment in a play of quick-fire banter. The image shows Leland's tenderness and nostalgia, and also that he loves an idea of home, and of a wife, which Angel can never be.",
      not: {
        'He fears the dark streets of Harlem and wants to leave New York as soon as he can':
          "Harlem's sky reminds him of home here; it does not frighten him. The image is a memory of light and plenty, not of danger.",
        'He dreams of the bright lights of Paris, where Josephine Baker is already a star':
          "Paris is Guy's dream, not Leland's: Guy sends designs to Josephine Baker and hopes she will send for him. Leland's longing is for the South.",
        'He despises the South he left behind and means never to go back to Alabama':
          'The opposite: Leland is a Southern churchgoer who sees Alabama as a place of order and the North as a place where morals have collapsed.',
      },
      more: "In the same memory the stars are 'twinkling at me like a promise', a simile made poignant because he cannot keep his own. The image also echoes the play's title, joining the music of Harlem to the sky of the South.",
      tip: "When a character's speech suddenly slows into poetry, say what has changed and why. A shift of style at a key moment, here a proposal, is a precise point about method.",
    },
  'In What it Means When a Man Falls from the Sky, in the story \'Light\', Enebeli will not punish his bold daughter after her headmaster complains, because "she is his brightest ember and he would not have her dimmed". Which word makes her both warm and fragile, a light that could easily go out?':
    {
      why: "An ember is a glowing coal: precious and warm, but also what is left of a fire, and easily put out. The metaphor explains why Enebeli will not punish her, and quietly sets up the dimming that the story's title promises.",
      not: {
        brightest:
          "'Brightest' shows how she shines for her father, his favourite light, but it says nothing about how easily that light could be put out.",
        dimmed:
          "'Dimmed' names the threat Enebeli refuses, the world's effort to quieten her. It is 'ember' that pictures the girl herself as fragile.",
        would:
          "'Would' carries his will, a father's refusal, but no image at all. The picture of warmth and fragility is in 'ember'.",
      },
      more: "The light metaphor runs through the story: after her mother's disapproval 'there is a little less light to her'. 'Redemption' speaks of 'Girls with fire in their bellies', so tracing one image across two stories helps an essay range over the collection.",
      tip: "Gloss an unusual noun in a few words, then draw out both of its senses. An ember is warm and alive, but it is also a fire's last remains, which is why the image foreshadows loss.",
    },
  'In Fire on the Mountain, as Nanda Kaul waits unwillingly for her great-granddaughter Raka to arrive, the narrator says "The care of others was a habit Nanda Kaul had mislaid." What does the verb "mislaid" suggest about her?':
    {
      why: 'To mislay something is to put it down and forget where it went, so the understated verb makes a lifetime of mothering sound like an object dropped absent-mindedly. The narrator adds that the care once felt like a religious calling, until she found it fake.',
      not: {
        'She has deliberately destroyed every memory of the many children she raised':
          "Nothing is destroyed. 'Mislaid' suggests carelessness, not violence, and what is mislaid can turn up again: the habit returns, wanted or not.",
        'She still treasures caring for others and secretly longs for Raka to need her':
          "The opposite: the letter about Raka makes her furious, and she wants no one and nothing else. Only later does she come to want the child's attention.",
        'She was forced by her husband to care for no one except his dinner guests':
          "She raised a large family and was a hostess for her husband's guests. The care was real; what she has mislaid is the habit of it.",
      },
      more: "The irony prepares for Raka's arrival. Later the narrator draws the novel's key contrast: Nanda Kaul is a recluse 'out of vengeance for a long life of duty and obligation', Raka one 'by nature, by instinct'.",
      tip: "When a writer uses a mild, everyday verb for something serious, the understatement is the point. Explain the verb's ordinary meaning first, then the gap between it and the life it describes.",
    },
  'In Of Mice and Men, Chapter 6 opens at the pool, where a heron stands in the shallows and "A silent head and beak lanced down" on a water snake. Which word gives the heron\'s strike the action of a spear?':
    {
      why: "'Lanced' is a spear's action, so the beak strikes down like a weapon thrust at its target. Steinbeck reduces the heron to a head and a beak, and sets a swift, soundless killing in nature just before the killing the chapter is moving towards.",
      not: {
        silent:
          "'Silent' makes the strike soundless and so more menacing, but it describes the stillness around the blow. It is the verb 'lanced' that gives the movement a spear's thrust.",
        head: "'Head' is part of the way Steinbeck reduces the heron to its working parts, but it names the body, not the action. The thrust is in 'lanced'.",
        beak: "'Beak' names the point that strikes, but a noun cannot thrust. It is the verb 'lanced' that turns the strike into a spear's.",
      },
      more: "The scene answers Chapter 1, where a heron flies off and a water snake swims across the pool unharmed. Now the peaceful evening has become a place where the weak are taken, and a second snake escapes only because Lennie's arrival scares the heron away.",
      tip: 'Find the verb that does the work, then link it to structure: say what this killing in nature prepares the reader for, without retelling the ending.',
    },
  'In Kindertransport, Evelyn sums up her life for Faith in two short sentences: "Germany spat me out. England took me in." Which word shows that she has come to see herself as something disgusting, to be got rid of?':
    {
      why: "'Spat' makes Germany a mouth rejecting something disgusting, and Evelyn is the thing rejected. It belongs to the language of dirt she uses for her past, from 'pure filth' to the baptism that left her 'cleansed': persecution has taught her to feel her own origins as dirt.",
      not: {
        Germany:
          "'Germany' names the country but passes no judgement by itself. It is the verb attached to it, 'spat', that turns her homeland into a mouth.",
        England:
          "'England' names the country that rescued her, the other half of her neat balance. The disgust lies in what Germany does, not in this name.",
        took: "'Took me in' is the kind half of the pair: England welcomes her. It is the violent verb in the first sentence that shows how she sees herself.",
      },
      more: "The two balanced sentences, with opposite verbs, are too neat: a story told so often that it has stopped hurting. The play is about what that story leaves out, from Helga's survival to the German Jewish girl Eva once was.",
      tip: 'When a character sums up a life in a neat formula, analyse the verbs, then ask what the neatness hides. Here a single verb carries years of shame.',
    },
  'In "Remember" by Christina Rossetti, the speaker asks: "Remember me when no more, day by day, / You tell me of our future that you planned". Which word puts the lovers\' future in the past, as if it were already over?':
    {
      why: "'Planned' is in the past tense, so the future is described as something already finished at the moment it is mentioned. Spoken as if from beyond her death, the shared plans belong to a life that is over. 'Our' makes the future shared; 'planned' closes it.",
      not: {
        Remember:
          "'Remember' repeats the command of line 1. It asks for memory in the time after her death, so it looks forward, not back.",
        tell: "'Tell' is in the present tense: the daily talk that death will end. It names the habit of speaking, not the time of the plans.",
        future:
          "'Future' names what will be lost, but the noun itself looks forward. It is the past-tense verb after it that makes that future already over.",
      },
      more: "The octave lists what death will end: holding hands, lingering goodbyes, daily talk of plans. 'Our' makes the future shared, but 'you planned' it, which invites a question about who held the hopes.",
      tip: 'Tense is a method. When a poem speaks of the future in the past tense, quote the verb and say what it does to time: here the loss arrives before the death does.',
    },
  'In Hide and Seek by Vernon Scannell, the child comes out of the shed to claim the win and finds that the bushes "hold their breath". What does this image suggest?':
    {
      why: 'The bushes do what the child was told to do in line 11, keeping still and silent. The tactic the child trusted to win the game has passed to the setting, as though the garden were hiding now, and the hider has become a seeker with nothing left to find.',
      not: {
        'The seekers are crouching behind the bushes, ready to jump out on the child':
          "Nobody answers the child's shout. The seekers have gone, and the poem ends by asking where they are: the stillness is emptiness, not an ambush.",
        'A storm is coming, and the bushes have gone still before the wind arrives':
          'Nothing points to a storm. The sun has set and the garden is darkening and still: the stillness belongs to an empty evening, not to weather on the way.',
        'The garden is kind to the child, sheltering the hider from the cold night air':
          "The garden gives the child attention, but cold attention: it watches and says nothing. The cold has already got through the child's coat in the shed.",
      },
      more: 'After the exclamations of the child\'s triumph comes a short statement and a full stop in mid-line: "The darkening garden watches". The present participle shows time still running on, and a watcher that says nothing is cold company.',
      tip: 'Track an instruction through a poem: when the setting begins to do what a character was told to do, say what that reversal shows about who has really won.',
    },
  'In The Whale Rider, the last spear will not leave the whale rider\'s hand, so he prays over it: "Let this be the one to flower when the people are troubled". What does the prayer suggest about this spear?':
    {
      why: "A spear that will 'flower' is a weapon turned into a seed: sent into the future to grow when the people need it. The whole plot works out this prophecy, and in the Epilogue the bull whale understands that the girl Kahu is the last spear.",
      not: {
        "It will be thrown at the tribe's enemies in a war that is soon to come":
          'The spear is not aimed at anyone. It will not leave his hand, so it is kept for the future, and the prayer asks it to grow, not to strike.',
        "It will be planted on the rider's grave, so that flowers grow there for ever":
          "'Flower' is a metaphor, not a gardening plan. The spear is sent into the future to grow into help for the people, not planted on a grave.",
        'It carries a curse that will bring trouble on whoever finds it in years to come':
          'The opposite: it is a blessing for a troubled time. The prayer promises rescue, and readers know from the first chapter that rescue is coming.',
      },
      more: 'The image returns: Rawiri sees a flying spear at the burial of Kahu\'s birth cord, and in the Epilogue the spear comes to rest "where the afterbirth of a female child would be placed". The legend was always pointing at a girl.',
      tip: "When a symbol recurs, trace it from its first appearance to its last and say how its meaning grows. A spear that becomes a seed is the novel's argument in one image.",
    },
  'In "Blessing" by Imtiaz Dharker, the reader is told to picture a single drop falling into a cup, and its echo is heard as a "kindly god" speaking. What does this image suggest?':
    {
      why: "The drop exists only in the imagination, since stanza 2 opens by telling the reader to imagine it, yet even its echo becomes a god speaking. 'Kindly' makes that god gentle and generous, not a god of power, so the image measures how precious water is in a drought.",
      not: {
        'The people fear an angry god who has kept the rain away from the city':
          "The god is 'kindly', gentle and generous. Nobody blames heaven here: the god is imagined as the relief the thirsty long for.",
        'The speaker hears a real call to prayer, ringing out from a temple nearby':
          'No real voice is heard. The reader is told to imagine the drop, and the god speaks only in that imagined echo.',
        'The monsoon has come at last, and this drop is the first of a downpour':
          'Stanzas 1 and 2 are the drought, and the drop is imagined. When water does come, in stanza 3, it is a burst city water main, not rain.',
      },
      more: 'The poem says a god, not God, which suggests a god of no single faith, and god rhymes with pod in line 1, framing the first two stanzas between the cracked skin and the god who could relieve it.',
      tip: 'When a poem makes something tiny sacred, say what the exaggeration measures. Here it is the value of water to people who lack it, which sets up the irony of the title.',
    },
  'In Blood Brothers, in the final scene, Mrs Johnstone at last tells the twins the truth: "I couldn\'t afford to keep both of you." Which word turns her choice between her sons into a question of money?':
    {
      why: "'Afford' belongs to household budgets, so giving a baby away becomes a matter of what a poor mother could pay for. Russell gives Mrs Johnstone no excuse beyond poverty, and the plain verb names the cause of everything in the play: money, not wickedness.",
      not: {
        "couldn't":
          "'Couldn't' says that she had no choice, but not why. It is 'afford' that names the reason: there was not enough money for two more children.",
        keep: "'Keep' is what she longed to do, the ordinary verb for holding on to a child. The money that made it impossible comes in with 'afford'.",
        both: "'Both' reminds us that there were twins and only one could stay, but it counts the babies. The cost is named by 'afford'.",
      },
      more: 'The confession answers the prologue, where the Narrator invited the audience to judge her as a mother with a heart of stone. Two acts later the cause turns out to be a household budget, and the audience must decide whether poverty is an excuse or an indictment of the society that forced the choice.',
      tip: "When a character explains a choice, find the single word that reveals the real cause and link it to the play's argument: here 'afford' ties the separation to money.",
    },
  'In "DNA" by Dennis Kelly, Phil lays a hand on Brian\'s shoulder and calmly tells him: "This is a bad situation. We didn\'t want this situation." Which word turns a boy\'s death and an innocent man\'s arrest into a problem to be managed?':
    {
      why: "'Situation' is a neutral, managerial word for a problem to be handled. Phil repeats it with calm, flat emphasis, so a boy's death and a stranger in a police cell become something to manage rather than grieve. Controlling the words is how the group controls what has happened.",
      not: {
        bad: "'Bad' is a mild, almost childish judgement, an understatement in its own right. But it only rates the problem; it is 'situation' that turns a death into an abstraction.",
        We: "'We' makes the whole group share the blame, and Phil's plural pronouns turn the others into his instrument. The abstraction lies in 'situation'.",
        want: "'Want' suggests that the outcome was nobody's wish, which spreads responsibility thinly. But the word that turns death into a problem is 'situation'.",
      },
      more: "The play is full of words that avoid what they name. John Tate calls the crisis 'tricky' and bans the word dead; Phil's 'situation' does the same job more calmly. Then, step by step, he describes throwing Brian down the shaft, reaching 'corpse', a brutal word in a group that once banned 'dead'.",
      tip: "Look for euphemism in a cruel character's speech: name the soft word, say what it hides, and explain what the calm tone adds to the threat.",
    },
  'In Journey\'s End, after hearing that the German attack is expected on Thursday, Stanhope tells Osborne: "And we shall be in the front row of the stalls." What does this image suggest?':
    {
      why: 'Stanhope turns the coming attack into a theatre show, and the joke is full of dread: the front row is where you see everything and cannot leave. The image also points at the real audience in the real stalls, who know what Thursday the 21st will bring.',
      not: {
        'Stanhope looks forward to a night at a London theatre once the company is relieved and sent on leave':
          'Nobody is going on leave. The joke is that the attack will be a show the company cannot walk out of, because it will fall on their own trench.',
        'The company will be held far back, watching other battalions do the fighting from a safe distance':
          'The opposite: the front row is the place nearest the stage. Stanhope means the company will be exactly where the attack lands.',
        'Stanhope expects his men to be decorated for bravery in front of the whole regiment after the attack':
          'No medals are mentioned. The image is about watching from close range with no escape, and its lightness is a way of carrying dread.',
      },
      more: "It is typical of the play's understatement, where the worst news is carried by a light phrase, and of its awareness of itself as theatre. Its first audience, in 1928, knew that on 21 March 1918 the German spring offensive overwhelmed the British in exactly this sector.",
      tip: 'When a character jokes about danger, explain both layers, what the joke says and what it hides, then link the image to the audience watching the play.',
    },
  'In \'The Darkness Out There\' from Telling Tales, Mrs Rutter welcomes Sandra and Kerry warmly, but "Her eyes investigated, quick as mice." Which word makes this kindly old woman a watcher who weighs up her visitors?':
    {
      why: "'Investigated' is a detective's verb: Mrs Rutter's eyes do not simply look, they assess. Everything soft about her, the welcome, the tea and the flattery, is contradicted by this watchfulness, one of the warnings Sandra misses and a second reading catches.",
      not: {
        eyes: "'Eyes' names what she watches with, and Lively returns to them, 'darting', as Mrs Rutter tells her story. But it is the verb that makes them assess.",
        quick:
          "'Quick' gives the eyes speed, and so alertness, but speed is not judgement. The weighing-up is in 'investigated'.",
        mice: "'Mice' makes the eyes small, darting and faintly unpleasant, like something that scurries in the dark. It colours the watching; 'investigated' is the watching.",
      },
      more: 'Read a second time, the story is full of these warnings. Later Mrs Rutter tells how, in 1942, she left a trapped young airman to die, and Sandra learns that the darkness is not in the wood but in what people can do.',
      tip: "In a single-word question, look first at the verb, since it often carries the attitude, then say how it changes the reader's view of a character on a second reading.",
    },
  'In Refugee Boy, in the play\'s first scene, Mr Kelo tells Alem about England: "In England the stars have to sleep. They take it in turns to shine." What does this image suggest?':
    {
      why: 'The personification makes the stars courteous and fair: they take turns, so everyone gets a chance to shine. A father turns a strange country into a bedtime story, and the audience will soon see how unfairly England really shares its light.',
      not: {
        'England is so cloudy and grey that hardly any stars can be seen above its cities at night':
          'The image is not about the weather. The stars behave like polite people, and the point is fairness, which is what Mr Kelo hopes England will offer his son.',
        'England is a frightening place, where the nights are long and dark and the people sleep':
          'Nothing here is meant to frighten. It is a bedtime story told to comfort a son, picturing England as gentle and orderly.',
        'Alem must take turns with his father to stay awake through the night, keeping watch':
          "The turns belong to the stars, not to Alem and his father. The image pictures a fair country where everyone's turn will come.",
      },
      more: 'It is dramatic irony in slow motion. The stars return in Scenes 7 and 29, and the play opens and closes under them, with father and son looking up together, so the image becomes the motif that ties Alem to his father across distance and, in the end, death.',
      tip: "Track an image through a play: say what it means when it first appears, then how the action tests it. Here the fairness of the stars is measured against the court's refusal.",
    },
  'In The Sign of Four, Watson hides his love for Mary Morstan, since she may soon be an heiress: "This Agra treasure intervened like an impassable barrier between us." What does this image suggest?':
    {
      why: "Watson fears that if Holmes succeeds Mary will be rich, and that a half-pay surgeon who courts her will look like 'a mere vulgar fortune-seeker'. The simile turns money into a wall between two people, and his scruple about class and honour keeps him silent.",
      not: {
        'The treasure is locked in an iron box so heavy and strong that no one will be able to open it':
          'The box is forced open later, with a poker, and found empty. Here the barrier is a metaphor for what wealth would do to his love.',
        'Holmes has forbidden Watson to court a client until the mystery of the pearls is solved':
          "Holmes forbids nothing. The silence is Watson's own choice, made out of honour, because Mary may soon be an heiress.",
        "Mary's family would never let her marry a man of Watson's lower rank and smaller means":
          "No family objects: Mary's father vanished in 1878. The scruple is Watson's own, the fear of being thought a fortune-seeker.",
      },
      more: "Conan Doyle returns to the image in Chapter 11. When the box is found empty, 'the golden barrier was gone from between us', so the treasure's loss feels like a wall coming down. Watson's hindsight narration has already hinted that the romance ends happily.",
      tip: 'Follow an extended metaphor to its return: quote both appearances and say how the second answers the first. That shows structure as well as language.',
    },
  'In The War of the Worlds, the narrator recalls his confident dinner after predicting that one shell will kill the Martians: "So some respectable dodo in the Mauritius might have lorded it in his nest". What does the dodo image suggest?':
    {
      why: "Looking back, the narrator sees himself as a dodo, a bird hunted to extinction after sailors arrived. 'Respectable' pins the comparison to the Victorian middle class, and the bird's confidence mirrors his own after-dinner certainty. Like the dodo, he could not imagine what was coming.",
      not: {
        "The Martians are like dodos, far too slow and heavy under Earth's gravity to survive for long":
          "He did say the Martians could barely move under Earth's gravity, but the dodo is the narrator himself, confident and doomed, not the invaders.",
        'He was a fool whom the Martians would mock, as sailors once laughed at the clumsy dodo':
          'Nobody mocks him. The point is extinction, not clumsiness: the dodo was hunted out of existence by sailors it never saw coming.',
        'He felt as safe in his home as a bird in its nest, and the Martians never reach his house':
          'Soon afterwards the Heat-Ray reaches Maybury Hill, and he drives his wife to Leatherhead. His sense of safety is exactly what the image mocks.',
      },
      more: "The first chapter has already named 'the vanished bison and the dodo' among the creatures humans destroyed, so the image turns that history on the reader. The narrator adds that this was 'the last civilised dinner I was to eat for very many strange and terrible days'.",
      tip: 'When a narrator looks back on his own confidence, quote the image and explain the irony of hindsight: he knows now, and the reader soon will, what was coming.',
    },
  'A narrator describes the letter of shame a woman must wear: "It had the effect of a spell, taking her out of the ordinary relations with humanity, and enclosing her in a sphere by herself." Which word suggests the letter\'s power is almost magical?':
    {
      why: 'A spell is magic that binds someone against their will. The word suggests the letter works like a curse, cutting her off from everyone as if by enchantment.',
      not: {
        sphere: "'Sphere' shows her isolation, a world of her own, but not magic.",
        enclosing:
          "'Enclosing' shows her being shut in, which is the spell's effect rather than its magic.",
        ordinary: "'Ordinary' describes the human contact she loses, not the letter's power.",
      },
      more: 'This is the first time the town sees the letter. The narrator makes a strip of cloth seem to hold supernatural power, as the townspeople believe it does.',
      tip: 'To find the word that suggests a quality, test each word against it: only one here belongs to magic.',
    },
  'A soldier says of a queen: "Age cannot wither her, nor custom stale / Her infinite variety". Which word suggests that habit usually dulls what we love?':
    {
      why: "'Custom' means habit or familiarity, and 'stale' is what it normally does to a pleasure. Saying custom cannot stale her claims she stays new however well she is known.",
      not: {
        wither: "'Wither' is what age does, like a fading flower. It is about time, not habit.",
        infinite: "'Infinite' describes her endless variety, not what habit does.",
        variety:
          "'Variety' is the quality that habit cannot dull: what is protected, not the threat.",
      },
      more: "Enobarbus goes on: other women 'cloy / The appetites they feed, but she makes hungry / Where most she satisfies'. Her appeal grows the more she is known.",
      tip: "When two nouns pair with two verbs, as 'Age' with 'wither' and 'custom' with 'stale', match each pair before you choose.",
    },
  'How does Priestley use the Inspector as a dramatic device in "An Inspector Calls"?': {
    why: 'Priestley was a socialist, and the Inspector carries his message: people must take responsibility for one another. He questions each member of the family, and Gerald, exposing how their selfishness harmed one young woman.',
    not: {
      'As comic relief between tense scenes':
        'The Inspector is serious and commanding. He brings tension, not laughter.',
      "As a symbol of the Birlings' capitalism":
        "He attacks capitalist selfishness. Mr Birling is the play's voice of capitalism.",
      'As a love interest who unsettles Sheila':
        'He has no romantic role. Sheila is unsettled by his questions, not by any romance.',
    },
    more: "The Inspector also controls the play's structure, questioning one character at a time. His mysterious identity makes him seem almost like a conscience, or a voice of judgement.",
    tip: "Write about the Inspector as Priestley's construct: a device for delivering the play's message, not just a character.",
  },
  '"Fair is foul, and foul is fair." How does this relate to themes in Macbeth?': {
    why: "The witches chant this together in the first scene. Good and evil are turned upside down, and things that seem fair may be foul, which introduces the play's deception and moral corruption.",
    not: {
      'It describes the stormy weather on the heath':
        'The witches meet in thunder, but this line is a paradox about values, not a weather report.',
      'It praises the battle Macbeth has just won':
        'A battle is mentioned in the same scene, but this line turns good and evil upside down; it praises no one.',
      'It is about how ugly the witches look':
        "It is about how things seem against what they are, in a moral sense, not about the witches' looks.",
    },
    more: "Macbeth's first line echoes the witches: 'So foul and fair a day I have not seen.' The echo hints at a link between him and them before they even meet.",
    tip: 'Use this line to discuss appearance and reality, and link it to Duncan trusting Macbeth, or Lady Macbeth telling him to look innocent while hiding a serpent.',
  },
  "In Jekyll and Hyde, what does Stevenson's London fog symbolise?": {
    why: 'Fog hides things and blurs outlines. In the novella it wraps London when Utterson hunts for Hyde, mirroring the secrets the respectable characters keep and a world where good and evil are hard to tell apart.',
    not: {
      'The beauty of the great city at night':
        'The fog is described as a chocolate-coloured pall, gloomy and smothering. It makes London threatening, not beautiful.',
      'The smoke of the new Victorian factories':
        "Victorian London's fogs were thickened by coal smoke, but in the novella the fog works as a symbol of secrecy and confusion.",
      'The dull weather of a London winter':
        'It is a real fog, but the question asks what it symbolises: concealment, not just bad weather.',
    },
    more: "As Utterson's cab crawls through Soho, the fog shifts between darkness and strange light. Stevenson uses it to make the city feel like a nightmare, matching a story about a hidden self.",
    tip: 'Link setting to theme: explain how the fog reflects concealment and moral confusion, then connect it to Jekyll hiding Hyde.',
  },
  'What structural technique does Dickens use by dividing "A Christmas Carol" into staves?': {
    why: 'A carol is a song, and Dickens calls his five chapters staves, which are verses of a song. The structure presents the story as a moral carol, a tale with a lesson about generosity, sung in five parts.',
    not: {
      'A story told only through a set of letters':
        "An epistolary novel is told in letters, like Frankenstein's frame. A Christmas Carol is told by a narrator.",
      "A narrator's unbroken stream of thoughts":
        "Stream of consciousness follows a character's unbroken thoughts. A Christmas Carol has a chatty narrator who comments and addresses the reader.",
      'A flashback in each and every chapter':
        "Only Stave 2 goes into Scrooge's past. The staves divide the whole story into song-like parts.",
    },
    more: "The staves move in a clear order: Marley's warning, then the past, present and future, then Scrooge's change. The neat, repeated pattern suits a moral tale, like the verses of a carol.",
    tip: "Comment on structure as well as language: the five-stave journey from cold to warmth shows Scrooge's change step by step.",
  },
  'In "Lord of the Flies", what does the conch symbolise?': {
    why: 'The conch is used to call meetings, and only the boy holding it may speak. It stands for democracy, rules and the civilised world the boys came from, and its power fades as order breaks down.',
    not: {
      'Nature and the untamed wild':
        'The conch is a natural shell, but the boys turn it into a tool of order. It represents rules, not the wild.',
      'Violence and the thrill of the hunt':
        'The conch stands against savagery. Its destruction marks the moment violence wins.',
      'Isolation, fear and loneliness':
        'The conch brings the boys together. It symbolises community and order, not isolation.',
    },
    more: "As Jack's tribe grows, fewer boys respect the conch. It is shattered when Piggy is killed, showing that civilisation has collapsed on the island.",
    tip: "Trace a symbol across the novel. Show how the conch's power fades as the boys' savagery grows.",
  },
  'In Animal Farm, "The creatures outside looked from pig to man, and from man to pig". What does Orwell suggest?':
    {
      why: 'In the final scene the pigs drink and play cards with human farmers, and the other animals can no longer tell which is which. The pigs have become the oppressors they overthrew.',
      not: {
        'The pigs and the humans are now true friends':
          'They quarrel at once over the cards, each cheating. The point is that they have become the same, not that they are friends.',
        'The animals can at last read the commandments':
          'The line is about what the animals see, not what they read, and only one commandment is left on the wall.',
        'The revolution has made every animal equal':
          'The ending shows the revolution has failed: the animals are as badly off as before, under new masters.',
      },
      more: "Earlier, the commandments are rewritten until only one remains: some animals are more equal than others. The final image completes the pigs' change into humans.",
      tip: "Link the ending to the opening. The cyclical structure shows one tyranny replacing another, which is Orwell's warning about the Russian Revolution.",
    },
  'In "Remains" by Armitage, how does the poet present the psychological impact of conflict?': {
    why: 'The speaker tells the story casually, as if chatting to a friend, but he cannot stop reliving the killing. The relaxed language clashes with the graphic memory and his growing guilt, showing trauma that will not leave him.',
    not: {
      'A soldier who has forgotten the shooting':
        'The opposite is true: he cannot forget. The dead man returns to him when he is asleep and when he is awake.',
      'A poem that celebrates army service':
        'The poem shows the lasting damage of combat. It does not celebrate fighting.',
      'A speaker who feels no guilt at all':
        "Guilt is the heart of the poem. By the end, the speaker feels the man's blood is on his hands.",
    },
    more: "Armitage based the poem on interviews with soldiers for a documentary about their mental health. The title suggests both a dead body's remains and what remains in the soldier's mind.",
    tip: 'Comment on the tone shift: show how the casual voice at the start gives way to obsession and guilt by the end.',
  },
  'How does Shakespeare present the Nurse in Romeo and Juliet as a contrast to Lady Capulet?': {
    why: "The Nurse is warm, chatty and loving: she has cared for Juliet since birth. Lady Capulet is formal and distant, and when Juliet refuses Paris she says, 'I would the fool were married to her grave.'",
    not: {
      'She is wealthier than Lady Capulet':
        'The Nurse is a servant in the Capulet house. The contrast is about warmth, not money.',
      'She is better educated than Lady Capulet':
        'The contrast is not about learning. It is about who shows Juliet real affection.',
      'She is just as cold and formal as Lady Capulet':
        'Shakespeare sets them up as opposites: one warm and earthy, the other cold and formal.',
    },
    more: 'The Nurse also lets Juliet down: she advises her to marry Paris, and Juliet decides to trust her no more. Even her warmth has limits.',
    tip: "Compare the two mother figures and link them to context: rich families often gave babies to a wet nurse, so Juliet's closest bond is with a servant.",
  },
  'In "Exposure" by Owen, the soldiers face "merciless iced east winds that knive us". Which word makes the wind a weapon?':
    {
      why: "Owen turns the noun 'knife' into a verb, 'knive': the wind stabs the men like a blade. One word makes the weather an armed attacker.",
      not: {
        merciless:
          "'Merciless' makes the wind cruel, a pitiless enemy, but it is 'knive' that gives it a blade.",
        iced: "'Iced' makes the wind freezing, but cold is not a weapon until 'knive' turns it into one.",
        east: "'East' gives the wind's direction, perhaps from the enemy's side, but it is 'knive' that arms it.",
      },
      more: "The poem keeps suggesting that nature, not the enemy, is killing the men. 'Knive' compresses that idea into one violent verb.",
      tip: "Zoom in on one word. Explaining why Owen chose 'knive us' shows the close analysis examiners look for.",
    },
  "In Jane Eyre, how does Bronte use the Red Room to develop Jane's character?": {
    why: 'Locked in the red-room as a punishment, young Jane feels trapped and treated unjustly, and she panics in terror. The experience shows her powerlessness and fuels her lifelong need for freedom and fairness.',
    not: {
      'It shows she loves the colour red':
        "The room's red colour adds to its frightening, blood-like atmosphere, but the scene is about punishment and imprisonment, not taste.",
      'It is simply the bedroom where she sleeps':
        'It is the room where Mr Reed died, and Jane is locked in it as a punishment. That makes it much more than a bedroom.',
      'It shows she enjoys being left alone':
        'Jane is terrified in the red-room. Being shut in alone is a punishment, not a pleasure.',
    },
    more: 'The red-room is the first of several places that confine Jane, such as Lowood and Thornfield. Soon after, she stands up to Mrs Reed, showing the spirit the punishment could not crush.',
    tip: "Use the red-room to begin a point about Jane's development, then trace how she fights for independence later in the novel.",
  },
  'In "My Last Duchess" by Browning, what does the Duke\'s control over the painting reveal?': {
    why: 'The Duke keeps the portrait behind a curtain that only he may draw. Now that she is a painting, he controls who sees her smile, which he could not do while she was alive.',
    not: {
      'His wish for everyone to see her portrait':
        'The curtain shows the opposite: no one sees her unless the Duke chooses to draw it back.',
      'His grief for the wife he still misses':
        'He shows no grief. He describes her with irritation, and admits he gave commands that stopped her smiles.',
      'His plan to sell the painting for money':
        'He shows it off as a treasure he owns. He wants to possess it, not sell it.',
    },
    more: "When the Duke says 'I gave commands', he hints that he had his wife killed. The portrait suggests he preferred her as an object he could own and control.",
    tip: "Link the painting to power and gender: the Duchess is silenced and turned into a possession, which reveals the Duke's tyranny.",
  },
  "In Frankenstein, why does Shelley frame the narrative with Walton's letters?": {
    why: "The novel opens with Walton's letters to his sister. Victor tells his story to Walton, and the Creature's story sits inside Victor's. These layers let us hear more than one side and decide whom to believe.",
    not: {
      'It makes the novel long enough to publish':
        'The frame is a deliberate structure. It shapes how we judge the story rather than simply adding pages.',
      'It adds a love story between Walton and Victor':
        'There is no romance between Walton and anyone. His letters are to his sister and tell of his voyage.',
      "It records Shelley's own travels in the Arctic":
        "Shelley never went to the Arctic. Walton's voyage is invented, a mirror for Victor's ambition.",
    },
    more: "Walton is ambitious too, sailing for the North Pole, so Victor's story holds up a mirror to him. When his crew demand to go home, Walton agrees, though he calls it cowardice; readers can judge whether he has escaped Victor's fate.",
    tip: 'Discuss structure: explain how the nested narratives make us question whether Victor or the Creature deserves more sympathy.',
  },
  'In "Checking Out Me History" by Agard, why does the poet use phonetic spelling and dialect?': {
    why: 'Agard spells words as they sound in his Caribbean voice and uses Caribbean grammar. Writing this way rejects the idea that only standard English is proper and asserts the identity his education ignored.',
    not: {
      'To show the speaker never went to school':
        "He did go to school: 'Dem tell me' is about what his teachers taught. Dialect is a choice, not a sign of no schooling.",
      'To make the poem easier for anyone to read':
        'Phonetic spelling can be harder to read at first. Agard uses it to assert identity, not to make reading easier.',
      'To copy the nursery rhymes he learned at school':
        'He mocks the nursery rhymes he was taught; the dialect is his own voice, set against them.',
    },
    more: 'The poem attacks a colonial education that taught British history and nursery rhymes but ignored Caribbean and Black heroes. Its language is part of that protest.',
    tip: 'Link form to message: the way Agard writes is itself an act of resistance, so analyse the language as well as the content.',
  },
  'In "Tissue" by Dharker, what does paper symbolise?': {
    why: 'Paper in the poem is thin enough to let light through, yet it records the things that shape our lives: holy books, maps, receipts, even buildings imagined as paper. It shows how fragile, and how powerful, human life and structures are.',
    not: {
      'The cost of trees cut down to make paper':
        'The poem is not about the environment. Paper symbolises human life and the systems we build.',
      'The school homework the speaker resents':
        'The paper in the poem is not schoolwork. It stands for the records and structures of human life.',
      "The poet's own private diary entries":
        'The poem does not mention a diary. Its paper is a symbol for life, identity and power.',
    },
    more: 'The final line turns paper into human skin, so the whole poem becomes a meditation on how fragile and precious a human life is.',
    tip: 'Treat paper as an extended metaphor: follow how its meaning grows from object to symbol of life across the poem.',
  },
  "In Great Expectations, why does Dickens present Magwitch's return as a shock to Pip?": {
    why: "Pip believed Miss Havisham was his secret benefactor. When the convict he helped as a child appears and claims the role, Pip's dream of being made a gentleman by a lady collapses, and he must face his snobbery.",
    not: {
      'He had forgotten the convict he once helped':
        'Pip has not forgotten him; he recognises him. The shock is learning that this convict paid for his expectations.',
      'He had been told that Magwitch was dead':
        'Magwitch was transported for life, and returning to England meant death if caught. He was not thought dead.',
      'He had been expecting Magwitch for weeks':
        'Pip had no idea Magwitch was coming. His sudden arrival on a stormy night is what makes the scene so shocking.',
    },
    more: "Magwitch made his money as a sheep-farmer and stock-breeder in New South Wales, to make Pip a gentleman. Pip's horror at a convict benefactor exposes the snobbery his new life taught him.",
    tip: "Use this turning point to discuss class: Dickens shows that a gentleman's status can rest on hidden, humble foundations.",
  },
  'In Romeo and Juliet, how does the oxymoron "loving hate" reflect the play\'s central conflict?':
    {
      why: 'Romeo pairs opposites, brawling love and loving hate, just after the street fight. In this play love and hatred are tangled together: Juliet later cries that her only love sprang from her only hate.',
      not: {
        'Romeo is describing his love for Juliet':
          'He has not yet met Juliet. In Act 1 Scene 1 he is lovesick for Rosaline.',
        "It describes Tybalt's quarrelsome nature":
          'Romeo says it about love and the brawl, not about one character. Tybalt stands for hatred alone.',
        'It shows Romeo is bored with the fighting':
          'He is weary of the feud, but the oxymoron is about love and hate being tangled, not about boredom.',
      },
      more: "Romeo's string of oxymorons, such as 'cold fire' and 'sick health', shows his confused state of mind. It also foreshadows a love that leads to violence and death.",
      tip: 'Link a small language feature to a big theme. That is how a top-band answer turns one quotation into a whole-play argument.',
    },
  'In "Exposure" by Owen, how does the refrain "But nothing happens" create meaning?': {
    why: 'The soldiers wait night after night in freezing trenches for an attack that never comes. The flat refrain, repeated through the poem, shows their suffering achieves nothing, while the cold slowly kills them.',
    not: {
      'The soldiers are safe and comfortable':
        'They are freezing and dying of exposure. Nothing happening is part of their misery.',
      'The war has ended and peace has come':
        "The war goes on. 'Nothing happens' means no battle comes, while the men suffer anyway.",
      'The enemy has crept away in the night':
        'Nothing suggests the enemy has gone. The men wait for an attack that may come at any time.',
    },
    more: 'The refrain ends stanzas on an anticlimax: tension builds, then collapses into nothing, again and again.',
    tip: 'When a line repeats, track how its meaning changes. By the end, nothing happening feels tragic rather than dull.',
  },
  'In Animal Farm, why does Orwell have the pigs learn to walk on two legs?': {
    why: "Snowball summed up the animals' rules as 'Four legs good, two legs bad'. When the pigs walk upright, carrying whips, they have become the humans they overthrew, and the sheep's chant changes to suit them.",
    not: {
      'Real pigs can be trained to walk upright':
        'In this fable, animals talk and act as Orwell needs them to. The point is symbolic: the pigs have become human.',
      'The pigs are only playing a joke on the others':
        'The image is grotesque and shocking for the other animals. Its purpose is to show the betrayal of the revolution.',
      'The pigs need to exercise their back legs':
        "It is about power. Walking upright shows the pigs claiming the humans' place.",
    },
    more: 'Squealer appears first, walking on his hind legs, and then Napoleon comes out with a whip in his trotter. Soon after, the commandments are replaced by a single rule declaring some animals more equal than others.',
    tip: "Track how the commandments change. Each change marks a step in the pigs' betrayal of the revolution.",
  },
  'In "The Charge of the Light Brigade", how does Tennyson use rhythm to create meaning?': {
    why: "Lines like 'Half a league, half a league' fall into a strong beat followed by two light ones: DUM-da-da DUM-da-da. This dactylic rhythm sounds like galloping hooves, driving the charge forward.",
    not: {
      'A random rhythm that follows no pattern':
        'The rhythm is a strong, regular pattern, chosen to imitate galloping horses.',
      'A rhythm that slows down to a halt at the end':
        'The galloping beat keeps driving forward, just as the riders cannot stop.',
      'A gentle beat like a lullaby for the dead':
        'The beat is fast and insistent, a gallop, not a soft lullaby.',
    },
    more: "Two dactyls to a line is called dactylic dimeter. The insistent beat, with repeated lines such as 'Cannon to right of them', makes the poem feel like a relentless charge, or a chant of honour.",
    tip: 'Do not just name the metre. Explain how the sound of the rhythm creates the experience of the charge.',
  },
  "In Macbeth, how does Shakespeare use the banquet scene to reveal Macbeth's psychological state?":
    {
      why: "At the feast Macbeth sees Banquo's ghost in his seat, but no one else can. His terrified outbursts, such as 'Thou canst not say I did it', reveal his guilt and paranoia in front of his lords.",
      not: {
        'It shows he is a calm and gracious new host':
          'He loses control in front of the court, and Lady Macbeth has to send the guests away.',
        'It shows the lords plotting to poison him':
          'The lords grow suspicious of Macbeth, but nobody plots to poison him at the feast.',
        'It shows he fears the witches will attend':
          "The witches play no part in the banquet. What terrifies him is Banquo's ghost.",
      },
      more: "Lady Macbeth tries to cover for him, but the lords leave suspicious. Afterwards Macbeth says 'blood will have blood', and the scene marks the start of his public downfall.",
      tip: "Explain how a stage effect shows an inner state: the ghost lets the audience see Macbeth's guilt.",
    },
  "In Frankenstein, what does the Creature's request for a companion reveal about his character?": {
    why: 'The Creature asks Victor for a female companion as ugly as himself, so that someone will not reject him. He says he is malicious because he is miserable: loneliness, not his nature, has made him violent.',
    not: {
      'He wants a servant who will obey him':
        'He wants an equal: a companion of the same species, with the same defects, who will not reject him.',
      'He wants to build an army of creatures':
        'He promises the opposite: he and his companion would go to the wilds of South America, away from people.',
      'He wants revenge on the cottagers who fled':
        'His request is for company, not revenge. He promises to leave humankind alone if Victor agrees.',
    },
    more: "Victor begins the female creature, then destroys it, fearing a race of monsters. The Creature's revenge follows: he kills Clerval, then Elizabeth on her wedding night.",
    tip: 'Use the request to weigh responsibility: is the Creature monstrous by nature, or made monstrous by rejection?',
  },
  'In "Dulce et Decorum Est", what effect does Owen create by directly addressing "you" in the final stanza?':
    {
      why: "The final stanza speaks to 'you': if you had seen what Owen saw, you would not tell eager children that war is glorious. The reader becomes the accused, and the bitter 'My friend' points at those who urged young men to fight.",
      not: {
        "It praises the reader's own courage in war":
          'He is accusing, not praising. The address is bitter and challenging.',
        'It speaks only to the soldiers who were gassed':
          'The soldiers already know the truth. He addresses people at home who repeat the lie.',
        'It thanks the reader for their support':
          "Nothing here is grateful. The stanza ends by calling the patriotic saying 'The old Lie'.",
      },
      more: "The address uses conditionals, such as 'If you could hear', forcing the reader to imagine the horror before Owen gives his verdict: the old Lie.",
      tip: "Comment on who 'you' might be, the reader, the poet Jessie Pope, the whole nation, and how the direct address changes the poem's effect.",
    },
  'In Great Expectations, what does the marshland at the opening of the novel symbolise?': {
    why: "The novel opens on bleak, misty marshes beside the churchyard where Pip's parents are buried. There he meets the convict Magwitch, so the setting introduces the danger, crime and loneliness that shape his life.",
    not: {
      'A pleasant stretch of English countryside':
        'The marshes are flat, cold and bleak, a dangerous place where convicts hide.',
      'The rich farmland Pip will one day own':
        'Pip owns nothing on the marshes. His expectations take him to London, far from them.',
      'The beauty of nature that Pip loves':
        "Pip is frightened on the marshes, a 'small bundle of shivers'. The setting is bleak, not beautiful.",
    },
    more: "Pip calls the churchyard 'this bleak place overgrown with nettles', and himself 'the small bundle of shivers'. The setting mirrors his vulnerability.",
    tip: 'Analyse openings closely: explain how the first setting introduces themes that return later in the novel.',
  },
  'A blinded old man says: "As flies to wanton boys are we to the gods, / They kill us for their sport." What does the simile suggest about the gods?':
    {
      why: 'Wanton boys pull the wings off flies for fun, with no reason and no pity. Comparing humans to flies makes the gods the same: they destroy people for sport, not for justice.',
      not: {
        'They protect people as a father guards his son':
          "The simile makes the gods torturers, the opposite of protectors. 'Kill us for their sport' leaves no room for care.",
        'They punish only those who deserve it':
          'Sport has no justice in it. The flies have done nothing wrong; neither, the speaker suggests, have we.',
        'They are too busy to notice humans at all':
          'The gods are not absent: they kill us, deliberately and for fun. That is worse than not noticing.',
      },
      more: 'Gloucester says this after being blinded, wandering on the heath. His despair is one of the darkest views of the gods in Shakespeare, and the play tests whether it is true.',
      tip: 'When a simile describes power, ask who is the fly and who is the boy, and what the gap in size and care suggests.',
    },
  'A grieving prince, alone, says: "How weary, stale, flat, and unprofitable / Seem to me all the uses of this world". What does the list of adjectives create?':
    {
      why: 'Four adjectives pile up, each flatter than the last: weary, stale, flat, unprofitable. Together they make the whole world seem worn out and worthless to him, so the list itself sounds exhausted.',
      not: {
        'A cheerful, eager hope for the years ahead':
          "Every adjective is negative. Nothing in 'stale' or 'flat' suggests hope.",
        'A calm and balanced view of the world':
          'The list is not balanced: it piles up one complaint after another. He sees no good at all.',
        'An angry demand for revenge on his foes':
          'He does not yet know of any murder, since the ghost has not spoken to him. This is grief and disgust, not a call for revenge.',
      },
      more: "The speech is the prince's first soliloquy, when he is alone and can say what he really feels. His mother's hasty marriage to his uncle has soured the whole world for him.",
      tip: "With a list, comment on the order and the pile-up: how each item adds weight, and what the whole list says about the speaker's state of mind.",
    },
  'A novel describes the watchers on Mars: "intellects vast and cool and unsympathetic, regarded this earth with envious eyes". What do the adjectives suggest about them?':
    {
      why: "'Vast' makes their minds enormous, 'cool' makes them calm and calculating, and 'unsympathetic' denies them pity. 'Envious eyes' adds desire: they want the Earth, and nothing will stop them.",
      not: {
        'They are kind, wise and eager to help':
          "'Unsympathetic' rules out kindness. These minds look at the Earth with envy, not goodwill.",
        'They are small, weak and easily beaten':
          "'Vast' says the opposite. Their minds are far greater than ours.",
        'They are angry, wild and out of control':
          "'Cool' means calm and calculating, not wild. The threat is cold planning, not rage.",
      },
      more: 'The list builds from size to temperature to feeling, ending on the most chilling word. Wells makes the invaders frightening by their coldness, not their looks.',
      tip: 'When adjectives come in a list, say what each adds and why the last is placed last.',
    },
  'A being rejected by everyone it meets tells its maker: "I was benevolent and good; misery made me a fiend." What does the line claim?':
    {
      why: "The sentence is built on a contrast: what it was, 'benevolent and good', against what misery made it, 'a fiend'. It claims that its cruelty was caused by suffering and rejection, not by its nature.",
      not: {
        'It was born evil and has always been so':
          "The line says the opposite: it began 'benevolent and good'. The evil came later.",
        'It has chosen cruelty for its own pleasure':
          "It blames 'misery', something done to it, not its own pleasure.",
        'Its maker was kind and treated it well':
          'Its maker fled from it in horror. Misery, the line says, came from being abandoned.',
      },
      more: 'The question of nature against nurture runs through the novel. Here the creature makes its case so well that many readers begin to blame the maker more than the made.',
      tip: 'When a character explains their own change, quote the before and after, and say who or what they blame.',
    },
  'A novel\'s last chapter opens: "Reader, I married him." What is the effect of the direct address?':
    {
      why: "Jane speaks straight to 'Reader', as if to a friend, and tells the news in four plain words. She is also the one who acts: 'I married him', not 'he married me'.",
      not: {
        'It asks the reader whether she chose well':
          'There is no question. She tells the reader what happened, confidently.',
        'It reminds the reader the story is invented':
          'Direct address makes the story feel like a true account shared with a friend, not a reminder that it is made up.',
        'It hands control of the story to the husband':
          "The active verb keeps control with Jane: 'I married him'. She is the subject, he the object.",
      },
      more: "Brontë's narrator speaks to the reader throughout the novel, but this is the most famous example. The short sentence after a long story feels like a quiet triumph.",
      tip: 'With direct address, ask what relationship it creates between narrator and reader, and what the grammar of the sentence shows about who holds power.',
    },
  'A blacksmith tells the young man he raised: "life is made of ever so many partings welded together". What does the metaphor suggest?':
    {
      why: 'Welding joins pieces of metal into one strong whole. The blacksmith uses his own trade to say that life is made of partings joined together: goodbyes are part of it, not the end of it.',
      not: {
        'Life is full of hard work at the forge':
          'The image comes from his forge, but it is about partings, not labour.',
        'Life breaks apart when friends say goodbye':
          "'Welded together' means joined, not broken. The partings are what life is built from.",
        'Life is easy once you learn a trade':
          'Nothing in the line is about learning a trade. He is speaking about how people part.',
      },
      more: "Joe says this after an awkward visit to Pip in London, where Pip was ashamed of him. His simple, dignified words show more wisdom than Pip's new gentleman's manners.",
      tip: "When a character's metaphor comes from their own work, say what that shows about them as well as about the idea.",
    },
  'A ghost bound in heavy chains tells his old partner: "I wear the chain I forged in life". What does the metaphor suggest?':
    {
      why: "To forge is to make metal by hammering it. Marley made his own chain 'link by link' through a life of greed, so the punishment he wears is one he built himself.",
      not: {
        'He was a blacksmith before he became a ghost':
          "That takes 'forged' literally. Marley was a businessman; the chain is made of his selfish acts.",
        'Someone else has chained him up unfairly':
          "'I forged' makes him the maker. No one else is to blame.",
        'The chain is a gift from his old partner':
          'The chain is a punishment, not a gift, and Marley warns Scrooge that he has been forging a heavier one.',
      },
      more: "The chain is made of cash-boxes, keys, padlocks, ledgers, deeds and heavy purses, the tools of his trade. Dickens makes Marley's punishment fit his sins exactly.",
      tip: 'With a symbol, list what it is made of. Here each object in the chain points to the sin it punishes.',
    },
  'A duke explains why he never told his wife what displeased him: "and I choose / Never to stoop." What does this reveal about him?':
    {
      why: 'To stoop is to lower yourself. The Duke would rather not speak to his wife about what annoyed him than lower his dignity, so his pride ranks above her, and he dealt with her another way.',
      not: {
        'He was far too gentle ever to criticise her':
          "He describes her with irritation and admits he 'gave commands'. Gentleness is not the reason.",
        'He was afraid of upsetting her family':
          "He boasts of his 'nine-hundred-years-old name'. He fears no one; he refuses to lower himself.",
        'He was too tired to argue with her':
          "Nothing suggests tiredness. 'I choose' shows a deliberate decision rooted in pride.",
      },
      more: "The line break after 'I choose' makes the reader wait, so 'Never to stoop' lands with full weight at the start of the next line.",
      tip: 'In a dramatic monologue, the speaker reveals more than he means. Quote what he says proudly and explain what it exposes.',
    },
  'A ruler says of one of his senators: "Yond Cassius has a lean and hungry look; / He thinks too much: such men are dangerous." What does "lean and hungry" suggest?':
    {
      why: "'Lean and hungry' turns appetite into ambition: Cassius looks like a man who always wants more. Caesar adds that he 'thinks too much', so his hunger is for power, not food.",
      not: {
        'He is ill and has not eaten properly for days':
          'That takes the words literally. The hunger is for something Cassius lacks: power.',
        'He is poor and cannot afford to buy food':
          'Cassius is a Roman nobleman. His hunger is ambition, not poverty.',
        'He is fit, lean and trains hard for battle':
          "'Lean' is not praise here. Caesar links it to danger and too much thinking.",
      },
      more: 'Caesar is right: Cassius is already persuading Brutus to join a plot against him. The audience knows what Caesar only suspects.',
      tip: 'When a character describes another, ask whether the description is accurate and what it shows about both of them.',
    },
  'When his youngest daughter will not flatter him, a king warns her: "Nothing will come of nothing". What does he mean?':
    {
      why: "The king is dividing his kingdom by how much his daughters say they love him. When she says 'Nothing', he warns that nothing said will earn her nothing: no share of the land.",
      not: {
        'Nothing she could say would change his mind':
          'He is inviting her to speak again, not refusing to listen. He wants a better answer.',
        'He has nothing left to give any daughter':
          'He still has a third of the kingdom to give. He is threatening to give her none of it.',
        'Silence is the best answer to a king':
          'He is angered by her silence, not pleased. He wants flattery.',
      },
      more: 'The line comes back to haunt him: by the end Lear has nothing, and Cordelia, who said nothing, proves the only daughter who truly loves him.',
      tip: "Track a repeated word across a play. 'Nothing' grows from a quarrel into one of the tragedy's central ideas.",
    },
  'A narrator watches his neighbour stretch out his arms, across dark water, towards "a single green light, minute and far away". What might the light stand for?':
    {
      why: 'The light is tiny and far away, yet the man reaches for it with both arms. It suggests a longing for something distant, a dream he cannot touch however hard he reaches.',
      not: {
        'A signal that it is safe to sail across':
          "Green can mean go, but here the light is 'minute and far away', and he reaches for it in longing, not to set out.",
        'The bright lights of a busy city party':
          'It is a single small light across the water, not the glitter of a party.',
        'A warning that danger is very close':
          "'Far away' says the opposite of close. The light draws him; it does not warn him.",
      },
      more: 'The light is at the end of a dock across the bay, where the woman he loves lives. At the end the narrator reflects that the dream must have seemed so close he could hardly fail to grasp it.',
      tip: 'With a symbol, start from what it physically is, then build to what it stands for, and quote where it returns.',
    },
  'A poet asks of a tiger\'s maker: "What the hammer? what the chain? / In what furnace was thy brain?" What does the imagery suggest about the maker?':
    {
      why: "Hammer, chain and furnace, and the anvil that follows, are a blacksmith's tools. The maker is pictured forging the tiger in fire, a huge and frightening power, and the run of questions shows the speaker's awe.",
      not: {
        'A gentle gardener who grows living things':
          'The tools are of fire and metal, not soil. The maker forges; he does not grow.',
        'A careless child who breaks what he makes':
          "The questions show awe at the maker's power and skill, not carelessness.",
        'A scientist who works in a modern laboratory':
          'The images are of a forge, not a laboratory. The poem was published in 1794.',
      },
      more: 'Blake asks question after question and never answers. The unanswered questions leave the reader with the same awe and dread as the speaker.',
      tip: 'Group images by where they come from, here the forge, and say what the group suggests as a whole.',
    },
  'Asked to give to the poor at Christmas, a rich man replies: "Are there no prisons?" What does the question show?':
    {
      why: 'The gentlemen ask for money for the poor; Scrooge answers with a question about prisons and workhouses. He treats poverty as a crime to be punished, and the question shuts the conversation down.',
      not: {
        'He wants to visit the prisons himself to help':
          'He has no wish to help anyone. The prisons are his reason for giving nothing.',
        'He is worried that the prisons are too full':
          'When told there are plenty of prisons, he is glad: he wants them used, not emptied.',
        'He truly does not know where the prisons are':
          'The question is rhetorical. He knows the prisons exist; he means the poor should be sent there.',
      },
      more: "In Stave 3 the Ghost of Christmas Present throws Scrooge's words back at him. The question returns, and this time it shames him.",
      tip: "When a character's words are repeated back to them later, quote both moments and explain how the repetition shows change.",
    },
  'When a small boy asks who is firing the guns on the marshes, his sister snaps: "Ask no questions, and you\'ll be told no lies." What does this show about how he is treated?':
    {
      why: "The saying sounds like a moral, but it is a way of silencing a child. Pip's questions are treated as a nuisance, and he learns that adults will not explain his frightening world to him.",
      not: {
        'He is taught that honesty matters most':
          'The saying is used to end the conversation, not to teach honesty.',
        'He is trusted to find out for himself':
          'He is not encouraged to find out anything. He is told to stop asking.',
        'He is praised for asking good questions':
          "His sister is cross with him, calling him a 'questioner'. Asking earns him a snap, not praise.",
      },
      more: "Mrs Joe is proud of having brought Pip up 'by hand', which she uses as a threat. The opening chapters show a child frightened and alone, which helps explain why he later longs to escape.",
      tip: "When an adult's words sound wise, check what they do in the scene: here, a proverb used to shut a child up.",
    },
  'An enslaved islander tells the master who taught him to speak: "You taught me language, and my profit on \'t / Is, I know how to curse." What does his reply suggest?':
    {
      why: "Caliban's only 'profit' from learning his master's language is the power to curse him with it. The gift becomes a weapon, and the line turns the master's claim to have improved him upside down.",
      not: {
        'He is truly grateful for every lesson he was given':
          "'My profit on 't / Is, I know how to curse' is bitter, not grateful.",
        'He has never learned to speak properly':
          'He speaks fluently, in verse. That is the point: he has learned well enough to curse.',
        'He curses only because he is in pain':
          'He curses because he resents his slavery, not from pain. He goes on to wish the red plague on them.',
      },
      more: 'Many modern readers hear this as the voice of a colonised people answering their coloniser. Others see Caliban as a brutish figure. The play gives evidence for both.',
      tip: 'With a resentful character, ask what they have been given, what has been taken, and how their language shows it.',
    },
  'In Animal Farm, the single commandment left on the barn wall reads "ALL ANIMALS ARE EQUAL / BUT SOME ANIMALS ARE MORE EQUAL THAN OTHERS". What does the change show?':
    {
      why: "Equality cannot come in degrees, so 'more equal' is a paradox that cancels the word it qualifies. The pigs keep the language of the revolution while destroying its meaning.",
      not: {
        'The pigs have finally made the farm fair':
          'The pigs now live like humans while the others work and go hungry. The new rule justifies their privilege.',
        'The animals have learned to count better':
          "The change is not about arithmetic. It is a trick of language that justifies the pigs' power.",
        'Every animal now has an equal share of food':
          'The pigs take the best of everything. The rule exists to excuse that, not to share food fairly.',
      },
      more: 'The Seven Commandments have gone; only this one is left. The animals cannot remember the old rules well enough to see what has been lost.',
      tip: 'When a slogan contradicts itself, name the paradox and say who gains from the contradiction.',
    },
  'In Macbeth, after the banquet, Macbeth says: "I am in blood / Stepp\'d in so far that, should I wade no more, / Returning were as tedious as go o\'er." What does the image suggest?':
    {
      why: 'He pictures himself standing in a river of blood, so far out that going back would be as hard as wading across. More murder seems easier than stopping: guilt now drives him forward, not back.',
      not: {
        'He wants to stop killing and make amends':
          "He considers stopping and rejects it: returning would be 'as tedious' as going on.",
        'He is crossing a real river to fight Macduff':
          'The river is a metaphor for the blood he has shed. No real river is crossed.',
        'He feels clean now that Banquo is dead':
          "He is 'in blood', not clean. The image shows how deep his guilt now goes.",
      },
      more: 'In Act 2 one bloody hand horrified him. Now he wades on through blood: the image shows how far he has hardened.',
      tip: 'Compare an image early and late in a play to show change. Blood on a hand, then a river of blood, measures how far Macbeth has gone.',
    },
  'In Romeo and Juliet, the dying Mercutio cries "A plague o\' both your houses" again and again. What does the curse show?':
    {
      why: "Mercutio is neither Montague nor Capulet, yet he dies in their quarrel. Cursing 'both' houses blames the whole feud, and repeated three times it sounds like a curse that will come true.",
      not: {
        'He blames Romeo alone for not fighting':
          'He does ask Romeo why he came between them, but the curse falls on both houses, not on one man.',
        'He hopes a real plague will end the fighting':
          "'A plague o'' is a curse: he wishes both families harm, not peace.",
        'He is joking, as he does in every scene':
          "He jokes even while dying, calling himself 'a grave man', but the curse is bitter and in earnest.",
      },
      more: "After Mercutio's death the play turns from comedy to tragedy. The curse seems to come true: both houses lose their children.",
      tip: "When a line is repeated, ask what the repetition adds: here it makes a dying man's words feel like a prophecy.",
    },
  'In Lord of the Flies, once Jack has painted his face, Golding writes: "The mask compelled them." What does this sentence show?':
    {
      why: 'The mask, not Jack, is the subject of the sentence. Authority has passed from a boy to an image: the paint lets Jack command, and the others obey something larger than him.',
      not: {
        'The twins refuse to obey Jack any longer':
          'The opposite: the mask compels them, and they obey.',
        'Jack is ashamed of the paint and hides':
          "The paint frees Jack from shame: he is 'liberated from shame and self-consciousness'.",
        'The mask frightens Jack more than the others':
          'Jack is thrilled by his new face, not afraid of it. It is the others the mask commands.',
      },
      more: "In the same chapter the fire goes out while the hunters are away, and a ship passes. The mask's power costs the boys their chance of rescue.",
      tip: 'Look at who or what is the subject of a sentence. Grammar can show where power lies.',
    },
  'In Much Ado About Nothing, Leonato explains that "There is a kind of merry war betwixt Signior Benedick and her". What does the oxymoron suggest?':
    {
      why: "War is violent; 'merry' is cheerful. Joining them makes the quarrel a game: Beatrice and Benedick fight with words because they enjoy it, and perhaps because they care more than they admit.",
      not: {
        'They are deadly enemies who hate each other':
          "'Merry' takes the hate out of the war. Their battles are witty, not deadly.",
        'They are soldiers who fought side by side':
          'Benedick has been a soldier, but this war is fought with words, between him and Beatrice.',
        'Their arguments are rare and quickly over':
          "Leonato says they never meet without 'a skirmish of wit'. The quarrels are constant.",
      },
      more: "The play's plot tricks them into admitting love. The merry war turns out to have been a courtship all along.",
      tip: 'With an oxymoron, explain each half and what the clash between them suggests about the relationship it describes.',
    },
  'In The Merchant of Venice, Shylock asks: "Hath not a Jew eyes?" What is he arguing?': {
    why: 'The question has an obvious answer: of course a Jew has eyes. Shylock lists what all humans share, eyes, hands, senses, feelings, to show that the Christians who mock him are treating a fellow human as less than one.',
    not: {
      'He has better eyesight than his enemies':
        'The question is not about sight. Eyes are one item in a list of what all humans share.',
      'He wants pity as a blind old man':
        'Shylock is not blind. He is demanding equal treatment, not pity.',
      'He is proud of being unlike other men':
        'The speech argues the opposite: he is the same as Christians in every human way.',
    },
    more: 'The speech ends by turning to revenge: the villainy he has been taught, he will practise. Shakespeare gives Shylock a powerful case and a dark purpose in the same breath.',
    tip: 'When a speech asks a series of questions, say what answer each one forces, and where the argument finally leads.',
  },
  'In Othello, Iago warns: "beware, my lord, of jealousy; / It is the green-ey\'d monster which doth mock / The meat it feeds on". What does the metaphor suggest?':
    {
      why: "A monster that mocks the meat it eats torments its victim while devouring it. Iago pictures jealousy feeding on the jealous man himself, even as he plants it in Othello's mind.",
      not: {
        'Jealousy is a sign of true and loyal love':
          'Iago calls jealousy a monster, not a proof of love. It destroys the one who feels it.',
        'Jealousy is a disease of the eyes and sight':
          "'Green-ey'd' gives the monster a colour, not a disease. The image is of a creature that feeds and mocks.",
        'Jealousy is a beast that guards the home':
          'The monster attacks its host; it protects nothing.',
      },
      more: "The irony is sharp: Iago warns against jealousy in order to create it. His 'beware' is the poison he pretends to guard against.",
      tip: 'When a villain gives good advice, look for the irony: what is the speaker really doing with the words?',
    },
  'In Twelfth Night, Viola, disguised as a young man, admits to Olivia: "I am not that I play." What does the line show?':
    {
      why: "'Play' means to act a part. Viola is playing Cesario, a young man, so 'I am not that I play' quietly admits that her disguise is not who she is.",
      not: {
        'She is a poor actor and wants to stop':
          'She plays her part well enough to fool Olivia. The line is about the gap between role and self, not skill.',
        'She will not play music for Olivia': "'Play' here means act, not play an instrument.",
        'She is too ill to perform her part':
          'Nothing suggests illness. The line hints at her disguise.',
      },
      more: "The line is dramatic irony: the audience knows Viola is a woman, while Olivia, who is falling for 'Cesario', does not.",
      tip: 'With a disguised character, look for double meanings: lines that are true for the audience and false for the listener.',
    },
  'In An Inspector Calls, Birling fears that workers will soon be "asking for the earth". The Inspector replies: "it\'s better to ask for the earth than to take it". What does he imply?':
    {
      why: 'Birling fears workers asking for too much. The Inspector points out that asking is not taking: the strikers only asked, while people like Birling take what they want. The quiet reply turns the charge of greed back on him.',
      not: {
        'The workers should have taken what they wanted':
          'He says asking is better than taking, not that the workers should take. The point is aimed at those who already take.',
        'Birling was right to sack the strikers':
          'The Inspector is challenging Birling, not agreeing with him.',
        'Nobody should ever ask for higher wages':
          "The reply defends the strikers' right to ask. It is Birling who wants to stop them.",
      },
      more: 'Eva Smith was sacked for leading a strike for twenty-five shillings a week instead of twenty-two and six. Priestley begins the chain of blame with the most powerful man in the room.',
      tip: "Look for moments when the Inspector turns a character's words back on them. Quote both, and explain the shift in meaning.",
    },
  'In Jekyll and Hyde, Enfield describes how Hyde "trampled calmly over the child\'s body". Which word shows Hyde feels nothing as he does it?':
    {
      why: "'Calmly' shows Hyde treads on the girl without anger, panic or guilt. Violence done in a rage can be understood; violence done calmly suggests something inhuman.",
      not: {
        trampled:
          "'Trampled' shows the violence of the act, but it is the adverb that shows he feels nothing while doing it.",
        "child's":
          "'Child's' makes the victim vulnerable, which adds horror, but it says nothing about Hyde's feelings.",
        body: "'Body' names what he treads on. His lack of feeling is in the adverb.",
      },
      more: "Enfield adds that it 'sounds nothing to hear', but was 'hellish to see'. Stevenson opens the novella with an act that seems hardly human.",
      tip: 'Adverbs can carry character. Quote the adverb and say what it shows about the person acting, not just the act.',
    },
  'In Whistle and I\'ll Come to You, the narrator, woken by a gale, first feels the house is "like a ship at sea", then a few lines later sees it as "steady as a lighthouse". What does the change of simile show at this point?':
    {
      why: 'Both similes come from the sea, but they pull opposite ways. A ship is at the mercy of a gale; a lighthouse endures storms and guides others to safety. Hill shows the narrator deliberately replacing a frightening picture with a reassuring one.',
      not: {
        'The storm has died away, so the house is no longer being battered by the wind':
          'The storm does not stop: it is still booming and roaring at the end of the extract. What changes is how he chooses to picture the house.',
        'He can see a real lighthouse on the coast from his bedroom window over the marsh':
          'The lighthouse is a comparison, not something he sees. He has woken in the dark, and the image is his way of reasoning with himself.',
        'He realises that the house is in even greater danger now, as the storm grows stronger':
          'The change runs the other way, from the fragile ship to the enduring lighthouse. He is talking himself into feeling safe, not out of it.',
      },
      more: 'The comfort is ironic. A lighthouse is a light in the darkness, and in this extract every light fails: first the lights on the landing, then his torch.',
      tip: "When two images answer each other, analyse the pair: say what each suggests, and what the switch shows about the narrator's state of mind.",
    },
  'In H is for Hawk, moments after the breeder pulls the first goshawk from its box, Helen Macdonald writes "She is a conjuring trick. A reptile. A fallen angel." What is the effect of these metaphors here?':
    {
      why: 'Three metaphors in three sentences, and each contradicts the last: an illusion, a cold-blooded ancient creature, a being cast down from heaven. Language seems to fail, so Macdonald throws one image after another at a creature that exceeds them all.',
      not: {
        'Together they build one steady picture of the hawk as cruel and evil':
          'The images do not agree, and a fallen angel is beautiful as well as damned. The point is contradiction, not a single verdict.',
        'The fragments show Macdonald is bored, listing things while she waits':
          'The opposite: the hawk has just burst into the sunlight, and the fragments show a writer overwhelmed, not idle.',
        'They are similes comparing the hawk to things she can see on the quayside':
          "There is no 'like' or 'as': she says the hawk is each thing, so these are metaphors, and none is something on the quay.",
      },
      more: "The fallen angel is the richest image: holy and dangerous at once, it hints that Macdonald is drawn to something not wholly safe. Soon after, the bathos of 'like a turkey in a butcher's shop' drags the scene back to earth.",
      tip: 'Comment on the contradictions, not just the number of images. Say what the clash between them suggests about the hawk and about the writer.',
    },
  'In Beyond the Sky and the Earth, Jamie Zeppa tells how the British envoy Ashley Eden fared in Bhutan in 1864, ending his list of indignities with "his face rubbed with wet dough". What is the effect of this detail?':
    {
      why: "Three physical indignities build to this absurd one. Zeppa tells imperial history as farce, and the bathos takes Bhutan's side: the representative of a vast empire is made ridiculous, and the reader's sympathy goes to the small country.",
      not: {
        'The cruel detail presents the Bhutanese as savage torturers whom Zeppa condemns':
          'The tone is comic, not horrified. The joke is on the envoy, and the extract ends with Zeppa full of admiration for Bhutan.',
        "It voices Zeppa's anger at the British Empire, demanding that its envoy be punished":
          "Zeppa does take Bhutan's side, but through comedy, not anger: the envoy is laughed at, and the episode is told as farce.",
        'It makes the reader admire Eden as a brave hero who bore every insult without complaint':
          "The opposite: the bathos makes Eden ridiculous, and the reader's sympathy, like Zeppa's, goes to Bhutan.",
      },
      more: "Relations with the British take 'a nasty turn', a casual idiom in the middle of a history lesson. The humour keeps the history lively, though the episode ended in war.",
      tip: 'Name the bathos, then say whose side it puts the reader on. Tone is a method too, and answers that track it stand out.',
    },
  'In The Necklace, Maupassant spends over forty lines on the night of the ball and the loss, then gives a paragraph of its own to "They lived like this for ten years." What is the effect of this sentence?':
    {
      why: 'The single night is told moment by moment; the ten years that pay for it pass in one sentence of seven words, standing as its own paragraph. The flatness is shocking, and the reader feels the disproportion between one evening and its cost.',
      not: {
        'It is a flashback to the comfortable years before Mathilde married her husband':
          "'Like this' points back to the grinding labour just described, after the loss, not to her life before marriage.",
        'It slows the story right down, describing each day of paying off the debt in detail':
          'The opposite: it compresses ten years into one short sentence. It is the night of the ball that is told in full detail.',
        'It shows the Loisels settling into a calm, contented life once the debt is paid':
          "'Like this' means the 'grindingly horrible life of the very poor' just described: the attic, the heavy housework, the haggling and the copying work at night.",
      },
      more: "The years show on her body instead: the pink nails worn down on greasy pans, and by the end red hands. Pace itself carries the story's judgement.",
      tip: 'Treat pace as structure: compare how much text a moment receives with how long it lasts, and say what the contrast makes the reader feel.',
    },
  'In The Story of an Hour, Mrs Mallard, alone in her room after hearing of her husband\'s death, sits facing the open window and sees "the tops of trees that were all aquiver with the new spring life". What does this view suggest?':
    {
      why: "Instead of mirroring grief, nature signals renewal before she understands it herself. 'New spring life' suggests rebirth, set against the news of a death, and 'aquiver' anticipates her own trembling excitement a few lines later.",
      not: {
        'The trembling trees mirror her grief, shaking as she weeps for her husband':
          'This is pathetic fallacy reversed: the trees tremble with energy while she sits still. The world outside is not mourning with her.',
        'The trees warn that a storm is coming, foreshadowing the train accident':
          'The accident has already happened: the news opens the story. The view holds rain, sparrows and blue sky, signs of renewal, not warnings.',
        "The spring scene shows that a whole year has now passed since her husband's death":
          'The story takes about an hour, as its title promises. The spring view belongs to the same afternoon the news arrives.',
      },
      more: "The open window becomes the story's main symbol, set against the closed door where Josephine kneels and the front door that Brently opens with his latchkey.",
      tip: "When a setting seems to contradict a character's situation, ask what it foreshadows. Then track the symbol, here the window, through the story.",
    },
  'In To Kill a Mockingbird, Atticus brings the news that Tom Robinson has been shot dead trying to escape from the prison farm: "Seventeen bullet holes in him." What is the effect of this sentence at this point?':
    {
      why: 'The sentence has no verb and no comment, only a number. From a man who chooses his words with care, the bare count shows how far the guards went against a man with one working arm, and Lee leaves the reader to do the adding up.',
      not: {
        "The precise number shows that Atticus has read the official report and accepts the guards' own account of it":
          'The number is no sign of trust. Firing seventeen shots at a man with one working arm condemns the guards; it does not excuse them.',
        "The short sentence shows that Atticus is too shocked to say anything more at all about Tom's death":
          'He does say more: he adds that the guards did not have to shoot Tom that much. The bare count simply comes first and does most of the work.',
        'Atticus exaggerates the number on purpose, to shock the missionary circle out of its hypocrisy':
          'Nothing suggests the number is exaggerated. Its force lies in being plain fact, stated flatly, so the reader feels the horror without being told to.',
      },
      more: "The news arrives in the middle of Aunt Alexandra's missionary tea, where the ladies pity the Mrunas in Africa and complain about their own servants. Scout watches Alexandra and Miss Maudie compose themselves and go back to serving tea, and finds a new kind of courage in them.",
      tip: 'Short, plain sentences in a novel full of talk are worth quoting whole. Say what is missing, a verb or a comment, and explain why the absence makes the moment hit harder.',
    },
  'In Antony and Cleopatra, left with Agrippa and Maecenas, Enobarbus describes Cleopatra\'s first meeting with Antony: "The barge she sat in, like a burnished throne, / Burned on the water." What is the effect of these lines?':
    {
      why: "Comparing the barge to a throne makes a boat a seat of royal power, and the near-pun of 'burnished' and 'Burned' sets fire on water. Two elements that should cancel each other out burn together, the paradox the whole speech builds: her power is felt before she is even seen.",
      not: {
        'Enobarbus reports that the barge really did catch fire on the river Cydnus, a bad omen for the lovers':
          "Nothing catches fire: 'Burned' describes how the polished barge blazed on the water. Reading the verb literally misses the paradox it creates.",
        "The simile mocks Cleopatra's vanity, and so reveals the plain Roman soldier's contempt for Egyptian luxury":
          "Enobarbus is dazzled, not scornful. If even the play's blunt soldier talks like this, the audience is invited to believe Cleopatra really is extraordinary.",
        "The lines show off Antony's wealth, since he had the barge gilded as a gift to win the queen's favour":
          "The barge is Cleopatra's, and it upstages Antony: the city runs to see her, and he is left 'Enthroned i' th' market-place', alone and whistling.",
      },
      more: "Enobarbus has been gossiping with the Romans in prose; with 'I will tell you' he moves into verse, as if performing a set piece. The fire on water looks forward to Cleopatra's dying claim, 'I am fire and air'.",
      tip: 'In a passage question, say who is speaking and why it matters. Praise of Cleopatra from a cynical Roman soldier carries more weight than praise from her own women.',
    },
  'In A Midsummer Night\'s Dream, Helena follows Demetrius into the wood and tells him "I am your spaniel; and, Demetrius, / The more you beat me, I will fawn on you." What is the effect of this metaphor at this point?':
    {
      why: "Helena makes herself a dog that loves the master who beats it, and presses the metaphor further: 'Use me but as your spaniel, spurn me, strike me'. An audience may laugh at the exaggeration, but the self-abasement is painful, and Demetrius answers with threats.",
      not: {
        'It is a clever trick: Helena flatters Demetrius so that he will take her back to Athens with him':
          "There is no trick: Helena means every word, and it earns her nothing but threats. She knows the cost: 'We cannot fight for love as men may do.'",
        'It is a warning: like a dog that has been beaten, Helena will turn and bite if Demetrius leaves her':
          'A fawning spaniel does the opposite of biting: it grovels. The metaphor shows submission, not menace.',
        "It shows the love-juice at work, since Puck's flower has made Helena dote on the first man she sees":
          "No charm has touched Helena. She loved Demetrius before the play began; the flower's juice is used on Titania and the young Athenian men.",
      },
      more: "Love and hatred keep reducing the lovers to animals in the wood, and the play makes the metaphor real in Bottom's ass's head. The spaniel speech is a good example of the play keeping comedy and cruelty in the same moment.",
      tip: 'When a metaphor is funny, ask whether it is also sad. Writing about both effects, and the gap between them, shows the double response this play keeps asking for.',
    },
  'In A Taste of Honey, listing the attractions of their comfortless new flat to Jo, Helen says "there\'s a lovely view of the gasworks". What does this line show about Helen at this point?':
    {
      why: "Helen advertises the flat like an estate agent, and every attraction is a drawback: no heating, a shared bathroom, an industrial view. The irony lets her name how grim their life is while keeping the feeling at arm's length, a habit both women share.",
      not: {
        'She truly admires the gasworks, which remind her of the town she grew up in':
          'Nothing suggests real admiration. The gasworks come at the end of a list of joke attractions, which is what makes the line so dry.',
        'She is trying to persuade Peter that the flat is worth paying the rent for':
          'She is speaking to Jo, and the joke is about their own poverty. Helen chose the flat for the rent, not to impress anyone.',
        "She is mocking Jo's drawings, which she has just found and thinks are ugly":
          "The opposite: when Helen finds Jo's drawings she is surprised by her talent and offers to pay for art school.",
      },
      more: "The historian Selina Todd reads the speech as a pastiche of what was supposed to matter to women in the 1950s. It also sets the play's tone: its characters mock their surroundings, and the humour is both a defence and a kind of dignity.",
      tip: 'Name the kind of irony and say what it protects the speaker from. In this play the jokes cover pain, so the best answers explain what each one is hiding.',
    },
  'In Hullaballoo in the Guava Orchard, after Sampath is sacked from his job at the post office, Kulfi offers him comfort, and the chapter ends with his reply: "No, I do not want an egg ... I want my freedom." What is the effect of this line?':
    {
      why: "Kulfi offers comfort in the only form she knows, food, and Sampath answers with a grand, abstract demand. Setting an egg beside freedom is bathos, and funny, but the chapter's last line has real force: it is the moment he decides to leave.",
      not: {
        'It shows Sampath refusing food in protest at the poverty that the long drought has brought on his family':
          'The drought belongs to Chapter 1, twenty years earlier, at his birth. Here he refuses an egg because no food can answer what he wants.',
        'It is the first of the riddling sayings that will soon make the pilgrims believe that he is a holy man':
          "The riddling answers come later, in the orchard, such as 'Some people can only digest fish cooked in a light curry.' This is a plain demand.",
        "It shows Sampath asking his mother to help him plan his escape from his father's crowded little house":
          "He tells no one his plan. He slips away alone on the milk sellers' bus while the family are out at another wedding.",
      },
      more: 'Desai often makes her most serious points through comic juxtapositions like this one. In the next chapter Sampath leaps from a stalling bus and climbs a guava tree, and the longing of one sentence becomes the plot of the novel.',
      tip: "When a line is funny, do not stop at the joke. Say what the comedy carries: here the bathos smuggles in the novel's central desire, which is exactly the kind of point that lifts an answer.",
    },
  'In I\'m the King of the Castle, standing in Kingshaw\'s room on the day he arrives at Warings, Hooper thinks "We live here, it is ours, we belong. Kingshaw has nowhere." What does this show about Hooper at this point?':
    {
      why: 'Short clauses build like a chant of ownership: live, ours, belong. Then the flat final sentence makes Kingshaw homeless as well as fatherless. On the very first day, Hooper has turned the adult logic of property into a weapon.',
      not: {
        'He pities Kingshaw for having no home, and secretly decides to share the house with him':
          'The opposite: the thought is a boast. That same day Hooper sends down a note telling Kingshaw he did not want him to come.',
        'He is proud of Warings because his family have lived there for the whole of his life':
          'Edmund and his father have only lately moved into Warings, though his great-grandfather built it. The claim to belong is new, which makes it all the more insistent.',
        'He is repeating the words of welcome his father taught him, to help Kingshaw settle in at Warings':
          "These are Hooper's private thoughts, not a welcome. His father's cheerful word for Kingshaw is 'companion', and Hooper wants no companion.",
      },
      more: 'Warings is almost all the Hoopers have left of their standing, and Mrs Kingshaw has no house at all. Hill shows children who have already learned the adult language of ownership and rank: Hooper soon tells Kingshaw that the house will belong to him.',
      tip: "Close third-person narration lets you quote a character's thoughts as evidence of motive. Analyse the rhythm as well as the words: here the short clauses sound like a chant.",
    },
  'In A View from the Bridge, while Alfieri is still urging Eddie to let Catherine go, a stage direction reads "A phone booth begins to glow" on the other side of the stage. What is the effect of this direction at this moment?':
    {
      why: "Miller lights the booth before Eddie has decided anything aloud, so the audience sees the betrayal waiting for him while Alfieri's words are still in the air. Reason and temptation share the stage, which makes the call feel both chosen and inevitable, and shows how little the lawyer can do.",
      not: {
        'It shows that Eddie has already phoned the Immigration Bureau before this visit':
          'The call comes after this visit, when Eddie leaves the office for the phone. The glow comes first, before he has said anything.',
        'It marks a jump forward to the next morning, when the cousins are taken away':
          'There is no jump in time. The booth glows while Alfieri is speaking, and Eddie goes straight from the office to the phone.',
        'It shows that Alfieri means to ring the police himself, to keep Catherine safe':
          'Alfieri never uses the phone. It waits for Eddie, who asks for the Immigration Bureau, the act his community regards as unforgivable.',
      },
      more: "Several key moments happen only in Miller's stage directions: the chair raised over Eddie's head, the kisses and the glowing booth. Eddie's own words in Act One, about \"a word that you gave away\", mean the audience judges the call by the standard he set.",
      tip: 'Write about the play as staged: name the stage direction, say what the audience sees that no character says, and explain the effect on tension.',
    },
  'In The Scarlet Letter, Hester dresses three-year-old Pearl in a "crimson velvet tunic" embroidered with gold, and the narrator comments: "It was the scarlet letter in another form: the scarlet letter endowed with life". What does this show about Pearl?':
    {
      why: "Hester has dressed Pearl to match the letter, and the colon works like an equals sign: Pearl is the letter. 'Endowed with life' turns the symbol of her mother's sin into a living, growing person, which is why Pearl can punish Hester and, in the end, be the reason she survives.",
      not: {
        'The magistrates have ordered the child to wear a scarlet letter of her own':
          "No law touches Pearl. The likeness is Hester's own work: the narrator says she carefully wrought it, linking her child with the emblem of her guilt.",
        "Hester's punishment is over, since the letter has passed from her to her child":
          "The letter stays on Hester's breast. Pearl doubles it rather than replacing it, so Hester now carries the sign of her sin in two forms.",
        'Pearl is a cheerful child, and her fine clothes show that the town accepts her':
          "The town calls her a demon offspring, and the Puritan children shun her. The crimson makes her blaze against the Puritans' drab grey.",
      },
      more: 'In the same chapter the Governor\'s convex breastplate shows the letter "in exaggerated and gigantic proportions". Later, at the brook, Pearl will not come to her mother until Hester pins the letter back on.',
      tip: 'When a writer says one thing is another, set out the equation, then say what the metaphor adds: here a symbol becomes a person who can act.',
    },
  'In "Piano" by D. H. Lawrence, the last stanza ends with "my manhood is cast / Down in the flood of remembrance, I weep like a child for the past". What is the effect of ending line 11 on "cast"?':
    {
      why: "The enjambment performs the collapse: 'cast' is left at the end of line 11 and 'Down' falls to the start of line 12. His adult self-control drops with the line, and the sentence runs on, clause after clause joined only by commas, into weeping 'like a child'.",
      not: {
        'The pause holds him upright for a moment, so his manhood stands firm against the song':
          "The opposite: the break does not hold him up. 'Down' falls to the next line, and the clauses that follow pile up without control.",
        'It begins a new stanza, so the poem moves on to a happier memory of his mother':
          "The break comes inside the third stanza, in the poem's last two lines. There is no new memory: the old one has overwhelmed him.",
        'It slows the poem down to show that he is calmly choosing to stay in the present':
          "The song has drawn him back 'In spite of myself': nothing here is chosen or calm. The break shows control being lost, not kept.",
      },
      more: 'Set just after "glamour", which first meant magic, cast may also echo the old phrase for putting someone under a spell. The child he watched in the third person in line 3 is now the man weeping like one.',
      tip: 'Name the line break precisely, quote the words either side, and say how the layout enacts the meaning. That is analysis of structure, not just of language.',
    },
  'In Half-past Two by U. A. Fanthorpe, the boy told to stay in the classroom until half-past two knows the clock\'s face well, yet he cannot "click its language". What does this phrase show about him?':
    {
      why: "The clock is personified as a speaker of a foreign tongue, and 'click' works two ways: the sound a clock makes, and the informal verb for sudden understanding. He hears the clock, but its meaning never clicks. One word holds the gap between seeing a code and being able to read it.",
      not: {
        'He has learned to read the clock at last, and is proud of what he knows now':
          'The opposite: nobody has taught him Time, which is the joke at the heart of the poem. He knows what the clock looks like, not what it says.',
        'He is bored, and keeps clicking his fingers at the clock to annoy the teacher':
          "'Click' belongs to the clock: it is the clock's sound and the language he cannot crack. He sits and waits; he does not provoke anyone.",
        'He has broken the clock by fiddling with its hands while his teacher was out':
          'Nothing is broken. The clock works perfectly well; the trouble is that he cannot understand what it is telling him.',
      },
      more: 'Because he cannot read the clock, he waits beyond it, into a timeless place the poem calls a "clockless land for ever". The gap in his learning becomes, for once, an escape from the adults\' timetable.',
      tip: 'When one word carries two meanings, explain both and say why the poet needs them together. That is more precise than naming personification alone.',
    },
  'In Sonnet 116, Shakespeare turns from what love is not to what it is: love "is an ever-fixed mark, / That looks on tempests and is never shaken". What does this image show about love?':
    {
      why: 'A mark here is a sea-mark, a beacon or tower on the coast that sailors steer by. Personification gives it eyes, so it watches the tempests rather than suffering them. Having said what love is not, the quatrain says what it is: fixed while everything around it moves.',
      not: {
        'Love is a small ship tossed by storms that somehow always reaches harbour':
          "The ship is the 'wandering bark' of the next line: the lost traveller, not love. Love is the mark and the star that the ship steers by.",
        'Love is a scar the lover carries for life, a mark that no time can ever heal':
          "Here 'mark' is not a scar but a sea-mark, a coastal beacon. Its point is that it stays fixed, not that it wounds.",
        'Love is a target that the storms of jealousy aim at and keep on missing':
          "Nothing aims at the mark. It 'looks on tempests', watching them untouched, and sailors use it to find their way.",
      },
      more: 'Said as four syllables, as the anthology marks it, ever-fixed makes the line a full ten syllables, so the fixed rhythm matches the fixed image. The next image, the star to every wandering ship, widens love into a guide for all lost travellers.',
      tip: 'Gloss an old word before you analyse it: here a mark is a sea-mark. Then say what the image claims about love and how the next line develops it.',
    },
  'In Search For My Tongue, after the lines in Gujarati, the mother tongue grows back and ties "the other tongue in knots". What does this image show at this point in the poem?':
    {
      why: "The image reverses the idiom 'tongue-tied': now English is the tongue that cannot speak freely, and the mother tongue is free. 'The other' points back to the start, where it named the foreign tongue she could not fully know. The label is the same, but the power has changed hands.",
      not: {
        'Her mother tongue is rotting in her mouth, just as the opening section warned':
          'That is the warning of lines 12 and 13, before the dream. After the Gujarati, rot is answered by growth: the tongue grows back from a stump.',
        'She can no longer speak either language, and gives up the struggle in despair':
          'The opposite: the mother tongue grows, opens like a bud and finally blossoms out of her mouth. Only English is bound.',
        'She has learned English so well that it now ties her thoughts together neatly':
          'Knots bind; they do not tidy. The mother tongue is the one acting, and English is only ever acted upon.',
      },
      more: 'Knots suggest the twisting stems of a climbing plant, but also a struggle, and here the ending stops sounding peaceful. Is the mother tongue returning, or taking revenge? One reading is that the poem imagines victory and defeat, never sharing.',
      tip: "Follow a phrase through a poem: 'the other' names the same language at the start and at the end, but its power is reversed. Saying so shows you see the structure.",
    },
  'In Anita and Me, at the Spring Fete, Sam Lowbridge begins with a grievance about where the fete money will go and ends by shouting: "This is our patch." What does this line show at this point?':
    {
      why: "'Our' at first sounds like the whole of Tollington, but by the end of his outburst it plainly means white Tollington, and the Kumars, who live there, are outside it. 'Patch' is a homely, gardening word, which makes a claim about who belongs sound like common sense.",
      not: {
        'Sam is speaking for the whole village, which cheers his complaint about the new church roof':
          'Catcalls come at Sam from all over the grounds, in broad local dialect. Syal refuses to make Tollington simply racist: the village is divided.',
        'Sam is defending the Kumars, whom he still counts as good neighbours and part of the village':
          "The opposite: the Kumars are outside his 'our'. Only later, at Hollow Pond, does he claim he never meant Meena, which is the logic of prejudice.",
        'Sam is boasting that his gang has taken over the field where the Spring Fete is always held':
          "'Patch' is not a field he has seized. It is a homely word for a place that is yours, used to claim the village for some of its people.",
      },
      more: "One reading is that Syal shows a young man's anger at a village whose pit has closed, with a motorway coming, being turned against his neighbours, and she does it in four short words. Meena feels as if she has been punched in the stomach, though Sam has not touched her.",
      tip: "Watch the pronouns in a speech about belonging: say whom 'our' includes at the start and whom it shuts out by the end. A shift like that is precise evidence.",
    },
  'In Never Let Me Go, when six girls test Ruth\'s theory by walking out around Madame all at once, Kathy says Madame was afraid of them "the same way someone might be afraid of spiders". What does this simile show at this point?':
    {
      why: "Ruth was right that Madame is afraid, but the simile names the kind of fear: not fear of being harmed, but the recoil people feel from another species. Kathy then turns the image round and imagines 'being the spiders', the first time the students see themselves from outside.",
      not: {
        'Madame is afraid the girls will hurt her, just as a spider might bite someone who comes too close':
          'The girls threaten nothing: they simply walk out around her. The simile is chosen to show that her fear is not of harm but of what they are.',
        'The girls have hidden spiders in the doorway as a prank, to give Madame a fright when she arrives':
          "There are no real spiders. The girls wait by the main doorway and walk out around Madame together; the spiders exist only in Kathy's comparison.",
        'The girls are afraid of Madame, who seems as cold and as strange to them as a spider would':
          'The fear runs the other way: Madame freezes, and Kathy sees her hold back a shudder. The girls are the ones being recoiled from.',
      },
      more: "The fear belongs to a calm, cultured adult rather than a villain, and the novel keeps finding prejudice in decent people. Years later, when Kathy and Tommy find her at her house, Madame still calls the students 'creatures', which suggests the recoil never left her.",
      tip: 'When a simile describes a feeling, ask whose feeling it is and what kind it is. Then look for the moment the image is turned round, as Kathy does here.',
    },
  'In Pigeon English, after Mr Frimpong complains at church that in England nobody helps a stranger in trouble, Harri agrees: "In England nobody helps you if you fall over." What does this line show at this point?':
    {
      why: 'Harri explains the complaint in his own way: people cannot tell whether a fall is real or a trick. The irony is that he was there. He took part in the robbery that left Mr Frimpong on the ground, and he ran, so the verdict he passes on England also convicts him, whether or not he sees it.',
      not: {
        'Harri has fallen over in the playground at school, and nobody came over to help him up':
          "The line answers Mr Frimpong's complaint after the robbery; it is not Harri's own experience. Its irony depends on what Harri did that day.",
        'Harri is warning Mr Frimpong that the Crew plan to rob him on his way home from church':
          "The robbery has already happened: Mr Frimpong was injured in it, and that is why he complains at church. Harri was part of the Crew's mission.",
        'Harri is praising England, where people are too polite to stare at someone who has fallen':
          'Harri is agreeing with a complaint, not praising England. He explains that people cannot tell whether a fall is real or a trick, so they do not help.',
      },
      more: "The flat, generalising sentence anticipates the novel's wider silence, in which a police appeal for witnesses to the dead boy's killing meets nothing. Harri understands less than the reader, so his reassurances and verdicts keep turning against him.",
      tip: 'With a naive narrator, separate what the speaker means from what the reader sees. Quote the line, then explain the irony the writer builds into it.',
    },
  'In Boys Don\'t Cry, having sworn revenge and gone after Josh, Dante stops himself: "I turned round and walked away". What does this moment show at this point in the novel?':
    {
      why: 'Walking away has meant abandonment until now: Melanie walks away from Emma at the start, and the novel is full of people who left. Having sworn revenge and attacked Josh, Dante stops before he goes too far, and the plain verbs make restraint sound like strength.',
      not: {
        "Dante is too frightened of Josh's friends to fight, and runs from the danger to save himself":
          'He has already attacked Josh. Stopping is not fear but self-control, the hardest thing he does, and the novel rewards it.',
        'Dante abandons Emma to his father, repeating what Melanie did at the start of the novel':
          'He walks away from Josh, not from his daughter. Here the novel redefines walking away, from desertion to an act of self-control.',
        'Dante leaves the hospital to go home, because his father has ordered him to man up':
          "Dad's 'man up' comes much earlier, when he learns about Emma. This moment is Dante choosing, by himself, not to take revenge.",
      },
      more: "Pearson's scheme of work picks out a line from Chapter 26, 'Some get to walk away, some don't', and the novel spends its second half redefining it. When Aunt Jackie tells Dante 'You walked away', after he nearly loses control with Emma, she makes the change explicit.",
      tip: 'Follow a single motif across a novel and show how its meaning changes. That proves whole-text knowledge more efficiently than retelling the plot.',
    },
  'In The Sign of Four, as Holmes searches the room where Bartholomew Sholto lies dead, Watson writes that his movements were "like those of a trained blood-hound picking out a scent". What does this simile show about Holmes at this point?':
    {
      why: "The simile makes detection physical and predatory, a hunt rather than a calculation, and it anticipates Toby the tracker dog in the next chapter. Watson follows it with the thought of 'what a terrible criminal he would have made', which suggests the same powers could serve either side of the law.",
      not: {
        'Holmes has lost his reason under the drug, and scrabbles about the floor without any method':
          'He measures, compares and examines with a lens and a tape, and soon crows with delight at a clue. The search has a method; the simile shows its speed and instinct.',
        'Holmes is a loyal servant, as eager to please Athelney Jones of Scotland Yard as a pet dog':
          'Jones has not yet arrived, and Holmes serves no one: he later simply lets Jones keep the credit. The blood-hound image is about the hunt, not obedience.',
        'Holmes is clumsy and slow, unlike the clean, cold science of detection that he claims to follow':
          "The opposite: his movements are 'swift, silent, and furtive'. Watson pictures a hunter, which sits beside the science rather than contradicting it.",
      },
      more: "In the same passage Watson notes his 'beady eyes gleaming and deep-set like those of a bird'. Elsewhere Holmes calls detection 'an exact science', so Conan Doyle gives his hero two vocabularies: the laboratory and the hunt.",
      tip: 'When a writer compares a character to an animal, say what the comparison adds, then follow it through the chapters: here the human blood-hound leads to a real tracker dog.',
    },
  'In Silas Marner, describing the life Silas makes at his loom in Raveloe after Lantern Yard, the narrator says: "He seemed to weave, like the spider, from pure impulse, without reflection." What does this simile show about him at this point?':
    {
      why: "A spider spins without choosing to, so the simile strips Silas of the thought and feeling that make a person. Eliot is showing what isolation and repetitive labour do to a man: his weaving has become an end in itself, done 'without reflection', as an insect's would be.",
      not: {
        'He is cunning and patient, spinning his plans to trap the villagers who have shunned him':
          "The spider here is not a hunter but a spinner. The point is that Silas weaves 'from pure impulse', without planning anything at all.",
        'He is a proud artist, delighting in the delicate patterns that he designs for his customers':
          "Eliot stresses the opposite of artistry: he works 'without reflection', so the weaving no longer expresses any thought of his own.",
        'He is plotting a slow revenge on William Dane for the theft he was blamed for at Lantern Yard':
          'Silas does not plot revenge. After Lantern Yard he shuts out thought altogether, and fifteen years of weaving are a way of not thinking.',
      },
      more: "Eliot develops the image in the same chapter: Silas is reduced to 'the unquestioning activity of a spinning insect', and bends until he looks like 'a handle or a crooked tube, which has no meaning standing apart'. The novel will show love restoring the person these images take away.",
      tip: 'Name the comparison, then say what it takes away from the character: here thought and choice. Link it to the cause, isolation, and to what later restores him.',
    },
  'In Robert Frost\'s "Out, Out", after the saw seems to leap at the boy\'s hand, the speaker concludes: "Neither refused the meeting". What does this phrase show at this point?':
    {
      why: "The phrase is chillingly polite, as if boy and saw had kept an appointment. 'Meeting' gives the machine and the boy equal will, so the blame is shared rather than placed. In three lines the speaker has revised the account twice: the saw leaped, or only seemed to, and the boy must have given his hand.",
      not: {
        'It shows that the boy refused to stop work, though the speaker had begged him to finish early':
          'The speaker only wishes, in the first person, that someone had called it a day and given the boy a little time off. Nobody begged him.',
        'It shows that the sister had arranged for the boy to meet the doctor at the house at supper':
          "The sister's only word is 'Supper'. The meeting is between the boy's hand and the saw, a polite word for a terrible injury.",
        'It blames the saw alone, a wild animal that sprang at the boy before he had time to move':
          "The speaker has just corrected that version: the saw only 'seemed to leap', and the boy himself must have offered his hand. Neither is blamed alone.",
      },
      more: 'The understatement makes the horror felt rather than described. The hesitation is realistic, since no one can see a fast accident clearly, and it leaves the reader to weigh the blame, including the blame of the adults who set a child to adult work.',
      tip: 'When a poem refuses to settle blame, quote the hesitations and say what the refusal does: here it makes the reader do the judging that the speaker will not.',
    },
  'How does Shakespeare use the motif of darkness in Macbeth to convey moral corruption?': {
    why: "Darkness hides the murders and the evil desires behind them. Macbeth begs 'Stars, hide your fires', and Lady Macbeth calls 'Come, thick night', so darkness becomes a cover for crime and a sign of their corruption.",
    not: {
      'Darkness only shows the scenes are at night':
        'Some scenes are set at night, but darkness also symbolises evil and concealment, which is why the characters call on it.',
      'Darkness stands for sadness and grief':
        'Darkness in Macbeth is linked to evil and secrecy, not sadness.',
      'Darkness was a lighting trick of the stage':
        'The play was first performed in daylight or by candlelight. The darkness is in the language, as a symbol.',
    },
    more: "After Duncan's death, darkness spreads beyond the castle: Ross says dark night strangles the travelling lamp even though it is day. Nature itself seems disturbed by the crime.",
    tip: 'Quote the characters calling on darkness, and explain how the motif links to the theme of hidden evil and appearance versus reality.',
  },
  'In "An Inspector Calls", how does the generational divide serve Priestley\'s message?': {
    why: "Sheila and Eric are shaken by the Inspector and accept their part in Eva's death. Their parents refuse to change. Priestley suggests hope lies with the young, while the older generation clings to selfish attitudes.",
    not: {
      'The older characters are wiser than the young':
        'The play presents the older Birlings as stubborn and blind, not wise. They learn nothing.',
      'There is no real divide between the generations':
        'The divide is clear by the end: the young accept responsibility and the old deny it.',
      'The young are punished more than their parents':
        'The young are not punished more; they are changed more. Their parents escape any real change.',
    },
    more: 'Gerald sits between the two groups: he is young, but by the end he sides with the older Birlings. The play was first staged in 1945, when Britain was rebuilding.',
    tip: 'Link the divide to context: Priestley wanted post-war audiences, especially the young, to build a fairer society.',
  },
  'In Lord of the Flies, Golding presents Simon as a Christ-like figure. What does this suggest?': {
    why: 'Simon is kind and gentle, and he understands that the beast is inside the boys themselves. Like Christ, he brings a truth the others will not hear, and he is killed by them, an innocent sacrificed.',
    not: {
      'He provides comic relief between the violence':
        'Simon is serious and spiritual. His story is tragic, not comic.',
      'He stands for the power of democracy and votes':
        'Democracy is linked to the conch and to Ralph. Simon stands for goodness and truth.',
      'He represents the soldiers of the adult war':
        'Simon has nothing to do with the military. He stands for peace, kindness and insight.',
    },
    more: 'Simon helps the littluns, goes alone to his quiet place in the forest, and discovers that the beast on the mountain is a dead parachutist. He dies trying to tell the others.',
    tip: "Explain what Simon's death shows about the boys: when goodness is destroyed, savagery has taken over.",
  },
  'In "Of Mice and Men", why does Steinbeck set the novella near Soledad?': {
    why: "Soledad is a real town in California's Salinas Valley, and its name means 'solitude' in Spanish. Setting the novella there quietly announces its main theme: almost every character is lonely.",
    not: {
      "It was Steinbeck's own birthplace":
        "Steinbeck was born in Salinas, a larger town nearby. Soledad's meaning matters more than any personal link.",
      'It was the most famous ranch in America':
        'Soledad is a town, not a ranch. The ranch in the novella is a few miles from it.',
      'It had the best farming weather in California':
        "The weather is not the reason. The name's meaning, solitude, fits the novella's theme.",
    },
    more: "Lonely characters include Crooks, isolated by racism; Candy, old and afraid of being thrown out; and Curley's wife, who has no one to talk to. George and Lennie's friendship stands out against them.",
    tip: "Use the setting's name as a small, precise detail. Linking it to a theme shows you read the text closely.",
  },
  "In A Christmas Carol, how does Dickens use Scrooge's transformation to criticise Victorian society?":
    {
      why: "Scrooge stands for the selfish rich who ignore the poor. When he changes, he raises Bob's salary, helps Tiny Tim and gives to charity, so Dickens suggests that if individuals change, the suffering of the poor can be eased.",
      not: {
        'It shows that all wealth is wicked in itself':
          'Dickens criticises greed and meanness, not wealth itself. Fezziwig is a prosperous, generous employer, and the changed Scrooge stays rich but uses his money well.',
        'It promotes the Church above all charity':
          'The novella celebrates Christmas kindness, but its target is how the rich treat the poor, not religion itself.',
        'It proves to readers that ghosts are real':
          'The ghosts are a storytelling device to change Scrooge. Dickens is not arguing about whether ghosts exist.',
      },
      more: 'Dickens wrote the novella in 1843, when he was angered by child poverty and harsh laws on the poor.',
      tip: "Link Scrooge's change to context: Dickens wanted his readers, not just Scrooge, to take responsibility for the poor.",
    },
  'How does Owen use sensory imagery in "Exposure" to present the soldiers\' war?': {
    why: 'Owen fills the poem with cold, wind, aching brains and endless waiting, while the actual fighting stays distant. The soldiers suffer and die from exposure, not battle, which shows how pointless their war has become.',
    not: {
      'It makes the trenches seem colourful':
        'The images are bleak and painful. They make the war feel grim, not colourful.',
      'It describes a beautiful, peaceful winter landscape':
        'The landscape is frozen and hostile. Owen shows it as a killer, not a view.',
      'It entertains the reader with adventure':
        "Owen wrote to show the truth of the war, not to entertain. The sensory details make readers feel the soldiers' suffering.",
    },
    more: 'Sounds matter too: the soldiers hear the mad gusts tugging on the wire, and distant guns rumble like another war. The weather is closer and deadlier than the enemy.',
    tip: 'Group the senses in your answer, touch, sound and sight, and explain how together they create a sense of pointless suffering.',
  },
  'In Romeo and Juliet, how does the Prologue function as a dramatic device?': {
    why: 'The Prologue tells the audience at the start that the lovers will die. Because we know the ending, we watch to see how and why it happens, and every hopeful moment is shadowed by dramatic irony.',
    not: {
      'It introduces each of the actors by name':
        'The Prologue introduces the story and the feud, not the actors.',
      'It sums up the plot for any latecomers':
        'It does outline the story, but it comes at the very start, so latecomers would miss it. Its job is to reveal the ending.',
      'It was written later by another author':
        "It is Shakespeare's own writing. It is even a sonnet, the form he also uses for the lovers' first conversation.",
    },
    more: "The Prologue presents the lovers' love as death-mark'd, so fate seems to rule the play from its first lines.",
    tip: "Explain the effect of knowing the ending: the audience's knowledge turns every hopeful scene into a painful one.",
  },
  'In "Ozymandias", how does the use of a second-hand account affect the poem\'s message about power?':
    {
      why: "The poem's speaker repeats what a traveller told him, about a statue a sculptor made of a king. Ozymandias reaches us only through layers of other people's words, so even his story has shrunk, just like his power.",
      not: {
        "It proves the traveller's story is false":
          'The layers do put distance between us and the king, but the point is not that the story is false. Even his fame survives only as a report.',
        'It shows the king is still remembered by all':
          "He is remembered only through a stranger's report of a ruin. The frame shrinks his fame rather than proving it.",
        'It shows the statue is still standing whole':
          "The statue is broken: two 'vast and trunkless legs' stand, and the face lies 'shattered' in the sand.",
      },
      more: "The opening line, 'I met a traveller from an antique land', puts the king at three removes: speaker, traveller, sculptor. The poem itself becomes what keeps his memory alive.",
      tip: 'Comment on narrative voice: explain how the layered telling supports the theme of power fading over time.',
    },
  'How does Bronte use Bertha Mason in Jane Eyre as a Gothic double for Jane?': {
    why: "Bertha, Rochester's first wife, is locked in the attic and bursts out in violent rage. Many critics read her as Jane's dark double: the anger Jane felt as a child, which she must control to be accepted.",
    not: {
      "She is Jane's long-lost elder sister":
        "They are not related. Bertha is Rochester's secret wife, hidden at Thornfield until the wedding is stopped.",
      'She only exists to set fire to the house':
        'She does set Thornfield on fire, but she also carries symbolic meaning about passion and confinement.',
      'She looks exactly like Jane, a true twin':
        'They look very different. Bertha is a big woman, almost as tall as Rochester; Jane is small and plain.',
    },
    more: 'This reading comes from the critics Gilbert and Gubar, whose book The Madwoman in the Attic (1979) is named after Bertha. Both women are locked away: Jane in the red-room, Bertha in the attic.',
    tip: 'Use a critical reading to extend your point, but always tie it back to evidence in the novel.',
  },
  'In "London" by Blake, how does the repetition of "every" create meaning?': {
    why: "Blake repeats 'every' again and again, as in 'In every cry of every man'. The word leaves no exceptions: everyone the speaker meets is suffering, so the oppression feels total and inescapable.",
    not: {
      'It gives the poem a cheerful, bouncy beat':
        'The poem is bleak and angry. The repeated word builds a heavy, relentless rhythm, not a cheerful one.',
      'It lists only the richest people of London':
        'The people named are chimney-sweeps, soldiers and young harlots, the poor and powerless, not the rich.',
      'It counts the people Blake met that day':
        "'Every' is not a count. It means without exception, so the suffering is everywhere.",
    },
    more: "Repeating the same words at the start of lines is called anaphora. Blake uses it with 'In every', making the poem sound like a list of charges against society.",
    tip: 'Name the technique precisely and explain its effect: anaphora creates an overwhelming sense that suffering is everywhere.',
  },
  'In "War Photographer" by Duffy, how does the domestic setting of the darkroom contrast with the war zones?':
    {
      why: 'The photographer develops his pictures in a quiet, orderly darkroom in England, far from the chaos he recorded abroad. The contrast shows how easily safe, comfortable people can ignore suffering that is far away.',
      not: {
        'The photographer prefers being at home':
          'He is back home, but the poem shows him troubled by what he saw. It is not about which place he prefers.',
        'The darkroom is a cheerful, noisy place':
          'The darkroom is quiet and solemn, compared to a church. It is not cheerful or noisy.',
        'Duffy writes only of her own war travels':
          'Duffy was inspired by her friendship with war photographers. The poem is about their work, not about her own travels.',
      },
      more: "Readers of the Sunday paper feel sad for a moment, then forget. Duffy suggests the photographer's work cannot make comfortable people care for long.",
      tip: "Comment on juxtaposition: explain how placing calm England beside war zones creates the poem's criticism of public indifference.",
    },
  'How does Stevenson use Mr Utterson as a narrative device in Jekyll and Hyde?': {
    why: 'We follow Utterson, a calm, rational lawyer, as he slowly uncovers the truth. Because he does not guess it, nor do we, so the final revelation that Jekyll and Hyde are one man is all the more shocking.',
    not: {
      'He is secretly the real villain of the story':
        'Utterson is a loyal friend trying to protect Jekyll. Hyde is the villain.',
      'He is a minor figure who appears only once':
        'Most of the story is seen through his investigation. Without him there would be no mystery to follow.',
      'He provides comic relief in a dark tale':
        'Utterson is serious and reserved. He brings suspense, not comedy.',
    },
    more: "Utterson is described as 'lean, long, dusty, dreary and yet somehow lovable'. His reserved, respectable nature reflects Victorian gentlemen who prefer not to ask awkward questions.",
    tip: "Discuss narrative structure: the truth is held back until Lanyon's and Jekyll's own accounts, which keeps the reader in suspense.",
  },
  'In "The Émigrée" by Rumens, how does the poet present memory as resistance?': {
    why: 'The speaker left her city as a child but keeps a bright, sunlit memory of it, even though news suggests war and tyranny have reached it. Holding on to that memory is a way of refusing to let the city, or herself, be erased.',
    not: {
      'Her memory is poor and keeps failing her':
        'Her memory is vivid and strong. The point is how fiercely she keeps it.',
      'She has returned to live in the city now':
        'She cannot go back. The poem shows her keeping the city alive in memory instead.',
      'She wants to forget the city completely':
        'The poem is about remembering, and refusing to let memory be taken away.',
    },
    more: 'An émigrée is a woman who has left her country, often for political reasons. Rumens leaves the city unnamed, so it could stand for many places people have had to flee.',
    tip: 'Link memory to power: explain how a private memory can resist a powerful state.',
  },
  "In Frankenstein, how does Shelley use the Arctic setting to frame the novel's themes?": {
    why: "The novel begins and ends in the frozen Arctic, where Walton is pushing towards the North Pole. The cold, empty ice mirrors Victor's isolation and shows where reckless ambition leads.",
    not: {
      'The Arctic was a popular holiday destination':
        "The Arctic was a place of risky exploration in 1818, not tourism. Walton's ship is trapped in the ice.",
      'Shelley wanted a cheerful, festive backdrop':
        "The Arctic is dangerous and deadly: Walton's crew fear for their lives and Victor dies there. Nothing is festive.",
      "It shows Shelley's own love of cold weather":
        "The setting is chosen for its meaning, not the writer's taste in weather.",
    },
    more: "Walton's quest for glory mirrors Victor's. In the end his crew force him to turn back; Walton calls it cowardice, but readers may see an escape from the fate that destroyed Victor.",
    tip: 'Use the frame setting to discuss ambition: compare Walton and Victor, and explain what the ice symbolises.',
  },
  'In Great Expectations, how does Dickens use Estella to explore the theme of class?': {
    why: "Miss Havisham raises Estella to break men's hearts, and Estella treats Pip with cold scorn for being common, mocking his coarse hands and thick boots. Her lessons in cruelty make Pip ashamed of his class.",
    not: {
      'She is a kind, warm, middle-class friend to Pip':
        'Estella is raised as an upper-class lady and is cold and scornful to Pip. Her cruelty is what makes him ashamed.',
      'She stands for the honest working class':
        'Her birth parents turn out to be a convict and a servant, but she is raised as a lady and scorns Pip for being common.',
      'She is a servant hired by Miss Havisham':
        "She is Miss Havisham's adopted daughter, raised as a lady, not a servant.",
    },
    more: "The twist that Estella is Magwitch's daughter shows that class is an accident of upbringing, not a sign of worth. The lady Pip worships was born to the lowest class.",
    tip: "Use Estella's hidden parentage to show how Dickens questions the class system.",
  },
  'In "Poppies" by Weir, how does the poet use time to structure the mother\'s grief?': {
    why: 'The mother moves from the moment her son left, back to memories of him as a little boy, then forward to her walk to the war memorial. Memory and the present blur, showing how grief collapses time.',
    not: {
      'The poem follows a strict, clear and simple timeline':
        'It loosely follows her day, but memories of his childhood keep breaking in, so time is not strict.',
      'The poem is set entirely in the future':
        'It is told mainly in the past tense, looking back on her son leaving and on memories of his childhood.',
      'Time does not matter at all in the poem':
        'Time is central: the poem opens at a precise moment just before Armistice Sunday and moves between past and present.',
    },
    more: 'At the end she hopes to hear his childhood voice on the wind, merging the boy he was with the son she has lost.',
    tip: "Comment on structure: explain how shifts in time show the mother's grief, not just what happens.",
  },
  'In Animal Farm, how does Orwell use Boxer to represent the working class?': {
    why: "Boxer is the farm's strongest worker, with the mottoes 'I will work harder' and 'Napoleon is always right'. When he collapses, the pigs sell him to the knacker for money, showing how rulers use loyal workers and then discard them.",
    not: {
      'Boxer is clever and questions the pigs':
        'Boxer is loyal and slow to question. He cannot learn the alphabet beyond the letter D.',
      'Boxer stands for the comfortable middle class':
        'He stands for ordinary labourers, the working class who did the hardest work.',
      'Boxer leads a successful rebellion':
        'He never rebels against the pigs. His loyalty is what makes his betrayal so painful.',
    },
    more: "The pigs buy whisky with the money from Boxer's sale, while Squealer claims he died in hospital. Orwell shows how propaganda covers up cruelty.",
    tip: "Use Boxer to discuss exploitation, and explain why his blind loyalty matters as much as the pigs' cruelty.",
  },
  'In "Bayonet Charge" by Hughes, how does the shift from "he" to describing a "yellow hare" create meaning?':
    {
      why: 'In the middle of the charge, the soldier sees a yellow hare flung up by the gunfire, rolling and crawling in pain. Its blind, desperate terror mirrors his own: he too is reduced to an animal trying to survive.',
      not: {
        'The soldier breaks off the charge to hunt it':
          'He is charging at the enemy, not hunting. The hare is a victim of the gunfire, like him.',
        'It is a sign that the battle is now won':
          'Nothing is won. The hare marks the moment the soldier abandons his ideals and runs on in pure fear.',
        "The hare stands for the enemy's cowardice":
          'The hare is not the enemy. It is caught in the gunfire, as helpless as the soldier.',
      },
      more: "Just before, time almost freezes as the soldier wonders why he is running at all. The hare's suffering shows the violence of war reaching even innocent nature.",
      tip: 'Explain how the animal image connects to the soldier, rather than describing the hare alone.',
    },
  'In Macbeth, how does Shakespeare present the relationship between Macbeth and Lady Macbeth as a reversal of gender expectations?':
    {
      why: "At first Lady Macbeth drives the murder, mocking her husband's courage: 'When you durst do it, then you were a man'. After the murder their roles swap: she falls apart in guilt while he grows ruthless.",
      not: {
        'She obeys her husband from first to last':
          'She dominates in Act 1, pushing Macbeth to kill Duncan.',
        'Their marriage is ordinary and calm':
          'Their marriage is close at first, but it is built on a murder plot, and it breaks down.',
        'Gender plays no part in the play at all':
          "Gender is central: Lady Macbeth calls on spirits to unsex her, and challenges Macbeth's manhood.",
      },
      more: "By Act 3 Macbeth plans Banquo's murder without telling her. In Act 5, told of her death, he answers with weary despair rather than grief: 'She should have died hereafter.'",
      tip: 'Show the change across the play: compare their relationship in Act 1 with Acts 3 and 5.',
    },
  'In "Checking Out Me History" by Agard, how does the contrast between colonial and Caribbean histories serve the poem\'s argument?':
    {
      why: 'Agard sets British history beside the folk tale of Dick Whittington and nursery rhymes such as Old King Cole, making it sound trivial. Caribbean heroes get vivid, reverent stanzas. The contrast exposes an education that taught him fairy tales but ignored the heroes of his own history.',
      not: {
        'Both histories are given equal respect':
          'They are deliberately unequal: one mocked through nursery rhymes, the other celebrated.',
        'Agard shows he prefers British history':
          'He criticises the way British history was taught to him, and reclaims Caribbean history.',
        'The poem makes no political argument at all':
          'The poem protests against a colonial education, and ends with the speaker claiming his own identity.',
      },
      more: "Heroes such as Toussaint L'Ouverture, who led the Haitian Revolution, and Mary Seacole, who nursed soldiers in the Crimean War, are set against figures like Florence Nightingale, whom he was taught about.",
      tip: "Comment on the poem's contrasts in content and form, and link them to its purpose: reclaiming identity.",
    },
  'In Jekyll and Hyde, how does Stevenson use the physical contrast between Jekyll and Hyde to explore Victorian anxieties?':
    {
      why: "Hyde is smaller and younger than Jekyll because Jekyll's evil side has been less developed, and people who meet him sense a deformity they cannot name. Victorians feared that respectable men hid stunted, monstrous desires.",
      not: {
        'Jekyll and Hyde look exactly the same':
          'Hyde is small and pale and gives an impression of deformity, while Jekyll is a large, handsome man of fifty.',
        'The contrast is only physical, not moral':
          "The bodies carry meaning: Hyde's stunted form reflects the hidden, less developed side of Jekyll.",
        'Hyde is simply drawn to look frightening':
          "Hyde is disturbing, but his appearance also has a purpose: it shows what Jekyll's repressed side looks like.",
      },
      more: "Victorian ideas about degeneration, and Darwin's theory of evolution, made readers fear that humans could slip back into something more primitive. Hyde attacks Carew with 'ape-like fury'.",
      tip: "Link appearance to context: explain what Hyde's body suggests about Victorian fears of what respectable people hide.",
    },
  'In "Dulce et Decorum Est", how does Owen\'s use of the present tense in the third stanza create impact?':
    {
      why: "The second stanza tells the gas attack in the past tense: 'I saw him drowning.' Then the two-line third stanza switches to the present: 'He plunges at me'. The dying man returns in every dream, so for Owen the attack is never over.",
      not: {
        'It shows the attack is happening as he writes':
          "The attack is over; it is the nightmare that recurs. The stanza begins 'In all my dreams'.",
        'Poems are always written in the present tense':
          'Poems can use any tense. Owen tells the march and the gas attack in the past tense, so the switch to the present stands out.',
        'It shows the soldier has survived the gas':
          "The present tense shows him dying again and again in the speaker's dreams, not surviving.",
      },
      more: "The third stanza is only two lines long, set apart like a recurring nightmare. 'In all my dreams' shows the memory returns again and again.",
      tip: 'When a tense changes, ask what it shows about time and memory. Here it suggests trauma that does not stay in the past.',
    },
  "In Macbeth, after Duncan's murder, day turns dark and his horses eat each other. Which piece of context best explains why Shakespeare makes nature react?":
    {
      why: 'Many in 1606 believed in the divine right of kings: a king was appointed by God, at the top of a natural order. Killing one was a crime against God and nature, so Shakespeare makes nature itself rebel.',
      not: {
        'Scotland had no kings in 1606, so the story was pure fantasy':
          "Scotland had kings: in 1606 its king, James VI, was also England's James I, and the play flatters his ancestry through Banquo.",
        'Shakespeare wrote it for Elizabeth I, who had just been murdered':
          'Elizabeth I died of illness in 1603. Macbeth was written about 1606, early in the reign of James I.',
        'Horses really were known to eat meat in times of great famine':
          'The detail is not natural history. Ross and an old man report it as a sign that nature has been thrown into disorder.',
      },
      more: 'The Gunpowder Plot of 1605 had tried to blow up James and Parliament. An audience the following year would feel the horror of regicide sharply.',
      tip: 'Context earns marks when it explains a choice. Link the belief to a precise detail: here, the unnatural signs after the murder.',
    },
  'In Macbeth, the witches are real and powerful, not foolish old women. Which piece of context best explains this choice?':
    {
      why: 'James I believed witches had plotted against him and wrote a book about them, Daemonologie, in 1597. A play for his court that showed witches as truly dangerous, tempting a man to kill his king, suited its royal audience.',
      not: {
        'By 1606 most people saw witches as harmless village healers':
          'Belief in witchcraft was strong: a new law against it was passed in 1604, the year after James came to the English throne.',
        'The play was banned for showing witchcraft until the 1800s':
          'The play was performed at court and in the theatre. Nothing suggests it was banned.',
        "Shakespeare's own mother had been tried as a witch in Stratford":
          "There is no record of Shakespeare's mother, Mary Arden, being tried as a witch.",
      },
      more: 'James had attended witch trials in Scotland in the 1590s, where accused witches were said to have raised storms against his ship.',
      tip: 'Use context to explain why the witches matter, then return to the text: their prophecies tempt, but Macbeth chooses.',
    },
  'In An Inspector Calls, Birling calls the Titanic "unsinkable, absolutely unsinkable". Which piece of context best explains Priestley\'s choice?':
    {
      why: 'The play is set in spring 1912, and Birling says the Titanic sails next week. The 1945 audience knew it sank on its first voyage that April, so his confidence becomes dramatic irony: everything he predicts is wrong.',
      not: {
        'The Titanic sank in 1945, the year the play was first staged':
          'The Titanic sank in April 1912. The play was first staged in 1945, thirty-three years later.',
        'Priestley had sailed on the Titanic and survived the wreck':
          'Priestley was never on the Titanic. The point is that his audience knew its fate.',
        'In 1912 the Titanic was still being built, so nobody knew of it at all':
          'Birling says the Titanic sails next week, and it did, in April 1912. Everyone knew of it.',
      },
      more: 'Birling also says war with Germany will never come. Priestley piles up wrong predictions so the audience stops trusting his view of society too.',
      tip: 'Explain dramatic irony through context: say what the 1945 audience knew that Birling, in 1912, did not.',
    },
  "In A Christmas Carol, the Ghost of Christmas Present reveals two starving children, Ignorance and Want. Which piece of context best explains Dickens's choice?":
    {
      why: "In 1843 Dickens read a government report on the labour of poor children, and he was horrified. He planned a pamphlet on behalf of the poor man's child, then wrote the Carol instead, and made Ignorance and Want the children society refuses to see.",
      not: {
        'Dickens wrote it in 1900, long after all child labour had ended':
          'A Christmas Carol was published in December 1843. Child labour was still common.',
        'Victorian law gave every poor child free food and schooling':
          'There was no such law. Poor children could end up in the workhouse, which the novella attacks.',
        'Dickens grew up rich and never once saw real poverty himself':
          'Dickens was sent to work in a blacking factory at twelve, when his father was jailed for debt.',
      },
      more: "The Ghost warns Scrooge to beware 'most of all' the boy, Ignorance. Dickens believed that educating the poor mattered as much as feeding them.",
      tip: "Context about poverty gives weight to the Ghost's warning. Link the report to the image, then to Dickens's message for readers.",
    },
  'In Pride and Prejudice, Mrs Bennet is desperate to see her five daughters married. Which piece of context best explains her anxiety?':
    {
      why: "Longbourn is entailed: on Mr Bennet's death it must pass to the nearest male heir, his cousin Mr Collins. With no sons, his daughters will have little money and no home, so a good marriage is their security.",
      not: {
        'Daughters could inherit freely, so the girls were already rich':
          'The entail stops the daughters inheriting Longbourn. Their own fortunes are small.',
        'Mr Bennet has gambled the family fortune away in London':
          'Mr Bennet is careless with money, but he has not gambled the estate away. The problem is the entail.',
        'Unmarried women in 1813 were made to leave England at thirty':
          'No such law existed. The real danger was poverty: few respectable jobs were open to women.',
      },
      more: 'Charlotte Lucas marries the ridiculous Mr Collins for exactly this reason: she wants a comfortable home. Austen shows marriage as an economic necessity for women, as well as a matter of love.',
      tip: "Use the entail to explain behaviour: Mrs Bennet's matchmaking looks foolish, but her fear is reasonable.",
    },
  'In Great Expectations, Magwitch risks his life by returning from New South Wales. Which piece of context best explains the danger?':
    {
      why: "Magwitch was transported for life, sent to the Australian colonies as punishment. Returning to England without permission was a capital crime, so his visit to Pip puts his life in Pip's hands.",
      not: {
        'New South Wales was at war with Britain in the 1820s':
          'New South Wales was a British colony, not at war with Britain.',
        'Convicts had to serve in the navy for the rest of their lives':
          'Transported convicts were sent to work in the colonies, not to serve in the navy.',
        'Anyone who had been to Australia was banned from London':
          'The ban was on returning to England at all, not on London alone, and the penalty was death.',
      },
      more: "Pip's horror at owing everything to a convict, and his growing loyalty as he hides him, become the moral heart of the novel's final part.",
      tip: 'Context can raise the stakes of a scene. Say what the law meant for Magwitch, then what it shows about Pip that he still helps him.',
    },
  'In Jane Eyre, Lowood school is cold, hungry and riddled with disease, and Helen Burns dies there. Which piece of context best explains this portrait?':
    {
      why: "Charlotte Brontë and her sisters were sent to the Clergy Daughters' School at Cowan Bridge. Her elder sisters Maria and Elizabeth fell ill there and died in 1825. Lowood draws on that school, and Helen Burns on Maria.",
      not: {
        'Brontë had run a happy school of her own before writing it':
          'The sisters did later plan a school of their own, but it never found pupils. Lowood draws on the harsh school of her childhood.',
        'Victorian law made every girl attend a boarding school by ten':
          'No law made girls attend boarding school. Schooling was not compulsory in England until 1880.',
        'Schools in 1847 were run by the state and inspected weekly':
          'Schools like Lowood were run by charities and churches, with little inspection.',
      },
      more: "Mr Brocklehurst, Lowood's hypocritical treasurer, is often linked to William Carus Wilson, who founded the school at Cowan Bridge.",
      tip: "Biography counts as context when it explains a choice. Link Brontë's experience to a specific detail at Lowood.",
    },
  'In Frankenstein, Victor brings his creature to life with a "spark of being". Which piece of context best explains the science behind the scene?':
    {
      why: "Galvani and others had made the muscles of dead frogs, and even dead criminals, twitch with electric shocks. In her introduction Shelley says galvanism had given 'token' that a corpse might be reanimated, which made Victor's 'spark' feel possible.",
      not: {
        'Doctors in 1818 had already brought dead patients back to life':
          "No one had brought the dead back to life. The novel's horror lies in Victor doing what no one had done.",
        'Shelley trained as a surgeon at a hospital in Geneva':
          'Mary Shelley had no medical training; women were not admitted to medicine. She was eighteen when she began the novel.',
        "Electric light had just been invented and lit Europe's cities":
          'Electric light came decades later, around 1880. Frankenstein was published in 1818.',
      },
      more: "The novel's subtitle, The Modern Prometheus, links Victor to the Titan who stole fire from the gods. Science gives him a new fire, and he is punished for it.",
      tip: 'With science fiction, explain what science the first readers knew, then how the writer pushes it into terror.',
    },
  'At the end of Lord of the Flies, the naval officer says: "Jolly good show. Like the Coral Island." Which piece of context best explains Golding\'s choice?':
    {
      why: "R. M. Ballantyne's The Coral Island (1857) shows shipwrecked British boys staying brave and civilised. Golding, who had served in the navy in the Second World War, wrote his novel as a darker answer, and the officer's cheerful words show how little he understands.",
      not: {
        'It was the name of the cruiser that had come to rescue them all':
          "The ship is a 'trim cruiser', never named. The Coral Island is a book.",
        'Golding himself had written The Coral Island as a young boy':
          'The Coral Island was written by R. M. Ballantyne in 1857, decades before Golding was born.',
        'It was a film about the war that the officer had just seen':
          "It is a Victorian novel, not a war film. The officer reaches for a boys' adventure story.",
      },
      more: 'The irony runs deeper: the officer is himself fighting a war, so the adults are no more civilised than the boys.',
      tip: 'When a text alludes to another, name the source and say how the writer answers it.',
    },
  "In Animal Farm, Napoleon's dogs chase Snowball off the farm, and he is blamed for every disaster after. Which piece of context best explains this?":
    {
      why: "Snowball stands for Leon Trotsky, Stalin's rival after Lenin's death. Stalin forced him out of the Soviet Union in 1929 and blamed him for sabotage and failures for years, as Napoleon blames Snowball for the fallen windmill.",
      not: {
        'Snowball stands for Churchill, whom Hitler drove out of Britain':
          'Snowball stands for Trotsky. Churchill was never driven out of Britain.',
        'Lenin had exiled Stalin from Russia in 1924 after a farm quarrel':
          'Lenin died in 1924, and Stalin rose to power after him. Stalin did the exiling.',
        "Snowball is based on Mr Jones, the farm's first and cruel owner":
          'Mr Jones is a separate character, the drunken farmer the animals overthrow. He stands for the Tsar.',
      },
      more: "Orwell wrote the fable in 1943 to 1944, when Stalin was Britain's ally in the war, and several publishers refused it for that reason.",
      tip: 'Use the allegory carefully: name the historical figure, then show how a detail in the fable matches what happened.',
    },
  "In The Merchant of Venice, Shylock earns his living lending money at interest. Which piece of context best explains why Shakespeare's Jewish character has this trade?":
    {
      why: 'The Church taught that charging interest, usury, was a sin for Christians. In many European cities moneylending was one of the few trades open to Jews, who were barred from much else, so the stereotype of the Jewish moneylender grew.',
      not: {
        'Jews ran every bank in London when the play was first staged':
          "Jews had been expelled from England in 1290 and were not readmitted until the 1650s. Few lived openly in Shakespeare's London.",
        'Venetian law ordered all moneylenders to be Jewish by birth':
          'No such law existed. Venice confined its Jews to the Ghetto and limited their trades.',
        'Shakespeare himself had borrowed money from a Jewish lender':
          "There is no record of this. The trade comes from European history and stereotype, not Shakespeare's own debts.",
      },
      more: 'Antonio lends money without interest and despises Shylock for charging it. The play lets the audience see the hatred on both sides.',
      tip: 'Context about prejudice should sharpen your reading, not excuse the text: say what the audience believed and how the play both uses and questions it.',
    },
  "The Tempest opens with a ship wrecked on a strange island in a storm. Which piece of context best explains Shakespeare's choice?":
    {
      why: 'In 1609 the Sea Venture, carrying colonists to Virginia, was wrecked on Bermuda; everyone survived and the island was thought enchanted. Accounts of it reached London by 1610, and the play, written about 1610 to 1611, echoes them.',
      not: {
        'Shakespeare had been shipwrecked on a Greek island in his youth':
          "There is no record of Shakespeare ever going to sea. The play draws on others' reports.",
        'The Spanish Armada had been wrecked off Bermuda in 1588':
          "The Armada's ships were wrecked off Scotland and Ireland in 1588, not Bermuda.",
        "The play was written for a sailors' guild in Bristol":
          "The play was performed by Shakespeare's company, the King's Men, at court and in London.",
      },
      more: "The settling of Virginia also lies behind Prospero's rule of the island and Caliban's claim that it was his first.",
      tip: "Use context to open up a reading: here, the play's island can be read as a picture of colonial power.",
    },
  'Julius Caesar, first staged in 1599, shows Rome falling into civil war after its leader is killed. Which piece of context best explains why this would grip its audience?':
    {
      why: "In 1599 Elizabeth I was in her sixties, unmarried and with no heir. Many feared that her death would bring a struggle for the throne, so a play about a leader's murder and the civil war after it touched a live fear.",
      not: {
        'Elizabeth I had just been killed by a group of her nobles':
          'Elizabeth I died of illness in 1603, four years after the play was staged.',
        'England had become a republic ruled by its own senate in 1590':
          'England remained a monarchy. A republic came only briefly, after 1649.',
        "The Pope had crowned Elizabeth's successor in Rome that year":
          "England was Protestant and rejected the Pope's authority. James VI of Scotland succeeded Elizabeth in 1603.",
      },
      more: "The play never settles whether killing Caesar was right. Brutus's ideals and Antony's rhetoric pull the audience both ways.",
      tip: "Tie context to the play's open question: was the killing of a powerful ruler justified, and at what cost?",
    },
  "In Twelfth Night, Viola disguises herself as a young man and Olivia falls for her. Which piece of context adds a further twist for Shakespeare's first audience?":
    {
      why: "No women acted on the public stage in Shakespeare's time; boys played the female parts. So the audience watched a boy playing Viola playing Cesario, and the play's games with gender and desire gain an extra layer.",
      not: {
        'Women had just been allowed to act, and Viola was the first role':
          'Women did not act on the English public stage until 1660, after the theatres reopened.',
        'Disguise was banned on stage, so the play caused a famous riot':
          'Disguise was common on stage. Nothing suggests the play caused a riot.',
        'Shakespeare himself played Viola in the very first performance':
          'There is no record of this, and he was a grown man. Viola would have been played by a boy actor.',
      },
      more: 'Lines about acting a part work on several levels at once: for Olivia, for the audience, and for the boy actor saying them.',
      tip: 'When context concerns performance, say what the first audience saw on stage and how it changes the meaning of a line.',
    },
  'In Much Ado About Nothing, Claudio shames Hero at the altar over a false report that she has been unfaithful. Which piece of context best explains why one accusation ruins her?':
    {
      why: "In the play's world a woman's honour, and her family's, depended on her chastity. A single public accusation, believed by her fiancé and her father, is enough to destroy her, which is why the Friar has her pretend to be dead.",
      not: {
        'Women in Messina could be jailed for speaking to any soldier':
          'No such law appears in the play. The danger to Hero is shame, not prison.',
        'Hero had already broken her engagement to another prince':
          'Hero has no earlier engagement. She is falsely accused of meeting a lover the night before her wedding.',
        "Claudio was Hero's brother and had to protect the family":
          "Claudio is Hero's fiancé, not her brother. Leonato, her father, is the one who turns on her.",
      },
      more: "Beatrice's fury, 'O God, that I were a man', shows the anger of a woman who cannot herself fight to clear her cousin's name.",
      tip: "Link context to a character's reaction: here, Leonato's instant belief in the accusation shows how fragile a woman's reputation was.",
    },
  'A play first performed about 1606, when James I was urging the union of England and Scotland, opens with an old king dividing his kingdom between his daughters. Which sentence uses that context best?':
    {
      why: 'It uses the context to explain how the audience would judge the choice: in a court eager for unity, dividing a kingdom looks like folly. The context is woven into the point about the play, not stated beside it.',
      not: {
        'The play was written by Shakespeare in about 1606, at a time when James I was the king of both England and Scotland.':
          'Accurate facts, but they sit beside the play without explaining anything in it. Context earns credit when it sheds light on a choice.',
        'In Jacobean times kings were very powerful and people did not like them, so this king is shown as a bad, cruel ruler.':
          'A sweeping claim, and a wrong one: James believed in the power of kings, and the play does not show the old king as simply cruel.',
        'In the first scene the king asks his daughters how much they love him, then divides his kingdom between two of them.':
          'It retells the scene accurately but uses no context at all.',
      },
      more: "James had styled himself King of Great Britain in 1604. The division leads to war between the old king's heirs, the danger James warned against.",
      tip: "Use context as a reason, not a fact to display: 'Because..., the audience would...' links it to the effect of the writer's choice.",
    },
  'A history play was first staged in 1599, as the Earl of Essex led an English army into Ireland. Its king urges his men: "Once more unto the breach, dear friends, once more". Which sentence uses that context best?':
    {
      why: "It ties the date to the effect: with English soldiers really at war, a king speaking to his men as 'dear friends' offered a stirring, patriotic image. The context explains how the line would land.",
      not: {
        'The play is about a real king who won the Battle of Agincourt in 1415, and Shakespeare wrote it about him in 1599.':
          'True facts, but they are not linked to the line or its effect.',
        'In Elizabethan times everyone loved war and wanted to fight, so the speech would have made the whole audience happy.':
          'A sweeping claim no evidence supports. Many in 1599 feared the Irish war, which went badly.',
        'The king tells his soldiers to go back into the gap in the town walls and fight again, calling them his dear friends.':
          "It explains the line's literal meaning but uses no context.",
      },
      more: "The Chorus to Act 5 compares the king's return to a general coming home from Ireland, one of the few times Shakespeare points to events of his own day.",
      tip: "Context works best inside a 'because' clause that explains the audience's reaction to a specific line.",
    },
  'A poem of 1842 is spoken by a Renaissance duke, probably based on a Duke of Ferrara whose young wife died in 1561. He says: "I gave commands; / Then all smiles stopped together." Which sentence uses that context best?':
    {
      why: "It links the setting to the effect of a precise phrase: in a court where a duke's word was law, a calm 'I gave commands' implies a death without naming it. The context sharpens the reader's horror.",
      not: {
        'Robert Browning was a Victorian poet who married Elizabeth Barrett in 1846 and wrote many dramatic monologues.':
          'Accurate facts about Browning, but they explain nothing in the line.',
        'In the past all husbands were cruel to their wives, so the Duke is just a normal man of his own time and place.':
          'A sweeping claim the poem does not support. The Duke is shown as monstrous, not normal.',
        'The Duke says he gave some orders, and after that his wife stopped smiling at people, which made him much happier.':
          "It paraphrases the line and misses its menace: 'all smiles stopped' implies her death, not a change of mood.",
      },
      more: 'Browning never says what the commands were. Leaving it to the reader makes the Duke more frightening, and the context makes the worst reading likely.',
      tip: 'With historical context, explain what the setting allows: here, a ruler whose orders could end a life.',
    },
  'Blake printed one poem in Songs of Experience (1794) as a partner to "The Lamb" in Songs of Innocence. Its speaker asks a tiger: "Did he who made the Lamb make thee?" Which sentence uses that context best?':
    {
      why: 'It uses the pairing to deepen the question: the reader is meant to hold the lamb and the tiger together and wonder how one maker made both. The context explains why the question is so unsettling.',
      not: {
        'William Blake was born in London in 1757, and he was a poet, a painter and an engraver as well as a printer of books.':
          'True facts about Blake, but they do not explain anything in the line.',
        'In the eighteenth century people believed in God much more than now, so the poem is simply about religion and faith.':
          'A generalisation that flattens the poem. Its question troubles faith rather than simply expressing it.',
        'The speaker asks whether the same maker who made the lamb also made the frightening tiger that he describes in the poem.':
          'It restates the question accurately but uses no context.',
      },
      more: 'Blake engraved and coloured his own books, setting the two poems in separate collections that answer each other: innocence and experience as two states of the human soul.',
      tip: 'When poems are paired, use the pairing as context: what does reading them together reveal?',
    },
  'A novel of 1925 is set in the boom years of the 1920s. Between the rich suburbs and New York lies "a valley of ashes". Which sentence uses that context best?':
    {
      why: 'It turns the setting into a point about the period: the boom made some very rich, and the ash heaps between the mansions and the city show who paid. The context explains the choice of setting.',
      not: {
        'F. Scott Fitzgerald was born in Minnesota in 1896 and married Zelda Sayre, who inspired many of his characters.':
          'True facts about the author, but they say nothing about the valley of ashes.',
        'In the 1920s everyone in America was rich and happy, so the valley of ashes is just a dull place to drive through.':
          'A false generalisation: the 1920s boom left many poor, which is exactly what the valley shows.',
        'The characters drive through the valley of ashes on their way to New York, past a garage owned by George Wilson.':
          'It describes what happens there accurately but uses no context.',
      },
      more: "The Wilsons live in the valley, and it is there that the novel's tragedy strikes. The ash suggests the waste left behind by the rich.",
      tip: 'Setting is often the best place to use context: ask what a place shows about the society of the time.',
    },
  "H. G. Wells's novel of 1898, in which Martians invade and conquer southern England, appeared when Britain ruled the largest empire in the world. Which sentence uses that context best?":
    {
      why: "It uses the empire to explain the novel's purpose: by putting the British in the place of the conquered, Wells turns the invasion into a mirror. The context changes what the story means.",
      not: {
        'H. G. Wells was born in Kent in 1866 and also wrote The Time Machine and The Invisible Man in the same decade.':
          "True facts about Wells, but they do not explain the invasion's meaning.",
        'In Victorian times people were very afraid of Martians, so the novel would have frightened its readers very much.':
          'Victorians did not fear real Martians. The fear the novel works on is of being conquered, as Britain conquered others.',
        'In the novel the Martians land on Horsell Common, attack Woking with the Heat-Ray and then march on London.':
          'It summarises the plot accurately but uses no context.',
      },
      more: "Wells's first chapter makes the comparison himself, recalling how European settlers wiped out the Tasmanians. The novel asks whether people who did that can complain.",
      tip: 'When a story reverses who holds power, use context to show who would normally be the victim, and what the reversal asks the reader to feel.',
    },
  'In Jane Eyre (1847), which Charlotte Brontë first published under the name Currer Bell, Jane says that "women feel just as men feel". Which sentence uses that context best?':
    {
      why: "It connects the pseudonym to the line's argument: a woman who had to hide her sex to be read fairly gives her heroine a demand for fairness. The context sharpens why the speech matters.",
      not: {
        'Charlotte Brontë was born in Yorkshire in 1816 and had two sisters, Emily and Anne, who were also novelists.':
          'True facts about Brontë, but they do not explain the line.',
        'In Victorian times women were not allowed to have any feelings, so Jane is breaking the law when she speaks.':
          'A false generalisation: no law forbade feelings. The speech challenges custom, not the law.',
        'Jane says that women have the same feelings as men and need to use their minds, just as their brothers do.':
          'It paraphrases the line accurately but uses no context.',
      },
      more: "Brontë later wrote that she and her sisters chose names that were not obviously women's because women writers were often judged with prejudice.",
      tip: 'Link biography to a precise line, and say what the context adds to its force.',
    },
  'In Romeo and Juliet, the Prologue calls the lovers "star-cross\'d". Many Elizabethans believed the stars shaped human lives. Which sentence uses that context best?':
    {
      why: "It uses the belief to explain the word's force: to an audience who took astrology seriously, 'star-cross'd' would sound like a sentence already passed. The context explains the effect of the choice.",
      not: {
        'Romeo and Juliet was written by William Shakespeare in about 1595 and first performed by his company in London.':
          'True facts, but they do not explain the word or its effect.',
        'Elizabethans believed everything was in the stars, so nobody in the play is responsible for anything that happens.':
          "An overstatement the play resists: hasty choices, Tybalt's anger and the Friar's plans all help cause the tragedy.",
        'The Chorus tells the audience at the start that two lovers from two feuding families will both die by the end.':
          'It retells the Prologue accurately but uses no context.',
      },
      more: 'The play keeps both explanations alive: fate, and human error. Romeo cries that he defies the stars just as their plan is closing on him.',
      tip: 'A strong context sentence names the belief, the word it explains, and the effect on the audience, all in one sentence.',
    },
  'Macbeth was written soon after the Gunpowder Plot of 1605, a hidden attempt to kill the king. Lady Macbeth tells her husband to "look like the innocent flower, / But be the serpent under\'t". Which sentence uses that context best?':
    {
      why: "It uses the plot to sharpen the line: traitors smiling loyally had nearly killed the king, so advice to hide a serpent under a flower would sound like a real and recent danger. The context explains the audience's reaction.",
      not: {
        'The Gunpowder Plot took place in 1605, when a group of Catholics planned to blow up King James I and Parliament.':
          'Accurate history, but it is not tied to the line or its effect.',
        'In Jacobean times everybody was a traitor and nobody could be trusted, so Lady Macbeth is a normal woman of her time.':
          'A false generalisation that empties the line of horror. The play presents her advice as monstrous, not normal.',
        'Lady Macbeth tells her husband to look innocent and welcoming to Duncan while secretly planning to murder him.':
          "It explains the line's meaning but uses no context.",
      },
      more: "The play is full of faces that hide hearts. At the end of Act 1 Macbeth agrees to the plan: 'False face must hide what the false heart doth know.'",
      tip: 'Weave context into the analysis of a single image, rather than adding a paragraph of history.',
    },
  'A prince who has seen his father\'s ghost wonders: "The spirit that I have seen / May be the devil". Which piece of context best explains his doubt?':
    {
      why: "Protestant England had rejected the Catholic idea of Purgatory, where souls might wait and return. Many believed an apparition could be a devil taking a loved one's shape to tempt the living, so the prince must test the ghost before acting.",
      not: {
        'Everyone in 1600 knew that ghosts were harmless and kind':
          'Ghosts were widely feared, not thought harmless. That is why he cannot simply trust this one.',
        'The law of Denmark said that only priests could see ghosts':
          'There was no such law. His doubt is religious, about where the ghost has come from.',
        'His father had been a famous magician who raised devils':
          'Nothing suggests his father was a magician. He was a warrior king, murdered by his brother.',
      },
      more: "The ghost itself speaks of being confined in fires until his sins are 'burnt and purg'd away', which sounds like Purgatory. The play leaves the audience as unsure as the prince.",
      tip: "Use religious context to explain a character's hesitation, and link it to what he does next: here, he stages a play to test the king.",
    },
  'A nobleman\'s younger, illegitimate son complains: "Why bastard? wherefore base?" Which piece of context best explains his anger?':
    {
      why: "By law and custom, land passed to the eldest legitimate son. Edmund is younger and illegitimate, so however able he is, he will inherit nothing, and he resents a world that calls him 'base' for his birth.",
      not: {
        'Illegitimate sons were the only ones allowed to inherit land':
          'The opposite: illegitimate sons were barred from inheriting. That is his grievance.',
        "Younger sons always inherited everything in Shakespeare's day":
          'Land usually went to the eldest legitimate son, so younger sons often got little.',
        'It was a crime to be born outside marriage, punished by exile':
          'It was a social shame, not a crime, and the child was not punished by law.',
      },
      more: "He plots to take his brother's inheritance by deceit. The play gives him a strong case and a wicked method, which makes him one of its most gripping villains.",
      tip: 'When a character rails against the rules of their society, use context to show what those rules were, then judge what the character does about them.',
    },
  'In a novel set in New York in 1922, guests whisper that their host, Gatsby, made his fortune in some shady way. Which piece of context best explains the rumours?':
    {
      why: 'Prohibition banned the making and selling of alcohol in the United States from 1920 to 1933. Bootleggers made huge, quick fortunes, so a young man with sudden wealth and lavish parties invited rumours of crime.',
      not: {
        'Every rich man in 1922 had inherited his money from parents':
          "Many fortunes in the boom were new. Gatsby's newness is exactly what makes people talk.",
        'The banks had just been closed, so all money was suspicious':
          'The banks were not closed in 1922; the great crash came in 1929.',
        'Gatsby had openly won his fortune in a national lottery':
          "If he had won it openly there would be no rumours. His fortune's mystery is the point.",
      },
      more: 'Tom later accuses Gatsby of selling alcohol through drugstores. The novel hints at crime without ever showing it, so Gatsby stays a figure of rumour.',
      tip: 'Use historical context to explain what characters suspect, then check what the text actually shows.',
    },
  "In H. G. Wells's novel, the Martians who have crushed every army are finally killed by earthly bacteria. Which piece of context best explains this ending?":
    {
      why: 'Pasteur and Koch had shown in the 1860s to 1880s that microbes cause disease. Wells, who had studied science under T. H. Huxley, gave his readers a believable ending: invaders with no defence against earthly germs.',
      not: {
        'Victorians believed that illness came only from bad luck':
          'Germ theory was well known by 1898. That is why the ending convinced readers.',
        'The British army had used germs as weapons in 1890':
          'There is no record of germ warfare by the British army in 1890. The bacteria in the novel are natural.',
        'Wells had trained as a doctor and cured many plagues':
          'Wells trained in science and taught, but he was not a doctor.',
      },
      more: 'The ending also turns the empire theme: the invaders are beaten not by force but by the smallest living things on the planet they came to take.',
      tip: 'When an ending depends on science, say what the first readers knew, and why that made the ending feel earned.',
    },
  'In a play of about 1606, a nobleman on the run disguises himself as "Poor Tom", a mad beggar, half naked in a storm. Which piece of context best explains the disguise?':
    {
      why: "Bethlem Hospital in London, known as Bedlam, held the mad. Beggars who were mad, or pretended to be, wandered the roads as 'Tom o' Bedlam', a familiar sight, and a perfect disguise for a hunted man.",
      not: {
        'Mad people were treated as saints and given money freely in 1606':
          'Mad beggars were pitied or feared, not treated as saints. Edgar chooses the lowest disguise there is.',
        'The law ordered every nobleman to beg once a year, dressed in rags':
          "There was no such law. The disguise works because it is the opposite of a nobleman's life.",
        'Poor Tom was a famous jester at the court of King James':
          "Poor Tom was a type of beggar, not a real jester. The play's own jester is the Fool.",
      },
      more: "Lear meets 'Poor Tom' in the storm and sees in him 'unaccommodated man', a human being with nothing. The disguise teaches the king what poverty means.",
      tip: 'When a disguise matters, use context to show what the audience would recognise, and what the character learns by wearing it.',
    },
  'In The Danger of a Single Story, Adichie follows a long sentence with "Stories matter. Many stories matter." Which piece of context best explains why she puts her remedy in two short, repeated sentences?':
    {
      why: "TED talks are short prepared speeches delivered to the people in the room. A listener cannot reread, so two short sentences, the second adding a single word, are built to land and be remembered: the whole remedy rests on 'Many'.",
      not: {
        "She wrote it as a newspaper essay in 1960, for readers marking Nigeria's independence":
          'The talk was given in July 2009. Nigeria became independent on 1 October 1960, but Adichie was born in 1977.',
        'It began as a chapter of a memoir written in 1999 about a childhood in Hong Kong':
          "That is the origin of a different anthology text. Adichie's piece is a talk, spoken in the first person to a live audience.",
        'It was a television report she sent from Somalia in 1992, written to a tight deadline':
          "A reporter's account of the Somali famine is the next text in the anthology. Adichie spoke as a novelist at a TED conference.",
      },
      more: "The same reason explains her other speaker's habits: sentences that open with Now and So, the phrase 'single story' eleven times in 83 lines, and an ending she announces before she reaches it.",
      tip: 'Treat the extract as a speech. Name the audience in the room and explain how a method works on listeners who hear each line once.',
    },
  'In Between a Rock and a Hard Place, Aron Ralston writes "Time dilates, as if I\'m dreaming, and my reactions decelerate." Which piece of context best explains his choice of scientific verbs at this moment?':
    {
      why: "Ralston studied mechanical engineering at Carnegie Mellon and worked for Intel before leaving in 2002 to climb. 'Dilates' and 'decelerate' keep an engineer's precision even at the instant of impact, and that precision makes the loss of control more frightening.",
      not: {
        'He trained as a doctor, so he described his own body in the language of the hospital':
          "He was not a doctor. His training was in engineering, which also shows in the 'torque' that moves the stone and the friction he explains.",
        'He wrote these words as a script for the actors in the 2010 film of his ordeal':
          "The book came first, in 2004. The 2010 film was directed by Danny Boyle, and the examiner reads only Ralston's printed words.",
        'He was a television reporter, used to describing violent events fast for the news':
          'That describes a different anthology writer. Ralston slows this moment down rather than reporting it fast.',
      },
      more: 'His training shows across the extract: he measures heights and widths, explains how stemming works and names the forces involved. A mind used to solving problems meets one that, for now, it cannot solve.',
      tip: 'Context earns credit only when it sharpens a point about the words. Link his training to one word choice, then say what it does to the reader.',
    },
  'In Alice Munro\'s "Night", the narrator says "there must have been a cloud around that word". Which piece of context best explains why she reasons about her past, with words like "must have", rather than simply recalling it?':
    {
      why: "Munro grouped Night with three other pieces in her last collection, Dear Life (2012), and called them 'not quite stories', autobiographical in feeling though not always in fact. An old woman rebuilding her childhood reasons about it, so 'must have' admits reconstruction.",
      not: {
        'She wrote it at fourteen, in a diary she kept on the nights when she could not sleep':
          'The narrator looks back from old age and compares then with today. The story appeared in 2012, when Munro was in her eighties.',
        'It was first printed in 1894 in a fashionable New York magazine, under another title':
          'That describes another anthology story, first printed under a different title. Night first appeared in 2012, in the literary magazine Granta.',
        'It first appeared in a Paris newspaper in 1884, for readers who knew its streets':
          'That is the origin of a different anthology story. Night was published in 2012 and draws on a rural childhood.',
      },
      more: "The hedges make the few things she is sure of stand out, above all her father's words on the stoop. The cloud names a family habit too: nobody says the word cancer.",
      tip: "Call the speaker the narrator, not Munro. Then use the context to explain a method: the older narrator's hedging is a choice you can analyse.",
    },
  'In The Bright Lights of Sarajevo by Tony Harrison, the speaker picks out one couple and adds "I think" before saying what the boy is about to do. Which piece of context best explains this hedge?':
    {
      why: "In 1995 The Guardian commissioned Harrison to visit Bosnia and write poems about the war, and the speaker behaves like a reporter. He can see what the boy is about to do but cannot know it, so 'I think' is honesty about the limits of what he knows.",
      not: {
        'Harrison grew up in Sarajevo and was the boy in the poem, recalling his own first love':
          'Harrison was born in Leeds. The speaker is an outsider watching strangers in the dark, and the young people are never given words of their own.',
        'Harrison wrote it in 1917 as a soldier, sending verses home from a hospital in Edinburgh':
          'That belongs to a different poet and a different war. This poem is set during the siege of Sarajevo and recalls a massacre of 1992.',
        'Harrison wrote it as a talk for a live audience in a theatre, to be heard once and not reread':
          "That would fit a speech, not this poem. The hedge is an observer's, about what he can see but cannot know.",
      },
      more: 'The hedge also earns trust. A speaker this careful about a hand-hold is believed when, a few lines later, he reports the mortar attack on the bread queue.',
      tip: "Write about 'the speaker' rather than Harrison, since the poem never names him, then use the commission to explain the watching, unhurried voice.",
    },
  'In A Game of Polo with a Headless Goat, Emma Levine calls the donkey race "Formula One without rules, or a city-centre rush hour gone anarchic". Which piece of context best explains why she reaches for comparisons like these?':
    {
      why: 'Levine, from Bradford, explains a Karachi street race through references her English-speaking readers would know. Formula One is bound by rules and a rush hour is dull, so taking away the rules and the order gives distant readers a vivid picture and a joke at once.',
      not: {
        'She had driven in Formula One herself before she set off on her travels across Asia':
          'Nothing suggests she raced. After graduating in 1991 she travelled in Asia for eight years and wrote about its sports, first cricket.',
        'She grew up in Karachi and wrote for local readers who bet on the donkey races':
          'Levine comes from Bradford, in Yorkshire. Local readers would not need the race explained through motor racing and city traffic.',
        'She wrote it in 1968, while the cartoon she mentions was first being shown':
          'The book was published in 2000. Wacky Races was shown on American television from 1968 to 1969, decades earlier.',
      },
      more: "She does the same with Wacky Races, a cartoon about cheating drivers, and with 'survival of the fittest'. Each borrowed frame makes the unfamiliar familiar, and each falls comically short of two donkeys on a main road.",
      tip: 'Ask whose eyes the reader sees the place through. Explain how a comparison serves a reader far away, then what it suggests about the scene.',
    },
  'Things Fall Apart ends with the title the District Commissioner has chosen for his planned book, "The Pacification of the Primitive Tribes of the Lower Niger". Which piece of context best explains why Achebe gives the coloniser the last word?':
    {
      why: "The novel ends inside the coloniser's head, with a title that calls conquest pacification. Achebe found Mister Johnson superficial and set out to write his own novels about Nigeria, so the reader, who has just finished twenty-five chapters showing the clan in full, is left to reject the Commissioner's version.",
      not: {
        'Achebe had served as a British District Commissioner on the Niger, and the title is the one he gave to his own report':
          "Achebe was a Nigerian writer, born in 1930, not a colonial officer. The Commissioner's view is the one the novel's last line exists to make us reject.",
        'The novel was first published in 1970, ten years after Nigeria won its independence from British colonial rule':
          'It was published in London in 1958, two years before Nigerian independence in 1960. Its first readers met the ending while British rule still stood.',
        "Achebe wrote the novel in Igbo, and its English translator added the Commissioner's book title as the very last line":
          "Achebe wrote in English, leaving Igbo words such as chi and obi untranslated. The title is his own ironic choice, not a translator's addition.",
      },
      more: "Each word of the title is a euphemism or an insult: 'pacification' for conquest, 'primitive tribes' for a society the novel has shown in full. The Commissioner would give Okonkwo 'a reasonable paragraph, at any rate'.",
      tip: "Write clan, society or the Igbo people in your own voice, never the Commissioner's words. Use context where it explains a choice, as here, where knowing what Achebe was answering sharpens the point about the ending.",
    },
  'In Antony and Cleopatra, fearing what Rome will make of her, Cleopatra imagines that she will see "Some squeaking Cleopatra boy my greatness". Which piece of context best explains the joke Shakespeare makes about his own theatre here?':
    {
      why: "The line was spoken on Shakespeare's stage by a male actor, most likely a boy, so the first audience watched exactly what Cleopatra fears as she said it. The joke dares them to laugh, yet her performance, unlike Rome's, is the one thing Caesar cannot control.",
      not: {
        'Women had acted on the London stage since the 1580s, and the part of Cleopatra was written for a famous actress':
          "No women acted on Shakespeare's stage: Cleopatra was played by a male actor, most likely a boy. That is why the line works as a joke at all.",
        'The play was written in 1623 for the First Folio, to be read aloud in schools rather than acted in a theatre':
          'It was written in about 1606 to 1607 and first printed in the 1623 Folio. It was made for the stage, as the joke itself shows.',
        "Only the queen was played by a boy: Charmian and Iras were acted by girls in Shakespeare's own company":
          "No girls acted in Shakespeare's company. Charmian and Iras, like their queen, were played by male actors.",
      },
      more: "This is metatheatre, a moment when a play draws attention to itself as a play. Cleopatra sees life as performance, and she ends the play by restaging the barge of their first meeting: 'I am again for Cydnus / To meet Mark Antony'.",
      tip: "Context earns credit when it changes how a line works in the theatre. Say what the first audience saw as the words were spoken, then what that does to Cleopatra's dignity.",
    },
  'In Princess & The Hustler, Wendell tells his son Junior "Ar soldier. Fight far King an\' country." Which piece of context best explains the bitterness in these words?':
    {
      why: "'King an' country' is the language of wartime recruitment. Thousands of Caribbean men and women answered Britain's call in the Second World War, and many who came afterwards were refused housing and jobs. Wendell's clipped sentences insist on a service that earned him no respect.",
      not: {
        'Jamaica had won its independence in 1948, so by 1963 he had fought for a country no longer his own':
          'Jamaica became independent on 6 August 1962, a few months before the play begins, and many Jamaicans had been brought up to see Britain as the mother country.',
        "The play was first staged in 1963, the year of the boycott, before an audience of Bristol's war veterans":
          'The play opened in February 2019 at Bristol Old Vic. Odimba looks back to 1963 to tell a story she felt had never been told this way.',
        'His words echo Martin Luther King, who gave his most famous speech in America in August 1963':
          "'King an' country' is British recruiting language, naming the monarch Wendell served. Martin Luther King's speech came on the day the colour bar fell.",
      },
      more: "Mavis later tells Margot that Wendell, 'a second lieutenant back home', had to start work here as a junior clerk and came to feel 'invisible'. The fall from officer to clerk is the Windrush story in miniature.",
      tip: "Tie context to the exact words. Here 'King an' country' carries the history: say whose call Wendell answered, how he was treated, and why the patois matters to how Britain heard him.",
    },
  'In Blues for an Alabama Sky, when Guy tells the newly sacked Angel that she can still sing the blues, she answers "Everybody in Harlem is singing the blues." Which piece of context best explains her bleak joke?':
    {
      why: 'The play is set in 1930, as the creative high of the Harlem Renaissance gives way to the Depression. Clubs are closing and there is no singing work, so the line works twice: blues singers are ten a penny, and everyone in Harlem has reason to be sad.',
      not: {
        "Prohibition had just been lifted in 1929, so Harlem's clubs were full and singers were easy to hire":
          'Prohibition ran from 1920 to 1933, so it is still in force: Leland even asks whether it is not still Prohibition when Guy offers him champagne.',
        'Cleage wrote the play in 1930 for the Cotton Club, whose white audiences paid to hear sad songs':
          'Cleage wrote it in the 1990s: it was first produced in 1995 at the Alliance Theatre in Atlanta, looking back sixty-five years to 1930.',
        'The Harlem Renaissance was only beginning, and the blues had not yet travelled north from the South':
          'The Renaissance was the creative explosion of the 1920s, and by 1930 it is ending. Angel and Guy have already worked at the Cotton Club.',
      },
      more: "The line announces the title's music as the play's mood, and shows Angel's habit of cutting hope down with a joke. The blues turns pain into song, and the play has its shape: the same troubles come round again, voiced with humour and style.",
      tip: 'Use context to explain why a joke is bleak. One sentence on the Depression, tied to the closing clubs, turns a witty line into evidence about the world the characters are trapped in.',
    },
  'In Fire on the Mountain, the narrator mimics the departing English and then remarks "The little town went native." Which piece of context best explains the irony of these words?':
    {
      why: "Kasauli became a British military cantonment in 1842 and a summer refuge from the plains. At Independence in 1947 the English leave, and the narrator borrows their own phrases to mock them: 'went native' was the colonials' cliché, now turned back on its users.",
      not: {
        'Kasauli was a French trading port on the coast of India until it was handed back in the late 1970s':
          'Kasauli is a hill town in the Simla Hills, about 1,800 metres up, not a port. Its history is British: a cantonment set up in 1842.',
        'Desai published the novel in 1947, the year of Independence, just as the English were leaving':
          'The novel was first published in 1977, thirty years after Independence. Nanda Kaul lives in a relic of empire, not in the empire itself.',
        'The English stayed on in Kasauli long after Independence, and still ran its club and its institute':
          "The English residents leave at Independence, shipped home, in the narrator's mocking words, with 'natives kept at bay'. The club's dances are a leftover of their world.",
      },
      more: "Desai builds that history into the house: Carignano was built in 1843 by a Colonel Macdougall for a wife who could not bear the heat of the cantonment at Ambala. The dry, satirical voice is quite unlike the novel's lyrical passages about the landscape.",
      tip: "When a narrator borrows a group's own phrases, say whose words they are and what the borrowing does. Here mimicry lets Desai mock the Raj without a single direct judgement.",
    },
  'In Hullaballoo in the Guava Orchard, sitting in the tree with nothing but fruit, leaves and quiet, Sampath thinks "This was the way of riches and this was a king\'s life". Which piece of context best explains why the town soon takes him for a holy man?':
    {
      why: "Indian religious tradition honours those who give up home, family and possessions, and holy men who live apart, under trees or in forests, are a familiar sight; the Buddha is said to have found enlightenment beneath a tree. Sampath's flight fits the pattern so neatly that Shahkot reads it that way.",
      not: {
        'In the Ramayana, the hero Rama spends all the years of his exile living high in a guava tree in the forest':
          "In the Ramayana the monkey Hanuman is Rama's devoted ally. That explains why the novel's monkeys cannot simply be removed, not why Sampath is revered.",
        'Kiran Desai spent a year living as a hermit in a tree in India before she began to write the novel':
          'Anita Desai recalled a real hermit in India who sat in a tree and drew crowds. Kiran Desai studied in India, England and the United States.',
        'The novel is set in 1947, when the holy men of small towns led the struggle to end British rule in India':
          'The novel gives no date, but a rumour that Coca-Cola, which left India in 1977, may soon return places it long after Independence.',
      },
      more: 'What Sampath wants is simply to be left alone. His thought redefines wealth as stillness and beauty, which sets him against his father, for whom riches will soon mean bank accounts made out of this very tree.',
      tip: "Show the gap between what a character wants and how others read him. Context explains the town's reading, the quotation shows Sampath's own, and the satire lives in the difference.",
    },
  'In Prayer Before Birth, the unborn child fears that others will "dragoon me into a lethal automaton". Which piece of context best explains MacNeice\'s choice of this image?':
    {
      why: "The poem was written in London in 1944. By 1942 the call-up covered men from 18 to 51 and women from 20 to 30, so the state was directing a whole generation. 'Dragoon', which also names a mounted soldier, and 'lethal automaton' picture a person drilled into a killing machine.",
      not: {
        'He wrote it in neutral Ireland in 1944, far from the war that he refused to take part in':
          'MacNeice spent most of the war in London, working for the BBC, and he opposed Irish neutrality. In 1943 he published a poem called Neutrality that criticised it.',
        'He wrote it in 1914, as the first volunteers marched off to the trenches of France':
          'That is the wrong war. MacNeice was born in 1907, and this poem was written in 1944, opening Springboard: Poems 1941-1944.',
        'It was published in May 1939, before the war began, as his long poem on the Munich crisis':
          'That describes Autumn Journal, published in May 1939. This poem was written in 1944, in the middle of the war.',
      },
      more: 'The poem names no side, neither Britain nor Germany, and that is part of its point: it fears what any mass organisation can do to a person, including the reader\'s own. The next line shrinks the child to "a cog in a machine".',
      tip: 'Use context in a clause, then return to the words: here one fact about the war explains why the cold, military language of the state enters a prayer.',
    },
  'In The Curious Incident of the Dog in the Night-Time, the boy\'s own written words, "I do not tell lies", are read aloud by his teacher Siobhan while he stands silent before a policeman. Which piece of context best explains why Stephens gives his words to her?':
    {
      why: "Haddon's 2003 novel is told entirely by Christopher in the first person, which is hard to put on a stage. Stephens came up with the idea of 'using Siobhan as a narrator', because she is one of the few people in the novel who read Christopher's book. So the audience hears his thoughts in her voice while watching him.",
      not: {
        "Haddon's novel is told in the letters that Judy sends her son from her London flat":
          "The letters are Judy's, hidden in a shirt box, and they are one discovery inside the story. The novel itself is Christopher's own account.",
        'Stephens first wrote the play for BBC radio, where every scene needed a narrator':
          'The play was written for the National Theatre and opened in the Cottesloe Theatre in July 2012. It was never a radio play.',
        "Siobhan narrates Haddon's novel too, so Stephens kept the narrator Haddon chose":
          'In the novel Christopher tells his own story. Siobhan reads his book, which is why Stephens chose her, but the narrating voice was his.',
      },
      more: "The choice shapes the whole play. Part Two opens with Siobhan proposing that the class turn the book into a play, so the audience always knows it is hearing a text: Christopher's account, which other people receive, question and use.",
      tip: "When you write about narration in a play, name who is speaking and why that matters: here a calm adult voice carries a frightened boy's words.",
    },
  "Death and the King's Horseman ends with Iyaloja's command to the Bride, \"Turn your mind only to the unborn.\" Which piece of context best explains Soyinka's choice of this last line?":
    {
      why: "Soyinka's Author's Note describes the Yoruba world as three realms, the living, the dead and the unborn, joined by the passage he calls transition. After two deaths, the play turns from the dead, and even the living, to the third realm, and to the Bride, who may carry Elesin's child.",
      not: {
        'He wrote the play in prison in 1967, after his arrest early in the Nigerian Civil War':
          'He was arrested in 1967 and held for around two years, but he wrote this play later, at Churchill College, Cambridge, in 1973 to 1974.',
        'The play is based on events in Lagos in 1960, the year that Nigeria became independent':
          'The Note bases the play on events in Oyo in 1946, which Soyinka moved back into the war. Independence came on 1 October 1960.',
        'His Note asks producers to present the play as a clash between two equal cultures':
          "The opposite: the Note attacks the 'facile tag' of 'clash of cultures' and calls the colonial factor 'a catalytic incident merely'.",
      },
      more: 'The line can be read as consolation or as warning: the future must now repair what this night broke. It also closes a circle, since in Scene 1 Elesin asked that his bride seal his eyelids with earth, and at the end she does.',
      tip: 'Context earns credit when it explains a specific choice. Give one clause on Yoruba belief, then analyse what the final command does to the audience.',
    },
  'In Poem at Thirty-Nine, Alice Walker remembers her father showing her how to fill in bank forms, and the "bits of paper" of banking become her way out of the life he had known. Which piece of context best explains why such slight papers matter so much?':
    {
      why: "Walker's parents were sharecroppers, paid with a share of the crop and buying supplies on credit. A sharecropper, often unable to read, rarely had the chance to check the books, so debt could bind a family for another season. Learning to control paperwork was a real kind of power, and her way out.",
      not: {
        'Her father managed a bank in Atlanta, and trained her for a career in his own branch':
          'Willie Lee Walker was a sharecropper in Georgia, and his own schooling was limited. That is why his lesson in bank forms carries such weight.',
        'She wrote the poem in 1965, the year she turned thirty-nine and opened an account':
          'Walker was born in February 1944, so she turned thirty-nine in 1983. The poem was collected in 1984.',
        'Her family fled to New York in the 1930s, when a bank crash took their farm and savings':
          'The family stayed in Georgia: she grew up near Eatonton, in Putnam County, and went to college in Atlanta and then in New York.',
      },
      more: "'Bits' makes the papers small and slight, which sharpens the irony that scraps are what free her. One reading hears a second meaning, since paper is also what a writer works on, so the escape is through words as well as money.",
      tip: "Link context to a single phrase, not the whole poem: here the history of sharecropping explains why 'bits of paper' carry so much weight.",
    },
  'In The Scarlet Letter, the narrator says the wild rose-bush by the prison door may have sprung up "under the footsteps of the sainted Ann Hutchinson". Which piece of context best explains why Hawthorne links her to this prison?':
    {
      why: "Anne Hutchinson challenged the Boston ministers in the Antinomian controversy, was tried in November 1637 and banished. Calling her 'sainted' honours a woman the authorities punished for thinking for herself, and the rose at the prison door begins the novel's link between her and Hester.",
      not: {
        'She was hanged as a witch on Boston Common in 1656, after a trial in the colony':
          "That was Ann Hibbins, hanged as a witch in 1656, whom the novel makes the Governor's sister. Hutchinson was banished, not hanged.",
        "She was Hawthorne's own ancestor, who questioned the accused at Salem in 1692":
          'That was his great-great-grandfather John Hathorne, a magistrate at the Salem witch trials. Hutchinson was no relation.',
        "She founded the colony's first prison in 1630, arriving with the Winthrop Fleet":
          "Nothing records her founding a prison. She came into conflict with the colony's ministers, and was tried and banished.",
      },
      more: 'In Chapter XIII the narrator says that, but for Pearl, Hester might have gone down in history "hand in hand with Ann Hutchinson". Some critics read Hester as a fictional version of her: the independent woman the Puritan authorities feared.',
      tip: 'Name the historical figure and one fact, then say what the allusion does to how we see the heroine. Context should sharpen a reading, not replace it.',
    },
  'In Kindertransport, Helga tells Eva why she must go to England: "Because any good parent would want to protect their child." Which piece of context best explains why Samuels has Helga send her daughter alone?':
    {
      why: 'After Kristallnacht in November 1938, Britain agreed to take in unaccompanied children up to the age of seventeen, and their parents had to stay behind. Protecting Eva therefore means losing her, the paradox at the heart of the play, and the line sets up every later parent who must decide when to let go.',
      not: {
        'Britain gave refuge to whole Jewish families, so long as all of them came from Hamburg':
          'The scheme was for children alone, from Germany, Austria, occupied Czechoslovakia and Danzig. Parents could not come, which is why Helga stays.',
        'The first trains left Germany in 1945, once British troops had liberated the camps':
          'The first party arrived at Harwich on 2 December 1938, and the last group left Germany on 1 September 1939. Eva arrived on 7 January 1939.',
        'Each parent needed a guarantee of fifty pounds before leaving Germany with a child':
          'The guarantee of fifty pounds was for each child, towards eventual re-emigration. It did not let parents travel with them.',
      },
      more: 'Nearly 10,000 children came. For many, the parents who put them on the train were the family members who did not survive. Samuels interviewed former Kindertransport children, and says nearly everything that happens to Eva really happened to one of them.',
      tip: 'Use history to explain a choice: here it explains why love and separation become the same act. Then go back to the words on the page.',
    },
  'In Blood Brothers, when Edward, home from university at Christmas, asks Mickey about his job at the box factory, Mickey answers "It disappeared." Which piece of context best explains Russell\'s choice of this answer?':
    {
      why: "Mickey's verb makes redundancy sound like something that happened by itself, with nobody responsible, which is how the loss of work felt to many people in the early 1980s. Unemployment passed three million in January 1982, fifteen or sixteen per cent in most of the North West, and the musical opened in Liverpool a year later.",
      not: {
        'Russell wrote the musical in 1963, when the docks and factories of Liverpool were booming':
          'Russell first wrote Blood Brothers as a school play in 1981, and the musical opened at the Liverpool Playhouse in January 1983, in a time of mass unemployment.',
        'The play names Margaret Thatcher as the boss who sacks Mickey in the song about redundancy':
          "The play never names Thatcher. The redundancies arrive in a song led by Mr Lyons as a company boss, which ties the comfortable family to Mickey's loss.",
        "Liverpool's docks and factories had their busiest year since the war in 1981, with work for all":
          "The opposite: by the early 1980s Liverpool's docks and factories were shedding jobs, which is why work like Mickey's simply vanished.",
      },
      more: "The short sentence closes the subject, and the pause lets the audience feel what Edward does not. Moments later Edward says that without a job he would 'live like a bohemian', a word from a student's world, which shows he has never had to imagine being without money.",
      tip: 'Use context in a clause, not a paragraph: one fact about unemployment in 1982 explains why a job can simply disappear. Then return to what the verb does.',
    },
  'In The Woman in Black, Arthur reads a letter that Jennet wrote to her sister about the son she has been made to give up: "he is mine, mine, he can never be yours". Which piece of context best explains why she had to part with him?':
    {
      why: "For most of the nineteenth and early twentieth centuries, an unmarried woman with a child was widely thought to have lost her respectability, and the child was often passed to relatives. Jennet's son was born in Scotland, she was pressed to give him up, and Samuel Daily says she gave him to her sister 'because she'd no choice'.",
      not: {
        'Victorian mourning customs required a widow to give up her children for the four years she wore black':
          'A widow might wear mourning dress for up to four years, but the custom governed clothes, not children. Jennet was not a widow at all: she was unmarried.',
        'The Adoption Act of 1926 ordered that every child of an unmarried mother be taken away at birth':
          "The 1926 Act made adoption a legal process in England and Wales. Before it, arrangements like Jennet's were informal, and no law took babies at birth.",
        "Jennet had been widowed young, and a widow could not keep a child without her husband's family's consent":
          'Jennet was never married. Her story depends on how unmarried mothers were treated, which is why the boy went to her married sister, Alice Drablow.',
      },
      more: "The context makes Jennet both a victim and, later, a figure of revenge. The repeated 'mine' is love, grief and a refusal to let go, and 'never' looks forward to a possession that death does not end. Edexcel's examiners praised answers that linked her to attitudes to motherhood and social shame.",
      tip: "Use context to explain a character's situation, then go straight back to the words: here social shame explains the loss, and the repeated 'mine' shows what it did to her.",
    },
  'In Journey\'s End, when Hibbert tries to go sick with neuralgia, Stanhope tells him: "Better die of the pain than be shot for deserting." Which piece of context best explains why Sherriff makes the threat so stark?':
    {
      why: "Breakdown under strain could get a man sent away, but leaving the line without being passed as ill could be treated as desertion, and British soldiers could be court-martialled and shot for it. Stanhope's cold comparison of two deaths makes those stakes plain, before he gives Hibbert half a minute to decide, revolver in hand.",
      not: {
        'Sherriff was court-martialled for leaving his post at Passchendaele, which ended his own service in 1917':
          "Sherriff's service ended when he was wounded on 2 August 1917, during Passchendaele, and sent back to England, not through any charge of desertion.",
        "The army had ended the death penalty for desertion in 1915, so Stanhope's threat is an empty bluff":
          'Soldiers could be shot for desertion throughout the war: in 2006 Parliament pardoned all who had been executed for such offences between 1914 and 1918.',
        'Neuralgia was so rare in the trenches that any officer who claimed it was shot without a trial':
          "Sherriff's own letters home mention bouts of neuralgia, and nobody was shot simply for claiming it. The danger was leaving the line without being passed as ill.",
      },
      more: "Sherriff lets the scene look like bullying before turning it. Stanhope puts his revolver away, admits he feels 'exactly the same', and asks whether they can stick it together. Sherriff shows a frightened man, not a villain.",
      tip: 'Context earns credit when it explains a choice: here the firing squad explains why the threat is real. Then show how the scene turns, from threat to shared fear.',
    },
  "In My Name is Leon, Maureen tells Leon plainly why his baby brother has been adopted and he has not: \"Because he's a baby, a white baby. And you're not.\" Which piece of context best explains de Waal's choice to make this the novel's central injustice?":
    {
      why: "De Waal knew placement decisions from the inside: she has served on adoption panels and advised Social Services on the care of foster children. She has said that siblings are separated too often, and that sometimes there is no other option. Maureen's blunt words make the reader feel the cost through Leon.",
      not: {
        "Lord Scarman's report of 1981 found that adoption panels had treated Black children unfairly":
          "Scarman's report, published on 25 November 1981, was about policing: it found stop and search used disproportionately against Black people. It said nothing about adoption.",
        'De Waal wrote the novel in 1981, while she was working as a social worker in Handsworth':
          'The novel was published in 2016. In 1981 de Waal was living in Handsworth, near the riots, and her own career was in criminal and family law, not social work.',
        'De Waal was adopted as a baby by a white family, and was parted from her own older brother':
          'De Waal was born in Birmingham in 1960 to an Irish mother and a Caribbean father, and it was her mother who was a foster carer.',
      },
      more: "The repetition of 'baby', now qualified by 'white', isolates the reason in one adjective, and the blunt short sentence that follows lands on Leon. Maureen's honesty is a kind of respect no other adult has shown him, which is why he trusts her.",
      tip: "Link context to a single word where you can: here de Waal's work on adoption panels explains the decision, and the adjective 'white' names what the decision turned on.",
    },
  'In Hobson\'s Choice, at the end of Act One, Hobson forbids Maggie to marry Will with the sneer that "his father was a workhouse brat." Which piece of context best explains the force of this insult?':
    {
      why: 'Under the Poor Law Amendment Act 1834, help for the able-bodied poor was given in the workhouse, where conditions were made worse than the worst outside. Inmates wore its uniform, and to have been a workhouse child was a lasting mark of shame, so Hobson attacks Will through his birth, not his skill.',
      not: {
        'Workhouses were first opened in 1915, the year the play was first staged, so the insult was new':
          "Under the Poor Law of 1834, help for the poor was given in the workhouse, long before the play's setting of 1880. The play itself opened in New York in 1915.",
        "The Married Women's Property Act of 1882 barred wives from marrying men born in a workhouse":
          'The 1882 Act let a wife own, buy and sell her own property and made husband and wife separate legal persons. It said nothing about whom she married.',
        'Brighouse had grown up in a Salford workhouse himself, and left it at seventeen to make boots':
          "Brighouse won a scholarship to Manchester Grammar School and left at seventeen to work as a textile buyer. The workhouse past belongs to Will's father.",
      },
      more: 'His next line reveals his real fear, that he would be the laughing-stock of the place, and Maggie punctures the snobbery: it is news to her, she says, that they are snobs in Salford. The play treats class as a pose, and Will climbs the ladder that Hobson guards.',
      tip: "Name the law or custom in a clause, then return to the words: here 'workhouse brat' shows a man whose own respectability depends on looking down on someone else.",
    },
  'In The War of the Worlds, the first chapter recalls how European settlers wiped out the Tasmanians, then asks: "Are we such apostles of mercy as to complain if the Martians warred in the same spirit?" Which piece of context best explains Wells\'s choice of this question?':
    {
      why: 'The serial ran in 1897, the year of the Diamond Jubilee, when Britain ruled a vast empire justified by the belief that peoples who thought themselves civilised could govern those they called inferior. Wells turns that belief round: judged by the standard empire applied to others, humans cannot complain about the Martians.',
      not: {
        'The Battle of Dorking, published in 1871, had imagined Martians invading Britain and losing in Surrey':
          "Chesney's story imagined an enemy readers took to be Germany, defeating Britain at Dorking. Wells's twist was to make the invader another species.",
        'Schiaparelli had proved in 1877 that the Martians were digging canals to prepare an attack on Earth':
          'Schiaparelli mapped lines he called canali, channels; it was Lowell, in 1895, who argued they were irrigation works. Neither said anything about an attack.',
        'Wells wrote the novel in 1919, just after Britain had lost most of its empire in the Great War':
          'The novel was serialised in 1897 and published as a book in 1898, when the empire was at its height, long before the First World War.',
      },
      more: "'Apostles of mercy' mocks the religious language used to justify empire, and the question forces readers to judge the invaders by the standard they apply to themselves. Wells set the invasion in the comfortable Surrey suburbs where his first readers lived, not in some distant colony.",
      tip: 'Use context to show what a question asks of its first readers: here an imperial nation is made to imagine being colonised. One clause of history, then back to the words.',
    },
  'In The Empress, Hari\'s list of the lascars\' demands begins with "equal pay with the white sailors". Which piece of context best explains why Gupta puts this demand first?':
    {
      why: "Lascars were hired on separate Asiatic Articles, on lower pay than European sailors, and employers called them docile because, unlike white seamen, they were not in unions. 'Equal' names exactly what the system denies, and 'the white sailors' names the colour line the Empire's ships ran on.",
      not: {
        'The Royal Titles Act of 1876 had already given Indian sailors the same pay as British crews':
          "The 1876 Act confirmed Victoria's title as Empress of India. It did nothing for the pay of the sailors whose labour moved the Empire's trade.",
        'Lascars were the best-paid seamen in the Empire, and their unions were the strongest at sea':
          'The opposite: they were paid less than European sailors and, unlike white seamen, were not in unions, which is why employers called them trouble-free.',
        "Dadabhai Naoroji's book of 1901 argued that lascars were paid more than British sailors":
          "Naoroji's Poverty and Un-British Rule in India argued that British rule was draining India of its wealth, not that lascars were overpaid.",
      },
      more: 'Hari can write his demands down because Rani taught him to value reading, so Gupta links literacy directly to resistance. His reward is to be beaten and put ashore at the Cape, which shows what the Empire did to those who asked for equality.',
      tip: "Context is strongest when it explains one word. Here the Asiatic Articles explain why 'equal' comes first, and why the demand is so dangerous to make.",
    },
  'A respected doctor confesses that, wishing to "wear a more than commonly grave countenance before the public", he hid his pleasures, until "I stood already committed to a profound duplicity of life". Which piece of context best explains his double life?':
    {
      why: "Victorian gentlemen were expected to show a spotless, serious face to the world, and reputation was everything. The doctor's ordinary 'gaiety' could not fit that mask, so he hid it, and the hiding split his life in two.",
      not: {
        'Victorian doctors were forbidden by law to enjoy any pleasures at all':
          "No law forbade pleasure. The pressure came from society's demand for respectability, not from the law.",
        'Most Victorians openly admired men who led secret lives':
          'Secret lives were a source of scandal. That is why he hides his.',
        'Victorian London had no rules about how gentlemen behaved':
          "The rules were strict, though unwritten: a gentleman's reputation depended on seeming serious and moral.",
      },
      more: "Jekyll admits his faults were small at first, 'a certain impatient gaiety of disposition'. The novel suggests that a society demanding perfect faces makes hidden selves grow.",
      tip: 'Use context to explain a motive: what did the society of the time make this character feel he had to hide?',
    },
  'A novel set in the early 1800s explains why villagers distrust a weaver from elsewhere: "To the peasants of old times, the world outside their own direct experience was a region of vagueness and mystery". Which piece of context best explains this distrust?':
    {
      why: "In the early 1800s, before the railways, most country people lived and died near where they were born. A stranger with an unfamiliar trade came from that 'region of vagueness and mystery', so he was easily suspected.",
      not: {
        'Weavers were known to be criminals throughout rural England':
          'Weavers were not thought criminals. They were suspected because they came from outside, and their skill seemed strange.',
        'The village had been invaded by foreign soldiers the year before':
          'There was no invasion. The distrust comes from isolation, not from any recent war.',
        'Country people of the time read widely about distant lands':
          'Few had books or news from far away. The world beyond the village was a mystery to them.',
      },
      more: "The narrator adds that no one knew where 'wandering men' had their homes. Eliot, writing in 1861, looks back at a world the railways had already changed.",
      tip: 'Context can come from the novel itself: here the narrator explains the past, and you can explain why that past mattered.',
    },
  'A novel about a strict religious colony in 1640s New England begins by saying that the founders of a new colony "have invariably recognised it among their earliest practical necessities to allot a portion of the virgin soil as a cemetery, and another portion as the site of a prison". Which piece of context best explains the irony?':
    {
      why: "The Puritans crossed the Atlantic to build a godly community, a 'Utopia of human virtue'. That hope makes the first buildings ironic: even a colony founded on virtue needs a graveyard and a prison at once.",
      not: {
        'The colonists had been sent to America as convicts':
          'The Puritans came by choice, for their faith, not as transported convicts.',
        'New England had no laws or punishments at that time':
          'The colony was strict: the prison, and the punishment of the heroine, show how firmly it enforced its laws.',
        'The settlers expected to die soon after they arrived':
          'They hoped to flourish. The cemetery is grimly practical, but the irony lies in the gap between their hope and what they built first.',
      },
      more: "Hawthorne, writing in 1850, was descended from a Puritan judge at the Salem witch trials. His novel looks back at his ancestors' strictness with a critical eye.",
      tip: 'Irony often lies between what people hoped to build and what they built first. Context tells you what they hoped.',
    },
  'A merry knight, told by a stern steward to stop his late-night singing, replies: "Dost thou think, because thou art virtuous, there shall be no more cakes and ale?" Which piece of context best explains the clash?':
    {
      why: "The steward is called 'a kind of puritan'. Puritans attacked feasting, drinking and the theatre itself, so a play named after a holiday of misrule lets its revellers mock the man who would stop the fun.",
      not: {
        "Cakes and ale had been banned by law in Shakespeare's England":
          'No law banned them. The clash is between merrymaking and a stern, Puritan kind of virtue.',
        'Elizabethan knights were expected never to sing or dance':
          "Music and feasting were part of a gentleman's life. The knight's fault here is the hour and the noise.",
        "Shakespeare's audience disliked all forms of merrymaking":
          "Theatre audiences came for merrymaking. The Puritans who disliked it were the theatre's enemies.",
      },
      more: 'Twelfth Night was the last night of the Christmas season, a time of feasting when order could be turned upside down. In 1642, under Puritan pressure, Parliament closed the theatres altogether.',
      tip: "When a play stages a quarrel about pleasure, ask who in the audience's world was arguing about it.",
    },
  'How might a feminist critic interpret Lady Macbeth\'s "unsex me here" speech?': {
    why: 'Lady Macbeth asks spirits to unsex her and fill her with cruelty. A feminist reading says her society links womanhood with pity and weakness, so to seize power she believes she must reject her femininity.',
    not: {
      'She longs to be reborn as a man and leave her marriage behind':
        'She does not ask to become a man. She asks to lose the qualities her society calls feminine, such as pity, so that nothing stops her.',
      'She is confused about who she is, and nothing more':
        'She is clear and determined here. The speech is a deliberate request, not a sign of confusion.',
      'She prays to become gentler and kinder to Duncan':
        'She asks for the opposite: to be filled with cruelty, and for her milk to be turned to gall.',
    },
    more: 'Her plan works only for a time. Her later sleepwalking suggests the pity she tried to destroy returns as guilt.',
    tip: 'When you use a critical lens, name it and apply it: a feminist reading lets you discuss gender, power and context together.',
  },
  'In Animal Farm, the Seven Commandments are rewritten one by one, and in the last chapter the animals cannot tell pig from man. Which judgement does this evidence best support?':
    {
      why: "Each rewritten commandment shows the pigs bending the revolution's rules to suit themselves, and the final scene shows where the bending ends: the new rulers are the old ones. The evidence supports corruption by those in power.",
      not: {
        'The revolution succeeds once the clever pigs take charge':
          "The ending shows the animals as hungry and overworked as under Jones. The pigs' rule is a betrayal, not a success.",
        'The animals agree to each change with their eyes wide open':
          'The animals cannot remember the old rules or read well enough to check, and Squealer tricks them. Their consent is manufactured.',
        'The humans alone are to blame for all that goes wrong':
          "The pigs, not the humans, rewrite the commandments. The humans end up as the pigs' partners.",
      },
      more: "In a letter, Orwell called the pigs' taking of the milk and apples the turning point of the story. The animals' silence then helps the pigs as much as the pigs' cunning does.",
      tip: "For a 'how far' question, judge from the evidence: say what it proves, and what it leaves open.",
    },
  'How does Stevenson use the novella form in "Jekyll and Hyde" to explore duality?': {
    why: "The story is pieced together from different narrators and documents: Enfield's tale, Utterson's search, Lanyon's letter and Jekyll's own statement. Like Jekyll's split self, the truth comes in fragments that only fit together at the end.",
    not: {
      'Short books were easier for Victorians to read':
        'Its shortness is not the point. The question is how its structure mirrors a divided identity.',
      'Novellas were the only kind of book Stevenson could write':
        'Stevenson wrote full-length novels too, such as Treasure Island. The fragmented form is a choice.',
      'A single narrator tells the whole story calmly':
        'There is no single narrator: the story passes from Enfield to Utterson to Lanyon and finally to Jekyll.',
    },
    more: "Each document reveals more, so the reader, like Utterson, discovers the truth step by step. The final statement, in Jekyll's own voice, splits even the pronouns: he writes of Hyde as both 'he' and 'I'.",
    tip: 'Discuss structure as well as language: explain how the fragmented, multi-voiced narrative mirrors the theme of duality.',
  },
  'In An Inspector Calls, evaluate how Priestley uses dramatic irony when the characters dismiss the Inspector.':
    {
      why: "In Act 3 the older Birlings decide the Inspector was a hoax and relax. The first audiences, watching in 1945 and 1946, knew his warning had come true in two world wars, so the Birlings' complacency condemns them.",
      not: {
        'It makes the audience side with the relieved older Birlings':
          'Dramatic irony does the opposite: the audience knows more than the Birlings and sees through their self-satisfaction.',
        'It shows the Inspector was wrong about everything':
          'The irony shows he was right. His warning about what would happen if people did not learn came true.',
        'It makes the plot too confusing to follow clearly':
          'Dramatic irony makes things clearer for the audience, who know more than the characters.',
      },
      more: 'Earlier, Mr Birling confidently tells the family there will be no war and calls the Titanic unsinkable. Each mistake makes his later dismissal of the Inspector look even more foolish.',
      tip: "Link dramatic irony to purpose: Priestley wants his post-war audience to reject the Birlings' selfish attitudes and build a fairer society.",
    },
  'How does Browning use the dramatic monologue form in "My Last Duchess" to expose the Duke\'s character?':
    {
      why: 'Only the Duke speaks, and he means to impress his listener. But in boasting about the portrait and his late wife, he reveals jealousy, pride and a chilling hint of murder, without realising how he sounds.',
      not: {
        'The Duke is honest and fully aware of himself throughout':
          'He is neither. He does not notice that his words expose him as jealous and controlling.',
        'The poem is spoken straight to the reader':
          'He speaks to a silent listener inside the poem: the envoy of a Count whose daughter he plans to marry.',
        'Browning had no room for other speakers':
          'The single voice is a deliberate choice. Letting the Duke speak unchallenged is how Browning exposes him.',
      },
      more: 'A dramatic monologue is a poem spoken by one character to a silent listener. Browning made the form famous, and it lets readers judge a speaker by what he gives away.',
      tip: 'Analyse what the Duke says and what he reveals without meaning to. That gap is the key to the poem.',
    },
  'Evaluate how Owen subverts traditional war poetry in "Dulce et Decorum Est".': {
    why: "Traditional war poems often praised dying for one's country. Owen's title quotes that ideal, but the poem shows exhausted men and a soldier choking on gas, and ends by calling the Latin motto 'The old Lie'.",
    not: {
      'Owen celebrates war as glorious and noble':
        'Owen exposes the horror of war. He does not celebrate it.',
      'Owen follows the traditions of war poetry closely':
        'He rejects the patriotic conventions of earlier war poetry, replacing glory with graphic suffering.',
      'The Latin title is meant sincerely by Owen':
        'The title is ironic. Owen quotes the motto only to show it is a lie.',
    },
    more: "The full motto, from the Roman poet Horace, means it is sweet and fitting to die for one's country. Owen was killed in action in November 1918, a week before the Armistice.",
    tip: "Evaluate by contrast: show how the graphic imagery undermines the title's patriotic claim, and say who Owen is attacking.",
  },
  "How does Shakespeare use Juliet's soliloquies to challenge patriarchal expectations in Romeo and Juliet?":
    {
      why: "Juliet's speeches show her own desires and decisions. She longs openly for her wedding night and later chooses to risk the Friar's potion, while her father treats her as his to give away in marriage.",
      not: {
        'Juliet obeys her father from first to last':
          'She defies him: she secretly marries Romeo and refuses to marry Paris.',
        'Her speeches add very little to the meaning of the play':
          'Her speeches reveal her inner life and her choices, which drive the tragedy.',
        'Shakespeare gave no woman a soliloquy':
          'Juliet has several soliloquies, including the potion speech in Act 4.',
      },
      more: "When Juliet refuses Paris, Capulet says 'And you be mine, I'll give you to my friend', and threatens to throw her out. Her soliloquies show a mind he never sees.",
      tip: "Use context: in Shakespeare's time a daughter was expected to obey her father in marriage, which makes Juliet's choices bold.",
    },
  "In Frankenstein, evaluate how Shelley uses the Creature's eloquence to challenge reader expectations.":
    {
      why: 'The Creature tells his story in moving, articulate language, describing loneliness and rejection. Readers expect a monster from his appearance but meet a feeling, thinking being, and start to ask whether Victor is the real monster.',
      not: {
        'The Creature cannot speak at all in the novel':
          'He speaks fluently. He learns language by secretly watching the De Lacey family.',
        "He simply copies Victor's words, thoughts and feelings":
          'He learns from the De Laceys and from books, and his feelings and arguments are his own.',
        'His eloquence makes him seem less human':
          'It does the opposite: his eloquence makes him seem more human, even more humane than Victor.',
      },
      more: "He educates himself with Paradise Lost, Plutarch's Lives and The Sorrows of Werter. Shelley lets him argue his own case, and argue it well.",
      tip: 'Evaluate by weighing his eloquence against his crimes: does understanding him excuse him, or make his choices more disturbing?',
    },
  'How does Agard use form and structure in "Checking Out Me History" to mirror his argument?': {
    why: "Agard alternates two kinds of stanza. The British history he was taught comes in chanting, rhyming stanzas mixed with nursery rhymes. Caribbean heroes such as Toussaint L'Ouverture, Nanny and Mary Seacole get stanzas of their own, full of reverent imagery.",
    not: {
      'The poem follows a strict fourteen-line sonnet form':
        'It is not a sonnet. It has many stanzas of different lengths.',
      'The structure is random and has no pattern':
        'The structure is deliberate: two kinds of stanza alternate to set two histories against each other.',
      'Agard writes in prose paragraphs, not verse':
        'It is a poem, with line breaks, rhyme and rhythm, written to be performed aloud.',
    },
    more: "The whole poem is written in Caribbean English, not just the heroes' stanzas. The contrast is in form and tone: mocking chant for the history imposed on him, reverence for the history he reclaims.",
    tip: "When writing about structure, describe the pattern, then explain what it shows: the poem's shape enacts the speaker's argument.",
  },
  'Evaluate how Dickens uses the Ghost of Christmas Yet to Come as a departure from the other spirits in "A Christmas Carol".':
    {
      why: 'The first two spirits talk to Scrooge, but the last never speaks. Silent and hooded, it only points, showing him his own lonely death. Its silence makes the future, and death, terrifying, and fear finally changes him.',
      not: {
        'It is the friendliest of the three spirits':
          'It is the most frightening spirit. The Ghost of Christmas Present is the jolly, friendly one.',
        'It speaks more than any other spirit':
          'It never speaks. When Scrooge begs it to speak, it gives him no reply and points onward.',
        'It brings Scrooge good news about his future':
          'It shows him an unmourned death and a neglected grave. The news is terrible, and it is meant to be.',
      },
      more: 'The ghost resembles traditional images of Death, a dark hooded figure. Its silence forces Scrooge to work out the meaning of what he sees for himself.',
      tip: "Compare the three spirits in a sentence or two, then focus on how the last one's difference creates fear and urgency.",
    },
  'How does Hughes use irregular rhythm in "Bayonet Charge" to convey the experience of combat?': {
    why: 'Hughes avoids a steady beat. Lines of uneven length run into each other, then stop suddenly, so the rhythm stumbles and lurches like a terrified soldier charging across rough ground.',
    not: {
      'The rhythm is perfectly regular throughout':
        'The rhythm is deliberately irregular, to mirror chaos and panic.',
      'The rhythm follows a cheerful marching song':
        'A marching song has a steady, rousing beat. Hughes gives the charge a broken, lurching one instead.',
      'The rhythm slows into a calm, gentle close':
        'The poem ends in the middle of the charge, in a rush of noise and fear, not a calm close.',
    },
    more: 'The poem opens in the middle of the action, as if the soldier has just woken into the charge. The form puts the reader inside his panic rather than describing it calmly.',
    tip: "Do not just say the rhythm is irregular. Link specific features, enjambment and sudden pauses, to the soldier's experience.",
  },
  'In Great Expectations, evaluate how Dickens uses first-person retrospective narration to explore self-deception.':
    {
      why: "An older Pip tells the story of his younger self. He can see the mistakes he made, so the reader sees young Pip's snobbery and self-deception more clearly than young Pip does, and judges the society that taught him.",
      not: {
        'Pip tells the truth and hides nothing at all':
          'Young Pip lies. After his first visit to Satis House he invents a black velvet coach and dogs fighting over veal-cutlets.',
        'The narration is in the third person':
          "It is first-person narration: Pip tells his own story as 'I'.",
        'Dickens chose first person at random':
          'The choice is deliberate. It lets the older Pip judge his younger self with hindsight.',
      },
      more: 'Pip is ashamed of Joe when Joe visits him in London, and the older narrator exposes that shame. The novel is a confession as well as a story.',
      tip: 'Distinguish the two Pips in your writing, the narrator and the younger character, and explain the gap between them.',
    },
  'How does Dharker use the extended metaphor of paper in "Tissue" to explore human fragility?': {
    why: 'Paper in the poem includes maps, receipts and family records written in a holy book. We treat these as solid and lasting, but they are thin and easily torn, and in the end paper becomes human skin.',
    not: {
      'The poem is mainly about recycling paper':
        'The poem is not about reusing paper. Paper is a symbol for the structures and records of human life.',
      'Paper stands for the things that last for ever and ever':
        'The poem suggests the opposite: things that seem permanent, like borders and buildings, are fragile.',
      'Dharker is describing the art of origami':
        'There is no paper folding in the poem. Paper is a metaphor for life, power and identity.',
    },
    more: 'Dharker suggests that fragility can also be a strength: thin paper, which light can pass through, might change the way we live and build.',
    tip: 'Follow the extended metaphor stanza by stanza, showing how its meaning grows towards the final shift from paper to skin.',
  },
  'In "Poppies" by Weir, how does the domestic imagery create a powerful anti-war statement?': {
    why: "Weir focuses on tiny, tender acts: a mother pins a poppy to her son's blazer and smooths his shirt collar before he leaves. These private details show grief that public ceremonies of remembrance cannot express.",
    not: {
      'The poem is mainly about gardening and flowers':
        'There is no gardening. The poppies are symbols of remembrance.',
      'The imagery is decorative, with no wider purpose at all':
        "The domestic details carry the poem's emotion and its anti-war meaning.",
      'Weir avoids any mention of war or soldiers':
        'War is present: the poem mentions war graves and a war memorial, and military words creep into the domestic scene.',
    },
    more: "Weir wrote the poem in 2009, when the Poet Laureate, Carol Ann Duffy, asked poets to write about modern conflict. It never says plainly whether the son has died, which deepens the mother's uncertainty.",
    tip: "Contrast public and private: explain how the poem moves from remembrance rituals to one mother's personal loss.",
  },
  "How does Bronte use the character of St John Rivers in Jane Eyre to test Jane's values?": {
    why: 'St John asks Jane to marry him and serve as a missionary in India, out of duty, not love. Refusing, she sees that marrying him would mean losing herself, and she holds to her need for love between equals.',
    not: {
      'St John is the ideal husband the novel wants Jane to marry':
        "He is handsome and devout, but cold. Marrying him would crush Jane's feelings, so he is not ideal for her.",
      'Jane accepts his proposal at once and gladly':
        'She refuses to marry him. She offers to go to India as his helper, but not as his wife.',
      'St John is a minor figure with little purpose':
        'He dominates the last part of the novel, which even ends with his words.',
    },
    more: "Jane tells him 'I scorn your idea of love', and reflects that if she joins him she will abandon half herself. St John's coldness contrasts with Rochester's passion.",
    tip: "Compare Jane's suitors: Rochester first offers passion while hiding a wife; St John offers duty without love. Jane needs love and equality together.",
  },
  'How does Tennyson simultaneously celebrate and question military obedience in "The Charge of the Light Brigade"?':
    {
      why: "Tennyson praises the riders' courage and obedience, but he admits that 'Some one had blunder'd' and sends them into 'the valley of Death'. He honours the men while hinting that the order was a fatal mistake.",
      not: {
        "Tennyson only celebrates the soldiers' courage and skill":
          'He celebrates them, but the line about the blunder questions the command that sent them to die.',
        'Tennyson blames the soldiers for the disaster':
          'He praises the soldiers. Any criticism is aimed at whoever gave the order.',
        'The poem has no political side to it at all':
          'Tennyson was Poet Laureate, writing about a national disaster. The poem shaped how the nation remembered it.',
      },
      more: "The lines 'Theirs not to reason why, / Theirs but to do and die' can be read as praise for obedience, or as a quiet protest that soldiers could not question orders.",
      tip: 'For a question that asks how a poet does two things at once, give evidence for each side, then explain how they work together.',
    },
  'In "The Émigrée" by Rumens, evaluate how the poet uses light as a motif to resist political oppression.':
    {
      why: "The speaker's memory of her city is full of sunlight, and she holds on to it whatever news she hears of war and tyranny. The light becomes a symbol of a memory that oppressors cannot take away.",
      not: {
        'Light only describes the sunny weather in her old city':
          'The sunlight is a symbol of her memory and identity, not a weather report.',
        'The light fades away as the poem goes on':
          'The light lasts to the end, even when people around her accuse her and close in.',
        'Light stands for the danger she escaped':
          'Light stands for hope and memory. Danger comes from the forces that threaten her city and her.',
      },
      more: "The poem's last image turns even her shadow into proof of the sunlight she carries. The darkness around her only shows that the light is still there.",
      tip: 'Track a motif through the whole poem, showing how it develops, rather than mentioning it once.',
    },
  'In Macbeth, evaluate how Shakespeare uses the Porter scene to both relieve and intensify dramatic tension.':
    {
      why: "Straight after Duncan's murder, a drunken Porter jokes that he is the porter of hell gate as he answers the knocking. The comedy relieves tension, but it also suggests that Macbeth's castle has become a kind of hell, full of lies and equivocation.",
      not: {
        "It shows the castle's servants plotting against Macbeth":
          'The Porter is drunk and joking, not plotting. No servant schemes against Macbeth in the scene.',
        'The scene is purely funny, with no darker meaning':
          "It is comic, but its talk of hell and equivocation links to the play's themes.",
        'It gives the actor playing Duncan time to change':
          "Duncan is already dead and does not appear again. The scene's purpose is dramatic, not a costume change.",
      },
      more: "The 'equivocator' may refer to the Jesuit Henry Garnet, tried for treason after the Gunpowder Plot, who had defended giving misleading answers under oath. Jacobean audiences would have caught the topical joke.",
      tip: 'When you evaluate a comic scene, explain both effects: the release of tension, and the darker meaning beneath the jokes.',
    },
  'How does Weir use the absence of the soldier\'s voice in "Poppies" to create meaning?': {
    why: 'The son never speaks; we hear only his mother. His silence makes his absence felt in every line, and keeps the reader inside her grief and uncertainty.',
    not: {
      'The soldier speaks in the final stanza':
        "He never speaks. The whole poem is in the mother's voice.",
      'His silence shows he has stopped loving his mother':
        "Nothing suggests he has stopped loving her. His silence is the poet's choice, which centres the mother's loss.",
      'He is too young to speak for himself':
        "He is old enough to leave home for war. His silence is the poet's choice.",
    },
    more: 'At the end the mother listens, hoping to hear his voice as it was when he was a child. Whether he has died is left uncertain, which makes the silence more painful.',
    tip: 'Comment on what is missing as well as what is there. A silence can be as meaningful as a speech.',
  },
  'In "Tissue" by Dharker, evaluate how the final stanza shifts the poem\'s meaning.': {
    why: 'The poem ends by turning paper into skin. Suddenly everything said about paper, thin, fragile, letting light through, applies to the human body, so the poem was about human life all along.',
    not: {
      'The last stanza is unrelated to the rest':
        'It ties the whole poem together by revealing what the paper stood for.',
      'The last stanza repeats the first word for word':
        'It does not repeat the opening. It transforms the paper metaphor into skin.',
      'Dharker changes the subject by accident':
        "The shift is carefully prepared by the whole poem's focus on fragility.",
    },
    more: 'The last stanza is a single short line, set apart from the rest. Its isolation gives the final image extra weight.',
    tip: 'Endings matter. Explain how a final line or stanza changes your reading of everything before it.',
  },
  "In Lord of the Flies, evaluate how Golding uses Piggy's glasses as a symbol that evolves throughout the novel.":
    {
      why: "The boys light their first fire by focusing sunlight through Piggy's glasses, so the glasses stand for science, reason and the hope of rescue. As one lens breaks and Jack's tribe steals them, reason loses its power on the island.",
      not: {
        'They are only for reading and carry no meaning at all':
          'Piggy needs them to see at all, and the boys need them to make fire. They matter far more than reading glasses.',
        'Golding wore glasses as a boy, just like Piggy':
          "Whatever the writer's own eyesight, the glasses matter for what they mean in the novel.",
        "They stand for the hunters' strength and skill":
          'The glasses belong to Piggy, the voice of reason. The hunters steal them; they do not stand for them.',
      },
      more: "When Jack's tribe steals the glasses, they take the power to make fire, and with it control. Piggy, nearly blind without them, is killed soon after.",
      tip: "Trace the symbol's changes across the novel, chapter by chapter, and link each one to the boys' decline.",
    },
  "In Macbeth, which line best shows Lady Macbeth's guilt breaking through?": {
    why: 'In her sleepwalking in Act 5 she still smells blood on her hand, long after the murder. The guilt she once denied breaks out in her sleep, against her will.',
    not: {
      'unsex me here':
        'This is her Act 1 call to be filled with cruelty, before the murder. It shows her ambition, not guilt.',
      'A little water clears us of this deed':
        'Just after the murder she dismisses the blood as easily washed away. It shows denial, the opposite of guilt breaking through.',
      'look like the innocent flower':
        'In Act 1 she tells Macbeth to hide his intentions behind an innocent face. It shows her cunning, not guilt.',
    },
    more: 'The three wrong lines all come before or straight after the murder, when she is in control. Setting them against Act 5 shows how far she falls.',
    tip: 'When choosing evidence, check when the line comes. A claim about guilt needs a line from after the crime, when its cost shows.',
  },
  'In Macbeth, which line best shows Macbeth admitting that he has no motive to kill Duncan except his own wish to rise?':
    {
      why: "In his Act 1 soliloquy Macbeth admits he has 'no spur' to the murder except ambition, which he pictures as a rider leaping so high that he falls. He names his only motive and foresees its danger.",
      not: {
        'Is this a dagger which I see before me':
          'The dagger speech comes just before the murder, when he hallucinates. It shows his disturbed mind, not his motive.',
        "Will all great Neptune's ocean wash this blood":
          'This comes after the murder and shows his guilt, not his reason for killing.',
        'I am in blood':
          'In Act 3 he feels too deep in murder to turn back. It shows his hardening, not his first motive.',
      },
      more: "He then decides against the murder, until Lady Macbeth's taunts change his mind. Ambition alone is not quite enough.",
      tip: 'For a claim about motive, choose a line where the character explains himself, such as a soliloquy, rather than one where he acts.',
    },
  'In Romeo and Juliet, which line best shows Juliet willing to give up her family for Romeo?': {
    why: 'On her balcony Juliet offers to give up her family name if Romeo will swear his love: she would stop being a Capulet for him. It shows her choosing love over family loyalty.',
    not: {
      'Parting is such sweet sorrow':
        'Juliet says this at the end of the balcony scene, about saying goodnight. It shows longing, not a break with her family.',
      "A plague o' both your houses":
        "Mercutio's dying curse on both families. It is not Juliet's, and it is a curse, not a sacrifice.",
      'These violent delights have violent ends':
        "Friar Lawrence's warning about rushed love. It is not Juliet's choice.",
    },
    more: 'She asks Romeo to deny his father and refuse his name, then offers the same sacrifice herself. Names stand for the feud the lovers want to escape.',
    tip: 'Check the speaker before you choose evidence. Two of these lines are spoken by other characters entirely.',
  },
  'In A Christmas Carol, which line best shows Scrooge promising to change for good?': {
    why: "In Stave 4, pleading at his own grave, Scrooge vows to keep Christmas in his heart 'all the year'. The promise looks beyond one day: he will change his whole life, which Stave 5 proves.",
    not: {
      'a squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner':
        "This is the narrator's Stave 1 description of the miser Scrooge was, not a promise to change.",
      'A merry Christmas, uncle':
        "Fred's cheerful greeting to his uncle in Stave 1. It is the nephew's line, not Scrooge's promise.",
      'The cold within him froze his old features':
        'This Stave 1 description shows his coldness, before any change.',
    },
    more: "He goes on: 'I will live in the Past, the Present, and the Future.' The promise names all three spirits, so the structure of the book is gathered into his vow.",
    tip: 'For a claim about change, look at the end of the journey, then compare it with the beginning to show how far the character has come.',
  },
  'In Jekyll and Hyde, which quotation best shows Jekyll enjoying the freedom of becoming Hyde?': {
    why: "In his final statement Jekyll describes stripping off his respectability like a schoolboy and springing 'headlong into the sea of liberty'. The image shows how thrilling, and how tempting, the freedom felt.",
    not: {
      "trampled calmly over the child's body":
        "Enfield's description of Hyde's cruelty, seen from outside. It says nothing about how Jekyll felt.",
      'The fog still slept on the wing above the drowned city':
        "A description of London's fog in 'Incident of the Letter'. It sets the scene; it shows no one's feelings.",
      'with ape-like fury':
        "The maid's account of Hyde attacking Carew. It shows his savagery, not Jekyll's pleasure.",
    },
    more: 'Jekyll admits he took pleasure in being Hyde, which is why he could not stop. The confession makes the horror moral as well as Gothic.',
    tip: "To show what a character felt, choose his own words over others' descriptions of him.",
  },
  'In An Inspector Calls, which quotation best shows Sheila taking responsibility for what she did?':
    {
      why: "Sheila admits she had Eva sacked from Milwards in a jealous temper, and her repeated 'never, never' shows real shame. She promises to change, something her parents never do.",
      not: {
        'He should be made an example of.':
          "Mrs Birling's demand for the father's punishment, before she knows it is Eric. It shows her refusing responsibility.",
        "it's better to ask for the earth than to take it":
          "The Inspector's reply to Birling about the strikers. It is his judgement, not Sheila's.",
        'community and all that nonsense':
          "Birling's sneer at the idea of caring for others. It shows the attitude Sheila comes to reject.",
      },
      more: "Sheila's change is the play's hope: by the end she is the one warning her parents that nothing has been learned.",
      tip: 'When a claim is about one character, check that the quotation is theirs and comes at the right moment.',
    },
  'In An Inspector Calls, Reading A says Sheila truly changes; Reading B says her change is skin-deep. Which reading does her late line "You began to learn something. And now you\'ve stopped." better support?':
    {
      why: 'Sheila judges her parents like a teacher whose pupils have given up: they began to learn, and stopped. Speaking this way, she shows she has not stopped, which supports a real change.',
      not: {
        'A, because she agrees at once to marry Gerald as planned':
          'When Gerald offers the ring again she refuses, for now: she is not ready to go back. That supports change, but this option misreports it.',
        'B, because she joins her father in laughing off the hoax':
          'It is Birling who laughs off the hoax. Sheila is frightened by how quickly her parents forget.',
        "B, because she mocks the Inspector's final speech herself":
          "It is Birling who imitates the Inspector's speech. Sheila is horrified by it.",
      },
      more: 'The line reverses the family order of Act 1, when Birling lectured the young. Now the daughter lectures the parents.',
      tip: 'When two readings compete, test both against a precise line, and say why the other reading fails here.',
    },
  'In Pride and Prejudice, which line best shows Elizabeth recognising her own prejudice?': {
    why: "After reading Darcy's letter, Elizabeth sees that she judged Wickham and Darcy by vanity and first impressions. 'Till this moment, I never knew myself' is her own admission that the prejudice was hers.",
    not: {
      'It is a truth universally acknowledged':
        "The narrator's ironic opening sentence, about society's assumptions. It says nothing of Elizabeth's self-knowledge.",
      'the proudest, most disagreeable man in the world':
        "This is the neighbourhood's verdict on Darcy after the first ball, the prejudice Elizabeth later questions. It is not her recognition.",
      'Are the shades of Pemberley to be thus polluted?':
        "Lady Catherine's outrage at the idea of Elizabeth marrying Darcy. It shows Lady Catherine's snobbery.",
    },
    more: "The novel's first title was First Impressions. Elizabeth's turning point comes when she realises how far hers had misled her.",
    tip: 'A claim about self-knowledge needs a line where the character judges herself, not others.',
  },
  'In Great Expectations, which line best shows Pip looking down on the forge and the life he was born to?':
    {
      why: "Pip says this after his visits to Satis House have taught him to despise the forge. The 'miserable' feeling is shame of Joe and his home, and he knows it is a poor thing to feel.",
      not: {
        'I loved her against reason, against promise, against peace':
          "Pip's confession of his hopeless love for Estella. It is about her, not his home.",
        "Ask no questions, and you'll be told no lies.":
          "His sister's snap at him as a child. It shows how he was treated, not his shame.",
        'life is made of ever so many partings welded together':
          "Joe's words about goodbyes, from a later chapter. They show Joe's wisdom, not Pip's shame.",
      },
      more: "The older narrator judges his younger self here: 'miserable' is both the feeling and his verdict on it.",
      tip: 'Retrospective narrators judge themselves. Quote the judgement and say what it reveals about the older Pip as well as the younger.',
    },
  'In Jane Eyre, Jane leaves Rochester when she learns he is married. Reading A: she leaves out of pride. Reading B: she leaves out of self-respect. Which reading does "I care for myself" better support, and why?':
    {
      why: 'Jane goes on: the more solitary and friendless she is, the more she will respect herself. Her care for herself is about keeping her integrity, not about wounded pride, and she loves him still.',
      not: {
        'A, because she wants to punish Rochester for lying':
          'She does not want to hurt him; leaving hurts her too. She leaves to keep her own principles.',
        'A, because she cares more for her pride than for love':
          "Pride would be about appearances. Her 'care for myself' is about keeping her self-respect, even at great cost.",
        'B, because she no longer loves Rochester at all':
          'She still loves him deeply, which is why the choice is so painful.',
      },
      more: "Jane's choice to leave the man she loves, rather than become his mistress, is the novel's great test of her independence.",
      tip: "Rival readings often name similar motives. Find the word in the text that decides between them: here, 'respect'.",
    },
  "In Frankenstein, which quotation best shows Victor's revulsion at the moment his creature comes to life?":
    {
      why: "As the creature's eye opens, Victor says 'the beauty of the dream vanished', and horror and disgust fill his heart. Two years of ambition turn to revulsion in a single moment.",
      not: {
        'I was benevolent and good; misery made me a fiend':
          "The creature's own words, much later, about how misery changed him. They are not Victor's.",
        'pour a torrent of light into our dark world':
          "Victor's dream of glory before the creation. It shows ambition, not horror.",
        'that I might infuse a spark of being into the lifeless thing':
          "Victor's hope just before the creature wakes. It shows his purpose, not his reaction.",
      },
      more: 'Victor runs from the room and abandons his creation. The novel asks whether the true horror is the creature, or the way its maker rejects it.',
      tip: 'Evidence for a sudden change should come from the moment itself. Check where each quotation sits in the chapter.',
    },
  'In Lord of the Flies, which quotation best supports the claim that the "beast" is inside the boys themselves?':
    {
      why: "The pig's head, the Lord of the Flies, tells Simon that the beast is not something the boys can hunt: 'I'm part of you'. Evil is inside them, which is the novel's central claim.",
      not: {
        "We're English; and the English are best at everything.":
          "Jack's boast, early in the novel, that the English are civilised. It is the confidence the novel destroys, not evidence of the beast within.",
        'You let the fire go out.':
          "Ralph's accusation after the hunters let the signal fire die. It shows conflict, not where evil lies.",
        'Seems to me we ought to have a chief to decide things.':
          "Ralph's first suggestion, about leadership. It shows the boys' attempt at order.",
      },
      more: 'The claim is unsettling because evil itself speaks it. Many readers trust it, because what follows in the novel bears it out.',
      tip: 'When the evidence comes from an unreliable speaker, say so, then explain why the rest of the text supports it anyway.',
    },
  "In Animal Farm, which line best shows Boxer's blind trust in the leaders who will betray him?": {
    why: "Boxer adopts the motto 'Napoleon is always right' and repeats it even when he has doubts. His faith in the leader is total, and it is the pigs who later sell him to the knacker.",
    not: {
      'All animals are equal.':
        "One of the original commandments, the revolution's ideal. It is not Boxer's personal trust in Napoleon.",
      'Four legs good, two legs bad':
        "The sheep's slogan, a simple chant. It shows propaganda, not Boxer's loyalty to a leader.",
      'The creatures outside looked from pig to man':
        "The novel's last line, about the pigs becoming human. It shows the betrayal, not Boxer's trust.",
    },
    more: "Boxer's other motto, 'I will work harder', shows the same loyalty in action. Orwell makes the strongest animal the most easily used.",
    tip: "For a claim about one character's attitude, choose the words that character adopts as their own.",
  },
  'In Much Ado About Nothing, after Hero is shamed, Beatrice tells Benedick: "Kill Claudio." Reading A: Beatrice is simply cruel. Reading B: her fury is loyalty to her wronged cousin. Which reading does the scene better support?':
    {
      why: "Beatrice believes Hero has been slandered and shamed in public. Her command, and her cry 'O God, that I were a man', show fury that she cannot fight for her cousin herself, which supports loyalty, not cruelty.",
      not: {
        'A, because she has always hated Claudio and wanted him dead':
          'She has no quarrel with Claudio before the wedding. Her anger begins with what he does to Hero.',
        'A, because she wants Benedick to prove he is a killer':
          "She asks Benedick to prove his love by defending Hero's honour, not to prove he can kill.",
        'B, because she knows Claudio is innocent of any wrong':
          'The opposite: she believes Claudio has wronged Hero terribly. That is why she wants him punished.',
      },
      more: "The command tests Benedick's love: he must choose between his friend and Beatrice. It turns the comedy suddenly dark.",
      tip: 'When a line sounds shocking, look at what has just happened. The scene often explains the extreme words.',
    },
  'In The Merchant of Venice, Reading A says Shylock is simply a villain. Reading B says the play shows his cruelty learned from Christian hatred. Which reading does "The villainy you teach me I will execute" better support?':
    {
      why: 'Shylock argues that Christians take revenge when wronged, so he will follow their example: the villainy he practises is the villainy they taught. The line supports Reading B, though it does not excuse what he plans.',
      not: {
        'A, because he admits he was born wicked and enjoys it':
          'He says the opposite: his villainy is taught, not born.',
        'A, because he wants to lend money to every Christian':
          'The line is about revenge, not lending. He has just been mocked, and his daughter has fled with his money.',
        'B, because he forgives Antonio at the end of the line':
          "He forgives no one: 'I will execute' is a threat, and he goes on to demand his bond.",
      },
      more: 'The speech makes the audience understand Shylock without excusing him. That double response is why the play is still argued over.',
      tip: 'When a character justifies a wrong, weigh the justification: does it explain the act, excuse it, or both?',
    },
  "In Twelfth Night, which line best shows that the play's comedy leaves one character bitter?": {
    why: 'Malvolio, tricked and locked up as a madman, storms off with this threat. His exit leaves a sour note in the happy ending: the joke has cost him dearly, and he does not forgive.',
    not: {
      'If music be the food of love, play on':
        "The duke's opening line about love. It sets a romantic mood, not bitterness.",
      'I am not that I play':
        "Viola's hint at her disguise. It is playful dramatic irony, not bitterness.",
      'Some are born great, some achieve greatness':
        "The forged letter's flattery that fools Malvolio. It shows the trick, not his bitterness afterwards.",
    },
    more: "Some productions make Malvolio's humiliation genuinely painful, so the audience's laughter turns uneasy. The comedy has a cost.",
    tip: "In a comedy, look for who is left out of the happy ending. That character often shows the play's darker side.",
  },
  'A narrator describes a miser: "The cold within him froze his old features, nipped his pointed nose, shrivelled his cheek, stiffened his gait". Which phrase best shows the coldness comes from inside him?':
    {
      why: "'Within' places the cold inside him: it is his nature, not the weather. The rest of the sentence shows that inner coldness acting on his body, as if it were frost.",
      not: {
        'nipped his pointed nose':
          "This shows the cold's effect on his face, but not where it comes from.",
        'shrivelled his cheek':
          "This describes what the cold does to him. Its source is named in 'The cold within him'.",
        'stiffened his gait': 'This shows the cold in the way he walks: an effect, not its source.',
      },
      more: 'Dickens turns a weather word into a word about character. The coldness inside the miser is so strong that it changes how he looks.',
      tip: "When asked where something comes from, look for a word of place or cause, such as 'within'.",
    },
  'A novel reports an attack seen from a window: "And then all of a sudden he broke out in a great flame of anger, stamping with his foot, brandishing the cane, and carrying on (as the maid described it) like a madman." Which words show the account is second-hand?':
    {
      why: "The bracket tells the reader that this is the maid's description, passed on by the narrator. Stevenson keeps the attacker at a distance: we see him only through other people's eyes.",
      not: {
        'a great flame of anger':
          'A metaphor for the sudden rage. It describes the attacker; it does not say who saw him.',
        'stamping with his foot, brandishing the cane':
          'Details of what the attacker did. They show the violence, not where the account comes from.',
        'all of a sudden': 'This shows how quickly the rage came, not who reported it.',
      },
      more: 'Almost everything in the novella reaches us second-hand, through letters, statements and witnesses. The truth about Hyde is always just out of sight.',
      tip: 'Notice how a writer frames evidence: who saw it, who reports it, and how far the reader can trust it.',
    },
  'A boy describes a jilted bride who has never taken off her wedding dress: "everything within my view which ought to be white, had been white long ago, and had lost its lustre, and was faded and yellow. I saw that the bride within the bridal dress had withered like the dress". Which phrase shows that she herself, not just her things, has decayed?':
    {
      why: "The other phrases describe the dress and the room. 'Withered like the dress' turns the decay onto the bride herself: she has aged and shrunk along with her clothes.",
      not: {
        'had been white long ago':
          'This describes the things that were once white, such as the dress and the flowers, not her.',
        'had lost its lustre':
          'This describes the fabric losing its shine. It shows the things decaying, not her body.',
        'faded and yellow':
          "Again the clothes, not the woman. The simile that includes her is 'withered like the dress'.",
      },
      more: 'The simile makes the bride part of the decay she has kept around her. Time has stopped in the house, but not in her body.',
      tip: 'With evidence questions, check exactly what each phrase describes. A claim about a person needs words about that person.',
    },
  'A narrator sees his first Martian: "Those who have never seen a living Martian can scarcely imagine the strange horror of its appearance." Which words admit that language cannot capture the sight?':
    {
      why: "'Can scarcely imagine' tells readers that no description will be enough: they would have to see it. Admitting the limits of words makes the horror bigger than anything described.",
      not: {
        'Those who have never seen':
          "This names the readers who have not seen one. The admission is in what they 'can scarcely' do.",
        'a living Martian': 'This names the creature, alive. It admits nothing about language.',
        'the strange horror':
          "This names the feeling, but it is 'can scarcely imagine' that admits words fall short.",
      },
      more: 'The narrator then describes it anyway, in detail: the V-shaped mouth, the tentacles. The admission makes the description that follows more frightening.',
      tip: "Writers often say something cannot be described, then describe it. Comment on what that admission does to the reader's imagination.",
    },
  'In a fable of 1945, the farm\'s windfall apples ripen: "The animals had assumed as a matter of course that these would be shared out equally; one day, however, the order went forth that all the windfalls were to be collected and brought to the harness-room for the use of the pigs." Which words show the animals never thought to question the sharing?':
    {
      why: "To assume something 'as a matter of course' is to take it for granted without a second thought. The animals have not even considered that the pigs might keep the apples, which makes the betrayal easy.",
      not: {
        'shared out equally':
          "This is what they expected to happen. The words that show they never questioned it are 'as a matter of course'.",
        'the order went forth':
          "This is the pigs' command, which ends the sharing. It shows their power, not the animals' trust.",
        'for the use of the pigs':
          'This shows who really gains, the betrayal itself, not how the animals felt before it.',
      },
      more: "Squealer tells them the pigs are 'brainworkers' who need the apples, and the animals accept it. Orwell sets their trust and its betrayal side by side in one sentence.",
      tip: "Look for phrases of assumption, such as 'of course' and 'naturally'. They often mark a trust that is about to be broken.",
    },
  'A novel introduces a married couple: the husband was "so odd a mixture of quick parts, sarcastic humour, reserve, and caprice, that the experience of three-and-twenty years had been insufficient to make his wife understand his character". Which word carries the narrator\'s quiet verdict on the wife?':
    {
      why: "'Insufficient' means not enough: twenty-three years have not been enough for his wife to understand him. The cool, formal word passes judgement on her without a harsh word, which makes the mismatch dryly comic.",
      not: {
        'three-and-twenty':
          "This gives the length of the marriage. It is 'insufficient' that says the years were not enough.",
        caprice:
          "'Caprice' means unpredictable whims, one of the qualities she cannot follow. It describes him, not her failure.",
        mixture: "'Mixture' sums up his complicated character, not her failure to understand it.",
      },
      more: "The narrator then calls the wife 'a woman of mean understanding'. Austen sets out the couple's mismatch in two sentences of irony.",
      tip: "Austen's narrator often judges through one precise, formal word. Find it and explain the irony.",
    },
  'Out in the storm, an old king cries: "I am a man / More sinn\'d against than sinning." Reading A: he admits his own faults. Reading B: he sees himself mainly as a victim. Which reading does the line support, and why?':
    {
      why: "'More sinn'd against than sinning' admits some sin, but weighs it as smaller than the wrongs done to him. At this point he sees himself chiefly as a victim of his daughters.",
      not: {
        'A, because he confesses he has sinned more than anyone':
          'He says the opposite: he has been sinned against more than he has sinned.',
        'A, because he begs his daughter for forgiveness here':
          "He asks his youngest daughter's forgiveness much later, in Act 4. Here he is raging at the other two.",
        'B, because he says he has never done anything wrong':
          "'Than sinning' admits he has sinned a little. Reading B rests on the balance, not on total innocence.",
      },
      more: "By Act 4 he has learned more: 'I am a very foolish fond old man.' The play traces his journey from victimhood to self-knowledge.",
      tip: "When a line weighs two things, notice the balance. Small words such as 'more' and 'than' decide between readings.",
    },
  'Seeing strangers for the first time, a young woman cries "O brave new world / That has such people in \'t". Her father answers: "\'Tis new to thee." Reading A: the play shares her wonder. Reading B: the play questions it. Which reading does her father\'s reply support?':
    {
      why: "Prospero's four words are dry: the world is new only to her. He knows these 'goodly creatures' include the men who stole his dukedom, so the reply undercuts her wonder.",
      not: {
        'A, because he agrees that every one of them is good':
          'He does not praise them. His short reply sets her innocence against his experience.',
        'A, because he cries out with the same delight as she does':
          'His tone is the opposite of hers: four flat words after her excitement.',
        'B, because he says that none of the strangers are real':
          'The strangers are real: they are the shipwrecked lords. He questions her judgement of them, not their existence.',
      },
      more: 'Among those she admires are men who plotted to kill a king. The play lets the audience hold her wonder and his knowledge at once.',
      tip: "When one character answers another, compare their tones. A flat reply to an excited line often carries the writer's irony.",
    },
  'In A Passage to Africa, which quotation best shows George Alagiah turning a harsh judgement on his own profession?':
    {
      why: "A ghoul is a creature of folklore that preys on the dead, so 'ghoulish' gives the hunt for pictures a grave-robbing appetite. The plural 'journalists' makes it a charge against the whole trade, and Alagiah includes himself before any reader can accuse him.",
      not: {
        'a thousand hungry, lean, scared and betrayed faces':
          'The opening list widens from hunger to fear to betrayal, a verbal wide shot of the crowd. It implies that someone is to blame, but not reporters.',
        'I owe you one':
          'The closing idiom for a small favour is warm and modest, and its smallness against the debt is what lingers. It speaks to the man, not about reporters.',
        'between the rich world and the poor world':
          'This widens the meeting of two men into a question about global inequality. It names a divide, not a verdict on journalism.',
      },
      more: "He goes on to compare the search for the shocking to a drug habit and admits 'This sounds callous'. Choosing the harshest words for himself first disarms criticism and wins the reader's trust.",
      tip: 'When a writer criticises himself, say what the self-criticism achieves: here it makes his later account of the smile, and of his debt, easier to believe.',
    },
  'In Significant Cigarettes, which quotation best shows that Lev feels somehow to blame for outliving his wife?':
    {
      why: "Since Marina's death Lev avoids his reflection, because this is what he always sees in it. 'Still' makes survival sound like something he has failed to stop doing: survivor's guilt, irrational and powerful.",
      not: {
        'They ran out of trees':
          "Lev's five blunt words explain why the Baryn sawmill closed. The understatement is darkly comic, and it concerns a failing local economy, not his wife's death.",
        'aching for the comfort of nicotine or oblivion':
          'The craving at its peak: pairing nicotine with oblivion shows the cigarette stands for escape, a way to stop feeling. It names a wish, not a sense of blame.',
        'make them share it with me: their infernal luck':
          "Near the end Lev turns to the English, whose 'infernal' luck he means to share. It mixes envy with resolve, not guilt.",
      },
      more: "Tremain withholds the cause: the reader learns that his wife has died only at line 44. Small details carry the weight, such as an unlit cigarette becoming 'a companion'.",
      tip: "Choose the quotation whose key word carries the feeling, then analyse that word: here 'still' turns being alive into a kind of failure.",
    },
  'In Explorers, or boys messing about?, which quotation best shows Steven Morris making the men passive at the moment of their rescue?':
    {
      why: "'Plucked' suggests something small and helpless lifted out with ease, and the passive construction makes the men the ones acted upon while the Chilean naval ship acts. The heroic role an explorer story would give them passes to the rescuers.",
      not: {
        'claims to have been flying since the age of five':
          "The doubting verb 'claims' questions Smith's account of himself. It undermines the men, but it says nothing about the rescue or who acts in it.",
        'ended in farce':
          'The opening words cast the men as comic figures, but they describe their previous expedition, halted in April, not this rescue.',
        'hit the headlines for the wrong reasons':
          'A journalistic idiom for embarrassment that sets up the Bering Strait story as a pattern. It concerns their record, not the rescue.',
      },
      more: "The pattern recurs when a Chilean vessel collects them, while HMS Endurance gets the energetic active verbs, heading for the scene and sending out its Lynx helicopters. 'Icy' keeps the real danger in view.",
      tip: "Passive voice is easy to name and easy to waste. Say who acts and who is acted upon, and what that does to the reader's view of the men.",
    },
  'In "Disabled" by Wilfred Owen, the soldier notices how "the women\'s eyes / Passed from him to the strong men that were whole". Reading A: Owen presents the women as shallow. Reading B: Owen shows the women only through the soldier\'s shame. Which reading does the poem better support?':
    {
      why: "Owen never gives the women a voice: the poem shows not what they feel but what he believes they see. He joined partly 'to please the giddy jilts', so the gaze he risked his body for now looks past him, turning his own values back on him.",
      not: {
        'A, because the women tell him to his face that a wounded man is not worth a look':
          "No woman speaks in the poem. The rejection is a glance passing over him, and 'Passed' is a quiet, almost polite verb, which makes it colder.",
        'A, because Meg, the girl he joined up to please, turns away from him at his homecoming':
          'Meg is named once, as a reason he joined, and never appears again. At the homecoming only a solemn man thanks him.',
        'B, because the women weep openly for him, though he mistakes their tears for disgust':
          'Nothing in the poem shows the women weeping. The final stanza gives only their eyes, moving past him to the strong men.',
      },
      more: "'Whole' implies, without saying it, that he is now only part of a man, and answers the flat word 'Legless' at the start. The poem leaves the reader to judge a society that valued young men chiefly for their bodies.",
      tip: "Calling the women shallow is a weak reading. A stronger answer says whose eyes we see through, and how the poem turns the soldier's values back on him.",
    },
  "Reading A says Maya Angelou's Still I Rise is one woman's personal boast; Reading B says it speaks for a whole people's history. Which reading do the final two stanzas better support?":
    {
      why: "In the last two stanzas the addressee disappears and she places herself inside a much longer story: she rises from the 'huts of history's shame' and becomes the answer to her ancestors' longing, so a personal rising turns collective and historical.",
      not: {
        'A, because the last stanza turns back to the "you" for one final personal taunt':
          "The 'you' vanishes at stanza 8, the turn of the poem. It ends instead with 'I rise' three times, each standing alone.",
        'A, because she never mentions any past except her own unhappy childhood':
          'The poem never mentions her childhood. The final stanzas reach back past her own life to slavery and the hopes of her ancestors.',
        'B, because every stanza from the first line onwards names slavery outright':
          "The right reading for the wrong reason: the quatrains taunt a 'you' about sassiness and oil wells, and slavery enters only in the last two stanzas.",
      },
      more: "The shift is also from simile to metaphor. In the quatrains she is like dust, or air; in the last stanzas she simply is something, an ocean, then the answer to the slave's dream.",
      tip: 'When two readings compete, test them against a specific part of the text, here the turn at stanza 8, and quote the line that settles it.',
    },
  "In To Kill a Mockingbird, which quotation from the verdict scene in Chapter 21 best shows the jurors' guilt in their body language, before the verdict is read?":
    {
      why: "The jurors cannot meet the eyes of the man they have condemned, so their guilt shows in a gesture before the word guilty is spoken. Scout, a lawyer's child, reads the sign at once, and the reader is warned a moment before the verdict, which then confirms the dread.",
      not: {
        'Judge Taylor was polling the jury':
          'This reports the legal procedure flatly, as each juror confirms the verdict aloud. Scout has shut her eyes, so the scene is heard, not seen.',
        'knowing that the gun was empty':
          "Scout's simile for Atticus's case: his aim is true but he has nothing to fire, an echo of the mad dog in Chapter 10. It shows his helplessness, not the jury's guilt.",
        "Miss Jean Louise, stand up. Your father's passin'.":
          "Reverend Sykes's words close the chapter on an act of respect from the balcony for the man who lost. They come after the verdict.",
      },
      more: 'Lee lets body language carry the moral judgement. The trial fills six chapters, so the reader has sat through the evidence as the jury did, and knows exactly how much the verdict ignores.',
      tip: 'In a passage question, look for small physical details as well as speech. A gesture like this lets you write about how Lee shows a judgement rather than stating it.',
    },
  'In Things Fall Apart, which quotation best shows the narrator presenting the talk of Umuofia as an art to be savoured?':
    {
      why: 'The narrator steps out of the scene between Unoka and Okoye to explain a custom to a reader who may not know it, and does so in an image of food: talk is to be relished, not hurried. The sentence practises the art it describes.',
      not: {
        'their love of superfluous words':
          "These are the District Commissioner's thoughts in Chapter 25, condemning the very habit Chapter 1 celebrates. They show his contempt, not the narrator's delight.",
        'Okonkwo was provoked to justifiable anger':
          "Free indirect style in Chapter 4: 'justifiable' is Okonkwo's own judgement of his temper, which a beating in the sacred Week of Peace exposes.",
        'among these people a man was judged according to his worth':
          'This remark in Chapter 1 sets out how the clan measures a man, by his worth. It concerns judging men, not the art of conversation.',
      },
      more: 'Proverbs show a culture with its own wisdom and its own rhetoric, which answers the colonial claim that it had neither. Remember Chapter 25: the indirectness Chapter 1 presents as a skill is exactly what the Commissioner finds infuriating.',
      tip: "For a claim about how a narrator presents a culture, choose the narrator's own words, not a character's opinion. Then analyse the image, here food, and say what it makes talk feel like.",
    },
  'In Antony and Cleopatra, which quotation best shows Antony feeling his own power drain away from him?':
    {
      why: "In Act 3, Scene 13, as he finds Caesar's messenger Thidias kissing Cleopatra's hand, Antony feels his power melting from him. Trace the verb through the play and it changes direction: the lovers first call on whole countries to melt, and then Antony's own power goes.",
      not: {
        'Let Rome in Tiber melt':
          "Antony's cry in Act 1, Scene 1 runs the other way: in love, he calls on a whole empire to melt, and boasts of the space he stands in.",
        'Melt Egypt into Nile':
          "Cleopatra says this in Act 2, Scene 5, in fury at the news of Antony's marriage. It is her rage, calling on a country to dissolve.",
        "The crown o' th' earth doth melt.":
          'Cleopatra speaks this in Act 4, Scene 15, as Antony dies in her monument. She watches him dissolve; it is not his own sense of losing power.',
      },
      more: "The chain makes Antony's fall feel like a slow loss of solid shape. It ends in Act 4, Scene 14, where he sees himself as a cloud whose outline blurs until it is indistinct 'As water is in water'.",
      tip: "Track one image across a play and note who uses it and when. A pattern that changes direction, as melting does here, is strong evidence for an argument about a character's fall.",
    },
  "In A Midsummer Night's Dream, which quotation best shows a ruler taking the blame for the disorder of the natural world?":
    {
      why: "Titania ends her account of floods, rotting crops and confused seasons by owning the cause: the evils come from her quarrel with Oberon. Picturing the evils as children, a 'progeny', is pointed in a speech about a disputed child, and 'our' shares the blame, where Oberon blames her alone.",
      not: {
        "Hippolyta, I woo'd thee with my sword, / And won thy love doing thee injuries;":
          "Theseus does admit a fault, that he won Hippolyta by conquest, but it concerns his courtship, not nature. He promises to wed her 'in another key'.",
        'If we shadows have offended, / Think but this, and all is mended,':
          "Puck's epilogue apologises to the audience for the play itself, not for disordered seasons. 'Shadows' means both spirits and actors.",
        'To whom you are but as a form in wax / By him imprinted':
          "Theseus is describing a father's power over a daughter, who may be kept or disfigured like an impression in wax. It is about authority, not nature.",
      },
      more: 'In this speech nature takes on the moods of its quarrelling rulers: revengeful winds, an angry moon, frost falling into the lap of a summer rose. The moral seriousness it gives Titania makes her later humiliation with Bottom harder to laugh at.',
      tip: 'An evidence question asks you to match a quotation to a precise claim. Check every part of the claim, the speaker as well as the idea, before you choose.',
    },
  'In I\'m the King of the Castle, Hooper\'s first words to the adults after Kingshaw has dragged him from the stream are "It was Kingshaw, it was Kingshaw, he pushed me in the water." Reading A: Hill shows the stronger boy winning. Reading B: Hill shows the boy who understands adults winning. Which reading does the novel better support?':
    {
      why: "Kingshaw has just saved Hooper's life, and Hooper's first act is a lie in the voice of a frightened child, the kind adults are ready to believe. Kingshaw is braver and more capable, but Hooper knows how to make grown-ups take his side, and that is how he keeps winning.",
      not: {
        'A, because in Hang Wood it is Hooper who takes charge, while Kingshaw panics in the storm':
          'The reverse: Hooper is terrified by the thunderstorm and begs not to be left alone, while Kingshaw takes charge. In the wood Kingshaw is the stronger boy.',
        "B, because Mrs Kingshaw sees through the lie at once and takes her own son's side":
          'It is Kingshaw his mother scolds when he calls Hooper a liar. The adults never see what the reader sees.',
        'A, because Kingshaw really did push Hooper into the stream, as the adults rightly decide':
          'Kingshaw found Hooper face down in the water and dragged him out. The lie turns a rescue into an accusation, and Kingshaw is astounded.',
      },
      more: "Power moves in the novel, but each time Hooper recovers it through the adults, with a lie here and, at Leydell Castle, a fall they misread. The repeated 'it was Kingshaw' makes him sound like a small child, which is exactly why he is believed.",
      tip: 'When two readings compete, test both against a precise moment. Here the timing decides it, straight after the rescue, so quote the line and name what has just happened.',
    },
  "In A Taste of Honey, Geof warns Jo \"If you don't watch it, you'll turn out exactly like her.\" Reading A: Delaney presents Helen as simply a selfish mother, Jo's opposite. Reading B: Delaney shows mother and daughter as more alike than either can bear. Which reading does the play better support?":
    {
      why: "In the Act 2 fight Helen accuses Jo of throwing herself at the first man she met, and Jo turns the charge back in three words. Geof later names what the play's structure shows, and Jo's denial only confirms how much she fears it.",
      not: {
        "A, because Jo never repeats any of Helen's choices and turns away every man she meets":
          "Jo falls for Jimmie, a sailor who soon leaves, and is left pregnant and alone. The play keeps showing the daughter repeating her mother's patterns.",
        "A, because Helen never shows any concern for Jo, even when she finds Jimmie's ring":
          "Helen's rage at the ring is fear for her daughter: she pleads 'Why don't you learn from my mistakes?' Her concern is real, if fitful.",
        'B, because Helen insists that she has always been a proper mother who cooked for Jo':
          "The opposite: Helen asks 'Have I ever laid claim to being a proper mother?' and refuses to cook for Jo.",
      },
      more: 'The circular structure makes the same point: Helen arrives with her luggage at the start and again at the end, and Jo says they are back where they started. Whether Jo can break the pattern is left open.',
      tip: 'A simple reading of a character is rarely the strongest. Test it against a precise exchange, quote it, and show how the play complicates the easy view.',
    },
  "In Of Mice and Men, which quotation best shows that Steinbeck will not make the ranch's outsiders simply innocent victims?":
    {
      why: "Alone with Lennie, Crooks torments him with the idea that George may not come back, and enjoys it. Setting 'pleasure' beside 'torture' is uncomfortable: loneliness and humiliation have made him cruel, and the one man weaker than him becomes his target. The reader must understand the cruelty without excusing it.",
      not: {
        'a mauled copy of the California civil code for 1905':
          "From the description of Crooks's room: a battered book of laws that do nothing to protect him. It shows a wrong done to him, not one he does.",
        "A guy goes nuts if he ain't got nobody.":
          "Crooks's admission of loneliness, in plain slang, wins sympathy. It shows what isolation does to a man's mind, not a man taking pleasure in hurting another.",
        'He did not look down at the dog at all.':
          'Candy cannot look at the dog he has agreed to let Carlson shoot. The gesture makes him a victim to pity, not someone who hurts others.',
      },
      more: "Curley's wife does the same in the same chapter, threatening Crooks with lynching once he tells her to leave. The powerless turn on each other, each finding someone weaker, which is one of the bleakest patterns in the novella.",
      tip: 'Sympathy alone is a thinner argument. A stronger answer shows that loneliness makes people cruel as well as sad, and explains why Steinbeck refuses to excuse either.',
    },
  'In A View from the Bridge, Alfieri\'s last speech returns to the idea of his first, that it is better to "settle for half". Reading A: the ending confirms his faith in compromise. Reading B: the ending shows him doubting it. Which reading does the final speech better support?':
    {
      why: "Alfieri's last speech opens almost word for word as his first did, but the idea returns a third time with 'it must be', which sounds like a man persuading himself. He admits he will love Eddie more than all his sensible clients, and he mourns him with alarm, not grief or pity.",
      not: {
        'A, because he repeats his opening words exactly and ends the play calm and content':
          'The repetition is almost, not exactly, word for word, and the calm version is soon followed by the anxious one. The play ends on the word alarm.',
        'A, because he condemns Eddie as wholly bad, a warning to all who will not compromise':
          "He calls Eddie 'not purely good, but himself purely', which separates goodness from integrity. He admires Eddie even while condemning what he did.",
        'B, because he admits he told Eddie to fight Marco, and now regrets that advice':
          'Alfieri never tells Eddie to fight. He warns him on both visits, and says he could see every step coming without being able to stop it.',
      },
      more: "Set the calm 'Now we settle for half, and I like it better' of the opening beside the insistence at the end. Miller brings the phrase back twice in the final speech, and the change in pressure is the best evidence that the play doubts its narrator's creed.",
      tip: 'When a frame returns, compare the versions word by word. A change in punctuation or pressure is evidence for a reading, and quick proof of whole-play knowledge.',
    },
  'In The Joy Luck Club, which quotation best shows a mother hoping that her children can hold two cultures together at once?':
    {
      why: "Lindo sets out the mothers' shared dream as a recipe, with the colon introducing it: 'circumstances', the outside opportunities of America, and 'character', the inside values of China. Her very next question admits that the two do not mix, and the story shows why: an American childhood made an American daughter.",
      not: {
        'If you show one, you must always sacrifice the other.':
          "Lindo again, in the same story, but this is the dream's cost: two faces, and showing one always sacrifices the other. It shows the plan failing, not the hope.",
        'My mother believed you could be anything you wanted to be in America.':
          "Jing-mei's first sentence of Two Kinds states the American Dream. Suyuan's belief is about America alone, and the story shows it turning into pressure on a child.",
        'They see daughters who grow impatient when their mothers talk in Chinese':
          'Jing-mei understands why the aunties are frightened: in her they see daughters deaf to their mothers. It shows a fear of losing the inheritance, not a hope of keeping both.',
      },
      more: 'Tan sets the hope and its cost in the same story, Double Face. The book\'s ending tests the dream the other way round, when Jing-mei crosses into China and says "I am becoming Chinese."',
      tip: 'Choose the quotation that states the claim most exactly, then show you know its context: who says it, in which story, and what follows it.',
    },
  'In Klara and the Sun, Reading A says the novel shows that the Sun healed Josie. Reading B says the novel leaves open what healed her. Which reading does the novel better support?':
    {
      why: "Klara states the miracle as plain fact: the Sun's special nourishment 'proved as effective for Josie as it had for Beggar Man'. That certainty is hers, not the novel's. Ishiguro never confirms it, and Rick admits he had thought the whole business 'AF superstition', though he is no longer sure.",
      not: {
        'A, because Josie recovers the moment Klara destroys the Cootings Machine in Part Four':
          'After Part Four Josie grows weaker, and on the drive home Klara sees a new Cootings Machine at work. The recovery comes in Part Five, on a dark morning.',
        "A, because Mr Capaldi's tests on Klara in Part Six prove that sunlight cured Josie":
          'Capaldi asks to study Klara, and the Mother refuses. No test proves anything, and the novel never confirms what healed Josie.',
        'B, because Josie dies at the end of Part Five, so the Sun never heals anyone at all':
          'Josie recovers, grows up and leaves for college. What the novel leaves open is why she recovered, not whether she did.',
      },
      more: 'The plot is shaped like a fable, with a promise, a sacrifice and a reward, laid over a realistic story of illness. That double shape keeps both explanations open: a miracle, or a coincidence noticed by a machine that sees patterns.',
      tip: "Keep the narrator's view and the reader's apart. Say what Klara reports, then what the novel lets us see around her, and argue from the gap.",
    },
  "In La Belle Dame sans Merci, Reading A says Keats presents the lady as a cruel enchantress. Reading B says Keats lets us see her only through the knight's own account. Which reading does the poem better support?":
    {
      why: "Everything we know of the lady comes from the knight. Her only words, 'I love thee true', reach us in his translation of a language he admits was strange, and even her name is cried by the pale kings of his dream. Keats never lets her speak in her own voice, so her guilt cannot be proved.",
      not: {
        'A, because she tells the knight plainly that she means to trap him and never let him go':
          "She says nothing of the kind. Her one line in the poem is 'I love thee true', and it comes to us through the knight's report.",
        'A, because the questioner saw her lure the knight away to her elfin grot by the lake':
          "The questioner arrives after the story is over and sees only symptoms in the knight's face. The lady never appears in the questioner's stanzas.",
        'B, because the pale kings in his dream praise her kindness and beg him to go back':
          'The pale kings warn him: they cry that the lady without mercy has him in thrall. Reading B is right, but not for this reason.',
      },
      more: 'The questioner gives the only outside view, and it sees symptoms, not causes. The knight reports how she looked, not what she felt. The weakest answers call her simply evil; the strongest ask who gave her that name, and why.',
      tip: 'When a story reaches us through one witness, ask what that witness could know. Quote a line where the knight interprets rather than reports.',
    },
  'In The Curious Incident of the Dog in the Night-Time, which quotation best shows Christopher turning the usual view of him upside down, so that it is everyone else who falls short?':
    {
      why: 'Christopher reverses the usual view of him: he is not missing information, everyone else is. He explains that most people only glance, while he takes in every detail, which is why a new place overwhelms him. The line invites the audience to see his difference as a way of perceiving, even a gift.',
      not: {
        'Does that mean I can do anything, do you think?':
          "The last line before the curtain call asks Siobhan for a reassurance nobody can give. It looks at his own future, not at other people's failings.",
        'I can because I went to London on my own.':
          "Christopher answers Siobhan's caution with evidence, like a mathematician proving a claim. It is about his own ability, not other people's failings.",
        "It's a book and it's for me and not everybody, just for me":
          "He refuses Siobhan's idea of a play, insisting the story is private. It raises the question of who owns his story, not who notices more.",
      },
      more: "Stephens stages the idea at once: as the company build the inside of the train around him, the Voices speak the few simple thoughts an ordinary passenger might have while looking out at a field. The audience's own lazy glancing becomes part of the subject.",
      tip: 'Pick the quotation whose words carry the claim, then say what the staging around it adds. In a play, the evidence is in what we see as well as what we hear.',
    },
  'In Anita and Me, which quotation best shows Meena beginning to find comfort in fitting neither the Indian nor the Tollington idea of a girl?':
    {
      why: "Just before this, Meena calls herself a 'freak' who fits neither the Indian nor the Tollington idea of a girl. Then the sentence turns: the 'grey area' she was ashamed of becomes a place, and 'home' gives it warmth. 'Increasingly' matters, since this is a process, and the fete a chapter later will test it hard.",
      not: {
        'I wanted to shed my body like a snake slithering out of its skin':
          "The snake simile shows the opposite wish: to shed her skin and emerge 'pink and unrecognisable'. It is a wish to escape her body, not to be at ease in it.",
        'worse than they already think we are. You prove you are better. Always.':
          'This is the family rule drummed into her: any mistake counts against them all. It shows a burden that never ends, not comfort in who she is.',
        'my childhood would begin ebbing away with the fall of the autumn leaves':
          "The adult narrator's foreshadowing at the start of Chapter 11: the end of childhood is coming. It looks ahead to loss, not to comfort in who she is.",
      },
      more: "Set the snake image beside Chapter 13, where Meena's body at last fits her 'to perfection'. The more convincing reading is that Syal offers this in-between identity as the novel's answer, not its problem, but makes Meena earn it.",
      tip: "For an evidence question, choose the quotation whose key words carry the claim, here 'home', and know what comes just before and after it in the novel.",
    },
  'In The Woman in Black, which quotation best shows Hill making the woman a figure of pity and of menace at the same time?':
    {
      why: "In the graveyard Arthur settles on a paradox. 'Yearning' is longing, a feeling of lack; 'malevolence' is the wish to do harm. Joined, they hold Jennet's story in three words: a mother who wants what was taken from her, and hates whoever took it. 'Desperate' adds that the feeling is beyond control.",
      not: {
        'some terrible wasting disease':
          "Arthur's first, medical explanation at the funeral. It is sympathetic, so the reader feels pity before fear, but it holds no menace yet.",
        'It pierced me through.':
          'At the fair her look becomes a weapon, and the short sentence mimics the shock. It shows menace only, moments before the accident.',
        'Those who have suffered worst say least':
          "Samuel Daily explaining the town's silence: it was never superstition but grief too painful to speak of. It is about the townspeople, not the woman.",
      },
      more: "Hill keeps joining feelings that pull against each other, longing and hatred, danger and beauty, so the reader is asked to feel two things at once. That is why the woman is more frightening than a simple villain: her hatred began as a mother's love.",
      tip: 'When a phrase joins opposites, name both halves and say what the combination does that either word alone could not. A paradox is evidence for a complex reading.',
    },
  "In 'Odour of Chrysanthemums' from Telling Tales, which quotation best shows Elizabeth recognising, over her husband's body, that the failure of their marriage was not his fault alone?":
    {
      why: "Over the body, Elizabeth sees their marriage as a blind struggle: 'in the dark' is repeated, so neither saw whom they were fighting. The verb 'fought' admits her part as well as his, rather than resting the blame on his drinking.",
      not: {
        'Her face was calm and set, her mouth was closed with disillusionment.':
          'This comes in Part I, before Walter is found. It shows what the marriage has done to her, her silence hardened by experience, but it admits nothing of her own part.',
        "He'll come home when they carry him.":
          'She says it bitterly, meaning he will be carried home drunk, and the reader hears that he will be carried home dead. It blames him; it admits nothing.',
        'It was chrysanthemums when I married him, and chrysanthemums when you were born':
          "She tells Annie what the flowers have meant through every stage of the marriage. It records the marriage's history, not her share in its failure.",
      },
      more: "The darkness links the pit and the unlit cottage to the darkness between two people, which is the story's real tragedy. In the same passage she sees that she has been fighting a husband who did not exist, and she is 'grateful to death, which restored the truth'.",
      tip: "For an evidence question, pick the line whose key word carries the claim, here 'fought', then place it: whose thought it is, and at what point in the story it comes.",
    },
  "In Oranges are not the Only Fruit, which quotation best shows the narrator exposing her mother's hypocrisy without ever stating it?":
    {
      why: "A balanced sentence that turns on 'but': the moral verdict on the butcher, once her sweetheart, comes first, and the cheap mince second. The narrator never calls her mother a hypocrite; she places principle and practice side by side and lets the reader draw the conclusion. The 2025 examiners' report singles it out.",
      not: {
        'She had never heard of mixed feelings. There were friends and there were enemies.':
          "The opening's deadpan summary of the mother's worldview, with no room for mixed feelings. It shows her rigidity, not a gap between what she preaches and what she does.",
        "I'm not havin' demons here.":
          'The mother putting Jeanette out of the house, her northern voice at its most final. It shows rejection, and she means every word, so it is not hypocrisy.',
        'To the pure all things are pure':
          "Jeanette answers the pastor with St Paul's letter to Titus. It shows her turning scripture to her own defence, not her mother's hypocrisy.",
      },
      more: "The mother's principles are real until they cost her something. Winterson's restraint is sharper than an accusation and keeps the tone affectionate, so the reader laughs at a childhood that was also frightening without seeing the mother as a monster.",
      tip: "Deadpan irony is a method: name it, then show how the sentence's balance, principle first and practice second, lets the reader reach the verdict the narrator never states.",
    },
  'In Coram Boy, when Alexander\'s sister begs their mother to stop what is being done to him, Lady Ashbrook replies "He must accept his status and birth". Reading A: the pressure on Alexander is one man\'s temper. Reading B: it belongs to his whole family and class. Which reading does this line better support?':
    {
      why: "The modal 'must' allows no argument, and 'status and birth' fixes identity at the moment a person is born. She goes on to insist that Ashbrook must carry on as it has for three centuries. Coming from the mother, not the father, the line shows the expectation belongs to the whole family and class.",
      not: {
        'A, because Lady Ashbrook goes on to beg Sir William to let the boy keep his music':
          "She does the opposite, insisting that the house must go on as it has for three centuries. She shares her husband's view of her son's duty.",
        'B, because Isobel agrees with her mother that Alexander must give up his music':
          'Isobel is the one who has begged her mother to stop what is being done to Alexander. She does not agree with her at all.',
        'A, because it is Sir William, not his wife, who says this to their daughter':
          "It is Lady Ashbrook who says it, answering her daughter. That the mother speaks is exactly why the line suggests more than one man's temper.",
      },
      more: "Lady Ashbrook is the novel's most interesting portrait of charity: she supports the parish orphanage against men such as Admiral Bailey, yet defends the order that makes reform necessary. Sir William's 'I've enough songbirds on this estate' shows the father's side of the same view.",
      tip: "When a reading turns on who speaks, say why the speaker matters: a mother defending her husband's rule points to a system, not one person's cruelty.",
    },
  'In Silas Marner, Silas finds a child asleep on his hearth and "had a dreamy feeling that this child was somehow a message come to him from that far-off life". Reading A: Eliot presents the child\'s arrival as a miracle. Reading B: Eliot gives it ordinary causes and leaves the reader between providence and chance. Which reading does the chapter better support?':
    {
      why: "Eliot gives every strange detail an everyday cause: the child comes in unseen during one of Silas's cataleptic fits, and his short sight and the low fire make her hair look like gold. Silas reads her as a message, but the narrator neither confirms nor denies it, which leaves the reader where the novel wants us.",
      not: {
        'A, because the narrator states plainly that God sent the child to Silas to replace his gold':
          'The narrator never says so. The final clause insists that Silas had not yet thought of ordinary natural means, which keeps both explanations open.',
        'A, because Silas sees an angel carry the child across the snow and lay her by his fire':
          "No angel appears. The child's mother has collapsed in the snow, and the child comes in through the open door while Silas stands unaware in a fit.",
        "B, because Silas knows at once that the child is Godfrey's, and decides to keep it secret":
          'Silas does not know whose child she is. Godfrey recognises his daughter at the Red House, and Nancy learns the truth only in Chapter 18.',
      },
      more: "This is the novel's method in miniature: a fairy-tale event, gold turning into a golden-haired child, with an everyday cause underneath it. Eliot told her publisher the story came to her as 'a sort of legendary tale', but that she grew inclined to 'a more realistic treatment'.",
      tip: "When a novel offers a miracle and an explanation, quote the words that keep both open, here 'seemed' and 'somehow', and argue from the balance rather than choosing one.",
    },
  "In The War of the Worlds, the artilleryman on Putney Hill declares humanity beaten and plans to live in the drains and one day seize the Martians' machines. Reading A: Wells offers the plan as humanity's real hope. Reading B: Wells shows it as a fantasy that turns cruel. Which reading does the chapter better support?":
    {
      why: "The artilleryman's vision is cruel from the start: the weak, he says, 'have to die'. The narrator is inspired at first, then sees how little digging has been done, and leaves him to his champagne and cards. Hope that needs others to die has become cruelty, and talk has replaced work.",
      not: {
        'A, because his men capture a fighting-machine and turn its own Heat-Ray against the Martians':
          'No one captures a machine. The plan stays talk, and by the evening the artilleryman is playing cards and finishing the champagne.',
        'A, because the narrator stays with him underground until the day the Martians are found dead':
          'The narrator leaves him on Putney Hill and walks alone into dead London, where he finds the Martians killed by the bacteria of the Earth.',
        'B, because the curate denounces the whole plan as a sin and talks the narrator out of joining':
          'The curate is already dead: he died in Book Two, Chapter IV, in the house beside the pit. The narrator sees through the plan by himself.',
      },
      more: "In the same chapter the artilleryman denies the novel's own title: 'It never was a war, any more than there's war between man and ants.' His insight is sharp, but his plan shows how quickly hope can harden into a philosophy in which the weak must go.",
      tip: 'When a character offers a plan, compare his words with his deeds. Quote what he says, then the evidence of what he does, and judge the gap between them.',
    },
  'A narrator describes his mysterious host\'s smile: "It was one of those rare smiles with a quality of eternal reassurance in it". Which word suggests the smile promises more than any person could give?':
    {
      why: "'Eternal' means lasting for ever. No human smile can reassure for ever, so the word hints that the host's charm promises something impossible, the first sign of the dream he is selling.",
      not: {
        rare: "'Rare' says such smiles are uncommon, not that they promise too much.",
        reassurance:
          "'Reassurance' is what the smile offers. 'Eternal' is the word that makes the promise impossible.",
        quality: "'Quality' is a neutral word here, meaning a feature of the smile.",
      },
      more: "The narrator adds that you might come across such a smile 'four or five times in life'. Fitzgerald makes the host's charm almost unreal from the moment we meet him.",
      tip: "In a word question, look for the word that stretches beyond what is humanly possible: it often carries the writer's irony.",
    },
  'A novel compares a weaver\'s hoarded gold with the child he now cares for: "The gold had kept his thoughts in an ever-repeated circle, leading to nothing beyond itself; but Eppie was an object compacted of changes and hopes that forced his thoughts onward". Which phrase best shows what the child gives him that the gold never could?':
    {
      why: "The gold kept his mind going round in 'an ever-repeated circle'; the child 'forced his thoughts onward', towards a future. It is the only phrase about the child, and the only one that moves forward.",
      not: {
        'an ever-repeated circle':
          "This describes the gold's effect: thoughts going round and round, the opposite of what the child gives.",
        'leading to nothing beyond itself':
          'This describes the gold too: it led nowhere but back to itself.',
        'kept his thoughts': "'Kept' is what the gold did, holding his thoughts in place.",
      },
      more: 'Eliot sets a circle against a line moving forward. Love for the child turns the weaver back towards other people, and towards time itself.',
      tip: 'When a sentence contrasts two things, sort the phrases into their two sides before you choose.',
    },
  'A young woman whose love is not returned says: "Love looks not with the eyes, but with the mind; / And therefore is wing\'d Cupid painted blind". Which word suggests love is flighty and quick to change?':
    {
      why: "Cupid, god of love, has wings, so love can fly off as suddenly as it arrived. In a play where lovers switch partners overnight, 'wing'd' warns how changeable love is.",
      not: {
        blind: "'Blind' shows that love ignores appearances, not that it changes quickly.",
        mind: "'Mind' says love works through the imagination. It says nothing about speed.",
        painted: "'Painted' refers to how artists show Cupid, not to love's nature.",
      },
      more: 'Helena speaks after the man she loves has left her for her best friend. The lines also explain her own loyalty: love sees what it imagines.',
      tip: 'When an image has several features, ask which feature matches the quality in the question.',
    },
  'A grieving prince calls his country a prison. Told that his ambition makes it one, he replies: "I could be bounded in a nutshell, and count myself a king of infinite space, were it not that I have bad dreams." Reading A: his trouble is his situation. Reading B: his trouble is in his own mind. Which reading does the reply support, and why?':
    {
      why: "He says even a nutshell would feel like a kingdom of infinite space, were it not for his 'bad dreams'. The prison is in his mind, not around him, which supports Reading B.",
      not: {
        "A, because a 'nutshell' is all the space he is given":
          'He says the opposite: even a nutshell would be enough, if it were not for his dreams.',
        'A, because he wants to rule over a much larger kingdom':
          'He rejects that idea: a nutshell could feel like infinite space.',
        'B, because his dreams show that he longs for the crown':
          'He denies ambition here. His dreams trouble him; they are not a wish for the crown.',
      },
      more: "Hamlet has learned from his father's ghost that his uncle killed his father. The 'bad dreams' may be that knowledge, which he cannot share.",
      tip: "When a speaker says 'were it not that', the clause that follows names the real problem.",
    },
  'How does Shakespeare present the supernatural in Macbeth as both a dramatic and thematic device?':
    {
      why: "The witches' prophecies bring Macbeth's hidden ambition into the open, and visions such as the dagger and Banquo's ghost make his guilt visible on stage. They raise a key question: is Macbeth driven by fate or by his own choices?",
      not: {
        'It frightens the audience, and has no further purpose':
          "It does create fear and suspense, but it also shapes the play's themes of ambition, guilt and fate.",
        'It shows that the witches control every single choice he makes':
          'The witches only predict. Macbeth chooses to murder, which is why the play can ask about free will.',
        'It proves that Shakespeare himself believed in witches':
          "Nobody knows Shakespeare's beliefs. The question is how the play uses the supernatural.",
      },
      more: "King James I, who watched Shakespeare's company, wrote a book on witchcraft, Daemonologie (1597). A Jacobean audience took witches seriously as agents of evil.",
      tip: "For fate versus free will, use the witches' prophecies and Macbeth's own decisions as evidence on both sides.",
    },
  'Critically evaluate whether Golding presents civilisation as merely a veneer in "Lord of the Flies".':
    {
      why: "Away from adults, the boys slide quickly from meetings and rules to painted faces, hunting and murder, which suggests civilisation is thin. But Ralph, Piggy and Simon keep trying to do right, so Golding's view is not wholly bleak.",
      not: {
        'No: the boys build a fair society that lasts until their rescue':
          'Civilisation collapses on the island remarkably quickly: by the end, Ralph is being hunted.',
        'Yes, and every boy is savage from the very first day':
          'They begin with meetings, rules and a signal fire. Savagery grows over time.',
        'No: the island, not human nature, drives them mad':
          'The island is beautiful at first. Golding suggests the evil comes from inside the boys, not from the place.',
      },
      more: 'The ending adds irony: the naval officer who rescues the boys is himself fighting a war. The adult world is no more civilised than the island.',
      tip: "For 'critically evaluate', give a counter-argument: name the characters who resist savagery and explain what they suggest.",
    },
  'In Of Mice and Men, how does Steinbeck use the American Dream as both a motivating force and a destructive illusion?':
    {
      why: "George and Lennie's dream of their own small farm keeps them going and draws in Candy and briefly Crooks. But poor migrant workers in the Depression could never really reach it, and when Lennie kills Curley's wife, the dream dies.",
      not: {
        'It comes true once George and Lennie save enough':
          "Nobody's dream comes true in the novella. Its failure is the tragedy.",
        'Only George believes in it, so it drives no one else':
          'Lennie loves to hear it, Candy offers his savings, and even Crooks asks to join. Many share it.',
        'It is a dream of city life, far from ranch work':
          'The dream is to own land: a small farm of their own, not life in the city.',
      },
      more: "Curley's wife has a dream too, of becoming a film star. Steinbeck shows dream after dream failing, suggesting the American Dream was out of reach for the poor and powerless.",
      tip: 'Link the dream to context: the Great Depression of the 1930s left millions poor and jobless, which made such dreams both precious and hopeless.',
    },
  'In A Christmas Carol, Dickens shows the starving children Ignorance and Want, yet asks only that rich men like Scrooge change their hearts. Which judgement does this evidence best support?':
    {
      why: 'Dickens does not demand new laws; he asks rich individuals to change, which is a cautious message. But his vivid pictures of poverty, such as Ignorance and Want, made comfortable Victorians look at the poor.',
      not: {
        'Wholly radical: it calls for the state to be overthrown':
          'Dickens asks for no new laws or revolution. His remedy is a change of heart in rich individuals.',
        'Not radical at all: it never shows the suffering poor':
          "It shows poverty vividly: the Cratchits' Christmas, Tiny Tim's illness and the two starving children.",
        'Only a ghost story, with no social purpose behind it':
          "The ghosts deliver Dickens's message about the poor. The book was written to move rich readers.",
      },
      more: "Dickens's narrator speaks directly to the reader, standing 'in the spirit at your elbow'. That closeness makes readers feel personally involved in Scrooge's lesson.",
      tip: "For a 'how far' question, weigh the evidence both ways, then reach a judgement that fits all of it.",
    },
  'Evaluate how Shakespeare uses the structure of the tragedy to present Macbeth as both perpetrator and victim.':
    {
      why: 'Across five acts Macbeth rises to the crown and falls to death, driven by a fatal flaw, his ambition. He commits terrible crimes, yet his soliloquies let us hear his fear and despair, so we condemn him and pity him at once.',
      not: {
        'The rise and fall shows a purely evil man punished':
          'His soliloquies show conscience, fear and regret. He is a tragic hero, not a simple villain.',
        "The structure shows him as nothing more than the witches' victim":
          'The witches only predict; Macbeth chooses to murder. He is responsible for his crimes.',
        'The structure was left to chance and carries no meaning':
          'The rise and fall pattern of tragedy is deliberate and carefully built.',
      },
      more: "Hamartia is Aristotle's term for the error or flaw that brings a tragic hero down. In Act 5, Macbeth's 'Tomorrow, and tomorrow, and tomorrow' speech shows a man who has lost all meaning, which invites pity.",
      tip: 'Balance your argument: use one soliloquy to show Macbeth as a victim of his own mind, and one crime to show him as perpetrator.',
    },
  'How does Shelley use the sonnet form ironically in "Ozymandias" to reinforce the poem\'s message?':
    {
      why: "Sonnets often claim to make their subject live for ever. Shelley uses the form to show a king's monument crumbling into sand, and his rhyme scheme refuses either standard sonnet pattern, as if order itself is breaking down.",
      not: {
        'Shelley chose the sonnet because it is the easiest form':
          'The sonnet is a demanding form. Shelley chose it for the ironic contrast with his subject.',
        "The form follows Shakespeare's rhyme scheme exactly":
          'Its rhyme scheme matches neither the Shakespearean nor the Petrarchan pattern, as if order itself is breaking down.',
        "The form has no bearing on the poem's meaning":
          'The form matters: its link with lasting fame is turned against the boastful king.',
      },
      more: 'Its rhyme scheme runs ABABACDCEDEFEF. Shelley wrote it in 1817, in a friendly competition with Horace Smith, who wrote a sonnet on the same subject.',
      tip: 'Link form to message: explain how a form linked with permanence becomes ironic in a poem about decay.',
    },
  'Critically evaluate how Priestley uses time in "An Inspector Calls" to construct his political argument.':
    {
      why: 'The play is set in 1912 but was written in 1945. The audience knew that two world wars followed, so every confident claim by the Birlings looks foolish, and the final phone call warns that the lesson must be learned again.',
      not: {
        'The play is set in 1945, the year it was first staged':
          'It is set in 1912. Priestley wrote it in 1945, and that gap is what creates the irony.',
        'Time is irrelevant, since the action could happen anywhere':
          'Time is central: the gap between 1912 and 1945 shapes how the audience judges the Birlings.',
        'Priestley chose 1912 at random, for no clear reason':
          '1912 was chosen with care: just before the Titanic sank and the First World War, a time of misplaced confidence.',
      },
      more: 'The action runs continuously, one evening without a break, which builds pressure. The ending begins the story again, suggesting that people who refuse to learn are condemned to repeat it.',
      tip: "Show how dramatic irony and the cyclical ending work together to deliver Priestley's warning to his post-war audience.",
    },
  'In Frankenstein, Victor works alone and in secret, and his creation destroys those he loves, yet the Alps and their beauty soothe and restore him. Which judgement does this evidence best support?':
    {
      why: 'Victor chases glory alone and in secret, and his creation destroys those he loves: a warning against genius without responsibility. But nature soothes and restores him, so Shelley criticises the lone genius rather than every Romantic ideal.',
      not: {
        'It praises Victor as a hero whose genius justifies all':
          'He is a flawed overreacher whose secret ambition costs many lives.',
        'It attacks all love of nature as dangerous and wrong':
          'Nature restores Victor in the Alps. Shelley keeps that Romantic value while warning against isolation.',
        'It shows that his ruin comes from bad luck, not from him':
          "Victor's own choices, to create in secret and then abandon his creation, cause his ruin.",
      },
      more: "The novel's subtitle, The Modern Prometheus, links Victor to the Titan who stole fire from the gods for humankind and was punished for it.",
      tip: 'A strong judgement is precise: say exactly which ideas the writer criticises and which she keeps.',
    },
  'How does Owen use the gap between the title and the content of "Dulce et Decorum Est" to create a sustained rhetorical argument?':
    {
      why: "The title promises the old idea that dying for your country is sweet and fitting. The poem then gives graphic evidence against it, and ends by turning on the reader, calling the motto 'The old Lie'.",
      not: {
        "The title is simply a label for the poem's subject":
          'The title is ironic, and the whole poem argues against it.',
        'The poem agrees with the patriotic Latin phrase': 'He calls the phrase a lie.',
        'The title was chosen by the publisher, not Owen':
          "Owen chose it. The poem's last lines quote the motto in full.",
      },
      more: "The final stanza addresses 'My friend', anyone who tells eager children that war is glorious. Owen first dedicated the poem to Jessie Pope, who wrote patriotic recruiting poems.",
      tip: "Treat the poem as an argument: explain how each stanza builds the case against the title's claim.",
    },
  'Evaluate how Bronte uses the Gothic genre in Jane Eyre both to satisfy and to critique Victorian readerly expectations.':
    {
      why: "Brontë gives readers Gothic thrills: a mysterious house, a brooding hero, a madwoman in the attic. But she uses them to explore Jane's mind and the confinement of women, so the Gothic becomes a way to criticise society.",
      not: {
        'Bronte follows Gothic conventions without any change':
          'She adapts the conventions: her heroine is plain, rational and independent, not a fainting victim.',
        'The Gothic elements are purely there for decoration':
          'The Gothic elements carry meaning, especially about confinement, passion and identity.',
        'Jane Eyre has no Gothic features of any kind at all':
          "It has many Gothic features, such as Thornfield's secret and the red-room's terror, mixed with realism and romance.",
      },
      more: "Rochester is a Byronic hero, brooding and passionate with a dark secret. Bertha's confinement in the attic can be read as an image of what happens to women who will not conform.",
      tip: 'When you discuss genre, show what the writer does with its conventions, not just which ones are present.',
    },
  'How does Browning construct dramatic irony through the Duke\'s self-presentation in "My Last Duchess"?':
    {
      why: 'The Duke wants to seem a cultured, generous host, inviting his guest to sit and look at the portrait. But he reveals jealousy and a hint of murder. The reader understands far more than he means to say, which is dramatic irony.',
      not: {
        'He is fully aware of how his words make him sound':
          'He does not realise what his words reveal. That blindness creates the irony.',
        'There is no irony, since he tells the plain truth':
          'The irony is central: the gap between what he says and what we understand.',
        'He is shown throughout as a gentle, wronged and loving husband':
          'He is presented as chilling. His pride in his nine-hundred-years-old name makes his cruelty more disturbing.',
      },
      more: 'The poem ends with the Duke pointing out a bronze of Neptune taming a sea-horse. It hints at how he sees himself, as a tamer and owner of beautiful things.',
      tip: "Pick moments where the Duke's polite words reveal his cruelty, and explain how the reader's understanding differs from his.",
    },
  'Critically assess how Dickens uses the bildungsroman structure of Great Expectations to interrogate the Victorian myth of self-improvement.':
    {
      why: "A bildungsroman follows a young person growing up. Victorians believed hard work could lift anyone up, but Pip's rise is paid for by a convict and makes him a snob. Only when he loses his fortune does he grow morally.",
      not: {
        'Pip earns his fortune through his own hard work and talent':
          'His fortune comes from Magwitch. Pip does nothing to earn it, which undermines the myth of self-improvement.',
        'The novel has no clear structure to speak of':
          "The novel is carefully structured in three stages of Pip's expectations.",
        "Dickens admires Pip's snobbery and holds it up":
          "Dickens criticises Pip's snobbery. Joe, a humble blacksmith, is the novel's moral heart.",
      },
      more: "Samuel Smiles's Self-Help (1859) praised rising through effort. Dickens, writing soon after, suggests that becoming a gentleman can make a person worse, not better.",
      tip: "Use context to frame your argument, then show how Pip's journey questions the values his society admired.",
    },
  'How does Duffy use the metaphor of developing photographs in "War Photographer" to explore the ethics of representing suffering?':
    {
      why: "In the darkroom an image of a dead man slowly appears, as suffering surfaces in the photographer's mind. Then the editor chooses only a few pictures from many for a Sunday supplement, showing how the media shrinks suffering into something easy to consume.",
      not: {
        'The poem is mainly about the techniques of developing photographs':
          'The darkroom process is a metaphor for how suffering is revealed, remembered and forgotten.',
        'Duffy simply celebrates the work of photojournalists':
          'Duffy respects the photographer, but she questions whether his images make comfortable readers care for long.',
        'The darkroom is purely a setting, with no meaning':
          "The darkroom is compared to a church, and its process carries the poem's meaning.",
      },
      more: 'Readers of the supplement feel a brief sadness and then return to their comfortable Sunday. The photographer cannot forget, but his audience easily does.',
      tip: 'Explain the extended metaphor and its ethical point: who looks at suffering, who chooses what we see, and who forgets.',
    },
  'Evaluate how Shakespeare uses the Friar in Romeo and Juliet as both a figure of hope and a structural instrument of tragedy.':
    {
      why: 'Friar Lawrence marries the lovers hoping to end the feud, and gives Juliet the sleeping potion to save her. But his letter to Romeo never arrives, and the plan ends in death. Good intentions cannot defeat the hatred around them.',
      not: {
        'The Friar is purely a villain who secretly plots their deaths':
          'He means well. His plans fail, but he is trying to help the lovers and end the feud.',
        'The Friar is irrelevant to the plot of the play':
          'He drives the plot: the marriage, the potion and the failed letter all come from him.',
        'He is shown as wise, and never makes a mistake':
          'His plans fail, and he even flees the tomb. He warns that hasty people stumble, yet acts hastily himself.',
      },
      more: 'He hopes the marriage will "turn your households\' rancour to pure love". The gap between that hope and the ending shows how fragile goodwill is in Verona.',
      tip: 'Evaluate his responsibility: is he a wise guide, or a meddler whose secret plans make the tragedy worse?',
    },
  'In "London" by Blake, how does the word "chartered" build a critique of institutional power?': {
    why: "A charter is a legal grant of rights, often to companies and corporations. By calling even the streets and the Thames 'chartered', Blake suggests that everything in London, land, river and people, is owned and controlled for profit.",
    not: {
      'It simply means that the streets have been mapped':
        "The word may also suggest mapping, but 'simply' misses its main sense: ownership and control by those in power.",
      "It shows Blake's pride in a well-run, orderly city":
        'Blake describes misery and oppression everywhere he walks.',
      'It is an ordinary word with no special significance in the poem':
        "He repeats it in the first two lines, so it frames the whole poem's attack on power.",
    },
    more: 'Blake gives the same word to the Thames, a river that should run free, so even nature seems owned. He published the poem in 1794, during the French Revolution, which he at first supported.',
    tip: 'Explore more than one meaning of a key word. Showing layers of meaning is a mark of a top-band answer.',
  },
  'In "Remains", the speaker first tells of a killing like a casual anecdote, but by the end he cannot stop seeing the man. Which judgement does this evidence best support?':
    {
      why: 'The speaker tells the story like a casual anecdote, the voice of a soldier who must shrug off killing. By the end he is haunted, unable to forget. The clash suggests two selves he cannot reconcile.',
      not: {
        'He feels no guilt, since he was only doing his duty':
          'He is tormented by the memory. Whatever his duty was, he cannot shake off what he did.',
        'He has fully recovered by the time the poem ends':
          'He is not recovered. Not even drink and drugs can drive the memory out.',
        'His voice stays casual and unchanged from the start to the end':
          'The voice changes from casual to haunted, and that change shows the split.',
      },
      more: "The poem comes from Armitage's interviews with real soldiers. Its casual opening makes the later haunting more shocking.",
      tip: 'For a judgement about a speaker, compare the voice at the start and at the end: the change is the evidence.',
    },
  'A critic argues that the real hero of "Ozymandias" is the sculptor, not the king. Which response weighs this claim best?':
    {
      why: "The sculptor 'well those passions read', and his carving keeps the king's sneer alive long after the empire has gone, so art outlasts power. But the statue is itself shattered and half sunk in sand, so time defeats the artist too.",
      not: {
        "Fully: the sculptor's statue stands unharmed for ever":
          "The statue is broken: two 'trunkless legs' and a 'shattered visage' half sunk in the sand.",
        'Not at all: the sculptor is never mentioned in the poem':
          "He is: the sculptor 'well those passions read', and his hand 'mocked' the king's expressions.",
        "Not at all: the poem's only interest is the king's great power":
          'The poem cares as much about art and time as about power: the carving outlasts the empire.',
      },
      more: "'The hand that mocked them' can mean both copied and ridiculed, so the artist quietly judges the tyrant. And the poem itself, still read today, outlasts the statue.",
      tip: 'A strong response to a critic says how far the claim holds, then where it stops.',
    },
  'Critically evaluate how Owen uses the form of "Exposure" to embody the soldiers\' experience.': {
    why: "Owen uses pararhyme, pairs like 'knive us' and 'nervous' that almost rhyme but not quite. The near misses feel unsettled and unresolved, like the men's waiting, and each stanza ends with a short, flat line.",
    not: {
      'The form is conventional, with perfect rhymes throughout':
        'Owen uses pararhyme, where the consonants match but the vowels change, so the rhymes never quite resolve.',
      "Each stanza grows longer as the soldiers' hope grows":
        'Each stanza ends with a short, flat line, as hope and life fade. Nothing grows.',
      "The form has no connection to the poem's meaning":
        'The form mirrors the experience: unresolved rhymes for unresolved suffering, short lines for fading hope.',
    },
    more: "Pararhyme keeps the consonants and changes the vowel, as in 'silent' and 'salient'. Owen was one of its pioneers, and it gives his war poems a haunting, off-key sound.",
    tip: "For 'critically evaluate', go beyond naming the form: judge how far it creates the soldiers' experience, with precise examples.",
  },
  "In Romeo and Juliet, the Prologue foretells the lovers' deaths, yet Tybalt's anger, Romeo's haste and the Friar's risky plans all drive events. Which judgement does this evidence best support?":
    {
      why: "The Prologue makes the ending certain before the play begins, so the lovers seem doomed. Yet each step towards that ending is someone's choice: Tybalt's anger, Romeo's haste and the Friar's plans. Fate and free will work together.",
      not: {
        'The characters have complete free will, and fate is absent':
          'Fate is present from the Prologue, and the lovers sense it. Their choices are not the whole story.',
        "Fate alone decides, so no character's choice matters":
          "The evidence shows choices driving events: Tybalt's anger, Romeo's haste and the Friar's plans.",
        'Only Romeo believes in fate, and the play mocks him':
          'Juliet also senses doom, and the Chorus announces fate in the Prologue.',
      },
      more: "Hearing of Juliet's supposed death, Romeo cries 'Then I defy you, stars'. Ironically, his rush to the tomb fulfils the fate he defies.",
      tip: "For a judgement on fate and choice, avoid 'one or the other': the strongest answers show how the two combine.",
    },
  'How does Hughes use the disruption of patriotic language in "Bayonet Charge" to deconstruct war propaganda?':
    {
      why: "In the middle of the charge, the soldier's grand ideals, 'king', 'honour' and 'human dignity', are cast aside as useless. Terror leaves no room for the abstract words that sent him to fight.",
      not: {
        'Hughes supports patriotism and the glory of war':
          'The poem shows patriotic ideals collapsing in the face of real combat.',
        'The poem contains no patriotic language at all':
          "It names patriotic ideals such as 'king' and 'honour', then shows them falling away.",
        'Hughes wrote it as propaganda to recruit soldiers':
          'Hughes, born in 1930, wrote it long after the First World War. His father survived Gallipoli, and the poem undercuts propaganda.',
      },
      more: 'The soldier even wonders whether he is just a tiny part of a vast machine. The poem never names its war, so it speaks about combat in general.',
      tip: "Track how the soldier's thoughts change: from belief in ideals, to bewilderment, to pure survival instinct.",
    },
  'Critically assess how Stevenson uses the will and testament in Jekyll and Hyde as both a legal and symbolic device.':
    {
      why: "Jekyll's will leaves everything to Hyde, even if Jekyll simply disappears for three months. Utterson, a lawyer, is troubled by it from the start. The will hints that Jekyll is ready to hand his whole self over to Hyde.",
      not: {
        'The will is a minor detail with no wider purpose':
          "It drives the mystery: Utterson's worry about the will begins his investigation.",
        'The will is straightforward and raises no questions':
          'It is deeply strange: a respected doctor leaving everything to a violent stranger.',
        'The will is there only for realism, to show the law at work':
          "It adds legal detail, but its main job is to raise suspicion and suggest Jekyll's divided self.",
      },
      more: "In the final chapters, Utterson finds the will changed to name him instead of Hyde. The document mirrors the struggle over who controls Jekyll's identity.",
      tip: 'Use objects such as the will, the letters and the doors as evidence. They show how Stevenson builds mystery through documents.',
    },
  "A critic argues that in Macbeth, Lady Macbeth is the real driving force behind Duncan's murder. Which response weighs this claim best?":
    {
      why: "Lady Macbeth taunts him into acting when he wavers: 'When you durst do it, then you were a man'. But his own thoughts turn to murder in Act 1, Scene 3, before he has seen her, so she drives the deed without being its only source.",
      not: {
        'Partly: she plans it, but the witches order the murder':
          'The witches only prophesy that he will be king. They never tell him to kill.',
        'Fully: he never thinks of murder until she suggests it':
          "He imagines killing Duncan in Act 1, Scene 3, before he has seen her, and asks why he yields to 'that suggestion'.",
        "Not at all: she plays no part at all in planning Duncan's death":
          'She plans the details, drugging the guards so that the murder can be blamed on them.',
      },
      more: "Her first soliloquy fears that his nature is 'too full o' th' milk of human kindness'. She believes he needs her to push him, which is itself evidence for the critic.",
      tip: "To weigh a critic's claim, find the evidence that supports it and the evidence that limits it, then judge.",
    },
  'A critic says that in A Christmas Carol, Scrooge changes too suddenly to be believable. Which response weighs this claim best?':
    {
      why: 'His change is completed in one night, which can seem sudden. But Dickens prepares it: in Stave 2 Scrooge weeps for his lonely younger self and wishes he had given something to the boy singing a carol at his door, so the change grows.',
      not: {
        'Fully: nothing in the story prepares us for his change':
          'Stave 2 prepares it: he weeps for his younger self and regrets turning the carol singer away.',
        'Partly: he softens, but turns mean again in Stave 5':
          "In Stave 5 he is generous to everyone: he sends the Cratchits a prize turkey and raises Bob's salary.",
        'Fully: Dickens shows no feeling in Scrooge until Stave 5':
          'He weeps, laughs and trembles as the spirits show him his life, long before Stave 5.',
      },
      more: 'The structure prepares the change too: each spirit shows him more, so his feelings grow stave by stave rather than all at once.',
      tip: "When a critic calls a change 'sudden', look for the moments that prepare it earlier in the text.",
    },
  "A critic argues that in An Inspector Calls the Inspector is less a character than Priestley's mouthpiece. Which response weighs this claim best?":
    {
      why: "The Inspector's final speech, 'We are members of one body', states Priestley's socialist message almost directly, which supports the claim. But his mystery, his name and his seeming knowledge of what is coming make him a dramatic force, not just a voice.",
      not: {
        'Not at all: the Inspector has no views on society':
          'He has strong views: he tells the family they are responsible for each other.',
        'Partly: he speaks for Priestley, but only in the first act':
          'His most direct speech comes at his exit in Act 3, just before he leaves the family to themselves.',
        'Not at all: he agrees with Birling on every point':
          "He opposes Birling's selfish views at every turn.",
      },
      more: "His name, Goole, sounds like 'ghoul', and the final telephone call suggests he knew what would happen before it did.",
      tip: 'A character can be a mouthpiece and a dramatic device at once. Say which matters more, and why.',
    },
  "A critic argues that in Jekyll and Hyde, Hyde is not a separate being but Jekyll's hidden self set free. Which response weighs this claim best?":
    {
      why: "In his statement Jekyll writes that, as Hyde, he knew himself 'sold a slave to my original evil'. The potion did not create the evil; it released what was already in him, which supports the claim.",
      not: {
        'Not at all: Hyde is a stranger whom Jekyll never meets':
          "Hyde and Jekyll are one man: the potion changes Jekyll's body into Hyde's.",
        'Partly: Hyde is Jekyll, but the potion adds new evil':
          "Jekyll says the drug 'had no discriminating action': it added nothing, only released what was there.",
        "Strongly, because Hyde is Jekyll's long-lost brother":
          'Hyde is no relative. He is Jekyll himself, transformed by the potion.',
      },
      more: "Jekyll writes that Hyde was 'pure evil', while Jekyll himself remained a mixture of good and bad. That is why only Hyde can be released, never a purely good self.",
      tip: "Use the character's own words to test a critic's reading: a confession is strong evidence.",
    },
  "A critic argues that in Frankenstein the Creature, not Victor, is the novel's true victim. Which response weighs this claim best?":
    {
      why: "The Creature is abandoned by Victor and driven away by everyone he meets, and says 'I was benevolent and good; misery made me a fiend'. That supports the claim, but he also kills William, Clerval and Elizabeth, so he is victim and killer at once.",
      not: {
        'Not at all: the Creature is evil from the very moment he wakes':
          'He begins gentle: he gathers wood for the De Laceys and saves a girl from drowning.',
        'Fully: the Creature never harms anyone in the novel':
          "He kills William, Clerval and Elizabeth, and lets Justine be blamed for William's death.",
        'Partly: he suffers, but Victor cares for him at first':
          'Victor runs from the room the moment the Creature wakes, and abandons him.',
      },
      more: 'Shelley gives the Creature his own long narrative at the heart of the novel, so readers hear his side before they judge him.',
      tip: "Words like 'true victim' invite a both-sides answer: weigh suffering against responsibility.",
    },
  'A critic argues that Pride and Prejudice is really about money, not love. Which response weighs this claim best?':
    {
      why: "Money drives the plot: the opening sentence ties a man's fortune to his need of a wife, and Charlotte marries Collins for security. But Elizabeth refuses Collins and Darcy's first proposal, choosing respect and love over wealth.",
      not: {
        'Fully: Elizabeth marries Darcy only for his fortune':
          "She refuses Darcy's first proposal, despite his fortune. She marries him when she loves and respects him.",
        'Not at all: money is never mentioned in the novel':
          "Money is everywhere: Darcy's 'ten thousand a year', the entail on Longbourn, Wickham's debts.",
        'Partly: love matters, but only Lydia and Wickham marry for it':
          "Lydia and Wickham elope on a whim, and Darcy's money pays for their marriage. Jane and Elizabeth marry for love.",
      },
      more: "Charlotte tells Elizabeth, 'I am not romantic, you know'. Austen shows why a woman without money might choose security.",
      tip: "When a critic says a text is 'really' about one thing, show how that thing works alongside the others.",
    },
  "A critic argues that in Great Expectations Magwitch, not Miss Havisham, is the true shaper of Pip's life. Which response weighs this claim best?":
    {
      why: "Magwitch's money pays for Pip's expectations, so the convict makes him a gentleman. But Miss Havisham's Satis House teaches Pip to be ashamed of his home and to love Estella, so she shapes his feelings and desires.",
      not: {
        'Not at all: Magwitch never gives Pip anything at all':
          "He is Pip's secret benefactor: his money pays for Pip's whole life as a gentleman.",
        "Fully: Miss Havisham plays no part in Pip's story":
          'She shapes his heart: at Satis House he learns to love Estella and despise the forge.',
        'Partly: he shapes Pip, but only once Pip is poor again':
          'Magwitch shapes Pip from the moment his money arrives, long before Pip loses his fortune.',
      },
      more: "Pip's mistake about his benefactor drives the novel: he thinks a lady is shaping him into a gentleman for Estella, and the truth humbles him.",
      tip: "A critic's claim about who matters most can be weighed by asking what each figure gives the hero.",
    },
  'A critic argues that the ending of Jane Eyre, in which Jane marries a blinded Rochester, makes her his carer rather than his equal. Which response weighs this claim best?':
    {
      why: "Jane does care for Rochester after the fire, which gives the claim some force. But she returns with her own fortune, by her own choice, and says 'I am my husband's life as fully as he is mine'. The marriage is one of equals.",
      not: {
        'Fully: Jane is made to marry him by her cousins':
          'Nobody makes her marry: she returns to Rochester by her own choice, after refusing St John.',
        'Fully: Jane gives up her whole fortune in order to marry him':
          "She keeps her share of her uncle's fortune. Her independence is what makes the marriage equal.",
        'Not really: Rochester is the one who nurses Jane':
          'It is Rochester who needs help: he has been blinded and has lost a hand in the fire.',
      },
      more: "Rochester's sight partly returns, and when their first son is born he can see that the boy has his own eyes. Brontë gives the marriage a hopeful, balanced ending.",
      tip: "A critic's claim about an ending can be weighed by comparing the characters' power at the start and at the close.",
    },
  'A critic argues that in Animal Farm the animals are as much to blame for their fate as the pigs. Which response weighs this claim best?':
    {
      why: 'The animals rarely question the pigs, and Boxer trusts Napoleon completely, so their silence helps tyranny grow. But Squealer lies to them and the dogs terrify them, so the blame is shared, not equal.',
      not: {
        'Fully: the animals choose to be ruled by the pigs':
          'They never choose it: the pigs take power step by step, with lies and the threat of the dogs.',
        'Not at all: the animals question every new order':
          'They rarely question anything. When they do, Squealer explains it away or the dogs growl.',
        'Partly: they are fooled, but only Boxer trusts the pigs':
          'Most of the animals trust the pigs, not only Boxer. The sheep repeat whatever they are taught.',
      },
      more: 'Benjamin the donkey can read and understands what is happening, but he says nothing until it is too late to save Boxer.',
      tip: 'When a critic shares out blame, test it against both sides: what the powerful did, and what the others allowed.',
    },
  'A critic argues that Lord of the Flies shows evil is learned from adult society, not born in us. Which response weighs this claim best?':
    {
      why: "The boys' plane was carrying them away from a war, so adult violence frames the story, which supports the claim in part. But their savagery grows with no adult present, and the 'beast' turns out to be within them, so Golding places evil inside people.",
      not: {
        'Fully: the boys copy the cruelty they were taught at school':
          "Golding shows no such lessons. The boys' cruelty grows on the island, by itself.",
        'Not at all: there are no adults anywhere in the story':
          "A naval officer arrives at the end, and the boys' plane was taking them away from a war.",
        'Fully, since the boys behave well until adults arrive':
          'They fall into savagery long before the officer arrives, and his arrival stops it.',
      },
      more: "Golding said the novel traced society's faults back to faults in human nature. The island is a test of what people are when the rules are gone.",
      tip: "Weigh 'learned or born' with evidence for each, then say which the novel stresses.",
    },
  'A critic argues that Brutus, not Caesar, is the true tragic hero of Julius Caesar. Which response weighs this claim best?':
    {
      why: "Brutus joins the murder out of love for Rome, not envy, and his honourable mistakes, such as letting Antony speak at the funeral, bring him to ruin. Antony himself calls him 'the noblest Roman of them all'.",
      not: {
        'Weak: Brutus kills Caesar purely for his own gain':
          "Antony says Brutus alone acted 'in a general honest thought', not out of envy.",
        "Weak: Brutus plays no part in Caesar's murder":
          'He leads the conspiracy and joins in the killing.',
        'Partly: he is noble, but he goes on to win the war at Philippi':
          'He loses at Philippi, and Antony and Octavius win.',
      },
      more: 'Caesar dies in Act 3, yet the play runs for two more acts, following Brutus. Its shape makes his fall the tragedy.',
      tip: "Test 'tragic hero' against the pattern: a noble figure, a fatal flaw or error, and a fall.",
    },
  'A critic argues that in The Tempest Prospero is a tyrant, not a wise ruler. Which response weighs this claim best?':
    {
      why: "Prospero threatens Ariel and enslaves Caliban on the island Caliban calls his own, which supports the claim. But he decides that 'the rarer action is / In virtue than in vengeance', forgives his enemies and frees Ariel.",
      not: {
        'Fully: he takes revenge on every one of his enemies':
          'He forgives his enemies, even his brother Antonio.',
        'Not at all: he treats both Ariel and Caliban as his true equals':
          "He calls Caliban a 'poisonous slave' and threatens to imprison Ariel in an oak.",
        'Fully: he refuses to free Ariel even at the very end':
          "He frees Ariel at the end: 'to the elements / Be free'.",
      },
      more: "Caliban says 'This island's mine, by Sycorax my mother', and some modern productions stage the play as a story of colonial power.",
      tip: 'When a critic judges a character, weigh his worst actions against his final choices.',
    },
  'A critic argues that in Much Ado About Nothing the trick on Beatrice and Benedick only reveals a love they already felt. Which response weighs this claim best?':
    {
      why: "Leonato calls their quarrel 'a kind of merry war', and Beatrice hints that Benedick once won her heart 'with false dice'. The trick works so fast because it releases feelings already there.",
      not: {
        'Unconvincing: they have never met before the play':
          'They know each other well: Beatrice hints that Benedick once won her heart and let her down.',
        'Unconvincing: the trick makes them hate each other':
          'The trick makes each believe the other is in love, and both soften at once.',
        'Persuasive, because they confess their love to each other at once':
          'They hide their feelings behind wit until the trick, and even after it they mock each other.',
      },
      more: "In the last scene each is shown a love sonnet the other has written. 'A miracle', says Benedick: their own hands give them away.",
      tip: 'When a critic says a trick only reveals what was there, look for evidence from before the trick.',
    },
  'A critic argues that Othello falls because of Iago alone, not because of any flaw of his own. Which response weighs this claim best?':
    {
      why: "Iago's plotting drives the tragedy, which supports the claim. But Othello demands 'the ocular proof' and then accepts a handkerchief as enough, so his own jealousy, and his trust in the wrong man, help destroy him.",
      not: {
        "Fully: Iago's lies would fool any husband, however wise he was":
          "Othello's quick belief is the point: he trusts 'honest Iago' over his own wife, on thin evidence.",
        'Not at all: Iago is loyal and tries to protect Othello':
          'Iago hates Othello and plots his ruin from the first scene.',
        'Not at all: Othello sees through Iago from the start':
          'He trusts Iago until it is too late, calling him honest again and again.',
      },
      more: "The poet Coleridge called Iago's shifting reasons 'the motive-hunting of a motiveless malignity'. The play's harder question is why Othello believes him.",
      tip: 'To weigh blame in a tragedy, separate what the villain does from what the hero chooses to believe.',
    },
  'In The Merchant of Venice, Shylock asks "Hath not a Jew eyes?" after years of Christian insults, yet in court he insists on his pound of flesh. Which judgement does this evidence best support?':
    {
      why: "Shylock's speech asks the audience to see his humanity, and the Christians' insults show how he has been treated. But his demand in court is cruel, so the evidence supports a complex figure, wronged and vengeful at once.",
      not: {
        'He is a simple villain whom the play asks us to hate':
          'His speech asks the audience to see his humanity, which a simple villain would never be given.',
        'He is wholly innocent, and his bond is only a joke':
          'He means the bond seriously, and whets his knife in court.',
        'The Christians treat him with kindness and fairness throughout':
          'Antonio has spat on him and called him a dog, as Shylock reminds him.',
      },
      more: 'Elizabethan audiences may have seen Shylock mainly as a villain. Modern productions often stress his suffering, so the play is read differently in different times.',
      tip: "When evidence points two ways, a precise judgement keeps both: 'wronged and vengeful', not one or the other.",
    },
  'In Macbeth, Banquo says of the new king: "Thou hast it now: King, Cawdor, Glamis, all, / As the weird women promis\'d". Which is the strongest sentence of analysis about this line?':
    {
      why: "The witches promised Glamis, then Cawdor, then King. Banquo lists the titles backwards, from 'King' to 'Glamis', as if tracing the crown back along the road that reached it, and he fears Macbeth 'play'dst most foully for't'.",
      not: {
        'Banquo lists three titles, which is called a list of three':
          'It names a feature without saying what the order of the list does.',
        'Banquo is glad that his friend has now become the king':
          "He is suspicious: he fears Macbeth 'play'dst most foully' to win the crown.",
        'This shows that Banquo knows the titles Macbeth now has':
          'True, but it says nothing about why he lists them, or why in this order.',
      },
      more: 'Banquo keeps his suspicion to himself, perhaps because the witches also promised that his children would be kings. His silence is a kind of guilt too.',
      tip: 'Notice order as well as content. A list in reverse can be as telling as the words in it.',
    },
  'In A Christmas Carol, Marley\'s Ghost cries: "Mankind was my business. The common welfare was my business". Which is the strongest sentence of analysis about this line?':
    {
      why: "Scrooge has just praised Marley as 'a good man of business'. Marley throws the word back, redefining business as care for 'Mankind' and 'The common welfare', so the repetition attacks Scrooge's whole idea of what work is for.",
      not: {
        'Marley explains that he once ran a large business with Scrooge':
          "It takes 'business' literally. Marley means his real business should have been people.",
        "Dickens repeats the word 'business' twice in this line":
          'It names the method but not its effect.',
        'This shows that the Ghost of Marley is angry and upset':
          'Vague: it says how he feels, not what the words do.',
      },
      more: "The ghost goes on to call his trade 'but a drop of water in the comprehensive ocean of my business'. Money-making shrinks beside duty to others.",
      tip: 'The strongest sentence explains how a word changes meaning, and why that matters to the character it is aimed at.',
    },
  'In Romeo and Juliet, learning who Romeo is, Juliet says: "My only love sprung from my only hate". Which is the strongest sentence of analysis about this line?':
    {
      why: "Juliet sets 'love' against 'hate' in a balanced line, an antithesis. The line holds both together, as her love is born inside the family hatred that will destroy it.",
      not: {
        'Juliet says she loves Romeo and hates him at the same time':
          "She does not hate Romeo. 'My only hate' is his family, the Montagues, whom she has been raised to hate.",
        "The line repeats the word 'only' twice, which is called repetition":
          'It spots the repetition but does not say what it does.',
        'Shakespeare shows that Juliet has fallen in love with Romeo':
          'True, but basic: it names no method and misses the clash of love and hate.',
      },
      more: "The play is full of such clashes, from Romeo's 'O brawling love, O loving hate' in Act 1. Shakespeare builds the tragedy into the language.",
      tip: "Name the method precisely, such as antithesis, then link it to the play's bigger conflict.",
    },
  'A doctor writes in his final statement: "I learned to recognise the thorough and primitive duality of man". Which is the strongest sentence of analysis?':
    {
      why: "'Thorough' means the split runs all through him, and 'primitive' means it has always been there, at the root of human nature. The strongest sentence sees that the doctor is describing every person, not only himself.",
      not: {
        'The doctor has two names, which is why he talks of duality':
          "It misses the point: the line is about 'man', all people, not one man's names.",
        'The writer uses long words to make the doctor sound very clever':
          'It comments on style without saying what the words mean or do.',
        'The doctor blames a potion for making him two people':
          'The line blames no potion. It says the split was always part of human nature.',
      },
      more: "This is Henry Jekyll's statement in Robert Louis Stevenson's Strange Case of Dr Jekyll and Mr Hyde (1886). He learned it 'on the moral side, and in my own person': the split he describes is his own.",
      tip: 'Look closely at adjectives in a key line: each one can carry part of the argument.',
    },
  'A narrator at a party in a city flat says: "I was within and without, simultaneously enchanted and repelled by the inexhaustible variety of life." Which is the strongest sentence of analysis?':
    {
      why: "'Within and without' and 'enchanted and repelled' are paired opposites. The strongest sentence sees what they show: the narrator takes part in the glamour while standing back to judge it, the double view that shapes the whole novel.",
      not: {
        'The narrator is inside the flat and then goes outside it':
          "It takes 'within and without' literally. The phrase describes his feelings, not where he stands.",
        "The narrator uses grand words like 'inexhaustible' to impress us":
          'It comments on style without saying what the paradox shows.',
        'This shows that the narrator is enjoying the party a lot':
          "Only half right: he is 'enchanted', but also 'repelled'.",
      },
      more: "Nick Carraway says this in Chapter 2 of F. Scott Fitzgerald's The Great Gatsby (1925). Later he calls himself 'one of the few honest people that I have ever known', a claim the novel tests.",
      tip: 'When a line pairs opposites, explain what holding both at once says about the speaker.',
    },
  'A novel says of a lonely miser, changed by an orphan who wanders into his home: "a hand is put into theirs, which leads them forth gently towards a calm and bright land, so that they look no more backward; and the hand may be a little child\'s." Which is the strongest sentence of analysis?':
    {
      why: "The long sentence moves 'forth gently' and only at its end reveals whose hand it is. The strongest sentence sees that delay: the rescuer turns out to be the smallest, gentlest figure, a child leading a man towards 'a calm and bright land'.",
      not: {
        'The writer describes a hand that belongs to a small child':
          'It restates the line without saying what the delay, or the image, does.',
        'The child holds his hand because she is afraid of the dark night':
          'It takes the image literally. The hand leads people away from despair, not out of the dark.',
        'The sentence is very long, which makes it hard to follow':
          'Length alone is not an effect. The long sentence matters because it delays the child until the end.',
      },
      more: "This is from George Eliot's Silas Marner (1861), Chapter 14. Just before, the narrator recalls the angels of old who led men 'away from the city of destruction'.",
      tip: 'Notice what a sentence saves for last. A delayed word often carries the meaning.',
    },
  'A woman whose town has sentenced her to wear a mark of shame steps out of prison: "On the breast of her gown, in fine red cloth, surrounded with an elaborate embroidery and fantastic flourishes of gold thread, appeared the letter A." Which is the strongest sentence of analysis?':
    {
      why: "The town meant the letter to shame her, but she has sewn it with 'fantastic flourishes of gold thread'. The strongest sentence sees that her embroidery turns a punishment into a proud, defiant display.",
      not: {
        'The letter A is described in a great deal of detail here':
          'True, but it does not say what the detail shows about her.',
        'The gold thread shows that she is rich and greatly enjoys fashion':
          'Fashion is not the point. The gold thread shows her skill, and her refusal to be crushed.',
        'The colour red is used, which is often the colour of love':
          "Red here marks her shame in the town's eyes. The gold thread is what challenges it.",
      },
      more: "This is from Nathaniel Hawthorne's The Scarlet Letter (1850), Chapter 2. The crowd are startled to see how her beauty 'made a halo of the misfortune and ignominy' around her.",
      tip: 'When a symbol is meant to shame, ask how the person bearing it changes what it means.',
    },
  'A narrator, caught in a storm, sees an invader\'s machine: "A monstrous tripod, higher than many houses, striding over the young pine trees, and smashing them aside in its career". Which is the strongest sentence of analysis?':
    {
      why: 'Wells measures the machine against things readers know, houses and pine trees, and it towers over them and smashes them aside. The strongest sentence sees how the comparison shrinks the familiar world and makes the invader terrifying.',
      not: {
        'The machine is described as a tripod, which has three legs':
          'It explains a word without saying what the description does.',
        'The writer uses the word monstrous to show it is very big':
          "Partly right, but 'very big' is vague, and 'monstrous' suggests something unnatural as well as huge.",
        'The houses and pine trees simply set the scene for the reader':
          'It treats the houses and trees as background, when they are there to measure the machine.',
      },
      more: "This is from H. G. Wells's The War of the Worlds (1898). 'Striding' gives the machine a walker's stride, so it seems both machine and living creature.",
      tip: 'When a writer measures something against familiar objects, explain what the comparison does to scale and to fear.',
    },
  'A speaker, picturing the time after her death, ends her poem: "Better by far you should forget and smile / Than that you should remember and be sad." Which is the strongest sentence of analysis?':
    {
      why: "The poem has begged 'Remember me', and these closing lines turn: 'forget and smile' is set against 'remember and be sad'. The strongest sentence sees the selflessness: she would rather be forgotten than be the cause of grief.",
      not: {
        'The speaker wants to be forgotten because she is angry':
          'There is no anger. Her wish comes from love: she does not want him to grieve.',
        'The lines rhyme, which makes the poem sound like a song':
          'It names a feature but not its effect, and says nothing about the turn in thought.',
        'The words smile and sad are opposites, which is called contrast':
          'It spots the contrast but not what it shows about the speaker.',
      },
      more: 'This is the end of Christina Rossetti\'s sonnet "Remember" (1862). The turn in thought, the volta, comes where the last six lines begin.',
      tip: 'In a sonnet, find the turn. The strongest analysis explains how the thought changes there.',
    },
  'A sonnet declares: "Love is not love / Which alters when it alteration finds". Which is the strongest sentence of analysis?':
    {
      why: "'Love' meets 'love', and 'alters' meets 'alteration', so the line circles back on itself. The strongest sentence explains the effect: love that changes when the other person changes was never truly love.",
      not: {
        'The poet says that love is not real, and that it does not exist':
          'It misreads the line, which says changeable love is not true love, not that love does not exist.',
        'The poet uses the word love twice, which is repetition':
          'It names the repetition but not what it does.',
        'The lines show that love changes as people grow older':
          'The sonnet says the opposite: true love does not alter, even as time passes.',
      },
      more: "Shakespeare's Sonnet 116 defines love by what it is not before saying what it is. It is often read at weddings.",
      tip: 'When words echo each other, explain what the echo does to the argument, not just that it is there.',
    },
  'A grown man hears a woman singing softly and remembers childhood: "the heart of me weeps to belong / To the old Sunday evenings at home". Which is the strongest sentence of analysis?':
    {
      why: "He does not say 'I weep' but 'the heart of me weeps', as if a part of him longs for the past against his adult will. The strongest sentence catches that split between the man and the child inside him.",
      not: {
        'The speaker is sad because he does not like Sunday evenings':
          'It reverses the meaning: he longs to belong to those Sunday evenings, which he loved.',
        "The poet uses the word 'heart', which is about emotions":
          'It names a word without saying what the phrasing does.',
        'The speaker wants to go home because it is winter outside':
          'It takes the setting literally. He longs for his childhood, not for shelter.',
      },
      more: "D. H. Lawrence's \"Piano\" (1918) ends with the speaker weeping 'like a child for the past'. The poem pulls between resisting memory and giving in to it.",
      tip: 'Notice when a speaker describes a part of himself as acting on its own. It often shows inner conflict.',
    },
  'A young man leaving home for London says: "Heaven knows we need never be ashamed of our tears, for they are rain upon the blinding dust of earth, overlying our hard hearts." Which is the strongest sentence of analysis?':
    {
      why: "Tears become rain that clears the 'blinding dust' over 'our hard hearts'. The strongest sentence explains the effect: crying is not weakness but a cleansing, letting him see clearly the home he is leaving.",
      not: {
        'The speaker is crying only because the weather is bad that day':
          'It takes the image literally. The rain is a metaphor for tears.',
        'The writer uses a metaphor to compare tears to the rain':
          'It names the metaphor but not what it suggests.',
        'The speaker feels ashamed of crying and tries to stop it':
          "He says the opposite: 'we need never be ashamed of our tears'.",
      },
      more: "Pip says this in Chapter 19 of Charles Dickens's Great Expectations (1861), as he leaves the forge. The older narrator values feelings that the young snob was learning to hide.",
      tip: 'With a metaphor, say what the comparison suggests that a plain statement would not.',
    },
  'A young woman disguised as a man, wooing a countess for her master, says she would: "Make me a willow cabin at your gate, / And call upon my soul within the house". Which is the strongest sentence of analysis?':
    {
      why: 'The willow was a sign of forsaken love. Speaking for her master, she chooses an image of sorrow that fits her own secret love for him, so the speech says more than its speaker can admit.',
      not: {
        'The speaker really wants to build a small house out of willow wood':
          'It takes the image literally. The willow cabin is a picture of devoted, sorrowful love.',
        "The speaker uses the verb 'Make', which gives a command":
          'It names a feature without saying what the image means.',
        'The speaker is mocking the countess she is talking to':
          'She is sincere, not mocking: the speech is so moving that the countess falls for the messenger.',
      },
      more: 'Viola speaks this to Olivia in Act 1, Scene 5 of Twelfth Night. Olivia falls in love with the messenger, not the message.',
      tip: "When a character speaks for someone else, ask whether the words also fit the speaker's own feelings.",
    },
  'In A Passage to Africa, George Alagiah sets out the unspoken rule of his work: "The journalist observes, the subject is observed." Which sentence analyses this line best?':
    {
      why: "It names a precise method, one verb turned from active to passive, says what it does (the grammar enacts the power relationship) and links it to Alagiah's purpose: the rule is stated so neatly that its reversal by the smile is all the more striking.",
      not: {
        'Alagiah sets "observes" against "is observed" in an antithesis, with a comma placed exactly in the middle of the line.':
          'It names the antithesis correctly but stops there, with nothing about what the pattern does to the reader or why Alagiah uses it.',
        'Alagiah explains that a journalist observes people, such as the starving in Somalia, who are the subjects of his reports.':
          'It retells what the line says in other words. There is no comment on a word, a method or an effect.',
        "The line shows Alagiah's pride in his job: he observes from a safe distance, which makes him a hero of compassion for the poor.":
          "A misreading: Alagiah is self-critical throughout, and he states this rule only so that the man's smile can overturn it.",
      },
      more: "The smile 'turned the tables on that tacit agreement': the idiom means a sudden reversal of positions, and 'tacit' reminds us that the rule was never spoken, only assumed by the observer.",
      tip: "A strong sentence does three things: it names a precise method, explains its effect and links it to the writer's purpose. Check your own sentences for all three.",
    },
  "A critic argues that Adichie's talk, The Danger of a Single Story, persuades by accusing outsiders of ignorance about Africa. Which response weighs this claim best?":
    {
      why: "The talk does expose outsiders' single stories, from the roommate's 'tribal music' to her pity before they have met. But at the turn Adichie confesses her own, and 'guilty' puts her in the dock beside her audience, who are readier to examine their stories once she has examined hers.",
      not: {
        'Fully: anger at the roommate fills the whole talk, and Adichie never once admits to any fault of her own':
          'Humour carries the roommate story, such as the tape of Mariah Carey, so the audience laughs at the assumption without resenting the speaker. And she does admit her own guilt.',
        'Not at all: the talk never shows an outsider misunderstanding Africa, only her own reading':
          "The roommate's surprise at her English, and her request for 'tribal music', are exactly such misunderstandings, and so is the list of popular images of Africa.",
        'Fully: she closes by demanding that her listeners feel ashamed of every story they have read':
          "The talk ends in hope, not shame: 'we regain a kind of paradise'. It is Adichie herself who is 'overwhelmed with shame', in Mexico.",
      },
      more: "In Guadalajara she finds the single story of the abject immigrant in her own head. Accusing herself first is a speaker's tactic: the talk persuades by confession as much as by criticism.",
      tip: "Weigh a critic's claim rather than simply agreeing: say where it holds, where it fails, and which quotation tips the balance.",
    },
  'In "Disabled" by Wilfred Owen, the soldier remembers that "He asked to join", and the next line begins "Smiling they wrote his lie". Which judgement does this evidence best support?':
    {
      why: "The grammar divides the blame. In 'He asked to join' the boy is the one who chooses; in 'Smiling they wrote his lie' the recruiters are complicit, their pleasure placed before the lie itself. Pearson's specification reads the line as showing that they knew he was under age.",
      not: {
        'Owen blames only the boy, who lied about his age to recruiters who never suspected':
          'The recruiters seem far from deceived: they write the lie down smiling, and the line before says he did not have to beg, which shows how eager they were.',
        'Owen blames only the recruiters, who forced an unwilling boy into the army':
          "He was not forced. He asked to join, after football and a drink, partly because someone said he would look 'a god in kilts'.",
        'Owen shows the boy was called up by law and had no say in the matter at all':
          'He was a volunteer, not a conscript: the poem says he asked to join, and the recruiters accepted a false age.',
      },
      more: "Owen's target seems less one foolish boy than a culture that sold war as costume and a send-off 'with drums and cheers'. An estimated 250,000 under-age boys volunteered for the British Army in the First World War.",
      tip: 'Use grammar as evidence: who is the subject of each verb shows where Owen places responsibility. Quote the two clauses together and weigh them.',
    },
  'A critic claims that the revelation at the end of The Necklace, that it was "only an imitation necklace", is a cheap trick the story never prepares for. Which response weighs this claim best?':
    {
      why: "On a second reading the clues are there: Madame Forestier lends the necklace without fuss, the jeweller supplied only the case, and she never opens it when it is returned. The twist is earned, and 'only' makes the reader reread everything as a tragedy of appearances.",
      not: {
        'Convincing: nothing earlier hints that the jewels might be false, so the ending is a shock for its own sake':
          'There are hints, though none proves anything, which is why the ending surprises. Maupassant leaves the truth in plain sight.',
        'Convincing: the narrator then explains at length how Madame Forestier deceived her old school friend':
          "Nothing follows the revelation: no explanation and no reaction. The last words are Madame Forestier's, and the reader must supply Mathilde's response.",
        'Unconvincing: Mathilde guesses the truth at the ball itself, so the reader knows long before the end':
          "Mathilde never suspects. She tells her old friend everything and smiles 'a proud, innocent smile', unaware of the truth until the final lines.",
      },
      more: 'The world of the story is solid and exact, from real streets to 36,000 francs, so the ending does not feel like a conjuring trick. It feels as if it could happen, which is what makes it hurt.',
      tip: "Test a critic's claim against the text: find evidence on both sides, then judge. Here a second reading of the jeweller scene settles it.",
    },
  'In To Kill a Mockingbird, Mr Underwood\'s editorial on Tom\'s death condemns "the senseless slaughter of songbirds by hunters and children" (Chapter 25), and Scout says that dragging Boo into public view would be "sort of like shootin\' a mockingbird" (Chapter 30). Which judgement does this evidence best support?':
    {
      why: "Lee plants the symbol in Chapter 10, when it seems to be about air rifles, then attaches it to two people. Tom's death is the sin committed; Boo's protection, through Heck Tate's merciful lie, is the sin avoided. The novel ends with a kind of justice for Boo that Tom never received.",
      not: {
        'Lee shows that Maycomb has learned the mockingbird rule, since by the end it protects both men':
          'Tom is not protected: he is shot dead trying to escape from the prison farm. The rule is kept for Boo alone, an uneven balance a strong answer notices.',
        'Lee keeps the mockingbird a lesson about air rifles, and never fixes it to any person in the whole novel':
          'The rule begins with air rifles in Chapter 10, but Mr Underwood and Scout both apply it to people, which is the whole point of the symbol.',
        'Lee blames the town\'s children for Tom\'s death, since the editorial accuses "hunters and children"':
          "'Hunters and children' is Underwood's picture of thoughtless killing, not a charge against Maycomb's children. His editorial condemns Tom's death.",
      },
      more: "The symbol gains force from Mr Underwood, a man Atticus says despises Black people, so his outrage counts for more. Miss Maudie gave the reason for the rule in Chapter 10: 'Mockingbirds don't do one thing but make music for us to enjoy'.",
      tip: 'Use two pieces of evidence from different parts of the novel to make a judgement about the whole. Name the pattern, then weigh it: here, justice for one innocent man but not the other.',
    },
  'In Things Fall Apart, after the killing of Ikemefuna, the narrator explains Okonkwo\'s part in it in a single sentence: "He was afraid of being thought weak." Which sentence analyses this line best?':
    {
      why: "It names a precise method, the passive 'being thought', says what it shows, a man more afraid of other men's opinion than of the act itself, and links it to Achebe's purpose: the tragedy begins inside Okonkwo, long before any missionary arrives.",
      not: {
        'Achebe writes a short, plain sentence of seven words, being careful to place the adjective "weak" right at its very end.':
          'It counts the words and names a part of speech correctly, but says nothing about what the sentence does to the reader or why Achebe writes it.',
        'This tells us that Okonkwo killed Ikemefuna in the forest because he did not want any of the other men to think he was weak.':
          'It retells the line in other words. There is no comment on a word, a method or an effect.',
        'Achebe shows that Okonkwo is a coward at heart, a man who runs from danger without a single thought for those left to fight.':
          'A misreading: Okonkwo is a feared warrior. His fear is of seeming weak, which is why he kills, not a cowardice that makes him run.',
      },
      more: "The sentence is often wrongly cited as Chapter 2; it belongs to the killing in Chapter 7. Just before it comes 'Dazed with fear, Okonkwo drew his matchet and cut him down', which names fear, not courage or duty, as the cause.",
      tip: "A strong sentence names a precise method, explains its effect and links it to the writer's purpose. Grammar counts as method: a passive verb is as analysable as a metaphor.",
    },
  "A critic argues that in Antony and Cleopatra Antony is great only in Cleopatra's words, never in what the rest of the play shows. Which response weighs this claim best?":
    {
      why: "The dream does inflate Antony beyond any man, as Dolabella's 'Gentle madam, no' admits. But the play also shows his generosity, sending Enobarbus's treasure after him, and his own rival says the fall of so great a thing should shake the world. His greatness is not Cleopatra's invention alone.",
      not: {
        'Fully: Antony loses every great battle he fights, and no one but Cleopatra ever speaks well of him':
          "He wins in Act 4, Scene 8, beating Caesar's forces back to their camp, and after his death Caesar mourns him as his brother and partner in empire.",
        'Not at all: Cleopatra never praises Antony once he is dead, and leaves his memory to the Romans':
          "She does: her dream speech in Act 5, Scene 2, after his death, gives him a face 'as the heavens' and legs that 'bestrid the ocean'.",
        'Fully: even Enobarbus mocks him to the end and dies cursing the general who drove him to desert':
          "Enobarbus dies repenting, with Antony's name on his lips, having called him 'Thou mine of bounty' for sending his treasure after him.",
      },
      more: "The play keeps asking whether hyperbole can be true in a way that facts are not. Caesar, the winner, has the last word and uses it to honour the lovers: 'No grave upon the earth shall clip in it / A pair so famous.'",
      tip: "Weigh a critic's claim on both sides before you judge. Praise from an enemy, such as Caesar, is the strongest support for a character's greatness, because it cannot be put down to love.",
    },
  'A critic argues that in A Midsummer Night\'s Dream Theseus speaks for Shakespeare when he groups "The lunatic, the lover, and the poet" as people who see what is not there. Which response weighs this claim best?':
    {
      why: "The audience has watched the fairies at work, so the Duke's confident scepticism is itself dramatic irony. His own lines describe what the play has done, giving 'airy nothing / A local habitation and a name', and Hippolyta's reply, that the story 'grows to something of great constancy', is the one the play supports.",
      not: {
        'Convincing: the play reveals in the end that the fairies were only a dream that the lovers shared':
          'The fairies are real within the play: they quarrel, charm the lovers and bless the marriages at midnight, all in front of the audience.',
        'Unconvincing: Theseus admits in the same speech that he once saw the fairies himself, in the wood':
          "Theseus never meets the fairies, and he scorns 'these fairy toys'. That is why his certainty is ironic: the audience knows more than he does.",
        'Convincing: Hippolyta agrees at once that the lovers\' story is "More strange than true"':
          "'More strange than true' is Theseus's own verdict. Hippolyta disagrees: the lovers' separate accounts agree, so something really happened.",
      },
      more: "Theseus is himself a figure from what he calls 'antique fables', which deepens the irony. The play defends imagination by letting its fiercest sceptic speak and be proved wrong, and then Puck invites the audience to treat it all as a dream.",
      tip: 'Never accept that a character speaks for the writer without testing it. Ask what the audience knows that the character does not, and whether another character answers him.',
    },
  'In Princess & The Hustler, Mavis asks Margot "If a whole city can try to change, why not one simple man?" (Act 2, Scene 4), and later Wendell tells Mavis "Hustle nuh win anything far mi" (Act 3, Scene 4). Which judgement does this evidence best support?':
    {
      why: "Mavis joins the private story to the public one, and her careful 'try' hopes rather than claims. Wendell's sentence rejects the name the title gives him. Odimba makes personal and political change mirror each other, but the play ends weeks after the victory, with his promises still to be proved.",
      not: {
        'Odimba shows that Wendell has not changed at all, and that Mavis is fooled again by his charm':
          'Wendell does change: the solitary hustler throws himself into the campaign and comes home jubilant at its victory. The play asks only whether a sentence is enough.',
        "Odimba keeps the family's story apart from the boycott, which the characters never discuss":
          "The boycott runs through the play's calendar: Junior announces a march in May, Wendell reads the news aloud, and the family celebrate the victory on 28 August 1963.",
        'Odimba shows Bristol refusing to change, so Wendell must leave the city to make a fresh start':
          'Bristol does change: on 28 August 1963 the bus company announces an end to discrimination in hiring crews, and the family celebrate.',
      },
      more: 'The colour bar falls in the same scene in which Junior photographs the family together. A sceptical reader may find the parallel too neat; a better reading notices that neither change is complete, and that Lorna is only beginning to find her place.',
      tip: 'A judgement question asks what two pieces of evidence prove together. Distrust the absolute answers, always and never, and look for the one that holds both quotations in balance.',
    },
  "In What it Means When a Man Falls from the Sky, in 'War Stories', Nwando's father, a Biafran veteran, ends his last war story with \"when the time came, I ran\". Which sentence analyses this line best?":
    {
      why: "It names the method, plain words after a run of exaggerated stories with morals, and its effect, the least heroic truth a veteran could tell, and links it to Arimah's purpose: the war has not finished with its survivors, and a 'veil' comes over him.",
      not: {
        'Azike tells his daughter that when his lieutenant and his comrades died in the war, he ran away and so survived.':
          'It retells what the line says in other words. There is no comment on a word, a method or an effect.',
        "The line shows Azike's pride in his own quick thinking, a soldier's cunning that he hopes to pass on to Nwando.":
          'A misreading: the admission has no lesson and no pride in it. Afterwards he freezes over the chessboard, unable to make an obvious move.',
        'Arimah writes this line in the first person and in the past tense, using six short words and a single comma.':
          "It describes the grammar accurately but stops there, with nothing on what the plainness does or why Arimah gives Azike's last story this ending.",
      },
      more: "Arimah's stories are set long after the war of 1967 to 1970, but it has not finished with her characters. Here a child's small war in the playground is set beside a real one, and the father's broken story shows what the real one still costs.",
      tip: 'Notice when a writer drops a pattern. A story that ends without the moral its earlier stories had makes its point by plainness: quote the line, then say what is missing.',
    },
  'In Of Mice and Men, Curley\'s wife first appears when "the rectangle of sunshine in the doorway was cut off". In Chapter 5 she tells Lennie: "You can talk to people, but I can\'t talk to nobody but Curley." Which judgement does this evidence best support?':
    {
      why: "Chapter 2 introduces her as the men will see her: she enters by blocking the sun, a sign that they will treat her as trouble. Chapter 5 lets her speak for herself, two weeks into a marriage with nobody else to talk to. Steinbeck shows the men's view first and her own second, and the order matters.",
      not: {
        'Steinbeck presents her as a danger from first to last, darkening every room that she enters':
          "The first quotation supports this, but the second does not: in Chapter 5 she is lonely, not dangerous, and her death gets the novella's most lyrical writing.",
        'Steinbeck shows that the men all welcome her company and talk to her whenever they can':
          'The opposite: George warns Lennie away from her as soon as she has gone, and her complaint is precisely that nobody will talk to her.',
        'Steinbeck blames Curley alone for her death, since he forbids her to leave the house':
          'Neither quotation blames anyone for her death. The novel leaves the reader to decide whether to blame her, as Candy does, or the ranch that left her alone.',
      },
      more: 'She is never given a name, which shows how the ranch sees her: as a possession. Her cruelty to Crooks in Chapter 4 keeps the portrait from being simply sympathetic: she has power over almost nobody, except the one man the ranch ranks below her.',
      tip: 'Weigh two pieces of evidence together: say what each shows, then what their order shows. A judgement that uses both is stronger than one that picks a side.',
    },
  'In A View from the Bridge, Eddie tells Catherine, out in the street, "Katie, he\'s only bowin\' to his passport." Which sentence analyses this line best?':
    {
      why: "It analyses a precise word, the bow, and its effect: courtesy is recast as calculation, respect for Catherine as respect for papers. It then links that to Miller's purpose: Eddie turns the law of immigration into a weapon in words before he turns it into one in deeds, at the phone booth.",
      not: {
        'Eddie tells Catherine out in the street that Rodolpho only wants to marry her so that he can get his papers and stay in America.':
          'It retells what Eddie says in other words. There is no comment on a word, a method or an effect.',
        'Miller gives Eddie the dropped ending of "bowin\'" and the pet name "Katie", which are both features of Brooklyn speech in the play.':
          "It names features of Eddie's speech correctly, but says nothing about what they do here or why Miller uses them.",
        "The line shows Eddie's admiration for Rodolpho's good manners, since a bow is the respect he wants every man to show Catherine.":
          "A misreading: the remark is an accusation. Eddie claims that Rodolpho's respect is really respect for the citizenship Catherine can give him.",
      },
      more: "The scene leaves Catherine sobbing, and in the apartment Beatrice tells her she is grown up now and must stop behaving like a child in front of Eddie. Eddie's private charge to Alfieri, that Rodolpho 'ain't right', follows soon after.",
      tip: "A strong sentence names a precise word or method, explains its effect and links it to the writer's purpose. Check every sentence you write for all three.",
    },
  'In The Tyger, Blake\'s last stanza repeats his first, except that "Could frame" in line 4 becomes "Dare frame thy fearful symmetry?" in the final line. Which sentence analyses this change best?':
    {
      why: "It names the precise change, one word, says what it does, turning a question of ability into one of daring, and links it to Blake's purpose: the poem never answers its questions, so its ending deepens awe and dread at whoever would risk making such a creature.",
      not: {
        'In the final stanza the speaker asks again who could have made the tiger, so the poem ends with the same question it began with.':
          'It retells the stanza and misses the change: the final question is not the same one, because one word in it is different.',
        'The last stanza repeats the first, using a rhetorical question and a circular structure, techniques found throughout Songs of Experience.':
          'It names devices correctly, and the poem does belong to Songs of Experience, but it says nothing about what the changed word does.',
        'The word "Dare" shows the speaker daring the tiger to fight the immortal hand that made it, so the poem ends on a challenge.':
          "A misreading: 'Dare' asks whether any maker would risk framing the tiger. The speaker challenges no one; he wonders at the maker.",
      },
      more: "Dare is the poem's most insistent verb, used four times, in lines 7, 8, 16 and 24, and each time it moves the question from what the maker could do to what he would risk. Many readers hear Icarus and Prometheus behind that reaching.",
      tip: 'When a refrain returns changed, quote both versions and analyse the single difference. Then say what the change does to the ending.',
    },
  'A critic argues that Kipling\'s "If" teaches the son to feel nothing at all. Which response weighs this claim best?':
    {
      why: "Most of the poem's verbs are verbs of mastery, keep, trust, wait, meet, treat, so the son controls feeling rather than lacking it: he may dream, if dreams are not his 'master'. But line 20 is where mastery tips into silence: he must lose everything and say nothing. The claim fits that line, not the whole poem.",
      not: {
        'Fully: every line forbids emotion, and the son must treat all people with the same cold indifference':
          "The son must 'make allowance for their doubting too' and let all men count with him. That is balance and fairness, not coldness.",
        'Not at all: the poem urges the son to share every loss openly, as the true mark of being a Man':
          'The opposite: line 20 asks him to say nothing at all about what he has lost. Sharing feeling is never the route to manhood here.',
        'Fully: the son may not even dream, because the poem forbids dreams and thoughts as dangerous':
          'He may dream and think, provided dreams are not his master and thinking is not his aim. The limit is on being ruled by them.',
      },
      more: "The poem's warmth is held back until its last two words, 'my son', the one moment the impersonal voice becomes a father's. One reading hears love; another hears pressure, since manhood depends on tests almost nobody could pass.",
      tip: "Weigh a critic's claim rather than simply agreeing: find where the poem supports it and where it does not, then say which matters more and why.",
    },
  "A critic argues that the jokes in Agard's Half-caste soften its challenge to the label. Which response weighs this claim best?":
    {
      why: 'The stronger reading is that the humour is the attack. The pun on overcast, the one-legged stance and the deadpan logic make the label look ridiculous, and it is harder to go on using a word you have been made to laugh at. The jokes deny prejudice the dignity of a serious opponent.',
      not: {
        'Convincing: the jokes keep the listener comfortable, and the poem never lets any anger show':
          'Anger breaks through: the weather joke ends on a Caribbean swear word, and the demand to explain grows more insistent each time it returns.',
        'Convincing: the poem ends by apologising to the listener, as its opening "Excuse me" promised':
          "'Excuse me' is mock politeness. The poem ends by sending the listener away to return 'wid de whole of yu eye': a demand, not an apology.",
        'Unconvincing: the poem never jokes, and calls the label half-caste only in solemn Standard English':
          'The poem is full of jokes, from slapstick to a pun, and most of it is in Caribbean Creole, spelled as it sounds, not Standard English.',
      },
      more: "Pearson's examiners have found candidates writing about the poem's intimidating, sarcastic and satirical tone. An answer that calls the poem only angry, or only playful, misses how each disguises the other.",
      tip: 'Do not just name a tone: say what it does to the listener. Then show where a second tone breaks through, and why the poet needs both.',
    },
  'In Western Lane, Pa tells his daughters "I want you to become interested in something you can do your whole life", and later Gopi sees that "The effort to speak made him wince". Which judgement does this evidence best support?':
    {
      why: "The training is love expressed as a plan: 'your whole life' reaches into a future without Ma and offers something permanent. It is also an activity they can share that never requires anyone to talk about grief, and the wince shows why: speech itself pains him. He is less refusing to talk than unable to.",
      not: {
        'Pa cares more about winning squash matches than about how his daughters are grieving':
          "Nothing in either quotation is about winning. 'Your whole life' looks to his daughters' future, and the wince shows a man in pain, not a cold coach.",
        "Pa is only following Aunt Ranjan's orders and has no feelings of his own about it":
          "That is Mona's version, that Pa let Aunt Ranjan tell him what to do. His own words give a reason of his own, and his body shows grief.",
        "Pa is too ill to work, so he needs his daughters to earn the family's money at squash":
          'He misses work appointments as grief takes hold, but squash is not a job. He wants something they can do their whole lives.',
      },
      more: "Maroo gives Pa's grief a bodily symptom rather than a speech, which is typical of the novel's method. Strong answers resist calling him either a tyrant or a saint: he is a grieving man using the only language he trusts.",
      tip: 'When a character says little, read the body and the plan. Two short quotations, one of speech and one of gesture, can support a judgement neither proves alone.',
    },
  'In Blood Brothers, with the twins dead on stage, the Narrator asks the audience "And do we blame superstition for what came to pass?" Which sentence analyses this line best?':
    {
      why: "It picks out a precise word, 'we', and says what it does: the spectators become part of the society being judged. It then links that to Russell's purpose, since the next line names the alternative, 'what we, the English, have come to know as class', and the rhyme of 'pass' with 'class' clinches it.",
      not: {
        'With the twins dead on stage, the Narrator asks the audience whether superstition was to blame for what happened to them.':
          'It retells the moment in other words. It names no word or method and says nothing about the effect on the audience.',
        'Russell gives the Narrator a rhetorical question, direct address and a rhyme, which are three common features of musicals.':
          'The devices are named correctly, but the sentence never says what they do here or why Russell uses them at the end.',
        'The question shows that Russell wants us to believe in the curse, since the twins die exactly as Mrs Lyons had foretold.':
          'A misreading: Mrs Lyons invented the curse to frighten Mrs Johnstone, and the deaths come from a gun, prison and unemployment. The question invites us to reject superstition.',
      },
      more: "The question is rhetorical but not decorative. After two acts of warnings about bad luck and the devil, it asks the audience to stop blaming something that cannot be changed and to look at something that can. The Narrator's menace keeps a sense of doom alive to the end, which is why it still unsettles.",
      tip: "A strong sentence names a precise word, says what it does to the audience and links it to the writer's purpose. Test each sentence you write for all three.",
    },
  'A critic argues that Leah is simply the good one in "DNA" by Dennis Kelly. Which response weighs this claim best?':
    {
      why: "Leah names the truth more plainly than anyone, protesting that the kidnapper does not exist and fighting Phil when Adam returns. But she stood by Phil at the start and tells nobody outside the group while an innocent man is held. Kelly makes her the group's conscience, then shows how little a conscience achieves when it only speaks.",
      not: {
        'Fully: she refuses the cover-up from the very start, and she goes to the police to free the postman':
          "At the start she says that whatever they did, they did together, and she never goes to the police. Her last act is wordless: she spits out Phil's sweet and leaves.",
        "Not at all: it is Leah who tracks down a real postman and gets his DNA on to Adam's jumper":
          "That is Cathy, who takes 'initiative' by finding a real postman. Leah is horrified, and says plainly that an innocent man is held for a crime that never happened.",
        'Fully: she is the only character who feels any guilt, while Brian never shows any remorse at all':
          'Brian is broken by guilt: he cries because he is lying and feels terrible inside. Leah names the guilt most clearly, but she is not alone in feeling it.',
      },
      more: "Many students treat Leah as simply the good one. The stronger argument is that she is the group's uneasy conscience, and that the play asks whether naming a wrong is enough. Her monologues are funny and desperate, and Phil's silence wins most of their scenes.",
      tip: 'Weigh a claim about a character by finding what supports it and what complicates it, then judge which matters more. Here the test is her words against her deeds.',
    },
  'In Never Let Me Go, Miss Emily tells Kathy and Tommy: "You were lucky pawns." Which sentence analyses this line best?':
    {
      why: "It names the precise word, 'lucky', and its effect: the adjective tries to comfort, yet the noun it qualifies is something sacrificed in a game. It links that to Ishiguro's purpose: the more reasonable Miss Emily sounds, the clearer it becomes that Hailsham made an unjust system easier to bear.",
      not: {
        'Miss Emily admits to Kathy and Tommy that the students were pawns in a game, though she says they were lucky ones.':
          'It retells the line in other words. It says what Miss Emily admits, but not what any word does or why Ishiguro wrote it.',
        'Ishiguro uses a metaphor taken from chess and a short, simple sentence, which are both typical features of his style.':
          'The metaphor is named correctly, but the sentence says nothing about its effect here, and calling it typical is a generalisation, not analysis.',
        'The line shows that Miss Emily now regrets Hailsham completely, and admits that it treated students as badly as anywhere else.':
          "A misreading: she wants Hailsham's kindness recognised. She thinks the students were lucky compared with those raised elsewhere, which is exactly what the adjective claims.",
      },
      more: "Strong answers judge Miss Emily rather than describe her. One reading sees a reformer who did real good; another sees a woman who made an unjust system easier to bear. Kathy's quiet reply in the same chapter, 'But for us, it's our life', shows what the cause cost the people inside it.",
      tip: "In a sentence of analysis, quote the single word that carries the effect, say what it does, and tie it to the writer's purpose. Here one adjective is enough.",
    },
  'A critic argues that Enid, in Leave Taking, cannot see the racism her daughters face. Which response weighs this claim best?':
    {
      why: "In Scene Two Del accuses her mother of not seeing the police vans 'hunting us down'. But in Scene Eight, in her most honest speech, Enid describes life as a Black woman in England, unseen and unheard. She has always seen racism, and been unseen by it. The two disagree about how to survive it, not whether it exists.",
      not: {
        'Fully: she defends England to the very end of the play, and never once admits to any hardship there':
          'In Scene Eight she admits that in a way they are poorer in England than in her Jamaican village, and describes being unseen. Her defence of England cracks.',
        'Not at all: it is Enid who says, in Scene Two, that the police vans are "hunting us down"':
          "That is Del's accusation against her mother, in the scene that ends with the slap. Enid's answer comes only in Scene Eight.",
        "Not at all: she reads her daughter's palm in Scene Eight, and sees all of Del's future there":
          "It is the other way round: Del, now learning from Mai, reads her mother's palm, and the play ends as she looks into her mother's eyes.",
      },
      more: "Pinnock has explained Enid's strictness as fear of how Black young people were treated and criminalised in Britain. Speaking of 'you' rather than 'I', Enid keeps her pain at a slight distance even now, and the line is the moment Del begins to understand her.",
      tip: "Weigh a critic's claim with a quotation from early and late in the play: a character who stays silent often reveals at the end what she knew all along.",
    },
  'In The History Boys, the Headmaster urges Mrs Lintott, "Think charm. Think polish. Think Renaissance Man.", and Irwin later tells the boys, "Think bored examiners." Which judgement does this evidence best support?':
    {
      why: "Both lines use the same pattern, short imperatives that open with the same word, in the rhythm of an advertising slogan. Bennett builds the play from pairs, and this echo quietly shows that Irwin's teaching serves the Headmaster's idea of education as presentation, whatever Irwin thinks of the Headmaster himself.",
      not: {
        "Irwin teaches the boys to see through the Headmaster's slogans and to love learning for itself":
          "That describes Hector, whose creed is that all knowledge is precious whether or not it serves any use. Irwin's slogan sells the same polish the Headmaster wants.",
        "Both men share Hector's belief that examinations, even for Oxbridge, are the enemy of education":
          "That is Hector's view, put to Irwin in their argument about gobbets. Irwin was hired to get the boys through those very examinations.",
        'The Headmaster copies his slogans from Irwin, the young teacher he has hired for Oxbridge':
          'The order is the other way round: the Headmaster speaks first, in the staff room, and Irwin later uses the same pattern with the boys.',
      },
      more: "The imagery of presentation runs through the play: rival candidates 'groomed like thoroughbreds', facts served with a sprig of parsley. Mrs Lintott's reply to the Headmaster, that plainly stated facts 'need no presentation, surely', sets out the opposite method.",
      tip: 'When two characters use the same pattern of words, quote both and say what the echo links. Structure, the pairing of scenes, is evidence too.',
    },
  "A critic argues that The Sign of Four admires Holmes's cold reason without any doubt at all. Which response weighs this claim best?":
    {
      why: 'The method works: Holmes reads the room and runs Small down. But Watson, who calls him an automaton and a calculating machine, ends with a wife, Jones with the credit, and Holmes reaching up for the cocaine-bottle. The novel admires the method while doubting the man it produces.',
      not: {
        'Fully: Watson praises the method from first to last, and Holmes ends the novel content and at rest':
          "The novel closes as it opened, with Holmes and his drug: without a problem, his mind returns to the bottle. Watson's 'automaton' is criticism, not praise.",
        'Not at all: Holmes gives up reason for feeling at the end, and he is the one who marries Mary':
          "Watson marries Mary. Holmes cannot even congratulate him, since love, he says, is opposed to 'true cold reason'.",
        "Not at all: Athelney Jones's stern facts solve the case, and Holmes is shown to have been wrong":
          "Jones arrests Thaddeus Sholto wrongly, while the reader has watched Holmes read the room correctly. Jones's confidence is satire of the official police.",
      },
      more: 'One reading of the circular ending is that Conan Doyle warns that a life of pure reason leaves a person empty; another is that it is a comic shrug that restores the eccentric hero for his next case. The first fits the contrast between Holmes and Watson that the novel builds from its opening pages.',
      tip: "Weigh a critic's claim with evidence on both sides, then decide which matters more. An ending that echoes the opening is strong evidence for what a novel thinks of its hero.",
    },
  'In Silas Marner, Chapter 1 records the verdict at Lantern Yard: "The lots declared that Silas Marner was guilty." In Chapter 19 Silas tells Godfrey: "God gave her to me because you turned your back upon her". Which judgement does this evidence best support?':
    {
      why: "At Lantern Yard Silas trusted a ritual of chance to prove his innocence, and its false verdict shattered his faith: he called God a 'God of lies'. In Chapter 19 his faith has returned, but in a new form: he finds God's will in what people do, and fail to do, rather than in the drawing of lots.",
      not: {
        'Silas has lost his faith for good, and now trusts only in what he can earn and count':
          "The second quotation names God at once. Silas's faith has come back, and gold is no longer what he lives for: Eppie is.",
        'Silas still trusts the lots, and draws them again to decide whether Eppie should stay':
          "Silas draws no lots in Chapter 19. He reads God's will in Godfrey's failure to claim his child, not in any ritual of chance.",
        'Eliot shows that Silas was wrong to curse God at Lantern Yard, since the lots told the truth':
          'The lots were false: William had taken the money and framed Silas. His curse came from despair at an unjust verdict, not from any error.',
      },
      more: "The two scenes are joined deliberately: an accent of bitterness returns that had been silent in Silas since Lantern Yard, as for the second time someone tries to take what he loves. In Chapter 20 Godfrey repeats Silas's proverb about a blessing turned from the door, admitting that Marner was right.",
      tip: "Set an early and a late quotation side by side to show a character's change, then name what has stayed the same and what has altered. Here faith returns, but not the old kind.",
    },
  'Raging at a storm, an old king commands it: "Blow, winds, and crack your cheeks" and "You cataracts and hurricanoes, spout / Till you have drench\'d our steeples". Which is the strongest sentence of analysis?':
    {
      why: "The strongest sentence sees the irony of the commands: a king who has given away his power tries to rule the weather instead. The storm's violence also mirrors the rage inside him.",
      not: {
        'The king is describing the bad weather around him':
          'He is not describing it. He is giving it orders.',
        "The speaker uses imperatives such as 'Blow' and 'spout'":
          'It names the method but not what the commands show about him.',
        'The king wants the storm to stop so he can find shelter':
          "He urges it on, to 'blow' and 'spout'. He wants it fiercer, not gone.",
      },
      more: 'Lear has given his kingdom to two daughters who have now shut him out. The storm on the heath is often read as a picture of his mind breaking.',
      tip: "Ask what a speaker's commands reveal: who gives the orders, and who is really in control.",
    },
  'A creature, rejected by his maker, warns him: "Beware; for I am fearless, and therefore powerful." Which is the strongest sentence of analysis?':
    {
      why: "He is fearless because he has nothing left to lose, and 'therefore' makes his power follow as calmly as a proof. The strongest sentence hears that chilling logic: despair has become a weapon.",
      not: {
        'The creature warns him because he wants to be his friend':
          'He has given up on friendship. This is a threat, made after his maker destroys the companion he promised.',
        'The semicolon separates the warning from its reason':
          'It names a feature of punctuation without saying what the logic does.',
        'The creature is boasting that he is strong and brave':
          'Close, but it misses the logic: he is powerful because he no longer fears anything.',
      },
      more: "Earlier the creature asked only for a companion. Now he tells his maker 'You are my creator, but I am your master', turning their roles upside down.",
      tip: "Small linking words, such as 'therefore' and 'because', can carry a character's whole argument. Analyse them.",
    },
  'At the end of a novel, a once-cold woman tells the man who loved her that "suffering has been stronger than all other teaching, and has taught me to understand what your heart used to be". Which is the strongest sentence of analysis?':
    {
      why: "Suffering becomes a teacher 'stronger than all other teaching', so her pain has taught her what a cold upbringing never could: to understand love. The strongest sentence sees that change in her.",
      not: {
        'She is saying that she went to school and had many teachers':
          "It takes 'teaching' literally. Suffering is the teacher, a metaphor.",
        "The word 'suffering' shows that she has been very sad":
          'Vague: it names her feeling but not what the metaphor of teaching shows.',
        'She is telling him she still does not understand him':
          'She says the opposite: suffering has taught her to understand his heart.',
      },
      more: "Estella was raised by Miss Havisham to break men's hearts. Here, in the ending Dickens revised, she says she has been 'bent and broken' into a better shape.",
      tip: 'When a feeling is described as something else, a teacher, a prison, a light, analyse what that comparison adds.',
    },
  'A governess, believing her employer will marry another woman, demands: "Do you think, because I am poor, obscure, plain, and little, I am soulless and heartless?" Which is the strongest sentence of analysis?':
    {
      why: 'The list, poor, obscure, plain, little, gives every reason society would rank her low; then the question rejects the idea that any of them lessens her soul or heart. She claims equal feeling with the man above her.',
      not: {
        'The governess is saying that she is poor and small':
          'It repeats the list but misses the point: she denies these make her less.',
        'The question is rhetorical, which makes the reader stop and think':
          'It names the method but gives a vague effect.',
        'She agrees that being poor has made her heartless':
          "She rejects it: her answer is that she has 'as much soul' as he does.",
      },
      more: "She goes on: 'I have as much soul as you'. Brontë gives a poor governess a voice equal to her master's, which shocked some Victorian reviewers.",
      tip: 'A list can be an argument: say what the items have in common, and what the speaker does with them.',
    },
  'Trying to win a friend to a plot against a ruler, a nobleman says: "The fault, dear Brutus, is not in our stars, / But in ourselves, that we are underlings." Which is the strongest sentence of analysis?':
    {
      why: "If their low rank is not fate but their own fault, then they can change it. The strongest sentence sees the persuasion: by denying the stars, the speaker turns rebellion into a test of his friend's courage.",
      not: {
        'The nobleman says that the stars are to blame for their low rank':
          "He says the opposite: the fault is 'not in our stars'.",
        'The speaker uses the name Brutus, so we know who he means':
          'It notices the address but not what the argument does.',
        'This shows that the nobleman is unhappy with his position':
          'True but vague. It misses how the line works on his listener.',
      },
      more: "Cassius speaks to Brutus in Act 1, Scene 2 of Julius Caesar. Just before, he says 'Men at some time are masters of their fates', flattering Brutus towards the plot.",
      tip: 'With persuasive speech, ask what the speaker wants the listener to do, then show how the words push him there.',
    },
}
