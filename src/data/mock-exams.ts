// ─── Mock Exam Data ──────────────────────────────────────────────────────────
// Structured exam papers for mock exam mode, matching real GCSE paper formats.

export type QuestionType =
  | 'multiple-choice'
  | 'short-answer'
  | 'analysis'
  | 'evaluation'
  | 'creative-writing'
  | 'transactional-writing'
  | 'summary'
  | 'comparison'
  | 'reading-detail'
  | 'reading-analysis'
  | 'reading-analysis-detailed'
  | 'reading-inference'
  | 'reading-evaluation'
  | 'reading-comparison'
  | 'extended-writing'
  | 'extended-response'
  | 'persuasive-writing'
  | 'directed-writing'
  | 'composition'
  | 'personal-narrative'
  | 'retrieval'
  | 'comparative-analysis'

export interface MockExamQuestion {
  id: string
  questionNumber: number
  questionText: string
  marks: number
  suggestedTimeMinutes: number
  questionType: QuestionType
  /** Optional stimulus extract shown above the question */
  extract?: string
  extractSource?: string
  /** Model answer keyed by grade band */
  modelAnswers: Record<string, string>
  /** Mark scheme bullet points */
  markScheme: string[]
}

export interface MockExamSection {
  id: string
  title: string
  description: string
  totalMarks: number
  suggestedTimeMinutes: number
  questions: MockExamQuestion[]
}

export interface MockExamPaper {
  id: string
  board: 'AQA' | 'Edexcel' | 'OCR' | 'WJEC' | 'CAIE' | 'IGCSE'
  paperNumber: 1 | 2
  title: string
  subtitle: string
  code: string
  totalTimeMinutes: number
  totalMarks: number
  sections: MockExamSection[]
}

// ─── Source Extracts ─────────────────────────────────────────────────────────

const AQA_P1_EXTRACT = `The morning fog crept across the marshes like a living thing, its cold fingers probing every hollow and ditch. Pip shivered and pulled his thin coat tighter, but nothing could keep out the chill that seemed to rise from the very earth beneath his feet. The churchyard stones stood like broken teeth in the grey half-light, each one marking a life that had ended in this desolate place.

Beyond the churchyard wall, the river wound its way through the flatlands, a dark ribbon of water that reflected nothing but the overcast sky. Somewhere out on the marshes, a bird cried — a thin, piercing sound that seemed to come from nowhere and everywhere at once. Pip turned towards it, but there was nothing to see except the endless grey expanse stretching to the horizon.

Then he heard it. A low, rasping breath from behind the largest gravestone. A chain, dragging across the wet ground. And a voice — terrible, hoarse, as if it had been screaming for a hundred years — that said: "Keep still, you little devil, or I'll cut your throat."

Pip's heart hammered against his ribs. His legs would not move. The figure that rose from among the graves was barely human — a man soaked through, caked in mud, with a great iron on his leg. He seized Pip by the chin and tilted his face upward. The man's eyes were wild, desperate, hungry. They were the eyes of a creature that had nothing left to lose.`

const AQA_P1_EXTRACT_SOURCE = 'Adapted from Charles Dickens, Great Expectations (1861)'

const AQA_P2_SOURCE_A = `I have walked through the streets of every major city in Europe and I can tell you this: nowhere on this continent do we treat our homeless population with such calculated indifference as we do in Britain. Last winter, while temperatures plummeted to minus eight degrees, I counted fourteen people sleeping in doorways within a single mile of Westminster — fourteen human beings curled under cardboard and sleeping bags while our elected representatives debated the finer points of trade policy less than a hundred yards away.

The statistics are damning. Rough sleeping in England has increased by 169% since 2010. Over 700 people died while homeless last year alone. Behind every number is a name, a story, a sequence of events that could, with only the slightest alteration, have happened to any one of us. The mortgage payment missed because of illness. The relationship that fractured. The mental health crisis that went unsupported. These are not alien experiences. They are profoundly, terrifyingly ordinary.

And yet we walk past. We avert our eyes. We tell ourselves comforting stories about choice and personal responsibility, because the alternative — accepting that our society has systematically failed hundreds of thousands of its citizens — is too uncomfortable to contemplate.`

const AQA_P2_SOURCE_A_REF = 'Laura Chen, "The Invisible Crisis", The Guardian, 2024'

const AQA_P2_SOURCE_B = `The poor are always with us, we are told, and perhaps this is true; but it does not follow that we must be content to leave them in their present wretched condition. I have this week visited the lodging-houses of our great metropolis, and I confess that the sights I witnessed there have shaken my faith in the boasted civilisation of our age.

In one room, measuring no more than twelve feet by ten, I found a family of eight persons — father, mother, and six children, the youngest an infant of three months — living, eating, and sleeping together with neither privacy nor ventilation. The walls ran with damp. The single window, which could not be opened, admitted a grey and unwholesome light. The children were barefoot, their clothes little more than rags, and yet the mother — a woman of perhaps thirty years who looked fifty — maintained an air of desperate respectability, keeping the room as clean as circumstances would permit and speaking to me with a dignity that shamed my pity.

What struck me most forcibly was not the poverty itself — for poverty, in its material aspects, may be catalogued and quantified and addressed by charitable effort — but the profound isolation of these families. They are invisible to respectable society. They occupy the same streets, breathe the same air, yet they might as well inhabit another country entirely.`

const AQA_P2_SOURCE_B_REF = 'Henry Mayhew, London Labour and the London Poor (1851)'

// ─── Edexcel Extracts ────────────────────────────────────────────────────────

const EDEXCEL_P1_EXTRACT = `She was not beautiful in any conventional sense. Her face was too angular, her mouth too wide, her eyes set too deep beneath brows that seemed permanently raised in a question that nobody had yet answered. But when she entered a room, the air changed. Conversations faltered. Men who had been holding forth on matters of great importance suddenly lost the thread of their arguments and stood foolishly, mid-sentence, watching her cross the floor with the grace of someone who had never once doubted where she was going.

Elena had learned early that the world sorted women into categories — the pretty ones, the clever ones, the dangerous ones — and that the worst thing you could be was uncategorisable. At school, teachers had not known what to do with her. She was not disruptive, exactly, but her silence had a quality that unsettled them, as though she were conducting a private assessment of their competence and finding them wanting.

Now, at twenty-seven, she worked in a gallery on the South Bank, surrounded by paintings worth more than most people's houses, and she understood something that her younger self had only intuited: that power was not about what you did or said, but about what you withheld. The pause before answering. The steady gaze that refused to look away first. The small, deliberate smile that gave nothing away.

The phone rang. She let it ring four times before picking up. "Whitfield Gallery," she said. Her voice was calm, unhurried, precise. On the other end, someone was breathing quickly.

"Elena? It's Marcus. We need to talk. Something has happened."

She held the receiver away from her ear for a moment, studying the painting on the wall opposite — a Rothko, all burning reds and deep, ominous blacks. Then she brought it back.

"Go on," she said.`

const EDEXCEL_P1_EXTRACT_SOURCE = 'Original literary fiction composition'

const EDEXCEL_P2_SOURCE_A = `Social media has not merely changed how teenagers communicate — it has fundamentally restructured the architecture of adolescent identity. Where previous generations constructed their sense of self through face-to-face interaction, through the slow accumulation of shared experiences and private conversations, today's young people are building their identities in public, in real time, before an audience of hundreds.

The implications are profound. A 2024 study by the Royal Society for Public Health found that 70% of young people aged 14-17 reported that social media made them feel worse about their appearance, while 62% said it increased their anxiety about social situations. The paradox is stark: the very platforms designed to connect us are making young people feel more isolated, more inadequate, and more anxious than any previous generation.

I am not a technophobe. I recognise that social media offers genuine benefits — community, creativity, connection across distance. But we must be honest about the costs. When a thirteen-year-old cannot eat breakfast without first checking how many likes her post received overnight, something has gone fundamentally wrong. When a fifteen-year-old boy measures his worth by his follower count, we are not witnessing normal adolescent development. We are witnessing a crisis.`

const EDEXCEL_P2_SOURCE_A_REF = 'Dr Sarah Mitchell, "The Digital Generation", BBC Education, 2024'

const EDEXCEL_P2_SOURCE_B = `There is among the young of the present day a restlessness of spirit which I cannot but view with the gravest concern. They are impatient of instruction, dismissive of authority, and possessed of an unshakeable conviction that the world owes them something which it has not yet delivered. They gather in groups on street corners, speaking a language that their elders can scarcely comprehend, and they regard the accumulated wisdom of centuries with a contempt that borders on the comical.

I do not wish to be thought one of those tiresome persons who believes that everything was better in his youth — for I recall well enough the follies of my own generation — but I confess that the rapidity with which young people now form and discard opinions alarms me. They read nothing that requires sustained attention. Their conversation is all fragments and assertions. They mistake confidence for knowledge and volume for argument.

And yet — and here I must temper my criticism with candour — there is in many of them a passion for justice, a fury at inequality, and an impatience with hypocrisy that puts their elders to shame. If only this energy could be channelled, if only this fire could be given direction, what might they not accomplish?`

const EDEXCEL_P2_SOURCE_B_REF = 'From a letter by Matthew Arnold, published in The Times, 1867'

// ─── OCR Extracts ────────────────────────────────────────────────────────────

const OCR_P1_SOURCE = `Dear Sir,

I write to you in a state of considerable agitation regarding the proposed demolition of the Elm Street Community Centre, a building which has served this neighbourhood faithfully for over sixty years. I have attended meetings, celebrations, and — in times of personal difficulty — support groups within its walls, and I can assure you that its value to this community cannot be measured in the cold language of property development and profit margins.

Last Tuesday evening, I sat in the main hall as Mrs Patricia Ogden, aged eighty-three, read a poem she had written about her late husband. The room was full. People who had never spoken to each other before found themselves united by a single act of human vulnerability. That is what the community centre does: it creates the conditions for connection.

You tell us that the building is "no longer fit for purpose." I would ask: whose purpose? The roof leaks, certainly, and the heating is unreliable, and the car park has potholes that could swallow a small dog. But fitness for purpose is not only a matter of bricks and plumbing. It is a matter of what happens within those walls — and what happens within those walls is irreplaceable.

I urge you to reconsider. A new block of luxury apartments will bring profit. It will not bring community.

Yours faithfully,
Margaret Thornton`

const OCR_P1_SOURCE_REF = 'Letter to the local council planning department, 2024'

// ─── WJEC Extract ────────────────────────────────────────────────────────────

