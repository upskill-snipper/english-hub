import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Speed Analysis: the explanation a student sees after each answer, by question
 * key (src/data/games/banks/speed-analysis.ts). Written with AI on 13 October
 * 2026 and checked against each extract and its options, as the founder decided
 * (src/lib/games/explanations/types.ts).
 *
 * Rebuilt for depth on 24 October 2026: 296 new explanations, one for every
 * question added to the bank (devices named in real lines from texts out of UK
 * copyright, near neighbours told apart, what one word or device does, and
 * which of two devices does the work), and the 29 kept from 13 October
 * rewritten where their options changed; the dagger's now explains a
 * soliloquy, since Macbeth answers his own question. Every wrong option has
 * its own "why not", and none teaches with another question's line. Written
 * with AI and checked against each question, as the founder decided
 * (src/lib/games/explanations/types.ts).
 *
 * Checked on 24 October 2026 by a second reader, as the founder decided: 43
 * entries rewritten, for the eleven questions replaced and the options, prompts
 * and answers changed (the bank's docblock lists them), and where an entry gave
 * another question's answer away or stated a fact wrongly (most of the Light
 * Brigade did ride back; Holmes rode with Watson in the fog; 'aware' does not
 * share the vowel of 'shaped'; Hamlet's couplet is not the last line of its
 * scene; Dickens wrote the Carol to be read, and read it aloud later).
 */
