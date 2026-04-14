// Game data for The English Hub mobile app
// QuoteMatch pairs and VocabItem literary devices for GCSE English Literature

export type QuoteMatch = {
  quote: string // <=15 words
  source: string // text/poem name
  character?: string // who says it (if applicable)
}

export type VocabItem = {
  term: string
  definition: string
  example: string // example from a set text
  difficulty: 'easy' | 'medium' | 'hard'
}

// ---------------------------------------------------------------------------
// 50 QuoteMatch pairs from GCSE set texts matched to their sources
// ---------------------------------------------------------------------------
export const QUOTE_MATCHES: QuoteMatch[] = [
  // Macbeth (8)
  {
    quote: 'Is this a dagger which I see before me',
    source: 'Macbeth',
    character: 'Macbeth',
  },
  {
    quote: 'Out, damned spot! Out, I say!',
    source: 'Macbeth',
    character: 'Lady Macbeth',
  },
  {
    quote: 'Look like the innocent flower, but be the serpent under it',
    source: 'Macbeth',
    character: 'Lady Macbeth',
  },
  {
    quote: 'Fair is foul, and foul is fair',
    source: 'Macbeth',
    character: 'The Witches',
  },
  {
    quote: 'Full of scorpions is my mind, dear wife',
    source: 'Macbeth',
    character: 'Macbeth',
  },
  {
    quote: "Will all great Neptune's ocean wash this blood clean from my hand?",
    source: 'Macbeth',
    character: 'Macbeth',
  },
  {
    quote: 'Stars, hide your fires; let not light see my black desires',
    source: 'Macbeth',
    character: 'Macbeth',
  },
  {
    quote: 'Unsex me here, and fill me from the crown to the toe',
    source: 'Macbeth',
    character: 'Lady Macbeth',
  },

  // Romeo and Juliet (6)
  {
    quote: 'But soft, what light through yonder window breaks?',
    source: 'Romeo and Juliet',
    character: 'Romeo',
  },
  {
    quote: "A plague o' both your houses!",
    source: 'Romeo and Juliet',
    character: 'Mercutio',
  },
  {
    quote: 'My only love sprung from my only hate',
    source: 'Romeo and Juliet',
    character: 'Juliet',
  },
  {
    quote: 'O Romeo, Romeo, wherefore art thou Romeo?',
    source: 'Romeo and Juliet',
    character: 'Juliet',
  },
  {
    quote: 'These violent delights have violent ends',
    source: 'Romeo and Juliet',
    character: 'Friar Lawrence',
  },
  {
    quote: 'A pair of star-crossed lovers take their life',
    source: 'Romeo and Juliet',
    character: 'Chorus',
  },

  // A Christmas Carol (6)
  {
    quote: 'Are there no prisons? Are there no workhouses?',
    source: 'A Christmas Carol',
    character: 'Scrooge',
  },
  {
    quote: 'I will honour Christmas in my heart',
    source: 'A Christmas Carol',
    character: 'Scrooge',
  },
  {
    quote: 'Bah! Humbug!',
    source: 'A Christmas Carol',
    character: 'Scrooge',
  },
  {
    quote: 'Mankind was my business',
    source: 'A Christmas Carol',
    character: "Marley's Ghost",
  },
  {
    quote: 'I wear the chain I forged in life',
    source: 'A Christmas Carol',
    character: "Marley's Ghost",
  },
  {
    quote: 'A solitary child, neglected by his friends',
    source: 'A Christmas Carol',
  },

  // An Inspector Calls (5)
  {
    quote: 'We are members of one body. We are responsible for each other.',
    source: 'An Inspector Calls',
    character: 'Inspector Goole',
  },
  {
    quote: 'If men will not learn that lesson, they will be taught it in fire',
    source: 'An Inspector Calls',
    character: 'Inspector Goole',
  },
  {
    quote: "The young ones. They're more impressionable.",
    source: 'An Inspector Calls',
    character: 'Inspector Goole',
  },
  {
    quote: "You're not the kind of father a chap could go to",
    source: 'An Inspector Calls',
    character: 'Eric Birling',
  },
  {
    quote: 'Girls of that class',
    source: 'An Inspector Calls',
    character: 'Mrs Birling',
  },

  // Jekyll and Hyde (3)
  {
    quote: 'Man is not truly one, but truly two',
    source: 'The Strange Case of Dr Jekyll and Mr Hyde',
    character: 'Dr Jekyll',
  },
  {
    quote: 'If he be Mr Hyde, I shall be Mr Seek',
    source: 'The Strange Case of Dr Jekyll and Mr Hyde',
    character: 'Mr Utterson',
  },
  {
    quote: "Satan's signature upon a face",
    source: 'The Strange Case of Dr Jekyll and Mr Hyde',
  },

  // Power and Conflict Poetry (14)
  {
    quote: 'The merciless iced east winds that knive us',
    source: 'Exposure',
  },
  {
    quote: 'Bent double, like old beggars under sacks',
    source: 'Dulce et Decorum Est',
  },
  {
    quote: 'Half a league, half a league, half a league onward',
    source: 'The Charge of the Light Brigade',
  },
  {
    quote: 'Nothing beside remains. Round the decay',
    source: 'Ozymandias',
  },
  {
    quote: 'My name is Ozymandias, King of Kings',
    source: 'Ozymandias',
  },
  {
    quote: 'The hand that mocked them and the heart that fed',
    source: 'Ozymandias',
  },
  {
    quote: 'One huge peak, black and huge, as if with voluntary power instinct',
    source: 'The Prelude',
  },
  {
    quote: 'Probably armed, possibly not',
    source: 'Remains',
  },
  {
    quote: 'His bloody life in my bloody hands',
    source: 'Remains',
  },
  {
    quote: 'Theirs not to reason why, theirs but to do and die',
    source: 'The Charge of the Light Brigade',
  },
  {
    quote: 'We are prepared: we build our houses squat',
    source: 'Storm on the Island',
  },
  {
    quote: 'Suddenly he awoke and was running - raw',
    source: 'Bayonet Charge',
  },
  {
    quote: 'Dem tell me bout 1066 and all dat',
    source: 'Checking Out Me History',
  },
  // Love and Relationships Poetry (8)
  {
    quote: "That's my last Duchess painted on the wall",
    source: 'My Last Duchess',
  },
  {
    quote: 'I gave commands; then all smiles stopped together',
    source: 'My Last Duchess',
  },
  {
    quote: 'Somewhere on the other side of this wide night',
    source: 'Sonnet 29',
  },
  {
    quote: 'I am branded by an impression of sunlight',
    source: 'Eden Rock',
  },
  {
    quote: 'I can remember you walking away from me',
    source: 'Walking Away',
  },
  {
    quote: 'How do I love thee? Let me count the ways',
    source: 'Sonnet 43',
  },
  {
    quote: 'She looked at me. She held my gaze in hers',
    source: 'Before You Were Mine',
  },
  {
    quote: 'The clouds had given their all',
    source: 'Winter Swans',
  },
]

