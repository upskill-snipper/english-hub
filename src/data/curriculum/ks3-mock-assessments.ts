// --- KS3 Mock Assessment Papers ---------------------------------------------
// End-of-term mock assessment papers for Years 7, 8, and 9.
// One paper per year group per term (9 total).

export interface MockAssessmentTask {
  id: string;
  title: string;
  yearGroup: 'Year 7' | 'Year 8' | 'Year 9';
  term: 'Term 1' | 'Term 2' | 'Term 3';
  type: 'reading' | 'writing' | 'combined';
  duration: string;
  totalMarks: number;
  instructions: string;
  questions: {
    questionNumber: number;
    question: string;
    marks: number;
    guidance: string;
    modelAnswer: string;
  }[];
  markScheme: { criterion: string; marks: number; descriptor: string }[];
}

export const ks3MockAssessments: MockAssessmentTask[] = [
  // --- YEAR 7, TERM 1 --------------------------------------------------------
  {
    id: 'y7-t1-mock',
    title: 'Year 7 Term 1 Mock Assessment: Fox Girl',
    yearGroup: 'Year 7',
    term: 'Term 1',
    type: 'combined',
    duration: '45 minutes',
    totalMarks: 30,
    instructions:
      'Read the extract from the Fox Girl unit carefully before answering all questions. ' +
      'Spend approximately 20 minutes on Section A (reading) and 25 minutes on Section B (writing). ' +
      'Use evidence from the text to support your answers.',
    questions: [
      {
        questionNumber: 1,
        question:
          'List FOUR things you learn about the fox girl from the extract. [4 marks]',
        marks: 4,
        guidance:
          'Award 1 mark for each relevant, text-supported point up to a maximum of 4. ' +
          'Paraphrase and direct quotation are both acceptable.',
        modelAnswer:
          'Award any four from: she lives on the edge of the village; she is feared or avoided by the other children; ' +
          'she can move silently through the forest; she has amber or unusual eyes; she protects a litter of fox cubs; ' +
          'she is described as belonging to neither the human world nor the animal world.',
      },
      {
        questionNumber: 2,
        question:
          'How does the writer use language to present the fox girl as mysterious? ' +
          'Refer to two language techniques and use quotations to support your answer. [8 marks]',
        marks: 8,
        guidance:
          'Mark using a best-fit approach against four bands (0, 2, 4-5, 6-8). ' +
          'Higher bands require accurate terminology, embedded quotation, and analysis of effect. ' +
          'Expect techniques such as: extended metaphor, sensory imagery, short sentences for tension, ' +
          'animal/nature imagery, verb choices showing stealth.',
        modelAnswer:
          'The writer uses animal imagery to present the fox girl as mysterious. The phrase "her eyes caught the light ' +
          'like a creature of the dark" uses a simile comparing her eyes to an animal, suggesting she is not fully human ' +
          'and has a hidden, unknowable nature. This creates unease in the reader. ' +
          'The writer also employs short, fragmented sentences such as "She was there. Then she was not." ' +
          'The brevity mimics her sudden disappearances and makes her seem supernatural, reinforcing her mystery.',
      },
      {
        questionNumber: 3,
        question:
          'What impression do you get of the village community from this extract? ' +
          'Use evidence to support your answer. [6 marks]',
        marks: 6,
        guidance:
          'Band 1 (1-2): simple, unsupported comment. Band 2 (3-4): some explanation with evidence. ' +
          'Band 3 (5-6): perceptive, well-supported analysis of community attitudes. ' +
          'Look for discussion of fear, superstition, exclusion, conformity.',
        modelAnswer:
          'The village community appears fearful and suspicious, relying on superstition to explain what they do not ' +
          'understand. The collective pronoun "they said" distances the narrator from the villagers and implies shared, ' +
          'unquestioned gossip. The verb "warned" suggests the community uses fear as a mechanism of control, ' +
          'keeping children away from the fox girl rather than seeking to understand her. ' +
          'This creates a contrast between the insular community and the fox girl who inhabits a freer, wilder world.',
      },
      {
        questionNumber: 4,
        question:
          'Write a PEE paragraph explaining what the opening paragraph of the extract reveals about the setting. ' +
          'Your paragraph should include a point, evidence (quotation), and explanation of effect. [12 marks]',
        marks: 12,
        guidance:
          'Mark holistically against four bands. Band 4 (10-12): sophisticated analysis, precise vocabulary, ' +
          'varied sentences, controlled PEE structure. Band 3 (7-9): clear analysis, mostly accurate, ' +
          'mostly embedded quotation. Band 2 (4-6): some analysis, quotation not always embedded. ' +
          'Band 1 (1-3): limited point, quotation copied without analysis.',
        modelAnswer:
          'The opening paragraph establishes a threatening, liminal setting that mirrors the fox girl\'s outsider status. ' +
          'The writer describes "the trees at the edge of the village [that] leaned inward as if listening," ' +
          'using personification to make the natural world appear active and watchful. ' +
          'This creates an atmosphere of surveillance and unease, suggesting that the boundary between the safe village ' +
          'and the dangerous forest is uncertain. The phrase "leaned inward" implies encroachment, ' +
          'reinforcing the idea that the natural world - and by extension the fox girl - poses a threat to the ' +
          'ordered human community. The setting therefore immediately prepares the reader for a story about the ' +
          'conflict between belonging and otherness.',
      },
    ],
    markScheme: [
      {
        criterion: 'Retrieval (Q1)',
        marks: 4,
        descriptor:
          '1 mark per valid, text-supported point. No marks for unsupported assertion.',
      },
      {
        criterion: 'Language Analysis (Q2)',
        marks: 8,
        descriptor:
          'Band 4 (7-8): perceptive, terminology accurate, effect explored in depth. ' +
          'Band 3 (5-6): clear explanation, terminology mostly correct. ' +
          'Band 2 (3-4): some comment on language, technique named. Band 1 (1-2): simple observation.',
      },
      {
        criterion: 'Inference and Impression (Q3)',
        marks: 6,
        descriptor:
          'Band 3 (5-6): perceptive inference, well-chosen evidence, analysis of writer intent. ' +
          'Band 2 (3-4): clear inference with some support. Band 1 (1-2): simple comment.',
      },
      {
        criterion: 'Extended PEE Writing (Q4)',
        marks: 12,
        descriptor:
          'Band 4 (10-12): sophisticated, varied, precise. Band 3 (7-9): clear and accurate. ' +
          'Band 2 (4-6): some analysis attempted. Band 1 (1-3): limited.',
      },
    ],
  },

  // --- YEAR 7, TERM 2 --------------------------------------------------------
  {
    id: 'y7-t2-mock',
    title: 'Year 7 Term 2 Mock Assessment: Voice and Identity',
    yearGroup: 'Year 7',
    term: 'Term 2',
    type: 'writing',
    duration: '45 minutes',
    totalMarks: 25,
    instructions:
      'This paper assesses your descriptive and creative writing. ' +
      'Read each task carefully. Spend 5 minutes planning, 30 minutes writing, and 10 minutes checking. ' +
      'Write in full sentences and paragraphs. Accuracy in spelling and punctuation will be assessed.',
    questions: [
      {
        questionNumber: 1,
        question:
          'Describe a place that feels truly "yours" - somewhere that reflects who you are. ' +
          'Use descriptive language and sensory detail to bring it to life. [15 marks]',
        marks: 15,
        guidance:
          'Mark for: Content and Organisation (8 marks) - variety of detail, structural choices, ' +
          'sense of voice and identity woven into setting. ' +
          'Technical Accuracy (7 marks) - spelling, punctuation, grammar, vocabulary range.',
        modelAnswer:
          'The shed at the bottom of our garden is mine. No one else comes here - the door sticks, ' +
          'the spiders have claimed the corners, and the single window is thick with green. ' +
          'But I know where everything is: the biscuit tin of guitar picks, the stack of dog-eared paperbacks, ' +
          'the old camping stove I use to make tea that always tastes faintly of rust. ' +
          'When I sit on the upturned crate and the afternoon light comes in sideways, turning the dust to gold, ' +
          'I feel completely myself - no version of me shaped for school, or for other people. ' +
          'Just me, and the smell of sawdust and old paper, and the muffled world outside.',
      },
      {
        questionNumber: 2,
        question:
          'Write the opening of a short story in which a character discovers something about their identity ' +
          'that surprises them. Your writing should engage the reader from the very first line. [10 marks]',
        marks: 10,
        guidance:
          'Content and Organisation (6 marks): engaging opening, narrative voice, structural awareness ' +
          '(e.g. in medias res, hook, foreshadowing). Technical Accuracy (4 marks).',
        modelAnswer:
          'The letter was not addressed to me. That was the first thing I noticed - the name on the envelope ' +
          'was right, but the handwriting was wrong. Too careful. Too deliberate. As if whoever had written it ' +
          'had been practising. I turned it over. No return address. Just a postmark from a town three hours north ' +
          'of here, a town I had never heard of, in a county I could not have placed on a map. ' +
          'And yet my name was there, in blue ink, absolutely certain of itself. ' +
          'I sat down on the kitchen floor without meaning to.',
      },
      {
        questionNumber: 3,
        question:
          'Reflect on a time when you felt like you did not quite fit in. ' +
          'Write about that experience using the first person. ' +
          'Try to show your feelings rather than simply tell the reader about them. [NO MARKS - extension only]',
        marks: 0,
        guidance:
          'This question is an unassessed extension for early finishers. ' +
          'Encourage showing over telling, use of specific detail, and honest voice.',
        modelAnswer:
          'Extension task - no mark scheme required. Teacher may provide oral feedback on show-not-tell technique.',
      },
    ],
    markScheme: [
      {
        criterion: 'Descriptive Writing - Content and Organisation (Q1)',
        marks: 8,
        descriptor:
          'Band 4 (7-8): compelling, varied, strong voice. Band 3 (5-6): clear, mostly effective. ' +
          'Band 2 (3-4): some descriptive detail. Band 1 (1-2): limited.',
      },
      {
        criterion: 'Descriptive Writing - Technical Accuracy (Q1)',
        marks: 7,
        descriptor:
          'Band 4 (6-7): few errors, varied vocabulary and punctuation. Band 3 (4-5): mostly accurate. ' +
          'Band 2 (2-3): some accuracy. Band 1 (1): frequent errors.',
      },
      {
        criterion: 'Creative Writing - Content and Organisation (Q2)',
        marks: 6,
        descriptor:
          'Band 3 (5-6): engaging, structural awareness evident. Band 2 (3-4): some engagement. ' +
          'Band 1 (1-2): limited narrative development.',
      },
      {
        criterion: 'Creative Writing - Technical Accuracy (Q2)',
        marks: 4,
        descriptor:
          'Band 2 (3-4): mostly accurate, varied punctuation. Band 1 (1-2): frequent errors.',
      },
    ],
  },

  // --- YEAR 7, TERM 3 --------------------------------------------------------
  {
    id: 'y7-t3-mock',
    title: 'Year 7 Term 3 Mock Assessment: Stories and Poetry',
    yearGroup: 'Year 7',
    term: 'Term 3',
    type: 'reading',
    duration: '45 minutes',
    totalMarks: 30,
    instructions:
      'This paper contains two poems. Read both carefully before answering the questions. ' +
      'Questions 1-2 refer to Poem A. Question 3 asks you to compare both poems. ' +
      'Use evidence (quotation) in all answers.',
    questions: [
      {
        questionNumber: 1,
        question:
          'What feelings does the speaker express in Poem A? ' +
          'Refer to at least two details from the poem. [6 marks]',
        marks: 6,
        guidance:
          'Award marks for identification and explanation of feelings supported by textual evidence. ' +
          'Band 3 (5-6): nuanced feeling identified with precise evidence and explanation. ' +
          'Band 2 (3-4): feeling identified with some support. Band 1 (1-2): feeling named but unsupported.',
        modelAnswer:
          'The speaker expresses a feeling of longing mixed with quiet sadness. ' +
          'The phrase "I walk where we once walked" uses repetition to suggest habitual return to a shared memory, ' +
          'implying that the speaker cannot move on from a past relationship or loss. ' +
          'The speaker also expresses a kind of fragile hope: "the light still finds the same gap in the trees" ' +
          'suggests that despite change, something beautiful and familiar persists, ' +
          'offering comfort even in grief.',
      },
      {
        questionNumber: 2,
        question:
          'Choose one poetic technique used in Poem A and explain how it contributes to the poem\'s meaning. [8 marks]',
        marks: 8,
        guidance:
          'Accept any clearly identified technique (metaphor, simile, enjambment, repetition, imagery, etc.) ' +
          'with a quotation and developed explanation. ' +
          'Band 4 (7-8): technique precisely named, quotation embedded, effect analysed in depth with reference to meaning. ' +
          'Band 3 (5-6): clear explanation. Band 2 (3-4): technique named with some explanation. ' +
          'Band 1 (1-2): technique or quotation present but no analysis.',
        modelAnswer:
          'The poet uses enjambment throughout the poem to reflect the speaker\'s inability to contain their emotions. ' +
          'Lines such as "I cannot hold / the shape of you in memory" run across two lines, ' +
          'mimicking the way memory fragments and refuses to stay fixed. ' +
          'The line break after "hold" creates a pause that enacts the very act of trying and failing to grasp something, ' +
          'making the reader physically experience the speaker\'s sense of loss. ' +
          'This technique deepens the poem\'s central theme of impermanence.',
      },
      {
        questionNumber: 3,
        question:
          'Compare how the two poets present the theme of memory. ' +
          'You should write about: the ideas in each poem; the language techniques used; ' +
          'any similarities and differences. [16 marks]',
        marks: 16,
        guidance:
          'Mark using four bands. Band 4 (13-16): perceptive comparison, precise quotation, analysis of both poems, ' +
          'clear discussion of similarities and differences, terminology accurate. ' +
          'Band 3 (9-12): clear comparison with evidence. Band 2 (5-8): some comparison, mostly description. ' +
          'Band 1 (1-4): simple comments on one or both poems.',
        modelAnswer:
          'Both poems present memory as a painful but necessary part of the human experience, ' +
          'though they differ in their tone and resolution. ' +
          'In Poem A, memory is fragile and fleeting - the phrase "the shape of you" implies something intangible ' +
          'that cannot be held. The poet uses enjambment and soft consonants ("light," "leaf," "linger") ' +
          'to create a melancholy, gentle tone. ' +
          'In contrast, Poem B presents memory as sharp and intrusive. ' +
          'The short, punchy sentences ("It comes back. It always does.") suggest memory as something unwelcome, ' +
          'a recurring interruption rather than a source of comfort. ' +
          'Both poets use sensory imagery to anchor memory in physical experience, ' +
          'but while Poem A finds consolation in the natural world, Poem B offers no such relief, ' +
          'ending with an ambiguous image that leaves the reader unsettled.',
      },
    ],
    markScheme: [
      {
        criterion: 'Feelings and Inference (Q1)',
        marks: 6,
        descriptor:
          'Band 3 (5-6): nuanced, evidenced, explained. Band 2 (3-4): some support. Band 1 (1-2): asserted.',
      },
      {
        criterion: 'Technique Analysis (Q2)',
        marks: 8,
        descriptor:
          'Band 4 (7-8): deep, precise. Band 3 (5-6): clear. Band 2 (3-4): partial. Band 1 (1-2): minimal.',
      },
      {
        criterion: 'Comparison (Q3)',
        marks: 16,
        descriptor:
          'Band 4 (13-16): perceptive, structured, comparative connectives used. ' +
          'Band 3 (9-12): clear comparison. Band 2 (5-8): some comparison. Band 1 (1-4): simple comment.',
      },
    ],
  },

  // --- YEAR 8, TERM 1 --------------------------------------------------------
  {
    id: 'y8-t1-mock',
    title: 'Year 8 Term 1 Mock Assessment: The Hunger Games',
    yearGroup: 'Year 8',
    term: 'Term 1',
    type: 'combined',
    duration: '50 minutes',
    totalMarks: 35,
    instructions:
      'Section A: Read the extract from The Hunger Games and answer questions 1-3. ' +
      'Section B: Write a response to the essay question. ' +
      'Aim to spend 25 minutes on Section A and 25 minutes on Section B. ' +
      'All answers must be supported with evidence from the text.',
    questions: [
      {
        questionNumber: 1,
        question:
          'What do you learn about Katniss from the extract? ' +
          'Write about four things, using evidence from the text. [4 marks]',
        marks: 4,
        guidance:
          '1 mark per valid, text-supported point. No inference required at this level - retrieval is sufficient.',
        modelAnswer:
          'Award any four from: Katniss is skilled at survival and hunting; she feels responsibility for her family; ' +
          'she is observant and careful; she distrusts the Capitol; she hides her true feelings publicly; ' +
          'she is physically capable and self-reliant.',
      },
      {
        questionNumber: 2,
        question:
          'How does Collins use language to build tension in the reaping scene? ' +
          'Explore two or three techniques with quotations. [10 marks]',
        marks: 10,
        guidance:
          'Band 4 (9-10): perceptive, technically precise, well-selected quotations. ' +
          'Band 3 (7-8): clear analysis, mostly accurate terminology. ' +
          'Band 2 (4-6): some comment on language. Band 1 (1-3): simple observation.',
        modelAnswer:
          'Collins builds tension through a range of linguistic techniques. She uses short declarative sentences - ' +
          '"I am not pretty. I am not beautiful. I am as radiant as the sun." - creating a list structure that ' +
          'builds to an unexpected, almost defiant climax. This juxtaposition of self-deprecation and grandiosity ' +
          'reflects Katniss\'s complex emotional state. ' +
          'Collins also uses sensory imagery: "the smell of desperation, of unwashed bodies" grounds the reader ' +
          'in the physical reality of the crowd\'s fear, making the tension visceral and immediate. ' +
          'The verb "stiffened" applied to the crowd\'s collective body language suggests shared dread ' +
          'without a word being spoken, a form of showing rather than telling that amplifies unease.',
      },
      {
        questionNumber: 3,
        question:
          'How does Collins present the Capitol as a symbol of power and oppression in this extract? [9 marks]',
        marks: 9,
        guidance:
          'Band 3 (7-9): perceptive analysis of the Capitol\'s symbolic role, well-supported. ' +
          'Band 2 (4-6): clear explanation with evidence. Band 1 (1-3): simple comment.',
        modelAnswer:
          'Collins uses the Capitol\'s representatives as visual symbols of oppressive power. ' +
          'The Peacekeepers\' "identical white uniforms" suggest conformity imposed from above - individuality ' +
          'is erased in service of the state. ' +
          'Effie Trinket\'s elaborate costume and cheerful manner create a disturbing contrast with the poverty ' +
          'around her, implying that the Capitol consumes suffering as entertainment without acknowledging it as real. ' +
          'The phrase "smiling as if she had not a care in the world" uses free indirect discourse to expose the ' +
          'gap between the Capitol\'s performed indifference and the genuine anguish of the districts.',
      },
      {
        questionNumber: 4,
        question:
          'How does Collins use the character of Katniss to explore themes of survival and sacrifice? ' +
          'Write an extended essay response using evidence from the novel. [12 marks]',
        marks: 12,
        guidance:
          'Band 4 (10-12): sophisticated argument, well-structured essay, precise quotation, authorial intent discussed. ' +
          'Band 3 (7-9): clear argument, mostly structured. Band 2 (4-6): some analytical comment. ' +
          'Band 1 (1-3): narrative or descriptive response.',
        modelAnswer:
          'Collins presents Katniss as a character defined by the necessity of survival, ' +
          'using her experiences to critique systems that force impossible choices on ordinary people. ' +
          'From the outset, Katniss\'s hunting and her role as provider establish survival as both literal and metaphorical: ' +
          'she must preserve her family\'s physical lives while also protecting their dignity under oppression. ' +
          'When she volunteers for Prim, the act is framed not as heroism but as reflexive love: ' +
          '"It\'s the only logical thing to do." Collins strips the gesture of sentimentality, suggesting that sacrifice ' +
          'in a dystopian world is not a choice but a consequence of love surviving in an unloving system. ' +
          'The author uses Katniss to argue that genuine humanity - care for others, moral courage - ' +
          'becomes a form of resistance against a regime designed to destroy it.',
      },
    ],
    markScheme: [
      {
        criterion: 'Retrieval (Q1)',
        marks: 4,
        descriptor: '1 mark per valid point with evidence. Maximum 4.',
      },
      {
        criterion: 'Language Analysis (Q2)',
        marks: 10,
        descriptor:
          'Band 4 (9-10): perceptive, precise. Band 3 (7-8): clear. Band 2 (4-6): partial. Band 1 (1-3): simple.',
      },
      {
        criterion: 'Thematic Analysis (Q3)',
        marks: 9,
        descriptor:
          'Band 3 (7-9): perceptive and supported. Band 2 (4-6): clear with evidence. Band 1 (1-3): simple.',
      },
      {
        criterion: 'Extended Essay (Q4)',
        marks: 12,
        descriptor:
          'Band 4 (10-12): sophisticated, structured, authorially aware. Band 3 (7-9): clear argument. ' +
          'Band 2 (4-6): some analysis. Band 1 (1-3): descriptive.',
      },
    ],
  },

  // --- YEAR 8, TERM 2 --------------------------------------------------------
  {
    id: 'y8-t2-mock',
    title: 'Year 8 Term 2 Mock Assessment: Conflict Poetry and Macbeth',
    yearGroup: 'Year 8',
    term: 'Term 2',
    type: 'reading',
    duration: '50 minutes',
    totalMarks: 35,
    instructions:
      'Section A contains a conflict poem and questions 1-2. ' +
      'Section B contains a Macbeth extract and question 3. ' +
      'Spend approximately 20 minutes on Section A and 30 minutes on Section B. ' +
      'Quotation is required in all analytical responses.',
    questions: [
      {
        questionNumber: 1,
        question:
          'What is the speaker\'s attitude towards conflict in this poem? ' +
          'Use evidence to explain your answer. [6 marks]',
        marks: 6,
        guidance:
          'Band 3 (5-6): nuanced attitude identified, evidence embedded, effect explained. ' +
          'Band 2 (3-4): attitude identified with some support. Band 1 (1-2): simple or unsupported.',
        modelAnswer:
          'The speaker presents a deeply ambivalent attitude towards conflict - acknowledging its horror ' +
          'while also exploring how it can forge identity and community. ' +
          'The phrase "we were made in the crucible of that year" uses the metaphor of metalworking to suggest ' +
          'that suffering, though destructive, produced something durable. ' +
          'However, the closing image of "ash on the wind" undercuts any sense of triumph, ' +
          'reminding the reader that what was forged may equally have been destroyed.',
      },
      {
        questionNumber: 2,
        question:
          'How does the poet use structure and form to convey the impact of conflict? ' +
          'Explore at least two structural features. [9 marks]',
        marks: 9,
        guidance:
          'Award marks for identification and analysis of structural features (stanza form, line length, ' +
          'volta, repetition, fragmentation). Band 3 (7-9): perceptive structural analysis with effect. ' +
          'Band 2 (4-6): some structural awareness. Band 1 (1-3): surface observation.',
        modelAnswer:
          'The poem\'s fragmented structure - short, incomplete lines interspersed with longer, flowing ones - ' +
          'enacts the disruption of conflict on human experience. ' +
          'When the lines are short and clipped ("Fire. Heat. Done."), ' +
          'the reader experiences the shock of violence through form. ' +
          'The volta midway through the poem shifts from external description to internal reflection, ' +
          'mirroring the survivor\'s movement from witnessing to processing. ' +
          'The final stanza returns to the opening image, creating a circular structure that suggests ' +
          'the impossibility of escaping conflict\'s aftermath.',
      },
      {
        questionNumber: 3,
        question:
          'How does Shakespeare present Macbeth\'s ambition in this extract? ' +
          'Consider how language, imagery, and dramatic effect contribute to your answer. [20 marks]',
        marks: 20,
        guidance:
          'Mark holistically. Band 4 (17-20): sophisticated analysis, contextual awareness, precise quotation, ' +
          'discussion of dramatic effect and Shakespeare\'s craft. ' +
          'Band 3 (12-16): clear analysis, well-structured, mostly accurate. ' +
          'Band 2 (7-11): some analysis with evidence. Band 1 (1-6): narrative or descriptive.',
        modelAnswer:
          'Shakespeare presents Macbeth\'s ambition as simultaneously driving and destroying him, ' +
          'using imagery that is both magnificent and deeply unsettling. ' +
          'The soliloquy structure gives the audience privileged access to Macbeth\'s inner conflict, ' +
          'creating dramatic irony as he voices doubts no other character can hear. ' +
          'The phrase "vaulting ambition, which o\'erleaps itself" uses an extended equestrian metaphor ' +
          'to present ambition as a force that defeats its own purpose by overreaching. ' +
          'The verb "o\'erleaps" is active and physical, suggesting ambition as an ungovernable physical energy. ' +
          'Shakespeare also uses darkness imagery throughout - "Stars, hide your fires" - associating ambition ' +
          'with a desire to suppress natural order, connecting Macbeth\'s personal failing to a wider cosmic disruption. ' +
          'In the context of the Jacobean worldview, in which the natural and divine orders were intertwined, ' +
          'this would signal to the audience that Macbeth\'s ambition is not merely a personal flaw ' +
          'but a transgression against the universe itself.',
      },
    ],
    markScheme: [
      {
        criterion: 'Poem - Attitude and Inference (Q1)',
        marks: 6,
        descriptor:
          'Band 3 (5-6): nuanced, evidenced. Band 2 (3-4): clear. Band 1 (1-2): simple.',
      },
      {
        criterion: 'Poem - Structure and Form (Q2)',
        marks: 9,
        descriptor:
          'Band 3 (7-9): perceptive. Band 2 (4-6): some awareness. Band 1 (1-3): surface level.',
      },
      {
        criterion: 'Macbeth - Extended Analysis (Q3)',
        marks: 20,
        descriptor:
          'Band 4 (17-20): sophisticated, contextualised. Band 3 (12-16): clear and structured. ' +
          'Band 2 (7-11): some analysis. Band 1 (1-6): descriptive.',
      },
    ],
  },

  // --- YEAR 8, TERM 3 --------------------------------------------------------
  {
    id: 'y8-t3-mock',
    title: 'Year 8 Term 3 Mock Assessment: Rhetoric and Media',
    yearGroup: 'Year 8',
    term: 'Term 3',
    type: 'combined',
    duration: '50 minutes',
    totalMarks: 30,
    instructions:
      'Section A: Read the media text and answer questions 1-2. ' +
      'Section B: Write your own speech in response to the given task. ' +
      'Spend 20 minutes on Section A and 30 minutes on Section B.',
    questions: [
      {
        questionNumber: 1,
        question:
          'Identify and explain THREE rhetorical techniques used in the speech extract. [9 marks]',
        marks: 9,
        guidance:
          '3 marks per technique: 1 for identification, 1 for quotation, 1 for explanation of effect. ' +
          'Accept any valid rhetorical device: rule of three, rhetorical question, anaphora, ' +
          'direct address, emotive language, hyperbole, anecdote, alliteration.',
        modelAnswer:
          'First, the writer uses a rule of three: "We are tired, we are angry, we are ready to act." ' +
          'This tricolon builds momentum and creates a sense of escalating urgency, leading the audience ' +
          'towards action. ' +
          'Second, rhetorical questions are used: "How long will we stand by and say nothing?" ' +
          'This challenges the audience directly and implies that inaction is no longer acceptable, ' +
          'creating discomfort that motivates engagement. ' +
          'Third, anaphora - the repetition of "We will" at the start of successive sentences - ' +
          'creates a collective voice and a sense of shared determination, ' +
          'binding the speaker and audience in a common purpose.',
      },
      {
        questionNumber: 2,
        question:
          'How does the media text use layout and visual features to persuade its audience? [6 marks]',
        marks: 6,
        guidance:
          'Band 3 (5-6): detailed analysis of layout features (headline, image, font, colour) ' +
          'with explanation of persuasive effect. Band 2 (3-4): some analysis. Band 1 (1-2): description only.',
        modelAnswer:
          'The bold, capitalised headline immediately draws the eye and establishes a commanding tone, ' +
          'positioning the reader to accept the article\'s viewpoint before they begin reading. ' +
          'The image of a crowd, placed directly beneath the headline, creates a visual argument: ' +
          'the scale of the crowd implies popular support, lending the text social authority. ' +
          'The use of a pull-quote in a contrasting colour breaks the flow of reading and forces the reader ' +
          'to engage with the text\'s key claim even if they skim the rest of the article.',
      },
      {
        questionNumber: 3,
        question:
          'Write a speech for your school\'s Year 8 assembly arguing for or against the following motion: ' +
          '"Technology is making us less human." Your speech should use at least three rhetorical techniques. [15 marks]',
        marks: 15,
        guidance:
          'Content and Organisation (9 marks): clear argument, rhetorical techniques deployed effectively, ' +
          'appropriate register for speech to peers, sense of voice. ' +
          'Technical Accuracy (6 marks): spelling, punctuation, grammar, vocabulary.',
        modelAnswer:
          'Distinguished students, teachers, and friends - ' +
          'I want to ask you one simple question: when did you last look up? ' +
          'Not at a screen. Not at a notification. But up - at the sky, at a face, at the world as it actually is. ' +
          'We are told that technology connects us. And yet we sit in rooms full of people, ' +
          'each of us alone in the blue light of our phones. We are told that technology liberates us. ' +
          'And yet we check our messages first thing in the morning and last thing at night, ' +
          'slaves to a device that fits in our pocket. ' +
          'I am not here to tell you to throw your phone in a river. ' +
          'I am here to suggest that we remember what it means to be human: ' +
          'to feel boredom, to get lost, to sit with someone and say nothing at all. ' +
          'Technology is a tool. But a tool must serve the person who holds it - ' +
          'not the other way around. Thank you.',
      },
    ],
    markScheme: [
      {
        criterion: 'Rhetorical Technique Analysis (Q1)',
        marks: 9,
        descriptor:
          '3 marks per technique (identify + quote + explain). Partial credit for 1 or 2 elements per technique.',
      },
      {
        criterion: 'Media/Layout Analysis (Q2)',
        marks: 6,
        descriptor:
          'Band 3 (5-6): detailed and analytical. Band 2 (3-4): some analysis. Band 1 (1-2): descriptive.',
      },
      {
        criterion: 'Speech Writing - Content and Organisation (Q3)',
        marks: 9,
        descriptor:
          'Band 3 (7-9): convincing, well-structured, clear rhetorical voice. ' +
          'Band 2 (4-6): some rhetorical features. Band 1 (1-3): limited.',
      },
      {
        criterion: 'Speech Writing - Technical Accuracy (Q3)',
        marks: 6,
        descriptor:
          'Band 3 (5-6): mostly accurate. Band 2 (3-4): some errors. Band 1 (1-2): frequent errors.',
      },
    ],
  },

  // --- YEAR 9, TERM 1 --------------------------------------------------------
  {
    id: 'y9-t1-mock',
    title: 'Year 9 Term 1 Mock Assessment: A Christmas Carol',
    yearGroup: 'Year 9',
    term: 'Term 1',
    type: 'reading',
    duration: '55 minutes',
    totalMarks: 40,
    instructions:
      'This paper contains one extended question on A Christmas Carol. ' +
      'Read the extract carefully before planning and writing your essay. ' +
      'You must refer to the extract AND your wider knowledge of the novel. ' +
      'Include relevant contextual understanding. Aim to write 4-5 paragraphs.',
    questions: [
      {
        questionNumber: 1,
        question:
          'What do you learn about Scrooge\'s character from this extract? ' +
          'How does Dickens make Scrooge\'s attitudes clear? [5 marks]',
        marks: 5,
        guidance:
          'Band 3 (4-5): clear inference with evidence, some comment on authorial method. ' +
          'Band 2 (2-3): identification with partial support. Band 1 (1): simple assertion.',
        modelAnswer:
          'From the extract, Scrooge appears entirely indifferent to the suffering of others. ' +
          'The verb "dismissed" suggests contempt - he does not merely ignore the charity collectors ' +
          'but actively removes them from his presence. Dickens makes this clear through free indirect discourse, ' +
          'allowing the reader to hear Scrooge\'s rationalisations in his own idiom: ' +
          '"If they would rather die, they had better do it." ' +
          'The conditional structure of this sentence reveals his cold, transactional view of human life.',
      },
      {
        questionNumber: 2,
        question:
          'How does Dickens use the Ghost of Christmas Past to explore the theme of memory and regret? ' +
          'Refer to language, structure, and relevant context. [15 marks]',
        marks: 15,
        guidance:
          'Band 4 (13-15): sophisticated, well-structured, contextual understanding integrated naturally, ' +
          'precise quotation, language and structure analysed. ' +
          'Band 3 (9-12): clear analysis, mostly integrated context. ' +
          'Band 2 (5-8): some analysis with evidence. Band 1 (1-4): narrative or descriptive.',
        modelAnswer:
          'Dickens uses the Ghost of Christmas Past as an embodiment of memory itself - ' +
          'both revealing and painful. The ghost\'s appearance, "like a child: yet not so like a child as like an old man," ' +
          'uses paradox to suggest that memory is simultaneously ancient and immediate, ' +
          'never truly in the past. The ghost\'s "light" is described as something Scrooge wishes to extinguish, ' +
          'suggesting that he has spent years suppressing the memories it illuminates. ' +
          'Dickens, writing in 1843 amid debates about the impact of industrialisation on human feeling, ' +
          'uses this scene to argue that emotional memory - the capacity to feel and be changed by the past - ' +
          'is what distinguishes fully human individuals from those who, like the early Scrooge, ' +
          'have subordinated feeling to financial interest. ' +
          'The structural choice to begin Scrooge\'s transformation with memory rather than current suffering ' +
          'implies that redemption requires honest engagement with the self one has neglected or abandoned.',
      },
      {
        questionNumber: 3,
        question:
          'How does Dickens present Scrooge\'s transformation as a criticism of Victorian social attitudes? ' +
          'Write a character essay with detailed reference to the novel as a whole. [20 marks]',
        marks: 20,
        guidance:
          'Band 4 (17-20): sustained argument, contextual depth, precise evidence across the novel, ' +
          'discussion of Dickens\'s craft and purpose. Band 3 (12-16): clear essay structure, ' +
          'contextual awareness, well-chosen evidence. Band 2 (7-11): some analysis and context. ' +
          'Band 1 (1-6): descriptive or narrative.',
        modelAnswer:
          'Dickens shapes Scrooge\'s transformation not merely as a personal redemption story ' +
          'but as a pointed critique of the Malthusian attitudes prevalent in Victorian England. ' +
          'At the novel\'s opening, Scrooge\'s dismissal of charitable giving - "decrease the surplus population" - ' +
          'directly echoes the language of contemporary political economists who argued that poverty was natural ' +
          'and that intervention only prolonged suffering. ' +
          'By having Scrooge repeat this rhetoric only to be confronted with it by the Ghost of Christmas Present, ' +
          'Dickens exposes how abstract economic language conceals real human suffering. ' +
          'Tiny Tim is the embodiment of this critique: a child whose fate is determined by economic circumstance, ' +
          'not moral failing. When Scrooge asks whether Tim will survive, the ghost\'s use of Scrooge\'s own words ' +
          'against him is a moment of devastating irony. ' +
          'By the novel\'s end, Scrooge\'s transformation - manifested in practical generosity rather than sentimentality - ' +
          'models the behaviour Dickens believed the Victorian middle classes were capable of and morally obligated to adopt. ' +
          'The final image of Scrooge as a second father to Tiny Tim suggests that social bonds of care ' +
          'can and should replace the impersonal mechanisms of the market.',
      },
    ],
    markScheme: [
      {
        criterion: 'Retrieval and Initial Inference (Q1)',
        marks: 5,
        descriptor:
          'Band 3 (4-5): inference with method comment. Band 2 (2-3): supported inference. Band 1 (1): assertion.',
      },
      {
        criterion: 'Character and Theme Analysis with Context (Q2)',
        marks: 15,
        descriptor:
          'Band 4 (13-15): sophisticated, contextualised. Band 3 (9-12): clear. Band 2 (5-8): some analysis. ' +
          'Band 1 (1-4): descriptive.',
      },
      {
        criterion: 'Extended Character Essay (Q3)',
        marks: 20,
        descriptor:
          'Band 4 (17-20): sustained, precise, contextually rich. Band 3 (12-16): clear argument. ' +
          'Band 2 (7-11): some analysis and context. Band 1 (1-6): narrative or descriptive.',
      },
    ],
  },

  // --- YEAR 9, TERM 2 --------------------------------------------------------
  {
    id: 'y9-t2-mock',
    title: 'Year 9 Term 2 Mock Assessment: Writing Craft',
    yearGroup: 'Year 9',
    term: 'Term 2',
    type: 'writing',
    duration: '55 minutes',
    totalMarks: 40,
    instructions:
      'This paper assesses your transactional writing. ' +
      'Read each task carefully and plan before you write. ' +
      'You have two tasks: complete BOTH. ' +
      'Task 1 is worth 24 marks; Task 2 is worth 16 marks. ' +
      'Aim for accuracy, clarity, and appropriate register in both responses.',
    questions: [
      {
        questionNumber: 1,
        question:
          'A local council has proposed closing the town\'s only library to save money. ' +
          'Write an article for the local newspaper arguing against this decision. ' +
          'Your article should inform, argue, and persuade. [24 marks]',
        marks: 24,
        guidance:
          'Content and Organisation (14 marks): clear argument, effective use of facts and rhetoric, ' +
          'appropriate newspaper register (headline, paragraphs, varied sentence types), ' +
          'structural awareness (introduction, development, conclusion). ' +
          'Technical Accuracy (10 marks): spelling, punctuation, grammar, vocabulary range and accuracy.',
        modelAnswer:
          'CLOSING OUR LIBRARY WOULD BE AN ACT OF CULTURAL VANDALISM\n\n' +
          'The council\'s proposal to close Riverside Library is not merely a budget decision. ' +
          'It is a statement about what kind of community we want to be - and the answer, ' +
          'if we allow it, will be a profoundly impoverished one. ' +
          'Libraries are not relics. They are the only public spaces in our town ' +
          'where every citizen - regardless of income, age, or background - ' +
          'is equally welcome. They are warm in winter. They are free. ' +
          'They are staffed by professionals who help children discover reading, ' +
          'support adults navigating job applications, and provide a lifeline for the elderly and isolated. ' +
          'The council argues that digital resources make libraries obsolete. ' +
          'But the families in our community who cannot afford broadband, ' +
          'the children whose homes contain no books, the elderly residents who do not own smartphones - ' +
          'where are they meant to go? The digital divide is real, and it falls hardest on ' +
          'those the council claims to serve. ' +
          'Save our library. Before it is too late.',
      },
      {
        questionNumber: 2,
        question:
          'Write a letter to a younger student giving advice on how to improve their writing. ' +
          'Use your own experience and what you have learned about the craft of writing this year. [16 marks]',
        marks: 16,
        guidance:
          'Content and Organisation (9 marks): appropriate letter format, helpful and specific advice, ' +
          'supportive but knowledgeable register, clear structure. ' +
          'Technical Accuracy (7 marks): spelling, punctuation, grammar, vocabulary.',
        modelAnswer:
          'Dear Year 7 student,\n\n' +
          'I remember being in your position, staring at a blank page and not knowing where to start. ' +
          'I want to share three pieces of advice that genuinely helped me.\n\n' +
          'First: read. Read anything - novels, news articles, the back of cereal boxes. ' +
          'The more you read, the more you absorb the patterns of language unconsciously. ' +
          'You\'ll find yourself using techniques you couldn\'t name, simply because you\'ve seen them work.\n\n' +
          'Second: your first draft is not your final draft. Do not try to write perfectly. ' +
          'Write honestly, then improve. Every professional writer rewrites. It is not a sign of failure; ' +
          'it is the process.\n\n' +
          'Third: be specific. "She felt sad" tells me nothing. ' +
          '"She looked at the photograph for a long time, then put it face-down on the table" shows me everything. ' +
          'The specific detail is where good writing lives.\n\n' +
          'You are already doing well - the fact that you are trying means everything.\n\n' +
          'Best wishes,\nA Year 9 student',
      },
    ],
    markScheme: [
      {
        criterion: 'Article Writing - Content and Organisation (Q1)',
        marks: 14,
        descriptor:
          'Band 4 (12-14): compelling, well-structured, effective use of rhetoric, appropriate register. ' +
          'Band 3 (8-11): clear and organised. Band 2 (4-7): some structure and rhetoric. ' +
          'Band 1 (1-3): limited.',
      },
      {
        criterion: 'Article Writing - Technical Accuracy (Q1)',
        marks: 10,
        descriptor:
          'Band 4 (9-10): accurate, varied, effective vocabulary. Band 3 (6-8): mostly accurate. ' +
          'Band 2 (3-5): some errors. Band 1 (1-2): frequent errors.',
      },
      {
        criterion: 'Letter Writing - Content and Organisation (Q2)',
        marks: 9,
        descriptor:
          'Band 3 (7-9): clear format, specific advice, appropriate register. ' +
          'Band 2 (4-6): some structure. Band 1 (1-3): limited.',
      },
      {
        criterion: 'Letter Writing - Technical Accuracy (Q2)',
        marks: 7,
        descriptor:
          'Band 3 (6-7): accurate with varied punctuation. Band 2 (3-5): some errors. ' +
          'Band 1 (1-2): frequent errors.',
      },
    ],
  },

  // --- YEAR 9, TERM 3 --------------------------------------------------------
  {
    id: 'y9-t3-mock',
    title: 'Year 9 Term 3 Mock Assessment: Of Mice and Men',
    yearGroup: 'Year 9',
    term: 'Term 3',
    type: 'reading',
    duration: '55 minutes',
    totalMarks: 40,
    instructions:
      'This paper contains one extract from Of Mice and Men and three questions. ' +
      'All answers must use evidence from the extract. ' +
      'For the extended essay question (Q3), you must also draw on your wider knowledge of the novel. ' +
      'Contextual information should be integrated into your analysis, not listed separately.',
    questions: [
      {
        questionNumber: 1,
        question:
          'How does Steinbeck present the relationship between George and Lennie in this extract? ' +
          'Use specific language evidence. [8 marks]',
        marks: 8,
        guidance:
          'Band 4 (7-8): perceptive, embedded quotation, analysis of language choices, ' +
          'comment on the dynamics of the relationship. ' +
          'Band 3 (5-6): clear analysis. Band 2 (3-4): some comment. Band 1 (1-2): simple.',
        modelAnswer:
          'Steinbeck presents the relationship as one of protective dependency and deep emotional complexity. ' +
          'George\'s use of the imperative "Don\'t drink so much" positions him as a parental figure, ' +
          'while Lennie\'s compliance - "I wasn\'t very thirsty" - suggests a relationship built on obedience ' +
          'rather than equality. ' +
          'However, the warmth of the relationship is also evident: when George tells their shared dream, ' +
          'Lennie\'s anticipation ("Come on, George. Tell me.") shows that the dream is not merely hope ' +
          'but a ritual of comfort, something they perform together to reinforce their bond. ' +
          'Steinbeck uses the dialogue to suggest that language - specifically the repeated telling of a story - ' +
          'is the mechanism by which their relationship is sustained.',
      },
      {
        questionNumber: 2,
        question:
          'How does Steinbeck use language to create a sense of loneliness and isolation in the extract? [12 marks]',
        marks: 12,
        guidance:
          'Band 4 (10-12): sophisticated analysis of multiple language techniques, ' +
          'effect discussed in relation to theme, well-selected quotations. ' +
          'Band 3 (7-9): clear analysis, mostly accurate. Band 2 (4-6): some analysis. Band 1 (1-3): simple.',
        modelAnswer:
          'Steinbeck constructs a pervasive atmosphere of isolation through both setting description and dialogue. ' +
          'The landscape is described in terms of absence: "the silence came into the room" is a striking '  +
          'personification, treating silence as an active presence that fills the space left by human connection. ' +
          'The men\'s speech is clipped and guarded: Steinbeck uses short exchanges and pauses (rendered through dashes) ' +
          'to suggest that the characters are unable or unwilling to fully express themselves. ' +
          'The verb "hunched" applied to Crooks captures the physical posture of a man who has internalised ' +
          'his own marginalisation. ' +
          'Steinbeck, writing during the Great Depression, presents loneliness not as individual failing ' +
          'but as a structural condition imposed on itinerant workers by a society that offered them ' +
          'no permanence, no community, and no future.',
      },
      {
        questionNumber: 3,
        question:
          'How does Steinbeck use the character of Curley\'s wife to explore the theme of powerlessness? ' +
          'Write a literature essay that integrates contextual understanding throughout. [20 marks]',
        marks: 20,
        guidance:
          'Band 4 (17-20): sustained, precise, contextually integrated, clear argument, well-structured paragraphs, ' +
          'discussion of Steinbeck\'s craft and purpose. ' +
          'Band 3 (12-16): clear argument with contextual awareness. ' +
          'Band 2 (7-11): some analytical comment and context. Band 1 (1-6): descriptive or narrative.',
        modelAnswer:
          'Steinbeck uses Curley\'s wife to embody the multiple and intersecting forms of powerlessness ' +
          'that defined women\'s lives in 1930s America. ' +
          'She is notable as the only character in the novel without a name, ' +
          'a structural choice that itself enacts her powerlessness: she exists only in relation to her husband, ' +
          'her identity subsumed by his. ' +
          'Her attempts to assert herself - entering the bunkhouse, seeking conversation, flirting - ' +
          'are consistently misread by the male characters as dangerous or threatening. ' +
          'The ranch hands label her a "tart," using sexual reputation as a mechanism of control. ' +
          'Steinbeck signals his own more sympathetic view through the language of her death scene, ' +
          'where she is described as having "the meanness and the plannings and the discontent" removed, ' +
          'leaving behind "the sweet and young." ' +
          'This posthumous revelation of her full humanity - her dreams of Hollywood, her loneliness - ' +
          'constitutes an indictment of the society that denied her a life commensurate with her humanity. ' +
          'In the context of the Great Depression and the patriarchal structures of rural California, ' +
          'Curley\'s wife represents all those rendered invisible by the intersection of gender, ' +
          'class, and economic hardship.',
      },
    ],
    markScheme: [
      {
        criterion: 'Relationship Analysis (Q1)',
        marks: 8,
        descriptor:
          'Band 4 (7-8): perceptive, precise. Band 3 (5-6): clear and supported. ' +
          'Band 2 (3-4): some analysis. Band 1 (1-2): simple comment.',
      },
      {
        criterion: 'Language and Theme Analysis (Q2)',
        marks: 12,
        descriptor:
          'Band 4 (10-12): sophisticated and contextualised. Band 3 (7-9): clear. ' +
          'Band 2 (4-6): partial. Band 1 (1-3): simple.',
      },
      {
        criterion: 'Extended Essay with Context (Q3)',
        marks: 20,
        descriptor:
          'Band 4 (17-20): sustained argument, contextually integrated, precise evidence. ' +
          'Band 3 (12-16): clear argument with context. Band 2 (7-11): some analysis. ' +
          'Band 1 (1-6): descriptive.',
      },
    ],
  },
];