export const EXPLANATIONS: GameExplanations = {
  '"The sea was a boiling cauldron of fury."': {
    why: "The sea is described as if it actually were a boiling cauldron. There is no 'like' or 'as', so this is a metaphor, not a simile.",
    not: {
      Simile:
        "A simile compares using 'like' or 'as'. Here the sea simply is the cauldron, with no comparing word.",
      Oxymoron:
        'An oxymoron joins two words that contradict each other. Nothing here clashes: cauldrons do boil.',
      Paradox:
        'A paradox is a statement that seems to contradict itself yet holds a truth. This sentence makes no such claim; it paints a picture.',
    },
    more: "A cauldron suggests something dangerous being brewed, and 'boiling' adds heat and violence. The metaphor makes the storm feel out of control and threatening.",
    tip: "Name the device, then explain the image: 'The metaphor of a boiling cauldron presents the sea as violent and threatening.'",
  },
  '"Her smile was like the sun breaking through clouds."': {
    why: "The smile is compared to the sun using the word 'like', which makes this a simile.",
    not: {
      Metaphor:
        "A metaphor says one thing is another. Here 'like' keeps them apart: her smile is only like the sun.",
      Personification:
        'Personification gives human qualities to something not human. The smile is already human, and the sun only shines through cloud.',
      Oxymoron:
        "An oxymoron puts two opposite words together, such as 'icy heat'. Nothing here contradicts itself.",
    },
    more: 'The sun breaking through clouds suggests warmth and relief after gloom, so her smile seems to change the mood of everything around her.',
    tip: "Explore the image, not just the label: 'The simile suggests her smile brings sudden warmth and hope.'",
  },
  '"The wind howled and the trees groaned under its weight."': {
    why: 'The wind and the trees are given living, human actions: the wind howls and the trees groan. Giving human qualities to things that are not human is personification.',
    not: {
      Hyperbole:
        'Hyperbole is deliberate exaggeration. Nothing here is made bigger than it is: a strong wind can bend trees.',
      Oxymoron:
        'An oxymoron puts two opposite words together. No two words here contradict each other.',
      Paradox:
        'A paradox is a statement that seems to contradict itself but holds a truth. This sentence makes no such claim.',
    },
    more: "'Howled' and 'groaned' sound like pain and distress, so the storm seems to be suffering. It creates an uneasy, threatening atmosphere.",
    tip: "Link the device to atmosphere: 'Personifying the trees as groaning creates a sense of strain and unease.'",
  },
  '"Peter Piper picked a peck of pickled peppers."': {
    why: "Almost every word begins with the same 'p' sound. Repeating the first sound of words close together is alliteration.",
    not: {
      Sibilance:
        "Sibilance repeats hissing 's' and 'sh' sounds. The sound repeated here is a hard 'p', made with a burst of air.",
      Onomatopoeia: 'None of the words imitates a sound.',
      'Internal rhyme':
        "Internal rhyme puts rhyming words inside one line. 'Piper' and 'peppers' share a first sound, not an ending, so they do not rhyme.",
    },
    more: "The repeated 'p' is a plosive sound, made with a small burst of air. It gives the line a bouncing rhythm and makes it hard to say quickly.",
    tip: "Say what the sound does: 'The plosive alliteration creates a lively, bouncing rhythm.'",
  },
  '"The rain set early in to-night,\nThe sullen wind was soon awake"': {
    why: "The weather is given a human mood: the wind is 'sullen'. When weather or nature reflects the feelings or atmosphere of a scene, that is pathetic fallacy.",
    not: {
      Simile: "Nothing is compared using 'like' or 'as'.",
      Hyperbole:
        'Hyperbole is deliberate exaggeration. Early rain and a rising wind are described plainly, not made bigger.',
      Oxymoron: 'No two words here contradict each other.',
    },
    more: 'A sullen wind and early rain set a dark, brooding mood at the start of the poem, preparing the reader for something troubling to come.',
    tip: "Connect it to mood: 'The pathetic fallacy of the sullen wind creates a brooding atmosphere and hints at darkness to come.'",
  },
  '"I have told you a million times to clean your room!"': {
    why: "'A million times' is a huge exaggeration: nobody has really said it that often. Deliberate exaggeration for effect is hyperbole.",
    not: {
      Irony:
        'Irony is when what is said differs from what is meant. The speaker means exactly this, only exaggerated.',
      Euphemism:
        'A euphemism softens something unpleasant with a gentler word. This line does the opposite: it makes the complaint bigger.',
      Metaphor: 'Nothing is described as being something else.',
    },
    more: "The exaggeration shows the speaker's frustration and impatience more forcefully than a precise number would.",
    tip: "Explain why the writer exaggerates: 'The hyperbole of a million times conveys the speaker's exasperation.'",
  },
  '"The soft, silky sound of the stream slipped through the stones."': {
    why: "The repeated 's' sounds in 'soft, silky sound', 'stream slipped' and 'stones' make this sibilance: the repetition of hissing 's' sounds.",
    not: {
      Plosives:
        "Plosives are hard sounds such as 'b', 'p' and 't', made with a burst of air. The sounds repeated here are soft and hissing.",
      'Internal rhyme':
        "No two words in the line rhyme. 'Stream' and 'stones' share a first sound, not an ending.",
      Oxymoron: 'No two words here contradict each other.',
    },
    more: "The gentle 's' sounds echo the quiet rush of water, so the reader almost hears the stream. It creates a calm, soothing mood.",
    tip: "Link the sound to the meaning: 'Sibilance echoes the gentle flow of the stream and creates a calm mood.'",
  },
  '"The buzz of bees and the hiss of the kettle filled the kitchen."': {
    why: "'Buzz' and 'hiss' are words that sound like the noises they describe. That is onomatopoeia.",
    not: {
      Personification: 'Nothing is given human qualities: bees buzz and kettles hiss naturally.',
      Hyperbole: 'Nothing is exaggerated: a busy kitchen really does sound like this.',
      Metaphor: 'Nothing is described as being something else.',
    },
    more: 'The sound words let the reader hear the scene, making the kitchen feel busy and alive.',
    tip: "Show how it builds the setting: 'Onomatopoeia such as buzz and hiss creates a lively, noisy atmosphere.'",
  },
  '"Is this a dagger which I see before me,\nThe handle toward my hand?"': {
    why: 'Macbeth has sent his servant to bed and is alone on stage, speaking his thoughts aloud as a vision of a dagger points him towards Duncan. A speech by a character alone on stage, sharing their mind with the audience, is a soliloquy.',
    not: {
      Aside:
        'An aside is a short remark to the audience while other characters on stage do not hear it. Here nobody else is on stage.',
      Apostrophe:
        'An apostrophe speaks to someone absent or to an object. In these two lines Macbeth asks about the dagger rather than speaking to it.',
      Prologue:
        'A prologue introduces a play before the action starts. This speech comes in Act 2, as Macbeth goes to commit the murder.',
    },
    more: 'Alone, Macbeth questions his own eyes: the dagger may be real or a trick of a guilty mind. The soliloquy lets the audience into his fear and his resolve at the same moment.',
    tip: "Say what the soliloquy reveals: 'In this soliloquy Shakespeare lets the audience watch Macbeth's mind unravel before the murder.'",
  },
  '"Bent double, like old beggars under sacks,\nKnock-kneed, coughing like hags, we cursed through sludge"':
    {
      why: "The soldiers are compared to 'old beggars' and to 'hags' using 'like', so these are similes.",
      not: {
        Metaphor:
          "A metaphor would say the soldiers are beggars. The word 'like' makes these similes.",
        Personification: 'Nothing here is given human qualities: the soldiers are already human.',
        Hyperbole:
          'Owen is not exaggerating. He describes exhausted men as they really looked, and the shock is that it is true.',
      },
      more: 'Young soldiers are compared to old beggars and hags, showing how war has exhausted and aged them. It undermines the idea of war as glorious.',
      tip: "Explore the shock of the comparison: 'The similes present young soldiers as broken and aged, challenging heroic images of war.'",
    },
  '"Look on my works, ye Mighty, and despair!\nNothing beside remains."': {
    why: "The king boasts that the mighty should despair at his works, yet 'nothing beside remains'. The gap between his boast and the ruins around it is irony.",
    not: {
      Paradox:
        'A paradox is a statement that contradicts itself. The inscription does not: it is a plain boast. The clash is between the boast and the empty desert.',
      Oxymoron: 'No two words placed together contradict each other.',
      Euphemism:
        "A euphemism softens something unpleasant. The king's words are the opposite of soft: they boast and threaten.",
    },
    more: "The irony shows that power and pride do not last: time destroys even the greatest ruler's achievements.",
    tip: "Explain what the irony reveals: 'The irony exposes the arrogance of power, since nothing of his empire survives.'",
  },
  '"I wandered lonely as a cloud\nThat floats on high o\'er vales and hills"': {
    why: "The speaker compares himself to a cloud using 'as' ('lonely as a cloud'), so this is a simile.",
    not: {
      Metaphor: "A metaphor would say he is a cloud. The word 'as' makes this a simile.",
      Hyperbole: "Nothing is exaggerated: he compares his solitary walk to a cloud's drift.",
      Oxymoron: 'No two words here contradict each other.',
    },
    more: 'A cloud floating alone suggests drifting freedom and solitude, so his loneliness feels peaceful and detached rather than sad.',
    tip: "Explore the feeling: 'The simile presents the speaker as drifting and solitary, detached from the world below.'",
  },
  '"Out, out, brief candle!"': {
    why: "Macbeth calls life a 'brief candle' without using 'like' or 'as', so this is a metaphor.",
    not: {
      Simile: "There is no 'like' or 'as': life is called a candle, not compared to one.",
      Hyperbole:
        'Nothing is exaggerated. Calling life a short candle shrinks it rather than making it bigger.',
      Oxymoron: 'No two words here contradict each other: candles are often brief.',
    },
    more: "A candle burns briefly and is easily put out. Spoken after Lady Macbeth's death, the metaphor shows Macbeth now sees life as short and meaningless.",
    tip: "Use context briefly: 'The metaphor of the brief candle conveys Macbeth's despair at how short and fragile life is.'",
  },
  '"Not that I loved Caesar less, but that I loved Rome more."': {
    why: 'Brutus sets two loves side by side: his love for Caesar against his greater love for Rome. Placing contrasting ideas together in one balanced sentence, so that each sharpens the other, is juxtaposition.',
    not: {
      Oxymoron:
        'An oxymoron squeezes two contradictory words into one phrase. Here two whole clauses are set against each other, and loving Caesar and loving Rome do not contradict.',
      Personification:
        'Rome stands for the people and the republic, but it is given no human action or feeling here: Brutus is the one who loves.',
      Euphemism:
        'A euphemism softens something unpleasant with a gentler word. Brutus is not softening anything; he is weighing one love against another.',
    },
    more: "Brutus speaks in calm, balanced prose to the crowd after Caesar's murder. The juxtaposition makes his choice sound reasonable: he killed a man he loved for the sake of his country.",
    tip: "Explain what the balance does: 'The juxtaposition of Caesar and Rome presents the murder as a painful but patriotic choice.'",
  },
  '"This fellow is wise enough to play the fool"': {
    why: 'Viola says Feste is wise enough to play the fool, which sounds self-contradictory: fools are not meant to be wise. Yet it holds a truth, because acting the fool well takes real wit. A statement like this is a paradox.',
    not: {
      Oxymoron:
        "An oxymoron joins two contradictory words in one phrase, such as 'icy heat'. Here 'wise' and 'fool' sit apart, and the contradiction lies in the whole statement.",
      Hyperbole:
        "Nothing is exaggerated: Viola makes a calm, thoughtful judgement of Feste's skill.",
      Euphemism:
        'A euphemism softens something unpleasant. Viola is praising Feste, not disguising anything.',
    },
    more: "Feste has just out-talked Viola. Alone, she admits that a good fool must read people's moods and choose his moment, the skill of a wise man. The paradox suits a play in which the fool is often the wisest person on stage.",
    tip: "Unpack the truth inside the contradiction: 'The paradox suggests that playing the fool well demands real intelligence.'",
  },
  '"A deafening silence filled the room after the verdict."': {
    why: "'Deafening' and 'silence' contradict each other, because silence makes no sound. Two opposite words placed together form an oxymoron.",
    not: {
      Paradox:
        'A paradox is a whole statement that seems impossible but holds a truth. An oxymoron is two contradictory words side by side, as here.',
      Irony:
        'Irony says the opposite of what is meant. This means what it says: a silence so complete it overwhelms.',
      Personification:
        'Nothing is given human qualities: silence filling a room is not a human action.',
    },
    more: 'The silence is so intense it feels overwhelming, which shows the shock everyone feels at the verdict.',
    tip: "Explain the intensity: 'The oxymoron conveys how overwhelming the silence felt.'",
  },
  '"The stars danced playfully in the moonlit sky."': {
    why: 'Stars cannot dance or be playful. Giving them human actions and feelings is personification.',
    not: {
      Simile: "Nothing is compared using 'like' or 'as'.",
      Hyperbole:
        'Nothing is made bigger than it is: the stars are given human actions, not exaggerated.',
      Onomatopoeia: 'No word here imitates a sound.',
    },
    more: 'Dancing, playful stars create a light, joyful and magical night scene.',
    tip: "Link the device to mood: 'Personifying the stars as dancing creates a joyful atmosphere.'",
  },
  '"Far off, like a dull rumour of some other war."': {
    why: "The distant gunfire is compared to 'a dull rumour of some other war' using 'like', so this is a simile.",
    not: {
      Metaphor:
        "A metaphor would say the gunfire is a rumour. 'Like' keeps the two apart, which makes this a comparison.",
      Oxymoron: 'No two contradictory words are joined in one phrase.',
      Hyperbole:
        'Nothing is exaggerated: the line makes the guns sound smaller and further away, not bigger.',
    },
    more: 'A rumour is half heard and hard to believe, so the simile makes the fighting feel distant and unreal. For these men the war is somewhere else; their battle is with the cold.',
    tip: "Explain what the comparison does to the war: 'The simile makes the fighting seem remote, as if it belongs to someone else.'",
  },
  '"It sounds nothing to hear, but it was hellish to see."': {
    why: "Enfield sets two reactions side by side: the story 'sounds nothing to hear', but the sight was 'hellish'. Placing contrasting ideas together so that each sharpens the other is juxtaposition.",
    not: {
      Oxymoron:
        'An oxymoron joins two contradictory words in one phrase. Here two halves of a sentence are set against each other.',
      Simile: "Nothing is compared using 'like' or 'as' in this sentence.",
      Personification:
        'Nothing non-human is given human qualities: the sentence is about what Enfield heard and saw.',
    },
    more: "Enfield has just described Hyde trampling a child. The contrast admits that the words cannot carry the horror, so the reader is left to imagine how 'hellish' it looked.",
    tip: "Comment on what the contrast suggests: 'The juxtaposition shows that Hyde's evil is felt more than it can be described.'",
  },
  "\"'Glamis hath murder'd sleep, and therefore Cawdor\nShall sleep no more. Macbeth shall sleep no more!'\"":
    {
      why: "'Sleep no more' ends two sentences in a row, and 'sleep' is heard three times. Repeating words or phrases for emphasis is repetition. Glamis, Cawdor and Macbeth are all Macbeth himself.",
      not: {
        Anaphora:
          'Anaphora repeats words at the START of clauses or lines. These sentences begin differently, with Glamis and Macbeth, and end the same way.',
        Oxymoron: 'No two contradictory words are joined in one phrase.',
        Simile: "Nothing is compared using 'like' or 'as'.",
      },
      more: 'Just after killing Duncan, Macbeth reports a voice crying through the house. Glamis, Cawdor, Macbeth: each of his names is condemned in turn, and the man who murdered sleep will never rest again.',
      tip: "Link the repetition to guilt: 'The repeated sleep no more shows Macbeth already haunted by what he has done.'",
    },
  '"Love is a smoke made with the fume of sighs"': {
    why: "Romeo says love is 'a smoke' made from sighs, without 'like' or 'as'. Describing one thing as if it were another is a metaphor.",
    not: {
      Hyperbole:
        'Nothing is exaggerated: love is pictured as something thin and drifting, not made bigger.',
      Oxymoron:
        'No two contradictory words are joined in one phrase; love and smoke do not contradict each other.',
      Euphemism:
        'A euphemism softens something unpleasant. Romeo is describing love, not disguising it.',
    },
    more: "Smoke is hazy and soon gone, so the metaphor suggests Romeo's love for Rosaline is mostly sighing and show. He piles up images of love here, before he has even met Juliet.",
    tip: "Use the image to judge Romeo: 'The metaphor of smoke suggests his love for Rosaline is vague and short-lived.'",
  },
  '"Season of mists and mellow fruitfulness,\nClose bosom-friend of the maturing sun"': {
    why: "Autumn is called the sun's 'close bosom-friend', as if the season were a person with friendships. Giving human qualities to something that is not human is personification.",
    not: {
      Simile: "Nothing is compared using 'like' or 'as'.",
      Hyperbole:
        'Nothing is exaggerated: autumn is given a friendship, not made bigger than it is.',
      Oxymoron: 'No two words here contradict each other.',
    },
    more: "Making autumn the sun's close friend presents the season as warm and generous, working with nature to ripen the fruit.",
    tip: "Explain the relationship: 'Personifying autumn as the sun's friend presents the season as warm and generous.'",
  },
  '"Half a league, half a league,\nHalf a league onward,"': {
    why: "'Half a league' is repeated three times. Repeating words or phrases for effect is repetition.",
    not: {
      Onomatopoeia:
        'Onomatopoeia is a word that imitates a sound. The rhythm may suggest hooves, but no word here is a sound word.',
      Oxymoron: 'No two words here contradict each other.',
      Personification: 'Nothing is given human qualities.',
    },
    more: 'The repetition creates a steady, driving rhythm like galloping horses, carrying the soldiers onward towards the charge.',
    tip: "Link rhythm to meaning: 'The repetition creates a relentless rhythm that mirrors the cavalry's advance.'",
  },
  '"I have no way, and therefore want no eyes;\nI stumbled when I saw."': {
    why: 'Gloucester, now blind, says he stumbled when he could see, which sounds impossible. It holds a truth: with his eyes he misjudged his sons, and only blindness has shown him who loved him. That is a paradox.',
    not: {
      Oxymoron:
        'No two contradictory words are joined in one phrase; the contradiction lies in the whole statement.',
      Hyperbole:
        'Nothing is exaggerated: Gloucester says it quietly, as a sad truth about himself.',
      Euphemism:
        'A euphemism softens something unpleasant. Gloucester names his blindness and his mistake plainly.',
    },
    more: "'Want' here means 'need': having nowhere to go, he needs no eyes. Sight and blindness run through King Lear, where the characters who can see are often the blindest to the truth.",
    tip: "Unpack the paradox through the plot: 'Gloucester's paradox shows that he saw the truth only after losing his sight.'",
  },
  '"Tyger, Tyger, burning bright,\nIn the forests of the night"': {
    why: "The tiger is described as 'burning bright', as if it were on fire. Describing something as if it were something else is a metaphor: its stripes become flames in the dark.",
    not: {
      Hyperbole:
        'Hyperbole exaggerates size or amount. Imagining the tiger as fire changes what it is, not how big it is.',
      Onomatopoeia: 'No word here imitates a sound.',
      Oxymoron: 'No two words here contradict each other.',
    },
    more: "Burning suggests the tiger's fierce colour and energy, something dangerous that shines out against the dark forest.",
    tip: "Explore what it suggests: 'The metaphor of burning suggests the tiger's fierce, dangerous energy.'",
  },
  '"Words, words, words."': {
    why: 'Hamlet answers Polonius, who asks what he is reading, with one word said three times. Repeating a word for effect is repetition.',
    not: {
      Onomatopoeia:
        "Onomatopoeia is a word that imitates a sound. 'Words' names what is on the page; it does not echo a noise.",
      Oxymoron: 'No two contradictory words are joined; the same word comes three times.',
      Simile: "Nothing is compared using 'like' or 'as'.",
    },
    more: "Hamlet is pretending to be mad, and the empty reply mocks Polonius's question: a book is only words to him. The repetition makes the answer sound bored, cutting and slightly crazed.",
    tip: "Comment on tone: 'The repetition gives Hamlet's reply a mocking, weary tone that keeps Polonius at a distance.'",
  },
  '"my way of life\nIs fall\'n into the sere, the yellow leaf"': {
    why: "Macbeth describes his life as a leaf that has turned dry and yellow, as leaves do in autumn. Describing one thing as if it were another, without 'like' or 'as', is a metaphor.",
    not: {
      Personification:
        "Personification gives human qualities to something not human. Here it is the other way round: a man's life is pictured as a dying leaf.",
      Hyperbole:
        'Nothing is exaggerated: Macbeth quietly admits that his life is in its last season.',
      Oxymoron: 'No two contradictory words are joined in one phrase.',
    },
    more: "'Sere' means dry and withered. With his enemies closing in, Macbeth sees that the old age he hoped for, with honour, love and friends, will never be his.",
    tip: "Link the image to his fall: 'The metaphor of the yellow leaf shows Macbeth's life withering, empty of everything he had hoped for.'",
  },
  '"There is a tide in the affairs of men,\nWhich, taken at the flood, leads on to fortune"': {
    why: "Brutus describes the chances of life as a tide: catch it at its height and it carries you to success. Describing one thing as if it were another, without 'like' or 'as', is a metaphor.",
    not: {
      Hyperbole: 'Nothing is exaggerated: Brutus gives a measured argument for acting now.',
      Simile:
        "There is no 'like' or 'as': human affairs are said to have a tide, not compared to one.",
      Euphemism:
        'A euphemism softens something unpleasant. Brutus is urging action, not disguising anything.',
    },
    more: 'Brutus uses the image to persuade Cassius to march to Philippi at once. The metaphor sounds wise, but his choice of moment leads to defeat, which gives the line its irony.',
    tip: "Comment on persuasion: 'The extended metaphor of the tide makes Brutus's decision sound like wisdom about life itself.'",
  },
  '"Denmark\'s a prison."': {
    why: "Hamlet says Denmark is a prison, without 'like' or 'as'. Describing one thing as if it were another is a metaphor: he feels trapped in his own country.",
    not: {
      Personification:
        'Denmark is given no human action or feeling; it is pictured as a place of confinement.',
      Allusion:
        'An allusion refers to another text, story or person. Hamlet refers to nothing outside the play.',
      Simile: 'A simile would say Denmark is like a prison. Here it simply is one.',
    },
    more: 'Rosencrantz and Guildenstern have been sent to spy on him. To Hamlet, the court of the uncle who killed his father is a place where he is watched and cannot act.',
    tip: "Explain the feeling behind the image: 'The metaphor shows Hamlet's sense of being trapped and watched at court.'",
  },
  '"As the sun rose, the city became a furnace."': {
    why: "The city is said to become a furnace: a metaphor for the rising heat. 'As' here means 'while', a word about time, not a comparison.",
    not: {
      Simile:
        "A simile compares using 'like' or 'as'. This 'as' only says when it happened, and the city is a furnace, not like one.",
      Personification:
        'Nothing is given human qualities: neither the sun rising nor the city becoming a furnace is a human action.',
      Onomatopoeia: 'No word here imitates a sound.',
    },
    more: 'A furnace is a closed space of fierce heat, so the metaphor makes the city feel stifling and impossible to escape.',
    tip: "Check what 'as' and 'like' are doing before you call something a simile: here 'as' tells you when.",
  },
  '"Dad would like us to think the shed is his castle."': {
    why: "Dad calls his shed a castle: a metaphor. 'Like' here is a verb meaning 'want', so it compares nothing.",
    not: {
      Simile:
        "A simile compares using 'like' or 'as'. Here 'like' means 'want': nothing is being compared with it.",
      Personification: 'Nothing is given human qualities: the shed does nothing a person does.',
      Onomatopoeia: 'No word here imitates a sound.',
    },
    more: 'A castle is a place of power and safety, so the metaphor gently mocks how grand and protective Dad feels about a garden shed.',
    tip: "Name the tone as well as the device: 'The metaphor gently mocks Dad's pride in his shed.'",
  },
  '"Your face, my thane, is as a book where men\nMay read strange matters."': {
    why: "Lady Macbeth compares her husband's face to a book using 'as': anyone can read his thoughts in it. A comparison with 'as' is a simile, even after 'is'.",
    not: {
      Metaphor:
        "'Is' looks like a metaphor, but 'as a book' keeps the comparison open: his face is like a book, a simile.",
      Personification:
        "Personification gives human qualities to something not human. Macbeth's face is already human.",
      Hyperbole: 'Nothing is exaggerated: she warns him calmly that his face gives him away.',
    },
    more: "The simile shows Lady Macbeth's control: she can see his guilty thoughts, so others can too, and she tells him to hide them before Duncan arrives.",
    tip: "Use the simile to show the relationship: 'The simile shows Lady Macbeth reading, and directing, her husband.'",
  },
  '"And like a thunderbolt he falls."': {
    why: "The eagle's dive is compared to a thunderbolt using 'like', so this is a simile.",
    not: {
      Metaphor: "A metaphor would say he is a thunderbolt. 'Like' makes this a comparison.",
      Personification:
        "The eagle is simply called 'he' here; in this line he does nothing a person would.",
      Onomatopoeia:
        "Onomatopoeia is a word that sounds like what it names, such as 'crash'. 'Thunderbolt' does not imitate a sound.",
    },
    more: "A thunderbolt is sudden, bright and deadly, so the simile ends the poem with a burst of speed and power after the eagle's stillness.",
    tip: "Comment on placement: 'Ending on the simile turns the eagle's stillness into a sudden, violent drop.'",
  },
  '"The dismal quarter of Soho ... seemed, in the lawyer\'s eyes, like a district of some city in a nightmare."':
    {
      why: "Soho is compared to 'a district of some city in a nightmare' using 'like', so this is a simile.",
      not: {
        Metaphor:
          "A metaphor would say Soho is a nightmare city. 'Seemed ... like' makes this a comparison.",
        Personification:
          'Nothing is given human qualities: the streets are described, not made to act like people.',
        Hyperbole:
          'Utterson is not exaggerating for effect; the simile gives his feeling that the place is unreal.',
      },
      more: 'A nightmare is frightening and unreal, so the simile makes London feel strange and threatening, the kind of place where Hyde belongs.',
      tip: "Link setting to theme: 'The simile turns London into a nightmare, fitting a story about hidden evil.'",
    },
  '"Voices of boys rang saddening like a hymn"': {
    why: "The boys' voices are compared to a hymn using 'like', so this is a simile.",
    not: {
      Metaphor: "A metaphor would say the voices were a hymn. 'Like' makes this a comparison.",
      Personification: 'The voices belong to boys, so nothing non-human is given human qualities.',
      Hyperbole: 'Nothing is exaggerated: the voices are described as they sound to him.',
    },
    more: 'A hymn is sung in church, often at funerals, so the simile makes the happy voices of boys at play sound mournful to the injured soldier.',
    tip: "Explore the contrast the simile creates: 'Happy voices sound like a hymn to him, a reminder of the life he has lost.'",
  },
  '"I see a lily on thy brow"': {
    why: "There is no real lily: the speaker means the knight's forehead is as pale as a lily. Describing one thing as if it were another is a metaphor.",
    not: {
      Simile: 'A simile would say his brow is like a lily. Here the lily is simply on his brow.',
      Personification: 'Nothing is given human qualities: the knight is already human.',
      Euphemism:
        "A euphemism softens something unpleasant. The lily makes the knight's sickness clearer, not gentler.",
    },
    more: 'Lilies are pale and are often linked with death, so the metaphor suggests the knight is ill and fading.',
    tip: "Explore the connotations: 'The metaphor of the lily suggests a deathly pallor.'",
  },
  '"I have no spur\nTo prick the sides of my intent"': {
    why: 'Macbeth pictures his plan as a horse that needs spurring on. Describing his intent as if it were a horse is a metaphor.',
    not: {
      Simile:
        'There is no comparing word: his intent is treated as a horse, not said to be like one.',
      Personification: "His intent is given a horse's sides, not a person's qualities.",
      Hyperbole: 'Nothing is exaggerated: Macbeth admits calmly that he has no reason to act.',
    },
    more: 'A rider spurs a horse to make it go. Macbeth admits nothing drives his plan except ambition, and the image of riding hints at a fall to come.',
    tip: "Explain what the image reveals about motive: 'The metaphor shows Macbeth knows he has no good reason to kill.'",
  },
  '"Hard and sharp as flint, from which no steel had ever struck out generous fire"': {
    why: "Flint is hard, and striking it with steel makes sparks. Dickens says no steel ever struck 'generous fire' from Scrooge: nothing anyone does draws warmth or kindness out of him.",
    not: {
      'He is old and slowly crumbling away':
        'Flint is one of the hardest stones; it does not crumble. The simile stresses how unyielding he is.',
      'He hides a fiery temper':
        'The point is that no fire ever comes out of him: there is no warmth inside to strike.',
      'He is easily hurt by others':
        'Flint is hard and sharp, so the simile suggests he hurts others, not that he is fragile.',
    },
    more: "Fire stands for warmth and generosity here. The image prepares for the story's question: can anything strike a spark from Scrooge? The ghosts will try.",
    tip: "Use the detail of the image: 'The flint simile suggests a man from whom no generosity can be struck.'",
  },
  '"O, full of scorpions is my mind, dear wife!"': {
    why: "Scorpions sting and cannot be ignored. Macbeth's mind is crawling with stinging thoughts: his fear of Banquo and Fleance, who still live, gives him no rest.",
    not: {
      'It is sharp and quick to plan':
        'Scorpions are dangerous to the one who holds them. The image is of pain and torment, not cleverness.',
      'It is calm now the deed is done':
        "He is far from calm: Duncan's murder has filled his mind with new fears.",
      'It is planning to poison his wife':
        "The scorpions are inside his own mind, and they hurt him. He calls his wife 'dear' and is confiding in her.",
    },
    more: 'After the murder, Macbeth has the crown but no peace. The metaphor shows guilt and fear turning his mind into a place of constant torment.',
    tip: "Connect the image to the change in Macbeth: 'The metaphor shows that gaining power has brought him torment, not peace.'",
  },
  '"So we beat on, boats against the current, borne back ceaselessly into the past."': {
    why: "A boat rowing against the current works hard but is carried backwards. Nick suggests people strive towards the future yet are 'borne back ceaselessly into the past'.",
    not: {
      'They travel easily to wherever they choose to go':
        'Rowing against a current is hard work, and the boats are carried back, not free.',
      'They are lost at sea in a storm':
        'There is no storm in the image: it is a steady current, and the boats know where they want to go.',
      'They race one another to the future':
        'The boats are not racing each other; they are all pushed back by the same current.',
    },
    more: "The final line of the novel turns Gatsby's dream into everyone's: we keep reaching for a future that the past will not let go.",
    tip: "Explain how the image works: 'The metaphor of boats against the current suggests a hopeless struggle to escape the past.'",
  },
  '"I weep like a child for the past."': {
    why: "Children cry openly and cannot hold back. Weeping 'like a child' shows the memory has broken through his adult control: the song has carried him helplessly back.",
    not: {
      'He is putting on a show of tears':
        "The poem says it happens 'in spite of myself': the tears come against his will, not as a performance.",
      'He is weeping for a lost child':
        "He weeps for 'the past', his own childhood, not for a child he has lost.",
      'He finds the memory funny now':
        'Weeping is grief, not laughter: the memory hurts because that time is gone.',
    },
    more: "The simile completes the poem's journey: a grown man listening to a singer is turned back into the boy under the piano, longing for what is gone.",
    tip: "Show how the simile resolves the poem: 'The simile reduces the adult speaker to a child again, overwhelmed by nostalgia.'",
  },
  '"My bounty is as boundless as the sea,\nMy love as deep"': {
    why: "The alliteration of 'bounty' and 'boundless' adds emphasis, but the simile does the measuring: her love is as boundless and as deep as the sea.",
    not: {
      Alliteration:
        "'Bounty' and 'boundless' share a first sound that stresses the words, but the sea comparison is what gives her love its size.",
      Metaphor: "A metaphor would say her love is the sea. 'As boundless as' makes this a simile.",
      Personification:
        'Nothing is given human qualities: the sea is only a measure of size and depth.',
    },
    more: "The sea has no end and no bottom that can be seen, so the simile makes Juliet's love seem infinite. She goes on: the more she gives, the more she has.",
    tip: "Name the leading device and its effect: 'The simile measures Juliet's love against the sea, suggesting it is endless.'",
  },
  '"If you can meet with Triumph and Disaster\nAnd treat those two impostors just the same"': {
    why: "Triumph and Disaster are given capital letters and called 'impostors', as if they were two people you could meet. Treating ideas as people is personification.",
    not: {
      Simile: "Nothing is compared using 'like' or 'as'.",
      'Pathetic fallacy':
        "Pathetic fallacy uses weather or nature to mirror a mood. Triumph and Disaster are ideas, and they mirror no one's feelings.",
      Euphemism:
        'A euphemism softens something unpleasant. Disaster is named plainly, not softened.',
    },
    more: 'Calling success and failure impostors suggests neither is what it seems: both are passing visitors, so a wise person is not fooled by either.',
    tip: "Explain the idea behind the device: 'Personifying Triumph and Disaster as impostors suggests both are false and temporary.'",
  },
  '"In spite of myself, the insidious mastery of song\nBetrays me back"': {
    why: "The song is given a human power: it 'betrays' the speaker, overpowering him against his will. Giving human actions to something that is not human is personification.",
    not: {
      'Pathetic fallacy':
        'Pathetic fallacy uses weather or nature to reflect a mood. A song is neither; here it acts on him as a person would.',
      Simile: "Nothing is compared using 'like' or 'as'.",
      Onomatopoeia: "No word imitates a sound: 'betrays' describes what the song does to him.",
    },
    more: "'Insidious' means creeping and harmful, so the song becomes a traitor that tricks a grown man back into his childhood.",
    tip: "Pair the device with a key word: 'The personification of song as a traitor shows how powerless the speaker is against memory.'",
  },
  '"Dawn massing in the east her melancholy army\nAttacks once more in ranks on shivering ranks of grey"':
    {
      why: "Dawn usually brings light and hope, but here it masses 'her melancholy army' and 'attacks'. The soldiers' real enemy is the weather: even the morning comes at them as a hostile force.",
      not: {
        'The battle is finally over':
          "The refrain that follows, 'But nothing happens', shows nothing has ended: the waiting and the cold go on.",
        'Daylight brings the men hope':
          "The army is 'melancholy' and it attacks: dawn brings more misery, not hope.",
        'The soldiers are marching home':
          "The ranks are the dawn's, made of grey cloud, not men going home.",
      },
      more: 'Owen reverses the usual meaning of dawn. Nature, not the Germans, is the enemy in Exposure, and each grey morning is another attack the men must endure.',
      tip: "Explain the reversal: 'Personifying dawn as an attacking army turns the hope of morning into another assault.'",
    },
  '"The fog still slept on the wing above the drowned city"': {
    why: "Something asleep lies heavy and does not move. The fog that 'slept' over the city has settled, thick and unmoving, smothering London in darkness.",
    not: {
      'It is about to lift and clear':
        'Sleep suggests stillness, not movement: the fog shows no sign of clearing.',
      'It is soft and comforting':
        "The city beneath it is 'drowned', so the fog smothers rather than comforts.",
      'It is racing across the sky':
        "A sleeping thing is still. 'Slept' is the opposite of racing.",
    },
    more: "The fog hides everything, just as Jekyll hides Hyde. Stevenson's settings often hold the secrecy and menace of the story itself.",
    tip: "Link setting to theme: 'The sleeping fog suggests a city smothered in secrecy, fitting a story of concealment.'",
  },
  '"Pale flakes with fingering stealth come feeling for our faces"': {
    why: "The soft 'f' sounds add a whisper, but personification does the main work: the flakes move with 'fingering stealth', 'feeling for' the men's faces like a creeping attacker.",
    not: {
      Alliteration:
        "The repeated 'f' sounds make the line soft and sinister, but sound alone does not give the snow a purpose; the human actions do.",
      Simile: "Nothing is compared using 'like' or 'as'; the snow acts directly.",
      Hyperbole: 'Nothing is exaggerated: the snow is made to act, not made bigger.',
    },
    more: 'Snow is usually gentle, but here it searches for the soldiers as an enemy would. In Exposure, nature itself is the attacker.',
    tip: "Rank the devices: 'Although the alliteration adds a whisper, the personification of the snow as fingering makes it menacing.'",
  },
  '"He clasps the crag with crooked hands"': {
    why: "The hard 'c' sounds of 'clasps', 'crag' and 'crooked' add harshness, but personification does the work: the eagle has 'hands' that clasp, like an old man's.",
    not: {
      Alliteration:
        "The repeated 'c' sounds give the line a hard, gripping sound, but they give the eagle no hands; the personification does.",
      Simile: "Nothing is compared using 'like' or 'as': the eagle simply has hands.",
      Onomatopoeia: "No word imitates a sound: 'clasps' describes a grip, not a noise.",
    },
    more: 'Giving the eagle crooked hands makes it seem old, powerful and in control, ruling its mountain like a king.',
    tip: "Separate sound and image: 'The alliteration adds harshness, but the personified hands make the eagle a powerful, almost human ruler.'",
  },
  '"The moment they began to argue, thunder rolled across the hills."': {
    why: 'The thunder arrives just as the argument starts, so the storm mirrors the anger between them. Weather reflecting human feelings is pathetic fallacy.',
    not: {
      Personification:
        'Thunder rolling is what thunder does; it is not given any human quality. The link to the argument makes it pathetic fallacy.',
      Simile: "Nothing is compared using 'like' or 'as'.",
      Hyperbole: 'Nothing is exaggerated: it is an ordinary storm, timed to match the quarrel.',
    },
    more: 'A storm is loud, violent and hard to stop, so the weather tells the reader how serious the argument is about to become.',
    tip: 'Check what the weather is linked to: if it mirrors a feeling, call it pathetic fallacy, then name the feeling.',
  },
  '"Alone in the hospital corridor, he watched the rain slide down the dark window."': {
    why: "Rain sliding down a dark window, seen by someone waiting alone in a hospital, mirrors his worry and sadness. Weather that reflects a character's feelings is pathetic fallacy.",
    not: {
      Personification:
        'The rain does nothing human: rain does slide down glass. The device is in how the weather matches his mood.',
      'Extended metaphor':
        'An extended metaphor carries one comparison through several lines. Here nothing is described as something else.',
      Hyperbole: 'Nothing is exaggerated: it is a quiet, ordinary scene.',
    },
    more: 'Rain on glass can suggest tears, and the dark window suggests the uncertain news he is waiting for.',
    tip: "Explain what the weather hints at: 'The rain sliding down the window suggests tears and his fear for what is to come.'",
  },
  '"It was on a dreary night of November, that I beheld the accomplishment of my toils."': {
    why: "Victor's creature comes to life on a 'dreary night of November'. The gloomy weather and season mirror the horror and disappointment of the moment: pathetic fallacy.",
    not: {
      Personification:
        "'Dreary' describes how gloomy the night is; the night is not given human actions or thoughts.",
      'Extended metaphor':
        'An extended metaphor carries one comparison through several lines. This sentence compares nothing: the night is a real night.',
      Hyperbole: 'Nothing is exaggerated: the night is simply described as dreary.',
    },
    more: "The dark, cold season prepares the reader for the horror that follows: Victor's dream becomes a nightmare the moment it succeeds.",
    tip: "Link setting to outcome: 'The dreary November night foreshadows the horror of Victor's creation.'",
  },
  '"The sedge has withered from the lake,\nAnd no birds sing."': {
    why: "The dead sedge and silent birds make a bleak, lifeless landscape that mirrors the knight's sick, abandoned state. Nature reflecting a character's condition is pathetic fallacy.",
    not: {
      Personification:
        'The sedge and birds do nothing human: plants wither and birds fall silent in winter.',
      Simile: "Nothing is compared using 'like' or 'as'.",
      Oxymoron: 'No two words here contradict each other.',
    },
    more: "A lake with no birdsong is unnaturally silent, so the knight's world seems drained of life, just as he is.",
    tip: "Connect landscape and character: 'The withered sedge reflects the knight's wasting away.'",
  },
  '"For now these hot days, is the mad blood stirring."': {
    why: "Benvolio links the heat to tempers: in 'these hot days' the 'mad blood' is stirring. The weather matches, and seems to feed, the violent mood: pathetic fallacy.",
    not: {
      Personification:
        "The 'mad blood' is the young men's own; nothing non-human is given human qualities.",
      Simile: "Nothing is compared using 'like' or 'as'.",
      Hyperbole: 'Nothing is exaggerated: Benvolio gives a calm warning about the heat.',
    },
    more: 'Moments later Tybalt arrives and Mercutio is killed, so the hot weather sets up the turning point of the play.',
    tip: "Use the weather to explain the plot: 'The heat reflects the rising tempers that lead to Mercutio's death.'",
  },
  '"The night has been unruly: where we lay,\nOur chimneys were blown down"': {
    why: 'On the night Duncan is murdered, Lennox reports a wild storm. The disorder in nature mirrors the disorder of killing a king: pathetic fallacy.',
    not: {
      'Extended metaphor':
        'An extended metaphor carries one comparison through several lines. Lennox is reporting a real storm, not making a comparison.',
      Hyperbole: 'Lennox reports what happened: chimneys really were blown down.',
      Oxymoron: 'No two words here contradict each other.',
    },
    more: "Jacobeans believed a king was chosen by God, so killing one would throw nature itself into chaos. The storm shows the crime's enormity.",
    tip: "Use context: 'The unruly night reflects the Jacobean belief that regicide disrupts the natural order.'",
  },
  '"It was already one in the morning; the rain pattered dismally against the panes"': {
    why: "'Dismally' means gloomily. Victor is about to see his creature move for the first time, yet the rain sounds miserable: the weather warns that his triumph will bring horror.",
    not: {
      'Relief that his work is finished':
        "Nothing in 'dismally' suggests relief; the word is heavy with gloom.",
      'A calm and sleepy evening':
        'It is one in the morning and he is anxious, close to agony. The rain is dismal, not soothing.',
      'Excitement about what will come next':
        "Victor may feel excited, but the weather does not: 'dismally' strikes the opposite note.",
    },
    more: 'Shelley builds dread through small details: the late hour, the dismal rain, the candle nearly burnt out. Each signals that something is about to go wrong.',
    tip: "Name the contrast: 'The dismal rain undercuts Victor's triumph, warning the reader of the horror to come.'",
  },
  '"Furious fans flooded the field, flags flapping."': {
    why: "'Furious', 'fans', 'flooded', 'field', 'flags' and 'flapping' all start with 'f'. Repeating the first sound of nearby words is alliteration, whatever the sound.",
    not: {
      Sibilance:
        "Sibilance is the hiss of 's', 'sh' and 'z'. 'F' is a soft sound too, but it is not a hiss, so this is alliteration.",
      'Internal rhyme':
        "No two words rhyme: 'fans' and 'flags' share a first sound, not an ending.",
      Personification: 'The fans are already people; nothing non-human is given human qualities.',
    },
    more: "The breathy 'f' sounds rush along like the crowd itself, so the line feels fast and excited.",
    tip: "Do not call every soft sound sibilance: 'f' is alliteration; sibilance needs 's', 'sh' or 'z'.",
  },
  '"From forth the fatal loins of these two foes"': {
    why: "'From', 'forth', 'fatal' and 'foes' all begin with 'f'. Repeating the first sound of nearby words is alliteration.",
    not: {
      Onomatopoeia: 'No word imitates a sound.',
      'Internal rhyme': 'No two words in the line rhyme: they share a first sound, not an ending.',
      Personification:
        'Nothing non-human is given human qualities: the loins and the foes are the two families.',
    },
    more: "The alliteration links 'fatal' to 'foes', so the families' hatred and the deaths it causes are joined in one breath before the story begins.",
    tip: "Connect the sound to theme: 'The alliteration binds the families' hatred to the fate of their children.'",
  },
  '"Hover through the fog and filthy air."': {
    why: "'Fog' and 'filthy' begin with the same 'f' sound, close together in the witches' chant. Repeating the first sound of nearby words is alliteration.",
    not: {
      Sibilance: "There are no hissing 's' sounds here: the repeated sound is 'f'.",
      Onomatopoeia: 'No word imitates a sound.',
      Personification: 'Nothing is given human qualities: the witches are the ones who hover.',
    },
    more: "The breathy 'f' sounds give the chant a foul, spitting quality, and 'filthy' makes the witches' world feel dirty and corrupt.",
    tip: "Comment on the chant: 'The alliteration gives the witches' words the sound of a spell.'",
  },
  '"Let me not to the marriage of true minds"': {
    why: "'Me', 'marriage' and 'minds' share the same 'm' sound. Repeating the first sound of nearby words is alliteration.",
    not: {
      Sibilance: "Sibilance repeats hissing 's' sounds. The repeated sound here is a soft 'm'.",
      Onomatopoeia: 'No word imitates a sound.',
      Personification: "Nothing is given human qualities: 'minds' are people's minds.",
    },
    more: "The soft 'm' sounds give the opening a calm, measured tone, fitting a poem that defines love as steady and unchanging.",
    tip: "Link tone to argument: 'The gentle alliteration sets a calm, certain tone for Shakespeare's definition of love.'",
  },
  '"Of that colossal wreck, boundless and bare"': {
    why: "'Boundless' means without limits and 'bare' means empty. The alliteration ties the two together, stressing a desert that stretches forever with nothing left in it.",
    not: {
      "How rich the king's empire was":
        'Nothing of the empire is left: the desert around the wreck is bare.',
      'How loud the desert wind is':
        'The line describes space and emptiness; nothing in it is a sound.',
      'How quickly the statue was built':
        'The line is about what surrounds the ruin now, not how it was made.',
    },
    more: 'The emptiness is the point of the poem: a king who boasted of his works is surrounded by nothing at all.',
    tip: "Explain what the sound stresses: 'The alliteration of boundless and bare emphasises the emptiness that has swallowed his power.'",
  },
  '"The hostess pressed the guests to finish their dessert."': {
    why: "Hissing sounds fill the middle and ends of words: 'hostess', 'pressed', 'guests', 'finish', 'dessert'. Repeated 's', 'sh' and 'z' sounds anywhere in nearby words make sibilance.",
    not: {
      Alliteration:
        'Alliteration repeats the FIRST sound of nearby words. These words start with different sounds; the hiss is inside them.',
      Onomatopoeia: 'No word imitates a sound.',
      Personification:
        'The hostess and guests are people; nothing non-human is given human qualities.',
    },
    more: "Sibilance need not start a word. Hidden hisses can make a line sound hushed, fussy or insistent, here the hostess's quiet pressure.",
    tip: 'Look inside words for sibilance, not just at the start, and say what the hiss suggests.',
  },
  '"Sudden successive flights of bullets streak the silence."': {
    why: "The 's' sounds of 'sudden successive', 'streak' and 'silence' hiss through the line. A run of hissing 's' sounds is sibilance.",
    not: {
      Onomatopoeia:
        'No word imitates a sound: the line is about bullets passing, and it ends in silence.',
      Personification: 'Nothing is given human qualities: bullets streaking is what bullets do.',
      Simile: "Nothing is compared using 'like' or 'as'.",
    },
    more: "The hiss suggests bullets cutting the air, yet the line ends on 'silence', and the next calls them less deadly than the air. In Exposure the weather kills.",
    tip: "Use the next line too: 'The sibilance of the bullets is followed by the claim that they are less deadly than the air.'",
  },
  '"Storm\'d at with shot and shell"': {
    why: "The 's' and 'sh' sounds of 'storm'd', 'shot' and 'shell' hiss through this short line. Repeated hissing sounds are sibilance.",
    not: {
      Onomatopoeia:
        "No word imitates a sound: 'shot' and 'shell' name what is fired, not its noise.",
      Personification: 'Nothing is given human qualities: the soldiers are attacked by real guns.',
      Hyperbole: 'Nothing is exaggerated: the cavalry really were fired on from all sides.',
    },
    more: 'The hissing sounds suggest shells flying through the air around the riders, adding to the sense of danger on every side.',
    tip: "Pair the sound with the situation: 'Sibilance suggests the hiss of shells flying around the riders.'",
  },
  '"And the sheen of their spears was like stars on the sea"': {
    why: "'Sheen', 'spears', 'stars' and 'sea' fill the line with soft 's' and 'sh' sounds. A run of hissing sounds is sibilance.",
    not: {
      Onomatopoeia: "No word imitates a sound: 'sheen' is a shine, seen not heard.",
      Personification: 'Nothing is given human qualities: the spears only shine.',
      Hyperbole: 'Nothing is exaggerated: the comparison is to light, not a claim of size.',
    },
    more: 'The soft sounds make the army seem beautiful and glittering, which makes its sudden destruction later in the poem more striking.',
    tip: "Say how the sound shapes our view: 'Sibilance makes the army sound beautiful, even as it comes to destroy.'",
  },
  '"spools of suffering"': {
    why: "The soft 's' sounds hush the phrase, matching the quiet of the darkroom, where the photographer works almost like a priest. The calm sound sits against the pain the films hold.",
    not: {
      'Excitement at a good photograph':
        'The films hold suffering; the hushed sounds suggest solemn care, not excitement.',
      'The noise of a busy newsroom':
        'He is alone in his darkroom, and the soft sounds are quiet, not busy.',
      'Anger at the editor':
        'The editor appears later in the poem; this phrase is hushed, not angry.',
    },
    more: "Duffy sets calm sound against terrible content, so the photographer's ordered work makes the horror he records feel more shocking.",
    tip: "Show the tension: 'The soft sibilance contrasts the calm darkroom with the horror the films contain.'",
  },
  '"Worried by silence, sentries whisper, curious, nervous"': {
    why: "The 's' sounds of 'silence', 'sentries' and 'whisper' keep the line hushed. The men are afraid to make a noise, so the quiet is full of tension, not peace.",
    not: {
      'The roar of an attack':
        'Nothing attacks: the line is hushed, and the refrain says nothing happens.',
      'A relaxed, sleepy calm':
        "'Worried', 'curious' and 'nervous' show the quiet is anxious, not relaxed.",
      'Cheerful talk among friends':
        'The sentries whisper because they are afraid; nothing here is cheerful.',
    },
    more: 'Owen builds tension from silence itself. The soldiers wait for an attack that never comes, and the hush makes the waiting worse.',
    tip: "Link sound to feeling: 'The sibilance creates a hushed tension as the sentries wait for an attack.'",
  },
  '"We took the slow road home."': {
    why: "The long 'o' vowel sound repeats in 'slow', 'road' and 'home'. Repeating a vowel sound in nearby words is assonance.",
    not: {
      Alliteration:
        "Alliteration repeats the first consonant of nearby words. 'Slow', 'road' and 'home' start with different sounds; they share a vowel.",
      'Internal rhyme':
        "Rhymes share their endings, as 'road' and 'load' do. 'Slow', 'road' and 'home' end differently, so they only share a vowel.",
      Onomatopoeia: 'No word imitates a sound.',
    },
    more: 'Long vowels take longer to say, so the line itself slows down, matching the unhurried journey home.',
    tip: "Comment on pace: 'The assonance of long vowels slows the line, matching the slow journey.'",
  },
  '"The deep green bay was calm in the evening heat."': {
    why: "The long 'ee' sound repeats in 'deep', 'green', 'evening' and 'heat'. Repeating a vowel sound in nearby words is assonance.",
    not: {
      Alliteration:
        'No two nearby words begin with the same consonant; the repeated sound is a vowel inside them.',
      Sibilance: "There is no run of hissing 's' sounds here.",
      Onomatopoeia: 'No word imitates a sound.',
    },
    more: "The stretched 'ee' sounds make the line feel slow and drowsy, like the stillness of a warm evening.",
    tip: "Name the vowel and its effect: 'The long ee sounds create a drowsy, peaceful mood.'",
  },
  '"I hike by the wide river at nine."': {
    why: "The long 'i' sound repeats in 'I', 'hike', 'by', 'wide' and 'nine'. Repeating a vowel sound in nearby words is assonance.",
    not: {
      Alliteration:
        'The words begin with different consonants; what repeats is the vowel inside them.',
      Onomatopoeia: 'No word imitates a sound.',
      Sibilance: "There is no run of hissing 's' sounds.",
    },
    more: 'Repeated vowels bind a line together, giving it a sound pattern without full rhyme.',
    tip: 'To spot assonance, say the line aloud and listen for the same vowel, ignoring the spelling.',
  },
  '"Hunched in the mud, the drummer struggled up."': {
    why: "The short 'u' sound repeats in 'hunched', 'mud', 'drummer', 'struggled' and 'up'. Repeating a vowel sound in nearby words is assonance.",
    not: {
      Alliteration: 'These words begin with different consonants; the repeated sound is the vowel.',
      'Internal rhyme': "No two words rhyme: 'mud' and 'up' share a vowel but end differently.",
      Onomatopoeia: 'No word imitates a sound.',
    },
    more: "The short, dull 'u' sound is thick and heavy in the mouth, so the line feels as heavy as the mud.",
    tip: "Link the vowel to the scene: 'The dull u sounds weigh the line down, like the mud itself.'",
  },
  '"The cool blue room smelled of food."': {
    why: "The long 'oo' sound repeats in 'cool', 'blue', 'room' and 'food'. Repeating a vowel sound in nearby words is assonance.",
    not: {
      Alliteration:
        "Alliteration repeats first consonants. 'Cool', 'blue', 'room' and 'food' all begin differently; only the vowel repeats.",
      'Internal rhyme':
        "Rhyme needs the same ending as well as the vowel. 'Cool', 'room' and 'food' end in different sounds, so this is assonance, not rhyme.",
      Sibilance: "There is only one 's' sound in the line, in 'smelled'; one is not a run.",
    },
    more: 'Assonance is the near relation of rhyme: the vowels match but the endings do not, so the pattern is felt rather than heard as a chime.',
    tip: 'Test for rhyme by the ending: if only the vowel matches, call it assonance.',
  },
  '"The slow, low notes rolled across the frozen lake."': {
    why: "Long 'o' vowels in 'slow', 'low', 'notes', 'rolled' and 'frozen' take time to say, so the line drags like a lament. The sound adds a heavy, sad mood.",
    not: {
      'A quick and lively beat':
        'Long vowels slow a line down; quick lines use short vowels and clipped consonants.',
      'A harsh, violent sound': "Nothing harsh here: the 'o' sounds are round and soft.",
      'A cheerful, playful tone': 'Low, slow notes over a frozen lake suggest sadness, not play.',
    },
    more: 'Poets use long vowels to slow the reader down at moments of grief or awe, and short vowels to speed up action.',
    tip: "Name the vowel and its pace: 'The long o sounds slow the line, creating a mournful tone.'",
  },
  '"Through the long, slow afternoon, the old dog dozed in the doorway."': {
    why: "Long vowels in 'slow', 'old' and 'dozed' stretch the line out, so it moves as sleepily as the dog. The sound creates a lazy, drowsy pace.",
    not: {
      'A tense, nervous mood': 'Nothing threatens the dog; the long vowels relax the line.',
      'A sudden burst of action': 'The dog only dozes, and the long vowels slow everything down.',
      'A loud, busy scene': 'The afternoon is quiet and still; nothing here is loud.',
    },
    more: "The 'd' alliteration of 'dog dozed in the doorway' adds a soft, heavy rhythm too, but the long vowels set the pace.",
    tip: "Comment on pace: 'Long vowels slow the line, mirroring the sleepy afternoon.'",
  },
  '"Cannon in front of them\nVolley\'d and thunder\'d"': {
    why: "'Thunder'd' echoes the deep roar of the cannon as they fire on the riders. A word that imitates the sound it names is onomatopoeia.",
    not: {
      Alliteration: 'No two nearby words begin with the same sound.',
      Sibilance: "There are no hissing 's' sounds in these lines.",
      Personification: 'Nothing is given human qualities: cannon do fire and roar.',
    },
    more: 'The thunderous sound words surround the riders with noise, so the reader feels the danger closing in from every side.',
    tip: "Link sound to danger: 'The onomatopoeia of thunder'd surrounds the brigade with the roar of the guns.'",
  },
  '"Knock, knock, knock! Who\'s there?"': {
    why: "'Knock' imitates the sound of knocking at the castle gate. A word that sounds like what it names is onomatopoeia.",
    not: {
      Sibilance: "There is no run of hissing 's' sounds.",
      Personification: 'Nothing is given human qualities: a real person is knocking.',
      Hyperbole: 'Nothing is exaggerated: someone really is knocking.',
    },
    more: "The knocking begins straight after Duncan's murder. To Macbeth it is terrifying; the Porter turns it into a joke about the gate of hell.",
    tip: "Use the sound's timing: 'The onomatopoeic knocking keeps the murder in the audience's ears even as the Porter jokes.'",
  },
  '"They were succeeded by a clanking noise, deep down below"': {
    why: "'Clanking' imitates the heavy, metallic sound of chains. A word that sounds like the noise it names is onomatopoeia.",
    not: {
      Personification: 'Nothing is given human qualities: the noise itself is only heard.',
      Hyperbole: 'Nothing is exaggerated: the clanking is described plainly.',
      Simile: "Nothing is compared using 'like' or 'as' in these words.",
    },
    more: "The clank is heard before the ghost is seen, so Scrooge, and the reader, are frightened by sound first: Marley's chains are coming.",
    tip: "Comment on building suspense: 'The onomatopoeic clanking announces Marley's ghost before it appears.'",
  },
  '"A child sitting under the piano, in the boom of the tingling strings"': {
    why: "Under the piano, the child hears the notes as a deep 'boom' right above him. The word makes the music feel huge and all around him, as a small child would hear it.",
    not: {
      'The piano is being played badly':
        'Nothing suggests bad playing: the mother is singing and smiling.',
      'A storm is raging outside':
        'The boom comes from the strings above him, not from the weather.',
      'His mother is shouting at him':
        "She 'smiles as she sings': the boom is the piano, not her voice.",
    },
    more: "'Boom' and 'tingling' together capture deep and high notes at once, so the memory feels physical, felt in the body as well as heard.",
    tip: "Explore the child's viewpoint: 'The onomatopoeia boom shows how overwhelming the music felt to a small child.'",
  },
  '"She gave him a sad smile and walked away."': {
    why: "A smile usually shows happiness, so 'sad smile' joins two opposite feelings in one phrase. Two contradictory words placed together make an oxymoron.",
    not: {
      Paradox:
        'A paradox is a statement that seems to contradict itself. The contradiction here is in two words side by side.',
      Irony:
        'Irony would mean she meant the opposite of her smile. Here the smile really is sad: both feelings are true.',
      Hyperbole: 'Nothing is exaggerated.',
    },
    more: 'The oxymoron captures mixed feelings in two words: she is trying to be kind, but she is hurting.',
    tip: "Unpack both halves: 'The oxymoron sad smile suggests she hides her pain behind kindness.'",
  },
  '"In a loud whisper, Ella asked if anyone had a spare pen."': {
    why: "A whisper is quiet by definition, so a 'loud whisper' contradicts itself. Two opposite words joined in one phrase make an oxymoron.",
    not: {
      Paradox:
        "A paradox is a whole statement that seems impossible but holds a truth. Here the clash is in two words, 'loud whisper'.",
      Irony: 'Nothing here means the opposite of what is said: Ella really is whispering loudly.',
      Euphemism: 'A euphemism softens something unpleasant; asking for a pen is not unpleasant.',
    },
    more: 'A loud whisper is something we all recognise: trying to be quiet and failing. The oxymoron makes a small moment comic and real.',
    tip: "Say what the contradiction shows: 'The oxymoron loud whisper suggests Ella is trying, and failing, to be discreet.'",
  },
  '"The frozen railing gave her a freezing burn."': {
    why: "We think of burns as hot, so a 'freezing burn' joins opposites. Two contradictory words placed together make an oxymoron, though extreme cold really can burn skin.",
    not: {
      Paradox:
        "A paradox is a statement that seems impossible but is true. The clash here is packed into the two words 'freezing burn'.",
      Hyperbole: 'Nothing is exaggerated: very cold metal can injure skin.',
      Simile: "Nothing is compared using 'like' or 'as'.",
    },
    more: 'The oxymoron makes the cold feel as painful and dangerous as fire, so the reader feels the shock of touching it.',
    tip: "Explain how the opposites work together: 'The oxymoron freezing burn conveys a cold so intense it hurts like fire.'",
  },
  '"Locked in that cell for ten years, he called it a living death."': {
    why: "'Living' and 'death' are opposites, joined in one phrase. Two contradictory words placed side by side make an oxymoron.",
    not: {
      Paradox:
        "A paradox is a whole statement that seems impossible. Here the contradiction is in the two-word phrase 'living death'.",
      Euphemism:
        "A euphemism softens something unpleasant. 'Living death' makes prison sound worse, not gentler.",
      Pun: 'A pun plays on two meanings of one word. Neither word here has a double meaning.',
    },
    more: 'The oxymoron says he was alive in body but dead in every way that matters: no freedom, no future.',
    tip: "Explain both halves: 'The oxymoron living death conveys a life emptied of everything that makes it worth living.'",
  },
  '"Feather of lead, bright smoke, cold fire, sick health!"': {
    why: 'Each phrase joins opposites: a feather is light but lead is heavy, smoke is dark, fire is hot. A run of contradictory pairs like this is a string of oxymorons.',
    not: {
      Paradox:
        'A paradox is a whole statement that seems impossible. These are short phrases, each a pair of opposite words: oxymorons.',
      Pun: "A pun plays on a word's double meaning. These words keep their single meanings; it is their pairing that clashes.",
      Euphemism:
        'A euphemism softens something unpleasant. Romeo is not softening anything; he is describing confusion.',
    },
    more: 'Romeo, lovesick for Rosaline, piles up contradictions to show how confused love has made him. The rush of oxymorons sounds almost too clever, hinting his love is more words than feeling.',
    tip: "Use the list to judge Romeo: 'The string of oxymorons suggests his love for Rosaline is confused and self-dramatising.'",
  },
  '"Better a witty fool than a foolish wit."': {
    why: "'Witty fool' and 'foolish wit' each join opposites: a fool is not witty, and a wit is not foolish. Contradictory words placed together in a phrase make an oxymoron.",
    not: {
      Euphemism:
        'A euphemism softens something unpleasant. Feste is not softening anything; he is joking.',
      Hyperbole: 'Nothing is exaggerated: Feste makes a neat, balanced joke.',
      Simile: "Nothing is compared using 'like' or 'as'.",
    },
    more: 'Feste, a professional fool, defends himself: a clever fool is better than a clever-seeming person who is really foolish. The mirrored phrases show his skill.',
    tip: "Comment on the character: 'The oxymorons show Feste is the wisest fool in the play.'",
  },
  '"They shared a bittersweet goodbye at the station."': {
    why: "'Bitter' and 'sweet' are opposite tastes joined in one word. The oxymoron suggests the goodbye held sadness at parting and happiness, perhaps at what they had shared.",
    not: {
      'It was angry and bitter':
        "'Bitter' here is a taste, paired with 'sweet': it means sad, not angry.",
      'It was quick and soon forgotten':
        "Nothing in 'bittersweet' suggests speed, and mixed feelings this strong are rarely forgotten.",
      'It was a relief to them both':
        "Relief would be all sweet. 'Bittersweet' keeps the sadness in too.",
    },
    more: "Single-word oxymorons such as 'bittersweet' are common in everyday speech; they work because real feelings are often mixed.",
    tip: "Name both feelings: 'The oxymoron bittersweet conveys the sadness and the happiness of parting.'",
  },
  '"Beautiful tyrant, fiend angelical,\nDove-feather\'d raven, wolvish-ravening lamb!"': {
    why: 'Juliet has just heard that Romeo has killed Tybalt. Every phrase joins something lovely to something evil, showing she still loves him but is horrified by what he has done.',
    not: {
      'She has stopped loving him':
        "'Beautiful' and 'angelical' keep her love alive, and within moments she defends him.",
      'She is afraid he will hurt her':
        'Her horror is at what he did to Tybalt; she does not fear for herself.',
      'She is joking with the Nurse':
        'She is shocked and grieving: the clash of opposites is distress, not wit.',
    },
    more: "Earlier Romeo used oxymorons about a love he barely felt. Juliet's are forced on her by events: real love colliding with real grief.",
    tip: "Explain the conflict: 'The oxymorons show Juliet torn between her love for Romeo and her horror at Tybalt's death.'",
  },
  '"The more I learn, the less I seem to know."': {
    why: 'Learning should add to what you know, yet the speaker feels they know less. A statement that seems to contradict itself but holds a truth is a paradox.',
    not: {
      Oxymoron:
        'An oxymoron joins two contradictory words in one phrase. Here the contradiction is in the whole idea.',
      Irony: 'Irony means the opposite of what is said. The speaker means this sincerely.',
      Hyperbole: 'Nothing is exaggerated; the surprise is in the logic.',
    },
    more: 'The truth inside the paradox: the more you learn, the more you see how much there is still to know.',
    tip: "Always unpack the truth in a paradox: 'The paradox suggests that learning reveals the limits of knowledge.'",
  },
  '"Sometimes you have to lose a battle to win the war."': {
    why: 'Losing seems the opposite of winning, yet a small loss can lead to a bigger victory. A statement that seems contradictory but is true is a paradox.',
    not: {
      Oxymoron:
        'No two contradictory words sit side by side; the contradiction lies in the whole statement.',
      Irony: 'Irony means the opposite of what is said. This is meant sincerely, as advice.',
      Euphemism: 'A euphemism softens something unpleasant. Losing is named plainly.',
    },
    more: 'Proverbs often use paradox because it makes advice memorable: the reader has to stop and work out the truth.',
    tip: "Explain the hidden truth: 'The paradox suggests that a short-term loss can bring long-term success.'",
  },
  '"I am never so busy as when I am on holiday."': {
    why: 'A holiday should be a rest, yet the speaker is busiest then. A statement that seems to contradict itself but can be true is a paradox.',
    not: {
      Oxymoron:
        "An oxymoron squeezes opposites into a phrase, such as 'busy rest'. Here the contradiction runs through the whole sentence.",
      Euphemism: 'A euphemism softens something unpleasant; nothing here is softened.',
      Pun: "A pun plays on a double meaning; 'busy' and 'holiday' each mean one thing.",
    },
    more: 'The paradox is true for many people: holidays fill up with plans, travel and visits, so rest becomes harder work.',
    tip: 'Tell paradox from oxymoron by size: a contradictory statement is paradox; a contradictory phrase is oxymoron.',
  },
  '"Lesser than Macbeth, and greater."': {
    why: 'The First Witch tells Banquo he is both lesser and greater than Macbeth, which seems impossible. It is true: Banquo will be less powerful, but greater in goodness and in his heirs. That is a paradox.',
    not: {
      Oxymoron:
        'An oxymoron joins opposite words into one phrase. Here the witch makes a whole contradictory claim about Banquo.',
      Irony:
        'Irony means the opposite of what is said. The witch means both halves, and both come true.',
      Pun: "A pun plays on a word's double meaning. 'Lesser' and 'greater' each keep one meaning.",
    },
    more: 'The witches speak in riddles throughout the play. Their paradoxes sound impossible, so the listener has to guess what they mean, and Macbeth guesses wrongly.',
    tip: "Explain both truths: 'The paradox suggests Banquo will be less powerful than Macbeth but morally greater.'",
  },
  '"Wisely and slow; they stumble that run fast."': {
    why: 'Running fast should get you there sooner, yet Friar Lawrence warns that it makes you stumble. Advice that seems to contradict itself but holds a truth is a paradox.',
    not: {
      Oxymoron:
        'No two contradictory words are joined in a phrase; the surprise lies in the whole piece of advice.',
      Euphemism: "A euphemism softens something unpleasant; the Friar's warning is direct.",
      Hyperbole: 'Nothing is exaggerated: it is a calm warning.',
    },
    more: "The Friar's warning matters: Romeo and Juliet rush everything, and haste leads to their deaths. The paradox states the play's lesson.",
    tip: "Link the paradox to the plot: 'The Friar's paradox warns that the lovers' haste will destroy them.'",
  },
  '"I must be cruel, only to be kind"': {
    why: 'Hamlet says he must be cruel in order to be kind, which sounds self-contradictory. It holds a truth: hard words to his mother may save her. That is a paradox.',
    not: {
      Oxymoron:
        "'Cruel' and 'kind' are opposites, but they are not joined in one phrase; the contradiction is in the whole statement.",
      Irony: 'Hamlet means what he says: he believes his cruelty is for her good.',
      Euphemism: 'A euphemism softens something unpleasant. Hamlet names his cruelty plainly.',
    },
    more: 'The paradox is now a common saying. In the play it is also self-serving: Hamlet has just killed Polonius and is justifying his harshness.',
    tip: "Explain the truth and question it: 'The paradox justifies Hamlet's harshness, but the audience may doubt his motives.'",
  },
  '"Cowards die many times before their deaths;\nThe valiant never taste of death but once."': {
    why: 'A person can only die once, yet Caesar says cowards die many times. The truth is that cowards live through death in fear again and again. A statement that seems impossible but holds a truth is a paradox.',
    not: {
      Oxymoron:
        'No two contradictory words are joined in one phrase; the impossibility is in the whole claim.',
      Euphemism: 'A euphemism softens death. Caesar names death bluntly, twice.',
      Simile: "Nothing is compared using 'like' or 'as'.",
    },
    more: "Caesar uses the paradox to dismiss his wife's fears on the morning of his murder; his courage is also blindness to the danger.",
    tip: "Use the context: 'Caesar's paradox shows his courage, but also the pride that blinds him to his fate.'",
  },
  '"And nothing is but what is not."': {
    why: 'Macbeth has been imagining murdering Duncan, and the thought shakes him so much that the world around him feels unreal; only what does not yet exist, the murder, seems real. The paradox shows a mind overwhelmed by imagination.',
    not: {
      'He is calm and certain of his plans':
        "His thought 'shakes' his whole being: he is disturbed, not calm.",
      'He has decided not to kill Duncan':
        'He has decided nothing yet; he is overwhelmed by the very idea.',
      'He no longer believes the witches':
        "The witches' prophecy is what started these thoughts, and it has just come partly true.",
    },
    more: 'This is the first time Macbeth imagines murder, and it terrifies him. The paradox shows how quickly the prophecy has taken hold.',
    tip: "Explain the paradox through character: 'The paradox shows that Macbeth's imagined crime already feels more real than the world around him.'",
  },
  '"The mansion\'s golden gates opened onto a street of cardboard beds."': {
    why: 'Golden gates, a sign of great wealth, open straight onto cardboard beds, where homeless people sleep. Placing two contrasting things side by side to make the contrast striking is juxtaposition.',
    not: {
      Oxymoron:
        'An oxymoron joins two contradictory words in one phrase. Here two separate things, the gates and the beds, are set beside each other.',
      Paradox:
        'A paradox is a statement that seems to contradict itself. This sentence is a plain description: the contrast is between things, not ideas.',
      Hyperbole: 'Nothing is exaggerated: the scene is described as it is.',
    },
    more: 'By putting wealth and poverty a few steps apart, the writer forces the reader to see the gap between them, and perhaps to feel uncomfortable about it.',
    tip: "Name what is contrasted and why: 'The juxtaposition of golden gates and cardboard beds exposes inequality.'",
  },
  '"Outside, children laughed in the sunshine; inside, the old man sat alone in the dark."': {
    why: 'Two scenes are set side by side: laughing children in sunshine, and a lonely old man in the dark. Placing contrasting things together for effect is juxtaposition.',
    not: {
      Oxymoron:
        'No two contradictory words are joined in a phrase; two whole scenes are contrasted.',
      Paradox: 'Nothing here seems self-contradictory: both scenes are perfectly possible at once.',
      Simile: "Nothing is compared using 'like' or 'as'.",
    },
    more: "The happiness outside makes the old man's loneliness feel sharper: each half of the sentence deepens the other.",
    tip: "Show how each side affects the other: 'The juxtaposition makes his isolation more painful beside the children's joy.'",
  },
  '"Her wedding dress hung in the wardrobe beside his black funeral suit."': {
    why: 'A wedding dress, a sign of joy, hangs next to a funeral suit, a sign of grief. Placing contrasting objects side by side to make the reader feel the contrast is juxtaposition.',
    not: {
      Oxymoron:
        "An oxymoron puts contradictory words into one phrase, such as 'joyful grief'. Here two separate objects are placed together.",
      Paradox:
        'Nothing in the sentence contradicts itself; it is a plain description of two sets of clothes.',
      Euphemism: 'A euphemism softens something unpleasant. The funeral is named plainly.',
    },
    more: 'Two objects can tell a whole story: a marriage and a death, hanging side by side, suggest how quickly one life followed the other.',
    tip: "Read objects as signs of the people: 'The juxtaposition of the dress and the suit compresses a marriage and a death into one image.'",
  },
  '"I had gone to bed Henry Jekyll, I had awakened Edward Hyde."': {
    why: 'The two names are placed side by side in one sentence: Jekyll at night, Hyde in the morning. Setting the respectable doctor against his evil self like this is juxtaposition.',
    not: {
      Oxymoron:
        'No two contradictory words are joined in one phrase; two names, two selves, are set against each other.',
      Pun: 'A pun plays on a double meaning. The names are used plainly here.',
      Euphemism: 'A euphemism softens something unpleasant. Jekyll states the horror directly.',
    },
    more: 'The balanced halves of the sentence mirror the split in Jekyll himself, and the change has happened without his choosing: Hyde is taking over.',
    tip: "Comment on structure: 'The juxtaposition of the two names in one balanced sentence shows Jekyll's control slipping.'",
  },
  '"I was benevolent and good; misery made me a fiend."': {
    why: "The creature sets what he was, 'benevolent and good', directly beside what he has become, 'a fiend'. Placing opposites side by side to show a change is juxtaposition.",
    not: {
      Oxymoron:
        'The opposites are in two separate clauses, not packed into one contradictory phrase.',
      Paradox:
        'Nothing contradicts itself: he was once good, and is now a fiend. Both are true at different times.',
      Euphemism: "A euphemism softens. 'Fiend' is a harsh word; nothing is softened.",
    },
    more: "The juxtaposition carries the creature's argument: he was not born evil; suffering and rejection made him so. Readers are pushed to share the blame.",
    tip: "Use the juxtaposition to explore responsibility: 'The contrast suggests society, not nature, made the creature a fiend.'",
  },
  '"Better by far you should forget and smile\nThan that you should remember and be sad."': {
    why: 'Two choices are set side by side: forgetting and smiling against remembering and being sad. Placing contrasting ideas together to make the reader weigh them is juxtaposition.',
    not: {
      Oxymoron:
        'No two contradictory words are joined in one phrase; two whole choices are compared.',
      Paradox:
        "Nothing here is self-contradictory: she simply prefers the listener's happiness to their grief.",
      Pun: 'A pun plays on a double meaning; no word here has one.',
    },
    more: "After a poem asking to be remembered, the ending reverses it: love means wanting the other person's happiness, even if it means being forgotten.",
    tip: "Comment on the turn: 'The final juxtaposition shows the speaker putting her lover's happiness before her own wish to be remembered.'",
  },
  '"Four legs good, two legs bad."': {
    why: "'Four legs' and 'good' are set directly against 'two legs' and 'bad'. Placing opposites side by side in a short, balanced slogan is juxtaposition.",
    not: {
      Oxymoron:
        'No two contradictory words are joined; the slogan sets two separate phrases against each other.',
      Paradox: 'The slogan does not contradict itself; it simply divides the world into two sides.',
      Euphemism: 'A euphemism softens. The slogan is blunt and simple.',
    },
    more: 'The slogan turns a complex idea into a chant, which is why the sheep bleat it to drown out debate. Orwell shows how simple contrasts can shut down thought.',
    tip: "Comment on purpose: 'The juxtaposition reduces Animalism to a slogan the sheep can chant without thinking.'",
  },
  '"look like the innocent flower,\nBut be the serpent under\'t."': {
    why: 'Lady Macbeth sets an innocent flower beside the serpent hiding under it. The juxtaposition tells Macbeth to look harmless and welcoming while hiding his plan to kill Duncan.',
    not: {
      'Give up the plan and stay innocent':
        "She wants him only to look innocent: 'be the serpent' tells him to keep the deadly plan.",
      'Show everyone how dangerous he is':
        "The serpent is hidden 'under' the flower; she wants the danger concealed, not shown.",
      'Protect Duncan from hidden enemies':
        'Macbeth is the hidden enemy. She is telling him how to deceive Duncan, not protect him.',
    },
    more: "The serpent recalls the tempter in the Garden of Eden, so Lady Macbeth's advice links their plot to the first fall into evil.",
    tip: "Explore the image: 'The contrast between flower and serpent captures the deceit at the heart of the Macbeths' plan.'",
  },
  '"In the glittering ballroom, a waiter wiped his cracked, sore hands on his apron."': {
    why: "The glittering ballroom is set beside the waiter's cracked, sore hands. The juxtaposition reveals the hard, painful work that keeps the luxury running, which the guests never see.",
    not: {
      'That the ballroom has not been cleaned':
        "The ballroom glitters; it is the waiter's hands that show wear, from working, not from dirt.",
      'That the waiter longs to dance':
        'Nothing suggests he wants to join in; the detail is about his work.',
      'That the party is about to end':
        "Nothing marks the end of the party; the detail is about the waiter's labour.",
    },
    more: 'Writers often slip one small detail into a grand scene to unsettle it: a single pair of hands can expose a whole world of inequality.',
    tip: "Name the contrast and the idea: 'The juxtaposition of glittering luxury and cracked hands exposes hidden labour.'",
  },
  '"The palace blazed with a thousand candles while the poor shivered in the dark outside."': {
    why: "'A thousand candles' may exaggerate the palace's splendour, but the gap is shown by placing the blazing palace beside the shivering poor in one sentence. That is juxtaposition.",
    not: {
      Hyperbole:
        'Exaggerating the candles makes the palace grander, but on its own it says nothing about the poor; the contrast does that.',
      Oxymoron: 'No two contradictory words are joined in one phrase.',
      Personification:
        "Nothing is given human qualities: 'blazed' describes light, and the poor are people.",
    },
    more: 'Dickens uses this kind of contrast often, setting comfort and suffering side by side so that readers cannot look away from the injustice.',
    tip: 'When asked which device exposes a contrast, look for two opposite things placed side by side.',
  },
  '"\'Lovely weather,\' said Dad, as the rain poured down the windows."': {
    why: 'Dad calls the weather lovely while rain pours down, so he means the opposite of what he says. Saying the opposite of what you mean is verbal irony.',
    not: {
      Hyperbole: 'Dad is not exaggerating; he says the reverse of the truth.',
      Euphemism:
        'A euphemism softens bad news with a gentler word. Dad is joking, not being gentle.',
      Paradox:
        "Nothing in 'lovely weather' contradicts itself; it is the rain that shows he means the opposite.",
    },
    more: 'Verbal irony is often dry humour: the gap between the words and the obvious truth makes the reader smile.',
    tip: "Explain the gap: 'The verbal irony of lovely weather, said in a downpour, creates dry humour.'",
  },
  '"The driving instructor failed his own driving test."': {
    why: 'We expect a driving instructor to pass a driving test easily, so his failing it is the opposite of what we expect. Events that turn against expectation are situational irony.',
    not: {
      Paradox:
        'A paradox seems to contradict itself as a statement. This one is plain; it is the situation that surprises.',
      Hyperbole: 'Nothing is exaggerated.',
      Pun: "A pun plays on a double meaning. 'Failed' and 'test' mean just one thing here.",
    },
    more: 'Irony of this kind is often comic, but it can also expose a gap between how someone appears and what they can really do.',
    tip: "Explain the expectation that is reversed: 'The irony lies in the expert failing at his own subject.'",
  },
  '"The fire station burned down last night."': {
    why: 'A fire station exists to put out fires, so its burning down is the opposite of what we would expect. Events that turn against expectation like this are situational irony.',
    not: {
      Sarcasm:
        'Sarcasm is mocking speech that says the opposite of what is meant. Nobody is speaking or mocking here; the irony is in the event.',
      Paradox:
        'A paradox is a statement that seems to contradict itself. This is a plain report; the surprise is in what happened.',
      Hyperbole: 'Nothing is exaggerated.',
    },
    more: 'Situational irony makes events feel unfair or absurd. Writers use it to show that plans and roles do not protect anyone from chance.',
    tip: "Name the kind of irony: 'Situational irony: the place meant to stop fires is destroyed by one.'",
  },
  '"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife."':
    {
      why: 'Austen pretends to state a universal truth, but the novel shows the opposite: it is the families of young women who want a rich husband. Saying one thing while meaning another is irony.',
      not: {
        Paradox:
          'The sentence does not contradict itself; it sounds perfectly reasonable, which is what makes the irony sly.',
        Euphemism: 'A euphemism softens something unpleasant; nothing here is softened.',
        Pun: 'A pun plays on a double meaning; no word here has one.',
      },
      more: "The opening sets the novel's tone: a narrator who seems to agree with society while quietly mocking its obsession with marriage and money.",
      tip: "Identify the real meaning: 'The irony reveals that it is mothers, not rich bachelors, who are in want.'",
    },
  '"This castle hath a pleasant seat."': {
    why: "Duncan praises Macbeth's castle as pleasant, but the audience knows he will be murdered there that night. When the audience knows something a character does not, the words become ironic.",
    not: {
      Paradox:
        "Duncan's words do not contradict themselves; they are ordinary praise. The audience's knowledge makes them ironic.",
      Euphemism:
        'A euphemism softens something unpleasant. Duncan is not hiding anything; he does not know.',
      Hyperbole: 'Nothing is exaggerated: it is a polite remark.',
    },
    more: "This is dramatic irony, the kind of irony where the audience knows more than the character. It makes Duncan's trust painful to watch.",
    tip: "Name the type: 'Dramatic irony: the audience knows the pleasant castle will be the scene of Duncan's murder.'",
  },
  '"For Brutus is an honourable man,\nSo are they all, all honourable men"': {
    why: "Antony keeps calling Brutus and the conspirators 'honourable' while showing the crowd that their murder of Caesar was anything but. He means the opposite of his words: verbal irony.",
    not: {
      Paradox:
        'Nothing in the words contradicts itself; the irony lies in what Antony really means.',
      Euphemism:
        "A euphemism softens something unpleasant. Antony's praise is a weapon, not a softening.",
      Oxymoron:
        'No two contradictory words are joined; the contradiction is between the praise and the truth.',
    },
    more: "Each repetition of 'honourable' grows more bitter as Antony reminds the crowd of Caesar's kindness, until the word turns the crowd against Brutus.",
    tip: "Track the change: 'Antony's ironic praise of Brutus becomes more cutting with each repetition.'",
  },
  '"\'Are there no prisons?\' said the Spirit, turning on him for the last time with his own words."':
    {
      why: "Earlier Scrooge asked 'Are there no prisons?' to avoid helping the poor. Now the Spirit throws his own words back at him, beside two wretched children. Words turned against their speaker like this are ironic.",
      not: {
        Paradox:
          'The question does not contradict itself; the irony is in who asks it now, and why.',
        Euphemism:
          "A euphemism softens something unpleasant. The Spirit's question is harsh and pointed.",
        Hyperbole: "Nothing is exaggerated; the Spirit simply repeats Scrooge's words.",
      },
      more: "The irony forces Scrooge to hear how cruel he sounded, and it makes the reader hear it too: Dickens's attack on the attitudes of his time.",
      tip: "Explain the reversal: 'The Spirit's ironic echo turns Scrooge's indifference into an accusation.'",
    },
  '"Napoleon is always right."': {
    why: 'Boxer repeats this motto loyally, but the reader can see that Napoleon is selfish and cruel, and he will betray Boxer himself. The gap between what Boxer believes and what the reader knows is irony.',
    not: {
      Paradox: 'The motto does not contradict itself; the irony is in how wrong it is.',
      Euphemism:
        'A euphemism softens something unpleasant; the motto is blind praise, not softening.',
      Pun: "A pun plays on two meanings of a word. 'Right' means correct here, and nothing more.",
    },
    more: "Orwell uses Boxer's loyalty to show how ordinary people can be manipulated: his trust in Napoleon is both moving and tragic.",
    tip: "Explain what the reader knows: 'The irony lies in Boxer's loyalty to a leader who will betray him.'",
  },
  '"There\'s no art\nTo find the mind\'s construction in the face"': {
    why: "Duncan says you cannot read a traitor's mind in his face, having just been betrayed by Cawdor. Moments later Macbeth enters, already thinking of murder, and Duncan trusts him completely: the audience watches the mistake repeat.",
    not: {
      'He has realised that Macbeth is a traitor':
        "Duncan has no suspicion of Macbeth: he greets him as 'worthiest cousin' and rewards him.",
      'He is speaking about the witches':
        'He is speaking about the traitor Cawdor, who has just been executed.',
      'He knows he will die tonight':
        'Duncan has no idea of his danger; that is what makes the moment chilling.',
    },
    more: 'Dramatic irony works through timing: the line about hidden treachery is immediately followed by the entrance of the next traitor.',
    tip: "Point to the timing: 'Macbeth's entrance straight after these words makes Duncan's trust painfully ironic.'",
  },
  '"\'Thanks for your help,\' said Mia, staring at the paint her brother had spilled across her homework."':
    {
      why: 'Mia thanks her brother while staring at the paint he spilled on her homework. Her words say the opposite of what she means: she is angry, and the thanks is ironic.',
      not: {
        'She is grateful for his help':
          'He has ruined her homework; her thanks is meant to sting, not to thank him.',
        'She wants him to help again':
          'Her words are ironic: she wants him to stop helping, not start again.',
        'She has not noticed the paint':
          "She is 'staring at the paint', so she has certainly noticed it.",
      },
      more: 'The context gives irony away: words that clash with what is happening, or with how they are said, mean the reverse.',
      tip: "Use the context as evidence: 'Mia's ironic thanks, as she stares at the spilled paint, shows her anger.'",
    },
  '"Her smile could light up the whole of London."': {
    why: 'No smile can light up a whole city. The speaker exaggerates to show how bright and warm her smile is. Deliberate exaggeration for effect is hyperbole.',
    not: {
      Simile: "Nothing is compared using 'like' or 'as'.",
      Understatement:
        'Understatement makes things sound smaller. This line makes her smile enormous.',
      Euphemism: 'A euphemism softens something unpleasant; a smile is not unpleasant.',
    },
    more: 'Hyperbole often carries admiration or love: the exaggeration tells us how the speaker feels about her.',
    tip: "Say what the exaggeration reveals: 'The hyperbole shows the speaker's admiration for her.'",
  },
  '"This is the worst day in the history of the world."': {
    why: 'The speaker claims this is the worst day in all of history, which cannot be true. The claim is literal, not a comparison, so the device is hyperbole: deliberate exaggeration.',
    not: {
      Metaphor:
        'A metaphor describes one thing as another. Here nothing is turned into anything else; the claim is simply exaggerated.',
      Irony:
        'Irony means the opposite of what is said. The speaker really does feel the day is terrible.',
      Euphemism: 'A euphemism softens. This line makes things sound as bad as possible.',
    },
    more: "Hyperbole and metaphor often appear together, as in 'a mountain of homework'. Ask: is something turned into something else? If not, it is plain hyperbole.",
    tip: 'Test for metaphor first, then hyperbole: exaggeration without a comparison is hyperbole.',
  },
  '"Earth has not anything to show more fair"': {
    why: 'Wordsworth claims nothing on Earth is more beautiful than London at dawn, an exaggeration no one could prove. Deliberate exaggeration to express strong feeling is hyperbole.',
    not: {
      Metaphor: 'The city is not described as something else; it is praised above everything.',
      Irony: 'Wordsworth means it: he is overwhelmed by the view, not mocking it.',
      Understatement:
        'Understatement shrinks a thing; this line raises the city above all the Earth.',
    },
    more: 'The opening hyperbole is surprising from a poet of nature: a city, not a mountain or a lake, has struck him as the most beautiful sight of all.',
    tip: "Comment on the surprise: 'The hyperbole elevates the city above nature itself, at least in this silent moment.'",
  },
  '"O, she doth teach the torches to burn bright!"': {
    why: 'Romeo claims Juliet is so bright that torches could learn from her, an impossible exaggeration. Deliberate exaggeration to express strong feeling is hyperbole.',
    not: {
      Simile: "Nothing is compared using 'like' or 'as'.",
      Understatement: 'Understatement makes things smaller; Romeo makes Juliet brighter than fire.',
      Euphemism: 'A euphemism softens something unpleasant; Romeo is praising, not softening.',
    },
    more: 'Light imagery follows Romeo and Juliet through the play. Here it shows Romeo instantly dazzled, forgetting Rosaline in a single moment.',
    tip: "Link to theme: 'The hyperbole of Juliet outshining the torches begins the play's imagery of light against darkness.'",
  },
  '"every idiot who goes about with \'Merry Christmas\' on his lips, should be boiled with his own pudding"':
    {
      why: 'Scrooge says anyone who wishes others a merry Christmas should be boiled in pudding, a comically extreme punishment he does not mean literally. Deliberate exaggeration is hyperbole.',
      not: {
        Euphemism: "A euphemism softens. Scrooge's words are as harsh as he can make them.",
        Understatement:
          'Understatement shrinks things; Scrooge inflates his dislike of Christmas into a grotesque punishment.',
        Simile: "Nothing is compared using 'like' or 'as'.",
      },
      more: "The hyperbole is comic, so the reader laughs at Scrooge's meanness rather than fearing it, which leaves room for him to change.",
      tip: "Comment on tone: 'Dickens's comic hyperbole makes Scrooge's hatred of Christmas absurd as well as cruel.'",
    },
  '"Here\'s the smell of the blood still: all the perfumes of Arabia will not sweeten this little hand."':
    {
      why: 'Lady Macbeth claims that every perfume of Arabia could not cover the smell of blood on her small hand, an impossible exaggeration. Hyperbole here shows how vast her guilt feels.',
      not: {
        Simile: "Nothing is compared using 'like' or 'as'.",
        Understatement:
          "'This little hand' is small, but the claim about it is enormous, the opposite of understatement.",
        Euphemism: 'A euphemism softens. She names the blood plainly and is horrified by it.',
      },
      more: "Earlier she said 'a little water clears us of this deed'. Now no perfume in the world can clean her: guilt has overturned her confidence.",
      tip: "Contrast with earlier: 'The hyperbole shows how far Lady Macbeth has fallen from her calm confidence after the murder.'",
    },
  '"The essay took me forever, and my hand has probably fallen off."': {
    why: "Nobody's hand falls off from writing. The exaggeration shows how exhausted and fed up the writer feels after a long piece of work.",
    not: {
      'Their hand is badly injured':
        "The claim is exaggeration, not fact: 'probably fallen off' is a joke about tiredness.",
      'They enjoyed writing the essay':
        "'Took me forever' is a complaint; nothing suggests enjoyment.",
      'They finished the essay quickly': "'Took me forever' says the opposite: it felt endless.",
    },
    more: 'Hyperbole in speech often signals feeling rather than fact. Reading it literally misses its point.',
    tip: "Name the feeling, not the claim: 'The hyperbole conveys the writer's exhaustion.'",
  },
  '"The multitudinous seas incarnadine,\nMaking the green one red."': {
    why: 'Macbeth says his bloody hand would turn all the seas red rather than be washed clean. The hyperbole makes his guilt feel limitless: nothing in the world can remove it.',
    not: {
      'It will soon be forgotten':
        'He imagines the guilt staining every sea; he expects it to last, not fade.',
      'He is proud of what he has done':
        'He is horrified: this follows his fear that the blood can never be washed off.',
      'He plans to sail away from Scotland':
        'The seas are imagined, not a plan to travel: he pictures his guilt spreading through them.',
    },
    more: "'Incarnadine' means to stain blood-red. The long Latin word against the short 'making the green one red' gives the line a grand then blunt rhythm.",
    tip: "Explain scale: 'The hyperbole suggests Macbeth's guilt is large enough to stain the whole world.'",
  },
  '"My feet are blocks of ice after a hundred hours of waiting in the snow."': {
    why: "'Blocks of ice' is a metaphor for frozen feet, but the waiting time is exaggerated by 'a hundred hours', which cannot be true. Exaggerating for effect is hyperbole.",
    not: {
      Metaphor:
        'The metaphor describes the feet, turning them into ice; it says nothing about time.',
      Simile: "Nothing is compared using 'like' or 'as'.",
      Understatement: 'Understatement shrinks things; a hundred hours enlarges the wait.',
    },
    more: 'Two devices share the sentence: the metaphor shows how cold, the hyperbole how long. A strong answer can name both and say what each adds.',
    tip: 'Match the device to the job: exaggerated time is hyperbole; turning feet into ice is metaphor.',
  },
  '"After twenty years at the factory, Dad was let go."': {
    why: "'Let go' is a gentle way of saying Dad lost his job. Using a mild phrase in place of a harsh one is a euphemism.",
    not: {
      Hyperbole: 'Nothing is exaggerated; the bad news is made smaller and softer.',
      Irony:
        'The phrase is not meant as the opposite of the truth; it is a softer way of saying it.',
      Oxymoron: 'No two contradictory words are joined.',
    },
    more: "Euphemisms protect people from pain, but they can also hide responsibility: 'let go' makes it sound as if no one sacked him.",
    tip: "Ask what the euphemism hides: 'The euphemism let go softens the shock of losing his job.'",
  },
  '"The company is making some staff reductions this year."': {
    why: "'Staff reductions' means people will lose their jobs. Using a vague, mild phrase in place of a harsh truth is a euphemism.",
    not: {
      Hyperbole: 'Nothing is exaggerated; if anything the news is made to sound smaller.',
      Irony: 'The phrase is not the opposite of the truth; it is a softer version of it.',
      Paradox: 'Nothing in the sentence contradicts itself.',
    },
    more: 'Businesses and governments often use euphemism to make bad news sound routine. Noticing it is a key skill for reading non-fiction.',
    tip: "In Paper 2 answers, say who benefits from the softer wording: 'The euphemism protects the company's image.'",
  },
  '"He is between jobs at the moment."': {
    why: "'Between jobs' is a polite way of saying he is unemployed. A mild phrase used in place of an uncomfortable one is a euphemism.",
    not: {
      Hyperbole: 'Nothing is exaggerated.',
      Paradox: 'Nothing contradicts itself; the phrase simply softens.',
      Pun: "A pun plays on a double meaning; 'between jobs' has only the one.",
    },
    more: "'Between' suggests a short gap with another job coming, which makes his situation sound temporary and hopeful.",
    tip: "Look at the exact words: 'Between suggests the gap is only temporary.'",
  },
  '"My little brother is a bit economical with the truth."': {
    why: "'Economical with the truth' is a polite way of saying he lies. Softening something unpleasant with a gentler phrase is a euphemism.",
    not: {
      Hyperbole:
        'Hyperbole makes things bigger; this phrase shrinks lying into something small and polite, the opposite.',
      Oxymoron: "No two contradictory words are joined; 'economical' and 'truth' do not clash.",
      Pun: 'A pun plays on a double meaning; here the phrase means one thing, lying.',
    },
    more: "'A bit' softens it further. The gentle phrasing can be comic, because everyone knows exactly what it means.",
    tip: "Comment on tone: 'The euphemism makes the brother's lying sound comic rather than serious.'",
  },
  '"Remember me when I am gone away,\nGone far away into the silent land"': {
    why: "The speaker never says 'when I am dead'. 'Gone away' and 'the silent land' are gentle phrases for death. Softening something painful with mild words is a euphemism.",
    not: {
      Hyperbole: 'Nothing is exaggerated; the language is quiet and gentle.',
      Oxymoron: 'No two contradictory words are joined.',
      Pun: "A pun plays on a double meaning for effect; these phrases simply avoid the word 'death'.",
    },
    more: "The gentle phrases soften death for the person left behind, which fits a poem more concerned with the listener's grief than the speaker's fear.",
    tip: "Explain the effect on the listener: 'The euphemisms make death sound like a journey, softening it for the one left behind.'",
  },
  '"I gave commands;\nThen all smiles stopped together."': {
    why: "The Duke never says he had his wife killed. 'I gave commands' and 'all smiles stopped' stand in for murder. Mild words in place of a terrible fact are a euphemism.",
    not: {
      Hyperbole: 'Nothing is exaggerated; the horror is hidden in very few words.',
      Oxymoron: 'No two contradictory words are joined.',
      Pun: "A pun plays on a double meaning; the Duke's words are cold, not playful.",
    },
    more: "The calm euphemism is more chilling than a confession: the Duke treats his wife's death as an order carried out, without guilt.",
    tip: "Explain the chill: 'The euphemism reveals the Duke's power and his lack of remorse.'",
  },
  '"they had better do it, and decrease the surplus population"': {
    why: "'Decrease the surplus population' means the poor dying. Scrooge uses cold, official-sounding words to avoid saying it plainly: a euphemism.",
    not: {
      Hyperbole: 'Nothing is exaggerated; the horror is hidden behind calm words.',
      Oxymoron: 'No two contradictory words are joined.',
      Pun: 'A pun plays on a double meaning; this phrase means only one thing.',
    },
    more: "The euphemism echoes the language of economists in Dickens's time, who spoke of the poor as numbers. Later the Ghost throws the words back at Scrooge.",
    tip: "Use context: 'The euphemism mocks the cold economic thinking that treated the poor as a surplus.'",
  },
  '"And may there be no moaning of the bar,\nWhen I put out to sea"': {
    why: 'Tennyson writes about his own death as putting out to sea. Describing death through a gentle image of a journey, rather than naming it, is a euphemism.',
    not: {
      Hyperbole: 'Nothing is exaggerated; the tone is calm.',
      Oxymoron: 'No two contradictory words are joined.',
      Paradox: 'Nothing in the lines contradicts itself.',
    },
    more: 'The voyage image makes death peaceful, even hopeful: the speaker asks for no grief as he sets out.',
    tip: "Explain the comfort: 'The euphemism of putting out to sea presents death as a calm journey.'",
  },
  '"Our old dog was put to sleep last week."': {
    why: "'Put to sleep' means the dog's life was ended by a vet. The gentle phrase softens a painful fact for the speaker and the listener.",
    not: {
      'To show the dog is only resting':
        "The dog has died; 'put to sleep' is a softer way of saying so.",
      'To make a joke about the dog': 'The phrase is gentle and sad, not playful.',
      'To show the vet was gentle':
        'The phrase is about softening the news, not about how the vet behaved.',
    },
    more: 'Euphemisms for death often borrow from sleep and rest, because sleep is peaceful and temporary, the opposite of what death really is.',
    tip: "Name what is softened and why: 'The euphemism spares the speaker from saying the dog died.'",
  },
  '"He that\'s coming\nMust be provided for"': {
    why: "'Provided for' sounds like hospitality, but Lady Macbeth means Duncan must be killed. The euphemism lets her talk about murder without saying the word.",
    not: {
      "To plan a feast for Duncan's visit":
        'That is what the words seem to say, which is the point: the hospitable phrase hides murder.',
      'To warn Macbeth to protect Duncan':
        'She wants Duncan dead; the line comes as she plans his murder.',
      'To show she has changed her mind':
        "She has not wavered: the next line takes the night's 'great business' into her own hands.",
    },
    more: "The double meaning is chilling: the words of a good hostess cover the plans of a murderer, just as the Macbeths' welcome will cover their crime.",
    tip: "Explain the double meaning: 'The euphemism provided for disguises murder as hospitality.'",
  },
  '"It was cold, so cold that we could not feel our hands."': {
    why: "'Cold' is said twice in a row, 'cold, so cold'. Repeating a word for emphasis is repetition.",
    not: {
      Anaphora:
        'Anaphora repeats words at the start of successive clauses or lines. Here the repeated word sits in the middle of one sentence.',
      'Rule of three': "A rule of three groups three items. 'Cold' comes twice, not three times.",
      Simile: "Nothing is compared using 'like' or 'as'.",
    },
    more: "The second 'cold', with 'so', stretches the word out, as if the speaker is still shivering as they remember it.",
    tip: "Explain the emphasis: 'Repeating cold stresses how extreme and lasting the cold felt.'",
  },
  '"The rain fell and fell and fell until the river burst its banks."': {
    why: "'Fell' is repeated three times, joined by 'and'. Repeating a word to show something going on and on is repetition.",
    not: {
      Anaphora:
        'Anaphora repeats the opening words of successive clauses. Here one verb repeats within a single clause.',
      Simile: "Nothing is compared using 'like' or 'as'.",
      Personification:
        'A river bursting its banks is a natural event; nothing is given human qualities.',
    },
    more: "The repeated 'and' and 'fell' make the sentence feel as relentless as the rain, so the flood seems unstoppable.",
    tip: "Link the repetition to time: 'Repeating fell makes the rain seem endless, building to the flood.'",
  },
  '"The answer, the only answer, was to wait."': {
    why: "'The answer' is repeated straight away and sharpened: 'the only answer'. Repeating a word or phrase for emphasis is repetition.",
    not: {
      Anaphora:
        'Anaphora needs the repeated words at the start of successive clauses or lines. This is one sentence, with the repetition in the middle.',
      'Rule of three': 'The phrase comes twice, not in a group of three.',
      Oxymoron: 'No two contradictory words are joined.',
    },
    more: 'Repeating then narrowing a phrase is a way of correcting yourself for emphasis: there was no other choice.',
    tip: "Explain what is stressed: 'The repetition stresses that waiting was the only option left.'",
  },
  '"Mankind was my business. The common welfare was my business"': {
    why: "Marley's ghost repeats 'was my business' at the END of each sentence. Repeating words for emphasis is repetition; here it turns Scrooge's favourite word against him.",
    not: {
      Anaphora:
        'Anaphora repeats words at the START of clauses. These sentences begin differently and end the same way.',
      'Rule of three': 'Two sentences repeat the phrase here, not a group of three.',
      Hyperbole: 'Nothing is exaggerated: Marley states what he should have cared about.',
    },
    more: "Scrooge has just praised Marley as 'a good man of business'. The ghost's repetition redefines business as caring for other people.",
    tip: "Explain the redefinition: 'Repeating business, Marley turns Scrooge's value of money into a duty to mankind.'",
  },
  '"O Romeo, Romeo, wherefore art thou Romeo?"': {
    why: "Juliet says 'Romeo' three times in one line. Repeating a word for emphasis is repetition, and here the repeated name is the problem she cannot get past.",
    not: {
      Anaphora:
        'Anaphora repeats words at the start of successive clauses or lines. This is one line, and the name is repeated within it.',
      Oxymoron: 'No two contradictory words are joined.',
      Euphemism: 'A euphemism softens something unpleasant; nothing is softened here.',
    },
    more: "'Wherefore' means 'why', not 'where': Juliet asks why he has to be a Montague. The repeated name shows that his name, not the man, is the obstacle.",
    tip: "Correct the common mistake: 'Wherefore means why: the repetition stresses the name that divides them.'",
  },
  '"Tomorrow, and tomorrow, and tomorrow,\nCreeps in this petty pace from day to day"': {
    why: "The repeated 'tomorrow', joined by 'and', drags on like the days themselves, which 'creep' at a 'petty pace'. Life now feels to Macbeth like a dull, endless crawl towards death.",
    not: {
      'He is excited about the future':
        "Just after hearing of his wife's death, he finds the future empty and pointless.",
      'He is counting down to victory':
        "He is not looking forward to anything; the tomorrows lead only to 'dusty death'.",
      'He wants time to slow down':
        'Time already crawls for him; he complains of its slowness, not its speed.',
    },
    more: "Soon after, he calls life 'a tale / Told by an idiot', and the repetition prepares that despair.",
    tip: "Link sound to meaning: 'The dragging repetition of tomorrow mirrors Macbeth's sense that life is meaningless.'",
  },
  '"Run, she told herself. Run, run, run."': {
    why: 'The short word comes again and again in quick bursts, like a heartbeat speeding up. The repetition shows her panic: she must escape now.',
    not: {
      'Her joy in exercise':
        'She is urging herself to flee; the repetition sounds desperate, not joyful.',
      'Her calm, careful plan':
        'Calm planning would take longer sentences; these are quick, repeated orders.',
      'Her tiredness after a race':
        'She has not started running yet: she is telling herself to go.',
    },
    more: "Short repeated words speed up the reader's pace, which is why writers use them in moments of fear or action.",
    tip: "Comment on pace: 'The repeated monosyllable run creates urgency and panic.'",
  },
  '"Again and again the waves struck the rocks like a giant\'s fist."': {
    why: "The simile, 'like a giant's fist', shows the force of each wave. But it is 'again and again' that shows the attack never stops: repetition.",
    not: {
      Simile: 'The simile gives the power of each blow, not the fact that the blows keep coming.',
      Onomatopoeia: "No word imitates a sound: 'struck' names the blow, it does not echo it.",
      Oxymoron: 'No two contradictory words are joined.',
    },
    more: 'Devices can split the work: the simile gives strength, the repetition gives endurance. Together the sea seems tireless and violent.',
    tip: "Name the device for the effect asked: 'The repetition of again and again shows the waves' attack is relentless.'",
  },
  '"Some came for the music; some came for the food."': {
    why: "Both clauses begin with the same words, 'some came'. Repeating the opening words of successive clauses is anaphora.",
    not: {
      Epistrophe:
        "Epistrophe repeats words at the END of clauses. Here the endings differ, 'music' and 'food'; the beginnings match.",
      Alliteration:
        'Alliteration repeats first sounds of nearby words. Here whole words are repeated at the start of each clause.',
      Oxymoron: 'No two contradictory words are joined.',
    },
    more: 'Anaphora sets clauses side by side so the reader notices what changes: here, the different reasons people came.',
    tip: 'Point to what changes after the repeated words: that is usually where the meaning lies.',
  },
  '"We need more doctors, we need more nurses, we need more beds, we need more time."': {
    why: "Each clause opens with 'we need more'. Repeating the opening words of successive clauses is anaphora.",
    not: {
      Epistrophe: 'Epistrophe repeats words at the END of clauses; these endings all differ.',
      'Rule of three':
        'Count the clauses: there are four, not three. The device that links them is the repeated opening.',
      Hyperbole: 'Nothing is exaggerated: each need is stated plainly.',
    },
    more: "Each repetition adds weight, so the list builds like a protest chant until the last need, 'more time', lands hardest.",
    tip: "Comment on build-up: 'The anaphora builds pressure with each demand, ending on the most urgent.'",
  },
  '"I remember the smell of the bakery. I remember the bell above the door."': {
    why: "Both sentences begin 'I remember'. Repeating the opening words of successive sentences is anaphora.",
    not: {
      Epistrophe: 'Epistrophe repeats the ENDS of clauses; these sentences end differently.',
      'Rule of three': 'There are two sentences here, not three.',
      Simile: "Nothing is compared using 'like' or 'as'.",
    },
    more: "Repeating 'I remember' makes the memories arrive one after another, as if the speaker is slowly bringing the past back to life.",
    tip: "Comment on memory: 'The anaphora of I remember layers detail upon detail, recreating the past.'",
  },
  '"This is our town. This is our river. This is our home."': {
    why: "Each sentence begins 'This is our'. Repeating the opening words of successive sentences is anaphora.",
    not: {
      Epistrophe:
        'Epistrophe repeats the ENDS of clauses; here the endings change: town, river, home.',
      Alliteration:
        'Alliteration repeats first sounds in nearby words; here whole words are repeated at the start of each sentence.',
      Hyperbole: 'Nothing is exaggerated.',
    },
    more: "'Our' is repeated too, so the anaphora builds a sense of shared ownership, ending on the most personal word, 'home'.",
    tip: "Notice the climax: 'The anaphora builds to home, the most personal of the three.'",
  },
  '"Give me back my books, give me back my freedom."': {
    why: "Both halves begin 'give me back my'. Repeating the opening words of successive clauses is anaphora, even with only two clauses.",
    not: {
      Epistrophe:
        "Epistrophe repeats words at the ends of clauses. These end differently: 'books' and 'freedom'.",
      'Rule of three': 'There are two demands, not three.',
      Euphemism: 'A euphemism softens. These demands are blunt.',
    },
    more: 'The jump from books to freedom shows what the first demand really meant: the anaphora makes a small request suddenly large.',
    tip: "Comment on escalation: 'The anaphora moves from books to freedom, raising the stakes.'",
  },
  '"Cannon to right of them,\nCannon to left of them"': {
    why: "Each line begins with 'Cannon'. Repeating the opening word of successive lines is anaphora.",
    not: {
      Personification:
        'Nothing non-human is given human qualities: the cannon are simply placed to the right and left.',
      Alliteration:
        'Alliteration repeats first sounds of different words; here the same word opens each line.',
      Onomatopoeia: "No word imitates a sound: 'cannon' names the guns.",
    },
    more: "Placing 'Cannon' at the start of line after line surrounds the riders: the guns come first, from every side.",
    tip: "Link structure to meaning: 'The anaphora traps the brigade between cannon on every side.'",
  },
  '"I love thee freely, as men strive for Right;\nI love thee purely, as they turn from Praise."': {
    why: "Both lines open with 'I love thee'. Repeating the opening words of successive lines is anaphora, and the poem keeps returning to it.",
    not: {
      Epistrophe: "Epistrophe repeats line ENDINGS; these end differently, 'Right' and 'Praise'.",
      'Rule of three': 'These two lines are a pair, not a group of three.',
      Oxymoron: 'No two contradictory words are joined.',
    },
    more: "The poem answers its first line, 'How do I love thee? Let me count the ways', and the anaphora is the counting: each 'I love thee' adds a new way.",
    tip: "Connect the anaphora to the poem's structure: 'Each repetition counts another way she loves him.'",
  },
  '"as he was fortunate, I rejoice at it; as he was valiant, I honour him"': {
    why: "Brutus opens each clause with 'as he was'. Repeating the opening words of successive clauses is anaphora.",
    not: {
      Epistrophe: 'Epistrophe repeats clause ENDINGS; these end differently.',
      'Rule of three': 'There are two clauses here, not a group of three.',
      Oxymoron: 'No two contradictory words are joined.',
    },
    more: "The balanced clauses make Brutus sound fair and reasonable, praising Caesar before the final clause: 'as he was ambitious, I slew him.'",
    tip: "Comment on purpose: 'Brutus's anaphora makes his speech sound balanced and reasonable.'",
  },
  '"We few, we happy few, we band of brothers."': {
    why: "Each phrase begins with 'we'. Repeating the opening word of successive phrases is anaphora.",
    not: {
      Oxymoron: 'No two contradictory words are joined.',
      Euphemism: 'A euphemism softens. Henry admits plainly that they are few.',
      Hyperbole: 'Nothing is exaggerated: Henry admits his army is small.',
    },
    more: "Before the battle, Henry turns a weakness, their small numbers, into a bond: 'we' joins king and soldiers as brothers.",
    tip: "Comment on inclusive language: 'The anaphora of we unites Henry with his soldiers before Agincourt.'",
  },
  '"Not this year. Not this time. Not ever again."': {
    why: "Each short sentence starts with the same blunt 'Not', and each widens the refusal, from this year to ever. The anaphora makes the speaker sound firm and determined.",
    not: {
      'A gentle, hopeful tone':
        "'Not ever again' shuts the door: nothing here is gentle or hopeful.",
      'Confusion and doubt': "The repeated 'Not' sounds certain; there is no hesitation.",
      'A cheerful, playful rhythm':
        'The short, hard sentences sound final and serious, not playful.',
    },
    more: "Anaphora often builds to a climax: here each sentence stretches further in time, so the last, 'ever', has the most force.",
    tip: "Comment on escalation: 'The anaphora of Not builds to an absolute refusal.'",
  },
  '"In every cry of every man,\nIn every infant\'s cry of fear"': {
    why: "Every line starts 'In every', and 'every' recurs within the lines too. The anaphora spreads suffering to everyone, men and infants alike: no one in London escapes it.",
    not: {
      'It affects only the very poor':
        "'Every man' and 'every infant' include everyone; the repetition refuses to limit it.",
      'It will soon come to an end':
        'Nothing suggests change; the repetition makes the misery feel constant.',
      'It affects children more than adults':
        'Men and infants are named side by side: the point is that it touches all ages.',
    },
    more: "Blake's London is a city where suffering is built into every life; the drumming repetition makes it inescapable for the reader too.",
    tip: "Comment on scope: 'The anaphora of In every makes suffering universal in Blake's London.'",
  },
  '"He wore me like a silken knot,\nHe changed me like a glove"': {
    why: "Both lines begin 'He', which keeps him in charge, but the similes show his carelessness: like a silken knot or a glove, she was worn for show and changed when he liked.",
    not: {
      Anaphora:
        "The repeated 'He' makes him the one who acts, but it is the comparisons to a knot and a glove that show how carelessly.",
      Metaphor: "A metaphor would say she was a glove. 'Like' makes these similes.",
      Personification:
        'Nothing non-human is given human qualities; she, a person, is compared to things.',
    },
    more: "The similes turn a woman into an accessory: something pretty to wear and easy to replace. That is the poem's charge against the lord.",
    tip: "Rank the devices: 'While the anaphora stresses his control, the similes reveal that he treated her as a disposable object.'",
  },
  '"The room was cold, dark and silent."': {
    why: "Three adjectives describe the room: 'cold, dark and silent'. Grouping three words or ideas together for effect is the rule of three.",
    not: {
      Anaphora:
        'Anaphora repeats words at the start of successive clauses. No words are repeated here.',
      Alliteration: 'The three words begin with different sounds: c, d, s.',
      Oxymoron: 'No two contradictory words are joined.',
    },
    more: 'Three feels complete to a reader: the list builds an atmosphere quickly, each word adding to the bleakness.',
    tip: "Comment on the build: 'The rule of three layers cold, dark and silence into an atmosphere of isolation.'",
  },
  '"Our new park will be safer, greener and quieter."': {
    why: "Three benefits are listed together: 'safer, greener and quieter'. A group of three for persuasive effect is the rule of three.",
    not: {
      Anaphora: 'No words are repeated at the start of clauses.',
      Hyperbole: 'Nothing is exaggerated: each claim is modest.',
      Alliteration: 'The three words begin with different sounds.',
    },
    more: 'Speakers and advertisers use three because it sounds balanced and complete, and is easy to remember.',
    tip: "Name the persuasive effect: 'The rule of three makes the park's benefits sound complete and convincing.'",
  },
  '"She was patient, honest and brave."': {
    why: "Three qualities are grouped together: 'patient, honest and brave'. Grouping three for effect is the rule of three.",
    not: {
      Anaphora: 'Anaphora repeats the opening words of clauses; nothing is repeated here.',
      Repetition: 'No word is repeated: each quality is different.',
      Oxymoron: 'No two contradictory words are joined.',
    },
    more: "The list ends on 'brave', so the strongest quality lands last, where it is most likely to be remembered.",
    tip: "Look at the order: 'The rule of three builds to brave, her most striking quality.'",
  },
  '"Friends, Romans, countrymen, lend me your ears"': {
    why: "Antony opens with three ways of addressing the crowd: 'Friends, Romans, countrymen'. Grouping three for effect is the rule of three.",
    not: {
      Anaphora:
        'No words are repeated at the start of clauses; each of the three is a different word.',
      Repetition: 'No word is repeated in the list.',
      Alliteration: 'The three words begin with different sounds.',
    },
    more: "The three move from the most personal, 'friends', to the widest, 'countrymen', drawing the whole crowd in before he speaks against the conspirators.",
    tip: "Comment on audience: 'Antony's rule of three flatters and unites the crowd from his first words.'",
  },
  '"I will live in the Past, the Present, and the Future."': {
    why: "Scrooge vows to live in three times at once: 'the Past, the Present, and the Future'. Grouping three for effect is the rule of three, and each matches one of the three ghosts.",
    not: {
      Hyperbole: 'Scrooge means his promise; he is not exaggerating for effect.',
      Oxymoron: 'No two contradictory words are joined.',
      Euphemism: 'A euphemism softens something unpleasant; this is a joyful promise.',
    },
    more: "The three times match the three Spirits, so Scrooge's promise shows he has learnt from each of them.",
    tip: "Link the structure to the novel: 'The rule of three echoes the three Spirits who have changed him.'",
  },
  '"He plunges at me, guttering, choking, drowning."': {
    why: "Three verbs describe the dying soldier: 'guttering, choking, drowning'. Grouping three together for effect is the rule of three.",
    not: {
      Anaphora: 'No words are repeated at the start of clauses.',
      Repetition: 'No word is repeated; each verb is different.',
      Alliteration: 'The three verbs begin with different sounds.',
    },
    more: "The '-ing' endings make the dying feel ongoing: in the speaker's nightmares it is still happening, over and over.",
    tip: "Comment on tense: 'The present-tense rule of three shows the death replaying in the speaker's mind.'",
  },
  '"Theirs not to make reply,\nTheirs not to reason why,\nTheirs but to do and die"': {
    why: "Three parallel lines set out the soldiers' duty: not to reply, not to question, only to do and die. Grouping three for effect is the rule of three.",
    not: {
      Oxymoron: 'No two contradictory words are joined.',
      Euphemism: "A euphemism softens. 'Do and die' is blunt about death.",
      Hyperbole: "Nothing is exaggerated: this was the soldiers' real duty.",
    },
    more: "The three lines build to 'die', so the soldiers' obedience ends where the poem says it must. Readers still argue whether Tennyson praises or questions that obedience.",
    tip: "Comment on the climax: 'The rule of three builds to die, the cost of unquestioning obedience.'",
  },
  '"We only know war lasts, rain soaks, and clouds sag stormy."': {
    why: "Three short facts follow 'We only know': war lasts, rain soaks, clouds sag. Grouping three for effect is the rule of three.",
    not: {
      Anaphora: 'No words are repeated at the start of clauses.',
      Repetition: 'No word is repeated; the three clauses are all different.',
      Simile: "Nothing is compared using 'like' or 'as'.",
    },
    more: "The flat, short clauses sound exhausted: the soldiers' whole world has shrunk to three grim certainties.",
    tip: "Comment on tone: 'The blunt rule of three reduces the soldiers' knowledge to war and weather.'",
  },
  '"Vote for a cleaner, safer, fairer town."': {
    why: 'Three qualities feel balanced and complete, so the promise sounds convincing and easy to remember. Persuasive speakers use the rule of three for exactly this reason.',
    not: {
      'To show the town is perfect now':
        'The speaker promises to make it cleaner, safer, fairer, so it is not perfect yet.',
      'To confuse the listeners':
        'A list of three is clear and memorable, the opposite of confusing.',
      'To pad out a short speech':
        'Each quality adds a reason to vote; the list is short and purposeful.',
    },
    more: "The '-er' endings also make the three words chime, which helps them stick in the listener's mind.",
    tip: "In Paper 2 answers, name the purpose: 'The rule of three makes the promise sound complete and memorable.'",
  },
  '"Piercing, searching, biting cold."': {
    why: "'Piercing', 'searching' and 'biting' are verbs of attack, and grouping three makes the assault build. The cold seems to hunt people down and wound them.",
    not: {
      'It is mild and easily ignored':
        'Each word is painful; together they make the cold fierce, not mild.',
      'It is a welcome change': 'Biting cold that pierces is unwelcome; nothing here is pleasant.',
      'It only troubles Scrooge':
        'The cold fills the whole city on Christmas Eve; it is not his alone.',
    },
    more: 'The three verbs also personify the cold, so the weather becomes as cruel as Scrooge himself at the start of the story.',
    tip: "Comment on the build: 'The rule of three intensifies the cold into a living, attacking force.'",
  },
  '"Tired, hungry and soaked to the skin, we trudged through the endless mud."': {
    why: 'The misery is built up by a list: tired, hungry and soaked to the skin, three sufferings one after another before the sentence even reaches the mud. Grouping three for effect is the rule of three.',
    not: {
      Personification:
        'Nothing non-human is given human qualities: the people suffer, and the mud is only mud.',
      Anaphora: 'No words are repeated at the start of clauses.',
      Simile: "Nothing is compared using 'like' or 'as'.",
    },
    more: 'Placing the list first means the reader feels their misery before learning where they are.',
    tip: 'Name the device that matches the question: here the build-up comes from three items in a row.',
  },
  '"Who wants to spend their weekend stuck in traffic?"': {
    why: 'The question needs no answer: obviously nobody wants that. A question asked for effect rather than for a reply is a rhetorical question.',
    not: {
      Imperative:
        "An imperative gives an order, such as 'Leave early'. This is a question, not a command.",
      'Direct address':
        "Direct address speaks to the reader as 'you'. This question is about anyone, not 'you'.",
      Hyperbole: 'Nothing is exaggerated: traffic jams really do eat up weekends.',
    },
    more: "Rhetorical questions pull the reader into agreeing: answering it in your head means you have already accepted the writer's point.",
    tip: "Explain the persuasion: 'The rhetorical question assumes the reader's agreement.'",
  },
  '"Is it fair that a child should go hungry in a country this rich?"': {
    why: 'The writer does not expect an answer; the answer, no, is obvious. A question asked to make a point is a rhetorical question.',
    not: {
      Imperative: 'An imperative is a command; this is a question.',
      'Direct address':
        "The question does not speak to the reader as 'you'; it makes a general point.",
      Euphemism: "A euphemism softens; 'go hungry' is direct.",
    },
    more: 'Setting a hungry child beside a rich country makes the question uncomfortable: the reader feels the injustice in giving the obvious answer.',
    tip: "Comment on emotion: 'The rhetorical question provokes the reader's sense of injustice.'",
  },
  '"Do you really want to live in a town with no library?"': {
    why: "The speaker expects the answer 'no' and asks only to make the reader feel it. A question asked for effect is a rhetorical question.",
    not: {
      Imperative: 'An imperative is a command; this is a question.',
      Hyperbole: 'Nothing is exaggerated: a town really could lose its library.',
      Apostrophe:
        'Apostrophe addresses someone absent or a thing that cannot answer. Here the reader is addressed, and the reader could answer.',
    },
    more: "'Really' adds pressure: it suggests that anyone who answered yes has not thought about it.",
    tip: "Pick out the key word: 'The word really makes the rhetorical question sound like a challenge.'",
  },
  '"What, will these hands ne\'er be clean?"': {
    why: 'Sleepwalking, Lady Macbeth asks a question no one answers and she cannot answer herself. It expresses despair rather than asking for information: a rhetorical question.',
    not: {
      Imperative:
        'An imperative gives an order. This is a question that she asks herself, not an order.',
      Apostrophe:
        'Apostrophe speaks to someone absent or to an object. She speaks about her hands, not to them.',
      Euphemism: 'A euphemism softens. Nothing here is softened; she is horrified.',
    },
    more: 'The woman who once said a little water would clear them of the deed now believes her hands can never be clean.',
    tip: "Show the change: 'The rhetorical question reveals how guilt has broken Lady Macbeth's confidence.'",
  },
  '"If you prick us, do we not bleed?"': {
    why: 'The answer is obviously yes, and Shylock does not wait for it. He asks to make a point: Jews feel pain like everyone else. A question asked for effect is a rhetorical question.',
    not: {
      Imperative: 'This is a question, not a command.',
      Hyperbole: 'Nothing is exaggerated: the point is plain and physical.',
      Euphemism: "A euphemism softens; 'bleed' is direct.",
    },
    more: 'The run of questions forces the Christians, and the audience, to admit a shared humanity they have denied him.',
    tip: "Comment on purpose: 'Shylock's rhetorical questions insist on a shared humanity his enemies refuse to see.'",
  },
  '"Was this ambition?"': {
    why: 'Antony reminds the crowd that Caesar refused the crown three times, then asks this and leaves it unanswered. The crowd supplies the answer, no: a rhetorical question.',
    not: {
      Imperative: 'This is a question, not a command.',
      Euphemism: 'A euphemism softens; nothing is softened here.',
      Hyperbole: 'Nothing is exaggerated; the question is short and pointed.',
    },
    more: 'Antony never says Brutus lied. His rhetorical questions let the crowd reach that conclusion themselves, which makes it more powerful.',
    tip: "Comment on manipulation: 'The rhetorical question lets Antony undermine Brutus without accusing him.'",
  },
  '"What immortal hand or eye\nCould frame thy fearful symmetry?"': {
    why: 'The speaker asks who could have made the tiger, and the poem never answers. A question asked to provoke wonder, not to get a reply, is a rhetorical question.',
    not: {
      Imperative: 'This is a question, not a command.',
      Hyperbole: 'Nothing is exaggerated: the speaker wonders, he does not inflate.',
      Euphemism: 'A euphemism softens; nothing here is softened.',
    },
    more: 'The whole poem is built of unanswered questions, and they build awe and unease about a creator who could make such a fearful beast.',
    tip: "Comment on structure: 'The unanswered questions build a sense of awe and fear.'",
  },
  '"Why don\'t they come\nAnd put him into bed? Why don\'t they come?"': {
    why: 'No one answers the injured soldier; the repeated question shows he is helpless and forgotten. A question asked to express feeling rather than to get a reply is a rhetorical question.',
    not: {
      Imperative: 'These are questions, not commands.',
      'Direct address': "The question is not addressed to the reader as 'you'.",
      Apostrophe:
        'Apostrophe speaks to someone absent; here no one is spoken to, and the question hangs in the air.',
    },
    more: 'The poem ends on this unanswered question: a young man who once was cheered now waits for someone to put him to bed like a child.',
    tip: "Comment on the ending: 'The unanswered question leaves the soldier, and the reader, with his helplessness.'",
  },
  '"How many more warnings do we need before we act?"': {
    why: 'The speaker does not want a number. The question suggests there have already been enough warnings, so the audience should act now.',
    not: {
      'To find out an exact number': 'It is rhetorical: no one is expected to count the warnings.',
      'To admit nothing can be done': "'Before we act' assumes action is possible and needed.",
      'To praise the warnings so far':
        'The question complains that warnings have been ignored; it does not praise them.',
    },
    more: "'We' includes the speaker with the audience, so the question sounds like a shared challenge, not a lecture.",
    tip: "Explain the implied answer: 'The rhetorical question implies the time for warnings is over.'",
  },
  '"What are we doing here?"': {
    why: 'Nothing is happening but cold and waiting, so the question sounds like despair: the soldiers can see no purpose in being there at all.',
    not: {
      'They are lost and need directions':
        'They know where they are; the question asks why, not where.',
      'They are eager for the battle':
        "'But nothing happens' runs through the poem; the men are numb, not eager.",
      'They are waiting for new orders':
        'The question is about the point of the war, not a practical request.',
    },
    more: 'The short, plain question stands alone at the end of a stanza, and the reader is left to answer it.',
    tip: "Comment on purpose: 'The rhetorical question captures the futility the soldiers feel.'",
  },
  '"Why should we pay more for less, when the bosses pay themselves millions?"': {
    why: "'More for less' sets opposites side by side, a juxtaposition, but the challenge comes from the question itself: it is asked so the listener will answer that we should not. That is a rhetorical question.",
    not: {
      Juxtaposition:
        "'More for less' and the bosses' millions sharpen the contrast, but on their own they make no demand of the listener.",
      Imperative: 'There is no command; the sentence is a question.',
      Euphemism: 'A euphemism softens; this is blunt.',
    },
    more: 'Rhetorical questions in speeches often carry the argument: the speaker states nothing, so the listener seems to reach the conclusion alone.',
    tip: 'When asked which device challenges a reader, look for a question that expects one answer.',
  },
  '"Beware the Ides of March."': {
    why: "'Beware' gives Caesar an order: be on your guard. A sentence that commands or warns, beginning with the verb, is an imperative.",
    not: {
      'Rhetorical question': 'It is a command, not a question.',
      Euphemism: 'A euphemism softens bad news. The warning is blunt, though Caesar ignores it.',
      Hyperbole: 'Nothing is exaggerated: it is a short, plain warning.',
    },
    more: "The Soothsayer's command is the first warning of Caesar's death on the Ides, the fifteenth of March; Caesar dismisses him as 'a dreamer'.",
    tip: "Comment on the dramatic effect: 'The imperative warning creates tension, since the audience fears Caesar will ignore it.'",
  },
  '"Begone! I will not hear you."': {
    why: "'Begone' orders the creature to go away. A command that tells someone what to do is an imperative.",
    not: {
      'Rhetorical question':
        'The two sentences are a command and a statement; neither is a question.',
      Euphemism: "A euphemism softens. Victor's words are harsh and direct.",
      Hyperbole: 'Nothing is exaggerated: Victor simply refuses to listen.',
    },
    more: "Victor answers the creature's plea for happiness with a command to leave, refusing even to hear him: the rejection that drives the creature to revenge.",
    tip: "Link the command to the theme of rejection: 'Victor's imperative shuts the creature out, just as society does.'",
  },
  "\"'Hear me!' cried the Ghost. 'My time is nearly gone.'\"": {
    why: "'Hear me' commands Scrooge to listen. A sentence that gives an order, beginning with the verb, is an imperative.",
    not: {
      'Rhetorical question': 'The Ghost commands; it does not ask.',
      Hyperbole: "Nothing is exaggerated: the Ghost's visit really is almost over.",
      Oxymoron: 'No two contradictory words are joined.',
    },
    more: "Marley's urgent command forces Scrooge to stop arguing and listen: the warning he brings is Scrooge's last chance.",
    tip: "Comment on urgency: 'The imperative shows how desperate Marley is to save Scrooge.'",
  },
  '"Get thee to a nunnery."': {
    why: "Hamlet orders Ophelia to go to a nunnery: 'Get thee' is a command, beginning with the verb. That is an imperative.",
    not: {
      'Rhetorical question': 'It is a command; the question comes in the next sentence.',
      Oxymoron: 'No two contradictory words are joined in one phrase.',
      Hyperbole: 'Nothing is exaggerated: it is a blunt instruction.',
    },
    more: 'Hamlet turns on Ophelia, perhaps aware that they are being watched. His repeated commands show his disgust with love and with himself.',
    tip: "Comment on power: 'Hamlet's imperatives show his cruelty towards Ophelia, who cannot answer back.'",
  },
  '"Tarry a little, there is something else."': {
    why: "'Tarry' means 'wait', and Portia orders Shylock to stop before he takes his pound of flesh. A command beginning with the verb is an imperative.",
    not: {
      'Rhetorical question': 'This is a command, not a question.',
      Euphemism: 'A euphemism softens bad news; Portia is about to deliver it plainly.',
      Hyperbole: 'Nothing is exaggerated: she simply tells him to wait.',
    },
    more: "The short command turns the trial: Portia reveals the bond allows flesh but 'no jot of blood', and Shylock's case collapses.",
    tip: "Explain the turning point: 'Portia's imperative halts Shylock at the very moment he seems to have won.'",
  },
  '"Remove Man from the scene, and the root cause of hunger and overwork is abolished for ever."': {
    why: "Old Major opens with an order, 'Remove Man', and follows it with the promised result. A command beginning with the verb is an imperative.",
    not: {
      'Rhetorical question': 'The sentence is a command and a promise, not a question.',
      Simile: "Nothing is compared using 'like' or 'as'; Old Major gives an order and a promise.",
      Oxymoron: 'No two contradictory words are joined.',
    },
    more: 'The simple command makes revolution sound easy: one action, and all problems end. Orwell shows how such promises go wrong.',
    tip: "Comment on persuasion: 'Old Major's imperative makes rebellion sound like a simple solution.'",
  },
  '"\'Hold your noise!\' cried a terrible voice, as a man started up from among the graves"': {
    why: 'His first words are a harsh command, shouted at a crying child in a graveyard. The imperative shows a fierce, desperate man used to frightening people into obeying.',
    not: {
      'He is kind but nervous': 'Nothing kind here: he shouts and threatens a small boy.',
      'He is joking with Pip': "The voice is 'terrible', and the threats that follow are serious.",
      'He is too weak to speak': "He 'started up' and shouts; he is strong enough to terrify Pip.",
    },
    more: "Dickens opens with fear and menace, which makes it all the more surprising when the convict later turns out to be Pip's secret benefactor.",
    tip: "Comment on first impressions: 'The convict's imperative establishes him as frightening, an impression the novel later overturns.'",
  },
  '"Beware; for I am fearless, and therefore powerful."': {
    why: 'The creature who once begged for kindness now warns Victor to beware. The imperative shows he has turned from pleading to threatening his own creator.',
    not: {
      'He is begging for forgiveness': "He is warning, not begging: 'Beware' is a threat.",
      'He is afraid of Victor': "He calls himself 'fearless'; it is Victor who should be afraid.",
      'He wants to be left alone':
        'He promises to watch Victor with the wiliness of a snake, the opposite of keeping away.',
    },
    more: "Power has shifted: the creator now has reason to fear his creation. The creature's imperative marks the start of his revenge.",
    tip: "Explain the shift: 'The imperative shows the creature reversing the power between himself and Victor.'",
  },
  '"Follow your spirit, and upon this charge\nCry, \'God for Harry! England and Saint George!\'"': {
    why: "Henry's lines are orders: 'Follow your spirit' and 'Cry', each beginning with the verb. Commands like these, which send the soldiers into the charge, are imperatives.",
    not: {
      Simile: "Nothing is compared using 'like' or 'as'; Henry gives orders.",
      'Rhetorical question': 'There is no question here: every verb is an order.',
      Euphemism: 'A euphemism softens. Nothing is softened; Henry urges the charge.',
    },
    more: "Henry's speech moves from description to command, so its final lines become orders: the listeners are swept from hearing into doing.",
    tip: "When a speech ends in orders, comment on them: 'The closing imperatives turn Henry's words into action.'",
  },
  '"Reader, I married him."': {
    why: "Jane speaks straight to the person reading her story: 'Reader'. Addressing the reader or audience directly is direct address.",
    not: {
      Apostrophe:
        'Apostrophe speaks to someone absent or something that cannot answer, such as Death. Jane speaks to her real audience, the reader.',
      Imperative: 'There is no command; she simply tells the reader what happened.',
      'Rhetorical question': 'This is a statement, not a question.',
    },
    more: 'The short, plain sentence after a long novel feels like a confidence shared with a friend: Jane is in control of her own story.',
    tip: "Comment on narrative voice: 'Direct address makes Jane's ending feel personal and assured.'",
  },
  '"You will therefore permit me to repeat, emphatically, that Marley was as dead as a door-nail."':
    {
      why: "The narrator speaks to the reader as 'you', asking leave to repeat himself. Speaking straight to the reader is direct address.",
      not: {
        Apostrophe:
          'Apostrophe speaks to someone absent or a thing that cannot answer. Here the narrator speaks to his reader.',
        'Rhetorical question': 'This is a statement, not a question.',
        Euphemism:
          "A euphemism would soften death; the narrator says 'dead' as plainly as possible.",
      },
      more: "The chatty narrator jokes with the reader about the old saying 'dead as a door-nail', making the ghost story feel like a tale told by the fireside.",
      tip: "Comment on tone: 'Direct address creates a friendly, humorous narrator who draws the reader in.'",
    },
  '"You will rejoice to hear that no disaster has accompanied the commencement of an enterprise which you have regarded with such evil forebodings."':
    {
      why: "Walton writes to his sister as 'you', telling her she will be glad of his news. Speaking straight to the reader of a letter is direct address.",
      not: {
        Apostrophe:
          'Apostrophe addresses someone absent who cannot reply, or an idea. Walton writes to his sister, who will read the letter.',
        Imperative: 'Walton tells his sister she will be glad; he gives no order.',
        Hyperbole: 'Nothing is exaggerated: he reports a safe start to his voyage.',
      },
      more: "The novel opens as letters, so every reader is placed in the sister's position, hearing the story at second hand.",
      tip: "Comment on form: 'Direct address in Walton's letters frames the novel as a story told to a listener.'",
    },
  '"If you can keep your head when all about you\nAre losing theirs and blaming it on you"': {
    why: "The poem speaks to 'you' throughout, a son being given advice. Speaking straight to the listener or reader as 'you' is direct address.",
    not: {
      Apostrophe:
        "Apostrophe addresses someone absent or something that cannot answer. Here 'you' is the listener being advised.",
      Imperative: "There is no command yet; the line sets up a condition with 'If'.",
      'Rhetorical question': 'This is the start of a statement, not a question.',
    },
    more: "Because 'you' could be any reader, the advice feels personal to everyone who reads it, not just to one son.",
    tip: "Comment on the reader: 'Direct address makes Kipling's advice feel personal to every reader.'",
  },
  '"The which, if you with patient ears attend,\nWhat here shall miss, our toil shall strive to mend."':
    {
      why: "The Chorus speaks to the audience as 'you', asking them to listen patiently. Speaking straight to the audience is direct address.",
      not: {
        Apostrophe:
          'Apostrophe speaks to someone absent or to a thing. The Chorus speaks to the real audience in front of it.',
        Imperative: "The Chorus asks politely with 'if'; there is no command.",
        'Rhetorical question': 'This is a statement, not a question.',
      },
      more: "Before the story begins, the actors humbly ask for the audience's patience, promising to make up for any faults.",
      tip: "Comment on purpose: 'The Prologue's direct address invites the audience into the story.'",
    },
  '"But release me from my bands\nWith the help of your good hands."': {
    why: "In the epilogue Prospero turns to the audience, asking 'your good hands' to free him with their applause. Speaking straight to the audience is direct address.",
    not: {
      Apostrophe:
        'Apostrophe addresses someone absent or a thing that cannot answer. The audience is present, and answers by clapping.',
      'Rhetorical question': 'There is no question; it is a request.',
      Hyperbole: 'Nothing is exaggerated: he asks for applause.',
    },
    more: 'The magician who controlled everyone now depends on the audience: their clapping is the spell that will set him free.',
    tip: "Comment on the reversal: 'In the epilogue's direct address, Prospero hands his power to the audience.'",
  },
  '"Think but this, and all is mended,\nThat you have but slumber\'d here"': {
    why: "Puck speaks to the audience as 'you', suggesting they have only been dreaming. Speaking straight to the audience is direct address.",
    not: {
      Apostrophe:
        'Apostrophe speaks to someone absent or to a thing. Puck speaks to the audience in front of him.',
      'Rhetorical question': 'There is no question; Puck makes a suggestion.',
      Hyperbole: 'Nothing is exaggerated: he gently says the play was a dream.',
    },
    more: 'Ending the play by calling it a dream lets the audience forgive anything that offended them, and links back to the night of magic they have watched.',
    tip: "Comment on tone: 'Puck's direct address ends the play lightly, asking the audience's pardon.'",
  },
  '"My friend, you would not tell with such high zest\nTo children ardent for some desperate glory"':
    {
      why: "Owen turns to the reader as 'My friend' and 'you'. Speaking straight to the reader is direct address, and here it makes the reader answerable for the lie.",
      not: {
        Imperative: 'There is no command; Owen tells the reader what they would not do.',
        'Rhetorical question': 'This is a statement, not a question.',
        Hyperbole:
          'Nothing is exaggerated: Owen states what the reader would do after seeing the gas attack.',
      },
      more: "'My friend' is bitter: Owen addresses those at home who praised war, and makes them imagine what he has seen.",
      tip: "Comment on the shift: 'The direct address turns the poem's horror into an accusation of the reader.'",
    },
  '"as close to it as I am now to you, and I am standing in the spirit at your elbow"': {
    why: "The narrator says he is standing 'at your elbow', as close as the ghost is to Scrooge. Addressing 'you' makes him feel like a friendly storyteller beside the reader.",
    not: {
      'A cold, distant narrator': "He places himself 'at your elbow', as close as possible.",
      'A threat to the reader': 'Nothing threatens; the tone is playful and companionable.',
      "A list of the story's events": 'The sentence describes closeness, not a sequence of events.',
    },
    more: "Dickens later read A Christmas Carol aloud to packed halls, and the narrator's chatty asides already make every reader part of a fireside audience.",
    tip: "Comment on voice: 'The narrator's direct address creates warmth and intimacy, drawing the reader into the scene.'",
  },
  '"Gentle reader, may you never feel what I then felt!"': {
    why: 'Jane turns to the reader at her lowest moment, after leaving Rochester, and wishes them spared her pain. The direct address pulls the reader into her suffering.',
    not: {
      'It shows she distrusts the reader':
        "'Gentle reader' is warm and trusting; she wishes the reader well.",
      'It makes the moment comic':
        'She wishes the reader never to feel such pain; the moment is serious.',
      'It hides what she felt':
        'She shares her feeling openly: wishing the reader spared it shows how terrible it was.',
    },
    more: "Brontë uses direct address at moments of intense feeling, so the reader experiences Jane's story almost as a friend she confides in.",
    tip: "Comment on intimacy: 'The direct address makes the reader share Jane's anguish.'",
  },
  '"Come, you spirits\nThat tend on mortal thoughts, unsex me here"': {
    why: 'Lady Macbeth calls on evil spirits, who are not there to answer, to fill her with cruelty. Speaking to someone absent, or to spirits or ideas, is apostrophe.',
    not: {
      'Direct address':
        'Direct address speaks to the reader or audience. Lady Macbeth is speaking to spirits, not to the audience.',
      'Rhetorical question': 'She gives commands; she asks no question.',
      Hyperbole: 'Nothing is exaggerated: she means her terrible request.',
    },
    more: 'Calling on spirits shows how far she will go: she asks to lose her womanly softness so nothing can stop the murder.',
    tip: "Comment on character: 'Lady Macbeth's apostrophe to the spirits reveals her terrifying determination.'",
  },
  '"Frailty, thy name is woman!"': {
    why: "Hamlet speaks to 'Frailty', an idea, as if it could hear him. Addressing an idea or an absent person is apostrophe.",
    not: {
      'Direct address':
        'Direct address speaks to the audience or reader. Hamlet speaks to Frailty itself.',
      'Rhetorical question': 'It is an exclamation, not a question.',
      Euphemism: "A euphemism softens. Hamlet's words are bitter and harsh.",
    },
    more: "Disgusted by his mother's hasty remarriage, Hamlet condemns all women as weak, a sweeping judgement that reveals his own pain.",
    tip: "Comment on what it reveals: 'The apostrophe shows Hamlet's bitterness turning against all women.'",
  },
  '"O judgement, thou art fled to brutish beasts,\nAnd men have lost their reason."': {
    why: "Antony breaks off from the crowd to speak to 'judgement' itself, as if it had run away. Addressing an idea as though it could hear is apostrophe.",
    not: {
      'Direct address':
        "Antony is speaking to the crowd, but these words are addressed to 'judgement', an idea.",
      'Rhetorical question': 'This is an exclamation, not a question.',
      Euphemism: 'A euphemism softens. Antony accuses the crowd bluntly.',
    },
    more: "By pretending to grieve that reason has fled, Antony shames the crowd into thinking again about Brutus's claims.",
    tip: "Comment on persuasion: 'The apostrophe lets Antony accuse the crowd without addressing them directly.'",
  },
  '"O time, thou must untangle this, not I,\nIt is too hard a knot for me t\'untie!"': {
    why: 'Viola speaks to Time, as if it could hear her and solve her problem. Addressing an idea as though it were a person who can listen is apostrophe.',
    not: {
      'Direct address': 'She is speaking to Time, not to the audience.',
      'Rhetorical question': 'She makes a statement and a plea; there is no question.',
      Hyperbole: 'Nothing is exaggerated: the tangle really is beyond her.',
    },
    more: 'Disguised as a man, Viola loves Orsino, who loves Olivia, who loves Viola. Handing the knot to Time shows she cannot act without revealing herself.',
    tip: "Comment on helplessness: 'Viola's apostrophe to Time shows she can only wait for events to resolve.'",
  },
  '"Who hath not seen thee oft amid thy store?"': {
    why: "Keats speaks to autumn itself as 'thee', as though the season could hear him. Addressing a season or an idea as a listener is apostrophe.",
    not: {
      'Direct address':
        'Direct address speaks to the reader. Keats is speaking to autumn, not to us.',
      Imperative: 'There is no command; Keats asks a question.',
      Hyperbole: 'Nothing is exaggerated: autumn is everywhere at harvest.',
    },
    more: 'The question invites every reader to agree: autumn is everywhere at harvest time, for anyone who looks.',
    tip: "Comment on the relationship: 'The apostrophe makes autumn a familiar companion the speaker greets directly.'",
  },
  '"Blow, winds, and crack your cheeks! Rage! blow!"': {
    why: 'Lear shouts at the winds as if they could hear and obey him. Speaking to a force of nature as though it were a listener is apostrophe.',
    not: {
      'Direct address': 'Direct address speaks to the audience. Lear speaks to the storm.',
      'Rhetorical question': 'These are commands, not questions.',
      Euphemism: "A euphemism softens; Lear's words are wild and violent.",
    },
    more: 'The king who once commanded a kingdom now commands only the weather, and it ignores him: his power has gone, and his mind is going.',
    tip: "Comment on power: 'Lear's apostrophe to the storm shows a powerless king raging at a world he cannot control.'",
  },
  '"Disguise, I see thou art a wickedness\nWherein the pregnant enemy does much."': {
    why: "Viola speaks to 'Disguise' as 'thou', as if it were a person who could hear her accusation. Addressing an idea as a listener is apostrophe.",
    not: {
      'Direct address': 'Direct address speaks to the audience. Viola speaks to Disguise itself.',
      'Rhetorical question': 'This is a statement, not a question.',
      Hyperbole: 'Nothing is exaggerated: her disguise really has caused harm.',
    },
    more: "'The pregnant enemy' is the devil, quick to use any trick. Viola realises her disguise has made Olivia fall in love with her.",
    tip: "Comment on realisation: 'Viola's apostrophe shows her recognising the damage her disguise has done.'",
  },
  '"Thou sure and firm-set earth,\nHear not my steps"': {
    why: "Macbeth begs the earth not to hear his steps, 'for fear / Thy very stones prate of my whereabout'. Even the ground might give him away: his guilt makes the whole world a witness.",
    not: {
      'He is praying for forgiveness':
        'He asks the earth to stay silent so he can commit the murder, not to forgive him.',
      'He is lost in the dark castle': "He knows exactly where he is going: to Duncan's chamber.",
      "He wants the earth to hide Duncan's body":
        'He wants the earth to keep his own movements secret; Duncan is not yet dead.',
    },
    more: 'The apostrophe shows a man so aware of his crime that he imagines the stones themselves could speak against him.',
    tip: "Comment on guilt: 'The apostrophe to the earth reveals Macbeth's fear of being discovered, even before the murder.'",
  },
  '"O, pardon me, thou bleeding piece of earth,\nThat I am meek and gentle with these butchers."': {
    why: "Alone with the corpse, Antony asks Caesar's pardon for being gentle with 'these butchers'. Speaking to the dead body reveals the grief and fury he hid from the conspirators.",
    not: {
      'His part in the murder': "Antony took no part; he calls the killers 'butchers'.",
      'His fear of Brutus': 'He is not afraid: the speech goes on to promise revenge.',
      "His relief at Caesar's death":
        "He grieves: he calls Caesar 'the noblest man / That ever lived in the tide of times'.",
    },
    more: 'Only when alone does Antony drop his mask. The apostrophe is the hinge between his false friendliness to the conspirators and his public revenge.',
    tip: "Comment on contrast: 'The apostrophe exposes the anger Antony concealed in front of the conspirators.'",
  },
  '"Until they melted all into one track\nOf sparkling light."': {
    why: "The sentence runs straight over the line break, from 'one track' to 'Of sparkling light', with no punctuation at the end of the first line. Running a sentence on past the end of a line is enjambment.",
    not: {
      Caesura:
        'A caesura is a pause inside a line, usually marked by punctuation. There is none within these lines.',
      'Rhyming couplet':
        "'Track' and 'light' do not rhyme; The Prelude is written in unrhymed lines.",
      'Internal rhyme': 'No two words inside a line rhyme.',
    },
    more: 'The line runs on just as the circles of light run together into one track, so the form matches the smooth movement of the boat.',
    tip: "Link form to meaning: 'The enjambment carries the eye forward like the boat gliding over the lake.'",
  },
  '"We are such stuff\nAs dreams are made on"': {
    why: "'We are such stuff' does not finish at the line end; the thought runs on to 'As dreams are made on'. A sentence carried over a line break without a pause is enjambment.",
    not: {
      Caesura: 'A caesura is a pause within a line. These words flow without a break.',
      'Rhyming couplet':
        "'Stuff' and 'on' do not rhyme: this is Shakespeare's unrhymed blank verse.",
      'Internal rhyme': 'No two words inside the lines rhyme.',
    },
    more: "The line break leaves 'such stuff' hanging, so the reader waits to learn what we are made of: the answer, dreams, arrives with quiet surprise.",
    tip: "Comment on suspense: 'The enjambment holds back the answer, making the comparison to dreams land softly.'",
  },
  '"That there\'s some corner of a foreign field\nThat is for ever England."': {
    why: "The sentence runs over the line break from 'a foreign field' to 'That is for ever England', with no pause. Carrying a sentence past the end of a line is enjambment.",
    not: {
      Caesura: 'There is no pause inside either line; the sentence flows straight through.',
      'Rhyming couplet': "'Field' and 'England' do not rhyme.",
      'Internal rhyme': 'No two words within a line rhyme.',
    },
    more: "The run-on line delays 'for ever England', so the claim arrives with weight: a dead soldier's grave becomes a piece of his country.",
    tip: "Comment on emphasis: 'The enjambment saves for ever England for the start of the next line, giving it force.'",
  },
  '"When we two parted\nIn silence and tears"': {
    why: "'When we two parted' does not end its sentence; it runs over the line break into 'In silence and tears'. Carrying a sentence on past the end of a line is enjambment.",
    not: {
      Caesura: 'Neither short line contains a pause; the words run on.',
      'Rhyming couplet': "'Parted' and 'tears' do not rhyme; the poem rhymes alternate lines.",
      'Internal rhyme': 'No two words inside a line rhyme.',
    },
    more: 'The short lines spill into each other like broken speech, as if the speaker can hardly bring himself to describe the parting.',
    tip: "Comment on rhythm: 'The enjambment of the short lines makes the parting feel halting and painful.'",
  },
  '"And mark in every face I meet\nMarks of weakness, marks of woe."': {
    why: "The sentence carries over from 'every face I meet' to 'Marks of weakness', with no punctuation at the line end. Running a sentence across a line break is enjambment.",
    not: {
      'Rhyming couplet':
        "'Meet' and 'woe' do not rhyme; in this stanza the lines rhyme alternately.",
      'Internal rhyme':
        "No two words within a line rhyme; 'mark' and 'marks' are the same word repeated.",
      'Half-rhyme':
        "Half-rhyme matches some sounds but not all, as 'love' and 'move' do. 'Meet' and 'woe' share nothing.",
    },
    more: "The run-on carries the reader from the speaker's looking straight into what he sees: every face marked with suffering.",
    tip: "Comment on the link: 'The enjambment joins looking and seeing, as the speaker cannot meet a face without finding pain.'",
  },
  '"This City now doth, like a garment, wear\nThe beauty of the morning"': {
    why: "The verb 'wear' ends the line, but what the city wears, 'The beauty of the morning', comes on the next. Running the sentence across the line break is enjambment.",
    not: {
      'Rhyming couplet': "'Wear' and 'morning' do not rhyme; the sonnet's rhymes fall elsewhere.",
      'Internal rhyme': 'No two words inside a line rhyme.',
      'Half-rhyme': "'Wear' and 'morning' share no sounds.",
    },
    more: "The pause on 'wear' makes the reader wait, so 'The beauty of the morning' is draped over the next line as the light is draped over the city.",
    tip: "Comment on the delay: 'Enjambment after wear holds back the beauty, then lets it spread across the line.'",
  },
  '"I love thee to the depth and breadth and height\nMy soul can reach"': {
    why: "'Height' ends the line, but the sentence runs on, 'My soul can reach', with no pause between. Carrying a sentence over a line break is enjambment.",
    not: {
      Caesura: 'There is no pause inside these words; the sentence flows straight on.',
      'Rhyming couplet': "'Height' and 'reach' do not rhyme.",
      'Internal rhyme': 'No two words inside a line rhyme.',
    },
    more: 'The line stretches, like her love, to its full extent before spilling over: the form seems to reach as far as the feeling.',
    tip: "Comment on form and feeling: 'The enjambment makes her love seem too great to fit within a single line.'",
  },
  '"She walks in beauty, like the night\nOf cloudless climes and starry skies"': {
    why: "'Like the night' does not finish the thought: what night it is comes on the next line, 'Of cloudless climes and starry skies'. Running a sentence across a line break is enjambment.",
    not: {
      'Rhyming couplet': "'Night' and 'skies' do not rhyme; the poem rhymes alternate lines.",
      'Internal rhyme': 'No two words within a line rhyme.',
      'Blank verse':
        'Blank verse is unrhymed. This poem rhymes, though these two lines do not rhyme with each other.',
    },
    more: "The line break turns 'like the night' into a pause of expectation, then the next line reveals a clear, starry night, not a dark one.",
    tip: "Comment on surprise: 'The enjambment redefines night as clear and starry, so darkness becomes beautiful.'",
  },
  '"And growing still in stature the grim shape\nTowered up between me and the stars"': {
    why: "The line ends on 'the grim shape', and the verb 'Towered up' waits for the next line. The delay makes the peak seem to rise up suddenly before the reader, as it rose before the boy.",
    not: {
      'The boy rows calmly back home':
        'He is terrified at this moment; he turns back only after the shape strides after him.',
      'The stars are hidden by cloud':
        'The shape stands between him and the stars; no cloud is mentioned.',
      'The scene slows to a peaceful stop':
        'The run-on line speeds the reader into the threat, which is anything but peaceful.',
    },
    more: "Wordsworth often uses enjambment to make the reader feel the motion he describes: here, the mountain's terrifying growth.",
    tip: "Comment on the reader's experience: 'The enjambment makes the peak tower up as we read, mirroring the boy's shock.'",
  },
  '"Love is not love\nWhich alters when it alteration finds"': {
    why: "'Love is not love' sounds like a contradiction on its own; the break makes the reader wait for the explanation in the next line: love that changes is not true love.",
    not: {
      'It shows the speaker no longer believes in love':
        'The sonnet defends true love; the next line limits the claim to love that alters.',
      'It makes the two lines rhyme':
        "'Love' and 'finds' do not rhyme; the break works on meaning, not sound.",
      'It speeds the poem to its end':
        'The break makes the reader pause and think, slowing rather than speeding.',
    },
    more: 'The contradiction-like opening grabs attention, and the enjambment resolves it: Shakespeare defines love by what it is not.',
    tip: "Comment on suspense: 'The enjambment turns an apparent contradiction into a definition.'",
  },
  '"Softly, in the dusk, a woman is singing to me;"': {
    why: "The commas after 'Softly' and 'dusk' make the reader pause inside the line. A pause within a line of poetry, usually marked by punctuation, is a caesura.",
    not: {
      Enjambment:
        'The line ends with a semicolon, so the sentence pauses there; it does not run on.',
      'Rhyming couplet': 'One line cannot make a couplet; a couplet is two rhyming lines.',
      'Internal rhyme': 'No two words inside the line rhyme.',
    },
    more: 'The pauses slow the opening line, matching the soft, dusky mood as the song begins to carry the speaker back in time.',
    tip: "Comment on pace: 'The caesurae slow the line, creating a gentle, reflective opening.'",
  },
  '"Your face, and the God-curst sun, and a tree,"': {
    why: 'Commas break the line into separate memories: the face, the sun, a tree. A pause inside a line of poetry, made by punctuation, is a caesura.',
    not: {
      Enjambment:
        'The line ends with a comma, a pause; the sentence does not run on without a break.',
      'Rhyming couplet': 'One line cannot make a couplet.',
      'Internal rhyme': 'No two words inside the line rhyme.',
    },
    more: 'Each pause isolates a memory, like separate photographs: the speaker cannot forget any part of that bitter scene.',
    tip: "Comment on memory: 'The caesurae break the scene into fragments the speaker cannot forget.'",
  },
  '"Upreared its head. I struck and struck again,"': {
    why: "The full stop after 'head' brings the line to a sudden stop in the middle. A pause inside a line of poetry is a caesura.",
    not: {
      Enjambment: 'The line ends with a comma, a pause, so it does not run straight on.',
      'Rhyming couplet': 'One line cannot make a couplet, and The Prelude is unrhymed.',
      'Internal rhyme': "No two words inside the line rhyme; 'struck' is repeated, not rhymed.",
    },
    more: "The abrupt stop mirrors the boy's shock as the mountain appears; then he rows harder, 'struck and struck again', in panic.",
    tip: "Comment on shock: 'The caesura halts the line just as the peak's appearance halts the boy.'",
  },
  '"O, no! it is an ever-fixed mark,"': {
    why: "'O, no' is cut off from the rest of the line by its punctuation, making a strong pause in the middle. A pause inside a line of poetry is a caesura.",
    not: {
      Enjambment: 'The line ends with a comma, so it pauses rather than running on.',
      'Rhyming couplet': 'One line cannot make a couplet.',
      'Internal rhyme': 'No two words inside the line rhyme.',
    },
    more: 'The exclamation and pause are a firm denial: love does not bend or alter, and the speaker rejects the idea before defining love.',
    tip: "Comment on tone: 'The caesura after the opening cry makes the denial emphatic.'",
  },
  '"This grew; I gave commands;"': {
    why: "The semicolon after 'This grew' splits the short statement in two, with a hard pause before 'I gave commands'. A pause inside a line of poetry is a caesura.",
    not: {
      Enjambment: 'The words end with a semicolon, a full pause; they do not run on.',
      'Rhyming couplet': 'These words are only part of one line.',
      'Internal rhyme': 'No two words here rhyme.',
    },
    more: 'The blunt pauses make the Duke sound cold and final, as if ordering a death took no more thought than ordering dinner.',
    tip: "Comment on character: 'The caesura shows the Duke's chilling calm as he hints at the Duchess's death.'",
  },
  '"Once more unto the breach, dear friends, once more,"': {
    why: "Commas split the line into three parts: the call, 'dear friends', and the repeated 'once more'. A pause inside a line of poetry is a caesura.",
    not: {
      Enjambment: 'The line ends with a comma, a pause; it does not run on without a break.',
      'Rhyming couplet': 'One line cannot make a couplet; Henry speaks in blank verse.',
      'Internal rhyme': "No two words rhyme; 'once more' is repeated, not rhymed.",
    },
    more: 'The pauses give the line the rhythm of a shout across a battlefield, each phrase thrown out for the soldiers to hear.',
    tip: "Comment on delivery: 'The caesurae break the line into rousing calls to the soldiers.'",
  },
  '"O, beware, my lord, of jealousy;"': {
    why: "Commas cut the line into pieces: 'O', 'beware', 'my lord', 'of jealousy'. Pauses inside a line of poetry, marked by punctuation, are caesurae.",
    not: {
      Enjambment: 'The line ends with a semicolon, a pause, so it does not run on.',
      'Rhyming couplet': 'One line cannot make a couplet.',
      'Internal rhyme': 'No two words inside the line rhyme.',
    },
    more: 'The halting pauses make Iago sound hesitant and caring, as if he can hardly bear to warn Othello: a performance that plants the poison.',
    tip: "Comment on deceit: 'The caesurae make Iago's warning sound reluctant, which makes Othello trust it.'",
  },
  '"I go, and it is done. The bell invites me."': {
    why: 'The line is chopped into short statements by a comma and a full stop. The pauses sound like a man pushing himself forward one step at a time towards the murder.',
    not: {
      'He is relaxed and unafraid':
        'Moments earlier he was shaken by a vision of a dagger; the clipped pauses are tense.',
      'He is hurrying to escape': "He is going towards Duncan's room, not away from danger.",
      'He has decided not to go': "'I go' shows the opposite: he is going now.",
    },
    more: "'The bell invites me' turns the signal from Lady Macbeth into a summons, as if Macbeth is being called to act rather than choosing.",
    tip: "Comment on resolve: 'The caesurae make Macbeth's decision sound forced and grim.'",
  },
  '"Ne\'er saw I, never felt, a calm so deep!"': {
    why: "The commas break the line into gasps, 'Ne'er saw I', 'never felt', as if the speaker is too overwhelmed to speak smoothly. The pauses convey breathless wonder.",
    not: {
      'Boredom with the city': "'A calm so deep' and the exclamation show awe, not boredom.",
      'Fear of the crowded streets': 'The city is calm and silent at dawn; nothing frightens him.',
      'Hurry to get across the bridge': 'The pauses slow the line down; he lingers to look.',
    },
    more: 'The calm is all the more striking because the scene is a city, usually busy and noisy, caught asleep at dawn.',
    tip: "Comment on feeling: 'The caesurae create a breathless tone, as if the speaker is lost for words.'",
  },
  '"For never was a story of more woe\nThan this of Juliet and her Romeo."': {
    why: "Two lines in a row end with rhyming words, 'woe' and 'Romeo'. A pair of consecutive lines that rhyme is a rhyming couplet.",
    not: {
      'Internal rhyme':
        'Internal rhyme puts rhyming words inside one line. Here the rhymes come at the ends of two lines.',
      'Half-rhyme':
        "Half-rhyme only partly matches, as 'love' and 'prove' do. 'Woe' and 'Romeo' rhyme fully.",
      'Blank verse':
        'Blank verse is unrhymed. These lines rhyme, which is why they stand out at the end of the play.',
    },
    more: 'The couplet closes the tragedy with a sense of finality, the rhyme sealing the story like the closing of a book.',
    tip: "Comment on ending: 'The rhyming couplet gives the tragedy a solemn, final close.'",
  },
  '"The time is out of joint. O cursed spite,\nThat ever I was born to set it right."': {
    why: "'Spite' and 'right' end two lines in a row and rhyme. A pair of consecutive rhyming lines is a rhyming couplet.",
    not: {
      'Internal rhyme': 'The rhymes sit at the ends of the lines, not inside them.',
      'Half-rhyme': "'Spite' and 'right' rhyme fully, not partly.",
      'Blank verse':
        'Blank verse is unrhymed; this couplet breaks out of it as the scene draws to a close.',
    },
    more: "Shakespeare often marks the end of a scene with a couplet. Here it seals Hamlet's bitter acceptance of the task his father's ghost has given him, just before he leaves.",
    tip: "Comment on function: 'The couplet ends the scene by fixing Hamlet's duty in a memorable rhyme.'",
  },
  '"That\'s my last Duchess painted on the wall,\nLooking as if she were alive. I call"': {
    why: "'Wall' and 'call' end two lines in a row and rhyme: a rhyming couplet. The whole poem is written in couplets, though the sentences run across them.",
    not: {
      'Internal rhyme': 'The rhyming words are at the ends of the lines, not inside one.',
      'Half-rhyme': "'Wall' and 'call' rhyme fully.",
      'Blank verse': 'Blank verse is unrhymed; these lines rhyme.',
    },
    more: 'The rhymes are hidden by enjambment, so the Duke sounds like natural speech while the form keeps tight control, like the Duke himself.',
    tip: "Comment on control: 'The concealed rhyming couplets mirror the Duke's control beneath his casual manner.'",
  },
  '"It is concluded. Banquo, thy soul\'s flight,\nIf it find heaven, must find it out tonight."': {
    why: "'Flight' and 'tonight' end two consecutive lines and rhyme. A rhyming pair of lines is a rhyming couplet.",
    not: {
      'Internal rhyme': 'The rhyming words end the lines; none rhyme within a line.',
      'Half-rhyme': "'Flight' and 'tonight' rhyme fully.",
      'Blank verse': 'Blank verse is unrhymed; the couplet breaks out of it.',
    },
    more: "Macbeth seals Banquo's murder in a neat rhyme, as if the killing were already done. The couplet also ends the scene with grim finality.",
    tip: "Comment on tone: 'The couplet makes Banquo's death sound settled and certain.'",
  },
  '"And this weak and idle theme,\nNo more yielding but a dream,"': {
    why: "'Theme' and 'dream' end two lines in a row and rhyme. Two consecutive lines that rhyme form a rhyming couplet.",
    not: {
      'Internal rhyme': 'The rhymes are at the line endings, not inside a line.',
      'Half-rhyme':
        "'Theme' and 'dream' share their vowel and their final 'm' sound: a full rhyme.",
      'Blank verse': 'Blank verse is unrhymed; Puck speaks in short rhyming lines.',
    },
    more: "Puck's closing speech moves in quick rhyming couplets, a light, magical rhythm that sets the fairies apart from the human characters.",
    tip: "Comment on character: 'The rhyming couplets give Puck's voice its playful, magical quality.'",
  },
  '"Gentle breath of yours my sails\nMust fill, or else my project fails,"': {
    why: "'Sails' and 'fails' end two consecutive lines and rhyme. A pair of rhyming lines in a row is a rhyming couplet.",
    not: {
      'Internal rhyme': 'The rhymes come at the ends of the lines.',
      'Half-rhyme': "'Sails' and 'fails' rhyme fully.",
      'Blank verse': "Blank verse is unrhymed. Prospero's epilogue is in rhyme.",
    },
    more: "Prospero asks for the audience's breath, their cheering, to fill his sails home. The simple couplets make the end of his magic sound humble.",
    tip: "Comment on tone: 'The rhyming couplets give the epilogue a humble, song-like plea.'",
  },
  "\"I have't. It is engender'd. Hell and night\nMust bring this monstrous birth to the world's light.\"":
    {
      why: "'Night' and 'light' end two consecutive lines and rhyme, closing the scene. A rhyming pair of lines is a rhyming couplet.",
      not: {
        'Internal rhyme': 'The rhymes are at the ends of the lines, not inside one.',
        'Half-rhyme': "'Night' and 'light' rhyme fully.",
        'Blank verse': 'Blank verse is unrhymed; this couplet breaks out of it.',
      },
      more: "Iago's plan is 'engender'd', conceived like a child, and the couplet seals it with a rhyme on darkness and light: evil brought into the world.",
      tip: "Comment on the image: 'The couplet presents Iago's plot as a monstrous birth, sealed by the rhyme.'",
    },
  '"Hear it not, Duncan, for it is a knell\nThat summons thee to heaven or to hell."': {
    why: "The rhyme on 'knell' and 'hell' clicks shut as Macbeth leaves to kill Duncan. The couplet seals his decision: there is no turning back.",
    not: {
      'It shows he has changed his mind':
        'He leaves at once to commit the murder; nothing in the rhyme suggests doubt.',
      'It makes the murder sound comic': 'A knell is a funeral bell; the rhyme is grim, not comic.',
      'It tells us Duncan is already dead':
        'Duncan is still alive; the bell summons Macbeth to kill him.',
    },
    more: "The knell is the bell rung for a death, so Macbeth hears Duncan's funeral before the murder: the rhyme of heaven and hell makes the stakes plain.",
    tip: "Comment on finality: 'The couplet closes the scene like a door shutting on Macbeth's last chance to stop.'",
  },
  '"The play\'s the thing\nWherein I\'ll catch the conscience of the King."': {
    why: "After a long, troubled speech, the rhyme on 'thing' and 'King' snaps shut with confidence: Hamlet has found a plan, the play that will expose Claudius's guilt.",
    not: {
      'A sense that he has given up': 'The couplet ends on a plan, not on despair.',
      'A joke for the audience':
        'Hamlet is deadly serious: he means to test whether Claudius killed his father.',
      'A hint the play will fail': "The play works: Claudius's reaction reveals his guilt.",
    },
    more: 'Couplets often mark a decision in Shakespeare: the shift from blank verse into rhyme sounds like a mind made up.',
    tip: "Comment on resolution: 'The rhyming couplet signals Hamlet's new determination.'",
  },
  '"The raven himself is hoarse\nThat croaks the fatal entrance of Duncan\nUnder my battlements."':
    {
      why: 'Lady Macbeth has just sent the messenger away and is alone. She speaks her thoughts aloud to the audience: a soliloquy.',
      not: {
        Aside:
          'An aside is a quick remark the other characters on stage do not hear. Here no one else is on stage.',
        Prologue:
          'A prologue introduces a play before it starts. This is Act 1, Scene 5, in the middle of the action.',
        Apostrophe:
          'She talks about the raven rather than to it; apostrophe would speak to the raven itself.',
      },
      more: "Even the raven sounds hoarse with croaking Duncan's arrival: in her soliloquy, Lady Macbeth already treats his death as certain.",
      tip: "Comment on what is revealed: 'The soliloquy shows Lady Macbeth's resolve before her husband has decided.'",
    },
  '"Gallop apace, you fiery-footed steeds,\nTowards Phoebus\' lodging."': {
    why: 'Juliet enters alone and, waiting for night and Romeo, speaks her longing aloud. A speech by a character alone on stage is a soliloquy.',
    not: {
      Aside: 'An aside is said while others are on stage and cannot hear. Juliet is alone.',
      Prologue:
        'A prologue opens a play. This speech opens Act 3, Scene 2, in the middle of the story.',
      Stichomythia:
        'Stichomythia is quick dialogue in alternating single lines. Juliet speaks alone, in a long speech.',
    },
    more: "Unaware that Romeo has just killed Tybalt, Juliet urges the sun's horses to hurry the night: the audience knows her joy is about to turn to grief.",
    tip: "Comment on dramatic irony: 'Juliet's joyful soliloquy is painful to watch, as the audience knows what has happened.'",
  },
  '"It must be by his death: and for my part,\nI know no personal cause to spurn at him"': {
    why: "Brutus has sent Lucius away and is alone, reasoning aloud about killing Caesar. A speech that lets the audience hear a character's private thoughts alone on stage is a soliloquy.",
    not: {
      Aside: 'An aside is a brief remark while others are present. Brutus is alone in his orchard.',
      Prologue: 'A prologue introduces the play. This comes in Act 2, as Brutus decides.',
      Apostrophe: 'Brutus speaks about Caesar, not to him.',
    },
    more: 'Brutus admits he has no personal reason to kill Caesar: he acts on what Caesar might become. The soliloquy shows his idealism and his self-deception.',
    tip: "Comment on motive: 'The soliloquy reveals that Brutus kills for an idea, not for revenge.'",
  },
  '"I left no ring with her; what means this lady?"': {
    why: "Malvolio has gone, and Viola, alone, puzzles aloud over Olivia's ring. A speech by a character alone on stage, sharing thoughts with the audience, is a soliloquy.",
    not: {
      Aside: 'An aside is spoken while others are on stage. Viola is alone.',
      Prologue: 'A prologue opens a play; this is in Act 2.',
      Stichomythia:
        'Stichomythia is rapid line-by-line dialogue. This is one character thinking aloud.',
    },
    more: 'In the soliloquy that follows, Viola works out that Olivia has fallen for her disguise, and the audience shares the joke she cannot share with anyone else.',
    tip: "Comment on the audience: 'The soliloquy makes the audience Viola's confidants in the comedy of mistaken identity.'",
  },
  '"This can be no trick: the conference was sadly borne."': {
    why: 'The others have left, and Benedick, alone, comes out of hiding and talks through what he overheard. A speech by a character alone on stage is a soliloquy.',
    not: {
      Aside: 'An aside is said while others are present; they have just left.',
      Prologue: 'A prologue opens a play; this is in the middle of Act 2.',
      Stichomythia: 'Stichomythia is rapid exchange of single lines; Benedick speaks alone.',
    },
    more: 'The comedy lies in what the audience knows: the conversation was a trick, set up for him to overhear.',
    tip: "Comment on comedy: 'Benedick's soliloquy is funny because the audience knows he has been tricked.'",
  },
  '"And what\'s he then, that says I play the villain?"': {
    why: 'Cassio has left, and Iago is alone, talking to the audience about his own villainy. A speech by a character alone on stage is a soliloquy.',
    not: {
      Aside: 'An aside is a brief remark others on stage do not hear. Iago is alone.',
      Prologue: 'A prologue opens a play. This comes in Act 2.',
      Apostrophe: 'Iago does not speak to anyone absent; he speaks his thoughts to the audience.',
    },
    more: "Iago's soliloquies make the audience his confidants, almost accomplices: we know his plot while every character trusts 'honest Iago'.",
    tip: "Comment on the audience: 'Iago's soliloquies draw the audience uncomfortably into his plotting.'",
  },
  '"If it were done when \'tis done, then \'twere well\nIt were done quickly."': {
    why: "Alone, Macbeth weighs the murder: if only it could be done and finished quickly. The soliloquy shows the doubts he hides from his wife and from Duncan's court.",
    not: {
      'His joy at becoming king':
        'He is not king yet, and the speech is full of hesitation, not joy.',
      'His plan to flee Scotland':
        'He thinks about the murder and its consequences, not about escape.',
      'His trust in the witches':
        'He does not mention the witches here; he worries about judgement and consequence.',
    },
    more: 'By the end of this soliloquy Macbeth decides against the murder, until Lady Macbeth changes his mind: the audience has seen how close he came to stopping.',
    tip: "Comment on access: 'The soliloquy gives the audience access to Macbeth's conscience, which the other characters never see.'",
  },
  '"The Moor is of a free and open nature\nThat thinks men honest that but seem to be so"': {
    why: "Alone, Iago explains that Othello trusts anyone who seems honest. His plan depends on exactly that: he will use Othello's open, trusting nature against him.",
    not: {
      "He admires Othello's honesty": "He describes Othello's openness only to exploit it.",
      'He plans to warn Othello': 'He plans to deceive Othello, not warn him.',
      'He thinks Othello is too clever':
        "He thinks the opposite: that Othello can be 'led by the nose'.",
    },
    more: "Soliloquy is how Shakespeare lets the audience know more than the characters: we watch Iago's lies work, knowing all the time they are lies.",
    tip: "Comment on dramatic irony: 'The soliloquy reveals Iago's plan, so every later scene of trust is painful to watch.'",
  },
  '"If chance will have me king, why, chance may crown me\nWithout my stir."': {
    why: 'Macbeth says this while Banquo, Ross and Angus stand near him, but they do not hear it. A remark spoken to the audience that others on stage do not hear is an aside.',
    not: {
      Soliloquy:
        'A soliloquy is spoken alone on stage. Others are present here, so it is an aside.',
      Prologue: 'A prologue opens a play; this is in Act 1, Scene 3.',
      Stichomythia: 'Stichomythia is rapid line-by-line dialogue; Macbeth speaks to himself.',
    },
    more: 'The aside shows Macbeth hoping the crown will come without his doing anything, just after he has imagined murder.',
    tip: "Comment on what is hidden: 'The aside reveals thoughts Macbeth keeps from the men beside him.'",
  },
  '"Shall I hear more, or shall I speak at this?"': {
    why: "Romeo is below Juliet's window, and Juliet does not hear him. A remark to the audience that another character on stage does not hear is an aside.",
    not: {
      Soliloquy:
        'A soliloquy is spoken by someone alone on stage. Juliet is present, above, though she does not hear.',
      Prologue: 'A prologue opens the play; this is in Act 2.',
      Stichomythia: 'Stichomythia is quick alternating dialogue; this is a single aside.',
    },
    more: "The aside lets the audience share Romeo's delight at overhearing Juliet's love, and his comic uncertainty over whether to reveal himself.",
    tip: "Comment on intimacy: 'The aside lets the audience share Romeo's excitement as he overhears Juliet.'",
  },
  '"He takes her by the palm. Ay, well said, whisper."': {
    why: 'Iago watches Cassio and Desdemona and comments to the audience without their hearing. A remark spoken to the audience while others on stage cannot hear is an aside.',
    not: {
      Soliloquy: 'A soliloquy is spoken by a character alone. Cassio and Desdemona are on stage.',
      Prologue: 'A prologue opens a play; this is in Act 2.',
      Apostrophe: 'Iago talks about Cassio, not to him; his words are for the audience.',
    },
    more: "Iago turns an innocent courtesy, Cassio taking Desdemona's hand, into evidence for his plot: the aside shows him twisting what he sees.",
    tip: "Comment on manipulation: 'The aside shows Iago turning innocent gestures into proof for his lies.'",
  },
  '"How like a fawning publican he looks!"': {
    why: 'Shylock says this as Antonio enters, while Bassanio stands beside him. A remark to the audience that the other characters do not hear is an aside.',
    not: {
      Soliloquy: 'A soliloquy is spoken alone on stage; Antonio and Bassanio are present.',
      Prologue: 'A prologue opens a play; this is in Act 1, Scene 3.',
      Stichomythia: 'Stichomythia is rapid exchange of lines; this is one hidden remark.',
    },
    more: 'The aside lets the audience hear the hostility Shylock hides behind polite words to Antonio, setting up the conflict of the bond.',
    tip: "Comment on concealment: 'The aside reveals Shylock's hidden hostility as he greets Antonio politely.'",
  },
  '"Though this be madness, yet there is method in\'t."': {
    why: 'Polonius says this while talking with Hamlet, who does not hear it. A remark made to the audience that another character on stage does not hear is an aside.',
    not: {
      Soliloquy: 'A soliloquy is spoken alone; Hamlet is right there with Polonius.',
      Prologue: 'A prologue opens a play; this is in Act 2.',
      Stichomythia: 'Stichomythia is rapid line-by-line exchange; this is a private comment.',
    },
    more: "Polonius suspects Hamlet's madness has a pattern, more shrewdly than he knows: the audience suspects the madness is partly an act.",
    tip: "Comment on irony: 'Polonius's aside comes closer to the truth than he realises.'",
  },
  '"What shall Cordelia speak? Love, and be silent."': {
    why: "Cordelia says this just after her sister's flattery of Lear, in front of the whole court, and no one hears her. A remark to the audience, unheard by others on stage, is an aside.",
    not: {
      Soliloquy: 'A soliloquy needs the speaker to be alone; the whole court is present.',
      Prologue: 'A prologue opens a play; this comes in the middle of the first scene.',
      Apostrophe: 'She speaks about herself, not to someone absent.',
    },
    more: 'While her sisters make grand speeches, Cordelia decides to love and say nothing, the honesty that leads Lear to disown her.',
    tip: "Comment on contrast: 'The aside sets Cordelia's silent, honest love against her sisters' flattery.'",
  },
  '"I must obey. His art is of such power,\nIt would control my dam\'s god, Setebos"': {
    why: 'Caliban says this in front of Prospero, who does not hear it. A remark to the audience that another character on stage does not hear is an aside.',
    not: {
      Soliloquy: 'A soliloquy is spoken alone; Prospero is on stage.',
      Prologue: 'A prologue opens a play; this is in Act 1, Scene 2.',
      Stichomythia: 'Stichomythia is quick alternating dialogue; this is a hidden remark.',
    },
    more: "The aside shows Caliban obeying only out of fear: Prospero's magic, not loyalty, keeps him a servant.",
    tip: "Comment on power: 'The aside reveals that Caliban's obedience is forced, not willing.'",
  },
  '"Stars, hide your fires!\nLet not light see my black and deep desires."': {
    why: "Duncan has just named Malcolm his heir. In the aside Macbeth asks the stars to hide his 'black and deep desires': the court sees a loyal thane, the audience sees ambition turning murderous.",
    not: {
      'His loyalty to Malcolm, the new prince':
        "Malcolm's new title is an obstacle Macbeth must 'fall down, or else o'erleap'.",
      'His fear of the dark':
        'He asks for darkness to hide his desires; he wants the dark, not fears it.',
      'His plan to leave the court':
        "He leaves to prepare Duncan's welcome; his thoughts are on the crown.",
    },
    more: "The aside creates dramatic irony: Duncan praises Macbeth's loyalty in the very next lines, while the audience knows what Macbeth wants.",
    tip: "Comment on dramatic irony: 'The aside lets the audience see Macbeth's ambition while Duncan praises him.'",
  },
  '"Yet, a barful strife!\nWhoe\'er I woo, myself would be his wife."': {
    why: "Sent to woo Olivia for Orsino, Viola admits to the audience that she wants to be Orsino's wife herself. The aside reveals the love she must hide behind her disguise.",
    not: {
      'She has fallen for Olivia': 'It is Olivia who will fall for Viola; Viola loves Orsino.',
      'She wants to stop serving Orsino': 'She will do her best for him, though it hurts her.',
      'She thinks Orsino is cruel': 'Nothing suggests cruelty: she wants to marry him.',
    },
    more: "'Barful strife' means a struggle full of obstacles: she must win another woman for the man she loves.",
    tip: "Comment on the complication: 'The aside reveals the love triangle that drives the comedy.'",
  },
  '"Not I, believe me, you have dancing shoes,\nWith nimble soles, I have a soul of lead"': {
    why: "Romeo plays on the 'soles' of shoes and the 'soul' within him: his friends have light feet, but his spirit is heavy. Using two words that sound alike for a double meaning is a pun.",
    not: {
      Oxymoron:
        "No two contradictory words are joined; 'soul of lead' is a heavy spirit, not a contradiction.",
      Paradox: 'Nothing here contradicts itself; the line plays on sound and meaning.',
      Hyperbole: 'Nothing is exaggerated: Romeo describes his low mood.',
    },
    more: "Lovesick Romeo is too gloomy to dance, but not too gloomy to make a clever pun: Shakespeare's lovers enjoy wordplay even in sorrow.",
    tip: "Explain both meanings: 'The pun on soles and soul contrasts his friends' lightness with his heavy heart.'",
  },
  '"Not so, my lord, I am too much i\' the sun."': {
    why: "Claudius asks why 'the clouds' still hang on Hamlet, just after calling him 'my son'. Hamlet's reply plays on 'sun' and 'son': he has had too much of being called a son. A play on words that sound alike is a pun.",
    not: {
      Oxymoron: 'No two contradictory words are joined.',
      Paradox: 'Nothing contradicts itself; the line turns on a sound.',
      Hyperbole: 'Nothing is exaggerated: the joke is in the double meaning.',
    },
    more: "Hamlet's puns let him insult the King in public while seeming polite, a bitter wit that shows his disgust at his mother's remarriage.",
    tip: "Comment on purpose: 'Hamlet's pun lets him attack Claudius under cover of a joke.'",
  },
  '"A little more than kin, and less than kind."': {
    why: "Hamlet plays on 'kin' and 'kind': Claudius is now more than a relative, a stepfather, but less than kind, and not of his kind. Wordplay on two similar words with double meanings is a pun.",
    not: {
      Oxymoron: 'No two contradictory words are joined in one phrase.',
      Euphemism: "A euphemism softens. Hamlet's words are a hidden insult.",
      Hyperbole: 'Nothing is exaggerated: the line is compact and precise.',
    },
    more: "Hamlet's first words in the play are this bitter aside: from the start, his wit is a weapon against Claudius.",
    tip: "Comment on tone: 'The pun reveals Hamlet's hostility to Claudius from his first line.'",
  },
  "\"'If he be Mr. Hyde,' he had thought, 'I shall be Mr. Seek.'\"": {
    why: "Utterson plays on 'Hyde' and 'hide', as in hide and seek: if Hyde hides, Utterson will seek. A play on words that sound alike is a pun.",
    not: {
      Oxymoron: 'No two contradictory words are joined.',
      Paradox: "Nothing contradicts itself; the joke turns on the name's sound.",
      Euphemism: 'A euphemism softens something unpleasant; this is a joke.',
    },
    more: "The pun hints at the novel's subject: Hyde is the hidden self that Jekyll conceals, and the whole story is a search for him.",
    tip: "Comment on the name: 'The pun reveals that Hyde's name itself signals concealment.'",
  },
  '"A trade, sir, that I hope I may use with a safe conscience, which is indeed, sir, a mender of bad soles."':
    {
      why: "The cobbler mends 'soles' of shoes, but the word also sounds like 'souls', as if he were a priest. Playing on two words that sound alike is a pun.",
      not: {
        Oxymoron: 'No two contradictory words are joined.',
        Paradox: 'Nothing contradicts itself; the humour is in the double meaning.',
        Euphemism: 'A euphemism softens; the cobbler is teasing, not softening.',
      },
      more: "The tribunes are angry and serious, and the cobbler's puns make fun of them, so the play opens with ordinary people mocking authority.",
      tip: "Comment on character: 'The cobbler's pun shows the common people's cheeky wit against the tribunes.'",
    },
  '"I do live by the church, for I do live at my house, and my house doth stand by the church."': {
    why: "Feste plays on 'live by': not earning his living from the church, but living next to it. Using two meanings of the same words for a joke is a pun.",
    not: {
      Oxymoron: 'No two contradictory words are joined.',
      Paradox: "Nothing truly contradicts itself; Feste twists a phrase's meaning.",
      Euphemism: 'A euphemism softens something unpleasant; this is plain fun.',
    },
    more: 'Feste is a professional fool, paid for his wit. His wordplay shows how easily words can be bent, a running joke in a play about disguise.',
    tip: "Explain both meanings: 'Feste's pun on live by shows his skill at twisting words.'",
  },
  '"Ask for me tomorrow, and you shall find me a grave man."': {
    why: "'Grave' means both serious and a burial place. Mercutio, fatally wounded, still makes a joke of his own death: his wit lasts to the end.",
    not: {
      'He thinks the wound is nothing': 'The pun shows he knows he will be in his grave tomorrow.',
      'He has forgiven both families': "In the same speech he curses 'both your houses'.",
      'He wants Romeo to laugh at Tybalt': 'His joke is about his own death, not about Tybalt.',
    },
    more: "The pun sharpens the shock: the play's liveliest wit is suddenly dying, and the comedy of the first half dies with him.",
    tip: "Comment on the turning point: 'Mercutio's dying pun marks the moment the play turns from comedy to tragedy.'",
  },
  '"I\'ll gild the faces of the grooms withal,\nFor it must seem their guilt."': {
    why: "She plays on 'gild', to coat with gold, and 'guilt': smearing the grooms with Duncan's blood will make them look guilty. Joking at such a moment shows her chilling control.",
    not: {
      'She is overcome with guilt':
        'She is calm and practical here; her guilt overwhelms her only later.',
      'She wants to confess at once':
        'She is planning to frame the grooms, the opposite of confessing.',
      'She is frightened of the grooms':
        'The grooms are drugged and asleep; she goes to them without fear.',
    },
    more: 'The contrast is sharp: Macbeth is horrified by his bloody hands, while his wife coolly makes wordplay out of the blood.',
    tip: "Comment on contrast: 'Lady Macbeth's pun shows her composure against Macbeth's horror.'",
  },
  "\"Well, in that hit you miss: she'll not be hit\nWith Cupid's arrow, she hath Dian's wit;\"": {
    why: 'Romeo refers to Cupid, the god of love, and Diana, the goddess who rejected love. A reference to another story, myth or figure is an allusion.',
    not: {
      Euphemism: 'A euphemism softens something unpleasant; Romeo is complaining plainly.',
      Oxymoron: 'No two contradictory words are joined.',
      Hyperbole: 'Nothing is exaggerated: he simply says Rosaline will not fall in love.',
    },
    more: 'The myths make Rosaline sound unreachable, a goddess sworn against love, which explains why Romeo is so miserable before he meets Juliet.',
    tip: "Explain the reference: 'The allusion to Diana presents Rosaline as vowed against love.'",
  },
  '"I ought to be thy Adam; but I am rather the fallen angel"': {
    why: "The creature refers to the Bible and to Milton's Paradise Lost: Adam, the first man God made, and Satan, the angel cast out of heaven. Referring to another story or text is an allusion.",
    not: {
      Euphemism: "A euphemism softens; the creature's words are bitter and direct.",
      Pun: 'A pun plays on a double meaning; these names are used plainly.',
      Oxymoron: 'No two contradictory words are joined.',
    },
    more: "He should have been loved like Adam, God's first creation; instead he is driven out like Satan. The allusion makes Victor a careless god.",
    tip: "Comment on the comparison: 'The allusion casts Victor as a god who has abandoned his creation.'",
  },
  '"If we were not perfectly convinced that Hamlet\'s Father died before the play began"': {
    why: "Dickens refers to Shakespeare's Hamlet, whose dead father appears as a ghost. A reference to another text is an allusion.",
    not: {
      Euphemism: 'A euphemism softens death; here death is stated plainly.',
      Pun: 'A pun plays on a double meaning; nothing here does.',
      Paradox: 'Nothing contradicts itself.',
    },
    more: "The joke prepares readers for a ghost story: just as Hamlet's father must be dead for his ghost to matter, so must Marley.",
    tip: "Comment on purpose: 'The allusion to Hamlet sets up a ghost story with a knowing wink.'",
  },
  "\"'I incline to Cain's heresy,' he used to say quaintly: 'I let my brother go to the devil in his own way.'\"":
    {
      why: "Utterson refers to Cain in the Bible, who asked whether he was his brother's keeper. A reference to another story or text is an allusion.",
      not: {
        Euphemism: 'A euphemism softens something unpleasant; Utterson is joking about tolerance.',
        Paradox: 'Nothing contradicts itself; the line explains his attitude.',
        Oxymoron: 'No two contradictory words are joined.',
      },
      more: "Cain murdered his brother; Utterson borrows only his excuse, that we need not watch over others. It shows his tolerance of other men's secrets.",
      tip: "Comment on character: 'The allusion to Cain shows Utterson's habit of not judging others.'",
    },
  '"Will all great Neptune\'s ocean wash this blood\nClean from my hand?"': {
    why: 'Macbeth refers to Neptune, the Roman god of the sea, to mean all the oceans of the world. A reference to a myth or another text is an allusion.',
    not: {
      Euphemism: 'A euphemism softens; Macbeth names the blood plainly.',
      Pun: 'A pun plays on a double meaning; nothing here does.',
      Oxymoron: 'No two contradictory words are joined.',
    },
    more: "Calling on a god's whole ocean makes his guilt enormous: not even the sea could clean it.",
    tip: "Comment on scale: 'The allusion to Neptune magnifies Macbeth's guilt beyond any power to wash it away.'",
  },
  '"All flesh is grass"': {
    why: 'Duffy quotes the Bible, Isaiah 40:6, where human life is compared to grass that withers. A reference to another text is an allusion.',
    not: {
      Euphemism: 'A euphemism softens. This line states mortality starkly.',
      Pun: 'A pun plays on a double meaning; the words are used plainly.',
      Hyperbole: "Nothing is exaggerated: the Bible's point is that all life is short.",
    },
    more: 'After naming three war-torn cities, the biblical words sound like a verdict: in every war, every life is as fragile as grass.',
    tip: "Comment on tone: 'The biblical allusion gives the photographer's work the solemnity of a funeral service.'",
  },
  '"A Daniel come to judgment! Yea, a Daniel!"': {
    why: 'Shylock compares Portia to Daniel, the wise young judge of the Bible. A reference to a figure from another text is an allusion.',
    not: {
      Euphemism: 'A euphemism softens; Shylock is praising the judge.',
      Pun: "A pun plays on a double meaning; 'Daniel' is used plainly.",
      Oxymoron: 'No two contradictory words are joined.',
    },
    more: "The allusion turns against Shylock: moments later the 'wise young judge' defeats him, and Gratiano throws the same words back at him.",
    tip: "Comment on irony: 'Shylock's allusion to Daniel becomes ironic when the judge rules against him.'",
  },
  '"if ever I read Satan\'s signature upon a face, it is on that of your new friend"': {
    why: "Satan is the Bible's devil, and a signature marks who made something. Utterson suggests Hyde's face is marked by the devil himself: his evil is written on it.",
    not: {
      'He has signed a deal with Jekyll':
        "The signature is a figure of speech for the look of Hyde's face, not a real document.",
      'He is clever with words': "The phrase is about Hyde's appearance, not his speech.",
      'He is secretly religious':
        'Satan stands for evil; the allusion condemns Hyde, it does not make him pious.',
    },
    more: "Many Victorians believed a face could show a person's character. The allusion turns that belief into horror.",
    tip: "Comment on context: 'The allusion reflects the Victorian belief that evil could be read in a face.'",
  },
  '"The old Lie: Dulce et decorum est\nPro patria mori."': {
    why: 'The motto, from the Roman poet Horace, says it is sweet and fitting to die for your country. After describing a soldier dying from gas, Owen calls it a lie: such a death is neither sweet nor fitting.',
    not: {
      'The Latin has been translated wrongly':
        'Owen does not question the translation; he rejects what the motto claims.',
      'Old soldiers tell lies about the war':
        'The lie is told to children by people at home, not by soldiers.',
      'The motto was written long ago':
        "'Old' means long repeated, but the point is that it is false.",
    },
    more: 'Ending on the allusion turns the title into an accusation: the poem itself is the evidence that the old words lie.',
    tip: "Comment on structure: 'The final allusion exposes the motto as a lie the whole poem has disproved.'",
  },
  '"Old Marley was as dead as a door-nail."': {
    why: "Marley is compared to a door-nail using 'as dead as'. A comparison made with 'like' or 'as' is a simile.",
    not: {
      Metaphor:
        "A metaphor would say Marley was a door-nail. 'As dead as' makes this a comparison.",
      Personification:
        'Personification gives human qualities to something not human; Marley is already a man.',
      Juxtaposition:
        'Juxtaposition sets contrasting things side by side; nothing here is contrasted.',
    },
    more: 'It was a common saying, and the narrator jokes about it at once, wondering what is so dead about a door-nail: the ghost story begins with a laugh.',
    tip: "Comment on tone: 'The comic simile makes the opening playful, even as it insists Marley is dead.'",
  },
  '"My terror had fallen from me like a garment."': {
    why: "The narrator's fear is compared to a garment slipping off, using 'like'. A comparison made with 'like' or 'as' is a simile.",
    not: {
      Metaphor: "A metaphor would say his terror was a garment. 'Like' makes this a comparison.",
      Personification: 'Terror is not given human actions; it simply falls away like clothing.',
      Hyperbole: 'Nothing is exaggerated: the fear leaves him suddenly and completely.',
    },
    more: 'Clothing can drop off in a moment, so the simile captures how suddenly his panic leaves him, almost as if it had never been part of him.',
    tip: "Explain what is shared: 'The simile suggests his terror vanished as easily as a cloak slipping off.'",
  },
  '"It is the east, and Juliet is the sun!"': {
    why: 'Romeo says Juliet is the sun, rising in the east at her window. Saying one thing is another is a metaphor.',
    not: {
      Simile: "There is no 'like' or 'as': Juliet simply is the sun.",
      Personification:
        'Personification gives human qualities to the non-human. Here a human, Juliet, becomes the sun, the other way round.',
      Oxymoron: 'No two contradictory words are joined.',
    },
    more: "The sun gives light, warmth and life, so the metaphor makes Juliet the centre of Romeo's world, outshining everything around her.",
    tip: "Explore the image: 'The metaphor presents Juliet as the source of light and life in Romeo's world.'",
  },
  '"If music be the food of love, play on"': {
    why: "Orsino calls music 'the food of love', something love feeds on. Describing one thing as another is a metaphor.",
    not: {
      Simile: "There is no 'like' or 'as': music is called food, not compared to it.",
      Personification: 'Nothing non-human is given human qualities.',
      Hyperbole: 'Nothing is exaggerated: the request to play on is plain.',
    },
    more: 'If music feeds love, Orsino wants so much of it that his appetite will sicken and die: he is in love with being in love.',
    tip: "Comment on character: 'The metaphor of music as food reveals Orsino's indulgent, self-pitying love.'",
  },
  '"the bride within the bridal dress had withered like the dress, and like the flowers"': {
    why: 'Miss Havisham, the bride, has withered just as her wedding dress and flowers have. The similes link her to the decaying objects: she has rotted away along with her wedding day.',
    not: {
      'She is still young and lively':
        "She has 'withered' and has 'no brightness left' except in her sunken eyes.",
      'She is soon to be married':
        'The wedding was long ago; she was jilted and has never moved on.',
      'She has kept her dress and flowers fresh':
        'The dress and flowers have withered; that is the point of the comparison.',
    },
    more: 'Miss Havisham has stopped every clock at the moment she was jilted. The similes show time decaying her anyway, however hard she tries to freeze it.',
    tip: "Comment on time: 'The similes show Miss Havisham decaying with her wedding day, unable to escape time.'",
  },
  '"It is the star to every wandering bark"': {
    why: "A 'bark' is a ship, and sailors steered by the stars. Calling love the star to every wandering ship means true love guides those who are lost, fixed and reliable.",
    not: {
      'It is cold and far away':
        'The point is guidance, not distance: the star helps the lost find their way.',
      'It shines only for a short time':
        'The sonnet says true love does not change or fade; the star is constant.',
      'It changes with every season':
        'The opposite: stars stay fixed, so sailors could trust them, just as true love stays constant.',
    },
    more: 'The sonnet builds a chain of steady images, the fixed mark and the guiding star, all making love the one thing that does not move.',
    tip: "Comment on constancy: 'The metaphor of the guiding star presents true love as fixed and dependable.'",
  },
  '"The Assyrian came down like the wolf on the fold,\nAnd his cohorts were gleaming in purple and gold;"':
    {
      why: "The 'g' sounds of 'gleaming' and 'gold' add shine, but the simile does the work: the Assyrian attacks 'like the wolf on the fold', a predator falling on helpless sheep.",
      not: {
        Alliteration:
          "'Gleaming' and 'gold' share a sound that adds splendour, but sound alone does not make the army a predator.",
        Metaphor: "A metaphor would say the Assyrian was a wolf. 'Like' makes this a simile.",
        Personification:
          'The army is already human; it is compared to an animal, not given human traits.',
      },
      more: 'A fold is a pen for sheep, so the simile makes the victims helpless and the attack swift and savage.',
      tip: "Rank the devices: 'Though the alliteration adds splendour, the simile of the wolf makes the army predatory.'",
    },
  '"Arise fair sun and kill the envious moon,\nWho is already sick and pale with grief"': {
    why: "The moon is personified as envious and sick with grief, but it is the metaphor that turns Juliet into the 'fair sun', rising to outshine it.",
    not: {
      Personification:
        'Personification makes the moon jealous and sickly; it says nothing about Juliet being the sun.',
      Simile: "There is no 'like' or 'as': she becomes the sun itself.",
      Hyperbole:
        'The praise is extravagant, but the device that makes her the sun is the metaphor.',
    },
    more: 'The moon was linked with Diana, goddess of chastity, so Romeo urges Juliet to outshine a cold, virginal rival and choose love.',
    tip: 'Separate the two devices: the metaphor makes Juliet the sun; personification makes the moon her jealous rival.',
  },
  '"The ancient tower of a church, whose gruff old bell was always peeping slily down at Scrooge"':
    {
      why: "The bell is 'gruff' and 'peeping slily down' at Scrooge, as if it were a sly old man watching him. Giving human qualities to an object is personification.",
      not: {
        'Pathetic fallacy':
          'Pathetic fallacy uses weather or nature to mirror a mood. A church bell is neither.',
        Simile: "Nothing is compared using 'like' or 'as'.",
        Oxymoron: 'No two contradictory words are joined.',
      },
      more: "Even the buildings seem to keep an eye on Scrooge, as if the city itself disapproves of him: Dickens's London is alive.",
      tip: "Comment on atmosphere: 'Personifying the bell as peeping gives the city a watchful, almost judging presence.'",
    },
  '"The river glideth at his own sweet will"': {
    why: "The river is called 'his' and moves at 'his own sweet will', as if it were a person choosing where to go. Giving human qualities to something not human is personification.",
    not: {
      Simile: "Nothing is compared using 'like' or 'as'.",
      Hyperbole: 'Nothing is exaggerated: the river flows gently.',
      Oxymoron: 'No two contradictory words are joined.',
    },
    more: 'At dawn the city is quiet, and even the Thames seems relaxed and free, moving only as it pleases.',
    tip: "Comment on mood: 'The personification makes the river seem free and at peace in the silent dawn.'",
  },
  '"the moon gazed on my midnight labours"': {
    why: "The moon is said to gaze, a human way of looking, on Victor's secret work. Giving human actions to something not human is personification.",
    not: {
      Simile: "Nothing is compared using 'like' or 'as'.",
      Hyperbole: 'Nothing is exaggerated; the moon simply watches.',
      Oxymoron: 'No two contradictory words are joined.',
    },
    more: "With only the moon to watch him, Victor's work seems lonely and secret, as if nature itself is a silent witness to something forbidden.",
    tip: "Comment on atmosphere: 'The personified moon watches Victor's secret labours like a silent witness.'",
  },
  '"nothing but a door on the lower storey and a blind forehead of discoloured wall on the upper"':
    {
      why: 'A forehead without eyes is blank and blind: the building has no windows on the upper floor. The personification makes it seem secretive and unfriendly, hiding what goes on inside.',
      not: {
        'It is grand and welcoming':
          "It is 'sinister' and neglected; nothing about it welcomes visitors.",
        'It has just been repaired':
          "The walls are 'discoloured' and marked by 'sordid negligence'.",
        'It is full of bright windows': "'Blind' means it has no windows at all on that floor.",
      },
      more: "This is the back of Jekyll's house, the door Hyde uses: the blank, blind building suits a secret life.",
      tip: "Link setting to theme: 'The blind forehead of wall suggests secrecy, fitting the hidden life of Hyde.'",
    },
  '"the cold winter wind had brought with it clouds so sombre, and a rain so penetrating, that further outdoor exercise was now out of the question"':
    {
      why: "The novel opens with cold wind, sombre clouds and penetrating rain, which match the gloomy, unloved life Jane leads at Gateshead. Weather that reflects a character's situation is pathetic fallacy.",
      not: {
        Simile: "Nothing is compared using 'like' or 'as'.",
        Hyperbole: 'Nothing is exaggerated: it is a wet winter afternoon.',
        Oxymoron: 'No two contradictory words are joined.',
      },
      more: 'Jane is glad not to walk, but the bleak weather prepares for the misery and cruelty she suffers indoors with the Reeds.',
      tip: "Comment on the opening: 'The pathetic fallacy of the opening sets a bleak mood for Jane's childhood.'",
    },
  '"the day had been a dreary one, and a dense drizzly fog lay low upon the great city"': {
    why: 'A dreary day and a dense fog hang over London as Holmes, Watson and Mary Morstan set out on a mysterious errand. The gloomy weather mirrors the uneasy mood: pathetic fallacy.',
    not: {
      Personification: 'The fog lies low, as fog does; it is given no human quality.',
      Simile: "Nothing is compared using 'like' or 'as'.",
      Hyperbole: 'Nothing is exaggerated: London fogs were thick and common.',
    },
    more: 'Fog hides things, so it suits a mystery: the city itself seems to keep secrets as the characters move into danger.',
    tip: "Comment on genre: 'The fog creates the secretive mood of a detective story.'",
  },
  '"the evening mists were rising now, and in all the broad expanse of tranquil light they showed to me, I saw no shadow of another parting from her"':
    {
      why: "As the mists rise, the scene fills with 'tranquil light', and Pip sees 'no shadow of another parting'. The calm, clearing weather mirrors his hope of a peaceful future with Estella.",
      not: {
        'That Pip will soon leave Estella':
          "He sees 'no shadow of another parting', so he expects them to stay together.",
        'That a storm is about to break':
          "The light is 'tranquil' and the mists are lifting: calm, not storm.",
        'That Pip feels nothing but regret': 'The calm light suggests hope, not only regret.',
      },
      more: 'The mists echo the opening on the misty marshes, so the novel ends where it began, but with the light now clear.',
      tip: "Comment on structure: 'The rising mists mirror the novel's opening, now bringing hope instead of fear.'",
    },
  '"The lone and level sands stretch far away."': {
    why: "'Lone' and 'level' begin with the same 'l' sound, close together. Repeating the first sound of nearby words is alliteration.",
    not: {
      Onomatopoeia: 'No word imitates a sound.',
      'Internal rhyme': 'No two words in the line rhyme.',
      Personification: 'The sands stretch away as sands do; nothing is given human qualities.',
    },
    more: "The long 'l' sounds slow the final line down, so the desert seems to stretch endlessly into the distance.",
    tip: "Comment on the ending: 'The soft alliteration draws out the last line, leaving the reader in an empty desert.'",
  },
  '"Pale grew thy cheek and cold,\nColder thy kiss"': {
    why: "'Cold', 'colder' and 'kiss' share the hard 'c' sound at their start. Repeating the first sound of nearby words is alliteration.",
    not: {
      Sibilance: "There is no run of hissing 's' sounds; the repeated sound is a hard 'c'.",
      Onomatopoeia: 'No word imitates a sound.',
      'Internal rhyme': 'No two words inside a line rhyme.',
    },
    more: "The hard 'c' sounds make the parting feel cold and harsh: even a kiss has turned cold.",
    tip: "Comment on tone: 'The harsh alliteration conveys the coldness that ended their love.'",
  },
  '"Men marched asleep. Many had lost their boots"': {
    why: "'Men', 'marched' and 'many' all begin with 'm'. Repeating the first sound of nearby words is alliteration.",
    not: {
      Sibilance: "There is no run of hissing 's' sounds; the repeated sound is 'm'.",
      Onomatopoeia: 'No word imitates a sound.',
      'Internal rhyme': 'No two words in the line rhyme.',
    },
    more: "The heavy 'm' sounds slow the line like the exhausted men themselves, so tired they march in their sleep.",
    tip: "Comment on pace: 'The alliteration slows the line, mirroring the soldiers' exhausted march.'",
  },
  '"It was cold, bleak, biting weather"': {
    why: "'Bleak' and 'biting' begin with a hard 'b', a plosive made with a burst of air. The repeated sound gives the cold a sharp sting, as if the weather bites.",
    not: {
      'A soft and gentle calm':
        "Plosive sounds are hard and abrupt, not soft; 'biting' is aggressive.",
      'The cheer of Christmas bells':
        'The sound here is harsh; the cheer belongs to others in the story, not to this weather.',
      'A warm and cosy mood': 'Cold, bleak and biting describe the opposite of warmth.',
    },
    more: "The harsh weather matches Scrooge himself, whose inner coldness 'froze his old features'. The opening sound sets that mood.",
    tip: "Comment on sound and character: 'The plosive alliteration makes the cold as biting as Scrooge.'",
  },
  '"Ships, towers, domes, theatres, and temples lie\nOpen unto the fields, and to the sky"': {
    why: "'Lie' and 'sky' rhyme at the ends of the two lines, but the sound linking 'towers' and 'temples' is their shared first 't'. Repeating the first sound of nearby words is alliteration.",
    not: {
      'Rhyming couplet':
        "'Lie' and 'sky' do rhyme as a pair, but that rhyme links the line endings, not the two buildings.",
      Personification: "The buildings 'lie open', but they are not given human qualities.",
      Onomatopoeia: 'No word imitates a sound.',
    },
    more: "'Theatres' looks as if it belongs, but it begins with a 'th' sound, not a 't': alliteration is about sound, not spelling. The list spreads the city out across the line.",
    tip: 'Say the words aloud before you name alliteration: listen for the same first sound, not the same first letter.',
  },
  '"Legless, sewn short at elbow."': {
    why: "The 's' and 'sh' sounds of 'Legless', 'sewn' and 'short' hiss through the line. A run of hissing sounds is sibilance.",
    not: {
      Plosives:
        "Plosives are hard sounds such as 'b' and 'p'; the sounds stressed here are soft hisses.",
      Onomatopoeia: 'No word imitates a sound.',
      Personification:
        'Nothing non-human is given human qualities; the soldier is described plainly.',
    },
    more: 'The hushed, clipped sounds state a terrible injury quietly, as if no one wants to say it aloud.',
    tip: "Comment on tone: 'The sibilance hushes the description, making the injury more shocking.'",
  },
  '"But such a tide as moving seems asleep,\nToo full for sound and foam"': {
    why: "'Such', 'as', 'seems', 'asleep' and 'sound' fill the lines with soft 's' sounds. A run of hissing sounds is sibilance.",
    not: {
      Plosives: 'Plosives are hard sounds made with a burst of air; these sounds are soft.',
      Onomatopoeia: "No word imitates a sound; the tide is 'too full for sound'.",
      Hyperbole: 'Nothing is exaggerated: the tide is described as calm and full.',
    },
    more: 'The hush suits the calm tide Tennyson hopes will carry him out at death: quiet, full and peaceful.',
    tip: "Comment on mood: 'The sibilance creates a hushed calm, fitting a peaceful death.'",
  },
  '"Thou watchest the last oozings, hours by hours."': {
    why: "The hissing and buzzing sounds of 'watchest', 'last', 'oozings' and 'hours' are soft and slow. They draw the line out, like the cider slowly oozing from the press.",
    not: {
      'A fast and busy rhythm':
        "The repeated 'hours by hours' and soft sounds slow the line right down.",
      'A harsh, violent tone': 'Nothing harsh: the sounds are gentle and sleepy.',
      'A cold and bitter feeling': 'Autumn here is warm and drowsy, watching the harvest finish.',
    },
    more: 'The whole stanza shows autumn resting and dozing; the sounds make the reader linger too.',
    tip: "Comment on pace: 'The sibilance slows the line, mirroring autumn's patient watching.'",
  },
  '"A dust whom England bore, shaped, made aware"': {
    why: "The long 'ay' sound repeats in 'shaped' and 'made', side by side. Repeating a vowel sound in nearby words is assonance.",
    not: {
      Alliteration: 'The words begin with different consonants; the repeated sound is a vowel.',
      'Internal rhyme':
        "'Shaped' and 'made' share a vowel but end differently, so they do not rhyme.",
      Onomatopoeia: 'No word imitates a sound.',
    },
    more: 'The run of verbs lists what England did for the soldier, and the matching vowels bind them into one act of making.',
    tip: "Comment on meaning: 'The assonance binds England's gifts together, stressing what the soldier owes his country.'",
  },
  '"\'Ulla, ulla, ulla, ulla,\' wailed that superhuman note"': {
    why: "'Ulla, ulla' imitates the Martian's strange cry, and 'wailed' names a sound by echoing it. Words that imitate the sounds they describe are onomatopoeia.",
    not: {
      Sibilance:
        "There is no run of hissing 's' sounds; the cry is made of long 'u' and 'l' sounds.",
      Simile: "Nothing is compared using 'like' or 'as'.",
      Euphemism: 'A euphemism softens something unpleasant; this sound is eerie and alien.',
    },
    more: 'Spelling out the cry lets the reader hear it: an inhuman, sobbing note echoing through empty London streets.',
    tip: "Comment on atmosphere: 'The onomatopoeia makes the alien cry eerie and real.'",
  },
  '"It was the owl that shriek\'d, the fatal bellman,\nWhich gives the stern\'st good night."': {
    why: "Calling the owl 'the fatal bellman' is a metaphor for a death-bell. But it is 'shriek'd', a word that imitates the owl's cry, that lets the audience hear the owl.",
    not: {
      Metaphor:
        "'The fatal bellman' turns the owl into a death-bell ringer, but that is an image, not a sound word.",
      Alliteration: 'No nearby words share a first sound here.',
      Simile: "Nothing is compared using 'like' or 'as'.",
    },
    more: "The bellman rang for prisoners on the night before execution, so the owl's shriek announces Duncan's death as it happens.",
    tip: "When asked about sound, look for the word that imitates it: here 'shriek'd'.",
  },
  '"There is a kind of merry war betwixt Signior Benedick and her"': {
    why: "A war is not merry, so 'merry war' joins opposites in one phrase. Two contradictory words placed together make an oxymoron.",
    not: {
      Paradox:
        'A paradox is a whole statement that seems impossible; here the clash is in two words.',
      Pun: "A pun plays on a double meaning; 'merry' and 'war' each mean one thing.",
      Euphemism: 'A euphemism softens something unpleasant; this is a playful description.',
    },
    more: 'The phrase sums up Beatrice and Benedick: they fight with words, but enjoy it, and the fighting hides attraction.',
    tip: "Comment on the relationship: 'The oxymoron merry war captures the playful hostility of Beatrice and Benedick.'",
  },
  '"My only love sprung from my only hate!"': {
    why: 'Juliet has just learned that Romeo is a Montague. The one person she loves comes from the family she was raised to hate: love and hate, joined in one person.',
    not: {
      'She hates Romeo now she knows him':
        "She still loves him; the hate belongs to her family's feud.",
      'She has two different suitors':
        'Paris is her other suitor, but this line is about Romeo alone.',
      'She loved Tybalt all along': 'Tybalt is her cousin; the line is about Romeo and the feud.',
    },
    more: 'The paradox sums up the tragedy: the lovers are doomed by a hatred that is not their own.',
    tip: "Comment on the tragedy: 'The paradox captures how the feud poisons Juliet's love from its first moment.'",
  },
  '"I lov\'d Ophelia; forty thousand brothers\nCould not, with all their quantity of love,\nMake up my sum."':
    {
      why: 'Hamlet claims forty thousand brothers together could not love Ophelia as much as he did, an impossible exaggeration. Deliberate exaggeration for effect is hyperbole.',
      not: {
        Simile: "Nothing is compared using 'like' or 'as'.",
        Understatement:
          'Understatement shrinks feelings; Hamlet inflates his love beyond all measure.',
        Euphemism: "A euphemism softens; Hamlet's words are loud and challenging.",
      },
      more: "He says this at Ophelia's grave, competing with her brother's grief: the hyperbole is as much about rivalry as love.",
      tip: "Comment on motive: 'Hamlet's hyperbole turns grief into a contest with Laertes.'",
    },
  '"I would not have given it for a wilderness of monkeys."': {
    why: "Shylock says he would not have traded his ring for a 'wilderness', a whole wild land, of monkeys. The absurdly huge, comic exaggeration is hyperbole.",
    not: {
      Simile: "Nothing is compared using 'like' or 'as'.",
      Understatement:
        "Understatement makes things sound smaller; this makes the ring's value enormous.",
      Euphemism: "A euphemism softens; Shylock's grief is stated loudly.",
    },
    more: 'The ring was given to him by Leah before they married, so the comic hyperbole reveals real grief at its loss.',
    tip: "Look beneath the joke: 'The hyperbole shows how much the ring, and Leah, meant to Shylock.'",
  },
  '"and you shall put\nThis night\'s great business into my dispatch"': {
    why: "Lady Macbeth calls the murder of Duncan 'this night's great business', a businesslike phrase that never names the killing. Using a mild phrase for something terrible is a euphemism.",
    not: {
      Hyperbole:
        "Nothing is exaggerated: 'great business' makes murder sound smaller, like ordinary work.",
      Oxymoron: 'No two contradictory words are joined.',
      Pun: 'A pun plays on a double meaning for wit; this is cold concealment.',
    },
    more: "The Macbeths rarely name the murder: 'it', 'the deed', 'business'. The euphemisms show how they hide the horror even from themselves.",
    tip: "Track the euphemisms: 'Calling murder business shows Lady Macbeth's cold control.'",
  },
  '"Shy as a leveret, swift as he,\nStraight and slight as a young larch tree"': {
    why: 'A leveret is a young hare, shy and quick to run, and a young larch is slim and wild. The similes make the bride a wild creature of nature: timid, quick and impossible to tame.',
    not: {
      'She is calm and fond of her husband':
        'She runs from him and fears him; a hare is anything but calm.',
      'She is lazy and slow': "'Swift' says the opposite: a leveret is fast.",
      'She is strong and fierce': 'A leveret is shy and timid, not fierce.',
    },
    more: 'The farmer describes his wife as though she were an animal he has caught, which tells us as much about him as about her.',
    tip: "Comment on the speaker: 'The animal similes reveal how the farmer sees his wife as wild and possessable.'",
  },
  '"I am no bird; and no net ensnares me; I am a free human being with an independent will"': {
    why: 'Rochester has just compared her to a frantic bird. Jane rejects the image: she is no bird, and nothing can trap her. She insists on her freedom and her independent will.',
    not: {
      'She is afraid of being hunted': 'She is defiant, not afraid: she asserts her freedom.',
      'She longs to fly away like a bird': "She says the opposite: 'I am no bird'.",
      'She has escaped from a real net':
        'The net is a metaphor for being controlled; there is no real net.',
    },
    more: 'Brontë gives Jane a voice that demands equality, unusual for a Victorian heroine: she will not be possessed, even by the man she loves.',
    tip: "Comment on context: 'Jane's metaphor rejects the idea that a woman can be caught and owned.'",
  },
  '"It is the green-ey\'d monster which doth mock\nThe meat it feeds on."': {
    why: "Jealousy is the monster which doth 'mock / The meat it feeds on': it feeds on the jealous person and tortures them at the same time. Iago warns of the very poison he is giving Othello.",
    not: {
      "It protects a husband's honour":
        'Iago calls it a monster; it destroys rather than protects.',
      'It makes people more generous': 'A monster that feeds and mocks is cruel, not generous.',
      'It is easy to hide and forget': 'Jealousy feeds on its victim; it grows, it does not fade.',
    },
    more: 'The irony is sharp: Iago pretends to warn Othello against jealousy while carefully planting it in him.',
    tip: "Comment on irony: 'Iago's warning about the green-eyed monster is itself the bait.'",
  },
  '"In every voice, in every ban,\nThe mind-forged manacles I hear"': {
    why: "Manacles are chains for the hands, but these are 'mind-forged', made by the mind. The people of London are trapped by ideas, rules and fears, not by iron.",
    not: {
      'Prisoners are chained in the streets':
        'The chains are imagined, made by minds, not real iron on prisoners.',
      'Londoners make iron in their factories':
        "'Forged' is part of the image; nothing here is about factories.",
      'The speaker is losing his mind':
        "The minds are those of the city's people and rulers, not his own madness.",
    },
    more: 'Blake blames the institutions of his time, church, monarchy and law, for teaching people to accept their own chains.',
    tip: "Comment on context: 'The metaphor suggests oppression lives in people's minds, taught by those in power.'",
  },
  '"The smile on your mouth was the deadest thing\nAlive enough to have strength to die"': {
    why: "A smile should be lively, but this one is 'the deadest thing / Alive': alive only enough to die. The oxymoron shows a smile emptied of all feeling, the end of love.",
    not: {
      'It is warm and full of love': "'Deadest' says the opposite: there is no warmth left.",
      'It is about to burst into laughter':
        "The smile is dying, not breaking into laughter; a 'grin of bitterness' follows.",
      'It shows she is very ill': 'The deadness is emotional: the love has died, not the woman.',
    },
    more: "Hardy's poem is drained of colour, 'neutral tones', and the dead smile is its emotional centre: love has turned to bitterness.",
    tip: "Comment on the contradiction: 'The oxymoron shows love that is technically alive but emotionally dead.'",
  },
  '"I was angry with my friend:\nI told my wrath, my wrath did end.\nI was angry with my foe:\nI told it not, my wrath did grow."':
    {
      why: 'The two halves are set side by side: anger spoken to a friend ends, anger hidden from a foe grows. The juxtaposition shows that bottled-up anger becomes dangerous.',
      not: {
        'Friends are easier to anger':
          'He is angry with both; the difference is whether he speaks.',
        'Enemies should always be forgiven':
          'He does not forgive the foe; he nurses the anger until it grows.',
        'Anger is always wrong':
          'Anger with the friend ends harmlessly once spoken; it is hidden anger that harms.',
      },
      more: 'The rest of the poem grows that hidden anger into a poisoned tree whose apple kills the foe.',
      tip: "Comment on the lesson: 'The juxtaposition contrasts honest anger with secret resentment.'",
    },
  '"Yes; quaint and curious war is!\nYou shoot a fellow down\nYou\'d treat if met where any bar is,\nOr help to half-a-crown."':
    {
      why: 'In peacetime he would buy this man a drink or lend him money; in war he shot him. The irony is that war turns possible friends into killers and victims.',
      not: {
        'War is an exciting adventure':
          "'Quaint and curious' is uneasy understatement, not excitement.",
        'Soldiers enjoy fighting each other':
          'He joined up because he was out of work, not because he wanted to fight.',
        'His enemy was cruel and deserved it':
          'The enemy was just like him, a man who enlisted for work.',
      },
      more: "'Quaint and curious' is a strangely mild phrase for killing: the speaker cannot quite face what he has done.",
      tip: "Comment on tone: 'The understated irony shows a soldier struggling to make sense of killing a man like himself.'",
    },
  '"How can the bird that is born for joy,\nSit in a cage and sing."': {
    why: "A bird born to fly and sing cannot be happy in a cage. Blake makes the schoolboy that bird: school locks up a child's natural joy and stops it singing.",
    not: {
      'He keeps a pet bird at home': 'The bird is a metaphor for the boy himself, not a pet.',
      'He sings well in his lessons': 'The caged bird cannot sing: school silences him.',
      'He wants to become a bird': 'He is pictured as a bird; he does not wish to be one.',
    },
    more: "Blake believed strict schooling crushed children's spirits; the question invites the reader to agree that a caged child cannot thrive.",
    tip: "Comment on context: 'The caged bird metaphor attacks schooling that imprisons children.'",
  },
  '"Ten thousand saw I at a glance,\nTossing their heads in sprightly dance."': {
    why: "The daffodils toss 'their heads' in a 'dance', which is personification. But 'ten thousand ... at a glance' is the exaggeration of their number: hyperbole.",
    not: {
      Personification:
        'Giving the flowers heads that dance makes them lively, but it does not exaggerate their number.',
      Simile: "Nothing is compared using 'like' or 'as' in these lines.",
      Oxymoron: 'No two contradictory words are joined.',
    },
    more: 'The huge number and the dancing work together: the speaker is overwhelmed by the joy of so many flowers moving at once.',
    tip: 'Match the device to the effect asked: numbers exaggerated are hyperbole; flowers dancing is personification.',
  },
  '"Twilight and evening bell,\nAnd after that the dark!"': {
    why: "The whole poem imagines death as a voyage out to sea. Twilight, the evening bell and 'the dark' are gentle images for the end of life: euphemisms for dying.",
    not: {
      "The end of a long day's work":
        'That is the surface meaning; in this poem the day stands for a whole life.',
      'A storm coming in from the sea':
        "The poem hopes for calm: 'no moaning of the bar', a peaceful crossing.",
      'His fear of the night':
        "He hopes there will be 'no sadness of farewell': he faces death calmly.",
    },
    more: 'Tennyson asked for this poem to be printed at the end of all his collections: a calm farewell to life.',
    tip: "Comment on tone: 'The euphemisms of twilight and the dark make death a gentle, expected ending.'",
  },
  '"Thy hair soft-lifted by the winnowing wind"': {
    why: "'Winnowing wind' repeats the 'w' sound, alliteration. But giving autumn 'hair' that the wind lifts gives the season a body, as if it were a person resting in the fields: personification.",
    not: {
      Alliteration:
        "The 'w' sounds make the line soft and airy, but they give autumn no body; the hair does.",
      Simile: "Nothing is compared using 'like' or 'as'.",
      Onomatopoeia: 'No word imitates a sound.',
    },
    more: 'In this stanza autumn appears as a harvest worker resting: sitting on a granary floor, asleep in a field, watching the cider press.',
    tip: "Rank the devices: 'While the alliteration softens the line, the personification turns autumn into a resting harvester.'",
  },
  '"Into the valley of Death\nRode the six hundred."': {
    why: "The phrase echoes Psalm 23, 'the valley of the shadow of death'. The biblical allusion gives the charge a solemn, doomed grandeur: the riders enter death itself.",
    not: {
      'A cheerful sense of victory':
        'Death is named in the phrase; the tone is solemn, not triumphant.',
      'A precise detail of the map': 'The name is an allusion and a warning, not a map reference.',
      'A hint the men will escape':
        'The phrase promises death, not escape, and many of the riders are killed.',
    },
    more: "The psalm promises comfort in the valley; the poem offers none, which makes the soldiers' obedience all the more stark.",
    tip: "Comment on tone: 'The biblical allusion makes the charge solemn and fated.'",
  },
  '"by the clock \'tis day,\nAnd yet dark night strangles the travelling lamp."': {
    why: "It should be daytime, but darkness 'strangles' the sun. After Duncan's murder, nature itself seems disturbed and unnatural, as if the heavens are troubled by the crime.",
    not: {
      'An eclipse has been predicted':
        'No eclipse is mentioned; the darkness is presented as a sign of the crime.',
      'The night watch overslept after the feast':
        "The darkness is in the sky at daytime, not in anyone's sleep.",
      'The storm has finally passed': 'The disorder continues: daylight itself is being strangled.',
    },
    more: 'Ross and the Old Man go on to report horses eating each other: the whole natural order is overturned by the killing of a king.',
    tip: "Comment on context: 'The unnatural darkness reflects the Jacobean belief that killing a king disrupts nature.'",
  },
  '"Now is it Rome indeed, and room enough,\nWhen there is in it but one only man."': {
    why: "'Rome' and 'room' sounded alike in Shakespeare's time. Cassius jokes bitterly that Rome now has room for only one man, Caesar: the city has become one man's possession.",
    not: {
      'Rome has grown far too crowded': 'The joke is the opposite: Rome has room for only one man.',
      'Cassius wants to leave Rome':
        'He wants to stop Caesar, not to leave; this is part of his persuasion of Brutus.',
      'Caesar is building a new palace': "'Room' is space in the city, not rooms in a building.",
    },
    more: "The pun is part of Cassius's campaign to win Brutus: Caesar is turning a republic of equals into a one-man state.",
    tip: "Comment on persuasion: 'Cassius's bitter pun presents Caesar as swallowing the whole of Rome.'",
  },
  '"Thou, Nature, art my goddess; to thy law\nMy services are bound."': {
    why: "Edmund, alone, speaks to Nature as 'thou', as though she were a goddess who could hear him. Addressing an idea or a force as a listener is apostrophe.",
    not: {
      'Direct address': 'Direct address speaks to the audience. Edmund speaks to Nature itself.',
      'Rhetorical question': 'This is a statement of loyalty, not a question.',
      Hyperbole: 'Nothing is exaggerated; Edmund means it: he will follow nature, not custom.',
    },
    more: "Edmund, born illegitimate, rejects the laws of society that call him 'base' and swears loyalty to nature, where strength alone decides.",
    tip: "Comment on character: 'Edmund's apostrophe to Nature shows his rejection of society's rules.'",
  },
  '"How happy some o\'er other some can be!\nThrough Athens I am thought as fair as she."': {
    why: 'Lysander and Hermia have gone, and Helena, alone on stage, speaks her jealous thoughts aloud. A speech by a character alone on stage is a soliloquy.',
    not: {
      Aside: 'An aside is said while others are present; Helena is alone.',
      Prologue: 'A prologue opens a play; this ends Act 1, Scene 1.',
      Stichomythia: 'Stichomythia is quick alternating dialogue; Helena speaks alone.',
    },
    more: "Helena is as beautiful as Hermia in everyone's eyes but Demetrius's: the soliloquy shows how unfair and blind love can be.",
    tip: "Comment on theme: 'Helena's soliloquy introduces the play's idea that love is blind and unreasonable.'",
  },
  '"That every like is not the same, O Caesar,\nThe heart of Brutus yearns to think upon."': {
    why: "Caesar has just invited the conspirators, 'like friends', to drink wine with him. Brutus's reply is for the audience alone: Caesar does not hear it. A hidden remark to the audience is an aside.",
    not: {
      Soliloquy: 'A soliloquy is spoken alone; Caesar and the conspirators are on stage.',
      Prologue: 'A prologue opens a play; this is in Act 2.',
      Stichomythia: 'Stichomythia is rapid line-by-line exchange; this is one hidden remark.',
    },
    more: 'Brutus grieves that those who seem like friends are not: he knows they will kill Caesar within hours.',
    tip: "Comment on dramatic irony: 'The aside reveals Brutus's grief at the betrayal Caesar cannot see coming.'",
  },
  '"O, you are well tun\'d now,\nBut I\'ll set down the pegs that make this music"': {
    why: "Othello and Desdemona are 'well tun'd', in harmony like a musical instrument. Iago will 'set down the pegs', loosening the strings: he plans to wreck their happiness.",
    not: {
      'He wants to play music for them':
        'The music is a metaphor for their love; he means to untune it.',
      'He is happy for the couple': 'He plans to destroy their harmony, as the aside makes clear.',
      'He plans to leave Cyprus': 'He is staying to work his plot; nothing suggests leaving.',
    },
    more: 'The aside comes as the couple kiss and celebrate their reunion: the audience watches their joy knowing Iago is about to spoil it.',
    tip: "Comment on dramatic irony: 'The aside lets the audience see Iago's plot even as the lovers rejoice.'",
  },
  '"Out, damned spot! out, I say!"': {
    why: "Lady Macbeth orders the stain she imagines on her hand to go: 'Out', 'out, I say'. A command that tells someone, or something, what to do is an imperative.",
    not: {
      'Rhetorical question': 'These are commands, not questions.',
      Euphemism: 'A euphemism softens. Her words are harsh and desperate.',
      Hyperbole: 'Nothing is exaggerated: she truly believes she sees blood.',
    },
    more: 'The woman who once gave orders to her husband now commands a stain that will not obey: her power has turned into helpless guilt.',
    tip: "Comment on change: 'Her imperative, once powerful, is now useless against her guilt.'",
  },
  '"Speak the speech, I pray you, as I pronounced it to you, trippingly on the tongue."': {
    why: "Hamlet instructs the actor how to deliver his lines: 'Speak the speech'. A sentence giving an instruction, beginning with the verb, is an imperative.",
    not: {
      'Rhetorical question': 'This is an instruction, not a question.',
      Euphemism: 'A euphemism softens something unpleasant; this is practical advice.',
      Hyperbole: 'Nothing is exaggerated: Hamlet gives exact directions.',
    },
    more: "Hamlet cares how the play is performed because it is his trap: if the actors speak well, Claudius's guilt may show.",
    tip: "Comment on purpose: 'Hamlet's imperatives show him directing the play that will test Claudius.'",
  },
  '"Sit still, and hear the last of our sea-sorrow."': {
    why: "Prospero tells Miranda to 'Sit still' and 'hear'. Sentences that give orders, beginning with the verb, are imperatives.",
    not: {
      'Rhetorical question': 'These are commands, not questions.',
      Euphemism: "A euphemism softens; 'sea-sorrow' names the sad voyage directly.",
      Hyperbole: 'Nothing is exaggerated: he asks her to listen.',
    },
    more: "Prospero controls everything on the island, including his daughter's attention: his story is told on his terms.",
    tip: "Comment on power: 'Prospero's imperatives show his control over Miranda and the story.'",
  },
  '"O sweet Juliet,\nThy beauty hath made me effeminate"': {
    why: "Juliet is not there: Romeo speaks to her as 'O sweet Juliet' after Mercutio has been carried off. Addressing someone who is absent is apostrophe.",
    not: {
      'Direct address': 'Direct address speaks to the audience. Romeo speaks to the absent Juliet.',
      'Rhetorical question': 'This is a statement, not a question.',
      Hyperbole: 'Nothing is exaggerated; he blames love for softening him.',
    },
    more: 'Romeo blames his love for making him unwilling to fight Tybalt: moments later he kills Tybalt, and his life falls apart.',
    tip: "Comment on the turning point: 'Romeo's apostrophe shows love and honour pulling him in opposite directions.'",
  },
  '"Farewell the tranquil mind! Farewell content!\nFarewell the plumed troops and the big wars"': {
    why: "Each phrase begins 'Farewell', saying goodbye to his peace of mind, his contentment and his life as a soldier. The anaphora shows Othello feeling he has lost everything that made him himself.",
    not: {
      'He is happily retiring from the army':
        "He is in anguish: jealousy has destroyed his 'tranquil mind'.",
      'He is saying goodbye to Desdemona':
        'He says farewell to his own peace and career, not to her.',
      'He is leaving Venice for good':
        'These are farewells to feelings and a way of life, not to a place.',
    },
    more: "Iago's poison has worked: the general who prided himself on calm and command now believes his whole identity is gone.",
    tip: "Comment on structure: 'The anaphora of Farewell builds a lament for everything jealousy has taken from Othello.'",
  },
  '"Thou\'lt come no more,\nNever, never, never, never, never!"': {
    why: "Lear holds his dead daughter Cordelia. The word 'never' is repeated five times, as if he is trying to take in that she will not come back: grief at a loss that is final.",
    not: {
      "Lear's anger at his daughter":
        'He grieves for Cordelia; his anger with her ended long before.',
      "Lear's hope she will wake soon": "'Thou'lt come no more' accepts that she is gone.",
      "Lear's confusion about the time":
        'The repetition is about permanence, not about time of day.',
    },
    more: 'A line made of one word repeated is almost unbearable to hear: Shakespeare lets grief break the verse itself.',
    tip: "Comment on form: 'The fivefold repetition breaks the line, enacting Lear's grief.'",
  },
  '"Romans, countrymen, and lovers, hear me for my cause"': {
    why: "Brutus opens by addressing the crowd in three ways: 'Romans, countrymen, and lovers'. Grouping three for effect is the rule of three.",
    not: {
      Anaphora: 'No words are repeated at the start of clauses.',
      Repetition: 'No word is repeated in the list.',
      Juxtaposition: 'Juxtaposition sets contrasting things side by side; the three titles agree.',
    },
    more: 'Brutus speaks in prose, plainly and logically, asking the crowd to judge him by reason. Antony, speaking next, will win them with emotion instead.',
    tip: "Comment on the appeal: 'Brutus's rule of three addresses the crowd as citizens and friends, appealing to their sense of duty.'",
  },
  '"Did my heart love till now? Forswear it, sight!\nFor I ne\'er saw true beauty till this night."':
    {
      why: "'Sight' and 'night' end two consecutive lines and rhyme. Two rhyming lines in a row are a rhyming couplet.",
      not: {
        'Internal rhyme': 'The rhymes are at the ends of the lines, not inside one.',
        'Half-rhyme': "'Sight' and 'night' rhyme fully.",
        'Blank verse': "Blank verse is unrhymed; Romeo's lines here rhyme.",
      },
      more: 'Romeo first sees Juliet and speaks in rhyming couplets, as if love has turned him into a poet; he has already forgotten Rosaline.',
      tip: "Comment on character: 'The rhyming couplet shows Romeo instantly and poetically in love.'",
    },
  '"Come what come may,\nTime and the hour runs through the roughest day."': {
    why: "'May' and 'day' end two lines in a row and rhyme. A pair of consecutive rhyming lines is a rhyming couplet.",
    not: {
      'Internal rhyme': 'The rhymes are at the ends of the lines, not inside them.',
      'Half-rhyme': "'May' and 'day' rhyme fully.",
      'Blank verse': 'Blank verse is unrhymed; this couplet breaks out of it.',
    },
    more: 'Macbeth tells himself that whatever happens, the day will pass: for now he leaves the future to chance.',
    tip: "Comment on resolution: 'The couplet shows Macbeth putting aside his murderous thoughts, for now.'",
  },
  '"the sign of the house (the Ship) was creaking and banging about, with noises that startled me"':
    {
      why: "'Creaking' and 'banging' imitate the sounds the swinging sign makes in the wind. Words that sound like the noises they name are onomatopoeia.",
      not: {
        Simile: "Nothing is compared using 'like' or 'as'.",
        Personification: 'The sign does nothing human; it swings in the wind.',
        Hyperbole: 'Nothing is exaggerated: a loose sign really does creak and bang.',
      },
      more: 'The noises wake Pip in the night, so the reader hears the restless wind just as he does.',
      tip: "Name the sense: 'The onomatopoeia lets the reader hear the restless night.'",
    },
  '"a flock of geese hissing after them and pecking at their calves all the way"': {
    why: "'Hissing' imitates the sound the angry geese make as they chase the men. A word that sounds like the noise it describes is onomatopoeia.",
    not: {
      Alliteration: 'No nearby words share a first sound.',
      Personification:
        'Geese hissing and pecking is what geese do; they are not given human qualities.',
      Simile: "Nothing is compared using 'like' or 'as'.",
    },
    more: "The comic detail of men chased off by geese makes the animals' victory in the Battle of the Cowshed feel joyful and a little absurd.",
    tip: "Comment on tone: 'The onomatopoeia adds comedy to the farmers' retreat.'",
  },
  '"the leaves rustled harmoniously when I stopped to listen; but, the clink of Joe\'s hammer was not in the midsummer wind"':
    {
      why: "'Clink' imitates the ring of Joe's hammer, a sound Pip grew up with. Its absence tells Pip, and the reader, that something at the forge has changed.",
      not: {
        'The forge has been sold to a stranger':
          'The forge is not sold: Joe is away because he is marrying Biddy.',
        'Joe has hurt his hand at work':
          'Nothing suggests an injury; the forge is quiet for a happier reason.',
        'Pip is glad the noise has stopped':
          'Pip listens for the sound and misses it; he is uneasy, not glad.',
      },
      more: 'Dickens makes a missing sound speak: the silence prepares Pip to find that Joe and Biddy have married.',
      tip: "Comment on absence: 'The absent clink of the hammer signals change, using sound to build suspense.'",
    },
}