// ---------------------------------------------------------------------------
// 40 VocabItem literary devices with real examples from GCSE set texts
// ---------------------------------------------------------------------------
export const VOCAB_ITEMS: VocabItem[] = [
  // --- EASY (10) ---
  {
    term: 'Metaphor',
    definition:
      'A direct comparison between two things without using "like" or "as".',
    example:
      '"Full of scorpions is my mind" -- Macbeth compares his tortured thoughts to scorpions.',
    difficulty: 'easy',
  },
  {
    term: 'Simile',
    definition: 'A comparison between two things using "like" or "as".',
    example:
      '"Bent double, like old beggars under sacks" -- Owen compares soldiers to beggars in Dulce et Decorum Est.',
    difficulty: 'easy',
  },
  {
    term: 'Alliteration',
    definition:
      'The repetition of the same consonant sound at the beginning of nearby words.',
    example:
      '"Fair is foul, and foul is fair" -- repeated "f" sounds in the witches\' chant in Macbeth.',
    difficulty: 'easy',
  },
  {
    term: 'Personification',
    definition:
      'Giving human qualities to non-human things or abstract ideas.',
    example:
      '"The merciless iced east winds that knive us" -- the wind is given cruelty and the ability to stab in Exposure.',
    difficulty: 'easy',
  },
  {
    term: 'Onomatopoeia',
    definition: 'A word that imitates the sound it describes.',
    example:
      '"Stuttering rifles\' rapid rattle" -- "rattle" imitates the sound of gunfire in Dulce et Decorum Est.',
    difficulty: 'easy',
  },
  {
    term: 'Repetition',
    definition:
      'Deliberately using the same word or phrase multiple times for emphasis.',
    example:
      '"Are there no prisons? Are there no workhouses?" -- Scrooge repeats the structure to dismiss the poor.',
    difficulty: 'easy',
  },
  {
    term: 'Symbolism',
    definition:
      'Using an object, person, or event to represent a deeper meaning or idea.',
    example:
      'The chain Marley wears in A Christmas Carol symbolises the burden of greed forged through a lifetime of selfishness.',
    difficulty: 'easy',
  },
  {
    term: 'Irony',
    definition:
      'When the intended meaning is the opposite of what is actually said or expected.',
    example:
      'In An Inspector Calls, Birling declares the Titanic "unsinkable" -- the audience knows it sank.',
    difficulty: 'easy',
  },
  {
    term: 'Foreshadowing',
    definition:
      'Hints or clues about events that will happen later in the narrative.',
    example:
      'The witches\' prophecies in Macbeth foreshadow his rise to power and eventual downfall.',
    difficulty: 'easy',
  },

  // --- MEDIUM (15) ---
  {
    term: 'Pathetic fallacy',
    definition:
      'Using weather or the natural environment to reflect the mood or emotions of characters.',
    example:
      'In Macbeth, the storm on the night of Duncan\'s murder reflects the unnatural chaos of regicide.',
    difficulty: 'medium',
  },
  {
    term: 'Sibilance',
    definition:
      'Repetition of "s" and "sh" sounds, often creating a sinister or soothing effect.',
    example:
      '"Stars, hide your fires; let not light see my black desires" -- the "s" sounds create a secretive tone in Macbeth.',
    difficulty: 'medium',
  },
  {
    term: 'Enjambment',
    definition:
      'When a sentence or phrase runs over from one line of poetry to the next without punctuation.',
    example:
      'In Ozymandias, Shelley uses enjambment to mirror the sprawling, crumbling remains of the statue.',
    difficulty: 'medium',
  },
  {
    term: 'Caesura',
    definition:
      'A pause in the middle of a line of poetry, usually created by punctuation.',
    example:
      '"His bloody life in my bloody hands" -- the pause in Remains creates a jarring break reflecting trauma.',
    difficulty: 'medium',
  },
  {
    term: 'Oxymoron',
    definition:
      'Two contradictory words placed together to create a complex meaning.',
    example:
      '"O brawling love, O loving hate" -- Romeo uses oxymorons to express confusion in Romeo and Juliet.',
    difficulty: 'medium',
  },
  {
    term: 'Juxtaposition',
    definition:
      'Placing two contrasting ideas, images, or characters side by side for effect.',
    example:
      'In A Christmas Carol, the warmth of the Cratchit family is juxtaposed with Scrooge\'s cold isolation.',
    difficulty: 'medium',
  },
  {
    term: 'Dramatic irony',
    definition: 'When the audience knows something that a character does not.',
    example:
      'In An Inspector Calls, the audience knows Birling\'s optimistic predictions about 1940 are catastrophically wrong.',
    difficulty: 'medium',
  },
  {
    term: 'Motif',
    definition:
      'A recurring image, idea, or symbol that develops a theme throughout a text.',
    example:
      'Blood is a motif in Macbeth, representing guilt -- from the daggers to Lady Macbeth\'s obsessive handwashing.',
    difficulty: 'medium',
  },
  {
    term: 'Volta',
    definition:
      'A turn or shift in thought, argument, or emotion in a poem.',
    example:
      'In Ozymandias, the volta shifts from describing the statue to revealing the empty desert surrounding it.',
    difficulty: 'medium',
  },
  {
    term: 'Imperative',
    definition:
      'A command or instruction, often used to show authority or urgency.',
    example:
      '"Unsex me here" -- Lady Macbeth commands the spirits using an imperative, showing her forceful desire for power.',
    difficulty: 'medium',
  },
  {
    term: 'Soliloquy',
    definition:
      'A speech in a play where a character speaks their thoughts aloud, alone on stage.',
    example:
      'Macbeth\'s "Is this a dagger" soliloquy reveals his inner turmoil before murdering Duncan.',
    difficulty: 'medium',
  },
  {
    term: 'Aside',
    definition:
      'A remark made by a character intended for the audience but not heard by other characters.',
    example:
      'In Macbeth, asides reveal his true ambition while he appears loyal to those around him.',
    difficulty: 'medium',
  },
  {
    term: 'Allegory',
    definition:
      'A narrative in which characters and events represent abstract ideas or moral qualities.',
    example:
      'A Christmas Carol is an allegory for Victorian social reform and the possibility of personal redemption.',
    difficulty: 'medium',
  },
  {
    term: 'Monologue',
    definition:
      'A long speech by one character, addressed to others on stage or in the text.',
    example:
      'Inspector Goole\'s final speech is a monologue warning the Birlings about social responsibility.',
    difficulty: 'medium',
  },
  {
    term: 'Stanza',
    definition:
      'A grouped set of lines in a poem, separated from other groups by a space.',
    example:
      'Each stanza in Exposure by Wilfred Owen represents a different phase of suffering in the trenches.',
    difficulty: 'medium',
  },

  // --- HARD (15) ---
  {
    term: 'Hubris',
    definition:
      "Excessive pride or arrogance that leads to a character's downfall.",
    example:
      "Macbeth's hubris is shown when he believes he is invincible after the witches' second prophecies.",
    difficulty: 'hard',
  },
  {
    term: 'Hamartia',
    definition:
      'A fatal flaw in a tragic hero that leads to their downfall.',
    example:
      'Macbeth\'s hamartia is his "vaulting ambition" which drives him to murder and tyranny.',
    difficulty: 'hard',
  },
  {
    term: 'Anagnorisis',
    definition:
      'The moment a tragic hero recognises their own error or true situation.',
    example:
      'Macbeth experiences anagnorisis when he realises the witches deceived him with equivocal prophecies.',
    difficulty: 'hard',
  },
  {
    term: 'Peripeteia',
    definition:
      'A sudden reversal of fortune or circumstances, especially in tragedy.',
    example:
      "In Macbeth, peripeteia occurs when Macduff reveals he was not naturally born, shattering Macbeth's confidence.",
    difficulty: 'hard',
  },
  {
    term: 'Catharsis',
    definition:
      'The emotional release or purging of feelings experienced by the audience at the end of a tragedy.',
    example:
      'The audience experiences catharsis at the end of Romeo and Juliet as the feuding families finally reconcile.',
    difficulty: 'hard',
  },
  {
    term: 'Semantic field',
    definition:
      'A group of words within a text that relate to the same subject or concept.',
    example:
      'In Macbeth, a semantic field of darkness pervades the play: "night," "black," "shadow," "hell."',
    difficulty: 'hard',
  },
  {
    term: 'Plosive',
    definition:
      'A harsh consonant sound (b, d, g, k, p, t) used to create an aggressive or forceful tone.',
    example:
      '"Probably armed, possibly not" -- the repeated plosive "p" in Remains conveys the blunt brutality of conflict.',
    difficulty: 'hard',
  },
  {
    term: 'Fricative',
    definition:
      'A consonant sound (f, v, s, z, th) produced by friction, often creating unease.',
    example:
      '"Fair is foul, and foul is fair" -- the repeated fricative "f" gives the witches\' chant an eerie quality.',
    difficulty: 'hard',
  },
  {
    term: 'Anachronism',
    definition:
      'Something placed in the wrong time period, used deliberately for effect.',
    example:
      "Priestley set An Inspector Calls in 1912 but wrote it in 1945, making Birling's predictions deliberate anachronistic irony.",
    difficulty: 'hard',
  },
  {
    term: 'In medias res',
    definition:
      'Starting a narrative in the middle of the action rather than at the beginning.',
    example:
      "Bayonet Charge by Ted Hughes begins in medias res -- the soldier is already running across no-man's-land.",
    difficulty: 'hard',
  },
  {
    term: 'Bathos',
    definition:
      'An abrupt shift from a serious or elevated tone to something trivial or absurd.',
    example:
      "In An Inspector Calls, Birling's pompous speech is undercut by the Inspector's arrival -- a form of bathos.",
    difficulty: 'hard',
  },
  {
    term: 'Antithesis',
    definition:
      'The deliberate contrast of opposing ideas in balanced phrases or sentences.',
    example:
      '"Fair is foul, and foul is fair" -- the witches use antithesis to invert moral order in Macbeth.',
    difficulty: 'hard',
  },
  {
    term: 'Epistrophe',
    definition:
      'Repetition of a word or phrase at the end of successive clauses or sentences.',
    example:
      'Inspector Goole repeats "responsible" at the end of statements to emphasise social accountability.',
    difficulty: 'hard',
  },
  {
    term: 'Free verse',
    definition:
      'Poetry that does not follow a regular metre or rhyme scheme.',
    example:
      'Remains by Simon Armitage is written in free verse, mirroring the unstructured way a soldier recounts events.',
    difficulty: 'hard',
  },
  {
    term: 'Bildungsroman',
    definition:
      "A novel that follows a character's growth and moral development from youth to adulthood.",
    example:
      "Great Expectations is a bildungsroman -- useful context for understanding Scrooge's moral arc in A Christmas Carol.",
    difficulty: 'hard',
  },
]
