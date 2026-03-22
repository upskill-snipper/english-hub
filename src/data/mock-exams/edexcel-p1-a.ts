import type { MockExamPaper } from '../mock-exams'

// ─── Extracts ────────────────────────────────────────────────────────────────

const EXTRACT_01_GOTHIC = `The house had been waiting. That was how it felt to Clara as she pushed open the gate, its hinges screaming in the silence of the lane. Not abandoned — waiting. The windows watched her approach with the blank patience of something that had all the time in the world.

Inside, the air was thick and sweet, like overripe fruit left too long in a bowl. Dust lay on every surface in soft grey sheets, undisturbed for years, and yet the grandfather clock in the hallway was ticking. She pressed her hand against it and felt the vibration travel up her arm, into her chest, settling against her ribs like a second heartbeat.

The staircase rose into darkness. Each step groaned beneath her weight as though the house were speaking, protesting, warning. On the landing, a door stood ajar. Through the gap, she could see the edge of a bed, a white sheet pulled tight across a mattress, and on the pillow — the unmistakable indentation of a head. Someone had lain there recently. Someone, or something, had pressed its shape into the fabric and left it as a message.

Clara stood very still. From somewhere deep within the house — below her, she thought, beneath the floorboards — came a sound. Not a voice, exactly. More like breathing. Slow, deliberate, patient. The breathing of something that had been waiting a very long time and was now, at last, satisfied.`

const EXTRACT_01_SOURCE = 'Original Gothic fiction composition'

const EXTRACT_02_ROMANCE = `He found her letter on the morning of his departure, tucked beneath the sugar bowl where she always left things she wanted him to find without having to explain. The paper was thin, almost translucent, and her handwriting sloped across it in that familiar rush — words tumbling over each other as though her hand could barely keep pace with her thoughts.

"I have tried," she had written, "to say this to your face a hundred times. Each time, the words rearrange themselves into something smaller, something safer, something that isn't what I mean at all."

Thomas read the letter twice, then folded it carefully and placed it in his breast pocket, against his heart. He was aware of how theatrical the gesture was, and he did not care. Outside, the train whistle sounded — shrill, insistent, indifferent to the quiet catastrophe unfolding in a kitchen that smelled of burnt coffee and lavender.

He picked up his case. The kitchen door was still open, and through it he could see the garden she had planted in the first summer of their marriage: the roses she talked to when she thought nobody was listening, the crooked path she refused to straighten because she said imperfection was what made things beautiful. He wanted to memorise every detail, to press the image flat like a flower between the pages of his mind.

But the whistle sounded again, and there was no more time. There was never enough time. That was the thing about love — it always asked for one more minute than the world was willing to give.`

const EXTRACT_02_SOURCE = 'Original romantic fiction composition'

const EXTRACT_03_WAR = `The field was quiet now. Private Aden knelt in the mud and tried to remember what silence had sounded like before the shelling, but the memory would not come. His ears rang with a high, thin note that seemed to emanate from inside his own skull, as though his brain were vibrating at a frequency designed to drive him slowly mad.

Around him, the landscape had been rearranged. Trees that had stood for a hundred years lay on their sides with their roots exposed, pale and obscene, like bones pulled from the earth. The trench wall had collapsed in three places, and through the gaps he could see the open ground beyond — a churned expanse of brown and black where nothing living remained.

Beside him, Corporal Yates was writing a letter. His hands were steady, his face composed, and the pencil moved across the paper with the same unhurried care he might have used to write a shopping list. Aden watched him and felt something between admiration and fury. How could a man write home about weather and football when the world was ending thirty yards away?

"You should write to your mother," Yates said, without looking up.

"I wouldn't know what to say."

"Lie," Yates said simply. "Tell her you're eating well. Tell her the lads are in good spirits. Tell her anything except the truth."

He folded the letter, tucked it into his jacket, and looked at Aden for the first time. His eyes were calm, steady, ancient. They were the eyes of a man who had made his peace with something that Aden was still fighting.`

const EXTRACT_03_SOURCE = 'Original war fiction composition'

const EXTRACT_04_ADVENTURE = `The river narrowed without warning. One moment the canoe was gliding through open water, the sky vast and pale above them, and the next the jungle had closed in on both sides like a living curtain, branches reaching across the surface to knot themselves together overhead. The light changed — from white to green to something close to darkness.

Maya dipped her paddle and felt the current shift beneath her, a muscular pull that hadn't been there moments before. The water, which had been brown and sluggish, was now running fast and clear over stones she could see five feet below, smooth and pale as skulls.

"We need to pull over," she said.

Behind her, Kai said nothing. She turned and saw his face — jaw set, eyes fixed on something ahead that she couldn't yet see. The sound reached her a second later: a low, continuous roar, like an animal breathing through clenched teeth. The river was accelerating beneath them, the canoe no longer something they controlled but something they were riding, its aluminium hull vibrating against the water.

Then she saw it. The river simply ended. One hundred metres ahead, the surface dropped away into white spray and mist, and beyond the edge there was nothing but air and the distant green canopy of the valley below. The falls were enormous — a vertical wall of water plunging into a gorge so deep that the bottom was invisible.

Maya plunged her paddle in and pulled hard to the right. The canoe resisted, caught in the central current like a leaf in a drain. Her shoulders burned. The roar was deafening now, filling her chest, shaking her teeth. Fifty metres. Forty. The spray was in her face, cold and sharp as needles.`

const EXTRACT_04_SOURCE = 'Original adventure fiction composition'

const EXTRACT_05_PSYCHOLOGICAL = `Dr Lena Marsh had a theory about doors. Every patient who entered her consulting room paused at the threshold — some for a fraction of a second, some for considerably longer — and in that pause, she could read everything she needed to know. The hesitators were not ready. The ones who strode straight in were performing confidence they did not feel. The ones who knocked twice, waited, then opened the door themselves were the most interesting: they understood the rules but had decided to rewrite them.

Patient Seventeen knocked once, did not wait, and entered sideways, as though he expected the door frame to be narrower than it was. He was tall, thin, unremarkable in every physical respect, and yet there was something about the way he occupied space that unsettled her. He did not sit in the chair so much as lower himself into it, distributing his weight with the careful precision of a man defusing a bomb.

"Tell me why you're here," she said. It was always her opening line. The banality was deliberate — a blank canvas onto which the patient projected their own narrative.

He looked at her for a long moment. His eyes were grey, flat, depthless — like a frozen lake that might be two inches deep or two hundred feet.

"I remember things that haven't happened yet," he said.

Dr Marsh wrote nothing. She had trained herself not to react, not to lean forward or raise an eyebrow or do any of the things that television therapists did. Stillness was her instrument. She waited.

"Not visions," he continued. "Not dreams. Memories. Complete, detailed, sensory memories of events that are going to occur. I can tell you what you had for breakfast tomorrow."

The pen in her hand was perfectly still. But beneath the desk, where he could not see, her left foot was pressing hard into the floor.`

const EXTRACT_05_SOURCE = 'Original psychological fiction composition'

// ─── Edexcel Paper 1 Mock Exams (Set A) ──────────────────────────────────────

