// @ts-nocheck
// PERF: this deck used to be declared inline in flashcard-data.ts. Because the
// flashcards page is a client component, every inline deck was bundled into that
// route's First Load JS (~600 KB of card text before a student had opened a
// single deck). Each deck now lives in its own module so the loader in
// ../deck-loaders.ts can fetch just this one, on demand.
import type { FlashcardDeck } from '../types'

const deck: FlashcardDeck = {
  id: 'literary-techniques',
  title: 'Literary & Language Techniques',
  description: '50 essential techniques for GCSE English',
  category: 'Techniques',
  board: 'All',
  cards: [
    {
      id: 'lt-1',
      front: 'Metaphor',
      back: `A comparison that says something IS something else, without using "like" or "as."\n\nExample: "All the world\'s a stage" (Shakespeare)\n\nEffect: Creates a vivid image and implies a deeper connection between two things.`,
    },
    {
      id: 'lt-2',
      front: 'Simile',
      back: `A comparison using "like" or "as."\n\nExample: "Her smile was like sunshine after rain."\n\nEffect: Makes descriptions more vivid by linking the unfamiliar to the familiar.`,
    },
    {
      id: 'lt-3',
      front: 'Personification',
      back: `Giving human qualities to something non-human.\n\nExample: "The wind howled in anger."\n\nEffect: Makes abstract ideas or natural forces feel alive and relatable.`,
    },
    {
      id: 'lt-4',
      front: 'Alliteration',
      back: `Repetition of the same consonant sound at the start of nearby words.\n\nExample: "Peter Piper picked a peck of pickled peppers."\n\nEffect: Creates rhythm, emphasis, or a particular mood (e.g., harsh alliteration with "c" or "k").`,
    },
    {
      id: 'lt-5',
      front: 'Sibilance',
      back: `Repetition of "s," "sh," or soft "c" sounds.\n\nExample: "The snake slithered silently through the grass."\n\nEffect: Often creates a sinister, secretive, or soothing atmosphere.`,
    },
    {
      id: 'lt-6',
      front: 'Onomatopoeia',
      back: `A word that sounds like what it describes.\n\nExample: "The bees buzzed around the flowers."\n\nEffect: Makes the reader hear the sound, creating an immersive sensory experience.`,
    },
    {
      id: 'lt-7',
      front: 'Pathetic Fallacy',
      back: `Using weather or the environment to reflect a character\'s mood.\n\nExample: "Rain lashed the windows as she sobbed."\n\nEffect: Reinforces emotion and atmosphere without stating feelings directly.`,
    },
    {
      id: 'lt-8',
      front: 'Oxymoron',
      back: `Two contradictory words placed together.\n\nExample: "A deafening silence filled the room."\n\nEffect: Highlights conflict, tension, or complexity within a character or situation.`,
    },
    {
      id: 'lt-9',
      front: 'Juxtaposition',
      back: `Placing two contrasting ideas, characters, or images side by side.\n\nExample: "It was the best of times, it was the worst of times." (Dickens)\n\nEffect: Highlights differences and forces the reader to compare.`,
    },
    {
      id: 'lt-10',
      front: 'Hyperbole',
      back: `Deliberate exaggeration for emphasis or effect.\n\nExample: "I\'ve told you a million times."\n\nEffect: Conveys strong emotion or makes a point dramatically.`,
    },
    {
      id: 'lt-11',
      front: 'Irony',
      back: `When words mean the opposite of what they say, or events turn out differently from expectations.\n\nExample: A fire station burns down.\n\nTypes: Verbal irony, dramatic irony, situational irony.`,
    },
    {
      id: 'lt-12',
      front: 'Symbolism',
      back: `Using an object, colour, or image to represent a deeper meaning.\n\nExample: A red rose symbolising love.\n\nEffect: Adds layers of meaning beyond the literal.`,
    },
    {
      id: 'lt-13',
      front: 'Foreshadowing',
      back: `Hints or clues about what will happen later in the text.\n\nExample: "Little did he know, this would be his last journey."\n\nEffect: Builds tension, suspense, or dramatic irony.`,
    },
    {
      id: 'lt-14',
      front: 'Rhetorical Question',
      back: `A question asked for effect, not expecting an answer.\n\nExample: "How long must we tolerate this injustice?"\n\nEffect: Engages the reader and makes them think. Implies the answer is obvious.`,
    },
    {
      id: 'lt-15',
      front: 'Tricolon (Rule of Three)',
      back: `A list of three words, phrases, or clauses for emphasis.\n\nExample: "Government of the people, by the people, for the people."\n\nEffect: Creates rhythm, makes ideas memorable, builds to a climax.`,
    },
    {
      id: 'lt-16',
      front: 'Anaphora',
      back: `Repeating a word or phrase at the start of consecutive sentences or clauses.\n\nExample: "We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields."\n\nEffect: Creates rhythm and emphasis. Builds emotional power.`,
    },
    {
      id: 'lt-17',
      front: 'Emotive Language',
      back: `Words deliberately chosen to provoke an emotional response.\n\nExample: "The helpless, innocent children were abandoned."\n\nEffect: Makes the reader feel sympathy, anger, fear, etc.`,
    },
    {
      id: 'lt-18',
      front: 'Imperative',
      back: `A command or instruction.\n\nExample: "Join us. Fight back. Make your voice heard."\n\nEffect: Creates urgency and directly engages the reader.`,
    },
    {
      id: 'lt-19',
      front: 'Direct Address',
      back: `Speaking directly to the reader using "you."\n\nExample: "You know this is wrong."\n\nEffect: Creates a personal connection and makes the argument feel inescapable.`,
    },
    {
      id: 'lt-20',
      front: 'Semantic Field',
      back: `A group of words that all relate to the same topic.\n\nExample: "The battlefield was littered with shells, trenches stretched for miles, and the soldiers marched on." (semantic field of war)\n\nEffect: Creates a sustained mood or reinforces a theme.`,
    },
    {
      id: 'lt-21',
      front: 'Tone',
      back: `The writer\'s attitude or feeling conveyed through their language choices.\n\nExamples: bitter, nostalgic, sarcastic, hopeful, menacing.\n\nHow to identify: Look at word connotations, sentence length, and punctuation.`,
    },
    {
      id: 'lt-22',
      front: 'Imagery',
      back: `Language that appeals to the senses (sight, sound, touch, taste, smell).\n\nExample: "The golden wheat swayed in the warm breeze, filling the air with a sweet, earthy scent."\n\nEffect: Makes the reader feel as if they are there.`,
    },
    {
      id: 'lt-23',
      front: 'Extended Metaphor',
      back: `A metaphor that continues across several lines or an entire text.\n\nExample: Shakespeare\'s "All the world\'s a stage, and all the men and women merely players" continues with "exits and entrances."\n\nEffect: Develops a complex comparison in depth.`,
    },
    {
      id: 'lt-24',
      front: 'Plosive Sounds',
      back: `Hard consonant sounds: b, d, g, p, t, k.\n\nExample: "The bitter, brutal cold bit through his coat."\n\nEffect: Creates a harsh, aggressive, or violent tone.`,
    },
    {
      id: 'lt-25',
      front: 'Caesura',
      back: `A pause in the middle of a line of poetry, usually marked by punctuation.\n\nExample: "I wandered lonely. As a cloud."\n\nEffect: Creates emphasis, disrupts rhythm, reflects meaning.`,
    },
    {
      id: 'lt-26',
      front: 'Enjambment',
      back: `When a sentence runs over from one line of poetry to the next without punctuation.\n\nEffect: Creates a sense of momentum, urgency, or overflow of emotion.`,
    },
    {
      id: 'lt-27',
      front: 'Volta',
      back: `A turning point in a poem where the mood, argument, or focus shifts.\n\nOften found: At the start of the final couplet in a sonnet (line 9 or 13).\n\nEffect: Creates contrast and surprise.`,
    },
    {
      id: 'lt-28',
      front: 'Stanza',
      back: `A group of lines in a poem (like a paragraph in prose).\n\nStanza lengths carry meaning: short stanzas can feel clipped or urgent; long stanzas can feel expansive.`,
    },
    {
      id: 'lt-29',
      front: 'Free Verse',
      back: `Poetry without a regular rhyme scheme or metre.\n\nEffect: Can feel conversational, natural, or rebellious against tradition.`,
    },
    {
      id: 'lt-30',
      front: 'Sonnet',
      back: `A 14-line poem, usually about love.\n\nShakespearean: 3 quatrains + couplet (ABAB CDCD EFEF GG)\nPetrarchan: Octave + sestet (ABBAABBA + CDECDE)\n\nVolta usually at line 9 or 13.`,
    },
    {
      id: 'lt-31',
      front: 'Dramatic Monologue',
      back: `A poem where a single character speaks to a silent listener, revealing their personality.\n\nExample: Robert Browning\'s "My Last Duchess"\n\nEffect: Shows character through voice rather than description.`,
    },
    {
      id: 'lt-32',
      front: 'First Person Narrator',
      back: `The story is told using "I" by a character within the story.\n\nEffect: Creates intimacy and subjectivity. The reader only sees what this character sees.`,
    },
    {
      id: 'lt-33',
      front: 'Third Person Omniscient',
      back: `The narrator knows everything - all characters\' thoughts and feelings.\n\nEffect: Gives the reader a god-like perspective. Can create dramatic irony.`,
    },
    {
      id: 'lt-34',
      front: 'Unreliable Narrator',
      back: `A narrator whose account cannot be fully trusted.\n\nClues: Contradictions, bias, gaps in memory, defensive tone.\n\nEffect: Creates suspense and forces the reader to question what is real.`,
    },
    {
      id: 'lt-35',
      front: 'Motif',
      back: `A recurring image, symbol, or idea throughout a text.\n\nExample: The green light in The Great Gatsby.\n\nEffect: Reinforces themes and creates structural cohesion.`,
    },
    {
      id: 'lt-36',
      front: 'Allegory',
      back: `A story where characters and events represent abstract ideas or moral concepts.\n\nExample: Animal Farm is an allegory for the Russian Revolution.\n\nEffect: Communicates political or moral messages through narrative.`,
    },
    {
      id: 'lt-37',
      front: 'Gothic Genre',
      back: `A literary genre characterised by darkness, decay, supernatural elements, and psychological terror.\n\nConventions: Isolated settings, doubles/duality, madness, secrets.\n\nExample: Jekyll and Hyde, Frankenstein, Dracula.`,
    },
    {
      id: 'lt-38',
      front: 'Bildungsroman',
      back: `A coming-of-age story that follows a character\'s moral and psychological development.\n\nExample: Great Expectations, Jane Eyre.\n\nKey feature: The protagonist learns and grows through their experiences.`,
    },
    {
      id: 'lt-39',
      front: 'Asyndetic List',
      back: `A list without conjunctions (and, or, but).\n\nExample: "He ran, stumbled, fell, lay still."\n\nEffect: Creates pace, urgency, or an overwhelming sense of accumulation.`,
    },
    {
      id: 'lt-40',
      front: 'Syndetic List',
      back: `A list with conjunctions between each item.\n\nExample: "She packed her bag and her books and her lunch and her coat."\n\nEffect: Can suggest endlessness, monotony, or childlike voice.`,
    },
    {
      id: 'lt-41',
      front: 'Declarative Sentence',
      back: `A statement that declares a fact or opinion.\n\nExample: "The door was locked."\n\nEffect: Creates authority, certainty, or finality.`,
    },
    {
      id: 'lt-42',
      front: 'Interrogative Sentence',
      back: `A sentence that asks a question.\n\nExample: "Where had she gone?"\n\nEffect: Creates mystery, engages the reader, or shows a character\'s uncertainty.`,
    },
    {
      id: 'lt-43',
      front: 'Exclamatory Sentence',
      back: `A sentence that expresses strong emotion, ending with "!"\n\nExample: "The house was on fire!"\n\nEffect: Conveys shock, excitement, fear, or urgency.`,
    },
    {
      id: 'lt-44',
      front: 'Minor Sentence / Fragment',
      back: `An incomplete sentence used for effect.\n\nExample: "Silence. Complete silence."\n\nEffect: Creates impact, emphasis, or mirrors disruption.`,
    },
    {
      id: 'lt-45',
      front: 'Passive Voice',
      back: `The subject receives the action rather than performing it.\n\nExample: "The window was broken" (vs. "He broke the window").\n\nEffect: Removes agency, creates mystery about who performed the action, or shifts focus to the victim.`,
    },
    {
      id: 'lt-46',
      front: 'Euphemism',
      back: `A mild or indirect expression used instead of a harsh or blunt one.\n\nExample: "He passed away" instead of "He died."\n\nEffect: Softens impact, shows sensitivity, or conceals reality.`,
    },
    {
      id: 'lt-47',
      front: 'Antithesis',
      back: `A contrast of ideas using parallel structure.\n\nExample: "It was the best of times, it was the worst of times." (Dickens)\n\nEffect: Highlights opposition and creates a balanced, memorable rhythm.`,
    },
    {
      id: 'lt-48',
      front: 'Colloquial Language',
      back: `Informal, everyday language (slang, dialect, casual phrasing).\n\nExample: "He was well gutted about it."\n\nEffect: Creates a realistic, relatable voice. Can show social class or region.`,
    },
    {
      id: 'lt-49',
      front: 'Zoomorphism',
      back: `Describing a human using animal qualities.\n\nExample: "He prowled the corridors, eyes sharp, jaw set."\n\nEffect: Can suggest predatory behaviour, instinct, or loss of humanity.`,
    },
    {
      id: 'lt-50',
      front: 'Cyclical Structure',
      back: `When a text ends where it began, returning to the opening image or idea.\n\nEffect: Creates a sense of completion, inevitability, or entrapment. Suggests nothing has changed - or that everything has.`,
    },
  ],
}

export default deck