const WJEC_P1_EXTRACT = `The kitchen smelled of burnt toast and something else — something sharp and chemical that Nathan could not identify. His mother stood at the counter with her back to him, very still, holding a letter in both hands. The radio was playing, some cheerful pop song about sunshine and summer, and the contrast between its bright melody and the silence of the kitchen was almost unbearable.

"Mum?" he said.

She did not turn around. He watched her shoulders rise and fall — one long, controlled breath — and then she folded the letter carefully, once, twice, three times, until it was small enough to fit in her palm. She slid it into her apron pocket and turned to face him with a smile that was almost, but not quite, convincing.

"Breakfast," she said. "Sit down."

Nathan sat. His mother moved around the kitchen with the efficient grace of someone performing a routine so familiar it required no thought: kettle on, bread in toaster, butter from the fridge. But her hands were shaking. The butter knife rattled against the plate. She set it down carefully, pressing her fingers flat against the counter as if to steady them — or to steady herself.

"What was that letter?" Nathan asked.

"Nothing important." She placed the toast in front of him. "Eat."

He ate. But the word "nothing" sat between them like a third person at the table, taking up space, breathing the same air, waiting to be acknowledged.`

const WJEC_P1_EXTRACT_SOURCE = 'Original literary fiction composition'

// ─── Mock Exam Papers ────────────────────────────────────────────────────────

