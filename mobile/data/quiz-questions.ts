// ---------------------------------------------------------------------------
// GCSE English Literature & Language Quiz Bank
// 205 questions: poetry(40), characters(40), devices(35), context(30),
//                quotes(30), language(20), writing(10)
// ---------------------------------------------------------------------------

export type QuizQuestion = {
  id: string
  text: string
  options: [string, string, string, string]
  correctIndex: number // 0-3
  topic: 'poetry' | 'characters' | 'devices' | 'context' | 'quotes' | 'language' | 'writing'
  difficulty: 'easy' | 'medium' | 'hard'
  explanation: string // brief explanation of correct answer
}

export const quizQuestions: QuizQuestion[] = [
  // ==========================================================================
  // POETRY KNOWLEDGE (20 questions)
  // ==========================================================================
  {
    id: 'poetry-001',
    text: "Who wrote 'Ozymandias'?",
    options: ['William Blake', 'Percy Bysshe Shelley', 'John Keats', 'Lord Byron'],
    correctIndex: 1,
    topic: 'poetry',
    difficulty: 'easy',
    explanation:
      "Percy Bysshe Shelley wrote 'Ozymandias', a sonnet about the ruined statue of the pharaoh Ramesses II.",
  },
  {
    id: 'poetry-002',
    text: "Which poetry anthology contains 'Bayonet Charge'?",
    options: [
      'Love and Relationships',
      'Power and Conflict',
      'Time and Place',
      'Identity and Belonging',
    ],
    correctIndex: 1,
    topic: 'poetry',
    difficulty: 'easy',
    explanation:
      "'Bayonet Charge' by Ted Hughes is part of the AQA Power and Conflict poetry anthology.",
  },
  {
    id: 'poetry-003',
    text: "What form is 'Ozymandias' written in?",
    options: ['Free verse', 'Sonnet', 'Ballad', 'Ode'],
    correctIndex: 1,
    topic: 'poetry',
    difficulty: 'medium',
    explanation:
      "'Ozymandias' is a sonnet, though its rhyme scheme does not follow a strict Petrarchan or Shakespearean pattern.",
  },
  {
    id: 'poetry-004',
    text: "Who wrote 'The Charge of the Light Brigade'?",
    options: [
      'Wilfred Owen',
      'Alfred Lord Tennyson',
      'Siegfried Sassoon',
      'Robert Browning',
    ],
    correctIndex: 1,
    topic: 'poetry',
    difficulty: 'easy',
    explanation:
      "Alfred Lord Tennyson wrote 'The Charge of the Light Brigade' about the disastrous cavalry charge at the Battle of Balaclava in 1854.",
  },
  {
    id: 'poetry-005',
    text: "In 'London' by William Blake, what does the speaker observe in every face?",
    options: [
      'Marks of weakness, marks of woe',
      'Signs of hope and joy',
      'Anger and rebellion',
      'Fear and confusion',
    ],
    correctIndex: 0,
    topic: 'poetry',
    difficulty: 'medium',
    explanation:
      "Blake writes 'marks of weakness, marks of woe' to convey the suffering of London's inhabitants.",
  },
  {
    id: 'poetry-006',
    text: "Which poem begins 'I wandered lonely as a cloud'?",
    options: ['The Prelude', 'Daffodils', 'London', 'Storm on the Island'],
    correctIndex: 1,
    topic: 'poetry',
    difficulty: 'easy',
    explanation:
      "'Daffodils' (also known as 'I Wandered Lonely as a Cloud') was written by William Wordsworth.",
  },
  {
    id: 'poetry-007',
    text: "Who wrote 'Exposure', a poem about soldiers suffering in World War One?",
    options: ['Siegfried Sassoon', 'Ted Hughes', 'Wilfred Owen', 'Rupert Brooke'],
    correctIndex: 2,
    topic: 'poetry',
    difficulty: 'easy',
    explanation:
      "Wilfred Owen wrote 'Exposure' about the suffering of soldiers from the cold and weather during WWI.",
  },
  {
    id: 'poetry-008',
    text: "What is the main theme of 'Remains' by Simon Armitage?",
    options: [
      'The beauty of nature',
      'The guilt and trauma of a soldier who killed a looter',
      'A love affair ending',
      'The power of a king',
    ],
    correctIndex: 1,
    topic: 'poetry',
    difficulty: 'medium',
    explanation:
      "'Remains' explores the psychological trauma and guilt of a soldier haunted by having shot a looter in Iraq.",
  },
  {
    id: 'poetry-009',
    text: "Which poet wrote 'Checking Out Me History'?",
    options: ['John Agard', 'Grace Nichols', 'Benjamin Zephaniah', 'Imtiaz Dharker'],
    correctIndex: 0,
    topic: 'poetry',
    difficulty: 'medium',
    explanation:
      "John Agard wrote 'Checking Out Me History', which challenges the Eurocentric history taught in British schools.",
  },
  {
    id: 'poetry-010',
    text: "What is the setting of 'Storm on the Island' by Seamus Heaney?",
    options: [
      'A city in England',
      'A remote island community',
      'A battlefield in France',
      'A London street',
    ],
    correctIndex: 1,
    topic: 'poetry',
    difficulty: 'medium',
    explanation:
      "'Storm on the Island' describes a remote island community preparing for and enduring a violent storm.",
  },
  {
    id: 'poetry-011',
    text: "In 'My Last Duchess' by Robert Browning, who is speaking?",
    options: ['The duchess herself', 'A servant', 'The Duke of Ferrara', 'A priest'],
    correctIndex: 2,
    topic: 'poetry',
    difficulty: 'medium',
    explanation:
      "'My Last Duchess' is a dramatic monologue spoken by the Duke of Ferrara, who reveals how he had his wife silenced.",
  },
  {
    id: 'poetry-012',
    text: "Who wrote 'War Photographer'?",
    options: ['Simon Armitage', 'Carol Ann Duffy', 'Wilfred Owen', 'Imtiaz Dharker'],
    correctIndex: 1,
    topic: 'poetry',
    difficulty: 'easy',
    explanation:
      "Carol Ann Duffy wrote 'War Photographer', exploring the tension between documenting war and living safely at home.",
  },
  {
    id: 'poetry-013',
    text: "What does 'Kamikaze' by Beatrice Garland explore?",
    options: [
      'The glory of war',
      "A pilot who turned back from a kamikaze mission and the family's reaction",
      'A love story set in Japan',
      'A natural disaster in the Pacific',
    ],
    correctIndex: 1,
    topic: 'poetry',
    difficulty: 'hard',
    explanation:
      "'Kamikaze' tells of a Japanese pilot who turned back from a suicide mission and was subsequently shunned by his family.",
  },
  {
    id: 'poetry-014',
    text: "Which Power and Conflict poem hides the word 'Stormont' in its title?",
    options: ['Exposure', 'Storm on the Island', 'Bayonet Charge', 'The Emigree'],
    correctIndex: 1,
    topic: 'poetry',
    difficulty: 'hard',
    explanation:
      "'Storm on the Island' contains the hidden word 'Stormont', linking the poem to the political conflict in Northern Ireland.",
  },
  {
    id: 'poetry-015',
    text: "In 'Tissue' by Imtiaz Dharker, what does paper symbolise?",
    options: [
      'Wealth and greed',
      'The fragility and power of human life',
      'Military power',
      'Religious devotion only',
    ],
    correctIndex: 1,
    topic: 'poetry',
    difficulty: 'hard',
    explanation:
      "'Tissue' uses paper as a symbol for the fragility and transience of human life and the structures we build.",
  },
  {
    id: 'poetry-016',
    text: "Which anthology does 'Love's Philosophy' by Shelley belong to?",
    options: ['Power and Conflict', 'Love and Relationships', 'War Poetry', 'Romantic Verse'],
    correctIndex: 1,
    topic: 'poetry',
    difficulty: 'easy',
    explanation:
      "'Love's Philosophy' is in the AQA Love and Relationships poetry anthology.",
  },
  {
    id: 'poetry-017',
    text: "What poetic form is 'My Last Duchess' written in?",
    options: [
      'Sonnet',
      'Dramatic monologue in rhyming couplets',
      'Free verse',
      'Villanelle',
    ],
    correctIndex: 1,
    topic: 'poetry',
    difficulty: 'hard',
    explanation:
      "'My Last Duchess' is a dramatic monologue written in iambic pentameter with rhyming couplets.",
  },
  {
    id: 'poetry-018',
    text: "Who wrote 'Poppies'?",
    options: ['Jane Weir', 'Carol Ann Duffy', 'Imtiaz Dharker', 'Beatrice Garland'],
    correctIndex: 0,
    topic: 'poetry',
    difficulty: 'medium',
    explanation:
      "Jane Weir wrote 'Poppies', exploring a mother's grief and anxiety as her son leaves for war.",
  },
  {
    id: 'poetry-019',
    text: "What is the central theme of 'The Prelude' extract by Wordsworth?",
    options: [
      'Urban poverty',
      "Nature's power and its effect on the individual",
      'War and conflict',
      'Romantic love',
    ],
    correctIndex: 1,
    topic: 'poetry',
    difficulty: 'medium',
    explanation:
      "The Prelude extract describes a boy stealing a boat and being overwhelmed by nature's sublime power.",
  },
  {
    id: 'poetry-020',
    text: "In 'Exposure' by Wilfred Owen, what is presented as more deadly than the enemy?",
    options: ['Disease', 'The freezing weather', 'Hunger', 'Boredom'],
    correctIndex: 1,
    topic: 'poetry',
    difficulty: 'medium',
    explanation:
      "In 'Exposure', Owen presents the extreme cold as more dangerous to the soldiers than enemy fire.",
  },

  // ==========================================================================
  // CHARACTER KNOWLEDGE (20 questions)
  // ==========================================================================
  {
    id: 'characters-001',
    text: "In Macbeth, who says 'Out, damned spot! Out, I say!'?",
    options: ['Macbeth', 'Lady Macbeth', 'The Porter', 'Banquo'],
    correctIndex: 1,
    topic: 'characters',
    difficulty: 'easy',
    explanation:
      'Lady Macbeth says this while sleepwalking, tormented by guilt over the murders she helped orchestrate.',
  },
  {
    id: 'characters-002',
    text: 'Who is the narrator of A Christmas Carol?',
    options: [
      'Ebenezer Scrooge',
      'Bob Cratchit',
      'An omniscient third-person narrator',
      'Tiny Tim',
    ],
    correctIndex: 2,
    topic: 'characters',
    difficulty: 'easy',
    explanation:
      'A Christmas Carol is told by an omniscient third-person narrator who speaks directly to the reader.',
  },
  {
    id: 'characters-003',
    text: 'In An Inspector Calls, who is Inspector Goole investigating the death of?',
    options: ['Sheila Birling', 'Eva Smith', 'Mrs Birling', 'Gerald Croft'],
    correctIndex: 1,
    topic: 'characters',
    difficulty: 'easy',
    explanation:
      'Inspector Goole investigates the death of Eva Smith (also known as Daisy Renton).',
  },
  {
    id: 'characters-004',
    text: 'In Macbeth, who kills Macbeth in the final battle?',
    options: ['Malcolm', 'Macduff', 'Banquo', 'Ross'],
    correctIndex: 1,
    topic: 'characters',
    difficulty: 'easy',
    explanation:
      "Macduff kills Macbeth, fulfilling the witches' prophecy, as Macduff was born by Caesarean section.",
  },
  {
    id: 'characters-005',
    text: 'In Jekyll and Hyde, what is the name of the lawyer who investigates Hyde?',
    options: ['Dr Lanyon', 'Mr Enfield', 'Mr Utterson', 'Mr Poole'],
    correctIndex: 2,
    topic: 'characters',
    difficulty: 'medium',
    explanation:
      'Mr Utterson is the lawyer and friend of Jekyll who investigates the mysterious Mr Hyde throughout the novella.',
  },
  {
    id: 'characters-006',
    text: 'In A Christmas Carol, which ghost shows Scrooge his own grave?',
    options: [
      'Ghost of Christmas Past',
      'Ghost of Christmas Present',
      'Ghost of Christmas Yet to Come',
      'Jacob Marley',
    ],
    correctIndex: 2,
    topic: 'characters',
    difficulty: 'easy',
    explanation:
      'The Ghost of Christmas Yet to Come (the third spirit) shows Scrooge his neglected grave.',
  },
  {
    id: 'characters-007',
    text: 'In An Inspector Calls, which character accepts responsibility most willingly?',
    options: ['Mr Birling', 'Mrs Birling', 'Sheila Birling', 'Gerald Croft'],
    correctIndex: 2,
    topic: 'characters',
    difficulty: 'medium',
    explanation:
      "Sheila is the most receptive to the Inspector's message and genuinely accepts her responsibility for Eva Smith's death.",
  },
  {
    id: 'characters-008',
    text: 'In Macbeth, what title does Macbeth hold at the start of the play?',
    options: [
      'Thane of Cawdor',
      'Thane of Glamis',
      'King of Scotland',
      'Duke of Albany',
    ],
    correctIndex: 1,
    topic: 'characters',
    difficulty: 'medium',
    explanation:
      "At the start, Macbeth is the Thane of Glamis. He is then given the title Thane of Cawdor after the previous thane's treachery.",
  },
  {
    id: 'characters-009',
    text: 'In Romeo and Juliet, who gives Romeo the poison?',
    options: ['Friar Lawrence', 'The Apothecary', 'Benvolio', 'Balthasar'],
    correctIndex: 1,
    topic: 'characters',
    difficulty: 'medium',
    explanation:
      'A poor Apothecary in Mantua sells Romeo the poison, despite it being illegal, because he desperately needs the money.',
  },
  {
    id: 'characters-010',
    text: "In Jekyll and Hyde, what happens to Dr Lanyon after witnessing Hyde's transformation?",
    options: [
      'He goes mad',
      'He dies from the shock',
      'He becomes Hyde himself',
      'He flees London',
    ],
    correctIndex: 1,
    topic: 'characters',
    difficulty: 'hard',
    explanation:
      'Dr Lanyon is so shocked by witnessing the transformation that he falls ill and dies shortly afterward.',
  },
  {
    id: 'characters-011',
    text: "In A Christmas Carol, what is Tiny Tim's father's name?",
    options: ['Fred', 'Bob Cratchit', 'Jacob Marley', 'Mr Fezziwig'],
    correctIndex: 1,
    topic: 'characters',
    difficulty: 'easy',
    explanation:
      "Bob Cratchit is Scrooge's underpaid clerk and Tiny Tim's devoted father.",
  },
  {
    id: 'characters-012',
    text: 'In Macbeth, which character warns that the witches are "instruments of darkness"?',
    options: ['Macbeth', 'Banquo', 'Malcolm', 'Macduff'],
    correctIndex: 1,
    topic: 'characters',
    difficulty: 'hard',
    explanation:
      'Banquo warns Macbeth that the witches may tell truths to lead people to destruction.',
  },
  {
    id: 'characters-013',
    text: 'In An Inspector Calls, what did Mr Birling do to Eva Smith?',
    options: [
      'He refused her charity',
      'He sacked her for leading a strike for higher wages',
      'He ended a romantic relationship with her',
      'He reported her to the police',
    ],
    correctIndex: 1,
    topic: 'characters',
    difficulty: 'medium',
    explanation:
      'Mr Birling fired Eva Smith from his factory because she was one of the leaders of a strike demanding higher wages.',
  },
  {
    id: 'characters-014',
    text: 'In Romeo and Juliet, who is the first character to die?',
    options: ['Romeo', 'Tybalt', 'Mercutio', 'Paris'],
    correctIndex: 2,
    topic: 'characters',
    difficulty: 'medium',
    explanation:
      "Mercutio is killed by Tybalt during a street fight, prompting Romeo's revenge killing of Tybalt.",
  },
  {
    id: 'characters-015',
    text: "In Jekyll and Hyde, what is significant about the door Mr Enfield describes?",
    options: [
      'It leads to a church',
      "It is the back entrance to Jekyll's laboratory",
      'It is the entrance to a hospital',
      'It leads to the police station',
    ],
    correctIndex: 1,
    topic: 'characters',
    difficulty: 'hard',
    explanation:
      "The sinister door described by Enfield is actually the back entrance to Dr Jekyll's laboratory, used by Hyde.",
  },
  {
    id: 'characters-016',
    text: "Who was Scrooge's deceased business partner in A Christmas Carol?",
    options: ['Bob Cratchit', 'Mr Fezziwig', 'Jacob Marley', 'Fred'],
    correctIndex: 2,
    topic: 'characters',
    difficulty: 'easy',
    explanation:
      "Jacob Marley was Scrooge's deceased business partner whose ghost visits to warn Scrooge to change his ways.",
  },
  {
    id: 'characters-017',
    text: 'In Macbeth, which character flees to England to raise an army against Macbeth?',
    options: ['Banquo', 'Macduff', 'Malcolm', 'Ross'],
    correctIndex: 2,
    topic: 'characters',
    difficulty: 'medium',
    explanation:
      "Malcolm, Duncan's son, flees to England and later returns with an army to overthrow Macbeth.",
  },
  {
    id: 'characters-018',
    text: "In An Inspector Calls, what is Gerald Croft's connection to Eva Smith?",
    options: [
      'He was her employer',
      'He had an affair with her',
      'He was her landlord',
      'He refused her a loan',
    ],
    correctIndex: 1,
    topic: 'characters',
    difficulty: 'medium',
    explanation:
      'Gerald had an affair with Eva Smith (whom he knew as Daisy Renton) and then ended the relationship.',
  },
  {
    id: 'characters-019',
    text: 'In Macbeth, who discovers King Duncan has been murdered?',
    options: ['Macbeth', 'Banquo', 'Macduff', 'Malcolm'],
    correctIndex: 2,
    topic: 'characters',
    difficulty: 'medium',
    explanation:
      "Macduff discovers Duncan's murdered body when he arrives to wake the king in the morning.",
  },
  {
    id: 'characters-020',
    text: "In A Christmas Carol, which character represents Scrooge's lost love?",
    options: ['Fan', 'Belle', 'Martha', 'Mrs Cratchit'],
    correctIndex: 1,
    topic: 'characters',
    difficulty: 'hard',
    explanation:
      "Belle is Scrooge's former fiancee who broke off their engagement because Scrooge loved money more than her.",
  },

  // ==========================================================================
  // LITERARY DEVICES (20 questions)
  // ==========================================================================
  {
    id: 'devices-001',
    text: "What literary device is used in 'the wind whispered through the trees'?",
    options: ['Metaphor', 'Personification', 'Simile', 'Alliteration'],
    correctIndex: 1,
    topic: 'devices',
    difficulty: 'easy',
    explanation:
      "This is personification because the wind is given the human quality of 'whispering'.",
  },
  {
    id: 'devices-002',
    text: 'What is an oxymoron?',
    options: [
      'A comparison using like or as',
      'Repetition at the start of lines',
      'Two contradictory words placed together',
      'Exaggeration for effect',
    ],
    correctIndex: 2,
    topic: 'devices',
    difficulty: 'easy',
    explanation:
      "An oxymoron combines two contradictory terms, such as 'bittersweet' or 'living death'.",
  },
  {
    id: 'devices-003',
    text: "Which literary device is used in 'She is as fierce as a lion'?",
    options: ['Metaphor', 'Simile', 'Hyperbole', 'Personification'],
    correctIndex: 1,
    topic: 'devices',
    difficulty: 'easy',
    explanation:
      "This is a simile because it uses 'as' to make a comparison between the subject and a lion.",
  },
  {
    id: 'devices-004',
    text: "What device is used in 'Peter Piper picked a peck of pickled peppers'?",
    options: ['Assonance', 'Onomatopoeia', 'Alliteration', 'Sibilance'],
    correctIndex: 2,
    topic: 'devices',
    difficulty: 'easy',
    explanation:
      "This is alliteration: the repetition of the 'p' consonant sound at the beginning of successive words.",
  },
  {
    id: 'devices-005',
    text: 'What is a dramatic monologue?',
    options: [
      'A conversation between two characters',
      'A poem where a single character speaks to a silent listener, revealing their personality',
      'A narrative poem telling a story',
      'A soliloquy where the character speaks private thoughts to the audience',
    ],
    correctIndex: 1,
    topic: 'devices',
    difficulty: 'medium',
    explanation:
      'A dramatic monologue is a poem where a single speaker addresses a silent listener, often revealing more about themselves than they intend.',
  },
  {
    id: 'devices-006',
    text: "What literary device is 'All the world's a stage' an example of?",
    options: ['Simile', 'Metaphor', 'Personification', 'Hyperbole'],
    correctIndex: 1,
    topic: 'devices',
    difficulty: 'easy',
    explanation:
      "This is a metaphor because it directly states the world IS a stage, without using 'like' or 'as'.",
  },
  {
    id: 'devices-007',
    text: "What is the term for words like 'buzz', 'crash', and 'hiss'?",
    options: ['Alliteration', 'Onomatopoeia', 'Assonance', 'Consonance'],
    correctIndex: 1,
    topic: 'devices',
    difficulty: 'easy',
    explanation:
      'Onomatopoeia refers to words that phonetically imitate the sound they describe.',
  },
  {
    id: 'devices-008',
    text: 'What is enjambment?',
    options: [
      'When a line of poetry ends with a full stop',
      'When a sentence runs over from one line to the next without punctuation',
      'The repetition of vowel sounds',
      'A pause in the middle of a line of poetry',
    ],
    correctIndex: 1,
    topic: 'devices',
    difficulty: 'medium',
    explanation:
      'Enjambment occurs when a sentence continues from one line of poetry to the next without a pause or punctuation at the end of the line.',
  },
  {
    id: 'devices-009',
    text: 'What is a caesura?',
    options: [
      'A poem with fourteen lines',
      'A pause or break in the middle of a line of poetry',
      'The repetition of consonant sounds',
      'A type of rhyme scheme',
    ],
    correctIndex: 1,
    topic: 'devices',
    difficulty: 'medium',
    explanation:
      'A caesura is a pause near the middle of a line of poetry, often indicated by punctuation such as a comma, full stop, or dash.',
  },
  {
    id: 'devices-010',
    text: 'What is anaphora?',
    options: [
      'A comparison without using like or as',
      'Repetition of a word or phrase at the start of successive clauses or lines',
      'A contradiction in terms',
      'Addressing something that is not present',
    ],
    correctIndex: 1,
    topic: 'devices',
    difficulty: 'hard',
    explanation:
      'Anaphora is the deliberate repetition of a word or phrase at the beginning of successive lines or clauses for emphasis.',
  },
  {
    id: 'devices-011',
    text: "What is the effect of sibilance, such as 'the snake slithered silently'?",
    options: [
      'It creates a harsh, aggressive tone',
      'It creates a soft, hissing, or sinister sound',
      'It speeds up the rhythm',
      'It creates a sense of happiness',
    ],
    correctIndex: 1,
    topic: 'devices',
    difficulty: 'medium',
    explanation:
      "Sibilance (repetition of 's' sounds) often creates a soft, hissing effect that can suggest menace, secrecy, or smoothness.",
  },
  {
    id: 'devices-012',
    text: "What does 'in medias res' mean?",
    options: [
      'A type of rhyme scheme',
      'Starting a narrative in the middle of the action',
      'A form of dramatic irony',
      'Addressing the reader directly',
    ],
    correctIndex: 1,
    topic: 'devices',
    difficulty: 'hard',
    explanation:
      "'In medias res' is a Latin term meaning 'in the middle of things' and refers to starting a story in the middle of the action.",
  },
  {
    id: 'devices-013',
    text: 'What is dramatic irony?',
    options: [
      'When a character says the opposite of what they mean',
      'When the audience knows something a character does not',
      'When an event turns out differently than expected',
      'When a character mocks another character',
    ],
    correctIndex: 1,
    topic: 'devices',
    difficulty: 'medium',
    explanation:
      'Dramatic irony occurs when the audience knows something that the characters on stage do not, creating tension or humour.',
  },
  {
    id: 'devices-014',
    text: 'What is a soliloquy?',
    options: [
      'A speech addressed to another character',
      'A conversation between two characters',
      'A speech where a character speaks their thoughts aloud while alone on stage',
      'A song performed in a play',
    ],
    correctIndex: 2,
    topic: 'devices',
    difficulty: 'medium',
    explanation:
      'A soliloquy is a speech in which a character, alone on stage, reveals their private thoughts and feelings to the audience.',
  },
  {
    id: 'devices-015',
    text: 'What is foreshadowing?',
    options: [
      'A flashback to earlier events',
      'Hints or clues about what will happen later in the narrative',
      'The climax of the story',
      'A surprise twist ending',
    ],
    correctIndex: 1,
    topic: 'devices',
    difficulty: 'easy',
    explanation:
      'Foreshadowing is planting hints or clues early in a text about what will happen later, building tension and anticipation.',
  },
  {
    id: 'devices-016',
    text: "What is the term for a recurring image throughout a text, such as blood in 'Macbeth'?",
    options: ['Symbol', 'Motif', 'Theme', 'Allegory'],
    correctIndex: 1,
    topic: 'devices',
    difficulty: 'medium',
    explanation:
      'A motif is a recurring element (image, idea, or symbol) that develops or reinforces the themes of a text.',
  },
  {
    id: 'devices-017',
    text: 'What is the volta in a sonnet?',
    options: [
      'The last two lines',
      'The turn or shift in argument or mood',
      'The opening line',
      'The rhyme scheme',
    ],
    correctIndex: 1,
    topic: 'devices',
    difficulty: 'hard',
    explanation:
      "The volta (Italian for 'turn') is the point in a sonnet where the argument or mood shifts.",
  },
  {
    id: 'devices-018',
    text: 'What is juxtaposition?',
    options: [
      'Exaggeration for dramatic effect',
      'Placing two contrasting ideas or images close together for comparison',
      'Giving human qualities to non-human things',
      'A direct address to someone absent',
    ],
    correctIndex: 1,
    topic: 'devices',
    difficulty: 'medium',
    explanation:
      'Juxtaposition is placing two contrasting elements side by side to highlight their differences or create meaning.',
  },
  {
    id: 'devices-019',
    text: 'What is an allegory?',
    options: [
      'A poem with fourteen lines',
      'A story with a hidden moral or political meaning',
      'A type of rhyme',
      'A character who represents evil',
    ],
    correctIndex: 1,
    topic: 'devices',
    difficulty: 'hard',
    explanation:
      'An allegory is a narrative where characters and events represent abstract ideas or moral concepts, conveying a deeper meaning.',
  },
  {
    id: 'devices-020',
    text: 'What is the difference between a metaphor and a simile?',
    options: [
      'There is no difference',
      "A metaphor uses 'like' or 'as'; a simile does not",
      "A simile uses 'like' or 'as'; a metaphor states something IS something else",
      'A simile is always longer than a metaphor',
    ],
    correctIndex: 2,
    topic: 'devices',
    difficulty: 'easy',
    explanation:
      "A simile makes a comparison using 'like' or 'as', while a metaphor states something IS something else directly.",
  },

  // ==========================================================================
  // CONTEXT & HISTORY (15 questions)
  // ==========================================================================
  {
    id: 'context-001',
    text: 'When was An Inspector Calls written, and when is it set?',
    options: [
      'Written in 1912, set in 1945',
      'Written in 1945, set in 1912',
      'Written and set in 1945',
      'Written and set in 1912',
    ],
    correctIndex: 1,
    topic: 'context',
    difficulty: 'medium',
    explanation:
      'J.B. Priestley wrote An Inspector Calls in 1945 but set it in 1912, before two World Wars, to show how wrong complacent attitudes were.',
  },
  {
    id: 'context-002',
    text: 'What was the social context of Jekyll and Hyde?',
    options: [
      'The Industrial Revolution and child labour',
      'Victorian repression, duality, and fear of scientific progress',
      'World War One and its aftermath',
      'The Great Depression',
    ],
    correctIndex: 1,
    topic: 'context',
    difficulty: 'medium',
    explanation:
      'Jekyll and Hyde (1886) reflects Victorian anxieties about respectability, duality, and concerns about science overstepping moral boundaries.',
  },
  {
    id: 'context-003',
    text: 'In what year was Macbeth likely first performed?',
    options: ['1590', '1606', '1623', '1616'],
    correctIndex: 1,
    topic: 'context',
    difficulty: 'medium',
    explanation:
      'Macbeth was likely first performed around 1606, shortly after the Gunpowder Plot of 1605, for King James I.',
  },
  {
    id: 'context-004',
    text: 'Why did Shakespeare include witches in Macbeth?',
    options: [
      'Just for entertainment',
      'To appeal to King James I, who had a strong interest in witchcraft',
      'They were based on real historical figures',
      'To represent the Catholic Church',
    ],
    correctIndex: 1,
    topic: 'context',
    difficulty: 'medium',
    explanation:
      "King James I wrote 'Daemonologie' about witchcraft and was fascinated by the supernatural, making the witches politically relevant.",
  },
  {
    id: 'context-005',
    text: 'What concept does Priestley promote through An Inspector Calls?',
    options: [
      'Capitalism and free enterprise',
      'Social responsibility and socialism',
      'Religious devotion',
      'Imperialism',
    ],
    correctIndex: 1,
    topic: 'context',
    difficulty: 'easy',
    explanation:
      'Priestley was a socialist and used An Inspector Calls to promote the idea that we all have a responsibility to each other.',
  },
  {
    id: 'context-006',
    text: 'What was the Great Chain of Being, and why is it relevant to Macbeth?',
    options: [
      'A piece of armour worn by kings',
      'A Jacobean belief in a divinely ordered hierarchy, which Macbeth disrupts by killing the king',
      'A chain of castles across Scotland',
      'A scientific theory about evolution',
    ],
    correctIndex: 1,
    topic: 'context',
    difficulty: 'hard',
    explanation:
      "The Great Chain of Being held that God ordained a natural hierarchy. Macbeth's regicide breaks this chain, causing chaos.",
  },
  {
    id: 'context-007',
    text: "What was Dickens's purpose in writing A Christmas Carol?",
    options: [
      'To entertain the royal court',
      'To highlight the plight of the poor and criticise the greed of the wealthy',
      'To promote Christianity',
      'To write a horror story',
    ],
    correctIndex: 1,
    topic: 'context',
    difficulty: 'easy',
    explanation:
      'Dickens wrote A Christmas Carol (1843) to draw attention to poverty and social inequality in Victorian England.',
  },
  {
    id: 'context-008',
    text: 'What were the Poor Laws, and how do they relate to A Christmas Carol?',
    options: [
      'Laws protecting the poor, which Scrooge supports',
      'Laws that forced the poor into workhouses, which Scrooge references approvingly',
      'Laws abolishing slavery',
      'Laws granting voting rights to the poor',
    ],
    correctIndex: 1,
    topic: 'context',
    difficulty: 'hard',
    explanation:
      "The Poor Laws forced the destitute into workhouses. Scrooge's approval of prisons and workhouses reflects the callous attitudes Dickens criticised.",
  },
  {
    id: 'context-009',
    text: "What historical event is the background to 'The Charge of the Light Brigade'?",
    options: [
      'The Battle of Waterloo',
      'The Battle of Balaclava during the Crimean War',
      'The Battle of the Somme',
      'The Battle of Hastings',
    ],
    correctIndex: 1,
    topic: 'context',
    difficulty: 'medium',
    explanation:
      "Tennyson's poem describes the disastrous cavalry charge at the Battle of Balaclava (1854) during the Crimean War.",
  },
  {
    id: 'context-010',
    text: 'What was the role of women in Elizabethan society, as relevant to Romeo and Juliet?',
    options: [
      'Women had equal rights to men',
      'Women were expected to obey their fathers and husbands and had little independence',
      'Women could choose their own husbands freely',
      'Women commonly held political office',
    ],
    correctIndex: 1,
    topic: 'context',
    difficulty: 'medium',
    explanation:
      "In Elizabethan society, women were expected to obey male authority figures. Juliet's defiance would have shocked audiences.",
  },
  {
    id: 'context-011',
    text: 'What was the Gunpowder Plot and why is it relevant to Macbeth?',
    options: [
      'A plan to invade France that inspired the battle scenes',
      'A failed attempt to blow up Parliament in 1605, reinforcing themes of treason and regicide',
      'A plot by Scottish nobles that Shakespeare witnessed',
      'A fictional event within the play itself',
    ],
    correctIndex: 1,
    topic: 'context',
    difficulty: 'hard',
    explanation:
      "The Gunpowder Plot (1605) was a failed attempt to kill James I. Macbeth's regicide would have resonated with audiences shortly after.",
  },
  {
    id: 'context-012',
    text: 'What social class does the Birling family belong to in An Inspector Calls?',
    options: [
      'Working class',
      'Upper middle class / nouveau riche industrialists',
      'Aristocracy',
      'Lower middle class',
    ],
    correctIndex: 1,
    topic: 'context',
    difficulty: 'easy',
    explanation:
      "The Birlings are wealthy industrialists keen to climb the social ladder, as shown by Mr Birling's excitement about Gerald's family.",
  },
  {
    id: 'context-013',
    text: 'What was the Divine Right of Kings?',
    options: [
      'The belief that kings earned their position through battle',
      'The belief that monarchs were chosen and appointed by God',
      'A legal document granting kings unlimited power',
      'A tradition where kings were elected by nobles',
    ],
    correctIndex: 1,
    topic: 'context',
    difficulty: 'medium',
    explanation:
      "The Divine Right of Kings held that a monarch's authority came from God. Macbeth's murder of Duncan offended divine order.",
  },
  {
    id: 'context-014',
    text: "In what decade was 'Remains' by Simon Armitage based?",
    options: [
      '1940s (World War 2)',
      '1970s (Vietnam War)',
      '2000s (Iraq War)',
      '1910s (World War 1)',
    ],
    correctIndex: 2,
    topic: 'context',
    difficulty: 'medium',
    explanation:
      "'Remains' is based on the testimony of a soldier who served in the Iraq War in the 2000s.",
  },
  {
    id: 'context-015',
    text: 'What Victorian attitude towards science is reflected in Jekyll and Hyde?',
    options: [
      'Complete rejection of all science',
      'A mixture of excitement and fear about science pushing moral boundaries',
      'Total enthusiasm without any concerns',
      'Indifference to scientific progress',
    ],
    correctIndex: 1,
    topic: 'context',
    difficulty: 'hard',
    explanation:
      "Victorians were fascinated by science (Darwin, new medicine) but feared it could undermine religion and morality, a tension central to Jekyll and Hyde.",
  },

  // ==========================================================================
  // QUOTE IDENTIFICATION (15 questions)
  // ==========================================================================
  {
    id: 'quotes-001',
    text: "Which text contains the line 'We are members of one body'?",
    options: ['A Christmas Carol', 'An Inspector Calls', 'Macbeth', 'Jekyll and Hyde'],
    correctIndex: 1,
    topic: 'quotes',
    difficulty: 'easy',
    explanation:
      "Inspector Goole says this in An Inspector Calls, summarising Priestley's message about collective social responsibility.",
  },
  {
    id: 'quotes-002',
    text: "Who says 'Is this a dagger which I see before me'?",
    options: ['Banquo', 'Lady Macbeth', 'Macduff', 'Macbeth'],
    correctIndex: 3,
    topic: 'quotes',
    difficulty: 'easy',
    explanation:
      'Macbeth says this in his soliloquy before murdering King Duncan, hallucinating a floating dagger.',
  },
  {
    id: 'quotes-003',
    text: "In which text does a character say 'Are there no prisons? Are there no workhouses?'?",
    options: ['An Inspector Calls', 'A Christmas Carol', 'Oliver Twist', 'Jekyll and Hyde'],
    correctIndex: 1,
    topic: 'quotes',
    difficulty: 'medium',
    explanation:
      'Scrooge says this in A Christmas Carol when asked to donate to charity, showing his callous attitude toward the poor.',
  },
  {
    id: 'quotes-004',
    text: "Who says 'Look like the innocent flower, but be the serpent under it'?",
    options: ['Macbeth', 'The Witches', 'Lady Macbeth', 'Duncan'],
    correctIndex: 2,
    topic: 'quotes',
    difficulty: 'medium',
    explanation:
      'Lady Macbeth advises Macbeth to appear welcoming and innocent while hiding his murderous intent.',
  },
  {
    id: 'quotes-005',
    text: "Which play contains the line 'Fair is foul, and foul is fair'?",
    options: ['Hamlet', 'Romeo and Juliet', 'Macbeth', 'The Tempest'],
    correctIndex: 2,
    topic: 'quotes',
    difficulty: 'easy',
    explanation:
      'The three witches chant this in the opening scene of Macbeth, establishing the theme that appearances are deceptive.',
  },
  {
    id: 'quotes-006',
    text: "In An Inspector Calls, who says 'the famous younger generation who know it all'?",
    options: ['Inspector Goole', 'Mr Birling', 'Sheila', 'Eric'],
    correctIndex: 1,
    topic: 'quotes',
    difficulty: 'medium',
    explanation:
      'Mr Birling dismissively refers to the younger generation, yet Priestley shows Sheila and Eric are morally superior.',
  },
  {
    id: 'quotes-007',
    text: "Which character says 'I am in blood stepped in so far'?",
    options: ['Lady Macbeth', 'Macbeth', 'Banquo', 'Malcolm'],
    correctIndex: 1,
    topic: 'quotes',
    difficulty: 'hard',
    explanation:
      'Macbeth says this, indicating he has committed so many murders that turning back would be as difficult as continuing.',
  },
  {
    id: 'quotes-008',
    text: "In A Christmas Carol, what does Marley say about his chain?",
    options: [
      'It was placed on him by God',
      'He forged it in life, link by link',
      'It was inherited from his father',
      'It would be removed if Scrooge changed',
    ],
    correctIndex: 1,
    topic: 'quotes',
    difficulty: 'medium',
    explanation:
      "Marley tells Scrooge he wears the chain he forged in life through selfish actions, and Scrooge's chain is even longer.",
  },
  {
    id: 'quotes-009',
    text: "Which text features 'My hands are of your colour, but I shame to wear a heart so white'?",
    options: ['Romeo and Juliet', 'Macbeth', 'Hamlet', 'An Inspector Calls'],
    correctIndex: 1,
    topic: 'quotes',
    difficulty: 'hard',
    explanation:
      "Lady Macbeth says this after Duncan's murder, criticising Macbeth's cowardice while showing her own hands are bloody.",
  },
  {
    id: 'quotes-010',
    text: "Who says 'But soft, what light through yonder window breaks?'?",
    options: ['Juliet', 'Romeo', 'Mercutio', 'The Nurse'],
    correctIndex: 1,
    topic: 'quotes',
    difficulty: 'easy',
    explanation:
      'Romeo says this in the famous balcony scene, comparing Juliet to the sun.',
  },
  {
    id: 'quotes-011',
    text: "In which text is a character described as 'a squeezing, wrenching, grasping, scraping, clutching, covetous old sinner'?",
    options: ['An Inspector Calls', 'Jekyll and Hyde', 'A Christmas Carol', 'Great Expectations'],
    correctIndex: 2,
    topic: 'quotes',
    difficulty: 'medium',
    explanation:
      'The narrator uses this list of adjectives to describe Scrooge at the beginning of A Christmas Carol.',
  },
  {
    id: 'quotes-012',
    text: "Who says 'Stars, hide your fires; let not light see my black and deep desires'?",
    options: ['Lady Macbeth', 'Macbeth', 'Banquo', 'The Witches'],
    correctIndex: 1,
    topic: 'quotes',
    difficulty: 'hard',
    explanation:
      'Macbeth says this aside after Malcolm is named heir, revealing his dark ambitions while wanting to hide them.',
  },
  {
    id: 'quotes-013',
    text: "Which character in An Inspector Calls says 'I'll never, never do it again to anybody'?",
    options: ['Mr Birling', 'Mrs Birling', 'Sheila', 'Gerald'],
    correctIndex: 2,
    topic: 'quotes',
    difficulty: 'medium',
    explanation:
      "Sheila says this with genuine remorse after learning how she contributed to Eva Smith's suffering.",
  },
  {
    id: 'quotes-014',
    text: "In Jekyll and Hyde, who describes Hyde as giving 'a strong feeling of deformity'?",
    options: ['Dr Jekyll', 'Dr Lanyon', 'Mr Enfield', 'Mr Utterson'],
    correctIndex: 2,
    topic: 'quotes',
    difficulty: 'hard',
    explanation:
      'Mr Enfield describes Hyde this way, reflecting the Victorian idea that inner evil would manifest as outward deformity.',
  },
  {
    id: 'quotes-015',
    text: "Which character says 'God bless us, every one!'?",
    options: ['Scrooge', 'Bob Cratchit', 'Tiny Tim', 'Fred'],
    correctIndex: 2,
    topic: 'quotes',
    difficulty: 'easy',
    explanation:
      "Tiny Tim says this famous line in A Christmas Carol, representing innocence, faith, and goodwill.",
  },

  // ==========================================================================
  // LANGUAGE SKILLS (10 questions)
  // ==========================================================================
  {
    id: 'language-001',
    text: "What does 'pathetic fallacy' mean?",
    options: [
      'A logical error in an argument',
      'When weather or nature reflects the mood or emotions of a character',
      'When a character makes a foolish mistake',
      'A type of tragic flaw',
    ],
    correctIndex: 1,
    topic: 'language',
    difficulty: 'easy',
    explanation:
      'Pathetic fallacy is when the weather or natural world mirrors the emotional state of characters or the mood of the scene.',
  },
  {
    id: 'language-002',
    text: 'What is the effect of a rhetorical question?',
    options: [
      'It demands an answer from the reader',
      'It engages the reader and encourages them to think, often implying the answer is obvious',
      'It provides factual information',
      'It slows down the pace of writing',
    ],
    correctIndex: 1,
    topic: 'language',
    difficulty: 'easy',
    explanation:
      'A rhetorical question is asked for effect rather than to get an answer. It engages the reader and often implies the answer is self-evident.',
  },
  {
    id: 'language-003',
    text: "What does 'semantic field' mean?",
    options: [
      'The dictionary definition of a word',
      'A group of words related to the same topic or theme used throughout a text',
      'The emotional connotation of a single word',
      'A type of sentence structure',
    ],
    correctIndex: 1,
    topic: 'language',
    difficulty: 'medium',
    explanation:
      "A semantic field is a set of words related to the same subject used together (e.g., war: 'battle', 'weapons', 'blood').",
  },
  {
    id: 'language-004',
    text: "What is the difference between 'connotation' and 'denotation'?",
    options: [
      'They mean the same thing',
      'Denotation is the literal meaning; connotation is the emotional or implied meaning',
      'Connotation is the literal meaning; denotation is the figurative meaning',
      'Denotation refers to tone; connotation refers to structure',
    ],
    correctIndex: 1,
    topic: 'language',
    difficulty: 'medium',
    explanation:
      "Denotation is a word's literal dictionary meaning, while connotation is the emotional or cultural associations it carries.",
  },
  {
    id: 'language-005',
    text: 'What is the effect of using short, simple sentences in writing?',
    options: [
      'It always makes writing boring',
      'It can create tension, emphasis, or a sense of urgency',
      "It is only used in children's writing",
      'It has no particular effect',
    ],
    correctIndex: 1,
    topic: 'language',
    difficulty: 'easy',
    explanation:
      'Short sentences can create tension, urgency, bluntness, or emphasis, and are often used at moments of high drama.',
  },
  {
    id: 'language-006',
    text: "What does 'iambic pentameter' mean?",
    options: [
      'A poem with five stanzas',
      'A rhythmic pattern of five pairs of unstressed and stressed syllables per line',
      'A poem written in five languages',
      'A pattern of five rhyming couplets',
    ],
    correctIndex: 1,
    topic: 'language',
    difficulty: 'hard',
    explanation:
      'Iambic pentameter has five iambs (unstressed then stressed syllable) per line and is commonly used by Shakespeare.',
  },
  {
    id: 'language-007',
    text: "What is synecdoche, as in 'all hands on deck'?",
    options: [
      'Using a related concept to represent something',
      'Using a part to represent the whole',
      'An extended metaphor',
      'A deliberate understatement',
    ],
    correctIndex: 1,
    topic: 'language',
    difficulty: 'hard',
    explanation:
      "Synecdoche is a figure of speech where a part represents the whole (e.g., 'hands' represents the sailors).",
  },
  {
    id: 'language-008',
    text: 'What is the purpose of an imperative verb in persuasive writing?',
    options: [
      'To describe actions in the past',
      'To command or instruct the reader directly, creating authority or urgency',
      'To ask a question',
      'To express doubt or uncertainty',
    ],
    correctIndex: 1,
    topic: 'language',
    difficulty: 'medium',
    explanation:
      "Imperative verbs (commands like 'Join', 'Consider', 'Act') directly instruct the reader and create a forceful, authoritative tone.",
  },
  {
    id: 'language-009',
    text: "What is a 'tricolon' (or rule of three)?",
    options: [
      'A poem with three stanzas',
      'A group of three words, phrases, or clauses used together for emphasis',
      'Three characters in a play',
      'A three-act play structure',
    ],
    correctIndex: 1,
    topic: 'language',
    difficulty: 'medium',
    explanation:
      'A tricolon uses three parallel words, phrases, or clauses for emphasis and rhythm.',
  },
  {
    id: 'language-010',
    text: "What is 'free verse'?",
    options: [
      'Poetry that rhymes in couplets',
      'Poetry that does not follow a regular metre or rhyme scheme',
      'Poetry written for free distribution',
      'Poetry with exactly ten syllables per line',
    ],
    correctIndex: 1,
    topic: 'language',
    difficulty: 'easy',
    explanation:
      'Free verse is poetry that does not follow a fixed metre, rhyme scheme, or other regular patterns.',
  },

  // ==========================================================================
  // NEW POETRY QUESTIONS (poetry-021 to poetry-040)
  // ==========================================================================
  {
    id: 'poetry-021',
    text: "Who wrote 'The Emigree'?",
    options: ['Imtiaz Dharker', 'Carol Rumens', 'Beatrice Garland', 'Jane Weir'],
    correctIndex: 1,
    topic: 'poetry',
    difficulty: 'easy',
    explanation:
      "Carol Rumens wrote 'The Emigree', a poem about a speaker's idealised memory of a homeland they were forced to leave.",
  },
  {
    id: 'poetry-022',
    text: "What poetic technique dominates 'The Charge of the Light Brigade'?",
    options: ['Enjambment', 'Repetition and rhythm', 'Free verse', 'Extended metaphor'],
    correctIndex: 1,
    topic: 'poetry',
    difficulty: 'medium',
    explanation:
      "Tennyson uses insistent repetition ('Cannon to right of them') and dactylic rhythm to mimic the galloping horses.",
  },
  {
    id: 'poetry-023',
    text: "In 'London' by William Blake, what does 'charter'd' suggest about the streets and the Thames?",
    options: [
      'They are beautiful and free',
      'They are mapped, controlled, and owned by the wealthy',
      'They are ancient and historical',
      'They are dangerous and violent',
    ],
    correctIndex: 1,
    topic: 'poetry',
    difficulty: 'hard',
    explanation:
      "'Charter'd' implies everything in London, even nature, has been controlled and commodified by those in power.",
  },
  {
    id: 'poetry-024',
    text: "Which poem is about a soldier's body being brought home?",
    options: ['Poppies', 'War Photographer', 'Remains', 'Bayonet Charge'],
    correctIndex: 0,
    topic: 'poetry',
    difficulty: 'medium',
    explanation:
      "'Poppies' by Jane Weir follows a mother's emotional journey as her son leaves for war, with imagery suggesting his death.",
  },
  {
    id: 'poetry-025',
    text: "What narrative voice is used in 'Remains' by Simon Armitage?",
    options: [
      'Third person omniscient',
      'Second person',
      'First person colloquial',
      'Third person limited',
    ],
    correctIndex: 2,
    topic: 'poetry',
    difficulty: 'medium',
    explanation:
      "'Remains' uses a first-person colloquial voice to create an authentic, conversational tone reflecting a real soldier's account.",
  },
  {
    id: 'poetry-026',
    text: "In 'Bayonet Charge', what happens to the soldier's patriotic motivation?",
    options: [
      'It grows stronger',
      'It disappears as raw survival instinct takes over',
      'It inspires his comrades',
      'It is rewarded by his officers',
    ],
    correctIndex: 1,
    topic: 'poetry',
    difficulty: 'hard',
    explanation:
      "Hughes shows patriotism and honour dissolving into primal fear as the soldier charges, with 'King, honour, human dignity, etcetera' dropped like luxuries.",
  },
  {
    id: 'poetry-027',
    text: "Who wrote 'Singh Song!'?",
    options: ['John Agard', 'Daljit Nagra', 'Imtiaz Dharker', 'Simon Armitage'],
    correctIndex: 1,
    topic: 'poetry',
    difficulty: 'easy',
    explanation:
      "Daljit Nagra wrote 'Singh Song!', a humorous Love and Relationships poem about a newly married shopkeeper.",
  },
  {
    id: 'poetry-028',
    text: "What does the 'huge and mighty forms' represent in 'The Prelude' extract?",
    options: [
      'The boy himself',
      "Nature's sublime and overwhelming power",
      'Other boats on the lake',
      "The boy's imagination",
    ],
    correctIndex: 1,
    topic: 'poetry',
    difficulty: 'hard',
    explanation:
      "The 'huge and mighty forms' represent the terrifying, sublime power of nature that haunts the boy's mind after his experience.",
  },
  {
    id: 'poetry-029',
    text: "Which poem in the Love and Relationships anthology explores a parent-child relationship through walking?",
    options: ['Eden Rock', 'Follower', 'Mother, any distance', 'Walking Away'],
    correctIndex: 3,
    topic: 'poetry',
    difficulty: 'medium',
    explanation:
      "'Walking Away' by Cecil Day-Lewis describes watching his son walk away on his first day at school, exploring the pain of letting go.",
  },
  {
    id: 'poetry-030',
    text: "Who wrote 'Follower'?",
    options: ['Simon Armitage', 'Seamus Heaney', 'Ted Hughes', 'Carol Ann Duffy'],
    correctIndex: 1,
    topic: 'poetry',
    difficulty: 'easy',
    explanation:
      "Seamus Heaney wrote 'Follower' about his childhood admiration for his father's skill at ploughing.",
  },
  {
    id: 'poetry-031',
    text: "In 'War Photographer', what does the phrase 'a half-formed ghost' describe?",
    options: [
      'A dead soldier',
      'An image slowly developing in the darkroom',
      'A memory fading',
      'A reflection in a window',
    ],
    correctIndex: 1,
    topic: 'poetry',
    difficulty: 'hard',
    explanation:
      "The 'half-formed ghost' describes a photograph developing in solution, with ghostly connotations linking to the dead subjects.",
  },
  {
    id: 'poetry-032',
    text: "What does 'Mother, any distance' by Simon Armitage explore?",
    options: [
      'The death of a parent',
      'A son leaving home and the stretching bond with his mother',
      'A wartime separation',
      'Immigration to a new country',
    ],
    correctIndex: 1,
    topic: 'poetry',
    difficulty: 'medium',
    explanation:
      "The poem uses the extended metaphor of a tape measure to explore the stretching connection between a son leaving home and his mother.",
  },
  {
    id: 'poetry-033',
    text: "Which poem compares a relationship to 'an onion' as an unconventional love gift?",
    options: ['Sonnet 29', 'Valentine', "Love's Philosophy", 'Letters from Yorkshire'],
    correctIndex: 1,
    topic: 'poetry',
    difficulty: 'easy',
    explanation:
      "'Valentine' by Carol Ann Duffy presents an onion as a love gift, using it as an extended metaphor for honest, complex love.",
  },
  {
    id: 'poetry-034',
    text: "In 'Checking Out Me History', what contrast does Agard draw?",
    options: [
      'Between rich and poor',
      'Between British-taught history and his Caribbean heritage',
      'Between war and peace',
      'Between rural and urban life',
    ],
    correctIndex: 1,
    topic: 'poetry',
    difficulty: 'medium',
    explanation:
      "Agard juxtaposes trivial British nursery-rhyme figures with important Caribbean heroes to challenge Eurocentric education.",
  },
  {
    id: 'poetry-035',
    text: "What does the 'Emigree' speaker describe their city as, despite political turmoil?",
    options: [
      'Dark and frightening',
      'Sunlit and bright in their memory',
      'Cold and grey',
      'Completely forgotten',
    ],
    correctIndex: 1,
    topic: 'poetry',
    difficulty: 'medium',
    explanation:
      "The speaker remembers their city as permanently sunlit, showing how memory can idealise and preserve a lost homeland.",
  },
  {
    id: 'poetry-036',
    text: "What form is 'Sonnet 29 - I think of thee!' by Elizabeth Barrett Browning?",
    options: ['Free verse', 'Petrarchan sonnet', 'Dramatic monologue', 'Ballad'],
    correctIndex: 1,
    topic: 'poetry',
    difficulty: 'hard',
    explanation:
      "'Sonnet 29' follows the Petrarchan (Italian) sonnet form with an octave and sestet, reflecting its theme of passionate love.",
  },
  {
    id: 'poetry-037',
    text: "Which poem uses an extended metaphor of farming to describe a father-son relationship?",
    options: ['Walking Away', 'Eden Rock', 'Follower', "Before You Were Mine"],
    correctIndex: 2,
    topic: 'poetry',
    difficulty: 'easy',
    explanation:
      "'Follower' by Seamus Heaney uses farming and ploughing as the setting and metaphor for the father-son bond.",
  },
  {
    id: 'poetry-038',
    text: "In 'Exposure', what does the repeated phrase 'But nothing happens' convey?",
    options: [
      'That the battle is won',
      'The tedium, futility, and helplessness of trench warfare',
      'That the soldiers are safe',
      'That war is exciting',
    ],
    correctIndex: 1,
    topic: 'poetry',
    difficulty: 'medium',
    explanation:
      "Owen's refrain 'But nothing happens' emphasises the monotonous, pointless suffering of soldiers waiting in the trenches.",
  },
  {
    id: 'poetry-039',
    text: "Who wrote 'Before You Were Mine'?",
    options: ['Jane Weir', 'Imtiaz Dharker', 'Carol Ann Duffy', 'Elizabeth Barrett Browning'],
    correctIndex: 2,
    topic: 'poetry',
    difficulty: 'easy',
    explanation:
      "Carol Ann Duffy wrote 'Before You Were Mine', imagining her mother's glamorous life before motherhood.",
  },
  {
    id: 'poetry-040',
    text: "What is the tone of 'Eden Rock' by Charles Causley?",
    options: [
      'Angry and bitter',
      'Nostalgic and dreamlike, with undertones of death',
      'Humorous and light-hearted',
      'Fearful and anxious',
    ],
    correctIndex: 1,
    topic: 'poetry',
    difficulty: 'hard',
    explanation:
      "'Eden Rock' has a serene, dreamlike quality as the speaker imagines his dead parents beckoning him across a stream, suggesting an afterlife.",
  },

  // ==========================================================================
  // NEW CHARACTER QUESTIONS (characters-021 to characters-040)
  // ==========================================================================
  {
    id: 'characters-021',
    text: 'In Romeo and Juliet, what role does Friar Lawrence play in the plot?',
    options: [
      'He fights in the street brawls',
      'He secretly marries Romeo and Juliet and devises the sleeping potion plan',
      'He is the Prince of Verona',
      'He is a servant of the Capulets',
    ],
    correctIndex: 1,
    topic: 'characters',
    difficulty: 'easy',
    explanation:
      'Friar Lawrence secretly marries the lovers and gives Juliet the sleeping potion, hoping to unite the feuding families.',
  },
  {
    id: 'characters-022',
    text: "In Macbeth, what do the witches predict for Banquo's descendants?",
    options: [
      'They will all die in battle',
      'They will become kings',
      'They will flee Scotland',
      'They will serve Macbeth loyally',
    ],
    correctIndex: 1,
    topic: 'characters',
    difficulty: 'medium',
    explanation:
      "The witches tell Banquo he will be 'lesser than Macbeth, and greater' and that his descendants will be kings, which drives Macbeth's paranoia.",
  },
  {
    id: 'characters-023',
    text: 'In An Inspector Calls, how does Eric Birling contribute to Eva Smith\'s downfall?',
    options: [
      'He sacked her from his factory',
      'He got her pregnant and stole money to support her',
      'He refused to serve her at a shop',
      'He ended a romantic relationship with her',
    ],
    correctIndex: 1,
    topic: 'characters',
    difficulty: 'medium',
    explanation:
      "Eric had a drunken affair with Eva, got her pregnant, and stole money from his father's business to support her.",
  },
  {
    id: 'characters-024',
    text: "In A Christmas Carol, what is the significance of Scrooge's nephew Fred?",
    options: [
      'He is a business rival',
      'He represents warmth, generosity, and the Christmas spirit that Scrooge rejects',
      'He is a ghost who visits Scrooge',
      'He is an employee who fears Scrooge',
    ],
    correctIndex: 1,
    topic: 'characters',
    difficulty: 'easy',
    explanation:
      "Fred is Scrooge's cheerful nephew who embodies the Christmas spirit of joy and family, contrasting with Scrooge's isolation.",
  },
  {
    id: 'characters-025',
    text: "In Jekyll and Hyde, what happens when Jekyll can no longer control the transformations?",
    options: [
      'He flees to France',
      'He confesses to the police',
      'He takes his own life as Hyde',
      'He asks Utterson to cure him',
    ],
    correctIndex: 2,
    topic: 'characters',
    difficulty: 'hard',
    explanation:
      'Jekyll loses control of the transformations and, unable to stop becoming Hyde, takes his own life rather than live as his evil alter ego.',
  },
  {
    id: 'characters-026',
    text: "In Macbeth, what is Lady Macbeth's state of mind in Act 5?",
    options: [
      'She is triumphant and powerful',
      'She is guilt-ridden, sleepwalking, and descending into madness',
      'She is plotting further murders',
      'She is trying to escape Scotland',
    ],
    correctIndex: 1,
    topic: 'characters',
    difficulty: 'medium',
    explanation:
      'By Act 5, Lady Macbeth is consumed by guilt, sleepwalking, and compulsively washing her hands, leading to her implied suicide.',
  },
  {
    id: 'characters-027',
    text: 'In Romeo and Juliet, what is Tybalt known as?',
    options: [
      'The Prince of Cats',
      'The Lion of Verona',
      'The Dark Knight',
      'The Red Devil',
    ],
    correctIndex: 0,
    topic: 'characters',
    difficulty: 'medium',
    explanation:
      "Tybalt is called 'The Prince of Cats' by Mercutio, referencing a character in the fable Reynard the Fox and suggesting his skill in fighting.",
  },
  {
    id: 'characters-028',
    text: "In An Inspector Calls, what is Mrs Birling's attitude toward Eva Smith?",
    options: [
      'Sympathetic and remorseful',
      'Snobbish, cold, and she refuses to accept any blame',
      'Indifferent and unaware of Eva',
      'Frightened and submissive',
    ],
    correctIndex: 1,
    topic: 'characters',
    difficulty: 'medium',
    explanation:
      "Mrs Birling is the most resistant to accepting blame, calling Eva 'impertinent' and showing no genuine remorse.",
  },
  {
    id: 'characters-029',
    text: "In A Christmas Carol, what does the Ghost of Christmas Past show Scrooge about his childhood?",
    options: [
      'That he was always wealthy',
      'That he was once a lonely, neglected boy and later chose money over love',
      'That he was a bully at school',
      'That his parents were criminals',
    ],
    correctIndex: 1,
    topic: 'characters',
    difficulty: 'easy',
    explanation:
      "The Ghost of Christmas Past reveals Scrooge's lonely childhood and his broken engagement with Belle, showing when he began to change.",
  },
  {
    id: 'characters-030',
    text: 'In Macbeth, why does Macbeth have Banquo murdered?',
    options: [
      'Banquo insulted Lady Macbeth',
      'Banquo knows about the witches\' prophecy and his descendants threaten Macbeth\'s throne',
      'Banquo is plotting with Malcolm',
      'Banquo stole from Macbeth',
    ],
    correctIndex: 1,
    topic: 'characters',
    difficulty: 'medium',
    explanation:
      "Macbeth fears Banquo because he witnessed the witches' prophecy and because Banquo's descendants are predicted to become kings.",
  },
  {
    id: 'characters-031',
    text: 'In Jekyll and Hyde, what kind of character is Mr Utterson?',
    options: [
      'A flamboyant artist',
      'A rational, loyal, and morally upright Victorian gentleman',
      'A reckless scientist',
      'A corrupt politician',
    ],
    correctIndex: 1,
    topic: 'characters',
    difficulty: 'easy',
    explanation:
      'Mr Utterson is the epitome of Victorian respectability: rational, loyal, discreet, and morally upright.',
  },
  {
    id: 'characters-032',
    text: 'In Romeo and Juliet, which character acts as a peacemaker?',
    options: ['Tybalt', 'Mercutio', 'Benvolio', 'Paris'],
    correctIndex: 2,
    topic: 'characters',
    difficulty: 'easy',
    explanation:
      "Benvolio consistently tries to keep the peace and avoid conflict, as his name (meaning 'goodwill') suggests.",
  },
  {
    id: 'characters-033',
    text: "In An Inspector Calls, what does the Inspector's name 'Goole' suggest?",
    options: [
      'He is from the town of Goole',
      "It sounds like 'ghoul', suggesting he may be a supernatural figure",
      'It is a common Edwardian surname',
      'It references a famous detective',
    ],
    correctIndex: 1,
    topic: 'characters',
    difficulty: 'hard',
    explanation:
      "'Goole' sounds like 'ghoul' (a spirit), hinting that the Inspector may be a supernatural force representing conscience or justice.",
  },
  {
    id: 'characters-034',
    text: 'In Macbeth, how is Duncan presented as a king?',
    options: [
      'Weak and foolish',
      'Generous, trusting, and divinely ordained',
      'Cruel and tyrannical',
      'Indecisive and cowardly',
    ],
    correctIndex: 1,
    topic: 'characters',
    difficulty: 'medium',
    explanation:
      "Duncan is portrayed as a good, generous, and trusting king, which makes Macbeth's murder of him seem even more horrific.",
  },
  {
    id: 'characters-035',
    text: "In A Christmas Carol, what role does Mr Fezziwig play?",
    options: [
      'He is Scrooge\'s school teacher',
      'He is Scrooge\'s kind former employer, representing the ideal boss',
      'He is a ghost',
      'He is Scrooge\'s landlord',
    ],
    correctIndex: 1,
    topic: 'characters',
    difficulty: 'easy',
    explanation:
      "Mr Fezziwig was Scrooge's generous former employer who valued his workers' happiness, contrasting with Scrooge's treatment of Cratchit.",
  },
  {
    id: 'characters-036',
    text: "In Romeo and Juliet, what is the Nurse's role in the relationship?",
    options: [
      'She opposes the relationship from the start',
      'She acts as a go-between and confidante for Juliet',
      'She informs the Capulets of the secret marriage',
      'She has no knowledge of the relationship',
    ],
    correctIndex: 1,
    topic: 'characters',
    difficulty: 'easy',
    explanation:
      "The Nurse is Juliet's closest confidante and helps facilitate the secret relationship and marriage with Romeo.",
  },
  {
    id: 'characters-037',
    text: "In Jekyll and Hyde, what does Hyde's physical appearance symbolise?",
    options: [
      'Wealth and status',
      'Inner evil manifesting as outward ugliness, reflecting Victorian physiognomy',
      'Youth and energy',
      'Spiritual purity',
    ],
    correctIndex: 1,
    topic: 'characters',
    difficulty: 'hard',
    explanation:
      "Hyde's small, deformed, repulsive appearance reflects the Victorian belief in physiognomy: that inner corruption shows in outward appearance.",
  },
  {
    id: 'characters-038',
    text: 'In Macbeth, what does the Porter scene provide?',
    options: [
      'A crucial plot twist',
      'Comic relief and dramatic irony as he jokes about hell while Duncan lies dead',
      'An important battle scene',
      'Lady Macbeth\'s confession',
    ],
    correctIndex: 1,
    topic: 'characters',
    difficulty: 'hard',
    explanation:
      "The Porter's drunken comedy provides relief after Duncan's murder while ironically comparing Macbeth's castle to hell.",
  },
  {
    id: 'characters-039',
    text: "In An Inspector Calls, how does Gerald Croft's reaction differ from Sheila's?",
    options: [
      'Gerald is more remorseful than Sheila',
      'Gerald initially shows concern but ultimately sides with the older generation in dismissing guilt',
      'Gerald immediately confesses everything',
      'Gerald was not involved with Eva Smith',
    ],
    correctIndex: 1,
    topic: 'characters',
    difficulty: 'hard',
    explanation:
      "Gerald seems moved at first but ultimately joins Mr and Mrs Birling in trying to prove the Inspector was a hoax, unlike Sheila who remains changed.",
  },
  {
    id: 'characters-040',
    text: "In A Christmas Carol, how does Scrooge change by the end of the story?",
    options: [
      'He becomes bitter and more isolated',
      'He transforms into a generous, joyful man who embraces community and charity',
      'He moves away from London',
      'He gives away his business and retires',
    ],
    correctIndex: 1,
    topic: 'characters',
    difficulty: 'easy',
    explanation:
      "Scrooge undergoes a complete transformation, becoming generous, warm, and socially responsible, raising Bob Cratchit's salary and helping Tiny Tim.",
  },

  // ==========================================================================
  // NEW LITERARY DEVICES (devices-021 to devices-035)
  // ==========================================================================
  {
    id: 'devices-021',
    text: 'What is pathetic fallacy?',
    options: [
      'A logical flaw in an argument',
      'When weather or nature is used to reflect the mood or emotions in a scene',
      'When a character makes a fatal error',
      'A type of dramatic irony',
    ],
    correctIndex: 1,
    topic: 'devices',
    difficulty: 'easy',
    explanation:
      'Pathetic fallacy is a specific type of personification where the natural world (especially weather) mirrors human emotions.',
  },
  {
    id: 'devices-022',
    text: 'What is an extended metaphor?',
    options: [
      'A very long poem',
      'A metaphor that is developed across several lines or an entire text',
      'A comparison that uses both like and as',
      'A list of different metaphors',
    ],
    correctIndex: 1,
    topic: 'devices',
    difficulty: 'medium',
    explanation:
      'An extended metaphor is a single metaphor that is sustained and developed over multiple lines or throughout a whole text.',
  },
  {
    id: 'devices-023',
    text: 'What is the effect of a list of three (tricolon) in persuasive writing?',
    options: [
      'It confuses the reader',
      'It creates a memorable, rhythmic, and persuasive effect',
      'It slows down the argument',
      'It is only used in poetry',
    ],
    correctIndex: 1,
    topic: 'devices',
    difficulty: 'easy',
    explanation:
      'A tricolon (list of three) creates rhythm, emphasis, and memorability, making arguments more persuasive.',
  },
  {
    id: 'devices-024',
    text: "What is 'epistrophe'?",
    options: [
      'Repetition of words at the beginning of clauses',
      'Repetition of words at the end of successive clauses or sentences',
      'A type of metaphor',
      'A question asked for rhetorical effect',
    ],
    correctIndex: 1,
    topic: 'devices',
    difficulty: 'hard',
    explanation:
      "Epistrophe is the repetition of a word or phrase at the end of successive clauses, the opposite of anaphora.",
  },
  {
    id: 'devices-025',
    text: 'What is a semantic field?',
    options: [
      'A type of sentence structure',
      'A group of words in a text that are all related to the same topic or theme',
      'The literal meaning of a word',
      'A poetic form',
    ],
    correctIndex: 1,
    topic: 'devices',
    difficulty: 'medium',
    explanation:
      "A semantic field is a set of words related to the same subject (e.g., a semantic field of death: 'grave', 'corpse', 'decay').",
  },
  {
    id: 'devices-026',
    text: "What is 'apostrophe' as a literary device?",
    options: [
      'A punctuation mark showing possession',
      'Directly addressing an absent person, dead person, or abstract idea',
      'A type of rhyme scheme',
      'An exaggeration for effect',
    ],
    correctIndex: 1,
    topic: 'devices',
    difficulty: 'hard',
    explanation:
      "Literary apostrophe is when a speaker directly addresses someone absent, dead, or an abstract concept (e.g., 'O Death, where is thy sting?').",
  },
  {
    id: 'devices-027',
    text: 'What is a hamartia in tragedy?',
    options: [
      'A happy ending',
      "A tragic hero's fatal flaw that leads to their downfall",
      'A comic scene in a tragedy',
      'The resolution of the plot',
    ],
    correctIndex: 1,
    topic: 'devices',
    difficulty: 'hard',
    explanation:
      "Hamartia is the tragic hero's fatal flaw. In Macbeth, this is often identified as ambition; in Othello, jealousy.",
  },
  {
    id: 'devices-028',
    text: 'What is the effect of a first-person narrator?',
    options: [
      'It creates distance from the character',
      'It creates intimacy and allows the reader to access the character\'s thoughts directly',
      'It always makes the narrator unreliable',
      'It is only used in non-fiction',
    ],
    correctIndex: 1,
    topic: 'devices',
    difficulty: 'easy',
    explanation:
      "First-person narration creates intimacy by giving direct access to a character's thoughts and feelings, though it may be subjective.",
  },
  {
    id: 'devices-029',
    text: 'What is the difference between end-stopped lines and enjambment?',
    options: [
      'They are the same thing',
      'End-stopped lines pause at the line end; enjambment runs on to the next line without pause',
      'End-stopped lines only appear in sonnets',
      'Enjambment only appears in free verse',
    ],
    correctIndex: 1,
    topic: 'devices',
    difficulty: 'medium',
    explanation:
      'End-stopped lines have punctuation at the end creating a natural pause, while enjambment flows over line breaks, creating momentum.',
  },
  {
    id: 'devices-030',
    text: 'What is situational irony?',
    options: [
      'When a character says one thing but means another',
      'When the audience knows something the character does not',
      'When what actually happens is the opposite of what was expected',
      'When words are used to mock someone',
    ],
    correctIndex: 2,
    topic: 'devices',
    difficulty: 'medium',
    explanation:
      'Situational irony occurs when there is a contrast between what is expected to happen and what actually occurs.',
  },
  {
    id: 'devices-031',
    text: "What is 'bathos'?",
    options: [
      'A sudden rise in emotional intensity',
      'An unintentional or deliberate shift from the serious or sublime to the ridiculous',
      'A type of metaphor comparing two unlike things',
      'The climax of a narrative',
    ],
    correctIndex: 1,
    topic: 'devices',
    difficulty: 'hard',
    explanation:
      'Bathos is an abrupt transition from an elevated tone to something trivial or absurd, often used for humour or to deflate pretension.',
  },
  {
    id: 'devices-032',
    text: 'What is a cyclical (circular) structure?',
    options: [
      'A story told in chronological order',
      'When a text ends where it began, returning to its opening scene or image',
      'A story with no ending',
      'A series of flashbacks',
    ],
    correctIndex: 1,
    topic: 'devices',
    difficulty: 'medium',
    explanation:
      'A cyclical structure ends where it began, creating a sense of completeness or suggesting that nothing has changed.',
  },
  {
    id: 'devices-033',
    text: 'What is the effect of a third-person omniscient narrator?',
    options: [
      'The reader only knows one character\'s thoughts',
      'The narrator knows all characters\' thoughts and can comment on the action with authority',
      'It always creates an unreliable perspective',
      'It is used only in poetry',
    ],
    correctIndex: 1,
    topic: 'devices',
    difficulty: 'easy',
    explanation:
      "A third-person omniscient narrator has god-like knowledge of all characters' thoughts and feelings, giving authority and overview.",
  },
  {
    id: 'devices-034',
    text: 'What is euphemism?',
    options: [
      'A harsh or blunt expression',
      'A mild or indirect word or expression used in place of something harsh or unpleasant',
      'An exaggeration for emphasis',
      'A comparison using like or as',
    ],
    correctIndex: 1,
    topic: 'devices',
    difficulty: 'easy',
    explanation:
      "A euphemism substitutes a gentler expression for something considered harsh or blunt (e.g., 'passed away' instead of 'died').",
  },
  {
    id: 'devices-035',
    text: 'What is the difference between tone and mood?',
    options: [
      'They mean exactly the same thing',
      "Tone is the writer's attitude; mood is the feeling created for the reader",
      'Tone is only in poetry; mood is only in prose',
      'Mood is the writer\'s attitude; tone is the feeling created for the reader',
    ],
    correctIndex: 1,
    topic: 'devices',
    difficulty: 'medium',
    explanation:
      "Tone refers to the writer's attitude toward the subject, while mood is the atmosphere or emotional effect created for the reader.",
  },

  // ==========================================================================
  // NEW CONTEXT & HISTORY (context-016 to context-030)
  // ==========================================================================
  {
    id: 'context-016',
    text: 'What is the significance of the 1912 setting in An Inspector Calls?',
    options: [
      'It was when the play was written',
      'It was before two World Wars, the Titanic sinking, and the welfare state, exposing Birling\'s wrong predictions',
      'It was when Priestley was born',
      'It was when socialism was officially established in Britain',
    ],
    correctIndex: 1,
    topic: 'context',
    difficulty: 'medium',
    explanation:
      "Setting the play in 1912 allows the 1945 audience to see how wrong Mr Birling's confident predictions about peace and progress were.",
  },
  {
    id: 'context-017',
    text: 'What was the Malthusian theory, and how does it connect to A Christmas Carol?',
    options: [
      'A theory about the divine right of kings',
      'The idea that population growth would outstrip food supply, used to justify ignoring the poor',
      'A theory about evolution',
      'A theory about economic equality',
    ],
    correctIndex: 1,
    topic: 'context',
    difficulty: 'hard',
    explanation:
      "Malthus argued population would outstrip resources. Scrooge's suggestion that the poor should die to 'decrease the surplus population' echoes this.",
  },
  {
    id: 'context-018',
    text: 'What was the patriarchal society like in the Jacobean era, as relevant to Macbeth?',
    options: [
      'Women held equal power to men',
      'Men dominated public life and women were expected to be submissive, making Lady Macbeth subversive',
      'Women commonly led armies',
      'Gender roles were not important',
    ],
    correctIndex: 1,
    topic: 'context',
    difficulty: 'medium',
    explanation:
      "Jacobean society was deeply patriarchal. Lady Macbeth's ambition and manipulation of her husband would have been seen as a dangerous inversion of gender roles.",
  },
  {
    id: 'context-019',
    text: 'What social issue does Romeo and Juliet highlight through the feud?',
    options: [
      'Class inequality',
      'How inherited hatred and tribalism destroy innocent lives',
      'Religious conflict',
      'The dangers of democracy',
    ],
    correctIndex: 1,
    topic: 'context',
    difficulty: 'easy',
    explanation:
      "The Montague-Capulet feud shows how ancient, irrational hatred destroys the younger generation's chance of happiness and peace.",
  },
  {
    id: 'context-020',
    text: "What real Victorian case influenced Stevenson's Jekyll and Hyde?",
    options: [
      'Jack the Ripper',
      'Deacon Brodie, an Edinburgh cabinet-maker who was a secret burglar',
      'Charles Darwin',
      'Florence Nightingale',
    ],
    correctIndex: 1,
    topic: 'context',
    difficulty: 'hard',
    explanation:
      "Deacon Brodie was a respectable Edinburgh craftsman by day and a criminal by night, directly inspiring Stevenson's exploration of duality.",
  },
  {
    id: 'context-021',
    text: "How does the welfare state relate to Priestley's message in An Inspector Calls?",
    options: [
      'The welfare state was already established when the play was written',
      'Priestley wrote the play in 1945 as Britain was about to create the welfare state, supporting collective responsibility',
      'Priestley opposed the welfare state',
      'The welfare state is not relevant to the play',
    ],
    correctIndex: 1,
    topic: 'context',
    difficulty: 'hard',
    explanation:
      "Priestley wrote the play in 1945, just as the welfare state was being planned, making his message of collective social responsibility timely and political.",
  },
  {
    id: 'context-022',
    text: 'What was the attitude toward mental illness in the Victorian era, as relevant to Jekyll and Hyde?',
    options: [
      'It was well understood and treated compassionately',
      'It was feared, stigmatised, and often hidden, reflecting the secrecy around Hyde',
      'It was openly discussed in society',
      'It was considered a sign of genius',
    ],
    correctIndex: 1,
    topic: 'context',
    difficulty: 'medium',
    explanation:
      "Victorians feared and stigmatised mental illness. Jekyll's desire to hide his darker impulses reflects this culture of repression and secrecy.",
  },
  {
    id: 'context-023',
    text: "Why is the concept of the 'chain of being' important in understanding Shakespeare's tragedies?",
    options: [
      'It was a type of punishment used in prisons',
      'It was the belief in a divine hierarchy from God to animals, disrupted by regicide in Macbeth',
      'It was a trading route across Europe',
      'It was a military formation used in battle',
    ],
    correctIndex: 1,
    topic: 'context',
    difficulty: 'medium',
    explanation:
      "The Great Chain of Being placed God at the top and animals at the bottom. Killing a king disrupted this divine order, explaining nature's chaos in Macbeth.",
  },
  {
    id: 'context-024',
    text: 'What was the Industrial Revolution, and how does it connect to A Christmas Carol?',
    options: [
      'A political revolution in France',
      'A period of rapid industrialisation that created vast wealth for some and extreme poverty for workers',
      'A scientific discovery about electricity',
      'A military campaign in the colonies',
    ],
    correctIndex: 1,
    topic: 'context',
    difficulty: 'easy',
    explanation:
      "The Industrial Revolution created immense wealth for factory owners like Scrooge while workers suffered in terrible conditions, which Dickens attacked.",
  },
  {
    id: 'context-025',
    text: "What was the significance of the Romantic movement to poems like 'The Prelude' and 'Ozymandias'?",
    options: [
      'It focused on science and reason',
      'It celebrated nature, emotion, individual experience, and challenged the power of rulers',
      'It was a political party',
      'It only influenced visual art, not poetry',
    ],
    correctIndex: 1,
    topic: 'context',
    difficulty: 'medium',
    explanation:
      "The Romantic movement celebrated nature, emotion, and individuality. Wordsworth's awe of nature and Shelley's challenge to tyranny reflect this.",
  },
  {
    id: 'context-026',
    text: 'What is the historical context of the conflict poems set during World War One?',
    options: [
      'They were written to recruit soldiers',
      'Poets like Owen experienced trench warfare first-hand and wrote to expose its true horror',
      'They were written by politicians',
      'They celebrate the glory of battle',
    ],
    correctIndex: 1,
    topic: 'context',
    difficulty: 'easy',
    explanation:
      "WWI poets like Owen wrote from direct experience in the trenches to challenge the patriotic propaganda and reveal war's true suffering.",
  },
  {
    id: 'context-027',
    text: 'What social class tension exists in An Inspector Calls?',
    options: [
      'There is no class tension in the play',
      'The Birlings exploit working-class people like Eva Smith while claiming moral superiority',
      'The working class are shown as morally inferior',
      'All characters are from the same class',
    ],
    correctIndex: 1,
    topic: 'context',
    difficulty: 'easy',
    explanation:
      "Priestley exposes how the comfortable upper-middle class exploited and discarded working-class people like Eva Smith without consequence.",
  },
  {
    id: 'context-028',
    text: "How does the concept of 'honour' drive the plot in Romeo and Juliet?",
    options: [
      'Honour is irrelevant to the plot',
      'Family honour fuels the feud, forces Tybalt to fight, and prevents reconciliation',
      'Only Romeo cares about honour',
      'Honour leads to a peaceful resolution',
    ],
    correctIndex: 1,
    topic: 'context',
    difficulty: 'medium',
    explanation:
      "In Elizabethan culture, family honour was paramount. Tybalt's need to defend Capulet honour drives the fatal duel that kills Mercutio and leads to Romeo's banishment.",
  },
  {
    id: 'context-029',
    text: 'What post-colonial context is relevant to poems like "Checking Out Me History"?',
    options: [
      'British colonies willingly adopted British culture',
      'Former colonial subjects challenged the Eurocentric narratives imposed on them through education',
      'Post-colonial writers only wrote in their native languages',
      'Post-colonial literature avoids discussing history',
    ],
    correctIndex: 1,
    topic: 'context',
    difficulty: 'hard',
    explanation:
      "Agard's poem reflects post-colonial resistance to Eurocentric education that erased Caribbean history, asserting the importance of reclaiming identity.",
  },
  {
    id: 'context-030',
    text: 'What was the significance of the Titanic reference in An Inspector Calls?',
    options: [
      'Mr Birling was on the Titanic',
      "Mr Birling confidently calls the Titanic 'unsinkable', and the 1945 audience knows he is wrong, undermining his authority",
      'The Titanic is a symbol of socialism',
      'The Inspector mentions the Titanic',
    ],
    correctIndex: 1,
    topic: 'context',
    difficulty: 'medium',
    explanation:
      "Birling's confident claim that the Titanic is 'unsinkable' is dramatic irony. The audience knows the ship sank, showing Birling's judgement is completely wrong.",
  },

  // ==========================================================================
  // NEW QUOTE IDENTIFICATION (quotes-016 to quotes-030)
  // ==========================================================================
  {
    id: 'quotes-016',
    text: "Who says 'Unsex me here' in Macbeth?",
    options: ['The Witches', 'Lady Macbeth', 'Macbeth', 'Lady Macduff'],
    correctIndex: 1,
    topic: 'quotes',
    difficulty: 'easy',
    explanation:
      "Lady Macbeth says 'Unsex me here' when calling on dark spirits to strip her of feminine compassion so she can help murder Duncan.",
  },
  {
    id: 'quotes-017',
    text: "Which character says 'When you're married you'll realize that men with important work to do ... shouldn't be disturbed by these girls'?",
    options: ['Inspector Goole', 'Mr Birling', 'Gerald Croft', 'Eric Birling'],
    correctIndex: 1,
    topic: 'quotes',
    difficulty: 'hard',
    explanation:
      "Mr Birling dismisses concern for Eva Smith, revealing his sexist and capitalist attitudes about working women.",
  },
  {
    id: 'quotes-018',
    text: "In A Christmas Carol, who says 'I will honour Christmas in my heart, and try to keep it all the year'?",
    options: ['Fred', 'Bob Cratchit', 'Scrooge', 'Tiny Tim'],
    correctIndex: 2,
    topic: 'quotes',
    difficulty: 'easy',
    explanation:
      "Scrooge says this after his transformation, pledging to embody the spirit of Christmas permanently.",
  },
  {
    id: 'quotes-019',
    text: "In Macbeth, who says 'Will all great Neptune's ocean wash this blood clean from my hand?'?",
    options: ['Lady Macbeth', 'Macbeth', 'Macduff', 'Malcolm'],
    correctIndex: 1,
    topic: 'quotes',
    difficulty: 'medium',
    explanation:
      "Macbeth says this after murdering Duncan, expressing his overwhelming guilt through the hyperbolic image of blood-stained hands.",
  },
  {
    id: 'quotes-020',
    text: "Which text contains the quote 'mankind was my business'?",
    options: ['An Inspector Calls', 'A Christmas Carol', 'Jekyll and Hyde', 'Macbeth'],
    correctIndex: 1,
    topic: 'quotes',
    difficulty: 'medium',
    explanation:
      "Marley's ghost says this to Scrooge, warning that caring for other people should have been his priority, not making money.",
  },
  {
    id: 'quotes-021',
    text: "Who says 'O Romeo, Romeo, wherefore art thou Romeo?'?",
    options: ['Romeo', 'Juliet', 'The Nurse', 'Friar Lawrence'],
    correctIndex: 1,
    topic: 'quotes',
    difficulty: 'easy',
    explanation:
      "Juliet says this in the balcony scene. 'Wherefore' means 'why', not 'where' - she questions why he must be a Montague.",
  },
  {
    id: 'quotes-022',
    text: "In An Inspector Calls, who says 'If men will not learn that lesson, then they will be taught it in fire and blood and anguish'?",
    options: ['Mr Birling', 'Sheila', 'Inspector Goole', 'Eric'],
    correctIndex: 2,
    topic: 'quotes',
    difficulty: 'medium',
    explanation:
      "The Inspector's final speech warns that failing to learn social responsibility will lead to catastrophe, foreshadowing the two World Wars.",
  },
  {
    id: 'quotes-023',
    text: "In Macbeth, who says 'There's daggers in men's smiles'?",
    options: ['Macbeth', 'Banquo', 'Donalbain', 'Malcolm'],
    correctIndex: 2,
    topic: 'quotes',
    difficulty: 'hard',
    explanation:
      "Donalbain says this after his father Duncan's murder, recognising that those who appear friendly may be plotting to kill them.",
  },
  {
    id: 'quotes-024',
    text: "Which character in Jekyll and Hyde describes Hyde as 'pale and dwarfish' with 'a displeasing smile'?",
    options: ['Mr Utterson', 'Dr Lanyon', 'Mr Enfield', 'Poole'],
    correctIndex: 0,
    topic: 'quotes',
    difficulty: 'hard',
    explanation:
      "Mr Utterson finally meets Hyde and describes him in these unsettling terms, sensing something deeply wrong but struggling to define it.",
  },
  {
    id: 'quotes-025',
    text: "In A Christmas Carol, what does Scrooge say when asked for a donation to charity at the start?",
    options: [
      "'I will give generously'",
      "'Are there no prisons? ... And the Union workhouses?'",
      "'I have no money to spare'",
      "'Leave me alone, I am busy'",
    ],
    correctIndex: 1,
    topic: 'quotes',
    difficulty: 'easy',
    explanation:
      "Scrooge's response reveals his belief that prisons and workhouses are sufficient provision for the poor, showing his callous attitude.",
  },
  {
    id: 'quotes-026',
    text: "Who says 'These violent delights have violent ends' in Romeo and Juliet?",
    options: ['The Prince', 'Romeo', 'Friar Lawrence', 'Benvolio'],
    correctIndex: 2,
    topic: 'quotes',
    difficulty: 'medium',
    explanation:
      "Friar Lawrence warns Romeo that intense passion can lead to destruction, foreshadowing the tragic ending of the play.",
  },
  {
    id: 'quotes-027',
    text: "In Macbeth, what does Lady Macbeth mean by 'Look like the innocent flower, but be the serpent under't'?",
    options: [
      'They should plant flowers in the garden',
      'Macbeth must appear welcoming while hiding his murderous plan',
      'She wants Macbeth to send flowers to Duncan',
      'She is describing the witches',
    ],
    correctIndex: 1,
    topic: 'quotes',
    difficulty: 'medium',
    explanation:
      "Lady Macbeth instructs Macbeth to disguise his deadly intentions with a facade of innocence and hospitality.",
  },
  {
    id: 'quotes-028',
    text: "Which character says 'I have no spur to prick the sides of my intent, but only vaulting ambition'?",
    options: ['Banquo', 'Malcolm', 'Macbeth', 'Lady Macbeth'],
    correctIndex: 2,
    topic: 'quotes',
    difficulty: 'hard',
    explanation:
      "Macbeth admits that only his own ambition drives him toward murder, with no rational justification, identifying ambition as his hamartia.",
  },
  {
    id: 'quotes-029',
    text: "In An Inspector Calls, who says 'You're not the kind of father a chap could go to when he's in trouble'?",
    options: ['Sheila', 'Eric', 'Gerald', 'Inspector Goole'],
    correctIndex: 1,
    topic: 'quotes',
    difficulty: 'medium',
    explanation:
      "Eric says this to his father, exposing Mr Birling's failure as a parent and the cold, unapproachable nature of the household.",
  },
  {
    id: 'quotes-030',
    text: "In Romeo and Juliet, who says 'A plague o' both your houses'?",
    options: ['Romeo', 'The Prince', 'Mercutio', 'Tybalt'],
    correctIndex: 2,
    topic: 'quotes',
    difficulty: 'easy',
    explanation:
      "Mercutio curses both the Montagues and Capulets as he dies, blaming the senseless feud for his death.",
  },

  // ==========================================================================
  // NEW LANGUAGE SKILLS (language-011 to language-020)
  // ==========================================================================
  {
    id: 'language-011',
    text: 'What is the effect of using second-person address ("you") in persuasive writing?',
    options: [
      'It creates distance between writer and reader',
      'It directly addresses and involves the reader, making the argument feel personal',
      'It is considered poor writing',
      'It only works in fiction',
    ],
    correctIndex: 1,
    topic: 'language',
    difficulty: 'easy',
    explanation:
      "Using 'you' directly engages readers, making them feel personally addressed and more likely to respond to the argument.",
  },
  {
    id: 'language-012',
    text: 'What is the effect of an exclamatory sentence?',
    options: [
      'It always creates a questioning tone',
      'It conveys strong emotion such as anger, shock, or excitement',
      'It slows down the pace',
      'It is only used in dialogue',
    ],
    correctIndex: 1,
    topic: 'language',
    difficulty: 'easy',
    explanation:
      'Exclamatory sentences express strong feelings and can convey shock, surprise, anger, or passion, adding emotional intensity.',
  },
  {
    id: 'language-013',
    text: 'What does it mean when a writer uses a declarative sentence?',
    options: [
      'They are asking a question',
      'They are making a statement or giving factual information',
      'They are giving a command',
      'They are expressing surprise',
    ],
    correctIndex: 1,
    topic: 'language',
    difficulty: 'easy',
    explanation:
      'Declarative sentences make statements and convey information. They can create an authoritative, confident tone.',
  },
  {
    id: 'language-014',
    text: "What is 'emotive language'?",
    options: [
      'Language that is factual and objective',
      'Language deliberately chosen to provoke an emotional response from the reader',
      'Language that is only used in poetry',
      'Language that describes settings',
    ],
    correctIndex: 1,
    topic: 'language',
    difficulty: 'easy',
    explanation:
      "Emotive language is word choice designed to trigger specific emotions in the reader (e.g., 'devastating' rather than 'bad').",
  },
  {
    id: 'language-015',
    text: "What is 'assonance'?",
    options: [
      'Repetition of consonant sounds at the beginning of words',
      'Repetition of vowel sounds within nearby words',
      'Words that imitate sounds',
      'Repetition of words at the start of lines',
    ],
    correctIndex: 1,
    topic: 'language',
    difficulty: 'medium',
    explanation:
      "Assonance is the repetition of vowel sounds in nearby words (e.g., 'the rain in Spain stays mainly on the plain').",
  },
  {
    id: 'language-016',
    text: "What does 'register' mean in English Language?",
    options: [
      'A list of students in a class',
      'The level of formality in language, adjusted for audience and purpose',
      'The volume at which someone speaks',
      'A type of punctuation',
    ],
    correctIndex: 1,
    topic: 'language',
    difficulty: 'medium',
    explanation:
      "Register refers to the level of formality in language. Formal register suits academic writing; informal register suits personal letters.",
  },
  {
    id: 'language-017',
    text: 'What is the effect of using passive voice rather than active voice?',
    options: [
      'It always makes writing clearer',
      'It can shift focus from who did the action to what was done, sometimes hiding responsibility',
      'It is grammatically incorrect',
      'It speeds up the pace of writing',
    ],
    correctIndex: 1,
    topic: 'language',
    difficulty: 'hard',
    explanation:
      "Passive voice ('mistakes were made') shifts focus from the agent, sometimes deliberately obscuring who is responsible.",
  },
  {
    id: 'language-018',
    text: 'What is a compound-complex sentence?',
    options: [
      'A sentence with one clause',
      'A sentence with at least two independent clauses and one or more dependent clauses',
      'A sentence with only simple words',
      'A very short sentence',
    ],
    correctIndex: 1,
    topic: 'language',
    difficulty: 'hard',
    explanation:
      "A compound-complex sentence combines compound (two independent clauses) and complex (dependent clause) structures for detailed expression.",
  },
  {
    id: 'language-019',
    text: "What is 'hypophora'?",
    options: [
      'An extreme exaggeration',
      'When a writer asks a question and then immediately answers it',
      'A type of understatement',
      'An address to an absent person',
    ],
    correctIndex: 1,
    topic: 'language',
    difficulty: 'hard',
    explanation:
      "Hypophora is the technique of raising a question and then immediately providing the answer, guiding the reader's thinking.",
  },
  {
    id: 'language-020',
    text: 'What is the purpose of hedging language (e.g., "perhaps", "might", "arguably")?',
    options: [
      'To make an argument sound weaker and less convincing',
      'To show nuance, acknowledge uncertainty, and avoid absolute claims',
      'To confuse the reader',
      'To be deliberately dishonest',
    ],
    correctIndex: 1,
    topic: 'language',
    difficulty: 'medium',
    explanation:
      "Hedging language shows sophistication and nuance, acknowledging that arguments are not always absolute. It is valued in analytical writing at GCSE.",
  },

  // ==========================================================================
  // WRITING SKILLS (10 questions) — NEW TOPIC
  // ==========================================================================
  {
    id: 'writing-001',
    text: 'In GCSE English Language Paper 1, Question 5, what are the two possible tasks?',
    options: [
      'An essay and a letter',
      'A descriptive piece or a narrative (story)',
      'A speech and an article',
      'A review and a report',
    ],
    correctIndex: 1,
    topic: 'writing',
    difficulty: 'easy',
    explanation:
      'AQA Paper 1 Question 5 offers a choice between descriptive writing and narrative writing, both worth 40 marks.',
  },
  {
    id: 'writing-002',
    text: 'What is the DAFOREST acronym used for in persuasive writing?',
    options: [
      'A poem analysis technique',
      'A mnemonic for persuasive techniques: Direct address, Alliteration, Facts, Opinions, Rhetorical questions, Emotive language, Statistics, Tricolon',
      'A way to structure a narrative',
      'A method for memorising quotations',
    ],
    correctIndex: 1,
    topic: 'writing',
    difficulty: 'medium',
    explanation:
      'DAFOREST is a mnemonic helping students remember key persuasive techniques for Paper 2 Question 5 writing tasks.',
  },
  {
    id: 'writing-003',
    text: 'What makes an effective opening to a descriptive piece?',
    options: [
      'Starting with "In this essay I will..."',
      'Beginning with a vivid sensory detail, a single striking image, or an unusual perspective',
      'Starting with a long list of adjectives',
      'Opening with dialogue between two characters',
    ],
    correctIndex: 1,
    topic: 'writing',
    difficulty: 'medium',
    explanation:
      'Effective descriptive openings immerse the reader immediately through sensory imagery, an arresting detail, or an unusual viewpoint.',
  },
  {
    id: 'writing-004',
    text: 'In Paper 2 Question 5, which form might you be asked to write?',
    options: [
      'A poem or song',
      'A letter, article, speech, or leaflet presenting a viewpoint',
      'A short story',
      'A descriptive piece',
    ],
    correctIndex: 1,
    topic: 'writing',
    difficulty: 'easy',
    explanation:
      'Paper 2 Question 5 asks for writing to present a viewpoint in a specific form: letter, article, speech, or leaflet.',
  },
  {
    id: 'writing-005',
    text: 'What is the purpose of paragraphing in creative writing?',
    options: [
      'It is just a formatting rule with no real purpose',
      'It organises ideas, controls pace, creates emphasis, and guides the reader through the text',
      'It is only needed in essays, not stories',
      'It makes the writing look longer',
    ],
    correctIndex: 1,
    topic: 'writing',
    difficulty: 'easy',
    explanation:
      'Paragraphing is a deliberate structural tool. Single-sentence paragraphs create emphasis; longer ones build detail and atmosphere.',
  },
  {
    id: 'writing-006',
    text: 'What does "show, don\'t tell" mean in narrative writing?',
    options: [
      'Always include dialogue',
      'Convey emotions through actions, sensory details, and imagery rather than directly stating feelings',
      'Use visual aids with your writing',
      'Only describe what characters can see',
    ],
    correctIndex: 1,
    topic: 'writing',
    difficulty: 'medium',
    explanation:
      "'Show, don't tell' means writing 'Her hands trembled as she gripped the letter' instead of 'She was nervous', using detail to convey emotion.",
  },
  {
    id: 'writing-007',
    text: 'How should you structure a speech for GCSE English Language?',
    options: [
      'Just write it like an essay with no specific features',
      'Use a clear introduction, address the audience directly, employ rhetorical devices, and finish with a powerful conclusion',
      'Write in bullet points',
      'Only use formal language throughout',
    ],
    correctIndex: 1,
    topic: 'writing',
    difficulty: 'medium',
    explanation:
      'An effective speech uses direct address, rhetorical questions, tricolons, repetition, and a strong opening and closing to engage the audience.',
  },
  {
    id: 'writing-008',
    text: 'What is the mark scheme split for Paper 1 Question 5 (creative writing)?',
    options: [
      '40 marks for content only',
      '24 marks for content and organisation; 16 marks for technical accuracy (SPAG)',
      '20 marks for content; 20 marks for length',
      '30 marks for vocabulary; 10 marks for spelling',
    ],
    correctIndex: 1,
    topic: 'writing',
    difficulty: 'hard',
    explanation:
      'AQA splits the 40 marks into 24 for content/organisation (ideas, structure, paragraphing) and 16 for technical accuracy (spelling, punctuation, grammar).',
  },
  {
    id: 'writing-009',
    text: 'What is the effect of using a cyclical structure in a narrative?',
    options: [
      'It makes the story predictable and boring',
      'It creates a sense of completeness, emphasises a theme, or shows how a character has changed (or not)',
      'It is only used in poetry',
      'It confuses the examiner',
    ],
    correctIndex: 1,
    topic: 'writing',
    difficulty: 'hard',
    explanation:
      'Cyclical structure (ending where you began) creates cohesion and can powerfully highlight transformation or tragic stasis.',
  },
  {
    id: 'writing-010',
    text: 'Why is varying sentence structure important in GCSE writing?',
    options: [
      'It is not important as long as spelling is correct',
      'Mixing simple, compound, and complex sentences controls pace, creates emphasis, and demonstrates skill',
      'You should only use long sentences to show sophistication',
      'You should only use short sentences for drama',
    ],
    correctIndex: 1,
    topic: 'writing',
    difficulty: 'medium',
    explanation:
      'Varying sentence length and type shows control: short sentences for impact, longer ones for detail, and the mix demonstrates range to the examiner.',
  },
]

// ---------------------------------------------------------------------------
// Helper exports
// ---------------------------------------------------------------------------

export const topics = [
  'poetry',
  'characters',
  'devices',
  'context',
  'quotes',
  'language',
  'writing',
] as const

export type Topic = (typeof topics)[number]
export type Difficulty = QuizQuestion['difficulty']

/** Get questions filtered by topic */
export function getQuestionsByTopic(topic?: Topic): QuizQuestion[] {
  if (!topic) return quizQuestions
  return quizQuestions.filter((q) => q.topic === topic)
}

/** Get questions filtered by difficulty */
export function getQuestionsByDifficulty(difficulty?: Difficulty): QuizQuestion[] {
  if (!difficulty) return quizQuestions
  return quizQuestions.filter((q) => q.difficulty === difficulty)
}

/** Get a random subset of n questions */
export function getRandomQuestions(n: number, topic?: Topic): QuizQuestion[] {
  const pool = topic ? getQuestionsByTopic(topic) : quizQuestions
  const shuffled = [...pool].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(n, shuffled.length))
}
