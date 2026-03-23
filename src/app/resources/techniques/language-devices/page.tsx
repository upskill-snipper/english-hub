"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Types ──────────────────────────────────────────────────── */

type Technique = {
  name: string;
  aka?: string;
  category: string;
  definition: string;
  example: string;
  exampleSource?: string;
  effect: string;
  howToIdentify: string;
  sentenceStarter: string;
  relevantQuestions: string[];
};

/* ─── Technique data ─────────────────────────────────────────── */

const TECHNIQUES: Technique[] = [
  /* ── Figurative Language ──────────────────────────────────── */
  {
    name: "Metaphor",
    category: "Figurative Language",
    definition:
      "A direct comparison that states one thing IS another, without using 'like' or 'as'.",
    example: '"All the world\'s a stage, and all the men and women merely players."',
    exampleSource: "Shakespeare, As You Like It",
    effect:
      "Creates a vivid image that helps the reader understand an abstract idea through a concrete comparison. It implies a deeper connection between two things.",
    howToIdentify:
      "Look for statements that say X is Y where the two things are fundamentally different. There will be no 'like' or 'as'.",
    sentenceStarter:
      'The writer uses the metaphor "[quote]" to suggest that... This implies...',
    relevantQuestions: [
      "Language analysis (AQA Q2/Q3, Edexcel Q3, OCR Q1b)",
      "Literature essay analysis",
      "Writer's methods questions",
    ],
  },
  {
    name: "Extended Metaphor",
    category: "Figurative Language",
    definition:
      "A metaphor that is developed and sustained over several lines, a stanza, or even a whole text.",
    example:
      '"But soft, what light through yonder window breaks? It is the east, and Juliet is the sun."',
    exampleSource: "Shakespeare, Romeo and Juliet",
    effect:
      "Builds a rich, layered comparison that deepens the reader's understanding. By sustaining the metaphor, the writer can explore multiple facets of an idea.",
    howToIdentify:
      "Look for a metaphor that is continued and developed across multiple sentences or lines, with related vocabulary reinforcing the same image.",
    sentenceStarter:
      "The writer develops an extended metaphor of [image], sustained through the language of \"[quote]\". This creates a layered effect, suggesting...",
    relevantQuestions: [
      "Language analysis (all boards)",
      "Literature essays on writer's craft",
      "Comparing writers' methods",
    ],
  },
  {
    name: "Simile",
    category: "Figurative Language",
    definition:
      "A comparison using 'like' or 'as' to show similarity between two different things.",
    example: '"Her eyes shone like diamonds in the moonlight."',
    exampleSource: "Crafted example",
    effect:
      "Creates a vivid mental picture by comparing something to a familiar image. The reader can visualise exactly what the writer means.",
    howToIdentify:
      "Look for comparisons that use the words 'like' or 'as'. The two things compared will be fundamentally different.",
    sentenceStarter:
      'The simile "[quote]" compares [X] to [Y], which suggests... This creates an impression of...',
    relevantQuestions: [
      "Language analysis (AQA Q2/Q3, Edexcel Q3, OCR Q1b)",
      "Literature essay analysis",
      "Creative writing evaluation",
    ],
  },
  {
    name: "Personification",
    category: "Figurative Language",
    definition:
      "Giving human qualities, emotions, or actions to non-human things such as objects, animals, or abstract ideas.",
    example: '"The wind howled through the empty streets."',
    exampleSource: "Crafted example",
    effect:
      "Makes the non-human feel alive and relatable. It can create atmosphere, evoke emotion, or suggest that nature/objects have agency and power.",
    howToIdentify:
      "Look for non-human subjects performing human actions or described with human emotions. Ask: 'Can this thing really do this?'",
    sentenceStarter:
      'The writer personifies [thing] by describing it as "[quote]", which creates a sense of... This suggests...',
    relevantQuestions: [
      "Language analysis (all boards)",
      "Poetry analysis",
      "Atmosphere/mood questions",
    ],
  },
  {
    name: "Pathetic Fallacy",
    category: "Figurative Language",
    definition:
      "A specific type of personification where weather, nature, or the environment reflects the mood or emotions of characters or the narrative.",
    example:
      '"The rain set early in to-night, / The sullen wind was soon awake."',
    exampleSource: "Robert Browning, Porphyria's Lover",
    effect:
      "Creates atmosphere and mirrors internal emotions externally. It can foreshadow events or intensify the mood of a scene.",
    howToIdentify:
      "Look for descriptions of weather or nature that seem to match the emotional tone of the scene. Ask: 'Does the weather reflect how the characters feel?'",
    sentenceStarter:
      'The writer uses pathetic fallacy through "[quote]" to mirror the [emotion] of the scene. The [weather element] reflects...',
    relevantQuestions: [
      "Language analysis -- atmosphere questions",
      "Poetry analysis",
      "Literature: setting and mood",
    ],
  },
  {
    name: "Hyperbole",
    category: "Figurative Language",
    definition:
      "Deliberate exaggeration for emphasis, humour, or emotional effect. Not meant to be taken literally.",
    example: '"I have told you a million times not to exaggerate."',
    exampleSource: "Crafted example",
    effect:
      "Emphasises the intensity of a feeling, situation, or argument. It can create humour, convey desperation, or make a point more persuasive.",
    howToIdentify:
      "Look for statements that are clearly exaggerated beyond what is literally true. Ask: 'Is this realistically possible?'",
    sentenceStarter:
      'The hyperbole "[quote]" exaggerates [what] to emphasise... This creates a sense of...',
    relevantQuestions: [
      "Language analysis (all boards)",
      "Non-fiction/persuasive text analysis",
      "Writer's viewpoint questions",
    ],
  },
  {
    name: "Understatement / Litotes",
    aka: "Litotes",
    category: "Figurative Language",
    definition:
      "The opposite of hyperbole -- deliberately presenting something as less significant than it really is, often by negating the opposite.",
    example:
      '"It\'s just a scratch," he said, clutching the wound that soaked his shirt crimson.',
    exampleSource: "Crafted example",
    effect:
      "Can create dry humour, convey stoicism or bravery, or ironically highlight the true severity of a situation by downplaying it.",
    howToIdentify:
      "Look for descriptions that seem too mild for the situation. Litotes specifically uses a double negative or negation of the opposite ('not uncommon', 'not bad').",
    sentenceStarter:
      'The writer\'s use of understatement in "[quote]" downplays [what], which ironically draws attention to...',
    relevantQuestions: [
      "Language analysis (all boards)",
      "Character voice analysis",
      "Tone and attitude questions",
    ],
  },

  /* ── Imagery ──────────────────────────────────────────────── */
  {
    name: "Visual Imagery",
    category: "Imagery",
    definition:
      "Language that appeals to the sense of sight, creating pictures in the reader's mind.",
    example:
      '"The crimson sun sank below the jagged mountain ridge, bleeding colour across the sky."',
    exampleSource: "Crafted example",
    effect:
      "Allows the reader to 'see' the scene vividly. Creates atmosphere and brings settings or characters to life.",
    howToIdentify:
      "Look for colour words, shape descriptions, light/dark contrasts, and detailed physical descriptions that you could draw or paint.",
    sentenceStarter:
      'The visual imagery of "[quote]" creates a vivid picture of... enabling the reader to...',
    relevantQuestions: [
      "Language analysis (AQA Q2/Q3, Edexcel Q3)",
      "Descriptive writing evaluation",
      "Setting analysis",
    ],
  },
  {
    name: "Auditory Imagery",
    category: "Imagery",
    definition:
      "Language that appeals to the sense of hearing, making the reader 'hear' sounds.",
    example:
      '"The floorboards groaned beneath his weight and somewhere above, a tap dripped its steady, maddening rhythm."',
    exampleSource: "Crafted example",
    effect:
      "Immerses the reader in the soundscape of the scene. Can build tension, create atmosphere, or establish a mood.",
    howToIdentify:
      "Look for words describing sounds -- verbs like 'whispered', 'crashed', 'hummed'; or descriptions of noise, silence, and music.",
    sentenceStarter:
      'The auditory imagery "[quote]" immerses the reader in the sounds of the scene, creating a sense of...',
    relevantQuestions: [
      "Language analysis (all boards)",
      "Atmosphere questions",
      "Poetry analysis",
    ],
  },
  {
    name: "Tactile Imagery",
    category: "Imagery",
    definition:
      "Language that appeals to the sense of touch, evoking texture, temperature, or physical sensation.",
    example:
      '"The rough bark scraped against her palms as she climbed."',
    exampleSource: "Crafted example",
    effect:
      "Makes descriptions physical and tangible. The reader can almost feel the sensation, creating empathy with characters or vivid immersion in the scene.",
    howToIdentify:
      "Look for words related to texture (rough, smooth, slimy), temperature (icy, scorching), or physical feeling (sharp, soft, heavy).",
    sentenceStarter:
      'The tactile imagery of "[quote]" appeals to the reader\'s sense of touch, evoking...',
    relevantQuestions: [
      "Language analysis (all boards)",
      "Descriptive writing",
      "Sensory analysis questions",
    ],
  },
  {
    name: "Olfactory Imagery",
    category: "Imagery",
    definition:
      "Language that appeals to the sense of smell.",
    example:
      '"The acrid stench of burning rubber filled the air."',
    exampleSource: "Crafted example",
    effect:
      "Smell is strongly linked to memory and emotion, so olfactory imagery can be powerfully evocative, creating immediate atmosphere or triggering associations.",
    howToIdentify:
      "Look for references to scents, aromas, stenches, fragrances, or any description of how something smells.",
    sentenceStarter:
      'The olfactory imagery "[quote]" appeals to the reader\'s sense of smell, evoking...',
    relevantQuestions: [
      "Language analysis (all boards)",
      "Descriptive/narrative writing",
      "Atmosphere questions",
    ],
  },
  {
    name: "Gustatory Imagery",
    category: "Imagery",
    definition:
      "Language that appeals to the sense of taste.",
    example:
      '"She tasted the bitterness of regret with every swallow."',
    exampleSource: "Crafted example",
    effect:
      "Creates a visceral, physical response in the reader. Often used metaphorically to convey emotional experiences through taste.",
    howToIdentify:
      "Look for words associated with taste: sweet, bitter, sour, salty, metallic, or descriptions of flavours and eating.",
    sentenceStarter:
      'The gustatory imagery of "[quote]" creates a [pleasant/unpleasant] sensory experience, suggesting...',
    relevantQuestions: [
      "Language analysis (all boards)",
      "Descriptive writing",
      "Sensory analysis",
    ],
  },

  /* ── Sound Devices ────────────────────────────────────────── */
  {
    name: "Alliteration",
    category: "Sound Devices",
    definition:
      "The repetition of the same consonant sound at the beginning of closely connected words.",
    example: '"Peter Piper picked a peck of pickled peppers."',
    exampleSource: "Traditional tongue twister",
    effect:
      "Creates rhythm, emphasis, and musicality. The specific effect depends on the sound: harsh consonants (d, b, g) create aggression; soft consonants (s, l, m) create gentleness.",
    howToIdentify:
      "Look for two or more neighbouring words that start with the same consonant sound (not necessarily the same letter -- 'phone' and 'find' alliterate).",
    sentenceStarter:
      'The alliteration of "[quote]" creates a [harsh/soft/rhythmic] sound, which emphasises...',
    relevantQuestions: [
      "Language analysis (all boards)",
      "Poetry analysis",
      "Writer's use of language",
    ],
  },
  {
    name: "Sibilance",
    category: "Sound Devices",
    definition:
      "The repetition of 's', 'sh', 'z', or soft 'c' sounds, creating a hissing or whispering effect.",
    example: '"The snake slithered silently through the soft, sun-soaked sand."',
    exampleSource: "Crafted example",
    effect:
      "Creates a smooth, sinister, or soothing sound. Often associated with danger (snakes, whispers) or calm (sea, sleep).",
    howToIdentify:
      "Listen for repeated 's', 'sh', 'z', 'ss', or soft 'c' sounds within or at the start of words in close proximity.",
    sentenceStarter:
      'The sibilance in "[quote]" creates a [sinister/soothing/whispering] sound, which suggests...',
    relevantQuestions: [
      "Language analysis (all boards)",
      "Poetry analysis",
      "Sound and rhythm questions",
    ],
  },
  {
    name: "Assonance",
    category: "Sound Devices",
    definition:
      "The repetition of vowel sounds within nearby words.",
    example: '"Hear the mellow wedding bells." (repetition of the "e" sound)',
    exampleSource: "Edgar Allan Poe, The Bells",
    effect:
      "Creates internal rhyme, musicality, and a flowing quality. Can slow the pace and create mood.",
    howToIdentify:
      "Listen for repeated vowel sounds (not necessarily the same letter) in nearby words. Read aloud to hear the pattern.",
    sentenceStarter:
      'The assonance of the "[sound]" sound in "[quote]" creates a [musical/mournful/flowing] quality, which...',
    relevantQuestions: [
      "Poetry analysis",
      "Language analysis (all boards)",
      "Sound and rhythm questions",
    ],
  },
  {
    name: "Onomatopoeia",
    category: "Sound Devices",
    definition:
      "A word that imitates or suggests the sound it describes.",
    example: '"The fire crackled and hissed as the rain began to sizzle on the embers."',
    exampleSource: "Crafted example",
    effect:
      "Makes writing more sensory and immersive by letting the reader 'hear' the sounds being described. Brings scenes to life.",
    howToIdentify:
      "Look for words that sound like what they describe: buzz, crash, whisper, sizzle, bang, murmur, splash.",
    sentenceStarter:
      'The onomatopoeia "[quote]" mimics the sound of [what], immersing the reader in...',
    relevantQuestions: [
      "Language analysis (all boards)",
      "Poetry analysis",
      "Sensory writing questions",
    ],
  },
  {
    name: "Plosive Sounds",
    category: "Sound Devices",
    definition:
      "The use of hard, explosive consonant sounds -- b, d, g, k, p, t -- which create a forceful, abrupt effect.",
    example: '"The bitter black night bit and battered against the door."',
    exampleSource: "Crafted example",
    effect:
      "Creates a harsh, aggressive, or violent tone. The abrupt sounds can mirror physical force, anger, or confrontation.",
    howToIdentify:
      "Listen for clusters of b, d, g, k, p, or t sounds. Read aloud -- these sounds require a 'burst' of air, creating a punchy rhythm.",
    sentenceStarter:
      'The plosive sounds in "[quote]" create a [harsh/aggressive/forceful] tone, mirroring...',
    relevantQuestions: [
      "Language analysis (all boards)",
      "Poetry analysis",
      "Tone and mood questions",
    ],
  },
  {
    name: "Fricative Sounds",
    category: "Sound Devices",
    definition:
      "The use of consonant sounds produced by friction -- f, v, th, sh, s, z -- creating a softer, sometimes threatening effect.",
    example: '"The fog filtered through the fissures, a faint and fearful thing."',
    exampleSource: "Crafted example",
    effect:
      "Creates a breathy, whispering, or unsettling quality. Can suggest unease, fragility, or menace beneath a surface calm.",
    howToIdentify:
      "Listen for repeated f, v, th, sh, or z sounds. These are 'friction' sounds -- air passes continuously rather than in bursts.",
    sentenceStarter:
      'The fricative sounds in "[quote]" create a [breathy/unsettling/whispering] quality, suggesting...',
    relevantQuestions: [
      "Language analysis (all boards)",
      "Poetry analysis",
      "Tone and atmosphere questions",
    ],
  },

  /* ── Irony ────────────────────────────────────────────────── */
  {
    name: "Verbal Irony",
    category: "Irony",
    definition:
      "Saying the opposite of what is actually meant, often for humorous or cutting effect.",
    example:
      '"Oh, how I love standing in the rain for three hours," she muttered, wringing out her coat.',
    exampleSource: "Crafted example",
    effect:
      "Creates humour, sarcasm, or bitterness. Reveals a character's true feelings and can undermine what is being said on the surface.",
    howToIdentify:
      "Ask: 'Does the character/speaker really mean what they say?' If the meaning is the opposite, it is verbal irony.",
    sentenceStarter:
      'The verbal irony in "[quote]" reveals that the character actually feels... This creates a tone of...',
    relevantQuestions: [
      "Character analysis",
      "Tone and attitude questions",
      "Writer's viewpoint (non-fiction)",
    ],
  },
  {
    name: "Dramatic Irony",
    category: "Irony",
    definition:
      "When the audience or reader knows something that a character does not, creating tension or humour.",
    example:
      "In Romeo and Juliet, the audience knows Juliet is not truly dead, but Romeo does not.",
    exampleSource: "Shakespeare, Romeo and Juliet",
    effect:
      "Builds tension, suspense, or tragic intensity. The audience feels powerless as they watch a character make decisions based on incomplete knowledge.",
    howToIdentify:
      "Ask: 'Do I (the reader) know something that this character doesn't?' If yes, that gap in knowledge is dramatic irony.",
    sentenceStarter:
      "Shakespeare employs dramatic irony here -- the audience knows [what], yet the character believes... This heightens the sense of...",
    relevantQuestions: [
      "Literature essay analysis",
      "Tension and suspense questions",
      "Character analysis",
    ],
  },
  {
    name: "Situational Irony",
    category: "Irony",
    definition:
      "When the outcome of a situation is the opposite of what was expected.",
    example:
      "A fire station burns down. A marriage counsellor files for divorce.",
    exampleSource: "Crafted examples",
    effect:
      "Creates surprise, dark humour, or a sense of injustice. Highlights the unpredictability of life or the writer's commentary on events.",
    howToIdentify:
      "Ask: 'Is the outcome the opposite of what the characters (or reader) expected?' If yes, it is situational irony.",
    sentenceStarter:
      "The situational irony of [event] subverts the reader's expectations, as... This highlights...",
    relevantQuestions: [
      "Literature essay analysis",
      "Plot and structure questions",
      "Writer's message/theme questions",
    ],
  },

  /* ── Contrasts & Oppositions ──────────────────────────────── */
  {
    name: "Oxymoron",
    category: "Contrasts & Oppositions",
    definition:
      "Two contradictory words placed directly together to create a paradoxical image or idea.",
    example: '"Parting is such sweet sorrow."',
    exampleSource: "Shakespeare, Romeo and Juliet",
    effect:
      "Highlights the complexity or duality of an emotion, situation, or idea. Shows that two opposing things can coexist.",
    howToIdentify:
      "Look for two adjacent words that seem to contradict each other (e.g. bitter sweet, living death, deafening silence).",
    sentenceStarter:
      'The oxymoron "[quote]" juxtaposes [word] and [word], conveying the conflicting nature of...',
    relevantQuestions: [
      "Language analysis (all boards)",
      "Poetry analysis",
      "Character emotion questions",
    ],
  },
  {
    name: "Paradox",
    category: "Contrasts & Oppositions",
    definition:
      "A statement that seems self-contradictory but, on reflection, contains a deeper truth.",
    example:
      '"I must be cruel only to be kind." (Being harsh now will help later.)',
    exampleSource: "Shakespeare, Hamlet",
    effect:
      "Provokes thought and forces the reader to look beyond the surface meaning. Reveals complexity in moral or philosophical ideas.",
    howToIdentify:
      "Look for statements that appear impossible or contradictory but make sense when you think about them more deeply. Paradoxes are broader than oxymorons.",
    sentenceStarter:
      'The paradox "[quote]" initially seems contradictory, yet it reveals the deeper truth that...',
    relevantQuestions: [
      "Literature essay analysis",
      "Theme and idea questions",
      "Poetry analysis",
    ],
  },
  {
    name: "Juxtaposition",
    category: "Contrasts & Oppositions",
    definition:
      "Placing two contrasting ideas, images, or concepts close together to highlight their differences.",
    example:
      '"It was the best of times, it was the worst of times."',
    exampleSource: "Charles Dickens, A Tale of Two Cities",
    effect:
      "Emphasises contrast and forces the reader to consider the differences. Can highlight inequality, conflict, or complexity.",
    howToIdentify:
      "Look for two opposing ideas, images, or descriptions placed near each other. Ask: 'Is the writer deliberately contrasting these?'",
    sentenceStarter:
      'The writer juxtaposes [X] and [Y] through "[quote]", which highlights the contrast between...',
    relevantQuestions: [
      "Language analysis (all boards)",
      "Structure questions (AQA Q3)",
      "Literature comparison questions",
    ],
  },

  /* ── Deeper Literary Devices ──────────────────────────────── */
  {
    name: "Symbolism",
    category: "Deeper Literary Devices",
    definition:
      "Using an object, colour, character, or image to represent a broader idea, theme, or concept beyond its literal meaning.",
    example:
      "The conch shell in Lord of the Flies symbolises democracy, order, and civilised authority.",
    exampleSource: "William Golding, Lord of the Flies",
    effect:
      "Adds layers of meaning. Allows the writer to communicate complex themes indirectly, making the text richer and more open to interpretation.",
    howToIdentify:
      "Ask: 'Does this object/image seem to stand for something bigger than itself? Does it keep appearing in significant moments?'",
    sentenceStarter:
      "The [symbol] symbolises [concept], as shown when [evidence]. This reinforces the theme of...",
    relevantQuestions: [
      "Literature essay analysis",
      "Theme questions",
      "Writer's methods",
    ],
  },
  {
    name: "Motif",
    category: "Deeper Literary Devices",
    definition:
      "A recurring image, idea, word, or symbol that runs through a text and reinforces its themes.",
    example:
      "The recurring motif of blood in Macbeth -- from the battlefield to Lady Macbeth's hands -- tracks the theme of guilt.",
    exampleSource: "Shakespeare, Macbeth",
    effect:
      "Creates cohesion and reinforces themes across the text. Each recurrence deepens the meaning and shows development.",
    howToIdentify:
      "Look for images, words, or ideas that appear repeatedly throughout the text. Ask: 'Why does the writer keep returning to this?'",
    sentenceStarter:
      "The recurring motif of [motif] is significant because... Each appearance reinforces...",
    relevantQuestions: [
      "Literature essay analysis",
      "Whole-text theme questions",
      "Writer's methods",
    ],
  },
  {
    name: "Allegory",
    category: "Deeper Literary Devices",
    definition:
      "A narrative where characters, events, and settings represent abstract ideas or moral/political concepts -- the entire text works as an extended metaphor.",
    example:
      "Animal Farm is an allegory for the Russian Revolution and the rise of Stalinism.",
    exampleSource: "George Orwell, Animal Farm",
    effect:
      "Allows the writer to explore complex political, moral, or social ideas through a simpler, more accessible story. The reader interprets on two levels.",
    howToIdentify:
      "Ask: 'Does this entire story seem to represent something else? Do the characters stand in for real people, groups, or ideas?'",
    sentenceStarter:
      "The text functions as an allegory for [concept], with [character/event] representing...",
    relevantQuestions: [
      "Literature essay analysis",
      "Context and purpose questions",
      "Theme and writer's message",
    ],
  },
  {
    name: "Foreshadowing",
    category: "Deeper Literary Devices",
    definition:
      "Hints or clues planted earlier in the text that suggest what will happen later.",
    example:
      "The repeated references to the Inspector's arrival 'changing everything' before he appears.",
    exampleSource: "J.B. Priestley, An Inspector Calls",
    effect:
      "Builds tension and suspense. On a second reading, foreshadowing reveals the writer's careful crafting. It can also create dramatic irony.",
    howToIdentify:
      "Ask: 'Does this moment hint at something that happens later? On re-reading, did the writer drop clues?'",
    sentenceStarter:
      'The writer foreshadows [later event] through "[quote]", which creates a sense of... On re-reading, the reader recognises...',
    relevantQuestions: [
      "Structure questions (AQA Q3)",
      "Literature essay analysis",
      "Tension and suspense questions",
    ],
  },

  /* ── Repetition Devices ───────────────────────────────────── */
  {
    name: "Repetition",
    category: "Repetition Devices",
    definition:
      "Deliberately using a word, phrase, or idea more than once for emphasis or effect.",
    example: '"Never, never, never, never, never."',
    exampleSource: "Shakespeare, King Lear",
    effect:
      "Creates emphasis, rhythm, and emotional intensity. The repeated element lodges in the reader's mind and its importance is reinforced.",
    howToIdentify:
      "Look for words or phrases used more than once in close proximity or at key moments in the text.",
    sentenceStarter:
      'The repetition of "[word/phrase]" emphasises... This reinforces the idea that...',
    relevantQuestions: [
      "Language analysis (all boards)",
      "Non-fiction/persuasive text analysis",
      "Poetry analysis",
    ],
  },
  {
    name: "Anaphora",
    category: "Repetition Devices",
    definition:
      "The repetition of a word or phrase at the beginning of successive clauses, sentences, or lines.",
    example:
      '"We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields."',
    exampleSource: "Winston Churchill, wartime speech",
    effect:
      "Creates a powerful, rhythmic, building effect -- like a drumbeat. Builds urgency, conviction, and emotional momentum.",
    howToIdentify:
      "Look for the same word(s) starting multiple consecutive sentences, clauses, or lines of poetry.",
    sentenceStarter:
      'The anaphora of "[phrase]" at the start of successive clauses builds a sense of...',
    relevantQuestions: [
      "Non-fiction/persuasive text analysis",
      "Poetry analysis",
      "Speech and rhetoric analysis",
    ],
  },
  {
    name: "Epistrophe",
    category: "Repetition Devices",
    definition:
      "The repetition of a word or phrase at the end of successive clauses, sentences, or lines.",
    example:
      '"...government of the people, by the people, for the people."',
    exampleSource: "Abraham Lincoln, Gettysburg Address",
    effect:
      "Creates a hammering, emphatic conclusion to each clause. The final word rings in the reader's ears and gains increasing weight.",
    howToIdentify:
      "Look for the same word(s) ending multiple consecutive sentences, clauses, or lines.",
    sentenceStarter:
      'The epistrophe of "[word]" at the end of each clause reinforces...',
    relevantQuestions: [
      "Non-fiction/persuasive text analysis",
      "Poetry analysis",
      "Speech and rhetoric analysis",
    ],
  },
  {
    name: "Tricolon / Rule of Three",
    aka: "Rule of Three",
    category: "Repetition Devices",
    definition:
      "A list of three parallel words, phrases, or clauses used for emphasis, rhythm, or persuasion.",
    example: '"Veni, vidi, vici." (I came, I saw, I conquered.)',
    exampleSource: "Julius Caesar",
    effect:
      "Creates a satisfying, memorable rhythm. Three items feel complete and persuasive. Often builds in intensity or scope.",
    howToIdentify:
      "Look for lists of exactly three items, especially where they share a similar grammatical structure.",
    sentenceStarter:
      'The tricolon "[quote]" creates a rhythmic, emphatic effect, suggesting...',
    relevantQuestions: [
      "Non-fiction/persuasive text analysis",
      "Language analysis (all boards)",
      "Speech and rhetoric analysis",
    ],
  },

  /* ── Rhetorical & Persuasive ──────────────────────────────── */
  {
    name: "Rhetorical Question",
    category: "Rhetorical & Persuasive",
    definition:
      "A question asked for effect, not expecting an answer. It is designed to make the audience think or agree with the speaker.",
    example: '"Are we really going to stand by and let this happen?"',
    exampleSource: "Crafted example",
    effect:
      "Engages the reader directly, prompts reflection, and implies that the answer is obvious. It can create a sense of shared outrage or agreement.",
    howToIdentify:
      "Look for a question that the writer clearly does not expect the reader to answer. The 'answer' is implied.",
    sentenceStarter:
      'The rhetorical question "[quote]" directly challenges the reader to consider... The implied answer is...',
    relevantQuestions: [
      "Non-fiction/persuasive text analysis",
      "Writer's viewpoint questions",
      "Comparing viewpoints (AQA Q4, Edexcel Q4)",
    ],
  },
  {
    name: "Emotive Language",
    category: "Rhetorical & Persuasive",
    definition:
      "Word choices deliberately designed to provoke an emotional reaction in the reader -- anger, sympathy, fear, outrage, etc.",
    example:
      '"The helpless, starving children were abandoned in the freezing darkness."',
    exampleSource: "Crafted example",
    effect:
      "Manipulates the reader's emotions to influence their response. Creates sympathy, anger, or urgency, often to support a particular viewpoint.",
    howToIdentify:
      "Ask: 'Is this word designed to make me feel something specific?' Look for words with strong emotional connotations rather than neutral alternatives.",
    sentenceStarter:
      'The emotive language "[quote]" is designed to evoke [emotion] in the reader, in order to...',
    relevantQuestions: [
      "Non-fiction/persuasive text analysis",
      "Writer's viewpoint questions",
      "Comparing viewpoints",
    ],
  },
  {
    name: "Imperative Verbs",
    category: "Rhetorical & Persuasive",
    definition:
      "Command words that directly instruct the reader to do something.",
    example:
      '"Act now. Donate today. Make a difference."',
    exampleSource: "Crafted example",
    effect:
      "Creates urgency and a call to action. Establishes the writer's authority and makes the reader feel compelled to respond.",
    howToIdentify:
      "Look for sentences that begin with a verb giving a command or instruction: 'Stop', 'Consider', 'Imagine', 'Join'.",
    sentenceStarter:
      'The imperative "[quote]" commands the reader to..., creating a sense of urgency and...',
    relevantQuestions: [
      "Non-fiction/persuasive text analysis",
      "Writer's viewpoint questions",
      "Language analysis (all boards)",
    ],
  },
  {
    name: "Modal Verbs",
    category: "Rhetorical & Persuasive",
    definition:
      "Verbs that express necessity, possibility, obligation, or certainty -- such as 'must', 'should', 'could', 'might', 'will'.",
    example:
      '"We must act now" vs. "We could act now" -- the first is far more forceful.',
    exampleSource: "Crafted example",
    effect:
      "Controls the strength of a statement. High-modality verbs (must, will) create certainty; low-modality (might, could) create tentativeness or possibility.",
    howToIdentify:
      "Look for must, should, could, would, might, may, will, shall, can. Consider how forceful or tentative the statement becomes.",
    sentenceStarter:
      'The modal verb "[word]" conveys a sense of [certainty/obligation/possibility], suggesting that the writer...',
    relevantQuestions: [
      "Non-fiction/persuasive text analysis",
      "Writer's viewpoint questions",
      "Tone and register analysis",
    ],
  },

  /* ── Narrative Voice & Perspective ────────────────────────── */
  {
    name: "First Person",
    category: "Narrative Voice & Perspective",
    definition:
      "Writing from 'I' or 'we', placing the narrator inside the story as a character or speaker.",
    example:
      '"I could not sleep that night; every creak of the house became a footstep."',
    exampleSource: "Crafted example",
    effect:
      "Creates intimacy, personal connection, and credibility. The reader feels they are inside the character's mind. Can be unreliable.",
    howToIdentify:
      "Look for pronouns: I, me, my, mine, we, us, our.",
    sentenceStarter:
      "The first-person perspective creates an intimate, personal tone, allowing the reader to...",
    relevantQuestions: [
      "Narrative voice analysis",
      "Non-fiction viewpoint questions",
      "Writer's methods",
    ],
  },
  {
    name: "Second Person",
    category: "Narrative Voice & Perspective",
    definition:
      "Writing addressed directly to 'you', drawing the reader into the text.",
    example: '"You walk into the room and immediately you sense something is wrong."',
    exampleSource: "Crafted example",
    effect:
      "Directly involves the reader, making them feel personally addressed. Creates urgency, accusation, or empathy depending on context.",
    howToIdentify:
      "Look for the pronoun 'you' and 'your' used to address the reader directly.",
    sentenceStarter:
      'The second-person address "[quote]" directly involves the reader, creating a sense of...',
    relevantQuestions: [
      "Non-fiction/persuasive text analysis",
      "Narrative voice questions",
      "Writer's viewpoint",
    ],
  },
  {
    name: "Third Person",
    category: "Narrative Voice & Perspective",
    definition:
      "Writing about characters using 'he', 'she', 'they' -- the narrator is outside the story.",
    example:
      '"She stared at the letter, her hands trembling."',
    exampleSource: "Crafted example",
    effect:
      "Can feel more objective and authoritative. Third-person omniscient gives the narrator god-like access to multiple characters' thoughts; third-person limited restricts this to one character.",
    howToIdentify:
      "Look for he, she, they, him, her, them -- the narrator refers to characters by name or pronoun rather than 'I'.",
    sentenceStarter:
      "The third-person narration allows the writer to [show multiple perspectives / create distance / maintain objectivity], which...",
    relevantQuestions: [
      "Narrative voice analysis",
      "Writer's methods",
      "Prose fiction analysis",
    ],
  },
  {
    name: "Active Voice",
    category: "Narrative Voice & Perspective",
    definition:
      "The subject of the sentence performs the action: 'The dog bit the man.'",
    example: '"The storm destroyed the village."',
    exampleSource: "Crafted example",
    effect:
      "Creates directness, clarity, and energy. The actor is foregrounded, making the writing feel dynamic and immediate.",
    howToIdentify:
      "Ask: 'Who/what is doing the action?' If the doer comes first, it is active voice.",
    sentenceStarter:
      "The writer's use of active voice places emphasis on [the actor], creating a sense of...",
    relevantQuestions: [
      "Language analysis (all boards)",
      "Writer's methods",
      "Non-fiction analysis",
    ],
  },
  {
    name: "Passive Voice",
    category: "Narrative Voice & Perspective",
    definition:
      "The subject of the sentence receives the action: 'The man was bitten by the dog.'",
    example: '"The village was destroyed." (The actor -- the storm -- is removed.)',
    exampleSource: "Crafted example",
    effect:
      "Can remove agency, create a sense of helplessness, or shift focus to the victim. Often used to avoid blame or create formality.",
    howToIdentify:
      "Look for 'was/were + past participle' constructions. Ask: 'Is the doer of the action missing or placed after \"by\"?'",
    sentenceStarter:
      "The passive construction removes the agent, which creates a sense of [helplessness / anonymity / detachment]...",
    relevantQuestions: [
      "Language analysis (all boards)",
      "Non-fiction analysis",
      "Writer's methods",
    ],
  },

  /* ── Word-Level Techniques ────────────────────────────────── */
  {
    name: "Semantic Field",
    category: "Word-Level Techniques",
    definition:
      "A group of words in a text that all relate to the same topic or theme (e.g. war, nature, religion, darkness).",
    example:
      'A passage describing a school using war vocabulary: "battle", "troops", "surrender", "front line".',
    exampleSource: "Crafted example",
    effect:
      "Creates a sustained mood or subtext. Even if the literal topic is different, the semantic field reveals the writer's underlying message or attitude.",
    howToIdentify:
      "Cluster related words together and ask: 'What topic/theme do these words all connect to?' That topic is the semantic field.",
    sentenceStarter:
      'The semantic field of [topic] is established through words such as "[word]", "[word]", and "[word]", which suggests...',
    relevantQuestions: [
      "Language analysis (all boards)",
      "Poetry analysis",
      "Writer's methods",
    ],
  },
  {
    name: "Connotation",
    category: "Word-Level Techniques",
    definition:
      "The associations, feelings, or ideas that a word carries beyond its literal dictionary definition (denotation).",
    example:
      '"Childish" and "childlike" both mean relating to a child, but "childish" has negative connotations (immature) while "childlike" has positive ones (innocent).',
    exampleSource: "Crafted example",
    effect:
      "Shapes the reader's response to a subject by triggering specific associations. Word choice reveals the writer's attitude and biases.",
    howToIdentify:
      "Ask: 'What feelings or associations does this specific word carry? Could the writer have chosen a neutral alternative?'",
    sentenceStarter:
      'The word "[word]" carries connotations of [association], which suggests the writer views [subject] as...',
    relevantQuestions: [
      "Language analysis (all boards)",
      "Non-fiction viewpoint questions",
      "Poetry word-choice analysis",
    ],
  },
  {
    name: "Euphemism",
    category: "Word-Level Techniques",
    definition:
      "A mild or indirect word or phrase used in place of one considered too harsh, blunt, or offensive.",
    example:
      '"He passed away" instead of "He died." "Let go" instead of "fired."',
    exampleSource: "Crafted example",
    effect:
      "Softens the reality. Can show politeness, sensitivity, or -- more critically -- an attempt to hide or sanitise the truth.",
    howToIdentify:
      "Ask: 'Is this a softer way of saying something unpleasant? What is the writer avoiding saying directly?'",
    sentenceStarter:
      'The euphemism "[quote]" softens the reality of [what], which suggests the writer is trying to...',
    relevantQuestions: [
      "Non-fiction analysis",
      "Writer's viewpoint questions",
      "Language analysis (all boards)",
    ],
  },
  {
    name: "Dysphemism",
    category: "Word-Level Techniques",
    definition:
      "The opposite of euphemism -- using a harsh, blunt, or offensive word deliberately where a milder alternative exists.",
    example:
      '"The politician\'s latest brain dump" instead of "speech" or "statement".',
    exampleSource: "Crafted example",
    effect:
      "Creates shock, contempt, or dark humour. Reveals the writer's negative attitude towards the subject and provokes a strong emotional reaction.",
    howToIdentify:
      "Ask: 'Is this word deliberately harsh when a neutral or polite alternative could have been used?'",
    sentenceStarter:
      'The dysphemism "[word]" is deliberately crude/harsh, revealing the writer\'s [contempt/anger/frustration] towards...',
    relevantQuestions: [
      "Non-fiction analysis",
      "Writer's viewpoint questions",
      "Tone and register analysis",
    ],
  },
  {
    name: "Colloquialism",
    category: "Word-Level Techniques",
    definition:
      "Informal, everyday language or slang used in writing -- the language of ordinary speech.",
    example:
      '"It\'s gonna be a right nightmare getting home tonight."',
    exampleSource: "Crafted example",
    effect:
      "Creates a conversational, relatable tone. Can establish character voice, suggest social class, build rapport with the reader, or create authenticity.",
    howToIdentify:
      "Ask: 'Would this language feel natural in everyday conversation but out of place in a formal essay?' Look for slang, contractions, dialect words.",
    sentenceStarter:
      'The colloquial language "[quote]" creates an informal, [relatable/authentic] tone, which...',
    relevantQuestions: [
      "Language analysis (all boards)",
      "Character voice analysis",
      "Register and tone questions",
    ],
  },
  {
    name: "Register / Tone",
    category: "Word-Level Techniques",
    definition:
      "Register is the level of formality in language (formal, informal, academic, conversational). Tone is the attitude or feeling conveyed (angry, humorous, sombre, urgent).",
    example:
      "A formal register: \"One must consider the implications.\" An informal register: \"You've gotta think about what happens next.\"",
    exampleSource: "Crafted example",
    effect:
      "Establishes the relationship between writer and reader, suits the context and audience, and reveals the writer's purpose and attitude.",
    howToIdentify:
      "Ask: 'How formal is this? What attitude/feeling comes through?' Consider vocabulary choices, sentence length, and use of contractions or jargon.",
    sentenceStarter:
      "The [formal/informal/academic/conversational] register creates a tone of [emotion/attitude], which suggests...",
    relevantQuestions: [
      "Non-fiction analysis (all boards)",
      "Writer's viewpoint questions",
      "Comparing texts",
    ],
  },
  {
    name: "Ambiguity",
    category: "Word-Level Techniques",
    definition:
      "Language that can be interpreted in more than one way, creating uncertainty or multiple layers of meaning.",
    example:
      '"The end is near" -- the end of the road? The end of a relationship? The end of the world?',
    exampleSource: "Crafted example",
    effect:
      "Provokes thought and invites multiple interpretations. Adds depth and complexity, and can create tension or unease through uncertainty.",
    howToIdentify:
      "Ask: 'Could this mean more than one thing? Is the writer deliberately leaving this open to interpretation?'",
    sentenceStarter:
      'The ambiguity of "[quote]" allows for multiple interpretations: it could suggest [X], or alternatively...',
    relevantQuestions: [
      "Language analysis (all boards)",
      "Poetry analysis",
      "Literature essay analysis",
    ],
  },

  /* ── Figurative Extensions ────────────────────────────────── */
  {
    name: "Synecdoche",
    category: "Figurative Language",
    definition:
      "A figure of speech where a part of something is used to represent the whole, or the whole is used to represent a part.",
    example:
      '"All hands on deck" -- "hands" represents the whole sailors.',
    exampleSource: "Traditional phrase",
    effect:
      "Creates conciseness and can emphasise a particular aspect of the whole. Highlights what the writer considers most important.",
    howToIdentify:
      "Ask: 'Is a part being used to represent something bigger, or vice versa?' (e.g. 'wheels' for a car, 'the Crown' for the monarchy).",
    sentenceStarter:
      'The synecdoche "[quote]" uses [part] to represent [whole], which emphasises...',
    relevantQuestions: [
      "Language analysis (all boards)",
      "Poetry analysis",
      "Writer's methods",
    ],
  },
  {
    name: "Metonymy",
    category: "Figurative Language",
    definition:
      "Replacing the name of something with something closely associated with it (but not a part of it -- that would be synecdoche).",
    example:
      '"The pen is mightier than the sword" -- "pen" represents written words/ideas; "sword" represents military force.',
    exampleSource: "Edward Bulwer-Lytton",
    effect:
      "Creates concise, memorable language. The associated item often carries stronger connotations than the literal term.",
    howToIdentify:
      "Ask: 'Is a closely associated concept being used as a substitute?' (e.g. 'the Crown' for the king, 'Downing Street' for the government).",
    sentenceStarter:
      'The metonymy "[quote]" substitutes [associated thing] for [actual thing], which suggests...',
    relevantQuestions: [
      "Language analysis (all boards)",
      "Poetry analysis",
      "Non-fiction analysis",
    ],
  },
  {
    name: "Flashback",
    category: "Deeper Literary Devices",
    definition:
      "A scene set in a time earlier than the main narrative, interrupting the chronological order to reveal background information.",
    example:
      "In A Christmas Carol, the Ghost of Christmas Past takes Scrooge back to memories of his childhood and lost love.",
    exampleSource: "Charles Dickens, A Christmas Carol",
    effect:
      "Provides context and backstory. Deepens character development by revealing formative experiences and helps the reader understand motivations.",
    howToIdentify:
      "Look for a sudden shift to the past tense, time markers ('years ago', 'he remembered'), or a change in setting to an earlier time.",
    sentenceStarter:
      "The flashback to [event/time] reveals [what], which deepens the reader's understanding of...",
    relevantQuestions: [
      "Structure questions (AQA Q3)",
      "Literature essay analysis",
      "Character development questions",
    ],
  },
];

