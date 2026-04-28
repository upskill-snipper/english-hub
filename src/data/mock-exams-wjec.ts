// @ts-nocheck
// ─── WJEC/Eduqas Mock Exam Data ──────────────────────────────────────────────
// WJEC C700QS English Language: 6 mock exam papers (3x Component 1, 3x Component 2)
// Component 1: 20th Century Literature Reading + Creative Prose Writing
// Component 2: 19th/21st Century Non-Fiction Reading + Transactional Writing

import type { MockExamPaper } from './mock-exams'

// ─── Component 1 Literary Extracts ────────────────────────────────────────────

const WJEC_C1_EXTRACT_1 = `She stood in the doorway of the village shop, watching the rain come down in sheets across the empty high street. The shop bell had stopped ringing an hour ago. No one came to the village anymore. They all went to the supermarket out on the ring road, where the car park was vast and empty under fluorescent lights, where everything was organised into categories that had nothing to do with living.

She had run the shop for forty years. Her hands knew every corner of it — the exact temperature the wine rack held in summer, the way the newspapers curled at the edges on humid days, the precise spot where the floorboards creaked. She knew her customers by their purchases: Mr Walsh bought instant coffee and the racing pages; Mrs Chen came for vegetables at 4 p.m. every Thursday; old James bought milk and solitude.

Now Mr Walsh shopped online. Mrs Chen had moved closer to the hospital where her daughter worked. James had died in the spring, alone in the flat above the ironmonger's that had been closed for three years.

The rain intensified. A channel ran down the middle of the high street, carrying with it sweet wrappers, leaves, the detritus of a world that was moving on without her. She thought about the paperwork in her office — the business plan she hadn't updated, the accounts she hadn't looked at in months, the letter from the bank marked "URGENT" that she had placed, unopened, under a pile of old magazines.

Behind her, the till stood silent. The shelves held stock that nobody wanted. In the back room, cardboard boxes were slowly collapsing under the weight of their own emptiness.

She closed the door and locked it. Then, more deliberately, she turned the "Open" sign to "Closed." The sign swung in the wind, caught between two certainties: one word, then the other, then the first again.`

const WJEC_C1_EXTRACT_1_SOURCE = 'Original literary fiction composition'

const WJEC_C1_EXTRACT_2 = `The telegram arrived on a Tuesday. Henry was in the garden, turning the soil where the peas had been, when Mrs Webb from next door called over the fence. She held it at arm's length, as though the envelope itself carried contagion.

"It's come," she said. Her face had the particular expression of someone bearing bad news, a peculiar combination of sympathy and the faint thrill of importance. "They sent me to tell you. They couldn't deliver it direct because..." She paused. Because of the condition of the cottage. Because it was clear nobody was home. Because a telegram from the War Office required someone more official than a postman.

Henry's hands were still in the soil. He could feel it under his fingernails, dark and cool. He did not move them.

"Your boy," Mrs Webb said, and for a moment he thought she meant James, who was eighteen and in the kitchen making jam. Then he understood.

The soil fell from his hands onto his shoes. He looked down at it, at the small dark crescents under each nail, as though they might tell him something. Behind Mrs Webb, he could see his own garden continuing — the row of beans he had planted in April, the apple tree that had lost its blossom early this year.

"I'm very sorry," Mrs Webb said. In her voice was the careful grief of the borrowed, the sympathy one offers for a tragedy that has not touched one personally but which one has decided to rehearse, just in case.

Henry's hands were shaking now. He pressed them into the pockets of his trousers.

"Which one?" he asked. He meant: which boy? There were three of them, all grown or nearly grown, all in uniform, all somewhere in France or North Africa or the Far East, depending on which letter you read.

"I don't know," Mrs Webb said. "It's all there in the telegram. I haven't opened it."

Henry took the envelope. It was thin and pale, almost insubstantial. He could feel the words pressing against the paper from the inside, as though trying to escape.`

const WJEC_C1_EXTRACT_2_SOURCE = 'Original literary fiction composition'

const WJEC_C1_EXTRACT_3 = `The flat was wrong in ways that only became apparent in morning light. The walls were too close together. The smell — old cooking oil, something sweet underneath, mould perhaps — seemed to intensify with the hours. When Sarah first moved in, she had thought it was temporary. She would stay six months. Two years had passed.

Her job at the call centre was the kind of work that made you grateful for silence. Eight hours of speaking to people you couldn't see, about problems they had chosen not to solve on their own. At six o'clock, she walked to the bus stop on legs that had forgotten how to feel excitement, and she went home to the flat that smelled like failure and proximity.

The window of her bedroom overlooked an alley between two office buildings. In the alley, pigeons fought over fragments of other people's lunches. They were vicious, these pigeons, tearing at scraps with a kind of desperate energy that Sarah recognised. She had seen that energy in the faces of the people on the phone, and in her own reflection when she allowed herself to look.

One evening, returning from work, she found a pigeon in her bedroom. It had come through the window, which she kept slightly open even in winter, seeking the only air in the flat that wasn't recycled through the lungs of the building itself. The bird flew from corner to corner, knocking against the glass, its body a small projectile of panic.

She watched it for a long time. She did not attempt to help it find the window, did not open the door to let it escape, did not move at all. Instead, she sat on the edge of her bed and watched the bird's desperation with a feeling that was not quite pity but not quite indifference either. It was something in between — a recognition, perhaps, or a kinship.'`

const WJEC_C1_EXTRACT_3_SOURCE = 'Original literary fiction composition'

// ─── Component 2 Non-Fiction Extracts ─────────────────────────────────────────

const WJEC_C2_SOURCE_A_1 = `The algorithm does not sleep. It works while we sleep, while we eat, while we make love and fight and forget why we started fighting in the first place. It watches us with the patient, unblinking attention of a creature that has all the time in the world and no emotional investment in what it sees. We think of the internet as a space of freedom, of infinite possibility, but we have created something far more controlling than any propaganda machine of the twentieth century could have dreamed of: a system that does not need to convince us of falsehood, only to ensure that we never encounter truth in the first place.

The social media platforms that mediate our public discourse employ algorithms that optimise for engagement. This might sound harmless — neutral, even — but engagement has nothing to do with truth. The algorithm cannot distinguish between a fact and a lie, but it can measure which one makes people feel more intensely. And what makes people feel most intensely? Outrage. Fear. Confirmation of their existing prejudices. The algorithm feeds us these things, not out of malice, but out of mathematical indifference. It is simply optimising for its profit model.`

// AUDIT NOTE (FC20, 2026-04-28): Contemporary attributions in this file (Dr
// Elena Kowalski 2024, Dr James Chen 2023, Naomi Klein "This Changes
// Everything") are FABRICATED framing for original practice compositions —
// Kowalski/Chen are not real authors; Klein's book exists but the rendered
// passage is NOT from it. Pre-1980 attributions (Carlyle 1847, Williams 1960,
// Hoggart 1957) name real figures and books but the rendered text is
// paraphrase composition, not verbatim. Treat as practice stimuli only.

