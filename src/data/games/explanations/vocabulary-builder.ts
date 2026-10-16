import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Vocabulary Builder: the explanation a student sees after each answer, by
 * question key (src/data/games/banks/vocabulary-builder.ts). Written with AI on
 * 16 October 2026 and checked against each question and its options, as the
 * founder decided (src/lib/games/explanations/types.ts).
 */
export const EXPLANATIONS: GameExplanations = {
  Ambiguity: {
    why: 'Ambiguity is when something can be understood in more than one way. In Act 4 Scene 1 of Macbeth, the apparitions the witches summon make prophecies full of ambiguity: Macbeth takes them as promises of safety, but they hide a second meaning, and believing them leads to his downfall.',
    not: {
      'Expressing a single firmly held viewpoint':
        'That is the opposite: one clear, fixed meaning. Ambiguity means a word or text can be read in two or more ways.',
      'A figure of speech comparing two unlike things':
        'That describes a metaphor or simile. Ambiguity is about meaning being open, not about comparison.',
      'An error in the rules of grammar or syntax':
        'A grammatical error is a mistake. Ambiguity can be deliberate, and writers often use it to make readers think.',
    },
    more: "The adjective is ambiguous. It comes from the Latin ambi-, 'both ways', as in ambidextrous. Writers use ambiguity to create suspense, leave an ending open or let one line carry two meanings at once.",
    tip: "Use it to show you can see more than one reading: 'The ending is ambiguous: we cannot be sure whether...' Then explore both interpretations.",
  },
  Juxtaposition: {
    why: "Juxtaposition means placing two contrasting things side by side so the difference stands out. In Stave One of A Christmas Carol, Scrooge's cold, gloomy counting-house is set against his nephew Fred's cheerful warmth, so each makes the other more striking.",
    not: {
      'A pause or break used for dramatic emphasis':
        'That describes a caesura or a dramatic pause. Juxtaposition is about placing two things next to each other.',
      'The deliberate repetition of consonant sounds':
        'That is alliteration or consonance, which are about sound. Juxtaposition is about contrast between ideas or images.',
      'A concluding paragraph that summarises ideas':
        'That is a conclusion. Juxtaposition can happen anywhere: in one sentence, a scene or a whole text.',
    },
    more: "The word comes from the Latin juxta, 'next to', and 'position'. It is close to antithesis, but juxtaposition can place any two things together, such as images, characters or settings, while antithesis sets opposite ideas in balanced words.",
    tip: "Say what the contrast reveals: 'Dickens juxtaposes Scrooge's coldness with Fred's warmth to highlight how isolated Scrooge has made himself.'",
  },
  Ominous: {
    why: 'Ominous describes something that suggests trouble is coming. Dark clouds massing over a house, a sudden silence or a raven landing on a gate can all feel ominous: nothing bad has happened yet, but the reader senses that it will.',
    not: {
      'Producing an extremely loud and forceful sound':
        'That would be deafening or thunderous. An ominous sound can be quiet; what matters is the threat it suggests.',
      'Filled with overwhelming joy and excitement':
        'That is closer to elated, the opposite mood. Ominous signs create dread, not joy.',
      'Relating to events from a much earlier era':
        'That would be historical or ancient. Ominous looks forward to something bad, not back to the past.',
    },
    more: 'Ominous comes from omen, a sign of what will happen. Writers use ominous details to foreshadow events and build tension, especially in Gothic and horror writing.',
    tip: "Use it to describe atmosphere precisely: 'The ominous silence before the knock warns the reader that something terrible is about to happen.'",
  },
  Didactic: {
    why: 'A didactic text is written to teach a lesson, often a moral one. An Inspector Calls is didactic: Priestley uses the Inspector to teach the audience that we are all responsible for one another.',
    not: {
      'Closely related to the conventions of drama':
        'That would be dramatic or theatrical. A didactic text can be a play, a novel or a poem; what matters is that it teaches.',
      'Extremely detailed and rich in description':
        'That would be descriptive. A didactic text may be detailed, but its aim is to instruct.',
      'Lacking any obvious display of emotion':
        'That would be impassive or detached. Didactic writing can be very emotional, as long as it teaches a lesson.',
    },
    more: "It comes from the Greek didaskein, 'to teach'. Fables and parables are didactic. The word can also be a criticism, describing writing that lectures the reader too obviously.",
    tip: "Use it to discuss purpose: 'Dickens's didactic aim in A Christmas Carol is to persuade wealthy readers to help the poor.'",
  },
  Pathos: {
    why: 'Pathos is the quality in writing that makes a reader feel pity or sadness. In Stave Four of A Christmas Carol, the Cratchit family mourning Tiny Tim creates strong pathos, which moves Scrooge, and the reader, to care.',
    not: {
      'A feeling of anger or simmering frustration':
        'That would be resentment or frustration. Pathos stirs pity and sorrow in the reader, not anger.',
      'A carefully reasoned and logical argument':
        'An appeal to logic is called logos. Pathos appeals to the emotions instead.',
      'A humorous moment used to ease tension':
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
      'A particular type of sentence structure used for emphasis':
        'That is about syntax. Connotation belongs to single words and the associations they carry.',
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
      'A dramatic device used to heighten audience tension':
        'That could describe dramatic irony or a cliffhanger. Denotation is about word meaning, not drama.',
      'A specific paragraph structure used in formal writing':
        'Denotation has nothing to do with paragraphs. It is the literal meaning of a single word.',
    },
    more: "Denotation comes from the Latin denotare, 'to mark out'. Comparing denotation and connotation is one of the most useful habits in language analysis: say what the word means, then what it suggests.",
    tip: 'Pair it with connotation: start with what a word literally denotes, then explain what it connotes and why the writer chose it.',
  },
  Allegory: {
    why: 'An allegory is a story with a second, hidden meaning, usually moral or political. Animal Farm is an allegory: on the surface it is about animals taking over a farm, but it is really about the Russian Revolution and how its ideals were betrayed.',
    not: {
      'A pattern of rhyme used at the ends of lines':
        'That is a rhyme scheme. An allegory is about hidden meaning in a story, not about sound.',
      'A detailed description of a character’s appearance':
        'That is physical description or characterisation. An allegory is a whole story that stands for something else.',
      'A short poem written about everyday life':
        'An allegory can be a poem, but it is defined by its hidden meaning, not its length or subject.',
    },
    more: "Allegory comes from the Greek for 'speaking otherwise'. In an allegory, characters often stand for ideas or real people: in Animal Farm, the pig Napoleon represents Stalin.",
    tip: "Use it to show you understand a text's deeper purpose: 'As an allegory, Orwell's novella warns readers how power can corrupt revolutionary ideals.'",
  },
  Soliloquy: {
    why: "A soliloquy is a speech in which a character, alone on stage, speaks their thoughts aloud, so the audience hears what they really think. In Act 2 Scene 1 of Macbeth, the dagger soliloquy reveals Macbeth's troubled mind just before he kills Duncan.",
    not: {
      'A back-and-forth conversation between two stage characters':
        'That is dialogue. A soliloquy is spoken by one character alone, with no one on stage to answer.',
      'Written instructions describing the action and setting':
        'Those are stage directions, which are read rather than spoken. A soliloquy is spoken aloud by a character.',
      'A group of performers speaking the same lines together':
        'That is choral speaking, like a Greek chorus. A soliloquy is one character speaking alone.',
    },
    more: "The word comes from the Latin solus, 'alone', and loqui, 'to speak'. A soliloquy differs from a monologue, which can be addressed to other characters, and from an aside, a brief remark to the audience.",
    tip: "Explain why a soliloquy matters: 'The soliloquy lets the audience see Macbeth's private doubts, which he hides from everyone else on stage.'",
  },
  Anachronism: {
    why: 'An anachronism is something that belongs to the wrong time. In Julius Caesar, set in ancient Rome, a clock strikes three in Act 2 Scene 1, but striking clocks had not been invented then.',
    not: {
      'A phrase repeated for emphasis throughout a text':
        'That is a refrain or repetition. An anachronism is about something being in the wrong time period.',
      'A newly invented word not yet in common use':
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
      'A particular pattern of rhyme between paired lines':
        'That is a rhyming couplet. Duality is about two contrasting sides, not about rhyme.',
      'A peaceful agreement reached between two characters':
        'That is a reconciliation or truce. Duality describes two opposing sides existing together, not an agreement.',
      'A traditional poetic form following a strict structure':
        'That would be a fixed form, such as a sonnet. Duality is a theme or idea, not a form.',
    },
    more: "Duality comes from the Latin dualis, 'containing two'. Victorian readers were fascinated by the idea of a hidden second self behind a respectable public face, which helped make Jekyll and Hyde a bestseller.",
    tip: "Use it to discuss character and theme: 'Stevenson presents the duality of man, suggesting that everyone hides a darker self beneath respectability.'",
  },
  Hubris: {
    why: 'Hubris is excessive pride or self-confidence that leads to a fall. Victor Frankenstein shows hubris when he sets out to create life itself, believing he can master nature; his creation goes on to destroy his family and friends.',
    not: {
      'A deep and lasting sadness affecting one’s outlook':
        'That is melancholy. Hubris is about pride and overconfidence, not sadness.',
      'A character flaw of cowardice in the face of danger':
        'That is cowardice. Hubris is the opposite problem: too much confidence, not too little courage.',
      'A type of comedy relying on absurd situations':
        'That is farce. Hubris belongs mainly to tragedy, where pride comes before a fall.',
    },
    more: "In ancient Greek tragedy, hubris (Greek hybris) was pride that challenged the gods, and it was punished by nemesis, a downfall. The idea lives on in the saying 'pride comes before a fall'.",
    tip: "Use it about tragic heroes: 'Victor's hubris drives him to overreach, and Shelley shows the terrible cost of trying to play God.'",
  },
  Motif: {
    why: 'A motif is an image, idea or object that keeps coming back in a text and carries symbolic meaning. In Macbeth, blood is a motif: it appears again and again, first as a sign of bravery in battle and later as a sign of guilt.',
    not: {
      'The most important character in a given narrative':
        'That is the protagonist. A motif is a recurring image or idea, not a character.',
      'A single isolated scene within a larger story':
        'A motif is the opposite of isolated: it recurs across the text, building meaning each time.',
      'A particular type of narrator used in fiction':
        'That would be a first-person or third-person narrator, for example. A motif is a repeated element, not a voice.',
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
      'Closely related to traditional poetic form':
        'That would be poetic or formal. Polemical describes a combative tone and has nothing to do with poetic form.',
    },
    more: "It comes from the Greek polemos, 'war', so a polemic is an argument fought like a battle. The noun is polemic, and a writer of polemics is a polemicist.",
    tip: "Use it to describe tone in non-fiction: 'The writer adopts a polemical tone, using emotive language to attack the policy rather than weigh both sides.'",
  },
  Semantic: {
    why: "Semantic means relating to meaning in language. A semantic field is a group of words linked by meaning: 'battle', 'wounded' and 'surrender' all belong to the semantic field of war.",
    not: {
      'Relating to sound in language':
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
      'Extremely formal in register':
        'Register is about formality. A pejorative word can be formal or informal; what makes it pejorative is disapproval.',
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
      'Closely related to poetic rhythm':
        'That would be metrical or rhythmic. Hyperbolic is about exaggeration, not rhythm.',
    },
    more: "It is the adjective from hyperbole (hy-PER-bo-lee), from the Greek for 'throwing beyond'. Hyperbole can create humour, show strong emotion or make an argument seem urgent.",
    tip: 'Do not just spot it: explain why the writer exaggerates, for example to convey frustration, excitement or urgency.',
  },
  Evocative: {
    why: "Evocative means bringing strong images, memories or feelings into the reader's mind. The smell of bonfire smoke can be evocative of autumn, and an evocative description makes readers feel they are really there.",
    not: {
      'Extremely difficult to understand on first reading':
        'That would be obscure or difficult. Evocative writing is vivid and easy to picture.',
      'Short, factual, and lacking in detail':
        'That would be terse or sparse. Evocative writing is rich in sensory detail and feeling.',
      'Relating to spoken dialogue between characters':
        'That would be conversational. Evocative describes the power to call up images and feelings.',
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
      'The meaning of individual words in a sentence':
        'That is semantics. Syntax is about word order and sentence structure.',
      'The sound and rhythm of words in a sentence':
        'Syntax can affect sound and rhythm, but syntax itself is the order and structure of words.',
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
      'Relating to vision and the way things appear':
        'That is visual. The words look similar, but visceral is about gut feelings, not sight.',
      'Intellectual and reasoned rather than emotional':
        'That is cerebral or rational, the opposite. A visceral response comes before reasoning.',
      'Abstract and vague rather than concrete':
        'That is abstract. Visceral writing is usually concrete and physical, which is why it hits hard.',
    },
    more: "It comes from the Latin viscera, the body's internal organs, so a visceral feeling is literally a gut feeling. Writers create visceral effects with graphic, physical detail.",
    tip: "Use it to describe a strong reader response: 'The graphic imagery provokes a visceral reaction, forcing readers to confront the reality of war.'",
  },
  Exposition: {
    why: 'Exposition is the part of a story, usually at the start, that introduces the characters, setting and background the reader needs. A Christmas Carol opens with exposition: in Stave One we learn that Marley is dead and meet Scrooge, cold and miserly.',
    not: {
      'The highest point of tension in a story':
        'That is the climax, which comes much later. Exposition sets the scene at the start.',
      'The final resolution at the end of a story':
        'That is the denouement or resolution. Exposition comes at the beginning.',
      'A type of conflict between two opposing forces':
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
      'An extreme exaggeration used for emphasis':
        'That is hyperbole, which makes things bigger. A euphemism softens them.',
      'A direct, plain statement of an opinion':
        'A euphemism is the opposite of direct: it avoids saying the harsh thing plainly.',
      'A type of irony where meaning is reversed':
        'That is verbal irony or sarcasm. A euphemism softens the meaning but does not reverse it.',
    },
    more: "It comes from the Greek eu, 'well', and pheme, 'speaking'. Euphemisms can be kind, but they can also hide the truth, as when 'collateral damage' is used for civilian deaths in war.",
    tip: "In analysis, ask what a euphemism hides: if workers were 'let go', explain how the softer phrase disguises how harsh losing a job really is.",
  },
  Analepsis: {
    why: "Analepsis is the technical term for a flashback: the story jumps back to an earlier time. In Stave Two of A Christmas Carol, the Ghost of Christmas Past takes Scrooge back to his lonely schooldays and his time as Fezziwig's apprentice.",
    not: {
      'A sudden jump forward to a future event':
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
      'A flashback to an event from earlier times':
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
      'Something that is obviously fantasy':
        'That is the opposite. Verisimilitude makes writing feel real, even when it is invented.',
      'A type of metaphor used in poetry':
        'Verisimilitude is not a figure of speech. It is the overall sense that a text is believable.',
      'A rhyme scheme used in sonnets':
        "That is a sonnet's pattern of rhymes. Verisimilitude is about realism, not sound.",
    },
    more: "It comes from the Latin verisimilis, 'like the truth', from verus, 'true', and similis, 'like'. In Jekyll and Hyde, letters, documents and witness statements make an impossible story feel credible.",
    tip: "Use it when evaluating realism: 'Stevenson builds verisimilitude through first-hand accounts, so the reader believes the impossible transformation.'",
  },
  Hamartia: {
    why: "Hamartia is a tragic hero's fatal flaw or error of judgement, the weakness that leads to their downfall. Macbeth's hamartia is often said to be his ambition: it drives him to murder and, in the end, destroys him.",
    not: {
      'A happy ending in which good triumphs':
        'Hamartia leads to the opposite: a tragic downfall, not a happy ending.',
      'A comic device used to amuse an audience':
        'That is comic relief. Hamartia belongs to tragedy and causes suffering, not laughter.',
      'A type of setting found in pastoral writing':
        'That is a pastoral, or countryside, setting. Hamartia is a quality of a character, not a place.',
    },
    more: "Aristotle used the Greek word, which means 'missing the mark' or 'error'. Some critics prefer 'error of judgement' to 'flaw': Othello's hamartia could be his jealousy or his mistaken trust in Iago.",
    tip: "Link hamartia to tragic structure: 'Macbeth's ambition is his hamartia, and Shakespeare shows how one flaw can bring down a great man.'",
  },
  Polysyllabic: {
    why: "A polysyllabic word has many syllables. 'Responsibility' (re-spon-si-bil-i-ty) is polysyllabic, while 'cat' and 'dog' are monosyllabic.",
    not: {
      'Having only a single syllable':
        'That is monosyllabic, the opposite. Poly means many; mono means one.',
      'Containing no vowel sounds':
        'Almost every syllable has a vowel sound. Polysyllabic is about how many syllables a word has.',
      'Relating to the rules of punctuation':
        'Punctuation has nothing to do with it. Polysyllabic counts the syllables, or beats, in a word.',
    },
    more: "Poly comes from the Greek for 'many', as in polygon. Writers choose polysyllabic words to sound formal, educated or pompous, and monosyllabic words to sound blunt, simple or forceful.",
    tip: "Analyse word choice through syllables: 'His polysyllabic vocabulary makes him sound pompous', or 'The monosyllables create a blunt, urgent rhythm.'",
  },
  Imperious: {
    why: "Imperious describes someone arrogant and domineering, who expects to be obeyed. In Pride and Prejudice, Lady Catherine de Bourgh is imperious: she gives orders, interferes in other people's affairs and expects everyone to do as she says.",
    not: {
      'Humble and quiet by nature':
        'That is the opposite. An imperious person is commanding and proud, not humble.',
      'Extremely fearful and anxious':
        'Imperious people make others nervous; they are not nervous themselves. They act with total confidence.',
      'Warm, welcoming, and friendly': 'An imperious manner is cold and commanding, not warm.',
    },
    more: "It comes from the Latin imperium, 'command' or 'empire', the same root as emperor and imperial. An imperious person behaves as though they were an emperor.",
    tip: "Use it to describe tone or manner precisely: 'Her imperious tone suggests she believes her class gives her the right to command others.'",
  },
  Avarice: {
    why: 'Avarice is extreme greed for money or possessions. At the start of A Christmas Carol, Scrooge is a picture of avarice: he hoards his wealth, pays Bob Cratchit little and refuses to give to charity.',
    not: {
      'Extreme generosity towards others':
        'That is the opposite, as Scrooge shows at the end of the novella when he becomes generous.',
      'Deep and lingering sadness':
        'That is sorrow or melancholy. Avarice is about greed, not sadness.',
      'Great physical strength and power':
        'That would be might or strength. Avarice describes a desire for wealth.',
    },
    more: "It comes from the Latin avarus, 'greedy'. Avarice, or greed, is one of the seven deadly sins. The adjective is avaricious.",
    tip: "Use the adjective in essays: 'Dickens presents the avaricious Scrooge as a warning to readers who value money over people.'",
  },
  Austere: {
    why: 'Austere means severe or strict, and often plain, without comfort or decoration. A bare, cold room with hard chairs is austere, and so is a stern teacher who never smiles.',
    not: {
      'Warm and friendly in disposition': 'That is genial or warm, the opposite of austere.',
      'Overly decorated and ornamented':
        'That is ornate, the opposite. Austere places are plain and bare.',
      'Humorous and playful in tone':
        'That is jocular or playful. Austere describes seriousness and strictness.',
    },
    more: "It comes from the Greek austeros, 'harsh' or 'severe'. The noun austerity can also mean a time when a government cuts spending and people must live with less.",
    tip: "Use it for settings and characters: 'The austere schoolroom, with its bare walls and hard benches, reflects the cold, strict regime.'",
  },
  Benevolent: {
    why: 'Benevolent means kind and well-meaning towards others. In Stave Two of A Christmas Carol, Fezziwig is a benevolent employer who throws a joyful Christmas party for his workers, in contrast to Scrooge.',
    not: {
      'Cruel and harsh in dealings':
        "That is cruel or malevolent, the opposite. Bene means 'well' and male means 'badly'.",
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
      'Acting in a loud and openly obvious manner':
        'That is blatant or overt, the opposite. Insidious harm is hidden and quiet.',
      'Happening quickly with no lasting consequences':
        'Insidious things work slowly and do lasting damage.',
      'Being generous and kind in every action':
        'That is benevolent. Insidious always describes something harmful.',
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
      'A vivid memory of an event from the past':
        'That is a memory or flashback. Foreboding looks forward, not back.',
    },
    more: "It comes from fore, 'before', and bode, an old word meaning 'to announce'. Writers create foreboding with ominous settings, warnings and prophecies, which also foreshadow events.",
    tip: "Use it to describe atmosphere: 'The opening creates a sense of foreboding, preparing the audience for tragedy.'",
  },
  Microcosm: {
    why: "A microcosm is a small world that represents something much larger. In An Inspector Calls, the Birling family can be read as a microcosm of the comfortable middle class, so the Inspector's judgement of them becomes a judgement of their whole class.",
    not: {
      'An extremely large version of something else':
        'That is the reverse. Micro means small: a microcosm is a small version that stands for something larger.',
      'An instrument used to view tiny objects':
        "That is a microscope. The words share micro, 'small', but a microcosm is a small world, not an instrument.",
      'A figure of speech used in descriptive writing':
        'A microcosm is not a figure of speech. It is a small setting or group that represents a larger one.',
    },
    more: "It comes from the Greek mikros kosmos, 'little world'. The island in Lord of the Flies is often read as a microcosm of human society.",
    tip: "Use it to link a setting to wider society: 'The house acts as a microcosm of Edwardian society, with its divisions of class and gender.'",
  },
  Subversive: {
    why: 'Subversive describes something that tries to undermine or overturn an established system, institution or authority. A novel that mocks the people in power, or a poem that questions the glory of war, can be called subversive.',
    not: {
      'Strongly supporting the existing status quo':
        'That is conformist, the opposite. Subversive ideas challenge the status quo.',
      'Extremely conservative in views and politics':
        'Conservative views tend to protect existing systems. Subversive ones try to undermine them.',
      'Lacking any clear opinion on the matter':
        'Subversive writing takes a clear and challenging position; it does not lack an opinion.',
    },
    more: "It comes from the Latin subvertere, 'to overturn'. The verb is subvert, and writers can also subvert expectations, for example by making a villain sympathetic or ending a fairy tale unhappily.",
    tip: "Use 'subvert' in analysis: 'The poet subverts the traditional image of war as heroic, revealing its horror instead.'",
  },
  Didacticism: {
    why: "Didacticism is the practice of using literature to teach, especially moral lessons. A Christmas Carol is a famous example: Dickens shapes Scrooge's story to teach readers about generosity and their duty to the poor.",
    not: {
      'The practice of writing entirely without any message':
        "That is close to the idea of 'art for art's sake', the opposite view. Didacticism always has a lesson to teach.",
      'A type of rhyme scheme used in lyric poems':
        "A rhyme scheme is a pattern of sounds. Didacticism is about a text's teaching purpose.",
      'The deliberate use of regional dialect in writing':
        'That is dialect writing. Didacticism is about moral instruction, whatever language is used.',
    },
    more: "It is the noun from didactic, from the Greek didaskein, 'to teach'. Morality plays and fables are didactic forms, and critics often read An Inspector Calls as a modern morality play.",
    tip: "Use it to discuss a writer's purpose: 'The didacticism of the ending leaves the audience in no doubt about Priestley's message.'",
  },
  Sycophantic: {
    why: 'Sycophantic describes someone who flatters powerful people to gain an advantage. In Pride and Prejudice, Mr Collins is sycophantic towards his patron, Lady Catherine de Bourgh, praising her endlessly to stay in her favour.',
    not: {
      'Rebellious and defiant in attitude':
        'That is the opposite. A sycophant obeys and flatters; a rebel resists.',
      'Honest and direct in communication':
        'Sycophants say what powerful people want to hear, not what they honestly think.',
      'Shy and withdrawn in social settings':
        'That is shy or reserved. Sycophants are often very eager to talk, as long as it wins approval.',
    },
    more: "A sycophant is a flatterer. The word came from Greek, where it meant an informer, and its meaning shifted over time. An informal word with a similar meaning is 'crawler'.",
    tip: "Use it to analyse a character's relationships: 'His sycophantic speech reveals how much he values status over sincerity.'",
  },
  Ephemeral: {
    why: 'Ephemeral means lasting only a very short time. A soap bubble, a sunset or a social media trend is ephemeral: here one moment and gone the next.',
    not: {
      'Lasting forever and never fading':
        'That is eternal or permanent, the opposite of ephemeral.',
      'Extremely heavy and difficult to lift':
        'That is cumbersome or ponderous. Ephemeral is about time, not weight.',
      'Difficult to understand or interpret':
        'That is obscure or enigmatic. Ephemeral describes how briefly something lasts.',
    },
    more: "It comes from the Greek ephemeros, 'lasting only a day'. Poets often explore ephemeral things, such as beauty, youth and life itself, to remind readers that nothing lasts.",
    tip: "Use it in poetry analysis: 'The poet presents beauty as ephemeral, which makes the speaker's love seem all the more precious.'",
  },
  Magnanimous: {
    why: 'Magnanimous means generous or forgiving, especially towards a rival or someone who has wronged you. A captain who praises the other team after a defeat, or a winner who shares the credit, is being magnanimous.',
    not: {
      'Petty and spiteful in personal dealings':
        'That is petty or vindictive, the opposite of magnanimous.',
      'Extremely wealthy and openly showy':
        'That is ostentatious. Magnanimous is about a generous spirit, not money.',
      'Physically strong and powerfully built':
        'That is muscular or powerful. Magnanimous describes character, not the body.',
    },
    more: "It comes from the Latin magnus, 'great', and animus, 'soul' or 'mind': a magnanimous person has a great spirit. Someone 'magnanimous in victory' wins without gloating.",
    tip: "Use it to evaluate a character's growth: 'His magnanimous forgiveness at the end shows how far he has changed.'",
  },
  Sardonic: {
    why: 'Sardonic describes grimly mocking or cynical humour, often with a scornful smile. A sardonic remark makes fun of something in a bitter way, suggesting the speaker expects little from the world.',
    not: {
      'Genuinely cheerful and warm-hearted':
        'That is genial, the opposite. Sardonic humour is cold and mocking.',
      'Deeply romantic and tender':
        'That is tender or affectionate. Sardonic speakers are scornful, not loving.',
      'Fearful and outwardly anxious':
        'That is nervous or timid. A sardonic person seems detached and scornful, not afraid.',
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
      'Calm, content, and at ease':
        'That is contented or serene. Melancholic describes sadness, not contentment.',
    },
    more: "It comes from the Greek for 'black bile'. Medieval doctors believed four bodily humours shaped personality: black bile made people melancholic, yellow bile choleric, blood sanguine and phlegm phlegmatic.",
    tip: "Use it to describe mood and tone: 'The melancholic tone of the final stanza reflects the speaker's grief.'",
  },
  Pragmatic: {
    why: "Pragmatic means dealing with problems in a sensible, realistic way, based on what will actually work. A pragmatic person asks 'What can be done?' rather than 'What would be perfect?'",
    not: {
      'Extremely idealistic and dreamy':
        'That is idealistic, the opposite. Pragmatic people focus on what is practical.',
      'Overly emotional and irrational':
        'Pragmatic decisions are calm and reasoned, not driven by emotion.',
      'Abstract, theoretical, and detached':
        'That is theoretical. Pragmatic thinking is practical and grounded in real situations.',
    },
    more: "It comes from the Greek pragma, 'deed' or 'act'. The noun is pragmatism. Being pragmatic can be a strength, but it can also suggest someone willing to drop their principles to get results.",
    tip: "Use it to contrast characters: 'Where Juliet is passionate, the Nurse is pragmatic, advising her to marry Paris.'",
  },
  Utilitarian: {
    why: 'Utilitarian means designed to be useful and practical rather than attractive. A plain metal filing cabinet or a concrete bus shelter is utilitarian: it does its job, with no decoration.',
    not: {
      'Created purely for decorative effect':
        'That is ornamental, the opposite. Utilitarian things are made to be used.',
      'Extremely expensive and luxurious':
        'That is lavish or luxurious. Utilitarian objects are usually plain and functional.',
      'Closely related to traditional poetry':
        'Utilitarian has nothing to do with poetry. It describes practical, functional design.',
    },
    more: "It comes from utility, 'usefulness'. Utilitarianism is also a philosophy: the right action is the one that brings the greatest happiness to the greatest number. Dickens mocks a narrow, facts-only version of it in Hard Times.",
    tip: "Use it to describe settings: 'The utilitarian furniture suggests a household where comfort and beauty have no place.'",
  },
  Sanguine: {
    why: 'Sanguine means optimistic and positive, especially when things look difficult. Someone who stays sanguine about their exams after a bad mock believes things will turn out well.',
    not: {
      'Extremely pessimistic, expecting the worst':
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
      'Carefree, relaxed, and easy-going':
        'That is easy-going, the opposite. Pedantic people worry about every small detail.',
      'Extremely creative and imaginative':
        'That is inventive. Pedantry is about rules and precision, not imagination.',
      'Physically active and energetic':
        'That is energetic. Pedantic describes a fussy attitude to details and rules.',
    },
    more: 'It comes from pedant, from an Italian word for a schoolmaster. The noun is pedantry. It is usually a criticism: precision is good, but a pedant cares about it more than the situation needs.',
    tip: "Use it to describe a character's voice: 'His pedantic corrections make him seem fussy and self-important.'",
  },
  Antithesis: {
    why: "Antithesis is a contrast or opposition between two things, often set out in balanced phrases. Dickens's opening to A Tale of Two Cities, 'It was the best of times, it was the worst of times', is a famous antithesis.",
    not: {
      'A close similarity between two related things':
        'That is a similarity or parallel. Antithesis is about opposition, not likeness.',
      'A type of rhyme used in lyric poems':
        'Antithesis is about contrasting ideas, not about rhyme.',
      'A dramatic pause used for emphasis':
        'That is a pause or caesura. Antithesis is a contrast of ideas.',
    },
    more: "It comes from the Greek for 'setting against'. It can also mean the direct opposite: 'Fezziwig is the antithesis of Scrooge.' The adjective is antithetical.",
    tip: "Use antithesis in persuasive writing to make a point memorable, by balancing two opposites in matching phrases: 'We can act now, or we can apologise later.'",
  },
  Reticent: {
    why: 'Reticent means not revealing your thoughts or feelings readily. A reticent character answers questions briefly and keeps their emotions hidden, so the reader has to infer what they feel.',
    not: {
      'Extremely talkative and openly expressive':
        'That is talkative or garrulous, the opposite of reticent.',
      'Loud, forceful, and aggressive in speech':
        'That is aggressive or strident. Reticent people say little and keep quiet.',
      'Quick to anger and prone to outbursts':
        'That is hot-tempered. A reticent person holds feelings in rather than letting them out.',
    },
    more: "It comes from the Latin reticere, 'to keep silent'. Careful writers avoid using reticent to mean reluctant: 'reticent about her past' is right, but 'reticent to help' is widely seen as a mistake.",
    tip: "Use it in character analysis: 'Her reticent replies hint at a secret she is unwilling to share.'",
  },
}