/* ─── Categories & alphabet ──────────────────────────────────── */

const CATEGORIES = Array.from(
  new Set(TECHNIQUES.map((t) => t.category))
);

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

/* ─── Icons ──────────────────────────────────────────────────── */

function SearchIcon() {
  return (
    <svg
      className="h-5 w-5 text-muted-foreground"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );
}

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

/* ─── Technique Card ─────────────────────────────────────────── */

function TechniqueCard({ t }: { t: Technique }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-border bg-card shadow-md transition hover:shadow-md">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-4 p-5 text-left sm:p-6"
        aria-expanded={open}
      >
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base font-bold text-foreground sm:text-lg">
              {t.name}
            </h3>
            {t.aka && (
              <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                aka {t.aka}
              </span>
            )}
          </div>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {t.definition}
          </p>
        </div>
        <ChevronDown open={open} />
      </button>

      {open && (
        <div className="border-t border-border px-5 pb-6 pt-4 sm:px-6">
          <div className="grid gap-5 sm:grid-cols-2">
            {/* Example */}
            <div className="rounded-lg bg-accent-50 p-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-accent-700">
                Example
              </h4>
              <p className="mt-2 text-sm italic leading-relaxed text-foreground">
                {t.example}
              </p>
              {t.exampleSource && (
                <p className="mt-1 text-xs text-muted-foreground">
                  -- {t.exampleSource}
                </p>
              )}
            </div>

            {/* Effect on reader */}
            <div className="rounded-lg bg-primary-50 p-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-primary-700">
                Effect on the reader
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-foreground">
                {t.effect}
              </p>
            </div>

            {/* How to identify */}
            <div className="rounded-lg bg-muted p-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                How to identify it
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t.howToIdentify}
              </p>
            </div>

            {/* Sentence starter */}
            <div className="rounded-lg bg-success-50 p-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-success-700">
                Exam sentence starter
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-foreground">
                {t.sentenceStarter}
              </p>
            </div>
          </div>

          {/* Relevant questions */}
          <div className="mt-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Most relevant to
            </h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {t.relevantQuestions.map((q) => (
                <span
                  key={q}
                  className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {q}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Page component ─────────────────────────────────────────── */

export default function LanguageDevicesPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let list = TECHNIQUES;

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.definition.toLowerCase().includes(q) ||
          t.category.toLowerCase().includes(q) ||
          (t.aka && t.aka.toLowerCase().includes(q))
      );
    }

    if (activeCategory) {
      list = list.filter((t) => t.category === activeCategory);
    }

    if (activeLetter) {
      list = list.filter((t) =>
        t.name.toUpperCase().startsWith(activeLetter!)
      );
    }

    return list;
  }, [search, activeCategory, activeLetter]);

  /* letters that actually have techniques */
  const availableLetters = useMemo(
    () => new Set(TECHNIQUES.map((t) => t.name[0].toUpperCase())),
    []
  );

  return (
    <>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-600 px-4 py-14 text-white sm:py-18">
        <div className="mx-auto max-w-4xl text-center">
          <nav className="text-sm text-white/70">
            <Link href="/resources/techniques" className="hover:text-white transition-colors">
              Techniques
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Language Devices</span>
          </nav>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Language &amp; Literary Devices
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            {TECHNIQUES.length} essential techniques with definitions, examples,
            effects, and exam sentence starters. Search, filter, and expand any
            card to study in detail.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Search bar */}
        <div className="relative mx-auto max-w-xl">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <SearchIcon />
          </div>
          <input
            type="search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setActiveCategory(null);
              setActiveLetter(null);
            }}
            placeholder="Search techniques (e.g. metaphor, irony, sound)..."
            className="w-full rounded-xl border border-gray-300 bg-card py-3 pl-11 pr-4 text-sm text-foreground shadow-md placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
          />
        </div>

        {/* Alphabet filter */}
        <div className="mt-6 flex flex-wrap justify-center gap-1">
          <button
            onClick={() => setActiveLetter(null)}
            className={`rounded-md px-2.5 py-1 text-xs font-bold transition ${
              activeLetter === null
                ? "bg-primary text-white"
                : "bg-gray-100 text-muted-foreground hover:bg-gray-200"
            }`}
          >
            All
          </button>
          {ALPHABET.map((letter) => {
            const available = availableLetters.has(letter);
            return (
              <button
                key={letter}
                onClick={() =>
                  available &&
                  setActiveLetter(activeLetter === letter ? null : letter)
                }
                disabled={!available}
                className={`rounded-md px-2.5 py-1 text-xs font-bold transition ${
                  activeLetter === letter
                    ? "bg-primary text-white"
                    : available
                    ? "bg-gray-100 text-muted-foreground hover:bg-gray-200"
                    : "bg-muted text-gray-300 cursor-not-allowed"
                }`}
              >
                {letter}
              </button>
            );
          })}
        </div>

        {/* Category filter */}
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveCategory(null)}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
              activeCategory === null
                ? "bg-accent text-white"
                : "bg-gray-100 text-muted-foreground hover:bg-gray-200"
            }`}
          >
            All categories
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() =>
                setActiveCategory(activeCategory === cat ? null : cat)
              }
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                activeCategory === cat
                  ? "bg-accent text-white"
                  : "bg-gray-100 text-muted-foreground hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Showing {filtered.length} of {TECHNIQUES.length} techniques
          {activeCategory && <> in <strong>{activeCategory}</strong></>}
          {activeLetter && <> starting with <strong>{activeLetter}</strong></>}
          {search.trim() && <> matching &ldquo;{search.trim()}&rdquo;</>}
        </p>

        {/* Cards */}
        <div className="mt-8 space-y-4">
          {filtered.length > 0 ? (
            filtered.map((t) => <TechniqueCard key={t.name} t={t} />)
          ) : (
            <div className="rounded-xl border border-dashed border-gray-300 py-16 text-center">
              <p className="text-muted-foreground">
                No techniques match your search. Try a different term or clear
                your filters.
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory(null);
                  setActiveLetter(null);
                }}
                className="mt-4 text-sm font-semibold text-accent hover:text-primary transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>

      <ExamBoardDisclaimer />
    </>
  );
}