export const edexcelP1A: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 01 — Gothic Fiction
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p1-01',
    board: 'Edexcel',
    paperNumber: 1,
    title: 'Paper 1: Fiction and Imaginative Writing',
    subtitle: 'English Language 1EN0/01 — Mock A1',
    code: '1EN0/01',
    totalTimeMinutes: 105,
    totalMarks: 76,
    sections: [
      {
        id: 'edexcel-p1-01-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${EXTRACT_01_SOURCE}`,
        totalMarks: 36,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p1-01-q1',
            questionNumber: 1,
            questionText: 'Read the first two paragraphs of the extract.\n\nList four things about the house from this part of the source.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: EXTRACT_01_GOTHIC,
            extractSource: EXTRACT_01_SOURCE,
            modelAnswers: {
              'Grade 4-5': '1. The house felt like it had been waiting. 2. The gate hinges screamed when opened. 3. The air inside was thick and sweet. 4. The grandfather clock was ticking despite years of dust.',
            },
            markScheme: [
              '1 mark per valid point, maximum 4',
              'Must be from the first two paragraphs only',
              'Accept direct quotation or paraphrase',
            ],
          },
          {
            id: 'edexcel-p1-01-q2',
            questionNumber: 2,
            questionText: 'Read the whole extract. Analyse how the writer uses language and structure to create a sense of unease and supernatural threat.\n\nIn your answer you should consider:\n- the writer\'s use of words and phrases\n- the writer\'s use of language features and techniques\n- how the writer has structured the text to create effects\n\nSupport your views with detailed reference to the text.\n\n(8 marks for language analysis, 8 marks for structural analysis)',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'analysis',
            extract: EXTRACT_01_GOTHIC,
            extractSource: EXTRACT_01_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'The writer creates unease by making the house seem alive. The personification of "the house had been waiting" gives it human qualities, as if it has intentions. The windows "watched her approach" which is creepy because windows cannot really watch people. The simile "like overripe fruit" for the air inside suggests something rotting and unpleasant. The description of the clock ticking is unsettling because the house has been empty for years but the clock still works, which suggests something supernatural.\n\nStructurally, the writer moves Clara from outside to inside the house, getting deeper in as the extract goes on. First she is at the gate, then inside, then on the stairs, then on the landing. This makes it feel like she is being pulled further into danger. The extract ends with a mysterious sound "beneath the floorboards" which creates a cliffhanger and makes the reader want to know what is there.',
              'Grade 6-7': 'The writer constructs unease through sustained personification that blurs the boundary between building and organism. The opening — "The house had been waiting" — establishes sentience through the pluperfect tense, suggesting not merely awareness but prolonged, purposeful anticipation. The windows possess "blank patience," an oxymoron that combines emptiness with intention, while the qualifier "something that had all the time in the world" extends the house\'s consciousness across an inhuman timescale. The sensory details are deliberately transgressive: the air is "thick and sweet, like overripe fruit," a simile that associates the domestic with decay. The clock\'s vibration "settling against her ribs like a second heartbeat" is the extract\'s most disturbing image — the house is not merely alive but is merging with Clara, its rhythm becoming hers.\n\nStructurally, the extract operates as a progressive entrapment. The spatial movement from gate to hallway to staircase to landing enacts a physical narrowing, while the focus shifts from the external (what Clara sees) to the somatic (what she feels against her ribs). The discovery of the pillow indentation is positioned at the structural midpoint, pivoting from atmosphere to evidence — from "something feels wrong" to "something was here." The final paragraph\'s descent below the floorboards inverts the upward journey, suggesting that the true threat lies not above but beneath, not in the visible but in the buried. The final word, "satisfied," is devastating: it reframes Clara\'s entire journey as something the house has orchestrated.',
              'Grade 8-9': 'The writer deploys a Gothic lexicon of sentience to construct the house as a predatory consciousness, systematically eroding the Enlightenment distinction between animate and inanimate. The opening declaration — "The house had been waiting" — is grammatically simple but ontologically radical: the pluperfect continuous implies duration, and "waiting" presupposes agency and desire. The subsequent clarification, "Not abandoned — waiting," uses the dash to perform a correction that transforms absence into presence, neglect into intention. The windows\' "blank patience" yokes vacancy to volition through paradox, while "all the time in the world" appropriates a cliche and recharges it with menace — eternity becomes predatory rather than leisurely.\n\nThe sensory architecture is meticulously graduated: olfactory ("thick and sweet"), tactile (the clock\'s vibration), visual (the pillow indentation), and finally auditory (the breathing). This progression from the diffuse to the specific mirrors the sharpening of threat. The simile "like a second heartbeat" for the clock\'s vibration is the extract\'s epistemological crisis point: if the house has a heartbeat, the category distinction between dwelling and dweller collapses.\n\nStructurally, the text operates as a spatial and hermeneutic funnel. Clara\'s physical journey — gate, hallway, staircase, landing — progressively restricts her environment while deepening her penetration into the house\'s interiority. The pillow indentation functions as a semiotic rupture: its placement at the structural pivot forces a retrospective reinterpretation of every preceding detail. The final paragraph\'s auditory revelation — breathing "beneath the floorboards" — inverts the vertical ascent, suggesting a subterranean consciousness. The closing adjective "satisfied" performs a devastating retroactive reframing: Clara has not explored the house; the house has consumed her. The passive construction implicit in her stillness — "Clara stood very still" — marks the moment of surrender.',
            },
            markScheme: [
              'AO2 Language (8 marks): Analyses effects of specific language choices',
              'Identifies and comments on language techniques (personification, simile, sensory imagery)',
              'Explains how language creates mood, atmosphere, and meaning',
              'Uses subject terminology accurately and precisely',
              'AO2 Structure (8 marks): Comments on structural features and their effects',
              'Analyses how the writer sequences and shapes the text',
              'Comments on shifts in focus, perspective, or pace',
              'Top band: perceptive, detailed, conceptualised analysis of both language and structure',
            ],
          },
          {
            id: 'edexcel-p1-01-q3',
            questionNumber: 3,
            questionText: 'Read the whole extract.\n\n"The writer makes the reader share Clara\'s experience so completely that we feel trapped inside the house with her. The horror comes not from what we see but from what we sense."\n\nTo what extent do you agree with this view?\n\nYou should:\n- consider the writer\'s use of language, form, and structure\n- evaluate how the writer creates effects on the reader\n- support your views with quotations from the text.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: EXTRACT_01_GOTHIC,
            extractSource: EXTRACT_01_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'I agree that the writer makes us feel trapped with Clara. We follow her journey step by step, from the gate into the house and up the stairs, so we experience everything as she does. The description of the air being "thick and sweet" appeals to our sense of smell, making us feel like we are really there. The clock vibrating against her ribs makes us feel physically uncomfortable. However, I partly disagree about the horror coming only from what we "sense" — the pillow indentation is something Clara sees, and it is one of the scariest parts because it is physical evidence that something was there. The breathing at the end is also heard, not just sensed. Overall, I agree that the writer uses senses to create horror, but sight and sound are important too, not just vague feelings.',
              'Grade 6-7': 'I substantially agree with this statement, though I would argue that the writer\'s achievement is more specific than "sharing Clara\'s experience" — the text actively merges Clara\'s sensory perception with the reader\'s, creating a Gothic identification that makes detachment impossible. The third-person narration is deceptively close: we are told what Clara feels (the vibration "settling against her ribs"), what she hears (the ticking, the breathing), and what she sees (the pillow indentation), but never what she thinks. This absence of interiority is crucial: we occupy her senses without accessing her interpretation, which means we must construct our own fear from raw sensory data.\n\nThe claim that horror comes from "what we sense" rather than "what we see" is largely accurate. The extract\'s most effective moments are non-visual: the air\'s sweetness, the clock\'s vibration, the breathing beneath the floorboards. Even the visual details resist clarity — the door is only "ajar," the indentation merely "unmistakable" without elaboration. However, I would complicate this: the pillow indentation works precisely because it is visual evidence within a predominantly sensory landscape. It is the one moment of concrete proof, and its power derives from the contrast with the vagueness surrounding it.\n\nThe word "trapped" in the statement is particularly apt. Structurally, the extract offers no exit: Clara moves ever deeper, and the final revelation that the threat is beneath her means there is no direction left that is safe. The reader, having followed this trajectory, cannot retreat either.',
              'Grade 8-9': 'The statement identifies a genuine and sophisticated aspect of the extract\'s Gothic machinery, but I would argue it both understates and misidentifies the source of the text\'s power. The writer does not merely make us "share" Clara\'s experience — the text systematically colonises the reader\'s sensory apparatus, converting narrative description into somatic experience through a carefully calibrated escalation of bodily involvement.\n\nThe claim rests on an implicit distinction between visual and sensory horror, and this distinction is crucial. The extract is remarkably sparing with visual information: the house is described in terms of sound (screaming hinges), smell (overripe fruit), and touch (the clock\'s vibration), while visual details are consistently partial — a door "ajar," the "edge" of a bed, an "indentation." This strategy of visual withholding forces the reader into the same epistemological position as Clara: aware that something is wrong without being able to see what. The simile "like a second heartbeat" for the clock\'s vibration is the text\'s most radical moment of reader-identification, because heartbeat is the one sensation every reader shares involuntarily; to describe the house\'s pulse in these terms is to make the reader\'s own body a site of Gothic intrusion.\n\nHowever, I would challenge the statement\'s claim that we feel "trapped." The text is more insidious than entrapment: Clara enters voluntarily, even willingly, and the extract never suggests she wants to leave. The horror is not imprisonment but seduction — the house draws her in through curiosity, through the irresistible logic of exploration ("each step" upward, each door opened), and the reader follows for exactly the same reason. The breathing at the end is described as "satisfied," and the satisfaction is double: the house\'s, because its prey has arrived, and the reader\'s, because the narrative promise of revelation has been fulfilled. The text thus implicates the reader not as victim but as collaborator in its Gothic logic.',
            },
            markScheme: [
              'Evaluates critically with a clear, sustained personal response',
              'Engages with the statement and offers a reasoned argument',
              'Analyses writer\'s methods (language, structure, form)',
              'Uses well-selected textual evidence',
              'Considers alternative interpretations',
              'Top band: perceptive, critical, conceptualised evaluation',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p1-01-writing',
        title: 'Section B: Imaginative Writing',
        description: 'You are advised to spend about 45 minutes on this section. You must complete BOTH questions. You are reminded of the need to plan your answers.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p1-01-q4',
            questionNumber: 4,
            questionText: 'Write the opening of a story that begins with a character entering an unfamiliar building.\n\nYou may wish to use the reading extract as a stimulus for your writing.\n\nWrite approximately 150-200 words.\n\n(8 marks for content and organisation / 8 marks for technical accuracy)',
            marks: 16,
            suggestedTimeMinutes: 15,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear, focused opening that: establishes a character and setting; uses some descriptive techniques (simile, adjectives); creates a sense of atmosphere; demonstrates generally accurate spelling, punctuation, and grammar.',
              'Grade 6-7': 'A compelling opening that: crafts atmosphere through sustained sensory detail; creates intrigue or tension through deliberate choices; demonstrates controlled, varied sentence structures; shows consistent technical accuracy with some ambitious constructions.',
              'Grade 8-9': 'An assured, crafted opening that: creates a distinctive voice and atmosphere from the first line; uses precise, original imagery; demonstrates sophisticated structural choices; shows technical virtuosity and an extensive vocabulary deployed with control.',
            },
            markScheme: [
              'AO5 Content & Organisation (8 marks): Communication, tone, register appropriate to form',
              'AO5: Engaging opening that establishes character, setting, or atmosphere',
              'AO6 Technical Accuracy (8 marks): Accurate sentence demarcation',
              'AO6: Range of punctuation, accurate spelling, varied sentence forms',
            ],
          },
          {
            id: 'edexcel-p1-01-q5',
            questionNumber: 5,
            questionText: 'Choose ONE of the following titles for your writing:\n\nEither:\n(a) "The house remembered everything." Write a story that begins with this sentence.\n\nOr:\n(b) Write a story about a discovery that changes the way a character sees the world.\n\n(16 marks for content and organisation / 8 marks for technical accuracy)',
            marks: 24,
            suggestedTimeMinutes: 30,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear and engaging piece of imaginative writing that: has a recognisable narrative structure with a beginning, middle, and end; uses descriptive techniques including simile, metaphor, and sensory detail; includes varied vocabulary; creates atmosphere or tension at key moments; demonstrates generally accurate spelling and punctuation with some variety in sentence structure.',
              'Grade 6-7': 'A compelling piece that: crafts a controlled narrative with deliberate pacing; uses varied and ambitious vocabulary throughout; employs a range of language techniques fluently and for effect; demonstrates conscious structural choices such as shifts in time, pace, or perspective; shows consistent accuracy in spelling, punctuation, and grammar with ambitious constructions including semicolons and parenthetical dashes.',
              'Grade 8-9': 'An assured, sophisticated piece that: creates a vivid, immersive narrative with a distinctive voice; demonstrates masterful structural control with deliberate shifts in pace, focus, or perspective; uses precise, original imagery and an extensive vocabulary; employs varied sentence structures with complete control for deliberate effect; shows technical virtuosity throughout; crafts a satisfying narrative arc with thematic depth.',
            },
            markScheme: [
              'AO5 Content & Organisation (16 marks): Compelling, crafted narrative',
              'AO5: Effective use of tone, style, and register matched to purpose',
              'AO5: Structured and developed narrative with coherent paragraphing',
              'AO6 Technical Accuracy (8 marks): Sentence demarcation consistently accurate',
              'AO6: Wide range of punctuation used effectively',
              'AO6: Accurate spelling including ambitious vocabulary',
              'AO6: Varied sentence forms used purposefully for effect',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 02 — Romance Fiction
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p1-02',
    board: 'Edexcel',
    paperNumber: 1,
    title: 'Paper 1: Fiction and Imaginative Writing',
    subtitle: 'English Language 1EN0/01 — Mock A2',
    code: '1EN0/01',
    totalTimeMinutes: 105,
    totalMarks: 76,
    sections: [
      {
        id: 'edexcel-p1-02-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${EXTRACT_02_SOURCE}`,
        totalMarks: 36,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p1-02-q1',
            questionNumber: 1,
            questionText: 'Read the first two paragraphs of the extract.\n\nList four things about the letter and the morning from this part of the source.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: EXTRACT_02_ROMANCE,
            extractSource: EXTRACT_02_SOURCE,
            modelAnswers: {
              'Grade 4-5': '1. Thomas found the letter on the morning of his departure. 2. It was tucked beneath the sugar bowl. 3. The paper was thin and almost translucent. 4. Her handwriting sloped across the page.',
            },
            markScheme: [
              '1 mark per valid point, maximum 4',
              'Must be from the first two paragraphs only',
              'Accept direct quotation or paraphrase',
            ],
          },
          {
            id: 'edexcel-p1-02-q2',
            questionNumber: 2,
            questionText: 'Read the whole extract. Analyse how the writer uses language and structure to convey the emotions of love and loss.\n\nIn your answer you should consider:\n- the writer\'s use of words and phrases\n- the writer\'s use of language features and techniques\n- how the writer has structured the text to create effects\n\nSupport your views with detailed reference to the text.\n\n(8 marks for language analysis, 8 marks for structural analysis)',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'analysis',
            extract: EXTRACT_02_ROMANCE,
            extractSource: EXTRACT_02_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'The writer uses emotional language to show Thomas\'s feelings. The letter was left "beneath the sugar bowl" which shows the woman had a habit of leaving things there, suggesting a long relationship. The metaphor "quiet catastrophe" combines something small and personal with something huge and devastating, showing how Thomas feels his world is falling apart even though it looks normal from outside. The garden description is emotional because the roses she "talked to" show a loving, gentle person, and Thomas wanting to "memorise every detail" shows he knows he is losing something precious.\n\nStructurally, the extract begins with the discovery of the letter, then moves to Thomas reading it, then the train whistle interrupts. This pattern of emotional moments being cut short by the train creates tension. The ending returns to the idea of time running out — "there was never enough time" — which gives the extract a sense of finality.',
              'Grade 6-7': 'The writer constructs an emotional landscape through a sustained tension between the intimate and the external. The letter\'s placement "beneath the sugar bowl where she always left things she wanted him to find without having to explain" is a masterful opening: the habitual "always" establishes a long relationship, while "without having to explain" reveals a communication pattern built on indirectness — love expressed through placement rather than declaration. The letter itself, "thin, almost translucent," becomes a metaphor for the relationship: fragile, see-through, barely substantial enough to hold the weight of feeling.\n\nThe quoted words — "the words rearrange themselves into something smaller, something safer" — deploy anaphoric repetition of "something" to perform the very inadequacy they describe. Language is presented as an obstacle to feeling rather than its vehicle. Thomas\'s gesture of placing the letter "against his heart" is acknowledged as "theatrical" — the writer\'s self-awareness prevents sentimentality while the gesture itself remains genuinely moving.\n\nStructurally, the train whistle functions as a ruthless temporal mechanism. It sounds twice, each time interrupting an emotional moment, creating a pattern of feeling-interrupted-by-departure that mirrors the extract\'s central theme: love exists in borrowed time. The final aphorism — "it always asked for one more minute than the world was willing to give" — repositions the personal story as universal, the definite article "the world" expanding private grief to cosmic scale.',
              'Grade 8-9': 'The writer orchestrates a rhetoric of loss that operates through the tension between possession and relinquishment, presence and departure. The opening image — the letter "tucked beneath the sugar bowl" — is freighted with domestic symbolism: sugar connotes sweetness, and "tucked" implies tenderness, but the verb "found" positions Thomas as discoverer rather than recipient, estranging him from the intimacy of the gesture. The paper\'s translucence — "thin, almost translucent" — enacts the paradox of disclosure: the letter is simultaneously a revelation and a veil, its physical insubstantiality mirroring the inadequacy of language that its content describes.\n\nThe letter\'s quoted passage performs a mise en abyme of the extract\'s central crisis. "The words rearrange themselves into something smaller, something safer, something that isn\'t what I mean at all" — the tricolon\'s progressive retreat from meaning, with each "something" marking a further diminishment, dramatises the entropy of expression. The writer thus positions language itself as the extract\'s antagonist: feeling exceeds articulation.\n\nStructurally, the extract is governed by two competing temporal logics: the cyclical time of domestic ritual (the sugar bowl, the garden, the roses) and the linear time of departure (the train whistle, the ticking clock of the final paragraph). The garden functions as a spatial embodiment of the marriage — cultivated, imperfect ("the crooked path she refused to straighten"), organic — and Thomas\'s desire to "press the image flat like a flower between the pages of his mind" employs the preservation metaphor to acknowledge that what he is doing is killing a living thing in order to keep it. The final sentence\'s abstraction — love asking "for one more minute than the world was willing to give" — personifies both love and world as agents with competing agendas, the deficit of one minute transforming infinite feeling into permanent insufficiency.',
            },
            markScheme: [
              'AO2 Language (8 marks): Analyses effects of specific language choices',
              'Identifies and comments on language techniques (metaphor, personification, symbolism)',
              'Explains how language conveys emotion and creates meaning',
              'Uses subject terminology accurately and precisely',
              'AO2 Structure (8 marks): Comments on structural features and their effects',
              'Analyses how the text is sequenced and shaped for emotional impact',
              'Comments on shifts in focus, the role of interruption, and pacing',
              'Top band: perceptive, detailed, conceptualised analysis of both language and structure',
            ],
          },
          {
            id: 'edexcel-p1-02-q3',
            questionNumber: 3,
            questionText: 'Read the whole extract.\n\n"The writer creates a deeply moving portrait of love that is defined by what cannot be said. The real emotion lies in the silences and the objects, not in the words themselves."\n\nTo what extent do you agree with this view?\n\nYou should:\n- consider the writer\'s use of language, form, and structure\n- evaluate how the writer creates effects on the reader\n- support your views with quotations from the text.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: EXTRACT_02_ROMANCE,
            extractSource: EXTRACT_02_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'I agree that the extract is moving and that a lot of the emotion comes from objects rather than words. The sugar bowl is important because it shows a private habit between the two characters. The letter is left in a place rather than given in person, which suggests the woman could not say these things face to face. The garden — especially the roses and the "crooked path" — represents their relationship. Thomas wanting to memorise the garden shows his love more than anything he says.\n\nHowever, I partly disagree that "what cannot be said" is the only source of emotion. The letter itself contains powerful words: "I have tried to say this to your face a hundred times" is direct and emotional. The final line about love asking "for one more minute" is a statement about love that is clearly expressed, not silent. So while objects and silences are important, the writer does also use words to create emotion.',
              'Grade 6-7': 'I largely agree with this statement, and I would argue it identifies the extract\'s most sophisticated achievement: the construction of a love story in which the deepest feelings are displaced onto objects and gestures precisely because language has failed.\n\nThe letter — the extract\'s central object — is itself a confession of linguistic failure: "the words rearrange themselves into something smaller, something safer, something that isn\'t what I mean at all." Language is presented as an active antagonist to feeling, rearranging itself to resist the truth. The sugar bowl becomes a more eloquent declaration than any sentence: its habitual use ("where she always left things") establishes a private language of placement that bypasses speech entirely.\n\nThe garden is the extract\'s richest symbolic field. The roses she "talked to when she thought nobody was listening" is deeply moving because it reveals a character who can speak honestly only to things that cannot answer. The "crooked path she refused to straighten because she said imperfection was what made things beautiful" is simultaneously a gardening preference and a philosophy of love — and Thomas understands this, which is what makes his desire to memorise it so poignant.\n\nHowever, I would nuance the statement: the final line is explicitly articulate — "it always asked for one more minute than the world was willing to give." This is not silence but eloquence, and its power comes from the precision of "one more minute." The extract therefore moves from inarticulacy to articulation, and the emotion of the ending derives from the fact that Thomas can finally name what the woman could not.',
            },
            markScheme: [
              'Evaluates critically with a clear, sustained personal response',
              'Engages with the statement and offers a reasoned argument',
              'Analyses writer\'s methods (language, structure, form)',
              'Uses well-selected textual evidence',
              'Considers alternative interpretations',
              'Top band: perceptive, critical, conceptualised evaluation',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p1-02-writing',
        title: 'Section B: Imaginative Writing',
        description: 'You are advised to spend about 45 minutes on this section. You must complete BOTH questions. You are reminded of the need to plan your answers.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p1-02-q4',
            questionNumber: 4,
            questionText: 'Write a description of a place that holds a powerful memory for your character.\n\nYou may wish to use the reading extract as a stimulus for your writing.\n\nWrite approximately 150-200 words.\n\n(8 marks for content and organisation / 8 marks for technical accuracy)',
            marks: 16,
            suggestedTimeMinutes: 15,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear, focused description that: establishes a setting with some sensory detail; connects the place to a memory or emotion; uses some descriptive techniques; demonstrates generally accurate spelling, punctuation, and grammar.',
              'Grade 6-7': 'A compelling description that: creates atmosphere through sustained sensory imagery; links physical details to emotional resonance; demonstrates controlled, varied sentence structures; shows consistent technical accuracy with ambitious constructions.',
              'Grade 8-9': 'An assured, crafted piece that: interweaves place and memory with seamless sophistication; uses precise, original imagery; demonstrates a distinctive voice and masterful control of tone; shows technical virtuosity throughout.',
            },
            markScheme: [
              'AO5 Content & Organisation (8 marks): Communication, tone, register appropriate to form',
              'AO5: Effective descriptive writing that connects place to emotion',
              'AO6 Technical Accuracy (8 marks): Accurate sentence demarcation',
              'AO6: Range of punctuation, accurate spelling, varied sentence forms',
            ],
          },
          {
            id: 'edexcel-p1-02-q5',
            questionNumber: 5,
            questionText: 'Choose ONE of the following titles for your writing:\n\nEither:\n(a) Write a story about a journey that a character does not want to make.\n\nOr:\n(b) "The last time." Write a story with this title.\n\n(16 marks for content and organisation / 8 marks for technical accuracy)',
            marks: 24,
            suggestedTimeMinutes: 30,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear and engaging piece of imaginative writing that: has a recognisable narrative structure; uses descriptive and narrative techniques; includes varied vocabulary; creates atmosphere or emotional impact; demonstrates generally accurate spelling and punctuation.',
              'Grade 6-7': 'A compelling piece that: crafts a controlled narrative with deliberate pacing; uses varied and ambitious vocabulary; demonstrates conscious structural choices; shows consistent accuracy in spelling, punctuation, and grammar with ambitious constructions.',
              'Grade 8-9': 'An assured, sophisticated piece that: creates a vivid, immersive narrative with a distinctive voice; demonstrates masterful structural control; uses precise, original imagery and extensive vocabulary; shows technical virtuosity throughout; crafts a satisfying narrative arc with emotional and thematic depth.',
            },
            markScheme: [
              'AO5 Content & Organisation (16 marks): Compelling, crafted narrative',
              'AO5: Effective use of tone, style, and register',
              'AO5: Structured and developed with coherent paragraphing',
              'AO6 Technical Accuracy (8 marks): Sentence demarcation consistently accurate',
              'AO6: Wide range of punctuation, accurate spelling, varied sentence forms',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 03 — War Fiction
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p1-03',
    board: 'Edexcel',
    paperNumber: 1,
    title: 'Paper 1: Fiction and Imaginative Writing',
    subtitle: 'English Language 1EN0/01 — Mock A3',
    code: '1EN0/01',
    totalTimeMinutes: 105,
    totalMarks: 76,
    sections: [
      {
        id: 'edexcel-p1-03-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${EXTRACT_03_SOURCE}`,
        totalMarks: 36,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p1-03-q1',
            questionNumber: 1,
            questionText: 'Read the first two paragraphs of the extract.\n\nList four things about the battlefield or Aden\'s experience from this part of the source.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: EXTRACT_03_WAR,
            extractSource: EXTRACT_03_SOURCE,
            modelAnswers: {
              'Grade 4-5': '1. The field was quiet after the shelling. 2. Aden\'s ears were ringing. 3. Trees had been knocked onto their sides. 4. The trench wall had collapsed in three places.',
            },
            markScheme: [
              '1 mark per valid point, maximum 4',
              'Must be from the first two paragraphs only',
              'Accept direct quotation or paraphrase',
            ],
          },
          {
            id: 'edexcel-p1-03-q2',
            questionNumber: 2,
            questionText: 'Read the whole extract. Analyse how the writer uses language and structure to present the psychological impact of war.\n\nIn your answer you should consider:\n- the writer\'s use of words and phrases\n- the writer\'s use of language features and techniques\n- how the writer has structured the text to create effects\n\nSupport your views with detailed reference to the text.\n\n(8 marks for language analysis, 8 marks for structural analysis)',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'analysis',
            extract: EXTRACT_03_WAR,
            extractSource: EXTRACT_03_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'The writer uses powerful language to show how war affects the soldiers. The opening says the field was "quiet now" which sounds peaceful but the word "now" reminds us it was not quiet before, hinting at the violence. Aden tries to "remember what silence had sounded like before the shelling" which shows the war has changed even basic things like silence for him. The trees are described as having roots "pale and obscene, like bones pulled from the earth" — the simile comparing roots to bones connects the damaged landscape to human bodies.\n\nStructurally, the extract moves from description of the battlefield to the contrast between Aden and Yates. Yates is calm and writing a letter while the world is "ending thirty yards away" — this contrast makes the reader feel the strangeness of war. The dialogue at the end is short and simple, which contrasts with the descriptive paragraphs, showing how soldiers have learned to say less.',
              'Grade 6-7': 'The writer presents the psychological impact of war through a sustained dissonance between external calm and internal devastation. The opening paradox — "The field was quiet now" — establishes silence not as peace but as aftermath, the qualifier "now" functioning as a temporal wound. Aden\'s attempt to "remember what silence had sounded like before" reveals a cognitive fracture: the war has not merely added noise but has retroactively contaminated his memory of its absence. The tinnitus — "a high, thin note that seemed to emanate from inside his own skull" — literalises the internalisation of violence; the war has migrated from the external landscape into his body.\n\nThe landscape description employs pathetic fallacy in reverse: rather than nature reflecting human emotion, nature reflects human violence. The exposed tree roots are "pale and obscene, like bones pulled from the earth," a simile that fuses botanical and anatomical vocabulary, suggesting that the shelling has violated the landscape as it violates bodies. The adjective "obscene" is deliberately chosen — it implies a moral judgment on what war reveals.\n\nStructurally, the introduction of Yates functions as a foil. His composure — "hands steady, face composed" — contrasts with Aden\'s psychological distress, but the contrast is itself disturbing: Yates\'s calm is not reassuring but alienating. The dialogue\'s imperative "Lie" is the extract\'s structural pivot, redefining communication in wartime as a deliberate act of deception. The final image — Yates\'s eyes described as "calm, steady, ancient" — uses the unexpected adjective "ancient" to suggest that combat ages a person beyond their years, that Yates has arrived at a wisdom Aden cannot yet access.',
              'Grade 8-9': 'The writer constructs a phenomenology of post-bombardment consciousness through a text that operates simultaneously at the somatic, perceptual, and existential levels. The opening sentence — "The field was quiet now" — performs a temporal rupture through the adverb "now," which positions the present as defined entirely by what preceded it. Silence is not peace but void, and Aden\'s inability to "remember what silence had sounded like before" enacts a catastrophic epistemological loss: the war has not merely damaged his hearing but his capacity to conceive of its absence. The tinnitus, described as "a frequency designed to drive him slowly mad," deploys the passive construction "designed" to imply intentionality — as though the noise is a weapon that continues operating after the shells have stopped.\n\nThe landscape serves as an objective correlative for psychological destruction. The exposed tree roots — "pale and obscene, like bones pulled from the earth" — achieve their power through the collision of natural and corporeal registers. The adjective "obscene" is etymologically precise: from the Latin obscaenus, meaning ill-omened or offensive to decency, it positions the exposure of hidden things (roots, bones, the interior of the earth) as a violation of natural order. The "churned expanse" where "nothing living remained" is both literal description and metaphor for Aden\'s inner landscape.\n\nStructurally, the shift from descriptive to dialogic prose in the second half performs the transition from isolation to attempted connection. Yates functions not as a character but as a philosophical position: the man who has accepted what Aden still resists. The imperative "Lie" is devastating in its monosyllabic economy — a single word that redefines the purpose of language in wartime from communication to protection. The tricolon of instructions ("Tell her you\'re eating well. Tell her the lads are in good spirits. Tell her anything except the truth") uses anaphoric repetition to create a liturgy of deception, the rhythmic regularity itself a form of emotional control. The final description of Yates\'s eyes as "ancient" introduces a temporal disjunction — youth and antiquity coexisting in a single gaze — that articulates what the text has been building towards: war does not merely kill; it displaces individuals from their own timeline.',
            },
            markScheme: [
              'AO2 Language (8 marks): Analyses effects of specific language choices',
              'Identifies and comments on language techniques (simile, pathetic fallacy, symbolism)',
              'Explains how language conveys psychological experience',
              'Uses subject terminology accurately and precisely',
              'AO2 Structure (8 marks): Comments on structural features and their effects',
              'Analyses shifts between description and dialogue',
              'Comments on contrast, juxtaposition, and pacing',
              'Top band: perceptive, detailed, conceptualised analysis of both language and structure',
            ],
          },
          {
            id: 'edexcel-p1-03-q3',
            questionNumber: 3,
            questionText: 'Read the whole extract.\n\n"The writer shows that the true horror of war is not the physical destruction but the way it changes how people think, feel, and communicate with each other."\n\nTo what extent do you agree with this view?\n\nYou should:\n- consider the writer\'s use of language, form, and structure\n- evaluate how the writer creates effects on the reader\n- support your views with quotations from the text.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: EXTRACT_03_WAR,
            extractSource: EXTRACT_03_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'I mostly agree with this statement. The extract does show physical destruction — trees knocked over and trenches collapsed — but the focus is more on how the soldiers are affected mentally. Aden cannot even remember normal silence anymore, which shows how war has changed his thinking. The contrast between Aden and Yates shows different ways of coping: Aden is confused and distressed, while Yates has become calm in a way that seems unnatural. Yates telling Aden to "lie" to his mother shows that war changes how people communicate — they cannot be honest anymore.\n\nHowever, I partly disagree because the physical description is also horrifying. The image of tree roots "like bones pulled from the earth" is disturbing and reminds us of real physical violence. The "churned expanse" where "nothing living remained" is frightening in a physical way. So I think the extract shows both types of horror, not just the psychological one.',
              'Grade 6-7': 'I agree with this statement to a significant extent, and I would argue that the extract\'s most powerful achievement is its demonstration that physical destruction and psychological damage are not separate categories but aspects of a single process of annihilation.\n\nThe evidence for psychological horror is compelling. Aden\'s inability to recall pre-war silence represents a cognitive colonisation — the war has overwritten his sensory memory. The tinnitus, "a frequency designed to drive him slowly mad," suggests a deliberate, ongoing assault. But the most telling evidence for the statement is the dialogue between the two soldiers. Yates\'s instruction to "Lie" is devastating because it reveals that communication itself has been weaponised: writing home is no longer about connection but about concealment. The tricolon of suggested lies — eating well, spirits high, anything except the truth — defines the soldier\'s relationship to language as fundamentally corrupted.\n\nHowever, I would push back against the binary the statement implies. The physical descriptions are not merely backdrop; they are the means through which psychological damage is expressed. The tree roots "like bones" do not merely describe a landscape — they reveal a mind that can no longer see nature without seeing death. The "churned expanse" is both a field and Aden\'s consciousness. The physical and the psychological are not competing horrors but overlapping ones, and the extract\'s power lies in their inseparability.',
            },
            markScheme: [
              'Evaluates critically with a clear, sustained personal response',
              'Engages with the statement and offers a reasoned argument',
              'Analyses writer\'s methods (language, structure, form)',
              'Uses well-selected textual evidence',
              'Considers alternative interpretations',
              'Top band: perceptive, critical, conceptualised evaluation',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p1-03-writing',
        title: 'Section B: Imaginative Writing',
        description: 'You are advised to spend about 45 minutes on this section. You must complete BOTH questions. You are reminded of the need to plan your answers.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p1-03-q4',
            questionNumber: 4,
            questionText: 'Write a description of a scene immediately after something dramatic has happened. Focus on the details of the aftermath rather than the event itself.\n\nYou may wish to use the reading extract as a stimulus for your writing.\n\nWrite approximately 150-200 words.\n\n(8 marks for content and organisation / 8 marks for technical accuracy)',
            marks: 16,
            suggestedTimeMinutes: 15,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear, focused description that: establishes a scene of aftermath; uses sensory detail to convey the setting; employs some descriptive techniques; demonstrates generally accurate spelling, punctuation, and grammar.',
              'Grade 6-7': 'A compelling description that: creates atmosphere through sustained, well-chosen detail; focuses on the aftermath without needing to explain the event; demonstrates controlled, varied sentence structures; shows consistent technical accuracy with ambitious constructions.',
              'Grade 8-9': 'An assured, crafted description that: reveals the drama entirely through its aftermath; uses precise, original imagery with restraint and control; demonstrates sophisticated structural choices; shows technical virtuosity and a distinctive voice throughout.',
            },
            markScheme: [
              'AO5 Content & Organisation (8 marks): Communication, tone, register appropriate to form',
              'AO5: Descriptive focus on aftermath with atmospheric detail',
              'AO6 Technical Accuracy (8 marks): Accurate sentence demarcation',
              'AO6: Range of punctuation, accurate spelling, varied sentence forms',
            ],
          },
          {
            id: 'edexcel-p1-03-q5',
            questionNumber: 5,
            questionText: 'Choose ONE of the following titles for your writing:\n\nEither:\n(a) Write a story about two people who cope with the same situation in completely different ways.\n\nOr:\n(b) "The letter home." Write a story with this title.\n\n(16 marks for content and organisation / 8 marks for technical accuracy)',
            marks: 24,
            suggestedTimeMinutes: 30,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear and engaging piece of imaginative writing that: has a recognisable narrative structure; uses descriptive and narrative techniques; includes varied vocabulary; creates atmosphere or tension; demonstrates generally accurate spelling and punctuation.',
              'Grade 6-7': 'A compelling piece that: crafts a controlled narrative with deliberate pacing and contrast; uses varied and ambitious vocabulary; demonstrates conscious structural choices; shows consistent accuracy in spelling, punctuation, and grammar.',
              'Grade 8-9': 'An assured, sophisticated piece that: creates a vivid, immersive narrative with a distinctive voice; demonstrates masterful use of contrast and juxtaposition; uses precise, original imagery and extensive vocabulary; shows technical virtuosity throughout; crafts a satisfying narrative arc with psychological depth.',
            },
            markScheme: [
              'AO5 Content & Organisation (16 marks): Compelling, crafted narrative',
              'AO5: Effective use of tone, style, and register',
              'AO5: Structured and developed with coherent paragraphing',
              'AO6 Technical Accuracy (8 marks): Sentence demarcation consistently accurate',
              'AO6: Wide range of punctuation, accurate spelling, varied sentence forms',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 04 — Adventure Fiction
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p1-04',
    board: 'Edexcel',
    paperNumber: 1,
    title: 'Paper 1: Fiction and Imaginative Writing',
    subtitle: 'English Language 1EN0/01 — Mock A4',
    code: '1EN0/01',
    totalTimeMinutes: 105,
    totalMarks: 76,
    sections: [
      {
        id: 'edexcel-p1-04-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${EXTRACT_04_SOURCE}`,
        totalMarks: 36,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p1-04-q1',
            questionNumber: 1,
            questionText: 'Read the first two paragraphs of the extract.\n\nList four things about the river or the surroundings from this part of the source.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: EXTRACT_04_ADVENTURE,
            extractSource: EXTRACT_04_SOURCE,
            modelAnswers: {
              'Grade 4-5': '1. The river narrowed without warning. 2. The jungle closed in on both sides. 3. The light changed from white to green to near darkness. 4. The current shifted and became stronger.',
            },
            markScheme: [
              '1 mark per valid point, maximum 4',
              'Must be from the first two paragraphs only',
              'Accept direct quotation or paraphrase',
            ],
          },
          {
            id: 'edexcel-p1-04-q2',
            questionNumber: 2,
            questionText: 'Read the whole extract. Analyse how the writer uses language and structure to create a mounting sense of danger and urgency.\n\nIn your answer you should consider:\n- the writer\'s use of words and phrases\n- the writer\'s use of language features and techniques\n- how the writer has structured the text to create effects\n\nSupport your views with detailed reference to the text.\n\n(8 marks for language analysis, 8 marks for structural analysis)',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'analysis',
            extract: EXTRACT_04_ADVENTURE,
            extractSource: EXTRACT_04_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'The writer creates danger through powerful descriptions. The jungle is like "a living curtain" which personifies it as something that traps them. The stones beneath the water are "smooth and pale as skulls" which is a creepy simile linking the water to death. The waterfall roar is compared to "an animal breathing through clenched teeth" which makes it sound threatening and alive. The spray described as "cold and sharp as needles" uses a simile to make it sound painful.\n\nStructurally, the danger builds gradually. The opening is calm with "open water" and "the sky vast and pale," but then everything changes quickly. The sentences become shorter as the danger increases — "We need to pull over" is simple and urgent. The countdown of distance (one hundred metres, fifty, forty) creates a sense of time running out, making the reader feel the urgency.',
              'Grade 6-7': 'The writer constructs danger through a progressive loss of control, expressed through both language and structural acceleration. The opening sentence\'s temporal markers — "One moment... the next" — establish a world where safety can be revoked without warning, while the jungle\'s agency ("closed in," "reaching across") repositions nature as antagonist. The light\'s transition "from white to green to something close to darkness" uses the tricolon to enact diminishment, the vague qualifier "something close to" suggesting that the darkness defies precise categorisation.\n\nThe river itself is personified through a sustained vocabulary of physical force: the current has a "muscular pull," and later the canoe becomes "something they were riding" rather than controlling — the passive construction marking the transfer of agency from human to natural. The simile "smooth and pale as skulls" for the river stones is particularly effective: it introduces mortality into the landscape without requiring an explicit threat, embedding death in the scenery.\n\nStructurally, the extract accelerates through progressive compression. The opening paragraph\'s long, flowing sentences mirror the wide river, while the dialogue — "We need to pull over" — introduces the clipped syntax of emergency. The final paragraph\'s numerical countdown ("One hundred metres... Fifty... Forty") creates a spatial urgency that operates independently of the prose, the reader involuntarily calculating the remaining distance. The extract ends mid-action, without resolution, which is itself a structural choice: the danger is not narrated to completion but left suspended, the reader trapped in the same unresolved peril as the characters.',
              'Grade 8-9': 'The writer orchestrates danger through a systematic transfer of agency from human to environmental, expressed linguistically through shifts in grammatical subject position and structurally through the progressive compression of time and space. The opening sentence\'s construction — "The river narrowed without warning" — positions the river as grammatical agent performing a deliberate act, while "without warning" attributes to it a capacity for deception. This anthropomorphism intensifies as the jungle "closed in" and branches "reaching across" to "knot themselves together" — the reflexive verb suggesting autonomous, purposeful action.\n\nThe sensory language operates as a graduated threat register. Visual clarity degrades ("from white to green to something close to darkness"), tactile awareness sharpens (the "muscular pull" of current, later the spray "cold and sharp as needles"), and auditory information escalates from silence to dialogue to the waterfall\'s "low, continuous roar." The simile "like an animal breathing through clenched teeth" is masterful in its specificity: "clenched teeth" implies contained violence, the sound of something restraining itself before attack. The stone-skull simile functions differently — it is not dynamic but static, a memento mori embedded in the riverbed, suggesting that death is not merely ahead at the falls but has always been present beneath the surface.\n\nStructurally, the extract performs its own acceleration. The opening paragraph\'s hypotactic sentences, with multiple subordinate clauses, create the syntactic equivalent of wide, slow water. The shift to dialogue ("We need to pull over") introduces paratactic urgency. The final paragraph achieves its visceral impact through the numerical countdown, which introduces a competing temporal logic — objective, mathematical — that collides with the subjective experience of panic. The unresolved ending, cutting off mid-action, refuses the reader the catharsis of knowing the outcome, structurally replicating the characters\' suspended state between survival and catastrophe.',
            },
            markScheme: [
              'AO2 Language (8 marks): Analyses effects of specific language choices',
              'Identifies and comments on language techniques (personification, simile, sensory imagery)',
              'Explains how language creates tension, danger, and urgency',
              'Uses subject terminology accurately and precisely',
              'AO2 Structure (8 marks): Comments on structural features and their effects',
              'Analyses how pace accelerates through structural choices',
              'Comments on sentence length variation, the role of dialogue, and the unresolved ending',
              'Top band: perceptive, detailed, conceptualised analysis of both language and structure',
            ],
          },
          {
            id: 'edexcel-p1-04-q3',
            questionNumber: 3,
            questionText: 'Read the whole extract.\n\n"The writer creates a thrilling sense of danger by showing how quickly a situation can change from safe to life-threatening. The reader feels the same loss of control as the characters."\n\nTo what extent do you agree with this view?\n\nYou should:\n- consider the writer\'s use of language, form, and structure\n- evaluate how the writer creates effects on the reader\n- support your views with quotations from the text.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: EXTRACT_04_ADVENTURE,
            extractSource: EXTRACT_04_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'I agree that the extract is thrilling and shows a fast change from safe to dangerous. At the start, the canoe is "gliding through open water" which sounds peaceful. But very quickly the jungle "closed in" and the current changed. The canoe becomes "something they were riding" rather than steering, which shows they have lost control. The waterfall appearing suddenly — "the river simply ended" — is shocking and creates real tension.\n\nI also agree that the reader shares the loss of control. The countdown from one hundred metres to fifty to forty makes us feel the danger getting closer. The ending is cut off without telling us if they survive, which is frustrating but also exciting. However, I would say the reader does not completely lose control — we are still reading a story and can stop whenever we want. The characters are the ones truly trapped. But the writer does a very good job of making us feel their panic through fast-paced writing and vivid description.',
              'Grade 6-7': 'I agree with the first part of the statement — the extract\'s power derives significantly from the velocity of transition from safety to mortal danger. The opening\'s "gliding through open water" establishes an idyll that is shattered within a single sentence: "the next the jungle had closed in on both sides like a living curtain." The simile "like a living curtain" is crucial: curtains are theatrical, suggesting that the safe opening was merely a performance, a set that has now been struck to reveal the real drama behind it.\n\nThe "loss of control" is precisely tracked through the canoe\'s shifting status. It progresses from tool (Maya "dipped her paddle"), to compromised tool ("the canoe resisted"), to autonomous object ("something they were riding"), a grammatical trajectory that enacts dispossession. The phrase "no longer something they controlled but something they were riding" explicitly marks the transfer of agency.\n\nI would complicate the claim about the reader\'s experience, however. The reader does not experience loss of control so much as accelerated compulsion: the numerical countdown and the incomplete ending create an irresistible forward momentum. We do not lose control; we are controlled — by the writer\'s structural machinery. This is a more sophisticated achievement than the statement suggests: the reader is simultaneously aware of the artifice (this is a crafted narrative) and powerless to resist its pull.',
            },
            markScheme: [
              'Evaluates critically with a clear, sustained personal response',
              'Engages with the statement and offers a reasoned argument',
              'Analyses writer\'s methods (language, structure, form)',
              'Uses well-selected textual evidence',
              'Considers alternative interpretations',
              'Top band: perceptive, critical, conceptualised evaluation',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p1-04-writing',
        title: 'Section B: Imaginative Writing',
        description: 'You are advised to spend about 45 minutes on this section. You must complete BOTH questions. You are reminded of the need to plan your answers.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p1-04-q4',
            questionNumber: 4,
            questionText: 'Write the opening of a story in which a character realises they are in danger.\n\nYou may wish to use the reading extract as a stimulus for your writing.\n\nWrite approximately 150-200 words.\n\n(8 marks for content and organisation / 8 marks for technical accuracy)',
            marks: 16,
            suggestedTimeMinutes: 15,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear, focused opening that: establishes a character and a moment of realisation; uses some techniques to convey danger; demonstrates generally accurate spelling, punctuation, and grammar.',
              'Grade 6-7': 'A compelling opening that: builds tension through controlled pacing; uses sensory detail to convey the shift from safety to danger; demonstrates varied sentence structures; shows consistent technical accuracy with ambitious constructions.',
              'Grade 8-9': 'An assured, crafted opening that: captures the precise moment of realisation with originality and precision; uses structure and language to control the reader\'s experience of time; demonstrates a distinctive voice and technical virtuosity throughout.',
            },
            markScheme: [
              'AO5 Content & Organisation (8 marks): Communication, tone, register appropriate to form',
              'AO5: Effective opening that creates tension and a sense of emerging danger',
              'AO6 Technical Accuracy (8 marks): Accurate sentence demarcation',
              'AO6: Range of punctuation, accurate spelling, varied sentence forms',
            ],
          },
          {
            id: 'edexcel-p1-04-q5',
            questionNumber: 5,
            questionText: 'Choose ONE of the following titles for your writing:\n\nEither:\n(a) Write a story about a journey into unknown territory.\n\nOr:\n(b) "The point of no return." Write a story with this title.\n\n(16 marks for content and organisation / 8 marks for technical accuracy)',
            marks: 24,
            suggestedTimeMinutes: 30,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear and engaging piece of imaginative writing that: has a recognisable narrative structure; uses descriptive and narrative techniques; includes varied vocabulary; creates tension or excitement; demonstrates generally accurate spelling and punctuation.',
              'Grade 6-7': 'A compelling piece that: crafts a controlled narrative with effective pacing; uses varied and ambitious vocabulary; demonstrates structural choices that build and sustain tension; shows consistent accuracy in spelling, punctuation, and grammar.',
              'Grade 8-9': 'An assured, sophisticated piece that: creates a vivid, immersive narrative with a distinctive voice; demonstrates masterful control of pace and tension; uses precise, original imagery and extensive vocabulary; shows technical virtuosity throughout; crafts a satisfying narrative arc with thematic resonance.',
            },
            markScheme: [
              'AO5 Content & Organisation (16 marks): Compelling, crafted narrative',
              'AO5: Effective use of tone, style, and register',
              'AO5: Structured and developed with coherent paragraphing',
              'AO6 Technical Accuracy (8 marks): Sentence demarcation consistently accurate',
              'AO6: Wide range of punctuation, accurate spelling, varied sentence forms',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 05 — Psychological Fiction
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p1-05',
    board: 'Edexcel',
    paperNumber: 1,
    title: 'Paper 1: Fiction and Imaginative Writing',
    subtitle: 'English Language 1EN0/01 — Mock A5',
    code: '1EN0/01',
    totalTimeMinutes: 105,
    totalMarks: 76,
    sections: [
      {
        id: 'edexcel-p1-05-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${EXTRACT_05_SOURCE}`,
        totalMarks: 36,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p1-05-q1',
            questionNumber: 1,
            questionText: 'Read the first paragraph of the extract.\n\nList four things about Dr Marsh or her observations from this part of the source.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: EXTRACT_05_PSYCHOLOGICAL,
            extractSource: EXTRACT_05_SOURCE,
            modelAnswers: {
              'Grade 4-5': '1. Dr Marsh had a theory about doors. 2. Every patient paused at the threshold of her consulting room. 3. The hesitators were not ready. 4. Those who knocked twice then opened the door themselves were the most interesting to her.',
            },
            markScheme: [
              '1 mark per valid point, maximum 4',
              'Must be from the first paragraph only',
              'Accept direct quotation or paraphrase',
            ],
          },
          {
            id: 'edexcel-p1-05-q2',
            questionNumber: 2,
            questionText: 'Read the whole extract. Analyse how the writer uses language and structure to create a sense of psychological tension and intrigue.\n\nIn your answer you should consider:\n- the writer\'s use of words and phrases\n- the writer\'s use of language features and techniques\n- how the writer has structured the text to create effects\n\nSupport your views with detailed reference to the text.\n\n(8 marks for language analysis, 8 marks for structural analysis)',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'analysis',
            extract: EXTRACT_05_PSYCHOLOGICAL,
            extractSource: EXTRACT_05_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'The writer uses language to create tension between what is said and what is hidden. Dr Marsh is described as using "stillness" as her "instrument" which makes her seem powerful and controlled, like a scientist studying someone. Patient Seventeen is mysterious — the number instead of a name makes him seem like an experiment. His eyes are compared to "a frozen lake that might be two inches deep or two hundred feet" which is a simile suggesting we cannot tell what he is really like underneath.\n\nStructurally, the extract builds tension by starting with Dr Marsh in control (she has a theory, she reads people at the door) and then introducing a patient who does not fit her categories. He enters "sideways" which is unexpected and unsettling. The tension peaks when he says he "remembers things that haven\'t happened yet" — this is strange and makes us want to know more. The ending, where Dr Marsh\'s foot presses into the floor, shows she is not as calm as she appears, which is a surprising twist.',
              'Grade 6-7': 'The writer constructs psychological tension through a sustained dialectic of control and its disruption. The opening paragraph establishes Dr Marsh as a reader of behaviour — her "theory about doors" positions her as someone who decodes others from their unconscious gestures. The language of categorisation ("the hesitators," "the ones who strode straight in") creates a taxonomy of personality that establishes her authority and, crucially, the reader\'s confidence in that authority.\n\nPatient Seventeen\'s entrance systematically violates this taxonomy. He "knocked once, did not wait, and entered sideways" — a sequence that refuses every established category. The adverb "sideways" is the extract\'s first genuinely destabilising word: it suggests someone who does not navigate the world through expected planes of movement. The simile "distributing his weight with the careful precision of a man defusing a bomb" introduces the vocabulary of danger into an ostensibly safe, clinical setting.\n\nThe dialogue performs a structural escalation. Dr Marsh\'s opening line — "Tell me why you\'re here" — is described as "deliberately banal," a "blank canvas." But Patient Seventeen\'s response — "I remember things that haven\'t happened yet" — is anything but banal; it detonates the clinical framework. Structurally, the extract has been building towards this moment, and the sentence\'s paradox (remembering the future) ruptures the reader\'s expectations as effectively as it ruptures Dr Marsh\'s composure.\n\nThe final image — Dr Marsh\'s foot pressing into the floor "where he could not see" — is a masterful structural conclusion. It mirrors the opening\'s thesis about doors: just as patients reveal themselves through unconscious gestures, Dr Marsh now reveals her own disturbance through an involuntary physical response. The observer has become the observed, and the power dynamic has silently inverted.',
              'Grade 8-9': 'The writer constructs a text that operates as a psychological chess match, its language and structure enacting the very power dynamics it describes. The opening paragraph\'s extended metaphor of door-behaviour-as-diagnosis establishes Dr Marsh as an epistemological authority — someone who reads the world through a hermeneutic framework of interpretation. The clinical precision of "threshold," "hesitators," and the taxonomic structure (the hesitators, the striders, the double-knockers) creates a sense of intellectual mastery that the extract will systematically dismantle.\n\nPatient Seventeen enters as a semiotic disruption. His designation by number rather than name enacts clinical depersonalisation, but it also signals something categorically different — he is not a person but a case, an anomaly in the data. His physical description is a study in contradictory signals: "tall, thin, unremarkable" — three adjectives of ordinariness — yet "there was something about the way he occupied space that unsettled her." The vagueness of "something" is deliberate: Dr Marsh, whose profession is naming things, cannot name this. The simile "the careful precision of a man defusing a bomb" introduces lethal stakes into the consulting room through pure implication; nobody mentions danger, yet the comparison infiltrates the reader\'s perception.\n\nThe dialogue is the extract\'s structural pivot, and it operates through a devastating reversal of the blank-canvas technique. Dr Marsh\'s "Tell me why you\'re here" is described with knowing self-awareness — she understands it as a projective test. But Patient Seventeen\'s response ("I remember things that haven\'t happened yet") does not project onto her canvas; it replaces it with one of its own. The paradox — memory, which is retrospective, applied to the future — creates a cognitive dissonance that the text leaves unresolved. His subsequent clarification ("Not visions. Not dreams. Memories") uses the anaphoric negation to eliminate every comfortable explanation, each "Not" closing a door until the reader, like Dr Marsh, has nowhere left to retreat.\n\nThe final image achieves its power through a spatial reversal. "Above the desk" — visibility, composure, the still pen — versus "beneath the desk" — invisibility, involuntary response, the pressing foot. The extract\'s entire architecture has been building to this split: the division between performed control and genuine disturbance, between the professional self and the human self. Dr Marsh, who opened the extract reading others\' bodies, ends it being read by her own.',
            },
            markScheme: [
              'AO2 Language (8 marks): Analyses effects of specific language choices',
              'Identifies and comments on language techniques (simile, metaphor, juxtaposition)',
              'Explains how language creates psychological tension and character dynamics',
              'Uses subject terminology accurately and precisely',
              'AO2 Structure (8 marks): Comments on structural features and their effects',
              'Analyses how the writer builds and subverts expectations',
              'Comments on the role of dialogue, the power reversal, and the concluding image',
              'Top band: perceptive, detailed, conceptualised analysis of both language and structure',
            ],
          },
          {
            id: 'edexcel-p1-05-q3',
            questionNumber: 3,
            questionText: 'Read the whole extract.\n\n"The writer creates a power struggle between doctor and patient in which the reader is never quite sure who is really in control. The tension comes from the uncertainty about who is analysing whom."\n\nTo what extent do you agree with this view?\n\nYou should:\n- consider the writer\'s use of language, form, and structure\n- evaluate how the writer creates effects on the reader\n- support your views with quotations from the text.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: EXTRACT_05_PSYCHOLOGICAL,
            extractSource: EXTRACT_05_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'I agree that there is a power struggle in the extract. At the beginning, Dr Marsh seems completely in control — she has a theory about patients, she reads their behaviour, and she chooses her opening question carefully. She seems powerful and confident. But Patient Seventeen does not fit her categories. He enters "sideways" and sits down "with the careful precision of a man defusing a bomb," which makes him seem dangerous. When he says he "remembers things that haven\'t happened yet," the power shifts because now he knows something she does not.\n\nThe ending supports the statement because Dr Marsh\'s foot pressing into the floor shows she is disturbed even though she appears calm. This means the patient has affected her, which reverses the normal doctor-patient relationship. However, I would say that Dr Marsh is not completely powerless — she still controls herself on the surface. The real tension is that both characters are trying to read each other, and neither is fully succeeding.',
              'Grade 6-7': 'I strongly agree with this statement, and I would argue that the extract\'s central achievement is the construction of a double hermeneutic — each character is simultaneously subject and analyst, observer and observed.\n\nThe opening establishes Dr Marsh\'s authority through a vocabulary of interpretation: she "reads" patients at the threshold, categorises their behaviours, and constructs a typology. This positions her as the active intelligence, the one who sees without being seen. The language of performance — "deliberately banal," "blank canvas" — reveals her self-awareness: she is a conscious manipulator of clinical dynamics.\n\nPatient Seventeen systematically disrupts this authority. His entrance — refusing all established categories — is the first challenge. His physical stillness mirrors hers, creating a symmetry that implies equivalence rather than hierarchy. The simile of "a man defusing a bomb" is ambiguous: it could describe caution (he is afraid) or expertise (he knows exactly what he is doing). This ambiguity is the statement\'s "uncertainty" made textual.\n\nThe claim about his future-memories is the decisive power shift. "I can tell you what you had for breakfast tomorrow" — the casual specificity of "breakfast," the impossible tense of "had" applied to "tomorrow" — directly challenges Dr Marsh\'s epistemological authority. She is the one who is supposed to know; he claims to know more than anyone can.\n\nThe final image crystallises the power dynamic: above the desk, professional control; below it, involuntary disturbance. The split validates the statement — Dr Marsh maintains the appearance of authority while experiencing its loss. The reader, positioned to observe both levels, is indeed "never quite sure who is really in control."',
            },
            markScheme: [
              'Evaluates critically with a clear, sustained personal response',
              'Engages with the statement and offers a reasoned argument',
              'Analyses writer\'s methods (language, structure, form)',
              'Uses well-selected textual evidence',
              'Considers alternative interpretations',
              'Top band: perceptive, critical, conceptualised evaluation',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p1-05-writing',
        title: 'Section B: Imaginative Writing',
        description: 'You are advised to spend about 45 minutes on this section. You must complete BOTH questions. You are reminded of the need to plan your answers.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p1-05-q4',
            questionNumber: 4,
            questionText: 'Write the opening of a story told from the perspective of someone who notices details that other people miss.\n\nYou may wish to use the reading extract as a stimulus for your writing.\n\nWrite approximately 150-200 words.\n\n(8 marks for content and organisation / 8 marks for technical accuracy)',
            marks: 16,
            suggestedTimeMinutes: 15,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear, focused opening that: establishes a distinctive character perspective; includes specific observed details; uses some narrative and descriptive techniques; demonstrates generally accurate spelling, punctuation, and grammar.',
              'Grade 6-7': 'A compelling opening that: creates an intriguing narrative voice through specific observational detail; establishes character through what they notice; demonstrates controlled, varied sentence structures; shows consistent technical accuracy with ambitious constructions.',
              'Grade 8-9': 'An assured, crafted opening that: creates a distinctive, compelling narrative voice; reveals character entirely through the quality and nature of their observations; demonstrates sophisticated structural choices; shows technical virtuosity and precise vocabulary throughout.',
            },
            markScheme: [
              'AO5 Content & Organisation (8 marks): Communication, tone, register appropriate to form',
              'AO5: Distinctive voice established through observational detail',
              'AO6 Technical Accuracy (8 marks): Accurate sentence demarcation',
              'AO6: Range of punctuation, accurate spelling, varied sentence forms',
            ],
          },
          {
            id: 'edexcel-p1-05-q5',
            questionNumber: 5,
            questionText: 'Choose ONE of the following titles for your writing:\n\nEither:\n(a) Write a story about a conversation that reveals more than either speaker intended.\n\nOr:\n(b) "Patient Seventeen." Write a story with this title.\n\n(16 marks for content and organisation / 8 marks for technical accuracy)',
            marks: 24,
            suggestedTimeMinutes: 30,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear and engaging piece of imaginative writing that: has a recognisable narrative structure; uses descriptive and narrative techniques; includes varied vocabulary; creates tension or intrigue; demonstrates generally accurate spelling and punctuation.',
              'Grade 6-7': 'A compelling piece that: crafts a controlled narrative with effective use of dialogue and subtext; uses varied and ambitious vocabulary; demonstrates structural choices that sustain psychological tension; shows consistent accuracy in spelling, punctuation, and grammar.',
              'Grade 8-9': 'An assured, sophisticated piece that: creates a vivid, psychologically complex narrative with a distinctive voice; demonstrates masterful use of subtext and implication; uses precise, original imagery and extensive vocabulary; shows technical virtuosity throughout; crafts a satisfying narrative arc with intellectual and emotional depth.',
            },
            markScheme: [
              'AO5 Content & Organisation (16 marks): Compelling, crafted narrative',
              'AO5: Effective use of tone, style, and register',
              'AO5: Structured and developed with coherent paragraphing',
              'AO6 Technical Accuracy (8 marks): Sentence demarcation consistently accurate',
              'AO6: Wide range of punctuation, accurate spelling, varied sentence forms',
            ],
          },
        ],
      },
    ],
  },
]
