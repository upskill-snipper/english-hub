// @ts-nocheck
// ─── OCR Paper 2 Mock Exams — Exploring Effects and Impact (J351/02) ────────
// Five unique papers with fiction/literary non-fiction extracts.

import type { MockExamPaper } from '../mock-exams'

// ─── Extracts ───────────────────────────────────────────────────────────────

const EXTRACT_01 = `The house had been waiting. That was the only way to explain the quality of its silence — not the passive quiet of an empty building, but the held-breath stillness of something that knows you are coming and has prepared itself accordingly.

Clara pushed the front door and it swung inward without resistance, as though the house were inviting her inside. The hallway stretched ahead, long and narrow, papered in a pattern of dark green vines that seemed, in the failing light, to be growing — creeping upward from the skirting boards and reaching toward the ceiling with slow, vegetable patience. The air was thick and sweet, like overripe fruit, and beneath it was something else: a cold, mineral smell, the scent of stone and standing water.

She had been told the house was empty. The estate agent had said so quite clearly, smiling his professional smile: "Vacant for three years. Probate complications." But empty was not the right word. Every room she passed seemed occupied by the memory of its former inhabitants. A chair stood at an angle to the fireplace, as though someone had just risen from it. A book lay open on a side table, its pages yellowed and curled, frozen mid-sentence. In the kitchen, a single cup sat on the draining board, a dark ring of tannin marking where the tea had been.

It was in the upstairs corridor that she first heard it. A low, rhythmic sound from behind the door at the far end — not quite breathing, not quite tapping, but something between the two. A sound that had no business existing in a house that had been empty for three years.

Clara stopped. The corridor seemed to lengthen before her, the door at its end receding with each heartbeat. The wallpaper vines twisted in her peripheral vision. And the sound continued — patient, unhurried, certain — as though it had been waiting, just as the house had been waiting, for someone to come and hear it.`

const EXTRACT_01_SOURCE = 'Original Gothic fiction composition'

const EXTRACT_02 = `The bombardment had stopped an hour ago but the silence that followed was worse. It was a silence that pressed against the eardrums, a silence so complete that Private Ellis could hear the blood moving through his own veins and the small, wet sounds of the mud beneath him adjusting to the absence of concussion.

He lay in the crater with his face against the earth, breathing in the smell of churned soil and cordite and something sweet and terrible that he would not name. His left arm was beneath him at an angle that could not be natural, but he felt no pain — only a spreading numbness that seemed to be climbing from his fingers toward his shoulder with the slow deliberation of rising water.

Around him, the landscape had been remade. Where once there had been fields — he had seen the photographs, the gentle farmland of northern France — there was now a moonscape of craters and shattered stumps, everything reduced to the same uniform brown. The wire coiled between the lines like brambles from a nightmare, and here and there, shapes lay among the mud that he forced his eyes to skip over, registering them only as interruptions in the terrain.

A bird sang. The sound was so unexpected, so absurdly beautiful in that wrecked place, that Ellis felt his eyes fill with tears. It was a blackbird, perched on the stump of what had once been an oak tree, and it sang as though nothing had happened — as though the world were still whole, still green, still capable of mornings. The melody rose and fell in the grey air, each note as precise and deliberate as a struck bell.

Ellis closed his eyes. The numbness had reached his elbow now. Above him, the blackbird continued its song, indifferent and magnificent, the last beautiful thing in a world that had forgotten what beauty was.`

const EXTRACT_02_SOURCE = 'Original war fiction composition'

const EXTRACT_03 = `She had always been good at knowing what other people were thinking. Not in any supernatural sense — she did not believe in mind-reading, or auras, or any of the things her mother had believed in — but in the ordinary, observable way of someone who had spent her childhood watching faces. When you grow up uncertain of your welcome, you learn to read a room the way a sailor reads the sky: constantly, instinctively, with a vigilance that becomes so habitual you forget it is there.

Nadia sat in the therapist's waiting room and studied the other patients. The man by the window was afraid but trying to hide it — she could tell by the way he held his magazine, gripping it too tightly, his eyes fixed on a single point on the page. The woman in the blue coat was angry, though she was smiling — the smile sat on her face like an object placed there by someone else, and beneath it her jaw was clenched so hard that the muscles in her temples flickered.

These observations came to Nadia without effort, the way breathing came, the way blinking came. The problem — the reason she was here, in this room with its neutral carpet and its careful watercolours and its box of tissues placed just so on the low table — was that she could not turn it off. She read people the way other people read words: automatically, compulsively, unable to look at a face without decoding it. And the thing about reading people is that most of what you find is pain. Concealed, managed, compartmentalised pain — but pain nonetheless.

It was exhausting. It was like walking through a crowd of people who were all, silently, screaming.

Her name was called. She stood, smoothed her skirt, arranged her features into an expression of calm competence — she was good at that, very good, she had practised it since she was seven years old — and walked toward the door. The therapist would see a composed young woman. Nadia wondered, with the detachment that was her particular defence, how long it would take for someone trained in reading people to see past the person Nadia had built and find the one she had hidden.`

const EXTRACT_03_SOURCE = 'Original psychological fiction composition'

const EXTRACT_04 = `The summer Tom turned fourteen was the summer the river dried up. Not completely — there was still a trickle at the deepest point, a thin thread of brown water that crept between the exposed stones like something ashamed of itself — but enough that the old swimming hole where three generations of children had learned to dive was reduced to a muddy depression fringed with cracked earth.

Tom stood on the bank and looked at what remained. The rope swing still hung from the oak branch, its frayed end dangling above dry ground, and the flat rock where his father had sunbathed as a boy protruded from the riverbed like a grey shoulder shrugging itself free. Everything that had been hidden beneath the water was now revealed: rusted cans, a bicycle wheel furred with algae, the broken neck of a bottle glinting in the sun. The river had kept its secrets for years, and now, stripped bare, it looked ashamed.

His grandfather had warned him this would happen. "The river remembers," the old man had said, sitting in his chair on the porch with his hands folded over his stick and his eyes fixed on something Tom could not see. "It remembers when it was wide and deep and cold, and it remembers every summer they took more than they gave back. Water has a longer memory than people, Tom. Water holds a grudge."

Tom had not understood then. He was beginning to understand now. The fields beyond the river were yellow where they should have been green, and the cattle stood in whatever shade they could find, their sides heaving. Mrs Kenworth's garden, which had won prizes every year since before Tom was born, was a cemetery of brown stalks. The whole village seemed to be holding its breath, waiting for rain that the sky refused to deliver.

That evening, Tom sat on the porch where his grandfather used to sit and watched the sun go down over the dry riverbed. He was fourteen years old, and he understood for the first time that things did not last — that the world he had assumed was permanent was, in fact, as fragile as the thread of water still creeping between the stones.`

const EXTRACT_04_SOURCE = 'Original coming-of-age fiction composition'

const EXTRACT_05 = `The forest floor was a book written in a language most people had forgotten how to read. Dr Anya Marsh crouched beside a fallen oak and traced the lines of fungal growth that spread across its bark in patterns as intricate as circuitry. Beneath her fingers, the wood was soft and warm — not the warmth of sunlight, but the warmth of decomposition, of a thousand organisms converting death into the raw materials of new life.

She had been studying this particular patch of ancient woodland for seven years, and in that time she had come to understand something that still astonished her: the trees were talking to each other. Not in words, not in any way that would satisfy the sceptics who dismissed her research as anthropomorphism, but through a network of fungal threads — mycorrhizal connections — that linked root to root beneath the soil in a web of mutual exchange. Carbon, nitrogen, phosphorus, water: the currency of survival, traded between species in transactions that defied the competitive model of evolution she had been taught as an undergraduate.

The old oak she knelt beside was dying. Its crown was thin, its bark splitting, its roots weakened by decades of drought and disease. But it was not dying alone. Through the fungal network, it was sending its remaining carbon stores outward — to the young birches at the clearing's edge, to the holly that grew in its shadow, even to the beech on the far side of the ridge. It was, in the only language available to it, saying goodbye. Or perhaps it was saying something more practical: here, take this, use it, grow.

Above her, a buzzard circled in the thermals, and somewhere deeper in the wood a woodpecker drummed its rapid, purposeful percussion against dead timber. The forest was never silent, Anya reflected, if you knew how to listen. It spoke in the creak of branches, in the whisper of leaves turning in the wind, in the slow, patient conversation of roots beneath the earth.

She stood, brushed the soil from her knees, and recorded her observations in the battered notebook she carried everywhere. The old oak would be dead within a year. But its legacy would persist in every tree it had fed, every seedling it had sheltered, every thread of fungal connection it had maintained. Nothing in a forest, she wrote, is ever truly lost. It is only translated.`

const EXTRACT_05_SOURCE = 'Original nature writing composition'

// ─── Exam Papers ────────────────────────────────────────────────────────────

