import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Grade Climber: the explanation a student sees after each answer, by question
 * key (src/data/games/banks/grade-climber.ts). Written with AI on 16 October
 * 2026 and checked against each question and its options, as the founder decided
 * (src/lib/games/explanations/types.ts).
 */
export const EXPLANATIONS: GameExplanations = {
  '"She runs like the wind." What technique is used?': {
    why: "The sentence compares how fast she runs to the wind, using the word 'like'. A comparison that uses 'like' or 'as' is a simile.",
    not: {
      Metaphor:
        "A metaphor says one thing is another, with no 'like' or 'as'. The metaphor would be 'She is the wind'.",
      Alliteration:
        "Alliteration repeats the same first sound in nearby words. 'She runs like the wind' has no repeated opening sound.",
      Personification:
        'Personification gives human qualities to something that is not human. She is already a person, so nothing is personified.',
    },
    more: 'The wind is fast, free and impossible to catch, so the simile suggests she moves quickly and effortlessly, not just that she can run.',
    tip: "Do not stop at naming the simile. Say what the comparison suggests: 'The simile suggests she moves with speed and ease.'",
  },
  '"The stars danced in the sky." What technique is used?': {
    why: 'Dancing is something people do. Giving a human action to something that is not human, here the stars, is personification.',
    not: {
      Simile: "There is no comparison using 'like' or 'as'. The stars simply dance.",
      Hyperbole:
        "Hyperbole is deliberate exaggeration, such as 'a million times'. Nothing here is overstated; the stars are given a human action.",
      Onomatopoeia:
        "Onomatopoeia is a word that sounds like the noise it describes, such as 'buzz'. 'Danced' is not a sound word.",
    },
    more: "'Danced' makes the stars seem lively and joyful, as if the night sky is celebrating. It creates a cheerful, magical mood.",
    tip: "Pick out the verb that does the personifying and explain what it suggests: 'danced' suggests joy and movement.",
  },
  'What does "cold-hearted" suggest about a character?': {
    why: "'Cold-hearted' is not about temperature. The heart stands for feelings, so a cold heart belongs to someone with no warmth or kindness towards others.",
    not: {
      'They are ill':
        "Being ill is about the body. 'Cold-hearted' describes a person's feelings and behaviour, not their health.",
      'They live somewhere cold':
        "The word is figurative. 'Cold' describes their feelings, not where they live.",
      'They are shy':
        "A shy person may be quiet but still kind. 'Cold-hearted' means unkind and uncaring, which is different.",
    },
    more: "We often link warmth with kindness and coldness with cruelty: a 'warm welcome', a 'cold stare'. Writers use this link to show character quickly.",
    tip: 'When a word is used figuratively, explain the literal meaning first, then what it suggests about the character.',
  },
  '"Crash! Bang! Wallop!" What technique is this?': {
    why: "'Crash', 'bang' and 'wallop' are words that imitate the sounds they describe. Words that sound like their meaning are onomatopoeia.",
    not: {
      Alliteration:
        'Alliteration needs the same first sound in nearby words. Crash, bang and wallop all start with different sounds.',
      Repetition:
        'Repetition uses the same word or phrase more than once. Each word here is different.',
      Simile: "A simile compares two things using 'like' or 'as'. Nothing is compared here.",
    },
    more: 'Onomatopoeia lets the reader hear a scene, not just picture it. Short, loud sound words make a moment feel sudden and noisy.',
    tip: "Explain the sound, not just the label: 'The onomatopoeia makes the reader hear the chaos of the moment.'",
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
      Rhyme: "Rhyme needs matching end sounds, like 'cat' and 'hat'. None of these words rhyme.",
    },
    more: "The 'p' is a plosive sound, made with a small burst of air. Repeated plosives give a line a bouncy, punchy rhythm.",
    tip: "Name the sound as well as the device: 'The plosive alliteration creates a lively, bouncing rhythm.'",
  },
  '"The sun smiled down on us." What technique is used?': {
    why: 'Smiling is a human action. The sun is given a human expression, so this is personification.',
    not: {
      Simile: "There is no 'like' or 'as'. The sun is not compared to anything; it simply smiles.",
      Hyperbole:
        'Hyperbole is deliberate exaggeration. Nothing here is overstated; the sun is given a human action.',
      Onomatopoeia: "Onomatopoeia is a word that imitates a sound. 'Smiled' is not a sound word.",
    },
    more: 'A smiling sun feels friendly and kind, as if nature approves of the people below. It creates a warm, happy mood.',
    tip: "Explain what the human quality suggests: 'Personifying the sun as smiling makes the day feel welcoming and joyful.'",
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
    more: "Lions are known for courage and strength, so the simile suggests he is fearless and powerful. Compare 'He was a lion in battle', which is a metaphor.",
    tip: "Explain why the writer chose that animal: 'Comparing him to a lion suggests fierce, natural courage.'",
  },
  'What does an exclamation mark at the end of a sentence usually show?': {
    why: 'An exclamation mark shows strong feeling: shock, anger, joy or surprise. It tells the reader to read the sentence with force.',
    not: {
      'A question':
        'A question ends with a question mark. An exclamation mark shows feeling, not a question.',
      'A pause':
        'Every sentence ends with a stop of some kind. The special job of an exclamation mark is strong emotion; a comma or an ellipsis shows a pause.',
      'The end of a story':
        'It can end any sentence, anywhere in a text. It does not mark the end of a story.',
    },
    more: 'Writers use exclamation marks for shouted speech, sudden events and strong reactions. Too many weaken the effect, so careful writers use them sparingly.',
    tip: 'In your own writing, save exclamation marks for real moments of shock or emotion. In analysis, say what feeling the punctuation shows.',
  },
  '"The snake slithered and slid silently." What technique is this?': {
    why: "The repeated soft 's' sounds in snake, slithered, slid and silently create a hissing effect. Repeating 's' sounds like this is sibilance.",
    not: {
      Onomatopoeia:
        "Onomatopoeia is a single word that imitates a sound, like 'hiss'. Here the hissing comes from repeating 's' sounds across the line, which is sibilance.",
      Metaphor: 'Nothing is described as being something else. The snake really does slither.',
      Hyperbole: 'There is no exaggeration. The sentence simply describes how the snake moves.',
    },
    more: 'The hissing sound suits a snake, so the reader almost hears it move. Sibilance can feel smooth and quiet, or sinister and secretive.',
    tip: "Link the sound to the meaning: 'The sibilance mimics the snake's hiss and makes its movement feel sly.'",
  },
  'If a character is described as having "a heart of stone", what does this mean?': {
    why: "The heart stands for feelings. A stone is hard and cold, so 'a heart of stone' belongs to someone who feels no pity and treats others harshly.",
    not: {
      'They have a medical condition':
        'The phrase is a metaphor, not a fact about their body. It describes their feelings.',
      'They are strong':
        'Stone is hard, but here hardness means having no pity, not having strength.',
      'They collect stones':
        'This takes the words literally. The phrase describes what the person is like inside.',
    },
    more: "This is a metaphor: the heart is said to be made of stone. Its opposite is 'a heart of gold', which describes a very kind person.",
    tip: 'When you meet a phrase like this, explain both parts: what the object is like, and what that suggests about the character.',
  },
  '"Tick tock, tick tock went the clock." What technique is used?': {
    why: "'Tick tock' imitates the sound a clock makes. Words that sound like the noise they describe are onomatopoeia.",
    not: {
      Hyperbole:
        'Hyperbole is deliberate exaggeration. A clock really does tick, so nothing is exaggerated.',
      Simile: "There is no comparison using 'like' or 'as'.",
      Metaphor: 'Nothing is described as being something else. The words copy a real sound.',
    },
    more: "The repeated 'tick tock' also creates a steady rhythm, like time passing. Writers use it to build suspense while a character waits.",
    tip: "Explain what the sound adds: 'The onomatopoeia makes the reader hear time passing, which builds suspense.'",
  },
  'What does it mean if a writer repeats a word three times?': {
    why: 'Repeating a word on purpose makes the reader notice it and remember it. Three times is a strong pattern, so the idea feels important.',
    not: {
      'They made a mistake':
        'Repetition in published writing is deliberate. Writers choose it for effect.',
      'They ran out of vocabulary':
        'Writers repeat a word by choice, to stress it, not because they cannot think of another.',
      'It creates rhyme':
        'Rhyme needs different words with matching end sounds. Repeating the same word is repetition.',
    },
    more: "Repetition can build emotion, as in a speech, or show a character's obsession or panic. Three is especially memorable, which is why speakers use it so often.",
    tip: 'Name the word that is repeated, then explain why the writer wants the reader to keep hearing it.',
  },
  '"The wind howled through the trees." What technique is used?': {
    why: 'Howling is a cry made by people in pain or by animals such as wolves. Giving the wind this living voice is personification.',
    not: {
      Simile: "There is no 'like' or 'as'. The wind is not compared to anything; it simply howls.",
      Alliteration:
        "Alliteration repeats the first sound of nearby words. 'Wind', 'howled' and 'trees' all begin differently.",
      Hyperbole:
        'Nothing is exaggerated. The wind is given a living voice, which is personification, not overstatement.',
    },
    more: "'Howled' makes the wind sound wild and in pain, which creates a threatening, lonely atmosphere. Writers often use weather like this to set a mood.",
    tip: "Pick out the verb that does the personifying and say how it shapes the mood: 'howled' makes the scene feel wild and uneasy.",
  },
  '"Big, bad, bold Billy." What technique is this?': {
    why: "Big, bad, bold and Billy all begin with the same 'b' sound. Repeating the first sound in nearby words is alliteration.",
    not: {
      Rhyme: 'Rhyme needs matching end sounds. Big, bad, bold and Billy all end differently.',
      Simile: "Nothing is compared using 'like' or 'as'.",
      Personification: 'Billy is already a person, so nothing non-human is given human qualities.',
    },
    more: "'B' is a plosive, a hard sound made with a burst of air. Repeated plosives make a description sound forceful and punchy, like a nickname or a headline.",
    tip: "Say what the repeated sound does: 'The harsh, plosive alliteration makes Billy sound tough and loud.'",
  },
  'If a poem uses words like "dark", "shadow" and "cold", what mood is created?': {
    why: 'Dark, shadow and cold all suggest a lack of light and warmth, which we link with danger and sadness. Together they build a gloomy, threatening mood.',
    not: {
      'Happy and cheerful':
        "A cheerful mood would use words like 'bright', 'warm' and 'sunny'. These words suggest the opposite.",
      'Exciting and fast':
        'These words describe a setting, not speed or action. They slow the reader down into gloom.',
      'Calm and peaceful':
        "Darkness can be quiet, but 'shadow' and 'cold' suggest something hidden or harsh, which makes the mood uneasy rather than peaceful.",
    },
    more: 'A group of words linked by meaning is called a semantic field. Here a semantic field of darkness and cold creates the atmosphere.',
    tip: "Use the term in analysis: 'The semantic field of darkness creates a gloomy, threatening mood.'",
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
      'The room collapsed':
        "'Fell' is not literal here. The room did not fall down; the noise in it stopped.",
      'Someone tripped': "No person falls. 'Fell' describes how the silence arrived.",
      'It was evening':
        'We do say night falls, but here it is the silence that falls, and nothing mentions the time of day.',
    },
    more: 'Sudden silence often signals shock or tension: something has just happened, or everyone is waiting. Writers use it to make readers hold their breath.',
    tip: "Zoom in on single verbs. Explain what 'fell' suggests about speed and mood, not just what happened.",
  },
  'Why might a writer use a rhetorical question?': {
    why: "A rhetorical question is asked for effect, not for an answer. It pulls the reader in and makes them think about the issue, often leading them towards the writer's view.",
    not: {
      'To confuse the reader':
        'A good rhetorical question makes the point clearer, not muddier. It invites the reader to agree.',
      'To provide an answer':
        'A rhetorical question does not expect an answer. The answer is usually obvious, which is the point.',
      'To end a paragraph':
        'It can appear anywhere in a text. Where it goes matters less than the thinking it provokes.',
    },
    more: "Persuasive writers use rhetorical questions to make the answer feel obvious: 'Who would want their children to breathe dirty air?'",
    tip: 'In persuasive writing, use one or two rhetorical questions to involve your reader. Too many can sound like nagging.',
  },
  '"I\'ve told you a million times!" What technique?': {
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
      'The weather was happy':
        'Weeping is a sign of sadness, not happiness. The weather is shown as grieving.',
      'Someone was crying outside':
        "It is the weather that weeps, not a person. 'Wept' is used figuratively for the rain.",
      'It was very hot': "Tears suggest rain and gloom. Nothing in 'wept' suggests heat.",
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
  '"Life is a rollercoaster." What technique is this?': {
    why: "Life is said to be a rollercoaster, with no 'like' or 'as'. Saying one thing is another is a metaphor.",
    not: {
      Simile:
        "A simile would say life is like a rollercoaster. Without 'like' or 'as', it is a metaphor.",
      Personification:
        'Personification gives human qualities to something non-human. Life is compared to a ride, not given human actions.',
      Alliteration:
        "Alliteration repeats the first sound of nearby words. 'Life' and 'rollercoaster' begin differently.",
    },
    more: 'A rollercoaster has ups and downs, sudden drops and moments of thrill and fear. The metaphor suggests life is unpredictable and exciting.',
    tip: "Explain which features of the image carry over: 'The rollercoaster metaphor suggests life's sudden highs and lows.'",
  },
  'In Romeo and Juliet, what does "star-cross\'d lovers" mean?': {
    why: "In Shakespeare's time many people believed the stars controlled human lives. 'Star-cross'd' means the stars are against them, so Romeo and Juliet are doomed by fate from the start.",
    not: {
      'They love astronomy':
        'The stars here stand for fate, not a hobby. Nothing in the play shows an interest in astronomy.',
      'They met under the stars':
        "They first meet at the Capulets' feast. 'Star-cross'd' is about fate working against them, not where they met.",
      'They are famous':
        "'Star' here does not mean a celebrity. In the Prologue, the stars are the forces of fate.",
    },
    more: 'The Chorus says this in the Prologue, before the action begins, so the audience knows the lovers will die. Watching them hope while knowing the ending creates dramatic irony.',
    tip: "Use the phrase as evidence for the theme of fate, and link it to later moments, such as Romeo's cry that he is fortune's fool after killing Tybalt.",
  },
  '"Never, never, never give up." What technique is used here?': {
    why: "The word 'never' is used three times in a row. Repeating a word for emphasis is repetition, and it makes the message sound determined.",
    not: {
      Personification:
        'Nothing non-human is given human qualities. It is a command spoken to a person.',
      Simile: "Nothing is compared using 'like' or 'as'.",
      Onomatopoeia: "'Never' does not imitate a sound.",
    },
    more: 'Saying the same word three times, one after another, hammers the idea home. Speeches use it because listeners remember patterns of three.',
    tip: 'In a speech or persuasive piece, repeat one key word in a pattern of three to make your main point stick.',
  },
  'What does the word "lurking" suggest about a character?': {
    why: 'To lurk is to wait out of sight, usually to do something bad. The word suggests the character is hidden, watching, and dangerous.',
    not: {
      'They are friendly':
        "Friendly people do not hide and wait. 'Lurking' suggests a threat, not warmth.",
      'They are lost':
        'A lost person is unsure where to go. Lurking is deliberate: the character chooses to hide and wait.',
      'They are sleeping':
        'Lurking is an alert, watchful act. A sleeping character is not waiting to strike.',
    },
    more: 'Verbs like lurking, creeping and prowling make a reader uneasy before anything happens. They are useful for building tension in a story.',
    tip: "Comment on the connotations of a single verb: 'lurking' suggests secrecy and menace, which builds suspense.",
  },
  '"The classroom was a zoo." What technique is this?': {
    why: "The classroom is said to be a zoo, with no 'like' or 'as'. Saying one thing is another is a metaphor.",
    not: {
      Simile:
        "A simile would say the classroom was like a zoo. Without 'like' or 'as', it is a metaphor.",
      Personification:
        'Personification gives human qualities to non-human things. Here a room full of people is compared to a place full of animals.',
      Alliteration:
        "Alliteration repeats the first sound of nearby words. 'Classroom' and 'zoo' begin differently.",
    },
    more: 'A zoo is noisy, wild and full of animals, so the metaphor suggests the pupils are loud and out of control. It exaggerates for comic effect.',
    tip: "Explain what the image suggests about behaviour: 'The zoo metaphor suggests the pupils are wild, noisy and out of control.'",
  },
  'If a poem has a regular rhyme scheme (ABAB), what effect does this create?': {
    why: 'In ABAB, lines one and three rhyme, and lines two and four rhyme. The pattern makes a poem sound musical and ordered, like a song.',
    not: {
      Confusion:
        'A regular pattern does the opposite: it makes a poem feel predictable and ordered. Irregular rhyme is more likely to unsettle.',
      'Tension and fear':
        'The rhyme scheme itself creates order, not fear. Tension would come from the words, or from a pattern that breaks.',
      Sadness:
        "A rhyme scheme does not carry a mood on its own. Sadness comes from the poem's words and images.",
    },
    more: 'A regular pattern can also clash with dark content, making it more unsettling. When a poet breaks the pattern, that moment stands out.',
    tip: "Do not just label the rhyme scheme. Say what the order, or a break in the order, does to the poem's meaning.",
  },
  'Why might a writer use a list of three (tricolon)?': {
    why: 'Three items in a row feel balanced and complete, and the pattern sticks in the memory. Writers use a list of three to stress an idea and make it persuasive.',
    not: {
      'Because they can only think of three things':
        'The number is a choice. Three is used because it sounds complete and memorable, not because of a lack of ideas.',
      'To confuse the reader':
        'A tricolon makes a point clearer and more memorable, not confusing.',
      'To save space':
        'A list of three often takes more words, not fewer. Its purpose is emphasis.',
    },
    more: "A famous example is 'I came, I saw, I conquered'. Speakers often build the three items in order of importance, saving the strongest for last.",
    tip: 'In persuasive writing, use a list of three adjectives or phrases, with the strongest last, to build to a climax.',
  },
  '"The leaves whispered in the breeze." What technique is this?': {
    why: 'Whispering is something people do. Giving the leaves a quiet human voice is personification.',
    not: {
      Oxymoron:
        "An oxymoron joins two opposite words, like 'bitter-sweet'. No words here contradict each other.",
      Simile: "There is no 'like' or 'as'. The leaves are not compared to anything; they whisper.",
      Hyperbole: 'Nothing is exaggerated. The leaves are given a quiet human action.',
    },
    more: "'Whispered' is also close to onomatopoeia, since the word sounds like the soft rustle of leaves. It makes the scene feel calm, secret or mysterious.",
    tip: 'Explain the mood the human quality creates: whispering leaves can feel gentle, or as if nature is sharing secrets.',
  },
  'What is pathetic fallacy?': {
    why: 'Pathetic fallacy is when the weather or the natural world matches human feelings: a storm during an argument, or rain at a funeral.',
    not: {
      'When a character feels sorry for themselves':
        "'Pathetic' here comes from an old meaning, 'to do with feelings', not 'pitiful'. The term is about nature showing feelings.",
      'A type of simile':
        "A simile compares using 'like' or 'as'. Pathetic fallacy needs no comparison; the weather simply reflects a mood.",
      'When animals talk':
        'Talking animals are a kind of personification, as in fables. Pathetic fallacy is about weather and nature reflecting emotion.',
    },
    more: 'The term was coined by the critic John Ruskin in 1856. Writers use it to set the atmosphere and to hint at what is coming.',
    tip: "Name it and link it to a feeling: 'The pathetic fallacy of the storm reflects his anger.'",
  },
  '"Bitter-sweet memories." What technique is this?': {
    why: "'Bitter' and 'sweet' are opposite tastes joined into one phrase. Putting two contradictory words together like this is an oxymoron.",
    not: {
      Simile: "Nothing is compared using 'like' or 'as'.",
      Alliteration:
        "Alliteration repeats the first sound of nearby words. 'Bitter', 'sweet' and 'memories' all begin differently.",
      Personification:
        'Nothing non-human is given human qualities; the words describe a mixed feeling.',
    },
    more: 'The oxymoron captures mixed emotions: the memories are happy but also painful, perhaps because the good times are over.',
    tip: "Explain how the two opposites work together: 'The oxymoron shows the memories bring both joy and sadness.'",
  },
  'In Macbeth, what does blood symbolise?': {
    why: "Blood runs through the play as a sign of murder and the guilt it brings. Macbeth fears the whole ocean could not wash Duncan's blood from his hand, and Lady Macbeth later scrubs at a spot only she can see.",
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
  '"The fog crept in on little cat feet." What effect does this create?': {
    why: "'Crept' and 'little cat feet' suggest silent, careful movement, like a cat stalking. The fog arrives quietly and unnoticed rather than suddenly.",
    not: {
      'Fear and horror':
        "Fog can be sinister, but 'little cat feet' makes it soft and small, not terrifying.",
      'Excitement and energy':
        "'Crept' is slow and quiet. Nothing in the image suggests speed or excitement.",
      'Anger and frustration':
        'Nothing in the image is violent or angry. A cat padding along is calm and controlled.',
    },
    more: "Giving the fog a cat's feet is a metaphor: the fog moves the way a cat does. The image makes something shapeless feel alive and gentle.",
    tip: "Pick out the image and explain what it adds: 'The cat metaphor makes the fog seem silent, stealthy and alive.'",
  },
  'What is the purpose of pathetic fallacy?': {
    why: 'Pathetic fallacy uses weather and nature to mirror how characters feel, or to set the mood of a scene. A storm can reflect anger; sunshine can reflect joy.',
    not: {
      'To describe animals':
        'Pathetic fallacy is about weather and nature reflecting feelings, not describing animals.',
      'To create humour':
        'It is usually used to build atmosphere, such as gloom before a tragedy, not to make readers laugh.',
      'To introduce new characters':
        'It describes the setting and mood. It does not bring new characters into a story.',
    },
    more: "It can also mirror disorder. In Macbeth, the night of Duncan's murder is wild and stormy, as if nature itself is disturbed by the crime.",
    tip: 'In your own writing, match the weather to the mood you want, then change it when the mood changes.',
  },
  '"It was the best of times, it was the worst of times." This is an example of:': {
    why: 'Dickens places two opposite ideas, the best of times and the worst of times, side by side in balanced clauses. Placing contrasting ideas next to each other is juxtaposition.',
    not: {
      Oxymoron:
        "An oxymoron fuses two opposite words into one phrase, like 'bitter-sweet'. Here the opposites sit in two separate, balanced clauses.",
      Irony:
        'Irony means the opposite of what is said, or of what is expected. Dickens means both halves: the period was both.',
      Euphemism:
        "A euphemism is a gentle word for something unpleasant, like 'passed away'. Nothing here is softened.",
    },
    more: "This is the opening of Dickens's A Tale of Two Cities. The matching structure, called antithesis, suggests an age of extremes, full of hope and despair at once.",
    tip: 'For contrasting ideas in matching clauses, you can also use the precise term antithesis. Then explain what the contrast suggests.',
  },
  'In "A Christmas Carol", why does Dickens present Scrooge as "solitary as an oyster"?': {
    why: 'An oyster lives shut inside a hard shell. The simile suggests Scrooge has closed himself off from everyone: he is secretive, self-contained and alone by choice.',
    not: {
      'To show he likes seafood':
        'The oyster is an image, not his diet. It is chosen for its hard, closed shell.',
      'To show he lives by the sea':
        'Scrooge lives and works in London. The oyster describes his character, not where he lives.',
      'To show he is wealthy':
        'Scrooge is rich, but this image is about his closed shell. If anything, the pearl an oyster may hold hints at goodness hidden inside him.',
    },
    more: "The same passage calls him 'Hard and sharp as flint'. Together the images suggest a man who has made himself cold and closed, which makes his later change more striking.",
    tip: "Link Stave 1 to Stave 5: the closed oyster opens up when Scrooge becomes generous and joins his nephew's Christmas dinner.",
  },
  'Why might a poet use enjambment?': {
    why: 'Enjambment carries a sentence over the end of a line without punctuation, so the reader runs on to the next line. This creates flow, speed or a sense of urgency.',
    not: {
      'To create a pause':
        'Enjambment removes the pause at the end of a line. A pause in the middle of a line is a caesura.',
      'To rhyme more easily':
        'Enjambment is about where sentences run across lines, not about finding rhymes.',
      'To confuse the reader':
        "Used well, it guides the reader's pace. Its purpose is flow and emphasis, not confusion.",
    },
    more: 'Enjambment can also put weight on the word at the start of the next line, or show thoughts spilling over, out of control.',
    tip: 'When you spot enjambment, say what the run-on movement suggests: excitement, panic, or a feeling too big for one line.',
  },
  'In Romeo and Juliet, why does Shakespeare use light and dark imagery?': {
    why: 'Romeo sees Juliet as light: she teaches the torches to burn bright, and she is the sun. But their love must hide in darkness, so the contrast shows both its beauty and its danger.',
    not: {
      'To show the time of day':
        'Some lines do set the time, but the imagery does more: light stands for love and beauty, and darkness for secrecy and danger.',
      'To describe the weather':
        'The light and dark images are symbols of love and danger, not descriptions of the weather.',
      'To make the play more dramatic for actors':
        'The imagery is written for the audience to interpret. It carries meaning about love and danger, not stage effects for actors.',
    },
    more: "At dawn in Act 3, Romeo says 'More light and light, more dark and dark our woes': as day comes he must leave, so light now brings danger.",
    tip: 'Trace an image pattern across the play. Explaining how light and dark change meaning shows the whole-text understanding examiners reward.',
  },
  'In "Ozymandias", what does the "shattered visage" represent?': {
    why: "The visage is the broken stone face of the king's statue, half sunk in sand. Its ruin shows that even the mightiest ruler's power and works fade with time.",
    not: {
      'A broken mirror': 'A visage is a face. Here it is the face of a statue, not a mirror.',
      'A statue that fell over accidentally':
        'It is a broken statue, but the question asks what it represents. It was ruined by time, and it stands for fallen power.',
      'Ancient art techniques':
        "The sculptor's skill is praised, but the broken face symbolises the end of the king's power, not a style of art.",
    },
    more: "The irony is sharp: the face still shows the king's sneer of command, but the empire it ruled has gone. Only lone and level sands remain.",
    tip: "Link the image to the inscription's boast: the gap between his claim of mighty works and the empty desert creates the poem's irony.",
  },
  'What is a volta in a sonnet?': {
    why: "'Volta' is Italian for 'turn'. In a sonnet, the volta is the point where the argument, mood or tone shifts, often at line 9 or in the final couplet.",
    not: {
      'The title': 'The title names the poem. The volta is a turning point inside it.',
      'The final word':
        'A volta is a shift in thought, not a single word, though a final couplet can contain one.',
      'A type of rhyme':
        'A volta is about meaning and tone, not sound. It can happen whatever the rhyme scheme.',
    },
    more: 'In a Petrarchan sonnet the volta usually comes between the octave and the sestet, at line 9. In a Shakespearean sonnet it often comes in the final couplet.',
    tip: "Find the volta and explain what changes there: the speaker's mood, argument or attitude. Points about structure like this are highly rewarded.",
  },
  'In Jekyll and Hyde, what does the locked door of the laboratory represent?': {
    why: "Doors in the novella guard secrets. The locked laboratory door hides Hyde, and with him Jekyll's hidden life, keeping the respectable doctor apart from the evil he has let loose.",
    not: {
      'Poor building design':
        'The door matters for its meaning, not its design. It stands for secrecy and division.',
      'That Jekyll is busy working':
        'Jekyll shuts himself away to hide Hyde, not because he is busy.',
      'Victorian architecture':
        'The building is described in detail, but the locked door symbolises concealment, not a style of building.',
    },
    more: "Hyde uses a shabby back door with neither bell nor knocker, while Jekyll's front door faces a respectable square. The two doors mirror the two sides of one man.",
    tip: "Use setting as evidence. Explain how Stevenson's doors and buildings reflect the theme of duality and Victorian secrecy.",
  },
  'In "London" by Blake, what does the phrase "mind-forged manacles" suggest?': {
    why: "Manacles are chains, and 'mind-forged' means they are made in the mind. Blake suggests people are trapped by ideas and rules, imposed by those in power and accepted without question.",
    not: {
      'People wear handcuffs': 'The manacles are not real. They are a metaphor for mental chains.',
      'People are creative thinkers':
        'The image suggests the opposite: minds that are locked in, not free and inventive.',
      'London has many blacksmiths':
        "'Forged' is a metalworking word, but here the chains are made by the mind, not by smiths.",
    },
    more: "Blake hears these manacles in every voice around him, so the oppression is everywhere. The poem goes on to criticise the Church, the monarchy and the soldiers' suffering.",
    tip: "Explore both halves of the phrase: 'mind-forged' suggests people help build their own prisons, which makes the oppression harder to escape.",
  },
  'Why does Shelley use an iambic pentameter in "Ozymandias"?': {
    why: 'Iambic pentameter is a steady, ordered rhythm, like the control Ozymandias claimed. Shelley breaks it in places, and those breaks echo the way his power has crumbled.',
    not: {
      'Because all poems use it':
        'Many poems use other rhythms or none at all. Shelley chose this metre, so its effect is worth analysing.',
      'It was the easiest rhythm':
        'Poets choose a metre for effect, not ease. The point is what the rhythm suggests.',
      'To make it rhyme':
        'Metre is the pattern of stressed beats; rhyme is matching sounds. One does not create the other.',
    },
    more: 'Iambic pentameter has five pairs of syllables per line, each an unstressed beat then a stressed one: da-DUM. It is the usual metre of the English sonnet.',
    tip: 'When you discuss metre, link it to meaning. Show where the pattern holds and where it breaks, and why that matters.',
  },
  'In "Bayonet Charge" by Hughes, what does the "hot khaki" suggest?': {
    why: "'Hot khaki' puts the reader inside the soldier's heavy, sweaty uniform as he runs. It makes the charge physical and uncomfortable, not glorious.",
    not: {
      'The uniform is fashionable':
        'Khaki is a plain military colour. The heat suggests suffering, not style.',
      'The soldier is sunbathing':
        'He is charging across a field under fire. The heat comes from exertion and fear.',
      'The weather is warm':
        'The heat is in the uniform and the sweating body inside it. It is a detail about the soldier, not a weather report.',
    },
    more: 'Hughes drops the reader straight into the action. Details of heat and sweat show war as bodily suffering, far from the noble ideals the soldier once believed in.',
    tip: 'Pick out sensory details and say what they reveal: the physical reality of war replacing patriotic ideas.',
  },
  'In Great Expectations, what does Satis House symbolise?': {
    why: 'At Satis House every clock stopped at twenty minutes to nine, when Miss Havisham was jilted, and her wedding cake rots on the table. The house stands for time frozen and a life stuck in bitterness.',
    not: {
      'Hope and new beginnings':
        'Nothing begins at Satis House. Time has stopped and everything is decaying.',
      'A typical Victorian home':
        'Its stopped clocks, rotting cake and a bride who never took off her dress make it strange and Gothic, not typical.',
      "Pip's future happiness":
        'Pip hopes Satis House holds his future, but it brings him heartbreak through Estella. That hope is one of his great mistakes.',
    },
    more: "'Satis' means 'enough', as Estella explains: whoever owned the house could want nothing else. The irony is bitter, since its wealth brought no happiness.",
    tip: 'Use Satis House to discuss the theme of wealth: Dickens shows that money and status cannot buy happiness.',
  },
  'What is a caesura?': {
    why: 'A caesura is a pause in the middle of a line, usually made by punctuation such as a full stop, comma or colon. It breaks the rhythm on purpose.',
    not: {
      'A type of poem': 'A caesura is a feature inside lines, found in many types of poem.',
      'A rhyming couplet':
        'A rhyming couplet is two rhyming lines together. A caesura is a pause within one line.',
      'The last line of a stanza':
        'A caesura happens inside a line. The end of a line or stanza is a different kind of break.',
    },
    more: 'A caesura can create hesitation, shock or emphasis, making the reader stop at a key moment. Do not confuse it with an end-stopped line, where the pause falls at the end of the line.',
    tip: 'Name the punctuation that creates the caesura, then explain why the poet wants the reader to stop there.',
  },
  'In "The Charge of the Light Brigade", what does "valley of Death" allude to?': {
    why: "Psalm 23 speaks of walking through 'the valley of the shadow of death'. Tennyson's phrase echoes it, giving the charge a solemn, biblical weight and signalling that the riders are heading for death.",
    not: {
      'A horror film':
        'The poem was written in 1854, long before films existed. The allusion is to the Bible.',
      'A line from a Shakespeare play':
        "The phrase echoes Psalm 23 from the Bible, which Tennyson's readers knew well, not Shakespeare.",
      'A metaphor for old age':
        "The valley is where the cavalry ride into the enemy's guns. It is about death in battle, not ageing.",
    },
    more: "The charge took place at Balaclava in 1854, during the Crimean War. Repeating 'valley of Death' stresses that every rider moves closer to death.",
    tip: 'When you spot an allusion, name its source and explain what it adds: here, a religious seriousness that honours the dead.',
  },
  'How does Priestley use the Inspector as a dramatic device in "An Inspector Calls"?': {
    why: 'Priestley was a socialist, and the Inspector carries his message: people must take responsibility for one another. He questions each member of the family, and Gerald, exposing how their selfishness harmed one young woman.',
    not: {
      'As comic relief':
        'The Inspector is serious and commanding. He brings tension, not laughter.',
      'As a romantic interest':
        "He has no romantic role. Sheila and Gerald's engagement is the play's romance.",
      'As a symbol of capitalism':
        "He attacks capitalist selfishness. Mr Birling is the play's voice of capitalism.",
    },
    more: "The Inspector also controls the play's structure, questioning one character at a time. His mysterious identity makes him seem almost like a conscience, or a voice of judgement.",
    tip: "Write about the Inspector as Priestley's construct: a device for delivering the play's message, not just a character.",
  },
  '"Fair is foul, and foul is fair." How does this relate to themes in Macbeth?': {
    why: "The witches chant this together in the first scene. Good and evil are turned upside down, and things that seem fair may be foul, which introduces the play's deception and moral corruption.",
    not: {
      'It describes the weather':
        'The witches meet in thunder and fog, but this line is a paradox about values, not a weather report.',
      'It is about physical appearance':
        'It is about how things seem versus what they are, but in a moral sense: people and acts that seem good can be evil.',
      'It describes a battle':
        'A battle is mentioned in the same scene, but this line sets out a theme: good and evil are confused.',
    },
    more: "Macbeth's first line echoes the witches: 'So foul and fair a day I have not seen.' The echo hints at a link between him and them before they even meet.",
    tip: 'Use this line to discuss appearance and reality, and link it to Duncan trusting Macbeth, or Lady Macbeth telling him to look innocent while hiding a serpent.',
  },
  'Complete the analysis: "Stevenson uses the fog in Jekyll and Hyde to symbolise..."': {
    why: 'Fog hides things and blurs outlines. In the novella it wraps London when Utterson hunts for Hyde, mirroring the secrets the respectable characters keep and a world where good and evil are hard to tell apart.',
    not: {
      'The beauty of London':
        'The fog is described as a chocolate-coloured pall, gloomy and smothering. It makes London threatening, not beautiful.',
      'The industrial revolution':
        "Victorian London's fogs were thickened by coal smoke, but in the novella the fog works as a symbol of secrecy and confusion.",
      'Victorian fashion':
        "Nothing about the fog relates to clothing. It is part of the setting's symbolism.",
    },
    more: "As Utterson's cab crawls through Soho, the fog shifts between darkness and strange light. Stevenson uses it to make the city feel like a nightmare, matching a story about a hidden self.",
    tip: 'Link setting to theme: explain how the fog reflects concealment and moral confusion, then connect it to Jekyll hiding Hyde.',
  },
  'What structural technique does Dickens use by dividing "A Christmas Carol" into staves?': {
    why: 'A carol is a song, and Dickens calls his five chapters staves, which are verses of a song. The structure presents the story as a moral carol, a tale with a lesson about generosity, sung in five parts.',
    not: {
      Flashback:
        "Stave 2 does take Scrooge into his past, but that is a flashback inside one chapter. The staves are the novella's division into song-like parts.",
      'Stream of consciousness':
        "Stream of consciousness follows a character's unbroken thoughts. A Christmas Carol has a chatty narrator who comments and addresses the reader.",
      'Epistolary form':
        "An epistolary novel is told in letters, like Frankenstein's frame. A Christmas Carol is told by a narrator, not in letters.",
    },
    more: "The staves move in a clear order: Marley's warning, then the past, present and future, then Scrooge's change. The neat, repeated pattern suits a moral tale, like the verses of a carol.",
    tip: "Comment on structure as well as language: the five-stave journey from cold to warmth shows Scrooge's change step by step.",
  },
  'In "Lord of the Flies", what does the conch symbolise?': {
    why: 'The conch is used to call meetings, and only the boy holding it may speak. It stands for democracy, rules and the civilised world the boys came from, and its power fades as order breaks down.',
    not: {
      'Nature and the wild':
        'The conch is a natural shell, but the boys turn it into a tool of order. It represents rules, not the wild.',
      'Violence and savagery':
        'The conch stands against savagery. Its destruction marks the moment violence wins.',
      'Isolation and loneliness':
        'The conch brings the boys together. It symbolises community and order, not isolation.',
    },
    more: "As Jack's tribe grows, fewer boys respect the conch. It is shattered when Piggy is killed, showing that civilisation has collapsed on the island.",
    tip: "Trace a symbol across the novel. Show how the conch's power fades as the boys' savagery grows.",
  },
  '"The creatures outside looked from pig to man, and from man to pig." What does Orwell suggest?':
    {
      why: 'In the final scene the pigs drink and play cards with human farmers, and the other animals can no longer tell which is which. The pigs have become the oppressors they overthrew.',
      not: {
        'Pigs are intelligent':
          'The pigs are the cleverest animals, but the line is not about intelligence. It shows that they now behave like the humans.',
        'Animals should not be on farms':
          'The book is a fable about power, not about how animals should be kept. The farm stands for a whole country.',
        'The revolution succeeded':
          'The ending shows the revolution has failed: the animals are as badly off as before, under new masters.',
      },
      more: "Earlier, the commandments are rewritten until only one remains: some animals are more equal than others. The final image completes the pigs' change into humans.",
      tip: "Link the ending to the opening. The cyclical structure shows one tyranny replacing another, which is Orwell's warning about the Russian Revolution.",
    },
  'In "Remains" by Armitage, how does the poet present the psychological impact of conflict?': {
    why: 'The speaker tells the story casually, as if chatting to a friend, but he cannot stop reliving the killing. The relaxed language clashes with the graphic memory and his growing guilt, showing trauma that will not leave him.',
    not: {
      'The soldier forgets what happened':
        'The opposite is true: he cannot forget. The dead man returns to him when he is asleep and when he is awake.',
      'The poem celebrates military service':
        'The poem shows the lasting damage of combat. It does not celebrate fighting.',
      'The soldier feels no guilt':
        "Guilt is the heart of the poem. By the end, the speaker feels the man's blood is on his hands.",
    },
    more: "Armitage based the poem on interviews with soldiers for a documentary about their mental health. The title suggests both a dead body's remains and what remains in the soldier's mind.",
    tip: 'Comment on the tone shift: show how the casual voice at the start gives way to obsession and guilt by the end.',
  },
  'How does Shakespeare present the Nurse in Romeo and Juliet as a contrast to Lady Capulet?': {
    why: "The Nurse is warm, chatty and loving: she has cared for Juliet since birth. Lady Capulet is formal and distant, and when Juliet refuses Paris she says, 'I would the fool were married to her grave.'",
    not: {
      'The Nurse is wealthier':
        'The Nurse is a servant in the Capulet house. The contrast is about warmth, not money.',
      'The Nurse is more educated':
        'The contrast is not about learning. It is about who shows Juliet real affection.',
      'They are presented as identical':
        'Shakespeare sets them up as opposites: one warm and earthy, the other cold and formal.',
    },
    more: 'The Nurse also lets Juliet down: she advises her to marry Paris, and Juliet decides to trust her no more. Even her warmth has limits.',
    tip: "Compare the two mother figures and link them to context: rich families often gave babies to a wet nurse, so Juliet's closest bond is with a servant.",
  },
  'In "Exposure" by Owen, what does "merciless iced east winds that knive us" suggest?': {
    why: "Owen makes the wind an attacker: it is merciless, and it 'knive us', stabbing like a blade. The weather becomes an enemy as deadly as the soldiers on the other side.",
    not: {
      'The soldiers enjoy the cold':
        'The soldiers are suffering. Their brains ache, and the wind cuts them.',
      'The wind is gentle':
        "'Merciless' and 'knive us' make the wind brutal and violent, not gentle.",
      'Owen is describing a kitchen':
        "Owen describes soldiers freezing in the trenches of the First World War. 'Knive' is a verb, to stab, not a kitchen tool.",
    },
    more: "Owen turns the noun 'knife' into a verb, so the wind actively stabs. The poem suggests nature, not the enemy, is killing the men.",
    tip: "Zoom in on one word. Explaining why Owen chose 'knive us' shows the close analysis examiners look for.",
  },
  "In Jane Eyre, how does Bronte use the Red Room to develop Jane's character?": {
    why: 'Locked in the red-room as a punishment, young Jane feels trapped and treated unjustly, and she panics in terror. The experience shows her powerlessness and fuels her lifelong need for freedom and fairness.',
    not: {
      'It shows Jane likes the colour red':
        "The room's red colour adds to its frightening, blood-like atmosphere, but the scene is about punishment and imprisonment, not taste.",
      'It is simply a bedroom':
        'It is the room where Mr Reed died, and Jane is locked in it as a punishment. That makes it much more than a bedroom.',
      'Jane enjoys being alone':
        'Jane is terrified in the red-room. Being shut in alone is a punishment, not a pleasure.',
    },
    more: 'The red-room is the first of several places that confine Jane, such as Lowood and Thornfield. Soon after, she stands up to Mrs Reed, showing the spirit the punishment could not crush.',
    tip: "Use the red-room to begin a point about Jane's development, then trace how she fights for independence later in the novel.",
  },
  'In "My Last Duchess" by Browning, what does the Duke\'s control over the painting reveal?': {
    why: 'The Duke keeps the portrait behind a curtain that only he may draw. Now that she is a painting, he controls who sees her smile, which he could not do while she was alive.',
    not: {
      'He wants everyone to see her portrait':
        'The curtain shows the opposite: no one sees her unless the Duke chooses to draw it back.',
      'He misses his wife':
        'He shows no grief. He describes her with irritation, and admits he gave commands that stopped her smiles.',
      'He wants to sell the painting':
        'He shows it off as a treasure he owns. He wants to possess it, not sell it.',
    },
    more: "When the Duke says 'I gave commands', he hints that he had his wife killed. The portrait suggests he preferred her as an object he could own and control.",
    tip: "Link the painting to power and gender: the Duchess is silenced and turned into a possession, which reveals the Duke's tyranny.",
  },
  "In Frankenstein, why does Shelley frame the narrative with Walton's letters?": {
    why: "The novel opens with Walton's letters to his sister. Victor tells his story to Walton, and the Creature's story sits inside Victor's. These layers let us hear more than one side and decide whom to believe.",
    not: {
      'To make it longer':
        'The frame is a deliberate structure. It shapes how we judge the story rather than simply adding pages.',
      'Because Shelley liked letters':
        "The letters have a purpose: they frame Victor's tale and set up Walton as a mirror of Victor's ambition.",
      'To introduce a romantic subplot':
        'There is no romance between Walton and anyone. His letters are to his sister and tell of his voyage.',
    },
    more: "Walton is ambitious too, sailing for the North Pole, so Victor's story holds up a mirror to him. When his crew demand to go home, Walton agrees, though he calls it cowardice; readers can judge whether he has escaped Victor's fate.",
    tip: 'Discuss structure: explain how the nested narratives make us question whether Victor or the Creature deserves more sympathy.',
  },
  'In "Checking Out Me History" by Agard, why does the poet use phonetic spelling and dialect?': {
    why: 'Agard spells words as they sound in his Caribbean voice and uses Caribbean grammar. Writing this way rejects the idea that only standard English is proper and asserts the identity his education ignored.',
    not: {
      'He cannot spell': 'The spelling is deliberate. It recreates the sounds of Caribbean speech.',
      'It is a printing error':
        'The dialect is a choice that carries meaning, not a mistake by the printer.',
      'To make it easier to read':
        'Phonetic spelling can be harder to read at first. Agard uses it to assert identity, not to make reading easier.',
    },
    more: 'The poem attacks a colonial education that taught British history and nursery rhymes but ignored Caribbean and Black heroes. Its language is part of that protest.',
    tip: 'Link form to message: the way Agard writes is itself an act of resistance, so analyse the language as well as the content.',
  },
  'In "Tissue" by Dharker, what does paper symbolise?': {
    why: 'Paper in the poem is thin enough to let light through, yet it records the things that shape our lives: holy books, maps, receipts, even buildings imagined as paper. It shows how fragile, and how powerful, human life and structures are.',
    not: {
      'School homework':
        'The paper in the poem is not schoolwork. It stands for the records and structures of human life.',
      'Trees and deforestation':
        'The poem is not about the environment. Paper symbolises human life and the systems we build.',
      "The poet's diary":
        'The poem does not mention a diary. Its paper is a symbol for life, identity and power.',
    },
    more: 'The final line turns paper into human skin, so the whole poem becomes a meditation on how fragile and precious a human life is.',
    tip: 'Treat paper as an extended metaphor: follow how its meaning grows from object to symbol of life across the poem.',
  },
  "In Great Expectations, why does Dickens present Magwitch's return as a shock to Pip?": {
    why: "Pip believed Miss Havisham was his secret benefactor. When the convict he helped as a child appears and claims the role, Pip's dream of being made a gentleman by a lady collapses, and he must face his snobbery.",
    not: {
      'Pip forgot who he was':
        'Pip has not forgotten him; he recognises him. The shock is learning that this convict paid for his expectations.',
      'Magwitch was supposed to be dead':
        'Magwitch was transported for life, and returning to England meant death if caught. He was not thought dead.',
      'Pip had been expecting him':
        'Pip had no idea Magwitch was coming. His sudden arrival on a stormy night is what makes the scene so shocking.',
    },
    more: "Magwitch made his money as a sheep-farmer and stock-breeder in New South Wales, to make Pip a gentleman. Pip's horror at a convict benefactor exposes the snobbery his new life taught him.",
    tip: "Use this turning point to discuss class: Dickens shows that a gentleman's status can rest on hidden, humble foundations.",
  },
  'How does Shakespeare use the motif of darkness in Macbeth to convey moral corruption?': {
    why: "Darkness hides the murders and the evil desires behind them. Macbeth begs 'Stars, hide your fires', and Lady Macbeth calls 'Come, thick night', so darkness becomes a cover for crime and a sign of their corruption.",
    not: {
      'Darkness shows it is nighttime':
        'Some scenes are set at night, but darkness also symbolises evil and concealment, which is why the characters call on it.',
      'Darkness represents sadness':
        'Darkness in Macbeth is linked to evil and secrecy, not sadness.',
      'Darkness is used for dramatic lighting effects':
        'The play was first performed in daylight or by candlelight. The darkness is in the language, as a symbol.',
    },
    more: "After Duncan's death, darkness spreads beyond the castle: Ross says dark night strangles the travelling lamp even though it is day. Nature itself seems disturbed by the crime.",
    tip: 'Quote the characters calling on darkness, and explain how the motif links to the theme of hidden evil and appearance versus reality.',
  },
  'In "An Inspector Calls", how does the generational divide serve Priestley\'s message?': {
    why: "Sheila and Eric are shaken by the Inspector and accept their part in Eva's death. Their parents refuse to change. Priestley suggests hope lies with the young, while the older generation clings to selfish attitudes.",
    not: {
      'Older characters are wiser':
        'The play presents the older Birlings as stubborn and blind, not wise. They learn nothing.',
      'There is no real divide':
        'The divide is clear by the end: the young accept responsibility and the old deny it.',
      'The young are punished more':
        'The young are not punished more; they are changed more. Their parents escape any real change.',
    },
    more: 'Gerald sits between the two groups: he is young, but by the end he sides with the older Birlings. The play was first staged in 1945, when Britain was rebuilding.',
    tip: 'Link the divide to context: Priestley wanted post-war audiences, especially the young, to build a fairer society.',
  },
  'Complete: "Golding uses Simon as a Christ-like figure to..."': {
    why: 'Simon is kind and gentle, and he understands that the beast is inside the boys themselves. Like Christ, he brings a truth the others will not hear, and he is killed by them, an innocent sacrificed.',
    not: {
      'Provide comic relief': 'Simon is serious and spiritual. His story is tragic, not comic.',
      'Show the power of democracy':
        'Democracy is linked to the conch and to Ralph. Simon stands for goodness and truth.',
      'Represent the military':
        'Simon has nothing to do with the military. He stands for peace, kindness and insight.',
    },
    more: 'Simon helps the littluns, goes alone to his quiet place in the forest, and discovers that the beast on the mountain is a dead parachutist. He dies trying to tell the others.',
    tip: "Explain what Simon's death shows about the boys: when goodness is destroyed, savagery has taken over.",
  },
  'In "Of Mice and Men", why does Steinbeck set the novella near Soledad?': {
    why: "Soledad is a real town in California's Salinas Valley, and its name means 'solitude' in Spanish. Setting the novella there quietly announces its main theme: almost every character is lonely.",
    not: {
      'It was his hometown':
        "Steinbeck grew up in Salinas, a larger town nearby. Soledad's meaning matters more than any personal link.",
      'It was a famous ranch':
        'Soledad is a town, not a ranch. The ranch in the novella is a few miles from it.',
      'It had the best weather':
        "The weather is not the reason. The name's meaning, solitude, fits the novella's theme.",
    },
    more: "Lonely characters include Crooks, isolated by racism; Candy, old and afraid of being thrown out; and Curley's wife, who has no one to talk to. George and Lennie's friendship stands out against them.",
    tip: "Use the setting's name as a small, precise detail. Linking it to a theme shows you read the text closely.",
  },
  "How does Dickens use Scrooge's transformation to critique Victorian society?": {
    why: "Scrooge stands for the selfish rich who ignore the poor. When he changes, he raises Bob's salary, helps Tiny Tim and gives to charity, so Dickens suggests that if individuals change, the suffering of the poor can be eased.",
    not: {
      'He shows wealth is bad':
        'Dickens criticises greed and meanness, not wealth itself. Fezziwig is a prosperous, generous employer, and the changed Scrooge stays rich but uses his money well.',
      'He promotes Christianity':
        'The novella celebrates Christmas kindness, but its target is how the rich treat the poor, not religion itself.',
      'He shows that ghosts are real':
        'The ghosts are a storytelling device to change Scrooge. Dickens is not arguing about whether ghosts exist.',
    },
    more: 'Dickens wrote the novella in 1843, when he was angered by child poverty and harsh laws on the poor. The Ghost of Christmas Present shows Scrooge two children, Ignorance and Want, as a warning.',
    tip: "Link Scrooge's change to context: Dickens wanted his readers, not just Scrooge, to take responsibility for the poor.",
  },
  'How does Owen use sensory imagery in "Exposure" to convey the futility of war?': {
    why: 'Owen fills the poem with cold, wind, aching brains and endless waiting, while the actual fighting stays distant. The soldiers suffer and die from exposure, not battle, which shows how pointless their war has become.',
    not: {
      'To make the poem more colourful':
        'The images are bleak and painful. They make the war feel grim, not colourful.',
      'To describe a beautiful landscape':
        'The landscape is frozen and hostile. Owen shows it as a killer, not a view.',
      'To entertain the reader':
        "Owen wrote to show the truth of the war, not to entertain. The sensory details make readers feel the soldiers' suffering.",
    },
    more: 'Sounds matter too: the soldiers hear the mad gusts tugging on the wire, and distant guns rumble like another war. The weather is closer and deadlier than the enemy.',
    tip: 'Group the senses in your answer, touch, sound and sight, and explain how together they create a sense of futility.',
  },
  'In Romeo and Juliet, how does the Prologue function as a dramatic device?': {
    why: 'The Prologue tells the audience at the start that the lovers will die. Because we know the ending, we watch to see how and why it happens, and every hopeful moment is shadowed by dramatic irony.',
    not: {
      'It introduces the actors': 'The Prologue introduces the story and the feud, not the actors.',
      'It summarises the play for latecomers':
        'It does outline the story, but it comes at the very start, so latecomers would miss it. Its job is to reveal the ending.',
      'It was added by a different writer':
        "It is Shakespeare's own writing. It is even a sonnet, the form he also uses for the lovers' first conversation.",
    },
    more: "The Prologue presents the lovers as star-cross'd and their love as death-mark'd, so fate seems to rule the play from its first lines.",
    tip: "Explain the effect of knowing the ending: the audience's knowledge turns every hopeful scene into a painful one.",
  },
  'In "Ozymandias", how does the use of a second-hand account affect the poem\'s message about power?':
    {
      why: "The poem's speaker repeats what a traveller told him, about a statue a sculptor made of a king. Ozymandias reaches us only through layers of other people's words, so even his story has shrunk, just like his power.",
      not: {
        'It makes the poem unreliable':
          'The layers do put distance between us and the king, but the point is not that the story is false. Even his fame survives only as a report.',
        'Shelley was too lazy to visit the desert':
          "The second-hand frame is a deliberate choice. It makes the king's glory seem distant and faded.",
        'It makes the poem longer':
          "A sonnet always has fourteen lines. The frame changes the poem's meaning, not its length.",
      },
      more: "The opening line, 'I met a traveller from an antique land', puts the king at three removes: speaker, traveller, sculptor. The poem itself becomes what keeps his memory alive.",
      tip: 'Comment on narrative voice: explain how the layered telling supports the theme of power fading over time.',
    },
  'How does Bronte use Bertha Mason in Jane Eyre as a Gothic double for Jane?': {
    why: "Bertha, Rochester's first wife, is locked in the attic and bursts out in violent rage. Many critics read her as Jane's dark double: the anger Jane felt as a child, which she must control to be accepted.",
    not: {
      "Bertha is Jane's sister":
        "They are not related. Bertha is Rochester's secret wife, hidden at Thornfield until the wedding is stopped.",
      'Bertha is purely a plot device for the fire':
        'She does set Thornfield on fire, but she also carries symbolic meaning about passion and confinement.',
      'They look identical':
        'They look very different. Bertha is a big woman, almost as tall as Rochester; Jane is small and plain.',
    },
    more: 'This reading comes from the critics Gilbert and Gubar, whose book The Madwoman in the Attic (1979) is named after Bertha. Both women are locked away: Jane in the red-room, Bertha in the attic.',
    tip: 'Use a critical reading to extend your point, but always tie it back to evidence in the novel.',
  },
  'In "London" by Blake, how does the repetition of "every" create meaning?': {
    why: "Blake repeats 'every' again and again, as in 'In every cry of every man'. The word leaves no exceptions: everyone the speaker meets is suffering, so the oppression feels total and inescapable.",
    not: {
      'Blake could not think of other words':
        'The repetition is deliberate. Its insistence is the point.',
      'It creates a cheerful rhythm':
        'The poem is bleak and angry. The repeated word builds a heavy, relentless rhythm, not a cheerful one.',
      'It is a printing error': "The repetition is intentional, a key part of the poem's meaning.",
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
        'Duffy has never been to a war zone':
          'Duffy was inspired by her friendship with war photographers. The poem is about their work, not about her own travels.',
      },
      more: "Readers of the Sunday paper feel sad for a moment, then forget. Duffy suggests the photographer's work cannot make comfortable people care for long.",
      tip: "Comment on juxtaposition: explain how placing calm England beside war zones creates the poem's criticism of public indifference.",
    },
  'How does Stevenson use Mr Utterson as a narrative device in Jekyll and Hyde?': {
    why: 'We follow Utterson, a calm, rational lawyer, as he slowly uncovers the truth. Because he does not guess it, nor do we, so the final revelation that Jekyll and Hyde are one man is all the more shocking.',
    not: {
      'Utterson is the villain':
        'Utterson is a loyal friend trying to protect Jekyll. Hyde is the villain.',
      'Utterson is unimportant':
        'Most of the story is seen through his investigation. Without him there would be no mystery to follow.',
      'He provides comic relief':
        'Utterson is serious and reserved. He brings suspense, not comedy.',
    },
    more: "Utterson is described as 'lean, long, dusty, dreary and yet somehow lovable'. His reserved, respectable nature reflects Victorian gentlemen who prefer not to ask awkward questions.",
    tip: "Discuss narrative structure: the truth is held back until Lanyon's and Jekyll's own accounts, which keeps the reader in suspense.",
  },
  'In "The Émigrée" by Rumens, how does the poet present memory as resistance?': {
    why: 'The speaker left her city as a child but keeps a bright, sunlit memory of it, even though news suggests war and tyranny have reached it. Holding on to that memory is a way of refusing to let the city, or herself, be erased.',
    not: {
      'The speaker has a bad memory':
        'Her memory is vivid and strong. The point is how fiercely she keeps it.',
      'The speaker has returned to live in the city':
        'She cannot go back. The poem shows her keeping the city alive in memory instead.',
      'The poem is about forgetting':
        'The poem is about remembering, and refusing to let memory be taken away.',
    },
    more: 'An émigrée is a woman who has left her country, often for political reasons. Rumens leaves the city unnamed, so it could stand for many places people have had to flee.',
    tip: 'Link memory to power: explain how a private memory can resist a powerful state.',
  },
  "In Frankenstein, how does Shelley use the Arctic setting to frame the novel's themes?": {
    why: "The novel begins and ends in the frozen Arctic, where Walton is pushing towards the North Pole. The cold, empty ice mirrors Victor's isolation and shows where reckless ambition leads.",
    not: {
      'Shelley liked cold weather':
        "The setting is chosen for its meaning, not the writer's taste in weather.",
      'It provides a holiday backdrop':
        "The Arctic is dangerous and deadly: Walton's ship is trapped in ice and Victor dies there. It is no holiday.",
      'The Arctic was a popular Victorian destination':
        "The novel was published in 1818, before Victoria's reign. The Arctic was a place of risky exploration, not tourism.",
    },
    more: "Walton's quest for glory mirrors Victor's. In the end his crew force him to turn back; Walton calls it cowardice, but readers may see an escape from the fate that destroyed Victor.",
    tip: 'Use the frame setting to discuss ambition: compare Walton and Victor, and explain what the ice symbolises.',
  },
  'In Great Expectations, how does Dickens use Estella to explore the theme of class?': {
    why: "Miss Havisham raises Estella to break men's hearts, and Estella treats Pip with cold scorn for being common, mocking his coarse hands and thick boots. Her lessons in cruelty make Pip ashamed of his class.",
    not: {
      'Estella is middle class':
        'Estella is raised as an upper-class lady by Miss Havisham. That is why she looks down on Pip.',
      'Estella is kind to Pip':
        'Estella is cold and scornful to Pip. Her cruelty is what makes him ashamed of his background.',
      'She represents the working class':
        'Her birth parents turn out to be a convict and a servant, but she is raised as a lady and scorns Pip for being common.',
    },
    more: "The twist that Estella is Magwitch's daughter shows that class is an accident of upbringing, not a sign of worth. The lady Pip worships was born to the lowest class.",
    tip: "Use Estella's hidden parentage to show how Dickens questions the class system.",
  },
  'How might a feminist critic interpret Lady Macbeth\'s "unsex me here" speech?': {
    why: 'Lady Macbeth asks spirits to unsex her and fill her with cruelty. A feminist reading says her society links womanhood with pity and weakness, so to seize power she believes she must reject her femininity.',
    not: {
      'She wants to be a man':
        'She does not ask to become a man. She asks to lose the qualities her society calls feminine, such as pity, so that nothing stops her.',
      'She is confused about her identity':
        'She is clear and determined here. The speech is a deliberate request, not a sign of confusion.',
      'She asks to become gentler':
        'She asks for the opposite: to be filled with cruelty, and for her milk to be turned to gall.',
    },
    more: 'Her plan works only for a time. Her later sleepwalking suggests the pity she tried to destroy returns as guilt.',
    tip: 'When you use a critical lens, name it and apply it: a feminist reading lets you discuss gender, power and context together.',
  },
  'To what extent does Orwell present revolution as inevitably corrupted in "Animal Farm"?': {
    why: 'The animals overthrow Mr Jones, but the pigs gradually take his place, change the rules and end up like the humans. The story comes full circle, suggesting that power corrupts those who seize it, as in the Soviet Union under Stalin.',
    not: {
      'Revolution always works perfectly':
        'The revolution goes badly wrong: the animals end up as hungry and overworked as before.',
      'Only animal revolutions fail':
        "The animals stand for people. Orwell's fable is about human revolutions, especially the Russian one.",
      'Orwell supports the revolution throughout':
        'Orwell shows the revolution being betrayed. He criticises how its ideals are corrupted.',
    },
    more: "Orwell was a socialist, but he opposed Stalin's dictatorship. He did not reject the idea of equality; he warned about leaders who exploit it.",
    tip: "For 'to what extent' questions, weigh both sides: is corruption inevitable, or caused by particular leaders such as Napoleon and by the animals' silence?",
  },
  'How does Stevenson use the novella form in "Jekyll and Hyde" to explore duality?': {
    why: "The story is pieced together from different narrators and documents: Enfield's tale, Utterson's search, Lanyon's letter and Jekyll's own statement. Like Jekyll's split self, the truth comes in fragments that only fit together at the end.",
    not: {
      'Short books are easier':
        'Its shortness is not the point. The question is how its structure mirrors a divided identity.',
      'He ran out of ideas':
        'The structure is carefully planned, holding back the truth until the final chapters.',
      'Novellas were popular at the time':
        'Short, cheap thrillers were popular in 1886, but popularity does not explain how the form explores duality.',
    },
    more: "Each document reveals more, so the reader, like Utterson, discovers the truth step by step. The final statement, in Jekyll's own voice, splits even the pronouns: he writes of Hyde as both 'he' and 'I'.",
    tip: 'Discuss structure as well as language: explain how the fragmented, multi-voiced narrative mirrors the theme of duality.',
  },
  'Evaluate how Priestley uses dramatic irony when the characters dismiss the Inspector.': {
    why: "In Act 3 the older Birlings decide the Inspector was a hoax and relax. The first audiences, watching in 1945 and 1946, knew his warning had come true in two world wars, so the Birlings' complacency condemns them.",
    not: {
      'It makes the audience side with the Birlings':
        'Dramatic irony does the opposite: the audience knows more than the Birlings and sees through their self-satisfaction.',
      'It makes the play confusing':
        'Dramatic irony makes things clearer for the audience, who know more than the characters.',
      'It shows the Inspector was wrong':
        'The irony shows he was right. His warning about what would happen if people did not learn came true.',
    },
    more: 'Earlier, Mr Birling confidently tells the family there will be no war and calls the Titanic unsinkable. Each mistake makes his later dismissal of the Inspector look even more foolish.',
    tip: "Link dramatic irony to purpose: Priestley wants his post-war audience to reject the Birlings' selfish attitudes and build a fairer society.",
  },
  'How does Browning use the dramatic monologue form in "My Last Duchess" to expose the Duke\'s character?':
    {
      why: 'Only the Duke speaks, and he means to impress his listener. But in boasting about the portrait and his late wife, he reveals jealousy, pride and a chilling hint of murder, without realising how he sounds.',
      not: {
        'The Duke is honest and self-aware':
          'He is neither. He does not notice that his words expose him as jealous and controlling.',
        'The monologue is addressed to the audience':
          'He speaks to a silent listener inside the poem: the envoy of a Count whose daughter he plans to marry.',
        'Browning had no other characters to include':
          'The single voice is a deliberate choice. Letting the Duke speak unchallenged is how Browning exposes him.',
      },
      more: 'A dramatic monologue is a poem spoken by one character to a silent listener. Browning made the form famous, and it lets readers judge a speaker by what he gives away.',
      tip: 'Analyse what the Duke says and what he reveals without meaning to. That gap is the key to the poem.',
    },
  'Evaluate how Owen subverts traditional war poetry in "Dulce et Decorum Est".': {
    why: "Traditional war poems often praised dying for one's country. Owen's title quotes that ideal, but the poem shows exhausted men and a soldier choking on gas, and ends by calling the Latin motto 'The old Lie'.",
    not: {
      'Owen celebrates war': 'Owen exposes the horror of war. He does not celebrate it.',
      'Owen follows traditional conventions':
        'He rejects the patriotic conventions of earlier war poetry, replacing glory with graphic suffering.',
      'The Latin title is sincere':
        'The title is ironic. Owen quotes the motto only to show it is a lie.',
    },
    more: "The full motto, from the Roman poet Horace, means it is sweet and fitting to die for one's country. Owen was killed in action in November 1918, a week before the Armistice.",
    tip: "Evaluate by contrast: show how the graphic imagery undermines the title's patriotic claim, and say who Owen is attacking.",
  },
  "How does Shakespeare use Juliet's soliloquies to challenge patriarchal expectations in Romeo and Juliet?":
    {
      why: "Juliet's speeches show her own desires and decisions. She longs openly for her wedding night and later chooses to risk the Friar's potion, while her father treats her as his to give away in marriage.",
      not: {
        'Juliet obeys her father throughout':
          'She defies him: she secretly marries Romeo and refuses to marry Paris.',
        "Juliet's speeches are unimportant":
          'Her speeches reveal her inner life and her choices, which drive the tragedy.',
        'Shakespeare did not give women soliloquies':
          'Juliet has several soliloquies, including the potion speech in Act 4.',
      },
      more: "When Juliet refuses Paris, Capulet says 'And you be mine, I'll give you to my friend', and threatens to throw her out. Her soliloquies show a mind he never sees.",
      tip: "Use context: in Shakespeare's time a daughter was expected to obey her father in marriage, which makes Juliet's choices bold.",
    },
  "In Frankenstein, evaluate how Shelley uses the Creature's eloquence to challenge reader expectations.":
    {
      why: 'The Creature tells his story in moving, articulate language, describing loneliness and rejection. Readers expect a monster from his appearance but meet a feeling, thinking being, and start to ask whether Victor is the real monster.',
      not: {
        'The Creature cannot speak':
          'He speaks fluently. He learns language by secretly watching the De Lacey family.',
        'The Creature is simply copying Victor':
          'He learns from the De Laceys and from books, and his feelings and arguments are his own.',
        'His eloquence makes him seem less human':
          'It does the opposite: his eloquence makes him seem more human, even more humane than Victor.',
      },
      more: "He educates himself with Paradise Lost, Plutarch's Lives and The Sorrows of Werter, and tells Victor 'I am malicious because I am miserable.' Shelley lets him argue his own case.",
      tip: 'Evaluate by weighing his eloquence against his crimes: does understanding him excuse him, or make his choices more disturbing?',
    },
  'How does Agard use form and structure in "Checking Out Me History" to mirror his argument?': {
    why: "Agard alternates two kinds of stanza. The British history he was taught comes in chanting, rhyming stanzas mixed with nursery rhymes. Caribbean heroes such as Toussaint L'Ouverture, Nanny and Mary Seacole get stanzas of their own, full of reverent imagery.",
    not: {
      'The poem follows a strict sonnet form':
        'It is not a sonnet. It has many stanzas of different lengths.',
      'The structure is random':
        'The structure is deliberate: two kinds of stanza alternate to set two histories against each other.',
      'Agard uses prose, not poetry':
        'It is a poem, with line breaks, rhyme and rhythm, written to be performed aloud.',
    },
    more: "The whole poem is written in Caribbean English, not just the heroes' stanzas. The contrast is in form and tone: mocking chant for the history imposed on him, reverence for the history he reclaims.",
    tip: "When writing about structure, describe the pattern, then explain what it shows: the poem's shape enacts the speaker's argument.",
  },
  'Evaluate how Dickens uses the Ghost of Christmas Yet to Come as a departure from the other spirits in "A Christmas Carol".':
    {
      why: 'The first two spirits talk to Scrooge, but the last never speaks. Silent and hooded, it only points, showing him his own lonely death. Its silence makes the future, and death, terrifying, and fear finally changes him.',
      not: {
        'This ghost is friendlier':
          'It is the most frightening spirit. The Ghost of Christmas Present is the jolly, friendly one.',
        'The ghost speaks throughout':
          'It never speaks. When Scrooge begs it to speak, it gives him no reply and points onward.',
        'Dickens ran out of ideas for dialogue':
          'The silence is deliberate. It makes the future feel unknowable and death final.',
      },
      more: 'The ghost resembles traditional images of Death, a dark hooded figure. Its silence forces Scrooge to work out the meaning of what he sees for himself.',
      tip: "Compare the three spirits in a sentence or two, then focus on how the last one's difference creates fear and urgency.",
    },
  'How does Hughes use irregular rhythm in "Bayonet Charge" to convey the experience of combat?': {
    why: 'Hughes avoids a steady beat. Lines of uneven length run into each other, then stop suddenly, so the rhythm stumbles and lurches like a terrified soldier charging across rough ground.',
    not: {
      'Hughes was a bad poet':
        'Hughes is a celebrated poet, later Poet Laureate. The irregular rhythm is a deliberate choice.',
      'The rhythm is perfectly regular':
        'The rhythm is deliberately irregular, to mirror chaos and panic.',
      'Hughes used a metronome':
        'A metronome keeps a steady beat. Hughes does the opposite, so the rhythm feels unstable.',
    },
    more: 'The poem opens in the middle of the action, as if the soldier has just woken into the charge. The form puts the reader inside his panic rather than describing it calmly.',
    tip: "Do not just say the rhythm is irregular. Link specific features, enjambment and sudden pauses, to the soldier's experience.",
  },
  'In Great Expectations, evaluate how Dickens uses first-person retrospective narration to explore self-deception.':
    {
      why: "An older Pip tells the story of his younger self. He can see the mistakes he made, so the reader sees young Pip's snobbery and self-deception more clearly than young Pip does, and judges the society that taught him.",
      not: {
        'Pip tells the truth throughout':
          'Young Pip lies. After his first visit to Satis House he invents a black velvet coach and dogs fighting over veal-cutlets.',
        'The narration is third person':
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
      'The poem is about recycling':
        'The poem is not about reusing paper. Paper is a symbol for the structures and records of human life.',
      'Paper represents permanence':
        'The poem suggests the opposite: things that seem permanent, like borders and buildings, are fragile.',
      'Dharker is describing origami':
        'There is no paper folding in the poem. Paper is a metaphor for life, power and identity.',
    },
    more: 'Dharker suggests that fragility can also be a strength: thin paper, which light can pass through, might change the way we live and build.',
    tip: 'Follow the extended metaphor stanza by stanza, showing how its meaning grows towards the final shift from paper to skin.',
  },
  'In "Poppies" by Weir, how does the domestic imagery create a powerful anti-war statement?': {
    why: "Weir focuses on tiny, tender acts: a mother pins a poppy to her son's blazer and smooths his shirt collar before he leaves. These private details show grief that public ceremonies of remembrance cannot express.",
    not: {
      'The poem is about gardening':
        'There is no gardening. The poppies are symbols of remembrance.',
      'The imagery is purely decorative':
        "The domestic details carry the poem's emotion and its anti-war meaning.",
      'Weir avoids any mention of war':
        'War is present: the poem mentions war graves and a war memorial, and military words creep into the domestic scene.',
    },
    more: "Weir wrote the poem in 2009, when the Poet Laureate, Carol Ann Duffy, asked poets to write about modern conflict. It never says plainly whether the son has died, which deepens the mother's uncertainty.",
    tip: "Contrast public and private: explain how the poem moves from remembrance rituals to one mother's personal loss.",
  },
  "How does Bronte use the character of St John Rivers in Jane Eyre to test Jane's values?": {
    why: 'St John asks Jane to marry him and serve as a missionary in India, out of duty, not love. Refusing, she sees that marrying him would mean losing herself, and she holds to her need for love between equals.',
    not: {
      'St John is the ideal husband':
        "He is handsome and devout, but cold. Marrying him would crush Jane's feelings, so he is not ideal for her.",
      'Jane immediately accepts his proposal':
        'She refuses to marry him. She offers to go to India as his helper, but not as his wife.',
      'St John is a minor character':
        'He dominates the last part of the novel, which even ends with his words.',
    },
    more: "Jane tells him 'I scorn your idea of love', and reflects that if she joins him she will abandon half herself. St John's coldness contrasts with Rochester's passion.",
    tip: "Compare Jane's suitors: Rochester first offers passion while hiding a wife; St John offers duty without love. Jane needs love and equality together.",
  },
  'How does Shakespeare present the supernatural in Macbeth as both a dramatic and thematic device?':
    {
      why: "The witches' prophecies bring Macbeth's hidden ambition into the open, and visions such as the dagger and Banquo's ghost make his guilt visible on stage. They raise a key question: is Macbeth driven by fate or by his own choices?",
      not: {
        'The witches are entertaining':
          "They create fear and suspense, and they also shape the play's themes. The question asks for more than entertainment.",
        'Ghosts were popular in plays':
          "Banquo's ghost is one supernatural moment, but its popularity does not explain how Shakespeare uses the supernatural.",
        'Shakespeare believed in witches':
          "Nobody knows Shakespeare's beliefs. The question is how the play uses the supernatural.",
      },
      more: "King James I, who watched Shakespeare's company, wrote a book on witchcraft, Daemonologie (1597). A Jacobean audience took witches seriously as agents of evil.",
      tip: "For fate versus free will, use the witches' prophecies and Macbeth's own decisions as evidence on both sides.",
    },
  'Critically evaluate whether Golding presents civilisation as merely a veneer in "Lord of the Flies".':
    {
      why: "Away from adults, the boys slide quickly from meetings and rules to painted faces, hunting and murder, which suggests civilisation is thin. But Ralph, Piggy and Simon keep trying to do right, so Golding's view is not wholly bleak.",
      not: {
        'Civilisation is always stable':
          'Civilisation collapses on the island remarkably quickly. Golding shows how fragile it is.',
        'All the boys are savage from the start':
          'They begin with meetings, rules and a signal fire. Savagery grows over time.',
        'The island causes madness':
          'The island is beautiful at first. Golding suggests the evil comes from inside the boys, not from the place.',
      },
      more: 'The ending adds irony: the naval officer who rescues the boys is himself fighting a war. The adult world is no more civilised than the island.',
      tip: "For 'critically evaluate', give a counter-argument: name the characters who resist savagery and explain what they suggest.",
    },
  'How does Steinbeck use the American Dream as both a motivating force and a destructive illusion?':
    {
      why: "George and Lennie's dream of their own small farm keeps them going and draws in Candy and briefly Crooks. But poor migrant workers in the Depression could never really reach it, and when Lennie kills Curley's wife, the dream dies.",
      not: {
        'The dream always comes true':
          "Nobody's dream comes true in the novella. Its failure is the tragedy.",
        'Only George believes in it':
          'Lennie loves to hear it, Candy offers his savings, and even Crooks asks to join. Many share it.',
        'The dream is about moving to the city':
          'The dream is to own land: a small farm of their own, not life in the city.',
      },
      more: "Curley's wife has a dream too, of becoming a film star. Steinbeck shows dream after dream failing, suggesting the American Dream was out of reach for the poor and powerless.",
      tip: 'Link the dream to context: the Great Depression of the 1930s left millions poor and jobless, which made such dreams both precious and hopeless.',
    },
  'To what extent is "A Christmas Carol" a radical text in its Victorian context?': {
    why: 'Dickens does not demand new laws; he asks rich individuals to change, which is a cautious message. But his vivid scenes of poverty and his narrator talking straight to the reader made comfortable Victorians face the poor.',
    not: {
      'It is just a ghost story':
        "It is a ghost story with a social purpose. The ghosts deliver Dickens's message about the poor.",
      'Dickens was not political':
        'Dickens was deeply political and campaigned against child poverty and harsh laws on the poor.',
      'It only entertains children':
        'It was written for adults too, especially wealthy readers whom Dickens wanted to persuade.',
    },
    more: "Dickens's narrator speaks directly to the reader, standing 'in the spirit at your elbow'. That closeness makes readers feel personally involved in Scrooge's lesson.",
    tip: "For 'to what extent', argue both ways: radical in what it shows, cautious in what it asks for.",
  },
  'Evaluate how Shakespeare uses the structure of the tragedy to present Macbeth as both perpetrator and victim.':
    {
      why: 'Across five acts Macbeth rises to the crown and falls to death, driven by a fatal flaw, his ambition. He commits terrible crimes, yet his soliloquies let us hear his fear and despair, so we condemn him and pity him at once.',
      not: {
        'Macbeth is purely evil':
          'His soliloquies show conscience, fear and regret. He is a tragic hero, not a simple villain.',
        'Shakespeare did not plan the structure':
          'The rise and fall pattern of tragedy is deliberate and carefully built.',
        'Macbeth is entirely a victim':
          'The witches only predict; Macbeth chooses to murder. He is responsible for his crimes.',
      },
      more: "Hamartia is Aristotle's term for the error or flaw that brings a tragic hero down. In Act 5, Macbeth's 'Tomorrow, and tomorrow, and tomorrow' speech shows a man who has lost all meaning, which invites pity.",
      tip: 'Balance your argument: use one soliloquy to show Macbeth as a victim of his own mind, and one crime to show him as perpetrator.',
    },
  'How does Shelley use the sonnet form ironically in "Ozymandias" to reinforce the poem\'s message?':
    {
      why: "Sonnets often claim to make their subject live for ever. Shelley uses the form to show a king's monument crumbling into sand, and his rhyme scheme refuses either standard sonnet pattern, as if order itself is breaking down.",
      not: {
        'Shelley uses the sonnet because it is easy':
          'The sonnet is a demanding form. Shelley chose it for the ironic contrast with his subject.',
        'The sonnet form has no significance':
          'The form matters: its link with lasting fame is turned against the boastful king.',
        'Shelley did not choose the form deliberately':
          'He bends the form on purpose: the rhyme scheme follows neither usual sonnet pattern, which shows a deliberate choice.',
      },
      more: 'Its rhyme scheme, ABABACDCEDEFEF, matches neither the Petrarchan nor the Shakespearean pattern. Shelley wrote it in 1817, in competition with his friend Horace Smith.',
      tip: 'Link form to message: explain how a form linked with permanence becomes ironic in a poem about decay.',
    },
  'Critically evaluate how Priestley uses time in "An Inspector Calls" to construct his political argument.':
    {
      why: 'The play is set in 1912 but was written in 1945. The audience knew that two world wars followed, so every confident claim by the Birlings looks foolish, and the final phone call warns that the lesson must be learned again.',
      not: {
        'The play is set in 1945':
          'It is set in 1912. Priestley wrote it in 1945, and that gap is what creates the irony.',
        'Time is irrelevant to the play':
          'Time is central: the gap between 1912 and 1945 shapes how the audience judges the Birlings.',
        'Priestley chose 1912 at random':
          '1912 was chosen with care: just before the Titanic sank and the First World War, a time of misplaced confidence.',
      },
      more: 'The action runs continuously, one evening without a break, which builds pressure. The ending begins the story again, suggesting that people who refuse to learn are condemned to repeat it.',
      tip: "Show how dramatic irony and the cyclical ending work together to deliver Priestley's warning to his post-war audience.",
    },
  'To what extent does Shelley present Victor Frankenstein as a critique of Romantic individualism in Frankenstein?':
    {
      why: "Victor works alone in secret, chasing glory by creating life. The novel's subtitle, The Modern Prometheus, links him to the mythical figure who defied the gods. His ambition destroys his family and friends, warning against genius without responsibility.",
      not: {
        'Victor is purely heroic': 'He is a flawed overreacher whose choices cause many deaths.',
        "Shelley supported Victor's experiments":
          'The novel warns against his experiments by showing their terrible results.',
        'Victor works openly as part of a team':
          'He works alone and in secret, in a solitary room at the top of the house where he lodges, and tells no one.',
      },
      more: 'Romantic writers celebrated the lone genius and the power of the individual imagination. Shelley shows the dark side of that ideal: Victor abandons his creation and avoids responsibility.',
      tip: "For 'to what extent', consider the other side: Victor also loves nature, and the novel suggests that society's cruelty shapes the Creature.",
    },
  'How does Owen use the gap between the title and the content of "Dulce et Decorum Est" to create a sustained rhetorical argument?':
    {
      why: "The title promises the old idea that dying for your country is sweet and fitting. The poem then gives graphic evidence against it, and ends by turning on the reader, calling the motto 'The old Lie'.",
      not: {
        'The title is simply a label': 'The title is ironic, and the whole poem argues against it.',
        'Owen agrees with the Latin phrase': 'He calls the phrase a lie.',
        'The title was chosen by the publisher':
          "Owen chose it. The poem's last lines quote the motto in full.",
      },
      more: "The final stanza addresses 'My friend', anyone who tells eager children that war is glorious. Owen first dedicated the poem to Jessie Pope, who wrote patriotic recruiting poems.",
      tip: "Treat the poem as an argument: explain how each stanza builds the case against the title's claim.",
    },
  'Evaluate how Bronte uses the Gothic genre in Jane Eyre both to satisfy and to critique Victorian readerly expectations.':
    {
      why: "Brontë gives readers Gothic thrills: a mysterious house, a brooding hero, a madwoman in the attic. But she uses them to explore Jane's mind and the confinement of women, so the Gothic becomes a way to criticise society.",
      not: {
        'Bronte follows Gothic conventions without deviation':
          'She adapts the conventions: her heroine is plain, rational and independent, not a fainting victim.',
        'The Gothic elements are purely decorative':
          'The Gothic elements carry meaning, especially about confinement, passion and identity.',
        'Jane Eyre is not a Gothic novel':
          "It has many Gothic features, such as Thornfield's secret and the red-room's terror, mixed with realism and romance.",
      },
      more: "Rochester is a Byronic hero, brooding and passionate with a dark secret. Bertha's confinement in the attic can be read as an image of what happens to women who will not conform.",
      tip: 'When you discuss genre, show what the writer does with its conventions, not just which ones are present.',
    },
  'How does Browning construct dramatic irony through the Duke\'s self-presentation in "My Last Duchess"?':
    {
      why: 'The Duke wants to seem a cultured, generous host, inviting his guest to sit and look at the portrait. But he reveals jealousy and a hint of murder. The reader understands far more than he means to say, which is dramatic irony.',
      not: {
        'The Duke is fully self-aware':
          'He does not realise what his words reveal. That blindness creates the irony.',
        'There is no irony in the poem':
          'The irony is central: the gap between what he says and what we understand.',
        'The Duke is presented sympathetically':
          'He is presented as chilling. His pride in his nine-hundred-years-old name makes his cruelty more disturbing.',
      },
      more: 'The poem ends with the Duke pointing out a bronze of Neptune taming a sea-horse. It hints at how he sees himself, as a tamer and owner of beautiful things.',
      tip: "Pick moments where the Duke's polite words reveal his cruelty, and explain how the reader's understanding differs from his.",
    },
  'Critically assess how Dickens uses the bildungsroman structure of Great Expectations to interrogate the Victorian myth of self-improvement.':
    {
      why: "A bildungsroman follows a young person growing up. Victorians believed hard work could lift anyone up, but Pip's rise is paid for by a convict and makes him a snob. Only when he loses his fortune does he grow morally.",
      not: {
        'Pip earns his fortune through hard work':
          'His fortune comes from Magwitch. Pip does nothing to earn it, which undermines the myth of self-improvement.',
        'The novel has no structure':
          "The novel is carefully structured in three stages of Pip's expectations.",
        "Dickens endorses Pip's snobbery":
          "Dickens criticises Pip's snobbery. Joe, a humble blacksmith, is the novel's moral heart.",
      },
      more: "Samuel Smiles's Self-Help (1859) praised rising through effort. Dickens, writing soon after, suggests that becoming a gentleman can make a person worse, not better.",
      tip: "Use context to frame your argument, then show how Pip's journey questions the values his society admired.",
    },
  'How does Duffy use the metaphor of developing photographs in "War Photographer" to explore the ethics of representing suffering?':
    {
      why: "In the darkroom an image of a dead man slowly appears, as suffering surfaces in the photographer's mind. Then the editor chooses only a few pictures from many for a Sunday supplement, showing how the media shrinks suffering into something easy to consume.",
      not: {
        'The poem is about photography techniques':
          'The darkroom process is a metaphor for how suffering is revealed, remembered and forgotten.',
        'Duffy celebrates photojournalism':
          'Duffy respects the photographer, but she questions whether his images make comfortable readers care for long.',
        'The darkroom is purely a setting':
          "The darkroom is compared to a church, and its process carries the poem's meaning.",
      },
      more: 'Readers of the supplement feel a brief sadness and then return to their comfortable Sunday. The photographer cannot forget, but his audience easily does.',
      tip: 'Explain the extended metaphor and its ethical point: who looks at suffering, who chooses what we see, and who forgets.',
    },
  'Evaluate how Shakespeare uses the Friar in Romeo and Juliet as both a figure of hope and a structural instrument of tragedy.':
    {
      why: 'Friar Lawrence marries the lovers hoping to end the feud, and gives Juliet the sleeping potion to save her. But his letter to Romeo never arrives, and the plan ends in death. Good intentions cannot defeat the hatred around them.',
      not: {
        'The Friar is purely a villain':
          'He means well. His plans fail, but he is trying to help the lovers and end the feud.',
        'The Friar is irrelevant to the plot':
          'He drives the plot: the marriage, the potion and the failed letter all come from him.',
        'Shakespeare presents the Friar as infallible':
          'His plans fail, and he even flees the tomb. He warns that hasty people stumble, yet acts hastily himself.',
      },
      more: 'He hopes the marriage will "turn your households\' rancour to pure love". The gap between that hope and the ending shows how fragile goodwill is in Verona.',
      tip: 'Evaluate his responsibility: is he a wise guide, or a meddler whose secret plans make the tragedy worse?',
    },
  'How does Blake use the concept of "chartered" in "London" to construct a critique of institutional power?':
    {
      why: "A charter is a legal grant of rights, often to companies and corporations. By calling even the streets and the Thames 'chartered', Blake suggests that everything in London, land, river and people, is owned and controlled for profit.",
      not: {
        'Chartered simply means mapped':
          "The word may also suggest mapping, but 'simply' misses its main sense: ownership and control by those in power.",
        'Blake is describing a pleasant city':
          'Blake describes misery and oppression everywhere he walks.',
        'The word has no special significance':
          "He repeats it in the first two lines, so it frames the whole poem's attack on power.",
      },
      more: "Blake's contemporary, the radical Thomas Paine, argued that charters take rights away from the many. Blake wrote in the 1790s, a time of revolution in France and fear of unrest in Britain.",
      tip: 'Explore more than one meaning of a key word. Showing layers of meaning is a mark of a top-band answer.',
    },
  'To what extent does Armitage present the speaker in "Remains" as trapped between two selves?': {
    why: 'The speaker tells the story like a casual anecdote, the voice of a soldier who must shrug off killing. By the end he is haunted, unable to forget. The clash suggests two selves he cannot reconcile.',
    not: {
      'The speaker is at peace': 'He is tormented by memories of the killing.',
      'The speaker has fully recovered':
        'He is not recovered. Not even drink and drugs can drive the memory out.',
      'Armitage presents a single coherent voice':
        'There is one speaker, but his voice changes from casual to haunted, which shows the split.',
    },
    more: "The poem comes from Armitage's interviews with real soldiers. Its casual opening makes the later haunting more shocking.",
    tip: "For 'to what extent', consider whether the speaker is trapped for ever, or whether telling the story is a first step towards facing it.",
  },
  '"Her smile was like sunshine." What technique is used?': {
    why: "Her smile is compared to sunshine using the word 'like'. A comparison with 'like' or 'as' is a simile.",
    not: {
      Metaphor: "A metaphor would say her smile was sunshine. The word 'like' makes it a simile.",
      Personification:
        'Personification gives human qualities to non-human things. Here a human smile is compared to sunshine, the other way round.',
      Hyperbole:
        'Hyperbole is deliberate exaggeration. Comparing a smile to sunshine describes its warmth without exaggerating, so it is a simile.',
    },
    more: "Sunshine is warm and bright and lifts people's spirits, so the simile suggests her smile is cheerful and makes others feel happy.",
    tip: "Name the device, then unpack the image: 'The simile suggests her smile brings warmth and happiness.'",
  },
  'What does an ellipsis (...) at the end of a sentence usually suggest?': {
    why: 'An ellipsis, three dots, at the end of a sentence shows something unfinished. It can build suspense, show a thought trailing off, or hint at something the speaker cannot or will not say.',
    not: {
      'The writer forgot to finish':
        'Writers use an ellipsis on purpose, to leave something unsaid.',
      'A happy ending':
        'An ellipsis often creates uncertainty or suspense, the opposite of a neat, happy ending.',
      'A spelling mistake': 'An ellipsis is punctuation, not a spelling error.',
    },
    more: 'An ellipsis can also show where words have been left out of a quotation. In stories, ending a chapter with one creates a cliffhanger.',
    tip: 'In your own writing, use an ellipsis sparingly, at a moment of tension or hesitation, so it keeps its effect.',
  },
  '"The thunder grumbled in the distance." What technique is used?': {
    why: 'Grumbling is something people do when they are cross. Giving the thunder this human sound is personification.',
    not: {
      Simile: "There is no comparison using 'like' or 'as'.",
      Alliteration:
        "Alliteration repeats the first sound of nearby words. 'Thunder', 'grumbled' and 'distance' all begin differently.",
      Repetition:
        'Repetition uses the same word or phrase more than once. No word is repeated here.',
    },
    more: "'Grumbled' makes the thunder sound grumpy and threatening, far off but coming closer. It can hint that trouble is on the way.",
    tip: "Explain what the human quality suggests: 'Personifying the thunder as grumbling creates a sense of distant threat.'",
  },
  'If a character is described as having "fiery eyes", what does this suggest?': {
    why: "Fire is hot, bright and dangerous, so 'fiery eyes' suggests strong feelings blazing out: usually anger, sometimes passion or determination.",
    not: {
      'Their eyes are on fire':
        'The phrase is figurative. Nothing is really burning; the fire describes their feelings.',
      'They need glasses': 'The phrase describes emotion shown in the eyes, not eyesight.',
      'They are tired': "Tired eyes are dull or heavy. 'Fiery' suggests energy and strong emotion.",
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
  '"Alone, alone, all all alone." What technique is used?': {
    why: "'Alone' is repeated three times and 'all' twice. Repeating words like this stresses how completely isolated the speaker feels.",
    not: {
      Simile: "There is no comparison using 'like' or 'as'.",
      Metaphor:
        "Nothing is described as being something else. The words state the speaker's loneliness directly.",
      Onomatopoeia: 'No word imitates a sound.',
    },
    more: "The line comes from Coleridge's The Rime of the Ancient Mariner (1798), where the mariner is left alive on a ship of dead men in the middle of the ocean. The repetition makes his loneliness feel endless.",
    tip: 'Say what the repetition emphasises and how it makes the reader feel: here, an overwhelming sense of isolation.',
  },
  'What does it mean if a writer describes a character\'s hands as "trembling"?': {
    why: 'Hands tremble when someone is afraid, nervous or overwhelmed by emotion. Writers use the detail to show feelings without stating them.',
    not: {
      'They are bored':
        'Boredom makes people restless or sleepy. Trembling shows fear, nerves or strong emotion.',
      'They are strong': 'Trembling suggests weakness or fear, not strength.',
      'They are waving hello': 'Trembling is a small, uncontrolled shaking, not a deliberate wave.',
    },
    more: "This is 'show, not tell': instead of writing 'she was scared', a writer shows her trembling hands and lets the reader work it out.",
    tip: 'In creative writing, show emotion through body language, such as trembling hands, a dry mouth or a racing heart.',
  },
  'Why might a writer use a flashback?': {
    why: 'A flashback takes the reader back to earlier events. It fills in background and helps explain why a character thinks or acts as they do now.',
    not: {
      'Because they forgot to include something':
        'Flashbacks are planned. Writers place them deliberately, often at a key moment.',
      'To confuse the reader': 'A flashback usually makes things clearer by revealing the past.',
      'To make the text longer':
        'Its purpose is to reveal background and motive, not to add length.',
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
      'They are named after London theatres':
        'London theatres had names like the Globe and the Curtain. The family names come from the story Shakespeare adapted.',
      'Shakespeare chose them randomly':
        'He kept names that were already part of the story he adapted, which some of his audience may have known.',
      'They are Italian words for love':
        'They are family names, not words for love. In the Italian versions of the story the families are the Montecchi and the Cappelletti.',
    },
    more: "The Italian poet Dante had named the Montecchi and Cappelletti as feuding factions in the early 1300s. Shakespeare's play made the names famous across the world.",
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
      'It is a sign of poor writing':
        'Used well, an opening question is a powerful hook, common in articles and speeches.',
      'It creates a sad mood':
        'A question creates curiosity. Any mood comes from what the question is about.',
    },
    more: "Opening questions are common in persuasive writing: 'Have you ever wondered where your rubbish goes?' They make the reader feel personally involved.",
    tip: 'In a persuasive or descriptive piece, try opening with a question, then answer it in a way that surprises the reader.',
  },
  'In Macbeth, why does Lady Macbeth sleepwalk and try to wash her hands?': {
    why: "In Act 5 Lady Macbeth walks in her sleep, rubbing her hands as if washing them, and cries 'Out, damned spot'. The guilt she once dismissed breaks through, showing she cannot escape her conscience.",
    not: {
      'She is tired':
        'Her sleepwalking is a sign of a troubled mind, not tiredness. The Doctor says she needs a priest more than a doctor.',
      'She has a skin condition':
        'The spot she sees is imagined blood. Her hands are clean; the stain is in her mind.',
      'She is cleaning the castle':
        'She is trying to wash imagined blood from her hands, not clean the castle.',
    },
    more: "After the murder she told Macbeth that a little water would clear them of the deed. Now she says 'all the perfumes of Arabia will not sweeten this little hand'.",
    tip: 'Compare Lady Macbeth in Act 1 and Act 5 to show how guilt destroys her. That before-and-after contrast makes a strong essay structure.',
  },
  'In "Poppies" by Weir, what do poppies symbolise?': {
    why: 'Since the First World War, red poppies have been worn to remember those killed in war. The poem is set just before Armistice Sunday, when poppies honour the dead.',
    not: {
      'Spring gardening':
        'The poppy in the poem is a paper poppy of remembrance, not a garden flower.',
      'The colour red':
        'Red is part of the image, and it can suggest blood, but the poppy stands for remembrance.',
      'Happiness and celebration': 'Poppies are worn in sorrow and respect, to remember the dead.',
    },
    more: "Poppies grew on the battlefields of Flanders in the First World War, which is why they became the symbol of remembrance. In the poem, one poppy links a family's private grief to national mourning.",
    tip: "Link the symbol to the poem's contrast between public remembrance and one mother's private loss.",
  },
  'What is free verse?': {
    why: 'Free verse is poetry with no fixed rhyme scheme and no regular metre. The lines follow the rhythms of natural speech, and the poet decides where each line breaks.',
    not: {
      'Poetry that is free to read': "'Free' refers to freedom from fixed patterns, not to cost.",
      'A type of sonnet':
        'A sonnet has strict rules: fourteen lines, usually with a set rhyme scheme and metre. Free verse has none.',
      'Poetry written in paragraphs':
        'Poetry written in paragraphs is called a prose poem. Free verse still uses lines, just without a fixed pattern.',
    },
    more: 'Free verse gives a poet flexibility: line breaks and pauses can create emphasis instead of rhyme. Many modern poems, including several in the exam anthologies, use it.',
    tip: 'If a poem has no regular pattern, say so, then explain what the freedom allows: a natural, conversational voice, or a sense of chaos.',
  },
  'In Animal Farm, what does the windmill represent?': {
    why: "Snowball promises the windmill will bring electricity and a three-day week. The animals wear themselves out building it, but its comforts never reach them. It stands for Stalin's plans for industry and the promises used to make workers toil.",
    not: {
      'A real windmill on a farm':
        'In the story it is a real windmill, but the question asks what it represents: a promise of progress used to control the workers.',
      "Napoleon's favourite building":
        "Napoleon first opposes the windmill, which is Snowball's idea, then claims it as his own. It matters as a symbol, not a favourite.",
      'The power of nature':
        'A storm does knock it down once, but the windmill stands for human plans and propaganda, not nature.',
    },
    more: "When the windmill falls, Napoleon blames Snowball, turning disaster into propaganda. The finished mill grinds corn for profit for the pigs, not to make the animals' lives easier.",
    tip: "Connect the symbol to context: Stalin's Five-Year Plans promised progress while workers suffered.",
  },
  'In "War Photographer" by Duffy, what does "a hundred agonies in black and white" suggest?': {
    why: "Each photograph holds a person's agony, so 'a hundred agonies' turns suffering into a count of pictures. In black and white prints, real pain becomes small, colourless images that cannot show the full horror.",
    not: {
      'The photos are very old':
        'The photographs are new: he has just come home from a war zone and is developing them.',
      'The photographer only uses black and white film':
        'The pictures are black and white, but the phrase means more than the type of film. It suggests suffering drained of colour and life.',
      'There are exactly one hundred photos':
        "'A hundred' means a large number, not an exact count. The point is how much suffering is captured, and how little will be seen.",
    },
    more: 'His editor will choose only a handful of the hundred for the Sunday paper. Duffy suggests readers see a tiny, filtered part of the suffering.',
    tip: "Explain both halves of the phrase: 'agonies' turns photos into pain, and 'black and white' suggests that pain has been drained of life.",
  },
  'In Jekyll and Hyde, why does Hyde become progressively harder to control?': {
    why: "Once Jekyll lets his evil side loose, it grows, and Hyde starts to appear without the drug. When Jekyll tries to give him up for two months, Hyde returns 'roaring' and murders Carew. Indulged or repressed, the dark side only gets stronger.",
    not: {
      'Jekyll becomes physically stronger':
        "It is Hyde who grows. Jekyll says Hyde's body seemed to grow in stature, while Jekyll himself weakens.",
      'Utterson protects Hyde':
        'Utterson does the opposite: he hunts Hyde, trying to protect his friend Jekyll.',
      'The potion expires':
        'The drug does not wear out. Later a new batch fails because the first supply was impure, but Hyde had grown stronger long before.',
    },
    more: "Jekyll says the side of him he had been projecting had been 'much exercised and nourished'. Stevenson suggests that evil feeds on indulgence.",
    tip: "Link this to Victorian respectability: Jekyll's double life suggests the dangers of hiding desires rather than facing them.",
  },
  'What is an extended metaphor?': {
    why: 'An extended metaphor is a comparison that continues beyond one phrase, developed over several lines or a whole text, so its meaning builds as it goes.',
    not: {
      'A very long sentence':
        'A long sentence is about grammar. An extended metaphor is about a comparison that keeps developing.',
      'Two metaphors side by side':
        'Two separate metaphors are just two metaphors. An extended metaphor develops one comparison.',
      'A metaphor that is obvious':
        'Whether a metaphor is obvious has nothing to do with it being extended.',
    },
    more: 'In Tissue, Dharker develops paper as a metaphor across the whole poem. In speeches, an extended metaphor such as life as a journey can hold an argument together.',
    tip: 'When you find an extended metaphor, track how it develops, and explain what each new stage adds.',
  },
  'In Romeo and Juliet, how does the oxymoron "loving hate" reflect the play\'s central conflict?':
    {
      why: "Romeo pairs opposites, brawling love and loving hate, just after the street fight. In this play love and hatred are tangled together: Juliet later cries, 'My only love sprung from my only hate'.",
      not: {
        'Romeo is describing his love for Juliet':
          'He has not yet met Juliet. In Act 1 Scene 1 he is lovesick for Rosaline.',
        'Shakespeare made a mistake': 'The contradiction is deliberate. The oxymoron is the point.',
        'It describes Tybalt':
          'Romeo says it about love and the brawl, not about one character. Tybalt stands for hatred alone.',
      },
      more: "Romeo's string of oxymorons, such as 'cold fire' and 'sick health', shows his confused state of mind. It also foreshadows a love that leads to violence and death.",
      tip: 'Link a small language feature to a big theme. That is how a top-band answer turns one quotation into a whole-play argument.',
    },
  'In "Exposure" by Owen, how does the refrain "But nothing happens" create meaning?': {
    why: 'The soldiers wait night after night in freezing trenches for an attack that never comes. The flat refrain, repeated through the poem, shows their suffering achieves nothing, while the cold slowly kills them.',
    not: {
      'It shows the soldiers are safe and comfortable':
        'They are freezing and dying of exposure. Nothing happening is part of their misery.',
      'Owen ran out of ideas':
        'The repetition is deliberate. Its flatness mirrors the endless, pointless waiting.',
      'It means the war is over':
        "The war goes on. 'Nothing happens' means no battle comes, while the men suffer anyway.",
    },
    more: 'The refrain ends stanzas on an anticlimax: tension builds, then collapses into nothing, again and again.',
    tip: 'When a line repeats, track how its meaning changes. By the end, nothing happening feels tragic rather than dull.',
  },
  'In Animal Farm, why does Orwell have the pigs learn to walk on two legs?': {
    why: "Snowball summed up the animals' rules as 'Four legs good, two legs bad'. When the pigs walk upright, carrying whips, they have become the humans they overthrew, and the sheep's chant changes to suit them.",
    not: {
      'Pigs can really walk upright':
        'In this fable, animals talk and act as Orwell needs them to. The point is symbolic: the pigs have become human.',
      'It is humorous':
        'The image is grotesque and shocking for the other animals. Its purpose is to show the betrayal of the revolution.',
      'The pigs want to exercise':
        "It is about power. Walking upright shows the pigs claiming the humans' place.",
    },
    more: 'Squealer appears first, walking on his hind legs, and then Napoleon comes out with a whip in his trotter. Soon after, the commandments are replaced by a single rule declaring some animals more equal than others.',
    tip: "Track how the commandments change. Each change marks a step in the pigs' betrayal of the revolution.",
  },
  'In "The Charge of the Light Brigade", how does Tennyson use rhythm to create meaning?': {
    why: "Lines like 'Half a league, half a league' fall into a strong beat followed by two light ones: DUM-da-da DUM-da-da. This dactylic rhythm sounds like galloping hooves, driving the charge forward.",
    not: {
      'The rhythm is random':
        'The rhythm is a strong, regular pattern, chosen to imitate galloping horses.',
      'Tennyson used a metronome':
        "A metronome keeps time for musicians. The poem's beat comes from its pattern of stressed syllables.",
      'The rhythm slows throughout':
        'The galloping beat keeps driving forward, just as the riders cannot stop.',
    },
    more: "Two dactyls to a line is called dactylic dimeter. The insistent beat, with repeated lines such as 'Cannon to right of them', makes the poem feel like a relentless charge, or a chant of honour.",
    tip: 'Do not just name the metre. Explain how the sound of the rhythm creates the experience of the charge.',
  },
  "In Macbeth, how does Shakespeare use the banquet scene to reveal Macbeth's psychological state?":
    {
      why: "At the feast Macbeth sees Banquo's ghost in his seat, but no one else can. His terrified outbursts, such as 'Thou canst not say I did it', reveal his guilt and paranoia in front of his lords.",
      not: {
        'Macbeth is hungry': 'The feast is the setting, but the scene is about guilt and fear.',
        'The scene is about food':
          'The banquet should show a secure new king. Instead it exposes his guilty mind.',
        'Macbeth performs well at the banquet':
          'He loses control in front of the court, and Lady Macbeth has to send the guests away.',
      },
      more: "Lady Macbeth tries to cover for him, but the lords leave suspicious. Afterwards Macbeth says 'blood will have blood', and the scene marks the start of his public downfall.",
      tip: "Explain how a stage effect shows an inner state: the ghost lets the audience see Macbeth's guilt.",
    },
  "In Frankenstein, what does the Creature's request for a companion reveal about his character?": {
    why: 'The Creature asks Victor for a female companion as ugly as himself, so that someone will not reject him. He says he is malicious because he is miserable: loneliness, not his nature, has made him violent.',
    not: {
      'He wants a servant to obey him':
        'He wants an equal: a companion of the same species, with the same defects, who will not reject him.',
      'He wants to create an army':
        'He promises the opposite: he and his companion would go to the wilds of South America, away from people.',
      'He is copying Victor':
        'His request comes from his own loneliness, after being rejected by everyone he meets.',
    },
    more: "Victor begins the female creature, then destroys it, fearing a race of monsters. The Creature's revenge follows: he kills Clerval, then Elizabeth on her wedding night.",
    tip: 'Use the request to weigh responsibility: is the Creature monstrous by nature, or made monstrous by rejection?',
  },
  'In "Dulce et Decorum Est", what effect does Owen create by directly addressing "you" in the final stanza?':
    {
      why: "The final stanza speaks to 'you': if you had seen what Owen saw, you would not tell eager children that war is glorious. The reader becomes the accused, and the bitter 'My friend' points at those who urged young men to fight.",
      not: {
        "He is praising the reader's courage":
          'He is accusing, not praising. The address is bitter and challenging.',
        'It is a grammatical error':
          'Direct address is a deliberate technique, used to confront the reader.',
        'He is addressing the soldiers':
          'The soldiers already know the truth. He addresses people at home who repeat the lie.',
      },
      more: "The address uses conditionals, such as 'If you could hear', forcing the reader to imagine the horror before Owen gives his verdict: the old Lie.",
      tip: "Comment on who 'you' might be, the reader, the poet Jessie Pope, the whole nation, and how the direct address changes the poem's effect.",
    },
  'In "Poppies" by Weir, how does the poet use time to structure the mother\'s grief?': {
    why: 'The mother moves from the moment her son left, back to memories of him as a little boy, then forward to her walk to the war memorial. Memory and the present blur, showing how grief collapses time.',
    not: {
      'The poem follows a strict timeline':
        'It loosely follows her day, but memories of his childhood keep breaking in, so time is not strict.',
      'Time is irrelevant in the poem':
        'Time is central: the poem opens at a precise moment just before Armistice Sunday and moves between past and present.',
      'The poem is set entirely in the future':
        'It is told mainly in the past tense, looking back on her son leaving and on memories of his childhood.',
    },
    more: 'At the end she hopes to hear his childhood voice on the wind, merging the boy he was with the son she has lost.',
    tip: "Comment on structure: explain how shifts in time show the mother's grief, not just what happens.",
  },
  'In Animal Farm, how does Orwell use Boxer to represent the working class?': {
    why: "Boxer is the farm's strongest worker, with the mottoes 'I will work harder' and 'Napoleon is always right'. When he collapses, the pigs sell him to the knacker for money, showing how rulers use loyal workers and then discard them.",
    not: {
      'Boxer is intelligent and critical':
        'Boxer is loyal and slow to question. He cannot learn the alphabet beyond the letter D.',
      'Boxer represents the middle class':
        'He stands for ordinary labourers, the working class who did the hardest work.',
      'Boxer successfully rebels':
        'He never rebels against the pigs. His loyalty is what makes his betrayal so painful.',
    },
    more: "The pigs buy whisky with the money from Boxer's sale, while Squealer claims he died in hospital. Orwell shows how propaganda covers up cruelty.",
    tip: "Use Boxer to discuss exploitation, and explain why his blind loyalty matters as much as the pigs' cruelty.",
  },
  'In "Bayonet Charge" by Hughes, how does the shift from "he" to describing a "yellow hare" create meaning?':
    {
      why: 'In the middle of the charge, the soldier sees a yellow hare flung up by the gunfire, rolling and crawling in pain. Its blind, desperate terror mirrors his own: he too is reduced to an animal trying to survive.',
      not: {
        'The soldier is hunting':
          'He is charging at the enemy, not hunting. The hare is a victim of the gunfire, like him.',
        'Hughes liked animals':
          "Hughes did write often about animals, but the hare here has a purpose: it mirrors the soldier's terror.",
        'The hare is irrelevant':
          'The hare marks the turning point. After it, the soldier abandons his ideals and runs on in pure fear.',
      },
      more: "Just before, time almost freezes as the soldier wonders why he is running at all. The hare's suffering shows the violence of war reaching even innocent nature.",
      tip: 'Explain how the animal image connects to the soldier, rather than describing the hare alone.',
    },
  'In Macbeth, how does Shakespeare present the relationship between Macbeth and Lady Macbeth as a reversal of gender expectations?':
    {
      why: "At first Lady Macbeth drives the murder, mocking her husband's courage: 'When you durst do it, then you were a man'. After the murder their roles swap: she falls apart in guilt while he grows ruthless.",
      not: {
        'They have a normal marriage':
          'Their marriage is close at first, but it is built on a murder plot, and it breaks down.',
        'Lady Macbeth is always submissive':
          'She dominates in Act 1, pushing Macbeth to kill Duncan.',
        'Gender is irrelevant in the play':
          "Gender is central: Lady Macbeth calls on spirits to unsex her, and challenges Macbeth's manhood.",
      },
      more: "By Act 3 Macbeth plans Banquo's murder without telling her. In Act 5, told of her death, he answers with weary despair rather than grief: 'She should have died hereafter.'",
      tip: 'Show the change across the play: compare their relationship in Act 1 with Acts 3 and 5.',
    },
  'In "Checking Out Me History" by Agard, how does the contrast between colonial and Caribbean histories serve the poem\'s argument?':
    {
      why: 'Agard sets British history beside the folk tale of Dick Whittington and nursery rhymes such as Old King Cole, making it sound trivial. Caribbean heroes get vivid, reverent stanzas. The contrast exposes an education that taught him fairy tales but ignored the heroes of his own history.',
      not: {
        'Both histories are presented equally':
          'They are deliberately unequal: one mocked through nursery rhymes, the other celebrated.',
        'Agard prefers British history':
          'He criticises the way British history was taught to him, and reclaims Caribbean history.',
        'The poem makes no political argument':
          'The poem protests against a colonial education, and ends with the speaker claiming his own identity.',
      },
      more: "Heroes such as Toussaint L'Ouverture, who led the Haitian Revolution, and Mary Seacole, who nursed soldiers in the Crimean War, are set against figures like Florence Nightingale, whom he was taught about.",
      tip: "Comment on the poem's contrasts in content and form, and link them to its purpose: reclaiming identity.",
    },
  'In Jekyll and Hyde, how does Stevenson use the physical contrast between Jekyll and Hyde to explore Victorian anxieties?':
    {
      why: "Hyde is smaller and younger than Jekyll because Jekyll's evil side has been less developed, and people who meet him sense a deformity they cannot name. Victorians feared that respectable men hid stunted, monstrous desires.",
      not: {
        'They look the same':
          'Hyde is small and pale and gives an impression of deformity, while Jekyll is a large, handsome man of fifty.',
        'The contrast is purely physical':
          "The bodies carry meaning: Hyde's stunted form reflects the hidden, less developed side of Jekyll.",
        'Stevenson wanted a villain who looked scary':
          "Hyde is disturbing, but his appearance also has a purpose: it shows what Jekyll's repressed side looks like.",
      },
      more: "Victorian ideas about degeneration, and Darwin's theory of evolution, made readers fear that humans could slip back into something more primitive. Hyde attacks Carew with 'ape-like fury'.",
      tip: "Link appearance to context: explain what Hyde's body suggests about Victorian fears of what respectable people hide.",
    },
  'How does Tennyson simultaneously celebrate and question military obedience in "The Charge of the Light Brigade"?':
    {
      why: "Tennyson praises the riders' courage and obedience, but he admits that 'Some one had blunder'd' and sends them into 'the valley of Death'. He honours the men while hinting that the order was a fatal mistake.",
      not: {
        'Tennyson only celebrates the soldiers':
          'He celebrates them, but the line about the blunder questions the command that sent them to die.',
        'Tennyson criticises the soldiers':
          'He praises the soldiers. Any criticism is aimed at whoever gave the order.',
        'The poem has no political dimension':
          'Tennyson was Poet Laureate, writing about a national disaster. The poem shaped how the nation remembered it.',
      },
      more: "The lines 'Theirs not to reason why, / Theirs but to do and die' can be read as praise for obedience, or as a quiet protest that soldiers could not question orders.",
      tip: 'For questions asking how a poet does two things at once, give evidence for each side, then explain how they work together.',
    },
  'In "The Émigrée" by Rumens, evaluate how the poet uses light as a motif to resist political oppression.':
    {
      why: "The speaker's memory of her city is full of sunlight, and she holds on to it whatever news she hears of war and tyranny. The light becomes a symbol of a memory that oppressors cannot take away.",
      not: {
        'Light describes the weather':
          'The sunlight is a symbol of her memory and identity, not a weather report.',
        'The light fades throughout the poem':
          'The light lasts to the end, even when people around her accuse her and close in.',
        'Light represents danger':
          'Light stands for hope and memory. Danger comes from the forces that threaten her city and her.',
      },
      more: "The poem's last image turns even her shadow into proof of the sunlight she carries. The darkness around her only shows that the light is still there.",
      tip: 'Track a motif through the whole poem, showing how it develops, rather than mentioning it once.',
    },
  'In Macbeth, evaluate how Shakespeare uses the Porter scene to both relieve and intensify dramatic tension.':
    {
      why: "Straight after Duncan's murder, a drunken Porter jokes that he is the porter of hell gate as he answers the knocking. The comedy relieves tension, but it also suggests that Macbeth's castle has become a kind of hell, full of lies and equivocation.",
      not: {
        'The Porter scene is a mistake':
          'It is deliberate: placing comedy after horror makes both stronger.',
        'The Porter scene is purely funny':
          "It is comic, but its talk of hell and equivocation links to the play's themes.",
        'Shakespeare forgot about the murder':
          'The knocking the Porter answers is the same knocking that terrified Macbeth just after the murder.',
      },
      more: "The 'equivocator' may refer to the Jesuit Henry Garnet, tried for treason after the Gunpowder Plot, who had defended giving misleading answers under oath. Jacobean audiences would have caught the topical joke.",
      tip: 'When you evaluate a comic scene, explain both effects: the release of tension, and the darker meaning beneath the jokes.',
    },
  'How does Weir use the absence of the soldier\'s voice in "Poppies" to create meaning?': {
    why: 'The son never speaks; we hear only his mother. His silence makes his absence felt in every line, and keeps the reader inside her grief and uncertainty.',
    not: {
      'The soldier speaks throughout': "He never speaks. The whole poem is in the mother's voice.",
      'The poet forgot to include dialogue':
        'Leaving out his voice is deliberate: it makes his absence the centre of the poem.',
      'The soldier is too young to speak':
        "He is old enough to leave home for war. His silence is the poet's choice.",
    },
    more: 'At the end the mother listens, hoping to hear his voice as it was when he was a child. Whether he has died is left uncertain, which makes the silence more painful.',
    tip: 'Comment on what is missing as well as what is there. A silence can be as meaningful as a speech.',
  },
  'In "Tissue" by Dharker, evaluate how the final stanza shifts the poem\'s meaning.': {
    why: 'The poem ends by turning paper into skin. Suddenly everything said about paper, thin, fragile, letting light through, applies to the human body, so the poem was about human life all along.',
    not: {
      'The final stanza is unrelated':
        'It ties the whole poem together by revealing what the paper stood for.',
      'The final stanza repeats the first':
        'It does not repeat the opening. It transforms the paper metaphor into skin.',
      'Dharker changes topic accidentally':
        "The shift is carefully prepared by the whole poem's focus on fragility.",
    },
    more: 'The last stanza is a single short line, set apart from the rest. Its isolation gives the final image extra weight.',
    tip: 'Endings matter. Explain how a final line or stanza changes your reading of everything before it.',
  },
  'How does Shelley construct "Ozymandias" as a meditation on the relationship between art and power?':
    {
      why: "The sculptor's work survives in the desert after the king's empire has vanished, so art outlasts power. And the poem itself, still read today, outlasts the statue.",
      not: {
        'Art and power are unrelated in the poem':
          "They are closely linked: the king's image survives only because a sculptor carved it.",
        "The poem celebrates Ozymandias's power":
          'It mocks his power. His boast stands over an empty desert.',
        'Shelley believed art was inferior to politics':
          'The poem suggests the opposite: art outlives political power.',
      },
      more: "The sculptor captured the king's 'sneer of cold command'. 'The hand that mocked them' can mean both copied and ridiculed, so the artist quietly judges the tyrant.",
      tip: 'For questions about power, compare its kinds in the poem: political power, the power of art and the power of time.',
    },
  'Critically evaluate how Owen uses the form of "Exposure" to embody the soldiers\' experience.': {
    why: "Owen uses pararhyme, pairs like 'knive us' and 'nervous' that almost rhyme but not quite. The near misses feel unsettled and unresolved, like the men's waiting, and each stanza ends with a short, flat line.",
    not: {
      'The form is conventional':
        'Owen bends convention: his pararhyme and short final lines are unusual and unsettling.',
      'Owen uses perfect rhyme throughout':
        'He uses pararhyme, where the consonants match but the vowels change, so the rhymes never quite resolve.',
      'The form has no connection to meaning':
        'The form mirrors the experience: unresolved rhymes for unresolved suffering, short lines for fading hope.',
    },
    more: "Pararhyme keeps the consonants and changes the vowel, as in 'silent' and 'salient'. Owen was one of its pioneers, and it gives his war poems a haunting, off-key sound.",
    tip: "For 'critically evaluate', go beyond naming the form: judge how far it creates the soldiers' experience, with precise examples.",
  },
  'To what extent does Shakespeare present fate as inescapable in Romeo and Juliet?': {
    why: "The Prologue calls the lovers star-cross'd, so they seem doomed. Yet the tragedy also grows from choices: Tybalt's anger, Romeo's haste and the Friar's risky plans. Shakespeare leaves fate and free will in tension.",
    not: {
      'The characters have complete free will':
        'Fate is present from the Prologue, and the lovers sense it. Their choices are not the whole story.',
      'Shakespeare did not believe in fate':
        'We cannot know his beliefs. The question is how the play presents fate.',
      'Only Romeo believes in fate':
        'Juliet also senses doom, and the Chorus announces fate in the Prologue.',
    },
    more: "Hearing of Juliet's supposed death, Romeo cries 'Then I defy you, stars'. Ironically, his rush to the tomb fulfils the fate he defies.",
    tip: "For 'to what extent', give evidence for fate and for choice, then reach a clear judgement.",
  },
  'How does Hughes use the disruption of patriotic language in "Bayonet Charge" to deconstruct war propaganda?':
    {
      why: "In the middle of the charge, the soldier's grand ideals, 'king', 'honour' and 'human dignity', are cast aside as useless. Terror leaves no room for the abstract words that sent him to fight.",
      not: {
        'Hughes supports patriotism':
          'The poem shows patriotic ideals collapsing in the face of real combat.',
        'The poem contains no patriotic language':
          "It names patriotic ideals such as 'king' and 'honour', then shows them falling away.",
        'Hughes was a war propagandist':
          'Hughes, born in 1930, was never a war propagandist. His father survived Gallipoli, and the poem undercuts propaganda rather than spreading it.',
      },
      more: 'The soldier even wonders whether he is just a tiny part of a vast machine. The poem never names its war, so it speaks about combat in general.',
      tip: "Track how the soldier's thoughts change: from belief in ideals, to bewilderment, to pure survival instinct.",
    },
  'Critically assess how Stevenson uses the will and testament in Jekyll and Hyde as both a legal and symbolic device.':
    {
      why: "Jekyll's will leaves everything to Hyde, even if Jekyll simply disappears for three months. Utterson, a lawyer, is troubled by it from the start. The will hints that Jekyll is ready to hand his whole self over to Hyde.",
      not: {
        'The will is a minor detail':
          "It drives the mystery: Utterson's worry about the will begins his investigation.",
        'The will is straightforward':
          'It is deeply strange: a respected doctor leaving everything to a violent stranger.',
        'Stevenson included it for realism':
          "It adds legal detail, but its main job is to raise suspicion and suggest Jekyll's divided self.",
      },
      more: "In the final chapters, Utterson finds the will changed to name him instead of Hyde. The document mirrors the struggle over who controls Jekyll's identity.",
      tip: 'Use objects such as the will, the letters and the doors as evidence. They show how Stevenson builds mystery through documents.',
    },
  'In Great Expectations, what does the marshland at the opening of the novel symbolise?': {
    why: "The novel opens on bleak, misty marshes beside the churchyard where Pip's parents are buried. There he meets the convict Magwitch, so the setting introduces the danger, crime and loneliness that shape his life.",
    not: {
      'A pleasant countryside':
        'The marshes are flat, cold and bleak, a dangerous place where convicts hide.',
      'Dickens liked nature descriptions':
        'The description has a purpose: it sets a mood of danger and isolation.',
      'The setting is irrelevant':
        'The marshes are where Pip meets Magwitch, the meeting that shapes his whole life.',
    },
    more: "Pip calls the churchyard 'this bleak place overgrown with nettles', and himself 'the small bundle of shivers'. The setting mirrors his vulnerability.",
    tip: 'Analyse openings closely: explain how the first setting introduces themes that return later in the novel.',
  },
  'In "Dulce et Decorum Est", how does Owen\'s use of the present tense in the third stanza create impact?':
    {
      why: "The second stanza tells the gas attack in the past tense: 'I saw him drowning.' Then the two-line third stanza switches to the present: 'He plunges at me'. The dying man returns in every dream, so for Owen the attack is never over.",
      not: {
        'It is a grammatical mistake':
          'The shift is deliberate. It moves from what happened to what still happens in his dreams.',
        'Present tense is always used in poetry':
          'Poems can use any tense. Owen tells the march and the gas attack in the past tense, so the switch to the present stands out.',
        'Owen forgot to use past tense':
          'He uses the past tense for the march and the attack, then chooses the present for the nightmare.',
      },
      more: "The third stanza is only two lines long, set apart like a recurring nightmare. 'In all my dreams' shows the memory returns again and again.",
      tip: 'When a tense changes, ask what it shows about time and memory. Here it suggests trauma that does not stay in the past.',
    },
  "In Lord of the Flies, evaluate how Golding uses Piggy's glasses as a symbol that evolves throughout the novel.":
    {
      why: "The boys light their first fire by focusing sunlight through Piggy's glasses, so the glasses stand for science, reason and the hope of rescue. As one lens breaks and Jack's tribe steals them, reason loses its power on the island.",
      not: {
        'The glasses are just for reading':
          'Piggy needs them to see at all, and the boys need them to make fire. They matter far more than reading glasses.',
        'The glasses have no symbolic value':
          "They are one of the novel's key symbols, linked to reason, science and civilisation.",
        'Golding wore glasses himself':
          "Whatever the writer's own eyesight, the glasses matter for what they mean in the novel.",
      },
      more: "When Jack's tribe steals the glasses, they take the power to make fire, and with it control. Piggy, nearly blind without them, is killed soon after.",
      tip: "Trace a symbol's journey from its first appearance to its last, and explain what each change shows.",
    },
}