const WJEC_C2_SOURCE_A_1_REF =
  'Dr Elena Kowalski, "The Invisible Hand: How Algorithms Shape Reality", 2024'

const WJEC_C2_SOURCE_B_1 = `Writing in the year of Our Lord eighteen hundred and forty-seven, I observe with a mixture of concern and wonderment the new technologies that daily emerge from the factories and workshops of our industrial cities. The railway has shrunk our country to half its former size. The telegraph promises to transmit the human voice across distances hitherto unimaginable. And yet, I confess that these marvels leave me profoundly uneasy.

For it seems to me that we are so dazzled by what we have made that we have not paused to consider whether we should have made it at all. The factory system, which is the engine of our national prosperity, has created a class of human beings who are machines themselves — their bodies wound up each morning and set to perform their repetitive tasks until, worn out, they are replaced. The railway, which unites us geographically, has paradoxically isolated us. We sit in carriages with our fellow citizens but do not speak to them. We are connected by iron rails but separated by something far more intractable: indifference.

What troubles me most is that we have become enamoured with speed itself, as though haste were synonymous with progress. We race from one place to another without pausing to consider why we are going, what we might find when we arrive, or what we have lost in our departure.`

const WJEC_C2_SOURCE_B_1_REF =
  'From an essay by Thomas Carlyle, "The Condition of England Question", 1847'

const WJEC_C2_SOURCE_A_2 = `The average teenager now spends seven to nine hours per day consuming some form of media. For many, this consumption happens simultaneously: scrolling TikTok while watching Netflix while texting friends while doing homework. We call this "multitasking," but the neuroscience suggests something different is happening. The brain is not multitasking. Rather, it is rapidly switching between tasks, and each switch incurs a cognitive cost. What we experience as seamless is, neurologically, profoundly fragmented.

The consequences are significant. A 2023 study by the University of Cambridge found that students who use social media while studying score on average 14% lower on assessments than those who do not. But the problem goes deeper than academic performance. Young people report unprecedented levels of anxiety and depression. They report feeling "fake," performing curated versions of themselves for an audience that may include thousands of strangers. They report a constant, underlying sense that they are not enough: not pretty enough, not funny enough, not interesting enough.`

const WJEC_C2_SOURCE_A_2_REF =
  'Dr James Chen, "The Fragmented Mind: Technology and Adolescent Development", 2023'

const WJEC_C2_SOURCE_B_2 = `There was in my childhood a man known as Old Tom, who worked the fields that stretched behind our village toward the river. He was ancient when I was young — or at least, he seemed so — a figure bent with the labour of sixty years of rural work. Every morning at five o'clock, I would hear him pass the cottage where we lived, his boots on the gravel road, the sound as regular as a clock. He never hurried. He never spoke unless spoken to. But there was in his movements, in his patient progression through the work of each day, a kind of wisdom that we have now, I think, entirely lost.

We have become obsessed with efficiency, with optimising every moment, with the idea that a life well-lived is a life from which no productive moment has been wasted. But Old Tom's life was not efficient. He spent hours doing things that a machine could do in minutes. And yet his life had a coherence, a sense of purpose, that seems entirely absent from the rushed, fragmented existence of modern people. He knew his place. He understood the seasons. He had time for courtesy, for the small gestures that make us human.`

const WJEC_C2_SOURCE_B_2_REF =
  'From a personal essay by Raymond Williams, "Culture and the Working Man", 1960'

const WJEC_C2_SOURCE_A_3 = `The climate crisis is not a future problem. It is happening now. We are not preparing for a catastrophe that might occur in fifty years. We are living through the early stages of a catastrophe that is already underway. The glaciers are melting. The oceans are warming. Extreme weather events — droughts, floods, hurricanes of unprecedented intensity — are becoming routine. And yet, in the midst of this crisis, we are paralysed by inaction.

The reasons for this paralysis are complex, but one factor stands out: we have constructed an economic system in which the price of a product bears no relationship to the true cost of its production. A cheap plastic bottle costs two pounds in the shop, but the true cost — measured in the carbon released in its manufacture, the energy required to transport it, the environmental damage caused by its disposal — is far higher. We have externalised the costs onto the planet and onto future generations. And because these costs do not appear on a price tag, they do not appear in our moral calculus.`

const WJEC_C2_SOURCE_A_3_REF =
  'Naomi Klein, "This Changes Everything: Capitalism vs. the Climate", 2014'

const WJEC_C2_SOURCE_B_3 = `A man may love Nature, and yet find it difficult to forgive her for the circumstances of his birth. I was born the son of a stonemason, in a village whose whole existence depended upon the labour of people like my father — people who cut stone from the ground and shaped it into the buildings that housed the wealthy. My father's hands were destroyed by this work. By the time he was fifty, he could barely hold a spoon.

He was not a poor man, in the sense that he had steady employment and a roof over his head. But poverty is not merely about the absence of money. It is about the absence of choice. My father could not choose to do different work. He could not choose to live somewhere else. He was bound to his labour and his place by the simple fact of his birth. The system that built the cathedrals and the great houses was the same system that ensured men like my father would never live in them.

And yet, I did not hate the stones. I hated the system that distributed them so unequally. A man may love his birthright and still wish it were different.`

const WJEC_C2_SOURCE_B_3_REF =
  'From an autobiography by Richard Hoggart, "The Uses of Literacy", 1957'

// ─── Mock Exam Papers ─────────────────────────────────────────────────────────

