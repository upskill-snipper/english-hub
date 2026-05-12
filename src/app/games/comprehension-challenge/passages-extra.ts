// ─────────────────────────────────────────────────────────────────────────────
// Comprehension Challenge — Extra Passages (educational, original)
//
// Ten ORIGINAL short descriptive passages written in the style of GCSE
// "unseen extract" papers. Every passage is by The English Hub editorial
// team — written for educational use under the platform's CC-BY-NC-SA
// licence — so we never need to quote a copyrighted source.
//
// The shape is a richer superset of the in-page Passage type used by
// `page.tsx`: it adds an `id`, a `source` line, an explicit `marks` value
// per question (matching real AQA/Edexcel/OCR mark schemes — 1, 2, 4, 8 or
// 20) and a teaching `explanation` that the UI can surface alongside
// feedback. The file is exported separately so the existing PASSAGE_BANK
// in `page.tsx` remains untouched; an integration step can fold these in
// later (mapping ExtraQuestion → CompQuestion by stripping `marks` and
// `explanation`, or by extending the renderer to show them).
// ─────────────────────────────────────────────────────────────────────────────

export type ExtraQuestionType =
  | 'list4' // AO1 — find four things
  | 'language' // AO2 — analysis of words / phrases / techniques
  | 'structure' // AO2 — structural features
  | 'evaluation' // AO4 — critical evaluation
  | 'inference' // AO1 — implicit meaning

export type ExtraMarks = 1 | 2 | 4 | 8 | 20

export interface ExtraQuestion {
  type: ExtraQuestionType
  prompt: string
  options: string[]
  correctIndex: number
  /** Mark value, mirroring real GCSE comprehension question weights. */
  marks: ExtraMarks
  /** Teaching note shown after the student answers. */
  explanation: string
}

export interface ExtraPassage {
  /** Stable ID, prefixed `cc-extra-` so it cannot collide with the in-page bank. */
  id: string
  title: string
  /** Genre tag — kept consistent with the existing PASSAGE_BANK shape. */
  genre: string
  /** Attribution line. All extras are original, CC-BY-NC-SA. */
  source: string
  text: string
  questions: ExtraQuestion[]
}

// ─────────────────────────────────────────────────────────────────────────────
// The bank — 10 passages, 5 questions each.
// ─────────────────────────────────────────────────────────────────────────────

const SOURCE_LINE =
  "Original passage by The English Hub editorial team — written for educational use under the platform's CC-BY-NC-SA licence"

