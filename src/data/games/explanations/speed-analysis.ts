import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Speed Analysis: the explanation a student sees after each answer, by question
 * key (src/data/games/banks/speed-analysis.ts). Written with AI on 13 October
 * 2026 and checked against each extract and its options, as the founder decided
 * (src/lib/games/explanations/types.ts).
 */
export const EXPLANATIONS: GameExplanations = {
  '"The sea was a boiling cauldron of fury."': {
    why: "The sea is described as if it actually were a boiling cauldron. There is no 'like' or 'as', so this is a metaphor, not a simile.",
    not: {
      Simile:
        "A simile compares using 'like' or 'as'. Here the sea simply is the cauldron, with no comparing word.",
      Alliteration:
        "Alliteration repeats the first sound of nearby words. 'Boiling cauldron of fury' does not.",
      Onomatopoeia:
        "Onomatopoeia is a word that imitates a sound, such as 'crash'. None of these words do.",
    },
    more: "A cauldron suggests something dangerous being brewed, and 'boiling' adds heat and violence. The metaphor makes the storm feel out of control and threatening.",
    tip: "Name the device, then explain the image: 'The metaphor of a boiling cauldron presents the sea as violent and threatening.'",
  },
  '"Her smile was like the sun breaking through clouds."': {
    why: "The smile is compared to the sun using the word 'like', which makes this a simile.",
    not: {
      Metaphor:
        "A metaphor says one thing is another. Here 'like' keeps them apart: her smile is only like the sun.",
      Onomatopoeia: 'Onomatopoeia is a word that imitates a sound. No word here does.',
      Oxymoron:
        "An oxymoron puts two opposite words together, such as 'cold fire'. Nothing here contradicts itself.",
    },
    more: 'The sun breaking through clouds suggests warmth and relief after gloom, so her smile seems to change the mood of everything around her.',
    tip: "Explore the image, not just the label: 'The simile suggests her smile brings sudden warmth and hope.'",
  },
  '"The wind howled and the trees groaned under its weight."': {
    why: 'The wind and the trees are given living, human actions: the wind howls and the trees groan. Giving human qualities to things that are not human is personification.',
    not: {
      Simile: "There is no comparison using 'like' or 'as'.",
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
      Simile: "Nothing is compared using 'like' or 'as'.",
      Onomatopoeia: 'None of the words imitates a sound.',
      Oxymoron: 'No two words here contradict each other.',
    },
    more: "The repeated 'p' is a plosive sound, made with a small burst of air. It gives the line a bouncing rhythm and makes it hard to say quickly.",
    tip: "Say what the sound does: 'The plosive alliteration creates a lively, bouncing rhythm.'",
  },
  '"The rain set early in to-night,\nThe sullen wind was soon awake."': {
    why: "The weather is given a human mood: the wind is 'sullen'. When weather or nature reflects the feelings or atmosphere of a scene, that is pathetic fallacy.",
    not: {
      Simile: "Nothing is compared using 'like' or 'as'.",
      Onomatopoeia: 'No word here imitates a sound.',
      Oxymoron: 'No two words here contradict each other.',
    },
    more: 'A sullen wind and early rain set a dark, brooding mood at the start of the poem, preparing the reader for something troubling to come.',
    tip: "Connect it to mood: 'The pathetic fallacy of the sullen wind creates a brooding atmosphere and hints at darkness to come.'",
  },
  '"My love is like a red, red rose\nThat\'s newly sprung in June."': {
    why: "The speaker says his love is 'like a red, red rose', a comparison using 'like', so this is a simile.",
    not: {
      Metaphor: "A metaphor would say his love is a rose. The word 'like' makes this a simile.",
      Onomatopoeia: 'No word here imitates a sound.',
      Oxymoron: 'No two words here contradict each other.',
    },
    more: 'A rose newly sprung in June is fresh, beautiful and full of life. The comparison presents his love as new, vivid and natural.',
    tip: "Explore what the comparison suggests: 'The simile presents his love as fresh and beautiful, like a rose in early summer.'",
  },
  '"I have told you a million times to clean your room!"': {
    why: "'A million times' is a huge exaggeration: nobody has really said it that often. Deliberate exaggeration for effect is hyperbole.",
    not: {
      Irony:
        'Irony is when what is said differs from what is meant. The speaker means exactly this, only exaggerated.',
      'Rhetorical question': 'This is a statement, not a question.',
      Metaphor: 'Nothing is described as being something else.',
    },
    more: "The exaggeration shows the speaker's frustration and impatience more forcefully than a precise number would.",
    tip: "Explain why the writer exaggerates: 'The hyperbole of a million times conveys the speaker's exasperation.'",
  },
  '"The soft, silky sound of the stream slipped through the stones."': {
    why: "The repeated 's' sounds in 'soft, silky sound', 'stream slipped' and 'stones' make this sibilance: the repetition of hissing 's' sounds.",
    not: {
      Simile: "Nothing is compared using 'like' or 'as'.",
      Metaphor: 'Nothing is described as being something else.',
      Oxymoron: 'No two words here contradict each other.',
    },
    more: "The gentle 's' sounds mimic the quiet rush of water, so the reader almost hears the stream. It creates a calm, soothing mood.",
    tip: "Link the sound to the meaning: 'Sibilance echoes the gentle flow of the stream and creates a calm mood.'",
  },
  '"The buzz of bees and the hiss of the kettle filled the kitchen."': {
    why: "'Buzz' and 'hiss' are words that sound like the noises they describe. That is onomatopoeia.",
    not: {
      Simile: "Nothing is compared using 'like' or 'as'.",
      Metaphor: 'Nothing is described as being something else.',
      Personification: 'Nothing is given human qualities: bees buzz and kettles hiss naturally.',
    },
    more: 'The sound words let the reader hear the scene, making the kitchen feel busy and alive.',
    tip: "Show how it builds the setting: 'Onomatopoeia such as buzz and hiss creates a lively, noisy atmosphere.'",
  },
  '"Is this a dagger which I see before me,\nThe handle toward my hand?"': {
    why: 'Macbeth asks a question that nobody answers. He is speaking to himself, so the question expresses his doubt rather than asking for a reply. That makes it a rhetorical question.',
    not: {
      Simile: "Nothing is compared using 'like' or 'as'.",
      Metaphor:
        'The dagger is not described as being something else: he is asking whether it is real.',
      Oxymoron: 'No two words here contradict each other.',
    },
    more: "The question shows Macbeth's confused, guilty state of mind just before the murder: he can no longer trust what he sees.",
    tip: "Link the question to character: 'The rhetorical question reveals Macbeth's disturbed and guilty mind.'",
  },
  '"Bent double, like old beggars under sacks,\nKnock-kneed, coughing like hags, we cursed through sludge."':
    {
      why: "The soldiers are compared to 'old beggars' and to 'hags' using 'like', so these are similes.",
      not: {
        Metaphor:
          "A metaphor would say the soldiers are beggars. The word 'like' makes these similes.",
        Oxymoron: 'No two words here contradict each other.',
        Personification: 'Nothing here is given human qualities: the soldiers are already human.',
      },
      more: 'Young soldiers are compared to old beggars and hags, showing how war has exhausted and aged them. It undermines the idea of war as glorious.',
      tip: "Explore the shock of the comparison: 'The similes present young soldiers as broken and aged, challenging heroic images of war.'",
    },
  '"Look on my Works, ye Mighty, and despair!\nNothing beside remains."': {
    why: "The king boasts that the mighty should despair at his works, yet 'nothing beside remains'. The gap between his boast and the ruins around it is irony.",
    not: {
      Simile: "Nothing is compared using 'like' or 'as'.",
      Onomatopoeia: 'No word here imitates a sound.',
      Oxymoron: 'No two words placed together contradict each other.',
    },
    more: "The irony shows that power and pride do not last: time destroys even the greatest ruler's achievements.",
    tip: "Explain what the irony reveals: 'The irony exposes the arrogance of power, since nothing of his empire survives.'",
  },
  '"I wandered lonely as a cloud\nThat floats on high o\'er vales and hills."': {
    why: "The speaker compares himself to a cloud using 'as' ('lonely as a cloud'), so this is a simile.",
    not: {
      Onomatopoeia: 'No word here imitates a sound.',
      Metaphor: "A metaphor would say he is a cloud. The word 'as' makes this a simile.",
      Oxymoron: 'No two words here contradict each other.',
    },
    more: 'A cloud floating alone suggests drifting freedom and solitude, so his loneliness feels peaceful and detached rather than sad.',
    tip: "Explore the feeling: 'The simile presents the speaker as drifting and solitary, detached from the world below.'",
  },
  '"Out, out, brief candle!"': {
    why: "Macbeth calls life a 'brief candle' without using 'like' or 'as', so this is a metaphor.",
    not: {
      Simile: "There is no 'like' or 'as': life is called a candle, not compared to one.",
      Oxymoron: 'No two words here contradict each other.',
      Onomatopoeia: 'No word here imitates a sound.',
    },
    more: "A candle burns briefly and is easily put out. Spoken after Lady Macbeth's death, the metaphor shows Macbeth now sees life as short and meaningless.",
    tip: "Use context briefly: 'The metaphor of the brief candle conveys Macbeth's despair at how short and fragile life is.'",
  },
  '"It was the best of times,\nit was the worst of times."': {
    why: "'The best of times' is placed directly beside 'the worst of times'. Setting opposites side by side to show a contrast is juxtaposition.",
    not: {
      Simile: "Nothing is compared using 'like' or 'as'.",
      Onomatopoeia: 'No word here imitates a sound.',
      Personification: 'Nothing is given human qualities.',
    },
    more: "The contrast suggests a period full of extremes, hope and despair at once, and sets up the novel's divided world.",
    tip: "Name the contrast and its effect: 'The juxtaposition presents an age of extremes.'",
  },
  '"The child is father of the man."': {
    why: "A child cannot literally be a man's father, yet the line holds a truth: who we are as children shapes the adults we become. A statement that seems impossible but is true is a paradox.",
    not: {
      Simile: "Nothing is compared using 'like' or 'as'.",
      Onomatopoeia: 'No word here imitates a sound.',
      Alliteration: 'No nearby words start with the same sound.',
    },
    more: 'The paradox makes the reader stop and think. It captures the idea that childhood feelings shape the whole of a life.',
    tip: "Unpack the apparent contradiction: 'The paradox suggests that childhood experiences shape the adult.'",
  },
  '"A deafening silence filled the room after the verdict."': {
    why: "'Deafening' and 'silence' contradict each other, because silence makes no sound. Two opposite words placed together form an oxymoron.",
    not: {
      Paradox:
        'A paradox is a whole statement that seems impossible but holds a truth. An oxymoron is two contradictory words side by side, as here.',
      Simile: "Nothing is compared using 'like' or 'as'.",
      Personification: 'Nothing is given human qualities.',
    },
    more: 'The silence is so intense it feels overwhelming, which shows the shock everyone feels at the verdict.',
    tip: "Explain the intensity: 'The oxymoron conveys how overwhelming the silence felt.'",
  },
  '"The stars danced playfully in the moonlit sky."': {
    why: 'Stars cannot dance or be playful. Giving them human actions and feelings is personification.',
    not: {
      Simile: "Nothing is compared using 'like' or 'as'.",
      Onomatopoeia: 'No word here imitates a sound.',
      Oxymoron: 'No two words here contradict each other.',
    },
    more: 'Dancing, playful stars create a light, joyful and magical night scene.',
    tip: "Link the device to mood: 'Personifying the stars as dancing creates a joyful atmosphere.'",
  },
  '"Let us go then, you and I,\nWhen the evening is spread out against the sky\nLike a patient etherised upon a table."':
    {
      why: "The evening is compared to 'a patient etherised upon a table' using 'like', so this is a simile.",
      not: {
        Onomatopoeia: 'No word here imitates a sound.',
        Oxymoron: 'No two words here contradict each other.',
        Paradox: 'No statement here seems to contradict itself.',
      },
      more: 'Comparing an evening sky to an unconscious patient on an operating table is jarring. It suggests stillness, numbness and illness, an uneasy, unromantic mood.',
      tip: "Comment on the surprise: 'The unexpected simile replaces romance with numbness and unease.'",
    },
  '"My mother bore me in the southern wild,\nAnd I am black, but O! my soul is white."': {
    why: "'Black' and 'white' are placed side by side in the same line, setting the boy's skin against his soul. Placing contrasting ideas together is juxtaposition.",
    not: {
      Simile: "Nothing is compared using 'like' or 'as'.",
      Onomatopoeia: 'No word here imitates a sound.',
      Personification: 'Nothing is given human qualities.',
    },
    more: 'The contrast exposes the prejudice the boy has absorbed, that black is bad and white is good, and invites the reader to question it.',
    tip: "Explore what the contrast reveals: 'The juxtaposition of black and white exposes the assumptions the boy has been taught.'",
  },
  '"I celebrate myself, and sing myself,\nAnd what I assume you shall assume."': {
    why: "Words are repeated: 'myself' in the first line and 'assume' in the second. Repeating words for effect is repetition.",
    not: {
      Simile: "Nothing is compared using 'like' or 'as'.",
      Onomatopoeia: 'No word here imitates a sound.',
      Oxymoron: 'No two words here contradict each other.',
    },
    more: 'The repetition stresses the self and draws the reader in: what the speaker believes, he says, the reader will believe too.',
    tip: "Say what is being stressed: 'The repetition of myself emphasises the speaker's celebration of the individual.'",
  },
  '"The fog comes\non little cat feet."': {
    why: "The fog is described as moving 'on little cat feet', as if it were a cat, without 'like' or 'as'. That makes it a metaphor.",
    not: {
      Simile: "There is no 'like' or 'as': the fog is given a cat's feet directly.",
      Onomatopoeia: 'No word here imitates a sound.',
      Oxymoron: 'No two words here contradict each other.',
    },
    more: 'A cat moves silently and softly, so the metaphor captures how quietly the fog creeps in.',
    tip: "Focus on the quality that is shared: 'The metaphor suggests the fog arrives silently and stealthily.'",
  },
  '"Season of mists and mellow fruitfulness,\nClose bosom-friend of the maturing sun."': {
    why: "Autumn is called the sun's 'close bosom-friend', as if the season were a person with friendships. Giving human qualities to something that is not human is personification.",
    not: {
      Simile: "Nothing is compared using 'like' or 'as'.",
      Onomatopoeia: 'No word here imitates a sound.',
      Oxymoron: 'No two words here contradict each other.',
    },
    more: "Making autumn the sun's close friend presents the season as warm and generous, working with nature to ripen the fruit.",
    tip: "Explain the relationship: 'Personifying autumn as the sun's friend presents the season as warm and generous.'",
  },
  '"Half a league, half a league,\nHalf a league onward,"': {
    why: "'Half a league' is repeated three times. Repeating words or phrases for effect is repetition.",
    not: {
      Simile: "Nothing is compared using 'like' or 'as'.",
      Oxymoron: 'No two words here contradict each other.',
      Personification: 'Nothing is given human qualities.',
    },
    more: 'The repetition creates a steady, driving rhythm like galloping horses, carrying the soldiers onward towards the charge.',
    tip: "Link rhythm to meaning: 'The repetition creates a relentless rhythm that mirrors the cavalry's advance.'",
  },
  '"Meanwhile the mind, from pleasure less,\nWithdraws into its happiness."': {
    why: 'The mind withdraws from pleasure, yet finds happiness, which seems contradictory. A statement that seems impossible but holds a truth is a paradox.',
    not: {
      Simile: "Nothing is compared using 'like' or 'as'.",
      Onomatopoeia: 'No word here imitates a sound.',
      Oxymoron:
        'An oxymoron is two contradictory words side by side. Here the contradiction lies in the whole idea, so it is a paradox.',
    },
    more: 'The paradox suggests that true happiness comes from within the mind rather than from outward pleasures.',
    tip: "Unpack the idea: 'The paradox suggests that turning away from pleasure leads to a deeper happiness.'",
  },
  '"Tyger Tyger, burning bright,\nIn the forests of the night."': {
    why: "The tiger is described as 'burning bright', as if it were on fire, without 'like' or 'as'. That makes it a metaphor.",
    not: {
      Simile: "There is no 'like' or 'as': the tiger is described as burning directly.",
      Onomatopoeia: 'No word here imitates a sound.',
      Oxymoron: 'No two words here contradict each other.',
    },
    more: "Burning suggests the tiger's fierce colour and energy, something dangerous that shines out against the dark forest.",
    tip: "Explore what it suggests: 'The metaphor of burning suggests the tiger's fierce, dangerous energy.'",
  },
  '"And miles to go before I sleep,\nAnd miles to go before I sleep."': {
    why: 'The same line is repeated exactly. Repeating words or lines for effect is repetition.',
    not: {
      Simile: "Nothing is compared using 'like' or 'as'.",
      Onomatopoeia: 'No word here imitates a sound.',
      Oxymoron: 'No two words here contradict each other.',
    },
    more: "Repeating the line slows the poem and adds weight, suggesting the long journey and duties still ahead. Many readers also hear 'sleep' as a hint of death.",
    tip: "Comment on the effect of the echo: 'The repetition emphasises how much still remains to be done.'",
  },
  '"The yellow smoke that rubs its muzzle on the window-panes."': {
    why: "The smoke 'rubs its muzzle' on the windows, as if it were a cat. A muzzle belongs to an animal, so the smoke is described as an animal without 'like' or 'as': a metaphor.",
    not: {
      Simile: "There is no 'like' or 'as': the smoke is given a cat's muzzle directly.",
      Onomatopoeia: 'No word here imitates a sound.',
      Oxymoron: 'No two words here contradict each other.',
    },
    more: 'The cat-like smoke curling round the city creates a lazy, creeping and slightly unpleasant atmosphere.',
    tip: "Be precise about the comparison: 'The metaphor presents the smoke as a cat, creeping lazily through the city.'",
  },
  '"I should have been a pair of ragged claws\nScuttling across the floors of silent seas."': {
    why: "The speaker says he should have been 'a pair of ragged claws', as if he were a crab, without 'like' or 'as'. That is a metaphor.",
    not: {
      Simile: "There is no 'like' or 'as': he imagines being the claws.",
      Onomatopoeia: 'No word here imitates a sound.',
      Oxymoron: 'No two words here contradict each other.',
    },
    more: "Wishing to be a mindless creature on the sea floor suggests the speaker's low sense of his own worth and a wish to escape thought and other people.",
    tip: "Link the device to character: 'The metaphor reveals the speaker's low self-worth and his desire to escape.'",
  },
  '"No man is an island,\nEntire of itself."': {
    why: "Donne says no person is 'an island' without using 'like' or 'as', so this is a metaphor.",
    not: {
      Simile: "There is no 'like' or 'as': the comparison is direct.",
      Personification: 'Nothing is given human qualities: a man is already human.',
      Allusion:
        'An allusion refers to another text, person or event. This line makes no such reference.',
    },
    more: 'An island stands alone. The metaphor argues that people are connected to each other and cannot live in isolation.',
    tip: "Explain the argument: 'The metaphor suggests that all people are connected and depend on each other.'",
  },
}
