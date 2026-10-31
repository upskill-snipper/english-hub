import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Vocabulary Builder: the explanation a student sees after each answer, by
 * question key (src/data/games/banks/vocabulary-builder.ts). Written with AI on
 * 16 October 2026 and checked against each question and its options, as the
 * founder decided (src/lib/games/explanations/types.ts).
 *
 * Rebuilt for depth on 24 October 2026: explanations for the 312 questions
 * added to the bank (100 more words asked for their meaning; 99 set-text words
 * in their own line, copied from texts out of UK copyright; 75 sentences of
 * analysis with a gap for the precise word; 38 gaps that one of two paired
 * terms fits), and a new "why not" for every wrong option that changed in 47
 * of the 52 earlier words. An in-context why says what the word means in that
 * line; a gap's why says what the word means and why it fits there, and each
 * wrong word's "why not" says why it falls short. Where one explanation
 * teaches another question's answer, the two share a fact and are never dealt
 * in one round. Written with AI and checked against each question, as the
 * founder decided (src/lib/games/explanations/types.ts).
 *
 * Checked by a second reader on 24 October 2026: 14 explanations corrected, for
 * seven changed wrong options in the bank and seven errors of fact or quotation
 * (a saying printed as though Holmes said it, a line of Macbeth called short
 * that runs on, an unsupported timing in The War of the Worlds, a
 * self-contradiction, a wrong etymology, an overstated example, a comma dropped
 * from Sonnet 116). The bank's docblock lists each.
 */
