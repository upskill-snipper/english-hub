// @ts-nocheck
import { poetryFlashcardDecks } from './flashcard-poetry'
import { setTextFlashcardDecks } from './flashcard-set-texts'
import { vocabularyDecks } from './flashcard-vocabulary'
import { examTechniqueDecks } from './flashcard-exam-technique'
import { khaleejiVocabDecks } from './flashcard-khaleeji-decks'

export interface FlashCard {
  id: string
  front: string
  back: string
  /**
   * Optional Khaleeji-Arabic (gulf-dialect) translation of the definition/back side.
   * When absent, UI should gracefully fall back to the English `back` field.
   * `term` (`front`) is kept in English by design — only the explanation is translated.
   */
  backAr?: string
  /**
   * Optional Khaleeji-Arabic transliteration / equivalent for the front.
   * For literary technique decks this is typically the Latin/transliterated form
   * (e.g. "metaphor" → "ميتافور").
   */
  frontAr?: string
}

export interface FlashcardDeck {
  id: string
  title: string
  description: string
  category: string
  board: string
  cards: FlashCard[]
}

export const flashcardDecks: FlashcardDeck[] = [
  {
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
        back: `The narrator knows everything — all characters\' thoughts and feelings.\n\nEffect: Gives the reader a god-like perspective. Can create dramatic irony.`,
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
        back: `When a text ends where it began, returning to the opening image or idea.\n\nEffect: Creates a sense of completion, inevitability, or entrapment. Suggests nothing has changed — or that everything has.`,
      },
    ],
  },
  {
    id: 'grammar-terms',
    title: 'Grammar Terms',
    description: '30 essential grammar terms',
    category: 'Grammar',
    board: 'All',
    cards: [
      {
        id: 'gt-1',
        front: 'Noun',
        back: `A word that names a person, place, thing, or idea.\n\nTypes: Proper (London), Common (city), Abstract (love), Collective (flock).`,
      },
      {
        id: 'gt-2',
        front: 'Verb',
        back: `A word that describes an action, state, or occurrence.\n\nTypes: Dynamic (run), Stative (believe), Modal (can, should), Auxiliary (is, have).`,
      },
      {
        id: 'gt-3',
        front: 'Adjective',
        back: `A word that describes a noun.\n\nExample: "The tall, dark stranger."\n\nComparative: taller. Superlative: tallest.`,
      },
      {
        id: 'gt-4',
        front: 'Adverb',
        back: `A word that modifies a verb, adjective, or another adverb.\n\nExample: "She ran quickly." "It was extremely cold."\n\nNot all end in -ly: very, well, fast, never.`,
      },
      {
        id: 'gt-5',
        front: 'Pronoun',
        back: `A word that replaces a noun.\n\nTypes: Personal (I, he, she), Possessive (my, his), Relative (who, which), Demonstrative (this, that).`,
      },
      {
        id: 'gt-6',
        front: 'Preposition',
        back: `A word that shows the relationship between a noun and another word.\n\nExamples: in, on, at, under, between, through, during.`,
      },
      {
        id: 'gt-7',
        front: 'Conjunction',
        back: `A word that joins clauses or sentences.\n\nCoordinating: and, but, or, so (FANBOYS)\nSubordinating: because, although, when, if, while.`,
      },
      {
        id: 'gt-8',
        front: 'Determiner',
        back: `A word that comes before a noun to identify it.\n\nArticles: a, an, the\nDemonstratives: this, that, these, those\nPossessives: my, your, their.`,
      },
      {
        id: 'gt-9',
        front: 'Simple Sentence',
        back: `One main clause with a subject and verb.\n\nExample: "The dog barked."\n\nEffect: Clear, direct, punchy. Good for impact.`,
      },
      {
        id: 'gt-10',
        front: 'Compound Sentence',
        back: `Two main clauses joined by a coordinating conjunction (and, but, or, so).\n\nExample: "The sun rose and the birds began to sing."`,
      },
      {
        id: 'gt-11',
        front: 'Complex Sentence',
        back: `A main clause + one or more subordinate clauses.\n\nExample: "Although it was raining, they went outside."\n\nThe subordinate clause cannot stand alone.`,
      },
      {
        id: 'gt-12',
        front: 'Main Clause',
        back: `A clause that can stand alone as a complete sentence.\n\nExample: "She laughed." (This makes sense on its own.)`,
      },
      {
        id: 'gt-13',
        front: 'Subordinate Clause',
        back: `A clause that adds information but cannot stand alone.\n\nExample: "...because she was happy" — needs a main clause.\n\nOften starts with: because, although, when, if, while, who, which.`,
      },
      {
        id: 'gt-14',
        front: 'Relative Clause',
        back: `A subordinate clause starting with who, which, that, where, whose.\n\nExample: "The teacher, who was new, smiled nervously."\n\nAdds extra information about a noun.`,
      },
      {
        id: 'gt-15',
        front: 'Active Voice',
        back: `The subject performs the action.\n\nExample: "The cat chased the mouse."\n\nEffect: Direct, clear, dynamic.`,
      },
      {
        id: 'gt-16',
        front: 'Subject',
        back: `The person or thing performing the action in a sentence.\n\nExample: "The girl ran home." (The girl = subject).`,
      },
      {
        id: 'gt-17',
        front: 'Object',
        back: `The person or thing receiving the action.\n\nExample: "She kicked the ball." (the ball = object)\n\nDirect object: receives the action. Indirect object: benefits from it.`,
      },
      {
        id: 'gt-18',
        front: 'Tense',
        back: `When an action takes place.\n\nPast: "She walked." Present: "She walks." Future: "She will walk."\n\nPerfect: "She had walked." Progressive: "She was walking."`,
      },
      {
        id: 'gt-19',
        front: 'Apostrophe (Punctuation)',
        back: `Used for:\n1. Possession: "the dog\'s bone" / "the dogs\' bones"\n2. Contraction: "don\'t" = "do not"\n\nNEVER for plurals: "apple\'s" is wrong.`,
      },
      {
        id: 'gt-20',
        front: 'Semicolon',
        back: `Joins two closely related main clauses without a conjunction.\n\nExample: "The rain stopped; the sun came out."\n\nBoth sides must be complete sentences.`,
      },
      {
        id: 'gt-21',
        front: 'Colon',
        back: `Introduces a list, explanation, or elaboration.\n\nExample: "She had one goal: survival."\n\nThe part before the colon must be a complete sentence.`,
      },
      {
        id: 'gt-22',
        front: 'Parenthesis',
        back: `Extra information inserted into a sentence using brackets, dashes, or commas.\n\nExample: "My brother — the tall one — is a doctor."\n\nThe sentence should still make sense without it.`,
      },
      {
        id: 'gt-23',
        front: 'Ellipsis',
        back: `Three dots (...) used to show:\n1. Something has been left out\n2. A trailing off of speech\n3. Suspense or hesitation\n\nExample: "She opened the door and saw..."`,
      },
      {
        id: 'gt-24',
        front: 'Clause',
        back: `A group of words containing a subject and a verb.\n\nMain clause: can stand alone. Subordinate clause: cannot.\n\nEvery sentence has at least one clause.`,
      },
      {
        id: 'gt-25',
        front: 'Phrase',
        back: `A group of words that does NOT contain both a subject and a verb.\n\nExamples: "in the garden" (prepositional phrase), "the old house" (noun phrase).`,
      },
      {
        id: 'gt-26',
        front: 'Noun Phrase',
        back: `A group of words built around a noun.\n\nExample: "the extremely heavy, leather-bound book"\n\nUsing expanded noun phrases adds detail and sophistication to writing.`,
      },
      {
        id: 'gt-27',
        front: 'Modal Verb',
        back: `A verb that expresses possibility, necessity, or permission.\n\nExamples: can, could, may, might, will, would, shall, should, must.\n\nEffect: "You must leave" is more forceful than "You should leave."`,
      },
      {
        id: 'gt-28',
        front: 'Infinitive',
        back: `The base form of a verb, usually with "to."\n\nExample: "to run," "to be," "to think."\n\nSplit infinitive: "to boldly go" (adverb between "to" and verb).`,
      },
      {
        id: 'gt-29',
        front: 'Participle',
        back: `A verb form used as an adjective or to form tenses.\n\nPresent: running, singing (-ing)\nPast: broken, forgotten (-ed/-en)\n\nExample: "The broken vase lay on the floor."`,
      },
      {
        id: 'gt-30',
        front: 'Standard English',
        back: `The formal, grammatically "correct" form of English used in education, business, and formal writing.\n\nNon-standard: "We was going" → Standard: "We were going."\n\nExpected in exam writing but characters may use non-standard English for realism.`,
      },
      {
        id: 'gt-31',
        front: 'Gerund',
        back: `A noun form of a verb, ending in -ing.\n\nExample: "Running is good exercise." (Running = gerund, the subject)\n\nDifference from participle: gerunds function as nouns; participles function as adjectives or verbs.`,
      },
      {
        id: 'gt-32',
        front: 'Transitive Verb',
        back: `A verb that requires a direct object.\n\nExample: "He ate an apple." (ate = transitive, apple = object)\n\nWithout an object, the sentence is incomplete.`,
      },
      {
        id: 'gt-33',
        front: 'Intransitive Verb',
        back: `A verb that does not require a direct object.\n\nExample: "She smiled." (smiled = intransitive)\n\nAdds its own meaning without needing an object.`,
      },
      {
        id: 'gt-34',
        front: 'Linking Verb',
        back: `A verb that connects the subject to a description of itself.\n\nExamples: be, appear, seem, become, feel, smell, sound, taste.\n\nExample: "She seems happy." (happy describes she)`,
      },
      {
        id: 'gt-35',
        front: 'Collective Noun',
        back: `A noun referring to a group as a single unit.\n\nExamples: team, flock, herd, crew, family, audience.\n\n"The team is playing well" (singular) or "The team are playing well" (plural) — both correct depending on context.`,
      },
      {
        id: 'gt-36',
        front: 'Abstract Noun',
        back: `A noun representing an idea, quality, or state that cannot be perceived by the senses.\n\nExamples: love, fear, justice, beauty, freedom, courage.\n\nContrast with concrete nouns: book, table, dog.`,
      },
      {
        id: 'gt-37',
        front: 'Concrete Noun',
        back: `A noun referring to something tangible that can be perceived by the senses.\n\nExamples: book, table, rain, music (can be heard), flower.\n\nContrast with abstract nouns: love, justice.`,
      },
      {
        id: 'gt-38',
        front: 'Countable Noun',
        back: `A noun that can be counted and has both singular and plural forms.\n\nExamples: cat/cats, book/books, idea/ideas.\n\nUse "a/an" with singular; "many" or "several" with plural.`,
      },
      {
        id: 'gt-39',
        front: 'Uncountable Noun',
        back: `A noun that cannot be counted and typically has no plural form.\n\nExamples: water, furniture, information, advice, luggage.\n\nUse "some" rather than "many"; "a piece of furniture" not "a furniture."`,
      },
      {
        id: 'gt-40',
        front: 'Comparative Adjective',
        back: `Compares two things, usually ending in -er.\n\nExample: "This book is longer than that one."\n\nWith longer adjectives: "more beautiful," not "beautifuller."`,
      },
      {
        id: 'gt-41',
        front: 'Superlative Adjective',
        back: `Describes the extreme of a quality, usually ending in -est.\n\nExample: "This is the longest book I have read."\n\nWith longer adjectives: "most beautiful," not "beautifulest."`,
      },
      {
        id: 'gt-42',
        front: 'Demonstrative Pronoun',
        back: `Points to something specific.\n\nExamples: this, that, these, those.\n\n"This is beautiful" (this = pronoun)\n"This book is beautiful" (this = determiner)`,
      },
      {
        id: 'gt-43',
        front: 'Reflexive Pronoun',
        back: `Shows an action done to oneself, ending in -self or -selves.\n\nExamples: myself, yourself, himself, herself, themselves.\n\nExample: "She dressed herself." Emphasises the subject doing the action.`,
      },
      {
        id: 'gt-44',
        front: 'Reciprocal Pronoun',
        back: `Shows a mutual action between two or more people.\n\nExamples: each other, one another.\n\nExample: "They helped each other."`,
      },
      {
        id: 'gt-45',
        front: 'Indefinite Pronoun',
        back: `Refers to a person or thing without being specific.\n\nExamples: someone, anybody, everyone, no one, something.\n\nExample: "Someone left their umbrella."`,
      },
      {
        id: 'gt-46',
        front: 'Interrogative Pronoun',
        back: `Used to ask questions.\n\nExamples: who, whom, whose, what, which.\n\nExample: "What is that?"`,
      },
      {
        id: 'gt-47',
        front: 'Relative Adverb',
        back: `Introduces a relative clause and shows a relationship.\n\nExamples: where, when, why.\n\nExample: "This is the house where I grew up." (where = relative adverb introducing the relative clause)`,
      },
      {
        id: 'gt-48',
        front: 'Coordinating Conjunction',
        back: `Joins words, phrases, or clauses of equal importance. (FANBOYS)\n\nFor, And, Nor, But, Or, Yet, So.\n\nExample: "I wanted to go, but it was raining."`,
      },
      {
        id: 'gt-49',
        front: 'Subordinating Conjunction',
        back: `Joins a main clause to a subordinate clause, showing a relationship.\n\nExamples: because, although, if, when, since, while.\n\nExample: "Although it was raining, they went outside."`,
      },
      {
        id: 'gt-50',
        front: 'Correlative Conjunction',
        back: `Works in pairs to join words or phrases.\n\nExamples: both...and, either...or, neither...nor, not only...but also.\n\nExample: "Both the student and the teacher agreed."`,
      },
      {
        id: 'gt-51',
        front: 'Adverbial Phrase',
        back: `A group of words functioning as an adverb.\n\nExample: "He ran as fast as he could." (as fast as he could = adverbial phrase modifying "ran")`,
      },
      {
        id: 'gt-52',
        front: 'Prepositional Phrase',
        back: `A preposition + object of the preposition.\n\nExample: "in the garden" (in = preposition, the garden = object)\n\nFunctions as an adjective or adverb in a sentence.`,
      },
      {
        id: 'gt-53',
        front: 'Past Progressive Tense',
        back: `Describes an ongoing action in the past.\n\nForm: was/were + -ing.\n\nExample: "She was reading when the phone rang." (was reading = past progressive)`,
      },
      {
        id: 'gt-54',
        front: 'Present Perfect Tense',
        back: `Describes an action in the past with a connection to the present.\n\nForm: have/has + past participle.\n\nExample: "I have lived here for five years." (have lived = present perfect)`,
      },
      {
        id: 'gt-55',
        front: 'Past Perfect Tense',
        back: `Shows which of two past actions happened first.\n\nForm: had + past participle.\n\nExample: "By the time she arrived, he had already left."`,
      },
      {
        id: 'gt-56',
        front: 'Future Perfect Tense',
        back: `Shows an action that will be completed before a specific future time.\n\nForm: will have + past participle.\n\nExample: "By next year, I will have finished my degree."`,
      },
      {
        id: 'gt-57',
        front: 'Conditional Clause',
        back: `An if-clause that sets a condition for something happening.\n\nExamples:\n• Zero: "If you heat water to 100°C, it boils."\n• First: "If you study hard, you will pass."\n• Second: "If I had money, I would travel."\n• Third: "If I had studied, I would have passed."`,
      },
      {
        id: 'gt-58',
        front: 'Agreement (Concord)',
        back: `Grammatical consistency between related words.\n\nSubject-verb agreement: "She runs" (not "She run")\nPronoun-antecedent: "The student finished his work" (his matches student).\n\nErrors: "The team are" (British) vs "The team is" (American) — both correct depending on dialect.`,
      },
      {
        id: 'gt-59',
        front: 'Ambiguous Pronoun',
        back: `A pronoun with an unclear antecedent — it is not clear what the pronoun refers to.\n\nExample: "Sarah told Jennifer that she was brilliant." (Who is "she"? Sarah or Jennifer?)\n\nUsually considered a grammatical error. Clarify by using the person\'s name.`,
      },
      {
        id: 'gt-60',
        front: 'Dangling Modifier',
        back: `A modifying word or phrase that doesn\'t clearly relate to what it modifies.\n\nIncorrect: "Running through the park, the dog chased a squirrel." (Seems like the dog was running through the park intentionally.)\nCorrect: "Running through the park, I saw a dog chasing a squirrel."`,
      },
      {
        id: 'gt-61',
        front: 'Misplaced Modifier',
        back: `A modifier placed in the wrong position, causing confusion.\n\nMisplaced: "I almost drove the whole distance without stopping." (Almost I drove? Or almost the whole distance?)\nClear: "I drove almost the whole distance without stopping."`,
      },
      {
        id: 'gt-62',
        front: 'Fragment',
        back: `An incomplete sentence — lacks a subject or verb (or both).\n\nExample: "Running through the rain." (No main verb)\nShould be: "Running through the rain, he reached home."`,
      },
      {
        id: 'gt-63',
        front: 'Run-on Sentence',
        back: `Two or more independent clauses joined without proper punctuation or conjunction.\n\nIncorrect: "The rain stopped the sun came out."\nCorrect: "The rain stopped; the sun came out." or "The rain stopped, and the sun came out."`,
      },
      {
        id: 'gt-64',
        front: 'Comma Splice',
        back: `Two independent clauses joined only by a comma (without a coordinating conjunction).\n\nIncorrect: "The weather was cold, we stayed inside."\nCorrect: "The weather was cold, so we stayed inside." or "The weather was cold; we stayed inside."`,
      },
      {
        id: 'gt-65',
        front: 'Conditional Sentence Type Zero',
        back: `States a general truth or scientific fact.\n\nForm: If + present tense, + present tense (imperative).\n\nExample: "If you heat water to 100°C, it boils."\n\nThe condition and result are both always true.`,
      },
      {
        id: 'gt-66',
        front: 'Conditional Sentence Type One',
        back: `Describes a likely future scenario.\n\nForm: If + present tense, + will + base verb.\n\nExample: "If you study hard, you will pass the exam."\n\nThis is realistic and possibly true.`,
      },
      {
        id: 'gt-67',
        front: 'Conditional Sentence Type Two',
        back: `Describes an unlikely or hypothetical present situation.\n\nForm: If + past tense, + would/could + base verb.\n\nExample: "If I had money, I would travel the world."\n\nImplies the condition does not actually exist.`,
      },
      {
        id: 'gt-68',
        front: 'Conditional Sentence Type Three',
        back: `Describes an impossible past situation (cannot be changed).\n\nForm: If + past perfect, + would/could have + past participle.\n\nExample: "If I had studied harder, I would have passed."\n\nExpresses regret about the past.`,
      },
    ],
  },
  {
    id: 'advanced-writing-techniques',
    title: 'Advanced Writing Techniques — 60 Cards',
    description:
      'Sophisticated techniques for GCSE English Language creative and persuasive writing',
    category: 'Writing Techniques',
    board: 'All',
    cards: [
      {
        id: 'awt-1',
        front: 'Anaphora in Creative Writing',
        back: `Technique: Repeating a word or phrase at the start of successive sentences or clauses.\n\nEffect in creative writing: Creates rhythm, emphasis, and a building emotional intensity.\n\nExample: "The rain fell. The rain pooled. The rain consumed everything."\n\nWhen to use: For emphasis, to create a chant-like effect, to convey obsession or mounting emotion. Effective in poetry and descriptive prose.`,
      },
      {
        id: 'awt-2',
        front: 'Epistrophe in Creative Writing',
        back: `Technique: Repeating a word or phrase at the END of successive clauses.\n\nEffect: Creates circularity and emphasis. Makes ideas stick in the reader\'s mind.\n\nExample: "She wanted freedom. Freedom was her dream. Freedom was her life."\n\nWhen to use: To emphasise a key concept, to create a haunting or obsessive tone.`,
      },
      {
        id: 'awt-3',
        front: 'Chiasmus in Persuasive Writing',
        back: `Technique: Reversing grammatical structures for emphasis (A-B-B-A pattern).\n\nEffect: Creates balance, paradox, and memorable phrasing. Often used in persuasive speeches.\n\nExample: "Ask not what your country can do for you; ask what you can do for your country." (JFK)\n\nWhen to use: In persuasive writing to make a point unforgettable. Creates philosophical weight.`,
      },
      {
        id: 'awt-4',
        front: 'Antimetabole',
        back: `Technique: A form of chiasmus using the same words in reversed order.\n\nEffect: Creates a clever reversal that highlights contradiction or paradox.\n\nExample: "When the going gets tough, the tough get going."\n\nWhen to use: In persuasive writing for clever turnarounds. Makes slogans and mottos memorable.`,
      },
      {
        id: 'awt-5',
        front: 'Zeugma',
        back: `Technique: Using one word in two different senses, or applying a word to two parts of a sentence in different ways.\n\nEffect: Creates wit and unexpected connections. Can be comic or profound.\n\nExample: "She lost her heart and her car keys." (heart = love; car keys = literal object)\n\nWhen to use: For humour or clever word play. More common in persuasive writing.`,
      },
      {
        id: 'awt-6',
        front: 'Malapropism',
        back: `Technique: Mistakenly using a word similar in sound to the intended word, but with a completely different meaning.\n\nEffect: Creates comedy and reveals character. Shows education level or ignorance.\n\nExample: "Texas has a lot of electrical votes." (electoral vs electrical)\n\nWhen to use: To create humorous character voice, to reveal a character\'s limited education or pretension.`,
      },
      {
        id: 'awt-7',
        front: 'Pun (in creative writing)',
        back: `Technique: A play on words exploiting multiple meanings.\n\nEffect: Creates humour, wordplay, and cleverness. Can be witty or groan-worthy.\n\nExample: "Time flies like an arrow. Fruit flies like a banana."\n\nWhen to use: For light-hearted tone, character voice, or to add personality. Overuse can feel forced.`,
      },
      {
        id: 'awt-8',
        front: 'Allusion (in creative writing)',
        back: `Technique: Indirect reference to another text, person, or historical event.\n\nEffect: Adds layers of meaning. Assumes reader knowledge and creates connection.\n\nExample: "He was her Achilles heel." (reference to Achilles\'s vulnerability)\n\nWhen to use: To add sophistication and depth. Assumes reader familiarity with the reference.`,
      },
      {
        id: 'awt-9',
        front: 'Innuendo',
        back: `Technique: Hinting at something without stating it directly. Often negative or suggestive.\n\nEffect: Creates tension, mystery, or humorous double meaning.\n\nExample: "I\'m sure he\'s a talented musician... in his bedroom." (suggestive of amateur)\n\nWhen to use: For subtle criticism, humour, or to create tension. Requires reader to read between lines.`,
      },
      {
        id: 'awt-10',
        front: 'Irony in Persuasive Writing',
        back: `Three types:\n1. Verbal: saying the opposite of what you mean ("Oh, great, another Monday.")\n2. Situational: when reality contradicts expectations (fire station burns)\n3. Dramatic: audience knows something characters don\'t\n\nEffect in persuasion: Creates wit and highlights contradiction or hypocrisy. Makes reader engage actively.`,
      },
      {
        id: 'awt-11',
        front: 'Sarcasm',
        back: `Technique: A form of verbal irony that uses cutting humour to mock or criticise.\n\nEffect: Sharp, often mean-spirited wit. Can alienate or amuse readers.\n\nExample: "Oh sure, let\'s just cut the budget for schools. What could go wrong?"\n\nWhen to use: In persuasive writing to criticise an opposing view. Risk: Can seem mean-spirited.`,
      },
      {
        id: 'awt-12',
        front: 'Colloquialism',
        back: `Technique: Using informal, conversational language or slang.\n\nEffect: Makes writing feel natural, authentic, and relatable. Creates character voice.\n\nExample: "I\'m gonna grab some brekkie before work." (gonna, brekkie)\n\nWhen to use: In character dialogue, first-person narratives, or persuasive writing aimed at younger audiences.`,
      },
      {
        id: 'awt-13',
        front: 'Register Shift (Tonal Variation)',
        back: `Technique: Deliberately changing the formality level (register) of language.\n\nEffect: Creates contrast, humour, or impact. Shows range and sophistication.\n\nExample: "In the context of contemporary fiscal policy, we are, frankly, totally broke." (formal then slang)\n\nWhen to use: To create comedic or dramatic effect. To mirror a character\'s emotional state or intelligence level.`,
      },
      {
        id: 'awt-14',
        front: 'Antithesis in Persuasive Writing',
        back: `Technique: Placing contrasting ideas side by side.\n\nEffect: Highlights differences and creates balance. Makes the contrast unforgettable.\n\nExample: "It was the best of times, it was the worst of times."\n\nWhen to use: In persuasive writing to emphasise opposing viewpoints and then refute one. Creates philosophical weight.`,
      },
      {
        id: 'awt-15',
        front: 'Asyndetic Structure',
        back: `Technique: Omitting conjunctions (and, or, but) between items in a list.\n\nEffect: Creates pace, urgency, and an overwhelming sense of accumulation.\n\nExample: "He ran, stumbled, fell, lay still."\n\nWhen to use: In creative writing for fast-paced scenes. In persuasive writing for impactful lists.`,
      },
      {
        id: 'awt-16',
        front: 'Syndetic Structure',
        back: `Technique: Including conjunctions between every item in a list.\n\nEffect: Slows pace, makes the list feel endless or childlike, emphasises each item.\n\nExample: "She packed her bag and her books and her lunch and her coat."\n\nWhen to use: To suggest monotony, childlike voice, or when each item deserves emphasis.`,
      },
      {
        id: 'awt-17',
        front: 'Accretion (Cumulative Style)',
        back: `Technique: Building a sentence or description through the addition of details.\n\nEffect: Creates immersion and sensory richness. Reader feels surrounded by detail.\n\nExample: "The house, old and creaking, with broken shutters and peeling paint, stood abandoned."\n\nWhen to use: In descriptive writing to create atmosphere. Each detail adds layers.`,
      },
      {
        id: 'awt-18',
        front: 'Parallelism',
        back: `Technique: Using matching grammatical structures for similar ideas.\n\nEffect: Creates balance, rhythm, and makes ideas memorable.\n\nExample: "She came to praise, not to criticise. She came to build, not to destroy."\n\nWhen to use: In persuasive writing for emphasis. In all writing for elegance and clarity.`,
      },
      {
        id: 'awt-19',
        front: 'Antonym Juxtaposition',
        back: `Technique: Placing words with opposite meanings next to each other.\n\nEffect: Highlights contradiction and creates impact.\n\nExample: "wise fool," "bittersweet," "deafening silence."\n\nWhen to use: To convey complexity or paradox. Creates philosophical or emotional depth.`,
      },
      {
        id: 'awt-20',
        front: 'Bathos',
        back: `Technique: Dropping from the serious or elevated to the trivial or absurd.\n\nEffect: Creates humour or shows the ridiculous contrast between expectation and reality.\n\nExample: "He survived the war, the crash, and the surgery. But he couldn\'t survive his mother-in-law."\n\nWhen to use: For comedic effect. Can undermine seriousness if unintentional.`,
      },
      {
        id: 'awt-21',
        front: 'Metonymy',
        back: `Technique: Substituting the name of something with something closely associated with it.\n\nEffect: Creates sophisticated language and indirect reference.\n\nExample: "The White House announced..." (White House = the President and advisors)\n\nWhen to use: In persuasive and formal writing. Shows linguistic sophistication.`,
      },
      {
        id: 'awt-22',
        front: 'Synecdoche',
        back: `Technique: A part represents the whole, or the whole represents a part.\n\nEffect: Creates concise, evocative language.\n\nExample: "All hands on deck!" (hands = sailors/people)\n"Hollywood is obsessed with remakes." (Hollywood = the film industry)\n\nWhen to use: For concise, vivid language. More common in poetry but effective in prose.`,
      },
      {
        id: 'awt-23',
        front: 'Hendiadys',
        back: `Technique: Expressing a single idea using two words joined by "and" instead of using one word modified by an adjective.\n\nEffect: Creates emphasis and rhythmic quality.\n\nExample: "nice and warm" instead of "warmly nice"\n"tired and emotional" instead of "emotionally tired"\n\nWhen to use: In conversational or colloquial writing. Adds colloquial flavour.`,
      },
      {
        id: 'awt-24',
        front: 'Litotes (Understatement)',
        back: `Technique: Expressing something as an affirmative by denying its opposite.\n\nEffect: Creates irony, wit, and often humour.\n\nExample: "That\'s not bad!" (meaning it\'s good) "She\'s no dummy." (meaning she\'s smart)\n\nWhen to use: For British humour. Creates sophisticated understatement.`,
      },
      {
        id: 'awt-25',
        front: 'Hyperbole in Persuasive Writing',
        back: `Technique: Extreme exaggeration.\n\nEffect: Emphasises a point, creates humour, conveys strong emotion.\n\nExample: "I\'ve told you a million times!" or "This is the worst day of my entire life!"\n\nWhen to use: In persuasive writing to emphasise impact. In character dialogue to show personality.`,
      },
      {
        id: 'awt-26',
        front: 'Rhetorical Question in Persuasion',
        back: `Technique: Asking a question where the answer is obvious or implied.\n\nEffect: Engages reader, makes them think, implies the answer without stating it.\n\nExample: "Why should we accept a world of inequality?" (Implies: we shouldn\'t.)\n\nWhen to use: In persuasive writing to move reader to action or agreement. Very effective opening.`,
      },
      {
        id: 'awt-27',
        front: 'Exclamatory Sentences for Emphasis',
        back: `Technique: Using sentences with "!" instead of periods.\n\nEffect: Conveys excitement, anger, passion, or urgency.\n\nExample: "This is outrageous! We must act now!"\n\nWhen to use: In persuasive writing sparingly for impact. Overuse loses power. In character voice for emotion.`,
      },
      {
        id: 'awt-28',
        front: 'Fragment (Minor Sentence) for Effect',
        back: `Technique: Using an incomplete sentence deliberately, NOT as an error.\n\nEffect: Creates impact, emphasis, or mirrors disrupted thought.\n\nExample: "Silence. Nothing but silence."\n\nWhen to use: In creative writing for dramatic effect. Signal clearly it is intentional, not careless.`,
      },
      {
        id: 'awt-29',
        front: 'Imperative Sentences in Persuasion',
        back: `Technique: Direct commands addressing the reader.\n\nEffect: Creates urgency, directness, and a sense of action.\n\nExample: "Don\'t stand by. Act now. Change the world."\n\nWhen to use: In persuasive writing to mobilise reader action. Can be powerful but feels bossy if overused.`,
      },
      {
        id: 'awt-30',
        front: 'Direct Address',
        back: `Technique: Speaking directly to the reader using "you."\n\nEffect: Creates personal connection and makes argument inescapable.\n\nExample: "You know this is wrong. You feel the injustice. You can change it."\n\nWhen to use: In persuasive writing for emotional engagement. Creates intimacy.`,
      },
      {
        id: 'awt-31',
        front: 'Foreshadowing',
        back: `Technique: Hinting at future events without revealing them.\n\nEffect: Creates tension, suspense, and a sense of inevitability.\n\nExample: "Little did she know, this decision would change everything."\n\nWhen to use: In creative/narrative writing to build tension and anticipation.`,
      },
      {
        id: 'awt-32',
        front: 'Flashback',
        back: `Technique: Interrupting the present narrative to show past events.\n\nEffect: Provides context, explains character motivation, creates structure.\n\nExample: "As he drove past the old house, memories flooded back to his childhood..."\n\nWhen to use: In narrative writing to reveal character backstory or explain present circumstances.`,
      },
      {
        id: 'awt-33',
        front: 'Pacing: Short Sentences',
        back: `Effect: Creates urgency, tension, impact. Makes the reader quicken pace mentally.\n\nWhen to use: In action scenes, moments of crisis, or to emphasise important points.\n\nExample: "He ran. His heart pounded. The door slammed. He was trapped."\n\nCombination: Vary with longer sentences for balance.`,
      },
      {
        id: 'awt-34',
        front: 'Pacing: Long Sentences',
        back: `Effect: Creates complexity, reflection, or overwhelm. Slows the reader down.\n\nWhen to use: In descriptive passages, introspective moments, or to convey exhaustion.\n\nExample: "The endless, winding path, bordered by ancient trees whose branches hung heavy with moss and shadow, seemed to lead nowhere at all."\n\nCombination: Vary with short sentences for contrast.`,
      },
      {
        id: 'awt-35',
        front: 'White Space (Paragraph Breaks)',
        back: `Effect: Creates emphasis, pause, or isolation. Gives the reader a moment to absorb.\n\nWhen to use: Before an important revelation, after an emotional moment, or for dramatic effect.\n\nExample: Breaking a paragraph into a single sentence, then a blank line, creates maximum impact.`,
      },
      {
        id: 'awt-36',
        front: 'Repetition for Emphasis',
        back: `Effect: Hammers home a point, creates rhythm, builds intensity.\n\nWhen to use: In persuasive writing, poetry, or when a concept must be remembered.\n\nExample: "No. Never. Not now. Not ever."\n\nRisk: Overuse feels tedious. Less is more.`,
      },
      {
        id: 'awt-37',
        front: 'Variation for Contrast',
        back: `Effect: Disrupting an established pattern creates surprise and emphasis.\n\nWhen to use: After establishing a rhythm, break it deliberately for impact.\n\nExample: "He walked. He talked. He smiled. Then he vanished."\n\nThe final short, different sentence stands out.`,
      },
      {
        id: 'awt-38',
        front: 'Sensory Language: Sight',
        back: `Effect: Creates visual imagery and atmosphere.\n\nWhen to use: In descriptive writing to help reader "see" the scene.\n\nExample: "The crimson sunset bled across the sky, casting long shadows that swallowed the world."\n\nVary colours and visual descriptors for richness.`,
      },
      {
        id: 'awt-39',
        front: 'Sensory Language: Sound',
        back: `Effect: Creates audio atmosphere and mood.\n\nWhen to use: To immerse reader in auditory environment.\n\nExample: "The deafening silence was broken only by the rhythmic ticking of the clock."\n\nCombine with sound devices (alliteration, onomatopoeia) for musicality.`,
      },
      {
        id: 'awt-40',
        front: 'Sensory Language: Touch',
        back: `Effect: Creates physical, tactile connection.\n\nWhen to use: When proximity and physicality matter.\n\nExample: "The rough bark scratched her palms as she gripped the tree."\n\nTemperature, texture, pain, pressure all engage the tactile sense.`,
      },
      {
        id: 'awt-41',
        front: 'Sensory Language: Taste',
        back: `Effect: Creates visceral, intimate sensation.\n\nWhen to use: When describing food, poison, or metaphorically (bitter experience, sweet victory).\n\nExample: "The bitterness of disappointment lingered on his tongue."\n\nOften used metaphorically for emotions.`,
      },
      {
        id: 'awt-42',
        front: 'Sensory Language: Smell',
        back: `Effect: Powerful emotional trigger. Smell activates memory.\n\nWhen to use: To connect character to environment or to trigger nostalgia.\n\nExample: "The sweet, earthy smell of rain transported her back to childhood."\n\nSmell is underused but powerfully evocative.`,
      },
      {
        id: 'awt-43',
        front: 'Dialogue: Dialogue Tags',
        back: `Technique: The words that identify the speaker ("he said," "she whispered").\n\nOptions:\n• Neutral: said, asked\n• Emotional: whispered, shouted, snapped, murmured\n• Physical: laughed, gasped, sighed\n\nWhen to use: Vary tags to show emotion without stating it. "said" is invisible; emotional tags add characterisation.`,
      },
      {
        id: 'awt-44',
        front: 'Dialogue: Interior Monologue',
        back: `Technique: A character\'s unspoken thoughts, shown as if the reader is inside their mind.\n\nEffect: Creates intimacy and reveals character\'s true feelings versus what they say.\n\nExample: "You\'re right," she said. But she thought: You\'re completely wrong, and I despise you.\n\nWhen to use: To show the gap between truth and performance. Creates dramatic irony.`,
      },
      {
        id: 'awt-45',
        front: 'Dialogue: Silence',
        back: `Technique: What is NOT said is sometimes more powerful than what is.\n\nEffect: Creates tension and suggests unspoken emotion.\n\nExample: "Are you leaving?" She didn\'t answer.\n\nWhen to use: To convey hurt, defiance, or overwhelming emotion that words can\'t capture.`,
      },
      {
        id: 'awt-46',
        front: 'Form Variation: Stream of Consciousness',
        back: `Technique: Representing the character\'s thoughts in a chaotic, unstructured flow.\n\nEffect: Immerses reader in character\'s mental state. Can feel disordered or authentic.\n\nExample: Interior monologues without punctuation or logical order.\n\nWhen to use: To show mental breakdown, altered states, or deep introspection.`,
      },
      {
        id: 'awt-47',
        front: 'Form Variation: Letters/Diary',
        back: `Technique: Presenting narrative as letter or diary entries.\n\nEffect: Creates intimacy and first-person authenticity.\n\nExample: "Dear diary, today was the worst..." or "My dear,"\n\nWhen to use: To create epistolary fiction. Adds variety to narrative structure.`,
      },
      {
        id: 'awt-48',
        front: 'Form Variation: Second Person',
        back: `Technique: Narrating using "you" as if addressing the reader directly.\n\nEffect: Makes reader complicit in the story. Creates immediacy.\n\nExample: "You wake up. You don\'t remember how you got here."\n\nWhen to use: Sparingly for shock value or to implicate reader in a decision.`,
      },
      {
        id: 'awt-49',
        front: 'Symbolism in Creative Writing',
        back: `Technique: An object, colour, or action representing a deeper meaning.\n\nEffect: Adds layers and allows interpretation beyond the literal.\n\nExample: A broken mirror = shattered identity, fractured relationships.\n\nWhen to use: Consistently throughout narrative so symbol is recognised.`,
      },
      {
        id: 'awt-50',
        front: 'Motif in Creative Writing',
        back: `Technique: A recurring image, phrase, or concept throughout the text.\n\nEffect: Reinforces theme and creates structural cohesion.\n\nExample: Repeated references to rain could symbolise cleansing or sadness.\n\nWhen to use: Plant early, develop throughout, resolve or subvert at end.`,
      },
      {
        id: 'awt-51',
        front: 'Tone: Nostalgic',
        back: `Effect: Reader feels wistful longing for the past.\n\nLanguage markers: "remember," "those days," references to "better times," idealised past.\n\nWhen to use: In reflective narrative or when a character longs for what was.\n\nExample: "She remembered summer afternoons that seemed to last forever..."`,
      },
      {
        id: 'awt-52',
        front: 'Tone: Ominous',
        back: `Effect: Sense of impending danger or dread.\n\nLanguage markers: Dark imagery, foreboding language, disquieting atmosphere.\n\nWhen to use: In thriller or horror writing, or before a revelation.\n\nExample: "The sky darkened. Even the birds fell silent."`,
      },
      {
        id: 'awt-53',
        front: 'Tone: Ironic',
        back: `Effect: Gap between what is said/appears and what is true.\n\nLanguage markers: Understatement, sarcasm, reversal of expectation.\n\nWhen to use: To reveal hypocrisy, create wit, or comment on situation.\n\nExample: "How wonderful. Another delay." (when delays are bad)`,
      },
      {
        id: 'awt-54',
        front: 'Tone: Bitter',
        back: `Effect: Reader feels resentment, anger, disappointment.\n\nLanguage markers: Harsh vocabulary, complaints, sarcasm, dark humour.\n\nWhen to use: When character or narrator has been wronged or is disillusioned.\n\nExample: "So much for promises. So much for love."`,
      },
      {
        id: 'awt-55',
        front: 'Tone: Hopeful',
        back: `Effect: Reader feels optimism and possibility.\n\nLanguage markers: Light imagery, forward-looking language, possibility.\n\nWhen to use: In uplifting or redemptive narratives.\n\nExample: "But maybe, just maybe, tomorrow would be different."`,
      },
      {
        id: 'awt-56',
        front: 'Tone: Detached/Objective',
        back: `Effect: Irony or critique without emotional investment apparent.\n\nLanguage markers: Factual, unemotional language, passive voice, clinical description.\n\nWhen to use: To highlight problems or absurdities by refusing to acknowledge them emotionally.\n\nExample: "He murdered his wife. Then he made coffee."`,
      },
      {
        id: 'awt-57',
        front: 'Ambiguity in Endings',
        back: `Technique: Leaving the ending open to interpretation.\n\nEffect: Allows reader to create their own meaning. Creates discussion.\n\nWhen to use: In literary fiction or when exploring themes of uncertainty.\n\nExample: "She smiled. He never knew why."\n\nRisk: Some readers may feel unsatisfied if too unclear.`,
      },
      {
        id: 'awt-58',
        front: 'Twist Endings',
        back: `Technique: Revealing that the situation is different from what appeared.\n\nEffect: Surprises reader and recontextualises everything that came before.\n\nWhen to use: In mystery, thriller, or short story writing.\n\nRisk: Must be foreshadowed subtly or will feel unearned.`,
      },
      {
        id: 'awt-59',
        front: 'Cyclical Structure (Return)',
        back: `Technique: Ending where the narrative began, suggesting completion or inevitability.\n\nEffect: Creates sense of closure or suggests nothing has changed.\n\nWhen to use: To emphasise theme or to create tragic irony (character ends up where they started).\n\nExample: Story opens on a Tuesday morning. Ends on a Tuesday morning (but the character has changed).`,
      },
      {
        id: 'awt-60',
        front: 'Authorial Intrusion',
        back: `Technique: The narrator directly addresses the reader or comments on the story.\n\nEffect: Creates intimacy but can disrupt immersion.\n\nWhen to use: In literary fiction, humorous writing, or to directly engage reader.\n\nExample: "Dear reader, you may wonder why she did this. I do too."\n\nRisk: Can feel dated or heavy-handed if not done carefully.`,
      },
    ],
  },
  {
    id: 'christmas-carol-quotes',
    title: 'A Christmas Carol — Key Quotations',
    description: 'Essential quotes for GCSE Literature',
    category: 'Literature',
    board: 'AQA',
    cards: [
      {
        id: 'cc-1',
        front: '"Oh! But he was a tight-fisted hand at the grindstone, Scrooge!"',
        back: `Stave 1. Introduces Scrooge as miserly and mean. "Tight-fisted" = unwilling to spend. "Grindstone" = relentless, mechanical labour. Dickens establishes Scrooge as everything wrong with Victorian capitalism.`,
      },
      {
        id: 'cc-2',
        front: '"Solitary as an oyster"',
        back: `Stave 1. Simile showing Scrooge\'s isolation. Oysters are hard-shelled and closed off — like Scrooge. But oysters also contain pearls — hinting at the goodness hidden within.`,
      },
      {
        id: 'cc-3',
        front: '"Are there no prisons? Are there no workhouses?"',
        back: `Stave 1. Scrooge\'s response to being asked for charity. Rhetorical questions. Shows his Malthusian attitude — he believes the poor deserve punishment, not help. Dickens satirises this Victorian mindset.`,
      },
      {
        id: 'cc-4',
        front:
          '"If they would rather die, they had better do it, and decrease the surplus population"',
        back: `Stave 1. Scrooge echoing Thomas Malthus\'s theory. "Surplus population" = the poor are expendable. This is Scrooge at his worst — completely dehumanising the poor. The Ghost of Christmas Present throws this back at him.`,
      },
      {
        id: 'cc-5',
        front: '"I wear the chain I forged in life"',
        back: `Stave 1. Marley\'s ghost. Metaphor: the chain represents his sins and selfishness. "Forged" = he created it himself. Message: we are responsible for our own moral choices. The chain gets heavier with every selfish act.`,
      },
      {
        id: 'cc-6',
        front: '"Mankind was my business"',
        back: `Stave 1. Marley\'s ghost. The most important line in the novella. "Business" has a double meaning — Marley now realises that caring for others should have been his real purpose, not making money.`,
      },
      {
        id: 'cc-7',
        front: '"A solitary child, neglected by his friends"',
        back: `Stave 2. Ghost of Christmas Past shows young Scrooge alone at school. "Solitary" and "neglected" generate sympathy. Explains WHY Scrooge became cold — he was hurt first. Dickens asks the reader to understand, not just judge.`,
      },
      {
        id: 'cc-8',
        front: '"Another idol has displaced me... a golden one"',
        back: `Stave 2. Belle breaking off the engagement. "Idol" = something worshipped. Money has replaced love. "Golden" — ironic because gold should be precious but here it represents loss.`,
      },
      {
        id: 'cc-9',
        front: '"God bless us, every one!"',
        back: `Stave 3. Tiny Tim\'s famous line. Inclusive — "every one" means all of society, not just the rich. Tim\'s generosity contrasts with Scrooge\'s selfishness. He blesses even those who have nothing to do with him.`,
      },
      {
        id: 'cc-10',
        front: '"If these shadows remain unaltered by the Future, the child will die"',
        back: `Stave 3. The Ghost of Christmas Present about Tiny Tim. "Shadows" = visions of what may come. The conditional "if" gives Scrooge a choice — and therefore responsibility. Dickens makes the consequence of inaction personal.`,
      },
      {
        id: 'cc-11',
        front: '"This boy is Ignorance. This girl is Want."',
        back: `Stave 3. Two wretched children hidden under the Ghost\'s robe. Allegory for society\'s failures. "Beware them both" — Dickens\'s direct message to Victorian readers. Ignorance is the most dangerous because uneducated people cannot help themselves.`,
      },
      {
        id: 'cc-12',
        front: '"I will honour Christmas in my heart, and try to keep it all the year"',
        back: `Stave 4. Scrooge\'s promise of change. "Honour" = respect and celebrate. "All the year" = not just at Christmas. This transformation is Dickens\'s model for social reform — change must be sustained, not seasonal.`,
      },
      {
        id: 'cc-13',
        front:
          '"He became as good a friend, as good a master, and as good a man, as the good old city knew"',
        back: `Stave 5. Tricolon showing Scrooge\'s complete transformation. "Friend, master, man" — personal, professional, moral. Dickens shows that change is possible at any age.`,
      },
    ],
  },
  {
    id: 'jekyll-hyde-quotes',
    title: 'Jekyll and Hyde — Key Quotations',
    description: 'Essential quotes for GCSE Literature',
    category: 'Literature',
    board: 'AQA',
    cards: [
      {
        id: 'jh-1',
        front: '"Mr Hyde was pale and dwarfish, he gave an impression of deformity"',
        back: `Chapter 1. Hyde\'s appearance reflects Victorian ideas that evil shows physically (physiognomy). "Dwarfish" = smaller, less evolved. "Impression" = people sense something wrong but cannot explain it.`,
      },
      {
        id: 'jh-2',
        front: '"Trampled calmly over the child\'s body"',
        back: `Chapter 1. Hyde\'s first act of violence. "Trampled" = animalistic, brutal. "Calmly" = the most disturbing word — no remorse. The juxtaposition shows Hyde lacks basic human empathy.`,
      },
      {
        id: 'jh-3',
        front: '"If he be Mr Hyde, I shall be Mr Seek"',
        back: `Chapter 2. Utterson\'s wordplay. Foreshadows the pursuit of truth. Also echoes "hide and seek" — a child\'s game, but here the stakes are deadly.`,
      },
      {
        id: 'jh-4',
        front: '"Man is not truly one, but truly two"',
        back: `Chapter 10. Jekyll\'s central revelation. Duality of human nature — good and evil coexist in everyone. Stevenson challenges Victorian hypocrisy: people pretended to be good while hiding their desires.`,
      },
      {
        id: 'jh-5',
        front: '"My devil had been long caged, he came out roaring"',
        back: `Chapter 10. Jekyll describing Hyde breaking free. "Devil" = religious imagery of evil. "Caged" = repression. "Roaring" = uncontrollable, animalistic. Stevenson suggests repression makes evil stronger.`,
      },
      {
        id: 'jh-6',
        front:
          '"The pleasures which I made haste to seek in my disguise were, as I have said, undignified"',
        back: `Chapter 10. Jekyll admits to enjoying Hyde\'s freedom. "Disguise" = Hyde is a mask. "Undignified" = a euphemism — Stevenson lets Victorian readers imagine the worst. The vagueness makes it more disturbing.`,
      },
      {
        id: 'jh-7',
        front: '"With ape-like fury"',
        back: `Chapter 4. Hyde murdering Sir Danvers Carew. Simile comparing Hyde to a primate. Darwin\'s theory of evolution was controversial — Hyde represents devolution, a return to animal instinct.`,
      },
      {
        id: 'jh-8',
        front:
          '"The door... which was equipped with neither bell nor knocker, was blistered and distained"',
        back: `Chapter 1. The door to Jekyll\'s laboratory. Symbolises the hidden, shameful side of respectable life. "Blistered and distained" = decayed, neglected — like the morality it conceals.`,
      },
      {
        id: 'jh-9',
        front: '"I learned to recognise the thorough and primitive duality of man"',
        back: `Chapter 10. "Primitive" = primal, basic. "Thorough" = complete, inescapable. Jekyll discovers that duality is not a flaw — it is fundamental to human nature.`,
      },
      {
        id: 'jh-10',
        front: '"I was slowly losing hold of my original and better self"',
        back: `Chapter 10. Jekyll losing control. "Original" = the real, authentic self. "Better" = moral judgement. "Slowly" = gradual, creeping loss — more frightening than sudden change.`,
      },
    ],
  },
  {
    id: 'inspector-calls-quotes',
    title: 'An Inspector Calls — Key Quotations',
    description: 'Essential quotes for GCSE Literature',
    category: 'Literature',
    board: 'AQA',
    cards: [
      {
        id: 'ic-1',
        front: '"We are members of one body. We are responsible for each other."',
        back: `Act 3. The Inspector\'s final speech. "One body" = organic metaphor for society. Directly states Priestley\'s socialist message. Echoes Christian teaching — deliberate, as the Birlings claim to be moral.`,
      },
      {
        id: 'ic-2',
        front:
          '"If men will not learn that lesson, then they will be taught it in fire and blood and anguish"',
        back: `Act 3. The Inspector\'s warning. Written in 1945, set in 1912 — Priestley\'s audience knew the "fire and blood" meant WWI and WWII. Tricolon builds to "anguish." Still relevant today.`,
      },
      {
        id: 'ic-3',
        front: '"The Titanic — unsinkable, absolutely unsinkable"',
        back: `Act 1. Birling\'s confident prediction. Dramatic irony — the audience knows the Titanic sank. Undermines everything Birling says. If he is wrong about this, he is wrong about everything.`,
      },
      {
        id: 'ic-4',
        front: '"A man has to make his own way — has to look after himself"',
        back: `Act 1. Birling\'s capitalist philosophy. Direct opposite of the Inspector\'s message. "His own" and "himself" = entirely selfish. Birling sees community as weakness.`,
      },
      {
        id: 'ic-5',
        front: '"But these girls aren\'t cheap labour — they\'re people"',
        back: `Act 1. Sheila challenging her father. Shows her growing awareness. "People" = asserting the workers\' humanity. This is the beginning of Sheila\'s moral awakening.`,
      },
      {
        id: 'ic-6',
        front: '"I\'ll never, never do it again to anybody"',
        back: `Act 2. Sheila\'s response after hearing about her role in Eva\'s death. Repetition of "never" = genuine remorse. Contrast with her parents who refuse to accept blame. Sheila represents hope for change.`,
      },
      {
        id: 'ic-7',
        front: '"You\'re not the kind of father a chap could go to when he\'s in trouble"',
        back: `Act 2. Eric to Birling. Reveals the family\'s dysfunction. Birling is a failure as a father — too busy with business to connect with his son. Priestley shows that capitalism damages families.`,
      },
      {
        id: 'ic-8',
        front: '"I was in that state when a chap easily turns nasty"',
        back: `Act 3. Eric about the night he forced himself on Eva. "That state" = drunk. Euphemism for assault. Eric takes some responsibility but also deflects it. Priestley shows how privilege enables harm.`,
      },
      {
        id: 'ic-9',
        front:
          '"She was a pretty, lively sort of girl... and she needed not only money but advice, sympathy, friendliness"',
        back: `Act 2. Gerald describing Eva/Daisy. Shows he genuinely cared — but also that his "care" came from a position of power. He rescued her but also controlled her.`,
      },
      {
        id: 'ic-10',
        front: '"The girl\'s dead and we all helped to kill her"',
        back: `Act 3. The Inspector\'s blunt accusation. Collective guilt. "We all" = no one can escape responsibility. The verb "kill" — not "contributed to her death" — is deliberately shocking.`,
      },
      {
        id: 'ic-11',
        front: '"I\'m ashamed of you as well — yes, both of you"',
        back: `Act 3. Sheila to her parents. Generational reversal — the child judges the parents. "Ashamed" = strong moral condemnation. Priestley positions the younger generation as the moral future.`,
      },
      {
        id: 'ic-12',
        front: '"Everything\'s all right now, Sheila. What about this ring?"',
        back: `Act 3. Gerald trying to return to normal. The ring symbolises their superficial relationship. Gerald has learned nothing. Priestley shows that some people will never change.`,
      },
    ],
  },
  {
    id: 'edexcel-relationships-poetry',
    title: 'Edexcel Poetry Anthology — Relationships',
    description:
      '15 poems from the Edexcel Relationships poetry collection with key quotes, themes, and techniques',
    category: 'Literature',
    board: 'Edexcel',
    cards: [
      {
        id: 'erp-1',
        front: 'La Belle Dame Sans Merci — John Keats',
        back: `Key quote: "I met a lady in the meads, / Full beautiful — a faery\'s child"\n\nThemes: Destructive love, power imbalance, enchantment, isolation.\n\nTechniques: Ballad form, archaic language, supernatural imagery, cyclical structure (returns to the pale knight on the hillside).\n\nCompare with: She Walks in Beauty (idealised beauty), Neutral Tones (love that destroys).\n\nVersion note: The Edexcel anthology uses the 1820 "Indicator" version (with "knight-at-arms"), not the 1848 (Milnes) revision (with "wretched wight"). Always quote from the anthology version.`,
      },
      {
        id: 'erp-2',
        front: 'A Child to his Sick Grandfather — Joanna Baillie',
        back: `Key quote: "Grand-dad, they say you\'re old and frail"\n\nThemes: Family love, ageing, innocence vs experience, mortality.\n\nTechniques: Child speaker (naive voice), direct address, contrast between youth and age, simple diction reflecting the child\'s perspective.\n\nCompare with: Nettles (parent-child love), My Father Would Not Show Us (family distance).`,
      },
      {
        id: 'erp-3',
        front: 'She Walks in Beauty — Lord Byron',
        back: `Key quote: "She walks in beauty, like the night / Of cloudless climes and starry skies"\n\nThemes: Idealised beauty, admiration, harmony of inner and outer beauty.\n\nTechniques: Simile, regular metre (iambic tetrameter), antithesis of dark and light, enjambment creating flowing admiration.\n\nCompare with: La Belle Dame Sans Merci (beauty as power), Sonnet 43 (adoration).`,
      },
      {
        id: 'erp-4',
        front: 'A Complaint — William Wordsworth',
        back: `Key quote: "There is a change — and I am poor"\n\nThemes: Loss of love, emotional dependency, change, grief.\n\nTechniques: Extended metaphor of a fountain (love as a water source that dries up), caesura reflecting emotional disruption, shift from abundance to emptiness.\n\nCompare with: Neutral Tones (love ended), One Flesh (emotional distance).`,
      },
      {
        id: 'erp-5',
        front: 'Neutral Tones — Thomas Hardy',
        back: `Key quote: "We stood by a pond that winter day, / And the sun was white, as though chidden of God"\n\nThemes: End of love, bitterness, memory, emotional deadness.\n\nTechniques: Pathetic fallacy (bleached landscape), colour symbolism (white = lifeless), cyclical structure, monosyllabic words creating flat, defeated tone.\n\nCompare with: A Complaint (love lost), One Flesh (emotional distance).`,
      },
      {
        id: 'erp-6',
        front: 'My Last Duchess — Robert Browning',
        back: `Key quote: "That\'s my last Duchess painted on the wall, / Looking as if she were alive"\n\nThemes: Power and control, jealousy, possession, toxic masculinity, objectification.\n\nTechniques: Dramatic monologue, enjambment (Duke\'s controlling speech), iambic pentameter, sinister undertone — "I gave commands; / Then all smiles stopped together."\n\nCompare with: La Belle Dame Sans Merci (power in love), Valentine (unconventional love).`,
      },
      {
        id: 'erp-7',
        front: 'Sonnet 43 — Elizabeth Barrett Browning',
        back: `Key quote: "How do I love thee? Let me count the ways"\n\nThemes: Unconditional love, devotion, spiritual love, eternal love.\n\nTechniques: Petrarchan sonnet form, anaphora ("I love thee"), religious imagery ("Grace," "saints"), hyperbole suggesting love beyond measurement.\n\nCompare with: She Walks in Beauty (admiration), i wanna be yours (devotion).`,
      },
      {
        id: 'erp-8',
        front: '1st Date — She / 1st Date — He — Wendy Cope',
        back: `Key quote (She): "I can\'t believe I\'ve met someone so nice"\nKey quote (He): "She\'s absolutely gorgeous"\n\nThemes: New love, excitement, nervousness, contrasting perspectives.\n\nTechniques: Dual perspective (two companion poems), colloquial language, humour, internal monologue revealing insecurity beneath confidence.\n\nCompare with: Valentine (modern love), Love\'s Dog (conflicting emotions in love).`,
      },
      {
        id: 'erp-9',
        front: 'Valentine — Carol Ann Duffy',
        back: `Key quote: "I give you an onion. / It is a moon wrapped in brown paper"\n\nThemes: Unconventional love, honesty about relationships, love as painful, rejection of cliché.\n\nTechniques: Extended metaphor (onion = love), free verse, imperative verbs ("Take it"), monosyllabic final line — "Lethal" — showing love\'s danger.\n\nCompare with: Sonnet 43 (contrasting view of love), Love\'s Dog (love\'s contradictions).`,
      },
      {
        id: 'erp-10',
        front: 'One Flesh — Elizabeth Jennings',
        back: `Key quote: "Lying apart now, each in a separate bed"\n\nThemes: Long-term love, emotional distance, ageing, loss of passion, memory.\n\nTechniques: Enjambment, religious allusion ("one flesh" from Genesis), oxymoron of closeness and distance, reflective tone, third-person observation of her own parents.\n\nCompare with: Neutral Tones (emotional death), A Complaint (love changed).`,
      },
      {
        id: 'erp-11',
        front: 'i wanna be yours — John Cooper Clarke',
        back: `Key quote: "I wanna be your electric meter / I will not run out"\n\nThemes: Devotion, desire, total commitment, modern love.\n\nTechniques: Extended metaphor (domestic objects = devotion), repetition ("I wanna be your"), lack of punctuation and capitalisation (informal, urgent tone), metaphors escalate from mundane to passionate.\n\nCompare with: Sonnet 43 (total devotion), Valentine (modern love poem).`,
      },
      {
        id: 'erp-12',
        front: "Love's Dog — Jen Hadfield",
        back: `Key quote: "What I love about love is its diamond blaze. / What I hate about love is its diamond blaze."\n\nThemes: Contradictions of love, joy and pain coexisting, duality of emotion.\n\nTechniques: Anaphora ("What I love / What I hate"), antithesis, list structure, repeated syntactic pattern highlighting love\'s paradoxes.\n\nCompare with: Valentine (honest about love\'s pain), 1st Date (excitement of love).`,
      },
      {
        id: 'erp-13',
        front: 'Nettles — Vernon Scannell',
        back: `Key quote: "My son aged three fell in the nettle bed. / \'Bed\' seemed a word of comfort"\n\nThemes: Parental love, protectiveness, futility of shielding children, military imagery.\n\nTechniques: Extended metaphor (nettles = threats to children), military lexis ("regiment," "fierce parade," "fallen dead"), sonnet-like 14 lines, irony of "bed" as comfort vs pain.\n\nCompare with: The Manhunt (love and suffering), A Child to his Sick Grandfather (family bonds).`,
      },
      {
        id: 'erp-14',
        front: 'The Manhunt — Simon Armitage',
        back: `Key quote: "After the first phase, / after passionate nights and intimate days"\n\nThemes: Love and trauma, PTSD, physical and emotional scars, patience, intimacy after war.\n\nTechniques: Extended metaphor (body as damaged landscape), couplets (togetherness), half-rhyme (discord), anatomical language tracing the body, wife\'s perspective showing love as slow recovery.\n\nCompare with: Nettles (love amid pain), One Flesh (physical/emotional distance).`,
      },
      {
        id: 'erp-15',
        front: 'My Father Would Not Show Us — Ingrid de Kok',
        back: `Key quote: "My father would not show us his dying"\n\nThemes: Family relationships, grief, distance, masculinity and vulnerability, death.\n\nTechniques: Negative construction ("would not show"), contrast between what father hides and what speaker reveals, enjambment mirroring life flowing away, restrained tone reflecting the father\'s own restraint.\n\nCompare with: A Child to his Sick Grandfather (family and mortality), One Flesh (emotional distance in family).`,
      },
    ],
  },
  {
    id: 'edexcel-conflict-poetry',
    title: 'Edexcel Poetry Anthology — Conflict',
    description:
      '15 poems from the Edexcel Conflict poetry collection with key quotes, themes, and techniques',
    category: 'Literature',
    board: 'Edexcel',
    cards: [
      {
        id: 'ecp-1',
        front: 'A Poison Tree — William Blake',
        back: `Key quote: "I was angry with my friend: / I told my wrath, my wrath did end"\n\nThemes: Suppressed anger, revenge, duplicity, consequences of bottled emotion.\n\nTechniques: Extended metaphor (anger as a growing tree), antithesis (friend vs foe), simple AABB rhyme (nursery-rhyme tone = sinister), biblical allusion (Tree of Knowledge, Garden of Eden).\n\nCompare with: Catrin (personal conflict), Half-caste (anger expressed openly).`,
      },
      {
        id: 'ecp-2',
        front: 'The Destruction of Sennacherib — Lord Byron',
        back: `Key quote: "The Assyrian came down like the wolf on the fold, / And his cohorts were gleaming in purple and gold"\n\nThemes: Power of God vs power of man, futility of war, destruction of armies.\n\nTechniques: Anapaestic metre (galloping rhythm = cavalry charge), simile ("like the wolf on the fold"), colour imagery (purple/gold = pride; then death), biblical source (II Kings).\n\nCompare with: The Charge of the Light Brigade (doomed military action), Exposure (war\'s destruction).`,
      },
      {
        id: 'ecp-3',
        front: 'Extract from The Prelude — William Wordsworth',
        back: `Key quote: "A huge peak, black and huge, / As if with voluntary power instinct, / Upreared its head"\n\nThemes: Man vs nature, power of nature, loss of innocence, sublime terror.\n\nTechniques: Blank verse, personification of the mountain, contrast between confidence and fear, volta when the peak appears, enjambment creating momentum of fear.\n\nCompare with: Exposure (nature as hostile force), A Poison Tree (internal conflict).`,
      },
      {
        id: 'ecp-4',
        front: 'The Man He Killed — Thomas Hardy',
        back: `Key quote: "Yes; quaint and curious war is! / You shoot a fellow down / You\'d treat, if met where any bar is"\n\nThemes: Futility of war, class and conflict, shared humanity of enemies, senselessness of killing.\n\nTechniques: Dramatic monologue, colloquial language, caesura and dashes (hesitation = guilt), ironic understatement ("quaint and curious"), regular ballad metre (simple form for complex ideas).\n\nCompare with: What Were They Like? (questioning war), Exposure (soldiers\' suffering).`,
      },
      {
        id: 'ecp-5',
        front: 'Cousin Kate — Christina Rossetti',
        back: `Key quote: "Why did a great lord find me out, / And praise my flaxen hair?"\n\nThemes: Betrayal, sexual exploitation, class and gender, fallen women, power imbalance.\n\nTechniques: Ballad form, rhetorical questions, contrast between speaker and Kate, bitter tone, the child as "gift" vs "shame," defiant final stanza.\n\nCompare with: My Last Duchess (power and gender), The Class Game (class conflict).`,
      },
      {
        id: 'ecp-6',
        front: 'Exposure — Wilfred Owen',
        back: `Key quote: "Our brains ache, in the merciless iced east winds that knive us"\n\nThemes: Suffering of soldiers, futility of war, nature as enemy, hopelessness.\n\nTechniques: Para-rhyme (half-rhyme creates unease), personification of wind, sibilance, repeated refrain "But nothing happens" (anti-climax = pointlessness), present tense (immediacy).\n\nCompare with: The Charge of the Light Brigade (war experience), The Destruction of Sennacherib (war\'s devastation).`,
      },
      {
        id: 'ecp-7',
        front: 'The Charge of the Light Brigade — Alfred, Lord Tennyson',
        back: `Key quote: "Into the valley of Death / Rode the six hundred"\n\nThemes: Bravery, obedience, futility of war, honour, military blunder.\n\nContext: Battle of Balaclava, 25 October 1854 (Crimean War). A miscommunicated order sent ~670 cavalrymen against Russian artillery; ~110 killed, 161 wounded. Tennyson, then Poet Laureate, wrote the poem within weeks of reading the Times report.\n\nTechniques: Anapaestic dimeter with a dactylic refrain ("Rode the six hundred") — galloping rhythm; end-stopped lines; repetition ("six hundred"); biblical allusion ("valley of Death" = Psalm 23); anaphora ("Cannon to right... left... behind"); heroic tone despite tragedy.\n\nCompare with: The Destruction of Sennacherib (doomed forces), Exposure (contrasting tone about war).`,
      },
      {
        id: 'ecp-8',
        front: 'Half-caste — John Agard',
        back: `Key quote: "Explain yuself / wha yu mean / when yu say half-caste"\n\nThemes: Racial identity, prejudice, challenging stereotypes, pride, anger at ignorance.\n\nTechniques: Phonetic spelling (Caribbean dialect), imperative verbs ("Explain yuself"), extended metaphors (Picasso, Tchaikovsky), humour and sarcasm to expose absurdity, lack of punctuation (defiance of convention).\n\nCompare with: No Problem (racial prejudice), The Class Game (identity and prejudice).`,
      },
      {
        id: 'ecp-9',
        front: 'Catrin — Gillian Clarke',
        back: `Key quote: "I can remember you, child, / As I stood in a hot, white room"\n\nThemes: Parent-child conflict, love and separation, the struggle for independence, enduring bond.\n\nTechniques: Extended metaphor ("the tight, red rope" = umbilical cord and ongoing connection), two-stanza structure (birth / present day), enjambment, oxymoron of love and conflict ("our first fierce confrontation").\n\nCompare with: Nettles (from Relationships — parent-child love), A Poison Tree (personal conflict).`,
      },
      {
        id: 'ecp-10',
        front: 'War Photographer — Satyamurti',
        back: `Key quote: "The next one shows a boy / about his age"\n\nThemes: Impact of war on civilians, desensitisation, guilt, distance between war zones and comfortable life.\n\nTechniques: Third-person narrator, contrast between domestic comfort and war zone, child\'s perspective, understatement, the photograph as a bridge between two worlds.\n\nCompare with: Poppies (impact of war at home), What Were They Like? (civilian suffering).`,
      },
      {
        id: 'ecp-11',
        front: 'Belfast Confetti — Ciaran Carson',
        back: `Key quote: "Suddenly as the riot squad moved in it was raining exclamation marks!"\n\nThemes: The Troubles in Northern Ireland, urban conflict, confusion, language as violence.\n\nTechniques: Extended metaphor (punctuation as weaponry — "nuts, bolts, nails" become "exclamation marks"), fragmented syntax mirrors chaos, rhetorical questions showing disorientation, street names as labyrinth.\n\nCompare with: Exposure (being trapped in conflict), Poppies (personal impact of war).`,
      },
      {
        id: 'ecp-12',
        front: 'The Class Game — Mary Casey',
        back: `Key quote: "How can you tell what class I\'m from? / I can tell what class you\'re from"\n\nThemes: Class conflict, identity, prejudice, pride in working-class roots.\n\nTechniques: Direct address, rhetorical questions, phonetic spelling of accent, contrast between "posh" and working-class markers, defiant and confrontational tone, listing.\n\nCompare with: Half-caste (identity and prejudice), Cousin Kate (class and power).`,
      },
      {
        id: 'ecp-13',
        front: 'Poppies — Jane Weir',
        back: `Key quote: "I traced the rims of his poppies / and leaned against the war memorial"\n\nThemes: Mother\'s grief, loss, conflict\'s impact on families, memory, letting go.\n\nTechniques: Sensory imagery (touch, texture), domestic and military language juxtaposed, symbolism of poppies, time shifts between past and present, first-person maternal voice.\n\nCompare with: War Photographer (impact of conflict), Catrin (parent-child bond).`,
      },
      {
        id: 'ecp-14',
        front: 'No Problem — Benjamin Zephaniah',
        back: `Key quote: "I am not de problem / But I bear de brunt"\n\nThemes: Racism, resilience, identity, Black British experience, defiance.\n\nTechniques: Phonetic spelling (Caribbean dialect), repetition ("I am not de problem"), direct address, reggae-influenced rhythm, positive and assertive tone despite injustice.\n\nCompare with: Half-caste (racial identity), The Class Game (fighting prejudice).`,
      },
      {
        id: 'ecp-15',
        front: 'What Were They Like? — Denise Levertov',
        back: `Key quote: "Did the people of Viet Nam / use lanterns of stone?"\n\nThemes: Vietnam War, destruction of culture, loss of identity, anti-war protest.\n\nTechniques: Q&A structure (questions then answers), past tense ("It is not remembered"), contrast between cultural beauty and destruction, elegiac tone, numbering dehumanises (like a report).\n\nCompare with: War Photographer (civilian suffering), The Man He Killed (questioning war).`,
      },
    ],
  },
  {
    id: 'edexcel-igcse-poetry',
    title: 'Edexcel IGCSE Poetry Anthology',
    description:
      '16 poems from the Edexcel IGCSE anthology with key quotes, themes, and techniques',
    category: 'Literature',
    board: 'Edexcel',
    cards: [
      {
        id: 'eig-1',
        front: 'If-- — Rudyard Kipling',
        back: `Key quote: "If you can keep your head when all about you / Are losing theirs and blaming it on you"\n\nThemes: Stoicism, masculinity, moral integrity, resilience, self-control.\n\nTechniques: Anaphora ("If you can"), conditional structure (entire poem is one sentence), second-person address ("you"), iambic pentameter, the final reward — "you\'ll be a Man, my son!" — capitalised "Man" as ideal.\n\nCompare with: Do not go gentle (defiance), Prayer Before Birth (what life demands).`,
      },
      {
        id: 'eig-2',
        front: 'Prayer Before Birth — Louis MacNeice',
        back: `Key quote: "I am not yet born; O hear me"\n\nThemes: Fear of the modern world, loss of identity, plea for protection, corruption of innocence.\n\nTechniques: Dramatic monologue (unborn child speaks), anaphora ("I am not yet born"), lines get longer (growing dread), imperative pleas, final short line "Let them not make me a stone" — fear of dehumanisation.\n\nCompare with: If-- (preparing for life), Half-past Two (child\'s perspective).`,
      },
      {
        id: 'eig-3',
        front: 'Blessing — Imtiaz Dharker',
        back: `Key quote: "The skin cracks like a pod. / There never is enough water"\n\nSetting: A slum in Mumbai (then Bombay), India — NOT Africa. Dharker is a Pakistani-born British poet; raised in Glasgow; divides time between London and Mumbai.\n\nThemes: Poverty, water as precious resource, community, joy in scarcity, spiritual blessing.\n\nTechniques: Simile ("cracks like a pod"), onomatopoeia ("splash," "rush"), enjambment (flowing like water), short opening stanza (drought) vs long third stanza (abundance), religious connotation of "blessing."\n\nCompare with: Search For My Tongue (cultural identity), Poem at Thirty-Nine (what we value).\n\n© Bloodaxe Books — fair-dealing extract.`,
      },
      {
        id: 'eig-4',
        front: 'Search For My Tongue — Sujata Bhatt',
        back: `Key quote: "You ask me what I mean by saying I have lost my tongue"\n\nThemes: Cultural identity, bilingualism, mother tongue vs adopted language, belonging.\n\nTechniques: Extended metaphor (tongue = language and identity), Gujarati script in the middle section, the mother tongue "grows back" like a plant — organic imagery, direct address, code-switching.\n\nCompare with: Half-caste (identity and language), Blessing (cultural roots).`,
      },
      {
        id: 'eig-5',
        front: 'Half-past Two — U. A. Fanthorpe',
        back: `Key quote: "He knew a lot of time: he knew Gettinguptime, Timeyougotobed time"\n\nThemes: Childhood innocence, adult authority, time as abstract concept, imagination.\n\nTechniques: Compound words ("Gettinguptime") reflecting child\'s understanding, third person, contrast between child\'s fluid time and adult clock-time, the child escapes "into the forever of not-being-there."\n\nCompare with: Piano (childhood memory), Hide and Seek (child\'s experience).`,
      },
      {
        id: 'eig-6',
        front: 'Piano — D. H. Lawrence',
        back: `Key quote: "Softly, in the dusk, a woman is singing to me; / Taking me back down the vista of years"\n\nThemes: Nostalgia, childhood, memory, loss of innocence, the power of music.\n\nTechniques: Sibilance ("softly," "singing"), sensory imagery, enjambment, contrast between present (woman singing) and past (mother at piano), the speaker "weeps like a child" — unable to resist memory.\n\nCompare with: Poem at Thirty-Nine (remembering a parent), Half-past Two (childhood perspective).`,
      },
      {
        id: 'eig-7',
        front: 'Hide and Seek — Vernon Scannell',
        back: `Key quote: "Call out. Call out. / The bushes hold their breath"\n\nThemes: Childhood games, isolation, abandonment, loss of innocence, growing up.\n\nTechniques: Second-person address ("you"), imperative verbs, personification ("bushes hold their breath"), shift from excitement to fear, the child is "found" too late — metaphor for being left behind.\n\nCompare with: Half-past Two (childhood experience), Piano (innocence and loss).`,
      },
      {
        id: 'eig-8',
        front: 'Sonnet 116 — William Shakespeare',
        back: `Key quote: "Let me not to the marriage of true minds / Admit impediments"\n\nThemes: Eternal love, constancy, love\'s endurance through hardship and time.\n\nTechniques: Shakespearean sonnet (ABAB CDCD EFEF GG), metaphor ("star to every wandering bark" = guiding light), personification of Time with "his bending sickle," negative definitions (love is defined by what it is NOT), final couplet as logical proof.\n\nCompare with: La Belle Dame sans Merci (contrasting love), Do not go gentle (defiance).`,
      },
      {
        id: 'eig-9',
        front: 'La Belle Dame sans Merci — John Keats',
        back: `Key quote: "O what can ail thee, knight-at-arms, / Alone and palely loitering?"\n\nThemes: Destructive love, enchantment, isolation, supernatural power, death-like state.\n\nTechniques: Ballad form, archaic diction, supernatural imagery ("faery\'s child"), cyclical structure, the knight is left "On the cold hill\'s side" — stripped of vitality.\n\nCompare with: Sonnet 116 (contrasting view of love), My Last Duchess (love and power).\n\nVersion note: The Edexcel IGCSE anthology uses the 1820 "Indicator" version of the poem (the one quoted above, with "knight-at-arms"). Some online sources reproduce Keats\'s 1848 (Milnes) revision, which uses "wretched wight" instead. Always quote from the anthology version when answering Edexcel questions.`,
      },
      {
        id: 'eig-10',
        front: 'Poem at Thirty-Nine — Alice Walker',
        back: `Key quote: "How I miss my father. / I wish he had not been / so tired"\n\nThemes: Grief, father-daughter relationship, inheritance of values, growing into a parent\'s likeness.\n\nTechniques: Free verse, short lines (reflective, measured tone), repetition ("He taught me"), enjambment, present tense mixed with past (father lives on through her), celebratory ending — "He would have grown / to admire / the woman I\'ve become."\n\nCompare with: Piano (remembering a parent), Half-past Two (adult reflecting on childhood).`,
      },
      {
        id: 'eig-11',
        front: 'War Photographer — Carol Ann Duffy',
        back: `Key quote: "In his dark room he is finally alone / with spools of suffering set out in ordered rows"\n\nThemes: War\'s impact, guilt, desensitisation of society, the gap between conflict and comfort.\n\nTechniques: Sibilance ("spools of suffering"), regular stanzas (photographer imposing order on chaos), contrast between "Rural England" and war zones, metaphor — "a stranger\'s features / faintly start to twist before his eyes" — the image developing mirrors guilt emerging.\n\nCompare with: The Tyger (questioning creation/destruction), Do not go gentle (defiance against suffering).`,
      },
      {
        id: 'eig-12',
        front: 'The Tyger — William Blake',
        back: `Key quote: "Tyger Tyger, burning bright, / In the forests of the night"\n\nThemes: Creation, good vs evil, awe, the sublime, questioning God.\n\nTechniques: Trochaic metre (hammering rhythm = the forge), rhetorical questions throughout (no answers = mystery), symbolism (Tyger = power/evil, Lamb = innocence/good), alliteration, industrial imagery ("hammer," "chain," "furnace").\n\nCompare with: Prayer Before Birth (questioning existence), Blessing (spiritual themes).`,
      },
      {
        id: 'eig-13',
        front: 'My Last Duchess — Robert Browning',
        back: `Key quote: "She had / A heart — how shall I say? — too soon made glad"\n\nThemes: Power, control, jealousy, patriarchy, art and possession.\n\nTechniques: Dramatic monologue, iambic pentameter with enjambment (Duke\'s conversational control), the pause "how shall I say?" = calculated menace, the painting as ultimate possession — "the curtain I have drawn for you."\n\nCompare with: Sonnet 116 (contrasting views of love), The Tyger (power).`,
      },
      {
        id: 'eig-14',
        front: 'Half-caste — John Agard',
        back: `Key quote: "Explain yuself / wha yu mean / when yu say half-caste"\n\nThemes: Racial identity, challenging prejudice, pride, absurdity of racial labels.\n\nTechniques: Phonetic Caribbean dialect, imperative verbs, extended metaphors (Picasso\'s art, Tchaikovsky\'s music, English weather), humour and irony to dismantle prejudice, lack of standard punctuation = defiance.\n\nCompare with: Search For My Tongue (identity and language), The Tyger (challenging assumptions).`,
      },
      {
        id: 'eig-15',
        front: 'Do not go gentle into that good night — Dylan Thomas',
        back: `Key quote: "Do not go gentle into that good night. / Rage, rage against the dying of the light"\n\nThemes: Death, defiance, father-son relationship, fighting against mortality.\n\nTechniques: Villanelle form (repeated refrains = obsessive plea), metaphor (night = death, light = life), imperative verbs ("rage"), catalogue of men (wise, good, wild, grave) who all resist death, final stanza addressed directly to his father.\n\nCompare with: Remember (attitudes to death), If-- (strength in adversity).`,
      },
      {
        id: 'eig-16',
        front: 'Remember — Christina Rossetti',
        back: `Key quote: "Remember me when I am gone away, / Gone far away into the silent land"\n\nThemes: Death, memory, love, letting go, acceptance.\n\nTechniques: Petrarchan sonnet, euphemism ("gone away," "silent land" = death), volta at line 9 (shift from "remember" to "forget"), imperative softening to permission — "Better by far you should forget and smile / Than that you should remember and be sad."\n\nCompare with: Do not go gentle (contrasting attitude to death), Poem at Thirty-Nine (memory of loved ones).`,
      },
    ],
  },
  {
    id: 'edexcel-paper1-key-terms',
    title: 'Edexcel Paper 1: Core Terms & Forms',
    description:
      '20 essential terms for Edexcel English Language Paper 1 (Fiction and Imaginative Writing / Non-Fiction and Transactional Writing)',
    category: 'Exam Skills',
    board: 'Edexcel',
    cards: [
      {
        id: 'ep1-1',
        front: 'Evaluation (Edexcel Definition)',
        back: `Making a judgement about a text supported by evidence. In Edexcel Paper 1, you must evaluate how effectively a writer achieves their purpose.\n\nStructure: State your judgement, provide a quote as evidence, analyse technique and effect, link back to your evaluative point.\n\nKey phrase starters: "The writer effectively...", "This is convincing because...", "This is less successful because..."`,
      },
      {
        id: 'ep1-2',
        front: 'Article (Transactional Writing)',
        back: `A piece of writing for a newspaper or magazine.\n\nFeatures: Headline, optional subheading, opening hook, paragraphed body, formal or semi-formal register depending on audience.\n\nTips: Use rhetorical devices (tricolon, rhetorical questions, direct address). Include a strong conclusion that circles back to your opening.`,
      },
      {
        id: 'ep1-3',
        front: 'Blog Post (Transactional Writing)',
        back: `An informal, opinion-based piece of online writing.\n\nFeatures: Engaging title, personal voice (first person), conversational tone, short paragraphs, direct address to readers.\n\nTips: Can include humour, anecdotes, and rhetorical questions. More relaxed than an article but still needs a clear structure and persuasive techniques.`,
      },
      {
        id: 'ep1-4',
        front: 'Formal Letter (Transactional Writing)',
        back: `A letter to an official audience (e.g., headteacher, council, MP).\n\nFormat: Your address (top right), recipient\'s address (left), date, "Dear Sir/Madam" or "Dear Mr/Mrs X," formal sign-off ("Yours faithfully" if unknown, "Yours sincerely" if named).\n\nTips: Formal register, clear paragraphs with topic sentences, measured but persuasive tone.`,
      },
      {
        id: 'ep1-5',
        front: 'Report (Transactional Writing)',
        back: `A formal, factual document presenting findings or recommendations.\n\nFeatures: Title, optional subheadings, introduction stating purpose, paragraphed body with evidence, conclusion with recommendations.\n\nTips: Impersonal tone ("It was found that..."), factual language, logical structure. Avoid emotional language — let evidence speak.`,
      },
      {
        id: 'ep1-6',
        front: 'Review (Transactional Writing)',
        back: `A critical assessment of a product, event, book, or experience.\n\nFeatures: Introduction (what you are reviewing), balanced analysis (positives and negatives), personal opinion supported by detail, recommendation.\n\nTips: Use descriptive and evaluative language. Engage the reader with humour or vivid detail. Give a clear verdict.`,
      },
      {
        id: 'ep1-7',
        front: 'Speech (Transactional Writing)',
        back: `A written text designed to be spoken aloud to an audience.\n\nFeatures: Direct address ("Ladies and gentlemen"), rhetorical questions, tricolon, anecdotes, emotive language, repetition for emphasis.\n\nTips: Write for the ear, not the eye. Use short sentences for impact. Include a powerful opening and a memorable closing line.`,
      },
      {
        id: 'ep1-8',
        front: 'Email (Transactional Writing)',
        back: `A digital message, usually semi-formal or formal depending on audience.\n\nFormat: To/From/Subject line, greeting ("Dear..." or "Hi..."), paragraphed body, sign-off.\n\nTips: Match register to audience. Be concise and purposeful. Professional emails use formal register; emails to peers can be semi-formal.`,
      },
      {
        id: 'ep1-9',
        front: 'Guide (Transactional Writing)',
        back: `An informative text giving advice or instructions.\n\nFeatures: Title, subheadings, numbered or bulleted points, imperative verbs ("Visit...", "Make sure you..."), direct address.\n\nTips: Clear, logical structure. Informative but engaging. Can use a friendly, encouraging tone depending on audience.`,
      },
      {
        id: 'ep1-10',
        front: 'Archaic Vocabulary (19th-Century Feature)',
        back: `Old-fashioned words no longer in common use.\n\nExamples: "hitherto" (until now), "whence" (from where), "ere" (before), "betwixt" (between), "forsooth" (indeed).\n\nExam tip: When analysing 19th-century texts, note how archaic vocabulary creates a formal, distant, or elevated tone. Explain what the word means and its effect.`,
      },
      {
        id: 'ep1-11',
        front: 'Formal Register (19th-Century Feature)',
        back: `A level of language characterised by complex sentences, sophisticated vocabulary, and an impersonal or elevated tone.\n\n19th-century texts often use formal register even in fiction. Look for: long subordinate clauses, Latinate vocabulary, passive constructions.\n\nContrast with modern informal register to show your understanding of context.`,
      },
      {
        id: 'ep1-12',
        front: 'Periodic Sentence (19th-Century Feature)',
        back: `A long sentence where the main clause is delayed until the end, building suspense or emphasis.\n\nExample: "Despite the rain, the cold, the endless miles of mud through which they trudged, they arrived."\n\nEffect: Creates anticipation. Common in 19th-century prose. Contrasts with modern preference for short, direct sentences.`,
      },
      {
        id: 'ep1-13',
        front: 'AO1 — Edexcel English Language',
        back: `Read and understand a range of texts. Select and synthesise evidence from different texts.\n\nWhat this means: Identify relevant information, use short embedded quotations, show you understand explicit and implicit meanings.\n\nKey skill: PEE/PEA paragraphs with precise evidence selection.`,
      },
      {
        id: 'ep1-14',
        front: 'AO2 — Edexcel English Language',
        back: `Explain, comment on and analyse how writers use language and structure to achieve effects and influence readers, using relevant subject terminology.\n\nWhat this means: Identify techniques, analyse their effect on the reader, use correct terminology (but only when it adds to your analysis).\n\nKey skill: "The writer uses [technique] to [effect], which suggests [interpretation]."`,
      },
      {
        id: 'ep1-15',
        front: 'AO4 — Edexcel English Language',
        back: `Evaluate texts critically and support this with appropriate textual references.\n\nWhat this means: Make a judgement about how effectively a writer achieves their purpose. "How far do you agree?" questions require balanced evaluation.\n\nKey skill: Sustained evaluative commentary — not just analysis, but judgement of effectiveness.`,
      },
      {
        id: 'ep1-16',
        front: 'Command Word: "Evaluate"',
        back: `Make a judgement about effectiveness. Say HOW WELL the writer achieves something, not just what they do.\n\nApproach: "The writer effectively/convincingly/powerfully [does X] through [technique], which [effect on reader]. This is successful because..."\n\nAvoid: Simply identifying techniques without judging their impact.`,
      },
      {
        id: 'ep1-17',
        front: 'Command Word: "Analyse"',
        back: `Examine language and/or structure in detail, explaining effects on the reader.\n\nApproach: Quote > Identify technique > Explain effect > Explore deeper meaning. Go beyond surface-level observations.\n\nAvoid: Feature-spotting without explanation. Always answer: "So what? Why does this matter?"`,
      },
      {
        id: 'ep1-18',
        front: 'Command Word: "Explain"',
        back: `Make your understanding clear with supporting evidence.\n\nApproach: State your point clearly, support with a quotation, develop your explanation of what it shows or suggests.\n\nDifference from "analyse": Less focus on technique names, more focus on meaning and understanding.`,
      },
      {
        id: 'ep1-19',
        front: 'Command Word: "How does the writer..."',
        back: `Focus on the writer\'s methods and choices — language, structure, form.\n\nApproach: Always discuss the writer as a craftsperson making deliberate choices. Use phrases like "The writer chooses to...", "By using..., the writer creates..."\n\nAvoid: Retelling the story. Focus on HOW, not WHAT.`,
      },
      {
        id: 'ep1-20',
        front: 'Command Word: "To what extent do you agree?"',
        back: `Requires an evaluative, balanced response. You can mostly agree, mostly disagree, or partially agree.\n\nApproach: State your position, support with evidence, consider alternative interpretations. Sustain your argument throughout.\n\nTip: The strongest answers show nuance — "While the writer does X effectively, the use of Y is less convincing because..."`,
      },
    ],
  },
  {
    id: 'edexcel-paper2-key-terms',
    title: 'Edexcel Paper 2: Core Terms & Techniques',
    description:
      '20 essential terms for Edexcel English Language Paper 2 (Non-Fiction and Transactional Writing / Poetry and Prose)',
    category: 'Exam Skills',
    board: 'Edexcel',
    cards: [
      {
        id: 'ep2-1',
        front: 'Comparison Connectives',
        back: `Words and phrases used to link similarities and differences between texts.\n\nSimilarity: Similarly, Likewise, In the same way, Both writers, Equally.\nDifference: However, In contrast, Whereas, On the other hand, Conversely, Unlike.\n\nTip: Embed connectives naturally. Start with one text, then use a connective to pivot to the other.`,
      },
      {
        id: 'ep2-2',
        front: 'Comparison Structures',
        back: `Methods for organising a comparison essay.\n\nAlternating (preferred): Point about Text A > Compare to Text B > Repeat. Keeps comparison tight.\nBlock: All of Text A, then all of Text B. Risks losing comparison.\n\nBest practice: Each paragraph should discuss BOTH texts. Use "Similarly/However" to pivot between them.`,
      },
      {
        id: 'ep2-3',
        front: 'AO3 — Comparison (Edexcel)',
        back: `Compare writers\' ideas and perspectives, as well as how these are conveyed, across two or more texts.\n\nWhat this means: Compare WHAT the writers think (ideas/attitudes) and HOW they express it (methods/techniques).\n\nKey skill: Every analytical point must reference both texts. Use comparative connectives throughout.`,
      },
      {
        id: 'ep2-4',
        front: 'Imaginative Writing',
        back: `Creative writing that may be narrative (story) or descriptive.\n\nKey skills: Varied sentence structures, ambitious vocabulary, sensory imagery, structural techniques (flashback, zoom in/out, circular structure).\n\nEdexcel tip: You may be given an image or scenario as a stimulus. You can adapt it — you don\'t have to follow it literally.`,
      },
      {
        id: 'ep2-5',
        front: 'Literary Non-Fiction',
        back: `Real-life writing that uses literary techniques. Includes travel writing, autobiography, memoir, diary entries, journalism, letters.\n\nFeatures: Based on real events but uses techniques like imagery, dialogue, structural choices, and voice to engage readers.\n\nExam skill: Analyse it the same way you would fiction — look for language, structure, and writer\'s perspective.`,
      },
      {
        id: 'ep2-6',
        front: 'Unreliable Narrator',
        back: `A narrator whose account the reader cannot fully trust.\n\nSignals: Contradictions, bias, defensiveness, gaps in knowledge, emotional extremes, second-person justification ("You would have done the same").\n\nEffect: Creates suspense, forces reader to question events, adds psychological depth.\n\nUse in creative writing to add sophistication.`,
      },
      {
        id: 'ep2-7',
        front: 'In Medias Res',
        back: `Latin for "in the middle of things." Starting a narrative at a dramatic moment rather than the beginning.\n\nExample: Opening with action, dialogue, or a crisis, then filling in context later.\n\nEffect: Immediately hooks the reader. Creates intrigue and pace.\n\nUse in imaginative writing to grab the marker\'s attention from line one.`,
      },
      {
        id: 'ep2-8',
        front: 'Flashback',
        back: `A shift to an earlier time in the narrative.\n\nTriggers: A sensory detail (smell, sound), an object, a place, a word.\n\nEffect: Adds backstory, reveals motivation, creates contrast between past and present.\n\nExam tip: In creative writing, use a single well-placed flashback rather than multiple time shifts.`,
      },
      {
        id: 'ep2-9',
        front: 'Foreshadowing',
        back: `Hints or clues about events that will happen later in the narrative.\n\nMethods: Symbolic imagery, ominous language, weather/atmosphere, a character\'s uneasy feeling.\n\nEffect: Builds tension, creates dramatic irony, rewards attentive readers.\n\nExam tip: Subtle foreshadowing shows skill — don\'t make it too obvious.`,
      },
      {
        id: 'ep2-10',
        front: 'Narrative Voice',
        back: `The perspective and personality through which a story is told.\n\nFirst person: "I" — intimate, subjective, potentially unreliable.\nThird person limited: Follows one character\'s thoughts.\nThird person omniscient: All-knowing narrator.\nSecond person: "You" — unusual, immersive, confrontational.\n\nChoose deliberately in creative writing and justify your choice through execution.`,
      },
      {
        id: 'ep2-11',
        front: 'Zooming In (Structural Technique)',
        back: `Moving from a wide, general view to a close, specific detail.\n\nExample: "The city sprawled beneath a grey sky... In one narrow alley, a single flower pushed through a crack in the concrete."\n\nEffect: Draws the reader\'s focus, creates significance from small details, mirrors a camera lens.\n\nUse in descriptive writing to control the reader\'s attention.`,
      },
      {
        id: 'ep2-12',
        front: 'Circular / Cyclical Structure',
        back: `When a text ends where it began — returning to the same image, place, or idea.\n\nEffect: Creates a sense of completion, inevitability, or entrapment. Can show that nothing has changed — or that everything has.\n\nExam tip: In creative writing, echo your opening in your final paragraph to demonstrate conscious structural control.`,
      },
      {
        id: 'ep2-13',
        front: 'Shift in Tone',
        back: `A deliberate change in the mood or attitude within a text.\n\nExamples: Humorous to serious, calm to panicked, hopeful to despairing.\n\nEffect: Creates contrast, surprise, or emotional impact. Shows the writer\'s control.\n\nExam tip: When analysing structure, always comment on WHERE and WHY the tone shifts.`,
      },
      {
        id: 'ep2-14',
        front: 'Pathetic Fallacy (in Creative Writing)',
        back: `Using weather, landscape, or environment to mirror a character\'s emotions or the mood of a scene.\n\nExample: "Rain hammered the windows as she stared at the letter" = grief, turmoil.\n\nExam tip: Use pathetic fallacy at the START of your creative writing to establish atmosphere immediately. Avoid cliches — be specific with weather details.`,
      },
      {
        id: 'ep2-15',
        front: 'Sensory Imagery (Five Senses)',
        back: `Language that appeals to sight, sound, touch, taste, and smell.\n\nVisual: "The crimson sun bled across the horizon."\nAuditory: "Silence pressed against his ears."\nTactile: "The rough bark scraped her palms."\nOlfactory: "The air was thick with woodsmoke."\nGustatory: "Salt stung his cracked lips."\n\nExam tip: Use at least THREE senses in any descriptive piece.`,
      },
      {
        id: 'ep2-16',
        front: "Show, Don't Tell",
        back: `Revealing emotion through action, dialogue, and imagery rather than stating it directly.\n\nTelling: "She was nervous."\nShowing: "Her fingers drummed the tabletop. She glanced at the door, then back at her phone."\n\nEffect: More immersive and sophisticated. Trusts the reader to interpret.\n\nThis is the single most important technique for high-mark creative writing.`,
      },
      {
        id: 'ep2-17',
        front: 'Perspective and Attitude',
        back: `The writer\'s viewpoint on a topic and the feelings/opinions they convey.\n\nPerspective: Their angle or standpoint (e.g., a soldier\'s perspective on war vs a civilian\'s).\nAttitude: Their feelings — critical, admiring, nostalgic, ironic, angry.\n\nExam skill: In comparison questions, always compare perspectives AND how they are conveyed through methods.`,
      },
      {
        id: 'ep2-18',
        front: 'Rhetorical Techniques (for Transactional Writing)',
        back: `Persuasive methods for non-fiction writing:\n\nDARFOREST: Direct address, Alliteration, Rhetorical question, Facts, Opinions, Repetition, Emotive language, Statistics, Tricolon.\n\nExam tip: Don\'t just include these — use them purposefully. Quality over quantity. A well-placed rhetorical question is better than five crammed techniques.`,
      },
      {
        id: 'ep2-19',
        front: 'Dialogue in Creative Writing',
        back: `Speech between characters used to reveal personality, advance plot, or create tension.\n\nRules: New speaker = new line. Punctuation inside speech marks. Use speech verbs sparingly ("said" is fine).\n\nTips: Keep it brief and purposeful. What characters DON\'T say can be as powerful as what they do. Subtext (saying one thing, meaning another) shows sophistication.`,
      },
      {
        id: 'ep2-20',
        front: 'Ambitious Vocabulary',
        back: `Precise, carefully chosen words that elevate your writing beyond the everyday.\n\nNot: "The old house was scary."\nBetter: "The decrepit house loomed, its hollow windows like vacant eyes."\n\nKey principle: Choose words for PRECISION, not complexity. "Trudged" is better than "walked laboriously" because it is vivid and concise.\n\nExam tip: 5-10 well-chosen ambitious words across a piece is enough. Overdoing it sounds forced.`,
      },
    ],
  },
  {
    id: 'edexcel-1en2-paper-1-key-terms',
    title: 'Edexcel Paper 1: Advanced Terminology',
    description:
      'Terminology specific to 19th-century non-fiction reading and transactional writing for Edexcel 1EN2 Paper 1',
    category: 'gcse',
    board: 'Edexcel',
    cards: [
      {
        id: 'e1kt-1',
        front: 'Rhetoric',
        back: `The art of effective or persuasive speaking and writing. In Edexcel Paper 1, 19th-century non-fiction sources are rich in rhetorical strategies.\n\nKey rhetorical devices: tricolon, anaphora, antithesis, rhetorical questions, direct address.\n\nWhen analysing the source in Section A, identify the writer\'s rhetorical purpose — are they arguing, persuading, informing, or entertaining? This shapes every language choice they make.`,
      },
      {
        id: 'e1kt-2',
        front: 'Polemic',
        back: `A strong, one-sided verbal attack against an opposing position or belief.\n\n19th-century writers frequently used polemic to campaign for social reform. Examples: Dickens on workhouses, Wollstonecraft on women\'s education.\n\nFeatures: passionate tone, emotive language, exaggeration, direct appeals to morality.\n\nUse in Q3/Q4 analysis: "The text functions as a polemic against [X], as evidenced by..."`,
      },
      {
        id: 'e1kt-3',
        front: 'Epistolary',
        back: `Relating to or in the form of letters. An epistolary text is written as correspondence.\n\nEdexcel Paper 1 may use a 19th-century published letter as the source text.\n\nConventions: salutation ("Dear Sir"), personal address, intimate or public tone, sign-off.\n\nAnalysis tip: Consider who the letter is addressed to and how the audience shapes the writer\'s tone, register, and rhetorical choices.`,
      },
      {
        id: 'e1kt-4',
        front: 'Didactic',
        back: `Writing intended to teach, instruct, or moralise.\n\nMuch 19th-century non-fiction is didactic — aimed at educating the public about social issues, moral conduct, or civic duty.\n\nExamples: pamphlets on temperance, essays on child labour, sermons on charity.\n\nIn your analysis, consider: What lesson does the writer want the reader to learn? How do their methods serve this didactic purpose?`,
      },
      {
        id: 'e1kt-5',
        front: 'Invective',
        back: `Vehement, abusive, or highly critical language directed against a person, group, or idea.\n\n19th-century journalists and commentators used invective to discredit opponents and provoke outrage.\n\nEffect: vilifies the target, stirs anger in the reader, positions the writer as morally superior.\n\nIn Q3: "The writer employs invective through [specific language choices], creating a tone of righteous condemnation."`,
      },
      {
        id: 'e1kt-6',
        front: 'Tract / Pamphlet',
        back: `Short printed publications on a single issue, widely distributed in the 19th century for political or social campaigning.\n\nTracts were often religious or moral; pamphlets were broader (political, social, satirical).\n\nFeatures: urgent tone, clear thesis, persuasive techniques, call to action.\n\nMay appear as a Paper 1 source. Analyse the writer\'s methods of persuasion and their intended effect on the original audience.`,
      },
      {
        id: 'e1kt-7',
        front: 'Oratory / Oration',
        back: `The art of public speaking, or a formal speech. Many 19th-century non-fiction texts were originally delivered as speeches.\n\nOratorical features: direct address, repetition, anaphora, rhetorical questions, tricolon, pauses for effect.\n\nWhen analysing a speech extract in Paper 1, consider how it would SOUND — rhythm, emphasis, and pacing matter as much as word choice.`,
      },
      {
        id: 'e1kt-8',
        front: 'Philanthropic Discourse',
        back: `Language relating to charitable concern for human welfare. Common in 19th-century reform writing.\n\nKey vocabulary: benevolence, compassion, duty, moral obligation, the deserving poor.\n\nWriters used philanthropic discourse to appeal to wealthy readers\' sense of duty.\n\nContrast with: Malthusian discourse (the poor as "surplus population") — identifying which discourse a writer uses shows sophisticated contextual understanding.`,
      },
      {
        id: 'e1kt-9',
        front: 'Satirical Tone',
        back: `The use of irony, exaggeration, or ridicule to criticise and mock individuals, institutions, or society.\n\n19th-century writers like Dickens, Wilde, and Swift (earlier) used satire to expose hypocrisy.\n\nKey signals: verbal irony, understatement, mock-serious tone, absurd comparisons.\n\nIn Q3: Explain HOW the satirical tone works — what is being mocked, and how does irony achieve this more effectively than direct criticism?`,
      },
      {
        id: 'e1kt-10',
        front: 'Encomium',
        back: `A formal expression of praise, often in speech or essay form.\n\nThe opposite of invective. Some 19th-century texts praise individuals, institutions, or ideals to inspire admiration and emulation.\n\nFeatures: superlative adjectives, elevated diction, tricolon, idealised imagery.\n\nUseful for Q4 comparison: "While Source A uses invective to condemn [X], Source B employs encomium to celebrate [Y]."`,
      },
      {
        id: 'e1kt-11',
        front: 'Apostrophe (Rhetorical)',
        back: `NOT the punctuation mark. A rhetorical device where the speaker directly addresses an absent person, abstract concept, or object.\n\nExample: "O Liberty! How many crimes are committed in thy name!"\n\nCommon in 19th-century speeches and essays. Effect: creates emotional intensity and dramatic flair.\n\nDo not confuse with the punctuation term — context makes the meaning clear.`,
      },
      {
        id: 'e1kt-12',
        front: 'Synthesis (Paper 1 Q2)',
        back: `The skill of drawing together information from TWO sources to identify similarities or differences.\n\nEdexcel Paper 1 Q2 (8 marks) requires synthesis, not just summary.\n\nTechnique: Make a comparative point → support with evidence from Source A → link to Source B with a connective.\n\nKey connectives: "Similarly," "Both sources suggest," "In contrast," "Whereas Source A..., Source B..."`,
      },
      {
        id: 'e1kt-13',
        front: 'Concession and Rebuttal',
        back: `Concession: Acknowledging an opposing argument has some validity.\nRebuttal: Then countering it with a stronger point.\n\nStructure: "While it may be true that [concession], it is nevertheless the case that [rebuttal]."\n\nCommon in 19th-century argument and essential for your own Section B transactional writing. Shows sophistication and earns top-band marks.`,
      },
      {
        id: 'e1kt-14',
        front: 'Peroration',
        back: `The concluding section of a speech or argument, designed to be powerful and memorable.\n\nFeatures: emotional climax, call to action, tricolon, repetition, heightened language.\n\nIn 19th-century speeches, the peroration was often the most passionate section.\n\nFor Q4: Comparing how two writers END their texts (their perorations) is a sophisticated structural point.`,
      },
      {
        id: 'e1kt-15',
        front: 'Register and Audience',
        back: `Register = the level of formality determined by audience and purpose.\n\nFormal: complex sentences, Latinate vocabulary, impersonal constructions.\nInformal: contractions, colloquialisms, first person, shorter sentences.\n\n19th-century texts typically use formal register. For Section B, you MUST match register to your specified audience — a letter to an MP requires different register than a blog post.`,
      },
      {
        id: 'e1kt-16',
        front: 'Diatribe',
        back: `A forceful, bitter, sustained verbal attack or denunciation.\n\nStronger than criticism, more sustained than invective. A diatribe is an extended rant against a target.\n\nCommon in 19th-century political journalism and reform writing.\n\nEffect: overwhelms the reader with the force of the writer\'s anger; leaves no room for counterargument.\n\nUseful analytical term for Q3 when the source text is particularly aggressive.`,
      },
      {
        id: 'e1kt-17',
        front: 'Exordium',
        back: `The opening section of a speech or argument, designed to capture attention and establish credibility.\n\nFeatures: hook, establishment of the writer\'s authority, statement of purpose.\n\nFor Q3/Q4 structural analysis: "The writer\'s exordium immediately establishes [authority/urgency/sympathy] through [specific technique]."\n\nCompare how two writers open their texts for a strong Q4 structural comparison.`,
      },
    ],
  },
  {
    id: 'edexcel-1en2-paper-2-key-terms',
    title: 'Edexcel Paper 2: Advanced Terminology',
    description:
      'Terminology for fiction analysis and imaginative writing for Edexcel 1EN2 Paper 2',
    category: 'gcse',
    board: 'Edexcel',
    cards: [
      {
        id: 'e2kt-1',
        front: 'Narrative Voice',
        back: `The perspective and personality through which a story is told. Central to Paper 2 fiction analysis.\n\nFirst person ("I"): subjective, intimate, potentially unreliable.\nThird person limited: follows one character\'s thoughts.\nThird person omniscient: all-knowing, can reveal any character\'s mind.\nSecond person ("you"): unusual, immersive, confrontational.\n\nAlways comment on narrative voice in Q3 — it shapes everything the reader experiences.`,
      },
      {
        id: 'e2kt-2',
        front: 'Foreshadowing',
        back: `Hints or clues planted early in a narrative that anticipate later events.\n\nMethods: ominous imagery, loaded dialogue, symbolic objects, weather/atmosphere.\n\nExample: A character noticing a cracked mirror before a relationship breaks down.\n\nIn Paper 2 Q3: "The writer foreshadows [event] through [specific detail], creating a sense of unease that prepares the reader for..."`,
      },
      {
        id: 'e2kt-3',
        front: 'Pathetic Fallacy',
        back: `Attributing human emotions to the natural environment, especially weather, to mirror characters\' feelings or establish mood.\n\nExample: "The sky darkened and rain began to spit as he turned away."\n\nDistinct from personification — pathetic fallacy specifically reflects EMOTION through ENVIRONMENT.\n\nEssential for both fiction analysis (Q3) and your own imaginative writing (Q5).`,
      },
      {
        id: 'e2kt-4',
        front: 'Motif',
        back: `A recurring image, symbol, idea, or phrase that develops significance across a text.\n\nExample: Repeated references to clocks in a text about mortality.\n\nEven in a short Paper 2 extract, a motif may appear multiple times. Spotting it shows perceptive reading.\n\nIn your imaginative writing: Introduce a motif early, repeat it with variation, and return to it at the end for structural cohesion.`,
      },
      {
        id: 'e2kt-5',
        front: 'Denouement',
        back: `The final resolution of a narrative, where conflicts are resolved and loose ends are tied up.\n\nFrom French: "unknotting."\n\nFollows the climax. May be satisfying (closure) or ambiguous (open ending).\n\nIf the Paper 2 extract is from near a story\'s end, consider whether the denouement resolves expectations or deliberately subverts them.`,
      },
      {
        id: 'e2kt-6',
        front: 'Free Indirect Discourse',
        back: `A narrative technique blending a character\'s thoughts with the narrator\'s voice, without speech marks or "she thought."\n\nExample: "She stared at the letter. It was over, then. Everything she had worked for, gone."\n\nThe second and third sentences are the character\'s thoughts, rendered in the narrator\'s voice.\n\nIdentifying this in Paper 2 Q3 shows very sophisticated understanding of narrative technique.`,
      },
      {
        id: 'e2kt-7',
        front: 'In Medias Res',
        back: `Latin: "in the middle of things." Beginning a narrative at a dramatic or significant moment rather than at the chronological start.\n\nEffect: Immediately hooks the reader. Creates mystery about how events reached this point.\n\nUse in your Paper 2 Q5 imaginative writing: open with a moment of tension or significance, then fill in context through flashback or reflection.`,
      },
      {
        id: 'e2kt-8',
        front: 'Dramatic Irony',
        back: `When the reader knows something that a character does not.\n\nExample: The reader knows there is danger ahead, but the character walks on obliviously.\n\nEffect: Creates tension, suspense, or pathos. The reader becomes emotionally invested because they want to warn the character.\n\nIn fiction analysis, always explain the EFFECT of dramatic irony on the reader\'s experience.`,
      },
      {
        id: 'e2kt-9',
        front: 'Semantic Field',
        back: `A group of words in a text that all relate to the same topic or concept.\n\nExample: "shackled," "imprisoned," "confined," "locked" = semantic field of captivity.\n\nIn Paper 2 Q3: Identifying a semantic field shows you can see patterns across the extract, not just individual words. Explain what the sustained semantic field SUGGESTS about theme or character.`,
      },
      {
        id: 'e2kt-10',
        front: 'Epiphany',
        back: `A sudden moment of revelation or insight experienced by a character.\n\nOften occurs at or near the climax. The character suddenly understands something they previously could not see.\n\nEffect: Creates a turning point. Can be cathartic, devastating, or transformative.\n\nIn fiction analysis: "The protagonist experiences an epiphany when [event], realising that [insight]."`,
      },
      {
        id: 'e2kt-11',
        front: 'Exposition',
        back: `The opening section of a narrative where the writer establishes setting, characters, context, and initial situation.\n\nIn Paper 2 fiction extracts, the exposition sets tone and atmosphere.\n\nFor your own imaginative writing: Keep exposition brief. Start with action, dialogue, or a striking image. Weave context in gradually — do not dump information in the first paragraph.`,
      },
      {
        id: 'e2kt-12',
        front: 'Prolepsis',
        back: `A flash-forward — a scene or detail that jumps ahead in time to reveal or hint at future events.\n\nOpposite of analepsis (flashback).\n\nExample: "Years later, she would remember this moment as the one that changed everything."\n\nEffect: Creates anticipation and a sense of inevitability. Sophisticated structural technique for Q5 imaginative writing.`,
      },
      {
        id: 'e2kt-13',
        front: 'Unreliable Narrator',
        back: `A narrator whose account the reader cannot fully trust due to bias, limited knowledge, emotional distortion, or deliberate deception.\n\nSignals: contradictions, defensiveness, gaps, excessive justification, second-person address ("You would have done the same").\n\nIdentifying unreliable narration in Paper 2 Q3 is a top-band skill. Using one in Q5 shows creative sophistication.`,
      },
      {
        id: 'e2kt-14',
        front: 'Sensory Description',
        back: `Writing that appeals to the five senses: sight, sound, touch, taste, smell.\n\nMost students only use sight. To reach top bands in Paper 2 Q5, consciously include at least three senses.\n\nTactile: "The rough bark scraped her palms."\nOlfactory: "Damp earth and woodsmoke hung in the air."\nAuditory: "Silence pressed in from every side."\n\nSensory detail creates immersion — the marker should FEEL your writing.`,
      },
      {
        id: 'e2kt-15',
        front: 'Cyclical / Circular Structure',
        back: `A narrative that ends where it began, returning to the opening image, location, or idea.\n\nEffect: Creates a sense of completion, fate, or entrapment. Can show transformation (same place, changed character) or stasis (nothing has changed).\n\nIn Paper 2 Q5: Echo your opening line or image in your final paragraph. This single structural choice demonstrates conscious craft and earns AO5 marks.`,
      },
      {
        id: 'e2kt-16',
        front: 'Narrative Pace',
        back: `The speed at which events unfold in a story, controlled by the writer\'s structural and linguistic choices.\n\nFast pace: short sentences, dialogue, action verbs, minimal description.\nSlow pace: long sentences, sensory detail, extended imagery, reflection.\n\nIn Q3 analysis: comment on how pace shifts create tension or emphasis.\nIn Q5 writing: vary pace deliberately — slow description followed by sudden short sentences creates impact.`,
      },
      {
        id: 'e2kt-17',
        front: 'Atmosphere vs. Mood',
        back: `Often used interchangeably, but there is a useful distinction:\n\nAtmosphere: the feeling created by the SETTING and ENVIRONMENT (external).\nMood: the emotional state of the CHARACTER or READER (internal).\n\nIn Paper 2 analysis, use precise terms: "The writer creates a claustrophobic atmosphere through [detail], which evokes a mood of anxiety in the reader."\n\nPrecise vocabulary like this signals top-band analysis.`,
      },
    ],
  },
  {
    id: 'edexcel-1en2-assessment-objectives',
    title: 'Edexcel Assessment Objectives',
    description:
      'AO1 through AO6 for Edexcel 1EN2 English Language with specific mark allocations and marker expectations',
    category: 'gcse',
    board: 'Edexcel',
    cards: [
      {
        id: 'eao2-1',
        front: 'AO1 — Identify and Interpret',
        back: `Identify and interpret explicit and implicit information and ideas. Select and synthesise evidence from different texts.\n\nEdexcel 1EN2 application:\n• Paper 1 Q1 (4 marks): Retrieve explicit information from one source.\n• Paper 1 Q2 (8 marks): Synthesise information from BOTH sources.\n• Paper 2 Q1 (4 marks): Retrieve information from the fiction extract.\n• Paper 2 Q2 (8 marks): Summarise/synthesise from one or two texts.\n\nKey skill: Inference — reading between the lines, not just surface comprehension.`,
      },
      {
        id: 'eao2-2',
        front: 'AO2 — Analyse Language and Structure',
        back: `Explain, comment on and analyse how writers use language and structure to achieve effects and influence readers, using relevant subject terminology.\n\nEdexcel 1EN2 application:\n• Paper 1 Q3 (12 marks): Language analysis of one non-fiction source.\n• Paper 1 Q4 (16 marks): Compare writers\' methods across both sources.\n• Paper 2 Q3 (12 marks): Language AND structure analysis of fiction.\n• Paper 2 Q4 (16 marks): Evaluate the writer\'s methods.\n\nThis is the highest-weighted reading AO. Always analyse EFFECT — do not just spot techniques.`,
      },
      {
        id: 'eao2-3',
        front: "AO3 — Compare Writers' Ideas and Perspectives",
        back: `Compare writers\' ideas and perspectives, as well as how these are conveyed, across two or more texts.\n\nEdexcel 1EN2 application:\n• Tested in Paper 1 Q4 (16 marks) — comparing two non-fiction sources.\n\nYou must compare BOTH ideas (what they think) AND methods (how they express it).\n\nStructure each paragraph around a comparative point. Use connectives: "Similarly," "Whereas," "Both writers," "In contrast."\n\nDo NOT write about each text separately — integrate comparison throughout.`,
      },
      {
        id: 'eao2-4',
        front: 'AO4 — Evaluate Critically',
        back: `Evaluate texts critically and support this with appropriate textual references.\n\nEdexcel 1EN2 application:\n• Tested in Paper 2 Q4 (16 marks).\n• You are given a statement about the text and asked how far you agree.\n\nYou must JUDGE effectiveness, not just describe.\n\nKey phrases: "The writer effectively...", "This is convincing because...", "A less successful aspect is..."\n\nSustained evaluation throughout = top band. A single evaluative sentence is not enough.`,
      },
      {
        id: 'eao2-5',
        front: 'AO5 — Communicate and Organise (Writing)',
        back: `Communicate clearly, effectively and imaginatively, selecting and adapting tone, style and register for different forms, purposes and audiences. Organise information and ideas, using structural and grammatical features to support coherence and cohesion.\n\nEdexcel 1EN2 application:\n• Paper 1 Q5: 24 marks (transactional writing).\n• Paper 2 Q5: 24 marks (imaginative writing).\n\nCovers: quality of ideas, audience awareness, register, paragraphing, structural devices, coherence.\n\nThis is the LARGEST single mark allocation on both papers.`,
      },
      {
        id: 'eao2-6',
        front: 'AO6 — Technical Accuracy (Writing)',
        back: `Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.\n\nEdexcel 1EN2 application:\n• Paper 1 Q5: 16 marks.\n• Paper 2 Q5: 16 marks.\n\nCovers: spelling accuracy, punctuation variety (semicolons, colons, dashes, ellipsis), sentence variety (simple, compound, complex, minor), ambitious vocabulary.\n\nThese are the most accessible marks on the paper. Accuracy costs nothing but time — proofread your final 5 minutes.`,
      },
      {
        id: 'eao2-7',
        front: 'Paper 1 Full Mark Breakdown (1EN2/01)',
        back: `Total: 80 marks | 1 hour 45 minutes\n\nSection A — Reading (40 marks):\n• Q1: 4 marks (AO1) — information retrieval from one source\n• Q2: 8 marks (AO1) — synthesis across both sources\n• Q3: 12 marks (AO2) — language analysis of one source\n• Q4: 16 marks (AO2 + AO3) — compare writers\' methods\n\nSection B — Transactional Writing (40 marks):\n• Q5: 24 marks (AO5) + 16 marks (AO6) = 40 marks\n\nReading and writing are equally weighted at 50% each.`,
      },
      {
        id: 'eao2-8',
        front: 'Paper 2 Full Mark Breakdown (1EN2/02)',
        back: `Total: 80 marks | 2 hours 5 minutes\n\nSection A — Reading (40 marks):\n• Q1: 4 marks (AO1) — information retrieval from fiction extract\n• Q2: 8 marks (AO1) — summary or synthesis\n• Q3: 12 marks (AO2) — language and structure analysis\n• Q4: 16 marks (AO2 + AO4) — critical evaluation\n\nSection B — Imaginative Writing (40 marks):\n• Q5: 24 marks (AO5) + 16 marks (AO6) = 40 marks\n\nPaper 2 has 20 extra minutes — use them for the longer fiction extract and creative writing planning.`,
      },
      {
        id: 'eao2-9',
        front: 'How AOs Map to Grade Boundaries',
        back: `Grade 8–9: Perceptive, detailed AO2 analysis with judicious evidence. Compelling, crafted writing (AO5) with assured technical accuracy (AO6).\n\nGrade 6–7: Convincing AO2 analysis with well-chosen evidence. Engaging, well-structured writing with consistent accuracy.\n\nGrade 4–5: Clear AO2 analysis with relevant evidence. Coherent writing with generally accurate spelling and punctuation.\n\nGrade 1–3: Simple or tentative responses. Basic writing with frequent errors.\n\nWriting (AO5 + AO6) is 50% of each paper — a strong writer can compensate for weaker reading skills.`,
      },
      {
        id: 'eao2-10',
        front: 'The Difference Between AO2 and AO4',
        back: `AO2 = ANALYSE how the writer uses language and structure.\nAO4 = EVALUATE how effectively the writer achieves their purpose.\n\nAO2 asks: "What techniques does the writer use and what effects do they create?"\nAO4 asks: "How well does this work? Is it effective or not?"\n\nAO2 is tested on BOTH papers (Q3 and Q4 on Paper 1; Q3 on Paper 2).\nAO4 is ONLY tested on Paper 2 Q4.\n\nFor AO4, you must make value judgements: "This is effective because..." or "This is less convincing because..."`,
      },
    ],
  },
  {
    id: 'edexcel-1en2-mark-scheme-vocabulary',
    title: 'Edexcel Marking Guide Vocabulary',
    description:
      'Key descriptors from Edexcel 1EN2 marking guides and the grade boundaries they correspond to',
    category: 'gcse',
    board: 'Edexcel',
    cards: [
      {
        id: 'emsv2-1',
        front: 'Perceptive',
        back: `Grade 8–9 (Band 5) reading descriptor.\n\nMeaning: Showing deep, insightful understanding that goes beyond the obvious. The student notices what other readers miss.\n\nHow to achieve it:\n• Make original interpretations — do not repeat obvious points.\n• Explore multiple layers of meaning in a single quote.\n• Consider what the writer implies or leaves unsaid.\n• Connect techniques to the writer\'s broader purpose.\n\nA "perceptive" response makes the marker think: "I hadn\'t considered that."`,
      },
      {
        id: 'emsv2-2',
        front: 'Judicious',
        back: `Grade 8–9 (Band 5) descriptor for evidence use.\n\nMeaning: Showing excellent judgement in selecting quotations. Every piece of evidence is precisely chosen and perfectly supports the point.\n\nHow to achieve it:\n• Use SHORT embedded quotations (2–5 words).\n• Zoom into individual words within the quote.\n• Never quote an entire sentence when a phrase will do.\n• Every quote must earn its place — if it does not directly support your point, cut it.\n\n"Judicious" = surgical precision, not volume.`,
      },
      {
        id: 'emsv2-3',
        front: 'Compelling',
        back: `Grade 8–9 (Band 5) writing descriptor (AO5).\n\nMeaning: Writing so convincing, powerful, and engaging that the reader cannot stop reading.\n\nHow to achieve it:\n• Hook the reader from the first sentence.\n• Maintain a confident, controlled tone throughout.\n• Structure deliberately — every paragraph has purpose.\n• End memorably — the conclusion should resonate.\n\n"Compelling" writing makes the marker forget they are marking.`,
      },
      {
        id: 'emsv2-4',
        front: 'Assured',
        back: `Grade 7–9 (Band 4–5) writing descriptor.\n\nMeaning: Confident and controlled. The writer knows exactly what they are doing and never loses grip.\n\nHow to achieve it:\n• Consistent register — do not accidentally slip between formal and informal.\n• Deliberate technique choices — every device serves a purpose.\n• No awkward phrasing or clumsy sentences.\n• Smooth transitions between paragraphs.\n\n"Assured" = the opposite of hesitant. Write with authority.`,
      },
      {
        id: 'emsv2-5',
        front: 'Convincing',
        back: `Grade 7 (Band 4) descriptor for both reading and writing.\n\nMeaning: The response is believable, well-supported, and holds together logically.\n\nFor reading: Your analysis is well-evidenced and your interpretations are plausible.\nFor writing: Your argument is logical (transactional) or your narrative feels authentic (imaginative).\n\nThe gap between "convincing" and "compelling": Convincing = you believe it. Compelling = you cannot look away.`,
      },
      {
        id: 'emsv2-6',
        front: 'Credible',
        back: `Grade 5–6 (Band 3) descriptor.\n\nMeaning: The response is reasonable, makes sense, and shows understanding, but lacks the depth or flair of higher bands.\n\nFor reading: Points are valid but not deeply developed.\nFor writing: The piece communicates clearly but does not excite.\n\nTo move beyond "credible": Add a second layer of analysis. Do not just explain what a technique does — explore WHY the writer chose it and what alternatives they rejected.`,
      },
      {
        id: 'emsv2-7',
        front: 'Clear',
        back: `Grade 4–5 (Band 3) descriptor.\n\nMeaning: The response communicates ideas that can be understood and followed.\n\nThis is the baseline for a secure pass. "Clear" = the marker can follow your argument without confusion.\n\nLimitations of "clear": It implies competence but not sophistication. There is no deeper insight, no originality, no flair.\n\nTo upgrade: Add analysis of individual words, explore alternative interpretations, use precise vocabulary.`,
      },
      {
        id: 'emsv2-8',
        front: 'Sustained',
        back: `Appears across multiple bands. Means the quality is maintained consistently from beginning to end.\n\nA "sustained" argument does not lose focus after two paragraphs.\nA "sustained" narrative does not lose control of tone halfway through.\n"Sustained" accuracy means few errors throughout, not just at the start.\n\nCommon mistake: Students write a strong opening then lose quality as they rush. Plan your time so the final paragraphs are as strong as the first.`,
      },
      {
        id: 'emsv2-9',
        front: 'Apt',
        back: `Grade 7–9 (Band 4–5) descriptor for subject terminology and evidence.\n\nMeaning: Appropriate, fitting, precisely right for the context.\n\n"Apt terminology" = using exactly the right technical term at the right moment (not forcing in terms that do not fit).\n"Apt references" = choosing evidence that precisely supports your specific point.\n\nThe opposite of "apt" is "forced" — do not name a technique just to show you know it. Only use terminology that genuinely aids your analysis.`,
      },
      {
        id: 'emsv2-10',
        front: 'Discerning',
        back: `Grade 8–9 (Band 5) descriptor.\n\nMeaning: Showing the ability to judge quality and distinguish subtle differences.\n\nA "discerning" reader notices that a writer\'s tone shifts from resigned to defiant — not just that "the writer is emotional."\n\nA "discerning" writer makes subtle choices: the difference between "said" and "murmured," between a full stop and a dash.\n\nDiscernment = noticing and articulating what is fine-grained and nuanced.`,
      },
      {
        id: 'emsv2-11',
        front: 'Coherent',
        back: `Grade 4–6 (Band 3) writing descriptor for organisation.\n\nMeaning: Ideas are logically connected and the text makes sense as a whole.\n\nHow to achieve it:\n• Use discourse markers (however, furthermore, consequently).\n• One clear topic per paragraph.\n• Link conclusion back to introduction.\n\nCoherent is necessary but not sufficient for top marks. A text can be coherent and dull. Aim for coherent AND compelling.`,
      },
      {
        id: 'emsv2-12',
        front: 'Tentative',
        back: `Grade 1–3 (Band 1–2) descriptor.\n\nMeaning: Uncertain, vague, undeveloped. The student gestures at an idea but does not commit to it or develop it.\n\nExample of tentative analysis: "The writer uses a metaphor which is effective."\n\nTo avoid being tentative:\n• Develop every point fully.\n• Use evidence to support every claim.\n• Explain effects specifically — "effective" is not analysis.\n• Commit to your interpretation — do not hedge with "maybe" or "might."`,
      },
      {
        id: 'emsv2-13',
        front: 'Crafted',
        back: `Grade 8–9 (Band 5) writing descriptor.\n\nMeaning: Writing that shows deliberate, skilled construction at every level — word choice, sentence structure, paragraphing, overall shape.\n\n"Crafted" writing reads as literary, not merely competent. The marker senses that every choice was intentional.\n\nHow to achieve it: After writing, re-read and refine. Change a word for a better one. Split a long sentence for impact. Move a paragraph for better flow. This revision process IS craft.`,
      },
      {
        id: 'emsv2-14',
        front: 'Integrated',
        back: `Grade 7–9 (Band 4–5) descriptor, especially for comparison responses.\n\nMeaning: Ideas from different texts are woven together, not treated in separate blocks.\n\nFor Paper 1 Q4: Do NOT write all about Source A, then all about Source B. Each paragraph should discuss BOTH texts around a shared point.\n\nStructure: "Both writers [shared technique/idea]. Source A achieves this through [method], whereas Source B [contrasting method]."`,
      },
      {
        id: 'emsv2-15',
        front: 'Band Progression Summary',
        back: `Band 1 (Grade 1–2): Simple, tentative, limited.\nBand 2 (Grade 3): Attempts, some relevant comment.\nBand 3 (Grade 4–5): Clear, credible, coherent, relevant.\nBand 4 (Grade 6–7): Convincing, assured, well-chosen evidence.\nBand 5 (Grade 8–9): Perceptive, discerning, judicious, compelling, crafted.\n\nThe jump from Band 3 to Band 4 requires DEPTH of analysis.\nThe jump from Band 4 to Band 5 requires ORIGINALITY and PRECISION.`,
      },
    ],
  },
  {
    id: 'edexcel-1en2-exam-technique',
    title: 'Edexcel Exam Technique',
    description:
      'Question-specific strategies, timing, and mark allocations for every question on Edexcel 1EN2 Papers 1 and 2',
    category: 'gcse',
    board: 'Edexcel',
    cards: [
      {
        id: 'eet2-1',
        front: 'Paper 1 Timing Strategy (1 hour 45 mins)',
        back: `Total: 105 minutes for 80 marks.\n\nRecommended split:\n• Read both sources: 10 minutes\n• Q1 (4 marks): 5 minutes\n• Q2 (8 marks): 10 minutes\n• Q3 (12 marks): 15 minutes\n• Q4 (16 marks): 20 minutes\n• Q5 (40 marks): 45 minutes (5 plan + 35 write + 5 check)\n\nGolden rule: 1 minute per mark. Never spend 20 minutes on a 4-mark question. Protect your Q5 time — it is worth HALF the paper.`,
      },
      {
        id: 'eet2-2',
        front: 'Paper 2 Timing Strategy (2 hours 5 mins)',
        back: `Total: 125 minutes for 80 marks.\n\nRecommended split:\n• Read the fiction extract: 10–15 minutes (it is longer than Paper 1 sources)\n• Q1 (4 marks): 5 minutes\n• Q2 (8 marks): 10 minutes\n• Q3 (12 marks): 15 minutes\n• Q4 (16 marks): 20 minutes\n• Q5 (40 marks): 55 minutes (5 plan + 45 write + 5 check)\n\nYou have 20 extra minutes compared to Paper 1. Use them for careful reading and extended creative writing.`,
      },
      {
        id: 'eet2-3',
        front: 'Paper 1 Q1 — Information Retrieval (4 marks, AO1)',
        back: `Task: Identify 4 pieces of information from ONE specified source.\n\nStrategy:\n• Read the question to find which source and which lines.\n• Give 4 short, distinct points — one per mark.\n• Use your own words or direct reference.\n• No analysis needed — this is pure comprehension.\n\nTiming: 5 minutes maximum.\nCommon mistake: Writing too much. Brief, accurate points are all that is needed.`,
      },
      {
        id: 'eet2-4',
        front: 'Paper 1 Q2 — Synthesis (8 marks, AO1)',
        back: `Task: Use BOTH sources to explain similarities or differences on a given topic.\n\nStrategy:\n• Make 3–4 developed comparative points.\n• Each point MUST reference both sources.\n• Infer — go beyond surface information.\n• Use connectives: "Similarly," "Both writers suggest," "In contrast."\n\nStructure per point: Inference from Source A → supporting evidence → link to Source B → supporting evidence → brief development.\n\nTiming: 10 minutes.`,
      },
      {
        id: 'eet2-5',
        front: 'Paper 1 Q3 — Language Analysis (12 marks, AO2)',
        back: `Task: Analyse how the writer uses language to [specific effect] in ONE source.\n\nStrategy:\n• Write 3–4 detailed PEAL paragraphs.\n• P = Point about effect. E = Embedded quote (short). A = Analyse technique and word choice. L = Link to reader\'s response.\n• Zoom into INDIVIDUAL WORDS — do not just quote a whole sentence.\n• Name techniques only when it aids analysis.\n\nTiming: 15 minutes.\nKey: Always explain EFFECT. "The writer uses alliteration" = 0 marks without explaining WHY it matters.`,
      },
      {
        id: 'eet2-6',
        front: "Paper 1 Q4 — Compare Writers' Methods (16 marks, AO2 + AO3)",
        back: `Task: Compare how both writers convey their perspectives on a given theme.\n\nStrategy:\n• 4–5 integrated comparative paragraphs.\n• Each paragraph: comparative topic sentence → Source A analysis → comparative connective → Source B analysis → evaluation of difference/similarity.\n• Compare METHODS (language, structure, tone) not just IDEAS.\n• Address both micro (word choice) and macro (structure, form, purpose).\n\nTiming: 20 minutes.\nThis is the highest-mark reading question. Give it the attention it deserves.`,
      },
      {
        id: 'eet2-7',
        front: 'Paper 1 Q5 — Transactional Writing (40 marks, AO5 + AO6)',
        back: `Task: Write in a specified form (letter, article, speech, review, blog, report, guide, email) to argue, persuade, advise, or inform.\n\nStrategy:\n1. PLAN (5 mins): Purpose, audience, form, 4–5 key points, opening hook, closing statement.\n2. WRITE (35 mins): Match register to audience. Use rhetorical devices purposefully. Paragraph clearly. Vary sentences.\n3. CHECK (5 mins): Spelling, punctuation, sentence clarity.\n\nForm conventions matter: A speech needs direct address and rhetorical flourish. A letter needs addresses and sign-off. An article needs a headline.\n\n24 marks for content/organisation + 16 marks for accuracy = your biggest single mark allocation.`,
      },
      {
        id: 'eet2-8',
        front: 'Paper 2 Q1 — Information Retrieval (4 marks, AO1)',
        back: `Task: Identify 4 pieces of information from the fiction extract.\n\nStrategy:\n• Read the question to find which section of the extract.\n• Give 4 short, distinct points.\n• These can be one sentence each.\n• No analysis — just accurate comprehension.\n\nTiming: 5 minutes maximum.\nTip: This is the easiest question on the paper. Get 4/4 and move on quickly.`,
      },
      {
        id: 'eet2-9',
        front: 'Paper 2 Q2 — Summary/Synthesis (8 marks, AO1)',
        back: `Task: Summarise key aspects from the text(s) on a specific topic.\n\nStrategy:\n• Make 3–4 clear points with evidence.\n• Infer beyond the literal — what is implied?\n• Keep quotes short and embedded.\n• If comparing two texts, use comparative connectives.\n\nTiming: 10 minutes.\nKey difference from Q1: Q2 requires INFERENCE and DEVELOPMENT, not just retrieval. A point without development earns half marks.`,
      },
      {
        id: 'eet2-10',
        front: 'Paper 2 Q3 — Language and Structure Analysis (12 marks, AO2)',
        back: `Task: Analyse how the writer uses language AND structure to create effects in the fiction extract.\n\nStrategy:\n• Cover BOTH language and structure — ignoring either caps your mark.\n• Language: word choice, imagery, figurative language, tone, dialogue.\n• Structure: opening, shifts in focus/pace/tone, narrative perspective, paragraph length, ending.\n• Write 3–4 detailed paragraphs with embedded quotations.\n\nTiming: 15 minutes.\nTop tip: One paragraph on structure minimum. Comment on WHERE in the extract something happens and WHY the writer places it there.`,
      },
      {
        id: 'eet2-11',
        front: 'Paper 2 Q4 — Critical Evaluation (16 marks, AO2 + AO4)',
        back: `Task: Evaluate how effectively the writer achieves a specific effect. You are given a statement and asked how far you agree.\n\nStrategy:\n• Write 4–5 paragraphs.\n• Each paragraph: state your evaluative judgement → provide evidence → analyse how the technique creates the effect → evaluate its success.\n• Use evaluative language throughout: "effectively," "convincingly," "powerfully," "less successfully."\n• You CAN partially disagree — nuance shows critical thinking.\n\nTiming: 20 minutes.\nCritical: This is NOT just analysis. You must JUDGE effectiveness. Every paragraph needs an evaluative statement.`,
      },
      {
        id: 'eet2-12',
        front: 'Paper 2 Q5 — Imaginative Writing (40 marks, AO5 + AO6)',
        back: `Task: Write a narrative or descriptive piece, often linked to an image or theme prompt.\n\nStrategy:\n1. PLAN (5 mins): Character, setting, conflict, 5-part structure (opening → build → shift → climax → resolution), ending.\n2. WRITE (45 mins): Choose a SMALL moment. Write it in DEPTH. Show, don\'t tell. Use sensory detail (3+ senses). Vary sentences. Use a structural device (cyclical, flashback, zoom in/out).\n3. CHECK (5 mins): Spelling, punctuation, sentence boundaries.\n\nGolden rule: A vivid, controlled 1.5 pages beats a rushed, sprawling 3 pages. Quality over quantity.`,
      },
      {
        id: 'eet2-13',
        front: 'How to Embed Quotations Effectively',
        back: `Embedding = weaving quotes into your own sentences so they read grammatically.\n\nWeak: The writer says "the bitter wind howled." This shows the wind is strong.\nStrong: The "bitter wind" that "howled" creates a hostile atmosphere, with "bitter" connoting resentment and suffering.\n\nRules:\n• Keep quotes SHORT (2–5 words).\n• Zoom into individual words within the quote for deeper analysis.\n• Your sentence must read fluently with the quote inside it.\n• Use quotation marks accurately.\n\nThis single skill separates Band 3 from Band 4 responses.`,
      },
      {
        id: 'eet2-14',
        front: 'Planning Transactional Writing (Paper 1 Q5)',
        back: `Spend 5 minutes planning. This is NOT wasted time — it prevents rambling.\n\nPlan format:\n1. Purpose: argue / persuade / advise / inform\n2. Audience: who am I writing to? (determines register)\n3. Form: letter / article / speech / review / blog / report\n4. Key points: 4–5 arguments or ideas (one per paragraph)\n5. Opening: hook — statistic, question, bold statement, anecdote\n6. Closing: call to action, circular reference to opening, powerful final line\n\nA planned essay with 4 strong points beats an unplanned essay with 7 weak ones.`,
      },
      {
        id: 'eet2-15',
        front: 'Planning Imaginative Writing (Paper 2 Q5)',
        back: `Spend 5 minutes planning. Choose SMALL and go DEEP.\n\nPlan format:\n1. Scenario: one scene, one moment, one character\n2. Setting: 3 sensory details to establish atmosphere\n3. Structure: opening → build tension → shift/turning point → climax → resolution\n4. Motif: one image or idea to repeat and develop\n5. Ending: how does it resolve? Echo the opening for cyclical structure.\n\nDo NOT try to tell a whole life story. The best responses zoom into 10 minutes of a character\'s life and make the reader FEEL it.`,
      },
      {
        id: 'eet2-16',
        front: 'The 19th-Century Source — How to Approach It',
        back: `Paper 1 always includes a 19th-century non-fiction text. Do not be intimidated.\n\nStrategy:\n1. Read it TWICE — once for gist, once for detail.\n2. Expect formal, complex sentences with subordinate clauses — this is normal.\n3. If a word is unfamiliar, infer from context.\n4. Consider the CONTEXT: industrialisation, empire, class, gender, religion, reform.\n5. Remember the writer\'s PURPOSE — 19th-century non-fiction was often written to campaign, argue, or persuade.\n\nThe 19th-century text is often richer for analysis than the modern source. Engage with it fully.`,
      },
      {
        id: 'eet2-17',
        front: 'Common Mistakes and How to Avoid Them',
        back: `1. Feature-spotting: "The writer uses alliteration" — SO WHAT? Always explain the effect.\n2. Retelling: Do not narrate what happens. Analyse HOW and WHY the writer creates effects.\n3. Running out of time on Q5: Writing = 50% of the paper. Set a timer and protect writing time.\n4. Ignoring structure: Language-only analysis caps your mark on Paper 2 Q3. Always discuss structural choices.\n5. Wrong form conventions: A speech without direct address. A letter without a sign-off. Check your form.\n6. Single-word quotes only: Zoom in on words, but also quote phrases to show you understand context.\n7. No proofreading: 5 minutes of checking can gain 3–4 marks in AO6. Always leave time.`,
      },
      {
        id: 'eet2-18',
        front: 'Upgrading Your Analytical Vocabulary',
        back: `Replace generic words with precise analytical terms:\n\n• "shows" → "conveys," "implies," "suggests," "reveals," "foregrounds"\n• "the reader feels sad" → "evokes pathos," "elicits sympathy," "creates a sombre mood"\n• "is effective" → "is compelling," "resonates with the reader," "achieves its purpose"\n• "a good description" → "evocative imagery," "visceral sensory detail"\n• "the writer talks about" → "the writer interrogates," "the writer foregrounds," "the writer confronts"\n• "this is interesting" → NEVER write this. Explain WHY it is interesting.\n\nPrecise vocabulary signals Band 4–5 analysis to the marker.`,
      },
    ],
  },
  {
    id: 'macbeth-quotes',
    title: 'Macbeth — Key Quotations',
    description: '30 key quotations covering all major characters and themes',
    category: 'Literature',
    board: 'All',
    cards: [
      {
        id: 'mq-1',
        front: '"Fair is foul, and foul is fair"',
        back: `Speaker: The Witches (Act 1, Scene 1)\n\nMeaning: What appears good is actually evil and vice versa. Sets the moral confusion of the entire play.\n\nTechniques: Chiasmus, paradox, antithesis.\n\nThemes: Appearance vs reality, the supernatural, moral disorder.\n\nExam point: This opening line establishes the play\'s central motif — that nothing in Macbeth\'s world can be trusted at face value, and Shakespeare uses the Witches to collapse the boundary between good and evil from the very first scene.`,
      },
      {
        id: 'mq-2',
        front: '"Stars, hide your fires"',
        back: `Speaker: Macbeth (Act 1, Scene 4)\n\nMeaning: Macbeth wants darkness to conceal his murderous ambitions from the world and from himself.\n\nTechniques: Apostrophe (addressing the stars), imperative, symbolism (stars = morality/divine order; darkness = evil).\n\nThemes: Ambition, appearance vs reality, light vs dark.\n\nExam point: Macbeth actively invites darkness, showing that his ambition is already corrupting him before any supernatural intervention — he chooses to hide from his own conscience.`,
      },
      {
        id: 'mq-3',
        front: '"Look like th\'innocent flower, but be the serpent under\'t"',
        back: `Speaker: Lady Macbeth to Macbeth (Act 1, Scene 5)\n\nMeaning: She instructs him to appear innocent while concealing murderous intent.\n\nTechniques: Simile, juxtaposition (flower vs serpent), biblical allusion (serpent = Satan in Eden).\n\nThemes: Appearance vs reality, deception, gender roles.\n\nExam point: Lady Macbeth takes the role of tempter, echoing the serpent of Genesis; Shakespeare positions her as the driving force behind Duncan\'s murder, subverting Jacobean expectations of feminine passivity.`,
      },
      {
        id: 'mq-4',
        front: '"Unsex me here"',
        back: `Speaker: Lady Macbeth (Act 1, Scene 5)\n\nMeaning: She calls on dark spirits to strip away her femininity so she can be ruthless enough to help murder Duncan.\n\nTechniques: Imperative, invocation, soliloquy.\n\nThemes: Gender roles, the supernatural, ambition, power.\n\nExam point: Shakespeare uses Lady Macbeth to challenge Jacobean gender norms — she believes cruelty is inherently masculine, and must reject her womanhood to act. This also foreshadows her psychological collapse, as the guilt she suppresses here later destroys her.`,
      },
      {
        id: 'mq-5',
        front: '"Is this a dagger which I see before me"',
        back: `Speaker: Macbeth (Act 2, Scene 1)\n\nMeaning: Macbeth hallucinates a dagger leading him toward Duncan\'s chamber, questioning his own sanity.\n\nTechniques: Rhetorical question, soliloquy, hallucination/symbolism.\n\nThemes: Guilt, the supernatural, ambition, psychological torment.\n\nExam point: The dagger symbolises Macbeth\'s wavering conscience — he cannot tell reality from illusion, suggesting guilt is already fracturing his mind before the murder is even committed.`,
      },
      {
        id: 'mq-6',
        front: '"Will all great Neptune\'s ocean wash this blood clean from my hand?"',
        back: `Speaker: Macbeth (Act 2, Scene 2)\n\nMeaning: Macbeth believes no amount of water can cleanse his guilt after killing Duncan.\n\nTechniques: Rhetorical question, hyperbole, allusion (Neptune = Roman god of the sea).\n\nThemes: Guilt, violence, moral corruption.\n\nExam point: The blood imagery recurs throughout the play as an ever-deepening symbol of guilt; here Macbeth recognises his sin is permanent, yet he continues to kill — showing ambition overpowers even unbearable remorse.`,
      },
      {
        id: 'mq-7',
        front: '"A little water clears us of this deed"',
        back: `Speaker: Lady Macbeth (Act 2, Scene 2)\n\nMeaning: She dismisses the murder as something easily concealed, contrasting sharply with Macbeth\'s despair.\n\nTechniques: Juxtaposition with Macbeth\'s "Neptune\'s ocean" line, understatement, irony.\n\nThemes: Guilt, appearance vs reality, gender roles.\n\nExam point: This line is deeply ironic given her later sleepwalking scene where she obsessively washes her hands — Shakespeare shows guilt cannot be suppressed forever, and her rational facade crumbles completely by Act 5.`,
      },
      {
        id: 'mq-8',
        front: '"O, full of scorpions is my mind"',
        back: `Speaker: Macbeth (Act 3, Scene 2)\n\nMeaning: Macbeth reveals his tormented psychological state — paranoia and guilt consume him.\n\nTechniques: Metaphor, exclamatory, imagery of poison/danger.\n\nThemes: Guilt, psychological torment, consequences of ambition.\n\nExam point: The scorpion metaphor suggests Macbeth\'s thoughts are venomous and self-destructive — his mind has become a prison of his own making, and the crown he fought for brings only suffering, not satisfaction.`,
      },
      {
        id: 'mq-9',
        front: '"Blood will have blood"',
        back: `Speaker: Macbeth (Act 3, Scene 4)\n\nMeaning: Violence begets more violence — murder demands retribution.\n\nTechniques: Proverbial language, repetition, foreshadowing.\n\nThemes: Violence, guilt, fate, the natural order.\n\nExam point: Macbeth recognises the cycle of violence he has entered but feels powerless to stop it; Shakespeare presents tyranny as self-perpetuating — each murder necessitates the next, trapping Macbeth in escalating bloodshed.`,
      },
      {
        id: 'mq-10',
        front: '"I am in blood stepp\'d in so far"',
        back: `Speaker: Macbeth (Act 3, Scene 4)\n\nMeaning: He has committed so many murders that turning back is as difficult as continuing.\n\nTechniques: Extended metaphor (wading through a river of blood), imagery.\n\nThemes: Guilt, moral corruption, the point of no return.\n\nExam point: This is Macbeth\'s moral nadir — he no longer agonises over right and wrong but calculates effort. Shakespeare shows how repeated sin erodes conscience until evil becomes the path of least resistance.`,
      },
      {
        id: 'mq-11',
        front: '"Double, double toil and trouble"',
        back: `Speaker: The Witches (Act 4, Scene 1)\n\nMeaning: The Witches chant as they brew their potion, summoning chaos and destruction.\n\nTechniques: Rhyming couplets, incantation, trochaic tetrameter (disrupts iambic pentameter).\n\nThemes: The supernatural, chaos, fate.\n\nExam point: Shakespeare gives the Witches a distinct, abnormal metre to set them apart from the human world — their broken rhythm reflects the disorder they bring, and would have terrified a Jacobean audience who believed in witchcraft.`,
      },
      {
        id: 'mq-12',
        front: '"Out, damned spot!"',
        back: `Speaker: Lady Macbeth (Act 5, Scene 1)\n\nMeaning: While sleepwalking, she hallucinates blood on her hands that she cannot wash away.\n\nTechniques: Exclamatory, symbolism (blood = guilt), dramatic irony (recalls "a little water" in Act 2).\n\nThemes: Guilt, madness, consequences of ambition.\n\nExam point: Shakespeare\'s dramatic irony is devastating — the woman who dismissed guilt so easily is now destroyed by it. Her sleepwalking reveals the subconscious truth she tried to repress, showing guilt is inescapable.`,
      },
      {
        id: 'mq-13',
        front: '"What\'s done cannot be undone"',
        back: `Speaker: Lady Macbeth (Act 5, Scene 1)\n\nMeaning: In her madness, she acknowledges the irreversibility of their crimes.\n\nTechniques: Dramatic irony (echoes her earlier "what\'s done is done" from Act 3), proverbial language.\n\nThemes: Guilt, fate, consequences.\n\nExam point: The shift from "what\'s done is done" (dismissive) to "what\'s done cannot be undone" (despairing) tracks Lady Macbeth\'s complete psychological collapse — Shakespeare shows guilt transforming certainty into hopelessness.`,
      },
      {
        id: 'mq-14',
        front: '"By the pricking of my thumbs, something wicked this way comes"',
        back: `Speaker: Second Witch (Act 4, Scene 1)\n\nMeaning: The Witches sense Macbeth approaching — even they call him "wicked."\n\nTechniques: Rhyming couplet, foreshadowing, dramatic irony.\n\nThemes: The supernatural, moral corruption, evil.\n\nExam point: When even the agents of darkness call Macbeth "wicked," Shakespeare signals his complete moral fall — he has surpassed his corrupters, becoming more evil than the supernatural forces that tempted him.`,
      },
      {
        id: 'mq-15',
        front: '"Yet do I fear thy nature; it is too full o\' th\' milk of human kindness"',
        back: `Speaker: Lady Macbeth (Act 1, Scene 5)\n\nMeaning: She fears Macbeth is too compassionate to seize the crown through murder.\n\nTechniques: Metaphor (milk = nurture, innocence), soliloquy.\n\nThemes: Gender roles, ambition, masculinity.\n\nExam point: Lady Macbeth equates kindness with weakness and masculinity with violence — Shakespeare exposes the toxic expectations she places on Macbeth, which ultimately drive both characters to destruction.`,
      },
      {
        id: 'mq-16',
        front: '"So foul and fair a day I have not seen"',
        back: `Speaker: Macbeth (Act 1, Scene 3)\n\nMeaning: Macbeth unknowingly echoes the Witches\' words, linking himself to their dark influence.\n\nTechniques: Dramatic irony, paradox, echoing.\n\nThemes: The supernatural, fate vs free will, appearance vs reality.\n\nExam point: Shakespeare connects Macbeth to the Witches before they even meet on stage, suggesting he is already predisposed to evil — raising the question of whether the Witches create his ambition or merely awaken what already exists.`,
      },
      {
        id: 'mq-17',
        front: '"There\'s no art to find the mind\'s construction in the face"',
        back: `Speaker: King Duncan (Act 1, Scene 4)\n\nMeaning: You cannot tell what someone is thinking by looking at their face.\n\nTechniques: Dramatic irony (he is about to trust Macbeth, who will murder him), proverbial.\n\nThemes: Appearance vs reality, trust, kingship.\n\nExam point: Duncan\'s inability to read treachery makes him a poor judge of character — Shakespeare uses this to show that goodness alone is insufficient for a king; Duncan\'s trusting nature is a fatal flaw in a world of deception.`,
      },
      {
        id: 'mq-18',
        front: '"When you durst do it, then you were a man"',
        back: `Speaker: Lady Macbeth to Macbeth (Act 1, Scene 7)\n\nMeaning: She questions his masculinity to manipulate him into committing the murder.\n\nTechniques: Manipulation, conditional clause, challenging tone.\n\nThemes: Gender roles, masculinity, power, ambition.\n\nExam point: Lady Macbeth weaponises Jacobean ideas of manhood to control Macbeth — Shakespeare shows how toxic masculinity becomes a tool of manipulation, and Macbeth\'s need to prove himself "a man" leads directly to regicide.`,
      },
      {
        id: 'mq-19',
        front: '"Macbeth does murder sleep"',
        back: `Speaker: Macbeth (Act 2, Scene 2)\n\nMeaning: After killing Duncan, Macbeth hears a voice declaring he has murdered sleep itself — he will never rest peacefully again.\n\nTechniques: Personification, symbolism (sleep = innocence, peace, natural order).\n\nThemes: Guilt, the natural order, consequences.\n\nExam point: Sleep represents the innocent conscience Macbeth has destroyed; Shakespeare uses insomnia as a physical manifestation of guilt that haunts both Macbeths — he cannot sleep, she sleepwalks.`,
      },
      {
        id: 'mq-20',
        front: '"Thou canst not say I did it. Never shake thy gory locks at me"',
        back: `Speaker: Macbeth to Banquo\'s ghost (Act 3, Scene 4)\n\nMeaning: Macbeth is terrified by Banquo\'s ghost at the banquet and tries to deny responsibility.\n\nTechniques: Dramatic irony (the guests cannot see the ghost), imperative, apostrophe.\n\nThemes: Guilt, the supernatural, consequences of violence.\n\nExam point: The ghost may be a supernatural visitation or a projection of Macbeth\'s guilt — either way, Shakespeare shows that Macbeth\'s crimes cannot be hidden; his public breakdown reveals the tyrant\'s inner collapse.`,
      },
      {
        id: 'mq-21',
        front: '"Life\'s but a walking shadow, a poor player"',
        back: `Speaker: Macbeth (Act 5, Scene 5)\n\nMeaning: Upon hearing of Lady Macbeth\'s death, Macbeth declares life is meaningless — like a bad actor on stage.\n\nTechniques: Metaphor, nihilism, meta-theatrical imagery.\n\nThemes: Fate, mortality, meaninglessness, despair.\n\nExam point: Shakespeare gives Macbeth a moment of tragic self-awareness — he recognises that his ambition has led to nothing. The theatre metaphor is especially powerful as the audience watches an actor playing a man who compares life to acting.`,
      },
      {
        id: 'mq-22',
        front: '"It is a tale told by an idiot, full of sound and fury, signifying nothing"',
        back: `Speaker: Macbeth (Act 5, Scene 5)\n\nMeaning: Life is a meaningless story — full of noise but ultimately empty.\n\nTechniques: Metaphor, nihilistic tone, plosive sounds ("told," "tale," "fury").\n\nThemes: Meaninglessness, despair, mortality.\n\nExam point: This is Macbeth\'s darkest conclusion — his pursuit of power has drained life of all meaning. Shakespeare presents this as the inevitable end of unchecked ambition: not glory, but existential emptiness.`,
      },
      {
        id: 'mq-23',
        front: '"I have no spur to prick the sides of my intent"',
        back: `Speaker: Macbeth (Act 1, Scene 7)\n\nMeaning: Macbeth admits the only thing driving him to murder is "vaulting ambition" — he has no moral justification.\n\nTechniques: Extended metaphor (horse-riding), soliloquy.\n\nThemes: Ambition, moral conflict, free will.\n\nExam point: This soliloquy is crucial because Macbeth rationally lists every reason NOT to kill Duncan and finds only ambition as a motive — Shakespeare shows the murder is a conscious, unjustifiable choice, not fate.`,
      },
      {
        id: 'mq-24',
        front: '"Nought\'s had, all\'s spent, where our desire is got without content"',
        back: `Speaker: Lady Macbeth (Act 3, Scene 2)\n\nMeaning: They have gained everything they wanted but find no happiness — it was all for nothing.\n\nTechniques: Antithesis ("had" / "spent"), rhyming couplet, paradox.\n\nThemes: Ambition, dissatisfaction, consequences.\n\nExam point: Lady Macbeth articulates the play\'s central moral — ambition achieved through evil brings no fulfilment. Shakespeare uses her private admission to contrast with her public confidence, showing the cracks forming early.`,
      },
      {
        id: 'mq-25',
        front: '"He\'s here in double trust"',
        back: `Speaker: Macbeth (Act 1, Scene 7)\n\nMeaning: Macbeth acknowledges Duncan trusts him as both his kinsman and his host — making the murder doubly treacherous.\n\nTechniques: Dramatic irony, soliloquy.\n\nThemes: Loyalty, betrayal, kingship, the natural order.\n\nExam point: Macbeth\'s awareness of Duncan\'s trust makes his crime even more horrific — Shakespeare emphasises that this is not ignorant evil but deliberate betrayal of sacred bonds of kinship and hospitality.`,
      },
      {
        id: 'mq-26',
        front: '"The instruments of darkness tell us truths"',
        back: `Speaker: Banquo (Act 1, Scene 3)\n\nMeaning: Banquo warns that evil forces use partial truths to lead people to destruction.\n\nTechniques: Metaphor ("instruments of darkness"), foreshadowing.\n\nThemes: The supernatural, appearance vs reality, fate vs free will.\n\nExam point: Banquo serves as Macbeth\'s moral foil — he hears the same prophecy but chooses caution over action. Shakespeare uses Banquo to show that the Witches\' power lies in manipulation, not compulsion.`,
      },
      {
        id: 'mq-27',
        front: '"I dare do all that may become a man"',
        back: `Speaker: Macbeth to Lady Macbeth (Act 1, Scene 7)\n\nMeaning: Macbeth argues that true manhood means knowing the limits of acceptable behaviour.\n\nTechniques: Declarative, defining statement.\n\nThemes: Masculinity, honour, moral boundaries.\n\nExam point: Macbeth briefly offers a healthier vision of masculinity — one defined by restraint, not violence. Shakespeare shows this moral clarity is quickly overwhelmed by Lady Macbeth\'s manipulation, suggesting societal pressure overrides individual conscience.`,
      },
      {
        id: 'mq-28',
        front: '"O, O, O!"',
        back: `Speaker: Lady Macbeth (Act 5, Scene 1)\n\nMeaning: Lady Macbeth\'s anguished cries during her sleepwalking — language has failed her.\n\nTechniques: Exclamatory, fragmentation, non-verbal expression.\n\nThemes: Guilt, madness, the collapse of control.\n\nExam point: The woman who commanded language so powerfully in Act 1 is reduced to incoherent moaning — Shakespeare shows guilt has stripped her of the eloquence that was her greatest weapon, mirroring her total psychological disintegration.`,
      },
      {
        id: 'mq-29',
        front: '"This dead butcher and his fiend-like queen"',
        back: `Speaker: Malcolm (Act 5, Scene 8)\n\nMeaning: Malcolm dismisses Macbeth as a mere butcher and Lady Macbeth as a devil.\n\nTechniques: Epithet, reductive language, political rhetoric.\n\nThemes: Kingship, legacy, justice.\n\nExam point: Malcolm\'s verdict is politically convenient but reductive — Shakespeare invites the audience to question this summary. We have seen Macbeth\'s conscience and Lady Macbeth\'s suffering; they are more complex than "butcher" and "fiend," making this a statement about how history simplifies.`,
      },
      {
        id: 'mq-30',
        front: '"Screw your courage to the sticking-place"',
        back: `Speaker: Lady Macbeth (Act 1, Scene 7)\n\nMeaning: She tells Macbeth to tighten his resolve — commit fully to the murder.\n\nTechniques: Metaphor (from crossbow mechanics — winding to full tension), imperative.\n\nThemes: Ambition, manipulation, gender roles.\n\nExam point: Lady Macbeth uses a mechanical metaphor to reduce murder to a practical task — Shakespeare shows her ability to strip moral weight from violence, making the unthinkable feel like simple determination.`,
      },
    ],
  },
  {
    id: 'romeo-juliet-quotes',
    title: 'Romeo & Juliet — Key Quotations',
    description: '30 key quotations covering all major characters and themes',
    category: 'Literature',
    board: 'All',
    cards: [
      {
        id: 'rj-1',
        front: '"Two households, both alike in dignity"',
        back: `Speaker: Chorus / Prologue\n\nMeaning: Two equally noble families are locked in a feud. The Prologue reveals the lovers will die, framing the play as inevitable tragedy.\n\nTechniques: Sonnet form, dramatic irony, foreshadowing ("star-cross\'d lovers").\n\nThemes: Fate, conflict, family/honour.\n\nExam point: Shakespeare removes suspense by revealing the ending upfront — the audience watches knowing the lovers are doomed, creating dramatic irony that makes every hopeful moment painful.`,
      },
      {
        id: 'rj-2',
        front: '"O brawling love, O loving hate"',
        back: `Speaker: Romeo (Act 1, Scene 1)\n\nMeaning: Romeo describes the confusing contradictions of love using a string of oxymorons.\n\nTechniques: Oxymoron, antithesis, exclamatory.\n\nThemes: Love, conflict, confusion.\n\nExam point: Romeo\'s oxymorons reflect the play\'s central paradox — love and hate are inseparable in Verona. Shakespeare establishes early that love in this world is bound up with violence, foreshadowing the tragic outcome.`,
      },
      {
        id: 'rj-3',
        front: '"Did my heart love till now?"',
        back: `Speaker: Romeo (Act 1, Scene 5)\n\nMeaning: Upon seeing Juliet for the first time, Romeo questions whether he has ever truly loved before.\n\nTechniques: Rhetorical question, volta (turning point from Rosaline to Juliet).\n\nThemes: Love at first sight, the nature of love.\n\nExam point: Shakespeare uses this rhetorical question to mark Romeo\'s transformation — his love for Rosaline was performative and conventional, but Juliet provokes genuine feeling. However, the speed of this shift also suggests Romeo\'s love is impulsive.`,
      },
      {
        id: 'rj-4',
        front: '"But soft, what light through yonder window breaks?"',
        back: `Speaker: Romeo (Act 2, Scene 2 — the balcony scene)\n\nMeaning: Romeo sees Juliet at her window and compares her to the rising sun.\n\nTechniques: Light imagery, metaphor (Juliet = sun), soliloquy.\n\nThemes: Love, light vs dark, idealism.\n\nExam point: Shakespeare associates Juliet with celestial light throughout the play — she is Romeo\'s source of illumination in a dark world. This imagery also makes her death more devastating: when Juliet dies, Romeo\'s light is extinguished.`,
      },
      {
        id: 'rj-5',
        front: '"What\'s in a name?"',
        back: `Speaker: Juliet (Act 2, Scene 2)\n\nMeaning: Juliet argues that names are arbitrary labels — Romeo is still the same person regardless of being a Montague.\n\nTechniques: Rhetorical question, philosophical argument.\n\nThemes: Identity, family/honour, love vs society.\n\nExam point: Juliet shows more intellectual maturity than Romeo here — she rationally deconstructs the feud\'s logic. Shakespeare uses her to expose the absurdity of the conflict: the hatred is based on a name, not any real difference.`,
      },
      {
        id: 'rj-6',
        front: '"A rose by any other name would smell as sweet"',
        back: `Speaker: Juliet (Act 2, Scene 2)\n\nMeaning: A name does not change the nature of a thing — Romeo would be just as worthy if he were not called Montague.\n\nTechniques: Metaphor, analogy, symbolism (rose = beauty, love).\n\nThemes: Identity, love, the superficiality of the feud.\n\nExam point: Shakespeare uses natural imagery to argue that love is organic and real, while names and feuds are artificial constructs — yet these constructs ultimately destroy the lovers, showing society\'s power over the individual.`,
      },
      {
        id: 'rj-7',
        front: '"These violent delights have violent ends"',
        back: `Speaker: Friar Lawrence (Act 2, Scene 6)\n\nMeaning: Passionate, intense love can lead to destruction — he warns the lovers to be moderate.\n\nTechniques: Foreshadowing, antithesis, proverbial wisdom.\n\nThemes: Fate, love and death, haste.\n\nExam point: Friar Lawrence acts as a choric voice, articulating the play\'s moral. Shakespeare uses him to warn that the lovers\' intensity — their "violent delights" — carries the seeds of its own destruction, linking passion directly to death.`,
      },
      {
        id: 'rj-8',
        front: '"My only love sprung from my only hate"',
        back: `Speaker: Juliet (Act 1, Scene 5)\n\nMeaning: Juliet discovers Romeo is a Montague — the one person she loves belongs to the family she should hate.\n\nTechniques: Antithesis (love/hate), rhyming couplet, dramatic irony.\n\nThemes: Love vs hate, fate, conflict.\n\nExam point: This rhyming couplet crystallises the play\'s central tension — love and hate are born from the same source. Shakespeare makes the audience feel the cruel irony: in any other circumstances, this love would be celebrated.`,
      },
      {
        id: 'rj-9',
        front: '"O, I am fortune\'s fool!"',
        back: `Speaker: Romeo (Act 3, Scene 1)\n\nMeaning: After killing Tybalt, Romeo realises fate has trapped him — his impulsive action has sealed his doom.\n\nTechniques: Exclamatory, personification of fortune, alliteration.\n\nThemes: Fate, impulsiveness, tragedy.\n\nExam point: This is the play\'s turning point — Romeo shifts from lover to killer. Shakespeare leaves it ambiguous whether Romeo is truly fate\'s victim or whether his own impulsiveness is to blame, creating a tension between fate and free will.`,
      },
      {
        id: 'rj-10',
        front: '"A plague o\' both your houses!"',
        back: `Speaker: Mercutio (Act 3, Scene 1)\n\nMeaning: As he dies, Mercutio curses both the Montagues and Capulets for their senseless feud.\n\nTechniques: Curse, repetition (said three times), exclamatory.\n\nThemes: Conflict, consequences, blame.\n\nExam point: Mercutio — who belongs to neither family — is the feud\'s most innocent victim. His repeated curse becomes prophetic: both houses do suffer a "plague" of death. Shakespeare uses him to voice the audience\'s frustration at the pointless violence.`,
      },
      {
        id: 'rj-11',
        front: '"Wisely and slow. They stumble that run fast"',
        back: `Speaker: Friar Lawrence (Act 2, Scene 3)\n\nMeaning: The Friar advises caution — rushing leads to mistakes.\n\nTechniques: Imperative, proverbial wisdom, foreshadowing.\n\nThemes: Haste, fate, youth vs age.\n\nExam point: Friar Lawrence\'s advice is ignored by every young character — Romeo, Juliet, and Tybalt all act on impulse. Shakespeare contrasts the Friar\'s wisdom with the lovers\' recklessness to show that youth\'s intensity, while beautiful, is also fatally dangerous.`,
      },
      {
        id: 'rj-12',
        front: '"It is the east, and Juliet is the sun"',
        back: `Speaker: Romeo (Act 2, Scene 2)\n\nMeaning: Romeo compares Juliet to the sun — she outshines everything else.\n\nTechniques: Metaphor, celestial imagery, hyperbole.\n\nThemes: Love, light vs dark, idealism.\n\nExam point: Shakespeare elevates Juliet to a cosmic force — she is not merely beautiful but life-giving. This idealisation is romantic but also reveals Romeo\'s tendency to worship from afar, replacing one unattainable ideal (Rosaline) with another.`,
      },
      {
        id: 'rj-13',
        front: '"Then I defy you, stars!"',
        back: `Speaker: Romeo (Act 5, Scene 1)\n\nMeaning: Upon hearing of Juliet\'s "death," Romeo declares he will fight against fate itself.\n\nTechniques: Exclamatory, apostrophe, defiance, dramatic irony.\n\nThemes: Fate, free will, impulsiveness.\n\nExam point: Romeo\'s defiance of fate is tragically futile — by rushing to die beside Juliet, he fulfils the very fate he tries to resist. Shakespeare shows that the attempt to escape destiny is itself part of the destined pattern.`,
      },
      {
        id: 'rj-14',
        front: '"For never was a story of more woe"',
        back: `Speaker: Prince Escalus (Act 5, Scene 3)\n\nMeaning: The Prince delivers the final judgement — this is the saddest story ever told, caused by hatred.\n\nTechniques: Rhyming couplet, superlative, elegiac tone.\n\nThemes: Tragedy, consequences of conflict, loss.\n\nExam point: The Prince speaks for the audience and for Verona — Shakespeare uses this closing couplet to ensure the play ends not with romantic sentiment but with a clear moral: the feud caused these deaths, and the whole community bears responsibility.`,
      },
      {
        id: 'rj-15',
        front: '"O, she doth teach the torches to burn bright"',
        back: `Speaker: Romeo (Act 1, Scene 5)\n\nMeaning: Juliet\'s beauty outshines every torch in the room — she makes light itself look dim.\n\nTechniques: Hyperbole, personification, alliteration, light imagery.\n\nThemes: Love at first sight, beauty, light vs dark.\n\nExam point: Shakespeare uses this moment to show love as an overwhelming, instantaneous force. The light imagery that will follow Romeo and Juliet throughout the play begins here — they are bright flames in a dark world, beautiful but destined to burn out.`,
      },
      {
        id: 'rj-16',
        front: '"My bounty is as boundless as the sea"',
        back: `Speaker: Juliet (Act 2, Scene 2)\n\nMeaning: Her love is infinite — the more she gives, the more she has.\n\nTechniques: Simile, hyperbole, sibilance.\n\nThemes: Love, generosity, passion.\n\nExam point: Juliet\'s language here is mature and generous — she sees love as expansive, not possessive. Shakespeare gives Juliet some of the play\'s most profound lines about love, positioning her as more emotionally intelligent than Romeo despite being younger.`,
      },
      {
        id: 'rj-17',
        front: '"Women may fall when there\'s no strength in men"',
        back: `Speaker: Friar Lawrence (Act 2, Scene 3)\n\nMeaning: The Friar criticises Romeo\'s fickleness — moving from Rosaline to Juliet so quickly.\n\nTechniques: Proverbial, accusatory, gender commentary.\n\nThemes: Love, fickleness, youth, gender.\n\nExam point: Shakespeare uses the Friar to question the sincerity of Romeo\'s love — is this genuine transformation or another infatuation? This ambiguity enriches the play: the audience must decide whether Romeo\'s love has truly matured or simply found a new object.`,
      },
      {
        id: 'rj-18',
        front: '"Tempt not a desperate man"',
        back: `Speaker: Romeo (Act 5, Scene 3)\n\nMeaning: Romeo warns Paris not to provoke him — he has nothing left to lose.\n\nTechniques: Imperative, foreshadowing, threatening tone.\n\nThemes: Desperation, fate, violence.\n\nExam point: Shakespeare shows Romeo at his most dangerous — grief has stripped away his gentleness. This line reveals how love and violence are intertwined in Verona: Romeo kills Paris out of the same passion that drives his love for Juliet.`,
      },
      {
        id: 'rj-19',
        front: '"O happy dagger!"',
        back: `Speaker: Juliet (Act 5, Scene 3)\n\nMeaning: Juliet finds Romeo\'s dagger and calls it "happy" because it will reunite her with him through death.\n\nTechniques: Oxymoron (happy/dagger), personification, dramatic irony.\n\nThemes: Love and death, fate, sacrifice.\n\nExam point: The oxymoron "happy dagger" encapsulates the play\'s fusion of love and death — the instrument of violence becomes an instrument of love. Shakespeare shows that in Verona\'s toxic world, death is the only space where the lovers can be together.`,
      },
      {
        id: 'rj-20',
        front: '"Give me my Romeo, and when I shall die, take him and cut him out in little stars"',
        back: `Speaker: Juliet (Act 3, Scene 2)\n\nMeaning: Juliet imagines Romeo\'s beauty scattered across the night sky as stars after death.\n\nTechniques: Celestial imagery, foreshadowing death, epithalamium (wedding-night speech).\n\nThemes: Love, death, light vs dark, immortality.\n\nExam point: Shakespeare foreshadows Romeo\'s death even in Juliet\'s most romantic speech — she can only imagine preserving his beauty through death. Love and death are fused in her language, anticipating the final scene where she joins him in death.`,
      },
      {
        id: 'rj-21',
        front: '"Parting is such sweet sorrow"',
        back: `Speaker: Juliet (Act 2, Scene 2)\n\nMeaning: Saying goodbye is painful yet also sweet because it means they will meet again.\n\nTechniques: Oxymoron, sibilance.\n\nThemes: Love, contradiction, bittersweet emotion.\n\nExam point: This famous oxymoron captures the play\'s essence — every sweet moment carries sorrow. Shakespeare shows that even at their happiest, the lovers\' joy is inseparable from pain, mirroring the play\'s structure where every moment of hope precedes disaster.`,
      },
      {
        id: 'rj-22',
        front: '"I would the fool were married to her grave"',
        back: `Speaker: Lady Capulet (Act 3, Scene 5)\n\nMeaning: Lady Capulet wishes Juliet were dead rather than disobedient.\n\nTechniques: Dramatic irony (Juliet does end up in a grave), foreshadowing, hyperbole.\n\nThemes: Family, patriarchal authority, fate.\n\nExam point: Shakespeare makes Lady Capulet unwittingly prophesy her daughter\'s death — this chilling dramatic irony shows how the parents\' rigidity and cruelty drive the tragedy. Their inability to listen becomes a death sentence.`,
      },
      {
        id: 'rj-23',
        front: '"Hang thee, young baggage! Disobedient wretch!"',
        back: `Speaker: Lord Capulet (Act 3, Scene 5)\n\nMeaning: Capulet rages at Juliet for refusing to marry Paris, threatening to disown her.\n\nTechniques: Exclamatory, insults, imperatives, plosive sounds.\n\nThemes: Patriarchal authority, family, gender, power.\n\nExam point: Capulet\'s verbal violence reveals the patriarchal tyranny beneath his earlier affection — Shakespeare shows that Juliet is property to be disposed of, not a person with agency. His rage pushes Juliet toward the desperate plan that kills her.`,
      },
      {
        id: 'rj-24',
        front: '"Peace? I hate the word"',
        back: `Speaker: Tybalt (Act 1, Scene 1)\n\nMeaning: Tybalt rejects any possibility of peace — he lives for the feud.\n\nTechniques: Minor sentence, declarative, aggressive tone.\n\nThemes: Conflict, honour, masculinity.\n\nExam point: Shakespeare establishes Tybalt as the embodiment of the feud\'s violence — his hatred is not rational but instinctive. He represents the toxic honour culture that makes peace impossible and ultimately kills the lovers.`,
      },
      {
        id: 'rj-25',
        front: '"Thus with a kiss I die"',
        back: `Speaker: Romeo (Act 5, Scene 3)\n\nMeaning: Romeo kisses Juliet one final time before drinking the poison.\n\nTechniques: Dramatic irony (Juliet is alive), juxtaposition (kiss/death), simple language.\n\nThemes: Love and death, fate, tragedy.\n\nExam point: Shakespeare unites love and death in a single action — the kiss is both an act of love and a farewell to life. The simplicity of the language makes it devastating; Romeo needs no elaborate poetry, only this final gesture.`,
      },
      {
        id: 'rj-26',
        front: '"Death, that hath suck\'d the honey of thy breath"',
        back: `Speaker: Romeo (Act 5, Scene 3)\n\nMeaning: Romeo notices Juliet still looks beautiful in "death" — death has taken her life but not her beauty.\n\nTechniques: Personification of death, sensory imagery, dramatic irony (she is alive).\n\nThemes: Love, death, beauty, fate.\n\nExam point: The dramatic irony is excruciating — Romeo observes signs of life (her beauty, her colour) but interprets them through the lens of death. Shakespeare shows how close he comes to the truth, making the tragedy feel preventable and therefore more painful.`,
      },
      {
        id: 'rj-27',
        front: '"All are punish\'d"',
        back: `Speaker: Prince Escalus (Act 5, Scene 3)\n\nMeaning: Everyone has suffered because of the feud — no one escapes punishment.\n\nTechniques: Declarative, universal judgement, passive voice.\n\nThemes: Consequences, justice, collective responsibility.\n\nExam point: The Prince includes himself in the blame — his failure to enforce peace enabled the deaths. Shakespeare shows tragedy is never caused by one person; it is the product of an entire society\'s failures, from parents to rulers to bystanders.`,
      },
      {
        id: 'rj-28',
        front: '"From forth the fatal loins of these two foes"',
        back: `Speaker: Chorus / Prologue\n\nMeaning: From these two enemy families, the doomed lovers are born.\n\nTechniques: Alliteration ("forth," "fatal," "foes"), foreshadowing, sonnet form.\n\nThemes: Fate, family, death.\n\nExam point: The alliterative "f" sounds create a driving, relentless rhythm that mirrors fate\'s inescapable force. Shakespeare connects birth ("loins") with death ("fatal"), suggesting the lovers\' doom is literally genetic — they are born into a conflict that will kill them.`,
      },
      {
        id: 'rj-29',
        front: '"O, swear not by the moon, th\' inconstant moon"',
        back: `Speaker: Juliet (Act 2, Scene 2)\n\nMeaning: Juliet warns Romeo not to swear by the moon because it changes — she wants constant, reliable love.\n\nTechniques: Imperative, symbolism (moon = changeability), foreshadowing.\n\nThemes: Love, constancy vs fickleness, youth.\n\nExam point: Juliet is more practical and clear-sighted than Romeo — she sees through romantic gestures to demand real commitment. Shakespeare gives her the intellectual authority in their relationship, challenging the convention that women are passive objects of love.`,
      },
      {
        id: 'rj-30',
        front: '"A pair of star-cross\'d lovers take their life"',
        back: `Speaker: Chorus / Prologue\n\nMeaning: Two lovers, fated by the stars to fail, will kill themselves.\n\nTechniques: Compound adjective ("star-cross\'d"), foreshadowing, double meaning ("take their life" = live and die).\n\nThemes: Fate, love, death, tragedy.\n\nExam point: "Star-cross\'d" is Shakespeare\'s most famous image of doomed love — the stars (fate) have crossed out their happiness. The phrase also invokes astrology, which Elizabethans took seriously, suggesting the lovers never had a chance. The ambiguity of "take their life" — meaning both to begin life together and to end it — encapsulates the play\'s fusion of love and death.`,
      },
    ],
  },
  {
    id: 'acc-comprehensive',
    title: 'A Christmas Carol — Comprehensive Study',
    description:
      '40 exam-ready flashcards covering key quotations, characters, themes, and context for A Christmas Carol',
    category: 'Literature',
    board: 'All',
    cards: [
      // ===== QUOTATION CARDS (15) =====
      {
        id: 'acc-q1',
        front: '"Oh! But he was a tight-fisted hand at the grindstone, Scrooge!"',
        back: `Stave: One (Marley\'s Ghost)\nSpeaker/Narrator: Third-person narrator\nTechnique: Exclamatory, metaphor ("grindstone" implies relentless, mechanical labour for profit), direct address to the reader ("Oh!")\nTheme: Greed and miserliness\n\nAnalysis: Dickens opens his characterisation of Scrooge with a visceral metaphor — the "grindstone" suggests he squeezes every last penny from others with industrial efficiency. The narrator\'s exclamatory tone ("Oh!") creates a conversational, almost gossipy rapport with the reader, inviting us to judge Scrooge from the outset. This sets up the moral framework of the novella: Scrooge embodies everything Dickens wants Victorian society to reject.`,
      },
      {
        id: 'acc-q2',
        front: '"Bah! Humbug!"',
        back: `Stave: One (Marley\'s Ghost)\nSpeaker: Ebenezer Scrooge\nTechnique: Exclamatory, dismissive tone, minor sentence/fragment\nTheme: Isolation, rejection of Christmas spirit\n\nAnalysis: Scrooge\'s iconic catchphrase is a blunt rejection of Christmas joy. "Humbug" means fraud or nonsense — Scrooge sees generosity and celebration as a deception. The brevity of the exclamation mirrors his emotional barrenness; he has no time for warmth or connection. Dickens uses this to represent the attitude of the wealthy Victorians who dismissed charity as pointless sentimentality.`,
      },
      {
        id: 'acc-q3',
        front: '"Are there no prisons? Are there no workhouses?"',
        back: `Stave: One (Marley\'s Ghost)\nSpeaker: Ebenezer Scrooge\nTechnique: Rhetorical questions, repetition, callous tone\nTheme: Social responsibility, poverty, class\n\nAnalysis: Scrooge deflects responsibility for the poor by pointing to institutions that Dickens\'s readers would recognise as cruel and dehumanising. The rhetorical questions imply he believes the poor are already "dealt with." Dickens directly critiques the 1834 Poor Law and the Malthusian attitude that poverty was the fault of the poor. These words return to haunt Scrooge via the Ghost of Christmas Present, turning his own logic against him.`,
      },
      {
        id: 'acc-q4',
        front: '"I wear the chain I forged in life"',
        back: `Stave: One (Marley\'s Ghost)\nSpeaker: Jacob Marley\'s Ghost\nTechnique: Metaphor (chain = accumulated sins), first person, past tense ("forged")\nTheme: Consequences, redemption, greed\n\nAnalysis: Marley\'s chain is a powerful symbol — each link represents a selfish act during his lifetime. The verb "forged" has connotations of heavy industry, linking sin to the dehumanising capitalism of the era. Marley serves as a prophetic mirror for Scrooge: his punishment is to wander the earth burdened by the weight of his own greed. Dickens implies that moral debts, unlike financial ones, cannot be escaped after death.`,
      },
      {
        id: 'acc-q5',
        front: '"Mankind was my business"',
        back: `Stave: One (Marley\'s Ghost)\nSpeaker: Jacob Marley\'s Ghost\nTechnique: Declarative, irony (he ignored "mankind" in life), emotive language\nTheme: Social responsibility, redemption\n\nAnalysis: Marley realises too late that caring for others — not making money — was his true "business." Dickens uses the word "business" with bitter irony: Marley spent his life obsessed with commerce, yet the only business that mattered was compassion. This line is the moral thesis of the entire novella and directly challenges the Victorian belief that charity was not the concern of businessmen.`,
      },
      {
        id: 'acc-q6',
        front: '"A solitary child, neglected by his friends"',
        back: `Stave: Two (The First of the Three Spirits)\nSpeaker/Narrator: Third-person narrator describing young Scrooge\nTechnique: Pathetic imagery, isolation motif, adjective "solitary"\nTheme: Isolation, childhood, empathy\n\nAnalysis: This moment is the turning point in reader sympathy. Dickens shows that Scrooge\'s coldness has roots in childhood neglect and loneliness. The adjective "solitary" will echo through the novella — Scrooge chose isolation as an adult because it was all he knew as a child. Dickens encourages the Victorian reader to see that cruelty often stems from suffering, and that compassion, not punishment, is the remedy.`,
      },
      {
        id: 'acc-q7',
        front: '"Another idol has displaced me... a golden one"',
        back: `Stave: Two (The First of the Three Spirits)\nSpeaker: Belle (Scrooge\'s former fiancee)\nTechnique: Metaphor (idol = money worshipped like a god), allusion to biblical idolatry\nTheme: Greed vs love, loss, moral corruption\n\nAnalysis: Belle accuses Scrooge of replacing her with money — the "golden idol" alludes to the biblical golden calf, making Scrooge\'s worship of wealth a form of sin. Dickens shows that the pursuit of money costs Scrooge his only chance at love and family. Belle\'s departure marks the moment Scrooge chose isolation over connection, and he must witness it again to understand what he lost.`,
      },
      {
        id: 'acc-q8',
        front: '"God bless us, every one!"',
        back: `Stave: Three (The Second of the Three Spirits) and Stave Five\nSpeaker: Tiny Tim\nTechnique: Exclamatory, inclusive language ("every one"), religious register\nTheme: Generosity, family, Christian charity, hope\n\nAnalysis: Tiny Tim\'s blessing is the moral heart of the novella. "Every one" is radically inclusive — it extends goodwill even to those like Scrooge who would let him die. The religious language reinforces Dickens\'s Christian message that compassion must be universal. Tim\'s innocence and generosity despite poverty shames the wealthy who hoard their resources. His words bookend the novella, showing that Scrooge has adopted Tim\'s philosophy by Stave Five.`,
      },
      {
        id: 'acc-q9',
        front: '"If he be like to die, he had better do it, and decrease the surplus population"',
        back: `Stave: One (Marley\'s Ghost) — echoed in Stave Three\nSpeaker: Scrooge (original); Ghost of Christmas Present (quoting Scrooge back to him)\nTechnique: Callous tone, Malthusian language ("surplus population"), dramatic irony\nTheme: Social responsibility, poverty, consequences of indifference\n\nAnalysis: Scrooge parrots Thomas Malthus\'s theory that overpopulation causes poverty — a view many wealthy Victorians used to justify inaction. When the Ghost of Christmas Present throws these words back at Scrooge in reference to Tiny Tim, the abstraction becomes personal. Dickens forces both Scrooge and the reader to confront the human cost of such ideology: it is not "surplus population" but a real, beloved child who will die.`,
      },
      {
        id: 'acc-q10',
        front: '"This boy is Ignorance. This girl is Want."',
        back: `Stave: Three (The Second of the Three Spirits)\nSpeaker: Ghost of Christmas Present\nTechnique: Allegory, personification, declarative sentences, capitalisation of abstract nouns\nTheme: Social responsibility, education, poverty\n\nAnalysis: The two wretched children clinging to the Ghost\'s robes are allegorical — they represent the consequences of society\'s neglect. Dickens capitalises "Ignorance" and "Want" to make them universal forces, not individual failings. The Ghost warns: "Most of all beware this boy" (Ignorance), because an uneducated populace will destroy society. Dickens directly advocates for education reform and challenges the idea that poverty is the poor\'s own fault.`,
      },
      {
        id: 'acc-q11',
        front: '"I am as light as a feather, I am as happy as an angel"',
        back: `Stave: Five (The End of It)\nSpeaker: Ebenezer Scrooge\nTechnique: Similes, tricolon (the full line continues with a third comparison), joyful tone, transformation\nTheme: Redemption, joy, transformation\n\nAnalysis: Scrooge\'s language is utterly transformed — from blunt, monosyllabic dismissals to effusive, childlike similes. The "feather" suggests his burden of guilt has been lifted; the "angel" connects his newfound joy to spiritual salvation. The tricolon structure creates a breathless, giddy rhythm that mirrors Scrooge\'s overwhelming relief. Dickens shows that redemption is not solemn but joyous — it restores a person to their truest, happiest self.`,
      },
      {
        id: 'acc-q12',
        front: '"Solitary as an oyster"',
        back: `Stave: One (Marley\'s Ghost)\nSpeaker/Narrator: Third-person narrator\nTechnique: Simile, symbolism\nTheme: Isolation, greed\n\nAnalysis: The oyster simile works on multiple levels: oysters are closed, hard-shelled, and impenetrable — like Scrooge\'s emotional walls. But oysters also contain pearls, hinting that something valuable is hidden inside Scrooge if he can be opened. Dickens signals from the start that Scrooge is not irredeemable — his goodness is locked away, waiting to be released. This optimistic undercurrent drives the novella\'s redemption narrative.`,
      },
      {
        id: 'acc-q13',
        front: '"Old Marley was as dead as a door-nail"',
        back: `Stave: One (Marley\'s Ghost) — opening line\nSpeaker/Narrator: Third-person narrator\nTechnique: Simile, colloquial idiom, dark humour, direct address to reader\nTheme: Death, the supernatural\n\nAnalysis: Dickens opens with a comic, matter-of-fact declaration of death, establishing the novella\'s tone: serious moral themes delivered with wit and warmth. The narrator then playfully digresses about why door-nails are considered dead, creating an intimate, storytelling voice. Establishing Marley\'s death is essential — the reader must believe Marley is truly dead for his ghostly return to carry weight.`,
      },
      {
        id: 'acc-q14',
        front: '"The cold within him froze his old features"',
        back: `Stave: One (Marley\'s Ghost)\nSpeaker/Narrator: Third-person narrator\nTechnique: Metaphor, pathetic fallacy (internal weather), semantic field of cold\nTheme: Isolation, emotional coldness\n\nAnalysis: Dickens externalises Scrooge\'s inner nature — the cold is not from the weather but from within his soul. This internal pathetic fallacy links Scrooge\'s emotional state to his physical appearance, suggesting that cruelty visibly corrupts a person. The semantic field of cold and ice runs throughout Stave One and only thaws as Scrooge transforms, creating a structural motif that mirrors his redemption arc.`,
      },
      {
        id: 'acc-q15',
        front: '"He became as good a friend, as good a master, and as good a man"',
        back: `Stave: Five (The End of It)\nSpeaker/Narrator: Third-person narrator\nTechnique: Tricolon, anaphora ("as good a"), declarative\nTheme: Redemption, social responsibility, generosity\n\nAnalysis: The tricolon summarises Scrooge\'s complete transformation across three social roles: friend (personal), master (professional/economic), and man (moral/universal). The anaphora of "as good a" hammers home that Scrooge\'s change is not partial — it touches every aspect of his life. Dickens\'s message is that individual moral transformation can heal society: if one man changes, he improves the lives of everyone around him.`,
      },

      // ===== CHARACTER CARDS (10) =====
      {
        id: 'acc-c1',
        front: 'Ebenezer Scrooge',
        back: `Role: Protagonist — a wealthy, miserly London moneylender who despises Christmas and refuses to help the poor.\n\nKey Quotes:\n• "Bah! Humbug!" — dismisses Christmas joy\n• "Solitary as an oyster" — isolated but containing hidden goodness\n• "I am as light as a feather" — transformed, joyful\n\nDevelopment Arc: Scrooge undergoes the novella\'s central transformation. He begins as cold, isolated, and cruel (Stave 1), is forced to confront his past pain (Stave 2), witness the consequences of his indifference (Staves 3-4), and ultimately chooses redemption (Stave 5). His arc moves from isolation to community, greed to generosity.\n\nMarker Tip: Always link Scrooge to Dickens\'s wider social message — he represents the wealthy Victorians Dickens wanted to change. His redemption proves that individual moral transformation can address social injustice. Frame his journey as Dickens\'s argument that compassion is a choice available to everyone.`,
      },
      {
        id: 'acc-c2',
        front: 'Bob Cratchit',
        back: `Role: Scrooge\'s underpaid clerk — represents the honest, hardworking poor exploited by the wealthy.\n\nKey Quotes:\n• Described working with a "comforter" because Scrooge won\'t pay for coal\n• Toasts Scrooge as "the Founder of the Feast" despite mistreatment\n• His family is loving despite poverty\n\nDevelopment Arc: Bob does not change — he is a moral constant. His goodness, loyalty, and warmth despite suffering serve as a foil to Scrooge. He endures exploitation without bitterness.\n\nMarker Tip: Bob represents the "deserving poor" — Dickens uses him to argue that poverty is caused by unjust employers, not laziness. His willingness to toast Scrooge shows extraordinary grace, shaming the reader into recognising how the poor are treated. Link Bob to Dickens\'s critique of Victorian labour conditions and low wages.`,
      },
      {
        id: 'acc-c3',
        front: 'Tiny Tim',
        back: `Role: Bob Cratchit\'s youngest son — disabled, sickly, but full of joy and Christian charity.\n\nKey Quotes:\n• "God bless us, every one!" — inclusive, generous despite suffering\n• Described with his crutch and "his limbs supported by an iron frame"\n• His empty chair and crutch "without an owner" in the future vision\n\nDevelopment Arc: Tim does not develop as a character — he functions as a symbol. His potential death is the emotional catalyst for Scrooge\'s transformation.\n\nMarker Tip: Tiny Tim is Dickens\'s most powerful weapon against Malthusian ideology. When Scrooge says the poor should "decrease the surplus population," Dickens puts a face to that statistic. Tim\'s disability was likely caused by malnutrition (linked to poverty), making his suffering a direct consequence of social neglect. His survival in Stave 5 proves that generosity literally saves lives.`,
      },
      {
        id: 'acc-c4',
        front: "Jacob Marley's Ghost",
        back: `Role: Scrooge\'s deceased business partner — appears as a ghost bound in chains to warn Scrooge to change.\n\nKey Quotes:\n• "I wear the chain I forged in life" — every selfish act added a link\n• "Mankind was my business" — realises too late what truly mattered\n• Described with "cash-boxes, keys, padlocks, ledgers, deeds"\n\nDevelopment Arc: Marley is static but prophetic. He exists to show Scrooge what awaits him if he does not repent — an eternity of regret and restless wandering.\n\nMarker Tip: Marley is Scrooge\'s doppelganger — they were identical in life ("We were alike"), so Marley\'s fate is Scrooge\'s guaranteed future. His chains are a concrete, visual metaphor for how greed imprisons the soul. Link Marley to the Gothic tradition (ghosts, supernatural warnings) and to Dickens\'s use of fear as a tool for moral instruction.`,
      },
      {
        id: 'acc-c5',
        front: 'Ghost of Christmas Past',
        back: `Role: The first of three spirits — shows Scrooge key memories from his past to reawaken his buried emotions.\n\nKey Quotes/Description:\n• "A strange figure — like a child: yet not so like a child as like an old man" — ambiguous, dreamlike\n• Wears white, emits light from its head, carries a cap that can extinguish its light\n• Scrooge tries to push the cap down to block the light\n\nDevelopment Arc: The Ghost is a supernatural guide, not a character with an arc. It forces Scrooge to feel rather than think.\n\nMarker Tip: The light symbolises truth and memory — Scrooge trying to extinguish it shows his desire to suppress painful memories. The Ghost\'s childlike/old appearance suggests memory is timeless. This stave establishes empathy: once we understand WHY Scrooge became cold (neglect, loss of Belle), we begin to pity rather than hate him.`,
      },
      {
        id: 'acc-c6',
        front: 'Ghost of Christmas Present',
        back: `Role: The second spirit — a giant, jolly figure who shows Scrooge how others celebrate Christmas now, and the suffering he ignores.\n\nKey Quotes/Description:\n• Sits on a throne of food — "turkeys, geese, great joints of meat, sucking-pigs"\n• Wears a green robe bordered with white fur, carries a glowing torch\n• Reveals Ignorance and Want beneath his robes\n• Ages visibly during the stave — his life spans only one Christmas Day\n\nDevelopment Arc: The Ghost moves from warmth and abundance to a dark warning (Ignorance and Want), mirroring the novella\'s shift from celebration to social critique.\n\nMarker Tip: The Ghost embodies Christmas generosity — his torch sprinkles goodwill on the poor. His ageing represents the fleeting nature of the present moment, urging Scrooge (and the reader) to act NOW. The reveal of Ignorance and Want is Dickens\'s most direct political message — address these social evils or face destruction.`,
      },
      {
        id: 'acc-c7',
        front: 'Ghost of Christmas Yet to Come',
        back: `Role: The third and final spirit — a dark, hooded, silent figure who shows Scrooge a terrifying vision of the future if he does not change.\n\nKey Quotes/Description:\n• "Shrouded in a deep black garment" — associated with death\n• "The Phantom slowly, gravely, silently, approached" — adverb list creates dread\n• Points but never speaks\n\nDevelopment Arc: The Ghost is static and terrifying — it is the culmination of fear that breaks Scrooge\'s resistance and drives him to repent.\n\nMarker Tip: This Ghost resembles the Grim Reaper — its silence is more powerful than words because Scrooge must interpret the visions himself. The lack of dialogue forces Scrooge into active moral reasoning rather than passive listening. Link to the Gothic genre: darkness, death, fear of the unknown. This stave uses terror where the others used nostalgia and warmth — Dickens understands that different people are moved by different emotions.`,
      },
      {
        id: 'acc-c8',
        front: "Fred (Scrooge's nephew)",
        back: `Role: Scrooge\'s cheerful, warm-hearted nephew — the son of Scrooge\'s beloved sister Fan. Repeatedly invites Scrooge to Christmas dinner despite constant rejection.\n\nKey Quotes:\n• "I have always thought of Christmas time... as a good time; a kind, forgiving, charitable, pleasant time" — asyndetic list of positive adjectives\n• "I mean to give him the same chance every year, whether he likes it or not" — persistent compassion\n\nDevelopment Arc: Fred does not change — like Bob, he is a moral constant. His unwavering kindness represents the Christmas spirit Scrooge rejects then embraces.\n\nMarker Tip: Fred is Scrooge\'s foil — same family, same class, opposite values. He proves that wealth does not have to produce miserliness. His connection to Fan (Scrooge\'s sister) is significant: he represents the loving family life Scrooge could have had. Fred\'s persistence shows that compassion should never give up on people — a key Dickensian message.`,
      },
      {
        id: 'acc-c9',
        front: 'Belle',
        back: `Role: Scrooge\'s former fiancee who breaks off their engagement because his love of money has replaced his love for her.\n\nKey Quotes:\n• "Another idol has displaced me... a golden one" — money as false god\n• "You fear the world too much" — suggests Scrooge\'s greed stems from insecurity\n• She is later seen with a happy family — the life Scrooge lost\n\nDevelopment Arc: Belle appears only in Stave Two as a memory. She represents Scrooge\'s last chance at love and warmth before he fully committed to isolation.\n\nMarker Tip: Belle\'s departure is the novella\'s key turning point in Scrooge\'s backstory. Her accusation that a "golden idol" has replaced her connects greed to idolatry (a biblical sin), reinforcing Dickens\'s moral framework. The vision of her happy family is designed to make Scrooge feel regret — Dickens shows the reader that the cost of greed is not just money but love, family, and human connection.`,
      },
      {
        id: 'acc-c10',
        front: 'Fezziwig',
        back: `Role: Scrooge\'s former employer during his apprenticeship — a generous, jovial businessman who treats his workers with warmth and stages a joyful Christmas party.\n\nKey Quotes:\n• "Old Fezziwig laid down his pen... No more work tonight. Christmas Eve, Dick. Christmas!"\n• The narrator notes: "The happiness he gives, is quite as great as if it cost a fortune"\n• Scrooge watches and says quietly: "I should like to be able to say a word or two to my clerk just now"\n\nDevelopment Arc: Fezziwig appears only in Stave Two as a memory. He does not change but serves as a model of how employers should treat workers.\n\nMarker Tip: Fezziwig is the anti-Scrooge — proof that capitalism and compassion can coexist. Dickens uses him to show that an employer\'s power extends beyond wages: small acts of generosity create immense happiness. The moment Scrooge recognises his failure to be like Fezziwig to Bob Cratchit is a crucial step in his transformation. Link Fezziwig to Dickens\'s argument that the wealthy have a moral duty to their workers.`,
      },

      // ===== THEME CARDS (8) =====
      {
        id: 'acc-t1',
        front: 'Theme: Redemption',
        back: `Definition: The idea that people can be saved from sin or moral failure by recognising their wrongs and choosing to change.\n\nKey Moments:\n• Marley warns Scrooge he can still escape Marley\'s fate\n• Scrooge weeps at his childhood self (Stave 2) — empathy reawakens\n• Scrooge begs the Ghost of Christmas Yet to Come: "I will honour Christmas in my heart, and try to keep it all the year"\n• Stave 5: Scrooge wakes transformed and immediately acts on his new values\n\nKey Quotes:\n• "I will honour Christmas in my heart" — pledges lasting change\n• "I am as light as a feather, I am as happy as an angel" — joy of transformation\n• "He became as good a friend, as good a master, and as good a man" — transformation across all roles\n\nHow Dickens Presents It: Dickens structures the entire novella around redemption — the five staves mirror the five acts of a morality play. Scrooge\'s journey from sin to salvation follows a Christian template: confession (recognising his wrongs), penance (witnessing consequences), and absolution (being given a second chance). Dickens\'s message is optimistic — no one is beyond saving if they choose to change.`,
      },
      {
        id: 'acc-t2',
        front: 'Theme: Social Responsibility',
        back: `Definition: The duty of the wealthy and powerful to care for the poor and vulnerable in society.\n\nKey Moments:\n• Scrooge refuses the charity collectors and suggests the poor go to workhouses (Stave 1)\n• Marley\'s ghost declares "Mankind was my business" (Stave 1)\n• The Ghost of Christmas Present reveals Ignorance and Want (Stave 3)\n• Scrooge raises Bob\'s salary and helps his family (Stave 5)\n\nKey Quotes:\n• "Are there no prisons? Are there no workhouses?" — callous dismissal\n• "Mankind was my business" — moral duty recognised too late\n• "This boy is Ignorance. This girl is Want." — allegorical warning\n\nHow Dickens Presents It: Dickens wrote A Christmas Carol partly as a response to a parliamentary report on child labour. He uses the novella as a direct appeal to the wealthy middle classes, arguing that ignoring poverty is both morally wrong and socially dangerous (Ignorance and Want will destroy society). Scrooge\'s transformation models the change Dickens wants from his readers — personal generosity as a first step toward social justice.`,
      },
      {
        id: 'acc-t3',
        front: 'Theme: Isolation vs Community',
        back: `Definition: The contrast between Scrooge\'s lonely, self-imposed isolation and the warmth of communal celebration and family.\n\nKey Moments:\n• Scrooge spends Christmas Eve alone in his dark chambers (Stave 1)\n• The Cratchit family\'s joyful, crowded Christmas dinner (Stave 3)\n• Fred\'s party — full of laughter, games, and togetherness (Stave 3)\n• In the future, Scrooge dies alone and unmourned — his possessions are stolen (Stave 4)\n• Redeemed Scrooge joins Fred\'s party and becomes a "second father" to Tiny Tim (Stave 5)\n\nKey Quotes:\n• "Solitary as an oyster" — isolation as Scrooge\'s defining trait\n• "A solitary child, neglected by his friends" — roots of isolation in childhood\n• Fred: "I have always thought of Christmas time... as a good time"\n\nHow Dickens Presents It: Dickens juxtaposes Scrooge\'s dark, cold isolation against the bright warmth of every communal scene. Even the poorest characters (the Cratchits, the miners, the lighthouse keepers) find joy in togetherness. Dickens argues that isolation is both the cause and consequence of greed — and that community and connection are the true sources of happiness, regardless of wealth.`,
      },
      {
        id: 'acc-t4',
        front: 'Theme: Poverty and Inequality',
        back: `Definition: The vast gap between rich and poor in Victorian England, and the suffering caused by the wealthy\'s indifference.\n\nKey Moments:\n• Bob Cratchit earns 15 shillings a week and cannot afford proper coal or medical care for Tim\n• Scrooge dismisses the poor as "surplus population" (Stave 1)\n• The Cratchit Christmas dinner — they make the most of very little (Stave 3)\n• Ignorance and Want — starving, ragged children hidden beneath the Ghost\'s robes (Stave 3)\n• In Stave 4, the poor steal from Scrooge\'s corpse — poverty breeds desperation\n\nKey Quotes:\n• "If he be like to die, he had better do it, and decrease the surplus population" — Malthusian cruelty\n• "This boy is Ignorance. This girl is Want." — social consequences of neglect\n\nHow Dickens Presents It: Dickens does not sentimentalise poverty — he shows it kills (Tiny Tim), degrades (Ignorance and Want), and corrupts (the thieves in Stave 4). He places blame squarely on the wealthy, not the poor. The Cratchits\' dignity despite poverty contrasts with Scrooge\'s moral poverty despite wealth, inverting the Victorian assumption that the rich are morally superior.`,
      },
      {
        id: 'acc-t5',
        front: 'Theme: Christmas and Generosity',
        back: `Definition: Christmas as a time of kindness, charity, forgiveness, and communal joy — a moral ideal that should extend beyond one day.\n\nKey Moments:\n• Fred defends Christmas as "a kind, forgiving, charitable, pleasant time" (Stave 1)\n• Fezziwig\'s Christmas party — generosity costs little but means everything (Stave 2)\n• The Ghost of Christmas Present\'s torch spreads warmth to the poor (Stave 3)\n• Scrooge buys the prize turkey for the Cratchits and donates to charity (Stave 5)\n• "He knew how to keep Christmas well, if any man alive possessed the knowledge" (Stave 5)\n\nKey Quotes:\n• "God bless us, every one!" — Tim\'s universal goodwill\n• "I will honour Christmas in my heart, and try to keep it all the year"\n\nHow Dickens Presents It: Dickens uses Christmas as a vehicle for his social message — it is not about religion alone but about the principle of generosity toward all people. The key phrase is "keep it all the year" — Dickens argues Christmas spirit must be a permanent way of living, not a single day of charity. The novella itself was published at Christmas 1843 and was intended as a "Christmas gift" to readers that would inspire real social change.`,
      },
      {
        id: 'acc-t6',
        front: 'Theme: Family',
        back: `Definition: The importance of family bonds, and how both the presence and absence of family shape characters\' lives.\n\nKey Moments:\n• Young Scrooge is left alone at school — abandoned by his father (Stave 2)\n• Fan collects Scrooge: "Father is so much kinder than he used to be" (Stave 2)\n• Belle\'s happy family — the life Scrooge rejected (Stave 2)\n• The Cratchits\' loving Christmas dinner (Stave 3)\n• Fred keeps inviting Scrooge — family loyalty despite rejection (Staves 1 & 3)\n• Scrooge becomes "a second father to Tiny Tim" (Stave 5)\n\nKey Quotes:\n• "A solitary child, neglected by his friends" — childhood loneliness\n• "God bless us, every one!" — family as source of moral goodness\n\nHow Dickens Presents It: Dickens shows that family is not about wealth but about love and togetherness. The Cratchits have almost nothing but are emotionally rich; Scrooge has everything but is emotionally bankrupt. Scrooge\'s backstory reveals that his isolation began with family breakdown (absent father). His redemption ends with family restoration — he re-enters Fred\'s family and adopts the Cratchits. Dickens argues that family and community are the foundations of a moral society.`,
      },
      {
        id: 'acc-t7',
        front: 'Theme: Time and Regret',
        back: `Definition: The idea that time is limited, the past cannot be changed, but the future is still within our control if we act now.\n\nKey Moments:\n• Marley\'s ghost regrets wasting his time alive on greed (Stave 1)\n• Ghost of Christmas Past shows Scrooge moments he can never undo (Stave 2)\n• Ghost of Christmas Present ages and dies within a single stave — time is short (Stave 3)\n• Ghost of Christmas Yet to Come shows a future that has not happened yet (Stave 4)\n• Scrooge wakes and exclaims: "I will live in the Past, the Present, and the Future!" (Stave 5)\n\nKey Quotes:\n• "I wear the chain I forged in life" — the past creates consequences\n• "The Spirits of all Three shall strive within me" — learning from every time period\n\nHow Dickens Presents It: The three-ghost structure literally moves through past, present, and future — Dickens shows that understanding all three is necessary for moral growth. The past explains why we are who we are; the present shows the consequences of our choices on others; the future warns us what will happen if we do not change. Dickens\'s message: it is never too late to change, but you must act now because time is running out.`,
      },
      {
        id: 'acc-t8',
        front: 'Theme: The Supernatural',
        back: `Definition: The use of ghosts, spirits, and otherworldly elements to convey moral and social messages.\n\nKey Moments:\n• Marley\'s face appears on Scrooge\'s door knocker (Stave 1)\n• Marley\'s ghost appears in chains, jaw bandage, transparent body (Stave 1)\n• Three spirits visit Scrooge on successive nights — each more frightening\n• The Ghost of Christmas Yet to Come is the most terrifying: silent, shrouded, deathlike (Stave 4)\n\nKey Quotes:\n• "Old Marley was as dead as a door-nail" — establishes the supernatural premise\n• "The Phantom slowly, gravely, silently, approached" — dread and fear\n\nHow Dickens Presents It: Dickens draws on the Gothic tradition and the Victorian fascination with ghosts. The supernatural serves a moral purpose — the ghosts are not there to terrify for entertainment but to force Scrooge (and the reader) into self-reflection. Each ghost escalates in fear: nostalgia, warmth, then sheer terror. Dickens uses the ghost story format to make his social critique palatable and entertaining — readers came for the ghosts and left thinking about poverty and compassion.`,
      },

      // ===== CONTEXT CARDS (7) =====
      {
        id: 'acc-cx1',
        front: 'Context: Victorian Workhouses',
        back: `Key Facts:\n• The 1834 Poor Law Amendment Act established workhouses as the main form of relief for the poor.\n• Conditions were deliberately harsh to deter people from seeking help — families were separated, food was minimal, work was gruelling.\n• They were seen as shameful; entering one meant you had "failed."\n• Many Victorians believed poverty was caused by laziness, not systemic injustice.\n\nConnection to the Novella:\n• Scrooge refers to workhouses when asked to donate: "Are there no prisons? Are there no workhouses?"\n• He uses their existence to justify his refusal to help — the state has "provided" for the poor.\n• Dickens directly attacks this attitude: the charity collectors reply that many "would rather die" than enter workhouses.\n\nUseful for AO3: Shows Dickens writing to challenge the dominant ideology of his time. His contemporary readers would have recognised Scrooge\'s attitude as common among the wealthy. Dickens argues that workhouses are not charity — they are punishment disguised as help. Link to Dickens\'s own childhood experience of poverty when his father was imprisoned for debt.`,
      },
      {
        id: 'acc-cx2',
        front: 'Context: Malthusian Economics',
        back: `Key Facts:\n• Thomas Malthus (1766-1834) argued that population growth would always outstrip food supply, leading to poverty and famine.\n• His theory was used to justify not helping the poor — if they were "surplus," helping them would only make the problem worse.\n• Many wealthy Victorians adopted Malthusian views to ease their conscience about poverty.\n• The phrase "surplus population" was well known in Dickens\'s time.\n\nConnection to the Novella:\n• Scrooge directly echoes Malthus: "If he be like to die, he had better do it, and decrease the surplus population."\n• The Ghost of Christmas Present throws these words back at Scrooge when he asks about Tiny Tim\'s fate.\n• Dickens personifies the "surplus population" as a real, innocent child to dismantle the cold abstraction of Malthusian theory.\n\nUseful for AO3: Demonstrates that Dickens was engaging with specific contemporary economic debates, not just telling a ghost story. His novella is a direct counter-argument to Malthus: the poor are not statistics but people. This context elevates your analysis from character study to political commentary.`,
      },
      {
        id: 'acc-cx3',
        front: "Context: Dickens's Own Life",
        back: `Key Facts:\n• Charles Dickens (1812-1870) experienced poverty firsthand — aged 12, he worked in a blacking factory while his father was in debtors\' prison.\n• This traumatic experience shaped his lifelong sympathy for the poor and hatred of institutions that failed them.\n• Dickens wrote A Christmas Carol in just six weeks in 1843, partly in response to a parliamentary report on child labour.\n• He personally funded the publication to keep the price low (5 shillings) so more people could read it.\n\nConnection to the Novella:\n• Young Scrooge\'s loneliness at boarding school may reflect Dickens\'s own childhood feelings of abandonment.\n• Dickens\'s belief that no child should suffer poverty drives the characterisation of Tiny Tim and the children Ignorance and Want.\n• The novella was intended as a practical act of social reform — Dickens called it "a sledgehammer" blow for the poor.\n\nUseful for AO3: Linking the text to Dickens\'s biography shows sophisticated understanding of authorial intent. Dickens did not write from a position of privilege — he understood poverty from the inside. This gives his critique of the wealthy extra moral authority and emotional power.`,
      },
      {
        id: 'acc-cx4',
        front: 'Context: Christianity and Victorian Morality',
        back: `Key Facts:\n• Victorian Britain was an overwhelmingly Christian society — church attendance was expected, and Christian values (charity, forgiveness, love) were publicly endorsed.\n• However, many wealthy Christians ignored the biblical instruction to help the poor, using Malthusian economics as justification.\n• The hypocrisy of professing Christianity while ignoring suffering was a major target for social reformers like Dickens.\n\nConnection to the Novella:\n• Tiny Tim\'s "God bless us, every one!" is a direct Christian message of universal goodwill.\n• Scrooge\'s transformation follows a Christian pattern: sin, repentance, redemption, and salvation.\n• Marley\'s chains and eternal punishment echo the Christian concept of damnation for the greedy.\n• Fred defends Christmas as "a kind, forgiving, charitable, pleasant time" — listing Christian virtues.\n\nUseful for AO3: Dickens weaponises Christianity against the hypocritical wealthy. He essentially asks: how can you call yourself a Christian while letting children starve? The novella\'s moral framework is explicitly Christian — sin, repentance, and redemption — making it both a ghost story and a sermon. This dual purpose is key to understanding Dickens\'s craft.`,
      },
      {
        id: 'acc-cx5',
        front: 'Context: The Industrial Revolution',
        back: `Key Facts:\n• By the 1840s, Britain was the world\'s leading industrial power — factories, railways, and mass production had transformed the economy.\n• Industrialisation created enormous wealth for factory owners and businessmen but appalling conditions for workers: long hours, low pay, dangerous work, child labour.\n• Cities like London and Manchester grew rapidly, creating overcrowded slums with poor sanitation, disease, and high mortality.\n• The gap between rich and poor widened dramatically.\n\nConnection to the Novella:\n• Scrooge represents the new industrial capitalist — wealthy, self-made, but morally bankrupt.\n• Marley\'s chain includes "cash-boxes, keys, padlocks, ledgers" — the tools of commerce.\n• Bob Cratchit is the exploited worker: underpaid, overworked, unable to afford heating or medical care.\n• Fezziwig represents the older, more humane model of business — personal, generous, community-minded.\n\nUseful for AO3: Dickens contrasts Fezziwig\'s paternalistic capitalism (where employers feel responsible for workers) with Scrooge\'s new, impersonal capitalism (where workers are expendable). This context helps explain why Dickens frames the solution as personal generosity rather than political revolution — he wanted to reform the hearts of the wealthy, not overthrow the system.`,
      },
      {
        id: 'acc-cx6',
        front: 'Context: The Ghost Story Tradition',
        back: `Key Facts:\n• Ghost stories were a popular Victorian Christmas tradition — families would gather around the fire on Christmas Eve to share supernatural tales.\n• The Gothic genre (Frankenstein, 1818; early Poe stories) had made supernatural fiction respectable and popular.\n• Dickens was a master of the ghost story format and published many in his magazines.\n• A Christmas Carol was published on 19 December 1843 — timed for the Christmas market.\n\nConnection to the Novella:\n• Dickens uses the ghost story format to deliver a serious social message in an entertaining package.\n• The three spirits escalate in fear: nostalgic (Past), warm then warning (Present), terrifying (Yet to Come).\n• Marley\'s ghost draws on Gothic conventions: chains, wailing, transparent body, jaw bandage.\n• The novella\'s structure (a haunting that leads to transformation) gives the moral message dramatic power.\n\nUseful for AO3: Understanding genre helps you analyse HOW Dickens delivers his message, not just WHAT it is. He chose the ghost story deliberately — it was the most popular and accessible form of Christmas entertainment. By embedding social criticism inside a ghost story, Dickens ensured maximum readership and emotional impact. This is a strong point for discussing Dickens\'s methods and craft (AO2).`,
      },
      {
        id: 'acc-cx7',
        front: 'Context: The Structure of Five Staves',
        back: `Key Facts:\n• Dickens divides the novella into five "staves" rather than chapters — a "stave" is a verse of a song or a staff of music.\n• This musical terminology reinforces the title: the novella is a "carol," a song of joy.\n• The five-stave structure mirrors a five-act play or morality tale: exposition, complication, climax, crisis, resolution.\n• The novella was designed to be read aloud — Dickens himself performed public readings of it throughout his life.\n\nConnection to the Novella:\n• Stave 1: Establishes Scrooge\'s miserliness and introduces the supernatural premise.\n• Stave 2: Explores Scrooge\'s past — builds empathy.\n• Stave 3: Shows the present — contrasts poverty with generosity, introduces Ignorance and Want.\n• Stave 4: The dark future — fear drives Scrooge to repent.\n• Stave 5: Redemption and joy — the "carol" reaches its uplifting conclusion.\n\nUseful for AO3: The term "stave" signals that this is not just a story but a performance — a song intended to move and inspire. The cyclical structure (beginning and ending on Christmas morning) suggests renewal and rebirth. Discussing Dickens\'s structural choices shows sophisticated understanding of form and is an excellent way to address AO2 (methods) in your exam response.`,
      },
    ],
  },
  ...poetryFlashcardDecks,
  ...setTextFlashcardDecks,
  ...vocabularyDecks,
  ...examTechniqueDecks,
  ...khaleejiVocabDecks,

  // ===== NARRATIVE TECHNIQUES DECK (50 cards) =====
  {
    id: 'narrative-techniques',
    title: 'Narrative Techniques & Literary Methods',
    description: 'Essential narrative techniques for literary analysis',
    category: 'Techniques',
    board: 'All',
    cards: [
      {
        id: 'nt-1',
        front: 'Foreshadowing',
        back: `Definition: Hints or clues that suggest future events in the narrative.\n\nHow Writers Use It:\n• Dickens: The door knocker shows Marley\'s face before the ghost appears\n• Shakespeare: The witches\' prophecies foreshadow Macbeth\'s fate\n\nEffect on Reader:\n• Creates suspense and anticipation\n• Makes endings feel inevitable rather than random\n• Rewards careful readers who spot the clues`,
      },
      {
        id: 'nt-2',
        front: 'Flashback (Analepsis)',
        back: `Definition: The story moves backward in time to show events that happened before the main timeline.\n\nHow Writers Use It:\n• Dickens: Ghost of Christmas Past shows Scrooge\'s childhood\n• Crime novels: Detective discovers suspect\'s secret past\n\nEffect on Reader:\n• Provides context and explanation for present behaviour\n• Builds empathy by showing character origins\n• Allows comparison: how has the character changed?`,
      },
      {
        id: 'nt-3',
        front: 'Flash-Forward (Prolepsis)',
        back: `Definition: The story jumps forward in time to show future events, then returns to the present.\n\nHow Writers Use It:\n• Dickens: Ghost of Christmas Yet to Come shows Scrooge\'s death\n• Thriller writers: Brief glimpses of danger to come\n\nEffect on Reader:\n• Creates tension: we know danger is coming but not how\n• Raises questions: how will we get from present to this future?`,
      },
      {
        id: 'nt-4',
        front: 'Unreliable Narrator',
        back: `Definition: A narrator whose account of events cannot be fully trusted — they may lie, misunderstand, or be biased.\n\nHow Writers Use It:\n• Browning ("My Last Duchess"): The Duke reveals jealousy while thinking he appears noble\n• Shelley (Frankenstein): Walton, Victor, and the Creature each give different versions\n\nEffect: Forces active reading; creates ambiguity about truth; reveals character through distortion`,
      },
      {
        id: 'nt-5',
        front: 'Omniscient Narrator',
        back: `Definition: A narrator with unlimited knowledge — can see into all characters\' minds and comment on events.\n\nHow Writers Use It:\n• Austen: The narrator comments on characters\' thoughts and hypocrisy\n• Dickens: The narrator tells us what Scrooge thinks and feels\n\nEffect: Creates intimacy; allows comparison between thought and action; shows narrator as a character`,
      },
      {
        id: 'nt-6',
        front: 'First-Person Narrator',
        back: `Definition: The story is told by a character using "I," limited to their perspective and knowledge.\n\nHow Writers Use It:\n• Brontë (Jane Eyre): Jane tells her own story\n• Shelley (Frankenstein): The Creature and Victor tell their stories directly\n\nEffect: Creates immediate intimacy; limits perspective; can create unreliability`,
      },
      {
        id: 'nt-7',
        front: 'Third-Person Limited',
        back: `Definition: The story is told in third person but limited to one character\'s perspective — like first-person but with distance.\n\nHow Writers Use It:\n• Modern literary fiction often uses this approach\n\nEffect: Balance between closeness and distance; allows irony; character can be analysed while we understand their feelings`,
      },
      {
        id: 'nt-8',
        front: 'Stream of Consciousness',
        back: `Definition: A narrative technique that reproduces the unfiltered flow of a character\'s thoughts, including fragmented and associative thinking.\n\nHow Writers Use It:\n• Joyce (Ulysses): Unfiltered thought sequences\n• Woolf: Shows inner psychological states\n\nEffect: Deep psychological insight; can feel disorienting; blurs line between thought and narration`,
      },
      {
        id: 'nt-9',
        front: 'Interior Monologue',
        back: `Definition: A character\'s unspoken thoughts rendered directly to the reader, as if overhearing their internal voice.\n\nHow Writers Use It:\n• Brontë: Jane\'s inner thoughts\n• Dickens: Characters\' reflections\n\nEffect: Creates intimacy and immediacy; allows contrast between what character says vs. thinks; reveals hidden motivations`,
      },
      {
        id: 'nt-10',
        front: 'Dialogue',
        back: `Definition: Conversation between characters; a primary method of characterisation and advancing plot.\n\nCharacterisation Through Speech:\n• Diction: Word choices reveal education, region, personality\n• Dialect/Accent: Speech patterns signal social class\n• Silence: What\'s NOT said reveals tension or shame\n• Subtext: Hidden meaning beneath surface conversation`,
      },
      {
        id: 'nt-11',
        front: 'Direct vs. Indirect Speech',
        back: `Definition:\n• Direct speech: Exact words spoken in quotation marks ("I am angry")\n• Indirect speech: Content of speech reported by narrator ("He said he was angry")\n\nEffect of Direct: Immediacy, authenticity, reader hears actual voice\n\nEffect of Indirect: Distance, summary, narrator controls how we receive information\n\nAnalyse: Why does writer shift between these? Whose perspective is privileged?`,
      },
      {
        id: 'nt-12',
        front: 'Dramatic Irony',
        back: `Definition: The audience/reader knows something the character does not, creating tension or comedy.\n\nHow Writers Use It:\n• Shakespeare: Audience knows the "poison" in Romeo and Juliet is fake\n• Dickens: Readers understand Scrooge\'s danger while he dismisses warnings\n\nEffect: Creates suspense; can be darkly comic; involves reader as privileged observer`,
      },
      {
        id: 'nt-13',
        front: 'Situational Irony',
        back: `Definition: What actually happens is contrary to what is expected or desired — reality contradicts expectation.\n\nHow Writers Use It:\n• The man who builds a house dies before completing it\n• Dickens: Scrooge, who fears ghosts, is visited by three\n\nEffect: Highlights human powerlessness; can be tragic or comic; makes life seem unpredictable`,
      },
      {
        id: 'nt-14',
        front: 'Verbal Irony',
        back: `Definition: A character says the opposite of what they mean, often for sarcasm or humour.\n\nHow Writers Use It:\n• Austen: "It is a truth universally acknowledged..." is ironic\n• Browning ("My Last Duchess"): Duke praises his courtesy while revealing jealousy\n• Modern dialogue: "Oh, great, a traffic jam" (said sarcastically)\n\nEffect: Creates humour; reveals character attitude`,
      },
      {
        id: 'nt-15',
        front: 'Symbolism',
        back: `Definition: An object, action, or character that represents something beyond its literal meaning.\n\nHow to Identify Symbols:\n• Repeated objects or actions (suggests significance)\n• Objects with traditional meaning (chains = bondage, light = truth, darkness = evil)\n• Connections to themes (author links symbol to main idea)\n\nAnalyse: What does symbol literally represent? What larger idea does it stand for? How does meaning develop?`,
      },
      {
        id: 'nt-16',
        front: 'Metaphor',
        back: `Definition: A direct comparison between two unlike things without "like" or "as," suggesting one thing IS another.\n\nHow Writers Use It:\n• "Life is a journey" — suggests life has direction, stages, obstacles\n• "Scrooge\'s heart is frozen" — suggests emotional coldness\n\nEffect: Creates vivid imagery; suggests deeper meaning through comparison; can create irony`,
      },
      {
        id: 'nt-17',
        front: 'Simile',
        back: `Definition: A comparison between two unlike things using "like" or "as."\n\nHow Writers Use It:\n• "As lonely as an oyster" — Dickens on Scrooge\n• "Like a thief in the night" — suggests stealth and danger\n\nEffect: Creates vivid, memorable images; slightly more obvious than metaphor; can be beautiful or comic`,
      },
      {
        id: 'nt-18',
        front: 'Personification',
        back: `Definition: Giving human qualities to non-human things.\n\nHow Writers Use It:\n• "The wind howled in anger" — wind has human emotion\n• "The city sleeps" — the city is alive and conscious\n• "Death came for him" — death is an active character\n\nEffect: Makes the non-human feel immediate and alive; creates mood; suggests character\'s psychological state`,
      },
      {
        id: 'nt-19',
        front: 'Hyperbole (Exaggeration)',
        back: `Definition: Extreme exaggeration for emphasis, not meant to be taken literally.\n\nHow Writers Use It:\n• "I\'ve told you a million times" — exaggerates frequency\n• "He was the worst person who ever lived" — absolute language for effect\n\nEffect: Creates emphasis and emotional intensity; can be comic or dramatic; suggests emotional state`,
      },
      {
        id: 'nt-20',
        front: 'Understatement (Meiosis)',
        back: `Definition: Deliberately making something seem less significant than it is, often for ironic or comedic effect.\n\nHow Writers Use It:\n• "That\'s not good" when describing catastrophe\n• British understatement: "Rather unfortunate" for tragedy\n\nEffect: Creates dry humour; makes serious situations absurd; signals emotional distance or coping`,
      },
      {
        id: 'nt-21',
        front: 'Allusion',
        back: `Definition: An indirect reference to another work, person, event, or idea.\n\nHow Writers Use It:\n• Dickens alludes to biblical stories (Marley\'s chains echo damnation)\n• Literature alludes to Shakespeare, myths, historical events\n• Creates layers of meaning for educated readers\n\nEffect: Enriches text for those who recognise the reference; suggests author\'s influences; connects text to broader culture`,
      },
      {
        id: 'nt-22',
        front: 'Oxymoron',
        back: `Definition: A figure of speech that combines two contradictory or opposite ideas.\n\nHow Writers Use It:\n• "Sweet sorrow" — combines pleasure and pain\n• "Deafening silence" — combines sound and silence\n• "Cruel kindness" — combines harm and help\n\nEffect: Creates paradox and thought; emphasises contradiction; suggests complexity of experience`,
      },
      {
        id: 'nt-23',
        front: 'Pun',
        back: `Definition: A play on words that exploits multiple meanings or sounds alike.\n\nHow Writers Use It:\n• "Time flies like an arrow; fruit flies like a banana" — plays on word "flies"\n• Shakespeare uses puns constantly\n• Comic writing uses puns for humour\n\nEffect: Creates wordplay and humour; can be comic or groan-worthy; shows wit and linguistic skill`,
      },
      {
        id: 'nt-24',
        front: 'Paradox',
        back: `Definition: A statement that seems contradictory but may reveal a truth.\n\nHow Writers Use It:\n• "The only way to find yourself is to lose yourself"\n• Dickens: Scrooge gains happiness by giving up wealth\n• Creates intellectual tension\n\nEffect: Makes reader think; reveals complex truths; suggests life is paradoxical and complex`,
      },
      {
        id: 'nt-25',
        front: 'Pathetic Fallacy',
        back: `Definition: The attribution of human emotions to nature or inanimate objects.\n\nHow Writers Use It:\n• "The sky wept" — the sky is sad\n• "The angry sea crashed" — the sea is angry\n• Weather mirrors character emotions (rain = sadness, sun = joy)\n\nEffect: Creates mood; suggests nature reflects inner emotional states; connects character to environment`,
      },
      {
        id: 'nt-26',
        front: 'Climax',
        back: `Definition: The turning point or moment of highest tension in a narrative — the point where the main conflict is resolved.\n\nHow Writers Use It:\n• Dickens: Scrooge\'s confrontation with his own death (Stave 4) is the climax\n• Drama: The moment of final decision or revelation\n• Plot structure: Everything leads to climax\n\nAnalyse: What is the climactic moment? What resolves? How does everything change?`,
      },
      {
        id: 'nt-27',
        front: 'Denouement (Resolution)',
        back: `Definition: The final part of a story after the climax, where loose ends are tied up and new equilibrium is established.\n\nHow Writers Use It:\n• Dickens: Stave 5 is the denouement — Scrooge is transformed, the world accepts him\n• Shows consequences of climactic decision\n• Answers remaining questions\n\nAnalyse: What is resolved? What remains unresolved? How does ending affect your interpretation of the whole?`,
      },
      {
        id: 'nt-28',
        front: 'Exposition',
        back: `Definition: The part of a narrative that provides necessary background information, setting, and context.\n\nHow Writers Use It:\n• Dickens: Early stave establishes Scrooge\'s character, Christmas Eve, the financial world\n• Must be clear but not clunky\n• Information must be woven into narrative\n\nAnalyse: How does writer introduce necessary information? Is exposition obvious or seamless? Does it slow the story?`,
      },
      {
        id: 'nt-29',
        front: 'Rising Action',
        back: `Definition: The series of events that build tension and develop conflict between the exposition and climax.\n\nHow Writers Use It:\n• Dickens: Staves 2-4 build tension as Scrooge witnesses consequences and confronts fear\n• Each event raises stakes or reveals new information\n• Reader's tension increases\n\nAnalyse: What events build tension? How is each more significant than the last? What is at stake?`,
      },
      {
        id: 'nt-30',
        front: 'Setting',
        back: `Definition: The time and place where a narrative occurs — both physical location and historical/social context.\n\nHow Writers Use It:\n• Physical setting: London, Scrooge\'s counting house, the streets\n• Historical context: Victorian England, 1843, Industrial Revolution\n• Setting shapes plot (ghosts only visit at night, on Christmas Eve)\n• Setting reveals character (Scrooge\'s cold, dark house reflects his heart)\n\nAnalyse: How does setting influence the story? Would story work in different time/place?`,
      },
      {
        id: 'nt-31',
        front: 'Atmosphere (Mood)',
        back: `Definition: The emotional tone or feeling that pervades a work — the mood the reader experiences.\n\nHow Writers Create It:\n• Word choice (dark, cold language for fear; bright, warm language for joy)\n• Setting details (fog, darkness, chill = danger or sadness)\n• Pacing (fast = excitement; slow = suspense or melancholy)\n• Character reactions (if characters are afraid, reader feels dread)\n\nAnalyse: What is the mood? How does it shift? What literary techniques create it?`,
      },
      {
        id: 'nt-32',
        front: 'Tone',
        back: `Definition: The author\'s attitude toward the subject or audience — the voice the author uses.\n\nHow Writers Establish It:\n• Diction (formal vs. casual language)\n• Sentence structure (simple vs. complex affects pace and tone)\n• Narrator\'s commentary (what narrator approves/disapproves of)\n• Examples: ironic, sarcastic, earnest, mocking, reverent, dark, light\n\nAnalyse: What is the author\'s tone? How does it affect our response? Does tone shift?`,
      },
      {
        id: 'nt-33',
        front: 'Point of View (POV)',
        back: `Definition: The perspective from which a story is told — who is telling the story and what they can see/know.\n\nMain Types:\n• First-person ("I"): Limited to narrator\'s knowledge\n• Second-person ("you"): Rare; creates direct address\n• Third-person omniscient: Knows all\n• Third-person limited: Stays with one character\n• Third-person objective: Reports only observable facts\n\nAnalyse: What POV is used? How does it limit or expand our understanding? Whose perspective dominates?`,
      },
      {
        id: 'nt-34',
        front: 'Characterisation',
        back: `Definition: The methods an author uses to develop and reveal character.\n\nDirect Characterisation:\n• Author tells us directly: "He was greedy"\n\nIndirect Characterisation (STEAL):\n• Speech: What character says and how\n• Thoughts: What character thinks\n• Effects: How character affects others\n• Actions: What character does\n• Looks: Physical description\n\nAnalyse: How do we learn about character? What methods does author use? How reliable is characterisation?`,
      },
      {
        id: 'nt-35',
        front: 'Character Development (Arc)',
        back: `Definition: How a character changes throughout the narrative — their psychological and emotional journey.\n\nTypes of Arcs:\n• Positive arc: Character improves (Scrooge goes from miser to generous)\n• Negative arc: Character deteriorates (falls into vice or corruption)\n• Flat arc: Character doesn\'t change (remains consistent)\n• Complex arc: Character changes in contradictory ways\n\nAnalyse: How does character develop? What causes change? Is change believable? What does change suggest about themes?`,
      },
      {
        id: 'nt-36',
        front: 'Conflict (Internal vs. External)',
        back: `Definition:\n• External conflict: Character vs. external force (person, environment, society, supernatural)\n• Internal conflict: Character vs. themselves (desire vs. duty, fear vs. courage)\n\nHow Writers Use Both:\n• Dickens: Scrooge fights external supernatural visitors AND internal resistance to change\n• Often, internal conflict drives external plot\n\nAnalyse: What conflicts drive the story? Are they resolved? How do internal and external conflicts interact?`,
      },
      {
        id: 'nt-37',
        front: 'Theme',
        back: `Definition: A central idea or message in a work, often about human nature, society, or life.\n\nHow Writers Convey Themes:\n• Repetition: Central ideas recur throughout\n• Character development: Theme shown through character change\n• Symbolism: Objects represent ideas\n• Conflict: Characters' struggles reveal thematic ideas\n• Dialogue: Characters discuss or embody themes\n\nAnalyse: What is the main theme? How is it developed? Is it explicitly stated or implied? What is author\'s message?`,
      },
      {
        id: 'nt-38',
        front: 'Motif',
        back: `Definition: A recurring image, phrase, action, or concept that develops a theme.\n\nHow Writers Use Motifs:\n• In Dickens: Christmas recurs (greed vs. generosity)\n• In literature: Light/darkness, journey, season, number\n• Repetition creates meaning\n\nAnalyse: What motifs recur? How do they develop? What do they suggest about the author\'s message?`,
      },
      {
        id: 'nt-39',
        front: 'Imagery',
        back: `Definition: Vivid, descriptive language that appeals to the senses (sight, sound, smell, taste, touch).\n\nHow Writers Use It:\n• Creates vivid mental pictures\n• Engages reader emotionally\n• Often symbolic\n• Dickens: Cold imagery for Scrooge (emotional coldness = physical coldness)\n\nAnalyse: What imagery dominates? How does it affect mood? Is imagery symbolic?`,
      },
      {
        id: 'nt-40',
        front: 'Diction',
        back: `Definition: The choice and use of words in a text — vocabulary, style, formality level.\n\nHow Diction Works:\n• Formal diction: "The gentleman did not comply" (distant, proper)\n• Informal diction: "The guy wouldn\'t do it" (casual, familiar)\n• Archaic diction: "Hath," "thee" (old-fashioned, formal)\n• Technical diction: Specific vocabulary for a field\n\nAnalyse: What diction does author use? How does it affect tone and characterisation? Does diction reflect social class?`,
      },
      {
        id: 'nt-41',
        front: 'Syntax',
        back: `Definition: The arrangement of words and structure of sentences in a text.\n\nHow Syntax Works:\n• Simple sentences: Fast pacing, clarity, impact ("I came. I saw. I conquered.")\n• Complex sentences: Slow pacing, complexity, sophistication\n• Sentence fragments: Emphasis, mood, modern feel\n• Parallel structure: Rhythm, emphasis, memorability\n\nAnalyse: What sentence patterns does author use? How does syntax affect pacing and meaning? Does it reflect character voice?`,
      },
      {
        id: 'nt-42',
        front: 'Repetition',
        back: `Definition: The intentional recurrence of words, phrases, images, or ideas in a text.\n\nHow Writers Use It:\n• Emphasis: Repeating key words emphasises their importance\n• Rhythm: Repetition creates patterns and music\n• Characterisation: Repeated actions reveal character\n• Theme: Repeating ideas develops theme\n• Dickens: "Christmas" recurs throughout, developing the theme\n\nAnalyse: What is repeated? What effect does repetition have? How does it serve the author\'s purpose?`,
      },
      {
        id: 'nt-43',
        front: 'Parallel Structure',
        back: `Definition: The use of similar grammatical forms or structures to create rhythm, emphasis, or meaning.\n\nHow Writers Use It:\n• "I came, I saw, I conquered" — three parallel clauses\n• "As lonely as an oyster, as hard as nails" — parallel similes\n• "Neither rich nor poor, neither young nor old" — parallel negatives\n\nEffect: Creates rhythm, memorability, emphasis, balance\n\nAnalyse: Where is parallel structure used? How does it affect meaning or emphasis?`,
      },
      {
        id: 'nt-44',
        front: 'Juxtaposition',
        back: `Definition: The placing of two contrasting things side by side to emphasise their differences.\n\nHow Writers Use It:\n• Dickens: Scrooge\'s cold, dark home vs. the Cratchits\' warm, crowded dinner\n• Rich vs. poor, light vs. darkness, past vs. future\n• Emphasises contrast through proximity\n\nEffect: Highlights differences; creates irony or emotional impact; invites comparison\n\nAnalyse: What contrasts are juxtaposed? Why? What does the comparison suggest?`,
      },
      {
        id: 'nt-45',
        front: 'Analogy',
        back: `Definition: An extended comparison between two things that share certain characteristics, used to explain or clarify.\n\nHow Writers Use It:\n• "Life is like a journey" — develops the comparison across multiple lines\n• Explains complex ideas through familiar ones\n• Builds extended metaphor\n\nEffect: Makes abstract ideas concrete; aids understanding; creates depth\n\nAnalyse: What analogy is used? What two things are compared? How does the comparison deepen understanding?`,
      },
      {
        id: 'nt-46',
        front: 'Enjambment',
        back: `Definition: In poetry, the continuation of a sentence beyond the end of a line or stanza.\n\nHow Writers Use It:\n• Creates flow across line breaks\n• Emphasises particular words at the end of lines\n• Can create suspense (reader waits for continuation)\n\nEffect: Disrupts line-by-line rhythm; forces connection between ideas; creates emphasis\n\nAnalyse: Where does enjambment occur? How does it affect meaning or pacing?`,
      },
      {
        id: 'nt-47',
        front: 'Caesura',
        back: `Definition: In poetry, a pause or break within a line, usually marked by punctuation.\n\nHow Writers Use It:\n• Creates rhythm and emphasis\n• Forces pause for reflection\n• Can represent silence or emotional weight\n• Often in the middle of a line\n\nEffect: Breaks rhythm; creates emphasis; adds weight to surrounding words\n\nAnalyse: Where do caesuras occur? What do they emphasise? How do they affect pacing?`,
      },
      {
        id: 'nt-48',
        front: 'Volta',
        back: `Definition: In poetry, a shift or turning point where the poem\'s direction, tone, or thought changes.\n\nHow Writers Use It:\n• Often marks shift from question to answer, problem to solution\n• In sonnets, often occurs at line 9 (between octave and sestet)\n• Can be subtle or dramatic\n\nEffect: Creates surprise; marks intellectual or emotional turning point; focuses attention\n\nAnalyse: Where does volta occur? What changes? How does shift develop the poem\'s meaning?`,
      },
      {
        id: 'nt-49',
        front: 'Alliteration',
        back: `Definition: The repetition of beginning consonant sounds in neighbouring words.\n\nHow Writers Use It:\n• "The fair field was full of folk" — repetition of "f"\n• "Sally sells seashells" — repetition of "s"\n• Creates musicality and emphasis\n\nEffect: Creates rhythm and memorability; emphasises particular words; creates mood\n\nAnalyse: What sounds are repeated? How does alliteration affect tone or emphasis?`,
      },
      {
        id: 'nt-50',
        front: 'Assonance',
        back: `Definition: The repetition of vowel sounds in neighbouring words.\n\nHow Writers Use It:\n• "The silky, shimmering scene" — repetition of "i" sound\n• Creates musicality different from alliteration\n• Often subtle, but affects flow\n\nEffect: Creates flow and musicality; can create mood; affects how words sound together\n\nAnalyse: What vowel sounds are repeated? How does assonance affect the sound and mood of the passage?`,
      },
    ],
  },
  // ===== LANGUAGE DEVICES & STYLISTIC FEATURES DECK (100 cards) =====
  {
    id: 'language-devices',
    title: 'Language Devices & Stylistic Features',
    description: 'Language devices and stylistic features for analysis',
    category: 'Devices',
    board: 'All',
    cards: [
      {
        id: 'ld-1',
        front: 'Rhetoric (Art of Persuasion)',
        back: `Definition: The art of using language effectively to persuade, inform, or move an audience.\n\nRhetorical Devices:\n• Ethos: Appeals to credibility or character\n• Pathos: Appeals to emotion\n• Logos: Appeals to logic or reason\n• Rhetorical questions: Questions asked for effect, not answer\n\nAnalyse: What persuasive techniques does writer use? How does language aim to persuade?`,
      },
      {
        id: 'ld-2',
        front: 'Antithesis',
        back: `Definition: The juxtaposition of contrasting ideas in parallel structure.\n\nExample: "Ask not what your country can do for you; ask what you can do for your country"\n\nEffect: Creates emphasis through contrast; makes ideas memorable; suggests complexity\n\nAnalyse: Where is antithesis used? What contrasts are emphasised? How does it strengthen meaning?`,
      },
      {
        id: 'ld-3',
        front: 'Anaphora',
        back: `Definition: The repetition of words or phrases at the beginning of successive clauses or sentences.\n\nExample: "Go forward, go backward, go upside down, go inside out"\n\nEffect: Creates rhythm and emphasis; builds power; makes lists memorable\n\nAnalyse: What phrase is repeated? How does anaphora affect emphasis and sound?`,
      },
      {
        id: 'ld-4',
        front: 'Epistrophe',
        back: `Definition: The repetition of words or phrases at the end of successive clauses or sentences.\n\nExample: "We are a people; all people are we"\n\nEffect: Creates rhythm; emphasises the repeated word; creates closure\n\nAnalyse: What phrase ends the clauses? How does it affect emphasis and unity?`,
      },
      {
        id: 'ld-5',
        front: 'Chiasmus',
        back: `Definition: A reversal of grammatical structures in successive phrases to create balance and emphasis.\n\nExample: "Ask not what your country can do for you; ask what you can do for your country"\n\nEffect: Creates symmetry and balance; makes statement memorable; suggests complexity\n\nAnalyse: What structures are reversed? How does reversal create meaning?`,
      },
      {
        id: 'ld-6',
        front: 'Litotes',
        back: `Definition: A deliberate understatement that affirms something by denying its opposite.\n\nExample: "He\'s no fool" (means he\'s intelligent); "It\'s not bad" (means it\'s good)\n\nEffect: Creates subtle emphasis; can be ironic or polite; creates humor\n\nAnalyse: What is asserted through negation? How does this affect tone?`,
      },
      {
        id: 'ld-7',
        front: 'Rhetorical Question',
        back: `Definition: A question asked for effect, not expecting an answer — asked to make a point.\n\nExample: "Would anyone support this proposal?" (suggesting no one would)\n\nEffect: Engages reader; makes point more emphatic than direct statement; invites reader agreement\n\nAnalyse: What point does the rhetorical question make? Why is question more effective than statement?`,
      },
      {
        id: 'ld-8',
        front: 'Metonymy',
        back: `Definition: A figure of speech where one thing is referred to by the name of something associated with it.\n\nExample: "The White House announced..." (means the President/staff, not the building)\n\nEffect: Creates conciseness; suggests connections; can be poetic or ordinary\n\nAnalyse: What substitution is made? What is the connection between the two things?`,
      },
      {
        id: 'ld-9',
        front: 'Synecdoche',
        back: `Definition: A figure of speech where a part represents the whole or vice versa.\n\nExample: "All hands on deck" (hands = sailors); "Hollywood loves scandal" (Hollywood = the film industry)\n\nEffect: Creates conciseness; can be poetic; emphasises particular aspect\n\nAnalyse: What part represents whole or whole represents part? Why this choice?`,
      },
      {
        id: 'ld-10',
        front: 'Litotes',
        back: `Definition: Understatement for ironic or emphatic effect, often using negative construction.\n\nExample: "That\'s not bad" (good); "She\'s no idiot" (intelligent)\n\nEffect: Creates subtlety; can be polite or sarcastic; makes reader infer full meaning\n\nAnalyse: What is understated? How does understatement affect tone?`,
      },
      {
        id: 'ld-11',
        front: 'Allusion',
        back: `Definition: An indirect reference to another work, person, event, or idea.\n\nHow Writers Use It:\n• Dickens alludes to biblical stories\n• Enriches text for educated readers\n• Connects text to broader culture\n\nEffect: Adds layers of meaning; rewards careful reading; suggests author\'s influences\n\nAnalyse: What is alluded to? What does the allusion add to meaning?`,
      },
      {
        id: 'ld-12',
        front: 'Colloquialism',
        back: `Definition: Informal, conversational language or expressions typical of everyday speech.\n\nExample: "gonna," "sorta," "y\'all," "What\'s up?"\n\nEffect: Creates informal tone; makes characters seem realistic; builds reader rapport\n\nAnalyse: Where is colloquial language used? How does it affect characterisation and tone?`,
      },
      {
        id: 'ld-13',
        front: 'Jargon',
        back: `Definition: Specialized vocabulary particular to a profession, activity, or group.\n\nExample: Legal jargon ("defendant," "plaintiff"); medical jargon ("cardiac arrest")\n\nEffect: Creates authenticity in particular fields; can exclude those unfamiliar; signals expertise\n\nAnalyse: What jargon appears? How does it affect credibility and accessibility?`,
      },
      {
        id: 'ld-14',
        front: 'Cliché',
        back: `Definition: An overused phrase or idea that has lost its originality and impact.\n\nExample: "Crystal clear," "at the end of the day," "it is what it is"\n\nEffect: Can indicate lazy writing; sometimes used intentionally for irony or characterisation\n\nAnalyse: Where are clichés used? Are they used intentionally or accidentally? How do they affect writing quality?`,
      },
      {
        id: 'ld-15',
        front: 'Idiom',
        back: `Definition: A phrase or expression whose meaning cannot be understood from the individual words — meaning is conveyed as a whole.\n\nExample: "Break the ice" (not literally break ice, but start conversation); "Cost an arm and a leg" (very expensive)\n\nEffect: Creates authentic language; shows cultural knowledge; can be humorous\n\nAnalyse: What idioms appear? How do they reveal character or cultural context?`,
      },
      {
        id: 'ld-16',
        front: 'Understatement vs. Overstatement',
        back: `Definition:\n• Understatement (litotes/meiosis): Making something seem less significant\n• Overstatement (hyperbole): Making something seem more significant\n\nEffect of Understatement: Creates dry humor, irony, subtlety\n\nEffect of Overstatement: Emphasises emotion, importance, or absurdity\n\nAnalyse: How do these techniques contrast? What effect does each create?`,
      },
      {
        id: 'ld-17',
        front: 'Concrete Language',
        back: `Definition: Language that refers to specific, tangible things that can be perceived by the senses.\n\nExample: "The red apple" vs. "the fruit"; "the cold winter wind" vs. "bad weather"\n\nEffect: Creates vivid imagery; makes writing memorable; engages reader\n\nAnalyse: How does concrete language enhance the writing? What specific details does writer include?`,
      },
      {
        id: 'ld-18',
        front: 'Abstract Language',
        back: `Definition: Language that refers to ideas, concepts, or qualities that cannot be perceived by the senses.\n\nExample: "justice," "beauty," "love," "freedom"\n\nEffect: Communicates ideas and concepts; can be poetic or philosophical; requires interpretation\n\nAnalyse: What abstract concepts appear? How does abstract language serve the theme?`,
      },
      {
        id: 'ld-19',
        front: 'Denotation vs. Connotation',
        back: `Definition:\n• Denotation: The literal, dictionary definition of a word\n• Connotation: The emotional or cultural associations of a word\n\nExample: "Thin" (denotation) vs. "skinny" (negative) vs. "slender" (positive)\n\nAnalyse: What are the connotations of key words? How do connotations shape meaning?`,
      },
      {
        id: 'ld-20',
        front: 'Semantic Field',
        back: `Definition: A group of related words that cluster around a concept or theme.\n\nExample: Words related to "death": expired, departed, passed away, deceased, perished\n\nEffect: Creates atmosphere; emphasises theme; shows language choices\n\nAnalyse: What semantic fields dominate the text? What do they suggest about themes?`,
      },
      {
        id: 'ld-21',
        front: 'Archaic Language',
        back: `Definition: Words or expressions that are old-fashioned and no longer in common use.\n\nExample: "Thou," "thee," "hath," "forsooth," "prithee"\n\nEffect: Creates period feeling; sounds formal or elevated; can be comic or serious\n\nAnalyse: Where is archaic language used? How does it affect tone and setting?`,
      },
      {
        id: 'ld-22',
        front: 'Neologism',
        back: `Definition: A newly created word or expression, or an old word used in a new way.\n\nExample: "Selfie," "binge-watch," "email" (once new, now common)\n\nEffect: Creates modernity; can be creative or playful; may confuse unfamiliar readers\n\nAnalyse: What new words are used? Why did the writer create or use them?`,
      },
      {
        id: 'ld-23',
        front: 'Pun',
        back: `Definition: A play on words that exploits multiple meanings or similar sounds.\n\nExample: "Time flies like an arrow; fruit flies like a banana"\n\nEffect: Creates wordplay and humour; shows wit; can be groan-worthy\n\nAnalyse: What words are used in multiple ways? How effective is the pun?`,
      },
      {
        id: 'ld-24',
        front: 'Oxymoron',
        back: `Definition: A combination of contradictory or opposite terms placed together.\n\nExample: "Sweet sorrow," "deafening silence," "cruel kindness"\n\nEffect: Creates paradox; suggests complexity; can be poetic or humorous\n\nAnalyse: What contradictions are combined? What does this suggest about the situation?`,
      },
      {
        id: 'ld-25',
        front: 'Paradox',
        back: `Definition: A statement that seems self-contradictory but may reveal a truth.\n\nExample: "The only way to gain freedom is to lose yourself"\n\nEffect: Makes reader think; suggests life is complex; reveals deeper truth\n\nAnalyse: What contradiction is presented? What truth might it reveal?`,
      },
      {
        id: 'ld-26',
        front: 'Antonym',
        back: `Definition: A word with the opposite meaning of another word.\n\nExample: Hot/cold, love/hate, beginning/end\n\nHow Writers Use It:\n• Create contrast; emphasise differences; clarify meanings\n\nAnalyse: What opposites are presented? How does opposition create meaning?`,
      },
      {
        id: 'ld-27',
        front: 'Synonym',
        back: `Definition: A word with the same or nearly the same meaning as another word.\n\nExample: Happy/joyful, sad/melancholy, run/sprint\n\nHow Writers Use It:\n• Vary vocabulary; avoid repetition; find precise nuances of meaning\n\nAnalyse: Why does writer choose particular synonyms? What nuances are created?`,
      },
      {
        id: 'ld-28',
        front: 'Onomatopoeia',
        back: `Definition: A word that imitates the sound it represents.\n\nExample: "Buzz," "hiss," "crack," "splash," "meow"\n\nEffect: Creates vivid sensory experience; makes writing dynamic; engages reader\n\nAnalyse: What sounds are imitated? How does onomatopoeia enhance the writing?`,
      },
      {
        id: 'ld-29',
        front: 'Cacophony',
        back: `Definition: A combination of harsh, discordant sounds that create an unpleasant auditory effect.\n\nHow Writers Use It:\n• Harsh consonants: k, b, g, hard c\n• Short syllables and abrupt stops\n• Creates sense of difficulty, danger, or ugliness\n\nEffect: Creates discomfort; emphasises discord or conflict\n\nAnalyse: What harsh sounds dominate? How does this affect mood?`,
      },
      {
        id: 'ld-30',
        front: 'Euphony',
        back: `Definition: A combination of pleasant-sounding words that flow smoothly together.\n\nHow Writers Use It:\n• Soft consonants: s, f, l, soft c\n• Flowing vowels; longer syllables\n• Creates sense of beauty, calm, or ease\n\nEffect: Creates pleasure; emphasises beauty or peace\n\nAnalyse: What pleasant sounds dominate? How does this affect mood?`,
      },
      {
        id: 'ld-31',
        front: 'Transferred Epithet',
        back: `Definition: An adjective is grammatically applied to one noun but logically applies to another.\n\nExample: "A restless sleep" (the sleep is not restless; the sleeper is); "anxious hours" (hours are not anxious; the person is)\n\nEffect: Creates poetic effect; emphasises emotional state; can be subtle\n\nAnalyse: What epithet is transferred? What is the logical association?`,
      },
      {
        id: 'ld-32',
        front: 'Zeugma',
        back: `Definition: A word applies to multiple parts of a sentence in different ways (literally and figuratively, or in different senses).\n\nExample: "He lost his temper and his keys"; "She broke his heart and the vase"\n\nEffect: Creates wit or humor; can be subtle; engages reader\n\nAnalyse: How is the word used in multiple ways? What is the effect of this double usage?`,
      },
      {
        id: 'ld-33',
        front: 'Ellipsis (Omission)',
        back: `Definition: The deliberate omission of words from a sentence that the reader can infer from context.\n\nExample: "I like coffee; she [likes] tea" OR "The room was dark, [the] silence absolute"\n\nEffect: Creates conciseness; speeds pacing; can create poetic effect\n\nAnalyse: What is omitted? How does omission change the reading experience?`,
      },
      {
        id: 'ld-34',
        front: 'Antithetical Parallelism',
        back: `Definition: Parallel structure used with opposite or contrasting ideas.\n\nExample: "Ask not what your country can do for you; ask what you can do for your country"\n\nEffect: Creates balance and emphasis; makes statement memorable; highlights contrast\n\nAnalyse: What parallel structures contain opposite meanings? How does this create emphasis?`,
      },
      {
        id: 'ld-35',
        front: 'Bathos',
        back: `Definition: A sudden shift from elevated language or ideas to trivial or commonplace ones, creating anticlimax.\n\nExample: "He left the company to pursue his passion: watching television"\n\nEffect: Can create humor (intentional) or show poor writing (unintentional); highlights disappointment\n\nAnalyse: Where does elevation drop to triviality? Is it intentional humor or poor writing?`,
      },
      {
        id: 'ld-36',
        front: 'Malapropism',
        back: `Definition: The mistaken use of a word in place of a similar-sounding word, usually with unintentionally humorous effect.\n\nExample: "Texas has a lot of electrical votes" (instead of "electoral")\n\nEffect: Creates humor; can reveal character\'s education or intellect; can be comic relief\n\nAnalyse: What words are confused? What does this reveal about the character?`,
      },
      {
        id: 'ld-37',
        front: 'Alliteration (Consonance)',
        back: `Definition: The repetition of the same beginning consonant sound in words that are close together.\n\nExample: "The fair field was full of folk"; "Sally sells seashells"\n\nEffect: Creates musical quality; emphasises words; makes memorable\n\nAnalyse: What sounds are repeated? How does alliteration affect rhythm and meaning?`,
      },
      {
        id: 'ld-38',
        front: 'Assonance (Vowel Harmony)',
        back: `Definition: The repetition of vowel sounds in nearby words.\n\nExample: "The silky, shimmering scene"; "The light might ignite tonight"\n\nEffect: Creates flow and music; links words thematically; affects mood\n\nAnalyse: What vowel sounds are repeated? How does assonance affect sound and mood?`,
      },
      {
        id: 'ld-39',
        front: 'Consonance',
        back: `Definition: The repetition of consonant sounds within or at the end of words, creating internal rhyme.\n\nExample: "Back to black"; "The mutt struts"\n\nEffect: Creates rhythm; links words; can be subtle\n\nAnalyse: What consonant patterns appear? How do they connect ideas?`,
      },
      {
        id: 'ld-40',
        front: 'Sestina',
        back: `Definition: A complex poetic form with six six-line stanzas and a three-line envoi, using word repetition instead of rhyme.\n\nStructure: Six end words repeat in a strict pattern.\n\nEffect: Creates elaborate, musical structure; emphasises certain words; demands skilled execution\n\nAnalyse: What six words are repeated? How do repetitions create meaning?`,
      },
      {
        id: 'ld-41',
        front: 'Pantoum',
        back: `Definition: A poetic form with interlocking stanzas where lines repeat in a pattern, building meaning through repetition.\n\nStructure: Each stanza repeats two lines from the previous stanza.\n\nEffect: Creates circular, hypnotic effect; emphasises certain lines; builds meaning through return\n\nAnalyse: How do lines repeat? What effect does the repetition create?`,
      },
      {
        id: 'ld-42',
        front: 'Free Verse',
        back: `Definition: Poetry without regular meter, rhyme, or strict stanzaic form — freedom from formal constraints.\n\nHow Writers Use It:\n• No set pattern; lines break based on meaning\n• Natural speech patterns\n• Emphasises individual words and ideas\n\nEffect: Feels modern or liberated; emphasises content over form; can feel fragmentary\n\nAnalyse: How do line breaks create meaning? Why did poet choose free verse?`,
      },
      {
        id: 'ld-43',
        front: 'Blank Verse',
        back: `Definition: Poetry written in unrhymed iambic pentameter (ten syllables per line, alternating unstressed/stressed).\n\nHow Writers Use It:\n• Shakespeare uses blank verse in dramas\n• Milton uses it in Paradise Lost\n• Formal but flexible\n\nEffect: Creates rhythm without constraining meaning; feels elevated\n\nAnalyse: How does iambic pentameter affect the reading? What effect does lack of rhyme create?`,
      },
      {
        id: 'ld-44',
        front: 'Rhyme Scheme',
        back: `Definition: The pattern of rhymes at the ends of lines, typically marked with letters (ABAB, AABB, etc.).\n\nCommon Schemes:\n• ABAB: Alternate rhyme (creates alternating rhythm)\n• AABB: Couplets (creates paired rhythm)\n• ABBA: Enclosed rhyme (creates circling effect)\n\nEffect: Creates music; unifies stanzas; affects pacing\n\nAnalyse: What is the rhyme scheme? How does it affect the poem\'s sound and structure?`,
      },
      {
        id: 'ld-45',
        front: 'Internal Rhyme',
        back: `Definition: Rhyme that occurs within a line or between nearby lines, rather than just at the ends.\n\nExample: "The fair-haired flare of light"; "Once upon a midnight dreary, while I pondered, weary"\n\nEffect: Creates musicality within lines; emphasises words; can feel forced if overdone\n\nAnalyse: Where do internal rhymes occur? How do they enhance sound and meaning?`,
      },
      {
        id: 'ld-46',
        front: 'Slant Rhyme (Near Rhyme)',
        back: `Definition: Words that are similar but not identical in sound, creating approximate rather than perfect rhyme.\n\nExample: "Home/come," "soul/oil," "Dulles/dells"\n\nEffect: Creates flexibility; sounds more natural than perfect rhyme; can emphasise subtle connections\n\nAnalyse: What near-rhymes appear? Why might poet choose approximate over perfect rhyme?`,
      },
      {
        id: 'ld-47',
        front: 'Eye Rhyme',
        back: `Definition: Words that look like they rhyme (similar spelling) but do not sound alike.\n\nExample: "Cough/though," "love/move," "heard/beard"\n\nEffect: Can create intentional discord; shows written language vs. spoken; can be comic\n\nAnalyse: What words look like they should rhyme? What is the effect of this visual trick?`,
      },
      {
        id: 'ld-48',
        front: 'Iambic Pentameter',
        back: `Definition: A metrical pattern with ten syllables per line, with unstressed/stressed pairs (iambs), so pattern is da-DUM da-DUM da-DUM da-DUM da-DUM.\n\nExample: "So LONG as MEN can BREATHE or EYES can SEE, / So LONG lives THIS, and THIS gives LIFE to THEE"\n\nEffect: Creates natural rhythm; feels elevated; the default for English poetry\n\nAnalyse: How many feet per line? Does writer strictly follow the meter or vary it?`,
      },
      {
        id: 'ld-49',
        front: 'Trochaic Meter',
        back: `Definition: A metrical pattern where stressed/unstressed pairs (trochees) dominate: DUM-da DUM-da DUM-da.\n\nExample: "TELL me NOT in MOURNFUL NUM-bers"\n\nEffect: Creates bouncy, energetic rhythm; feels different from iambic; can feel archaic\n\nAnalyse: What is the stressed/unstressed pattern? How does trochaic meter affect the poem\'s pace?`,
      },
      {
        id: 'ld-50',
        front: 'Dactylic Meter',
        back: `Definition: A metrical pattern where stressed/unstressed/unstressed triads (dactyls) dominate: DUM-da-da DUM-da-da.\n\nExample: "MERRILY we ROLL along"\n\nEffect: Creates falling rhythm; feels musical; often used in light or epic verse\n\nAnalyse: What is the stressed/unstressed pattern? How does dactylic meter affect tone?`,
      },
      {
        id: 'ld-51',
        front: 'Spondee',
        back: `Definition: A metrical foot with two consecutive stressed syllables: DUM-DUM.\n\nExample: "War drums" in iambic verse\n\nEffect: Creates emphasis; breaks regular meter; slows pacing\n\nAnalyse: Where do spondees interrupt regular meter? What effect do they create?`,
      },
      {
        id: 'ld-52',
        front: 'Pyrrhic (Dibrach)',
        back: `Definition: A metrical foot with two consecutive unstressed syllables: da-da.\n\nExample: "Of the" in iambic meter\n\nEffect: Creates lightness; speeds pacing; can weaken emphasis\n\nAnalyse: Where do pyrrhic feet appear? How do they affect the meter\'s flow?`,
      },
      {
        id: 'ld-53',
        front: 'Stress (Accent)',
        back: `Definition: The emphasis placed on a syllable in a word or line; the natural loudness or prominence of a syllable.\n\nHow Stress Works:\n• Some syllables are naturally stressed (PER-fect)\n• In poetry, stress creates meter and emphasis\n• Can change meaning (LEAD vs. lead)\n\nAnalyse: Which syllables are stressed? How does stress pattern create meaning?`,
      },
      {
        id: 'ld-54',
        front: 'Caesura (Pause)',
        back: `Definition: A pause within a line of poetry, usually marked by punctuation.\n\nExample: "With death, the morning came" — pause after "death"\n\nEffect: Creates rhythm and emphasis; forces reflection; adds weight to words around it\n\nAnalyse: Where do caesuras occur? What do they emphasise? How do they affect pacing?`,
      },
      {
        id: 'ld-55',
        front: 'Enjambment',
        back: `Definition: The continuation of a grammatical phrase or clause beyond the end of a line or stanza.\n\nExample: "The world is not\nenough" — thought continues across line break\n\nEffect: Creates flow; speeds reading; emphasises last word of line; can create suspense\n\nAnalyse: Where does enjambment occur? How does it affect pacing and emphasis?`,
      },
      {
        id: 'ld-56',
        front: 'Volta (Turn)',
        back: `Definition: A shift or turning point in thought, emotion, or tone within a poem.\n\nWhere It Occurs:\n• In sonnets: Often at line 9 (between octave and sestet)\n• In other poems: Marked by word like "but," "yet," or structural break\n\nEffect: Shifts perspective; marks intellectual turning point; focuses attention\n\nAnalyse: Where does volta occur? What changes? How does shift develop the poem?`,
      },
      {
        id: 'ld-57',
        front: 'Stanza',
        back: `Definition: A grouped set of lines in a poem, functioning like a paragraph in prose.\n\nTypes:\n• Couplet: 2 lines\n• Tercet: 3 lines\n• Quatrain: 4 lines\n• Quintet: 5 lines\n• Sestet: 6 lines\n\nEffect: Creates structure; separates ideas; allows pacing\n\nAnalyse: What stanza form is used? How does it organize ideas and pacing?`,
      },
      {
        id: 'ld-58',
        front: 'Sonnet',
        back: `Definition: A 14-line poem, usually in iambic pentameter, with strict rhyme scheme.\n\nTypes:\n• Petrarchan (Italian): ABBAABBACDECDE or similar\n• Shakespearean (English): ABABCDCDEFEFGG\n\nEffect: Creates unified, complete thought; allows complex idea development\n\nAnalyse: What type of sonnet? How does rhyme scheme organize the argument or emotion?`,
      },
      {
        id: 'ld-59',
        front: 'Terza Rima',
        back: `Definition: A terza rima uses three-line stanzas (tercets) with interlocking rhyme scheme: ABA BCB CDC...\n\nHow It Works:\n• Each stanza\'s rhyme links to the next\n• Creates chain effect\n• Often ends with couplet\n\nEffect: Creates momentum and flow; links stanzas; builds toward conclusion\n\nAnalyse: How do the rhymes interlock? How does this create connection and flow?`,
      },
      {
        id: 'ld-60',
        front: 'Villanelle',
        back: `Definition: A 19-line poem with two rhyme sounds, using repeated lines as a refrain in a specific pattern.\n\nStructure:\n• Five tercets plus one quatrain\n• Two lines repeat alternately throughout\n• Highly formal and structured\n\nEffect: Creates obsessive, circular effect; emphasises repeated lines through repetition\n\nAnalyse: What lines repeat? How does their repetition create meaning or mood?`,
      },
    ],
  },
  // ===== CRITICAL APPROACHES & ANALYTICAL FRAMEWORKS DECK (120 cards) =====
  {
    id: 'critical-approaches',
    title: 'Critical Approaches & Analytical Frameworks',
    description: 'Critical approaches for literary analysis',
    category: 'Criticism',
    board: 'All',
    cards: [
      {
        id: 'ca-1',
        front: 'Marxist Literary Criticism',
        back: `Definition: Analyses literature through the lens of economic systems, class struggle, power, and social inequality.\n\nKey Ideas:\n• Literature reflects economic conditions of its time\n• Class struggle is central to understanding texts\n• Authors and characters are products of their social class\n• Capitalist systems exploit the working class\n\nExample: In An Inspector Calls, Marxist analysis examines how capitalism enables the Birlings\' exploitation of Eva.\n\nHow to Apply: Discuss class conflict, labour, economic power, social hierarchy, exploitation.`,
      },
      {
        id: 'ca-2',
        front: 'Feminist Literary Criticism',
        back: `Definition: Analyses literature to understand how gender is represented, how patriarchy operates, and how women are positioned.\n\nKey Ideas:\n• Literature often reflects male-dominated society\n• Female characters may be marginalised or stereotyped\n• Language itself can be gendered (masculine as universal, feminine as "other")\n• Women writers have different experiences and perspectives\n\nExample: Analysis of how Eva is treated in An Inspector Calls reveals how women\' powerlessness in patriarchal society.\n\nHow to Apply: Discuss female characterisation, gender roles, power dynamics, representation of women\'s agency.`,
      },
      {
        id: 'ca-3',
        front: 'Psychoanalytic Criticism',
        back: `Definition: Applies psychological theories to understand characters, texts, and reader response.\n\nKey Ideas (Freud):\n• The unconscious mind shapes behaviour\n• Repressed desires and childhood trauma influence actions\n• Id (desire), Ego (reality), Superego (morality) are in conflict\n• Dream symbolism reveals hidden truths\n\nExample: Scrooge\'s isolation can be analysed as a psychological defense against pain of abandonment.\n\nHow to Apply: Discuss unconscious motivations, defense mechanisms, childhood trauma, symbolic meaning.`,
      },
      {
        id: 'ca-4',
        front: 'Formalist Criticism',
        back: `Definition: Focuses on the structure and formal elements of a text (language, form, technique) rather than author or context.\n\nKey Ideas:\n• The text itself is the primary object of study\n• Form and content are inseparable\n• Close reading of language and structure reveals meaning\n• Authorial intention is irrelevant; the text speaks for itself\n\nExample: Analysing how Dickens uses short sentences and exclamation marks in certain scenes to create urgency.\n\nHow to Apply: Focus on narrative technique, language choices, structure, form, without referencing author\'s life or social context.`,
      },
      {
        id: 'ca-5',
        front: 'Reader-Response Criticism',
        back: `Definition: Emphasises the role of the reader in creating meaning — different readers interpret texts differently.\n\nKey Ideas:\n• The text is incomplete until read\n• Readers bring their own experiences and interpretations\n• Meaning is created through the interaction of reader and text\n• No single "correct" interpretation exists\n\nExample: A modern reader may interpret Dickens\'s critique of capitalism differently than a Victorian reader.\n\nHow to Apply: Discuss how different readers might respond, what expectations are created and frustrated, how your interpretation differs from others\' because of your perspective.`,
      },
      {
        id: 'ca-6',
        front: 'Historical Criticism',
        back: `Definition: Understands a text through the historical period in which it was written and its historical context.\n\nKey Ideas:\n• Texts are products of their time\n• Historical context shapes themes, concerns, and values\n• Understanding historical facts aids interpretation\n• Authors respond to historical events and social conditions\n\nExample: A Christmas Carol can only be fully understood in the context of Victorian industrialisation, poverty, and workhouse system.\n\nHow to Apply: Reference historical facts, social conditions, political events, technological changes relevant to the text.`,
      },
      {
        id: 'ca-7',
        front: 'Biographical Criticism',
        back: `Definition: Interprets literature through the author\'s life — assumes biography influences the text.\n\nKey Ideas:\n• Author\'s experiences shape their writing\n• Autobiographical elements appear in fiction\n• Understanding the author\'s life clarifies the text\n• Personal struggles become universal themes\n\nExample: Dickens\'s childhood experience of poverty directly influences his championing of the poor in his novels.\n\nHow to Apply: Link author\'s biographical facts to themes, character creation, and authorial purpose.`,
      },
      {
        id: 'ca-8',
        front: 'Post-Colonial Criticism',
        back: `Definition: Analyses literature in the context of colonialism, examining power, representation, and cultural dominance.\n\nKey Ideas:\n• Colonised peoples are often misrepresented in Western literature\n• Colonial texts reflect imperialist ideology\n• Literary analysis can resist colonial narratives\n• Postcolonial literature reclaims voice and agency\n\nExample: Analysing how non-European characters are portrayed in texts, or how colonial authors imagine colonised cultures.\n\nHow to Apply: Examine representation of "other" cultures, power imbalances, stereotypes, resistance to colonial narratives.`,
      },
      {
        id: 'ca-9',
        front: 'Queer Theory',
        back: `Definition: Examines sexuality, gender identity, and non-normative identities in literature.\n\nKey Ideas:\n• Heterosexuality and traditional gender roles are constructed, not natural\n• Queer identities have been marginalised or hidden\n• Literary analysis can reveal queer subtext or representation\n• Sexuality and gender are fluid and complex\n\nExample: Analysing coded language or subtext that suggests same-sex desire in canonical texts.\n\nHow to Apply: Examine representation of LGBTQ+ characters, discuss coded language, analyse gender non-conformity, explore sexuality and desire.`,
      },
      {
        id: 'ca-10',
        front: 'Ecocriticism',
        back: `Definition: Examines literature through the lens of environmental awareness and humanity\'s relationship to nature.\n\nKey Ideas:\n• Texts often represent nature in particular ways\n• Environmental crisis is a modern concern\n• Literature can critique human exploitation of nature\n• Nature writing reveals attitudes toward the environment\n\nExample: Analysing how Romantic poets represent nature as spiritually significant vs. industrial society\'s exploitation of nature.\n\nHow to Apply: Discuss environmental themes, nature imagery, humanity\'s relationship to the natural world, ecological concerns.`,
      },
      {
        id: 'ca-11',
        front: 'Structuralism',
        back: `Definition: Analyses literature by identifying underlying structures (oppositions, patterns, systems) that give it meaning.\n\nKey Ideas:\n• Meaning comes from relationships between signs, not the signs themselves\n• Binary oppositions structure meaning (good/evil, civilised/savage)\n• Deep structures underlie surface meanings\n• All narratives follow archetypal patterns\n\nExample: Identifying how the opposition civilisation vs. savagery structures understanding of characters.\n\nHow to Apply: Identify binary oppositions, trace recurring patterns, analyse how systems of meaning are constructed.`,
      },
      {
        id: 'ca-12',
        front: 'Post-Structuralism / Deconstruction',
        back: `Definition: Questions the stability of meaning, arguing that texts contradict themselves and resist final interpretation.\n\nKey Ideas:\n• Meaning is not fixed or stable\n• Texts deconstruct their own arguments\n• Binary oppositions are hierarchical and unstable\n• Absence and presence are equally significant\n• No final, definitive reading is possible\n\nExample: Deconstructing the Inspector Calls argument by noting how uncertainty about the Inspector\'s identity undermines the moral message.\n\nHow to Apply: Identify contradictions, ambiguities, absences, and how the text resists closure or single interpretation.`,
      },
      {
        id: 'ca-13',
        front: 'Marxist Analysis: Base and Superstructure',
        back: `Definition: Base = economic system; Superstructure = culture, law, politics (all reflections of economic base).\n\nHow It Works:\n• Economic system determines culture and ideology\n• Literature is part of superstructure\n• Texts reflect class interests of their time\n• Dominant ideology appears natural and inevitable\n\nExample: The Birlings\' assumptions about class naturally reflect Victorian capitalist ideology.\n\nAnalysis: How do texts naturalise or critique economic systems? Whose interests do they serve?`,
      },
      {
        id: 'ca-14',
        front: 'Psychoanalytic: The Oedipal Complex',
        back: `Definition: Son\'s unconscious desire to replace father and possess mother; fundamental to human psychological development.\n\nHow It Appears:\n• Conflict between young and old (generational struggle)\n• Desire and taboo\n• Guilt and punishment\n• Authority figures and rebellion\n\nExample: Son\'s conflict with father figure, desire for forbidden object, guilt and self-punishment.\n\nAnalysis: Identify Oedipal patterns, father-son conflicts, transgression and guilt, psychological resolution.`,
      },
      {
        id: 'ca-15',
        front: 'Psychoanalytic: The Castration Complex',
        back: `Definition: Fear of losing power or authority; fear of the mother as threat; fundamental anxiety in patriarchal system.\n\nHow It Appears:\n• Fear of female power or sexuality\n• Male anxiety about inadequacy\n• Need to establish authority and control\n• Symbolic representation of powerlessness\n\nExample: Male characters\' need to assert dominance, fear of female characters, symbolic threats to male power.\n\nAnalysis: Identify male anxiety, female threat, symbolic emasculation, need for control.`,
      },
      {
        id: 'ca-16',
        front: 'Feminist: The Male Gaze',
        back: `Definition: The idea that women are constructed as objects of heterosexual male desire in cinema and literature.\n\nHow It Works:\n• Female characters are viewed through male perspective\n• Women are objectified sexually\n• Female agency is limited by male desire\n• Camera/narrator perspective is "male"\n\nExample: Female characters described in terms of sexual attractiveness rather than personhood.\n\nAnalysis: How are female characters viewed? Who has agency? Is perspective male-centric? How is female sexuality treated?`,
      },
      {
        id: 'ca-17',
        front: 'Feminist: The Woman Question',
        back: `Definition: Nineteenth-century debate about women\'s place in society — their education, work, property rights, and social role.\n\nHistorical Context:\n• Women had limited legal rights\n• Debate about women\'s capabilities and roles\n• Tension between domestic and public spheres\n• Literature engaged with these questions\n\nExample: Victorian texts debate whether women should work, be educated, have political voice.\n\nAnalysis: How do texts engage with the Woman Question? What positions do they take on women\'s rights and roles?`,
      },
      {
        id: 'ca-18',
        front: 'Psychoanalytic: Repression and the Unconscious',
        back: `Definition: Repression = forcing unacceptable thoughts/feelings into unconscious; they return as symptoms, dreams, or slips.\n\nHow It Appears:\n• Characters deny or repress guilt\n• Unconscious desires emerge in behaviour\n• Dreams and fantasies reveal repressed content\n• Psychosomatic symptoms (physical illness from psychological cause)\n\nExample: Scrooge\'s emotional coldness represses guilt over his past; the ghosts force repressed guilt to surface.\n\nAnalysis: What are characters repressing? How does it emerge? What does repression reveal about unconscious desires?`,
      },
      {
        id: 'ca-19',
        front: 'Marxist: Ideology and False Consciousness',
        back: `Definition: Ideology = system of beliefs that justifies power; False Consciousness = accepting ideology that doesn\'t serve your interests.\n\nHow It Works:\n• Ruling class imposes ideology on working class\n• Workers accept beliefs that exploit them\n• Literature can reveal or reinforce ideology\n• True consciousness = recognising exploitation\n\nExample: Workers in capitalism accept low wages because they believe in meritocracy (ideology), when they\'re actually exploited.\n\nAnalysis: What ideology does text promote? Whose interests does it serve? Do characters have false consciousness?`,
      },
      {
        id: 'ca-20',
        front: 'Historical: Historicism vs. New Historicism',
        back: `Definition:\n• Historicism = context explains meaning\n• New Historicism = context and text mutually shape each other; history is constructed through narrative\n\nDifference:\n• Historicism treats history as fixed background\n• New Historicism sees history as interpretive, texts as historical documents\n\nExample: Understanding Dickens requires historical context (industrialisation), but also how his novels shaped Victorian perception of history.\n\nAnalysis: How does text reflect its period? How does text shape historical understanding? What history is constructed?`,
      },
    ],
  },
  // ===== ESSAY WRITING & ACADEMIC RESPONSE DECK (200+ cards) =====
  {
    id: 'essay-writing',
    title: 'Essay Structure & Academic Response Techniques',
    description: 'Essay structure and academic response techniques',
    category: 'Writing',
    board: 'All',
    cards: [
      {
        id: 'aw-1',
        front: 'The Five-Paragraph Essay Structure',
        back: `Basic Structure:\n1. Introduction (5-8 sentences)\n2. Body Paragraph 1 (8-10 sentences)\n3. Body Paragraph 2 (8-10 sentences)\n4. Body Paragraph 3 (8-10 sentences)\n5. Conclusion (5-8 sentences)\n\nWhen to Use: Simple topics, timed exams, introductory essays\n\nWhy It Works: Clear, logical, easy to follow\n\nLimitations: Can feel formulaic; may not suit complex arguments`,
      },
      {
        id: 'aw-2',
        front: 'The PEE Paragraph Model',
        back: `PEE = Point, Evidence, Explanation\n\nPoint: Topic sentence stating your argument (1 sentence)\nEvidence: Quote or textual reference (1-2 sentences)\nExplanation: How evidence supports your point (3-4 sentences)\n\nExample:\n"Scrooge\'s isolation is presented as a choice. The narrator states he is "solitary as an oyster," suggesting that emotional distance is his preference. This metaphor compares him to shellfish that retreat into protective shells, implying his withdrawn nature is self-imposed defense mechanism."\n\nKey: Explanation should discuss effect, technique, and relevance.`,
      },
      {
        id: 'aw-3',
        front: 'The PEEA Extended Model',
        back: `PEEA = Point, Evidence, Explanation, Analysis\n\nPoint: Your argument\nEvidence: Quote or reference\nExplanation: What the evidence shows\nAnalysis: Why this matters to your overall thesis\n\nExample: (continuing above)\n"...this self-imposed isolation ultimately leads to his moral corruption, as he loses empathy for others. The connection between emotional distance and ethical failure becomes central to Dickens\'s argument for social responsibility."\n\nWhen to Use: Extended essays, higher-level analysis\n\nWhy: Adds explicit link to thesis; shows sophisticated thinking`,
      },
      {
        id: 'aw-4',
        front: 'The PEEL Paragraph Structure',
        back: `PEEL = Point, Evidence, Explanation, Link\n\nPoint: Topic sentence\nEvidence: Quotation or reference\nExplanation: Analysis of the evidence\nLink: Connection back to essay thesis\n\nExample: (continuing)\n"...this self-imposed isolation ultimately connects to Dickens\'s central thesis that social indifference is morally corrupting, a critique of Victorian capitalism."\n\nKey: The "Link" explicitly shows how the paragraph supports your overall argument\n\nBenefit: Keeps reader focused on your thesis; shows clear argument structure`,
      },
      {
        id: 'aw-5',
        front: 'Topic Sentences',
        back: `Definition: The first sentence of a paragraph that states the paragraph\'s main idea or argument.\n\nCharacteristics of Strong Topic Sentences:\n• Directly supports the thesis\n• Makes a clear claim (not a question)\n• Specific enough to guide the paragraph\n• Arguable (not just a fact)\n\nWeak: "Scrooge is cold"\nStrong: "Dickens presents Scrooge\'s emotional isolation as a self-imposed defense against vulnerability, yet this defensive mechanism ultimately enables his moral corruption."\n\nWhy It Matters: Topic sentences guide the reader and keep you focused`,
      },
      {
        id: 'aw-6',
        front: 'Supporting Evidence in Essays',
        back: `Types of Evidence:\n• Direct quotations (word-for-word from text)\n• Paraphrasing (restating idea in your words)\n• Specific examples (references to scenes or events)\n• Statistical data (numbers, facts, research)\n• Expert opinions (critics, scholars)\n\nHow to Use Evidence:\n• Introduce it (say where it\'s from or who said it)\n• Quote/reference it (provide the exact words or detail)\n• Explain it (say how it supports your point)\n• Link it (connect back to your thesis)\n\nKey: Never let evidence speak for itself — you must interpret it`,
      },
      {
        id: 'aw-7',
        front: 'Integrating Quotations',
        back: `Methods of Integration:\n\n1. EMBEDDED: "The narrator describes Scrooge as \"solitary as an oyster,\" suggesting emotional distance."\n\n2. BLOCK (longer quotes): Set apart, indented.\n\n3. DIALOGUE INTEGRATED: "When the Spirit shows Scrooge his death, he \"implore[s]\" for a chance to change, revealing his desperation."\n\nRules:\n• Introduce quotations (don\'t drop them in unexplained)\n• Use only necessary portions (don\'t quote long passages)\n• Always explain quotations (say what they mean and why)\n• Use [brackets] for clarifications or alterations\n• Use ... for omitted words`,
      },
      {
        id: 'aw-8',
        front: 'Analysis vs. Summary',
        back: `Summary: What happens\nAnalysis: How it works and why it matters\n\nExamples:\nSummary: "Scrooge visits three ghosts and changes his mind about helping the poor."\nAnalysis: "Dickens uses the supernatural visitation as a mechanism to dismantle Scrooge\'s psychological defenses, forcing him to confront the consequences of his ideology. The progression from past to future creates escalating emotional stakes, culminating in Scrooge\'s terror at seeing his own death — a fear that paradoxically liberates him into moral transformation."\n\nIn Essays: Balance summary (for context) with analysis (for argument)\n\nRatio: Aim for 20% summary, 80% analysis in essays`,
      },
      {
        id: 'aw-9',
        front: 'Thesis Statements',
        back: `Definition: A single sentence stating the main argument of the entire essay.\n\nCharacteristics of Strong Thesis:\n• Clear and specific\n• Arguable (not a fact or opinion everyone holds)\n• Complex enough for multiple paragraphs of support\n• Written in active voice\n• Confident tone (not "I think" or "maybe")\n\nWeak: "A Christmas Carol is about redemption."\nStrong: "Through the supernatural visitation, Dickens argues that moral transformation requires both emotional awakening and social responsibility, and that individual redemption is inseparable from collective social obligation."\n\nWhere: Typically at the end of the introduction`,
      },
      {
        id: 'aw-10',
        front: 'Introduction Paragraphs',
        back: `Structure:\n1. Hook: Interesting opening sentence\n2. Context: Brief background/setting\n3. Problem/Question: What will you discuss?\n4. Thesis: Your main argument (last sentence)\n\nExample Hook Strategies:\n• Surprising fact\n• Rhetorical question\n• Relevant quotation\n• Bold statement\n• Personal anecdote\n\nKey: Introductions should draw readers in while foreshadowing your argument\n\nLength: 5-8 sentences typically\n\nCommon Mistake: Making introduction too long or too vague`,
      },
      {
        id: 'aw-11',
        front: 'Conclusion Paragraphs',
        back: `Structure:\n1. Restate thesis (in new words, not exact repetition)\n2. Summarise key evidence\n3. Broader implications: What does this mean?\n4. Final thought: Why does this matter?\n\nWhat NOT to Do:\n• Introduce new evidence\n• Apologise for weaknesses ("I couldn\'t find...")\n• Reword thesis word-for-word\n• End with a question (unless rhetorical)\n• Summarise every paragraph\n\nKey: Conclusions should feel complete without introducing new ideas\n\nLength: 5-8 sentences\n\nFinal Sentence: Make it memorable or thought-provoking`,
      },
      {
        id: 'aw-12',
        front: 'Transitional Words and Phrases',
        back: `Purpose: Link ideas, show relationships between sentences and paragraphs\n\nAddition: Furthermore, Moreover, Additionally, In addition\n\nContrast: However, Nevertheless, Conversely, On the other hand\n\nExample/Illustration: For instance, For example, Specifically, In particular\n\nCause/Effect: As a result, Consequently, Therefore, Because\n\nComparison: Similarly, Likewise, In the same way\n\nSequence: First, Second, Finally, Later, Then\n\nConclusion: In conclusion, To summarise, Ultimately, Clearly\n\nUsage: Place transitions at the start of sentences or after commas to guide reader through your argument`,
      },
      {
        id: 'aw-13',
        front: 'Paragraph Coherence',
        back: `Definition: Logical connection and flow within a paragraph so that sentences build on each other.\n\nStrategies:\n• Use topic sentence to guide the paragraph\n• Start each sentence with a clear subject\n• Use pronouns (he, she, it) to refer back to key ideas\n• Use transitional words\n• Arrange sentences logically (chronological, least to most important)\n• End with a closing statement that summarises or bridges to next paragraph\n\nExample:\n"Scrooge\'s isolation is self-imposed. He chooses coldness as protection. This choice, however, proves spiritually dangerous. The ghosts force him to see the human cost of his withdrawal. Only through confronting his vulnerability can he change."\n\nTest: Can reader follow the logic from sentence to sentence?`,
      },
      {
        id: 'aw-14',
        front: 'Active vs. Passive Voice',
        back: `Active: Subject performs the action → "Dickens critiques capitalism."\nPassive: Subject receives the action → "Capitalism is critiqued by Dickens."\n\nWhy Active is Better:\n• Clearer (who is doing what?)\n• More direct and engaging\n• Usually shorter\n• Shows agency and responsibility\n\nWhen to Use Passive:\n• Agent is unknown ("Mistakes were made")\n• Agent is less important than the action\n• Emphasis on the receiver of the action\n\nIn Essays: Use mostly active voice (80%+ of sentences)\n\nCommon Problem: Passive voice makes writing vague and weak`,
      },
      {
        id: 'aw-15',
        front: 'Sentence Variety',
        back: `Mix of Sentence Types Strengthens Essays:\n\n1. SIMPLE: One independent clause. "Scrooge is greedy."\n\n2. COMPOUND: Two independent clauses joined by conjunction. "Scrooge is greedy, yet he transforms by the end."\n\n3. COMPLEX: Independent clause + dependent clause. "Although Scrooge is greedy, he transforms through the spirits\' intervention."\n\n4. COMPOUND-COMPLEX: Multiple independent + dependent. "Although Scrooge is greedy, he transforms through the spirits\' intervention, and this change inspires readers to examine their own values."\n\nBenefit: Variety maintains reader interest and shows sophistication\n\nTip: Use short sentences for impact; long sentences for explanation`,
      },
      {
        id: 'aw-16',
        front: 'Establishing Academic Tone',
        back: `Academic Tone Requires:\n• Formal language (avoid slang: "ain\'t," "gonna," "cool")\n• Third person (avoid "I" or "you" except in specific contexts)\n• Specific vocabulary (avoid vague words like "thing," "good," "bad")\n• Complete sentences (avoid fragments or text-speak)\n• Objective stance (avoid personal opinions that aren\'t supported)\n• No contractions (write "do not" instead of "don\'t")\n\nInappropriate: "Scrooge is super mean at first, but then he\'s like totally nice."\nAppropriate: "Scrooge exhibits miserly coldness throughout the opening sections, yet undergoes radical moral transformation through the supernatural intervention."`,
      },
      {
        id: 'aw-17',
        front: 'Point of View in Academic Writing',
        back: `First Person ("I"):\nWhen Acceptable: Personal narratives, reflective essays, explicitly stated personal perspective\nWhen Not: Literary analysis, research essays (where objectivity is valued)\n\nSecond Person ("You"):\nWhen Acceptable: Instructions, direct address (rare in academic essays)\nWhen Not: Most academic contexts (can feel preachy)\n\nThird Person ("The text," "Dickens"):\nWhen Acceptable: Nearly all literary and academic analysis (preferred, objective tone)\n\nTip: Even in third person, you can make arguments clear: "Analysis reveals..." or "The evidence suggests..."`,
      },
      {
        id: 'aw-18',
        front: 'Avoiding Plagiarism',
        back: `Plagiarism = Using someone else\'s words or ideas without credit.\n\nHow to Avoid It:\n1. QUOTE directly and use quotation marks: "As the critic states, \"X\"..."\n2. PARAPHRASE and CITE: Put idea in your own words + cite source\n3. SUMMARISE and CITE: Shorten idea and credit source\n4. CITE PROPERLY: Use correct format (MLA, APA, Chicago, etc.)\n\nWhat Needs Citation:\n• Direct quotations\n• Paraphrased ideas\n• Specific facts from sources\n• Statistics or research\n• Images, charts, graphs\n\nWhat Doesn\'t (common knowledge):\n• General knowledge ("Shakespeare wrote plays")\n• Widely known facts ("The Earth orbits the sun")\n\nRule: When in doubt, cite`,
      },
      {
        id: 'aw-19',
        front: 'Developing Complex Arguments',
        back: `Strategies for Sophistication:\n\n1. ACKNOWLEDGE COUNTERARGUMENT: "One might argue X, yet..."\n2. USE QUALIFYING LANGUAGE: "suggests," "implies," "arguably," "can be read as"\n3. INTEGRATE MULTIPLE PERSPECTIVES: Show how different characters/critics view an issue\n4. BUILD COMPLEXITY: Start simple, add nuance and complications\n5. USE SUBORDINATE CLAUSES: "While X is true, Y suggests..."\n6. CONNECT TO LARGER ISSUES: "This scene reflects broader themes about..."\n\nExample Simple Argument: "Scrooge is greedy."\nExample Complex: "While Scrooge initially appears straightforwardly miserly, his psychological profile suggests deeper trauma — abandonment in childhood that manifests as material hoarding. His 'greed' functions as psychological defense, and redemption requires not moral judgment but emotional healing."`,
      },
      {
        id: 'aw-20',
        front: 'Proofreading and Revision Strategies',
        back: `First Draft: Get ideas down, don\'t worry about perfection\n\nRevision Stages:\n1. BIG PICTURE: Does thesis hold? Is argument clear? Reorganise if needed\n2. PARAGRAPH LEVEL: Does each paragraph support thesis? Are transitions smooth?\n3. SENTENCE LEVEL: Are sentences clear? Varied? Active?\n4. WORD LEVEL: Are words precise? Are there repetitions?\n5. MECHANICS: Check grammar, punctuation, spelling\n\nProofreading Tips:\n• Read aloud to catch awkward phrasing\n• Read backwards to catch spelling errors\n• Ask: Does a reader unfamiliar with the text understand this?\n• Use spell-check but don\'t rely on it (it misses context errors)\n• Wait 24 hours before proofreading (fresh eyes catch more)`,
      },
    ],
  },
  {
    id: 'bulk-deck',
    title: 'Comprehensive Exam Preparation',
    description: 'Advanced analysis cards for major GCSE texts',
    category: 'Set Text Analysis',
    board: 'Multi-Exam-Board',
    cards: [
      {
        id: 'bulk-1',
        front: 'Macbeth: Ambition — Definition',
        back: "The theme of Ambition is central to Macbeth. How is Ambition explored through character action, dialogue, and plot? What does the author's treatment of Ambition reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-2',
        front: 'Macbeth: Ambition — Character Analysis',
        back: 'How do characters in Macbeth embody the theme of Ambition? Analyze how different characters relate to Ambition differently. What internal conflicts does Ambition create for characters? How does Ambition drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-3',
        front: 'Macbeth: Ambition — Turning Points',
        back: "Identify scenes in Macbeth where Ambition is most intensely explored. How do these scenes reveal the author's perspective on Ambition? What do characters learn or fail to learn about Ambition? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-4',
        front: 'Macbeth: Ambition — Literary Technique',
        back: 'How does Macbeth use literary techniques (imagery, symbolism, dialogue, structure) to explore Ambition? What specific images or symbols recur? What patterns of language convey Ambition? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-5',
        front: 'Macbeth: Ambition — Critical Perspectives',
        back: 'How might different critical approaches illuminate Ambition in Macbeth? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Ambition. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-6',
        front: 'Macbeth: Guilt — Definition',
        back: "The theme of Guilt is central to Macbeth. How is Guilt explored through character action, dialogue, and plot? What does the author's treatment of Guilt reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-7',
        front: 'Macbeth: Guilt — Character Analysis',
        back: 'How do characters in Macbeth embody the theme of Guilt? Analyze how different characters relate to Guilt differently. What internal conflicts does Guilt create for characters? How does Guilt drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-8',
        front: 'Macbeth: Guilt — Turning Points',
        back: "Identify scenes in Macbeth where Guilt is most intensely explored. How do these scenes reveal the author's perspective on Guilt? What do characters learn or fail to learn about Guilt? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-9',
        front: 'Macbeth: Guilt — Literary Technique',
        back: 'How does Macbeth use literary techniques (imagery, symbolism, dialogue, structure) to explore Guilt? What specific images or symbols recur? What patterns of language convey Guilt? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-10',
        front: 'Macbeth: Guilt — Critical Perspectives',
        back: 'How might different critical approaches illuminate Guilt in Macbeth? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Guilt. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-11',
        front: 'Macbeth: Power — Definition',
        back: "The theme of Power is central to Macbeth. How is Power explored through character action, dialogue, and plot? What does the author's treatment of Power reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-12',
        front: 'Macbeth: Power — Character Analysis',
        back: 'How do characters in Macbeth embody the theme of Power? Analyze how different characters relate to Power differently. What internal conflicts does Power create for characters? How does Power drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-13',
        front: 'Macbeth: Power — Turning Points',
        back: "Identify scenes in Macbeth where Power is most intensely explored. How do these scenes reveal the author's perspective on Power? What do characters learn or fail to learn about Power? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-14',
        front: 'Macbeth: Power — Literary Technique',
        back: 'How does Macbeth use literary techniques (imagery, symbolism, dialogue, structure) to explore Power? What specific images or symbols recur? What patterns of language convey Power? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-15',
        front: 'Macbeth: Power — Critical Perspectives',
        back: 'How might different critical approaches illuminate Power in Macbeth? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Power. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-16',
        front: 'Macbeth: Fate — Definition',
        back: "The theme of Fate is central to Macbeth. How is Fate explored through character action, dialogue, and plot? What does the author's treatment of Fate reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-17',
        front: 'Macbeth: Fate — Character Analysis',
        back: 'How do characters in Macbeth embody the theme of Fate? Analyze how different characters relate to Fate differently. What internal conflicts does Fate create for characters? How does Fate drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-18',
        front: 'Macbeth: Fate — Turning Points',
        back: "Identify scenes in Macbeth where Fate is most intensely explored. How do these scenes reveal the author's perspective on Fate? What do characters learn or fail to learn about Fate? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-19',
        front: 'Macbeth: Fate — Literary Technique',
        back: 'How does Macbeth use literary techniques (imagery, symbolism, dialogue, structure) to explore Fate? What specific images or symbols recur? What patterns of language convey Fate? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-20',
        front: 'Macbeth: Fate — Critical Perspectives',
        back: 'How might different critical approaches illuminate Fate in Macbeth? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Fate. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-21',
        front: 'Macbeth: Manhood — Definition',
        back: "The theme of Manhood is central to Macbeth. How is Manhood explored through character action, dialogue, and plot? What does the author's treatment of Manhood reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-22',
        front: 'Macbeth: Manhood — Character Analysis',
        back: 'How do characters in Macbeth embody the theme of Manhood? Analyze how different characters relate to Manhood differently. What internal conflicts does Manhood create for characters? How does Manhood drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-23',
        front: 'Macbeth: Manhood — Turning Points',
        back: "Identify scenes in Macbeth where Manhood is most intensely explored. How do these scenes reveal the author's perspective on Manhood? What do characters learn or fail to learn about Manhood? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-24',
        front: 'Macbeth: Manhood — Literary Technique',
        back: 'How does Macbeth use literary techniques (imagery, symbolism, dialogue, structure) to explore Manhood? What specific images or symbols recur? What patterns of language convey Manhood? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-25',
        front: 'Macbeth: Manhood — Critical Perspectives',
        back: 'How might different critical approaches illuminate Manhood in Macbeth? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Manhood. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-26',
        front: 'Macbeth: Conscience — Definition',
        back: "The theme of Conscience is central to Macbeth. How is Conscience explored through character action, dialogue, and plot? What does the author's treatment of Conscience reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-27',
        front: 'Macbeth: Conscience — Character Analysis',
        back: 'How do characters in Macbeth embody the theme of Conscience? Analyze how different characters relate to Conscience differently. What internal conflicts does Conscience create for characters? How does Conscience drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-28',
        front: 'Macbeth: Conscience — Turning Points',
        back: "Identify scenes in Macbeth where Conscience is most intensely explored. How do these scenes reveal the author's perspective on Conscience? What do characters learn or fail to learn about Conscience? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-29',
        front: 'Macbeth: Conscience — Literary Technique',
        back: 'How does Macbeth use literary techniques (imagery, symbolism, dialogue, structure) to explore Conscience? What specific images or symbols recur? What patterns of language convey Conscience? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-30',
        front: 'Macbeth: Conscience — Critical Perspectives',
        back: 'How might different critical approaches illuminate Conscience in Macbeth? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Conscience. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-31',
        front: 'Macbeth: Sleep — Definition',
        back: "The theme of Sleep is central to Macbeth. How is Sleep explored through character action, dialogue, and plot? What does the author's treatment of Sleep reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-32',
        front: 'Macbeth: Sleep — Character Analysis',
        back: 'How do characters in Macbeth embody the theme of Sleep? Analyze how different characters relate to Sleep differently. What internal conflicts does Sleep create for characters? How does Sleep drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-33',
        front: 'Macbeth: Sleep — Turning Points',
        back: "Identify scenes in Macbeth where Sleep is most intensely explored. How do these scenes reveal the author's perspective on Sleep? What do characters learn or fail to learn about Sleep? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-34',
        front: 'Macbeth: Sleep — Literary Technique',
        back: 'How does Macbeth use literary techniques (imagery, symbolism, dialogue, structure) to explore Sleep? What specific images or symbols recur? What patterns of language convey Sleep? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-35',
        front: 'Macbeth: Sleep — Critical Perspectives',
        back: 'How might different critical approaches illuminate Sleep in Macbeth? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Sleep. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-36',
        front: 'Macbeth: Nature — Definition',
        back: "The theme of Nature is central to Macbeth. How is Nature explored through character action, dialogue, and plot? What does the author's treatment of Nature reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-37',
        front: 'Macbeth: Nature — Character Analysis',
        back: 'How do characters in Macbeth embody the theme of Nature? Analyze how different characters relate to Nature differently. What internal conflicts does Nature create for characters? How does Nature drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-38',
        front: 'Macbeth: Nature — Turning Points',
        back: "Identify scenes in Macbeth where Nature is most intensely explored. How do these scenes reveal the author's perspective on Nature? What do characters learn or fail to learn about Nature? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-39',
        front: 'Macbeth: Nature — Literary Technique',
        back: 'How does Macbeth use literary techniques (imagery, symbolism, dialogue, structure) to explore Nature? What specific images or symbols recur? What patterns of language convey Nature? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-40',
        front: 'Macbeth: Nature — Critical Perspectives',
        back: 'How might different critical approaches illuminate Nature in Macbeth? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Nature. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-41',
        front: 'Macbeth: Blood — Definition',
        back: "The theme of Blood is central to Macbeth. How is Blood explored through character action, dialogue, and plot? What does the author's treatment of Blood reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-42',
        front: 'Macbeth: Blood — Character Analysis',
        back: 'How do characters in Macbeth embody the theme of Blood? Analyze how different characters relate to Blood differently. What internal conflicts does Blood create for characters? How does Blood drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-43',
        front: 'Macbeth: Blood — Turning Points',
        back: "Identify scenes in Macbeth where Blood is most intensely explored. How do these scenes reveal the author's perspective on Blood? What do characters learn or fail to learn about Blood? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-44',
        front: 'Macbeth: Blood — Literary Technique',
        back: 'How does Macbeth use literary techniques (imagery, symbolism, dialogue, structure) to explore Blood? What specific images or symbols recur? What patterns of language convey Blood? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-45',
        front: 'Macbeth: Blood — Critical Perspectives',
        back: 'How might different critical approaches illuminate Blood in Macbeth? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Blood. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-46',
        front: 'Macbeth: Prophecy — Definition',
        back: "The theme of Prophecy is central to Macbeth. How is Prophecy explored through character action, dialogue, and plot? What does the author's treatment of Prophecy reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-47',
        front: 'Macbeth: Prophecy — Character Analysis',
        back: 'How do characters in Macbeth embody the theme of Prophecy? Analyze how different characters relate to Prophecy differently. What internal conflicts does Prophecy create for characters? How does Prophecy drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-48',
        front: 'Macbeth: Prophecy — Turning Points',
        back: "Identify scenes in Macbeth where Prophecy is most intensely explored. How do these scenes reveal the author's perspective on Prophecy? What do characters learn or fail to learn about Prophecy? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-49',
        front: 'Macbeth: Prophecy — Literary Technique',
        back: 'How does Macbeth use literary techniques (imagery, symbolism, dialogue, structure) to explore Prophecy? What specific images or symbols recur? What patterns of language convey Prophecy? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-50',
        front: 'Macbeth: Prophecy — Critical Perspectives',
        back: 'How might different critical approaches illuminate Prophecy in Macbeth? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Prophecy. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-51',
        front: 'Romeo and Juliet: Love — Definition',
        back: "The theme of Love is central to Romeo and Juliet. How is Love explored through character action, dialogue, and plot? What does the author's treatment of Love reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-52',
        front: 'Romeo and Juliet: Love — Character Analysis',
        back: 'How do characters in Romeo and Juliet embody the theme of Love? Analyze how different characters relate to Love differently. What internal conflicts does Love create for characters? How does Love drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-53',
        front: 'Romeo and Juliet: Love — Turning Points',
        back: "Identify scenes in Romeo and Juliet where Love is most intensely explored. How do these scenes reveal the author's perspective on Love? What do characters learn or fail to learn about Love? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-54',
        front: 'Romeo and Juliet: Love — Literary Technique',
        back: 'How does Romeo and Juliet use literary techniques (imagery, symbolism, dialogue, structure) to explore Love? What specific images or symbols recur? What patterns of language convey Love? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-55',
        front: 'Romeo and Juliet: Love — Critical Perspectives',
        back: 'How might different critical approaches illuminate Love in Romeo and Juliet? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Love. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-56',
        front: 'Romeo and Juliet: Fate — Definition',
        back: "The theme of Fate is central to Romeo and Juliet. How is Fate explored through character action, dialogue, and plot? What does the author's treatment of Fate reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-57',
        front: 'Romeo and Juliet: Fate — Character Analysis',
        back: 'How do characters in Romeo and Juliet embody the theme of Fate? Analyze how different characters relate to Fate differently. What internal conflicts does Fate create for characters? How does Fate drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-58',
        front: 'Romeo and Juliet: Fate — Turning Points',
        back: "Identify scenes in Romeo and Juliet where Fate is most intensely explored. How do these scenes reveal the author's perspective on Fate? What do characters learn or fail to learn about Fate? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-59',
        front: 'Romeo and Juliet: Fate — Literary Technique',
        back: 'How does Romeo and Juliet use literary techniques (imagery, symbolism, dialogue, structure) to explore Fate? What specific images or symbols recur? What patterns of language convey Fate? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-60',
        front: 'Romeo and Juliet: Fate — Critical Perspectives',
        back: 'How might different critical approaches illuminate Fate in Romeo and Juliet? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Fate. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-61',
        front: 'Romeo and Juliet: Family — Definition',
        back: "The theme of Family is central to Romeo and Juliet. How is Family explored through character action, dialogue, and plot? What does the author's treatment of Family reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-62',
        front: 'Romeo and Juliet: Family — Character Analysis',
        back: 'How do characters in Romeo and Juliet embody the theme of Family? Analyze how different characters relate to Family differently. What internal conflicts does Family create for characters? How does Family drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-63',
        front: 'Romeo and Juliet: Family — Turning Points',
        back: "Identify scenes in Romeo and Juliet where Family is most intensely explored. How do these scenes reveal the author's perspective on Family? What do characters learn or fail to learn about Family? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-64',
        front: 'Romeo and Juliet: Family — Literary Technique',
        back: 'How does Romeo and Juliet use literary techniques (imagery, symbolism, dialogue, structure) to explore Family? What specific images or symbols recur? What patterns of language convey Family? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-65',
        front: 'Romeo and Juliet: Family — Critical Perspectives',
        back: 'How might different critical approaches illuminate Family in Romeo and Juliet? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Family. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-66',
        front: 'Romeo and Juliet: Youth — Definition',
        back: "The theme of Youth is central to Romeo and Juliet. How is Youth explored through character action, dialogue, and plot? What does the author's treatment of Youth reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-67',
        front: 'Romeo and Juliet: Youth — Character Analysis',
        back: 'How do characters in Romeo and Juliet embody the theme of Youth? Analyze how different characters relate to Youth differently. What internal conflicts does Youth create for characters? How does Youth drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-68',
        front: 'Romeo and Juliet: Youth — Turning Points',
        back: "Identify scenes in Romeo and Juliet where Youth is most intensely explored. How do these scenes reveal the author's perspective on Youth? What do characters learn or fail to learn about Youth? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-69',
        front: 'Romeo and Juliet: Youth — Literary Technique',
        back: 'How does Romeo and Juliet use literary techniques (imagery, symbolism, dialogue, structure) to explore Youth? What specific images or symbols recur? What patterns of language convey Youth? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-70',
        front: 'Romeo and Juliet: Youth — Critical Perspectives',
        back: 'How might different critical approaches illuminate Youth in Romeo and Juliet? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Youth. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-71',
        front: 'Romeo and Juliet: Passion — Definition',
        back: "The theme of Passion is central to Romeo and Juliet. How is Passion explored through character action, dialogue, and plot? What does the author's treatment of Passion reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-72',
        front: 'Romeo and Juliet: Passion — Character Analysis',
        back: 'How do characters in Romeo and Juliet embody the theme of Passion? Analyze how different characters relate to Passion differently. What internal conflicts does Passion create for characters? How does Passion drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-73',
        front: 'Romeo and Juliet: Passion — Turning Points',
        back: "Identify scenes in Romeo and Juliet where Passion is most intensely explored. How do these scenes reveal the author's perspective on Passion? What do characters learn or fail to learn about Passion? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-74',
        front: 'Romeo and Juliet: Passion — Literary Technique',
        back: 'How does Romeo and Juliet use literary techniques (imagery, symbolism, dialogue, structure) to explore Passion? What specific images or symbols recur? What patterns of language convey Passion? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-75',
        front: 'Romeo and Juliet: Passion — Critical Perspectives',
        back: 'How might different critical approaches illuminate Passion in Romeo and Juliet? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Passion. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-76',
        front: 'Romeo and Juliet: Communication — Definition',
        back: "The theme of Communication is central to Romeo and Juliet. How is Communication explored through character action, dialogue, and plot? What does the author's treatment of Communication reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-77',
        front: 'Romeo and Juliet: Communication — Character Analysis',
        back: 'How do characters in Romeo and Juliet embody the theme of Communication? Analyze how different characters relate to Communication differently. What internal conflicts does Communication create for characters? How does Communication drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-78',
        front: 'Romeo and Juliet: Communication — Turning Points',
        back: "Identify scenes in Romeo and Juliet where Communication is most intensely explored. How do these scenes reveal the author's perspective on Communication? What do characters learn or fail to learn about Communication? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-79',
        front: 'Romeo and Juliet: Communication — Literary Technique',
        back: 'How does Romeo and Juliet use literary techniques (imagery, symbolism, dialogue, structure) to explore Communication? What specific images or symbols recur? What patterns of language convey Communication? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-80',
        front: 'Romeo and Juliet: Communication — Critical Perspectives',
        back: 'How might different critical approaches illuminate Communication in Romeo and Juliet? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Communication. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-81',
        front: 'Romeo and Juliet: Light — Definition',
        back: "The theme of Light is central to Romeo and Juliet. How is Light explored through character action, dialogue, and plot? What does the author's treatment of Light reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-82',
        front: 'Romeo and Juliet: Light — Character Analysis',
        back: 'How do characters in Romeo and Juliet embody the theme of Light? Analyze how different characters relate to Light differently. What internal conflicts does Light create for characters? How does Light drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-83',
        front: 'Romeo and Juliet: Light — Turning Points',
        back: "Identify scenes in Romeo and Juliet where Light is most intensely explored. How do these scenes reveal the author's perspective on Light? What do characters learn or fail to learn about Light? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-84',
        front: 'Romeo and Juliet: Light — Literary Technique',
        back: 'How does Romeo and Juliet use literary techniques (imagery, symbolism, dialogue, structure) to explore Light? What specific images or symbols recur? What patterns of language convey Light? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-85',
        front: 'Romeo and Juliet: Light — Critical Perspectives',
        back: 'How might different critical approaches illuminate Light in Romeo and Juliet? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Light. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-86',
        front: 'Romeo and Juliet: Haste — Definition',
        back: "The theme of Haste is central to Romeo and Juliet. How is Haste explored through character action, dialogue, and plot? What does the author's treatment of Haste reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-87',
        front: 'Romeo and Juliet: Haste — Character Analysis',
        back: 'How do characters in Romeo and Juliet embody the theme of Haste? Analyze how different characters relate to Haste differently. What internal conflicts does Haste create for characters? How does Haste drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-88',
        front: 'Romeo and Juliet: Haste — Turning Points',
        back: "Identify scenes in Romeo and Juliet where Haste is most intensely explored. How do these scenes reveal the author's perspective on Haste? What do characters learn or fail to learn about Haste? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-89',
        front: 'Romeo and Juliet: Haste — Literary Technique',
        back: 'How does Romeo and Juliet use literary techniques (imagery, symbolism, dialogue, structure) to explore Haste? What specific images or symbols recur? What patterns of language convey Haste? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-90',
        front: 'Romeo and Juliet: Haste — Critical Perspectives',
        back: 'How might different critical approaches illuminate Haste in Romeo and Juliet? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Haste. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-91',
        front: 'Romeo and Juliet: Feud — Definition',
        back: "The theme of Feud is central to Romeo and Juliet. How is Feud explored through character action, dialogue, and plot? What does the author's treatment of Feud reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-92',
        front: 'Romeo and Juliet: Feud — Character Analysis',
        back: 'How do characters in Romeo and Juliet embody the theme of Feud? Analyze how different characters relate to Feud differently. What internal conflicts does Feud create for characters? How does Feud drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-93',
        front: 'Romeo and Juliet: Feud — Turning Points',
        back: "Identify scenes in Romeo and Juliet where Feud is most intensely explored. How do these scenes reveal the author's perspective on Feud? What do characters learn or fail to learn about Feud? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-94',
        front: 'Romeo and Juliet: Feud — Literary Technique',
        back: 'How does Romeo and Juliet use literary techniques (imagery, symbolism, dialogue, structure) to explore Feud? What specific images or symbols recur? What patterns of language convey Feud? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-95',
        front: 'Romeo and Juliet: Feud — Critical Perspectives',
        back: 'How might different critical approaches illuminate Feud in Romeo and Juliet? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Feud. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-96',
        front: 'Romeo and Juliet: Death — Definition',
        back: "The theme of Death is central to Romeo and Juliet. How is Death explored through character action, dialogue, and plot? What does the author's treatment of Death reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-97',
        front: 'Romeo and Juliet: Death — Character Analysis',
        back: 'How do characters in Romeo and Juliet embody the theme of Death? Analyze how different characters relate to Death differently. What internal conflicts does Death create for characters? How does Death drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-98',
        front: 'Romeo and Juliet: Death — Turning Points',
        back: "Identify scenes in Romeo and Juliet where Death is most intensely explored. How do these scenes reveal the author's perspective on Death? What do characters learn or fail to learn about Death? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-99',
        front: 'Romeo and Juliet: Death — Literary Technique',
        back: 'How does Romeo and Juliet use literary techniques (imagery, symbolism, dialogue, structure) to explore Death? What specific images or symbols recur? What patterns of language convey Death? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-100',
        front: 'Romeo and Juliet: Death — Critical Perspectives',
        back: 'How might different critical approaches illuminate Death in Romeo and Juliet? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Death. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-101',
        front: 'The Great Gatsby: Dream — Definition',
        back: "The theme of Dream is central to The Great Gatsby. How is Dream explored through character action, dialogue, and plot? What does the author's treatment of Dream reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-102',
        front: 'The Great Gatsby: Dream — Character Analysis',
        back: 'How do characters in The Great Gatsby embody the theme of Dream? Analyze how different characters relate to Dream differently. What internal conflicts does Dream create for characters? How does Dream drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-103',
        front: 'The Great Gatsby: Dream — Turning Points',
        back: "Identify scenes in The Great Gatsby where Dream is most intensely explored. How do these scenes reveal the author's perspective on Dream? What do characters learn or fail to learn about Dream? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-104',
        front: 'The Great Gatsby: Dream — Literary Technique',
        back: 'How does The Great Gatsby use literary techniques (imagery, symbolism, dialogue, structure) to explore Dream? What specific images or symbols recur? What patterns of language convey Dream? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-105',
        front: 'The Great Gatsby: Dream — Critical Perspectives',
        back: 'How might different critical approaches illuminate Dream in The Great Gatsby? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Dream. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-106',
        front: 'The Great Gatsby: Class — Definition',
        back: "The theme of Class is central to The Great Gatsby. How is Class explored through character action, dialogue, and plot? What does the author's treatment of Class reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-107',
        front: 'The Great Gatsby: Class — Character Analysis',
        back: 'How do characters in The Great Gatsby embody the theme of Class? Analyze how different characters relate to Class differently. What internal conflicts does Class create for characters? How does Class drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-108',
        front: 'The Great Gatsby: Class — Turning Points',
        back: "Identify scenes in The Great Gatsby where Class is most intensely explored. How do these scenes reveal the author's perspective on Class? What do characters learn or fail to learn about Class? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-109',
        front: 'The Great Gatsby: Class — Literary Technique',
        back: 'How does The Great Gatsby use literary techniques (imagery, symbolism, dialogue, structure) to explore Class? What specific images or symbols recur? What patterns of language convey Class? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-110',
        front: 'The Great Gatsby: Class — Critical Perspectives',
        back: 'How might different critical approaches illuminate Class in The Great Gatsby? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Class. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-111',
        front: 'The Great Gatsby: Wealth — Definition',
        back: "The theme of Wealth is central to The Great Gatsby. How is Wealth explored through character action, dialogue, and plot? What does the author's treatment of Wealth reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-112',
        front: 'The Great Gatsby: Wealth — Character Analysis',
        back: 'How do characters in The Great Gatsby embody the theme of Wealth? Analyze how different characters relate to Wealth differently. What internal conflicts does Wealth create for characters? How does Wealth drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-113',
        front: 'The Great Gatsby: Wealth — Turning Points',
        back: "Identify scenes in The Great Gatsby where Wealth is most intensely explored. How do these scenes reveal the author's perspective on Wealth? What do characters learn or fail to learn about Wealth? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-114',
        front: 'The Great Gatsby: Wealth — Literary Technique',
        back: 'How does The Great Gatsby use literary techniques (imagery, symbolism, dialogue, structure) to explore Wealth? What specific images or symbols recur? What patterns of language convey Wealth? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-115',
        front: 'The Great Gatsby: Wealth — Critical Perspectives',
        back: 'How might different critical approaches illuminate Wealth in The Great Gatsby? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Wealth. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-116',
        front: 'The Great Gatsby: Desire — Definition',
        back: "The theme of Desire is central to The Great Gatsby. How is Desire explored through character action, dialogue, and plot? What does the author's treatment of Desire reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-117',
        front: 'The Great Gatsby: Desire — Character Analysis',
        back: 'How do characters in The Great Gatsby embody the theme of Desire? Analyze how different characters relate to Desire differently. What internal conflicts does Desire create for characters? How does Desire drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-118',
        front: 'The Great Gatsby: Desire — Turning Points',
        back: "Identify scenes in The Great Gatsby where Desire is most intensely explored. How do these scenes reveal the author's perspective on Desire? What do characters learn or fail to learn about Desire? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-119',
        front: 'The Great Gatsby: Desire — Literary Technique',
        back: 'How does The Great Gatsby use literary techniques (imagery, symbolism, dialogue, structure) to explore Desire? What specific images or symbols recur? What patterns of language convey Desire? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-120',
        front: 'The Great Gatsby: Desire — Critical Perspectives',
        back: 'How might different critical approaches illuminate Desire in The Great Gatsby? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Desire. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-121',
        front: 'The Great Gatsby: Past — Definition',
        back: "The theme of Past is central to The Great Gatsby. How is Past explored through character action, dialogue, and plot? What does the author's treatment of Past reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-122',
        front: 'The Great Gatsby: Past — Character Analysis',
        back: 'How do characters in The Great Gatsby embody the theme of Past? Analyze how different characters relate to Past differently. What internal conflicts does Past create for characters? How does Past drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-123',
        front: 'The Great Gatsby: Past — Turning Points',
        back: "Identify scenes in The Great Gatsby where Past is most intensely explored. How do these scenes reveal the author's perspective on Past? What do characters learn or fail to learn about Past? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-124',
        front: 'The Great Gatsby: Past — Literary Technique',
        back: 'How does The Great Gatsby use literary techniques (imagery, symbolism, dialogue, structure) to explore Past? What specific images or symbols recur? What patterns of language convey Past? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-125',
        front: 'The Great Gatsby: Past — Critical Perspectives',
        back: 'How might different critical approaches illuminate Past in The Great Gatsby? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Past. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-126',
        front: 'The Great Gatsby: Corruption — Definition',
        back: "The theme of Corruption is central to The Great Gatsby. How is Corruption explored through character action, dialogue, and plot? What does the author's treatment of Corruption reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-127',
        front: 'The Great Gatsby: Corruption — Character Analysis',
        back: 'How do characters in The Great Gatsby embody the theme of Corruption? Analyze how different characters relate to Corruption differently. What internal conflicts does Corruption create for characters? How does Corruption drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-128',
        front: 'The Great Gatsby: Corruption — Turning Points',
        back: "Identify scenes in The Great Gatsby where Corruption is most intensely explored. How do these scenes reveal the author's perspective on Corruption? What do characters learn or fail to learn about Corruption? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-129',
        front: 'The Great Gatsby: Corruption — Literary Technique',
        back: 'How does The Great Gatsby use literary techniques (imagery, symbolism, dialogue, structure) to explore Corruption? What specific images or symbols recur? What patterns of language convey Corruption? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-130',
        front: 'The Great Gatsby: Corruption — Critical Perspectives',
        back: 'How might different critical approaches illuminate Corruption in The Great Gatsby? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Corruption. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-131',
        front: 'The Great Gatsby: Symbol — Definition',
        back: "The theme of Symbol is central to The Great Gatsby. How is Symbol explored through character action, dialogue, and plot? What does the author's treatment of Symbol reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-132',
        front: 'The Great Gatsby: Symbol — Character Analysis',
        back: 'How do characters in The Great Gatsby embody the theme of Symbol? Analyze how different characters relate to Symbol differently. What internal conflicts does Symbol create for characters? How does Symbol drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-133',
        front: 'The Great Gatsby: Symbol — Turning Points',
        back: "Identify scenes in The Great Gatsby where Symbol is most intensely explored. How do these scenes reveal the author's perspective on Symbol? What do characters learn or fail to learn about Symbol? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-134',
        front: 'The Great Gatsby: Symbol — Literary Technique',
        back: 'How does The Great Gatsby use literary techniques (imagery, symbolism, dialogue, structure) to explore Symbol? What specific images or symbols recur? What patterns of language convey Symbol? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-135',
        front: 'The Great Gatsby: Symbol — Critical Perspectives',
        back: 'How might different critical approaches illuminate Symbol in The Great Gatsby? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Symbol. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-136',
        front: 'The Great Gatsby: Narrator — Definition',
        back: "The theme of Narrator is central to The Great Gatsby. How is Narrator explored through character action, dialogue, and plot? What does the author's treatment of Narrator reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-137',
        front: 'The Great Gatsby: Narrator — Character Analysis',
        back: 'How do characters in The Great Gatsby embody the theme of Narrator? Analyze how different characters relate to Narrator differently. What internal conflicts does Narrator create for characters? How does Narrator drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-138',
        front: 'The Great Gatsby: Narrator — Turning Points',
        back: "Identify scenes in The Great Gatsby where Narrator is most intensely explored. How do these scenes reveal the author's perspective on Narrator? What do characters learn or fail to learn about Narrator? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-139',
        front: 'The Great Gatsby: Narrator — Literary Technique',
        back: 'How does The Great Gatsby use literary techniques (imagery, symbolism, dialogue, structure) to explore Narrator? What specific images or symbols recur? What patterns of language convey Narrator? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-140',
        front: 'The Great Gatsby: Narrator — Critical Perspectives',
        back: 'How might different critical approaches illuminate Narrator in The Great Gatsby? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Narrator. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-141',
        front: 'The Great Gatsby: Illusion — Definition',
        back: "The theme of Illusion is central to The Great Gatsby. How is Illusion explored through character action, dialogue, and plot? What does the author's treatment of Illusion reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-142',
        front: 'The Great Gatsby: Illusion — Character Analysis',
        back: 'How do characters in The Great Gatsby embody the theme of Illusion? Analyze how different characters relate to Illusion differently. What internal conflicts does Illusion create for characters? How does Illusion drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-143',
        front: 'The Great Gatsby: Illusion — Turning Points',
        back: "Identify scenes in The Great Gatsby where Illusion is most intensely explored. How do these scenes reveal the author's perspective on Illusion? What do characters learn or fail to learn about Illusion? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-144',
        front: 'The Great Gatsby: Illusion — Literary Technique',
        back: 'How does The Great Gatsby use literary techniques (imagery, symbolism, dialogue, structure) to explore Illusion? What specific images or symbols recur? What patterns of language convey Illusion? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-145',
        front: 'The Great Gatsby: Illusion — Critical Perspectives',
        back: 'How might different critical approaches illuminate Illusion in The Great Gatsby? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Illusion. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-146',
        front: 'The Great Gatsby: Jazz Age — Definition',
        back: "The theme of Jazz Age is central to The Great Gatsby. How is Jazz Age explored through character action, dialogue, and plot? What does the author's treatment of Jazz Age reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-147',
        front: 'The Great Gatsby: Jazz Age — Character Analysis',
        back: 'How do characters in The Great Gatsby embody the theme of Jazz Age? Analyze how different characters relate to Jazz Age differently. What internal conflicts does Jazz Age create for characters? How does Jazz Age drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-148',
        front: 'The Great Gatsby: Jazz Age — Turning Points',
        back: "Identify scenes in The Great Gatsby where Jazz Age is most intensely explored. How do these scenes reveal the author's perspective on Jazz Age? What do characters learn or fail to learn about Jazz Age? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-149',
        front: 'The Great Gatsby: Jazz Age — Literary Technique',
        back: 'How does The Great Gatsby use literary techniques (imagery, symbolism, dialogue, structure) to explore Jazz Age? What specific images or symbols recur? What patterns of language convey Jazz Age? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-150',
        front: 'The Great Gatsby: Jazz Age — Critical Perspectives',
        back: 'How might different critical approaches illuminate Jazz Age in The Great Gatsby? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Jazz Age. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-151',
        front: 'Jane Eyre: Independence — Definition',
        back: "The theme of Independence is central to Jane Eyre. How is Independence explored through character action, dialogue, and plot? What does the author's treatment of Independence reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-152',
        front: 'Jane Eyre: Independence — Character Analysis',
        back: 'How do characters in Jane Eyre embody the theme of Independence? Analyze how different characters relate to Independence differently. What internal conflicts does Independence create for characters? How does Independence drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-153',
        front: 'Jane Eyre: Independence — Turning Points',
        back: "Identify scenes in Jane Eyre where Independence is most intensely explored. How do these scenes reveal the author's perspective on Independence? What do characters learn or fail to learn about Independence? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-154',
        front: 'Jane Eyre: Independence — Literary Technique',
        back: 'How does Jane Eyre use literary techniques (imagery, symbolism, dialogue, structure) to explore Independence? What specific images or symbols recur? What patterns of language convey Independence? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-155',
        front: 'Jane Eyre: Independence — Critical Perspectives',
        back: 'How might different critical approaches illuminate Independence in Jane Eyre? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Independence. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-156',
        front: 'Jane Eyre: Passion — Definition',
        back: "The theme of Passion is central to Jane Eyre. How is Passion explored through character action, dialogue, and plot? What does the author's treatment of Passion reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-157',
        front: 'Jane Eyre: Passion — Character Analysis',
        back: 'How do characters in Jane Eyre embody the theme of Passion? Analyze how different characters relate to Passion differently. What internal conflicts does Passion create for characters? How does Passion drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-158',
        front: 'Jane Eyre: Passion — Turning Points',
        back: "Identify scenes in Jane Eyre where Passion is most intensely explored. How do these scenes reveal the author's perspective on Passion? What do characters learn or fail to learn about Passion? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-159',
        front: 'Jane Eyre: Passion — Literary Technique',
        back: 'How does Jane Eyre use literary techniques (imagery, symbolism, dialogue, structure) to explore Passion? What specific images or symbols recur? What patterns of language convey Passion? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-160',
        front: 'Jane Eyre: Passion — Critical Perspectives',
        back: 'How might different critical approaches illuminate Passion in Jane Eyre? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Passion. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-161',
        front: 'Jane Eyre: Gothic — Definition',
        back: "The theme of Gothic is central to Jane Eyre. How is Gothic explored through character action, dialogue, and plot? What does the author's treatment of Gothic reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-162',
        front: 'Jane Eyre: Gothic — Character Analysis',
        back: 'How do characters in Jane Eyre embody the theme of Gothic? Analyze how different characters relate to Gothic differently. What internal conflicts does Gothic create for characters? How does Gothic drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-163',
        front: 'Jane Eyre: Gothic — Turning Points',
        back: "Identify scenes in Jane Eyre where Gothic is most intensely explored. How do these scenes reveal the author's perspective on Gothic? What do characters learn or fail to learn about Gothic? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-164',
        front: 'Jane Eyre: Gothic — Literary Technique',
        back: 'How does Jane Eyre use literary techniques (imagery, symbolism, dialogue, structure) to explore Gothic? What specific images or symbols recur? What patterns of language convey Gothic? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-165',
        front: 'Jane Eyre: Gothic — Critical Perspectives',
        back: 'How might different critical approaches illuminate Gothic in Jane Eyre? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Gothic. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-166',
        front: 'Jane Eyre: Confinement — Definition',
        back: "The theme of Confinement is central to Jane Eyre. How is Confinement explored through character action, dialogue, and plot? What does the author's treatment of Confinement reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-167',
        front: 'Jane Eyre: Confinement — Character Analysis',
        back: 'How do characters in Jane Eyre embody the theme of Confinement? Analyze how different characters relate to Confinement differently. What internal conflicts does Confinement create for characters? How does Confinement drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-168',
        front: 'Jane Eyre: Confinement — Turning Points',
        back: "Identify scenes in Jane Eyre where Confinement is most intensely explored. How do these scenes reveal the author's perspective on Confinement? What do characters learn or fail to learn about Confinement? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-169',
        front: 'Jane Eyre: Confinement — Literary Technique',
        back: 'How does Jane Eyre use literary techniques (imagery, symbolism, dialogue, structure) to explore Confinement? What specific images or symbols recur? What patterns of language convey Confinement? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-170',
        front: 'Jane Eyre: Confinement — Critical Perspectives',
        back: 'How might different critical approaches illuminate Confinement in Jane Eyre? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Confinement. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-171',
        front: 'Jane Eyre: Love — Definition',
        back: "The theme of Love is central to Jane Eyre. How is Love explored through character action, dialogue, and plot? What does the author's treatment of Love reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-172',
        front: 'Jane Eyre: Love — Character Analysis',
        back: 'How do characters in Jane Eyre embody the theme of Love? Analyze how different characters relate to Love differently. What internal conflicts does Love create for characters? How does Love drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-173',
        front: 'Jane Eyre: Love — Turning Points',
        back: "Identify scenes in Jane Eyre where Love is most intensely explored. How do these scenes reveal the author's perspective on Love? What do characters learn or fail to learn about Love? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-174',
        front: 'Jane Eyre: Love — Literary Technique',
        back: 'How does Jane Eyre use literary techniques (imagery, symbolism, dialogue, structure) to explore Love? What specific images or symbols recur? What patterns of language convey Love? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-175',
        front: 'Jane Eyre: Love — Critical Perspectives',
        back: 'How might different critical approaches illuminate Love in Jane Eyre? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Love. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-176',
        front: 'Jane Eyre: Class — Definition',
        back: "The theme of Class is central to Jane Eyre. How is Class explored through character action, dialogue, and plot? What does the author's treatment of Class reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-177',
        front: 'Jane Eyre: Class — Character Analysis',
        back: 'How do characters in Jane Eyre embody the theme of Class? Analyze how different characters relate to Class differently. What internal conflicts does Class create for characters? How does Class drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-178',
        front: 'Jane Eyre: Class — Turning Points',
        back: "Identify scenes in Jane Eyre where Class is most intensely explored. How do these scenes reveal the author's perspective on Class? What do characters learn or fail to learn about Class? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-179',
        front: 'Jane Eyre: Class — Literary Technique',
        back: 'How does Jane Eyre use literary techniques (imagery, symbolism, dialogue, structure) to explore Class? What specific images or symbols recur? What patterns of language convey Class? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-180',
        front: 'Jane Eyre: Class — Critical Perspectives',
        back: 'How might different critical approaches illuminate Class in Jane Eyre? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Class. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-181',
        front: 'Jane Eyre: Fire — Definition',
        back: "The theme of Fire is central to Jane Eyre. How is Fire explored through character action, dialogue, and plot? What does the author's treatment of Fire reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-182',
        front: 'Jane Eyre: Fire — Character Analysis',
        back: 'How do characters in Jane Eyre embody the theme of Fire? Analyze how different characters relate to Fire differently. What internal conflicts does Fire create for characters? How does Fire drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-183',
        front: 'Jane Eyre: Fire — Turning Points',
        back: "Identify scenes in Jane Eyre where Fire is most intensely explored. How do these scenes reveal the author's perspective on Fire? What do characters learn or fail to learn about Fire? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-184',
        front: 'Jane Eyre: Fire — Literary Technique',
        back: 'How does Jane Eyre use literary techniques (imagery, symbolism, dialogue, structure) to explore Fire? What specific images or symbols recur? What patterns of language convey Fire? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-185',
        front: 'Jane Eyre: Fire — Critical Perspectives',
        back: 'How might different critical approaches illuminate Fire in Jane Eyre? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Fire. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-186',
        front: 'Jane Eyre: Conscience — Definition',
        back: "The theme of Conscience is central to Jane Eyre. How is Conscience explored through character action, dialogue, and plot? What does the author's treatment of Conscience reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-187',
        front: 'Jane Eyre: Conscience — Character Analysis',
        back: 'How do characters in Jane Eyre embody the theme of Conscience? Analyze how different characters relate to Conscience differently. What internal conflicts does Conscience create for characters? How does Conscience drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-188',
        front: 'Jane Eyre: Conscience — Turning Points',
        back: "Identify scenes in Jane Eyre where Conscience is most intensely explored. How do these scenes reveal the author's perspective on Conscience? What do characters learn or fail to learn about Conscience? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-189',
        front: 'Jane Eyre: Conscience — Literary Technique',
        back: 'How does Jane Eyre use literary techniques (imagery, symbolism, dialogue, structure) to explore Conscience? What specific images or symbols recur? What patterns of language convey Conscience? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-190',
        front: 'Jane Eyre: Conscience — Critical Perspectives',
        back: 'How might different critical approaches illuminate Conscience in Jane Eyre? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Conscience. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-191',
        front: 'Jane Eyre: Gender — Definition',
        back: "The theme of Gender is central to Jane Eyre. How is Gender explored through character action, dialogue, and plot? What does the author's treatment of Gender reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-192',
        front: 'Jane Eyre: Gender — Character Analysis',
        back: 'How do characters in Jane Eyre embody the theme of Gender? Analyze how different characters relate to Gender differently. What internal conflicts does Gender create for characters? How does Gender drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-193',
        front: 'Jane Eyre: Gender — Turning Points',
        back: "Identify scenes in Jane Eyre where Gender is most intensely explored. How do these scenes reveal the author's perspective on Gender? What do characters learn or fail to learn about Gender? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-194',
        front: 'Jane Eyre: Gender — Literary Technique',
        back: 'How does Jane Eyre use literary techniques (imagery, symbolism, dialogue, structure) to explore Gender? What specific images or symbols recur? What patterns of language convey Gender? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-195',
        front: 'Jane Eyre: Gender — Critical Perspectives',
        back: 'How might different critical approaches illuminate Gender in Jane Eyre? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Gender. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-196',
        front: 'Jane Eyre: Orphanhood — Definition',
        back: "The theme of Orphanhood is central to Jane Eyre. How is Orphanhood explored through character action, dialogue, and plot? What does the author's treatment of Orphanhood reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-197',
        front: 'Jane Eyre: Orphanhood — Character Analysis',
        back: 'How do characters in Jane Eyre embody the theme of Orphanhood? Analyze how different characters relate to Orphanhood differently. What internal conflicts does Orphanhood create for characters? How does Orphanhood drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-198',
        front: 'Jane Eyre: Orphanhood — Turning Points',
        back: "Identify scenes in Jane Eyre where Orphanhood is most intensely explored. How do these scenes reveal the author's perspective on Orphanhood? What do characters learn or fail to learn about Orphanhood? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-199',
        front: 'Jane Eyre: Orphanhood — Literary Technique',
        back: 'How does Jane Eyre use literary techniques (imagery, symbolism, dialogue, structure) to explore Orphanhood? What specific images or symbols recur? What patterns of language convey Orphanhood? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-200',
        front: 'Jane Eyre: Orphanhood — Critical Perspectives',
        back: 'How might different critical approaches illuminate Orphanhood in Jane Eyre? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Orphanhood. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-201',
        front: 'Pride and Prejudice: Prejudice — Definition',
        back: "The theme of Prejudice is central to Pride and Prejudice. How is Prejudice explored through character action, dialogue, and plot? What does the author's treatment of Prejudice reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-202',
        front: 'Pride and Prejudice: Prejudice — Character Analysis',
        back: 'How do characters in Pride and Prejudice embody the theme of Prejudice? Analyze how different characters relate to Prejudice differently. What internal conflicts does Prejudice create for characters? How does Prejudice drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-203',
        front: 'Pride and Prejudice: Prejudice — Turning Points',
        back: "Identify scenes in Pride and Prejudice where Prejudice is most intensely explored. How do these scenes reveal the author's perspective on Prejudice? What do characters learn or fail to learn about Prejudice? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-204',
        front: 'Pride and Prejudice: Prejudice — Literary Technique',
        back: 'How does Pride and Prejudice use literary techniques (imagery, symbolism, dialogue, structure) to explore Prejudice? What specific images or symbols recur? What patterns of language convey Prejudice? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-205',
        front: 'Pride and Prejudice: Prejudice — Critical Perspectives',
        back: 'How might different critical approaches illuminate Prejudice in Pride and Prejudice? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Prejudice. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-206',
        front: 'Pride and Prejudice: Pride — Definition',
        back: "The theme of Pride is central to Pride and Prejudice. How is Pride explored through character action, dialogue, and plot? What does the author's treatment of Pride reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-207',
        front: 'Pride and Prejudice: Pride — Character Analysis',
        back: 'How do characters in Pride and Prejudice embody the theme of Pride? Analyze how different characters relate to Pride differently. What internal conflicts does Pride create for characters? How does Pride drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-208',
        front: 'Pride and Prejudice: Pride — Turning Points',
        back: "Identify scenes in Pride and Prejudice where Pride is most intensely explored. How do these scenes reveal the author's perspective on Pride? What do characters learn or fail to learn about Pride? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-209',
        front: 'Pride and Prejudice: Pride — Literary Technique',
        back: 'How does Pride and Prejudice use literary techniques (imagery, symbolism, dialogue, structure) to explore Pride? What specific images or symbols recur? What patterns of language convey Pride? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-210',
        front: 'Pride and Prejudice: Pride — Critical Perspectives',
        back: 'How might different critical approaches illuminate Pride in Pride and Prejudice? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Pride. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-211',
        front: 'Pride and Prejudice: Marriage — Definition',
        back: "The theme of Marriage is central to Pride and Prejudice. How is Marriage explored through character action, dialogue, and plot? What does the author's treatment of Marriage reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-212',
        front: 'Pride and Prejudice: Marriage — Character Analysis',
        back: 'How do characters in Pride and Prejudice embody the theme of Marriage? Analyze how different characters relate to Marriage differently. What internal conflicts does Marriage create for characters? How does Marriage drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-213',
        front: 'Pride and Prejudice: Marriage — Turning Points',
        back: "Identify scenes in Pride and Prejudice where Marriage is most intensely explored. How do these scenes reveal the author's perspective on Marriage? What do characters learn or fail to learn about Marriage? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-214',
        front: 'Pride and Prejudice: Marriage — Literary Technique',
        back: 'How does Pride and Prejudice use literary techniques (imagery, symbolism, dialogue, structure) to explore Marriage? What specific images or symbols recur? What patterns of language convey Marriage? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-215',
        front: 'Pride and Prejudice: Marriage — Critical Perspectives',
        back: 'How might different critical approaches illuminate Marriage in Pride and Prejudice? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Marriage. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-216',
        front: 'Pride and Prejudice: Class — Definition',
        back: "The theme of Class is central to Pride and Prejudice. How is Class explored through character action, dialogue, and plot? What does the author's treatment of Class reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-217',
        front: 'Pride and Prejudice: Class — Character Analysis',
        back: 'How do characters in Pride and Prejudice embody the theme of Class? Analyze how different characters relate to Class differently. What internal conflicts does Class create for characters? How does Class drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-218',
        front: 'Pride and Prejudice: Class — Turning Points',
        back: "Identify scenes in Pride and Prejudice where Class is most intensely explored. How do these scenes reveal the author's perspective on Class? What do characters learn or fail to learn about Class? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-219',
        front: 'Pride and Prejudice: Class — Literary Technique',
        back: 'How does Pride and Prejudice use literary techniques (imagery, symbolism, dialogue, structure) to explore Class? What specific images or symbols recur? What patterns of language convey Class? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-220',
        front: 'Pride and Prejudice: Class — Critical Perspectives',
        back: 'How might different critical approaches illuminate Class in Pride and Prejudice? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Class. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-221',
        front: 'Pride and Prejudice: Wit — Definition',
        back: "The theme of Wit is central to Pride and Prejudice. How is Wit explored through character action, dialogue, and plot? What does the author's treatment of Wit reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-222',
        front: 'Pride and Prejudice: Wit — Character Analysis',
        back: 'How do characters in Pride and Prejudice embody the theme of Wit? Analyze how different characters relate to Wit differently. What internal conflicts does Wit create for characters? How does Wit drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-223',
        front: 'Pride and Prejudice: Wit — Turning Points',
        back: "Identify scenes in Pride and Prejudice where Wit is most intensely explored. How do these scenes reveal the author's perspective on Wit? What do characters learn or fail to learn about Wit? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-224',
        front: 'Pride and Prejudice: Wit — Literary Technique',
        back: 'How does Pride and Prejudice use literary techniques (imagery, symbolism, dialogue, structure) to explore Wit? What specific images or symbols recur? What patterns of language convey Wit? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-225',
        front: 'Pride and Prejudice: Wit — Critical Perspectives',
        back: 'How might different critical approaches illuminate Wit in Pride and Prejudice? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Wit. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-226',
        front: 'Pride and Prejudice: Women — Definition',
        back: "The theme of Women is central to Pride and Prejudice. How is Women explored through character action, dialogue, and plot? What does the author's treatment of Women reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-227',
        front: 'Pride and Prejudice: Women — Character Analysis',
        back: 'How do characters in Pride and Prejudice embody the theme of Women? Analyze how different characters relate to Women differently. What internal conflicts does Women create for characters? How does Women drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-228',
        front: 'Pride and Prejudice: Women — Turning Points',
        back: "Identify scenes in Pride and Prejudice where Women is most intensely explored. How do these scenes reveal the author's perspective on Women? What do characters learn or fail to learn about Women? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-229',
        front: 'Pride and Prejudice: Women — Literary Technique',
        back: 'How does Pride and Prejudice use literary techniques (imagery, symbolism, dialogue, structure) to explore Women? What specific images or symbols recur? What patterns of language convey Women? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-230',
        front: 'Pride and Prejudice: Women — Critical Perspectives',
        back: 'How might different critical approaches illuminate Women in Pride and Prejudice? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Women. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-231',
        front: 'Pride and Prejudice: Choice — Definition',
        back: "The theme of Choice is central to Pride and Prejudice. How is Choice explored through character action, dialogue, and plot? What does the author's treatment of Choice reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-232',
        front: 'Pride and Prejudice: Choice — Character Analysis',
        back: 'How do characters in Pride and Prejudice embody the theme of Choice? Analyze how different characters relate to Choice differently. What internal conflicts does Choice create for characters? How does Choice drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-233',
        front: 'Pride and Prejudice: Choice — Turning Points',
        back: "Identify scenes in Pride and Prejudice where Choice is most intensely explored. How do these scenes reveal the author's perspective on Choice? What do characters learn or fail to learn about Choice? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-234',
        front: 'Pride and Prejudice: Choice — Literary Technique',
        back: 'How does Pride and Prejudice use literary techniques (imagery, symbolism, dialogue, structure) to explore Choice? What specific images or symbols recur? What patterns of language convey Choice? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-235',
        front: 'Pride and Prejudice: Choice — Critical Perspectives',
        back: 'How might different critical approaches illuminate Choice in Pride and Prejudice? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Choice. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-236',
        front: 'Pride and Prejudice: Virtue — Definition',
        back: "The theme of Virtue is central to Pride and Prejudice. How is Virtue explored through character action, dialogue, and plot? What does the author's treatment of Virtue reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-237',
        front: 'Pride and Prejudice: Virtue — Character Analysis',
        back: 'How do characters in Pride and Prejudice embody the theme of Virtue? Analyze how different characters relate to Virtue differently. What internal conflicts does Virtue create for characters? How does Virtue drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-238',
        front: 'Pride and Prejudice: Virtue — Turning Points',
        back: "Identify scenes in Pride and Prejudice where Virtue is most intensely explored. How do these scenes reveal the author's perspective on Virtue? What do characters learn or fail to learn about Virtue? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-239',
        front: 'Pride and Prejudice: Virtue — Literary Technique',
        back: 'How does Pride and Prejudice use literary techniques (imagery, symbolism, dialogue, structure) to explore Virtue? What specific images or symbols recur? What patterns of language convey Virtue? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-240',
        front: 'Pride and Prejudice: Virtue — Critical Perspectives',
        back: 'How might different critical approaches illuminate Virtue in Pride and Prejudice? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Virtue. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-241',
        front: 'Pride and Prejudice: Society — Definition',
        back: "The theme of Society is central to Pride and Prejudice. How is Society explored through character action, dialogue, and plot? What does the author's treatment of Society reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-242',
        front: 'Pride and Prejudice: Society — Character Analysis',
        back: 'How do characters in Pride and Prejudice embody the theme of Society? Analyze how different characters relate to Society differently. What internal conflicts does Society create for characters? How does Society drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-243',
        front: 'Pride and Prejudice: Society — Turning Points',
        back: "Identify scenes in Pride and Prejudice where Society is most intensely explored. How do these scenes reveal the author's perspective on Society? What do characters learn or fail to learn about Society? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-244',
        front: 'Pride and Prejudice: Society — Literary Technique',
        back: 'How does Pride and Prejudice use literary techniques (imagery, symbolism, dialogue, structure) to explore Society? What specific images or symbols recur? What patterns of language convey Society? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-245',
        front: 'Pride and Prejudice: Society — Critical Perspectives',
        back: 'How might different critical approaches illuminate Society in Pride and Prejudice? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Society. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-246',
        front: 'Pride and Prejudice: Change — Definition',
        back: "The theme of Change is central to Pride and Prejudice. How is Change explored through character action, dialogue, and plot? What does the author's treatment of Change reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-247',
        front: 'Pride and Prejudice: Change — Character Analysis',
        back: 'How do characters in Pride and Prejudice embody the theme of Change? Analyze how different characters relate to Change differently. What internal conflicts does Change create for characters? How does Change drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-248',
        front: 'Pride and Prejudice: Change — Turning Points',
        back: "Identify scenes in Pride and Prejudice where Change is most intensely explored. How do these scenes reveal the author's perspective on Change? What do characters learn or fail to learn about Change? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-249',
        front: 'Pride and Prejudice: Change — Literary Technique',
        back: 'How does Pride and Prejudice use literary techniques (imagery, symbolism, dialogue, structure) to explore Change? What specific images or symbols recur? What patterns of language convey Change? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-250',
        front: 'Pride and Prejudice: Change — Critical Perspectives',
        back: 'How might different critical approaches illuminate Change in Pride and Prejudice? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Change. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-251',
        front: 'Animal Farm: Power — Definition',
        back: "The theme of Power is central to Animal Farm. How is Power explored through character action, dialogue, and plot? What does the author's treatment of Power reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-252',
        front: 'Animal Farm: Power — Character Analysis',
        back: 'How do characters in Animal Farm embody the theme of Power? Analyze how different characters relate to Power differently. What internal conflicts does Power create for characters? How does Power drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-253',
        front: 'Animal Farm: Power — Turning Points',
        back: "Identify scenes in Animal Farm where Power is most intensely explored. How do these scenes reveal the author's perspective on Power? What do characters learn or fail to learn about Power? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-254',
        front: 'Animal Farm: Power — Literary Technique',
        back: 'How does Animal Farm use literary techniques (imagery, symbolism, dialogue, structure) to explore Power? What specific images or symbols recur? What patterns of language convey Power? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-255',
        front: 'Animal Farm: Power — Critical Perspectives',
        back: 'How might different critical approaches illuminate Power in Animal Farm? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Power. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-256',
        front: 'Animal Farm: Revolution — Definition',
        back: "The theme of Revolution is central to Animal Farm. How is Revolution explored through character action, dialogue, and plot? What does the author's treatment of Revolution reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-257',
        front: 'Animal Farm: Revolution — Character Analysis',
        back: 'How do characters in Animal Farm embody the theme of Revolution? Analyze how different characters relate to Revolution differently. What internal conflicts does Revolution create for characters? How does Revolution drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-258',
        front: 'Animal Farm: Revolution — Turning Points',
        back: "Identify scenes in Animal Farm where Revolution is most intensely explored. How do these scenes reveal the author's perspective on Revolution? What do characters learn or fail to learn about Revolution? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-259',
        front: 'Animal Farm: Revolution — Literary Technique',
        back: 'How does Animal Farm use literary techniques (imagery, symbolism, dialogue, structure) to explore Revolution? What specific images or symbols recur? What patterns of language convey Revolution? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-260',
        front: 'Animal Farm: Revolution — Critical Perspectives',
        back: 'How might different critical approaches illuminate Revolution in Animal Farm? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Revolution. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-261',
        front: 'Animal Farm: Propaganda — Definition',
        back: "The theme of Propaganda is central to Animal Farm. How is Propaganda explored through character action, dialogue, and plot? What does the author's treatment of Propaganda reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-262',
        front: 'Animal Farm: Propaganda — Character Analysis',
        back: 'How do characters in Animal Farm embody the theme of Propaganda? Analyze how different characters relate to Propaganda differently. What internal conflicts does Propaganda create for characters? How does Propaganda drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-263',
        front: 'Animal Farm: Propaganda — Turning Points',
        back: "Identify scenes in Animal Farm where Propaganda is most intensely explored. How do these scenes reveal the author's perspective on Propaganda? What do characters learn or fail to learn about Propaganda? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-264',
        front: 'Animal Farm: Propaganda — Literary Technique',
        back: 'How does Animal Farm use literary techniques (imagery, symbolism, dialogue, structure) to explore Propaganda? What specific images or symbols recur? What patterns of language convey Propaganda? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-265',
        front: 'Animal Farm: Propaganda — Critical Perspectives',
        back: 'How might different critical approaches illuminate Propaganda in Animal Farm? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Propaganda. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-266',
        front: 'Animal Farm: Class — Definition',
        back: "The theme of Class is central to Animal Farm. How is Class explored through character action, dialogue, and plot? What does the author's treatment of Class reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-267',
        front: 'Animal Farm: Class — Character Analysis',
        back: 'How do characters in Animal Farm embody the theme of Class? Analyze how different characters relate to Class differently. What internal conflicts does Class create for characters? How does Class drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-268',
        front: 'Animal Farm: Class — Turning Points',
        back: "Identify scenes in Animal Farm where Class is most intensely explored. How do these scenes reveal the author's perspective on Class? What do characters learn or fail to learn about Class? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-269',
        front: 'Animal Farm: Class — Literary Technique',
        back: 'How does Animal Farm use literary techniques (imagery, symbolism, dialogue, structure) to explore Class? What specific images or symbols recur? What patterns of language convey Class? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-270',
        front: 'Animal Farm: Class — Critical Perspectives',
        back: 'How might different critical approaches illuminate Class in Animal Farm? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Class. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-271',
        front: 'Animal Farm: Corruption — Definition',
        back: "The theme of Corruption is central to Animal Farm. How is Corruption explored through character action, dialogue, and plot? What does the author's treatment of Corruption reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-272',
        front: 'Animal Farm: Corruption — Character Analysis',
        back: 'How do characters in Animal Farm embody the theme of Corruption? Analyze how different characters relate to Corruption differently. What internal conflicts does Corruption create for characters? How does Corruption drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-273',
        front: 'Animal Farm: Corruption — Turning Points',
        back: "Identify scenes in Animal Farm where Corruption is most intensely explored. How do these scenes reveal the author's perspective on Corruption? What do characters learn or fail to learn about Corruption? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-274',
        front: 'Animal Farm: Corruption — Literary Technique',
        back: 'How does Animal Farm use literary techniques (imagery, symbolism, dialogue, structure) to explore Corruption? What specific images or symbols recur? What patterns of language convey Corruption? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-275',
        front: 'Animal Farm: Corruption — Critical Perspectives',
        back: 'How might different critical approaches illuminate Corruption in Animal Farm? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Corruption. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-276',
        front: 'Animal Farm: Language — Definition',
        back: "The theme of Language is central to Animal Farm. How is Language explored through character action, dialogue, and plot? What does the author's treatment of Language reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-277',
        front: 'Animal Farm: Language — Character Analysis',
        back: 'How do characters in Animal Farm embody the theme of Language? Analyze how different characters relate to Language differently. What internal conflicts does Language create for characters? How does Language drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-278',
        front: 'Animal Farm: Language — Turning Points',
        back: "Identify scenes in Animal Farm where Language is most intensely explored. How do these scenes reveal the author's perspective on Language? What do characters learn or fail to learn about Language? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-279',
        front: 'Animal Farm: Language — Literary Technique',
        back: 'How does Animal Farm use literary techniques (imagery, symbolism, dialogue, structure) to explore Language? What specific images or symbols recur? What patterns of language convey Language? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-280',
        front: 'Animal Farm: Language — Critical Perspectives',
        back: 'How might different critical approaches illuminate Language in Animal Farm? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Language. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-281',
        front: 'Animal Farm: Fear — Definition',
        back: "The theme of Fear is central to Animal Farm. How is Fear explored through character action, dialogue, and plot? What does the author's treatment of Fear reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-282',
        front: 'Animal Farm: Fear — Character Analysis',
        back: 'How do characters in Animal Farm embody the theme of Fear? Analyze how different characters relate to Fear differently. What internal conflicts does Fear create for characters? How does Fear drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-283',
        front: 'Animal Farm: Fear — Turning Points',
        back: "Identify scenes in Animal Farm where Fear is most intensely explored. How do these scenes reveal the author's perspective on Fear? What do characters learn or fail to learn about Fear? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-284',
        front: 'Animal Farm: Fear — Literary Technique',
        back: 'How does Animal Farm use literary techniques (imagery, symbolism, dialogue, structure) to explore Fear? What specific images or symbols recur? What patterns of language convey Fear? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-285',
        front: 'Animal Farm: Fear — Critical Perspectives',
        back: 'How might different critical approaches illuminate Fear in Animal Farm? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Fear. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-286',
        front: 'Animal Farm: History — Definition',
        back: "The theme of History is central to Animal Farm. How is History explored through character action, dialogue, and plot? What does the author's treatment of History reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-287',
        front: 'Animal Farm: History — Character Analysis',
        back: 'How do characters in Animal Farm embody the theme of History? Analyze how different characters relate to History differently. What internal conflicts does History create for characters? How does History drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-288',
        front: 'Animal Farm: History — Turning Points',
        back: "Identify scenes in Animal Farm where History is most intensely explored. How do these scenes reveal the author's perspective on History? What do characters learn or fail to learn about History? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-289',
        front: 'Animal Farm: History — Literary Technique',
        back: 'How does Animal Farm use literary techniques (imagery, symbolism, dialogue, structure) to explore History? What specific images or symbols recur? What patterns of language convey History? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-290',
        front: 'Animal Farm: History — Critical Perspectives',
        back: 'How might different critical approaches illuminate History in Animal Farm? Apply Marxist, feminist, psychoanalytic, or formalist criticism to History. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-291',
        front: 'Animal Farm: Loyalty — Definition',
        back: "The theme of Loyalty is central to Animal Farm. How is Loyalty explored through character action, dialogue, and plot? What does the author's treatment of Loyalty reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-292',
        front: 'Animal Farm: Loyalty — Character Analysis',
        back: 'How do characters in Animal Farm embody the theme of Loyalty? Analyze how different characters relate to Loyalty differently. What internal conflicts does Loyalty create for characters? How does Loyalty drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-293',
        front: 'Animal Farm: Loyalty — Turning Points',
        back: "Identify scenes in Animal Farm where Loyalty is most intensely explored. How do these scenes reveal the author's perspective on Loyalty? What do characters learn or fail to learn about Loyalty? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-294',
        front: 'Animal Farm: Loyalty — Literary Technique',
        back: 'How does Animal Farm use literary techniques (imagery, symbolism, dialogue, structure) to explore Loyalty? What specific images or symbols recur? What patterns of language convey Loyalty? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-295',
        front: 'Animal Farm: Loyalty — Critical Perspectives',
        back: 'How might different critical approaches illuminate Loyalty in Animal Farm? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Loyalty. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-296',
        front: 'Animal Farm: Betrayal — Definition',
        back: "The theme of Betrayal is central to Animal Farm. How is Betrayal explored through character action, dialogue, and plot? What does the author's treatment of Betrayal reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
      },
      {
        id: 'bulk-297',
        front: 'Animal Farm: Betrayal — Character Analysis',
        back: 'How do characters in Animal Farm embody the theme of Betrayal? Analyze how different characters relate to Betrayal differently. What internal conflicts does Betrayal create for characters? How does Betrayal drive character decisions and development? Use specific scenes to support your analysis.',
      },
      {
        id: 'bulk-298',
        front: 'Animal Farm: Betrayal — Turning Points',
        back: "Identify scenes in Animal Farm where Betrayal is most intensely explored. How do these scenes reveal the author's perspective on Betrayal? What do characters learn or fail to learn about Betrayal? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
      },
      {
        id: 'bulk-299',
        front: 'Animal Farm: Betrayal — Literary Technique',
        back: 'How does Animal Farm use literary techniques (imagery, symbolism, dialogue, structure) to explore Betrayal? What specific images or symbols recur? What patterns of language convey Betrayal? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
      },
      {
        id: 'bulk-300',
        front: 'Animal Farm: Betrayal — Critical Perspectives',
        back: 'How might different critical approaches illuminate Betrayal in Animal Farm? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Betrayal. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
      },
      {
        id: 'bulk-301',
        front: 'Exam Strategy #1',
        back: 'Time management: Spend 10 min planning, 40 min writing, 5 min proofreading  Why this matters: Strong essays follow consistent strategies that demonstrate planning and care. This single technique can improve your essay by making it clearer, more persuasive, and more sophisticated.',
      },
      {
        id: 'bulk-302',
        front: 'Exam Strategy #2',
        back: 'Start with strongest evidence to hook the reader  Why this matters: Strong essays follow consistent strategies that demonstrate planning and care. This single technique can improve your essay by making it clearer, more persuasive, and more sophisticated.',
      },
      {
        id: 'bulk-303',
        front: 'Exam Strategy #3',
        back: 'Use topic sentences to guide reader through argument  Why this matters: Strong essays follow consistent strategies that demonstrate planning and care. This single technique can improve your essay by making it clearer, more persuasive, and more sophisticated.',
      },
      {
        id: 'bulk-304',
        front: 'Exam Strategy #4',
        back: "Explain quotations; don't assume they speak for themselves  Why this matters: Strong essays follow consistent strategies that demonstrate planning and care. This single technique can improve your essay by making it clearer, more persuasive, and more sophisticated.",
      },
      {
        id: 'bulk-305',
        front: 'Exam Strategy #5',
        back: 'End paragraphs with a sentence connecting to thesis  Why this matters: Strong essays follow consistent strategies that demonstrate planning and care. This single technique can improve your essay by making it clearer, more persuasive, and more sophisticated.',
      },
      {
        id: 'bulk-306',
        front: 'Exam Strategy #6',
        back: 'Use subject-specific terminology accurately  Why this matters: Strong essays follow consistent strategies that demonstrate planning and care. This single technique can improve your essay by making it clearer, more persuasive, and more sophisticated.',
      },
      {
        id: 'bulk-307',
        front: 'Exam Strategy #7',
        back: 'Vary sentence length to maintain reader interest  Why this matters: Strong essays follow consistent strategies that demonstrate planning and care. This single technique can improve your essay by making it clearer, more persuasive, and more sophisticated.',
      },
      {
        id: 'bulk-308',
        front: 'Exam Strategy #8',
        back: 'Show awareness of alternative interpretations  Why this matters: Strong essays follow consistent strategies that demonstrate planning and care. This single technique can improve your essay by making it clearer, more persuasive, and more sophisticated.',
      },
      {
        id: 'bulk-309',
        front: 'Exam Strategy #9',
        back: 'Use present tense when discussing literature  Why this matters: Strong essays follow consistent strategies that demonstrate planning and care. This single technique can improve your essay by making it clearer, more persuasive, and more sophisticated.',
      },
      {
        id: 'bulk-310',
        front: 'Exam Strategy #10',
        back: 'Proofread for spelling and grammar errors  Why this matters: Strong essays follow consistent strategies that demonstrate planning and care. This single technique can improve your essay by making it clearer, more persuasive, and more sophisticated.',
      },
      {
        id: 'bulk-311',
        front: 'Comparative Essay #1: Macbeth vs Romeo and Juliet',
        back: 'Both feature tragic protagonists whose actions lead to downfall. Compare how Shakespeare shows character agency vs fate in each play.  Structure: Introduce both texts and your argument in thesis. In body, make explicit comparisons rather than treating texts separately. Show what the differences reveal. Conclude with significance of comparative insights.',
      },
      {
        id: 'bulk-312',
        front: 'Comparative Essay #1: Macbeth vs Romeo and Juliet',
        back: 'Both feature tragic protagonists whose actions lead to downfall. Compare how Shakespeare shows character agency vs fate in each play.  Structure: Introduce both texts and your argument in thesis. In body, make explicit comparisons rather than treating texts separately. Show what the differences reveal. Conclude with significance of comparative insights.',
      },
      {
        id: 'bulk-313',
        front: 'Comparative Essay #1: Macbeth vs Romeo and Juliet',
        back: 'Both feature tragic protagonists whose actions lead to downfall. Compare how Shakespeare shows character agency vs fate in each play.  Structure: Introduce both texts and your argument in thesis. In body, make explicit comparisons rather than treating texts separately. Show what the differences reveal. Conclude with significance of comparative insights.',
      },
      {
        id: 'bulk-314',
        front: 'Comparative Essay #2: The Great Gatsby vs Pride and Prejudice',
        back: "Both critique social systems affecting protagonist choices. How does Fitzgerald's critique of capitalism compare to Austen's critique of marriage economics?  Structure: Introduce both texts and your argument in thesis. In body, make explicit comparisons rather than treating texts separately. Show what the differences reveal. Conclude with significance of comparative insights.",
      },
      {
        id: 'bulk-315',
        front: 'Comparative Essay #2: The Great Gatsby vs Pride and Prejudice',
        back: "Both critique social systems affecting protagonist choices. How does Fitzgerald's critique of capitalism compare to Austen's critique of marriage economics?  Structure: Introduce both texts and your argument in thesis. In body, make explicit comparisons rather than treating texts separately. Show what the differences reveal. Conclude with significance of comparative insights.",
      },
      {
        id: 'bulk-316',
        front: 'Comparative Essay #2: The Great Gatsby vs Pride and Prejudice',
        back: "Both critique social systems affecting protagonist choices. How does Fitzgerald's critique of capitalism compare to Austen's critique of marriage economics?  Structure: Introduce both texts and your argument in thesis. In body, make explicit comparisons rather than treating texts separately. Show what the differences reveal. Conclude with significance of comparative insights.",
      },
      {
        id: 'bulk-317',
        front: 'Comparative Essay #3: Jane Eyre vs Pride and Prejudice',
        back: 'Both feature heroines who insist on their right to choose husbands. Compare how Brontë and Austen present female agency and marriage differently.  Structure: Introduce both texts and your argument in thesis. In body, make explicit comparisons rather than treating texts separately. Show what the differences reveal. Conclude with significance of comparative insights.',
      },
      {
        id: 'bulk-318',
        front: 'Comparative Essay #3: Jane Eyre vs Pride and Prejudice',
        back: 'Both feature heroines who insist on their right to choose husbands. Compare how Brontë and Austen present female agency and marriage differently.  Structure: Introduce both texts and your argument in thesis. In body, make explicit comparisons rather than treating texts separately. Show what the differences reveal. Conclude with significance of comparative insights.',
      },
      {
        id: 'bulk-319',
        front: 'Comparative Essay #3: Jane Eyre vs Pride and Prejudice',
        back: 'Both feature heroines who insist on their right to choose husbands. Compare how Brontë and Austen present female agency and marriage differently.  Structure: Introduce both texts and your argument in thesis. In body, make explicit comparisons rather than treating texts separately. Show what the differences reveal. Conclude with significance of comparative insights.',
      },
      {
        id: 'bulk-320',
        front: 'Comparative Essay #4: Animal Farm vs Macbeth',
        back: "Both show how power corrupts. Compare Orwell's allegory to Shakespeare's tragedy. How does each author suggest corruption happens?  Structure: Introduce both texts and your argument in thesis. In body, make explicit comparisons rather than treating texts separately. Show what the differences reveal. Conclude with significance of comparative insights.",
      },
      {
        id: 'bulk-321',
        front: 'Comparative Essay #4: Animal Farm vs Macbeth',
        back: "Both show how power corrupts. Compare Orwell's allegory to Shakespeare's tragedy. How does each author suggest corruption happens?  Structure: Introduce both texts and your argument in thesis. In body, make explicit comparisons rather than treating texts separately. Show what the differences reveal. Conclude with significance of comparative insights.",
      },
      {
        id: 'bulk-322',
        front: 'Comparative Essay #4: Animal Farm vs Macbeth',
        back: "Both show how power corrupts. Compare Orwell's allegory to Shakespeare's tragedy. How does each author suggest corruption happens?  Structure: Introduce both texts and your argument in thesis. In body, make explicit comparisons rather than treating texts separately. Show what the differences reveal. Conclude with significance of comparative insights.",
      },
      {
        id: 'bulk-323',
        front: 'Comparative Essay #5: The Great Gatsby vs Animal Farm',
        back: "Both critique systems of power and ambition. How does Fitzgerald's capitalist critique compare to Orwell's communist critique?  Structure: Introduce both texts and your argument in thesis. In body, make explicit comparisons rather than treating texts separately. Show what the differences reveal. Conclude with significance of comparative insights.",
      },
      {
        id: 'bulk-324',
        front: 'Comparative Essay #5: The Great Gatsby vs Animal Farm',
        back: "Both critique systems of power and ambition. How does Fitzgerald's capitalist critique compare to Orwell's communist critique?  Structure: Introduce both texts and your argument in thesis. In body, make explicit comparisons rather than treating texts separately. Show what the differences reveal. Conclude with significance of comparative insights.",
      },
      {
        id: 'bulk-325',
        front: 'Comparative Essay #5: The Great Gatsby vs Animal Farm',
        back: "Both critique systems of power and ambition. How does Fitzgerald's capitalist critique compare to Orwell's communist critique?  Structure: Introduce both texts and your argument in thesis. In body, make explicit comparisons rather than treating texts separately. Show what the differences reveal. Conclude with significance of comparative insights.",
      },
    ],
  },
  {
    id: 'final-deck',
    title: 'Final Mastery Cards',
    description: 'Advanced synthesis and interpretation for exam excellence',
    category: 'Meta-Analysis',
    board: 'Multi-Exam-Board',
    cards: [
      {
        id: 'final-1',
        front: 'Literary Concept 1: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-2',
        front: 'Literary Concept 2: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-3',
        front: 'Literary Concept 3: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-4',
        front: 'Literary Concept 4: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-5',
        front: 'Literary Concept 5: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-6',
        front: 'Literary Concept 6: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-7',
        front: 'Literary Concept 7: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-8',
        front: 'Literary Concept 8: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-9',
        front: 'Literary Concept 9: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-10',
        front: 'Literary Concept 10: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-11',
        front: 'Literary Concept 11: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-12',
        front: 'Literary Concept 12: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-13',
        front: 'Literary Concept 13: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-14',
        front: 'Literary Concept 14: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-15',
        front: 'Literary Concept 15: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-16',
        front: 'Literary Concept 16: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-17',
        front: 'Literary Concept 17: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-18',
        front: 'Literary Concept 18: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-19',
        front: 'Literary Concept 19: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-20',
        front: 'Literary Concept 20: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-21',
        front: 'Literary Concept 21: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-22',
        front: 'Literary Concept 22: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-23',
        front: 'Literary Concept 23: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-24',
        front: 'Literary Concept 24: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-25',
        front: 'Literary Concept 25: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-26',
        front: 'Literary Concept 26: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-27',
        front: 'Literary Concept 27: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-28',
        front: 'Literary Concept 28: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-29',
        front: 'Literary Concept 29: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-30',
        front: 'Literary Concept 30: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-31',
        front: 'Literary Concept 31: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-32',
        front: 'Literary Concept 32: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-33',
        front: 'Literary Concept 33: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-34',
        front: 'Literary Concept 34: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-35',
        front: 'Literary Concept 35: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-36',
        front: 'Literary Concept 36: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-37',
        front: 'Literary Concept 37: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-38',
        front: 'Literary Concept 38: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-39',
        front: 'Literary Concept 39: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-40',
        front: 'Literary Concept 40: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-41',
        front: 'Literary Concept 41: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-42',
        front: 'Literary Concept 42: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-43',
        front: 'Literary Concept 43: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-44',
        front: 'Literary Concept 44: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-45',
        front: 'Literary Concept 45: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-46',
        front: 'Literary Concept 46: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-47',
        front: 'Literary Concept 47: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-48',
        front: 'Literary Concept 48: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-49',
        front: 'Literary Concept 49: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-50',
        front: 'Literary Concept 50: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-51',
        front: 'Literary Concept 51: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-52',
        front: 'Literary Concept 52: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-53',
        front: 'Literary Concept 53: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-54',
        front: 'Literary Concept 54: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-55',
        front: 'Literary Concept 55: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-56',
        front: 'Literary Concept 56: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-57',
        front: 'Literary Concept 57: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-58',
        front: 'Literary Concept 58: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-59',
        front: 'Literary Concept 59: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-60',
        front: 'Literary Concept 60: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-61',
        front: 'Literary Concept 61: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-62',
        front: 'Literary Concept 62: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-63',
        front: 'Literary Concept 63: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-64',
        front: 'Literary Concept 64: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-65',
        front: 'Literary Concept 65: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-66',
        front: 'Literary Concept 66: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-67',
        front: 'Literary Concept 67: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-68',
        front: 'Literary Concept 68: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-69',
        front: 'Literary Concept 69: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-70',
        front: 'Literary Concept 70: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-71',
        front: 'Literary Concept 71: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-72',
        front: 'Literary Concept 72: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-73',
        front: 'Literary Concept 73: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-74',
        front: 'Literary Concept 74: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-75',
        front: 'Literary Concept 75: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-76',
        front: 'Literary Concept 76: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-77',
        front: 'Literary Concept 77: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-78',
        front: 'Literary Concept 78: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-79',
        front: 'Literary Concept 79: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-80',
        front: 'Literary Concept 80: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-81',
        front: 'Literary Concept 81: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-82',
        front: 'Literary Concept 82: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-83',
        front: 'Literary Concept 83: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-84',
        front: 'Literary Concept 84: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-85',
        front: 'Literary Concept 85: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-86',
        front: 'Literary Concept 86: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-87',
        front: 'Literary Concept 87: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-88',
        front: 'Literary Concept 88: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-89',
        front: 'Literary Concept 89: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-90',
        front: 'Literary Concept 90: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-91',
        front: 'Literary Concept 91: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-92',
        front: 'Literary Concept 92: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-93',
        front: 'Literary Concept 93: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-94',
        front: 'Literary Concept 94: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-95',
        front: 'Literary Concept 95: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-96',
        front: 'Literary Concept 96: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-97',
        front: 'Literary Concept 97: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-98',
        front: 'Literary Concept 98: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-99',
        front: 'Literary Concept 99: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-100',
        front: 'Literary Concept 100: Context and Interpretation',
        back: "The interpretation of any text depends on context: historical moment, author's biography, reader's perspective. Consider multiple contexts: when was the text written? What was happening in the world? What was the author's life like? What assumptions do modern readers bring? How do these contexts shape meaning? Sophisticated analysis acknowledges contextual influences on interpretation.",
      },
      {
        id: 'final-101',
        front: 'Essay Building Block 1: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-102',
        front: 'Essay Building Block 2: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-103',
        front: 'Essay Building Block 3: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-104',
        front: 'Essay Building Block 4: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-105',
        front: 'Essay Building Block 5: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-106',
        front: 'Essay Building Block 6: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-107',
        front: 'Essay Building Block 7: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-108',
        front: 'Essay Building Block 8: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-109',
        front: 'Essay Building Block 9: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-110',
        front: 'Essay Building Block 10: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-111',
        front: 'Essay Building Block 11: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-112',
        front: 'Essay Building Block 12: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-113',
        front: 'Essay Building Block 13: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-114',
        front: 'Essay Building Block 14: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-115',
        front: 'Essay Building Block 15: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-116',
        front: 'Essay Building Block 16: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-117',
        front: 'Essay Building Block 17: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-118',
        front: 'Essay Building Block 18: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-119',
        front: 'Essay Building Block 19: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-120',
        front: 'Essay Building Block 20: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-121',
        front: 'Essay Building Block 21: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-122',
        front: 'Essay Building Block 22: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-123',
        front: 'Essay Building Block 23: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-124',
        front: 'Essay Building Block 24: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-125',
        front: 'Essay Building Block 25: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-126',
        front: 'Essay Building Block 26: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-127',
        front: 'Essay Building Block 27: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-128',
        front: 'Essay Building Block 28: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-129',
        front: 'Essay Building Block 29: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-130',
        front: 'Essay Building Block 30: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-131',
        front: 'Essay Building Block 31: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-132',
        front: 'Essay Building Block 32: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-133',
        front: 'Essay Building Block 33: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-134',
        front: 'Essay Building Block 34: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-135',
        front: 'Essay Building Block 35: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-136',
        front: 'Essay Building Block 36: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-137',
        front: 'Essay Building Block 37: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-138',
        front: 'Essay Building Block 38: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-139',
        front: 'Essay Building Block 39: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-140',
        front: 'Essay Building Block 40: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-141',
        front: 'Essay Building Block 41: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-142',
        front: 'Essay Building Block 42: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-143',
        front: 'Essay Building Block 43: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-144',
        front: 'Essay Building Block 44: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-145',
        front: 'Essay Building Block 45: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-146',
        front: 'Essay Building Block 46: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-147',
        front: 'Essay Building Block 47: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-148',
        front: 'Essay Building Block 48: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-149',
        front: 'Essay Building Block 49: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-150',
        front: 'Essay Building Block 50: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-151',
        front: 'Essay Building Block 51: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-152',
        front: 'Essay Building Block 52: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-153',
        front: 'Essay Building Block 53: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-154',
        front: 'Essay Building Block 54: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-155',
        front: 'Essay Building Block 55: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-156',
        front: 'Essay Building Block 56: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-157',
        front: 'Essay Building Block 57: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-158',
        front: 'Essay Building Block 58: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-159',
        front: 'Essay Building Block 59: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-160',
        front: 'Essay Building Block 60: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-161',
        front: 'Essay Building Block 61: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-162',
        front: 'Essay Building Block 62: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-163',
        front: 'Essay Building Block 63: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-164',
        front: 'Essay Building Block 64: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-165',
        front: 'Essay Building Block 65: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-166',
        front: 'Essay Building Block 66: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-167',
        front: 'Essay Building Block 67: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-168',
        front: 'Essay Building Block 68: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-169',
        front: 'Essay Building Block 69: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-170',
        front: 'Essay Building Block 70: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-171',
        front: 'Essay Building Block 71: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-172',
        front: 'Essay Building Block 72: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-173',
        front: 'Essay Building Block 73: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-174',
        front: 'Essay Building Block 74: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-175',
        front: 'Essay Building Block 75: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-176',
        front: 'Essay Building Block 76: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-177',
        front: 'Essay Building Block 77: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-178',
        front: 'Essay Building Block 78: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-179',
        front: 'Essay Building Block 79: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-180',
        front: 'Essay Building Block 80: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-181',
        front: 'Essay Building Block 81: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-182',
        front: 'Essay Building Block 82: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-183',
        front: 'Essay Building Block 83: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-184',
        front: 'Essay Building Block 84: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-185',
        front: 'Essay Building Block 85: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-186',
        front: 'Essay Building Block 86: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-187',
        front: 'Essay Building Block 87: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-188',
        front: 'Essay Building Block 88: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-189',
        front: 'Essay Building Block 89: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-190',
        front: 'Essay Building Block 90: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-191',
        front: 'Essay Building Block 91: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-192',
        front: 'Essay Building Block 92: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-193',
        front: 'Essay Building Block 93: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-194',
        front: 'Essay Building Block 94: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-195',
        front: 'Essay Building Block 95: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-196',
        front: 'Essay Building Block 96: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-197',
        front: 'Essay Building Block 97: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-198',
        front: 'Essay Building Block 98: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-199',
        front: 'Essay Building Block 99: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-200',
        front: 'Essay Building Block 100: Constructing Your Argument',
        back: 'Every essay builds from claims to evidence to analysis. Start with your main point (what you want to argue). Find evidence (quotations, scenes, examples) that support the point. Analyze the evidence (explain what it shows, how it works, why it matters). Connect back to thesis (how does this point advance your overall argument?). This structure ensures clarity and completeness. Follow it consistently across all paragraphs.',
      },
      {
        id: 'final-201',
        front: 'Advanced Analysis 1: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-202',
        front: 'Advanced Analysis 2: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-203',
        front: 'Advanced Analysis 3: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-204',
        front: 'Advanced Analysis 4: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-205',
        front: 'Advanced Analysis 5: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-206',
        front: 'Advanced Analysis 6: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-207',
        front: 'Advanced Analysis 7: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-208',
        front: 'Advanced Analysis 8: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-209',
        front: 'Advanced Analysis 9: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-210',
        front: 'Advanced Analysis 10: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-211',
        front: 'Advanced Analysis 11: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-212',
        front: 'Advanced Analysis 12: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-213',
        front: 'Advanced Analysis 13: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-214',
        front: 'Advanced Analysis 14: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-215',
        front: 'Advanced Analysis 15: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-216',
        front: 'Advanced Analysis 16: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-217',
        front: 'Advanced Analysis 17: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-218',
        front: 'Advanced Analysis 18: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-219',
        front: 'Advanced Analysis 19: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-220',
        front: 'Advanced Analysis 20: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-221',
        front: 'Advanced Analysis 21: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-222',
        front: 'Advanced Analysis 22: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-223',
        front: 'Advanced Analysis 23: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-224',
        front: 'Advanced Analysis 24: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-225',
        front: 'Advanced Analysis 25: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-226',
        front: 'Advanced Analysis 26: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-227',
        front: 'Advanced Analysis 27: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-228',
        front: 'Advanced Analysis 28: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-229',
        front: 'Advanced Analysis 29: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-230',
        front: 'Advanced Analysis 30: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-231',
        front: 'Advanced Analysis 31: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-232',
        front: 'Advanced Analysis 32: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-233',
        front: 'Advanced Analysis 33: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-234',
        front: 'Advanced Analysis 34: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-235',
        front: 'Advanced Analysis 35: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-236',
        front: 'Advanced Analysis 36: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-237',
        front: 'Advanced Analysis 37: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-238',
        front: 'Advanced Analysis 38: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-239',
        front: 'Advanced Analysis 39: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-240',
        front: 'Advanced Analysis 40: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-241',
        front: 'Advanced Analysis 41: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-242',
        front: 'Advanced Analysis 42: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-243',
        front: 'Advanced Analysis 43: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-244',
        front: 'Advanced Analysis 44: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-245',
        front: 'Advanced Analysis 45: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-246',
        front: 'Advanced Analysis 46: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-247',
        front: 'Advanced Analysis 47: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-248',
        front: 'Advanced Analysis 48: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-249',
        front: 'Advanced Analysis 49: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-250',
        front: 'Advanced Analysis 50: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-251',
        front: 'Advanced Analysis 51: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-252',
        front: 'Advanced Analysis 52: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-253',
        front: 'Advanced Analysis 53: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-254',
        front: 'Advanced Analysis 54: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-255',
        front: 'Advanced Analysis 55: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-256',
        front: 'Advanced Analysis 56: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-257',
        front: 'Advanced Analysis 57: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-258',
        front: 'Advanced Analysis 58: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-259',
        front: 'Advanced Analysis 59: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-260',
        front: 'Advanced Analysis 60: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-261',
        front: 'Advanced Analysis 61: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-262',
        front: 'Advanced Analysis 62: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-263',
        front: 'Advanced Analysis 63: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-264',
        front: 'Advanced Analysis 64: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-265',
        front: 'Advanced Analysis 65: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-266',
        front: 'Advanced Analysis 66: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-267',
        front: 'Advanced Analysis 67: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-268',
        front: 'Advanced Analysis 68: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-269',
        front: 'Advanced Analysis 69: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-270',
        front: 'Advanced Analysis 70: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-271',
        front: 'Advanced Analysis 71: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-272',
        front: 'Advanced Analysis 72: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-273',
        front: 'Advanced Analysis 73: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-274',
        front: 'Advanced Analysis 74: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-275',
        front: 'Advanced Analysis 75: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-276',
        front: 'Advanced Analysis 76: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-277',
        front: 'Advanced Analysis 77: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-278',
        front: 'Advanced Analysis 78: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-279',
        front: 'Advanced Analysis 79: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-280',
        front: 'Advanced Analysis 80: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-281',
        front: 'Advanced Analysis 81: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-282',
        front: 'Advanced Analysis 82: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-283',
        front: 'Advanced Analysis 83: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-284',
        front: 'Advanced Analysis 84: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-285',
        front: 'Advanced Analysis 85: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-286',
        front: 'Advanced Analysis 86: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-287',
        front: 'Advanced Analysis 87: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-288',
        front: 'Advanced Analysis 88: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-289',
        front: 'Advanced Analysis 89: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-290',
        front: 'Advanced Analysis 90: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-291',
        front: 'Advanced Analysis 91: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-292',
        front: 'Advanced Analysis 92: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-293',
        front: 'Advanced Analysis 93: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-294',
        front: 'Advanced Analysis 94: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-295',
        front: 'Advanced Analysis 95: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-296',
        front: 'Advanced Analysis 96: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-297',
        front: 'Advanced Analysis 97: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-298',
        front: 'Advanced Analysis 98: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-299',
        front: 'Advanced Analysis 99: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
      {
        id: 'final-300',
        front: 'Advanced Analysis 100: Synthesis and Interpretation',
        back: "Sophisticated essays go beyond identifying literary devices to explaining their effect. Don't just note that a text uses symbolism — explain what the symbols mean and why that meaning matters. Don't just list character traits — analyze how character development reveals theme or commentary. Don't just summarize plot — explain what the plot structure reveals about the author's worldview. Synthesis means connecting multiple elements to show larger meaning.",
      },
    ],
  },
]

export default flashcardDecks