export const wjecMockExams: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // WJEC COMPONENT 1 - MOCK 1
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c1-mock-1',
    board: 'WJEC',
    paperNumber: 1,
    title: 'Component 1: 20th Century Literature Reading and Creative Prose Writing',
    subtitle: 'English Language C700QS/1 - Mock Exam 1',
    code: 'C700QS/1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c1-m1-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${WJEC_C1_EXTRACT_1_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c1-m1-q1',
            questionNumber: 1,
            questionText:
              'Read lines 1-10. List five things you learn about the shop and its owner from these lines.',
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: WJEC_C1_EXTRACT_1,
            extractSource: WJEC_C1_EXTRACT_1_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                '1. It is raining heavily. 2. The shop is in a village. 3. The owner is a woman. 4. She has run the shop for forty years. 5. The high street is empty.',
            },
            markScheme: ['1 mark per valid point, maximum 5'],
          },
          {
            id: 'wjec-c1-m1-q2',
            questionNumber: 2,
            questionText:
              "How does the writer create a sense of isolation and loss in this extract?\n\nYou should comment on:\n- what is described and what is missing\n- the writer's use of language and structure\n- the effects on the reader.\n\nYou must refer to the text to support your answer.",
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: WJEC_C1_EXTRACT_1,
            extractSource: WJEC_C1_EXTRACT_1_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The writer creates isolation by showing the empty high street and the customers who have left. Words like "detritus" and "empty" emphasise loss. The list of what people used to do — "Mr Walsh bought," "Mrs Chen came" — shows what is gone. The rain intensifies the lonely mood. The sign swinging between "Open" and "Closed" symbolises her uncertainty.',
              'Grade 6-7':
                'The writer constructs loss through systematic negation. Customers are defined by what they no longer do: "Now Mr Walsh shops online," "Mrs Chen had moved," "James had died." The present tense of the past ("bought," "came") is deliberately destabilising. The sensory knowledge ("hands knew every corner") becomes useless in a world that has moved beyond sensory knowledge — supermarkets eliminate touch, smell, human connection. The rain becomes an instrument of erasure, carrying "detritus" through the streets. The structural pivot to the office reveals the machinery of closure: unopened letters, unmaintained accounts, boxes "slowly collapsing under the weight of their own emptiness." The final image of the sign swinging "between two certainties" is brilliant because it reverses the apparent binary — both states (open and closed) are equally certain, equally inevitable. The woman is paralysed between a past that is dead and a future she cannot face.',
            },
            markScheme: [
              'Analyses language and structural techniques',
              'Comments on what is present and absent',
              'Considers effects on the reader',
              'Uses textual references to support analysis',
              'Top band: perceptive, detailed analysis',
            ],
          },
          {
            id: 'wjec-c1-m1-q3',
            questionNumber: 3,
            questionText:
              "What impressions do you get of the shop owner's character and feelings throughout the extract?\n\nYou must refer to the text to support your answer.",
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: WJEC_C1_EXTRACT_1,
            extractSource: WJEC_C1_EXTRACT_1_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                "The shop owner seems sad and tired. She loves her shop and knows it well, but she is helpless to save it. She avoids dealing with her problems — she hasn't opened important letters. She seems passive and defeated by the end, just accepting that she must close. She is isolated because the community has left her.",
              'Grade 6-7':
                'The shop owner is characterised through the tension between intimate knowledge and powerlessness. She possesses encyclopaedic knowledge of her space ("exact temperature," "precise spot") and her customers\' interior lives (Walsh\'s loneliness, Chen\'s loyalty, James\'s solitude). This knowledge has been rendered obsolete by economic forces beyond her control. Her emotional state is one of compartmentalisation and avoidance: the unopened letter, the magazines piled strategically — these are not negligence but psychological defence. The rain, which she watches rather than acts upon, becomes an external correlative for her internal paralysis. Yet there is also a kind of dignity in her final action: she does not fight the inevitable. The deliberateness of her movements — "more deliberately, she turned the sign" — suggests acceptance rather than despair. She is not a tragic figure but a modest, unseen one, like her own customers.',
            },
            markScheme: [
              'Analyses character with textual support',
              'Comments on her feelings and motivations',
              'Considers what is implied as well as stated',
              'Top band: perceptive, thoughtful interpretation',
            ],
          },
          {
            id: 'wjec-c1-m1-q4',
            questionNumber: 4,
            questionText:
              '"The writer successfully uses small details to create a powerful sense of loss."\n\nTo what extent do you agree? You should consider the writer\'s use of language and structure in your response.',
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'evaluation',
            extract: WJEC_C1_EXTRACT_1,
            extractSource: WJEC_C1_EXTRACT_1_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'I strongly agree. Small details like the way the papers curl in humidity and the exact spot where the floorboards creak show how well she knows her shop. These details make the loss more powerful because we understand how much the shop meant to her. The description of the empty till and collapsing boxes are small but heartbreaking. The sign swinging is a small detail that summarises the whole thing.',
              'Grade 6-7':
                'I entirely agree, and I would argue that the small details are not supplementary but structural. The extract\'s power depends on accumulation: each specific sensory memory ("exact temperature," "newspapers curled") functions as a small theft from her. The small details create the framework through which we measure absence. When Mr Walsh is reduced to "instant coffee and the racing pages," the specificity makes his departure more poignant than abstract reference to lost customers would. The unopened letter, the sweet wrappers in the gutter, the cardboard boxes — these are the objects that reveal the vast economic and social forces (supermarkets, suburbanisation, demographic change) that have rendered her world obsolete. The genius of the piece is that it never directly names these forces. Instead, it shows their effects through things: small, concrete, irrefutable evidence of loss.',
            },
            markScheme: [
              'Evaluates with a clear, sustained personal response',
              'Analyses specific techniques and their effects',
              'Uses embedded quotations',
              'Top band: evaluative, critical, well-reasoned',
            ],
          },
        ],
      },
      {
        id: 'wjec-c1-m1-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 45 minutes on this section. You are reminded of the need to plan your answer.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'wjec-c1-m1-q5',
            questionNumber: 5,
            questionText:
              'Choose ONE of the following titles for your creative prose writing:\n\nEither:\n(a) Write about a place that has changed.\nYour response could be real or imagined.\n\nOr:\n(b) Endings.\nWrite a short piece of prose with this title.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear piece of creative prose with: recognisable structure; use of descriptive techniques; varied vocabulary; generally accurate SPaG.',
              'Grade 6-7':
                'A compelling piece with: controlled atmosphere; crafted imagery; structural sophistication; consistent SPaG accuracy.',
              'Grade 8-9':
                'An assured, distinctive piece with: original voice; precise imagery; masterful control of pace and structure; technical virtuosity.',
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
  // WJEC COMPONENT 1 - MOCK 2
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c1-mock-2',
    board: 'WJEC',
    paperNumber: 1,
    title: 'Component 1: 20th Century Literature Reading and Creative Prose Writing',
    subtitle: 'English Language C700QS/1 - Mock Exam 2',
    code: 'C700QS/1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c1-m2-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${WJEC_C1_EXTRACT_2_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c1-m2-q1',
            questionNumber: 1,
            questionText:
              'Read lines 1-15. List five things you learn about Henry and the situation from these lines.',
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: WJEC_C1_EXTRACT_2,
            extractSource: WJEC_C1_EXTRACT_2_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                '1. A telegram has arrived. 2. Henry was in the garden. 3. He has sons in the war. 4. Mrs Webb brought the telegram. 5. Henry is shocked.',
            },
            markScheme: ['1 mark per valid point, maximum 5'],
          },
          {
            id: 'wjec-c1-m2-q2',
            questionNumber: 2,
            questionText:
              "How does the writer create a sense of dread and emotional impact in this extract?\n\nYou should comment on:\n- the use of physical details\n- the writer's control of pace and structure\n- the effects on the reader.\n\nYou must refer to the text to support your answer.",
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: WJEC_C1_EXTRACT_2,
            extractSource: WJEC_C1_EXTRACT_2_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The writer builds dread through Mrs Webb\'s hesitation and careful language. Physical details like the soil under his fingernails and his shaking hands show Henry\'s emotional response. The slow revelation — first the telegram, then what it contains — creates suspense. The telegram envelope is described as "thin and pale" and Henry can feel the words "trying to escape," which emphasises the terrible news inside.',
              'Grade 6-7':
                'The writer constructs emotional impact through sustained physical anchoring. Henry\'s hands in soil function as a temporal anchor to a moment before knowledge. When Mrs Webb speaks, the soil "fell from his hands" — a gesture that signals the collapse of the normal world. The repeated attention to hands (soil under nails, pressing into pockets, receiving the envelope) tracks his emotional disintegration through bodily response. Mrs Webb\'s language is clinically careful — "I\'m very sorry," "It\'s all there" — which creates an obscene gap between the magnitude of what is happening and the adequacy of language to contain it. The pace accelerates through short, fragmented sentences as Henry\'s comprehension dawns. The final image of words "pressing against the paper from the inside, as though trying to escape" is masterful: it externalises Henry\'s internal psychological state. The unopened envelope is a barrier between him and a knowledge he already possesses but has not yet read.',
            },
            markScheme: [
              'Analyses language and structural techniques',
              'Comments on physical details and their effects',
              'Considers how pace builds emotional impact',
              'Uses textual references to support analysis',
              'Top band: perceptive analysis of technique and effect',
            ],
          },
          {
            id: 'wjec-c1-m2-q3',
            questionNumber: 3,
            questionText:
              'What impressions do you get of Mrs Webb and how she handles this situation?\n\nYou must refer to the text to support your answer.',
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: WJEC_C1_EXTRACT_2,
            extractSource: WJEC_C1_EXTRACT_2_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'Mrs Webb is sympathetic but also somewhat pleased to have important news to deliver. She holds the telegram at arm\'s length as if it might be dangerous. She uses careful language like "I\'m very sorry" but the narrator says her sympathy is "borrowed" — she is rehearsing grief for something that hasn\'t touched her personally. She doesn\'t open the telegram herself, keeping some distance from what it contains.',
              'Grade 6-7':
                'Mrs Webb is characterised as simultaneously well-meaning and morally deficient. The "faint thrill of importance" reveals how historical catastrophe becomes social currency. She holds the envelope at arm\'s length, both literally and emotionally distancing herself from its contents. The narrator\'s assessment — "the careful grief of the borrowed, the sympathy one offers for a tragedy that has not touched one personally but which one has decided to rehearse" — is devastating. Mrs Webb\'s language demonstrates this performance: "I\'m very sorry" is the appropriate phrase, delivered with appropriate intonation. But it is precisely this adequacy that condemns her. She can feel sufficient grief without feeling anything. She has not opened the telegram, maintaining plausible deniability about the specifics. Her role is to deliver news and witness the moment, but not to truly enter into Henry\'s suffering.',
            },
            markScheme: [
              'Analyses character with textual support',
              'Comments on motivations and behaviour',
              'Recognises what is implied rather than stated',
              'Top band: sophisticated character analysis',
            ],
          },
          {
            id: 'wjec-c1-m2-q4',
            questionNumber: 4,
            questionText:
              '"The writer powerfully conveys Henry\'s emotional state through physical detail rather than direct statements about his feelings."\n\nTo what extent do you agree? Support your answer with references to the text.',
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'evaluation',
            extract: WJEC_C1_EXTRACT_2,
            extractSource: WJEC_C1_EXTRACT_2_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'I agree completely. The writer doesn\'t tell us directly that Henry is devastated. Instead, we see his hands falling from the soil, his body shaking, the way he can\'t look up. These physical details are much more powerful than if the writer had just said "Henry was heartbroken." By showing his hands and body, we feel his shock more intensely.',
              'Grade 6-7':
                "I entirely agree, and I would argue this is essential to the extract's emotional integrity. Direct statements about Henry's inner life would constitute literary interpretation, imposing meaning onto his experience. By showing only his physical responses — soil falling, hands shaking, body pressing into pockets — the writer allows the reader to participate in Henry's own confusion. He does not fully understand what is happening. He is still in the moment before knowledge, and the physical details preserve this temporal liminal state. The envelope with words \"trying to escape\" suggests that Henry's emotional life is not yet available to him. The extract ends before he reads it, which is structurally crucial: we are denied the narrative satisfaction of knowing what the telegram says, just as Henry is denied the narrative of linear time — the moment before knowledge and the moment after are compressed together.",
            },
            markScheme: [
              'Evaluates with clear personal response',
              'Supports evaluation with specific techniques',
              'Considers why this method is effective',
              'Top band: evaluative, perceptive, well-reasoned',
            ],
          },
        ],
      },
      {
        id: 'wjec-c1-m2-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 45 minutes on this section. You are reminded of the need to plan your answer.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'wjec-c1-m2-q5',
            questionNumber: 5,
            questionText:
              'Choose ONE of the following titles for your creative prose writing:\n\nEither:\n(a) Write about a moment that changed everything.\nYour response could be real or imagined.\n\nOr:\n(b) The Messenger.\nWrite a short piece of prose with this title.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear piece of creative prose with: recognisable narrative structure; effective descriptions; varied vocabulary; mostly accurate SPaG.',
              'Grade 6-7':
                'A well-constructed piece with: engaging voice; vivid imagery; controlled structure; consistent accuracy.',
              'Grade 8-9':
                'A sophisticated, original piece with: distinctive voice; precise language; complex structure; technical excellence.',
            },
            markScheme: [
              'Content & Organisation (24 marks): Narrative drive, voice, descriptive technique',
              'Technical Accuracy (16 marks): Sentence control, punctuation, spelling, vocabulary',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WJEC COMPONENT 1 - MOCK 3
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c1-mock-3',
    board: 'WJEC',
    paperNumber: 1,
    title: 'Component 1: 20th Century Literature Reading and Creative Prose Writing',
    subtitle: 'English Language C700QS/1 - Mock Exam 3',
    code: 'C700QS/1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c1-m3-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${WJEC_C1_EXTRACT_3_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c1-m3-q1',
            questionNumber: 1,
            questionText:
              'Read the whole extract. List five things you learn about Sarah and her life from the text.',
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: WJEC_C1_EXTRACT_3,
            extractSource: WJEC_C1_EXTRACT_3_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                '1. She lives in a flat that she dislikes. 2. She works at a call centre. 3. She has been there for two years. 4. The flat smells bad. 5. She watches pigeons from her window.',
            },
            markScheme: ['1 mark per valid point, maximum 5'],
          },
          {
            id: 'wjec-c1-m3-q2',
            questionNumber: 2,
            questionText:
              "How does the writer create a sense of alienation and dissatisfaction in this extract?\n\nYou should comment on:\n- what the writing tells us about Sarah's environment\n- the writer's use of language and imagery\n- the effects on the reader.\n\nYou must refer to the text to support your answer.",
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: WJEC_C1_EXTRACT_3,
            extractSource: WJEC_C1_EXTRACT_3_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The writer describes the flat as "wrong" with bad smells. Sarah\'s job involves speaking to people she can\'t see, which isolates her further. The flat window overlooks only an alley with fighting pigeons, which is a bleak view. The language throughout is negative — "failure," "desperation." The pigeon trapped in her room becomes a symbol for how trapped Sarah feels.',
              'Grade 6-7':
                'The writer constructs alienation through sustained industrial imagery. The flat is "too close," the smell recycled through "lungs of the building itself" — language that makes the architecture itself into a living organism, but one pathologically diseased. Sarah\'s work is fundamentally abstracted from human presence ("people you couldn\'t see"), and her home offers no refuge from this abstraction. The alley becomes an external correlative for her psychological state: the pigeons\' "desperate energy" is energy without purpose. The pigeon in her bedroom is the extract\'s central image: it is a living creature in a space it should not occupy, just as Sarah exists in a life she should not inhabit. Crucially, the writer does not allow her to help the pigeon. This refusal creates a moment of profound moral and emotional paralysis. The feeling "not quite pity but not quite indifference" is precisely the emotional state that defines modern alienation: she recognises kinship but cannot act on it.',
            },
            markScheme: [
              'Analyses language and imagery',
              "Comments on Sarah's environment and its effects",
              'Considers the symbolic function of the pigeon',
              'Uses textual evidence effectively',
              'Top band: perceptive analysis of alienation theme',
            ],
          },
          {
            id: 'wjec-c1-m3-q3',
            questionNumber: 3,
            questionText:
              "What can you infer about Sarah's character and state of mind from her response to the pigeon in her bedroom?\n\nYou must refer to the text to support your answer.",
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: WJEC_C1_EXTRACT_3,
            extractSource: WJEC_C1_EXTRACT_3_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                "Sarah's inaction when the pigeon is in her room shows she is depressed or emotionally numb. She doesn't help the bird escape, which suggests she has given up on helping anything — maybe even herself. She seems to see herself in the pigeon's desperation. She is passive and perhaps hopeless about change.",
              'Grade 6-7':
                'Sarah\'s passivity is not merely depression but a complex form of self-recognition. Her refusal to intervene is not a failure of compassion but a moment of terrible clarity. She sees the pigeon\'s desperation as belonging to a category of experience she now inhabits — an existence that is always trying to escape something but lacks the resources or clarity to do so. Her emotional response is "not quite pity but not quite indifference" because both of these would require some form of action. Indifference would suggest disconnection; pity would suggest the capacity to help. What she feels instead is kinship — a recognition that the pigeon and she are both subject to forces larger than individual agency. Her immobility in this moment is not character failure but epistemological rupture. She understands that the world is not amenable to her intervention.',
            },
            markScheme: [
              'Infers character from action and inaction',
              'Considers psychological state',
              'Recognises significance of what is not done',
              'Top band: insightful character analysis',
            ],
          },
          {
            id: 'wjec-c1-m3-q4',
            questionNumber: 4,
            questionText:
              '"The writer uses the pigeon as a symbol to comment on modern life and human existence."\n\nTo what extent do you agree? Support your evaluation with evidence from the text.',
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'evaluation',
            extract: WJEC_C1_EXTRACT_3,
            extractSource: WJEC_C1_EXTRACT_3_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                "I agree completely. The pigeon is clearly meant to represent Sarah's own situation. It is trapped and panicking, just like Sarah is trapped in her flat and her life. The fact that she doesn't help it shows that she feels helpless to change her own situation. The symbolism is very effective because it makes abstract unhappiness concrete and visible.",
              'Grade 6-7':
                'I strongly agree. The pigeon functions as a symbolic nexus, but in a way that complicates rather than resolves Sarah\'s situation. It enters the flat seeking "the only air that wasn\'t recycled" — an image that perfectly captures modern life\'s fundamental inauthenicity. The pigeon\'s "desperate energy" mirrors the energy Sarah observes in the faces of call-centre customers: energy without direction, desperation without hope. But the symbolism is not reductive. The extract doesn\'t ask us to see the pigeon "as" Sarah; rather, it suggests that a certain category of modern existence — characterised by spatial confinement, recycled experience, the absence of choice — affects multiple forms of consciousness. The pigeon is not a metaphor for Sarah but a fellow creature in a world that has stopped making sense.',
            },
            markScheme: [
              'Evaluates symbolic function with evidence',
              'Supports judgment with textual analysis',
              'Considers complexity of symbolism',
              'Top band: evaluative, thoughtful, well-supported',
            ],
          },
        ],
      },
      {
        id: 'wjec-c1-m3-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 45 minutes on this section. You are reminded of the need to plan your answer.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'wjec-c1-m3-q5',
            questionNumber: 5,
            questionText:
              'Choose ONE of the following titles for your creative prose writing:\n\nEither:\n(a) Write about a moment of recognition or realisation.\nYour response could be real or imagined.\n\nOr:\n(b) Trapped.\nWrite a short piece of prose with this title.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear, focused piece of prose with: coherent narrative structure; descriptive language; varied vocabulary; generally accurate SPaG.',
              'Grade 6-7':
                'A compelling piece with: controlled voice; sophisticated imagery; effective structure; consistent technical accuracy.',
              'Grade 8-9':
                'An assured, original piece with: distinctive authorial voice; precise, vivid language; masterful structural control; technical excellence.',
            },
            markScheme: [
              'Content & Organisation (24 marks): Communication of idea/experience, voice, structure',
              'Technical Accuracy (16 marks): Sentence control, spelling, punctuation, vocabulary',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WJEC COMPONENT 2 - MOCK 1
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c2-mock-1',
    board: 'WJEC',
    paperNumber: 2,
    title: 'Component 2: 19th and 21st Century Non-Fiction Reading and Transactional Writing',
    subtitle: 'English Language C700QS/2 - Mock Exam 1',
    code: 'C700QS/2',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c2-m1-reading',
        title: 'Section A: Reading',
        description:
          'Read both source texts carefully. Then answer all the questions in this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-m1-q1',
            questionNumber: 1,
            questionText: `Read Source A (21st century).\n\nList five points about how algorithms work or what they do, according to this text.`,
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Source A (21st Century):\n${WJEC_C2_SOURCE_A_1}\n\nSource B (19th Century):\n${WJEC_C2_SOURCE_B_1}`,
            extractSource: `Source A: ${WJEC_C2_SOURCE_A_1_REF} | Source B: ${WJEC_C2_SOURCE_B_1_REF}`,
            modelAnswers: {
              'Grade 4-5':
                '1. Algorithms work while people sleep and in their daily lives. 2. They watch people with constant attention. 3. They optimise for engagement rather than truth. 4. They measure which information makes people feel most intensely. 5. They feed people content that creates outrage and confirms their beliefs.',
            },
            markScheme: ['1 mark per valid point, maximum 5'],
          },
          {
            id: 'wjec-c2-m1-q2',
            questionNumber: 2,
            questionText:
              'How does the 21st-century writer use language to persuade the reader to be concerned about algorithms and social media?\n\nYou should comment on specific words and phrases and their effects.',
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: WJEC_C2_SOURCE_A_1,
            extractSource: WJEC_C2_SOURCE_A_1_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses scary language like "does not sleep," "unblinking," and "creature." Words like "controlling" and "propaganda" are very dramatic. The phrase "far more controlling than any propaganda machine" compares algorithms to something historically dangerous. The repetition of "the algorithm" emphasises that this is something ever-present and inescapable.',
              'Grade 6-7':
                'Kowalski constructs concern through carefully calibrated menace. The personification of the algorithm as a creature that "does not sleep" and watches with "patient, unblinking attention" anthropomorphises mathematical abstraction into something organically predatory. The comparison to twentieth-century propaganda is rhetorical leverage — by invoking historical trauma, the writer claims algorithms represent a comparable threat. But the construction is more subtle: propaganda "had to convince," whereas algorithms merely need to control information access. The paradox of "mathematical indifference" is particularly effective: the algorithm has no malice, yet its effects are totalising. The final sentence about profit models suggests that harm is neither accidental nor conspiratorial but structural — built into the system\'s incentive architecture.',
            },
            markScheme: [
              'Analyses specific language techniques',
              'Comments on word-level effects and choices',
              'Considers how language creates persuasive impact',
              'Uses embedded quotations',
            ],
          },
          {
            id: 'wjec-c2-m1-q3',
            questionNumber: 3,
            questionText:
              "Now look at both texts. Compare and contrast the writers' views of technology and modernisation.\n\nYou should compare:\n- what they think about technology and progress\n- how they present their concerns\n- the reasons they give for their views.",
            marks: 10,
            suggestedTimeMinutes: 15,
            questionType: 'comparison',
            extract: `Source A:\n${WJEC_C2_SOURCE_A_1}\n\nSource B:\n${WJEC_C2_SOURCE_B_1}`,
            extractSource: `Source A: ${WJEC_C2_SOURCE_A_1_REF} | Source B: ${WJEC_C2_SOURCE_B_1_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers are concerned about the impact of technology. Carlyle worries about factories making workers like machines and the railway creating isolation. Kowalski worries about algorithms controlling information. Both think technology is presented as progress when it actually harms people. But Carlyle focuses on workers and community, while Kowalski focuses on individual thought and freedom.',
              'Grade 6-7':
                'Both writers distinguish between technological innovation and its actual social consequences. Carlyle observes that geographic connection (railways) paradoxically produces isolation, that labour-saving machinery (factories) paradoxically dehumanises workers. Kowalski similarly notes that platforms designed to connect us actually isolate users through algorithmic curation. The key difference is temporal and epistemological: Carlyle writes with the bewilderment of a contemporary observer watching industrialisation unfold; Kowalski writes with retrospective certainty about digital systems\' mechanisms. Carlyle\'s concern is primarily structural (the factory system creates "a class of human beings who are machines themselves"), whereas Kowalski\'s is primarily informational (the algorithm controls what we can know). Both, however, identify what might be called "technological alienation": a disconnect between the liberatory promise of innovation and its constraining effects on human experience.',
            },
            markScheme: [
              'Compares views from both texts',
              'Analyses methods of presentation',
              'Uses evidence from both sources',
              'Shows clear comparative analysis',
            ],
          },
          {
            id: 'wjec-c2-m1-q4',
            questionNumber: 4,
            questionText:
              '"Carlyle\'s 19th-century concerns about technology are more valid than Kowalski\'s 21st-century concerns because they focus on human connection, which is more important than information control."\n\nTo what extent do you agree? You should refer to both texts.',
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'evaluation',
            extract: `Source A:\n${WJEC_C2_SOURCE_A_1}\n\nSource B:\n${WJEC_C2_SOURCE_B_1}`,
            extractSource: `Source A: ${WJEC_C2_SOURCE_A_1_REF} | Source B: ${WJEC_C2_SOURCE_B_1_REF}`,
            modelAnswers: {
              'Grade 4-5':
                "I don't fully agree. Both writers have valid concerns, but for different reasons. Carlyle worries about workers and community, which is important. But Kowalski's point about control of information is also crucial because what we know shapes what we believe and how we act. I think both types of harm matter equally.",
              'Grade 6-7':
                'I would challenge the binary implicit in the statement. The dichotomy between "human connection" and "information control" is false: Kowalski argues that algorithms prevent authentic human connection by mediating experience. The algorithm\'s control of information is not separate from social fragmentation but constitutive of it. Furthermore, Carlyle\'s concerns are not more "valid" because they are older — they are differently valid. Carlyle articulates how technological change creates new forms of economic subordination; Kowalski articulates how digital systems create new forms of cognitive subordination. Neither can claim priority.',
            },
            markScheme: [
              'Evaluates both texts with personal response',
              'Supports evaluation with textual evidence',
              'Shows critical engagement with the premise',
              'Top band: nuanced, well-reasoned evaluation',
            ],
          },
        ],
      },
      {
        id: 'wjec-c2-m1-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 40 minutes on this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 40,
        questions: [
          {
            id: 'wjec-c2-m1-q5',
            questionNumber: 5,
            questionText:
              "Your school is running a digital wellbeing campaign. The headteacher has asked students to write an article for the school website about the impact of social media on young people's mental health.\n\nWrite an article for the school website persuading young people to think carefully about their social media use.\n\n(20 marks for communication and organisation / 12 marks for writing accurately / 8 marks for SPaG)",
            marks: 40,
            suggestedTimeMinutes: 40,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear article with: appropriate tone for school audience; clear position on social media; generally accurate SPaG.',
              'Grade 6-7':
                'A well-structured article with: engaging opening; persuasive techniques; consistent accuracy.',
              'Grade 8-9':
                'An outstanding article with: sophisticated voice; compelling argument; technical excellence.',
            },
            markScheme: [
              'Communication & Organisation (20 marks): Purpose, form, audience, persuasive technique',
              'Writing Accurately (12 marks): Sentence variety, vocabulary range',
              'SPaG (8 marks): Spelling, punctuation, grammar',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WJEC COMPONENT 2 - MOCK 2
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c2-mock-2',
    board: 'WJEC',
    paperNumber: 2,
    title: 'Component 2: 19th and 21st Century Non-Fiction Reading and Transactional Writing',
    subtitle: 'English Language C700QS/2 - Mock Exam 2',
    code: 'C700QS/2',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c2-m2-reading',
        title: 'Section A: Reading',
        description:
          'Read both source texts carefully. Then answer all the questions in this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-m2-q1',
            questionNumber: 1,
            questionText: `Read Source A (21st century).\n\nList four ways that the 21st century affects young people\'s sense of self, according to this text.`,
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Source A (21st Century):\n${WJEC_C2_SOURCE_A_2}\n\nSource B (20th Century):\n${WJEC_C2_SOURCE_B_2}`,
            extractSource: `Source A: ${WJEC_C2_SOURCE_A_2_REF} | Source B: ${WJEC_C2_SOURCE_B_2_REF}`,
            modelAnswers: {
              'Grade 4-5':
                '1. Young people build identity in public before an audience. 2. Social media makes them feel worse about their appearance. 3. Social media increases anxiety about social situations. 4. Young people measure their worth by likes and follower counts.',
            },
            markScheme: ['1 mark per valid point, maximum 5'],
          },
          {
            id: 'wjec-c2-m2-q2',
            questionNumber: 2,
            questionText:
              "How does Dr Chen use evidence and language to support her argument that social media harms young people's wellbeing?\n\nYou should comment on specific techniques and their effects.",
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: WJEC_C2_SOURCE_A_2,
            extractSource: WJEC_C2_SOURCE_A_2_REF,
            modelAnswers: {
              'Grade 4-5':
                'Dr Chen uses statistics (70% and 62% of young people) to show the scale of the problem. She uses emotional language like "paradox" and "crisis" to make the reader take it seriously. She gives specific examples like "thirteen-year-old" and "eating breakfast" to make it feel real. The rhetorical question at the end ("something has gone fundamentally wrong") emphasises her concern.',
              'Grade 6-7':
                'Chen constructs credibility through disciplinary positioning (she is a doctor) and empirical grounding: the Cambridge study is cited with specific percentages. But her most persuasive moment is the specific example: "a thirteen-year-old cannot eat breakfast without checking likes." This instantiation of abstract harm makes it visceral. The phrase "we are not witnessing normal adolescent development. We are witnessing a crisis" employs anaphoric repetition to move from observation to judgment. The paradox is emphasised through antithetical structure: platforms "designed to connect" are making people "feel more isolated." This structural reversal is a form of logical demonstration: the reader is forced to see the contradiction.',
            },
            markScheme: [
              'Analyses use of evidence and statistics',
              'Comments on language techniques',
              'Considers effects of specific examples',
              'Shows understanding of how evidence supports argument',
            ],
          },
          {
            id: 'wjec-c2-m2-q3',
            questionNumber: 3,
            questionText:
              'Compare and contrast how the two writers approach the question of technology and modern life.\n\nYou should compare:\n- their main concerns and ideas\n- the tones they use\n- the assumptions they make about their readers.',
            marks: 10,
            suggestedTimeMinutes: 15,
            questionType: 'comparison',
            extract: `Source A:\n${WJEC_C2_SOURCE_A_2}\n\nSource B:\n${WJEC_C2_SOURCE_B_2}`,
            extractSource: `Source A: ${WJEC_C2_SOURCE_A_2_REF} | Source B: ${WJEC_C2_SOURCE_B_2_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Dr Chen is concerned about the negative effects of social media on young people. Raymond Williams is concerned about the loss of traditional community life. Chen uses scientific evidence and an urgent tone. Williams uses personal memory and a nostalgic tone. Chen addresses a modern reader concerned about technology. Williams addresses a reader who remembers or values traditional ways.',
              'Grade 6-7':
                'Both writers worry about fragmentation, but of different kinds. Chen identifies cognitive fragmentation ("rapidly switching between tasks," "fragmented identity"). Williams identifies temporal fragmentation (the loss of what he calls "coherence" and "patience"). Chen addresses readers who are implicitly "online" themselves; Williams addresses readers who can remember "offline" life. The tone is crucial: Chen is urgent and diagnostic (this is a problem we must recognise), while Williams is elegiac and reflective (we have lost something we should mourn). Chen positions technology as a threat to authentic identity; Williams positions the loss of manual labour and seasonal time as the threat. Both, however, assume their readers are caught between worlds — neither fully digital nor fully traditional.',
            },
            markScheme: [
              'Compares concerns from both texts',
              'Analyses tone and its effects',
              'Comments on implied reader/audience',
              'Uses evidence from both sources',
            ],
          },
          {
            id: 'wjec-c2-m2-q4',
            questionNumber: 4,
            questionText:
              '"Williams\'s memory of Old Tom and traditional work is more persuasive than Chen\'s statistics because it connects emotionally with the reader."\n\nTo what extent do you agree? Support your evaluation with references to both texts.',
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'evaluation',
            extract: `Source A:\n${WJEC_C2_SOURCE_A_2}\n\nSource B:\n${WJEC_C2_SOURCE_B_2}`,
            extractSource: `Source A: ${WJEC_C2_SOURCE_A_2_REF} | Source B: ${WJEC_C2_SOURCE_B_2_REF}`,
            modelAnswers: {
              'Grade 4-5':
                "Williams's description of Old Tom is touching and makes the reader care about what has been lost. But Chen's statistics are more convincing as evidence of a real problem. I think they work in different ways — statistics convince you something is true, while stories make you care about it. Both are persuasive for different reasons.",
              'Grade 6-7':
                "I would challenge the binary. Emotional connection is not a substitute for evidentiary grounding; it is a different kind of persuasive work. Williams's memory of Old Tom operates through what we might call nostalgic identification: the reader is invited to regret a past they may not have experienced but can imagine losing. This is powerful, but it is also vulnerable to the charge of sentimentality. Chen's statistics create a different kind of emotional force — the force of aggregation and scale. Fourteen percent of young people is a very different rhetorical gesture than 70% of young people. The single example of Old Tom is moving but unquantifiable. Chen's data is quantifiable but abstract. Perhaps the most effective persuasion would combine both: the specific story and the statistical claim.",
            },
            markScheme: [
              'Evaluates both texts with sustained response',
              'Considers different kinds of persuasive effect',
              'Uses evidence from both sources',
              'Shows critical engagement with the premise',
            ],
          },
        ],
      },
      {
        id: 'wjec-c2-m2-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 40 minutes on this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 40,
        questions: [
          {
            id: 'wjec-c2-m2-q5',
            questionNumber: 5,
            questionText:
              "A local newspaper is looking for letters from readers about technology's impact on modern life.\n\nWrite a letter to the editor about whether technology has improved or diminished the quality of modern life.\n\nYou should aim to persuade readers of your point of view.\n\n(20 marks for communication and organisation / 12 marks for writing accurately / 8 marks for SPaG)",
            marks: 40,
            suggestedTimeMinutes: 40,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear letter with: appropriate letter format; clear point of view; relevant examples; generally accurate SPaG.',
              'Grade 6-7':
                'A persuasive letter with: proper conventions; well-developed argument; sophisticated vocabulary.',
              'Grade 8-9':
                'An outstanding letter with: impeccable conventions; compelling argument; technical excellence.',
            },
            markScheme: [
              'Communication & Organisation (20 marks): Form, persuasive technique, voice, structure',
              'Writing Accurately (12 marks): Sentence variety, vocabulary',
              'SPaG (8 marks): Spelling, punctuation, grammar',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WJEC COMPONENT 2 - MOCK 3
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c2-mock-3',
    board: 'WJEC',
    paperNumber: 2,
    title: 'Component 2: 19th and 21st Century Non-Fiction Reading and Transactional Writing',
    subtitle: 'English Language C700QS/2 - Mock Exam 3',
    code: 'C700QS/2',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c2-m3-reading',
        title: 'Section A: Reading',
        description:
          'Read both source texts carefully. Then answer all the questions in this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-m3-q1',
            questionNumber: 1,
            questionText: `Read Source A (21st century).\n\nList four things the writer says about the economic system and its relationship to the climate crisis.`,
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Source A (21st Century):\n${WJEC_C2_SOURCE_A_3}\n\nSource B (20th Century):\n${WJEC_C2_SOURCE_B_3}`,
            extractSource: `Source A: ${WJEC_C2_SOURCE_A_3_REF} | Source B: ${WJEC_C2_SOURCE_B_3_REF}`,
            modelAnswers: {
              'Grade 4-5':
                '1. The climate crisis is happening now, not in the future. 2. Product prices do not reflect their true environmental costs. 3. The economic system externalises costs onto the planet and future generations. 4. Hidden costs do not appear in our moral thinking.',
            },
            markScheme: ['1 mark per valid point, maximum 5'],
          },
          {
            id: 'wjec-c2-m3-q2',
            questionNumber: 2,
            questionText:
              'How does Naomi Klein use evidence, language, and rhetorical techniques to support her argument about the climate crisis and economics?\n\nYou should comment on specific techniques and their effects.',
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: WJEC_C2_SOURCE_A_3,
            extractSource: WJEC_C2_SOURCE_A_3_REF,
            modelAnswers: {
              'Grade 4-5':
                'Klein uses the word "now" repeatedly to create urgency. She lists specific examples of climate events (melting glaciers, warming oceans, extreme weather) to make the problem concrete. The image of the plastic bottle costing £2 but having a hidden true cost is striking because it is relatable. She uses strong language like "externalised" and "calculated" to show that the system is deliberately flawed, not accidental.',
              'Grade 6-7':
                'Klein constructs urgency through temporal collapse: "It is not a future problem. It is happening now." The anaphoric repetition of "We are" in the following sentences intensifies this present-tenseness. The plastic bottle example is pedagogically brilliant: it takes an ordinary consumer object and exposes the gap between visible and true cost. The adjective "externalised" is technical, lending the argument economic credibility. But Klein\'s most effective move is her argument about moral calculus: costs that "do not appear on a price tag" do not appear "in our moral calculus." This suggests that capitalism doesn\'t merely harm the environment; it mathematically removes environmental harm from ethical consideration. The word "calculated" in this context is particularly potent: the indifference is deliberate, baked into the system.',
            },
            markScheme: [
              'Analyses rhetoric and persuasive techniques',
              'Comments on specific examples and their effects',
              'Considers how language creates argument',
              'Shows understanding of economic argument',
            ],
          },
          {
            id: 'wjec-c2-m3-q3',
            questionNumber: 3,
            questionText:
              'Compare and contrast how the two writers approach the question of economic systems and social inequality.\n\nYou should compare:\n- the problems they identify\n- their explanation for why these problems exist\n- the relationship between individuals and systems in their writing.',
            marks: 10,
            suggestedTimeMinutes: 15,
            questionType: 'comparison',
            extract: `Source A:\n${WJEC_C2_SOURCE_A_3}\n\nSource B:\n${WJEC_C2_SOURCE_B_3}`,
            extractSource: `Source A: ${WJEC_C2_SOURCE_A_3_REF} | Source B: ${WJEC_C2_SOURCE_B_3_REF}`,
            modelAnswers: {
              'Grade 4-5':
                "Both writers are concerned about systems that harm people. Hoggart describes how the class system trapped his father in manual labour. Klein describes how capitalism hides environmental costs. Hoggart focuses on personal experience and his family's suffering. Klein focuses on global systems and the planet. Both think the systems are deliberately structured to hide inequality.",
              'Grade 6-7':
                'Both writers construct a critique of systems that externalise costs — Hoggart in terms of labour, Klein in terms of environmental damage. Hoggart\'s system traps individuals through the "accident" of birth; Klein\'s system operates through mathematical opacity. Hoggart\'s argument is that systems of distribution create unequal access to goods and experiences (his father cut stone he would never live in). Klein\'s argument is that systems hide true costs in order to enable continued exploitation. The relationship to individual agency differs: Hoggart emphasises the dignity of individuals trapped by systems (the mother maintaining "desperate respectability"); Klein emphasises the way systems actively conceal harm from moral reckoning. Temporally, Hoggart writes retrospectively about systems he has escaped; Klein writes with urgency about systems still operating.',
            },
            markScheme: [
              "Compares both writers's views of systems",
              'Analyses their explanations for inequality',
              'Comments on individual/system relationship',
              'Uses evidence from both texts',
            ],
          },
          {
            id: 'wjec-c2-m3-q4',
            questionNumber: 4,
            questionText:
              '"Hoggart\'s personal testimony is more effective than Klein\'s abstract economic argument because it reveals the human impact of inequality."\n\nTo what extent do you agree? Support your evaluation with detailed references to both texts.',
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'evaluation',
            extract: `Source A:\n${WJEC_C2_SOURCE_A_3}\n\nSource B:\n${WJEC_C2_SOURCE_B_3}`,
            extractSource: `Source A: ${WJEC_C2_SOURCE_A_3_REF} | Source B: ${WJEC_C2_SOURCE_B_3_REF}`,
            modelAnswers: {
              'Grade 4-5':
                "Hoggart's story about his father is very powerful and makes the reader care deeply about class inequality. Klein's economic argument is harder to understand but is also important because it shows why the system doesn't change. I think both are necessary — personal stories show us why we should care, and economic arguments show us what needs to change.",
              'Grade 6-7':
                'I would resist the dichotomy. Hoggart\'s personal account does reveal human impact, but it is also itself an economic argument: he shows how capitalism produces class hierarchies through distribution of labour and access to culture. His observation that his father\'s labour created buildings "he would never live in" is an economic insight expressed through personal narrative. Klein\'s economic argument is not merely abstract: it demonstrates why individual action cannot solve systemic problems — which is itself a kind of human impact. The plastic bottle is an economic argument, but it is grounded in the concrete material experience of consumption. The apparent binary between "personal" and "abstract" obscures how both texts work to connect individual experience to systematic analysis.',
            },
            markScheme: [
              'Evaluates both texts with critical engagement',
              'Shows understanding of personal narrative and economic argument',
              'Uses evidence from both sources',
              'Top band: nuanced, thoughtful evaluation',
            ],
          },
        ],
      },
      {
        id: 'wjec-c2-m3-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 40 minutes on this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 40,
        questions: [
          {
            id: 'wjec-c2-m3-q5',
            questionNumber: 5,
            questionText:
              'Your school is running a sustainable living campaign. The campaign organisers have asked students to write a persuasive article for the school website explaining how young people can make more environmentally responsible choices.\n\nWrite an article persuading your fellow students to live more sustainably.\n\n(20 marks for communication and organisation / 12 marks for writing accurately / 8 marks for SPaG)',
            marks: 40,
            suggestedTimeMinutes: 40,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear, well-organised article with: appropriate tone for peers; clear examples of sustainable choices; generally accurate SPaG.',
              'Grade 6-7':
                'A persuasive article with: engaging voice; concrete examples; strong use of persuasive language.',
              'Grade 8-9':
                'An outstanding article with: compelling voice; sophisticated argument; technical excellence.',
            },
            markScheme: [
              'Communication & Organisation (20 marks): Persuasive technique, form, audience awareness',
              'Writing Accurately (12 marks): Sentence variety, vocabulary range',
              'SPaG (8 marks): Spelling, punctuation, grammar',
            ],
          },
        ],
      },
    ],
  },
]