export const EXPLANATIONS: GameExplanations = {
  Ambiguity: {
    why: 'Ambiguity is when something can be understood in more than one way. In Act 4 Scene 1 of Macbeth, the apparitions the witches summon make prophecies full of ambiguity: Macbeth takes them as promises of safety, but they hide a second meaning, and believing them leads to his downfall.',
    not: {
      'Having mixed or conflicting feelings about something':
        'That is ambivalence, a state of mind. Ambiguity belongs to meaning: a word, line or ending that can be read in more than one way.',
      'Saying the opposite of what is really meant':
        'That is verbal irony, where the real meaning contradicts the surface one. Ambiguity keeps two or more meanings open at once, with neither cancelled.',
      'Leaving out words that a reader can easily supply':
        'That is ellipsis. Leaving words out can create ambiguity, but ambiguity itself means a phrase is open to more than one reading.',
    },
    more: "The adjective is ambiguous. It comes from the Latin ambi-, 'both ways', as in ambidextrous. Writers use ambiguity to create suspense, leave an ending open or let one line carry two meanings at once.",
    tip: "Use it to show you can see more than one reading: 'The ending is ambiguous: we cannot be sure whether...' Then explore both interpretations.",
  },
  Juxtaposition: {
    why: "Juxtaposition means placing two contrasting things side by side so the difference stands out. In Stave One of A Christmas Carol, Scrooge's cold, gloomy counting-house is set against his nephew Fred's cheerful warmth, so each makes the other more striking.",
    not: {
      'A pause in the middle of a line used for emphasis':
        'That is a caesura, a pause within a line. Juxtaposition places two things next to each other so that they contrast.',
      'Repeating the same consonant sound at the start of words':
        'That is alliteration, a device of sound. Juxtaposition sets two ideas, images or characters side by side to bring out their differences.',
      'Comparing two things to show how much they are alike':
        'Juxtaposition does the reverse: it places two things together to stress how different they are, not how alike.',
    },
    more: "The word comes from the Latin juxta, 'next to', and 'position'. It is close to antithesis, but juxtaposition can place any two things together, such as images, characters or settings, while antithesis sets opposite ideas in balanced words.",
    tip: "Say what the contrast reveals: 'Dickens juxtaposes Scrooge's coldness with Fred's warmth to highlight how isolated Scrooge has made himself.'",
  },
  Ominous: {
    why: 'Ominous describes something that suggests trouble is coming. Dark clouds massing over a house, a sudden silence or a raven landing on a gate can all feel ominous: nothing bad has happened yet, but the reader senses that it will.',
    not: {
      'Filled with a quiet sadness about something now lost':
        'That is melancholy, a sadness about what is gone. Ominous looks forward: it warns that something bad is coming.',
      'Looking back fondly at a happier time in the past':
        'That is nostalgic. Ominous details point to the future, and to danger rather than to happy memories.',
      'Cheerfully confident that everything will turn out well':
        'That is optimism, the opposite mood. Something ominous suggests that things will turn out badly.',
    },
    more: 'Ominous comes from omen, a sign of what will happen. Writers use ominous details to foreshadow events and build tension, especially in Gothic and horror writing.',
    tip: "Use it to describe atmosphere precisely: 'The ominous silence before the knock warns the reader that something terrible is about to happen.'",
  },
  Didactic: {
    why: 'A didactic text is written to teach a lesson, often a moral one. An Inspector Calls is didactic: Priestley uses the Inspector to teach the audience that we are all responsible for one another.',
    not: {
      'Mocking people’s faults in order to criticise them':
        'That is satirical. Satire can carry a lesson, but it works by mockery; didactic writing sets out to teach, often quite openly.',
      'Attacking an opinion forcefully to provoke debate':
        'That describes writing that attacks, like a fierce opinion column. Didactic writing instructs: its aim is to teach the reader a lesson.',
      'Telling a story whose characters stand for ideas':
        'That is allegorical. An allegory can be didactic, but didactic names a purpose, teaching, not a story with a hidden second meaning.',
    },
    more: "It comes from the Greek didaskein, 'to teach'. Fables and parables are didactic. The word can also be a criticism, describing writing that lectures the reader too obviously.",
    tip: "Use it to discuss purpose: 'Dickens's didactic aim in A Christmas Carol is to persuade wealthy readers to help the poor.'",
  },
  Pathos: {
    why: 'Pathos is the quality in writing that makes a reader feel pity or sadness. In Stave Four of A Christmas Carol, the Cratchit family mourning Tiny Tim creates strong pathos, which moves Scrooge, and the reader, to care.',
    not: {
      'An appeal based on the speaker’s trustworthy character':
        "That is ethos, an appeal to the speaker's character and authority. Pathos appeals to the reader's emotions, especially pity and sorrow.",
      'A carefully reasoned argument based on facts and logic':
        'That is logos, an appeal to reason. Pathos works on feelings rather than on facts.',
      'A humorous moment used to ease the tension in a scene':
        'That is comic relief, which lightens the mood. Pathos deepens sadness.',
    },
    more: "Pathos is Greek for 'suffering' or 'feeling'. Aristotle named three ways to persuade: ethos (the speaker's character), pathos (emotion) and logos (logic). The adjective pathetic originally meant 'moving to pity', not 'useless'.",
    tip: "Use it when analysing emotional effect: 'Dickens creates pathos through the Cratchits' grief for Tiny Tim, making readers feel the human cost of poverty.'",
  },
  Connotation: {
    why: "A connotation is the idea or feeling a word suggests beyond its dictionary meaning. 'Home' and 'house' can name the same building, but 'home' carries connotations of warmth, safety and belonging that 'house' does not.",
    not: {
      'The dictionary definition of a word in its plainest sense':
        'That is denotation, the literal meaning. Connotation is everything extra the word suggests.',
      'The history of a word: where it came from and how it has changed':
        "That is etymology. A word's history can explain its connotations, but connotation is what the word suggests to a reader now.",
      'A figure of speech that compares two unlike things directly':
        'That is a metaphor. A metaphor can have connotations, but connotation is the suggestion a word carries, not a comparison.',
    },
    more: "Connotations can be positive, negative or neutral, and they can change with culture and time. 'Slim' and 'skinny' both mean thin, but 'skinny' often has a negative connotation.",
    tip: "When you analyse a word, explore its connotations: a character who 'creeps' rather than 'walks' suggests secrecy, guilt or fear.",
  },
  Denotation: {
    why: "Denotation is a word's literal, dictionary meaning, without any feelings attached. The denotation of 'red' is simply a colour; ideas such as danger, anger or love are its connotations.",
    not: {
      'The emotional associations a word carries with it':
        'That is connotation, the extra meaning a word suggests. Denotation is the plain, literal meaning.',
      'The history of where a word came from':
        'That is etymology. Denotation is what a word means now, plainly and literally, whatever its history.',
      'The level of formality a writer chooses':
        'That is register, the formality of the language. Denotation is the literal meaning of a single word.',
    },
    more: "Denotation comes from the Latin denotare, 'to mark out'. Comparing denotation and connotation is one of the most useful habits in language analysis: say what the word means, then what it suggests.",
    tip: 'Pair it with connotation: start with what a word literally denotes, then explain what it connotes and why the writer chose it.',
  },
  Allegory: {
    why: 'An allegory is a story with a second, hidden meaning, usually moral or political. Animal Farm is an allegory: on the surface it is about animals taking over a farm, but it is really about the Russian Revolution and how its ideals were betrayed.',
    not: {
      'A single object that stands for a larger idea':
        'That is a symbol. An allegory is a whole story in which characters and events stand for something else.',
      'A comic imitation that mocks another writer’s style':
        'That is a parody, which imitates a text to mock it. An allegory tells a story with a second, hidden meaning.',
      'A short, true story told to illustrate a point':
        'That is an anecdote, a true story used as an example. An allegory is invented, and its whole plot carries a second meaning.',
    },
    more: "Allegory comes from the Greek for 'speaking otherwise'. In an allegory, characters often stand for ideas or real people: in Animal Farm, the pig Napoleon represents Stalin.",
    tip: "Use it to show you understand a text's deeper purpose: 'As an allegory, Orwell's novella warns readers how power can corrupt revolutionary ideals.'",
  },
  Soliloquy: {
    why: "A soliloquy is a speech in which a character, alone on stage, speaks their thoughts aloud, so the audience hears what they really think. In Act 2 Scene 1 of Macbeth, the dagger soliloquy reveals Macbeth's troubled mind just before he kills Duncan.",
    not: {
      'A brief remark to the audience that others on stage cannot hear':
        'That is an aside, a short remark made while other characters are present. A soliloquy is a longer speech made when the character is alone.',
      'A long speech that one character delivers to the others listening on stage':
        'That is a monologue, which has listeners on stage. In a soliloquy nobody else is there to hear: the character thinks aloud.',
      'A back-and-forth conversation between two stage characters':
        'That is dialogue. A soliloquy is spoken by one character alone, with no one on stage to answer.',
    },
    more: "The word comes from the Latin solus, 'alone', and loqui, 'to speak'. A soliloquy differs from a monologue, which can be addressed to other characters, and from an aside, a brief remark to the audience.",
    tip: "Explain why a soliloquy matters: 'The soliloquy lets the audience see Macbeth's private doubts, which he hides from everyone else on stage.'",
  },
  Anachronism: {
    why: 'An anachronism is something that belongs to the wrong time. In Julius Caesar, set in ancient Rome, a clock strikes three in Act 2 Scene 1, but striking clocks had not been invented then.',
    not: {
      'A phrase repeated for emphasis throughout a text':
        'That is a refrain or repetition. An anachronism is about something being in the wrong time period.',
      'A newly invented word that is not yet in common use':
        'That is a neologism. An anachronism is anything, a word, object or idea, placed in a period where it does not belong.',
      'A particular type of stanza used in lyric poetry':
        'That would be a stanza form, such as a quatrain. An anachronism has nothing to do with poetic form.',
    },
    more: "The word comes from the Greek ana, 'against', and khronos, 'time'. Some anachronisms are mistakes; others are deliberate, used for humour or to link the past with the writer's own time. A custom that seems out of date can also be called an anachronism.",
    tip: "Explain the effect, not just the error: 'The anachronistic clock may remind Shakespeare's audience that the play speaks to their own time as well as Caesar's.'",
  },
  Catharsis: {
    why: "Catharsis is the release of strong emotions, such as pity and fear, that an audience feels through art. At the end of a tragedy like Romeo and Juliet, the audience's built-up grief and tension are released, leaving them moved but somehow relieved.",
    not: {
      'The highest point of tension in a narrative arc':
        'That is the climax. Catharsis is what the audience feels afterwards, when the emotion built by the story is released.',
      'A type of irony where outcomes contradict expectations':
        'That is situational irony. Catharsis is an emotional release, not a twist in events.',
      'A persuasive technique that appeals to logic':
        'That is logos, an appeal to reason. Catharsis is about emotion, felt through art or drama.',
    },
    more: "Katharsis is Greek for 'cleansing' or 'purging'. Aristotle used it in his Poetics to explain why audiences value tragedy: feeling pity and fear in the theatre purges those emotions.",
    tip: "Use it about endings: 'The deaths of the lovers end the feud and bring catharsis, so the audience leaves with grief and a sense of resolution.'",
  },
  Duality: {
    why: 'Duality is having two contrasting sides or qualities within one thing or person. In Jekyll and Hyde, Stevenson explores the duality of human nature: the respectable Dr Jekyll and the violent Mr Hyde are two sides of the same man.',
    not: {
      'Having mixed or uncertain feelings about a person or idea':
        'That is ambivalence, mixed feelings. Duality means having two contrasting sides or natures, as Jekyll and Hyde do.',
      'A ghostly double or lookalike of a person who is still alive':
        "That is a doppelganger. Hyde is sometimes called Jekyll's double, but duality is the state of having two sides, not a ghostly lookalike.",
      'A character whose qualities contrast with another character’s':
        'That is a foil, a separate character who sets another off. Duality describes two contrasting sides within one person or thing.',
    },
    more: "Duality comes from the Latin dualis, 'containing two'. Victorian readers were fascinated by the idea of a hidden second self behind a respectable public face, which helped make Jekyll and Hyde a bestseller.",
    tip: "Use it to discuss character and theme: 'Stevenson presents the duality of man, suggesting that everyone hides a darker self beneath respectability.'",
  },
  Hubris: {
    why: 'Hubris is excessive pride or self-confidence that leads to a fall. Victor Frankenstein shows hubris when he sets out to create life itself, believing he can master nature; his creation goes on to destroy his family and friends.',
    not: {
      'The punishment or rival that brings about a proud hero’s downfall':
        'That is nemesis, the punishment that follows. Hubris is the pride that causes the fall; nemesis is what delivers it.',
      'A strong desire to gain power, success or high status':
        'That is ambition. Ambition can lead to hubris, but hubris is excessive pride: believing you are above the limits others must accept.',
      'Deep regret and guilt for a wrong one has committed':
        'That is remorse, which looks back with regret. Hubris is the overconfidence that comes before the fall.',
    },
    more: "In ancient Greek tragedy, hubris (Greek hybris) was pride that challenged the gods, and it was punished by nemesis, a downfall. The idea lives on in the saying 'pride comes before a fall'.",
    tip: "Use it about tragic heroes: 'Victor's hubris drives him to overreach, and Shelley shows the terrible cost of trying to play God.'",
  },
  Motif: {
    why: 'A motif is an image, idea or object that keeps coming back in a text and carries symbolic meaning. In Macbeth, blood is a motif: it appears again and again, first as a sign of bravery in battle and later as a sign of guilt.',
    not: {
      'The central idea or message that a text explores':
        'That is a theme. A motif is the repeated image or object that develops a theme, as blood develops guilt in Macbeth.',
      'The most important character in a given narrative':
        'That is the protagonist. A motif is a recurring image or idea, not a character.',
      'The time and place in which a story is set':
        'That is the setting. A setting can hold a motif, but a motif is something that keeps coming back, such as an image or object.',
    },
    more: 'The word comes from French and is also used in music and art for a repeated pattern. A motif differs from a theme: the theme is the big idea, such as guilt, and the motif is the repeated image that develops it, such as blood.',
    tip: "Track a motif across the text: 'The motif of blood develops from honour in Act 1 to guilt in Act 5, mirroring Macbeth's moral decline.'",
  },
  Polemical: {
    why: 'Polemical writing attacks an idea, person or policy forcefully and is meant to provoke debate. A newspaper column that fiercely condemns a government decision, with no attempt at balance, is polemical.',
    not: {
      'Quietly reflective and gently introspective':
        'That is contemplative or reflective. Polemical writing is loud and combative, not quiet.',
      'Humorous and light-hearted in approach':
        'That is comic or light-hearted. Polemical writing can use satire, but its aim is a serious attack.',
      'Carefully balanced between both sides':
        'That is even-handed writing. Polemical writing takes one side and attacks the other.',
    },
    more: "It comes from the Greek polemos, 'war', so a polemic is an argument fought like a battle. The noun is polemic, and a writer of polemics is a polemicist.",
    tip: "Use it to describe tone in non-fiction: 'The writer adopts a polemical tone, using emotive language to attack the policy rather than weigh both sides.'",
  },
  Semantic: {
    why: "Semantic means relating to meaning in language. A semantic field is a group of words linked by meaning: 'battle', 'wounded' and 'surrender' all belong to the semantic field of war.",
    not: {
      'Relating to the sound of language':
        'That would be phonetic or phonological. Semantic is about what words mean, not how they sound.',
      'Relating to the rules of grammar':
        'That would be grammatical or syntactic. Semantic is about meaning, not sentence rules.',
      'Relating to the spelling of words':
        'That would be orthographic. Semantic is about meaning, whatever the spelling.',
    },
    more: "It comes from the Greek sema, 'sign'. Semantics is the study of meaning. Writers build semantic fields to create a mood: a love poem full of words about prisons and chains suggests that love feels like a trap.",
    tip: "Use it to group evidence: 'The writer builds a semantic field of violence, which presents love as dangerous.' One point can then link several quotations.",
  },
  Pejorative: {
    why: "A pejorative word expresses contempt or disapproval. 'Childish' is pejorative: it criticises someone for behaving like a child. 'Childlike' has a similar literal meaning but suggests innocence, so it is not pejorative.",
    not: {
      'Expressing admiration or respect':
        'That is approving or complimentary language, the opposite of pejorative.',
      'Completely neutral in tone':
        'Neutral words carry no judgement. Pejorative words carry a negative one.',
      'Softening something harsh or unpleasant':
        'That is euphemistic language, which makes things sound milder. A pejorative word does the reverse: it makes something sound worse.',
    },
    more: "It comes from the Latin pejor, 'worse'. Many words become pejorative over time: 'silly' once meant blessed or happy.",
    tip: "Name it in analysis: describing protesters as a 'mob' rather than a 'crowd' is pejorative, and it reveals the writer's hostility.",
  },
  Hyperbolic: {
    why: "Hyperbolic means deliberately exaggerated for effect, not meant to be taken literally. 'I've told you a million times' is hyperbolic: the speaker is not counting, but showing frustration.",
    not: {
      'Understated and deliberately subtle':
        'That is understatement, the opposite. Hyperbolic language makes things sound bigger, not smaller.',
      'Completely accurate and factual':
        'Hyperbole is inaccurate on purpose. Its exaggeration is a device, not a fact.',
      'Comparing one thing directly to another':
        'That is metaphor. A metaphor can exaggerate, but hyperbolic means overstated: making something sound bigger, worse or more than it is.',
    },
    more: "It is the adjective from hyperbole (hy-PER-bo-lee), from the Greek for 'throwing beyond'. Hyperbole can create humour, show strong emotion or make an argument seem urgent.",
    tip: 'Do not just spot it: explain why the writer exaggerates, for example to convey frustration, excitement or urgency.',
  },
  Evocative: {
    why: "Evocative means bringing strong images, memories or feelings into the reader's mind. The smell of bonfire smoke can be evocative of autumn, and an evocative description makes readers feel they are really there.",
    not: {
      'Extremely difficult to understand on first reading':
        'That would be obscure or difficult. Evocative writing is vivid and easy to picture.',
      'Deliberately stirring up anger, debate or a strong reaction':
        'That is provocative, a word that sounds similar. Provocative writing sets out to provoke; evocative writing calls up images, memories and feelings.',
      'Short and factual, giving the reader little detail':
        'That would be terse or sparse. Evocative writing is rich in sensory detail and feeling.',
    },
    more: "It comes from the Latin evocare, 'to call out'. The verb is evoke: a writer evokes a mood, a memory or a place.",
    tip: "Use it as a precise alternative to 'describes': 'The writer evokes a sense of loneliness' sounds more analytical than 'shows that he is lonely'.",
  },
  Colloquial: {
    why: "Colloquial language is informal, the kind used in everyday conversation. Words and phrases such as 'gonna', 'kids' and 'a bit of a mess' are colloquial.",
    not: {
      'Extremely formal language used in legal writing':
        'That is formal or legal language, the opposite of colloquial.',
      'Old English vocabulary used in early literature':
        'That would be archaic language. Colloquial language is current, everyday speech.',
      'Technical terminology used in scientific writing':
        'That is jargon or technical language. Colloquial language is ordinary and informal.',
    },
    more: "It comes from the Latin colloquium, 'conversation'. A colloquial word or phrase is a colloquialism. Writers use colloquial language to sound friendly, to make a character's voice realistic or to connect with a young audience.",
    tip: "Use it to analyse voice: 'The colloquial tone makes the writer sound approachable.' In your own formal essays, avoid colloquial words unless you are quoting.",
  },
  Syntax: {
    why: "Syntax is the way words and phrases are arranged in a sentence. 'Down the hill ran the boy' and 'The boy ran down the hill' use the same words, but the different syntax changes where the emphasis falls.",
    not: {
      'The meaning of the individual words in a sentence':
        'That is semantics. Syntax is about word order and sentence structure.',
      'The sound and rhythm that words make when spoken aloud':
        'Syntax can shape sound and rhythm, but syntax itself is the order and structure of the words.',
      'The spelling and lettering of words in a sentence':
        'That is spelling, or orthography. Syntax is about how words are arranged.',
    },
    more: "It comes from the Greek suntaxis, 'arrangement'. Writers vary syntax for effect: inverting word order, repeating structures or using fragments to create shock or emphasis.",
    tip: "Comment on syntax precisely: 'The inverted syntax delays the subject, building suspense.' This shows more skill than simply saying a sentence is long or short.",
  },
  Rhetoric: {
    why: 'Rhetoric is the art of persuasive speaking or writing. Rhetorical devices such as rhetorical questions, the rule of three and direct address help a speaker win over an audience, as in a political speech or a persuasive article.',
    not: {
      'The systematic study of grammatical rules':
        'That is grammar. Rhetoric is about persuading people, not about grammatical rules.',
      'A type of poem with a regular rhyme scheme':
        'That would be a form such as a ballad or sonnet. Rhetoric is a skill used in speeches and arguments.',
      'A dramatic monologue performed on stage':
        'That is a monologue. A monologue can use rhetoric, but rhetoric is the art of persuasion itself.',
    },
    more: "It comes from the Greek rhetor, 'public speaker'. Rhetoric was taught for centuries as a key subject. Today the word can also be negative, as in 'empty rhetoric': fine words with no action behind them.",
    tip: 'In writing tasks, plan rhetorical devices deliberately: open with a rhetorical question, use a rule of three and end with a direct appeal to the reader.',
  },
  Visceral: {
    why: "Visceral describes deep, instinctive feelings, felt in the body rather than reasoned out. Owen's description of a gassed soldier in Dulce et Decorum Est provokes a visceral reaction: readers feel horror and disgust before they think.",
    not: {
      'Relating to vision and the way that things appear to the eye':
        'That is visual. The words look alike, but visceral is about gut feelings, not sight.',
      'Intellectual and reasoned rather than emotional':
        'That is cerebral or rational, the opposite. A visceral response comes before reasoning.',
      'Abstract and vague rather than physical or concrete':
        'That is abstract. Visceral writing is concrete and physical, which is why it hits so hard.',
    },
    more: "It comes from the Latin viscera, the body's internal organs, so a visceral feeling is literally a gut feeling. Writers create visceral effects with graphic, physical detail.",
    tip: "Use it to describe a strong reader response: 'The graphic imagery provokes a visceral reaction, forcing readers to confront the reality of war.'",
  },
  Exposition: {
    why: 'Exposition is the part of a story, usually at the start, that introduces the characters, setting and background the reader needs. A Christmas Carol opens with exposition: in Stave One we learn that Marley is dead and meet Scrooge, cold and miserly.',
    not: {
      'The point of greatest tension, where the conflict comes to a head':
        'That is the climax, which comes much later. Exposition sets the scene at the start.',
      'The final part of a story, where loose ends are tied up':
        'That is the denouement or resolution. Exposition comes at the beginning.',
      'A struggle between two opposing forces that drives the plot':
        'That is conflict. Exposition may hint at conflict, but its job is to give background.',
    },
    more: "It comes from the Latin exponere, 'to set out'. Exposition is the first stage of the classic plot pyramid: exposition, rising action, climax, falling action and resolution.",
    tip: 'In structure questions, comment on how the exposition hooks the reader, for example by introducing a mystery or a striking character straight away.',
  },
  Denouement: {
    why: "The denouement is the final part of a story, where the plot's threads are tied up and the outcome is revealed. In A Christmas Carol, Stave Five is the denouement: Scrooge wakes a changed man and puts right what he can.",
    not: {
      'The opening scene that introduces the setting':
        'That is the exposition, at the start. The denouement comes at the end.',
      'A point of rising tension before the climax':
        'That is rising action. The denouement comes after the climax, when tension is released.',
      'A secondary plot running alongside the main one':
        'That is a subplot. The denouement resolves the main plot and any subplots.',
    },
    more: "It is French for 'untying', as in untying a knot: the tangled plot is loosened and resolved. In English it is pronounced day-NOO-mon.",
    tip: "Use it in structure answers: 'In the denouement, Dickens shows Scrooge's transformation, reinforcing his message about generosity.'",
  },
  Euphemism: {
    why: "A euphemism is a mild or polite expression used in place of one that seems harsh or upsetting. Saying someone has 'passed away' instead of 'died' is a euphemism.",
    not: {
      'A deliberate exaggeration used to make a point more forcefully':
        'That is hyperbole, which makes things bigger. A euphemism softens them.',
      'A blunt word or phrase used to shock or offend the listener':
        'That is the reverse, sometimes called a dysphemism. A euphemism replaces a harsh word with a gentler one.',
      'Saying the opposite of what you mean, usually to mock someone':
        'That is sarcasm. A euphemism softens the meaning but does not reverse it.',
    },
    more: "It comes from the Greek eu, 'well', and pheme, 'speaking'. Euphemisms can be kind, but they can also hide the truth, as when 'collateral damage' is used for civilian deaths in war.",
    tip: "In analysis, ask what a euphemism hides: if workers were 'let go', explain how the softer phrase disguises how harsh losing a job really is.",
  },
  Analepsis: {
    why: "Analepsis is the technical term for a flashback: the story jumps back to an earlier time. In Stave Two of A Christmas Carol, the Ghost of Christmas Past takes Scrooge back to his lonely schooldays and his time as Fezziwig's apprentice.",
    not: {
      'A sudden jump forward in time to show a future event':
        'That is prolepsis, or a flash-forward, which goes the other way in time.',
      'A deliberate pause in the flow of the narrative':
        'A flashback does interrupt the story, but analepsis means going back in time, not simply pausing.',
      'A change in the perspective of the narrator':
        'That is a shift in point of view. Analepsis changes the time, not the narrator.',
    },
    more: "It comes from the Greek for 'taking back'. Flashbacks explain how characters became who they are: Scrooge's past helps the reader understand, and even pity, the bitter old man.",
    tip: "Use the term in structure answers: 'The analepsis reveals Scrooge's lonely childhood, which encourages the reader to sympathise with him.'",
  },
  Prolepsis: {
    why: 'Prolepsis is a flash-forward: the story jumps ahead to show something that will, or might, happen later. In Stave Four of A Christmas Carol, the Ghost of Christmas Yet to Come shows Scrooge a future after his own death.',
    not: {
      'A flashback to an event that happened in earlier times':
        'That is analepsis, which goes back in time. Prolepsis goes forward.',
      'A dream sequence revealing a character’s mind':
        'A dream may show the future, but prolepsis is any jump forward in time, dream or not.',
      'A secondary plot running beside the main story':
        'That is a subplot. Prolepsis is a jump in time within the narrative.',
    },
    more: "It comes from the Greek for 'taking beforehand'. Prolepsis can create dread or suspense: once readers glimpse what is coming, they read on to see how, or whether, it happens.",
    tip: "Use it to discuss structure and tension: 'The prolepsis in Stave Four warns Scrooge, and the reader, of the consequences of selfishness.'",
  },
  Verisimilitude: {
    why: 'Verisimilitude is the quality of seeming true or real. Realistic details, such as real place names, believable dialogue and ordinary routines, give a story verisimilitude, so readers accept even strange events within it.',
    not: {
      'The writer’s honesty about their own life':
        'That would be candour or sincerity. Verisimilitude is about seeming real, and a wholly invented story can have it.',
      'A close likeness between two similar things':
        "That is similarity. The word contains the Latin similis, 'like', but it means like the truth, not like each other.",
      'Something that is obviously a fantasy':
        'That is the opposite. Verisimilitude makes writing feel real, even when it is invented.',
    },
    more: "It comes from the Latin verisimilis, 'like the truth', from verus, 'true', and similis, 'like'. In Jekyll and Hyde, letters, documents and witness statements make an impossible story feel credible.",
    tip: "Use it when evaluating realism: 'Stevenson builds verisimilitude through first-hand accounts, so the reader believes the impossible transformation.'",
  },
  Hamartia: {
    why: "Hamartia is a tragic hero's fatal flaw or error of judgement, the weakness that leads to their downfall. Macbeth's hamartia is often said to be his ambition: it drives him to murder and, in the end, destroys him.",
    not: {
      'The audience’s release of pity and fear at the end':
        'That is catharsis, what the audience feels. Hamartia belongs to the hero: the flaw or error that starts the fall.',
      'The force of punishment that brings a hero down':
        "That is nemesis, the punishment. Hamartia is the hero's own flaw or mistake, which brings the punishment on.",
      'A sudden reversal in a hero’s fortunes':
        'That is a reversal of fortune, which Aristotle called peripeteia. Hamartia is the flaw or error that causes it.',
    },
    more: "Aristotle used the Greek word, which means 'missing the mark' or 'error'. Some critics prefer 'error of judgement' to 'flaw': Othello's hamartia could be his jealousy or his mistaken trust in Iago.",
    tip: "Link hamartia to tragic structure: 'Macbeth's ambition is his hamartia, and Shakespeare shows how one flaw can bring down a great man.'",
  },
  Polysyllabic: {
    why: "A polysyllabic word has many syllables. 'Responsibility' (re-spon-si-bil-i-ty) is polysyllabic, while 'cat' and 'dog' are monosyllabic.",
    not: {
      'Having only one syllable': 'That is monosyllabic. Poly means many; mono means one.',
      'Having just two syllables': 'That is disyllabic. Di means two; poly means many.',
      'Rhyming on two syllables':
        "That is a two-syllable rhyme, as in 'mother' and 'brother'. Polysyllabic counts a word's syllables and says nothing about rhyme.",
    },
    more: "Poly comes from the Greek for 'many', as in polygon. Writers choose polysyllabic words to sound formal, educated or pompous, and monosyllabic words to sound blunt, simple or forceful.",
    tip: "Analyse word choice through syllables: 'His polysyllabic vocabulary makes him sound pompous', or 'The monosyllables create a blunt, urgent rhythm.'",
  },
  Imperious: {
    why: "Imperious describes someone arrogant and domineering, who expects to be obeyed. In Pride and Prejudice, Lady Catherine de Bourgh is imperious: she gives orders, interferes in other people's affairs and expects everyone to do as she says.",
    not: {
      'Relating to an empire or an emperor':
        "That is imperial. The two words share a Latin root, but imperious describes a person's commanding, arrogant manner.",
      'Unaffected and unmoved by any criticism':
        'That is impervious. An imperious person may well ignore criticism, but the word describes arrogance and a love of command.',
      'Acting quickly without thinking first':
        'That is impetuous, acting rashly. Imperious describes someone proud and domineering, who expects to be obeyed.',
    },
    more: "It comes from the Latin imperium, 'command' or 'empire', the same root as emperor and imperial. An imperious person behaves as though they were an emperor.",
    tip: "Use it to describe tone or manner precisely: 'Her imperious tone suggests she believes her class gives her the right to command others.'",
  },
  Avarice: {
    why: 'Avarice is extreme greed for money or possessions. At the start of A Christmas Carol, Scrooge is a picture of avarice: he hoards his wealth, pays Bob Cratchit little and refuses to give to charity.',
    not: {
      'Resentful longing for what another person has':
        'That is envy. Envy resents what others have; avarice is greed to gain and keep wealth for oneself.',
      'Greedy overindulgence in food and drink':
        'That is gluttony, another of the seven deadly sins. Avarice is greed for money and possessions, not food.',
      'Great generosity towards people in need':
        'That is the opposite, as Scrooge shows at the end of the novella.',
    },
    more: "It comes from the Latin avarus, 'greedy'. Avarice, or greed, is one of the seven deadly sins. The adjective is avaricious.",
    tip: "Use the adjective in essays: 'Dickens presents the avaricious Scrooge as a warning to readers who value money over people.'",
  },
  Austere: {
    why: 'Austere means severe or strict, and often plain, without comfort or decoration. A bare, cold room with hard chairs is austere, and so is a stern teacher who never smiles.',
    not: {
      'Warm, relaxed and friendly in manner': 'That is genial or warm, the opposite of austere.',
      'Richly decorated with ornaments and colour':
        'That is ornate, the opposite. Austere places are plain and bare.',
      'Light-hearted and playful in tone':
        'That is jocular or playful. Austere describes seriousness and strictness.',
    },
    more: "It comes from the Greek austeros, 'harsh' or 'severe'. The noun austerity can also mean a time when a government cuts spending and people must live with less.",
    tip: "Use it for settings and characters: 'The austere schoolroom, with its bare walls and hard benches, reflects the cold, strict regime.'",
  },
  Benevolent: {
    why: 'Benevolent means kind and well-meaning towards others. In Stave Two of A Christmas Carol, Fezziwig is a benevolent employer who throws a joyful Christmas party for his workers, in contrast to Scrooge.',
    not: {
      'Cruel and wishing harm on other people':
        "That is malevolent, the opposite. Bene means 'well' and male means 'badly'.",
      'Indifferent and emotionally cold':
        'That is callous or aloof. A benevolent person actively cares about others.',
      'Secretive and cunning by nature':
        'That is sly or devious. Benevolent people are open in their kindness.',
    },
    more: "It comes from the Latin bene, 'well', and volens, 'wishing', so it literally means 'wishing well'. Its opposite is malevolent, 'wishing ill'.",
    tip: "Use it to contrast characters: 'Fezziwig's benevolent treatment of his workers shows Scrooge, and the reader, how an employer should behave.'",
  },
  Insidious: {
    why: 'Insidious describes something harmful that spreads gradually and quietly, so it is not noticed until it is too late. A disease that develops without symptoms, or a rumour that slowly poisons a friendship, is insidious.',
    not: {
      'Loudly and openly causing great damage':
        'That is blatant, the opposite. Insidious harm is hidden and quiet.',
      'Unfair and likely to cause resentment':
        'That is invidious, a word that sounds similar. Insidious describes harm that spreads slowly and unseen.',
      'Quickly causing harm that soon fades away':
        'Insidious things work slowly and do lasting damage.',
    },
    more: "It comes from the Latin insidiae, 'an ambush'. Like an ambush, an insidious danger catches people off guard. Writers use the word for ideas, influences or illnesses that do damage before anyone notices.",
    tip: "Use it in analysis of influence: 'Iago's insidious hints gradually poison Othello's trust in Desdemona.'",
  },
  Denounce: {
    why: 'To denounce something is to declare publicly that it is wrong or evil. A head teacher might denounce bullying in an assembly, or a newspaper might denounce a corrupt politician.',
    not: {
      'To quietly agree without raising any objection':
        'That is to acquiesce. Denouncing is loud, public disagreement.',
      'To offer praise publicly to draw attention':
        'That is to praise or commend, the opposite of denounce.',
      'To ignore something completely without comment':
        'That is to disregard. Denouncing means speaking out strongly against something.',
    },
    more: "It comes, through French, from the Latin denuntiare, 'to announce officially'. The noun is denunciation. People can also be denounced, meaning they are publicly accused, sometimes to the authorities.",
    tip: "Use it as a strong verb in analysis: 'Priestley uses the Inspector to denounce the selfishness of the wealthy.'",
  },
  Foreboding: {
    why: 'Foreboding is a feeling that something bad is going to happen. In Act 1 Scene 4 of Romeo and Juliet, Romeo feels foreboding before the Capulet party, fearing the night will set off events that end in his early death.',
    not: {
      'A feeling of great joy and rising excitement':
        'That is excitement or anticipation. Foreboding is a dark feeling of dread.',
      'A peaceful sense of calm and quiet contentment':
        'That is serenity. Foreboding is uneasy, not calm.',
      'A sudden memory of something that happened long ago':
        'That is a memory or flashback. Foreboding looks forward, not back.',
    },
    more: "It comes from fore, 'before', and bode, an old word meaning 'to announce'. Writers create foreboding with ominous settings, warnings and prophecies, which also foreshadow events.",
    tip: "Use it to describe atmosphere: 'The opening creates a sense of foreboding, preparing the audience for tragedy.'",
  },
  Microcosm: {
    why: "A microcosm is a small world that represents something much larger. In An Inspector Calls, the Birling family can be read as a microcosm of the comfortable middle class, so the Inspector's judgement of them becomes a judgement of their whole class.",
    not: {
      'An extremely large version of something much smaller':
        'That is the reverse. Micro means small: a microcosm is a small version that stands for something larger.',
      'An instrument used for viewing very tiny objects':
        "That is a microscope. The words share micro, 'small', but a microcosm is a small world, not an instrument.",
      'A small detail that has no wider significance at all':
        'A microcosm matters precisely because it stands for something larger. A detail that means nothing beyond itself is not one.',
    },
    more: "It comes from the Greek mikros kosmos, 'little world'. The island in Lord of the Flies is often read as a microcosm of human society.",
    tip: "Use it to link a setting to wider society: 'The house acts as a microcosm of Edwardian society, with its divisions of class and gender.'",
  },
  Subversive: {
    why: 'Subversive describes something that tries to undermine or overturn an established system, institution or authority. A novel that mocks the people in power, or a poem that questions the glory of war, can be called subversive.',
    not: {
      'Strongly supporting the existing order and those in power':
        'That is conformist, the opposite. Subversive ideas challenge the status quo.',
      'Lacking any clear opinion either way on the matter':
        'Subversive writing takes a clear and challenging position; it does not lack an opinion.',
      'Mocking a writer’s style in a light-hearted way':
        'That is parody. A parody can be subversive, but subversive names an aim: to weaken an established system or authority.',
    },
    more: "It comes from the Latin subvertere, 'to overturn'. The verb is subvert, and writers can also subvert expectations, for example by making a villain sympathetic or ending a fairy tale unhappily.",
    tip: "Use 'subvert' in analysis: 'The poet subverts the traditional image of war as heroic, revealing its horror instead.'",
  },
  Didacticism: {
    why: "Didacticism is the practice of using literature to teach, especially moral lessons. A Christmas Carol is a famous example: Dickens shapes Scrooge's story to teach readers about generosity and their duty to the poor.",
    not: {
      'The practice of writing entirely without any message':
        "That is close to the idea of 'art for art's sake', the opposite view. Didacticism always has a lesson to teach.",
      'The practice of mocking people’s faults to correct them':
        'That is satire. Satire can teach by mocking, but didacticism means instructing the reader directly, often in a moral lesson.',
      'The deliberate use of regional dialect in writing':
        'That is dialect writing. Didacticism is about moral instruction, whatever language is used.',
    },
    more: "It is the noun from didactic, from the Greek didaskein, 'to teach'. Morality plays and fables are didactic forms, and critics often read An Inspector Calls as a modern morality play.",
    tip: "Use it to discuss a writer's purpose: 'The didacticism of the ending leaves the audience in no doubt about Priestley's message.'",
  },
  Sycophantic: {
    why: 'Sycophantic describes someone who flatters powerful people to gain an advantage. In Pride and Prejudice, Mr Collins is sycophantic towards his patron, Lady Catherine de Bourgh, praising her endlessly to stay in her favour.',
    not: {
      'Arrogant and boastful about one’s own success':
        'That is conceited. A sycophant puts powerful people first, praising them to win their favour.',
      'Rude and openly disrespectful to superiors':
        'That is insolent, the opposite. Sycophants flatter people in power rather than defying them.',
      'Honest and direct even with powerful people':
        'Sycophants say what powerful people want to hear, not what they honestly think.',
    },
    more: "A sycophant is a flatterer. The word came from Greek, where it meant an informer, and its meaning shifted over time. An informal word with a similar meaning is 'crawler'.",
    tip: "Use it to analyse a character's relationships: 'His sycophantic speech reveals how much he values status over sincerity.'",
  },
  Ephemeral: {
    why: 'Ephemeral means lasting only a very short time. A soap bubble, a sunset or a social media trend is ephemeral: here one moment and gone the next.',
    not: {
      'Lasting forever and never fading away':
        'That is eternal or permanent, the opposite of ephemeral.',
      'Delicate, light and heavenly in quality':
        'That is ethereal, a word that sounds similar. Ephemeral is about time: something that lasts only briefly.',
      'Difficult to understand or interpret':
        'That is obscure or enigmatic. Ephemeral describes how briefly something lasts.',
    },
    more: "It comes from the Greek ephemeros, 'lasting only a day'. Poets often explore ephemeral things, such as beauty, youth and life itself, to remind readers that nothing lasts.",
    tip: "Use it in poetry analysis: 'The poet presents beauty as ephemeral, which makes the speaker's love seem all the more precious.'",
  },
  Magnanimous: {
    why: 'Magnanimous means generous or forgiving, especially towards a rival or someone who has wronged you. A captain who praises the other team after a defeat, or a winner who shares the credit, is being magnanimous.',
    not: {
      'Petty and spiteful towards people who have wronged you':
        'That is petty or vindictive, the opposite of magnanimous.',
      'Agreed on by every single person involved':
        'That is unanimous, which sounds similar. Magnanimous describes a generous, forgiving spirit.',
      'Impressively large in size or importance':
        "Magnus does mean 'great', but here it is a great soul. Magnanimous describes generosity of character, not size.",
    },
    more: "It comes from the Latin magnus, 'great', and animus, 'soul' or 'mind': a magnanimous person has a great spirit. Someone 'magnanimous in victory' wins without gloating.",
    tip: "Use it to evaluate a character's growth: 'His magnanimous forgiveness at the end shows how far he has changed.'",
  },
  Sardonic: {
    why: 'Sardonic describes grimly mocking or cynical humour, often with a scornful smile. A sardonic remark makes fun of something in a bitter way, suggesting the speaker expects little from the world.',
    not: {
      'Genuinely cheerful and warm-hearted':
        'That is genial, the opposite. Sardonic humour is cold and mocking.',
      'Deeply romantic, loving and tender':
        'That is tender or affectionate. Sardonic speakers are scornful, not loving.',
      'Gently teasing in an affectionate way':
        'That is playful teasing, which is warm. Sardonic humour is cold and scornful, with a bitter edge.',
    },
    more: "The word is said to come from a Greek name for a plant from Sardinia that twisted people's faces into a grim smile. It is close to sarcastic, but sardonic is drier and more bitter.",
    tip: "Use it to describe tone: 'The narrator's sardonic comments expose the hypocrisy of the wealthy characters.'",
  },
  Melancholic: {
    why: 'Melancholic means feeling or expressing a deep, thoughtful sadness. A melancholic poem dwells on loss or the passing of time, and a melancholic character seems quietly sad and reflective.',
    not: {
      'Extremely excited and enthusiastic': 'That is exuberant, the opposite of melancholic.',
      'Angry, volatile, and short-tempered':
        'That temperament was called choleric. Melancholic people are sad, not angry.',
      'Calm, unemotional and very hard to excite':
        'That temperament was called phlegmatic. Melancholic people are sad and thoughtful, not unmoved.',
    },
    more: "It comes from the Greek for 'black bile'. Medieval doctors believed four bodily humours shaped personality: black bile made people melancholic, yellow bile choleric, blood sanguine and phlegm phlegmatic.",
    tip: "Use it to describe mood and tone: 'The melancholic tone of the final stanza reflects the speaker's grief.'",
  },
  Pragmatic: {
    why: "Pragmatic means dealing with problems in a sensible, realistic way, based on what will actually work. A pragmatic person asks 'What can be done?' rather than 'What would be perfect?'",
    not: {
      'Guided by ideals rather than by what is practical':
        'That is idealistic, the opposite. Pragmatic people focus on what will actually work.',
      'Driven by feelings rather than by careful thought':
        'Pragmatic decisions are calm and reasoned, not driven by emotion.',
      'Interested in theories rather than real situations':
        'That is theoretical. Pragmatic thinking is practical and grounded in real situations.',
    },
    more: "It comes from the Greek pragma, 'deed' or 'act'. The noun is pragmatism. Being pragmatic can be a strength, but it can also suggest someone willing to drop their principles to get results.",
    tip: "Use it to contrast characters: 'Where Juliet is passionate, the Nurse is pragmatic, advising her to marry Paris.'",
  },
  Utilitarian: {
    why: 'Utilitarian means designed to be useful and practical rather than attractive. A plain metal filing cabinet or a concrete bus shelter is utilitarian: it does its job, with no decoration.',
    not: {
      'Made purely to look beautiful or decorative':
        'That is ornamental, the opposite. Utilitarian things are made to be used.',
      'Expensive, luxurious and made to impress visitors':
        'That is lavish or luxurious. Utilitarian objects are usually plain and functional.',
      'Old-fashioned and no longer fit for use':
        'That is obsolete. A utilitarian object may be old, but the word means made for use, and it still does its job.',
    },
    more: "It comes from utility, 'usefulness'. Utilitarianism is also a philosophy: the right action is the one that brings the greatest happiness to the greatest number. Dickens mocks a narrow, facts-only version of it in Hard Times.",
    tip: "Use it to describe settings: 'The utilitarian furniture suggests a household where comfort and beauty have no place.'",
  },
  Sanguine: {
    why: 'Sanguine means optimistic and positive, especially when things look difficult. Someone who stays sanguine about their exams after a bad mock believes things will turn out well.',
    not: {
      'Extremely pessimistic and always expecting the worst':
        'That is the opposite. A sanguine person expects the best.',
      'Deeply jealous of the success of other people':
        'That is envious. Sanguine describes hopefulness, not jealousy.',
      'Angry and bitter towards other people':
        'That is resentful. Sanguine people are cheerful and confident.',
    },
    more: "It comes from the Latin sanguis, 'blood'. In medieval medicine, people with plenty of blood among the four humours were thought to be cheerful and confident, which is how sanguine came to mean optimistic.",
    tip: "Use it to describe attitude precisely: 'Mr Birling's sanguine predictions about the future are undercut by dramatic irony.'",
  },
  Pedantic: {
    why: "Pedantic describes someone too concerned with small details or rules, especially about accuracy or learning. Correcting a friend's grammar in a casual text message, or insisting on a tiny technical point, can seem pedantic.",
    not: {
      'Dull and ordinary, showing no imagination at all':
        'That is pedestrian, a word that sounds similar. Pedantic describes fussiness about small details and rules.',
      'Relaxed and carefree about rules and small details':
        'That is the opposite. A pedant cannot let a small error pass.',
      'Immature and childish in a silly, annoying way':
        'That is puerile. Pedantic behaviour is fussy and over-precise, often showing off knowledge; it is not childish.',
    },
    more: 'It comes from pedant, from an Italian word for a schoolmaster. The noun is pedantry. It is usually a criticism: precision is good, but a pedant cares about it more than the situation needs.',
    tip: "Use it to describe a character's voice: 'His pedantic corrections make him seem fussy and self-important.'",
  },
  Antithesis: {
    why: "Antithesis is a contrast or opposition between two things, often set out in balanced phrases. Dickens's opening to A Tale of Two Cities, 'It was the best of times, it was the worst of times', is a famous antithesis.",
    not: {
      'A close similarity between two related things':
        'That is a similarity or parallel. Antithesis is about opposition, not likeness.',
      'A statement that seems absurd but may be true':
        'That is a paradox. A paradox seems to contradict itself; antithesis sets two opposite ideas against each other in balanced phrases.',
      'A dramatic pause in a line, used for emphasis':
        'That is a pause or caesura. Antithesis is a contrast of ideas.',
    },
    more: "It comes from the Greek for 'setting against'. It can also mean the direct opposite: 'Fezziwig is the antithesis of Scrooge.' The adjective is antithetical.",
    tip: "Use antithesis in persuasive writing to make a point memorable, by balancing two opposites in matching phrases: 'We can act now, or we can apologise later.'",
  },
  Reticent: {
    why: 'Reticent means not revealing your thoughts or feelings readily. A reticent character answers questions briefly and keeps their emotions hidden, so the reader has to infer what they feel.',
    not: {
      'Talkative and very open about their feelings':
        'That is talkative or garrulous, the opposite of reticent.',
      'Loud, forceful, and aggressive in speech':
        'That is aggressive or strident. Reticent people say little and keep quiet.',
      'Quick to anger and prone to outbursts':
        'That is hot-tempered. A reticent person holds feelings in rather than letting them out.',
    },
    more: "It comes from the Latin reticere, 'to keep silent'. Careful writers avoid using reticent to mean reluctant: 'reticent about her past' is right, but 'reticent to help' is widely seen as a mistake.",
    tip: "Use it in character analysis: 'Her reticent replies hint at a secret she is unwilling to share.'",
  },
  Foreshadowing: {
    why: "Foreshadowing plants early hints of what is to come. In Act 1 Scene 5 of Romeo and Juliet, Juliet says that if Romeo is married, 'My grave is like to be my wedding bed': a chilling hint of how her marriage will end.",
    not: {
      'A scene that jumps back to show an earlier event':
        'That is a flashback, which goes back in time. Foreshadowing points forward, to events still to come.',
      'The point where the tension in a story is at its peak':
        'That is the climax. Foreshadowing comes earlier and builds expectation of it.',
      'An ending that leaves the main question unanswered':
        'That is an open ending. Foreshadowing gives an ending away in advance, through hints.',
    },
    more: 'Foreshadowing builds suspense and can make an ending feel inevitable. It can be a line of dialogue, an object, the weather or a prophecy. When the ending arrives, the reader recognises the hint they were given.',
    tip: "Say what is foreshadowed and what the hint does: 'Juliet's words foreshadow her death, so the audience watches the romance knowing it leads to the tomb.'",
  },
  Ambivalent: {
    why: 'Ambivalent means having two opposite feelings about something at once. In Act 1 Scene 7, Macbeth is ambivalent about killing Duncan: he longs for the crown, yet he lists every reason not to do the deed.',
    not: {
      'Open to more than one interpretation':
        'That is ambiguous. Ambiguity belongs to meaning and ambivalence to feelings: a text can be ambiguous, but a person feels ambivalent.',
      'Showing no interest or concern at all':
        'That is indifferent. An ambivalent person cares a great deal, but in two directions at once.',
      'Passionately in favour of something':
        'That is wholehearted enthusiasm. Ambivalent feelings are divided, never simply for something.',
    },
    more: "It comes from the Latin ambi-, 'both', and valere, 'to be strong': both feelings are strong at once. The noun is ambivalence. Writers often leave endings ambivalent, so that joy and loss sit side by side.",
    tip: "Use it to show a subtle reading: 'Macbeth's ambivalence makes him more human than a simple villain, which is why his fall feels tragic.'",
  },
  Enjambment: {
    why: "Enjambment is when a sentence carries on past the end of a line without a pause. In My Last Duchess, the Duke says 'There she stands / As if alive': the sentence spills over the line break, as his talk runs on and on.",
    not: {
      'A pause in the middle of a line, marked by punctuation':
        "That is a caesura, a pause within a line. Enjambment is the opposite effect: no pause at the line's end.",
      'A pair of rhyming lines that sit next to each other':
        'That is a couplet. Enjambment is about how a sentence moves across lines, not about rhyme.',
      'A group of lines that forms one section of a poem':
        'That is a stanza. A sentence can even run from one stanza into the next, but enjambment names that movement, not the section.',
    },
    more: "It comes from the French enjamber, 'to stride over'. Enjambment can create pace, surprise or a sense of thoughts tumbling out. The opposite, a line that ends with punctuation, is called end-stopped.",
    tip: "Explain the effect of the run-on: 'The enjambment mimics the Duke's endless, controlling talk, as if no one could interrupt him.'",
  },
  Caesura: {
    why: "A caesura is a pause within a line, usually marked by punctuation. In Macbeth's 'Life’s but a walking shadow; a poor player', the semicolon makes a caesura: a heavy pause before the next bleak image.",
    not: {
      'A line that runs on into the next without a pause':
        'That is enjambment, the opposite. A caesura stops a line in the middle; enjambment lets it run on.',
      'A turn in the argument partway through a poem':
        'That is a volta, a turn in thought. A caesura is a pause, and it can come in any line.',
      'A line that is repeated at the end of each stanza':
        'That is a refrain. A caesura is a single pause inside one line.',
    },
    more: "It comes from the Latin for 'cutting': a caesura cuts a line in two. Poets use it to slow the rhythm, mark a sudden thought or create a dramatic silence.",
    tip: "Link the pause to meaning: 'The caesura halts the line, as if Macbeth needs a moment before facing how empty life has become.'",
  },
  Sibilance: {
    why: "Sibilance repeats soft, hissing 's' and 'sh' sounds. In a line such as 'the sea's slow, sighing swell', the hush of the s sounds imitates gentle waves and slows the reader down.",
    not: {
      'The repetition of harsh ‘b’, ‘p’ and ‘t’ sounds':
        'Those are plosive sounds, which burst out harshly. Sibilance is soft and hissing.',
      'The repetition of vowel sounds inside nearby words':
        "That is assonance, which repeats vowels. Sibilance repeats the consonant sounds 's' and 'sh'.",
      'Words that imitate the sounds they describe':
        "That is onomatopoeia. Sibilance can imitate a sound, such as a hiss, but it means a pattern of repeated 's' sounds.",
    },
    more: 'Sibilance can sound calm and soothing, like wind or water, or sinister, like a hiss in the dark. Context decides which: the same sound can whisper or threaten.',
    tip: 'Never stop at naming the sound: say what it suggests, such as menace, secrecy or calm, and why it suits the moment.',
  },
  Plosive: {
    why: "Plosives are the hard sounds made by stopping the air and releasing it in a burst: p, b, t, d, k and g. Repeated plosives, as in 'the big bells boomed and banged', can sound harsh, angry or violent.",
    not: {
      'A soft, hissing consonant sound, such as ‘s’ or ‘sh’':
        'That is a sibilant sound. Plosives are the opposite: hard bursts rather than a soft hiss.',
      'A vowel sound repeated inside a group of neighbouring words':
        'That is assonance, a pattern of vowels. A plosive is a consonant sound.',
      'A word that imitates the sound of the thing that it names':
        "That is onomatopoeia. A word like 'bang' is both, but plosive names how a sound is made, not what it imitates.",
    },
    more: 'The name comes from explode: the air builds up behind the lips or tongue and bursts out. Poets use plosives for anger, violence or a pounding rhythm, such as gunfire or a heartbeat.',
    tip: "Name the sound and its effect together: 'The harsh plosives in the final line make the speaker's anger almost audible.'",
  },
  Assonance: {
    why: "Assonance repeats vowel sounds in words close together, whatever the consonants around them. In 'the pale moon rose over the cold stone', the long 'o' sounds stretch the line out and give it a mournful, drawn-out feel.",
    not: {
      'The repetition of consonant sounds at the start of words':
        'That is alliteration. Assonance is about vowels, and the repeated sounds can come anywhere in the words.',
      'The repetition of a word at the start of each line':
        'That is anaphora, which repeats whole words. Assonance repeats only vowel sounds.',
      'The repetition of ‘s’ sounds to create a hissing effect':
        'That is sibilance, a consonant sound. Assonance works with vowels.',
    },
    more: "It comes from the Latin assonare, 'to answer with a sound'. Long vowels tend to slow a line and sound sad or dreamy; short ones can feel quick and clipped. Assonance also links lines, like a half-rhyme.",
    tip: 'Quote the repeated sound and explain its effect on pace or mood, rather than only naming the device.',
  },
  Volta: {
    why: 'The volta is the turn in a poem, where its argument or mood changes direction. In a sonnet it often comes after the first eight lines, after the poem has set out its first idea and before it answers or overturns it.',
    not: {
      'A pause in the middle of a line of poetry':
        "That is a caesura. A volta can follow a pause, but it is a change in the direction of the poem's thought.",
      'The two rhyming lines that end a Shakespearean sonnet':
        'That is the final couplet. In a Shakespearean sonnet the turn often comes there, but the volta is the turn, not the rhyme.',
      'The pattern of stressed beats in each line':
        'That is metre. The volta is about meaning, not rhythm.',
    },
    more: "Volta is Italian for 'turn'. In a Petrarchan sonnet the turn usually comes between the octave, the first eight lines, and the sestet, the last six. In a Shakespearean sonnet it may come there or in the final couplet.",
    tip: "Find the turn and explain what changes: 'At the volta the speaker stops pleading and begins to accept her loss.'",
  },
  'Iambic pentameter': {
    why: "Iambic pentameter is a line of ten syllables in five iambs: da-DUM, da-DUM, da-DUM, da-DUM, da-DUM. Orsino's opening line in Twelfth Night, 'If music be the food of love, play on', follows the pattern exactly.",
    not: {
      'Unrhymed lines that follow no regular rhythm or metre':
        'That is free verse. Iambic pentameter is a strict rhythm, with the same number of beats in every line.',
      'A line of four beats, each a stressed then an unstressed syllable':
        'That is trochaic tetrameter, which falls DUM-da. Iambic pentameter rises da-DUM, five times a line.',
      'A pair of rhyming lines with ten syllables in each':
        'That describes a couplet, a pair of lines. Iambic pentameter is a rhythm for a single line, whether it rhymes or not.',
    },
    more: 'An iamb is one unstressed then one stressed syllable; penta means five. The rhythm is close to natural English speech, which is why it suits drama. When Shakespeare breaks it, the change often signals disorder or strong emotion.',
    tip: 'Comment on changes to the rhythm: a broken or irregular line can show a character losing control.',
  },
  'Blank verse': {
    why: "Blank verse is unrhymed iambic pentameter, the form of most of Shakespeare's plays. Macbeth's great speeches are in blank verse: the steady rhythm gives them weight, while the lack of rhyme keeps them close to real speech.",
    not: {
      'Lines with no regular rhyme scheme or rhythm':
        'That is free verse. Blank verse has no rhyme but keeps a strict rhythm: ten syllables, five beats.',
      'Rhyming lines arranged in pairs throughout':
        "Those are rhyming couplets. 'Blank' here means without rhyme.",
      'Ordinary writing not arranged in lines':
        "That is prose. Shakespeare gives some speeches to prose, often comic or servants' scenes, but blank verse keeps lines and a regular beat.",
    },
    more: 'Shakespeare uses the switch between verse and prose to show status and state of mind. In Macbeth the Porter speaks prose, and so does Lady Macbeth when she sleepwalks, her mind breaking down.',
    tip: 'Notice when a character moves out of blank verse: the change can show madness, closeness or a drop in status.',
  },
  'Dramatic irony': {
    why: 'Dramatic irony is when the audience knows something that a character on stage does not. In Act 5 of Romeo and Juliet, the audience knows Juliet has only taken a sleeping potion, but Romeo, finding her in the tomb, believes she is dead.',
    not: {
      'When a character says the opposite of what they mean':
        'That is verbal irony, or sarcasm when it mocks. Dramatic irony depends on a gap between what the audience knows and what a character knows.',
      'When events turn out the opposite of what was expected':
        'That is situational irony. Dramatic irony is about knowledge: the audience is a step ahead of the character.',
      'When a character speaks their thoughts alone on stage':
        'That is a soliloquy. A soliloquy can create dramatic irony by telling the audience a secret, but it is a kind of speech, not the effect.',
    },
    more: 'Dramatic irony creates tension and dread: the audience wants to warn the character but cannot. It also makes confident speeches sound foolish, because the audience knows how wrong the speaker is.',
    tip: "Explain what the audience feels: 'The dramatic irony fills the scene with dread, because we know what Romeo does not.'",
  },
  'Pathetic fallacy': {
    why: "Pathetic fallacy is when weather or nature reflects human feelings or events. In Stave One of A Christmas Carol, the fog and biting cold around Scrooge's counting-house mirror the coldness of the man himself.",
    not: {
      'Giving human qualities to an object or animal':
        'That is personification. Pathetic fallacy often uses it, but the term means nature reflecting a mood, not simply human qualities.',
      'Describing a setting in rich sensory detail':
        'That is vivid imagery. Pathetic fallacy is more specific: the weather or setting matches the feelings in the story.',
      'A writer’s attempt to make the reader feel pity for someone':
        "That is pathos. The two share a Greek root meaning 'feeling', but pathetic fallacy is about nature echoing emotion.",
    },
    more: 'The critic John Ruskin coined the term in 1856, to criticise poets who gave nature human feelings. Today it is used more neutrally: a storm on the night of a murder, or sunshine at a wedding.',
    tip: "Link the weather to the emotion and the moment: 'The storm on the night of Duncan's murder suggests that nature itself is disturbed.'",
  },
  Oxymoron: {
    why: "An oxymoron joins two words that seem to contradict each other. In Act 1 Scene 1 of Romeo and Juliet, Romeo describes love as 'Feather of lead, bright smoke, cold fire, sick health': the clashing pairs show how confused his feelings are.",
    not: {
      'A statement that seems absurd but contains a truth':
        "That is a paradox, a whole statement. An oxymoron is a compressed contradiction, usually two words such as 'bittersweet'.",
      'A deliberate exaggeration for emphasis':
        'That is hyperbole. An oxymoron does not exaggerate; it sets opposites together.',
      'Two similar words used for extra emphasis':
        "That is tautology, as in 'free gift'. An oxymoron joins opposites, not similar words.",
    },
    more: "The word is Greek for 'sharp-dull', itself an oxymoron. Writers use oxymorons to show conflict, confusion or two feelings at once, as in Juliet's 'Parting is such sweet sorrow'.",
    tip: "Explain what the contradiction reveals: 'The oxymorons suggest that Romeo's idea of love is confused and self-indulgent.'",
  },
  Paradox: {
    why: "A paradox seems to contradict itself, yet holds a truth. When the witches chant 'Fair is foul, and foul is fair', the paradox warns that in Macbeth's world appearances deceive: what looks good may be evil.",
    not: {
      'Two words with opposite meanings placed side by side in a phrase':
        "That is an oxymoron, two clashing words such as 'cold fire'. A paradox is a whole idea that seems impossible but proves true.",
      'Saying the opposite of what is really meant, often to mock':
        'That is irony. A paradox means what it says; the puzzle is that it seems to contradict itself.',
      'An argument that weighs up both sides before deciding':
        'That is a balanced argument. A paradox does not weigh sides; it holds two opposites together in one statement.',
    },
    more: "The word comes from the Greek for 'contrary to expectation'. Paradoxes make readers stop and think, and they suit texts about confusion, deception or conflict, where nothing is quite as it seems.",
    tip: "Explain the truth inside the contradiction: 'The paradox suggests that in Macbeth's Scotland good and evil have become impossible to tell apart.'",
  },
  Protagonist: {
    why: "The protagonist is the main character, whose story the text follows. Jane Eyre is the protagonist of Brontë's novel: we follow her from a lonely childhood at Gateshead to independence and love.",
    not: {
      'The character who opposes the main character':
        'That is the antagonist. The protagonist is the central character; the antagonist stands in their way.',
      'A character whose qualities contrast with the hero’s':
        "That is a foil. A foil exists to show up the protagonist's qualities by contrast.",
      'The voice that tells the story to the reader':
        'That is the narrator. A protagonist may narrate, as Jane does, but many protagonists do not tell their own stories.',
    },
    more: "It comes from the Greek protagonistes, 'first actor'. A protagonist need not be good: Macbeth is the protagonist of his tragedy, even as he becomes a tyrant.",
    tip: 'Use the term precisely, and say how the writer shapes our view of the protagonist, for example through what we see of their thoughts.',
  },
  Antagonist: {
    why: "The antagonist is the character or force that opposes the main character. In Othello, Iago is the antagonist: he works in secret to destroy Othello's trust in his wife.",
    not: {
      'The central character the story is mainly about':
        'That is the protagonist. The antagonist is defined by opposing them.',
      'A minor character who brings comic relief to a tragedy':
        'That is a comic character, such as the Porter in Macbeth. An antagonist can be funny, but the role is to oppose the hero.',
      'A character who changes by the end of the story':
        'That is a dynamic character. Antagonists can change, but the term names their role: standing against the hero.',
    },
    more: "It comes from the Greek antagonistes, 'opponent'. The antagonist need not be a villain or even a person: society, nature or a character's own nature can be the force the hero struggles against.",
    tip: 'Ask what the antagonist reveals about the hero: conflict tests a character and shows the reader who they really are.',
  },
  Archetype: {
    why: "An archetype is a pattern that recurs across stories and cultures, such as the hero's journey or the trickster. In A Christmas Carol, the three spirits play an ancient role: guides who lead the hero on a journey of change.",
    not: {
      'An oversimplified and often unfair idea of what a group is like':
        'That is a stereotype, which simplifies real groups of people. An archetype is a story pattern, and it is not an insult.',
      'A central character who lacks the usual qualities of a hero':
        'That is an anti-hero, one particular kind of central character. An archetype is a type or pattern that recurs across many stories, such as the trickster or the innocent.',
      'A character based closely on a real historical person':
        'That is a character drawn from life. An archetype is a type, not an individual.',
    },
    more: "It comes from the Greek arkhetypon, 'first pattern'. Spotting an archetype shows how a writer uses or breaks expectations: a guide who turns out to be cruel overturns the reader's expectations of the type.",
    tip: 'Use archetypes to discuss how a character meets or overturns what readers expect from that kind of figure.',
  },
  Satire: {
    why: 'Satire uses humour, irony and exaggeration to mock people or institutions and expose their faults. Animal Farm is a satire: by turning the leaders of the Russian Revolution into pigs, Orwell mocks their greed and hypocrisy.',
    not: {
      'Gentle comedy in which everything ends happily':
        'That is gentle comedy. Satire can be funny, but its humour has a target and a purpose: to criticise.',
      'An imitation of a work, exaggerated for comic effect':
        'That is parody. Parody imitates a particular work; satire can use parody, but its aim is to criticise people or society.',
      'A story in which the characters stand for ideas or people':
        'That is allegory. Animal Farm is both, but allegory names the hidden meaning, while satire names the mocking criticism.',
    },
    more: 'Satire has a long history, from ancient Rome to modern comedy shows. It is often subversive, attacking people in power, and it relies on the audience seeing the gap between how things are and how they should be.',
    tip: "Name the target and the method: 'Orwell mocks the pigs by showing them break each commandment while claiming to keep it.'",
  },
  Epistolary: {
    why: 'An epistolary novel is told through letters or other documents. Dracula is a famous example: the whole story is pieced together from diaries, letters and newspaper cuttings written by different characters.',
    not: {
      'Told by a narrator who knows every character’s thoughts':
        'That is an omniscient narrator. Epistolary writing gives us only what each writer knows and chooses to say.',
      'Told through a single character’s private thoughts':
        'That describes an interior monologue. An epistolary text is made of documents that characters write to others.',
      'Told in a long series of flashbacks to earlier events':
        'An epistolary text may look back, but the term means it is made of documents such as letters or diaries.',
    },
    more: "It comes from the Latin epistola, 'letter'. Documents make a story feel real and first-hand. Jekyll and Hyde ends with two documents, Lanyon's narrative and Jekyll's full statement, which finally explain the mystery.",
    tip: 'Comment on what the form does: letters give a personal, limited view, so the reader must piece together the truth.',
  },
  Bildungsroman: {
    why: 'A bildungsroman follows a young person as they grow up, learning about themselves and the world. Great Expectations is one: we follow Pip from a frightened boy in a churchyard to a wiser, humbler man.',
    not: {
      'A novel that tells a story through a series of letters':
        'That is an epistolary novel. A bildungsroman is defined by its subject, growing up, not by its form.',
      'A novel set in a gloomy, frightening, supernatural world':
        'That is a Gothic novel. Jane Eyre has Gothic elements and is also a story of growing up, but the two terms name different things.',
      'A novel set in an imagined future where society has gone badly wrong':
        "That is a dystopian novel. A bildungsroman can be set anywhere; its focus is a character's education in life.",
    },
    more: 'The word is German: Bildung means education or formation, and Roman means novel. Jane Eyre and Great Expectations are both bildungsromans, told by their adult heroes looking back on their younger selves.',
    tip: "Use it to frame an argument about change: 'As a bildungsroman, the novel measures Pip's growth by how he learns what a true gentleman is.'",
  },
  Gothic: {
    why: 'Gothic writing creates fear and mystery through dark settings, the supernatural and buried secrets. Jekyll and Hyde is a Gothic novella: foggy London streets, a hidden laboratory and a monstrous second self create its horror.',
    not: {
      'A genre that shows everyday life as truthfully and accurately as possible':
        'That is realism. Gothic writing deliberately goes beyond the everyday, into terror and the supernatural.',
      'A genre that celebrates nature, feeling and imagination':
        'That describes Romanticism. Gothic writing grew up alongside it, but Gothic focuses on fear, darkness and mystery.',
      'A genre that mocks people’s faults to criticise them':
        'That is satire. Gothic writing aims to frighten and unsettle, not to mock.',
    },
    more: "The genre began with Horace Walpole's The Castle of Otranto in 1764. Typical features include ruined buildings, storms, madness, doubles and dark secrets. Victorian writers moved the Gothic from castles to the modern city.",
    tip: "Link Gothic features to ideas: 'Stevenson uses Gothic fog to suggest the hidden, unknowable side of respectable Victorian men.'",
  },
  Foil: {
    why: "A foil is a character whose differences from another make that character's qualities stand out. In Macbeth, Banquo is a foil: he hears the same prophecy but does not act on it, which highlights Macbeth's ambition.",
    not: {
      'A character who opposes the hero and tries to block their goals at every turn':
        "That is an antagonist. A foil need not oppose anyone; Banquo is Macbeth's friend. A foil's job is contrast.",
      'A character who is a typical example of a familiar type':
        'That is a stock character, or archetype. A foil is defined by its relationship to one particular character.',
      'A character who narrates the whole story from the inside':
        'That is a first-person narrator. A foil is defined by contrast with another character, not by telling the story.',
    },
    more: 'The term comes from jewellery: a thin leaf of metal, or foil, was placed behind a gem to make it shine more brightly. A foil does the same for a character.',
    tip: "Explain what the contrast reveals: 'As Macbeth's foil, Banquo shows that the witches' words need not lead to murder.'",
  },
  Aside: {
    why: "An aside is a short comment to the audience, which the other characters on stage are imagined not to hear. In Act 1 Scene 4 of Macbeth, Macbeth's aside 'Stars, hide your fires' reveals his dark desires while Duncan's court looks on.",
    not: {
      'A long speech spoken by a character who is alone on the stage':
        'That is a soliloquy. An aside is brief and spoken while other characters are present.',
      'A brief conversation between two minor characters at the side of the stage':
        'An aside is spoken by one character to the audience, not a conversation between characters.',
      'A note in the script that tells the actors how to move':
        'That is a stage direction, which the audience never hears. An aside is spoken aloud.',
    },
    more: 'Asides create dramatic irony: the audience shares a secret that the other characters do not know. They also build a bond between a character and the audience, even a villain.',
    tip: 'Say what the aside lets the audience know that others on stage do not, and how that creates tension.',
  },
  Allusion: {
    why: "An allusion is a brief reference to something outside the text, such as the Bible, a myth or a real event. When Frankenstein's creature says 'I ought to be thy Adam; but I am rather the fallen angel', he alludes to the Bible's story of creation.",
    not: {
      'A false idea or belief, or a trick of the eye':
        'That is an illusion. The words sound alike, but an allusion is a reference, not a trick.',
      'A comparison that uses the words ‘like’ or ‘as’':
        "That is a simile. An allusion refers to something outside the text and needs no 'like' or 'as'.",
      'A long story in which the characters stand for ideas or people':
        'That is an allegory. An allusion is a passing reference, not a whole story with a hidden meaning.',
    },
    more: "It comes from the Latin alludere, 'to play with'. Allusions let a writer add layers of meaning in a few words, by borrowing what the reader already knows about the thing referred to.",
    tip: "Explain what the allusion adds: 'By calling himself Adam, the creature casts Victor as a careless god who has abandoned his creation.'",
  },
  Anaphora: {
    why: "Anaphora repeats a word or phrase at the start of lines, sentences or clauses that follow one another. Kipling's If is built this way, beginning line after line with 'If you can', so the conditions pile up before the final reward.",
    not: {
      'Repeating the same consonant sound at the beginning of nearby words':
        'That is alliteration, a repeated sound. Anaphora repeats whole words or phrases.',
      'Repeating the same word at the end of each line or clause':
        'That is epistrophe, its mirror image. Anaphora repeats at the start; epistrophe at the end.',
      'Listing three things together for a memorable effect':
        'That is a tricolon. The two often appear together, but anaphora is repetition at the start of lines or clauses.',
    },
    more: "It comes from the Greek for 'carrying back'. Anaphora gives writing a strong, insistent rhythm, which is why it is common in speeches and in poems that build to a climax.",
    tip: 'Use anaphora in your own persuasive writing: start three sentences the same way to build momentum.',
  },
  Conveys: {
    why: "To convey is to carry an idea or feeling across to the reader. 'The repeated questions convey the speaker's desperation' says what the writer achieves; it is more precise than 'shows' or 'says'.",
    not: {
      'Hides an idea so the reader misses it':
        'That is to conceal. To convey is the opposite: to get a meaning across.',
      'Changes an idea into something new':
        'That is to transform. Conveying passes an idea on; it does not turn it into something else.',
      'Copies an idea word for word from a source':
        'That is to quote or reproduce. Writers convey meaning through their choices, not by copying.',
    },
    more: "It comes, through French, from the Latin com, 'with', and via, 'way': to convey once meant to go along with someone on their way. Its neighbours, such as suggests and stresses, are each more specific, so choose the one that fits.",
    tip: "Follow conveys with what and how: 'Owen conveys the horror of the gas attack through frantic, broken verbs.'",
  },
  Undermines: {
    why: "To undermine is to weaken something gradually, often from below or out of sight. A single sarcastic remark can undermine a character's grand speech, so that the audience stops believing it.",
    not: {
      'Openly attacks something in the strongest possible terms':
        'That is to denounce or condemn. Undermining is quieter: it weakens rather than attacks head on.',
      'Supports something by adding more evidence for it':
        'That is to reinforce, the opposite. Undermining takes strength away.',
      'Draws attention to something by placing it first':
        'That is to foreground. Undermining is about weakening, not emphasis.',
    },
    more: "The word comes from warfare: soldiers dug tunnels, or mines, under castle walls to make them collapse. In analysis it often describes irony, where a writer lets a character's own words weaken their position.",
    tip: "Use it for irony and reversals: 'The final line undermines the speaker's confidence, revealing the fear beneath it.'",
  },
  Foregrounds: {
    why: 'To foreground is to make something stand out, so the reader cannot miss it. A poet foregrounds a word by placing it first in a line, repeating it, or setting it apart with punctuation.',
    not: {
      'Hints at something that will happen later in the story':
        'That is to foreshadow. The words look alike, but foregrounding is about prominence now, not hints of the future.',
      'Moves something out of the reader’s sight':
        'That is the opposite: pushing something into the background.',
      'Weakens something gradually from within':
        'That is to undermine. Foregrounding gives something importance; it does not weaken it.',
    },
    more: 'Foreground is a painting term: the part of a picture nearest the viewer. Writers foreground through position, repetition, contrast or a break in a pattern.',
    tip: "Explain how something is foregrounded: 'Placing \"Alone\" at the start of the line foregrounds the speaker's isolation.'",
  },
  Implies: {
    why: 'To imply is to suggest something without stating it. A character who checks the locks three times before bed implies that they are afraid, though nobody says so.',
    not: {
      'Works out a meaning from the clues that someone gives':
        'That is to infer. The speaker or writer implies; the listener or reader infers.',
      'States something openly so that no doubt is left':
        'That is to state or assert. Implying works indirectly, through hints.',
      'Repeats something several times to give it emphasis':
        'That is to emphasise or reiterate. Implying is about hidden meaning, not repetition.',
    },
    more: "Implied meanings are what inference questions in exams test. The noun is implication: 'the implication is that she knew all along'.",
    tip: "Use 'implies' for the writer and 'infers' for the reader, and never swap them.",
  },
  Critiques: {
    why: 'To critique is to examine something closely and judge its weaknesses, often to argue for change. A novel can critique a society by showing the harm it does to ordinary people.',
    not: {
      'Praises something warmly and without doubts':
        'That is to celebrate or praise. A critique looks for faults.',
      'Describes something without giving an opinion':
        'That is neutral description. To critique is to judge.',
      'Copies something in order to mock it':
        'That is to parody. A parody can be a critique, but critiquing means judging, by any method.',
    },
    more: "Critique comes from the Greek kritikos, 'able to judge', like critic and criticise. In analysis it usually points to a writer's purpose: what they want readers to question.",
    tip: "Say what is critiqued and how: 'Owen critiques the glamour of war by showing a soldier dying of gas in front of the reader.'",
  },
  Reinforces: {
    why: 'To reinforce is to strengthen something already there, as builders reinforce a wall. When a final image repeats an idea from the opening, it reinforces it, so the reader leaves with the message fixed.',
    not: {
      'Challenges an idea that has come before it':
        'That is to challenge or contradict, the opposite of reinforcing.',
      'Hides an idea beneath the surface of the text':
        'That is to conceal. Reinforcing makes an idea stronger and clearer.',
      'Introduces an idea for the very first time':
        'Reinforcing needs something already there to strengthen. It never introduces.',
    },
    more: 'In analysis, reinforces is useful for structure and for patterns of imagery that build across a text: each return makes the idea harder to ignore.',
    tip: "Use it to link two parts of a text: 'The closing image reinforces the opening, so the poem's message is impossible to miss.'",
  },
  Epitomises: {
    why: 'To epitomise is to be the perfect example of something. Scrooge in Stave One epitomises greed: everything about him, from his cold office to his treatment of Bob, sums up that one quality.',
    not: {
      'Is the exact opposite of a quality or type':
        'That is to be the antithesis of something. To epitomise a quality is to embody it perfectly.',
      'Is an early version a later type grew out of':
        'That is a prototype or forerunner. Epitomise is about being the perfect example, not the first.',
      'Is a poor or very unusual example of a type':
        'That is the opposite: an exception or an oddity. Epitomising means being the best example.',
    },
    more: "The noun is epitome, said e-PIT-o-mee, as in 'the epitome of greed'. It once also meant a summary, but in literary analysis it almost always means the perfect example.",
    tip: "Use it to make a point about what a character represents: 'Birling epitomises the selfish businessman Priestley wanted his audience to reject.'",
  },
  Encapsulates: {
    why: "To encapsulate is to sum up the essential point of something in a short, neat form. A single line can encapsulate a whole poem's message, which is why it makes a strong quotation.",
    not: {
      'Expands on an idea at great length':
        'That is to elaborate, the opposite. Encapsulating squeezes an idea into a small space.',
      'Hides an idea beneath layers of detail':
        'That is to obscure or conceal. An encapsulating line makes the idea clearer.',
      'Repeats an idea several times for emphasis':
        'That is to reiterate. Encapsulating says it once, briefly and completely.',
    },
    more: 'It comes from capsule, a small container: an idea is packed into a few words. Writers often encapsulate a theme in a final line or a title.',
    tip: "Use it to justify a choice of quotation: 'This line encapsulates the speaker's whole argument in eight words.'",
  },
  Vilifies: {
    why: 'To vilify is to speak or write about someone as if they were evil, often unfairly. Wartime propaganda vilifies the enemy so that people will hate them without thinking.',
    not: {
      'Portrays someone as perfect and admirable': 'That is to idealise or glorify, the opposite.',
      'Portrays someone as weak and deserving pity':
        'That would be to present someone as a victim. Vilifying turns them into a villain.',
      'Portrays someone as a figure of fun to mock':
        'That is to ridicule. Mockery can be cruel, but vilifying means making someone seem wicked.',
    },
    more: "It comes from the Latin vilis, 'cheap' or 'worthless', the root of vile. A writer may vilify a character, or show other characters vilifying someone unfairly.",
    tip: "Ask whose judgement it is: Napoleon's propaganda vilifies Snowball, blaming him for everything that goes wrong on the farm, while Orwell lets readers see that the charges are false.",
  },
  Idealises: {
    why: 'To idealise is to present something as perfect, or better than it really is. A poem that remembers childhood as all sunshine and laughter idealises the past, leaving out anything painful.',
    not: {
      'Presents something as worse than it really is':
        'That is to exaggerate its faults, or to demonise it. Idealising goes the other way.',
      'Presents something exactly as it really is':
        'That is realism. Idealising improves on reality.',
      'Presents something as an idea, not a thing':
        'The word contains idea, but to idealise is to make something seem ideal, meaning perfect.',
    },
    more: "Idealising is common in memory, love poetry and longing for the past. In analysis, ask why a writer idealises: to show what has been lost, or to reveal a character's blindness.",
    tip: "Use it to question a speaker: 'The speaker idealises his first love, so the reader may doubt how reliable his memories are.'",
  },
  Dehumanises: {
    why: "To dehumanise is to strip someone of their human qualities, treating them like an animal or object. Calling soldiers 'cannon fodder' dehumanises them, as if they were only material to be used up.",
    not: {
      'Gives human qualities to an object or an animal':
        'That is personification, the opposite movement: things become human, rather than people becoming things.',
      'Shows deep sympathy for someone’s suffering':
        'That is to humanise or sympathise. Dehumanising removes sympathy.',
      'Makes someone appear more powerful than they are':
        "That is to exaggerate someone's power. Dehumanising lowers them.",
    },
    more: 'Writers use dehumanising language to show cruelty, as when a character treats servants as objects, or to make a monster frightening. War poets often show how war dehumanises soldiers.',
    tip: "Explain the effect on sympathy: dehumanising language can make readers fear a character, or pity them as victims of others' contempt.",
  },
  Interrogates: {
    why: 'In literary analysis, to interrogate an idea is to question it closely, testing whether it holds up. Priestley interrogates the belief that employers owe nothing to their workers, and shows what it costs.',
    not: {
      'Accepts an idea without questioning it in any way at all':
        'That is the opposite. Interrogating means challenging, not accepting.',
      'Repeats an idea to make it more memorable':
        'That is to reiterate. Interrogating puts an idea under pressure.',
      'Mocks an idea to make the audience laugh':
        'That is to ridicule. A writer can interrogate an idea seriously, without any humour.',
    },
    more: "The everyday meaning is to question a suspect closely, as police do. Critics borrow the word for texts that put their society's beliefs under the same pressure.",
    tip: "Interrogates suits writers who raise questions rather than give answers: 'The poem interrogates the idea that war is glorious.'",
  },
  Poignant: {
    why: "Poignant describes something that moves us to a deep, sharp sadness. A child's shoe left on an empty beach, or an old couple's last letter, can be poignant: small details that carry great feeling.",
    not: {
      'Deliberately shocking in order to cause offence':
        'That is provocative. Poignant moments are quiet and moving, not offensive.',
      'Calm, peaceful and free from all worry and care':
        'That is serene. Poignant moments stir feeling; they are rarely peaceful.',
      'Sharply funny in a way that mocks someone else':
        'That is witty or mocking. Poignant writing touches the heart instead.',
    },
    more: "It comes from the French for 'pricking': a poignant moment pierces the reader. It is often used for endings, memories and small details that suggest a larger loss.",
    tip: 'Explain why a moment is poignant, and which small detail carries the feeling, rather than just using the word.',
  },
  Bleak: {
    why: 'Bleak describes a place or outlook that is cold, empty and hopeless. A bleak landscape is bare and wind-swept; a bleak ending offers no comfort or hope.',
    not: {
      'Cold, bright and full of energy':
        'That describes a crisp, lively scene. Bleak places and moods are grim and lifeless.',
      'Dark, mysterious and exciting':
        'Mystery invites curiosity. Bleakness offers nothing to look forward to.',
      'Quiet, peaceful and very restful':
        'That is tranquil. A bleak scene is harsh rather than restful.',
    },
    more: "Bleak House is the title of a Dickens novel, and bleak settings often mirror a character's despair. The word applies to weather, places, futures and moods alike.",
    tip: "Pair bleak with evidence: 'The bleak setting, with its frozen fields and empty sky, mirrors the speaker's grief.'",
  },
  Nostalgic: {
    why: 'Nostalgic describes a fond, often sad longing for the past. A speaker who remembers childhood summers and wishes he could return to them is nostalgic: the memory is sweet, but it hurts because it is gone.',
    not: {
      'Fearful about what might happen in the future':
        'That is anxiety. Nostalgia looks back, not forward.',
      'Bitterly regretting a mistake from the past':
        'That is remorse or regret. Nostalgia is fond: it misses the past rather than wishing it had been different.',
      'Bored by the dull routine of everyday life':
        'That is boredom. Nostalgia is a longing, not weariness.',
    },
    more: "It comes from the Greek nostos, 'homecoming', and algos, 'pain': the pain of wanting to go home. Nostalgic writing often makes the past seem better than it really was.",
    tip: "Ask whether the writer shares the nostalgia or questions it: a speaker's longing can be moving, or blind to the past's faults.",
  },
  Scathing: {
    why: "Scathing criticism is severe and bitter, meant to wound. A reviewer who calls a film 'a waste of everyone's evening' is being scathing.",
    not: {
      'Gently critical but kindly meant':
        'That is mild or constructive criticism. Scathing criticism holds nothing back.',
      'Openly admiring and full of praise': 'That is praise, the opposite.',
      'Coldly unfeeling and cruel to others':
        'That describes a cold, cruel manner. Scathing names fierce criticism, which is often passionate rather than cold.',
    },
    more: "It comes from the old word scathe, 'harm', which survives in 'unscathed'. Writers of opinion columns and reviews often use a scathing tone to persuade readers.",
    tip: "Use it to describe tone in non-fiction: 'The writer's scathing tone leaves no doubt about her view of the plan.'",
  },
  Cynical: {
    why: 'A cynical person believes that people are driven only by selfishness, and distrusts any claim of kindness or honesty. Benjamin the donkey in Animal Farm is cynical: he expects life to go on badly, whoever is in charge.',
    not: {
      'Believing that everything will turn out well in the end':
        'That is optimism, the opposite outlook.',
      'Doubting a claim until there is proof for it':
        "That is scepticism. A sceptic waits for evidence; a cynic assumes the worst about people's motives.",
      'Believing that life has no meaning at all':
        "That is nihilism, a wider belief that nothing matters. Cynicism is about distrusting people's motives.",
    },
    more: "The Cynics were ancient Greek philosophers who rejected wealth and comfort. Today the word is usually a criticism, though a cynical character can also see through other people's lies.",
    tip: 'Distinguish cynical from sceptical in your writing: a sceptic questions, a cynic expects the worst.',
  },
  Sentimental: {
    why: "Sentimental writing stirs tender feelings, such as pity or longing, more than the situation deserves. Critics have called the death of Little Nell in Dickens's The Old Curiosity Shop sentimental, because it seems designed to make readers weep.",
    not: {
      'Showing no feelings at all in any situation, ever':
        'That is impassive or unemotional, the opposite.',
      'Showing strong feelings of anger and bitterness':
        'That is resentment. Sentimental feelings are soft and tender, not bitter.',
      'Showing feelings that change from moment to moment':
        'That is fickle or volatile. Sentimentality is about too much tenderness, not changeability.',
    },
    more: "It is usually a criticism: sentimental writing can feel manipulative. But the word can also be neutral, as in 'sentimental value', meaning something valued for the memories it holds.",
    tip: 'If you call a scene sentimental, explain why: does the writer exaggerate the emotion to manipulate the reader?',
  },
  Grotesque: {
    why: 'Grotesque describes something strangely distorted or ugly in a way that disturbs, and sometimes even amuses. Miss Havisham, still in her yellowing wedding dress decades after she was jilted, is a grotesque figure.',
    not: {
      'Strikingly beautiful in an unusual way':
        'That is exotic or striking beauty. The grotesque is ugly or distorted.',
      'Strange and unexplained in a ghostly way':
        'That is eerie. Grotesque things are distorted in a physical, visible way.',
      'Large, grand and impressive in scale':
        'That is imposing or grand. Grotesque has nothing to do with size; it means distorted.',
    },
    more: "It comes from the Italian grotta, 'cave', where odd, distorted paintings were found in buried Roman ruins. Gothic writers love the grotesque because it mixes horror with fascination.",
    tip: "Use it precisely: grotesque is not just 'ugly', but disturbingly distorted, often mixing the horrible with the absurd.",
  },
  Claustrophobic: {
    why: "Claustrophobic describes a space, or a situation, that feels uncomfortably closed in, with no escape. An Inspector Calls takes place in one dining room: the Birlings cannot leave as the Inspector's questions close in.",
    not: {
      'Frighteningly wide open and exposed to view':
        'That is the opposite fear: of open, exposed spaces.',
      'Gloomily dark, damp and cold':
        'A dark, damp place may also feel claustrophobic, but the word means feeling enclosed and trapped.',
      'Strangely silent and very still':
        'Silence can add tension, but claustrophobic means confined.',
    },
    more: "It comes from the Latin claustrum, 'enclosed space', and the Greek phobos, 'fear'. Writers create claustrophobic settings to trap characters with their guilt, or with each other.",
    tip: "Link setting to effect: 'The claustrophobic single setting traps the Birlings, so none of them can escape the Inspector's questions.'",
  },
  Wry: {
    why: "Wry humour is dry and understated, with a slight twist of mockery, often at the speaker's own expense. A narrator who notes that his grand plan 'went about as well as expected' is being wry.",
    not: {
      'Loudly and openly cheerful in every way': 'Wry humour is quiet and dry, not loud or bubbly.',
      'Bitterly angry and quite unforgiving':
        'That is bitterness. Wry humour is gently mocking, not furious.',
      'Shyly nervous and lacking in confidence':
        'That is timidity. A wry remark takes confidence: it is a knowing joke.',
    },
    more: "A wry smile is a lopsided one, which suits the word's origin in an old word meaning 'twisted'. Wry humour is gentler than sardonic humour, which has a bitter edge.",
    tip: "Use wry for a gentle, knowing tone: 'The narrator's wry asides invite the reader to share the joke.'",
  },
  Contemptuous: {
    why: "Contemptuous means showing scorn: treating someone as worthless or beneath you. Lady Catherine de Bourgh is contemptuous of Elizabeth's family, whom she regards as far beneath her own.",
    not: {
      'Showing that you feel sorry for someone':
        'That is pity or sympathy. Contempt looks down on someone without any warmth.',
      'Deserving to be treated as worthless':
        'That is contemptible, a word often confused with it. A contemptuous person shows contempt; a contemptible one deserves it.',
      'Showing that you are very pleased with yourself':
        'That is smug. Contempt is directed at someone else.',
    },
    more: "Contemptuous and contemptible are a classic pair: a bully is contemptible, and we may feel contemptuous of him. Both come from contempt, from the Latin contemnere, 'to despise'.",
    tip: "Describe tone precisely: 'Her contemptuous reply shows that she sees him as beneath her notice.'",
  },
  Archaic: {
    why: "Archaic language belongs to an earlier time and has dropped out of everyday use. Words such as 'thou', 'hath' and 'betwixt' are archaic: they sound old because they are.",
    not: {
      'Newly invented and not yet widely used by anyone':
        'That is a neologism, the opposite. Archaic words are old.',
      'Used only by the people living in one local area':
        'That is dialect. A dialect word is regional; an archaic word is old.',
      'Used only by experts working in one particular field':
        'That is jargon. Jargon is specialist; archaic words are simply out of date.',
    },
    more: "It comes from the Greek arkhaios, 'ancient'. Writers use archaic words to create a sense of history, religion or ceremony, or to make a character sound old-fashioned.",
    tip: 'Comment on the effect of archaic language: does it make a speaker sound grand, holy, old-fashioned or out of touch?',
  },
  Uncanny: {
    why: "Uncanny describes something strangely familiar yet wrong, which unsettles us without our knowing why. A doll that seems to watch you, or Marley's face appearing in Scrooge's door knocker, is uncanny.",
    not: {
      'Strange in a way that is charming and old-fashioned':
        'That is quaint. Quaint things are pleasantly odd; uncanny things make us uneasy.',
      'Strange in a way that is funny and quite absurd':
        'That is absurd or comic. The uncanny disturbs rather than amuses.',
      'Strange in a way that is fresh and exciting':
        'That is novel or thrilling. The uncanny is unsettling, often because it feels oddly familiar.',
    },
    more: 'Freud wrote a famous essay on the uncanny: the feeling when something familiar becomes strange, such as a double, a lifelike doll or a ghost. Gothic writers rely on it.',
    tip: 'Use uncanny for quiet, creeping unease rather than open horror, and explain what feels familiar but wrong.',
  },
  Sublime: {
    why: 'The sublime is grandeur so vast, powerful or beautiful that it overwhelms us with awe, and even a little fear. Romantic writers found it in mountains, storms and oceans, as Victor Frankenstein does among the Alps.',
    not: {
      'So small and delicate that it seems fragile':
        'That is dainty or fragile. The sublime is vast and overwhelming.',
      'So hidden that it works below the level of conscious thought':
        'That is subliminal, a word that sounds similar. Sublime things are overwhelming, not hidden.',
      'So ordinary that it seems dull and lifeless':
        'That is mundane, the opposite. The sublime is anything but ordinary.',
    },
    more: 'Edmund Burke argued in 1757 that the sublime mixes beauty with terror: a thunderstorm or a cliff edge thrills because it could destroy us. The idea shaped Romantic and Gothic writing.',
    tip: "Use sublime for scenes of overwhelming natural power: 'Shelley's sublime mountains dwarf Victor, reminding him how small human ambition is.'",
  },
  Tricolon: {
    why: "A tricolon is a group of three words, phrases or clauses, often building in force. 'I came, I saw, I conquered' sticks in the mind because three items feel complete.",
    not: {
      'Repeating the same word at the start of each sentence':
        'That is anaphora. A tricolon may use repetition, but it is defined by its three parts.',
      'Two contrasting ideas placed side by side in balanced phrases':
        'That is antithesis, which balances two opposites. A tricolon has three parts.',
      'A question asked for effect, with no answer expected':
        'That is a rhetorical question. A tricolon is a group of three.',
    },
    more: 'It is also called the rule of three. Speechwriters use it because three items create rhythm and a sense of completeness, often with the strongest item last.',
    tip: 'Use a tricolon in persuasive writing, and put your strongest item last for a climax.',
  },
  Epiphany: {
    why: "An epiphany is a sudden flash of understanding, when a character sees a truth clearly for the first time. James Joyce's short stories often end with one: a quiet moment in which a character suddenly sees their life as it is.",
    not: {
      'A sudden reversal in a character’s fortunes':
        'That is a reversal of fortune. An epiphany is a change in understanding, not in circumstances.',
      'A dream that predicts what will happen later':
        'That is a prophetic dream. An epiphany happens in a waking moment of insight.',
      'A turning point in a poem’s line of thought':
        "That is a volta. An epiphany belongs to a character's understanding.",
    },
    more: "The word comes from the Greek for 'showing' or 'appearance', and from the Christian feast of the Epiphany. Joyce made it a literary term for sudden, quiet revelations.",
    tip: 'Use epiphany for moments of realisation, and explain what the character now understands that they did not before.',
  },
  Zoomorphism: {
    why: 'Zoomorphism gives animal qualities to a person or thing. In Of Mice and Men, Steinbeck describes Lennie walking the way a bear drags its paws, which stresses both his great strength and his animal-like innocence.',
    not: {
      'Using an animal to stand for a nation':
        'That is a national symbol, such as the British bulldog. Zoomorphism gives animal qualities to someone or something.',
      'Describing a place as if it were alive':
        'That is personification. Zoomorphism is specifically about animal qualities.',
      'Comparing a person to a figure from myth':
        'That is a mythical allusion. Zoomorphism compares a person to an animal.',
    },
    more: "The Greek zoon means 'animal' and morphe 'form'. Zoomorphism can make a character frightening, pitiful or comic, depending on the animal chosen.",
    tip: "Name the animal and its qualities: a character who 'prowls' suggests a predator; one who 'scurries' suggests fear.",
  },
  Elegy: {
    why: "An elegy is a poem of mourning, most often for a person who has died. Tennyson's In Memoriam, written over seventeen years after the death of his friend Arthur Hallam, is one of the most famous elegies in English.",
    not: {
      'A formal poem written in praise of a person, object or idea':
        'That is an ode, a poem of praise. An elegy mourns.',
      'A poem that tells a story, often in short verses':
        'That is a ballad. An elegy can tell a story, but it is defined by mourning.',
      'A poem of fourteen lines with a set rhyme scheme':
        'That is a sonnet. An elegy has no fixed form.',
    },
    more: 'Elegies often move through stages: grief, praise of the dead, and finally some kind of comfort or acceptance. War poets wrote elegies for a whole generation of young men.',
    tip: 'Trace the stages in an elegy: where does the speaker find comfort, if anywhere?',
  },
  'Dramatic monologue': {
    why: "A dramatic monologue is a poem spoken by a character, not the poet, to a listener who never replies. In My Last Duchess, the Duke talks to an envoy about his late wife's portrait, and reveals far more than he means to.",
    not: {
      'A speech made by a character alone on stage':
        'That is a soliloquy, spoken alone. A dramatic monologue has a silent listener.',
      'A poem in which two speakers take turns to talk':
        'That is a dialogue poem. In a dramatic monologue only one person speaks.',
      'A poem written in the poet’s own voice about their life':
        'That is a personal or confessional poem. In a dramatic monologue the speaker is a character the poet has created.',
    },
    more: 'Robert Browning made the form famous. The drama lies in what the speaker gives away: the reader sees through the speaker, who does not see himself.',
    tip: 'In a dramatic monologue, read between the lines: what is the speaker revealing without meaning to?',
  },
  Persona: {
    why: "A persona is a character or mask through which a poet speaks. When Browning writes as a jealous duke, or Tennyson as the aged hero in Ulysses, the 'I' of the poem is a persona, not simply the poet.",
    not: {
      'The poet speaking directly as themselves':
        "That is the poet's own voice. A persona is a mask the poet puts on.",
      'The person to whom the whole poem seems to be addressed':
        'That is the addressee. The persona is the speaker, not the listener.',
      'The main character in a novel, play or poem':
        'That is the protagonist. A persona is the voice a poet speaks through.',
    },
    more: "Persona is Latin for the mask that actors wore in ancient theatre. Never assume that the 'I' of a poem is the poet: call it the speaker unless you know otherwise.",
    tip: "Write 'the speaker' rather than the poet's name when a poem uses a persona: it shows you understand the difference.",
  },
  'Cyclical structure': {
    why: 'A cyclical structure ends where it began, so the story or poem comes full circle. An Inspector Calls does this: just as the Birlings relax, a phone call announces that an inspector is on his way, and the evening seems about to begin again.',
    not: {
      'A shape in which events are told in time order':
        'That is a linear or chronological structure. A cyclical one returns to its starting point.',
      'A shape in which a story opens in the middle of events':
        'That is starting in the middle of the action. A cyclical structure is defined by its ending.',
      'A shape in which a story moves between two timelines':
        'That is a dual narrative. A cyclical structure loops back to where it began.',
    },
    more: 'A circular structure can suggest that nothing has changed, that history repeats itself, or that characters are trapped. It can also offer a second chance.',
    tip: 'Ask what a circular ending means: is the repetition a warning, a trap, or a second chance?',
  },
  'Omniscient narrator': {
    why: "An omniscient narrator is all-knowing: they can enter any character's mind and comment on events. The narrator of Silas Marner moves between Silas, Godfrey and the villagers, and judges them all.",
    not: {
      'A storyteller who is a character in the story':
        'That is a first-person narrator, who knows only their own thoughts.',
      'A storyteller whose account cannot be trusted':
        'That is an unreliable narrator. An omniscient narrator is usually trustworthy.',
      'A storyteller who reports only what can be seen':
        'That is an objective narrator, who reports actions but not thoughts.',
    },
    more: "Omniscient means 'all-knowing', from the Latin omnis, 'all', and sciens, 'knowing'. Many Victorian novels use this voice, which lets the narrator guide the reader's sympathies.",
    tip: 'Comment on how the narrator shapes our response: whom do we understand, and whom are we invited to judge?',
  },
  'Unreliable narrator': {
    why: 'An unreliable narrator tells the story in a way the reader cannot fully trust, because they are biased, mistaken, lying or fooling themselves. Child narrators are often unreliable, because they misunderstand the adult world around them.',
    not: {
      'A storyteller who knows everything about every single character':
        'That is an omniscient narrator, who is usually to be trusted.',
      'A storyteller who addresses the reader directly as ‘you’ throughout':
        "That is second-person narration. A 'you' narrator can be reliable or not.",
      'A storyteller who tells the story many years after it happened':
        'That is a looking-back narrator. Distance can make a narrator unreliable, but the term names the lack of trust.',
    },
    more: 'Writers use unreliable narrators to create mystery and irony: the reader understands more than the narrator does. Spotting the gap is a sign of strong reading.',
    tip: 'Show evidence of unreliability: a contradiction, an obvious bias, or details the narrator misreads.',
  },
  Register: {
    why: 'Register is the level of formality a writer or speaker chooses for their audience and purpose. A letter to a head teacher uses a formal register; a message to a friend uses an informal one.',
    not: {
      'The attitude a writer shows towards the subject':
        'That is tone. A formal register can carry any tone, warm, angry or mocking: register is how formal the language is for its audience and purpose.',
      'The regional words and grammar used by people in a local area':
        'That is dialect. Register is about formality, which any dialect can vary.',
      'The way a word is pronounced in a particular area':
        'That is accent, how words sound. Register is about word choice and formality.',
    },
    more: 'Writers shift register for effect: a character who suddenly speaks formally may be angry or hiding something; a narrator who drops into slang may be inviting closeness.',
    tip: 'In writing tasks, match your register to the task: a speech, a letter and an article each need a different level of formality.',
  },
  'Tragic hero': {
    why: 'A tragic hero is a great or noble figure whose own flaw or error leads to their downfall. Macbeth is one: a brave soldier, admired by all, destroyed by his ambition.',
    not: {
      'An ordinary person who wins against all the odds':
        'That is an underdog story. A tragic hero falls, and usually dies.',
      'A villain who is punished at the end of the play':
        'A tragic hero is more than a villain: we admire them before their fall, which is why it moves us.',
      'A comic character who survives the tragedy':
        'That is a comic figure, such as a fool. The tragic hero is at the centre of the tragedy.',
    },
    more: 'Aristotle described the tragic hero in his Poetics: someone better than ordinary people, brought down by a flaw or mistake. The fall stirs pity and fear in the audience.',
    tip: "Discuss how far a tragic hero is to blame: Shakespeare weighs Macbeth's choices against the witches' prophecy.",
  },
  Personification: {
    why: "Personification gives human qualities, actions or feelings to something that is not human. 'The wind howled its grief' gives the wind a voice and feelings, making the weather seem alive.",
    not: {
      'Giving animal qualities to a human being or thing':
        'That is zoomorphism, the other direction: people or things are given animal qualities.',
      'Speaking directly to a person or thing that is absent':
        'That is apostrophe, speaking to someone absent. It often involves personification, but it is a different device.',
      'Describing a person as if they were a kind of machine':
        'That is mechanical imagery. Personification makes non-human things human.',
    },
    more: 'Personification can make settings threatening or welcoming, and ideas such as Death or Time feel like real presences. It is a kind of metaphor.',
    tip: "Explain what kind of person the thing becomes: a sea that 'sulks' suggests something quite different from a sea that 'dances'.",
  },
  'Frame narrative': {
    why: "A frame narrative places one story inside another, like a picture in a frame. In Frankenstein, Walton's letters frame Victor's story, and Victor's story frames the creature's.",
    not: {
      'A story told entirely through letters':
        'That is an epistolary story. Frankenstein is partly both, but a frame narrative is about stories within stories.',
      'A story told in strict time order':
        'That is a linear or chronological structure. A frame narrative is about layers of stories.',
      'A story told from many viewpoints':
        'That is a multiple narrative. A frame narrative nests one story inside another.',
    },
    more: 'Frames add distance and doubt: each narrator passes on what they were told, so the reader must decide whom to trust. They can also make a strange tale feel more believable.',
    tip: 'Comment on the effect of the frame: does it make the story more credible, or remind us that every account is limited?',
  },
  Monologue: {
    why: 'A monologue is a long speech by one character, spoken to other characters who listen. A general rousing his troops before battle, or a parent lecturing a child, delivers a monologue.',
    not: {
      'A speech by a character alone on stage':
        'That is a soliloquy. A monologue has listeners on stage.',
      'A brief remark heard only by the audience':
        'That is an aside. A monologue is long and spoken to others.',
      'A conversation between two characters':
        'That is dialogue. In a monologue one person does nearly all the talking.',
    },
    more: "Monologues reveal a character's power or obsession: whoever holds the floor controls the scene. A dramatic monologue is the poetry version, with a silent listener.",
    tip: 'Ask why a character is allowed to speak at such length, and who is silenced while they do.',
  },
  Hypophora: {
    why: "Hypophora is asking a question and answering it at once. 'Why does this matter? Because every child deserves a chance' raises the reader's curiosity, then satisfies it on the speaker's terms.",
    not: {
      'Asking a question that needs no answer at all':
        'That is a rhetorical question, which expects no answer. Hypophora supplies one.',
      'Repeating the same question to make it sound stronger':
        'That is repetition for emphasis. Hypophora pairs a question with its answer.',
      'Answering a question with another question':
        'That dodges the question. Hypophora answers it directly.',
    },
    more: 'Hypophora lets a speaker control a debate: they choose both the question and the answer. It is common in speeches, sermons and persuasive articles.',
    tip: 'Use hypophora in your own persuasive writing to raise, and then answer, the obvious objection.',
  },
  'Counter-argument': {
    why: "A counter-argument is the other side's view, raised by a writer so that it can be answered. 'Some say zoos protect rare animals. However...' shows that the writer has thought about the objection before rejecting it.",
    not: {
      'A series of different reasons that all support the very same view':
        'That is a supported argument. A counter-argument presents the opposing view.',
      'A final paragraph that repeats and sums up the writer’s main point':
        'That is a conclusion. A counter-argument comes inside the argument, to be answered.',
      'A question asked for effect, which needs no answer from anyone':
        'That is a rhetorical question. A counter-argument is an opposing view.',
    },
    more: 'Dealing with a counter-argument makes writing more persuasive, because it shows fairness and strength. Writers often admit a small point before rejecting the larger one.',
    tip: "In a writing task, include one counter-argument and answer it: 'Some argue... However, this ignores...'",
  },
  Anecdote: {
    why: 'An anecdote is a short, personal story used to make a point. A writer arguing for school libraries might describe the day a book changed her life: the story makes the argument human and memorable.',
    not: {
      'A fact or number used as evidence':
        'That is a statistic. An anecdote is a story, not a number.',
      'The opinion of an expert used as evidence':
        'That is expert opinion. An anecdote comes from personal experience.',
      'A short tale with animals teaching a moral':
        'That is a fable. An anecdote is usually true and personal.',
    },
    more: 'Anecdotes build trust and emotion, but one story is not proof. Strong persuasive writing pairs an anecdote with facts.',
    tip: 'Open a speech or article with a vivid anecdote, then widen it out to your main argument.',
  },
  Misanthropic: {
    why: "Misanthropic means disliking and avoiding people in general. Scrooge at the start of A Christmas Carol is misanthropic: 'Nobody ever stopped him in the street' to greet him, and that suits him perfectly.",
    not: {
      'Disliking and distrusting women in particular':
        'That is misogynistic. Misanthropy is a dislike of all people.',
      'Loving humanity and giving generously to others': 'That is philanthropic, the opposite.',
      'Fearing and distrusting anything new or unfamiliar':
        'That is a fear of the new. Misanthropy is a dislike of people.',
    },
    more: "It comes from the Greek misein, 'to hate', and anthropos, 'human being'. Philanthropy, its opposite, means love of humanity.",
    tip: 'Use misanthropic for a character who rejects people altogether, and ask what made them so.',
  },
  Parsimonious: {
    why: "Parsimonious means extremely unwilling to spend money, even when spending is needed. Scrooge keeps Bob Cratchit's fire so small that it looks like one coal, and keeps the coal-box in his own room.",
    not: {
      'Extremely willing to give money away': 'That is generous, the opposite.',
      'Extremely skilled at making money grow':
        'That is being shrewd with money. Parsimonious is about refusing to spend.',
      'Extremely careless about spending money':
        'That is a spendthrift, careless with money. A parsimonious person clings to it.',
    },
    more: "It comes from the Latin parsimonia, 'thrift'. Thrift can be a virtue, but parsimony goes further, into meanness.",
    tip: 'Precise words for meanness, such as parsimonious, miserly and tight-fisted, show a wide vocabulary in analysis.',
  },
  Philanthropist: {
    why: 'A philanthropist gives money or time to help other people. By the end of A Christmas Carol, Scrooge has become a kind of philanthropist, giving generously to the poor he once ignored.',
    not: {
      'A person who dislikes and avoids other people': 'That is a misanthrope, the opposite.',
      'A person who studies the meaning of life':
        'That is a philosopher, a word that looks similar. A philanthropist helps others.',
      'A person who hoards money and spends none':
        'That is a miser, the opposite of a philanthropist.',
    },
    more: "It comes from the Greek philein, 'to love', and anthropos, 'human being'. Victorian philanthropists founded schools, hospitals and charities for the poor.",
    tip: 'Use philanthropy as context for Dickens: he believed private generosity could ease the suffering of the poor.',
  },
  Malevolent: {
    why: 'Malevolent means wishing harm on others. The witches in Macbeth seem malevolent: they lead Macbeth on with half-truths, apparently for the pleasure of watching him destroy himself.',
    not: {
      'Wishing to do good for others':
        "That is benevolent, the opposite. Male means 'badly' and bene 'well'.",
      'Unwilling to take sides in a dispute':
        'That is being neutral. A malevolent person actively wants harm.',
      'Unable to tell right from wrong':
        'That is being amoral. A malevolent person knows what harm is, and wants it.',
    },
    more: "It comes from the Latin male, 'badly', and volens, 'wishing'. Malevolent forces in Gothic and tragic writing often work through temptation rather than open attack.",
    tip: "Use malevolent for deliberate ill will: it is stronger and more precise than 'evil'.",
  },
  Tyrannical: {
    why: "Tyrannical means using power cruelly and unjustly. By the end of Macbeth, Macbeth rules through fear and murder: Malcolm calls him 'This tyrant, whose sole name blisters our tongues', and Scotland suffers under him.",
    not: {
      'Ruling fairly with the full consent of the people': 'That is democratic rule, the opposite.',
      'Ruling weakly and letting others make the decisions':
        'That is weak rule. A tyrant holds total, cruel control.',
      'Ruling by long tradition and by inherited right':
        'That is hereditary rule. Kings who inherit the throne can be good or tyrannical.',
    },
    more: "The word tyrant first meant anyone who seized power, good or bad. Shakespeare's audience saw rebellion against a lawful king as a sin, which made a tyrant's fall a restoration of order.",
    tip: "Trace how a character becomes tyrannical: Macbeth's first murder leads to more, as fear demands ever more killing.",
  },
  Duplicitous: {
    why: "Duplicitous means deceitful: showing one face while hiding another. In Othello, everyone calls Iago 'honest Iago' while he secretly plots Othello's destruction.",
    not: {
      'Honest and straightforward in every dealing': 'That is the opposite of duplicitous.',
      'Having two different jobs at the same time':
        "Duplicity contains the idea of 'double', but it means double-dealing, not two jobs.",
      'Repeating one mistake again and again':
        'Duplicate means to copy, but duplicitous describes deceit, not repetition.',
    },
    more: "It comes from the Latin duplex, 'double'. A duplicitous character is often more frightening than an open enemy, because no one sees the danger until too late.",
    tip: 'Show duplicity with evidence of both faces: what the character says in public and what they reveal in private.',
  },
  Regicide: {
    why: "Regicide is the killing of a king. In Macbeth it is the worst crime imaginable: kings were believed to rule by God's will, so killing Duncan throws nature itself into disorder.",
    not: {
      'The overthrow of a king': 'That is deposing a king. Regicide means the king is killed.',
      'The killing of a brother': 'That is fratricide. The regi- in regicide means king.',
      'The crowning of a king': 'That is a coronation. Regicide is the killing of a monarch.',
    },
    more: "It comes from the Latin rex, regis, 'king', and -cide, 'killing', as in homicide. Macbeth was written soon after the Gunpowder Plot of 1605, a failed attempt to kill King James.",
    tip: "Use the belief in the divine right of kings to explain why Duncan's murder disturbs the whole natural order.",
  },
  Usurper: {
    why: "A usurper takes power, especially a throne, without the right to it. Macbeth becomes king by murder, so he is a usurper, and Malcolm, Duncan's heir, is the rightful king who returns at the end.",
    not: {
      'Someone who inherits a throne by right of birth':
        'That is a rightful heir, such as Malcolm. A usurper seizes power.',
      'Someone who lends money at very high interest':
        'That is a usurer, a similar-looking word for a moneylender.',
      'Someone who rules on behalf of a young king':
        'That is a regent. A regent rules for a lawful king; a usurper takes the throne for himself.',
    },
    more: "In The Tempest, Prospero's brother Antonio is also a usurper, who took his dukedom. Order is restored only when the rightful ruler returns.",
    tip: "Link usurpation to order: Shakespeare's plays usually end by restoring the rightful ruler.",
  },
  Equivocation: {
    why: "Equivocation is using words with double meanings to mislead without technically lying. The apparitions in Macbeth equivocate: 'none of woman born / Shall harm Macbeth' sounds like a promise of safety, but it hides a second meaning.",
    not: {
      'Telling an outright lie with complete confidence':
        'An outright lie says something false. Equivocation hides the truth inside words that are technically true.',
      'Treating every single person as exactly equal':
        'The word begins like equal, but equivocation is about deceptive double meanings.',
      'Refusing to give any answer to a question':
        'That is evasion by silence. Equivocation does answer, but in misleading words.',
    },
    more: "The Porter jokes about 'an equivocator, that could swear in both the scales against either scale'. Audiences in 1606 would think of the Gunpowder Plot trials, where a Jesuit priest defended equivocating under oath.",
    tip: "Use equivocation to discuss how language deceives in Macbeth: too late, Macbeth begins 'To doubt th’ equivocation of the fiend, / That lies like truth'.",
  },
  Complacent: {
    why: 'Complacent means smugly pleased with yourself and your situation, so that you do not see danger coming. Characters who are complacent at the start of a story are often the ones the writer means to shake.',
    not: {
      'Anxious, and alert to every danger ahead': 'That is the opposite: watchful and worried.',
      'Involved with others in doing something wrong':
        'That is complicit, a word that sounds similar. Complacent means smugly pleased with yourself, and so blind to the dangers ahead.',
      'Unhappy, and always finding fault':
        'That is complaining, which also sounds similar. A complacent person is too content, not too critical.',
    },
    more: "It comes from the Latin complacere, 'to please very much'. Complacency is often punished in literature: the comfortable world is the one that falls.",
    tip: "Use complacent rather than 'confident' when the confidence is a fault: it judges as well as describes.",
  },
  Patriarchal: {
    why: "A patriarchal society is one in which men hold the power, in the family and the state, and women are expected to obey. Victorian England was patriarchal: married women could not fully own property in their own right until the Married Women's Property Acts of 1870 and 1882.",
    not: {
      'Controlled by women, with men kept below them':
        'That is a matriarchal society, the reverse.',
      'Proud of one’s country and its traditions':
        'That is patriotic, a word from a similar root. Patriarchal is about male power.',
      'Ruled by priests in the name of religion':
        'That is a theocracy. Patriarchal describes rule by men, whether religious or not.',
    },
    more: "It comes from the Greek for rule by the father. Many set texts, from Romeo and Juliet to An Inspector Calls, show women's lives limited by patriarchal power.",
    tip: "Use the term to discuss context: Lord Capulet's fury when Juliet refuses Paris shows a patriarchal world.",
  },
  Misogyny: {
    why: "Misogyny is hatred of, or prejudice against, women. Hamlet's bitter cry 'Frailty, thy name is woman', provoked by his mother's quick remarriage, condemns all women for one woman's choice.",
    not: {
      'Hatred or distrust of people in general':
        'That is misanthropy, a dislike of all people. Misogyny is directed at women.',
      'Hatred of or prejudice against marriage':
        'That is misogamy, a much rarer word. Misogyny is about women.',
      'Prejudice against people from other lands':
        'That is xenophobia, fear or hatred of foreigners.',
    },
    more: "It comes from the Greek misein, 'to hate', and gyne, 'woman'. Critics often ask how far a text shares the misogyny of its characters, and how far it criticises it.",
    tip: 'Separate character from writer: a misogynistic speech in a play may be there to be judged, not agreed with.',
  },
  Hypocrisy: {
    why: 'Hypocrisy is claiming moral standards or beliefs that your own behaviour does not match. Mrs Birling chairs a charity, yet turns away a desperate girl, partly because the girl had called herself Mrs Birling.',
    not: {
      'Admitting faults openly and honestly to others':
        'That is candour, the opposite. A hypocrite hides faults behind a show of virtue.',
      'Exaggerating to make a story more dramatic':
        'That is exaggeration. Hypocrisy is about the gap between words and deeds.',
      'Being too critical of other people’s mistakes':
        'Hypocrites are often critical of others, but hypocrisy itself is failing your own standards.',
    },
    more: "It comes from the Greek hypokrites, 'actor': a hypocrite plays a part. Victorian writers attacked the hypocrisy of respectable society again and again.",
    tip: 'Show hypocrisy with two pieces of evidence: what the character claims, and what they do.',
  },
  Propaganda: {
    why: "Propaganda is biased or misleading information spread to win people over to a cause. In Animal Farm, Squealer's speeches and statistics persuade the animals that life is better than ever while they go hungry.",
    not: {
      'Balanced information that weighs both sides':
        'That is balanced reporting, the opposite. Propaganda takes one side.',
      'Secret information passed to an enemy':
        'That is spying. Propaganda is spread openly, to as many people as possible.',
      'Official information kept from the public':
        'That is secret information. Propaganda is pushed at the public, not hidden from it.',
    },
    more: 'The word comes from a Latin phrase for spreading the faith. In the twentieth century it became a tool of dictators, as Orwell saw in both Nazi Germany and the Soviet Union.',
    tip: 'Analyse propaganda by its methods: repetition, slogans, fear and false statistics.',
  },
  Superstition: {
    why: 'Superstition is belief in luck, omens or magic that has no basis in evidence. In Blood Brothers, Mrs Johnstone believes the warning that twins parted at birth will die if they learn the truth, and the fear shapes her choices.',
    not: {
      'A belief based on careful scientific evidence':
        'That is the opposite: a belief grounded in evidence.',
      'A belief that one group is better than others':
        'That is prejudice. Superstition is about luck and signs.',
      'A belief that hard work is always rewarded':
        'That is a belief about effort, which experience can test. Superstition has no evidence behind it.',
    },
    more: 'Superstitions include unlucky numbers, broken mirrors and new shoes on the table. In drama they can drive the plot, because characters act on fears that then come true.',
    tip: 'Discuss whether superstition or social class causes the tragedy in Blood Brothers: the play leaves the question open.',
  },
  Impetuous: {
    why: 'Impetuous means acting on sudden impulse, without thinking. Romeo is impetuous: he falls for Juliet within minutes, marries her the next day and kills Tybalt in a rage.',
    not: {
      'Acting slowly and only after careful thought':
        'That is cautious, the opposite. Romeo rarely stops to think.',
      'Acting cruelly towards those beneath you':
        'That is cruelty or tyranny. Impetuous means rash.',
      'Acting proudly, as if you ruled others':
        'That is imperious, a word that sounds similar. Impetuous means hasty and rash.',
    },
    more: "Friar Laurence warns him: 'Wisely and slow; they stumble that run fast.' The play shows what haste costs.",
    tip: "Use impetuous in essays on fate and choice: Romeo's haste causes as much damage as the stars.",
  },
  Fickle: {
    why: 'Fickle means changeable, especially in love or loyalty. Romeo seems fickle: he swears undying love for Rosaline, then forgets her the moment he sees Juliet.',
    not: {
      'Loyal through every difficulty': 'That is constant or faithful, the opposite.',
      'Feeling nothing for anyone at all':
        'That is cold or indifferent. Fickle people feel strongly, but not for long.',
      'Feeling jealous of every rival':
        'That is jealousy. Fickleness is about changing, not guarding.',
    },
    more: "Friar Laurence teases Romeo for it: 'Young men’s love then lies / Not truly in their hearts, but in their eyes.'",
    tip: "Use Romeo's changeability to question his love for Juliet, then weigh it against how he dies for her.",
  },
  Remorse: {
    why: "Remorse is deep regret and guilt for something wrong you have done. Lady Macbeth asks the spirits to 'Stop up th’ access and passage to remorse', so that no pity can hold her back; by Act 5, remorse is destroying her.",
    not: {
      'Deep anger at a wrong done to you':
        'That is resentment. Remorse is about wrong you have done, not wrong done to you.',
      'Deep fear of a punishment to come': 'That is dread. Remorse looks back with regret.',
      'Deep pride in a success you have worked for': 'That is pride, the opposite feeling.',
    },
    more: "It comes from the Latin remordere, 'to bite again': guilt that keeps biting. Writers show remorse through confession, sleeplessness or the urge to make amends.",
    tip: 'Distinguish remorse from fear of being caught: a character who regrets only being found out does not feel remorse.',
  },
  Redemption: {
    why: 'Redemption is being saved from sin or evil, or making amends for past wrongs. A Christmas Carol is a story of redemption: Scrooge is given the chance to change, and he takes it.',
    not: {
      'Being punished for every sin with no hope of change':
        'That is damnation, the opposite. Redemption offers a way back.',
      'Being rewarded with money for doing good for others':
        'Redemption is not a payment. It is being saved, or making amends.',
      'Being forced to repeat the same mistakes for all time':
        'That is being trapped by the past. Redemption is breaking free of it.',
    },
    more: "It comes from the Latin redimere, 'to buy back'. Christian ideas of redemption shape many Victorian novels, in which a sinner can be saved by love, suffering or repentance.",
    tip: 'Ask whether a character earns their redemption: Scrooge changes, but Dickens also asks the reader to change.',
  },
  Culpable: {
    why: "Culpable means deserving blame. An Inspector Calls asks how culpable each Birling is for Eva's death: none of them killed her, but each played a part.",
    not: {
      'Deserving praise for a good deed': 'That is praiseworthy, the opposite.',
      'Unable to tell right from wrong':
        'That is being amoral. A culpable person is blamed because they should have known better.',
      'Able to be very easily forgiven':
        'That is forgivable. A culpable person may be forgiven, but first they are to blame.',
    },
    more: "It comes from the Latin culpa, 'fault', as in the legal phrase 'culpable negligence'. The play suggests that blame does not shrink because others share it.",
    tip: "Use culpable to weigh responsibility: 'Although Birling is culpable, Priestley suggests the whole family shares the blame.'",
  },
  Exploitation: {
    why: 'Exploitation is using people unfairly for your own benefit, especially their work. Birling pays his workers as little as he can and sacks Eva for asking for more: Priestley presents his profits as built on exploitation.',
    not: {
      'Paying someone fairly for the work that they do': 'That is fair employment, the opposite.',
      'Exploring a new place for the first time':
        'That is exploration, a word that looks similar. Exploitation means taking unfair advantage.',
      'Encouraging someone to develop their talents':
        'That is nurturing talent. Exploitation uses people rather than helping them.',
    },
    more: 'Exploit can also mean making good use of something, as in exploiting a resource. Applied to people, it suggests injustice.',
    tip: 'Link exploitation to context: Priestley wrote in 1945, as Britain debated how workers should be treated after the war.',
  },
  Repression: {
    why: "Repression is holding back feelings or desires, keeping them hidden, often even from yourself. Jekyll and Hyde shows Victorian repression: Jekyll's hidden desires burst out as Hyde because they have been held down so hard.",
    not: {
      'Speaking openly about every thought and desire one has': 'That is openness, the opposite.',
      'Forgetting a memory because it is unimportant':
        'Repression can push memories away, but because they are painful, not because they are unimportant.',
      'Copying the behaviour of others to fit in':
        'That is conformity. Repression is about holding back what you feel.',
    },
    more: "Freud made repression a central idea of psychology in the years after Stevenson's novel. Critics often read Hyde as everything respectable Victorian men were expected to hold back.",
    tip: 'Use repression to discuss context: the novel suggests that hiding desires makes them more dangerous.',
  },
  Socialism: {
    why: 'Socialism is the belief that wealth and industry should be owned or controlled by the community and shared fairly. Priestley was a socialist, and the Inspector speaks for his belief that we are all responsible for each other.',
    not: {
      'A belief that industry should be privately owned to make a profit':
        "That is capitalism, Birling's belief. Socialism argues for shared ownership.",
      'A belief that one strong leader should hold all the power':
        'That is dictatorship. Socialism is about sharing wealth, which can be done democratically.',
      'A belief that there should be no government of any kind':
        'That is anarchism. Socialists usually want a strong state to share wealth fairly.',
    },
    more: 'In 1945, the year An Inspector Calls was first staged, Labour won a landslide election and began building the welfare state; the NHS opened in 1948.',
    tip: 'Link the play to its two dates: set in 1912, before the wars, and first staged in 1945, as Britain chose a fairer society.',
  },
  Totalitarian: {
    why: 'A totalitarian state controls every part of life: work, news, education, even thought. By the end of Animal Farm, Napoleon controls everything, uses dogs as secret police and rewrites history.',
    not: {
      'A state run by elected leaders who can be voted out':
        'That is a democracy. Totalitarian rulers cannot be voted out.',
      'A state with no government or laws of any kind at all':
        'That is anarchy, the opposite of total control.',
      'A state ruled by a king or a queen who inherits the crown':
        'That is a monarchy. Kings can be gentle or harsh; totalitarian means total control.',
    },
    more: "The word was coined in Mussolini's Italy in the 1920s. Orwell wrote Animal Farm and Nineteen Eighty-Four as warnings about totalitarian rule.",
    tip: "Use the term for Napoleon's farm, and support it with evidence: the dogs, the changed Commandments, the forced confessions.",
  },
  Propriety: {
    why: "Propriety means behaving correctly, according to society's rules. In Pride and Prejudice, Lydia's flirting and her running off with Wickham break every rule of propriety and threaten her sisters' reputations.",
    not: {
      'Ownership of land, houses and other goods':
        'That is property, a word that looks similar. Propriety is about correct behaviour.',
      'Rude behaviour that ignores social rules': 'That is impropriety, the opposite.',
      'Behaviour that is natural and unplanned':
        'Natural, unplanned behaviour may break the rules. Propriety follows them.',
    },
    more: "In Austen's world, one sister's impropriety could ruin a whole family's chances of good marriages, which is why Lydia's elopement is such a disaster.",
    tip: "Use propriety to discuss Austen's society: it judges women by their behaviour far more harshly than men.",
  },
  Providence: {
    why: "Providence is God's care and guidance over the world. In Silas Marner, Eppie's arrival seems providential: soon after Silas loses his gold, a child appears at his hearth and gives him a new life.",
    not: {
      'Blind chance that controls all events':
        'That is chance or luck. Providence means there is a purpose behind events.',
      'The punishment of wrongdoing by fate':
        'That is fate as punishment. Providence is caring guidance.',
      'A region or area within a single country': 'That is a province, a similar-looking word.',
    },
    more: "Victorian novels often show providence at work, rewarding the good. Jane Eyre hears Rochester's voice calling across the miles, and returns to him.",
    tip: "Ask whether a text's coincidences are providence or chance: the answer shapes its message about faith.",
  },
  Alienation: {
    why: "Alienation is feeling isolated, cut off from other people or from society. Frankenstein's creature feels it deeply: rejected by everyone he meets, he has no one in the world who will speak to him.",
    not: {
      'Feeling welcomed into a close community': 'That is belonging, the opposite.',
      'Feeling envious of other people’s success':
        'That is envy. An alienated person may envy others, but alienation is being cut off.',
      'Arriving in a country from abroad':
        'An alien can mean a foreigner, but alienation is a feeling of isolation.',
    },
    more: 'Writers often link alienation to bitterness: a character cut off from others may turn cruel or violent, as the creature does after his rejection.',
    tip: "Use alienation to discuss outsiders: Silas, the creature and Curley's wife are all cut off by others.",
  },
  Savagery: {
    why: "Savagery is fierce, cruel and uncivilised behaviour. Lord of the Flies traces the boys' slide from rules and meetings into savagery, as the hunt for food becomes a hunt for each other.",
    not: {
      'Calm, ordered and civilised behaviour': 'That is order, the opposite of savagery.',
      'Brave and heroic behaviour in battle':
        'That is valour. Savagery is cruelty without restraint.',
      'Wild, noisy and playful behaviour in children':
        'The boys start out playful, but savagery is violent and cruel.',
    },
    more: 'Golding, who served in the Royal Navy in the Second World War, believed that cruelty lies close beneath civilisation. The novel tests the idea that rules alone keep people good.',
    tip: 'Trace symbols of order and savagery, such as the conch and the painted faces, to show how the boys change.',
  },
  Ostracised: {
    why: 'To be ostracised is to be shut out by a group. Silas Marner is driven out of his chapel community when he is wrongly accused of theft, and he settles in Raveloe, where he lives alone.',
    not: {
      'Welcomed and warmly included by a group': 'That is being included, the opposite.',
      'Chosen to be the leader of a group':
        'Being chosen to lead is the opposite of being shut out.',
      'Punished by the law for a serious crime':
        'Ostracism is social, not legal: a group turns its back on someone.',
    },
    more: 'In ancient Athens, citizens could vote to banish someone for ten years by scratching the name on a piece of pottery, an ostrakon. The word still carries that idea of being cast out.',
    tip: 'Explain what being shut out does to a character: it can make someone bitter, lonely or dangerous.',
  },
  Usury: {
    why: 'Usury is lending money at interest, especially at unfairly high rates. Christian teaching had long condemned charging interest, so in many cities moneylending was one of the few trades open to Jewish people, like Shylock.',
    not: {
      'Taking a throne without the right to it':
        'That is usurping, a similar-looking word. Usury is about lending money.',
      'Giving money freely to those in need':
        'That is charity. Usury is the opposite: profiting from loans.',
      'Borrowing money without paying it back':
        'That is failing to repay a debt. Usury is about charging interest.',
    },
    more: "Shylock hates Antonio partly because 'He lends out money gratis, and brings down / The rate of usance here with us in Venice.'",
    tip: "Use the history of moneylending as context to explain Shylock's position, and the prejudice he faces.",
  },
  Pompous: {
    why: 'Pompous describes someone self-important, who speaks grandly to show how much they think they matter. Mr Birling is pompous: he lectures the young men at length, sure of his own wisdom, just before he is proved wrong.',
    not: {
      'Modest and quietly unassuming': 'That is the opposite of pompous.',
      'Cheerful and noisily excited': 'Pompous people are solemn and self-important, not bubbly.',
      'Nervous and easily embarrassed': 'Pompous people are over-confident, not timid.',
    },
    more: 'It comes from pomp, grand ceremony. Writers mock pompous characters by puncturing them: an interruption, a fall, or a doorbell at the wrong moment.',
    tip: 'Show pomposity through language: long speeches, grand words and statements of certainty.',
  },
  Treacherous: {
    why: 'Treacherous means betraying trust. The first Thane of Cawdor is a traitor who sides with Norway against Duncan, and Macbeth, who is given his title, goes on to betray Duncan far worse.',
    not: {
      'Loyal to others even when it is dangerous': 'That is the opposite of treacherous.',
      'Afraid of being betrayed by those close to you':
        'That is distrust or suspicion. Treachery is doing the betraying.',
      'Cruel to those who are weaker than you':
        'Treacherous people may be cruel, but the word means betraying trust.',
    },
    more: 'Treacherous can also describe dangerous ground or weather, which seems safe but is not. Both senses involve something that cannot be trusted.',
    tip: 'Link treachery to appearance and reality: traitors are trusted until the moment they strike.',
  },
  Prophecy: {
    why: "A prophecy is a prediction of the future, often from a supernatural source. The witches' prophecy that Macbeth will be king sets the action of the play going, though it never tells him how.",
    not: {
      'A memory of something that happened very long ago':
        'A memory looks back. A prophecy looks forward.',
      'A curse that brings bad luck to a family for years':
        'A curse wishes harm. A prophecy foretells what will happen.',
      'A secret plan to seize power from a rightful king':
        'A plan is something people make. A prophecy claims to know the future.',
    },
    more: "Prophecies in drama raise the question of fate: does the prediction cause the events it foretells? Macbeth acts to make the witches' words come true.",
    tip: 'Use prophecies to debate fate and free will: is Macbeth fated to murder, or does he choose it?',
  },
  'In context: covetous (A Christmas Carol)': {
    why: "Covetous means greedily wanting more, especially what belongs to others. Dickens piles up verbs of grabbing, 'squeezing, wrenching, grasping', so that by the time 'covetous' arrives the reader sees a man who can never have enough money.",
    not: {
      'Cruel to those weaker than himself':
        'Scrooge is harsh to Bob Cratchit, but covetous names a desire for wealth, not cruelty.',
      'Secretive about his private affairs':
        "The next sentence calls him 'secret', but covetous means greedy to have more.",
      'Bitterly regretful about his past':
        'Scrooge feels no regret yet; that comes with the ghosts. Covetous describes greed.',
    },
    more: "Covet is the verb, as in the commandment 'Thou shalt not covet'. The word ties Scrooge's love of money to sin, which prepares readers for a story of moral change.",
    tip: "Analyse word choice in lists: 'The list of grasping verbs makes Scrooge's greed seem ceaseless and active, never resting.'",
  },
  'In context: business (A Christmas Carol)': {
    why: "Scrooge uses business to mean trade and making money. Marley's Ghost turns the word around: his real business, his proper concern and duty, should have been other people. The repetition shows how wrongly he spent his life.",
    not: {
      'His trade and way of earning':
        "That is how Scrooge uses the word, and Marley's point is that he was wrong to. Here business means his true duty to others.",
      'His firm’s customers and clients':
        'Marley is not talking about clients. Mankind, all people, should have been his concern.',
      'His hobby and favourite pastime':
        'A hobby is a pastime. Marley means a serious duty that he neglected.',
    },
    more: 'Marley goes on to list charity and mercy as his business too. Dickens uses the ghost to redefine business as a moral duty, a message aimed at the employers and businessmen reading in 1843.',
    tip: 'Quote this when writing about responsibility: Dickens, like Priestley, argues that we are all responsible for others.',
  },
  'In context: Want (A Christmas Carol)': {
    why: "Here Want means poverty: having too little to live on, not wishing for something. Dickens turns poverty and ignorance into two children to show that they are society's own creation, and its responsibility.",
    not: {
      'Greedy desire for luxuries one does not need':
        "That is the modern sense of wanting things. Dickens's Want is the opposite: not having enough to survive.",
      'Envy of those who are rich and comfortable':
        "Envy is resentment of other people's wealth. Want is the condition of being poor.",
      'Hopeful longing for a better and fairer future':
        'Want here is not a wish. It names the hunger and poverty the girl suffers.',
    },
    more: "The Spirit says the children are 'Man's', belonging to all humanity. Dickens was writing in the 'Hungry Forties', when many poor families lacked food, and he wanted readers to see poverty as a danger to everyone.",
    tip: "Use Want and Ignorance when writing about Dickens's purpose: the two children make the reader face the poor as the whole society's problem.",
  },
  'In context: surplus (A Christmas Carol)': {
    why: 'Surplus means more than is needed. Scrooge treats the poor as extra people the country could do without, a cold phrase from the economics of his day that Dickens wants readers to find shocking.',
    not: {
      'Poorest and most desperate':
        'Scrooge means the poor, but surplus does not mean poor: it means extra, and so unwanted.',
      'Growing far too quickly':
        'Fears about a growing population lay behind the phrase, but surplus itself means excess.',
      'Ignorant and badly behaved':
        'Surplus says nothing about behaviour. It treats people as a number left over.',
    },
    more: "The idea came from Thomas Malthus, who argued that population would outgrow food. In Stave Three the Spirit throws Scrooge's words back at him when he asks whether Tiny Tim will live.",
    tip: "Quote the Spirit's reversal to show Scrooge's change: the same words that once sounded clever now fill him with shame.",
  },
  'In context: word (A Christmas Carol)': {
    why: "Your word is your promise. Scrooge promised Bob a raise and help for his family; being better than his word means he did even more than he promised, becoming 'a second father' to Tiny Tim.",
    not: {
      'What he had said in anger':
        'Scrooge is no longer angry by Stave Five. His word here is his promise, which he more than keeps.',
      'The way he spoke to others':
        'The phrase is not about his manner of speaking. To be better than your word is to do more than you promised.',
      'His good name in the city':
        'A good name is a reputation. His word here is what he said he would do.',
    },
    more: "The idiom lives on in phrases such as 'give your word' and 'a man of his word'. Dickens ends with action rather than speeches: Scrooge's change is proved by what he does.",
    tip: "Use Stave Five to argue that Dickens values deeds: Scrooge's goodness is measured by actions, not feelings alone.",
  },
  'In context: forged (A Christmas Carol)': {
    why: "To forge is to make metal objects by heating and hammering them. Marley made his chain himself, 'link by link', through every selfish act in life. The verb shows that his punishment is his own work, not something done to him.",
    not: {
      'Faked or copied in order to deceive':
        'Forged can mean faked, as in a forged signature, but Marley means he made the chain himself, through his deeds.',
      'Broke free from at the end of his life':
        'Marley is still bound by the chain; he never escapes it. He forged it, meaning he made it.',
      'Was forced to carry as a punishment':
        'He does carry it as punishment, but forged means made. The point is that he made his own chain.',
    },
    more: "The chain is made of 'cash-boxes, keys, padlocks, ledgers, deeds, and heavy purses'. Marley warns that Scrooge's own chain was as long as his seven Christmas Eves ago, and has grown since.",
    tip: "Explain the symbol: 'The chain, forged link by link, shows that every greedy act binds Marley more tightly, a warning to Scrooge.'",
  },
  'In context: submissively (A Christmas Carol)': {
    why: "Submissively means meekly, giving way to someone else's authority. After one night with the Ghost of Christmas Past, Scrooge no longer argues: he lets the Spirit lead him anywhere, a sign that his change has begun.",
    not: {
      'Fearfully, ready to run away':
        'Scrooge is in awe of the spirits, but submissively means giving way and obeying, not trying to escape.',
      'Slyly, hoping to trick him':
        'There is no trick. Scrooge says he has learnt a lesson and wants to profit by it.',
      'Angrily, ready to argue back':
        'That was Scrooge in Stave One. Here he has stopped arguing and is ready to obey.',
    },
    more: "It comes from submit, from the Latin for 'to place under'. Compare Stave One, where Scrooge mocks Marley's Ghost and tries to explain it away as indigestion.",
    tip: "Track adverbs like this one to show change: Scrooge's manner shifts from mockery to obedience as the spirits teach him.",
  },
  'In context: render (A Christmas Carol)': {
    why: "To render someone happy is to make them happy. Watching his old employer's party, Scrooge realises that an employer's small kindnesses have great power over workers' lives, a lesson about his own treatment of Bob.",
    not: {
      'To pay or reward with money':
        'Fezziwig does pay his workers, but render here means to make: he has the power to make them happy.',
      'To hide or keep secret':
        "Render does not mean conceal. Fezziwig's power is to cause happiness or unhappiness.",
      'To pretend or act as if':
        'Scrooge is not talking about pretending. Render means to make someone or something become.',
    },
    more: "Scrooge goes on to say that Fezziwig's power lies 'in words and looks', in things too small to count up. Dickens suggests that kindness costs little but is worth a fortune.",
    tip: 'Use this moment to show Scrooge beginning to judge himself: he defends Fezziwig, yet his words condemn his own behaviour.',
  },
  'In context: Vaulting (Macbeth)': {
    why: "Vaulting means leaping, as a rider vaults onto a horse. Macbeth pictures his ambition jumping so high that it 'o’erleaps itself' and falls on the other side: a warning, in his own words, of his downfall.",
    not: {
      'Locked away and kept hidden from view':
        'A vault can be a locked room, but here vaulting is a verb: leaping. The image is of a jump that goes too far.',
      'Growing slowly and steadily over time':
        'Vaulting is sudden and forceful, not slow. Macbeth fears his ambition will carry him too far, too fast.',
      'Proud, loud and openly boastful':
        'Ambition can be boastful, but vaulting describes movement: a leap so high it overreaches.',
    },
    more: "The image comes from riding: Macbeth has 'no spur' to drive him except ambition, which leaps too far and falls. The metaphor predicts the shape of the whole play.",
    tip: 'Quote this to show that Macbeth understands his own flaw: he knows ambition is his only motive, and still goes ahead.',
  },
  'In context: Infirm (Macbeth)': {
    why: 'Infirm means weak. Lady Macbeth scorns her husband as weak in purpose: he had the will to kill but has lost the nerve to finish the plan by returning the daggers. She takes them herself.',
    not: {
      'Ill and in need of rest':
        'Infirm can mean physically frail, but Macbeth is not ill. She means his will is weak.',
      'Firm and unshakeable': 'The prefix in- means not: infirm is the opposite of firm.',
      'Unsure of the facts':
        'Macbeth knows exactly what he has done. His problem is weakness of will, not lack of facts.',
    },
    more: "The scene reverses the expected roles of the time: Lady Macbeth, who asked spirits to 'unsex' her, accuses her husband of weakness. Later in the play it is her mind that proves infirm.",
    tip: 'Use the phrase to discuss power in the marriage: at this moment Lady Macbeth is the stronger partner, though not for long.',
  },
  'In context: art (Macbeth)': {
    why: "Art here means skill or method. Duncan says there is no skill that can read a person's mind from their face: he trusted the traitor Cawdor completely. He is about to make the same mistake with Macbeth.",
    not: {
      'A painted picture':
        'Art today often means painting, but Duncan means a skill: there is no way to read the mind in a face.',
      'Magic or spells':
        'Shakespeare sometimes uses art for magic, but Duncan means a learned skill or method.',
      'A secret plan':
        'Duncan is not describing a plot. He means no method exists to see what someone is really thinking.',
    },
    more: "Art comes from the Latin ars, 'skill', as in artful and artisan. Shakespeare times the line cruelly: Macbeth enters the moment Duncan has said it.",
    tip: 'Quote it when writing about appearance and reality, a key idea: faces hide minds throughout the play.',
  },
  'In context: temper (Macbeth)': {
    why: "Temper here means the nature or quality of Banquo's mind, not anger. Macbeth admires and fears a man whose fearless character is guided by wisdom, which makes Banquo dangerous to him.",
    not: {
      'Sudden burst of anger':
        "That is the modern sense, as in 'losing your temper'. Here temper means character or temperament.",
      'Habit of hiding things':
        'Nothing in the line suggests secrecy. Temper names the quality of his mind: dauntless, fearless.',
      'Changeable bad moods':
        "Macbeth is not describing a passing mood. Temper means the settled nature of Banquo's mind.",
    },
    more: "Temper comes from the Latin temperare, 'to mix': the old idea that a person's nature was a mixture of humours. Steel is also tempered, made hard and strong, which suits Banquo's dauntless mind.",
    tip: "Use this speech to show Macbeth's insecurity: he has Banquo killed because Banquo's good qualities threaten him.",
  },
  'In context: beguile (Macbeth)': {
    why: "To beguile is to deceive. Lady Macbeth tells Macbeth that to fool everyone around them, he must look as they expect, welcoming and loyal: 'look like the innocent flower, / But be the serpent under’t'.",
    not: {
      'To hurry or speed up':
        'Beguile does not mean to speed up. Lady Macbeth wants Macbeth to deceive those around him.',
      'To forget about':
        'She is not telling him to forget. To beguile the time is to fool the people of the time.',
      'To waste or lose':
        'Nothing is being wasted. Beguile means to trick people by hiding your true intentions.',
    },
    more: 'Beguile can also mean to charm, often in a way that misleads. Deceptive appearances run all through Macbeth: the play is full of fair faces hiding foul thoughts.',
    tip: "Use the line to discuss Lady Macbeth's control: she teaches her husband how to act the loyal host.",
  },
  'In context: Signifying (Macbeth)': {
    why: 'To signify is to mean or stand for. Macbeth now sees life as a story full of noise and passion that means nothing at all: the bleakest moment of a man who has lost everything he murdered for.',
    not: {
      'Signing or agreeing to':
        'Signify contains sign, but it means to mean something, not to sign a document.',
      'Achieving or earning':
        'Macbeth is talking about meaning, not achievement: life, he says, signifies nothing.',
      'Hiding or holding back':
        'Signifying is the opposite of hiding: it means making a meaning known.',
    },
    more: "The speech follows the news of Lady Macbeth's death. 'Sound and fury' became a famous phrase: William Faulkner used it as the title of a novel about a family in decline.",
    tip: 'Compare Macbeth here with the ambitious man of Act 1: his despair shows the emptiness of what he won.',
  },
  'In context: wherefore (Romeo and Juliet)': {
    why: "Wherefore means why. Juliet is not asking where Romeo is: she is asking why he has to be Romeo, a Montague, her family's enemy. Her next line makes it clear: 'Deny thy father and refuse thy name.'",
    not: {
      'In which place':
        'This is the most common mistake with the line. Juliet does not know Romeo is below; she asks why he must be a Montague.',
      'At what moment': 'Juliet is not asking when. Wherefore asks about a reason.',
      'In whose company':
        'Juliet is alone, and she is not asking who is with Romeo. Wherefore asks about a reason.',
    },
    more: "Wherefore survives in the phrase 'the whys and wherefores', the reasons for something. Juliet goes on to argue that a name means nothing: 'That which we call a rose / By any other name would smell as sweet'.",
    tip: "Use the line to discuss identity and conflict: the lovers' problem is not who they are but whose children they are.",
  },
  'In context: dignity (Romeo and Juliet)': {
    why: 'Dignity here means rank or status. The Capulets and Montagues are equally noble and important, so neither will back down. Their equal standing is part of why the feud cannot end.',
    not: {
      'Calm, serious self-control':
        'That is the modern sense of dignity, and the families show little of it. Here it means rank.',
      'Pride and hatred of rivals':
        'Pride fuels the feud, but dignity means status: the families are equal in rank.',
      'Wealth and their grand houses':
        'Both families are rich, but dignity means their noble standing, not their money or houses.',
    },
    more: "The Prologue is a sonnet spoken by the Chorus. 'Alike in dignity' stresses that neither family is better than the other, so the play does not let either take the blame alone.",
    tip: 'Use the opening line in answers about conflict: two equally proud families give the feud no natural end.',
  },
  'In context: houses (Romeo and Juliet)': {
    why: 'Houses here means families: the Montagues and Capulets with all their followers. Mercutio, who belongs to neither, blames both for the feud that has cost him his life, and his curse comes true.',
    not: {
      'Buildings where they live':
        "Mercutio is not cursing buildings. A house can mean a noble family, as in 'the House of Tudor'.",
      'Servants and their noble masters':
        'The servants belong to each house, but Mercutio curses the whole families, masters included.',
      'Swords and fighting skills':
        'Mercutio has just been wounded in a fight, but houses does not mean weapons. He blames the two families.',
    },
    more: 'Mercutio repeats the curse three times as he dies. From this point the play turns from comedy to tragedy: Romeo kills Tybalt and is banished.',
    tip: "Use Mercutio's curse to discuss blame: Shakespeare suggests the feud, not fate alone, destroys the young.",
  },
  'In context: fool (Romeo and Juliet)': {
    why: "A fool here is a plaything or dupe: someone tricked and mocked. Romeo feels that fortune is toying with him, since his attempt at peace has led to Mercutio's death and his own killing of Tybalt.",
    not: {
      'A jester who entertains':
        'A fool can be a jester, but Romeo is not entertaining anyone. He means fate has made a dupe of him.',
      'A favourite and lucky one':
        "Romeo feels the opposite of lucky. Fortune's fool is fortune's victim.",
      'A sworn and bitter enemy':
        'Romeo does not mean fortune hates him as an enemy would. He feels used and mocked, like a puppet.',
    },
    more: "The line links to the play's ideas of fate: in the Prologue the lovers are 'star-cross’d'. But Romeo's own haste also causes the disaster, so readers can debate how far fate is to blame.",
    tip: 'Use this line in a fate-versus-choice essay: Romeo blames fortune, but Shakespeare also shows his reckless choices.',
  },
  'In context: soft (Romeo and Juliet)': {
    why: "Soft here is an exclamation meaning 'wait' or 'hush'. Romeo stops himself suddenly as a light appears at the window. The word belongs to the action of the scene: he must keep quiet in the Capulets' orchard.",
    not: {
      'Faint; muted':
        'Soft can describe a gentle, muted light, but here it does not describe the light at all: it is an exclamation, as Romeo tells himself to hush and wait.',
      'Weak; feeble':
        'Soft can mean weak, but Romeo is telling himself to hush as he sees the light.',
      'Smooth; silky': 'That is the sense of a soft fabric. Here the word is an exclamation.',
    },
    more: "Shakespeare's characters often say 'soft' to mean 'stop' or 'quiet', as people today might say 'hang on'. Romeo is in danger: a Montague caught in the Capulets' orchard could be killed.",
    tip: 'Notice small words like this one: they show the danger the lovers are in, even at their happiest.',
  },
  'In context: bounty (Romeo and Juliet)': {
    why: "Bounty here means generosity: her capacity to give. Juliet says that the more love she gives Romeo, the more she has, because both are infinite. It is one of the play's most generous images of love.",
    not: {
      'A reward offered for a capture':
        "That is a bounty on a wanted person's head. Juliet means her own generosity in giving love.",
      'Her family’s wealth and land':
        'Juliet is not offering money. Her bounty is the love she gives.',
      'Her beauty and her great charm':
        'The words sound alike, but bounty means generosity, not beauty.',
    },
    more: "The line goes on: 'the more I give to thee, / The more I have, for both are infinite.' Love, she suggests, grows by being given away.",
    tip: "Compare Juliet's language with Romeo's: in this scene she is the more direct and more generous speaker.",
  },
  'In context: countenance (Jekyll and Hyde)': {
    why: "Countenance means face, or the expression on it. Utterson's rough, unsmiling face suggests a serious, reserved man, yet Stevenson adds that he is 'somehow lovable': first impressions in this novel can mislead.",
    not: {
      'Manner of speaking':
        "Utterson's speech is described separately in the same sentence. Countenance means his face.",
      'Way of walking and standing': 'That would be his gait or bearing. Countenance means face.',
      'Body and its build': "His build comes later, 'lean, long'. Countenance is the face.",
    },
    more: "Countenance can also be a verb meaning to allow: 'I will not countenance lies.' Faces matter throughout the novel, since Hyde's face fills people with a disgust they cannot explain.",
    tip: 'Note how Stevenson opens with a respectable, restrained gentleman: Utterson represents the Victorian values that Hyde will threaten.',
  },
  'In context: troglodytic (Jekyll and Hyde)': {
    why: 'A troglodyte is a cave-dweller, so troglodytic means primitive and less than fully human. Utterson reaches for the word because Hyde seems like a throwback to an earlier, savage stage of human life.',
    not: {
      'Gigantic and brutal, like an ogre':
        'Hyde is small, not gigantic. Troglodytic suggests a primitive cave-dweller.',
      'Deformed, like a hunchback':
        'Hyde gives an impression of deformity, but troglodytic means primitive, like early humans in caves.',
      'Magical, like an old wizard':
        'Nothing magical is meant. The word suggests something ancient and brutish.',
    },
    more: "Victorian readers knew Darwin's theory of evolution and feared degeneration: that humans might slide back into a more animal state. Stevenson's language makes Hyde a living example of that fear.",
    tip: "Use Utterson's struggle to find words: Hyde's evil is so strange that respectable language cannot describe it.",
  },
  'In context: discourse (Jekyll and Hyde)': {
    why: 'Discourse means conversation. Utterson says little and is awkward when he talks: a reserved, careful man, which is partly why people trust him with their secrets.',
    not: {
      'Business and money matters':
        'Utterson is a lawyer, but discourse means speech, not business.',
      'Friendship and love affairs':
        'His friendships come later in the chapter. Discourse is the way he talks.',
      'Dress and outward appearance':
        "Stevenson describes Utterson's looks separately. Discourse means conversation.",
    },
    more: "Discourse comes from the Latin for 'running to and fro', as talk moves back and forth. It can also mean a formal speech or a written argument.",
    tip: "Use Utterson's reserve to discuss the novel's secrets: a man who speaks little suits a story about things that must not be said.",
  },
  'In context: pallor (Jekyll and Hyde)': {
    why: "Pallor is paleness, usually an unhealthy one. A 'dusky pallor' is a strange, dark paleness, almost a contradiction, which makes the hand seem sickly and wrong. Jekyll realises he has turned into Hyde in his sleep.",
    not: {
      'Smoothness of the skin':
        "The hand is 'corded' and 'knuckly', not smooth. Pallor describes its colour.",
      'Strength and size': 'The hand is lean and corded, but pallor means paleness, a colour.',
      'Warmth to the touch': 'Pallor is about how skin looks, not how it feels.',
    },
    more: "Pallor comes from the Latin pallere, 'to be pale', like pallid. The moment terrifies Jekyll: the change has begun to happen without the potion.",
    tip: "Analyse the list of adjectives: each detail makes the hand more animal and less like a gentleman's.",
  },
  'In context: fiend (Frankenstein)': {
    why: 'A fiend is a devil or evil spirit. The creature argues that he was born good and became evil only because he was rejected and made miserable: a direct challenge to the idea that he was always a monster.',
    not: {
      'A lonely, rejected outcast':
        'He is a rejected outcast, and that is his argument, but fiend means an evil, devilish being.',
      'A loyal, faithful servant':
        "The creature refuses to be anyone's servant. Fiend means devil.",
      'A fearless, mighty warrior': 'A fiend is not a fighter but an evil spirit.',
    },
    more: "The creature's argument echoes the ideas of Rousseau, who believed people are born good and corrupted by society. Shelley asks readers who is really to blame for the creature's crimes.",
    tip: 'Quote this to argue that Shelley makes the creature sympathetic: his evil is caused by how others treat him.',
  },
  'In context: ardour (Frankenstein)': {
    why: "Ardour means passionate, burning eagerness. Victor worked on his creation with a passion that went far beyond reason, or 'moderation', and Shelley shows that this obsession, not knowledge itself, leads to disaster.",
    not: {
      'Calm and quiet patience':
        "Victor's feeling was the opposite of calm: a burning passion that ignored his health and rest.",
      'Secret shame and guilt':
        'Shame comes later, when he sees what he has made. Ardour is eager passion.',
      'Careful, slow planning':
        'He did plan carefully, but ardour names the passion that drove him, not the planning.',
    },
    more: "Ardour comes from the Latin ardere, 'to burn', which also gives ardent. Romantic writers prized passion, but Shelley warns what happens when it escapes all control.",
    tip: "Contrast the ardour with the result: the moment he succeeds, 'breathless horror and disgust filled my heart'.",
  },
  'In context: afforded (Frankenstein)': {
    why: 'To afford here means to give or provide. The mountains gave Victor the greatest comfort he could feel after the deaths of William and Justine: nature soothes him, though it cannot remove his grief.',
    not: {
      'Could pay for':
        "That is the everyday sense, as in 'I can't afford it'. Here afford means to give or supply.",
      'Took away from': 'The scenes give him comfort; they do not take it away.',
      'Hid away from': 'Nothing is hidden. The scenes provide consolation.',
    },
    more: "The older sense survives in phrases such as 'the window affords a fine view'. Shelley's mountains calm the mind: Victor says they 'subdued and tranquillised' his grief.",
    tip: 'Note how nature works on characters in Romantic writing: it comforts and humbles, even when it cannot heal.',
  },
  'In context: infuse (Frankenstein)': {
    why: "To infuse is to put a quality into something, filling it. Victor wants to pour 'a spark of being', life itself, into the lifeless body. The image of a spark suggests electricity, then a new and thrilling science.",
    not: {
      'Draw out of; take from': 'That is to extract, the opposite. Victor wants to put life in.',
      'Light; set on fire':
        'The spark is an image of life, but infuse means to put into, not to set alight.',
      'Join together; fuse':
        'The words share a root, but to fuse is to join together. To infuse is to fill something with a quality.',
    },
    more: "Infuse comes from the Latin infundere, 'to pour in', as tea is infused in hot water. Shelley never explains exactly how Victor does it, which keeps the science mysterious.",
    tip: "Analyse the language of creation: 'a spark of being' makes life sound like something that can be switched on, which is what makes Victor's act so unnatural.",
  },
  'In context: inarticulate (Frankenstein)': {
    why: 'Inarticulate means unable to form clear words. The creature, only just alive, makes sounds like a baby, but Victor flees in horror. The reader may see a newborn reaching out; Victor sees only a monster.',
    not: {
      'Loud, angry and threatening':
        'Nothing says the sounds are threatening. Inarticulate means unclear, not aggressive.',
      'Gentle, soft and soothing':
        'The sounds may be harmless, but inarticulate means not shaped into words.',
      'In a strange foreign tongue':
        'The creature has no language yet, foreign or otherwise. The sounds are not words at all.',
    },
    more: 'Articulate means able to express yourself clearly. By the middle of the novel the creature has taught himself to speak with great eloquence, a striking change from this first moment.',
    tip: "Use the contrast: the creature moves from wordless sounds to eloquent speeches, which challenges Victor's view of him as a monster.",
  },
  'In context: coarse (Great Expectations)': {
    why: "Coarse means rough, and also common or low-class. Estella mocks Pip's working hands to show that he is beneath her, and the insult makes Pip ashamed of himself, and of Joe, for the first time.",
    not: {
      'Dirty and unwashed':
        'Estella is not complaining about dirt. Coarse means rough in texture and, to her, low-class.',
      'Large, heavy and clumsy': 'Size is not her point. Coarse hands are rough from work.',
      'Cold, pale and bony': 'Coarse is about texture and class, not temperature or colour.',
    },
    more: "Pip says her contempt 'was so strong, that it became infectious', and he catches it: he begins to despise his own home. The novel follows how he learns to value it again.",
    tip: "Use this moment to discuss class: Estella's single word plants the shame that drives Pip's ambition.",
  },
  'In context: common (Great Expectations)': {
    why: "Common here means low-born, of the working class, and it is meant as an insult. To Estella, raised as a lady, a blacksmith's boy is beneath her notice.",
    not: {
      'Shared by everyone':
        'Common can mean shared, as in common land, but Estella is sneering at his social class.',
      'Widespread and frequent':
        'Common can mean widespread, as in a common cold, but here it is a snobbish word for lower-class.',
      'Kind and good-natured': 'Estella is not praising him. She uses common as an insult.',
    },
    more: "Soon afterwards Pip tells Biddy, 'I want to be a gentleman', and admits it is because of Estella. The word common haunts him for much of the novel.",
    tip: "Trace the word through the novel: what makes someone common, and what makes a true gentleman, is the book's central question.",
  },
  'In context: welded (Great Expectations)': {
    why: "To weld is to join pieces of metal by heating them until they fuse. Joe, a blacksmith, uses his own trade to describe life: a chain of goodbyes fixed together. His homely image is wiser than all Pip's fine manners.",
    not: {
      'Torn roughly apart':
        'Welded means joined, the opposite. The partings are fixed together to make up a life.',
      'Hidden carefully away': "Nothing is hidden. Joe's image is of pieces joined into one.",
      'Hammered flat and smooth': 'Smiths hammer metal, but welded means joined, not flattened.',
    },
    more: "Joe goes on: 'one man's a blacksmith, and one's a whitesmith, and one's a goldsmith'. He accepts that he and Pip now belong to different worlds, with a dignity that shames Pip.",
    tip: "Use Joe's speech to argue that Dickens values goodness over refinement: the blacksmith is the novel's true gentleman.",
  },
  'In context: want (Pride and Prejudice)': {
    why: 'In want of means lacking or in need of. The famous first sentence is ironic: it claims that every rich single man needs a wife, but the novel shows it is the neighbours, especially mothers with daughters, who need him to need one.',
    not: {
      'Afraid of meeting':
        'Nothing suggests fear. In want of means lacking: he is supposed to need a wife.',
      'Already engaged to':
        'He has no wife and no fiancée; that is the point. In want of means without.',
      'Wishing to impress':
        'The phrase is not about impressing anyone. It means needing or lacking.',
    },
    more: "Want meaning lack survives in phrases such as 'for want of a better word'. Austen's opening line is a model of irony: its grand, general statement is really about gossip and money.",
    tip: "Quote the first line to discuss Austen's irony: the 'truth universally acknowledged' is really a local obsession with marriage and money.",
  },
  'In context: tolerable (Pride and Prejudice)': {
    why: "Tolerable means only just acceptable: bearable, but no more. Darcy's cool verdict, which Elizabeth overhears, is an insult, and it sets up the prejudice against him that she must later overcome.",
    not: {
      'Very patient and kind':
        'That would be tolerant, a related word. Tolerable describes something you can just put up with.',
      'Strikingly beautiful':
        "Darcy means the opposite of praise. He adds that she is 'not handsome enough to tempt' him.",
      'Easy to talk with':
        'Darcy has not spoken to her. Tolerable is a judgement of her looks, and a lukewarm one.',
    },
    more: "Tolerable and tolerant both come from the Latin tolerare, 'to endure'. Austen lets Elizabeth laugh off the insult in public, but her first impression of Darcy is fixed.",
    tip: "Use the word to show how first impressions drive the plot: one cold word shapes Elizabeth's judgement of Darcy for half the novel.",
  },
  'In context: condescension (Pride and Prejudice)': {
    why: "In Austen's day, condescension could be praise: a great lady graciously lowering herself to be kind to people of lower rank. Mr Collins means it admiringly, but Austen lets readers hear the modern sense too.",
    not: {
      'Treating others as if they were fools':
        'That is the modern, negative sense. Mr Collins is praising her, so here it means gracious kindness to those below her.',
      'Strict control of her household':
        'Lady Catherine does control others, but condescension names her manner towards those beneath her.',
      'Generous gifts of money to the poor':
        'Condescension is not about money. It is a manner: stooping, kindly, to people of lower rank.',
    },
    more: "The word's meaning has shifted: once a compliment, it is now an insult. Austen's irony works in the gap, since Lady Catherine's 'condescension' looks very like arrogance.",
    tip: 'Words change meaning over time, so read older texts carefully: ask what the speaker means, and what the writer wants us to notice.',
  },
  'In context: mean (Pride and Prejudice)': {
    why: "Mean here means limited or poor in quality. Mrs Bennet is not unkind; she is not clever. Austen's narrator sums her up in one cutting sentence: a small mind, little knowledge, unpredictable moods.",
    not: {
      'Unkind and cruel':
        "That is the modern sense. Austen means Mrs Bennet's intelligence is limited, not that she is cruel.",
      'Selfish with money':
        'Mean can mean stingy, but Austen is describing her understanding, her mind.',
      'Clever or skilled':
        'Informally, mean can mean excellent, as when a cook makes a mean curry, but Austen is not praising Mrs Bennet: her understanding is poor.',
    },
    more: "The same sentence describes her 'uncertain temper', meaning unpredictable moods. Austen's narrator often judges characters directly, with a brief, ironic summary.",
    tip: "Use the sentence to discuss Austen's narrator: her crisp judgements guide the reader's view of each character from the start.",
  },
  'In context: parts (Pride and Prejudice)': {
    why: 'Parts here means abilities or talents, especially of the mind. Quick parts means a sharp intelligence: Mr Bennet is clever and witty, which makes his failure to guide his daughters all the more disappointing.',
    not: {
      'Roles played in a drama':
        'Parts can be roles in a play, but Austen means his mental abilities.',
      'Pieces of a whole':
        "Parts usually means pieces, but here it means talents: 'quick parts' is a sharp mind.",
      'Places and regions':
        "Parts can mean regions, as in 'these parts', but here the word describes his mind.",
    },
    more: "The phrase 'a man of parts', meaning a talented man, survives today. Caprice, from the same sentence, means a sudden change of mood or mind.",
    tip: "Note Austen's balanced lists: each quality is weighed against another, so the reader sees both Mr Bennet's charm and his faults.",
  },
  'In context: officious (Pride and Prejudice)': {
    why: 'Officious means too eager to offer help or attention, in an annoying way. Elizabeth teases Darcy that women had always fussed over him, and that she won him by being different.',
    not: {
      'Formal and businesslike':
        'That would be official, a similar-looking word. Officious describes pushy, unwanted helpfulness.',
      'Shy, quiet and hesitant':
        'Officious people push themselves forward; they are the opposite of shy.',
      'Rude and quite unwelcoming': 'Officious attention is too much politeness, not too little.',
    },
    more: "Mr Collins is Austen's great officious character, forever offering advice and service that nobody wants. The word has a comic edge: officiousness makes people look foolish.",
    tip: "Use officious for characters who meddle: 'Collins's officious flattery makes him ridiculous rather than respected.'",
  },
  'In context: obscure (Jane Eyre)': {
    why: 'Obscure here means unknown and of no importance in the world. Jane lists everything that seems to make her less, poor, unknown, plain and small, then insists that she has as much soul and heart as Rochester.',
    not: {
      'Very difficult to understand':
        'Obscure can mean hard to understand, but Jane is describing her low position in the world.',
      'Hidden away in deep shadow':
        'Obscure can mean hidden or dark, but Jane means that nobody knows or notices her.',
      'Gloomy and very miserable':
        'Jane is not describing her mood. Obscure means unknown and unimportant.',
    },
    more: "She goes on: 'I have as much soul as you'. Brontë gives a poor governess a voice of equality, which shocked some Victorian readers.",
    tip: 'Quote this speech in answers on class and gender: Jane claims equality with Rochester on the grounds of the soul, not wealth.',
  },
  'In context: discord (Jane Eyre)': {
    why: "A discord is a clash, like a wrong note in music. Jane felt she did not fit at Gateshead: 'I was like nobody there'. The musical image shows the problem was a lack of harmony, not simply bad behaviour.",
    not: {
      'A servant who was paid no wages at all':
        'Jane is a dependent relative, not a servant. Discord means a clashing element.',
      'A treasured favourite of the family':
        'Jane was the opposite of a favourite. Discord means something that does not fit.',
      'A prisoner locked inside one room':
        'She is locked in the red-room, but discord means a clash, not imprisonment.',
    },
    more: "Discord comes from the Latin for 'heart apart'. Jane adds that she had 'nothing in harmony with Mrs. Reed or her children', keeping the musical image going.",
    tip: 'Notice when a narrator looks back: the adult Jane understands her childhood self better than anyone did at the time.',
  },
  'In context: allow (Jane Eyre)': {
    why: "To allow something here is to admit that it is true. Mrs Reed insists that Jane must admit to being passionate, as though a child's strong feelings were a fault.",
    not: {
      'Permit; let happen':
        "That is the modern sense. Mrs Reed is not asking Jane's permission; she wants Jane to admit a fault.",
      'Forgive or excuse':
        'Mrs Reed is not forgiving anything. To allow here is to concede that something is true.',
      'Control or hold back':
        'Mrs Reed would like Jane to hold back her passion, but allow here means admit.',
    },
    more: "This older sense survives in phrases such as 'allowing that it was late'. Jane answers by turning on Mrs Reed, who is shaken by the girl's anger.",
    tip: "Use the scene to show Jane's passion as strength: Brontë lets her heroine speak back to injustice.",
  },
  'In context: stagnation (The Sign of Four)': {
    why: "Stagnation is a state of no activity or development, like water that has stopped flowing and gone stale. Holmes's mind needs problems to solve; without them, he says, he is bored and restless.",
    not: {
      'Being told exactly what to think':
        'Holmes is not objecting to being controlled. He hates having nothing to work on.',
      'Sudden noise and confusion': 'Stagnation is the opposite of noise and bustle: stillness.',
      'Slow decay through illness':
        'Stagnant water can breed disease, but stagnation itself means no activity or change.',
    },
    more: "He goes on: 'Give me problems, give me work'. Doyle presents Holmes as a mind that must be busy, which is why he welcomes Mary Morstan's strange case.",
    tip: "Use the line to discuss Holmes's character: his brilliance and his restlessness come from the same need.",
  },
  'In context: exaltation (The Sign of Four)': {
    why: 'Exaltation is a state of intense excitement or elevated feeling. Holmes craves the thrill of a difficult problem: a mind lifted up and fully alive, the opposite of the dull routine he hates.',
    not: {
      'Complete rest and calm quiet':
        'Holmes wants the opposite of rest. He finds calm unbearable.',
      'Praise from other people':
        'Holmes does enjoy admiration, but exaltation here is a state of mind, not praise.',
      'Escape from all thought': 'He wants his mind fully engaged, not switched off.',
    },
    more: "Exalt means to raise up, from the Latin altus, 'high'. Holmes says he chose his profession for the problems it brings: detection gives him the exaltation he needs.",
    tip: "Link the word to character: Doyle makes Holmes's need for mental challenge both his gift and his weakness.",
  },
  'In context: complacency (The War of the Worlds)': {
    why: "Complacency is smug self-satisfaction that makes people blind to danger. Wells opens by showing humanity, sure of its power, going about its 'little affairs' while Martian minds are already watching and planning.",
    not: {
      'Busy, hard-working, restless energy':
        'People are busy, but complacency names their smugness, not their energy.',
      'Fearful and nervous watchfulness of others':
        'That is the opposite. Complacent people feel no fear at all.',
      'Warm and kindly concern for one another':
        'Complacency is self-satisfaction, not care for others.',
    },
    more: "The word 'little' shrinks human life, and 'infinite' mocks humanity's confidence. Wells, writing at the height of the British Empire, asks readers how it would feel to be the conquered.",
    tip: "Use the opening to discuss Wells's purpose: the invasion humbles a confident empire by giving it a taste of being invaded.",
  },
  'In context: unsympathetic (The War of the Worlds)': {
    why: 'Unsympathetic here means without fellow feeling: the Martians feel nothing for humans, as we feel nothing for the creatures we study under a microscope. Their coldness is more frightening than anger would be.',
    not: {
      'Unable to understand our language':
        'Wells does not say they cannot understand us. They can, and they simply do not care.',
      'Too slow to understand us': "Their intellects are 'vast': they understand us all too well.",
      'Uninterested in learning':
        'They have studied the earth closely. Unsympathetic means they feel no pity for what they study.',
    },
    more: "Wells compares humans to 'the transient creatures that swarm and multiply in a drop of water'. The novel turns the tables on human pride.",
    tip: 'Use the image to discuss perspective: Wells makes readers see humanity from outside, as small and unimportant.',
  },
  'In context: brave (The Tempest)': {
    why: 'Brave here means splendid, fine and wonderful, not courageous. Miranda, who has seen almost no one but her father, is dazzled by the nobles, some of whom once plotted against Prospero. Her wonder is touching and a little naive.',
    not: {
      'Bold and very courageous':
        'That is the modern sense. Miranda is admiring how splendid the world looks, not its courage.',
      'Dangerous and frightening':
        'The world may be dangerous, but Miranda does not see it: she sees only wonder.',
      'Young and quite untested':
        "Miranda's world is new to her, but brave means splendid, not inexperienced.",
    },
    more: "Prospero answers drily: '’Tis new to thee.' Aldous Huxley borrowed the phrase for his novel Brave New World, about a society that is anything but splendid.",
    tip: "Use the line to discuss innocence and experience: Miranda's wonder and Prospero's dry reply sit side by side.",
  },
  'In context: profit (The Tempest)': {
    why: "Profit here means benefit: what Caliban has gained. The only good he has had from Prospero's language lessons is the power to curse him. Caliban turns the coloniser's gift into a weapon against him.",
    not: {
      'Money that I earned':
        'Profit often means money, but Caliban means the benefit he has gained: the ability to curse.',
      'Payment I owe you':
        'Caliban believes he owes Prospero nothing. Profit is what he has got out of the lessons.',
      'Punishment for it':
        'Caliban has been punished, but profit means what he gained, here a bitter benefit.',
    },
    more: "Many modern readings see Caliban as a colonised native whose island has been taken from him. His bitter wit makes him one of Shakespeare's most debated characters.",
    tip: "Use Caliban's line to show how Shakespeare gives a voice to the powerless, even a figure the other characters call a monster.",
  },
  'In context: art (The Tempest)': {
    why: 'Art here means magic. Prospero has used his magical power to raise storms and even wake the dead; now he gives it up, promising to break his staff and drown his book.',
    not: {
      'Fine painting':
        "Art often means painting, but Prospero's art is his magic, learnt from his books.",
      'Musical skill': 'Prospero uses music in his spells, but his art is the magic itself.',
      'Speech-making':
        'Prospero speaks powerfully, but his art is the magic he is about to give up.',
    },
    more: 'Many readers hear Shakespeare himself in this speech, written near the end of his career: an artist giving up the art that has held audiences spellbound.',
    tip: 'Use the speech in answers on power and forgiveness: Prospero chooses to give up power at the height of it.',
  },
  'In context: strained (The Merchant of Venice)': {
    why: "Strained here means forced or constrained. Shylock has just asked 'On what compulsion must I?', and Portia answers that mercy cannot be forced: it falls freely, like gentle rain.",
    not: {
      'Tired or worn out':
        'Strain can mean tiredness, but Portia means that mercy cannot be squeezed out of anyone.',
      'Weakened by overuse': 'Overuse can strain a muscle, but here strained means forced.',
      'Tense and nervous': 'Portia is not describing a mood. Mercy, she says, is never forced.',
    },
    more: "The speech goes on to call mercy 'twice blest': it blesses the one who gives it and the one who receives it. It is one of Shakespeare's most famous arguments.",
    tip: "Use Portia's speech to discuss justice and mercy, and ask whether the Christians who praise mercy show any to Shylock.",
  },
  'In context: sooth (The Merchant of Venice)': {
    why: "Sooth is an old word for truth, so 'in sooth' means truly. Antonio admits honestly that he cannot explain his sadness, a mystery that hangs over the play.",
    not: {
      'In secret': 'Antonio is not speaking secretly; he is confessing openly to his friends.',
      'In comfort': 'Sooth sounds like soothe, to comfort, but here it means truth.',
      'In summary': 'In sooth is not a way of summing up. It means truly.',
    },
    more: 'Sooth survives in soothsayer, a person who tells the truth about the future, like the one who warns Caesar to beware the ides of March.',
    tip: "Notice how Shakespeare opens on mood: Antonio's unexplained sadness invites the audience to look for causes.",
  },
  'In context: impediments (Sonnet 116)': {
    why: 'Impediments are obstacles. The line echoes the marriage service, which asks whether anyone knows an impediment, a reason the couple cannot lawfully marry. The speaker refuses to accept that anything can stand in the way of true love.',
    not: {
      'Doubts and fears':
        "Doubts may stand in love's way, but impediments are obstacles of any kind, especially reasons why a marriage cannot go ahead.",
      'Rules and customs': 'Rules can be obstacles, but impediments means barriers, not customs.',
      'Witnesses or guests':
        'Weddings have witnesses, but the speaker means obstacles to the marriage, not guests at it.',
    },
    more: "In the Book of Common Prayer, the priest asks whether either partner knows 'any impediment' to the marriage. Shakespeare borrows the solemn language of the wedding service, so his definition of love sounds like a vow.",
    tip: "Notice how the sonnet defines love by what it is not: 'Love is not love / Which alters when it alteration finds'.",
  },
  'In context: vestige (Remember)': {
    why: 'A vestige is a small trace of something that has otherwise gone. The speaker imagines that after death only a faint trace of her thoughts might survive, and she would rather her lover forgot and smiled than remembered and grieved.',
    not: {
      'A full, clear memory': 'A vestige is the opposite of full: only a small trace is left.',
      'A written record kept':
        'Nothing written is meant. A vestige is a remnant, a small part left behind.',
      'A secret, hidden wish':
        'The speaker is not hiding a wish. A vestige is a trace of what once was.',
    },
    more: "Vestige comes from the Latin vestigium, 'footprint'. Biologists call organs that have lost their use vestigial. Rossetti's word suggests something almost entirely worn away.",
    tip: "Small, precise words carry Rossetti's argument: notice how she weighs remembering against forgetting in the last six lines.",
  },
  'In context: corruption (Remember)': {
    why: "Corruption here means physical decay: the body breaking down in the grave. With 'darkness', it describes death plainly. The modern sense of dishonesty would make no sense here.",
    not: {
      'Dishonesty for money':
        'That is the modern sense, as in a corrupt official. Rossetti means the decay of the body after death.',
      'Sickness of the mind':
        "Corruption is not madness here. It is the body's decay in the grave.",
      'Spreading of cruel rumours':
        "Nothing is said about rumours. The word belongs with 'darkness' as an image of the grave.",
    },
    more: "The older sense comes from the Bible, which says the body 'is sown in corruption; it is raised in incorruption'. Rossetti, a devout Christian, uses the word with that weight.",
    tip: "Read older words with care: 'corruption' in a Victorian poem about death almost always means decay.",
  },
  'In context: stoop (My Last Duchess)': {
    why: "To stoop here is to lower yourself, to do something beneath your dignity. The Duke is too proud even to tell his wife what displeased him: speaking to her about it would be beneath his 'nine-hundred-years-old name'.",
    not: {
      'Bend low to the ground':
        'Stoop literally means to bend down, but the Duke means he will not lower his dignity.',
      'Lose his temper in anger':
        'The Duke is cold and controlled. Stooping is about pride, not anger.',
      'Hurry into a decision': 'Stoop has nothing to do with speed. It means to lower yourself.',
    },
    more: "His pride has deadly results: 'I gave commands; / Then all smiles stopped together.' Browning lets the Duke condemn himself through his own words.",
    tip: 'Use the form: the Duke reveals his arrogance without realising it, so the reader judges him.',
  },
  'In context: sojourn (La Belle Dame sans Merci)': {
    why: 'To sojourn is to stay somewhere for a time, as a traveller does. The knight lingers on the bare hillside, unable to leave the place where he was enchanted and abandoned.',
    not: {
      'Suffer in silence': 'He is suffering, but sojourn means to stay somewhere for a while.',
      'Hide away in shame': 'He is not hiding; he wanders in the open. Sojourn means stay.',
      'Pray for some help': 'Nothing suggests prayer. Sojourn describes staying in a place.',
    },
    more: "Keats's ballad uses simple, old-fashioned words like sojourn to sound like a medieval tale. The final stanza echoes the first, so the poem ends where it began, with the knight still trapped.",
    tip: 'Notice archaic words in Keats: they create the haunting, old-ballad feel of the poem.',
  },
  'In context: fearful (The Tyger)': {
    why: "Fearful here means terrifying, causing fear, not feeling it. The tiger's perfect, balanced shape is frightening, and the speaker wonders what kind of creator could make something so beautiful and so deadly.",
    not: {
      'Feeling afraid; nervous':
        'That is the usual modern sense. The tiger is not afraid; it fills the speaker with fear.',
      'Perfectly balanced':
        "That is the meaning of 'symmetry', the next word. Fearful describes the effect: terror.",
      'Wild and quite untamed': 'The tiger is wild, but fearful means frightening.',
    },
    more: "The Tyger comes from Blake's Songs of Experience, and its companion, The Lamb, from Songs of Innocence. The poem asks whether the same God could make both.",
    tip: "Watch for words whose meaning has narrowed over time: fearful once meant both 'afraid' and 'frightening'.",
  },
  'In context: Betrays (Piano)': {
    why: "Here betrays means leads him back against his will, like a traitor. The song tricks the adult speaker into the past, 'In spite of myself', until he longs to be a child again.",
    not: {
      'Reveals my private secret to others':
        "Betray can mean reveal, as in 'her face betrayed her fear', but here the song draws him back into the past.",
      'Breaks a promise made to me':
        'Nobody breaks a promise. The song overpowers him and draws him back.',
      'Forgives me for the past':
        'Nothing is forgiven. The verb shows the song working on him against his will.',
    },
    more: "The word 'insidious' supports the idea: the music works slowly and secretly, like a spy. The speaker feels his grown-up self being overpowered by memory.",
    tip: "Analyse verbs that work against a speaker: 'betrays' suggests he resists the pull of the past, and loses.",
  },
  'In context: impostors (If)': {
    why: 'An impostor pretends to be something they are not. Kipling calls Triumph and Disaster impostors because neither is as important as it seems: success and failure both pass, so a wise person treats them alike.',
    not: {
      'Enemies who attack without warning':
        'Disaster may feel like an attack, but impostors are fakes, not attackers.',
      'Visitors who arrive unexpectedly':
        'Triumph and Disaster do arrive unexpectedly, but an impostor is a fraud.',
      'Rivals competing for the same prize':
        'They are not competing. Kipling calls them impostors because both deceive us about how much they matter.',
    },
    more: "The capital letters turn success and failure into two figures who come to call. The lines are written above the players' entrance to the Centre Court at Wimbledon.",
    tip: 'Notice how Kipling turns abstract ideas into characters: it makes his advice vivid and memorable.',
  },
  'In context: hungry (Julius Caesar)': {
    why: "Hungry here means greedy for power and advancement, never satisfied. Caesar prefers fat, contented men who sleep well; lean, restless Cassius, who 'thinks too much', looks like a man who wants more than he has.",
    not: {
      'In need of a meal':
        'Cassius is lean, but Caesar is not worried about his appetite for food. His hunger is for power.',
      'Thin from an illness': 'Caesar does not suspect illness. He suspects ambition.',
      'Tired and too sleepy':
        "Caesar contrasts Cassius with men 'such as sleep a-nights'. Cassius is restless, not sleepy.",
    },
    more: 'Caesar is right: Cassius is already persuading Brutus to join the conspiracy. The image links appetite with ambition, a pairing Shakespeare uses often.',
    tip: "Notice when the plot proves a character right: Caesar's instinct about Cassius is accurate, and he ignores it.",
  },
  'In context: underlings (Julius Caesar)': {
    why: "Underlings are people of low rank who serve those above them. Cassius argues that if he and Brutus are Caesar's inferiors, it is their own fault, not fate's: they have chosen to accept it.",
    not: {
      'Unlucky people born under bad stars':
        "Cassius rejects that idea: the fault is 'not in our stars'. Underlings simply means people beneath someone else.",
      'Secret plotters against the state':
        'Cassius and Brutus will become plotters, but underlings means subordinates.',
      'Young and inexperienced men': 'Underlings are low in rank, not in age.',
    },
    more: "The speech argues for free will over fate, which suits a man trying to persuade Brutus to act. It is one of Shakespeare's most quoted lines about responsibility.",
    tip: 'Use it in essays on fate and free will: Cassius insists that people, not stars, decide their place.',
  },
  'In context: sterner (Julius Caesar)': {
    why: 'Sterner means harder and more severe. Antony points out that Caesar wept for the poor: a truly ambitious man, he suggests, would be made of tougher, colder material.',
    not: {
      'Softer, gentler and kinder':
        "That is the opposite. Antony says ambition needs harder stuff than Caesar's tears.",
      'Older and much wiser': 'Stern is about hardness, not age or wisdom.',
      'Richer and more costly':
        'Stuff here means material, but sterner describes how hard it is, not its value.',
    },
    more: "Antony never openly contradicts Brutus: he repeats that 'Brutus is an honourable man' until the words sound bitterly ironic, and the crowd turns.",
    tip: "Study Antony's speech for rhetoric: repetition, questions and evidence turn a hostile crowd in his favour.",
  },
  'In context: rated (The Merchant of Venice)': {
    why: "To rate someone here is to scold them angrily. Shylock reminds Antonio how often he has publicly abused him for lending money at interest, which makes Antonio's request for a loan so bitter.",
    not: {
      'Judged; given a score':
        'That is the modern sense of rating. Shylock means Antonio scolded him.',
      'Charged; made to pay': 'Shylock is the lender; nobody charged him. Rated means scolded.',
      'Avoided and ignored': 'Antonio did the opposite of ignoring him: he abused him in public.',
    },
    more: "The modern word berate keeps this old sense. Shylock goes on to recall how Antonio called him 'cut-throat dog' and spat on his gown, which helps explain his hatred.",
    tip: "Use Shylock's speech to show that Shakespeare gives him real grievances, which complicates any simple reading of him as a villain.",
  },
  'In context: poniards (Much Ado About Nothing)': {
    why: "A poniard is a small dagger. Benedick's metaphor makes Beatrice's words into weapons: each one wounds him, which shows how sharp her wit is, and how much it gets under his skin.",
    not: {
      'Short riddles':
        "Beatrice is witty, but poniards are daggers: the next words, 'every word stabs', confirm it.",
      'Quiet prayers': 'There is nothing holy here. Poniards are weapons.',
      'Clever puzzles': 'Her words are not hard to understand; they hurt. Poniards are daggers.',
    },
    more: 'Benedick protests too much: he cannot stop talking about Beatrice. The audience suspects that his complaints hide attraction, which the plot soon brings into the open.',
    tip: "Explain the metaphor's effect: comparing words to daggers shows both Beatrice's skill and Benedick's wounded pride.",
  },
  'In context: hoard (Silas Marner)': {
    why: 'A hoard is a carefully saved store of something valuable, often kept secret. Silas saves his gold night after night, and the pile itself becomes his only purpose, replacing the love and faith he has lost.',
    not: {
      'Crowd of noisy people':
        'That is a horde, a word that sounds the same. A hoard is a store of saved treasure.',
      'Daily work at the loom':
        'Silas earns the gold by weaving, but the hoard is the gold itself.',
      'Large family to support': 'Silas has no family until Eppie arrives. His hoard is his gold.',
    },
    more: 'When the gold is stolen, a golden-haired child, Eppie, comes into his life, and Eliot makes the exchange clear: love replaces the hoard.',
    tip: "Trace the symbol: Silas's hoard shows how a lonely man turns to money, and Eppie shows what money cannot replace.",
  },
  'In context: mortify (Jekyll and Hyde)': {
    why: 'To mortify a desire is to curb it by denying yourself. Utterson likes fine wine, so he drinks gin when he is alone, keeping his pleasures under strict control. Self-denial marks him as a respectable Victorian gentleman.',
    not: {
      'To embarrass or humiliate':
        "That is the modern sense, as in 'mortified with shame'. Utterson is disciplining his taste, not humiliating anyone.",
      'To satisfy and indulge it':
        'That is the opposite. He drinks gin precisely to deny himself the wine he enjoys.',
      'To share with his friends': 'He drinks alone. To mortify a desire is to subdue it.',
    },
    more: "The word comes from the Latin mors, 'death': to mortify a desire is to kill it. Utterson's self-control sets up the novel's contrast with Jekyll, who wants to indulge his pleasures without paying for them.",
    tip: "Use Utterson as the novel's measure of restraint: his self-denial makes Jekyll's escape into Hyde more shocking.",
  },
  'In context: austere (Jekyll and Hyde)': {
    why: 'Austere here means strict and self-denying: Utterson allows himself few pleasures. He drinks gin rather than the wine he loves, and though he enjoys the theatre, he has not been to one for twenty years.',
    not: {
      'Gentle and forgiving to himself':
        'That is the opposite. Utterson is hard on himself, though tolerant of others.',
      'Proud and pleased with himself': 'Austere is about strictness, not self-satisfaction.',
      'Honest and open about himself': 'Utterson is honest, but austere describes his self-denial.',
    },
    more: "Stevenson adds that Utterson had 'an approved tolerance for others': strict with himself, kind to others. Victorian gentlemen were expected to keep their pleasures hidden, the world Hyde breaks open.",
    tip: "Contrast characters through self-control: Utterson's strictness and Jekyll's double life show two responses to the same society.",
  },
  'In context: engrosses (A Christmas Carol)': {
    why: "To engross is to absorb someone's attention completely. Belle says that one passion, the love of gain, has taken over the young Scrooge entirely, crowding out every nobler hope, including his love for her.",
    not: {
      'Disgusts and sickens you':
        'That is gross in the modern sense. Engross means to absorb completely.',
      'Makes you very rich':
        'Gain is money, but engrosses describes how the passion fills his mind.',
      'Bores you terribly': 'The love of money does the opposite of boring him: it consumes him.',
    },
    more: "Belle releases Scrooge from their engagement because 'Another idol has displaced me'. When he asks what idol, she answers: 'A golden one.'",
    tip: "Use Belle's speech to show that Scrooge chose money: his isolation is the result of his choices, not fate.",
  },
  'In context: genial (A Christmas Carol)': {
    why: "Genial means warm, friendly and cheerful. Everything about this Spirit, from its 'open hand' to its 'cheery voice', expresses generosity and good humour: it is Christmas itself in human form.",
    not: {
      'Clever and cunning': 'The Spirit is wise, but genial means warmly friendly.',
      'Stern and serious': "That is the opposite. The Spirit's face is warm and welcoming.",
      'Pale and ghostly': 'It is a ghost, but genial describes its friendly expression.',
    },
    more: "Genial comes from the Latin genialis, linked with festivity and good cheer. Dickens calls this Spirit 'a jolly Giant', a world away from the silent, hooded Ghost of Christmas Yet to Come.",
    tip: 'Compare the three spirits: Dickens gives each a different manner to suit what it teaches Scrooge.',
  },
  'In context: incarnadine (Macbeth)': {
    why: 'To incarnadine is to turn something the colour of flesh or blood. Macbeth imagines his hand dyeing every ocean red, the green sea turned to blood: his guilt is too great for water to wash away.',
    not: {
      'Calm and quieten':
        'Nothing is calmed: Macbeth imagines his hand staining every sea with blood.',
      'Stir into storms':
        "Macbeth does not picture a storm. Incarnadine is a colour word: his bloody hand would dye the seas red, as the next words, 'Making the green one red', make plain.",
      'Wash quite clean':
        'That is what he hoped water would do for his hand. Instead the hand will stain the sea.',
    },
    more: "Shakespeare follows the grand, Latin 'multitudinous seas incarnadine' with the plain 'Making the green one red', saying the same thing twice in two kinds of English.",
    tip: "Contrast Macbeth's horror with Lady Macbeth's calm in the same scene: she thinks a little water will be enough.",
  },
  'In context: even-handed (Macbeth)': {
    why: 'Even-handed justice is fair and treats everyone alike. Macbeth fears that whatever he does to Duncan will be done to him: the poisoned cup he prepares for another will be offered to his own lips.',
    not: {
      'Quick and merciless': 'Macbeth fears that justice will be fair, not simply fast or cruel.',
      'Hidden from all eyes':
        'The justice he fears is not secret. It is fair, returning his crime to him.',
      'Skilled with both hands':
        'Even-handed does not mean able to use both hands. It means balanced and fair.',
    },
    more: "Macbeth sees clearly that violence breeds violence: 'we but teach / Bloody instructions, which being taught, return / To plague th’ inventor'. He goes ahead anyway.",
    tip: 'Use this soliloquy to show that Macbeth knows the consequences: his fall is a choice, not ignorance.',
  },
  'In context: sticking-place (Macbeth)': {
    why: 'The sticking-place is the point at which something holds fast, as a peg is tightened until it will not slip. Lady Macbeth tells her husband to tighten his courage until it stays fixed, and then they cannot fail.',
    not: {
      'The place where they will meet':
        'She is not naming a meeting place. The image is of courage tightened until it holds.',
      'The moment of greatest danger':
        'The phrase is about fixing courage firmly, not about the most dangerous moment.',
      'The spot where Duncan sleeps':
        "Duncan's chamber comes into the plan next, but the sticking-place is where courage holds firm.",
    },
    more: "The image probably comes from tightening the string of a crossbow or the peg of a musical instrument. 'Screw your courage' makes courage a mechanism to be wound up.",
    tip: "Analyse Lady Macbeth's commands: imperatives like 'screw your courage' show how she drives the plan forward.",
  },
  'In context: automaton (The Sign of Four)': {
    why: "An automaton is a machine that moves by itself, and so a person who acts mechanically, without feeling. Watson is upset that Holmes has not even noticed Mary Morstan's charm: his friend seems all calculation and no heart.",
    not: {
      'A genius who solves every problem':
        'Holmes is a genius, but automaton means a machine-like person, without emotion.',
      'A fussy person obsessed with detail':
        "Holmes cares about detail, but Watson's charge is coldness, not fussiness.",
      'A lonely person who avoids company':
        'Holmes may be solitary, but automaton describes his lack of feeling.',
    },
    more: "Watson adds 'a calculating-machine' and says there is 'something positively inhuman' in him. Doyle makes Holmes's coldness both his strength as a detective and a limit as a man.",
    tip: "Use Watson's reactions to discuss Holmes: the narrator's admiration and unease guide how readers see him.",
  },
  'In context: disillusionment (The War of the Worlds)': {
    why: 'Disillusionment is the loss of a belief you were happy to hold, when the truth breaks through. Humanity believed itself safe and supreme; the Martian invasion destroys that comfortable illusion.',
    not: {
      'A time of magic and wonder':
        'Illusion can suggest magic tricks, but disillusionment is the loss of a false belief.',
      'A sudden burst of new hope for all':
        'That is the opposite. The invasion ends hope rather than beginning it.',
      'A great feeling of confusion':
        'People are confused and terrified, but the word names the loss of an illusion.',
    },
    more: "Dis- means undoing: to be disillusioned is to have an illusion taken away. Wells's 'great disillusionment' attacks Victorian confidence in progress and empire.",
    tip: "Use the opening chapter to show Wells's purpose: he sets up human confidence in order to shatter it.",
  },
  'In context: wretch (Frankenstein)': {
    why: 'A wretch is a miserable or despised person or creature. Victor uses the word with disgust: he has just made a living being, and his first feeling is revulsion, not pity or responsibility.',
    not: {
      'A powerful, noble and gentle being':
        'Victor sees nothing noble in it. Wretch expresses contempt.',
      'A sleeping, helpless baby':
        "The creature is newly made, like a baby, but Victor's word shows disgust, not tenderness.",
      'A ghost from his own past':
        "The creature is not a ghost. Wretch is Victor's name for something he finds miserable and repulsive.",
    },
    more: "Wretch can also express pity, as in 'poor wretch'. Shelley lets the word hold both meanings: readers may feel the pity that Victor refuses to feel.",
    tip: 'Track what Victor calls the creature, and ask what the names reveal about Victor himself.',
  },
  'In context: regard (Macbeth)': {
    why: "Regard here means attention or thought. Lady Macbeth tells Macbeth that what cannot be cured should not be thought about: 'what’s done is done'. Yet by Act 5 she cannot stop thinking about it.",
    not: {
      'Respect or admiration':
        "Regard can mean respect, as in 'high regard', but here it means thought or attention.",
      'A kind and warm greeting':
        'Regards can mean good wishes at the end of a letter. Here she means not dwelling on things.',
      'Proper punishment for it':
        'She is not talking about punishment. She means not thinking about what cannot be changed.',
    },
    more: "Her 'what’s done is done' returns, broken, in the sleepwalking scene: 'What’s done cannot be undone.' The echo shows how wrong she was.",
    tip: "Use echoes across a play: Lady Macbeth's two versions of the same idea measure how far she has fallen.",
  },
  'In context: Ides (Julius Caesar)': {
    why: "In the Roman calendar the Ides fell in the middle of the month: in March, the fifteenth. Caesar dismisses the warning, 'He is a dreamer; let us leave him', and he is assassinated on that very day.",
    not: {
      'The first day of spring':
        'The Ides is a date in the middle of the month, not the start of a season.',
      'A day of public mourning':
        'The day becomes a day of death, but the Ides is simply a date: 15 March.',
      'The last day of winter': 'The Ides marks the middle of a month, not a change of season.',
    },
    more: "Shakespeare's audience knew their history: Caesar was killed on 15 March 44 BC. 'Beware the Ides of March' is still used today as a warning of danger.",
    tip: 'Use the warning to discuss fate and choice: Caesar is warned, and his pride makes him ignore it.',
  },
  'In context: fathom (The Tempest)': {
    why: "A fathom is a unit for measuring the depth of water, about six feet. 'Full fathom five' places Ferdinand's father thirty feet under the sea: Ariel's song tells him that his father has drowned, though in fact he is alive.",
    not: {
      'A great sadness or grief': 'The song is sad, but a fathom is a measurement, not a feeling.',
      'A way of understanding':
        "The verb fathom means to understand, as in 'I can't fathom it'. Here it is a noun: a measure of depth.",
      'A ghost or a spirit': 'Fathom sounds a little like phantom, but it measures depth.',
    },
    more: "The song goes on: 'Those are pearls that were his eyes', a strange, beautiful image of the drowned body changing 'Into something rich and strange'.",
    tip: "Notice how Ariel's song turns death into beauty: music and magic transform everything on Prospero's island.",
  },
  'In context: cite (The Merchant of Venice)': {
    why: 'To cite is to quote something as evidence or authority. Antonio means that even the devil can quote the Bible to make his case sound holy, so a good-sounding argument proves nothing about the speaker.',
    not: {
      'Twist into nonsense':
        "Antonio's point is that the devil quotes Scripture accurately, for bad ends; cite means quote.",
      'Read aloud in church':
        'Cite is about using a quotation as support, not about reading aloud in church.',
      'Sight or see clearly':
        'Sight and site sound the same as cite, but cite means to quote as evidence.',
    },
    more: "Antonio says it after Shylock uses the Bible story of Jacob and his uncle Laban's sheep to defend lending at interest. The insult shows how Antonio sees Shylock, and Shakespeare lets the audience judge both men.",
    tip: 'In your own essays, cite evidence exactly: a precise quotation backs up a point far better than a summary.',
  },
  'In context: glisters (The Merchant of Venice)': {
    why: 'To glister is to glitter or shine. The Prince of Morocco chooses the gold casket for its shine and finds only a skull and this warning: things that look valuable may be worthless.',
    not: {
      'Is very heavy to lift':
        'Weight is not the point. The scroll warns against trusting a shining surface.',
      'Is kept locked away': 'The casket was locked, but glisters means shines.',
      'Costs a huge amount': 'Gold is costly, but glisters describes how it shines, not its price.',
    },
    more: "The saying, often misquoted as 'all that glitters', sums up the casket test: the right choice is plain lead, which warns that its chooser 'must give and hazard all he hath'.",
    tip: 'Link the caskets to appearance and reality, an idea the whole play keeps returning to.',
  },
  'In context: disgust (Pride and Prejudice)': {
    why: "Disgust here means strong distaste and disapproval, not physical sickness. Darcy's pride, refusing to dance and speaking to almost no one, turns the whole of Meryton against him in a single evening.",
    not: {
      'Physical sickness and nausea':
        'Disgust today often suggests feeling sick, but Austen means strong disapproval.',
      'Sudden sharp embarrassment': 'The neighbours are not embarrassed; they dislike him.',
      'Quiet, respectful admiration':
        'That is how the evening began. His manners turn admiration into disgust.',
    },
    more: "Austen adds that his large estate in Derbyshire could not save him from 'having a most forbidding, disagreeable countenance'. The novel's first title was First Impressions.",
    tip: 'Use the ball to discuss judgement: Meryton decides about Darcy in one night, and the novel asks how fair that was.',
  },
  'In context: sanguine (Great Expectations)': {
    why: "Sanguine means hopeful and optimistic. Pip is glad that Herbert's future looks bright, but he does not expect much for himself: his own great expectations have collapsed.",
    not: {
      'Jealous and very resentful':
        'Pip is happy for Herbert, not jealous. Sanguine means hopeful.',
      'Proud and boastful': 'Pip has been humbled by this point. Sanguine means optimistic.',
      'Anxious and fearful':
        "That is close to the opposite of sanguine, though Pip's lack of hope comes near it.",
    },
    more: 'Sanguine comes from the Latin for blood: a person with plenty of blood among the four humours was thought to be cheerful. By this late chapter Pip has learnt modesty.',
    tip: "Use small words of feeling to track a narrator's growth: the humbled Pip is no longer hopeful about himself.",
  },
  'In context: imperious (Jane Eyre)': {
    why: 'Imperious means proud and commanding, expecting to be obeyed. Rochester is used to giving orders, and Jane, though his employee, has come to accept it as his manner rather than a sign of contempt.',
    not: {
      'Rude and clumsy': 'Rochester can be blunt, but imperious means commanding, not clumsy.',
      'Shy and awkward': 'Rochester is the opposite of shy: he is used to command.',
      'Gloomy and hard to read':
        'Rochester is often moody, but imperious names his commanding manner.',
    },
    more: "Brontë shows the relationship changing: Rochester treats Jane with 'friendly frankness', and she feels at times as if he were her relation rather than her master.",
    tip: 'Discuss power in relationships: Brontë shows a master and a governess slowly becoming equals.',
  },
  'In context: melancholy (Frankenstein)': {
    why: "Melancholy means a deep, lasting sadness. Walton's guest is Victor, rescued from the ice, and his sadness hints at the terrible story he is about to tell.",
    not: {
      'Angry, bitter and resentful':
        "Victor's mood is sad and hopeless, not angry. Melancholy is sorrow.",
      'Calm and contented': 'Victor is far from contented. Melancholy means sad.',
      'Ill and very feverish':
        'Victor is weak from the cold, but melancholy describes his mood, not an illness.',
    },
    more: "Walton adds that the stranger sometimes 'gnashes his teeth, as if impatient of the weight of woes that oppresses him'. Shelley shows us Victor's ruin first, then goes back to explain it.",
    tip: 'Use the opening letters to discuss structure: we meet Victor broken before we learn how he fell.',
  },
  'In context: magnanimity (Jane Eyre)': {
    why: "Magnanimity is generosity of spirit: a willingness to forgive and to think the best of others. Rochester admits he should have trusted Jane's good heart and told her the truth about his marriage from the start.",
    not: {
      'Love of great wealth': 'Jane has almost no money. Magnanimity is a quality of character.',
      'Quickness of mind': 'Jane is clever, but magnanimity means a generous, forgiving spirit.',
      'Strength of body':
        'Magnanimity has nothing to do with physical strength; it is greatness of soul.',
    },
    more: "The word comes from the Latin magnus, 'great', and animus, 'soul'. Rochester's confession comes after the wedding has been stopped, when his secret is already known.",
    tip: "Notice when a character praises another's virtue: Rochester's words show both his respect for Jane and his own guilt.",
  },
  'In context: hypocrisy (Jekyll and Hyde)': {
    why: "Hypocrisy is pretending to be better than you are. The woman's face has been smoothed into a polite mask: her excellent manners hide something evil, as respectable surfaces hide secrets throughout the novel.",
    not: {
      'Deep and very honest sorrow':
        'Nothing suggests grief. Hypocrisy is a false show of goodness.',
      'A habit of telling many jokes':
        'Her manners are polite, not playful. Hypocrisy means pretending to virtue.',
      'A fear of being found out':
        'She may have things to hide, but hypocrisy names the false face, not fear.',
    },
    more: "Jekyll later insists that he was 'in no sense a hypocrite', since both sides of him were 'in dead earnest'. Readers may disagree.",
    tip: "Link small characters to big ideas: even a housekeeper's face shows the novel's interest in masks.",
  },
  'In context: cynical (Animal Farm)': {
    why: 'A cynical remark assumes the worst about people and the world. Benjamin expects nothing to improve: he says God gave him a tail to keep the flies off, but he would sooner have no tail and no flies.',
    not: {
      'Cheerful and full of hope':
        'That is the opposite. Benjamin expects little good from anything.',
      'Cruel and deliberately hurtful': 'His remarks are gloomy, not meant to hurt.',
      'Puzzling and hard to follow': 'His meaning is clear enough: life will go on badly.',
    },
    more: 'Benjamin can read as well as any pig but chooses not to act. Some readers see him as wise; others see his attitude as a failure that lets the pigs take control.',
    tip: "Debate a character's attitude: is Benjamin's view of life wisdom, or an excuse for doing nothing?",
  },
  'In context: obstinate (Animal Farm)': {
    why: 'Obstinate means stubborn, refusing to change. The Rebellion changes everything on the farm except Benjamin: he works at his own slow pace, exactly as he always has.',
    not: {
      'Careless and full of mistakes':
        'Benjamin does his work; he just will not change how he does it.',
      'Cheerful and full of energy': 'Benjamin is slow and gloomy, the opposite of energetic.',
      'Secretive and rather sly':
        'He is not sly. Obstinate describes his stubborn refusal to change.',
    },
    more: "Orwell adds that he went on 'never shirking and never volunteering for extra work either'. Refusing to hope protects Benjamin from disappointment, but it also stops him resisting the pigs.",
    tip: 'Use Benjamin as a contrast with Boxer: one changes nothing, the other works himself to the point of collapse.',
  },
  'In context: maxim (Animal Farm)': {
    why: "A maxim is a short, memorable rule for how to behave. 'Four legs good, two legs bad' is easy for every animal to learn, which is exactly what makes it dangerous: a slogan replaces thinking.",
    not: {
      'A long and formal speech': 'A maxim is the opposite of long: a short saying.',
      'A written law of the land':
        "The Commandments are the farm's laws; the maxim sums them up in a slogan.",
      'A secret password or code':
        'Nothing is secret. The maxim is chanted by everyone, especially the sheep.',
    },
    more: 'The sheep bleat the maxim for hours to drown out debate. Later, when the pigs walk upright, the sheep are taught a new version that praises two legs.',
    tip: 'Analyse slogans in Animal Farm: Orwell shows how simple phrases can be used to control people.',
  },
  'In context: unanimous (Animal Farm)': {
    why: 'Unanimous means agreed by everyone, with no one against. Early on, the animals act together: every one of them agrees that the farmhouse should be kept as a museum and that no animal will live there.',
    not: {
      'Proposed by the pigs': 'The pigs lead, but unanimous means that every animal agreed.',
      'Passed by a majority': 'A majority is more than half. Unanimous means all of them.',
      'Kept secret from all': 'The resolution is open and shared. Unanimous means agreed by all.',
    },
    more: 'The irony grows later: the pigs move into the farmhouse and sleep in the beds. Orwell shows how promises made together are broken by a few.',
    tip: "Track early promises in Animal Farm: each one broken shows the pigs' growing power.",
  },
  'In context: tyranny (Animal Farm)': {
    why: "Tyranny is cruel, unjust rule by those in power. Major blames humans for the animals' suffering: they take everything the animals produce. The irony is that the pigs will become tyrants themselves.",
    not: {
      'Laziness and long neglect':
        'Major says that Man consumes without producing, but tyranny means cruel, unjust rule.',
      'Greed for all good things':
        "Humans are greedy in Major's eyes, but tyranny is about power used cruelly.",
      'Foolishness and errors': 'Major sees humans as cruel masters, not simply foolish ones.',
    },
    more: "Major's speech echoes the ideas of Karl Marx, with humans standing for the ruling class. By the end, Napoleon's rule is worse than Jones's.",
    tip: "Use Major's speech to discuss Orwell's message: revolutions can end in the same tyranny they set out to destroy.",
  },
  'In context: vivacious (Animal Farm)': {
    why: 'Vivacious means lively and animated. Snowball is quick, inventive and full of ideas, while Napoleon says little but always gets his way: Orwell contrasts the lively thinker with the quiet schemer.',
    not: {
      'Violent and dangerous': 'Vivacious sounds a little like vicious, but it means lively.',
      'Greedy and quite selfish': "Orwell is describing Snowball's energy, not greed.",
      'Quiet and thoughtful':
        "That is closer to Napoleon, 'not much of a talker'. Snowball is the lively one.",
    },
    more: 'Snowball stands for Trotsky and Napoleon for Stalin. The lively ideas man is driven out by the one who controls the dogs.',
    tip: 'Compare Snowball and Napoleon: Orwell suggests that power goes to force and cunning, not to ideas.',
  },
  'In context: indefatigable (Animal Farm)': {
    why: 'Indefatigable means tireless: never running out of energy. Snowball sets up committee after committee, for the hens, the cows and even the wild animals, though most of them fail.',
    not: {
      'Clumsy and quite unsuccessful':
        'Many of his committees fail, but indefatigable describes his tireless effort, not his success.',
      'Bored and quite unwilling': 'Snowball is the opposite of bored; he cannot stop organising.',
      'Proud and rather boastful': 'Indefatigable is about energy, not pride.',
    },
    more: "The word comes from the Latin in-, 'not', and fatigare, 'to tire'. Orwell's comic list of committees, such as the Clean Tails League, gently mocks revolutionary enthusiasm.",
    tip: "Notice Orwell's gentle humour: even the most energetic revolutionaries are mocked.",
  },
  'In context: ruthlessly (Animal Farm)': {
    why: "Ruthlessly means without mercy or pity. Napoleon stops the hens' food until they give in, and nine of them die. He crushes even a small protest at once.",
    not: {
      'Without any planning':
        'His response is swift and deliberate. Ruthless means merciless, not careless.',
      'With deep regret': 'Napoleon shows no regret. Ruthless means having no pity.',
      'With great care and skill':
        'Napoleon acts fast and harshly. Ruthless is about having no mercy, not about skill or care.',
    },
    more: "Ruth is an old word for pity, so ruthless means pitiless. The hens' protest is often read as the peasants' resistance in the Soviet Union, which was also crushed.",
    tip: 'Use the hens to show how Napoleon rules by fear, starving anyone who resists.',
  },
  'In context: apathy (Animal Farm)': {
    why: 'Apathy is a lack of interest, enthusiasm or concern. Many animals cannot see why they should care about a Rebellion that might not come in their lifetime.',
    not: {
      'Anger and very open hostility': 'The animals are not hostile; they simply do not care.',
      'Fear of being punished': 'Some animals worry, but apathy means not caring.',
      'Excited, eager enthusiasm': 'That is the opposite of apathy.',
    },
    more: "Apathy comes from the Greek a-, 'without', and a word for feeling or suffering. Orwell suggests that indifference, as much as cruelty, lets tyranny grow.",
    tip: "Use apathy in essays on power: Orwell shows how ordinary indifference makes the pigs' rise possible.",
  },
  'In context: loitering (La Belle Dame sans Merci)': {
    why: 'To loiter is to linger somewhere without a purpose. The knight wanders the bare hillside, pale and aimless, as if he can neither leave nor move on.',
    not: {
      'Hurrying away very anxiously': 'Loitering is the opposite of hurrying: aimless lingering.',
      'Hiding away in fear': 'He is out in the open, alone. Loitering means lingering.',
      'Weeping very quietly': 'He may be sad, but loitering describes his aimless lingering.',
    },
    more: "The poem opens with a question, 'O what can ail thee, knight-at-arms', and the rest is his answer. The same lines return at the end, so he is still loitering.",
    tip: 'Use the repeated opening and ending to discuss structure: the circle traps the knight.',
  },
  'In context: insidious (Piano)': {
    why: 'Insidious means working slowly and secretly, often to harmful effect. The song creeps up on the speaker and overpowers him before he can resist: the grown man is undone by music he cannot control.',
    not: {
      'Loud, sudden and forceful': 'The song works quietly, which is what makes it insidious.',
      'Sweet, gentle and wholly comforting':
        'The song is sweet, but insidious adds danger: it works against his will.',
      'Clumsy and badly played':
        'The singing is skilful. Insidious describes its secret power over him.',
    },
    more: 'Lawrence uses a word usually kept for illness or treachery, so even a loving memory becomes a kind of attack on the grown-up self.',
    tip: "Notice surprising word choices: a negative word for a happy memory shows the speaker's mixed feelings.",
  },
  'In context: Present (Macbeth)': {
    why: 'Present here means existing now, before his eyes. Real dangers, Macbeth says, frighten him less than the horrors his imagination creates: the thought of murder already shakes him.',
    not: {
      'Offered to him as gifts': 'A present can be a gift, but here present means existing now.',
      'Shown openly to other people':
        'Nothing is being shown to others. Present means here and now.',
      'Absent but remembered': 'That is the opposite of present.',
    },
    more: "He goes on: 'My thought, whose murder yet is but fantastical, / Shakes so my single state of man'. The idea of murder alone is enough to unsettle him.",
    tip: "Use this aside to show Macbeth's imagination: he is horrified by his thoughts long before he acts.",
  },
  'In context: double-dealer (Jekyll and Hyde)': {
    why: "A double-dealer is someone who deceives by behaving one way in public and another in private. Jekyll admits to a double life, but claims both his selves were 'in dead earnest', so he was not pretending.",
    not: {
      'Someone who trades in two cities':
        'Dealing can mean trading, but a double-dealer is a deceiver.',
      'Someone who doubles every bet at cards':
        'The phrase has nothing to do with gambling. It means living two contradictory lives.',
      'Someone who works two jobs at once':
        'Jekyll does not mean two jobs. He means two hidden ways of living.',
    },
    more: "Many readers find Jekyll's defence unconvincing: hiding Hyde behind a respectable life looks very like the hypocrisy he denies. Stevenson lets the reader judge.",
    tip: "Use Jekyll's own words to test his honesty: a narrator defending himself is not always reliable.",
  },
  'In context: rime (A Christmas Carol)': {
    why: "Rime is a coating of white frost. Dickens describes Scrooge's white hair and stubble as frost, as though he carries winter around with him: his coldness has become part of his body.",
    not: {
      'A short rhyming poem': 'Rime sounds like rhyme, but here it is frost on his hair.',
      'A shabby old woollen hat': 'Nothing is on his head but frost. Rime is ice, not clothing.',
      'A thin scattering of hair':
        'The rime lies on his hair, eyebrows and chin: it is frost, an image of his white, cold old age.',
    },
    more: "The paragraph goes on: 'He carried his own low temperature always about with him; he iced his office in the dog-days'. The dog-days are the hottest days of summer.",
    tip: "Use the cold imagery to track Scrooge's change: by Stave Five, warmth and light have replaced the frost.",
  },
  'Precise word: exposes': {
    why: "To expose is to reveal something bad that was hidden, so that others can see it. Because the audience knows the Titanic sank, Birling's certainty makes him look foolish: Priestley uses irony to lay bare the arrogance of men like him.",
    not: {
      excuses:
        "Priestley does not forgive Birling's arrogance; he invites the audience to laugh at it.",
      narrates:
        'A play has no narrator. Priestley works through what characters say and what the audience knows.',
      states:
        'Dramatic irony never states anything outright. It works because the audience sees what Birling cannot.',
    },
    more: 'Strong analytical verbs carry your argument: exposes tells the examiner that the writer is critical, and of what. Its neighbours, such as reveals, lays bare and unmasks, each say something slightly different.',
    tip: "Avoid 'says' and 'shows' when a precise verb exists: 'Priestley exposes...' tells the examiner what the writer is doing and why.",
  },
  'Precise word: undermined': {
    why: "Undermined means weakened from below. Mrs Birling's moral certainty collapses under her: the man she has demanded be punished is Eric. Priestley lets her own words destroy her position.",
    not: {
      underlined:
        'Underlined means emphasised, almost the opposite. Her certainty is not strengthened; it falls apart.',
      overlooked: 'Nobody ignores what happens; the revelation is the climax of her questioning.',
      confirmed:
        'Nothing confirms that she was right. The revelation proves her judgement disastrously wrong.',
    },
    more: 'Undermine comes from digging a tunnel under a castle wall to bring it down. Writers undermine characters by letting their own words or actions turn against them.',
    tip: "Use undermine for a reversal: 'Priestley undermines Mrs Birling's self-righteousness by making her condemn her own son.'",
  },
  'Precise word: foregrounds (A Christmas Carol)': {
    why: 'To foreground something is to make it prominent, where the reader cannot miss it. Dickens dwells on how one goose must be stretched with cheap side dishes to feed everyone, so poverty stays at the front of the scene even as the family celebrates.',
    not: {
      foreshadows:
        "Foreshadowing hints at the future. The goose shows the Cratchits' present poverty, not something to come.",
      forewarns: 'Nobody is warned. Dickens draws attention to poverty that already exists.',
      overlooks: 'Dickens does the opposite: he makes the reader notice how little the family has.',
    },
    more: 'Foreground comes from painting: the foreground is the part of a picture nearest the viewer. A writer foregrounds through position, repetition or detail, and pushes into the background what the reader should pass over.',
    tip: "Use foregrounds when structure or detail makes something stand out: 'The opening foregrounds the speaker's isolation.'",
  },
  'Precise word: conveys': {
    why: "To convey is to carry a feeling or idea across to the reader. The sentences themselves feel panicked, so the reader experiences the narrator's fear instead of only being told about it.",
    not: {
      conceals: 'The sentences make the panic more visible, not less. To conceal is to hide.',
      consoles:
        'To console is to comfort. Broken sentences add to the panic rather than soothing it.',
      confines: 'To confine is to keep within limits. Here the form lets the panic spill out.',
    },
    more: 'Form can carry meaning as powerfully as words: short sentences quicken the pace, fragments suggest a mind breaking apart, and long sentences can feel breathless or calm.',
    tip: "Link sentence structure to effect: 'The fragments convey her panic, mimicking gasps for breath.'",
  },
  'Precise word: callous (A Christmas Carol)': {
    why: "Callous means cruelly unfeeling. Asked to give to the poor, Scrooge points them towards prisons instead: he treats other people's suffering as something that does not concern him at all.",
    not: {
      cautious: 'Scrooge is not being careful. His question shows that he does not care.',
      curious: 'He is not asking out of interest: the question is a cold brush-off.',
      cordial: "Cordial means warm and friendly, the opposite of Scrooge's tone.",
    },
    more: 'Scrooge means that the poor should be locked away or made to work. In Stave Three the Spirit turns the same words back on him, and the question that once sounded clever fills him with shame.',
    tip: "Precise adjectives for tone earn credit: 'callous' says more than 'mean', because it names a lack of feeling.",
  },
  'Precise word: parallels': {
    why: 'To parallel is to run alongside and match. Sheila and Eric change in the same direction, accepting blame, which sets the younger generation against the older one.',
    not: {
      contrasts:
        'The two children are alike here, not opposite. The contrast is with their parents.',
      reverses: "Eric's guilt is not turned around by Sheila's. Both move the same way.",
      resolves: 'Nothing is settled between them. The two simply change in the same way.',
    },
    more: 'Priestley builds the play on parallels and contrasts: young against old, those who learn against those who refuse to. Spotting a parallel lets you link two characters in one point.',
    tip: "Use parallels to compare within a text: 'Sheila's guilt parallels Eric's, suggesting that hope lies with the young.'",
  },
  'Precise word: foreshadows': {
    why: 'To foreshadow is to hint at something still to come. The vision of a dagger dripping with blood shows Macbeth the murder before he commits it, filling the audience with dread.',
    not: {
      recollects:
        'To recollect is to remember. The murder has not happened yet, so the dagger looks forward, not back.',
      postpones: 'The vision delays nothing: Macbeth goes straight on to kill Duncan.',
      prohibits:
        "The dagger seems to lead him on, not forbid him: 'Thou marshall’st me the way that I was going'.",
    },
    more: "Macbeth cannot tell whether the dagger is real or a 'fatal vision'. Shakespeare leaves it open whether the supernatural or his own guilty mind has produced it.",
    tip: "When you use foreshadows, name what is foreshadowed: 'The dagger foreshadows the murder, and its blood the guilt that follows.'",
  },
  'Precise word: critiques': {
    why: 'To critique is to examine something closely and judge its faults. Each Birling uses their power over Eva, and Priestley wants the audience to see how a society built on class lets the comfortable harm the poor.',
    not: {
      celebrates: 'Priestley wrote the play to argue against the class system, not to praise it.',
      preserves: 'Priestley, a socialist, wanted society to change, not to stay as it was.',
      imitates:
        'The play is set in 1912, but it does not simply copy the class system; it judges it.',
    },
    more: "Priestley set the play in 1912 but wrote it in 1945, when Britain was voting for change. His audience could look back at the Birlings' world and judge it.",
    tip: "Pair the verb with the method: 'Priestley critiques class through the Inspector's questioning, which makes each character face their part.'",
  },
  'Precise word: dehumanises (Jekyll and Hyde)': {
    why: "To dehumanise is to strip someone of human qualities. Calling Hyde's fury 'ape-like' turns him into an animal, playing on Victorian fears that humans could slide back down the evolutionary ladder.",
    not: {
      humanises:
        'To humanise is to make more human or sympathetic, the opposite of the effect here.',
      personifies:
        "Personification gives human qualities to something not human. Here a human is given an animal's.",
      glamorises: 'Nothing glamorous is suggested. The image is meant to disgust.',
    },
    more: 'Writers dehumanise characters to make them frightening, or to show how others see them. Animal imagery, and objects or numbers in place of names, all dehumanise.',
    tip: "Explain who is doing it and why: 'Stevenson dehumanises Hyde to suggest that his evil is primitive and bestial.'",
  },
  'Precise word: reinforces': {
    why: 'To reinforce is to strengthen something already there. The questioning has shown that each Birling shares the blame; the final speech makes that lesson plain and turns it into a warning to everyone.',
    not: {
      undercuts: "To undercut is to weaken. The speech strengthens the play's message.",
      contradicts: 'The speech agrees with everything the questioning revealed.',
      disguises: 'Nothing is hidden: the speech states the message openly.',
    },
    more: "Endings often reinforce a text's message, though some writers prefer a twist that weakens it. Priestley does both: the speech strengthens the lesson, then a final phone call tests whether the Birlings learnt it.",
    tip: "Use reinforces for structure: 'The ending reinforces the play's message by giving the Inspector the last word on responsibility.'",
  },
  'Precise word: precedes': {
    why: "To precede is to come before. The play opens with the Birlings celebrating Sheila's engagement; only then does the Inspector arrive, and the contrast makes his questions more shocking.",
    not: {
      proceeds:
        'To proceed is to go on or continue. It is often confused with precede, which means to come before.',
      succeeds: 'To succeed something is to come after it. The dinner comes first.',
      recedes:
        'To recede is to move back or fade away, as a tide does. It does not describe an order of events.',
    },
    more: "Pre- means before, as in prefix and predict; pro- means forward, as in proceed and progress. The order of scenes is a writer's choice, so it is always worth asking why one comes before another.",
    tip: "Discuss structure through order: 'The cheerful dinner that precedes the Inspector's arrival makes his news fall harder.'",
  },
  'Precise word: implies': {
    why: 'To imply is to suggest something without saying it. The writer never states that someone is missing: the empty chair does the work, and the reader is trusted to understand.',
    not: {
      infers:
        'Readers infer; writers imply. The writer gives the clue and the reader works out the meaning.',
      insists:
        'To insist is to say something firmly and directly. The empty chair is a quiet hint.',
      ignores: 'The writer draws attention to the chair, so the absence is not ignored.',
    },
    more: 'Imply and infer are a pair: the writer implies, the reader infers. Confusing them is one of the commonest slips in exam answers.',
    tip: "Use implies for the writer and infers for the reader: 'The empty chair implies grief, and the reader infers that someone has died.'",
  },
  'Precise word: infers': {
    why: "To infer is to work out a meaning from clues. Steinbeck never says that Curley's wife is lonely; the reader works it out from her endless search for someone to talk to.",
    not: {
      implies: 'The writer implies; the reader infers. Here the reader is doing the working out.',
      informs:
        'To inform is to tell someone something. The reader is not telling anyone; they are deducing.',
      intends:
        'The reader does not intend anything about her. They draw a conclusion from evidence.',
    },
    more: 'Inference is one of the main skills exam questions test: reading between the lines. Good answers say what the reader infers and which detail leads them to it.',
    tip: "Signal inference clearly: 'We can infer that she is lonely, because she keeps seeking out the men to talk to.'",
  },
  'Precise word: alludes': {
    why: "To allude is to refer to something indirectly. Golding never names Eden, but the untouched island full of fruit calls it to mind, so the boys' fall into violence becomes a version of humanity's fall.",
    not: {
      eludes:
        'To elude is to escape or avoid. It sounds like allude but has nothing to do with references.',
      deludes:
        'To delude is to fool someone. Golding is making a reference, not deceiving the reader.',
      intrudes:
        "To intrude is to enter where you are not wanted. It cannot take 'to the Garden of Eden'.",
    },
    more: "References to the Bible were easily recognised by Golding's first readers in 1954. By the end, the island paradise has burnt, and Ralph weeps for the innocence the boys have lost.",
    tip: "When you spot an allusion, say what it adds: 'The reference to Eden makes the island's destruction a second fall from grace.'",
  },
  'Precise word: evokes (Jekyll and Hyde)': {
    why: "To evoke is to call up a feeling or image in the reader's mind. Stevenson never says that London is sinister: a fog that sleeps over a 'drowned city' makes the reader feel it.",
    not: {
      invokes:
        'To invoke is to call on a power or appeal to something, such as a law or a god. It is often confused with evoke.',
      revokes: 'To revoke is to cancel, as a licence can be revoked. Nothing is cancelled here.',
      erodes:
        'To erode is to wear away. The description builds the atmosphere rather than wearing it down.',
    },
    more: "Evoke comes from the Latin evocare, 'to call out'. Writers evoke atmosphere through the senses: what can be seen, heard and felt.",
    tip: "Evokes is stronger than 'creates' for atmosphere: 'The fog evokes a city that seems to have died in its sleep.'",
  },
  'Precise word: complements (La Belle Dame sans Merci)': {
    why: "To complement is to complete or suit something, so that the two go well together. The dead reeds and silent birds match the knight's emptiness: the landscape is as drained of life as he is.",
    not: {
      compliments:
        'To compliment is to praise. With an i it means praise; with an e it means completing or matching.',
      contradicts:
        'A setting that contradicted his mood would clash with it. This bare landscape matches it.',
      comprises:
        'To comprise is to consist of. The setting is not made up of the mood; it matches it.',
    },
    more: 'A memory aid: complement, with an e, completes. Settings can match a mood, as here, or deliberately clash with it, as when a tragedy happens on a sunny day.',
    tip: "Use complements to link setting and mood: 'The storm complements Macbeth's violence, as if nature shares his disorder.'",
  },
  'Precise word: affects': {
    why: 'Affect is usually the verb, meaning to have an influence on. Fear influences each Birling differently: Sheila confesses, Gerald tries to evade, Mr Birling blusters.',
    not: {
      effects:
        'Effect is usually a noun: an effect is a result. As a verb it means to bring about, which does not fit here.',
      deflects:
        'To deflect is to turn something aside. The family may try, but the fear reaches every one of them.',
      reflects: 'To reflect is to mirror. Fear does not mirror the family; it acts on them.',
    },
    more: "A memory aid: affect is the action, effect is the end result. 'The Inspector affects them; the effect is that Sheila changes.'",
    tip: "Get this pair right in every answer, since examiners notice: 'The imagery affects the reader', but 'the effect of the imagery'.",
  },
  'Precise word: cautious (Romeo and Juliet)': {
    why: 'Cautious means careful to avoid risk. Juliet loves Romeo, but she has seen how fast he speaks: she asks him not to swear by the moon, which changes every month, in case his love changes too.',
    not: {
      careless: 'Juliet is anything but careless here: she is thinking ahead about the risks.',
      caustic: 'Caustic means bitterly sarcastic. Her tone is gentle and worried, not cutting.',
      boastful:
        'She is not praising herself. She is trying to protect herself from a changeable love.',
    },
    more: "Throughout the balcony scene Juliet is more careful than Romeo: she worries that their vows are 'too rash, too unadvis’d, too sudden'. Shakespeare gives the young heroine the clearer judgement.",
    tip: "Use precise adjectives for tone: 'cautious' tells the examiner exactly how Juliet speaks and why.",
  },
  'Precise word: scornful (Macbeth)': {
    why: "Scornful means full of contempt. Lady Macbeth mocks her husband's courage as drunken boasting that has worn off, attacking his pride so that he cannot back down.",
    not: {
      sincere: 'Her question is not a genuine enquiry. It is meant to wound, not to find out.',
      soothing: 'She is not calming him. She is goading him into action.',
      pleading: 'Pleading is begging. Lady Macbeth attacks; she does not beg.',
    },
    more: "She goes on to question his manhood: 'When you durst do it, then you were a man'. Her scorn works, and by the end of the scene Macbeth says 'I am settled'.",
    tip: "Name the technique and its target: 'Her scornful questions attack his masculinity, the one thing he cannot bear to lose.'",
  },
  'Precise word: destructive': {
    why: 'Destructive means causing ruin. Victor wants to create life and defeat death, but his creation kills his brother, his friend and his bride: his ambition destroys everything he values.',
    not: {
      constructive:
        "Constructive means helpful or building something up. Victor's ambition builds a creature but wrecks his life.",
      obstructive:
        'Obstructive means getting in the way. His ambition does not block anything; it ruins.',
      restrictive:
        "Restrictive means limiting. Victor's ambition is the opposite: it recognises no limits.",
    },
    more: "Shelley subtitled the novel 'The Modern Prometheus', after the Titan who stole fire from the gods and was punished for ever. Victor's story warns against knowledge pursued without responsibility.",
    tip: "Link the adjective to the novel's warning: 'Shelley presents ambition as destructive when it ignores responsibility for what it creates.'",
  },
  'Precise word: idealises': {
    why: "To idealise is to present something as perfect, or better than it may really be. Fezziwig's party is all warmth and generosity, with no hint of fault, because Dickens wants it to be the pattern Scrooge has failed to follow.",
    not: {
      satirises: 'Dickens mocks nothing here. The party is shown with obvious affection.',
      condemns: "Dickens approves of Fezziwig. It is Scrooge's meanness he condemns.",
      dismisses: 'The scene is given loving detail, the opposite of being dismissed.',
    },
    more: 'Idealised scenes are common in moral stories: they show readers what good looks like, so that what is wrong stands out by contrast.',
    tip: 'Use idealises with care: it says the writer shows something as perfect, so explain why they would want to.',
  },
  'Precise word: satirises': {
    why: 'To satirise is to mock in order to criticise. By making the revolutionary leaders pigs who become just like the humans they overthrew, Orwell ridicules their hypocrisy and the betrayal of the revolution.',
    not: {
      idealises: 'Orwell shows the pigs as greedy and cruel, the opposite of ideal.',
      flatters: "To flatter is to praise insincerely. Orwell's pigs are a mocking portrait.",
      sanctifies:
        "To sanctify is to make holy. Orwell's aim is to strip the leaders of their glory.",
    },
    more: 'In the last line of Animal Farm, the animals outside look from pig to man and back again, and can no longer tell which is which: the revolution has ended where it began.',
    tip: "Name what is satirised and how: 'Orwell satirises Stalin through Napoleon, whose rule becomes as cruel as Mr Jones's.'",
  },
  'Precise word: complacent': {
    why: "Complacent means smugly sure that all is well, and so blind to danger. Birling's confident forecast in 1912, two years before the First World War, shows a comfortable man who cannot imagine anything threatening his world.",
    not: {
      compliant:
        'Compliant means obedient, willing to go along with others. Birling is anything but.',
      competent:
        'Competent means capable. His claim proves wrong, so it shows the opposite of good judgement.',
      contented:
        'Contented means peacefully happy. Complacent adds the smugness and blindness that the claim reveals.',
    },
    more: "Priestley's audience in 1945 had lived through two world wars, so every confident forecast Birling makes is mocked by what they know.",
    tip: "Use complacent for characters blind to danger: it joins confidence to a fault, so it is sharper than 'confident'.",
  },
  'Precise word: penitent': {
    why: 'Penitent means sorry for wrongdoing and wanting to make amends. Sheila admits that her jealous complaint got Eva sacked, and at the end she will not pretend it never happened.',
    not: {
      petulant:
        'Petulant means sulky and childishly bad-tempered. Sheila is serious and thoughtful by the end.',
      pertinent:
        "Pertinent means relevant. It describes remarks or questions, not a person's moral state.",
      prudent:
        "Prudent means cautious and sensible about risk. Sheila's response is moral, not cautious.",
    },
    more: 'Penitent shares a root with penance and repent. Priestley sets the penitent younger generation against the parents, who are relieved when they think the Inspector was a fake.',
    tip: "Use precise moral vocabulary: penitent, remorseful and contrite each say more than 'sorry'.",
  },
  'Precise word: defiant': {
    why: 'Defiant means openly refusing to obey. Eva is one of the ringleaders of the strike, standing up to her employer, and Birling sacks her to make an example of her.',
    not: {
      docile:
        'Docile means meek and easily controlled, which is what Birling wanted his workers to be.',
      devious: 'Eva is open about her demands. Devious means sly and deceitful.',
      dutiful: 'A dutiful worker would accept the low pay. Eva challenges it.',
    },
    more: 'Birling sees her defiance as trouble; the audience is invited to see it as courage. The same quality can be named in different ways, depending on who is judging.',
    tip: "Notice whose view a word gives: 'Birling calls her a troublemaker, but Priestley presents her defiance as brave.'",
  },
  'Precise word: impenetrable (A Christmas Carol)': {
    why: "Impenetrable means impossible to get into or through. An oyster's shell is clamped shut, and so is Scrooge: no warmth gets in and none gets out. Yet oysters can hide pearls, which hints at the good buried inside him.",
    not: {
      impressionable:
        'Impressionable means easily influenced, the opposite of a man nobody can reach.',
      impressive:
        'Dickens is not praising Scrooge. The oyster suggests a man closed against the world.',
      imperceptible:
        "Imperceptible means too slight to notice. Scrooge's coldness is very noticeable; it is his inner self that cannot be reached.",
    },
    more: "The full sentence builds a list: 'secret, and self-contained, and solitary as an oyster'. Each phrase seals Scrooge off further, so his opening up at the end feels like a shell finally prised open.",
    tip: 'Unpack similes fully: an oyster is closed, hard and alone, but may hold a pearl, so the comparison suggests both isolation and hidden worth.',
  },
  'Precise word: adopted (Macbeth)': {
    why: 'To adopt an idea is to take it on as your own. Lady Macbeth taught him to look innocent and hide the serpent beneath; now Macbeth repeats her lesson in his own words. He has taken on her way of thinking completely.',
    not: {
      adapted:
        'To adapt is to change something to suit a new purpose. Macbeth takes her idea over whole; he does not alter it.',
      deserted: 'He has not abandoned her view. The couplet shows him embracing it.',
      rejected:
        'Earlier in the scene he wanted to stop, but by the end he accepts her plan completely.',
    },
    more: 'Adopt and adapt are easily confused: adopt means take on; adapt means change to fit. A rhyming couplet often ends a scene in Shakespeare, giving a decision the ring of finality.',
    tip: "Track how Macbeth's language changes: when he starts to sound like Lady Macbeth, the audience sees whose ideas now rule him.",
  },
  'Precise word: assertive (Jane Eyre)': {
    why: "Assertive means confident and forceful in stating your rights or views. Rochester calls her a wild bird; Jane rejects the image and declares that she is 'a free human being with an independent will'.",
    not: {
      submissive: 'Jane is refusing to submit. Her reply asserts her freedom.',
      evasive: 'Jane answers directly. Evasive means avoiding the point.',
      apologetic: 'She is not sorry; she is standing up for herself.',
    },
    more: "Bird images run through the novel, from the book of birds Jane reads in the first chapter to Rochester's image of a bird behind 'the close-set bars of a cage'. Here Jane turns the image around: she is no captive.",
    tip: 'Use this line in answers on independence and gender: Jane claims equality in the language of freedom.',
  },
  'Precise word: snobbish': {
    why: "Snobbish means looking down on people of a lower class. Pip, now a young gentleman in London, is ashamed of Joe's clumsy manners and treats him coldly, though Joe has loved him all his life.",
    not: {
      generous: 'Pip is mean-spirited in this scene, not generous. He wants Joe gone.',
      patient: 'Pip is irritated by Joe, not patient with him.',
      grateful: 'Pip owes Joe everything, which is what makes his snobbery shameful.',
    },
    more: "Joe calls him 'Sir' at first, then leaves with quiet dignity. The older Pip, telling the story, is ashamed of how his younger self behaved.",
    tip: "Use the visit to discuss Dickens's idea of a gentleman: good manners mean little without a good heart.",
  },
  'Precise word: manipulative (Animal Farm)': {
    why: 'Manipulative means controlling people by cunning and unfair influence. Squealer can make the animals believe the opposite of what they see, which is exactly what the pigs need as they take more and more for themselves.',
    not: {
      transparent: 'Transparent means open and honest. Squealer hides the truth.',
      inarticulate: "Squealer is 'a brilliant talker', the opposite of inarticulate.",
      hesitating: 'Squealer is quick and confident. His skill is persuasion, not hesitation.',
    },
    more: "Squealer uses statistics, threats that Jones will return, and quiet changes to the Commandments. Orwell based him on the Soviet state's newspapers and speeches.",
    tip: 'Analyse how Squealer persuades: Orwell wants readers to recognise the same tricks in real political language.',
  },
  'Precise word: unquestioning (Animal Farm)': {
    why: "Unquestioning means accepting without ever doubting. Boxer meets every problem by working harder and trusting that 'Napoleon is always right', so he never sees how the pigs use him.",
    not: {
      ungrateful: 'Boxer is the opposite: loyal and thankful to the farm.',
      unexpected: 'His loyalty is constant and predictable. The tragedy is how it is used.',
      unpredictable: 'Boxer is the most reliable animal on the farm.',
    },
    more: 'Orwell uses Boxer to show how the loyalty of ordinary workers can be turned against them. When he is too weak to work, the pigs sell him to the knacker.',
    tip: "Explain the tragedy of a character's virtue: Boxer's goodness makes him easy to use.",
  },
  'Precise word: tormented (Macbeth)': {
    why: 'Tormented means made to suffer severely. Lady Macbeth now believes that no perfume in the world can cover the smell of blood on her hand. The guilt she refused to feel tortures her in her sleep.',
    not: {
      tempted: 'Tempted means drawn towards doing wrong. Her suffering comes after the crime.',
      trained: 'Nothing trains her. Her guilt has broken through her control.',
      tolerated: 'Her guilt is not merely put up with. It is torturing her.',
    },
    more: "She speaks in broken prose in this scene, not verse, a sign of her collapsing mind. The doctor says 'The heart is sorely charged': overloaded with guilt.",
    tip: 'Contrast Act 1 with Act 5: the woman who called on spirits to make her cruel is now destroyed by conscience.',
  },
  'Precise word: enacts (Macbeth)': {
    why: 'To enact something is to act it out. The line does not just describe endless, empty days: its plodding repetition makes the reader live through them, so the form performs the meaning.',
    not: {
      erases: 'The repetition does not wipe anything out. It makes the dull sameness felt.',
      excuses: "Nothing is being excused. The line carries Macbeth's despair in its sound.",
      escapes: 'The repetition traps the reader in the sameness rather than escaping it.',
    },
    more: "The next line, 'Creeps in this petty pace from day to day', slows further with its heavy stresses. Shakespeare makes time itself feel like a burden.",
    tip: "Use enacts for form that does what it describes: 'The broken syntax enacts the speaker's breakdown.'",
  },
  'Precise word: elicits (Frankenstein)': {
    why: 'To elicit is to draw out a response. The creature describes being shut out of all happiness for ever, and the reader, unlike Victor, feels for him: Shelley draws out sympathy for the so-called monster.',
    not: {
      evades: 'To evade is to avoid. The speech does not avoid sympathy; it draws it out.',
      erases: "The creature's words create sympathy rather than wiping it out.",
      exhausts: 'To exhaust sympathy would be to use it up. This speech produces it.',
    },
    more: "Elicit is often confused with illicit, meaning unlawful. The creature's speeches are carefully reasoned and moving, which challenges readers who judge him by his appearance.",
    tip: "Use elicits for reader response: 'The creature's loneliness elicits pity, and even anger at Victor's cruelty.'",
  },
  'Precise word: encapsulates (Jekyll and Hyde)': {
    why: "To encapsulate is to sum up the essence of something in a short form. Jekyll's balanced phrase puts the whole novel into a few words: every person contains two natures, one respectable and one hidden.",
    not: {
      exaggerates: "Jekyll's claim is the novel's own idea, stated plainly, not overstated.",
      contradicts: 'The line agrees with everything the novel has shown.',
      complicates:
        "The line clarifies rather than complicates: it states the novel's idea at its simplest.",
    },
    more: "The repetition of 'truly' gives the sentence the weight of a scientific law. Jekyll adds that he says two only 'because the state of my own knowledge does not pass beyond that point'.",
    tip: 'Choose quotations that sum up an idea: one balanced line can support a whole paragraph on the divided self.',
  },
  'Precise word: self-absorbed (Pride and Prejudice)': {
    why: "Self-absorbed means wrapped up in your own feelings. Darcy begins not with Elizabeth's qualities but with his own struggle against loving her, and goes on to dwell on her family's inferiority: no wonder she refuses him.",
    not: {
      'self-effacing':
        'Self-effacing means modest, keeping yourself in the background. Darcy puts himself at the centre.',
      'light-hearted': 'The proposal is intense and agitated, not playful.',
      'tongue-tied':
        'Darcy speaks fluently and at length. His fault is what he says, not an inability to speak.',
    },
    more: "Austen notes that he 'was not more eloquent on the subject of tenderness than of pride'. Elizabeth's refusal forces him to change, and his second proposal is very different.",
    tip: "Compare the two proposals: Austen measures Darcy's growth by how differently he speaks the second time.",
  },
  'Precise word: antithetical (A Christmas Carol)': {
    why: 'Antithetical means directly opposed. Fred sees Christmas as a time of kindness and generosity; Scrooge sees only unpaid bills. Dickens sets the two views against each other in Stave One so that the story can test them.',
    not: {
      sympathetic: 'Sympathetic means agreeing with or feeling for. The two views clash.',
      incidental: 'Incidental means minor or accidental. The contrast is central to the novella.',
      identical: 'The two views could hardly be more different.',
    },
    more: "Fred ends his speech by saying that Christmas 'has done me good, and will do me good', though it has never put money in his pocket. Scrooge measures everything in money; Fred measures it in good.",
    tip: "Use antithetical for opposing ideas or characters: 'Fred's generosity is antithetical to Scrooge's meanness.'",
  },
  'Precise word: prophetic (Romeo and Juliet)': {
    why: "Prophetic means correctly predicting the future. The Friar warns that passions as intense as Romeo and Juliet's burn out violently, and within days both lovers are dead.",
    not: {
      pathetic: 'Pathetic can mean pitiful or feeble. The warning is neither; it is accurate.',
      prosaic:
        'Prosaic means dull and ordinary. The image that follows, of fire and gunpowder, is vivid.',
      paradoxical:
        'A paradox seems to contradict itself. The warning is simple: violent joys end violently.',
    },
    more: "The Friar's image continues: 'like fire and powder, / Which as they kiss consume'. Shakespeare often gives the play's wisest warnings to characters the lovers ignore.",
    tip: 'Link warnings to structure: lines that predict the ending make the audience watch with dread.',
  },
  'Precise word: sceptical (Macbeth)': {
    why: "Sceptical means doubting what you are told until you see good reason. Banquo distrusts the witches: he warns that evil powers tell small truths to win our trust, then betray us 'In deepest consequence'.",
    not: {
      spiteful: 'Banquo is not trying to hurt anyone. He is wary.',
      sentimental: 'Banquo is cool-headed here, the opposite of sentimental.',
      submissive: "Banquo does not give in to the witches' promises; he questions them.",
    },
    more: "Banquo hears a prophecy too, but he does not act on it. His caution highlights Macbeth's readiness to believe what he wants to hear.",
    tip: "Use Banquo's doubt to argue that Macbeth chooses evil: the same prophecy leads Banquo to caution.",
  },
  'Precise word: instinctive (Jekyll and Hyde)': {
    why: 'Instinctive means coming from deep feeling rather than reasoning. Enfield cannot say what is wrong with Hyde; he simply feels a powerful dislike. Almost everyone who meets Hyde reacts the same way.',
    not: {
      indifferent: 'Enfield is anything but indifferent: he loathes Hyde.',
      insincere: 'Nothing suggests Enfield is pretending. His disgust is real.',
      intellectual: "Enfield admits he cannot reason it out: 'I scarce know why'.",
    },
    more: "Stevenson never fully describes Hyde's appearance. Leaving him undescribed lets each reader imagine the worst, which is more frightening than any detail.",
    tip: 'Notice what a writer withholds: gaps in description can create more fear than detail.',
  },
  'Precise word: selfless (Remember)': {
    why: "Selfless means putting another person's needs before your own. The speaker first begs to be remembered, then decides she would rather be forgotten than cause her lover pain: her love finally asks nothing for herself.",
    not: {
      selfish:
        'That is the opposite. Wanting to be remembered might be selfish; she gives that up.',
      spiteful: 'Nothing is meant to hurt. She wants him to smile.',
      sarcastic: 'The tone is sincere and tender, not mocking.',
    },
    more: "The plea of the first eight lines softens into release in the last six. The sonnet's two halves give the speaker room to change her mind.",
    tip: "Track how a speaker's attitude changes across a poem: Rossetti moves from asking to giving.",
  },
  'Precise word: poses (The Tyger)': {
    why: 'To pose a question or problem is to put it forward for thought. Blake does not answer: he leaves the reader facing the mystery of a God who could create both the gentle lamb and the terrifying tiger.',
    not: {
      solves: 'The poem offers no answer. The question is left hanging.',
      hides: 'The question makes the problem plain rather than hiding it.',
      mocks: 'Blake is awed, not mocking. The question is serious.',
    },
    more: 'The Tyger is built almost entirely of questions, with no answers. The effect is wonder and unease rather than certainty.',
    tip: 'When a poem asks questions, discuss why the poet leaves them unanswered.',
  },
  'Precise word: euphemism (My Last Duchess)': {
    why: "A euphemism is a mild phrase used in place of a harsh one. 'All smiles stopped together' never says that the Duchess was killed, but the reader understands what the Duke's 'commands' were. The calm phrasing makes him more frightening.",
    not: {
      hyperbole:
        'Hyperbole exaggerates. The Duke does the opposite: he says far less than he means.',
      oxymoron: 'An oxymoron joins two opposites. There are none in this phrase.',
      paradox:
        "A paradox seems to contradict itself. The Duke's words are plain and quietly sinister.",
    },
    more: 'Browning lets the Duke reveal the crime himself, in one calm sentence, and then move straight on to showing off his art. His coldness is the real horror.',
    tip: 'When a speaker avoids saying something directly, ask what the avoidance reveals about them.',
  },
  'Precise word: saturates (La Belle Dame sans Merci)': {
    why: "To saturate is to soak something completely. 'Pale', then 'Pale', then 'death-pale': the word returns until the whole vision is drenched in the colour of death, warning the knight what the lady has done to others.",
    not: {
      separates: 'The repetition binds the dream to death; it does not separate them.',
      celebrates: 'Nothing is celebrated. The pale figures are victims.',
      satisfies: 'The image disturbs rather than satisfies.',
    },
    more: "The pale kings and warriors cry that 'La Belle Dame sans Merci / Hath thee in thrall': the knight, like them, is her captive. The title means 'the beautiful lady without mercy'.",
    tip: 'Track repeated words in a poem: repetition can soak a scene in one feeling.',
  },
  'Precise word: surrenders (Piano)': {
    why: "To surrender is to give up after resisting. The speaker has fought the pull of the past, 'In spite of myself', but by the last line his 'manhood is cast / Down in the flood of remembrance': he gives in and weeps like a child.",
    not: {
      celebrates: 'He is not proud of his tears. The ending shows defeat, not celebration.',
      conceals: 'He openly admits weeping. Nothing is hidden.',
      reinforces: 'His pride is overwhelmed, not strengthened.',
    },
    more: "The poem's long, flowing lines carry the speaker along like the 'flood' he describes. The final simile, 'like a child', completes his journey back in time.",
    tip: 'Look at how a poem ends: a final admission like this one often settles a conflict the poem has built.',
  },
  'Precise word: rebellious (Jane Eyre)': {
    why: "Rebellious means resisting authority. Jane has always obeyed; now, after John Reed attacks her and she fights back, she resists every step of the way, 'a new thing' that begins her lifelong refusal to accept injustice.",
    not: {
      obedient: 'That is how she had behaved until now. Resisting is the change.',
      grateful: 'Jane has nothing to be grateful for here; she is being punished unjustly.',
      forgetful:
        'Jane remembers this moment vividly, years later. The point is her new resistance.',
    },
    more: "The adult Jane admits she was 'a trifle beside myself', out of control. Brontë presents the young girl's rebellion with sympathy, as a response to cruelty.",
    tip: "Use the red-room to discuss Jane's development: her first rebellion begins her journey towards independence.",
  },
  'Precise word: absolute (The Sign of Four)': {
    why: 'Absolute means complete and without limit. Holmes refuses to allow any exception: for him, one case that breaks a rule proves the rule false. He trusts reasoning entirely, and emotion not at all.',
    not: {
      absent: "Holmes's faith in logic is overwhelming, not missing.",
      amused: 'Holmes means it seriously. Nothing here is a joke.',
      anxious: 'Holmes is utterly confident in reasoning, not worried.',
    },
    more: 'The everyday saying runs the other way: people say that an exception proves the rule. Holmes turns it around, which shows how strictly logical, and how unusual, his mind is.',
    tip: 'Notice when a character reverses a familiar saying: it often reveals how they think.',
  },
  'Precise word: bleak (Disabled)': {
    why: "Bleak means cold, bare and without hope. 'A few sick years' suggests both illness and an early death, and 'Institutes' are impersonal places where he will be managed, not loved. Owen allows no comforting ending.",
    not: {
      bright: 'Nothing in the line is hopeful. The future it describes is short and sick.',
      jolly: 'The tone is flat and grim. Jolly is the opposite.',
      grand:
        "The soldier's future is small and pitiful, not grand. Owen contrasts it with his glorious past.",
    },
    more: "The poem moves between the young man's past, when he was cheered as a footballer and a soldier, and his present in a wheelchair. The flat future tense of this line closes off every hope.",
    tip: 'Compare past and present tense in Disabled: the contrast measures exactly what the war took.',
  },
  'Precise word: juxtaposes (Macbeth)': {
    why: 'To juxtapose is to set two things side by side so that they contrast. The innocent flower and the hidden serpent sit in one sentence: what is seen and what lies beneath, the gap the whole play explores.',
    not: {
      justifies: 'Lady Macbeth is not defending appearances. She sets them against what they hide.',
      jeopardises:
        'To jeopardise is to put at risk. Her advice exploits appearances; it does not endanger them.',
      generalises: 'Her advice is specific and vivid, not a sweeping statement.',
    },
    more: 'The serpent recalls the Garden of Eden, where Satan takes the form of a snake. The image makes the plan sound like the first temptation.',
    tip: 'Use juxtaposes for contrasts within a single image or line, and say what the contrast reveals.',
  },
  'Precise word: substitute': {
    why: 'A substitute is something that takes the place of something else. Betrayed and alone, Silas pours all his love into his gold; when Eppie arrives, she takes its place, and the exchange shows what the gold had been standing in for.',
    not: {
      sacrifice: 'Silas does not give the gold up for anything; it is stolen from him.',
      stimulus: 'A stimulus spurs action. The gold fills an emptiness rather than driving him on.',
      safeguard: 'The gold does not protect him from loss. It replaces what he has lost.',
    },
    more: "Eliot makes the exchange almost literal: Silas first mistakes the sleeping child's golden hair for his own gold, brought back to him.",
    tip: "Use the exchange of gold for Eppie to discuss Eliot's message about what truly enriches a life.",
  },
  'Precise word: conceals (Macbeth)': {
    why: "To conceal is to hide. Macbeth's aside lets the audience see the murderous ambition he is hiding from everyone on stage, while Duncan goes on praising him as a loyal subject.",
    not: {
      confesses:
        'To confess is to admit openly. Macbeth admits nothing to the court; only the audience hears him.',
      concedes:
        'To concede is to admit that someone else is right. Macbeth is hiding his desires, not giving way.',
      conveys:
        'To convey is to communicate. The aside conveys his ambition to the audience, but he hides it from the court.',
    },
    more: "He asks the stars to 'hide your fires' so that no light falls on his 'black and deep desires'. Darkness and concealment become his allies from this point on.",
    tip: 'Use asides as evidence of hidden thoughts: they show the gap between what a character says in public and what they think.',
  },
  'Precise word: paradoxical (Romeo and Juliet)': {
    why: "Paradoxical means seeming to contradict itself while being true. Juliet's only love has grown out of her family's only hatred: in one line, the feud and the romance become impossible to separate.",
    not: {
      predictable: 'Juliet is shocked by the discovery. Nothing about it is predictable.',
      patronising:
        'Patronising means talking down to someone. Juliet is speaking her own horror aloud.',
      proverbial:
        "A proverbial saying is a familiar one. This line is Juliet's own, and startling.",
    },
    more: "The next line keeps the balance: 'Too early seen unknown, and known too late'. Shakespeare makes Juliet speak in the play's pattern of opposites.",
    tip: "Use the line to discuss how love and hate are entwined in the play: the lovers' passion is born from the feud.",
  },
  'Precise word: exuberant (A Christmas Carol)': {
    why: 'Exuberant means overflowing with joy and energy. Scrooge piles one happy simile on another, laughing and crying at once: the cold, careful man of Stave One has burst into life.',
    not: {
      exhausted: 'Scrooge is full of energy on Christmas morning, not worn out.',
      embittered: 'Embittered means made bitter. Scrooge has just lost his bitterness.',
      evasive: "Evasive means avoiding the point. Scrooge's joy is open and wholehearted.",
    },
    more: "The similes contrast with Stave One's 'solitary as an oyster'. Dickens even lets Scrooge sound slightly ridiculous, which makes his joy more human.",
    tip: "Compare the language of the opening and ending to show Scrooge's change: frost and flint become feathers and angels.",
  },
  'Precise word: heighten (A Christmas Carol)': {
    why: "To heighten something is to make it stronger or more intense. The three slow adverbs drag out the Phantom's approach, so the reader feels Scrooge's dread growing with every word.",
    not: {
      lighten: 'To lighten would be to make the mood less heavy. These adverbs make it heavier.',
      loosen: 'To loosen is to relax a hold. The adverbs tighten the tension.',
      shorten: 'The adverbs do the opposite: they slow and stretch the moment.',
    },
    more: "The commas force pauses between 'slowly', 'gravely' and 'silently', so the sentence moves as slowly as the Phantom. The silent spirit is the most frightening of the three.",
    tip: 'Look at how punctuation controls pace: commas can slow a sentence and build suspense.',
  },
  'Precise word: identifies (Great Expectations)': {
    why: "To identify someone is to show who or what they are. The iron on his leg marks Magwitch as a convict escaped from the prison ships, and Pip's terror makes the meeting unforgettable.",
    not: {
      disguises: 'Nothing is hidden: the leg iron shows exactly what he is.',
      glorifies: 'The description is frightening and pitiful, not glorious.',
      forgives: 'Pip is not forgiving anyone; he is terrified.',
    },
    more: "Dickens adds that Magwitch was 'soaked in water, and smothered in mud'. Later in the novel the frightening convict turns out to be Pip's secret benefactor.",
    tip: 'Use first impressions to discuss how Dickens plays with judgement: the man Pip fears is the one who loves him most.',
  },
  'Precise word: epiphany (Pride and Prejudice)': {
    why: "An epiphany is a sudden moment of realisation. Reading Darcy's letter, Elizabeth sees that she has been blind, proud and prejudiced herself, and she understands her own character for the first time.",
    not: {
      prophecy:
        'A prophecy predicts the future. Elizabeth suddenly understands the present and the past.',
      nemesis:
        "A nemesis is a downfall or an avenger. Elizabeth's moment is one of insight, not punishment.",
      denouement:
        'The denouement is the final settling of the plot. This moment comes in the middle of the novel.',
    },
    more: "She admits that she has 'courted prepossession and ignorance, and driven reason away'. The heroine's discovery of her own prejudice is the turning point of the novel.",
    tip: "Use the moment to show that Austen's title applies to Elizabeth as well as Darcy.",
  },
  'Precise word: intimate (Jane Eyre)': {
    why: "Intimate means close and personal. Jane speaks straight to 'Reader', as if confiding in a friend, and tells her news in four plain words, making the reader part of her life.",
    not: {
      impersonal:
        "Impersonal means distant and cold. Addressing 'Reader' directly is the opposite.",
      indirect: 'The sentence could not be more direct: four words, straight to us.',
      ironic: 'Jane means exactly what she says. There is no irony in her announcement.',
    },
    more: "Brontë's narrator addresses the reader several times in the novel. Here the plain sentence also puts Jane in charge of the action: she marries him, rather than being married.",
    tip: 'Comment on sentence structure: notice who is the subject of the verb, and what that says about power.',
  },
  'Precise word: menacing (Frankenstein)': {
    why: 'Menacing means threatening. The creature, rejected again, warns Victor that having nothing left to lose makes him dangerous, and he goes on to carry out his threats.',
    not: {
      merciful: 'The warning shows no mercy. It is a threat.',
      mournful: 'The creature has reason for sorrow, but this line is a threat, not a lament.',
      modest: 'The creature claims great power. Modest is the opposite.',
    },
    more: 'Shelley shows how the creature changes from gentle to threatening only after repeated rejection. Readers are left to decide who made the monster.',
    tip: "Track the creature's voice across the novel: it moves from pleading to menace as his hopes are destroyed.",
  },
  'Precise word: deductive (The Sign of Four)': {
    why: 'Deductive reasoning reaches a conclusion step by step from the evidence. Holmes rules out every impossibility, so that what is left must be true, however unlikely it seems.',
    not: {
      seductive:
        "Seductive means tempting. The words sound alike, but Holmes's method is about logic, not temptation.",
      destructive: 'Holmes builds a conclusion; nothing is destroyed.',
      defective: "Defective means faulty. Holmes's method is his great strength.",
    },
    more: "Holmes calls this his 'precept', a rule he repeats to Watson. Doyle's detective stories made the method famous, though strictly much of it works by inference from clues.",
    tip: 'Use precise words for reasoning in your own analysis: deduce, infer and conclude each mean something slightly different.',
  },
  'Precise word: dismissive (The War of the Worlds)': {
    why: "Dismissive means treating something as not worth considering. Ogilvy, an astronomer, waves away the idea of life on Mars, yet the Martians' missiles are already on their way, and Ogilvy himself is the first to find one.",
    not: {
      desperate: 'Ogilvy is calm and confident, not desperate.',
      deceitful: 'He believes what he says. His mistake is overconfidence, not lying.',
      delighted: 'He is not pleased by anything; he is brushing an idea aside.',
    },
    more: 'Wells fills the opening with confident experts and comfortable people, so the invasion humbles them all.',
    tip: 'Notice how writers use confident characters to set up a fall: the more certain the claim, the harder the shock.',
  },
  'Precise word: paradox (Animal Farm)': {
    why: "A paradox seems to contradict itself. Equality cannot have degrees, yet the pigs claim that some animals are 'more equal': the contradiction disguises their privilege in the language of fairness.",
    not: {
      parable:
        'A parable is a story with a moral. The Commandment is a single, self-contradicting sentence.',
      proverb:
        "A proverb is a traditional saying of common wisdom. This rule is the pigs' own trick.",
      prologue: 'A prologue opens a work. This Commandment comes at the very end.',
    },
    more: 'The Commandment replaces all seven of the originals, painted on the barn wall in their place. Orwell shows language itself being bent to serve power.',
    tip: "Use this line to discuss how Orwell's pigs twist language: contradiction becomes a tool of control.",
  },
  'Precise word: softens (Remember)': {
    why: "To soften is to make something seem less harsh. Calling death 'the silent land' turns it into a quiet, distant place, so the poem can speak of parting gently.",
    not: {
      sharpens: 'To sharpen is to make harsher. The phrase does the opposite.',
      shortens:
        'Nothing is made shorter. The phrase changes how death feels, not how long it lasts.',
      stiffens: 'To stiffen is to make rigid. The phrase makes death feel gentle and calm.',
    },
    more: "The phrase works as a euphemism, a gentle way of naming something painful. The sonnet's calm, flowing lines match the softened image.",
    tip: 'Ask what a gentle phrase for death achieves: comfort, distance, or a refusal to face the truth?',
  },
  'Precise word: possession (My Last Duchess)': {
    why: "A possession is something you own. The Duke shows off his late wife's portrait as one of his treasures, 'my last Duchess', as if she were simply one in a series of things he has owned.",
    not: {
      profession:
        'A profession is a job. The words sound alike, but the Duke treats her as property.',
      procession:
        'A procession is a line of people moving forward. The idea does not fit his attitude.',
      permission: 'Permission is consent. The Duke never asked for hers.',
    },
    more: "The word 'last' suggests there have been others and will be another: he is arranging his next marriage as he speaks. The portrait gives him the control he never had over the living woman.",
    tip: 'Use the opening line to discuss power and control: the Duke prefers his wife as a painting he can show or hide.',
  },
  'Precise word: resentful (The Tempest)': {
    why: "Resentful means bitter about being treated unfairly. Caliban argues that the island was his mother's, and so his, until Prospero took it: he feels robbed of his home.",
    not: {
      grateful: 'Caliban is the opposite of grateful: he feels cheated.',
      playful: 'His tone is bitter and angry, not playful.',
      hopeful: 'Caliban has little hope here; he is complaining of a loss.',
    },
    more: "Caliban reminds Prospero that he once loved him and showed him 'all the qualities o’ th’ isle'. Many modern readings see his complaint as that of a colonised people.",
    tip: 'Weigh both sides: Prospero calls Caliban a monster, yet Shakespeare gives him a powerful argument.',
  },
  'Precise word: antithesis (Julius Caesar)': {
    why: "Antithesis sets opposing ideas against each other in balanced phrases. 'Caesar less' and 'Rome more' mirror each other exactly, making Brutus's reason sound logical and fair.",
    not: {
      hyperbole: "Hyperbole exaggerates. Brutus's line is carefully balanced, not exaggerated.",
      onomatopoeia: "Onomatopoeia imitates sounds. The line's force comes from its balance.",
      euphemism:
        'A euphemism softens a harsh truth. Brutus is explaining his reason, not hiding the murder.',
    },
    more: 'Brutus speaks in prose, plainly and reasonably. Antony then answers in verse, with emotion, and turns the crowd: Shakespeare contrasts two styles of persuasion.',
    tip: 'Use antithesis in your own speeches: balancing two opposites makes an argument sound clear and decisive.',
  },
  'Precise word: assert (The Merchant of Venice)': {
    why: "To assert is to state something firmly. Shylock's questions answer themselves: of course a Jew bleeds, laughs and feels. Each question insists on a shared humanity that the Christians deny him.",
    not: {
      dispute: 'Shylock is not disputing that he is human; he is insisting on it.',
      neglect:
        'His whole speech is about the shared humanity others neglect. He does not neglect it.',
      conceal: 'Shylock makes his point openly and forcefully. Nothing is hidden.',
    },
    more: "The speech begins 'Hath not a Jew eyes?' and builds to revenge: Shylock argues that he has learnt cruelty from Christian example. It is both a plea for humanity and a justification for vengeance.",
    tip: "Discuss the speech's double effect: it moves the audience to sympathy, then unsettles them with revenge.",
  },
  'Precise word: mocking (Much Ado About Nothing)': {
    why: "Mocking means making fun of something. Beatrice ridicules the whole idea of love and men's promises, though by the end she is swearing her own love for Benedick.",
    not: {
      tender: 'Her tone is sharp and comic, not gentle.',
      fearful: 'Beatrice shows no fear: she is confident and witty.',
      humble: 'She is boldly sure of her own opinion, the opposite of humble.',
    },
    more: 'Beatrice and Benedick both claim to scorn love, which is why their friends find it so easy to trick them into falling for each other.',
    tip: 'Ask whether mockery hides feeling: Shakespeare often makes the loudest scorners the most likely lovers.',
  },
  'Precise word: passive (Disabled)': {
    why: 'Passive means not acting, but having things done to you. The soldier sits and waits; he cannot even go to bed until others come for him, a painful change from the active young man he was.',
    not: {
      powerful: 'The soldier has lost his strength. The opening shows his helplessness.',
      playful: 'There is nothing playful here. The tone is bleak.',
      pompous: 'He is not self-important; he is helpless and alone.',
    },
    more: "The poem ends with him asking, 'Why don't they come?' He depends on others for everything. Owen contrasts this with memories of him as a sportsman and a volunteer.",
    tip: 'Notice verbs that show who acts: in Disabled, things are done to the soldier rather than by him.',
  },
  'Precise word: contemptuous (Great Expectations)': {
    why: 'Contemptuous means showing scorn. Estella sneers at Pip for using a working-class word for a playing card, and his shame begins at once.',
    not: {
      affectionate: 'Estella shows no warmth to Pip here.',
      sympathetic: 'Estella does not feel for Pip; she belittles him.',
      apologetic: 'She is not sorry. She means to wound.',
    },
    more: "Pip says that her contempt 'was so strong, that it became infectious', and he catches it: he begins to despise his own home and Joe.",
    tip: "Trace how one character's contempt changes another: Estella's scorn shapes Pip's ambition.",
  },
  'Precise word: fickle (Romeo and Juliet)': {
    why: 'Fickle means changeable in love or loyalty. That morning Romeo was sighing over Rosaline; now, at first sight of Juliet, he asks whether he ever loved before. His heart changes very fast.',
    not: {
      fearful: 'Romeo is not afraid here; he is dazzled.',
      fretful: 'Fretful means anxious and restless. Romeo is suddenly thrilled.',
      forlorn: 'Forlorn means sad and lonely, which he was over Rosaline. Now he is elated.',
    },
    more: 'Friar Laurence later teases Romeo for forgetting Rosaline so quickly. The play invites the question of whether this love is different, and its tragic ending gives one answer.',
    tip: "Weigh Romeo's changeability against his loyalty to Juliet: a strong answer considers both.",
  },
  'Precise word: fundamental (Jekyll and Hyde)': {
    why: "Fundamental means basic and essential, part of the foundation. Jekyll calls duality 'thorough and primitive': it goes all the way through human nature and is as old as humanity itself.",
    not: {
      incidental:
        'Incidental means minor or accidental. Jekyll insists the division is deep and basic.',
      accidental: 'Jekyll sees the division as part of human nature, not an accident.',
      ornamental: 'Ornamental means decorative. Jekyll is describing the core of human nature.',
    },
    more: "Jekyll's statement reads like a scientific discovery about the human mind. Stevenson wrote at a time when Victorians were fascinated by evolution, crime and the hidden self.",
    tip: "Use this line to discuss Stevenson's message: evil is not outside us but part of every human being.",
  },
  'Precise word: constant (Sonnet 116)': {
    why: 'Constant means unchanging and reliable. The pole star guided sailors because it never moves; love, the sonnet argues, guides lovers in the same steady way, however the storms rage.',
    not: {
      careless: 'A guide that guides ships home is anything but careless.',
      costly: 'The image is about reliability, not price.',
      clumsy: "A star cannot be clumsy, and the sonnet praises love's steadiness.",
    },
    more: "A 'bark' is a ship. The sonnet adds that love is an 'ever-fixed mark, / That looks on tempests and is never shaken'.",
    tip: 'Unpack each image of love in the sonnet: a fixed mark, a star, something Time cannot conquer.',
  },
  'Precise word: radiant (The Tyger)': {
    why: "Radiant means glowing with light. 'Burning bright' makes the tiger blaze like fire in the dark forest: dazzling, beautiful and dangerous all at once.",
    not: {
      ragged: 'The tiger is splendid, not shabby.',
      restful: 'A burning tiger is not calm. The image is full of energy.',
      rotten: 'The image is of vivid life, not decay.',
    },
    more: "Fire returns throughout the poem: the creator must 'seize the fire' to make the tiger. The image suggests both creative power and danger.",
    tip: "Trace a single image through a poem: Blake's fire links the tiger to its creator.",
  },
  'Precise word: limits (Macbeth)': {
    why: 'Limits are the boundaries of what is right. Macbeth argues that a true man dares everything proper to a man, and that whoever dares more is not a man at all: he still knows where the line is.',
    not: {
      lusts: 'Macbeth is talking about duty and decency, not desire.',
      loves: 'The line is about what a man should and should not do.',
      looks: 'Appearance has nothing to do with it. He is talking about moral limits.',
    },
    more: 'Lady Macbeth turns his argument around, saying he was a man when he dared to plan the murder. By the end of the scene he has crossed the line he named.',
    tip: "Use this exchange to show how Lady Macbeth manipulates her husband's idea of manhood.",
  },
  'Precise word: indignant (Pride and Prejudice)': {
    why: 'Indignant means angry at something you think is unfair or insulting. Lady Catherine is outraged that Elizabeth, a lower-ranking woman with an embarrassing family, might marry into Pemberley.',
    not: {
      innocent: 'Her question is an attack, not innocent.',
      inquisitive: 'She does not want an answer; she wants to stop the marriage.',
      indifferent: 'She cares intensely. Indifferent means not caring.',
    },
    more: "Elizabeth refuses to be bullied, and her calm defiance impresses Darcy when he hears of it. Lady Catherine's interference helps to bring about the marriage she wanted to prevent.",
    tip: "Notice how Austen uses rhetorical questions to reveal a character's arrogance.",
  },
  'Paired terms: connotation (A Christmas Carol)': {
    why: "A connotation is what a word suggests beyond its literal meaning. 'Cold' literally means low in temperature, but applied to Scrooge's inner self it suggests cruelty and a lack of feeling. That suggested meaning is a connotation.",
    not: {
      denotation:
        'Denotation is the literal meaning, low temperature. The cruelty is what the word suggests, which is its connotation.',
      onomatopoeia: "Onomatopoeia imitates a sound, as 'crash' does. 'Cold' imitates nothing.",
      alliteration:
        "Alliteration repeats opening sounds. The question is about what 'cold' suggests, not how it sounds.",
    },
    more: "Dickens extends the image: the cold 'nipped his pointed nose, shrivelled his cheek'. Scrooge carries his own winter with him, so the weather of the book becomes a picture of his heart.",
    tip: 'Analyse a word in two steps: what it denotes, then what it connotes and why the writer wants that suggestion.',
  },
  'Paired terms: denotation': {
    why: "The denotation of a word is its literal, dictionary meaning. 'Dove' denotes a kind of bird; peace and gentleness are its connotations, the ideas the word carries with it.",
    not: {
      connotation:
        'Connotations are the extra ideas, here peace and gentleness. The plain meaning, a bird, is the denotation.',
      etymology:
        "Etymology is a word's history and origin. Denotation is what it means now, plainly.",
      inflection:
        "An inflection is a change to a word's ending, such as dove to doves. It says nothing about meaning.",
    },
    more: 'Denotation and connotation work as a pair: every word has a literal meaning and a cloud of associations. Writers choose words for the cloud as much as for the literal meaning.',
    tip: 'Never stop at denotation in an exam answer: the credit lies in explaining the connotations and why they matter.',
  },
  'Paired terms: analepsis': {
    why: 'Analepsis is a flashback: the narrative goes back to an earlier time. Victor tells his story to Walton on the ship, looking back on everything that has already happened, so the main narrative is retrospective from start to finish.',
    not: {
      prolepsis: 'Prolepsis jumps forward in time. Victor is looking back on his past, not ahead.',
      epiphany:
        "An epiphany is a sudden realisation. Victor's narrative is a long look back, not one moment of insight.",
      exposition:
        "Exposition introduces background at the start. Victor's story is the whole tale, told in retrospect.",
    },
    more: "Victor's story sits inside Walton's letters, and the creature's own story sits inside Victor's: stories within stories. Each narrator looks back, so the reader knows from the start that disaster has already happened.",
    tip: "Use the term for structure: 'Because the novel looks back, Victor's warnings carry the weight of experience.'",
  },
  'Paired terms: prolepsis': {
    why: 'Prolepsis is a flash-forward: the narrative jumps ahead to show what will, or might, happen. The Ghost of Christmas Yet to Come shows Scrooge a future in which he dies unmourned, and the sight drives him to change.',
    not: {
      analepsis:
        "Analepsis looks back, as Stave Two does when it visits Scrooge's childhood. Stave Four looks forward.",
      anaphora:
        'Anaphora is repetition at the start of lines. It is a device of language, not of time.',
      catharsis:
        "Catharsis is the audience's release of emotion. The vision is a jump forward in time.",
    },
    more: "Dickens's flash-forward is conditional: the future can still be changed. Scrooge asks whether these are 'the shadows of the things that Will be, or are they shadows of things that May be, only?'",
    tip: "Link time structure to message: the jump forward in Stave Four turns Scrooge's fate into a warning readers can still act on.",
  },
  'Paired terms: a metaphor (Macbeth)': {
    why: "A metaphor describes one thing as if it were another, without 'like' or 'as'. Macbeth does not say his mind is like a nest of scorpions; he says it is full of them, so the stinging guilt becomes real and inescapable.",
    not: {
      'a simile':
        "A simile would compare with 'like' or 'as': 'my mind is like a nest of scorpions'. Macbeth states it directly.",
      'a paradox':
        'A paradox seems to contradict itself. There is nothing contradictory here, only a vivid comparison.',
      'an oxymoron':
        "An oxymoron joins two opposite words. 'Full of scorpions' contains no opposites.",
    },
    more: "The scorpions are also a warning: Macbeth is already planning Banquo's murder. His imagery grows darker and more violent as his crimes grow.",
    tip: "Explain what the metaphor makes us feel: 'The scorpions suggest guilt that stings constantly, and is deadly.'",
  },
  'Paired terms: a simile (A Christmas Carol)': {
    why: "A simile compares two things using 'like' or 'as'. 'Hard and sharp as flint' compares Scrooge to a stone so hard that, Dickens says, no steel 'had ever struck out generous fire' from it.",
    not: {
      'a metaphor':
        "A metaphor would say Scrooge is flint. The word 'as' makes this a comparison, a simile.",
      'an idiom':
        "An idiom is a fixed expression whose meaning is not literal, such as 'over the moon'. This is Dickens's own comparison.",
      'a symbol':
        'A symbol stands for an idea throughout a text. Flint is used once, as a comparison.',
    },
    more: 'Flint was struck with steel to make sparks for fires. The simile suggests that Scrooge could give warmth, but never has, which hints that he can still change.',
    tip: 'Unpack a simile fully: what is compared, what the two share, and what the comparison suggests about character.',
  },
  'Paired terms: pathetic fallacy (Great Expectations)': {
    why: "Pathetic fallacy is when weather or setting reflects human feelings or events. The storm on this night mirrors Pip's low, lonely mood and prepares for the shock to come: the convict he once helped is about to walk back into his life.",
    not: {
      personification:
        'The weather is given no human actions or feelings here; it simply suits the mood. That match between weather and feeling is pathetic fallacy.',
      'dramatic irony':
        'Dramatic irony needs the reader to know more than a character. Here the reader learns the truth with Pip.',
      juxtaposition:
        'Juxtaposition sets contrasting things side by side. Weather and mood match here rather than contrast.',
    },
    more: "The repetition, 'stormy and wet, stormy and wet', makes the weather feel endless. Dickens often matches weather to turning points, as the fog at the start of Bleak House matches the murk of the law courts.",
    tip: 'Explain the link between weather and event: say what the storm prepares the reader for, not just that it is stormy.',
  },
  'Paired terms: personification (Sonnet 116)': {
    why: "Personification gives human qualities to something that is not human. Shakespeare turns Time into a figure with a sickle, like the Grim Reaper, cutting down youth and beauty, 'rosy lips and cheeks'. Love, he says, is not at Time's mercy.",
    not: {
      'pathetic fallacy':
        'Pathetic fallacy is weather or nature reflecting a mood. Time is not weather; it is given a body and a sickle.',
      onomatopoeia: 'Onomatopoeia imitates sounds. Nothing in these lines imitates a sound.',
      'dramatic irony':
        "Dramatic irony belongs to drama, when the audience knows more than a character. This is a sonnet's argument.",
    },
    more: "Time as a reaper with a sickle is an old image. The sonnet argues that real love outlasts time: it 'bears it out even to the edge of doom'.",
    tip: "When a poet personifies an idea, ask what kind of person it becomes, and what that says about the poem's argument.",
  },
  'Paired terms: enjambment (Remember)': {
    why: "Enjambment is when a sentence runs on over a line break without a pause. 'You understand' has no punctuation, so the sentence spills into the next line, pushing the reader on towards the hard truth: it will be too late.",
    not: {
      'a caesura':
        "A caesura is a pause inside a line. Here the point is that there is no pause at the line's end.",
      'end-stopping':
        "An end-stopped line finishes with punctuation. 'You understand' runs straight on, which is enjambment.",
      'a refrain':
        'A refrain is a line repeated through a poem. This line break is about how a sentence moves.',
    },
    more: 'Remember is a Petrarchan sonnet. Rossetti uses enjambment to make the sentences flow like speech, as if the speaker is talking quietly to the person she loves.',
    tip: 'Explain what the run-on does: pull the reader forward, delay a word, or mimic a rush of thought.',
  },
  'Paired terms: sibilance (Piano)': {
    why: "Sibilance repeats soft 's' sounds. 'Softly', 'dusk', 'is' and 'singing' fill the opening with a hush, drawing the reader into a quiet, tender memory of a woman singing.",
    not: {
      plosives:
        "Plosives are hard bursts, such as 'b' and 'p'. This line is soft, and its music comes from the 's' sounds.",
      assonance:
        "There are repeated vowels, but the hush of the line comes from its soft 's' sounds.",
      enjambment:
        'The line ends with a semicolon, so it does not run on. Its effect comes from sound.',
    },
    more: "Lawrence's poem moves from this gentle present into a flood of memory, as the singing carries the speaker back to his childhood. The soft opening lulls him, and the reader, into the past.",
    tip: 'Quote the sounds and say what they do: here, a hushed, tender mood.',
  },
  'Paired terms: plosives (Macbeth)': {
    why: "Plosives are hard sounds made by a burst of air: b, d, p, t and hard c. 'Bladed', 'corn', 'be', 'lodg’d', 'blown' and 'down' strike like blows, so Macbeth's demand sounds as violent as the destruction he describes.",
    not: {
      sibilance: "There is hardly an 's' sound in the line. Its force comes from hard plosives.",
      assonance: 'No vowel sound stands out here. The violence is in the hard consonants.',
      enjambment:
        'The line ends with a semicolon, so it is end-stopped. The effect is one of sound.',
    },
    more: "Macbeth demands answers from the witches even if the whole world is wrecked: 'Though castles topple on their warders’ heads'. The list of disasters shows how reckless he has become.",
    tip: 'Pick out the plosive words when you quote: it shows the examiner exactly where the effect comes from.',
  },
  'Paired terms: assonance': {
    why: "Assonance is the repetition of vowel sounds in nearby words. The long 'o' in 'slow', 'road' and 'home' slows the line down, so it sounds as tired as the journey it describes.",
    not: {
      consonance:
        "Consonance repeats consonant sounds. Here the consonants differ; it is the vowel 'o' that returns.",
      sibilance: "There is only one 's' sound. The pattern is in the vowels.",
      caesuras:
        'A caesura is a pause within a line. There is none here; the effect is one of sound.',
    },
    more: "Long vowels slow a line; short vowels, as in 'quick bright bits', speed it up. Poets match the sound of a line to its meaning.",
    tip: 'Say what the vowel sound does to pace or mood, not just that it repeats.',
  },
  'Paired terms: dramatic irony (Macbeth)': {
    why: "Dramatic irony is when the audience knows something a character does not. Duncan admires the castle's sweet air, but the audience knows he is walking into the house where he will be murdered that night.",
    not: {
      'situational irony':
        'Situational irony is when events turn out the opposite of what was expected. Here the irony lies in what the audience knows and Duncan does not.',
      'verbal irony':
        'Duncan means exactly what he says, so it is not verbal irony. The irony belongs to the audience.',
      'pathetic fallacy':
        "The pleasant air does not match the mood; it clashes with the danger. The effect comes from the audience's knowledge.",
    },
    more: 'Banquo adds praise of the martlets nesting on the walls, birds that build only where the air is sweet. The gentle images make the coming murder more shocking.',
    tip: "Explain the tension it creates: 'The dramatic irony makes Duncan's trust painful to watch, because we know what waits for him.'",
  },
  'Paired terms: situational irony': {
    why: 'Situational irony is when events turn out the opposite of what was expected. Mathilde spends ten years paying for a lost necklace, only to learn it was worth almost nothing: the twist turns her sacrifice into a cruel joke.',
    not: {
      'dramatic irony':
        'Dramatic irony needs the reader to know more than the character. Here the reader learns the truth at the same moment as Mathilde.',
      foreshadowing:
        'Foreshadowing hints at what is coming. The point of the ending is that nobody saw it coming.',
      'pathetic fallacy':
        'Pathetic fallacy is weather reflecting mood. The irony here lies in how events turn out.',
    },
    more: 'Maupassant saves the twist for the very last line of The Necklace, so it changes how the whole story reads. Readers then ask what the ending says about pride, appearances and wasted lives.',
    tip: "Explain what the irony reveals: 'The final twist shows how Mathilde's wish to seem rich has cost her everything.'",
  },
  'Paired terms: antagonist': {
    why: 'The antagonist is the character who opposes the protagonist. Once Macbeth becomes a tyrant, Macduff leads the opposition, and he kills Macbeth in single combat at the end.',
    not: {
      protagonist: "Macbeth is the protagonist, the play's central character. Macduff opposes him.",
      'tragic hero':
        'Macbeth is the tragic hero, whose flaw brings his fall. Macduff is the avenger who opposes him.',
      'comic relief':
        'Comic relief is a light, funny moment or character, like the Porter. Macduff is deadly serious as he fights Macbeth.',
    },
    more: 'Macduff is also a contrast to Macbeth: a loyal husband and father whose family Macbeth has had killed, set against a king who kills for power.',
    tip: "Use the antagonist to discuss justice: Macduff's victory restores order, which suggests that tyranny brings its own destruction.",
  },
  'Paired terms: protagonist': {
    why: "The protagonist is the central character whose story a text follows. Great Expectations is built around Pip: his hopes, mistakes and growth are the novel's subject.",
    not: {
      antagonist: 'An antagonist opposes the hero. Pip is the hero whose story is told.',
      archetype:
        'An archetype is a recurring type of character. Pip may fit types, but the question asks for his role: the central character.',
      stereotype:
        'A stereotype is an oversimplified view of a group. Pip is a complex, developing character.',
    },
    more: 'A protagonist need not be wholly admirable: Pip behaves badly for much of the novel, and he is judged harshly by the man he becomes.',
    tip: "Discuss how the writer shapes our view of the protagonist: we see both Pip's faults and his growth.",
  },
  'Paired terms: stereotype': {
    why: 'A stereotype is a fixed, oversimplified idea of what a group of people is like. Assuming that all working-class people are lazy is a prejudice, not an observation, and writers who rely on it flatten their characters.',
    not: {
      archetype:
        'An archetype is a recurring story pattern, such as the wise mentor. A stereotype is a prejudice about real groups of people.',
      prototype:
        'A prototype is a first model of something, such as a new invention. It has nothing to do with judging groups.',
      allegory:
        'An allegory is a story with a hidden meaning. A stereotype is a simplified view of a group.',
    },
    more: 'Writers can voice stereotypes in order to challenge them: Birling sneers at the working class, and the play invites the audience to reject his view.',
    tip: 'When a character voices a stereotype, ask whether the writer agrees: often the stereotype tells you more about the speaker.',
  },
  'Paired terms: archetypes': {
    why: 'An archetype is a pattern of character or story that recurs across cultures and centuries. The wise mentor is one: from ancient myth to modern fantasy, an older guide prepares the hero for a journey.',
    not: {
      stereotypes:
        'A stereotype is a prejudice about real groups of people. The mentor is a story pattern, not a prejudice.',
      allegories:
        'An allegory is a whole story with a hidden meaning. The mentor is one recurring figure.',
      anachronisms:
        'An anachronism is something in the wrong time period. The mentor belongs to every period.',
    },
    more: "Other archetypes include the trickster, the innocent and the hero's journey itself. Recognising them helps you see what a writer is borrowing, and what they change.",
    tip: 'Use archetypes to compare texts: two writers can use the same pattern for very different purposes.',
  },
  'Paired terms: motif': {
    why: 'A motif is an image or idea that recurs and gathers meaning. Romeo sees Juliet as a light burning in the dark, a torch, the sun, a star: their love shines brightly but briefly, against a darkness that closes in.',
    not: {
      theme:
        'A theme is a big idea, such as love or fate. The repeated images of light are a motif that develops those themes.',
      genre: 'A genre is a type of text, such as tragedy. Recurring images are a motif.',
      scene:
        'A scene is one section of a play. These images recur across many scenes, which is what makes them a motif.',
    },
    more: "The pattern ends in the tomb, where Romeo says that Juliet's beauty makes the vault 'a feasting presence full of light'.",
    tip: 'Track a motif across the play: how its meaning changes is often the strongest point you can make.',
  },
  'Paired terms: theme': {
    why: 'A theme is a central idea that a text explores, such as love, fate or conflict. Romeo and Juliet keeps asking whether love can survive in a world ruled by hatred, so that idea is one of its themes.',
    not: {
      motif:
        'A motif is a recurring image or object, such as light in darkness. Love against hatred is a big idea, which makes it a theme.',
      genre: "The play's genre is tragedy. Love against hatred is its subject, a theme.",
      scene: 'A scene is one section of the play. A theme runs through all of it.',
    },
    more: 'Themes are usually ideas you could argue about: is love in the play a force for good, or a reckless passion that destroys? Strong answers treat themes as questions, not labels.',
    tip: "Phrase a theme as an idea, not a single word: 'Shakespeare presents love as a force powerful enough to defy family hatred.'",
  },
  'Paired terms: mood (A Christmas Carol)': {
    why: "Mood is the feeling a text creates in the reader. The fog that pours into every gap of Scrooge's counting-house makes the scene feel dark, cold and closed in, so the reader feels the gloom that surrounds him.",
    not: {
      tone: "Tone is the writer's or narrator's attitude. Dickens's narrator is often playful in Stave One; the gloomy feeling the fog creates in the reader is the mood.",
      theme: 'A theme is a central idea. The fog creates a feeling, not an idea.',
      plot: 'The plot is the sequence of events. The fog builds atmosphere rather than events.',
    },
    more: 'Mood and atmosphere are close, and many teachers use them interchangeably. Tone is different: a narrator can describe a frightening scene in a calm, or even amused, voice.',
    tip: "Separate the two in your answers: 'The narrator's tone is playful, yet the mood of the fog-bound office is oppressive.'",
  },
  'Paired terms: tone (Pride and Prejudice)': {
    why: "Tone is the attitude a writer or narrator takes towards the subject. Calling marriage 'the business of her life' makes Mrs Bennet's matchmaking sound like a trade, and the narrator's quiet mockery is her tone.",
    not: {
      mood: "Mood is the feeling created in the reader. The narrator's mocking attitude is her tone.",
      theme:
        "Marriage is one of the novel's themes, but the mocking attitude towards it is the tone.",
      form: 'Form is the shape of a text, such as a novel or a letter. Mockery is a matter of tone.',
    },
    more: "The sentence ends: 'its solace was visiting and news', meaning gossip. Austen's narrator often mocks in this dry, balanced way, letting the words do the judging.",
    tip: 'Name the tone with a precise adjective, such as ironic, wry or affectionate, then quote the words that create it.',
  },
  'Paired terms: denouement': {
    why: "The denouement is the final part of a story, after the climax, where the plot's threads are tied up and the outcome is made clear. Secrets revealed and fates settled are its business.",
    not: {
      exposition:
        'Exposition comes at the start, introducing characters and background. The denouement comes at the end.',
      prologue:
        'A prologue is an opening section before the main action. The final chapter is the other end.',
      epiphany:
        'An epiphany is a sudden moment of insight for one character. The denouement settles the whole plot.',
    },
    more: 'Some texts refuse a neat denouement and leave questions open, which can be more unsettling than any tidy ending.',
    tip: "In structure answers, comment on how satisfying the denouement is, and what that suggests about the writer's message.",
  },
  'Paired terms: bathos': {
    why: 'Bathos is a sudden drop from the serious or grand to the ridiculous. The solemn speech builds dignity, and the trip punctures it, usually to make the audience laugh.',
    not: {
      pathos:
        'Pathos makes us feel pity or sadness. A hero tripping over his sword makes us laugh instead.',
      climax: 'A climax is the high point of tension. Here tension collapses into comedy.',
      hubris:
        'Hubris is excessive pride. The hero may seem proud, but the comic fall itself is bathos.',
    },
    more: 'Bathos can be deliberate, for comedy or satire, or accidental, when a writer aims for grandeur and misses. Pathos and bathos are a pair: one moves us, the other punctures.',
    tip: 'Use bathos when a writer deliberately deflates something grand, and explain who or what is being mocked.',
  },
  'Paired terms: pathos (A Christmas Carol)': {
    why: 'Pathos is the quality that makes a reader feel pity and sorrow. The empty seat and the carefully kept crutch tell us, without a word of grief, that Tiny Tim may die: the restraint makes the moment more moving.',
    not: {
      bathos: 'Bathos is a fall into the ridiculous. This moment is quietly tragic, not comic.',
      hubris: 'Hubris is excessive pride. Nothing proud happens here; the moment is about loss.',
      satire: 'Satire mocks in order to criticise. Dickens wants tears here, not laughter.',
    },
    more: "Scrooge's reaction, begging the Spirit to say that Tiny Tim will be spared, shows that his heart is changing. Dickens uses pathos to move his readers, and Scrooge, towards charity.",
    tip: 'Explain how pathos is created, through small details, silence or innocence, not just that the moment is sad.',
  },
  'Paired terms: logos': {
    why: 'Logos is an appeal to logic and reason. Statistics and careful step-by-step argument persuade by evidence, so the reader is convinced by thinking rather than feeling.',
    not: {
      pathos: 'Pathos appeals to the emotions. Statistics and reasoning appeal to the mind.',
      ethos:
        "Ethos appeals to the speaker's character and trustworthiness. This argument relies on evidence instead.",
      bathos: 'Bathos is an anticlimax, a fall into the ridiculous. It is not a way of persuading.',
    },
    more: 'Aristotle named three appeals: ethos, pathos and logos. The most persuasive writing usually combines them, building trust, moving the reader and offering evidence.',
    tip: 'In your own persuasive writing, back up every emotional appeal with at least one fact or reason.',
  },
  'Paired terms: ethos': {
    why: "Ethos is an appeal to the speaker's character, experience or authority. Mentioning twenty years of nursing makes readers trust the writer before she has argued anything.",
    not: {
      logos:
        'Logos persuades with evidence and reasoning. Her experience is a reason to trust her, which is ethos.',
      pathos: 'Pathos stirs emotion. Her career is offered as a credential, not to move us.',
      bathos: 'Bathos is an anticlimax. It has no part in persuading.',
    },
    more: "Ethos comes from the Greek for 'character'. Writers build it by showing expertise, honesty or shared values, and opponents attack it by questioning a speaker's motives.",
    tip: 'Look for ethos in openings: writers often establish who they are before they argue what they think.',
  },
  'Paired terms: implicit': {
    why: 'Implicit means suggested rather than stated. The writer shows the trembling hands and leaves the reader to understand the fear, which is often more powerful than saying it outright.',
    not: {
      explicit:
        'Explicit means stated clearly and directly. The sentence says that the writer never states the fear.',
      literal:
        'Literal means exact and not figurative. The question is whether the fear is stated or suggested.',
      ironic: 'Nothing here means the opposite of what it says. The fear is shown, not stated.',
    },
    more: "Show, don't tell: implicit meaning trusts the reader, and inference questions reward students who explain what is suggested and how.",
    tip: "Use the pair in analysis: 'Fear is never stated outright, but it is implicit in every gesture.'",
  },
  'Paired terms: explicit': {
    why: 'Explicit means stated openly and clearly. Birling does not hint at his selfishness; he declares it as a principle, so the audience cannot miss what Priestley wants them to reject.',
    not: {
      implicit: 'Implicit means suggested but not said. Birling states his view in plain words.',
      ironic:
        'Birling means exactly what he says. The irony lies elsewhere, in what the audience knows.',
      symbolic: "A symbol stands for something else. Birling's words are a direct statement.",
    },
    more: "Priestley states Birling's beliefs openly so that the Inspector can answer them. The play is built as an argument between Birling's selfishness and the Inspector's belief that we are all responsible for each other.",
    tip: 'Ask why a writer makes a view explicit: here Birling states his creed so plainly that the audience can see how wrong it is.',
  },
  'Paired terms: figuratively (Romeo and Juliet)': {
    why: 'To speak figuratively is to use figures of speech, such as metaphors, rather than plain fact. Romeo does not believe Juliet is a ball of fire; he means she is dazzling, warming and the centre of his world.',
    not: {
      literally:
        'Literally means exactly as stated. Romeo does not literally think she is the sun.',
      ironically:
        'Speaking ironically would mean he meant the opposite. Romeo means every word, as a metaphor.',
      sarcastically: 'Sarcasm mocks. Romeo is sincere and full of wonder.',
    },
    more: "The metaphor puts Juliet at the centre of Romeo's universe, as the sun is at the centre of the heavens. He goes on to tell the sun to 'kill the envious moon'.",
    tip: "Avoid misusing 'literally' in your own writing: it means exactly true, so 'literally the sun' would be wrong.",
  },
  'Paired terms: first-person': {
    why: "First-person narration is told by a character using 'I'. The older Pip narrates his younger life, so we see events through his eyes, with the hindsight of a man who has learnt from his mistakes.",
    not: {
      'third-person':
        "Third-person narration uses 'he' and 'she', from outside the characters. Pip tells his own story as 'I'.",
      'second-person':
        "Second-person narration addresses the reader as 'you'. It is rare, and Dickens does not use it here.",
      omniscient:
        "An omniscient narrator knows every character's thoughts. Pip knows only his own, and what he learnt later.",
    },
    more: "First-person narrators can be limited or unreliable, which leaves gaps the reader must fill. Pip's two voices, the young boy and the older narrator, let Dickens show both feeling and judgement.",
    tip: 'Comment on the gap between narrator and younger self: hindsight lets Pip judge his own mistakes.',
  },
  'Paired terms: omniscient': {
    why: 'An omniscient narrator knows everything, including the private thoughts of every character. Moving freely from mind to mind is the sign of an all-knowing narrator.',
    not: {
      unreliable:
        'An unreliable narrator cannot be trusted. Nothing here suggests this narrator is wrong, only that they know everything.',
      'first-person': 'A first-person narrator is a character, who knows only their own thoughts.',
      objective: 'An objective narrator reports only what can be seen and heard, never thoughts.',
    },
    more: "Omniscient means 'all-knowing', from the Latin omnis, 'all', and sciens, 'knowing'. Victorian novelists such as George Eliot often used it to judge and comment on their characters.",
    tip: "Comment on how an omniscient narrator guides sympathy: by showing us everyone's thoughts, the narrator decides whom we understand.",
  },
  'Paired terms: unreliable': {
    why: 'An unreliable narrator is one whose account the reader cannot fully trust. This narrator claims calm while every detail reveals panic and anger, so the reader learns to read against what he says.',
    not: {
      omniscient:
        'An omniscient narrator knows all and is usually trusted. This narrator does not even understand himself.',
      objective:
        'An objective narrator reports events without feelings. This one is full of feeling, and denies it.',
      impersonal:
        'An impersonal narrator stays outside the story. This one is at its centre, and his own words betray him.',
    },
    more: "Edgar Allan Poe's The Tell-Tale Heart is a famous example: its narrator insists he is sane while describing a terrible crime. Unreliable narrators turn reading into detective work.",
    tip: 'When a narrator seems unreliable, quote the gap between what they claim and what the details show.',
  },
  'Paired terms: allusion (Macbeth)': {
    why: 'An allusion is a brief reference to something outside the text. Neptune, the Roman god of the sea, stands for all the oceans there are: Macbeth fears that not even all of them could clean his guilt away.',
    not: {
      illusion:
        'An illusion is a false appearance or a trick of the eye. Neptune here is a reference, not a trick.',
      allegory:
        'An allegory is a whole story with a hidden meaning. One reference to Neptune is an allusion.',
      analogy:
        'An analogy explains something by comparing it with something else. Naming Neptune refers to a god; it explains nothing by comparison.',
    },
    more: "Macbeth goes on: his hand would rather turn 'The multitudinous seas' red. The image is the opposite of Lady Macbeth's confident 'A little water clears us of this deed'.",
    tip: "Explain what the allusion adds: here, the size of a god's ocean shows the size of Macbeth's guilt.",
  },
  'Paired terms: blank verse (Macbeth)': {
    why: "Blank verse is unrhymed iambic pentameter. Macbeth's lines have no rhyme but keep a regular beat, the form Shakespeare uses for his noble characters' most serious thoughts.",
    not: {
      'free verse':
        'Free verse has no regular rhythm. These lines keep a steady beat, even though they do not rhyme.',
      'sonnet form':
        'A sonnet is a fourteen-line rhyming poem. This is a speech within a play, unrhymed.',
      'ballad metre':
        'Ballad metre has short, rhyming lines of four and three beats, as in folk songs. These lines are unrhymed and longer.',
    },
    more: "The first line has eleven syllables, ending on an extra, unstressed 'me', and the speech breaks into questions as Macbeth stares at the dagger: Shakespeare bends the rhythm of blank verse to show a mind under strain.",
    tip: 'Notice irregular lines in blank verse: a short or broken line can show shock, hesitation or a mind losing control.',
  },
  'Paired terms: soliloquy (Macbeth)': {
    why: 'A soliloquy is a speech in which a character, alone on stage, speaks their thoughts aloud. Lady Macbeth calls on dark spirits to strip away her softness, and we hear what she would never say to anyone.',
    not: {
      monologue:
        'A monologue is a long speech addressed to other characters. Lady Macbeth is alone, so this is a soliloquy.',
      prologue:
        'A prologue introduces a play before the action. This speech comes in the middle of Act 1.',
      dialogue: 'Dialogue is conversation between characters. Nobody else is there to answer her.',
    },
    more: "She asks the spirits to fill her 'top-full / Of direst cruelty' and to 'make thick my blood'. The speech lets the audience see her ambition before Macbeth does.",
    tip: 'Use soliloquies as evidence of true feelings: what a character says alone is usually more honest than what they say to others.',
  },
  'Paired terms: monologue': {
    why: 'A monologue is a long speech by one character to others who listen. Birling lectures the young men at length; they hardly speak, which shows how he dominates the room until the Inspector arrives.',
    not: {
      soliloquy: 'A soliloquy is spoken alone, to the audience. Birling has listeners on stage.',
      prologue:
        "A prologue comes before the action begins. Birling's speech is part of the first scene.",
      dialogue:
        'Dialogue is a conversation. Birling talks while the others listen, which makes it a monologue.',
    },
    more: "Priestley times the Inspector's arrival to cut the lecture short: the doorbell rings just as Birling is telling the young men to look after themselves and their own.",
    tip: 'Use the monologue to discuss power: whoever speaks longest on stage usually holds the power, until someone takes it away.',
  },
  'Paired terms: understatement (Romeo and Juliet)': {
    why: "Understatement presents something as much less serious than it is. Mercutio's wound will kill him, yet he calls it 'a scratch', joking to the end, which makes his death more shocking.",
    not: {
      exaggeration:
        'Exaggeration makes things bigger. Mercutio makes his wound sound smaller, the opposite.',
      alliteration:
        'The repeated words are striking, but the device that plays down the wound is understatement.',
      onomatopoeia:
        "'Scratch' may sound like what it names, but the point is how hugely it understates his injury.",
    },
    more: "Mercutio goes on: 'No, ’tis not so deep as a well, nor so wide as a church door'. Understatement can be brave, comic or chilling, and here it is all three.",
    tip: 'When characters understate their pain, explain what it reveals: courage, denial or a refusal to show weakness.',
  },
}
