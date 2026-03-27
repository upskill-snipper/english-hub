// @ts-nocheck
import type { MockExamPaper } from '../mock-exams'

// ─── Extracts ────────────────────────────────────────────────────────────────

const EXTRACT_DYSTOPIAN = `The sirens had not sounded for three days, and that was the most frightening thing of all. In the months since the Transition, the people of Sector Nine had learned to measure their safety by the regularity of the alarms — two blasts at dawn meant water rations, three at noon meant a patrol was passing through, and a long, unbroken wail at sunset meant curfew. Silence meant the Authority had stopped watching. Silence meant you were on your own.

Maren pressed her back against the concrete wall of the stairwell and listened. Somewhere far below, a door slammed. Footsteps — quick, purposeful — echoed up through the building and then stopped. She counted to thirty, her lips moving without sound, before she dared to breathe again.

The corridor outside her apartment was dark. The overhead strip lights had failed weeks ago, and no one came to fix them any more. She moved by memory, trailing her fingertips along the wall where the paint had blistered and peeled, feeling the cold dampness seep through the plaster beneath. At the end of the corridor, a window looked out over what had once been the park. Now it was a flat expanse of churned mud, crisscrossed with tyre tracks and bordered by coils of razor wire that glinted dully in the grey half-light.

She reached the stairwell door and paused. Through the reinforced glass panel, she could see the stairs descending into blackness. There was no sound now — no footsteps, no voices, nothing but the low, ceaseless hum of the generators buried somewhere deep beneath the building. She pushed the door open. The hinges screamed.`

const EXTRACT_DYSTOPIAN_SOURCE = 'Original literary fiction composition — dystopian genre'

const EXTRACT_HISTORICAL = `The ship tilted violently to starboard and Martha grabbed the edge of the bunk with both hands, her knuckles white against the rough wood. Around her in the darkness of the hold, other women cried out — sharp, breathless sounds swallowed immediately by the groan of the timbers and the thunderous crash of water against the hull. The single oil lamp that hung from a beam above them swung in wide, sickening arcs, throwing wild shadows across the low ceiling.

They had been at sea for forty-seven days. Martha knew this because she had scratched a mark into the wooden frame of her bunk each morning, a ritual that had become her only anchor to the passage of time. Everything else had dissolved into a grey, heaving blur of nausea and confinement. The hold smelled of unwashed bodies, of damp wool, of the vinegar they used to scrub the floors each Sunday, and beneath it all, the deep, salty, ancient smell of the ocean itself.

The woman in the bunk below hers was praying — a low, rapid murmur in a language Martha did not recognise. Across the narrow aisle, old Mrs Garrick lay perfectly still with her eyes open, staring at the ceiling with an expression of absolute calm, as though she had already arrived at some private accommodation with death and was simply waiting for it to keep its appointment.

Martha closed her eyes. She thought of the kitchen at home — the scrubbed table, the kettle on the range, the cat sleeping in the chair by the window. She thought of her mother's hands kneading bread. She thought of solid, unmoving ground.`

const EXTRACT_HISTORICAL_SOURCE = 'Original literary fiction composition — historical fiction genre'

const EXTRACT_CRIME_NOIR = `Rain hammered the windscreen and Nolan sat in the car with the engine off, watching the entrance to the warehouse across the street. The neon sign above the door — PACIFIC STORAGE — buzzed and flickered, casting a sickly pink glow across the wet pavement. It was half past eleven. He had been waiting for two hours.

The coffee in the paper cup on the dashboard had gone cold long ago. He picked it up anyway and drank, grimacing at the bitter, lukewarm taste. His neck ached from the awkward angle of the seat, and his left knee — the one he had twisted in the fall last November — throbbed with the dull, persistent insistence of an old grievance that refused to be forgotten.

A car turned into the street, its headlights sweeping across the facades of the buildings opposite. Nolan slid lower in his seat. The car — a black saloon, recent model, no plates — pulled up directly outside the warehouse. For a long moment, nothing happened. The engine idled. The wipers swept back and forth. Then the driver's door opened and a figure stepped out into the rain.

The man was tall, wearing a dark overcoat with the collar turned up. He stood for a moment, looking up and down the street with the practised alertness of someone who had spent a lifetime checking for watchers. Then he reached into the car and pulled out a holdall — heavy, from the way he adjusted his grip — and walked to the warehouse door. He did not knock. He entered a code on the keypad, and the door opened with a soft click. He stepped inside. The door closed behind him. The street was empty again.`

const EXTRACT_CRIME_NOIR_SOURCE = 'Original literary fiction composition — crime noir genre'

const EXTRACT_MAGICAL_REALISM = `On the morning of her sixty-third birthday, Alma Reyes discovered that she could hear colours. It began with the geraniums on the kitchen windowsill — a low, warm hum, somewhere between a cello and a purring cat — and by lunchtime the whole garden was singing to her. The lavender whispered in a silvery soprano. The sunflowers boomed like tubas. Even the brown earth had its own sound, a deep and patient drone that seemed to vibrate up through the soles of her slippers.

She told no one. She had lived alone since Eduardo's death four years ago, and the habit of keeping extraordinary things to herself was by now so deeply ingrained that it felt less like secrecy and more like breathing. Instead, she sat on the wooden bench beneath the fig tree and listened to the world remake itself in music.

The fig tree's leaves were the colour of old jade, and they sang in harmonies so complex that Alma felt tears prick her eyes. Each leaf carried its own note, but together they produced something that was more than the sum of their parts — a chord that shifted and swelled with every breath of wind, as though the tree were improvising a symphony that had been playing, unheard, since the day it was planted.

By evening, the colours of the sunset had become almost unbearable. Reds crashed like cymbals. The deepening purple of the sky throbbed with the slow, heavy pulse of a bass drum. Alma gripped the arms of her chair and closed her eyes, but it made no difference — the sound poured through her eyelids, through her skin, through the thin walls of her veins.`

const EXTRACT_MAGICAL_REALISM_SOURCE = 'Original literary fiction composition — magical realism genre'

const EXTRACT_DOMESTIC_DRAMA = `The argument had ended twenty minutes ago but its residue hung in the kitchen like smoke. Claire stood at the sink, washing the same plate for the third time, her hands moving in slow, mechanical circles beneath the hot water. Through the window, she could see the garden — the lawn that needed mowing, the fence panel that Tom had promised to fix last summer, the trampoline the children had outgrown but which neither of them had dismantled because dismantling it would mean admitting that a certain kind of childhood was over.

Upstairs, a door closed. Not slammed — that would have been easier to interpret. Just closed, with a quiet, deliberate precision that said more than any amount of shouting. She heard Tom's footsteps cross the landing, the creak of the third stair — the one they always meant to fix — and then the front door opened and shut and his car started in the drive.

She turned off the tap and stood in the sudden silence, holding the plate. Water dripped from her fingers onto the floor. The kitchen clock ticked — an old-fashioned sound, absurdly loud in the emptiness. On the table behind her, the two mugs of tea she had made before the argument sat untouched, a thin film forming on their surfaces.

She put the plate on the rack and dried her hands on the towel that hung from the oven door. The towel was damp and smelled faintly of toast. Such a small, ordinary detail — the smell of toast on a Tuesday morning — and yet it threatened to undo her completely, because it belonged to the version of this morning where everything was still all right.`