export const EXTRA_PASSAGE_BANK: ExtraPassage[] = [
  // 1 ─── Coastal cliff at sunrise ───────────────────────────────────────────
  {
    id: 'cc-extra-01-coastal-cliff-sunrise',
    title: 'The Cliff at First Light',
    genre: 'Descriptive Non-fiction',
    source: SOURCE_LINE,
    text: 'Before the sun had properly arrived, the cliff stood like a great grey shoulder turned away from the sea. The wind was thin and clean, and it carried with it the salt-bright smell of weed drying on the rocks below. A single gull traced a slow circle above the headland, never beating its wings, riding the lift of warm air rising off the chalk. Then the light came. It came not all at once but in patient, widening bands, brushing the topmost gorse first, then the slope, then the worn stile, until at last the whole face of the cliff was lit a pale, astonished gold. The sea beneath turned from iron to pewter to a restless silver, and every small wave caught the new light and tossed it forward, as though the whole bay were passing a coin from hand to hand. A fisherman stood on the path, motionless, his collar up, his breath a small white country leaving his mouth. He did not move for a long time. He had come, perhaps, to think; or perhaps only to be reminded that the world begins again every day, whether or not anyone is watching. Far below, the waves continued their old, indifferent work, smoothing pebbles that had been smoothed for a thousand years and would be smoothed for a thousand more. The cliff did not seem old, exactly. It seemed simply to have been there always, as patient as weather, as quiet as sleep.',
    questions: [
      {
        type: 'list4',
        marks: 4,
        prompt: 'List FOUR things you learn about the setting in the opening of the passage.',
        options: [
          'It is set on a cliff; the sun has not fully risen; there is a fisherman; the sea is below',
          'It is set in a busy harbour town with crowds and music',
          'It is set in a forest at midday with rain falling',
          'It is set in a quiet library at evening with candles burning',
        ],
        correctIndex: 0,
        explanation:
          'AO1 List 4 questions reward straightforward retrieval. Each correct fact must come directly from the text. Here the cliff, the early sun, the sea below and the fisherman are all explicitly stated.',
      },
      {
        type: 'language',
        marks: 8,
        prompt:
          'How does the writer use language in the simile "as though the whole bay were passing a coin from hand to hand"?',
        options: [
          'It dismisses the sea as worthless',
          'It creates an image of shimmering, shared light moving across the water, suggesting both continuous motion and a kind of community among the waves',
          'It implies the bay is owned by fishermen and traded for money',
          'It shows the sea is shallow because coins are small',
        ],
        correctIndex: 1,
        explanation:
          'AO2 language analysis rewards a clear effect linked to method. The simile compares the glint of sunlight on each wave to a coin being passed along, evoking both the visual sparkle and the rhythm of motion.',
      },
      {
        type: 'structure',
        marks: 4,
        prompt: 'How is the passage structured to track the arrival of dawn?',
        options: [
          'It moves chronologically: pre-dawn stillness, the slow spread of light, then a return to the timeless work of the waves',
          'It moves backwards in time, from sunset to midnight to dusk',
          'It is structured as a list of birds seen on the cliff',
          'It is structured as a conversation between the fisherman and the gull',
        ],
        correctIndex: 0,
        explanation:
          'AO2 structure: notice the temporal sweep. The passage zooms in on stillness, expands as light arrives, then pulls back to the long, geological time of the waves — a clear shift from moment to eternity.',
      },
      {
        type: 'evaluation',
        marks: 20,
        prompt:
          'A student said: "The writer makes the dawn feel like a quiet event of huge importance." How far do you agree?',
        options: [
          'Disagree — the writer makes the dawn sound trivial and rushed',
          'Agree — through hushed adjectives ("patient", "astonished"), the slow sentence rhythm and the closing reflection that "the world begins again every day", the writer elevates an ordinary sunrise into something near-sacred',
          'Disagree — there is no description of the dawn at all',
          'Agree, but only because the fisherman shouts during the sunrise',
        ],
        correctIndex: 1,
        explanation:
          'AO4 evaluation rewards a clear judgement supported by methods. The hushed lexis, slow pacing and reflective closing turn the sunrise into a quietly significant moment.',
      },
      {
        type: 'inference',
        marks: 2,
        prompt: 'What can you infer about the fisherman from his stillness?',
        options: [
          'He is impatient and bored',
          'He is contemplative — he has come to be alone with the dawn rather than to fish',
          'He is asleep on his feet',
          'He is hiding from someone on the path',
        ],
        correctIndex: 1,
        explanation:
          "AO1 inference: he stands motionless, his collar up, and the narrator suggests he came 'to think' or 'to be reminded' — that points to quiet contemplation, not work.",
      },
    ],
  },

  // 2 ─── Old workshop with a clockmaker ────────────────────────────────────
  {
    id: 'cc-extra-02-clockmakers-workshop',
    title: 'The Clockmaker',
    genre: 'Descriptive Fiction',
    source: SOURCE_LINE,
    text: 'The workshop smelled of warm brass and old paper. From the door you could see only a thin path between the benches, the rest of the room being given over to clocks: clocks on shelves, clocks on hooks, clocks tipped on their sides waiting to be opened, their faces patient and pale. A long-case stood in the corner, its pendulum swinging with the slow, certain authority of a heartbeat that had decided not to stop. The clockmaker himself sat under a green-shaded lamp, and the lamp threw a small, careful pool of light onto his hands, as if it understood that the rest of the room had no need of being seen. His hands were the surprising part. They were not the hands of an old man at all. They moved with the neat, considered precision of a pianist between phrases, lifting a tiny brass wheel, weighing it, setting it down. He breathed slowly. He did not hurry. Around him the clocks ticked at slightly different speeds, and the difference made a soft, uneven music, like rain on different roofs. A boy might have found the noise unbearable. The clockmaker found it companionable. Every so often he would lift his head and listen, the way a shepherd listens to a far-off flock, checking that all of them were still there, still well, still keeping faith with the long, invisible business of measuring out the day.',
    questions: [
      {
        type: 'list4',
        marks: 4,
        prompt: 'List FOUR things you learn about the workshop in the passage.',
        options: [
          'It smells of brass and paper; it is full of clocks; it has a long-case clock in the corner; the clockmaker works under a green-shaded lamp',
          'It is large, empty, brightly lit and very modern',
          'It is on the second floor of a glass office building',
          'It is shared with a baker, a printer and a violin maker',
        ],
        correctIndex: 0,
        explanation:
          'AO1 List 4: each item is directly retrievable from the text. The smell, the abundance of clocks, the long-case clock and the green-shaded lamp are all stated outright.',
      },
      {
        type: 'language',
        marks: 8,
        prompt:
          'What is the effect of comparing the clockmaker\'s hands to those of "a pianist between phrases"?',
        options: [
          'It suggests his hands are clumsy and untrained',
          'It elevates the craft to something artistic — implying skill, restraint, and a sense of tempo and care',
          'It implies he is also a professional musician',
          'It suggests the workshop is full of music students',
        ],
        correctIndex: 1,
        explanation:
          'AO2 language: the simile borrows the precision and musicality of pianism. It frames clockmaking as an art form requiring rhythm, control and patience.',
      },
      {
        type: 'structure',
        marks: 4,
        prompt:
          'How does the writer structure the passage to draw the reader towards the clockmaker?',
        options: [
          'The passage starts with the wider room (smell, clocks, long-case), then narrows to the lamp, then to the hands, then to the man himself',
          'It starts with the clockmaker speaking, then describes a thunderstorm, then introduces a customer',
          'It is a list of repair instructions in numbered order',
          "It is structured as a flashback to the clockmaker's childhood",
        ],
        correctIndex: 0,
        explanation:
          "AO2 structure: the passage uses a cinematic 'zoom-in', tightening from the room to the lamp's pool of light to the hands, mimicking the way an attentive customer might look around the workshop.",
      },
      {
        type: 'evaluation',
        marks: 20,
        prompt:
          'A reader said: "The writer makes craftsmanship feel almost sacred." How far do you agree?',
        options: [
          'Disagree — the workshop sounds chaotic and unpleasant',
          'Agree — the warm lexis ("companionable", "faith"), the heartbeat metaphor of the pendulum, and the careful, hushed sentences turn ordinary repair work into something dignified and quietly devotional',
          'Disagree — the clockmaker is presented as cruel',
          'Agree — but only because the workshop is described as a church',
        ],
        correctIndex: 1,
        explanation:
          "AO4 evaluation: the gentle religious register ('faith'), the heartbeat metaphor and the careful pacing collectively dignify the craft, supporting the reader's claim.",
      },
      {
        type: 'inference',
        marks: 2,
        prompt:
          'What does the comparison "the way a shepherd listens to a far-off flock" suggest about the clockmaker\'s relationship with his clocks?',
        options: [
          'He fears them and keeps his distance',
          'He treats them as living charges in his care, listening attentively to make sure each is well',
          'He plans to sell them all soon',
          'He has lost interest in his work',
        ],
        correctIndex: 1,
        explanation:
          'AO1 inference: the shepherd image implies attentive guardianship — the clocks are almost animate beings under his quiet watch.',
      },
    ],
  },

  // 3 ─── Winter market square at dusk ──────────────────────────────────────
  {
    id: 'cc-extra-03-winter-market-dusk',
    title: 'The Square at Dusk',
    genre: 'Descriptive Non-fiction',
    source: SOURCE_LINE,
    text: "By half past four the square had begun to go blue. The shop windows flicked on one after another, like candles being lit along a long table, and a thin steam rose from the chestnut seller's brazier and travelled, undecided, between the stalls. Children stood close to the warmth with their gloves held out, palms up, as though warming their hands at a small private fire that belonged to them alone. There was a smell of orange peel and pine and frying onions, and somewhere a brass band was tuning, the notes settling and unsettling themselves in the cold air. Stallholders called out without urgency, pleased with the slow drift of customers. A woman with a basket stopped to listen to the band; her face, lit from below by a string of yellow bulbs, looked for a moment like the face of a much younger woman, surprised by music. The cobbles were dark and shining. Above the rooftops, the first proper star had appeared, small and white and certain, and it seemed to have come out chiefly so that the children, when at last their parents called them home, would have something to point at on the way.",
    questions: [
      {
        type: 'list4',
        marks: 4,
        prompt: 'List FOUR things you learn about the market square from the passage.',
        options: [
          'It is dusk; there is a chestnut seller; a brass band is tuning; cobbles are wet and shining',
          'It is mid-morning; there is no music; the square is deserted; the stalls are empty',
          'It is summer; there is an outdoor swimming pool; the square is full of tourists; ice cream is sold',
          'It is dawn; the shops are still shut; there is heavy traffic; a market is being set up',
        ],
        correctIndex: 0,
        explanation:
          "AO1 List 4: time of day ('half past four... blue'), the chestnut brazier, the tuning band and the dark, shining cobbles are all explicitly stated.",
      },
      {
        type: 'language',
        marks: 8,
        prompt: 'How does the writer use language to convey the warmth of the square in the cold?',
        options: [
          'Through cold, clinical scientific vocabulary',
          'Through cosy sensory imagery (smells of orange, pine, frying onions), gentle similes ("like candles being lit") and small, intimate gestures (gloves held out as if to a "private fire")',
          'Through long lists of statistics about temperature',
          'Through aggressive, violent verbs',
        ],
        correctIndex: 1,
        explanation:
          'AO2 language: warmth is built through scent, soft simile and intimate physical detail rather than direct statement, drawing the reader into the experience.',
      },
      {
        type: 'structure',
        marks: 4,
        prompt: 'What structural shift takes place in the final sentence?',
        options: [
          'The focus lifts upwards from the cobbles and crowds to a single star above the rooftops, widening the perspective',
          'The narrative jumps to a different town entirely',
          'The writer begins a numbered list of stalls',
          'The passage abandons description and becomes dialogue',
        ],
        correctIndex: 0,
        explanation:
          'AO2 structure: the final sentence pans upward, contrasting the busy human-scale square with a single, distant star — a small change of scale that gives the closing image its quiet weight.',
      },
      {
        type: 'evaluation',
        marks: 20,
        prompt:
          'A reader said: "This passage makes an ordinary winter evening feel magical." How far do you agree?',
        options: [
          'Disagree — the writer makes the evening sound miserable and grey',
          "Agree — through golden lighting imagery, the band's music, the moment of the woman appearing younger and the well-placed final star, the writer transforms an ordinary scene into something gently enchanted",
          'Disagree — nothing happens in the passage',
          'Agree — but only because there is a magician performing in the square',
        ],
        correctIndex: 1,
        explanation:
          'AO4 evaluation: the supporting evidence (lighting, music, the transformative moment, the final star) shows clearly that the writer enchants an everyday scene.',
      },
      {
        type: 'inference',
        marks: 2,
        prompt:
          'What does the description of the woman\'s face — "the face of a much younger woman, surprised by music" — imply?',
        options: [
          'She is angry that the band is playing',
          'Music has briefly returned her to a memory or feeling from earlier in her life',
          'She is afraid of brass instruments',
          'She has never heard music before',
        ],
        correctIndex: 1,
        explanation:
          'AO1 inference: the phrase suggests music is acting as a small, gentle time-machine, momentarily lifting age from her face.',
      },
    ],
  },

  // 4 ─── Botanical garden after rain ───────────────────────────────────────
  {
    id: 'cc-extra-04-botanical-garden-after-rain',
    title: 'After the Rain',
    genre: 'Descriptive Non-fiction',
    source: SOURCE_LINE,
    text: 'When the rain stopped, the gardens began very quietly to shine. Every leaf carried its own pale reservoir of light. Drops trembled along the undersides of the ferns and slipped, one by one, onto the gravel with a small considered tap, like the punctuation of a careful writer. The greenhouse roof, which a moment before had been hammered upon, now steamed gently in the returning sun. Inside, the air was thick and sweet, and the orchids breathed out a scent so light you could only catch it in the second after you stopped trying. A blackbird, encouraged by the new quiet, began to sing on the rim of an iron urn. It did not sing for an audience. It sang, perhaps, because the rain had washed the world and the song fitted neatly into the space. A gardener crossed the path with a barrow, his boots leaving dark crescents on the gravel that filled themselves in slowly behind him. He did not whistle, and he did not hurry. The garden, freshly rinsed, had given him too much to look at, and he was the kind of man who knew that a thing properly looked at must be looked at slowly.',
    questions: [
      {
        type: 'list4',
        marks: 4,
        prompt: 'List FOUR things you learn about the gardens in the passage.',
        options: [
          'It has just stopped raining; there are ferns and gravel paths; a greenhouse contains orchids; a blackbird sings on an iron urn',
          'It is winter and snow covers everything; there are no birds; the greenhouse is broken; the paths are concrete',
          'There is a large fountain; an orchestra is playing; the garden is closed to visitors; a wedding is taking place',
          'There are camels; the garden is in a desert; there is no water; nothing grows',
        ],
        correctIndex: 0,
        explanation:
          'AO1 List 4: each fact (rain just stopped, ferns and gravel, orchids in the greenhouse, blackbird on the urn) is explicit in the passage.',
      },
      {
        type: 'language',
        marks: 8,
        prompt:
          'How does the writer use language to suggest the garden is responsive — almost alive?',
        options: [
          'Through cold, technical horticultural vocabulary',
          'Through gentle personification (the gardens "began very quietly to shine"), comparison of dripping water to "the punctuation of a careful writer", and the orchids that "breathed out" their scent',
          'Through angry, violent verbs and shouting',
          'Through a list of Latin plant names',
        ],
        correctIndex: 1,
        explanation:
          "AO2 language: subtle personification ('shine', 'breathed out') and the writerly punctuation simile turn the garden into something quietly conscious.",
      },
      {
        type: 'structure',
        marks: 4,
        prompt: 'How does the writer use sentence length and pacing in the passage?',
        options: [
          'Long, slow sentences mirror the unhurried recovery of the garden, while occasional short observations (e.g. about the blackbird) act as small, focused close-ups',
          'Every sentence is exactly the same length, creating a monotonous rhythm',
          'The passage is written entirely as bullet points',
          'The passage is written in single-word fragments to feel rushed',
        ],
        correctIndex: 0,
        explanation:
          'AO2 structure: the patient, unfurling syntax mirrors the patient, unfurling garden — and the shorter observational sentences act like still-frames within the slow movement.',
      },
      {
        type: 'evaluation',
        marks: 20,
        prompt:
          'A student said: "The writer rewards close, quiet attention more than excitement." How far do you agree?',
        options: [
          'Disagree — the passage is dramatic and full of action',
          'Agree — the writer celebrates small, easily missed details (the orchid scent only caught when you stop trying, the blackbird singing for itself, the gardener who knows things must be "looked at slowly")',
          'Disagree — the writer is bored throughout',
          'Agree — but only because the gardener is asleep',
        ],
        correctIndex: 1,
        explanation:
          "AO4 evaluation: the writer repeatedly elevates quiet, slow noticing as a value — the orchid line and the gardener\'s patience are direct evidence.",
      },
      {
        type: 'inference',
        marks: 2,
        prompt:
          'What does the description of the gardener\'s footprints "filling themselves in slowly behind him" suggest?',
        options: [
          'The gravel is quicksand and dangerous',
          'The gravel is wet and loose, gently settling — and, more figuratively, the garden absorbs and erases human passage, suggesting its quiet self-sufficiency',
          'The gardener is invisible',
          'It is snowing again',
        ],
        correctIndex: 1,
        explanation:
          'AO1 inference: the literal detail is rain-loosened gravel; the figurative reading is that the garden continues, indifferent and self-renewing, after the human has passed through.',
      },
    ],
  },

  // 5 ─── Mountain shepherd's morning ──────────────────────────────────────
  {
    id: 'cc-extra-05-mountain-shepherd-morning',
    title: 'The Shepherd Wakes',
    genre: 'Descriptive Fiction',
    source: SOURCE_LINE,
    text: "The shepherd woke before the valley had remembered itself. The single window of his stone hut showed a pale, undecided grey, neither night nor morning, and the air on his face had the clean cold of high places. He lay still for a moment to listen. Somewhere below, a sheep coughed. Somewhere further below, a stream ran on, as it always had, repeating its one long sentence to no one in particular. He rose. He pulled on his boots, knotted the laces with the unthinking exactness of a man who had done it ten thousand times, and broke a piece of yesterday's bread for his pocket. The dog watched him from the rug with an attention so complete it amounted to a kind of love. Outside, the mountain was waiting. The sky had begun to lighten over the eastern ridge, and the first rim of pale gold lay along the rocks like a thin warm blanket someone had placed there in the dark. The shepherd crossed the yard, opened the gate, and the flock — already gathered, already murmuring — began to flow uphill ahead of him, a moving, woolly weather of its own. He did not need to count them yet. He could feel that they were all there, the way a player can feel, without looking, that every string of his instrument is in tune.",
    questions: [
      {
        type: 'list4',
        marks: 4,
        prompt: "List FOUR things you learn about the shepherd's morning in the passage.",
        options: [
          "He wakes before dawn in a stone hut; he eats yesterday's bread; he has a dog; he leads a flock uphill",
          'He wakes at midday in a hotel; he eats a hot breakfast; he has no animals; he stays inside',
          'He drives to a city; he eats in a restaurant; he meets a friend; he attends a meeting',
          'He sleeps through the morning; the flock leaves without him; he loses his boots; he stays in bed',
        ],
        correctIndex: 0,
        explanation:
          "AO1 List 4: pre-dawn wake-up in a stone hut, yesterday's bread, the dog, and the flock moving uphill are all explicit.",
      },
      {
        type: 'language',
        marks: 8,
        prompt:
          'What is the effect of the simile "a moving, woolly weather of its own" used to describe the flock?',
        options: [
          'It suggests the sheep are dangerous and stormy',
          'It captures both the soft visual mass of the flock and its slow, atmospheric drift across the landscape — making them feel like a natural phenomenon rather than discrete animals',
          'It implies it is raining heavily',
          'It is meant literally — clouds are made of sheep',
        ],
        correctIndex: 1,
        explanation:
          'AO2 language: comparing the flock to weather merges the animals with the landscape, suggesting both their density and their natural, almost meteorological movement.',
      },
      {
        type: 'structure',
        marks: 4,
        prompt: 'How does the writer use a "still / moving" structural pattern in the passage?',
        options: [
          "It opens in stillness (the shepherd lying, listening), then moves through quiet preparation, then opens out into the expansive movement of the flock — mirroring the shepherd's own gathering of energy",
          "It is structured entirely around the dog's thoughts",
          'It is a series of disconnected fragments with no order',
          'It begins at full speed and slows down to nothing',
        ],
        correctIndex: 0,
        explanation:
          'AO2 structure: the deliberate stillness-to-motion arc mirrors waking itself — the body, the cottage, then the world widening outward.',
      },
      {
        type: 'evaluation',
        marks: 20,
        prompt:
          'A reader said: "The passage makes routine work feel deeply skilled." How far do you agree?',
        options: [
          'Disagree — the writer presents the shepherd as careless and lazy',
          "Agree — the unthinking exactness of the laces, the player-and-instrument simile for the flock, and the dog's devoted gaze all turn ordinary chores into the marks of mastery",
          'Disagree — the shepherd has no skills',
          'Agree — but only because the shepherd uses dangerous machinery',
        ],
        correctIndex: 1,
        explanation:
          'AO4 evaluation: the writer repeatedly frames habit as competence, with the musical instrument simile being the strongest single piece of evidence.',
      },
      {
        type: 'inference',
        marks: 2,
        prompt:
          'What does the line "the stream ran on... repeating its one long sentence to no one in particular" suggest about the mountain world?',
        options: [
          'That the mountains are noisy and crowded',
          'That nature here continues independently of any human listener — old, patient, indifferent and yet companionable',
          'That the stream is broken and needs fixing',
          'That the shepherd dislikes the sound',
        ],
        correctIndex: 1,
        explanation:
          'AO1 inference: the personifying line frames nature as continuous and self-sufficient, setting up the shepherd as a small, attentive figure inside something much larger.',
      },
    ],
  },

  // 6 ─── Busy harbour at dawn ─────────────────────────────────────────────
  {
    id: 'cc-extra-06-busy-harbour-dawn',
    title: 'Harbour at Dawn',
    genre: 'Descriptive Non-fiction',
    source: SOURCE_LINE,
    text: 'By the time the first light arrived, the harbour was already awake. Engines coughed and steadied. Ropes slapped against masts. Somewhere a winch was complaining about the cold. The boats, crowded together along the quay, knocked gently against each other as if reminding themselves that they were not alone. Gulls had begun their argument with the day, wheeling above the fish-house roof, their voices sharpened by hunger. A man in yellow oilskins crossed the quay with a coil of rope on his shoulder, walking with the slow, planted stride of a person whose balance has been earned. He nodded to no one in particular. Everyone here was busy, and busyness was a kind of greeting. From the open door of the bait shed came a smell that was both sharp and familiar, salt and rust and engine oil bound together by something living. A girl, no older than eight, sat on an upturned crate threading bright orange floats onto a line, her tongue caught between her teeth in concentration. Behind her, the sea was beginning to take colour, turning from a tin grey to something paler and more hopeful, and the first boat slipped out past the harbour wall as if testing whether the morning was ready to carry it.',
    questions: [
      {
        type: 'list4',
        marks: 4,
        prompt: 'List FOUR things you learn about the harbour in the passage.',
        options: [
          'Engines are running; gulls cry above a fish-house; a man in yellow oilskins crosses the quay; a young girl threads orange floats',
          'It is silent and empty; the boats are gone; nobody works there',
          'It is in the middle of a city; cars fill the quay; there are no boats',
          'It is a leisure marina with no fishing equipment and only tourists',
        ],
        correctIndex: 0,
        explanation:
          'AO1 List 4: each item is directly retrievable — engines, gulls, the oilskinned man, the child threading floats.',
      },
      {
        type: 'language',
        marks: 8,
        prompt:
          'What is the effect of the personification of the gulls — "had begun their argument with the day"?',
        options: [
          'It implies the gulls speak human language',
          'It captures both their constant, argumentative noise and a sense that the day itself is a presence they are confronting — making the harbour feel charged and alive',
          'It suggests the gulls are silent',
          'It tells us the gulls have a leader',
        ],
        correctIndex: 1,
        explanation:
          'AO2 language: the personification turns ambient screeching into a recognisable social drama, animating the scene and giving the dawn agency.',
      },
      {
        type: 'structure',
        marks: 4,
        prompt:
          'How does the writer use the pattern of short and long sentences in the opening of the passage?',
        options: [
          'A run of short sentences ("Engines coughed..." / "Ropes slapped..." / "Somewhere a winch was complaining...") creates a quick, busy rhythm that imitates the harbour\'s scattered noises, before longer sentences slow the passage to focus on individual figures',
          'The passage is written in one long unbroken sentence',
          'The passage uses only questions',
          'Every sentence is exactly the same length, creating monotony',
        ],
        correctIndex: 0,
        explanation:
          'AO2 structure: the snap of short opening sentences gives the harbour its sonic clutter; the longer sentences slow into character close-ups.',
      },
      {
        type: 'evaluation',
        marks: 20,
        prompt:
          'A reader said: "The writer makes the harbour feel like a place where everyone belongs to a quiet shared world." How far do you agree?',
        options: [
          'Disagree — the writer presents the harbour as hostile and divided',
          'Agree — the line "busyness was a kind of greeting", the boats nudging "as if reminding themselves they were not alone", and the inclusion of the unnamed working girl all build a sense of unspoken, communal belonging',
          'Disagree — there are no people in the passage',
          'Agree — but only because everyone is shouting at each other',
        ],
        correctIndex: 1,
        explanation:
          'AO4 evaluation: the social texture is built indirectly — through gestures, shared work, and small images of mutual presence rather than dialogue.',
      },
      {
        type: 'inference',
        marks: 2,
        prompt: 'What does the description of the man\'s "slow, planted stride" suggest about him?',
        options: [
          'He is injured and struggling to walk',
          'He is highly experienced — a person whose body has adapted to working on shifting decks and slippery stone',
          'He is in a great hurry',
          'He is a tourist who has just arrived',
        ],
        correctIndex: 1,
        explanation:
          "AO1 inference: the phrase 'balance has been earned' is the giveaway — his walk is the result of long practice on unstable surfaces.",
      },
    ],
  },

  // 7 ─── Attic full of old books ──────────────────────────────────────────
  {
    id: 'cc-extra-07-attic-of-old-books',
    title: 'The Attic',
    genre: 'Descriptive Fiction',
    source: SOURCE_LINE,
    text: 'The attic smelled, more than anything, of patient paper. Light came in through one small dormer window, and the dust hung in the slanted column of it like fine silver weather. Books were everywhere. They stood on shelves, leaned against shelves, lay in tilted stacks on the floorboards, and propped each other up with the trustfulness of old friends who have agreed not to fall. A few had slipped from the upper rows and landed face-down, their pages spread, looking like small grounded birds. The girl climbed the ladder slowly, half because the rungs creaked, half because she did not want to disturb whatever it was the room contained. At the top, she stood quite still. The silence was not empty. It was the kind of silence that a long-occupied room makes, full of the shapes of past attention — of all the readers who had sat there, turning pages, breathing slowly, drifting. She crossed to the window and put her hand on a worn green spine. The cover was cool. The lettering had almost rubbed away. She did not yet know what the book was, but she knew, with the obstinate certainty of children, that the book had been waiting to be picked up — and that this, today, was its turn.',
    questions: [
      {
        type: 'list4',
        marks: 4,
        prompt: 'List FOUR things you learn about the attic in the passage.',
        options: [
          'It smells of old paper; light comes through one small dormer window; books are everywhere; some books have fallen face-down',
          'It is brightly lit by electric lamps; there are no books; it is freshly painted; it is empty',
          'It is full of old furniture; there is a piano in the corner; the floor is carpeted; there is central heating',
          'It is on the ground floor; it has no roof; it is a kitchen; it contains a stove',
        ],
        correctIndex: 0,
        explanation:
          'AO1 List 4: smell, the dormer window, the abundance of books and the fallen face-down books are all explicitly stated.',
      },
      {
        type: 'language',
        marks: 8,
        prompt:
          'How does the writer use language to make the attic feel inhabited even though no one else is there?',
        options: [
          'Through aggressive, military vocabulary',
          'Through metaphors of community ("the trustfulness of old friends"), the personifying detail of fallen books "like small grounded birds", and the description of a silence "full of the shapes of past attention" — collectively suggesting the room remembers its readers',
          'Through descriptions of crowds of visitors',
          'Through a long list of book titles',
        ],
        correctIndex: 1,
        explanation:
          'AO2 language: the writer animates the room with companionable images and a sense of layered, remembered presence rather than literal occupants.',
      },
      {
        type: 'structure',
        marks: 4,
        prompt:
          "What is the structural effect of ending the passage on the girl's hand on the worn green spine?",
        options: [
          'It widens out into a panoramic landscape view',
          'It narrows the focus from the whole atmospheric room down to a single, intimate gesture, creating a sense of beginning — as if the rest of the story is about to start with that single book',
          'It closes the story conclusively, with nothing more to come',
          'It introduces a new, unrelated character',
        ],
        correctIndex: 1,
        explanation:
          "AO2 structure: the zoom from room to dust to silence to the single book primes the reader for a personal story to begin — a classic 'inciting object' structure.",
      },
      {
        type: 'evaluation',
        marks: 20,
        prompt:
          'A student said: "The writer presents books as patient, almost living companions." How far do you agree?',
        options: [
          'Disagree — the writer presents the books as worthless rubbish',
          'Agree — books "prop each other up", a chosen book has been "waiting to be picked up", and the silence itself is layered with the presence of past readers; the cumulative effect makes the books feel sentient and welcoming',
          'Disagree — there are no books in the passage',
          'Agree — but only because the books literally speak aloud',
        ],
        correctIndex: 1,
        explanation:
          "AO4 evaluation: the writer's choices repeatedly grant the books a quiet, patient personhood, supporting the student's claim with strong textual evidence.",
      },
      {
        type: 'inference',
        marks: 2,
        prompt:
          "What does the girl's slow climb up the ladder reveal about her attitude to the room?",
        options: [
          'She is bored and unwilling to be there',
          'She feels a kind of reverence — she senses the room contains something she does not want to disturb',
          'She is afraid the ladder will collapse and is purely focused on safety',
          'She is in a great hurry',
        ],
        correctIndex: 1,
        explanation:
          "AO1 inference: the narrator explicitly notes she climbs slowly because she does not want to disturb 'whatever it was the room contained' — a respectful, curious posture.",
      },
    ],
  },

  // 8 ─── Forest in autumn ─────────────────────────────────────────────────
  {
    id: 'cc-extra-08-forest-in-autumn',
    title: 'The Wood in October',
    genre: 'Descriptive Non-fiction',
    source: SOURCE_LINE,
    text: 'The wood in October is a slow fire. The beech leaves had turned the colour of new copper, and the light that came down between them fell in long, considered shafts, as if measured out by hand. The air smelled of cold earth and crushed apples. Underfoot, the leaves had begun to compose themselves into that soft, generous layer that gives back nothing of a footstep but a small dry breath. Squirrels worked above, busy and unbothered. A wren turned its head sideways at the sound of approach, then dismissed it. Higher up, where the canopy began to thin, the sky showed in scraps of blue, like fragments of a forgotten promise. There were sudden, surprising spaces — clearings, where the ground was bright with bracken gone the colour of fox fur — and there were shut, secretive places, where the trunks crowded together and the light gave up. A walker, passing through, would feel the wood quietly inviting different speeds of attention: now slow, now still, now quick. By the time the path reached the brook, the year had already begun to put itself away, leaf by leaf, with the patient courtesy of a host clearing the table.',
    questions: [
      {
        type: 'list4',
        marks: 4,
        prompt: 'List FOUR things you learn about the wood from the passage.',
        options: [
          'The beech leaves have turned copper; the air smells of cold earth and apples; squirrels are working above; there are clearings full of bracken',
          'The wood is in spring bloom; there is no wildlife; the path is concrete; there are park benches everywhere',
          'It is an indoor garden centre; there are price tags on plants; staff are stocking shelves; it is winter',
          'It is summer; the leaves are bright green; the wood is full of campers; there is a swimming pool',
        ],
        correctIndex: 0,
        explanation:
          'AO1 List 4: copper beech leaves, the autumnal smell, the working squirrels and the bracken-bright clearings are all explicit.',
      },
      {
        type: 'language',
        marks: 8,
        prompt: 'What is the effect of the opening metaphor "The wood in October is a slow fire"?',
        options: [
          'It implies the wood is genuinely on fire and dangerous',
          'It encapsulates the autumn colour as a kind of burning, and the slow drift of the season as something gradual rather than violent — setting the imaginative tone for the whole passage',
          'It suggests the wood is being cleared by foresters',
          'It implies cold weather is coming and the wood is freezing',
        ],
        correctIndex: 1,
        explanation:
          'AO2 language: the metaphor compresses two ideas — the colour and the gradual change — into one striking image that the rest of the passage develops.',
      },
      {
        type: 'structure',
        marks: 4,
        prompt: "How does the writer use contrast structurally to convey the wood's variety?",
        options: [
          'By alternating between clearings ("sudden, surprising spaces") and shut, dim parts ("secretive places, where... the light gave up"), the writer mirrors the wood\'s shifts in mood and pace, inviting "different speeds of attention"',
          'By describing the same single tree over and over again',
          'By comparing the wood unfavourably to a city',
          'By using only positive descriptions throughout, with no contrast',
        ],
        correctIndex: 0,
        explanation:
          "AO2 structure: the open/closed contrast is a deliberate structural device, used to dramatise the wood's varied moods and the walker's changing attention.",
      },
      {
        type: 'evaluation',
        marks: 20,
        prompt:
          'A reader said: "The writer presents autumn as a season of graceful endings, not loss." How far do you agree?',
        options: [
          'Disagree — the writer presents autumn as bleak, aggressive and frightening',
          'Agree — the closing image of the year putting itself away "leaf by leaf, with the patient courtesy of a host clearing the table" frames endings as elegant and considerate, and earlier images (the "slow fire", the "considered shafts" of light) build the same sense of dignified, deliberate transition',
          'Disagree — autumn is barely mentioned in the passage',
          'Agree — but only because no leaves actually fall',
        ],
        correctIndex: 1,
        explanation:
          "AO4 evaluation: the writer's metaphor of the courteous host is the strongest single piece of evidence; the wider register of dignity and patience supports it.",
      },
      {
        type: 'inference',
        marks: 2,
        prompt:
          'What does the comparison of patches of sky to "fragments of a forgotten promise" suggest about the canopy?',
        options: [
          'That the trees are entirely bare and the sky is fully visible',
          'That the canopy almost hides the sky, and the small visible scraps of blue feel both beautiful and slightly mournful — hints of something larger and brighter, only partly remembered',
          'That the sky is grey and overcast',
          'That the sky is illuminated by aircraft lights',
        ],
        correctIndex: 1,
        explanation:
          'AO1 inference: the imagery couples beauty with loss — the canopy holds the sky away, leaving only suggestive glimpses.',
      },
    ],
  },

  // 9 ─── Desert oasis at noon ─────────────────────────────────────────────
  {
    id: 'cc-extra-09-desert-oasis-at-noon',
    title: 'The Oasis at Noon',
    genre: 'Descriptive Non-fiction',
    source: SOURCE_LINE,
    text: 'At noon the desert seemed to hold its breath. The dunes lay still under a sky bleached almost white, and even the small lizards had taken themselves into whatever shadow they could find. Heat shimmered along the horizon, dissolving the line between earth and air, so that the far hills appeared to float a little above the world. And then, as if the desert had quietly relented, the oasis came into view. The palms stood up like dark green flames, and beneath them the water lay in a calm, opaque pool, the colour of weak tea where the shade fell across it and almost silver where the sun struck. The contrast was startling. After miles of hot, patient distance, here was greenness, here was movement: the slow rotation of leaf shadow on sand, the hesitant flicker of a small bird flying down to drink. The air itself felt different. It was not cool, exactly, but it had been softened, as if passed through a cloth. A traveller stepping out of the heat would not, at first, speak. He would only stand at the edge of the shade and let his eyes admit what they had not been allowed for hours: that the world was capable of mercy, and that mercy, when it came, came small, and green, and quietly extravagant.',
    questions: [
      {
        type: 'list4',
        marks: 4,
        prompt: 'List FOUR things you learn about the oasis in the passage.',
        options: [
          'It contains palm trees; there is a calm pool of water; small birds come down to drink; it offers shade after the open desert',
          'It is in a forest; it is full of skiers; it is a busy market town; the water is frozen',
          'It is a service station beside a motorway; it sells petrol; it has a café; coaches are parked there',
          'It is at the top of a snowy mountain; it has a cable car; it is winter; nobody can reach it',
        ],
        correctIndex: 0,
        explanation:
          'AO1 List 4: palms, the still pool, the small bird drinking, and the contrast of shade after open desert are all explicit.',
      },
      {
        type: 'language',
        marks: 8,
        prompt:
          'How does the writer use language to dramatise the contrast between the desert and the oasis?',
        options: [
          'By describing them as identical',
          'By using bleached, suspended imagery for the desert ("sky bleached almost white", "held its breath") and rich, living imagery for the oasis ("dark green flames" of the palms, water like "weak tea" or "almost silver"), so that the move between them feels like a sudden change of register',
          'By using only abstract vocabulary',
          'By avoiding any descriptive detail',
        ],
        correctIndex: 1,
        explanation:
          'AO2 language: the desert is rendered in stilled, drained imagery; the oasis explodes into colour and motion. The contrast itself is the meaning.',
      },
      {
        type: 'structure',
        marks: 4,
        prompt:
          'How does the structure of the passage mirror the experience of arriving at the oasis?',
        options: [
          'The passage opens with a long, hot, motionless desert section, then pivots ("And then...") into the oasis description, so the reader experiences relief at the same structural moment as a traveller would',
          'The passage opens with the oasis and then describes a city',
          'The passage is structured around three different deserts, with no oasis',
          'The passage is a numbered list of supplies needed for travel',
        ],
        correctIndex: 0,
        explanation:
          "AO2 structure: the structural pivot — signalled by 'And then' — gives the reader the same shift the traveller feels.",
      },
      {
        type: 'evaluation',
        marks: 20,
        prompt:
          'A reader said: "The writer turns the discovery of water into something almost spiritual." How far do you agree?',
        options: [
          'Disagree — the oasis is described as ordinary and disappointing',
          'Agree — the closing reflection that "the world was capable of mercy" and the elevated, almost reverent register of "quietly extravagant" lift the moment beyond physical relief into something close to grace',
          'Disagree — there is no oasis in the passage',
          'Agree — but only because a religious ceremony takes place there',
        ],
        correctIndex: 1,
        explanation:
          "AO4 evaluation: the abstract language ('mercy', 'quietly extravagant') and the still, attentive figure of the traveller together create a near-spiritual register.",
      },
      {
        type: 'inference',
        marks: 2,
        prompt:
          'What does the line "the far hills appeared to float a little above the world" imply about the heat?',
        options: [
          'The hills are genuinely flying',
          'The heat is intense enough to bend the light, creating a mirage effect — visually disorienting and quietly unsettling',
          'It is in fact cold and the air is clear',
          'There are no hills in the passage',
        ],
        correctIndex: 1,
        explanation:
          "AO1 inference: the floating effect points to extreme heat-haze — a physical sign of the desert's hostility before the oasis appears.",
      },
    ],
  },

  // 10 ─── Lighthouse keeper's living room ─────────────────────────────────
  {
    id: 'cc-extra-10-lighthouse-keepers-living-room',
    title: "The Keeper's Room",
    genre: 'Descriptive Fiction',
    source: SOURCE_LINE,
    text: 'The room was small and warm and round. The walls curved with the wall of the tower, so that no piece of furniture quite sat flat against them, and every chair had been gently pushed by the architecture into facing the fire. A kettle muttered to itself on the iron stove. A neat row of books leaned in the bookcase, their spines rubbed soft by years of handling. On the table, a half-finished letter waited beside a saucer of tea that had long since gone cold. The keeper had not abandoned the letter; he had simply stepped away to attend to the lamp, as he did every evening, and the letter had patiently kept his place. Outside, the wind argued with the windows. Inside, the small clock on the mantelpiece ticked with the modest insistence of someone trying not to interrupt. Photographs stood in a careful line above the stove: a young woman at a railing, two children laughing at a beach, a much older couple arm in arm. The order of them suggested a life rather than a story, the way a string of buoys might suggest a safe channel without exactly explaining the sea. Above all of this, somewhere up the spiral stair, the great light was beginning its slow, faithful turn — the steady heartbeat of the building, sending its calm message far out across the dark water to anyone who needed it.',
    questions: [
      {
        type: 'list4',
        marks: 4,
        prompt: "List FOUR things you learn about the keeper's living room from the passage.",
        options: [
          'The room is small, warm and round; a kettle is on an iron stove; there is a half-finished letter on the table; photographs stand above the stove',
          'The room is large and square; it has no fire; the walls are bare; there is no furniture',
          'The room is on the ground floor of a city flat; it has a television; it is open-plan; it has glass walls',
          'The room is a hotel suite; it has a balcony; room service is delivering tea; there is no wind',
        ],
        correctIndex: 0,
        explanation:
          'AO1 List 4: the small warm round room, the kettle on the stove, the half-finished letter and the photographs are all explicitly described.',
      },
      {
        type: 'language',
        marks: 8,
        prompt:
          'What is the effect of the personification "the wind argued with the windows" alongside the description of the clock\'s "modest insistence"?',
        options: [
          'It makes the room feel like a war zone',
          'It contrasts the chaotic, raised voice of the weather outside with the polite, quiet, almost considerate sounds inside, sharpening the sense of the room as a small refuge',
          'It implies the windows are broken',
          'It suggests the clock is louder than the wind',
        ],
        correctIndex: 1,
        explanation:
          "AO2 language: the paired personifications create a deliberate contrast in register — wild outside, courteous inside — which emphasises the room's sheltering quality.",
      },
      {
        type: 'structure',
        marks: 4,
        prompt:
          'How does the final shift to the great light upstairs change the focus of the passage?',
        options: [
          'It pulls back from the small, domestic interior to the larger, public purpose of the lighthouse, framing the keeper\'s quiet life as part of a service that reaches "far out across the dark water"',
          'It introduces a completely new character',
          'It abandons the lighthouse and moves to a city',
          'It changes genre to a poem mid-passage',
        ],
        correctIndex: 0,
        explanation:
          'AO2 structure: the upward pivot reframes the domestic detail. The cosy room is shown to be the heart of a wider, life-saving function.',
      },
      {
        type: 'evaluation',
        marks: 20,
        prompt:
          'A reader said: "The writer presents the lighthouse keeper\'s life as small, ordered and quietly heroic." How far do you agree?',
        options: [
          'Disagree — the writer presents the keeper as careless and reckless',
          'Agree — the orderly photographs, the steady habits implied by the half-finished letter, and the closing image of the lamp as "the steady heartbeat of the building, sending its calm message" all combine to dignify a small, repetitive life as an act of quiet service',
          'Disagree — there is no keeper in the passage',
          'Agree — but only because the keeper performs daring rescues',
        ],
        correctIndex: 1,
        explanation:
          "AO4 evaluation: the writer's choices repeatedly link order, habit and care with a wider service, supporting the reader's claim of 'quietly heroic'.",
      },
      {
        type: 'inference',
        marks: 2,
        prompt:
          'What can you infer about the keeper from the line that the photographs "suggested a life rather than a story"?',
        options: [
          'That his life has been deliberately secret and dramatic',
          'That his life has been steady and ordinary in shape — marked more by continuity than by single dramatic events',
          'That he has no family',
          'That the photographs are forgeries',
        ],
        correctIndex: 1,
        explanation:
          "AO1 inference: the contrast between 'a life' and 'a story' implies a quietly continuous existence — patterned, not plot-driven.",
      },
    ],
  },
]

export default EXTRA_PASSAGE_BANK