export const mockExamPapers: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // AQA ENGLISH LANGUAGE PAPER 1
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-lang-p1',
    board: 'AQA',
    paperNumber: 1,
    title: 'Paper 1: Explorations in Creative Reading and Writing',
    subtitle: 'English Language 8700/1',
    code: '8700/1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p1-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${AQA_P1_EXTRACT_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p1-q1',
            questionNumber: 1,
            questionText: 'Read again the first paragraph of the source. Choose four statements below which are TRUE.\n\nA) The fog was moving across the marshes.\nB) Pip was wearing a thick overcoat.\nC) The fog felt cold.\nD) The churchyard was in a city.\nE) The stones stood in grey light.\nF) The fog was compared to a living thing.\nG) Pip felt warm despite the weather.\nH) Each stone marked a life that had ended.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: AQA_P1_EXTRACT,
            extractSource: AQA_P1_EXTRACT_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'A, C, F, H — These are the four true statements based on the first paragraph. A: "The morning fog crept across the marshes." C: "cold fingers" and "the chill." F: "like a living thing." H: "each one marking a life that had ended."',
              'Grade 6-7': 'A, C, F, H — The correct answers are found by careful reference to the first paragraph only. B is false (his coat is "thin"), D is false (the setting is marshes, not a city), E is partially true but "grey half-light" refers to general light not specifically stones, G is false.',
            },
            markScheme: [
              '1 mark for each correct answer',
              'Maximum 4 marks',
              'No marks for incorrect selections',
            ],
          },
          {
            id: 'aqa-p1-q2',
            questionNumber: 2,
            questionText: 'Look in detail at the extract from lines 5 to 12. How does the writer use language here to describe the marshland setting?\n\nYou could include the writer\'s choice of:\n- words and phrases\n- language features and techniques\n- sentence forms.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: AQA_P1_EXTRACT,
            extractSource: AQA_P1_EXTRACT_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'The writer describes the river as "a dark ribbon of water" which is a metaphor. The word "dark" suggests something threatening and mysterious. The river "reflected nothing but the overcast sky" which shows the emptiness of the place. A bird makes a "thin, piercing sound" — the adjective "piercing" suggests it is sharp and unpleasant, adding to the eerie atmosphere. The phrase "endless grey expanse" shows how the marshes stretch on forever, making the setting feel lonely and isolated.',
              'Grade 6-7': 'Dickens presents the marshland as a void through sustained imagery of absence and negation. The river is "a dark ribbon of water that reflected nothing," the verb "reflected" carrying dual meaning — both literal (the dull sky) and metaphorical (the landscape offers no comfort or beauty). The bird cry is described as coming "from nowhere and everywhere at once," a paradox that creates spatial disorientation. The accumulation of grey imagery — "overcast sky," "grey expanse" — creates a monochromatic palette that drains the world of vitality. The declarative "there was nothing to see" positions Pip as utterly alone, while the phrase "endless grey expanse stretching to the horizon" uses the present participle to extend the flatness indefinitely.',
              'Grade 8-9': 'Dickens constructs the marshland as an epistemological void — a space where perception itself becomes unreliable. The metaphor "a dark ribbon of water" simultaneously aestheticises and diminishes the river: a "ribbon" is decorative, slight, yet the qualifying adjective "dark" charges it with menace. That it "reflected nothing but the overcast sky" enacts a kind of tautology of emptiness — the landscape mirrors only itself. The bird cry functions as an auditory ghost: "thin" and "piercing" connote both fragility and violence, while the paradox of emanating "from nowhere and everywhere at once" collapses spatial certainty. Dickens\'s syntax in "Pip turned towards it, but there was nothing to see" performs the act of disappointed search — the adversative "but" enacts the deflation. The final image, "the endless grey expanse stretching to the horizon," uses the present participle to refuse closure, the horizon becoming not a destination but an infinite deferral of meaning.',
            },
            markScheme: [
              'Identifies relevant language features (metaphor, personification, imagery)',
              'Analyses the effect of specific words and phrases',
              'Comments on how language creates mood/atmosphere',
              'Uses subject terminology accurately',
              'Embeds quotations rather than bolt-on',
              'Top band: sophisticated, conceptualised analysis',
            ],
          },
          {
            id: 'aqa-p1-q3',
            questionNumber: 3,
            questionText: 'You now need to think about the whole of the source.\n\nHow has the writer structured the text to build tension and create a sense of threat?\n\nYou could write about:\n- what the writer focuses your attention on at the beginning\n- how and why the writer changes this focus as the extract develops\n- any other structural features that interest you.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: AQA_P1_EXTRACT,
            extractSource: AQA_P1_EXTRACT_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'At the beginning, the writer focuses on the cold, foggy setting which creates a scary atmosphere. The extract then moves to describe the empty marshland in the second paragraph, making us feel that Pip is alone and vulnerable. In the third paragraph, the tension suddenly increases when Pip hears breathing and a chain dragging. The short sentence "Then he heard it" is used to create suspense. The final paragraph reveals the convict, and the description of him as "barely human" is frightening. The structure moves from a calm, eerie setting to a shocking encounter.',
              'Grade 6-7': 'Dickens structures the extract as a controlled escalation from atmospheric unease to physical terror. The opening paragraph establishes setting through pathetic fallacy, with the fog as a sentient threat — but one that remains impersonal, environmental. The second paragraph widens the lens to the surrounding marshes, creating spatial isolation that structurally prepares for the confrontation by removing any possibility of escape or help. The pivot comes in paragraph three: "Then he heard it" functions as a structural volta, its short declarative breaking the flowing descriptive prose. The tricolon "A low, rasping breath... A chain, dragging... And a voice" creates rhythmic escalation, each new sensory detail intensifying the threat. The final paragraph shifts from sound to sight, with the revealing description moving from distance ("the figure") to intimacy ("seized Pip by the chin"), a structural narrowing that traps both character and reader.',
              'Grade 8-9': 'The extract is structured as a progressive collapse of the distance between Pip and danger, operating across multiple spatial and sensory registers. The opening three paragraphs establish what might be termed a "sensory hierarchy of threat": paragraph one is tactile (cold, shivering), paragraph two is visual and auditory (the bird cry), and paragraph three delivers the auditory revelation of the convict. This sensory escalation mirrors Pip\'s developing awareness. Structurally, the second paragraph performs a crucial misdirection — Pip turns toward the bird cry, directing both his and the reader\'s attention outward to the marshes, while the actual threat waits behind him. The structural reversal in paragraph three is devastating precisely because of this: the convict emerges not from the vast, open landscape we have been surveying, but from behind a gravestone in the immediate foreground. The shift from long, complex sentences describing the setting to the staccato fragments of paragraph three — "A low, rasping breath... A chain, dragging" — enacts the contraction of Pip\'s world from panoramic to claustrophobic. The final sentence\'s metaphor, "the eyes of a creature that had nothing left to lose," is structurally positioned as the extract\'s concluding image, leaving the reader with a sense of absolute unpredictability.',
            },
            markScheme: [
              'Comments on the overall structural progression',
              'Analyses how the writer shifts focus between paragraphs',
              'Comments on sentence-level structural choices',
              'Considers the effect of structure on the reader',
              'Uses structural terminology (shift, focus, pace, tension, volta)',
              'Top band: perceptive, detailed structural analysis',
            ],
          },
          {
            id: 'aqa-p1-q4',
            questionNumber: 4,
            questionText: 'Focus this part of your answer on the second half of the source, from the paragraph beginning "Then he heard it."\n\nA student said: "The writer makes the convict seem genuinely terrifying. You feel real fear when reading this section."\n\nTo what extent do you agree?\n\nIn your response, you could:\n- consider your own impressions of the convict\n- evaluate how the writer has created these impressions\n- support your response with references to the text.',
            marks: 20,
            suggestedTimeMinutes: 22,
            questionType: 'evaluation',
            extract: AQA_P1_EXTRACT,
            extractSource: AQA_P1_EXTRACT_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'I agree that the writer makes the convict terrifying. The voice is described as "terrible, hoarse, as if it had been screaming for a hundred years" which makes it sound inhuman and frightening. The threat to "cut your throat" is very direct and violent. The convict is "barely human" which makes him seem more like a monster than a person. However, the writer also shows that the convict is "desperate" and "hungry" which makes me feel some sympathy. His eyes have "nothing left to lose" which suggests he is dangerous because he is suffering. Overall, I mostly agree because the physical description and direct threat create genuine fear.',
              'Grade 6-7': 'I largely agree with the student\'s assessment, though I would argue that Dickens creates something more complex than simple terror — a fear that is interwoven with pathos. The convict\'s introduction through sound before sight is inherently unsettling: the "low, rasping breath" and "chain, dragging across the wet ground" create a sensory experience of approaching danger that taps into primal fear of the unseen. The hyperbolic simile "as if it had been screaming for a hundred years" elevates the voice beyond the human, suggesting a figure from nightmare rather than reality. The physical description intensifies this: "barely human," "soaked through, caked in mud" — the participles reducing the man to something elemental, more earth than person. However, I would complicate the student\'s reading: the adjectives "wild, desperate, hungry" form a tricolon that moves from threat to vulnerability. "Desperate" and "hungry" invite compassion rather than fear. The metaphor "the eyes of a creature that had nothing left to lose" operates dually: "nothing left to lose" is threatening (an unpredictable person is dangerous) but also poignant (this is a man at the absolute limit of human endurance). Dickens therefore creates a terror that is morally uncomfortable — we fear the convict, but the text suggests we should also feel for him.',
              'Grade 8-9': 'The student\'s claim is substantially correct, but I would argue it underestimates the sophistication of Dickens\'s technique: the terror is not simply generated but deliberately complicated by counterpoints of pathos that make the reader\'s emotional response itself a source of discomfort. The convict\'s entrance is orchestrated as a Gothic revelation — the fragmented syntax of "A low, rasping breath... A chain, dragging... And a voice" withholds full disclosure, forcing the reader to construct the threat incrementally. Each fragment adds a sensory layer: auditory, then physical, then verbal. The voice\'s description as "terrible, hoarse, as if it had been screaming for a hundred years" uses hyperbolic temporal extension to move the convict beyond the bounds of realistic characterisation into something archetypal — a figure of suffering so prolonged it has become monstrous. The imperative "Keep still, you little devil, or I\'ll cut your throat" is terrifying precisely because of its directness amid the ornate descriptive prose; the register shift from literary narration to brutal vernacular mimics the intrusion of violence into Pip\'s world. Yet I would argue that the most unsettling aspect is not the threat but the description of the man\'s eyes as those of "a creature that had nothing left to lose." The noun "creature" dehumanises, but "nothing left to lose" rehumanises — it implies a history of progressive loss, a person who was once whole and has been systematically stripped. Dickens thus positions fear and compassion as simultaneous, irreconcilable responses, and it is this irreconcilability that generates the passage\'s true power. The reader is not merely frightened; they are morally implicated in their fear of a suffering man.',
            },
            markScheme: [
              'Evaluates critically with a clear personal response',
              'Shows a sustained and nuanced argument',
              'Selects and analyses appropriate textual evidence',
              'Considers alternative interpretations',
              'Demonstrates sophisticated understanding of writer\'s craft',
              'Top band: evaluative, critical, conceptualised response',
            ],
          },
        ],
      },
      {
        id: 'aqa-p1-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 45 minutes on this section. Write in full sentences. You are reminded of the need to plan your answer. You should leave enough time to check your work at the end.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p1-q5',
            questionNumber: 5,
            questionText: 'You are going to enter a creative writing competition.\n\nYour entry will be judged by a panel of published authors.\n\nEither:\nWrite a description suggested by this picture: [Imagine a photograph of an abandoned fairground at dusk, with rusting rides silhouetted against a darkening sky.]\n\nOr:\nWrite the opening part of a story about a place that holds a secret.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear and engaging piece of creative writing that: uses some descriptive techniques (simile, metaphor, sensory detail); has a clear structure with distinct paragraphs; includes varied vocabulary; attempts to create atmosphere; demonstrates generally accurate spelling and punctuation with some variety in sentence structure.',
              'Grade 6-7': 'A compelling piece that: crafts a controlled atmosphere through sustained sensory detail; uses varied and ambitious vocabulary; demonstrates conscious structural choices (e.g., circular structure, shifts in pace); employs a range of sentence forms for effect; shows consistent accuracy in spelling, punctuation, and grammar with some sophisticated constructions (semicolons, colons, dashes).',
              'Grade 8-9': 'An assured, crafted piece that: creates a vivid, immersive experience through precise, original imagery; demonstrates sophisticated structural control with deliberate shifts in pace, perspective, or focus; uses an extensive vocabulary with precise word choices; employs varied sentence structures with complete control; shows technical virtuosity in punctuation (including semicolons, colons, parenthetical dashes, ellipses used for effect); creates a distinctive narrative voice.',
            },
            markScheme: [
              'AO5 Content & Organisation (24 marks): Communication, tone, style, register',
              'AO5: Organisation of ideas with structural/grammatical features',
              'AO6 Technical Accuracy (16 marks): Sentence demarcation',
              'AO6: Range of punctuation used accurately',
              'AO6: Spelling including ambitious vocabulary',
              'AO6: Variety of sentence forms for effect',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // AQA ENGLISH LANGUAGE PAPER 2
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-lang-p2',
    board: 'AQA',
    paperNumber: 2,
    title: "Paper 2: Writers' Viewpoints and Perspectives",
    subtitle: 'English Language 8700/2',
    code: '8700/2',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p2-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${AQA_P2_SOURCE_A_REF}\nSource B: ${AQA_P2_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p2-q1',
            questionNumber: 1,
            questionText: 'Read again Source A, the first paragraph.\n\nChoose four statements below which are TRUE.\n\nA) The writer has visited cities outside Britain.\nB) The writer counted fourteen homeless people in one area.\nC) The temperature was minus ten degrees.\nD) People were sleeping in doorways.\nE) The homeless people were near Westminster.\nF) Politicians were discussing housing policy.\nG) The writer walked a single mile.\nH) The sleeping people had tents.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${AQA_P2_SOURCE_A}\n\nSource B:\n${AQA_P2_SOURCE_B}`,
            extractSource: `Source A: ${AQA_P2_SOURCE_A_REF} | Source B: ${AQA_P2_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'A, B, D, E — A: she has "walked through the streets of every major city in Europe." B: "I counted fourteen people." D: "sleeping in doorways." E: "within a single mile of Westminster."',
            },
            markScheme: [
              '1 mark for each correct answer',
              'Maximum 4 marks',
            ],
          },
          {
            id: 'aqa-p2-q2',
            questionNumber: 2,
            questionText: 'You need to refer to Source A and Source B for this question.\n\nUse details from both sources. Write a summary of the differences and similarities in the living conditions described in each source.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'summary',
            extract: `Source A:\n${AQA_P2_SOURCE_A}\n\nSource B:\n${AQA_P2_SOURCE_B}`,
            extractSource: `Source A: ${AQA_P2_SOURCE_A_REF} | Source B: ${AQA_P2_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both sources describe people living in terrible conditions. Source A describes homeless people sleeping in doorways with "cardboard and sleeping bags" while Source B describes a family of eight crammed into a single room. Both writers are shocked by what they see. However, Source A focuses on people who have no home at all, while Source B describes people who have shelter but in awful conditions. Both sources suggest society ignores these people — Source A says "we avert our eyes" and Source B says they are "invisible to respectable society."',
              'Grade 6-7': 'Both writers document the appalling material conditions of poverty, though their contexts differ significantly. Chen describes rough sleepers exposed to extreme cold ("minus eight degrees") with only improvised shelter, while Mayhew depicts overcrowded indoor conditions — a family of eight in a room "measuring no more than twelve feet by ten" with inadequate ventilation and damp walls. Both sources emphasise the vulnerability of children: Chen implies their presence through statistics, while Mayhew specifies "six children, the youngest an infant of three months." A key similarity is both writers\' emphasis on invisibility — Chen\'s homeless are walked past daily, while Mayhew\'s families "might as well inhabit another country entirely." However, they differ in the human response they document: Mayhew notes the mother\'s "desperate respectability," a dignity maintained despite conditions, whereas Chen\'s subjects are reduced to statistics, their individuality subsumed by the scale of the crisis.',
            },
            markScheme: [
              'Must reference both sources',
              'Identifies clear differences and/or similarities',
              'Uses evidence from both texts',
              'Synthesises rather than alternates between texts',
              'Infers beyond surface-level details',
            ],
          },
          {
            id: 'aqa-p2-q3',
            questionNumber: 3,
            questionText: 'You now need to refer only to Source A.\n\nHow does the writer use language to persuade the reader that homelessness is a crisis that demands action?',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: `Source A:\n${AQA_P2_SOURCE_A}`,
            extractSource: AQA_P2_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': 'The writer uses statistics like "169%" to show how big the problem is and shock the reader. The phrase "over 700 people died" is emotive because it makes us think about real deaths. The writer uses direct address — "any one of us" — to make the reader feel personally connected. The listing of "the mortgage payment missed... the relationship that fractured... the mental health crisis" makes homelessness seem like it could happen to anyone. The word "comforting" in "comforting stories" is sarcastic because the writer thinks our excuses are not comforting at all.',
              'Grade 6-7': 'Chen deploys a carefully escalating rhetorical strategy, moving from statistical evidence to emotional appeal to moral accusation. The opening establishes authority through personal testimony — "I have walked through every major city" — before delivering the devastating juxtaposition of "fourteen human beings curled under cardboard" against "elected representatives" debating "the finer points of trade policy." The spatial proximity ("less than a hundred yards away") makes the moral distance obscene. The statistics function not merely as evidence but as indictment: "169%" and "700 people died" are positioned as unanswerable facts. However, the most sophisticated persuasive technique is the tricolon of ordinary misfortune — "The mortgage payment missed... The relationship that fractured... The mental health crisis" — which uses sentence fragments and the definite article ("The") to make each scenario feel specific, inevitable, and universal simultaneously. The final paragraph shifts to second person plural: "we walk past. We avert our eyes. We tell ourselves comforting stories." The anaphoric "we" is simultaneously accusatory and inclusive; the reader cannot escape complicity.',
              'Grade 8-9': 'Chen orchestrates a rhetorical progression from logos to pathos to ethos that systematically dismantles the reader\'s defences against engagement. The opening paragraph performs a spatial argument: the journey from "every major city in Europe" narrows to "a single mile of Westminster," a structural compression that mirrors the closing distance between affluence and destitution. The juxtaposition of "fourteen human beings curled under cardboard" with representatives debating "the finer points of trade policy" deploys the bathetic gap between human suffering and bureaucratic abstraction — "finer points" is particularly devastating, its connotation of refinement grotesquely inappropriate alongside "minus eight degrees." The second paragraph\'s statistical barrage — "169%," "700 people died" — is strategically placed after the personal testimony, ensuring the numbers attach to the already-visualised scene rather than remaining abstract. But the paragraph\'s most powerful technique is the syntactic shift to sentence fragments: "The mortgage payment missed because of illness. The relationship that fractured." These are not sentences but snapshots of catastrophe, their incompleteness mirroring lives interrupted. The adjective "ordinary" in "profoundly, terrifyingly ordinary" is the paragraph\'s key word — the split adverbial intensifiers transform the commonplace into something that should alarm us. The final paragraph enacts the moral confrontation the text has been building towards: the shift from third person to "we" collapses the observer/observed distinction, while "comforting stories" uses the adjective with bitter irony, exposing self-deception as a deliberate strategy of moral evasion.',
            },
            markScheme: [
              'Analyses persuasive language techniques in detail',
              'Comments on the effect of specific words and phrases',
              'Considers how language positions the reader',
              'Uses subject terminology accurately and precisely',
              'Top band: perceptive, detailed, conceptualised analysis',
            ],
          },
          {
            id: 'aqa-p2-q4',
            questionNumber: 4,
            questionText: 'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different attitudes to poverty and social responsibility.\n\nIn your answer, you could:\n- compare their different attitudes\n- compare the methods they use to convey their attitudes\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${AQA_P2_SOURCE_A}\n\nSource B:\n${AQA_P2_SOURCE_B}`,
            extractSource: `Source A: ${AQA_P2_SOURCE_A_REF} | Source B: ${AQA_P2_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both writers are angry about poverty but express it differently. Chen uses modern statistics and direct accusations — "we avert our eyes" — while Mayhew uses detailed descriptions of what he personally witnessed. Both writers say that poor people are invisible to society. Chen directly blames the government and society, saying we tell ourselves "comforting stories." Mayhew is more measured but still critical, noting the "boasted civilisation of our age." Both writers use specific examples (Chen: people sleeping near Westminster; Mayhew: the family of eight in one room) to make their arguments powerful.',
              'Grade 6-7': 'Both Chen and Mayhew share a fundamental conviction that poverty is a moral failure of society rather than a personal failing, but their methods of persuasion reflect their different historical contexts. Chen employs the aggressive, data-driven rhetoric of modern journalism: statistics ("169%"), direct accusation ("we avert our eyes"), and the dismantling of complacent narratives about "choice and personal responsibility." Her tone is confrontational; she positions the reader as complicit. Mayhew, writing in 1851, adopts the conventions of Victorian social investigation: the first-person witness account, the accumulation of observed detail, the appeal to shared Christian values. His description of the mother who "maintained an air of desperate respectability" uses the oxymoronic "desperate respectability" to challenge the Victorian assumption that poverty and respectability are incompatible. Where Chen attacks, Mayhew shames — more gently but perhaps more effectively, because his restraint makes his revelations more devastating. Both writers share the technique of spatial argument: Chen measures the distance between rough sleepers and Westminster; Mayhew notes that the poor "occupy the same streets, breathe the same air" as the respectable. This shared strategy reflects a shared understanding: the scandal of poverty lies not in its existence but in its proximity to wealth.',
            },
            markScheme: [
              'Compares attitudes from both sources throughout',
              'Analyses methods used by both writers',
              'Uses evidence from both texts',
              'Shows clear understanding of different perspectives',
              'Top band: perceptive, detailed comparison with sustained critical voice',
            ],
          },
        ],
      },
      {
        id: 'aqa-p2-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 45 minutes on this section. Write in full sentences. You are reminded of the need to plan your answer.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p2-q5',
            questionNumber: 5,
            questionText: '"Young people today have a responsibility to make the world a better place — and they are rising to the challenge."\n\nWrite an article for a broadsheet newspaper in which you argue your point of view on this statement.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear argumentative piece that: addresses the statement directly; uses some persuasive devices (rhetorical questions, direct address); has a clear structure with introduction, body paragraphs, and conclusion; demonstrates generally accurate spelling and punctuation.',
              'Grade 6-7': 'A well-crafted argument that: engages with the statement critically (not just agree/disagree); uses a range of rhetorical techniques fluently; deploys evidence and examples effectively; matches the register of a broadsheet article; demonstrates consistent technical accuracy with ambitious vocabulary.',
              'Grade 8-9': 'A compelling, assured argument that: offers a nuanced, sophisticated perspective; crafts a distinctive voice appropriate to the form; deploys rhetorical strategies with precision and control; uses counter-argument to strengthen the position; demonstrates extensive vocabulary and varied syntax; shows technical virtuosity throughout.',
            },
            markScheme: [
              'AO5 (24 marks): Clear, effective communication matched to form, purpose, audience',
              'AO5: Structured argument with coherent paragraphing',
              'AO6 (16 marks): Accurate sentence demarcation',
              'AO6: Range of punctuation used effectively',
              'AO6: Accurate spelling of ambitious vocabulary',
              'AO6: Varied sentence forms for purpose and effect',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EDEXCEL ENGLISH LANGUAGE PAPER 1
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-lang-p1',
    board: 'Edexcel',
    paperNumber: 1,
    title: 'Paper 1: Fiction and Imaginative Writing',
    subtitle: 'English Language 1EN0/01',
    code: '1EN0/01',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p1-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${EDEXCEL_P1_EXTRACT_SOURCE}`,
        totalMarks: 24,
        suggestedTimeMinutes: 35,
        questions: [
          {
            id: 'edexcel-p1-q1',
            questionNumber: 1,
            questionText: 'Read the first paragraph of the extract.\n\nList four things about the woman from this part of the source.',
            marks: 4,
            suggestedTimeMinutes: 3,
            questionType: 'short-answer',
            extract: EDEXCEL_P1_EXTRACT,
            extractSource: EDEXCEL_P1_EXTRACT_SOURCE,
            modelAnswers: {
              'Grade 4-5': '1. She was not beautiful in a conventional sense. 2. Her face was too angular. 3. When she entered a room, conversations faltered. 4. She moved with grace.',
            },
            markScheme: [
              '1 mark per valid point, maximum 4',
              'Must be from the specified paragraph only',
            ],
          },
          {
            id: 'edexcel-p1-q2',
            questionNumber: 2,
            questionText: 'Read lines 1-8 of the extract again.\n\nList two things you learn about men\'s reactions to the woman.',
            marks: 2,
            suggestedTimeMinutes: 2,
            questionType: 'short-answer',
            extract: EDEXCEL_P1_EXTRACT,
            extractSource: EDEXCEL_P1_EXTRACT_SOURCE,
            modelAnswers: {
              'Grade 4-5': '1. They lost the thread of their arguments. 2. They stood foolishly, mid-sentence, watching her.',
            },
            markScheme: [
              '1 mark per valid point, maximum 2',
              'Must relate to men\'s reactions specifically',
            ],
          },
          {
            id: 'edexcel-p1-q3',
            questionNumber: 3,
            questionText: 'Read lines 9-20 of the extract. Analyse how the writer uses language to present Elena as a powerful and controlled character.\n\nSupport your views with detailed reference to the text.',
            marks: 6,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: EDEXCEL_P1_EXTRACT,
            extractSource: EDEXCEL_P1_EXTRACT_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'The writer shows Elena is powerful by saying she "understood that power was not about what you did or said, but about what you withheld." This shows she is clever and knows how to control situations. The listing of "the pause before answering. The steady gaze. The small, deliberate smile" shows all the specific ways she uses to maintain control. The adjective "deliberate" suggests everything she does is planned and careful.',
              'Grade 6-7': 'The writer constructs Elena\'s power through a rhetoric of deliberate absence. The key insight — "power was not about what you did or said, but about what you withheld" — redefines power as negative space, and the subsequent tricolon ("The pause... The steady gaze... The small, deliberate smile") catalogues three forms of controlled restraint. Each noun phrase begins with the definite article "The," lending an almost instructional quality, as though these are techniques to be studied. The verb "withheld" is significant: it implies that Elena possesses more than she reveals, that her restraint is active choice rather than limitation. The phone scene dramatises this: "She let it ring four times" — the specificity of "four" suggests counting, calculation, a refusal to appear eager. Her voice is described through three adjectives — "calm, unhurried, precise" — each a form of control.',
              'Grade 8-9': 'The writer presents Elena\'s power as fundamentally epistemological — a control over knowledge, disclosure, and the terms of engagement. The abstract noun "power" is redefined through negation: "not about what you did or said, but about what you withheld." This inversion is radical: in a society that equates power with action and speech, Elena locates it in omission. The tricolon that follows — "The pause before answering. The steady gaze that refused to look away first. The small, deliberate smile that gave nothing away" — is structured as three sentence fragments, each a performed withholding of complete syntax. The definite articles create the impression of a codified system, while the relative clauses ("that refused," "that gave nothing away") attribute agency to the gestures themselves. The Rothko painting — "all burning reds and deep, ominous blacks" — functions as an objective correlative for Elena\'s internal state: passionate intensity contained within absolute stillness. The final exchange crystallises the dynamic: Marcus is "breathing quickly" (involuntary, uncontrolled), while Elena\'s two-word response, "Go on," is a masterclass in narrative economy — she cedes nothing while compelling full disclosure from the other party.',
            },
            markScheme: [
              'Analyses specific language choices and their effects',
              'Comments on how the writer presents character',
              'Uses relevant subject terminology',
              'Embeds quotations within analysis',
              'Top band: perceptive, detailed analysis',
            ],
          },
          {
            id: 'edexcel-p1-q4',
            questionNumber: 4,
            questionText: 'Read the whole extract.\n\n"The writer successfully creates a character who is fascinating and unpredictable. The reader is drawn in because we never quite know what Elena will do next."\n\nTo what extent do you agree with this view?\n\nYou should:\n- consider the writer\'s use of language, form, and structure\n- evaluate how the writer creates effects\n- support your views with quotations from the text.',
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'evaluation',
            extract: EDEXCEL_P1_EXTRACT,
            extractSource: EDEXCEL_P1_EXTRACT_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'I agree that Elena is fascinating because the writer gives us lots of detail about how she affects people but we never fully understand her. The description of her as "not beautiful in any conventional sense" makes us curious about what she does look like. The fact that conversations stop when she enters a room shows she has a powerful effect. However, I think we do learn quite a lot about her — we know she works in a gallery, she is twenty-seven, and she has learned to use silence as power. The phone call at the end creates suspense because we want to know what has happened. Overall, I mostly agree because the writer keeps some mystery about Elena throughout.',
              'Grade 6-7': 'I substantially agree with the statement, though I would refine the claim: Elena is fascinating not because she is unpredictable but precisely because she is supremely predictable in her control — and it is the tension between this controlled surface and the unknown depths beneath it that creates fascination. The writer structures the extract to reveal Elena in layers: the external effect (paragraph 1), the backstory (paragraph 2), the philosophy (paragraph 3), and the dramatic test (paragraphs 4-6). Each layer offers apparent disclosure while actually deepening the mystery. We learn what Elena does but never what she feels. The Rothko painting — "burning reds and deep, ominous blacks" — is the closest we get to interiority, and even this is indirect. The final phone call is structurally brilliant: Marcus\'s "Something has happened" introduces narrative urgency, but Elena\'s response ("Go on") refuses to meet it. The reader is left, like Marcus, waiting for Elena to reveal what she knows — which is exactly where her power lies.',
            },
            markScheme: [
              'Evaluates with a clear, sustained personal response',
              'Analyses writer\'s methods (language, structure, form)',
              'Uses well-selected textual evidence',
              'Shows nuanced understanding of characterisation',
              'Top band: perceptive, critical evaluation',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p1-writing',
        title: 'Section B: Imaginative Writing',
        description: 'You are advised to spend about 45 minutes on this section. You are reminded of the need to plan your answer.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p1-q5',
            questionNumber: 5,
            questionText: 'Choose ONE of the following titles for your writing:\n\nEither:\n(a) Write about a time when a phone call changed everything.\nYour response could be real or imagined. You may wish to base your response on the extract.\n\nOr:\n(b) The Waiting Room.\nWrite a piece of imaginative writing with this title.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear piece of imaginative writing with: a recognisable structure; use of descriptive and narrative techniques; varied vocabulary; generally accurate spelling and punctuation.',
              'Grade 6-7': 'A compelling piece with: controlled atmosphere and pace; crafted use of imagery and sensory detail; structural choices for effect; consistent accuracy in SPaG with ambitious constructions.',
              'Grade 8-9': 'An assured, sophisticated piece with: a distinctive voice; precise, original imagery; masterful structural control; extensive vocabulary deployed with precision; technical virtuosity throughout.',
            },
            markScheme: [
              'AO5 (24 marks): Communication, register, organisation',
              'AO6 (16 marks): SPaG accuracy, sentence variety, ambitious vocabulary',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EDEXCEL ENGLISH LANGUAGE PAPER 2
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-lang-p2',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-Fiction and Transactional Writing',
    subtitle: 'English Language 1EN0/02',
    code: '1EN0/02',
    totalTimeMinutes: 125,
    totalMarks: 96,
    sections: [
      {
        id: 'edexcel-p2-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${EDEXCEL_P2_SOURCE_A_REF}\nSource B: ${EDEXCEL_P2_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'edexcel-p2-q1',
            questionNumber: 1,
            questionText: 'Read again Source A, lines 1-6.\n\nChoose four statements below which are TRUE.\n\nA) Social media has changed how teenagers communicate.\nB) Previous generations built identity through face-to-face interaction.\nC) Young people build identities in private.\nD) Identity formation now happens in real time.\nE) The audience is usually small.\nF) Face-to-face interaction involved shared experiences.\nG) Social media was designed for teenagers only.\nH) Identity construction now happens in public.',
            marks: 4,
            suggestedTimeMinutes: 4,
            questionType: 'multiple-choice',
            extract: `Source A:\n${EDEXCEL_P2_SOURCE_A}\n\nSource B:\n${EDEXCEL_P2_SOURCE_B}`,
            extractSource: `Source A: ${EDEXCEL_P2_SOURCE_A_REF} | Source B: ${EDEXCEL_P2_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'A, B, D, H — A: "Social media has not merely changed how teenagers communicate." B: "previous generations constructed their sense of self through face-to-face interaction." D: "in real time." H: "building their identities in public."',
            },
            markScheme: ['1 mark per correct answer, maximum 4'],
          },
          {
            id: 'edexcel-p2-q2',
            questionNumber: 2,
            questionText: 'You need to refer to Source A and Source B for this question.\n\nThe writers of both texts express concern about young people. Use details from both sources to write a summary of the concerns expressed.',
            marks: 8,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: `Source A:\n${EDEXCEL_P2_SOURCE_A}\n\nSource B:\n${EDEXCEL_P2_SOURCE_B}`,
            extractSource: `Source A: ${EDEXCEL_P2_SOURCE_A_REF} | Source B: ${EDEXCEL_P2_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both writers are worried about young people but for different reasons. Source A is concerned about social media making teenagers anxious and insecure — "70% reported that social media made them feel worse about their appearance." Source B worries that young people are "impatient of instruction" and "dismissive of authority." Both writers think young people are being harmed, but Source A blames technology while Source B blames the attitudes of the young themselves. However, Source B admits young people have "a passion for justice" while Source A acknowledges social media has "genuine benefits."',
              'Grade 6-7': 'Both writers articulate concern about young people\'s psychological wellbeing, though their diagnoses differ fundamentally. Mitchell identifies an external cause — social media platforms that have "fundamentally restructured the architecture of adolescent identity" — while Arnold attributes the problem to internal characteristics: "restlessness of spirit," impatience, and contempt for "accumulated wisdom." Mitchell\'s concern is empirical, supported by statistics (70% feel worse about appearance), while Arnold\'s is observational and moralistic. Both writers, however, share a deeper anxiety about measurement: Mitchell fears young people measure worth through likes and followers, while Arnold fears they "mistake confidence for knowledge." Both texts also contain self-correcting moments of balance: Mitchell insists "I am not a technophobe," while Arnold admits young people show "a passion for justice" that "puts their elders to shame." This rhetorical strategy of concession strengthens both arguments by demonstrating nuance.',
            },
            markScheme: [
              'Must reference both sources',
              'Identifies concerns from each writer',
              'Synthesises similarities and differences',
              'Uses embedded evidence',
            ],
          },
          {
            id: 'edexcel-p2-q3',
            questionNumber: 3,
            questionText: 'You now need to refer only to Source A.\n\nHow does Dr Mitchell use language to present her argument about social media and young people?',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: `Source A:\n${EDEXCEL_P2_SOURCE_A}`,
            extractSource: EDEXCEL_P2_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': 'Mitchell uses strong language to show the seriousness of the problem. The metaphor "restructured the architecture" makes social media sound like it has physically changed something, which makes it seem powerful and dangerous. She uses statistics from a study to give her argument authority. The word "paradox" shows that social media does the opposite of what it should do. The examples at the end — a "thirteen-year-old" checking likes and a "fifteen-year-old boy" measuring worth by followers — make the problem feel real and personal. The final word "crisis" is emotive and urgent.',
              'Grade 6-7': 'Mitchell constructs her argument through a carefully layered rhetorical strategy that moves from intellectual analysis to emotional impact. The opening metaphor — "restructured the architecture of adolescent identity" — is deliberately architectural, implying that social media has not merely influenced but rebuilt the foundational structures of selfhood. The contrasting verbs "constructed" (past generations) versus "building" (present) create a temporal distinction: the past tense suggests completed, stable identity, while the progressive aspect implies an ongoing, unstable process. The statistics from the RSPPH function as argumentum ad verecundiam, lending institutional authority, while the word "paradox" signals intellectual sophistication — Mitchell is not merely complaining but identifying a structural contradiction. The concessive paragraph ("I am not a technophobe") is strategically placed to pre-empt counter-argument before the emotional climax: the two hypothetical scenarios ("When a thirteen-year-old cannot eat breakfast without first checking...") use temporal specificity to transform statistics into narrative. The final sentence — "We are witnessing a crisis" — deploys the progressive aspect and the collective "we" to create urgency and shared responsibility.',
            },
            markScheme: [
              'Analyses language techniques in detail',
              'Comments on specific word choices and their effects',
              'Considers how language persuades the reader',
              'Uses subject terminology accurately',
              'Top band: sophisticated, conceptualised analysis',
            ],
          },
          {
            id: 'edexcel-p2-q4',
            questionNumber: 4,
            questionText: 'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different perspectives on the challenges facing young people.\n\nIn your answer, you could:\n- compare their different perspectives\n- compare the methods they use to convey their perspectives\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${EDEXCEL_P2_SOURCE_A}\n\nSource B:\n${EDEXCEL_P2_SOURCE_B}`,
            extractSource: `Source A: ${EDEXCEL_P2_SOURCE_A_REF} | Source B: ${EDEXCEL_P2_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both writers are concerned about young people but have different perspectives. Mitchell blames social media platforms while Arnold blames the young people themselves. Mitchell uses modern evidence (statistics and studies) to support her argument, while Arnold relies on personal observation. Both writers show some balance: Mitchell says social media has "genuine benefits" and Arnold admits young people have "a passion for justice." Mitchell\'s tone is urgent and concerned — she calls it "a crisis." Arnold\'s tone is more like a disappointed teacher, mixing criticism with grudging admiration.',
              'Grade 6-7': 'Mitchell and Arnold both express concern about young people, but their perspectives diverge fundamentally in their attribution of blame. Mitchell locates the threat externally: social media platforms have "fundamentally restructured" adolescent identity, making young people victims of technological forces. Arnold, conversely, locates the problem internally: young people are "impatient," "dismissive," and possessed of "unshakeable conviction" — character flaws rather than environmental damage. Their methods reflect these different diagnoses. Mitchell deploys the rhetoric of empirical investigation: statistics, studies, named institutions. Her authority derives from evidence. Arnold uses the rhetoric of cultural authority: literary-quality prose, Latin-inflected syntax, and the assumption that age confers wisdom. His authority derives from position. Yet both writers share a structural strategy of concession that reveals a more nuanced perspective than their headlines suggest. Mitchell\'s "I am not a technophobe" mirrors Arnold\'s "I do not wish to be thought one of those tiresome persons." Both writers recognise that their arguments risk caricature and use strategic concession to maintain credibility. The most striking parallel is their shared conclusion that young people possess untapped potential: Mitchell\'s "genuine benefits — community, creativity, connection" and Arnold\'s "passion for justice... fury at inequality" both gestures towards a future that depends on adult guidance rather than adult condemnation.',
            },
            markScheme: [
              'Compares perspectives throughout the response',
              'Analyses methods used by both writers',
              'Uses evidence from both texts',
              'Shows perceptive understanding of both texts',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-writing',
        title: 'Section B: Transactional Writing',
        description: 'You are advised to spend about 45 minutes on this section. Answer BOTH questions.',
        totalMarks: 56,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-p2-q5',
            questionNumber: 5,
            questionText: 'Your school or college is debating whether mobile phones should be banned during the school day.\n\nWrite a speech to be delivered at a school assembly in which you argue your point of view on this topic.\n\n(16 marks for content / 8 marks for SPaG)',
            marks: 24,
            suggestedTimeMinutes: 25,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear speech with: appropriate form features (direct address, rhetorical questions); a sustained argument; generally accurate SPaG.',
              'Grade 6-7': 'A well-crafted speech with: sophisticated rhetorical techniques; counter-argument addressed; appropriate register for audience; accurate and varied SPaG.',
              'Grade 8-9': 'An assured, compelling speech with: masterful rhetoric; nuanced argument; distinctive voice; technical virtuosity.',
            },
            markScheme: [
              'Content (16 marks): Purpose, audience, form',
              'SPaG (8 marks): Accurate, varied, ambitious',
            ],
          },
          {
            id: 'edexcel-p2-q6',
            questionNumber: 6,
            questionText: 'A national newspaper is asking for contributions to a series called "Things That Matter."\n\nWrite an article about something you feel passionately about.\n\n(24 marks for content / 8 marks for SPaG)',
            marks: 32,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear article with: appropriate form features (headline, subheadings optional); a sustained argument or exploration; generally accurate SPaG.',
              'Grade 6-7': 'A compelling article with: distinctive journalistic voice; effective use of evidence and example; structural sophistication; accurate, varied SPaG.',
              'Grade 8-9': 'An outstanding article with: assured journalistic voice; compelling narrative and argument woven together; ambitious vocabulary and syntax; technical virtuosity.',
            },
            markScheme: [
              'Content (24 marks): Communication, register, form, organisation',
              'SPaG (8 marks): Sentence demarcation, punctuation range, spelling, sentence variety',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // OCR ENGLISH LANGUAGE COMPONENT 01
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-lang-p1',
    board: 'OCR',
    paperNumber: 1,
    title: 'Component 01: Communicating Information and Ideas',
    subtitle: 'English Language J351/01',
    code: 'J351/01',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p1-reading',
        title: 'Section A: Reading',
        description: `Read the source text carefully. Then answer all the questions in this section.\n\nSource: ${OCR_P1_SOURCE_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-q1',
            questionNumber: 1,
            questionText: 'Identify four reasons Margaret Thornton gives for opposing the demolition of the community centre.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: OCR_P1_SOURCE,
            extractSource: OCR_P1_SOURCE_REF,
            modelAnswers: {
              'Grade 4-5': '1. It has served the neighbourhood for over sixty years. 2. She has attended meetings, celebrations, and support groups there. 3. It creates conditions for connection between people. 4. A new block of luxury apartments will not bring community.',
            },
            markScheme: ['1 mark per valid reason, maximum 4'],
          },
          {
            id: 'ocr-p1-q2',
            questionNumber: 2,
            questionText: 'How does the writer use the example of Mrs Patricia Ogden to support her argument? Explain using evidence from the text.',
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'analysis',
            extract: OCR_P1_SOURCE,
            extractSource: OCR_P1_SOURCE_REF,
            modelAnswers: {
              'Grade 4-5': 'The writer uses the example of Mrs Ogden to show that the community centre brings people together. She describes how people "who had never spoken to each other before found themselves united" by hearing the poem. Mrs Ogden\'s age (eighty-three) shows that the centre serves elderly people who might otherwise be isolated. The description of her reading a poem about her "late husband" adds emotion and shows the centre provides a place for people to share personal experiences.',
              'Grade 6-7': 'Thornton deploys the anecdote strategically: it transforms an abstract argument about community value into a concrete, emotionally specific moment. Mrs Ogden\'s age ("eighty-three") and subject matter ("her late husband") immediately establish vulnerability, while the detail that strangers "found themselves united by a single act of human vulnerability" elevates the personal into the universal. The passive construction "found themselves" suggests the connection was organic and unforced — precisely the kind of outcome that cannot be engineered in "luxury apartments." By naming Mrs Ogden, Thornton gives the community centre a human face, making demolition feel less like a planning decision and more like an act of personal harm.',
            },
            markScheme: [
              'Explains how the example supports the argument',
              'Uses evidence from the text',
              'Analyses the persuasive effect of the anecdote',
              'Top band: detailed, perceptive analysis',
            ],
          },
          {
            id: 'ocr-p1-q3',
            questionNumber: 3,
            questionText: 'How does the writer use language and structure to argue against the demolition of the community centre?\n\nAnalyse the techniques used and their effects.',
            marks: 14,
            suggestedTimeMinutes: 18,
            questionType: 'analysis',
            extract: OCR_P1_SOURCE,
            extractSource: OCR_P1_SOURCE_REF,
            modelAnswers: {
              'Grade 4-5': 'The writer uses a formal letter format to show she is serious and respectable. She uses emotive language like "considerable agitation" and personal examples ("I have attended meetings"). The rhetorical question "whose purpose?" challenges the council directly. She lists the building\'s faults ("the roof leaks... the heating is unreliable") before arguing these don\'t matter, which shows she is being honest and fair. The final short paragraph uses contrast: "profit" versus "community" to make her point clearly.',
              'Grade 6-7': 'Thornton constructs her argument through a sophisticated interplay of concession and rebuttal. The formal epistolary register establishes authority, while "considerable agitation" balances emotional investment with dignified restraint. The structural heart of the letter is the third paragraph, which performs a rhetorical reversal: she quotes the council\'s own phrase ("no longer fit for purpose") before dismantling it through the interrogative "whose purpose?" The concessive listing of faults ("The roof leaks, certainly, and the heating is unreliable") — with the humorous addition of potholes that "could swallow a small dog" — demonstrates strategic honesty: by acknowledging the building\'s physical failings, she strengthens her claim that its value is intangible. The final paragraph\'s antithetical structure ("A new block of luxury apartments will bring profit. It will not bring community") uses syntactic parallelism to frame the choice as binary and moral, the repetition of "will bring" highlighting the absence.',
            },
            markScheme: [
              'Analyses language and structural techniques',
              'Comments on specific effects on the reader',
              'Uses subject terminology accurately',
              'Considers the overall argument and its development',
              'Top band: perceptive, detailed, conceptualised analysis',
            ],
          },
          {
            id: 'ocr-p1-q4',
            questionNumber: 4,
            questionText: '"Margaret Thornton writes persuasively but ultimately fails to make a convincing case because she relies too heavily on emotion rather than practical arguments."\n\nTo what extent do you agree with this view? Evaluate the effectiveness of the letter.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: OCR_P1_SOURCE,
            extractSource: OCR_P1_SOURCE_REF,
            modelAnswers: {
              'Grade 4-5': 'I partially agree. The letter does use a lot of emotion — the story about Mrs Ogden is touching and the language is passionate. However, she also makes practical points: the centre has served the community for 60 years and brings people together. She could have been more persuasive by including statistics or alternative proposals. But I think the emotional argument is actually a strength because it reminds the council that real people will be affected.',
              'Grade 6-7': 'I largely disagree with the statement\'s implicit assumption that emotion and persuasion are separable categories. Thornton\'s emotional appeals are themselves arguments: the Mrs Ogden anecdote is not merely sentimental but evidential — it demonstrates a specific, documented instance of the centre\'s social function. Moreover, the letter does contain pragmatic reasoning: the distinction between physical "fitness for purpose" and social value is a conceptual argument, not an emotional one. Where the letter could be strengthened is in proposing alternatives (renovation rather than demolition, for example), but its rhetorical purpose is to challenge a decision, not to offer planning advice. The accusation that emotion undermines argument reflects a false dichotomy: in the context of community planning, emotional testimony is primary evidence.',
            },
            markScheme: [
              'Evaluates with a sustained personal response',
              'Considers both strengths and limitations',
              'Uses textual evidence to support evaluation',
              'Shows nuanced understanding of rhetorical effectiveness',
            ],
          },
        ],
      },
      {
        id: 'ocr-p1-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 35 minutes on this section. Choose ONE of the following tasks.',
        totalMarks: 40,
        suggestedTimeMinutes: 40,
        questions: [
          {
            id: 'ocr-p1-q5',
            questionNumber: 5,
            questionText: 'Choose ONE of the following writing tasks:\n\nEither:\n(a) Your local area is planning to build on green space. Write a letter to the local newspaper arguing whether this should or should not go ahead.\n\nOr:\n(b) Write an article for a magazine aimed at young people about the importance of community.\n\n(32 marks for content and organisation / 8 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 40,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear, purposeful piece in the appropriate form with: a sustained argument; some persuasive techniques; generally accurate spelling and punctuation.',
              'Grade 6-7': 'A well-crafted piece with: sophisticated rhetorical techniques; appropriate register; well-organised argument; consistent technical accuracy.',
              'Grade 8-9': 'An outstanding piece with: compelling argument; distinctive voice; ambitious vocabulary; structural sophistication; technical virtuosity.',
            },
            markScheme: [
              'Content & Organisation (32 marks): Purpose, audience, form, structure',
              'Technical Accuracy (8 marks): SPaG accuracy and range',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WJEC EDUQAS ENGLISH LANGUAGE COMPONENT 1
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-lang-p1',
    board: 'WJEC',
    paperNumber: 1,
    title: 'Component 1: 20th Century Literature Reading and Creative Prose Writing',
    subtitle: 'English Language C700QS/1',
    code: 'C700QS/1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-p1-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${WJEC_P1_EXTRACT_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-p1-q1',
            questionNumber: 1,
            questionText: 'Read lines 1-5. List five things you learn about the kitchen and what is happening from these lines.',
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: WJEC_P1_EXTRACT,
            extractSource: WJEC_P1_EXTRACT_SOURCE,
            modelAnswers: {
              'Grade 4-5': '1. The kitchen smelled of burnt toast. 2. There was a sharp chemical smell Nathan could not identify. 3. His mother was standing at the counter. 4. She had her back to him. 5. She was holding a letter in both hands.',
            },
            markScheme: ['1 mark per valid point, maximum 5'],
          },
          {
            id: 'wjec-p1-q2',
            questionNumber: 2,
            questionText: 'How does the writer create a sense of tension and unease in this extract?\n\nYou should comment on:\n- what is said and what is not said\n- the writer\'s use of language and structure\n- the effects on the reader.\n\nYou must refer to the text to support your answer.',
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: WJEC_P1_EXTRACT,
            extractSource: WJEC_P1_EXTRACT_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'The writer creates tension through what is not said. The mother tells Nathan the letter is "nothing important" but her shaking hands show this is not true. The contrast between the "cheerful pop song" and the "silence of the kitchen" is unsettling. The mother folds the letter "once, twice, three times" as if trying to make it disappear. Nathan feels the word "nothing" is like "a third person at the table" which is a metaphor showing how the unspoken truth takes up space between them. Short sentences like "Pip sat. He ate" create a tense, awkward mood.',
              'Grade 6-7': 'The writer constructs tension through a sustained gap between surface behaviour and underlying reality. The mother\'s smile is "almost, but not quite, convincing" — the qualifying phrase transforms reassurance into its opposite. The domestic routine — "kettle on, bread in toaster, butter from the fridge" — is described through staccato noun phrases that mimic automatic movement, but the mechanical efficiency is undermined by the shaking hands and the butter knife that "rattled against the plate." This contrast between controlled routine and involuntary physical response creates dramatic irony: Nathan can see what his mother is trying to hide. The structural centrepiece is the letter itself, folded "once, twice, three times" — the deliberate counting suggests an attempt to compress distressing content into something manageable. The radio provides an ironic counterpoint, its "cheerful pop song about sunshine and summer" grotesquely inappropriate for the emotional atmosphere. The final image — "nothing" sitting "between them like a third person at the table, taking up space, breathing the same air, waiting to be acknowledged" — is the extract\'s most powerful technique, personifying silence itself as a living, patient presence. The progressive participles ("taking up," "breathing," "waiting") give the unspoken its own agency.',
            },
            markScheme: [
              'Analyses language and structural techniques',
              'Comments on what is said and unsaid',
              'Considers effects on the reader',
              'Uses textual references to support analysis',
              'Top band: perceptive, detailed analysis',
            ],
          },
          {
            id: 'wjec-p1-q3',
            questionNumber: 3,
            questionText: 'What impressions do you get of the relationship between Nathan and his mother from this extract?\n\nYou must refer to the text to support your answer.',
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: WJEC_P1_EXTRACT,
            extractSource: WJEC_P1_EXTRACT_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'Nathan and his mother seem close but there is a barrier between them. Nathan notices small details about his mother — her shaking hands, the way she folds the letter — which shows he pays attention to her and cares. His mother tries to protect him by hiding the letter and saying it is "nothing important." The short dialogue shows they are not good at talking about difficult things. The mother uses commands — "Sit down," "Eat" — which could show she is trying to keep control of the situation.',
              'Grade 6-7': 'The extract presents a relationship characterised by mutual care expressed through mutual concealment. The mother\'s instinct to protect Nathan manifests as suppression: she folds the letter away, manufactures a smile, deploys imperatives ("Breakfast. Sit down." / "Eat.") as instruments of normalcy. Her body, however, betrays what her words deny — the shaking hands are involuntary disclosure. Nathan, for his part, is perceptive but compliant: he "ate" despite his awareness that something is wrong, respecting the performance of normality even while seeing through it. The single-word exchange pattern — "Mum?" / "Breakfast" / "Eat" — suggests a family where emotional vocabulary is limited, where love is expressed through practical action (making breakfast) rather than verbal intimacy. The most telling detail is Nathan\'s question — "What was that letter?" — and the mother\'s deflection. His willingness to ask but not press the point, and her willingness to lie but not convincingly, creates a portrait of a relationship where both parties are trying to protect each other, and both know it.',
            },
            markScheme: [
              'Analyses the relationship with textual support',
              'Comments on both characters\' behaviour and motivations',
              'Considers what is implied as well as stated',
              'Top band: perceptive, thoughtful interpretation',
            ],
          },
          {
            id: 'wjec-p1-q4',
            questionNumber: 4,
            questionText: '"The writer successfully uses an everyday setting to create a powerful emotional impact."\n\nTo what extent do you agree? You should consider the writer\'s use of language and structure in your response.',
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'evaluation',
            extract: WJEC_P1_EXTRACT,
            extractSource: WJEC_P1_EXTRACT_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'I agree that the ordinary kitchen setting makes the emotional tension more powerful. Because everything seems normal at first (burnt toast, radio playing, making breakfast), the unease creeps in gradually. The reader recognises this kind of morning routine, which makes it feel real. The shaking hands and the hidden letter are more disturbing because they happen during something so ordinary. The ending is powerful because we still don\'t know what the letter says, which creates suspense.',
              'Grade 6-7': 'I strongly agree, and I would argue that the domestic setting is not merely a backdrop but the mechanism through which emotional impact is generated. The writer weaponises familiarity: every detail — the burnt toast, the radio, the kettle and toaster — belongs to a morning routine the reader recognises, and it is precisely this recognition that makes the disruption so unsettling. The technique is essentially one of defamiliarisation: the mother\'s shaking hands are disturbing because they occur in a context where hands should be steady. The writer\'s structural control is masterful: the extract begins with smell (burnt toast, chemical sharpness), moves to sight (the mother\'s posture), then sound (the radio), building a multi-sensory portrait of normality before the emotional content intrudes. The short, imperative dialogue ("Sit down." "Eat.") has an almost ritualistic quality, as though both characters are performing "breakfast" as a form of emotional management. The emotional impact is amplified by restraint — we never learn the letter\'s contents, and neither does Nathan. This withholding is itself a structural argument about how families handle crisis: not through dramatic confrontation but through the careful maintenance of routine, even when routine has become a fiction.',
            },
            markScheme: [
              'Evaluates with a clear, sustained personal response',
              'Analyses language and structural methods',
              'Uses textual evidence to support evaluation',
              'Top band: evaluative, critical, conceptualised',
            ],
          },
        ],
      },
      {
        id: 'wjec-p1-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 45 minutes on this section. You are reminded of the need to plan your answer.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'wjec-p1-q5',
            questionNumber: 5,
            questionText: 'Choose ONE of the following titles for your creative prose writing:\n\nEither:\n(a) Write about a time when something was left unspoken.\nYour response could be real or imagined.\n\nOr:\n(b) The Morning After.\nWrite a short piece of prose with this title.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear piece of creative prose with: recognisable structure; use of descriptive techniques; varied vocabulary; generally accurate SPaG.',
              'Grade 6-7': 'A compelling piece with: controlled atmosphere; crafted imagery; structural sophistication; consistent SPaG accuracy.',
              'Grade 8-9': 'An assured, distinctive piece with: original voice; precise imagery; masterful control of pace and structure; technical virtuosity.',
            },
            markScheme: [
              'Content & Organisation (24 marks): Communication, voice, structure',
              'Technical Accuracy (16 marks): Sentence demarcation, punctuation, spelling, sentence variety',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WJEC EDUQAS ENGLISH LANGUAGE COMPONENT 2
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-lang-p2',
    board: 'WJEC',
    paperNumber: 2,
    title: 'Component 2: 19th and 21st Century Non-Fiction Reading and Transactional/Persuasive Writing',
    subtitle: 'English Language C700QS/2',
    code: 'C700QS/2',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-p2-reading',
        title: 'Section A: Reading',
        description: 'Read both source texts carefully. Then answer all the questions in this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-p2-q1',
            questionNumber: 1,
            questionText: 'Read the 21st-century source text about homelessness (Source A).\n\nList five things you learn about the current homelessness situation from this text.',
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Source A:\n${AQA_P2_SOURCE_A}\n\nSource B:\n${AQA_P2_SOURCE_B}`,
            extractSource: `Source A: ${AQA_P2_SOURCE_A_REF} | Source B: ${AQA_P2_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': '1. The writer has visited cities across Europe. 2. Fourteen people were sleeping rough near Westminster. 3. Temperatures dropped to minus eight degrees. 4. Rough sleeping has increased by 169% since 2010. 5. Over 700 homeless people died last year.',
            },
            markScheme: ['1 mark per valid point, maximum 5'],
          },
          {
            id: 'wjec-p2-q2',
            questionNumber: 2,
            questionText: 'How does the 21st-century writer use language to persuade the reader to care about homelessness?\n\nYou should comment on specific words and phrases and their effects.',
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${AQA_P2_SOURCE_A}`,
            extractSource: AQA_P2_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': 'The writer uses emotive language like "calculated indifference" to make the reader feel guilty. The phrase "human beings" reminds us that homeless people are real people. Statistics like "169%" and "700 people died" shock the reader. The writer uses direct address — "any one of us" — to make the problem feel personal. The word "comforting" is used sarcastically to criticise our excuses.',
              'Grade 6-7': 'Chen deploys a multi-layered persuasive strategy. The collocated adjective-noun phrase "calculated indifference" implies that society\'s neglect is deliberate rather than accidental, transforming a passive failure into an active moral choice. The spatial argument — "less than a hundred yards away" — makes physical proximity a moral indictment. The tricolon of ordinary misfortune ("The mortgage payment missed... The relationship that fractured... The mental health crisis") uses the definite article to transform hypotheticals into inevitabilities. Each sentence fragment is a snapshot of catastrophe. The shift to second person plural in "we walk past. We avert our eyes" creates inescapable complicity through anaphoric repetition of "we." The adjectives "profoundly, terrifyingly ordinary" modify "ordinary" in a way that makes the familiar frightening — a rhetorical tour de force that reframes the reader\'s own life as precarious.',
            },
            markScheme: [
              'Analyses specific language techniques',
              'Comments on word-level effects',
              'Considers persuasive strategies',
              'Uses embedded quotations',
            ],
          },
          {
            id: 'wjec-p2-q3',
            questionNumber: 3,
            questionText: 'Now look at both texts. Compare and contrast the writers\' attitudes to poverty.\n\nYou should compare:\n- what they think and feel about poverty\n- how they present their ideas.',
            marks: 10,
            suggestedTimeMinutes: 15,
            questionType: 'comparison',
            extract: `Source A:\n${AQA_P2_SOURCE_A}\n\nSource B:\n${AQA_P2_SOURCE_B}`,
            extractSource: `Source A: ${AQA_P2_SOURCE_A_REF} | Source B: ${AQA_P2_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both writers are angry about poverty. Chen uses statistics while Mayhew uses personal observation. Both say poor people are invisible to society. Chen is more directly accusatory while Mayhew is more measured. Both use specific examples to make their arguments vivid.',
              'Grade 6-7': 'Both writers share moral outrage at poverty, but their rhetorical strategies reflect their historical contexts. Chen employs confrontational modern journalism — statistics, direct accusation, second-person address — to challenge contemporary complacency. Mayhew uses the Victorian social investigation mode: detailed first-person observation, measured prose, and appeal to "civilisation." Both writers weaponise proximity: Chen notes rough sleepers are "less than a hundred yards" from Parliament; Mayhew writes that the poor "occupy the same streets." The most significant difference lies in their treatment of the poor themselves: Mayhew\'s mother who maintains "desperate respectability" is an individual with agency and dignity, whereas Chen\'s homeless are rendered primarily through statistics. Both approaches have rhetorical power, but they construct different relationships between reader and subject.',
            },
            markScheme: [
              'Compares attitudes from both texts',
              'Analyses methods of presentation',
              'Uses evidence from both sources',
              'Shows clear comparative analysis',
            ],
          },
          {
            id: 'wjec-p2-q4',
            questionNumber: 4,
            questionText: '"Both writers make the reader care about poverty, but the 19th-century writer is more effective because their personal witness account is more powerful than statistics."\n\nTo what extent do you agree? You should refer to both texts.',
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'evaluation',
            extract: `Source A:\n${AQA_P2_SOURCE_A}\n\nSource B:\n${AQA_P2_SOURCE_B}`,
            extractSource: `Source A: ${AQA_P2_SOURCE_A_REF} | Source B: ${AQA_P2_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'I partially agree. Mayhew\'s description of the family is very moving, especially the mother\'s "desperate respectability." However, Chen\'s statistics are also powerful because they show the scale of the problem. Both approaches work well. I think Mayhew is more effective at making us feel emotions, while Chen is better at making us think about solutions.',
              'Grade 6-7': 'I would challenge the binary implicit in the statement. Chen does not rely solely on statistics — her most powerful moment is the hypothetical tricolon of ordinary misfortune, which is itself a form of witness. Equally, Mayhew\'s personal observation includes implicit quantification: "twelve feet by ten," "eight persons." The real difference is structural: Mayhew builds from observation to reflection, allowing the reader to draw their own moral conclusions, while Chen moves from evidence to accusation, leaving the reader no space for evasion. Both are effective, but for different audiences and different purposes.',
            },
            markScheme: [
              'Evaluates both texts with a personal response',
              'Compares effectiveness of different methods',
              'Uses evidence from both texts',
              'Shows nuanced critical judgement',
            ],
          },
        ],
      },
      {
        id: 'wjec-p2-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 30 minutes on this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 40,
        questions: [
          {
            id: 'wjec-p2-q5',
            questionNumber: 5,
            questionText: 'Your headteacher has asked students to contribute to the school magazine on the theme of "Making a Difference."\n\nWrite an article for the magazine about how young people can make a positive difference in their communities.\n\n(20 marks for communication and organisation / 12 marks for writing accurately / 8 marks for SPaG)',
            marks: 40,
            suggestedTimeMinutes: 40,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear article with: appropriate form; a range of ideas; generally accurate SPaG.',
              'Grade 6-7': 'A well-crafted article with: engaging opening; sophisticated argument; consistent accuracy.',
              'Grade 8-9': 'An outstanding article with: compelling voice; nuanced exploration; technical virtuosity.',
            },
            markScheme: [
              'Communication & Organisation (20 marks): Purpose, form, voice, structure',
              'Writing Accurately (12 marks): Sentence variety, vocabulary range',
              'SPaG (8 marks): Spelling, punctuation, grammar',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // OCR ENGLISH LANGUAGE COMPONENT 02
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-lang-p2',
    board: 'OCR',
    paperNumber: 2,
    title: 'Component 02: Exploring Effects and Impact',
    subtitle: 'English Language J351/02',
    code: 'J351/02',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p2-reading',
        title: 'Section A: Reading',
        description: 'Read the extract below carefully. Then answer all the questions in this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p2-q1',
            questionNumber: 1,
            questionText: 'Read the extract below.\n\nList four things about the setting from the opening paragraph.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: AQA_P1_EXTRACT,
            extractSource: AQA_P1_EXTRACT_SOURCE,
            modelAnswers: {
              'Grade 4-5': '1. There was morning fog on the marshes. 2. The fog was cold. 3. The churchyard had gravestones. 4. The light was grey and dim.',
            },
            markScheme: ['1 mark per valid point, maximum 4'],
          },
          {
            id: 'ocr-p2-q2',
            questionNumber: 2,
            questionText: 'How does the writer use language to create a sense of danger and isolation in the extract?\n\nYou should consider:\n- word choices and their effects\n- imagery and figurative language\n- the overall impact on the reader.',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: AQA_P1_EXTRACT,
            extractSource: AQA_P1_EXTRACT_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'The writer uses personification of the fog as a "living thing" with "cold fingers" to create danger. The marshes are described as an "endless grey expanse" showing isolation. The bird cry comes "from nowhere and everywhere" which is disorienting. The convict is "barely human" which is terrifying.',
              'Grade 6-7': 'Dickens constructs danger through sustained personification: the fog "crept" with "cold fingers probing," turning the natural world into an active predator. The verb "probing" suggests methodical, invasive searching. Isolation is established through negation and absence: the river "reflected nothing," there was "nothing to see." The bird cry "from nowhere and everywhere at once" creates spatial disorientation that mirrors Pip\'s vulnerability. The convict\'s appearance — "barely human... caked in mud" — blurs the boundary between person and landscape, as though the marshes themselves have produced this threat. The simile "as if it had been screaming for a hundred years" extends the temporal scale beyond the realistic, giving the encounter an almost mythic quality of dread.',
            },
            markScheme: [
              'Analyses language techniques with specific examples',
              'Comments on effects of individual words',
              'Considers how imagery creates atmosphere',
              'Uses subject terminology accurately',
            ],
          },
          {
            id: 'ocr-p2-q3',
            questionNumber: 3,
            questionText: 'How does the writer use structure to build towards the encounter with the convict?\n\nYou should consider how the extract as a whole is organised.',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: AQA_P1_EXTRACT,
            extractSource: AQA_P1_EXTRACT_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'The extract begins with the setting and atmosphere, building up a scary mood before the convict appears. The writer moves from the fog to the marshes to the convict, getting more specific and more frightening. Short sentences like "Then he heard it" create sudden tension.',
              'Grade 6-7': 'The extract is structured as a progressive narrowing of focus and escalation of threat. The opening paragraph establishes the general atmosphere (cold, fog, desolation). The second paragraph extends the spatial setting outward (the river, the marshes, the horizon). This panoramic view creates a structural misdirection: the reader expects danger from the vast, open landscape. The third paragraph reverses this: "Then he heard it" pivots from visual to auditory, and the threat emerges not from the horizon but from behind "the largest gravestone" — immediate, close, behind. The fragmented syntax of paragraph three — three noun phrases building in menace — mimics the incremental revelation. The final paragraph shifts from sound to sight and from distance to physical contact ("seized Pip by the chin"), completing the structural compression from landscape to body.',
            },
            markScheme: [
              'Comments on overall structural progression',
              'Analyses how focus changes between paragraphs',
              'Comments on sentence-level structure',
              'Considers the effect on the reader',
            ],
          },
          {
            id: 'ocr-p2-q4',
            questionNumber: 4,
            questionText: '"The writer makes the reader fear the convict but also feel sympathy for him."\n\nTo what extent do you agree with this view? Use evidence from the text.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: AQA_P1_EXTRACT,
            extractSource: AQA_P1_EXTRACT_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'I mostly agree. The convict is frightening because of his threat and inhuman appearance. But words like "desperate" and "hungry" make us feel sorry for him too. The phrase "nothing left to lose" suggests he has suffered a lot. So we feel both fear and sympathy.',
              'Grade 6-7': 'I strongly agree. Dickens orchestrates a dual response through careful word selection. The fear response is generated by dehumanisation ("barely human," "creature"), physical menace ("seized Pip by the chin"), and direct threat ("I\'ll cut your throat"). But embedded within this terrifying portrait are markers of suffering: "soaked through, caked in mud" suggests prolonged exposure; "desperate, hungry" names basic human needs; "nothing left to lose" implies a history of loss. The iron on his leg marks him as a prisoner — both dangerous and constrained. Dickens forces the reader to hold contradictory responses simultaneously: the convict is threatening because he is suffering, and pitiable because he is threatening. This moral complexity is characteristic of Dickens\'s wider project: to show that criminality and humanity are not mutually exclusive.',
            },
            markScheme: [
              'Evaluates with a sustained personal response',
              'Considers both fear and sympathy',
              'Uses textual evidence effectively',
              'Shows nuanced understanding',
            ],
          },
        ],
      },
      {
        id: 'ocr-p2-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 35 minutes on this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 40,
        questions: [
          {
            id: 'ocr-p2-q5',
            questionNumber: 5,
            questionText: 'Choose ONE of the following:\n\nEither:\n(a) Write a descriptive piece about a place at a particular time of day, focusing on creating atmosphere through language.\n\nOr:\n(b) Write the opening of a story that begins with a character discovering something unexpected.\n\n(32 marks for content and organisation / 8 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 40,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear piece with: descriptive or narrative techniques; varied vocabulary; generally accurate SPaG.',
              'Grade 6-7': 'A compelling piece with: crafted atmosphere; conscious technique; consistent accuracy.',
              'Grade 8-9': 'An outstanding piece with: distinctive voice; precise imagery; structural mastery; technical virtuosity.',
            },
            markScheme: [
              'Content & Organisation (32 marks): Voice, imagery, structure, effect',
              'Technical Accuracy (8 marks): SPaG accuracy and ambition',
            ],
          },
        ],
      },
    ],
  },
]

// ─── Import Expanded Exam Bank ─────────────────────────────────────────────────


// ─── Import Expanded Exam Bank ─────────────────────────────────────────────────

import { wjecMockExams } from "./mock-exams-wjec"
import { caieMockExams } from "./mock-exams-caie"
import { edexcelMockExams } from "./mock-exams-edexcel"
import { expandedMockExams } from './mock-exams/index'
import { aqaLitMockExams } from "./mock-exams-aqa-lit"

/** All mock exam papers — original 8 + 6 AQA Lit + 6 WJEC + 6 Edexcel + 6 CAIE + 120 expanded = 152 total */

export const allMockExamPapers: MockExamPaper[] = [
  ...mockExamPapers,
  ...aqaLitMockExams,
  ...wjecMockExams,
  ...edexcelMockExams,
  ...caieMockExams,
  ...expandedMockExams,
]

// ─── Helper Functions ────────────────────────────────────────────────────────

export function getMockExamsByBoard(board: string): MockExamPaper[] {
  return allMockExamPapers.filter((p) => p.board === board)
}

export function getMockExamById(id: string): MockExamPaper | undefined {
  return allMockExamPapers.find((p) => p.id === id)
}

export function getAvailableBoards(): string[] {
  return Array.from(new Set(allMockExamPapers.map((p) => p.board)))
}

export function formatExamTime(minutes: number): string {
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  if (h === 0) return `${m} minutes`
  if (m === 0) return `${h} hour${h > 1 ? 's' : ''}`
  return `${h} hour${h > 1 ? 's' : ''} ${m} minutes`
}