const EXTRACT_DOMESTIC_DRAMA_SOURCE = 'Original literary fiction composition — domestic drama genre'

// ─── Mock Exam Papers ────────────────────────────────────────────────────────

export const aqaP1B: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 6 — Dystopian Fiction
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p1-06',
    board: 'AQA',
    paperNumber: 1,
    title: 'Paper 1: Explorations in Creative Reading and Writing',
    subtitle: 'English Language 8700/1',
    code: '8700/1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p1-06-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${EXTRACT_DYSTOPIAN_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p1-06-q1',
            questionNumber: 1,
            questionText: 'Read again the first paragraph of the source. Choose four statements below which are TRUE.\n\nA) The sirens had not sounded for three days.\nB) The Transition happened years ago.\nC) Two blasts at dawn meant food rations.\nD) Three blasts at noon meant a patrol was passing.\nE) Silence meant the Authority was watching closely.\nF) The people lived in Sector Nine.\nG) A long wail at sunset meant curfew.\nH) The people felt safest during silence.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: EXTRACT_DYSTOPIAN,
            extractSource: EXTRACT_DYSTOPIAN_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'A, D, F, G — A: "The sirens had not sounded for three days." D: "three at noon meant a patrol was passing through." F: "the people of Sector Nine." G: "a long, unbroken wail at sunset meant curfew."',
              'Grade 6-7': 'A, D, F, G — B is false (it says "months since the Transition"). C is false (two blasts meant water rations, not food). E is false (silence meant the Authority had stopped watching). H is false (silence was the most frightening thing).',
            },
            markScheme: [
              '1 mark for each correct answer',
              'Maximum 4 marks',
              'No marks for incorrect selections',
            ],
          },
          {
            id: 'aqa-p1-06-q2',
            questionNumber: 2,
            questionText: 'Look in detail at the extract from the paragraph beginning "The corridor outside..." How does the writer use language here to describe the decaying environment?\n\nYou could include the writer\'s choice of:\n- words and phrases\n- language features and techniques\n- sentence forms.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: EXTRACT_DYSTOPIAN,
            extractSource: EXTRACT_DYSTOPIAN_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'The writer describes the corridor as "dark" which creates an atmosphere of danger. The paint had "blistered and peeled" which shows the building is falling apart. The phrase "cold dampness" uses sensory language to make us feel uncomfortable. The park is now "a flat expanse of churned mud" which shows how the world has been destroyed. The "razor wire" that "glinted dully" suggests danger and imprisonment.',
              'Grade 6-7': 'The writer constructs the environment as a space of systematic neglect and entrapment. The detail that "no one came to fix them any more" implies not just disrepair but the collapse of social infrastructure — maintenance requires a functioning society. Maren navigates "by memory," suggesting this darkness is chronic rather than temporary. The verb choices in "blistered and peeled" personify the building as something diseased, while "cold dampness seep through the plaster" uses the verb "seep" to convey slow, unstoppable deterioration. The transformation of the park into "churned mud, crisscrossed with tyre tracks" replaces organic nature with mechanical violence, and the razor wire that "glinted dully in the grey half-light" uses the oxymoronic combination of gleam and dullness to suggest a world where even threat has become routine.',
            },
            markScheme: [
              'Identifies relevant language features (metaphor, sensory detail, verb choices)',
              'Analyses the effect of specific words and phrases on the reader',
              'Comments on how language conveys decay and oppression',
              'Uses subject terminology accurately',
              'Embeds quotations effectively',
            ],
          },
          {
            id: 'aqa-p1-06-q3',
            questionNumber: 3,
            questionText: 'You now need to think about the whole of the source.\n\nHow has the writer structured the text to create a growing sense of unease and danger?\n\nYou could write about:\n- what the writer focuses your attention on at the beginning\n- how and why the writer changes this focus as the extract develops\n- any other structural features that interest you.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: EXTRACT_DYSTOPIAN,
            extractSource: EXTRACT_DYSTOPIAN_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'At the beginning, the writer focuses on the absence of sirens, which creates unease because silence is presented as dangerous. The focus then shifts to Maren hiding in the stairwell, which makes us worried for her safety. The third paragraph zooms out to describe the ruined environment. At the end, Maren opens a door and "the hinges screamed," which is a dramatic ending that suggests she might be discovered. The structure moves from explanation to action, building tension.',
              'Grade 6-7': 'The extract is structured through a carefully controlled narrowing and then expansion of focus. The opening paragraph operates on a communal, explanatory level — "the people of Sector Nine" — establishing the rules of this world before introducing the individual. This contextual framing intensifies the second paragraph\'s shift to Maren\'s isolated experience: the slamming door and sudden footsteps create an immediate, physical threat. Structurally, the third paragraph functions as a pause — Maren moves through the corridor in a passage of descriptive detail that delays the action and builds anticipation. The final paragraph returns to the stairwell, creating a circular structure, but now charged with accumulated dread. The final sentence — "The hinges screamed" — is a short, violent disruption of the preceding quiet, and its personification transforms an everyday object into a betrayer, structurally mirroring how safety has been revealed as illusion throughout.',
            },
            markScheme: [
              'Comments on the overall structural progression from exposition to action',
              'Analyses how the writer shifts between communal and individual perspectives',
              'Notes the use of pacing and delayed action to build suspense',
              'Considers the effect of the final image on the reader',
              'Uses structural terminology accurately (shift, focus, pace, tension)',
            ],
          },
          {
            id: 'aqa-p1-06-q4',
            questionNumber: 4,
            questionText: 'Focus this part of your answer on the second half of the source, from the paragraph beginning "The corridor outside..."\n\nA student said: "The writer creates a world that feels utterly hopeless. There is no comfort or safety anywhere in this extract."\n\nTo what extent do you agree?\n\nIn your response, you could:\n- consider your own impressions of the world described\n- evaluate how the writer has created these impressions\n- support your response with references to the text.',
            marks: 20,
            suggestedTimeMinutes: 22,
            questionType: 'evaluation',
            extract: EXTRACT_DYSTOPIAN,
            extractSource: EXTRACT_DYSTOPIAN_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'I agree that the writer creates a hopeless world. The corridor is dark and broken, with paint that has "blistered and peeled." The park has been turned into "churned mud" with "razor wire," which shows nature has been destroyed. The stairwell descends "into blackness" which symbolises despair. However, Maren herself shows some hope because she is still moving, still surviving, and still cautious — she "counted to thirty" before breathing, which shows she is determined to stay alive.',
              'Grade 6-7': 'I substantially agree with the student, though I would argue that Maren\'s continued agency complicates a reading of total hopelessness. The physical environment is systematically stripped of comfort: the lights have failed and "no one came to fix them," the park is "churned mud" bordered by razor wire, and the stairwell descends "into blackness." Each detail reinforces the absence of safety. The phrase "cold dampness seep through the plaster beneath" is particularly effective — the verb "seep" suggests an unstoppable, corrosive force that penetrates even walls. The "dull, ceaseless hum of the generators" creates an atmosphere of mechanical oppression, the adjective "ceaseless" denying any possibility of respite. However, the student\'s claim of total hopelessness overlooks Maren\'s behaviour: she moves "by memory," she counts to thirty before breathing, she pauses to assess before opening the door. These are the actions of someone practising survival with discipline and intelligence. The final sentence — "The hinges screamed" — is ambiguous: it threatens exposure, but Maren has still chosen to open that door. The act of moving forward, even into danger, resists the despair the environment imposes.',
            },
            markScheme: [
              'Evaluates critically with a clear personal response',
              'Shows a sustained argument considering the statement',
              'Selects and analyses appropriate textual evidence',
              'Considers alternative interpretations (e.g., Maren\'s resilience)',
              'Demonstrates understanding of writer\'s methods and their effects',
            ],
          },
        ],
      },
      {
        id: 'aqa-p1-06-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 45 minutes on this section. Write in full sentences. You are reminded of the need to plan your answer. You should leave enough time to check your work at the end.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p1-06-q5',
            questionNumber: 5,
            questionText: 'You are going to enter a creative writing competition.\n\nYour entry will be judged by a panel of published authors.\n\nEither:\nWrite a description suggested by this picture: [Imagine a photograph of an empty city street at night, lit only by a single flickering streetlamp.]\n\nOr:\nWrite the opening part of a story about someone who breaks a rule.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear and engaging piece of creative writing that: uses some descriptive techniques such as simile and sensory detail; has a clear structure with distinct paragraphs; includes varied vocabulary; attempts to create a tense or ominous atmosphere; demonstrates generally accurate spelling and punctuation with some variety in sentence structure.',
              'Grade 6-7': 'A compelling piece that: sustains a controlled atmosphere of tension or isolation through carefully chosen sensory detail; uses varied and ambitious vocabulary with precise word choices; demonstrates conscious structural decisions such as shifts in pace or withholding of information; employs a range of sentence forms for deliberate effect; shows consistent accuracy in spelling, punctuation, and grammar with confident use of semicolons, colons, and dashes.',
            },
            markScheme: [
              'AO5 Content & Organisation (24 marks): Communication, tone, style, register',
              'AO5: Organisation of ideas with structural/grammatical features',
              'AO6 Technical Accuracy (16 marks): Sentence demarcation',
              'AO6: Range of punctuation used accurately',
              'AO6: Spelling including ambitious vocabulary',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 7 — Historical Fiction
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p1-07',
    board: 'AQA',
    paperNumber: 1,
    title: 'Paper 1: Explorations in Creative Reading and Writing',
    subtitle: 'English Language 8700/1',
    code: '8700/1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p1-07-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${EXTRACT_HISTORICAL_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p1-07-q1',
            questionNumber: 1,
            questionText: 'Read again the first paragraph of the source. Choose four statements below which are TRUE.\n\nA) The ship tilted to port.\nB) Martha grabbed the edge of the bunk.\nC) Other women in the hold cried out.\nD) The hold was well-lit.\nE) An oil lamp hung from a beam.\nF) The lamp threw shadows across the ceiling.\nG) The water crashed against the deck.\nH) Martha\'s knuckles were white.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: EXTRACT_HISTORICAL,
            extractSource: EXTRACT_HISTORICAL_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'B, C, E, F — B: "Martha grabbed the edge of the bunk." C: "other women cried out." E: "The single oil lamp that hung from a beam." F: "throwing wild shadows across the low ceiling."',
              'Grade 6-7': 'B, C, E, F — A is false (the ship tilted to starboard, not port). D is false (it describes "darkness of the hold"). G is false (water crashed against the hull, not the deck). H is true — "her knuckles white against the rough wood." Note: if H is selected instead of one of the above, it is also correct. The best four are B, C, E, F or B, C, E, H.',
            },
            markScheme: [
              '1 mark for each correct answer',
              'Maximum 4 marks',
              'No marks for incorrect selections',
            ],
          },
          {
            id: 'aqa-p1-07-q2',
            questionNumber: 2,
            questionText: 'Look in detail at the second paragraph of the source, beginning "They had been at sea for forty-seven days." How does the writer use language here to convey the experience of the voyage?\n\nYou could include the writer\'s choice of:\n- words and phrases\n- language features and techniques\n- sentence forms.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: EXTRACT_HISTORICAL,
            extractSource: EXTRACT_HISTORICAL_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'The writer uses the number "forty-seven days" to show how long and difficult the journey has been. Martha scratches marks into the bunk "each morning" which shows routine and monotony. The listing of smells — "unwashed bodies," "damp wool," "vinegar" — uses sensory language to make us imagine the unpleasant conditions. The phrase "grey, heaving blur" describes how time has lost meaning. The word "ancient" to describe the ocean\'s smell makes the sea seem powerful and timeless.',
              'Grade 6-7': 'The writer presents the voyage as an experience of temporal and sensory dissolution. The precise detail "forty-seven days" contrasts sharply with the metaphor "a grey, heaving blur of nausea and confinement," juxtaposing Martha\'s desperate attempt to count time against time\'s refusal to be meaningfully measured. Her scratching marks into wood is a ritual of survival — "her only anchor" uses a nautical metaphor that ironically binds her identity to the very vessel imprisoning her. The olfactory listing — "unwashed bodies," "damp wool," "vinegar" — accumulates claustrophobically, each smell layered upon the last, before the final phrase "the deep, salty, ancient smell of the ocean itself" shifts register entirely. The triple adjectives elevate the ocean from environment to something almost sacred, the word "ancient" granting it a permanence that dwarfs human suffering. The long, compound sentence structure mirrors the relentlessness of the experience, denying the reader respite just as the voyage denies Martha.',
            },
            markScheme: [
              'Identifies relevant language features (listing, metaphor, sensory detail)',
              'Analyses the effect of specific words and phrases',
              'Comments on how language conveys monotony, discomfort, and endurance',
              'Uses subject terminology accurately',
              'Embeds quotations rather than bolt-on',
            ],
          },
          {
            id: 'aqa-p1-07-q3',
            questionNumber: 3,
            questionText: 'You now need to think about the whole of the source.\n\nHow has the writer structured the text to interest you as a reader?\n\nYou could write about:\n- what the writer focuses your attention on at the beginning\n- how and why the writer changes this focus as the extract develops\n- any other structural features that interest you.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: EXTRACT_HISTORICAL,
            extractSource: EXTRACT_HISTORICAL_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'The extract begins with immediate action — the ship tilting violently — which grabs the reader\'s attention. The second paragraph slows down to explain how long the voyage has been, giving us background information. The third paragraph introduces other characters like the praying woman and Mrs Garrick, widening the focus. The final paragraph shifts to Martha\'s thoughts about home, creating a contrast between the terrible present and the comforting past. This structure moves from the physical to the emotional.',
              'Grade 6-7': 'The extract is structured as a progressive inward movement — from external action to internal refuge. The opening is dramatic and physical: the tilting ship, the cries, the swinging lamp create a scene of immediate chaos. The second paragraph then performs a structural retreat from this urgency, stepping back to provide temporal context ("forty-seven days") and sensory accumulation. This deceleration is purposeful — it mirrors the numbing effect of prolonged confinement. The third paragraph shifts focus from Martha to the women around her, using contrast: the praying woman\'s rapid murmur against Mrs Garrick\'s "absolute calm." Mrs Garrick\'s acceptance of death is structurally positioned as a foil to Martha\'s continued resistance. The final paragraph completes the inward turn — Martha closes her eyes and retreats into memory. The domestic images (scrubbed table, kettle, cat) are structurally powerful because they are the antithesis of everything that precedes them. The final short sentence — "She thought of solid, unmoving ground" — is devastating in its simplicity, its brevity contrasting with the long, complex sentences of the voyage.',
            },
            markScheme: [
              'Comments on the overall structural movement from external to internal',
              'Analyses how the writer shifts between action, context, and reflection',
              'Notes the use of contrast between present conditions and remembered home',
              'Considers the effect of pacing changes on the reader',
              'Uses structural terminology accurately (shift, focus, pace, contrast)',
            ],
          },
          {
            id: 'aqa-p1-07-q4',
            questionNumber: 4,
            questionText: 'Focus this part of your answer on the second half of the source, from the paragraph beginning "The woman in the bunk below hers..."\n\nA student said: "The writer makes you feel the suffering of the women on this journey. The writing is deeply moving and emotional."\n\nTo what extent do you agree?\n\nIn your response, you could:\n- consider your own impressions of the women\'s experience\n- evaluate how the writer has created these impressions\n- support your response with references to the text.',
            marks: 20,
            suggestedTimeMinutes: 22,
            questionType: 'evaluation',
            extract: EXTRACT_HISTORICAL,
            extractSource: EXTRACT_HISTORICAL_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'I agree that the writing is moving and emotional. The woman praying shows fear and desperation. Mrs Garrick lying "perfectly still with her eyes open" is disturbing because she seems to have given up hope. The writer says she had made an "accommodation with death" which means she is ready to die. Martha thinking about home is emotional because the details are very ordinary — a cat, a kettle, bread — and this makes them feel real and painful. The final line about "solid, unmoving ground" shows what Martha misses most.',
              'Grade 6-7': 'I agree substantially with the student, though I would argue that the emotional power comes not from explicit sentimentality but from restraint and specificity. The three women in the third paragraph represent three responses to suffering: the praying woman\'s "low, rapid murmur" suggests desperate faith; Mrs Garrick\'s "absolute calm" and "private accommodation with death" suggest resigned acceptance. The metaphor of death as someone who keeps an "appointment" personifies mortality with a chilling politeness that is more disturbing than any overt description of fear. Martha\'s response — retreating into memory — is the most emotionally affecting precisely because of the domestic specificity: "the scrubbed table, the kettle on the range, the cat sleeping in the chair by the window." These details are deliberately mundane, and their ordinariness is what makes them devastating — they represent a world of stability and warmth that is now impossibly distant. The shift to "her mother\'s hands kneading bread" introduces a human presence into the memory, and the physical detail of kneading — rhythmic, grounded, productive — contrasts painfully with the helpless heaving of the ship. The final sentence, "She thought of solid, unmoving ground," achieves its emotional impact through its stark simplicity after paragraphs of complex description.',
            },
            markScheme: [
              'Evaluates critically with a clear personal response',
              'Shows a sustained argument engaging with the statement',
              'Selects and analyses appropriate textual evidence',
              'Considers the writer\'s use of restraint and specificity',
              'Demonstrates understanding of how domestic detail creates emotional impact',
            ],
          },
        ],
      },
      {
        id: 'aqa-p1-07-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 45 minutes on this section. Write in full sentences. You are reminded of the need to plan your answer. You should leave enough time to check your work at the end.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p1-07-q5',
            questionNumber: 5,
            questionText: 'You are going to enter a creative writing competition.\n\nYour entry will be judged by a panel of published authors.\n\nEither:\nWrite a description suggested by this picture: [Imagine a photograph of an old harbour at dawn, with fishing boats resting on the mud at low tide.]\n\nOr:\nWrite the opening part of a story about a journey that changes everything.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear and engaging piece that: uses descriptive techniques such as simile, metaphor, and sensory detail; has a clear structure with distinct paragraphs; includes varied vocabulary; attempts to create atmosphere appropriate to the setting; demonstrates generally accurate spelling and punctuation with some variety in sentence structure.',
              'Grade 6-7': 'A compelling piece that: sustains an evocative atmosphere through layered sensory detail; uses varied and ambitious vocabulary with precise, considered word choices; demonstrates conscious structural decisions such as shifts in time, perspective, or pace; employs a range of sentence forms for deliberate effect including short sentences for impact; shows consistent technical accuracy with confident punctuation.',
            },
            markScheme: [
              'AO5 Content & Organisation (24 marks): Communication, tone, style, register',
              'AO5: Organisation of ideas with structural/grammatical features',
              'AO6 Technical Accuracy (16 marks): Sentence demarcation',
              'AO6: Range of punctuation used accurately',
              'AO6: Spelling including ambitious vocabulary',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 8 — Crime Noir
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p1-08',
    board: 'AQA',
    paperNumber: 1,
    title: 'Paper 1: Explorations in Creative Reading and Writing',
    subtitle: 'English Language 8700/1',
    code: '8700/1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p1-08-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${EXTRACT_CRIME_NOIR_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p1-08-q1',
            questionNumber: 1,
            questionText: 'Read again the first two paragraphs of the source. Choose four statements below which are TRUE.\n\nA) It was raining.\nB) Nolan was inside the warehouse.\nC) The neon sign said "PACIFIC STORAGE."\nD) It was half past midnight.\nE) Nolan had been waiting for two hours.\nF) The coffee was still warm.\nG) Nolan\'s right knee was injured.\nH) The sign cast a pink glow on the pavement.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: EXTRACT_CRIME_NOIR,
            extractSource: EXTRACT_CRIME_NOIR_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'A, C, E, H — A: "Rain hammered the windscreen." C: "PACIFIC STORAGE." E: "He had been waiting for two hours." H: "casting a sickly pink glow across the wet pavement."',
              'Grade 6-7': 'A, C, E, H — B is false (Nolan is in a car across the street). D is false (it was half past eleven, not midnight). F is false (the coffee "had gone cold long ago"). G is false (it was his left knee, not right).',
            },
            markScheme: [
              '1 mark for each correct answer',
              'Maximum 4 marks',
              'No marks for incorrect selections',
            ],
          },
          {
            id: 'aqa-p1-08-q2',
            questionNumber: 2,
            questionText: 'Look in detail at the extract from the paragraph beginning "A car turned into the street..." to the end. How does the writer use language here to create an atmosphere of suspense and menace?\n\nYou could include the writer\'s choice of:\n- words and phrases\n- language features and techniques\n- sentence forms.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: EXTRACT_CRIME_NOIR,
            extractSource: EXTRACT_CRIME_NOIR_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'The writer creates suspense by describing the car as having "no plates," which suggests criminal activity. The phrase "For a long moment, nothing happened" builds tension by making us wait. The man looks "up and down the street with practised alertness" which shows he is experienced and secretive. The holdall is described as "heavy" which makes us wonder what is inside. The short final sentence, "The street was empty again," creates an eerie sense of disappearance.',
              'Grade 6-7': 'The writer crafts suspense through a language of concealment and deliberate omission. The car is described through negation — "no plates" — defining it by what is absent, which immediately signals illegality. The sentence "For a long moment, nothing happened" is paradoxically tense precisely because of its emptiness; the noun "moment" collides with "long" to stretch time uncomfortably. The man\'s collar is "turned up," a detail that functions both practically and symbolically as concealment. The phrase "practised alertness" is revealing — "practised" implies repetition, a life lived in habitual suspicion. The parenthetical detail about the holdall — "heavy, from the way he adjusted his grip" — is focalised through Nolan\'s professional observation; we learn about the object through inference, mirroring the detective\'s analytical perspective. The final three sentences — short, declarative, stripped of figurative language — create a rhythmic evacuation: "He stepped inside. The door closed behind him. The street was empty again." The absence of elaboration mirrors the absence of evidence; the scene closes as cleanly as the warehouse door.',
            },
            markScheme: [
              'Identifies relevant language features (short sentences, negation, detail)',
              'Analyses how specific words create suspense and imply criminality',
              'Comments on how language creates atmosphere through omission and inference',
              'Uses subject terminology accurately',
              'Embeds quotations effectively within analysis',
            ],
          },
          {
            id: 'aqa-p1-08-q3',
            questionNumber: 3,
            questionText: 'You now need to think about the whole of the source.\n\nHow has the writer structured the text to maintain the reader\'s interest and build suspense?\n\nYou could write about:\n- what the writer focuses your attention on at the beginning\n- how and why the writer changes this focus as the extract develops\n- any other structural features that interest you.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: EXTRACT_CRIME_NOIR,
            extractSource: EXTRACT_CRIME_NOIR_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'The writer begins by establishing the scene — rain, a car, a warehouse — which makes us curious about what Nolan is doing. The second paragraph focuses on Nolan himself and his discomfort, making us feel the boredom and pain of waiting. The third paragraph introduces action when a car arrives, which changes the pace. The final paragraph follows the mysterious man, giving us details but not explaining what is happening. The structure moves from stillness to action but never resolves the mystery, keeping us in suspense.',
              'Grade 6-7': 'The extract is structured as a classic surveillance narrative, and its power lies in its manipulation of pace and information. The opening paragraph establishes the static frame — Nolan watching, the warehouse being watched — creating a structural tension between observer and observed. The second paragraph performs a temporal expansion, stretching the waiting through physical details (cold coffee, aching knee) that make duration feel embodied. This deliberate deceleration is structurally essential: it makes the reader share Nolan\'s tedium, so that the arrival of the car in paragraph three delivers genuine disruption. The structural pivot is the sentence "For a long moment, nothing happened" — placed at the moment of maximum potential action, it withholds resolution. The final paragraph is structured as a sequence of precise, chronological actions — steps out, looks, reaches, walks, enters code, steps inside — each sentence advancing the narrative by one beat. The final three short sentences function as a structural erasure: the man disappears, the door closes, the street empties. The reader is left, like Nolan, watching a closed door.',
            },
            markScheme: [
              'Comments on the manipulation of pace (slow build, sudden action)',
              'Analyses how the writer controls information and withholds resolution',
              'Notes the structural relationship between observer and observed',
              'Considers the effect of the unresolved ending on the reader',
              'Uses structural terminology accurately (pace, tension, withholding)',
            ],
          },
          {
            id: 'aqa-p1-08-q4',
            questionNumber: 4,
            questionText: 'Focus this part of your answer on the second half of the source, from the paragraph beginning "A car turned into the street..."\n\nA student said: "This section is gripping because the writer makes you feel like you are watching events unfold in real time, just like the detective."\n\nTo what extent do you agree?\n\nIn your response, you could:\n- consider your own experience of reading the section\n- evaluate how the writer has created this effect\n- support your response with references to the text.',
            marks: 20,
            suggestedTimeMinutes: 22,
            questionType: 'evaluation',
            extract: EXTRACT_CRIME_NOIR,
            extractSource: EXTRACT_CRIME_NOIR_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'I agree that the section feels like watching events in real time. The writer describes each action step by step — the car arriving, the man getting out, walking to the door, entering a code. This makes it feel slow and detailed, like a film. We see things through Nolan\'s eyes, such as the holdall being "heavy, from the way he adjusted his grip," which shows us how a detective notices details. The short sentences at the end — "He stepped inside. The door closed behind him" — create a quick, tense rhythm.',
              'Grade 6-7': 'I agree strongly with the student\'s observation, and I would argue that the real-time effect is achieved through a precise alignment of narrative perspective with detective methodology. The focalisation through Nolan means we can only know what he can observe — we see "no plates" but cannot know why; we see the holdall is "heavy" but can only infer its contents from "the way he adjusted his grip." This limitation is the section\'s greatest strength: the reader becomes an analyst of surface details, which is exactly the detective\'s role. The chronological sequencing of actions — "stepped out," "stood," "looked," "reached," "walked," "entered a code" — refuses to compress or summarise, creating a one-to-one correspondence between narrative time and story time. However, I would qualify the student\'s claim: the writer also manipulates our experience in ways that exceed simple real-time observation. The detail "practised alertness of someone who had spent a lifetime checking for watchers" is interpretation, not observation — it reveals Nolan\'s professional judgement layered onto what he sees. The final sentence, "The street was empty again," steps back from the close observation to deliver a wider, lonelier image. So while the section brilliantly creates a real-time effect, it also transcends it.',
            },
            markScheme: [
              'Evaluates critically with a clear personal response',
              'Considers how focalisation creates the real-time surveillance effect',
              'Selects and analyses appropriate textual evidence',
              'Explores the relationship between observation and interpretation',
              'Demonstrates understanding of narrative perspective and pacing',
            ],
          },
        ],
      },
      {
        id: 'aqa-p1-08-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 45 minutes on this section. Write in full sentences. You are reminded of the need to plan your answer. You should leave enough time to check your work at the end.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p1-08-q5',
            questionNumber: 5,
            questionText: 'You are going to enter a creative writing competition.\n\nYour entry will be judged by a panel of published authors.\n\nEither:\nWrite a description suggested by this picture: [Imagine a photograph of a rain-soaked city alleyway at night, with a single figure walking away from the camera.]\n\nOr:\nWrite the opening part of a story about someone who witnesses something they shouldn\'t have seen.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear and engaging piece that: uses some descriptive techniques such as simile, metaphor, and sensory detail; creates a recognisable atmosphere of tension or mystery; has a clear structure with distinct paragraphs; demonstrates generally accurate spelling and punctuation with some variety in sentence forms.',
              'Grade 6-7': 'A compelling piece that: creates a controlled, noir-influenced atmosphere through precise sensory detail and restrained narration; uses varied and ambitious vocabulary; demonstrates sophisticated structural choices such as withholding information, shifting perspective, or building to a climactic moment; shows consistent technical accuracy with confident and varied punctuation.',
            },
            markScheme: [
              'AO5 Content & Organisation (24 marks): Communication, tone, style, register',
              'AO5: Organisation of ideas with structural/grammatical features',
              'AO6 Technical Accuracy (16 marks): Sentence demarcation',
              'AO6: Range of punctuation used accurately',
              'AO6: Spelling including ambitious vocabulary',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 9 — Magical Realism
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p1-09',
    board: 'AQA',
    paperNumber: 1,
    title: 'Paper 1: Explorations in Creative Reading and Writing',
    subtitle: 'English Language 8700/1',
    code: '8700/1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p1-09-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${EXTRACT_MAGICAL_REALISM_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p1-09-q1',
            questionNumber: 1,
            questionText: 'Read again the first paragraph of the source. Choose four statements below which are TRUE.\n\nA) Alma discovered she could hear colours.\nB) It was her seventy-third birthday.\nC) The geraniums made a warm humming sound.\nD) The lavender had a deep, booming sound.\nE) The sunflowers boomed like tubas.\nF) The garden was singing by lunchtime.\nG) The brown earth made no sound.\nH) Alma was wearing slippers.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: EXTRACT_MAGICAL_REALISM,
            extractSource: EXTRACT_MAGICAL_REALISM_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'A, C, E, F — A: "Alma Reyes discovered that she could hear colours." C: "a low, warm hum" from the geraniums. E: "The sunflowers boomed like tubas." F: "by lunchtime the whole garden was singing to her."',
              'Grade 6-7': 'A, C, E, F — B is false (she was sixty-three, not seventy-three). D is false (the lavender "whispered in a silvery soprano" — the deep booming was the sunflowers). G is false (the earth had "a deep and patient drone"). H is true — "through the soles of her slippers" — so H could replace one of the above as a valid answer.',
            },
            markScheme: [
              '1 mark for each correct answer',
              'Maximum 4 marks',
              'No marks for incorrect selections',
            ],
          },
          {
            id: 'aqa-p1-09-q2',
            questionNumber: 2,
            questionText: 'Look in detail at the third paragraph of the source, beginning "The fig tree\'s leaves..." How does the writer use language here to describe the experience of hearing the tree?\n\nYou could include the writer\'s choice of:\n- words and phrases\n- language features and techniques\n- sentence forms.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: EXTRACT_MAGICAL_REALISM,
            extractSource: EXTRACT_MAGICAL_REALISM_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'The writer uses the simile "the colour of old jade" to describe the leaves, which makes them sound precious and beautiful. The word "harmonies" compares the tree to music, which links to the idea of hearing colours. The phrase "tears prick her eyes" shows that the experience is overwhelming and emotional. The writer says the tree was "improvising a symphony," which is a metaphor suggesting the music is complex and beautiful. The long sentence structure mirrors the flowing, continuous nature of the sound.',
              'Grade 6-7': 'The writer uses synaesthesia as both subject and technique in this paragraph, blurring sensory boundaries to convey an experience beyond ordinary perception. The leaves are "the colour of old jade" — the adjective "old" imbues the colour with temporal depth, suggesting not merely green but green that has aged and deepened. The musical terminology is precisely deployed: "harmonies so complex" elevates the natural world to the status of art, while the distinction between individual notes and collective chord mirrors the philosophical concept of emergent properties — the whole exceeding the sum of its parts. The personification of the tree as an improviser is significant: "improvising" implies spontaneity and intelligence, granting the fig tree creative agency. The clause "that had been playing, unheard, since the day it was planted" is structurally revelatory — it suggests the music was always there, and it is human perception, not the world, that has changed. The long, complex sentence structure, with its embedded clauses and deferred main verb, formally enacts the accumulation and layering of sound.',
            },
            markScheme: [
              'Identifies relevant language features (synaesthesia, metaphor, personification)',
              'Analyses the effect of specific words and musical imagery',
              'Comments on how language conveys wonder and sensory transformation',
              'Uses subject terminology accurately',
              'Embeds quotations within analysis effectively',
            ],
          },
          {
            id: 'aqa-p1-09-q3',
            questionNumber: 3,
            questionText: 'You now need to think about the whole of the source.\n\nHow has the writer structured the text to develop the reader\'s understanding of Alma\'s experience?\n\nYou could write about:\n- what the writer focuses your attention on at the beginning\n- how and why the writer changes this focus as the extract develops\n- any other structural features that interest you.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: EXTRACT_MAGICAL_REALISM,
            extractSource: EXTRACT_MAGICAL_REALISM_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'The extract begins with the discovery that Alma can hear colours, which immediately interests the reader. The second paragraph slows down to tell us about Alma\'s life — she is a widow who lives alone — which makes us care about her. The third paragraph focuses on the fig tree and shows the beauty of the experience, with the tree\'s music bringing Alma to tears. The final paragraph shifts to the evening and the experience becoming overwhelming and painful. The structure moves from wonder to intensity, showing how the gift becomes a burden.',
              'Grade 6-7': 'The extract is structured as an escalation from gentle discovery to sensory overload, tracing an emotional arc from delight to near-anguish. The opening is deliberately casual — "On the morning of her sixty-third birthday" — grounding the extraordinary in the domestic. The first paragraph introduces the phenomenon through manageable, charming sounds: a "low, warm hum," a "silvery soprano." The second paragraph performs a structural pause, providing biographical context that reframes the discovery: Alma\'s solitude since Eduardo\'s death gives the garden\'s new music an emotional resonance — the world is speaking to someone who has been living in silence. The third paragraph deepens both the complexity of the sounds and their emotional impact — Alma\'s tears signal that the experience has moved beyond curiosity into something profound. The final paragraph completes the escalation: the sunset sounds "crashed like cymbals" and the sky "throbbed" — the verbs shift from gentle to violent. The structural climax — Alma closing her eyes but finding "it made no difference" — is devastating because it removes the possibility of control. The closing image of sound pouring "through her skin, through the thin walls of her veins" breaks the boundary between external and internal, mirroring the extract\'s structural dissolution of the boundary between wonder and suffering.',
            },
            markScheme: [
              'Comments on the escalation from discovery to overwhelm',
              'Analyses how biographical context deepens the reader\'s understanding',
              'Notes the structural shift from beauty to intensity in the final paragraph',
              'Considers how the extract builds emotional complexity',
              'Uses structural terminology accurately (pace, escalation, shift)',
            ],
          },
          {
            id: 'aqa-p1-09-q4',
            questionNumber: 4,
            questionText: 'Focus this part of your answer on the second half of the source, from the paragraph beginning "She told no one..."\n\nA student said: "The writer makes Alma\'s experience seem both magical and lonely. You feel the wonder of what she can hear, but also the sadness of having no one to share it with."\n\nTo what extent do you agree?\n\nIn your response, you could:\n- consider your own impressions of Alma\'s experience\n- evaluate how the writer has created these impressions\n- support your response with references to the text.',
            marks: 20,
            suggestedTimeMinutes: 22,
            questionType: 'evaluation',
            extract: EXTRACT_MAGICAL_REALISM,
            extractSource: EXTRACT_MAGICAL_REALISM_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'I agree that the experience is both magical and lonely. The fig tree\'s music is described as "harmonies so complex" that Alma cries, which shows the beauty of it. The garden is like a symphony, which sounds wonderful. But Alma "told no one" and has "lived alone since Eduardo\'s death," which makes the experience feel isolating. The final paragraph is frightening — the sounds become too much, with reds "crashing like cymbals" and sound pouring "through her skin." She cannot escape it even by closing her eyes, which makes the magic seem like a curse.',
              'Grade 6-7': 'I agree with the student\'s reading, though I would argue the relationship between magic and loneliness is not simply parallel but causally intertwined. The second paragraph establishes that Alma\'s secrecy is not a choice but a condition: "the habit of keeping extraordinary things to herself was by now so deeply ingrained that it felt less like secrecy and more like breathing." The simile "like breathing" is quietly devastating — it suggests that isolation has become involuntary, biological. This reframes the garden\'s music: it is beautiful, but it is beauty experienced in solitude, which simultaneously intensifies it (there are no distractions) and renders it melancholy (there is no witness). The fig tree passage is the extract\'s emotional centre: the music that "had been playing, unheard, since the day it was planted" mirrors Alma herself — a woman whose inner life has gone unheard since Eduardo\'s death. However, I would complicate the student\'s claim about pure sadness: the final paragraph introduces something closer to terror. The sound that pours "through her eyelids, through her skin, through the thin walls of her veins" uses the tricolon and the preposition "through" to suggest invasion rather than experience. This is not simply magic or loneliness but a dissolution of self, and it raises the question of whether Alma\'s gift is a consolation for her loss or a manifestation of grief that has become uncontainable.',
            },
            markScheme: [
              'Evaluates critically with a clear personal response',
              'Engages with the dual nature of the experience (wonder and isolation)',
              'Selects and analyses appropriate textual evidence',
              'Considers how biographical context shapes interpretation',
              'Demonstrates understanding of how the writer balances beauty and threat',
            ],
          },
        ],
      },
      {
        id: 'aqa-p1-09-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 45 minutes on this section. Write in full sentences. You are reminded of the need to plan your answer. You should leave enough time to check your work at the end.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p1-09-q5',
            questionNumber: 5,
            questionText: 'You are going to enter a creative writing competition.\n\nYour entry will be judged by a panel of published authors.\n\nEither:\nWrite a description suggested by this picture: [Imagine a photograph of a wildflower meadow stretching to the horizon under a sky heavy with storm clouds.]\n\nOr:\nWrite the opening part of a story about a person who discovers they can do something extraordinary.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear and engaging piece that: uses descriptive techniques such as simile and sensory detail; creates a recognisable atmosphere of wonder or strangeness; has a clear structure with distinct paragraphs; includes varied vocabulary; demonstrates generally accurate spelling and punctuation with some variety in sentence forms.',
              'Grade 6-7': 'A compelling piece that: creates a sustained atmosphere blending the ordinary with the extraordinary through precise and inventive sensory detail; uses varied and ambitious vocabulary with original imagery; demonstrates sophisticated structural choices such as building from the mundane to the magical; employs a range of sentence forms for deliberate effect; shows consistent technical accuracy with assured punctuation.',
            },
            markScheme: [
              'AO5 Content & Organisation (24 marks): Communication, tone, style, register',
              'AO5: Organisation of ideas with structural/grammatical features',
              'AO6 Technical Accuracy (16 marks): Sentence demarcation',
              'AO6: Range of punctuation used accurately',
              'AO6: Spelling including ambitious vocabulary',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 10 — Domestic Drama
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p1-10',
    board: 'AQA',
    paperNumber: 1,
    title: 'Paper 1: Explorations in Creative Reading and Writing',
    subtitle: 'English Language 8700/1',
    code: '8700/1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p1-10-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${EXTRACT_DOMESTIC_DRAMA_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p1-10-q1',
            questionNumber: 1,
            questionText: 'Read again the first paragraph of the source. Choose four statements below which are TRUE.\n\nA) The argument had ended twenty minutes ago.\nB) Claire was standing at the cooker.\nC) She was washing a plate.\nD) Her hands moved quickly.\nE) She could see the garden through the window.\nF) The lawn needed mowing.\nG) Tom had fixed the fence panel.\nH) The children had outgrown the trampoline.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: EXTRACT_DOMESTIC_DRAMA,
            extractSource: EXTRACT_DOMESTIC_DRAMA_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'A, C, E, F — A: "The argument had ended twenty minutes ago." C: "washing the same plate for the third time." E: "Through the window, she could see the garden." F: "the lawn that needed mowing."',
              'Grade 6-7': 'A, C, E, F — B is false (she was at the sink, not the cooker). D is false (her hands moved in "slow, mechanical circles"). G is false (Tom had "promised to fix" the fence but had not done so). H is also true — "the trampoline the children had outgrown" — so H could validly replace one of the others.',
            },
            markScheme: [
              '1 mark for each correct answer',
              'Maximum 4 marks',
              'No marks for incorrect selections',
            ],
          },
          {
            id: 'aqa-p1-10-q2',
            questionNumber: 2,
            questionText: 'Look in detail at the extract from the second paragraph, beginning "Upstairs, a door closed," to the end of the third paragraph. How does the writer use language here to convey the emotional atmosphere after the argument?\n\nYou could include the writer\'s choice of:\n- words and phrases\n- language features and techniques\n- sentence forms.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: EXTRACT_DOMESTIC_DRAMA,
            extractSource: EXTRACT_DOMESTIC_DRAMA_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'The writer says the door was "Not slammed" but closed with "quiet, deliberate precision," which shows controlled anger. The phrase "said more than any amount of shouting" tells us that silence can be more powerful than noise. The "creak of the third stair" is a small detail that makes the scene feel real and tense. In the third paragraph, "sudden silence" shows how empty the house feels after Tom leaves. The "two mugs of tea" sitting "untouched" symbolise the broken connection between them.',
              'Grade 6-7': 'The writer deploys the language of domestic minutiae to carry enormous emotional weight. The parenthetical "Not slammed — that would have been easier to interpret" is remarkable: the dash performs a correction, and the comparative "easier" reveals Claire\'s interpretive anxiety — she is reading Tom\'s actions for meaning, and controlled silence is harder to decode than anger. The phrase "quiet, deliberate precision" uses three adjectives that transform door-closing into communication, the word "deliberate" being key: it implies intention, a conscious choice to wound through restraint. The detail of "the third stair — the one they always meant to fix" is devastating in its ordinariness. The habitual "always meant to" speaks to a pattern of deferred maintenance that extends metaphorically beyond the stair to the relationship itself. In the third paragraph, sound fills the void of Tom\'s absence: "The kitchen clock ticked" is described as "absurdly loud in the emptiness," the adverb "absurdly" revealing Claire\'s awareness that her perception has been distorted by emotion. The "two mugs of tea" with "a thin film forming on their surfaces" is a precisely observed image of stagnation — the film is the visible marker of time passing in the absence of resolution.',
            },
            markScheme: [
              'Identifies relevant language features (symbolism, detail, parenthetical commentary)',
              'Analyses how ordinary domestic details carry emotional weight',
              'Comments on how language conveys silence, absence, and emotional tension',
              'Uses subject terminology accurately',
              'Embeds quotations within analysis effectively',
            ],
          },
          {
            id: 'aqa-p1-10-q3',
            questionNumber: 3,
            questionText: 'You now need to think about the whole of the source.\n\nHow has the writer structured the text to reveal the emotional state of the character?\n\nYou could write about:\n- what the writer focuses your attention on at the beginning\n- how and why the writer changes this focus as the extract develops\n- any other structural features that interest you.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: EXTRACT_DOMESTIC_DRAMA,
            extractSource: EXTRACT_DOMESTIC_DRAMA_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'The writer begins by telling us the argument has ended, so we enter the scene after the conflict. The first paragraph focuses on Claire at the sink and what she can see through the window — the unfinished garden tasks suggest problems in the relationship. The second paragraph follows Tom\'s departure through sounds — a door, stairs, a car — which shows Claire tracking his movements. The third paragraph focuses on silence and stillness after he has gone. The final paragraph introduces the smell of toast, which nearly makes Claire cry. The structure moves from the aftermath of the argument to a moment of near-breakdown.',
              'Grade 6-7': 'The extract is structured as a study in emotional displacement — Claire\'s feelings are never stated directly but are revealed through her relationship with objects and sounds. The opening paragraph establishes this pattern immediately: the argument\'s "residue" hangs "like smoke," an image that is structural as well as metaphorical — what follows is the gradual clearing (or not clearing) of that residue. Claire\'s attention to the garden through the window is a structural avoidance: she looks outward rather than inward, but every detail she notices (the unmowed lawn, the unfixed fence, the outgrown trampoline) functions as an unconscious catalogue of the relationship\'s neglected state. The second paragraph shifts from sight to sound, tracking Tom\'s exit through auditory details — door, stair, car — creating a structural diminishing as Tom moves progressively further away. The third paragraph\'s focus on stillness and abandoned objects (dripping water, ticking clock, cooling tea) creates a tableau of suspended time. The final paragraph\'s structural power lies in its shift to smell — "the smell of toast on a Tuesday morning" — which bypasses the intellectual defences Claire has maintained throughout and threatens to "undo her completely." The revelation that this ordinary smell "belonged to the version of this morning where everything was still all right" is the extract\'s emotional climax, structurally positioned at the very end to deliver maximum impact.',
            },
            markScheme: [
              'Comments on how the structure reveals emotion through displacement onto objects',
              'Analyses the progression through different senses (sight, sound, smell)',
              'Notes how the structure tracks Tom\'s departure and its aftermath',
              'Considers the positioning of the emotional climax at the extract\'s end',
              'Uses structural terminology accurately (focus, shift, climax, displacement)',
            ],
          },
          {
            id: 'aqa-p1-10-q4',
            questionNumber: 4,
            questionText: 'Focus this part of your answer on the second half of the source, from the paragraph beginning "She turned off the tap..."\n\nA student said: "The writer makes the reader feel Claire\'s pain through tiny, everyday details rather than dramatic events. This makes the writing feel completely real."\n\nTo what extent do you agree?\n\nIn your response, you could:\n- consider your own impressions of Claire\'s emotional state\n- evaluate how the writer has created these impressions\n- support your response with references to the text.',
            marks: 20,
            suggestedTimeMinutes: 22,
            questionType: 'evaluation',
            extract: EXTRACT_DOMESTIC_DRAMA,
            extractSource: EXTRACT_DOMESTIC_DRAMA_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'I agree that the everyday details make Claire\'s pain feel real. The ticking clock being "absurdly loud" shows how quiet and empty the house feels. The two untouched mugs of tea are a powerful image because they were made when things were still normal. In the final paragraph, the "damp" towel and the "smell of toast" are very ordinary details but they nearly make Claire break down. The phrase "the version of this morning where everything was still all right" shows that Claire is comparing the present to a happier past. These small details are more emotional than anything dramatic could be.',
              'Grade 6-7': 'I agree emphatically with the student, and I would argue that the extract\'s emotional power depends entirely on its commitment to the mundane. The third paragraph is a masterclass in what we might call the "pathetic fallacy of objects": the dripping water, the ticking clock, the cooling tea are not merely background details but carriers of emotional meaning. The clock\'s ticking is "absurdly loud in the emptiness" — the adverb "absurdly" is precisely chosen because it acknowledges the disproportion between cause (a ticking clock) and effect (overwhelming awareness), which is exactly how grief works in ordinary life. The untouched mugs with "a thin film forming on their surfaces" are devastating because the film is a visible, physical measure of how long the rupture has lasted — time made tangible. The final paragraph intensifies this technique: the towel is "damp and smelled faintly of toast." The qualifier "faintly" is important — it is not a powerful smell but a trace, a remnant. It is this faintness, this almost-nothingness, that "threatened to undo her completely," and the verb "threatened" maintains Claire\'s fragile composure while signalling its imminent collapse. The final clause — "the version of this morning where everything was still all right" — is the extract\'s devastating insight: that domestic tragedy is measured not in catastrophes but in the distance between two versions of the same Tuesday morning. The student is right that this feels "completely real," because the writer trusts ordinary experience to carry extraordinary emotional weight without amplification or melodrama.',
            },
            markScheme: [
              'Evaluates critically with a clear personal response',
              'Engages with how domestic detail carries emotional weight',
              'Selects and analyses specific textual evidence with precision',
              'Considers the writer\'s use of restraint and understatement',
              'Demonstrates understanding of how realism creates emotional impact',
            ],
          },
        ],
      },
      {
        id: 'aqa-p1-10-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 45 minutes on this section. Write in full sentences. You are reminded of the need to plan your answer. You should leave enough time to check your work at the end.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p1-10-q5',
            questionNumber: 5,
            questionText: 'You are going to enter a creative writing competition.\n\nYour entry will be judged by a panel of published authors.\n\nEither:\nWrite a description suggested by this picture: [Imagine a photograph of a kitchen table after a family meal — plates pushed back, chairs at angles, a candle burned down to nothing.]\n\nOr:\nWrite the opening part of a story about the moment everything changed in a family.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear and engaging piece that: uses descriptive techniques such as simile and sensory detail; creates a recognisable domestic atmosphere; has a clear structure with distinct paragraphs; includes varied vocabulary appropriate to the subject; demonstrates generally accurate spelling and punctuation with some variety in sentence structure.',
              'Grade 6-7': 'A compelling piece that: uses everyday domestic detail to create emotional resonance and subtext; demonstrates varied and ambitious vocabulary with precise, restrained word choices; employs conscious structural decisions such as building tension through what is left unsaid; uses a range of sentence forms for deliberate effect including fragments or short sentences for emotional impact; shows consistent technical accuracy with confident and varied punctuation.',
            },
            markScheme: [
              'AO5 Content & Organisation (24 marks): Communication, tone, style, register',
              'AO5: Organisation of ideas with structural/grammatical features',
              'AO6 Technical Accuracy (16 marks): Sentence demarcation',
              'AO6: Range of punctuation used accurately',
              'AO6: Spelling including ambitious vocabulary',
            ],
          },
        ],
      },
    ],
  },
]