export const ocrP2A: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 1 — Gothic
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-p2-01',
    board: 'OCR',
    paperNumber: 2,
    title: 'Component 02: Exploring Effects and Impact',
    subtitle: 'English Language J351/02',
    code: 'J351/02',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p2-01-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${EXTRACT_01_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p2-01-q1',
            questionNumber: 1,
            questionText: 'Read the extract below.\n\nIdentify four things you learn about the house from the first two paragraphs.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: EXTRACT_01,
            extractSource: EXTRACT_01_SOURCE,
            modelAnswers: {
              'Grade 4-5': '1. The house was silent in a way that felt deliberate. 2. The front door opened easily without resistance. 3. The hallway was long and narrow. 4. The wallpaper had a dark green vine pattern.',
            },
            markScheme: [
              '1 mark per valid point drawn from the first two paragraphs',
              'Maximum 4 marks',
              'Points must be clearly supported by text',
            ],
          },
          {
            id: 'ocr-p2-01-q2',
            questionNumber: 2,
            questionText: 'How does the writer use language to create a sense of unease in the extract?\n\nYou should consider:\n- word choices and their effects\n- imagery and figurative language\n- the overall impact on the reader.',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EXTRACT_01,
            extractSource: EXTRACT_01_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'The writer creates unease by personifying the house as something alive. The house is described as "waiting" and "inviting her inside" as though it has its own intentions. The wallpaper vines are said to be "growing" and "reaching toward the ceiling," which makes the house feel like it is alive and threatening. The air is "thick and sweet, like overripe fruit" which suggests something rotten or decaying. The word "occupied" when describing the rooms adds to the idea that the house is not truly empty, which is unsettling.',
              'Grade 6-7': 'The writer constructs unease through sustained personification that attributes volition to the inanimate. The house possesses "held-breath stillness" — a transferred epithet that assigns it the capacity for anticipation, transforming architecture into predator. The simile "like overripe fruit" activates associations with decay and the boundary between ripeness and corruption, while the underlying "cold, mineral smell" of "stone and standing water" introduces connotations of burial and stagnation. The wallpaper vines are particularly effective: "creeping upward" and "reaching toward the ceiling with slow, vegetable patience" uses the oxymoron of "vegetable patience" to defamiliarise growth, turning a domestic pattern into something organic and encroaching. The semantic field of domesticity — chair, book, cup — is subverted: each object is described in terms suggesting interrupted life, creating the uncanny sense of a space between occupied and abandoned.',
              'Grade 8-9': 'The writer deploys a Gothic lexicon of animation and appetite to collapse the boundary between dwelling and organism. The opening sentence — "The house had been waiting" — is structurally loaded: the pluperfect continuous tense implies sustained, purposeful action, while the isolated position of the sentence forces the reader to absorb the personification before any qualification. The distinction between "passive quiet" and "held-breath stillness" is philosophically precise: the latter connotes conscious suppression, transforming silence from absence into presence. The hallway\'s wallpaper becomes a metonym for the house\'s predatory nature: "growing — creeping upward... reaching toward the ceiling with slow, vegetable patience" layers three progressive verbs to create an almost imperceptible acceleration, while "vegetable patience" is a brilliant paradox — patience implies consciousness, yet "vegetable" denies it, leaving the reader stranded between rational and irrational interpretation. The olfactory detail — "thick and sweet, like overripe fruit" — taps the uncanny valley between pleasure and revulsion, and the qualifying "cold, mineral smell" beneath it creates vertical stratification: the surface is organic; what lies beneath is geological, ancient, inhuman. The domestic objects (chair, book, cup) function as memento mori, each frozen in a gesture of interrupted habitation that transforms the quotidian into the spectral.',
            },
            markScheme: [
              'Identifies language techniques with relevant examples',
              'Analyses the effect of specific word choices',
              'Comments on how language creates atmosphere and unease',
              'Uses subject terminology accurately',
              'Top band: sophisticated, conceptualised analysis of language effects',
            ],
          },
          {
            id: 'ocr-p2-01-q3',
            questionNumber: 3,
            questionText: 'How does the writer use structure to build tension throughout the extract?\n\nYou should consider:\n- the overall organisation of the text\n- how the writer shifts focus between paragraphs\n- sentence-level structural choices.',
            marks: 12,
            suggestedTimeMinutes: 18,
            questionType: 'analysis',
            extract: EXTRACT_01,
            extractSource: EXTRACT_01_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'The extract is structured to gradually increase tension. The opening paragraph describes the house from outside, then Clara moves inside in the second paragraph. The third paragraph builds unease by showing objects that suggest someone was recently there. The fourth paragraph introduces the mysterious sound, which is the most frightening moment. The final paragraph ends without resolution, leaving the reader in suspense. Short sentences like "Clara stopped" create sudden pauses that add to the tension.',
              'Grade 6-7': 'The extract is structured as a spatial journey that doubles as an emotional descent. The movement from exterior (front door) to interior (hallway, rooms) to upstairs corridor mirrors a penetration into the unknown, each threshold raising the stakes. The third paragraph performs a crucial structural function: the estate agent\'s reassurance ("Vacant for three years") introduces a voice of normality that the surrounding details systematically contradict, creating dramatic irony. The pivot to the fourth paragraph — the introduction of sound — represents a sensory shift from visual to auditory that intensifies threat, since sound implies presence more directly than visual traces. The final paragraph\'s most effective structural device is spatial distortion: "The corridor seemed to lengthen before her" — the external environment responding to internal fear. The extract ends without resolution, denying the reader the closure that conventional narrative structure promises, leaving tension permanently suspended.',
              'Grade 8-9': 'The extract is structured as a series of nested thresholds, each crossing marking an escalation in the text\'s Gothic register. The macro-structure moves from approach (paragraph one) to entry (two) to exploration (three) to auditory encounter (four) to psychological entrapment (five) — a five-act progression that mirrors the classical dramatic arc but deliberately withholds the fifth act\'s resolution. The third paragraph performs a structural counterpoint: the estate agent\'s speech, rendered in reported form with the telling detail of his "professional smile," introduces a register of commercial normality that exists in ironic tension with the preceding description. The colon after "empty was not the right word" functions as a structural hinge, pivoting from denial to evidence. The shift from visual to auditory in paragraph four is the extract\'s structural volta — sound, unlike sight, cannot be controlled by looking away, trapping both character and reader. Most sophisticated is the final paragraph\'s dissolution of physical certainty: "The corridor seemed to lengthen before her" and "The wallpaper vines twisted in her peripheral vision" blur the boundary between objective description and subjective perception, a structural collapse that enacts Clara\'s psychological unravelling. The final clause — "as though it had been waiting, just as the house had been waiting" — creates a circular structure that returns to the opening sentence, enclosing the entire extract within the house\'s agency and denying escape.',
            },
            markScheme: [
              'Comments on the overall structural progression of the extract',
              'Analyses how focus shifts between paragraphs',
              'Examines sentence-level structural choices and their effects',
              'Considers the effect of structure on the reader',
              'Uses structural terminology (shift, focus, pace, tension, volta, circular)',
              'Top band: perceptive, detailed, conceptualised structural analysis',
            ],
          },
          {
            id: 'ocr-p2-01-q4',
            questionNumber: 4,
            questionText: '"The writer makes the house seem more alive and more dangerous than any human threat could be."\n\nTo what extent do you agree with this statement? You should refer closely to the text in your answer.',
            marks: 16,
            suggestedTimeMinutes: 22,
            questionType: 'evaluation',
            extract: EXTRACT_01,
            extractSource: EXTRACT_01_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'I agree that the writer makes the house seem alive. The house is said to be "waiting" and "inviting her inside" which makes it seem like it has a mind of its own. The wallpaper vines are "growing" and "reaching," making the house seem like it is moving. The mysterious sound is described as "patient, unhurried, certain" which makes it seem deliberate and intelligent. The house feels more threatening than a person because it surrounds Clara completely — she is inside the threat rather than facing it from outside. However, we do not know what is behind the door, and it could be a human threat, so the statement might not be entirely true.',
              'Grade 6-7': 'I largely agree with the statement. The writer constructs the house as an entity with agency and intention, making it a more pervasive threat than any individual antagonist could be. The opening personification — "The house had been waiting" — establishes volition before Clara even enters, suggesting she is responding to the house\'s invitation rather than exercising her own choice. The domestic details (chair, book, cup) create an uncanny doubling: they are simultaneously empty and occupied, dead and alive. The sound in the corridor is effective precisely because it is unidentified — "not quite breathing, not quite tapping, but something between the two" — occupying a liminal space that resists categorisation. A human threat can be faced, understood, fought; the house as threat is architectural, environmental, inescapable. However, I would partially challenge the statement: the final paragraph\'s corridor that "seemed to lengthen" suggests the house\'s power may be partly psychological — a projection of Clara\'s fear rather than an objective supernatural force. This ambiguity, characteristic of the Gothic tradition, makes the threat more sophisticated than the statement acknowledges, because the reader cannot determine whether the danger is external or internal.',
              'Grade 8-9': 'The statement is substantially correct but requires refinement: the house\'s power lies not in its opposition to human threat but in its absorption and transformation of it. The writer constructs the house through what Freud would recognise as the unheimlich — the unhomely — where the domestic becomes its own negation. The "held-breath stillness" of the opening is more disturbing than active menace precisely because it implies restraint, the suggestion that the house could act but chooses to wait. The wallpaper vines function as a Gothic motif recalling Charlotte Perkins Gilman: their "slow, vegetable patience" suggests a temporality alien to human experience, making the house threatening on a register that human violence cannot access. The domestic objects — chair at an angle, book frozen mid-sentence, cup with its "dark ring of tannin" — are devastating because they are evidence of interrupted human life; the house has already consumed its previous inhabitants. I would, however, complicate the statement in two ways. First, the sound behind the door reintroduces the possibility of human presence, and it is this ambiguity — is the house alive, or does it contain something alive? — that generates the extract\'s deepest unease. Second, the corridor\'s apparent lengthening in the final paragraph raises the question of psychological reliability: if the house\'s threat is partly a product of Clara\'s perception, then the true danger is not the house but the human mind\'s capacity to animate the inanimate — which is, ultimately, what Gothic fiction itself does. The writer therefore makes the house a mirror for the reader\'s own interpretive anxieties.',
            },
            markScheme: [
              'Evaluates critically with a sustained personal response',
              'Engages with the statement — agrees, disagrees, or qualifies',
              'Selects and analyses appropriate textual evidence',
              'Considers alternative interpretations',
              'Demonstrates sophisticated understanding of writer\'s methods',
              'Top band: evaluative, critical, conceptualised response',
            ],
          },
        ],
      },
      {
        id: 'ocr-p2-01-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 50 minutes on this section. You are reminded of the need to plan your answer.',
        totalMarks: 40,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'ocr-p2-01-q5',
            questionNumber: 5,
            questionText: 'Choose ONE of the following:\n\nEither:\n(a) Write a description suggested by this image: [Imagine a photograph of an old, ivy-covered house at twilight, with a single light burning in an upstairs window.]\n\nOr:\n(b) Write the opening of a story in which a character enters an unfamiliar place for the first time.\n\n(32 marks for content and organisation / 8 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 50,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear and engaging piece that: uses descriptive or narrative techniques (simile, metaphor, sensory detail); has a clear structure with distinct paragraphs; includes varied vocabulary; attempts to create atmosphere; demonstrates generally accurate spelling, punctuation, and grammar.',
              'Grade 6-7': 'A compelling piece that: crafts a controlled atmosphere through sustained sensory detail; uses varied and ambitious vocabulary; demonstrates conscious structural choices; employs a range of sentence forms for effect; shows consistent accuracy in spelling, punctuation, and grammar with some sophisticated constructions.',
              'Grade 8-9': 'An assured, crafted piece that: creates a vivid, immersive experience through precise, original imagery; demonstrates sophisticated structural control with deliberate shifts in pace or focus; uses an extensive vocabulary with precise word choices; employs varied sentence structures with complete control; shows technical virtuosity in punctuation and creates a distinctive voice.',
            },
            markScheme: [
              'Content & Organisation (32 marks): Voice, imagery, atmosphere, structural control',
              'Technical Accuracy (8 marks): SPaG accuracy, ambition, and variety',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 2 — War
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-p2-02',
    board: 'OCR',
    paperNumber: 2,
    title: 'Component 02: Exploring Effects and Impact',
    subtitle: 'English Language J351/02',
    code: 'J351/02',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p2-02-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${EXTRACT_02_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p2-02-q1',
            questionNumber: 1,
            questionText: 'Read the extract below.\n\nIdentify four things you learn about Private Ellis and his surroundings from the first two paragraphs.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: EXTRACT_02,
            extractSource: EXTRACT_02_SOURCE,
            modelAnswers: {
              'Grade 4-5': '1. The bombardment had stopped an hour ago. 2. Ellis was lying face down in a crater. 3. He could smell cordite and churned soil. 4. His left arm was at an unnatural angle.',
            },
            markScheme: [
              '1 mark per valid point drawn from the first two paragraphs',
              'Maximum 4 marks',
              'Points must be clearly supported by text',
            ],
          },
          {
            id: 'ocr-p2-02-q2',
            questionNumber: 2,
            questionText: 'How does the writer use language to convey the devastation of war in the extract?\n\nYou should consider:\n- word choices and their effects\n- imagery and figurative language\n- the overall impact on the reader.',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EXTRACT_02,
            extractSource: EXTRACT_02_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'The writer uses strong imagery to show the devastation of war. The landscape is described as a "moonscape of craters and shattered stumps" which shows how it has been completely destroyed. The wire is compared to "brambles from a nightmare" which combines something natural with something terrifying. The writer mentions shapes in the mud that Ellis forces his eyes to "skip over," implying they are dead bodies without directly saying so. The word "reduced" suggests that everything has been brought down to the same level of destruction.',
              'Grade 6-7': 'The writer conveys devastation through systematic negation of the natural and human. The silence after bombardment is paradoxically oppressive: it "pressed against the eardrums," personifying absence as a physical force. The landscape\'s transformation is conveyed through the contrast between what "once" existed (gentle farmland) and what remains ("moonscape") — the astronomical metaphor removing the setting from Earth entirely. The euphemistic treatment of corpses — "shapes... that he forced his eyes to skip over" — is devastating precisely through its restraint; the reader must complete the implication. The wire described as "brambles from a nightmare" domesticates the military through nature imagery, then corrupts that nature through "nightmare." Most powerfully, "everything reduced to the same uniform brown" uses the passive voice and the adjective "uniform" with bitter irony — military uniformity has literally been imposed upon the landscape.',
              'Grade 8-9': 'The writer constructs devastation as a perceptual crisis — a collapse of the sensory frameworks through which we organise experience. The opening paradox of silence that is "worse" than bombardment inverts the expected hierarchy of threat, establishing a world where normal categories have been dismantled. The numbness in Ellis\'s arm, climbing "with the slow deliberation of rising water," transforms injury into an almost geological process — the simile\'s patience is more terrifying than sudden pain because it implies inevitability. The parenthetical acknowledgment of the farmland photographs — "(he had seen the photographs, the gentle farmland of northern France)" — is structurally devastating: the dash creates a temporal rupture between the pastoral past and the present "moonscape," and the qualifier "gentle" becomes unbearably poignant in context. The avoidance of naming the dead — "shapes... that he forced his eyes to skip over, registering them only as interruptions in the terrain" — performs the psychological mechanism of combat dissociation at the level of prose: the noun "interruptions" reduces human bodies to topographical irregularities, enacting the dehumanisation that war demands for survival. The "something sweet and terrible that he would not name" invites the reader into the same act of wilful unknowing, making them complicit in the text\'s central evasion.',
            },
            markScheme: [
              'Identifies language techniques with relevant examples',
              'Analyses the effect of specific word choices',
              'Comments on how language conveys devastation and its emotional impact',
              'Uses subject terminology accurately',
              'Top band: sophisticated, conceptualised analysis of language effects',
            ],
          },
          {
            id: 'ocr-p2-02-q3',
            questionNumber: 3,
            questionText: 'How does the writer use structure to contrast destruction and beauty in the extract?\n\nYou should consider:\n- the overall organisation of the text\n- how the writer shifts focus between paragraphs\n- any other structural features that interest you.',
            marks: 12,
            suggestedTimeMinutes: 18,
            questionType: 'analysis',
            extract: EXTRACT_02,
            extractSource: EXTRACT_02_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'The extract is divided into two halves. The first three paragraphs describe the destruction of war: the silence, Ellis\'s injury, and the ruined landscape. Then the fourth paragraph introduces the blackbird singing, which is beautiful and contrasts with everything before it. The shift from destruction to beauty is sudden, marked by the short sentence "A bird sang." The final paragraph returns to Ellis and his injury, so the beauty of the bird is surrounded by sadness. This structure makes the bird\'s song more powerful because it is set against so much destruction.',
              'Grade 6-7': 'The extract is structured as a descent into devastation followed by a single, piercing moment of beauty that makes the devastation more, not less, painful. The first three paragraphs establish a world defined by absence and damage: silence, numbness, "everything reduced to the same uniform brown." The structural pace is slow, deliberate, accumulative. The fourth paragraph performs a dramatic tonal rupture: "A bird sang" is a simple three-word declarative sentence positioned after the dense, complex prose of the preceding paragraphs. Its syntactic simplicity mirrors the purity of the sound it describes. The extended description of the blackbird\'s song — "as though nothing had happened — as though the world were still whole" — uses the subjunctive mood to hold open a counter-reality, a version of the world that the surrounding paragraphs have definitively closed. The final paragraph structurally encloses the beauty within suffering: Ellis closes his eyes (a structural closing gesture), the numbness advances, and the bird is redefined as "the last beautiful thing" — beauty not as redemption but as elegy. The circular return to the body ensures that the structural weight falls on loss rather than consolation.',
              'Grade 8-9': 'The extract\'s structure enacts the psychological experience of beauty in extremis — a momentary transcendence that deepens rather than alleviates suffering. The first three paragraphs operate in a register of sensory cataloguing: each paragraph adds another mode of perception (auditory silence, tactile numbness, visual devastation), building a comprehensive account of destruction that is also, structurally, a progressive shutdown of the protagonist\'s sensory world. The fourth paragraph\'s rupture is prepared by a precise structural absence: the third paragraph\'s "shapes" that Ellis will not look at represent the text\'s own structural evasion, a gap that concentrates horror through omission. Into this carefully constructed void, the bird\'s song arrives. "A bird sang" — three words, subject-verb — is structurally anomalous: after paragraphs of complex, subordinated prose, this sentence\'s simplicity is almost violent in its clarity. The paragraph then performs a structural expansion: from the bird to its perch (the oak stump, itself a ruin) to the subjunctive alternate reality ("as though the world were still whole"), each clause widening the scope of what has been lost. The simile "as precise and deliberate as a struck bell" transfers musical vocabulary to nature, suggesting art surviving in a world where human artistry has turned to destruction. The final paragraph\'s closing structure — eyes shut, numbness advancing, the bird reframed as "the last beautiful thing in a world that had forgotten what beauty was" — converts the contrast between destruction and beauty into something more devastating: beauty as the measure of what destruction has cost. The structure does not resolve the tension; it crystallises it.',
            },
            markScheme: [
              'Comments on the overall structural contrast between destruction and beauty',
              'Analyses how shifts between paragraphs create meaning',
              'Examines sentence-level structural choices and their effects',
              'Considers the effect of structure on the reader',
              'Uses structural terminology accurately',
              'Top band: perceptive, detailed, conceptualised structural analysis',
            ],
          },
          {
            id: 'ocr-p2-02-q4',
            questionNumber: 4,
            questionText: '"The writer suggests that nature is indifferent to human suffering, and this makes the extract more powerful."\n\nTo what extent do you agree with this statement? You should refer closely to the text in your answer.',
            marks: 16,
            suggestedTimeMinutes: 22,
            questionType: 'evaluation',
            extract: EXTRACT_02,
            extractSource: EXTRACT_02_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'I agree that nature is shown as indifferent. The blackbird sings "as though nothing had happened" which shows it does not care about the destruction. The bird is described as "indifferent and magnificent" which directly says it does not notice human suffering. The landscape has been changed into a "moonscape" but the bird sings anyway. This makes the extract more powerful because it shows how small and unimportant human suffering is compared to nature. However, the fact that the bird makes Ellis cry suggests that nature can still affect humans deeply, even if humans cannot affect nature.',
              'Grade 6-7': 'I substantially agree, though I would argue the extract\'s power comes from the tension between indifference and consolation. The blackbird is explicitly "indifferent" — it sings "as though nothing had happened," occupying a temporal reality untouched by the war. This indifference is made "magnificent" by the writer, elevating it from mere obliviousness to something approaching the sublime. The natural world\'s refusal to acknowledge human destruction creates a powerful ironic contrast: the bird\'s beauty is not offered as comfort but exists despite suffering, which is simultaneously more honest and more painful than pathetic fallacy. However, I would complicate the statement: Ellis\'s tears suggest that nature\'s indifference paradoxically intensifies his emotional response rather than diminishing it. The bird\'s song does not console; it grieves by proxy, expressing the beauty of the world that war has destroyed. "The last beautiful thing in a world that had forgotten what beauty was" positions the bird not as indifferent but as a living memorial to what has been lost — indifference, in this reading, becomes a form of preservation.',
              'Grade 8-9': 'The statement correctly identifies indifference as a central dynamic, but I would argue the extract\'s power lies not in nature\'s indifference per se but in the philosophical vertigo it generates: the recognition that beauty and suffering are not opposites but coexistent, neither cancelling the other. The blackbird\'s song operates as what Keats might call a "thing of beauty" that is simultaneously a "joy forever" and a reminder of impermanence. Its description as "indifferent and magnificent" pairs two adjectives from radically different registers — the first clinical, the second aesthetic — forcing the reader to hold both simultaneously. The subjunctive construction "as though the world were still whole, still green, still capable of mornings" is devastating precisely because the tricolon\'s rhythmic beauty performs the wholeness it describes: the prose momentarily becomes what it mourns. Nature\'s indifference is not, I would argue, straightforwardly "indifference" at all — it is continuity. The bird sings because that is what birds do; the oak stump supports it because wood persists after the tree dies. This continuity is more powerful than sympathy because it reframes the war: human conflict is temporary; the systems it disrupts — birdsong, growth, morning — are resilient in ways that make both the war\'s destructiveness and Ellis\'s suffering feel simultaneously enormous (to him) and infinitesimal (to the world). The tears Ellis sheds are not tears of sadness but of recognition: he is witnessing the irrelevance of his own experience to the planet that produced him, and finding that irrelevance not crushing but, in its terrible way, beautiful.',
            },
            markScheme: [
              'Evaluates critically with a sustained personal response',
              'Engages with the statement — agrees, disagrees, or qualifies',
              'Selects and analyses appropriate textual evidence',
              'Considers alternative interpretations of nature\'s role',
              'Demonstrates sophisticated understanding of the writer\'s methods',
              'Top band: evaluative, critical, conceptualised response',
            ],
          },
        ],
      },
      {
        id: 'ocr-p2-02-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 50 minutes on this section. You are reminded of the need to plan your answer.',
        totalMarks: 40,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'ocr-p2-02-q5',
            questionNumber: 5,
            questionText: 'Choose ONE of the following:\n\nEither:\n(a) Write a description suggested by this image: [Imagine a photograph of a poppy field stretching toward a horizon where dark clouds are gathering.]\n\nOr:\n(b) Write the opening of a story about a character who is waiting for something.\n\n(32 marks for content and organisation / 8 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 50,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear and engaging piece that: uses descriptive or narrative techniques; has a clear structure with distinct paragraphs; includes varied vocabulary; attempts to create atmosphere; demonstrates generally accurate spelling, punctuation, and grammar.',
              'Grade 6-7': 'A compelling piece that: crafts a controlled atmosphere through sustained sensory detail; uses varied and ambitious vocabulary; demonstrates conscious structural choices; employs a range of sentence forms for effect; shows consistent accuracy with some sophisticated constructions.',
              'Grade 8-9': 'An assured, crafted piece that: creates a vivid, immersive experience through precise, original imagery; demonstrates sophisticated structural control; uses an extensive vocabulary with precise word choices; employs varied sentence structures with complete control; shows technical virtuosity and a distinctive voice.',
            },
            markScheme: [
              'Content & Organisation (32 marks): Voice, imagery, atmosphere, structural control',
              'Technical Accuracy (8 marks): SPaG accuracy, ambition, and variety',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 3 — Psychological
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-p2-03',
    board: 'OCR',
    paperNumber: 2,
    title: 'Component 02: Exploring Effects and Impact',
    subtitle: 'English Language J351/02',
    code: 'J351/02',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p2-03-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${EXTRACT_03_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p2-03-q1',
            questionNumber: 1,
            questionText: 'Read the extract below.\n\nIdentify four things you learn about Nadia from the first two paragraphs.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: EXTRACT_03,
            extractSource: EXTRACT_03_SOURCE,
            modelAnswers: {
              'Grade 4-5': '1. She was good at knowing what other people were thinking. 2. She did not believe in supernatural abilities. 3. She had spent her childhood watching faces. 4. She grew up uncertain of her welcome.',
            },
            markScheme: [
              '1 mark per valid point drawn from the first two paragraphs',
              'Maximum 4 marks',
              'Points must be clearly supported by text',
            ],
          },
          {
            id: 'ocr-p2-03-q2',
            questionNumber: 2,
            questionText: 'How does the writer use language to present Nadia\'s experience of reading other people?\n\nYou should consider:\n- word choices and their effects\n- imagery and figurative language\n- the overall impact on the reader.',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EXTRACT_03,
            extractSource: EXTRACT_03_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'The writer compares Nadia\'s ability to reading: "She read people the way other people read words." This simile shows that understanding others is automatic for her, like reading a book. The comparison of growing up to a "sailor reading the sky" makes her seem watchful and always alert to danger. The metaphor of people "silently screaming" is powerful because it shows that she can see the pain others hide. The word "exhausting" shows the negative effect of this ability on her.',
              'Grade 6-7': 'The writer presents Nadia\'s perceptiveness through a sustained metaphorical framework of literacy and interpretation. The simile "the way a sailor reads the sky" transforms hypervigilance into a survival skill, the nautical context implying storms and shipwreck — dangers that make constant alertness not neurotic but necessary. The adverbial cluster "constantly, instinctively, with a vigilance that becomes so habitual you forget it is there" uses the second person to universalise the experience before the reader recognises that this is not universal at all. The observations of other patients are clinically precise: the man "gripping" his magazine, the woman whose smile "sat on her face like an object placed there by someone else" — this simile is particularly effective, suggesting the smile as prosthetic, external, disconnected from the person wearing it. The culminating metaphor — "walking through a crowd of people who were all, silently, screaming" — is devastating in its paradox: the adverb "silently" and the verb "screaming" are contradictory, forcing the reader to experience the cognitive dissonance that defines Nadia\'s daily reality.',
              'Grade 8-9': 'The writer constructs Nadia\'s perceptiveness as simultaneously gift and pathology through a carefully layered metaphorical system. The opening paragraph establishes a binary between the supernatural and the "ordinary, observable" — but this distinction collapses under the weight of Nadia\'s ability, which, while technically ordinary, produces an experience that is profoundly alienating. The sailor simile is structurally loaded: sailors read the sky not for pleasure but for survival, positioning Nadia\'s childhood as a sustained emergency. The litany "constantly, instinctively, with a vigilance that becomes so habitual you forget it is there" performs syntactic escalation — each qualifier intensifies the previous, while "you forget it is there" uses the second person to infiltrate the reader\'s own experience, briefly making them complicit in Nadia\'s hypervigilance. The woman\'s smile that "sat on her face like an object placed there by someone else" is a miniature study in alienation: the simile estranges the most basic human expression, turning the face into a surface upon which social performance is deposited. The shift from individual observation to the collective metaphor — "walking through a crowd of people who were all, silently, screaming" — enacts a perceptual zoom-out that transforms Nadia\'s clinical precision into existential horror. The comma after "all" is a rhythmic pause that makes "silently" land with devastating force; the oxymoron does not merely describe Nadia\'s experience but replicates it in the reader.',
            },
            markScheme: [
              'Identifies language techniques with relevant examples',
              'Analyses the effect of specific word choices and imagery',
              'Comments on how language presents Nadia\'s psychological experience',
              'Uses subject terminology accurately',
              'Top band: sophisticated, conceptualised analysis of language effects',
            ],
          },
          {
            id: 'ocr-p2-03-q3',
            questionNumber: 3,
            questionText: 'How does the writer structure the extract to reveal Nadia\'s character to the reader?\n\nYou should consider:\n- the overall organisation of the text\n- how the writer controls the release of information\n- sentence-level structural choices.',
            marks: 12,
            suggestedTimeMinutes: 18,
            questionType: 'analysis',
            extract: EXTRACT_03,
            extractSource: EXTRACT_03_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'The extract is structured to gradually reveal more about Nadia. The first paragraph tells us about her ability to read people, which seems like a positive skill. The second paragraph shows her using this ability in the waiting room. The third paragraph reveals the negative side — she cannot turn it off. The short fourth paragraph, "It was exhausting. It was like walking through a crowd of people who were all, silently, screaming," is a turning point. The final paragraph shows her putting on a mask of calm, which creates a contrast between what she shows the world and who she really is.',
              'Grade 6-7': 'The extract is structured as a progressive unmasking that mirrors the very process it describes: Nadia reads others, and the narrative structure gradually reads Nadia. The opening paragraph presents her ability in positive terms — "good at knowing," a learned skill. The second paragraph demonstrates this skill in action, and the reader initially admires Nadia\'s perceptiveness. The structural pivot occurs in paragraph three: the dash after "the problem" delays the revelation, forcing the reader to cross a threshold from admiration to understanding. The fourth paragraph\'s brevity — only two sentences — is a structural shock after the longer, more complex paragraphs. Its simplicity performs emotional exhaustion: the prose becomes spare because Nadia has nothing left. The final paragraph introduces the concept of performed identity: Nadia "arranged her features" just as the woman in the waiting room wore her prosthetic smile. This structural echo creates a devastating parallel — Nadia is no different from the people she reads. The final question, posed in free indirect discourse, leaves the extract open-ended, structurally refusing the closure that Nadia herself cannot achieve.',
              'Grade 8-9': 'The extract\'s structure operates as a carefully controlled striptease of identity, each paragraph removing a layer of Nadia\'s self-presentation to expose the vulnerability beneath. The macro-structure follows a classical five-paragraph arc: skill (paragraph one), demonstration (two), cost (three), crisis (four), performance (five). But this apparent clarity conceals a deeper structural irony: the reader is positioned as another person being "read" by the text, subjected to the same graduated revelation that Nadia performs on others. Paragraph one establishes the framework in reassuringly rational terms — "not in any supernatural sense" — which structurally manages the reader\'s expectations, just as Nadia manages the impressions of others. Paragraph two\'s observational detail creates a false sense of narrative distance: we watch Nadia watching, believing ourselves safely outside the dynamic. Paragraph three\'s dash — "The problem — the reason she was here" — performs a structural rupture, the parenthetical clause acting as a confession that recontextualises everything preceding it. The fourth paragraph\'s radical compression — two sentences after paragraphs of elaborate prose — enacts formal exhaustion. The final paragraph\'s most sophisticated structural move is the temporal detail "since she was seven years old," which retroactively reframes the entire extract: the "childhood" of paragraph one, previously vague, is now anchored to a specific age, transforming learned skill into childhood survival mechanism. The closing question about the therapist "reading" Nadia creates a structural mise en abyme — reading within reading within reading — that implicates the reader as the final link in the chain.',
            },
            markScheme: [
              'Comments on the overall structural progression',
              'Analyses how the writer controls the release of information about Nadia',
              'Examines sentence-level structural choices and their effects',
              'Considers the effect of structure on the reader\'s understanding',
              'Uses structural terminology accurately',
              'Top band: perceptive, detailed, conceptualised structural analysis',
            ],
          },
          {
            id: 'ocr-p2-03-q4',
            questionNumber: 4,
            questionText: '"The writer presents Nadia\'s ability to read people as a curse rather than a gift."\n\nTo what extent do you agree with this statement? You should refer closely to the text in your answer.',
            marks: 16,
            suggestedTimeMinutes: 22,
            questionType: 'evaluation',
            extract: EXTRACT_03,
            extractSource: EXTRACT_03_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'I mostly agree that Nadia\'s ability is presented as a curse. She is in a therapist\'s waiting room, which shows she needs help. The metaphor of people "silently screaming" shows the pain her ability causes her. She says it is "exhausting" and she "could not turn it off." She has to wear a mask of "calm competence" to hide her real feelings. However, the first paragraph presents it more positively, calling her "good" at it. But overall, the negative effects outweigh the positives, so I agree it is more of a curse.',
              'Grade 6-7': 'I agree that the ability is predominantly presented as a curse, though the writer complicates this through careful ambiguity. The first paragraph frames Nadia\'s perceptiveness as a learned, practical skill — the sailor simile connotes competence. But the simile also implies danger: sailors read the sky because storms kill. The "skill" was forged by the threatening conditions of a childhood where she was "uncertain of her welcome," immediately darkening its origins. The inability to deactivate the ability — "she could not turn it off" — transforms gift into compulsion, and the comparison with automatic processes ("the way breathing came, the way blinking came") removes agency entirely. The "silently screaming" crowd is the clearest evidence of curse: Nadia\'s perception has become a form of perpetual exposure to others\' suffering. However, I would partially challenge the statement: the final paragraph reveals that Nadia has also turned her reading ability inward, constructing a performed self "since she was seven years old." This suggests that her perceptiveness, while painful, is also her primary mode of understanding the world — including herself. To call it simply a "curse" underestimates its complexity; it is closer to a wound that has become inseparable from identity.',
              'Grade 8-9': 'The statement is directionally correct but reductive. The writer presents Nadia\'s ability not as straightforwardly cursed but as occupying the unstable ground between hyperperception and hyperpermeability — seeing too much and being too porous to what one sees. The first paragraph\'s register is deliberately clinical: "not in any supernatural sense" establishes rational parameters. But the rational framework is immediately undermined by the emotional origin story — "uncertain of her welcome" — which reveals that Nadia\'s "skill" is the cognitive architecture of insecure attachment. The sailor simile captures the paradox: reading the sky is both competence and compulsion, skill and symptom. The therapeutic setting is the extract\'s structural irony: a space designed for self-disclosure occupied by a woman who has never stopped disclosing others. The "silently screaming" crowd is the curse\'s most vivid expression — but I would argue the true curse is not what Nadia perceives but what perception prevents: genuine connection. She reads the woman\'s smile as prosthetic, the man\'s calm as performance — accurate readings, perhaps, but readings that foreclose the possibility of taking people at face value, which is the foundation of social trust. The final paragraph reveals the deepest layer: Nadia herself performs, "arranging her features" just as others do, making her a participant in the very system of concealment she penetrates. The question she poses — how long before the therapist sees "the one she had hidden" — implies that the hidden self is the authentic one. But the extract has shown us that Nadia\'s entire identity is constructed from perception and performance; there may be no hidden self beneath the performance, only the act of hiding. In this reading, the "curse" is not the ability but the infinite regress it creates: reading others who are reading you who is reading them.',
            },
            markScheme: [
              'Evaluates critically with a sustained personal response',
              'Engages with the statement — agrees, disagrees, or qualifies',
              'Selects and analyses appropriate textual evidence',
              'Considers alternative interpretations',
              'Demonstrates sophisticated understanding of the writer\'s methods',
              'Top band: evaluative, critical, conceptualised response',
            ],
          },
        ],
      },
      {
        id: 'ocr-p2-03-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 50 minutes on this section. You are reminded of the need to plan your answer.',
        totalMarks: 40,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'ocr-p2-03-q5',
            questionNumber: 5,
            questionText: 'Choose ONE of the following:\n\nEither:\n(a) Write a description suggested by this image: [Imagine a photograph of a crowded train carriage, the faces of passengers reflected in the dark windows.]\n\nOr:\n(b) Write the opening of a story in which a character realises that someone is not who they appear to be.\n\n(32 marks for content and organisation / 8 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 50,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear and engaging piece that: uses descriptive or narrative techniques; has a clear structure with distinct paragraphs; includes varied vocabulary; attempts to create atmosphere or tension; demonstrates generally accurate spelling, punctuation, and grammar.',
              'Grade 6-7': 'A compelling piece that: crafts sustained atmosphere or character through sensory detail; uses varied and ambitious vocabulary; demonstrates conscious structural choices; employs a range of sentence forms for effect; shows consistent accuracy with some sophisticated constructions.',
              'Grade 8-9': 'An assured, crafted piece that: creates a vivid, immersive experience through precise imagery and psychological insight; demonstrates sophisticated structural control; uses an extensive vocabulary with precise word choices; employs varied sentence structures with complete control; shows technical virtuosity and a distinctive voice.',
            },
            markScheme: [
              'Content & Organisation (32 marks): Voice, imagery, character, structural control',
              'Technical Accuracy (8 marks): SPaG accuracy, ambition, and variety',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 4 — Coming-of-age
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-p2-04',
    board: 'OCR',
    paperNumber: 2,
    title: 'Component 02: Exploring Effects and Impact',
    subtitle: 'English Language J351/02',
    code: 'J351/02',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p2-04-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${EXTRACT_04_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p2-04-q1',
            questionNumber: 1,
            questionText: 'Read the extract below.\n\nIdentify four things you learn about the river and its surroundings from the first two paragraphs.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: EXTRACT_04,
            extractSource: EXTRACT_04_SOURCE,
            modelAnswers: {
              'Grade 4-5': '1. The river had mostly dried up the summer Tom turned fourteen. 2. There was still a thin trickle of water at the deepest point. 3. The old swimming hole was now a muddy depression. 4. A rope swing still hung from an oak branch above dry ground.',
            },
            markScheme: [
              '1 mark per valid point drawn from the first two paragraphs',
              'Maximum 4 marks',
              'Points must be clearly supported by text',
            ],
          },
          {
            id: 'ocr-p2-04-q2',
            questionNumber: 2,
            questionText: 'How does the writer use language to present the changes to the river and the landscape?\n\nYou should consider:\n- word choices and their effects\n- imagery and figurative language\n- the overall impact on the reader.',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EXTRACT_04,
            extractSource: EXTRACT_04_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'The writer uses personification to make the river seem like a living thing. The remaining water is described as "something ashamed of itself" which makes the river seem embarrassed about its state. The flat rock "protruded from the riverbed like a grey shoulder shrugging itself free" gives it a human quality. The writer lists the objects now visible — "rusted cans, a bicycle wheel furred with algae, the broken neck of a bottle" — which shows what the river had been hiding. Mrs Kenworth\'s garden is described as "a cemetery of brown stalks" which is a strong metaphor comparing the dead plants to a graveyard.',
              'Grade 6-7': 'The writer constructs the landscape\'s transformation through a sustained personification of shame and exposure. The remaining water "crept between the exposed stones like something ashamed of itself" — the simile attributes emotional consciousness to water, while "crept" connotes both movement and guilt. The rock "protruding like a grey shoulder shrugging itself free" combines personification with a gesture of indifference, as though the landscape is complicit in its own degradation. The catalogue of revealed objects — "rusted cans, a bicycle wheel furred with algae, the broken neck of a bottle" — performs a symbolic unmasking: these are the detritus of human carelessness, and the river had been concealing them. The sentence "The river had kept its secrets for years" transforms environmental change into narrative revelation. The metaphor "a cemetery of brown stalks" for Mrs Kenworth\'s garden is powerful because it simultaneously describes death and memorialises what once lived. The grandfather\'s language — "Water has a longer memory than people. Water holds a grudge" — personifies the natural world as a moral agent, reframing ecological crisis as justice.',
              'Grade 8-9': 'The writer deploys a complex layered personification that oscillates between shame, memory, and agency, constructing the river as a character with a richer interior life than most of the humans in the extract. The opening clause\'s parenthetical qualification — "Not completely — there was still a trickle" — performs structurally the same diminishment it describes: the dash reduces the river to an afterthought within its own sentence. The simile "like something ashamed of itself" is psychologically precise: shame implies self-awareness and social judgment, transforming ecological crisis into moral narrative. The revealed objects function as material unconscious: the river\'s secrets are human refuse — "rusted cans, a bicycle wheel furred with algae" — suggesting that what we conceal in nature returns as accusation. The algae "furring" the wheel creates an image of nature reclaiming human waste, a quiet act of absorption that contrasts with the dramatic exposure. The grandfather\'s personification — "Water holds a grudge" — introduces a temporal register that exceeds human comprehension: water remembers not individual acts but patterns, "every summer they took more than they gave back." This positions the drought not as natural disaster but as consequence, a reading that transforms the extract from pastoral elegy into environmental parable.',
            },
            markScheme: [
              'Identifies language techniques with relevant examples',
              'Analyses the effect of specific word choices',
              'Comments on how language presents change and loss',
              'Uses subject terminology accurately',
              'Top band: sophisticated, conceptualised analysis of language effects',
            ],
          },
          {
            id: 'ocr-p2-04-q3',
            questionNumber: 3,
            questionText: 'How does the writer structure the extract to develop Tom\'s growing understanding?\n\nYou should consider:\n- the overall organisation of the text\n- how the writer uses different perspectives and time frames\n- any other structural features that interest you.',
            marks: 12,
            suggestedTimeMinutes: 18,
            questionType: 'analysis',
            extract: EXTRACT_04,
            extractSource: EXTRACT_04_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'The extract starts by showing Tom looking at the dried-up river in the present. The second paragraph describes what has been revealed by the low water. The third paragraph goes back in time to the grandfather\'s warning, which Tom did not understand at the time. The fourth paragraph widens the focus to show the effect on the whole village. The final paragraph returns to Tom sitting on the porch, now understanding what his grandfather meant. The structure moves from observation to memory to understanding, showing Tom\'s growing maturity.',
              'Grade 6-7': 'The extract is structured around two temporal perspectives that converge in the final paragraph. The first two paragraphs establish the present: Tom observing the dried river. The structural emphasis on revealed objects creates a physical metaphor for understanding — as the river drops, truths emerge. The third paragraph introduces the grandfather\'s voice as a flashback, structurally positioned at the extract\'s centre. The shift from Tom\'s visual observation to the old man\'s abstract wisdom marks a move from surface to depth. The pivotal sentence "Tom had not understood then. He was beginning to understand now" spans both time frames in two sentences, the full stop between them marking the gap between childhood incomprehension and adolescent recognition. The fourth paragraph widens the structural lens from the river to the village, establishing the drought\'s communal impact. The final paragraph performs a structural echo: Tom sits "on the porch where his grandfather used to sit," physically occupying the older man\'s position. The closing sentence — "things did not last" — arrives as both Tom\'s revelation and the extract\'s thesis, a structural convergence of character and theme.',
              'Grade 8-9': 'The extract\'s structure enacts the epistemological journey from seeing to understanding, mapping Tom\'s cognitive development onto a carefully managed temporal architecture. The opening paragraphs operate in an extended present tense of observation: Tom stands, looks, sees. The structural emphasis on listing — rope swing, flat rock, rusted cans — performs the act of inventory that precedes interpretation. The second paragraph\'s final sentence, "The river had kept its secrets for years, and now, stripped bare, it looked ashamed," functions as a structural hinge: the past perfect ("had kept") reaches backward, while "now" anchors the present, and "ashamed" introduces the interpretive register that the first paragraphs withheld. The grandfather\'s speech in paragraph three is the extract\'s structural and thematic centre. Its placement — between Tom\'s observation and his understanding — recreates the temporal gap in Tom\'s experience: the words were spoken before but understood after. The shift from the grandfather\'s generalising present tense ("Water remembers") to the narrative past ("Tom had not understood then") creates a tense disjunction that structurally represents the difference between wisdom received and wisdom earned. The final paragraph\'s most sophisticated structural move is the phrase "for the first time": it explicitly marks the moment of transformation, but its power comes from the structural preparation — four paragraphs of accumulated evidence that make "things did not last" feel not like a platitude but like a hard-won insight. The circular return to the porch, now empty of the grandfather, structurally embodies the very impermanence Tom has just recognised.',
            },
            markScheme: [
              'Comments on the overall structural progression of understanding',
              'Analyses how the writer uses time shifts and perspectives',
              'Examines sentence-level structural choices and their effects',
              'Considers how structure reflects Tom\'s growing awareness',
              'Uses structural terminology accurately',
              'Top band: perceptive, detailed, conceptualised structural analysis',
            ],
          },
          {
            id: 'ocr-p2-04-q4',
            questionNumber: 4,
            questionText: '"The writer uses the dried-up river to represent something much larger — the end of childhood innocence."\n\nTo what extent do you agree with this statement? You should refer closely to the text in your answer.',
            marks: 16,
            suggestedTimeMinutes: 22,
            questionType: 'evaluation',
            extract: EXTRACT_04,
            extractSource: EXTRACT_04_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'I agree that the river represents the end of Tom\'s childhood. The swimming hole where "three generations of children had learned to dive" represents childhood fun and tradition. Now it is a "muddy depression" which suggests those happy times are gone. The rope swing hanging over dry ground is a symbol of play that no longer works. At the end, Tom realises "things did not last," which shows he has lost his innocent belief that the world would stay the same. However, the extract is also about environmental change and community, not just childhood.',
              'Grade 6-7': 'I substantially agree, though I would argue the river operates as a more complex symbol than "end of childhood innocence" alone. The river functions on three simultaneous levels: environmental (drought/climate), communal (the swimming hole as shared heritage), and personal (Tom\'s loss of certainty). The swimming hole embodies all three: it is literally dry, but its description as a place where "three generations" learned to dive positions it as a repository of communal memory now emptied. The rope swing "dangling above dry ground" is a precise image of purpose severed from context — the object persists, but its function has been destroyed. The revealed rubbish — "rusted cans, a bicycle wheel, the broken neck of a bottle" — adds a layer the statement doesn\'t account for: innocence was always partly illusion, sustained by the river\'s concealment of what lay beneath. Childhood, the extract implies, is not lost but revealed as having always contained what was hidden. The grandfather\'s warning introduces the theme of responsibility: the river dried up because "they took more than they gave back." If we read the river as innocence, then innocence does not simply end — it is depleted by those who benefit from it without replenishing it. The final recognition — "things did not last" — is simultaneously a personal epiphany and an ecological warning.',
              'Grade 8-9': 'The statement identifies a legitimate reading but risks sentimentalising what is a more rigorous and politically charged text. The river does function as a symbol of lost innocence, but the writer refuses the nostalgic register that such symbolism typically invites. The swimming hole is not merely a site of childhood joy — it is explicitly generational ("three generations"), positioning it as inherited communal wealth. Its destruction therefore represents not just personal loss but the breaking of an intergenerational contract. The revealed objects subvert innocence from within: the "rusted cans" and "broken neck of a bottle" are evidence that the river always contained human carelessness; innocence, the extract implies, is the privilege of not looking beneath the surface. The grandfather\'s speech is the text\'s most radical element: "every summer they took more than they gave back" frames ecological destruction as theft, transforming pastoral loss into political critique. "Water holds a grudge" personifies nature as moral agent, but it also reframes the drought as consequence rather than misfortune — a crucial distinction that moves the extract beyond elegy into accountability. Tom\'s final recognition that "the world he had assumed was permanent was, in fact, as fragile as the thread of water" is layered: "assumed" implies that permanence was always a construction rather than a reality, while "fragile" transfers the river\'s vulnerability to the entire framework of childhood certainty. The coming-of-age here is not the loss of innocence but the acquisition of responsibility — Tom sits in his grandfather\'s chair, inheriting not comfort but awareness. I would therefore modify the statement: the river represents not the end of innocence but the beginning of understanding, which is a harder and more valuable thing.',
            },
            markScheme: [
              'Evaluates critically with a sustained personal response',
              'Engages with the statement — agrees, disagrees, or qualifies',
              'Selects and analyses appropriate textual evidence',
              'Considers the symbolic significance of the river',
              'Demonstrates sophisticated understanding of the writer\'s methods',
              'Top band: evaluative, critical, conceptualised response',
            ],
          },
        ],
      },
      {
        id: 'ocr-p2-04-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 50 minutes on this section. You are reminded of the need to plan your answer.',
        totalMarks: 40,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'ocr-p2-04-q5',
            questionNumber: 5,
            questionText: 'Choose ONE of the following:\n\nEither:\n(a) Write a description suggested by this image: [Imagine a photograph of a dry, cracked riverbed stretching into the distance under a blazing summer sky.]\n\nOr:\n(b) Write the opening of a story about a day that changed everything.\n\n(32 marks for content and organisation / 8 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 50,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear and engaging piece that: uses descriptive or narrative techniques; has a clear structure with distinct paragraphs; includes varied vocabulary; attempts to create atmosphere or convey emotion; demonstrates generally accurate spelling, punctuation, and grammar.',
              'Grade 6-7': 'A compelling piece that: crafts sustained atmosphere or emotional depth; uses varied and ambitious vocabulary; demonstrates conscious structural choices; employs a range of sentence forms for effect; shows consistent accuracy with some sophisticated constructions.',
              'Grade 8-9': 'An assured, crafted piece that: creates a vivid, immersive experience through precise imagery and thematic depth; demonstrates sophisticated structural control; uses an extensive vocabulary with precise word choices; employs varied sentence structures with complete control; shows technical virtuosity and a distinctive voice.',
            },
            markScheme: [
              'Content & Organisation (32 marks): Voice, imagery, atmosphere or narrative, structural control',
              'Technical Accuracy (8 marks): SPaG accuracy, ambition, and variety',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 5 — Nature
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-p2-05',
    board: 'OCR',
    paperNumber: 2,
    title: 'Component 02: Exploring Effects and Impact',
    subtitle: 'English Language J351/02',
    code: 'J351/02',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p2-05-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${EXTRACT_05_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p2-05-q1',
            questionNumber: 1,
            questionText: 'Read the extract below.\n\nIdentify four things you learn about Dr Anya Marsh and her research from the first two paragraphs.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: EXTRACT_05,
            extractSource: EXTRACT_05_SOURCE,
            modelAnswers: {
              'Grade 4-5': '1. She was studying ancient woodland. 2. She had been researching this patch of forest for seven years. 3. She discovered that trees communicate through fungal threads. 4. The trees exchange carbon, nitrogen, phosphorus, and water.',
            },
            markScheme: [
              '1 mark per valid point drawn from the first two paragraphs',
              'Maximum 4 marks',
              'Points must be clearly supported by text',
            ],
          },
          {
            id: 'ocr-p2-05-q2',
            questionNumber: 2,
            questionText: 'How does the writer use language to present the natural world as complex and interconnected?\n\nYou should consider:\n- word choices and their effects\n- imagery and figurative language\n- the overall impact on the reader.',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EXTRACT_05,
            extractSource: EXTRACT_05_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'The writer uses the simile "patterns as intricate as circuitry" to compare fungal growth to electrical circuits, which shows how complex and organised nature is. The metaphor of the forest floor as "a book written in a language most people had forgotten how to read" presents nature as containing hidden knowledge. The trees are described as "talking to each other" through fungal threads, which makes them seem intelligent and social. The word "currency" is used for carbon and nitrogen, comparing the forest to an economy.',
              'Grade 6-7': 'The writer constructs interconnection through a sustained framework of translation between human and natural systems. The opening metaphor — the forest floor as "a book written in a language most people had forgotten how to read" — positions the natural world as a text that requires learned interpretation, establishing Anya as a translator between domains. The simile "as intricate as circuitry" bridges organic and technological, suggesting that nature\'s networks are as sophisticated as human engineering — or, more provocatively, that human engineering merely replicates what nature evolved first. The economic vocabulary — "currency of survival, traded between species in transactions" — is particularly effective: it simultaneously demystifies the natural process (making it accessible through familiar terms) and elevates it (the forest\'s economy is based on mutual exchange rather than competition). The dying oak\'s final act — sending carbon stores to surrounding trees — is described in terms that evoke communication: "in the only language available to it, saying goodbye. Or perhaps it was saying something more practical: here, take this, use it, grow." The self-correction from "goodbye" to "something more practical" resists sentimentality while maintaining emotional resonance.',
              'Grade 8-9': 'The writer deploys a sophisticated metaphorical strategy that cycles between scientific precision and lyrical anthropomorphism, creating a prose register that mirrors Anya\'s own position between empirical observation and emotional interpretation. The opening metaphor of the forest floor as a "book" in a "forgotten language" establishes a hermeneutic framework: nature is not merely present but encoded, requiring active interpretation. This positions the reader as a student and Anya as an intermediary — a structural relationship that mirrors the mycorrhizal network itself, which functions as a medium of translation between species. The simile "as intricate as circuitry" performs a deliberate category error: circuitry is designed; fungal growth is evolved. By equating them, the writer implies either that nature possesses design-like intentionality or that human design is merely a subset of natural pattern — both readings challenge anthropocentric hierarchies. The economic lexicon — "currency," "traded," "transactions" — culminates in the phrase "defied the competitive model of evolution," which is the paragraph\'s intellectual thesis: mutual aid, not competition, drives this system. The dying oak\'s redistribution of carbon is the extract\'s emotional and philosophical centre. The self-correcting construction — "saying goodbye. Or perhaps... something more practical" — enacts the writer\'s own interpretive uncertainty, refusing to settle between sentiment and science. The final line — "Nothing in a forest is ever truly lost. It is only translated" — deploys "translated" with triple meaning: moved (physically), converted (chemically), and rendered into another language (linguistically). This semantic density encapsulates the extract\'s central argument: that the natural world operates through processes of continuous transformation that human categories — life/death, gift/trade, speech/silence — can approximate but never fully capture.',
            },
            markScheme: [
              'Identifies language techniques with relevant examples',
              'Analyses the effect of specific word choices and imagery',
              'Comments on how language presents interconnection and complexity',
              'Uses subject terminology accurately',
              'Top band: sophisticated, conceptualised analysis of language effects',
            ],
          },
          {
            id: 'ocr-p2-05-q3',
            questionNumber: 3,
            questionText: 'How does the writer structure the extract to develop the reader\'s understanding of the forest?\n\nYou should consider:\n- the overall organisation of the text\n- how the writer moves between observation and reflection\n- any other structural features that interest you.',
            marks: 12,
            suggestedTimeMinutes: 18,
            questionType: 'analysis',
            extract: EXTRACT_05,
            extractSource: EXTRACT_05_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'The extract starts at the close-up level, with Anya examining fungal growth on a fallen oak. The second paragraph zooms out to explain the bigger picture of how trees communicate underground. The third paragraph focuses on one dying tree and what it does for other trees around it. The fourth paragraph widens the view to include birds and sounds in the whole forest. The final paragraph returns to Anya and her notebook, ending with the idea that "nothing in a forest is ever truly lost." The structure moves from small details to big ideas and back again.',
              'Grade 6-7': 'The extract is structured as a progressive widening of scale that mirrors the reader\'s expanding understanding. Paragraph one operates at the microscopic: fungal growth on bark, the warmth of decomposition. This intimate scale forces close attention before the second paragraph\'s revelatory zoom-out to the underground network. The transition — "she had come to understand something that still astonished her" — positions the reader alongside Anya, sharing her journey from observation to insight. The third paragraph narrows again to the dying oak but reframes it through the knowledge gained in paragraph two: we now read its decline not as ending but as redistribution. This oscillation between scales — micro, macro, specific — creates a structural rhythm that mimics scientific enquiry: observe, hypothesise, test. The fourth paragraph\'s shift from underground to above-ground — buzzard, woodpecker, wind — completes a spatial circuit, while the reflection "The forest was never silent... if you knew how to listen" repurposes the book/language metaphor from the opening. The final paragraph\'s structural function is synthetic: Anya records, the oak\'s legacy is described in future terms ("would persist"), and the closing aphorism — "It is only translated" — provides the conceptual frame that retrospectively organises everything the reader has encountered.',
              'Grade 8-9': 'The extract\'s structure performs a pedagogical arc — teaching the reader to perceive the forest as Anya perceives it — through a carefully managed oscillation between sensory immediacy and conceptual abstraction. The opening paragraph anchors the reader in the physical: bark, fingers, warmth, smell. This tactile grounding is structurally essential because it establishes trust in embodied observation before the second paragraph demands a leap into the invisible. The transition between paragraphs one and two is the extract\'s crucial structural joint: the shift from what can be seen (fungal patterns) to what cannot (underground networks) replicates the epistemological leap Anya herself made, making the reader\'s cognitive journey isomorphic with the scientist\'s. The third paragraph\'s return to the specific oak creates a structural mise en abyme: the dying tree within the living forest mirrors the specific within the general, the individual within the system. The oak\'s carbon redistribution is described in terms that deliberately resist temporal finality: "sending" is present progressive, extending the act beyond the paragraph. The fourth paragraph performs a structural expansion into sound — buzzard, woodpecker, wind — that completes the extract\'s sensory inventory (touch in one, sight in two/three, hearing in four). The final paragraph\'s closing line — "Nothing in a forest is ever truly lost. It is only translated" — functions as both scientific summary and philosophical coda. Structurally, it arrives with the authority of an extract that has systematically built the evidence for its claim. The verb "translated" retrospectively redefines the extract\'s own project: the writer has been translating the forest into language, just as the forest translates death into life.',
            },
            markScheme: [
              'Comments on the overall structural progression',
              'Analyses how the writer moves between observation and reflection',
              'Examines sentence-level structural choices and their effects',
              'Considers how structure develops the reader\'s understanding',
              'Uses structural terminology accurately',
              'Top band: perceptive, detailed, conceptualised structural analysis',
            ],
          },
          {
            id: 'ocr-p2-05-q4',
            questionNumber: 4,
            questionText: '"The writer makes us see the natural world not as something separate from human experience but as something we are deeply connected to."\n\nTo what extent do you agree with this statement? You should refer closely to the text in your answer.',
            marks: 16,
            suggestedTimeMinutes: 22,
            questionType: 'evaluation',
            extract: EXTRACT_05,
            extractSource: EXTRACT_05_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'I agree that the writer connects the natural world to human experience. The forest is described using human words like "talking," "saying goodbye," and "transactions," which makes it feel relatable. Anya has studied the forest for seven years, showing a deep personal connection. The idea that the dying oak sends its resources to younger trees is presented as generous, like a person helping others. The final line says nothing is "lost" but "translated," which suggests that nature and human experience share the same patterns of change. However, the opening also says the forest is "a language most people had forgotten," which suggests we have become disconnected.',
              'Grade 6-7': 'I largely agree, though I would argue the extract does something more sophisticated than simply asserting connection — it systematically constructs a new framework for understanding the relationship between human and natural. The opening metaphor of the forest as a "book in a language most people had forgotten" positions nature not as separate but as estranged: the connection exists but has been lost through cultural amnesia. Anya functions as a bridge figure: her seven years of study represent the sustained attention required to recover this lost literacy. The anthropomorphic vocabulary — "talking," "traded," "saying goodbye" — performs the connection the statement describes: by rendering natural processes in human terms, the writer makes them emotionally accessible. However, this strategy also contains a tension the statement doesn\'t acknowledge: the text explicitly notes that sceptics "dismissed her research as anthropomorphism," embedding within itself the critique that human frameworks may distort rather than illuminate nature. The self-correcting "saying goodbye. Or perhaps... something more practical" demonstrates this tension in action. The closing line — "It is only translated" — ultimately resolves the tension by proposing translation as the fundamental process shared by both nature and human understanding: trees translate carbon; writers translate experience; readers translate text. Connection is not assumed but achieved through the labour of interpretation.',
              'Grade 8-9': 'The statement is correct but insufficiently radical. The writer does not merely show connection but argues for ontological continuity — the proposition that human experience is a subset of natural process, not an adjacent category. The opening metaphor of the forest as text is more than decorative: it proposes that the same interpretive frameworks we apply to human communication apply to the natural world, collapsing the hermeneutic distinction between culture and nature. The mycorrhizal network — "fungal threads that linked root to root" — functions as both scientific fact and philosophical metaphor: if trees exchange resources through underground networks, then the model of nature as competitive ("red in tooth and claw") is not merely incomplete but wrong. The phrase "defied the competitive model of evolution she had been taught as an undergraduate" is the extract\'s most politically charged moment: it positions received scientific wisdom as ideologically motivated, suggesting that the competitive model reflects human projection rather than natural reality. The dying oak\'s redistribution is described in a register that moves between altruism and pragmatism: "saying goodbye. Or perhaps... here, take this, use it, grow." This uncertainty is not weakness but honesty — the writer refuses to colonise the tree\'s action with human meaning while simultaneously acknowledging that human meaning is the only tool available. The soundscape paragraph — buzzard, woodpecker, wind — extends the argument from the underground to the atmospheric: the forest "was never silent... if you knew how to listen" redefines silence as the listener\'s failure rather than the forest\'s absence. The closing aphorism — "Nothing in a forest is ever truly lost. It is only translated" — achieves its power through the ambiguity of "translated": the word simultaneously describes chemical conversion and linguistic rendering, proposing that the processes by which forests sustain themselves and the processes by which humans make meaning are structurally identical. This is not connection but identity — and it demands that we reconceive not nature but ourselves.',
            },
            markScheme: [
              'Evaluates critically with a sustained personal response',
              'Engages with the statement — agrees, disagrees, or qualifies',
              'Selects and analyses appropriate textual evidence',
              'Considers the relationship between human and natural experience',
              'Demonstrates sophisticated understanding of the writer\'s methods',
              'Top band: evaluative, critical, conceptualised response',
            ],
          },
        ],
      },
      {
        id: 'ocr-p2-05-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 50 minutes on this section. You are reminded of the need to plan your answer.',
        totalMarks: 40,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'ocr-p2-05-q5',
            questionNumber: 5,
            questionText: 'Choose ONE of the following:\n\nEither:\n(a) Write a description suggested by this image: [Imagine a photograph of an ancient, sunlit forest with shafts of light falling between the trees onto a mossy floor.]\n\nOr:\n(b) Write the opening of a story about a character who discovers something hidden in the natural world.\n\n(32 marks for content and organisation / 8 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 50,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear and engaging piece that: uses descriptive or narrative techniques; has a clear structure with distinct paragraphs; includes varied vocabulary; attempts to create atmosphere or a sense of place; demonstrates generally accurate spelling, punctuation, and grammar.',
              'Grade 6-7': 'A compelling piece that: crafts sustained atmosphere or sense of place through sensory detail; uses varied and ambitious vocabulary; demonstrates conscious structural choices; employs a range of sentence forms for effect; shows consistent accuracy with some sophisticated constructions.',
              'Grade 8-9': 'An assured, crafted piece that: creates a vivid, immersive experience through precise, original imagery of the natural world; demonstrates sophisticated structural control with deliberate shifts in perspective or scale; uses an extensive vocabulary with precise word choices; employs varied sentence structures with complete control; shows technical virtuosity and a distinctive voice.',
            },
            markScheme: [
              'Content & Organisation (32 marks): Voice, imagery, atmosphere, structural control',
              'Technical Accuracy (8 marks): SPaG accuracy, ambition, and variety',
            ],
          },
        ],
      },
    ],
  },
]
